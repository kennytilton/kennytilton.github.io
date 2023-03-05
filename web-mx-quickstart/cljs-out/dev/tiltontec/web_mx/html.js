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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28332(s__28333){
return (new cljs.core.LazySeq(null,(function (){
var s__28333__$1 = s__28333;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28333__$1);
if(temp__5804__auto__){
var s__28333__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28333__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28333__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28335 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28334 = (0);
while(true){
if((i__28334 < size__4528__auto__)){
var vec__28336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28336,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28335,k);

var G__28342 = (i__28334 + (1));
i__28334 = G__28342;
continue;
} else {
var G__28343 = (i__28334 + (1));
i__28334 = G__28343;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28335),tiltontec$web_mx$html$map_less_nils_$_iter__28332(cljs.core.chunk_rest(s__28333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28335),null);
}
} else {
var vec__28339 = cljs.core.first(s__28333__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28332(cljs.core.rest(s__28333__$2)));
} else {
var G__28344 = cljs.core.rest(s__28333__$2);
s__28333__$1 = G__28344;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28345(s__28346){
return (new cljs.core.LazySeq(null,(function (){
var s__28346__$1 = s__28346;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28346__$1);
if(temp__5804__auto__){
var s__28346__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28346__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28346__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28348 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28347 = (0);
while(true){
if((i__28347 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28347);
cljs.core.chunk_append(b__28348,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28349 = k;
var G__28349__$1 = (((G__28349 instanceof cljs.core.Keyword))?G__28349.fqn:null);
switch (G__28349__$1) {
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

var G__28352 = (i__28347 + (1));
i__28347 = G__28352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28348),tiltontec$web_mx$html$tag_properties_$_iter__28345(cljs.core.chunk_rest(s__28346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28348),null);
}
} else {
var k = cljs.core.first(s__28346__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28350 = k;
var G__28350__$1 = (((G__28350 instanceof cljs.core.Keyword))?G__28350.fqn:null);
switch (G__28350__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28345(cljs.core.rest(s__28346__$2)));
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

var seq__28354_28368 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28356_28369 = null;
var count__28357_28370 = (0);
var i__28358_28371 = (0);
while(true){
if((i__28358_28371 < count__28357_28370)){
var ak_28372 = chunk__28356_28369.cljs$core$IIndexed$_nth$arity$2(null,i__28358_28371);
var ak$_28373 = cljs.core.name(ak_28372);
var av_28374 = (function (){var G__28362 = cljs.core.deref(me);
return (ak_28372.cljs$core$IFn$_invoke$arity$1 ? ak_28372.cljs$core$IFn$_invoke$arity$1(G__28362) : ak_28372.call(null,G__28362));
})();
if(cljs.core.fn_QMARK_(av_28374)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28373,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28373,(2)):ak$_28373),av_28374);
} else {
svg.setAttributeNS(null,ak$_28373,tiltontec.web_mx.base.attr_val$(av_28374));
}


var G__28375 = seq__28354_28368;
var G__28376 = chunk__28356_28369;
var G__28377 = count__28357_28370;
var G__28378 = (i__28358_28371 + (1));
seq__28354_28368 = G__28375;
chunk__28356_28369 = G__28376;
count__28357_28370 = G__28377;
i__28358_28371 = G__28378;
continue;
} else {
var temp__5804__auto___28379 = cljs.core.seq(seq__28354_28368);
if(temp__5804__auto___28379){
var seq__28354_28380__$1 = temp__5804__auto___28379;
if(cljs.core.chunked_seq_QMARK_(seq__28354_28380__$1)){
var c__4556__auto___28381 = cljs.core.chunk_first(seq__28354_28380__$1);
var G__28382 = cljs.core.chunk_rest(seq__28354_28380__$1);
var G__28383 = c__4556__auto___28381;
var G__28384 = cljs.core.count(c__4556__auto___28381);
var G__28385 = (0);
seq__28354_28368 = G__28382;
chunk__28356_28369 = G__28383;
count__28357_28370 = G__28384;
i__28358_28371 = G__28385;
continue;
} else {
var ak_28386 = cljs.core.first(seq__28354_28380__$1);
var ak$_28387 = cljs.core.name(ak_28386);
var av_28388 = (function (){var G__28363 = cljs.core.deref(me);
return (ak_28386.cljs$core$IFn$_invoke$arity$1 ? ak_28386.cljs$core$IFn$_invoke$arity$1(G__28363) : ak_28386.call(null,G__28363));
})();
if(cljs.core.fn_QMARK_(av_28388)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28387,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28387,(2)):ak$_28387),av_28388);
} else {
svg.setAttributeNS(null,ak$_28387,tiltontec.web_mx.base.attr_val$(av_28388));
}


var G__28389 = cljs.core.next(seq__28354_28380__$1);
var G__28390 = null;
var G__28391 = (0);
var G__28392 = (0);
seq__28354_28368 = G__28389;
chunk__28356_28369 = G__28390;
count__28357_28370 = G__28391;
i__28358_28371 = G__28392;
continue;
}
} else {
}
}
break;
}

var seq__28364_28393 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28365_28394 = null;
var count__28366_28395 = (0);
var i__28367_28396 = (0);
while(true){
if((i__28367_28396 < count__28366_28395)){
var kid_28397 = chunk__28365_28394.cljs$core$IIndexed$_nth$arity$2(null,i__28367_28396);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28397,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28397,dbg)));


var G__28398 = seq__28364_28393;
var G__28399 = chunk__28365_28394;
var G__28400 = count__28366_28395;
var G__28401 = (i__28367_28396 + (1));
seq__28364_28393 = G__28398;
chunk__28365_28394 = G__28399;
count__28366_28395 = G__28400;
i__28367_28396 = G__28401;
continue;
} else {
var temp__5804__auto___28402 = cljs.core.seq(seq__28364_28393);
if(temp__5804__auto___28402){
var seq__28364_28403__$1 = temp__5804__auto___28402;
if(cljs.core.chunked_seq_QMARK_(seq__28364_28403__$1)){
var c__4556__auto___28404 = cljs.core.chunk_first(seq__28364_28403__$1);
var G__28405 = cljs.core.chunk_rest(seq__28364_28403__$1);
var G__28406 = c__4556__auto___28404;
var G__28407 = cljs.core.count(c__4556__auto___28404);
var G__28408 = (0);
seq__28364_28393 = G__28405;
chunk__28365_28394 = G__28406;
count__28366_28395 = G__28407;
i__28367_28396 = G__28408;
continue;
} else {
var kid_28409 = cljs.core.first(seq__28364_28403__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28409,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28409,dbg)));


var G__28410 = cljs.core.next(seq__28364_28403__$1);
var G__28411 = null;
var G__28412 = (0);
var G__28413 = (0);
seq__28364_28393 = G__28410;
chunk__28365_28394 = G__28411;
count__28366_28395 = G__28412;
i__28367_28396 = G__28413;
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
var G__28416 = arguments.length;
switch (G__28416) {
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
var seq__28417_28426 = cljs.core.seq(me);
var chunk__28418_28427 = null;
var count__28419_28428 = (0);
var i__28420_28429 = (0);
while(true){
if((i__28420_28429 < count__28419_28428)){
var tag_28430 = chunk__28418_28427.cljs$core$IIndexed$_nth$arity$2(null,i__28420_28429);
if(cljs.core.truth_(tag_28430)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28430));
} else {
}


var G__28431 = seq__28417_28426;
var G__28432 = chunk__28418_28427;
var G__28433 = count__28419_28428;
var G__28434 = (i__28420_28429 + (1));
seq__28417_28426 = G__28431;
chunk__28418_28427 = G__28432;
count__28419_28428 = G__28433;
i__28420_28429 = G__28434;
continue;
} else {
var temp__5804__auto___28435 = cljs.core.seq(seq__28417_28426);
if(temp__5804__auto___28435){
var seq__28417_28436__$1 = temp__5804__auto___28435;
if(cljs.core.chunked_seq_QMARK_(seq__28417_28436__$1)){
var c__4556__auto___28437 = cljs.core.chunk_first(seq__28417_28436__$1);
var G__28438 = cljs.core.chunk_rest(seq__28417_28436__$1);
var G__28439 = c__4556__auto___28437;
var G__28440 = cljs.core.count(c__4556__auto___28437);
var G__28441 = (0);
seq__28417_28426 = G__28438;
chunk__28418_28427 = G__28439;
count__28419_28428 = G__28440;
i__28420_28429 = G__28441;
continue;
} else {
var tag_28442 = cljs.core.first(seq__28417_28436__$1);
if(cljs.core.truth_(tag_28442)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28442));
} else {
}


var G__28443 = cljs.core.next(seq__28417_28436__$1);
var G__28444 = null;
var G__28445 = (0);
var G__28446 = (0);
seq__28417_28426 = G__28443;
chunk__28418_28427 = G__28444;
count__28419_28428 = G__28445;
i__28420_28429 = G__28446;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28414_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28414_SHARP_,dbg);
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
var temp__5804__auto___28447 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28447)){
var list_id_28448 = temp__5804__auto___28447;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28448));
} else {
}
} else {
}

