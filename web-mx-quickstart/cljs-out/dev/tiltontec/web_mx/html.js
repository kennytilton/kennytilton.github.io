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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28334(s__28335){
return (new cljs.core.LazySeq(null,(function (){
var s__28335__$1 = s__28335;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28335__$1);
if(temp__5804__auto__){
var s__28335__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28335__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28335__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28337 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28336 = (0);
while(true){
if((i__28336 < size__4528__auto__)){
var vec__28338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28336);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28337,k);

var G__28344 = (i__28336 + (1));
i__28336 = G__28344;
continue;
} else {
var G__28345 = (i__28336 + (1));
i__28336 = G__28345;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28337),tiltontec$web_mx$html$map_less_nils_$_iter__28334(cljs.core.chunk_rest(s__28335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28337),null);
}
} else {
var vec__28341 = cljs.core.first(s__28335__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28341,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28334(cljs.core.rest(s__28335__$2)));
} else {
var G__28346 = cljs.core.rest(s__28335__$2);
s__28335__$1 = G__28346;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28347(s__28348){
return (new cljs.core.LazySeq(null,(function (){
var s__28348__$1 = s__28348;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28348__$1);
if(temp__5804__auto__){
var s__28348__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28348__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28348__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28350 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28349 = (0);
while(true){
if((i__28349 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28349);
cljs.core.chunk_append(b__28350,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28351 = k;
var G__28351__$1 = (((G__28351 instanceof cljs.core.Keyword))?G__28351.fqn:null);
switch (G__28351__$1) {
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

var G__28354 = (i__28349 + (1));
i__28349 = G__28354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28350),tiltontec$web_mx$html$tag_properties_$_iter__28347(cljs.core.chunk_rest(s__28348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28350),null);
}
} else {
var k = cljs.core.first(s__28348__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28347(cljs.core.rest(s__28348__$2)));
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

var seq__28356_28370 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28358_28371 = null;
var count__28359_28372 = (0);
var i__28360_28373 = (0);
while(true){
if((i__28360_28373 < count__28359_28372)){
var ak_28374 = chunk__28358_28371.cljs$core$IIndexed$_nth$arity$2(null,i__28360_28373);
var ak$_28375 = cljs.core.name(ak_28374);
var av_28376 = (function (){var G__28364 = cljs.core.deref(me);
return (ak_28374.cljs$core$IFn$_invoke$arity$1 ? ak_28374.cljs$core$IFn$_invoke$arity$1(G__28364) : ak_28374.call(null,G__28364));
})();
if(cljs.core.fn_QMARK_(av_28376)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28375,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28375,(2)):ak$_28375),av_28376);
} else {
svg.setAttributeNS(null,ak$_28375,tiltontec.web_mx.base.attr_val$(av_28376));
}


var G__28377 = seq__28356_28370;
var G__28378 = chunk__28358_28371;
var G__28379 = count__28359_28372;
var G__28380 = (i__28360_28373 + (1));
seq__28356_28370 = G__28377;
chunk__28358_28371 = G__28378;
count__28359_28372 = G__28379;
i__28360_28373 = G__28380;
continue;
} else {
var temp__5804__auto___28381 = cljs.core.seq(seq__28356_28370);
if(temp__5804__auto___28381){
var seq__28356_28382__$1 = temp__5804__auto___28381;
if(cljs.core.chunked_seq_QMARK_(seq__28356_28382__$1)){
var c__4556__auto___28383 = cljs.core.chunk_first(seq__28356_28382__$1);
var G__28384 = cljs.core.chunk_rest(seq__28356_28382__$1);
var G__28385 = c__4556__auto___28383;
var G__28386 = cljs.core.count(c__4556__auto___28383);
var G__28387 = (0);
seq__28356_28370 = G__28384;
chunk__28358_28371 = G__28385;
count__28359_28372 = G__28386;
i__28360_28373 = G__28387;
continue;
} else {
var ak_28388 = cljs.core.first(seq__28356_28382__$1);
var ak$_28389 = cljs.core.name(ak_28388);
var av_28390 = (function (){var G__28365 = cljs.core.deref(me);
return (ak_28388.cljs$core$IFn$_invoke$arity$1 ? ak_28388.cljs$core$IFn$_invoke$arity$1(G__28365) : ak_28388.call(null,G__28365));
})();
if(cljs.core.fn_QMARK_(av_28390)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28389,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28389,(2)):ak$_28389),av_28390);
} else {
svg.setAttributeNS(null,ak$_28389,tiltontec.web_mx.base.attr_val$(av_28390));
}


var G__28391 = cljs.core.next(seq__28356_28382__$1);
var G__28392 = null;
var G__28393 = (0);
var G__28394 = (0);
seq__28356_28370 = G__28391;
chunk__28358_28371 = G__28392;
count__28359_28372 = G__28393;
i__28360_28373 = G__28394;
continue;
}
} else {
}
}
break;
}

var seq__28366_28395 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28367_28396 = null;
var count__28368_28397 = (0);
var i__28369_28398 = (0);
while(true){
if((i__28369_28398 < count__28368_28397)){
var kid_28399 = chunk__28367_28396.cljs$core$IIndexed$_nth$arity$2(null,i__28369_28398);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28399,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28399,dbg)));


var G__28400 = seq__28366_28395;
var G__28401 = chunk__28367_28396;
var G__28402 = count__28368_28397;
var G__28403 = (i__28369_28398 + (1));
seq__28366_28395 = G__28400;
chunk__28367_28396 = G__28401;
count__28368_28397 = G__28402;
i__28369_28398 = G__28403;
continue;
} else {
var temp__5804__auto___28404 = cljs.core.seq(seq__28366_28395);
if(temp__5804__auto___28404){
var seq__28366_28405__$1 = temp__5804__auto___28404;
if(cljs.core.chunked_seq_QMARK_(seq__28366_28405__$1)){
var c__4556__auto___28406 = cljs.core.chunk_first(seq__28366_28405__$1);
var G__28407 = cljs.core.chunk_rest(seq__28366_28405__$1);
var G__28408 = c__4556__auto___28406;
var G__28409 = cljs.core.count(c__4556__auto___28406);
var G__28410 = (0);
seq__28366_28395 = G__28407;
chunk__28367_28396 = G__28408;
count__28368_28397 = G__28409;
i__28369_28398 = G__28410;
continue;
} else {
var kid_28411 = cljs.core.first(seq__28366_28405__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28411,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28411,dbg)));


var G__28412 = cljs.core.next(seq__28366_28405__$1);
var G__28413 = null;
var G__28414 = (0);
var G__28415 = (0);
seq__28366_28395 = G__28412;
chunk__28367_28396 = G__28413;
count__28368_28397 = G__28414;
i__28369_28398 = G__28415;
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
var G__28418 = arguments.length;
switch (G__28418) {
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
var seq__28419_28428 = cljs.core.seq(me);
var chunk__28420_28429 = null;
var count__28421_28430 = (0);
var i__28422_28431 = (0);
while(true){
if((i__28422_28431 < count__28421_28430)){
var tag_28432 = chunk__28420_28429.cljs$core$IIndexed$_nth$arity$2(null,i__28422_28431);
if(cljs.core.truth_(tag_28432)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28432));
} else {
}


var G__28433 = seq__28419_28428;
var G__28434 = chunk__28420_28429;
var G__28435 = count__28421_28430;
var G__28436 = (i__28422_28431 + (1));
seq__28419_28428 = G__28433;
chunk__28420_28429 = G__28434;
count__28421_28430 = G__28435;
i__28422_28431 = G__28436;
continue;
} else {
var temp__5804__auto___28437 = cljs.core.seq(seq__28419_28428);
if(temp__5804__auto___28437){
var seq__28419_28438__$1 = temp__5804__auto___28437;
if(cljs.core.chunked_seq_QMARK_(seq__28419_28438__$1)){
var c__4556__auto___28439 = cljs.core.chunk_first(seq__28419_28438__$1);
var G__28440 = cljs.core.chunk_rest(seq__28419_28438__$1);
var G__28441 = c__4556__auto___28439;
var G__28442 = cljs.core.count(c__4556__auto___28439);
var G__28443 = (0);
seq__28419_28428 = G__28440;
chunk__28420_28429 = G__28441;
count__28421_28430 = G__28442;
i__28422_28431 = G__28443;
continue;
} else {
var tag_28444 = cljs.core.first(seq__28419_28438__$1);
if(cljs.core.truth_(tag_28444)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28444));
} else {
}


var G__28445 = cljs.core.next(seq__28419_28438__$1);
var G__28446 = null;
var G__28447 = (0);
var G__28448 = (0);
seq__28419_28428 = G__28445;
chunk__28420_28429 = G__28446;
count__28421_28430 = G__28447;
i__28422_28431 = G__28448;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28416_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28416_SHARP_,dbg);
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
var temp__5804__auto___28449 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28449)){
var list_id_28450 = temp__5804__auto___28449;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28450));
} else {
}
} else {
}

