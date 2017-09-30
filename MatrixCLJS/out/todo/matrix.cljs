(ns todo.matrix
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]
            [bide.core :as r]
            [tiltontec.util.core :refer [xor now]]
            [tiltontec.cell.base :refer [unbound ia-type *within-integrity*]]
            [tiltontec.cell.core :refer-macros [c? c?n c?once] :refer [c-in]]


            [tiltontec.model.core :refer [md-get md-reset! mxi-find mxu-find-class kid-values-kids] :as md]
            [tiltontec.tag.html :refer [io-clear-storage to-html  mxa-find-tag dom-tag tag-dom
                                        mxa-find-type dom-has-class dom-ancestor-by-tag]]
            [tiltontec.tag.gen
             :refer-macros [ on-evt!  section header h1 input footer p a span label ul li div button]
             :refer [dom-tag]]
            [todo.todo :refer [make-todo td-title
                               td-completed td-upsert td-delete load-all
                               td-id td-toggle-completed]]))

(def matrix
  "Populated ny matrix-build! with the root of the application matrix."
  (atom nil))

(declare landing-page mx-todos mx-todo-items
         mx-find-matrix mx-todo-lookup event-to-mx mx-route)



(defn matrix-build! []
  (reset! matrix (md/make ::todoApp
                   :route (c-in nil)
                   :todos (c?once (todo.todo/todo-list me))
                   :dom (c?once (binding [md/*par* me]
                                         ;; todo macro-ize
                                   (landing-page))))))

(defn dom [] ;; API
      (md/md-get @matrix :dom))

;;; --- routing -------------------------------

(def router (r/router [["/" :All]
             ["/active" :Active]
             ["/completed" :Completed]]))

(defn on-navigate [route params query]
    (md-reset! @matrix :route (name route)))

(defn start-router []
      ;; (io-clear-storage)
      (r/start! router {:default :todo/all
                        :on-navigate on-navigate}))

;;; --- the landing page -------------------------------

; - subroutines serve to break up the page into manageable chunks
(declare todo-list-item toggle-all dashboard-footer  todo-entry)

(defn landing-page []
    [(section {:class "todoapp"}
        (header {:class "header"}
          (h1 {} "todos")
          (todo-entry))

        (section {:class "main"
                  :hidden (c? (zero? (count (mx-todo-items me))))
                  }
           (toggle-all)
                 ;; Next we address the problem ReactJS handles by allowing
                 ;; keys on items of a list of elements, namely how not to
                 ;; regen all just because one comes or goes.
           (ul {:class "todo-list"
                :kid-values (c? (let [route (md-get (mx-find-matrix me) :route)]
                                     ;; todo figure out where they want filtering done
                                     (mx-todo-items me)))
                :kid-key #(md-get % :todo)
                :kid-factory todo-list-item}
            (kid-values-kids me cache)))

        (dashboard-footer))

     ;; no need to hide everything behind a function....
     (footer {:class "info"}
       (p {} "Double-click a todo to edit it.")
       (p {} "Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")
       (p {} "Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))])

;; --- to-do Entry -------------------------

(defn todo-entry []
      (input {:class       "new-todo" :autofocus true
          :placeholder "What needs to be done?"
          :onkeypress  (on-evt! todo.matrix/todo-process-on-enter)}))

(defn todo-process-on-enter [e]
  (when (= (.-key e) "Enter")
      (let [raw (.-value (.-target e))
            title (str/trim raw)]
         (if (= title "")
           (when (pos? (count raw))
                 (.alert js/window "A reminder to do nothing? We like it! But no."))
           (md-reset! (mx-todos) :items-raw
                      (conj (md-get (mx-todos) :items-raw)
                            (make-todo {:title title}))))
         (set! (.-value (.-target e)) ""))))

;; -- toggle-all -------------------------------------

(defn toggle-all []
  [(input {:id "toggle-all" :class "toggle-all" :input-type "checkbox"
                     :action (c? (if (some (complement td-completed) (mx-todo-items me))
                                   :complete :uncomplete))
                     :checked (c? (= (md-get me :action) :uncomplete))})
   (label {:for "toggle-all"
           :onclick (on-evt! todo.matrix/td-completed-toggle-all)}
          "Mark all as complete")])

(defn td-completed-toggle-all [event]
      (let [input (mxu-find-class (event-to-mx event) "toggle-all")
            action (md-get input :action)]
           (doseq [td (mx-todo-items)]
              (md-reset! td :completed (when (= action :complete) (now))))))

;; --- to-do list LI ---------------------------------

(defn todo-list-item [me td]
      (li {:todo td
        :name :todo-li
        :class (c? (if (td-completed td) "completed" ""))
        :display (c? (let [route (mx-route me)]
                          (cond
                            (nil? route) unbound
                            (or (= route "All")
                                (xor (= route "Active")
                                     (md-get td :completed))) "block"
                            :default "none")))}

          (div {:class "view"}
             (input {:class "toggle" :input-type "checkbox"
                      :checked (c? (md-get td :completed))
                      :onclick (on-evt! todo.matrix/todo-toggle-completed (td-id td))})

             (label {:ondblclick (on-evt! todo.matrix/todo-start-editing)}
                    (td-title td))

             (button {:class "destroy"
                       :onclick (on-evt! todo.matrix/delete-by-key (td-id td))}))

          (input {:class "edit"
             :value (c?n (td-title td))
             :onblur (on-evt! todo.matrix/todo-edit (td-id td))
             :onkeydown (on-evt! todo.matrix/todo-edit (td-id td))})))

(defn delete-by-key [event id] ;; todo can we get this inline at leasT?
  (td-delete (mx-todo-lookup id)))

(defn todo-toggle-completed [event id]
      (let [is (mx-todo-items)
            td (some (fn [td] (when (= id (td-id td)) td)) is)]
        (td-toggle-completed td)))

(defn todo-start-editing [e]
  ;; I am tempted to make this more declarative, but leave as is
  ;; as an example of how MatrixJS allows straight JS coding
  (let [lbl (event-to-mx e)
        li (mxa-find-tag lbl "li")
        edt-dom (.item (.getElementsByClassName (tag-dom li) "edit") 0)]
     (.add (.-classList (tag-dom li)) "editing")
     (.focus edt-dom)
       ;; no one gets this right any more...
     (.setSelectionRange edt-dom 0 (.-length (.-value edt-dom)))))

(defn todo-edit [e td-key]
      ;; this all might be done more declaratively
  (when-not *within-integrity* ;; todo is this still a problem? If so, handle better
    (let [edom (.-target e)
          title (str/trim (.-value edom))
          td (mx-todo-lookup td-key (event-to-mx e))
          li-dom (dom-ancestor-by-tag edom "li")]
       (cond
         (or (and (= (.-type e) "blur")
                  (dom-has-class li-dom "editing"))
             (= (.-key e) "Enter"))
         (do
           (if (= title "")
             (td-delete td)
             (md-reset! td :title title))
           (set! (.-value edom) title) ;; in case trimmed
           (.remove (.-classList li-dom) "editing"))

         (= (.-key e) "Escape")
         (do (set! (.-value edom) (td-title td))
             (.remove (.-classList li-dom) "editing"))))))

;; --- dashboard -------------------------------------

(defn dashboard-footer []
  (footer {:class "footer"
            :hidden  (c? (zero? (count (mx-todo-items me))))}

    (span {:class "todo-count"
            :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                       (count (remove td-completed (mx-todo-items me)))))})


    (ul {:class "filters"}
        (for [[label route] [["All", "#/"], ["Active","#/active"], ["Completed","#/completed"]]]
          (li {} (a {:href route :selector label
                      :selected (c? (= (:selector @me) (mx-route me)))
                      :class (c? (if (md-get me :selected)
                                   "selected" ""))}
                   label))))

    (button {:class "clear-completed"
              :hidden (c? (zero? (count (filter td-completed (mx-todo-items me)))))
              :onclick (on-evt! todo.matrix/clear-completed)}
      "Clear completed")))

(defn clear-completed [e]
  (doseq [td (filter td-completed (mx-todo-items))]
    (td-delete td)))

;; --- dependency-establishing accessors ---------------------

(defn mx-route [mx]
      (md-get (mx-find-matrix mx) :route))

(defn mx-todos
      ([]
        (assert @matrix)
        (md-get @matrix :todos))

      ([mx]
        (if (nil? mx)
          (mx-todos)
          (let [mtrx (mx-find-matrix mx)]
               (assert mtrx)
               (md-get mtrx :todos)))))

(defn mx-todo-items
      ([]
        (mx-todo-items nil))
      ([mx]
        (assert (mx-todos mx) "mti")
        (md-get (mx-todos mx) :items)))

(defn mx-todo-lookup
      ([id] (mx-todo-lookup id nil))
      ([id mx]
        (some (fn [td] (when (= id (td-id td)) td))
              (mx-todo-items mx))))

(defn event-to-mx [e]
      (dom-tag (.-target e)))

(defn mx-find-matrix [mx]
      (mxa-find-type mx ::todoApp))