// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.poly');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__25666(s__25667){
return (new cljs.core.LazySeq(null,(function (){
var s__25667__$1 = s__25667;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25667__$1);
if(temp__5804__auto__){
var s__25667__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25667__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25667__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25669 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25668 = (0);
while(true){
if((i__25668 < size__4528__auto__)){
var vec__25670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__25668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25670,(1),null);
if((v == null)){
cljs.core.chunk_append(b__25669,k);

var G__25676 = (i__25668 + (1));
i__25668 = G__25676;
continue;
} else {
var G__25677 = (i__25668 + (1));
i__25668 = G__25677;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25669),tiltontec$web_mx$html$map_less_nils_$_iter__25666(cljs.core.chunk_rest(s__25667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25669),null);
}
} else {
var vec__25673 = cljs.core.first(s__25667__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25673,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__25666(cljs.core.rest(s__25667__$2)));
} else {
var G__25678 = cljs.core.rest(s__25667__$2);
s__25667__$1 = G__25678;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__25679(s__25680){
return (new cljs.core.LazySeq(null,(function (){
var s__25680__$1 = s__25680;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25680__$1);
if(temp__5804__auto__){
var s__25680__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25680__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25680__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25682 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25681 = (0);
while(true){
if((i__25681 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__25681);
cljs.core.chunk_append(b__25682,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__25683 = k;
var G__25683__$1 = (((G__25683 instanceof cljs.core.Keyword))?G__25683.fqn:null);
switch (G__25683__$1) {
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

var G__25686 = (i__25681 + (1));
i__25681 = G__25686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25682),tiltontec$web_mx$html$tag_properties_$_iter__25679(cljs.core.chunk_rest(s__25680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25682),null);
}
} else {
var k = cljs.core.first(s__25680__$2);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__25684 = k;
var G__25684__$1 = (((G__25684 instanceof cljs.core.Keyword))?G__25684.fqn:null);
switch (G__25684__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__25679(cljs.core.rest(s__25680__$2)));
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

var seq__25688_25702 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__25690_25703 = null;
var count__25691_25704 = (0);
var i__25692_25705 = (0);
while(true){
if((i__25692_25705 < count__25691_25704)){
var ak_25706 = chunk__25690_25703.cljs$core$IIndexed$_nth$arity$2(null,i__25692_25705);
var ak$_25707 = cljs.core.name(ak_25706);
var av_25708 = (function (){var G__25696 = cljs.core.deref(me);
return (ak_25706.cljs$core$IFn$_invoke$arity$1 ? ak_25706.cljs$core$IFn$_invoke$arity$1(G__25696) : ak_25706.call(null,G__25696));
})();
if(cljs.core.fn_QMARK_(av_25708)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_25707,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_25707,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_25707], 0));

return ak$_25707;
})()
),av_25708);
} else {
svg.setAttributeNS(null,ak$_25707,tiltontec.web_mx.base.attr_val$(av_25708));
}


var G__25709 = seq__25688_25702;
var G__25710 = chunk__25690_25703;
var G__25711 = count__25691_25704;
var G__25712 = (i__25692_25705 + (1));
seq__25688_25702 = G__25709;
chunk__25690_25703 = G__25710;
count__25691_25704 = G__25711;
i__25692_25705 = G__25712;
continue;
} else {
var temp__5804__auto___25713 = cljs.core.seq(seq__25688_25702);
if(temp__5804__auto___25713){
var seq__25688_25714__$1 = temp__5804__auto___25713;
if(cljs.core.chunked_seq_QMARK_(seq__25688_25714__$1)){
var c__4556__auto___25715 = cljs.core.chunk_first(seq__25688_25714__$1);
var G__25716 = cljs.core.chunk_rest(seq__25688_25714__$1);
var G__25717 = c__4556__auto___25715;
var G__25718 = cljs.core.count(c__4556__auto___25715);
var G__25719 = (0);
seq__25688_25702 = G__25716;
chunk__25690_25703 = G__25717;
count__25691_25704 = G__25718;
i__25692_25705 = G__25719;
continue;
} else {
var ak_25720 = cljs.core.first(seq__25688_25714__$1);
var ak$_25721 = cljs.core.name(ak_25720);
var av_25722 = (function (){var G__25697 = cljs.core.deref(me);
return (ak_25720.cljs$core$IFn$_invoke$arity$1 ? ak_25720.cljs$core$IFn$_invoke$arity$1(G__25697) : ak_25720.call(null,G__25697));
})();
if(cljs.core.fn_QMARK_(av_25722)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_25721,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_25721,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_25721], 0));

return ak$_25721;
})()
),av_25722);
} else {
svg.setAttributeNS(null,ak$_25721,tiltontec.web_mx.base.attr_val$(av_25722));
}


var G__25723 = cljs.core.next(seq__25688_25714__$1);
var G__25724 = null;
var G__25725 = (0);
var G__25726 = (0);
seq__25688_25702 = G__25723;
chunk__25690_25703 = G__25724;
count__25691_25704 = G__25725;
i__25692_25705 = G__25726;
continue;
}
} else {
}
}
break;
}

