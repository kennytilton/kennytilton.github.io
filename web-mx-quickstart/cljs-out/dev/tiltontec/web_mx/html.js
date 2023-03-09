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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28723(s__28724){
return (new cljs.core.LazySeq(null,(function (){
var s__28724__$1 = s__28724;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28724__$1);
if(temp__5804__auto__){
var s__28724__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28724__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28724__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28726 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28725 = (0);
while(true){
if((i__28725 < size__4528__auto__)){
var vec__28727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28726,k);

var G__28733 = (i__28725 + (1));
i__28725 = G__28733;
continue;
} else {
var G__28734 = (i__28725 + (1));
i__28725 = G__28734;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28726),tiltontec$web_mx$html$map_less_nils_$_iter__28723(cljs.core.chunk_rest(s__28724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28726),null);
}
} else {
var vec__28730 = cljs.core.first(s__28724__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28723(cljs.core.rest(s__28724__$2)));
} else {
var G__28735 = cljs.core.rest(s__28724__$2);
s__28724__$1 = G__28735;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28736(s__28737){
return (new cljs.core.LazySeq(null,(function (){
var s__28737__$1 = s__28737;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28737__$1);
if(temp__5804__auto__){
var s__28737__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28737__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28737__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28739 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28738 = (0);
while(true){
if((i__28738 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28738);
cljs.core.chunk_append(b__28739,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28740 = k;
var G__28740__$1 = (((G__28740 instanceof cljs.core.Keyword))?G__28740.fqn:null);
switch (G__28740__$1) {
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

var G__28743 = (i__28738 + (1));
i__28738 = G__28743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28739),tiltontec$web_mx$html$tag_properties_$_iter__28736(cljs.core.chunk_rest(s__28737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28739),null);
}
} else {
var k = cljs.core.first(s__28737__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28741 = k;
var G__28741__$1 = (((G__28741 instanceof cljs.core.Keyword))?G__28741.fqn:null);
switch (G__28741__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28736(cljs.core.rest(s__28737__$2)));
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

var seq__28745_28759 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28747_28760 = null;
var count__28748_28761 = (0);
var i__28749_28762 = (0);
while(true){
if((i__28749_28762 < count__28748_28761)){
var ak_28763 = chunk__28747_28760.cljs$core$IIndexed$_nth$arity$2(null,i__28749_28762);
var ak$_28764 = cljs.core.name(ak_28763);
var av_28765 = (function (){var G__28753 = cljs.core.deref(me);
return (ak_28763.cljs$core$IFn$_invoke$arity$1 ? ak_28763.cljs$core$IFn$_invoke$arity$1(G__28753) : ak_28763.call(null,G__28753));
})();
if(cljs.core.fn_QMARK_(av_28765)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28764,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28764,(2)):ak$_28764),av_28765);
} else {
svg.setAttributeNS(null,ak$_28764,tiltontec.web_mx.base.attr_val$(av_28765));
}


var G__28766 = seq__28745_28759;
var G__28767 = chunk__28747_28760;
var G__28768 = count__28748_28761;
var G__28769 = (i__28749_28762 + (1));
seq__28745_28759 = G__28766;
chunk__28747_28760 = G__28767;
count__28748_28761 = G__28768;
i__28749_28762 = G__28769;
continue;
} else {
var temp__5804__auto___28770 = cljs.core.seq(seq__28745_28759);
if(temp__5804__auto___28770){
var seq__28745_28771__$1 = temp__5804__auto___28770;
if(cljs.core.chunked_seq_QMARK_(seq__28745_28771__$1)){
var c__4556__auto___28772 = cljs.core.chunk_first(seq__28745_28771__$1);
var G__28773 = cljs.core.chunk_rest(seq__28745_28771__$1);
var G__28774 = c__4556__auto___28772;
var G__28775 = cljs.core.count(c__4556__auto___28772);
var G__28776 = (0);
seq__28745_28759 = G__28773;
chunk__28747_28760 = G__28774;
count__28748_28761 = G__28775;
i__28749_28762 = G__28776;
continue;
} else {
var ak_28777 = cljs.core.first(seq__28745_28771__$1);
var ak$_28778 = cljs.core.name(ak_28777);
var av_28779 = (function (){var G__28754 = cljs.core.deref(me);
return (ak_28777.cljs$core$IFn$_invoke$arity$1 ? ak_28777.cljs$core$IFn$_invoke$arity$1(G__28754) : ak_28777.call(null,G__28754));
})();
if(cljs.core.fn_QMARK_(av_28779)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28778,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28778,(2)):ak$_28778),av_28779);
} else {
svg.setAttributeNS(null,ak$_28778,tiltontec.web_mx.base.attr_val$(av_28779));
}


var G__28780 = cljs.core.next(seq__28745_28771__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28745_28759 = G__28780;
chunk__28747_28760 = G__28781;
count__28748_28761 = G__28782;
i__28749_28762 = G__28783;
continue;
}
} else {
}
}
break;
}

var seq__28755_28784 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28756_28785 = null;
var count__28757_28786 = (0);
var i__28758_28787 = (0);
while(true){
if((i__28758_28787 < count__28757_28786)){
var kid_28788 = chunk__28756_28785.cljs$core$IIndexed$_nth$arity$2(null,i__28758_28787);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28788,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28788,dbg)));


var G__28789 = seq__28755_28784;
var G__28790 = chunk__28756_28785;
var G__28791 = count__28757_28786;
var G__28792 = (i__28758_28787 + (1));
seq__28755_28784 = G__28789;
chunk__28756_28785 = G__28790;
count__28757_28786 = G__28791;
i__28758_28787 = G__28792;
continue;
} else {
var temp__5804__auto___28793 = cljs.core.seq(seq__28755_28784);
if(temp__5804__auto___28793){
var seq__28755_28794__$1 = temp__5804__auto___28793;
if(cljs.core.chunked_seq_QMARK_(seq__28755_28794__$1)){
var c__4556__auto___28795 = cljs.core.chunk_first(seq__28755_28794__$1);
var G__28796 = cljs.core.chunk_rest(seq__28755_28794__$1);
var G__28797 = c__4556__auto___28795;
var G__28798 = cljs.core.count(c__4556__auto___28795);
var G__28799 = (0);
seq__28755_28784 = G__28796;
chunk__28756_28785 = G__28797;
count__28757_28786 = G__28798;
i__28758_28787 = G__28799;
continue;
} else {
var kid_28800 = cljs.core.first(seq__28755_28794__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28800,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28800,dbg)));


var G__28801 = cljs.core.next(seq__28755_28794__$1);
var G__28802 = null;
var G__28803 = (0);
var G__28804 = (0);
seq__28755_28784 = G__28801;
chunk__28756_28785 = G__28802;
count__28757_28786 = G__28803;
i__28758_28787 = G__28804;
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
var G__28807 = arguments.length;
switch (G__28807) {
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
var seq__28808_28817 = cljs.core.seq(me);
var chunk__28809_28818 = null;
var count__28810_28819 = (0);
var i__28811_28820 = (0);
while(true){
if((i__28811_28820 < count__28810_28819)){
var tag_28821 = chunk__28809_28818.cljs$core$IIndexed$_nth$arity$2(null,i__28811_28820);
if(cljs.core.truth_(tag_28821)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28821));
} else {
}


var G__28822 = seq__28808_28817;
var G__28823 = chunk__28809_28818;
var G__28824 = count__28810_28819;
var G__28825 = (i__28811_28820 + (1));
seq__28808_28817 = G__28822;
chunk__28809_28818 = G__28823;
count__28810_28819 = G__28824;
i__28811_28820 = G__28825;
continue;
} else {
var temp__5804__auto___28826 = cljs.core.seq(seq__28808_28817);
if(temp__5804__auto___28826){
var seq__28808_28827__$1 = temp__5804__auto___28826;
if(cljs.core.chunked_seq_QMARK_(seq__28808_28827__$1)){
var c__4556__auto___28828 = cljs.core.chunk_first(seq__28808_28827__$1);
var G__28829 = cljs.core.chunk_rest(seq__28808_28827__$1);
var G__28830 = c__4556__auto___28828;
var G__28831 = cljs.core.count(c__4556__auto___28828);
var G__28832 = (0);
seq__28808_28817 = G__28829;
chunk__28809_28818 = G__28830;
count__28810_28819 = G__28831;
i__28811_28820 = G__28832;
continue;
} else {
var tag_28833 = cljs.core.first(seq__28808_28827__$1);
if(cljs.core.truth_(tag_28833)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28833));
} else {
}


var G__28834 = cljs.core.next(seq__28808_28827__$1);
var G__28835 = null;
var G__28836 = (0);
var G__28837 = (0);
seq__28808_28817 = G__28834;
chunk__28809_28818 = G__28835;
count__28810_28819 = G__28836;
i__28811_28820 = G__28837;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28805_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28805_SHARP_,dbg);
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
var temp__5804__auto___28838 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28838)){
var list_id_28839 = temp__5804__auto___28838;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28839));
} else {
}
} else {
}

var seq__28812_28840 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28813_28841 = null;
var count__28814_28842 = (0);
var i__28815_28843 = (0);
while(true){
if((i__28815_28843 < count__28814_28842)){
var attr_key_28844 = chunk__28813_28841.cljs$core$IIndexed$_nth$arity$2(null,i__28815_28843);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28844),"-")){
var temp__5804__auto___28845 = tiltontec.model.core.mget(me,attr_key_28844);
if(cljs.core.truth_(temp__5804__auto___28845)){
var attr_val_28846 = temp__5804__auto___28845;
dom.setAttribute(cljs.core.name(attr_key_28844),tiltontec.web_mx.base.attr_val$(attr_val_28846));
} else {
}
} else {
}


