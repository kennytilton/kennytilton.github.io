// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/hello_world/core.cljs. Go ahead and edit it and see reloading in action."], 0));
hello_world.core.multiply = (function hello_world$core$multiply(a,b){
return (a * b);
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.app_state !== 'undefined')){
} else {
hello_world.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello world!"], null));
}
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return null;
});
