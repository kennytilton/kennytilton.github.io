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
goog.require('taoensso.tufte');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__35028(s__35029){
return (new cljs.core.LazySeq(null,(function (){
var s__35029__$1 = s__35029;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35029__$1);
if(temp__5804__auto__){
var s__35029__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35029__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35029__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35031 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35030 = (0);
while(true){
if((i__35030 < size__4528__auto__)){
var vec__35032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__35030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032,(1),null);
if((v == null)){
cljs.core.chunk_append(b__35031,k);

var G__35038 = (i__35030 + (1));
i__35030 = G__35038;
continue;
} else {
var G__35039 = (i__35030 + (1));
i__35030 = G__35039;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35031),tiltontec$web_mx$html$map_less_nils_$_iter__35028(cljs.core.chunk_rest(s__35029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35031),null);
}
} else {
var vec__35035 = cljs.core.first(s__35029__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35035,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__35028(cljs.core.rest(s__35029__$2)));
} else {
var G__35040 = cljs.core.rest(s__35029__$2);
s__35029__$1 = G__35040;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__35041(s__35042){
return (new cljs.core.LazySeq(null,(function (){
var s__35042__$1 = s__35042;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35042__$1);
if(temp__5804__auto__){
var s__35042__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35042__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35042__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35044 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35043 = (0);
while(true){
if((i__35043 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__35043);
cljs.core.chunk_append(b__35044,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__35045 = k;
var G__35045__$1 = (((G__35045 instanceof cljs.core.Keyword))?G__35045.fqn:null);
switch (G__35045__$1) {
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

var G__35048 = (i__35043 + (1));
i__35043 = G__35048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35044),tiltontec$web_mx$html$tag_properties_$_iter__35041(cljs.core.chunk_rest(s__35042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35044),null);
}
} else {
var k = cljs.core.first(s__35042__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__35046 = k;
var G__35046__$1 = (((G__35046 instanceof cljs.core.Keyword))?G__35046.fqn:null);
switch (G__35046__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__35041(cljs.core.rest(s__35042__$2)));
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

var seq__35050_35064 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__35052_35065 = null;
var count__35053_35066 = (0);
var i__35054_35067 = (0);
while(true){
if((i__35054_35067 < count__35053_35066)){
var ak_35068 = chunk__35052_35065.cljs$core$IIndexed$_nth$arity$2(null,i__35054_35067);
var ak$_35069 = cljs.core.name(ak_35068);
var av_35070 = (function (){var G__35058 = cljs.core.deref(me);
return (ak_35068.cljs$core$IFn$_invoke$arity$1 ? ak_35068.cljs$core$IFn$_invoke$arity$1(G__35058) : ak_35068.call(null,G__35058));
})();
if(cljs.core.fn_QMARK_(av_35070)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_35069,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_35069,(2)):ak$_35069),av_35070);
} else {
svg.setAttributeNS(null,ak$_35069,tiltontec.web_mx.base.attr_val$(av_35070));
}


var G__35071 = seq__35050_35064;
var G__35072 = chunk__35052_35065;
var G__35073 = count__35053_35066;
var G__35074 = (i__35054_35067 + (1));
seq__35050_35064 = G__35071;
chunk__35052_35065 = G__35072;
count__35053_35066 = G__35073;
i__35054_35067 = G__35074;
continue;
} else {
var temp__5804__auto___35075 = cljs.core.seq(seq__35050_35064);
if(temp__5804__auto___35075){
var seq__35050_35076__$1 = temp__5804__auto___35075;
if(cljs.core.chunked_seq_QMARK_(seq__35050_35076__$1)){
var c__4556__auto___35077 = cljs.core.chunk_first(seq__35050_35076__$1);
var G__35078 = cljs.core.chunk_rest(seq__35050_35076__$1);
var G__35079 = c__4556__auto___35077;
var G__35080 = cljs.core.count(c__4556__auto___35077);
var G__35081 = (0);
seq__35050_35064 = G__35078;
chunk__35052_35065 = G__35079;
count__35053_35066 = G__35080;
i__35054_35067 = G__35081;
continue;
} else {
var ak_35082 = cljs.core.first(seq__35050_35076__$1);
var ak$_35083 = cljs.core.name(ak_35082);
var av_35084 = (function (){var G__35059 = cljs.core.deref(me);
return (ak_35082.cljs$core$IFn$_invoke$arity$1 ? ak_35082.cljs$core$IFn$_invoke$arity$1(G__35059) : ak_35082.call(null,G__35059));
})();
if(cljs.core.fn_QMARK_(av_35084)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_35083,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_35083,(2)):ak$_35083),av_35084);
} else {
svg.setAttributeNS(null,ak$_35083,tiltontec.web_mx.base.attr_val$(av_35084));
}


var G__35085 = cljs.core.next(seq__35050_35076__$1);
var G__35086 = null;
var G__35087 = (0);
var G__35088 = (0);
seq__35050_35064 = G__35085;
chunk__35052_35065 = G__35086;
count__35053_35066 = G__35087;
i__35054_35067 = G__35088;
continue;
}
} else {
}
}
break;
}

var seq__35060_35089 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__35061_35090 = null;
var count__35062_35091 = (0);
var i__35063_35092 = (0);
while(true){
if((i__35063_35092 < count__35062_35091)){
var kid_35093 = chunk__35061_35090.cljs$core$IIndexed$_nth$arity$2(null,i__35063_35092);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_35093,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_35093,dbg)));


var G__35094 = seq__35060_35089;
var G__35095 = chunk__35061_35090;
var G__35096 = count__35062_35091;
var G__35097 = (i__35063_35092 + (1));
seq__35060_35089 = G__35094;
chunk__35061_35090 = G__35095;
count__35062_35091 = G__35096;
i__35063_35092 = G__35097;
continue;
} else {
var temp__5804__auto___35098 = cljs.core.seq(seq__35060_35089);
if(temp__5804__auto___35098){
var seq__35060_35099__$1 = temp__5804__auto___35098;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35099__$1)){
var c__4556__auto___35100 = cljs.core.chunk_first(seq__35060_35099__$1);
var G__35101 = cljs.core.chunk_rest(seq__35060_35099__$1);
var G__35102 = c__4556__auto___35100;
var G__35103 = cljs.core.count(c__4556__auto___35100);
var G__35104 = (0);
seq__35060_35089 = G__35101;
chunk__35061_35090 = G__35102;
count__35062_35091 = G__35103;
i__35063_35092 = G__35104;
continue;
} else {
var kid_35105 = cljs.core.first(seq__35060_35099__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_35105,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_35105,dbg)));


var G__35106 = cljs.core.next(seq__35060_35099__$1);
var G__35107 = null;
var G__35108 = (0);
var G__35109 = (0);
seq__35060_35089 = G__35106;
chunk__35061_35090 = G__35107;
count__35062_35091 = G__35108;
i__35063_35092 = G__35109;
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
var G__35112 = arguments.length;
switch (G__35112) {
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
var seq__35113_35122 = cljs.core.seq(me);
var chunk__35114_35123 = null;
var count__35115_35124 = (0);
var i__35116_35125 = (0);
while(true){
if((i__35116_35125 < count__35115_35124)){
var tag_35126 = chunk__35114_35123.cljs$core$IIndexed$_nth$arity$2(null,i__35116_35125);
if(cljs.core.truth_(tag_35126)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_35126));
} else {
}


var G__35127 = seq__35113_35122;
var G__35128 = chunk__35114_35123;
var G__35129 = count__35115_35124;
var G__35130 = (i__35116_35125 + (1));
seq__35113_35122 = G__35127;
chunk__35114_35123 = G__35128;
count__35115_35124 = G__35129;
i__35116_35125 = G__35130;
continue;
} else {
var temp__5804__auto___35131 = cljs.core.seq(seq__35113_35122);
if(temp__5804__auto___35131){
var seq__35113_35132__$1 = temp__5804__auto___35131;
if(cljs.core.chunked_seq_QMARK_(seq__35113_35132__$1)){
var c__4556__auto___35133 = cljs.core.chunk_first(seq__35113_35132__$1);
var G__35134 = cljs.core.chunk_rest(seq__35113_35132__$1);
var G__35135 = c__4556__auto___35133;
var G__35136 = cljs.core.count(c__4556__auto___35133);
var G__35137 = (0);
seq__35113_35122 = G__35134;
chunk__35114_35123 = G__35135;
count__35115_35124 = G__35136;
i__35116_35125 = G__35137;
continue;
} else {
var tag_35138 = cljs.core.first(seq__35113_35132__$1);
if(cljs.core.truth_(tag_35138)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_35138));
} else {
}


var G__35139 = cljs.core.next(seq__35113_35132__$1);
var G__35140 = null;
var G__35141 = (0);
var G__35142 = (0);
seq__35113_35122 = G__35139;
chunk__35114_35123 = G__35140;
count__35115_35124 = G__35141;
i__35116_35125 = G__35142;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35110_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__35110_SHARP_,dbg);
}),tiltontec.model.core.mget(me,cljs.core.cst$kw$kids)),(function (){var temp__5804__auto__ = tiltontec.model.core.mget(me,cljs.core.cst$kw$content);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(c)], null);
} else {
return null;
}
})()));
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dom_DASH_x,me], null),dom);

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list,null], null), null),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me))))){
var temp__5804__auto___35143 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___35143)){
var list_id_35144 = temp__5804__auto___35143;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_35144));
} else {
}
} else {
}