var seq__28423_28451 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28424_28452 = null;
var count__28425_28453 = (0);
var i__28426_28454 = (0);
while(true){
if((i__28426_28454 < count__28425_28453)){
var attr_key_28455 = chunk__28424_28452.cljs$core$IIndexed$_nth$arity$2(null,i__28426_28454);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28455),"-")){
var temp__5804__auto___28456 = tiltontec.model.core.mget(me,attr_key_28455);
if(cljs.core.truth_(temp__5804__auto___28456)){
var attr_val_28457 = temp__5804__auto___28456;
dom.setAttribute(cljs.core.name(attr_key_28455),tiltontec.web_mx.base.attr_val$(attr_val_28457));
} else {
}
} else {
}


var G__28458 = seq__28423_28451;
var G__28459 = chunk__28424_28452;
var G__28460 = count__28425_28453;
var G__28461 = (i__28426_28454 + (1));
seq__28423_28451 = G__28458;
chunk__28424_28452 = G__28459;
count__28425_28453 = G__28460;
i__28426_28454 = G__28461;
continue;
} else {
var temp__5804__auto___28462 = cljs.core.seq(seq__28423_28451);
if(temp__5804__auto___28462){
var seq__28423_28463__$1 = temp__5804__auto___28462;
if(cljs.core.chunked_seq_QMARK_(seq__28423_28463__$1)){
var c__4556__auto___28464 = cljs.core.chunk_first(seq__28423_28463__$1);
var G__28465 = cljs.core.chunk_rest(seq__28423_28463__$1);
var G__28466 = c__4556__auto___28464;
var G__28467 = cljs.core.count(c__4556__auto___28464);
var G__28468 = (0);
seq__28423_28451 = G__28465;
chunk__28424_28452 = G__28466;
count__28425_28453 = G__28467;
i__28426_28454 = G__28468;
continue;
} else {
var attr_key_28469 = cljs.core.first(seq__28423_28463__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28469),"-")){
var temp__5804__auto___28470__$1 = tiltontec.model.core.mget(me,attr_key_28469);
if(cljs.core.truth_(temp__5804__auto___28470__$1)){
var attr_val_28471 = temp__5804__auto___28470__$1;
dom.setAttribute(cljs.core.name(attr_key_28469),tiltontec.web_mx.base.attr_val$(attr_val_28471));
} else {
}
} else {
}


var G__28472 = cljs.core.next(seq__28423_28463__$1);
var G__28473 = null;
var G__28474 = (0);
var G__28475 = (0);
seq__28423_28451 = G__28472;
chunk__28424_28452 = G__28473;
count__28425_28453 = G__28474;
i__28426_28454 = G__28475;
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
var seq__28476_28496 = cljs.core.seq(newv);
var chunk__28477_28497 = null;
var count__28478_28498 = (0);
var i__28479_28499 = (0);
while(true){
if((i__28479_28499 < count__28478_28498)){
var newk_28500 = chunk__28477_28497.cljs$core$IIndexed$_nth$arity$2(null,i__28479_28499);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28500)));


