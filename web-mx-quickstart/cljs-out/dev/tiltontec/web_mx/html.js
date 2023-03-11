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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28709(s__28710){
return (new cljs.core.LazySeq(null,(function (){
var s__28710__$1 = s__28710;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28710__$1);
if(temp__5804__auto__){
var s__28710__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28710__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28710__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28712 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28711 = (0);
while(true){
if((i__28711 < size__4528__auto__)){
var vec__28713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28711);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28712,k);

var G__28719 = (i__28711 + (1));
i__28711 = G__28719;
continue;
} else {
var G__28720 = (i__28711 + (1));
i__28711 = G__28720;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28712),tiltontec$web_mx$html$map_less_nils_$_iter__28709(cljs.core.chunk_rest(s__28710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28712),null);
}
} else {
var vec__28716 = cljs.core.first(s__28710__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28709(cljs.core.rest(s__28710__$2)));
} else {
var G__28721 = cljs.core.rest(s__28710__$2);
s__28710__$1 = G__28721;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28722(s__28723){
return (new cljs.core.LazySeq(null,(function (){
var s__28723__$1 = s__28723;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28723__$1);
if(temp__5804__auto__){
var s__28723__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28723__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28723__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28725 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28724 = (0);
while(true){
if((i__28724 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28724);
cljs.core.chunk_append(b__28725,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$so_DASH_sign_DASH_of_DASH_attr_DASH_key,k,cljs.core.cst$kw$in,cljs.core.deref(mx)], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.model.core.mget(mx,k);
})()
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28726 = k;
var G__28726__$1 = (((G__28726 instanceof cljs.core.Keyword))?G__28726.fqn:null);
switch (G__28726__$1) {
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

var G__28729 = (i__28724 + (1));
i__28724 = G__28729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28725),tiltontec$web_mx$html$tag_properties_$_iter__28722(cljs.core.chunk_rest(s__28723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28725),null);
}
} else {
var k = cljs.core.first(s__28723__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$so_DASH_sign_DASH_of_DASH_attr_DASH_key,k,cljs.core.cst$kw$in,cljs.core.deref(mx)], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.model.core.mget(mx,k);
})()
);
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28727 = k;
var G__28727__$1 = (((G__28727 instanceof cljs.core.Keyword))?G__28727.fqn:null);
switch (G__28727__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28722(cljs.core.rest(s__28723__$2)));
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

var seq__28731_28745 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28733_28746 = null;
var count__28734_28747 = (0);
var i__28735_28748 = (0);
while(true){
if((i__28735_28748 < count__28734_28747)){
var ak_28749 = chunk__28733_28746.cljs$core$IIndexed$_nth$arity$2(null,i__28735_28748);
var ak$_28750 = cljs.core.name(ak_28749);
var av_28751 = (function (){var G__28739 = cljs.core.deref(me);
return (ak_28749.cljs$core$IFn$_invoke$arity$1 ? ak_28749.cljs$core$IFn$_invoke$arity$1(G__28739) : ak_28749.call(null,G__28739));
})();
if(cljs.core.fn_QMARK_(av_28751)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28750,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28750,(2)):ak$_28750),av_28751);
} else {
svg.setAttributeNS(null,ak$_28750,tiltontec.web_mx.base.attr_val$(av_28751));
}


var G__28752 = seq__28731_28745;
var G__28753 = chunk__28733_28746;
var G__28754 = count__28734_28747;
var G__28755 = (i__28735_28748 + (1));
seq__28731_28745 = G__28752;
chunk__28733_28746 = G__28753;
count__28734_28747 = G__28754;
i__28735_28748 = G__28755;
continue;
} else {
var temp__5804__auto___28756 = cljs.core.seq(seq__28731_28745);
if(temp__5804__auto___28756){
var seq__28731_28757__$1 = temp__5804__auto___28756;
if(cljs.core.chunked_seq_QMARK_(seq__28731_28757__$1)){
var c__4556__auto___28758 = cljs.core.chunk_first(seq__28731_28757__$1);
var G__28759 = cljs.core.chunk_rest(seq__28731_28757__$1);
var G__28760 = c__4556__auto___28758;
var G__28761 = cljs.core.count(c__4556__auto___28758);
var G__28762 = (0);
seq__28731_28745 = G__28759;
chunk__28733_28746 = G__28760;
count__28734_28747 = G__28761;
i__28735_28748 = G__28762;
continue;
} else {
var ak_28763 = cljs.core.first(seq__28731_28757__$1);
var ak$_28764 = cljs.core.name(ak_28763);
var av_28765 = (function (){var G__28740 = cljs.core.deref(me);
return (ak_28763.cljs$core$IFn$_invoke$arity$1 ? ak_28763.cljs$core$IFn$_invoke$arity$1(G__28740) : ak_28763.call(null,G__28740));
})();
if(cljs.core.fn_QMARK_(av_28765)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28764,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28764,(2)):ak$_28764),av_28765);
} else {
svg.setAttributeNS(null,ak$_28764,tiltontec.web_mx.base.attr_val$(av_28765));
}


var G__28766 = cljs.core.next(seq__28731_28757__$1);
var G__28767 = null;
var G__28768 = (0);
var G__28769 = (0);
seq__28731_28745 = G__28766;
chunk__28733_28746 = G__28767;
count__28734_28747 = G__28768;
i__28735_28748 = G__28769;
continue;
}
} else {
}
}
break;
}

