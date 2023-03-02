(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [hello-world.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote hello-world.core-test))