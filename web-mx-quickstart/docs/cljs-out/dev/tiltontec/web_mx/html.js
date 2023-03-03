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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28304(s__28305){
return (new cljs.core.LazySeq(null,(function (){
var s__28305__$1 = s__28305;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28305__$1);
if(temp__5804__auto__){
var s__28305__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28305__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28305__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28307 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28306 = (0);
while(true){
if((i__28306 < size__4528__auto__)){
var vec__28308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28306);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28307,k);

var G__28314 = (i__28306 + (1));
i__28306 = G__28314;
continue;
} else {
var G__28315 = (i__28306 + (1));
i__28306 = G__28315;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28307),tiltontec$web_mx$html$map_less_nils_$_iter__28304(cljs.core.chunk_rest(s__28305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28307),null);
}
} else {
var vec__28311 = cljs.core.first(s__28305__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28304(cljs.core.rest(s__28305__$2)));
} else {
var G__28316 = cljs.core.rest(s__28305__$2);
s__28305__$1 = G__28316;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28317(s__28318){
return (new cljs.core.LazySeq(null,(function (){
var s__28318__$1 = s__28318;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28318__$1);
if(temp__5804__auto__){
var s__28318__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28318__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28318__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28320 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28319 = (0);
while(true){
if((i__28319 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28319);
cljs.core.chunk_append(b__28320,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28321 = k;
var G__28321__$1 = (((G__28321 instanceof cljs.core.Keyword))?G__28321.fqn:null);
switch (G__28321__$1) {
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

var G__28324 = (i__28319 + (1));
i__28319 = G__28324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28320),tiltontec$web_mx$html$tag_properties_$_iter__28317(cljs.core.chunk_rest(s__28318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28320),null);
}
} else {
var k = cljs.core.first(s__28318__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28322 = k;
var G__28322__$1 = (((G__28322 instanceof cljs.core.Keyword))?G__28322.fqn:null);
switch (G__28322__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28317(cljs.core.rest(s__28318__$2)));
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

var seq__28326_28340 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28328_28341 = null;
var count__28329_28342 = (0);
var i__28330_28343 = (0);
while(true){
if((i__28330_28343 < count__28329_28342)){
var ak_28344 = chunk__28328_28341.cljs$core$IIndexed$_nth$arity$2(null,i__28330_28343);
var ak$_28345 = cljs.core.name(ak_28344);
var av_28346 = (function (){var G__28334 = cljs.core.deref(me);
return (ak_28344.cljs$core$IFn$_invoke$arity$1 ? ak_28344.cljs$core$IFn$_invoke$arity$1(G__28334) : ak_28344.call(null,G__28334));
})();
if(cljs.core.fn_QMARK_(av_28346)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28345,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28345,(2)):ak$_28345),av_28346);
} else {
svg.setAttributeNS(null,ak$_28345,tiltontec.web_mx.base.attr_val$(av_28346));
}


var G__28347 = seq__28326_28340;
var G__28348 = chunk__28328_28341;
var G__28349 = count__28329_28342;
var G__28350 = (i__28330_28343 + (1));
seq__28326_28340 = G__28347;
chunk__28328_28341 = G__28348;
count__28329_28342 = G__28349;
i__28330_28343 = G__28350;
continue;
} else {
var temp__5804__auto___28351 = cljs.core.seq(seq__28326_28340);
if(temp__5804__auto___28351){
var seq__28326_28352__$1 = temp__5804__auto___28351;
if(cljs.core.chunked_seq_QMARK_(seq__28326_28352__$1)){
var c__4556__auto___28353 = cljs.core.chunk_first(seq__28326_28352__$1);
var G__28354 = cljs.core.chunk_rest(seq__28326_28352__$1);
var G__28355 = c__4556__auto___28353;
var G__28356 = cljs.core.count(c__4556__auto___28353);
var G__28357 = (0);
seq__28326_28340 = G__28354;
chunk__28328_28341 = G__28355;
count__28329_28342 = G__28356;
i__28330_28343 = G__28357;
continue;
} else {
var ak_28358 = cljs.core.first(seq__28326_28352__$1);
var ak$_28359 = cljs.core.name(ak_28358);
var av_28360 = (function (){var G__28335 = cljs.core.deref(me);
return (ak_28358.cljs$core$IFn$_invoke$arity$1 ? ak_28358.cljs$core$IFn$_invoke$arity$1(G__28335) : ak_28358.call(null,G__28335));
})();
if(cljs.core.fn_QMARK_(av_28360)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28359,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28359,(2)):ak$_28359),av_28360);
} else {
svg.setAttributeNS(null,ak$_28359,tiltontec.web_mx.base.attr_val$(av_28360));
}


var G__28361 = cljs.core.next(seq__28326_28352__$1);
var G__28362 = null;
var G__28363 = (0);
var G__28364 = (0);
seq__28326_28340 = G__28361;
chunk__28328_28341 = G__28362;
count__28329_28342 = G__28363;
i__28330_28343 = G__28364;
continue;
}
} else {
}
}
break;
}

var seq__28336_28365 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28337_28366 = null;
var count__28338_28367 = (0);
var i__28339_28368 = (0);
while(true){
if((i__28339_28368 < count__28338_28367)){
var kid_28369 = chunk__28337_28366.cljs$core$IIndexed$_nth$arity$2(null,i__28339_28368);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28369,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28369,dbg)));


var G__28370 = seq__28336_28365;
var G__28371 = chunk__28337_28366;
var G__28372 = count__28338_28367;
var G__28373 = (i__28339_28368 + (1));
seq__28336_28365 = G__28370;
chunk__28337_28366 = G__28371;
count__28338_28367 = G__28372;
i__28339_28368 = G__28373;
continue;
} else {
var temp__5804__auto___28374 = cljs.core.seq(seq__28336_28365);
if(temp__5804__auto___28374){
var seq__28336_28375__$1 = temp__5804__auto___28374;
if(cljs.core.chunked_seq_QMARK_(seq__28336_28375__$1)){
var c__4556__auto___28376 = cljs.core.chunk_first(seq__28336_28375__$1);
var G__28377 = cljs.core.chunk_rest(seq__28336_28375__$1);
var G__28378 = c__4556__auto___28376;
var G__28379 = cljs.core.count(c__4556__auto___28376);
var G__28380 = (0);
seq__28336_28365 = G__28377;
chunk__28337_28366 = G__28378;
count__28338_28367 = G__28379;
i__28339_28368 = G__28380;
continue;
} else {
var kid_28381 = cljs.core.first(seq__28336_28375__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28381,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28381,dbg)));


var G__28382 = cljs.core.next(seq__28336_28375__$1);
var G__28383 = null;
var G__28384 = (0);
var G__28385 = (0);
seq__28336_28365 = G__28382;
chunk__28337_28366 = G__28383;
count__28338_28367 = G__28384;
i__28339_28368 = G__28385;
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
var G__28388 = arguments.length;
switch (G__28388) {
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
var seq__28389_28398 = cljs.core.seq(me);
var chunk__28390_28399 = null;
var count__28391_28400 = (0);
var i__28392_28401 = (0);
while(true){
if((i__28392_28401 < count__28391_28400)){
var tag_28402 = chunk__28390_28399.cljs$core$IIndexed$_nth$arity$2(null,i__28392_28401);
if(cljs.core.truth_(tag_28402)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28402));
} else {
}


var G__28403 = seq__28389_28398;
var G__28404 = chunk__28390_28399;
var G__28405 = count__28391_28400;
var G__28406 = (i__28392_28401 + (1));
seq__28389_28398 = G__28403;
chunk__28390_28399 = G__28404;
count__28391_28400 = G__28405;
i__28392_28401 = G__28406;
continue;
} else {
var temp__5804__auto___28407 = cljs.core.seq(seq__28389_28398);
if(temp__5804__auto___28407){
var seq__28389_28408__$1 = temp__5804__auto___28407;
if(cljs.core.chunked_seq_QMARK_(seq__28389_28408__$1)){
var c__4556__auto___28409 = cljs.core.chunk_first(seq__28389_28408__$1);
var G__28410 = cljs.core.chunk_rest(seq__28389_28408__$1);
var G__28411 = c__4556__auto___28409;
var G__28412 = cljs.core.count(c__4556__auto___28409);
var G__28413 = (0);
seq__28389_28398 = G__28410;
chunk__28390_28399 = G__28411;
count__28391_28400 = G__28412;
i__28392_28401 = G__28413;
continue;
} else {
var tag_28414 = cljs.core.first(seq__28389_28408__$1);
if(cljs.core.truth_(tag_28414)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28414));
} else {
}


var G__28415 = cljs.core.next(seq__28389_28408__$1);
var G__28416 = null;
var G__28417 = (0);
var G__28418 = (0);
seq__28389_28398 = G__28415;
chunk__28390_28399 = G__28416;
count__28391_28400 = G__28417;
i__28392_28401 = G__28418;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28386_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28386_SHARP_,dbg);
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
var temp__5804__auto___28419 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28419)){
var list_id_28420 = temp__5804__auto___28419;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28420));
} else {
}
} else {
}

