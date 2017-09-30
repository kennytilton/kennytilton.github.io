// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.observer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.model.macros');
tiltontec.cell.observer.type_cljc = (function tiltontec$cell$observer$type_cljc(x){
var or__6640__auto__ = (function (){var temp__4657__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return cljs.core.type(x);
}
});
if(typeof tiltontec.cell.observer.observe_by_type !== 'undefined'){
} else {
tiltontec.cell.observer.observe_by_type = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe-by-type"),((function (method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.observer.type_cljc(me)], null);
});})(method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__))
,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
return null;
}));
if(typeof tiltontec.cell.observer.observe !== 'undefined'){
} else {
tiltontec.cell.observer.observe = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.observer","observe"),((function (method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__){
return (function (slot_name,me,new_val,old_val,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot_name,tiltontec.cell.observer.type_cljc(me)], null);
});})(method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__))
,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (slot,me,new_val,old_val,c){
var temp__4655__auto__ = cljs.core.deref(tiltontec.cell.observer._PLUS_observe_default_handler_PLUS_);
if(cljs.core.truth_(temp__4655__auto__)){
var obs = temp__4655__auto__;
return (obs.cljs$core$IFn$_invoke$arity$5 ? obs.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : obs.call(null,slot,me,new_val,old_val,c));
} else {
return (tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe_by_type.cljs$core$IFn$_invoke$arity$5(slot,me,new_val,old_val,c) : tiltontec.cell.observer.observe_by_type.call(null,slot,me,new_val,old_val,c));
}
}));
var ret__7805__auto___13819 = (function (){
tiltontec.cell.observer.defobserver = (function tiltontec$cell$observer$defobserver(var_args){
var args__7772__auto__ = [];
var len__7765__auto___13820 = arguments.length;
var i__7766__auto___13821 = (0);
while(true){
if((i__7766__auto___13821 < len__7765__auto___13820)){
args__7772__auto__.push((arguments[i__7766__auto___13821]));

var G__13822 = (i__7766__auto___13821 + (1));
i__7766__auto___13821 = G__13822;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((5) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((5)),(0),null)):null);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7773__auto__);
});

tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,slot,types,params,body){
if((slot instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("defobserver> slot should be a keyword."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(keyword? slot)")].join('')));
}

var ftypes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(types,cljs.core.take_last(((1) - cljs.core.count(types)),cljs.core.list(cljs.core.cst$kw$tiltontec$cell$base_SLASH_model)));
var fparams = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,cljs.core.take_last(((4) - cljs.core.count(params)),cljs.core.list(cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_value,cljs.core.cst$sym$old_DASH_value,cljs.core.cst$sym$c)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defmethod),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$observer_SLASH_observe),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7483__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),ftypes))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot),fparams))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),body], 0))));
});

tiltontec.cell.observer.defobserver.cljs$lang$maxFixedArity = (5);

tiltontec.cell.observer.defobserver.cljs$lang$applyTo = (function (seq13813){
var G__13814 = cljs.core.first(seq13813);
var seq13813__$1 = cljs.core.next(seq13813);
var G__13815 = cljs.core.first(seq13813__$1);
var seq13813__$2 = cljs.core.next(seq13813__$1);
var G__13816 = cljs.core.first(seq13813__$2);
var seq13813__$3 = cljs.core.next(seq13813__$2);
var G__13817 = cljs.core.first(seq13813__$3);
var seq13813__$4 = cljs.core.next(seq13813__$3);
var G__13818 = cljs.core.first(seq13813__$4);
var seq13813__$5 = cljs.core.next(seq13813__$4);
return tiltontec.cell.observer.defobserver.cljs$core$IFn$_invoke$arity$variadic(G__13814,G__13815,G__13816,G__13817,G__13818,seq13813__$5);
});

return null;
})()
;
tiltontec.cell.observer.defobserver.cljs$lang$macro = true;

var ret__7805__auto___13826 = (function (){
/**
 * Shortcut definer for cell-specific observers.
 * body can be multiple sexprs with access to
 * call parameters: slot, me, new, old, and c.
 */
tiltontec.cell.observer.fn_obs = (function tiltontec$cell$observer$fn_obs(var_args){
var args__7772__auto__ = [];
var len__7765__auto___13827 = arguments.length;
var i__7766__auto___13828 = (0);
while(true){
if((i__7766__auto___13828 < len__7765__auto___13827)){
args__7772__auto__.push((arguments[i__7766__auto___13828]));

var G__13829 = (i__7766__auto___13828 + (1));
i__7766__auto___13828 = G__13829;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$old),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.observer.fn_obs.cljs$lang$maxFixedArity = (2);

tiltontec.cell.observer.fn_obs.cljs$lang$applyTo = (function (seq13823){
var G__13824 = cljs.core.first(seq13823);
var seq13823__$1 = cljs.core.next(seq13823);
var G__13825 = cljs.core.first(seq13823__$1);
var seq13823__$2 = cljs.core.next(seq13823__$1);
return tiltontec.cell.observer.fn_obs.cljs$core$IFn$_invoke$arity$variadic(G__13824,G__13825,seq13823__$2);
});

return null;
})()
;
tiltontec.cell.observer.fn_obs.cljs$lang$macro = true;

tiltontec.cell.observer.c_observe = (function tiltontec$cell$observer$c_observe(var_args){
var G__13831 = arguments.length;
switch (G__13831) {
case 2:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2 = (function (c,why){
return tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,tiltontec.cell.base.unbound,why);
});

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3 = (function (c,prior_value,why){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_observed,c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

var G__13833 = tiltontec.cell.base.c_slot(c);
var G__13834 = tiltontec.cell.base.c_model(c);
var G__13835 = tiltontec.cell.base.c_value(c);
var G__13836 = prior_value;
var G__13837 = c;
var fexpr__13832 = (function (){var or__6640__auto__ = cljs.core.cst$kw$obs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return tiltontec.cell.observer.observe;
}
})();
return (fexpr__13832.cljs$core$IFn$_invoke$arity$5 ? fexpr__13832.cljs$core$IFn$_invoke$arity$5(G__13833,G__13834,G__13835,G__13836,G__13837) : fexpr__13832.call(null,G__13833,G__13834,G__13835,G__13836,G__13837));
});

tiltontec.cell.observer.c_observe.cljs$lang$maxFixedArity = 3;