var seq__25698_25727 = cljs.core.seq(tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__25699_25728 = null;
var count__25700_25729 = (0);
var i__25701_25730 = (0);
while(true){
if((i__25701_25730 < count__25700_25729)){
var kid_25731 = chunk__25699_25728.cljs$core$IIndexed$_nth$arity$2(null,i__25701_25730);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_25731,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_25731,dbg)));


var G__25732 = seq__25698_25727;
var G__25733 = chunk__25699_25728;
var G__25734 = count__25700_25729;
var G__25735 = (i__25701_25730 + (1));
seq__25698_25727 = G__25732;
chunk__25699_25728 = G__25733;
count__25700_25729 = G__25734;
i__25701_25730 = G__25735;
continue;
} else {
var temp__5804__auto___25736 = cljs.core.seq(seq__25698_25727);
if(temp__5804__auto___25736){
var seq__25698_25737__$1 = temp__5804__auto___25736;
if(cljs.core.chunked_seq_QMARK_(seq__25698_25737__$1)){
var c__4556__auto___25738 = cljs.core.chunk_first(seq__25698_25737__$1);
var G__25739 = cljs.core.chunk_rest(seq__25698_25737__$1);
var G__25740 = c__4556__auto___25738;
var G__25741 = cljs.core.count(c__4556__auto___25738);
var G__25742 = (0);
seq__25698_25727 = G__25739;
chunk__25699_25728 = G__25740;
count__25700_25729 = G__25741;
i__25701_25730 = G__25742;
continue;
} else {
var kid_25743 = cljs.core.first(seq__25698_25737__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_25743,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_25743,dbg)));


var G__25744 = cljs.core.next(seq__25698_25737__$1);
var G__25745 = null;
var G__25746 = (0);
var G__25747 = (0);
seq__25698_25727 = G__25744;
chunk__25699_25728 = G__25745;
count__25700_25729 = G__25746;
i__25701_25730 = G__25747;
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
var G__25750 = arguments.length;
switch (G__25750) {
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
var seq__25751_25760 = cljs.core.seq(me);
var chunk__25752_25761 = null;
var count__25753_25762 = (0);
var i__25754_25763 = (0);
while(true){
if((i__25754_25763 < count__25753_25762)){
var tag_25764 = chunk__25752_25761.cljs$core$IIndexed$_nth$arity$2(null,i__25754_25763);
if(cljs.core.truth_(tag_25764)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_25764));
} else {
}


var G__25765 = seq__25751_25760;
var G__25766 = chunk__25752_25761;
var G__25767 = count__25753_25762;
var G__25768 = (i__25754_25763 + (1));
seq__25751_25760 = G__25765;
chunk__25752_25761 = G__25766;
count__25753_25762 = G__25767;
i__25754_25763 = G__25768;
continue;
} else {
var temp__5804__auto___25769 = cljs.core.seq(seq__25751_25760);
if(temp__5804__auto___25769){
var seq__25751_25770__$1 = temp__5804__auto___25769;
if(cljs.core.chunked_seq_QMARK_(seq__25751_25770__$1)){
var c__4556__auto___25771 = cljs.core.chunk_first(seq__25751_25770__$1);
var G__25772 = cljs.core.chunk_rest(seq__25751_25770__$1);
var G__25773 = c__4556__auto___25771;
var G__25774 = cljs.core.count(c__4556__auto___25771);
var G__25775 = (0);
seq__25751_25760 = G__25772;
chunk__25752_25761 = G__25773;
count__25753_25762 = G__25774;
i__25754_25763 = G__25775;
continue;
} else {
var tag_25776 = cljs.core.first(seq__25751_25770__$1);
if(cljs.core.truth_(tag_25776)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_25776));
} else {
}


var G__25777 = cljs.core.next(seq__25751_25770__$1);
var G__25778 = null;
var G__25779 = (0);
var G__25780 = (0);
seq__25751_25760 = G__25777;
chunk__25752_25761 = G__25778;
count__25753_25762 = G__25779;
i__25754_25763 = G__25780;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25748_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__25748_SHARP_,dbg);
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
var temp__5804__auto___25781 = tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___25781)){
var list_id_25782 = temp__5804__auto___25781;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_25782));
} else {
}
} else {
}

