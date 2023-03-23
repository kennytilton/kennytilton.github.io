// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
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
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
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
return cljs.core.apply.call(null,cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__21817(s__21818){
return (new cljs.core.LazySeq(null,(function (){
var s__21818__$1 = s__21818;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21818__$1);
if(temp__5804__auto__){
var s__21818__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21818__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21818__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21820 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21819 = (0);
while(true){
if((i__21819 < size__4528__auto__)){
var vec__21821 = cljs.core._nth.call(null,c__4527__auto__,i__21819);
var k = cljs.core.nth.call(null,vec__21821,(0),null);
var v = cljs.core.nth.call(null,vec__21821,(1),null);
if((v == null)){
cljs.core.chunk_append.call(null,b__21820,k);

var G__21827 = (i__21819 + (1));
i__21819 = G__21827;
continue;
} else {
var G__21828 = (i__21819 + (1));
i__21819 = G__21828;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21820),tiltontec$web_mx$html$map_less_nils_$_iter__21817.call(null,cljs.core.chunk_rest.call(null,s__21818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21820),null);
}
} else {
var vec__21824 = cljs.core.first.call(null,s__21818__$2);
var k = cljs.core.nth.call(null,vec__21824,(0),null);
var v = cljs.core.nth.call(null,vec__21824,(1),null);
if((v == null)){
return cljs.core.cons.call(null,k,tiltontec$web_mx$html$map_less_nils_$_iter__21817.call(null,cljs.core.rest.call(null,s__21818__$2)));
} else {
var G__21829 = cljs.core.rest.call(null,s__21818__$2);
s__21818__$1 = G__21829;
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
return iter__4529__auto__.call(null,m);
})());
});
tiltontec.web_mx.html.class_to_class_string = (function tiltontec$web_mx$html$class_to_class_string(c){
if(cljs.core.coll_QMARK_.call(null,c)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,tiltontec.web_mx.base.kw$,c));
} else {
return tiltontec.web_mx.base.kw$.call(null,c);
}
});
tiltontec.web_mx.html.tag_properties = (function tiltontec$web_mx$html$tag_properties(mx){
var dbg = false;
if(dbg){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props","tag-props",442291855),tiltontec.matrix.api.minfo.call(null,mx),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mx)));
} else {
}

var beef = cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__21830(s__21831){
return (new cljs.core.LazySeq(null,(function (){
var s__21831__$1 = s__21831;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21831__$1);
if(temp__5804__auto__){
var s__21831__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21831__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21831__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21833 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21832 = (0);
while(true){
if((i__21832 < size__4528__auto__)){
var k = cljs.core._nth.call(null,c__4527__auto__,i__21832);
cljs.core.chunk_append.call(null,b__21833,(function (){var v = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683)], null)))?null:(function (){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mx),k)){
} else {
cljs.core.prn.call(null,new cljs.core.Keyword(null,"so-sign-of-attr-key","so-sign-of-attr-key",1272728039),k,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref.call(null,mx));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.matrix.api.mget.call(null,mx,k);
})()
);
if(dbg){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-kv!!","tag-props-kv!!",-1638543431),tiltontec.matrix.api.minfo.call(null,mx),k,v);

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-c","tag-props-c",-240388034),cljs.core.get.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mx)),k));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-cells-flushed","tag-cells-flushed",1670125387),new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mx)));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-get-mx-k","tag-props-get-mx-k",1891042863),k,cljs.core.get.call(null,cljs.core.deref.call(null,mx),k));
} else {
}

if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$.call(null,k),(function (){var G__21834 = k;
var G__21834__$1 = (((G__21834 instanceof cljs.core.Keyword))?G__21834.fqn:null);
switch (G__21834__$1) {
case "style":
var ss = tiltontec.web_mx.style.style_string.call(null,v);
if(dbg){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-ss!!!","tag-ss!!!",1891716394),tiltontec.matrix.api.minfo.call(null,mx),ss,new cljs.core.Keyword(null,"from","from",1815293044),v);
} else {
}

return ss;

break;
case "class":
return tiltontec.web_mx.html.class_to_class_string.call(null,v);

break;
default:
return tiltontec.web_mx.base.kw$.call(null,v);

}
})()], null);
} else {
return null;
}
})());

var G__21837 = (i__21832 + (1));
i__21832 = G__21837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21833),tiltontec$web_mx$html$tag_properties_$_iter__21830.call(null,cljs.core.chunk_rest.call(null,s__21831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21833),null);
}
} else {
var k = cljs.core.first.call(null,s__21831__$2);
return cljs.core.cons.call(null,(function (){var v = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683)], null)))?null:(function (){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mx),k)){
} else {
cljs.core.prn.call(null,new cljs.core.Keyword(null,"so-sign-of-attr-key","so-sign-of-attr-key",1272728039),k,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref.call(null,mx));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mx),k)){
} else {
throw (new Error("Assert failed: (contains? (clojure.core/deref mx) k)"));
}
}

return tiltontec.matrix.api.mget.call(null,mx,k);
})()
);
if(dbg){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-kv!!","tag-props-kv!!",-1638543431),tiltontec.matrix.api.minfo.call(null,mx),k,v);

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-c","tag-props-c",-240388034),cljs.core.get.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mx)),k));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-cells-flushed","tag-cells-flushed",1670125387),new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mx)));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-props-get-mx-k","tag-props-get-mx-k",1891042863),k,cljs.core.get.call(null,cljs.core.deref.call(null,mx),k));
} else {
}

