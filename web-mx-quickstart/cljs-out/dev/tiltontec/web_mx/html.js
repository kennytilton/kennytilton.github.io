// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$map_less_nils_$_iter__18531(s__18532){
return (new cljs.core.LazySeq(null,(function (){
var s__18532__$1 = s__18532;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18532__$1);
if(temp__5804__auto__){
var s__18532__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18532__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18532__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18534 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18533 = (0);
while(true){
if((i__18533 < size__4528__auto__)){
var vec__18535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18533);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18535,(1),null);
if((v == null)){
cljs.core.chunk_append(b__18534,k);

var G__18541 = (i__18533 + (1));
i__18533 = G__18541;
continue;
} else {
var G__18542 = (i__18533 + (1));
i__18533 = G__18542;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18534),tiltontec$web_mx$html$map_less_nils_$_iter__18531(cljs.core.chunk_rest(s__18532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18534),null);
}
} else {
var vec__18538 = cljs.core.first(s__18532__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18538,(1),null);
if((v == null)){
return cljs.core.cons(k,tiltontec$web_mx$html$map_less_nils_$_iter__18531(cljs.core.rest(s__18532__$2)));
} else {
var G__18543 = cljs.core.rest(s__18532__$2);
s__18532__$1 = G__18543;
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
var dbg = false;
if(dbg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props,tiltontec.matrix.api.minfo(mx),cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mx))], 0));
} else {
}

var beef = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4529__auto__ = (function tiltontec$web_mx$html$tag_properties_$_iter__18544(s__18545){
return (new cljs.core.LazySeq(null,(function (){
var s__18545__$1 = s__18545;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18545__$1);
if(temp__5804__auto__){
var s__18545__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18545__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18545__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18547 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18546 = (0);
while(true){
if((i__18546 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18546);
cljs.core.chunk_append(b__18547,(function (){var v = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
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
if(dbg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_kv_BANG__BANG_,tiltontec.matrix.api.minfo(mx),k,v], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mx)),k)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_cells_DASH_flushed,cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mx))], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_get_DASH_mx_DASH_k,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mx),k)], 0));
} else {
}

if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__18548 = k;
var G__18548__$1 = (((G__18548 instanceof cljs.core.Keyword))?G__18548.fqn:null);
switch (G__18548__$1) {
case "style":
var ss = tiltontec.web_mx.style.style_string(v);
if(dbg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_ss_BANG__BANG__BANG_,tiltontec.matrix.api.minfo(mx),ss,cljs.core.cst$kw$from,v], 0));
} else {
}

return ss;

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

var G__18551 = (i__18546 + (1));
i__18546 = G__18551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18547),tiltontec$web_mx$html$tag_properties_$_iter__18544(cljs.core.chunk_rest(s__18545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18547),null);
}
} else {
var k = cljs.core.first(s__18545__$2);
return cljs.core.cons((function (){var v = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$list], null)))?null:(function (){
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
if(dbg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_kv_BANG__BANG_,tiltontec.matrix.api.minfo(mx),k,v], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mx)),k)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_cells_DASH_flushed,cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mx))], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_props_DASH_get_DASH_mx_DASH_k,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mx),k)], 0));
} else {
}

if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.web_mx.base.kw$(k),(function (){var G__18549 = k;
var G__18549__$1 = (((G__18549 instanceof cljs.core.Keyword))?G__18549.fqn:null);
switch (G__18549__$1) {
case "style":
var ss = tiltontec.web_mx.style.style_string(v);
if(dbg){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag_DASH_ss_BANG__BANG__BANG_,tiltontec.matrix.api.minfo(mx),ss,cljs.core.cst$kw$from,v], 0));
} else {
}

return ss;

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
})(),tiltontec$web_mx$html$tag_properties_$_iter__18544(cljs.core.rest(s__18545__$2)));
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

var seq__18553_18567 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__18555_18568 = null;
var count__18556_18569 = (0);
var i__18557_18570 = (0);
while(true){
if((i__18557_18570 < count__18556_18569)){
var ak_18571 = chunk__18555_18568.cljs$core$IIndexed$_nth$arity$2(null,i__18557_18570);
var ak$_18572 = cljs.core.name(ak_18571);
var av_18573 = (function (){var G__18561 = cljs.core.deref(me);
return (ak_18571.cljs$core$IFn$_invoke$arity$1 ? ak_18571.cljs$core$IFn$_invoke$arity$1(G__18561) : ak_18571.call(null,G__18561));
})();
if(cljs.core.fn_QMARK_(av_18573)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_18572,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_18572,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_18572], 0));