var seq__28421_28449 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28422_28450 = null;
var count__28423_28451 = (0);
var i__28424_28452 = (0);
while(true){
if((i__28424_28452 < count__28423_28451)){
var attr_key_28453 = chunk__28422_28450.cljs$core$IIndexed$_nth$arity$2(null,i__28424_28452);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28453),"-")){
var temp__5804__auto___28454 = tiltontec.model.core.mget(me,attr_key_28453);
if(cljs.core.truth_(temp__5804__auto___28454)){
var attr_val_28455 = temp__5804__auto___28454;
dom.setAttribute(cljs.core.name(attr_key_28453),tiltontec.web_mx.base.attr_val$(attr_val_28455));
} else {
}
} else {
}


var G__28456 = seq__28421_28449;
var G__28457 = chunk__28422_28450;
var G__28458 = count__28423_28451;
var G__28459 = (i__28424_28452 + (1));
seq__28421_28449 = G__28456;
chunk__28422_28450 = G__28457;
count__28423_28451 = G__28458;
i__28424_28452 = G__28459;
continue;
} else {
var temp__5804__auto___28460 = cljs.core.seq(seq__28421_28449);
if(temp__5804__auto___28460){
var seq__28421_28461__$1 = temp__5804__auto___28460;
if(cljs.core.chunked_seq_QMARK_(seq__28421_28461__$1)){
var c__4556__auto___28462 = cljs.core.chunk_first(seq__28421_28461__$1);
var G__28463 = cljs.core.chunk_rest(seq__28421_28461__$1);
var G__28464 = c__4556__auto___28462;
var G__28465 = cljs.core.count(c__4556__auto___28462);
var G__28466 = (0);
seq__28421_28449 = G__28463;
chunk__28422_28450 = G__28464;
count__28423_28451 = G__28465;
i__28424_28452 = G__28466;
continue;
} else {
var attr_key_28467 = cljs.core.first(seq__28421_28461__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28467),"-")){
var temp__5804__auto___28468__$1 = tiltontec.model.core.mget(me,attr_key_28467);
if(cljs.core.truth_(temp__5804__auto___28468__$1)){
var attr_val_28469 = temp__5804__auto___28468__$1;
dom.setAttribute(cljs.core.name(attr_key_28467),tiltontec.web_mx.base.attr_val$(attr_val_28469));
} else {
}
} else {
}


var G__28470 = cljs.core.next(seq__28421_28461__$1);
var G__28471 = null;
var G__28472 = (0);
var G__28473 = (0);
seq__28421_28449 = G__28470;
chunk__28422_28450 = G__28471;
count__28423_28451 = G__28472;
i__28424_28452 = G__28473;
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
var seq__28474_28494 = cljs.core.seq(newv);
var chunk__28475_28495 = null;
var count__28476_28496 = (0);
var i__28477_28497 = (0);
while(true){
if((i__28477_28497 < count__28476_28496)){
var newk_28498 = chunk__28475_28495.cljs$core$IIndexed$_nth$arity$2(null,i__28477_28497);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28498)));


