// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.matrix.api');
goog.require('tiltontec.web_mx.base');
goog.require('tiltontec.web_mx.style');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.html.sanitizer.HtmlSanitizer');
tiltontec.web_mx.html.tagfo = (function tiltontec$web_mx$html$tagfo(me){
if(typeof me === 'string'){
return "string";
} else {
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag,cljs.core.cst$kw$class,cljs.core.cst$kw$name], null));
}
});
tiltontec.web_mx.html.dom_has_class = (function tiltontec$web_mx$html$dom_has_class(dom,class$){
return goog.dom.classlist.contains(dom,class$);
});
tiltontec.web_mx.html.dom_ancestor_by_class = (function tiltontec$web_mx$html$dom_ancestor_by_class(dom,class$){
return goog.dom.getAncestorByTagNameAndClass(dom,null,class$);
});
tiltontec.web_mx.html.dom_ancestor_by_tag = (function tiltontec$web_mx$html$dom_ancestor_by_tag(dom,tag){
return goog.dom.getAncestorByTagNameAndClass(dom,tag);
});
tiltontec.web_mx.html.map_less_nils = (function tiltontec$web_mx$html$map_less_nils(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__18520(s__18521){
return (new cljs.core.LazySeq(null,(function (){
var s__18521__$1 = s__18521;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18521__$1);
if(temp__5804__auto__){
var s__18521__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18521__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18521__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18523 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18522 = (0);
while(true){
if((i__18522 < size__4528__auto__)){
var vec__18524 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18522);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(1),null);
if((v == null)){
cljs.core.chunk_append(b__18523,k);

var G__18530 = (i__18522 + (1));
i__18522 = G__18530;
continue;
} else {
var G__18531 = (i__18522 + (1));
i__18522 = G__18531;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18523),tiltontec$web_mx$html$map_less_nils_$_iter__18520(cljs.core.chunk_rest(s__18521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18523),null);
}
} else {
var vec__18527 = cljs.core.first(s__18521__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__18520(cljs.core.rest(s__18521__$2)));
} else {
var G__18532 = cljs.core.rest(s__18521__$2);
s__18521__$1 = G__18532;
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
return iter__4529__auto__(m);
})());
});
tiltontec.web_mx.html.class_to_class_string = (function tiltontec$web_mx$html$class_to_class_string(c){
if(cljs.core.coll_QMARK_(c)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.web_mx.base.kw$,c));
} else {
return tiltontec.web_mx.base.kw$(c);
}
});
tiltontec.web_mx.html.tag_properties = (function tiltontec$web_mx$html$tag_properties(mx){
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__18533(s__18534){
return (new cljs.core.LazySeq(null,(function (){
var s__18534__$1 = s__18534;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18534__$1);
if(temp__5804__auto__){
var s__18534__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18534__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18534__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18536 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18535 = (0);
while(true){
if((i__18535 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18535);
cljs.core.chunk_append(b__18536,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$so_DASH_sign_DASH_of_DASH_attr_DASH_key,k,cljs.core.cst$kw$in,cljs.core.deref(mx)], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.matrix.api.mget(mx,k);
})()
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__18537 = k;
var G__18537__$1 = (((G__18537 instanceof cljs.core.Keyword))?G__18537.fqn:null);
switch (G__18537__$1) {
case "style":
return tiltontec.web_mx.style.style_string(v);

break;
case "class":
return tiltontec.web_mx.html.class_to_class_string(v);

break;
default:
return tiltontec.web_mx.base.kw$(v);

}
})()], null);
} else {
return null;
}
})());

var G__18540 = (i__18535 + (1));
i__18535 = G__18540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18536),tiltontec$web_mx$html$tag_properties_$_iter__18533(cljs.core.chunk_rest(s__18534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18536),null);
}
} else {
var k = cljs.core.first(s__18534__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$so_DASH_sign_DASH_of_DASH_attr_DASH_key,k,cljs.core.cst$kw$in,cljs.core.deref(mx)], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.matrix.api.mget(mx,k);
})()
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__18538 = k;
var G__18538__$1 = (((G__18538 instanceof cljs.core.Keyword))?G__18538.fqn:null);
switch (G__18538__$1) {
case "style":
return tiltontec.web_mx.style.style_string(v);

break;
case "class":
return tiltontec.web_mx.html.class_to_class_string(v);

break;
default:
return tiltontec.web_mx.base.kw$(v);

}
})()], null);
} else {
return null;
}
})(),tiltontec$web_mx$html$tag_properties_$_iter__18533(cljs.core.rest(s__18534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mx)));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,beef));
});
tiltontec.web_mx.html.svg_dom_create = (function tiltontec$web_mx$html$svg_dom_create(me,dbg){
if(typeof me === 'string'){
return document.createTextNode(me);
} else {
var svg = document.createElementNS("http://www.w3.org/2000/svg",tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag));
tiltontec.matrix.api.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),svg);