var G__28501 = seq__28476_28496;
var G__28502 = chunk__28477_28497;
var G__28503 = count__28478_28498;
var G__28504 = (i__28479_28499 + (1));
seq__28476_28496 = G__28501;
chunk__28477_28497 = G__28502;
count__28478_28498 = G__28503;
i__28479_28499 = G__28504;
continue;
} else {
var temp__5804__auto___28505 = cljs.core.seq(seq__28476_28496);
if(temp__5804__auto___28505){
var seq__28476_28506__$1 = temp__5804__auto___28505;
if(cljs.core.chunked_seq_QMARK_(seq__28476_28506__$1)){
var c__4556__auto___28507 = cljs.core.chunk_first(seq__28476_28506__$1);
var G__28508 = cljs.core.chunk_rest(seq__28476_28506__$1);
var G__28509 = c__4556__auto___28507;
var G__28510 = cljs.core.count(c__4556__auto___28507);
var G__28511 = (0);
seq__28476_28496 = G__28508;
chunk__28477_28497 = G__28509;
count__28478_28498 = G__28510;
i__28479_28499 = G__28511;
continue;
} else {
var newk_28512 = cljs.core.first(seq__28476_28506__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28512)));


var G__28513 = cljs.core.next(seq__28476_28506__$1);
var G__28514 = null;
var G__28515 = (0);
var G__28516 = (0);
seq__28476_28496 = G__28513;
chunk__28477_28497 = G__28514;
count__28478_28498 = G__28515;
i__28479_28499 = G__28516;
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
var seq__28480 = cljs.core.seq(lost);
var chunk__28481 = null;
var count__28482 = (0);
var i__28483 = (0);
while(true){
if((i__28483 < count__28482)){
var oldk = chunk__28481.cljs$core$IIndexed$_nth$arity$2(null,i__28483);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28486){if((e28486 instanceof Error)){
var e_28517 = e28486;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28517], 0));

} else {
throw e28486;

}
}}


