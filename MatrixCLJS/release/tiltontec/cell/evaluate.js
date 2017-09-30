// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__4657__auto___14025 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__4657__auto___14025)){
var me_14026 = temp__4657__auto___14025;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_14026,cljs.core.assoc,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rc,cljs.core.assoc,cljs.core.cst$kw$value,null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$reco_DASH_dep_BANG__BANG__BANG_,cljs.core.cst$kw$used,tiltontec.cell.base.c_slot(used),cljs.core.cst$kw$caller,tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)], 0));

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$useds,tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_useds(tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure(used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(tiltontec.cell.base._STAR_not_to_be_STAR_){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_(c))){
var G__14027 = "evic> unbound slot %s of model %s";
var G__14028 = tiltontec.cell.base.c_slot(c);
var G__14029 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__14027,G__14028,G__14029) : tiltontec.util.core.err.call(null,G__14027,G__14028,G__14029));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_(c))){
return tiltontec.cell.base.c_value(c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var and__6628__auto__ = tiltontec.cell.base.c_input_QMARK_(c);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.cell.base.c_valid_QMARK_(c);
if(cljs.core.truth_(and__6628__auto____$1)){
return cljs.core.not((function (){var and__6628__auto____$2 = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6628__auto____$2)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_optimize(c),cljs.core.cst$kw$when_DASH_value_DASH_t)) && ((tiltontec.cell.base.c_value(c) == null));
} else {
return and__6628__auto____$2;
}
})());
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})())){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var temp__4657__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto__)){
var md = temp__4657__auto__;
var G__14030 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14030) : tiltontec.cell.base.mdead_QMARK_.call(null,G__14030));
} else {
return null;
}
})())){
var G__14031 = cljs.core.str;
var G__14032 = "evic> model %s of cell %s is dead";
var G__14033 = tiltontec.cell.base.c_model(c);
var G__14034 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__14031,G__14032,G__14033,G__14034) : tiltontec.util.core.err.call(null,G__14031,G__14032,G__14033,G__14034));
} else {
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core.not(tiltontec.cell.base.c_valid_QMARK_(c));
if(or__6640__auto__){
return or__6640__auto__;
} else {
var G__14051 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__14052 = G__14051;
var seq__14053 = cljs.core.seq(vec__14052);
var first__14054 = cljs.core.first(seq__14053);
var seq__14053__$1 = cljs.core.next(seq__14053);
var used = first__14054;
var urest = seq__14053__$1;
var G__14051__$1 = G__14051;
while(true){
var vec__14055 = G__14051__$1;
var seq__14056 = cljs.core.seq(vec__14055);
var first__14057 = cljs.core.first(seq__14056);
var seq__14056__$1 = cljs.core.next(seq__14056);
var used__$1 = first__14057;
var urest__$1 = seq__14056__$1;
if(cljs.core.truth_(used__$1)){
var G__14058_14064 = used__$1;
var G__14059_14065 = cljs.core.cst$kw$nested;
var G__14060_14066 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__14058_14064,G__14059_14065,G__14060_14066) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__14058_14064,G__14059_14065,G__14060_14066));

var or__6640__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed(used__$1) > tiltontec.cell.base.c_pulse(c));
if(or__6640__auto____$1){
return or__6640__auto____$1;
} else {
var G__14067 = urest__$1;
G__14051__$1 = G__14067;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
} else {
var G__14061_14068 = c;
var G__14062_14069 = cljs.core.cst$kw$evic;
var G__14063_14070 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__14061_14068,G__14062_14069,G__14063_14070) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__14061_14068,G__14062_14069,G__14063_14070));
}

return tiltontec.cell.base.c_value(c);
} else {
tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$valid_DASH_uninfluenced);

return tiltontec.cell.base.c_value(c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
var result__11919__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
var result__11919__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if(((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && ((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c)))){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__11919__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency(c);
} else {
}

return result__11919__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(c))){
return cljs.core.deref(c);
} else {
return c;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var raw_value = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(c))){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("calc-n-set"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(map? (clojure.core/deref c))")].join('')));
}

return (tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3(c,raw_value,null) : tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,null));
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_14071 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_14072 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_14073 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{var G__14074_14077 = c;
var G__14075_14078 = cljs.core.cst$kw$pre_DASH_rule_DASH_clear;
(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(G__14074_14077,G__14075_14078) : tiltontec.cell.evaluate.unlink_from_used.call(null,G__14074_14077,G__14075_14078));

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No rule in %s type %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c-rule c)")].join('')));
}