tiltontec.matrix.api.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_DASH_x,me], null),svg);

svg.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");

var seq__18542_18556 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__18544_18557 = null;
var count__18545_18558 = (0);
var i__18546_18559 = (0);
while(true){
if((i__18546_18559 < count__18545_18558)){
var ak_18560 = chunk__18544_18557.cljs$core$IIndexed$_nth$arity$2(null,i__18546_18559);
var ak$_18561 = cljs.core.name(ak_18560);
var av_18562 = (function (){var G__18550 = cljs.core.deref(me);
return (ak_18560.cljs$core$IFn$_invoke$arity$1 ? ak_18560.cljs$core$IFn$_invoke$arity$1(G__18550) : ak_18560.call(null,G__18550));
})();
if(cljs.core.fn_QMARK_(av_18562)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_18561,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_18561,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_18561], 0));

return ak$_18561;
})()
),av_18562);
} else {
svg.setAttributeNS(null,ak$_18561,tiltontec.web_mx.base.attr_val$(av_18562));
}


var G__18563 = seq__18542_18556;
var G__18564 = chunk__18544_18557;
var G__18565 = count__18545_18558;
var G__18566 = (i__18546_18559 + (1));
seq__18542_18556 = G__18563;
chunk__18544_18557 = G__18564;
count__18545_18558 = G__18565;
i__18546_18559 = G__18566;
continue;
} else {
var temp__5804__auto___18567 = cljs.core.seq(seq__18542_18556);
if(temp__5804__auto___18567){
var seq__18542_18568__$1 = temp__5804__auto___18567;
if(cljs.core.chunked_seq_QMARK_(seq__18542_18568__$1)){
var c__4556__auto___18569 = cljs.core.chunk_first(seq__18542_18568__$1);
var G__18570 = cljs.core.chunk_rest(seq__18542_18568__$1);
var G__18571 = c__4556__auto___18569;
var G__18572 = cljs.core.count(c__4556__auto___18569);
var G__18573 = (0);
seq__18542_18556 = G__18570;
chunk__18544_18557 = G__18571;
count__18545_18558 = G__18572;
i__18546_18559 = G__18573;
continue;
} else {
var ak_18574 = cljs.core.first(seq__18542_18568__$1);
var ak$_18575 = cljs.core.name(ak_18574);
var av_18576 = (function (){var G__18551 = cljs.core.deref(me);
return (ak_18574.cljs$core$IFn$_invoke$arity$1 ? ak_18574.cljs$core$IFn$_invoke$arity$1(G__18551) : ak_18574.call(null,G__18551));
})();
if(cljs.core.fn_QMARK_(av_18576)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_18575,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_18575,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_18575], 0));

return ak$_18575;
})()
),av_18576);
} else {
svg.setAttributeNS(null,ak$_18575,tiltontec.web_mx.base.attr_val$(av_18576));
}


var G__18577 = cljs.core.next(seq__18542_18568__$1);
var G__18578 = null;
var G__18579 = (0);
var G__18580 = (0);
seq__18542_18556 = G__18577;
chunk__18544_18557 = G__18578;
count__18545_18558 = G__18579;
i__18546_18559 = G__18580;
continue;
}
} else {
}
}
break;
}

var seq__18552_18581 = cljs.core.seq(tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__18553_18582 = null;
var count__18554_18583 = (0);
var i__18555_18584 = (0);
while(true){
if((i__18555_18584 < count__18554_18583)){
var kid_18585 = chunk__18553_18582.cljs$core$IIndexed$_nth$arity$2(null,i__18555_18584);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_18585,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_18585,dbg)));


var G__18586 = seq__18552_18581;
var G__18587 = chunk__18553_18582;
var G__18588 = count__18554_18583;
var G__18589 = (i__18555_18584 + (1));
seq__18552_18581 = G__18586;
chunk__18553_18582 = G__18587;
count__18554_18583 = G__18588;
i__18555_18584 = G__18589;
continue;
} else {
var temp__5804__auto___18590 = cljs.core.seq(seq__18552_18581);
if(temp__5804__auto___18590){
var seq__18552_18591__$1 = temp__5804__auto___18590;
if(cljs.core.chunked_seq_QMARK_(seq__18552_18591__$1)){
var c__4556__auto___18592 = cljs.core.chunk_first(seq__18552_18591__$1);
var G__18593 = cljs.core.chunk_rest(seq__18552_18591__$1);
var G__18594 = c__4556__auto___18592;
var G__18595 = cljs.core.count(c__4556__auto___18592);
var G__18596 = (0);
seq__18552_18581 = G__18593;
chunk__18553_18582 = G__18594;
count__18554_18583 = G__18595;
i__18555_18584 = G__18596;
continue;
} else {
var kid_18597 = cljs.core.first(seq__18552_18591__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_18597,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_18597,dbg)));


var G__18598 = cljs.core.next(seq__18552_18591__$1);
var G__18599 = null;
var G__18600 = (0);
var G__18601 = (0);
seq__18552_18581 = G__18598;
chunk__18553_18582 = G__18599;
count__18554_18583 = G__18600;
i__18555_18584 = G__18601;
continue;
}
} else {
}
}
break;
}

