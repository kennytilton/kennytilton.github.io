// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tiltontec.util.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
tiltontec.cell.core._PLUS_valid_input_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$on_DASH_quiesce,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$prop,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$input_QMARK_,null], null), null);
tiltontec.cell.core._PLUS_valid_formula_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [cljs.core.cst$kw$synaptic_QMARK_,null,cljs.core.cst$kw$unchanged_DASH_if,null,cljs.core.cst$kw$on_DASH_quiesce,null,cljs.core.cst$kw$rule,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$ephemeral_QMARK_,null,cljs.core.cst$kw$debug,null,cljs.core.cst$kw$lazy,null,cljs.core.cst$kw$prop,null,cljs.core.cst$kw$watch,null,cljs.core.cst$kw$code,null,cljs.core.cst$kw$synapse_DASH_id,null,cljs.core.cst$kw$optimize,null,cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$and_DASH_then,null,cljs.core.cst$kw$async_QMARK_,null,cljs.core.cst$kw$model,null], null), null);
tiltontec.cell.core.c_options_canonicalize = (function tiltontec$cell$core$c_options_canonicalize(options,allowed){
var G__15724 = options;
var vec__15725 = G__15724;
var seq__15726 = cljs.core.seq(vec__15725);
var first__15727 = cljs.core.first(seq__15726);
var seq__15726__$1 = cljs.core.next(seq__15726);
var k = first__15727;
var first__15727__$1 = cljs.core.first(seq__15726__$1);
var seq__15726__$2 = cljs.core.next(seq__15726__$1);
var v = first__15727__$1;
var more = seq__15726__$2;
var res = null;
var G__15724__$1 = G__15724;
var res__$1 = res;
while(true){
var vec__15731 = G__15724__$1;
var seq__15732 = cljs.core.seq(vec__15731);
var first__15733 = cljs.core.first(seq__15732);
var seq__15732__$1 = cljs.core.next(seq__15732);
var k__$1 = first__15733;
var first__15733__$1 = cljs.core.first(seq__15732__$1);
var seq__15732__$2 = cljs.core.next(seq__15732__$1);
var v__$1 = first__15733__$1;
var more__$1 = seq__15732__$2;
var res__$2 = res__$1;
if((k__$1 == null)){
return cljs.core.reverse(res__$2);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),allowed))){
} else {
throw (new Error(["Assert failed: ",["Cell option invalid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),". Only allowed are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowed)].join(''),"\n","(some #{k} allowed)"].join('')));
}

var G__15734 = more__$1;
var G__15735 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,k__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
G__15724__$1 = G__15734;
res__$1 = G__15735;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15737 = arguments.length;
var i__4737__auto___15738 = (0);
while(true){
if((i__4737__auto___15738 < len__4736__auto___15737)){
args__4742__auto__.push((arguments[i__4737__auto___15738]));

var G__15739 = (i__4737__auto___15738 + (1));
i__4737__auto___15738 = G__15739;
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
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$pulse_DASH_watched,cljs.core.cst$kw$mx_DASH_sid,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$synapses,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.util.base.mx_sid_next(),tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,false,null,cljs.core.cst$kw$nascent,null,true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq15736){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15736));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15741 = arguments.length;
var i__4737__auto___15742 = (0);
while(true){
if((i__4737__auto___15742 < len__4736__auto___15741)){
args__4742__auto__.push((arguments[i__4737__auto___15742]));

var G__15743 = (i__4737__auto___15742 + (1));
i__4737__auto___15742 = G__15743;
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

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$pulse_DASH_watched,cljs.core.cst$kw$mx_DASH_sid,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.util.base.mx_sid_next(),tiltontec.cell.base.unbound,false,false,null,cljs.core.cst$kw$nascent,null,cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq15740){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15740));
}));