if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$.call(null,k),(function (){var G__21835 = k;
var G__21835__$1 = (((G__21835 instanceof cljs.core.Keyword))?G__21835.fqn:null);
switch (G__21835__$1) {
case "style":
var ss = tiltontec.web_mx.style.style_string.call(null,v);
if(dbg){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"tag-ss!!!","tag-ss!!!",1891716394),tiltontec.matrix.api.minfo.call(null,mx),ss,new cljs.core.Keyword(null,"from","from",1815293044),v);
} else {
}

return ss;

break;
case "class":
return tiltontec.web_mx.html.class_to_class_string.call(null,v);

break;
default:
return tiltontec.web_mx.base.kw$.call(null,v);

}
})()], null);
} else {
return null;
}
})(),tiltontec$web_mx$html$tag_properties_$_iter__21830.call(null,cljs.core.rest.call(null,s__21831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mx)));
})());
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.apply.call(null,cljs.core.concat,beef));
});
tiltontec.web_mx.html.svg_dom_create = (function tiltontec$web_mx$html$svg_dom_create(me,dbg){
if(typeof me === 'string'){
return document.createTextNode(me);
} else {
var svg = document.createElementNS("http://www.w3.org/2000/svg",tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
tiltontec.matrix.api.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-x","dom-x",-864955162),me], null),svg);

tiltontec.matrix.api.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-x","svg-x",1984037907),me], null),svg);

svg.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");

var seq__21839_21849 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__21841_21850 = null;
var count__21842_21851 = (0);
var i__21843_21852 = (0);
while(true){
if((i__21843_21852 < count__21842_21851)){
var ak_21853 = cljs.core._nth.call(null,chunk__21841_21850,i__21843_21852);
var ak$_21854 = cljs.core.name.call(null,ak_21853);
var av_21855 = ak_21853.call(null,cljs.core.deref.call(null,me));
if(cljs.core.fn_QMARK_.call(null,av_21855)){
svg.addEventListener(((cljs.core._EQ_.call(null,"on",cljs.core.subs.call(null,ak$_21854,(0),(2))))?cljs.core.subs.call(null,ak$_21854,(2)):(function (){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"WARNING!-SVG-handler-event-looks-wrong","WARNING!-SVG-handler-event-looks-wrong",2014989192),ak$_21854);

return ak$_21854;
})()
),av_21855);
} else {
svg.setAttributeNS(null,ak$_21854,tiltontec.web_mx.base.attr_val$.call(null,av_21855));
}


var G__21856 = seq__21839_21849;
var G__21857 = chunk__21841_21850;
var G__21858 = count__21842_21851;
var G__21859 = (i__21843_21852 + (1));
seq__21839_21849 = G__21856;
chunk__21841_21850 = G__21857;
count__21842_21851 = G__21858;
i__21843_21852 = G__21859;
continue;
} else {
var temp__5804__auto___21860 = cljs.core.seq.call(null,seq__21839_21849);
if(temp__5804__auto___21860){
var seq__21839_21861__$1 = temp__5804__auto___21860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21839_21861__$1)){
var c__4556__auto___21862 = cljs.core.chunk_first.call(null,seq__21839_21861__$1);
var G__21863 = cljs.core.chunk_rest.call(null,seq__21839_21861__$1);
var G__21864 = c__4556__auto___21862;
var G__21865 = cljs.core.count.call(null,c__4556__auto___21862);
var G__21866 = (0);
seq__21839_21849 = G__21863;
chunk__21841_21850 = G__21864;
count__21842_21851 = G__21865;
i__21843_21852 = G__21866;
continue;
} else {
var ak_21867 = cljs.core.first.call(null,seq__21839_21861__$1);
var ak$_21868 = cljs.core.name.call(null,ak_21867);
var av_21869 = ak_21867.call(null,cljs.core.deref.call(null,me));
if(cljs.core.fn_QMARK_.call(null,av_21869)){
svg.addEventListener(((cljs.core._EQ_.call(null,"on",cljs.core.subs.call(null,ak$_21868,(0),(2))))?cljs.core.subs.call(null,ak$_21868,(2)):(function (){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"WARNING!-SVG-handler-event-looks-wrong","WARNING!-SVG-handler-event-looks-wrong",2014989192),ak$_21868);

return ak$_21868;
})()
),av_21869);
} else {
svg.setAttributeNS(null,ak$_21868,tiltontec.web_mx.base.attr_val$.call(null,av_21869));
}


var G__21870 = cljs.core.next.call(null,seq__21839_21861__$1);
var G__21871 = null;
var G__21872 = (0);
var G__21873 = (0);
seq__21839_21849 = G__21870;
chunk__21841_21850 = G__21871;
count__21842_21851 = G__21872;
i__21843_21852 = G__21873;
continue;
}
} else {
}
}
break;
}

