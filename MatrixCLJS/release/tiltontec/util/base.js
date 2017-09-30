// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11829 = arguments.length;
var i__7766__auto___11830 = (0);
while(true){
if((i__7766__auto___11830 < len__7765__auto___11829)){
args__7772__auto__.push((arguments[i__7766__auto___11830]));

var G__11831 = (i__7766__auto___11830 + (1));
i__7766__auto___11830 = G__11831;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((1) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7773__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(tiltontec.util.base._STAR_trx_QMARK__STAR_){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,tiltontec.util.base.call_trc$(s,os)], 0));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq11827){
var G__11828 = cljs.core.first(seq11827);
var seq11827__$1 = cljs.core.next(seq11827);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__11828,seq11827__$1);
});

var ret__7805__auto___11836 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11837 = arguments.length;
var i__7766__auto___11838 = (0);
while(true){
if((i__7766__auto___11838 < len__7765__auto___11837)){
args__7772__auto__.push((arguments[i__7766__auto___11838]));

var G__11839 = (i__7766__auto___11838 + (1));
i__7766__auto___11838 = G__11839;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_trc),(function (){var x__7483__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0))));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq11832){
var G__11833 = cljs.core.first(seq11832);
var seq11832__$1 = cljs.core.next(seq11832);
var G__11834 = cljs.core.first(seq11832__$1);
var seq11832__$2 = cljs.core.next(seq11832__$1);
var G__11835 = cljs.core.first(seq11832__$2);
var seq11832__$3 = cljs.core.next(seq11832__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__11833,G__11834,G__11835,seq11832__$3);
});

return null;
})()
;
tiltontec.util.base.trx.cljs$lang$macro = true;

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_11840 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.util.base.call_trc$,cljs.core.first(trxargs),cljs.core.rest(trxargs)))].join('')));
} else {
}
}

return (fn.cljs$core$IFn$_invoke$arity$0 ? fn.cljs$core$IFn$_invoke$arity$0() : fn.call(null));
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_11840;
}});
var ret__7805__auto___11849 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11850 = arguments.length;
var i__7766__auto___11851 = (0);
while(true){
if((i__7766__auto___11851 < len__7765__auto___11850)){
args__7772__auto__.push((arguments[i__7766__auto___11851]));

var G__11852 = (i__7766__auto___11851 + (1));
i__7766__auto___11851 = G__11852;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__11845,body){
var vec__11846 = p__11845;
var seq__11847 = cljs.core.seq(vec__11846);
var first__11848 = cljs.core.first(seq__11847);
var seq__11847__$1 = cljs.core.next(seq__11847);
var lo = first__11848;
var first__11848__$1 = cljs.core.first(seq__11847__$1);
var seq__11847__$2 = cljs.core.next(seq__11847__$1);
var hi = first__11848__$1;
var trxargs = seq__11847__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$util$base_SLASH_call_DASH_wtrx),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = lo;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = hi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),trxargs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq11841){
var G__11842 = cljs.core.first(seq11841);
var seq11841__$1 = cljs.core.next(seq11841);
var G__11843 = cljs.core.first(seq11841__$1);
var seq11841__$2 = cljs.core.next(seq11841__$1);
var G__11844 = cljs.core.first(seq11841__$2);
var seq11841__$3 = cljs.core.next(seq11841__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__11842,G__11843,G__11844,seq11841__$3);
});

return null;
})()
;
tiltontec.util.base.wtrx.cljs$lang$macro = true;

var ret__7805__auto___11857 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11858 = arguments.length;
var i__7766__auto___11859 = (0);
while(true){
if((i__7766__auto___11859 < len__7765__auto___11858)){
args__7772__auto__.push((arguments[i__7766__auto___11859]));

var G__11860 = (i__7766__auto___11859 + (1));
i__7766__auto___11859 = G__11860;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$result__11853__auto__),(function (){var x__7483__auto__ = cljs.core.first(body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$result__11853__auto__)], 0))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq11854){
var G__11855 = cljs.core.first(seq11854);
var seq11854__$1 = cljs.core.next(seq11854);
var G__11856 = cljs.core.first(seq11854__$1);
var seq11854__$2 = cljs.core.next(seq11854__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__11855,G__11856,seq11854__$2);
});

