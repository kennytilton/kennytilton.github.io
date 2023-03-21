// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
});
tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,prop){
var G__16671 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__16671) : prop.call(null,G__16671));
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
/**
 * (1) do initial evaluation of all ruled props
 * (2) call watchs of all props
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

(tiltontec.cell.poly.md_awaken_before.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_awaken_before.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.cell.poly.md_awaken_before.call(null,me));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.cell.base.md_state(me))){
} else {
throw (new Error(["Assert failed: ",["md-awaken> state not nascent post-awaken-before: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = tiltontec.cell.base.md_state(me);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})())," meta: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))].join(''),"\n","(= :nascent (md-state me))"].join('')));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,me], null),cljs.core.cst$kw$awakening);

var seq__16672_16708 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__16673_16709 = null;
var count__16674_16710 = (0);
var i__16675_16711 = (0);
while(true){
if((i__16675_16711 < count__16674_16710)){
var prop_16712 = chunk__16673_16709.cljs$core$IIndexed$_nth$arity$2(null,i__16675_16711);
var temp__5804__auto___16713 = (function (){var G__16692 = tiltontec.model.base.md_cz(me);
var G__16693 = cljs.core.cst$kw$not_DASH_found;
return (prop_16712.cljs$core$IFn$_invoke$arity$2 ? prop_16712.cljs$core$IFn$_invoke$arity$2(G__16692,G__16693) : prop_16712.call(null,G__16692,G__16693));
})();
if(cljs.core.truth_(temp__5804__auto___16713)){
var c_16714 = temp__5804__auto___16713;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16714,cljs.core.cst$kw$not_DASH_found)){
var G__16694_16715 = prop_16712;
var G__16695_16716 = me;
var G__16696_16717 = (function (){var G__16699 = cljs.core.deref(me);
return (prop_16712.cljs$core$IFn$_invoke$arity$1 ? prop_16712.cljs$core$IFn$_invoke$arity$1(G__16699) : prop_16712.call(null,G__16699));
})();
var G__16697_16718 = tiltontec.cell.base.unbound;
var G__16698_16719 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__16694_16715,G__16695_16716,G__16696_16717,G__16697_16718,G__16698_16719) : tiltontec.cell.poly.watch.call(null,G__16694_16715,G__16695_16716,G__16696_16717,G__16697_16718,G__16698_16719));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16714) : tiltontec.cell.poly.c_awaken.call(null,c_16714));

}
} else {
}


var G__16720 = seq__16672_16708;
var G__16721 = chunk__16673_16709;
var G__16722 = count__16674_16710;
var G__16723 = (i__16675_16711 + (1));
seq__16672_16708 = G__16720;
chunk__16673_16709 = G__16721;
count__16674_16710 = G__16722;
i__16675_16711 = G__16723;
continue;
} else {
var temp__5804__auto___16724 = cljs.core.seq(seq__16672_16708);
if(temp__5804__auto___16724){
var seq__16672_16725__$1 = temp__5804__auto___16724;
if(cljs.core.chunked_seq_QMARK_(seq__16672_16725__$1)){
var c__4556__auto___16726 = cljs.core.chunk_first(seq__16672_16725__$1);
var G__16727 = cljs.core.chunk_rest(seq__16672_16725__$1);
var G__16728 = c__4556__auto___16726;
var G__16729 = cljs.core.count(c__4556__auto___16726);
var G__16730 = (0);
seq__16672_16708 = G__16727;
chunk__16673_16709 = G__16728;
count__16674_16710 = G__16729;
i__16675_16711 = G__16730;
continue;
} else {
var prop_16731 = cljs.core.first(seq__16672_16725__$1);
var temp__5804__auto___16732__$1 = (function (){var G__16700 = tiltontec.model.base.md_cz(me);
var G__16701 = cljs.core.cst$kw$not_DASH_found;
return (prop_16731.cljs$core$IFn$_invoke$arity$2 ? prop_16731.cljs$core$IFn$_invoke$arity$2(G__16700,G__16701) : prop_16731.call(null,G__16700,G__16701));
})();
if(cljs.core.truth_(temp__5804__auto___16732__$1)){
var c_16733 = temp__5804__auto___16732__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16733,cljs.core.cst$kw$not_DASH_found)){
var G__16702_16734 = prop_16731;
var G__16703_16735 = me;
var G__16704_16736 = (function (){var G__16707 = cljs.core.deref(me);
return (prop_16731.cljs$core$IFn$_invoke$arity$1 ? prop_16731.cljs$core$IFn$_invoke$arity$1(G__16707) : prop_16731.call(null,G__16707));
})();
var G__16705_16737 = tiltontec.cell.base.unbound;
var G__16706_16738 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__16702_16734,G__16703_16735,G__16704_16736,G__16705_16737,G__16706_16738) : tiltontec.cell.poly.watch.call(null,G__16702_16734,G__16703_16735,G__16704_16736,G__16705_16737,G__16706_16738));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16733) : tiltontec.cell.poly.c_awaken.call(null,c_16733));

}
} else {
}


var G__16739 = cljs.core.next(seq__16672_16725__$1);
var G__16740 = null;
var G__16741 = (0);
var G__16742 = (0);
seq__16672_16708 = G__16739;
chunk__16673_16709 = G__16740;
count__16674_16710 = G__16741;
i__16675_16711 = G__16742;
continue;
}
} else {
}
}
break;
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,me], null),cljs.core.cst$kw$awake);

return me;
});