var seq__21845_21874 = cljs.core.seq.call(null,tiltontec.matrix.api.mget_QMARK_.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
var chunk__21846_21875 = null;
var count__21847_21876 = (0);
var i__21848_21877 = (0);
while(true){
if((i__21848_21877 < count__21847_21876)){
var kid_21878 = cljs.core._nth.call(null,chunk__21846_21875,i__21848_21877);
svg.appendChild(tiltontec.web_mx.html.svg_dom_create.call(null,kid_21878,dbg));


var G__21879 = seq__21845_21874;
var G__21880 = chunk__21846_21875;
var G__21881 = count__21847_21876;
var G__21882 = (i__21848_21877 + (1));
seq__21845_21874 = G__21879;
chunk__21846_21875 = G__21880;
count__21847_21876 = G__21881;
i__21848_21877 = G__21882;
continue;
} else {
var temp__5804__auto___21883 = cljs.core.seq.call(null,seq__21845_21874);
if(temp__5804__auto___21883){
var seq__21845_21884__$1 = temp__5804__auto___21883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21845_21884__$1)){
var c__4556__auto___21885 = cljs.core.chunk_first.call(null,seq__21845_21884__$1);
var G__21886 = cljs.core.chunk_rest.call(null,seq__21845_21884__$1);
var G__21887 = c__4556__auto___21885;
var G__21888 = cljs.core.count.call(null,c__4556__auto___21885);
var G__21889 = (0);
seq__21845_21874 = G__21886;
chunk__21846_21875 = G__21887;
count__21847_21876 = G__21888;
i__21848_21877 = G__21889;
continue;
} else {
var kid_21890 = cljs.core.first.call(null,seq__21845_21884__$1);
svg.appendChild(tiltontec.web_mx.html.svg_dom_create.call(null,kid_21890,dbg));


var G__21891 = cljs.core.next.call(null,seq__21845_21884__$1);
var G__21892 = null;
var G__21893 = (0);
var G__21894 = (0);
seq__21845_21874 = G__21891;
chunk__21846_21875 = G__21892;
count__21847_21876 = G__21893;
i__21848_21877 = G__21894;
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
var G__21897 = arguments.length;
switch (G__21897) {
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
return tiltontec.web_mx.html.tag_dom_create.call(null,me,false);
}));

(tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
return goog.dom.safeHtmlToNode(goog.html.sanitizer.HtmlSanitizer.sanitize(me));
} else {
if(cljs.core.coll_QMARK_.call(null,me)){
var frag = document.createDocumentFragment();
var seq__21898_21907 = cljs.core.seq.call(null,me);
var chunk__21899_21908 = null;
var count__21900_21909 = (0);
var i__21901_21910 = (0);
while(true){
if((i__21901_21910 < count__21900_21909)){
var tag_21911 = cljs.core._nth.call(null,chunk__21899_21908,i__21901_21910);
if(cljs.core.truth_(tag_21911)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.call(null,tag_21911));
} else {
}


var G__21912 = seq__21898_21907;
var G__21913 = chunk__21899_21908;
var G__21914 = count__21900_21909;
var G__21915 = (i__21901_21910 + (1));
seq__21898_21907 = G__21912;
chunk__21899_21908 = G__21913;
count__21900_21909 = G__21914;
i__21901_21910 = G__21915;
continue;
} else {
var temp__5804__auto___21916 = cljs.core.seq.call(null,seq__21898_21907);
if(temp__5804__auto___21916){
var seq__21898_21917__$1 = temp__5804__auto___21916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21898_21917__$1)){
var c__4556__auto___21918 = cljs.core.chunk_first.call(null,seq__21898_21917__$1);
var G__21919 = cljs.core.chunk_rest.call(null,seq__21898_21917__$1);
var G__21920 = c__4556__auto___21918;
var G__21921 = cljs.core.count.call(null,c__4556__auto___21918);
var G__21922 = (0);
seq__21898_21907 = G__21919;
chunk__21899_21908 = G__21920;
count__21900_21909 = G__21921;
i__21901_21910 = G__21922;
continue;
} else {
var tag_21923 = cljs.core.first.call(null,seq__21898_21917__$1);
if(cljs.core.truth_(tag_21923)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.call(null,tag_21923));
} else {
}


var G__21924 = cljs.core.next.call(null,seq__21898_21917__$1);
var G__21925 = null;
var G__21926 = (0);
var G__21927 = (0);
seq__21898_21907 = G__21924;
chunk__21899_21908 = G__21925;
count__21900_21909 = G__21926;
i__21901_21910 = G__21927;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
if(cljs.core._EQ_.call(null,"svg",tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)))){
return tiltontec.web_mx.html.svg_dom_create.call(null,me,dbg);
} else {
var dom = cljs.core.apply.call(null,goog.dom.createDom,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)),tiltontec.web_mx.html.tag_properties.call(null,me),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__21895_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.call(null,p1__21895_SHARP_,dbg);
}),tiltontec.matrix.api.mget_QMARK_.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771))),(function (){var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_.call(null,me,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.html.tag_dom_create.call(null,c)], null);
} else {
return null;
}
})()));
tiltontec.matrix.api.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-x","dom-x",-864955162),me], null),dom);

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),null], null), null),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))))){
var temp__5804__auto___21928 = tiltontec.matrix.api.mget_QMARK_.call(null,me,new cljs.core.Keyword(null,"list","list",765357683));
if(cljs.core.truth_(temp__5804__auto___21928)){
var list_id_21929 = temp__5804__auto___21928;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$.call(null,list_id_21929));
} else {
}
} else {
}

