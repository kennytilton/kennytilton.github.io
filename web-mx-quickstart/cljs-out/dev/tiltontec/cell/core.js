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
var G__21563 = options;
var vec__21564 = G__21563;
var seq__21565 = cljs.core.seq(vec__21564);
var first__21566 = cljs.core.first(seq__21565);
var seq__21565__$1 = cljs.core.next(seq__21565);
var k = first__21566;
var first__21566__$1 = cljs.core.first(seq__21565__$1);
var seq__21565__$2 = cljs.core.next(seq__21565__$1);
var v = first__21566__$1;
var more = seq__21565__$2;
var res = null;
var G__21563__$1 = G__21563;
var res__$1 = res;
while(true){
var vec__21570 = G__21563__$1;
var seq__21571 = cljs.core.seq(vec__21570);
var first__21572 = cljs.core.first(seq__21571);
var seq__21571__$1 = cljs.core.next(seq__21571);
var k__$1 = first__21572;
var first__21572__$1 = cljs.core.first(seq__21571__$1);
var seq__21571__$2 = cljs.core.next(seq__21571__$1);
var v__$1 = first__21572__$1;
var more__$1 = seq__21571__$2;
var res__$2 = res__$1;
if((k__$1 == null)){
return cljs.core.reverse(res__$2);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),allowed))){
} else {
throw (new Error(["Assert failed: ",["Cell option invalid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),". Only allowed are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowed)].join(''),"\n","(some #{k} allowed)"].join('')));
}

var G__21573 = more__$1;
var G__21574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,k__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0));
G__21563__$1 = G__21573;
res__$1 = G__21574;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21576 = arguments.length;
var i__4737__auto___21577 = (0);
while(true){
if((i__4737__auto___21577 < len__4736__auto___21576)){
args__4742__auto__.push((arguments[i__4737__auto___21577]));

var G__21578 = (i__4737__auto___21577 + (1));
i__4737__auto___21577 = G__21578;
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
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$pulse_DASH_watched,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$synapses,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,false,null,cljs.core.cst$kw$nascent,null,true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq21575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21575));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21580 = arguments.length;
var i__4737__auto___21581 = (0);
while(true){
if((i__4737__auto___21581 < len__4736__auto___21580)){
args__4742__auto__.push((arguments[i__4737__auto___21581]));

var G__21582 = (i__4737__auto___21581 + (1));
i__4737__auto___21581 = G__21582;
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

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$pulse_DASH_watched,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.cell.base.unbound,false,false,null,cljs.core.cst$kw$nascent,null,cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq21579){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21579));
}));

