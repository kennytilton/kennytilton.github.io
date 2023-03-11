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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28711(s__28712){
return (new cljs.core.LazySeq(null,(function (){
var s__28712__$1 = s__28712;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28712__$1);
if(temp__5804__auto__){
var s__28712__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28712__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28712__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28714 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28713 = (0);
while(true){
if((i__28713 < size__4528__auto__)){
var vec__28715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28713);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28715,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28714,k);

var G__28721 = (i__28713 + (1));
i__28713 = G__28721;
continue;
} else {
var G__28722 = (i__28713 + (1));
i__28713 = G__28722;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28714),tiltontec$web_mx$html$map_less_nils_$_iter__28711(cljs.core.chunk_rest(s__28712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28714),null);
}
} else {
var vec__28718 = cljs.core.first(s__28712__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28718,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28711(cljs.core.rest(s__28712__$2)));
} else {
var G__28723 = cljs.core.rest(s__28712__$2);
s__28712__$1 = G__28723;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28724(s__28725){
return (new cljs.core.LazySeq(null,(function (){
var s__28725__$1 = s__28725;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28725__$1);
if(temp__5804__auto__){
var s__28725__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28725__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28725__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28727 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28726 = (0);
while(true){
if((i__28726 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28726);
cljs.core.chunk_append(b__28727,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28728 = k;
var G__28728__$1 = (((G__28728 instanceof cljs.core.Keyword))?G__28728.fqn:null);
switch (G__28728__$1) {
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

var G__28731 = (i__28726 + (1));
i__28726 = G__28731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28727),tiltontec$web_mx$html$tag_properties_$_iter__28724(cljs.core.chunk_rest(s__28725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28727),null);
}
} else {
var k = cljs.core.first(s__28725__$2);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28729 = k;
var G__28729__$1 = (((G__28729 instanceof cljs.core.Keyword))?G__28729.fqn:null);
switch (G__28729__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28724(cljs.core.rest(s__28725__$2)));
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

var seq__28733_28747 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28735_28748 = null;
var count__28736_28749 = (0);
var i__28737_28750 = (0);
while(true){
if((i__28737_28750 < count__28736_28749)){
var ak_28751 = chunk__28735_28748.cljs$core$IIndexed$_nth$arity$2(null,i__28737_28750);
var ak$_28752 = cljs.core.name(ak_28751);
var av_28753 = (function (){var G__28741 = cljs.core.deref(me);
return (ak_28751.cljs$core$IFn$_invoke$arity$1 ? ak_28751.cljs$core$IFn$_invoke$arity$1(G__28741) : ak_28751.call(null,G__28741));
})();
if(cljs.core.fn_QMARK_(av_28753)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28752,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28752,(2)):ak$_28752),av_28753);
} else {
svg.setAttributeNS(null,ak$_28752,tiltontec.web_mx.base.attr_val$(av_28753));
}


var G__28754 = seq__28733_28747;
var G__28755 = chunk__28735_28748;
var G__28756 = count__28736_28749;
var G__28757 = (i__28737_28750 + (1));
seq__28733_28747 = G__28754;
chunk__28735_28748 = G__28755;
count__28736_28749 = G__28756;
i__28737_28750 = G__28757;
continue;
} else {
var temp__5804__auto___28758 = cljs.core.seq(seq__28733_28747);
if(temp__5804__auto___28758){
var seq__28733_28759__$1 = temp__5804__auto___28758;
if(cljs.core.chunked_seq_QMARK_(seq__28733_28759__$1)){
var c__4556__auto___28760 = cljs.core.chunk_first(seq__28733_28759__$1);
var G__28761 = cljs.core.chunk_rest(seq__28733_28759__$1);
var G__28762 = c__4556__auto___28760;
var G__28763 = cljs.core.count(c__4556__auto___28760);
var G__28764 = (0);
seq__28733_28747 = G__28761;
chunk__28735_28748 = G__28762;
count__28736_28749 = G__28763;
i__28737_28750 = G__28764;
continue;
} else {
var ak_28765 = cljs.core.first(seq__28733_28759__$1);
var ak$_28766 = cljs.core.name(ak_28765);
var av_28767 = (function (){var G__28742 = cljs.core.deref(me);
return (ak_28765.cljs$core$IFn$_invoke$arity$1 ? ak_28765.cljs$core$IFn$_invoke$arity$1(G__28742) : ak_28765.call(null,G__28742));
})();
if(cljs.core.fn_QMARK_(av_28767)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28766,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28766,(2)):ak$_28766),av_28767);
} else {
svg.setAttributeNS(null,ak$_28766,tiltontec.web_mx.base.attr_val$(av_28767));
}


var G__28768 = cljs.core.next(seq__28733_28759__$1);
var G__28769 = null;
var G__28770 = (0);
var G__28771 = (0);
seq__28733_28747 = G__28768;
chunk__28735_28748 = G__28769;
count__28736_28749 = G__28770;
i__28737_28750 = G__28771;
continue;
}
} else {
}
}
break;
}

var seq__28743_28772 = cljs.core.seq(tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__28744_28773 = null;
var count__28745_28774 = (0);
var i__28746_28775 = (0);
while(true){
if((i__28746_28775 < count__28745_28774)){
var kid_28776 = chunk__28744_28773.cljs$core$IIndexed$_nth$arity$2(null,i__28746_28775);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28776,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28776,dbg)));


var G__28777 = seq__28743_28772;
var G__28778 = chunk__28744_28773;
var G__28779 = count__28745_28774;
var G__28780 = (i__28746_28775 + (1));
seq__28743_28772 = G__28777;
chunk__28744_28773 = G__28778;
count__28745_28774 = G__28779;
i__28746_28775 = G__28780;
continue;
} else {
var temp__5804__auto___28781 = cljs.core.seq(seq__28743_28772);
if(temp__5804__auto___28781){
var seq__28743_28782__$1 = temp__5804__auto___28781;
if(cljs.core.chunked_seq_QMARK_(seq__28743_28782__$1)){
var c__4556__auto___28783 = cljs.core.chunk_first(seq__28743_28782__$1);
var G__28784 = cljs.core.chunk_rest(seq__28743_28782__$1);
var G__28785 = c__4556__auto___28783;
var G__28786 = cljs.core.count(c__4556__auto___28783);
var G__28787 = (0);
seq__28743_28772 = G__28784;
chunk__28744_28773 = G__28785;
count__28745_28774 = G__28786;
i__28746_28775 = G__28787;
continue;
} else {
var kid_28788 = cljs.core.first(seq__28743_28782__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28788,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28788,dbg)));


var G__28789 = cljs.core.next(seq__28743_28782__$1);
var G__28790 = null;
var G__28791 = (0);
var G__28792 = (0);
seq__28743_28772 = G__28789;
chunk__28744_28773 = G__28790;
count__28745_28774 = G__28791;
i__28746_28775 = G__28792;
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
var G__28795 = arguments.length;
switch (G__28795) {
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
var seq__28796_28805 = cljs.core.seq(me);
var chunk__28797_28806 = null;
var count__28798_28807 = (0);
var i__28799_28808 = (0);
while(true){
if((i__28799_28808 < count__28798_28807)){
var tag_28809 = chunk__28797_28806.cljs$core$IIndexed$_nth$arity$2(null,i__28799_28808);
if(cljs.core.truth_(tag_28809)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28809));
} else {
}


var G__28810 = seq__28796_28805;
var G__28811 = chunk__28797_28806;
var G__28812 = count__28798_28807;
var G__28813 = (i__28799_28808 + (1));
seq__28796_28805 = G__28810;
chunk__28797_28806 = G__28811;
count__28798_28807 = G__28812;
i__28799_28808 = G__28813;
continue;
} else {
var temp__5804__auto___28814 = cljs.core.seq(seq__28796_28805);
if(temp__5804__auto___28814){
var seq__28796_28815__$1 = temp__5804__auto___28814;
if(cljs.core.chunked_seq_QMARK_(seq__28796_28815__$1)){
var c__4556__auto___28816 = cljs.core.chunk_first(seq__28796_28815__$1);
var G__28817 = cljs.core.chunk_rest(seq__28796_28815__$1);
var G__28818 = c__4556__auto___28816;
var G__28819 = cljs.core.count(c__4556__auto___28816);
var G__28820 = (0);
seq__28796_28805 = G__28817;
chunk__28797_28806 = G__28818;
count__28798_28807 = G__28819;
i__28799_28808 = G__28820;
continue;
} else {
var tag_28821 = cljs.core.first(seq__28796_28815__$1);
if(cljs.core.truth_(tag_28821)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28821));
} else {
}


var G__28822 = cljs.core.next(seq__28796_28815__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28796_28805 = G__28822;
chunk__28797_28806 = G__28823;
count__28798_28807 = G__28824;
i__28799_28808 = G__28825;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28793_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28793_SHARP_,dbg);
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
var temp__5804__auto___28826 = tiltontec.model.core.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28826)){
var list_id_28827 = temp__5804__auto___28826;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28827));
} else {
}
} else {
}

