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
tiltontec.util.base._PLUS_mx_sid_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
tiltontec.util.base.mx_sid_next = (function tiltontec$util$base$mx_sid_next(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base._PLUS_mx_sid_PLUS_,cljs.core.inc);
});
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10531 = arguments.length;
var i__4737__auto___10532 = (0);
while(true){
if((i__4737__auto___10532 < len__4736__auto___10531)){
args__4742__auto__.push((arguments[i__4737__auto___10532]));

var G__10533 = (i__4737__auto___10532 + (1));
i__4737__auto___10532 = G__10533;
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
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq10529){
var G__10530 = cljs.core.first(seq10529);
var seq10529__$1 = cljs.core.next(seq10529);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10530,seq10529__$1);
}));

var ret__4785__auto___10538 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10539 = arguments.length;
var i__4737__auto___10540 = (0);
while(true){
if((i__4737__auto___10540 < len__4736__auto___10539)){
args__4742__auto__.push((arguments[i__4737__auto___10540]));

var G__10541 = (i__4737__auto___10540 + (1));
i__4737__auto___10540 = G__10541;
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
(tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq10534){
var G__10535 = cljs.core.first(seq10534);
var seq10534__$1 = cljs.core.next(seq10534);
var G__10536 = cljs.core.first(seq10534__$1);
var seq10534__$2 = cljs.core.next(seq10534__$1);
var G__10537 = cljs.core.first(seq10534__$2);
var seq10534__$3 = cljs.core.next(seq10534__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10535,G__10536,G__10537,seq10534__$3);
}));

return null;
})()
;
(tiltontec.util.base.trx.cljs$lang$macro = true);

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__10542 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__10543 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__10543);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__10542);
}});
var ret__4785__auto___10552 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10553 = arguments.length;
var i__4737__auto___10554 = (0);
while(true){
if((i__4737__auto___10554 < len__4736__auto___10553)){
args__4742__auto__.push((arguments[i__4737__auto___10554]));

var G__10555 = (i__4737__auto___10554 + (1));
i__4737__auto___10554 = G__10555;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__10548,body){
var vec__10549 = p__10548;
var seq__10550 = cljs.core.seq(vec__10549);
var first__10551 = cljs.core.first(seq__10550);
var seq__10550__$1 = cljs.core.next(seq__10550);
var lo = first__10551;
var first__10551__$1 = cljs.core.first(seq__10550__$1);
var seq__10550__$2 = cljs.core.next(seq__10550__$1);
var hi = first__10551__$1;
var trxargs = seq__10550__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lo,null,(1),null)),(new cljs.core.List(null,hi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_list,null,(1),null)),trxargs))),null,(1),null))], 0))));
}));

(tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq10544){
var G__10545 = cljs.core.first(seq10544);
var seq10544__$1 = cljs.core.next(seq10544);
var G__10546 = cljs.core.first(seq10544__$1);
var seq10544__$2 = cljs.core.next(seq10544__$1);
var G__10547 = cljs.core.first(seq10544__$2);
var seq10544__$3 = cljs.core.next(seq10544__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10545,G__10546,G__10547,seq10544__$3);
}));

return null;
})()
;
(tiltontec.util.base.wtrx.cljs$lang$macro = true);

var ret__4785__auto___10560 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10561 = arguments.length;
var i__4737__auto___10562 = (0);
while(true){
if((i__4737__auto___10562 < len__4736__auto___10561)){
args__4742__auto__.push((arguments[i__4737__auto___10562]));

var G__10563 = (i__4737__auto___10562 + (1));
i__4737__auto___10562 = G__10563;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__10556__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__10556__auto__,null,(1),null))], 0))));
}));

(tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq10557){
var G__10558 = cljs.core.first(seq10557);
var seq10557__$1 = cljs.core.next(seq10557);
var G__10559 = cljs.core.first(seq10557__$1);
var seq10557__$2 = cljs.core.next(seq10557__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10558,G__10559,seq10557__$2);
}));

return null;
})()
;
(tiltontec.util.base.prog1.cljs$lang$macro = true);

