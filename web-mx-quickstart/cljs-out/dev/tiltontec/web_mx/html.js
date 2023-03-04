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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28335(s__28336){
return (new cljs.core.LazySeq(null,(function (){
var s__28336__$1 = s__28336;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28336__$1);
if(temp__5804__auto__){
var s__28336__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28336__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28336__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28338 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28337 = (0);
while(true){
if((i__28337 < size__4528__auto__)){
var vec__28339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28338,k);

var G__28345 = (i__28337 + (1));
i__28337 = G__28345;
continue;
} else {
var G__28346 = (i__28337 + (1));
i__28337 = G__28346;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28338),tiltontec$web_mx$html$map_less_nils_$_iter__28335(cljs.core.chunk_rest(s__28336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28338),null);
}
} else {
var vec__28342 = cljs.core.first(s__28336__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28342,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28335(cljs.core.rest(s__28336__$2)));
} else {
var G__28347 = cljs.core.rest(s__28336__$2);
s__28336__$1 = G__28347;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28348(s__28349){
return (new cljs.core.LazySeq(null,(function (){
var s__28349__$1 = s__28349;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28349__$1);
if(temp__5804__auto__){
var s__28349__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28349__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28349__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28351 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28350 = (0);
while(true){
if((i__28350 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28350);
cljs.core.chunk_append(b__28351,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28352 = k;
var G__28352__$1 = (((G__28352 instanceof cljs.core.Keyword))?G__28352.fqn:null);
switch (G__28352__$1) {
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

var G__28355 = (i__28350 + (1));
i__28350 = G__28355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28351),tiltontec$web_mx$html$tag_properties_$_iter__28348(cljs.core.chunk_rest(s__28349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28351),null);
}
} else {
var k = cljs.core.first(s__28349__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28353 = k;
var G__28353__$1 = (((G__28353 instanceof cljs.core.Keyword))?G__28353.fqn:null);
switch (G__28353__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28348(cljs.core.rest(s__28349__$2)));
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

var seq__28357_28371 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28359_28372 = null;
var count__28360_28373 = (0);
var i__28361_28374 = (0);
while(true){
if((i__28361_28374 < count__28360_28373)){
var ak_28375 = chunk__28359_28372.cljs$core$IIndexed$_nth$arity$2(null,i__28361_28374);
var ak$_28376 = cljs.core.name(ak_28375);
var av_28377 = (function (){var G__28365 = cljs.core.deref(me);
return (ak_28375.cljs$core$IFn$_invoke$arity$1 ? ak_28375.cljs$core$IFn$_invoke$arity$1(G__28365) : ak_28375.call(null,G__28365));
})();
if(cljs.core.fn_QMARK_(av_28377)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28376,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28376,(2)):ak$_28376),av_28377);
} else {
svg.setAttributeNS(null,ak$_28376,tiltontec.web_mx.base.attr_val$(av_28377));
}


var G__28378 = seq__28357_28371;
var G__28379 = chunk__28359_28372;
var G__28380 = count__28360_28373;
var G__28381 = (i__28361_28374 + (1));
seq__28357_28371 = G__28378;
chunk__28359_28372 = G__28379;
count__28360_28373 = G__28380;
i__28361_28374 = G__28381;
continue;
} else {
var temp__5804__auto___28382 = cljs.core.seq(seq__28357_28371);
if(temp__5804__auto___28382){
var seq__28357_28383__$1 = temp__5804__auto___28382;
if(cljs.core.chunked_seq_QMARK_(seq__28357_28383__$1)){
var c__4556__auto___28384 = cljs.core.chunk_first(seq__28357_28383__$1);
var G__28385 = cljs.core.chunk_rest(seq__28357_28383__$1);
var G__28386 = c__4556__auto___28384;
var G__28387 = cljs.core.count(c__4556__auto___28384);
var G__28388 = (0);
seq__28357_28371 = G__28385;
chunk__28359_28372 = G__28386;
count__28360_28373 = G__28387;
i__28361_28374 = G__28388;
continue;
} else {
var ak_28389 = cljs.core.first(seq__28357_28383__$1);
var ak$_28390 = cljs.core.name(ak_28389);
var av_28391 = (function (){var G__28366 = cljs.core.deref(me);
return (ak_28389.cljs$core$IFn$_invoke$arity$1 ? ak_28389.cljs$core$IFn$_invoke$arity$1(G__28366) : ak_28389.call(null,G__28366));
})();
if(cljs.core.fn_QMARK_(av_28391)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28390,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28390,(2)):ak$_28390),av_28391);
} else {
svg.setAttributeNS(null,ak$_28390,tiltontec.web_mx.base.attr_val$(av_28391));
}


var G__28392 = cljs.core.next(seq__28357_28383__$1);
var G__28393 = null;
var G__28394 = (0);
var G__28395 = (0);
seq__28357_28371 = G__28392;
chunk__28359_28372 = G__28393;
count__28360_28373 = G__28394;
i__28361_28374 = G__28395;
continue;
}
} else {
}
}
break;
}

var seq__28367_28396 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28368_28397 = null;
var count__28369_28398 = (0);
var i__28370_28399 = (0);
while(true){
if((i__28370_28399 < count__28369_28398)){
var kid_28400 = chunk__28368_28397.cljs$core$IIndexed$_nth$arity$2(null,i__28370_28399);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28400,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28400,dbg)));


var G__28401 = seq__28367_28396;
var G__28402 = chunk__28368_28397;
var G__28403 = count__28369_28398;
var G__28404 = (i__28370_28399 + (1));
seq__28367_28396 = G__28401;
chunk__28368_28397 = G__28402;
count__28369_28398 = G__28403;
i__28370_28399 = G__28404;
continue;
} else {
var temp__5804__auto___28405 = cljs.core.seq(seq__28367_28396);
if(temp__5804__auto___28405){
var seq__28367_28406__$1 = temp__5804__auto___28405;
if(cljs.core.chunked_seq_QMARK_(seq__28367_28406__$1)){
var c__4556__auto___28407 = cljs.core.chunk_first(seq__28367_28406__$1);
var G__28408 = cljs.core.chunk_rest(seq__28367_28406__$1);
var G__28409 = c__4556__auto___28407;
var G__28410 = cljs.core.count(c__4556__auto___28407);
var G__28411 = (0);
seq__28367_28396 = G__28408;
chunk__28368_28397 = G__28409;
count__28369_28398 = G__28410;
i__28370_28399 = G__28411;
continue;
} else {
var kid_28412 = cljs.core.first(seq__28367_28406__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28412,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28412,dbg)));


var G__28413 = cljs.core.next(seq__28367_28406__$1);
var G__28414 = null;
var G__28415 = (0);
var G__28416 = (0);
seq__28367_28396 = G__28413;
chunk__28368_28397 = G__28414;
count__28369_28398 = G__28415;
i__28370_28399 = G__28416;
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
var G__28419 = arguments.length;
switch (G__28419) {
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
var seq__28420_28429 = cljs.core.seq(me);
var chunk__28421_28430 = null;
var count__28422_28431 = (0);
var i__28423_28432 = (0);
while(true){
if((i__28423_28432 < count__28422_28431)){
var tag_28433 = chunk__28421_28430.cljs$core$IIndexed$_nth$arity$2(null,i__28423_28432);
if(cljs.core.truth_(tag_28433)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28433));
} else {
}


var G__28434 = seq__28420_28429;
var G__28435 = chunk__28421_28430;
var G__28436 = count__28422_28431;
var G__28437 = (i__28423_28432 + (1));
seq__28420_28429 = G__28434;
chunk__28421_28430 = G__28435;
count__28422_28431 = G__28436;
i__28423_28432 = G__28437;
continue;
} else {
var temp__5804__auto___28438 = cljs.core.seq(seq__28420_28429);
if(temp__5804__auto___28438){
var seq__28420_28439__$1 = temp__5804__auto___28438;
if(cljs.core.chunked_seq_QMARK_(seq__28420_28439__$1)){
var c__4556__auto___28440 = cljs.core.chunk_first(seq__28420_28439__$1);
var G__28441 = cljs.core.chunk_rest(seq__28420_28439__$1);
var G__28442 = c__4556__auto___28440;
var G__28443 = cljs.core.count(c__4556__auto___28440);
var G__28444 = (0);
seq__28420_28429 = G__28441;
chunk__28421_28430 = G__28442;
count__28422_28431 = G__28443;
i__28423_28432 = G__28444;
continue;
} else {
var tag_28445 = cljs.core.first(seq__28420_28439__$1);
if(cljs.core.truth_(tag_28445)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28445));
} else {
}


var G__28446 = cljs.core.next(seq__28420_28439__$1);
var G__28447 = null;
var G__28448 = (0);
var G__28449 = (0);
seq__28420_28429 = G__28446;
chunk__28421_28430 = G__28447;
count__28422_28431 = G__28448;
i__28423_28432 = G__28449;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28417_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28417_SHARP_,dbg);
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
var temp__5804__auto___28450 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28450)){
var list_id_28451 = temp__5804__auto___28450;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28451));
} else {
}
} else {
}