return ak$_18572;
})()
),av_18573);
} else {
svg.setAttributeNS(null,ak$_18572,tiltontec.web_mx.base.attr_val$(av_18573));
}


var G__18574 = seq__18553_18567;
var G__18575 = chunk__18555_18568;
var G__18576 = count__18556_18569;
var G__18577 = (i__18557_18570 + (1));
seq__18553_18567 = G__18574;
chunk__18555_18568 = G__18575;
count__18556_18569 = G__18576;
i__18557_18570 = G__18577;
continue;
} else {
var temp__5804__auto___18578 = cljs.core.seq(seq__18553_18567);
if(temp__5804__auto___18578){
var seq__18553_18579__$1 = temp__5804__auto___18578;
if(cljs.core.chunked_seq_QMARK_(seq__18553_18579__$1)){
var c__4556__auto___18580 = cljs.core.chunk_first(seq__18553_18579__$1);
var G__18581 = cljs.core.chunk_rest(seq__18553_18579__$1);
var G__18582 = c__4556__auto___18580;
var G__18583 = cljs.core.count(c__4556__auto___18580);
var G__18584 = (0);
seq__18553_18567 = G__18581;
chunk__18555_18568 = G__18582;
count__18556_18569 = G__18583;
i__18557_18570 = G__18584;
continue;
} else {
var ak_18585 = cljs.core.first(seq__18553_18579__$1);
var ak$_18586 = cljs.core.name(ak_18585);
var av_18587 = (function (){var G__18562 = cljs.core.deref(me);
return (ak_18585.cljs$core$IFn$_invoke$arity$1 ? ak_18585.cljs$core$IFn$_invoke$arity$1(G__18562) : ak_18585.call(null,G__18562));
})();
if(cljs.core.fn_QMARK_(av_18587)){
svg.addEventListener(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ak$_18586,(0),(2))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ak$_18586,(2)):(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$WARNING_BANG__DASH_SVG_DASH_handler_DASH_event_DASH_looks_DASH_wrong,ak$_18586], 0));

return ak$_18586;
})()
),av_18587);
} else {
svg.setAttributeNS(null,ak$_18586,tiltontec.web_mx.base.attr_val$(av_18587));
}


var G__18588 = cljs.core.next(seq__18553_18579__$1);
var G__18589 = null;
var G__18590 = (0);
var G__18591 = (0);
seq__18553_18567 = G__18588;
chunk__18555_18568 = G__18589;
count__18556_18569 = G__18590;
i__18557_18570 = G__18591;
continue;
}
} else {
}
}
break;
}

var seq__18563_18592 = cljs.core.seq(tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$kids));
var chunk__18564_18593 = null;
var count__18565_18594 = (0);
var i__18566_18595 = (0);
while(true){
if((i__18566_18595 < count__18565_18594)){
var kid_18596 = chunk__18564_18593.cljs$core$IIndexed$_nth$arity$2(null,i__18566_18595);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_18596,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_18596,dbg)));