var G__28847 = seq__28812_28840;
var G__28848 = chunk__28813_28841;
var G__28849 = count__28814_28842;
var G__28850 = (i__28815_28843 + (1));
seq__28812_28840 = G__28847;
chunk__28813_28841 = G__28848;
count__28814_28842 = G__28849;
i__28815_28843 = G__28850;
continue;
} else {
var temp__5804__auto___28851 = cljs.core.seq(seq__28812_28840);
if(temp__5804__auto___28851){
var seq__28812_28852__$1 = temp__5804__auto___28851;
if(cljs.core.chunked_seq_QMARK_(seq__28812_28852__$1)){
var c__4556__auto___28853 = cljs.core.chunk_first(seq__28812_28852__$1);
var G__28854 = cljs.core.chunk_rest(seq__28812_28852__$1);
var G__28855 = c__4556__auto___28853;
var G__28856 = cljs.core.count(c__4556__auto___28853);
var G__28857 = (0);
seq__28812_28840 = G__28854;
chunk__28813_28841 = G__28855;
count__28814_28842 = G__28856;
i__28815_28843 = G__28857;
continue;
} else {
var attr_key_28858 = cljs.core.first(seq__28812_28852__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28858),"-")){
var temp__5804__auto___28859__$1 = tiltontec.model.core.mget(me,attr_key_28858);
if(cljs.core.truth_(temp__5804__auto___28859__$1)){
var attr_val_28860 = temp__5804__auto___28859__$1;
dom.setAttribute(cljs.core.name(attr_key_28858),tiltontec.web_mx.base.attr_val$(attr_val_28860));
} else {
}
} else {
}


var G__28861 = cljs.core.next(seq__28812_28852__$1);
var G__28862 = null;
var G__28863 = (0);
var G__28864 = (0);
seq__28812_28840 = G__28861;
chunk__28813_28841 = G__28862;
count__28814_28842 = G__28863;
i__28815_28843 = G__28864;
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
var seq__28865_28885 = cljs.core.seq(newv);
var chunk__28866_28886 = null;
var count__28867_28887 = (0);
var i__28868_28888 = (0);
while(true){
if((i__28868_28888 < count__28867_28887)){
var newk_28889 = chunk__28866_28886.cljs$core$IIndexed$_nth$arity$2(null,i__28868_28888);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28889)));


