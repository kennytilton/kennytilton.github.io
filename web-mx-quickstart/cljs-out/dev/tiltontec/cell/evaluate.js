// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.diagnostic');
goog.require('tiltontec.cell.watch');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.integrity');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__5804__auto___15098 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___15098)){
var me_15099 = temp__5804__auto___15098;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_15099,cljs.core.assoc,cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rc,cljs.core.assoc,cljs.core.cst$kw$value,null);
}));
} else {
return null;
}
});

/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(cljs.core.truth_(tiltontec.cell.base._STAR_quiesce_STAR_)){
if(tiltontec.cell.base.c_unbound_QMARK_(c)){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":unbound!!!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.c_prop], 0));

var G__15100 = "evic> unbound prop %s of model %s";
var G__15101 = tiltontec.cell.base.c_prop(c);
var G__15102 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__15100,G__15101,G__15102) : tiltontec.util.core.err.call(null,G__15100,G__15101,G__15102));
} else {
if(tiltontec.cell.base.c_valid_QMARK_(c)){
return tiltontec.cell.base.c_value(c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_input_QMARK_(c);
if(cljs.core.truth_(and__4115__auto__)){
return ((tiltontec.cell.base.c_valid_QMARK_(c)) && ((!(((tiltontec.cell.base.c_formula_QMARK_(c)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_optimize(c),cljs.core.cst$kw$when_DASH_value_DASH_t)) && ((tiltontec.cell.base.c_value(c) == null)))))));
} else {
return and__4115__auto__;
}
})())){
return tiltontec.cell.base.c_value(c);
} else {
if(cljs.core.truth_((function (){var temp__5804__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto__)){
var md = temp__5804__auto__;
return tiltontec.cell.base.mdead_QMARK_(tiltontec.cell.base.c_model(c));
} else {
return null;
}
})())){
var G__15103 = cljs.core.str;
var G__15104 = "evic> model %s of cell %s is dead";
var G__15105 = tiltontec.cell.base.c_model(c);
var G__15106 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__15103,G__15104,G__15105,G__15106) : tiltontec.util.core.err.call(null,G__15103,G__15104,G__15105,G__15106));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__15123 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__15124 = G__15123;
var seq__15125 = cljs.core.seq(vec__15124);
var first__15126 = cljs.core.first(seq__15125);
var seq__15125__$1 = cljs.core.next(seq__15125);
var used = first__15126;
var urest = seq__15125__$1;
var G__15123__$1 = G__15123;
while(true){
var vec__15127 = G__15123__$1;
var seq__15128 = cljs.core.seq(vec__15127);
var first__15129 = cljs.core.first(seq__15128);
var seq__15128__$1 = cljs.core.next(seq__15128);
var used__$1 = first__15129;
var urest__$1 = seq__15128__$1;
if(cljs.core.truth_(used__$1)){
var G__15130_15136 = used__$1;
var G__15131_15137 = cljs.core.cst$kw$nested;
var G__15132_15138 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__15130_15136,G__15131_15137,G__15132_15138) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__15130_15136,G__15131_15137,G__15132_15138));

var or__4126__auto____$1 = (function (){var temp__5804__auto__ = tiltontec.cell.base.c_pulse_last_changed(used__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var last_changed = temp__5804__auto__;
return (last_changed > tiltontec.cell.base.c_pulse(c));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__15139 = urest__$1;
G__15123__$1 = G__15139;
continue;
}
} else {
return null;
}
break;
}
}
})())){
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$1(c);
var calc_val = (cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))?null:(function (){
tiltontec.cell.base.cdbg(c,cljs.core.cst$kw$evic_DASH_sees_DASH_uncurrent);

var G__15133 = c;
var G__15134 = cljs.core.cst$kw$evic;
var G__15135 = ensurer;
return (tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__15133,G__15134,G__15135) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__15133,G__15134,G__15135));
})()
);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$evic_DASH_uncurrent_DASH_returns,tiltontec.cell.base.c_value(c),cljs.core.cst$kw$not_DASH_calc,calc_val,cljs.core.cst$kw$ci,tiltontec.cell.base.cinfo(c)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$evic_DASH_uncurrent_DASH_cee_BANG__BANG__BANG_,cljs.core.deref(c),(tiltontec.cell.evaluate.cget_value_as_is.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.cget_value_as_is.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.cget_value_as_is.call(null,c))], 0));
} else {
}

