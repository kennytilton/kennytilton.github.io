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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__28314(s__28315){
return (new cljs.core.LazySeq(null,(function (){
var s__28315__$1 = s__28315;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28315__$1);
if(temp__5804__auto__){
var s__28315__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28315__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28315__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28317 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28316 = (0);
while(true){
if((i__28316 < size__4528__auto__)){
var vec__28318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28316);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28318,(1),null);
if((v == null)){
cljs.core.chunk_append(b__28317,k);

var G__28324 = (i__28316 + (1));
i__28316 = G__28324;
continue;
} else {
var G__28325 = (i__28316 + (1));
i__28316 = G__28325;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28317),tiltontec$web_mx$html$map_less_nils_$_iter__28314(cljs.core.chunk_rest(s__28315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28317),null);
}
} else {
var vec__28321 = cljs.core.first(s__28315__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28321,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__28314(cljs.core.rest(s__28315__$2)));
} else {
var G__28326 = cljs.core.rest(s__28315__$2);
s__28315__$1 = G__28326;
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
var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__28327(s__28328){
return (new cljs.core.LazySeq(null,(function (){
var s__28328__$1 = s__28328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28328__$1);
if(temp__5804__auto__){
var s__28328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28328__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28328__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28330 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28329 = (0);
while(true){
if((i__28329 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28329);
cljs.core.chunk_append(b__28330,(function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28331 = k;
var G__28331__$1 = (((G__28331 instanceof cljs.core.Keyword))?G__28331.fqn:null);
switch (G__28331__$1) {
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

var G__28334 = (i__28329 + (1));
i__28329 = G__28334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28330),tiltontec$web_mx$html$tag_properties_$_iter__28327(cljs.core.chunk_rest(s__28328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28330),null);
}
} else {
var k = cljs.core.first(s__28328__$2);
return cljs.core.cons((function (){var temp__5804__auto____$1 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:tiltontec.model.core.mget(mx,k));
if(cljs.core.truth_(temp__5804__auto____$1)){
var v = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__28332 = k;
var G__28332__$1 = (((G__28332 instanceof cljs.core.Keyword))?G__28332.fqn:null);
switch (G__28332__$1) {
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
})(),tiltontec$web_mx$html$tag_properties_$_iter__28327(cljs.core.rest(s__28328__$2)));
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

var seq__28336_28350 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28338_28351 = null;
var count__28339_28352 = (0);
var i__28340_28353 = (0);
while(true){
if((i__28340_28353 < count__28339_28352)){
var ak_28354 = chunk__28338_28351.cljs$core$IIndexed$_nth$arity$2(null,i__28340_28353);
var ak$_28355 = cljs.core.name(ak_28354);
var av_28356 = (function (){var G__28344 = cljs.core.deref(me);
return (ak_28354.cljs$core$IFn$_invoke$arity$1 ? ak_28354.cljs$core$IFn$_invoke$arity$1(G__28344) : ak_28354.call(null,G__28344));
})();
if(cljs.core.fn_QMARK_(av_28356)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28355,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28355,(2)):ak$_28355),av_28356);
} else {
svg.setAttributeNS(null,ak$_28355,tiltontec.web_mx.base.attr_val$(av_28356));
}


var G__28357 = seq__28336_28350;
var G__28358 = chunk__28338_28351;
var G__28359 = count__28339_28352;
var G__28360 = (i__28340_28353 + (1));
seq__28336_28350 = G__28357;
chunk__28338_28351 = G__28358;
count__28339_28352 = G__28359;
i__28340_28353 = G__28360;
continue;
} else {
var temp__5804__auto___28361 = cljs.core.seq(seq__28336_28350);
if(temp__5804__auto___28361){
var seq__28336_28362__$1 = temp__5804__auto___28361;
if(cljs.core.chunked_seq_QMARK_(seq__28336_28362__$1)){
var c__4556__auto___28363 = cljs.core.chunk_first(seq__28336_28362__$1);
var G__28364 = cljs.core.chunk_rest(seq__28336_28362__$1);
var G__28365 = c__4556__auto___28363;
var G__28366 = cljs.core.count(c__4556__auto___28363);
var G__28367 = (0);
seq__28336_28350 = G__28364;
chunk__28338_28351 = G__28365;
count__28339_28352 = G__28366;
i__28340_28353 = G__28367;
continue;
} else {
var ak_28368 = cljs.core.first(seq__28336_28362__$1);
var ak$_28369 = cljs.core.name(ak_28368);
var av_28370 = (function (){var G__28345 = cljs.core.deref(me);
return (ak_28368.cljs$core$IFn$_invoke$arity$1 ? ak_28368.cljs$core$IFn$_invoke$arity$1(G__28345) : ak_28368.call(null,G__28345));
})();
if(cljs.core.fn_QMARK_(av_28370)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_28369,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_28369,(2)):ak$_28369),av_28370);
} else {
svg.setAttributeNS(null,ak$_28369,tiltontec.web_mx.base.attr_val$(av_28370));
}


var G__28371 = cljs.core.next(seq__28336_28362__$1);
var G__28372 = null;
var G__28373 = (0);
var G__28374 = (0);
seq__28336_28350 = G__28371;
chunk__28338_28351 = G__28372;
count__28339_28352 = G__28373;
i__28340_28353 = G__28374;
continue;
}
} else {
}
}
break;
}

var seq__28346_28375 = cljs.core.seq(tiltontec.model.core.mget(me,cljs.core.cst$kw$kids));
var chunk__28347_28376 = null;
var count__28348_28377 = (0);
var i__28349_28378 = (0);
while(true){
if((i__28349_28378 < count__28348_28377)){
var kid_28379 = chunk__28347_28376.cljs$core$IIndexed$_nth$arity$2(null,i__28349_28378);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28379,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28379,dbg)));


var G__28380 = seq__28346_28375;
var G__28381 = chunk__28347_28376;
var G__28382 = count__28348_28377;
var G__28383 = (i__28349_28378 + (1));
seq__28346_28375 = G__28380;
chunk__28347_28376 = G__28381;
count__28348_28377 = G__28382;
i__28349_28378 = G__28383;
continue;
} else {
var temp__5804__auto___28384 = cljs.core.seq(seq__28346_28375);
if(temp__5804__auto___28384){
var seq__28346_28385__$1 = temp__5804__auto___28384;
if(cljs.core.chunked_seq_QMARK_(seq__28346_28385__$1)){
var c__4556__auto___28386 = cljs.core.chunk_first(seq__28346_28385__$1);
var G__28387 = cljs.core.chunk_rest(seq__28346_28385__$1);
var G__28388 = c__4556__auto___28386;
var G__28389 = cljs.core.count(c__4556__auto___28386);
var G__28390 = (0);
seq__28346_28375 = G__28387;
chunk__28347_28376 = G__28388;
count__28348_28377 = G__28389;
i__28349_28378 = G__28390;
continue;
} else {
var kid_28391 = cljs.core.first(seq__28346_28385__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_28391,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_28391,dbg)));


var G__28392 = cljs.core.next(seq__28346_28385__$1);
var G__28393 = null;
var G__28394 = (0);
var G__28395 = (0);
seq__28346_28375 = G__28392;
chunk__28347_28376 = G__28393;
count__28348_28377 = G__28394;
i__28349_28378 = G__28395;
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
var G__28398 = arguments.length;
switch (G__28398) {
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
var seq__28399_28408 = cljs.core.seq(me);
var chunk__28400_28409 = null;
var count__28401_28410 = (0);
var i__28402_28411 = (0);
while(true){
if((i__28402_28411 < count__28401_28410)){
var tag_28412 = chunk__28400_28409.cljs$core$IIndexed$_nth$arity$2(null,i__28402_28411);
if(cljs.core.truth_(tag_28412)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28412));
} else {
}


var G__28413 = seq__28399_28408;
var G__28414 = chunk__28400_28409;
var G__28415 = count__28401_28410;
var G__28416 = (i__28402_28411 + (1));
seq__28399_28408 = G__28413;
chunk__28400_28409 = G__28414;
count__28401_28410 = G__28415;
i__28402_28411 = G__28416;
continue;
} else {
var temp__5804__auto___28417 = cljs.core.seq(seq__28399_28408);
if(temp__5804__auto___28417){
var seq__28399_28418__$1 = temp__5804__auto___28417;
if(cljs.core.chunked_seq_QMARK_(seq__28399_28418__$1)){
var c__4556__auto___28419 = cljs.core.chunk_first(seq__28399_28418__$1);
var G__28420 = cljs.core.chunk_rest(seq__28399_28418__$1);
var G__28421 = c__4556__auto___28419;
var G__28422 = cljs.core.count(c__4556__auto___28419);
var G__28423 = (0);
seq__28399_28408 = G__28420;
chunk__28400_28409 = G__28421;
count__28401_28410 = G__28422;
i__28402_28411 = G__28423;
continue;
} else {
var tag_28424 = cljs.core.first(seq__28399_28418__$1);
if(cljs.core.truth_(tag_28424)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_28424));
} else {
}


var G__28425 = cljs.core.next(seq__28399_28418__$1);
var G__28426 = null;
var G__28427 = (0);
var G__28428 = (0);
seq__28399_28408 = G__28425;
chunk__28400_28409 = G__28426;
count__28401_28410 = G__28427;
i__28402_28411 = G__28428;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.model.core.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28396_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__28396_SHARP_,dbg);
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
var temp__5804__auto___28429 = tiltontec.model.core.mget(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___28429)){
var list_id_28430 = temp__5804__auto___28429;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_28430));
} else {
}
} else {
}

var seq__28403_28431 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__28404_28432 = null;
var count__28405_28433 = (0);
var i__28406_28434 = (0);
while(true){
if((i__28406_28434 < count__28405_28433)){
var attr_key_28435 = chunk__28404_28432.cljs$core$IIndexed$_nth$arity$2(null,i__28406_28434);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28435),"-")){
var temp__5804__auto___28436 = tiltontec.model.core.mget(me,attr_key_28435);
if(cljs.core.truth_(temp__5804__auto___28436)){
var attr_val_28437 = temp__5804__auto___28436;
dom.setAttribute(cljs.core.name(attr_key_28435),tiltontec.web_mx.base.attr_val$(attr_val_28437));
} else {
}
} else {
}


var G__28438 = seq__28403_28431;
var G__28439 = chunk__28404_28432;
var G__28440 = count__28405_28433;
var G__28441 = (i__28406_28434 + (1));
seq__28403_28431 = G__28438;
chunk__28404_28432 = G__28439;
count__28405_28433 = G__28440;
i__28406_28434 = G__28441;
continue;
} else {
var temp__5804__auto___28442 = cljs.core.seq(seq__28403_28431);
if(temp__5804__auto___28442){
var seq__28403_28443__$1 = temp__5804__auto___28442;
if(cljs.core.chunked_seq_QMARK_(seq__28403_28443__$1)){
var c__4556__auto___28444 = cljs.core.chunk_first(seq__28403_28443__$1);
var G__28445 = cljs.core.chunk_rest(seq__28403_28443__$1);
var G__28446 = c__4556__auto___28444;
var G__28447 = cljs.core.count(c__4556__auto___28444);
var G__28448 = (0);
seq__28403_28431 = G__28445;
chunk__28404_28432 = G__28446;
count__28405_28433 = G__28447;
i__28406_28434 = G__28448;
continue;
} else {
var attr_key_28449 = cljs.core.first(seq__28403_28443__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_28449),"-")){
var temp__5804__auto___28450__$1 = tiltontec.model.core.mget(me,attr_key_28449);
if(cljs.core.truth_(temp__5804__auto___28450__$1)){
var attr_val_28451 = temp__5804__auto___28450__$1;
dom.setAttribute(cljs.core.name(attr_key_28449),tiltontec.web_mx.base.attr_val$(attr_val_28451));
} else {
}
} else {
}


var G__28452 = cljs.core.next(seq__28403_28443__$1);
var G__28453 = null;
var G__28454 = (0);
var G__28455 = (0);
seq__28403_28431 = G__28452;
chunk__28404_28432 = G__28453;
count__28405_28433 = G__28454;
i__28406_28434 = G__28455;
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
var seq__28456_28476 = cljs.core.seq(newv);
var chunk__28457_28477 = null;
var count__28458_28478 = (0);
var i__28459_28479 = (0);
while(true){
if((i__28459_28479 < count__28458_28478)){
var newk_28480 = chunk__28457_28477.cljs$core$IIndexed$_nth$arity$2(null,i__28459_28479);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28480)));