var G__28499 = seq__28474_28494;
var G__28500 = chunk__28475_28495;
var G__28501 = count__28476_28496;
var G__28502 = (i__28477_28497 + (1));
seq__28474_28494 = G__28499;
chunk__28475_28495 = G__28500;
count__28476_28496 = G__28501;
i__28477_28497 = G__28502;
continue;
} else {
var temp__5804__auto___28503 = cljs.core.seq(seq__28474_28494);
if(temp__5804__auto___28503){
var seq__28474_28504__$1 = temp__5804__auto___28503;
if(cljs.core.chunked_seq_QMARK_(seq__28474_28504__$1)){
var c__4556__auto___28505 = cljs.core.chunk_first(seq__28474_28504__$1);
var G__28506 = cljs.core.chunk_rest(seq__28474_28504__$1);
var G__28507 = c__4556__auto___28505;
var G__28508 = cljs.core.count(c__4556__auto___28505);
var G__28509 = (0);
seq__28474_28494 = G__28506;
chunk__28475_28495 = G__28507;
count__28476_28496 = G__28508;
i__28477_28497 = G__28509;
continue;
} else {
var newk_28510 = cljs.core.first(seq__28474_28504__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28510)));


var G__28511 = cljs.core.next(seq__28474_28504__$1);
var G__28512 = null;
var G__28513 = (0);
var G__28514 = (0);
seq__28474_28494 = G__28511;
chunk__28475_28495 = G__28512;
count__28476_28496 = G__28513;
i__28477_28497 = G__28514;
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
var seq__28478 = cljs.core.seq(lost);
var chunk__28479 = null;
var count__28480 = (0);
var i__28481 = (0);
while(true){
if((i__28481 < count__28480)){
var oldk = chunk__28479.cljs$core$IIndexed$_nth$arity$2(null,i__28481);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28484){if((e28484 instanceof Error)){
var e_28515 = e28484;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28515], 0));

} else {
throw e28484;

}
}}


