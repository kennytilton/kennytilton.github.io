// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tiltontec.util.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
tiltontec.cell.core._PLUS_valid_input_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$slot,null,cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$obs,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$finalizer,null], null), null);
tiltontec.cell.core._PLUS_valid_formula_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [cljs.core.cst$kw$synaptic_QMARK_,null,cljs.core.cst$kw$slot,null,cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$rule,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$obs,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$lazy,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$code,null,cljs.core.cst$kw$synapse_DASH_id,null,cljs.core.cst$kw$optimize,null,cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$and_DASH_then_QMARK_,null,cljs.core.cst$kw$finalizer,null,cljs.core.cst$kw$async_QMARK_,null,cljs.core.cst$kw$model,null], null), null);
tiltontec.cell.core.c_options_canonicalize = (function tiltontec$cell$core$c_options_canonicalize(options,allowed){
var G__16012 = options;
var vec__16013 = G__16012;
var seq__16014 = cljs.core.seq(vec__16013);
var first__16015 = cljs.core.first(seq__16014);
var seq__16014__$1 = cljs.core.next(seq__16014);
var k = first__16015;
var first__16015__$1 = cljs.core.first(seq__16014__$1);
var seq__16014__$2 = cljs.core.next(seq__16014__$1);
var v = first__16015__$1;
var more = seq__16014__$2;
var res = null;
var observer_QMARK_ = false;
var G__16012__$1 = G__16012;
var res__$1 = res;
var observer_QMARK___$1 = observer_QMARK_;
while(true){
var vec__16020 = G__16012__$1;
var seq__16021 = cljs.core.seq(vec__16020);
var first__16022 = cljs.core.first(seq__16021);
var seq__16021__$1 = cljs.core.next(seq__16021);
var k__$1 = first__16022;
var first__16022__$1 = cljs.core.first(seq__16021__$1);
var seq__16021__$2 = cljs.core.next(seq__16021__$1);
var v__$1 = first__16022__$1;
var more__$1 = seq__16021__$2;
var res__$2 = res__$1;
var observer_QMARK___$2 = observer_QMARK___$1;
if((k__$1 == null)){
return cljs.core.reverse(res__$2);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),allowed))){
} else {
throw (new Error(["Assert failed: ",["Cell option invalid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),". Only allowed are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowed)].join(''),"\n","(some #{k} allowed)"].join('')));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = observer_QMARK___$2;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obs,cljs.core.cst$kw$watch], null));
} else {
return and__4115__auto__;
}
})())){
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1("make-c-formula> options include multiple :watch or :obs. Supply just one.") : tiltontec.util.core.err.call(null,"make-c-formula> options include multiple :watch or :obs. Supply just one."));
} else {
}

var G__16024 = more__$1;
var G__16025 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,(function (){var G__16023 = k__$1;
var G__16023__$1 = (((G__16023 instanceof cljs.core.Keyword))?G__16023.fqn:null);
switch (G__16023__$1) {
case "watch":
return cljs.core.cst$kw$obs;

break;
default:
return k__$1;

}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
var G__16026 = (function (){var or__4126__auto__ = observer_QMARK___$2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obs,cljs.core.cst$kw$watch], null));
}
})();
G__16012__$1 = G__16024;
res__$1 = G__16025;
observer_QMARK___$1 = G__16026;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16029 = arguments.length;
var i__4737__auto___16030 = (0);
while(true){
if((i__4737__auto___16030 < len__4736__auto___16029)){
args__4742__auto__.push((arguments[i__4737__auto___16030]));

var G__16031 = (i__4737__auto___16030 + (1));
i__4737__auto___16030 = G__16031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,tiltontec.cell.core.c_options_canonicalize(kvs,tiltontec.cell.core._PLUS_valid_input_options_PLUS_));
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$synapses,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,null,false,null,cljs.core.cst$kw$nascent,null,true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq16028){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16028));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16033 = arguments.length;
var i__4737__auto___16034 = (0);
while(true){
if((i__4737__auto___16034 < len__4736__auto___16033)){
args__4742__auto__.push((arguments[i__4737__auto___16034]));

var G__16035 = (i__4737__auto___16034 + (1));
i__4737__auto___16034 = G__16035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,tiltontec.cell.core.c_options_canonicalize(kvs,tiltontec.cell.core._PLUS_valid_formula_options_PLUS_));
var rule = cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_(rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,null,false,null,cljs.core.cst$kw$nascent,null,cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq16032){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16032));
}));