var seq__35117_35145 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__35118_35146 = null;
var count__35119_35147 = (0);
var i__35120_35148 = (0);
while(true){
if((i__35120_35148 < count__35119_35147)){
var attr_key_35149 = chunk__35118_35146.cljs$core$IIndexed$_nth$arity$2(null,i__35120_35148);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_35149),"-")){
var temp__5804__auto___35150 = tiltontec.model.core.mget(me,attr_key_35149);
if(cljs.core.truth_(temp__5804__auto___35150)){
var attr_val_35151 = temp__5804__auto___35150;
dom.setAttribute(cljs.core.name(attr_key_35149),tiltontec.web_mx.base.attr_val$(attr_val_35151));
} else {
}
} else {
}


var G__35152 = seq__35117_35145;
var G__35153 = chunk__35118_35146;
var G__35154 = count__35119_35147;
var G__35155 = (i__35120_35148 + (1));
seq__35117_35145 = G__35152;
chunk__35118_35146 = G__35153;
count__35119_35147 = G__35154;
i__35120_35148 = G__35155;
continue;
} else {
var temp__5804__auto___35156 = cljs.core.seq(seq__35117_35145);
if(temp__5804__auto___35156){
var seq__35117_35157__$1 = temp__5804__auto___35156;
if(cljs.core.chunked_seq_QMARK_(seq__35117_35157__$1)){
var c__4556__auto___35158 = cljs.core.chunk_first(seq__35117_35157__$1);
var G__35159 = cljs.core.chunk_rest(seq__35117_35157__$1);
var G__35160 = c__4556__auto___35158;
var G__35161 = cljs.core.count(c__4556__auto___35158);
var G__35162 = (0);
seq__35117_35145 = G__35159;
chunk__35118_35146 = G__35160;
count__35119_35147 = G__35161;
i__35120_35148 = G__35162;
continue;
} else {
var attr_key_35163 = cljs.core.first(seq__35117_35157__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_35163),"-")){
var temp__5804__auto___35164__$1 = tiltontec.model.core.mget(me,attr_key_35163);
if(cljs.core.truth_(temp__5804__auto___35164__$1)){
var attr_val_35165 = temp__5804__auto___35164__$1;
dom.setAttribute(cljs.core.name(attr_key_35163),tiltontec.web_mx.base.attr_val$(attr_val_35165));
} else {
}
} else {
}


var G__35166 = cljs.core.next(seq__35117_35157__$1);
var G__35167 = null;
var G__35168 = (0);
var G__35169 = (0);
seq__35117_35145 = G__35166;
chunk__35118_35146 = G__35167;
count__35119_35147 = G__35168;
i__35120_35148 = G__35169;
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
var seq__35170_35190 = cljs.core.seq(newv);
var chunk__35171_35191 = null;
var count__35172_35192 = (0);
var i__35173_35193 = (0);
while(true){
if((i__35173_35193 < count__35172_35192)){
var newk_35194 = chunk__35171_35191.cljs$core$IIndexed$_nth$arity$2(null,i__35173_35193);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_35194)));


