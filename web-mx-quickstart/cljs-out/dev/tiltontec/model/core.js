// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.watch');
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
var G__23003 = cljs.core.str;
var G__23004 = "MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"";
var G__23005 = prop;
var G__23006 = "\".";
var G__23007 = "\n...> FYI: known props are";
var G__23008 = cljs.core.keys(cljs.core.deref(me));
var G__23009 = "\n...> FYI: use mget? if prop might not exist.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7(G__23003,G__23004,G__23005,G__23006,G__23007,G__23008,G__23009) : tiltontec.util.core.err.call(null,G__23003,G__23004,G__23005,G__23006,G__23007,G__23008,G__23009));
} else {
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__23010 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__23010) : prop.call(null,G__23010));
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
var ret__4785__auto___23015 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23016 = arguments.length;
var i__4737__auto___23017 = (0);
while(true){
if((i__4737__auto___23017 < len__4736__auto___23016)){
args__4742__auto__.push((arguments[i__4737__auto___23017]));

var G__23018 = (i__4737__auto___23017 + (1));
i__4737__auto___23017 = G__23018;
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
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq23011){
var G__23012 = cljs.core.first(seq23011);
var seq23011__$1 = cljs.core.next(seq23011);
var G__23013 = cljs.core.first(seq23011__$1);
var seq23011__$2 = cljs.core.next(seq23011__$1);
var G__23014 = cljs.core.first(seq23011__$2);
var seq23011__$3 = cljs.core.next(seq23011__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23012,G__23013,G__23014,seq23011__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___23023 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23024 = arguments.length;
var i__4737__auto___23025 = (0);
while(true){
if((i__4737__auto___23025 < len__4736__auto___23024)){
args__4742__auto__.push((arguments[i__4737__auto___23025]));

var G__23026 = (i__4737__auto___23025 + (1));
i__4737__auto___23025 = G__23026;
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
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq23019){
var G__23020 = cljs.core.first(seq23019);
var seq23019__$1 = cljs.core.next(seq23019);
var G__23021 = cljs.core.first(seq23019__$1);
var seq23019__$2 = cljs.core.next(seq23019__$1);
var G__23022 = cljs.core.first(seq23019__$2);
var seq23019__$3 = cljs.core.next(seq23019__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23020,G__23021,G__23022,seq23019__$3);
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
var G__23027 = cljs.core.str;
var G__23028 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__23029 = prop;
var G__23030 = "', which is not mediated by any cell.\n";
var G__23031 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__23032 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__23033 = "...> FYI: intended new value is [";
var G__23034 = new_value;
var G__23035 = "]; initial value was [";
var G__23036 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__23037 = "].\n";
var G__23038 = "...> FYI: instance is of type ";
var G__23039 = tiltontec.util.base.mx_type(me);
var G__23040 = ".\n";
var G__23041 = "...> FYI: full instance is ";
var G__23042 = cljs.core.deref(me);
var G__23043 = "\n";
var G__23044 = "...> FYI: instance meta is ";
var G__23045 = cljs.core.meta(me);
var G__23046 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__23027,G__23028,G__23029,G__23030,G__23031,G__23032,G__23033,G__23034,G__23035,G__23036,G__23037,G__23038,G__23039,G__23040,G__23041,G__23042,G__23043,G__23044,G__23045,G__23046) : tiltontec.util.core.err.call(null,G__23027,G__23028,G__23029,G__23030,G__23031,G__23032,G__23033,G__23034,G__23035,G__23036,G__23037,G__23038,G__23039,G__23040,G__23041,G__23042,G__23043,G__23044,G__23045,G__23046));
} else {
var G__23047 = cljs.core.str;
var G__23048 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"";
var G__23049 = prop;
var G__23050 = "\".\n";
var G__23051 = "...> FYI: known props are";
var G__23052 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__23047,G__23048,G__23049,G__23050,G__23051,G__23052) : tiltontec.util.core.err.call(null,G__23047,G__23048,G__23049,G__23050,G__23051,G__23052));
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
var len__4736__auto___23057 = arguments.length;
var i__4737__auto___23058 = (0);
while(true){
if((i__4737__auto___23058 < len__4736__auto___23057)){
args__4742__auto__.push((arguments[i__4737__auto___23058]));

var G__23059 = (i__4737__auto___23058 + (1));
i__4737__auto___23058 = G__23059;
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
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq23053){
var G__23054 = cljs.core.first(seq23053);
var seq23053__$1 = cljs.core.next(seq23053);
var G__23055 = cljs.core.first(seq23053__$1);
var seq23053__$2 = cljs.core.next(seq23053__$1);
var G__23056 = cljs.core.first(seq23053__$2);
var seq23053__$3 = cljs.core.next(seq23053__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23054,G__23055,G__23056,seq23053__$3);
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
var len__4736__auto___23073 = arguments.length;
var i__4737__auto___23074 = (0);
while(true){
if((i__4737__auto___23074 < len__4736__auto___23073)){
args__4742__auto__.push((arguments[i__4737__auto___23074]));

var G__23075 = (i__4737__auto___23074 + (1));
i__4737__auto___23074 = G__23075;
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
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23061){
var vec__23062 = p__23061;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23062,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23062,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23065){
var vec__23066 = p__23065;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23066,(1),null);
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$mx_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model),cljs.core.cst$kw$on_DASH_quiesce,cljs.core.get.cljs$core$IFn$_invoke$arity$2(iargs,cljs.core.cst$kw$on_DASH_quiesce)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23069){
var vec__23070 = p__23069;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
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
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq23060){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23060));
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
var seq__23076 = cljs.core.seq(lostks);
var chunk__23077 = null;
var count__23078 = (0);
var i__23079 = (0);
while(true){
if((i__23079 < count__23078)){
var k = chunk__23077.cljs$core$IIndexed$_nth$arity$2(null,i__23079);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__23080 = seq__23076;
var G__23081 = chunk__23077;
var G__23082 = count__23078;
var G__23083 = (i__23079 + (1));
seq__23076 = G__23080;
chunk__23077 = G__23081;
count__23078 = G__23082;
i__23079 = G__23083;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23076);
if(temp__5804__auto__){
var seq__23076__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23076__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23076__$1);
var G__23084 = cljs.core.chunk_rest(seq__23076__$1);
var G__23085 = c__4556__auto__;
var G__23086 = cljs.core.count(c__4556__auto__);
var G__23087 = (0);
seq__23076 = G__23084;
chunk__23077 = G__23085;
count__23078 = G__23086;
i__23079 = G__23087;
continue;
} else {
var k = cljs.core.first(seq__23076__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__23088 = cljs.core.next(seq__23076__$1);
var G__23089 = null;
var G__23090 = (0);
var G__23091 = (0);
seq__23076 = G__23088;
chunk__23077 = G__23089;
count__23078 = G__23090;
i__23079 = G__23091;
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
tiltontec.cell.watch.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (prop,me,newk,oldk,c){
return tiltontec.model.core.fm_kids_watch(me,newk,oldk,c);
}));
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
var seq__23092_23096 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23093_23097 = null;
var count__23094_23098 = (0);
var i__23095_23099 = (0);
while(true){
if((i__23095_23099 < count__23094_23098)){
var k_23100 = chunk__23093_23097.cljs$core$IIndexed$_nth$arity$2(null,i__23095_23099);
if(tiltontec.cell.base.md_ref_QMARK_(k_23100)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23100) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23100));
} else {
}