var ret__4785__auto___16044 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16045 = arguments.length;
var i__4737__auto___16046 = (0);
while(true){
if((i__4737__auto___16046 < len__4736__auto___16045)){
args__4742__auto__.push((arguments[i__4737__auto___16046]));

var G__16047 = (i__4737__auto___16046 + (1));
i__4737__auto___16046 = G__16047;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16040,body){
var vec__16041 = p__16040;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16041,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_slot_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq16036){
var G__16037 = cljs.core.first(seq16036);
var seq16036__$1 = cljs.core.next(seq16036);
var G__16038 = cljs.core.first(seq16036__$1);
var seq16036__$2 = cljs.core.next(seq16036__$1);
var G__16039 = cljs.core.first(seq16036__$2);
var seq16036__$3 = cljs.core.next(seq16036__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16037,G__16038,G__16039,seq16036__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___16056 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16057 = arguments.length;
var i__4737__auto___16058 = (0);
while(true){
if((i__4737__auto___16058 < len__4736__auto___16057)){
args__4742__auto__.push((arguments[i__4737__auto___16058]));

var G__16059 = (i__4737__auto___16058 + (1));
i__4737__auto___16058 = G__16059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16052,body){
var vec__16053 = p__16052;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_slot_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq16048){
var G__16049 = cljs.core.first(seq16048);
var seq16048__$1 = cljs.core.next(seq16048);
var G__16050 = cljs.core.first(seq16048__$1);
var seq16048__$2 = cljs.core.next(seq16048__$1);
var G__16051 = cljs.core.first(seq16048__$2);
var seq16048__$3 = cljs.core.next(seq16048__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16049,G__16050,G__16051,seq16048__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___16063 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16064 = arguments.length;
var i__4737__auto___16065 = (0);
while(true){
if((i__4737__auto___16065 < len__4736__auto___16064)){
args__4742__auto__.push((arguments[i__4737__auto___16065]));

var G__16066 = (i__4737__auto___16065 + (1));
i__4737__auto___16065 = G__16066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$slot_DASH_c_SHARP_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq16060){
var G__16061 = cljs.core.first(seq16060);
var seq16060__$1 = cljs.core.next(seq16060);
var G__16062 = cljs.core.first(seq16060__$1);
var seq16060__$2 = cljs.core.next(seq16060__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16061,G__16062,seq16060__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___16070 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16071 = arguments.length;
var i__4737__auto___16072 = (0);
while(true){
if((i__4737__auto___16072 < len__4736__auto___16071)){
args__4742__auto__.push((arguments[i__4737__auto___16072]));

var G__16073 = (i__4737__auto___16072 + (1));
i__4737__auto___16072 = G__16073;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var_DASH_ex,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$slot_DASH_c_SHARP_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.core.c_fn_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq16067){
var G__16068 = cljs.core.first(seq16067);
var seq16067__$1 = cljs.core.next(seq16067);
var G__16069 = cljs.core.first(seq16067__$1);
var seq16067__$2 = cljs.core.next(seq16067__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16068,G__16069,seq16067__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___16077 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16078 = arguments.length;
var i__4737__auto___16079 = (0);
while(true){
if((i__4737__auto___16079 < len__4736__auto___16078)){
args__4742__auto__.push((arguments[i__4737__auto___16079]));

var G__16080 = (i__4737__auto___16079 + (1));
i__4737__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq16074){
var G__16075 = cljs.core.first(seq16074);
var seq16074__$1 = cljs.core.next(seq16074);
var G__16076 = cljs.core.first(seq16074__$1);
var seq16074__$2 = cljs.core.next(seq16074__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16075,G__16076,seq16074__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___16089 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16090 = arguments.length;
var i__4737__auto___16091 = (0);
while(true){
if((i__4737__auto___16091 < len__4736__auto___16090)){
args__4742__auto__.push((arguments[i__4737__auto___16091]));

var G__16092 = (i__4737__auto___16091 + (1));
i__4737__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16085,body){
var vec__16086 = p__16085;
var seq__16087 = cljs.core.seq(vec__16086);
var options = seq__16087;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq16081){
var G__16082 = cljs.core.first(seq16081);
var seq16081__$1 = cljs.core.next(seq16081);
var G__16083 = cljs.core.first(seq16081__$1);
var seq16081__$2 = cljs.core.next(seq16081__$1);
var G__16084 = cljs.core.first(seq16081__$2);
var seq16081__$3 = cljs.core.next(seq16081__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16082,G__16083,G__16084,seq16081__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___16096 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16097 = arguments.length;
var i__4737__auto___16098 = (0);
while(true){
if((i__4737__auto___16098 < len__4736__auto___16097)){
args__4742__auto__.push((arguments[i__4737__auto___16098]));

var G__16099 = (i__4737__auto___16098 + (1));
i__4737__auto___16098 = G__16099;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq16093){
var G__16094 = cljs.core.first(seq16093);
var seq16093__$1 = cljs.core.next(seq16093);
var G__16095 = cljs.core.first(seq16093__$1);
var seq16093__$2 = cljs.core.next(seq16093__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16094,G__16095,seq16093__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___16108 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16109 = arguments.length;
var i__4737__auto___16110 = (0);
while(true){
if((i__4737__auto___16110 < len__4736__auto___16109)){
args__4742__auto__.push((arguments[i__4737__auto___16110]));

var G__16111 = (i__4737__auto___16110 + (1));
i__4737__auto___16110 = G__16111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16104,body){
var vec__16105 = p__16104;
var seq__16106 = cljs.core.seq(vec__16105);
var options = seq__16106;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq16100){
var G__16101 = cljs.core.first(seq16100);
var seq16100__$1 = cljs.core.next(seq16100);
var G__16102 = cljs.core.first(seq16100__$1);
var seq16100__$2 = cljs.core.next(seq16100__$1);
var G__16103 = cljs.core.first(seq16100__$2);
var seq16100__$3 = cljs.core.next(seq16100__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16101,G__16102,G__16103,seq16100__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___16115 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16116 = arguments.length;
var i__4737__auto___16117 = (0);
while(true){
if((i__4737__auto___16117 < len__4736__auto___16116)){
args__4742__auto__.push((arguments[i__4737__auto___16117]));

var G__16118 = (i__4737__auto___16117 + (1));
i__4737__auto___16117 = G__16118;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_Fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq16112){
var G__16113 = cljs.core.first(seq16112);
var seq16112__$1 = cljs.core.next(seq16112);
var G__16114 = cljs.core.first(seq16112__$1);
var seq16112__$2 = cljs.core.next(seq16112__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16113,G__16114,seq16112__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___16122 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16123 = arguments.length;
var i__4737__auto___16124 = (0);
while(true){
if((i__4737__auto___16124 < len__4736__auto___16123)){
args__4742__auto__.push((arguments[i__4737__auto___16124]));

var G__16125 = (i__4737__auto___16124 + (1));
i__4737__auto___16124 = G__16125;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFn_dbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq16119){
var G__16120 = cljs.core.first(seq16119);
var seq16119__$1 = cljs.core.next(seq16119);
var G__16121 = cljs.core.first(seq16119__$1);
var seq16119__$2 = cljs.core.next(seq16119__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16120,G__16121,seq16119__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___16130 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16131 = arguments.length;
var i__4737__auto___16132 = (0);
while(true){
if((i__4737__auto___16132 < len__4736__auto___16131)){
args__4742__auto__.push((arguments[i__4737__auto___16132]));

var G__16133 = (i__4737__auto___16132 + (1));
i__4737__auto___16132 = G__16133;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$optimize,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$when_DASH_value_DASH_t,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),args], 0))));
}));

(tiltontec.cell.core.cFn_until.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq16126){
var G__16127 = cljs.core.first(seq16126);
var seq16126__$1 = cljs.core.next(seq16126);
var G__16128 = cljs.core.first(seq16126__$1);
var seq16126__$2 = cljs.core.next(seq16126__$1);
var G__16129 = cljs.core.first(seq16126__$2);
var seq16126__$3 = cljs.core.next(seq16126__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16127,G__16128,G__16129,seq16126__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___16137 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16138 = arguments.length;
var i__4737__auto___16139 = (0);
while(true){
if((i__4737__auto___16139 < len__4736__auto___16138)){
args__4742__auto__.push((arguments[i__4737__auto___16139]));

var G__16140 = (i__4737__auto___16139 + (1));
i__4737__auto___16139 = G__16140;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFonce.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq16134){
var G__16135 = cljs.core.first(seq16134);
var seq16134__$1 = cljs.core.next(seq16134);
var G__16136 = cljs.core.first(seq16134__$1);
var seq16134__$2 = cljs.core.next(seq16134__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16135,G__16136,seq16134__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___16144 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16145 = arguments.length;
var i__4737__auto___16146 = (0);
while(true){
if((i__4737__auto___16146 < len__4736__auto___16145)){
args__4742__auto__.push((arguments[i__4737__auto___16146]));

var G__16147 = (i__4737__auto___16146 + (1));
i__4737__auto___16146 = G__16147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq16141){
var G__16142 = cljs.core.first(seq16141);
var seq16141__$1 = cljs.core.next(seq16141);
var G__16143 = cljs.core.first(seq16141__$1);
var seq16141__$2 = cljs.core.next(seq16141__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16142,G__16143,seq16141__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___16151 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16152 = arguments.length;
var i__4737__auto___16153 = (0);
while(true){
if((i__4737__auto___16153 < len__4736__auto___16152)){
args__4742__auto__.push((arguments[i__4737__auto___16153]));

var G__16154 = (i__4737__auto___16153 + (1));
i__4737__auto___16153 = G__16154;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_cFonce,null,(1),null)),body)));
}));

(tiltontec.cell.core.cF1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq16148){
var G__16149 = cljs.core.first(seq16148);
var seq16148__$1 = cljs.core.next(seq16148);
var G__16150 = cljs.core.first(seq16148__$1);
var seq16148__$2 = cljs.core.next(seq16148__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16149,G__16150,seq16148__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___16158 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16159 = arguments.length;
var i__4737__auto___16160 = (0);
while(true){
if((i__4737__auto___16160 < len__4736__auto___16159)){
args__4742__auto__.push((arguments[i__4737__auto___16160]));

var G__16161 = (i__4737__auto___16160 + (1));
i__4737__auto___16160 = G__16161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq16155){
var G__16156 = cljs.core.first(seq16155);
var seq16155__$1 = cljs.core.next(seq16155);
var G__16157 = cljs.core.first(seq16155__$1);
var seq16155__$2 = cljs.core.next(seq16155__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16156,G__16157,seq16155__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___16170 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16171 = arguments.length;
var i__4737__auto___16172 = (0);
while(true){
if((i__4737__auto___16172 < len__4736__auto___16171)){
args__4742__auto__.push((arguments[i__4737__auto___16172]));

var G__16173 = (i__4737__auto___16172 + (1));
i__4737__auto___16172 = G__16173;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16166,body){
var vec__16167 = p__16166;
var seq__16168 = cljs.core.seq(vec__16167);
var options = seq__16168;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq16162){
var G__16163 = cljs.core.first(seq16162);
var seq16162__$1 = cljs.core.next(seq16162);
var G__16164 = cljs.core.first(seq16162__$1);
var seq16162__$2 = cljs.core.next(seq16162__$1);
var G__16165 = cljs.core.first(seq16162__$2);
var seq16162__$3 = cljs.core.next(seq16162__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16163,G__16164,G__16165,seq16162__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___16182 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16183 = arguments.length;
var i__4737__auto___16184 = (0);
while(true){
if((i__4737__auto___16184 < len__4736__auto___16183)){
args__4742__auto__.push((arguments[i__4737__auto___16184]));

var G__16185 = (i__4737__auto___16184 + (1));
i__4737__auto___16184 = G__16185;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16178,body){
var vec__16179 = p__16178;
var seq__16180 = cljs.core.seq(vec__16179);
var options = seq__16180;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq16174){
var G__16175 = cljs.core.first(seq16174);
var seq16174__$1 = cljs.core.next(seq16174);
var G__16176 = cljs.core.first(seq16174__$1);
var seq16174__$2 = cljs.core.next(seq16174__$1);
var G__16177 = cljs.core.first(seq16174__$2);
var seq16174__$3 = cljs.core.next(seq16174__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16175,G__16176,G__16177,seq16174__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___16189 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16190 = arguments.length;
var i__4737__auto___16191 = (0);
while(true){
if((i__4737__auto___16191 < len__4736__auto___16190)){
args__4742__auto__.push((arguments[i__4737__auto___16191]));

var G__16192 = (i__4737__auto___16191 + (1));
i__4737__auto___16191 = G__16192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_Fdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq16186){
var G__16187 = cljs.core.first(seq16186);
var seq16186__$1 = cljs.core.next(seq16186);
var G__16188 = cljs.core.first(seq16186__$1);
var seq16186__$2 = cljs.core.next(seq16186__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16187,G__16188,seq16186__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___16201 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16202 = arguments.length;
var i__4737__auto___16203 = (0);
while(true){
if((i__4737__auto___16203 < len__4736__auto___16202)){
args__4742__auto__.push((arguments[i__4737__auto___16203]));

var G__16204 = (i__4737__auto___16203 + (1));
i__4737__auto___16203 = G__16204;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16197,body){
var vec__16198 = p__16197;
var seq__16199 = cljs.core.seq(vec__16198);
var kvs = seq__16199;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),cljs.core.keys], 0))));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq16193){
var G__16194 = cljs.core.first(seq16193);
var seq16193__$1 = cljs.core.next(seq16193);
var G__16195 = cljs.core.first(seq16193__$1);
var seq16193__$2 = cljs.core.next(seq16193__$1);
var G__16196 = cljs.core.first(seq16193__$2);
var seq16193__$3 = cljs.core.next(seq16193__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16194,G__16195,G__16196,seq16193__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___16212 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16213 = arguments.length;
var i__4737__auto___16214 = (0);
while(true){
if((i__4737__auto___16214 < len__4736__auto___16213)){
args__4742__auto__.push((arguments[i__4737__auto___16214]));

var G__16215 = (i__4737__auto___16214 + (1));
i__4737__auto___16214 = G__16215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16208){
var vec__16209 = p__16208;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16209,(0),null);
var value_ref = (function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$_cache;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$core_SLASH_rmap_DASH_setf,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$optimize,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$freeze,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,value_ref,null,(1),null))], 0))));
}));

(tiltontec.cell.core.cf_freeze.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq16205){
var G__16206 = cljs.core.first(seq16205);
var seq16205__$1 = cljs.core.next(seq16205);
var G__16207 = cljs.core.first(seq16205__$1);
var seq16205__$2 = cljs.core.next(seq16205__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16206,G__16207,seq16205__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___16221 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16222 = arguments.length;
var i__4737__auto___16223 = (0);
while(true){
if((i__4737__auto___16223 < len__4736__auto___16222)){
args__4742__auto__.push((arguments[i__4737__auto___16223]));

var G__16224 = (i__4737__auto___16223 + (1));
i__4737__auto___16223 = G__16224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16216__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__16217__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16216__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__16217__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16216__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq16218){
var G__16219 = cljs.core.first(seq16218);
var seq16218__$1 = cljs.core.next(seq16218);
var G__16220 = cljs.core.first(seq16218__$1);
var seq16218__$2 = cljs.core.next(seq16218__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16219,G__16220,seq16218__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___16231 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16232 = arguments.length;
var i__4737__auto___16233 = (0);
while(true){
if((i__4737__auto___16233 < len__4736__auto___16232)){
args__4742__auto__.push((arguments[i__4737__auto___16233]));

var G__16234 = (i__4737__auto___16233 + (1));
i__4737__auto___16233 = G__16234;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16225__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__16226__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16227__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__16226__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16225__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16227__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16225__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq16228){
var G__16229 = cljs.core.first(seq16228);
var seq16228__$1 = cljs.core.next(seq16228);
var G__16230 = cljs.core.first(seq16228__$1);
var seq16228__$2 = cljs.core.next(seq16228__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16229,G__16230,seq16228__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___16241 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16242 = arguments.length;
var i__4737__auto___16243 = (0);
while(true){
if((i__4737__auto___16243 < len__4736__auto___16242)){
args__4742__auto__.push((arguments[i__4737__auto___16243]));

var G__16244 = (i__4737__auto___16243 + (1));
i__4737__auto___16243 = G__16244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16235__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__16236__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16235__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__16236__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16235__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq16237){
var G__16238 = cljs.core.first(seq16237);
var seq16237__$1 = cljs.core.next(seq16237);
var G__16239 = cljs.core.first(seq16237__$1);
var seq16237__$2 = cljs.core.next(seq16237__$1);
var G__16240 = cljs.core.first(seq16237__$2);
var seq16237__$3 = cljs.core.next(seq16237__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16238,G__16239,G__16240,seq16237__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___16249 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16250 = arguments.length;
var i__4737__auto___16251 = (0);
while(true){
if((i__4737__auto___16251 < len__4736__auto___16250)){
args__4742__auto__.push((arguments[i__4737__auto___16251]));

var G__16252 = (i__4737__auto___16251 + (1));
i__4737__auto___16251 = G__16252;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16245__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$curr__16245__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq16246){
var G__16247 = cljs.core.first(seq16246);
var seq16246__$1 = cljs.core.next(seq16246);
var G__16248 = cljs.core.first(seq16246__$1);
var seq16246__$2 = cljs.core.next(seq16246__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16247,G__16248,seq16246__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16255 = arguments.length;
var i__4737__auto___16256 = (0);
while(true){
if((i__4737__auto___16256 < len__4736__auto___16255)){
args__4742__auto__.push((arguments[i__4737__auto___16256]));

var G__16257 = (i__4737__auto___16256 + (1));
i__4737__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.cell.core.make_cell,cljs.core.cst$kw$value,value,cljs.core.cst$kw$input_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_kvs], 0));
}));

(tiltontec.cell.core.cI.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq16253){
var G__16254 = cljs.core.first(seq16253);
var seq16253__$1 = cljs.core.next(seq16253);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16254,seq16253__$1);
}));

tiltontec.cell.core.cset_BANG__GT_ = (function tiltontec$cell$core$cset_BANG__GT_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))){
var me = tiltontec.cell.base.c_model(c);
var G__16258 = cljs.core.str;
var G__16259 = "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '";
var G__16260 = tiltontec.cell.base.c_slot_name(c);
var G__16261 = "', which is not mediated by an input cell.\n";
var G__16262 = "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n";
var G__16263 = "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n";
var G__16264 = "..> FYI: intended new value is [";
var G__16265 = new_value;
var G__16266 = "].\n";
var G__16267 = "..> FYI: the non-input cell is ";
var G__16268 = cljs.core.deref(c);
var G__16269 = "\n";
var G__16270 = "..> FYI: instance is of type ";
var G__16271 = tiltontec.util.base.type_cljc(me);
var G__16272 = ".\n";
var G__16273 = "..> FYI: full instance is ";
var G__16274 = cljs.core.deref(me);
var G__16275 = "\n";
var G__16276 = "..> FYI: instance meta is ";
var G__16277 = cljs.core.meta(me);
var G__16278 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21(G__16258,G__16259,G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266,G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273,G__16274,G__16275,G__16276,G__16277,G__16278) : tiltontec.util.core.err.call(null,G__16258,G__16259,G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266,G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273,G__16274,G__16275,G__16276,G__16277,G__16278));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var slot = tiltontec.cell.base.c_slot_name(c);
var me = tiltontec.cell.base.c_model(c);
var G__16279 = "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '";
var G__16280 = slot;
var G__16281 = "' by an observer detected.";
var G__16282 = "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.";
var G__16283 = "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n";
var G__16284 = "...> FYI: intended new value is [";
var G__16285 = new_value;
var G__16286 = "]; current value is [";
var G__16287 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),slot,cljs.core.cst$kw$no_DASH_such_DASH_slot);
var G__16288 = "].\n";
var G__16289 = "...> FYI: instance is of type ";
var G__16290 = tiltontec.util.base.type_cljc(me);
var G__16291 = ".\n";
var G__16292 = "...> FYI: full instance is ";
var G__16293 = cljs.core.deref(me);
var G__16294 = "\n";
var G__16295 = "...> FYI: instance meta is ";
var G__16296 = cljs.core.meta(me);
var G__16297 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19(G__16279,G__16280,G__16281,G__16282,G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291,G__16292,G__16293,G__16294,G__16295,G__16296,G__16297) : tiltontec.util.core.err.call(null,G__16279,G__16280,G__16281,G__16282,G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291,G__16292,G__16293,G__16294,G__16295,G__16296,G__16297));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,tiltontec.cell.base.c_slot(c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
}));

}
}
}
});
tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){
return tiltontec.cell.core.cset_BANG__GT_(c,new_value);
});
tiltontec.cell.core.cswap_BANG__GT_ = (function tiltontec$cell$core$cswap_BANG__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16301 = arguments.length;
var i__4737__auto___16302 = (0);
while(true){
if((i__4737__auto___16302 < len__4736__auto___16301)){
args__4742__auto__.push((arguments[i__4737__auto___16302]));

var G__16303 = (i__4737__auto___16302 + (1));
i__4737__auto___16302 = G__16303;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG__GT_(c,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.cell.evaluate._LT_cget(c),swap_fn_args));
}));

(tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$applyTo = (function (seq16298){
var G__16299 = cljs.core.first(seq16298);
var seq16298__$1 = cljs.core.next(seq16298);
var G__16300 = cljs.core.first(seq16298__$1);
var seq16298__$2 = cljs.core.next(seq16298__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16299,G__16300,seq16298__$2);
}));

tiltontec.cell.core.c_swap_BANG_ = (function tiltontec$cell$core$c_swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16307 = arguments.length;
var i__4737__auto___16308 = (0);
while(true){
if((i__4737__auto___16308 < len__4736__auto___16307)){
args__4742__auto__.push((arguments[i__4737__auto___16308]));

var G__16309 = (i__4737__auto___16308 + (1));
i__4737__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG__GT_(c,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.cell.evaluate._LT_cget(c),swap_fn_args));
}));

(tiltontec.cell.core.c_swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq16304){
var G__16305 = cljs.core.first(seq16304);
var seq16304__$1 = cljs.core.next(seq16304);
var G__16306 = cljs.core.first(seq16304__$1);
var seq16304__$2 = cljs.core.next(seq16304__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16305,G__16306,seq16304__$2);
}));

var ret__4785__auto___16312 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$c__16310__auto__,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16311__auto__,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c__16310__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16311__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___16313 = /**
 * Completely untested!!!!!!!!!!!!!!!
 */
tiltontec.cell.core.cset_next_BANG__GT_ = (function tiltontec$cell$core$cset_next_BANG__GT_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f_new_value,null,(1),null))], 0))));
});
(tiltontec.cell.core.cset_next_BANG__GT_.cljs$lang$macro = true);

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);

}
});
tiltontec.cell.core.call_with_mx = (function tiltontec$cell$core$call_with_mx(fn){
var _STAR_pulse_STAR__orig_val__16314 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__16315 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__16316 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__16317 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__16318 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__16319 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__16320 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_finalize_STAR__orig_val__16321 = tiltontec.cell.base._STAR_finalize_STAR_;
var _STAR_custom_propagator_STAR__orig_val__16322 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__16323 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__16324 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__16325 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__16326 = tiltontec.cell.base.pulse_initial();
var _STAR_within_integrity_STAR__temp_val__16327 = false;
var _STAR_unfinished_business_STAR__temp_val__16328 = tiltontec.cell.base.unfin_biz_build();
var _STAR_causation_STAR__temp_val__16329 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__16330 = null;
var _STAR_depender_STAR__temp_val__16331 = null;
var _STAR_defer_changes_STAR__temp_val__16332 = false;
var _STAR_finalize_STAR__temp_val__16333 = false;
var _STAR_custom_propagator_STAR__temp_val__16334 = null;
var _STAR_c_prop_depth_STAR__temp_val__16335 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__16336 = false;
var _STAR_dp_log_STAR__temp_val__16337 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__16326);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__16327);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__16328);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__16329);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__16330);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__16331);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__16332);