var seq__28741_28770 = cljs.core.seq(tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__28742_28771 = null;
var count__28743_28772 = (0);
var i__28744_28773 = (0);
while(true){
if((i__28744_28773 < count__28743_28772)){
var kid_28774 = chunk__28742_28771.cljs$core$IIndexed$_nth$arity$2(null,i__28744_28773);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28774,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28774,dbg)));


var G__28775 = seq__28741_28770;
var G__28776 = chunk__28742_28771;
var G__28777 = count__28743_28772;
var G__28778 = (i__28744_28773 + (1));
seq__28741_28770 = G__28775;
chunk__28742_28771 = G__28776;
count__28743_28772 = G__28777;
i__28744_28773 = G__28778;
continue;
} else {
var temp__5804__auto___28779 = cljs.core.seq(seq__28741_28770);
if(temp__5804__auto___28779){
var seq__28741_28780__$1 = temp__5804__auto___28779;
if(cljs.core.chunked_seq_QMARK_(seq__28741_28780__$1)){
var c__4556__auto___28781 = cljs.core.chunk_first(seq__28741_28780__$1);
var G__28782 = cljs.core.chunk_rest(seq__28741_28780__$1);
var G__28783 = c__4556__auto___28781;
var G__28784 = cljs.core.count(c__4556__auto___28781);
var G__28785 = (0);
seq__28741_28770 = G__28782;
chunk__28742_28771 = G__28783;
count__28743_28772 = G__28784;
i__28744_28773 = G__28785;
continue;
} else {
var kid_28786 = cljs.core.first(seq__28741_28780__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28786,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28786,dbg)));


var G__28787 = cljs.core.next(seq__28741_28780__$1);
var G__28788 = null;
var G__28789 = (0);
var G__28790 = (0);
seq__28741_28770 = G__28787;
chunk__28742_28771 = G__28788;
count__28743_28772 = G__28789;
i__28744_28773 = G__28790;
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
var G__28793 = arguments.length;
switch (G__28793) {
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
var seq__28794_28803 = cljs.core.seq(me);
var chunk__28795_28804 = null;
var count__28796_28805 = (0);
var i__28797_28806 = (0);
while(true){
if((i__28797_28806 < count__28796_28805)){
var tag_28807 = chunk__28795_28804.cljs$core$IIndexed$_nth$arity$2(null,i__28797_28806);
if(cljs.core.truth_(tag_28807)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28807));
} else {
}


var G__28808 = seq__28794_28803;
var G__28809 = chunk__28795_28804;
var G__28810 = count__28796_28805;
var G__28811 = (i__28797_28806 + (1));
seq__28794_28803 = G__28808;
chunk__28795_28804 = G__28809;
count__28796_28805 = G__28810;
i__28797_28806 = G__28811;
continue;
} else {
var temp__5804__auto___28812 = cljs.core.seq(seq__28794_28803);
if(temp__5804__auto___28812){
var seq__28794_28813__$1 = temp__5804__auto___28812;
if(cljs.core.chunked_seq_QMARK_(seq__28794_28813__$1)){
var c__4556__auto___28814 = cljs.core.chunk_first(seq__28794_28813__$1);
var G__28815 = cljs.core.chunk_rest(seq__28794_28813__$1);
var G__28816 = c__4556__auto___28814;
var G__28817 = cljs.core.count(c__4556__auto___28814);
var G__28818 = (0);
seq__28794_28803 = G__28815;
chunk__28795_28804 = G__28816;
count__28796_28805 = G__28817;
i__28797_28806 = G__28818;
continue;
} else {
var tag_28819 = cljs.core.first(seq__28794_28813__$1);
if(cljs.core.truth_(tag_28819)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28819));
} else {
}


var G__28820 = cljs.core.next(seq__28794_28813__$1);
var G__28821 = null;
var G__28822 = (0);
var G__28823 = (0);
seq__28794_28803 = G__28820;
chunk__28795_28804 = G__28821;
count__28796_28805 = G__28822;
i__28797_28806 = G__28823;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28791_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28791_SHARP_,dbg);
}),tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$kids)),(function (){var temp__5804__auto__ = tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$content);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),dom);

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,null], null), null),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var temp__5804__auto___28824 = tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28824)){
var list_id_28825 = temp__5804__auto___28824;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28825));
} else {
}
} else {
}

