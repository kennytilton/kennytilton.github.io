(ns tiltontec.tag.html
  (:require
    [clojure.string :as str]
    [cljs.pprint :as pp]
    [tiltontec.cell.base :refer [md-ref? ia-type unbound]]
    [tiltontec.cell.observer :refer [observe observe-by-type]]
    [tiltontec.cell.evaluate :refer [not-to-be not-to-be-self]]
    [tiltontec.model.core
     :refer-macros [the-kids mdv!]
     :refer [md-get fasc fm! make md-reset! backdoor-reset!]
     :as md]))

(defn tagfo [me]
  (select-keys @me [:id :tag :class :name]))

(defn mxa-find-tag
  "Search matrix ascendants only from node 'me' for first with given tag"
  [me tag]
  (fasc (fn [visited]
          ;; (println :fli-visits tag (:tag @visited) (= (:par @visited) nil))
          (= tag (:tag @visited))) me))

(defn mxa-find-type
  "Search matrix ascendants only from node 'me' for first with given tag"
  [me type]
  (assert me)
  (fasc (fn [visited]
          ;;(println :mxa-find-type type (ia-type visited))
          (= type (ia-type visited))) me))

(defn dom-has-class [dom class]
  (when dom
    (let [cs (.-classList dom)]
      (when cs
        (.contains (.-classList dom) class)))))

(defn dom-ancestor-by-class [dom class]
  (when dom
    (let [pn (.-parentNode dom)]
      (when pn
        (if (dom-has-class pn class)
          pn
          (dom-ancestor-by-class pn class))))))

(defn dom-ancestor-by-tag [dom tag]
  (when dom
    (let [pn (.-parentNode dom)]
      (when pn
        (if (= (.-tagName pn) (str/upper-case tag))
          pn
          (dom-ancestor-by-tag pn tag))))))

(declare to-attrs)

;; todo -- make this multifn and test tag type in default
(defn to-html [me]
  (cond
    (string? me) me
    (coll? me) (let [b$ (map to-html me)]
                 ;; (println :to-html-coll!!!!! (count me) :b$ b$)
                 (apply str b$))
    :default
    (let [h (pp/cl-format nil "<~a ~a>~@[~a~]~{~a~}</~0@*~a>"
                          (:tag @me) (to-attrs me)
                          (md-get me :content)
                          (map to-html (md-get me :kids)))]
      #_(when (= (:tag @me) "input")
          (println :genned h))
      h)))

(def +true-html+ {:input-type "type"})

(defn true-html [keyword]
  (or (keyword +true-html+)
      (name keyword)))