var seq__28800_28828 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28801_28829 = null;
var count__28802_28830 = (0);
var i__28803_28831 = (0);
while(true){
if((i__28803_28831 < count__28802_28830)){
var attr_key_28832 = chunk__28801_28829.cljs$core$IIndexed$_nth$arity$2(null,i__28803_28831);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28832),"-")){
var temp__5804__auto___28833 = tiltontec.model.core.mget(me,attr_key_28832);
if(cljs.core.truth_(temp__5804__auto___28833)){
var attr_val_28834 = temp__5804__auto___28833;
dom.setAttribute(cljs.core.name(attr_key_28832),tiltontec.web_mx.base.attr_val$(attr_val_28834));
} else {
}
} else {
}


var G__28835 = seq__28800_28828;
var G__28836 = chunk__28801_28829;
var G__28837 = count__28802_28830;
var G__28838 = (i__28803_28831 + (1));
seq__28800_28828 = G__28835;
chunk__28801_28829 = G__28836;
count__28802_28830 = G__28837;
i__28803_28831 = G__28838;
continue;
} else {
var temp__5804__auto___28839 = cljs.core.seq(seq__28800_28828);
if(temp__5804__auto___28839){
var seq__28800_28840__$1 = temp__5804__auto___28839;
if(cljs.core.chunked_seq_QMARK_(seq__28800_28840__$1)){
var c__4556__auto___28841 = cljs.core.chunk_first(seq__28800_28840__$1);
var G__28842 = cljs.core.chunk_rest(seq__28800_28840__$1);
var G__28843 = c__4556__auto___28841;
var G__28844 = cljs.core.count(c__4556__auto___28841);
var G__28845 = (0);
seq__28800_28828 = G__28842;
chunk__28801_28829 = G__28843;
count__28802_28830 = G__28844;
i__28803_28831 = G__28845;
continue;
} else {
var attr_key_28846 = cljs.core.first(seq__28800_28840__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28846),"-")){
var temp__5804__auto___28847__$1 = tiltontec.model.core.mget(me,attr_key_28846);
if(cljs.core.truth_(temp__5804__auto___28847__$1)){
var attr_val_28848 = temp__5804__auto___28847__$1;
dom.setAttribute(cljs.core.name(attr_key_28846),tiltontec.web_mx.base.attr_val$(attr_val_28848));
} else {
}
} else {
}


var G__28849 = cljs.core.next(seq__28800_28840__$1);
var G__28850 = null;
var G__28851 = (0);
var G__28852 = (0);
seq__28800_28828 = G__28849;
chunk__28801_28829 = G__28850;
count__28802_28830 = G__28851;
i__28803_28831 = G__28852;
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
var seq__28853_28873 = cljs.core.seq(newv);
var chunk__28854_28874 = null;
var count__28855_28875 = (0);
var i__28856_28876 = (0);
while(true){
if((i__28856_28876 < count__28855_28875)){
var newk_28877 = chunk__28854_28874.cljs$core$IIndexed$_nth$arity$2(null,i__28856_28876);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28877)));


