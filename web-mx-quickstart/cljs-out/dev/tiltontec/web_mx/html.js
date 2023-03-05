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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28344(s__28345){
return (new cljs.core.LazySeq(null,(function (){
var s__28345__$1 = s__28345;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28345__$1);
if(temp__5804__auto__){
var s__28345__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28345__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28345__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28347 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28346 = (0);
while(true){
if((i__28346 < size__4528__auto__)){
var vec__28348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28346);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28348,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28347,k);

var G__28354 = (i__28346 + (1));
i__28346 = G__28354;
continue;
} else {
var G__28355 = (i__28346 + (1));
i__28346 = G__28355;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28347),tiltontec$web_mx$html$map_less_nils_$_iter__28344(cljs.core.chunk_rest(s__28345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28347),null);
}
} else {
var vec__28351 = cljs.core.first(s__28345__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28351,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28351,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28344(cljs.core.rest(s__28345__$2)));
} else {
var G__28356 = cljs.core.rest(s__28345__$2);
s__28345__$1 = G__28356;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28357(s__28358){
return (new cljs.core.LazySeq(null,(function (){
var s__28358__$1 = s__28358;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28358__$1);
if(temp__5804__auto__){
var s__28358__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28358__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28358__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28360 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28359 = (0);
while(true){
if((i__28359 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28359);
cljs.core.chunk_append(b__28360,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28361 = k;
var G__28361__$1 = (((G__28361 instanceof cljs.core.Keyword))?G__28361.fqn:null);
switch (G__28361__$1) {
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

var G__28364 = (i__28359 + (1));
i__28359 = G__28364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28360),tiltontec$web_mx$html$tag_properties_$_iter__28357(cljs.core.chunk_rest(s__28358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28360),null);
}
} else {
var k = cljs.core.first(s__28358__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28362 = k;
var G__28362__$1 = (((G__28362 instanceof cljs.core.Keyword))?G__28362.fqn:null);
switch (G__28362__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28357(cljs.core.rest(s__28358__$2)));
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

var seq__28366_28380 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28368_28381 = null;
var count__28369_28382 = (0);
var i__28370_28383 = (0);
while(true){
if((i__28370_28383 < count__28369_28382)){
var ak_28384 = chunk__28368_28381.cljs$core$IIndexed$_nth$arity$2(null,i__28370_28383);
var ak$_28385 = cljs.core.name(ak_28384);
var av_28386 = (function (){var G__28374 = cljs.core.deref(me);
return (ak_28384.cljs$core$IFn$_invoke$arity$1 ? ak_28384.cljs$core$IFn$_invoke$arity$1(G__28374) : ak_28384.call(null,G__28374));
})();
if(cljs.core.fn_QMARK_(av_28386)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28385,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28385,(2)):ak$_28385),av_28386);
} else {
svg.setAttributeNS(null,ak$_28385,tiltontec.web_mx.base.attr_val$(av_28386));
}


var G__28387 = seq__28366_28380;
var G__28388 = chunk__28368_28381;
var G__28389 = count__28369_28382;
var G__28390 = (i__28370_28383 + (1));
seq__28366_28380 = G__28387;
chunk__28368_28381 = G__28388;
count__28369_28382 = G__28389;
i__28370_28383 = G__28390;
continue;
} else {
var temp__5804__auto___28391 = cljs.core.seq(seq__28366_28380);
if(temp__5804__auto___28391){
var seq__28366_28392__$1 = temp__5804__auto___28391;
if(cljs.core.chunked_seq_QMARK_(seq__28366_28392__$1)){
var c__4556__auto___28393 = cljs.core.chunk_first(seq__28366_28392__$1);
var G__28394 = cljs.core.chunk_rest(seq__28366_28392__$1);
var G__28395 = c__4556__auto___28393;
var G__28396 = cljs.core.count(c__4556__auto___28393);
var G__28397 = (0);
seq__28366_28380 = G__28394;
chunk__28368_28381 = G__28395;
count__28369_28382 = G__28396;
i__28370_28383 = G__28397;
continue;
} else {
var ak_28398 = cljs.core.first(seq__28366_28392__$1);
var ak$_28399 = cljs.core.name(ak_28398);
var av_28400 = (function (){var G__28375 = cljs.core.deref(me);
return (ak_28398.cljs$core$IFn$_invoke$arity$1 ? ak_28398.cljs$core$IFn$_invoke$arity$1(G__28375) : ak_28398.call(null,G__28375));
})();
if(cljs.core.fn_QMARK_(av_28400)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28399,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28399,(2)):ak$_28399),av_28400);
} else {
svg.setAttributeNS(null,ak$_28399,tiltontec.web_mx.base.attr_val$(av_28400));
}


var G__28401 = cljs.core.next(seq__28366_28392__$1);
var G__28402 = null;
var G__28403 = (0);
var G__28404 = (0);
seq__28366_28380 = G__28401;
chunk__28368_28381 = G__28402;
count__28369_28382 = G__28403;
i__28370_28383 = G__28404;
continue;
}
} else {
}
}
break;
}

var seq__28376_28405 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28377_28406 = null;
var count__28378_28407 = (0);
var i__28379_28408 = (0);
while(true){
if((i__28379_28408 < count__28378_28407)){
var kid_28409 = chunk__28377_28406.cljs$core$IIndexed$_nth$arity$2(null,i__28379_28408);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28409,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28409,dbg)));


var G__28410 = seq__28376_28405;
var G__28411 = chunk__28377_28406;
var G__28412 = count__28378_28407;
var G__28413 = (i__28379_28408 + (1));
seq__28376_28405 = G__28410;
chunk__28377_28406 = G__28411;
count__28378_28407 = G__28412;
i__28379_28408 = G__28413;
continue;
} else {
var temp__5804__auto___28414 = cljs.core.seq(seq__28376_28405);
if(temp__5804__auto___28414){
var seq__28376_28415__$1 = temp__5804__auto___28414;
if(cljs.core.chunked_seq_QMARK_(seq__28376_28415__$1)){
var c__4556__auto___28416 = cljs.core.chunk_first(seq__28376_28415__$1);
var G__28417 = cljs.core.chunk_rest(seq__28376_28415__$1);
var G__28418 = c__4556__auto___28416;
var G__28419 = cljs.core.count(c__4556__auto___28416);
var G__28420 = (0);
seq__28376_28405 = G__28417;
chunk__28377_28406 = G__28418;
count__28378_28407 = G__28419;
i__28379_28408 = G__28420;
continue;
} else {
var kid_28421 = cljs.core.first(seq__28376_28415__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28421,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28421,dbg)));


var G__28422 = cljs.core.next(seq__28376_28415__$1);
var G__28423 = null;
var G__28424 = (0);
var G__28425 = (0);
seq__28376_28405 = G__28422;
chunk__28377_28406 = G__28423;
count__28378_28407 = G__28424;
i__28379_28408 = G__28425;
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
var G__28428 = arguments.length;
switch (G__28428) {
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
var seq__28429_28438 = cljs.core.seq(me);
var chunk__28430_28439 = null;
var count__28431_28440 = (0);
var i__28432_28441 = (0);
while(true){
if((i__28432_28441 < count__28431_28440)){
var tag_28442 = chunk__28430_28439.cljs$core$IIndexed$_nth$arity$2(null,i__28432_28441);
if(cljs.core.truth_(tag_28442)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28442));
} else {
}


var G__28443 = seq__28429_28438;
var G__28444 = chunk__28430_28439;
var G__28445 = count__28431_28440;
var G__28446 = (i__28432_28441 + (1));
seq__28429_28438 = G__28443;
chunk__28430_28439 = G__28444;
count__28431_28440 = G__28445;
i__28432_28441 = G__28446;
continue;
} else {
var temp__5804__auto___28447 = cljs.core.seq(seq__28429_28438);
if(temp__5804__auto___28447){
var seq__28429_28448__$1 = temp__5804__auto___28447;
if(cljs.core.chunked_seq_QMARK_(seq__28429_28448__$1)){
var c__4556__auto___28449 = cljs.core.chunk_first(seq__28429_28448__$1);
var G__28450 = cljs.core.chunk_rest(seq__28429_28448__$1);
var G__28451 = c__4556__auto___28449;
var G__28452 = cljs.core.count(c__4556__auto___28449);
var G__28453 = (0);
seq__28429_28438 = G__28450;
chunk__28430_28439 = G__28451;
count__28431_28440 = G__28452;
i__28432_28441 = G__28453;
continue;
} else {
var tag_28454 = cljs.core.first(seq__28429_28448__$1);
if(cljs.core.truth_(tag_28454)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28454));
} else {
}


var G__28455 = cljs.core.next(seq__28429_28448__$1);
var G__28456 = null;
var G__28457 = (0);
var G__28458 = (0);
seq__28429_28438 = G__28455;
chunk__28430_28439 = G__28456;
count__28431_28440 = G__28457;
i__28432_28441 = G__28458;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28426_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28426_SHARP_,dbg);
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
var temp__5804__auto___28459 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28459)){
var list_id_28460 = temp__5804__auto___28459;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28460));
} else {
}
} else {
}

