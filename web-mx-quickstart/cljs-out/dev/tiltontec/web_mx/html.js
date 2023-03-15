// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.watch');
goog.require('tiltontec.matrix.api');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28763(s__28764){
return (new cljs.core.LazySeq(null,(function (){
var s__28764__$1 = s__28764;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28764__$1);
if(temp__5804__auto__){
var s__28764__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28764__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28764__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28766 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28765 = (0);
while(true){
if((i__28765 < size__4528__auto__)){
var vec__28767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28765);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28767,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28766,k);

var G__28773 = (i__28765 + (1));
i__28765 = G__28773;
continue;
} else {
var G__28774 = (i__28765 + (1));
i__28765 = G__28774;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28766),tiltontec$web_mx$html$map_less_nils_$_iter__28763(cljs.core.chunk_rest(s__28764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28766),null);
}
} else {
var vec__28770 = cljs.core.first(s__28764__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28763(cljs.core.rest(s__28764__$2)));
} else {
var G__28775 = cljs.core.rest(s__28764__$2);
s__28764__$1 = G__28775;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28776(s__28777){
return (new cljs.core.LazySeq(null,(function (){
var s__28777__$1 = s__28777;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28777__$1);
if(temp__5804__auto__){
var s__28777__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28777__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28777__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28779 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28778 = (0);
while(true){
if((i__28778 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28778);
cljs.core.chunk_append(b__28779,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28780 = k;
var G__28780__$1 = (((G__28780 instanceof cljs.core.Keyword))?G__28780.fqn:null);
switch (G__28780__$1) {
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

var G__28783 = (i__28778 + (1));
i__28778 = G__28783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28779),tiltontec$web_mx$html$tag_properties_$_iter__28776(cljs.core.chunk_rest(s__28777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28779),null);
}
} else {
var k = cljs.core.first(s__28777__$2);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28781 = k;
var G__28781__$1 = (((G__28781 instanceof cljs.core.Keyword))?G__28781.fqn:null);
switch (G__28781__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28776(cljs.core.rest(s__28777__$2)));
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

var seq__28785_28799 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28787_28800 = null;
var count__28788_28801 = (0);
var i__28789_28802 = (0);
while(true){
if((i__28789_28802 < count__28788_28801)){
var ak_28803 = chunk__28787_28800.cljs$core$IIndexed$_nth$arity$2(null,i__28789_28802);
var ak$_28804 = cljs.core.name(ak_28803);
var av_28805 = (function (){var G__28793 = cljs.core.deref(me);
return (ak_28803.cljs$core$IFn$_invoke$arity$1 ? ak_28803.cljs$core$IFn$_invoke$arity$1(G__28793) : ak_28803.call(null,G__28793));
})();
if(cljs.core.fn_QMARK_(av_28805)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28804,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28804,(2)):ak$_28804),av_28805);
} else {
svg.setAttributeNS(null,ak$_28804,tiltontec.web_mx.base.attr_val$(av_28805));
}


var G__28806 = seq__28785_28799;
var G__28807 = chunk__28787_28800;
var G__28808 = count__28788_28801;
var G__28809 = (i__28789_28802 + (1));
seq__28785_28799 = G__28806;
chunk__28787_28800 = G__28807;
count__28788_28801 = G__28808;
i__28789_28802 = G__28809;
continue;
} else {
var temp__5804__auto___28810 = cljs.core.seq(seq__28785_28799);
if(temp__5804__auto___28810){
var seq__28785_28811__$1 = temp__5804__auto___28810;
if(cljs.core.chunked_seq_QMARK_(seq__28785_28811__$1)){
var c__4556__auto___28812 = cljs.core.chunk_first(seq__28785_28811__$1);
var G__28813 = cljs.core.chunk_rest(seq__28785_28811__$1);
var G__28814 = c__4556__auto___28812;
var G__28815 = cljs.core.count(c__4556__auto___28812);
var G__28816 = (0);
seq__28785_28799 = G__28813;
chunk__28787_28800 = G__28814;
count__28788_28801 = G__28815;
i__28789_28802 = G__28816;
continue;
} else {
var ak_28817 = cljs.core.first(seq__28785_28811__$1);
var ak$_28818 = cljs.core.name(ak_28817);
var av_28819 = (function (){var G__28794 = cljs.core.deref(me);
return (ak_28817.cljs$core$IFn$_invoke$arity$1 ? ak_28817.cljs$core$IFn$_invoke$arity$1(G__28794) : ak_28817.call(null,G__28794));
})();
if(cljs.core.fn_QMARK_(av_28819)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28818,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28818,(2)):ak$_28818),av_28819);
} else {
svg.setAttributeNS(null,ak$_28818,tiltontec.web_mx.base.attr_val$(av_28819));
}


var G__28820 = cljs.core.next(seq__28785_28811__$1);
var G__28821 = null;
var G__28822 = (0);
var G__28823 = (0);
seq__28785_28799 = G__28820;
chunk__28787_28800 = G__28821;
count__28788_28801 = G__28822;
i__28789_28802 = G__28823;
continue;
}
} else {
}
}
break;
}

var seq__28795_28824 = cljs.core.seq(tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__28796_28825 = null;
var count__28797_28826 = (0);
var i__28798_28827 = (0);
while(true){
if((i__28798_28827 < count__28797_28826)){
var kid_28828 = chunk__28796_28825.cljs$core$IIndexed$_nth$arity$2(null,i__28798_28827);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28828,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28828,dbg)));


var G__28829 = seq__28795_28824;
var G__28830 = chunk__28796_28825;
var G__28831 = count__28797_28826;
var G__28832 = (i__28798_28827 + (1));
seq__28795_28824 = G__28829;
chunk__28796_28825 = G__28830;
count__28797_28826 = G__28831;
i__28798_28827 = G__28832;
continue;
} else {
var temp__5804__auto___28833 = cljs.core.seq(seq__28795_28824);
if(temp__5804__auto___28833){
var seq__28795_28834__$1 = temp__5804__auto___28833;
if(cljs.core.chunked_seq_QMARK_(seq__28795_28834__$1)){
var c__4556__auto___28835 = cljs.core.chunk_first(seq__28795_28834__$1);
var G__28836 = cljs.core.chunk_rest(seq__28795_28834__$1);
var G__28837 = c__4556__auto___28835;
var G__28838 = cljs.core.count(c__4556__auto___28835);
var G__28839 = (0);
seq__28795_28824 = G__28836;
chunk__28796_28825 = G__28837;
count__28797_28826 = G__28838;
i__28798_28827 = G__28839;
continue;
} else {
var kid_28840 = cljs.core.first(seq__28795_28834__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28840,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28840,dbg)));


var G__28841 = cljs.core.next(seq__28795_28834__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28795_28824 = G__28841;
chunk__28796_28825 = G__28842;
count__28797_28826 = G__28843;
i__28798_28827 = G__28844;
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
var G__28847 = arguments.length;
switch (G__28847) {
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
var seq__28848_28857 = cljs.core.seq(me);
var chunk__28849_28858 = null;
var count__28850_28859 = (0);
var i__28851_28860 = (0);
while(true){
if((i__28851_28860 < count__28850_28859)){
var tag_28861 = chunk__28849_28858.cljs$core$IIndexed$_nth$arity$2(null,i__28851_28860);
if(cljs.core.truth_(tag_28861)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28861));
} else {
}


var G__28862 = seq__28848_28857;
var G__28863 = chunk__28849_28858;
var G__28864 = count__28850_28859;
var G__28865 = (i__28851_28860 + (1));
seq__28848_28857 = G__28862;
chunk__28849_28858 = G__28863;
count__28850_28859 = G__28864;
i__28851_28860 = G__28865;
continue;
} else {
var temp__5804__auto___28866 = cljs.core.seq(seq__28848_28857);
if(temp__5804__auto___28866){
var seq__28848_28867__$1 = temp__5804__auto___28866;
if(cljs.core.chunked_seq_QMARK_(seq__28848_28867__$1)){
var c__4556__auto___28868 = cljs.core.chunk_first(seq__28848_28867__$1);
var G__28869 = cljs.core.chunk_rest(seq__28848_28867__$1);
var G__28870 = c__4556__auto___28868;
var G__28871 = cljs.core.count(c__4556__auto___28868);
var G__28872 = (0);
seq__28848_28857 = G__28869;
chunk__28849_28858 = G__28870;
count__28850_28859 = G__28871;
i__28851_28860 = G__28872;
continue;
} else {
var tag_28873 = cljs.core.first(seq__28848_28867__$1);
if(cljs.core.truth_(tag_28873)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28873));
} else {
}


var G__28874 = cljs.core.next(seq__28848_28867__$1);
var G__28875 = null;
var G__28876 = (0);
var G__28877 = (0);
seq__28848_28857 = G__28874;
chunk__28849_28858 = G__28875;
count__28850_28859 = G__28876;
i__28851_28860 = G__28877;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28845_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28845_SHARP_,dbg);
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
var temp__5804__auto___28878 = tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28878)){
var list_id_28879 = temp__5804__auto___28878;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28879));
} else {
}
} else {
}