var fexpr__14076 = tiltontec.cell.base.c_rule(c);
return (fexpr__14076.cljs$core$IFn$_invoke$arity$1 ? fexpr__14076.cljs$core$IFn$_invoke$arity$1(c) : fexpr__14076.call(null,c));
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_14073;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14072;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_14071;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),((function (method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__){
return (function (c){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));
});})(method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__))
,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
if(cljs.core.coll_QMARK_(c)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7429__auto__ = (function tiltontec$cell$evaluate$iter__14079(s__14080){
return (new cljs.core.LazySeq(null,(function (){
var s__14080__$1 = s__14080;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14080__$1);
if(temp__4657__auto__){
var s__14080__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14080__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__14080__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__14082 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__14081 = (0);
while(true){
if((i__14081 < size__7428__auto__)){
var ce = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__14081);
cljs.core.chunk_append(b__14082,(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce)));

var G__14083 = (i__14081 + (1));
i__14081 = G__14083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14082),tiltontec$cell$evaluate$iter__14079(cljs.core.chunk_rest(s__14080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14082),null);
}
} else {
var ce = cljs.core.first(s__14080__$2);
return cljs.core.cons((tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce)),tiltontec$cell$evaluate$iter__14079(cljs.core.rest(s__14080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__(c);
})());
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_fall_DASH_thru,(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH_of,cljs.core.type(c),cljs.core.deref(c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unref,c,cljs.core.type(c)], null))], 0));

}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c))){
var temp__4657__auto___14084 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__4657__auto___14084)){
var me_14085 = temp__4657__auto___14084;
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),me_14085], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR_14086 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14086;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__11919__auto__ = new_value;
var _STAR_depender_STAR_14087_14091 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_14092 = tiltontec.cell.base.c_value(c);
var prior_state_14093 = tiltontec.cell.base.c_value_state(c);
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,c], null),new_value);

tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$awake);

if(cljs.core.truth_((function (){var and__6628__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__6628__auto__)){
return cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c));
} else {
return and__6628__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_slot_name(c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$slotv_DASH_assume);

if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,cljs.core.cst$kw$propagate);
if(or__6640__auto__){
return or__6640__auto__;
} else {
var or__6640__auto____$1 = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_14093]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
if(or__6640__auto____$1){
return or__6640__auto____$1;
} else {
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_14092) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_14092));
}
}
})())){
var callers_14094 = tiltontec.cell.base.c_callers(c);
var temp__4657__auto___14095 = (function (){var and__6628__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6628__auto__)){
return tiltontec.cell.base.c_optimize(c);
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto___14095)){
var optimize_14096 = temp__4657__auto___14095;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wtf,optimize_14096], 0));

var G__14088_14097 = optimize_14096;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_value_DASH_t,G__14088_14097)){
if(cljs.core.truth_(tiltontec.cell.base.c_value(c))){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$when_DASH_value_DASH_t,tiltontec.cell.base.c_slot(c)], 0));