var G__35195 = seq__35170_35190;
var G__35196 = chunk__35171_35191;
var G__35197 = count__35172_35192;
var G__35198 = (i__35173_35193 + (1));
seq__35170_35190 = G__35195;
chunk__35171_35191 = G__35196;
count__35172_35192 = G__35197;
i__35173_35193 = G__35198;
continue;
} else {
var temp__5804__auto___35199 = cljs.core.seq(seq__35170_35190);
if(temp__5804__auto___35199){
var seq__35170_35200__$1 = temp__5804__auto___35199;
if(cljs.core.chunked_seq_QMARK_(seq__35170_35200__$1)){
var c__4556__auto___35201 = cljs.core.chunk_first(seq__35170_35200__$1);
var G__35202 = cljs.core.chunk_rest(seq__35170_35200__$1);
var G__35203 = c__4556__auto___35201;
var G__35204 = cljs.core.count(c__4556__auto___35201);
var G__35205 = (0);
seq__35170_35190 = G__35202;
chunk__35171_35191 = G__35203;
count__35172_35192 = G__35204;
i__35173_35193 = G__35205;
continue;
} else {
var newk_35206 = cljs.core.first(seq__35170_35200__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_35206)));


var G__35207 = cljs.core.next(seq__35170_35200__$1);
var G__35208 = null;
var G__35209 = (0);
var G__35210 = (0);
seq__35170_35190 = G__35207;
chunk__35171_35191 = G__35208;
count__35172_35192 = G__35209;
i__35173_35193 = G__35210;
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
var seq__35174 = cljs.core.seq(lost);
var chunk__35175 = null;
var count__35176 = (0);
var i__35177 = (0);
while(true){
if((i__35177 < count__35176)){
var oldk = chunk__35175.cljs$core$IIndexed$_nth$arity$2(null,i__35177);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e35180){if((e35180 instanceof Error)){
var e_35211 = e35180;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_35211], 0));

} else {
throw e35180;

}
}}