var G__28516 = seq__28478;
var G__28517 = chunk__28479;
var G__28518 = count__28480;
var G__28519 = (i__28481 + (1));
seq__28478 = G__28516;
chunk__28479 = G__28517;
count__28480 = G__28518;
i__28481 = G__28519;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28478);
if(temp__5804__auto__){
var seq__28478__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28478__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28478__$1);
var G__28520 = cljs.core.chunk_rest(seq__28478__$1);
var G__28521 = c__4556__auto__;
var G__28522 = cljs.core.count(c__4556__auto__);
var G__28523 = (0);
seq__28478 = G__28520;
chunk__28479 = G__28521;
count__28480 = G__28522;
i__28481 = G__28523;
continue;
} else {
var oldk = cljs.core.first(seq__28478__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28485){if((e28485 instanceof Error)){
var e_28524 = e28485;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28524], 0));

} else {
throw e28485;

}
}}


var G__28525 = cljs.core.next(seq__28478__$1);
var G__28526 = null;
var G__28527 = (0);
var G__28528 = (0);
seq__28478 = G__28525;
chunk__28479 = G__28526;
count__28480 = G__28527;
i__28481 = G__28528;
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
var seq__28486_28529 = cljs.core.seq(lost);
var chunk__28487_28530 = null;
var count__28488_28531 = (0);
var i__28489_28532 = (0);
while(true){
if((i__28489_28532 < count__28488_28531)){
var oldk_28533 = chunk__28487_28530.cljs$core$IIndexed$_nth$arity$2(null,i__28489_28532);
if(typeof oldk_28533 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28533) : tiltontec.cell.evaluate.finalize.call(null,oldk_28533));
}


var G__28534 = seq__28486_28529;
var G__28535 = chunk__28487_28530;
var G__28536 = count__28488_28531;
var G__28537 = (i__28489_28532 + (1));
seq__28486_28529 = G__28534;
chunk__28487_28530 = G__28535;
count__28488_28531 = G__28536;
i__28489_28532 = G__28537;
continue;
} else {
var temp__5804__auto___28538 = cljs.core.seq(seq__28486_28529);
if(temp__5804__auto___28538){
var seq__28486_28539__$1 = temp__5804__auto___28538;
if(cljs.core.chunked_seq_QMARK_(seq__28486_28539__$1)){
var c__4556__auto___28540 = cljs.core.chunk_first(seq__28486_28539__$1);
var G__28541 = cljs.core.chunk_rest(seq__28486_28539__$1);
var G__28542 = c__4556__auto___28540;
var G__28543 = cljs.core.count(c__4556__auto___28540);
var G__28544 = (0);
seq__28486_28529 = G__28541;
chunk__28487_28530 = G__28542;
count__28488_28531 = G__28543;
i__28489_28532 = G__28544;
continue;
} else {
var oldk_28545 = cljs.core.first(seq__28486_28539__$1);
if(typeof oldk_28545 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28545) : tiltontec.cell.evaluate.finalize.call(null,oldk_28545));
}


var G__28546 = cljs.core.next(seq__28486_28539__$1);
var G__28547 = null;
var G__28548 = (0);
var G__28549 = (0);
seq__28486_28529 = G__28546;
chunk__28487_28530 = G__28547;
count__28488_28531 = G__28548;
i__28489_28532 = G__28549;
continue;
}
} else {
}
}
break;
}

