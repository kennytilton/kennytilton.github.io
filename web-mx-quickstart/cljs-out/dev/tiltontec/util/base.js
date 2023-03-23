// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base._PLUS_mx_sid_PLUS_ = cljs.core.atom.call(null,(0));
tiltontec.util.base.mx_sid_next = (function tiltontec$util$base$mx_sid_next(){
return cljs.core.swap_BANG_.call(null,tiltontec.util.base._PLUS_mx_sid_PLUS_,cljs.core.inc);
});
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18926 = arguments.length;
var i__4737__auto___18927 = (0);
while(true){
if((i__4737__auto___18927 < len__4736__auto___18926)){
args__4742__auto__.push((arguments[i__4737__auto___18927]));

var G__18928 = (i__4737__auto___18927 + (1));
i__4737__auto___18927 = G__18928;
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
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
}));

(tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq18924){
var G__18925 = cljs.core.first.call(null,seq18924);
var seq18924__$1 = cljs.core.next.call(null,seq18924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18925,seq18924__$1);
}));

var ret__4785__auto___18933 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18934 = arguments.length;
var i__4737__auto___18935 = (0);
while(true){
if((i__4737__auto___18935 < len__4736__auto___18934)){
args__4742__auto__.push((arguments[i__4737__auto___18935]));

var G__18936 = (i__4737__auto___18935 + (1));
i__4737__auto___18935 = G__18936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null),null,(1),null)),(new cljs.core.List(null,(((!((label == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(label):null),null,(1),null)),vals)));
}));

(tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq18929){
var G__18930 = cljs.core.first.call(null,seq18929);
var seq18929__$1 = cljs.core.next.call(null,seq18929);
var G__18931 = cljs.core.first.call(null,seq18929__$1);
var seq18929__$2 = cljs.core.next.call(null,seq18929__$1);
var G__18932 = cljs.core.first.call(null,seq18929__$2);
var seq18929__$3 = cljs.core.next.call(null,seq18929__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18930,G__18931,G__18932,seq18929__$3);
}));

return null;
})()
;
(tiltontec.util.base.trx.cljs$lang$macro = true);

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR__orig_val__18937 = tiltontec.util.base._STAR_trxdepth_STAR_;
var _STAR_trxdepth_STAR__temp_val__18938 = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));
(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__temp_val__18938);

try{if((((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi)))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error(["wtrx exceeded max depth ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {(tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR__orig_val__18937);
}});
var ret__4785__auto___18947 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18948 = arguments.length;
var i__4737__auto___18949 = (0);
while(true){
if((i__4737__auto___18949 < len__4736__auto___18948)){
args__4742__auto__.push((arguments[i__4737__auto___18949]));

var G__18950 = (i__4737__auto___18949 + (1));
i__4737__auto___18949 = G__18950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__18943,body){
var vec__18944 = p__18943;
var seq__18945 = cljs.core.seq.call(null,vec__18944);
var first__18946 = cljs.core.first.call(null,seq__18945);
var seq__18945__$1 = cljs.core.next.call(null,seq__18945);
var lo = first__18946;
var first__18946__$1 = cljs.core.first.call(null,seq__18945__$1);
var seq__18945__$2 = cljs.core.next.call(null,seq__18945__$1);
var hi = first__18946__$1;
var trxargs = seq__18945__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,lo,null,(1),null)),(new cljs.core.List(null,hi,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),trxargs))),null,(1),null)))));
}));

(tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq18939){
var G__18940 = cljs.core.first.call(null,seq18939);
var seq18939__$1 = cljs.core.next.call(null,seq18939);
var G__18941 = cljs.core.first.call(null,seq18939__$1);
var seq18939__$2 = cljs.core.next.call(null,seq18939__$1);
var G__18942 = cljs.core.first.call(null,seq18939__$2);
var seq18939__$3 = cljs.core.next.call(null,seq18939__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18940,G__18941,G__18942,seq18939__$3);
}));

return null;
})()
;
(tiltontec.util.base.wtrx.cljs$lang$macro = true);

var ret__4785__auto___18955 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18956 = arguments.length;
var i__4737__auto___18957 = (0);
while(true){
if((i__4737__auto___18957 < len__4736__auto___18956)){
args__4742__auto__.push((arguments[i__4737__auto___18957]));

var G__18958 = (i__4737__auto___18957 + (1));
i__4737__auto___18957 = G__18958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18951__auto__","result__18951__auto__",130276243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,body),null,(1),null)))))),null,(1),null)),cljs.core.rest.call(null,body),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18951__auto__","result__18951__auto__",130276243,null),null,(1),null)))));
}));

(tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq18952){
var G__18953 = cljs.core.first.call(null,seq18952);
var seq18952__$1 = cljs.core.next.call(null,seq18952);
var G__18954 = cljs.core.first.call(null,seq18952__$1);
var seq18952__$2 = cljs.core.next.call(null,seq18952__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18953,G__18954,seq18952__$2);
}));

return null;
})()
;
(tiltontec.util.base.prog1.cljs$lang$macro = true);