var G__28878 = seq__28853_28873;
var G__28879 = chunk__28854_28874;
var G__28880 = count__28855_28875;
var G__28881 = (i__28856_28876 + (1));
seq__28853_28873 = G__28878;
chunk__28854_28874 = G__28879;
count__28855_28875 = G__28880;
i__28856_28876 = G__28881;
continue;
} else {
var temp__5804__auto___28882 = cljs.core.seq(seq__28853_28873);
if(temp__5804__auto___28882){
var seq__28853_28883__$1 = temp__5804__auto___28882;
if(cljs.core.chunked_seq_QMARK_(seq__28853_28883__$1)){
var c__4556__auto___28884 = cljs.core.chunk_first(seq__28853_28883__$1);
var G__28885 = cljs.core.chunk_rest(seq__28853_28883__$1);
var G__28886 = c__4556__auto___28884;
var G__28887 = cljs.core.count(c__4556__auto___28884);
var G__28888 = (0);
seq__28853_28873 = G__28885;
chunk__28854_28874 = G__28886;
count__28855_28875 = G__28887;
i__28856_28876 = G__28888;
continue;
} else {
var newk_28889 = cljs.core.first(seq__28853_28883__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28889)));


var G__28890 = cljs.core.next(seq__28853_28883__$1);
var G__28891 = null;
var G__28892 = (0);
var G__28893 = (0);
seq__28853_28873 = G__28890;
chunk__28854_28874 = G__28891;
count__28855_28875 = G__28892;
i__28856_28876 = G__28893;
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
var seq__28857 = cljs.core.seq(lost);
var chunk__28858 = null;
var count__28859 = (0);
var i__28860 = (0);
while(true){
if((i__28860 < count__28859)){
var oldk = chunk__28858.cljs$core$IIndexed$_nth$arity$2(null,i__28860);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28863){if((e28863 instanceof Error)){
var e_28894 = e28863;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28894], 0));

} else {
throw e28863;

}
}}