(tiltontec.cell.base._STAR_finalize_STAR_ = _STAR_finalize_STAR__temp_val__16333);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__16334);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__16335);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__16336);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__16337);

try{return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__16325);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__16324);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__16323);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__16322);

(tiltontec.cell.base._STAR_finalize_STAR_ = _STAR_finalize_STAR__orig_val__16321);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__16320);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__16319);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__16318);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__16317);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__16316);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__16315);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__16314);
}});
var ret__4785__auto___16341 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16342 = arguments.length;
var i__4737__auto___16343 = (0);
while(true){
if((i__4737__auto___16343 < len__4736__auto___16342)){
args__4742__auto__.push((arguments[i__4737__auto___16343]));

var G__16344 = (i__4737__auto___16343 + (1));
i__4737__auto___16343 = G__16344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_mx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_mx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_with_DASH_mx,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}));

(tiltontec.cell.core.with_mx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq16338){
var G__16339 = cljs.core.first(seq16338);
var seq16338__$1 = cljs.core.next(seq16338);
var G__16340 = cljs.core.first(seq16338__$1);
var seq16338__$2 = cljs.core.next(seq16338__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16339,G__16340,seq16338__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_mx.cljs$lang$macro = true);

/**
 * How far we are in edges from the starting node.
 */
tiltontec.cell.core._STAR_dag_depth_STAR_ = (0);
/**
 * How many edges to follow from users/callers.
 */
tiltontec.cell.core._STAR_dag_prn_len_STAR_ = (5);
/**
 * Which DAG nodes have been dumped so far.
 */
tiltontec.cell.core._PLUS_dag_visited_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
tiltontec.cell.core.dag_prn = (function tiltontec$cell$core$dag_prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16346 = arguments.length;
var i__4737__auto___16347 = (0);
while(true){
if((i__4737__auto___16347 < len__4736__auto___16346)){
args__4742__auto__.push((arguments[i__4737__auto___16347]));

var G__16348 = (i__4737__auto___16347 + (1));
i__4737__auto___16347 = G__16348;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic = (function (os){
var path = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.core._STAR_dag_depth_STAR_,".|"));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.println,path,os);
}));