var G__18597 = seq__18563_18592;
var G__18598 = chunk__18564_18593;
var G__18599 = count__18565_18594;
var G__18600 = (i__18566_18595 + (1));
seq__18563_18592 = G__18597;
chunk__18564_18593 = G__18598;
count__18565_18594 = G__18599;
i__18566_18595 = G__18600;
continue;
} else {
var temp__5804__auto___18601 = cljs.core.seq(seq__18563_18592);
if(temp__5804__auto___18601){
var seq__18563_18602__$1 = temp__5804__auto___18601;
if(cljs.core.chunked_seq_QMARK_(seq__18563_18602__$1)){
var c__4556__auto___18603 = cljs.core.chunk_first(seq__18563_18602__$1);
var G__18604 = cljs.core.chunk_rest(seq__18563_18602__$1);
var G__18605 = c__4556__auto___18603;
var G__18606 = cljs.core.count(c__4556__auto___18603);
var G__18607 = (0);
seq__18563_18592 = G__18604;
chunk__18564_18593 = G__18605;
count__18565_18594 = G__18606;
i__18566_18595 = G__18607;
continue;
} else {
var kid_18608 = cljs.core.first(seq__18563_18602__$1);
svg.appendChild((tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2 ? tiltontec.web_mx.html.svg_dom_create.cljs$core$IFn$_invoke$arity$2(kid_18608,dbg) : tiltontec.web_mx.html.svg_dom_create.call(null,kid_18608,dbg)));


var G__18609 = cljs.core.next(seq__18563_18602__$1);
var G__18610 = null;
var G__18611 = (0);
var G__18612 = (0);
seq__18563_18592 = G__18609;
chunk__18564_18593 = G__18610;
count__18565_18594 = G__18611;
i__18566_18595 = G__18612;
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
var G__18615 = arguments.length;
switch (G__18615) {
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
var seq__18616_18625 = cljs.core.seq(me);
var chunk__18617_18626 = null;
var count__18618_18627 = (0);
var i__18619_18628 = (0);
while(true){
if((i__18619_18628 < count__18618_18627)){
var tag_18629 = chunk__18617_18626.cljs$core$IIndexed$_nth$arity$2(null,i__18619_18628);
if(cljs.core.truth_(tag_18629)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_18629));
} else {
}


var G__18630 = seq__18616_18625;
var G__18631 = chunk__18617_18626;
var G__18632 = count__18618_18627;
var G__18633 = (i__18619_18628 + (1));
seq__18616_18625 = G__18630;
chunk__18617_18626 = G__18631;
count__18618_18627 = G__18632;
i__18619_18628 = G__18633;
continue;
} else {
var temp__5804__auto___18634 = cljs.core.seq(seq__18616_18625);
if(temp__5804__auto___18634){
var seq__18616_18635__$1 = temp__5804__auto___18634;
if(cljs.core.chunked_seq_QMARK_(seq__18616_18635__$1)){
var c__4556__auto___18636 = cljs.core.chunk_first(seq__18616_18635__$1);
var G__18637 = cljs.core.chunk_rest(seq__18616_18635__$1);
var G__18638 = c__4556__auto___18636;
var G__18639 = cljs.core.count(c__4556__auto___18636);
var G__18640 = (0);
seq__18616_18625 = G__18637;
chunk__18617_18626 = G__18638;
count__18618_18627 = G__18639;
i__18619_18628 = G__18640;
continue;
} else {
var tag_18641 = cljs.core.first(seq__18616_18635__$1);
if(cljs.core.truth_(tag_18641)){
goog.dom.appendChild(frag,tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tag_18641));
} else {
}


var G__18642 = cljs.core.next(seq__18616_18635__$1);
var G__18643 = null;
var G__18644 = (0);
var G__18645 = (0);
seq__18616_18625 = G__18642;
chunk__18617_18626 = G__18643;
count__18618_18627 = G__18644;
i__18619_18628 = G__18645;
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
var dom = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(goog.dom.createDom,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$tag),tiltontec.web_mx.html.tag_properties(me),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18613_SHARP_){
return tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2(p1__18613_SHARP_,dbg);
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
var temp__5804__auto___18646 = tiltontec.matrix.api.mget_QMARK_(me,cljs.core.cst$kw$list);
if(cljs.core.truth_(temp__5804__auto___18646)){
var list_id_18647 = temp__5804__auto___18646;
dom.setAttribute("list",tiltontec.web_mx.base.attr_val$(list_id_18647));
} else {
}
} else {
}

var seq__18620_18648 = cljs.core.seq(cljs.core.cst$kw$attr_DASH_keys.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__18621_18649 = null;
var count__18622_18650 = (0);
var i__18623_18651 = (0);
while(true){
if((i__18623_18651 < count__18622_18650)){
var attr_key_18652 = chunk__18621_18649.cljs$core$IIndexed$_nth$arity$2(null,i__18623_18651);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_18652),"-")){
var temp__5804__auto___18653 = tiltontec.matrix.api.mget(me,attr_key_18652);
if(cljs.core.truth_(temp__5804__auto___18653)){
var attr_val_18654 = temp__5804__auto___18653;
dom.setAttribute(cljs.core.name(attr_key_18652),tiltontec.web_mx.base.attr_val$(attr_val_18654));
} else {
}
} else {
}


var G__18655 = seq__18620_18648;
var G__18656 = chunk__18621_18649;
var G__18657 = count__18622_18650;
var G__18658 = (i__18623_18651 + (1));
seq__18620_18648 = G__18655;
chunk__18621_18649 = G__18656;
count__18622_18650 = G__18657;
i__18623_18651 = G__18658;
continue;
} else {
var temp__5804__auto___18659 = cljs.core.seq(seq__18620_18648);
if(temp__5804__auto___18659){
var seq__18620_18660__$1 = temp__5804__auto___18659;
if(cljs.core.chunked_seq_QMARK_(seq__18620_18660__$1)){
var c__4556__auto___18661 = cljs.core.chunk_first(seq__18620_18660__$1);
var G__18662 = cljs.core.chunk_rest(seq__18620_18660__$1);
var G__18663 = c__4556__auto___18661;
var G__18664 = cljs.core.count(c__4556__auto___18661);
var G__18665 = (0);
seq__18620_18648 = G__18662;
chunk__18621_18649 = G__18663;
count__18622_18650 = G__18664;
i__18623_18651 = G__18665;
continue;
} else {
var attr_key_18666 = cljs.core.first(seq__18620_18660__$1);
if(clojure.string.includes_QMARK_(cljs.core.name(attr_key_18666),"-")){
var temp__5804__auto___18667__$1 = tiltontec.matrix.api.mget(me,attr_key_18666);
if(cljs.core.truth_(temp__5804__auto___18667__$1)){
var attr_val_18668 = temp__5804__auto___18667__$1;
dom.setAttribute(cljs.core.name(attr_key_18666),tiltontec.web_mx.base.attr_val$(attr_val_18668));
} else {
}
} else {
}


var G__18669 = cljs.core.next(seq__18620_18660__$1);
var G__18670 = null;
var G__18671 = (0);
var G__18672 = (0);
seq__18620_18648 = G__18669;
chunk__18621_18649 = G__18670;
count__18622_18650 = G__18671;
i__18623_18651 = G__18672;
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
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watchtagkids_BANG__BANG__BANG__BANG__BANG_,tiltontec.web_mx.html.tagfo(me),cljs.core.cst$kw$counts_DASH_new_DASH_old,cljs.core.count(newv),cljs.core.count(oldv),cljs.core.cst$kw$same_DASH_kids,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv),cljs.core.cst$kw$same_DASH_kid_DASH_set,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))], 0));