var G__28895 = seq__28857;
var G__28896 = chunk__28858;
var G__28897 = count__28859;
var G__28898 = (i__28860 + (1));
seq__28857 = G__28895;
chunk__28858 = G__28896;
count__28859 = G__28897;
i__28860 = G__28898;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28857);
if(temp__5804__auto__){
var seq__28857__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28857__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28857__$1);
var G__28899 = cljs.core.chunk_rest(seq__28857__$1);
var G__28900 = c__4556__auto__;
var G__28901 = cljs.core.count(c__4556__auto__);
var G__28902 = (0);
seq__28857 = G__28899;
chunk__28858 = G__28900;
count__28859 = G__28901;
i__28860 = G__28902;
continue;
} else {
var oldk = cljs.core.first(seq__28857__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}catch (e28864){if((e28864 instanceof Error)){
var e_28903 = e28864;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28903], 0));

} else {
throw e28864;

}
}}


var G__28904 = cljs.core.next(seq__28857__$1);
var G__28905 = null;
var G__28906 = (0);
var G__28907 = (0);
seq__28857 = G__28904;
chunk__28858 = G__28905;
count__28859 = G__28906;
i__28860 = G__28907;
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
var seq__28865_28908 = cljs.core.seq(lost);
var chunk__28866_28909 = null;
var count__28867_28910 = (0);
var i__28868_28911 = (0);
while(true){
if((i__28868_28911 < count__28867_28910)){
var oldk_28912 = chunk__28866_28909.cljs$core$IIndexed$_nth$arity$2(null,i__28868_28911);
if(typeof oldk_28912 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28912) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28912));
}


var G__28913 = seq__28865_28908;
var G__28914 = chunk__28866_28909;
var G__28915 = count__28867_28910;
var G__28916 = (i__28868_28911 + (1));
seq__28865_28908 = G__28913;
chunk__28866_28909 = G__28914;
count__28867_28910 = G__28915;
i__28868_28911 = G__28916;
continue;
} else {
var temp__5804__auto___28917 = cljs.core.seq(seq__28865_28908);
if(temp__5804__auto___28917){
var seq__28865_28918__$1 = temp__5804__auto___28917;
if(cljs.core.chunked_seq_QMARK_(seq__28865_28918__$1)){
var c__4556__auto___28919 = cljs.core.chunk_first(seq__28865_28918__$1);
var G__28920 = cljs.core.chunk_rest(seq__28865_28918__$1);
var G__28921 = c__4556__auto___28919;
var G__28922 = cljs.core.count(c__4556__auto___28919);
var G__28923 = (0);
seq__28865_28908 = G__28920;
chunk__28866_28909 = G__28921;
count__28867_28910 = G__28922;
i__28868_28911 = G__28923;
continue;
} else {
var oldk_28924 = cljs.core.first(seq__28865_28918__$1);
if(typeof oldk_28924 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28924) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_28924));
}


var G__28925 = cljs.core.next(seq__28865_28918__$1);
var G__28926 = null;
var G__28927 = (0);
var G__28928 = (0);
seq__28865_28908 = G__28925;
chunk__28866_28909 = G__28926;
count__28867_28910 = G__28927;
i__28868_28911 = G__28928;
continue;
}
} else {
}
}
break;
}

