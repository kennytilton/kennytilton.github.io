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
var temp__5804__auto___15092 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___15092)){
var me_15093 = temp__5804__auto___15092;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_15093,cljs.core.assoc,cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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

var G__15094 = "evic> unbound prop %s of model %s";
var G__15095 = tiltontec.cell.base.c_prop(c);
var G__15096 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__15094,G__15095,G__15096) : tiltontec.util.core.err.call(null,G__15094,G__15095,G__15096));
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
var G__15097 = cljs.core.str;
var G__15098 = "evic> model %s of cell %s is dead";
var G__15099 = tiltontec.cell.base.c_model(c);
var G__15100 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__15097,G__15098,G__15099,G__15100) : tiltontec.util.core.err.call(null,G__15097,G__15098,G__15099,G__15100));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__15117 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__15118 = G__15117;
var seq__15119 = cljs.core.seq(vec__15118);
var first__15120 = cljs.core.first(seq__15119);
var seq__15119__$1 = cljs.core.next(seq__15119);
var used = first__15120;
var urest = seq__15119__$1;
var G__15117__$1 = G__15117;
while(true){
var vec__15121 = G__15117__$1;
var seq__15122 = cljs.core.seq(vec__15121);
var first__15123 = cljs.core.first(seq__15122);
var seq__15122__$1 = cljs.core.next(seq__15122);
var used__$1 = first__15123;
var urest__$1 = seq__15122__$1;
if(cljs.core.truth_(used__$1)){
var G__15124_15130 = used__$1;
var G__15125_15131 = cljs.core.cst$kw$nested;
var G__15126_15132 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__15124_15130,G__15125_15131,G__15126_15132) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__15124_15130,G__15125_15131,G__15126_15132));

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
var G__15133 = urest__$1;
G__15117__$1 = G__15133;
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
var G__15127_15134 = c;
var G__15128_15135 = cljs.core.cst$kw$evic;
var G__15129_15136 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__15127_15134,G__15128_15135,G__15129_15136) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__15127_15134,G__15128_15135,G__15129_15136));
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
 *   notices if a standalone  cell has never been watched.
 */
tiltontec.cell.evaluate.cget = (function tiltontec$cell$evaluate$cget(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
var result__10625__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__10625__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
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
} else {
if(tiltontec.util.core.any_ref_QMARK_(c)){
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
var vec__15137 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15137,(1),null);
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
var me_15162 = tiltontec.cell.base.c_model(c);
var prop_15163 = tiltontec.cell.base.c_prop_name(c);
var G__15140_15164 = cljs.core.str;
var G__15141_15165 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '";
var G__15142_15166 = prop_15163;
var G__15143_15167 = "' of model '";
var G__15144_15168 = tiltontec.cell.base.c_md_name(c);
var G__15145_15169 = "'.\n";
var G__15146_15170 = "...> formula for ";
var G__15147_15171 = prop_15163;
var G__15148_15172 = ":\n";
var G__15149_15173 = tiltontec.cell.base.c_code$(c);
var G__15150_15174 = "\n...> full cell: \n";
var G__15151_15175 = cljs.core.deref(c);
var G__15152_15176 = "\n\n...> callstack, latest first: \n";
var G__15153_15177 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__15140_15164,G__15141_15165,G__15142_15166,G__15143_15167,G__15144_15168,G__15145_15169,G__15146_15170,G__15147_15171,G__15148_15172,G__15149_15173,G__15150_15174,G__15151_15175,G__15152_15176,G__15153_15177) : tiltontec.util.core.err.call(null,G__15140_15164,G__15141_15165,G__15142_15166,G__15143_15167,G__15144_15168,G__15145_15169,G__15146_15170,G__15147_15171,G__15148_15172,G__15149_15173,G__15150_15174,G__15151_15175,G__15152_15176,G__15153_15177));
} else {
}

var _STAR_call_stack_STAR__orig_val__15154 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__15155 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__15156 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__15157 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__15158 = c;
var _STAR_defer_changes_STAR__temp_val__15159 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15157);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15158);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15159);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