return svg;

}
});
tiltontec.web_mx.html.tag_dom_create = (function tiltontec$web_mx$html$tag_dom_create(var_args){
var G__18604 = arguments.length;
switch (G__18604) {
case 1:
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1 = (function (me){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(me,false);
}));

(tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
return goog.dom.safeHtmlToNode(goog.html.sanitizer.HtmlSanitizer.sanitize(me));
} else {
if(cljs.core.coll_QMARK_(me)){
var frag = document.createDocumentFragment();
var seq__18605_18614 = cljs.core.seq(me);
var chunk__18606_18615 = null;
var count__18607_18616 = (0);
var i__18608_18617 = (0);
while(true){
if((i__18608_18617 < count__18607_18616)){
var tag_18618 = chunk__18606_18615.cljs$core$IIndexed$_nth$arity$2(null,i__18608_18617);
if(cljs.core.truth_(tag_18618)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_18618));
} else {
}


var G__18619 = seq__18605_18614;
var G__18620 = chunk__18606_18615;
var G__18621 = count__18607_18616;
var G__18622 = (i__18608_18617 + (1));
seq__18605_18614 = G__18619;
chunk__18606_18615 = G__18620;
count__18607_18616 = G__18621;
i__18608_18617 = G__18622;
continue;
} else {
var temp__5804__auto___18623 = cljs.core.seq(seq__18605_18614);
if(temp__5804__auto___18623){
var seq__18605_18624__$1 = temp__5804__auto___18623;
if(cljs.core.chunked_seq_QMARK_(seq__18605_18624__$1)){
var c__4556__auto___18625 = cljs.core.chunk_first(seq__18605_18624__$1);
var G__18626 = cljs.core.chunk_rest(seq__18605_18624__$1);
var G__18627 = c__4556__auto___18625;
var G__18628 = cljs.core.count(c__4556__auto___18625);
var G__18629 = (0);
seq__18605_18614 = G__18626;
chunk__18606_18615 = G__18627;
count__18607_18616 = G__18628;
i__18608_18617 = G__18629;
continue;
} else {
var tag_18630 = cljs.core.first(seq__18605_18624__$1);
if(cljs.core.truth_(tag_18630)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_18630));
} else {
}


var G__18631 = cljs.core.next(seq__18605_18624__$1);
var G__18632 = null;
var G__18633 = (0);
var G__18634 = (0);
seq__18605_18614 = G__18631;
chunk__18606_18615 = G__18632;
count__18607_18616 = G__18633;
i__18608_18617 = G__18634;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag))){
return tiltontec.web_mx.html.svg_dom_create(me,dbg);
} else {
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18602_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__18602_SHARP_,dbg);
}),tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$kids)),(function (){var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$content);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));
tiltontec.matrix.api.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),dom);

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,null], null), null),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var temp__5804__auto___18635 = tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___18635)){
var list_id_18636 = temp__5804__auto___18635;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_18636));
} else {
}
} else {
}

var seq__18609_18637 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__18610_18638 = null;
var count__18611_18639 = (0);
var i__18612_18640 = (0);
while(true){
if((i__18612_18640 < count__18611_18639)){
var attr_key_18641 = chunk__18610_18638.cljs$core$IIndexed$_nth$arity$2(null,i__18612_18640);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_18641),"-")){
var temp__5804__auto___18642 = tiltontec.matrix.api.mget(me,attr_key_18641);
if(cljs.core.truth_(temp__5804__auto___18642)){
var attr_val_18643 = temp__5804__auto___18642;
dom.setAttribute(cljs.core.name(attr_key_18641),tiltontec.web_mx.base.attr_val$(attr_val_18643));
} else {
}
} else {
}


var G__18644 = seq__18609_18637;
var G__18645 = chunk__18610_18638;
var G__18646 = count__18611_18639;
var G__18647 = (i__18612_18640 + (1));
seq__18609_18637 = G__18644;
chunk__18610_18638 = G__18645;
count__18611_18639 = G__18646;
i__18612_18640 = G__18647;
continue;
} else {
var temp__5804__auto___18648 = cljs.core.seq(seq__18609_18637);
if(temp__5804__auto___18648){
var seq__18609_18649__$1 = temp__5804__auto___18648;
if(cljs.core.chunked_seq_QMARK_(seq__18609_18649__$1)){
var c__4556__auto___18650 = cljs.core.chunk_first(seq__18609_18649__$1);
var G__18651 = cljs.core.chunk_rest(seq__18609_18649__$1);
var G__18652 = c__4556__auto___18650;
var G__18653 = cljs.core.count(c__4556__auto___18650);
var G__18654 = (0);
seq__18609_18637 = G__18651;
chunk__18610_18638 = G__18652;
count__18611_18639 = G__18653;
i__18612_18640 = G__18654;
continue;
} else {
var attr_key_18655 = cljs.core.first(seq__18609_18649__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_18655),"-")){
var temp__5804__auto___18656__$1 = tiltontec.matrix.api.mget(me,attr_key_18655);
if(cljs.core.truth_(temp__5804__auto___18656__$1)){
var attr_val_18657 = temp__5804__auto___18656__$1;
dom.setAttribute(cljs.core.name(attr_key_18655),tiltontec.web_mx.base.attr_val$(attr_val_18657));
} else {
}
} else {
}


var G__18658 = cljs.core.next(seq__18609_18649__$1);
var G__18659 = null;
var G__18660 = (0);
var G__18661 = (0);
seq__18609_18637 = G__18658;
chunk__18610_18638 = G__18659;
count__18611_18639 = G__18660;
i__18612_18640 = G__18661;
continue;
}
} else {
}
}
break;
}

