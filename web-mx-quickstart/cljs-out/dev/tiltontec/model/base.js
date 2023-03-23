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
var G__16679 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__16679) : prop.call(null,G__16679));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,prop,c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
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

var seq__16680_16716 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__16681_16717 = null;
var count__16682_16718 = (0);
var i__16683_16719 = (0);
while(true){
if((i__16683_16719 < count__16682_16718)){
var prop_16720 = chunk__16681_16717.cljs$core$IIndexed$_nth$arity$2(null,i__16683_16719);
var temp__5804__auto___16721 = (function (){var G__16700 = tiltontec.model.base.md_cz(me);
var G__16701 = cljs.core.cst$kw$not_DASH_found;
return (prop_16720.cljs$core$IFn$_invoke$arity$2 ? prop_16720.cljs$core$IFn$_invoke$arity$2(G__16700,G__16701) : prop_16720.call(null,G__16700,G__16701));
})();
if(cljs.core.truth_(temp__5804__auto___16721)){
var c_16722 = temp__5804__auto___16721;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16722,cljs.core.cst$kw$not_DASH_found)){
var G__16702_16723 = prop_16720;
var G__16703_16724 = me;
var G__16704_16725 = (function (){var G__16707 = cljs.core.deref(me);
return (prop_16720.cljs$core$IFn$_invoke$arity$1 ? prop_16720.cljs$core$IFn$_invoke$arity$1(G__16707) : prop_16720.call(null,G__16707));
})();
var G__16705_16726 = tiltontec.cell.base.unbound;
var G__16706_16727 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__16702_16723,G__16703_16724,G__16704_16725,G__16705_16726,G__16706_16727) : tiltontec.cell.poly.watch.call(null,G__16702_16723,G__16703_16724,G__16704_16725,G__16705_16726,G__16706_16727));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16722) : tiltontec.cell.poly.c_awaken.call(null,c_16722));

}
} else {
}


var G__16728 = seq__16680_16716;
var G__16729 = chunk__16681_16717;
var G__16730 = count__16682_16718;
var G__16731 = (i__16683_16719 + (1));
seq__16680_16716 = G__16728;
chunk__16681_16717 = G__16729;
count__16682_16718 = G__16730;
i__16683_16719 = G__16731;
continue;
} else {
var temp__5804__auto___16732 = cljs.core.seq(seq__16680_16716);
if(temp__5804__auto___16732){
var seq__16680_16733__$1 = temp__5804__auto___16732;
if(cljs.core.chunked_seq_QMARK_(seq__16680_16733__$1)){
var c__4556__auto___16734 = cljs.core.chunk_first(seq__16680_16733__$1);
var G__16735 = cljs.core.chunk_rest(seq__16680_16733__$1);
var G__16736 = c__4556__auto___16734;
var G__16737 = cljs.core.count(c__4556__auto___16734);
var G__16738 = (0);
seq__16680_16716 = G__16735;
chunk__16681_16717 = G__16736;
count__16682_16718 = G__16737;
i__16683_16719 = G__16738;
continue;
} else {
var prop_16739 = cljs.core.first(seq__16680_16733__$1);
var temp__5804__auto___16740__$1 = (function (){var G__16708 = tiltontec.model.base.md_cz(me);
var G__16709 = cljs.core.cst$kw$not_DASH_found;
return (prop_16739.cljs$core$IFn$_invoke$arity$2 ? prop_16739.cljs$core$IFn$_invoke$arity$2(G__16708,G__16709) : prop_16739.call(null,G__16708,G__16709));
})();
if(cljs.core.truth_(temp__5804__auto___16740__$1)){
var c_16741 = temp__5804__auto___16740__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_16741,cljs.core.cst$kw$not_DASH_found)){
var G__16710_16742 = prop_16739;
var G__16711_16743 = me;
var G__16712_16744 = (function (){var G__16715 = cljs.core.deref(me);
return (prop_16739.cljs$core$IFn$_invoke$arity$1 ? prop_16739.cljs$core$IFn$_invoke$arity$1(G__16715) : prop_16739.call(null,G__16715));
})();
var G__16713_16745 = tiltontec.cell.base.unbound;
var G__16714_16746 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__16710_16742,G__16711_16743,G__16712_16744,G__16713_16745,G__16714_16746) : tiltontec.cell.poly.watch.call(null,G__16710_16742,G__16711_16743,G__16712_16744,G__16713_16745,G__16714_16746));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_16741) : tiltontec.cell.poly.c_awaken.call(null,c_16741));

}
} else {
}


var G__16747 = cljs.core.next(seq__16680_16733__$1);
var G__16748 = null;
var G__16749 = (0);
var G__16750 = (0);
seq__16680_16716 = G__16747;
chunk__16681_16717 = G__16748;
count__16682_16718 = G__16749;
i__16683_16719 = G__16750;
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