var G__28518 = seq__28480;
var G__28519 = chunk__28481;
var G__28520 = count__28482;
var G__28521 = (i__28483 + (1));
seq__28480 = G__28518;
chunk__28481 = G__28519;
count__28482 = G__28520;
i__28483 = G__28521;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28480);
if(temp__5804__auto__){
var seq__28480__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28480__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28480__$1);
var G__28522 = cljs.core.chunk_rest(seq__28480__$1);
var G__28523 = c__4556__auto__;
var G__28524 = cljs.core.count(c__4556__auto__);
var G__28525 = (0);
seq__28480 = G__28522;
chunk__28481 = G__28523;
count__28482 = G__28524;
i__28483 = G__28525;
continue;
} else {
var oldk = cljs.core.first(seq__28480__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28487){if((e28487 instanceof Error)){
var e_28526 = e28487;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28526], 0));

} else {
throw e28487;

}
}}


var G__28527 = cljs.core.next(seq__28480__$1);
var G__28528 = null;
var G__28529 = (0);
var G__28530 = (0);
seq__28480 = G__28527;
chunk__28481 = G__28528;
count__28482 = G__28529;
i__28483 = G__28530;
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
var seq__28488_28531 = cljs.core.seq(lost);
var chunk__28489_28532 = null;
var count__28490_28533 = (0);
var i__28491_28534 = (0);
while(true){
if((i__28491_28534 < count__28490_28533)){
var oldk_28535 = chunk__28489_28532.cljs$core$IIndexed$_nth$arity$2(null,i__28491_28534);
if(typeof oldk_28535 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28535) : tiltontec.cell.evaluate.finalize.call(null,oldk_28535));
}


var G__28536 = seq__28488_28531;
var G__28537 = chunk__28489_28532;
var G__28538 = count__28490_28533;
var G__28539 = (i__28491_28534 + (1));
seq__28488_28531 = G__28536;
chunk__28489_28532 = G__28537;
count__28490_28533 = G__28538;
i__28491_28534 = G__28539;
continue;
} else {
var temp__5804__auto___28540 = cljs.core.seq(seq__28488_28531);
if(temp__5804__auto___28540){
var seq__28488_28541__$1 = temp__5804__auto___28540;
if(cljs.core.chunked_seq_QMARK_(seq__28488_28541__$1)){
var c__4556__auto___28542 = cljs.core.chunk_first(seq__28488_28541__$1);
var G__28543 = cljs.core.chunk_rest(seq__28488_28541__$1);
var G__28544 = c__4556__auto___28542;
var G__28545 = cljs.core.count(c__4556__auto___28542);
var G__28546 = (0);
seq__28488_28531 = G__28543;
chunk__28489_28532 = G__28544;
count__28490_28533 = G__28545;
i__28491_28534 = G__28546;
continue;
} else {
var oldk_28547 = cljs.core.first(seq__28488_28541__$1);
if(typeof oldk_28547 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28547) : tiltontec.cell.evaluate.finalize.call(null,oldk_28547));
}


var G__28548 = cljs.core.next(seq__28488_28541__$1);
var G__28549 = null;
var G__28550 = (0);
var G__28551 = (0);
seq__28488_28531 = G__28548;
chunk__28489_28532 = G__28549;
count__28490_28533 = G__28550;
i__28491_28534 = G__28551;
continue;
}
} else {
}
}
break;
}