var seq__28393_28421 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28394_28422 = null;
var count__28395_28423 = (0);
var i__28396_28424 = (0);
while(true){
if((i__28396_28424 < count__28395_28423)){
var attr_key_28425 = chunk__28394_28422.cljs$core$IIndexed$_nth$arity$2(null,i__28396_28424);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28425),"-")){
var temp__5804__auto___28426 = tiltontec.model.core.mget(me,attr_key_28425);
if(cljs.core.truth_(temp__5804__auto___28426)){
var attr_val_28427 = temp__5804__auto___28426;
dom.setAttribute(cljs.core.name(attr_key_28425),tiltontec.web_mx.base.attr_val$(attr_val_28427));
} else {
}
} else {
}


var G__28428 = seq__28393_28421;
var G__28429 = chunk__28394_28422;
var G__28430 = count__28395_28423;
var G__28431 = (i__28396_28424 + (1));
seq__28393_28421 = G__28428;
chunk__28394_28422 = G__28429;
count__28395_28423 = G__28430;
i__28396_28424 = G__28431;
continue;
} else {
var temp__5804__auto___28432 = cljs.core.seq(seq__28393_28421);
if(temp__5804__auto___28432){
var seq__28393_28433__$1 = temp__5804__auto___28432;
if(cljs.core.chunked_seq_QMARK_(seq__28393_28433__$1)){
var c__4556__auto___28434 = cljs.core.chunk_first(seq__28393_28433__$1);
var G__28435 = cljs.core.chunk_rest(seq__28393_28433__$1);
var G__28436 = c__4556__auto___28434;
var G__28437 = cljs.core.count(c__4556__auto___28434);
var G__28438 = (0);
seq__28393_28421 = G__28435;
chunk__28394_28422 = G__28436;
count__28395_28423 = G__28437;
i__28396_28424 = G__28438;
continue;
} else {
var attr_key_28439 = cljs.core.first(seq__28393_28433__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28439),"-")){
var temp__5804__auto___28440__$1 = tiltontec.model.core.mget(me,attr_key_28439);
if(cljs.core.truth_(temp__5804__auto___28440__$1)){
var attr_val_28441 = temp__5804__auto___28440__$1;
dom.setAttribute(cljs.core.name(attr_key_28439),tiltontec.web_mx.base.attr_val$(attr_val_28441));
} else {
}
} else {
}


var G__28442 = cljs.core.next(seq__28393_28433__$1);
var G__28443 = null;
var G__28444 = (0);
var G__28445 = (0);
seq__28393_28421 = G__28442;
chunk__28394_28422 = G__28443;
count__28395_28423 = G__28444;
i__28396_28424 = G__28445;
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
var seq__28446_28466 = cljs.core.seq(newv);
var chunk__28447_28467 = null;
var count__28448_28468 = (0);
var i__28449_28469 = (0);
while(true){
if((i__28449_28469 < count__28448_28468)){
var newk_28470 = chunk__28447_28467.cljs$core$IIndexed$_nth$arity$2(null,i__28449_28469);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28470)));