try{var raw_value = (function (){var fexpr__15161 = tiltontec.cell.base.c_rule(c);
return (fexpr__15161.cljs$core$IFn$_invoke$arity$1 ? fexpr__15161.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15161.call(null,c));
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
}catch (e15160){if((e15160 instanceof Error)){
var e = e15160;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cnlink_DASH_caught_DASH_exception,e], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cnlink_DASH_fail_DASH_c,tiltontec.cell.base.cinfo(c)], 0));

throw e;
} else {
throw e15160;

}
}}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15156);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15155);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15154);
}});
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__15178 = cljs.core.seq(c);
var chunk__15179 = null;
var count__15180 = (0);
var i__15181 = (0);
while(true){
if((i__15181 < count__15180)){
var ce = chunk__15179.cljs$core$IIndexed$_nth$arity$2(null,i__15181);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__15182 = seq__15178;
var G__15183 = chunk__15179;
var G__15184 = count__15180;
var G__15185 = (i__15181 + (1));
seq__15178 = G__15182;
chunk__15179 = G__15183;
count__15180 = G__15184;
i__15181 = G__15185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15178);
if(temp__5804__auto__){
var seq__15178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15178__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15178__$1);
var G__15186 = cljs.core.chunk_rest(seq__15178__$1);
var G__15187 = c__4556__auto__;
var G__15188 = cljs.core.count(c__4556__auto__);
var G__15189 = (0);
seq__15178 = G__15186;
chunk__15179 = G__15187;
count__15180 = G__15188;
i__15181 = G__15189;
continue;
} else {
var ce = cljs.core.first(seq__15178__$1);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__15190 = cljs.core.next(seq__15178__$1);
var G__15191 = null;
var G__15192 = (0);
var G__15193 = (0);
seq__15178 = G__15190;
chunk__15179 = G__15191;
count__15180 = G__15192;
i__15181 = G__15193;
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
var temp__5804__auto___15194 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___15194)){
var me_15195 = temp__5804__auto___15194;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),me_15195], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__15196 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15197 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15197);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15196);
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
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.cst$kw$cva_DASH_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_value,propagation_code], 0));

var result__10625__auto__ = new_value;
var _STAR_depender_STAR__orig_val__15198_15200 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15199_15201 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15199_15201);

try{var prior_value_15202 = tiltontec.cell.base.c_value(c);
var prior_state_15203 = tiltontec.cell.base.c_value_state(c);
var callers_15204 = tiltontec.cell.base.c_callers(c);
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

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15202) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15202)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___15205 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___15205)){
var optimize_15206 = temp__5804__auto___15205;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_15202) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_15202));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_15203]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15202) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15202));
}
}
}
})())){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,cljs.core.cst$kw$no_DASH_propagate)) || (tiltontec.cell.base.c_optimized_away_QMARK_(c)))){
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_15202,callers_15204) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_15202,callers_15204));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15198_15200);
}
return result__10625__auto__;
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto__)){
var me = temp__5804__auto__;
return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),tiltontec.cell.base.c_pulse_watched(c)], null)));
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

