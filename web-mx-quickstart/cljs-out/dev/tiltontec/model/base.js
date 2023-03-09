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
var G__22711 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__22711) : slot.call(null,G__22711));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22712 = cljs.core.get_global_hierarchy;
return (fexpr__22712.cljs$core$IFn$_invoke$arity$0 ? fexpr__22712.cljs$core$IFn$_invoke$arity$0() : fexpr__22712.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.cell.base.ia_type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
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

var seq__22713_22749 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__22714_22750 = null;
var count__22715_22751 = (0);
var i__22716_22752 = (0);
while(true){
if((i__22716_22752 < count__22715_22751)){
var slot_22753 = chunk__22714_22750.cljs$core$IIndexed$_nth$arity$2(null,i__22716_22752);
var temp__5804__auto___22754 = (function (){var G__22733 = tiltontec.model.base.md_cz(me);
var G__22734 = cljs.core.cst$kw$not_DASH_found;
return (slot_22753.cljs$core$IFn$_invoke$arity$2 ? slot_22753.cljs$core$IFn$_invoke$arity$2(G__22733,G__22734) : slot_22753.call(null,G__22733,G__22734));
})();
if(cljs.core.truth_(temp__5804__auto___22754)){
var c_22755 = temp__5804__auto___22754;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22755,cljs.core.cst$kw$not_DASH_found)){
var G__22735_22756 = slot_22753;
var G__22736_22757 = me;
var G__22737_22758 = (function (){var G__22740 = cljs.core.deref(me);
return (slot_22753.cljs$core$IFn$_invoke$arity$1 ? slot_22753.cljs$core$IFn$_invoke$arity$1(G__22740) : slot_22753.call(null,G__22740));
})();
var G__22738_22759 = tiltontec.cell.base.unbound;
var G__22739_22760 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__22735_22756,G__22736_22757,G__22737_22758,G__22738_22759,G__22739_22760) : tiltontec.cell.observer.observe.call(null,G__22735_22756,G__22736_22757,G__22737_22758,G__22738_22759,G__22739_22760));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22755) : tiltontec.cell.evaluate.c_awaken.call(null,c_22755));

}
} else {
}


var G__22761 = seq__22713_22749;
var G__22762 = chunk__22714_22750;
var G__22763 = count__22715_22751;
var G__22764 = (i__22716_22752 + (1));
seq__22713_22749 = G__22761;
chunk__22714_22750 = G__22762;
count__22715_22751 = G__22763;
i__22716_22752 = G__22764;
continue;
} else {
var temp__5804__auto___22765 = cljs.core.seq(seq__22713_22749);
if(temp__5804__auto___22765){
var seq__22713_22766__$1 = temp__5804__auto___22765;
if(cljs.core.chunked_seq_QMARK_(seq__22713_22766__$1)){
var c__4556__auto___22767 = cljs.core.chunk_first(seq__22713_22766__$1);
var G__22768 = cljs.core.chunk_rest(seq__22713_22766__$1);
var G__22769 = c__4556__auto___22767;
var G__22770 = cljs.core.count(c__4556__auto___22767);
var G__22771 = (0);
seq__22713_22749 = G__22768;
chunk__22714_22750 = G__22769;
count__22715_22751 = G__22770;
i__22716_22752 = G__22771;
continue;
} else {
var slot_22772 = cljs.core.first(seq__22713_22766__$1);
var temp__5804__auto___22773__$1 = (function (){var G__22741 = tiltontec.model.base.md_cz(me);
var G__22742 = cljs.core.cst$kw$not_DASH_found;
return (slot_22772.cljs$core$IFn$_invoke$arity$2 ? slot_22772.cljs$core$IFn$_invoke$arity$2(G__22741,G__22742) : slot_22772.call(null,G__22741,G__22742));
})();
if(cljs.core.truth_(temp__5804__auto___22773__$1)){
var c_22774 = temp__5804__auto___22773__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22774,cljs.core.cst$kw$not_DASH_found)){
var G__22743_22775 = slot_22772;
var G__22744_22776 = me;
var G__22745_22777 = (function (){var G__22748 = cljs.core.deref(me);
return (slot_22772.cljs$core$IFn$_invoke$arity$1 ? slot_22772.cljs$core$IFn$_invoke$arity$1(G__22748) : slot_22772.call(null,G__22748));
})();
var G__22746_22778 = tiltontec.cell.base.unbound;
var G__22747_22779 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__22743_22775,G__22744_22776,G__22745_22777,G__22746_22778,G__22747_22779) : tiltontec.cell.observer.observe.call(null,G__22743_22775,G__22744_22776,G__22745_22777,G__22746_22778,G__22747_22779));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22774) : tiltontec.cell.evaluate.c_awaken.call(null,c_22774));

}
} else {
}


var G__22780 = cljs.core.next(seq__22713_22766__$1);
var G__22781 = null;
var G__22782 = (0);
var G__22783 = (0);
seq__22713_22749 = G__22780;
chunk__22714_22750 = G__22781;
count__22715_22751 = G__22782;
i__22716_22752 = G__22783;
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
