// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.base');
goog.require('tiltontec.web_mx.style');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.html.sanitizer.HtmlSanitizer');
goog.require('goog.editor.focus');
goog.require('goog.dom.selection');
goog.require('goog.dom.forms');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28511(s__28512){
return (new cljs.core.LazySeq(null,(function (){
var s__28512__$1 = s__28512;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28512__$1);
if(temp__5804__auto__){
var s__28512__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28512__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28512__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28514 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28513 = (0);
while(true){
if((i__28513 < size__4528__auto__)){
var vec__28515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28513);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28515,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28514,k);

var G__28521 = (i__28513 + (1));
i__28513 = G__28521;
continue;
} else {
var G__28522 = (i__28513 + (1));
i__28513 = G__28522;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28514),tiltontec$web_mx$html$map_less_nils_$_iter__28511(cljs.core.chunk_rest(s__28512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28514),null);
}
} else {
var vec__28518 = cljs.core.first(s__28512__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28518,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28511(cljs.core.rest(s__28512__$2)));
} else {
var G__28523 = cljs.core.rest(s__28512__$2);
s__28512__$1 = G__28523;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28524(s__28525){
return (new cljs.core.LazySeq(null,(function (){
var s__28525__$1 = s__28525;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28525__$1);
if(temp__5804__auto__){
var s__28525__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28525__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28525__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28527 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28526 = (0);
while(true){
if((i__28526 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28526);
cljs.core.chunk_append(b__28527,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28528 = k;
var G__28528__$1 = (((G__28528 instanceof cljs.core.Keyword))?G__28528.fqn:null);
switch (G__28528__$1) {
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

var G__28531 = (i__28526 + (1));
i__28526 = G__28531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28527),tiltontec$web_mx$html$tag_properties_$_iter__28524(cljs.core.chunk_rest(s__28525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28527),null);
}
} else {
var k = cljs.core.first(s__28525__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28529 = k;
var G__28529__$1 = (((G__28529 instanceof cljs.core.Keyword))?G__28529.fqn:null);
switch (G__28529__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28524(cljs.core.rest(s__28525__$2)));
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
var svg = document.createElementNS("http://www.w3.org/2000/svg",tiltontec.model.core.mget(me,cljs.core.cst$kw$tag));
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),svg);

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg_DASH_x,me], null),svg);

svg.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");

var seq__28533_28547 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28535_28548 = null;
var count__28536_28549 = (0);
var i__28537_28550 = (0);
while(true){
if((i__28537_28550 < count__28536_28549)){
var ak_28551 = chunk__28535_28548.cljs$core$IIndexed$_nth$arity$2(null,i__28537_28550);
var ak$_28552 = cljs.core.name(ak_28551);
var av_28553 = (function (){var G__28541 = cljs.core.deref(me);
return (ak_28551.cljs$core$IFn$_invoke$arity$1 ? ak_28551.cljs$core$IFn$_invoke$arity$1(G__28541) : ak_28551.call(null,G__28541));
})();
if(cljs.core.fn_QMARK_(av_28553)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28552,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28552,(2)):ak$_28552),av_28553);
} else {
svg.setAttributeNS(null,ak$_28552,tiltontec.web_mx.base.attr_val$(av_28553));
}


var G__28554 = seq__28533_28547;
var G__28555 = chunk__28535_28548;
var G__28556 = count__28536_28549;
var G__28557 = (i__28537_28550 + (1));
seq__28533_28547 = G__28554;
chunk__28535_28548 = G__28555;
count__28536_28549 = G__28556;
i__28537_28550 = G__28557;
continue;
} else {
var temp__5804__auto___28558 = cljs.core.seq(seq__28533_28547);
if(temp__5804__auto___28558){
var seq__28533_28559__$1 = temp__5804__auto___28558;
if(cljs.core.chunked_seq_QMARK_(seq__28533_28559__$1)){
var c__4556__auto___28560 = cljs.core.chunk_first(seq__28533_28559__$1);
var G__28561 = cljs.core.chunk_rest(seq__28533_28559__$1);
var G__28562 = c__4556__auto___28560;
var G__28563 = cljs.core.count(c__4556__auto___28560);
var G__28564 = (0);
seq__28533_28547 = G__28561;
chunk__28535_28548 = G__28562;
count__28536_28549 = G__28563;
i__28537_28550 = G__28564;
continue;
} else {
var ak_28565 = cljs.core.first(seq__28533_28559__$1);
var ak$_28566 = cljs.core.name(ak_28565);
var av_28567 = (function (){var G__28542 = cljs.core.deref(me);
return (ak_28565.cljs$core$IFn$_invoke$arity$1 ? ak_28565.cljs$core$IFn$_invoke$arity$1(G__28542) : ak_28565.call(null,G__28542));
})();
if(cljs.core.fn_QMARK_(av_28567)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28566,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28566,(2)):ak$_28566),av_28567);
} else {
svg.setAttributeNS(null,ak$_28566,tiltontec.web_mx.base.attr_val$(av_28567));
}


var G__28568 = cljs.core.next(seq__28533_28559__$1);
var G__28569 = null;
var G__28570 = (0);
var G__28571 = (0);
seq__28533_28547 = G__28568;
chunk__28535_28548 = G__28569;
count__28536_28549 = G__28570;
i__28537_28550 = G__28571;
continue;
}
} else {
}
}
break;
}

