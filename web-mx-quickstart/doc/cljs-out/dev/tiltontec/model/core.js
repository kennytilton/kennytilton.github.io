// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.mget = (function tiltontec$model$core$mget(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["md-get passed nil for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["md-get passed non-model for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)))){
return null;
} else {
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__17415 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__17415) : slot.call(null,G__17415));
}
}
});
var ret__4785__auto___17420 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17421 = arguments.length;
var i__4737__auto___17422 = (0);
while(true){
if((i__4737__auto___17422 < len__4736__auto___17421)){
args__4742__auto__.push((arguments[i__4737__auto___17422]));

var G__17423 = (i__4737__auto___17422 + (1));
i__4737__auto___17422 = G__17423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.name(slot_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(slot_SHARP_)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),slots))));
}));

(tiltontec.model.core.def_mget.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq17416){
var G__17417 = cljs.core.first(seq17416);
var seq17416__$1 = cljs.core.next(seq17416);
var G__17418 = cljs.core.first(seq17416__$1);
var seq17416__$2 = cljs.core.next(seq17416__$1);
var G__17419 = cljs.core.first(seq17416__$2);
var seq17416__$3 = cljs.core.next(seq17416__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17417,G__17418,G__17419,seq17416__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

/**
 * deperecated. Use mget.
 */
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
return tiltontec.model.core.mget(me,slot);
});
tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___17428 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17429 = arguments.length;
var i__4737__auto___17430 = (0);
while(true){
if((i__4737__auto___17430 < len__4736__auto___17429)){
args__4742__auto__.push((arguments[i__4737__auto___17430]));

var G__17431 = (i__4737__auto___17430 + (1));
i__4737__auto___17430 = G__17431;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_parent_STAR_,null,(1),null)),(new cljs.core.List(null,meform,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq17424){
var G__17425 = cljs.core.first(seq17424);
var seq17424__$1 = cljs.core.next(seq17424);
var G__17426 = cljs.core.first(seq17424__$1);
var seq17424__$2 = cljs.core.next(seq17424__$1);
var G__17427 = cljs.core.first(seq17424__$2);
var seq17424__$3 = cljs.core.next(seq17424__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17425,G__17426,G__17427,seq17424__$3);
}));

return null;
})()
;
(tiltontec.model.core.with_par.cljs$lang$macro = true);

tiltontec.model.core.mset_BANG_ = (function tiltontec$model$core$mset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__5802__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)){
var G__17432 = cljs.core.str;
var G__17433 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__17434 = slot;
var G__17435 = "', which is not mediated by any cell.\n";
var G__17436 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__17437 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__17438 = "...> FYI: intended new value is [";
var G__17439 = new_value;
var G__17440 = "]; initial value was [";
var G__17441 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),slot,cljs.core.cst$kw$no_DASH_such_DASH_slot);
var G__17442 = "].\n";
var G__17443 = "...> FYI: instance is of type ";
var G__17444 = tiltontec.util.base.type_cljc(me);
var G__17445 = ".\n";
var G__17446 = "...> FYI: full instance is ";
var G__17447 = cljs.core.deref(me);
var G__17448 = "\n";
var G__17449 = "...> FYI: instance meta is ";
var G__17450 = cljs.core.meta(me);
var G__17451 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443,G__17444,G__17445,G__17446,G__17447,G__17448,G__17449,G__17450,G__17451) : tiltontec.util.core.err.call(null,G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443,G__17444,G__17445,G__17446,G__17447,G__17448,G__17449,G__17450,G__17451));
} else {
var G__17452 = cljs.core.str;
var G__17453 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_SLOT> mswap!/mset!/md-reset! was attempted to non-existent slot \"";
var G__17454 = slot;
var G__17455 = "\".\n";
var G__17456 = "...> FYI: known slots are";
var G__17457 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__17452,G__17453,G__17454,G__17455,G__17456,G__17457) : tiltontec.util.core.err.call(null,G__17452,G__17453,G__17454,G__17455,G__17456,G__17457));
}
}
});
/**
 * alternate syntax conforming with clojure terminology
 */
