// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16329 = arguments.length;
var i__4737__auto___16330 = (0);
while(true){
if((i__4737__auto___16330 < len__4736__auto___16329)){
args__4742__auto__.push((arguments[i__4737__auto___16330]));

var G__16331 = (i__4737__auto___16330 + (1));
i__4737__auto___16330 = G__16331;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(cljs.core.truth_(tiltontec.util.base._STAR_trx_QMARK__STAR_)){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,tiltontec.util.base.call_trc$(s,os)], 0));
} else {
return null;
}
} else {
return null;
}
}));

(tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq16327){
var G__16328 = cljs.core.first(seq16327);
var seq16327__$1 = cljs.core.next(seq16327);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16328,seq16327__$1);
}));

var ret__4785__auto___16336 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16337 = arguments.length;
var i__4737__auto___16338 = (0);
while(true){
if((i__4737__auto___16338 < len__4736__auto___16337)){
args__4742__auto__.push((arguments[i__4737__auto___16338]));

var G__16339 = (i__4737__auto___16338 + (1));
i__4737__auto___16338 = G__16339;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_trc,null,(1),null)),(new cljs.core.List(null,(((!((label == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(label):null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0))));
}));

(tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq16332){
var G__16333 = cljs.core.first(seq16332);
var seq16332__$1 = cljs.core.next(seq16332);
var G__16334 = cljs.core.first(seq16332__$1);
var seq16332__$2 = cljs.core.next(seq16332__$1);
var G__16335 = cljs.core.first(seq16332__$2);
var seq16332__$3 = cljs.core.next(seq16332__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16333,G__16334,G__16335,seq16332__$3);
}));

return null;
})()
;
(tiltontec.util.base.trx.cljs$lang$macro = true);

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__16340 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__16341 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__16341);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__16340);
}});
var ret__4785__auto___16350 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16351 = arguments.length;
var i__4737__auto___16352 = (0);
while(true){
if((i__4737__auto___16352 < len__4736__auto___16351)){
args__4742__auto__.push((arguments[i__4737__auto___16352]));

var G__16353 = (i__4737__auto___16352 + (1));
i__4737__auto___16352 = G__16353;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16346,body){
var vec__16347 = p__16346;
var seq__16348 = cljs.core.seq(vec__16347);
var first__16349 = cljs.core.first(seq__16348);
var seq__16348__$1 = cljs.core.next(seq__16348);
var lo = first__16349;
var first__16349__$1 = cljs.core.first(seq__16348__$1);
var seq__16348__$2 = cljs.core.next(seq__16348__$1);
var hi = first__16349__$1;
var trxargs = seq__16348__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lo,null,(1),null)),(new cljs.core.List(null,hi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_list,null,(1),null)),trxargs))),null,(1),null))], 0))));
}));

(tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq16342){
var G__16343 = cljs.core.first(seq16342);
var seq16342__$1 = cljs.core.next(seq16342);
var G__16344 = cljs.core.first(seq16342__$1);
var seq16342__$2 = cljs.core.next(seq16342__$1);
var G__16345 = cljs.core.first(seq16342__$2);
var seq16342__$3 = cljs.core.next(seq16342__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16343,G__16344,G__16345,seq16342__$3);
}));

return null;
})()
;
(tiltontec.util.base.wtrx.cljs$lang$macro = true);

var ret__4785__auto___16358 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16359 = arguments.length;
var i__4737__auto___16360 = (0);
while(true){
if((i__4737__auto___16360 < len__4736__auto___16359)){
args__4742__auto__.push((arguments[i__4737__auto___16360]));

var G__16361 = (i__4737__auto___16360 + (1));
i__4737__auto___16360 = G__16361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__16354__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__16354__auto__,null,(1),null))], 0))));
}));

(tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq16355){
var G__16356 = cljs.core.first(seq16355);
var seq16355__$1 = cljs.core.next(seq16355);
var G__16357 = cljs.core.first(seq16355__$1);
var seq16355__$2 = cljs.core.next(seq16355__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16356,G__16357,seq16355__$2);
}));

return null;
})()
;
(tiltontec.util.base.prog1.cljs$lang$macro = true);