var seq__28433_28461 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28434_28462 = null;
var count__28435_28463 = (0);
var i__28436_28464 = (0);
while(true){
if((i__28436_28464 < count__28435_28463)){
var attr_key_28465 = chunk__28434_28462.cljs$core$IIndexed$_nth$arity$2(null,i__28436_28464);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28465),"-")){
var temp__5804__auto___28466 = tiltontec.model.core.mget(me,attr_key_28465);
if(cljs.core.truth_(temp__5804__auto___28466)){
var attr_val_28467 = temp__5804__auto___28466;
dom.setAttribute(cljs.core.name(attr_key_28465),tiltontec.web_mx.base.attr_val$(attr_val_28467));
} else {
}
} else {
}


var G__28468 = seq__28433_28461;
var G__28469 = chunk__28434_28462;
var G__28470 = count__28435_28463;
var G__28471 = (i__28436_28464 + (1));
seq__28433_28461 = G__28468;
chunk__28434_28462 = G__28469;
count__28435_28463 = G__28470;
i__28436_28464 = G__28471;
continue;
} else {
var temp__5804__auto___28472 = cljs.core.seq(seq__28433_28461);
if(temp__5804__auto___28472){
var seq__28433_28473__$1 = temp__5804__auto___28472;
if(cljs.core.chunked_seq_QMARK_(seq__28433_28473__$1)){
var c__4556__auto___28474 = cljs.core.chunk_first(seq__28433_28473__$1);
var G__28475 = cljs.core.chunk_rest(seq__28433_28473__$1);
var G__28476 = c__4556__auto___28474;
var G__28477 = cljs.core.count(c__4556__auto___28474);
var G__28478 = (0);
seq__28433_28461 = G__28475;
chunk__28434_28462 = G__28476;
count__28435_28463 = G__28477;
i__28436_28464 = G__28478;
continue;
} else {
var attr_key_28479 = cljs.core.first(seq__28433_28473__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28479),"-")){
var temp__5804__auto___28480__$1 = tiltontec.model.core.mget(me,attr_key_28479);
if(cljs.core.truth_(temp__5804__auto___28480__$1)){
var attr_val_28481 = temp__5804__auto___28480__$1;
dom.setAttribute(cljs.core.name(attr_key_28479),tiltontec.web_mx.base.attr_val$(attr_val_28481));
} else {
}
} else {
}


var G__28482 = cljs.core.next(seq__28433_28473__$1);
var G__28483 = null;
var G__28484 = (0);
var G__28485 = (0);
seq__28433_28461 = G__28482;
chunk__28434_28462 = G__28483;
count__28435_28463 = G__28484;
i__28436_28464 = G__28485;
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
var seq__28486_28506 = cljs.core.seq(newv);
var chunk__28487_28507 = null;
var count__28488_28508 = (0);
var i__28489_28509 = (0);
while(true){
if((i__28489_28509 < count__28488_28508)){
var newk_28510 = chunk__28487_28507.cljs$core$IIndexed$_nth$arity$2(null,i__28489_28509);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28510)));