var seq__28492_28552 = cljs.core.seq(newv);
var chunk__28493_28553 = null;
var count__28494_28554 = (0);
var i__28495_28555 = (0);
while(true){
if((i__28495_28555 < count__28494_28554)){
var newk_28556 = chunk__28493_28553.cljs$core$IIndexed$_nth$arity$2(null,i__28495_28555);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28556]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28556)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28556)));


var G__28557 = seq__28492_28552;
var G__28558 = chunk__28493_28553;
var G__28559 = count__28494_28554;
var G__28560 = (i__28495_28555 + (1));
seq__28492_28552 = G__28557;
chunk__28493_28553 = G__28558;
count__28494_28554 = G__28559;
i__28495_28555 = G__28560;
continue;
} else {
var temp__5804__auto___28561 = cljs.core.seq(seq__28492_28552);
if(temp__5804__auto___28561){
var seq__28492_28562__$1 = temp__5804__auto___28561;
if(cljs.core.chunked_seq_QMARK_(seq__28492_28562__$1)){
var c__4556__auto___28563 = cljs.core.chunk_first(seq__28492_28562__$1);
var G__28564 = cljs.core.chunk_rest(seq__28492_28562__$1);
var G__28565 = c__4556__auto___28563;
var G__28566 = cljs.core.count(c__4556__auto___28563);
var G__28567 = (0);
seq__28492_28552 = G__28564;
chunk__28493_28553 = G__28565;
count__28494_28554 = G__28566;
i__28495_28555 = G__28567;
continue;
} else {
var newk_28568 = cljs.core.first(seq__28492_28562__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28568]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28568)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28568)));


var G__28569 = cljs.core.next(seq__28492_28562__$1);
var G__28570 = null;
var G__28571 = (0);
var G__28572 = (0);
seq__28492_28552 = G__28569;
chunk__28493_28553 = G__28570;
count__28494_28554 = G__28571;
i__28495_28555 = G__28572;
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
var seq__28573_28593 = cljs.core.seq(newv);
var chunk__28574_28594 = null;
var count__28575_28595 = (0);
var i__28576_28596 = (0);
while(true){
if((i__28576_28596 < count__28575_28595)){
var newk_28597 = chunk__28574_28594.cljs$core$IIndexed$_nth$arity$2(null,i__28576_28596);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28597)));