var seq__28424_28452 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28425_28453 = null;
var count__28426_28454 = (0);
var i__28427_28455 = (0);
while(true){
if((i__28427_28455 < count__28426_28454)){
var attr_key_28456 = chunk__28425_28453.cljs$core$IIndexed$_nth$arity$2(null,i__28427_28455);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28456),"-")){
var temp__5804__auto___28457 = tiltontec.model.core.mget(me,attr_key_28456);
if(cljs.core.truth_(temp__5804__auto___28457)){
var attr_val_28458 = temp__5804__auto___28457;
dom.setAttribute(cljs.core.name(attr_key_28456),tiltontec.web_mx.base.attr_val$(attr_val_28458));
} else {
}
} else {
}


var G__28459 = seq__28424_28452;
var G__28460 = chunk__28425_28453;
var G__28461 = count__28426_28454;
var G__28462 = (i__28427_28455 + (1));
seq__28424_28452 = G__28459;
chunk__28425_28453 = G__28460;
count__28426_28454 = G__28461;
i__28427_28455 = G__28462;
continue;
} else {
var temp__5804__auto___28463 = cljs.core.seq(seq__28424_28452);
if(temp__5804__auto___28463){
var seq__28424_28464__$1 = temp__5804__auto___28463;
if(cljs.core.chunked_seq_QMARK_(seq__28424_28464__$1)){
var c__4556__auto___28465 = cljs.core.chunk_first(seq__28424_28464__$1);
var G__28466 = cljs.core.chunk_rest(seq__28424_28464__$1);
var G__28467 = c__4556__auto___28465;
var G__28468 = cljs.core.count(c__4556__auto___28465);
var G__28469 = (0);
seq__28424_28452 = G__28466;
chunk__28425_28453 = G__28467;
count__28426_28454 = G__28468;
i__28427_28455 = G__28469;
continue;
} else {
var attr_key_28470 = cljs.core.first(seq__28424_28464__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28470),"-")){
var temp__5804__auto___28471__$1 = tiltontec.model.core.mget(me,attr_key_28470);
if(cljs.core.truth_(temp__5804__auto___28471__$1)){
var attr_val_28472 = temp__5804__auto___28471__$1;
dom.setAttribute(cljs.core.name(attr_key_28470),tiltontec.web_mx.base.attr_val$(attr_val_28472));
} else {
}
} else {
}


var G__28473 = cljs.core.next(seq__28424_28464__$1);
var G__28474 = null;
var G__28475 = (0);
var G__28476 = (0);
seq__28424_28452 = G__28473;
chunk__28425_28453 = G__28474;
count__28426_28454 = G__28475;
i__28427_28455 = G__28476;
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
var seq__28477_28497 = cljs.core.seq(newv);
var chunk__28478_28498 = null;
var count__28479_28499 = (0);
var i__28480_28500 = (0);
while(true){
if((i__28480_28500 < count__28479_28499)){
var newk_28501 = chunk__28478_28498.cljs$core$IIndexed$_nth$arity$2(null,i__28480_28500);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28501)));


