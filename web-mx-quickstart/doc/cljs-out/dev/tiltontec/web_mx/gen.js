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

var G__24605 = dom.parentNode;
return (tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__24605) : tiltontec.web_mx.gen.dom_tag.call(null,G__24605));
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
tiltontec.cell.evaluate.finalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (me){
var temp__5804__auto___24610 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___24610)){
var style_24611 = temp__5804__auto___24610;
if(tiltontec.cell.base.md_ref_QMARK_(style_24611)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(style_24611) : tiltontec.cell.evaluate.finalize.call(null,style_24611));
} else {
}
} else {
}

var seq__24606_24612 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__24607_24613 = null;
var count__24608_24614 = (0);
var i__24609_24615 = (0);
while(true){
if((i__24609_24615 < count__24608_24614)){
var k_24616 = chunk__24607_24613.cljs$core$IIndexed$_nth$arity$2(null,i__24609_24615);
if(tiltontec.cell.base.md_ref_QMARK_(k_24616)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_24616) : tiltontec.cell.evaluate.finalize.call(null,k_24616));
} else {
}


var G__24617 = seq__24606_24612;
var G__24618 = chunk__24607_24613;
var G__24619 = count__24608_24614;
var G__24620 = (i__24609_24615 + (1));
seq__24606_24612 = G__24617;
chunk__24607_24613 = G__24618;
count__24608_24614 = G__24619;
i__24609_24615 = G__24620;
continue;
} else {
var temp__5804__auto___24621 = cljs.core.seq(seq__24606_24612);
if(temp__5804__auto___24621){
var seq__24606_24622__$1 = temp__5804__auto___24621;
if(cljs.core.chunked_seq_QMARK_(seq__24606_24622__$1)){
var c__4556__auto___24623 = cljs.core.chunk_first(seq__24606_24622__$1);
var G__24624 = cljs.core.chunk_rest(seq__24606_24622__$1);
var G__24625 = c__4556__auto___24623;
var G__24626 = cljs.core.count(c__4556__auto___24623);
var G__24627 = (0);
seq__24606_24612 = G__24624;
chunk__24607_24613 = G__24625;
count__24608_24614 = G__24626;
i__24609_24615 = G__24627;
continue;
} else {
var k_24628 = cljs.core.first(seq__24606_24622__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_24628)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_24628) : tiltontec.cell.evaluate.finalize.call(null,k_24628));
} else {
}


var G__24629 = cljs.core.next(seq__24606_24622__$1);
var G__24630 = null;
var G__24631 = (0);
var G__24632 = (0);
seq__24606_24612 = G__24629;
chunk__24607_24613 = G__24630;
count__24608_24614 = G__24631;
i__24609_24615 = G__24632;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.mget(me,cljs.core.cst$kw$id));

return tiltontec.cell.evaluate.finalize_self(me);
}));
tiltontec.web_mx.gen.make_svg = (function tiltontec$web_mx$gen$make_svg(var_args){
var G__24634 = arguments.length;
switch (G__24634) {
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

tiltontec.cell.evaluate.finalize.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (me){
var temp__5804__auto___24640 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___24640)){
var style_24641 = temp__5804__auto___24640;
if(tiltontec.cell.base.md_ref_QMARK_(style_24641)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(style_24641) : tiltontec.cell.evaluate.finalize.call(null,style_24641));
} else {
}
} else {
}

var seq__24636_24642 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__24637_24643 = null;
var count__24638_24644 = (0);
var i__24639_24645 = (0);
while(true){
if((i__24639_24645 < count__24638_24644)){
var k_24646 = chunk__24637_24643.cljs$core$IIndexed$_nth$arity$2(null,i__24639_24645);
if(tiltontec.cell.base.md_ref_QMARK_(k_24646)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_24646) : tiltontec.cell.evaluate.finalize.call(null,k_24646));
} else {
}


var G__24647 = seq__24636_24642;
var G__24648 = chunk__24637_24643;
var G__24649 = count__24638_24644;
var G__24650 = (i__24639_24645 + (1));
seq__24636_24642 = G__24647;
chunk__24637_24643 = G__24648;
count__24638_24644 = G__24649;
i__24639_24645 = G__24650;
continue;
} else {
var temp__5804__auto___24651 = cljs.core.seq(seq__24636_24642);
if(temp__5804__auto___24651){
var seq__24636_24652__$1 = temp__5804__auto___24651;
if(cljs.core.chunked_seq_QMARK_(seq__24636_24652__$1)){
var c__4556__auto___24653 = cljs.core.chunk_first(seq__24636_24652__$1);
var G__24654 = cljs.core.chunk_rest(seq__24636_24652__$1);
var G__24655 = c__4556__auto___24653;
var G__24656 = cljs.core.count(c__4556__auto___24653);
var G__24657 = (0);
seq__24636_24642 = G__24654;
chunk__24637_24643 = G__24655;
count__24638_24644 = G__24656;
i__24639_24645 = G__24657;
continue;
} else {
var k_24658 = cljs.core.first(seq__24636_24652__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_24658)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_24658) : tiltontec.cell.evaluate.finalize.call(null,k_24658));
} else {
}


var G__24659 = cljs.core.next(seq__24636_24652__$1);
var G__24660 = null;
var G__24661 = (0);
var G__24662 = (0);
seq__24636_24642 = G__24659;
chunk__24637_24643 = G__24660;
count__24638_24644 = G__24661;
i__24639_24645 = G__24662;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core.mget(me,cljs.core.cst$kw$id));

return tiltontec.cell.evaluate.finalize_self(me);
}));
tiltontec.web_mx.gen.evt_mx = (function tiltontec$web_mx$gen$evt_mx(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.evt_md = (function tiltontec$web_mx$gen$evt_md(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.target_value = (function tiltontec$web_mx$gen$target_value(evt){
var G__24663 = evt.target;
return goog.dom.forms.getValue(G__24663);
});