(tiltontec.cell.core.dag_prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq16345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16345));
}));

tiltontec.cell.core._STAR_dag_node_only_printer_STAR_ = (function tiltontec$cell$core$_STAR_dag_node_only_printer_STAR_(tag,c){
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,cljs.core.cst$kw$PM_BANG_,tiltontec.cell.base.c_slot_name(c),cljs.core.cst$kw$of,tiltontec.cell.base.c_md_name(c)], 0));
});
tiltontec.cell.core.dag_dump_callers = (function tiltontec$cell$core$dag_dump_callers(c){
var ccs = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = tiltontec.cell.core._STAR_dag_prn_len_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (999);
}
})(),tiltontec.cell.base.c_callers(c));
if(cljs.core.seq(ccs)){
var _STAR_dag_depth_STAR__orig_val__16349 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16350 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16350);

try{var seq__16351 = cljs.core.seq(ccs);
var chunk__16352 = null;
var count__16353 = (0);
var i__16354 = (0);
while(true){
if((i__16354 < count__16353)){
var cc = chunk__16352.cljs$core$IIndexed$_nth$arity$2(null,i__16354);
var G__16359_16363 = cljs.core.cst$kw$used_DASH_by;
var G__16360_16364 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16359_16363,G__16360_16364) : tiltontec.cell.core.dag_dump_1.call(null,G__16359_16363,G__16360_16364));


var G__16365 = seq__16351;
var G__16366 = chunk__16352;
var G__16367 = count__16353;
var G__16368 = (i__16354 + (1));
seq__16351 = G__16365;
chunk__16352 = G__16366;
count__16353 = G__16367;
i__16354 = G__16368;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16351);
if(temp__5804__auto__){
var seq__16351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16351__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16351__$1);
var G__16369 = cljs.core.chunk_rest(seq__16351__$1);
var G__16370 = c__4556__auto__;
var G__16371 = cljs.core.count(c__4556__auto__);
var G__16372 = (0);
seq__16351 = G__16369;
chunk__16352 = G__16370;
count__16353 = G__16371;
i__16354 = G__16372;
continue;
} else {
var cc = cljs.core.first(seq__16351__$1);
var G__16361_16373 = cljs.core.cst$kw$used_DASH_by;
var G__16362_16374 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16361_16373,G__16362_16374) : tiltontec.cell.core.dag_dump_1.call(null,G__16361_16373,G__16362_16374));