var G__28890 = seq__28865_28885;
var G__28891 = chunk__28866_28886;
var G__28892 = count__28867_28887;
var G__28893 = (i__28868_28888 + (1));
seq__28865_28885 = G__28890;
chunk__28866_28886 = G__28891;
count__28867_28887 = G__28892;
i__28868_28888 = G__28893;
continue;
} else {
var temp__5804__auto___28894 = cljs.core.seq(seq__28865_28885);
if(temp__5804__auto___28894){
var seq__28865_28895__$1 = temp__5804__auto___28894;
if(cljs.core.chunked_seq_QMARK_(seq__28865_28895__$1)){
var c__4556__auto___28896 = cljs.core.chunk_first(seq__28865_28895__$1);
var G__28897 = cljs.core.chunk_rest(seq__28865_28895__$1);
var G__28898 = c__4556__auto___28896;
var G__28899 = cljs.core.count(c__4556__auto___28896);
var G__28900 = (0);
seq__28865_28885 = G__28897;
chunk__28866_28886 = G__28898;
count__28867_28887 = G__28899;
i__28868_28888 = G__28900;
continue;
} else {
var newk_28901 = cljs.core.first(seq__28865_28895__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28901)));


var G__28902 = cljs.core.next(seq__28865_28895__$1);
var G__28903 = null;
var G__28904 = (0);
var G__28905 = (0);
seq__28865_28885 = G__28902;
chunk__28866_28886 = G__28903;
count__28867_28887 = G__28904;
i__28868_28888 = G__28905;
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
var seq__28869 = cljs.core.seq(lost);
var chunk__28870 = null;
var count__28871 = (0);
var i__28872 = (0);
while(true){
if((i__28872 < count__28871)){
var oldk = chunk__28870.cljs$core$IIndexed$_nth$arity$2(null,i__28872);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28875){if((e28875 instanceof Error)){
var e_28906 = e28875;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28906], 0));

} else {
throw e28875;

}
}}