var G__28471 = seq__28446_28466;
var G__28472 = chunk__28447_28467;
var G__28473 = count__28448_28468;
var G__28474 = (i__28449_28469 + (1));
seq__28446_28466 = G__28471;
chunk__28447_28467 = G__28472;
count__28448_28468 = G__28473;
i__28449_28469 = G__28474;
continue;
} else {
var temp__5804__auto___28475 = cljs.core.seq(seq__28446_28466);
if(temp__5804__auto___28475){
var seq__28446_28476__$1 = temp__5804__auto___28475;
if(cljs.core.chunked_seq_QMARK_(seq__28446_28476__$1)){
var c__4556__auto___28477 = cljs.core.chunk_first(seq__28446_28476__$1);
var G__28478 = cljs.core.chunk_rest(seq__28446_28476__$1);
var G__28479 = c__4556__auto___28477;
var G__28480 = cljs.core.count(c__4556__auto___28477);
var G__28481 = (0);
seq__28446_28466 = G__28478;
chunk__28447_28467 = G__28479;
count__28448_28468 = G__28480;
i__28449_28469 = G__28481;
continue;
} else {
var newk_28482 = cljs.core.first(seq__28446_28476__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28482)));


var G__28483 = cljs.core.next(seq__28446_28476__$1);
var G__28484 = null;
var G__28485 = (0);
var G__28486 = (0);
seq__28446_28466 = G__28483;
chunk__28447_28467 = G__28484;
count__28448_28468 = G__28485;
i__28449_28469 = G__28486;
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
var seq__28450 = cljs.core.seq(lost);
var chunk__28451 = null;
var count__28452 = (0);
var i__28453 = (0);
while(true){
if((i__28453 < count__28452)){
var oldk = chunk__28451.cljs$core$IIndexed$_nth$arity$2(null,i__28453);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28456){if((e28456 instanceof Error)){
var e_28487 = e28456;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28487], 0));

} else {
throw e28456;

}
}}