var seq__28869_28929 = cljs.core.seq(newv);
var chunk__28870_28930 = null;
var count__28871_28931 = (0);
var i__28872_28932 = (0);
while(true){
if((i__28872_28932 < count__28871_28931)){
var newk_28933 = chunk__28870_28930.cljs$core$IIndexed$_nth$arity$2(null,i__28872_28932);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28933]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28933)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28933)));


var G__28934 = seq__28869_28929;
var G__28935 = chunk__28870_28930;
var G__28936 = count__28871_28931;
var G__28937 = (i__28872_28932 + (1));
seq__28869_28929 = G__28934;
chunk__28870_28930 = G__28935;
count__28871_28931 = G__28936;
i__28872_28932 = G__28937;
continue;
} else {
var temp__5804__auto___28938 = cljs.core.seq(seq__28869_28929);
if(temp__5804__auto___28938){
var seq__28869_28939__$1 = temp__5804__auto___28938;
if(cljs.core.chunked_seq_QMARK_(seq__28869_28939__$1)){
var c__4556__auto___28940 = cljs.core.chunk_first(seq__28869_28939__$1);
var G__28941 = cljs.core.chunk_rest(seq__28869_28939__$1);
var G__28942 = c__4556__auto___28940;
var G__28943 = cljs.core.count(c__4556__auto___28940);
var G__28944 = (0);
seq__28869_28929 = G__28941;
chunk__28870_28930 = G__28942;
count__28871_28931 = G__28943;
i__28872_28932 = G__28944;
continue;
} else {
var newk_28945 = cljs.core.first(seq__28869_28939__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28945]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28945)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28945)));


var G__28946 = cljs.core.next(seq__28869_28939__$1);
var G__28947 = null;
var G__28948 = (0);
var G__28949 = (0);
seq__28869_28929 = G__28946;
chunk__28870_28930 = G__28947;
count__28871_28931 = G__28948;
i__28872_28932 = G__28949;
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
var seq__28950_28970 = cljs.core.seq(newv);
var chunk__28951_28971 = null;
var count__28952_28972 = (0);
var i__28953_28973 = (0);
while(true){
if((i__28953_28973 < count__28952_28972)){
var newk_28974 = chunk__28951_28971.cljs$core$IIndexed$_nth$arity$2(null,i__28953_28973);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28974)));


var G__28975 = seq__28950_28970;
var G__28976 = chunk__28951_28971;
var G__28977 = count__28952_28972;
var G__28978 = (i__28953_28973 + (1));
seq__28950_28970 = G__28975;
chunk__28951_28971 = G__28976;
count__28952_28972 = G__28977;
i__28953_28973 = G__28978;
continue;
} else {
var temp__5804__auto___28979 = cljs.core.seq(seq__28950_28970);
if(temp__5804__auto___28979){
var seq__28950_28980__$1 = temp__5804__auto___28979;
if(cljs.core.chunked_seq_QMARK_(seq__28950_28980__$1)){
var c__4556__auto___28981 = cljs.core.chunk_first(seq__28950_28980__$1);
var G__28982 = cljs.core.chunk_rest(seq__28950_28980__$1);
var G__28983 = c__4556__auto___28981;
var G__28984 = cljs.core.count(c__4556__auto___28981);
var G__28985 = (0);
seq__28950_28970 = G__28982;
chunk__28951_28971 = G__28983;
count__28952_28972 = G__28984;
i__28953_28973 = G__28985;
continue;
} else {
var newk_28986 = cljs.core.first(seq__28950_28980__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28986)));


var G__28987 = cljs.core.next(seq__28950_28980__$1);
var G__28988 = null;
var G__28989 = (0);
var G__28990 = (0);
seq__28950_28970 = G__28987;
chunk__28951_28971 = G__28988;
count__28952_28972 = G__28989;
i__28953_28973 = G__28990;
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
var seq__28954 = cljs.core.seq(lost);
var chunk__28955 = null;
var count__28956 = (0);
var i__28957 = (0);
while(true){
if((i__28957 < count__28956)){
var oldk = chunk__28955.cljs$core$IIndexed$_nth$arity$2(null,i__28957);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28991 = seq__28954;
var G__28992 = chunk__28955;
var G__28993 = count__28956;
var G__28994 = (i__28957 + (1));
seq__28954 = G__28991;
chunk__28955 = G__28992;
count__28956 = G__28993;
i__28957 = G__28994;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28954);
if(temp__5804__auto__){
var seq__28954__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28954__$1);
var G__28995 = cljs.core.chunk_rest(seq__28954__$1);
var G__28996 = c__4556__auto__;
var G__28997 = cljs.core.count(c__4556__auto__);
var G__28998 = (0);
seq__28954 = G__28995;
chunk__28955 = G__28996;
count__28956 = G__28997;
i__28957 = G__28998;
continue;
} else {
var oldk = cljs.core.first(seq__28954__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk));
}