return null;
})()
;
tiltontec.util.base.prog1.cljs$lang$macro = true;

var ret__7805__auto___11866 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11867 = arguments.length;
var i__7766__auto___11868 = (0);
while(true){
if((i__7766__auto___11868 < len__7765__auto___11867)){
args__7772__auto__.push((arguments[i__7766__auto___11868]));

var G__11869 = (i__7766__auto___11868 + (1));
i__7766__auto___11868 = G__11869;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((4) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7773__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_let),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7483__auto__ = var$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq11861){
var G__11862 = cljs.core.first(seq11861);
var seq11861__$1 = cljs.core.next(seq11861);
var G__11863 = cljs.core.first(seq11861__$1);
var seq11861__$2 = cljs.core.next(seq11861__$1);
var G__11864 = cljs.core.first(seq11861__$2);
var seq11861__$3 = cljs.core.next(seq11861__$2);
var G__11865 = cljs.core.first(seq11861__$3);
var seq11861__$4 = cljs.core.next(seq11861__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__11862,G__11863,G__11864,G__11865,seq11861__$4);
});

return null;
})()
;
tiltontec.util.base.b_when.cljs$lang$macro = true;

var ret__7805__auto___11874 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11875 = arguments.length;
var i__7766__auto___11876 = (0);
while(true){
if((i__7766__auto___11876 < len__7765__auto___11875)){
args__7772__auto__.push((arguments[i__7766__auto___11876]));

var G__11877 = (i__7766__auto___11876 + (1));
i__7766__auto___11876 = G__11877;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__7483__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq11870){
var G__11871 = cljs.core.first(seq11870);
var seq11870__$1 = cljs.core.next(seq11870);
var G__11872 = cljs.core.first(seq11870__$1);
var seq11870__$2 = cljs.core.next(seq11870__$1);
var G__11873 = cljs.core.first(seq11870__$2);
var seq11870__$3 = cljs.core.next(seq11870__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__11871,G__11872,G__11873,seq11870__$3);
});

return null;
})()
;
tiltontec.util.base.unless.cljs$lang$macro = true;

var ret__7805__auto___11882 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11883 = arguments.length;
var i__7766__auto___11884 = (0);
while(true){
if((i__7766__auto___11884 < len__7765__auto___11883)){
args__7772__auto__.push((arguments[i__7766__auto___11884]));

var G__11885 = (i__7766__auto___11884 + (1));
i__7766__auto___11884 = G__11885;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7483__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6640__auto__ = reader_prefix;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7483__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq11878){
var G__11879 = cljs.core.first(seq11878);
var seq11878__$1 = cljs.core.next(seq11878);
var G__11880 = cljs.core.first(seq11878__$1);
var seq11878__$2 = cljs.core.next(seq11878__$1);
var G__11881 = cljs.core.first(seq11878__$2);
var seq11878__$3 = cljs.core.next(seq11878__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__11879,G__11880,G__11881,seq11878__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;

var ret__7805__auto___11890 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7772__auto__ = [];
var len__7765__auto___11891 = arguments.length;
var i__7766__auto___11892 = (0);
while(true){
if((i__7766__auto___11892 < len__7765__auto___11891)){
args__7772__auto__.push((arguments[i__7766__auto___11892]));

var G__11893 = (i__7766__auto___11892 + (1));
i__7766__auto___11892 = G__11893;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (slot_SHARP_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__7483__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6640__auto__ = reader_prefix;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7483__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(slot_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ref))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq11886){
var G__11887 = cljs.core.first(seq11886);
var seq11886__$1 = cljs.core.next(seq11886);
var G__11888 = cljs.core.first(seq11886__$1);
var seq11886__$2 = cljs.core.next(seq11886__$1);
var G__11889 = cljs.core.first(seq11886__$2);
var seq11886__$3 = cljs.core.next(seq11886__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__11887,G__11888,G__11889,seq11886__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;