var seq__28543_28572 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28544_28573 = null;
var count__28545_28574 = (0);
var i__28546_28575 = (0);
while(true){
if((i__28546_28575 < count__28545_28574)){
var kid_28576 = chunk__28544_28573.cljs$core$IIndexed$_nth$arity$2(null,i__28546_28575);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28576,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28576,dbg)));


var G__28577 = seq__28543_28572;
var G__28578 = chunk__28544_28573;
var G__28579 = count__28545_28574;
var G__28580 = (i__28546_28575 + (1));
seq__28543_28572 = G__28577;
chunk__28544_28573 = G__28578;
count__28545_28574 = G__28579;
i__28546_28575 = G__28580;
continue;
} else {
var temp__5804__auto___28581 = cljs.core.seq(seq__28543_28572);
if(temp__5804__auto___28581){
var seq__28543_28582__$1 = temp__5804__auto___28581;
if(cljs.core.chunked_seq_QMARK_(seq__28543_28582__$1)){
var c__4556__auto___28583 = cljs.core.chunk_first(seq__28543_28582__$1);
var G__28584 = cljs.core.chunk_rest(seq__28543_28582__$1);
var G__28585 = c__4556__auto___28583;
var G__28586 = cljs.core.count(c__4556__auto___28583);
var G__28587 = (0);
seq__28543_28572 = G__28584;
chunk__28544_28573 = G__28585;
count__28545_28574 = G__28586;
i__28546_28575 = G__28587;
continue;
} else {
var kid_28588 = cljs.core.first(seq__28543_28582__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28588,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28588,dbg)));


var G__28589 = cljs.core.next(seq__28543_28582__$1);
var G__28590 = null;
var G__28591 = (0);
var G__28592 = (0);
seq__28543_28572 = G__28589;
chunk__28544_28573 = G__28590;
count__28545_28574 = G__28591;
i__28546_28575 = G__28592;
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
var G__28595 = arguments.length;
switch (G__28595) {
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
var seq__28596_28605 = cljs.core.seq(me);
var chunk__28597_28606 = null;
var count__28598_28607 = (0);
var i__28599_28608 = (0);
while(true){
if((i__28599_28608 < count__28598_28607)){
var tag_28609 = chunk__28597_28606.cljs$core$IIndexed$_nth$arity$2(null,i__28599_28608);
if(cljs.core.truth_(tag_28609)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28609));
} else {
}


var G__28610 = seq__28596_28605;
var G__28611 = chunk__28597_28606;
var G__28612 = count__28598_28607;
var G__28613 = (i__28599_28608 + (1));
seq__28596_28605 = G__28610;
chunk__28597_28606 = G__28611;
count__28598_28607 = G__28612;
i__28599_28608 = G__28613;
continue;
} else {
var temp__5804__auto___28614 = cljs.core.seq(seq__28596_28605);
if(temp__5804__auto___28614){
var seq__28596_28615__$1 = temp__5804__auto___28614;
if(cljs.core.chunked_seq_QMARK_(seq__28596_28615__$1)){
var c__4556__auto___28616 = cljs.core.chunk_first(seq__28596_28615__$1);
var G__28617 = cljs.core.chunk_rest(seq__28596_28615__$1);
var G__28618 = c__4556__auto___28616;
var G__28619 = cljs.core.count(c__4556__auto___28616);
var G__28620 = (0);
seq__28596_28605 = G__28617;
chunk__28597_28606 = G__28618;
count__28598_28607 = G__28619;
i__28599_28608 = G__28620;
continue;
} else {
var tag_28621 = cljs.core.first(seq__28596_28615__$1);
if(cljs.core.truth_(tag_28621)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28621));
} else {
}


var G__28622 = cljs.core.next(seq__28596_28615__$1);
var G__28623 = null;
var G__28624 = (0);
var G__28625 = (0);
seq__28596_28605 = G__28622;
chunk__28597_28606 = G__28623;
count__28598_28607 = G__28624;
i__28599_28608 = G__28625;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tiltontec.model.core.mget(me,cljs.core.cst$kw$tag))){
return tiltontec.web_mx.html.svg_dom_create(me,dbg);
} else {
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28593_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28593_SHARP_,dbg);
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kids)),(function (){var temp__5804__auto__ = tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$content);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),dom);

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,null], null), null),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var temp__5804__auto___28626 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28626)){
var list_id_28627 = temp__5804__auto___28626;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28627));
} else {
}
} else {
}