var G__28999 = cljs.core.next(seq__28954__$1);
var G__29000 = null;
var G__29001 = (0);
var G__29002 = (0);
seq__28954 = G__28999;
chunk__28955 = G__29000;
count__28956 = G__29001;
i__28957 = G__29002;
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
var seq__28958 = cljs.core.seq(gained);
var chunk__28959 = null;
var count__28960 = (0);
var i__28961 = (0);
while(true){
if((i__28961 < count__28960)){
var newk = chunk__28959.cljs$core$IIndexed$_nth$arity$2(null,i__28961);
var new_dom_29003 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29003);


var G__29004 = seq__28958;
var G__29005 = chunk__28959;
var G__29006 = count__28960;
var G__29007 = (i__28961 + (1));
seq__28958 = G__29004;
chunk__28959 = G__29005;
count__28960 = G__29006;
i__28961 = G__29007;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28958);
if(temp__5804__auto__){
var seq__28958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28958__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28958__$1);
var G__29008 = cljs.core.chunk_rest(seq__28958__$1);
var G__29009 = c__4556__auto__;
var G__29010 = cljs.core.count(c__4556__auto__);
var G__29011 = (0);
seq__28958 = G__29008;
chunk__28959 = G__29009;
count__28960 = G__29010;
i__28961 = G__29011;
continue;
} else {
var newk = cljs.core.first(seq__28958__$1);
var new_dom_29012 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29012);


var G__29013 = cljs.core.next(seq__28958__$1);
var G__29014 = null;
var G__29015 = (0);
var G__29016 = (0);
seq__28958 = G__29013;
chunk__28959 = G__29014;
count__28960 = G__29015;
i__28961 = G__29016;
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
var seq__28962_29017 = cljs.core.seq(lost);
var chunk__28963_29018 = null;
var count__28964_29019 = (0);
var i__28965_29020 = (0);
while(true){
if((i__28965_29020 < count__28964_29019)){
var oldk_29021 = chunk__28963_29018.cljs$core$IIndexed$_nth$arity$2(null,i__28965_29020);
if(typeof oldk_29021 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29021) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29021));
}


var G__29022 = seq__28962_29017;
var G__29023 = chunk__28963_29018;
var G__29024 = count__28964_29019;
var G__29025 = (i__28965_29020 + (1));
seq__28962_29017 = G__29022;
chunk__28963_29018 = G__29023;
count__28964_29019 = G__29024;
i__28965_29020 = G__29025;
continue;
} else {
var temp__5804__auto___29026 = cljs.core.seq(seq__28962_29017);
if(temp__5804__auto___29026){
var seq__28962_29027__$1 = temp__5804__auto___29026;
if(cljs.core.chunked_seq_QMARK_(seq__28962_29027__$1)){
var c__4556__auto___29028 = cljs.core.chunk_first(seq__28962_29027__$1);
var G__29029 = cljs.core.chunk_rest(seq__28962_29027__$1);
var G__29030 = c__4556__auto___29028;
var G__29031 = cljs.core.count(c__4556__auto___29028);
var G__29032 = (0);
seq__28962_29017 = G__29029;
chunk__28963_29018 = G__29030;
count__28964_29019 = G__29031;
i__28965_29020 = G__29032;
continue;
} else {
var oldk_29033 = cljs.core.first(seq__28962_29027__$1);
if(typeof oldk_29033 === 'string'){
} else {
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29033) : tiltontec.cell.evaluate.md_quiesce.call(null,oldk_29033));
}


var G__29034 = cljs.core.next(seq__28962_29027__$1);
var G__29035 = null;
var G__29036 = (0);
var G__29037 = (0);
seq__28962_29017 = G__29034;
chunk__28963_29018 = G__29035;
count__28964_29019 = G__29036;
i__28965_29020 = G__29037;
continue;
}
} else {
}
}
break;
}