var seq__25755_25783 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__25756_25784 = null;
var count__25757_25785 = (0);
var i__25758_25786 = (0);
while(true){
if((i__25758_25786 < count__25757_25785)){
var attr_key_25787 = chunk__25756_25784.cljs$core$IIndexed$_nth$arity$2(null,i__25758_25786);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_25787),"-")){
var temp__5804__auto___25788 = tiltontec.matrix.api.mget(me,attr_key_25787);
if(cljs.core.truth_(temp__5804__auto___25788)){
var attr_val_25789 = temp__5804__auto___25788;
dom.setAttribute(cljs.core.name(attr_key_25787),tiltontec.web_mx.base.attr_val$(attr_val_25789));
} else {
}
} else {
}


var G__25790 = seq__25755_25783;
var G__25791 = chunk__25756_25784;
var G__25792 = count__25757_25785;
var G__25793 = (i__25758_25786 + (1));
seq__25755_25783 = G__25790;
chunk__25756_25784 = G__25791;
count__25757_25785 = G__25792;
i__25758_25786 = G__25793;
continue;
} else {
var temp__5804__auto___25794 = cljs.core.seq(seq__25755_25783);
if(temp__5804__auto___25794){
var seq__25755_25795__$1 = temp__5804__auto___25794;
if(cljs.core.chunked_seq_QMARK_(seq__25755_25795__$1)){
var c__4556__auto___25796 = cljs.core.chunk_first(seq__25755_25795__$1);
var G__25797 = cljs.core.chunk_rest(seq__25755_25795__$1);
var G__25798 = c__4556__auto___25796;
var G__25799 = cljs.core.count(c__4556__auto___25796);
var G__25800 = (0);
seq__25755_25783 = G__25797;
chunk__25756_25784 = G__25798;
count__25757_25785 = G__25799;
i__25758_25786 = G__25800;
continue;
} else {
var attr_key_25801 = cljs.core.first(seq__25755_25795__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_25801),"-")){
var temp__5804__auto___25802__$1 = tiltontec.matrix.api.mget(me,attr_key_25801);
if(cljs.core.truth_(temp__5804__auto___25802__$1)){
var attr_val_25803 = temp__5804__auto___25802__$1;
dom.setAttribute(cljs.core.name(attr_key_25801),tiltontec.web_mx.base.attr_val$(attr_val_25803));
} else {
}
} else {
}


var G__25804 = cljs.core.next(seq__25755_25795__$1);
var G__25805 = null;
var G__25806 = (0);
var G__25807 = (0);
seq__25755_25783 = G__25804;
chunk__25756_25784 = G__25805;
count__25757_25785 = G__25806;
i__25758_25786 = G__25807;
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
var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__25808_25828 = cljs.core.seq(newv);
var chunk__25809_25829 = null;
var count__25810_25830 = (0);
var i__25811_25831 = (0);
while(true){
if((i__25811_25831 < count__25810_25830)){
var newk_25832 = chunk__25809_25829.cljs$core$IIndexed$_nth$arity$2(null,i__25811_25831);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_25832)));