var G__28488 = seq__28450;
var G__28489 = chunk__28451;
var G__28490 = count__28452;
var G__28491 = (i__28453 + (1));
seq__28450 = G__28488;
chunk__28451 = G__28489;
count__28452 = G__28490;
i__28453 = G__28491;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28450);
if(temp__5804__auto__){
var seq__28450__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28450__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28450__$1);
var G__28492 = cljs.core.chunk_rest(seq__28450__$1);
var G__28493 = c__4556__auto__;
var G__28494 = cljs.core.count(c__4556__auto__);
var G__28495 = (0);
seq__28450 = G__28492;
chunk__28451 = G__28493;
count__28452 = G__28494;
i__28453 = G__28495;
continue;
} else {
var oldk = cljs.core.first(seq__28450__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28457){if((e28457 instanceof Error)){
var e_28496 = e28457;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28496], 0));

} else {
throw e28457;

}
}}


var G__28497 = cljs.core.next(seq__28450__$1);
var G__28498 = null;
var G__28499 = (0);
var G__28500 = (0);
seq__28450 = G__28497;
chunk__28451 = G__28498;
count__28452 = G__28499;
i__28453 = G__28500;
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
var seq__28458_28501 = cljs.core.seq(lost);
var chunk__28459_28502 = null;
var count__28460_28503 = (0);
var i__28461_28504 = (0);
while(true){
if((i__28461_28504 < count__28460_28503)){
var oldk_28505 = chunk__28459_28502.cljs$core$IIndexed$_nth$arity$2(null,i__28461_28504);
if(typeof oldk_28505 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28505) : tiltontec.cell.evaluate.finalize.call(null,oldk_28505));
}


var G__28506 = seq__28458_28501;
var G__28507 = chunk__28459_28502;
var G__28508 = count__28460_28503;
var G__28509 = (i__28461_28504 + (1));
seq__28458_28501 = G__28506;
chunk__28459_28502 = G__28507;
count__28460_28503 = G__28508;
i__28461_28504 = G__28509;
continue;
} else {
var temp__5804__auto___28510 = cljs.core.seq(seq__28458_28501);
if(temp__5804__auto___28510){
var seq__28458_28511__$1 = temp__5804__auto___28510;
if(cljs.core.chunked_seq_QMARK_(seq__28458_28511__$1)){
var c__4556__auto___28512 = cljs.core.chunk_first(seq__28458_28511__$1);
var G__28513 = cljs.core.chunk_rest(seq__28458_28511__$1);
var G__28514 = c__4556__auto___28512;
var G__28515 = cljs.core.count(c__4556__auto___28512);
var G__28516 = (0);
seq__28458_28501 = G__28513;
chunk__28459_28502 = G__28514;
count__28460_28503 = G__28515;
i__28461_28504 = G__28516;
continue;
} else {
var oldk_28517 = cljs.core.first(seq__28458_28511__$1);
if(typeof oldk_28517 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28517) : tiltontec.cell.evaluate.finalize.call(null,oldk_28517));
}


var G__28518 = cljs.core.next(seq__28458_28511__$1);
var G__28519 = null;
var G__28520 = (0);
var G__28521 = (0);
seq__28458_28501 = G__28518;
chunk__28459_28502 = G__28519;
count__28460_28503 = G__28520;
i__28461_28504 = G__28521;
continue;
}
} else {
}
}
break;
}