var pdom = tiltontec.web_mx.base.tag_dom(me);
var lost = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv));
var gained = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(newv),cljs.core.set(oldv))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv)))))){
var frag = document.createDocumentFragment();
var seq__18673_18693 = cljs.core.seq(newv);
var chunk__18674_18694 = null;
var count__18675_18695 = (0);
var i__18676_18696 = (0);
while(true){
if((i__18676_18696 < count__18675_18695)){
var newk_18697 = chunk__18674_18694.cljs$core$IIndexed$_nth$arity$2(null,i__18676_18696);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18697)));


var G__18698 = seq__18673_18693;
var G__18699 = chunk__18674_18694;
var G__18700 = count__18675_18695;
var G__18701 = (i__18676_18696 + (1));
seq__18673_18693 = G__18698;
chunk__18674_18694 = G__18699;
count__18675_18695 = G__18700;
i__18676_18696 = G__18701;
continue;
} else {
var temp__5804__auto___18702 = cljs.core.seq(seq__18673_18693);
if(temp__5804__auto___18702){
var seq__18673_18703__$1 = temp__5804__auto___18702;
if(cljs.core.chunked_seq_QMARK_(seq__18673_18703__$1)){
var c__4556__auto___18704 = cljs.core.chunk_first(seq__18673_18703__$1);
var G__18705 = cljs.core.chunk_rest(seq__18673_18703__$1);
var G__18706 = c__4556__auto___18704;
var G__18707 = cljs.core.count(c__4556__auto___18704);
var G__18708 = (0);
seq__18673_18693 = G__18705;
chunk__18674_18694 = G__18706;
count__18675_18695 = G__18707;
i__18676_18696 = G__18708;
continue;
} else {
var newk_18709 = cljs.core.first(seq__18673_18703__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18709)));


var G__18710 = cljs.core.next(seq__18673_18703__$1);
var G__18711 = null;
var G__18712 = (0);
var G__18713 = (0);
seq__18673_18693 = G__18710;
chunk__18674_18694 = G__18711;
count__18675_18695 = G__18712;
i__18676_18696 = G__18713;
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
var seq__18677 = cljs.core.seq(lost);
var chunk__18678 = null;
var count__18679 = (0);
var i__18680 = (0);
while(true){
if((i__18680 < count__18679)){
var oldk = chunk__18678.cljs$core$IIndexed$_nth$arity$2(null,i__18680);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$quiesce], null),cljs.core.cst$kw$tag_DASH_kids_DASH_watch_DASH_quiescing,tiltontec.matrix.api.minfo(oldk)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e18683){if((e18683 instanceof Error)){
var e_18714 = e18683;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_18714], 0));

} else {
throw e18683;

}
}}


