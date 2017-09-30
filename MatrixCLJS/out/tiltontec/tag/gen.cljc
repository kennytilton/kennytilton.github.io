(ns tiltontec.tag.gen
  (:require [tiltontec.model.core :refer [make] :as md]
            [#?(:cljs cljs.pprint :clj clojure.pprint) :refer [pprint]]))

(def on-event-attr-template
  "(function () { ~a(event~{,~s~})})()")

(defmacro on-evt! [fname & cb-args]
  `(let [fn-name# (str/replace
                    (str/replace (str '~fname) \- \_) \/ \.)]
     (pp/cl-format nil on-event-attr-template fn-name# (list ~@cb-args))))

(def tag-dom-sid (atom -1))

(def id-js (atom {}))

(defn dom-tag [dom]
  (let [tag (get @id-js (.-id dom))]
    (assert tag (str "dom-tag did not find js for id " (.-id dom)
                     " of dom " dom))
    tag))

(defn make-tag [tag attrs c?kids]
  (let [dom-sid (swap! tag-dom-sid inc)
        js-obj (apply make
                      :type :tiltontec.tag.html/tag
                      :tag tag
                      (conj (vec (apply concat (seq attrs)))
                            :id dom-sid
                            :kids c?kids))]

    (swap! id-js assoc (str dom-sid) js-obj)
    js-obj))

(defmacro deftag [tag]
  (let [kids-sym (gensym "kids")
        tag-name (str tag)
        attrs-sym (gensym "attrs")]
    `(defmacro ~tag [~attrs-sym & ~kids-sym]
       `(tiltontec.tag.gen/make-tag ~~tag-name ~~attrs-sym
                                    (tiltontec.model.core/c?kids ~@~kids-sym)))))

(defmacro deftags [& tags]
  `(do ~@(for [tag tags]
           `(deftag ~tag))))

;;; This....
(declare section section label header footer h1 input p span a img ul li div button)

;;; ...avoids mistaken/benign warnings from this:
(deftags section section label header footer h1 input p span a img ul li div button)

;;; n.b. Above list of tags needs to be extended, or just use make-tag