(ns tiltontec.model.base
  (:require
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test
              :refer-macros [deftest is are]])
    #?(:cljs [tiltontec.util.base
              :refer [mx-type]
              :refer-macros [trx wtrx prog1 *trx?* def-rmap-props def-rmap-meta-props]]
       :clj  [tiltontec.util.base :refer :all])
    [tiltontec.util.core :refer [type-of err rmap-setf rmap-meta-setf]]
    [tiltontec.cell.base
     :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
             c-unbound? c-input? without-c-dependency
             c-model mdead? c-valid? c-useds c-ref? md-ref?
             c-state md-state *pulse* c-pulse-watched
             *call-stack* *defer-changes* unbound
             c-rule c-me c-value-state c-callers *causation* c-md-name
             c-synaptic? c-pulse c-pulse-last-changed c-ephemeral? c-prop c-props
             *depender* *quiesce*
             *c-prop-depth* md-prop-owning? c-lazy] :as cty]
    #?(:cljs [tiltontec.cell.integrity
              :refer-macros [with-integrity]]
       :clj  [tiltontec.cell.integrity :refer [with-integrity]])
    [tiltontec.cell.poly :refer [watch md-awaken-before]]

    #?(:cljs [tiltontec.cell.core
              :refer-macros [cF cF+ c-reset-next! cFonce cFn]
              :refer [cI c-reset! make-cell]]
       :clj  [tiltontec.cell.core :refer :all])

    [tiltontec.cell.evaluate :refer [cget]]
    [tiltontec.cell.poly :refer [c-awaken]]))

(def-rmap-props md-
  name)

(def-rmap-meta-props md-
   ;; we let cell.base define md-state
   cz)

(defn md-cell [me prop]
  (prop (:cz (meta me))))

;;; --- md initialization ---

(declare md-awaken)

(defn md-install-cell [me prop c]
  ;; note that c (a misnomer) might not be a Cell
  (cond
    (c-ref? c) (do
                 (#?(:clj alter :cljs swap!) c assoc
                   :prop prop
                   :me me)
                 (rmap-setf [prop me]
                   (when (c-input? c)
                     (c-value c)))
                 true)
    :else (do
            (rmap-setf [prop me] c)
            false)))

(defn md-awaken
  "(1) do initial evaluation of all ruled props
   (2) call watchs of all props"
  [me]
  (assert me "md-awaken passed nil")
  (md-awaken-before me)
  (assert (= :nascent (md-state me))
          (str "md-awaken> state not nascent post-awaken-before: " (or (md-state me) :NIL) " meta: "(meta me)))
  (rmap-meta-setf [::cty/state me] :awakening)
  (doseq [prop (keys @me)]
    ;; next is tricky: if prop is in :cz but nil, it has been
    ;; optimized-away and watched then in the rare case
    ;; it gets optimized away on other than the initial value.
    (when-let [c (prop (md-cz me) :not-found)]
      (cond
        (= c :not-found)
        ;; these need at least an initial watch
        (do #_(when (and (= prop :kids) (prop @me))
                (prn :md-awaken-kids-nocz-nonnil-obs prop
                  (keys (md-cz me))
                  (:kids (md-cz me) :hunh))
                )
          (watch prop me (prop @me) unbound nil))
        :else (c-awaken c))))
  (rmap-meta-setf [::cty/state me] :awake)
  me)