var seq__28852_28880 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28853_28881 = null;
var count__28854_28882 = (0);
var i__28855_28883 = (0);
while(true){
if((i__28855_28883 < count__28854_28882)){
var attr_key_28884 = chunk__28853_28881.cljs$core$IIndexed$_nth$arity$2(null,i__28855_28883);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28884),"-")){
var temp__5804__auto___28885 = tiltontec.matrix.api.mget(me,attr_key_28884);
if(cljs.core.truth_(temp__5804__auto___28885)){
var attr_val_28886 = temp__5804__auto___28885;
dom.setAttribute(cljs.core.name(attr_key_28884),tiltontec.web_mx.base.attr_val$(attr_val_28886));
} else {
}
} else {
}


var G__28887 = seq__28852_28880;
var G__28888 = chunk__28853_28881;
var G__28889 = count__28854_28882;
var G__28890 = (i__28855_28883 + (1));
seq__28852_28880 = G__28887;
chunk__28853_28881 = G__28888;
count__28854_28882 = G__28889;
i__28855_28883 = G__28890;
continue;
} else {
var temp__5804__auto___28891 = cljs.core.seq(seq__28852_28880);
if(temp__5804__auto___28891){
var seq__28852_28892__$1 = temp__5804__auto___28891;
if(cljs.core.chunked_seq_QMARK_(seq__28852_28892__$1)){
var c__4556__auto___28893 = cljs.core.chunk_first(seq__28852_28892__$1);
var G__28894 = cljs.core.chunk_rest(seq__28852_28892__$1);
var G__28895 = c__4556__auto___28893;
var G__28896 = cljs.core.count(c__4556__auto___28893);
var G__28897 = (0);
seq__28852_28880 = G__28894;
chunk__28853_28881 = G__28895;
count__28854_28882 = G__28896;
i__28855_28883 = G__28897;
continue;
} else {
var attr_key_28898 = cljs.core.first(seq__28852_28892__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28898),"-")){
var temp__5804__auto___28899__$1 = tiltontec.matrix.api.mget(me,attr_key_28898);
if(cljs.core.truth_(temp__5804__auto___28899__$1)){
var attr_val_28900 = temp__5804__auto___28899__$1;
dom.setAttribute(cljs.core.name(attr_key_28898),tiltontec.web_mx.base.attr_val$(attr_val_28900));
} else {
}
} else {
}


var G__28901 = cljs.core.next(seq__28852_28892__$1);
var G__28902 = null;
var G__28903 = (0);
var G__28904 = (0);
seq__28852_28880 = G__28901;
chunk__28853_28881 = G__28902;
count__28854_28882 = G__28903;
i__28855_28883 = G__28904;
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
tiltontec.cell.watch.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.matrix.api.unbound)){
var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__28905_28925 = cljs.core.seq(newv);
var chunk__28906_28926 = null;
var count__28907_28927 = (0);
var i__28908_28928 = (0);
while(true){
if((i__28908_28928 < count__28907_28927)){
var newk_28929 = chunk__28906_28926.cljs$core$IIndexed$_nth$arity$2(null,i__28908_28928);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28929)));


