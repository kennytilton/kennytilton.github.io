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
var G__17183 = cljs.core.str;
var G__17184 = "MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"";
var G__17185 = prop;
var G__17186 = "\".";
var G__17187 = "\n...> FYI: known props are";
var G__17188 = cljs.core.keys(cljs.core.deref(me));
var G__17189 = "\n...> FYI: use mget? if prop might not exist.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7(G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189) : tiltontec.util.core.err.call(null,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189));
} else {
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.cget(c);
} else {
var G__17190 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__17190) : prop.call(null,G__17190));
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
var ret__4785__auto___17195 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17196 = arguments.length;
var i__4737__auto___17197 = (0);
while(true){
if((i__4737__auto___17197 < len__4736__auto___17196)){
args__4742__auto__.push((arguments[i__4737__auto___17197]));

var G__17198 = (i__4737__auto___17197 + (1));
i__4737__auto___17197 = G__17198;
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
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq17191){
var G__17192 = cljs.core.first(seq17191);
var seq17191__$1 = cljs.core.next(seq17191);
var G__17193 = cljs.core.first(seq17191__$1);
var seq17191__$2 = cljs.core.next(seq17191__$1);
var G__17194 = cljs.core.first(seq17191__$2);
var seq17191__$3 = cljs.core.next(seq17191__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17192,G__17193,G__17194,seq17191__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___17203 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17204 = arguments.length;
var i__4737__auto___17205 = (0);
while(true){
if((i__4737__auto___17205 < len__4736__auto___17204)){
args__4742__auto__.push((arguments[i__4737__auto___17205]));

var G__17206 = (i__4737__auto___17205 + (1));
i__4737__auto___17205 = G__17206;
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
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq17199){
var G__17200 = cljs.core.first(seq17199);
var seq17199__$1 = cljs.core.next(seq17199);
var G__17201 = cljs.core.first(seq17199__$1);
var seq17199__$2 = cljs.core.next(seq17199__$1);
var G__17202 = cljs.core.first(seq17199__$2);
var seq17199__$3 = cljs.core.next(seq17199__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17200,G__17201,G__17202,seq17199__$3);
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
var G__17207 = cljs.core.str;
var G__17208 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__17209 = prop;
var G__17210 = "', which is not mediated by any cell.\n";
var G__17211 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__17212 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__17213 = "...> FYI: intended new value is [";
var G__17214 = new_value;
var G__17215 = "]; initial value was [";
var G__17216 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__17217 = "].\n";
var G__17218 = "...> FYI: instance is of type ";
var G__17219 = tiltontec.util.base.mx_type(me);
var G__17220 = ".\n";
var G__17221 = "...> FYI: full instance is ";
var G__17222 = cljs.core.deref(me);
var G__17223 = "\n";
var G__17224 = "...> FYI: instance meta is ";
var G__17225 = cljs.core.meta(me);
var G__17226 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__17207,G__17208,G__17209,G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226) : tiltontec.util.core.err.call(null,G__17207,G__17208,G__17209,G__17210,G__17211,G__17212,G__17213,G__17214,G__17215,G__17216,G__17217,G__17218,G__17219,G__17220,G__17221,G__17222,G__17223,G__17224,G__17225,G__17226));
} else {
var G__17227 = cljs.core.str;
var G__17228 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"";
var G__17229 = prop;
var G__17230 = "\".\n";
var G__17231 = "...> FYI: known props are";
var G__17232 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__17227,G__17228,G__17229,G__17230,G__17231,G__17232) : tiltontec.util.core.err.call(null,G__17227,G__17228,G__17229,G__17230,G__17231,G__17232));
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
var len__4736__auto___17237 = arguments.length;
var i__4737__auto___17238 = (0);
while(true){
if((i__4737__auto___17238 < len__4736__auto___17237)){
args__4742__auto__.push((arguments[i__4737__auto___17238]));

var G__17239 = (i__4737__auto___17238 + (1));
i__4737__auto___17238 = G__17239;
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
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq17233){
var G__17234 = cljs.core.first(seq17233);
var seq17233__$1 = cljs.core.next(seq17233);
var G__17235 = cljs.core.first(seq17233__$1);
var seq17233__$2 = cljs.core.next(seq17233__$1);
var G__17236 = cljs.core.first(seq17233__$2);
var seq17233__$3 = cljs.core.next(seq17233__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17234,G__17235,G__17236,seq17233__$3);
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
var len__4736__auto___17253 = arguments.length;
var i__4737__auto___17254 = (0);
while(true){
if((i__4737__auto___17254 < len__4736__auto___17253)){
args__4742__auto__.push((arguments[i__4737__auto___17254]));

var G__17255 = (i__4737__auto___17254 + (1));
i__4737__auto___17254 = G__17255;
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
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17241){
var vec__17242 = p__17241;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17242,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17245){
var vec__17246 = p__17245;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246,(1),null);
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$mx_DASH_sid,tiltontec.util.base.mx_sid_next(),cljs.core.cst$kw$mx_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model),cljs.core.cst$kw$on_DASH_quiesce,cljs.core.get.cljs$core$IFn$_invoke$arity$2(iargs,cljs.core.cst$kw$on_DASH_quiesce)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17249){
var vec__17250 = p__17249;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250,(1),null);
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
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq17240){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17240));
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