tiltontec.model.core.mreset_BANG_ = (function tiltontec$model$core$mreset_BANG_(me,slot,new_value){
return tiltontec.model.core.mset_BANG_(me,slot,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
return tiltontec.model.core.mset_BANG_(me,slot,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_set_BANG_ = (function tiltontec$model$core$md_set_BANG_(me,slot,new_value){
return tiltontec.model.core.mset_BANG_(me,slot,new_value);
});
tiltontec.model.core.mswap_BANG_ = (function tiltontec$model$core$mswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17462 = arguments.length;
var i__4737__auto___17463 = (0);
while(true){
if((i__4737__auto___17463 < len__4736__auto___17462)){
args__4742__auto__.push((arguments[i__4737__auto___17463]));

var G__17464 = (i__4737__auto___17463 + (1));
i__4737__auto___17463 = G__17464;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (me,slot,swap_fn,swap_fn_args){
return tiltontec.model.core.mset_BANG_(me,slot,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.model.core.mget(me,slot),swap_fn_args));
}));

(tiltontec.model.core.mswap_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq17458){
var G__17459 = cljs.core.first(seq17458);
var seq17458__$1 = cljs.core.next(seq17458);
var G__17460 = cljs.core.first(seq17458__$1);
var seq17458__$2 = cljs.core.next(seq17458__$1);
var G__17461 = cljs.core.first(seq17458__$2);
var seq17458__$3 = cljs.core.next(seq17458__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17459,G__17460,G__17461,seq17458__$3);
}));

tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17478 = arguments.length;
var i__4737__auto___17479 = (0);
while(true){
if((i__4737__auto___17479 < len__4736__auto___17478)){
args__4742__auto__.push((arguments[i__4737__auto___17479]));

var G__17480 = (i__4737__auto___17479 + (1));
i__4737__auto___17479 = G__17480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_(cljs.core.count(arg_list))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.model.core.make,cljs.core.cst$kw$type,arg_list);
} else {
var iargs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,arg_list);
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17466){
var vec__17467 = p__17466;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17470){
var vec__17471 = p__17470;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17471,(1),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,slot)));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17474){
var vec__17475 = p__17474;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475,(1),null);
return tiltontec.model.base.md_install_cell(me,slot,v);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$awaken,me,(function (opcode,defer_info){
return tiltontec.model.base.md_awaken(me);
}));

return me;

}
}));

(tiltontec.model.core.make.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq17465){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17465));
}));

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.md_get(me,cljs.core.cst$kw$kids);
});
tiltontec.model.core.fm_kids_observe = (function tiltontec$model$core$fm_kids_observe(me,newk,oldk,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
var seq__17481 = cljs.core.seq(lostks);
var chunk__17482 = null;
var count__17483 = (0);
var i__17484 = (0);
while(true){
if((i__17484 < count__17483)){
var k = chunk__17482.cljs$core$IIndexed$_nth$arity$2(null,i__17484);
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.finalize.call(null,k));


var G__17485 = seq__17481;
var G__17486 = chunk__17482;
var G__17487 = count__17483;
var G__17488 = (i__17484 + (1));
seq__17481 = G__17485;
chunk__17482 = G__17486;
count__17483 = G__17487;
i__17484 = G__17488;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17481);
if(temp__5804__auto__){
var seq__17481__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17481__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17481__$1);
var G__17489 = cljs.core.chunk_rest(seq__17481__$1);
var G__17490 = c__4556__auto__;
var G__17491 = cljs.core.count(c__4556__auto__);
var G__17492 = (0);
seq__17481 = G__17489;
chunk__17482 = G__17490;
count__17483 = G__17491;
i__17484 = G__17492;
continue;
} else {
var k = cljs.core.first(seq__17481__$1);
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.finalize.call(null,k));


var G__17493 = cljs.core.next(seq__17481__$1);
var G__17494 = null;
var G__17495 = (0);
var G__17496 = (0);
seq__17481 = G__17493;
chunk__17482 = G__17494;
count__17483 = G__17495;
i__17484 = G__17496;
continue;
}
} else {
return null;
}
}
break;
}
}
}
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (_,me,newk,oldk,c){
return tiltontec.model.core.fm_kids_observe(me,newk,oldk,c);
}));
tiltontec.cell.evaluate.finalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
var seq__17497_17501 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17498_17502 = null;
var count__17499_17503 = (0);
var i__17500_17504 = (0);
while(true){
if((i__17500_17504 < count__17499_17503)){
var k_17505 = chunk__17498_17502.cljs$core$IIndexed$_nth$arity$2(null,i__17500_17504);
if(tiltontec.cell.base.md_ref_QMARK_(k_17505)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17505) : tiltontec.cell.evaluate.finalize.call(null,k_17505));
} else {
}


