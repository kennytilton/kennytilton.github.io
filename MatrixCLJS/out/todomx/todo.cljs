(ns todomx.todo
  (:require
    [clojure.string :as str]
    [tiltontec.cell.base :refer [unbound ia-type]]
    [tiltontec.cell.core
     :refer-macros [c? c?n] :refer [c-in]]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make md-get md-reset!]]
    [tiltontec.util.core :as util :refer [pln now map-to-json json-to-map uuidv4]]
    [tiltontec.tag.html :refer [io-upsert io-read io-find io-truncate]]))

;;; HEADS UP! The TodoMVC spec does not require anuthing in this regard, but
;;; every implementation I looked at stores all Todos as a single blob in
;;; localStorage. This implementation stores/updates them individually. We
;;; also track a 'created' timestamp and use a 'delete' timestamp to support
;;; logical deletion.

(declare td-upsert td-completed load-all)

(def TODO_LS_PREFIX "todos-matrixcljs.")

(defn todo-list []
  (md/make ::todo-list
           :items-raw (c?n (load-all))
           :items (c? (doall (remove #(md-get % :deleted) (md-get me :items-raw))))

           ;; the TodoMVC challenge has a strange requirement that routes "go thru the
           ;; the model". Some of us just toggled the hidden attribute appropriately.
           ;; An acceptable example had the view examine the route and ask the model
           ;; for different subsets. Hopefully this passes muster:

           :items-completed (c? (doall (filter td-completed
                                               (md-get me :items))))
           :items-active (c? (doall (remove td-completed
                                            (md-get me :items))))
           :empty? (c? (zero? (count (md-get me :items))))))

(defn make-todo
  "Make a matrix incarnation of a todo on initial entry"
  [islots]

  (let [net-slots (merge
                    {:type      ::todo
                     :id        (str TODO_LS_PREFIX (uuidv4))
                     :created   (now)

                     ;; now wrap mutable slots as Cells...
                     :title     (c-in (:title islots))
                     :completed (c-in false)
                     :deleted   (c-in nil)})
        todo (apply md/make (flatten (into [] net-slots)))]

    (td-upsert todo)
    todo))

;;; --- now we get to dataflow/reactive/databinding ------------------

(defn td-created [td]
  ;; created is not a Cell because it never changes, so we do not go through md-get
  (:created @td))

; - straight accessors establishing dependency iff hit inside formulae)

(defn td-title [td]
  (md-get td :title))

(defn td-id [td]
  (md-get td :id))

(defn td-completed [td]
  (md-get td :completed))

; - dataflow triggering mutations

(defn td-delete! [td]
  (md-reset! td :deleted (now)))

(defn td-toggle-completed! [td]
  (md-reset! td :completed (when-not (td-completed td) (now))))

; - dataflow observer updates individual todos (their constructor creates them)

(defmethod observe-by-type [::todomx.todo/todo] [slot me new-val old-val c]
  ;; localStorage does not update columns, so regardless of which
  ;; slot changed, update the entire instance.

  ;; unbound as the prior value means this is the initial observation fired off
  ;; on instance initialization (to get them into the game, if you will), so skip upsert.

  (when-not (= old-val unbound)
    (td-upsert me)))


;;; --- storage internals ----------------

(defn td-to-map [todo]
  (into {} (for [k [:id :created :title :completed :deleted]]
             [k (md-get todo k)])))

(defn td-to-json [todo]
  (map-to-json (td-to-map todo)))

(defn reload-todo [islots]
  (let [net-slots (merge islots
                         {:type      ::todo
                          ;; this is weird: we next JIT wrap those reloaded slots
                          ;; we want as Cells for mutability
                          :title     (c-in (:title islots))
                          :completed (c-in (:completed islots false))
                          :deleted   (or (:deleted islots)
                                         (c-in nil))})]
    (apply md/make (flatten (into [] net-slots)))))

(defn td-from-json [json]                                   ;; todo elim this middleman
  ;; hhack -- elimmed :par :id42, hopefully not needed

  (reload-todo (json-to-map json)))

(defn td-upsert [td]
  (io-upsert (:id @td)
             (.stringify js/JSON
                         (td-to-json td))))

(defn td-load [id]
  (td-from-json
    (.parse js/JSON
            (io-read id))))

(defn load-all []
  (let [keys (io-find TODO_LS_PREFIX)]
    (map td-load (io-find TODO_LS_PREFIX))))