var G__28511 = seq__28486_28506;
var G__28512 = chunk__28487_28507;
var G__28513 = count__28488_28508;
var G__28514 = (i__28489_28509 + (1));
seq__28486_28506 = G__28511;
chunk__28487_28507 = G__28512;
count__28488_28508 = G__28513;
i__28489_28509 = G__28514;
continue;
} else {
var temp__5804__auto___28515 = cljs.core.seq(seq__28486_28506);
if(temp__5804__auto___28515){
var seq__28486_28516__$1 = temp__5804__auto___28515;
if(cljs.core.chunked_seq_QMARK_(seq__28486_28516__$1)){
var c__4556__auto___28517 = cljs.core.chunk_first(seq__28486_28516__$1);
var G__28518 = cljs.core.chunk_rest(seq__28486_28516__$1);
var G__28519 = c__4556__auto___28517;
var G__28520 = cljs.core.count(c__4556__auto___28517);
var G__28521 = (0);
seq__28486_28506 = G__28518;
chunk__28487_28507 = G__28519;
count__28488_28508 = G__28520;
i__28489_28509 = G__28521;
continue;
} else {
var newk_28522 = cljs.core.first(seq__28486_28516__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28522)));


var G__28523 = cljs.core.next(seq__28486_28516__$1);
var G__28524 = null;
var G__28525 = (0);
var G__28526 = (0);
seq__28486_28506 = G__28523;
chunk__28487_28507 = G__28524;
count__28488_28508 = G__28525;
i__28489_28509 = G__28526;
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
var seq__28490 = cljs.core.seq(lost);
var chunk__28491 = null;
var count__28492 = (0);
var i__28493 = (0);
while(true){
if((i__28493 < count__28492)){
var oldk = chunk__28491.cljs$core$IIndexed$_nth$arity$2(null,i__28493);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28496){if((e28496 instanceof Error)){
var e_28527 = e28496;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28527], 0));

} else {
throw e28496;

}
}}