var G__17506 = seq__17497_17501;
var G__17507 = chunk__17498_17502;
var G__17508 = count__17499_17503;
var G__17509 = (i__17500_17504 + (1));
seq__17497_17501 = G__17506;
chunk__17498_17502 = G__17507;
count__17499_17503 = G__17508;
i__17500_17504 = G__17509;
continue;
} else {
var temp__5804__auto___17510 = cljs.core.seq(seq__17497_17501);
if(temp__5804__auto___17510){
var seq__17497_17511__$1 = temp__5804__auto___17510;
if(cljs.core.chunked_seq_QMARK_(seq__17497_17511__$1)){
var c__4556__auto___17512 = cljs.core.chunk_first(seq__17497_17511__$1);
var G__17513 = cljs.core.chunk_rest(seq__17497_17511__$1);
var G__17514 = c__4556__auto___17512;
var G__17515 = cljs.core.count(c__4556__auto___17512);
var G__17516 = (0);
seq__17497_17501 = G__17513;
chunk__17498_17502 = G__17514;
count__17499_17503 = G__17515;
i__17500_17504 = G__17516;
continue;
} else {
var k_17517 = cljs.core.first(seq__17497_17511__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17517)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17517) : tiltontec.cell.evaluate.finalize.call(null,k_17517));
} else {
}


var G__17518 = cljs.core.next(seq__17497_17511__$1);
var G__17519 = null;
var G__17520 = (0);
var G__17521 = (0);
seq__17497_17501 = G__17518;
chunk__17498_17502 = G__17519;
count__17499_17503 = G__17520;
i__17500_17504 = G__17521;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.finalize_self(me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.md_par = (function tiltontec$model$core$md_par(me){
return cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
var ret__4785__auto___17529 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17530 = arguments.length;
var i__4737__auto___17531 = (0);
while(true){
if((i__4737__auto___17531 < len__4736__auto___17530)){
args__4742__auto__.push((arguments[i__4737__auto___17531]));

var G__17532 = (i__4737__auto___17531 + (1));
i__4737__auto___17531 = G__17532;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__17525){
var vec__17526 = p__17525;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17526,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$parent,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,me__$1,null,(1),null))))),null,(1),null)))));
}));

(tiltontec.model.core.mpar.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq17522){
var G__17523 = cljs.core.first(seq17522);
var seq17522__$1 = cljs.core.next(seq17522);
var G__17524 = cljs.core.first(seq17522__$1);
var seq17522__$2 = cljs.core.next(seq17522__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17523,G__17524,seq17522__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___17542 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `slot`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17543 = arguments.length;
var i__4737__auto___17544 = (0);
while(true){
if((i__4737__auto___17544 < len__4736__auto___17543)){
args__4742__auto__.push((arguments[i__4737__auto___17544]));

var G__17545 = (i__4737__auto___17544 + (1));
i__4737__auto___17544 = G__17545;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__17538){
var vec__17539 = p__17538;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17539,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_md_DASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_BANG_,null,(1),null)),(new cljs.core.List(null,what,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0))));
}));

(tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq17533){
var G__17534 = cljs.core.first(seq17533);
var seq17533__$1 = cljs.core.next(seq17533);
var G__17535 = cljs.core.first(seq17533__$1);
var seq17533__$2 = cljs.core.next(seq17533__$1);
var G__17536 = cljs.core.first(seq17533__$2);
var seq17533__$3 = cljs.core.next(seq17533__$2);
var G__17537 = cljs.core.first(seq17533__$3);
var seq17533__$4 = cljs.core.next(seq17533__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17534,G__17535,G__17536,G__17537,seq17533__$4);
}));

return null;
})()
;
(tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true);

/**
 * Return true if 'poss' is the matrix reference we 'seek'
 * 
 * There are 4 branches to this.
 * 
 * 'poss' is not a ref, return false
 * 'seek' is a fn?, we return result of invoke it with 'poss'
 * 'seek' is a keyword?, we return true if it is = with (:name poss)
 * :else compare 'poss' and 'seek' directly using =
 */
tiltontec.model.core.fm_navig_EQ_ = (function tiltontec$model$core$fm_navig_EQ_(seek,poss){
if(((tiltontec.util.core.any_ref_QMARK_(poss)) || (typeof poss === 'string'))){
} else {
throw (new Error(["Assert failed: ",["poss not ref ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join(''),"\n","(or (any-ref? poss) (string? poss))"].join('')));
}

if((!(tiltontec.util.core.any_ref_QMARK_(poss)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fm_DASH_navig_EQ_bailnotref,poss], 0));

return false;
} else {
if(cljs.core.fn_QMARK_(seek)){
return (seek.cljs$core$IFn$_invoke$arity$1 ? seek.cljs$core$IFn$_invoke$arity$1(poss) : seek.call(null,poss));
} else {
if((seek instanceof cljs.core.Keyword)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(poss)))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(poss),seek)));
} else {
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":fm-navig=-else-pplain=!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seek], 0));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,poss);

}
}
}
});
/**
 * Search matrix ascendents for 'what', starting at 'where'
 * 
 * See fm-navig= for options about 'what' can be
 * 
 * if :me? is true, and (fm-navig= what where) return 'where'
 * 
 * if (:parent @where) returns a parent, recurse up the family tree
 * 
 * return an error when (:must? options) is true and we nothing is found
 */
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17555 = arguments.length;
var i__4737__auto___17556 = (0);
while(true){
if((i__4737__auto___17556 < len__4736__auto___17555)){
args__4742__auto__.push((arguments[i__4737__auto___17556]));

var G__17557 = (i__4737__auto___17556 + (1));
i__4737__auto___17556 = G__17557;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = where;
if(cljs.core.truth_(and__4115__auto__)){
return what;
} else {
return and__4115__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__17549 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17550 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17550);

try{var or__4126__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.model.core.fm_navig_EQ_(what,where);
if(cljs.core.truth_(and__4115__auto____$1)){
return where;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__5804__auto__)){
var par = temp__5804__auto__;
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__17551 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__17552 = what;
var G__17553 = where;
var G__17554 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17551,G__17552,G__17553,G__17554) : tiltontec.util.core.err.call(null,G__17551,G__17552,G__17553,G__17554));
} else {
return null;
}
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17549);
}} else {
return null;
}
}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq17546){
var G__17547 = cljs.core.first(seq17546);
var seq17546__$1 = cljs.core.next(seq17546);
var G__17548 = cljs.core.first(seq17546__$1);
var seq17546__$2 = cljs.core.next(seq17546__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17547,G__17548,seq17546__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__17558 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17559 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17559);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.mx_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__17560 = cljs.core.rest(sibs);
sibs = G__17560;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17558);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__17561 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17562 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17562);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.mx_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__17563 = cljs.core.rest(sibs);
sibs = G__17563;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17561);
}});
/**
 * Search matrix ascendents and descendents for 'what', starting at 'where'
 * 
 * if :me? is true, and (fm-navig= what where) return 'where' (:me? is false by default)
 * 
 * if :inside? is true, try kids recursively (after removing any listed in :skip option)
 * 
 * if :up? is true, invoke fm-navig on ancestor (skipping 'where')
 */