var seq__21902_21930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__21903_21931 = null;
var count__21904_21932 = (0);
var i__21905_21933 = (0);
while(true){
if((i__21905_21933 < count__21904_21932)){
var attr_key_21934 = cljs.core._nth.call(null,chunk__21903_21931,i__21905_21933);
if(clojure.string.includes_QMARK_.call(null,cljs.core.name.call(null,attr_key_21934),"-")){
var temp__5804__auto___21935 = tiltontec.matrix.api.mget.call(null,me,attr_key_21934);
if(cljs.core.truth_(temp__5804__auto___21935)){
var attr_val_21936 = temp__5804__auto___21935;
dom.setAttribute(cljs.core.name.call(null,attr_key_21934),tiltontec.web_mx.base.attr_val$.call(null,attr_val_21936));
} else {
}
} else {
}


var G__21937 = seq__21902_21930;
var G__21938 = chunk__21903_21931;
var G__21939 = count__21904_21932;
var G__21940 = (i__21905_21933 + (1));
seq__21902_21930 = G__21937;
chunk__21903_21931 = G__21938;
count__21904_21932 = G__21939;
i__21905_21933 = G__21940;
continue;
} else {
var temp__5804__auto___21941 = cljs.core.seq.call(null,seq__21902_21930);
if(temp__5804__auto___21941){
var seq__21902_21942__$1 = temp__5804__auto___21941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21902_21942__$1)){
var c__4556__auto___21943 = cljs.core.chunk_first.call(null,seq__21902_21942__$1);
var G__21944 = cljs.core.chunk_rest.call(null,seq__21902_21942__$1);
var G__21945 = c__4556__auto___21943;
var G__21946 = cljs.core.count.call(null,c__4556__auto___21943);
var G__21947 = (0);
seq__21902_21930 = G__21944;
chunk__21903_21931 = G__21945;
count__21904_21932 = G__21946;
i__21905_21933 = G__21947;
continue;
} else {
var attr_key_21948 = cljs.core.first.call(null,seq__21902_21942__$1);
if(clojure.string.includes_QMARK_.call(null,cljs.core.name.call(null,attr_key_21948),"-")){
var temp__5804__auto___21949__$1 = tiltontec.matrix.api.mget.call(null,me,attr_key_21948);
if(cljs.core.truth_(temp__5804__auto___21949__$1)){
var attr_val_21950 = temp__5804__auto___21949__$1;
dom.setAttribute(cljs.core.name.call(null,attr_key_21948),tiltontec.web_mx.base.attr_val$.call(null,attr_val_21950));
} else {
}
} else {
}


var G__21951 = cljs.core.next.call(null,seq__21902_21942__$1);
var G__21952 = null;
var G__21953 = (0);
var G__21954 = (0);
seq__21902_21930 = G__21951;
chunk__21903_21931 = G__21952;
count__21904_21932 = G__21953;
i__21905_21933 = G__21954;
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
return tiltontec.matrix.api.mget_QMARK_.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
cljs.core._add_method.call(null,tiltontec.cell.poly.watch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("web-mx.base","tag","web-mx.base/tag",-1519942204)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.matrix.api.unbound)){
tiltontec.matrix.api.mxtrc.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"watchtagkids!!!!!","watchtagkids!!!!!",-1124179351),tiltontec.web_mx.html.tagfo.call(null,me),new cljs.core.Keyword(null,"counts-new-old","counts-new-old",1092635089),cljs.core.count.call(null,newv),cljs.core.count.call(null,oldv),new cljs.core.Keyword(null,"same-kids","same-kids",1924201769),cljs.core._EQ_.call(null,oldv,newv),new cljs.core.Keyword(null,"same-kid-set","same-kid-set",-84971966),cljs.core._EQ_.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv)));

var pdom = tiltontec.web_mx.base.tag_dom.call(null,me);
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(((cljs.core._EQ_.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv))) && ((!(cljs.core._EQ_.call(null,oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__21955_21975 = cljs.core.seq.call(null,newv);
var chunk__21956_21976 = null;
var count__21957_21977 = (0);
var i__21958_21978 = (0);
while(true){
if((i__21958_21978 < count__21957_21977)){
var newk_21979 = cljs.core._nth.call(null,chunk__21956_21976,i__21958_21978);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,newk_21979)));


var G__21980 = seq__21955_21975;
var G__21981 = chunk__21956_21976;
var G__21982 = count__21957_21977;
var G__21983 = (i__21958_21978 + (1));
seq__21955_21975 = G__21980;
chunk__21956_21976 = G__21981;
count__21957_21977 = G__21982;
i__21958_21978 = G__21983;
continue;
} else {
var temp__5804__auto___21984 = cljs.core.seq.call(null,seq__21955_21975);
if(temp__5804__auto___21984){
var seq__21955_21985__$1 = temp__5804__auto___21984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21955_21985__$1)){
var c__4556__auto___21986 = cljs.core.chunk_first.call(null,seq__21955_21985__$1);
var G__21987 = cljs.core.chunk_rest.call(null,seq__21955_21985__$1);
var G__21988 = c__4556__auto___21986;
var G__21989 = cljs.core.count.call(null,c__4556__auto___21986);
var G__21990 = (0);
seq__21955_21975 = G__21987;
chunk__21956_21976 = G__21988;
count__21957_21977 = G__21989;
i__21958_21978 = G__21990;
continue;
} else {
var newk_21991 = cljs.core.first.call(null,seq__21955_21985__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,newk_21991)));


var G__21992 = cljs.core.next.call(null,seq__21955_21985__$1);
var G__21993 = null;
var G__21994 = (0);
var G__21995 = (0);
seq__21955_21975 = G__21992;
chunk__21956_21976 = G__21993;
count__21957_21977 = G__21994;
i__21958_21978 = G__21995;
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
if(cljs.core.empty_QMARK_.call(null,gained)){
var seq__21959 = cljs.core.seq.call(null,lost);
var chunk__21960 = null;
var count__21961 = (0);
var i__21962 = (0);
while(true){
if((i__21962 < count__21961)){
var oldk = cljs.core._nth.call(null,chunk__21960,i__21962);
pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"quiesce","quiesce",-798294121)], null),new cljs.core.Keyword(null,"tag-kids-watch-quiescing","tag-kids-watch-quiescing",662085497),tiltontec.matrix.api.minfo.call(null,oldk));

