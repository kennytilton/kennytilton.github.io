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

var G__17868 = dom.parentNode;
return (tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__17868) : tiltontec.web_mx.gen.dom_tag.call(null,G__17868));
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
var mx_tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag,cljs.core.cst$kw$tag,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,tag_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (me){
var temp__5804__auto___17873 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___17873)){
var style_17874 = temp__5804__auto___17873;
if(tiltontec.cell.base.md_ref_QMARK_(style_17874)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_17874) : tiltontec.cell.evaluate.md_quiesce.call(null,style_17874));
} else {
}
} else {
}

var seq__17869_17875 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17870_17876 = null;
var count__17871_17877 = (0);
var i__17872_17878 = (0);
while(true){
if((i__17872_17878 < count__17871_17877)){
var k_17879 = chunk__17870_17876.cljs$core$IIndexed$_nth$arity$2(null,i__17872_17878);
if(tiltontec.cell.base.md_ref_QMARK_(k_17879)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17879) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17879));
} else {
}


var G__17880 = seq__17869_17875;
var G__17881 = chunk__17870_17876;
var G__17882 = count__17871_17877;
var G__17883 = (i__17872_17878 + (1));
seq__17869_17875 = G__17880;
chunk__17870_17876 = G__17881;
count__17871_17877 = G__17882;
i__17872_17878 = G__17883;
continue;
} else {
var temp__5804__auto___17884 = cljs.core.seq(seq__17869_17875);
if(temp__5804__auto___17884){
var seq__17869_17885__$1 = temp__5804__auto___17884;
if(cljs.core.chunked_seq_QMARK_(seq__17869_17885__$1)){
var c__4556__auto___17886 = cljs.core.chunk_first(seq__17869_17885__$1);
var G__17887 = cljs.core.chunk_rest(seq__17869_17885__$1);
var G__17888 = c__4556__auto___17886;
var G__17889 = cljs.core.count(c__4556__auto___17886);
var G__17890 = (0);
seq__17869_17875 = G__17887;
chunk__17870_17876 = G__17888;
count__17871_17877 = G__17889;
i__17872_17878 = G__17890;
continue;
} else {
var k_17891 = cljs.core.first(seq__17869_17885__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17891)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17891) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17891));
} else {
}


var G__17892 = cljs.core.next(seq__17869_17885__$1);
var G__17893 = null;
var G__17894 = (0);
var G__17895 = (0);
seq__17869_17875 = G__17892;
chunk__17870_17876 = G__17893;
count__17871_17877 = G__17894;
i__17872_17878 = G__17895;
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
var G__17897 = arguments.length;
switch (G__17897) {
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
var mx_svg = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg,cljs.core.cst$kw$tag,(((svg instanceof cljs.core.Keyword))?cljs.core.name(svg):((typeof svg === 'string')?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(svg)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(svg,(1)):svg):cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg)
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,svg_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,svg_id,mx_svg);

return mx_svg;
}));

(tiltontec.web_mx.gen.make_svg.cljs$lang$maxFixedArity = 4);

tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (me){
var temp__5804__auto___17903 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___17903)){
var style_17904 = temp__5804__auto___17903;
if(tiltontec.cell.base.md_ref_QMARK_(style_17904)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_17904) : tiltontec.cell.evaluate.md_quiesce.call(null,style_17904));
} else {
}
} else {
}

var seq__17899_17905 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17900_17906 = null;
var count__17901_17907 = (0);
var i__17902_17908 = (0);
while(true){
if((i__17902_17908 < count__17901_17907)){
var k_17909 = chunk__17900_17906.cljs$core$IIndexed$_nth$arity$2(null,i__17902_17908);
if(tiltontec.cell.base.md_ref_QMARK_(k_17909)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17909) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17909));
} else {
}


var G__17910 = seq__17899_17905;
var G__17911 = chunk__17900_17906;
var G__17912 = count__17901_17907;
var G__17913 = (i__17902_17908 + (1));
seq__17899_17905 = G__17910;
chunk__17900_17906 = G__17911;
count__17901_17907 = G__17912;
i__17902_17908 = G__17913;
continue;
} else {
var temp__5804__auto___17914 = cljs.core.seq(seq__17899_17905);
if(temp__5804__auto___17914){
var seq__17899_17915__$1 = temp__5804__auto___17914;
if(cljs.core.chunked_seq_QMARK_(seq__17899_17915__$1)){
var c__4556__auto___17916 = cljs.core.chunk_first(seq__17899_17915__$1);
var G__17917 = cljs.core.chunk_rest(seq__17899_17915__$1);
var G__17918 = c__4556__auto___17916;
var G__17919 = cljs.core.count(c__4556__auto___17916);
var G__17920 = (0);
seq__17899_17905 = G__17917;
chunk__17900_17906 = G__17918;
count__17901_17907 = G__17919;
i__17902_17908 = G__17920;
continue;
} else {
var k_17921 = cljs.core.first(seq__17899_17915__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17921)){
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_17921) : tiltontec.cell.evaluate.md_quiesce.call(null,k_17921));
} else {
}


var G__17922 = cljs.core.next(seq__17899_17915__$1);
var G__17923 = null;
var G__17924 = (0);
var G__17925 = (0);
seq__17899_17905 = G__17922;
chunk__17900_17906 = G__17923;
count__17901_17907 = G__17924;
i__17902_17908 = G__17925;
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
var G__17926 = evt.target;
return goog.dom.forms.getValue(G__17926);
});
