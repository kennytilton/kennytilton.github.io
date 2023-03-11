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
throw (new Error(["Assert failed: ",["mget passed nil for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)))){
var G__23215 = cljs.core.str;
var G__23216 = "MXAPI_ILLEGAL_GET_NO_SUCH_SLOT> mget was attempted on non-existent slot \"";
var G__23217 = slot;
var G__23218 = "\".";
var G__23219 = "\n...> FYI: known slots are";
var G__23220 = cljs.core.keys(cljs.core.deref(me));
var G__23221 = "\n...> FYI: use mget? if prop might not exist.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7(G__23215,G__23216,G__23217,G__23218,G__23219,G__23220,G__23221) : tiltontec.util.core.err.call(null,G__23215,G__23216,G__23217,G__23218,G__23219,G__23220,G__23221));
} else {
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__23222 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__23222) : slot.call(null,G__23222));
}
}
});
tiltontec.model.core.mget_QMARK_ = (function tiltontec$model$core$mget_QMARK_(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed nil for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)){
return tiltontec.model.core.mget(me,slot);
} else {
return null;
}
});
var ret__4785__auto___23227 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23228 = arguments.length;
var i__4737__auto___23229 = (0);
while(true){
if((i__4737__auto___23229 < len__4736__auto___23228)){
args__4742__auto__.push((arguments[i__4737__auto___23229]));

var G__23230 = (i__4737__auto___23229 + (1));
i__4737__auto___23229 = G__23230;
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
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq23223){
var G__23224 = cljs.core.first(seq23223);
var seq23223__$1 = cljs.core.next(seq23223);
var G__23225 = cljs.core.first(seq23223__$1);
var seq23223__$2 = cljs.core.next(seq23223__$1);
var G__23226 = cljs.core.first(seq23223__$2);
var seq23223__$3 = cljs.core.next(seq23223__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23224,G__23225,G__23226,seq23223__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___23235 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23236 = arguments.length;
var i__4737__auto___23237 = (0);
while(true){
if((i__4737__auto___23237 < len__4736__auto___23236)){
args__4742__auto__.push((arguments[i__4737__auto___23237]));

var G__23238 = (i__4737__auto___23237 + (1));
i__4737__auto___23237 = G__23238;
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
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq23231){
var G__23232 = cljs.core.first(seq23231);
var seq23231__$1 = cljs.core.next(seq23231);
var G__23233 = cljs.core.first(seq23231__$1);
var seq23231__$2 = cljs.core.next(seq23231__$1);
var G__23234 = cljs.core.first(seq23231__$2);
var seq23231__$3 = cljs.core.next(seq23231__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23232,G__23233,G__23234,seq23231__$3);
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
var G__23239 = cljs.core.str;
var G__23240 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__23241 = slot;
var G__23242 = "', which is not mediated by any cell.\n";
var G__23243 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__23244 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__23245 = "...> FYI: intended new value is [";
var G__23246 = new_value;
var G__23247 = "]; initial value was [";
var G__23248 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),slot,cljs.core.cst$kw$no_DASH_such_DASH_slot);
var G__23249 = "].\n";
var G__23250 = "...> FYI: instance is of type ";
var G__23251 = tiltontec.util.base.mx_type(me);
var G__23252 = ".\n";
var G__23253 = "...> FYI: full instance is ";
var G__23254 = cljs.core.deref(me);
var G__23255 = "\n";
var G__23256 = "...> FYI: instance meta is ";
var G__23257 = cljs.core.meta(me);
var G__23258 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__23239,G__23240,G__23241,G__23242,G__23243,G__23244,G__23245,G__23246,G__23247,G__23248,G__23249,G__23250,G__23251,G__23252,G__23253,G__23254,G__23255,G__23256,G__23257,G__23258) : tiltontec.util.core.err.call(null,G__23239,G__23240,G__23241,G__23242,G__23243,G__23244,G__23245,G__23246,G__23247,G__23248,G__23249,G__23250,G__23251,G__23252,G__23253,G__23254,G__23255,G__23256,G__23257,G__23258));
} else {
var G__23259 = cljs.core.str;
var G__23260 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_SLOT> mswap!/mset!/md-reset! was attempted to non-existent slot \"";
var G__23261 = slot;
var G__23262 = "\".\n";
var G__23263 = "...> FYI: known slots are";
var G__23264 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__23259,G__23260,G__23261,G__23262,G__23263,G__23264) : tiltontec.util.core.err.call(null,G__23259,G__23260,G__23261,G__23262,G__23263,G__23264));
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
var len__4736__auto___23269 = arguments.length;
var i__4737__auto___23270 = (0);
while(true){
if((i__4737__auto___23270 < len__4736__auto___23269)){
args__4742__auto__.push((arguments[i__4737__auto___23270]));

var G__23271 = (i__4737__auto___23270 + (1));
i__4737__auto___23270 = G__23271;
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
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq23265){
var G__23266 = cljs.core.first(seq23265);
var seq23265__$1 = cljs.core.next(seq23265);
var G__23267 = cljs.core.first(seq23265__$1);
var seq23265__$2 = cljs.core.next(seq23265__$1);
var G__23268 = cljs.core.first(seq23265__$2);
var seq23265__$3 = cljs.core.next(seq23265__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23266,G__23267,G__23268,seq23265__$3);
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
var len__4736__auto___23285 = arguments.length;
var i__4737__auto___23286 = (0);
while(true){
if((i__4737__auto___23286 < len__4736__auto___23285)){
args__4742__auto__.push((arguments[i__4737__auto___23286]));

var G__23287 = (i__4737__auto___23286 + (1));
i__4737__auto___23286 = G__23287;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.model.core.make,cljs.core.cst$kw$mx_DASH_type,arg_list);
} else {
var iargs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,arg_list);
var meta_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_quiesce,null,cljs.core.cst$kw$mx_DASH_type,null], null), null);
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23273){
var vec__23274 = p__23273;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23277){
var vec__23278 = p__23277;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23278,(1),null);
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),meta_keys));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$mx_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model),cljs.core.cst$kw$on_DASH_quiesce,cljs.core.get.cljs$core$IFn$_invoke$arity$2(iargs,cljs.core.cst$kw$on_DASH_quiesce)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23281){
var vec__23282 = p__23281;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),meta_keys))){
return null;
} else {
return tiltontec.model.base.md_install_cell(me,slot,v);
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$awaken,me,(function (opcode,defer_info){
return tiltontec.model.base.md_awaken(me);
}));