var ret__4785__auto___10569 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10570 = arguments.length;
var i__4737__auto___10571 = (0);
while(true){
if((i__4737__auto___10571 < len__4736__auto___10570)){
args__4742__auto__.push((arguments[i__4737__auto___10571]));

var G__10572 = (i__4737__auto___10571 + (1));
i__4737__auto___10571 = G__10572;
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
(tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq10564){
var G__10565 = cljs.core.first(seq10564);
var seq10564__$1 = cljs.core.next(seq10564);
var G__10566 = cljs.core.first(seq10564__$1);
var seq10564__$2 = cljs.core.next(seq10564__$1);
var G__10567 = cljs.core.first(seq10564__$2);
var seq10564__$3 = cljs.core.next(seq10564__$2);
var G__10568 = cljs.core.first(seq10564__$3);
var seq10564__$4 = cljs.core.next(seq10564__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10565,G__10566,G__10567,G__10568,seq10564__$4);
}));

return null;
})()
;
(tiltontec.util.base.b_when.cljs$lang$macro = true);

var ret__4785__auto___10577 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10578 = arguments.length;
var i__4737__auto___10579 = (0);
while(true){
if((i__4737__auto___10579 < len__4736__auto___10578)){
args__4742__auto__.push((arguments[i__4737__auto___10579]));

var G__10580 = (i__4737__auto___10579 + (1));
i__4737__auto___10579 = G__10580;
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
(tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq10573){
var G__10574 = cljs.core.first(seq10573);
var seq10573__$1 = cljs.core.next(seq10573);
var G__10575 = cljs.core.first(seq10573__$1);
var seq10573__$2 = cljs.core.next(seq10573__$1);
var G__10576 = cljs.core.first(seq10573__$2);
var seq10573__$3 = cljs.core.next(seq10573__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10574,G__10575,G__10576,seq10573__$3);
}));

return null;
})()
;
(tiltontec.util.base.unless.cljs$lang$macro = true);

var ret__4785__auto___10585 = (function (){
tiltontec.util.base.def_rmap_props = (function tiltontec$util$base$def_rmap_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10586 = arguments.length;
var i__4737__auto___10587 = (0);
while(true){
if((i__4737__auto___10587 < len__4736__auto___10586)){
args__4742__auto__.push((arguments[i__4737__auto___10587]));

var G__10588 = (i__4737__auto___10587 + (1));
i__4737__auto___10587 = G__10588;
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
(tiltontec.util.base.def_rmap_props.cljs$lang$applyTo = (function (seq10581){
var G__10582 = cljs.core.first(seq10581);
var seq10581__$1 = cljs.core.next(seq10581);
var G__10583 = cljs.core.first(seq10581__$1);
var seq10581__$2 = cljs.core.next(seq10581__$1);
var G__10584 = cljs.core.first(seq10581__$2);
var seq10581__$3 = cljs.core.next(seq10581__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10582,G__10583,G__10584,seq10581__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_props.cljs$lang$macro = true);

var ret__4785__auto___10593 = (function (){
tiltontec.util.base.def_rmap_meta_props = (function tiltontec$util$base$def_rmap_meta_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10594 = arguments.length;
var i__4737__auto___10595 = (0);
while(true){
if((i__4737__auto___10595 < len__4736__auto___10594)){
args__4742__auto__.push((arguments[i__4737__auto___10595]));

var G__10596 = (i__4737__auto___10595 + (1));
i__4737__auto___10595 = G__10596;
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
(tiltontec.util.base.def_rmap_meta_props.cljs$lang$applyTo = (function (seq10589){
var G__10590 = cljs.core.first(seq10589);
var seq10589__$1 = cljs.core.next(seq10589);
var G__10591 = cljs.core.first(seq10589__$1);
var seq10589__$2 = cljs.core.next(seq10589__$1);
var G__10592 = cljs.core.first(seq10589__$2);
var seq10589__$3 = cljs.core.next(seq10589__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10590,G__10591,G__10592,seq10589__$3);
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
