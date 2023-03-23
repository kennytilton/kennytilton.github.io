// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.diagnostic');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.mget = (function tiltontec$model$core$mget(me,prop){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed nil for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(me),prop)))){
var G__17192 = cljs.core.str;
var G__17193 = "MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"";
var G__17194 = prop;
var G__17195 = "\".";
var G__17196 = "\n...> FYI: known props are";
var G__17197 = cljs.core.keys(cljs.core.deref(me));
var G__17198 = "\n...> FYI: use mget? if prop might not exist.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7(G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198) : tiltontec.util.core.err.call(null,G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198));
} else {
var dbg_QMARK_ = false;
if(dbg_QMARK_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mget_DASH_sees_DASH_c_QMARK_,tiltontec.cell.base.cinfo(tiltontec.model.base.md_cell(me,prop))], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_DASH_prop,(function (){var G__17199 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__17199) : prop.call(null,G__17199));
})()], 0));
} else {
}

var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.cget(c);
} else {
var G__17200 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__17200) : prop.call(null,G__17200));
}
}
});
tiltontec.model.core.mget_QMARK_ = (function tiltontec$model$core$mget_QMARK_(me,prop){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed nil for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if(cljs.core.contains_QMARK_(cljs.core.deref(me),prop)){
return tiltontec.model.core.mget(me,prop);
} else {
return null;
}
});
var ret__4785__auto___17205 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17206 = arguments.length;
var i__4737__auto___17207 = (0);
while(true){
if((i__4737__auto___17207 < len__4736__auto___17206)){
args__4742__auto__.push((arguments[i__4737__auto___17207]));

var G__17208 = (i__4737__auto___17207 + (1));
i__4737__auto___17207 = G__17208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.name(prop_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop_SHARP_)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),props))));
}));

(tiltontec.model.core.def_mget.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq17201){
var G__17202 = cljs.core.first(seq17201);
var seq17201__$1 = cljs.core.next(seq17201);
var G__17203 = cljs.core.first(seq17201__$1);
var seq17201__$2 = cljs.core.next(seq17201__$1);
var G__17204 = cljs.core.first(seq17201__$2);
var seq17201__$3 = cljs.core.next(seq17201__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17202,G__17203,G__17204,seq17201__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___17213 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17214 = arguments.length;
var i__4737__auto___17215 = (0);
while(true){
if((i__4737__auto___17215 < len__4736__auto___17214)){
args__4742__auto__.push((arguments[i__4737__auto___17215]));

var G__17216 = (i__4737__auto___17215 + (1));
i__4737__auto___17215 = G__17216;
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
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq17209){
var G__17210 = cljs.core.first(seq17209);
var seq17209__$1 = cljs.core.next(seq17209);
var G__17211 = cljs.core.first(seq17209__$1);
var seq17209__$2 = cljs.core.next(seq17209__$1);
var G__17212 = cljs.core.first(seq17209__$2);
var seq17209__$3 = cljs.core.next(seq17209__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17210,G__17211,G__17212,seq17209__$3);
}));

return null;
})()
;
(tiltontec.model.core.with_par.cljs$lang$macro = true);