var G__28481 = seq__28456_28476;
var G__28482 = chunk__28457_28477;
var G__28483 = count__28458_28478;
var G__28484 = (i__28459_28479 + (1));
seq__28456_28476 = G__28481;
chunk__28457_28477 = G__28482;
count__28458_28478 = G__28483;
i__28459_28479 = G__28484;
continue;
} else {
var temp__5804__auto___28485 = cljs.core.seq(seq__28456_28476);
if(temp__5804__auto___28485){
var seq__28456_28486__$1 = temp__5804__auto___28485;
if(cljs.core.chunked_seq_QMARK_(seq__28456_28486__$1)){
var c__4556__auto___28487 = cljs.core.chunk_first(seq__28456_28486__$1);
var G__28488 = cljs.core.chunk_rest(seq__28456_28486__$1);
var G__28489 = c__4556__auto___28487;
var G__28490 = cljs.core.count(c__4556__auto___28487);
var G__28491 = (0);
seq__28456_28476 = G__28488;
chunk__28457_28477 = G__28489;
count__28458_28478 = G__28490;
i__28459_28479 = G__28491;
continue;
} else {
var newk_28492 = cljs.core.first(seq__28456_28486__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28492)));


var G__28493 = cljs.core.next(seq__28456_28486__$1);
var G__28494 = null;
var G__28495 = (0);
var G__28496 = (0);
seq__28456_28476 = G__28493;
chunk__28457_28477 = G__28494;
count__28458_28478 = G__28495;
i__28459_28479 = G__28496;
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
var seq__28460 = cljs.core.seq(lost);
var chunk__28461 = null;
var count__28462 = (0);
var i__28463 = (0);
while(true){
if((i__28463 < count__28462)){
var oldk = chunk__28461.cljs$core$IIndexed$_nth$arity$2(null,i__28463);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28466){if((e28466 instanceof Error)){
var e_28497 = e28466;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28497], 0));

} else {
throw e28466;

}
}}