var seq__28966_29038 = cljs.core.seq(newv);
var chunk__28967_29039 = null;
var count__28968_29040 = (0);
var i__28969_29041 = (0);
while(true){
if((i__28969_29041 < count__28968_29040)){
var newk_29042 = chunk__28967_29039.cljs$core$IIndexed$_nth$arity$2(null,i__28969_29041);
var new_dom_29043 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29042]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29042)):tiltontec.web_mx.html.svg_dom_create(newk_29042,false));
goog.dom.appendChild(frag,new_dom_29043);


var G__29044 = seq__28966_29038;
var G__29045 = chunk__28967_29039;
var G__29046 = count__28968_29040;
var G__29047 = (i__28969_29041 + (1));
seq__28966_29038 = G__29044;
chunk__28967_29039 = G__29045;
count__28968_29040 = G__29046;
i__28969_29041 = G__29047;
continue;
} else {
var temp__5804__auto___29048 = cljs.core.seq(seq__28966_29038);
if(temp__5804__auto___29048){
var seq__28966_29049__$1 = temp__5804__auto___29048;
if(cljs.core.chunked_seq_QMARK_(seq__28966_29049__$1)){
var c__4556__auto___29050 = cljs.core.chunk_first(seq__28966_29049__$1);
var G__29051 = cljs.core.chunk_rest(seq__28966_29049__$1);
var G__29052 = c__4556__auto___29050;
var G__29053 = cljs.core.count(c__4556__auto___29050);
var G__29054 = (0);
seq__28966_29038 = G__29051;
chunk__28967_29039 = G__29052;
count__28968_29040 = G__29053;
i__28969_29041 = G__29054;
continue;
} else {
var newk_29055 = cljs.core.first(seq__28966_29049__$1);
var new_dom_29056 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29055]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29055)):tiltontec.web_mx.html.svg_dom_create(newk_29055,false));
goog.dom.appendChild(frag,new_dom_29056);


var G__29057 = cljs.core.next(seq__28966_29049__$1);
var G__29058 = null;
var G__29059 = (0);
var G__29060 = (0);
seq__28966_29038 = G__29057;
chunk__28967_29039 = G__29058;
count__28968_29040 = G__29059;
i__28969_29041 = G__29060;
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
var G__29061 = slot;
var G__29061__$1 = (((G__29061 instanceof cljs.core.Keyword))?G__29061.fqn:null);
switch (G__29061__$1) {
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
var G__29062 = dom;
var G__29063 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__29062,G__29063);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29065_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget_QMARK_(p1__29065_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget_QMARK_(p1__29066_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29067_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget_QMARK_(p1__29067_SHARP_,cljs.core.cst$kw$id));
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
var G__29068 = cljs.core.rest(keys);
var G__29069 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__29068;
found = G__29069;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__29070 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__29071 = null;
var count__29072 = (0);
var i__29073 = (0);
while(true){
if((i__29073 < count__29072)){
var key = chunk__29071.cljs$core$IIndexed$_nth$arity$2(null,i__29073);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29074 = seq__29070;
var G__29075 = chunk__29071;
var G__29076 = count__29072;
var G__29077 = (i__29073 + (1));
seq__29070 = G__29074;
chunk__29071 = G__29075;
count__29072 = G__29076;
i__29073 = G__29077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29070);
if(temp__5804__auto__){
var seq__29070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29070__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29070__$1);
var G__29078 = cljs.core.chunk_rest(seq__29070__$1);
var G__29079 = c__4556__auto__;
var G__29080 = cljs.core.count(c__4556__auto__);
var G__29081 = (0);
seq__29070 = G__29078;
chunk__29071 = G__29079;
count__29072 = G__29080;
i__29073 = G__29081;
continue;
} else {
var key = cljs.core.first(seq__29070__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29082 = cljs.core.next(seq__29070__$1);
var G__29083 = null;
var G__29084 = (0);
var G__29085 = (0);
seq__29070 = G__29082;
chunk__29071 = G__29083;
count__29072 = G__29084;
i__29073 = G__29085;
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

var G__29086 = dom;
var G__29087 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__29086,G__29087);
});