return me;

}
}));

(tiltontec.model.core.make.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq23272){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23272));
}));

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.mget(me,cljs.core.cst$kw$kids);
});
tiltontec.model.core.fm_kids_observe = (function tiltontec$model$core$fm_kids_observe(me,newk,oldk,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
var seq__23288 = cljs.core.seq(lostks);
var chunk__23289 = null;
var count__23290 = (0);
var i__23291 = (0);
while(true){
if((i__23291 < count__23290)){
var k = chunk__23289.cljs$core$IIndexed$_nth$arity$2(null,i__23291);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__23292 = seq__23288;
var G__23293 = chunk__23289;
var G__23294 = count__23290;
var G__23295 = (i__23291 + (1));
seq__23288 = G__23292;
chunk__23289 = G__23293;
count__23290 = G__23294;
i__23291 = G__23295;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23288);
if(temp__5804__auto__){
var seq__23288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23288__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23288__$1);
var G__23296 = cljs.core.chunk_rest(seq__23288__$1);
var G__23297 = c__4556__auto__;
var G__23298 = cljs.core.count(c__4556__auto__);
var G__23299 = (0);
seq__23288 = G__23296;
chunk__23289 = G__23297;
count__23290 = G__23298;
i__23291 = G__23299;
continue;
} else {
var k = cljs.core.first(seq__23288__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__23300 = cljs.core.next(seq__23288__$1);
var G__23301 = null;
var G__23302 = (0);
var G__23303 = (0);
seq__23288 = G__23300;
chunk__23289 = G__23301;
count__23290 = G__23302;
i__23291 = G__23303;
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
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
var seq__23304_23308 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23305_23309 = null;
var count__23306_23310 = (0);
var i__23307_23311 = (0);
while(true){
if((i__23307_23311 < count__23306_23310)){
var k_23312 = chunk__23305_23309.cljs$core$IIndexed$_nth$arity$2(null,i__23307_23311);
if(tiltontec.cell.base.md_ref_QMARK_(k_23312)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23312) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23312));
} else {
}


var G__23313 = seq__23304_23308;
var G__23314 = chunk__23305_23309;
var G__23315 = count__23306_23310;
var G__23316 = (i__23307_23311 + (1));
seq__23304_23308 = G__23313;
chunk__23305_23309 = G__23314;
count__23306_23310 = G__23315;
i__23307_23311 = G__23316;
continue;
} else {
var temp__5804__auto___23317 = cljs.core.seq(seq__23304_23308);
if(temp__5804__auto___23317){
var seq__23304_23318__$1 = temp__5804__auto___23317;
if(cljs.core.chunked_seq_QMARK_(seq__23304_23318__$1)){
var c__4556__auto___23319 = cljs.core.chunk_first(seq__23304_23318__$1);
var G__23320 = cljs.core.chunk_rest(seq__23304_23318__$1);
var G__23321 = c__4556__auto___23319;
var G__23322 = cljs.core.count(c__4556__auto___23319);
var G__23323 = (0);
seq__23304_23308 = G__23320;
chunk__23305_23309 = G__23321;
count__23306_23310 = G__23322;
i__23307_23311 = G__23323;
continue;
} else {
var k_23324 = cljs.core.first(seq__23304_23318__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_23324)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23324) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23324));
} else {
}


var G__23325 = cljs.core.next(seq__23304_23318__$1);
var G__23326 = null;
var G__23327 = (0);
var G__23328 = (0);
seq__23304_23308 = G__23325;
chunk__23305_23309 = G__23326;
count__23306_23310 = G__23327;
i__23307_23311 = G__23328;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.md_quiesce_self(me);
}));
tiltontec.model.core.md_par = (function tiltontec$model$core$md_par(me){
return cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
var ret__4785__auto___23336 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23337 = arguments.length;
var i__4737__auto___23338 = (0);
while(true){
if((i__4737__auto___23338 < len__4736__auto___23337)){
args__4742__auto__.push((arguments[i__4737__auto___23338]));

var G__23339 = (i__4737__auto___23338 + (1));
i__4737__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__23332){
var vec__23333 = p__23332;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(0),null);
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
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq23329){
var G__23330 = cljs.core.first(seq23329);
var seq23329__$1 = cljs.core.next(seq23329);
var G__23331 = cljs.core.first(seq23329__$1);
var seq23329__$2 = cljs.core.next(seq23329__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23330,G__23331,seq23329__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___23349 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `slot`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23350 = arguments.length;
var i__4737__auto___23351 = (0);
while(true){
if((i__4737__auto___23351 < len__4736__auto___23350)){
args__4742__auto__.push((arguments[i__4737__auto___23351]));

var G__23352 = (i__4737__auto___23351 + (1));
i__4737__auto___23351 = G__23352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__23345){
var vec__23346 = p__23345;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23346,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_BANG_,null,(1),null)),(new cljs.core.List(null,what,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0))));
}));

(tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq23340){
var G__23341 = cljs.core.first(seq23340);
var seq23340__$1 = cljs.core.next(seq23340);
var G__23342 = cljs.core.first(seq23340__$1);
var seq23340__$2 = cljs.core.next(seq23340__$1);
var G__23343 = cljs.core.first(seq23340__$2);
var seq23340__$3 = cljs.core.next(seq23340__$2);
var G__23344 = cljs.core.first(seq23340__$3);
var seq23340__$4 = cljs.core.next(seq23340__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23341,G__23342,G__23343,G__23344,seq23340__$4);
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
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(poss)))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.mx_type(poss),seek)));
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
var len__4736__auto___23362 = arguments.length;
var i__4737__auto___23363 = (0);
while(true){
if((i__4737__auto___23363 < len__4736__auto___23362)){
args__4742__auto__.push((arguments[i__4737__auto___23363]));

var G__23364 = (i__4737__auto___23363 + (1));
i__4737__auto___23363 = G__23364;
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
var _STAR_depender_STAR__orig_val__23356 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23357 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23357);

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
var G__23358 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__23359 = what;
var G__23360 = where;
var G__23361 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__23358,G__23359,G__23360,G__23361) : tiltontec.util.core.err.call(null,G__23358,G__23359,G__23360,G__23361));
} else {
return null;
}
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23356);
}} else {
return null;
}
}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq23353){
var G__23354 = cljs.core.first(seq23353);
var seq23353__$1 = cljs.core.next(seq23353);
var G__23355 = cljs.core.first(seq23353__$1);
var seq23353__$2 = cljs.core.next(seq23353__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23354,G__23355,seq23353__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__23365 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23366 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23366);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__23367 = cljs.core.rest(sibs);
sibs = G__23367;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23365);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__23368 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23369 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23369);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__23370 = cljs.core.rest(sibs);
sibs = G__23370;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23368);
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
var len__4736__auto___23381 = arguments.length;
var i__4737__auto___23382 = (0);
while(true){
if((i__4737__auto___23382 < len__4736__auto___23381)){
args__4742__auto__.push((arguments[i__4737__auto___23382]));

var G__23383 = (i__4737__auto___23382 + (1));
i__4737__auto___23382 = G__23383;
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
var _STAR_depender_STAR__orig_val__23375 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23376 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23376);

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
var temp__5802__auto__ = tiltontec.model.core.mget_QMARK_(where,cljs.core.cst$kw$kids);
if(cljs.core.truth_(temp__5802__auto__)){
var kids = temp__5802__auto__;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_kids_BANG__BANG__BANG_,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));