var G__28498 = seq__28460;
var G__28499 = chunk__28461;
var G__28500 = count__28462;
var G__28501 = (i__28463 + (1));
seq__28460 = G__28498;
chunk__28461 = G__28499;
count__28462 = G__28500;
i__28463 = G__28501;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28460);
if(temp__5804__auto__){
var seq__28460__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28460__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28460__$1);
var G__28502 = cljs.core.chunk_rest(seq__28460__$1);
var G__28503 = c__4556__auto__;
var G__28504 = cljs.core.count(c__4556__auto__);
var G__28505 = (0);
seq__28460 = G__28502;
chunk__28461 = G__28503;
count__28462 = G__28504;
i__28463 = G__28505;
continue;
} else {
var oldk = cljs.core.first(seq__28460__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}catch (e28467){if((e28467 instanceof Error)){
var e_28506 = e28467;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An finalize-error occurred:",e_28506], 0));

} else {
throw e28467;

}
}}


var G__28507 = cljs.core.next(seq__28460__$1);
var G__28508 = null;
var G__28509 = (0);
var G__28510 = (0);
seq__28460 = G__28507;
chunk__28461 = G__28508;
count__28462 = G__28509;
i__28463 = G__28510;
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
var seq__28468_28511 = cljs.core.seq(lost);
var chunk__28469_28512 = null;
var count__28470_28513 = (0);
var i__28471_28514 = (0);
while(true){
if((i__28471_28514 < count__28470_28513)){
var oldk_28515 = chunk__28469_28512.cljs$core$IIndexed$_nth$arity$2(null,i__28471_28514);
if(typeof oldk_28515 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28515) : tiltontec.cell.evaluate.finalize.call(null,oldk_28515));
}


