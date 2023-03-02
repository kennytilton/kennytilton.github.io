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
var G__16903 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__16903) : slot.call(null,G__16903));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16904 = cljs.core.get_global_hierarchy;
return (fexpr__16904.cljs$core$IFn$_invoke$arity$0 ? fexpr__16904.cljs$core$IFn$_invoke$arity$0() : fexpr__16904.call(null));
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

var seq__16905_16941 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__16906_16942 = null;
var count__16907_16943 = (0);
var i__16908_16944 = (0);
while(true){
if((i__16908_16944 < count__16907_16943)){
var slot_16945 = chunk__16906_16942.cljs$core$IIndexed$_nth$arity$2(null,i__16908_16944);
var temp__5804__auto___16946 = (function (){var G__16925 = tiltontec.model.base.md_cz(me);
var G__16926 = cljs.core.cst$kw$not_DASH_found;
return (slot_16945.cljs$core$IFn$_invoke$arity$2 ? slot_16945.cljs$core$IFn$_invoke$arity$2(G__16925,G__16926) : slot_16945.call(null,G__16925,G__16926));
})();
if(cljs.core.truth_(temp__5804__auto___16946)){
var c_16947 = temp__5804__auto___16946;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16947,cljs.core.cst$kw$not_DASH_found)){
var G__16927_16948 = slot_16945;
var G__16928_16949 = me;
var G__16929_16950 = (function (){var G__16932 = cljs.core.deref(me);
return (slot_16945.cljs$core$IFn$_invoke$arity$1 ? slot_16945.cljs$core$IFn$_invoke$arity$1(G__16932) : slot_16945.call(null,G__16932));
})();
var G__16930_16951 = tiltontec.cell.base.unbound;
var G__16931_16952 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__16927_16948,G__16928_16949,G__16929_16950,G__16930_16951,G__16931_16952) : tiltontec.cell.observer.observe.call(null,G__16927_16948,G__16928_16949,G__16929_16950,G__16930_16951,G__16931_16952));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16947) : tiltontec.cell.evaluate.c_awaken.call(null,c_16947));

}
} else {
}


var G__16953 = seq__16905_16941;
var G__16954 = chunk__16906_16942;
var G__16955 = count__16907_16943;
var G__16956 = (i__16908_16944 + (1));
seq__16905_16941 = G__16953;
chunk__16906_16942 = G__16954;
count__16907_16943 = G__16955;
i__16908_16944 = G__16956;
continue;
} else {
var temp__5804__auto___16957 = cljs.core.seq(seq__16905_16941);
if(temp__5804__auto___16957){
var seq__16905_16958__$1 = temp__5804__auto___16957;
if(cljs.core.chunked_seq_QMARK_(seq__16905_16958__$1)){
var c__4556__auto___16959 = cljs.core.chunk_first(seq__16905_16958__$1);
var G__16960 = cljs.core.chunk_rest(seq__16905_16958__$1);
var G__16961 = c__4556__auto___16959;
var G__16962 = cljs.core.count(c__4556__auto___16959);
var G__16963 = (0);
seq__16905_16941 = G__16960;
chunk__16906_16942 = G__16961;
count__16907_16943 = G__16962;
i__16908_16944 = G__16963;
continue;
} else {
var slot_16964 = cljs.core.first(seq__16905_16958__$1);
var temp__5804__auto___16965__$1 = (function (){var G__16933 = tiltontec.model.base.md_cz(me);
var G__16934 = cljs.core.cst$kw$not_DASH_found;
return (slot_16964.cljs$core$IFn$_invoke$arity$2 ? slot_16964.cljs$core$IFn$_invoke$arity$2(G__16933,G__16934) : slot_16964.call(null,G__16933,G__16934));
})();
if(cljs.core.truth_(temp__5804__auto___16965__$1)){
var c_16966 = temp__5804__auto___16965__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16966,cljs.core.cst$kw$not_DASH_found)){
var G__16935_16967 = slot_16964;
var G__16936_16968 = me;
var G__16937_16969 = (function (){var G__16940 = cljs.core.deref(me);
return (slot_16964.cljs$core$IFn$_invoke$arity$1 ? slot_16964.cljs$core$IFn$_invoke$arity$1(G__16940) : slot_16964.call(null,G__16940));
})();
var G__16938_16970 = tiltontec.cell.base.unbound;
var G__16939_16971 = null;
(tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.observer.observe.cljs$core$IFn$_invoke$arity$5(G__16935_16967,G__16936_16968,G__16937_16969,G__16938_16970,G__16939_16971) : tiltontec.cell.observer.observe.call(null,G__16935_16967,G__16936_16968,G__16937_16969,G__16938_16970,G__16939_16971));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16966) : tiltontec.cell.evaluate.c_awaken.call(null,c_16966));

}
} else {
}


var G__16972 = cljs.core.next(seq__16905_16958__$1);
var G__16973 = null;
var G__16974 = (0);
var G__16975 = (0);
seq__16905_16941 = G__16972;
chunk__16906_16942 = G__16973;
count__16907_16943 = G__16974;
i__16908_16944 = G__16975;
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