var ret__4785__auto___15752 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15753 = arguments.length;
var i__4737__auto___15754 = (0);
while(true){
if((i__4737__auto___15754 < len__4736__auto___15753)){
args__4742__auto__.push((arguments[i__4737__auto___15754]));

var G__15755 = (i__4737__auto___15754 + (1));
i__4737__auto___15754 = G__15755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15748,body){
var vec__15749 = p__15748;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15749,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq15744){
var G__15745 = cljs.core.first(seq15744);
var seq15744__$1 = cljs.core.next(seq15744);
var G__15746 = cljs.core.first(seq15744__$1);
var seq15744__$2 = cljs.core.next(seq15744__$1);
var G__15747 = cljs.core.first(seq15744__$2);
var seq15744__$3 = cljs.core.next(seq15744__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15745,G__15746,G__15747,seq15744__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___15764 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15765 = arguments.length;
var i__4737__auto___15766 = (0);
while(true){
if((i__4737__auto___15766 < len__4736__auto___15765)){
args__4742__auto__.push((arguments[i__4737__auto___15766]));

var G__15767 = (i__4737__auto___15766 + (1));
i__4737__auto___15766 = G__15767;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15760,body){
var vec__15761 = p__15760;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15761,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq15756){
var G__15757 = cljs.core.first(seq15756);
var seq15756__$1 = cljs.core.next(seq15756);
var G__15758 = cljs.core.first(seq15756__$1);
var seq15756__$2 = cljs.core.next(seq15756__$1);
var G__15759 = cljs.core.first(seq15756__$2);
var seq15756__$3 = cljs.core.next(seq15756__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15757,G__15758,G__15759,seq15756__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___15771 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15772 = arguments.length;
var i__4737__auto___15773 = (0);
while(true){
if((i__4737__auto___15773 < len__4736__auto___15772)){
args__4742__auto__.push((arguments[i__4737__auto___15773]));

var G__15774 = (i__4737__auto___15773 + (1));
i__4737__auto___15773 = G__15774;
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
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq15768){
var G__15769 = cljs.core.first(seq15768);
var seq15768__$1 = cljs.core.next(seq15768);
var G__15770 = cljs.core.first(seq15768__$1);
var seq15768__$2 = cljs.core.next(seq15768__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15769,G__15770,seq15768__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___15778 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15779 = arguments.length;
var i__4737__auto___15780 = (0);
while(true){
if((i__4737__auto___15780 < len__4736__auto___15779)){
args__4742__auto__.push((arguments[i__4737__auto___15780]));

var G__15781 = (i__4737__auto___15780 + (1));
i__4737__auto___15780 = G__15781;
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
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq15775){
var G__15776 = cljs.core.first(seq15775);
var seq15775__$1 = cljs.core.next(seq15775);
var G__15777 = cljs.core.first(seq15775__$1);
var seq15775__$2 = cljs.core.next(seq15775__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15776,G__15777,seq15775__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___15785 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15786 = arguments.length;
var i__4737__auto___15787 = (0);
while(true){
if((i__4737__auto___15787 < len__4736__auto___15786)){
args__4742__auto__.push((arguments[i__4737__auto___15787]));

var G__15788 = (i__4737__auto___15787 + (1));
i__4737__auto___15787 = G__15788;
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
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq15782){
var G__15783 = cljs.core.first(seq15782);
var seq15782__$1 = cljs.core.next(seq15782);
var G__15784 = cljs.core.first(seq15782__$1);
var seq15782__$2 = cljs.core.next(seq15782__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15783,G__15784,seq15782__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___15797 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15798 = arguments.length;
var i__4737__auto___15799 = (0);
while(true){
if((i__4737__auto___15799 < len__4736__auto___15798)){
args__4742__auto__.push((arguments[i__4737__auto___15799]));

var G__15800 = (i__4737__auto___15799 + (1));
i__4737__auto___15799 = G__15800;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15793,body){
var vec__15794 = p__15793;
var seq__15795 = cljs.core.seq(vec__15794);
var options = seq__15795;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq15789){
var G__15790 = cljs.core.first(seq15789);
var seq15789__$1 = cljs.core.next(seq15789);
var G__15791 = cljs.core.first(seq15789__$1);
var seq15789__$2 = cljs.core.next(seq15789__$1);
var G__15792 = cljs.core.first(seq15789__$2);
var seq15789__$3 = cljs.core.next(seq15789__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15790,G__15791,G__15792,seq15789__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___15804 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15805 = arguments.length;
var i__4737__auto___15806 = (0);
while(true){
if((i__4737__auto___15806 < len__4736__auto___15805)){
args__4742__auto__.push((arguments[i__4737__auto___15806]));

var G__15807 = (i__4737__auto___15806 + (1));
i__4737__auto___15806 = G__15807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq15801){
var G__15802 = cljs.core.first(seq15801);
var seq15801__$1 = cljs.core.next(seq15801);
var G__15803 = cljs.core.first(seq15801__$1);
var seq15801__$2 = cljs.core.next(seq15801__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15802,G__15803,seq15801__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___15816 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15817 = arguments.length;
var i__4737__auto___15818 = (0);
while(true){
if((i__4737__auto___15818 < len__4736__auto___15817)){
args__4742__auto__.push((arguments[i__4737__auto___15818]));

var G__15819 = (i__4737__auto___15818 + (1));
i__4737__auto___15818 = G__15819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15812,body){
var vec__15813 = p__15812;
var seq__15814 = cljs.core.seq(vec__15813);
var options = seq__15814;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq15808){
var G__15809 = cljs.core.first(seq15808);
var seq15808__$1 = cljs.core.next(seq15808);
var G__15810 = cljs.core.first(seq15808__$1);
var seq15808__$2 = cljs.core.next(seq15808__$1);
var G__15811 = cljs.core.first(seq15808__$2);
var seq15808__$3 = cljs.core.next(seq15808__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15809,G__15810,G__15811,seq15808__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___15823 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15824 = arguments.length;
var i__4737__auto___15825 = (0);
while(true){
if((i__4737__auto___15825 < len__4736__auto___15824)){
args__4742__auto__.push((arguments[i__4737__auto___15825]));

var G__15826 = (i__4737__auto___15825 + (1));
i__4737__auto___15825 = G__15826;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_Fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq15820){
var G__15821 = cljs.core.first(seq15820);
var seq15820__$1 = cljs.core.next(seq15820);
var G__15822 = cljs.core.first(seq15820__$1);
var seq15820__$2 = cljs.core.next(seq15820__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15821,G__15822,seq15820__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___15830 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15831 = arguments.length;
var i__4737__auto___15832 = (0);
while(true){
if((i__4737__auto___15832 < len__4736__auto___15831)){
args__4742__auto__.push((arguments[i__4737__auto___15832]));

var G__15833 = (i__4737__auto___15832 + (1));
i__4737__auto___15832 = G__15833;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$debug,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFn_dbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq15827){
var G__15828 = cljs.core.first(seq15827);
var seq15827__$1 = cljs.core.next(seq15827);
var G__15829 = cljs.core.first(seq15827__$1);
var seq15827__$2 = cljs.core.next(seq15827__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15828,G__15829,seq15827__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___15838 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15839 = arguments.length;
var i__4737__auto___15840 = (0);
while(true){
if((i__4737__auto___15840 < len__4736__auto___15839)){
args__4742__auto__.push((arguments[i__4737__auto___15840]));

var G__15841 = (i__4737__auto___15840 + (1));
i__4737__auto___15840 = G__15841;
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
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq15834){
var G__15835 = cljs.core.first(seq15834);
var seq15834__$1 = cljs.core.next(seq15834);
var G__15836 = cljs.core.first(seq15834__$1);
var seq15834__$2 = cljs.core.next(seq15834__$1);
var G__15837 = cljs.core.first(seq15834__$2);
var seq15834__$3 = cljs.core.next(seq15834__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15835,G__15836,G__15837,seq15834__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___15845 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15846 = arguments.length;
var i__4737__auto___15847 = (0);
while(true){
if((i__4737__auto___15847 < len__4736__auto___15846)){
args__4742__auto__.push((arguments[i__4737__auto___15847]));

var G__15848 = (i__4737__auto___15847 + (1));
i__4737__auto___15847 = G__15848;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cFonce.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq15842){
var G__15843 = cljs.core.first(seq15842);
var seq15842__$1 = cljs.core.next(seq15842);
var G__15844 = cljs.core.first(seq15842__$1);
var seq15842__$2 = cljs.core.next(seq15842__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15843,G__15844,seq15842__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___15852 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15853 = arguments.length;
var i__4737__auto___15854 = (0);
while(true){
if((i__4737__auto___15854 < len__4736__auto___15853)){
args__4742__auto__.push((arguments[i__4737__auto___15854]));

var G__15855 = (i__4737__auto___15854 + (1));
i__4737__auto___15854 = G__15855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq15849){
var G__15850 = cljs.core.first(seq15849);
var seq15849__$1 = cljs.core.next(seq15849);
var G__15851 = cljs.core.first(seq15849__$1);
var seq15849__$2 = cljs.core.next(seq15849__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15850,G__15851,seq15849__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___15859 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15860 = arguments.length;
var i__4737__auto___15861 = (0);
while(true){
if((i__4737__auto___15861 < len__4736__auto___15860)){
args__4742__auto__.push((arguments[i__4737__auto___15861]));

var G__15862 = (i__4737__auto___15861 + (1));
i__4737__auto___15861 = G__15862;
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
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq15856){
var G__15857 = cljs.core.first(seq15856);
var seq15856__$1 = cljs.core.next(seq15856);
var G__15858 = cljs.core.first(seq15856__$1);
var seq15856__$2 = cljs.core.next(seq15856__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15857,G__15858,seq15856__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___15866 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15867 = arguments.length;
var i__4737__auto___15868 = (0);
while(true){
if((i__4737__auto___15868 < len__4736__auto___15867)){
args__4742__auto__.push((arguments[i__4737__auto___15868]));

var G__15869 = (i__4737__auto___15868 + (1));
i__4737__auto___15868 = G__15869;
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
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq15863){
var G__15864 = cljs.core.first(seq15863);
var seq15863__$1 = cljs.core.next(seq15863);
var G__15865 = cljs.core.first(seq15863__$1);
var seq15863__$2 = cljs.core.next(seq15863__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15864,G__15865,seq15863__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___15878 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15879 = arguments.length;
var i__4737__auto___15880 = (0);
while(true){
if((i__4737__auto___15880 < len__4736__auto___15879)){
args__4742__auto__.push((arguments[i__4737__auto___15880]));

var G__15881 = (i__4737__auto___15880 + (1));
i__4737__auto___15880 = G__15881;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15874,body){
var vec__15875 = p__15874;
var seq__15876 = cljs.core.seq(vec__15875);
var options = seq__15876;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq15870){
var G__15871 = cljs.core.first(seq15870);
var seq15870__$1 = cljs.core.next(seq15870);
var G__15872 = cljs.core.first(seq15870__$1);
var seq15870__$2 = cljs.core.next(seq15870__$1);
var G__15873 = cljs.core.first(seq15870__$2);
var seq15870__$3 = cljs.core.next(seq15870__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15871,G__15872,G__15873,seq15870__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___15890 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15891 = arguments.length;
var i__4737__auto___15892 = (0);
while(true){
if((i__4737__auto___15892 < len__4736__auto___15891)){
args__4742__auto__.push((arguments[i__4737__auto___15892]));

var G__15893 = (i__4737__auto___15892 + (1));
i__4737__auto___15892 = G__15893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15886,body){
var vec__15887 = p__15886;
var seq__15888 = cljs.core.seq(vec__15887);
var options = seq__15888;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq15882){
var G__15883 = cljs.core.first(seq15882);
var seq15882__$1 = cljs.core.next(seq15882);
var G__15884 = cljs.core.first(seq15882__$1);
var seq15882__$2 = cljs.core.next(seq15882__$1);
var G__15885 = cljs.core.first(seq15882__$2);
var seq15882__$3 = cljs.core.next(seq15882__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15883,G__15884,G__15885,seq15882__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___15897 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15898 = arguments.length;
var i__4737__auto___15899 = (0);
while(true){
if((i__4737__auto___15899 < len__4736__auto___15898)){
args__4742__auto__.push((arguments[i__4737__auto___15899]));

var G__15900 = (i__4737__auto___15899 + (1));
i__4737__auto___15899 = G__15900;
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
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq15894){
var G__15895 = cljs.core.first(seq15894);
var seq15894__$1 = cljs.core.next(seq15894);
var G__15896 = cljs.core.first(seq15894__$1);
var seq15894__$2 = cljs.core.next(seq15894__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15895,G__15896,seq15894__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___15909 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
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

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15905,body){
var vec__15906 = p__15905;
var seq__15907 = cljs.core.seq(vec__15906);
var kvs = seq__15907;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),cljs.core.keys], 0))));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq15901){
var G__15902 = cljs.core.first(seq15901);
var seq15901__$1 = cljs.core.next(seq15901);
var G__15903 = cljs.core.first(seq15901__$1);
var seq15901__$2 = cljs.core.next(seq15901__$1);
var G__15904 = cljs.core.first(seq15901__$2);
var seq15901__$3 = cljs.core.next(seq15901__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15902,G__15903,G__15904,seq15901__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___15920 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15921 = arguments.length;
var i__4737__auto___15922 = (0);
while(true){
if((i__4737__auto___15922 < len__4736__auto___15921)){
args__4742__auto__.push((arguments[i__4737__auto___15922]));

var G__15923 = (i__4737__auto___15922 + (1));
i__4737__auto___15922 = G__15923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15916){
var vec__15917 = p__15916;
var value_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15917,(0),null);
var value_source = (function (){var or__4126__auto__ = value_form;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$sym$_cache;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$core_SLASH_rmap_DASH_setf,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$optimize,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$freeze,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,value_source,null,(1),null))], 0))));
}));

(tiltontec.cell.core.cf_freeze.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq15913){
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
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___15929 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15930 = arguments.length;
var i__4737__auto___15931 = (0);
while(true){
if((i__4737__auto___15931 < len__4736__auto___15930)){
args__4742__auto__.push((arguments[i__4737__auto___15931]));

var G__15932 = (i__4737__auto___15931 + (1));
i__4737__auto___15931 = G__15932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15924__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__15925__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15924__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__15925__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15924__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq15926){
var G__15927 = cljs.core.first(seq15926);
var seq15926__$1 = cljs.core.next(seq15926);
var G__15928 = cljs.core.first(seq15926__$1);
var seq15926__$2 = cljs.core.next(seq15926__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15927,G__15928,seq15926__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___15939 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15940 = arguments.length;
var i__4737__auto___15941 = (0);
while(true){
if((i__4737__auto___15941 < len__4736__auto___15940)){
args__4742__auto__.push((arguments[i__4737__auto___15941]));

var G__15942 = (i__4737__auto___15941 + (1));
i__4737__auto___15941 = G__15942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15933__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__15934__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__15935__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__15934__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15933__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__15935__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15933__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq15936){
var G__15937 = cljs.core.first(seq15936);
var seq15936__$1 = cljs.core.next(seq15936);
var G__15938 = cljs.core.first(seq15936__$1);
var seq15936__$2 = cljs.core.next(seq15936__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15937,G__15938,seq15936__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___15949 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15950 = arguments.length;
var i__4737__auto___15951 = (0);
while(true){
if((i__4737__auto___15951 < len__4736__auto___15950)){
args__4742__auto__.push((arguments[i__4737__auto___15951]));

var G__15952 = (i__4737__auto___15951 + (1));
i__4737__auto___15951 = G__15952;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15943__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__15944__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15943__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__15944__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15943__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq15945){
var G__15946 = cljs.core.first(seq15945);
var seq15945__$1 = cljs.core.next(seq15945);
var G__15947 = cljs.core.first(seq15945__$1);
var seq15945__$2 = cljs.core.next(seq15945__$1);
var G__15948 = cljs.core.first(seq15945__$2);
var seq15945__$3 = cljs.core.next(seq15945__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15946,G__15947,G__15948,seq15945__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___15957 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15958 = arguments.length;
var i__4737__auto___15959 = (0);
while(true){
if((i__4737__auto___15959 < len__4736__auto___15958)){
args__4742__auto__.push((arguments[i__4737__auto___15959]));

var G__15960 = (i__4737__auto___15959 + (1));
i__4737__auto___15959 = G__15960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15953__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$curr__15953__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq15954){
var G__15955 = cljs.core.first(seq15954);
var seq15954__$1 = cljs.core.next(seq15954);
var G__15956 = cljs.core.first(seq15954__$1);
var seq15954__$2 = cljs.core.next(seq15954__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15955,G__15956,seq15954__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15963 = arguments.length;
var i__4737__auto___15964 = (0);
while(true){
if((i__4737__auto___15964 < len__4736__auto___15963)){
args__4742__auto__.push((arguments[i__4737__auto___15964]));

var G__15965 = (i__4737__auto___15964 + (1));
i__4737__auto___15964 = G__15965;
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
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq15961){
var G__15962 = cljs.core.first(seq15961);
var seq15961__$1 = cljs.core.next(seq15961);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15962,seq15961__$1);
}));

tiltontec.cell.core.cset_BANG_ = (function tiltontec$cell$core$cset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.not(tiltontec.cell.base.c_async_QMARK_(c))){
} else {
throw (new Error(["Assert failed: ",["attempt to cset! cfuture ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c))].join(''),"\n","(not (c-async? c))"].join('')));
}

if(cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))){
var me = tiltontec.cell.base.c_model(c);
var G__15966 = cljs.core.str;
var G__15967 = "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '";
var G__15968 = tiltontec.cell.base.c_prop_name(c);
var G__15969 = "', which is not mediated by an input cell.\n";
var G__15970 = "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n";
var G__15971 = "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n";
var G__15972 = "..> FYI: intended new value is [";
var G__15973 = new_value;
var G__15974 = "].\n";
var G__15975 = "..> FYI: the non-input cell is ";
var G__15976 = cljs.core.deref(c);
var G__15977 = "\n";
var G__15978 = "..> FYI: instance is of type ";
var G__15979 = tiltontec.util.base.mx_type(me);
var G__15980 = ".\n";
var G__15981 = "..> FYI: full instance is ";
var G__15982 = cljs.core.deref(me);
var G__15983 = "\n";
var G__15984 = "..> FYI: instance meta is ";
var G__15985 = cljs.core.meta(me);
var G__15986 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21(G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986) : tiltontec.util.core.err.call(null,G__15966,G__15967,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973,G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var prop = tiltontec.cell.base.c_prop_name(c);
var me = tiltontec.cell.base.c_model(c);
var G__15987 = "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '";
var G__15988 = prop;
var G__15989 = "' by an watch detected.";
var G__15990 = "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.";
var G__15991 = "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n";
var G__15992 = "...> FYI: intended new value is [";
var G__15993 = new_value;
var G__15994 = "]; current value is [";
var G__15995 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__15996 = "].\n";
var G__15997 = "...> FYI: instance is of type ";
var G__15998 = tiltontec.util.base.mx_type(me);
var G__15999 = ".\n";
var G__16000 = "...> FYI: full instance is ";
var G__16001 = cljs.core.deref(me);
var G__16002 = "\n";
var G__16003 = "...> FYI: instance meta is ";
var G__16004 = cljs.core.meta(me);
var G__16005 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19(G__15987,G__15988,G__15989,G__15990,G__15991,G__15992,G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005) : tiltontec.util.core.err.call(null,G__15987,G__15988,G__15989,G__15990,G__15991,G__15992,G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005));
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
return tiltontec.cell.core.cset_BANG_(c,new_value);
});
tiltontec.cell.core.c_swap_BANG_ = (function tiltontec$cell$core$c_swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16009 = arguments.length;
var i__4737__auto___16010 = (0);
while(true){
if((i__4737__auto___16010 < len__4736__auto___16009)){
args__4742__auto__.push((arguments[i__4737__auto___16010]));

var G__16011 = (i__4737__auto___16010 + (1));
i__4737__auto___16010 = G__16011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG_(c,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.cell.evaluate.cget(c),swap_fn_args));
}));

(tiltontec.cell.core.c_swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq16006){
var G__16007 = cljs.core.first(seq16006);
var seq16006__$1 = cljs.core.next(seq16006);
var G__16008 = cljs.core.first(seq16006__$1);
var seq16006__$2 = cljs.core.next(seq16006__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16007,G__16008,seq16006__$2);
}));

var ret__4785__auto___16014 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,"c-reset-next! deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$c__16012__auto__,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16013__auto__,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c__16012__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16013__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___16015 = /**
 * Completely untested!!!!!!!!!!!!!!!
 */
tiltontec.cell.core.cset_next_BANG_ = (function tiltontec$cell$core$cset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f_new_value,null,(1),null))], 0))));
});
(tiltontec.cell.core.cset_next_BANG_.cljs$lang$macro = true);

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);

}
});
tiltontec.cell.core.call_with_mx = (function tiltontec$cell$core$call_with_mx(fn){
var _STAR_pulse_STAR__orig_val__16016 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__16017 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__16018 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__16019 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__16020 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__16021 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__16022 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_quiesce_STAR__orig_val__16023 = tiltontec.cell.base._STAR_quiesce_STAR_;
var _STAR_custom_propagator_STAR__orig_val__16024 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__16025 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__16026 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__16027 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__16028 = tiltontec.cell.base.pulse_initial();
var _STAR_within_integrity_STAR__temp_val__16029 = false;
var _STAR_unfinished_business_STAR__temp_val__16030 = tiltontec.cell.base.unfin_biz_build();
var _STAR_causation_STAR__temp_val__16031 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__16032 = null;
var _STAR_depender_STAR__temp_val__16033 = null;
var _STAR_defer_changes_STAR__temp_val__16034 = false;
var _STAR_quiesce_STAR__temp_val__16035 = false;
var _STAR_custom_propagator_STAR__temp_val__16036 = null;
var _STAR_c_prop_depth_STAR__temp_val__16037 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__16038 = false;
var _STAR_dp_log_STAR__temp_val__16039 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__16028);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__16029);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__16030);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__16031);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__16032);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__16033);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__16034);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__temp_val__16035);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__16036);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__16037);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__16038);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__16039);

try{return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__16027);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__16026);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__16025);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__16024);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__orig_val__16023);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__16022);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__16021);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__16020);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__16019);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__16018);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__16017);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__16016);
}});
var ret__4785__auto___16043 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16044 = arguments.length;
var i__4737__auto___16045 = (0);
while(true){
if((i__4737__auto___16045 < len__4736__auto___16044)){
args__4742__auto__.push((arguments[i__4737__auto___16045]));

var G__16046 = (i__4737__auto___16045 + (1));
i__4737__auto___16045 = G__16046;
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
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq16040){
var G__16041 = cljs.core.first(seq16040);
var seq16040__$1 = cljs.core.next(seq16040);
var G__16042 = cljs.core.first(seq16040__$1);
var seq16040__$2 = cljs.core.next(seq16040__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16041,G__16042,seq16040__$2);
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
var len__4736__auto___16048 = arguments.length;
var i__4737__auto___16049 = (0);
while(true){
if((i__4737__auto___16049 < len__4736__auto___16048)){
args__4742__auto__.push((arguments[i__4737__auto___16049]));

var G__16050 = (i__4737__auto___16049 + (1));
i__4737__auto___16049 = G__16050;
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
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq16047){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16047));
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
var _STAR_dag_depth_STAR__orig_val__16051 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16052 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16052);

try{var seq__16053 = cljs.core.seq(ccs);
var chunk__16054 = null;
var count__16055 = (0);
var i__16056 = (0);
while(true){
if((i__16056 < count__16055)){
var cc = chunk__16054.cljs$core$IIndexed$_nth$arity$2(null,i__16056);
var G__16061_16065 = cljs.core.cst$kw$used_DASH_by;
var G__16062_16066 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16061_16065,G__16062_16066) : tiltontec.cell.core.dag_dump_1.call(null,G__16061_16065,G__16062_16066));


var G__16067 = seq__16053;
var G__16068 = chunk__16054;
var G__16069 = count__16055;
var G__16070 = (i__16056 + (1));
seq__16053 = G__16067;
chunk__16054 = G__16068;
count__16055 = G__16069;
i__16056 = G__16070;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16053);
if(temp__5804__auto__){
var seq__16053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16053__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16053__$1);
var G__16071 = cljs.core.chunk_rest(seq__16053__$1);
var G__16072 = c__4556__auto__;
var G__16073 = cljs.core.count(c__4556__auto__);
var G__16074 = (0);
seq__16053 = G__16071;
chunk__16054 = G__16072;
count__16055 = G__16073;
i__16056 = G__16074;
continue;
} else {
var cc = cljs.core.first(seq__16053__$1);
var G__16063_16075 = cljs.core.cst$kw$used_DASH_by;
var G__16064_16076 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16063_16075,G__16064_16076) : tiltontec.cell.core.dag_dump_1.call(null,G__16063_16075,G__16064_16076));


var G__16077 = cljs.core.next(seq__16053__$1);
var G__16078 = null;
var G__16079 = (0);
var G__16080 = (0);
seq__16053 = G__16077;
chunk__16054 = G__16078;
count__16055 = G__16079;
i__16056 = G__16080;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16051);
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
var _STAR_dag_depth_STAR__orig_val__16081 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16082 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16082);

try{var seq__16083 = cljs.core.seq(ccs);
var chunk__16084 = null;
var count__16085 = (0);
var i__16086 = (0);
while(true){
if((i__16086 < count__16085)){
var cc = chunk__16084.cljs$core$IIndexed$_nth$arity$2(null,i__16086);
var G__16091_16095 = cljs.core.cst$kw$using;
var G__16092_16096 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16091_16095,G__16092_16096) : tiltontec.cell.core.dag_dump_1.call(null,G__16091_16095,G__16092_16096));


var G__16097 = seq__16083;
var G__16098 = chunk__16084;
var G__16099 = count__16085;
var G__16100 = (i__16086 + (1));
seq__16083 = G__16097;
chunk__16084 = G__16098;
count__16085 = G__16099;
i__16086 = G__16100;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16083);
if(temp__5804__auto__){
var seq__16083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16083__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16083__$1);
var G__16101 = cljs.core.chunk_rest(seq__16083__$1);
var G__16102 = c__4556__auto__;
var G__16103 = cljs.core.count(c__4556__auto__);
var G__16104 = (0);
seq__16083 = G__16101;
chunk__16084 = G__16102;
count__16085 = G__16103;
i__16086 = G__16104;
continue;
} else {
var cc = cljs.core.first(seq__16083__$1);
var G__16093_16105 = cljs.core.cst$kw$using;
var G__16094_16106 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16093_16105,G__16094_16106) : tiltontec.cell.core.dag_dump_1.call(null,G__16093_16105,G__16094_16106));


var G__16107 = cljs.core.next(seq__16083__$1);
var G__16108 = null;
var G__16109 = (0);
var G__16110 = (0);
seq__16083 = G__16107;
chunk__16084 = G__16108;
count__16085 = G__16109;
i__16086 = G__16110;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16081);
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

var temp__5804__auto___16111 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16111)){
var p_16112 = temp__5804__auto___16111;
(p_16112.cljs$core$IFn$_invoke$arity$2 ? p_16112.cljs$core$IFn$_invoke$arity$2(tag,c) : p_16112.call(null,tag,c));
} else {
}

var temp__5804__auto___16113 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16113)){
var p_16114 = temp__5804__auto___16113;
(p_16114.cljs$core$IFn$_invoke$arity$1 ? p_16114.cljs$core$IFn$_invoke$arity$1(c) : p_16114.call(null,c));
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

var _STAR_dag_depth_STAR__orig_val__16115 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16116 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16116);

try{return tiltontec.cell.core.dag_dump_1(tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16115);
}});