return (tiltontec.cell.evaluate.cget_value_as_is.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.cget_value_as_is.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.cget_value_as_is.call(null,c));
} else {
tiltontec.cell.base.cdbg(c,cljs.core.cst$kw$just_DASH_pulse_DASH_valid_DASH_uninfluenced);

tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$valid_DASH_uninfluenced);

return tiltontec.cell.base.c_value(c);

}
}
}
}
}
});
tiltontec.cell.evaluate.cget_value_as_is = (function tiltontec$cell$evaluate$cget_value_as_is(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
if(((cljs.core.map_QMARK_(cljs.core.deref(c))) && (cljs.core.contains_QMARK_(cljs.core.deref(c),cljs.core.cst$kw$tiltontec$cell$base_SLASH_state)))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
} else {
return cljs.core.deref(c);
}
} else {
return c;

}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been watched.
 */
tiltontec.cell.evaluate.cget = (function tiltontec$cell$evaluate$cget(c){
if((!(tiltontec.cell.base.c_ref_QMARK_(c)))){
return c;
} else {
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return tiltontec.cell.evaluate.cget_value_as_is(c);
} else {
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cget);
var _ = (cljs.core.truth_(dbg_QMARK_)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cget_DASH_sees_DASH_integ,tiltontec.cell.base._STAR_within_integrity_STAR_], 0)):null);
var ci = tiltontec.cell.base.cinfo(c);
var pg1 = (function (){var result__10625__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error(["Assert failed: ","c lost c-refness","\n","(c-ref? c)"].join('')));
}

var prior_value = tiltontec.cell.base.c_value(c);
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$cget_DASH_core,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.util.base.mx_type(tiltontec.cell.base.c_model(c))], 0));

var result__10625__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
if(tiltontec.cell.base.c_ref_QMARK_(c)){
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$cget_DASH_post_DASH_evic_DASH_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0));
} else {
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$evic_DASH_flushed_DASH_returns,ev,cljs.core.cst$kw$ci_DASH_was,ci], 0));
} else {
}
}

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cget_DASH_ev_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_,ev,cljs.core.cst$kw$ci_DASH_was,ci], 0));
} else {
}

return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && (tiltontec.cell.base.c_pulse_unwatched_QMARK_(c)))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__10625__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record(c);
} else {
}

return result__10625__auto__;
})();
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cget_DASH_returns_BANG__BANG__BANG__BANG__BANG__BANG_,pg1,cljs.core.cst$kw$ci_DASH_was,ci], 0));
} else {
}

return pg1;

}
}
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__15140 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15140,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15140,(1),null);
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$post_DASH_cnlink_DASH_sees_BANG__BANG__BANG__BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbgid,cljs.core.cst$kw$opti,tiltontec.cell.base.c_optimized_away_QMARK_(c),cljs.core.cst$kw$prop,tiltontec.cell.base.c_prop(c),raw_value,propagation_code], 0));

if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error(["Assert failed: ","calc-n-set","\n","(map? (deref c))"].join('')));
}

tiltontec.cell.base.cdbg(c,cljs.core.cst$kw$not_DASH_optimized_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_);

