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
var len__4736__auto___16467 = arguments.length;
var i__4737__auto___16468 = (0);
while(true){
if((i__4737__auto___16468 < len__4736__auto___16467)){
args__4742__auto__.push((arguments[i__4737__auto___16468]));

var G__16469 = (i__4737__auto___16468 + (1));
i__4737__auto___16468 = G__16469;
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
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq16465){
var G__16466 = cljs.core.first(seq16465);
var seq16465__$1 = cljs.core.next(seq16465);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16466,seq16465__$1);
}));

var ret__4785__auto___16474 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16475 = arguments.length;
var i__4737__auto___16476 = (0);
while(true){
if((i__4737__auto___16476 < len__4736__auto___16475)){
args__4742__auto__.push((arguments[i__4737__auto___16476]));

var G__16477 = (i__4737__auto___16476 + (1));
i__4737__auto___16476 = G__16477;
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
(tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq16470){
var G__16471 = cljs.core.first(seq16470);
var seq16470__$1 = cljs.core.next(seq16470);
var G__16472 = cljs.core.first(seq16470__$1);
var seq16470__$2 = cljs.core.next(seq16470__$1);
var G__16473 = cljs.core.first(seq16470__$2);
var seq16470__$3 = cljs.core.next(seq16470__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16471,G__16472,G__16473,seq16470__$3);
}));

return null;
})()
;
(tiltontec.util.base.trx.cljs$lang$macro = true);

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__16478 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__16479 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__16479);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__16478);
}});
var ret__4785__auto___16488 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16489 = arguments.length;
var i__4737__auto___16490 = (0);
while(true){
if((i__4737__auto___16490 < len__4736__auto___16489)){
args__4742__auto__.push((arguments[i__4737__auto___16490]));

var G__16491 = (i__4737__auto___16490 + (1));
i__4737__auto___16490 = G__16491;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__16484,body){
var vec__16485 = p__16484;
var seq__16486 = cljs.core.seq(vec__16485);
var first__16487 = cljs.core.first(seq__16486);
var seq__16486__$1 = cljs.core.next(seq__16486);
var lo = first__16487;
var first__16487__$1 = cljs.core.first(seq__16486__$1);
var seq__16486__$2 = cljs.core.next(seq__16486__$1);
var hi = first__16487__$1;
var trxargs = seq__16486__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lo,null,(1),null)),(new cljs.core.List(null,hi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_list,null,(1),null)),trxargs))),null,(1),null))], 0))));
}));

(tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq16480){
var G__16481 = cljs.core.first(seq16480);
var seq16480__$1 = cljs.core.next(seq16480);
var G__16482 = cljs.core.first(seq16480__$1);
var seq16480__$2 = cljs.core.next(seq16480__$1);
var G__16483 = cljs.core.first(seq16480__$2);
var seq16480__$3 = cljs.core.next(seq16480__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16481,G__16482,G__16483,seq16480__$3);
}));

return null;
})()
;
(tiltontec.util.base.wtrx.cljs$lang$macro = true);

var ret__4785__auto___16496 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16497 = arguments.length;
var i__4737__auto___16498 = (0);
while(true){
if((i__4737__auto___16498 < len__4736__auto___16497)){
args__4742__auto__.push((arguments[i__4737__auto___16498]));

var G__16499 = (i__4737__auto___16498 + (1));
i__4737__auto___16498 = G__16499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__16492__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__16492__auto__,null,(1),null))], 0))));
}));

(tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq16493){
var G__16494 = cljs.core.first(seq16493);
var seq16493__$1 = cljs.core.next(seq16493);
var G__16495 = cljs.core.first(seq16493__$1);
var seq16493__$2 = cljs.core.next(seq16493__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16494,G__16495,seq16493__$2);
}));

return null;
})()
;
(tiltontec.util.base.prog1.cljs$lang$macro = true);

