// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.style');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.cell.watch');
goog.require('tiltontec.matrix.api');
goog.require('tiltontec.web_mx.base');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('clojure.string');
tiltontec.web_mx.style.make_css_inline = (function tiltontec$web_mx$style$make_css_inline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28364 = arguments.length;
var i__4737__auto___28365 = (0);
while(true){
if((i__4737__auto___28365 < len__4736__auto___28364)){
args__4742__auto__.push((arguments[i__4737__auto___28365]));

var G__28366 = (i__4737__auto___28365 + (1));
i__4737__auto___28365 = G__28366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic = (function (tag,stylings){
if(tiltontec.web_mx.base.tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",["make-css-inline> tag param not a tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mx_type(tag)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$meta),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag))].join(''),"\n","(tag? tag)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.matrix.api.make,cljs.core.cst$kw$name,cljs.core.cst$kw$inline_DASH_css,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$css_DASH_keys,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$iter__28354(s__28355){
return (new cljs.core.LazySeq(null,(function (){
var s__28355__$1 = s__28355;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28355__$1);
if(temp__5804__auto__){
var s__28355__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28355__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28355__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28357 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28356 = (0);
while(true){
if((i__28356 < size__4528__auto__)){
var vec__28358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
cljs.core.chunk_append(b__28357,k);

var G__28367 = (i__28356 + (1));
i__28356 = G__28367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28357),tiltontec$web_mx$style$iter__28354(cljs.core.chunk_rest(s__28355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28357),null);
}
} else {
var vec__28361 = cljs.core.first(s__28355__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28361,(1),null);
return cljs.core.cons(k,tiltontec$web_mx$style$iter__28354(cljs.core.rest(s__28355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),stylings));
})(),stylings], 0));
}));

(tiltontec.web_mx.style.make_css_inline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.web_mx.style.make_css_inline.cljs$lang$applyTo = (function (seq28352){
var G__28353 = cljs.core.first(seq28352);
var seq28352__$1 = cljs.core.next(seq28352);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28353,seq28352__$1);
}));

tiltontec.web_mx.style.style_string = (function tiltontec$web_mx$style$style_string(s){
var ss = ((typeof s === 'string')?s:(((s == null))?"":((cljs.core.map_QMARK_(s))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$style_string_$_iter__28368(s__28369){
return (new cljs.core.LazySeq(null,(function (){
var s__28369__$1 = s__28369;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28369__$1);
if(temp__5804__auto__){
var s__28369__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28369__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28369__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28371 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28370 = (0);
while(true){
if((i__28370 < size__4528__auto__)){
var vec__28372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28370);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28372,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__28371,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),tiltontec.web_mx.base.kw$(v)], 0)));

var G__28379 = (i__28370 + (1));
i__28370 = G__28379;
continue;
} else {
var G__28380 = (i__28370 + (1));
i__28370 = G__28380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28371),tiltontec$web_mx$style$style_string_$_iter__28368(cljs.core.chunk_rest(s__28369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28371),null);
}
} else {
var vec__28375 = cljs.core.first(s__28369__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),tiltontec.web_mx.base.kw$(v)], 0)),tiltontec$web_mx$style$style_string_$_iter__28368(cljs.core.rest(s__28369__$2)));
} else {
var G__28381 = cljs.core.rest(s__28369__$2);
s__28369__$1 = G__28381;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(s);
})()):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,tiltontec.matrix.api.mx_type(s)))?(function (){var G__28378 = cljs.core.select_keys(cljs.core.deref(s),cljs.core.cst$kw$css_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
return (tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1(G__28378) : tiltontec.web_mx.style.style_string.call(null,G__28378));
})():(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ss_DASH_unknown,s,cljs.core.type(s)], 0));

return "";
})()

))));
return ss;
});
tiltontec.cell.watch.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$css_SLASH_css], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
var dom = tiltontec.web_mx.base.tag_dom(tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag));
return goog.style.setStyle(dom,cljs.core.name(slot),tiltontec.web_mx.base.kw$(newv));
} else {
return null;
}
}));