var G__18715 = seq__18677;
var G__18716 = chunk__18678;
var G__18717 = count__18679;
var G__18718 = (i__18680 + (1));
seq__18677 = G__18715;
chunk__18678 = G__18716;
count__18679 = G__18717;
i__18680 = G__18718;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18677);
if(temp__5804__auto__){
var seq__18677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18677__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18677__$1);
var G__18719 = cljs.core.chunk_rest(seq__18677__$1);
var G__18720 = c__4556__auto__;
var G__18721 = cljs.core.count(c__4556__auto__);
var G__18722 = (0);
seq__18677 = G__18719;
chunk__18678 = G__18720;
count__18679 = G__18721;
i__18680 = G__18722;
continue;
} else {
var oldk = cljs.core.first(seq__18677__$1);
pdom.removeChild(tiltontec.web_mx.base.tag_dom(oldk));

if(typeof oldk === 'string'){
} else {
try{tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$quiesce], null),cljs.core.cst$kw$tag_DASH_kids_DASH_watch_DASH_quiescing,tiltontec.matrix.api.minfo(oldk)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}catch (e18684){if((e18684 instanceof Error)){
var e_18723 = e18684;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["An md-quiesce-error occurred:",e_18723], 0));

} else {
throw e18684;

}
}}


var G__18724 = cljs.core.next(seq__18677__$1);
var G__18725 = null;
var G__18726 = (0);
var G__18727 = (0);
seq__18677 = G__18724;
chunk__18678 = G__18725;
count__18679 = G__18726;
i__18680 = G__18727;
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
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$both_DASH_gained_DASH_n_DASH_lost,tiltontec.matrix.api.minfo(me)], 0));

var seq__18685_18728 = cljs.core.seq(lost);
var chunk__18686_18729 = null;
var count__18687_18730 = (0);
var i__18688_18731 = (0);
while(true){
if((i__18688_18731 < count__18687_18730)){
var oldk_18732 = chunk__18686_18729.cljs$core$IIndexed$_nth$arity$2(null,i__18688_18731);
if(typeof oldk_18732 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watch_DASH_kids_DASH_quiescing,tiltontec.matrix.api.minfo(oldk_18732)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18732) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18732));
}


var G__18733 = seq__18685_18728;
var G__18734 = chunk__18686_18729;
var G__18735 = count__18687_18730;
var G__18736 = (i__18688_18731 + (1));
seq__18685_18728 = G__18733;
chunk__18686_18729 = G__18734;
count__18687_18730 = G__18735;
i__18688_18731 = G__18736;
continue;
} else {
var temp__5804__auto___18737 = cljs.core.seq(seq__18685_18728);
if(temp__5804__auto___18737){
var seq__18685_18738__$1 = temp__5804__auto___18737;
if(cljs.core.chunked_seq_QMARK_(seq__18685_18738__$1)){
var c__4556__auto___18739 = cljs.core.chunk_first(seq__18685_18738__$1);
var G__18740 = cljs.core.chunk_rest(seq__18685_18738__$1);
var G__18741 = c__4556__auto___18739;
var G__18742 = cljs.core.count(c__4556__auto___18739);
var G__18743 = (0);
seq__18685_18728 = G__18740;
chunk__18686_18729 = G__18741;
count__18687_18730 = G__18742;
i__18688_18731 = G__18743;
continue;
} else {
var oldk_18744 = cljs.core.first(seq__18685_18738__$1);
if(typeof oldk_18744 === 'string'){
} else {
tiltontec.matrix.api.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kids,cljs.core.cst$kw$watch_DASH_kids_DASH_quiescing,tiltontec.matrix.api.minfo(oldk_18744)], 0));

(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18744) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18744));
}


var G__18745 = cljs.core.next(seq__18685_18738__$1);
var G__18746 = null;
var G__18747 = (0);
var G__18748 = (0);
seq__18685_18728 = G__18745;
chunk__18686_18729 = G__18746;
count__18687_18730 = G__18747;
i__18688_18731 = G__18748;
continue;
}
} else {
}
}
break;
}

var seq__18689_18749 = cljs.core.seq(newv);
var chunk__18690_18750 = null;
var count__18691_18751 = (0);
var i__18692_18752 = (0);
while(true){
if((i__18692_18752 < count__18691_18751)){
var newk_18753 = chunk__18690_18750.cljs$core$IIndexed$_nth$arity$2(null,i__18692_18752);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18753]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18753)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_18753)));