tiltontec.model.core.fm_navig = (function tiltontec$model$core$fm_navig(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17574 = arguments.length;
var i__4737__auto___17575 = (0);
while(true){
if((i__4737__auto___17575 < len__4736__auto___17574)){
args__4742__auto__.push((arguments[i__4737__auto___17575]));

var G__17576 = (i__4737__auto___17575 + (1));
i__4737__auto___17575 = G__17576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = where;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = what;
if(cljs.core.truth_(and__4115__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_(where);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__17568 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17569 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17569);

try{if(tiltontec.util.core.any_ref_QMARK_(where)){
var or__4126__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.model.core.fm_navig_EQ_(what,where);
if(cljs.core.truth_(and__4115__auto____$1)){
return where;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = cljs.core.cst$kw$inside_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var temp__5802__auto__ = tiltontec.model.core.md_get(where,cljs.core.cst$kw$kids);
if(cljs.core.truth_(temp__5802__auto__)){
var kids = temp__5802__auto__;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_kids_BANG__BANG__BANG_,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));

var temp__5802__auto____$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$skip.cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__5802__auto____$1)){
var netkids = temp__5802__auto____$1;
return cljs.core.some((function (p1__17564_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__17564_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
}),netkids);
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_net_DASH_kids], 0));
}
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_no_DASH_kids,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var and__4115__auto__ = cljs.core.cst$kw$up_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var temp__5804__auto__ = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__5804__auto__)){
var par = temp__5804__auto__;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$skip,where,cljs.core.cst$kw$inside_QMARK_,true], 0));
} else {
return null;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__17570 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__17571 = what;
var G__17572 = where;
var G__17573 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17570,G__17571,G__17572,G__17573) : tiltontec.util.core.err.call(null,G__17570,G__17571,G__17572,G__17573));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17568);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq17565){
var G__17566 = cljs.core.first(seq17565);
var seq17565__$1 = cljs.core.next(seq17565);
var G__17567 = cljs.core.first(seq17565__$1);
var seq17565__$2 = cljs.core.next(seq17565__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17566,G__17567,seq17565__$2);
}));

/**
 * Search matrix ascendents and descendents from node 'where', for 'what', throwing an error when not found
 */
tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$must_QMARK_,true,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search matrix ascendents from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17577_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.md_get(p1__17577_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___17589 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17590 = arguments.length;
var i__4737__auto___17591 = (0);
while(true){
if((i__4737__auto___17591 < len__4736__auto___17590)){
args__4742__auto__.push((arguments[i__4737__auto___17591]));

var G__17592 = (i__4737__auto___17591 + (1));
i__4737__auto___17591 = G__17592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__17585){
var vec__17586 = p__17585;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__17579__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__17578__17580__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__17579__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_md_DASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__17578__17580__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq17581){
var G__17582 = cljs.core.first(seq17581);
var seq17581__$1 = cljs.core.next(seq17581);
var G__17583 = cljs.core.first(seq17581__$1);
var seq17581__$2 = cljs.core.next(seq17581__$1);
var G__17584 = cljs.core.first(seq17581__$2);
var seq17581__$3 = cljs.core.next(seq17581__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17582,G__17583,G__17584,seq17581__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17593_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.md_get(p1__17593_SHARP_,cljs.core.cst$kw$id));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
/**
 * Search matrix ascendants from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc((function (visited){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,tiltontec.cell.base.ia_type(visited));
}),me);
});
/**
 * Search matrix descendents from 'where' for first with given :class
 */
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17594_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17594_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__17594_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17595_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17595_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.md_get(p1__17595_SHARP_,property));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix ascendents from node 'me' for 'id-name', trying first as a name, then as an id
 */
tiltontec.model.core.fmo = (function tiltontec$model$core$fmo(me,id_name){
var or__4126__auto__ = tiltontec.model.core.mxu_find_name(me,id_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.model.core.mxu_find_id(me,id_name);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
throw ["fmo> not id or name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)].join('');
}
}
});
/**
 * Use 'fmo' and extract :value (or slot indicated by :slot-name)
 */
tiltontec.model.core.fmov = (function tiltontec$model$core$fmov(var_args){
var G__17597 = arguments.length;
switch (G__17597) {
case 2:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2 = (function (me,id_name){
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3(me,id_name,cljs.core.cst$kw$value);
}));

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3 = (function (me,id_name,slot_name){
var temp__5804__auto__ = tiltontec.model.core.fmo(me,id_name);
if(cljs.core.truth_(temp__5804__auto__)){
var mx = temp__5804__auto__;
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),slot_name)){
return tiltontec.model.core.mget(mx,slot_name);
} else {
throw ["fmov> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)," lacks ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_name)," property"].join('');
}
} else {
return null;
}
}));