var seq__28462_28522 = cljs.core.seq(newv);
var chunk__28463_28523 = null;
var count__28464_28524 = (0);
var i__28465_28525 = (0);
while(true){
if((i__28465_28525 < count__28464_28524)){
var newk_28526 = chunk__28463_28523.cljs$core$IIndexed$_nth$arity$2(null,i__28465_28525);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28526]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28526)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28526)));


var G__28527 = seq__28462_28522;
var G__28528 = chunk__28463_28523;
var G__28529 = count__28464_28524;
var G__28530 = (i__28465_28525 + (1));
seq__28462_28522 = G__28527;
chunk__28463_28523 = G__28528;
count__28464_28524 = G__28529;
i__28465_28525 = G__28530;
continue;
} else {
var temp__5804__auto___28531 = cljs.core.seq(seq__28462_28522);
if(temp__5804__auto___28531){
var seq__28462_28532__$1 = temp__5804__auto___28531;
if(cljs.core.chunked_seq_QMARK_(seq__28462_28532__$1)){
var c__4556__auto___28533 = cljs.core.chunk_first(seq__28462_28532__$1);
var G__28534 = cljs.core.chunk_rest(seq__28462_28532__$1);
var G__28535 = c__4556__auto___28533;
var G__28536 = cljs.core.count(c__4556__auto___28533);
var G__28537 = (0);
seq__28462_28522 = G__28534;
chunk__28463_28523 = G__28535;
count__28464_28524 = G__28536;
i__28465_28525 = G__28537;
continue;
} else {
var newk_28538 = cljs.core.first(seq__28462_28532__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28538]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28538)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28538)));


var G__28539 = cljs.core.next(seq__28462_28532__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28462_28522 = G__28539;
chunk__28463_28523 = G__28540;
count__28464_28524 = G__28541;
i__28465_28525 = G__28542;
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
var seq__28543_28563 = cljs.core.seq(newv);
var chunk__28544_28564 = null;
var count__28545_28565 = (0);
var i__28546_28566 = (0);
while(true){
if((i__28546_28566 < count__28545_28565)){
var newk_28567 = chunk__28544_28564.cljs$core$IIndexed$_nth$arity$2(null,i__28546_28566);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28567)));


