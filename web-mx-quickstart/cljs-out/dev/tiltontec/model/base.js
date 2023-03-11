// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
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
var G__22697 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__22697) : slot.call(null,G__22697));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,slot,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,cljs.core.cst$kw$slot,slot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me,me], 0));

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))?tiltontec.cell.base.c_value(c):null));

return true;
} else {
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),c);

return false;

}
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.model !== 'undefined') && (typeof tiltontec.model.base !== 'undefined') && (typeof tiltontec.model.base.md_awaken_before !== 'undefined')){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22698 = cljs.core.get_global_hierarchy;
return (fexpr__22698.cljs$core$IFn$_invoke$arity$0 ? fexpr__22698.cljs$core$IFn$_invoke$arity$0() : fexpr__22698.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.util.base.mx_type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
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
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

(tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.model.base.md_awaken_before.call(null,me));

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

var seq__22699_22735 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__22700_22736 = null;
var count__22701_22737 = (0);
var i__22702_22738 = (0);
while(true){
if((i__22702_22738 < count__22701_22737)){
var slot_22739 = chunk__22700_22736.cljs$core$IIndexed$_nth$arity$2(null,i__22702_22738);
var temp__5804__auto___22740 = (function (){var G__22719 = tiltontec.model.base.md_cz(me);
var G__22720 = cljs.core.cst$kw$not_DASH_found;
return (slot_22739.cljs$core$IFn$_invoke$arity$2 ? slot_22739.cljs$core$IFn$_invoke$arity$2(G__22719,G__22720) : slot_22739.call(null,G__22719,G__22720));
})();
if(cljs.core.truth_(temp__5804__auto___22740)){
var c_22741 = temp__5804__auto___22740;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22741,cljs.core.cst$kw$not_DASH_found)){
var G__22721_22742 = slot_22739;
var G__22722_22743 = me;
var G__22723_22744 = (function (){var G__22726 = cljs.core.deref(me);
return (slot_22739.cljs$core$IFn$_invoke$arity$1 ? slot_22739.cljs$core$IFn$_invoke$arity$1(G__22726) : slot_22739.call(null,G__22726));
})();
var G__22724_22745 = tiltontec.cell.base.unbound;
var G__22725_22746 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__22721_22742,G__22722_22743,G__22723_22744,G__22724_22745,G__22725_22746) : tiltontec.cell.observer.observe.call(null,G__22721_22742,G__22722_22743,G__22723_22744,G__22724_22745,G__22725_22746));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22741) : tiltontec.cell.evaluate.c_awaken.call(null,c_22741));

}
} else {
}


var G__22747 = seq__22699_22735;
var G__22748 = chunk__22700_22736;
var G__22749 = count__22701_22737;
var G__22750 = (i__22702_22738 + (1));
seq__22699_22735 = G__22747;
chunk__22700_22736 = G__22748;
count__22701_22737 = G__22749;
i__22702_22738 = G__22750;
continue;
} else {
var temp__5804__auto___22751 = cljs.core.seq(seq__22699_22735);
if(temp__5804__auto___22751){
var seq__22699_22752__$1 = temp__5804__auto___22751;
if(cljs.core.chunked_seq_QMARK_(seq__22699_22752__$1)){
var c__4556__auto___22753 = cljs.core.chunk_first(seq__22699_22752__$1);
var G__22754 = cljs.core.chunk_rest(seq__22699_22752__$1);
var G__22755 = c__4556__auto___22753;
var G__22756 = cljs.core.count(c__4556__auto___22753);
var G__22757 = (0);
seq__22699_22735 = G__22754;
chunk__22700_22736 = G__22755;
count__22701_22737 = G__22756;
i__22702_22738 = G__22757;
continue;
} else {
var slot_22758 = cljs.core.first(seq__22699_22752__$1);
var temp__5804__auto___22759__$1 = (function (){var G__22727 = tiltontec.model.base.md_cz(me);
var G__22728 = cljs.core.cst$kw$not_DASH_found;
return (slot_22758.cljs$core$IFn$_invoke$arity$2 ? slot_22758.cljs$core$IFn$_invoke$arity$2(G__22727,G__22728) : slot_22758.call(null,G__22727,G__22728));
})();
if(cljs.core.truth_(temp__5804__auto___22759__$1)){
var c_22760 = temp__5804__auto___22759__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22760,cljs.core.cst$kw$not_DASH_found)){
var G__22729_22761 = slot_22758;
var G__22730_22762 = me;
var G__22731_22763 = (function (){var G__22734 = cljs.core.deref(me);
return (slot_22758.cljs$core$IFn$_invoke$arity$1 ? slot_22758.cljs$core$IFn$_invoke$arity$1(G__22734) : slot_22758.call(null,G__22734));
})();
var G__22732_22764 = tiltontec.cell.base.unbound;
var G__22733_22765 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__22729_22761,G__22730_22762,G__22731_22763,G__22732_22764,G__22733_22765) : tiltontec.cell.observer.observe.call(null,G__22729_22761,G__22730_22762,G__22731_22763,G__22732_22764,G__22733_22765));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22760) : tiltontec.cell.evaluate.c_awaken.call(null,c_22760));

}
} else {
}


var G__22766 = cljs.core.next(seq__22699_22752__$1);
var G__22767 = null;
var G__22768 = (0);
var G__22769 = (0);
seq__22699_22735 = G__22766;
chunk__22700_22736 = G__22767;
count__22701_22737 = G__22768;
i__22702_22738 = G__22769;
continue;
}
} else {
}
}
break;
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awake);

return me;
});