var G__25833 = seq__25808_25828;
var G__25834 = chunk__25809_25829;
var G__25835 = count__25810_25830;
var G__25836 = (i__25811_25831 + (1));
seq__25808_25828 = G__25833;
chunk__25809_25829 = G__25834;
count__25810_25830 = G__25835;
i__25811_25831 = G__25836;
continue;
} else {
var temp__5804__auto___25837 = cljs.core.seq(seq__25808_25828);
if(temp__5804__auto___25837){
var seq__25808_25838__$1 = temp__5804__auto___25837;
if(cljs.core.chunked_seq_QMARK_(seq__25808_25838__$1)){
var c__4556__auto___25839 = cljs.core.chunk_first(seq__25808_25838__$1);
var G__25840 = cljs.core.chunk_rest(seq__25808_25838__$1);
var G__25841 = c__4556__auto___25839;
var G__25842 = cljs.core.count(c__4556__auto___25839);
var G__25843 = (0);
seq__25808_25828 = G__25840;
chunk__25809_25829 = G__25841;
count__25810_25830 = G__25842;
i__25811_25831 = G__25843;
continue;
} else {
var newk_25844 = cljs.core.first(seq__25808_25838__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_25844)));


var G__25845 = cljs.core.next(seq__25808_25838__$1);
var G__25846 = null;
var G__25847 = (0);
var G__25848 = (0);
seq__25808_25828 = G__25845;
chunk__25809_25829 = G__25846;
count__25810_25830 = G__25847;
i__25811_25831 = G__25848;
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
var seq__25812 = cljs.core.seq(lost);
var chunk__25813 = null;
var count__25814 = (0);
var i__25815 = (0);
while(true){
if((i__25815 < count__25814)){
var oldk = chunk__25813.cljs$core$IIndexed$_nth$arity$2(null,i__25815);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e25818){if((e25818 instanceof Error)){
var e_25849 = e25818;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_25849], 0));

} else {
throw e25818;

}
}}


var G__25850 = seq__25812;
var G__25851 = chunk__25813;
var G__25852 = count__25814;
var G__25853 = (i__25815 + (1));
seq__25812 = G__25850;
chunk__25813 = G__25851;
count__25814 = G__25852;
i__25815 = G__25853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25812);
if(temp__5804__auto__){
var seq__25812__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25812__$1);
var G__25854 = cljs.core.chunk_rest(seq__25812__$1);
var G__25855 = c__4556__auto__;
var G__25856 = cljs.core.count(c__4556__auto__);
var G__25857 = (0);
seq__25812 = G__25854;
chunk__25813 = G__25855;
count__25814 = G__25856;
i__25815 = G__25857;
continue;
} else {
var oldk = cljs.core.first(seq__25812__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e25819){if((e25819 instanceof Error)){
var e_25858 = e25819;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_25858], 0));

} else {
throw e25819;

}
}}


var G__25859 = cljs.core.next(seq__25812__$1);
var G__25860 = null;
var G__25861 = (0);
var G__25862 = (0);
seq__25812 = G__25859;
chunk__25813 = G__25860;
count__25814 = G__25861;
i__25815 = G__25862;
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
var seq__25820_25863 = cljs.core.seq(lost);
var chunk__25821_25864 = null;
var count__25822_25865 = (0);
var i__25823_25866 = (0);
while(true){
if((i__25823_25866 < count__25822_25865)){
var oldk_25867 = chunk__25821_25864.cljs$core$IIndexed$_nth$arity$2(null,i__25823_25866);
if(typeof oldk_25867 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_25867) : tiltontec.cell.poly.md_quiesce.call(null,oldk_25867));
}


var G__25868 = seq__25820_25863;
var G__25869 = chunk__25821_25864;
var G__25870 = count__25822_25865;
var G__25871 = (i__25823_25866 + (1));
seq__25820_25863 = G__25868;
chunk__25821_25864 = G__25869;
count__25822_25865 = G__25870;
i__25823_25866 = G__25871;
continue;
} else {
var temp__5804__auto___25872 = cljs.core.seq(seq__25820_25863);
if(temp__5804__auto___25872){
var seq__25820_25873__$1 = temp__5804__auto___25872;
if(cljs.core.chunked_seq_QMARK_(seq__25820_25873__$1)){
var c__4556__auto___25874 = cljs.core.chunk_first(seq__25820_25873__$1);
var G__25875 = cljs.core.chunk_rest(seq__25820_25873__$1);
var G__25876 = c__4556__auto___25874;
var G__25877 = cljs.core.count(c__4556__auto___25874);
var G__25878 = (0);
seq__25820_25863 = G__25875;
chunk__25821_25864 = G__25876;
count__25822_25865 = G__25877;
i__25823_25866 = G__25878;
continue;
} else {
var oldk_25879 = cljs.core.first(seq__25820_25873__$1);
if(typeof oldk_25879 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_25879) : tiltontec.cell.poly.md_quiesce.call(null,oldk_25879));
}


var G__25880 = cljs.core.next(seq__25820_25873__$1);
var G__25881 = null;
var G__25882 = (0);
var G__25883 = (0);
seq__25820_25863 = G__25880;
chunk__25821_25864 = G__25881;
count__25822_25865 = G__25882;
i__25823_25866 = G__25883;
continue;
}
} else {
}
}
break;
}

