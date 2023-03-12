(ns web-mx-quickstart.extra
  (:require
    [tiltontec.web-mx.gen-macro
     :refer [title img section h1 h2 h3 input footer p a b h4 u table th tr td
             blockquote span i label ul li div button br pre code]]))

(defn glossary []
  (table
    (tr (th {:colspan 2} "Navigation"))
    (mapv (fn [[usage description]]
            (tr
              (td usage)
              (td description)))
      [
       ["(fm-navig seeking starting-at & options)"
        "Search MX nodes for node matching `seeking`."]
       ["(fmu seeking & starting)"
        "Search `up and around` from starting node, which defaults to lexical `me`."]
       ["(fasc seeking starting)"
        "Search ascending parent chain from starting."]
       ])
    (tr (th {:colspan 2} "Accessors"))
    (mapv (fn [[usage description]]
            (tr
              (td usage)
              (td description)))
      [["(mget <i>model</i> <i>property</i>)"
        "The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,
      establishes a reactive dependency on the gotten property."]
       ["(mset! <i>model</i> <i>property</i> <i>value</i>)"
        "The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling
      from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"]
       ["(mswap! md prop fn & args)" "mx swap!"]
       ["(with-cc tag & body)"
        "Required wrapper for MX mutation in scope of a watch function."]])
    (tr (th {:colspan 2} "Cells"))
    (mapv (fn [[usage description]]
            (tr
              (td usage)
              (td description)))
      [["no cell involved<br>e.g. <code>:answer 42</code>" "mset!/mswap! throw exceptions at run time."]
       ["(cI value & option-values)"
        "Marks the associated property as an MX input. eg, `:answer (cI 42)`"]
       ["(cF & body)"
        "For a computed property value, using anaphoric `me`.<br>eg <code>:width (cF (* 1.618 (mget me :height)))</code>"]
       ["(cF+ [& option-values] & body)"
        "A version of `cF` that takes cell options such as :watch."]
       ["(cFn & body)"
        "Start as formula for initial value computation, then convert to input cell. Akin to
        \"constructor initialization\"."]
       ["(cFonce & body)"
        "Start as formula for initial computation, then behave as immutable property. Alias `cF1`."]])
    (tr (th {:colspan 2} "Cell Options"))
    (mapv (fn [[usage description]]
            (tr
              (td usage)
              (td description)))
      [
       [":input?" "Can imperative code mutate this property? Macro <code>cI</code>: <code>(cI 42)</code>"]
       [":watch"
        "Expects an 'on-change' function:<br><center><code>(fn [property me new prior cell])</code></center><br> Alias <code>:obs</code>
        for <i>observer</i>."]
       [":on-quiesce" "Takes a finalization callback with signature <code>(fn [cell])</code>"]
       [":ephemeral?"
        "Ephemeral properties, when they take on a new value, propagate as usual but then revert silently
        to nil, without propagating in any way."]
       [":lazy"
        "Several varieties of laziness: :always, :once-asked, :until-asked."]
       ])
    ))