var G__28528 = seq__28490;
var G__28529 = chunk__28491;
var G__28530 = count__28492;
var G__28531 = (i__28493 + (1));
seq__28490 = G__28528;
chunk__28491 = G__28529;
count__28492 = G__28530;
i__28493 = G__28531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28490);
if(temp__5804__auto__){
var seq__28490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28490__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28490__$1);
var G__28532 = cljs.core.chunk_rest(seq__28490__$1);
var G__28533 = c__4556__auto__;
var G__28534 = cljs.core.count(c__4556__auto__);
var G__28535 = (0);
seq__28490 = G__28532;
chunk__28491 = G__28533;
count__28492 = G__28534;
i__28493 = G__28535;
continue;
} else {
var oldk = cljs.core.first(seq__28490__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28497){if((e28497 instanceof Error)){
var e_28536 = e28497;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28536], 0));

} else {
throw e28497;

}
}}


var G__28537 = cljs.core.next(seq__28490__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__28490 = G__28537;
chunk__28491 = G__28538;
count__28492 = G__28539;
i__28493 = G__28540;
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
var seq__28498_28541 = cljs.core.seq(lost);
var chunk__28499_28542 = null;
var count__28500_28543 = (0);
var i__28501_28544 = (0);
while(true){
if((i__28501_28544 < count__28500_28543)){
var oldk_28545 = chunk__28499_28542.cljs$core$IIndexed$_nth$arity$2(null,i__28501_28544);
if(typeof oldk_28545 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28545) : tiltontec.cell.evaluate.finalize.call(null,oldk_28545));
}


var G__28546 = seq__28498_28541;
var G__28547 = chunk__28499_28542;
var G__28548 = count__28500_28543;
var G__28549 = (i__28501_28544 + (1));
seq__28498_28541 = G__28546;
chunk__28499_28542 = G__28547;
count__28500_28543 = G__28548;
i__28501_28544 = G__28549;
continue;
} else {
var temp__5804__auto___28550 = cljs.core.seq(seq__28498_28541);
if(temp__5804__auto___28550){
var seq__28498_28551__$1 = temp__5804__auto___28550;
if(cljs.core.chunked_seq_QMARK_(seq__28498_28551__$1)){
var c__4556__auto___28552 = cljs.core.chunk_first(seq__28498_28551__$1);
var G__28553 = cljs.core.chunk_rest(seq__28498_28551__$1);
var G__28554 = c__4556__auto___28552;
var G__28555 = cljs.core.count(c__4556__auto___28552);
var G__28556 = (0);
seq__28498_28541 = G__28553;
chunk__28499_28542 = G__28554;
count__28500_28543 = G__28555;
i__28501_28544 = G__28556;
continue;
} else {
var oldk_28557 = cljs.core.first(seq__28498_28551__$1);
if(typeof oldk_28557 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28557) : tiltontec.cell.evaluate.finalize.call(null,oldk_28557));
}


var G__28558 = cljs.core.next(seq__28498_28551__$1);
var G__28559 = null;
var G__28560 = (0);
var G__28561 = (0);
seq__28498_28541 = G__28558;
chunk__28499_28542 = G__28559;
count__28500_28543 = G__28560;
i__28501_28544 = G__28561;
continue;
}
} else {
}
}
break;
}

