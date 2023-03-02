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
var len__4736__auto___10686 = arguments.length;
var i__4737__auto___10687 = (0);
while(true){
if((i__4737__auto___10687 < len__4736__auto___10686)){
args__4742__auto__.push((arguments[i__4737__auto___10687]));

var G__10688 = (i__4737__auto___10687 + (1));
i__4737__auto___10687 = G__10688;
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
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq10684){
var G__10685 = cljs.core.first(seq10684);
var seq10684__$1 = cljs.core.next(seq10684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10685,seq10684__$1);
}));

var ret__4785__auto___10693 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10694 = arguments.length;
var i__4737__auto___10695 = (0);
while(true){
if((i__4737__auto___10695 < len__4736__auto___10694)){
args__4742__auto__.push((arguments[i__4737__auto___10695]));

var G__10696 = (i__4737__auto___10695 + (1));
i__4737__auto___10695 = G__10696;
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
(tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq10689){
var G__10690 = cljs.core.first(seq10689);
var seq10689__$1 = cljs.core.next(seq10689);
var G__10691 = cljs.core.first(seq10689__$1);
var seq10689__$2 = cljs.core.next(seq10689__$1);
var G__10692 = cljs.core.first(seq10689__$2);
var seq10689__$3 = cljs.core.next(seq10689__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10690,G__10691,G__10692,seq10689__$3);
}));

return null;
})()
;
(tiltontec.util.base.trx.cljs$lang$macro = true);

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__10697 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__10698 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__10698);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__10697);
}});
var ret__4785__auto___10707 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10708 = arguments.length;
var i__4737__auto___10709 = (0);
while(true){
if((i__4737__auto___10709 < len__4736__auto___10708)){
args__4742__auto__.push((arguments[i__4737__auto___10709]));

var G__10710 = (i__4737__auto___10709 + (1));
i__4737__auto___10709 = G__10710;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__10703,body){
var vec__10704 = p__10703;
var seq__10705 = cljs.core.seq(vec__10704);
var first__10706 = cljs.core.first(seq__10705);
var seq__10705__$1 = cljs.core.next(seq__10705);
var lo = first__10706;
var first__10706__$1 = cljs.core.first(seq__10705__$1);
var seq__10705__$2 = cljs.core.next(seq__10705__$1);
var hi = first__10706__$1;
var trxargs = seq__10705__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,lo,null,(1),null)),(new cljs.core.List(null,hi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_list,null,(1),null)),trxargs))),null,(1),null))], 0))));
}));

(tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq10699){
var G__10700 = cljs.core.first(seq10699);
var seq10699__$1 = cljs.core.next(seq10699);
var G__10701 = cljs.core.first(seq10699__$1);
var seq10699__$2 = cljs.core.next(seq10699__$1);
var G__10702 = cljs.core.first(seq10699__$2);
var seq10699__$3 = cljs.core.next(seq10699__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10700,G__10701,G__10702,seq10699__$3);
}));

return null;
})()
;
(tiltontec.util.base.wtrx.cljs$lang$macro = true);

var ret__4785__auto___10715 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10716 = arguments.length;
var i__4737__auto___10717 = (0);
while(true){
if((i__4737__auto___10717 < len__4736__auto___10716)){
args__4742__auto__.push((arguments[i__4737__auto___10717]));

var G__10718 = (i__4737__auto___10717 + (1));
i__4737__auto___10717 = G__10718;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__10711__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__10711__auto__,null,(1),null))], 0))));
}));

(tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq10712){
var G__10713 = cljs.core.first(seq10712);
var seq10712__$1 = cljs.core.next(seq10712);
var G__10714 = cljs.core.first(seq10712__$1);
var seq10712__$2 = cljs.core.next(seq10712__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10713,G__10714,seq10712__$2);
}));

return null;
})()
;
(tiltontec.util.base.prog1.cljs$lang$macro = true);

var ret__4785__auto___10724 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10725 = arguments.length;
var i__4737__auto___10726 = (0);
while(true){
if((i__4737__auto___10726 < len__4736__auto___10725)){
args__4742__auto__.push((arguments[i__4737__auto___10726]));

var G__10727 = (i__4737__auto___10726 + (1));
i__4737__auto___10726 = G__10727;
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
(tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq10719){
var G__10720 = cljs.core.first(seq10719);
var seq10719__$1 = cljs.core.next(seq10719);
var G__10721 = cljs.core.first(seq10719__$1);
var seq10719__$2 = cljs.core.next(seq10719__$1);
var G__10722 = cljs.core.first(seq10719__$2);
var seq10719__$3 = cljs.core.next(seq10719__$2);
var G__10723 = cljs.core.first(seq10719__$3);
var seq10719__$4 = cljs.core.next(seq10719__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10720,G__10721,G__10722,G__10723,seq10719__$4);
}));

return null;
})()
;
(tiltontec.util.base.b_when.cljs$lang$macro = true);

var ret__4785__auto___10732 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10733 = arguments.length;
var i__4737__auto___10734 = (0);
while(true){
if((i__4737__auto___10734 < len__4736__auto___10733)){
args__4742__auto__.push((arguments[i__4737__auto___10734]));

var G__10735 = (i__4737__auto___10734 + (1));
i__4737__auto___10734 = G__10735;
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
(tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq10728){
var G__10729 = cljs.core.first(seq10728);
var seq10728__$1 = cljs.core.next(seq10728);
var G__10730 = cljs.core.first(seq10728__$1);
var seq10728__$2 = cljs.core.next(seq10728__$1);
var G__10731 = cljs.core.first(seq10728__$2);
var seq10728__$3 = cljs.core.next(seq10728__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10729,G__10730,G__10731,seq10728__$3);
}));

return null;
})()
;
(tiltontec.util.base.unless.cljs$lang$macro = true);

var ret__4785__auto___10740 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10741 = arguments.length;
var i__4737__auto___10742 = (0);
while(true){
if((i__4737__auto___10742 < len__4736__auto___10741)){
args__4742__auto__.push((arguments[i__4737__auto___10742]));

var G__10743 = (i__4737__auto___10742 + (1));
i__4737__auto___10742 = G__10743;
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
(tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq10736){
var G__10737 = cljs.core.first(seq10736);
var seq10736__$1 = cljs.core.next(seq10736);
var G__10738 = cljs.core.first(seq10736__$1);
var seq10736__$2 = cljs.core.next(seq10736__$1);
var G__10739 = cljs.core.first(seq10736__$2);
var seq10736__$3 = cljs.core.next(seq10736__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10737,G__10738,G__10739,seq10736__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true);

var ret__4785__auto___10748 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10749 = arguments.length;
var i__4737__auto___10750 = (0);
while(true){
if((i__4737__auto___10750 < len__4736__auto___10749)){
args__4742__auto__.push((arguments[i__4737__auto___10750]));

var G__10751 = (i__4737__auto___10750 + (1));
i__4737__auto___10750 = G__10751;
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
(tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq10744){
var G__10745 = cljs.core.first(seq10744);
var seq10744__$1 = cljs.core.next(seq10744);
var G__10746 = cljs.core.first(seq10744__$1);
var seq10744__$2 = cljs.core.next(seq10744__$1);
var G__10747 = cljs.core.first(seq10744__$2);
var seq10744__$3 = cljs.core.next(seq10744__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10745,G__10746,G__10747,seq10744__$3);
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
