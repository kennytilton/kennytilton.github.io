(ns todomx.core
  (:require ;[clojure.browser.repl :as repl]
            ;[tiltontec.model.core :as md]
            [tiltontec.tag.html :as tag]
            [todomx.matrix :as tmx]
            [javelin.core
             :refer [cell? input? cell set-cell! lens alts! destroy-cell!
                                  constant? formula? formula]
             :refer-macros [cell= defc defc=]]))

(enable-console-print!)

;; (tag/io-clear-storage)

(tmx/matrix-build!)

(set! (.-innerHTML (.getElementById js/document "tagroot"))
      (tag/to-html (tmx/dom)))

(tmx/start-router)

