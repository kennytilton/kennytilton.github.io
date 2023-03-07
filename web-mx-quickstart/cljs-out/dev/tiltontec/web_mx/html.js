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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28346(s__28347){
return (new cljs.core.LazySeq(null,(function (){
var s__28347__$1 = s__28347;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28347__$1);
if(temp__5804__auto__){
var s__28347__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28347__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28347__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28349 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28348 = (0);
while(true){
if((i__28348 < size__4528__auto__)){
var vec__28350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28349,k);

var G__28356 = (i__28348 + (1));
i__28348 = G__28356;
continue;
} else {
var G__28357 = (i__28348 + (1));
i__28348 = G__28357;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28349),tiltontec$web_mx$html$map_less_nils_$_iter__28346(cljs.core.chunk_rest(s__28347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28349),null);
}
} else {
var vec__28353 = cljs.core.first(s__28347__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28353,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28346(cljs.core.rest(s__28347__$2)));
} else {
var G__28358 = cljs.core.rest(s__28347__$2);
s__28347__$1 = G__28358;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28359(s__28360){
return (new cljs.core.LazySeq(null,(function (){
var s__28360__$1 = s__28360;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28360__$1);
if(temp__5804__auto__){
var s__28360__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28360__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28360__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28362 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28361 = (0);
while(true){
if((i__28361 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28361);
cljs.core.chunk_append(b__28362,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28363 = k;
var G__28363__$1 = (((G__28363 instanceof cljs.core.Keyword))?G__28363.fqn:null);
switch (G__28363__$1) {
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

var G__28366 = (i__28361 + (1));
i__28361 = G__28366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28362),tiltontec$web_mx$html$tag_properties_$_iter__28359(cljs.core.chunk_rest(s__28360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28362),null);
}
} else {
var k = cljs.core.first(s__28360__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28364 = k;
var G__28364__$1 = (((G__28364 instanceof cljs.core.Keyword))?G__28364.fqn:null);
switch (G__28364__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28359(cljs.core.rest(s__28360__$2)));
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

var seq__28368_28382 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28370_28383 = null;
var count__28371_28384 = (0);
var i__28372_28385 = (0);
while(true){
if((i__28372_28385 < count__28371_28384)){
var ak_28386 = chunk__28370_28383.cljs$core$IIndexed$_nth$arity$2(null,i__28372_28385);
var ak$_28387 = cljs.core.name(ak_28386);
var av_28388 = (function (){var G__28376 = cljs.core.deref(me);
return (ak_28386.cljs$core$IFn$_invoke$arity$1 ? ak_28386.cljs$core$IFn$_invoke$arity$1(G__28376) : ak_28386.call(null,G__28376));
})();
if(cljs.core.fn_QMARK_(av_28388)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28387,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28387,(2)):ak$_28387),av_28388);
} else {
svg.setAttributeNS(null,ak$_28387,tiltontec.web_mx.base.attr_val$(av_28388));
}


var G__28389 = seq__28368_28382;
var G__28390 = chunk__28370_28383;
var G__28391 = count__28371_28384;
var G__28392 = (i__28372_28385 + (1));
seq__28368_28382 = G__28389;
chunk__28370_28383 = G__28390;
count__28371_28384 = G__28391;
i__28372_28385 = G__28392;
continue;
} else {
var temp__5804__auto___28393 = cljs.core.seq(seq__28368_28382);
if(temp__5804__auto___28393){
var seq__28368_28394__$1 = temp__5804__auto___28393;
if(cljs.core.chunked_seq_QMARK_(seq__28368_28394__$1)){
var c__4556__auto___28395 = cljs.core.chunk_first(seq__28368_28394__$1);
var G__28396 = cljs.core.chunk_rest(seq__28368_28394__$1);
var G__28397 = c__4556__auto___28395;
var G__28398 = cljs.core.count(c__4556__auto___28395);
var G__28399 = (0);
seq__28368_28382 = G__28396;
chunk__28370_28383 = G__28397;
count__28371_28384 = G__28398;
i__28372_28385 = G__28399;
continue;
} else {
var ak_28400 = cljs.core.first(seq__28368_28394__$1);
var ak$_28401 = cljs.core.name(ak_28400);
var av_28402 = (function (){var G__28377 = cljs.core.deref(me);
return (ak_28400.cljs$core$IFn$_invoke$arity$1 ? ak_28400.cljs$core$IFn$_invoke$arity$1(G__28377) : ak_28400.call(null,G__28377));
})();
if(cljs.core.fn_QMARK_(av_28402)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28401,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28401,(2)):ak$_28401),av_28402);
} else {
svg.setAttributeNS(null,ak$_28401,tiltontec.web_mx.base.attr_val$(av_28402));
}


var G__28403 = cljs.core.next(seq__28368_28394__$1);
var G__28404 = null;
var G__28405 = (0);
var G__28406 = (0);
seq__28368_28382 = G__28403;
chunk__28370_28383 = G__28404;
count__28371_28384 = G__28405;
i__28372_28385 = G__28406;
continue;
}
} else {
}
}
break;
}

var seq__28378_28407 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28379_28408 = null;
var count__28380_28409 = (0);
var i__28381_28410 = (0);
while(true){
if((i__28381_28410 < count__28380_28409)){
var kid_28411 = chunk__28379_28408.cljs$core$IIndexed$_nth$arity$2(null,i__28381_28410);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28411,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28411,dbg)));


var G__28412 = seq__28378_28407;
var G__28413 = chunk__28379_28408;
var G__28414 = count__28380_28409;
var G__28415 = (i__28381_28410 + (1));
seq__28378_28407 = G__28412;
chunk__28379_28408 = G__28413;
count__28380_28409 = G__28414;
i__28381_28410 = G__28415;
continue;
} else {
var temp__5804__auto___28416 = cljs.core.seq(seq__28378_28407);
if(temp__5804__auto___28416){
var seq__28378_28417__$1 = temp__5804__auto___28416;
if(cljs.core.chunked_seq_QMARK_(seq__28378_28417__$1)){
var c__4556__auto___28418 = cljs.core.chunk_first(seq__28378_28417__$1);
var G__28419 = cljs.core.chunk_rest(seq__28378_28417__$1);
var G__28420 = c__4556__auto___28418;
var G__28421 = cljs.core.count(c__4556__auto___28418);
var G__28422 = (0);
seq__28378_28407 = G__28419;
chunk__28379_28408 = G__28420;
count__28380_28409 = G__28421;
i__28381_28410 = G__28422;
continue;
} else {
var kid_28423 = cljs.core.first(seq__28378_28417__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28423,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28423,dbg)));


var G__28424 = cljs.core.next(seq__28378_28417__$1);
var G__28425 = null;
var G__28426 = (0);
var G__28427 = (0);
seq__28378_28407 = G__28424;
chunk__28379_28408 = G__28425;
count__28380_28409 = G__28426;
i__28381_28410 = G__28427;
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
var G__28430 = arguments.length;
switch (G__28430) {
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
var seq__28431_28440 = cljs.core.seq(me);
var chunk__28432_28441 = null;
var count__28433_28442 = (0);
var i__28434_28443 = (0);
while(true){
if((i__28434_28443 < count__28433_28442)){
var tag_28444 = chunk__28432_28441.cljs$core$IIndexed$_nth$arity$2(null,i__28434_28443);
if(cljs.core.truth_(tag_28444)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28444));
} else {
}


var G__28445 = seq__28431_28440;
var G__28446 = chunk__28432_28441;
var G__28447 = count__28433_28442;
var G__28448 = (i__28434_28443 + (1));
seq__28431_28440 = G__28445;
chunk__28432_28441 = G__28446;
count__28433_28442 = G__28447;
i__28434_28443 = G__28448;
continue;
} else {
var temp__5804__auto___28449 = cljs.core.seq(seq__28431_28440);
if(temp__5804__auto___28449){
var seq__28431_28450__$1 = temp__5804__auto___28449;
if(cljs.core.chunked_seq_QMARK_(seq__28431_28450__$1)){
var c__4556__auto___28451 = cljs.core.chunk_first(seq__28431_28450__$1);
var G__28452 = cljs.core.chunk_rest(seq__28431_28450__$1);
var G__28453 = c__4556__auto___28451;
var G__28454 = cljs.core.count(c__4556__auto___28451);
var G__28455 = (0);
seq__28431_28440 = G__28452;
chunk__28432_28441 = G__28453;
count__28433_28442 = G__28454;
i__28434_28443 = G__28455;
continue;
} else {
var tag_28456 = cljs.core.first(seq__28431_28450__$1);
if(cljs.core.truth_(tag_28456)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28456));
} else {
}


var G__28457 = cljs.core.next(seq__28431_28450__$1);
var G__28458 = null;
var G__28459 = (0);
var G__28460 = (0);
seq__28431_28440 = G__28457;
chunk__28432_28441 = G__28458;
count__28433_28442 = G__28459;
i__28434_28443 = G__28460;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28428_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28428_SHARP_,dbg);
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
var temp__5804__auto___28461 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28461)){
var list_id_28462 = temp__5804__auto___28461;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28462));
} else {
}
} else {
}