var G__28568 = seq__28543_28563;
var G__28569 = chunk__28544_28564;
var G__28570 = count__28545_28565;
var G__28571 = (i__28546_28566 + (1));
seq__28543_28563 = G__28568;
chunk__28544_28564 = G__28569;
count__28545_28565 = G__28570;
i__28546_28566 = G__28571;
continue;
} else {
var temp__5804__auto___28572 = cljs.core.seq(seq__28543_28563);
if(temp__5804__auto___28572){
var seq__28543_28573__$1 = temp__5804__auto___28572;
if(cljs.core.chunked_seq_QMARK_(seq__28543_28573__$1)){
var c__4556__auto___28574 = cljs.core.chunk_first(seq__28543_28573__$1);
var G__28575 = cljs.core.chunk_rest(seq__28543_28573__$1);
var G__28576 = c__4556__auto___28574;
var G__28577 = cljs.core.count(c__4556__auto___28574);
var G__28578 = (0);
seq__28543_28563 = G__28575;
chunk__28544_28564 = G__28576;
count__28545_28565 = G__28577;
i__28546_28566 = G__28578;
continue;
} else {
var newk_28579 = cljs.core.first(seq__28543_28573__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28579)));


var G__28580 = cljs.core.next(seq__28543_28573__$1);
var G__28581 = null;
var G__28582 = (0);
var G__28583 = (0);
seq__28543_28563 = G__28580;
chunk__28544_28564 = G__28581;
count__28545_28565 = G__28582;
i__28546_28566 = G__28583;
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
var seq__28547 = cljs.core.seq(lost);
var chunk__28548 = null;
var count__28549 = (0);
var i__28550 = (0);
while(true){
if((i__28550 < count__28549)){
var oldk = chunk__28548.cljs$core$IIndexed$_nth$arity$2(null,i__28550);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28584 = seq__28547;
var G__28585 = chunk__28548;
var G__28586 = count__28549;
var G__28587 = (i__28550 + (1));
seq__28547 = G__28584;
chunk__28548 = G__28585;
count__28549 = G__28586;
i__28550 = G__28587;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28547);
if(temp__5804__auto__){
var seq__28547__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28547__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28547__$1);
var G__28588 = cljs.core.chunk_rest(seq__28547__$1);
var G__28589 = c__4556__auto__;
var G__28590 = cljs.core.count(c__4556__auto__);
var G__28591 = (0);
seq__28547 = G__28588;
chunk__28548 = G__28589;
count__28549 = G__28590;
i__28550 = G__28591;
continue;
} else {
var oldk = cljs.core.first(seq__28547__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28592 = cljs.core.next(seq__28547__$1);
var G__28593 = null;
var G__28594 = (0);
var G__28595 = (0);
seq__28547 = G__28592;
chunk__28548 = G__28593;
count__28549 = G__28594;
i__28550 = G__28595;
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
var seq__28551 = cljs.core.seq(gained);
var chunk__28552 = null;
var count__28553 = (0);
var i__28554 = (0);
while(true){
if((i__28554 < count__28553)){
var newk = chunk__28552.cljs$core$IIndexed$_nth$arity$2(null,i__28554);
var new_dom_28596 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28596);


var G__28597 = seq__28551;
var G__28598 = chunk__28552;
var G__28599 = count__28553;
var G__28600 = (i__28554 + (1));
seq__28551 = G__28597;
chunk__28552 = G__28598;
count__28553 = G__28599;
i__28554 = G__28600;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28551);
if(temp__5804__auto__){
var seq__28551__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28551__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28551__$1);
var G__28601 = cljs.core.chunk_rest(seq__28551__$1);
var G__28602 = c__4556__auto__;
var G__28603 = cljs.core.count(c__4556__auto__);
var G__28604 = (0);
seq__28551 = G__28601;
chunk__28552 = G__28602;
count__28553 = G__28603;
i__28554 = G__28604;
continue;
} else {
var newk = cljs.core.first(seq__28551__$1);
var new_dom_28605 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28605);


var G__28606 = cljs.core.next(seq__28551__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28551 = G__28606;
chunk__28552 = G__28607;
count__28553 = G__28608;
i__28554 = G__28609;
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
var seq__28555_28610 = cljs.core.seq(lost);
var chunk__28556_28611 = null;
var count__28557_28612 = (0);
var i__28558_28613 = (0);
while(true){
if((i__28558_28613 < count__28557_28612)){
var oldk_28614 = chunk__28556_28611.cljs$core$IIndexed$_nth$arity$2(null,i__28558_28613);
if(typeof oldk_28614 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28614) : tiltontec.cell.evaluate.finalize.call(null,oldk_28614));
}


var G__28615 = seq__28555_28610;
var G__28616 = chunk__28556_28611;
var G__28617 = count__28557_28612;
var G__28618 = (i__28558_28613 + (1));
seq__28555_28610 = G__28615;
chunk__28556_28611 = G__28616;
count__28557_28612 = G__28617;
i__28558_28613 = G__28618;
continue;
} else {
var temp__5804__auto___28619 = cljs.core.seq(seq__28555_28610);
if(temp__5804__auto___28619){
var seq__28555_28620__$1 = temp__5804__auto___28619;
if(cljs.core.chunked_seq_QMARK_(seq__28555_28620__$1)){
var c__4556__auto___28621 = cljs.core.chunk_first(seq__28555_28620__$1);
var G__28622 = cljs.core.chunk_rest(seq__28555_28620__$1);
var G__28623 = c__4556__auto___28621;
var G__28624 = cljs.core.count(c__4556__auto___28621);
var G__28625 = (0);
seq__28555_28610 = G__28622;
chunk__28556_28611 = G__28623;
count__28557_28612 = G__28624;
i__28558_28613 = G__28625;
continue;
} else {
var oldk_28626 = cljs.core.first(seq__28555_28620__$1);
if(typeof oldk_28626 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28626) : tiltontec.cell.evaluate.finalize.call(null,oldk_28626));
}


var G__28627 = cljs.core.next(seq__28555_28620__$1);
var G__28628 = null;
var G__28629 = (0);
var G__28630 = (0);
seq__28555_28610 = G__28627;
chunk__28556_28611 = G__28628;
count__28557_28612 = G__28629;
i__28558_28613 = G__28630;
continue;
}
} else {
}
}
break;
}

