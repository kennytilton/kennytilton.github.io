(ns todomx.matrix
  (:require [cljs.pprint :as pp]
            [clojure.string :as str]
            [bide.core :as r]
            [tiltontec.util.core :refer [pln xor now]]
            [tiltontec.cell.base :refer [unbound ia-type *within-integrity*]]
            [tiltontec.cell.core :refer-macros [c? c?+ c?n c?+n c?once] :refer [c-in]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]


            [tiltontec.model.core :refer [mx-par md-get md-reset! mxi-find mxu-find-class kid-values-kids] :as md]
            [tiltontec.tag.html :refer [io-read io-upsert io-clear-storage to-html
                                        mxa-find-tag dom-tag tagfo tag-dom
                                        mxa-find-type dom-has-class dom-ancestor-by-tag]]
            [tiltontec.tag.gen
             :refer-macros [on-evt! section header h1 input footer p a span label ul li div button]
             :refer [dom-tag]]

            [todomx.todo :refer [make-todo td-title td-created
                                 td-completed td-upsert td-delete! load-all
                                 td-id td-toggle-completed!]]))


(def matrix
  "matrix-build! will populate this with the root of the application matrix."
  (atom nil))

(declare landing-page mx-todos mx-todo-items
         mx-find-matrix mx-todo-lookup event-to-mx mx-route)

(defn matrix-build! []

  ;; note that we are saving the app matrix (an atom itself) in an atom called matrix
  ;; so on the rare occasion we need to get to the app matrix we will see @matrix which
  ;; again returns the atom holding the root matrix node.

  (reset! matrix (md/make ::todoApp
                          ;; the spec wants the route persisted for some reason....
                          :route (c?+n [:obs (fn-obs    ;; fn-obs macro provides handy local vars....
                                               (when-not (= unbound old)
                                                 (io-upsert "todo-matrixcljs.route" new)))]
                                       (or (io-read "todo-matrixcljs.route") "All"))

                          ;; load all to-dos into an observable list....
                          :todos (c?once (todomx.todo/todo-list))

                          ;; build the dom once. From here on all changes are incremental
                          ;; via Tag library observers...
                          :dom (c?once (md/with-par me
                                         (landing-page))))))

(defn dom [] (md/md-get @matrix :dom))

;;; --- routing -------------------------------

(def router (r/router [["/" :All]
                       ["/active" :Active]
                       ["/completed" :Completed]]))

(defn on-navigate [route params query]
  (when @matrix
    (md-reset! @matrix :route (name route))))

(defn start-router []
  (r/start! router {:default     :ignore
                    :on-navigate on-navigate}))

;;; --- the landing page -------------------------------

(declare todo-list-item toggle-all dashboard-footer todo-entry)

;; Those subroutines serve to:
;; (1) break up the DOM generation into manageable chunks and
;; (2) keep handlers with their DOM.
;;
;; We do so selectively so we are not forever chasing around to find functionality.
;; e.g, the footer is trivial, short, and callback-free: no need to break it out.