var G__28598 = seq__28573_28593;
var G__28599 = chunk__28574_28594;
var G__28600 = count__28575_28595;
var G__28601 = (i__28576_28596 + (1));
seq__28573_28593 = G__28598;
chunk__28574_28594 = G__28599;
count__28575_28595 = G__28600;
i__28576_28596 = G__28601;
continue;
} else {
var temp__5804__auto___28602 = cljs.core.seq(seq__28573_28593);
if(temp__5804__auto___28602){
var seq__28573_28603__$1 = temp__5804__auto___28602;
if(cljs.core.chunked_seq_QMARK_(seq__28573_28603__$1)){
var c__4556__auto___28604 = cljs.core.chunk_first(seq__28573_28603__$1);
var G__28605 = cljs.core.chunk_rest(seq__28573_28603__$1);
var G__28606 = c__4556__auto___28604;
var G__28607 = cljs.core.count(c__4556__auto___28604);
var G__28608 = (0);
seq__28573_28593 = G__28605;
chunk__28574_28594 = G__28606;
count__28575_28595 = G__28607;
i__28576_28596 = G__28608;
continue;
} else {
var newk_28609 = cljs.core.first(seq__28573_28603__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28609)));


var G__28610 = cljs.core.next(seq__28573_28603__$1);
var G__28611 = null;
var G__28612 = (0);
var G__28613 = (0);
seq__28573_28593 = G__28610;
chunk__28574_28594 = G__28611;
count__28575_28595 = G__28612;
i__28576_28596 = G__28613;
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
var seq__28577 = cljs.core.seq(lost);
var chunk__28578 = null;
var count__28579 = (0);
var i__28580 = (0);
while(true){
if((i__28580 < count__28579)){
var oldk = chunk__28578.cljs$core$IIndexed$_nth$arity$2(null,i__28580);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28614 = seq__28577;
var G__28615 = chunk__28578;
var G__28616 = count__28579;
var G__28617 = (i__28580 + (1));
seq__28577 = G__28614;
chunk__28578 = G__28615;
count__28579 = G__28616;
i__28580 = G__28617;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28577);
if(temp__5804__auto__){
var seq__28577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28577__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28577__$1);
var G__28618 = cljs.core.chunk_rest(seq__28577__$1);
var G__28619 = c__4556__auto__;
var G__28620 = cljs.core.count(c__4556__auto__);
var G__28621 = (0);
seq__28577 = G__28618;
chunk__28578 = G__28619;
count__28579 = G__28620;
i__28580 = G__28621;
continue;
} else {
var oldk = cljs.core.first(seq__28577__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28622 = cljs.core.next(seq__28577__$1);
var G__28623 = null;
var G__28624 = (0);
var G__28625 = (0);
seq__28577 = G__28622;
chunk__28578 = G__28623;
count__28579 = G__28624;
i__28580 = G__28625;
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
var seq__28581 = cljs.core.seq(gained);
var chunk__28582 = null;
var count__28583 = (0);
var i__28584 = (0);
while(true){
if((i__28584 < count__28583)){
var newk = chunk__28582.cljs$core$IIndexed$_nth$arity$2(null,i__28584);
var new_dom_28626 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28626);


var G__28627 = seq__28581;
var G__28628 = chunk__28582;
var G__28629 = count__28583;
var G__28630 = (i__28584 + (1));
seq__28581 = G__28627;
chunk__28582 = G__28628;
count__28583 = G__28629;
i__28584 = G__28630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28581);
if(temp__5804__auto__){
var seq__28581__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28581__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28581__$1);
var G__28631 = cljs.core.chunk_rest(seq__28581__$1);
var G__28632 = c__4556__auto__;
var G__28633 = cljs.core.count(c__4556__auto__);
var G__28634 = (0);
seq__28581 = G__28631;
chunk__28582 = G__28632;
count__28583 = G__28633;
i__28584 = G__28634;
continue;
} else {
var newk = cljs.core.first(seq__28581__$1);
var new_dom_28635 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28635);


var G__28636 = cljs.core.next(seq__28581__$1);
var G__28637 = null;
var G__28638 = (0);
var G__28639 = (0);
seq__28581 = G__28636;
chunk__28582 = G__28637;
count__28583 = G__28638;
i__28584 = G__28639;
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
var seq__28585_28640 = cljs.core.seq(lost);
var chunk__28586_28641 = null;
var count__28587_28642 = (0);
var i__28588_28643 = (0);
while(true){
if((i__28588_28643 < count__28587_28642)){
var oldk_28644 = chunk__28586_28641.cljs$core$IIndexed$_nth$arity$2(null,i__28588_28643);
if(typeof oldk_28644 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28644) : tiltontec.cell.evaluate.finalize.call(null,oldk_28644));
}


var G__28645 = seq__28585_28640;
var G__28646 = chunk__28586_28641;
var G__28647 = count__28587_28642;
var G__28648 = (i__28588_28643 + (1));
seq__28585_28640 = G__28645;
chunk__28586_28641 = G__28646;
count__28587_28642 = G__28647;
i__28588_28643 = G__28648;
continue;
} else {
var temp__5804__auto___28649 = cljs.core.seq(seq__28585_28640);
if(temp__5804__auto___28649){
var seq__28585_28650__$1 = temp__5804__auto___28649;
if(cljs.core.chunked_seq_QMARK_(seq__28585_28650__$1)){
var c__4556__auto___28651 = cljs.core.chunk_first(seq__28585_28650__$1);
var G__28652 = cljs.core.chunk_rest(seq__28585_28650__$1);
var G__28653 = c__4556__auto___28651;
var G__28654 = cljs.core.count(c__4556__auto___28651);
var G__28655 = (0);
seq__28585_28640 = G__28652;
chunk__28586_28641 = G__28653;
count__28587_28642 = G__28654;
i__28588_28643 = G__28655;
continue;
} else {
var oldk_28656 = cljs.core.first(seq__28585_28650__$1);
if(typeof oldk_28656 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28656) : tiltontec.cell.evaluate.finalize.call(null,oldk_28656));
}


var G__28657 = cljs.core.next(seq__28585_28650__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__28585_28640 = G__28657;
chunk__28586_28641 = G__28658;
count__28587_28642 = G__28659;
i__28588_28643 = G__28660;
continue;
}
} else {
}
}
break;
}