var seq__28600_28628 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28601_28629 = null;
var count__28602_28630 = (0);
var i__28603_28631 = (0);
while(true){
if((i__28603_28631 < count__28602_28630)){
var attr_key_28632 = chunk__28601_28629.cljs$core$IIndexed$_nth$arity$2(null,i__28603_28631);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28632),"-")){
var temp__5804__auto___28633 = tiltontec.model.core.mget(me,attr_key_28632);
if(cljs.core.truth_(temp__5804__auto___28633)){
var attr_val_28634 = temp__5804__auto___28633;
dom.setAttribute(cljs.core.name(attr_key_28632),tiltontec.web_mx.base.attr_val$(attr_val_28634));
} else {
}
} else {
}


var G__28635 = seq__28600_28628;
var G__28636 = chunk__28601_28629;
var G__28637 = count__28602_28630;
var G__28638 = (i__28603_28631 + (1));
seq__28600_28628 = G__28635;
chunk__28601_28629 = G__28636;
count__28602_28630 = G__28637;
i__28603_28631 = G__28638;
continue;
} else {
var temp__5804__auto___28639 = cljs.core.seq(seq__28600_28628);
if(temp__5804__auto___28639){
var seq__28600_28640__$1 = temp__5804__auto___28639;
if(cljs.core.chunked_seq_QMARK_(seq__28600_28640__$1)){
var c__4556__auto___28641 = cljs.core.chunk_first(seq__28600_28640__$1);
var G__28642 = cljs.core.chunk_rest(seq__28600_28640__$1);
var G__28643 = c__4556__auto___28641;
var G__28644 = cljs.core.count(c__4556__auto___28641);
var G__28645 = (0);
seq__28600_28628 = G__28642;
chunk__28601_28629 = G__28643;
count__28602_28630 = G__28644;
i__28603_28631 = G__28645;
continue;
} else {
var attr_key_28646 = cljs.core.first(seq__28600_28640__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28646),"-")){
var temp__5804__auto___28647__$1 = tiltontec.model.core.mget(me,attr_key_28646);
if(cljs.core.truth_(temp__5804__auto___28647__$1)){
var attr_val_28648 = temp__5804__auto___28647__$1;
dom.setAttribute(cljs.core.name(attr_key_28646),tiltontec.web_mx.base.attr_val$(attr_val_28648));
} else {
}
} else {
}


var G__28649 = cljs.core.next(seq__28600_28640__$1);
var G__28650 = null;
var G__28651 = (0);
var G__28652 = (0);
seq__28600_28628 = G__28649;
chunk__28601_28629 = G__28650;
count__28602_28630 = G__28651;
i__28603_28631 = G__28652;
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

tiltontec.web_mx.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tiltontec$web_DASH_mx$html_SLASH_type,"type"], null);
tiltontec.web_mx.html.true_html = (function tiltontec$web_mx$html$true_html(keyword){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$true_DASH_h_DASH_naming_QMARK_,keyword], 0));

