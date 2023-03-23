// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.web_mx.style');
goog.require('cljs.core');
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
var len__4736__auto___21427 = arguments.length;
var i__4737__auto___21428 = (0);
while(true){
if((i__4737__auto___21428 < len__4736__auto___21427)){
args__4742__auto__.push((arguments[i__4737__auto___21428]));

var G__21429 = (i__4737__auto___21428 + (1));
i__4737__auto___21428 = G__21429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.web_mx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic = (function (me,stylings){
if(tiltontec.web_mx.base.tag_QMARK_.call(null,me)){
} else {
throw (new Error(["Assert failed: ",["make-css-inline> tag param not a tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mx_type.call(null,me)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))].join(''),"\n","(tag? me)"].join('')));
}

return cljs.core.apply.call(null,tiltontec.matrix.api.make,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"inline-css","inline-css",-1926891704),new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),new cljs.core.Keyword("web-mx.css","css","web-mx.css/css",589703490),new cljs.core.Keyword(null,"tag","tag",-1290361223),me,new cljs.core.Keyword(null,"css-keys","css-keys",876048944),(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$iter__21417(s__21418){
return (new cljs.core.LazySeq(null,(function (){
var s__21418__$1 = s__21418;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21418__$1);
if(temp__5804__auto__){
var s__21418__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21418__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21418__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21420 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21419 = (0);
while(true){
if((i__21419 < size__4528__auto__)){
var vec__21421 = cljs.core._nth.call(null,c__4527__auto__,i__21419);
var k = cljs.core.nth.call(null,vec__21421,(0),null);
var _ = cljs.core.nth.call(null,vec__21421,(1),null);
cljs.core.chunk_append.call(null,b__21420,k);

var G__21430 = (i__21419 + (1));
i__21419 = G__21430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21420),tiltontec$web_mx$style$iter__21417.call(null,cljs.core.chunk_rest.call(null,s__21418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21420),null);
}
} else {
var vec__21424 = cljs.core.first.call(null,s__21418__$2);
var k = cljs.core.nth.call(null,vec__21424,(0),null);
var _ = cljs.core.nth.call(null,vec__21424,(1),null);
return cljs.core.cons.call(null,k,tiltontec$web_mx$style$iter__21417.call(null,cljs.core.rest.call(null,s__21418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.partition.call(null,(2),stylings));
})(),stylings);
}));

(tiltontec.web_mx.style.make_css_inline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.web_mx.style.make_css_inline.cljs$lang$applyTo = (function (seq21415){
var G__21416 = cljs.core.first.call(null,seq21415);
var seq21415__$1 = cljs.core.next.call(null,seq21415);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21416,seq21415__$1);
}));

tiltontec.web_mx.style.style_string = (function tiltontec$web_mx$style$style_string(s){
var ss = ((typeof s === 'string')?s:(((s == null))?"":((cljs.core.map_QMARK_.call(null,s))?clojure.string.join.call(null,";",(function (){var iter__4529__auto__ = (function tiltontec$web_mx$style$style_string_$_iter__21431(s__21432){
return (new cljs.core.LazySeq(null,(function (){
var s__21432__$1 = s__21432;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21432__$1);
if(temp__5804__auto__){
var s__21432__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21432__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21432__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21434 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21433 = (0);
while(true){
if((i__21433 < size__4528__auto__)){
var vec__21435 = cljs.core._nth.call(null,c__4527__auto__,i__21433);
var k = cljs.core.nth.call(null,vec__21435,(0),null);
var v = cljs.core.nth.call(null,vec__21435,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__21434,[cljs.core.name.call(null,k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.web_mx.base.kw$.call(null,v))].join(''));

var G__21441 = (i__21433 + (1));
i__21433 = G__21441;
continue;
} else {
var G__21442 = (i__21433 + (1));
i__21433 = G__21442;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21434),tiltontec$web_mx$style$style_string_$_iter__21431.call(null,cljs.core.chunk_rest.call(null,s__21432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21434),null);
}
} else {
var vec__21438 = cljs.core.first.call(null,s__21432__$2);
var k = cljs.core.nth.call(null,vec__21438,(0),null);
var v = cljs.core.nth.call(null,vec__21438,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,[cljs.core.name.call(null,k),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.web_mx.base.kw$.call(null,v))].join(''),tiltontec$web_mx$style$style_string_$_iter__21431.call(null,cljs.core.rest.call(null,s__21432__$2)));
} else {
var G__21443 = cljs.core.rest.call(null,s__21432__$2);
s__21432__$1 = G__21443;
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
return iter__4529__auto__.call(null,s);
})()):((cljs.core._EQ_.call(null,new cljs.core.Keyword("web-mx.css","css","web-mx.css/css",589703490),tiltontec.matrix.api.mx_type.call(null,s)))?tiltontec.web_mx.style.style_string.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,s),new cljs.core.Keyword(null,"css-keys","css-keys",876048944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)))):(function (){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"ss-unknown","ss-unknown",-2022604565),s,cljs.core.type.call(null,s));

return "";
})()

))));
return ss;
});
cljs.core._add_method.call(null,tiltontec.cell.poly.watch_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web-mx.css","css","web-mx.css/css",589703490)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.matrix.api.unbound)){
var dom = tiltontec.web_mx.base.tag_dom.call(null,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
return goog.style.setStyle(dom,cljs.core.name.call(null,slot),tiltontec.web_mx.base.kw$.call(null,newv));
} else {
return null;
}
}));

//# sourceMappingURL=style.js.map