var ret__4785__auto___16505 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16506 = arguments.length;
var i__4737__auto___16507 = (0);
while(true){
if((i__4737__auto___16507 < len__4736__auto___16506)){
args__4742__auto__.push((arguments[i__4737__auto___16507]));

var G__16508 = (i__4737__auto___16507 + (1));
i__4737__auto___16507 = G__16508;
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
(tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq16500){
var G__16501 = cljs.core.first(seq16500);
var seq16500__$1 = cljs.core.next(seq16500);
var G__16502 = cljs.core.first(seq16500__$1);
var seq16500__$2 = cljs.core.next(seq16500__$1);
var G__16503 = cljs.core.first(seq16500__$2);
var seq16500__$3 = cljs.core.next(seq16500__$2);
var G__16504 = cljs.core.first(seq16500__$3);
var seq16500__$4 = cljs.core.next(seq16500__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16501,G__16502,G__16503,G__16504,seq16500__$4);
}));

return null;
})()
;
(tiltontec.util.base.b_when.cljs$lang$macro = true);

var ret__4785__auto___16513 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16514 = arguments.length;
var i__4737__auto___16515 = (0);
while(true){
if((i__4737__auto___16515 < len__4736__auto___16514)){
args__4742__auto__.push((arguments[i__4737__auto___16515]));

var G__16516 = (i__4737__auto___16515 + (1));
i__4737__auto___16515 = G__16516;
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
(tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq16509){
var G__16510 = cljs.core.first(seq16509);
var seq16509__$1 = cljs.core.next(seq16509);
var G__16511 = cljs.core.first(seq16509__$1);
var seq16509__$2 = cljs.core.next(seq16509__$1);
var G__16512 = cljs.core.first(seq16509__$2);
var seq16509__$3 = cljs.core.next(seq16509__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16510,G__16511,G__16512,seq16509__$3);
}));

return null;
})()
;
(tiltontec.util.base.unless.cljs$lang$macro = true);

var ret__4785__auto___16521 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16522 = arguments.length;
var i__4737__auto___16523 = (0);
while(true){
if((i__4737__auto___16523 < len__4736__auto___16522)){
args__4742__auto__.push((arguments[i__4737__auto___16523]));

var G__16524 = (i__4737__auto___16523 + (1));
i__4737__auto___16523 = G__16524;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_deref,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}),slots))));
}));

(tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq16517){
var G__16518 = cljs.core.first(seq16517);
var seq16517__$1 = cljs.core.next(seq16517);
var G__16519 = cljs.core.first(seq16517__$1);
var seq16517__$2 = cljs.core.next(seq16517__$1);
var G__16520 = cljs.core.first(seq16517__$2);
var seq16517__$3 = cljs.core.next(seq16517__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16518,G__16519,G__16520,seq16517__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true);

var ret__4785__auto___16529 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16530 = arguments.length;
var i__4737__auto___16531 = (0);
while(true){
if((i__4737__auto___16531 < len__4736__auto___16530)){
args__4742__auto__.push((arguments[i__4737__auto___16531]));

var G__16532 = (i__4737__auto___16531 + (1));
i__4737__auto___16531 = G__16532;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ref,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}),slots))));
}));

(tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq16525){
var G__16526 = cljs.core.first(seq16525);
var seq16525__$1 = cljs.core.next(seq16525);
var G__16527 = cljs.core.first(seq16525__$1);
var seq16525__$2 = cljs.core.next(seq16525__$1);
var G__16528 = cljs.core.first(seq16525__$2);
var seq16525__$3 = cljs.core.next(seq16525__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16526,G__16527,G__16528,seq16525__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true);

tiltontec.util.base.type_cljc = (function tiltontec$util$base$type_cljc(x){
var temp__5802__auto__ = cljs.core.meta(x);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$no_DASH_mx_DASH_type_DASH_in_DASH_meta);
} else {
return cljs.core.type(x);
}
});