return (tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_assume.cljs$core$IFn$_invoke$arity$3(c,raw_value,propagation_code) : tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code));
}

});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value*, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 * 
 *   * Well, we also look to see if a synaptic cell has attached a
 *   propagaion code to a vector used to wrap the raw value, which we then unpack.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base._STAR_call_stack_STAR_))){
var me_15165 = tiltontec.cell.base.c_model(c);
var prop_15166 = tiltontec.cell.base.c_prop_name(c);
var G__15143_15167 = cljs.core.str;
var G__15144_15168 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '";
var G__15145_15169 = prop_15166;
var G__15146_15170 = "' of model '";
var G__15147_15171 = tiltontec.cell.base.c_md_name(c);
var G__15148_15172 = "'.\n";
var G__15149_15173 = "...> formula for ";
var G__15150_15174 = prop_15166;
var G__15151_15175 = ":\n";
var G__15152_15176 = tiltontec.cell.base.c_code$(c);
var G__15153_15177 = "\n...> full cell: \n";
var G__15154_15178 = cljs.core.deref(c);
var G__15155_15179 = "\n\n...> callstack, latest first: \n";
var G__15156_15180 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__15143_15167,G__15144_15168,G__15145_15169,G__15146_15170,G__15147_15171,G__15148_15172,G__15149_15173,G__15150_15174,G__15151_15175,G__15152_15176,G__15153_15177,G__15154_15178,G__15155_15179,G__15156_15180) : tiltontec.util.core.err.call(null,G__15143_15167,G__15144_15168,G__15145_15169,G__15146_15170,G__15147_15171,G__15148_15172,G__15149_15173,G__15150_15174,G__15151_15175,G__15152_15176,G__15153_15177,G__15154_15178,G__15155_15179,G__15156_15180));
} else {
}

var _STAR_call_stack_STAR__orig_val__15157 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__15158 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__15159 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__15160 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__15161 = c;
var _STAR_defer_changes_STAR__temp_val__15162 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15160);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15161);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15162);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

try{var raw_value = (function (){var fexpr__15164 = tiltontec.cell.base.c_rule(c);
return (fexpr__15164.cljs$core$IFn$_invoke$arity$1 ? fexpr__15164.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15164.call(null,c));
})();
var prop_code_QMARK_ = (function (){var and__4115__auto__ = tiltontec.cell.base.c_synaptic_QMARK_(c);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.vector_QMARK_(raw_value)) && (cljs.core.contains_QMARK_(cljs.core.meta(raw_value),cljs.core.cst$kw$propagate)));
} else {
return and__4115__auto__;
}
})();
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$cnlink_DASH_raw_DASH_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw_value,prop_code_QMARK_], 0));

if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(raw_value),cljs.core.cst$kw$propagate.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}catch (e15163){if((e15163 instanceof Error)){
var e = e15163;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cnlink_DASH_caught_DASH_exception,e], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cnlink_DASH_fail_DASH_c,tiltontec.cell.base.cinfo(c)], 0));

throw e;
} else {
throw e15163;

}
}}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15159);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15158);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15157);
}});
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__15181 = cljs.core.seq(c);
var chunk__15182 = null;
var count__15183 = (0);
var i__15184 = (0);
while(true){
if((i__15184 < count__15183)){
var ce = chunk__15182.cljs$core$IIndexed$_nth$arity$2(null,i__15184);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__15185 = seq__15181;
var G__15186 = chunk__15182;
var G__15187 = count__15183;
var G__15188 = (i__15184 + (1));
seq__15181 = G__15185;
chunk__15182 = G__15186;
count__15183 = G__15187;
i__15184 = G__15188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15181);
if(temp__5804__auto__){
var seq__15181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15181__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15181__$1);
var G__15189 = cljs.core.chunk_rest(seq__15181__$1);
var G__15190 = c__4556__auto__;
var G__15191 = cljs.core.count(c__4556__auto__);
var G__15192 = (0);
seq__15181 = G__15189;
chunk__15182 = G__15190;
count__15183 = G__15191;
i__15184 = G__15192;
continue;
} else {
var ce = cljs.core.first(seq__15181__$1);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__15193 = cljs.core.next(seq__15181__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__15181 = G__15193;
chunk__15182 = G__15194;
count__15183 = G__15195;
i__15184 = G__15196;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_fall_DASH_thru,((tiltontec.util.core.any_ref_QMARK_(c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH_of,tiltontec.util.base.mx_type(c),cljs.core.meta(c)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unref,c,tiltontec.util.base.mx_type(c),cljs.core.meta(c)], null))], 0));

}
}));
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if(tiltontec.cell.base.c_pulse_unwatched_QMARK_(c)){
var temp__5804__auto___15197 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___15197)){
var me_15198 = temp__5804__auto___15197;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),me_15198], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__15199 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15200 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15200);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15199);
}}));



