// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8198 = arguments.length;
var i__7766__auto___8199 = (0);
while(true){
if((i__7766__auto___8199 < len__7765__auto___8198)){
args__7772__auto__.push((arguments[i__7766__auto___8199]));

var G__8200 = (i__7766__auto___8199 + (1));
i__7766__auto___8199 = G__8200;
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
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq8196){
var G__8197 = cljs.core.first.call(null,seq8196);
var seq8196__$1 = cljs.core.next.call(null,seq8196);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__8197,seq8196__$1);
});

var ret__7805__auto___8205 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8206 = arguments.length;
var i__7766__auto___8207 = (0);
while(true){
if((i__7766__auto___8207 < len__7765__auto___8206)){
args__7772__auto__.push((arguments[i__7766__auto___8207]));

var G__8208 = (i__7766__auto___8207 + (1));
i__7766__auto___8207 = G__8208;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7483__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq8201){
var G__8202 = cljs.core.first.call(null,seq8201);
var seq8201__$1 = cljs.core.next.call(null,seq8201);
var G__8203 = cljs.core.first.call(null,seq8201__$1);
var seq8201__$2 = cljs.core.next.call(null,seq8201__$1);
var G__8204 = cljs.core.first.call(null,seq8201__$2);
var seq8201__$3 = cljs.core.next.call(null,seq8201__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__8202,G__8203,G__8204,seq8201__$3);
});

return null;
})()
;
tiltontec.util.base.trx.cljs$lang$macro = true;

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_8209 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_8209;
}});
var ret__7805__auto___8218 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8219 = arguments.length;
var i__7766__auto___8220 = (0);
while(true){
if((i__7766__auto___8220 < len__7765__auto___8219)){
args__7772__auto__.push((arguments[i__7766__auto___8220]));

var G__8221 = (i__7766__auto___8220 + (1));
i__7766__auto___8220 = G__8221;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8214,body){
var vec__8215 = p__8214;
var seq__8216 = cljs.core.seq.call(null,vec__8215);
var first__8217 = cljs.core.first.call(null,seq__8216);
var seq__8216__$1 = cljs.core.next.call(null,seq__8216);
var lo = first__8217;
var first__8217__$1 = cljs.core.first.call(null,seq__8216__$1);
var seq__8216__$2 = cljs.core.next.call(null,seq__8216__$1);
var hi = first__8217__$1;
var trxargs = seq__8216__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq8210){
var G__8211 = cljs.core.first.call(null,seq8210);
var seq8210__$1 = cljs.core.next.call(null,seq8210);
var G__8212 = cljs.core.first.call(null,seq8210__$1);
var seq8210__$2 = cljs.core.next.call(null,seq8210__$1);
var G__8213 = cljs.core.first.call(null,seq8210__$2);
var seq8210__$3 = cljs.core.next.call(null,seq8210__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__8211,G__8212,G__8213,seq8210__$3);
});

return null;
})()
;
tiltontec.util.base.wtrx.cljs$lang$macro = true;

var ret__7805__auto___8226 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8227 = arguments.length;
var i__7766__auto___8228 = (0);
while(true){
if((i__7766__auto___8228 < len__7765__auto___8227)){
args__7772__auto__.push((arguments[i__7766__auto___8228]));

var G__8229 = (i__7766__auto___8228 + (1));
i__7766__auto___8228 = G__8229;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8222__auto__","result__8222__auto__",-411716880,null)),(function (){var x__7483__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8222__auto__","result__8222__auto__",-411716880,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq8223){
var G__8224 = cljs.core.first.call(null,seq8223);
var seq8223__$1 = cljs.core.next.call(null,seq8223);
var G__8225 = cljs.core.first.call(null,seq8223__$1);
var seq8223__$2 = cljs.core.next.call(null,seq8223__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__8224,G__8225,seq8223__$2);
});

return null;
})()
;
tiltontec.util.base.prog1.cljs$lang$macro = true;