var seq__17256 = cljs.core.seq(lostks);
var chunk__17257 = null;
var count__17258 = (0);
var i__17259 = (0);
while(true){
if((i__17259 < count__17258)){
var k = chunk__17257.cljs$core$IIndexed$_nth$arity$2(null,i__17259);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.poly.md_quiesce.call(null,k));


var G__17260 = seq__17256;
var G__17261 = chunk__17257;
var G__17262 = count__17258;
var G__17263 = (i__17259 + (1));
seq__17256 = G__17260;
chunk__17257 = G__17261;
count__17258 = G__17262;
i__17259 = G__17263;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17256);
if(temp__5804__auto__){
var seq__17256__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17256__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17256__$1);
var G__17264 = cljs.core.chunk_rest(seq__17256__$1);
var G__17265 = c__4556__auto__;
var G__17266 = cljs.core.count(c__4556__auto__);
var G__17267 = (0);
seq__17256 = G__17264;
chunk__17257 = G__17265;
count__17258 = G__17266;
i__17259 = G__17267;
continue;
} else {
var k = cljs.core.first(seq__17256__$1);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.poly.md_quiesce.call(null,k));


var G__17268 = cljs.core.next(seq__17256__$1);
var G__17269 = null;
var G__17270 = (0);
var G__17271 = (0);
seq__17256 = G__17268;
chunk__17257 = G__17269;
count__17258 = G__17270;
i__17259 = G__17271;
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

var seq__17272_17276 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17273_17277 = null;
var count__17274_17278 = (0);
var i__17275_17279 = (0);
while(true){
if((i__17275_17279 < count__17274_17278)){
var k_17280 = chunk__17273_17277.cljs$core$IIndexed$_nth$arity$2(null,i__17275_17279);
if(tiltontec.cell.base.md_ref_QMARK_(k_17280)){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$family_DASH_md_DASH_quiKID_BANG_,tiltontec.cell.base.minfo(me)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17280) : tiltontec.cell.poly.md_quiesce.call(null,k_17280));
} else {
}


var G__17281 = seq__17272_17276;
var G__17282 = chunk__17273_17277;
var G__17283 = count__17274_17278;
var G__17284 = (i__17275_17279 + (1));
seq__17272_17276 = G__17281;
chunk__17273_17277 = G__17282;
count__17274_17278 = G__17283;
i__17275_17279 = G__17284;
continue;
} else {
var temp__5804__auto___17285 = cljs.core.seq(seq__17272_17276);
if(temp__5804__auto___17285){
var seq__17272_17286__$1 = temp__5804__auto___17285;
if(cljs.core.chunked_seq_QMARK_(seq__17272_17286__$1)){
var c__4556__auto___17287 = cljs.core.chunk_first(seq__17272_17286__$1);
var G__17288 = cljs.core.chunk_rest(seq__17272_17286__$1);
var G__17289 = c__4556__auto___17287;
var G__17290 = cljs.core.count(c__4556__auto___17287);
var G__17291 = (0);
seq__17272_17276 = G__17288;
chunk__17273_17277 = G__17289;
count__17274_17278 = G__17290;
i__17275_17279 = G__17291;
continue;
} else {
var k_17292 = cljs.core.first(seq__17272_17286__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17292)){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$family_DASH_md_DASH_quiKID_BANG_,tiltontec.cell.base.minfo(me)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17292) : tiltontec.cell.poly.md_quiesce.call(null,k_17292));
} else {
}