var ret__4785__auto___18964 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18965 = arguments.length;
var i__4737__auto___18966 = (0);
while(true){
if((i__4737__auto___18966 < len__4736__auto___18965)){
args__4742__auto__.push((arguments[i__4737__auto___18966]));

var G__18967 = (i__4737__auto___18966 + (1));
i__4737__auto___18966 = G__18967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),body)));
}));

(tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq18959){
var G__18960 = cljs.core.first.call(null,seq18959);
var seq18959__$1 = cljs.core.next.call(null,seq18959);
var G__18961 = cljs.core.first.call(null,seq18959__$1);
var seq18959__$2 = cljs.core.next.call(null,seq18959__$1);
var G__18962 = cljs.core.first.call(null,seq18959__$2);
var seq18959__$3 = cljs.core.next.call(null,seq18959__$2);
var G__18963 = cljs.core.first.call(null,seq18959__$3);
var seq18959__$4 = cljs.core.next.call(null,seq18959__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18960,G__18961,G__18962,G__18963,seq18959__$4);
}));

return null;
})()
;
(tiltontec.util.base.b_when.cljs$lang$macro = true);

var ret__4785__auto___18972 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18973 = arguments.length;
var i__4737__auto___18974 = (0);
while(true){
if((i__4737__auto___18974 < len__4736__auto___18973)){
args__4742__auto__.push((arguments[i__4737__auto___18974]));

var G__18975 = (i__4737__auto___18974 + (1));
i__4737__auto___18974 = G__18975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),body)));
}));

(tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq18968){
var G__18969 = cljs.core.first.call(null,seq18968);
var seq18968__$1 = cljs.core.next.call(null,seq18968);
var G__18970 = cljs.core.first.call(null,seq18968__$1);
var seq18968__$2 = cljs.core.next.call(null,seq18968__$1);
var G__18971 = cljs.core.first.call(null,seq18968__$2);
var seq18968__$3 = cljs.core.next.call(null,seq18968__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18969,G__18970,G__18971,seq18968__$3);
}));

return null;
})()
;
(tiltontec.util.base.unless.cljs$lang$macro = true);

var ret__4785__auto___18980 = (function (){
tiltontec.util.base.def_rmap_props = (function tiltontec$util$base$def_rmap_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18981 = arguments.length;
var i__4737__auto___18982 = (0);
while(true){
if((i__4737__auto___18982 < len__4736__auto___18981)){
args__4742__auto__.push((arguments[i__4737__auto___18982]));

var G__18983 = (i__4737__auto___18982 + (1));
i__4737__auto___18982 = G__18983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_props.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (prop_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_SHARP_)].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.keyword.call(null,prop_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}),props))));
}));

(tiltontec.util.base.def_rmap_props.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_props.cljs$lang$applyTo = (function (seq18976){
var G__18977 = cljs.core.first.call(null,seq18976);
var seq18976__$1 = cljs.core.next.call(null,seq18976);
var G__18978 = cljs.core.first.call(null,seq18976__$1);
var seq18976__$2 = cljs.core.next.call(null,seq18976__$1);
var G__18979 = cljs.core.first.call(null,seq18976__$2);
var seq18976__$3 = cljs.core.next.call(null,seq18976__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18977,G__18978,G__18979,seq18976__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_props.cljs$lang$macro = true);

var ret__4785__auto___18988 = (function (){
tiltontec.util.base.def_rmap_meta_props = (function tiltontec$util$base$def_rmap_meta_props(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18989 = arguments.length;
var i__4737__auto___18990 = (0);
while(true){
if((i__4737__auto___18990 < len__4736__auto___18989)){
args__4742__auto__.push((arguments[i__4737__auto___18990]));

var G__18991 = (i__4737__auto___18990 + (1));
i__4737__auto___18990 = G__18991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.util.base.def_rmap_meta_props.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (prop_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_SHARP_)].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.keyword.call(null,prop_SHARP_),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}),props))));
}));

(tiltontec.util.base.def_rmap_meta_props.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.util.base.def_rmap_meta_props.cljs$lang$applyTo = (function (seq18984){
var G__18985 = cljs.core.first.call(null,seq18984);
var seq18984__$1 = cljs.core.next.call(null,seq18984);
var G__18986 = cljs.core.first.call(null,seq18984__$1);
var seq18984__$2 = cljs.core.next.call(null,seq18984__$1);
var G__18987 = cljs.core.first.call(null,seq18984__$2);
var seq18984__$3 = cljs.core.next.call(null,seq18984__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18985,G__18986,G__18987,seq18984__$3);
}));

return null;
})()
;
(tiltontec.util.base.def_rmap_meta_props.cljs$lang$macro = true);

tiltontec.util.base.mx_type = (function tiltontec$util$base$mx_type(it){
var or__4126__auto__ = (function (){var temp__5804__auto__ = cljs.core.meta.call(null,it);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return new cljs.core.Keyword(null,"mx-type","mx-type",2136489290).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type.call(null,it);
}
});
tiltontec.util.base.mx_type_QMARK_ = (function tiltontec$util$base$mx_type_QMARK_(it,type){
return cljs.core.isa_QMARK_.call(null,tiltontec.util.base.mx_type.call(null,it),type);
});

//# sourceMappingURL=base.js.map