tiltontec.model.core.mset_BANG_ = (function tiltontec$model$core$mset_BANG_(me,prop,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(me),prop)){
var G__17217 = cljs.core.str;
var G__17218 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__17219 = prop;
var G__17220 = "', which is not mediated by any cell.\n";
var G__17221 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__17222 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__17223 = "...> FYI: intended new value is [";
var G__17224 = new_value;
var G__17225 = "]; initial value was [";
var G__17226 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__17227 = "].\n";
var G__17228 = "...> FYI: instance is of type ";
var G__17229 = tiltontec.util.base.mx_type(me);
var G__17230 = ".\n";
var G__17231 = "...> FYI: full instance is ";
var G__17232 = cljs.core.deref(me);
var G__17233 = "\n";
var G__17234 = "...> FYI: instance meta is ";
var G__17235 = cljs.core.meta(me);
var G__17236 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226,G__17227,G__17228,G__17229,G__17230,G__17231,G__17232,G__17233,G__17234,G__17235,G__17236) : tiltontec.util.core.err.call(null,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226,G__17227,G__17228,G__17229,G__17230,G__17231,G__17232,G__17233,G__17234,G__17235,G__17236));
} else {
var G__17237 = cljs.core.str;
var G__17238 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"";
var G__17239 = prop;
var G__17240 = "\".\n";
var G__17241 = "...> FYI: known props are";
var G__17242 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__17237,G__17238,G__17239,G__17240,G__17241,G__17242) : tiltontec.util.core.err.call(null,G__17237,G__17238,G__17239,G__17240,G__17241,G__17242));
}
}
});
/**
 * alternate syntax conforming with clojure terminology
 */
tiltontec.model.core.mreset_BANG_ = (function tiltontec$model$core$mreset_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_(me,prop,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_(me,prop,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_set_BANG_ = (function tiltontec$model$core$md_set_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_(me,prop,new_value);
});
tiltontec.model.core.mswap_BANG_ = (function tiltontec$model$core$mswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17247 = arguments.length;
var i__4737__auto___17248 = (0);
while(true){
if((i__4737__auto___17248 < len__4736__auto___17247)){
args__4742__auto__.push((arguments[i__4737__auto___17248]));

var G__17249 = (i__4737__auto___17248 + (1));
i__4737__auto___17248 = G__17249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (me,prop,swap_fn,swap_fn_args){
return tiltontec.model.core.mset_BANG_(me,prop,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.model.core.mget(me,prop),swap_fn_args));
}));

(tiltontec.model.core.mswap_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq17243){
var G__17244 = cljs.core.first(seq17243);
var seq17243__$1 = cljs.core.next(seq17243);
var G__17245 = cljs.core.first(seq17243__$1);
var seq17243__$2 = cljs.core.next(seq17243__$1);
var G__17246 = cljs.core.first(seq17243__$2);
var seq17243__$3 = cljs.core.next(seq17243__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17244,G__17245,G__17246,seq17243__$3);
}));

tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,prop,new_value){
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,prop,new_value){
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17263 = arguments.length;
var i__4737__auto___17264 = (0);
while(true){
if((i__4737__auto___17264 < len__4736__auto___17263)){
args__4742__auto__.push((arguments[i__4737__auto___17264]));

var G__17265 = (i__4737__auto___17264 + (1));
i__4737__auto___17264 = G__17265;
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
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17251){
var vec__17252 = p__17251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17252,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,((tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17255){
var vec__17256 = p__17255;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17256,(1),null);
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$mx_DASH_sid,tiltontec.util.base.mx_sid_next(),cljs.core.cst$kw$mx_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model),cljs.core.cst$kw$on_DASH_quiesce,cljs.core.get.cljs$core$IFn$_invoke$arity$2(iargs,cljs.core.cst$kw$on_DASH_quiesce)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17259){
var vec__17260 = p__17259;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys))){
return null;
} else {
return tiltontec.model.base.md_install_cell(me,prop,v);
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
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq17250){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17250));
}));

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.mget(me,cljs.core.cst$kw$kids);
});
tiltontec.model.core.fm_kids_watch = (function tiltontec$model$core$fm_kids_watch(me,newk,oldk,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$fm_DASH_kids_DASH_watch,tiltontec.cell.base.minfo(me),cljs.core.cst$kw$lostks,cljs.core.count(lostks)], 0));