var seq__28559_28631 = cljs.core.seq(newv);
var chunk__28560_28632 = null;
var count__28561_28633 = (0);
var i__28562_28634 = (0);
while(true){
if((i__28562_28634 < count__28561_28633)){
var newk_28635 = chunk__28560_28632.cljs$core$IIndexed$_nth$arity$2(null,i__28562_28634);
var new_dom_28636 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28635]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28635)):tiltontec.web_mx.html.svg_dom_create(newk_28635,false));
goog.dom.appendChild(frag,new_dom_28636);


var G__28637 = seq__28559_28631;
var G__28638 = chunk__28560_28632;
var G__28639 = count__28561_28633;
var G__28640 = (i__28562_28634 + (1));
seq__28559_28631 = G__28637;
chunk__28560_28632 = G__28638;
count__28561_28633 = G__28639;
i__28562_28634 = G__28640;
continue;
} else {
var temp__5804__auto___28641 = cljs.core.seq(seq__28559_28631);
if(temp__5804__auto___28641){
var seq__28559_28642__$1 = temp__5804__auto___28641;
if(cljs.core.chunked_seq_QMARK_(seq__28559_28642__$1)){
var c__4556__auto___28643 = cljs.core.chunk_first(seq__28559_28642__$1);
var G__28644 = cljs.core.chunk_rest(seq__28559_28642__$1);
var G__28645 = c__4556__auto___28643;
var G__28646 = cljs.core.count(c__4556__auto___28643);
var G__28647 = (0);
seq__28559_28631 = G__28644;
chunk__28560_28632 = G__28645;
count__28561_28633 = G__28646;
i__28562_28634 = G__28647;
continue;
} else {
var newk_28648 = cljs.core.first(seq__28559_28642__$1);
var new_dom_28649 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28648]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28648)):tiltontec.web_mx.html.svg_dom_create(newk_28648,false));
goog.dom.appendChild(frag,new_dom_28649);


var G__28650 = cljs.core.next(seq__28559_28642__$1);
var G__28651 = null;
var G__28652 = (0);
var G__28653 = (0);
seq__28559_28631 = G__28650;
chunk__28560_28632 = G__28651;
count__28561_28633 = G__28652;
i__28562_28634 = G__28653;
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
var G__28654 = slot;
var G__28654__$1 = (((G__28654 instanceof cljs.core.Keyword))?G__28654.fqn:null);
switch (G__28654__$1) {
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
var G__28655 = dom;
var G__28656 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28655,G__28656);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28658_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28658_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28659_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28659_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28660_SHARP_,cljs.core.cst$kw$id));
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
var G__28661 = cljs.core.rest(keys);
var G__28662 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28661;
found = G__28662;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28663 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28664 = null;
var count__28665 = (0);
var i__28666 = (0);
while(true){
if((i__28666 < count__28665)){
var key = chunk__28664.cljs$core$IIndexed$_nth$arity$2(null,i__28666);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28667 = seq__28663;
var G__28668 = chunk__28664;
var G__28669 = count__28665;
var G__28670 = (i__28666 + (1));
seq__28663 = G__28667;
chunk__28664 = G__28668;
count__28665 = G__28669;
i__28666 = G__28670;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28663);
if(temp__5804__auto__){
var seq__28663__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28663__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28663__$1);
var G__28671 = cljs.core.chunk_rest(seq__28663__$1);
var G__28672 = c__4556__auto__;
var G__28673 = cljs.core.count(c__4556__auto__);
var G__28674 = (0);
seq__28663 = G__28671;
chunk__28664 = G__28672;
count__28665 = G__28673;
i__28666 = G__28674;
continue;
} else {
var key = cljs.core.first(seq__28663__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28675 = cljs.core.next(seq__28663__$1);
var G__28676 = null;
var G__28677 = (0);
var G__28678 = (0);
seq__28663 = G__28675;
chunk__28664 = G__28676;
count__28665 = G__28677;
i__28666 = G__28678;
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

var G__28679 = dom;
var G__28680 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28679,G__28680);
});