var seq__28798_28826 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28799_28827 = null;
var count__28800_28828 = (0);
var i__28801_28829 = (0);
while(true){
if((i__28801_28829 < count__28800_28828)){
var attr_key_28830 = chunk__28799_28827.cljs$core$IIndexed$_nth$arity$2(null,i__28801_28829);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28830),"-")){
var temp__5804__auto___28831 = tiltontec.model.core.mget(me,attr_key_28830);
if(cljs.core.truth_(temp__5804__auto___28831)){
var attr_val_28832 = temp__5804__auto___28831;
dom.setAttribute(cljs.core.name(attr_key_28830),tiltontec.web_mx.base.attr_val$(attr_val_28832));
} else {
}
} else {
}


var G__28833 = seq__28798_28826;
var G__28834 = chunk__28799_28827;
var G__28835 = count__28800_28828;
var G__28836 = (i__28801_28829 + (1));
seq__28798_28826 = G__28833;
chunk__28799_28827 = G__28834;
count__28800_28828 = G__28835;
i__28801_28829 = G__28836;
continue;
} else {
var temp__5804__auto___28837 = cljs.core.seq(seq__28798_28826);
if(temp__5804__auto___28837){
var seq__28798_28838__$1 = temp__5804__auto___28837;
if(cljs.core.chunked_seq_QMARK_(seq__28798_28838__$1)){
var c__4556__auto___28839 = cljs.core.chunk_first(seq__28798_28838__$1);
var G__28840 = cljs.core.chunk_rest(seq__28798_28838__$1);
var G__28841 = c__4556__auto___28839;
var G__28842 = cljs.core.count(c__4556__auto___28839);
var G__28843 = (0);
seq__28798_28826 = G__28840;
chunk__28799_28827 = G__28841;
count__28800_28828 = G__28842;
i__28801_28829 = G__28843;
continue;
} else {
var attr_key_28844 = cljs.core.first(seq__28798_28838__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28844),"-")){
var temp__5804__auto___28845__$1 = tiltontec.model.core.mget(me,attr_key_28844);
if(cljs.core.truth_(temp__5804__auto___28845__$1)){
var attr_val_28846 = temp__5804__auto___28845__$1;
dom.setAttribute(cljs.core.name(attr_key_28844),tiltontec.web_mx.base.attr_val$(attr_val_28846));
} else {
}
} else {
}


var G__28847 = cljs.core.next(seq__28798_28838__$1);
var G__28848 = null;
var G__28849 = (0);
var G__28850 = (0);
seq__28798_28826 = G__28847;
chunk__28799_28827 = G__28848;
count__28800_28828 = G__28849;
i__28801_28829 = G__28850;
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
return tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$tag);
});
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__28851_28871 = cljs.core.seq(newv);
var chunk__28852_28872 = null;
var count__28853_28873 = (0);
var i__28854_28874 = (0);
while(true){
if((i__28854_28874 < count__28853_28873)){
var newk_28875 = chunk__28852_28872.cljs$core$IIndexed$_nth$arity$2(null,i__28854_28874);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28875)));


