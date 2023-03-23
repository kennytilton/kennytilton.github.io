// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.web_mx.base');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('tiltontec.matrix.api');
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.web_mx !== 'undefined') && (typeof tiltontec.web_mx.base !== 'undefined') && (typeof tiltontec.web_mx.base.js_intervals !== 'undefined')){
} else {
tiltontec.web_mx.base.js_intervals = cljs.core.atom.call(null,null);
}
tiltontec.web_mx.base.js_interval_register = (function tiltontec$web_mx$base$js_interval_register(interval){
cljs.core.swap_BANG_.call(null,tiltontec.web_mx.base.js_intervals,cljs.core.conj,interval);

return interval;
});
tiltontec.web_mx.base.teardown = (function tiltontec$web_mx$base$teardown(){
var seq__21353_21357 = cljs.core.seq.call(null,cljs.core.deref.call(null,tiltontec.web_mx.base.js_intervals));
var chunk__21354_21358 = null;
var count__21355_21359 = (0);
var i__21356_21360 = (0);
while(true){
if((i__21356_21360 < count__21355_21359)){
var i_21361 = cljs.core._nth.call(null,chunk__21354_21358,i__21356_21360);
clearInterval(i_21361);


var G__21362 = seq__21353_21357;
var G__21363 = chunk__21354_21358;
var G__21364 = count__21355_21359;
var G__21365 = (i__21356_21360 + (1));
seq__21353_21357 = G__21362;
chunk__21354_21358 = G__21363;
count__21355_21359 = G__21364;
i__21356_21360 = G__21365;
continue;
} else {
var temp__5804__auto___21366 = cljs.core.seq.call(null,seq__21353_21357);
if(temp__5804__auto___21366){
var seq__21353_21367__$1 = temp__5804__auto___21366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21353_21367__$1)){
var c__4556__auto___21368 = cljs.core.chunk_first.call(null,seq__21353_21367__$1);
var G__21369 = cljs.core.chunk_rest.call(null,seq__21353_21367__$1);
var G__21370 = c__4556__auto___21368;
var G__21371 = cljs.core.count.call(null,c__4556__auto___21368);
var G__21372 = (0);
seq__21353_21357 = G__21369;
chunk__21354_21358 = G__21370;
count__21355_21359 = G__21371;
i__21356_21360 = G__21372;
continue;
} else {
var i_21373 = cljs.core.first.call(null,seq__21353_21367__$1);
clearInterval(i_21373);


var G__21374 = cljs.core.next.call(null,seq__21353_21367__$1);
var G__21375 = null;
var G__21376 = (0);
var G__21377 = (0);
seq__21353_21357 = G__21374;
chunk__21354_21358 = G__21375;
count__21355_21359 = G__21376;
i__21356_21360 = G__21377;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,tiltontec.web_mx.base.js_intervals,null);
});
tiltontec.web_mx.base._STAR_web_mx_trace_STAR_ = false;
tiltontec.web_mx.base.tag_QMARK_ = (function tiltontec$web_mx$base$tag_QMARK_(me){
return cljs.core._EQ_.call(null,tiltontec.matrix.api.mx_type.call(null,me),new cljs.core.Keyword("web-mx.base","tag","web-mx.base/tag",-1519942204));
});
tiltontec.web_mx.base.kw$ = (function tiltontec$web_mx$base$kw$(kw){
if((kw instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,kw);
} else {
return kw;
}
});
tiltontec.web_mx.base.attr_val$ = (function tiltontec$web_mx$base$attr_val$(val){
if(typeof val === 'string'){
return val;
} else {
if((val instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,val);
} else {
if(cljs.core.coll_QMARK_.call(null,val)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,tiltontec.web_mx.base.attr_val$,val));
} else {
if(cljs.core.fn_QMARK_.call(null,val)){
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
var len__4736__auto___21379 = arguments.length;
var i__4737__auto___21380 = (0);
while(true){
if((i__4737__auto___21380 < len__4736__auto___21379)){
args__4742__auto__.push((arguments[i__4737__auto___21380]));

var G__21381 = (i__4737__auto___21380 + (1));
i__4737__auto___21380 = G__21381;
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
return cljs.core.apply.call(null,cljs.core.prn,new cljs.core.Keyword(null,"web-mx>","web-mx>",1121767839),bits);
} else {
return null;
}
}));

(tiltontec.web_mx.base.mxwprn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.web_mx.base.mxwprn.cljs$lang$applyTo = (function (seq21378){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21378));
}));

tiltontec.web_mx.base.tag_dom = (function tiltontec$web_mx$base$tag_dom(me){
var id = tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
var dom_x = new cljs.core.Keyword(null,"dom-x","dom-x",-864955162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me));
var dom = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.matrix.api.backdoor_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),goog.dom.getElement(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
}
})();
if((dom == null)){
tiltontec.web_mx.base.mxwprn.call(null,new cljs.core.Keyword(null,"id-not-in-dom-or-cache","id-not-in-dom-or-cache",830815633),id);
} else {
}

if((dom_x == null)){
tiltontec.web_mx.base.mxwprn.call(null,new cljs.core.Keyword(null,"no-dom-x","no-dom-x",1773925878),cljs.core.meta.call(null,me));
} else {
}

if(cljs.core._EQ_.call(null,dom,dom_x)){
tiltontec.web_mx.base.mxwprn.call(null,new cljs.core.Keyword(null,"dom-same!!!!","dom-same!!!!",1213447703),dom);
} else {
tiltontec.web_mx.base.mxwprn.call(null,new cljs.core.Keyword(null,"don-not-eq","don-not-eq",19091264),dom,new cljs.core.Keyword(null,"dom-x","dom-x",-864955162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));
}

var or__4126__auto__ = dom;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return dom_x;
}
});

//# sourceMappingURL=base.js.map