var G__28516 = seq__28468_28511;
var G__28517 = chunk__28469_28512;
var G__28518 = count__28470_28513;
var G__28519 = (i__28471_28514 + (1));
seq__28468_28511 = G__28516;
chunk__28469_28512 = G__28517;
count__28470_28513 = G__28518;
i__28471_28514 = G__28519;
continue;
} else {
var temp__5804__auto___28520 = cljs.core.seq(seq__28468_28511);
if(temp__5804__auto___28520){
var seq__28468_28521__$1 = temp__5804__auto___28520;
if(cljs.core.chunked_seq_QMARK_(seq__28468_28521__$1)){
var c__4556__auto___28522 = cljs.core.chunk_first(seq__28468_28521__$1);
var G__28523 = cljs.core.chunk_rest(seq__28468_28521__$1);
var G__28524 = c__4556__auto___28522;
var G__28525 = cljs.core.count(c__4556__auto___28522);
var G__28526 = (0);
seq__28468_28511 = G__28523;
chunk__28469_28512 = G__28524;
count__28470_28513 = G__28525;
i__28471_28514 = G__28526;
continue;
} else {
var oldk_28527 = cljs.core.first(seq__28468_28521__$1);
if(typeof oldk_28527 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28527) : tiltontec.cell.evaluate.finalize.call(null,oldk_28527));
}


var G__28528 = cljs.core.next(seq__28468_28521__$1);
var G__28529 = null;
var G__28530 = (0);
var G__28531 = (0);
seq__28468_28511 = G__28528;
chunk__28469_28512 = G__28529;
count__28470_28513 = G__28530;
i__28471_28514 = G__28531;
continue;
}
} else {
}
}
break;
}

