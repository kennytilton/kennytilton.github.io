(ns web-mx-quickstart.extra
  (:require
    [tiltontec.web-mx.gen-macro
     :refer [title img section h1 h2 h3 input footer p a b h4 u table th tr td
             blockquote span i label ul li div button br pre code]]))

(defn glossary []
  (table
    (tr
      (th "Symbol")
      (th "Comments"))
    (tr (th "Accessors"))
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
        "Required wrapper for MX mutation in scope of a watch function."]
       ["(cI value & option-values)"
        "Marks the associated property as an MX input. eg, `:answer (cI 42)`"]
       ["(cF & body)"
        "Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"]
       ["(cF+ [& option-values] & body)"
        "A version of `cF` that takes cell options such as :watch."]
       ["(cFn & body)"
        "Start as formula for initial value computation, then convert to input cell. Akin to
        \"constructor initialization\"."]
       ["(cFonce & body)"
        "Start as formula for initial computation, then behave as immutable property. Alias `cF1`."]
       ["(fm-navig seeking starting-at & options)"
        "Search MX nodes for node matching `seeking`."]
       ["(fmu seeking & starting)"
        "Search `up and around` from starting node, which defaults to lexical `me`."]
       ["(fasc seeking starting)"
        "Search ascending parent chain from starting."]
       ])))