return dom;

}
}
}
}));

(tiltontec.web_mx.html.tag_dom_create.cljs$lang$maxFixedArity = 2);

tiltontec.web_mx.html.tag = (function tiltontec$web_mx$html$tag(me){
return tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$tag);
});
tiltontec.cell.poly.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watchtagkids_BANG__BANG__BANG__BANG__BANG_,tiltontec.web_mx.html.tagfo(me),cljs.core.cst$kw$counts_DASH_new_DASH_old,cljs.core.count(newv),cljs.core.count(oldv),cljs.core.cst$kw$same_DASH_kids,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv),cljs.core.cst$kw$same_DASH_kid_DASH_set,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))], 0));

var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__18662_18682 = cljs.core.seq(newv);
var chunk__18663_18683 = null;
var count__18664_18684 = (0);
var i__18665_18685 = (0);
while(true){
if((i__18665_18685 < count__18664_18684)){
var newk_18686 = chunk__18663_18683.cljs$core$IIndexed$_nth$arity$2(null,i__18665_18685);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18686)));


var G__18687 = seq__18662_18682;
var G__18688 = chunk__18663_18683;
var G__18689 = count__18664_18684;
var G__18690 = (i__18665_18685 + (1));
seq__18662_18682 = G__18687;
chunk__18663_18683 = G__18688;
count__18664_18684 = G__18689;
i__18665_18685 = G__18690;
continue;
} else {
var temp__5804__auto___18691 = cljs.core.seq(seq__18662_18682);
if(temp__5804__auto___18691){
var seq__18662_18692__$1 = temp__5804__auto___18691;
if(cljs.core.chunked_seq_QMARK_(seq__18662_18692__$1)){
var c__4556__auto___18693 = cljs.core.chunk_first(seq__18662_18692__$1);
var G__18694 = cljs.core.chunk_rest(seq__18662_18692__$1);
var G__18695 = c__4556__auto___18693;
var G__18696 = cljs.core.count(c__4556__auto___18693);
var G__18697 = (0);
seq__18662_18682 = G__18694;
chunk__18663_18683 = G__18695;
count__18664_18684 = G__18696;
i__18665_18685 = G__18697;
continue;
} else {
var newk_18698 = cljs.core.first(seq__18662_18692__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18698)));


var G__18699 = cljs.core.next(seq__18662_18692__$1);
var G__18700 = null;
var G__18701 = (0);
var G__18702 = (0);
seq__18662_18682 = G__18699;
chunk__18663_18683 = G__18700;
count__18664_18684 = G__18701;
i__18665_18685 = G__18702;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);
} else {
if(cljs.core.empty_QMARK_(gained)){
var seq__18666 = cljs.core.seq(lost);
var chunk__18667 = null;
var count__18668 = (0);
var i__18669 = (0);
while(true){
if((i__18669 < count__18668)){
var oldk = chunk__18667.cljs$core$IIndexed$_nth$arity$2(null,i__18669);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$quiesce], null),cljs.core.cst$kw$tag_DASH_kids_DASH_watch_DASH_quiescing,tiltontec.matrix.api.minfo(oldk)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e18672){if((e18672 instanceof Error)){
var e_18703 = e18672;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_18703], 0));

} else {
throw e18672;

}
}}


var G__18704 = seq__18666;
var G__18705 = chunk__18667;
var G__18706 = count__18668;
var G__18707 = (i__18669 + (1));
seq__18666 = G__18704;
chunk__18667 = G__18705;
count__18668 = G__18706;
i__18669 = G__18707;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18666);
if(temp__5804__auto__){
var seq__18666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18666__$1);
var G__18708 = cljs.core.chunk_rest(seq__18666__$1);
var G__18709 = c__4556__auto__;
var G__18710 = cljs.core.count(c__4556__auto__);
var G__18711 = (0);
seq__18666 = G__18708;
chunk__18667 = G__18709;
count__18668 = G__18710;
i__18669 = G__18711;
continue;
} else {
var oldk = cljs.core.first(seq__18666__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$quiesce], null),cljs.core.cst$kw$tag_DASH_kids_DASH_watch_DASH_quiescing,tiltontec.matrix.api.minfo(oldk)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e18673){if((e18673 instanceof Error)){
var e_18712 = e18673;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_18712], 0));

} else {
throw e18673;

}
}}