var G__28930 = seq__28905_28925;
var G__28931 = chunk__28906_28926;
var G__28932 = count__28907_28927;
var G__28933 = (i__28908_28928 + (1));
seq__28905_28925 = G__28930;
chunk__28906_28926 = G__28931;
count__28907_28927 = G__28932;
i__28908_28928 = G__28933;
continue;
} else {
var temp__5804__auto___28934 = cljs.core.seq(seq__28905_28925);
if(temp__5804__auto___28934){
var seq__28905_28935__$1 = temp__5804__auto___28934;
if(cljs.core.chunked_seq_QMARK_(seq__28905_28935__$1)){
var c__4556__auto___28936 = cljs.core.chunk_first(seq__28905_28935__$1);
var G__28937 = cljs.core.chunk_rest(seq__28905_28935__$1);
var G__28938 = c__4556__auto___28936;
var G__28939 = cljs.core.count(c__4556__auto___28936);
var G__28940 = (0);
seq__28905_28925 = G__28937;
chunk__28906_28926 = G__28938;
count__28907_28927 = G__28939;
i__28908_28928 = G__28940;
continue;
} else {
var newk_28941 = cljs.core.first(seq__28905_28935__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28941)));


var G__28942 = cljs.core.next(seq__28905_28935__$1);
var G__28943 = null;
var G__28944 = (0);
var G__28945 = (0);
seq__28905_28925 = G__28942;
chunk__28906_28926 = G__28943;
count__28907_28927 = G__28944;
i__28908_28928 = G__28945;
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
var seq__28909 = cljs.core.seq(lost);
var chunk__28910 = null;
var count__28911 = (0);
var i__28912 = (0);
while(true){
if((i__28912 < count__28911)){
var oldk = chunk__28910.cljs$core$IIndexed$_nth$arity$2(null,i__28912);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.matrix.api.md_quiesce.call(null,oldk));
}catch (e28915){if((e28915 instanceof Error)){
var e_28946 = e28915;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28946], 0));

} else {
throw e28915;

}
}}