var or__4126__auto__ = (keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(tiltontec.web_mx.html._PLUS_true_html_PLUS_) : keyword.call(null,tiltontec.web_mx.html._PLUS_true_html_PLUS_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.base.kw$(keyword);
}
});
tiltontec.web_mx.html.tag = (function tiltontec$web_mx$html$tag(me){
return tiltontec.model.core.mget(me,cljs.core.cst$kw$tag);
});
tiltontec.web_mx.html.tag_QMARK_ = (function tiltontec$web_mx$html$tag_QMARK_(me){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.util.base.type_cljc(me),cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag);
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__28653_28673 = cljs.core.seq(newv);
var chunk__28654_28674 = null;
var count__28655_28675 = (0);
var i__28656_28676 = (0);
while(true){
if((i__28656_28676 < count__28655_28675)){
var newk_28677 = chunk__28654_28674.cljs$core$IIndexed$_nth$arity$2(null,i__28656_28676);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28677)));


var G__28678 = seq__28653_28673;
var G__28679 = chunk__28654_28674;
var G__28680 = count__28655_28675;
var G__28681 = (i__28656_28676 + (1));
seq__28653_28673 = G__28678;
chunk__28654_28674 = G__28679;
count__28655_28675 = G__28680;
i__28656_28676 = G__28681;
continue;
} else {
var temp__5804__auto___28682 = cljs.core.seq(seq__28653_28673);
if(temp__5804__auto___28682){
var seq__28653_28683__$1 = temp__5804__auto___28682;
if(cljs.core.chunked_seq_QMARK_(seq__28653_28683__$1)){
var c__4556__auto___28684 = cljs.core.chunk_first(seq__28653_28683__$1);
var G__28685 = cljs.core.chunk_rest(seq__28653_28683__$1);
var G__28686 = c__4556__auto___28684;
var G__28687 = cljs.core.count(c__4556__auto___28684);
var G__28688 = (0);
seq__28653_28673 = G__28685;
chunk__28654_28674 = G__28686;
count__28655_28675 = G__28687;
i__28656_28676 = G__28688;
continue;
} else {
var newk_28689 = cljs.core.first(seq__28653_28683__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28689)));


var G__28690 = cljs.core.next(seq__28653_28683__$1);
var G__28691 = null;
var G__28692 = (0);
var G__28693 = (0);
seq__28653_28673 = G__28690;
chunk__28654_28674 = G__28691;
count__28655_28675 = G__28692;
i__28656_28676 = G__28693;
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
var seq__28657 = cljs.core.seq(lost);
var chunk__28658 = null;
var count__28659 = (0);
var i__28660 = (0);
while(true){
if((i__28660 < count__28659)){
var oldk = chunk__28658.cljs$core$IIndexed$_nth$arity$2(null,i__28660);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28663){if((e28663 instanceof Error)){
var e_28694 = e28663;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28694], 0));

} else {
throw e28663;

}
}}


var G__28695 = seq__28657;
var G__28696 = chunk__28658;
var G__28697 = count__28659;
var G__28698 = (i__28660 + (1));
seq__28657 = G__28695;
chunk__28658 = G__28696;
count__28659 = G__28697;
i__28660 = G__28698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28657);
if(temp__5804__auto__){
var seq__28657__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28657__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28657__$1);
var G__28699 = cljs.core.chunk_rest(seq__28657__$1);
var G__28700 = c__4556__auto__;
var G__28701 = cljs.core.count(c__4556__auto__);
var G__28702 = (0);
seq__28657 = G__28699;
chunk__28658 = G__28700;
count__28659 = G__28701;
i__28660 = G__28702;
continue;
} else {
var oldk = cljs.core.first(seq__28657__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28664){if((e28664 instanceof Error)){
var e_28703 = e28664;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28703], 0));

} else {
throw e28664;

}
}}


