// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.macros');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,slot){
var G__14727 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__14727) : slot.call(null,G__14727));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,cljs.core.cst$kw$slot,slot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me,me], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))?tiltontec.cell.base.c_value(c):null));

return true;
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if(typeof tiltontec.model.base.md_awaken_before !== 'undefined'){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.model.base.md_awaken_before.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled slots
 * (2) call observers of all slots
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-awaken passed nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

(tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.model.base.md_awaken_before.call(null,me));

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7429__auto__ = (function tiltontec$model$base$md_awaken_$_iter__14728(s__14729){
return (new cljs.core.LazySeq(null,(function (){
var s__14729__$1 = s__14729;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14729__$1);
if(temp__4657__auto__){
var s__14729__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14729__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__14729__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__14731 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__14730 = (0);
while(true){
if((i__14730 < size__7428__auto__)){
var slot = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__14730);
cljs.core.chunk_append(b__14731,(function (){var temp__4657__auto____$1 = (function (){var G__14732 = tiltontec.model.base.md_cz(me);
var G__14733 = cljs.core.cst$kw$not_DASH_found;
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__14732,G__14733) : slot.call(null,G__14732,G__14733));
})();
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$not_DASH_found)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$kids)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.ia_type(me),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$md_DASH_awaken_DASH_noslot_DASH_obs,slot,cljs.core.keys(tiltontec.model.base.md_cz(me)),cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz(me),cljs.core.cst$kw$hunh)], 0));

} else {
}

var G__14734 = slot;
var G__14735 = me;
var G__14736 = (function (){var G__14739 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__14739) : slot.call(null,G__14739));
})();
var G__14737 = tiltontec.cell.base.unbound;
var G__14738 = null;
return (tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__14734,G__14735,G__14736,G__14737,G__14738) : tiltontec.cell.observer.observe.call(null,G__14734,G__14735,G__14736,G__14737,G__14738));
} else {
return (tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.c_awaken.call(null,c));

}
} else {
return null;
}
})());

var G__14748 = (i__14730 + (1));
i__14730 = G__14748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14731),tiltontec$model$base$md_awaken_$_iter__14728(cljs.core.chunk_rest(s__14729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14731),null);
}
} else {
var slot = cljs.core.first(s__14729__$2);
return cljs.core.cons((function (){var temp__4657__auto____$1 = (function (){var G__14740 = tiltontec.model.base.md_cz(me);
var G__14741 = cljs.core.cst$kw$not_DASH_found;
return (slot.cljs$core$IFn$_invoke$arity$2 ? slot.cljs$core$IFn$_invoke$arity$2(G__14740,G__14741) : slot.call(null,G__14740,G__14741));
})();
if(cljs.core.truth_(temp__4657__auto____$1)){
var c = temp__4657__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$not_DASH_found)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$kids)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.ia_type(me),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),cljs.core.cst$kw$md_DASH_awaken_DASH_noslot_DASH_obs,slot,cljs.core.keys(tiltontec.model.base.md_cz(me)),cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$2(tiltontec.model.base.md_cz(me),cljs.core.cst$kw$hunh)], 0));

} else {
}

var G__14742 = slot;
var G__14743 = me;
var G__14744 = (function (){var G__14747 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__14747) : slot.call(null,G__14747));
})();
var G__14745 = tiltontec.cell.base.unbound;
var G__14746 = null;
return (tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__14742,G__14743,G__14744,G__14745,G__14746) : tiltontec.cell.observer.observe.call(null,G__14742,G__14743,G__14744,G__14745,G__14746));
} else {
return (tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.c_awaken.call(null,c));

}
} else {
return null;
}
})(),tiltontec$model$base$md_awaken_$_iter__14728(cljs.core.rest(s__14729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__(cljs.core.keys(cljs.core.deref(me)));
})());

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awake);

return me;
});