tiltontec.cell.poly.md_quiesce.call(null,oldk);
}catch (e21965){if((e21965 instanceof Error)){
var e_21996 = e21965;
cljs.core.println.call(null,"An md-quiesce-error occurred:",e_21996);

} else {
throw e21965;

}
}}


var G__21997 = seq__21959;
var G__21998 = chunk__21960;
var G__21999 = count__21961;
var G__22000 = (i__21962 + (1));
seq__21959 = G__21997;
chunk__21960 = G__21998;
count__21961 = G__21999;
i__21962 = G__22000;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21959);
if(temp__5804__auto__){
var seq__21959__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21959__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21959__$1);
var G__22001 = cljs.core.chunk_rest.call(null,seq__21959__$1);
var G__22002 = c__4556__auto__;
var G__22003 = cljs.core.count.call(null,c__4556__auto__);
var G__22004 = (0);
seq__21959 = G__22001;
chunk__21960 = G__22002;
count__21961 = G__22003;
i__21962 = G__22004;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__21959__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"quiesce","quiesce",-798294121)], null),new cljs.core.Keyword(null,"tag-kids-watch-quiescing","tag-kids-watch-quiescing",662085497),tiltontec.matrix.api.minfo.call(null,oldk));

tiltontec.cell.poly.md_quiesce.call(null,oldk);
}catch (e21966){if((e21966 instanceof Error)){
var e_22005 = e21966;
cljs.core.println.call(null,"An md-quiesce-error occurred:",e_22005);

} else {
throw e21966;

}
}}


var G__22006 = cljs.core.next.call(null,seq__21959__$1);
var G__22007 = null;
var G__22008 = (0);
var G__22009 = (0);
seq__21959 = G__22006;
chunk__21960 = G__22007;
count__21961 = G__22008;
i__21962 = G__22009;
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
tiltontec.matrix.api.mxtrc.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"both-gained-n-lost","both-gained-n-lost",-631662920),tiltontec.matrix.api.minfo.call(null,me));

var seq__21967_22010 = cljs.core.seq.call(null,lost);
var chunk__21968_22011 = null;
var count__21969_22012 = (0);
var i__21970_22013 = (0);
while(true){
if((i__21970_22013 < count__21969_22012)){
var oldk_22014 = cljs.core._nth.call(null,chunk__21968_22011,i__21970_22013);
if(typeof oldk_22014 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"watch-kids-quiescing","watch-kids-quiescing",-104778283),tiltontec.matrix.api.minfo.call(null,oldk_22014));

tiltontec.cell.poly.md_quiesce.call(null,oldk_22014);
}


var G__22015 = seq__21967_22010;
var G__22016 = chunk__21968_22011;
var G__22017 = count__21969_22012;
var G__22018 = (i__21970_22013 + (1));
seq__21967_22010 = G__22015;
chunk__21968_22011 = G__22016;
count__21969_22012 = G__22017;
i__21970_22013 = G__22018;
continue;
} else {
var temp__5804__auto___22019 = cljs.core.seq.call(null,seq__21967_22010);
if(temp__5804__auto___22019){
var seq__21967_22020__$1 = temp__5804__auto___22019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21967_22020__$1)){
var c__4556__auto___22021 = cljs.core.chunk_first.call(null,seq__21967_22020__$1);
var G__22022 = cljs.core.chunk_rest.call(null,seq__21967_22020__$1);
var G__22023 = c__4556__auto___22021;
var G__22024 = cljs.core.count.call(null,c__4556__auto___22021);
var G__22025 = (0);
seq__21967_22010 = G__22022;
chunk__21968_22011 = G__22023;
count__21969_22012 = G__22024;
i__21970_22013 = G__22025;
continue;
} else {
var oldk_22026 = cljs.core.first.call(null,seq__21967_22020__$1);
if(typeof oldk_22026 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"watch-kids-quiescing","watch-kids-quiescing",-104778283),tiltontec.matrix.api.minfo.call(null,oldk_22026));

tiltontec.cell.poly.md_quiesce.call(null,oldk_22026);
}


var G__22027 = cljs.core.next.call(null,seq__21967_22020__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__21967_22010 = G__22027;
chunk__21968_22011 = G__22028;
count__21969_22012 = G__22029;
i__21970_22013 = G__22030;
continue;
}
} else {
}
}
break;
}

var seq__21971_22031 = cljs.core.seq.call(null,newv);
var chunk__21972_22032 = null;
var count__21973_22033 = (0);
var i__21974_22034 = (0);
while(true){
if((i__21974_22034 < count__21973_22033)){
var newk_22035 = cljs.core._nth.call(null,chunk__21972_22032,i__21974_22034);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22035]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,newk_22035)):tiltontec.web_mx.html.tag_dom_create.call(null,newk_22035)));