var G__28704 = cljs.core.next(seq__28657__$1);
var G__28705 = null;
var G__28706 = (0);
var G__28707 = (0);
seq__28657 = G__28704;
chunk__28658 = G__28705;
count__28659 = G__28706;
i__28660 = G__28707;
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
var seq__28665_28708 = cljs.core.seq(lost);
var chunk__28666_28709 = null;
var count__28667_28710 = (0);
var i__28668_28711 = (0);
while(true){
if((i__28668_28711 < count__28667_28710)){
var oldk_28712 = chunk__28666_28709.cljs$core$IIndexed$_nth$arity$2(null,i__28668_28711);
if(typeof oldk_28712 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28712) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28712));
}


var G__28713 = seq__28665_28708;
var G__28714 = chunk__28666_28709;
var G__28715 = count__28667_28710;
var G__28716 = (i__28668_28711 + (1));
seq__28665_28708 = G__28713;
chunk__28666_28709 = G__28714;
count__28667_28710 = G__28715;
i__28668_28711 = G__28716;
continue;
} else {
var temp__5804__auto___28717 = cljs.core.seq(seq__28665_28708);
if(temp__5804__auto___28717){
var seq__28665_28718__$1 = temp__5804__auto___28717;
if(cljs.core.chunked_seq_QMARK_(seq__28665_28718__$1)){
var c__4556__auto___28719 = cljs.core.chunk_first(seq__28665_28718__$1);
var G__28720 = cljs.core.chunk_rest(seq__28665_28718__$1);
var G__28721 = c__4556__auto___28719;
var G__28722 = cljs.core.count(c__4556__auto___28719);
var G__28723 = (0);
seq__28665_28708 = G__28720;
chunk__28666_28709 = G__28721;
count__28667_28710 = G__28722;
i__28668_28711 = G__28723;
continue;
} else {
var oldk_28724 = cljs.core.first(seq__28665_28718__$1);
if(typeof oldk_28724 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28724) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28724));
}


var G__28725 = cljs.core.next(seq__28665_28718__$1);
var G__28726 = null;
var G__28727 = (0);
var G__28728 = (0);
seq__28665_28708 = G__28725;
chunk__28666_28709 = G__28726;
count__28667_28710 = G__28727;
i__28668_28711 = G__28728;
continue;
}
} else {
}
}
break;
}

var seq__28669_28729 = cljs.core.seq(newv);
var chunk__28670_28730 = null;
var count__28671_28731 = (0);
var i__28672_28732 = (0);
while(true){
if((i__28672_28732 < count__28671_28731)){
var newk_28733 = chunk__28670_28730.cljs$core$IIndexed$_nth$arity$2(null,i__28672_28732);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28733]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28733)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28733)));


var G__28734 = seq__28669_28729;
var G__28735 = chunk__28670_28730;
var G__28736 = count__28671_28731;
var G__28737 = (i__28672_28732 + (1));
seq__28669_28729 = G__28734;
chunk__28670_28730 = G__28735;
count__28671_28731 = G__28736;
i__28672_28732 = G__28737;
continue;
} else {
var temp__5804__auto___28738 = cljs.core.seq(seq__28669_28729);
if(temp__5804__auto___28738){
var seq__28669_28739__$1 = temp__5804__auto___28738;
if(cljs.core.chunked_seq_QMARK_(seq__28669_28739__$1)){
var c__4556__auto___28740 = cljs.core.chunk_first(seq__28669_28739__$1);
var G__28741 = cljs.core.chunk_rest(seq__28669_28739__$1);
var G__28742 = c__4556__auto___28740;
var G__28743 = cljs.core.count(c__4556__auto___28740);
var G__28744 = (0);
seq__28669_28729 = G__28741;
chunk__28670_28730 = G__28742;
count__28671_28731 = G__28743;
i__28672_28732 = G__28744;
continue;
} else {
var newk_28745 = cljs.core.first(seq__28669_28739__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28745]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28745)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28745)));


