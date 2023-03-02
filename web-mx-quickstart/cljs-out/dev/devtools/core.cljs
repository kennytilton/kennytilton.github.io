(ns devtools.core
  (:require [devtools.prefs :as prefs]
            [devtools.hints :as hints]
            [devtools.defaults :refer [feature-groups]]
            [devtools.formatters :as formatters]
            [devtools.async :as async]
            [devtools.toolbox]                                                                                                ; this auto-requires the toolbox namespace, used by cljs-oops
            [devtools.context :as context]
            [devtools.util :refer [display-banner-if-needed! install-feature! resolve-features! make-lib-info
                                   print-config-overrides-if-requested!
                                   under-advanced-build? display-advanced-build-warning-if-needed!]]))

; -- public API -------------------------------------------------------------------------------------------------------------

(defn is-feature-available? [feature]
  (case feature
    :formatters (formatters/available?)
    :hints (hints/available?)
    :async (async/available?)))

(defn available?
  ([] (available? (prefs/pref :features-to-install)))
  ([features-desc]
   (let [features (resolve-features! features-desc @feature-groups)]
     (if (empty? features)
       false
       (every? is-feature-available? features)))))

(defn is-feature-installed? [feature]
  (case feature
    :formatters (formatters/installed?)
    :hints (hints/installed?)
    :async (async/installed?)))

(defn installed?
  ([] (installed? (prefs/pref :features-to-install)))
  ([features-desc]
   (let [features (resolve-features! features-desc @feature-groups)]
     (if (empty? features)
       false
       (every? is-feature-installed? features)))))

(defn install!
  ([] (install! (prefs/pref :features-to-install)))
  ([features-desc]
   (if (under-advanced-build?)
     (display-advanced-build-warning-if-needed!)
     (let [features (resolve-features! features-desc @feature-groups)]
       (display-banner-if-needed! features @feature-groups)
       (print-config-overrides-if-requested! "config overrides prior install:\n")
       (install-feature! :formatters features is-feature-available? formatters/install!)
       (install-feature! :hints features is-feature-available? hints/install!)
       (install-feature! :async features is-feature-available? async/install!)))))

(defn uninstall! []
  (formatters/uninstall!)
  (hints/uninstall!)
  (async/uninstall!))

(defn set-prefs! [new-prefs]
  (prefs/set-prefs! new-prefs))

(defn get-prefs []
  (prefs/get-prefs))

(defn set-pref! [pref val]
  (prefs/set-pref! pref val))
