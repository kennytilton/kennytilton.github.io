// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.dom.forms');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.web_mx.gen.tagfo = (function tiltontec$web_mx$gen$tagfo(me){
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag,cljs.core.cst$kw$class,cljs.core.cst$kw$name], null));
});
tiltontec.web_mx.gen._PLUS_tag_sid_PLUS_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
tiltontec.web_mx.gen.web_mx_init_BANG_ = (function tiltontec$web_mx$gen$web_mx_init_BANG_(){
return cljs.core.reset_BANG_(tiltontec.web_mx.gen._PLUS_tag_sid_PLUS_,(-1));
});
tiltontec.web_mx.gen.tag_by_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tiltontec.web_mx.gen.dom_tag = (function tiltontec$web_mx$gen$dom_tag(dom){
if((dom == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",dom.id)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_id_DASH_try_DASH_pa,dom.parentNode], 0));

var G__23504 = dom.parentNode;
return (tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__23504) : tiltontec.web_mx.gen.dom_tag.call(null,G__23504));
} else {
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tiltontec.web_mx.gen.tag_by_id),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["dom-tiltontec.web-mx did not find js for id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id)," of dom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join(''),"\n","tag"].join('')));
}

return tag;

}
}
});
tiltontec.web_mx.gen.attr_val$ = (function tiltontec$web_mx$gen$attr_val$(val){
if(typeof val === 'string'){
return val;
} else {
if((val instanceof cljs.core.Keyword)){
return cljs.core.name(val);
} else {
if(cljs.core.coll_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tiltontec.web_mx.gen.attr_val$,val));
} else {
if(cljs.core.fn_QMARK_(val)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gen/attr-val$ raw!!!!"], 0));

return val;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);

}
}
}
}
});
tiltontec.web_mx.gen.make_tag = (function tiltontec$web_mx$gen$make_tag(tag,attrs,aux,cFkids){
var tag_id = (function (){var temp__5802__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return tiltontec.web_mx.gen.attr_val$(id);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.web_mx.gen._PLUS_tag_sid_PLUS_,cljs.core.inc))].join('');
}
})();
var mx_tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag,cljs.core.cst$kw$tag,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,tag_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (me){
var temp__5804__auto___23509 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___23509)){
var style_23510 = temp__5804__auto___23509;
if(tiltontec.cell.base.md_ref_QMARK_(style_23510)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_23510) : tiltontec.cell.evaluate.md_quiesce.call(null,style_23510));
} else {
}
} else {
}

var seq__23505_23511 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23506_23512 = null;
var count__23507_23513 = (0);
var i__23508_23514 = (0);
while(true){
if((i__23508_23514 < count__23507_23513)){
var k_23515 = chunk__23506_23512.cljs$core$IIndexed$_nth$arity$2(null,i__23508_23514);
if(tiltontec.cell.base.md_ref_QMARK_(k_23515)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23515) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23515));
} else {
}


var G__23516 = seq__23505_23511;
var G__23517 = chunk__23506_23512;
var G__23518 = count__23507_23513;
var G__23519 = (i__23508_23514 + (1));
seq__23505_23511 = G__23516;
chunk__23506_23512 = G__23517;
count__23507_23513 = G__23518;
i__23508_23514 = G__23519;
continue;
} else {
var temp__5804__auto___23520 = cljs.core.seq(seq__23505_23511);
if(temp__5804__auto___23520){
var seq__23505_23521__$1 = temp__5804__auto___23520;
if(cljs.core.chunked_seq_QMARK_(seq__23505_23521__$1)){
var c__4556__auto___23522 = cljs.core.chunk_first(seq__23505_23521__$1);
var G__23523 = cljs.core.chunk_rest(seq__23505_23521__$1);
var G__23524 = c__4556__auto___23522;
var G__23525 = cljs.core.count(c__4556__auto___23522);
var G__23526 = (0);
seq__23505_23511 = G__23523;
chunk__23506_23512 = G__23524;
count__23507_23513 = G__23525;
i__23508_23514 = G__23526;
continue;
} else {
var k_23527 = cljs.core.first(seq__23505_23521__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_23527)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23527) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23527));
} else {
}