var G__28502 = seq__28477_28497;
var G__28503 = chunk__28478_28498;
var G__28504 = count__28479_28499;
var G__28505 = (i__28480_28500 + (1));
seq__28477_28497 = G__28502;
chunk__28478_28498 = G__28503;
count__28479_28499 = G__28504;
i__28480_28500 = G__28505;
continue;
} else {
var temp__5804__auto___28506 = cljs.core.seq(seq__28477_28497);
if(temp__5804__auto___28506){
var seq__28477_28507__$1 = temp__5804__auto___28506;
if(cljs.core.chunked_seq_QMARK_(seq__28477_28507__$1)){
var c__4556__auto___28508 = cljs.core.chunk_first(seq__28477_28507__$1);
var G__28509 = cljs.core.chunk_rest(seq__28477_28507__$1);
var G__28510 = c__4556__auto___28508;
var G__28511 = cljs.core.count(c__4556__auto___28508);
var G__28512 = (0);
seq__28477_28497 = G__28509;
chunk__28478_28498 = G__28510;
count__28479_28499 = G__28511;
i__28480_28500 = G__28512;
continue;
} else {
var newk_28513 = cljs.core.first(seq__28477_28507__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28513)));


var G__28514 = cljs.core.next(seq__28477_28507__$1);
var G__28515 = null;
var G__28516 = (0);
var G__28517 = (0);
seq__28477_28497 = G__28514;
chunk__28478_28498 = G__28515;
count__28479_28499 = G__28516;
i__28480_28500 = G__28517;
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
var seq__28481 = cljs.core.seq(lost);
var chunk__28482 = null;
var count__28483 = (0);
var i__28484 = (0);
while(true){
if((i__28484 < count__28483)){
var oldk = chunk__28482.cljs$core$IIndexed$_nth$arity$2(null,i__28484);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28487){if((e28487 instanceof Error)){
var e_28518 = e28487;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28518], 0));

} else {
throw e28487;

}
}}