var G__28947 = seq__28909;
var G__28948 = chunk__28910;
var G__28949 = count__28911;
var G__28950 = (i__28912 + (1));
seq__28909 = G__28947;
chunk__28910 = G__28948;
count__28911 = G__28949;
i__28912 = G__28950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28909);
if(temp__5804__auto__){
var seq__28909__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28909__$1);
var G__28951 = cljs.core.chunk_rest(seq__28909__$1);
var G__28952 = c__4556__auto__;
var G__28953 = cljs.core.count(c__4556__auto__);
var G__28954 = (0);
seq__28909 = G__28951;
chunk__28910 = G__28952;
count__28911 = G__28953;
i__28912 = G__28954;
continue;
} else {
var oldk = cljs.core.first(seq__28909__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.matrix.api.md_quiesce.call(null,oldk));
}catch (e28916){if((e28916 instanceof Error)){
var e_28955 = e28916;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_28955], 0));

} else {
throw e28916;

}
}}


var G__28956 = cljs.core.next(seq__28909__$1);
var G__28957 = null;
var G__28958 = (0);
var G__28959 = (0);
seq__28909 = G__28956;
chunk__28910 = G__28957;
count__28911 = G__28958;
i__28912 = G__28959;
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
var seq__28917_28960 = cljs.core.seq(lost);
var chunk__28918_28961 = null;
var count__28919_28962 = (0);
var i__28920_28963 = (0);
while(true){
if((i__28920_28963 < count__28919_28962)){
var oldk_28964 = chunk__28918_28961.cljs$core$IIndexed$_nth$arity$2(null,i__28920_28963);
if(typeof oldk_28964 === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28964) : tiltontec.matrix.api.md_quiesce.call(null,oldk_28964));
}