var G__28876 = seq__28851_28871;
var G__28877 = chunk__28852_28872;
var G__28878 = count__28853_28873;
var G__28879 = (i__28854_28874 + (1));
seq__28851_28871 = G__28876;
chunk__28852_28872 = G__28877;
count__28853_28873 = G__28878;
i__28854_28874 = G__28879;
continue;
} else {
var temp__5804__auto___28880 = cljs.core.seq(seq__28851_28871);
if(temp__5804__auto___28880){
var seq__28851_28881__$1 = temp__5804__auto___28880;
if(cljs.core.chunked_seq_QMARK_(seq__28851_28881__$1)){
var c__4556__auto___28882 = cljs.core.chunk_first(seq__28851_28881__$1);
var G__28883 = cljs.core.chunk_rest(seq__28851_28881__$1);
var G__28884 = c__4556__auto___28882;
var G__28885 = cljs.core.count(c__4556__auto___28882);
var G__28886 = (0);
seq__28851_28871 = G__28883;
chunk__28852_28872 = G__28884;
count__28853_28873 = G__28885;
i__28854_28874 = G__28886;
continue;
} else {
var newk_28887 = cljs.core.first(seq__28851_28881__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28887)));


var G__28888 = cljs.core.next(seq__28851_28881__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28851_28871 = G__28888;
chunk__28852_28872 = G__28889;
count__28853_28873 = G__28890;
i__28854_28874 = G__28891;
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
var seq__28855 = cljs.core.seq(lost);
var chunk__28856 = null;
var count__28857 = (0);
var i__28858 = (0);
while(true){
if((i__28858 < count__28857)){
var oldk = chunk__28856.cljs$core$IIndexed$_nth$arity$2(null,i__28858);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28861){if((e28861 instanceof Error)){
var e_28892 = e28861;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28892], 0));

} else {
throw e28861;

}
}}


var G__28893 = seq__28855;
var G__28894 = chunk__28856;
var G__28895 = count__28857;
var G__28896 = (i__28858 + (1));
seq__28855 = G__28893;
chunk__28856 = G__28894;
count__28857 = G__28895;
i__28858 = G__28896;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28855);
if(temp__5804__auto__){
var seq__28855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28855__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28855__$1);
var G__28897 = cljs.core.chunk_rest(seq__28855__$1);
var G__28898 = c__4556__auto__;
var G__28899 = cljs.core.count(c__4556__auto__);
var G__28900 = (0);
seq__28855 = G__28897;
chunk__28856 = G__28898;
count__28857 = G__28899;
i__28858 = G__28900;
continue;
} else {
var oldk = cljs.core.first(seq__28855__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28862){if((e28862 instanceof Error)){
var e_28901 = e28862;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28901], 0));

} else {
throw e28862;

}
}}


var G__28902 = cljs.core.next(seq__28855__$1);
var G__28903 = null;
var G__28904 = (0);
var G__28905 = (0);
seq__28855 = G__28902;
chunk__28856 = G__28903;
count__28857 = G__28904;
i__28858 = G__28905;
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
var seq__28863_28906 = cljs.core.seq(lost);
var chunk__28864_28907 = null;
var count__28865_28908 = (0);
var i__28866_28909 = (0);
while(true){
if((i__28866_28909 < count__28865_28908)){
var oldk_28910 = chunk__28864_28907.cljs$core$IIndexed$_nth$arity$2(null,i__28866_28909);
if(typeof oldk_28910 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28910) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28910));
}


var G__28911 = seq__28863_28906;
var G__28912 = chunk__28864_28907;
var G__28913 = count__28865_28908;
var G__28914 = (i__28866_28909 + (1));
seq__28863_28906 = G__28911;
chunk__28864_28907 = G__28912;
count__28865_28908 = G__28913;
i__28866_28909 = G__28914;
continue;
} else {
var temp__5804__auto___28915 = cljs.core.seq(seq__28863_28906);
if(temp__5804__auto___28915){
var seq__28863_28916__$1 = temp__5804__auto___28915;
if(cljs.core.chunked_seq_QMARK_(seq__28863_28916__$1)){
var c__4556__auto___28917 = cljs.core.chunk_first(seq__28863_28916__$1);
var G__28918 = cljs.core.chunk_rest(seq__28863_28916__$1);
var G__28919 = c__4556__auto___28917;
var G__28920 = cljs.core.count(c__4556__auto___28917);
var G__28921 = (0);
seq__28863_28906 = G__28918;
chunk__28864_28907 = G__28919;
count__28865_28908 = G__28920;
i__28866_28909 = G__28921;
continue;
} else {
var oldk_28922 = cljs.core.first(seq__28863_28916__$1);
if(typeof oldk_28922 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28922) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28922));
}