tiltontec.cell.evaluate.md_prop_value_store = (function tiltontec$cell$evaluate$md_prop_value_store(me,prop,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),value);
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
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$cva_DASH_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_value,propagation_code], 0));

var dbg_QMARK__15203 = tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$1(c);
var ci_15204 = tiltontec.cell.base.cinfo(c);
var result__10625__auto___15205 = new_value;
var _STAR_depender_STAR__orig_val__15201_15206 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15202_15207 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15202_15207);

try{var prior_value_15208 = tiltontec.cell.base.c_value(c);
var prior_state_15209 = tiltontec.cell.base.c_value_state(c);
var callers_15210 = tiltontec.cell.base.c_callers(c);
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,c], null),new_value);

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$new_DASH_vlue_DASH_installed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.c_prop(c),new_value,tiltontec.cell.base.c_value(c),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c))], 0));

if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c));
} else {
return and__4115__auto__;
}
})())){
tiltontec.cell.evaluate.md_prop_value_store(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_prop(c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$propv_DASH_assume);

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15208) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15208)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___15211 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___15211)){
var optimize_15212 = temp__5804__auto___15211;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_15208) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_15208));

if(cljs.core.truth_(dbg_QMARK__15203)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$post_DASH_opti_DASH_c_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__DASH_at_DASH_ceee,cljs.core.deref(c),cljs.core.cst$kw$cref,tiltontec.cell.base.c_ref_QMARK_(c),cljs.core.cst$kw$meta,cljs.core.meta(c),cljs.core.cst$kw$metamxty,cljs.core.cst$kw$mx_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c)),cljs.core.cst$kw$typec,cljs.core.type(c),cljs.core.cst$kw$mxty,tiltontec.util.base.mx_type(c),cljs.core.cst$kw$ci,ci_15204], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$post_DASH_opti_DASH_c_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_,ci_15204], 0));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_15209]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,true);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false)){
return null;
} else {
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15208) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15208));
}
}
}
})())){
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(dbg_QMARK__15203,cljs.core.cst$kw$sth_DASH_happened,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([propagation_code,tiltontec.cell.base.c_optimized_away_QMARK_(c)], 0));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,cljs.core.cst$kw$no_DASH_propagate)) || (tiltontec.cell.base.c_optimized_away_QMARK_(c)))){
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(dbg_QMARK__15203,cljs.core.cst$kw$cva_DASH_calls_DASH_propagate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(callers_15210),prior_value_15208], 0));

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_15208,callers_15210) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_15208,callers_15210));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15201_15206);
}

return new_value;
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto__)){
var me = temp__5804__auto__;
tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$opti,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$md_DASH_cell_DASH_flush,tiltontec.cell.base.cinfo(c),cljs.core.cst$kw$mi,tiltontec.cell.base.minfo(me)], 0));

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),cljs.core.cst$kw$val,tiltontec.cell.base.c_value(c),cljs.core.cst$kw$pulse,tiltontec.cell.base.c_pulse_watched(c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a prop and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(((tiltontec.cell.base.c_formula_QMARK_(c))?((((cljs.core.empty_QMARK_(tiltontec.cell.base.c_useds(c))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_value_DASH_t,tiltontec.cell.base.c_optimize(c))) && ((!((tiltontec.cell.base.c_value(c) == null))))))))?(function (){var and__4115__auto__ = tiltontec.cell.base.c_optimize(c);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))) && (tiltontec.cell.base.c_valid_QMARK_(c)) && (cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c))) && (cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))));
} else {
return and__4115__auto__;
}
})():false):false))){
tiltontec.cell.base.cdbg(c,cljs.core.cst$kw$optimizing_DASH_away_BANG__BANG_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))){
tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$freeze);
} else {
}

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__5804__auto___15217 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___15217)){
var me_15218 = temp__5804__auto___15217;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_15218], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_15218)),tiltontec.cell.base.c_prop(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$post_DASH_flush_DASH_c_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_,tiltontec.cell.base.cinfo(c)], 0));
} else {
}
} else {
}