var G__28965 = seq__28917_28960;
var G__28966 = chunk__28918_28961;
var G__28967 = count__28919_28962;
var G__28968 = (i__28920_28963 + (1));
seq__28917_28960 = G__28965;
chunk__28918_28961 = G__28966;
count__28919_28962 = G__28967;
i__28920_28963 = G__28968;
continue;
} else {
var temp__5804__auto___28969 = cljs.core.seq(seq__28917_28960);
if(temp__5804__auto___28969){
var seq__28917_28970__$1 = temp__5804__auto___28969;
if(cljs.core.chunked_seq_QMARK_(seq__28917_28970__$1)){
var c__4556__auto___28971 = cljs.core.chunk_first(seq__28917_28970__$1);
var G__28972 = cljs.core.chunk_rest(seq__28917_28970__$1);
var G__28973 = c__4556__auto___28971;
var G__28974 = cljs.core.count(c__4556__auto___28971);
var G__28975 = (0);
seq__28917_28960 = G__28972;
chunk__28918_28961 = G__28973;
count__28919_28962 = G__28974;
i__28920_28963 = G__28975;
continue;
} else {
var oldk_28976 = cljs.core.first(seq__28917_28970__$1);
if(typeof oldk_28976 === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_28976) : tiltontec.matrix.api.md_quiesce.call(null,oldk_28976));
}


var G__28977 = cljs.core.next(seq__28917_28970__$1);
var G__28978 = null;
var G__28979 = (0);
var G__28980 = (0);
seq__28917_28960 = G__28977;
chunk__28918_28961 = G__28978;
count__28919_28962 = G__28979;
i__28920_28963 = G__28980;
continue;
}
} else {
}
}
break;
}

var seq__28921_28981 = cljs.core.seq(newv);
var chunk__28922_28982 = null;
var count__28923_28983 = (0);
var i__28924_28984 = (0);
while(true){
if((i__28924_28984 < count__28923_28983)){
var newk_28985 = chunk__28922_28982.cljs$core$IIndexed$_nth$arity$2(null,i__28924_28984);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28985]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28985)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28985)));


var G__28986 = seq__28921_28981;
var G__28987 = chunk__28922_28982;
var G__28988 = count__28923_28983;
var G__28989 = (i__28924_28984 + (1));
seq__28921_28981 = G__28986;
chunk__28922_28982 = G__28987;
count__28923_28983 = G__28988;
i__28924_28984 = G__28989;
continue;
} else {
var temp__5804__auto___28990 = cljs.core.seq(seq__28921_28981);
if(temp__5804__auto___28990){
var seq__28921_28991__$1 = temp__5804__auto___28990;
if(cljs.core.chunked_seq_QMARK_(seq__28921_28991__$1)){
var c__4556__auto___28992 = cljs.core.chunk_first(seq__28921_28991__$1);
var G__28993 = cljs.core.chunk_rest(seq__28921_28991__$1);
var G__28994 = c__4556__auto___28992;
var G__28995 = cljs.core.count(c__4556__auto___28992);
var G__28996 = (0);
seq__28921_28981 = G__28993;
chunk__28922_28982 = G__28994;
count__28923_28983 = G__28995;
i__28924_28984 = G__28996;
continue;
} else {
var newk_28997 = cljs.core.first(seq__28921_28991__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28997]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28997)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28997)));