var G__28923 = cljs.core.next(seq__28863_28916__$1);
var G__28924 = null;
var G__28925 = (0);
var G__28926 = (0);
seq__28863_28906 = G__28923;
chunk__28864_28907 = G__28924;
count__28865_28908 = G__28925;
i__28866_28909 = G__28926;
continue;
}
} else {
}
}
break;
}

var seq__28867_28927 = cljs.core.seq(newv);
var chunk__28868_28928 = null;
var count__28869_28929 = (0);
var i__28870_28930 = (0);
while(true){
if((i__28870_28930 < count__28869_28929)){
var newk_28931 = chunk__28868_28928.cljs$core$IIndexed$_nth$arity$2(null,i__28870_28930);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28931]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28931)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28931)));


var G__28932 = seq__28867_28927;
var G__28933 = chunk__28868_28928;
var G__28934 = count__28869_28929;
var G__28935 = (i__28870_28930 + (1));
seq__28867_28927 = G__28932;
chunk__28868_28928 = G__28933;
count__28869_28929 = G__28934;
i__28870_28930 = G__28935;
continue;
} else {
var temp__5804__auto___28936 = cljs.core.seq(seq__28867_28927);
if(temp__5804__auto___28936){
var seq__28867_28937__$1 = temp__5804__auto___28936;
if(cljs.core.chunked_seq_QMARK_(seq__28867_28937__$1)){
var c__4556__auto___28938 = cljs.core.chunk_first(seq__28867_28937__$1);
var G__28939 = cljs.core.chunk_rest(seq__28867_28937__$1);
var G__28940 = c__4556__auto___28938;
var G__28941 = cljs.core.count(c__4556__auto___28938);
var G__28942 = (0);
seq__28867_28927 = G__28939;
chunk__28868_28928 = G__28940;
count__28869_28929 = G__28941;
i__28870_28930 = G__28942;
continue;
} else {
var newk_28943 = cljs.core.first(seq__28867_28937__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28943]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28943)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28943)));


var G__28944 = cljs.core.next(seq__28867_28937__$1);
var G__28945 = null;
var G__28946 = (0);
var G__28947 = (0);
seq__28867_28927 = G__28944;
chunk__28868_28928 = G__28945;
count__28869_28929 = G__28946;
i__28870_28930 = G__28947;
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
var seq__28948_28968 = cljs.core.seq(newv);
var chunk__28949_28969 = null;
var count__28950_28970 = (0);
var i__28951_28971 = (0);
while(true){
if((i__28951_28971 < count__28950_28970)){
var newk_28972 = chunk__28949_28969.cljs$core$IIndexed$_nth$arity$2(null,i__28951_28971);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28972)));