var G__18754 = seq__18689_18749;
var G__18755 = chunk__18690_18750;
var G__18756 = count__18691_18751;
var G__18757 = (i__18692_18752 + (1));
seq__18689_18749 = G__18754;
chunk__18690_18750 = G__18755;
count__18691_18751 = G__18756;
i__18692_18752 = G__18757;
continue;
} else {
var temp__5804__auto___18758 = cljs.core.seq(seq__18689_18749);
if(temp__5804__auto___18758){
var seq__18689_18759__$1 = temp__5804__auto___18758;
if(cljs.core.chunked_seq_QMARK_(seq__18689_18759__$1)){
var c__4556__auto___18760 = cljs.core.chunk_first(seq__18689_18759__$1);
var G__18761 = cljs.core.chunk_rest(seq__18689_18759__$1);
var G__18762 = c__4556__auto___18760;
var G__18763 = cljs.core.count(c__4556__auto___18760);
var G__18764 = (0);
seq__18689_18749 = G__18761;
chunk__18690_18750 = G__18762;
count__18691_18751 = G__18763;
i__18692_18752 = G__18764;
continue;
} else {
var newk_18765 = cljs.core.first(seq__18689_18759__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18765]),oldv))?pdom.removeChild(tiltontec.web_mx.base.tag_dom(newk_18765)):tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(newk_18765)));


var G__18766 = cljs.core.next(seq__18689_18759__$1);
var G__18767 = null;
var G__18768 = (0);
var G__18769 = (0);
seq__18689_18749 = G__18766;
chunk__18690_18750 = G__18767;
count__18691_18751 = G__18768;
i__18692_18752 = G__18769;
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
var seq__18770_18790 = cljs.core.seq(newv);
var chunk__18771_18791 = null;
var count__18772_18792 = (0);
var i__18773_18793 = (0);
while(true){
if((i__18773_18793 < count__18772_18792)){
var newk_18794 = chunk__18771_18791.cljs$core$IIndexed$_nth$arity$2(null,i__18773_18793);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18794)));


var G__18795 = seq__18770_18790;
var G__18796 = chunk__18771_18791;
var G__18797 = count__18772_18792;
var G__18798 = (i__18773_18793 + (1));
seq__18770_18790 = G__18795;
chunk__18771_18791 = G__18796;
count__18772_18792 = G__18797;
i__18773_18793 = G__18798;
continue;
} else {
var temp__5804__auto___18799 = cljs.core.seq(seq__18770_18790);
if(temp__5804__auto___18799){
var seq__18770_18800__$1 = temp__5804__auto___18799;
if(cljs.core.chunked_seq_QMARK_(seq__18770_18800__$1)){
var c__4556__auto___18801 = cljs.core.chunk_first(seq__18770_18800__$1);
var G__18802 = cljs.core.chunk_rest(seq__18770_18800__$1);
var G__18803 = c__4556__auto___18801;
var G__18804 = cljs.core.count(c__4556__auto___18801);
var G__18805 = (0);
seq__18770_18790 = G__18802;
chunk__18771_18791 = G__18803;
count__18772_18792 = G__18804;
i__18773_18793 = G__18805;
continue;
} else {
var newk_18806 = cljs.core.first(seq__18770_18800__$1);
goog.dom.appendChild(frag,pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18806)));


var G__18807 = cljs.core.next(seq__18770_18800__$1);
var G__18808 = null;
var G__18809 = (0);
var G__18810 = (0);
seq__18770_18790 = G__18807;
chunk__18771_18791 = G__18808;
count__18772_18792 = G__18809;
i__18773_18793 = G__18810;
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
var seq__18774 = cljs.core.seq(lost);
var chunk__18775 = null;
var count__18776 = (0);
var i__18777 = (0);
while(true){
if((i__18777 < count__18776)){
var oldk = chunk__18775.cljs$core$IIndexed$_nth$arity$2(null,i__18777);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__18811 = seq__18774;
var G__18812 = chunk__18775;
var G__18813 = count__18776;
var G__18814 = (i__18777 + (1));
seq__18774 = G__18811;
chunk__18775 = G__18812;
count__18776 = G__18813;
i__18777 = G__18814;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18774);
if(temp__5804__auto__){
var seq__18774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18774__$1);
var G__18815 = cljs.core.chunk_rest(seq__18774__$1);
var G__18816 = c__4556__auto__;
var G__18817 = cljs.core.count(c__4556__auto__);
var G__18818 = (0);
seq__18774 = G__18815;
chunk__18775 = G__18816;
count__18776 = G__18817;
i__18777 = G__18818;
continue;
} else {
var oldk = cljs.core.first(seq__18774__$1);
pdom.removeChild(tiltontec.web_mx.html.svg_dom(oldk));

if(typeof oldk === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk) : tiltontec.cell.poly.md_quiesce.call(null,oldk));
}