var G__14089_14098 = c;
var G__14090_14099 = cljs.core.cst$kw$when_DASH_value_DASH_t;
(tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unlink_from_used.cljs$core$IFn$_invoke$arity$2(G__14089_14098,G__14090_14099) : tiltontec.cell.evaluate.unlink_from_used.call(null,G__14089_14098,G__14090_14099));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__14088_14097)){
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_14092) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_14092));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14088_14097)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,cljs.core.cst$kw$no_DASH_propagate);
if(or__6640__auto__){
return or__6640__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_(c);
}
})())){
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_14092,callers_14094) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_14092,callers_14094));
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14087_14091;
}
return result__11919__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__7429__auto___14104 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__14100(s__14101){
return (new cljs.core.LazySeq(null,(function (){
var s__14101__$1 = s__14101;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14101__$1);
if(temp__4657__auto__){
var s__14101__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14101__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__14101__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__14103 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__14102 = (0);
while(true){
if((i__14102 < size__7428__auto__)){
var used = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__14102);
cljs.core.chunk_append(b__14103,tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callers,used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)));

var G__14105 = (i__14102 + (1));
i__14102 = G__14105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14103),tiltontec$cell$evaluate$unlink_from_used_$_iter__14100(cljs.core.chunk_rest(s__14101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14103),null);
}
} else {
var used = cljs.core.first(s__14101__$2);
return cljs.core.cons(tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callers,used], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_callers(used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__14100(cljs.core.rest(s__14101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7429__auto___14104(tiltontec.cell.base.c_useds(c));

return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$useds,c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4657__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_pulse_observed(c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__6628__auto__ = tiltontec.cell.base.c_formula_QMARK_(c);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = cljs.core.empty_QMARK_(tiltontec.cell.base.c_useds(c));
if(and__6628__auto____$1){
var and__6628__auto____$2 = tiltontec.cell.base.c_optimize(c);
if(cljs.core.truth_(and__6628__auto____$2)){
var and__6628__auto____$3 = cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c));
if(and__6628__auto____$3){
var and__6628__auto____$4 = tiltontec.cell.base.c_valid_QMARK_(c);
if(cljs.core.truth_(and__6628__auto____$4)){
return (cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c))) && (cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c)));
} else {
return and__6628__auto____$4;
}
} else {
return and__6628__auto____$3;
}
} else {
return and__6628__auto____$2;
}
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})())){
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__4657__auto___14110 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__4657__auto___14110)){
var me_14111 = temp__4657__auto___14110;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_14111], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_14111)),tiltontec.cell.base.c_slot(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__14106_14112 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__14107_14113 = null;
var count__14108_14114 = (0);
var i__14109_14115 = (0);
while(true){
if((i__14109_14115 < count__14108_14114)){
var caller_14116 = chunk__14107_14113.cljs$core$IIndexed$_nth$arity$2(null,i__14109_14115);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_14116,cljs.core.assoc,cljs.core.cst$kw$useds,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_14116)));

tiltontec.cell.base.caller_drop(c,caller_14116);

tiltontec.cell.evaluate.ensure_value_is_current(caller_14116,cljs.core.cst$kw$opti_DASH_used,c);