var seq__28435_28463 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28436_28464 = null;
var count__28437_28465 = (0);
var i__28438_28466 = (0);
while(true){
if((i__28438_28466 < count__28437_28465)){
var attr_key_28467 = chunk__28436_28464.cljs$core$IIndexed$_nth$arity$2(null,i__28438_28466);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28467),"-")){
var temp__5804__auto___28468 = tiltontec.model.core.mget(me,attr_key_28467);
if(cljs.core.truth_(temp__5804__auto___28468)){
var attr_val_28469 = temp__5804__auto___28468;
dom.setAttribute(cljs.core.name(attr_key_28467),tiltontec.web_mx.base.attr_val$(attr_val_28469));
} else {
}
} else {
}


var G__28470 = seq__28435_28463;
var G__28471 = chunk__28436_28464;
var G__28472 = count__28437_28465;
var G__28473 = (i__28438_28466 + (1));
seq__28435_28463 = G__28470;
chunk__28436_28464 = G__28471;
count__28437_28465 = G__28472;
i__28438_28466 = G__28473;
continue;
} else {
var temp__5804__auto___28474 = cljs.core.seq(seq__28435_28463);
if(temp__5804__auto___28474){
var seq__28435_28475__$1 = temp__5804__auto___28474;
if(cljs.core.chunked_seq_QMARK_(seq__28435_28475__$1)){
var c__4556__auto___28476 = cljs.core.chunk_first(seq__28435_28475__$1);
var G__28477 = cljs.core.chunk_rest(seq__28435_28475__$1);
var G__28478 = c__4556__auto___28476;
var G__28479 = cljs.core.count(c__4556__auto___28476);
var G__28480 = (0);
seq__28435_28463 = G__28477;
chunk__28436_28464 = G__28478;
count__28437_28465 = G__28479;
i__28438_28466 = G__28480;
continue;
} else {
var attr_key_28481 = cljs.core.first(seq__28435_28475__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28481),"-")){
var temp__5804__auto___28482__$1 = tiltontec.model.core.mget(me,attr_key_28481);
if(cljs.core.truth_(temp__5804__auto___28482__$1)){
var attr_val_28483 = temp__5804__auto___28482__$1;
dom.setAttribute(cljs.core.name(attr_key_28481),tiltontec.web_mx.base.attr_val$(attr_val_28483));
} else {
}
} else {
}


var G__28484 = cljs.core.next(seq__28435_28475__$1);
var G__28485 = null;
var G__28486 = (0);
var G__28487 = (0);
seq__28435_28463 = G__28484;
chunk__28436_28464 = G__28485;
count__28437_28465 = G__28486;
i__28438_28466 = G__28487;
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
var seq__28488_28508 = cljs.core.seq(newv);
var chunk__28489_28509 = null;
var count__28490_28510 = (0);
var i__28491_28511 = (0);
while(true){
if((i__28491_28511 < count__28490_28510)){
var newk_28512 = chunk__28489_28509.cljs$core$IIndexed$_nth$arity$2(null,i__28491_28511);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28512)));


