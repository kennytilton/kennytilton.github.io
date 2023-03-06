(ns ^:figwheel-hooks web-mx-quickstart.core
  (:require
    [goog.dom :as gdom]
    [goog.object :as gobj]
    [bide.core :as r]
    [tiltontec.cell.core :refer [cF cF+ cFn cFonce cI cf-freeze]]
    [tiltontec.model.core
     :refer [mx-par mpar mget mset! mswap! mset! mxi-find mxu-find-name fasc fmu fm!] :as md]
    [tiltontec.web-mx.gen :refer [evt-md target-value]]
    [tiltontec.web-mx.gen-macro
     :refer [title img section h1 h2 h3 input footer p a b h4 u table th tr td
             blockquote span i label ul li div button br pre code]]
    [tiltontec.web-mx.html :refer [tag-dom-create]]
    [web-mx-quickstart.extra :as extra]
    [web-mx-quickstart.lesson :as lesson]))

(defn quick-start-toolbar []
  (div {:class :toolbar
        :style {:flex-direction  :column
                :align-items     :start
                :justify-content :start
                }}
    (into []
      (for [{:keys [menu title route] :as lesson} (mget (fasc :quick-start me) :lessons)]
             (a {:href     (str "#/" (name route))
                 :selector menu
                 :style (cF (let [curr-route (mget (fasc :quick-start me) :route)]
                              (merge
                                {:min-width    "144px"
                                 :text-decoration :none
                                 :border-width "2px"
                                 :border-style :solid
                                 :border-color "white"
                                 :font-weight  "normal"}
                                (when (= route curr-route)
                                  {:border-color "orange"
                                   :font-weight  "bold"}))))
                 :class    :pushbutton}
               (or menu title))))))

(defn quick-start [lesson-title lessons]
  (div {}
    {:name           :quick-start
     :route (cI :intro)
     :router-starter (fn []
                       (r/start! (r/router
                                   (into [] (concat [["/" :intro]]
                                                (map (fn [{:keys [route]}]
                                                       [(str "/" (name route)) route])
                                                  lessons))))
                         {:default     :ignore
                          :on-navigate (fn [route params query]
                                         (when-let [mtx @md/matrix]
                                           (mset! mtx :route route)))}))
     :selected-lesson  (cF (let [route (mget me :route)]
                           (some (fn [lesson]
                                   (when (= route (:route lesson))
                                     lesson)) lessons)))
     :keydowner (cF+ [:watch (fn [_ me new _ _]
                                   (.addEventListener js/document "keydown" new))]
                      (fn [evt]
                        (let [lessons (mget me :lessons)
                              lesson (mget me :selected-lesson)
                              curr-x (.indexOf lessons lesson)]
                          (when-let [new-x (case (.-key evt)
                                             "Home" 0
                                             "End" (dec (count lessons))
                                             ("ArrowRight" "ArrowDown" "PageDown") (inc curr-x)
                                             ("ArrowLeft" "ArrowUp" "PageUp") (dec curr-x)
                                             nil)]
                            (when (<= 0 new-x (dec (count lessons)))
                              (.stopPropagation evt)
                              (.preventDefault evt)
                              (mset! me :route (:route (nth lessons new-x))))))))
     :lessons          lessons
     :show-glossary? (cI false)}

    (div {:style {:display :flex
                  :gap     "2em"}}
      (div {:style {:display         :flex
                    :flex-direction  :column
                    :align-items     :center
                    :justify-content :start
                    :border-right    "4mm ridge orange"     ;; "rgba(211, 220, 50, .6)"
                    }}
        (span {:style {:font-size      "24px"
                       :margin-bottom  "1em"
                       :padding-bottom "1em"
                       :text-align     :center}}
          lesson-title)
        (span "use <- or -> keys<br>&nbsp;")

        (quick-start-toolbar))

      (when-let [lesson (mget (fasc :quick-start me) :selected-lesson)]
        (div {:class :fade-in
              :style {:display        :flex
                      :flex-direction :column
                      :padding        "6px"}}
          (h1 (:title lesson))
          (when-let [preamble (:preamble lesson)]
            (if (string? preamble)
              (p {:class :preamble} preamble)
              (doall (for [elt preamble]
                       (p {:class :preamble} elt)))))
          (div {:class :lesson}
            ((:builder lesson)))

          (pre {:class :lesson-code}
            (code {:style {:font-size "14px"}}
              (:code lesson)))

          (div {:class :glossary}
            {:name :glossary}
            (span {:class   :pushbutton
                   :onclick #(mswap! (fasc :quick-start (evt-md %)) :show-glossary? not)}
              "Glossary")
            (div {:style (cF (str "display:" (if (mget (fasc :quick-start me) :show-glossary?)
                                               "block" "none")))}
              (extra/glossary)))

          (when-let [c (:comment lesson)]
            (if (string? c)
              (p {:class :preamble} c)
              (doall (for [cx c]
                       (p {:class :preamble} cx)))))
          #_(when-let [ex (:exercise lesson)]
              (blockquote {:class :exercise}
                (p (str "Give it a try. Modify <i>" (:ns lesson "the code") "</i>."))
                (if (string? ex)
                  (p ex)
                  (doall (for [elt ex]
                           (p elt)))))))))))

(defn main [mx-builder]
  (println "[main]: loading")
  (let [root (gdom/getElement "app")
        ;; ^^^ "app" must be ID of DIV defined in index.html
        app-matrix (mx-builder)
        app-dom (tag-dom-create app-matrix)]
    (reset! md/matrix app-matrix)
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)

    (when-let [router-starter (md/mget app-matrix :router-starter)]
      (router-starter))))

(def lessons [lesson/ex-tl-dr
              lesson/ex-just-html
              lesson/ex-and-cljs
              lesson/ex-html-composition
              lesson/ex-custom-state
              lesson/ex-derived-state
              lesson/ex-navigation
              lesson/ex-handler-mutation
              lesson/ex-watches
              lesson/ex-watch-cc
              lesson/ex-async-cat
              lesson/ex-data-integrity
              lesson/ex-in-review])

(main #(quick-start "Web/MX&trade;<br>Quick Start" lessons))

;
;;; specify reload hook with ^:after-load metadata
;(defn ^:after-load on-reload []
;  ;; optionally touch your app-state to force rerendering depending on
;  ;; your application
;  ;; (swap! app-state update-in [:__figwheel_counter] inc)
;)
