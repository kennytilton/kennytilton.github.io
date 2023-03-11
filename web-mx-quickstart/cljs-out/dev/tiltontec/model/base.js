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
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,prop){
var G__16744 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__16744) : prop.call(null,G__16744));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,prop,c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.assoc,cljs.core.cst$kw$prop,prop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me,me], 0));

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))?tiltontec.cell.base.c_value(c):null));

return true;
} else {
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),c);

return false;

}
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.model !== 'undefined') && (typeof tiltontec.model.base !== 'undefined') && (typeof tiltontec.model.base.md_awaken_before !== 'undefined')){
} else {
tiltontec.model.base.md_awaken_before = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16745 = cljs.core.get_global_hierarchy;
return (fexpr__16745.cljs$core$IFn$_invoke$arity$0 ? fexpr__16745.cljs$core$IFn$_invoke$arity$0() : fexpr__16745.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.util.base.mx_type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.model.base.md_awaken_before.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled props
 * (2) call observers of all props
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

(tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.model.base.md_awaken_before.call(null,me));

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

var seq__16746_16782 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__16747_16783 = null;
var count__16748_16784 = (0);
var i__16749_16785 = (0);
while(true){
if((i__16749_16785 < count__16748_16784)){
var prop_16786 = chunk__16747_16783.cljs$core$IIndexed$_nth$arity$2(null,i__16749_16785);
var temp__5804__auto___16787 = (function (){var G__16766 = tiltontec.model.base.md_cz(me);
var G__16767 = cljs.core.cst$kw$not_DASH_found;
return (prop_16786.cljs$core$IFn$_invoke$arity$2 ? prop_16786.cljs$core$IFn$_invoke$arity$2(G__16766,G__16767) : prop_16786.call(null,G__16766,G__16767));
})();
if(cljs.core.truth_(temp__5804__auto___16787)){
var c_16788 = temp__5804__auto___16787;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16788,cljs.core.cst$kw$not_DASH_found)){
var G__16768_16789 = prop_16786;
var G__16769_16790 = me;
var G__16770_16791 = (function (){var G__16773 = cljs.core.deref(me);
return (prop_16786.cljs$core$IFn$_invoke$arity$1 ? prop_16786.cljs$core$IFn$_invoke$arity$1(G__16773) : prop_16786.call(null,G__16773));
})();
var G__16771_16792 = tiltontec.cell.base.unbound;
var G__16772_16793 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__16768_16789,G__16769_16790,G__16770_16791,G__16771_16792,G__16772_16793) : tiltontec.cell.observer.observe.call(null,G__16768_16789,G__16769_16790,G__16770_16791,G__16771_16792,G__16772_16793));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16788) : tiltontec.cell.evaluate.c_awaken.call(null,c_16788));

}
} else {
}


var G__16794 = seq__16746_16782;
var G__16795 = chunk__16747_16783;
var G__16796 = count__16748_16784;
var G__16797 = (i__16749_16785 + (1));
seq__16746_16782 = G__16794;
chunk__16747_16783 = G__16795;
count__16748_16784 = G__16796;
i__16749_16785 = G__16797;
continue;
} else {
var temp__5804__auto___16798 = cljs.core.seq(seq__16746_16782);
if(temp__5804__auto___16798){
var seq__16746_16799__$1 = temp__5804__auto___16798;
if(cljs.core.chunked_seq_QMARK_(seq__16746_16799__$1)){
var c__4556__auto___16800 = cljs.core.chunk_first(seq__16746_16799__$1);
var G__16801 = cljs.core.chunk_rest(seq__16746_16799__$1);
var G__16802 = c__4556__auto___16800;
var G__16803 = cljs.core.count(c__4556__auto___16800);
var G__16804 = (0);
seq__16746_16782 = G__16801;
chunk__16747_16783 = G__16802;
count__16748_16784 = G__16803;
i__16749_16785 = G__16804;
continue;
} else {
var prop_16805 = cljs.core.first(seq__16746_16799__$1);
var temp__5804__auto___16806__$1 = (function (){var G__16774 = tiltontec.model.base.md_cz(me);
var G__16775 = cljs.core.cst$kw$not_DASH_found;
return (prop_16805.cljs$core$IFn$_invoke$arity$2 ? prop_16805.cljs$core$IFn$_invoke$arity$2(G__16774,G__16775) : prop_16805.call(null,G__16774,G__16775));
})();
if(cljs.core.truth_(temp__5804__auto___16806__$1)){
var c_16807 = temp__5804__auto___16806__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16807,cljs.core.cst$kw$not_DASH_found)){
var G__16776_16808 = prop_16805;
var G__16777_16809 = me;
var G__16778_16810 = (function (){var G__16781 = cljs.core.deref(me);
return (prop_16805.cljs$core$IFn$_invoke$arity$1 ? prop_16805.cljs$core$IFn$_invoke$arity$1(G__16781) : prop_16805.call(null,G__16781));
})();
var G__16779_16811 = tiltontec.cell.base.unbound;
var G__16780_16812 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__16776_16808,G__16777_16809,G__16778_16810,G__16779_16811,G__16780_16812) : tiltontec.cell.observer.observe.call(null,G__16776_16808,G__16777_16809,G__16778_16810,G__16779_16811,G__16780_16812));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16807) : tiltontec.cell.evaluate.c_awaken.call(null,c_16807));

}
} else {
}


var G__16813 = cljs.core.next(seq__16746_16799__$1);
var G__16814 = null;
var G__16815 = (0);
var G__16816 = (0);
seq__16746_16782 = G__16813;
chunk__16747_16783 = G__16814;
count__16748_16784 = G__16815;
i__16749_16785 = G__16816;
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
