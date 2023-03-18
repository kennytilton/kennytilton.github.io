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
tiltontec.model.base.md_state = (function tiltontec$model$base$md_state(ref){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});

tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,prop){
var G__23912 = cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__23912) : prop.call(null,G__23912));
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

tiltontec.cell.base.c_assert.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nascent,tiltontec.model.base.md_state(me)));

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$awakening);

var seq__23913_23949 = cljs.core.seq(cljs.core.keys(cljs.core.deref(me)));
var chunk__23914_23950 = null;
var count__23915_23951 = (0);
var i__23916_23952 = (0);
while(true){
if((i__23916_23952 < count__23915_23951)){
var prop_23953 = chunk__23914_23950.cljs$core$IIndexed$_nth$arity$2(null,i__23916_23952);
var temp__5804__auto___23954 = (function (){var G__23933 = tiltontec.model.base.md_cz(me);
var G__23934 = cljs.core.cst$kw$not_DASH_found;
return (prop_23953.cljs$core$IFn$_invoke$arity$2 ? prop_23953.cljs$core$IFn$_invoke$arity$2(G__23933,G__23934) : prop_23953.call(null,G__23933,G__23934));
})();
if(cljs.core.truth_(temp__5804__auto___23954)){
var c_23955 = temp__5804__auto___23954;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_23955,cljs.core.cst$kw$not_DASH_found)){
var G__23935_23956 = prop_23953;
var G__23936_23957 = me;
var G__23937_23958 = (function (){var G__23940 = cljs.core.deref(me);
return (prop_23953.cljs$core$IFn$_invoke$arity$1 ? prop_23953.cljs$core$IFn$_invoke$arity$1(G__23940) : prop_23953.call(null,G__23940));
})();
var G__23938_23959 = tiltontec.cell.base.unbound;
var G__23939_23960 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__23935_23956,G__23936_23957,G__23937_23958,G__23938_23959,G__23939_23960) : tiltontec.cell.poly.watch.call(null,G__23935_23956,G__23936_23957,G__23937_23958,G__23938_23959,G__23939_23960));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_23955) : tiltontec.cell.poly.c_awaken.call(null,c_23955));

}
} else {
}


var G__23961 = seq__23913_23949;
var G__23962 = chunk__23914_23950;
var G__23963 = count__23915_23951;
var G__23964 = (i__23916_23952 + (1));
seq__23913_23949 = G__23961;
chunk__23914_23950 = G__23962;
count__23915_23951 = G__23963;
i__23916_23952 = G__23964;
continue;
} else {
var temp__5804__auto___23965 = cljs.core.seq(seq__23913_23949);
if(temp__5804__auto___23965){
var seq__23913_23966__$1 = temp__5804__auto___23965;
if(cljs.core.chunked_seq_QMARK_(seq__23913_23966__$1)){
var c__4556__auto___23967 = cljs.core.chunk_first(seq__23913_23966__$1);
var G__23968 = cljs.core.chunk_rest(seq__23913_23966__$1);
var G__23969 = c__4556__auto___23967;
var G__23970 = cljs.core.count(c__4556__auto___23967);
var G__23971 = (0);
seq__23913_23949 = G__23968;
chunk__23914_23950 = G__23969;
count__23915_23951 = G__23970;
i__23916_23952 = G__23971;
continue;
} else {
var prop_23972 = cljs.core.first(seq__23913_23966__$1);
var temp__5804__auto___23973__$1 = (function (){var G__23941 = tiltontec.model.base.md_cz(me);
var G__23942 = cljs.core.cst$kw$not_DASH_found;
return (prop_23972.cljs$core$IFn$_invoke$arity$2 ? prop_23972.cljs$core$IFn$_invoke$arity$2(G__23941,G__23942) : prop_23972.call(null,G__23941,G__23942));
})();
if(cljs.core.truth_(temp__5804__auto___23973__$1)){
var c_23974 = temp__5804__auto___23973__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c_23974,cljs.core.cst$kw$not_DASH_found)){
var G__23943_23975 = prop_23972;
var G__23944_23976 = me;
var G__23945_23977 = (function (){var G__23948 = cljs.core.deref(me);
return (prop_23972.cljs$core$IFn$_invoke$arity$1 ? prop_23972.cljs$core$IFn$_invoke$arity$1(G__23948) : prop_23972.call(null,G__23948));
})();
var G__23946_23978 = tiltontec.cell.base.unbound;
var G__23947_23979 = null;
(tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5 ? tiltontec.cell.poly.watch.cljs$core$IFn$_invoke$arity$5(G__23943_23975,G__23944_23976,G__23945_23977,G__23946_23978,G__23947_23979) : tiltontec.cell.poly.watch.call(null,G__23943_23975,G__23944_23976,G__23945_23977,G__23946_23978,G__23947_23979));
} else {
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(c_23974) : tiltontec.cell.poly.c_awaken.call(null,c_23974));

}
} else {
}


var G__23980 = cljs.core.next(seq__23913_23966__$1);
var G__23981 = null;
var G__23982 = (0);
var G__23983 = (0);
seq__23913_23949 = G__23980;
chunk__23914_23950 = G__23981;
count__23915_23951 = G__23982;
i__23916_23952 = G__23983;
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