var G__18819 = cljs.core.next(seq__18774__$1);
var G__18820 = null;
var G__18821 = (0);
var G__18822 = (0);
seq__18774 = G__18819;
chunk__18775 = G__18820;
count__18776 = G__18821;
i__18777 = G__18822;
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
var seq__18778 = cljs.core.seq(gained);
var chunk__18779 = null;
var count__18780 = (0);
var i__18781 = (0);
while(true){
if((i__18781 < count__18780)){
var newk = chunk__18779.cljs$core$IIndexed$_nth$arity$2(null,i__18781);
var new_dom_18823 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_18823);


var G__18824 = seq__18778;
var G__18825 = chunk__18779;
var G__18826 = count__18780;
var G__18827 = (i__18781 + (1));
seq__18778 = G__18824;
chunk__18779 = G__18825;
count__18780 = G__18826;
i__18781 = G__18827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18778);
if(temp__5804__auto__){
var seq__18778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18778__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18778__$1);
var G__18828 = cljs.core.chunk_rest(seq__18778__$1);
var G__18829 = c__4556__auto__;
var G__18830 = cljs.core.count(c__4556__auto__);
var G__18831 = (0);
seq__18778 = G__18828;
chunk__18779 = G__18829;
count__18780 = G__18830;
i__18781 = G__18831;
continue;
} else {
var newk = cljs.core.first(seq__18778__$1);
var new_dom_18832 = (function (){var or__4126__auto__ = tiltontec.web_mx.html.svg_dom(newk);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.web_mx.html.svg_dom_create(newk,false);
}
})();
pdom.appendChild(new_dom_18832);


var G__18833 = cljs.core.next(seq__18778__$1);
var G__18834 = null;
var G__18835 = (0);
var G__18836 = (0);
seq__18778 = G__18833;
chunk__18779 = G__18834;
count__18780 = G__18835;
i__18781 = G__18836;
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
var seq__18782_18837 = cljs.core.seq(lost);
var chunk__18783_18838 = null;
var count__18784_18839 = (0);
var i__18785_18840 = (0);
while(true){
if((i__18785_18840 < count__18784_18839)){
var oldk_18841 = chunk__18783_18838.cljs$core$IIndexed$_nth$arity$2(null,i__18785_18840);
if(typeof oldk_18841 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18841) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18841));
}


var G__18842 = seq__18782_18837;
var G__18843 = chunk__18783_18838;
var G__18844 = count__18784_18839;
var G__18845 = (i__18785_18840 + (1));
seq__18782_18837 = G__18842;
chunk__18783_18838 = G__18843;
count__18784_18839 = G__18844;
i__18785_18840 = G__18845;
continue;
} else {
var temp__5804__auto___18846 = cljs.core.seq(seq__18782_18837);
if(temp__5804__auto___18846){
var seq__18782_18847__$1 = temp__5804__auto___18846;
if(cljs.core.chunked_seq_QMARK_(seq__18782_18847__$1)){
var c__4556__auto___18848 = cljs.core.chunk_first(seq__18782_18847__$1);
var G__18849 = cljs.core.chunk_rest(seq__18782_18847__$1);
var G__18850 = c__4556__auto___18848;
var G__18851 = cljs.core.count(c__4556__auto___18848);
var G__18852 = (0);
seq__18782_18837 = G__18849;
chunk__18783_18838 = G__18850;
count__18784_18839 = G__18851;
i__18785_18840 = G__18852;
continue;
} else {
var oldk_18853 = cljs.core.first(seq__18782_18847__$1);
if(typeof oldk_18853 === 'string'){
} else {
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(oldk_18853) : tiltontec.cell.poly.md_quiesce.call(null,oldk_18853));
}


var G__18854 = cljs.core.next(seq__18782_18847__$1);
var G__18855 = null;
var G__18856 = (0);
var G__18857 = (0);
seq__18782_18837 = G__18854;
chunk__18783_18838 = G__18855;
count__18784_18839 = G__18856;
i__18785_18840 = G__18857;
continue;
}
} else {
}
}
break;
}

var seq__18786_18858 = cljs.core.seq(newv);
var chunk__18787_18859 = null;
var count__18788_18860 = (0);
var i__18789_18861 = (0);
while(true){
if((i__18789_18861 < count__18788_18860)){
var newk_18862 = chunk__18787_18859.cljs$core$IIndexed$_nth$arity$2(null,i__18789_18861);
var new_dom_18863 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18862]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18862)):tiltontec.web_mx.html.svg_dom_create(newk_18862,false));
goog.dom.appendChild(frag,new_dom_18863);