var G__18713 = cljs.core.next(seq__18666__$1);
var G__18714 = null;
var G__18715 = (0);
var G__18716 = (0);
seq__18666 = G__18713;
chunk__18667 = G__18714;
count__18668 = G__18715;
i__18669 = G__18716;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$both_DASH_gained_DASH_n_DASH_lost,tiltontec.matrix.api.minfo(me)], 0));

var seq__18674_18717 = cljs.core.seq(lost);
var chunk__18675_18718 = null;
var count__18676_18719 = (0);
var i__18677_18720 = (0);
while(true){
if((i__18677_18720 < count__18676_18719)){
var oldk_18721 = chunk__18675_18718.cljs$core$IIndexed$_nth$arity$2(null,i__18677_18720);
if(typeof oldk_18721 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watch_DASH_kids_DASH_quiescing,tiltontec.matrix.api.minfo(oldk_18721)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18721) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18721));
}


var G__18722 = seq__18674_18717;
var G__18723 = chunk__18675_18718;
var G__18724 = count__18676_18719;
var G__18725 = (i__18677_18720 + (1));
seq__18674_18717 = G__18722;
chunk__18675_18718 = G__18723;
count__18676_18719 = G__18724;
i__18677_18720 = G__18725;
continue;
} else {
var temp__5804__auto___18726 = cljs.core.seq(seq__18674_18717);
if(temp__5804__auto___18726){
var seq__18674_18727__$1 = temp__5804__auto___18726;
if(cljs.core.chunked_seq_QMARK_(seq__18674_18727__$1)){
var c__4556__auto___18728 = cljs.core.chunk_first(seq__18674_18727__$1);
var G__18729 = cljs.core.chunk_rest(seq__18674_18727__$1);
var G__18730 = c__4556__auto___18728;
var G__18731 = cljs.core.count(c__4556__auto___18728);
var G__18732 = (0);
seq__18674_18717 = G__18729;
chunk__18675_18718 = G__18730;
count__18676_18719 = G__18731;
i__18677_18720 = G__18732;
continue;
} else {
var oldk_18733 = cljs.core.first(seq__18674_18727__$1);
if(typeof oldk_18733 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watch_DASH_kids_DASH_quiescing,tiltontec.matrix.api.minfo(oldk_18733)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18733) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18733));
}


var G__18734 = cljs.core.next(seq__18674_18727__$1);
var G__18735 = null;
var G__18736 = (0);
var G__18737 = (0);
seq__18674_18717 = G__18734;
chunk__18675_18718 = G__18735;
count__18676_18719 = G__18736;
i__18677_18720 = G__18737;
continue;
}
} else {
}
}
break;
}

var seq__18678_18738 = cljs.core.seq(newv);
var chunk__18679_18739 = null;
var count__18680_18740 = (0);
var i__18681_18741 = (0);
while(true){
if((i__18681_18741 < count__18680_18740)){
var newk_18742 = chunk__18679_18739.cljs$core$IIndexed$_nth$arity$2(null,i__18681_18741);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18742]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18742)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_18742)));


var G__18743 = seq__18678_18738;
var G__18744 = chunk__18679_18739;
var G__18745 = count__18680_18740;
var G__18746 = (i__18681_18741 + (1));
seq__18678_18738 = G__18743;
chunk__18679_18739 = G__18744;
count__18680_18740 = G__18745;
i__18681_18741 = G__18746;
continue;
} else {
var temp__5804__auto___18747 = cljs.core.seq(seq__18678_18738);
if(temp__5804__auto___18747){
var seq__18678_18748__$1 = temp__5804__auto___18747;
if(cljs.core.chunked_seq_QMARK_(seq__18678_18748__$1)){
var c__4556__auto___18749 = cljs.core.chunk_first(seq__18678_18748__$1);
var G__18750 = cljs.core.chunk_rest(seq__18678_18748__$1);
var G__18751 = c__4556__auto___18749;
var G__18752 = cljs.core.count(c__4556__auto___18749);
var G__18753 = (0);
seq__18678_18738 = G__18750;
chunk__18679_18739 = G__18751;
count__18680_18740 = G__18752;
i__18681_18741 = G__18753;
continue;
} else {
var newk_18754 = cljs.core.first(seq__18678_18748__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18754]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18754)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_18754)));


