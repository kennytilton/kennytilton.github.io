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
tiltontec.cell.core._PLUS_valid_input_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$on_DASH_quiesce,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$obs,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$prop,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$input_QMARK_,null], null), null);
tiltontec.cell.core._PLUS_valid_formula_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [cljs.core.cst$kw$synaptic_QMARK_,null,cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$on_DASH_quiesce,null,cljs.core.cst$kw$rule,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$obs,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$lazy,null,cljs.core.cst$kw$prop,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$code,null,cljs.core.cst$kw$synapse_DASH_id,null,cljs.core.cst$kw$optimize,null,cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$and_DASH_then_QMARK_,null,cljs.core.cst$kw$async_QMARK_,null,cljs.core.cst$kw$model,null], null), null);
tiltontec.cell.core.c_options_canonicalize = (function tiltontec$cell$core$c_options_canonicalize(options,allowed){
var G__15851 = options;
var vec__15852 = G__15851;
var seq__15853 = cljs.core.seq(vec__15852);
var first__15854 = cljs.core.first(seq__15853);
var seq__15853__$1 = cljs.core.next(seq__15853);
var k = first__15854;
var first__15854__$1 = cljs.core.first(seq__15853__$1);
var seq__15853__$2 = cljs.core.next(seq__15853__$1);
var v = first__15854__$1;
var more = seq__15853__$2;
var res = null;
var observer_QMARK_ = false;
var G__15851__$1 = G__15851;
var res__$1 = res;
var observer_QMARK___$1 = observer_QMARK_;
while(true){
var vec__15859 = G__15851__$1;
var seq__15860 = cljs.core.seq(vec__15859);
var first__15861 = cljs.core.first(seq__15860);
var seq__15860__$1 = cljs.core.next(seq__15860);
var k__$1 = first__15861;
var first__15861__$1 = cljs.core.first(seq__15860__$1);
var seq__15860__$2 = cljs.core.next(seq__15860__$1);
var v__$1 = first__15861__$1;
var more__$1 = seq__15860__$2;
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

var G__15863 = more__$1;
var G__15864 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,(function (){var G__15862 = k__$1;
var G__15862__$1 = (((G__15862 instanceof cljs.core.Keyword))?G__15862.fqn:null);
switch (G__15862__$1) {
case "watch":
return cljs.core.cst$kw$obs;

break;
default:
return k__$1;

}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
var G__15865 = (function (){var or__4126__auto__ = observer_QMARK___$2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obs,cljs.core.cst$kw$watch], null));
}
})();
G__15851__$1 = G__15863;
res__$1 = G__15864;
observer_QMARK___$1 = G__15865;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15868 = arguments.length;
var i__4737__auto___15869 = (0);
while(true){
if((i__4737__auto___15869 < len__4736__auto___15868)){
args__4742__auto__.push((arguments[i__4737__auto___15869]));

var G__15870 = (i__4737__auto___15869 + (1));
i__4737__auto___15869 = G__15870;
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
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$synapses,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,null,false,null,cljs.core.cst$kw$nascent,null,true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq15867){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15867));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15872 = arguments.length;
var i__4737__auto___15873 = (0);
while(true){
if((i__4737__auto___15873 < len__4736__auto___15872)){
args__4742__auto__.push((arguments[i__4737__auto___15873]));

var G__15874 = (i__4737__auto___15873 + (1));
i__4737__auto___15873 = G__15874;
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

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,null,false,null,cljs.core.cst$kw$nascent,null,cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq15871){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15871));
}));