var G__28907 = seq__28869;
var G__28908 = chunk__28870;
var G__28909 = count__28871;
var G__28910 = (i__28872 + (1));
seq__28869 = G__28907;
chunk__28870 = G__28908;
count__28871 = G__28909;
i__28872 = G__28910;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28869);
if(temp__5804__auto__){
var seq__28869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28869__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28869__$1);
var G__28911 = cljs.core.chunk_rest(seq__28869__$1);
var G__28912 = c__4556__auto__;
var G__28913 = cljs.core.count(c__4556__auto__);
var G__28914 = (0);
seq__28869 = G__28911;
chunk__28870 = G__28912;
count__28871 = G__28913;
i__28872 = G__28914;
continue;
} else {
var oldk = cljs.core.first(seq__28869__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28876){if((e28876 instanceof Error)){
var e_28915 = e28876;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28915], 0));

} else {
throw e28876;

}
}}


var G__28916 = cljs.core.next(seq__28869__$1);
var G__28917 = null;
var G__28918 = (0);
var G__28919 = (0);
seq__28869 = G__28916;
chunk__28870 = G__28917;
count__28871 = G__28918;
i__28872 = G__28919;
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
var seq__28877_28920 = cljs.core.seq(lost);
var chunk__28878_28921 = null;
var count__28879_28922 = (0);
var i__28880_28923 = (0);
while(true){
if((i__28880_28923 < count__28879_28922)){
var oldk_28924 = chunk__28878_28921.cljs$core$IIndexed$_nth$arity$2(null,i__28880_28923);
if(typeof oldk_28924 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28924) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28924));
}


var G__28925 = seq__28877_28920;
var G__28926 = chunk__28878_28921;
var G__28927 = count__28879_28922;
var G__28928 = (i__28880_28923 + (1));
seq__28877_28920 = G__28925;
chunk__28878_28921 = G__28926;
count__28879_28922 = G__28927;
i__28880_28923 = G__28928;
continue;
} else {
var temp__5804__auto___28929 = cljs.core.seq(seq__28877_28920);
if(temp__5804__auto___28929){
var seq__28877_28930__$1 = temp__5804__auto___28929;
if(cljs.core.chunked_seq_QMARK_(seq__28877_28930__$1)){
var c__4556__auto___28931 = cljs.core.chunk_first(seq__28877_28930__$1);
var G__28932 = cljs.core.chunk_rest(seq__28877_28930__$1);
var G__28933 = c__4556__auto___28931;
var G__28934 = cljs.core.count(c__4556__auto___28931);
var G__28935 = (0);
seq__28877_28920 = G__28932;
chunk__28878_28921 = G__28933;
count__28879_28922 = G__28934;
i__28880_28923 = G__28935;
continue;
} else {
var oldk_28936 = cljs.core.first(seq__28877_28930__$1);
if(typeof oldk_28936 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28936) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28936));
}