var ret__4785__auto___21591 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21592 = arguments.length;
var i__4737__auto___21593 = (0);
while(true){
if((i__4737__auto___21593 < len__4736__auto___21592)){
args__4742__auto__.push((arguments[i__4737__auto___21593]));

var G__21594 = (i__4737__auto___21593 + (1));
i__4737__auto___21593 = G__21594;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21587,body){
var vec__21588 = p__21587;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq21583){
var G__21584 = cljs.core.first(seq21583);
var seq21583__$1 = cljs.core.next(seq21583);
var G__21585 = cljs.core.first(seq21583__$1);
var seq21583__$2 = cljs.core.next(seq21583__$1);
var G__21586 = cljs.core.first(seq21583__$2);
var seq21583__$3 = cljs.core.next(seq21583__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21584,G__21585,G__21586,seq21583__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___21603 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21604 = arguments.length;
var i__4737__auto___21605 = (0);
while(true){
if((i__4737__auto___21605 < len__4736__auto___21604)){
args__4742__auto__.push((arguments[i__4737__auto___21605]));

var G__21606 = (i__4737__auto___21605 + (1));
i__4737__auto___21605 = G__21606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21599,body){
var vec__21600 = p__21599;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21600,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cell,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_prop_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value,null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq21595){
var G__21596 = cljs.core.first(seq21595);
var seq21595__$1 = cljs.core.next(seq21595);
var G__21597 = cljs.core.first(seq21595__$1);
var seq21595__$2 = cljs.core.next(seq21595__$1);
var G__21598 = cljs.core.first(seq21595__$2);
var seq21595__$3 = cljs.core.next(seq21595__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21596,G__21597,G__21598,seq21595__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___21610 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21611 = arguments.length;
var i__4737__auto___21612 = (0);
while(true){
if((i__4737__auto___21612 < len__4736__auto___21611)){
args__4742__auto__.push((arguments[i__4737__auto___21612]));

var G__21613 = (i__4737__auto___21612 + (1));
i__4737__auto___21612 = G__21613;
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
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq21607){
var G__21608 = cljs.core.first(seq21607);
var seq21607__$1 = cljs.core.next(seq21607);
var G__21609 = cljs.core.first(seq21607__$1);
var seq21607__$2 = cljs.core.next(seq21607__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21608,G__21609,seq21607__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___21617 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21618 = arguments.length;
var i__4737__auto___21619 = (0);
while(true){
if((i__4737__auto___21619 < len__4736__auto___21618)){
args__4742__auto__.push((arguments[i__4737__auto___21619]));

var G__21620 = (i__4737__auto___21619 + (1));
i__4737__auto___21619 = G__21620;
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
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq21614){
var G__21615 = cljs.core.first(seq21614);
var seq21614__$1 = cljs.core.next(seq21614);
var G__21616 = cljs.core.first(seq21614__$1);
var seq21614__$2 = cljs.core.next(seq21614__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21615,G__21616,seq21614__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___21624 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21625 = arguments.length;
var i__4737__auto___21626 = (0);
while(true){
if((i__4737__auto___21626 < len__4736__auto___21625)){
args__4742__auto__.push((arguments[i__4737__auto___21626]));

var G__21627 = (i__4737__auto___21626 + (1));
i__4737__auto___21626 = G__21627;
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
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq21621){
var G__21622 = cljs.core.first(seq21621);
var seq21621__$1 = cljs.core.next(seq21621);
var G__21623 = cljs.core.first(seq21621__$1);
var seq21621__$2 = cljs.core.next(seq21621__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21622,G__21623,seq21621__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___21636 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21637 = arguments.length;
var i__4737__auto___21638 = (0);
while(true){
if((i__4737__auto___21638 < len__4736__auto___21637)){
args__4742__auto__.push((arguments[i__4737__auto___21638]));

var G__21639 = (i__4737__auto___21638 + (1));
i__4737__auto___21638 = G__21639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21632,body){
var vec__21633 = p__21632;
var seq__21634 = cljs.core.seq(vec__21633);
var options = seq__21634;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq21628){
var G__21629 = cljs.core.first(seq21628);
var seq21628__$1 = cljs.core.next(seq21628);
var G__21630 = cljs.core.first(seq21628__$1);
var seq21628__$2 = cljs.core.next(seq21628__$1);
var G__21631 = cljs.core.first(seq21628__$2);
var seq21628__$3 = cljs.core.next(seq21628__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21629,G__21630,G__21631,seq21628__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___21643 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21644 = arguments.length;
var i__4737__auto___21645 = (0);
while(true){
if((i__4737__auto___21645 < len__4736__auto___21644)){
args__4742__auto__.push((arguments[i__4737__auto___21645]));

var G__21646 = (i__4737__auto___21645 + (1));
i__4737__auto___21645 = G__21646;
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
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq21640){
var G__21641 = cljs.core.first(seq21640);
var seq21640__$1 = cljs.core.next(seq21640);
var G__21642 = cljs.core.first(seq21640__$1);
var seq21640__$2 = cljs.core.next(seq21640__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21641,G__21642,seq21640__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___21655 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21656 = arguments.length;
var i__4737__auto___21657 = (0);
while(true){
if((i__4737__auto___21657 < len__4736__auto___21656)){
args__4742__auto__.push((arguments[i__4737__auto___21657]));

var G__21658 = (i__4737__auto___21657 + (1));
i__4737__auto___21657 = G__21658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21651,body){
var vec__21652 = p__21651;
var seq__21653 = cljs.core.seq(vec__21652);
var options = seq__21653;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$input_QMARK_,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency,null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq21647){
var G__21648 = cljs.core.first(seq21647);
var seq21647__$1 = cljs.core.next(seq21647);
var G__21649 = cljs.core.first(seq21647__$1);
var seq21647__$2 = cljs.core.next(seq21647__$1);
var G__21650 = cljs.core.first(seq21647__$2);
var seq21647__$3 = cljs.core.next(seq21647__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21648,G__21649,G__21650,seq21647__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___21662 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21663 = arguments.length;
var i__4737__auto___21664 = (0);
while(true){
if((i__4737__auto___21664 < len__4736__auto___21663)){
args__4742__auto__.push((arguments[i__4737__auto___21664]));

var G__21665 = (i__4737__auto___21664 + (1));
i__4737__auto___21664 = G__21665;
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
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq21659){
var G__21660 = cljs.core.first(seq21659);
var seq21659__$1 = cljs.core.next(seq21659);
var G__21661 = cljs.core.first(seq21659__$1);
var seq21659__$2 = cljs.core.next(seq21659__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21660,G__21661,seq21659__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___21669 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21670 = arguments.length;
var i__4737__auto___21671 = (0);
while(true){
if((i__4737__auto___21671 < len__4736__auto___21670)){
args__4742__auto__.push((arguments[i__4737__auto___21671]));

var G__21672 = (i__4737__auto___21671 + (1));
i__4737__auto___21671 = G__21672;
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
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq21666){
var G__21667 = cljs.core.first(seq21666);
var seq21666__$1 = cljs.core.next(seq21666);
var G__21668 = cljs.core.first(seq21666__$1);
var seq21666__$2 = cljs.core.next(seq21666__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21667,G__21668,seq21666__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___21677 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21678 = arguments.length;
var i__4737__auto___21679 = (0);
while(true){
if((i__4737__auto___21679 < len__4736__auto___21678)){
args__4742__auto__.push((arguments[i__4737__auto___21679]));

var G__21680 = (i__4737__auto___21679 + (1));
i__4737__auto___21679 = G__21680;
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
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq21673){
var G__21674 = cljs.core.first(seq21673);
var seq21673__$1 = cljs.core.next(seq21673);
var G__21675 = cljs.core.first(seq21673__$1);
var seq21673__$2 = cljs.core.next(seq21673__$1);
var G__21676 = cljs.core.first(seq21673__$2);
var seq21673__$3 = cljs.core.next(seq21673__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21674,G__21675,G__21676,seq21673__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___21684 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21685 = arguments.length;
var i__4737__auto___21686 = (0);
while(true){
if((i__4737__auto___21686 < len__4736__auto___21685)){
args__4742__auto__.push((arguments[i__4737__auto___21686]));

var G__21687 = (i__4737__auto___21686 + (1));
i__4737__auto___21686 = G__21687;
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
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq21681){
var G__21682 = cljs.core.first(seq21681);
var seq21681__$1 = cljs.core.next(seq21681);
var G__21683 = cljs.core.first(seq21681__$1);
var seq21681__$2 = cljs.core.next(seq21681__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21682,G__21683,seq21681__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___21691 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21692 = arguments.length;
var i__4737__auto___21693 = (0);
while(true){
if((i__4737__auto___21693 < len__4736__auto___21692)){
args__4742__auto__.push((arguments[i__4737__auto___21693]));

var G__21694 = (i__4737__auto___21693 + (1));
i__4737__auto___21693 = G__21694;
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
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq21688){
var G__21689 = cljs.core.first(seq21688);
var seq21688__$1 = cljs.core.next(seq21688);
var G__21690 = cljs.core.first(seq21688__$1);
var seq21688__$2 = cljs.core.next(seq21688__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21689,G__21690,seq21688__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___21698 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21699 = arguments.length;
var i__4737__auto___21700 = (0);
while(true){
if((i__4737__auto___21700 < len__4736__auto___21699)){
args__4742__auto__.push((arguments[i__4737__auto___21700]));

var G__21701 = (i__4737__auto___21700 + (1));
i__4737__auto___21700 = G__21701;
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
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq21695){
var G__21696 = cljs.core.first(seq21695);
var seq21695__$1 = cljs.core.next(seq21695);
var G__21697 = cljs.core.first(seq21695__$1);
var seq21695__$2 = cljs.core.next(seq21695__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21696,G__21697,seq21695__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___21705 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21706 = arguments.length;
var i__4737__auto___21707 = (0);
while(true){
if((i__4737__auto___21707 < len__4736__auto___21706)){
args__4742__auto__.push((arguments[i__4737__auto___21707]));

var G__21708 = (i__4737__auto___21707 + (1));
i__4737__auto___21707 = G__21708;
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
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq21702){
var G__21703 = cljs.core.first(seq21702);
var seq21702__$1 = cljs.core.next(seq21702);
var G__21704 = cljs.core.first(seq21702__$1);
var seq21702__$2 = cljs.core.next(seq21702__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21703,G__21704,seq21702__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___21717 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21718 = arguments.length;
var i__4737__auto___21719 = (0);
while(true){
if((i__4737__auto___21719 < len__4736__auto___21718)){
args__4742__auto__.push((arguments[i__4737__auto___21719]));

var G__21720 = (i__4737__auto___21719 + (1));
i__4737__auto___21719 = G__21720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21713,body){
var vec__21714 = p__21713;
var seq__21715 = cljs.core.seq(vec__21714);
var options = seq__21715;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq21709){
var G__21710 = cljs.core.first(seq21709);
var seq21709__$1 = cljs.core.next(seq21709);
var G__21711 = cljs.core.first(seq21709__$1);
var seq21709__$2 = cljs.core.next(seq21709__$1);
var G__21712 = cljs.core.first(seq21709__$2);
var seq21709__$3 = cljs.core.next(seq21709__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21710,G__21711,G__21712,seq21709__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___21729 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21730 = arguments.length;
var i__4737__auto___21731 = (0);
while(true){
if((i__4737__auto___21731 < len__4736__auto___21730)){
args__4742__auto__.push((arguments[i__4737__auto___21731]));

var G__21732 = (i__4737__auto___21731 + (1));
i__4737__auto___21731 = G__21732;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21725,body){
var vec__21726 = p__21725;
var seq__21727 = cljs.core.seq(vec__21726);
var options = seq__21727;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$lazy,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$until_DASH_asked,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq21721){
var G__21722 = cljs.core.first(seq21721);
var seq21721__$1 = cljs.core.next(seq21721);
var G__21723 = cljs.core.first(seq21721__$1);
var seq21721__$2 = cljs.core.next(seq21721__$1);
var G__21724 = cljs.core.first(seq21721__$2);
var seq21721__$3 = cljs.core.next(seq21721__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21722,G__21723,G__21724,seq21721__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___21736 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21737 = arguments.length;
var i__4737__auto___21738 = (0);
while(true){
if((i__4737__auto___21738 < len__4736__auto___21737)){
args__4742__auto__.push((arguments[i__4737__auto___21738]));

var G__21739 = (i__4737__auto___21738 + (1));
i__4737__auto___21738 = G__21739;
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
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq21733){
var G__21734 = cljs.core.first(seq21733);
var seq21733__$1 = cljs.core.next(seq21733);
var G__21735 = cljs.core.first(seq21733__$1);
var seq21733__$2 = cljs.core.next(seq21733__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21734,G__21735,seq21733__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___21748 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21749 = arguments.length;
var i__4737__auto___21750 = (0);
while(true){
if((i__4737__auto___21750 < len__4736__auto___21749)){
args__4742__auto__.push((arguments[i__4737__auto___21750]));

var G__21751 = (i__4737__auto___21750 + (1));
i__4737__auto___21750 = G__21751;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21744,body){
var vec__21745 = p__21744;
var seq__21746 = cljs.core.seq(vec__21745);
var kvs = seq__21746;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$code,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$rule,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn,null,(1),null)),body))),null,(1),null)),cljs.core.keys], 0))));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq21740){
var G__21741 = cljs.core.first(seq21740);
var seq21740__$1 = cljs.core.next(seq21740);
var G__21742 = cljs.core.first(seq21740__$1);
var seq21740__$2 = cljs.core.next(seq21740__$1);
var G__21743 = cljs.core.first(seq21740__$2);
var seq21740__$3 = cljs.core.next(seq21740__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21741,G__21742,G__21743,seq21740__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___21759 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21760 = arguments.length;
var i__4737__auto___21761 = (0);
while(true){
if((i__4737__auto___21761 < len__4736__auto___21760)){
args__4742__auto__.push((arguments[i__4737__auto___21761]));

var G__21762 = (i__4737__auto___21761 + (1));
i__4737__auto___21761 = G__21762;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21755){
var vec__21756 = p__21755;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21756,(0),null);
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
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq21752){
var G__21753 = cljs.core.first(seq21752);
var seq21752__$1 = cljs.core.next(seq21752);
var G__21754 = cljs.core.first(seq21752__$1);
var seq21752__$2 = cljs.core.next(seq21752__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21753,G__21754,seq21752__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___21768 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21769 = arguments.length;
var i__4737__auto___21770 = (0);
while(true){
if((i__4737__auto___21770 < len__4736__auto___21769)){
args__4742__auto__.push((arguments[i__4737__auto___21770]));

var G__21771 = (i__4737__auto___21770 + (1));
i__4737__auto___21770 = G__21771;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__21763__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__21764__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_merge,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21763__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$key_DASH_values__21764__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21763__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq21765){
var G__21766 = cljs.core.first(seq21765);
var seq21765__$1 = cljs.core.next(seq21765);
var G__21767 = cljs.core.first(seq21765__$1);
var seq21765__$2 = cljs.core.next(seq21765__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21766,G__21767,seq21765__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___21778 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21779 = arguments.length;
var i__4737__auto___21780 = (0);
while(true){
if((i__4737__auto___21780 < len__4736__auto___21779)){
args__4742__auto__.push((arguments[i__4737__auto___21780]));

var G__21781 = (i__4737__auto___21780 + (1));
i__4737__auto___21780 = G__21781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__21772__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__21773__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__21774__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_op__21773__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21772__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__21774__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21772__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq21775){
var G__21776 = cljs.core.first(seq21775);
var seq21775__$1 = cljs.core.next(seq21775);
var G__21777 = cljs.core.first(seq21775__$1);
var seq21775__$2 = cljs.core.next(seq21775__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21776,G__21777,seq21775__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___21788 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21789 = arguments.length;
var i__4737__auto___21790 = (0);
while(true){
if((i__4737__auto___21790 < len__4736__auto___21789)){
args__4742__auto__.push((arguments[i__4737__auto___21790]));

var G__21791 = (i__4737__auto___21790 + (1));
i__4737__auto___21790 = G__21791;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__21782__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__21783__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21782__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_elt__21783__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$curr__21782__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq21784){
var G__21785 = cljs.core.first(seq21784);
var seq21784__$1 = cljs.core.next(seq21784);
var G__21786 = cljs.core.first(seq21784__$1);
var seq21784__$2 = cljs.core.next(seq21784__$1);
var G__21787 = cljs.core.first(seq21784__$2);
var seq21784__$3 = cljs.core.next(seq21784__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21785,G__21786,G__21787,seq21784__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___21796 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21797 = arguments.length;
var i__4737__auto___21798 = (0);
while(true){
if((i__4737__auto___21798 < len__4736__auto___21797)){
args__4742__auto__.push((arguments[i__4737__auto___21798]));

var G__21799 = (i__4737__auto___21798 + (1));
i__4737__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$curr__21792__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$_cache,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$curr__21792__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq21793){
var G__21794 = cljs.core.first(seq21793);
var seq21793__$1 = cljs.core.next(seq21793);
var G__21795 = cljs.core.first(seq21793__$1);
var seq21793__$2 = cljs.core.next(seq21793__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21794,G__21795,seq21793__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21802 = arguments.length;
var i__4737__auto___21803 = (0);
while(true){
if((i__4737__auto___21803 < len__4736__auto___21802)){
args__4742__auto__.push((arguments[i__4737__auto___21803]));

var G__21804 = (i__4737__auto___21803 + (1));
i__4737__auto___21803 = G__21804;
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
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq21800){
var G__21801 = cljs.core.first(seq21800);
var seq21800__$1 = cljs.core.next(seq21800);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21801,seq21800__$1);
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
var G__21805 = cljs.core.str;
var G__21806 = "MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '";
var G__21807 = tiltontec.cell.base.c_prop_name(c);
var G__21808 = "', which is not mediated by an input cell.\n";
var G__21809 = "..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n";
var G__21810 = "..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n";
var G__21811 = "..> FYI: intended new value is [";
var G__21812 = new_value;
var G__21813 = "].\n";
var G__21814 = "..> FYI: the non-input cell is ";
var G__21815 = cljs.core.deref(c);
var G__21816 = "\n";
var G__21817 = "..> FYI: instance is of type ";
var G__21818 = tiltontec.util.base.mx_type(me);
var G__21819 = ".\n";
var G__21820 = "..> FYI: full instance is ";
var G__21821 = cljs.core.deref(me);
var G__21822 = "\n";
var G__21823 = "..> FYI: instance meta is ";
var G__21824 = cljs.core.meta(me);
var G__21825 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$21(G__21805,G__21806,G__21807,G__21808,G__21809,G__21810,G__21811,G__21812,G__21813,G__21814,G__21815,G__21816,G__21817,G__21818,G__21819,G__21820,G__21821,G__21822,G__21823,G__21824,G__21825) : tiltontec.util.core.err.call(null,G__21805,G__21806,G__21807,G__21808,G__21809,G__21810,G__21811,G__21812,G__21813,G__21814,G__21815,G__21816,G__21817,G__21818,G__21819,G__21820,G__21821,G__21822,G__21823,G__21824,G__21825));
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var prop = tiltontec.cell.base.c_prop_name(c);
var me = tiltontec.cell.base.c_model(c);
var G__21826 = "MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '";
var G__21827 = prop;
var G__21828 = "' by an watch detected.";
var G__21829 = "...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.";
var G__21830 = "...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n";
var G__21831 = "...> FYI: intended new value is [";
var G__21832 = new_value;
var G__21833 = "]; current value is [";
var G__21834 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(me),prop,cljs.core.cst$kw$no_DASH_such_DASH_prop);
var G__21835 = "].\n";
var G__21836 = "...> FYI: instance is of type ";
var G__21837 = tiltontec.util.base.mx_type(me);
var G__21838 = ".\n";
var G__21839 = "...> FYI: full instance is ";
var G__21840 = cljs.core.deref(me);
var G__21841 = "\n";
var G__21842 = "...> FYI: instance meta is ";
var G__21843 = cljs.core.meta(me);
var G__21844 = "\n.";
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$19(G__21826,G__21827,G__21828,G__21829,G__21830,G__21831,G__21832,G__21833,G__21834,G__21835,G__21836,G__21837,G__21838,G__21839,G__21840,G__21841,G__21842,G__21843,G__21844) : tiltontec.util.core.err.call(null,G__21826,G__21827,G__21828,G__21829,G__21830,G__21831,G__21832,G__21833,G__21834,G__21835,G__21836,G__21837,G__21838,G__21839,G__21840,G__21841,G__21842,G__21843,G__21844));
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
var len__4736__auto___21848 = arguments.length;
var i__4737__auto___21849 = (0);
while(true){
if((i__4737__auto___21849 < len__4736__auto___21848)){
args__4742__auto__.push((arguments[i__4737__auto___21849]));

var G__21850 = (i__4737__auto___21849 + (1));
i__4737__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG_(c,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(swap_fn,tiltontec.cell.evaluate._LT_cget(c),swap_fn_args));
}));

(tiltontec.cell.core.c_swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq21845){
var G__21846 = cljs.core.first(seq21845);
var seq21845__$1 = cljs.core.next(seq21845);
var G__21847 = cljs.core.first(seq21845__$1);
var seq21845__$2 = cljs.core.next(seq21845__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21846,G__21847,seq21845__$2);
}));

var ret__4785__auto___21853 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,"c-reset-next! deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_prop,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$c__21851__auto__,null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__21852__auto__,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$c__21851__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_value__21852__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___21854 = /**
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
var _STAR_pulse_STAR__orig_val__21855 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__21856 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__21857 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__21858 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__21859 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__21860 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__21861 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_quiesce_STAR__orig_val__21862 = tiltontec.cell.base._STAR_quiesce_STAR_;
var _STAR_custom_propagator_STAR__orig_val__21863 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__21864 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__21865 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__21866 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__21867 = tiltontec.cell.base.pulse_initial();
var _STAR_within_integrity_STAR__temp_val__21868 = false;
var _STAR_unfinished_business_STAR__temp_val__21869 = tiltontec.cell.base.unfin_biz_build();
var _STAR_causation_STAR__temp_val__21870 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__21871 = null;
var _STAR_depender_STAR__temp_val__21872 = null;
var _STAR_defer_changes_STAR__temp_val__21873 = false;
var _STAR_quiesce_STAR__temp_val__21874 = false;
var _STAR_custom_propagator_STAR__temp_val__21875 = null;
var _STAR_c_prop_depth_STAR__temp_val__21876 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__21877 = false;
var _STAR_dp_log_STAR__temp_val__21878 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__21867);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__21868);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__21869);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__21870);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21871);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21872);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21873);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__temp_val__21874);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__21875);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__21876);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__21877);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__21878);

try{return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__21866);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__21865);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__21864);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__21863);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__orig_val__21862);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21861);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21860);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21859);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__21858);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__21857);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__21856);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__21855);
}});
var ret__4785__auto___21882 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21883 = arguments.length;
var i__4737__auto___21884 = (0);
while(true){
if((i__4737__auto___21884 < len__4736__auto___21883)){
args__4742__auto__.push((arguments[i__4737__auto___21884]));

var G__21885 = (i__4737__auto___21884 + (1));
i__4737__auto___21884 = G__21885;
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
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq21879){
var G__21880 = cljs.core.first(seq21879);
var seq21879__$1 = cljs.core.next(seq21879);
var G__21881 = cljs.core.first(seq21879__$1);
var seq21879__$2 = cljs.core.next(seq21879__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21880,G__21881,seq21879__$2);
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
var len__4736__auto___21887 = arguments.length;
var i__4737__auto___21888 = (0);
while(true){
if((i__4737__auto___21888 < len__4736__auto___21887)){
args__4742__auto__.push((arguments[i__4737__auto___21888]));

var G__21889 = (i__4737__auto___21888 + (1));
i__4737__auto___21888 = G__21889;
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
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq21886){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21886));
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
var _STAR_dag_depth_STAR__orig_val__21890 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__21891 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__21891);

try{var seq__21892 = cljs.core.seq(ccs);
var chunk__21893 = null;
var count__21894 = (0);
var i__21895 = (0);
while(true){
if((i__21895 < count__21894)){
var cc = chunk__21893.cljs$core$IIndexed$_nth$arity$2(null,i__21895);
var G__21900_21904 = cljs.core.cst$kw$used_DASH_by;
var G__21901_21905 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__21900_21904,G__21901_21905) : tiltontec.cell.core.dag_dump_1.call(null,G__21900_21904,G__21901_21905));


var G__21906 = seq__21892;
var G__21907 = chunk__21893;
var G__21908 = count__21894;
var G__21909 = (i__21895 + (1));
seq__21892 = G__21906;
chunk__21893 = G__21907;
count__21894 = G__21908;
i__21895 = G__21909;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21892);
if(temp__5804__auto__){
var seq__21892__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21892__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21892__$1);
var G__21910 = cljs.core.chunk_rest(seq__21892__$1);
var G__21911 = c__4556__auto__;
var G__21912 = cljs.core.count(c__4556__auto__);
var G__21913 = (0);
seq__21892 = G__21910;
chunk__21893 = G__21911;
count__21894 = G__21912;
i__21895 = G__21913;
continue;
} else {
var cc = cljs.core.first(seq__21892__$1);
var G__21902_21914 = cljs.core.cst$kw$used_DASH_by;
var G__21903_21915 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__21902_21914,G__21903_21915) : tiltontec.cell.core.dag_dump_1.call(null,G__21902_21914,G__21903_21915));


var G__21916 = cljs.core.next(seq__21892__$1);
var G__21917 = null;
var G__21918 = (0);
var G__21919 = (0);
seq__21892 = G__21916;
chunk__21893 = G__21917;
count__21894 = G__21918;
i__21895 = G__21919;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__21890);
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
var _STAR_dag_depth_STAR__orig_val__21920 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__21921 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__21921);

try{var seq__21922 = cljs.core.seq(ccs);
var chunk__21923 = null;
var count__21924 = (0);
var i__21925 = (0);
while(true){
if((i__21925 < count__21924)){
var cc = chunk__21923.cljs$core$IIndexed$_nth$arity$2(null,i__21925);
var G__21930_21934 = cljs.core.cst$kw$using;
var G__21931_21935 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__21930_21934,G__21931_21935) : tiltontec.cell.core.dag_dump_1.call(null,G__21930_21934,G__21931_21935));


var G__21936 = seq__21922;
var G__21937 = chunk__21923;
var G__21938 = count__21924;
var G__21939 = (i__21925 + (1));
seq__21922 = G__21936;
chunk__21923 = G__21937;
count__21924 = G__21938;
i__21925 = G__21939;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21922);
if(temp__5804__auto__){
var seq__21922__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21922__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21922__$1);
var G__21940 = cljs.core.chunk_rest(seq__21922__$1);
var G__21941 = c__4556__auto__;
var G__21942 = cljs.core.count(c__4556__auto__);
var G__21943 = (0);
seq__21922 = G__21940;
chunk__21923 = G__21941;
count__21924 = G__21942;
i__21925 = G__21943;
continue;
} else {
var cc = cljs.core.first(seq__21922__$1);
var G__21932_21944 = cljs.core.cst$kw$using;
var G__21933_21945 = cc;
(tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.core.dag_dump_1.cljs$core$IFn$_invoke$arity$2(G__21932_21944,G__21933_21945) : tiltontec.cell.core.dag_dump_1.call(null,G__21932_21944,G__21933_21945));


var G__21946 = cljs.core.next(seq__21922__$1);
var G__21947 = null;
var G__21948 = (0);
var G__21949 = (0);
seq__21922 = G__21946;
chunk__21923 = G__21947;
count__21924 = G__21948;
i__21925 = G__21949;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__21920);
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

var temp__5804__auto___21950 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___21950)){
var p_21951 = temp__5804__auto___21950;
(p_21951.cljs$core$IFn$_invoke$arity$2 ? p_21951.cljs$core$IFn$_invoke$arity$2(tag,c) : p_21951.call(null,tag,c));
} else {
}

var temp__5804__auto___21952 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___21952)){
var p_21953 = temp__5804__auto___21952;
(p_21953.cljs$core$IFn$_invoke$arity$1 ? p_21953.cljs$core$IFn$_invoke$arity$1(c) : p_21953.call(null,c));
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

var _STAR_dag_depth_STAR__orig_val__21954 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__21955 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__21955);

try{return tiltontec.cell.core.dag_dump_1(tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__21954);
}});