var G__22036 = seq__21971_22031;
var G__22037 = chunk__21972_22032;
var G__22038 = count__21973_22033;
var G__22039 = (i__21974_22034 + (1));
seq__21971_22031 = G__22036;
chunk__21972_22032 = G__22037;
count__21973_22033 = G__22038;
i__21974_22034 = G__22039;
continue;
} else {
var temp__5804__auto___22040 = cljs.core.seq.call(null,seq__21971_22031);
if(temp__5804__auto___22040){
var seq__21971_22041__$1 = temp__5804__auto___22040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21971_22041__$1)){
var c__4556__auto___22042 = cljs.core.chunk_first.call(null,seq__21971_22041__$1);
var G__22043 = cljs.core.chunk_rest.call(null,seq__21971_22041__$1);
var G__22044 = c__4556__auto___22042;
var G__22045 = cljs.core.count.call(null,c__4556__auto___22042);
var G__22046 = (0);
seq__21971_22031 = G__22043;
chunk__21972_22032 = G__22044;
count__21973_22033 = G__22045;
i__21974_22034 = G__22046;
continue;
} else {
var newk_22047 = cljs.core.first.call(null,seq__21971_22041__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22047]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom.call(null,newk_22047)):tiltontec.web_mx.html.tag_dom_create.call(null,newk_22047)));


var G__22048 = cljs.core.next.call(null,seq__21971_22041__$1);
var G__22049 = null;
var G__22050 = (0);
var G__22051 = (0);
seq__21971_22031 = G__22048;
chunk__21972_22032 = G__22049;
count__21973_22033 = G__22050;
i__21974_22034 = G__22051;
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
return new cljs.core.Keyword(null,"dom-x","dom-x",-864955162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me));
});
cljs.core._add_method.call(null,tiltontec.cell.poly.watch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("web-mx.base","svg","web-mx.base/svg",-2073628719)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.matrix.api.unbound)){
var pdom = tiltontec.web_mx.html.svg_dom.call(null,me);
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
var kept = clojure.set.intersection.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(cljs.core.truth_(pdom)){
} else {
throw (new Error("Assert failed: pdom"));
}

if(((cljs.core._EQ_.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv))) && ((!(cljs.core._EQ_.call(null,oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__22052_22072 = cljs.core.seq.call(null,newv);
var chunk__22053_22073 = null;
var count__22054_22074 = (0);
var i__22055_22075 = (0);
while(true){
if((i__22055_22075 < count__22054_22074)){
var newk_22076 = cljs.core._nth.call(null,chunk__22053_22073,i__22055_22075);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,newk_22076)));


var G__22077 = seq__22052_22072;
var G__22078 = chunk__22053_22073;
var G__22079 = count__22054_22074;
var G__22080 = (i__22055_22075 + (1));
seq__22052_22072 = G__22077;
chunk__22053_22073 = G__22078;
count__22054_22074 = G__22079;
i__22055_22075 = G__22080;
continue;
} else {
var temp__5804__auto___22081 = cljs.core.seq.call(null,seq__22052_22072);
if(temp__5804__auto___22081){
var seq__22052_22082__$1 = temp__5804__auto___22081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22052_22082__$1)){
var c__4556__auto___22083 = cljs.core.chunk_first.call(null,seq__22052_22082__$1);
var G__22084 = cljs.core.chunk_rest.call(null,seq__22052_22082__$1);
var G__22085 = c__4556__auto___22083;
var G__22086 = cljs.core.count.call(null,c__4556__auto___22083);
var G__22087 = (0);
seq__22052_22072 = G__22084;
chunk__22053_22073 = G__22085;
count__22054_22074 = G__22086;
i__22055_22075 = G__22087;
continue;
} else {
var newk_22088 = cljs.core.first.call(null,seq__22052_22082__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,newk_22088)));


var G__22089 = cljs.core.next.call(null,seq__22052_22082__$1);
var G__22090 = null;
var G__22091 = (0);
var G__22092 = (0);
seq__22052_22072 = G__22089;
chunk__22053_22073 = G__22090;
count__22054_22074 = G__22091;
i__22055_22075 = G__22092;
continue;
}
} else {
}
}
break;
}

return goog.dom.appendChild(pdom,frag);
} else {
if(cljs.core.empty_QMARK_.call(null,gained)){
var seq__22056 = cljs.core.seq.call(null,lost);
var chunk__22057 = null;
var count__22058 = (0);
var i__22059 = (0);
while(true){
if((i__22059 < count__22058)){
var oldk = cljs.core._nth.call(null,chunk__22057,i__22059);
pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.poly.md_quiesce.call(null,oldk);
}


var G__22093 = seq__22056;
var G__22094 = chunk__22057;
var G__22095 = count__22058;
var G__22096 = (i__22059 + (1));
seq__22056 = G__22093;
chunk__22057 = G__22094;
count__22058 = G__22095;
i__22059 = G__22096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22056);
if(temp__5804__auto__){
var seq__22056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22056__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22056__$1);
var G__22097 = cljs.core.chunk_rest.call(null,seq__22056__$1);
var G__22098 = c__4556__auto__;
var G__22099 = cljs.core.count.call(null,c__4556__auto__);
var G__22100 = (0);
seq__22056 = G__22097;
chunk__22057 = G__22098;
count__22058 = G__22099;
i__22059 = G__22100;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__22056__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
tiltontec.cell.poly.md_quiesce.call(null,oldk);
}


var G__22101 = cljs.core.next.call(null,seq__22056__$1);
var G__22102 = null;
var G__22103 = (0);
var G__22104 = (0);
seq__22056 = G__22101;
chunk__22057 = G__22102;
count__22058 = G__22103;
i__22059 = G__22104;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.empty_QMARK_.call(null,lost)){
var seq__22060 = cljs.core.seq.call(null,gained);
var chunk__22061 = null;
var count__22062 = (0);
var i__22063 = (0);
while(true){
if((i__22063 < count__22062)){
var newk = cljs.core._nth.call(null,chunk__22061,i__22063);
var new_dom_22105 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom.call(null,newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create.call(null,newk,false);
}
})();
pdom.appendChild(new_dom_22105);


var G__22106 = seq__22060;
var G__22107 = chunk__22061;
var G__22108 = count__22062;
var G__22109 = (i__22063 + (1));
seq__22060 = G__22106;
chunk__22061 = G__22107;
count__22062 = G__22108;
i__22063 = G__22109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22060);
if(temp__5804__auto__){
var seq__22060__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22060__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22060__$1);
var G__22110 = cljs.core.chunk_rest.call(null,seq__22060__$1);
var G__22111 = c__4556__auto__;
var G__22112 = cljs.core.count.call(null,c__4556__auto__);
var G__22113 = (0);
seq__22060 = G__22110;
chunk__22061 = G__22111;
count__22062 = G__22112;
i__22063 = G__22113;
continue;
} else {
var newk = cljs.core.first.call(null,seq__22060__$1);
var new_dom_22114 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom.call(null,newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create.call(null,newk,false);
}
})();
pdom.appendChild(new_dom_22114);