var G__28937 = cljs.core.next(seq__28877_28930__$1);
var G__28938 = null;
var G__28939 = (0);
var G__28940 = (0);
seq__28877_28920 = G__28937;
chunk__28878_28921 = G__28938;
count__28879_28922 = G__28939;
i__28880_28923 = G__28940;
continue;
}
} else {
}
}
break;
}

var seq__28881_28941 = cljs.core.seq(newv);
var chunk__28882_28942 = null;
var count__28883_28943 = (0);
var i__28884_28944 = (0);
while(true){
if((i__28884_28944 < count__28883_28943)){
var newk_28945 = chunk__28882_28942.cljs$core$IIndexed$_nth$arity$2(null,i__28884_28944);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28945]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28945)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28945)));


var G__28946 = seq__28881_28941;
var G__28947 = chunk__28882_28942;
var G__28948 = count__28883_28943;
var G__28949 = (i__28884_28944 + (1));
seq__28881_28941 = G__28946;
chunk__28882_28942 = G__28947;
count__28883_28943 = G__28948;
i__28884_28944 = G__28949;
continue;
} else {
var temp__5804__auto___28950 = cljs.core.seq(seq__28881_28941);
if(temp__5804__auto___28950){
var seq__28881_28951__$1 = temp__5804__auto___28950;
if(cljs.core.chunked_seq_QMARK_(seq__28881_28951__$1)){
var c__4556__auto___28952 = cljs.core.chunk_first(seq__28881_28951__$1);
var G__28953 = cljs.core.chunk_rest(seq__28881_28951__$1);
var G__28954 = c__4556__auto___28952;
var G__28955 = cljs.core.count(c__4556__auto___28952);
var G__28956 = (0);
seq__28881_28941 = G__28953;
chunk__28882_28942 = G__28954;
count__28883_28943 = G__28955;
i__28884_28944 = G__28956;
continue;
} else {
var newk_28957 = cljs.core.first(seq__28881_28951__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28957]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28957)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28957)));


var G__28958 = cljs.core.next(seq__28881_28951__$1);
var G__28959 = null;
var G__28960 = (0);
var G__28961 = (0);
seq__28881_28941 = G__28958;
chunk__28882_28942 = G__28959;
count__28883_28943 = G__28960;
i__28884_28944 = G__28961;
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
var seq__28962_28982 = cljs.core.seq(newv);
var chunk__28963_28983 = null;
var count__28964_28984 = (0);
var i__28965_28985 = (0);
while(true){
if((i__28965_28985 < count__28964_28984)){
var newk_28986 = chunk__28963_28983.cljs$core$IIndexed$_nth$arity$2(null,i__28965_28985);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28986)));