var G__23528 = cljs.core.next(seq__23505_23521__$1);
var G__23529 = null;
var G__23530 = (0);
var G__23531 = (0);
seq__23505_23511 = G__23528;
chunk__23506_23512 = G__23529;
count__23507_23513 = G__23530;
i__23508_23514 = G__23531;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.mget(me,cljs.core.cst$kw$id));

return tiltontec.cell.evaluate.md_quiesce_self(me);
}));
tiltontec.web_mx.gen.make_svg = (function tiltontec$web_mx$gen$make_svg(var_args){
var G__23533 = arguments.length;
switch (G__23533) {
case 1:
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$1 = (function (svg){
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$2(svg,cljs.core.PersistentArrayMap.EMPTY);
}));

(tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$2 = (function (svg,attrs){
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$3(svg,attrs,cljs.core.PersistentArrayMap.EMPTY);
}));

(tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$3 = (function (svg,attrs,custom_props){
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4(svg,attrs,custom_props,null);
}));

(tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4 = (function (svg,attrs,aux,cFkids){
var svg_id = (function (){var temp__5802__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return tiltontec.web_mx.gen.attr_val$(id);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.web_mx.gen._PLUS_tag_sid_PLUS_,cljs.core.inc))].join('');
}
})();
var mx_svg = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg,cljs.core.cst$kw$tag,(((svg instanceof cljs.core.Keyword))?cljs.core.name(svg):((typeof svg === 'string')?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(svg)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(svg,(1)):svg):cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg)
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,svg_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,svg_id,mx_svg);

return mx_svg;
}));

(tiltontec.web_mx.gen.make_svg.cljs$lang$maxFixedArity = 4);

tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (me){
var temp__5804__auto___23539 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___23539)){
var style_23540 = temp__5804__auto___23539;
if(tiltontec.cell.base.md_ref_QMARK_(style_23540)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_23540) : tiltontec.cell.evaluate.md_quiesce.call(null,style_23540));
} else {
}
} else {
}

var seq__23535_23541 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23536_23542 = null;
var count__23537_23543 = (0);
var i__23538_23544 = (0);
while(true){
if((i__23538_23544 < count__23537_23543)){
var k_23545 = chunk__23536_23542.cljs$core$IIndexed$_nth$arity$2(null,i__23538_23544);
if(tiltontec.cell.base.md_ref_QMARK_(k_23545)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23545) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23545));
} else {
}


var G__23546 = seq__23535_23541;
var G__23547 = chunk__23536_23542;
var G__23548 = count__23537_23543;
var G__23549 = (i__23538_23544 + (1));
seq__23535_23541 = G__23546;
chunk__23536_23542 = G__23547;
count__23537_23543 = G__23548;
i__23538_23544 = G__23549;
continue;
} else {
var temp__5804__auto___23550 = cljs.core.seq(seq__23535_23541);
if(temp__5804__auto___23550){
var seq__23535_23551__$1 = temp__5804__auto___23550;
if(cljs.core.chunked_seq_QMARK_(seq__23535_23551__$1)){
var c__4556__auto___23552 = cljs.core.chunk_first(seq__23535_23551__$1);
var G__23553 = cljs.core.chunk_rest(seq__23535_23551__$1);
var G__23554 = c__4556__auto___23552;
var G__23555 = cljs.core.count(c__4556__auto___23552);
var G__23556 = (0);
seq__23535_23541 = G__23553;
chunk__23536_23542 = G__23554;
count__23537_23543 = G__23555;
i__23538_23544 = G__23556;
continue;
} else {
var k_23557 = cljs.core.first(seq__23535_23551__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_23557)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23557) : tiltontec.cell.evaluate.md_quiesce.call(null,k_23557));
} else {
}


var G__23558 = cljs.core.next(seq__23535_23551__$1);
var G__23559 = null;
var G__23560 = (0);
var G__23561 = (0);
seq__23535_23541 = G__23558;
chunk__23536_23542 = G__23559;
count__23537_23543 = G__23560;
i__23538_23544 = G__23561;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.mget(me,cljs.core.cst$kw$id));

return tiltontec.cell.evaluate.md_quiesce_self(me);
}));
tiltontec.web_mx.gen.evt_mx = (function tiltontec$web_mx$gen$evt_mx(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.evt_md = (function tiltontec$web_mx$gen$evt_md(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.target_value = (function tiltontec$web_mx$gen$target_value(evt){
var G__23562 = evt.target;
return goog.dom.forms.getValue(G__23562);
});