var G__28519 = seq__28481;
var G__28520 = chunk__28482;
var G__28521 = count__28483;
var G__28522 = (i__28484 + (1));
seq__28481 = G__28519;
chunk__28482 = G__28520;
count__28483 = G__28521;
i__28484 = G__28522;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28481);
if(temp__5804__auto__){
var seq__28481__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28481__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28481__$1);
var G__28523 = cljs.core.chunk_rest(seq__28481__$1);
var G__28524 = c__4556__auto__;
var G__28525 = cljs.core.count(c__4556__auto__);
var G__28526 = (0);
seq__28481 = G__28523;
chunk__28482 = G__28524;
count__28483 = G__28525;
i__28484 = G__28526;
continue;
} else {
var oldk = cljs.core.first(seq__28481__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28488){if((e28488 instanceof Error)){
var e_28527 = e28488;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28527], 0));

} else {
throw e28488;

}
}}


var G__28528 = cljs.core.next(seq__28481__$1);
var G__28529 = null;
var G__28530 = (0);
var G__28531 = (0);
seq__28481 = G__28528;
chunk__28482 = G__28529;
count__28483 = G__28530;
i__28484 = G__28531;
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
var seq__28489_28532 = cljs.core.seq(lost);
var chunk__28490_28533 = null;
var count__28491_28534 = (0);
var i__28492_28535 = (0);
while(true){
if((i__28492_28535 < count__28491_28534)){
var oldk_28536 = chunk__28490_28533.cljs$core$IIndexed$_nth$arity$2(null,i__28492_28535);
if(typeof oldk_28536 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28536) : tiltontec.cell.evaluate.finalize.call(null,oldk_28536));
}


var G__28537 = seq__28489_28532;
var G__28538 = chunk__28490_28533;
var G__28539 = count__28491_28534;
var G__28540 = (i__28492_28535 + (1));
seq__28489_28532 = G__28537;
chunk__28490_28533 = G__28538;
count__28491_28534 = G__28539;
i__28492_28535 = G__28540;
continue;
} else {
var temp__5804__auto___28541 = cljs.core.seq(seq__28489_28532);
if(temp__5804__auto___28541){
var seq__28489_28542__$1 = temp__5804__auto___28541;
if(cljs.core.chunked_seq_QMARK_(seq__28489_28542__$1)){
var c__4556__auto___28543 = cljs.core.chunk_first(seq__28489_28542__$1);
var G__28544 = cljs.core.chunk_rest(seq__28489_28542__$1);
var G__28545 = c__4556__auto___28543;
var G__28546 = cljs.core.count(c__4556__auto___28543);
var G__28547 = (0);
seq__28489_28532 = G__28544;
chunk__28490_28533 = G__28545;
count__28491_28534 = G__28546;
i__28492_28535 = G__28547;
continue;
} else {
var oldk_28548 = cljs.core.first(seq__28489_28542__$1);
if(typeof oldk_28548 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28548) : tiltontec.cell.evaluate.finalize.call(null,oldk_28548));
}


var G__28549 = cljs.core.next(seq__28489_28542__$1);
var G__28550 = null;
var G__28551 = (0);
var G__28552 = (0);
seq__28489_28532 = G__28549;
chunk__28490_28533 = G__28550;
count__28491_28534 = G__28551;
i__28492_28535 = G__28552;
continue;
}
} else {
}
}
break;
}