var seq__25824_25884 = cljs.core.seq(newv);
var chunk__25825_25885 = null;
var count__25826_25886 = (0);
var i__25827_25887 = (0);
while(true){
if((i__25827_25887 < count__25826_25886)){
var newk_25888 = chunk__25825_25885.cljs$core$IIndexed$_nth$arity$2(null,i__25827_25887);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_25888]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_25888)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_25888)));


var G__25889 = seq__25824_25884;
var G__25890 = chunk__25825_25885;
var G__25891 = count__25826_25886;
var G__25892 = (i__25827_25887 + (1));
seq__25824_25884 = G__25889;
chunk__25825_25885 = G__25890;
count__25826_25886 = G__25891;
i__25827_25887 = G__25892;
continue;
} else {
var temp__5804__auto___25893 = cljs.core.seq(seq__25824_25884);
if(temp__5804__auto___25893){
var seq__25824_25894__$1 = temp__5804__auto___25893;
if(cljs.core.chunked_seq_QMARK_(seq__25824_25894__$1)){
var c__4556__auto___25895 = cljs.core.chunk_first(seq__25824_25894__$1);
var G__25896 = cljs.core.chunk_rest(seq__25824_25894__$1);
var G__25897 = c__4556__auto___25895;
var G__25898 = cljs.core.count(c__4556__auto___25895);
var G__25899 = (0);
seq__25824_25884 = G__25896;
chunk__25825_25885 = G__25897;
count__25826_25886 = G__25898;
i__25827_25887 = G__25899;
continue;
} else {
var newk_25900 = cljs.core.first(seq__25824_25894__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_25900]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_25900)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_25900)));


var G__25901 = cljs.core.next(seq__25824_25894__$1);
var G__25902 = null;
var G__25903 = (0);
var G__25904 = (0);
seq__25824_25884 = G__25901;
chunk__25825_25885 = G__25902;
count__25826_25886 = G__25903;
i__25827_25887 = G__25904;
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
var seq__25905_25925 = cljs.core.seq(newv);
var chunk__25906_25926 = null;
var count__25907_25927 = (0);
var i__25908_25928 = (0);
while(true){
if((i__25908_25928 < count__25907_25927)){
var newk_25929 = chunk__25906_25926.cljs$core$IIndexed$_nth$arity$2(null,i__25908_25928);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_25929)));