var G__28513 = seq__28488_28508;
var G__28514 = chunk__28489_28509;
var G__28515 = count__28490_28510;
var G__28516 = (i__28491_28511 + (1));
seq__28488_28508 = G__28513;
chunk__28489_28509 = G__28514;
count__28490_28510 = G__28515;
i__28491_28511 = G__28516;
continue;
} else {
var temp__5804__auto___28517 = cljs.core.seq(seq__28488_28508);
if(temp__5804__auto___28517){
var seq__28488_28518__$1 = temp__5804__auto___28517;
if(cljs.core.chunked_seq_QMARK_(seq__28488_28518__$1)){
var c__4556__auto___28519 = cljs.core.chunk_first(seq__28488_28518__$1);
var G__28520 = cljs.core.chunk_rest(seq__28488_28518__$1);
var G__28521 = c__4556__auto___28519;
var G__28522 = cljs.core.count(c__4556__auto___28519);
var G__28523 = (0);
seq__28488_28508 = G__28520;
chunk__28489_28509 = G__28521;
count__28490_28510 = G__28522;
i__28491_28511 = G__28523;
continue;
} else {
var newk_28524 = cljs.core.first(seq__28488_28518__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28524)));


var G__28525 = cljs.core.next(seq__28488_28518__$1);
var G__28526 = null;
var G__28527 = (0);
var G__28528 = (0);
seq__28488_28508 = G__28525;
chunk__28489_28509 = G__28526;
count__28490_28510 = G__28527;
i__28491_28511 = G__28528;
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
var seq__28492 = cljs.core.seq(lost);
var chunk__28493 = null;
var count__28494 = (0);
var i__28495 = (0);
while(true){
if((i__28495 < count__28494)){
var oldk = chunk__28493.cljs$core$IIndexed$_nth$arity$2(null,i__28495);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28498){if((e28498 instanceof Error)){
var e_28529 = e28498;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28529], 0));

} else {
throw e28498;

}
}}


