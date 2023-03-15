// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.web_mx.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.dom.forms');
goog.require('cljs.pprint');
goog.require('tiltontec.matrix.api');
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

var G__23744 = dom.parentNode;
return (tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1 ? tiltontec.web_mx.gen.dom_tag.cljs$core$IFn$_invoke$arity$1(G__23744) : tiltontec.web_mx.gen.dom_tag.call(null,G__23744));
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
var mx_tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.matrix.api.make,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag,cljs.core.cst$kw$tag,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,tag_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
tiltontec.matrix.api.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_tag], null),(function (me){
var temp__5804__auto___23749 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___23749)){
var style_23750 = temp__5804__auto___23749;
if(tiltontec.matrix.api.md_ref_QMARK_(style_23750)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_23750) : tiltontec.matrix.api.md_quiesce.call(null,style_23750));
} else {
}
} else {
}

var seq__23745_23751 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23746_23752 = null;
var count__23747_23753 = (0);
var i__23748_23754 = (0);
while(true){
if((i__23748_23754 < count__23747_23753)){
var k_23755 = chunk__23746_23752.cljs$core$IIndexed$_nth$arity$2(null,i__23748_23754);
if(tiltontec.matrix.api.md_ref_QMARK_(k_23755)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23755) : tiltontec.matrix.api.md_quiesce.call(null,k_23755));
} else {
}


var G__23756 = seq__23745_23751;
var G__23757 = chunk__23746_23752;
var G__23758 = count__23747_23753;
var G__23759 = (i__23748_23754 + (1));
seq__23745_23751 = G__23756;
chunk__23746_23752 = G__23757;
count__23747_23753 = G__23758;
i__23748_23754 = G__23759;
continue;
} else {
var temp__5804__auto___23760 = cljs.core.seq(seq__23745_23751);
if(temp__5804__auto___23760){
var seq__23745_23761__$1 = temp__5804__auto___23760;
if(cljs.core.chunked_seq_QMARK_(seq__23745_23761__$1)){
var c__4556__auto___23762 = cljs.core.chunk_first(seq__23745_23761__$1);
var G__23763 = cljs.core.chunk_rest(seq__23745_23761__$1);
var G__23764 = c__4556__auto___23762;
var G__23765 = cljs.core.count(c__4556__auto___23762);
var G__23766 = (0);
seq__23745_23751 = G__23763;
chunk__23746_23752 = G__23764;
count__23747_23753 = G__23765;
i__23748_23754 = G__23766;
continue;
} else {
var k_23767 = cljs.core.first(seq__23745_23761__$1);
if(tiltontec.matrix.api.md_ref_QMARK_(k_23767)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23767) : tiltontec.matrix.api.md_quiesce.call(null,k_23767));
} else {
}


var G__23768 = cljs.core.next(seq__23745_23761__$1);
var G__23769 = null;
var G__23770 = (0);
var G__23771 = (0);
seq__23745_23751 = G__23768;
chunk__23746_23752 = G__23769;
count__23747_23753 = G__23770;
i__23748_23754 = G__23771;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$id));

return tiltontec.matrix.api.md_quiesce_self(me);
}));
tiltontec.web_mx.gen.make_svg = (function tiltontec$web_mx$gen$make_svg(var_args){
var G__23773 = arguments.length;
switch (G__23773) {
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
var mx_svg = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.matrix.api.make,cljs.core.cst$kw$mx_DASH_type,cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg,cljs.core.cst$kw$tag,(((svg instanceof cljs.core.Keyword))?cljs.core.name(svg):((typeof svg === 'string')?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(svg)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(svg,(1)):svg):cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg)
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,svg_id,cljs.core.cst$kw$attr_DASH_keys,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(attrs),cljs.core.cst$kw$id)),cljs.core.cst$kw$kids,cFkids,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$id)))),cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(aux))))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.web_mx.gen.tag_by_id,cljs.core.assoc,svg_id,mx_svg);

return mx_svg;
}));

(tiltontec.web_mx.gen.make_svg.cljs$lang$maxFixedArity = 4);

tiltontec.matrix.api.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$web_DASH_mx$base_SLASH_svg], null),(function (me){
var temp__5804__auto___23779 = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
if(cljs.core.truth_(temp__5804__auto___23779)){
var style_23780 = temp__5804__auto___23779;
if(tiltontec.matrix.api.md_ref_QMARK_(style_23780)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(style_23780) : tiltontec.matrix.api.md_quiesce.call(null,style_23780));
} else {
}
} else {
}

var seq__23775_23781 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__23776_23782 = null;
var count__23777_23783 = (0);
var i__23778_23784 = (0);
while(true){
if((i__23778_23784 < count__23777_23783)){
var k_23785 = chunk__23776_23782.cljs$core$IIndexed$_nth$arity$2(null,i__23778_23784);
if(tiltontec.matrix.api.md_ref_QMARK_(k_23785)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23785) : tiltontec.matrix.api.md_quiesce.call(null,k_23785));
} else {
}


var G__23786 = seq__23775_23781;
var G__23787 = chunk__23776_23782;
var G__23788 = count__23777_23783;
var G__23789 = (i__23778_23784 + (1));
seq__23775_23781 = G__23786;
chunk__23776_23782 = G__23787;
count__23777_23783 = G__23788;
i__23778_23784 = G__23789;
continue;
} else {
var temp__5804__auto___23790 = cljs.core.seq(seq__23775_23781);
if(temp__5804__auto___23790){
var seq__23775_23791__$1 = temp__5804__auto___23790;
if(cljs.core.chunked_seq_QMARK_(seq__23775_23791__$1)){
var c__4556__auto___23792 = cljs.core.chunk_first(seq__23775_23791__$1);
var G__23793 = cljs.core.chunk_rest(seq__23775_23791__$1);
var G__23794 = c__4556__auto___23792;
var G__23795 = cljs.core.count(c__4556__auto___23792);
var G__23796 = (0);
seq__23775_23781 = G__23793;
chunk__23776_23782 = G__23794;
count__23777_23783 = G__23795;
i__23778_23784 = G__23796;
continue;
} else {
var k_23797 = cljs.core.first(seq__23775_23791__$1);
if(tiltontec.matrix.api.md_ref_QMARK_(k_23797)){
(tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.matrix.api.md_quiesce.cljs$core$IFn$_invoke$arity$1(k_23797) : tiltontec.matrix.api.md_quiesce.call(null,k_23797));
} else {
}


var G__23798 = cljs.core.next(seq__23775_23791__$1);
var G__23799 = null;
var G__23800 = (0);
var G__23801 = (0);
seq__23775_23781 = G__23798;
chunk__23776_23782 = G__23799;
count__23777_23783 = G__23800;
i__23778_23784 = G__23801;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tiltontec.web_mx.gen.tag_by_id,cljs.core.dissoc,tiltontec.matrix.api.mget(me,cljs.core.cst$kw$id));

return tiltontec.matrix.api.md_quiesce_self(me);
}));
tiltontec.web_mx.gen.evt_mx = (function tiltontec$web_mx$gen$evt_mx(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.evt_md = (function tiltontec$web_mx$gen$evt_md(e){
return tiltontec.web_mx.gen.dom_tag(e.target);
});
tiltontec.web_mx.gen.target_value = (function tiltontec$web_mx$gen$target_value(evt){
var G__23802 = evt.target;
return goog.dom.forms.getValue(G__23802);
});