var G__14117 = seq__14106_14112;
var G__14118 = chunk__14107_14113;
var G__14119 = count__14108_14114;
var G__14120 = (i__14109_14115 + (1));
seq__14106_14112 = G__14117;
chunk__14107_14113 = G__14118;
count__14108_14114 = G__14119;
i__14109_14115 = G__14120;
continue;
} else {
var temp__4657__auto___14121 = cljs.core.seq(seq__14106_14112);
if(temp__4657__auto___14121){
var seq__14106_14122__$1 = temp__4657__auto___14121;
if(cljs.core.chunked_seq_QMARK_(seq__14106_14122__$1)){
var c__7460__auto___14123 = cljs.core.chunk_first(seq__14106_14122__$1);
var G__14124 = cljs.core.chunk_rest(seq__14106_14122__$1);
var G__14125 = c__7460__auto___14123;
var G__14126 = cljs.core.count(c__7460__auto___14123);
var G__14127 = (0);
seq__14106_14112 = G__14124;
chunk__14107_14113 = G__14125;
count__14108_14114 = G__14126;
i__14109_14115 = G__14127;
continue;
} else {
var caller_14128 = cljs.core.first(seq__14106_14122__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caller_14128,cljs.core.assoc,cljs.core.cst$kw$useds,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller_14128)));

tiltontec.cell.base.caller_drop(c,caller_14128);

tiltontec.cell.evaluate.ensure_value_is_current(caller_14128,cljs.core.cst$kw$opti_DASH_used,c);

var G__14129 = cljs.core.next(seq__14106_14122__$1);
var G__14130 = null;
var G__14131 = (0);
var G__14132 = (0);
seq__14106_14112 = G__14129;
chunk__14107_14113 = G__14130;
count__14108_14114 = G__14131;
i__14109_14115 = G__14132;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(c,tiltontec.cell.base.c_value(c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.evaluate.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.not_to_be_self = (function tiltontec$cell$evaluate$not_to_be_self(me){
var seq__14133_14137 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__14134_14138 = null;
var count__14135_14139 = (0);
var i__14136_14140 = (0);
while(true){
if((i__14136_14140 < count__14135_14139)){
var c_14141 = chunk__14134_14138.cljs$core$IIndexed$_nth$arity$2(null,i__14136_14140);
if(cljs.core.truth_(c_14141)){
tiltontec.cell.evaluate.c_quiesce(c_14141);
} else {
}

var G__14142 = seq__14133_14137;
var G__14143 = chunk__14134_14138;
var G__14144 = count__14135_14139;
var G__14145 = (i__14136_14140 + (1));
seq__14133_14137 = G__14142;
chunk__14134_14138 = G__14143;
count__14135_14139 = G__14144;
i__14136_14140 = G__14145;
continue;
} else {
var temp__4657__auto___14146 = cljs.core.seq(seq__14133_14137);
if(temp__4657__auto___14146){
var seq__14133_14147__$1 = temp__4657__auto___14146;
if(cljs.core.chunked_seq_QMARK_(seq__14133_14147__$1)){
var c__7460__auto___14148 = cljs.core.chunk_first(seq__14133_14147__$1);
var G__14149 = cljs.core.chunk_rest(seq__14133_14147__$1);
var G__14150 = c__7460__auto___14148;
var G__14151 = cljs.core.count(c__7460__auto___14148);
var G__14152 = (0);
seq__14133_14137 = G__14149;
chunk__14134_14138 = G__14150;
count__14135_14139 = G__14151;
i__14136_14140 = G__14152;
continue;
} else {
var c_14153 = cljs.core.first(seq__14133_14147__$1);
if(cljs.core.truth_(c_14153)){
tiltontec.cell.evaluate.c_quiesce(c_14153);
} else {
}

var G__14154 = cljs.core.next(seq__14133_14147__$1);
var G__14155 = null;
var G__14156 = (0);
var G__14157 = (0);
seq__14133_14137 = G__14154;
chunk__14134_14138 = G__14155;
count__14135_14139 = G__14156;
i__14136_14140 = G__14157;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(me,null);

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,me], null),cljs.core.cst$kw$dead);
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","not-to-be"),((function (method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type(me)], null);
});})(method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__))
,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$not2be_DASH_default,cljs.core.type((cljs.core.truth_(me)?cljs.core.deref(me):null)),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),me], 0));

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7574__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7575__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7576__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7577__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7578__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type(cljs.core.deref(me)):null),slot], null);
});})(method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__,hierarchy__7578__auto__))
,cljs.core.cst$kw$default,hierarchy__7578__auto__,method_table__7574__auto__,prefer_table__7575__auto__,method_cache__7576__auto__,cached_hierarchy__7577__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__14160 = (function (){var or__6640__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var G__14161 = tiltontec.cell.base.c_model(c);
var G__14162 = tiltontec.cell.base.c_slot(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__14161,G__14162) : tiltontec.cell.evaluate.unchanged_test.call(null,G__14161,G__14162));
}
})();
return (fexpr__14160.cljs$core$IFn$_invoke$arity$2 ? fexpr__14160.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__14160.call(null,new_value,old_value));
})());
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return (tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.cljs$core$IFn$_invoke$arity$2(c,prior_value) : tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value));
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_14163 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_14164 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_14165 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_14166 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6628__auto__ = prior_value;
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__6628__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_(cljs.core.type(tiltontec.cell.base.c_model(c)),tiltontec.cell.base.c_slot_name(c));
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})())){
var temp__4657__auto___14171 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__4657__auto___14171)){
var ownees_14172 = temp__4657__auto___14171;
var seq__14167_14173 = cljs.core.seq(ownees_14172);
var chunk__14168_14174 = null;
var count__14169_14175 = (0);
var i__14170_14176 = (0);
while(true){
if((i__14170_14176 < count__14169_14175)){
var ownee_14177 = chunk__14168_14174.cljs$core$IIndexed$_nth$arity$2(null,i__14170_14176);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_14177) : tiltontec.cell.evaluate.not_to_be.call(null,ownee_14177));

var G__14178 = seq__14167_14173;
var G__14179 = chunk__14168_14174;
var G__14180 = count__14169_14175;
var G__14181 = (i__14170_14176 + (1));
seq__14167_14173 = G__14178;
chunk__14168_14174 = G__14179;
count__14169_14175 = G__14180;
i__14170_14176 = G__14181;
continue;
} else {
var temp__4657__auto___14182__$1 = cljs.core.seq(seq__14167_14173);
if(temp__4657__auto___14182__$1){
var seq__14167_14183__$1 = temp__4657__auto___14182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14167_14183__$1)){
var c__7460__auto___14184 = cljs.core.chunk_first(seq__14167_14183__$1);
var G__14185 = cljs.core.chunk_rest(seq__14167_14183__$1);
var G__14186 = c__7460__auto___14184;
var G__14187 = cljs.core.count(c__7460__auto___14184);
var G__14188 = (0);
seq__14167_14173 = G__14185;
chunk__14168_14174 = G__14186;
count__14169_14175 = G__14187;
i__14170_14176 = G__14188;
continue;
} else {
var ownee_14189 = cljs.core.first(seq__14167_14183__$1);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(ownee_14189) : tiltontec.cell.evaluate.not_to_be.call(null,ownee_14189));