var seq__15213_15219 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__15214_15220 = null;
var count__15215_15221 = (0);
var i__15216_15222 = (0);
while(true){
if((i__15216_15222 < count__15215_15221)){
var caller_15223 = chunk__15214_15220.cljs$core$IIndexed$_nth$arity$2(null,i__15216_15222);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimized_DASH_c_DASH_runs_DASH_caller,tiltontec.cell.base.cinfo(c),cljs.core.cst$kw$cinfo,caller_15223], 0));
} else {
}

tiltontec.cell.evaluate.ensure_value_is_current(caller_15223,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15223)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15223);
}


var G__15224 = seq__15213_15219;
var G__15225 = chunk__15214_15220;
var G__15226 = count__15215_15221;
var G__15227 = (i__15216_15222 + (1));
seq__15213_15219 = G__15224;
chunk__15214_15220 = G__15225;
count__15215_15221 = G__15226;
i__15216_15222 = G__15227;
continue;
} else {
var temp__5804__auto___15228 = cljs.core.seq(seq__15213_15219);
if(temp__5804__auto___15228){
var seq__15213_15229__$1 = temp__5804__auto___15228;
if(cljs.core.chunked_seq_QMARK_(seq__15213_15229__$1)){
var c__4556__auto___15230 = cljs.core.chunk_first(seq__15213_15229__$1);
var G__15231 = cljs.core.chunk_rest(seq__15213_15229__$1);
var G__15232 = c__4556__auto___15230;
var G__15233 = cljs.core.count(c__4556__auto___15230);
var G__15234 = (0);
seq__15213_15219 = G__15231;
chunk__15214_15220 = G__15232;
count__15215_15221 = G__15233;
i__15216_15222 = G__15234;
continue;
} else {
var caller_15235 = cljs.core.first(seq__15213_15229__$1);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimized_DASH_c_DASH_runs_DASH_caller,tiltontec.cell.base.cinfo(c),cljs.core.cst$kw$cinfo,caller_15235], 0));
} else {
}

tiltontec.cell.evaluate.ensure_value_is_current(caller_15235,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15235)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15235);
}


var G__15236 = cljs.core.next(seq__15213_15229__$1);
var G__15237 = null;
var G__15238 = (0);
var G__15239 = (0);
seq__15213_15219 = G__15236;
chunk__15214_15220 = G__15237;
count__15215_15221 = G__15238;
i__15216_15222 = G__15239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$resetting_DASH_cell_DASH_to_DASH_val_BANG__BANG__BANG_,tiltontec.cell.base.c_value(c)], 0));
} else {
}

return cljs.core.reset_BANG_(c,tiltontec.cell.base.c_value(c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(tiltontec.cell.base.c_ref_QMARK_(c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto___15240 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___15240)){
var onq_15241 = temp__5804__auto___15240;
(onq_15241.cljs$core$IFn$_invoke$arity$1 ? onq_15241.cljs$core$IFn$_invoke$arity$1(c) : onq_15241.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.poly.md_quiesce_self.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$qself_DASH_fallthru,tiltontec.cell.base.minfo(me)], 0));

var temp__5804__auto___15246 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___15246)){
var onq_15247 = temp__5804__auto___15246;
(onq_15247.cljs$core$IFn$_invoke$arity$1 ? onq_15247.cljs$core$IFn$_invoke$arity$1(me) : onq_15247.call(null,me));
} else {
}