var G__28973 = seq__28948_28968;
var G__28974 = chunk__28949_28969;
var G__28975 = count__28950_28970;
var G__28976 = (i__28951_28971 + (1));
seq__28948_28968 = G__28973;
chunk__28949_28969 = G__28974;
count__28950_28970 = G__28975;
i__28951_28971 = G__28976;
continue;
} else {
var temp__5804__auto___28977 = cljs.core.seq(seq__28948_28968);
if(temp__5804__auto___28977){
var seq__28948_28978__$1 = temp__5804__auto___28977;
if(cljs.core.chunked_seq_QMARK_(seq__28948_28978__$1)){
var c__4556__auto___28979 = cljs.core.chunk_first(seq__28948_28978__$1);
var G__28980 = cljs.core.chunk_rest(seq__28948_28978__$1);
var G__28981 = c__4556__auto___28979;
var G__28982 = cljs.core.count(c__4556__auto___28979);
var G__28983 = (0);
seq__28948_28968 = G__28980;
chunk__28949_28969 = G__28981;
count__28950_28970 = G__28982;
i__28951_28971 = G__28983;
continue;
} else {
var newk_28984 = cljs.core.first(seq__28948_28978__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28984)));


var G__28985 = cljs.core.next(seq__28948_28978__$1);
var G__28986 = null;
var G__28987 = (0);
var G__28988 = (0);
seq__28948_28968 = G__28985;
chunk__28949_28969 = G__28986;
count__28950_28970 = G__28987;
i__28951_28971 = G__28988;
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
var seq__28952 = cljs.core.seq(lost);
var chunk__28953 = null;
var count__28954 = (0);
var i__28955 = (0);
while(true){
if((i__28955 < count__28954)){
var oldk = chunk__28953.cljs$core$IIndexed$_nth$arity$2(null,i__28955);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28989 = seq__28952;
var G__28990 = chunk__28953;
var G__28991 = count__28954;
var G__28992 = (i__28955 + (1));
seq__28952 = G__28989;
chunk__28953 = G__28990;
count__28954 = G__28991;
i__28955 = G__28992;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28952);
if(temp__5804__auto__){
var seq__28952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28952__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28952__$1);
var G__28993 = cljs.core.chunk_rest(seq__28952__$1);
var G__28994 = c__4556__auto__;
var G__28995 = cljs.core.count(c__4556__auto__);
var G__28996 = (0);
seq__28952 = G__28993;
chunk__28953 = G__28994;
count__28954 = G__28995;
i__28955 = G__28996;
continue;
} else {
var oldk = cljs.core.first(seq__28952__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28997 = cljs.core.next(seq__28952__$1);
var G__28998 = null;
var G__28999 = (0);
var G__29000 = (0);
seq__28952 = G__28997;
chunk__28953 = G__28998;
count__28954 = G__28999;
i__28955 = G__29000;
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
var seq__28956 = cljs.core.seq(gained);
var chunk__28957 = null;
var count__28958 = (0);
var i__28959 = (0);
while(true){
if((i__28959 < count__28958)){
var newk = chunk__28957.cljs$core$IIndexed$_nth$arity$2(null,i__28959);
var new_dom_29001 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29001);


var G__29002 = seq__28956;
var G__29003 = chunk__28957;
var G__29004 = count__28958;
var G__29005 = (i__28959 + (1));
seq__28956 = G__29002;
chunk__28957 = G__29003;
count__28958 = G__29004;
i__28959 = G__29005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28956);
if(temp__5804__auto__){
var seq__28956__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28956__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28956__$1);
var G__29006 = cljs.core.chunk_rest(seq__28956__$1);
var G__29007 = c__4556__auto__;
var G__29008 = cljs.core.count(c__4556__auto__);
var G__29009 = (0);
seq__28956 = G__29006;
chunk__28957 = G__29007;
count__28958 = G__29008;
i__28959 = G__29009;
continue;
} else {
var newk = cljs.core.first(seq__28956__$1);
var new_dom_29010 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29010);


var G__29011 = cljs.core.next(seq__28956__$1);
var G__29012 = null;
var G__29013 = (0);
var G__29014 = (0);
seq__28956 = G__29011;
chunk__28957 = G__29012;
count__28958 = G__29013;
i__28959 = G__29014;
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
var seq__28960_29015 = cljs.core.seq(lost);
var chunk__28961_29016 = null;
var count__28962_29017 = (0);
var i__28963_29018 = (0);
while(true){
if((i__28963_29018 < count__28962_29017)){
var oldk_29019 = chunk__28961_29016.cljs$core$IIndexed$_nth$arity$2(null,i__28963_29018);
if(typeof oldk_29019 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29019) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29019));
}


var G__29020 = seq__28960_29015;
var G__29021 = chunk__28961_29016;
var G__29022 = count__28962_29017;
var G__29023 = (i__28963_29018 + (1));
seq__28960_29015 = G__29020;
chunk__28961_29016 = G__29021;
count__28962_29017 = G__29022;
i__28963_29018 = G__29023;
continue;
} else {
var temp__5804__auto___29024 = cljs.core.seq(seq__28960_29015);
if(temp__5804__auto___29024){
var seq__28960_29025__$1 = temp__5804__auto___29024;
if(cljs.core.chunked_seq_QMARK_(seq__28960_29025__$1)){
var c__4556__auto___29026 = cljs.core.chunk_first(seq__28960_29025__$1);
var G__29027 = cljs.core.chunk_rest(seq__28960_29025__$1);
var G__29028 = c__4556__auto___29026;
var G__29029 = cljs.core.count(c__4556__auto___29026);
var G__29030 = (0);
seq__28960_29015 = G__29027;
chunk__28961_29016 = G__29028;
count__28962_29017 = G__29029;
i__28963_29018 = G__29030;
continue;
} else {
var oldk_29031 = cljs.core.first(seq__28960_29025__$1);
if(typeof oldk_29031 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29031) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29031));
}


