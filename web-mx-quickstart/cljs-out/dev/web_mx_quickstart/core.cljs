(ns ^:figwheel-hooks web-mx-quickstart.core
  (:require
    [goog.dom :as gdom]
    [goog.object :as gobj]
    [bide.core :as r]
    ;[tiltontec.model.core :as md]
    [tiltontec.matrix.api
     :refer [with-mx-trace with-minfo with-minfo-std mx-type md-state
             matrix mpar mget mget? mset! mswap! mset! fasc fmu minfo
             cinfo cF cF+ cFn cFonce cI cf-freeze] :as mxapi]
    [tiltontec.web-mx.api
     :refer [evt-md target-value tag-dom-create style-string
             title img section h1 h2 h3 input footer p a b h4 u table th tr td
             blockquote span i label ul li div button br pre code]]

    [web-mx-quickstart.extra :as extra]
    [web-mx-quickstart.lesson :as lesson]))

(defn quick-start-toolbar []
  (div {:style {:margin          0
                ;:background :LightYellow
                :overflow-y      :scroll
                :gap             "9px"
                :display         :flex
                :flex-direction  :column
                :align-items     :start
                :justify-content :start}}
    {:name :anchor-toolbar}
    (into []
      (for [{:keys [menu title route] :as lesson} (mget (fasc :quick-start me :dbg :tbar-get-less) :lessons)]
        (a {:href     (str "#/" (name route))
            :selector menu
            :style    (cF (let [curr-route (mget (fasc :quick-start me :dbg :tbar-get-route) :route)]
                            (merge
                              {:min-width       "128px"
                               :text-decoration :none
                               :border-width    "2px"
                               :border-style    :solid
                               :border-color    "white"
                               :font-weight     "normal"}
                              (when (= route curr-route)
                                {:border-color "orange"
                                 :font-weight  "bold"}))))
            :class    :pushbutton}
          {:name (str "anchor-" route)}
          (or menu title))))))

(defn quick-start [lesson-title lessons]
  #_ (h2 {:style (cF {:color :red})} "The speed is now...")
  (div {:style {:height         "100vh" :margin 0 :padding 0
                :display        :flex
                :flex-direction :horizontal}}
    {:name            :quick-start
     :route           (cI :intro)
     :router-starter  (fn []
                        (r/start! (r/router
                                    (into [] (concat [["/" :intro]]
                                               (map (fn [{:keys [route]}]
                                                      [(str "/" (name route)) route])
                                                 lessons))))
                          {:default     :ignore
                           :on-navigate (fn [route params query]
                                          (when-let [mtx @matrix]
                                            (mset! mtx :route route)
                                            #_(with-minfo
                                                [(or (:name @me) :anon)
                                                 (md-state me)
                                                 (mx-type me)]
                                                (with-mx-trace [:kids :tag :quiesce]
                                                  (mset! mtx :route route)))))}))
     :selected-lesson (cF+ [:debug false]
                        (let [route (mget me :route)]
                          (some (fn [lesson]
                                  (when (= route (:route lesson))
                                    ;; (prn :selected-lesson-checks-lesson (:route lesson) lesson)
                                    lesson)) lessons)))
     :keydowner       (cF+ [:watch (fn [_ me new _ _]
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
     :lessons         lessons
     :show-glossary?  (cI false)}

    (div {:style {:display         :flex
                  :flex-direction  :column
                  :height          "100%"
                  :margin          0
                  :padding         0
                  :min-width       "180px"
                  :align-items     :center
                  :justify-content :start
                  :gap             "1em"
                  :border-right    "4mm ridge orange"       ;; "rgba(211, 220, 50, .6)"
                  }}
      {:name :qs-dash}
      (span {:style {:font-size  "24px"
                     :padding    "18px"
                     :text-align :center}}
        lesson-title)
      (span "use <- or -> keys<br>&nbsp;")
      (quick-start-toolbar))

    (let [qstart me]
      (div
        (when-let [lesson (mget qstart #_(fasc :quick-start me :me? true :dbg :sanity) :selected-lesson)]
          (div {:class :fade-in                             ;
                :style {:display        :flex
                        :overflow-y     :auto
                        :flex-direction :column
                        :padding        "4em"
                        :height         "100%"}}
            {:name :lesson}
            (h2 (:title lesson))
            (when-let [preamble (:preamble lesson)]
              (if (string? preamble)
                (blockquote {:class :preamble} preamble)
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
                     :onclick #(mswap! qstart :show-glossary? not)}
                (if (mget qstart :show-glossary?)
                  "Hide Glossary" "Show Glossary"))
              (div {:style (cF (str "display:" (if (mget qstart :show-glossary?)
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
                             (p elt))))))))))))

(defn main [mx-builder]
  (println "[main]: loading app")

  (let [root (gdom/getElement "app")
        ;; ^^^ "app" must be ID of DIV defined in index.html
        app-matrix (mx-builder)
        app-dom (tag-dom-create app-matrix)]
    (reset! matrix app-matrix)
    (set! (.-innerHTML root) nil)
    (gdom/appendChild root app-dom)

    (when-let [router-starter (mget? app-matrix :router-starter)]
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
