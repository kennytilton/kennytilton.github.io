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
var G__17262 = cljs.core.str;
var G__17263 = "MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"";
var G__17264 = prop;
var G__17265 = "\".";
var G__17266 = "\n...> FYI: known props are";
var G__17267 = cljs.core.keys(cljs.core.deref(me));
var G__17268 = "\n...> FYI: use mget? if prop might not exist.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$7(G__17262,G__17263,G__17264,G__17265,G__17266,G__17267,G__17268) : tiltontec.util.core.err.call(null,G__17262,G__17263,G__17264,G__17265,G__17266,G__17267,G__17268));
} else {
var temp__5802__auto__ = tiltontec.model.base.md_cell(me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__17269 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__17269) : prop.call(null,G__17269));
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
var ret__4785__auto___17274 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17275 = arguments.length;
var i__4737__auto___17276 = (0);
while(true){
if((i__4737__auto___17276 < len__4736__auto___17275)){
args__4742__auto__.push((arguments[i__4737__auto___17276]));

var G__17277 = (i__4737__auto___17276 + (1));
i__4737__auto___17276 = G__17277;
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
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq17270){
var G__17271 = cljs.core.first(seq17270);
var seq17270__$1 = cljs.core.next(seq17270);
var G__17272 = cljs.core.first(seq17270__$1);
var seq17270__$2 = cljs.core.next(seq17270__$1);
var G__17273 = cljs.core.first(seq17270__$2);
var seq17270__$3 = cljs.core.next(seq17270__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17271,G__17272,G__17273,seq17270__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___17282 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17283 = arguments.length;
var i__4737__auto___17284 = (0);
while(true){
if((i__4737__auto___17284 < len__4736__auto___17283)){
args__4742__auto__.push((arguments[i__4737__auto___17284]));

var G__17285 = (i__4737__auto___17284 + (1));
i__4737__auto___17284 = G__17285;
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
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq17278){
var G__17279 = cljs.core.first(seq17278);
var seq17278__$1 = cljs.core.next(seq17278);
var G__17280 = cljs.core.first(seq17278__$1);
var seq17278__$2 = cljs.core.next(seq17278__$1);
var G__17281 = cljs.core.first(seq17278__$2);
var seq17278__$3 = cljs.core.next(seq17278__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17279,G__17280,G__17281,seq17278__$3);
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
var G__17286 = cljs.core.str;
var G__17287 = "MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '";
var G__17288 = prop;
var G__17289 = "', which is not mediated by any cell.\n";
var G__17290 = "...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n";
var G__17291 = "...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n";
var G__17292 = "...> FYI: intended new value is [";
var G__17293 = new_value;
var G__17294 = "]; initial value was [";
var G__17295 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__17296 = "].\n";
var G__17297 = "...> FYI: instance is of type ";
var G__17298 = tiltontec.util.base.mx_type(me);
var G__17299 = ".\n";
var G__17300 = "...> FYI: full instance is ";
var G__17301 = cljs.core.deref(me);
var G__17302 = "\n";
var G__17303 = "...> FYI: instance meta is ";
var G__17304 = cljs.core.meta(me);
var G__17305 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$20(G__17286,G__17287,G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294,G__17295,G__17296,G__17297,G__17298,G__17299,G__17300,G__17301,G__17302,G__17303,G__17304,G__17305) : tiltontec.util.core.err.call(null,G__17286,G__17287,G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294,G__17295,G__17296,G__17297,G__17298,G__17299,G__17300,G__17301,G__17302,G__17303,G__17304,G__17305));
} else {
var G__17306 = cljs.core.str;
var G__17307 = "MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"";
var G__17308 = prop;
var G__17309 = "\".\n";
var G__17310 = "...> FYI: known props are";
var G__17311 = cljs.core.keys(cljs.core.deref(me));
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$6(G__17306,G__17307,G__17308,G__17309,G__17310,G__17311) : tiltontec.util.core.err.call(null,G__17306,G__17307,G__17308,G__17309,G__17310,G__17311));
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
var len__4736__auto___17316 = arguments.length;
var i__4737__auto___17317 = (0);
while(true){
if((i__4737__auto___17317 < len__4736__auto___17316)){
args__4742__auto__.push((arguments[i__4737__auto___17317]));

var G__17318 = (i__4737__auto___17317 + (1));
i__4737__auto___17317 = G__17318;
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
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq17312){
var G__17313 = cljs.core.first(seq17312);
var seq17312__$1 = cljs.core.next(seq17312);
var G__17314 = cljs.core.first(seq17312__$1);
var seq17312__$2 = cljs.core.next(seq17312__$1);
var G__17315 = cljs.core.first(seq17312__$2);
var seq17312__$3 = cljs.core.next(seq17312__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17313,G__17314,G__17315,seq17312__$3);
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
var len__4736__auto___17332 = arguments.length;
var i__4737__auto___17333 = (0);
while(true){
if((i__4737__auto___17333 < len__4736__auto___17332)){
args__4742__auto__.push((arguments[i__4737__auto___17333]));

var G__17334 = (i__4737__auto___17333 + (1));
i__4737__auto___17333 = G__17334;
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
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parent,tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17320){
var vec__17321 = p__17320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17321,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17324){
var vec__17325 = p__17324;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17325,(1),null);
return cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent,cljs.core.cst$kw$mx_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$3(iargs,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_model),cljs.core.cst$kw$on_DASH_quiesce,cljs.core.get.cljs$core$IFn$_invoke$arity$2(iargs,cljs.core.cst$kw$on_DASH_quiesce)], null)], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17328){
var vec__17329 = p__17328;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329,(1),null);
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
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq17319){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17319));
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
var seq__17335 = cljs.core.seq(lostks);
var chunk__17336 = null;
var count__17337 = (0);
var i__17338 = (0);
while(true){
if((i__17338 < count__17337)){
var k = chunk__17336.cljs$core$IIndexed$_nth$arity$2(null,i__17338);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__17339 = seq__17335;
var G__17340 = chunk__17336;
var G__17341 = count__17337;
var G__17342 = (i__17338 + (1));
seq__17335 = G__17339;
chunk__17336 = G__17340;
count__17337 = G__17341;
i__17338 = G__17342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17335);
if(temp__5804__auto__){
var seq__17335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17335__$1);
var G__17343 = cljs.core.chunk_rest(seq__17335__$1);
var G__17344 = c__4556__auto__;
var G__17345 = cljs.core.count(c__4556__auto__);
var G__17346 = (0);
seq__17335 = G__17343;
chunk__17336 = G__17344;
count__17337 = G__17345;
i__17338 = G__17346;
continue;
} else {
var k = cljs.core.first(seq__17335__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.md_quiesce.call(null,k));


var G__17347 = cljs.core.next(seq__17335__$1);
var G__17348 = null;
var G__17349 = (0);
var G__17350 = (0);
seq__17335 = G__17347;
chunk__17336 = G__17348;
count__17337 = G__17349;
i__17338 = G__17350;
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
var seq__17351_17355 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17352_17356 = null;
var count__17353_17357 = (0);
var i__17354_17358 = (0);
while(true){
if((i__17354_17358 < count__17353_17357)){
var k_17359 = chunk__17352_17356.cljs$core$IIndexed$_nth$arity$2(null,i__17354_17358);
if(tiltontec.cell.base.md_ref_QMARK_(k_17359)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17359) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17359));
} else {
}