var G__28530 = seq__28492;
var G__28531 = chunk__28493;
var G__28532 = count__28494;
var G__28533 = (i__28495 + (1));
seq__28492 = G__28530;
chunk__28493 = G__28531;
count__28494 = G__28532;
i__28495 = G__28533;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28492);
if(temp__5804__auto__){
var seq__28492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28492__$1);
var G__28534 = cljs.core.chunk_rest(seq__28492__$1);
var G__28535 = c__4556__auto__;
var G__28536 = cljs.core.count(c__4556__auto__);
var G__28537 = (0);
seq__28492 = G__28534;
chunk__28493 = G__28535;
count__28494 = G__28536;
i__28495 = G__28537;
continue;
} else {
var oldk = cljs.core.first(seq__28492__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28499){if((e28499 instanceof Error)){
var e_28538 = e28499;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28538], 0));

} else {
throw e28499;

}
}}


var G__28539 = cljs.core.next(seq__28492__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28492 = G__28539;
chunk__28493 = G__28540;
count__28494 = G__28541;
i__28495 = G__28542;
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
var seq__28500_28543 = cljs.core.seq(lost);
var chunk__28501_28544 = null;
var count__28502_28545 = (0);
var i__28503_28546 = (0);
while(true){
if((i__28503_28546 < count__28502_28545)){
var oldk_28547 = chunk__28501_28544.cljs$core$IIndexed$_nth$arity$2(null,i__28503_28546);
if(typeof oldk_28547 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28547) : tiltontec.cell.evaluate.finalize.call(null,oldk_28547));
}


var G__28548 = seq__28500_28543;
var G__28549 = chunk__28501_28544;
var G__28550 = count__28502_28545;
var G__28551 = (i__28503_28546 + (1));
seq__28500_28543 = G__28548;
chunk__28501_28544 = G__28549;
count__28502_28545 = G__28550;
i__28503_28546 = G__28551;
continue;
} else {
var temp__5804__auto___28552 = cljs.core.seq(seq__28500_28543);
if(temp__5804__auto___28552){
var seq__28500_28553__$1 = temp__5804__auto___28552;
if(cljs.core.chunked_seq_QMARK_(seq__28500_28553__$1)){
var c__4556__auto___28554 = cljs.core.chunk_first(seq__28500_28553__$1);
var G__28555 = cljs.core.chunk_rest(seq__28500_28553__$1);
var G__28556 = c__4556__auto___28554;
var G__28557 = cljs.core.count(c__4556__auto___28554);
var G__28558 = (0);
seq__28500_28543 = G__28555;
chunk__28501_28544 = G__28556;
count__28502_28545 = G__28557;
i__28503_28546 = G__28558;
continue;
} else {
var oldk_28559 = cljs.core.first(seq__28500_28553__$1);
if(typeof oldk_28559 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28559) : tiltontec.cell.evaluate.finalize.call(null,oldk_28559));
}


var G__28560 = cljs.core.next(seq__28500_28553__$1);
var G__28561 = null;
var G__28562 = (0);
var G__28563 = (0);
seq__28500_28543 = G__28560;
chunk__28501_28544 = G__28561;
count__28502_28545 = G__28562;
i__28503_28546 = G__28563;
continue;
}
} else {
}
}
break;
}

