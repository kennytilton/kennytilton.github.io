(ns matrix.core
  (:require [clojure.browser.repl :as repl]
            [tiltontec.model.core :as md]
            [tiltontec.tag.html :as tag]
            [todo.matrix :as tmx]))


(enable-console-print!)

(tmx/matrix-build!)

(tmx/start-router)

(set! (.-innerHTML (.getElementById js/document "tagroot"))
      (tag/to-html (tmx/dom)))