var seq__28502_28562 = cljs.core.seq(newv);
var chunk__28503_28563 = null;
var count__28504_28564 = (0);
var i__28505_28565 = (0);
while(true){
if((i__28505_28565 < count__28504_28564)){
var newk_28566 = chunk__28503_28563.cljs$core$IIndexed$_nth$arity$2(null,i__28505_28565);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28566]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28566)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28566)));


var G__28567 = seq__28502_28562;
var G__28568 = chunk__28503_28563;
var G__28569 = count__28504_28564;
var G__28570 = (i__28505_28565 + (1));
seq__28502_28562 = G__28567;
chunk__28503_28563 = G__28568;
count__28504_28564 = G__28569;
i__28505_28565 = G__28570;
continue;
} else {
var temp__5804__auto___28571 = cljs.core.seq(seq__28502_28562);
if(temp__5804__auto___28571){
var seq__28502_28572__$1 = temp__5804__auto___28571;
if(cljs.core.chunked_seq_QMARK_(seq__28502_28572__$1)){
var c__4556__auto___28573 = cljs.core.chunk_first(seq__28502_28572__$1);
var G__28574 = cljs.core.chunk_rest(seq__28502_28572__$1);
var G__28575 = c__4556__auto___28573;
var G__28576 = cljs.core.count(c__4556__auto___28573);
var G__28577 = (0);
seq__28502_28562 = G__28574;
chunk__28503_28563 = G__28575;
count__28504_28564 = G__28576;
i__28505_28565 = G__28577;
continue;
} else {
var newk_28578 = cljs.core.first(seq__28502_28572__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28578]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28578)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28578)));


var G__28579 = cljs.core.next(seq__28502_28572__$1);
var G__28580 = null;
var G__28581 = (0);
var G__28582 = (0);
seq__28502_28562 = G__28579;
chunk__28503_28563 = G__28580;
count__28504_28564 = G__28581;
i__28505_28565 = G__28582;
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
var seq__28583_28603 = cljs.core.seq(newv);
var chunk__28584_28604 = null;
var count__28585_28605 = (0);
var i__28586_28606 = (0);
while(true){
if((i__28586_28606 < count__28585_28605)){
var newk_28607 = chunk__28584_28604.cljs$core$IIndexed$_nth$arity$2(null,i__28586_28606);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28607)));