var G__28746 = cljs.core.next(seq__28669_28739__$1);
var G__28747 = null;
var G__28748 = (0);
var G__28749 = (0);
seq__28669_28729 = G__28746;
chunk__28670_28730 = G__28747;
count__28671_28731 = G__28748;
i__28672_28732 = G__28749;
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
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
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
var seq__28750_28770 = cljs.core.seq(newv);
var chunk__28751_28771 = null;
var count__28752_28772 = (0);
var i__28753_28773 = (0);
while(true){
if((i__28753_28773 < count__28752_28772)){
var newk_28774 = chunk__28751_28771.cljs$core$IIndexed$_nth$arity$2(null,i__28753_28773);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28774)));


var G__28775 = seq__28750_28770;
var G__28776 = chunk__28751_28771;
var G__28777 = count__28752_28772;
var G__28778 = (i__28753_28773 + (1));
seq__28750_28770 = G__28775;
chunk__28751_28771 = G__28776;
count__28752_28772 = G__28777;
i__28753_28773 = G__28778;
continue;
} else {
var temp__5804__auto___28779 = cljs.core.seq(seq__28750_28770);
if(temp__5804__auto___28779){
var seq__28750_28780__$1 = temp__5804__auto___28779;
if(cljs.core.chunked_seq_QMARK_(seq__28750_28780__$1)){
var c__4556__auto___28781 = cljs.core.chunk_first(seq__28750_28780__$1);
var G__28782 = cljs.core.chunk_rest(seq__28750_28780__$1);
var G__28783 = c__4556__auto___28781;
var G__28784 = cljs.core.count(c__4556__auto___28781);
var G__28785 = (0);
seq__28750_28770 = G__28782;
chunk__28751_28771 = G__28783;
count__28752_28772 = G__28784;
i__28753_28773 = G__28785;
continue;
} else {
var newk_28786 = cljs.core.first(seq__28750_28780__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28786)));


var G__28787 = cljs.core.next(seq__28750_28780__$1);
var G__28788 = null;
var G__28789 = (0);
var G__28790 = (0);
seq__28750_28770 = G__28787;
chunk__28751_28771 = G__28788;
count__28752_28772 = G__28789;
i__28753_28773 = G__28790;
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
var seq__28754 = cljs.core.seq(lost);
var chunk__28755 = null;
var count__28756 = (0);
var i__28757 = (0);
while(true){
if((i__28757 < count__28756)){
var oldk = chunk__28755.cljs$core$IIndexed$_nth$arity$2(null,i__28757);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28791 = seq__28754;
var G__28792 = chunk__28755;
var G__28793 = count__28756;
var G__28794 = (i__28757 + (1));
seq__28754 = G__28791;
chunk__28755 = G__28792;
count__28756 = G__28793;
i__28757 = G__28794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28754);
if(temp__5804__auto__){
var seq__28754__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28754__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28754__$1);
var G__28795 = cljs.core.chunk_rest(seq__28754__$1);
var G__28796 = c__4556__auto__;
var G__28797 = cljs.core.count(c__4556__auto__);
var G__28798 = (0);
seq__28754 = G__28795;
chunk__28755 = G__28796;
count__28756 = G__28797;
i__28757 = G__28798;
continue;
} else {
var oldk = cljs.core.first(seq__28754__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28799 = cljs.core.next(seq__28754__$1);
var G__28800 = null;
var G__28801 = (0);
var G__28802 = (0);
seq__28754 = G__28799;
chunk__28755 = G__28800;
count__28756 = G__28801;
i__28757 = G__28802;
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
var seq__28758 = cljs.core.seq(gained);
var chunk__28759 = null;
var count__28760 = (0);
var i__28761 = (0);
while(true){
if((i__28761 < count__28760)){
var newk = chunk__28759.cljs$core$IIndexed$_nth$arity$2(null,i__28761);
var new_dom_28803 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28803);


var G__28804 = seq__28758;
var G__28805 = chunk__28759;
var G__28806 = count__28760;
var G__28807 = (i__28761 + (1));
seq__28758 = G__28804;
chunk__28759 = G__28805;
count__28760 = G__28806;
i__28761 = G__28807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28758);
if(temp__5804__auto__){
var seq__28758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28758__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28758__$1);
var G__28808 = cljs.core.chunk_rest(seq__28758__$1);
var G__28809 = c__4556__auto__;
var G__28810 = cljs.core.count(c__4556__auto__);
var G__28811 = (0);
seq__28758 = G__28808;
chunk__28759 = G__28809;
count__28760 = G__28810;
i__28761 = G__28811;
continue;
} else {
var newk = cljs.core.first(seq__28758__$1);
var new_dom_28812 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28812);


var G__28813 = cljs.core.next(seq__28758__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28758 = G__28813;
chunk__28759 = G__28814;
count__28760 = G__28815;
i__28761 = G__28816;
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
var seq__28762_28817 = cljs.core.seq(lost);
var chunk__28763_28818 = null;
var count__28764_28819 = (0);
var i__28765_28820 = (0);
while(true){
if((i__28765_28820 < count__28764_28819)){
var oldk_28821 = chunk__28763_28818.cljs$core$IIndexed$_nth$arity$2(null,i__28765_28820);
if(typeof oldk_28821 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28821) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28821));
}


var G__28822 = seq__28762_28817;
var G__28823 = chunk__28763_28818;
var G__28824 = count__28764_28819;
var G__28825 = (i__28765_28820 + (1));
seq__28762_28817 = G__28822;
chunk__28763_28818 = G__28823;
count__28764_28819 = G__28824;
i__28765_28820 = G__28825;
continue;
} else {
var temp__5804__auto___28826 = cljs.core.seq(seq__28762_28817);
if(temp__5804__auto___28826){
var seq__28762_28827__$1 = temp__5804__auto___28826;
if(cljs.core.chunked_seq_QMARK_(seq__28762_28827__$1)){
var c__4556__auto___28828 = cljs.core.chunk_first(seq__28762_28827__$1);
var G__28829 = cljs.core.chunk_rest(seq__28762_28827__$1);
var G__28830 = c__4556__auto___28828;
var G__28831 = cljs.core.count(c__4556__auto___28828);
var G__28832 = (0);
seq__28762_28817 = G__28829;
chunk__28763_28818 = G__28830;
count__28764_28819 = G__28831;
i__28765_28820 = G__28832;
continue;
} else {
var oldk_28833 = cljs.core.first(seq__28762_28827__$1);
if(typeof oldk_28833 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28833) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28833));
}


var G__28834 = cljs.core.next(seq__28762_28827__$1);
var G__28835 = null;
var G__28836 = (0);
var G__28837 = (0);
seq__28762_28817 = G__28834;
chunk__28763_28818 = G__28835;
count__28764_28819 = G__28836;
i__28765_28820 = G__28837;
continue;
}
} else {
}
}
break;
}