var seq__17266 = cljs.core.seq(lostks);
var chunk__17267 = null;
var count__17268 = (0);
var i__17269 = (0);
while(true){
if((i__17269 < count__17268)){
var k = chunk__17267.cljs$core$IIndexed$_nth$arity$2(null,i__17269);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.poly.md_quiesce.call(null,k));


var G__17270 = seq__17266;
var G__17271 = chunk__17267;
var G__17272 = count__17268;
var G__17273 = (i__17269 + (1));
seq__17266 = G__17270;
chunk__17267 = G__17271;
count__17268 = G__17272;
i__17269 = G__17273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17266);
if(temp__5804__auto__){
var seq__17266__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17266__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17266__$1);
var G__17274 = cljs.core.chunk_rest(seq__17266__$1);
var G__17275 = c__4556__auto__;
var G__17276 = cljs.core.count(c__4556__auto__);
var G__17277 = (0);
seq__17266 = G__17274;
chunk__17267 = G__17275;
count__17268 = G__17276;
i__17269 = G__17277;
continue;
} else {
var k = cljs.core.first(seq__17266__$1);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.poly.md_quiesce.call(null,k));


var G__17278 = cljs.core.next(seq__17266__$1);
var G__17279 = null;
var G__17280 = (0);
var G__17281 = (0);
seq__17266 = G__17278;
chunk__17267 = G__17279;
count__17268 = G__17280;
i__17269 = G__17281;
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
tiltontec.cell.poly.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (prop,me,newk,oldk,c){
return tiltontec.model.core.fm_kids_watch(me,newk,oldk,c);
}));
tiltontec.cell.poly.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$family_DASH_md_DASH_quies_DASH_entry_BANG_,tiltontec.cell.base.minfo(me)], 0));

var seq__17282_17286 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17283_17287 = null;
var count__17284_17288 = (0);
var i__17285_17289 = (0);
while(true){
if((i__17285_17289 < count__17284_17288)){
var k_17290 = chunk__17283_17287.cljs$core$IIndexed$_nth$arity$2(null,i__17285_17289);
if(tiltontec.cell.base.md_ref_QMARK_(k_17290)){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$family_DASH_md_DASH_quiKID_BANG_,tiltontec.cell.base.minfo(me)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17290) : tiltontec.cell.poly.md_quiesce.call(null,k_17290));
} else {
}


var G__17291 = seq__17282_17286;
var G__17292 = chunk__17283_17287;
var G__17293 = count__17284_17288;
var G__17294 = (i__17285_17289 + (1));
seq__17282_17286 = G__17291;
chunk__17283_17287 = G__17292;
count__17284_17288 = G__17293;
i__17285_17289 = G__17294;
continue;
} else {
var temp__5804__auto___17295 = cljs.core.seq(seq__17282_17286);
if(temp__5804__auto___17295){
var seq__17282_17296__$1 = temp__5804__auto___17295;
if(cljs.core.chunked_seq_QMARK_(seq__17282_17296__$1)){
var c__4556__auto___17297 = cljs.core.chunk_first(seq__17282_17296__$1);
var G__17298 = cljs.core.chunk_rest(seq__17282_17296__$1);
var G__17299 = c__4556__auto___17297;
var G__17300 = cljs.core.count(c__4556__auto___17297);
var G__17301 = (0);
seq__17282_17286 = G__17298;
chunk__17283_17287 = G__17299;
count__17284_17288 = G__17300;
i__17285_17289 = G__17301;
continue;
} else {
var k_17302 = cljs.core.first(seq__17282_17296__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17302)){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$family_DASH_md_DASH_quiKID_BANG_,tiltontec.cell.base.minfo(me)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17302) : tiltontec.cell.poly.md_quiesce.call(null,k_17302));
} else {
}


var G__17303 = cljs.core.next(seq__17282_17296__$1);
var G__17304 = null;
var G__17305 = (0);
var G__17306 = (0);
seq__17282_17286 = G__17303;
chunk__17283_17287 = G__17304;
count__17284_17288 = G__17305;
i__17285_17289 = G__17306;
continue;
}
} else {
}
}
break;
}