(tiltontec.model.core.fmov.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___17602 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17603 = arguments.length;
var i__4737__auto___17604 = (0);
while(true){
if((i__4737__auto___17604 < len__4736__auto___17603)){
args__4742__auto__.push((arguments[i__4737__auto___17604]));

var G__17605 = (i__4737__auto___17604 + (1));
i__4737__auto___17604 = G__17605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_parent_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_parent_STAR_,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_doall,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_remove,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_flatten,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_list,null,(1),null)),tree))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq17599){
var G__17600 = cljs.core.first(seq17599);
var seq17599__$1 = cljs.core.next(seq17599);
var G__17601 = cljs.core.first(seq17599__$1);
var seq17599__$2 = cljs.core.next(seq17599__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17600,G__17601,seq17599__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___17609 = (function (){
/**
 * Syntax sugar for formulae that define :kids slots
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17610 = arguments.length;
var i__4737__auto___17611 = (0);
while(true){
if((i__4737__auto___17611 < len__4736__auto___17610)){
args__4742__auto__.push((arguments[i__4737__auto___17611]));

var G__17612 = (i__4737__auto___17611 + (1));
i__4737__auto___17611 = G__17612;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_cF,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"no me for cFkids",null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,null,(1),null)),tree))),null,(1),null))], 0))));
}));

(tiltontec.model.core.cFkids.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq17606){
var G__17607 = cljs.core.first(seq17606);
var seq17606__$1 = cljs.core.next(seq17606);
var G__17608 = cljs.core.first(seq17606__$1);
var seq17606__$2 = cljs.core.next(seq17606__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17607,G__17608,seq17606__$2);
}));

return null;
})()
;
(tiltontec.model.core.cFkids.cljs$lang$macro = true);

/**
 * A pattern commonly employed in matrix applications is to define a :kid-factory on some
 * 'parent' cell, and use it to enrich the value extracted from the parent's kid cells.
 * 
 * This function maps across the :kids-values, invoking the factory as it goes
 */
tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var k_key = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_key);
var _ = (cljs.core.truth_(k_key)?null:(function(){throw (new Error("Assert failed: k-key"))})());
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__17613(s__17614){
return (new cljs.core.LazySeq(null,(function (){
var s__17614__$1 = s__17614;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17614__$1);
if(temp__5804__auto__){
var s__17614__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17614__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17614__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17616 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17615 = (0);
while(true){
if((i__17615 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17615);
cljs.core.chunk_append(b__17616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__17619 = (i__17615 + (1));
i__17615 = G__17619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17616),tiltontec$model$core$kid_values_kids_$_iter__17613(cljs.core.chunk_rest(s__17614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17616),null);
}
} else {
var k = cljs.core.first(s__17614__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__17613(cljs.core.rest(s__17614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(x_kids);
})()):null);
var k_factory = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_factory);
if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,kid_value){
var or__4126__auto__ = (function (){var and__4115__auto__ = x_kids__$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x_kids__$1,kid_value);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var _STAR_parent_STAR__orig_val__17617 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__17618 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__17618);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__17617);
}}
}),tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_values)));
});