var G__22115 = cljs.core.next.call(null,seq__22060__$1);
var G__22116 = null;
var G__22117 = (0);
var G__22118 = (0);
seq__22060 = G__22115;
chunk__22061 = G__22116;
count__22062 = G__22117;
i__22063 = G__22118;
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
var seq__22064_22119 = cljs.core.seq.call(null,lost);
var chunk__22065_22120 = null;
var count__22066_22121 = (0);
var i__22067_22122 = (0);
while(true){
if((i__22067_22122 < count__22066_22121)){
var oldk_22123 = cljs.core._nth.call(null,chunk__22065_22120,i__22067_22122);
if(typeof oldk_22123 === 'string'){
} else {
tiltontec.cell.poly.md_quiesce.call(null,oldk_22123);
}


var G__22124 = seq__22064_22119;
var G__22125 = chunk__22065_22120;
var G__22126 = count__22066_22121;
var G__22127 = (i__22067_22122 + (1));
seq__22064_22119 = G__22124;
chunk__22065_22120 = G__22125;
count__22066_22121 = G__22126;
i__22067_22122 = G__22127;
continue;
} else {
var temp__5804__auto___22128 = cljs.core.seq.call(null,seq__22064_22119);
if(temp__5804__auto___22128){
var seq__22064_22129__$1 = temp__5804__auto___22128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22064_22129__$1)){
var c__4556__auto___22130 = cljs.core.chunk_first.call(null,seq__22064_22129__$1);
var G__22131 = cljs.core.chunk_rest.call(null,seq__22064_22129__$1);
var G__22132 = c__4556__auto___22130;
var G__22133 = cljs.core.count.call(null,c__4556__auto___22130);
var G__22134 = (0);
seq__22064_22119 = G__22131;
chunk__22065_22120 = G__22132;
count__22066_22121 = G__22133;
i__22067_22122 = G__22134;
continue;
} else {
var oldk_22135 = cljs.core.first.call(null,seq__22064_22129__$1);
if(typeof oldk_22135 === 'string'){
} else {
tiltontec.cell.poly.md_quiesce.call(null,oldk_22135);
}


var G__22136 = cljs.core.next.call(null,seq__22064_22129__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__22064_22119 = G__22136;
chunk__22065_22120 = G__22137;
count__22066_22121 = G__22138;
i__22067_22122 = G__22139;
continue;
}
} else {
}
}
break;
}

var seq__22068_22140 = cljs.core.seq.call(null,newv);
var chunk__22069_22141 = null;
var count__22070_22142 = (0);
var i__22071_22143 = (0);
while(true){
if((i__22071_22143 < count__22070_22142)){
var newk_22144 = cljs.core._nth.call(null,chunk__22069_22141,i__22071_22143);
var new_dom_22145 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22144]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,newk_22144)):tiltontec.web_mx.html.svg_dom_create.call(null,newk_22144,false));
goog.dom.appendChild(frag,new_dom_22145);


var G__22146 = seq__22068_22140;
var G__22147 = chunk__22069_22141;
var G__22148 = count__22070_22142;
var G__22149 = (i__22071_22143 + (1));
seq__22068_22140 = G__22146;
chunk__22069_22141 = G__22147;
count__22070_22142 = G__22148;
i__22071_22143 = G__22149;
continue;
} else {
var temp__5804__auto___22150 = cljs.core.seq.call(null,seq__22068_22140);
if(temp__5804__auto___22150){
var seq__22068_22151__$1 = temp__5804__auto___22150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22068_22151__$1)){
var c__4556__auto___22152 = cljs.core.chunk_first.call(null,seq__22068_22151__$1);
var G__22153 = cljs.core.chunk_rest.call(null,seq__22068_22151__$1);
var G__22154 = c__4556__auto___22152;
var G__22155 = cljs.core.count.call(null,c__4556__auto___22152);
var G__22156 = (0);
seq__22068_22140 = G__22153;
chunk__22069_22141 = G__22154;
count__22070_22142 = G__22155;
i__22071_22143 = G__22156;
continue;
} else {
var newk_22157 = cljs.core.first.call(null,seq__22068_22151__$1);
var new_dom_22158 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22157]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom.call(null,newk_22157)):tiltontec.web_mx.html.svg_dom_create.call(null,newk_22157,false));
goog.dom.appendChild(frag,new_dom_22158);


