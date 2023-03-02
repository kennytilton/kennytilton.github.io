// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('tiltontec.util.base');
goog.require('cljs.test');
goog.require('tiltontec.util.core');
tiltontec.cell.base.pulse_initial = (function tiltontec$cell$base$pulse_initial(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
});
tiltontec.cell.base._STAR_pulse_STAR_ = tiltontec.cell.base.pulse_initial();
tiltontec.cell.base._STAR_custom_propagator_STAR_ = null;
tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.base._STAR_dp_log_STAR_ = false;
tiltontec.cell.base.pulse_now = (function tiltontec$cell$base$pulse_now(){
return cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_);
});
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_(tiltontec.cell.base._STAR_pulse_STAR_,(0));
});
tiltontec.cell.base._STAR_causation_STAR_ = cljs.core.List.EMPTY;
tiltontec.cell.base._STAR_call_stack_STAR_ = null;
/**
 * *depender* let's us differentiate between the call stack and
 * and dependency. The problem with overloading *call-stack* with both roles
 * is that we miss cyclic reentrance when we use without-c-dependency in a
 * rule to get once behavior or just when fm-traversing to find someone
 */
tiltontec.cell.base._STAR_depender_STAR_ = null;
tiltontec.cell.base._STAR_defer_changes_STAR_ = false;
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.unbound !== 'undefined')){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("unbound-cell-value");
}
tiltontec.cell.base.when_bound = (function tiltontec$cell$base$when_bound(x){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,tiltontec.cell.base.unbound)){
return x;
} else {
return null;
}
});
tiltontec.cell.base.cache_value = (function tiltontec$cell$base$cache_value(cache){
return tiltontec.cell.base.when_bound(cache);
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.uncurrent !== 'undefined')){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_finalize_STAR_ = false;
tiltontec.cell.base._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tell_DASH_dependents,cljs.core.cst$kw$awaken,cljs.core.cst$kw$client,cljs.core.cst$kw$ephemeral_DASH_reset,cljs.core.cst$kw$change], null);
tiltontec.cell.base.unfin_biz_build = (function tiltontec$cell$base$unfin_biz_build(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$cell$base$unfin_biz_build_$_iter__14327(s__14328){
return (new cljs.core.LazySeq(null,(function (){
var s__14328__$1 = s__14328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14328__$1);
if(temp__5804__auto__){
var s__14328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14328__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14328__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14330 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14329 = (0);
while(true){
if((i__14329 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14329);
cljs.core.chunk_append(b__14330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));

var G__14331 = (i__14329 + (1));
i__14329 = G__14331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14330),tiltontec$cell$base$unfin_biz_build_$_iter__14327(cljs.core.chunk_rest(s__14328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14330),null);
}
} else {
var i = cljs.core.first(s__14328__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$base$unfin_biz_build_$_iter__14327(cljs.core.rest(s__14328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tiltontec.cell.base._PLUS_ufb_opcodes_PLUS_);
})());
});
tiltontec.cell.base._STAR_unfinished_business_STAR_ = tiltontec.cell.base.unfin_biz_build();
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._PLUS_c_debug_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var ret__4785__auto___14332 = tiltontec.cell.base.pcell = (function tiltontec$cell$base$pcell(_AMPERSAND_form,_AMPERSAND_env,tag,c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_println,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$pcell,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tag,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_state,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))));
});
(tiltontec.cell.base.pcell.cljs$lang$macro = true);

tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var G__14334 = arguments.length;
switch (G__14334) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_c_debug_PLUS_,cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$2(options,false));

cljs.core.reset_BANG_(tiltontec.cell.base._STAR_pulse_STAR_,(0));

return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_client_q_handler_PLUS_,cljs.core.cst$kw$client_DASH_queue_DASH_handler.cljs$core$IFn$_invoke$arity$1(options));
}));

(tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___14339 = (function (){
tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14340 = arguments.length;
var i__4737__auto___14341 = (0);
while(true){
if((i__4737__auto___14341 < len__4736__auto___14340)){
args__4742__auto__.push((arguments[i__4737__auto___14341]));

var G__14342 = (i__4737__auto___14341 + (1));
i__4737__auto___14341 = G__14342;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_depender_STAR_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq14336){
var G__14337 = cljs.core.first(seq14336);
var seq14336__$1 = cljs.core.next(seq14336);
var G__14338 = cljs.core.first(seq14336__$1);
var seq14336__$2 = cljs.core.next(seq14336__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14337,G__14338,seq14336__$2);
}));

return null;
})()
;
(tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true);

var ret__4785__auto___14346 = (function (){
tiltontec.cell.base.cpr = (function tiltontec$cell$base$cpr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14347 = arguments.length;
var i__4737__auto___14348 = (0);
while(true){
if((i__4737__auto___14348 < len__4736__auto___14347)){
args__4742__auto__.push((arguments[i__4737__auto___14348]));

var G__14349 = (i__4737__auto___14348 + (1));
i__4737__auto___14348 = G__14349;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.cpr.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,r){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_pln,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_pulse_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)))),null,(1),null)))));
}));

(tiltontec.cell.base.cpr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.cpr.cljs$lang$applyTo = (function (seq14343){
var G__14344 = cljs.core.first(seq14343);
var seq14343__$1 = cljs.core.next(seq14343);
var G__14345 = cljs.core.first(seq14343__$1);
var seq14343__$2 = cljs.core.next(seq14343__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14344,G__14345,seq14343__$2);
}));

return null;
})()
;
(tiltontec.cell.base.cpr.cljs$lang$macro = true);

tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first(tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_(tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var G__14351 = arguments.length;
switch (G__14351) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1(true);
}));

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
var fexpr__14352 = cljs.core.deref(tiltontec.cell.base._PLUS_c_stopper_PLUS_);
return (fexpr__14352.cljs$core$IFn$_invoke$arity$1 ? fexpr__14352.cljs$core$IFn$_invoke$arity$1(why) : fexpr__14352.call(null,why));
}));

(tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1);

tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_);
});
var ret__4785__auto___14357 = (function (){
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14358 = arguments.length;
var i__4737__auto___14359 = (0);
while(true){
if((i__4737__auto___14359 < len__4736__auto___14358)){
args__4742__auto__.push((arguments[i__4737__auto___14359]));

var G__14360 = (i__4737__auto___14359 + (1));
i__4737__auto___14359 = G__14360;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__PLUS_stop_PLUS_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq14354){
var G__14355 = cljs.core.first(seq14354);
var seq14354__$1 = cljs.core.next(seq14354);
var G__14356 = cljs.core.first(seq14354__$1);
var seq14354__$2 = cljs.core.next(seq14354__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14355,G__14356,seq14354__$2);
}));

return null;
})()
;
(tiltontec.cell.base.un_stopped.cljs$lang$macro = true);

tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"ustack> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_assert = (function tiltontec$cell$base$c_assert(var_args){
var G__14365 = arguments.length;
switch (G__14365) {
case 1:
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14367 = arguments.length;
var i__4737__auto___14368 = (0);
while(true){
if((i__4737__auto___14368 < len__4736__auto___14367)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14368]));

var G__14369 = (i__4737__auto___14368 + (1));
i__4737__auto___14368 = G__14369;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1 = (function (assertion){
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["c-assert anon failed"], 0));
}
}));

(tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$variadic = (function (assertion,fmt$,fmt_args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
if(cljs.core.truth_(assertion)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["c-assert> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_args)].join('')], 0));
}
}
}));

/** @this {Function} */
(tiltontec.cell.base.c_assert.cljs$lang$applyTo = (function (seq14362){
var G__14363 = cljs.core.first(seq14362);
var seq14362__$1 = cljs.core.next(seq14362);
var G__14364 = cljs.core.first(seq14362__$1);
var seq14362__$2 = cljs.core.next(seq14362__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14363,G__14364,seq14362__$2);
}));

(tiltontec.cell.base.c_assert.cljs$lang$maxFixedArity = (2));

tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14371 = arguments.length;
var i__4737__auto___14372 = (0);
while(true){
if((i__4737__auto___14372 < len__4736__auto___14371)){
args__4742__auto__.push((arguments[i__4737__auto___14372]));

var G__14373 = (i__4737__auto___14372 + (1));
i__4737__auto___14372 = G__14373;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)], 0));
}
}));

(tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq14370){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14370));
}));

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14375 = arguments.length;
var i__4737__auto___14376 = (0);
while(true){
if((i__4737__auto___14376 < len__4736__auto___14375)){
args__4742__auto__.push((arguments[i__4737__auto___14376]));

var G__14377 = (i__4737__auto___14376 + (1));
i__4737__auto___14376 = G__14377;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"WARNING: ",args)], 0));
}
}));

(tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq14374){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14374));
}));

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_model,cljs.core.cst$kw$tiltontec$cell$base_SLASH_object);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,cljs.core.cst$kw$tiltontec$cell$base_SLASH_object);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell);
tiltontec.cell.base.ia_type = (function tiltontec$cell$base$ia_type(it){
if((it instanceof cljs.core.Atom)){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(it));
} else {
return cljs.core.type(it);

}
});
tiltontec.cell.base.ia_type_QMARK_ = (function tiltontec$cell$base$ia_type_QMARK_(it,typ){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(it),typ);
});
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.cell.base.ia_type_QMARK_(c,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula);
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
if(tiltontec.util.core.any_ref_QMARK_(x)){
if(tiltontec.cell.base.ia_type_QMARK_(x,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell)){
if(cljs.core.map_QMARK_(cljs.core.deref(x))){
return x;
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_slot = (function tiltontec$cell$base$c_slot(ref){
return cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return cljs.core.cst$kw$input_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return cljs.core.cst$kw$pulse.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return cljs.core.cst$kw$pulse_DASH_last_DASH_changed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_pulse_observed = (function tiltontec$cell$base$c_pulse_observed(ref){
return cljs.core.cst$kw$pulse_DASH_observed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return cljs.core.cst$kw$users.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return cljs.core.cst$kw$ephemeral_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_code = (function tiltontec$cell$base$c_code(ref){
return cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return cljs.core.cst$kw$lazy.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synapses = (function tiltontec$cell$base$c_synapses(ref){
return cljs.core.cst$kw$synapses.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return cljs.core.cst$kw$synaptic_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.cell.base.dpc = (function tiltontec$cell$base$dpc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14380 = arguments.length;
var i__4737__auto___14381 = (0);
while(true){
if((i__4737__auto___14381 < len__4736__auto___14380)){
args__4742__auto__.push((arguments[i__4737__auto___14381]));

var G__14382 = (i__4737__auto___14381 + (1));
i__4737__auto___14381 = G__14382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.base.dpc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.cell.base.dpc.cljs$core$IFn$_invoke$arity$variadic = (function (cell,bits){
if(cljs.core.truth_(cljs.core.cst$kw$debug_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cell)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,bits);
} else {
return null;
}
}));

(tiltontec.cell.base.dpc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.cell.base.dpc.cljs$lang$applyTo = (function (seq14378){
var G__14379 = cljs.core.first(seq14378);
var seq14378__$1 = cljs.core.next(seq14378);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14379,seq14378__$1);
}));

tiltontec.cell.base.c_code$ = (function tiltontec$cell$base$c_code$(c){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14383_14389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14384_14390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14385_14391 = true;
var _STAR_print_fn_STAR__temp_val__14386_14392 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14385_14391);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14386_14392);

try{var _STAR_print_level_STAR__orig_val__14387_14393 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__14388_14394 = false;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__14388_14394);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c)));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__14387_14393);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14384_14390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14383_14389);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(tiltontec.util.core.any_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (any-ref? c)"));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_ref_QMARK_(c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(cljs.core.deref(c));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
} else {
return cljs.core.deref(c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
return (((!(cljs.core.map_QMARK_(cljs.core.deref(c))))) || ((!(cljs.core.contains_QMARK_(cljs.core.deref(c),cljs.core.cst$kw$tiltontec$cell$base_SLASH_state)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimized_DASH_away,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c)))));
} else {
return true;

}
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
});
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__5802__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5802__auto__)){
var md = temp__5802__auto__;
var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(md));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "anon";
}
} else {
return "no-md";
}
});
tiltontec.cell.base.c_slot_name = (function tiltontec$cell$base$c_slot_name(rc){
return cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
});
tiltontec.cell.base.c_value_state = (function tiltontec$cell$base$c_value_state(rc){
var v = tiltontec.cell.base.c_value(rc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.unbound)){
return cljs.core.cst$kw$unbound;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,tiltontec.cell.base.uncurrent)){
return cljs.core.cst$kw$uncurrent;
} else {
return cljs.core.cst$kw$valid;

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unbound,tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$valid,tiltontec.cell.base.c_value_state(rc));
});
tiltontec.cell.base.c_pulse_unobserved_QMARK_ = (function tiltontec$cell$base$c_pulse_unobserved_QMARK_(c){
var temp__5802__auto__ = tiltontec.cell.base.c_pulse_observed(c);
if(cljs.core.truth_(temp__5802__auto__)){
var pulse_observed = temp__5802__auto__;
return (cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_) > pulse_observed);
} else {
return true;
}
});
tiltontec.cell.base.dependency_record = (function tiltontec$cell$base$dependency_record(used){
if(tiltontec.cell.base.c_optimized_away_QMARK_(used)){
return null;
} else {
tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.cell.base._STAR_depender_STAR_,cljs.core.cst$kw$useds,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_useds(tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3(used,cljs.core.cst$kw$callers,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),tiltontec.cell.base._STAR_depender_STAR_));
}
});
tiltontec.cell.base.dependency_drop = (function tiltontec$cell$base$dependency_drop(used,caller){
tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3(caller,cljs.core.cst$kw$useds,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_useds(caller),used));

return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3(used,cljs.core.cst$kw$callers,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(used){
var seq__14395 = cljs.core.seq(tiltontec.cell.base.c_callers(used));
var chunk__14396 = null;
var count__14397 = (0);
var i__14398 = (0);
while(true){
if((i__14398 < count__14397)){
var caller = chunk__14396.cljs$core$IIndexed$_nth$arity$2(null,i__14398);
tiltontec.cell.base.dependency_drop(used,caller);


var G__14399 = seq__14395;
var G__14400 = chunk__14396;
var G__14401 = count__14397;
var G__14402 = (i__14398 + (1));
seq__14395 = G__14399;
chunk__14396 = G__14400;
count__14397 = G__14401;
i__14398 = G__14402;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14395);
if(temp__5804__auto__){
var seq__14395__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14395__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14395__$1);
var G__14403 = cljs.core.chunk_rest(seq__14395__$1);
var G__14404 = c__4556__auto__;
var G__14405 = cljs.core.count(c__4556__auto__);
var G__14406 = (0);
seq__14395 = G__14403;
chunk__14396 = G__14404;
count__14397 = G__14405;
i__14398 = G__14406;
continue;
} else {
var caller = cljs.core.first(seq__14395__$1);
tiltontec.cell.base.dependency_drop(used,caller);


var G__14407 = cljs.core.next(seq__14395__$1);
var G__14408 = null;
var G__14409 = (0);
var G__14410 = (0);
seq__14395 = G__14407;
chunk__14396 = G__14408;
count__14397 = G__14409;
i__14398 = G__14410;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.cell.base.unlink_from_used = (function tiltontec$cell$base$unlink_from_used(caller,why){

var seq__14411 = cljs.core.seq(tiltontec.cell.base.c_useds(caller));
var chunk__14412 = null;
var count__14413 = (0);
var i__14414 = (0);
while(true){
if((i__14414 < count__14413)){
var used = chunk__14412.cljs$core$IIndexed$_nth$arity$2(null,i__14414);
tiltontec.cell.base.dependency_drop(used,caller);


var G__14415 = seq__14411;
var G__14416 = chunk__14412;
var G__14417 = count__14413;
var G__14418 = (i__14414 + (1));
seq__14411 = G__14415;
chunk__14412 = G__14416;
count__14413 = G__14417;
i__14414 = G__14418;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14411);
if(temp__5804__auto__){
var seq__14411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14411__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__14411__$1);
var G__14419 = cljs.core.chunk_rest(seq__14411__$1);
var G__14420 = c__4556__auto__;
var G__14421 = cljs.core.count(c__4556__auto__);
var G__14422 = (0);
seq__14411 = G__14419;
chunk__14412 = G__14420;
count__14413 = G__14421;
i__14414 = G__14422;
continue;
} else {
var used = cljs.core.first(seq__14411__$1);
tiltontec.cell.base.dependency_drop(used,caller);


var G__14423 = cljs.core.next(seq__14411__$1);
var G__14424 = null;
var G__14425 = (0);
var G__14426 = (0);
seq__14411 = G__14423;
chunk__14412 = G__14424;
count__14413 = G__14425;
i__14414 = G__14426;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.cell.base.c_slots = (function tiltontec$cell$base$c_slots(c,k){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_slot,(function (){var G__14427 = cljs.core.deref(c);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__14427) : k.call(null,G__14427));
})()));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return tiltontec.util.core.any_ref_QMARK_(x);
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.mdead_QMARK_ !== 'undefined')){
} else {
tiltontec.cell.base.mdead_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__14428 = cljs.core.get_global_hierarchy;
return (fexpr__14428.cljs$core$IFn$_invoke$arity$0 ? fexpr__14428.cljs$core$IFn$_invoke$arity$0() : fexpr__14428.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.base","mdead?"),(function (me){
if((((me == null)) || (tiltontec.cell.base.md_ref_QMARK_(me)))){
} else {
throw (new Error("Assert failed: (or (nil? me) (md-ref? me))"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null))], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.base.mdead_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
var temp__5802__auto__ = cljs.core.meta(me);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state.cljs$core$IFn$_invoke$arity$1(m));
} else {
return false;
}
}));
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.base.md_slot_owning_QMARK_ = (function tiltontec$cell$base$md_slot_owning_QMARK_(class_name,slot_name){
return false;
});
tiltontec.cell.base.c_debug_QMARK_ = (function tiltontec$cell$base$c_debug_QMARK_(c,tag){
var temp__5804__auto__ = cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto__)){
var dbg = temp__5804__auto__;
var or__4126__auto__ = dbg === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dbg,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if(cljs.core.coll_QMARK_(dbg)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tag]),dbg);
} else {
return false;
}
}
}
} else {
return null;
}
});
tiltontec.cell.base.minfo = (function tiltontec$cell$base$minfo(me){
if((me == null)){
return cljs.core.cst$kw$NIL_DASH_MD;
} else {
if((!(tiltontec.util.core.any_ref_QMARK_(me)))){
return cljs.core.cst$kw$NOT_DASH_ANY_DASH_REF;
} else {
if((!(tiltontec.cell.base.md_ref_QMARK_(me)))){
return cljs.core.cst$kw$NOT_DASH_MD;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$anon;
}
})(),cljs.core.meta(me)], null);

}
}
}
});
tiltontec.cell.base.cinfo = (function tiltontec$cell$base$cinfo(c){
if((c == null)){
return cljs.core.cst$kw$NIL_DASH_C;
} else {
if((!(tiltontec.util.core.any_ref_QMARK_(c)))){
return cljs.core.cst$kw$NOT_DASH_ANY_DASH_REF_DASH_C;
} else {
if(cljs.core.not(tiltontec.cell.base.c_ref_QMARK_(c))){
return cljs.core.cst$kw$NOT_DASH_C_DASH_REF;
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot_name(c),tiltontec.cell.base.c_md_name(c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse,cljs.core.cst$kw$pulse.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c))], null),tiltontec.cell.base.c_value_state(c),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$useds,cljs.core.count(cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c))),cljs.core.cst$kw$callers,cljs.core.count(cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c)))], null),tiltontec.cell.base.ia_type(c)], null);

}
}
}
});