var G__25930 = seq__25905_25925;
var G__25931 = chunk__25906_25926;
var G__25932 = count__25907_25927;
var G__25933 = (i__25908_25928 + (1));
seq__25905_25925 = G__25930;
chunk__25906_25926 = G__25931;
count__25907_25927 = G__25932;
i__25908_25928 = G__25933;
continue;
} else {
var temp__5804__auto___25934 = cljs.core.seq(seq__25905_25925);
if(temp__5804__auto___25934){
var seq__25905_25935__$1 = temp__5804__auto___25934;
if(cljs.core.chunked_seq_QMARK_(seq__25905_25935__$1)){
var c__4556__auto___25936 = cljs.core.chunk_first(seq__25905_25935__$1);
var G__25937 = cljs.core.chunk_rest(seq__25905_25935__$1);
var G__25938 = c__4556__auto___25936;
var G__25939 = cljs.core.count(c__4556__auto___25936);
var G__25940 = (0);
seq__25905_25925 = G__25937;
chunk__25906_25926 = G__25938;
count__25907_25927 = G__25939;
i__25908_25928 = G__25940;
continue;
} else {
var newk_25941 = cljs.core.first(seq__25905_25935__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_25941)));


var G__25942 = cljs.core.next(seq__25905_25935__$1);
var G__25943 = null;
var G__25944 = (0);
var G__25945 = (0);
seq__25905_25925 = G__25942;
chunk__25906_25926 = G__25943;
count__25907_25927 = G__25944;
i__25908_25928 = G__25945;
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
var seq__25909 = cljs.core.seq(lost);
var chunk__25910 = null;
var count__25911 = (0);
var i__25912 = (0);
while(true){
if((i__25912 < count__25911)){
var oldk = chunk__25910.cljs$core$IIndexed$_nth$arity$2(null,i__25912);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__25946 = seq__25909;
var G__25947 = chunk__25910;
var G__25948 = count__25911;
var G__25949 = (i__25912 + (1));
seq__25909 = G__25946;
chunk__25910 = G__25947;
count__25911 = G__25948;
i__25912 = G__25949;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25909);
if(temp__5804__auto__){
var seq__25909__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25909__$1);
var G__25950 = cljs.core.chunk_rest(seq__25909__$1);
var G__25951 = c__4556__auto__;
var G__25952 = cljs.core.count(c__4556__auto__);
var G__25953 = (0);
seq__25909 = G__25950;
chunk__25910 = G__25951;
count__25911 = G__25952;
i__25912 = G__25953;
continue;
} else {
var oldk = cljs.core.first(seq__25909__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__25954 = cljs.core.next(seq__25909__$1);
var G__25955 = null;
var G__25956 = (0);
var G__25957 = (0);
seq__25909 = G__25954;
chunk__25910 = G__25955;
count__25911 = G__25956;
i__25912 = G__25957;
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
var seq__25913 = cljs.core.seq(gained);
var chunk__25914 = null;
var count__25915 = (0);
var i__25916 = (0);
while(true){
if((i__25916 < count__25915)){
var newk = chunk__25914.cljs$core$IIndexed$_nth$arity$2(null,i__25916);
var new_dom_25958 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_25958);


var G__25959 = seq__25913;
var G__25960 = chunk__25914;
var G__25961 = count__25915;
var G__25962 = (i__25916 + (1));
seq__25913 = G__25959;
chunk__25914 = G__25960;
count__25915 = G__25961;
i__25916 = G__25962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25913);
if(temp__5804__auto__){
var seq__25913__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25913__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25913__$1);
var G__25963 = cljs.core.chunk_rest(seq__25913__$1);
var G__25964 = c__4556__auto__;
var G__25965 = cljs.core.count(c__4556__auto__);
var G__25966 = (0);
seq__25913 = G__25963;
chunk__25914 = G__25964;
count__25915 = G__25965;
i__25916 = G__25966;
continue;
} else {
var newk = cljs.core.first(seq__25913__$1);
var new_dom_25967 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_25967);


var G__25968 = cljs.core.next(seq__25913__$1);
var G__25969 = null;
var G__25970 = (0);
var G__25971 = (0);
seq__25913 = G__25968;
chunk__25914 = G__25969;
count__25915 = G__25970;
i__25916 = G__25971;
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
var seq__25917_25972 = cljs.core.seq(lost);
var chunk__25918_25973 = null;
var count__25919_25974 = (0);
var i__25920_25975 = (0);
while(true){
if((i__25920_25975 < count__25919_25974)){
var oldk_25976 = chunk__25918_25973.cljs$core$IIndexed$_nth$arity$2(null,i__25920_25975);
if(typeof oldk_25976 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_25976) : tiltontec.cell.poly.md_quiesce.call(null,oldk_25976));
}


var G__25977 = seq__25917_25972;
var G__25978 = chunk__25918_25973;
var G__25979 = count__25919_25974;
var G__25980 = (i__25920_25975 + (1));
seq__25917_25972 = G__25977;
chunk__25918_25973 = G__25978;
count__25919_25974 = G__25979;
i__25920_25975 = G__25980;
continue;
} else {
var temp__5804__auto___25981 = cljs.core.seq(seq__25917_25972);
if(temp__5804__auto___25981){
var seq__25917_25982__$1 = temp__5804__auto___25981;
if(cljs.core.chunked_seq_QMARK_(seq__25917_25982__$1)){
var c__4556__auto___25983 = cljs.core.chunk_first(seq__25917_25982__$1);
var G__25984 = cljs.core.chunk_rest(seq__25917_25982__$1);
var G__25985 = c__4556__auto___25983;
var G__25986 = cljs.core.count(c__4556__auto___25983);
var G__25987 = (0);
seq__25917_25972 = G__25984;
chunk__25918_25973 = G__25985;
count__25919_25974 = G__25986;
i__25920_25975 = G__25987;
continue;
} else {
var oldk_25988 = cljs.core.first(seq__25917_25982__$1);
if(typeof oldk_25988 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_25988) : tiltontec.cell.poly.md_quiesce.call(null,oldk_25988));
}


var G__25989 = cljs.core.next(seq__25917_25982__$1);
var G__25990 = null;
var G__25991 = (0);
var G__25992 = (0);
seq__25917_25972 = G__25989;
chunk__25918_25973 = G__25990;
count__25919_25974 = G__25991;
i__25920_25975 = G__25992;
continue;
}
} else {
}
}
break;
}

