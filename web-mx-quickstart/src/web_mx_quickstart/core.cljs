(ns ^:figwheel-hooks web-mx-quickstart.core
  (:require
    [goog.dom :as gdom]
    [goog.object :as gobj]
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
    (doall (for [{:keys [menu title] :as demo} (mget (fasc :demos me) :demos)]
             (button {:class   :pushbutton
                      :cursor  :finger
                      :style   (cF (let [curr-demo (mget (fasc :demos me) :selected-demo)]
                                     {:min-width    "144px"
                                      :border-color (if (= demo curr-demo)
                                                      "orange" "white")
                                      :font-weight  (if (= demo curr-demo)
                                                      "bold" "normal")}))
                      :onclick (cF (fn [] (mset! (fmu :demos) :selected-demo demo)))}
               (or menu title))))))

(defn quick-start [demo-title start-demo-ix & demos]
  (div {}
    {:name           :demos
     :selected-demo  (cFn (nth (mget me :demos)
                            (cond
                              (neg? start-demo-ix) 0
                              (>= start-demo-ix (count demos)) (dec (count demos))
                              :else start-demo-ix)))
     :keydowner      (cF+ [:watch (fn [_ me new _ _]
                                    (.addEventListener js/document "keydown" new))]
                       (fn [evt]
                         (.stopPropagation evt)
                         (let [demos (mget me :demos)
                               demo (mget me :selected-demo)
                               curr-x (.indexOf demos demo)]
                           (prn :curr curr-x :key (.-key evt) :shift (.-shiftKey evt))
                           (when-let [new-x (case (.-key evt)
                                              "Home" 0
                                              "End" (dec (count demos))
                                              ("ArrowRight" "ArrowDown" "PageDown") (inc curr-x)
                                              ("ArrowLeft" "ArrowUp" "PageUp") (dec curr-x)
                                              nil)]
                             (when (<= 0 new-x (dec (count demos)))
                               (mset! me :selected-demo (nth demos new-x)))))
                         (prn :keydowner (.-key evt) (.-shiftKey evt) #_(gobj/getKeys evt))))
     :demos          demos
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
          demo-title)
        (span "use <- or -> keys<br>&nbsp;")

        (quick-start-toolbar))

      (when-let [demo (mget (fasc :demos me) :selected-demo)]
        (div {:style {:display        :flex
                      :flex-direction :column
                      :padding        "6px"}}
          (h1 (:title demo))
          (when-let [preamble (:preamble demo)]
            (if (string? preamble)
              (p {:class :preamble} preamble)
              (doall (for [elt preamble]
                       (p {:class :preamble} elt)))))
          (div {:style {:border-color "orange"
                        :border-style "solid"
                        :border-width "2px"}}
            ((:builder demo)))

          (pre {:class :lesson-code}
            (code {:style {:font-size "16px"}}
              (:code demo)))

          (div {:class :glossary}
            {:name :glossary}
            (span {:class   :pushbutton
                   :onclick #(mswap! (fasc :demos (evt-md %)) :show-glossary? not)}
              "Glossary")
            (div {:style (cF (str "display:" (if (mget (fasc :demos me) :show-glossary?)
                                               "block" "none")))}
              (extra/glossary)))

          (when-let [c (:comment demo)]
            (if (string? c)
              (p {:class :preamble} c)
              (doall (for [cx c]
                       (p {:class :preamble} cx)))))
          #_(when-let [ex (:exercise demo)]
              (blockquote {:class :exercise}
                (p (str "Give it a try. Modify <i>" (:ns demo "the code") "</i>."))
                (if (string? ex)
                  (p ex)
                  (doall (for [elt ex]
                           (p elt)))))))))))

(defn main [mx-builder]
  (println "[main]: loading")
  (let [root (gdom/getElement "app")
        ;; ^^^ "app" must be ID of DIV defined in index.html
        app-matrix (mx-builder)
        app-dom (tag-dom-create
                  (mget app-matrix :mx-dom))]
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)))

(main #(md/make ::intro
         :mx-dom (quick-start "Web/MX&trade;<br>Quick Start" 0
                   lesson/ex-tl-dr
                   lesson/ex-just-html
                   lesson/ex-and-cljs
                   lesson/ex-html-composition
                   lesson/ex-custom-state
                   lesson/ex-derived-state

                   lesson/ex-navigation
                   lesson/ex-handler-mutation
                   lesson/ex-watches
                   lesson/ex-watch-cc
                   ;; lesson/ex-async-throttle
                   lesson/ex-async-cat

                   lesson/ex-data-integrity
                   lesson/ex-in-review
                   ;;lesson/ex-ephemeral ;; too much?
                   #_{:title "Counter Omniscient" :builder counter-omniscience :code counter-omniscience-code}
                   #_{:title "Counter Omnipotent" :builder counter-omnipotent :code counter-omnipotent-code}
                   #_{:title "Reactivity All-In" :builder reactivity-all-in :code reactivity-all-in-code}
                   #_{:title "Mini test" :builder minitest :code minitest-code})))

;
;
;
;;; specify reload hook with ^:after-load metadata
;(defn ^:after-load on-reload []
;  ;; optionally touch your app-state to force rerendering depending on
;  ;; your application
;  ;; (swap! app-state update-in [:__figwheel_counter] inc)
;)