var G__18755 = cljs.core.next(seq__18678_18748__$1);
var G__18756 = null;
var G__18757 = (0);
var G__18758 = (0);
seq__18678_18738 = G__18755;
chunk__18679_18739 = G__18756;
count__18680_18740 = G__18757;
i__18681_18741 = G__18758;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
}
} else {
return null;
}
}));
tiltontec.web_mx.html.svg_dom = (function tiltontec$web_mx$html$svg_dom(me){
return cljs.core.cst$kw$dom_DASH_x.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
});
tiltontec.cell.poly.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
var pdom = tiltontec.web_mx.html.svg_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
var kept = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(cljs.core.truth_(pdom)){
} else {
throw (new Error("Assert failed: pdom"));
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__18759_18779 = cljs.core.seq(newv);
var chunk__18760_18780 = null;
var count__18761_18781 = (0);
var i__18762_18782 = (0);
while(true){
if((i__18762_18782 < count__18761_18781)){
var newk_18783 = chunk__18760_18780.cljs$core$IIndexed$_nth$arity$2(null,i__18762_18782);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18783)));


var G__18784 = seq__18759_18779;
var G__18785 = chunk__18760_18780;
var G__18786 = count__18761_18781;
var G__18787 = (i__18762_18782 + (1));
seq__18759_18779 = G__18784;
chunk__18760_18780 = G__18785;
count__18761_18781 = G__18786;
i__18762_18782 = G__18787;
continue;
} else {
var temp__5804__auto___18788 = cljs.core.seq(seq__18759_18779);
if(temp__5804__auto___18788){
var seq__18759_18789__$1 = temp__5804__auto___18788;
if(cljs.core.chunked_seq_QMARK_(seq__18759_18789__$1)){
var c__4556__auto___18790 = cljs.core.chunk_first(seq__18759_18789__$1);
var G__18791 = cljs.core.chunk_rest(seq__18759_18789__$1);
var G__18792 = c__4556__auto___18790;
var G__18793 = cljs.core.count(c__4556__auto___18790);
var G__18794 = (0);
seq__18759_18779 = G__18791;
chunk__18760_18780 = G__18792;
count__18761_18781 = G__18793;
i__18762_18782 = G__18794;
continue;
} else {
var newk_18795 = cljs.core.first(seq__18759_18789__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18795)));


var G__18796 = cljs.core.next(seq__18759_18789__$1);
var G__18797 = null;
var G__18798 = (0);
var G__18799 = (0);
seq__18759_18779 = G__18796;
chunk__18760_18780 = G__18797;
count__18761_18781 = G__18798;
i__18762_18782 = G__18799;
continue;
}
} else {
}
}
break;
}

return goog.dom.appendChild(pdom,frag);
} else {
if(cljs.core.empty_QMARK_(gained)){
var seq__18763 = cljs.core.seq(lost);
var chunk__18764 = null;
var count__18765 = (0);
var i__18766 = (0);
while(true){
if((i__18766 < count__18765)){
var oldk = chunk__18764.cljs$core$IIndexed$_nth$arity$2(null,i__18766);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__18800 = seq__18763;
var G__18801 = chunk__18764;
var G__18802 = count__18765;
var G__18803 = (i__18766 + (1));
seq__18763 = G__18800;
chunk__18764 = G__18801;
count__18765 = G__18802;
i__18766 = G__18803;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18763);
if(temp__5804__auto__){
var seq__18763__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18763__$1);
var G__18804 = cljs.core.chunk_rest(seq__18763__$1);
var G__18805 = c__4556__auto__;
var G__18806 = cljs.core.count(c__4556__auto__);
var G__18807 = (0);
seq__18763 = G__18804;
chunk__18764 = G__18805;
count__18765 = G__18806;
i__18766 = G__18807;
continue;
} else {
var oldk = cljs.core.first(seq__18763__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__18808 = cljs.core.next(seq__18763__$1);
var G__18809 = null;
var G__18810 = (0);
var G__18811 = (0);
seq__18763 = G__18808;
chunk__18764 = G__18809;
count__18765 = G__18810;
i__18766 = G__18811;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.empty_QMARK_(lost)){
var seq__18767 = cljs.core.seq(gained);
var chunk__18768 = null;
var count__18769 = (0);
var i__18770 = (0);
while(true){
if((i__18770 < count__18769)){
var newk = chunk__18768.cljs$core$IIndexed$_nth$arity$2(null,i__18770);
var new_dom_18812 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_18812);


var G__18813 = seq__18767;
var G__18814 = chunk__18768;
var G__18815 = count__18769;
var G__18816 = (i__18770 + (1));
seq__18767 = G__18813;
chunk__18768 = G__18814;
count__18769 = G__18815;
i__18770 = G__18816;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18767);
if(temp__5804__auto__){
var seq__18767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18767__$1);
var G__18817 = cljs.core.chunk_rest(seq__18767__$1);
var G__18818 = c__4556__auto__;
var G__18819 = cljs.core.count(c__4556__auto__);
var G__18820 = (0);
seq__18767 = G__18817;
chunk__18768 = G__18818;
count__18769 = G__18819;
i__18770 = G__18820;
continue;
} else {
var newk = cljs.core.first(seq__18767__$1);
var new_dom_18821 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_18821);


var G__18822 = cljs.core.next(seq__18767__$1);
var G__18823 = null;
var G__18824 = (0);
var G__18825 = (0);
seq__18767 = G__18822;
chunk__18768 = G__18823;
count__18769 = G__18824;
i__18770 = G__18825;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
var seq__18771_18826 = cljs.core.seq(lost);
var chunk__18772_18827 = null;
var count__18773_18828 = (0);
var i__18774_18829 = (0);
while(true){
if((i__18774_18829 < count__18773_18828)){
var oldk_18830 = chunk__18772_18827.cljs$core$IIndexed$_nth$arity$2(null,i__18774_18829);
if(typeof oldk_18830 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18830) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18830));
}


var G__18831 = seq__18771_18826;
var G__18832 = chunk__18772_18827;
var G__18833 = count__18773_18828;
var G__18834 = (i__18774_18829 + (1));
seq__18771_18826 = G__18831;
chunk__18772_18827 = G__18832;
count__18773_18828 = G__18833;
i__18774_18829 = G__18834;
continue;
} else {
var temp__5804__auto___18835 = cljs.core.seq(seq__18771_18826);
if(temp__5804__auto___18835){
var seq__18771_18836__$1 = temp__5804__auto___18835;
if(cljs.core.chunked_seq_QMARK_(seq__18771_18836__$1)){
var c__4556__auto___18837 = cljs.core.chunk_first(seq__18771_18836__$1);
var G__18838 = cljs.core.chunk_rest(seq__18771_18836__$1);
var G__18839 = c__4556__auto___18837;
var G__18840 = cljs.core.count(c__4556__auto___18837);
var G__18841 = (0);
seq__18771_18826 = G__18838;
chunk__18772_18827 = G__18839;
count__18773_18828 = G__18840;
i__18774_18829 = G__18841;
continue;
} else {
var oldk_18842 = cljs.core.first(seq__18771_18836__$1);
if(typeof oldk_18842 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18842) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18842));
}


var G__18843 = cljs.core.next(seq__18771_18836__$1);
var G__18844 = null;
var G__18845 = (0);
var G__18846 = (0);
seq__18771_18826 = G__18843;
chunk__18772_18827 = G__18844;
count__18773_18828 = G__18845;
i__18774_18829 = G__18846;
continue;
}
} else {
}
}
break;
}