var G__35212 = seq__35174;
var G__35213 = chunk__35175;
var G__35214 = count__35176;
var G__35215 = (i__35177 + (1));
seq__35174 = G__35212;
chunk__35175 = G__35213;
count__35176 = G__35214;
i__35177 = G__35215;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35174);
if(temp__5804__auto__){
var seq__35174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35174__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35174__$1);
var G__35216 = cljs.core.chunk_rest(seq__35174__$1);
var G__35217 = c__4556__auto__;
var G__35218 = cljs.core.count(c__4556__auto__);
var G__35219 = (0);
seq__35174 = G__35216;
chunk__35175 = G__35217;
count__35176 = G__35218;
i__35177 = G__35219;
continue;
} else {
var oldk = cljs.core.first(seq__35174__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e35181){if((e35181 instanceof Error)){
var e_35220 = e35181;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_35220], 0));

} else {
throw e35181;

}
}}


var G__35221 = cljs.core.next(seq__35174__$1);
var G__35222 = null;
var G__35223 = (0);
var G__35224 = (0);
seq__35174 = G__35221;
chunk__35175 = G__35222;
count__35176 = G__35223;
i__35177 = G__35224;
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
var seq__35182_35225 = cljs.core.seq(lost);
var chunk__35183_35226 = null;
var count__35184_35227 = (0);
var i__35185_35228 = (0);
while(true){
if((i__35185_35228 < count__35184_35227)){
var oldk_35229 = chunk__35183_35226.cljs$core$IIndexed$_nth$arity$2(null,i__35185_35228);
if(typeof oldk_35229 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_35229) : tiltontec.cell.evaluate.finalize.call(null,oldk_35229));
}


var G__35230 = seq__35182_35225;
var G__35231 = chunk__35183_35226;
var G__35232 = count__35184_35227;
var G__35233 = (i__35185_35228 + (1));
seq__35182_35225 = G__35230;
chunk__35183_35226 = G__35231;
count__35184_35227 = G__35232;
i__35185_35228 = G__35233;
continue;
} else {
var temp__5804__auto___35234 = cljs.core.seq(seq__35182_35225);
if(temp__5804__auto___35234){
var seq__35182_35235__$1 = temp__5804__auto___35234;
if(cljs.core.chunked_seq_QMARK_(seq__35182_35235__$1)){
var c__4556__auto___35236 = cljs.core.chunk_first(seq__35182_35235__$1);
var G__35237 = cljs.core.chunk_rest(seq__35182_35235__$1);
var G__35238 = c__4556__auto___35236;
var G__35239 = cljs.core.count(c__4556__auto___35236);
var G__35240 = (0);
seq__35182_35225 = G__35237;
chunk__35183_35226 = G__35238;
count__35184_35227 = G__35239;
i__35185_35228 = G__35240;
continue;
} else {
var oldk_35241 = cljs.core.first(seq__35182_35235__$1);
if(typeof oldk_35241 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_35241) : tiltontec.cell.evaluate.finalize.call(null,oldk_35241));
}


var G__35242 = cljs.core.next(seq__35182_35235__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35182_35225 = G__35242;
chunk__35183_35226 = G__35243;
count__35184_35227 = G__35244;
i__35185_35228 = G__35245;
continue;
}
} else {
}
}
break;
}