var G__14190 = cljs.core.next(seq__14167_14183__$1);
var G__14191 = null;
var G__14192 = (0);
var G__14193 = (0);
seq__14167_14173 = G__14190;
chunk__14168_14174 = G__14191;
count__14169_14175 = G__14192;
i__14170_14176 = G__14193;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

(tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.propagate_to_callers.cljs$core$IFn$_invoke$arity$2(c,callers) : tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers));

if(cljs.core.truth_((function (){var or__6640__auto__ = (cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed(c));
if(or__6640__auto__){
return or__6640__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null));
}
})())){
tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$propagate);
} else {
}

return tiltontec.cell.evaluate.ephemeral_reset(c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_14166;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_14165;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_14164;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14163;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_(callers)){
return null;
} else {
var causation = cljs.core.cons(c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$tell_DASH_dependents,c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_((function (){var G__14194 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14194) : tiltontec.cell.base.mdead_QMARK_.call(null,G__14194));
})())){
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("WHOAA!!!! dead by time :tell-deps dispatched; bailing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
} else {
var _STAR_causation_STAR_14195 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__14196 = cljs.core.seq(cljs.core.seq(callers));
var chunk__14197 = null;
var count__14198 = (0);
var i__14199 = (0);
while(true){
if((i__14199 < count__14198)){
var caller = chunk__14197.cljs$core$IIndexed$_nth$arity$2(null,i__14199);
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__6640__auto__){
return or__6640__auto__;
} else {
var or__6640__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
var or__6640__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__6640__auto____$2)){
return or__6640__auto____$2;
} else {
return (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && (cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c)));
}
}
}
})())){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$not_DASH_propping,tiltontec.cell.base.c_slot(c),cljs.core.cst$kw$to,tiltontec.cell.base.c_slot(caller)], 0));
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}

var G__14200 = seq__14196;
var G__14201 = chunk__14197;
var G__14202 = count__14198;
var G__14203 = (i__14199 + (1));
seq__14196 = G__14200;
chunk__14197 = G__14201;
count__14198 = G__14202;
i__14199 = G__14203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14196);
if(temp__4657__auto__){
var seq__14196__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14196__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__14196__$1);
var G__14204 = cljs.core.chunk_rest(seq__14196__$1);
var G__14205 = c__7460__auto__;
var G__14206 = cljs.core.count(c__7460__auto__);
var G__14207 = (0);
seq__14196 = G__14204;
chunk__14197 = G__14205;
count__14198 = G__14206;
i__14199 = G__14207;
continue;
} else {
var caller = cljs.core.first(seq__14196__$1);
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__6640__auto__){
return or__6640__auto__;
} else {
var or__6640__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
var or__6640__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__6640__auto____$2)){
return or__6640__auto____$2;
} else {
return (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && (cljs.core.not(tiltontec.cell.base.c_optimized_away_QMARK_(c)));
}
}
}
})())){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$not_DASH_propping,tiltontec.cell.base.c_slot(c),cljs.core.cst$kw$to,tiltontec.cell.base.c_slot(caller)], 0));
} else {
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}

var G__14208 = cljs.core.next(seq__14196__$1);
var G__14209 = null;
var G__14210 = (0);
var G__14211 = (0);
seq__14196 = G__14208;
chunk__14197 = G__14209;
count__14198 = G__14210;
i__14199 = G__14211;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_14195;
}}
});})(causation))
);
}
});
