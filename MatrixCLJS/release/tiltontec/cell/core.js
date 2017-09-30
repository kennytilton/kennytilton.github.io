// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14215 = arguments.length;
var i__7766__auto___14216 = (0);
while(true){
if((i__7766__auto___14216 < len__7765__auto___14215)){
args__7772__auto__.push((arguments[i__7766__auto___14216]));

var G__14217 = (i__7766__auto___14216 + (1));
i__7766__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$state,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$pulse,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.cst$kw$nascent,(0),false,(0),(0),true]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell], null)], 0));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq14214){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14214));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14219 = arguments.length;
var i__7766__auto___14220 = (0);
while(true){
if((i__7766__auto___14220 < len__7765__auto___14219)){
args__7772__auto__.push((arguments[i__7766__auto___14220]));

var G__14221 = (i__7766__auto___14220 + (1));
i__7766__auto___14220 = G__14221;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
var rule = cljs.core.cst$kw$rule.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_(rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$callers,cljs.core.cst$kw$value,cljs.core.cst$kw$ephemeral_QMARK_,cljs.core.cst$kw$state,cljs.core.cst$kw$pulse_DASH_observed,cljs.core.cst$kw$lazy,cljs.core.cst$kw$pulse_DASH_last_DASH_changed,cljs.core.cst$kw$pulse,cljs.core.cst$kw$useds,cljs.core.cst$kw$optimize,cljs.core.cst$kw$input_QMARK_],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.cst$kw$nascent,(0),false,(0),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula], null)], 0));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq14218){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14218));
});

var ret__7805__auto___14230 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14231 = arguments.length;
var i__7766__auto___14232 = (0);
while(true){
if((i__7766__auto___14232 < len__7765__auto___14231)){
args__7772__auto__.push((arguments[i__7766__auto___14232]));

var G__14233 = (i__7766__auto___14232 + (1));
i__7766__auto___14232 = G__14233;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14226,body){
var vec__14227 = p__14226;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7483__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_model),(function (){var x__7483__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cache),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_value),(function (){var x__7483__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq14222){
var G__14223 = cljs.core.first(seq14222);
var seq14222__$1 = cljs.core.next(seq14222);
var G__14224 = cljs.core.first(seq14222__$1);
var seq14222__$2 = cljs.core.next(seq14222__$1);
var G__14225 = cljs.core.first(seq14222__$2);
var seq14222__$3 = cljs.core.next(seq14222__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__14223,G__14224,G__14225,seq14222__$3);
});

return null;
})()
;
tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;

var ret__7805__auto___14237 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14238 = arguments.length;
var i__7766__auto___14239 = (0);
while(true){
if((i__7766__auto___14239 < len__7765__auto___14238)){
args__7772__auto__.push((arguments[i__7766__auto___14239]));

var G__14240 = (i__7766__auto___14239 + (1));
i__7766__auto___14239 = G__14240;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn_DASH_var),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$slot_DASH_c_SHARP_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq14234){
var G__14235 = cljs.core.first(seq14234);
var seq14234__$1 = cljs.core.next(seq14234);
var G__14236 = cljs.core.first(seq14234__$1);
var seq14234__$2 = cljs.core.next(seq14234__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__14235,G__14236,seq14234__$2);
});

return null;
})()
;
tiltontec.cell.core.c_fn.cljs$lang$macro = true;

