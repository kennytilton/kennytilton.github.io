// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('tiltontec.util.base');
goog.require('tiltontec.model.core');
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.web_mx !== 'undefined') && (typeof tiltontec.web_mx.base !== 'undefined') && (typeof tiltontec.web_mx.base.js_intervals !== 'undefined')){
} else {
tiltontec.web_mx.base.js_intervals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
tiltontec.web_mx.base.js_interval_register = (function tiltontec$web_mx$base$js_interval_register(interval){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.base.js_intervals,cljs.core.conj,interval);

return interval;
});
tiltontec.web_mx.base.teardown = (function tiltontec$web_mx$base$teardown(){
var seq__33024_33028 = cljs.core.seq(cljs.core.deref(tiltontec.web_mx.base.js_intervals));
var chunk__33025_33029 = null;
var count__33026_33030 = (0);
var i__33027_33031 = (0);
while(true){
if((i__33027_33031 < count__33026_33030)){
var i_33032 = chunk__33025_33029.cljs$core$IIndexed$_nth$arity$2(null,i__33027_33031);
clearInterval(i_33032);


var G__33033 = seq__33024_33028;
var G__33034 = chunk__33025_33029;
var G__33035 = count__33026_33030;
var G__33036 = (i__33027_33031 + (1));
seq__33024_33028 = G__33033;
chunk__33025_33029 = G__33034;
count__33026_33030 = G__33035;
i__33027_33031 = G__33036;
continue;
} else {
var temp__5804__auto___33037 = cljs.core.seq(seq__33024_33028);
if(temp__5804__auto___33037){
var seq__33024_33038__$1 = temp__5804__auto___33037;
if(cljs.core.chunked_seq_QMARK_(seq__33024_33038__$1)){
var c__4556__auto___33039 = cljs.core.chunk_first(seq__33024_33038__$1);
var G__33040 = cljs.core.chunk_rest(seq__33024_33038__$1);
var G__33041 = c__4556__auto___33039;
var G__33042 = cljs.core.count(c__4556__auto___33039);
var G__33043 = (0);
seq__33024_33028 = G__33040;
chunk__33025_33029 = G__33041;
count__33026_33030 = G__33042;
i__33027_33031 = G__33043;
continue;
} else {
var i_33044 = cljs.core.first(seq__33024_33038__$1);
clearInterval(i_33044);


var G__33045 = cljs.core.next(seq__33024_33038__$1);
var G__33046 = null;
var G__33047 = (0);
var G__33048 = (0);
seq__33024_33028 = G__33045;
chunk__33025_33029 = G__33046;
count__33026_33030 = G__33047;
i__33027_33031 = G__33048;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(tiltontec.web_mx.base.js_intervals,null);
});
tiltontec.web_mx.base._STAR_web_mx_trace_STAR_ = false;
tiltontec.web_mx.base.tag_QMARK_ = (function tiltontec$web_mx$base$tag_QMARK_(me){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.type_cljc(me),cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag);
});
tiltontec.web_mx.base.kw$ = (function tiltontec$web_mx$base$kw$(kw){
if((kw instanceof cljs.core.Keyword)){
return cljs.core.name(kw);
} else {
return kw;
}
});
tiltontec.web_mx.base.attr_val$ = (function tiltontec$web_mx$base$attr_val$(val){
if(typeof val === 'string'){
return val;
} else {
if((val instanceof cljs.core.Keyword)){
return cljs.core.name(val);
} else {
if(cljs.core.coll_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.web_mx.base.attr_val$,val));
} else {
if(cljs.core.fn_QMARK_(val)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["attr-val$ raw!!!!"], 0));

return val;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);

}
}
}
}
});
tiltontec.web_mx.base.mxwprn = (function tiltontec$web_mx$base$mxwprn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33050 = arguments.length;
var i__4737__auto___33051 = (0);
while(true){
if((i__4737__auto___33051 < len__4736__auto___33050)){
args__4742__auto__.push((arguments[i__4737__auto___33051]));

var G__33052 = (i__4737__auto___33051 + (1));
i__4737__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic = (function (bits){
if(cljs.core.truth_(tiltontec.web_mx.base._STAR_web_mx_trace_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.prn,cljs.core.cst$kw$web_DASH_mx_GT_,bits);
} else {
return null;
}
}));

(tiltontec.web_mx.base.mxwprn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.web_mx.base.mxwprn.cljs$lang$applyTo = (function (seq33049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33049));
}));

tiltontec.web_mx.base.tag_dom = (function tiltontec$web_mx$base$tag_dom(me){
var id = tiltontec.model.core.mget(me,cljs.core.cst$kw$id);
var dom_x = cljs.core.cst$kw$dom_DASH_x.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
var dom = (function (){var or__4126__auto__ = cljs.core.cst$kw$dom_DASH_cache.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.model.core.backdoor_reset_BANG_(me,cljs.core.cst$kw$dom_DASH_cache,goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
}
})();
if((dom == null)){
tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id_DASH_not_DASH_in_DASH_dom_DASH_or_DASH_cache,id], 0));
} else {
}

if((dom_x == null)){
tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_dom_DASH_x,cljs.core.meta(me)], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dom,dom_x)){
tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dom_DASH_same_BANG__BANG__BANG__BANG_,dom], 0));
} else {
tiltontec.web_mx.base.mxwprn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$don_DASH_not_DASH_eq,dom,cljs.core.cst$kw$dom_DASH_x.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))], 0));
}

var or__4126__auto__ = dom;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dom_x;
}
});