var temp__5804__auto___15211 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___15211)){
var me_15212 = temp__5804__auto___15211;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_15212], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_15212)),tiltontec.cell.base.c_prop(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__15207_15213 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__15208_15214 = null;
var count__15209_15215 = (0);
var i__15210_15216 = (0);
while(true){
if((i__15210_15216 < count__15209_15215)){
var caller_15217 = chunk__15208_15214.cljs$core$IIndexed$_nth$arity$2(null,i__15210_15216);
tiltontec.cell.evaluate.ensure_value_is_current(caller_15217,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15217)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15217);
}


var G__15218 = seq__15207_15213;
var G__15219 = chunk__15208_15214;
var G__15220 = count__15209_15215;
var G__15221 = (i__15210_15216 + (1));
seq__15207_15213 = G__15218;
chunk__15208_15214 = G__15219;
count__15209_15215 = G__15220;
i__15210_15216 = G__15221;
continue;
} else {
var temp__5804__auto___15222 = cljs.core.seq(seq__15207_15213);
if(temp__5804__auto___15222){
var seq__15207_15223__$1 = temp__5804__auto___15222;
if(cljs.core.chunked_seq_QMARK_(seq__15207_15223__$1)){
var c__4556__auto___15224 = cljs.core.chunk_first(seq__15207_15223__$1);
var G__15225 = cljs.core.chunk_rest(seq__15207_15223__$1);
var G__15226 = c__4556__auto___15224;
var G__15227 = cljs.core.count(c__4556__auto___15224);
var G__15228 = (0);
seq__15207_15213 = G__15225;
chunk__15208_15214 = G__15226;
count__15209_15215 = G__15227;
i__15210_15216 = G__15228;
continue;
} else {
var caller_15229 = cljs.core.first(seq__15207_15223__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_15229,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15229)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15229);
}


var G__15230 = cljs.core.next(seq__15207_15223__$1);
var G__15231 = null;
var G__15232 = (0);
var G__15233 = (0);
seq__15207_15213 = G__15230;
chunk__15208_15214 = G__15231;
count__15209_15215 = G__15232;
i__15210_15216 = G__15233;
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
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto___15234 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___15234)){
var onq_15235 = temp__5804__auto___15234;
(onq_15235.cljs$core$IFn$_invoke$arity$1 ? onq_15235.cljs$core$IFn$_invoke$arity$1(c) : onq_15235.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.poly.md_quiesce_self.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
tiltontec.cell.diagnostic.mxtrc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce,cljs.core.cst$kw$qself_DASH_fallthru,tiltontec.cell.base.minfo(me)], 0));

var temp__5804__auto___15240 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___15240)){
var onq_15241 = temp__5804__auto___15240;
(onq_15241.cljs$core$IFn$_invoke$arity$1 ? onq_15241.cljs$core$IFn$_invoke$arity$1(me) : onq_15241.call(null,me));
} else {
}

var seq__15236_15242 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__15237_15243 = null;
var count__15238_15244 = (0);
var i__15239_15245 = (0);
while(true){
if((i__15239_15245 < count__15238_15244)){
var c_15246 = chunk__15237_15243.cljs$core$IIndexed$_nth$arity$2(null,i__15239_15245);
if(cljs.core.truth_(c_15246)){
tiltontec.cell.evaluate.c_quiesce(c_15246);
} else {
}


var G__15247 = seq__15236_15242;
var G__15248 = chunk__15237_15243;
var G__15249 = count__15238_15244;
var G__15250 = (i__15239_15245 + (1));
seq__15236_15242 = G__15247;
chunk__15237_15243 = G__15248;
count__15238_15244 = G__15249;
i__15239_15245 = G__15250;
continue;
} else {
var temp__5804__auto___15251 = cljs.core.seq(seq__15236_15242);
if(temp__5804__auto___15251){
var seq__15236_15252__$1 = temp__5804__auto___15251;
if(cljs.core.chunked_seq_QMARK_(seq__15236_15252__$1)){
var c__4556__auto___15253 = cljs.core.chunk_first(seq__15236_15252__$1);
var G__15254 = cljs.core.chunk_rest(seq__15236_15252__$1);
var G__15255 = c__4556__auto___15253;
var G__15256 = cljs.core.count(c__4556__auto___15253);
var G__15257 = (0);
seq__15236_15242 = G__15254;
chunk__15237_15243 = G__15255;
count__15238_15244 = G__15256;
i__15239_15245 = G__15257;
continue;
} else {
var c_15258 = cljs.core.first(seq__15236_15252__$1);
if(cljs.core.truth_(c_15258)){
tiltontec.cell.evaluate.c_quiesce(c_15258);
} else {
}


var G__15259 = cljs.core.next(seq__15236_15252__$1);
var G__15260 = null;
var G__15261 = (0);
var G__15262 = (0);
seq__15236_15242 = G__15259;
chunk__15237_15243 = G__15260;
count__15238_15244 = G__15261;
i__15239_15245 = G__15262;
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
return cljs.core.not((function (){var fexpr__15265 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__15266 = tiltontec.cell.base.c_model(c);
var G__15267 = tiltontec.cell.base.c_prop(c);
return (tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__15266,G__15267) : tiltontec.cell.poly.unchanged_test.call(null,G__15266,G__15267));
}
})();
return (fexpr__15265.cljs$core$IFn$_invoke$arity$2 ? fexpr__15265.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__15265.call(null,new_value,old_value));
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
var _STAR_depender_STAR__orig_val__15268 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__15269 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__15270 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__15271 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__15272 = null;
var _STAR_call_stack_STAR__temp_val__15273 = null;
var _STAR_c_prop_depth_STAR__temp_val__15274 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__15275 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15272);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15273);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__15274);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15275);

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
var temp__5804__auto___15280 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___15280)){
var ownees_15281 = temp__5804__auto___15280;
var seq__15276_15282 = cljs.core.seq(ownees_15281);
var chunk__15277_15283 = null;
var count__15278_15284 = (0);
var i__15279_15285 = (0);
while(true){
if((i__15279_15285 < count__15278_15284)){
var ownee_15286 = chunk__15277_15283.cljs$core$IIndexed$_nth$arity$2(null,i__15279_15285);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15286) : tiltontec.cell.poly.md_quiesce.call(null,ownee_15286));


var G__15287 = seq__15276_15282;
var G__15288 = chunk__15277_15283;
var G__15289 = count__15278_15284;
var G__15290 = (i__15279_15285 + (1));
seq__15276_15282 = G__15287;
chunk__15277_15283 = G__15288;
count__15278_15284 = G__15289;
i__15279_15285 = G__15290;
continue;
} else {
var temp__5804__auto___15291__$1 = cljs.core.seq(seq__15276_15282);
if(temp__5804__auto___15291__$1){
var seq__15276_15292__$1 = temp__5804__auto___15291__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15276_15292__$1)){
var c__4556__auto___15293 = cljs.core.chunk_first(seq__15276_15292__$1);
var G__15294 = cljs.core.chunk_rest(seq__15276_15292__$1);
var G__15295 = c__4556__auto___15293;
var G__15296 = cljs.core.count(c__4556__auto___15293);
var G__15297 = (0);
seq__15276_15282 = G__15294;
chunk__15277_15283 = G__15295;
count__15278_15284 = G__15296;
i__15279_15285 = G__15297;
continue;
} else {
var ownee_15298 = cljs.core.first(seq__15276_15292__$1);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15298) : tiltontec.cell.poly.md_quiesce.call(null,ownee_15298));


