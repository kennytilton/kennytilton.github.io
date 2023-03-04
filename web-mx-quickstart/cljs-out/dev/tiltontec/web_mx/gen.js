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

var G__17888 = dom.parentNode;
return (tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__17888) : tiltontec.web_mx.gen.dom_tag.call(null,G__17888));
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
var temp__5804__auto___17893 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___17893)){
var style_17894 = temp__5804__auto___17893;
if(tiltontec.cell.base.md_ref_QMARK_(style_17894)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(style_17894) : tiltontec.cell.evaluate.finalize.call(null,style_17894));
} else {
}
} else {
}

var seq__17889_17895 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17890_17896 = null;
var count__17891_17897 = (0);
var i__17892_17898 = (0);
while(true){
if((i__17892_17898 < count__17891_17897)){
var k_17899 = chunk__17890_17896.cljs$core$IIndexed$_nth$arity$2(null,i__17892_17898);
if(tiltontec.cell.base.md_ref_QMARK_(k_17899)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17899) : tiltontec.cell.evaluate.finalize.call(null,k_17899));
} else {
}


var G__17900 = seq__17889_17895;
var G__17901 = chunk__17890_17896;
var G__17902 = count__17891_17897;
var G__17903 = (i__17892_17898 + (1));
seq__17889_17895 = G__17900;
chunk__17890_17896 = G__17901;
count__17891_17897 = G__17902;
i__17892_17898 = G__17903;
continue;
} else {
var temp__5804__auto___17904 = cljs.core.seq(seq__17889_17895);
if(temp__5804__auto___17904){
var seq__17889_17905__$1 = temp__5804__auto___17904;
if(cljs.core.chunked_seq_QMARK_(seq__17889_17905__$1)){
var c__4556__auto___17906 = cljs.core.chunk_first(seq__17889_17905__$1);
var G__17907 = cljs.core.chunk_rest(seq__17889_17905__$1);
var G__17908 = c__4556__auto___17906;
var G__17909 = cljs.core.count(c__4556__auto___17906);
var G__17910 = (0);
seq__17889_17895 = G__17907;
chunk__17890_17896 = G__17908;
count__17891_17897 = G__17909;
i__17892_17898 = G__17910;
continue;
} else {
var k_17911 = cljs.core.first(seq__17889_17905__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17911)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17911) : tiltontec.cell.evaluate.finalize.call(null,k_17911));
} else {
}


var G__17912 = cljs.core.next(seq__17889_17905__$1);
var G__17913 = null;
var G__17914 = (0);
var G__17915 = (0);
seq__17889_17895 = G__17912;
chunk__17890_17896 = G__17913;
count__17891_17897 = G__17914;
i__17892_17898 = G__17915;
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
var G__17917 = arguments.length;
switch (G__17917) {
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
var temp__5804__auto___17923 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___17923)){
var style_17924 = temp__5804__auto___17923;
if(tiltontec.cell.base.md_ref_QMARK_(style_17924)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(style_17924) : tiltontec.cell.evaluate.finalize.call(null,style_17924));
} else {
}
} else {
}

var seq__17919_17925 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__17920_17926 = null;
var count__17921_17927 = (0);
var i__17922_17928 = (0);
while(true){
if((i__17922_17928 < count__17921_17927)){
var k_17929 = chunk__17920_17926.cljs$core$IIndexed$_nth$arity$2(null,i__17922_17928);
if(tiltontec.cell.base.md_ref_QMARK_(k_17929)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17929) : tiltontec.cell.evaluate.finalize.call(null,k_17929));
} else {
}


var G__17930 = seq__17919_17925;
var G__17931 = chunk__17920_17926;
var G__17932 = count__17921_17927;
var G__17933 = (i__17922_17928 + (1));
seq__17919_17925 = G__17930;
chunk__17920_17926 = G__17931;
count__17921_17927 = G__17932;
i__17922_17928 = G__17933;
continue;
} else {
var temp__5804__auto___17934 = cljs.core.seq(seq__17919_17925);
if(temp__5804__auto___17934){
var seq__17919_17935__$1 = temp__5804__auto___17934;
if(cljs.core.chunked_seq_QMARK_(seq__17919_17935__$1)){
var c__4556__auto___17936 = cljs.core.chunk_first(seq__17919_17935__$1);
var G__17937 = cljs.core.chunk_rest(seq__17919_17935__$1);
var G__17938 = c__4556__auto___17936;
var G__17939 = cljs.core.count(c__4556__auto___17936);
var G__17940 = (0);
seq__17919_17925 = G__17937;
chunk__17920_17926 = G__17938;
count__17921_17927 = G__17939;
i__17922_17928 = G__17940;
continue;
} else {
var k_17941 = cljs.core.first(seq__17919_17935__$1);
if(tiltontec.cell.base.md_ref_QMARK_(k_17941)){
(tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.finalize.cljs$core$IFn$_invoke$arity$1(k_17941) : tiltontec.cell.evaluate.finalize.call(null,k_17941));
} else {
}


var G__17942 = cljs.core.next(seq__17919_17935__$1);
var G__17943 = null;
var G__17944 = (0);
var G__17945 = (0);
seq__17919_17925 = G__17942;
chunk__17920_17926 = G__17943;
count__17921_17927 = G__17944;
i__17922_17928 = G__17945;
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
var G__17946 = evt.target;
return goog.dom.forms.getValue(G__17946);
});