var seq__28766_28838 = cljs.core.seq(newv);
var chunk__28767_28839 = null;
var count__28768_28840 = (0);
var i__28769_28841 = (0);
while(true){
if((i__28769_28841 < count__28768_28840)){
var newk_28842 = chunk__28767_28839.cljs$core$IIndexed$_nth$arity$2(null,i__28769_28841);
var new_dom_28843 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28842]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28842)):tiltontec.web_mx.html.svg_dom_create(newk_28842,false));
goog.dom.appendChild(frag,new_dom_28843);


var G__28844 = seq__28766_28838;
var G__28845 = chunk__28767_28839;
var G__28846 = count__28768_28840;
var G__28847 = (i__28769_28841 + (1));
seq__28766_28838 = G__28844;
chunk__28767_28839 = G__28845;
count__28768_28840 = G__28846;
i__28769_28841 = G__28847;
continue;
} else {
var temp__5804__auto___28848 = cljs.core.seq(seq__28766_28838);
if(temp__5804__auto___28848){
var seq__28766_28849__$1 = temp__5804__auto___28848;
if(cljs.core.chunked_seq_QMARK_(seq__28766_28849__$1)){
var c__4556__auto___28850 = cljs.core.chunk_first(seq__28766_28849__$1);
var G__28851 = cljs.core.chunk_rest(seq__28766_28849__$1);
var G__28852 = c__4556__auto___28850;
var G__28853 = cljs.core.count(c__4556__auto___28850);
var G__28854 = (0);
seq__28766_28838 = G__28851;
chunk__28767_28839 = G__28852;
count__28768_28840 = G__28853;
i__28769_28841 = G__28854;
continue;
} else {
var newk_28855 = cljs.core.first(seq__28766_28849__$1);
var new_dom_28856 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28855]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28855)):tiltontec.web_mx.html.svg_dom_create(newk_28855,false));
goog.dom.appendChild(frag,new_dom_28856);