var G__16375 = cljs.core.next(seq__16351__$1);
var G__16376 = null;
var G__16377 = (0);
var G__16378 = (0);
seq__16351 = G__16375;
chunk__16352 = G__16376;
count__16353 = G__16377;
i__16354 = G__16378;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16349);
}} else {
return null;
}
});
tiltontec.cell.core._STAR_dag_callers_printer_STAR_ = tiltontec.cell.core.dag_dump_callers;
tiltontec.cell.core.dag_dump_useds = (function tiltontec$cell$core$dag_dump_useds(c){
var ccs = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = tiltontec.cell.core._STAR_dag_prn_len_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (999);
}
})(),tiltontec.cell.base.c_useds(c));
if(cljs.core.seq(ccs)){
var _STAR_dag_depth_STAR__orig_val__16379 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16380 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16380);

try{var seq__16381 = cljs.core.seq(ccs);
var chunk__16382 = null;
var count__16383 = (0);
var i__16384 = (0);
while(true){
if((i__16384 < count__16383)){
var cc = chunk__16382.cljs$core$IIndexed$_nth$arity$2(null,i__16384);
var G__16389_16393 = cljs.core.cst$kw$using;
var G__16390_16394 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16389_16393,G__16390_16394) : tiltontec.cell.core.dag_dump_1.call(null,G__16389_16393,G__16390_16394));


var G__16395 = seq__16381;
var G__16396 = chunk__16382;
var G__16397 = count__16383;
var G__16398 = (i__16384 + (1));
seq__16381 = G__16395;
chunk__16382 = G__16396;
count__16383 = G__16397;
i__16384 = G__16398;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16381);
if(temp__5804__auto__){
var seq__16381__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16381__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16381__$1);
var G__16399 = cljs.core.chunk_rest(seq__16381__$1);
var G__16400 = c__4556__auto__;
var G__16401 = cljs.core.count(c__4556__auto__);
var G__16402 = (0);
seq__16381 = G__16399;
chunk__16382 = G__16400;
count__16383 = G__16401;
i__16384 = G__16402;
continue;
} else {
var cc = cljs.core.first(seq__16381__$1);
var G__16391_16403 = cljs.core.cst$kw$using;
var G__16392_16404 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16391_16403,G__16392_16404) : tiltontec.cell.core.dag_dump_1.call(null,G__16391_16403,G__16392_16404));