var G__28608 = seq__28583_28603;
var G__28609 = chunk__28584_28604;
var G__28610 = count__28585_28605;
var G__28611 = (i__28586_28606 + (1));
seq__28583_28603 = G__28608;
chunk__28584_28604 = G__28609;
count__28585_28605 = G__28610;
i__28586_28606 = G__28611;
continue;
} else {
var temp__5804__auto___28612 = cljs.core.seq(seq__28583_28603);
if(temp__5804__auto___28612){
var seq__28583_28613__$1 = temp__5804__auto___28612;
if(cljs.core.chunked_seq_QMARK_(seq__28583_28613__$1)){
var c__4556__auto___28614 = cljs.core.chunk_first(seq__28583_28613__$1);
var G__28615 = cljs.core.chunk_rest(seq__28583_28613__$1);
var G__28616 = c__4556__auto___28614;
var G__28617 = cljs.core.count(c__4556__auto___28614);
var G__28618 = (0);
seq__28583_28603 = G__28615;
chunk__28584_28604 = G__28616;
count__28585_28605 = G__28617;
i__28586_28606 = G__28618;
continue;
} else {
var newk_28619 = cljs.core.first(seq__28583_28613__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28619)));


var G__28620 = cljs.core.next(seq__28583_28613__$1);
var G__28621 = null;
var G__28622 = (0);
var G__28623 = (0);
seq__28583_28603 = G__28620;
chunk__28584_28604 = G__28621;
count__28585_28605 = G__28622;
i__28586_28606 = G__28623;
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
var seq__28587 = cljs.core.seq(lost);
var chunk__28588 = null;
var count__28589 = (0);
var i__28590 = (0);
while(true){
if((i__28590 < count__28589)){
var oldk = chunk__28588.cljs$core$IIndexed$_nth$arity$2(null,i__28590);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28624 = seq__28587;
var G__28625 = chunk__28588;
var G__28626 = count__28589;
var G__28627 = (i__28590 + (1));
seq__28587 = G__28624;
chunk__28588 = G__28625;
count__28589 = G__28626;
i__28590 = G__28627;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28587);
if(temp__5804__auto__){
var seq__28587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28587__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28587__$1);
var G__28628 = cljs.core.chunk_rest(seq__28587__$1);
var G__28629 = c__4556__auto__;
var G__28630 = cljs.core.count(c__4556__auto__);
var G__28631 = (0);
seq__28587 = G__28628;
chunk__28588 = G__28629;
count__28589 = G__28630;
i__28590 = G__28631;
continue;
} else {
var oldk = cljs.core.first(seq__28587__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28632 = cljs.core.next(seq__28587__$1);
var G__28633 = null;
var G__28634 = (0);
var G__28635 = (0);
seq__28587 = G__28632;
chunk__28588 = G__28633;
count__28589 = G__28634;
i__28590 = G__28635;
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
var seq__28591 = cljs.core.seq(gained);
var chunk__28592 = null;
var count__28593 = (0);
var i__28594 = (0);
while(true){
if((i__28594 < count__28593)){
var newk = chunk__28592.cljs$core$IIndexed$_nth$arity$2(null,i__28594);
var new_dom_28636 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28636);


var G__28637 = seq__28591;
var G__28638 = chunk__28592;
var G__28639 = count__28593;
var G__28640 = (i__28594 + (1));
seq__28591 = G__28637;
chunk__28592 = G__28638;
count__28593 = G__28639;
i__28594 = G__28640;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28591);
if(temp__5804__auto__){
var seq__28591__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28591__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28591__$1);
var G__28641 = cljs.core.chunk_rest(seq__28591__$1);
var G__28642 = c__4556__auto__;
var G__28643 = cljs.core.count(c__4556__auto__);
var G__28644 = (0);
seq__28591 = G__28641;
chunk__28592 = G__28642;
count__28593 = G__28643;
i__28594 = G__28644;
continue;
} else {
var newk = cljs.core.first(seq__28591__$1);
var new_dom_28645 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28645);


var G__28646 = cljs.core.next(seq__28591__$1);
var G__28647 = null;
var G__28648 = (0);
var G__28649 = (0);
seq__28591 = G__28646;
chunk__28592 = G__28647;
count__28593 = G__28648;
i__28594 = G__28649;
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
var seq__28595_28650 = cljs.core.seq(lost);
var chunk__28596_28651 = null;
var count__28597_28652 = (0);
var i__28598_28653 = (0);
while(true){
if((i__28598_28653 < count__28597_28652)){
var oldk_28654 = chunk__28596_28651.cljs$core$IIndexed$_nth$arity$2(null,i__28598_28653);
if(typeof oldk_28654 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28654) : tiltontec.cell.evaluate.finalize.call(null,oldk_28654));
}


var G__28655 = seq__28595_28650;
var G__28656 = chunk__28596_28651;
var G__28657 = count__28597_28652;
var G__28658 = (i__28598_28653 + (1));
seq__28595_28650 = G__28655;
chunk__28596_28651 = G__28656;
count__28597_28652 = G__28657;
i__28598_28653 = G__28658;
continue;
} else {
var temp__5804__auto___28659 = cljs.core.seq(seq__28595_28650);
if(temp__5804__auto___28659){
var seq__28595_28660__$1 = temp__5804__auto___28659;
if(cljs.core.chunked_seq_QMARK_(seq__28595_28660__$1)){
var c__4556__auto___28661 = cljs.core.chunk_first(seq__28595_28660__$1);
var G__28662 = cljs.core.chunk_rest(seq__28595_28660__$1);
var G__28663 = c__4556__auto___28661;
var G__28664 = cljs.core.count(c__4556__auto___28661);
var G__28665 = (0);
seq__28595_28650 = G__28662;
chunk__28596_28651 = G__28663;
count__28597_28652 = G__28664;
i__28598_28653 = G__28665;
continue;
} else {
var oldk_28666 = cljs.core.first(seq__28595_28660__$1);
if(typeof oldk_28666 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28666) : tiltontec.cell.evaluate.finalize.call(null,oldk_28666));
}


var G__28667 = cljs.core.next(seq__28595_28660__$1);
var G__28668 = null;
var G__28669 = (0);
var G__28670 = (0);
seq__28595_28650 = G__28667;
chunk__28596_28651 = G__28668;
count__28597_28652 = G__28669;
i__28598_28653 = G__28670;
continue;
}
} else {
}
}
break;
}