var ret__7805__auto___8235 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8236 = arguments.length;
var i__7766__auto___8237 = (0);
while(true){
if((i__7766__auto___8237 < len__7765__auto___8236)){
args__7772__auto__.push((arguments[i__7766__auto___8237]));

var G__8238 = (i__7766__auto___8237 + (1));
i__7766__auto___8237 = G__8238;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((4) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7773__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7483__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq8230){
var G__8231 = cljs.core.first.call(null,seq8230);
var seq8230__$1 = cljs.core.next.call(null,seq8230);
var G__8232 = cljs.core.first.call(null,seq8230__$1);
var seq8230__$2 = cljs.core.next.call(null,seq8230__$1);
var G__8233 = cljs.core.first.call(null,seq8230__$2);
var seq8230__$3 = cljs.core.next.call(null,seq8230__$2);
var G__8234 = cljs.core.first.call(null,seq8230__$3);
var seq8230__$4 = cljs.core.next.call(null,seq8230__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__8231,G__8232,G__8233,G__8234,seq8230__$4);
});

return null;
})()
;
tiltontec.util.base.b_when.cljs$lang$macro = true;

var ret__7805__auto___8243 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8244 = arguments.length;
var i__7766__auto___8245 = (0);
while(true){
if((i__7766__auto___8245 < len__7765__auto___8244)){
args__7772__auto__.push((arguments[i__7766__auto___8245]));

var G__8246 = (i__7766__auto___8245 + (1));
i__7766__auto___8245 = G__8246;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7483__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq8239){
var G__8240 = cljs.core.first.call(null,seq8239);
var seq8239__$1 = cljs.core.next.call(null,seq8239);
var G__8241 = cljs.core.first.call(null,seq8239__$1);
var seq8239__$2 = cljs.core.next.call(null,seq8239__$1);
var G__8242 = cljs.core.first.call(null,seq8239__$2);
var seq8239__$3 = cljs.core.next.call(null,seq8239__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__8240,G__8241,G__8242,seq8239__$3);
});

return null;
})()
;
tiltontec.util.base.unless.cljs$lang$macro = true;

var ret__7805__auto___8251 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8252 = arguments.length;
var i__7766__auto___8253 = (0);
while(true){
if((i__7766__auto___8253 < len__7765__auto___8252)){
args__7772__auto__.push((arguments[i__7766__auto___8253]));

var G__8254 = (i__7766__auto___8253 + (1));
i__7766__auto___8253 = G__8254;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7483__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6640__auto__ = reader_prefix;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7483__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq8247){
var G__8248 = cljs.core.first.call(null,seq8247);
var seq8247__$1 = cljs.core.next.call(null,seq8247);
var G__8249 = cljs.core.first.call(null,seq8247__$1);
var seq8247__$2 = cljs.core.next.call(null,seq8247__$1);
var G__8250 = cljs.core.first.call(null,seq8247__$2);
var seq8247__$3 = cljs.core.next.call(null,seq8247__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__8248,G__8249,G__8250,seq8247__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;

var ret__7805__auto___8259 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8260 = arguments.length;
var i__7766__auto___8261 = (0);
while(true){
if((i__7766__auto___8261 < len__7765__auto___8260)){
args__7772__auto__.push((arguments[i__7766__auto___8261]));

var G__8262 = (i__7766__auto___8261 + (1));
i__7766__auto___8261 = G__8262;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7483__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6640__auto__ = reader_prefix;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7483__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq8255){
var G__8256 = cljs.core.first.call(null,seq8255);
var seq8255__$1 = cljs.core.next.call(null,seq8255);
var G__8257 = cljs.core.first.call(null,seq8255__$1);
var seq8255__$2 = cljs.core.next.call(null,seq8255__$1);
var G__8258 = cljs.core.first.call(null,seq8255__$2);
var seq8255__$3 = cljs.core.next.call(null,seq8255__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__8256,G__8257,G__8258,seq8255__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;


//# sourceMappingURL=base.js.map