var ret__4785__auto___15883 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15884 = arguments.length;
var i__4737__auto___15885 = (0);
while(true){
if((i__4737__auto___15885 < len__4736__auto___15884)){
args__4742__auto__.push((arguments[i__4737__auto___15885]));

var G__15886 = (i__4737__auto___15885 + (1));
i__4737__auto___15885 = G__15886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15879,body){
var vec__15880 = p__15879;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15880,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq15875){
var G__15876 = cljs.core.first(seq15875);
var seq15875__$1 = cljs.core.next(seq15875);
var G__15877 = cljs.core.first(seq15875__$1);
var seq15875__$2 = cljs.core.next(seq15875__$1);
var G__15878 = cljs.core.first(seq15875__$2);
var seq15875__$3 = cljs.core.next(seq15875__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15876,G__15877,G__15878,seq15875__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___15895 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15896 = arguments.length;
var i__4737__auto___15897 = (0);
while(true){
if((i__4737__auto___15897 < len__4736__auto___15896)){
args__4742__auto__.push((arguments[i__4737__auto___15897]));

var G__15898 = (i__4737__auto___15897 + (1));
i__4737__auto___15897 = G__15898;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15891,body){
var vec__15892 = p__15891;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15892,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq15887){
var G__15888 = cljs.core.first(seq15887);
var seq15887__$1 = cljs.core.next(seq15887);
var G__15889 = cljs.core.first(seq15887__$1);
var seq15887__$2 = cljs.core.next(seq15887__$1);
var G__15890 = cljs.core.first(seq15887__$2);
var seq15887__$3 = cljs.core.next(seq15887__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15888,G__15889,G__15890,seq15887__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___15902 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15903 = arguments.length;
var i__4737__auto___15904 = (0);
while(true){
if((i__4737__auto___15904 < len__4736__auto___15903)){
args__4742__auto__.push((arguments[i__4737__auto___15904]));

var G__15905 = (i__4737__auto___15904 + (1));
i__4737__auto___15904 = G__15905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$prop_DASH_c_SHARP_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq15899){
var G__15900 = cljs.core.first(seq15899);
var seq15899__$1 = cljs.core.next(seq15899);
var G__15901 = cljs.core.first(seq15899__$1);
var seq15899__$2 = cljs.core.next(seq15899__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15900,G__15901,seq15899__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___15909 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15910 = arguments.length;
var i__4737__auto___15911 = (0);
while(true){
if((i__4737__auto___15911 < len__4736__auto___15910)){
args__4742__auto__.push((arguments[i__4737__auto___15911]));

var G__15912 = (i__4737__auto___15911 + (1));
i__4737__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var_DASH_ex,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$prop_DASH_c_SHARP_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.core.c_fn_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq15906){
var G__15907 = cljs.core.first(seq15906);
var seq15906__$1 = cljs.core.next(seq15906);
var G__15908 = cljs.core.first(seq15906__$1);
var seq15906__$2 = cljs.core.next(seq15906__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15907,G__15908,seq15906__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___15916 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15917 = arguments.length;
var i__4737__auto___15918 = (0);
while(true){
if((i__4737__auto___15918 < len__4736__auto___15917)){
args__4742__auto__.push((arguments[i__4737__auto___15918]));

var G__15919 = (i__4737__auto___15918 + (1));
i__4737__auto___15918 = G__15919;
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
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq15913){
var G__15914 = cljs.core.first(seq15913);
var seq15913__$1 = cljs.core.next(seq15913);
var G__15915 = cljs.core.first(seq15913__$1);
var seq15913__$2 = cljs.core.next(seq15913__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15914,G__15915,seq15913__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___15928 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15929 = arguments.length;
var i__4737__auto___15930 = (0);
while(true){
if((i__4737__auto___15930 < len__4736__auto___15929)){
args__4742__auto__.push((arguments[i__4737__auto___15930]));

var G__15931 = (i__4737__auto___15930 + (1));
i__4737__auto___15930 = G__15931;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15924,body){
var vec__15925 = p__15924;
var seq__15926 = cljs.core.seq(vec__15925);
var options = seq__15926;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq15920){
var G__15921 = cljs.core.first(seq15920);
var seq15920__$1 = cljs.core.next(seq15920);
var G__15922 = cljs.core.first(seq15920__$1);
var seq15920__$2 = cljs.core.next(seq15920__$1);
var G__15923 = cljs.core.first(seq15920__$2);
var seq15920__$3 = cljs.core.next(seq15920__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15921,G__15922,G__15923,seq15920__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___15935 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15936 = arguments.length;
var i__4737__auto___15937 = (0);
while(true){
if((i__4737__auto___15937 < len__4736__auto___15936)){
args__4742__auto__.push((arguments[i__4737__auto___15937]));

var G__15938 = (i__4737__auto___15937 + (1));
i__4737__auto___15937 = G__15938;
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
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq15932){
var G__15933 = cljs.core.first(seq15932);
var seq15932__$1 = cljs.core.next(seq15932);
var G__15934 = cljs.core.first(seq15932__$1);
var seq15932__$2 = cljs.core.next(seq15932__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15933,G__15934,seq15932__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___15947 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15948 = arguments.length;
var i__4737__auto___15949 = (0);
while(true){
if((i__4737__auto___15949 < len__4736__auto___15948)){
args__4742__auto__.push((arguments[i__4737__auto___15949]));

var G__15950 = (i__4737__auto___15949 + (1));
i__4737__auto___15949 = G__15950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15943,body){
var vec__15944 = p__15943;
var seq__15945 = cljs.core.seq(vec__15944);
var options = seq__15945;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq15939){
var G__15940 = cljs.core.first(seq15939);
var seq15939__$1 = cljs.core.next(seq15939);
var G__15941 = cljs.core.first(seq15939__$1);
var seq15939__$2 = cljs.core.next(seq15939__$1);
var G__15942 = cljs.core.first(seq15939__$2);
var seq15939__$3 = cljs.core.next(seq15939__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15940,G__15941,G__15942,seq15939__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___15954 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15955 = arguments.length;
var i__4737__auto___15956 = (0);
while(true){
if((i__4737__auto___15956 < len__4736__auto___15955)){
args__4742__auto__.push((arguments[i__4737__auto___15956]));

var G__15957 = (i__4737__auto___15956 + (1));
i__4737__auto___15956 = G__15957;
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
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq15951){
var G__15952 = cljs.core.first(seq15951);
var seq15951__$1 = cljs.core.next(seq15951);
var G__15953 = cljs.core.first(seq15951__$1);
var seq15951__$2 = cljs.core.next(seq15951__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15952,G__15953,seq15951__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___15961 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15962 = arguments.length;
var i__4737__auto___15963 = (0);
while(true){
if((i__4737__auto___15963 < len__4736__auto___15962)){
args__4742__auto__.push((arguments[i__4737__auto___15963]));

var G__15964 = (i__4737__auto___15963 + (1));
i__4737__auto___15963 = G__15964;
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
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq15958){
var G__15959 = cljs.core.first(seq15958);
var seq15958__$1 = cljs.core.next(seq15958);
var G__15960 = cljs.core.first(seq15958__$1);
var seq15958__$2 = cljs.core.next(seq15958__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15959,G__15960,seq15958__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___15969 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15970 = arguments.length;
var i__4737__auto___15971 = (0);
while(true){
if((i__4737__auto___15971 < len__4736__auto___15970)){
args__4742__auto__.push((arguments[i__4737__auto___15971]));

var G__15972 = (i__4737__auto___15971 + (1));
i__4737__auto___15971 = G__15972;
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
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq15965){
var G__15966 = cljs.core.first(seq15965);
var seq15965__$1 = cljs.core.next(seq15965);
var G__15967 = cljs.core.first(seq15965__$1);
var seq15965__$2 = cljs.core.next(seq15965__$1);
var G__15968 = cljs.core.first(seq15965__$2);
var seq15965__$3 = cljs.core.next(seq15965__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15966,G__15967,G__15968,seq15965__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___15976 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15977 = arguments.length;
var i__4737__auto___15978 = (0);
while(true){
if((i__4737__auto___15978 < len__4736__auto___15977)){
args__4742__auto__.push((arguments[i__4737__auto___15978]));

var G__15979 = (i__4737__auto___15978 + (1));
i__4737__auto___15978 = G__15979;
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
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq15973){
var G__15974 = cljs.core.first(seq15973);
var seq15973__$1 = cljs.core.next(seq15973);
var G__15975 = cljs.core.first(seq15973__$1);
var seq15973__$2 = cljs.core.next(seq15973__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15974,G__15975,seq15973__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___15983 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15984 = arguments.length;
var i__4737__auto___15985 = (0);
while(true){
if((i__4737__auto___15985 < len__4736__auto___15984)){
args__4742__auto__.push((arguments[i__4737__auto___15985]));

var G__15986 = (i__4737__auto___15985 + (1));
i__4737__auto___15985 = G__15986;
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
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq15980){
var G__15981 = cljs.core.first(seq15980);
var seq15980__$1 = cljs.core.next(seq15980);
var G__15982 = cljs.core.first(seq15980__$1);
var seq15980__$2 = cljs.core.next(seq15980__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15981,G__15982,seq15980__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___15990 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15991 = arguments.length;
var i__4737__auto___15992 = (0);
while(true){
if((i__4737__auto___15992 < len__4736__auto___15991)){
args__4742__auto__.push((arguments[i__4737__auto___15992]));

var G__15993 = (i__4737__auto___15992 + (1));
i__4737__auto___15992 = G__15993;
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
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq15987){
var G__15988 = cljs.core.first(seq15987);
var seq15987__$1 = cljs.core.next(seq15987);
var G__15989 = cljs.core.first(seq15987__$1);
var seq15987__$2 = cljs.core.next(seq15987__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15988,G__15989,seq15987__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___15997 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15998 = arguments.length;
var i__4737__auto___15999 = (0);
while(true){
if((i__4737__auto___15999 < len__4736__auto___15998)){
args__4742__auto__.push((arguments[i__4737__auto___15999]));

var G__16000 = (i__4737__auto___15999 + (1));
i__4737__auto___15999 = G__16000;
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
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq15994){
var G__15995 = cljs.core.first(seq15994);
var seq15994__$1 = cljs.core.next(seq15994);
var G__15996 = cljs.core.first(seq15994__$1);
var seq15994__$2 = cljs.core.next(seq15994__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15995,G__15996,seq15994__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___16009 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16010 = arguments.length;
var i__4737__auto___16011 = (0);
while(true){
if((i__4737__auto___16011 < len__4736__auto___16010)){
args__4742__auto__.push((arguments[i__4737__auto___16011]));

var G__16012 = (i__4737__auto___16011 + (1));
i__4737__auto___16011 = G__16012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16005,body){
var vec__16006 = p__16005;
var seq__16007 = cljs.core.seq(vec__16006);
var options = seq__16007;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq16001){
var G__16002 = cljs.core.first(seq16001);
var seq16001__$1 = cljs.core.next(seq16001);
var G__16003 = cljs.core.first(seq16001__$1);
var seq16001__$2 = cljs.core.next(seq16001__$1);
var G__16004 = cljs.core.first(seq16001__$2);
var seq16001__$3 = cljs.core.next(seq16001__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16002,G__16003,G__16004,seq16001__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___16021 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16022 = arguments.length;
var i__4737__auto___16023 = (0);
while(true){
if((i__4737__auto___16023 < len__4736__auto___16022)){
args__4742__auto__.push((arguments[i__4737__auto___16023]));

var G__16024 = (i__4737__auto___16023 + (1));
i__4737__auto___16023 = G__16024;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16017,body){
var vec__16018 = p__16017;
var seq__16019 = cljs.core.seq(vec__16018);
var options = seq__16019;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq16013){
var G__16014 = cljs.core.first(seq16013);
var seq16013__$1 = cljs.core.next(seq16013);
var G__16015 = cljs.core.first(seq16013__$1);
var seq16013__$2 = cljs.core.next(seq16013__$1);
var G__16016 = cljs.core.first(seq16013__$2);
var seq16013__$3 = cljs.core.next(seq16013__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16014,G__16015,G__16016,seq16013__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___16028 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
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

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_Fdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq16025){
var G__16026 = cljs.core.first(seq16025);
var seq16025__$1 = cljs.core.next(seq16025);
var G__16027 = cljs.core.first(seq16025__$1);
var seq16025__$2 = cljs.core.next(seq16025__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16026,G__16027,seq16025__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___16040 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16041 = arguments.length;
var i__4737__auto___16042 = (0);
while(true){
if((i__4737__auto___16042 < len__4736__auto___16041)){
args__4742__auto__.push((arguments[i__4737__auto___16042]));

var G__16043 = (i__4737__auto___16042 + (1));
i__4737__auto___16042 = G__16043;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16036,body){
var vec__16037 = p__16036;
var seq__16038 = cljs.core.seq(vec__16037);
var kvs = seq__16038;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),cljs.core.keys], 0))));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq16032){
var G__16033 = cljs.core.first(seq16032);
var seq16032__$1 = cljs.core.next(seq16032);
var G__16034 = cljs.core.first(seq16032__$1);
var seq16032__$2 = cljs.core.next(seq16032__$1);
var G__16035 = cljs.core.first(seq16032__$2);
var seq16032__$3 = cljs.core.next(seq16032__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16033,G__16034,G__16035,seq16032__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___16051 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16052 = arguments.length;
var i__4737__auto___16053 = (0);
while(true){
if((i__4737__auto___16053 < len__4736__auto___16052)){
args__4742__auto__.push((arguments[i__4737__auto___16053]));

var G__16054 = (i__4737__auto___16053 + (1));
i__4737__auto___16053 = G__16054;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16047){
var vec__16048 = p__16047;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(0),null);
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
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq16044){
var G__16045 = cljs.core.first(seq16044);
var seq16044__$1 = cljs.core.next(seq16044);
var G__16046 = cljs.core.first(seq16044__$1);
var seq16044__$2 = cljs.core.next(seq16044__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16045,G__16046,seq16044__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___16060 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16061 = arguments.length;
var i__4737__auto___16062 = (0);
while(true){
if((i__4737__auto___16062 < len__4736__auto___16061)){
args__4742__auto__.push((arguments[i__4737__auto___16062]));

var G__16063 = (i__4737__auto___16062 + (1));
i__4737__auto___16062 = G__16063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16055__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__16056__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16055__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__16056__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16055__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq16057){
var G__16058 = cljs.core.first(seq16057);
var seq16057__$1 = cljs.core.next(seq16057);
var G__16059 = cljs.core.first(seq16057__$1);
var seq16057__$2 = cljs.core.next(seq16057__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16058,G__16059,seq16057__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___16070 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
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
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16064__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__16065__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16066__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__16065__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16064__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16066__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16064__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq16067){
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
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___16080 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16081 = arguments.length;
var i__4737__auto___16082 = (0);
while(true){
if((i__4737__auto___16082 < len__4736__auto___16081)){
args__4742__auto__.push((arguments[i__4737__auto___16082]));

var G__16083 = (i__4737__auto___16082 + (1));
i__4737__auto___16082 = G__16083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16074__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__16075__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16074__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__16075__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__16074__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq16076){
var G__16077 = cljs.core.first(seq16076);
var seq16076__$1 = cljs.core.next(seq16076);
var G__16078 = cljs.core.first(seq16076__$1);
var seq16076__$2 = cljs.core.next(seq16076__$1);
var G__16079 = cljs.core.first(seq16076__$2);
var seq16076__$3 = cljs.core.next(seq16076__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16077,G__16078,G__16079,seq16076__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___16088 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16089 = arguments.length;
var i__4737__auto___16090 = (0);
while(true){
if((i__4737__auto___16090 < len__4736__auto___16089)){
args__4742__auto__.push((arguments[i__4737__auto___16090]));

var G__16091 = (i__4737__auto___16090 + (1));
i__4737__auto___16090 = G__16091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__16084__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$curr__16084__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq16085){
var G__16086 = cljs.core.first(seq16085);
var seq16085__$1 = cljs.core.next(seq16085);
var G__16087 = cljs.core.first(seq16085__$1);
var seq16085__$2 = cljs.core.next(seq16085__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16086,G__16087,seq16085__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16094 = arguments.length;
var i__4737__auto___16095 = (0);
while(true){
if((i__4737__auto___16095 < len__4736__auto___16094)){
args__4742__auto__.push((arguments[i__4737__auto___16095]));

var G__16096 = (i__4737__auto___16095 + (1));
i__4737__auto___16095 = G__16096;
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
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq16092){
var G__16093 = cljs.core.first(seq16092);
var seq16092__$1 = cljs.core.next(seq16092);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16093,seq16092__$1);
}));

tiltontec.cell.core.cset_BANG__GT_ = (function tiltontec$cell$core$cset_BANG__GT_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))){
var me = tiltontec.cell.base.c_model(c);
var G__16097 = cljs.core.str;
var G__16098 = "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '";
var G__16099 = tiltontec.cell.base.c_prop_name(c);
var G__16100 = "', which is not mediated by an input cell.\n";
var G__16101 = "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n";
var G__16102 = "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n";
var G__16103 = "..> FYI: intended new value is [";
var G__16104 = new_value;
var G__16105 = "].\n";
var G__16106 = "..> FYI: the non-input cell is ";
var G__16107 = cljs.core.deref(c);
var G__16108 = "\n";
var G__16109 = "..> FYI: instance is of type ";
var G__16110 = tiltontec.util.base.mx_type(me);
var G__16111 = ".\n";
var G__16112 = "..> FYI: full instance is ";
var G__16113 = cljs.core.deref(me);
var G__16114 = "\n";
var G__16115 = "..> FYI: instance meta is ";
var G__16116 = cljs.core.meta(me);
var G__16117 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21(G__16097,G__16098,G__16099,G__16100,G__16101,G__16102,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117) : tiltontec.util.core.err.call(null,G__16097,G__16098,G__16099,G__16100,G__16101,G__16102,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113,G__16114,G__16115,G__16116,G__16117));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var prop = tiltontec.cell.base.c_prop_name(c);
var me = tiltontec.cell.base.c_model(c);
var G__16118 = "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '";
var G__16119 = prop;
var G__16120 = "' by an observer detected.";
var G__16121 = "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.";
var G__16122 = "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n";
var G__16123 = "...> FYI: intended new value is [";
var G__16124 = new_value;
var G__16125 = "]; current value is [";
var G__16126 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__16127 = "].\n";
var G__16128 = "...> FYI: instance is of type ";
var G__16129 = tiltontec.util.base.mx_type(me);
var G__16130 = ".\n";
var G__16131 = "...> FYI: full instance is ";
var G__16132 = cljs.core.deref(me);
var G__16133 = "\n";
var G__16134 = "...> FYI: instance meta is ";
var G__16135 = cljs.core.meta(me);
var G__16136 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19(G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124,G__16125,G__16126,G__16127,G__16128,G__16129,G__16130,G__16131,G__16132,G__16133,G__16134,G__16135,G__16136) : tiltontec.util.core.err.call(null,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124,G__16125,G__16126,G__16127,G__16128,G__16129,G__16130,G__16131,G__16132,G__16133,G__16134,G__16135,G__16136));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,tiltontec.cell.base.c_prop(c),(function (opcode,defer_info){
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
var len__4736__auto___16140 = arguments.length;
var i__4737__auto___16141 = (0);
while(true){
if((i__4737__auto___16141 < len__4736__auto___16140)){
args__4742__auto__.push((arguments[i__4737__auto___16141]));

var G__16142 = (i__4737__auto___16141 + (1));
i__4737__auto___16141 = G__16142;
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
(tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$applyTo = (function (seq16137){
var G__16138 = cljs.core.first(seq16137);
var seq16137__$1 = cljs.core.next(seq16137);
var G__16139 = cljs.core.first(seq16137__$1);
var seq16137__$2 = cljs.core.next(seq16137__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16138,G__16139,seq16137__$2);
}));

tiltontec.cell.core.c_swap_BANG_ = (function tiltontec$cell$core$c_swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16146 = arguments.length;
var i__4737__auto___16147 = (0);
while(true){
if((i__4737__auto___16147 < len__4736__auto___16146)){
args__4742__auto__.push((arguments[i__4737__auto___16147]));

var G__16148 = (i__4737__auto___16147 + (1));
i__4737__auto___16147 = G__16148;
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
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq16143){
var G__16144 = cljs.core.first(seq16143);
var seq16143__$1 = cljs.core.next(seq16143);
var G__16145 = cljs.core.first(seq16143__$1);
var seq16143__$2 = cljs.core.next(seq16143__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16144,G__16145,seq16143__$2);
}));

var ret__4785__auto___16151 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$c__16149__auto__,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16150__auto__,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c__16149__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16150__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___16152 = /**
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
var _STAR_pulse_STAR__orig_val__16153 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__16154 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__16155 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__16156 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__16157 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__16158 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__16159 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_quiesce_STAR__orig_val__16160 = tiltontec.cell.base._STAR_quiesce_STAR_;
var _STAR_custom_propagator_STAR__orig_val__16161 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__16162 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__16163 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__16164 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__16165 = tiltontec.cell.base.pulse_initial();
var _STAR_within_integrity_STAR__temp_val__16166 = false;
var _STAR_unfinished_business_STAR__temp_val__16167 = tiltontec.cell.base.unfin_biz_build();
var _STAR_causation_STAR__temp_val__16168 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__16169 = null;
var _STAR_depender_STAR__temp_val__16170 = null;
var _STAR_defer_changes_STAR__temp_val__16171 = false;
var _STAR_quiesce_STAR__temp_val__16172 = false;
var _STAR_custom_propagator_STAR__temp_val__16173 = null;
var _STAR_c_prop_depth_STAR__temp_val__16174 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__16175 = false;
var _STAR_dp_log_STAR__temp_val__16176 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__16165);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__16166);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__16167);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__16168);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__16169);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__16170);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__16171);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__temp_val__16172);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__16173);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__16174);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__16175);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__16176);

try{return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__16164);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__16163);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__16162);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__16161);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__orig_val__16160);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__16159);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__16158);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__16157);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__16156);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__16155);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__16154);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__16153);
}});
var ret__4785__auto___16180 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16181 = arguments.length;
var i__4737__auto___16182 = (0);
while(true){
if((i__4737__auto___16182 < len__4736__auto___16181)){
args__4742__auto__.push((arguments[i__4737__auto___16182]));

var G__16183 = (i__4737__auto___16182 + (1));
i__4737__auto___16182 = G__16183;
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
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq16177){
var G__16178 = cljs.core.first(seq16177);
var seq16177__$1 = cljs.core.next(seq16177);
var G__16179 = cljs.core.first(seq16177__$1);
var seq16177__$2 = cljs.core.next(seq16177__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16178,G__16179,seq16177__$2);
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
var len__4736__auto___16185 = arguments.length;
var i__4737__auto___16186 = (0);
while(true){
if((i__4737__auto___16186 < len__4736__auto___16185)){
args__4742__auto__.push((arguments[i__4737__auto___16186]));

var G__16187 = (i__4737__auto___16186 + (1));
i__4737__auto___16186 = G__16187;
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
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq16184){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16184));
}));

tiltontec.cell.core._STAR_dag_node_only_printer_STAR_ = (function tiltontec$cell$core$_STAR_dag_node_only_printer_STAR_(tag,c){
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag,cljs.core.cst$kw$PM_BANG_,tiltontec.cell.base.c_prop_name(c),cljs.core.cst$kw$of,tiltontec.cell.base.c_md_name(c)], 0));
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
var _STAR_dag_depth_STAR__orig_val__16188 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16189 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16189);

try{var seq__16190 = cljs.core.seq(ccs);
var chunk__16191 = null;
var count__16192 = (0);
var i__16193 = (0);
while(true){
if((i__16193 < count__16192)){
var cc = chunk__16191.cljs$core$IIndexed$_nth$arity$2(null,i__16193);
var G__16198_16202 = cljs.core.cst$kw$used_DASH_by;
var G__16199_16203 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16198_16202,G__16199_16203) : tiltontec.cell.core.dag_dump_1.call(null,G__16198_16202,G__16199_16203));


var G__16204 = seq__16190;
var G__16205 = chunk__16191;
var G__16206 = count__16192;
var G__16207 = (i__16193 + (1));
seq__16190 = G__16204;
chunk__16191 = G__16205;
count__16192 = G__16206;
i__16193 = G__16207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16190);
if(temp__5804__auto__){
var seq__16190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16190__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16190__$1);
var G__16208 = cljs.core.chunk_rest(seq__16190__$1);
var G__16209 = c__4556__auto__;
var G__16210 = cljs.core.count(c__4556__auto__);
var G__16211 = (0);
seq__16190 = G__16208;
chunk__16191 = G__16209;
count__16192 = G__16210;
i__16193 = G__16211;
continue;
} else {
var cc = cljs.core.first(seq__16190__$1);
var G__16200_16212 = cljs.core.cst$kw$used_DASH_by;
var G__16201_16213 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16200_16212,G__16201_16213) : tiltontec.cell.core.dag_dump_1.call(null,G__16200_16212,G__16201_16213));


var G__16214 = cljs.core.next(seq__16190__$1);
var G__16215 = null;
var G__16216 = (0);
var G__16217 = (0);
seq__16190 = G__16214;
chunk__16191 = G__16215;
count__16192 = G__16216;
i__16193 = G__16217;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16188);
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
var _STAR_dag_depth_STAR__orig_val__16218 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16219 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16219);

try{var seq__16220 = cljs.core.seq(ccs);
var chunk__16221 = null;
var count__16222 = (0);
var i__16223 = (0);
while(true){
if((i__16223 < count__16222)){
var cc = chunk__16221.cljs$core$IIndexed$_nth$arity$2(null,i__16223);
var G__16228_16232 = cljs.core.cst$kw$using;
var G__16229_16233 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16228_16232,G__16229_16233) : tiltontec.cell.core.dag_dump_1.call(null,G__16228_16232,G__16229_16233));


var G__16234 = seq__16220;
var G__16235 = chunk__16221;
var G__16236 = count__16222;
var G__16237 = (i__16223 + (1));
seq__16220 = G__16234;
chunk__16221 = G__16235;
count__16222 = G__16236;
i__16223 = G__16237;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16220);
if(temp__5804__auto__){
var seq__16220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16220__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16220__$1);
var G__16238 = cljs.core.chunk_rest(seq__16220__$1);
var G__16239 = c__4556__auto__;
var G__16240 = cljs.core.count(c__4556__auto__);
var G__16241 = (0);
seq__16220 = G__16238;
chunk__16221 = G__16239;
count__16222 = G__16240;
i__16223 = G__16241;
continue;
} else {
var cc = cljs.core.first(seq__16220__$1);
var G__16230_16242 = cljs.core.cst$kw$using;
var G__16231_16243 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16230_16242,G__16231_16243) : tiltontec.cell.core.dag_dump_1.call(null,G__16230_16242,G__16231_16243));


var G__16244 = cljs.core.next(seq__16220__$1);
var G__16245 = null;
var G__16246 = (0);
var G__16247 = (0);
seq__16220 = G__16244;
chunk__16221 = G__16245;
count__16222 = G__16246;
i__16223 = G__16247;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16218);
}} else {
return null;
}
});
tiltontec.cell.core._STAR_dag_useds_printer_STAR_ = tiltontec.cell.core.dag_dump_useds;
tiltontec.cell.core.dag_dump_1 = (function tiltontec$cell$core$dag_dump_1(tag,c){
if(cljs.core.contains_QMARK_(cljs.core.deref(tiltontec.cell.core._PLUS_dag_visited_PLUS_),c)){
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(c)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(c))].join(''))], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.cell.core._PLUS_dag_visited_PLUS_,cljs.core.conj,c);

var temp__5804__auto___16248 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16248)){
var p_16249 = temp__5804__auto___16248;
(p_16249.cljs$core$IFn$_invoke$arity$2 ? p_16249.cljs$core$IFn$_invoke$arity$2(tag,c) : p_16249.call(null,tag,c));
} else {
}

var temp__5804__auto___16250 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16250)){
var p_16251 = temp__5804__auto___16250;
(p_16251.cljs$core$IFn$_invoke$arity$1 ? p_16251.cljs$core$IFn$_invoke$arity$1(c) : p_16251.call(null,c));
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

var _STAR_dag_depth_STAR__orig_val__16252 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16253 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16253);

try{return tiltontec.cell.core.dag_dump_1(tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16252);
}});