var seq__15242_15248 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__15243_15249 = null;
var count__15244_15250 = (0);
var i__15245_15251 = (0);
while(true){
if((i__15245_15251 < count__15244_15250)){
var c_15252 = chunk__15243_15249.cljs$core$IIndexed$_nth$arity$2(null,i__15245_15251);
if(cljs.core.truth_(c_15252)){
tiltontec.cell.evaluate.c_quiesce(c_15252);
} else {
}


var G__15253 = seq__15242_15248;
var G__15254 = chunk__15243_15249;
var G__15255 = count__15244_15250;
var G__15256 = (i__15245_15251 + (1));
seq__15242_15248 = G__15253;
chunk__15243_15249 = G__15254;
count__15244_15250 = G__15255;
i__15245_15251 = G__15256;
continue;
} else {
var temp__5804__auto___15257 = cljs.core.seq(seq__15242_15248);
if(temp__5804__auto___15257){
var seq__15242_15258__$1 = temp__5804__auto___15257;
if(cljs.core.chunked_seq_QMARK_(seq__15242_15258__$1)){
var c__4556__auto___15259 = cljs.core.chunk_first(seq__15242_15258__$1);
var G__15260 = cljs.core.chunk_rest(seq__15242_15258__$1);
var G__15261 = c__4556__auto___15259;
var G__15262 = cljs.core.count(c__4556__auto___15259);
var G__15263 = (0);
seq__15242_15248 = G__15260;
chunk__15243_15249 = G__15261;
count__15244_15250 = G__15262;
i__15245_15251 = G__15263;
continue;
} else {
var c_15264 = cljs.core.first(seq__15242_15258__$1);
if(cljs.core.truth_(c_15264)){
tiltontec.cell.evaluate.c_quiesce(c_15264);
} else {
}


var G__15265 = cljs.core.next(seq__15242_15258__$1);
var G__15266 = null;
var G__15267 = (0);
var G__15268 = (0);
seq__15242_15248 = G__15265;
chunk__15243_15249 = G__15266;
count__15244_15250 = G__15267;
i__15245_15251 = G__15268;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(me,null);

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,me], null),cljs.core.cst$kw$dead);
}));
tiltontec.cell.poly.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$def_DASH_fall_DASH_thru_BANG_,tiltontec.cell.base.minfo(me)], 0));

return (tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.cell.poly.md_quiesce_self.call(null,me));
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__15271 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__15272 = tiltontec.cell.base.c_model(c);
var G__15273 = tiltontec.cell.base.c_prop(c);
return (tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__15272,G__15273) : tiltontec.cell.poly.unchanged_test.call(null,G__15272,G__15273));
}
})();
return (fexpr__15271.cljs$core$IFn$_invoke$arity$2 ? fexpr__15271.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__15271.call(null,new_value,old_value));
})());
});

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any watch; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$propagate,cljs.core.cst$kw$entry,tiltontec.cell.base.cinfo(c)], 0));

if(cljs.core.truth_(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.base._STAR_custom_propagator_STAR_)){
return (tiltontec.cell.base._STAR_custom_propagator_STAR_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.base._STAR_custom_propagator_STAR_.cljs$core$IFn$_invoke$arity$2(c,prior_value) : tiltontec.cell.base._STAR_custom_propagator_STAR_.call(null,c,prior_value));
} else {
return null;
}
} else {
var _STAR_depender_STAR__orig_val__15274 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__15275 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__15276 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__15277 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__15278 = null;
var _STAR_call_stack_STAR__temp_val__15279 = null;
var _STAR_c_prop_depth_STAR__temp_val__15280 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__15281 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15278);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15279);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__15280);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15281);