var seq__28472_28532 = cljs.core.seq(newv);
var chunk__28473_28533 = null;
var count__28474_28534 = (0);
var i__28475_28535 = (0);
while(true){
if((i__28475_28535 < count__28474_28534)){
var newk_28536 = chunk__28473_28533.cljs$core$IIndexed$_nth$arity$2(null,i__28475_28535);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28536]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28536)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28536)));


var G__28537 = seq__28472_28532;
var G__28538 = chunk__28473_28533;
var G__28539 = count__28474_28534;
var G__28540 = (i__28475_28535 + (1));
seq__28472_28532 = G__28537;
chunk__28473_28533 = G__28538;
count__28474_28534 = G__28539;
i__28475_28535 = G__28540;
continue;
} else {
var temp__5804__auto___28541 = cljs.core.seq(seq__28472_28532);
if(temp__5804__auto___28541){
var seq__28472_28542__$1 = temp__5804__auto___28541;
if(cljs.core.chunked_seq_QMARK_(seq__28472_28542__$1)){
var c__4556__auto___28543 = cljs.core.chunk_first(seq__28472_28542__$1);
var G__28544 = cljs.core.chunk_rest(seq__28472_28542__$1);
var G__28545 = c__4556__auto___28543;
var G__28546 = cljs.core.count(c__4556__auto___28543);
var G__28547 = (0);
seq__28472_28532 = G__28544;
chunk__28473_28533 = G__28545;
count__28474_28534 = G__28546;
i__28475_28535 = G__28547;
continue;
} else {
var newk_28548 = cljs.core.first(seq__28472_28542__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28548]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_28548)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_28548)));