var seq__28490_28550 = cljs.core.seq(newv);
var chunk__28491_28551 = null;
var count__28492_28552 = (0);
var i__28493_28553 = (0);
while(true){
if((i__28493_28553 < count__28492_28552)){
var newk_28554 = chunk__28491_28551.cljs$core$IIndexed$_nth$arity$2(null,i__28493_28553);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28554]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28554)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28554)));


var G__28555 = seq__28490_28550;
var G__28556 = chunk__28491_28551;
var G__28557 = count__28492_28552;
var G__28558 = (i__28493_28553 + (1));
seq__28490_28550 = G__28555;
chunk__28491_28551 = G__28556;
count__28492_28552 = G__28557;
i__28493_28553 = G__28558;
continue;
} else {
var temp__5804__auto___28559 = cljs.core.seq(seq__28490_28550);
if(temp__5804__auto___28559){
var seq__28490_28560__$1 = temp__5804__auto___28559;
if(cljs.core.chunked_seq_QMARK_(seq__28490_28560__$1)){
var c__4556__auto___28561 = cljs.core.chunk_first(seq__28490_28560__$1);
var G__28562 = cljs.core.chunk_rest(seq__28490_28560__$1);
var G__28563 = c__4556__auto___28561;
var G__28564 = cljs.core.count(c__4556__auto___28561);
var G__28565 = (0);
seq__28490_28550 = G__28562;
chunk__28491_28551 = G__28563;
count__28492_28552 = G__28564;
i__28493_28553 = G__28565;
continue;
} else {
var newk_28566 = cljs.core.first(seq__28490_28560__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28566]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28566)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28566)));


var G__28567 = cljs.core.next(seq__28490_28560__$1);
var G__28568 = null;
var G__28569 = (0);
var G__28570 = (0);
seq__28490_28550 = G__28567;
chunk__28491_28551 = G__28568;
count__28492_28552 = G__28569;
i__28493_28553 = G__28570;
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
var seq__28571_28591 = cljs.core.seq(newv);
var chunk__28572_28592 = null;
var count__28573_28593 = (0);
var i__28574_28594 = (0);
while(true){
if((i__28574_28594 < count__28573_28593)){
var newk_28595 = chunk__28572_28592.cljs$core$IIndexed$_nth$arity$2(null,i__28574_28594);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28595)));