try{if(cljs.core.truth_((function (){var and__4115__auto__ = prior_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4115__auto____$1)){
return tiltontec.cell.base.md_prop_owning_QMARK_(cljs.core.type(tiltontec.cell.base.c_model(c)),tiltontec.cell.base.c_prop(c));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5804__auto___15286 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___15286)){
var ownees_15287 = temp__5804__auto___15286;
var seq__15282_15288 = cljs.core.seq(ownees_15287);
var chunk__15283_15289 = null;
var count__15284_15290 = (0);
var i__15285_15291 = (0);
while(true){
if((i__15285_15291 < count__15284_15290)){
var ownee_15292 = chunk__15283_15289.cljs$core$IIndexed$_nth$arity$2(null,i__15285_15291);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15292) : tiltontec.cell.poly.md_quiesce.call(null,ownee_15292));


var G__15293 = seq__15282_15288;
var G__15294 = chunk__15283_15289;
var G__15295 = count__15284_15290;
var G__15296 = (i__15285_15291 + (1));
seq__15282_15288 = G__15293;
chunk__15283_15289 = G__15294;
count__15284_15290 = G__15295;
i__15285_15291 = G__15296;
continue;
} else {
var temp__5804__auto___15297__$1 = cljs.core.seq(seq__15282_15288);
if(temp__5804__auto___15297__$1){
var seq__15282_15298__$1 = temp__5804__auto___15297__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15282_15298__$1)){
var c__4556__auto___15299 = cljs.core.chunk_first(seq__15282_15298__$1);
var G__15300 = cljs.core.chunk_rest(seq__15282_15298__$1);
var G__15301 = c__4556__auto___15299;
var G__15302 = cljs.core.count(c__4556__auto___15299);
var G__15303 = (0);
seq__15282_15288 = G__15300;
chunk__15283_15289 = G__15301;
count__15284_15290 = G__15302;
i__15285_15291 = G__15303;
continue;
} else {
var ownee_15304 = cljs.core.first(seq__15282_15298__$1);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15304) : tiltontec.cell.poly.md_quiesce.call(null,ownee_15304));


var G__15305 = cljs.core.next(seq__15282_15298__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__15282_15288 = G__15305;
chunk__15283_15289 = G__15306;
count__15284_15290 = G__15307;
i__15285_15291 = G__15308;
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

if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = tiltontec.cell.base.c_pulse_unwatched_QMARK_(c);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null));
}
})())){
tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$propagate);
} else {
}
}

return tiltontec.cell.evaluate.ephemeral_reset(c);
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15277);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__15276);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15275);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15274);
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_(callers)){
return null;
} else {
var causation = cljs.core.cons(c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$tell_DASH_dependents,c,(function (opcode,defer_info){
if(tiltontec.cell.base.mdead_QMARK_(tiltontec.cell.base.c_model(c))){
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("WHOAA!!!! dead by time :tell-deps dispatched; bailing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
} else {
var _STAR_causation_STAR__orig_val__15309 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__15310 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__15310);

try{var seq__15311 = cljs.core.seq(cljs.core.seq(callers));
var chunk__15312 = null;
var count__15313 = (0);
var i__15314 = (0);
while(true){
if((i__15314 < count__15313)){
var caller = chunk__15312.cljs$core$IIndexed$_nth$arity$2(null,i__15314);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))));
}
}
}
})())){
} else {
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$propagate,cljs.core.cst$kw$noti_DASH_caller,tiltontec.cell.base.cinfo(caller),cljs.core.cst$kw$callee,tiltontec.cell.base.cinfo(c)], 0));

tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}


var G__15315 = seq__15311;
var G__15316 = chunk__15312;
var G__15317 = count__15313;
var G__15318 = (i__15314 + (1));
seq__15311 = G__15315;
chunk__15312 = G__15316;
count__15313 = G__15317;
i__15314 = G__15318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15311);
if(temp__5804__auto__){
var seq__15311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15311__$1);
var G__15319 = cljs.core.chunk_rest(seq__15311__$1);
var G__15320 = c__4556__auto__;
var G__15321 = cljs.core.count(c__4556__auto__);
var G__15322 = (0);
seq__15311 = G__15319;
chunk__15312 = G__15320;
count__15313 = G__15321;
i__15314 = G__15322;
continue;
} else {
var caller = cljs.core.first(seq__15311__$1);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(caller),cljs.core.cst$kw$quiesced);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_(caller);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.cst$kw$always,cljs.core.cst$kw$once_DASH_asked], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds(caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))));
}
}
}
})())){
} else {
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$propagate,cljs.core.cst$kw$noti_DASH_caller,tiltontec.cell.base.cinfo(caller),cljs.core.cst$kw$callee,tiltontec.cell.base.cinfo(c)], 0));

tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}


var G__15323 = cljs.core.next(seq__15311__$1);
var G__15324 = null;
var G__15325 = (0);
var G__15326 = (0);
seq__15311 = G__15323;
chunk__15312 = G__15324;
count__15313 = G__15325;
i__15314 = G__15326;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__15309);
}}
}));
}
});