var seq__18775_18847 = cljs.core.seq(newv);
var chunk__18776_18848 = null;
var count__18777_18849 = (0);
var i__18778_18850 = (0);
while(true){
if((i__18778_18850 < count__18777_18849)){
var newk_18851 = chunk__18776_18848.cljs$core$IIndexed$_nth$arity$2(null,i__18778_18850);
var new_dom_18852 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18851]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18851)):tiltontec.web_mx.html.svg_dom_create(newk_18851,false));
goog.dom.appendChild(frag,new_dom_18852);


var G__18853 = seq__18775_18847;
var G__18854 = chunk__18776_18848;
var G__18855 = count__18777_18849;
var G__18856 = (i__18778_18850 + (1));
seq__18775_18847 = G__18853;
chunk__18776_18848 = G__18854;
count__18777_18849 = G__18855;
i__18778_18850 = G__18856;
continue;
} else {
var temp__5804__auto___18857 = cljs.core.seq(seq__18775_18847);
if(temp__5804__auto___18857){
var seq__18775_18858__$1 = temp__5804__auto___18857;
if(cljs.core.chunked_seq_QMARK_(seq__18775_18858__$1)){
var c__4556__auto___18859 = cljs.core.chunk_first(seq__18775_18858__$1);
var G__18860 = cljs.core.chunk_rest(seq__18775_18858__$1);
var G__18861 = c__4556__auto___18859;
var G__18862 = cljs.core.count(c__4556__auto___18859);
var G__18863 = (0);
seq__18775_18847 = G__18860;
chunk__18776_18848 = G__18861;
count__18777_18849 = G__18862;
i__18778_18850 = G__18863;
continue;
} else {
var newk_18864 = cljs.core.first(seq__18775_18858__$1);
var new_dom_18865 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18864]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18864)):tiltontec.web_mx.html.svg_dom_create(newk_18864,false));
goog.dom.appendChild(frag,new_dom_18865);