var seq__28493_28553 = cljs.core.seq(newv);
var chunk__28494_28554 = null;
var count__28495_28555 = (0);
var i__28496_28556 = (0);
while(true){
if((i__28496_28556 < count__28495_28555)){
var newk_28557 = chunk__28494_28554.cljs$core$IIndexed$_nth$arity$2(null,i__28496_28556);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28557]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28557)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28557)));


var G__28558 = seq__28493_28553;
var G__28559 = chunk__28494_28554;
var G__28560 = count__28495_28555;
var G__28561 = (i__28496_28556 + (1));
seq__28493_28553 = G__28558;
chunk__28494_28554 = G__28559;
count__28495_28555 = G__28560;
i__28496_28556 = G__28561;
continue;
} else {
var temp__5804__auto___28562 = cljs.core.seq(seq__28493_28553);
if(temp__5804__auto___28562){
var seq__28493_28563__$1 = temp__5804__auto___28562;
if(cljs.core.chunked_seq_QMARK_(seq__28493_28563__$1)){
var c__4556__auto___28564 = cljs.core.chunk_first(seq__28493_28563__$1);
var G__28565 = cljs.core.chunk_rest(seq__28493_28563__$1);
var G__28566 = c__4556__auto___28564;
var G__28567 = cljs.core.count(c__4556__auto___28564);
var G__28568 = (0);
seq__28493_28553 = G__28565;
chunk__28494_28554 = G__28566;
count__28495_28555 = G__28567;
i__28496_28556 = G__28568;
continue;
} else {
var newk_28569 = cljs.core.first(seq__28493_28563__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28569]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28569)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28569)));


var G__28570 = cljs.core.next(seq__28493_28563__$1);
var G__28571 = null;
var G__28572 = (0);
var G__28573 = (0);
seq__28493_28553 = G__28570;
chunk__28494_28554 = G__28571;
count__28495_28555 = G__28572;
i__28496_28556 = G__28573;
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
var seq__28574_28594 = cljs.core.seq(newv);
var chunk__28575_28595 = null;
var count__28576_28596 = (0);
var i__28577_28597 = (0);
while(true){
if((i__28577_28597 < count__28576_28596)){
var newk_28598 = chunk__28575_28595.cljs$core$IIndexed$_nth$arity$2(null,i__28577_28597);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28598)));


