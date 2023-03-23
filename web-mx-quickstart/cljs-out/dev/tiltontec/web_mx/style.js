// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.style');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.matrix.api');
goog.require('tiltontec.web_mx.base');
goog.require('goog.style');
goog.require('clojure.string');
/**
 * Returns an MX proxy for a w/mx style attribute map.
 */
tiltontec.web_mx.style.make_css_inline = (function tiltontec$web_mx$style$make_css_inline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18134 = arguments.length;
var i__4737__auto___18135 = (0);
while(true){
if((i__4737__auto___18135 < len__4736__auto___18134)){
args__4742__auto__.push((arguments[i__4737__auto___18135]));

var G__18136 = (i__4737__auto___18135 + (1));
i__4737__auto___18135 = G__18136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic = (function (me,stylings){
if(tiltontec.web_mx.base.tag_QMARK_(me)){
} else {
throw (new Error(["Assert failed: ",["make-css-inline> tag param not a tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mx_type(me)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$meta),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))].join(''),"\n","(tag? me)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.matrix.api.make,cljs.core.cst$kw$name,cljs.core.cst$kw$inline_DASH_css,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag,me,cljs.core.cst$kw$css_DASH_keys,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$iter__18124(s__18125){
return (new cljs.core.LazySeq(null,(function (){
var s__18125__$1 = s__18125;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18125__$1);
if(temp__5804__auto__){
var s__18125__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18125__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18125__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18127 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18126 = (0);
while(true){
if((i__18126 < size__4528__auto__)){
var vec__18128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18126);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18128,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18128,(1),null);
cljs.core.chunk_append(b__18127,k);

var G__18137 = (i__18126 + (1));
i__18126 = G__18137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18127),tiltontec$web_mx$style$iter__18124(cljs.core.chunk_rest(s__18125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18127),null);
}
} else {
var vec__18131 = cljs.core.first(s__18125__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18131,(1),null);
return cljs.core.cons(k,tiltontec$web_mx$style$iter__18124(cljs.core.rest(s__18125__$2)));
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
(tiltontec.web_mx.style.make_css_inline.cljs$lang$applyTo = (function (seq18122){
var G__18123 = cljs.core.first(seq18122);
var seq18122__$1 = cljs.core.next(seq18122);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18123,seq18122__$1);
}));

tiltontec.web_mx.style.style_string = (function tiltontec$web_mx$style$style_string(s){
var ss = ((typeof s === 'string')?s:(((s == null))?"":((cljs.core.map_QMARK_(s))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$style_string_$_iter__18138(s__18139){
return (new cljs.core.LazySeq(null,(function (){
var s__18139__$1 = s__18139;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18139__$1);
if(temp__5804__auto__){
var s__18139__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18140 = (0);
while(true){
if((i__18140 < size__4528__auto__)){
var vec__18142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18140);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__18141,[cljs.core.name(k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.web_mx.base.kw$(v))].join(''));

var G__18149 = (i__18140 + (1));
i__18140 = G__18149;
continue;
} else {
var G__18150 = (i__18140 + (1));
i__18140 = G__18150;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18141),tiltontec$web_mx$style$style_string_$_iter__18138(cljs.core.chunk_rest(s__18139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18141),null);
}
} else {
var vec__18145 = cljs.core.first(s__18139__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18145,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons([cljs.core.name(k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.web_mx.base.kw$(v))].join(''),tiltontec$web_mx$style$style_string_$_iter__18138(cljs.core.rest(s__18139__$2)));
} else {
var G__18151 = cljs.core.rest(s__18139__$2);
s__18139__$1 = G__18151;
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
})()):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$web_DASH_mx$css_SLASH_css,tiltontec.matrix.api.mx_type(s)))?(function (){var G__18148 = cljs.core.select_keys(cljs.core.deref(s),cljs.core.cst$kw$css_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
return (tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.style.style_string.cljs$core$IFn$_invoke$arity$1(G__18148) : tiltontec.web_mx.style.style_string.call(null,G__18148));
})():(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ss_DASH_unknown,s,cljs.core.type(s)], 0));

return "";
})()

))));
return ss;
});
tiltontec.cell.poly.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$css_SLASH_css], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
var dom = tiltontec.web_mx.base.tag_dom(tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag));
return goog.style.setStyle(dom,cljs.core.name(slot),tiltontec.web_mx.base.kw$(newv));
} else {
return null;
}
}));
