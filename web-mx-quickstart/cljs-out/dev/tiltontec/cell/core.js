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
var G__15730 = options;
var vec__15731 = G__15730;
var seq__15732 = cljs.core.seq(vec__15731);
var first__15733 = cljs.core.first(seq__15732);
var seq__15732__$1 = cljs.core.next(seq__15732);
var k = first__15733;
var first__15733__$1 = cljs.core.first(seq__15732__$1);
var seq__15732__$2 = cljs.core.next(seq__15732__$1);
var v = first__15733__$1;
var more = seq__15732__$2;
var res = null;
var G__15730__$1 = G__15730;
var res__$1 = res;
while(true){
var vec__15737 = G__15730__$1;
var seq__15738 = cljs.core.seq(vec__15737);
var first__15739 = cljs.core.first(seq__15738);
var seq__15738__$1 = cljs.core.next(seq__15738);
var k__$1 = first__15739;
var first__15739__$1 = cljs.core.first(seq__15738__$1);
var seq__15738__$2 = cljs.core.next(seq__15738__$1);
var v__$1 = first__15739__$1;
var more__$1 = seq__15738__$2;
var res__$2 = res__$1;
if((k__$1 == null)){
return cljs.core.reverse(res__$2);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),allowed))){
} else {
throw (new Error(["Assert failed: ",["Cell option invalid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),". Only allowed are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowed)].join(''),"\n","(some #{k} allowed)"].join('')));
}

var G__15740 = more__$1;
var G__15741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,k__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
G__15730__$1 = G__15740;
res__$1 = G__15741;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15743 = arguments.length;
var i__4737__auto___15744 = (0);
while(true){
if((i__4737__auto___15744 < len__4736__auto___15743)){
args__4742__auto__.push((arguments[i__4737__auto___15744]));

var G__15745 = (i__4737__auto___15744 + (1));
i__4737__auto___15744 = G__15745;
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
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq15742){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15742));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15747 = arguments.length;
var i__4737__auto___15748 = (0);
while(true){
if((i__4737__auto___15748 < len__4736__auto___15747)){
args__4742__auto__.push((arguments[i__4737__auto___15748]));

var G__15749 = (i__4737__auto___15748 + (1));
i__4737__auto___15748 = G__15749;
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
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq15746){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15746));
}));