var seq__35186_35246 = cljs.core.seq(newv);
var chunk__35187_35247 = null;
var count__35188_35248 = (0);
var i__35189_35249 = (0);
while(true){
if((i__35189_35249 < count__35188_35248)){
var newk_35250 = chunk__35187_35247.cljs$core$IIndexed$_nth$arity$2(null,i__35189_35249);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35250]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_35250)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_35250)));


var G__35251 = seq__35186_35246;
var G__35252 = chunk__35187_35247;
var G__35253 = count__35188_35248;
var G__35254 = (i__35189_35249 + (1));
seq__35186_35246 = G__35251;
chunk__35187_35247 = G__35252;
count__35188_35248 = G__35253;
i__35189_35249 = G__35254;
continue;
} else {
var temp__5804__auto___35255 = cljs.core.seq(seq__35186_35246);
if(temp__5804__auto___35255){
var seq__35186_35256__$1 = temp__5804__auto___35255;
if(cljs.core.chunked_seq_QMARK_(seq__35186_35256__$1)){
var c__4556__auto___35257 = cljs.core.chunk_first(seq__35186_35256__$1);
var G__35258 = cljs.core.chunk_rest(seq__35186_35256__$1);
var G__35259 = c__4556__auto___35257;
var G__35260 = cljs.core.count(c__4556__auto___35257);
var G__35261 = (0);
seq__35186_35246 = G__35258;
chunk__35187_35247 = G__35259;
count__35188_35248 = G__35260;
i__35189_35249 = G__35261;
continue;
} else {
var newk_35262 = cljs.core.first(seq__35186_35256__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35262]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_35262)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_35262)));


var G__35263 = cljs.core.next(seq__35186_35256__$1);
var G__35264 = null;
var G__35265 = (0);
var G__35266 = (0);
seq__35186_35246 = G__35263;
chunk__35187_35247 = G__35264;
count__35188_35248 = G__35265;
i__35189_35249 = G__35266;
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
var seq__35267_35287 = cljs.core.seq(newv);
var chunk__35268_35288 = null;
var count__35269_35289 = (0);
var i__35270_35290 = (0);
while(true){
if((i__35270_35290 < count__35269_35289)){
var newk_35291 = chunk__35268_35288.cljs$core$IIndexed$_nth$arity$2(null,i__35270_35290);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_35291)));