var G__17360 = seq__17351_17355;
var G__17361 = chunk__17352_17356;
var G__17362 = count__17353_17357;
var G__17363 = (i__17354_17358 + (1));
seq__17351_17355 = G__17360;
chunk__17352_17356 = G__17361;
count__17353_17357 = G__17362;
i__17354_17358 = G__17363;
continue;
} else {
var temp__5804__auto___17364 = cljs.core.seq(seq__17351_17355);
if(temp__5804__auto___17364){
var seq__17351_17365__$1 = temp__5804__auto___17364;
if(cljs.core.chunked_seq_QMARK_(seq__17351_17365__$1)){
var c__4556__auto___17366 = cljs.core.chunk_first(seq__17351_17365__$1);
var G__17367 = cljs.core.chunk_rest(seq__17351_17365__$1);
var G__17368 = c__4556__auto___17366;
var G__17369 = cljs.core.count(c__4556__auto___17366);
var G__17370 = (0);
seq__17351_17355 = G__17367;
chunk__17352_17356 = G__17368;
count__17353_17357 = G__17369;
i__17354_17358 = G__17370;
continue;
} else {
var k_17371 = cljs.core.first(seq__17351_17365__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17371)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17371) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17371));
} else {
}


var G__17372 = cljs.core.next(seq__17351_17365__$1);
var G__17373 = null;
var G__17374 = (0);
var G__17375 = (0);
seq__17351_17355 = G__17372;
chunk__17352_17356 = G__17373;
count__17353_17357 = G__17374;
i__17354_17358 = G__17375;
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
var ret__4785__auto___17383 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17384 = arguments.length;
var i__4737__auto___17385 = (0);
while(true){
if((i__4737__auto___17385 < len__4736__auto___17384)){
args__4742__auto__.push((arguments[i__4737__auto___17385]));

var G__17386 = (i__4737__auto___17385 + (1));
i__4737__auto___17385 = G__17386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__17379){
var vec__17380 = p__17379;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380,(0),null);
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
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq17376){
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
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___17396 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `prop`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
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

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,prop,p__17392){
var vec__17393 = p__17392;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17393,(0),null);
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
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq17387){
var G__17388 = cljs.core.first(seq17387);
var seq17387__$1 = cljs.core.next(seq17387);
var G__17389 = cljs.core.first(seq17387__$1);
var seq17387__$2 = cljs.core.next(seq17387__$1);
var G__17390 = cljs.core.first(seq17387__$2);
var seq17387__$3 = cljs.core.next(seq17387__$2);
var G__17391 = cljs.core.first(seq17387__$3);
var seq17387__$4 = cljs.core.next(seq17387__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17388,G__17389,G__17390,G__17391,seq17387__$4);
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
var len__4736__auto___17409 = arguments.length;
var i__4737__auto___17410 = (0);
while(true){
if((i__4737__auto___17410 < len__4736__auto___17409)){
args__4742__auto__.push((arguments[i__4737__auto___17410]));

var G__17411 = (i__4737__auto___17410 + (1));
i__4737__auto___17410 = G__17411;
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
var _STAR_depender_STAR__orig_val__17403 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17404 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17404);

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
var G__17405 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__17406 = what;
var G__17407 = where;
var G__17408 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17405,G__17406,G__17407,G__17408) : tiltontec.util.core.err.call(null,G__17405,G__17406,G__17407,G__17408));
} else {
return null;
}
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17403);
}} else {
return null;
}
}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq17400){
var G__17401 = cljs.core.first(seq17400);
var seq17400__$1 = cljs.core.next(seq17400);
var G__17402 = cljs.core.first(seq17400__$1);
var seq17400__$2 = cljs.core.next(seq17400__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17401,G__17402,seq17400__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__17412 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17413 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17413);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return cljs.core.second(sibs);
} else {
var G__17414 = cljs.core.rest(sibs);
sibs = G__17414;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17412);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__17415 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17416 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17416);

