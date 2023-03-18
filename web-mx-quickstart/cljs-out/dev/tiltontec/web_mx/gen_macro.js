// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.web_mx.gen_macro');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('goog.object');
goog.require('tiltontec.web_mx.gen');
/**
 * Uses the Google Closure object module to get the keys and values of any JavaScript Object
 *   and put them into a ClojureScript map
 */
tiltontec.web_mx.gen_macro.jso_map = (function tiltontec$web_mx$gen_macro$jso_map(obj){
return clojure.walk.keywordize_keys.call(null,cljs.core.zipmap.call(null,goog.object.getKeys(obj),goog.object.getValues(obj)));
});

//# sourceMappingURL=gen_macro.js.map