return (tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.cell.poly.md_quiesce_self.call(null,me));
}));
tiltontec.model.core.md_par = (function tiltontec$model$core$md_par(me){
return cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
var ret__4785__auto___17314 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17315 = arguments.length;
var i__4737__auto___17316 = (0);
while(true){
if((i__4737__auto___17316 < len__4736__auto___17315)){
args__4742__auto__.push((arguments[i__4737__auto___17316]));

var G__17317 = (i__4737__auto___17316 + (1));
i__4737__auto___17316 = G__17317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__17310){
var vec__17311 = p__17310;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17311,(0),null);
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
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq17307){
var G__17308 = cljs.core.first(seq17307);
var seq17307__$1 = cljs.core.next(seq17307);
var G__17309 = cljs.core.first(seq17307__$1);
var seq17307__$2 = cljs.core.next(seq17307__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17308,G__17309,seq17307__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___17327 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `prop`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17328 = arguments.length;
var i__4737__auto___17329 = (0);
while(true){
if((i__4737__auto___17329 < len__4736__auto___17328)){
args__4742__auto__.push((arguments[i__4737__auto___17329]));

var G__17330 = (i__4737__auto___17329 + (1));
i__4737__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,prop,p__17323){
var vec__17324 = p__17323;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17324,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_BANG_,null,(1),null)),(new cljs.core.List(null,what,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,prop,null,(1),null))], 0))));
}));

(tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq17318){
var G__17319 = cljs.core.first(seq17318);
var seq17318__$1 = cljs.core.next(seq17318);
var G__17320 = cljs.core.first(seq17318__$1);
var seq17318__$2 = cljs.core.next(seq17318__$1);
var G__17321 = cljs.core.first(seq17318__$2);
var seq17318__$3 = cljs.core.next(seq17318__$2);
var G__17322 = cljs.core.first(seq17318__$3);
var seq17318__$4 = cljs.core.next(seq17318__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17319,G__17320,G__17321,G__17322,seq17318__$4);
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
tiltontec.model.core.fasc_higher = (function tiltontec$model$core$fasc_higher(what,where,options){
if(cljs.core.truth_(where)){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> 'where' arg is nil seeking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","where"].join('')));
}

if((!(tiltontec.cell.base.mdead_QMARK_(where)))){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> reaches dead 'where' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo(where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$seeking),cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)].join(''),"\n","(not (mdead? where))"].join('')));
}

if(cljs.core.truth_(what)){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> 'what' arg is nil searching from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo(where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","what"].join('')));
}

tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$navig,cljs.core.cst$kw$fasc_DASH_higher,cljs.core.cst$kw$what,what,cljs.core.cst$kw$where,tiltontec.cell.base.minfo(where)], 0));