var ret__4785__auto___16367 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16368 = arguments.length;
var i__4737__auto___16369 = (0);
while(true){
if((i__4737__auto___16369 < len__4736__auto___16368)){
args__4742__auto__.push((arguments[i__4737__auto___16369]));

var G__16370 = (i__4737__auto___16369 + (1));
i__4737__auto___16369 = G__16370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq16362){
var G__16363 = cljs.core.first(seq16362);
var seq16362__$1 = cljs.core.next(seq16362);
var G__16364 = cljs.core.first(seq16362__$1);
var seq16362__$2 = cljs.core.next(seq16362__$1);
var G__16365 = cljs.core.first(seq16362__$2);
var seq16362__$3 = cljs.core.next(seq16362__$2);
var G__16366 = cljs.core.first(seq16362__$3);
var seq16362__$4 = cljs.core.next(seq16362__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16363,G__16364,G__16365,G__16366,seq16362__$4);
}));

return null;
})()
;
(tiltontec.util.base.b_when.cljs$lang$macro = true);

var ret__4785__auto___16375 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16376 = arguments.length;
var i__4737__auto___16377 = (0);
while(true){
if((i__4737__auto___16377 < len__4736__auto___16376)){
args__4742__auto__.push((arguments[i__4737__auto___16377]));

var G__16378 = (i__4737__auto___16377 + (1));
i__4737__auto___16377 = G__16378;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq16371){
var G__16372 = cljs.core.first(seq16371);
var seq16371__$1 = cljs.core.next(seq16371);
var G__16373 = cljs.core.first(seq16371__$1);
var seq16371__$2 = cljs.core.next(seq16371__$1);
var G__16374 = cljs.core.first(seq16371__$2);
var seq16371__$3 = cljs.core.next(seq16371__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16372,G__16373,G__16374,seq16371__$3);
}));

return null;
})()
;
(tiltontec.util.base.unless.cljs$lang$macro = true);

var ret__4785__auto___16383 = (function (){
tiltontec.util.base.def_rmap_props = (function tiltontec$util$base$def_rmap_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16384 = arguments.length;
var i__4737__auto___16385 = (0);
while(true){
if((i__4737__auto___16385 < len__4736__auto___16384)){
args__4742__auto__.push((arguments[i__4737__auto___16385]));

var G__16386 = (i__4737__auto___16385 + (1));
i__4737__auto___16385 = G__16386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_props.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}),props))));
}));

(tiltontec.util.base.def_rmap_props.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_props.cljs$lang$applyTo = (function (seq16379){
var G__16380 = cljs.core.first(seq16379);
var seq16379__$1 = cljs.core.next(seq16379);
var G__16381 = cljs.core.first(seq16379__$1);
var seq16379__$2 = cljs.core.next(seq16379__$1);
var G__16382 = cljs.core.first(seq16379__$2);
var seq16379__$3 = cljs.core.next(seq16379__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16380,G__16381,G__16382,seq16379__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_props.cljs$lang$macro = true);

var ret__4785__auto___16391 = (function (){
tiltontec.util.base.def_rmap_meta_props = (function tiltontec$util$base$def_rmap_meta_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16392 = arguments.length;
var i__4737__auto___16393 = (0);
while(true){
if((i__4737__auto___16393 < len__4736__auto___16392)){
args__4742__auto__.push((arguments[i__4737__auto___16393]));

var G__16394 = (i__4737__auto___16393 + (1));
i__4737__auto___16393 = G__16394;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_meta_props.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prop_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}),props))));
}));

(tiltontec.util.base.def_rmap_meta_props.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_meta_props.cljs$lang$applyTo = (function (seq16387){
var G__16388 = cljs.core.first(seq16387);
var seq16387__$1 = cljs.core.next(seq16387);
var G__16389 = cljs.core.first(seq16387__$1);
var seq16387__$2 = cljs.core.next(seq16387__$1);
var G__16390 = cljs.core.first(seq16387__$2);
var seq16387__$3 = cljs.core.next(seq16387__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16388,G__16389,G__16390,seq16387__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_meta_props.cljs$lang$macro = true);

tiltontec.util.base.mx_type = (function tiltontec$util$base$mx_type(it){
var or__4126__auto__ = (function (){var temp__5804__auto__ = cljs.core.meta(it);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.cst$kw$mx_DASH_type.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(it);
}
});
tiltontec.util.base.mx_type_QMARK_ = (function tiltontec$util$base$mx_type_QMARK_(it,type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.mx_type(it),type);
});