var seq__28504_28564 = cljs.core.seq(newv);
var chunk__28505_28565 = null;
var count__28506_28566 = (0);
var i__28507_28567 = (0);
while(true){
if((i__28507_28567 < count__28506_28566)){
var newk_28568 = chunk__28505_28565.cljs$core$IIndexed$_nth$arity$2(null,i__28507_28567);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28568]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28568)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28568)));


var G__28569 = seq__28504_28564;
var G__28570 = chunk__28505_28565;
var G__28571 = count__28506_28566;
var G__28572 = (i__28507_28567 + (1));
seq__28504_28564 = G__28569;
chunk__28505_28565 = G__28570;
count__28506_28566 = G__28571;
i__28507_28567 = G__28572;
continue;
} else {
var temp__5804__auto___28573 = cljs.core.seq(seq__28504_28564);
if(temp__5804__auto___28573){
var seq__28504_28574__$1 = temp__5804__auto___28573;
if(cljs.core.chunked_seq_QMARK_(seq__28504_28574__$1)){
var c__4556__auto___28575 = cljs.core.chunk_first(seq__28504_28574__$1);
var G__28576 = cljs.core.chunk_rest(seq__28504_28574__$1);
var G__28577 = c__4556__auto___28575;
var G__28578 = cljs.core.count(c__4556__auto___28575);
var G__28579 = (0);
seq__28504_28564 = G__28576;
chunk__28505_28565 = G__28577;
count__28506_28566 = G__28578;
i__28507_28567 = G__28579;
continue;
} else {
var newk_28580 = cljs.core.first(seq__28504_28574__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28580]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28580)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28580)));


var G__28581 = cljs.core.next(seq__28504_28574__$1);
var G__28582 = null;
var G__28583 = (0);
var G__28584 = (0);
seq__28504_28564 = G__28581;
chunk__28505_28565 = G__28582;
count__28506_28566 = G__28583;
i__28507_28567 = G__28584;
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
var seq__28585_28605 = cljs.core.seq(newv);
var chunk__28586_28606 = null;
var count__28587_28607 = (0);
var i__28588_28608 = (0);
while(true){
if((i__28588_28608 < count__28587_28607)){
var newk_28609 = chunk__28586_28606.cljs$core$IIndexed$_nth$arity$2(null,i__28588_28608);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28609)));