var or__4126__auto__ = (function (){var and__4115__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options);
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
var temp__5804__auto__ = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__5804__auto__)){
var par = temp__5804__auto__;
var G__17331 = what;
var G__17332 = par;
var G__17333 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$me_QMARK_,true);
return (tiltontec.model.core.fasc_higher.cljs$core$IFn$_invoke$arity$3 ? tiltontec.model.core.fasc_higher.cljs$core$IFn$_invoke$arity$3(G__17331,G__17332,G__17333) : tiltontec.model.core.fasc_higher.call(null,G__17331,G__17332,G__17333));
} else {
return null;
}
}
});
/**
 * Search matrix ascendents for 'what', starting at 'where'
 * See fm-navig= for options about 'what' can be
 * if :me? is true, and (fm-navig= what where) return 'where'
 * if (:parent @where) returns a parent, recurse up the family tree
 * return an error when (:must? options) is true and we nothing is found
 */
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17340 = arguments.length;
var i__4737__auto___17341 = (0);
while(true){
if((i__4737__auto___17341 < len__4736__auto___17340)){
args__4742__auto__.push((arguments[i__4737__auto___17341]));

var G__17342 = (i__4737__auto___17341 + (1));
i__4737__auto___17341 = G__17342;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_(where)){
} else {
throw (new Error(["Assert failed: ",["fasc> 'where' arg is nil seeking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","where"].join('')));
}

if((!(tiltontec.cell.base.mdead_QMARK_(where)))){
} else {
throw (new Error(["Assert failed: ",["fasc> pass dead 'where' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo(where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$seeking),cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)].join(''),"\n","(not (mdead? where))"].join('')));
}

if(cljs.core.truth_(what)){
} else {
throw (new Error(["Assert failed: ",["fasc> 'what' arg is nil searching from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo(where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","what"].join('')));
}

tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$navig,cljs.core.cst$kw$fasc_DASH_entry,cljs.core.cst$kw$what,what,cljs.core.cst$kw$where,tiltontec.cell.base.minfo(where)], 0));

try{var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$wocd_QMARK_,true,cljs.core.cst$kw$must_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__17338 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17339 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17339);

try{var or__4126__auto__ = tiltontec.model.core.fasc_higher(what,where,options__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_failed,what,cljs.core.cst$kw$from,tiltontec.cell.base.minfo(where),cljs.core.cst$kw$options,options__$1], 0));

if(cljs.core.truth_(((cljs.core.not(cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1)))?tiltontec.model.core.fm_navig_EQ_(what,where):false))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_failed_DASH_with_DASH_me_QMARK__DASH_option_DASH_false_DASH_but_DASH_me_DASH_matches_DASH_what_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_], 0));
} else {
}

var md_17343 = (cljs.core.truth_(cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?where:cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where)));
while(true){
if(cljs.core.truth_(md_17343)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_fail_DASH_saw,tiltontec.cell.base.minfo(md_17343)], 0));

var G__17344 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(md_17343));
md_17343 = G__17344;
continue;
} else {
}
break;
}

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_failed_DASH_asc_DASH_end], 0));

return null;
} else {
return null;
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17338);
}}catch (e17337){if((e17337 instanceof Error)){
var e = e17337;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_sees_DASH_err_DASH_returns_DASH_nil,e], 0));