var G__28599 = seq__28574_28594;
var G__28600 = chunk__28575_28595;
var G__28601 = count__28576_28596;
var G__28602 = (i__28577_28597 + (1));
seq__28574_28594 = G__28599;
chunk__28575_28595 = G__28600;
count__28576_28596 = G__28601;
i__28577_28597 = G__28602;
continue;
} else {
var temp__5804__auto___28603 = cljs.core.seq(seq__28574_28594);
if(temp__5804__auto___28603){
var seq__28574_28604__$1 = temp__5804__auto___28603;
if(cljs.core.chunked_seq_QMARK_(seq__28574_28604__$1)){
var c__4556__auto___28605 = cljs.core.chunk_first(seq__28574_28604__$1);
var G__28606 = cljs.core.chunk_rest(seq__28574_28604__$1);
var G__28607 = c__4556__auto___28605;
var G__28608 = cljs.core.count(c__4556__auto___28605);
var G__28609 = (0);
seq__28574_28594 = G__28606;
chunk__28575_28595 = G__28607;
count__28576_28596 = G__28608;
i__28577_28597 = G__28609;
continue;
} else {
var newk_28610 = cljs.core.first(seq__28574_28604__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28610)));


var G__28611 = cljs.core.next(seq__28574_28604__$1);
var G__28612 = null;
var G__28613 = (0);
var G__28614 = (0);
seq__28574_28594 = G__28611;
chunk__28575_28595 = G__28612;
count__28576_28596 = G__28613;
i__28577_28597 = G__28614;
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
var seq__28578 = cljs.core.seq(lost);
var chunk__28579 = null;
var count__28580 = (0);
var i__28581 = (0);
while(true){
if((i__28581 < count__28580)){
var oldk = chunk__28579.cljs$core$IIndexed$_nth$arity$2(null,i__28581);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28615 = seq__28578;
var G__28616 = chunk__28579;
var G__28617 = count__28580;
var G__28618 = (i__28581 + (1));
seq__28578 = G__28615;
chunk__28579 = G__28616;
count__28580 = G__28617;
i__28581 = G__28618;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28578);
if(temp__5804__auto__){
var seq__28578__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28578__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28578__$1);
var G__28619 = cljs.core.chunk_rest(seq__28578__$1);
var G__28620 = c__4556__auto__;
var G__28621 = cljs.core.count(c__4556__auto__);
var G__28622 = (0);
seq__28578 = G__28619;
chunk__28579 = G__28620;
count__28580 = G__28621;
i__28581 = G__28622;
continue;
} else {
var oldk = cljs.core.first(seq__28578__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28623 = cljs.core.next(seq__28578__$1);
var G__28624 = null;
var G__28625 = (0);
var G__28626 = (0);
seq__28578 = G__28623;
chunk__28579 = G__28624;
count__28580 = G__28625;
i__28581 = G__28626;
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
var seq__28582 = cljs.core.seq(gained);
var chunk__28583 = null;
var count__28584 = (0);
var i__28585 = (0);
while(true){
if((i__28585 < count__28584)){
var newk = chunk__28583.cljs$core$IIndexed$_nth$arity$2(null,i__28585);
var new_dom_28627 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28627);


var G__28628 = seq__28582;
var G__28629 = chunk__28583;
var G__28630 = count__28584;
var G__28631 = (i__28585 + (1));
seq__28582 = G__28628;
chunk__28583 = G__28629;
count__28584 = G__28630;
i__28585 = G__28631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28582);
if(temp__5804__auto__){
var seq__28582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28582__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28582__$1);
var G__28632 = cljs.core.chunk_rest(seq__28582__$1);
var G__28633 = c__4556__auto__;
var G__28634 = cljs.core.count(c__4556__auto__);
var G__28635 = (0);
seq__28582 = G__28632;
chunk__28583 = G__28633;
count__28584 = G__28634;
i__28585 = G__28635;
continue;
} else {
var newk = cljs.core.first(seq__28582__$1);
var new_dom_28636 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28636);


var G__28637 = cljs.core.next(seq__28582__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28582 = G__28637;
chunk__28583 = G__28638;
count__28584 = G__28639;
i__28585 = G__28640;
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
var seq__28586_28641 = cljs.core.seq(lost);
var chunk__28587_28642 = null;
var count__28588_28643 = (0);
var i__28589_28644 = (0);
while(true){
if((i__28589_28644 < count__28588_28643)){
var oldk_28645 = chunk__28587_28642.cljs$core$IIndexed$_nth$arity$2(null,i__28589_28644);
if(typeof oldk_28645 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28645) : tiltontec.cell.evaluate.finalize.call(null,oldk_28645));
}


var G__28646 = seq__28586_28641;
var G__28647 = chunk__28587_28642;
var G__28648 = count__28588_28643;
var G__28649 = (i__28589_28644 + (1));
seq__28586_28641 = G__28646;
chunk__28587_28642 = G__28647;
count__28588_28643 = G__28648;
i__28589_28644 = G__28649;
continue;
} else {
var temp__5804__auto___28650 = cljs.core.seq(seq__28586_28641);
if(temp__5804__auto___28650){
var seq__28586_28651__$1 = temp__5804__auto___28650;
if(cljs.core.chunked_seq_QMARK_(seq__28586_28651__$1)){
var c__4556__auto___28652 = cljs.core.chunk_first(seq__28586_28651__$1);
var G__28653 = cljs.core.chunk_rest(seq__28586_28651__$1);
var G__28654 = c__4556__auto___28652;
var G__28655 = cljs.core.count(c__4556__auto___28652);
var G__28656 = (0);
seq__28586_28641 = G__28653;
chunk__28587_28642 = G__28654;
count__28588_28643 = G__28655;
i__28589_28644 = G__28656;
continue;
} else {
var oldk_28657 = cljs.core.first(seq__28586_28651__$1);
if(typeof oldk_28657 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28657) : tiltontec.cell.evaluate.finalize.call(null,oldk_28657));
}


var G__28658 = cljs.core.next(seq__28586_28651__$1);
var G__28659 = null;
var G__28660 = (0);
var G__28661 = (0);
seq__28586_28641 = G__28658;
chunk__28587_28642 = G__28659;
count__28588_28643 = G__28660;
i__28589_28644 = G__28661;
continue;
}
} else {
}
}
break;
}