var G__23101 = seq__23092_23096;
var G__23102 = chunk__23093_23097;
var G__23103 = count__23094_23098;
var G__23104 = (i__23095_23099 + (1));
seq__23092_23096 = G__23101;
chunk__23093_23097 = G__23102;
count__23094_23098 = G__23103;
i__23095_23099 = G__23104;
continue;
} else {
var temp__5804__auto___23105 = cljs.core.seq(seq__23092_23096);
if(temp__5804__auto___23105){
var seq__23092_23106__$1 = temp__5804__auto___23105;
if(cljs.core.chunked_seq_QMARK_(seq__23092_23106__$1)){
var c__4556__auto___23107 = cljs.core.chunk_first(seq__23092_23106__$1);
var G__23108 = cljs.core.chunk_rest(seq__23092_23106__$1);
var G__23109 = c__4556__auto___23107;
var G__23110 = cljs.core.count(c__4556__auto___23107);
var G__23111 = (0);
seq__23092_23096 = G__23108;
chunk__23093_23097 = G__23109;
count__23094_23098 = G__23110;
i__23095_23099 = G__23111;
continue;
} else {
var k_23112 = cljs.core.first(seq__23092_23106__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_23112)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23112) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23112));
} else {
}


var G__23113 = cljs.core.next(seq__23092_23106__$1);
var G__23114 = null;
var G__23115 = (0);
var G__23116 = (0);
seq__23092_23096 = G__23113;
chunk__23093_23097 = G__23114;
count__23094_23098 = G__23115;
i__23095_23099 = G__23116;
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
var ret__4785__auto___23124 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23125 = arguments.length;
var i__4737__auto___23126 = (0);
while(true){
if((i__4737__auto___23126 < len__4736__auto___23125)){
args__4742__auto__.push((arguments[i__4737__auto___23126]));

var G__23127 = (i__4737__auto___23126 + (1));
i__4737__auto___23126 = G__23127;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__23120){
var vec__23121 = p__23120;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(0),null);
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
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq23117){
var G__23118 = cljs.core.first(seq23117);
var seq23117__$1 = cljs.core.next(seq23117);
var G__23119 = cljs.core.first(seq23117__$1);
var seq23117__$2 = cljs.core.next(seq23117__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23118,G__23119,seq23117__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___23137 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `prop`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23138 = arguments.length;
var i__4737__auto___23139 = (0);
while(true){
if((i__4737__auto___23139 < len__4736__auto___23138)){
args__4742__auto__.push((arguments[i__4737__auto___23139]));

var G__23140 = (i__4737__auto___23139 + (1));
i__4737__auto___23139 = G__23140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,prop,p__23133){
var vec__23134 = p__23133;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23134,(0),null);
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
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq23128){
var G__23129 = cljs.core.first(seq23128);
var seq23128__$1 = cljs.core.next(seq23128);
var G__23130 = cljs.core.first(seq23128__$1);
var seq23128__$2 = cljs.core.next(seq23128__$1);
var G__23131 = cljs.core.first(seq23128__$2);
var seq23128__$3 = cljs.core.next(seq23128__$2);
var G__23132 = cljs.core.first(seq23128__$3);
var seq23128__$4 = cljs.core.next(seq23128__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23129,G__23130,G__23131,G__23132,seq23128__$4);
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
var len__4736__auto___23150 = arguments.length;
var i__4737__auto___23151 = (0);
while(true){
if((i__4737__auto___23151 < len__4736__auto___23150)){
args__4742__auto__.push((arguments[i__4737__auto___23151]));

var G__23152 = (i__4737__auto___23151 + (1));
i__4737__auto___23151 = G__23152;
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
var _STAR_depender_STAR__orig_val__23144 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23145 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23145);

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
var G__23146 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__23147 = what;
var G__23148 = where;
var G__23149 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__23146,G__23147,G__23148,G__23149) : tiltontec.util.core.err.call(null,G__23146,G__23147,G__23148,G__23149));
} else {
return null;
}
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23144);
}} else {
return null;
}
}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq23141){
var G__23142 = cljs.core.first(seq23141);
var seq23141__$1 = cljs.core.next(seq23141);
var G__23143 = cljs.core.first(seq23141__$1);
var seq23141__$2 = cljs.core.next(seq23141__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23142,G__23143,seq23141__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__23153 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23154 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23154);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__23155 = cljs.core.rest(sibs);
sibs = G__23155;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23153);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__23156 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23157 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23157);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__23158 = cljs.core.rest(sibs);
sibs = G__23158;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23156);
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
var len__4736__auto___23169 = arguments.length;
var i__4737__auto___23170 = (0);
while(true){
if((i__4737__auto___23170 < len__4736__auto___23169)){
args__4742__auto__.push((arguments[i__4737__auto___23170]));

var G__23171 = (i__4737__auto___23170 + (1));
i__4737__auto___23170 = G__23171;
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
var _STAR_depender_STAR__orig_val__23163 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__23164 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__23164);

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
return cljs.core.some((function (p1__23159_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__23159_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
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
var G__23165 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__23166 = what;
var G__23167 = where;
var G__23168 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__23165,G__23166,G__23167,G__23168) : tiltontec.util.core.err.call(null,G__23165,G__23166,G__23167,G__23168));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__23163);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq23160){
var G__23161 = cljs.core.first(seq23160);
var seq23160__$1 = cljs.core.next(seq23160);
var G__23162 = cljs.core.first(seq23160__$1);
var seq23160__$2 = cljs.core.next(seq23160__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23161,G__23162,seq23160__$2);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.mget_QMARK_(p1__23172_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___23184 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23185 = arguments.length;
var i__4737__auto___23186 = (0);
while(true){
if((i__4737__auto___23186 < len__4736__auto___23185)){
args__4742__auto__.push((arguments[i__4737__auto___23186]));

var G__23187 = (i__4737__auto___23186 + (1));
i__4737__auto___23186 = G__23187;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__23180){
var vec__23181 = p__23180;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23181,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__23174__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__23173__23175__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__23174__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__23173__23175__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq23176){
var G__23177 = cljs.core.first(seq23176);
var seq23176__$1 = cljs.core.next(seq23176);
var G__23178 = cljs.core.first(seq23176__$1);
var seq23176__$2 = cljs.core.next(seq23176__$1);
var G__23179 = cljs.core.first(seq23176__$2);
var seq23176__$3 = cljs.core.next(seq23176__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23177,G__23178,G__23179,seq23176__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23188_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.mget_QMARK_(p1__23188_SHARP_,cljs.core.cst$kw$id));
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23189_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__23189_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.mget_QMARK_(p1__23189_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__23190_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__23190_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.mget_QMARK_(p1__23190_SHARP_,property));
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
var G__23192 = arguments.length;
switch (G__23192) {
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

var ret__4785__auto___23197 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23198 = arguments.length;
var i__4737__auto___23199 = (0);
while(true){
if((i__4737__auto___23199 < len__4736__auto___23198)){
args__4742__auto__.push((arguments[i__4737__auto___23199]));

var G__23200 = (i__4737__auto___23199 + (1));
i__4737__auto___23199 = G__23200;
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
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq23194){
var G__23195 = cljs.core.first(seq23194);
var seq23194__$1 = cljs.core.next(seq23194);
var G__23196 = cljs.core.first(seq23194__$1);
var seq23194__$2 = cljs.core.next(seq23194__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23195,G__23196,seq23194__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___23204 = (function (){
/**
 * Syntax sugar for formulae that define :kids props
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23205 = arguments.length;
var i__4737__auto___23206 = (0);
while(true){
if((i__4737__auto___23206 < len__4736__auto___23205)){
args__4742__auto__.push((arguments[i__4737__auto___23206]));

var G__23207 = (i__4737__auto___23206 + (1));
i__4737__auto___23206 = G__23207;
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
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq23201){
var G__23202 = cljs.core.first(seq23201);
var seq23201__$1 = cljs.core.next(seq23201);
var G__23203 = cljs.core.first(seq23201__$1);
var seq23201__$2 = cljs.core.next(seq23201__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23202,G__23203,seq23201__$2);
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
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__23208(s__23209){
return (new cljs.core.LazySeq(null,(function (){
var s__23209__$1 = s__23209;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23209__$1);
if(temp__5804__auto__){
var s__23209__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23209__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__23209__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__23211 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__23210 = (0);
while(true){
if((i__23210 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__23210);
cljs.core.chunk_append(b__23211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__23214 = (i__23210 + (1));
i__23210 = G__23214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23211),tiltontec$model$core$kid_values_kids_$_iter__23208(cljs.core.chunk_rest(s__23209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23211),null);
}
} else {
var k = cljs.core.first(s__23209__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__23208(cljs.core.rest(s__23209__$2)));
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
var _STAR_parent_STAR__orig_val__23212 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__23213 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__23213);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__23212);
}}
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_values)));
});