try{var sibs = tiltontec.model.core.md_kids(tiltontec.model.core.md_par(mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.first(sibs))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,cljs.core.second(sibs))){
return cljs.core.first(sibs);
} else {
var G__17417 = cljs.core.rest(sibs);
sibs = G__17417;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17415);
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
var len__4736__auto___17428 = arguments.length;
var i__4737__auto___17429 = (0);
while(true){
if((i__4737__auto___17429 < len__4736__auto___17428)){
args__4742__auto__.push((arguments[i__4737__auto___17429]));

var G__17430 = (i__4737__auto___17429 + (1));
i__4737__auto___17429 = G__17430;
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
var _STAR_depender_STAR__orig_val__17422 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__17423 = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__17423);

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
return cljs.core.some((function (p1__17418_SHARP_){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(what,p1__17418_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
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
var G__17424 = cljs.core.cst$kw$fm_DASH_navig_DASH_must_DASH_failed;
var G__17425 = what;
var G__17426 = where;
var G__17427 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__17424,G__17425,G__17426,G__17427) : tiltontec.util.core.err.call(null,G__17424,G__17425,G__17426,G__17427));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__17422);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq17419){
var G__17420 = cljs.core.first(seq17419);
var seq17419__$1 = cljs.core.next(seq17419);
var G__17421 = cljs.core.first(seq17419__$1);
var seq17419__$2 = cljs.core.next(seq17419__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17420,G__17421,seq17419__$2);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17431_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,tiltontec.model.core.mget_QMARK_(p1__17431_SHARP_,cljs.core.cst$kw$name));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
});
var ret__4785__auto___17443 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17444 = arguments.length;
var i__4737__auto___17445 = (0);
while(true){
if((i__4737__auto___17445 < len__4736__auto___17444)){
args__4742__auto__.push((arguments[i__4737__auto___17445]));

var G__17446 = (i__4737__auto___17445 + (1));
i__4737__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__17439){
var vec__17440 = p__17439;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17440,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$name__17433__auto__,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_DASH_navig,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__17432__17434__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$name__17433__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$model$core_SLASH_mget_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__17432__17434__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$me_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$up_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$inside_QMARK_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq17435){
var G__17436 = cljs.core.first(seq17435);
var seq17435__$1 = cljs.core.next(seq17435);
var G__17437 = cljs.core.first(seq17435__$1);
var seq17435__$2 = cljs.core.next(seq17435__$1);
var G__17438 = cljs.core.first(seq17435__$2);
var seq17435__$3 = cljs.core.next(seq17435__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17436,G__17437,G__17438,seq17435__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17447_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tiltontec.model.core.mget_QMARK_(p1__17447_SHARP_,cljs.core.cst$kw$id));
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17448_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17448_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.mget_QMARK_(p1__17448_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17449_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_(p1__17449_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.mget_QMARK_(p1__17449_SHARP_,property));
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
var G__17451 = arguments.length;
switch (G__17451) {
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

var ret__4785__auto___17456 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17457 = arguments.length;
var i__4737__auto___17458 = (0);
while(true){
if((i__4737__auto___17458 < len__4736__auto___17457)){
args__4742__auto__.push((arguments[i__4737__auto___17458]));

var G__17459 = (i__4737__auto___17458 + (1));
i__4737__auto___17458 = G__17459;
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
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq17453){
var G__17454 = cljs.core.first(seq17453);
var seq17453__$1 = cljs.core.next(seq17453);
var G__17455 = cljs.core.first(seq17453__$1);
var seq17453__$2 = cljs.core.next(seq17453__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17454,G__17455,seq17453__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___17463 = (function (){
/**
 * Syntax sugar for formulae that define :kids props
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17464 = arguments.length;
var i__4737__auto___17465 = (0);
while(true){
if((i__4737__auto___17465 < len__4736__auto___17464)){
args__4742__auto__.push((arguments[i__4737__auto___17465]));

var G__17466 = (i__4737__auto___17465 + (1));
i__4737__auto___17465 = G__17466;
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
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq17460){
var G__17461 = cljs.core.first(seq17460);
var seq17460__$1 = cljs.core.next(seq17460);
var G__17462 = cljs.core.first(seq17460__$1);
var seq17460__$2 = cljs.core.next(seq17460__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17461,G__17462,seq17460__$2);
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
var x_kids__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__17467(s__17468){
return (new cljs.core.LazySeq(null,(function (){
var s__17468__$1 = s__17468;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17468__$1);
if(temp__5804__auto__){
var s__17468__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17468__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17468__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17470 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17469 = (0);
while(true){
if((i__17469 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17469);
cljs.core.chunk_append(b__17470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null));

var G__17473 = (i__17469 + (1));
i__17469 = G__17473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17470),tiltontec$model$core$kid_values_kids_$_iter__17467(cljs.core.chunk_rest(s__17468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17470),null);
}
} else {
var k = cljs.core.first(s__17468__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(k) : k_key.call(null,k)),k], null),tiltontec$model$core$kid_values_kids_$_iter__17467(cljs.core.rest(s__17468__$2)));
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
var _STAR_parent_STAR__orig_val__17471 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__17472 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__17472);

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__17471);
}}
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kid_DASH_values)));
});