var G__28998 = cljs.core.next(seq__28921_28991__$1);
var G__28999 = null;
var G__29000 = (0);
var G__29001 = (0);
seq__28921_28981 = G__28998;
chunk__28922_28982 = G__28999;
count__28923_28983 = G__29000;
i__28924_28984 = G__29001;
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
tiltontec.cell.watch.watch.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (_,me,newv,oldv,___$1){
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
var seq__29002_29022 = cljs.core.seq(newv);
var chunk__29003_29023 = null;
var count__29004_29024 = (0);
var i__29005_29025 = (0);
while(true){
if((i__29005_29025 < count__29004_29024)){
var newk_29026 = chunk__29003_29023.cljs$core$IIndexed$_nth$arity$2(null,i__29005_29025);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29026)));


var G__29027 = seq__29002_29022;
var G__29028 = chunk__29003_29023;
var G__29029 = count__29004_29024;
var G__29030 = (i__29005_29025 + (1));
seq__29002_29022 = G__29027;
chunk__29003_29023 = G__29028;
count__29004_29024 = G__29029;
i__29005_29025 = G__29030;
continue;
} else {
var temp__5804__auto___29031 = cljs.core.seq(seq__29002_29022);
if(temp__5804__auto___29031){
var seq__29002_29032__$1 = temp__5804__auto___29031;
if(cljs.core.chunked_seq_QMARK_(seq__29002_29032__$1)){
var c__4556__auto___29033 = cljs.core.chunk_first(seq__29002_29032__$1);
var G__29034 = cljs.core.chunk_rest(seq__29002_29032__$1);
var G__29035 = c__4556__auto___29033;
var G__29036 = cljs.core.count(c__4556__auto___29033);
var G__29037 = (0);
seq__29002_29022 = G__29034;
chunk__29003_29023 = G__29035;
count__29004_29024 = G__29036;
i__29005_29025 = G__29037;
continue;
} else {
var newk_29038 = cljs.core.first(seq__29002_29032__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29038)));


var G__29039 = cljs.core.next(seq__29002_29032__$1);
var G__29040 = null;
var G__29041 = (0);
var G__29042 = (0);
seq__29002_29022 = G__29039;
chunk__29003_29023 = G__29040;
count__29004_29024 = G__29041;
i__29005_29025 = G__29042;
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
var seq__29006 = cljs.core.seq(lost);
var chunk__29007 = null;
var count__29008 = (0);
var i__29009 = (0);
while(true){
if((i__29009 < count__29008)){
var oldk = chunk__29007.cljs$core$IIndexed$_nth$arity$2(null,i__29009);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.matrix.api.md_quiesce.call(null,oldk));
}


var G__29043 = seq__29006;
var G__29044 = chunk__29007;
var G__29045 = count__29008;
var G__29046 = (i__29009 + (1));
seq__29006 = G__29043;
chunk__29007 = G__29044;
count__29008 = G__29045;
i__29009 = G__29046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29006);
if(temp__5804__auto__){
var seq__29006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29006__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29006__$1);
var G__29047 = cljs.core.chunk_rest(seq__29006__$1);
var G__29048 = c__4556__auto__;
var G__29049 = cljs.core.count(c__4556__auto__);
var G__29050 = (0);
seq__29006 = G__29047;
chunk__29007 = G__29048;
count__29008 = G__29049;
i__29009 = G__29050;
continue;
} else {
var oldk = cljs.core.first(seq__29006__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.matrix.api.md_quiesce.call(null,oldk));
}