var G__28549 = cljs.core.next(seq__28472_28542__$1);
var G__28550 = null;
var G__28551 = (0);
var G__28552 = (0);
seq__28472_28532 = G__28549;
chunk__28473_28533 = G__28550;
count__28474_28534 = G__28551;
i__28475_28535 = G__28552;
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
var seq__28553_28573 = cljs.core.seq(newv);
var chunk__28554_28574 = null;
var count__28555_28575 = (0);
var i__28556_28576 = (0);
while(true){
if((i__28556_28576 < count__28555_28575)){
var newk_28577 = chunk__28554_28574.cljs$core$IIndexed$_nth$arity$2(null,i__28556_28576);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28577)));


var G__28578 = seq__28553_28573;
var G__28579 = chunk__28554_28574;
var G__28580 = count__28555_28575;
var G__28581 = (i__28556_28576 + (1));
seq__28553_28573 = G__28578;
chunk__28554_28574 = G__28579;
count__28555_28575 = G__28580;
i__28556_28576 = G__28581;
continue;
} else {
var temp__5804__auto___28582 = cljs.core.seq(seq__28553_28573);
if(temp__5804__auto___28582){
var seq__28553_28583__$1 = temp__5804__auto___28582;
if(cljs.core.chunked_seq_QMARK_(seq__28553_28583__$1)){
var c__4556__auto___28584 = cljs.core.chunk_first(seq__28553_28583__$1);
var G__28585 = cljs.core.chunk_rest(seq__28553_28583__$1);
var G__28586 = c__4556__auto___28584;
var G__28587 = cljs.core.count(c__4556__auto___28584);
var G__28588 = (0);
seq__28553_28573 = G__28585;
chunk__28554_28574 = G__28586;
count__28555_28575 = G__28587;
i__28556_28576 = G__28588;
continue;
} else {
var newk_28589 = cljs.core.first(seq__28553_28583__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28589)));


var G__28590 = cljs.core.next(seq__28553_28583__$1);
var G__28591 = null;
var G__28592 = (0);
var G__28593 = (0);
seq__28553_28573 = G__28590;
chunk__28554_28574 = G__28591;
count__28555_28575 = G__28592;
i__28556_28576 = G__28593;
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
var seq__28557 = cljs.core.seq(lost);
var chunk__28558 = null;
var count__28559 = (0);
var i__28560 = (0);
while(true){
if((i__28560 < count__28559)){
var oldk = chunk__28558.cljs$core$IIndexed$_nth$arity$2(null,i__28560);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28594 = seq__28557;
var G__28595 = chunk__28558;
var G__28596 = count__28559;
var G__28597 = (i__28560 + (1));
seq__28557 = G__28594;
chunk__28558 = G__28595;
count__28559 = G__28596;
i__28560 = G__28597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28557);
if(temp__5804__auto__){
var seq__28557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28557__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28557__$1);
var G__28598 = cljs.core.chunk_rest(seq__28557__$1);
var G__28599 = c__4556__auto__;
var G__28600 = cljs.core.count(c__4556__auto__);
var G__28601 = (0);
seq__28557 = G__28598;
chunk__28558 = G__28599;
count__28559 = G__28600;
i__28560 = G__28601;
continue;
} else {
var oldk = cljs.core.first(seq__28557__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.evaluate.finalize.call(null,oldk));
}


var G__28602 = cljs.core.next(seq__28557__$1);
var G__28603 = null;
var G__28604 = (0);
var G__28605 = (0);
seq__28557 = G__28602;
chunk__28558 = G__28603;
count__28559 = G__28604;
i__28560 = G__28605;
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
var seq__28561 = cljs.core.seq(gained);
var chunk__28562 = null;
var count__28563 = (0);
var i__28564 = (0);
while(true){
if((i__28564 < count__28563)){
var newk = chunk__28562.cljs$core$IIndexed$_nth$arity$2(null,i__28564);
var new_dom_28606 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28606);


var G__28607 = seq__28561;
var G__28608 = chunk__28562;
var G__28609 = count__28563;
var G__28610 = (i__28564 + (1));
seq__28561 = G__28607;
chunk__28562 = G__28608;
count__28563 = G__28609;
i__28564 = G__28610;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28561);
if(temp__5804__auto__){
var seq__28561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28561__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28561__$1);
var G__28611 = cljs.core.chunk_rest(seq__28561__$1);
var G__28612 = c__4556__auto__;
var G__28613 = cljs.core.count(c__4556__auto__);
var G__28614 = (0);
seq__28561 = G__28611;
chunk__28562 = G__28612;
count__28563 = G__28613;
i__28564 = G__28614;
continue;
} else {
var newk = cljs.core.first(seq__28561__$1);
var new_dom_28615 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_28615);