var ret__7805__auto___14244 = (function (){
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14245 = arguments.length;
var i__7766__auto___14246 = (0);
while(true){
if((i__7766__auto___14246 < len__7765__auto___14245)){
args__7772__auto__.push((arguments[i__7766__auto___14246]));

var G__14247 = (i__7766__auto___14246 + (1));
i__7766__auto___14246 = G__14247;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq14241){
var G__14242 = cljs.core.first(seq14241);
var seq14241__$1 = cljs.core.next(seq14241);
var G__14243 = cljs.core.first(seq14241__$1);
var seq14241__$2 = cljs.core.next(seq14241__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14242,G__14243,seq14241__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;

var ret__7805__auto___14256 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14257 = arguments.length;
var i__7766__auto___14258 = (0);
while(true){
if((i__7766__auto___14258 < len__7765__auto___14257)){
args__7772__auto__.push((arguments[i__7766__auto___14258]));

var G__14259 = (i__7766__auto___14258 + (1));
i__7766__auto___14258 = G__14259;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14252,body){
var vec__14253 = p__14252;
var seq__14254 = cljs.core.seq(vec__14253);
var options = seq__14254;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq14248){
var G__14249 = cljs.core.first(seq14248);
var seq14248__$1 = cljs.core.next(seq14248);
var G__14250 = cljs.core.first(seq14248__$1);
var seq14248__$2 = cljs.core.next(seq14248__$1);
var G__14251 = cljs.core.first(seq14248__$2);
var seq14248__$3 = cljs.core.next(seq14248__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__14249,G__14250,G__14251,seq14248__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;

var ret__7805__auto___14263 = (function (){
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14264 = arguments.length;
var i__7766__auto___14265 = (0);
while(true){
if((i__7766__auto___14265 < len__7765__auto___14264)){
args__7772__auto__.push((arguments[i__7766__auto___14265]));

var G__14266 = (i__7766__auto___14265 + (1));
i__7766__auto___14265 = G__14266;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq14260){
var G__14261 = cljs.core.first(seq14260);
var seq14260__$1 = cljs.core.next(seq14260);
var G__14262 = cljs.core.first(seq14260__$1);
var seq14260__$2 = cljs.core.next(seq14260__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__14261,G__14262,seq14260__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;

var ret__7805__auto___14275 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14276 = arguments.length;
var i__7766__auto___14277 = (0);
while(true){
if((i__7766__auto___14277 < len__7765__auto___14276)){
args__7772__auto__.push((arguments[i__7766__auto___14277]));

var G__14278 = (i__7766__auto___14277 + (1));
i__7766__auto___14277 = G__14278;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14271,body){
var vec__14272 = p__14271;
var seq__14273 = cljs.core.seq(vec__14272);
var options = seq__14273;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq14267){
var G__14268 = cljs.core.first(seq14267);
var seq14267__$1 = cljs.core.next(seq14267);
var G__14269 = cljs.core.first(seq14267__$1);
var seq14267__$2 = cljs.core.next(seq14267__$1);
var G__14270 = cljs.core.first(seq14267__$2);
var seq14267__$3 = cljs.core.next(seq14267__$2);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__14268,G__14269,G__14270,seq14267__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;

var ret__7805__auto___14282 = (function (){
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14283 = arguments.length;
var i__7766__auto___14284 = (0);
while(true){
if((i__7766__auto___14284 < len__7765__auto___14283)){
args__7772__auto__.push((arguments[i__7766__auto___14284]));

var G__14285 = (i__7766__auto___14284 + (1));
i__7766__auto___14284 = G__14285;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq14279){
var G__14280 = cljs.core.first(seq14279);
var seq14279__$1 = cljs.core.next(seq14279);
var G__14281 = cljs.core.first(seq14279__$1);
var seq14279__$2 = cljs.core.next(seq14279__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__14280,G__14281,seq14279__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;

var ret__7805__auto___14289 = (function (){
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14290 = arguments.length;
var i__7766__auto___14291 = (0);
while(true){
if((i__7766__auto___14291 < len__7765__auto___14290)){
args__7772__auto__.push((arguments[i__7766__auto___14291]));

var G__14292 = (i__7766__auto___14291 + (1));
i__7766__auto___14291 = G__14292;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq14286){
var G__14287 = cljs.core.first(seq14286);
var seq14286__$1 = cljs.core.next(seq14286);
var G__14288 = cljs.core.first(seq14286__$1);
var seq14286__$2 = cljs.core.next(seq14286__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__14287,G__14288,seq14286__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;

var ret__7805__auto___14297 = (function (){
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14298 = arguments.length;
var i__7766__auto___14299 = (0);
while(true){
if((i__7766__auto___14299 < len__7765__auto___14298)){
args__7772__auto__.push((arguments[i__7766__auto___14299]));

var G__14300 = (i__7766__auto___14299 + (1));
i__7766__auto___14299 = G__14300;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$optimize),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$when_DASH_value_DASH_t),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),args], 0))));
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq14293){
var G__14294 = cljs.core.first(seq14293);
var seq14293__$1 = cljs.core.next(seq14293);
var G__14295 = cljs.core.first(seq14293__$1);
var seq14293__$2 = cljs.core.next(seq14293__$1);
var G__14296 = cljs.core.first(seq14293__$2);
var seq14293__$3 = cljs.core.next(seq14293__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__14294,G__14295,G__14296,seq14293__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;

var ret__7805__auto___14304 = (function (){
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14305 = arguments.length;
var i__7766__auto___14306 = (0);
while(true){
if((i__7766__auto___14306 < len__7765__auto___14305)){
args__7772__auto__.push((arguments[i__7766__auto___14306]));

var G__14307 = (i__7766__auto___14306 + (1));
i__7766__auto___14306 = G__14307;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq14301){
var G__14302 = cljs.core.first(seq14301);
var seq14301__$1 = cljs.core.next(seq14301);
var G__14303 = cljs.core.first(seq14301__$1);
var seq14301__$2 = cljs.core.next(seq14301__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__14302,G__14303,seq14301__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;

var ret__7805__auto___14311 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14312 = arguments.length;
var i__7766__auto___14313 = (0);
while(true){
if((i__7766__auto___14313 < len__7765__auto___14312)){
args__7772__auto__.push((arguments[i__7766__auto___14313]));

var G__14314 = (i__7766__auto___14313 + (1));
i__7766__auto___14313 = G__14314;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_without_DASH_c_DASH_dependency),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq14308){
var G__14309 = cljs.core.first(seq14308);
var seq14308__$1 = cljs.core.next(seq14308);
var G__14310 = cljs.core.first(seq14308__$1);
var seq14308__$2 = cljs.core.next(seq14308__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__14309,G__14310,seq14308__$2);
});

return null;
})()
;
tiltontec.cell.core.c_1.cljs$lang$macro = true;

var ret__7805__auto___14318 = (function (){
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14319 = arguments.length;
var i__7766__auto___14320 = (0);
while(true){
if((i__7766__auto___14320 < len__7765__auto___14319)){
args__7772__auto__.push((arguments[i__7766__auto___14320]));

var G__14321 = (i__7766__auto___14320 + (1));
i__7766__auto___14320 = G__14321;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_QMARK_once),body)));
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq14315){
var G__14316 = cljs.core.first(seq14315);
var seq14315__$1 = cljs.core.next(seq14315);
var G__14317 = cljs.core.first(seq14315__$1);
var seq14315__$2 = cljs.core.next(seq14315__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__14316,G__14317,seq14315__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;

var ret__7805__auto___14325 = (function (){
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14326 = arguments.length;
var i__7766__auto___14327 = (0);
while(true){
if((i__7766__auto___14327 < len__7765__auto___14326)){
args__7772__auto__.push((arguments[i__7766__auto___14327]));

var G__14328 = (i__7766__auto___14327 + (1));
i__7766__auto___14327 = G__14328;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq14322){
var G__14323 = cljs.core.first(seq14322);
var seq14322__$1 = cljs.core.next(seq14322);
var G__14324 = cljs.core.first(seq14322__$1);
var seq14322__$2 = cljs.core.next(seq14322__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__14323,G__14324,seq14322__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;

var ret__7805__auto___14337 = (function (){
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14338 = arguments.length;
var i__7766__auto___14339 = (0);
while(true){
if((i__7766__auto___14339 < len__7765__auto___14338)){
args__7772__auto__.push((arguments[i__7766__auto___14339]));

var G__14340 = (i__7766__auto___14339 + (1));
i__7766__auto___14339 = G__14340;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14333,body){
var vec__14334 = p__14333;
var seq__14335 = cljs.core.seq(vec__14334);
var options = seq__14335;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq14329){
var G__14330 = cljs.core.first(seq14329);
var seq14329__$1 = cljs.core.next(seq14329);
var G__14331 = cljs.core.first(seq14329__$1);
var seq14329__$2 = cljs.core.next(seq14329__$1);
var G__14332 = cljs.core.first(seq14329__$2);
var seq14329__$3 = cljs.core.next(seq14329__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__14330,G__14331,G__14332,seq14329__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;

var ret__7805__auto___14349 = (function (){
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14350 = arguments.length;
var i__7766__auto___14351 = (0);
while(true){
if((i__7766__auto___14351 < len__7765__auto___14350)){
args__7772__auto__.push((arguments[i__7766__auto___14351]));

var G__14352 = (i__7766__auto___14351 + (1));
i__7766__auto___14351 = G__14352;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14345,body){
var vec__14346 = p__14345;
var seq__14347 = cljs.core.seq(vec__14346);
var options = seq__14347;

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq14341){
var G__14342 = cljs.core.first(seq14341);
var seq14341__$1 = cljs.core.next(seq14341);
var G__14343 = cljs.core.first(seq14341__$1);
var seq14341__$2 = cljs.core.next(seq14341__$1);
var G__14344 = cljs.core.first(seq14341__$2);
var seq14341__$3 = cljs.core.next(seq14341__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14342,G__14343,G__14344,seq14341__$3);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;

var ret__7805__auto___14356 = (function (){
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14357 = arguments.length;
var i__7766__auto___14358 = (0);
while(true){
if((i__7766__auto___14358 < len__7765__auto___14357)){
args__7772__auto__.push((arguments[i__7766__auto___14358]));

var G__14359 = (i__7766__auto___14358 + (1));
i__7766__auto___14358 = G__14359;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lazy),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$until_DASH_asked),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$debug),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq14353){
var G__14354 = cljs.core.first(seq14353);
var seq14353__$1 = cljs.core.next(seq14353);
var G__14355 = cljs.core.first(seq14353__$1);
var seq14353__$2 = cljs.core.next(seq14353__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__14354,G__14355,seq14353__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;

var ret__7805__auto___14368 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14369 = arguments.length;
var i__7766__auto___14370 = (0);
while(true){
if((i__7766__auto___14370 < len__7765__auto___14369)){
args__7772__auto__.push((arguments[i__7766__auto___14370]));

var G__14371 = (i__7766__auto___14370 + (1));
i__7766__auto___14370 = G__14371;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14364,body){
var vec__14365 = p__14364;
var seq__14366 = cljs.core.seq(vec__14365);
var kvs = seq__14366;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_make_DASH_c_DASH_formula),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = body;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$value),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_unbound),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$rule),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_c_DASH_fn),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.keys], 0))));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq14360){
var G__14361 = cljs.core.first(seq14360);
var seq14360__$1 = cljs.core.next(seq14360);
var G__14362 = cljs.core.first(seq14360__$1);
var seq14360__$2 = cljs.core.next(seq14360__$1);
var G__14363 = cljs.core.first(seq14360__$2);
var seq14360__$3 = cljs.core.next(seq14360__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__14361,G__14362,G__14363,seq14360__$3);
});

return null;
})()
;
tiltontec.cell.core.c_formula.cljs$lang$macro = true;

tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14374 = arguments.length;
var i__7766__auto___14375 = (0);
while(true){
if((i__7766__auto___14375 < len__7765__auto___14374)){
args__7772__auto__.push((arguments[i__7766__auto___14375]));

var G__14376 = (i__7766__auto___14375 + (1));
i__7766__auto___14375 = G__14376;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((1) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.core.make_cell,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$value,value,cljs.core.cst$kw$input_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_kvs], 0)));
});

tiltontec.cell.core.c_in.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq14372){
var G__14373 = cljs.core.first(seq14372);
var seq14372__$1 = cljs.core.next(seq14372);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__14373,seq14372__$1);
});

tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(tiltontec.cell.base._STAR_defer_changes_STAR_){
throw (new Error("c-reset!> change to %s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot(c)));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,tiltontec.cell.base.c_slot(c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
}));

}
}
});
var ret__7805__auto___14379 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH__STAR_within_DASH_integrity_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH_c_DASH_slot),(function (){var x__7483__auto__ = f_c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_ufb_DASH_add),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$change),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$c_DASH_reset_DASH_next_BANG_),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opcode),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defer_DASH_info)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__14377__auto__),(function (){var x__7483__auto__ = f_c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_value__14378__auto__),(function (){var x__7483__auto__ = f_new_value;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$core_SLASH_call_DASH_c_DASH_reset_DASH_next_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__14377__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new_DASH_value__14378__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});
tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null)))){
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume(c,new_value,null);

}
});