var seq__25921_25993 = cljs.core.seq(newv);
var chunk__25922_25994 = null;
var count__25923_25995 = (0);
var i__25924_25996 = (0);
while(true){
if((i__25924_25996 < count__25923_25995)){
var newk_25997 = chunk__25922_25994.cljs$core$IIndexed$_nth$arity$2(null,i__25924_25996);
var new_dom_25998 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_25997]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_25997)):tiltontec.web_mx.html.svg_dom_create(newk_25997,false));
goog.dom.appendChild(frag,new_dom_25998);


var G__25999 = seq__25921_25993;
var G__26000 = chunk__25922_25994;
var G__26001 = count__25923_25995;
var G__26002 = (i__25924_25996 + (1));
seq__25921_25993 = G__25999;
chunk__25922_25994 = G__26000;
count__25923_25995 = G__26001;
i__25924_25996 = G__26002;
continue;
} else {
var temp__5804__auto___26003 = cljs.core.seq(seq__25921_25993);
if(temp__5804__auto___26003){
var seq__25921_26004__$1 = temp__5804__auto___26003;
if(cljs.core.chunked_seq_QMARK_(seq__25921_26004__$1)){
var c__4556__auto___26005 = cljs.core.chunk_first(seq__25921_26004__$1);
var G__26006 = cljs.core.chunk_rest(seq__25921_26004__$1);
var G__26007 = c__4556__auto___26005;
var G__26008 = cljs.core.count(c__4556__auto___26005);
var G__26009 = (0);
seq__25921_25993 = G__26006;
chunk__25922_25994 = G__26007;
count__25923_25995 = G__26008;
i__25924_25996 = G__26009;
continue;
} else {
var newk_26010 = cljs.core.first(seq__25921_26004__$1);
var new_dom_26011 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_26010]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_26010)):tiltontec.web_mx.html.svg_dom_create(newk_26010,false));
goog.dom.appendChild(frag,new_dom_26011);


var G__26012 = cljs.core.next(seq__25921_26004__$1);
var G__26013 = null;
var G__26014 = (0);
var G__26015 = (0);
seq__25921_25993 = G__26012;
chunk__25922_25994 = G__26013;
count__25923_25995 = G__26014;
i__25924_25996 = G__26015;
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
var G__26016 = slot;
var G__26016__$1 = (((G__26016 instanceof cljs.core.Keyword))?G__26016.fqn:null);
switch (G__26016__$1) {
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
var G__26017 = dom;
var G__26018 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__26017,G__26018);

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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__26020_SHARP_){
var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_(p1__26020_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__26021_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.matrix.api.mget_QMARK_(p1__26021_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__26022_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.matrix.api.mget_QMARK_(p1__26022_SHARP_,cljs.core.cst$kw$id));
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
var G__26023 = cljs.core.rest(keys);
var G__26024 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__26023;
found = G__26024;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__26025 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__26026 = null;
var count__26027 = (0);
var i__26028 = (0);
while(true){
if((i__26028 < count__26027)){
var key = chunk__26026.cljs$core$IIndexed$_nth$arity$2(null,i__26028);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__26029 = seq__26025;
var G__26030 = chunk__26026;
var G__26031 = count__26027;
var G__26032 = (i__26028 + (1));
seq__26025 = G__26029;
chunk__26026 = G__26030;
count__26027 = G__26031;
i__26028 = G__26032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26025);
if(temp__5804__auto__){
var seq__26025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26025__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26025__$1);
var G__26033 = cljs.core.chunk_rest(seq__26025__$1);
var G__26034 = c__4556__auto__;
var G__26035 = cljs.core.count(c__4556__auto__);
var G__26036 = (0);
seq__26025 = G__26033;
chunk__26026 = G__26034;
count__26027 = G__26035;
i__26028 = G__26036;
continue;
} else {
var key = cljs.core.first(seq__26025__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__26037 = cljs.core.next(seq__26025__$1);
var G__26038 = null;
var G__26039 = (0);
var G__26040 = (0);
seq__26025 = G__26037;
chunk__26026 = G__26038;
count__26027 = G__26039;
i__26028 = G__26040;
continue;
}
} else {
return null;
}
}
break;
}
});