var seq__28599_28671 = cljs.core.seq(newv);
var chunk__28600_28672 = null;
var count__28601_28673 = (0);
var i__28602_28674 = (0);
while(true){
if((i__28602_28674 < count__28601_28673)){
var newk_28675 = chunk__28600_28672.cljs$core$IIndexed$_nth$arity$2(null,i__28602_28674);
var new_dom_28676 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28675]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28675)):tiltontec.web_mx.html.svg_dom_create(newk_28675,false));
goog.dom.appendChild(frag,new_dom_28676);


var G__28677 = seq__28599_28671;
var G__28678 = chunk__28600_28672;
var G__28679 = count__28601_28673;
var G__28680 = (i__28602_28674 + (1));
seq__28599_28671 = G__28677;
chunk__28600_28672 = G__28678;
count__28601_28673 = G__28679;
i__28602_28674 = G__28680;
continue;
} else {
var temp__5804__auto___28681 = cljs.core.seq(seq__28599_28671);
if(temp__5804__auto___28681){
var seq__28599_28682__$1 = temp__5804__auto___28681;
if(cljs.core.chunked_seq_QMARK_(seq__28599_28682__$1)){
var c__4556__auto___28683 = cljs.core.chunk_first(seq__28599_28682__$1);
var G__28684 = cljs.core.chunk_rest(seq__28599_28682__$1);
var G__28685 = c__4556__auto___28683;
var G__28686 = cljs.core.count(c__4556__auto___28683);
var G__28687 = (0);
seq__28599_28671 = G__28684;
chunk__28600_28672 = G__28685;
count__28601_28673 = G__28686;
i__28602_28674 = G__28687;
continue;
} else {
var newk_28688 = cljs.core.first(seq__28599_28682__$1);
var new_dom_28689 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28688]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28688)):tiltontec.web_mx.html.svg_dom_create(newk_28688,false));
goog.dom.appendChild(frag,new_dom_28689);


var G__28690 = cljs.core.next(seq__28599_28682__$1);
var G__28691 = null;
var G__28692 = (0);
var G__28693 = (0);
seq__28599_28671 = G__28690;
chunk__28600_28672 = G__28691;
count__28601_28673 = G__28692;
i__28602_28674 = G__28693;
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
var G__28694 = slot;
var G__28694__$1 = (((G__28694 instanceof cljs.core.Keyword))?G__28694.fqn:null);
switch (G__28694__$1) {
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
var G__28695 = dom;
var G__28696 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28695,G__28696);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28698_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28698_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28699_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28699_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28700_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28700_SHARP_,cljs.core.cst$kw$id));
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
var G__28701 = cljs.core.rest(keys);
var G__28702 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28701;
found = G__28702;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28703 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28704 = null;
var count__28705 = (0);
var i__28706 = (0);
while(true){
if((i__28706 < count__28705)){
var key = chunk__28704.cljs$core$IIndexed$_nth$arity$2(null,i__28706);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28707 = seq__28703;
var G__28708 = chunk__28704;
var G__28709 = count__28705;
var G__28710 = (i__28706 + (1));
seq__28703 = G__28707;
chunk__28704 = G__28708;
count__28705 = G__28709;
i__28706 = G__28710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28703);
if(temp__5804__auto__){
var seq__28703__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28703__$1);
var G__28711 = cljs.core.chunk_rest(seq__28703__$1);
var G__28712 = c__4556__auto__;
var G__28713 = cljs.core.count(c__4556__auto__);
var G__28714 = (0);
seq__28703 = G__28711;
chunk__28704 = G__28712;
count__28705 = G__28713;
i__28706 = G__28714;
continue;
} else {
var key = cljs.core.first(seq__28703__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28715 = cljs.core.next(seq__28703__$1);
var G__28716 = null;
var G__28717 = (0);
var G__28718 = (0);
seq__28703 = G__28715;
chunk__28704 = G__28716;
count__28705 = G__28717;
i__28706 = G__28718;
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

var G__28719 = dom;
var G__28720 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28719,G__28720);
});