var G__28857 = cljs.core.next(seq__28766_28849__$1);
var G__28858 = null;
var G__28859 = (0);
var G__28860 = (0);
seq__28766_28838 = G__28857;
chunk__28767_28839 = G__28858;
count__28768_28840 = G__28859;
i__28769_28841 = G__28860;
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
if((!(tiltontec.util.core.any_ref_QMARK_(me)))){
return cljs.core.cst$kw$NOT_DASH_ANY_DASH_REF;
} else {
if((!(tiltontec.cell.base.md_ref_QMARK_(me)))){
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
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var temp__5804__auto__ = tiltontec.web_mx.base.tag_dom(me);
if(cljs.core.truth_(temp__5804__auto__)){
var dom = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$content)){
return window.requestAnimationFrame((function (){
return (dom.innerHTML = newv);
}));
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var G__28861 = slot;
var G__28861__$1 = (((G__28861 instanceof cljs.core.Keyword))?G__28861.fqn:null);
switch (G__28861__$1) {
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
var G__28862 = dom;
var G__28863 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28862,G__28863);

break;
case "checked":
return (dom.checked = newv);

break;
case "value":
return dom.setAttribute("value",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newv));

break;
case "stroke":
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_stroke,newv], 0));

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
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28865_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28865_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28866_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28866_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28867_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28867_SHARP_,cljs.core.cst$kw$id));
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
var G__28868 = cljs.core.rest(keys);
var G__28869 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28868;
found = G__28869;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28870 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28871 = null;
var count__28872 = (0);
var i__28873 = (0);
while(true){
if((i__28873 < count__28872)){
var key = chunk__28871.cljs$core$IIndexed$_nth$arity$2(null,i__28873);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28874 = seq__28870;
var G__28875 = chunk__28871;
var G__28876 = count__28872;
var G__28877 = (i__28873 + (1));
seq__28870 = G__28874;
chunk__28871 = G__28875;
count__28872 = G__28876;
i__28873 = G__28877;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28870);
if(temp__5804__auto__){
var seq__28870__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28870__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28870__$1);
var G__28878 = cljs.core.chunk_rest(seq__28870__$1);
var G__28879 = c__4556__auto__;
var G__28880 = cljs.core.count(c__4556__auto__);
var G__28881 = (0);
seq__28870 = G__28878;
chunk__28871 = G__28879;
count__28872 = G__28880;
i__28873 = G__28881;
continue;
} else {
var key = cljs.core.first(seq__28870__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28882 = cljs.core.next(seq__28870__$1);
var G__28883 = null;
var G__28884 = (0);
var G__28885 = (0);
seq__28870 = G__28882;
chunk__28871 = G__28883;
count__28872 = G__28884;
i__28873 = G__28885;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.web_mx.html.input_editing_start = (function tiltontec$web_mx$html$input_editing_start(dom,initial_value){
goog.dom.forms.setValue(dom,initial_value);

goog.editor.focus.focusInputField(dom);

goog.dom.selection.setStart(dom,(0));

var G__28886 = dom;
var G__28887 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28886,G__28887);
});