var G__16405 = cljs.core.next(seq__16381__$1);
var G__16406 = null;
var G__16407 = (0);
var G__16408 = (0);
seq__16381 = G__16405;
chunk__16382 = G__16406;
count__16383 = G__16407;
i__16384 = G__16408;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16379);
}} else {
return null;
}
});
tiltontec.cell.core._STAR_dag_useds_printer_STAR_ = tiltontec.cell.core.dag_dump_useds;
tiltontec.cell.core.dag_dump_1 = (function tiltontec$cell$core$dag_dump_1(tag,c){
if(cljs.core.contains_QMARK_(cljs.core.deref(tiltontec.cell.core._PLUS_dag_visited_PLUS_),c)){
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot_name(c)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(c))].join(''))], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.cell.core._PLUS_dag_visited_PLUS_,cljs.core.conj,c);

var temp__5804__auto___16409 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16409)){
var p_16410 = temp__5804__auto___16409;
(p_16410.cljs$core$IFn$_invoke$arity$2 ? p_16410.cljs$core$IFn$_invoke$arity$2(tag,c) : p_16410.call(null,tag,c));
} else {
}

var temp__5804__auto___16411 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16411)){
var p_16412 = temp__5804__auto___16411;
(p_16412.cljs$core$IFn$_invoke$arity$1 ? p_16412.cljs$core$IFn$_invoke$arity$1(c) : p_16412.call(null,c));
} else {
}

var temp__5804__auto__ = tiltontec.cell.core._STAR_dag_useds_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(c) : p.call(null,c));
} else {
return null;
}

}
});
tiltontec.cell.core.dag_dump = (function tiltontec$cell$core$dag_dump(tag,c){
cljs.core.reset_BANG_(tiltontec.cell.core._PLUS_dag_visited_PLUS_,cljs.core.PersistentHashSet.EMPTY);

var _STAR_dag_depth_STAR__orig_val__16413 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16414 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16414);

try{return tiltontec.cell.core.dag_dump_1(tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16413);
}});
