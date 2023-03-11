// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
var ret__4785__auto___14288 = (function (){
tiltontec.model.macros.pme = (function tiltontec$model$macros$pme(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14289 = arguments.length;
var i__4737__auto___14290 = (0);
while(true){
if((i__4737__auto___14290 < len__4736__auto___14289)){
args__4742__auto__.push((arguments[i__4737__auto___14290]));

var G__14291 = (i__4737__auto___14290 + (1));
i__4737__auto___14290 = G__14291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.macros.pme.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mas){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_println,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_mx_DASH_type,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$tag,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$me,null,(1),null))))),null,(1),null))))),null,(1),null)),mas], 0)))),null,(1),null))], 0))));
}));

(tiltontec.model.macros.pme.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.macros.pme.cljs$lang$applyTo = (function (seq14285){
var G__14286 = cljs.core.first(seq14285);
var seq14285__$1 = cljs.core.next(seq14285);
var G__14287 = cljs.core.first(seq14285__$1);
var seq14285__$2 = cljs.core.next(seq14285__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14286,G__14287,seq14285__$2);
}));

return null;
})()
;
(tiltontec.model.macros.pme.cljs$lang$macro = true);