var G__28610 = seq__28585_28605;
var G__28611 = chunk__28586_28606;
var G__28612 = count__28587_28607;
var G__28613 = (i__28588_28608 + (1));
seq__28585_28605 = G__28610;
chunk__28586_28606 = G__28611;
count__28587_28607 = G__28612;
i__28588_28608 = G__28613;
continue;
} else {
var temp__5804__auto___28614 = cljs.core.seq(seq__28585_28605);
if(temp__5804__auto___28614){
var seq__28585_28615__$1 = temp__5804__auto___28614;
if(cljs.core.chunked_seq_QMARK_(seq__28585_28615__$1)){
var c__4556__auto___28616 = cljs.core.chunk_first(seq__28585_28615__$1);
var G__28617 = cljs.core.chunk_rest(seq__28585_28615__$1);
var G__28618 = c__4556__auto___28616;
var G__28619 = cljs.core.count(c__4556__auto___28616);
var G__28620 = (0);
seq__28585_28605 = G__28617;
chunk__28586_28606 = G__28618;
count__28587_28607 = G__28619;
i__28588_28608 = G__28620;
continue;
} else {
var newk_28621 = cljs.core.first(seq__28585_28615__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28621)));


var G__28622 = cljs.core.next(seq__28585_28615__$1);
var G__28623 = null;
var G__28624 = (0);
var G__28625 = (0);
seq__28585_28605 = G__28622;
chunk__28586_28606 = G__28623;
count__28587_28607 = G__28624;
i__28588_28608 = G__28625;
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
var seq__28589 = cljs.core.seq(lost);
var chunk__28590 = null;
var count__28591 = (0);
var i__28592 = (0);
while(true){
if((i__28592 < count__28591)){
var oldk = chunk__28590.cljs$core$IIndexed$_nth$arity$2(null,i__28592);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28626 = seq__28589;
var G__28627 = chunk__28590;
var G__28628 = count__28591;
var G__28629 = (i__28592 + (1));
seq__28589 = G__28626;
chunk__28590 = G__28627;
count__28591 = G__28628;
i__28592 = G__28629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28589);
if(temp__5804__auto__){
var seq__28589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28589__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28589__$1);
var G__28630 = cljs.core.chunk_rest(seq__28589__$1);
var G__28631 = c__4556__auto__;
var G__28632 = cljs.core.count(c__4556__auto__);
var G__28633 = (0);
seq__28589 = G__28630;
chunk__28590 = G__28631;
count__28591 = G__28632;
i__28592 = G__28633;
continue;
} else {
var oldk = cljs.core.first(seq__28589__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28634 = cljs.core.next(seq__28589__$1);
var G__28635 = null;
var G__28636 = (0);
var G__28637 = (0);
seq__28589 = G__28634;
chunk__28590 = G__28635;
count__28591 = G__28636;
i__28592 = G__28637;
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
var seq__28593 = cljs.core.seq(gained);
var chunk__28594 = null;
var count__28595 = (0);
var i__28596 = (0);
while(true){
if((i__28596 < count__28595)){
var newk = chunk__28594.cljs$core$IIndexed$_nth$arity$2(null,i__28596);
var new_dom_28638 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28638);


var G__28639 = seq__28593;
var G__28640 = chunk__28594;
var G__28641 = count__28595;
var G__28642 = (i__28596 + (1));
seq__28593 = G__28639;
chunk__28594 = G__28640;
count__28595 = G__28641;
i__28596 = G__28642;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28593);
if(temp__5804__auto__){
var seq__28593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28593__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28593__$1);
var G__28643 = cljs.core.chunk_rest(seq__28593__$1);
var G__28644 = c__4556__auto__;
var G__28645 = cljs.core.count(c__4556__auto__);
var G__28646 = (0);
seq__28593 = G__28643;
chunk__28594 = G__28644;
count__28595 = G__28645;
i__28596 = G__28646;
continue;
} else {
var newk = cljs.core.first(seq__28593__$1);
var new_dom_28647 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28647);


var G__28648 = cljs.core.next(seq__28593__$1);
var G__28649 = null;
var G__28650 = (0);
var G__28651 = (0);
seq__28593 = G__28648;
chunk__28594 = G__28649;
count__28595 = G__28650;
i__28596 = G__28651;
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
var seq__28597_28652 = cljs.core.seq(lost);
var chunk__28598_28653 = null;
var count__28599_28654 = (0);
var i__28600_28655 = (0);
while(true){
if((i__28600_28655 < count__28599_28654)){
var oldk_28656 = chunk__28598_28653.cljs$core$IIndexed$_nth$arity$2(null,i__28600_28655);
if(typeof oldk_28656 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28656) : tiltontec.cell.evaluate.finalize.call(null,oldk_28656));
}


var G__28657 = seq__28597_28652;
var G__28658 = chunk__28598_28653;
var G__28659 = count__28599_28654;
var G__28660 = (i__28600_28655 + (1));
seq__28597_28652 = G__28657;
chunk__28598_28653 = G__28658;
count__28599_28654 = G__28659;
i__28600_28655 = G__28660;
continue;
} else {
var temp__5804__auto___28661 = cljs.core.seq(seq__28597_28652);
if(temp__5804__auto___28661){
var seq__28597_28662__$1 = temp__5804__auto___28661;
if(cljs.core.chunked_seq_QMARK_(seq__28597_28662__$1)){
var c__4556__auto___28663 = cljs.core.chunk_first(seq__28597_28662__$1);
var G__28664 = cljs.core.chunk_rest(seq__28597_28662__$1);
var G__28665 = c__4556__auto___28663;
var G__28666 = cljs.core.count(c__4556__auto___28663);
var G__28667 = (0);
seq__28597_28652 = G__28664;
chunk__28598_28653 = G__28665;
count__28599_28654 = G__28666;
i__28600_28655 = G__28667;
continue;
} else {
var oldk_28668 = cljs.core.first(seq__28597_28662__$1);
if(typeof oldk_28668 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28668) : tiltontec.cell.evaluate.finalize.call(null,oldk_28668));
}


var G__28669 = cljs.core.next(seq__28597_28662__$1);
var G__28670 = null;
var G__28671 = (0);
var G__28672 = (0);
seq__28597_28652 = G__28669;
chunk__28598_28653 = G__28670;
count__28599_28654 = G__28671;
i__28600_28655 = G__28672;
continue;
}
} else {
}
}
break;
}