var G__35292 = seq__35267_35287;
var G__35293 = chunk__35268_35288;
var G__35294 = count__35269_35289;
var G__35295 = (i__35270_35290 + (1));
seq__35267_35287 = G__35292;
chunk__35268_35288 = G__35293;
count__35269_35289 = G__35294;
i__35270_35290 = G__35295;
continue;
} else {
var temp__5804__auto___35296 = cljs.core.seq(seq__35267_35287);
if(temp__5804__auto___35296){
var seq__35267_35297__$1 = temp__5804__auto___35296;
if(cljs.core.chunked_seq_QMARK_(seq__35267_35297__$1)){
var c__4556__auto___35298 = cljs.core.chunk_first(seq__35267_35297__$1);
var G__35299 = cljs.core.chunk_rest(seq__35267_35297__$1);
var G__35300 = c__4556__auto___35298;
var G__35301 = cljs.core.count(c__4556__auto___35298);
var G__35302 = (0);
seq__35267_35287 = G__35299;
chunk__35268_35288 = G__35300;
count__35269_35289 = G__35301;
i__35270_35290 = G__35302;
continue;
} else {
var newk_35303 = cljs.core.first(seq__35267_35297__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_35303)));


var G__35304 = cljs.core.next(seq__35267_35297__$1);
var G__35305 = null;
var G__35306 = (0);
var G__35307 = (0);
seq__35267_35287 = G__35304;
chunk__35268_35288 = G__35305;
count__35269_35289 = G__35306;
i__35270_35290 = G__35307;
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
var seq__35271 = cljs.core.seq(lost);
var chunk__35272 = null;
var count__35273 = (0);
var i__35274 = (0);
while(true){
if((i__35274 < count__35273)){
var oldk = chunk__35272.cljs$core$IIndexed$_nth$arity$2(null,i__35274);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__35308 = seq__35271;
var G__35309 = chunk__35272;
var G__35310 = count__35273;
var G__35311 = (i__35274 + (1));
seq__35271 = G__35308;
chunk__35272 = G__35309;
count__35273 = G__35310;
i__35274 = G__35311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35271);
if(temp__5804__auto__){
var seq__35271__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35271__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35271__$1);
var G__35312 = cljs.core.chunk_rest(seq__35271__$1);
var G__35313 = c__4556__auto__;
var G__35314 = cljs.core.count(c__4556__auto__);
var G__35315 = (0);
seq__35271 = G__35312;
chunk__35272 = G__35313;
count__35273 = G__35314;
i__35274 = G__35315;
continue;
} else {
var oldk = cljs.core.first(seq__35271__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__35316 = cljs.core.next(seq__35271__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35271 = G__35316;
chunk__35272 = G__35317;
count__35273 = G__35318;
i__35274 = G__35319;
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
var seq__35275 = cljs.core.seq(gained);
var chunk__35276 = null;
var count__35277 = (0);
var i__35278 = (0);
while(true){
if((i__35278 < count__35277)){
var newk = chunk__35276.cljs$core$IIndexed$_nth$arity$2(null,i__35278);
var new_dom_35320 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_35320);


var G__35321 = seq__35275;
var G__35322 = chunk__35276;
var G__35323 = count__35277;
var G__35324 = (i__35278 + (1));
seq__35275 = G__35321;
chunk__35276 = G__35322;
count__35277 = G__35323;
i__35278 = G__35324;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35275);
if(temp__5804__auto__){
var seq__35275__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35275__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35275__$1);
var G__35325 = cljs.core.chunk_rest(seq__35275__$1);
var G__35326 = c__4556__auto__;
var G__35327 = cljs.core.count(c__4556__auto__);
var G__35328 = (0);
seq__35275 = G__35325;
chunk__35276 = G__35326;
count__35277 = G__35327;
i__35278 = G__35328;
continue;
} else {
var newk = cljs.core.first(seq__35275__$1);
var new_dom_35329 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_35329);


var G__35330 = cljs.core.next(seq__35275__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__35275 = G__35330;
chunk__35276 = G__35331;
count__35277 = G__35332;
i__35278 = G__35333;
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
var seq__35279_35334 = cljs.core.seq(lost);
var chunk__35280_35335 = null;
var count__35281_35336 = (0);
var i__35282_35337 = (0);
while(true){
if((i__35282_35337 < count__35281_35336)){
var oldk_35338 = chunk__35280_35335.cljs$core$IIndexed$_nth$arity$2(null,i__35282_35337);
if(typeof oldk_35338 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_35338) : tiltontec.cell.evaluate.finalize.call(null,oldk_35338));
}


var G__35339 = seq__35279_35334;
var G__35340 = chunk__35280_35335;
var G__35341 = count__35281_35336;
var G__35342 = (i__35282_35337 + (1));
seq__35279_35334 = G__35339;
chunk__35280_35335 = G__35340;
count__35281_35336 = G__35341;
i__35282_35337 = G__35342;
continue;
} else {
var temp__5804__auto___35343 = cljs.core.seq(seq__35279_35334);
if(temp__5804__auto___35343){
var seq__35279_35344__$1 = temp__5804__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__35279_35344__$1)){
var c__4556__auto___35345 = cljs.core.chunk_first(seq__35279_35344__$1);
var G__35346 = cljs.core.chunk_rest(seq__35279_35344__$1);
var G__35347 = c__4556__auto___35345;
var G__35348 = cljs.core.count(c__4556__auto___35345);
var G__35349 = (0);
seq__35279_35334 = G__35346;
chunk__35280_35335 = G__35347;
count__35281_35336 = G__35348;
i__35282_35337 = G__35349;
continue;
} else {
var oldk_35350 = cljs.core.first(seq__35279_35344__$1);
if(typeof oldk_35350 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_35350) : tiltontec.cell.evaluate.finalize.call(null,oldk_35350));
}


var G__35351 = cljs.core.next(seq__35279_35344__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__35279_35334 = G__35351;
chunk__35280_35335 = G__35352;
count__35281_35336 = G__35353;
i__35282_35337 = G__35354;
continue;
}
} else {
}
}
break;
}