var G__17293 = cljs.core.next(seq__17272_17286__$1);
var G__17294 = null;
var G__17295 = (0);
var G__17296 = (0);
seq__17272_17276 = G__17293;
chunk__17273_17277 = G__17294;
count__17274_17278 = G__17295;
i__17275_17279 = G__17296;
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
var ret__4785__auto___17304 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17305 = arguments.length;
var i__4737__auto___17306 = (0);
while(true){
if((i__4737__auto___17306 < len__4736__auto___17305)){
args__4742__auto__.push((arguments[i__4737__auto___17306]));

var G__17307 = (i__4737__auto___17306 + (1));
i__4737__auto___17306 = G__17307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__17300){
var vec__17301 = p__17300;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17301,(0),null);
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
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq17297){
var G__17298 = cljs.core.first(seq17297);
var seq17297__$1 = cljs.core.next(seq17297);
var G__17299 = cljs.core.first(seq17297__$1);
var seq17297__$2 = cljs.core.next(seq17297__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17298,G__17299,seq17297__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___17317 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `prop`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17318 = arguments.length;
var i__4737__auto___17319 = (0);
while(true){
if((i__4737__auto___17319 < len__4736__auto___17318)){
args__4742__auto__.push((arguments[i__4737__auto___17319]));

var G__17320 = (i__4737__auto___17319 + (1));
i__4737__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,prop,p__17313){
var vec__17314 = p__17313;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314,(0),null);
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
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq17308){
var G__17309 = cljs.core.first(seq17308);
var seq17308__$1 = cljs.core.next(seq17308);
var G__17310 = cljs.core.first(seq17308__$1);
var seq17308__$2 = cljs.core.next(seq17308__$1);
var G__17311 = cljs.core.first(seq17308__$2);
var seq17308__$3 = cljs.core.next(seq17308__$2);
var G__17312 = cljs.core.first(seq17308__$3);
var seq17308__$4 = cljs.core.next(seq17308__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17309,G__17310,G__17311,G__17312,seq17308__$4);
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
var G__17321 = what;
var G__17322 = par;
var G__17323 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$me_QMARK_,true);
return (tiltontec.model.core.fasc_higher.cljs$core$IFn$_invoke$arity$3 ? tiltontec.model.core.fasc_higher.cljs$core$IFn$_invoke$arity$3(G__17321,G__17322,G__17323) : tiltontec.model.core.fasc_higher.call(null,G__17321,G__17322,G__17323));
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
var len__4736__auto___17330 = arguments.length;
var i__4737__auto___17331 = (0);
while(true){
if((i__4737__auto___17331 < len__4736__auto___17330)){
args__4742__auto__.push((arguments[i__4737__auto___17331]));

var G__17332 = (i__4737__auto___17331 + (1));
i__4737__auto___17331 = G__17332;
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
var _STAR_depender_STAR__orig_val__17328 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17329 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17329);

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

var md_17333 = (cljs.core.truth_(cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?where:cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where)));
while(true){
if(cljs.core.truth_(md_17333)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_fail_DASH_saw,tiltontec.cell.base.minfo(md_17333)], 0));

var G__17334 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(md_17333));
md_17333 = G__17334;
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
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17328);
}}catch (e17327){if((e17327 instanceof Error)){
var e = e17327;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fasc_DASH_sees_DASH_err_DASH_returns_DASH_nil,e], 0));