var seq__28590_28662 = cljs.core.seq(newv);
var chunk__28591_28663 = null;
var count__28592_28664 = (0);
var i__28593_28665 = (0);
while(true){
if((i__28593_28665 < count__28592_28664)){
var newk_28666 = chunk__28591_28663.cljs$core$IIndexed$_nth$arity$2(null,i__28593_28665);
var new_dom_28667 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28666]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28666)):tiltontec.web_mx.html.svg_dom_create(newk_28666,false));
goog.dom.appendChild(frag,new_dom_28667);


var G__28668 = seq__28590_28662;
var G__28669 = chunk__28591_28663;
var G__28670 = count__28592_28664;
var G__28671 = (i__28593_28665 + (1));
seq__28590_28662 = G__28668;
chunk__28591_28663 = G__28669;
count__28592_28664 = G__28670;
i__28593_28665 = G__28671;
continue;
} else {
var temp__5804__auto___28672 = cljs.core.seq(seq__28590_28662);
if(temp__5804__auto___28672){
var seq__28590_28673__$1 = temp__5804__auto___28672;
if(cljs.core.chunked_seq_QMARK_(seq__28590_28673__$1)){
var c__4556__auto___28674 = cljs.core.chunk_first(seq__28590_28673__$1);
var G__28675 = cljs.core.chunk_rest(seq__28590_28673__$1);
var G__28676 = c__4556__auto___28674;
var G__28677 = cljs.core.count(c__4556__auto___28674);
var G__28678 = (0);
seq__28590_28662 = G__28675;
chunk__28591_28663 = G__28676;
count__28592_28664 = G__28677;
i__28593_28665 = G__28678;
continue;
} else {
var newk_28679 = cljs.core.first(seq__28590_28673__$1);
var new_dom_28680 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28679]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28679)):tiltontec.web_mx.html.svg_dom_create(newk_28679,false));
goog.dom.appendChild(frag,new_dom_28680);


var G__28681 = cljs.core.next(seq__28590_28673__$1);
var G__28682 = null;
var G__28683 = (0);
var G__28684 = (0);
seq__28590_28662 = G__28681;
chunk__28591_28663 = G__28682;
count__28592_28664 = G__28683;
i__28593_28665 = G__28684;
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
var G__28685 = slot;
var G__28685__$1 = (((G__28685 instanceof cljs.core.Keyword))?G__28685.fqn:null);
switch (G__28685__$1) {
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
var G__28686 = dom;
var G__28687 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28686,G__28687);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28689_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28689_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28690_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28691_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28691_SHARP_,cljs.core.cst$kw$id));
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
var G__28692 = cljs.core.rest(keys);
var G__28693 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28692;
found = G__28693;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28694 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28695 = null;
var count__28696 = (0);
var i__28697 = (0);
while(true){
if((i__28697 < count__28696)){
var key = chunk__28695.cljs$core$IIndexed$_nth$arity$2(null,i__28697);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28698 = seq__28694;
var G__28699 = chunk__28695;
var G__28700 = count__28696;
var G__28701 = (i__28697 + (1));
seq__28694 = G__28698;
chunk__28695 = G__28699;
count__28696 = G__28700;
i__28697 = G__28701;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28694);
if(temp__5804__auto__){
var seq__28694__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28694__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28694__$1);
var G__28702 = cljs.core.chunk_rest(seq__28694__$1);
var G__28703 = c__4556__auto__;
var G__28704 = cljs.core.count(c__4556__auto__);
var G__28705 = (0);
seq__28694 = G__28702;
chunk__28695 = G__28703;
count__28696 = G__28704;
i__28697 = G__28705;
continue;
} else {
var key = cljs.core.first(seq__28694__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28706 = cljs.core.next(seq__28694__$1);
var G__28707 = null;
var G__28708 = (0);
var G__28709 = (0);
seq__28694 = G__28706;
chunk__28695 = G__28707;
count__28696 = G__28708;
i__28697 = G__28709;
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

var G__28710 = dom;
var G__28711 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28710,G__28711);
});