var seq__28601_28673 = cljs.core.seq(newv);
var chunk__28602_28674 = null;
var count__28603_28675 = (0);
var i__28604_28676 = (0);
while(true){
if((i__28604_28676 < count__28603_28675)){
var newk_28677 = chunk__28602_28674.cljs$core$IIndexed$_nth$arity$2(null,i__28604_28676);
var new_dom_28678 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28677]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28677)):tiltontec.web_mx.html.svg_dom_create(newk_28677,false));
goog.dom.appendChild(frag,new_dom_28678);


var G__28679 = seq__28601_28673;
var G__28680 = chunk__28602_28674;
var G__28681 = count__28603_28675;
var G__28682 = (i__28604_28676 + (1));
seq__28601_28673 = G__28679;
chunk__28602_28674 = G__28680;
count__28603_28675 = G__28681;
i__28604_28676 = G__28682;
continue;
} else {
var temp__5804__auto___28683 = cljs.core.seq(seq__28601_28673);
if(temp__5804__auto___28683){
var seq__28601_28684__$1 = temp__5804__auto___28683;
if(cljs.core.chunked_seq_QMARK_(seq__28601_28684__$1)){
var c__4556__auto___28685 = cljs.core.chunk_first(seq__28601_28684__$1);
var G__28686 = cljs.core.chunk_rest(seq__28601_28684__$1);
var G__28687 = c__4556__auto___28685;
var G__28688 = cljs.core.count(c__4556__auto___28685);
var G__28689 = (0);
seq__28601_28673 = G__28686;
chunk__28602_28674 = G__28687;
count__28603_28675 = G__28688;
i__28604_28676 = G__28689;
continue;
} else {
var newk_28690 = cljs.core.first(seq__28601_28684__$1);
var new_dom_28691 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28690]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28690)):tiltontec.web_mx.html.svg_dom_create(newk_28690,false));
goog.dom.appendChild(frag,new_dom_28691);


var G__28692 = cljs.core.next(seq__28601_28684__$1);
var G__28693 = null;
var G__28694 = (0);
var G__28695 = (0);
seq__28601_28673 = G__28692;
chunk__28602_28674 = G__28693;
count__28603_28675 = G__28694;
i__28604_28676 = G__28695;
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
var G__28696 = slot;
var G__28696__$1 = (((G__28696 instanceof cljs.core.Keyword))?G__28696.fqn:null);
switch (G__28696__$1) {
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
var G__28697 = dom;
var G__28698 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28697,G__28698);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28700_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28700_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28701_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28701_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28702_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28702_SHARP_,cljs.core.cst$kw$id));
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
var G__28703 = cljs.core.rest(keys);
var G__28704 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28703;
found = G__28704;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28705 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28706 = null;
var count__28707 = (0);
var i__28708 = (0);
while(true){
if((i__28708 < count__28707)){
var key = chunk__28706.cljs$core$IIndexed$_nth$arity$2(null,i__28708);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28709 = seq__28705;
var G__28710 = chunk__28706;
var G__28711 = count__28707;
var G__28712 = (i__28708 + (1));
seq__28705 = G__28709;
chunk__28706 = G__28710;
count__28707 = G__28711;
i__28708 = G__28712;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28705);
if(temp__5804__auto__){
var seq__28705__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28705__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28705__$1);
var G__28713 = cljs.core.chunk_rest(seq__28705__$1);
var G__28714 = c__4556__auto__;
var G__28715 = cljs.core.count(c__4556__auto__);
var G__28716 = (0);
seq__28705 = G__28713;
chunk__28706 = G__28714;
count__28707 = G__28715;
i__28708 = G__28716;
continue;
} else {
var key = cljs.core.first(seq__28705__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28717 = cljs.core.next(seq__28705__$1);
var G__28718 = null;
var G__28719 = (0);
var G__28720 = (0);
seq__28705 = G__28717;
chunk__28706 = G__28718;
count__28707 = G__28719;
i__28708 = G__28720;
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

var G__28721 = dom;
var G__28722 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28721,G__28722);
});