var G__28616 = cljs.core.next(seq__28561__$1);
var G__28617 = null;
var G__28618 = (0);
var G__28619 = (0);
seq__28561 = G__28616;
chunk__28562 = G__28617;
count__28563 = G__28618;
i__28564 = G__28619;
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
var seq__28565_28620 = cljs.core.seq(lost);
var chunk__28566_28621 = null;
var count__28567_28622 = (0);
var i__28568_28623 = (0);
while(true){
if((i__28568_28623 < count__28567_28622)){
var oldk_28624 = chunk__28566_28621.cljs$core$IIndexed$_nth$arity$2(null,i__28568_28623);
if(typeof oldk_28624 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28624) : tiltontec.cell.evaluate.finalize.call(null,oldk_28624));
}


var G__28625 = seq__28565_28620;
var G__28626 = chunk__28566_28621;
var G__28627 = count__28567_28622;
var G__28628 = (i__28568_28623 + (1));
seq__28565_28620 = G__28625;
chunk__28566_28621 = G__28626;
count__28567_28622 = G__28627;
i__28568_28623 = G__28628;
continue;
} else {
var temp__5804__auto___28629 = cljs.core.seq(seq__28565_28620);
if(temp__5804__auto___28629){
var seq__28565_28630__$1 = temp__5804__auto___28629;
if(cljs.core.chunked_seq_QMARK_(seq__28565_28630__$1)){
var c__4556__auto___28631 = cljs.core.chunk_first(seq__28565_28630__$1);
var G__28632 = cljs.core.chunk_rest(seq__28565_28630__$1);
var G__28633 = c__4556__auto___28631;
var G__28634 = cljs.core.count(c__4556__auto___28631);
var G__28635 = (0);
seq__28565_28620 = G__28632;
chunk__28566_28621 = G__28633;
count__28567_28622 = G__28634;
i__28568_28623 = G__28635;
continue;
} else {
var oldk_28636 = cljs.core.first(seq__28565_28630__$1);
if(typeof oldk_28636 === 'string'){
} else {
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(oldk_28636) : tiltontec.cell.evaluate.finalize.call(null,oldk_28636));
}


var G__28637 = cljs.core.next(seq__28565_28630__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28565_28620 = G__28637;
chunk__28566_28621 = G__28638;
count__28567_28622 = G__28639;
i__28568_28623 = G__28640;
continue;
}
} else {
}
}
break;
}

var seq__28569_28641 = cljs.core.seq(newv);
var chunk__28570_28642 = null;
var count__28571_28643 = (0);
var i__28572_28644 = (0);
while(true){
if((i__28572_28644 < count__28571_28643)){
var newk_28645 = chunk__28570_28642.cljs$core$IIndexed$_nth$arity$2(null,i__28572_28644);
var new_dom_28646 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28645]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28645)):tiltontec.web_mx.html.svg_dom_create(newk_28645,false));
goog.dom.appendChild(frag,new_dom_28646);


