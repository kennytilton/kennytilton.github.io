// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.style');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.base');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('clojure.string');
tiltontec.web_mx.style.make_css_inline = (function tiltontec$web_mx$style$make_css_inline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27915 = arguments.length;
var i__4737__auto___27916 = (0);
while(true){
if((i__4737__auto___27916 < len__4736__auto___27915)){
args__4742__auto__.push((arguments[i__4737__auto___27916]));

var G__27917 = (i__4737__auto___27916 + (1));
i__4737__auto___27916 = G__27917;
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
throw (new Error("Assert failed: (tag? tag)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$name,cljs.core.cst$kw$inline_DASH_css,cljs.core.cst$kw$type,cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$css_DASH_keys,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$iter__27905(s__27906){
return (new cljs.core.LazySeq(null,(function (){
var s__27906__$1 = s__27906;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27906__$1);
if(temp__5804__auto__){
var s__27906__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27906__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27906__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27908 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27907 = (0);
while(true){
if((i__27907 < size__4528__auto__)){
var vec__27909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27907);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27909,(1),null);
cljs.core.chunk_append(b__27908,k);

var G__27918 = (i__27907 + (1));
i__27907 = G__27918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27908),tiltontec$web_mx$style$iter__27905(cljs.core.chunk_rest(s__27906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27908),null);
}
} else {
var vec__27912 = cljs.core.first(s__27906__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
return cljs.core.cons(k,tiltontec$web_mx$style$iter__27905(cljs.core.rest(s__27906__$2)));
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
(tiltontec.web_mx.style.make_css_inline.cljs$lang$applyTo = (function (seq27903){
var G__27904 = cljs.core.first(seq27903);
var seq27903__$1 = cljs.core.next(seq27903);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27904,seq27903__$1);
}));

tiltontec.web_mx.style.style_string = (function tiltontec$web_mx$style$style_string(s){
var ss = ((typeof s === 'string')?s:(((s == null))?"":((cljs.core.map_QMARK_(s))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$style_string_$_iter__27919(s__27920){
return (new cljs.core.LazySeq(null,(function (){
var s__27920__$1 = s__27920;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27920__$1);
if(temp__5804__auto__){
var s__27920__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27920__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27920__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27922 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27921 = (0);
while(true){
if((i__27921 < size__4528__auto__)){
var vec__27923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__27921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__27922,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),tiltontec.web_mx.base.kw$(v)], 0)));

var G__27930 = (i__27921 + (1));
i__27921 = G__27930;
continue;
} else {
var G__27931 = (i__27921 + (1));
i__27921 = G__27931;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27922),tiltontec$web_mx$style$style_string_$_iter__27919(cljs.core.chunk_rest(s__27920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27922),null);
}
} else {
var vec__27926 = cljs.core.first(s__27920__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27926,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),tiltontec.web_mx.base.kw$(v)], 0)),tiltontec$web_mx$style$style_string_$_iter__27919(cljs.core.rest(s__27920__$2)));
} else {
var G__27932 = cljs.core.rest(s__27920__$2);
s__27920__$1 = G__27932;
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
})()):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,tiltontec.cell.base.ia_type(s)))?(function (){var G__27929 = cljs.core.select_keys(cljs.core.deref(s),cljs.core.cst$kw$css_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
return (tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1(G__27929) : tiltontec.web_mx.style.style_string.call(null,G__27929));
})():(function (){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ss_DASH_unknown,s,cljs.core.type(s)], 0));

return "";
})()

))));
return ss;
});
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$css_SLASH_css], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var dom = tiltontec.web_mx.base.tag_dom(tiltontec.model.core.mget(me,cljs.core.cst$kw$tag));
return goog.style.setStyle(dom,cljs.core.name(slot),tiltontec.web_mx.base.kw$(newv));
} else {
return null;
}
}));