(defn to-attrs [me]
  (let [unblank (fn [s] (when (pos? (count s)) s))
        attr-keys [:class :hidden :placeholder :checked :disabled
                   :autofocus :href :input-type :for
                   :onclick :ondblclick :onkeypress :onblur :onmouseover
                   :onkeydown :id :value]
        style-keys [:display]]
    ;;(println :toattrs (keys @me))
    (let [ga (str/join " "
                       (for [[k v] (remove nil?
                                           (for [k attr-keys]
                                             (let [v (md-get me k)]
                                               ;;(when v (println k v))
                                               (when v [k v])))) #_(select-keys @me attr-keys)]
                         (if (some #{k} [:hidden :checked :disabled :autofocus])
                           (do
                             ;;(println :attr-boolean!! k v (nil? v))
                             (if v (name k) ""))
                           (pp/cl-format nil "~a='~a'" (true-html k) v))))
          css (str/join ";"
                        (for [[k v] (select-keys @me style-keys)]
                          (pp/cl-format nil "~a:~a" (name k) v)))]
      ;; (println :gas ga css (string? css))

      (let [fa (pp/cl-format nil "~@[~a~]~@[ style='~a'~]"
                             (unblank ga) (unblank css))]
        #_(when (= (:name @me) :todo-li) #_(pos? (count fa))
            (println :attrs!!!! fa (string? fa) (count fa)))
        fa))))

(defn tag-dom [me]
  ;; this will return nil in that fragile space in which the matrix
  ;; is coming to life but not yet installed in the dom
  (let [id (md-get me :id)]
    (assert id)
    ;;(println :dom-uding-id id)
    (or (md-get me :dom-cache)
        (if-let [dom (.getElementById js/document (str id))]
          (backdoor-reset! me :dom-cache dom)
          (println :no-element id :found)))))

(defn tag [me]
  (md-get me :tag))

(defmethod not-to-be [:tiltontec.tag.html/tag]
  [me]
  (doseq [k (:kids @me)]
    (when (md-ref? k)
      (not-to-be k)))
  (not-to-be-self me))

(defmethod observe [:kids :tiltontec.tag.html/tag] [_ me newv oldv _]
  (when (not= oldv unbound)
    ;;(println :obs-kids!!!! (md-get me :tag) (count newv) (count oldv))
    (when-not (tag-dom me)
      (println :obskids-me-notagdom (tagfo me) newv))
    (assert (tag-dom me) (str "No tag-dom in kids observer" (tagfo me)))

    (cond
      ;; todo: get sth like <label>Your name: <input>..etc </input></label> working
      (some #{(.-tagName (tag-dom me))} ["LABEL"])
      (do
        ;;(println :bam-ihtml-html!!! (tagfo me) newv)
        (set! (.-innerHTML (tag-dom me))
              (to-html newv)))

      :default
      (let [pdom (tag-dom me)
            frag (.createDocumentFragment js/document)]
        ;;(println :tag-kids-obs!!! (md-get me :tag) :newct (count newv) :oldct (count oldv))

        (doseq [oldk (clojure.set/difference (set oldv) (set newv))]
          (when-not (string? oldk)
            (not-to-be oldk)))

        ;;(println :installing-any-new-kids!!!!)

        (doseq [newk newv]
          (if (some #{newk} oldv)
            (do                                             ;; (println :moving-retianed-from-pdom-to-frag (tagfo newk))
              (.appendChild frag (.removeChild pdom (tag-dom newk))))
            (let [incubator (.createElement js/document "div")]
              (set! (.-innerHTML incubator) (to-html newk))
              (backdoor-reset! newk :dom-cache (.-firstChild incubator))
              ;;(println :moving-new-from-incubator-to-frag (tagfo newk))
              (let [new-dom (.removeChild incubator (.-firstChild incubator))]
                (.appendChild frag new-dom)))))

        (set! (.-innerHTML pdom) nil)
        (.appendChild pdom frag)))))

(def +global-attr+ (set [:class :checked :hidden]))
(def +inline-css+ (set [:display]))

(defmethod observe-by-type [:tiltontec.tag.html/tag] [slot me newv oldv _]
  (when (not= oldv unbound)
    (when-let [dom (tag-dom me)]
      (cond
        (= slot :content) (set! (.-innerHTML dom) newv)

        (+global-attr+ slot)
        (case slot
          :hidden (set! (.-hidden dom) newv)
          :class (set! (.-className dom) newv)              ;; todo gotta handle class list, not just one
          :checked (set! (.-checked dom) newv))

        (+inline-css+ slot)
        (do                                                 ;; (println :obs-inline-css!!! slot)
          (case slot
            :display (set! (.-display (.-style dom)) newv)))))))

;;; --- local storage ------------------------

;;; --- localStorage io implementation --------------------------------

(defn io-upsert [key val]
  (.setItem (.-localStorage js/window) key val))

(defn io-read [key]
  (.getItem (.-localStorage js/window) key))

(defn io-delete [key]
  (.removeItem (.-localStorage js/window) key))

(defn io-clear-storage []
  (.clear (.-localStorage js/window)))

(defn io-all-keys []
  (.keys js/Object (.-localStorage js/window)))

(defn io-find [key-prefix]
  (loop [keys (io-all-keys)
         found []]
    (if (seq keys)
      (recur (rest keys)
             (if (str/starts-with? (first keys) key-prefix)
               (conj found (first keys))
               found))
      found)))

(defn io-truncate [key-prefix]
  (doseq [key (io-find key-prefix)]
    (io-delete key)))

