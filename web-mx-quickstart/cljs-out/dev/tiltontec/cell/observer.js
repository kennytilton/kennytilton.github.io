// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.observer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.macros');
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.observer !== 'undefined') && (typeof tiltontec.cell.observer.observe_by_type !== 'undefined')){
} else {
tiltontec.cell.observer.observe_by_type = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__20284 = cljs.core.get_global_hierarchy;
return (fexpr__20284.cljs$core$IFn$_invoke$arity$0 ? fexpr__20284.cljs$core$IFn$_invoke$arity$0() : fexpr__20284.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe-by-type"),(function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.base.mx_type(me)], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
return null;
}));
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.observer !== 'undefined') && (typeof tiltontec.cell.observer.observe !== 'undefined')){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__20285 = cljs.core.get_global_hierarchy;
return (fexpr__20285.cljs$core$IFn$_invoke$arity$0 ? fexpr__20285.cljs$core$IFn$_invoke$arity$0() : fexpr__20285.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe"),(function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.util.base.mx_type(me)], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
var temp__5802__auto__ = cljs.core.deref(tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_);
if(cljs.core.truth_(temp__5802__auto__)){
var obs = temp__5802__auto__;
return (obs.cljs$core$IFn$_invoke$arity$5 ? obs.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : obs.call(null,slot,me,new_val,old_val,c));
} else {
return (tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : tiltontec.cell.observer.observe_by_type.call(null,slot,me,new_val,old_val,c));
}
}));
var ret__4785__auto___20292 = (function (){
tiltontec.cell.observer.defobserver = (function tiltontec$cell$observer$defobserver(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20293 = arguments.length;
var i__4737__auto___20294 = (0);
while(true){
if((i__4737__auto___20294 < len__4736__auto___20293)){
args__4742__auto__.push((arguments[i__4737__auto___20294]));

var G__20295 = (i__4737__auto___20294 + (1));
i__4737__auto___20294 = G__20295;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,slot,types,params,body){
if((slot instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","defobserver> slot should be a keyword.","\n","(keyword? slot)"].join('')));
}

var ftypes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(types,cljs.core.take_last(((1) - cljs.core.count(types)),cljs.core.list(cljs.core.cst$kw$tiltontec$cell$base_SLASH_model)));
var fparams = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,cljs.core.take_last(((4) - cljs.core.count(params)),cljs.core.list(cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_value,cljs.core.cst$sym$old_DASH_value,cljs.core.cst$sym$c)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$observer_SLASH_observe,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,slot,null,(1),null)),ftypes)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$slot,null,(1),null)),fparams)))),null,(1),null)),body], 0))));
}));

(tiltontec.cell.observer.defobserver.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(tiltontec.cell.observer.defobserver.cljs$lang$applyTo = (function (seq20286){
var G__20287 = cljs.core.first(seq20286);
var seq20286__$1 = cljs.core.next(seq20286);
var G__20288 = cljs.core.first(seq20286__$1);
var seq20286__$2 = cljs.core.next(seq20286__$1);
var G__20289 = cljs.core.first(seq20286__$2);
var seq20286__$3 = cljs.core.next(seq20286__$2);
var G__20290 = cljs.core.first(seq20286__$3);
var seq20286__$4 = cljs.core.next(seq20286__$3);
var G__20291 = cljs.core.first(seq20286__$4);
var seq20286__$5 = cljs.core.next(seq20286__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20287,G__20288,G__20289,G__20290,G__20291,seq20286__$5);
}));

return null;
})()
;
(tiltontec.cell.observer.defobserver.cljs$lang$macro = true);

var ret__4785__auto___20299 = (function (){
/**
 * Shortcut definer for cell-specific observers.
 * body can be multiple sexprs with access to
 * call parameters: slot, me, new, old, and c.
 */
tiltontec.cell.observer.fn_obs = (function tiltontec$cell$observer$fn_obs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20300 = arguments.length;
var i__4737__auto___20301 = (0);
while(true){
if((i__4737__auto___20301 < len__4736__auto___20300)){
args__4742__auto__.push((arguments[i__4737__auto___20301]));

var G__20302 = (i__4737__auto___20301 + (1));
i__4737__auto___20301 = G__20302;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$slot,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$old,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.observer.fn_obs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.observer.fn_obs.cljs$lang$applyTo = (function (seq20296){
var G__20297 = cljs.core.first(seq20296);
var seq20296__$1 = cljs.core.next(seq20296);
var G__20298 = cljs.core.first(seq20296__$1);
var seq20296__$2 = cljs.core.next(seq20296__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20297,G__20298,seq20296__$2);
}));

return null;
})()
;
(tiltontec.cell.observer.fn_obs.cljs$lang$macro = true);

tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(var_args){
var G__20304 = arguments.length;
switch (G__20304) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,tiltontec.cell.base.unbound,why);
}));

(tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

if(cljs.core.integer_QMARK_(cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_))){
} else {
throw (new Error("Assert failed: (integer? (clojure.core/deref *pulse*))"));
}

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_observed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));

var G__20305_20316 = tiltontec.cell.base.c_slot(c);
var G__20306_20317 = tiltontec.cell.base.c_model(c);
var G__20307_20318 = tiltontec.cell.base.c_value(c);
var G__20308_20319 = prior_value;
var G__20309_20320 = c;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__20305_20316,G__20306_20317,G__20307_20318,G__20308_20319,G__20309_20320) : tiltontec.cell.observer.observe.call(null,G__20305_20316,G__20306_20317,G__20307_20318,G__20308_20319,G__20309_20320));

var temp__5804__auto__ = (function (){var or__4126__auto__ = cljs.core.cst$kw$obs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$watch.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var cell_observer = temp__5804__auto__;
var G__20310 = tiltontec.cell.base.c_slot(c);
var G__20311 = tiltontec.cell.base.c_model(c);
var G__20312 = tiltontec.cell.base.c_value(c);
var G__20313 = prior_value;
var G__20314 = c;
return (cell_observer.cljs$core$IFn$_invoke$arity$5 ? cell_observer.cljs$core$IFn$_invoke$arity$5(G__20310,G__20311,G__20312,G__20313,G__20314) : cell_observer.call(null,G__20310,G__20311,G__20312,G__20313,G__20314));
} else {
return null;
}
}));

(tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3);