return null;
} else {
throw e17327;

}
}}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq17324){
var G__17325 = cljs.core.first(seq17324);
var seq17324__$1 = cljs.core.next(seq17324);
var G__17326 = cljs.core.first(seq17324__$1);
var seq17324__$2 = cljs.core.next(seq17324__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17325,G__17326,seq17324__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__17335 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17336 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17336);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__17337 = cljs.core.rest(sibs);
sibs = G__17337;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17335);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__17338 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17339 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17339);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__17340 = cljs.core.rest(sibs);
sibs = G__17340;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17338);
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
var len__4736__auto___17351 = arguments.length;
var i__4737__auto___17352 = (0);
while(true){
if((i__4737__auto___17352 < len__4736__auto___17351)){
args__4742__auto__.push((arguments[i__4737__auto___17352]));

var G__17353 = (i__4737__auto___17352 + (1));
i__4737__auto___17352 = G__17353;
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
var _STAR_depender_STAR__orig_val__17345 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17346 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17346);

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
return cljs.core.some((function (p1__17341_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__17341_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$must_QMARK_,false,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
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
var G__17347 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__17348 = what;
var G__17349 = where;
var G__17350 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17347,G__17348,G__17349,G__17350) : tiltontec.util.core.err.call(null,G__17347,G__17348,G__17349,G__17350));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17345);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq17342){
var G__17343 = cljs.core.first(seq17342);
var seq17342__$1 = cljs.core.next(seq17342);
var G__17344 = cljs.core.first(seq17342__$1);
var seq17342__$2 = cljs.core.next(seq17342__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17343,G__17344,seq17342__$2);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17354_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.mget_QMARK_(p1__17354_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___17366 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17367 = arguments.length;
var i__4737__auto___17368 = (0);
while(true){
if((i__4737__auto___17368 < len__4736__auto___17367)){
args__4742__auto__.push((arguments[i__4737__auto___17368]));

var G__17369 = (i__4737__auto___17368 + (1));
i__4737__auto___17368 = G__17369;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__17362){
var vec__17363 = p__17362;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__17356__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__17355__17357__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__17356__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__17355__17357__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq17358){
var G__17359 = cljs.core.first(seq17358);
var seq17358__$1 = cljs.core.next(seq17358);
var G__17360 = cljs.core.first(seq17358__$1);
var seq17358__$2 = cljs.core.next(seq17358__$1);
var G__17361 = cljs.core.first(seq17358__$2);
var seq17358__$3 = cljs.core.next(seq17358__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17359,G__17360,G__17361,seq17358__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17370_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.mget_QMARK_(p1__17370_SHARP_,cljs.core.cst$kw$id));
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17371_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17371_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.mget_QMARK_(p1__17371_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17372_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17372_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.mget_QMARK_(p1__17372_SHARP_,property));
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
var G__17374 = arguments.length;
switch (G__17374) {
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

var ret__4785__auto___17379 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17380 = arguments.length;
var i__4737__auto___17381 = (0);
while(true){
if((i__4737__auto___17381 < len__4736__auto___17380)){
args__4742__auto__.push((arguments[i__4737__auto___17381]));

var G__17382 = (i__4737__auto___17381 + (1));
i__4737__auto___17381 = G__17382;
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
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq17376){
var G__17377 = cljs.core.first(seq17376);
var seq17376__$1 = cljs.core.next(seq17376);
var G__17378 = cljs.core.first(seq17376__$1);
var seq17376__$2 = cljs.core.next(seq17376__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17377,G__17378,seq17376__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___17386 = (function (){
/**
 * Syntax sugar for formulae that define :kids props
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17387 = arguments.length;
var i__4737__auto___17388 = (0);
while(true){
if((i__4737__auto___17388 < len__4736__auto___17387)){
args__4742__auto__.push((arguments[i__4737__auto___17388]));

var G__17389 = (i__4737__auto___17388 + (1));
i__4737__auto___17388 = G__17389;
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
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq17383){
var G__17384 = cljs.core.first(seq17383);
var seq17383__$1 = cljs.core.next(seq17383);
var G__17385 = cljs.core.first(seq17383__$1);
var seq17383__$2 = cljs.core.next(seq17383__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17384,G__17385,seq17383__$2);
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
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__17390(s__17391){
return (new cljs.core.LazySeq(null,(function (){
var s__17391__$1 = s__17391;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17391__$1);
if(temp__5804__auto__){
var s__17391__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17391__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17391__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17393 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17392 = (0);
while(true){
if((i__17392 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17392);
cljs.core.chunk_append(b__17393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__17396 = (i__17392 + (1));
i__17392 = G__17396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17393),tiltontec$model$core$kid_values_kids_$_iter__17390(cljs.core.chunk_rest(s__17391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17393),null);
}
} else {
var k = cljs.core.first(s__17391__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__17390(cljs.core.rest(s__17391__$2)));
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
var _STAR_parent_STAR__orig_val__17394 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__17395 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__17395);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__17394);
}}
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_values)));
});