var seq__35283_35355 = cljs.core.seq(newv);
var chunk__35284_35356 = null;
var count__35285_35357 = (0);
var i__35286_35358 = (0);
while(true){
if((i__35286_35358 < count__35285_35357)){
var newk_35359 = chunk__35284_35356.cljs$core$IIndexed$_nth$arity$2(null,i__35286_35358);
var new_dom_35360 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35359]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_35359)):tiltontec.web_mx.html.svg_dom_create(newk_35359,false));
goog.dom.appendChild(frag,new_dom_35360);


var G__35361 = seq__35283_35355;
var G__35362 = chunk__35284_35356;
var G__35363 = count__35285_35357;
var G__35364 = (i__35286_35358 + (1));
seq__35283_35355 = G__35361;
chunk__35284_35356 = G__35362;
count__35285_35357 = G__35363;
i__35286_35358 = G__35364;
continue;
} else {
var temp__5804__auto___35365 = cljs.core.seq(seq__35283_35355);
if(temp__5804__auto___35365){
var seq__35283_35366__$1 = temp__5804__auto___35365;
if(cljs.core.chunked_seq_QMARK_(seq__35283_35366__$1)){
var c__4556__auto___35367 = cljs.core.chunk_first(seq__35283_35366__$1);
var G__35368 = cljs.core.chunk_rest(seq__35283_35366__$1);
var G__35369 = c__4556__auto___35367;
var G__35370 = cljs.core.count(c__4556__auto___35367);
var G__35371 = (0);
seq__35283_35355 = G__35368;
chunk__35284_35356 = G__35369;
count__35285_35357 = G__35370;
i__35286_35358 = G__35371;
continue;
} else {
var newk_35372 = cljs.core.first(seq__35283_35366__$1);
var new_dom_35373 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_35372]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_35372)):tiltontec.web_mx.html.svg_dom_create(newk_35372,false));
goog.dom.appendChild(frag,new_dom_35373);


var G__35374 = cljs.core.next(seq__35283_35366__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__35283_35355 = G__35374;
chunk__35284_35356 = G__35375;
count__35285_35357 = G__35376;
i__35286_35358 = G__35377;
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
var G__35378 = slot;
var G__35378__$1 = (((G__35378 instanceof cljs.core.Keyword))?G__35378.fqn:null);
switch (G__35378__$1) {
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
var G__35379 = dom;
var G__35380 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__35379,G__35380);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__35382_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__35382_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__35383_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__35383_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__35384_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__35384_SHARP_,cljs.core.cst$kw$id));
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
var G__35385 = cljs.core.rest(keys);
var G__35386 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__35385;
found = G__35386;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__35387 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__35388 = null;
var count__35389 = (0);
var i__35390 = (0);
while(true){
if((i__35390 < count__35389)){
var key = chunk__35388.cljs$core$IIndexed$_nth$arity$2(null,i__35390);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__35391 = seq__35387;
var G__35392 = chunk__35388;
var G__35393 = count__35389;
var G__35394 = (i__35390 + (1));
seq__35387 = G__35391;
chunk__35388 = G__35392;
count__35389 = G__35393;
i__35390 = G__35394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35387);
if(temp__5804__auto__){
var seq__35387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35387__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35387__$1);
var G__35395 = cljs.core.chunk_rest(seq__35387__$1);
var G__35396 = c__4556__auto__;
var G__35397 = cljs.core.count(c__4556__auto__);
var G__35398 = (0);
seq__35387 = G__35395;
chunk__35388 = G__35396;
count__35389 = G__35397;
i__35390 = G__35398;
continue;
} else {
var key = cljs.core.first(seq__35387__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__35399 = cljs.core.next(seq__35387__$1);
var G__35400 = null;
var G__35401 = (0);
var G__35402 = (0);
seq__35387 = G__35399;
chunk__35388 = G__35400;
count__35389 = G__35401;
i__35390 = G__35402;
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

var G__35403 = dom;
var G__35404 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__35403,G__35404);
});