var temp__5802__auto____$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$skip.cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__5802__auto____$1)){
var netkids = temp__5802__auto____$1;
return cljs.core.some((function (p1__23371_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__23371_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
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
var G__23377 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__23378 = what;
var G__23379 = where;
var G__23380 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__23377,G__23378,G__23379,G__23380) : tiltontec.util.core.err.call(null,G__23377,G__23378,G__23379,G__23380));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23375);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq23372){
var G__23373 = cljs.core.first(seq23372);
var seq23372__$1 = cljs.core.next(seq23372);
var G__23374 = cljs.core.first(seq23372__$1);
var seq23372__$2 = cljs.core.next(seq23372__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23373,G__23374,seq23372__$2);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23384_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.mget_QMARK_(p1__23384_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___23396 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23397 = arguments.length;
var i__4737__auto___23398 = (0);
while(true){
if((i__4737__auto___23398 < len__4736__auto___23397)){
args__4742__auto__.push((arguments[i__4737__auto___23398]));

var G__23399 = (i__4737__auto___23398 + (1));
i__4737__auto___23398 = G__23399;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__23392){
var vec__23393 = p__23392;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23393,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__23386__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__23385__23387__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__23386__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__23385__23387__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq23388){
var G__23389 = cljs.core.first(seq23388);
var seq23388__$1 = cljs.core.next(seq23388);
var G__23390 = cljs.core.first(seq23388__$1);
var seq23388__$2 = cljs.core.next(seq23388__$1);
var G__23391 = cljs.core.first(seq23388__$2);
var seq23388__$3 = cljs.core.next(seq23388__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23389,G__23390,G__23391,seq23388__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23400_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.mget_QMARK_(p1__23400_SHARP_,cljs.core.cst$kw$id));
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,tiltontec.util.base.mx_type(visited));
}),me);
});
/**
 * Search matrix descendents from 'where' for first with given :class
 */
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23401_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__23401_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.mget_QMARK_(p1__23401_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23402_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__23402_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.mget_QMARK_(p1__23402_SHARP_,property));
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
var G__23404 = arguments.length;
switch (G__23404) {
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

var ret__4785__auto___23409 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23410 = arguments.length;
var i__4737__auto___23411 = (0);
while(true){
if((i__4737__auto___23411 < len__4736__auto___23410)){
args__4742__auto__.push((arguments[i__4737__auto___23411]));

var G__23412 = (i__4737__auto___23411 + (1));
i__4737__auto___23411 = G__23412;
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
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq23406){
var G__23407 = cljs.core.first(seq23406);
var seq23406__$1 = cljs.core.next(seq23406);
var G__23408 = cljs.core.first(seq23406__$1);
var seq23406__$2 = cljs.core.next(seq23406__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23407,G__23408,seq23406__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___23416 = (function (){
/**
 * Syntax sugar for formulae that define :kids slots
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23417 = arguments.length;
var i__4737__auto___23418 = (0);
while(true){
if((i__4737__auto___23418 < len__4736__auto___23417)){
args__4742__auto__.push((arguments[i__4737__auto___23418]));

var G__23419 = (i__4737__auto___23418 + (1));
i__4737__auto___23418 = G__23419;
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
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq23413){
var G__23414 = cljs.core.first(seq23413);
var seq23413__$1 = cljs.core.next(seq23413);
var G__23415 = cljs.core.first(seq23413__$1);
var seq23413__$2 = cljs.core.next(seq23413__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23414,G__23415,seq23413__$2);
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
var k_key = tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_key);
var _ = (cljs.core.truth_(k_key)?null:(function(){throw (new Error("Assert failed: k-key"))})());
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__23420(s__23421){
return (new cljs.core.LazySeq(null,(function (){
var s__23421__$1 = s__23421;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23421__$1);
if(temp__5804__auto__){
var s__23421__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23421__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23421__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23423 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23422 = (0);
while(true){
if((i__23422 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__23422);
cljs.core.chunk_append(b__23423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__23426 = (i__23422 + (1));
i__23422 = G__23426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23423),tiltontec$model$core$kid_values_kids_$_iter__23420(cljs.core.chunk_rest(s__23421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23423),null);
}
} else {
var k = cljs.core.first(s__23421__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__23420(cljs.core.rest(s__23421__$2)));
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
var k_factory = tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_factory);
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
var _STAR_parent_STAR__orig_val__23424 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__23425 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__23425);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__23424);
}}
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_values)));
});