var ret__4785__auto___15758 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15759 = arguments.length;
var i__4737__auto___15760 = (0);
while(true){
if((i__4737__auto___15760 < len__4736__auto___15759)){
args__4742__auto__.push((arguments[i__4737__auto___15760]));

var G__15761 = (i__4737__auto___15760 + (1));
i__4737__auto___15760 = G__15761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15754,body){
var vec__15755 = p__15754;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15755,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq15750){
var G__15751 = cljs.core.first(seq15750);
var seq15750__$1 = cljs.core.next(seq15750);
var G__15752 = cljs.core.first(seq15750__$1);
var seq15750__$2 = cljs.core.next(seq15750__$1);
var G__15753 = cljs.core.first(seq15750__$2);
var seq15750__$3 = cljs.core.next(seq15750__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15751,G__15752,G__15753,seq15750__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___15770 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15771 = arguments.length;
var i__4737__auto___15772 = (0);
while(true){
if((i__4737__auto___15772 < len__4736__auto___15771)){
args__4742__auto__.push((arguments[i__4737__auto___15772]));

var G__15773 = (i__4737__auto___15772 + (1));
i__4737__auto___15772 = G__15773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15766,body){
var vec__15767 = p__15766;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15767,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq15762){
var G__15763 = cljs.core.first(seq15762);
var seq15762__$1 = cljs.core.next(seq15762);
var G__15764 = cljs.core.first(seq15762__$1);
var seq15762__$2 = cljs.core.next(seq15762__$1);
var G__15765 = cljs.core.first(seq15762__$2);
var seq15762__$3 = cljs.core.next(seq15762__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15763,G__15764,G__15765,seq15762__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___15777 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15778 = arguments.length;
var i__4737__auto___15779 = (0);
while(true){
if((i__4737__auto___15779 < len__4736__auto___15778)){
args__4742__auto__.push((arguments[i__4737__auto___15779]));

var G__15780 = (i__4737__auto___15779 + (1));
i__4737__auto___15779 = G__15780;
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
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq15774){
var G__15775 = cljs.core.first(seq15774);
var seq15774__$1 = cljs.core.next(seq15774);
var G__15776 = cljs.core.first(seq15774__$1);
var seq15774__$2 = cljs.core.next(seq15774__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15775,G__15776,seq15774__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___15784 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15785 = arguments.length;
var i__4737__auto___15786 = (0);
while(true){
if((i__4737__auto___15786 < len__4736__auto___15785)){
args__4742__auto__.push((arguments[i__4737__auto___15786]));

var G__15787 = (i__4737__auto___15786 + (1));
i__4737__auto___15786 = G__15787;
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
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq15781){
var G__15782 = cljs.core.first(seq15781);
var seq15781__$1 = cljs.core.next(seq15781);
var G__15783 = cljs.core.first(seq15781__$1);
var seq15781__$2 = cljs.core.next(seq15781__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15782,G__15783,seq15781__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___15791 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15792 = arguments.length;
var i__4737__auto___15793 = (0);
while(true){
if((i__4737__auto___15793 < len__4736__auto___15792)){
args__4742__auto__.push((arguments[i__4737__auto___15793]));

var G__15794 = (i__4737__auto___15793 + (1));
i__4737__auto___15793 = G__15794;
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
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq15788){
var G__15789 = cljs.core.first(seq15788);
var seq15788__$1 = cljs.core.next(seq15788);
var G__15790 = cljs.core.first(seq15788__$1);
var seq15788__$2 = cljs.core.next(seq15788__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15789,G__15790,seq15788__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___15803 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15804 = arguments.length;
var i__4737__auto___15805 = (0);
while(true){
if((i__4737__auto___15805 < len__4736__auto___15804)){
args__4742__auto__.push((arguments[i__4737__auto___15805]));

var G__15806 = (i__4737__auto___15805 + (1));
i__4737__auto___15805 = G__15806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15799,body){
var vec__15800 = p__15799;
var seq__15801 = cljs.core.seq(vec__15800);
var options = seq__15801;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq15795){
var G__15796 = cljs.core.first(seq15795);
var seq15795__$1 = cljs.core.next(seq15795);
var G__15797 = cljs.core.first(seq15795__$1);
var seq15795__$2 = cljs.core.next(seq15795__$1);
var G__15798 = cljs.core.first(seq15795__$2);
var seq15795__$3 = cljs.core.next(seq15795__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15796,G__15797,G__15798,seq15795__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___15810 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15811 = arguments.length;
var i__4737__auto___15812 = (0);
while(true){
if((i__4737__auto___15812 < len__4736__auto___15811)){
args__4742__auto__.push((arguments[i__4737__auto___15812]));

var G__15813 = (i__4737__auto___15812 + (1));
i__4737__auto___15812 = G__15813;
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
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq15807){
var G__15808 = cljs.core.first(seq15807);
var seq15807__$1 = cljs.core.next(seq15807);
var G__15809 = cljs.core.first(seq15807__$1);
var seq15807__$2 = cljs.core.next(seq15807__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15808,G__15809,seq15807__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___15822 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15823 = arguments.length;
var i__4737__auto___15824 = (0);
while(true){
if((i__4737__auto___15824 < len__4736__auto___15823)){
args__4742__auto__.push((arguments[i__4737__auto___15824]));

var G__15825 = (i__4737__auto___15824 + (1));
i__4737__auto___15824 = G__15825;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15818,body){
var vec__15819 = p__15818;
var seq__15820 = cljs.core.seq(vec__15819);
var options = seq__15820;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq15814){
var G__15815 = cljs.core.first(seq15814);
var seq15814__$1 = cljs.core.next(seq15814);
var G__15816 = cljs.core.first(seq15814__$1);
var seq15814__$2 = cljs.core.next(seq15814__$1);
var G__15817 = cljs.core.first(seq15814__$2);
var seq15814__$3 = cljs.core.next(seq15814__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15815,G__15816,G__15817,seq15814__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___15829 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15830 = arguments.length;
var i__4737__auto___15831 = (0);
while(true){
if((i__4737__auto___15831 < len__4736__auto___15830)){
args__4742__auto__.push((arguments[i__4737__auto___15831]));

var G__15832 = (i__4737__auto___15831 + (1));
i__4737__auto___15831 = G__15832;
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
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq15826){
var G__15827 = cljs.core.first(seq15826);
var seq15826__$1 = cljs.core.next(seq15826);
var G__15828 = cljs.core.first(seq15826__$1);
var seq15826__$2 = cljs.core.next(seq15826__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15827,G__15828,seq15826__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___15836 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15837 = arguments.length;
var i__4737__auto___15838 = (0);
while(true){
if((i__4737__auto___15838 < len__4736__auto___15837)){
args__4742__auto__.push((arguments[i__4737__auto___15838]));

var G__15839 = (i__4737__auto___15838 + (1));
i__4737__auto___15838 = G__15839;
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
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq15833){
var G__15834 = cljs.core.first(seq15833);
var seq15833__$1 = cljs.core.next(seq15833);
var G__15835 = cljs.core.first(seq15833__$1);
var seq15833__$2 = cljs.core.next(seq15833__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15834,G__15835,seq15833__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___15844 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15845 = arguments.length;
var i__4737__auto___15846 = (0);
while(true){
if((i__4737__auto___15846 < len__4736__auto___15845)){
args__4742__auto__.push((arguments[i__4737__auto___15846]));

var G__15847 = (i__4737__auto___15846 + (1));
i__4737__auto___15846 = G__15847;
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
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq15840){
var G__15841 = cljs.core.first(seq15840);
var seq15840__$1 = cljs.core.next(seq15840);
var G__15842 = cljs.core.first(seq15840__$1);
var seq15840__$2 = cljs.core.next(seq15840__$1);
var G__15843 = cljs.core.first(seq15840__$2);
var seq15840__$3 = cljs.core.next(seq15840__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15841,G__15842,G__15843,seq15840__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___15851 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15852 = arguments.length;
var i__4737__auto___15853 = (0);
while(true){
if((i__4737__auto___15853 < len__4736__auto___15852)){
args__4742__auto__.push((arguments[i__4737__auto___15853]));

var G__15854 = (i__4737__auto___15853 + (1));
i__4737__auto___15853 = G__15854;
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
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq15848){
var G__15849 = cljs.core.first(seq15848);
var seq15848__$1 = cljs.core.next(seq15848);
var G__15850 = cljs.core.first(seq15848__$1);
var seq15848__$2 = cljs.core.next(seq15848__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15849,G__15850,seq15848__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___15858 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15859 = arguments.length;
var i__4737__auto___15860 = (0);
while(true){
if((i__4737__auto___15860 < len__4736__auto___15859)){
args__4742__auto__.push((arguments[i__4737__auto___15860]));

var G__15861 = (i__4737__auto___15860 + (1));
i__4737__auto___15860 = G__15861;
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
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq15855){
var G__15856 = cljs.core.first(seq15855);
var seq15855__$1 = cljs.core.next(seq15855);
var G__15857 = cljs.core.first(seq15855__$1);
var seq15855__$2 = cljs.core.next(seq15855__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15856,G__15857,seq15855__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___15865 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15866 = arguments.length;
var i__4737__auto___15867 = (0);
while(true){
if((i__4737__auto___15867 < len__4736__auto___15866)){
args__4742__auto__.push((arguments[i__4737__auto___15867]));

var G__15868 = (i__4737__auto___15867 + (1));
i__4737__auto___15867 = G__15868;
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
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq15862){
var G__15863 = cljs.core.first(seq15862);
var seq15862__$1 = cljs.core.next(seq15862);
var G__15864 = cljs.core.first(seq15862__$1);
var seq15862__$2 = cljs.core.next(seq15862__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15863,G__15864,seq15862__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___15872 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15873 = arguments.length;
var i__4737__auto___15874 = (0);
while(true){
if((i__4737__auto___15874 < len__4736__auto___15873)){
args__4742__auto__.push((arguments[i__4737__auto___15874]));

var G__15875 = (i__4737__auto___15874 + (1));
i__4737__auto___15874 = G__15875;
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
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq15869){
var G__15870 = cljs.core.first(seq15869);
var seq15869__$1 = cljs.core.next(seq15869);
var G__15871 = cljs.core.first(seq15869__$1);
var seq15869__$2 = cljs.core.next(seq15869__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15870,G__15871,seq15869__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___15884 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15885 = arguments.length;
var i__4737__auto___15886 = (0);
while(true){
if((i__4737__auto___15886 < len__4736__auto___15885)){
args__4742__auto__.push((arguments[i__4737__auto___15886]));

var G__15887 = (i__4737__auto___15886 + (1));
i__4737__auto___15886 = G__15887;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15880,body){
var vec__15881 = p__15880;
var seq__15882 = cljs.core.seq(vec__15881);
var options = seq__15882;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq15876){
var G__15877 = cljs.core.first(seq15876);
var seq15876__$1 = cljs.core.next(seq15876);
var G__15878 = cljs.core.first(seq15876__$1);
var seq15876__$2 = cljs.core.next(seq15876__$1);
var G__15879 = cljs.core.first(seq15876__$2);
var seq15876__$3 = cljs.core.next(seq15876__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15877,G__15878,G__15879,seq15876__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___15896 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15897 = arguments.length;
var i__4737__auto___15898 = (0);
while(true){
if((i__4737__auto___15898 < len__4736__auto___15897)){
args__4742__auto__.push((arguments[i__4737__auto___15898]));

var G__15899 = (i__4737__auto___15898 + (1));
i__4737__auto___15898 = G__15899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15892,body){
var vec__15893 = p__15892;
var seq__15894 = cljs.core.seq(vec__15893);
var options = seq__15894;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq15888){
var G__15889 = cljs.core.first(seq15888);
var seq15888__$1 = cljs.core.next(seq15888);
var G__15890 = cljs.core.first(seq15888__$1);
var seq15888__$2 = cljs.core.next(seq15888__$1);
var G__15891 = cljs.core.first(seq15888__$2);
var seq15888__$3 = cljs.core.next(seq15888__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15889,G__15890,G__15891,seq15888__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___15903 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15904 = arguments.length;
var i__4737__auto___15905 = (0);
while(true){
if((i__4737__auto___15905 < len__4736__auto___15904)){
args__4742__auto__.push((arguments[i__4737__auto___15905]));

var G__15906 = (i__4737__auto___15905 + (1));
i__4737__auto___15905 = G__15906;
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
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq15900){
var G__15901 = cljs.core.first(seq15900);
var seq15900__$1 = cljs.core.next(seq15900);
var G__15902 = cljs.core.first(seq15900__$1);
var seq15900__$2 = cljs.core.next(seq15900__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15901,G__15902,seq15900__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___15915 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15916 = arguments.length;
var i__4737__auto___15917 = (0);
while(true){
if((i__4737__auto___15917 < len__4736__auto___15916)){
args__4742__auto__.push((arguments[i__4737__auto___15917]));

var G__15918 = (i__4737__auto___15917 + (1));
i__4737__auto___15917 = G__15918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15911,body){
var vec__15912 = p__15911;
var seq__15913 = cljs.core.seq(vec__15912);
var kvs = seq__15913;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),cljs.core.keys], 0))));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq15907){
var G__15908 = cljs.core.first(seq15907);
var seq15907__$1 = cljs.core.next(seq15907);
var G__15909 = cljs.core.first(seq15907__$1);
var seq15907__$2 = cljs.core.next(seq15907__$1);
var G__15910 = cljs.core.first(seq15907__$2);
var seq15907__$3 = cljs.core.next(seq15907__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15908,G__15909,G__15910,seq15907__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___15926 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15927 = arguments.length;
var i__4737__auto___15928 = (0);
while(true){
if((i__4737__auto___15928 < len__4736__auto___15927)){
args__4742__auto__.push((arguments[i__4737__auto___15928]));

var G__15929 = (i__4737__auto___15928 + (1));
i__4737__auto___15928 = G__15929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__15922){
var vec__15923 = p__15922;
var value_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15923,(0),null);
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
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq15919){
var G__15920 = cljs.core.first(seq15919);
var seq15919__$1 = cljs.core.next(seq15919);
var G__15921 = cljs.core.first(seq15919__$1);
var seq15919__$2 = cljs.core.next(seq15919__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15920,G__15921,seq15919__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___15935 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
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
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15930__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__15931__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15930__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__15931__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15930__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq15932){
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
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___15945 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15946 = arguments.length;
var i__4737__auto___15947 = (0);
while(true){
if((i__4737__auto___15947 < len__4736__auto___15946)){
args__4742__auto__.push((arguments[i__4737__auto___15947]));

var G__15948 = (i__4737__auto___15947 + (1));
i__4737__auto___15947 = G__15948;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15939__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__15940__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__15941__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__15940__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15939__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__15941__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15939__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq15942){
var G__15943 = cljs.core.first(seq15942);
var seq15942__$1 = cljs.core.next(seq15942);
var G__15944 = cljs.core.first(seq15942__$1);
var seq15942__$2 = cljs.core.next(seq15942__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15943,G__15944,seq15942__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___15955 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15956 = arguments.length;
var i__4737__auto___15957 = (0);
while(true){
if((i__4737__auto___15957 < len__4736__auto___15956)){
args__4742__auto__.push((arguments[i__4737__auto___15957]));

var G__15958 = (i__4737__auto___15957 + (1));
i__4737__auto___15957 = G__15958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15949__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__15950__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15949__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__15950__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__15949__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq15951){
var G__15952 = cljs.core.first(seq15951);
var seq15951__$1 = cljs.core.next(seq15951);
var G__15953 = cljs.core.first(seq15951__$1);
var seq15951__$2 = cljs.core.next(seq15951__$1);
var G__15954 = cljs.core.first(seq15951__$2);
var seq15951__$3 = cljs.core.next(seq15951__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15952,G__15953,G__15954,seq15951__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___15963 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15964 = arguments.length;
var i__4737__auto___15965 = (0);
while(true){
if((i__4737__auto___15965 < len__4736__auto___15964)){
args__4742__auto__.push((arguments[i__4737__auto___15965]));

var G__15966 = (i__4737__auto___15965 + (1));
i__4737__auto___15965 = G__15966;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__15959__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$curr__15959__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq15960){
var G__15961 = cljs.core.first(seq15960);
var seq15960__$1 = cljs.core.next(seq15960);
var G__15962 = cljs.core.first(seq15960__$1);
var seq15960__$2 = cljs.core.next(seq15960__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15961,G__15962,seq15960__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15969 = arguments.length;
var i__4737__auto___15970 = (0);
while(true){
if((i__4737__auto___15970 < len__4736__auto___15969)){
args__4742__auto__.push((arguments[i__4737__auto___15970]));

var G__15971 = (i__4737__auto___15970 + (1));
i__4737__auto___15970 = G__15971;
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
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq15967){
var G__15968 = cljs.core.first(seq15967);
var seq15967__$1 = cljs.core.next(seq15967);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15968,seq15967__$1);
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
var G__15972 = cljs.core.str;
var G__15973 = "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '";
var G__15974 = tiltontec.cell.base.c_prop_name(c);
var G__15975 = "', which is not mediated by an input cell.\n";
var G__15976 = "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n";
var G__15977 = "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n";
var G__15978 = "..> FYI: intended new value is [";
var G__15979 = new_value;
var G__15980 = "].\n";
var G__15981 = "..> FYI: the non-input cell is ";
var G__15982 = cljs.core.deref(c);
var G__15983 = "\n";
var G__15984 = "..> FYI: instance is of type ";
var G__15985 = tiltontec.util.base.mx_type(me);
var G__15986 = ".\n";
var G__15987 = "..> FYI: full instance is ";
var G__15988 = cljs.core.deref(me);
var G__15989 = "\n";
var G__15990 = "..> FYI: instance meta is ";
var G__15991 = cljs.core.meta(me);
var G__15992 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21(G__15972,G__15973,G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991,G__15992) : tiltontec.util.core.err.call(null,G__15972,G__15973,G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987,G__15988,G__15989,G__15990,G__15991,G__15992));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var prop = tiltontec.cell.base.c_prop_name(c);
var me = tiltontec.cell.base.c_model(c);
var G__15993 = "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '";
var G__15994 = prop;
var G__15995 = "' by an watch detected.";
var G__15996 = "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.";
var G__15997 = "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n";
var G__15998 = "...> FYI: intended new value is [";
var G__15999 = new_value;
var G__16000 = "]; current value is [";
var G__16001 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__16002 = "].\n";
var G__16003 = "...> FYI: instance is of type ";
var G__16004 = tiltontec.util.base.mx_type(me);
var G__16005 = ".\n";
var G__16006 = "...> FYI: full instance is ";
var G__16007 = cljs.core.deref(me);
var G__16008 = "\n";
var G__16009 = "...> FYI: instance meta is ";
var G__16010 = cljs.core.meta(me);
var G__16011 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19(G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010,G__16011) : tiltontec.util.core.err.call(null,G__15993,G__15994,G__15995,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003,G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010,G__16011));
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
var len__4736__auto___16015 = arguments.length;
var i__4737__auto___16016 = (0);
while(true){
if((i__4737__auto___16016 < len__4736__auto___16015)){
args__4742__auto__.push((arguments[i__4737__auto___16016]));

var G__16017 = (i__4737__auto___16016 + (1));
i__4737__auto___16016 = G__16017;
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
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq16012){
var G__16013 = cljs.core.first(seq16012);
var seq16012__$1 = cljs.core.next(seq16012);
var G__16014 = cljs.core.first(seq16012__$1);
var seq16012__$2 = cljs.core.next(seq16012__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16013,G__16014,seq16012__$2);
}));

var ret__4785__auto___16020 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,"c-reset-next! deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$c__16018__auto__,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16019__auto__,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c__16018__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__16019__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___16021 = /**
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
var _STAR_pulse_STAR__orig_val__16022 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__16023 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__16024 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__16025 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__16026 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__16027 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__16028 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_quiesce_STAR__orig_val__16029 = tiltontec.cell.base._STAR_quiesce_STAR_;
var _STAR_custom_propagator_STAR__orig_val__16030 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__16031 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__16032 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__16033 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__16034 = tiltontec.cell.base.pulse_initial();
var _STAR_within_integrity_STAR__temp_val__16035 = false;
var _STAR_unfinished_business_STAR__temp_val__16036 = tiltontec.cell.base.unfin_biz_build();
var _STAR_causation_STAR__temp_val__16037 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__16038 = null;
var _STAR_depender_STAR__temp_val__16039 = null;
var _STAR_defer_changes_STAR__temp_val__16040 = false;
var _STAR_quiesce_STAR__temp_val__16041 = false;
var _STAR_custom_propagator_STAR__temp_val__16042 = null;
var _STAR_c_prop_depth_STAR__temp_val__16043 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__16044 = false;
var _STAR_dp_log_STAR__temp_val__16045 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__16034);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__16035);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__16036);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__16037);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__16038);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__16039);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__16040);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__temp_val__16041);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__16042);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__16043);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__16044);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__16045);

try{return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__16033);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__16032);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__16031);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__16030);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__orig_val__16029);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__16028);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__16027);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__16026);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__16025);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__16024);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__16023);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__16022);
}});
var ret__4785__auto___16049 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16050 = arguments.length;
var i__4737__auto___16051 = (0);
while(true){
if((i__4737__auto___16051 < len__4736__auto___16050)){
args__4742__auto__.push((arguments[i__4737__auto___16051]));

var G__16052 = (i__4737__auto___16051 + (1));
i__4737__auto___16051 = G__16052;
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
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first(seq16046);
var seq16046__$1 = cljs.core.next(seq16046);
var G__16048 = cljs.core.first(seq16046__$1);
var seq16046__$2 = cljs.core.next(seq16046__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16047,G__16048,seq16046__$2);
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
var len__4736__auto___16054 = arguments.length;
var i__4737__auto___16055 = (0);
while(true){
if((i__4737__auto___16055 < len__4736__auto___16054)){
args__4742__auto__.push((arguments[i__4737__auto___16055]));

var G__16056 = (i__4737__auto___16055 + (1));
i__4737__auto___16055 = G__16056;
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
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq16053){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16053));
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
var _STAR_dag_depth_STAR__orig_val__16057 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16058 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16058);

try{var seq__16059 = cljs.core.seq(ccs);
var chunk__16060 = null;
var count__16061 = (0);
var i__16062 = (0);
while(true){
if((i__16062 < count__16061)){
var cc = chunk__16060.cljs$core$IIndexed$_nth$arity$2(null,i__16062);
var G__16067_16071 = cljs.core.cst$kw$used_DASH_by;
var G__16068_16072 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16067_16071,G__16068_16072) : tiltontec.cell.core.dag_dump_1.call(null,G__16067_16071,G__16068_16072));


var G__16073 = seq__16059;
var G__16074 = chunk__16060;
var G__16075 = count__16061;
var G__16076 = (i__16062 + (1));
seq__16059 = G__16073;
chunk__16060 = G__16074;
count__16061 = G__16075;
i__16062 = G__16076;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16059);
if(temp__5804__auto__){
var seq__16059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16059__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16059__$1);
var G__16077 = cljs.core.chunk_rest(seq__16059__$1);
var G__16078 = c__4556__auto__;
var G__16079 = cljs.core.count(c__4556__auto__);
var G__16080 = (0);
seq__16059 = G__16077;
chunk__16060 = G__16078;
count__16061 = G__16079;
i__16062 = G__16080;
continue;
} else {
var cc = cljs.core.first(seq__16059__$1);
var G__16069_16081 = cljs.core.cst$kw$used_DASH_by;
var G__16070_16082 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16069_16081,G__16070_16082) : tiltontec.cell.core.dag_dump_1.call(null,G__16069_16081,G__16070_16082));


var G__16083 = cljs.core.next(seq__16059__$1);
var G__16084 = null;
var G__16085 = (0);
var G__16086 = (0);
seq__16059 = G__16083;
chunk__16060 = G__16084;
count__16061 = G__16085;
i__16062 = G__16086;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16057);
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
var _STAR_dag_depth_STAR__orig_val__16087 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16088 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16088);

try{var seq__16089 = cljs.core.seq(ccs);
var chunk__16090 = null;
var count__16091 = (0);
var i__16092 = (0);
while(true){
if((i__16092 < count__16091)){
var cc = chunk__16090.cljs$core$IIndexed$_nth$arity$2(null,i__16092);
var G__16097_16101 = cljs.core.cst$kw$using;
var G__16098_16102 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16097_16101,G__16098_16102) : tiltontec.cell.core.dag_dump_1.call(null,G__16097_16101,G__16098_16102));


var G__16103 = seq__16089;
var G__16104 = chunk__16090;
var G__16105 = count__16091;
var G__16106 = (i__16092 + (1));
seq__16089 = G__16103;
chunk__16090 = G__16104;
count__16091 = G__16105;
i__16092 = G__16106;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16089);
if(temp__5804__auto__){
var seq__16089__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16089__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16089__$1);
var G__16107 = cljs.core.chunk_rest(seq__16089__$1);
var G__16108 = c__4556__auto__;
var G__16109 = cljs.core.count(c__4556__auto__);
var G__16110 = (0);
seq__16089 = G__16107;
chunk__16090 = G__16108;
count__16091 = G__16109;
i__16092 = G__16110;
continue;
} else {
var cc = cljs.core.first(seq__16089__$1);
var G__16099_16111 = cljs.core.cst$kw$using;
var G__16100_16112 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__16099_16111,G__16100_16112) : tiltontec.cell.core.dag_dump_1.call(null,G__16099_16111,G__16100_16112));


var G__16113 = cljs.core.next(seq__16089__$1);
var G__16114 = null;
var G__16115 = (0);
var G__16116 = (0);
seq__16089 = G__16113;
chunk__16090 = G__16114;
count__16091 = G__16115;
i__16092 = G__16116;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16087);
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

var temp__5804__auto___16117 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16117)){
var p_16118 = temp__5804__auto___16117;
(p_16118.cljs$core$IFn$_invoke$arity$2 ? p_16118.cljs$core$IFn$_invoke$arity$2(tag,c) : p_16118.call(null,tag,c));
} else {
}

var temp__5804__auto___16119 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___16119)){
var p_16120 = temp__5804__auto___16119;
(p_16120.cljs$core$IFn$_invoke$arity$1 ? p_16120.cljs$core$IFn$_invoke$arity$1(c) : p_16120.call(null,c));
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

var _STAR_dag_depth_STAR__orig_val__16121 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__16122 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__16122);

try{return tiltontec.cell.core.dag_dump_1(tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__16121);
}});