(defn landing-page []
  [(section {:class "todoapp"}
            (header {:class "header"}
                    (h1 {} "todos")
                    (todo-entry))

            (section {:class  "main"
                      :hidden (c? (md-get (mx-todos me) :empty?))}
                     (toggle-all)

                     ;; Next we address the problem ReactJS handles by allowing
                     ;; keys on items of a list of elements, namely how not to
                     ;; re-gen all just because one comes or goes.
                     (ul {:class       "todo-list"
                          :kid-values  (c? (when-let [rte (mx-route me)]
                                             (sort-by td-created
                                                      (md-get (mx-todos me)
                                                              (case (mx-route me)
                                                                "All" :items
                                                                "Completed" :items-completed
                                                                "Active" :items-active)))))
                          :kid-key     #(md-get % :todo)
                          :kid-factory todo-list-item}

                         ;; cache is prior value for this implicit 'kids' slot, used for diffing
                         (kid-values-kids me cache)))

            (dashboard-footer))

   (footer {:class "info"}
           (p {} "Double-click a to-do list item to edit it.")
           (p {} "Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>.")
           (p {} "Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))])

;; --- to-do Entry -------------------------

(defn todo-entry []
  (input {:class       "new-todo"
          :autofocus   true
          :placeholder "What needs doing?"
          :onkeypress  (on-evt! todomx.matrix/todo-process-on-enter)}))

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
  ;; We add a DIV to the TodoMVC spec to provide a common parent for these
  ;; tightly coupled elements (and a good place for the 'action'). The spec just had them mingled in
  ;; with other elements.

  (div {
         ;; 'action' is an ad hoc bit of derived state that will be used to decide the
         ;; input HTML checked attribute and will also guide the label onclick handler.
         :action (c? (if (some (complement td-completed) (mx-todo-items me))
                       :complete :uncomplete))}
       (input {:id      "toggle-all" :class "toggle-all" :input-type "checkbox"
               :checked (c? (= (md-get (mx-par me) :action) :uncomplete))})

       (label {:for     "toggle-all"
               :onclick (c? (on-evt! todomx.matrix/td-completed-toggle-all))}
              "Mark all as complete")))

(defn td-completed-toggle-all [event]
  (let [action (md-get (mx-par (event-to-mx event)) :action)]
    (doseq [td (mx-todo-items)]
      (md-reset! td :completed (when (= action :complete) (now))))))

;; --- to-do list LI ---------------------------------

(defn todo-list-item [me td]
  (li {:todo    td
       ;; :name :todo-li
       :class   (c? (if (td-completed td) "completed" ""))
       :display (c? (let [route (mx-route me)]
                      (cond
                        (nil? route) unbound
                        (or (= route "All")
                            (xor (= route "Active")
                                 (md-get td :completed))) "block"
                        :default "none")))}

      (div {:class "view"}
           (input {:class   "toggle" :input-type "checkbox"
                   :checked (c? (md-get td :completed))
                   :onclick (on-evt! todomx.matrix/todo-toggle-completed (td-id td))})

           (label {:ondblclick (on-evt! todomx.matrix/todo-start-editing)}
                  (td-title td))

           (button {:class   "destroy"
                    :onclick (on-evt! todomx.matrix/delete-by-key (td-id td))}))

      (input {:class     "edit"
              :onblur    (on-evt! todomx.matrix/todo-edit (td-id td))
              :onkeydown (on-evt! todomx.matrix/todo-edit (td-id td))})))

(defn delete-by-key [event id]
  (td-delete! (mx-todo-lookup id)))

(defn todo-toggle-completed [event id]
  (let [tds (mx-todo-items)
        td (some (fn [td] (when (= id (td-id td)) td)) tds)]
    (td-toggle-completed! td)))

(defn todo-start-editing [e]
  ;; I am tempted to make this more declarative, but leave as is
  ;; as an example of how MatrixJS supports straight JS coding

  (let [lbl (event-to-mx e)                             ;; navigate from event target to corresponding Matrix object
        li (mxa-find-tag lbl "li")                      ;; search ascendants to find LI
        edt-dom (.item (.getElementsByClassName (tag-dom li) "edit") 0)] ;; another way to find Mxs

    ;; we got sneaky and stored the to-do as a property of the mx LI....
    (set! (.-value edt-dom) (td-title (md-get li :todo))) ;; JIT init edit field to TD title
    (.add (.-classList (tag-dom li)) "editing")
    (.focus edt-dom)

    ;; no one gets this bit of U/X right any more: select all text when starting to edit a populated field...
    (.setSelectionRange edt-dom 0 (.-length (.-value edt-dom)))))

(defn todo-edit [e td-key]
  (let [edom (.-target e)
        li-dom (dom-ancestor-by-tag edom "li")]

    ;; next bit arose when a second blur event arrived after we shut down
    ;; the editing on the field. We use the "editing" class as a flag that
    ;; the field is still being edited:

    (when (dom-has-class li-dom "editing")
      (let [title (str/trim (.-value edom))

            ;; we could have navigated to the mx LI and
            ;; just grabbed the to-do from that instead of:
            td (mx-todo-lookup td-key (event-to-mx e))]

        (cond
          (or (= (.-type e) "blur")
              (= (.-key e) "Enter"))
          (do
            (if (= title "")
              (td-delete! td)
              (md-reset! td :title title))
            (.remove (.-classList li-dom) "editing"))

          (= (.-key e) "Escape")
          ;; this might leave the edit field with garbage, but that
          ;; always gets initialized correctly when starting editing
          (.remove (.-classList li-dom) "editing"))))))

;; --- dashboard -------------------------------------

(defn dashboard-footer []
  (footer {:class  "footer"
           :hidden (c? (md-get (mx-todos me) :empty?))}

          (span {:class   "todo-count"
                 :content (c? (pp/cl-format nil "<strong>~a</strong>  item~:P remaining"
                                            (count (remove td-completed (mx-todo-items me)))))})


          (ul {:class "filters"}
              (for [[label route] [["All", "#/"], ["Active", "#/active"], ["Completed", "#/completed"]]]
                (li {} (a {:href     route :selector label
                           :selected (c? (= (:selector @me) (mx-route me)))
                           :class    (c? (if (md-get me :selected)
                                           "selected" ""))}
                          label))))

          (button {:class   "clear-completed"
                   :hidden  (c? (zero? (count (filter td-completed (mx-todo-items me)))))
                   :onclick (on-evt! todomx.matrix/clear-completed)}
                  "Clear completed")))

(defn clear-completed [e]
  (doseq [td (filter td-completed (mx-todo-items))]
    (td-delete! td)))

;; --- dependency-establishing accessors ---------------------

(defn mx-route [mx]
  (md-get (mx-find-matrix mx) :route))

(defn mx-todos
  "Given a node in the matrix, navigate to the root and read the todos. After
  the matrix is initially loaded (say in an event handler), one can pass nil
  and find the matrix in @matrix."
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