var G__22159 = cljs.core.next.call(null,seq__22068_22151__$1);
var G__22160 = null;
var G__22161 = (0);
var G__22162 = (0);
seq__22068_22140 = G__22159;
chunk__22069_22141 = G__22160;
count__22070_22142 = G__22161;
i__22071_22143 = G__22162;
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
tiltontec.web_mx.html._PLUS_inline_css_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
tiltontec.web_mx.html.mixo = (function tiltontec$web_mx$html$mixo(me){
if((me == null)){
return new cljs.core.Keyword(null,"NIL-MD","NIL-MD",1077917732);
} else {
if((!(tiltontec.matrix.api.any_ref_QMARK_.call(null,me)))){
return new cljs.core.Keyword(null,"NOT-ANY-REF","NOT-ANY-REF",1843757419);
} else {
if((!(tiltontec.matrix.api.md_ref_QMARK_.call(null,me)))){
return new cljs.core.Keyword(null,"NOT-MD","NOT-MD",1700738744);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"anon","anon",-765650478);
}
})(),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))], null);

}
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.poly.watch_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web-mx.base","tag","web-mx.base/tag",-1519942204)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.matrix.api.unbound)){
var temp__5804__auto__ = tiltontec.web_mx.base.tag_dom.call(null,me);
if(cljs.core.truth_(temp__5804__auto__)){
var dom = temp__5804__auto__;
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"content","content",15833224))){
return window.requestAnimationFrame((function (){
return (dom.innerHTML = newv);
}));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))))){
var G__22163 = slot;
var G__22163__$1 = (((G__22163 instanceof cljs.core.Keyword))?G__22163.fqn:null);
switch (G__22163__$1) {
case "style":
return (dom.style = tiltontec.web_mx.style.style_string.call(null,newv));

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
return goog.dom.classlist.set(dom,tiltontec.web_mx.html.class_to_class_string.call(null,newv));

break;
case "checked":
return (dom.checked = newv);

break;
case "value":
return dom.setAttribute("value",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newv));

break;
default:
return dom.setAttribute(cljs.core.name.call(null,slot),newv);

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
cljs.core._add_method.call(null,tiltontec.cell.poly.watch_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web-mx.base","svg","web-mx.base/svg",-2073628719)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.matrix.api.unbound)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))))){
var temp__5802__auto__ = new cljs.core.Keyword(null,"dom-x","dom-x",-864955162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me));
if(cljs.core.truth_(temp__5802__auto__)){
var svg = temp__5802__auto__;
return svg.setAttributeNS(null,cljs.core.name.call(null,slot),tiltontec.web_mx.base.attr_val$.call(null,newv));
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
return tiltontec.matrix.api.fm_navig.call(null,(function (p1__22165_SHARP_){
var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_.call(null,p1__22165_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(temp__5804__auto__)){
var its_class = temp__5804__auto__;
return clojure.string.includes_QMARK_.call(null,(function (){var or__4126__auto__ = tiltontec.web_mx.html.class_to_class_string.call(null,its_class);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "makebetter";
}
})(),tiltontec.web_mx.base.kw$.call(null,class$));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element of a certain tag
 */
tiltontec.web_mx.html.mxu_find_tag = (function tiltontec$web_mx$html$mxu_find_tag(where,tag){
var n = cljs.core.name.call(null,tag);
return tiltontec.matrix.api.fm_navig.call(null,(function (p1__22166_SHARP_){
return cljs.core._EQ_.call(null,n,tiltontec.matrix.api.mget_QMARK_.call(null,p1__22166_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.matrix.api.fm_navig.call(null,(function (p1__22167_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,id),tiltontec.matrix.api.mget_QMARK_.call(null,p1__22167_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
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
var keys = tiltontec.web_mx.html.io_all_keys.call(null);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
var G__22168 = cljs.core.rest.call(null,keys);
var G__22169 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__22168;
found = G__22169;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__22170 = cljs.core.seq.call(null,tiltontec.web_mx.html.io_find.call(null,key_prefix));
var chunk__22171 = null;
var count__22172 = (0);
var i__22173 = (0);
while(true){
if((i__22173 < count__22172)){
var key = cljs.core._nth.call(null,chunk__22171,i__22173);
cljs.core.prn.call(null,new cljs.core.Keyword(null,"io-trunc-nails","io-trunc-nails",-1347534932),key);

tiltontec.web_mx.html.io_delete.call(null,key);


var G__22174 = seq__22170;
var G__22175 = chunk__22171;
var G__22176 = count__22172;
var G__22177 = (i__22173 + (1));
seq__22170 = G__22174;
chunk__22171 = G__22175;
count__22172 = G__22176;
i__22173 = G__22177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22170);
if(temp__5804__auto__){
var seq__22170__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22170__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22170__$1);
var G__22178 = cljs.core.chunk_rest.call(null,seq__22170__$1);
var G__22179 = c__4556__auto__;
var G__22180 = cljs.core.count.call(null,c__4556__auto__);
var G__22181 = (0);
seq__22170 = G__22178;
chunk__22171 = G__22179;
count__22172 = G__22180;
i__22173 = G__22181;
continue;
} else {
var key = cljs.core.first.call(null,seq__22170__$1);
cljs.core.prn.call(null,new cljs.core.Keyword(null,"io-trunc-nails","io-trunc-nails",-1347534932),key);

tiltontec.web_mx.html.io_delete.call(null,key);


var G__22182 = cljs.core.next.call(null,seq__22170__$1);
var G__22183 = null;
var G__22184 = (0);
var G__22185 = (0);
seq__22170 = G__22182;
chunk__22171 = G__22183;
count__22172 = G__22184;
i__22173 = G__22185;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=html.js.map