var G__28987 = seq__28962_28982;
var G__28988 = chunk__28963_28983;
var G__28989 = count__28964_28984;
var G__28990 = (i__28965_28985 + (1));
seq__28962_28982 = G__28987;
chunk__28963_28983 = G__28988;
count__28964_28984 = G__28989;
i__28965_28985 = G__28990;
continue;
} else {
var temp__5804__auto___28991 = cljs.core.seq(seq__28962_28982);
if(temp__5804__auto___28991){
var seq__28962_28992__$1 = temp__5804__auto___28991;
if(cljs.core.chunked_seq_QMARK_(seq__28962_28992__$1)){
var c__4556__auto___28993 = cljs.core.chunk_first(seq__28962_28992__$1);
var G__28994 = cljs.core.chunk_rest(seq__28962_28992__$1);
var G__28995 = c__4556__auto___28993;
var G__28996 = cljs.core.count(c__4556__auto___28993);
var G__28997 = (0);
seq__28962_28982 = G__28994;
chunk__28963_28983 = G__28995;
count__28964_28984 = G__28996;
i__28965_28985 = G__28997;
continue;
} else {
var newk_28998 = cljs.core.first(seq__28962_28992__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28998)));


var G__28999 = cljs.core.next(seq__28962_28992__$1);
var G__29000 = null;
var G__29001 = (0);
var G__29002 = (0);
seq__28962_28982 = G__28999;
chunk__28963_28983 = G__29000;
count__28964_28984 = G__29001;
i__28965_28985 = G__29002;
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
var seq__28966 = cljs.core.seq(lost);
var chunk__28967 = null;
var count__28968 = (0);
var i__28969 = (0);
while(true){
if((i__28969 < count__28968)){
var oldk = chunk__28967.cljs$core$IIndexed$_nth$arity$2(null,i__28969);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__29003 = seq__28966;
var G__29004 = chunk__28967;
var G__29005 = count__28968;
var G__29006 = (i__28969 + (1));
seq__28966 = G__29003;
chunk__28967 = G__29004;
count__28968 = G__29005;
i__28969 = G__29006;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28966);
if(temp__5804__auto__){
var seq__28966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28966__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28966__$1);
var G__29007 = cljs.core.chunk_rest(seq__28966__$1);
var G__29008 = c__4556__auto__;
var G__29009 = cljs.core.count(c__4556__auto__);
var G__29010 = (0);
seq__28966 = G__29007;
chunk__28967 = G__29008;
count__28968 = G__29009;
i__28969 = G__29010;
continue;
} else {
var oldk = cljs.core.first(seq__28966__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__29011 = cljs.core.next(seq__28966__$1);
var G__29012 = null;
var G__29013 = (0);
var G__29014 = (0);
seq__28966 = G__29011;
chunk__28967 = G__29012;
count__28968 = G__29013;
i__28969 = G__29014;
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
var seq__28970 = cljs.core.seq(gained);
var chunk__28971 = null;
var count__28972 = (0);
var i__28973 = (0);
while(true){
if((i__28973 < count__28972)){
var newk = chunk__28971.cljs$core$IIndexed$_nth$arity$2(null,i__28973);
var new_dom_29015 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29015);


var G__29016 = seq__28970;
var G__29017 = chunk__28971;
var G__29018 = count__28972;
var G__29019 = (i__28973 + (1));
seq__28970 = G__29016;
chunk__28971 = G__29017;
count__28972 = G__29018;
i__28973 = G__29019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28970);
if(temp__5804__auto__){
var seq__28970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28970__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28970__$1);
var G__29020 = cljs.core.chunk_rest(seq__28970__$1);
var G__29021 = c__4556__auto__;
var G__29022 = cljs.core.count(c__4556__auto__);
var G__29023 = (0);
seq__28970 = G__29020;
chunk__28971 = G__29021;
count__28972 = G__29022;
i__28973 = G__29023;
continue;
} else {
var newk = cljs.core.first(seq__28970__$1);
var new_dom_29024 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29024);


var G__29025 = cljs.core.next(seq__28970__$1);
var G__29026 = null;
var G__29027 = (0);
var G__29028 = (0);
seq__28970 = G__29025;
chunk__28971 = G__29026;
count__28972 = G__29027;
i__28973 = G__29028;
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
var seq__28974_29029 = cljs.core.seq(lost);
var chunk__28975_29030 = null;
var count__28976_29031 = (0);
var i__28977_29032 = (0);
while(true){
if((i__28977_29032 < count__28976_29031)){
var oldk_29033 = chunk__28975_29030.cljs$core$IIndexed$_nth$arity$2(null,i__28977_29032);
if(typeof oldk_29033 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29033) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29033));
}


var G__29034 = seq__28974_29029;
var G__29035 = chunk__28975_29030;
var G__29036 = count__28976_29031;
var G__29037 = (i__28977_29032 + (1));
seq__28974_29029 = G__29034;
chunk__28975_29030 = G__29035;
count__28976_29031 = G__29036;
i__28977_29032 = G__29037;
continue;
} else {
var temp__5804__auto___29038 = cljs.core.seq(seq__28974_29029);
if(temp__5804__auto___29038){
var seq__28974_29039__$1 = temp__5804__auto___29038;
if(cljs.core.chunked_seq_QMARK_(seq__28974_29039__$1)){
var c__4556__auto___29040 = cljs.core.chunk_first(seq__28974_29039__$1);
var G__29041 = cljs.core.chunk_rest(seq__28974_29039__$1);
var G__29042 = c__4556__auto___29040;
var G__29043 = cljs.core.count(c__4556__auto___29040);
var G__29044 = (0);
seq__28974_29029 = G__29041;
chunk__28975_29030 = G__29042;
count__28976_29031 = G__29043;
i__28977_29032 = G__29044;
continue;
} else {
var oldk_29045 = cljs.core.first(seq__28974_29039__$1);
if(typeof oldk_29045 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29045) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29045));
}


