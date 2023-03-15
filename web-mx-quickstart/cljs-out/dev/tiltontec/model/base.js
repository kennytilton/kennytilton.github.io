// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.watch');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
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
var G__22485 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__22485) : prop.call(null,G__22485));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22486 = cljs.core.get_global_hierarchy;
return (fexpr__22486.cljs$core$IFn$_invoke$arity$0 ? fexpr__22486.cljs$core$IFn$_invoke$arity$0() : fexpr__22486.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.model.base","md-awaken-before"),tiltontec.util.base.mx_type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.model.base.md_awaken_before.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
return null;
}));
/**
 * (1) do initial evaluation of all ruled props
 * (2) call watchs of all props
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

(tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.model.base.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.model.base.md_awaken_before.call(null,me));

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

var seq__22487_22523 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__22488_22524 = null;
var count__22489_22525 = (0);
var i__22490_22526 = (0);
while(true){
if((i__22490_22526 < count__22489_22525)){
var prop_22527 = chunk__22488_22524.cljs$core$IIndexed$_nth$arity$2(null,i__22490_22526);
var temp__5804__auto___22528 = (function (){var G__22507 = tiltontec.model.base.md_cz(me);
var G__22508 = cljs.core.cst$kw$not_DASH_found;
return (prop_22527.cljs$core$IFn$_invoke$arity$2 ? prop_22527.cljs$core$IFn$_invoke$arity$2(G__22507,G__22508) : prop_22527.call(null,G__22507,G__22508));
})();
if(cljs.core.truth_(temp__5804__auto___22528)){
var c_22529 = temp__5804__auto___22528;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22529,cljs.core.cst$kw$not_DASH_found)){
var G__22509_22530 = prop_22527;
var G__22510_22531 = me;
var G__22511_22532 = (function (){var G__22514 = cljs.core.deref(me);
return (prop_22527.cljs$core$IFn$_invoke$arity$1 ? prop_22527.cljs$core$IFn$_invoke$arity$1(G__22514) : prop_22527.call(null,G__22514));
})();
var G__22512_22533 = tiltontec.cell.base.unbound;
var G__22513_22534 = null;
(tiltontec.cell.watch.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.watch.watch.cljs$core$IFn$_invoke$arity$5(G__22509_22530,G__22510_22531,G__22511_22532,G__22512_22533,G__22513_22534) : tiltontec.cell.watch.watch.call(null,G__22509_22530,G__22510_22531,G__22511_22532,G__22512_22533,G__22513_22534));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22529) : tiltontec.cell.evaluate.c_awaken.call(null,c_22529));

}
} else {
}


var G__22535 = seq__22487_22523;
var G__22536 = chunk__22488_22524;
var G__22537 = count__22489_22525;
var G__22538 = (i__22490_22526 + (1));
seq__22487_22523 = G__22535;
chunk__22488_22524 = G__22536;
count__22489_22525 = G__22537;
i__22490_22526 = G__22538;
continue;
} else {
var temp__5804__auto___22539 = cljs.core.seq(seq__22487_22523);
if(temp__5804__auto___22539){
var seq__22487_22540__$1 = temp__5804__auto___22539;
if(cljs.core.chunked_seq_QMARK_(seq__22487_22540__$1)){
var c__4556__auto___22541 = cljs.core.chunk_first(seq__22487_22540__$1);
var G__22542 = cljs.core.chunk_rest(seq__22487_22540__$1);
var G__22543 = c__4556__auto___22541;
var G__22544 = cljs.core.count(c__4556__auto___22541);
var G__22545 = (0);
seq__22487_22523 = G__22542;
chunk__22488_22524 = G__22543;
count__22489_22525 = G__22544;
i__22490_22526 = G__22545;
continue;
} else {
var prop_22546 = cljs.core.first(seq__22487_22540__$1);
var temp__5804__auto___22547__$1 = (function (){var G__22515 = tiltontec.model.base.md_cz(me);
var G__22516 = cljs.core.cst$kw$not_DASH_found;
return (prop_22546.cljs$core$IFn$_invoke$arity$2 ? prop_22546.cljs$core$IFn$_invoke$arity$2(G__22515,G__22516) : prop_22546.call(null,G__22515,G__22516));
})();
if(cljs.core.truth_(temp__5804__auto___22547__$1)){
var c_22548 = temp__5804__auto___22547__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_22548,cljs.core.cst$kw$not_DASH_found)){
var G__22517_22549 = prop_22546;
var G__22518_22550 = me;
var G__22519_22551 = (function (){var G__22522 = cljs.core.deref(me);
return (prop_22546.cljs$core$IFn$_invoke$arity$1 ? prop_22546.cljs$core$IFn$_invoke$arity$1(G__22522) : prop_22546.call(null,G__22522));
})();
var G__22520_22552 = tiltontec.cell.base.unbound;
var G__22521_22553 = null;
(tiltontec.cell.watch.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.watch.watch.cljs$core$IFn$_invoke$arity$5(G__22517_22549,G__22518_22550,G__22519_22551,G__22520_22552,G__22521_22553) : tiltontec.cell.watch.watch.call(null,G__22517_22549,G__22518_22550,G__22519_22551,G__22520_22552,G__22521_22553));
} else {
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(c_22548) : tiltontec.cell.evaluate.c_awaken.call(null,c_22548));

}
} else {
}


var G__22554 = cljs.core.next(seq__22487_22540__$1);
var G__22555 = null;
var G__22556 = (0);
var G__22557 = (0);
seq__22487_22523 = G__22554;
chunk__22488_22524 = G__22555;
count__22489_22525 = G__22556;
i__22490_22526 = G__22557;
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