var seq__28589_28661 = cljs.core.seq(newv);
var chunk__28590_28662 = null;
var count__28591_28663 = (0);
var i__28592_28664 = (0);
while(true){
if((i__28592_28664 < count__28591_28663)){
var newk_28665 = chunk__28590_28662.cljs$core$IIndexed$_nth$arity$2(null,i__28592_28664);
var new_dom_28666 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28665]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28665)):tiltontec.web_mx.html.svg_dom_create(newk_28665,false));
goog.dom.appendChild(frag,new_dom_28666);


var G__28667 = seq__28589_28661;
var G__28668 = chunk__28590_28662;
var G__28669 = count__28591_28663;
var G__28670 = (i__28592_28664 + (1));
seq__28589_28661 = G__28667;
chunk__28590_28662 = G__28668;
count__28591_28663 = G__28669;
i__28592_28664 = G__28670;
continue;
} else {
var temp__5804__auto___28671 = cljs.core.seq(seq__28589_28661);
if(temp__5804__auto___28671){
var seq__28589_28672__$1 = temp__5804__auto___28671;
if(cljs.core.chunked_seq_QMARK_(seq__28589_28672__$1)){
var c__4556__auto___28673 = cljs.core.chunk_first(seq__28589_28672__$1);
var G__28674 = cljs.core.chunk_rest(seq__28589_28672__$1);
var G__28675 = c__4556__auto___28673;
var G__28676 = cljs.core.count(c__4556__auto___28673);
var G__28677 = (0);
seq__28589_28661 = G__28674;
chunk__28590_28662 = G__28675;
count__28591_28663 = G__28676;
i__28592_28664 = G__28677;
continue;
} else {
var newk_28678 = cljs.core.first(seq__28589_28672__$1);
var new_dom_28679 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28678]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28678)):tiltontec.web_mx.html.svg_dom_create(newk_28678,false));
goog.dom.appendChild(frag,new_dom_28679);


var G__28680 = cljs.core.next(seq__28589_28672__$1);
var G__28681 = null;
var G__28682 = (0);
var G__28683 = (0);
seq__28589_28661 = G__28680;
chunk__28590_28662 = G__28681;
count__28591_28663 = G__28682;
i__28592_28664 = G__28683;
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
var G__28684 = slot;
var G__28684__$1 = (((G__28684 instanceof cljs.core.Keyword))?G__28684.fqn:null);
switch (G__28684__$1) {
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
var G__28685 = dom;
var G__28686 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28685,G__28686);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28688_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28688_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28689_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28689_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28690_SHARP_,cljs.core.cst$kw$id));
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
var G__28691 = cljs.core.rest(keys);
var G__28692 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28691;
found = G__28692;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28693 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28694 = null;
var count__28695 = (0);
var i__28696 = (0);
while(true){
if((i__28696 < count__28695)){
var key = chunk__28694.cljs$core$IIndexed$_nth$arity$2(null,i__28696);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28697 = seq__28693;
var G__28698 = chunk__28694;
var G__28699 = count__28695;
var G__28700 = (i__28696 + (1));
seq__28693 = G__28697;
chunk__28694 = G__28698;
count__28695 = G__28699;
i__28696 = G__28700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28693);
if(temp__5804__auto__){
var seq__28693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28693__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28693__$1);
var G__28701 = cljs.core.chunk_rest(seq__28693__$1);
var G__28702 = c__4556__auto__;
var G__28703 = cljs.core.count(c__4556__auto__);
var G__28704 = (0);
seq__28693 = G__28701;
chunk__28694 = G__28702;
count__28695 = G__28703;
i__28696 = G__28704;
continue;
} else {
var key = cljs.core.first(seq__28693__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28705 = cljs.core.next(seq__28693__$1);
var G__28706 = null;
var G__28707 = (0);
var G__28708 = (0);
seq__28693 = G__28705;
chunk__28694 = G__28706;
count__28695 = G__28707;
i__28696 = G__28708;
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

var G__28709 = dom;
var G__28710 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28709,G__28710);
});