var G__29046 = cljs.core.next(seq__28974_29039__$1);
var G__29047 = null;
var G__29048 = (0);
var G__29049 = (0);
seq__28974_29029 = G__29046;
chunk__28975_29030 = G__29047;
count__28976_29031 = G__29048;
i__28977_29032 = G__29049;
continue;
}
} else {
}
}
break;
}

var seq__28978_29050 = cljs.core.seq(newv);
var chunk__28979_29051 = null;
var count__28980_29052 = (0);
var i__28981_29053 = (0);
while(true){
if((i__28981_29053 < count__28980_29052)){
var newk_29054 = chunk__28979_29051.cljs$core$IIndexed$_nth$arity$2(null,i__28981_29053);
var new_dom_29055 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29054]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29054)):tiltontec.web_mx.html.svg_dom_create(newk_29054,false));
goog.dom.appendChild(frag,new_dom_29055);


var G__29056 = seq__28978_29050;
var G__29057 = chunk__28979_29051;
var G__29058 = count__28980_29052;
var G__29059 = (i__28981_29053 + (1));
seq__28978_29050 = G__29056;
chunk__28979_29051 = G__29057;
count__28980_29052 = G__29058;
i__28981_29053 = G__29059;
continue;
} else {
var temp__5804__auto___29060 = cljs.core.seq(seq__28978_29050);
if(temp__5804__auto___29060){
var seq__28978_29061__$1 = temp__5804__auto___29060;
if(cljs.core.chunked_seq_QMARK_(seq__28978_29061__$1)){
var c__4556__auto___29062 = cljs.core.chunk_first(seq__28978_29061__$1);
var G__29063 = cljs.core.chunk_rest(seq__28978_29061__$1);
var G__29064 = c__4556__auto___29062;
var G__29065 = cljs.core.count(c__4556__auto___29062);
var G__29066 = (0);
seq__28978_29050 = G__29063;
chunk__28979_29051 = G__29064;
count__28980_29052 = G__29065;
i__28981_29053 = G__29066;
continue;
} else {
var newk_29067 = cljs.core.first(seq__28978_29061__$1);
var new_dom_29068 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29067]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29067)):tiltontec.web_mx.html.svg_dom_create(newk_29067,false));
goog.dom.appendChild(frag,new_dom_29068);


var G__29069 = cljs.core.next(seq__28978_29061__$1);
var G__29070 = null;
var G__29071 = (0);
var G__29072 = (0);
seq__28978_29050 = G__29069;
chunk__28979_29051 = G__29070;
count__28980_29052 = G__29071;
i__28981_29053 = G__29072;
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
var G__29073 = slot;
var G__29073__$1 = (((G__29073 instanceof cljs.core.Keyword))?G__29073.fqn:null);
switch (G__29073__$1) {
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
var G__29074 = dom;
var G__29075 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__29074,G__29075);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29077_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__29077_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29078_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__29078_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29079_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__29079_SHARP_,cljs.core.cst$kw$id));
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
var G__29080 = cljs.core.rest(keys);
var G__29081 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__29080;
found = G__29081;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__29082 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__29083 = null;
var count__29084 = (0);
var i__29085 = (0);
while(true){
if((i__29085 < count__29084)){
var key = chunk__29083.cljs$core$IIndexed$_nth$arity$2(null,i__29085);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29086 = seq__29082;
var G__29087 = chunk__29083;
var G__29088 = count__29084;
var G__29089 = (i__29085 + (1));
seq__29082 = G__29086;
chunk__29083 = G__29087;
count__29084 = G__29088;
i__29085 = G__29089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29082);
if(temp__5804__auto__){
var seq__29082__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29082__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29082__$1);
var G__29090 = cljs.core.chunk_rest(seq__29082__$1);
var G__29091 = c__4556__auto__;
var G__29092 = cljs.core.count(c__4556__auto__);
var G__29093 = (0);
seq__29082 = G__29090;
chunk__29083 = G__29091;
count__29084 = G__29092;
i__29085 = G__29093;
continue;
} else {
var key = cljs.core.first(seq__29082__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29094 = cljs.core.next(seq__29082__$1);
var G__29095 = null;
var G__29096 = (0);
var G__29097 = (0);
seq__29082 = G__29094;
chunk__29083 = G__29095;
count__29084 = G__29096;
i__29085 = G__29097;
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

var G__29098 = dom;
var G__29099 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__29098,G__29099);
});