var G__29051 = cljs.core.next(seq__29006__$1);
var G__29052 = null;
var G__29053 = (0);
var G__29054 = (0);
seq__29006 = G__29051;
chunk__29007 = G__29052;
count__29008 = G__29053;
i__29009 = G__29054;
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
var seq__29010 = cljs.core.seq(gained);
var chunk__29011 = null;
var count__29012 = (0);
var i__29013 = (0);
while(true){
if((i__29013 < count__29012)){
var newk = chunk__29011.cljs$core$IIndexed$_nth$arity$2(null,i__29013);
var new_dom_29055 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29055);


var G__29056 = seq__29010;
var G__29057 = chunk__29011;
var G__29058 = count__29012;
var G__29059 = (i__29013 + (1));
seq__29010 = G__29056;
chunk__29011 = G__29057;
count__29012 = G__29058;
i__29013 = G__29059;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29010);
if(temp__5804__auto__){
var seq__29010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29010__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29010__$1);
var G__29060 = cljs.core.chunk_rest(seq__29010__$1);
var G__29061 = c__4556__auto__;
var G__29062 = cljs.core.count(c__4556__auto__);
var G__29063 = (0);
seq__29010 = G__29060;
chunk__29011 = G__29061;
count__29012 = G__29062;
i__29013 = G__29063;
continue;
} else {
var newk = cljs.core.first(seq__29010__$1);
var new_dom_29064 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_29064);


var G__29065 = cljs.core.next(seq__29010__$1);
var G__29066 = null;
var G__29067 = (0);
var G__29068 = (0);
seq__29010 = G__29065;
chunk__29011 = G__29066;
count__29012 = G__29067;
i__29013 = G__29068;
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
var seq__29014_29069 = cljs.core.seq(lost);
var chunk__29015_29070 = null;
var count__29016_29071 = (0);
var i__29017_29072 = (0);
while(true){
if((i__29017_29072 < count__29016_29071)){
var oldk_29073 = chunk__29015_29070.cljs$core$IIndexed$_nth$arity$2(null,i__29017_29072);
if(typeof oldk_29073 === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29073) : tiltontec.matrix.api.md_quiesce.call(null,oldk_29073));
}


var G__29074 = seq__29014_29069;
var G__29075 = chunk__29015_29070;
var G__29076 = count__29016_29071;
var G__29077 = (i__29017_29072 + (1));
seq__29014_29069 = G__29074;
chunk__29015_29070 = G__29075;
count__29016_29071 = G__29076;
i__29017_29072 = G__29077;
continue;
} else {
var temp__5804__auto___29078 = cljs.core.seq(seq__29014_29069);
if(temp__5804__auto___29078){
var seq__29014_29079__$1 = temp__5804__auto___29078;
if(cljs.core.chunked_seq_QMARK_(seq__29014_29079__$1)){
var c__4556__auto___29080 = cljs.core.chunk_first(seq__29014_29079__$1);
var G__29081 = cljs.core.chunk_rest(seq__29014_29079__$1);
var G__29082 = c__4556__auto___29080;
var G__29083 = cljs.core.count(c__4556__auto___29080);
var G__29084 = (0);
seq__29014_29069 = G__29081;
chunk__29015_29070 = G__29082;
count__29016_29071 = G__29083;
i__29017_29072 = G__29084;
continue;
} else {
var oldk_29085 = cljs.core.first(seq__29014_29079__$1);
if(typeof oldk_29085 === 'string'){
} else {
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_29085) : tiltontec.matrix.api.md_quiesce.call(null,oldk_29085));
}


var G__29086 = cljs.core.next(seq__29014_29079__$1);
var G__29087 = null;
var G__29088 = (0);
var G__29089 = (0);
seq__29014_29069 = G__29086;
chunk__29015_29070 = G__29087;
count__29016_29071 = G__29088;
i__29017_29072 = G__29089;
continue;
}
} else {
}
}
break;
}

var seq__29018_29090 = cljs.core.seq(newv);
var chunk__29019_29091 = null;
var count__29020_29092 = (0);
var i__29021_29093 = (0);
while(true){
if((i__29021_29093 < count__29020_29092)){
var newk_29094 = chunk__29019_29091.cljs$core$IIndexed$_nth$arity$2(null,i__29021_29093);
var new_dom_29095 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29094]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29094)):tiltontec.web_mx.html.svg_dom_create(newk_29094,false));
goog.dom.appendChild(frag,new_dom_29095);


