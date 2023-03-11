(defproject web-mx-quickstart "0.1.0-SNAPSHOT"
  :description "The Official Web/MX Quickstart"
  :url "https://github.com/kennytilton/web-mx/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :dependencies [[org.clojure/clojure "1.11.0"]
                 [org.clojure/clojurescript "1.11.60"]
                 [org.clojure/data.json "2.4.0"]
                 [org.slf4j/slf4j-nop       "1.7.30"]
                 [com.cognitect/transit-cljs "0.8.264"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [funcool/bide "1.7.0"]
                 [clj-http "3.10.3"]
                 ;; [cljs-http "0.1.47-SNAPSHOT"]
                 [io.github.ruffnext/cljs-http "0.1.47"]
                 [cheshire "5.11.0"]
                 [com.taoensso/tufte "2.4.5"]
                 [com.tiltontec/matrix "5.0.0-SNAPSHOT"]
                 [com.tiltontec/web-mx "2.0.0-SNAPSHOT"]]

  :aliases {"fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "web-mx-quickstart.test-runner"]}

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "1.10.773"]
                                  [com.bhauman/figwheel-main "0.2.18"]
                                  ;; optional but recommended for REPL
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}}
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :source-paths ["src" "test" "target/classes"]
  :clean-targets ["out" "release" :target-path]
  :target-path "target")