var G__18866 = cljs.core.next(seq__18775_18858__$1);
var G__18867 = null;
var G__18868 = (0);
var G__18869 = (0);
seq__18775_18847 = G__18866;
chunk__18776_18848 = G__18867;
count__18777_18849 = G__18868;
i__18778_18850 = G__18869;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
}
}
} else {
return null;
}
}));
tiltontec.web_mx.html._PLUS_inline_css_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display], null));
tiltontec.web_mx.html.mixo = (function tiltontec$web_mx$html$mixo(me){
if((me == null)){
return cljs.core.cst$kw$NIL_DASH_MD;
} else {
if((!(tiltontec.matrix.api.any_ref_QMARK_(me)))){
return cljs.core.cst$kw$NOT_DASH_ANY_DASH_REF;
} else {
if((!(tiltontec.matrix.api.md_ref_QMARK_(me)))){
return cljs.core.cst$kw$NOT_DASH_MD;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$anon;
}
})(),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))], null);

}
}
}
});
tiltontec.cell.poly.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
var temp__5804__auto__ = tiltontec.web_mx.base.tag_dom(me);
if(cljs.core.truth_(temp__5804__auto__)){
var dom = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$content)){
return window.requestAnimationFrame((function (){
return (dom.innerHTML = newv);
}));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var G__18870 = slot;
var G__18870__$1 = (((G__18870 instanceof cljs.core.Keyword))?G__18870.fqn:null);
switch (G__18870__$1) {
case "style":
return (dom.style = tiltontec.web_mx.style.style_string(newv));

break;
case "hidden":
return (dom.hidden = newv);

break;
case "disabled":
if(cljs.core.truth_(newv)){
return dom.setAttribute("disabled",true);
} else {
return dom.removeAttribute("disabled");
}

break;
case "class":
var G__18871 = dom;
var G__18872 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__18871,G__18872);

break;
case "checked":
return (dom.checked = newv);

break;
case "value":
return dom.setAttribute("value",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newv));

break;
default:
return dom.setAttribute(cljs.core.name(slot),newv);

}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));
tiltontec.cell.poly.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var temp__5802__auto__ = cljs.core.cst$kw$dom_DASH_x.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5802__auto__)){
var svg = temp__5802__auto__;
return svg.setAttributeNS(null,cljs.core.name(slot),tiltontec.web_mx.base.attr_val$(newv));
} else {
return null;
}
} else {
return null;

}
} else {
return null;
}
}));
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.web_mx.html.mxu_find_class = (function tiltontec$web_mx$html$mxu_find_class(where,class$){
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18874_SHARP_){
var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_(p1__18874_SHARP_,cljs.core.cst$kw$class);
if(cljs.core.truth_(temp__5804__auto__)){
var its_class = temp__5804__auto__;
return clojure.string.includes_QMARK_((function (){var or__4126__auto__ = tiltontec.web_mx.html.class_to_class_string(its_class);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "makebetter";
}
})(),tiltontec.web_mx.base.kw$(class$));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element of a certain tag
 */
tiltontec.web_mx.html.mxu_find_tag = (function tiltontec$web_mx$html$mxu_find_tag(where,tag){
var n = cljs.core.name(tag);
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.matrix.api.mget_QMARK_(p1__18875_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18876_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.matrix.api.mget_QMARK_(p1__18876_SHARP_,cljs.core.cst$kw$id));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
tiltontec.web_mx.html.io_upsert = (function tiltontec$web_mx$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.web_mx.html.io_read = (function tiltontec$web_mx$html$io_read(key){
return window.localStorage.getItem(key);
});
tiltontec.web_mx.html.io_delete = (function tiltontec$web_mx$html$io_delete(key){
return window.localStorage.removeItem(key);
});
tiltontec.web_mx.html.io_clear_storage = (function tiltontec$web_mx$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.web_mx.html.io_all_keys = (function tiltontec$web_mx$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.web_mx.html.io_find = (function tiltontec$web_mx$html$io_find(key_prefix){
var keys = tiltontec.web_mx.html.io_all_keys();
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(keys)){
var G__18877 = cljs.core.rest(keys);
var G__18878 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__18877;
found = G__18878;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__18879 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__18880 = null;
var count__18881 = (0);
var i__18882 = (0);
while(true){
if((i__18882 < count__18881)){
var key = chunk__18880.cljs$core$IIndexed$_nth$arity$2(null,i__18882);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__18883 = seq__18879;
var G__18884 = chunk__18880;
var G__18885 = count__18881;
var G__18886 = (i__18882 + (1));
seq__18879 = G__18883;
chunk__18880 = G__18884;
count__18881 = G__18885;
i__18882 = G__18886;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18879);
if(temp__5804__auto__){
var seq__18879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18879__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18879__$1);
var G__18887 = cljs.core.chunk_rest(seq__18879__$1);
var G__18888 = c__4556__auto__;
var G__18889 = cljs.core.count(c__4556__auto__);
var G__18890 = (0);
seq__18879 = G__18887;
chunk__18880 = G__18888;
count__18881 = G__18889;
i__18882 = G__18890;
continue;
} else {
var key = cljs.core.first(seq__18879__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__18891 = cljs.core.next(seq__18879__$1);
var G__18892 = null;
var G__18893 = (0);
var G__18894 = (0);
seq__18879 = G__18891;
chunk__18880 = G__18892;
count__18881 = G__18893;
i__18882 = G__18894;
continue;
}
} else {
return null;
}
}
break;
}
});