return null;
} else {
throw e17337;

}
}}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq17334){
var G__17335 = cljs.core.first(seq17334);
var seq17334__$1 = cljs.core.next(seq17334);
var G__17336 = cljs.core.first(seq17334__$1);
var seq17334__$2 = cljs.core.next(seq17334__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17335,G__17336,seq17334__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__17345 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17346 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17346);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__17347 = cljs.core.rest(sibs);
sibs = G__17347;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17345);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__17348 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17349 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17349);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__17350 = cljs.core.rest(sibs);
sibs = G__17350;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17348);
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
var len__4736__auto___17361 = arguments.length;
var i__4737__auto___17362 = (0);
while(true){
if((i__4737__auto___17362 < len__4736__auto___17361)){
args__4742__auto__.push((arguments[i__4737__auto___17362]));

var G__17363 = (i__4737__auto___17362 + (1));
i__4737__auto___17362 = G__17363;
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
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$must_QMARK_,true,cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR__orig_val__17355 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17356 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17356);

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
return cljs.core.some((function (p1__17351_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__17351_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$must_QMARK_,false,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$must_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$skip,where,cljs.core.cst$kw$inside_QMARK_,true], 0));
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
var G__17357 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__17358 = what;
var G__17359 = where;
var G__17360 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17357,G__17358,G__17359,G__17360) : tiltontec.util.core.err.call(null,G__17357,G__17358,G__17359,G__17360));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17355);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq17352){
var G__17353 = cljs.core.first(seq17352);
var seq17352__$1 = cljs.core.next(seq17352);
var G__17354 = cljs.core.first(seq17352__$1);
var seq17352__$2 = cljs.core.next(seq17352__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17353,G__17354,seq17352__$2);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.mget_QMARK_(p1__17364_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___17376 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17377 = arguments.length;
var i__4737__auto___17378 = (0);
while(true){
if((i__4737__auto___17378 < len__4736__auto___17377)){
args__4742__auto__.push((arguments[i__4737__auto___17378]));

var G__17379 = (i__4737__auto___17378 + (1));
i__4737__auto___17378 = G__17379;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__17372){
var vec__17373 = p__17372;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17373,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__17366__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__17365__17367__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__17366__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__17365__17367__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq17368){
var G__17369 = cljs.core.first(seq17368);
var seq17368__$1 = cljs.core.next(seq17368);
var G__17370 = cljs.core.first(seq17368__$1);
var seq17368__$2 = cljs.core.next(seq17368__$1);
var G__17371 = cljs.core.first(seq17368__$2);
var seq17368__$3 = cljs.core.next(seq17368__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17369,G__17370,G__17371,seq17368__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17380_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.mget_QMARK_(p1__17380_SHARP_,cljs.core.cst$kw$id));
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17381_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17381_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.mget_QMARK_(p1__17381_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17382_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17382_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.mget_QMARK_(p1__17382_SHARP_,property));
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
 * Use 'fmo' and extract :value (or prop indicated by :prop-name)
 */
tiltontec.model.core.fmov = (function tiltontec$model$core$fmov(var_args){
var G__17384 = arguments.length;
switch (G__17384) {
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

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3 = (function (me,id_name,prop_name){
var temp__5804__auto__ = tiltontec.model.core.fmo(me,id_name);
if(cljs.core.truth_(temp__5804__auto__)){
var mx = temp__5804__auto__;
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),prop_name)){
return tiltontec.model.core.mget(mx,prop_name);
} else {
throw ["fmov> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)," lacks ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_name)," property"].join('');
}
} else {
return null;
}
}));

(tiltontec.model.core.fmov.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___17389 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17390 = arguments.length;
var i__4737__auto___17391 = (0);
while(true){
if((i__4737__auto___17391 < len__4736__auto___17390)){
args__4742__auto__.push((arguments[i__4737__auto___17391]));

var G__17392 = (i__4737__auto___17391 + (1));
i__4737__auto___17391 = G__17392;
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
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq17386){
var G__17387 = cljs.core.first(seq17386);
var seq17386__$1 = cljs.core.next(seq17386);
var G__17388 = cljs.core.first(seq17386__$1);
var seq17386__$2 = cljs.core.next(seq17386__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17387,G__17388,seq17386__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___17396 = (function (){
/**
 * Syntax sugar for formulae that define :kids props
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17397 = arguments.length;
var i__4737__auto___17398 = (0);
while(true){
if((i__4737__auto___17398 < len__4736__auto___17397)){
args__4742__auto__.push((arguments[i__4737__auto___17398]));

var G__17399 = (i__4737__auto___17398 + (1));
i__4737__auto___17398 = G__17399;
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
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq17393){
var G__17394 = cljs.core.first(seq17393);
var seq17393__$1 = cljs.core.next(seq17393);
var G__17395 = cljs.core.first(seq17393__$1);
var seq17393__$2 = cljs.core.next(seq17393__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17394,G__17395,seq17393__$2);
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
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__17400(s__17401){
return (new cljs.core.LazySeq(null,(function (){
var s__17401__$1 = s__17401;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17401__$1);
if(temp__5804__auto__){
var s__17401__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17401__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17401__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17403 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17402 = (0);
while(true){
if((i__17402 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17402);
cljs.core.chunk_append(b__17403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__17406 = (i__17402 + (1));
i__17402 = G__17406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17403),tiltontec$model$core$kid_values_kids_$_iter__17400(cljs.core.chunk_rest(s__17401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17403),null);
}
} else {
var k = cljs.core.first(s__17401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__17400(cljs.core.rest(s__17401__$2)));
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
var _STAR_parent_STAR__orig_val__17404 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__17405 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__17405);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__17404);
}}
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_values)));
});