var G__29096 = seq__29018_29090;
var G__29097 = chunk__29019_29091;
var G__29098 = count__29020_29092;
var G__29099 = (i__29021_29093 + (1));
seq__29018_29090 = G__29096;
chunk__29019_29091 = G__29097;
count__29020_29092 = G__29098;
i__29021_29093 = G__29099;
continue;
} else {
var temp__5804__auto___29100 = cljs.core.seq(seq__29018_29090);
if(temp__5804__auto___29100){
var seq__29018_29101__$1 = temp__5804__auto___29100;
if(cljs.core.chunked_seq_QMARK_(seq__29018_29101__$1)){
var c__4556__auto___29102 = cljs.core.chunk_first(seq__29018_29101__$1);
var G__29103 = cljs.core.chunk_rest(seq__29018_29101__$1);
var G__29104 = c__4556__auto___29102;
var G__29105 = cljs.core.count(c__4556__auto___29102);
var G__29106 = (0);
seq__29018_29090 = G__29103;
chunk__29019_29091 = G__29104;
count__29020_29092 = G__29105;
i__29021_29093 = G__29106;
continue;
} else {
var newk_29107 = cljs.core.first(seq__29018_29101__$1);
var new_dom_29108 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_29107]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_29107)):tiltontec.web_mx.html.svg_dom_create(newk_29107,false));
goog.dom.appendChild(frag,new_dom_29108);


var G__29109 = cljs.core.next(seq__29018_29101__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__29018_29090 = G__29109;
chunk__29019_29091 = G__29110;
count__29020_29092 = G__29111;
i__29021_29093 = G__29112;
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
tiltontec.cell.watch.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (slot,me,newv,oldv,_){
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
var G__29113 = slot;
var G__29113__$1 = (((G__29113 instanceof cljs.core.Keyword))?G__29113.fqn:null);
switch (G__29113__$1) {
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
var G__29114 = dom;
var G__29115 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__29114,G__29115);

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
tiltontec.cell.watch.watch_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (slot,me,newv,oldv,_){
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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29117_SHARP_){
var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_(p1__29117_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29118_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.matrix.api.mget_QMARK_(p1__29118_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__29119_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.matrix.api.mget_QMARK_(p1__29119_SHARP_,cljs.core.cst$kw$id));
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
var G__29120 = cljs.core.rest(keys);
var G__29121 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__29120;
found = G__29121;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__29122 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__29123 = null;
var count__29124 = (0);
var i__29125 = (0);
while(true){
if((i__29125 < count__29124)){
var key = chunk__29123.cljs$core$IIndexed$_nth$arity$2(null,i__29125);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29126 = seq__29122;
var G__29127 = chunk__29123;
var G__29128 = count__29124;
var G__29129 = (i__29125 + (1));
seq__29122 = G__29126;
chunk__29123 = G__29127;
count__29124 = G__29128;
i__29125 = G__29129;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29122);
if(temp__5804__auto__){
var seq__29122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29122__$1);
var G__29130 = cljs.core.chunk_rest(seq__29122__$1);
var G__29131 = c__4556__auto__;
var G__29132 = cljs.core.count(c__4556__auto__);
var G__29133 = (0);
seq__29122 = G__29130;
chunk__29123 = G__29131;
count__29124 = G__29132;
i__29125 = G__29133;
continue;
} else {
var key = cljs.core.first(seq__29122__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__29134 = cljs.core.next(seq__29122__$1);
var G__29135 = null;
var G__29136 = (0);
var G__29137 = (0);
seq__29122 = G__29134;
chunk__29123 = G__29135;
count__29124 = G__29136;
i__29125 = G__29137;
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

var G__29138 = dom;
var G__29139 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__29138,G__29139);
});