var G__18864 = seq__18786_18858;
var G__18865 = chunk__18787_18859;
var G__18866 = count__18788_18860;
var G__18867 = (i__18789_18861 + (1));
seq__18786_18858 = G__18864;
chunk__18787_18859 = G__18865;
count__18788_18860 = G__18866;
i__18789_18861 = G__18867;
continue;
} else {
var temp__5804__auto___18868 = cljs.core.seq(seq__18786_18858);
if(temp__5804__auto___18868){
var seq__18786_18869__$1 = temp__5804__auto___18868;
if(cljs.core.chunked_seq_QMARK_(seq__18786_18869__$1)){
var c__4556__auto___18870 = cljs.core.chunk_first(seq__18786_18869__$1);
var G__18871 = cljs.core.chunk_rest(seq__18786_18869__$1);
var G__18872 = c__4556__auto___18870;
var G__18873 = cljs.core.count(c__4556__auto___18870);
var G__18874 = (0);
seq__18786_18858 = G__18871;
chunk__18787_18859 = G__18872;
count__18788_18860 = G__18873;
i__18789_18861 = G__18874;
continue;
} else {
var newk_18875 = cljs.core.first(seq__18786_18869__$1);
var new_dom_18876 = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_18875]),oldv))?pdom.removeChild(tiltontec.web_mx.html.svg_dom(newk_18875)):tiltontec.web_mx.html.svg_dom_create(newk_18875,false));
goog.dom.appendChild(frag,new_dom_18876);


var G__18877 = cljs.core.next(seq__18786_18869__$1);
var G__18878 = null;
var G__18879 = (0);
var G__18880 = (0);
seq__18786_18858 = G__18877;
chunk__18787_18859 = G__18878;
count__18788_18860 = G__18879;
i__18789_18861 = G__18880;
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
var G__18881 = slot;
var G__18881__$1 = (((G__18881 instanceof cljs.core.Keyword))?G__18881.fqn:null);
switch (G__18881__$1) {
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
var G__18882 = dom;
var G__18883 = tiltontec.web_mx.html.class_to_class_string(newv);
return goog.dom.classlist.set(G__18882,G__18883);

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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18885_SHARP_){
var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_(p1__18885_SHARP_,cljs.core.cst$kw$class);
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
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18886_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,tiltontec.matrix.api.mget_QMARK_(p1__18886_SHARP_,cljs.core.cst$kw$tag));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with a certain :id
 */
tiltontec.web_mx.html.mxu_find_id = (function tiltontec$web_mx$html$mxu_find_id(where,id){
return tiltontec.matrix.api.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__18887_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),tiltontec.matrix.api.mget_QMARK_(p1__18887_SHARP_,cljs.core.cst$kw$id));
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
var G__18888 = cljs.core.rest(keys);
var G__18889 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__18888;
found = G__18889;
continue;
} else {
return found;
}
break;
}
});
tiltontec.web_mx.html.io_truncate = (function tiltontec$web_mx$html$io_truncate(key_prefix){
var seq__18890 = cljs.core.seq(tiltontec.web_mx.html.io_find(key_prefix));
var chunk__18891 = null;
var count__18892 = (0);
var i__18893 = (0);
while(true){
if((i__18893 < count__18892)){
var key = chunk__18891.cljs$core$IIndexed$_nth$arity$2(null,i__18893);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__18894 = seq__18890;
var G__18895 = chunk__18891;
var G__18896 = count__18892;
var G__18897 = (i__18893 + (1));
seq__18890 = G__18894;
chunk__18891 = G__18895;
count__18892 = G__18896;
i__18893 = G__18897;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18890);
if(temp__5804__auto__){
var seq__18890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18890__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18890__$1);
var G__18898 = cljs.core.chunk_rest(seq__18890__$1);
var G__18899 = c__4556__auto__;
var G__18900 = cljs.core.count(c__4556__auto__);
var G__18901 = (0);
seq__18890 = G__18898;
chunk__18891 = G__18899;
count__18892 = G__18900;
i__18893 = G__18901;
continue;
} else {
var key = cljs.core.first(seq__18890__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$io_DASH_trunc_DASH_nails,key], 0));

tiltontec.web_mx.html.io_delete(key);


var G__18902 = cljs.core.next(seq__18890__$1);
var G__18903 = null;
var G__18904 = (0);
var G__18905 = (0);
seq__18890 = G__18902;
chunk__18891 = G__18903;
count__18892 = G__18904;
i__18893 = G__18905;
continue;
}
} else {
return null;
}
}
break;
}
});