var G__28647 = seq__28569_28641;
var G__28648 = chunk__28570_28642;
var G__28649 = count__28571_28643;
var G__28650 = (i__28572_28644 + (1));
seq__28569_28641 = G__28647;
chunk__28570_28642 = G__28648;
count__28571_28643 = G__28649;
i__28572_28644 = G__28650;
continue;
} else {
var temp__5804__auto___28651 = cljs.core.seq(seq__28569_28641);
if(temp__5804__auto___28651){
var seq__28569_28652__$1 = temp__5804__auto___28651;
if(cljs.core.chunked_seq_QMARK_(seq__28569_28652__$1)){
var c__4556__auto___28653 = cljs.core.chunk_first(seq__28569_28652__$1);
var G__28654 = cljs.core.chunk_rest(seq__28569_28652__$1);
var G__28655 = c__4556__auto___28653;
var G__28656 = cljs.core.count(c__4556__auto___28653);
var G__28657 = (0);
seq__28569_28641 = G__28654;
chunk__28570_28642 = G__28655;
count__28571_28643 = G__28656;
i__28572_28644 = G__28657;
continue;
} else {
var newk_28658 = cljs.core.first(seq__28569_28652__$1);
var new_dom_28659 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_28658]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_28658)):tiltontec.web_mx.html.svg_dom_create(newk_28658,false));
goog.dom.appendChild(frag,new_dom_28659);


var G__28660 = cljs.core.next(seq__28569_28652__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__28569_28641 = G__28660;
chunk__28570_28642 = G__28661;
count__28571_28643 = G__28662;
i__28572_28644 = G__28663;
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
var G__28664 = slot;
var G__28664__$1 = (((G__28664 instanceof cljs.core.Keyword))?G__28664.fqn:null);
switch (G__28664__$1) {
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
var G__28665 = dom;
var G__28666 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__28665,G__28666);

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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28668_SHARP_){
var temp__5804__auto__ = tiltontec.model.core.mget(p1__28668_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28669_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.model.core.mget(p1__28669_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__28670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.model.core.mget(p1__28670_SHARP_,cljs.core.cst$kw$id));
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
var G__28671 = cljs.core.rest(keys);
var G__28672 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__28671;
found = G__28672;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__28673 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__28674 = null;
var count__28675 = (0);
var i__28676 = (0);
while(true){
if((i__28676 < count__28675)){
var key = chunk__28674.cljs$core$IIndexed$_nth$arity$2(null,i__28676);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28677 = seq__28673;
var G__28678 = chunk__28674;
var G__28679 = count__28675;
var G__28680 = (i__28676 + (1));
seq__28673 = G__28677;
chunk__28674 = G__28678;
count__28675 = G__28679;
i__28676 = G__28680;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28673);
if(temp__5804__auto__){
var seq__28673__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28673__$1);
var G__28681 = cljs.core.chunk_rest(seq__28673__$1);
var G__28682 = c__4556__auto__;
var G__28683 = cljs.core.count(c__4556__auto__);
var G__28684 = (0);
seq__28673 = G__28681;
chunk__28674 = G__28682;
count__28675 = G__28683;
i__28676 = G__28684;
continue;
} else {
var key = cljs.core.first(seq__28673__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__28685 = cljs.core.next(seq__28673__$1);
var G__28686 = null;
var G__28687 = (0);
var G__28688 = (0);
seq__28673 = G__28685;
chunk__28674 = G__28686;
count__28675 = G__28687;
i__28676 = G__28688;
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

var G__28689 = dom;
var G__28690 = cljs.core.count(initial_value);
return goog.dom.selection.setEnd(G__28689,G__28690);
});
