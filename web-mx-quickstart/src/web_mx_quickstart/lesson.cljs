(ns web-mx-quickstart.lesson
  (:require
    [clojure.string :as str]
    [clojure.pprint :as pp]
    [cljs.core.async :refer [go <!]]
    [cljs-http.client :as client]
    [tiltontec.matrix.api :as mx
     :refer [with-cc cF cF+ cFonce cI cf-freeze c-value mget mset! mswap! mset! fasc fmu fm-navig]]
    [tiltontec.web-mx.api
     :refer [evt-md target-value
             img section h1 h2 h3 input footer p a
             span i label ul li div button br
             svg g circle p span div text radialGradient defs stop
             rect ellipse line polyline path polygon script use]]))

;;; --- 0. tl; dr

(defn tl-dr []
  (div {:class :intro}
    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>
    ;; <b>become HTML element attribute-values, with keywords => strings</b>

    (h2 "The count is now....")
    (span {:class :digi-readout} "42")
    ;; <b>^^ arguments following the optional maps become children, or text content</b>

    (svg {:width   64 :height 64
          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>
          :cursor  :pointer
          :onclick #(js/alert "Increment Feature Not Yet Implemented")}
      (circle {:cx     "50%" :cy "50%" :r "40%"
               :stroke "orange" :stroke-width 5
               :fill   :transparent})
      (text {:class       :heavychar
             :x           "50%" :y "70%"
             :text-anchor :middle} "+"))))

;;; --- 1. It's just html -------------------------------------

(defn just-html []
  (div {:class :intro}
    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>
    ;; <b>become HTML element attribute-values, with keywords => strings</b>

    (h2 "The count is now....")
    (span {:class :digi-readout} "42")
    ;; <b>^^ arguments following the optional maps become children, or text content</b>

    (svg {:width   64 :height 64
          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>
          :cursor  :pointer
          :onclick #(js/alert "Increment Feature Not Yet Implemented")}
      (circle {:cx     "50%" :cy "50%" :r "40%"
               :stroke "orange" :stroke-width 5
               :fill   :transparent})
      (text {:class       :heavychar
             :x           "50%" :y "70%"
             :text-anchor :middle} "+"))))

(def ex-just-html
  {:menu     "It's Just HTML"
   :route    :just-html
   :title    "It is just HTML"
   :ns       "tiltontec.example.quick-start.lesson/just-html"
   :builder  just-html
   :preamble "We just write HTML, SVG, and CSS, using CLJS workalikes."
   :comment  ["Web/MX introduces no framework of its own, it just manages the DOM."
              "Matrix just manages the state."
              "Aside from CLJS->JS, no preprocessor is involved."]
   :code     "(div {:class :intro}\n    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>\n    ;; <b>become HTML element attribute-values, with keywords => strings</b>\n\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    ;; <b>^^ arguments following the optional maps become children, or text content</b>\n\n    (svg {:width   64 :height 64\n          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>\n          :cursor :pointer\n          :onclick #(js/alert \"Increment Feature Not Yet Implemented\")}\n      (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n               :stroke \"orange\" :stroke-width 5\n               :fill   :transparent})\n      (text {:class       :heavychar\n             :x \"50%\" :y \"70%\"\n             :text-anchor :middle} \"+\")))"
   :exercise ["Feel free to experiment with other HTML or SVG tags."
              "Where HTML has <code>&lt;tag attributes*> children*&lt;/tag></code><br>...Web/MX has: <code>(tag {attributes*} children*)</code>."
              "If you find some HTML that does not translate to Web/MX, please send a failing example along."]})


;;; --- and-cljs --------------------------------------------------------

(defn and-cljs []
  (div {:class :intro}
    (h2 "The count is now...")
    (span {:class "digi-readout"} "42")
    (div {:style {:display :flex
                  :gap     "1em"}}
      ;; <b>children, below built into a vector using CLJS,
      ;; are automatically flattened, with any nils removed</b>
      (mapv (fn [opcode]
              (when (= 1 (count opcode))
                (button {:class   :push-button
                         :onclick #(js/alert
                                     (str "Opcode \"" opcode "\" RSN."))}
                  opcode)))
        ["-" "=" "+" "boom"]))))

(def ex-and-cljs
  {:menu     "...and CLJS"
   :route    :and-cljs
   :title    "...and CLJS" :builder and-cljs
   :preamble "It is just HTML <i>and</i> CLJS."
   :code     "(defn and-cljs []\n  (div {:class :intro}\n    (h2 \"The count is now...\")\n    (span {:class \"digi-readout\"} \"42\")\n    (div {:style {:display :flex\n                  :gap     \"1em\"}}\n      ;; <b>children, below built into a vector using CLJS,\n      ;; are automatically flattened, with any nils removed</b>\n      (mapv (fn [opcode]\n              (when (= 1 (count opcode))\n                (button {:class   :push-button\n                         :onclick #(js/alert\n                                     (str \"Opcode \\\"\" opcode \"\\\" RSN.\"))}\n                  opcode)))\n        [\"-\" \"=\" \"+\" \"boom\"]))))"
   :comment  ["In fact, all this code is CLJS. For example, DIV is a CLJS macro that returns
    a Clojure <i>proxy</i> for a DOM DIV."
              "Proxies are not VDOM. Proxies are long-lived models that manage their DOM incarnations as events unfold."]})

;;; --- components realized --------------------------------

(defn opcode-button [label onclick]
  (button {:class   :push-button
           :onclick onclick}
    label))

(defn math-keypad [& opcodes]
  (div {:style {:display :flex
                :gap     "1em"}}
    (mapv (fn [opcode]
            (opcode-button opcode
              #(js/alert "Feature Not Yet Implemented")))
      opcodes)))

(defn speedo-title-style [ok-color bad-color]
  ; even formulas can be functions
  (cF {:color (if (= (mget (fmu :speedometer) :answer) 42)
                ok-color bad-color)}))

(defn html-composition []
  (div {:class :intro}
    (span {:style (speedo-title-style :green :orange)}
      "The answer is")
    (span {:class :digi-readout}
        {:name :speedometer
         :answer 42}
        (str (mget me :answer)))
    (math-keypad "-" "=" "+")))

(def ex-html-composition
  {:menu     "Composable<br>Widgets"
   :route    :html-composition
   :title    "Functional GUI composition"
   :builder  html-composition
   :preamble "Because it is all CLJS, we can move sub-structure into functions."
   :code     "(defn opcode-button [label onclick]\n  (button {:class   :push-button\n           :onclick onclick}\n    label))\n\n(defn math-keypad [& opcodes]\n  (div {:style {:display :flex\n                :gap     \"1em\"}}\n    (mapv (fn [opcode]\n            (opcode-button opcode\n              #(js/alert \"Feature Not Yet Implemented\")))\n      opcodes)))\n\n(defn speedo-title-style [ok-color bad-color]\n  ; even formulas can be functions\n  (cF {:color (if (= (mget (fmu :speedometer) :answer) 42)\n                ok-color bad-color)}))\n\n(defn html-composition []\n  (div {:class :intro}\n    (span {:style (speedo-title-style :green :orange)}\n      \"The answer is\")\n    (span {:class :digi-readout}\n        {:name :speedometer\n         :answer 42}\n        (str (mget me :answer)))\n    (math-keypad \"-\" \"=\" \"+\")))"
   :comment  ["Where Hiccup distinguishes HTML from other code, Web/MX merges the two."]})

;;; --- custom-state ---------------------------------

(defn custom-state []
  (div {:class :intro}
    (h2 {:style (cF {:color :red})} "The speed is now...")
    (span {:class :digi-readout}
      ;; <b>An optional second map is for custom state.</b>
      {:mph 42}

      ;; <b>below: mget, short for "model-get", is the MX "getter" for model (object) properties</b>
      ;; <b>n.b. Tag children, even plain strings, always start out in an auto-genned formula.</b>
      (str (mget me :mph) " mph"))))

(def ex-custom-state
  {:menu     "Ad Hoc Properties"
   :route    :custom-state
   :title    "Ad hoc widget properties"
   :builder  custom-state
   :preamble "Widgets define ad hoc properties as needed."
   :code     "(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      ;; <b>An optional second map is for custom state.</b>\n      {:mph  42}\n\n      ;; <b>below: mget, short for \"model-get\", is the MX \"getter\" for model (object) properties</b>\n      ;; <b>n.b. Tag children, even plain strings, always start out in an auto-genned formula.</b>\n      (str (mget me :mph) \" mph\")))"
   :comment  ["Tag macros take an optional second map of ad hoc, custom properties. This map is identified
   positionally, so an empty first map must be coded even if no HTML attributes need specification."
              "Here, a generic <code>span</code> embodying a speedometer thinks it might usefully have a <code>{:mph 42}</code> property.
   We will put that to use soon."
              "<code>mget</code> can be used anywhere. Inside a formula, it transparently subscribes to the property being read."
              "Big picture: Matrix follows the <a href=https://en.wikipedia.org/wiki/Prototype-based_programming target=\"_blank\">prototype model</a>,\n
                     so generic tags can be re-used without subclassing."]})

;;; --- derived state ------------------------------

(defn speedometer []
  (span {:class :digi-readout}
    {:name        :speedometer
     :mph         65
     :too-fast?   (cF (> (mget me :mph) 55))
     ;; <b>'cF', or "cell formula", defines a computed/derived property.</b>
     ;; <b>'me' is lexically injected, like JS 'this' or Smalltalk 'self'.</b>
     ;; <b>Properties such as 'mph' are transparently subscribed.</b>
     :speedo-text (cF (str (mget me :mph) " mph"
                        (when (mget me :too-fast?) "<br>Slow down")))}
    (mget me :speedo-text)))

(defn derived-state []
  (div {:class :intro}
    (h2 "The speed is now...")
    (speedometer)))

(def ex-derived-state
  {:menu     "Functional<br>Properties"
   :route    :derived-state
   :title    "Functional, computed, reactive properties"
   :builder  derived-state
   :code     "(defn speedometer []\n  (span {:class :digi-readout}\n    {:name        :speedometer\n     :mph         65\n     :too-fast?   (cF (> (mget me :mph) 55))\n     ;; <b>'cF', or \"cell formula\", defines a computed/derived property.</b>\n     ;; <b>'me' is lexically injected, like JS 'this' or Smalltalk 'self'.</b>\n     ;; <b>Properties such as 'mph' are transparently subscribed.</b>\n     :speedo-text (cF (str (mget me :mph) \" mph\"\n                        (when (mget me :too-fast?) \"Slow down\")))}\n    (mget me :speedo-text)))\n\n(defn derived-state []\n  (div {:class :intro}\n    (h2 \"The speed is now...\")\n    (speedometer)))"
   :preamble "A property can be expressed as a function, or \"formula\", of other properties."
   :comment  ["The <code>too-fast?</code> property is fed by the reactive formula <code>(cF (> (mget me :mph) 55))</code>.
    When <code>mph</code> changes, <code>too-fast?</code> will be recomputed, then <code>speedo-text</code>."
              "Formula dependencies are automatically recorded, and adjusted anew on each evaluation.
               Together these trees of property-dependencies form the same coherent, one-way DAG found in Flux derivatives,
               but with developers doing no more than code derivations one property at a time."
              "Not just automatically detected, the Web/MX DAG extends all the way out to individual leaves
              of the application. Individual formulas can be provided for any widget
              attribute, and even individual style properties. Flux reactivity stops at the view function."
              "n.b. Different instances can have different formulas for the same property,
              extending further the \"prototype\" reusability win.</li>"]})

;;; --- Navigation ------------------------------
(defn speedometer-2 []
  (span {:class :digi-readout}
    {:name      :speedometer
     :mph       60
     :too-fast? (cF (> (mget me :mph)
                      (mget (fasc :speed-zone me) :speed-limit)))}
    (str (mget me :mph) " mph"
      (when (mget me :too-fast?) "<br>Slow down"))))

(defn navigation [geo-type]
  (div {:class :intro}
    {:name        :speed-zone
     :speed-limit 55}
    (h2 {}
      ;; <b>`fasc` searches up the parent chain only</b>
      {:text (cF (let [zone (fasc :speed-zone me)
                       speedo (fmu :speedometer)]
                   (pp/cl-format nil "The speed is now ~a mph over the speed limit."
                     (- (mget speedo :mph) (mget zone :speed-limit)))))}
      (mget me :text))
    (speedometer-2)))

(def ex-navigation
  {:menu     "Random Property<br>Access"
   :title    "Random property access"
   :route    :navigation
   :builder  navigation
   :preamble "A widget property formula can find and use any other app property."
   :code     "(defn speedometer-2 []\n  (span {:class :digi-readout}\n    {:name      :speedometer\n     :mph       60\n     :too-fast? (cF (> (mget me :mph)\n                      (mget (fasc :speed-zone me) :speed-limit)))}\n    (str (mget me :mph) \" mph\"\n      (when (mget me :too-fast?) \"Slow down\"))))\n\n(defn navigation [geo-type]\n  (div {:class :intro}\n    {:name        :speed-zone\n     :speed-limit 55}\n    (h2 {}\n      ;; <b>`fasc` searches up the parent chain only</b>\n      {:text (cF (let [zone (fasc :speed-zone me)\n                       speedo (fmu :speedometer)]\n                   (pp/cl-format nil \"The speed is now ~a mph over the speed limit.\"\n                     (- (mget speedo :mph) (mget zone :speed-limit)))))}\n      (mget me :text))\n    (speedometer-2)))"
   :comment  ["The headline needs the speed limit and current speed for its text. The speedometer readout needs
     the speed limit, to decide its text color."
              "We retrieve values from named other widgets, using navigation
     utilities such as <code>fasc</code> and <code>fmu</code> to avoid hard-coding paths."
              "<h3>About navigation</h3>MX proxy models are like the DOM; every element but the root has
              one parent and knows that parent as a fixed property,
               and every has zero or more children. Simple enough that, should a convoluted DOM organization arise,
               a dev could easily write their own navigation code."
              "Second, the provided <code>fm-navig</code> utility takes a \"test\" function as its first parameter, which by default
              tests the <code>:name</code> of every node for a match with the sought name. Here again a dev can write a test function
              of arbitrary complexity if needed."
              "Just to fill in the navigation picture a bit, <code>fm-navig</code> by default does a depth-first, left-right
               search starting at the provided start node, recursing up to the start's parent if necessary. So search for
               a name benefits from a natural scoping, and duplicate names arising from a row of similar components works out fine."
              "A cautionary note on navigation: a formula computing a widget's children has to use the option that tells
               fm-navig to search \"up only\", because otherwise it will ask for the children being computed and
               a \"cyclic dependency\" exception will be thrown."]})

;;; --- handler mutation -----------------------------

(defn plus-button [onclick]
  (svg {:width   64 :height 64 :cursor :pointer
        :onclick onclick}
    (circle {:cx     "50%" :cy "50%" :r "40%"
             :stroke "orange" :stroke-width 5
             :fill   :transparent})
    (text {:class       :heavychar :x "50%" :y "70%"
           :text-anchor :middle} "+")))

(defn speedometer-3 []
  (span {:class :digi-readout
         :style (cF {:color (if (> (mget me :mph) 55)
                              "red" "cyan")})}
    {:name    :speedometer
     ;; <b>If we intend to mutate a property, we must wrap the value in `cI`, short for "cell input"</b>
     :mph     (cI 42)
     :display (cF (str (mget me :mph) " mph"))}
    (mget me :display)))

(defn handler-mutation []
  (div {:class :intro}
    (h2 "The speed limit is 55 mph. Your speed is now...")
    (speedometer-3)
    (plus-button (fn [evt]
                   ;; <b>`evt-md` (event model) determines the MX proxy/model associated with a handler event.</b>
                   ;; <b>'mswap!' performs a Clojure 'swap!' on the ':mph' property of the model.</b>
                   (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))

(def ex-handler-mutation
  {:menu     "Random Property<br>Mutation"
   :title    "Random state DAG change"
   :ns       "tiltontec.example.quick-start.lesson/handler-mutation"
   :route    :dag-mutation
   :builder  handler-mutation
   :preamble "A widget event handler can mutate any property of any widget. Give it a try."
   :code     "(defn plus-button [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn speedometer-3 []\n  (span {:class :digi-readout\n         :style (cF {:color (if (> (mget me :mph) 55)\n                              \"red\" \"cyan\")})}\n    {:name    :speedometer\n     ;; <b>If we intend to mutate a property, we must wrap the value in `cI`, short for \"cell input\"</b>\n     :mph     (cI 42)\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn handler-mutation []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speedometer-3)\n    (plus-button (fn [evt]\n                  ;; <b>`evt-md` (event model) determines the MX proxy/model associated with a handler event.</b>\n                  ;; <b>'mswap!' performs a Clojure 'swap!' on the ':mph' property of the model.</b>\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))"
   :exercise "Add custom state <code>throttled</code>, with a formula that computes <code>true</code> if <code>mph</code> is
   fifty-five or more. Check <code>throttled</code> in the <code>onclick</code> handler before allowing increment."
   :comment  ["Wrapping <code>mph</code> value in <code>(cI 42)</code>, <code>cI</code> for \"cell Input\",
    lets us alter <code>mph</code> imperatively."
              "Here, an event handler navigates via
    utility <code>fmu</code> (search \"family up\") to the speedometer widget and increments it."]})

;;; --- watches ----------------------------------

(defn speedometer-4 []
  (span {:class   :digi-readout
         :onclick #(mswap! (evt-md %) :mph inc)}
    {:name    :speedometer
     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]
                              ;; <b>`cI`, cell input, takes a :watch option for an "on change" function</b>
                              (prn :watch-sees-change slot new-val)))
     :display (cF (str (mget me :mph) " mph"))}
    (mget me :display)))

(defn watches []
  (div {:class :intro}
    (h2 "The speed is now...")
    (speedometer-4)
    (plus-button (fn [evt]
                   (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))

(def ex-watches
  {:menu     "Watch Functions"
   :title    "Ad hoc, on-change \"watch\" functions per property"
   :route    :watches
   :builder  watches
   :preamble "Any property can use an on-change \"watch\" function for side-effects."
   :code     "(defn speedometer-4 []\n  (span {:class   :digi-readout\n         :onclick #(mswap! (evt-md %) :mph inc)}\n    {:name    :speedometer\n     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                              ;; <b>`cI`, cell input, takes a :watch option for an \"on change\" function</b>\n                              (prn :watch-sees-change slot new-val)))\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn watches []\n  (div {:class :intro}\n    (h2 \"The speed is now...\")\n    (speedometer-4)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))"
   :comment  ["A watch function fires when a cell value is initialized, and if the value changes. Watches are used to
   dispatch actions outside the Matrix, if only for logging/debugging, as here. (See the browser console.)"
              "Watches could also write to localStorage, or dispatch XHR requests. Web/MX itself, as an extreme example,
              does all its dynamic DOM maintenance in watch functions on HTML attributes."
              "Watch functions are dispatched non-deterministically–whenever state propagation happens to reach a property.
              If coordination of watch actions is required, a custom action handler can be specified."]})

;;; --- throttling watch -------------------

(defn speed-governor []
  (span {:class   :digi-readout
         :onclick #(mswap! (evt-md %) :mph inc)}
    {:name    :speedometer
     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]
                              (when (> new-val 55)
                                (js/alert "You have triggered the speed governor; auto-resetting to 45 mph.")

                                ;; <b>`with-cc` must wrap any DAG mutation by a watch function </b>
                                (with-cc :speed-governor
                                  ;; <b>'mset!', like its alias 'mreset!, performs a 'reset!' of a model property.</b>
                                  (mset! me :mph 45)))))
     :display (cF (str (mget me :mph) " mph"))}
    (mget me :display)))

(defn watch-cc []
  (div {:class :intro}
    (h2 "The speed limit is 55 mph. Your speed is now...")
    (speed-governor)
    (plus-button (fn [evt]
                   (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))

(def ex-watch-cc
  {:menu     "Watch Function<br>Mutation"
   :title    "Exception: how watches can mutate a Matrix property"
   :route    :watch-cc
   :builder  watch-cc
   :preamble "Watch functions must operate outside Matrix state flow, but <i>can</i> enqueue alterations
    of Matrix state for subsequent execution."
   :code     "(defn speed-governor []\n  (span {:class   :digi-readout\n         :onclick #(mswap! (evt-md %) :mph inc)}\n    {:name    :speedometer\n     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                              (when (> new-val 55)\n                                (js/alert \"You have triggered the speed governor; auto-resetting to 45 mph.\")\n\n                                ;; <b>`with-cc` must wrap any DAG mutation by a watch function </b>\n                                (with-cc :speed-governor\n                                  ;; <b>'mset!', like its alias 'mreset!, performs a 'reset!' of a model property.</b>\n                                  (mset! me :mph 45)))))\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn watch-cc []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speed-governor)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))"
   :comment  ["Try increasing the speed above 55. A watch function will intervene."
              "In our experience coding with Matrix, we frequently
   encounter opportunities for the app to usefully update state normally controlled by the user. The macro <code>(with-cc TAG & BODY)</code> schedules the <code>mset!</code> mutation for execution
              immediately after the current propagation, when state consistency can be guaranteed. TAG is just for debugging."]})

;;; --- data integrity ---------------------------------

(def ex-data-integrity
  {:title    "Data Integrity"
   :preamble ["Matrix silently builds an internal DAG at run time by noting when one property formula reads
    another property. When a property is subsequently modified, Matrix uses that derived DAG to ensure
     the following:"]
   :route    :data-integrity
   :builder  watch-cc
   :code     "(div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speed-governor)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))"
   :comment  ["<h3>The Data Integrity Contract</h3> When application code assigns a value to some
   input cell X, the Matrix engine guarantees:
              <br><br>&nbsp;&bull; recomputation exactly once of all and only state affected by the change to X, directly
              or indirectly through some intermediate datapoint. Note that if A depends on B, and B depends on X, when B
              gets recalculated it may come up with the same value as before. In this case A is not considered to have
              been affected by the change to X and will not be recomputed;
              <br><br>&nbsp;&bull; recomputations, when they read other datapoints, will see only values current
              with the new value of X. Example: if A depends on B and X, and B depends on X, when X changes and
               A reads B and X to compute a new value, B must return a value recomputed from the new value of X;
              <br><br>&nbsp;&bull; similarly, client watch functions will see only values current with the new value of X;
              <br><br>&nbsp;&bull; a corollary: should a client watch MSET! a datapoint Y, all the above will happen with
               values current with not just X, but also with the value of Y prior to the change to Y; and
              <br><br>&nbsp;&bull; deferred “client” code will see only values current with X and
              not any values current with some subsequent change to Y enqueued by an observer."]})

;;; --- ajax cats ---------------------------------------------------

(def cat-fact-uri "https://catfact.ninja/fact")

(defn async-cat []
  (div {:class "intro"}
    (span {:class :push-button}
      "Cat Chat")
    (plus-button #(mset! (fmu :cat-fact (evt-md %)) :get-new-fact? true))
    (div {:class :cat-chat}
      {:name          :cat-fact
       :get-new-fact? (cI false

                        ;; <b>The "plus" widget will set this property repeatedly
                        ;; to the same value, 'true'. Declaring it "ephemeral?" means
                        ;; it will fire each time that same value is set.</b>
                        :ephemeral? true)
       :cat-request   (cF+
                        ;; <b>`cF+`, or "cF plus", accepts cell options</b>
                        [:watch (fn [_ me response-chan _ _]
                                  (when response-chan
                                    (go (let [response (<! response-chan)]

                                          ;; <b>whenever the XHR responds,</b>
                                          ;; <b>we just `mset!` the "waiting" input cell</b>
                                          (with-cc :set-cat
                                            (mset! me :cat-response response))))))]
                        (when (mget me :get-new-fact?)
                          (client/get cat-fact-uri {:with-credentials? false})))
       :cat-response  (cI nil)}

      (if-let [response (mget me :cat-response)]
        (if (:success response)
          (span (get-in response [:body :fact]))
          (str "Error>  " (:error-code response)
            ": " (:error-text response)))
        "Click (+) to see a cat fact."))))

(def ex-async-cat
  {:menu     "Async Events"
   :title    "Async processing = normal mutation"
   :route    :cat-chat
   :builder  async-cat
   :preamble "An async response is just another \"input\" property mutation."
   :code     "(div {:class \"intro\"}\n    (span {:class :push-button}\n      \"Cat Chat\")\n    (plus-button #(mset! (fmu :cat-fact (evt-md %)) :get-new-fact? true))\n    (div {:class :cat-chat}\n      {:name          :cat-fact\n       :get-new-fact? (cI false\n\n                        ;; <b>The \"plus\" widget will set this property repeatedly\n                        ;; to the same value, 'true'. Declaring it \"ephemeral?\" means\n                        ;; it will fire each time that same value is set.</b>\n                        :ephemeral? true)\n       :cat-request   (cF+\n                        ;; <b>`cF+`, or \"cF plus\", accepts cell options</b>\n                        [:watch (fn [_ me response-chan _ _]\n                                  (when response-chan\n                                    (go (let [response (&lt;! response-chan)]\n\n                                          ;; <b>whenever the XHR responds,</b>\n                                          ;; <b>we just `mset!` the \"waiting\" input cell</b>\n                                          (with-cc :set-cat\n                                            (mset! me :cat-response response))))))]\n                        (when (mget me :get-new-fact?)\n                          (client/get cat-fact-uri {:with-credentials? false})))\n       :cat-response  (cI nil)}\n\n      (if-let [response (mget me :cat-response)]\n        (if (:success response)\n          (span (get-in response [:body :fact]))\n          (str \"Error>  \" (:error-code response)\n            \": \" (:error-text response)))\n        \"Click (+) to see a chat fact.\")))"
   :comment  ["The <code>cat-request</code> property creates and dispatches an XHR via <code>client/get</code>, producing a core.async channel
   to receive the response. Its watch function awaits the async response and feeds it into a conventional input property."
              "We handle async events by directing them to input Cells purpose-created to receive their output, where
              Matrix handles them like any other input. With a different XHR library not using core.async, we
              would use a similar approach with response handlers."
              "We used a special <code>:ephemeral?</code> qualifier for <code>:get-new-fact?</code> because
              it works like an event, something that happens and is over.
              Ephemeral properties revert to nil after propagating, without propagating that change."]})

(defn speedo-review []
  (span {:class :digi-readout
         :style (cF {:color (if (> (mget me :mph) 55)
                              "red" "cyan")})}
    {:name       :speedometer
     :mph        (cI 42)
     :air-drag   (cF (js/setInterval
                       #(mswap! me :mph * 0.98) 1000))
     :on-quiesce (fn [me]
                   ;; air-drag cF gets optimized away
                   ;; todo no optimize if :on-quiesce
                   (when-let [i (mget me :air-drag)]
                     (when (number? i)
                       (js/clearInterval i))))}
    (pp/cl-format nil "~8,1f mph" (mget me :mph))))

(defn in-review []
  (div {:class :intro}
    (h2 (let [excess (- (mget (fmu :speedometer) :mph) 55)]
          (pp/cl-format nil "The speed is ~8,1f mph ~:[over~;under~] the speed limit."
            (Math/abs excess) (neg? excess))))
    (speedo-review)
    (plus-button #(mswap! (fmu :speedometer (evt-md %)) :mph inc))))

(def ex-in-review
  {:menu     "Review"
   :title    "Review"
   :route    :in-review
   :builder  in-review
   :preamble ["Our closing example reprises all key Web/MX features."]
   :code     "(defn plus-button [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn speedo-review []\n  (span {:class :digi-readout\n         :style (cF {:color (if (> (mget me :mph) 55)\n                              \"red\" \"cyan\")})}\n    {:name     :speedometer\n     :mph      (cI 42)\n     :air-drag (letfn [(clear-intv [i]\n                         (when (number? i)\n                           (js/clearInterval i)))]\n                 (cF+ [:watch (fn [_ _ new prior _]\n                                (clear-intv prior))\n                       :on-quiesce (fn [c]\n                                     (clear-intv (c-value c)))]\n                   (js/setInterval\n                     #(mswap! me :mph * 0.98) 1000)))}\n    (pp/cl-format nil \"~8,1f mph\" (mget me :mph))))\n\n(defn in-review []\n  (div {:class :intro}\n    (h2 (let [excess (- (mget (fmu :speedometer) :mph) 55)]\n          (pp/cl-format nil \"The speed is ~8,1f mph ~:[over~;under~] the speed limit.\"\n            (Math/abs excess) (neg? excess))))\n    (speedo-review)\n    (plus-button #(mswap! (fmu :speedometer (evt-md %)) :mph inc))))"
   :comment  "
   <ul type=circle>
   <li>it looks and works like standard HTML, SVG, CSS, and CLJS;</li>
   <li>all state dependencies are property to property;</li>
   <li>the <code>H2</code> computes its text by navigating to the speedometer widget to read the <code>mph</code> value;</li>
   <li>the <code>(plus-button ...)</code> button navigates to the speedometer to mutate the <code>mph</code> value;</li>
   <li>the <code>air-drag</code> async interval mutates the DAG, reducing the <code>mph</code>;</li>
   <li>function <code>plus-button</code> demonstrates reusable composition.</li>
   </ul>"})

(def ex-tl-dr
  (merge ex-in-review
    {:menu     "Intro"
     :route    :intro
     :title    "Web/MX: Simplicity. Power. Fun."
     :builder  in-review
     :preamble ["<blockquote>Standard HTML + fine-grained reactivity, all the way down.<br><br>
     Declarative, functional, and transparent.<br><br>
     No VDOM, pre-processor, compiler, special view functions, setState, subscribe/notify, hooks,refs, or separate store.

                  </blockquote>

                  With <a target=_blank href='https://github.com/kennytilton/web-mx'>Web/MX</a>,
                  we build rich interfaces using a few key tricks:<br>
                <ul type=disc>
                <li>stick to <a target=_blank href='https://developer.mozilla.org/en-US/docs/Web/HTML'>standard</a> HTML, SVG, and CSS elements&hellip;</li>
                <li>&hellip;but give them ad hoc properties as needed;</li>
                <li>bring the DOM alive with reactive formulas for individual properties&hellip;</li>
                <li>&hellip;and maintain the DOM with fine-grained updates;</li>
                <li>let a formula access arbitrary other app state&hellip;</li>
                <li>&hellip;and let an async handler <i>change</i> any properties;</li>
                <li>support <i>watch</i> functions on properties, for side effects;</li>
                <li>make it all declarative and transparent; and</li>
                <li>because this is so much fun, create reactive wrappers for routing, XHR, localStorage&mdash;as much
                as we like.</li>
                 </ul>"
                "Minimalist, but it scales:
                <li>a simulated <a target=_blank href=\"http://tiltonsalgebra.com/#\">private Algebra tutor</a>;</li>
                <li>a browser for the monthly <a target=_blank
                href=\"https://kennytilton.github.io/whoishiring/\">AskHN: Who's Hiring?</a> question; and</li>
                <li>to a lesser degree, this <a target=_blank href=\"https://github.com/kennytilton/kennytilton.github.io/tree/master/web-mx-quickstart\">Quick Start</a>
                and the classic <a target=_blank and href='https://kennytilton.github.io/TodoFRP/'>TodoMVC.</li>"
                "In the remaining panels, we will expand on each idea above, most of which are manifested below.
                Hit (+) to fight the wind drag.<br>&nbsp;"]
     :comment  nil}))