var G__28596 = seq__28571_28591;
var G__28597 = chunk__28572_28592;
var G__28598 = count__28573_28593;
var G__28599 = (i__28574_28594 + (1));
seq__28571_28591 = G__28596;
chunk__28572_28592 = G__28597;
count__28573_28593 = G__28598;
i__28574_28594 = G__28599;
continue;
} else {
var temp__5804__auto___28600 = cljs.core.seq(seq__28571_28591);
if(temp__5804__auto___28600){
var seq__28571_28601__$1 = temp__5804__auto___28600;
if(cljs.core.chunked_seq_QMARK_(seq__28571_28601__$1)){
var c__4556__auto___28602 = cljs.core.chunk_first(seq__28571_28601__$1);
var G__28603 = cljs.core.chunk_rest(seq__28571_28601__$1);
var G__28604 = c__4556__auto___28602;
var G__28605 = cljs.core.count(c__4556__auto___28602);
var G__28606 = (0);
seq__28571_28591 = G__28603;
chunk__28572_28592 = G__28604;
count__28573_28593 = G__28605;
i__28574_28594 = G__28606;
continue;
} else {
var newk_28607 = cljs.core.first(seq__28571_28601__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28607)));


var G__28608 = cljs.core.next(seq__28571_28601__$1);
var G__28609 = null;
var G__28610 = (0);
var G__28611 = (0);
seq__28571_28591 = G__28608;
chunk__28572_28592 = G__28609;
count__28573_28593 = G__28610;
i__28574_28594 = G__28611;
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
var seq__28575 = cljs.core.seq(lost);
var chunk__28576 = null;
var count__28577 = (0);
var i__28578 = (0);
while(true){
if((i__28578 < count__28577)){
var oldk = chunk__28576.cljs$core$IIndexed$_nth$arity$2(null,i__28578);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28612 = seq__28575;
var G__28613 = chunk__28576;
var G__28614 = count__28577;
var G__28615 = (i__28578 + (1));
seq__28575 = G__28612;
chunk__28576 = G__28613;
count__28577 = G__28614;
i__28578 = G__28615;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28575);
if(temp__5804__auto__){
var seq__28575__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28575__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28575__$1);
var G__28616 = cljs.core.chunk_rest(seq__28575__$1);
var G__28617 = c__4556__auto__;
var G__28618 = cljs.core.count(c__4556__auto__);
var G__28619 = (0);
seq__28575 = G__28616;
chunk__28576 = G__28617;
count__28577 = G__28618;
i__28578 = G__28619;
continue;
} else {
var oldk = cljs.core.first(seq__28575__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28620 = cljs.core.next(seq__28575__$1);
var G__28621 = null;
var G__28622 = (0);
var G__28623 = (0);
seq__28575 = G__28620;
chunk__28576 = G__28621;
count__28577 = G__28622;
i__28578 = G__28623;
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
var seq__28579 = cljs.core.seq(gained);
var chunk__28580 = null;
var count__28581 = (0);
var i__28582 = (0);
while(true){
if((i__28582 < count__28581)){
var newk = chunk__28580.cljs$core$IIndexed$_nth$arity$2(null,i__28582);
var new_dom_28624 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28624);


var G__28625 = seq__28579;
var G__28626 = chunk__28580;
var G__28627 = count__28581;
var G__28628 = (i__28582 + (1));
seq__28579 = G__28625;
chunk__28580 = G__28626;
count__28581 = G__28627;
i__28582 = G__28628;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28579);
if(temp__5804__auto__){
var seq__28579__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28579__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28579__$1);
var G__28629 = cljs.core.chunk_rest(seq__28579__$1);
var G__28630 = c__4556__auto__;
var G__28631 = cljs.core.count(c__4556__auto__);
var G__28632 = (0);
seq__28579 = G__28629;
chunk__28580 = G__28630;
count__28581 = G__28631;
i__28582 = G__28632;
continue;
} else {
var newk = cljs.core.first(seq__28579__$1);
var new_dom_28633 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28633);


var G__28634 = cljs.core.next(seq__28579__$1);
var G__28635 = null;
var G__28636 = (0);
var G__28637 = (0);
seq__28579 = G__28634;
chunk__28580 = G__28635;
count__28581 = G__28636;
i__28582 = G__28637;
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
var seq__28583_28638 = cljs.core.seq(lost);
var chunk__28584_28639 = null;
var count__28585_28640 = (0);
var i__28586_28641 = (0);
while(true){
if((i__28586_28641 < count__28585_28640)){
var oldk_28642 = chunk__28584_28639.cljs$core$IIndexed$_nth$arity$2(null,i__28586_28641);
if(typeof oldk_28642 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28642) : tiltontec.cell.evaluate.finalize.call(null,oldk_28642));
}


var G__28643 = seq__28583_28638;
var G__28644 = chunk__28584_28639;
var G__28645 = count__28585_28640;
var G__28646 = (i__28586_28641 + (1));
seq__28583_28638 = G__28643;
chunk__28584_28639 = G__28644;
count__28585_28640 = G__28645;
i__28586_28641 = G__28646;
continue;
} else {
var temp__5804__auto___28647 = cljs.core.seq(seq__28583_28638);
if(temp__5804__auto___28647){
var seq__28583_28648__$1 = temp__5804__auto___28647;
if(cljs.core.chunked_seq_QMARK_(seq__28583_28648__$1)){
var c__4556__auto___28649 = cljs.core.chunk_first(seq__28583_28648__$1);
var G__28650 = cljs.core.chunk_rest(seq__28583_28648__$1);
var G__28651 = c__4556__auto___28649;
var G__28652 = cljs.core.count(c__4556__auto___28649);
var G__28653 = (0);
seq__28583_28638 = G__28650;
chunk__28584_28639 = G__28651;
count__28585_28640 = G__28652;
i__28586_28641 = G__28653;
continue;
} else {
var oldk_28654 = cljs.core.first(seq__28583_28648__$1);
if(typeof oldk_28654 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28654) : tiltontec.cell.evaluate.finalize.call(null,oldk_28654));
}


var G__28655 = cljs.core.next(seq__28583_28648__$1);
var G__28656 = null;
var G__28657 = (0);
var G__28658 = (0);
seq__28583_28638 = G__28655;
chunk__28584_28639 = G__28656;
count__28585_28640 = G__28657;
i__28586_28641 = G__28658;
continue;
}
} else {
}
}
break;
}