var G__29032 = cljs.core.next(seq__28960_29025__$1);
var G__29033 = null;
var G__29034 = (0);
var G__29035 = (0);
seq__28960_29015 = G__29032;
chunk__28961_29016 = G__29033;
count__28962_29017 = G__29034;
i__28963_29018 = G__29035;
continue;
}
} else {
}
}
break;
}

var seq__28964_29036 = cljs.core.seq(newv);
var chunk__28965_29037 = null;
var count__28966_29038 = (0);
var i__28967_29039 = (0);
while(true){
if((i__28967_29039 < count__28966_29038)){
var newk_29040 = chunk__28965_29037.cljs$core$IIndexed$_nth$arity$2(null,i__28967_29039);
var new_dom_29041 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29040]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29040)):tiltontec.web_mx.html.svg_dom_create(newk_29040,false));
goog.dom.appendChild(frag,new_dom_29041);


var G__29042 = seq__28964_29036;
var G__29043 = chunk__28965_29037;
var G__29044 = count__28966_29038;
var G__29045 = (i__28967_29039 + (1));
seq__28964_29036 = G__29042;
chunk__28965_29037 = G__29043;
count__28966_29038 = G__29044;
i__28967_29039 = G__29045;
continue;
} else {
var temp__5804__auto___29046 = cljs.core.seq(seq__28964_29036);
if(temp__5804__auto___29046){
var seq__28964_29047__$1 = temp__5804__auto___29046;
if(cljs.core.chunked_seq_QMARK_(seq__28964_29047__$1)){
var c__4556__auto___29048 = cljs.core.chunk_first(seq__28964_29047__$1);
var G__29049 = cljs.core.chunk_rest(seq__28964_29047__$1);
var G__29050 = c__4556__auto___29048;
var G__29051 = cljs.core.count(c__4556__auto___29048);
var G__29052 = (0);
seq__28964_29036 = G__29049;
chunk__28965_29037 = G__29050;
count__28966_29038 = G__29051;
i__28967_29039 = G__29052;
continue;
} else {
var newk_29053 = cljs.core.first(seq__28964_29047__$1);
var new_dom_29054 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29053]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29053)):tiltontec.web_mx.html.svg_dom_create(newk_29053,false));
goog.dom.appendChild(frag,new_dom_29054);


var G__29055 = cljs.core.next(seq__28964_29047__$1);
var G__29056 = null;
var G__29057 = (0);
var G__29058 = (0);
seq__28964_29036 = G__29055;
chunk__28965_29037 = G__29056;
count__28966_29038 = G__29057;
i__28967_29039 = G__29058;
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
var G__29059 = slot;
var G__29059__$1 = (((G__29059 instanceof cljs.core.Keyword))?G__29059.fqn:null);
switch (G__29059__$1) {
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
var G__29060 = dom;
var G__29061 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__29060,G__29061);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29063_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget_QMARK_(p1__29063_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29064_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget_QMARK_(p1__29064_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget_QMARK_(p1__29065_SHARP_,cljs.core.cst$kw$id));
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
var G__29066 = cljs.core.rest(keys);
var G__29067 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__29066;
found = G__29067;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__29068 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__29069 = null;
var count__29070 = (0);
var i__29071 = (0);
while(true){
if((i__29071 < count__29070)){
var key = chunk__29069.cljs$core$IIndexed$_nth$arity$2(null,i__29071);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29072 = seq__29068;
var G__29073 = chunk__29069;
var G__29074 = count__29070;
var G__29075 = (i__29071 + (1));
seq__29068 = G__29072;
chunk__29069 = G__29073;
count__29070 = G__29074;
i__29071 = G__29075;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29068);
if(temp__5804__auto__){
var seq__29068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29068__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29068__$1);
var G__29076 = cljs.core.chunk_rest(seq__29068__$1);
var G__29077 = c__4556__auto__;
var G__29078 = cljs.core.count(c__4556__auto__);
var G__29079 = (0);
seq__29068 = G__29076;
chunk__29069 = G__29077;
count__29070 = G__29078;
i__29071 = G__29079;
continue;
} else {
var key = cljs.core.first(seq__29068__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29080 = cljs.core.next(seq__29068__$1);
var G__29081 = null;
var G__29082 = (0);
var G__29083 = (0);
seq__29068 = G__29080;
chunk__29069 = G__29081;
count__29070 = G__29082;
i__29071 = G__29083;
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

var G__29084 = dom;
var G__29085 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__29084,G__29085);
});