var G__15299 = cljs.core.next(seq__15276_15292__$1);
var G__15300 = null;
var G__15301 = (0);
var G__15302 = (0);
seq__15276_15282 = G__15299;
chunk__15277_15283 = G__15300;
count__15278_15284 = G__15301;
i__15279_15285 = G__15302;
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15271);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__15270);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15269);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15268);
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
var _STAR_causation_STAR__orig_val__15303 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__15304 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__15304);

try{var seq__15305 = cljs.core.seq(cljs.core.seq(callers));
var chunk__15306 = null;
var count__15307 = (0);
var i__15308 = (0);
while(true){
if((i__15308 < count__15307)){
var caller = chunk__15306.cljs$core$IIndexed$_nth$arity$2(null,i__15308);
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


var G__15309 = seq__15305;
var G__15310 = chunk__15306;
var G__15311 = count__15307;
var G__15312 = (i__15308 + (1));
seq__15305 = G__15309;
chunk__15306 = G__15310;
count__15307 = G__15311;
i__15308 = G__15312;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15305);
if(temp__5804__auto__){
var seq__15305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15305__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15305__$1);
var G__15313 = cljs.core.chunk_rest(seq__15305__$1);
var G__15314 = c__4556__auto__;
var G__15315 = cljs.core.count(c__4556__auto__);
var G__15316 = (0);
seq__15305 = G__15313;
chunk__15306 = G__15314;
count__15307 = G__15315;
i__15308 = G__15316;
continue;
} else {
var caller = cljs.core.first(seq__15305__$1);
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


var G__15317 = cljs.core.next(seq__15305__$1);
var G__15318 = null;
var G__15319 = (0);
var G__15320 = (0);
seq__15305 = G__15317;
chunk__15306 = G__15318;
count__15307 = G__15319;
i__15308 = G__15320;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__15303);
}}
}));
}
});