var seq__28587_28659 = cljs.core.seq(newv);
var chunk__28588_28660 = null;
var count__28589_28661 = (0);
var i__28590_28662 = (0);
while(true){
if((i__28590_28662 < count__28589_28661)){
var newk_28663 = chunk__28588_28660.cljs$core$IIndexed$_nth$arity$2(null,i__28590_28662);
var new_dom_28664 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28663]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28663)):tiltontec.web_mx.html.svg_dom_create(newk_28663,false));
goog.dom.appendChild(frag,new_dom_28664);


var G__28665 = seq__28587_28659;
var G__28666 = chunk__28588_28660;
var G__28667 = count__28589_28661;
var G__28668 = (i__28590_28662 + (1));
seq__28587_28659 = G__28665;
chunk__28588_28660 = G__28666;
count__28589_28661 = G__28667;
i__28590_28662 = G__28668;
continue;
} else {
var temp__5804__auto___28669 = cljs.core.seq(seq__28587_28659);
if(temp__5804__auto___28669){
var seq__28587_28670__$1 = temp__5804__auto___28669;
if(cljs.core.chunked_seq_QMARK_(seq__28587_28670__$1)){
var c__4556__auto___28671 = cljs.core.chunk_first(seq__28587_28670__$1);
var G__28672 = cljs.core.chunk_rest(seq__28587_28670__$1);
var G__28673 = c__4556__auto___28671;
var G__28674 = cljs.core.count(c__4556__auto___28671);
var G__28675 = (0);
seq__28587_28659 = G__28672;
chunk__28588_28660 = G__28673;
count__28589_28661 = G__28674;
i__28590_28662 = G__28675;
continue;
} else {
var newk_28676 = cljs.core.first(seq__28587_28670__$1);
var new_dom_28677 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28676]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28676)):tiltontec.web_mx.html.svg_dom_create(newk_28676,false));
goog.dom.appendChild(frag,new_dom_28677);


var G__28678 = cljs.core.next(seq__28587_28670__$1);
var G__28679 = null;
var G__28680 = (0);
var G__28681 = (0);
seq__28587_28659 = G__28678;
chunk__28588_28660 = G__28679;
count__28589_28661 = G__28680;
i__28590_28662 = G__28681;
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
var G__28682 = slot;
var G__28682__$1 = (((G__28682 instanceof cljs.core.Keyword))?G__28682.fqn:null);
switch (G__28682__$1) {
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
var G__28683 = dom;
var G__28684 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28683,G__28684);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28686_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28686_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28687_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28687_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28688_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28688_SHARP_,cljs.core.cst$kw$id));
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
var G__28689 = cljs.core.rest(keys);
var G__28690 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28689;
found = G__28690;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28691 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28692 = null;
var count__28693 = (0);
var i__28694 = (0);
while(true){
if((i__28694 < count__28693)){
var key = chunk__28692.cljs$core$IIndexed$_nth$arity$2(null,i__28694);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28695 = seq__28691;
var G__28696 = chunk__28692;
var G__28697 = count__28693;
var G__28698 = (i__28694 + (1));
seq__28691 = G__28695;
chunk__28692 = G__28696;
count__28693 = G__28697;
i__28694 = G__28698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28691);
if(temp__5804__auto__){
var seq__28691__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28691__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28691__$1);
var G__28699 = cljs.core.chunk_rest(seq__28691__$1);
var G__28700 = c__4556__auto__;
var G__28701 = cljs.core.count(c__4556__auto__);
var G__28702 = (0);
seq__28691 = G__28699;
chunk__28692 = G__28700;
count__28693 = G__28701;
i__28694 = G__28702;
continue;
} else {
var key = cljs.core.first(seq__28691__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28703 = cljs.core.next(seq__28691__$1);
var G__28704 = null;
var G__28705 = (0);
var G__28706 = (0);
seq__28691 = G__28703;
chunk__28692 = G__28704;
count__28693 = G__28705;
i__28694 = G__28706;
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

var G__28707 = dom;
var G__28708 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28707,G__28708);
});
