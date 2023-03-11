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
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__5804__auto___21116 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___21116)){
var me_21117 = temp__5804__auto___21116;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_21117,cljs.core.assoc,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":unbound!!!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.cell.base.c_slot], 0));

var G__21118 = "evic> unbound slot %s of model %s";
var G__21119 = tiltontec.cell.base.c_slot(c);
var G__21120 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__21118,G__21119,G__21120) : tiltontec.util.core.err.call(null,G__21118,G__21119,G__21120));
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
var G__21121 = cljs.core.str;
var G__21122 = "evic> model %s of cell %s is dead";
var G__21123 = tiltontec.cell.base.c_model(c);
var G__21124 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__21121,G__21122,G__21123,G__21124) : tiltontec.util.core.err.call(null,G__21121,G__21122,G__21123,G__21124));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__21141 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__21142 = G__21141;
var seq__21143 = cljs.core.seq(vec__21142);
var first__21144 = cljs.core.first(seq__21143);
var seq__21143__$1 = cljs.core.next(seq__21143);
var used = first__21144;
var urest = seq__21143__$1;
var G__21141__$1 = G__21141;
while(true){
var vec__21145 = G__21141__$1;
var seq__21146 = cljs.core.seq(vec__21145);
var first__21147 = cljs.core.first(seq__21146);
var seq__21146__$1 = cljs.core.next(seq__21146);
var used__$1 = first__21147;
var urest__$1 = seq__21146__$1;
if(cljs.core.truth_(used__$1)){
var G__21148_21154 = used__$1;
var G__21149_21155 = cljs.core.cst$kw$nested;
var G__21150_21156 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__21148_21154,G__21149_21155,G__21150_21156) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__21148_21154,G__21149_21155,G__21150_21156));

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
var G__21157 = urest__$1;
G__21141__$1 = G__21157;
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
var G__21151_21158 = c;
var G__21152_21159 = cljs.core.cst$kw$evic;
var G__21153_21160 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__21151_21158,G__21152_21159,G__21153_21160) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__21151_21158,G__21152_21159,G__21153_21160));
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
var result__16560__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__16560__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && (tiltontec.cell.base.c_pulse_unobserved_QMARK_(c)))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__16560__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record(c);
} else {
}

return result__16560__auto__;
} else {
if(tiltontec.util.core.any_ref_QMARK_(c)){
return cljs.core.deref(c);
} else {
return c;

}
}
});
tiltontec.cell.evaluate._LT_cget = (function tiltontec$cell$evaluate$_LT_cget(c){
return tiltontec.cell.evaluate.c_get(c);
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__21161 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21161,(1),null);
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error(["Assert failed: ","calc-n-set","\n","(map? (clojure.core/deref c))"].join('')));
}

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
var me_21185 = tiltontec.cell.base.c_model(c);
var slot_21186 = tiltontec.cell.base.c_slot_name(c);
var G__21164_21187 = cljs.core.str;
var G__21165_21188 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing slot '";
var G__21166_21189 = slot_21186;
var G__21167_21190 = "' of model '";
var G__21168_21191 = tiltontec.cell.base.c_md_name(c);
var G__21169_21192 = "'.\n";
var G__21170_21193 = "...> formula for ";
var G__21171_21194 = slot_21186;
var G__21172_21195 = ":\n";
var G__21173_21196 = tiltontec.cell.base.c_code$(c);
var G__21174_21197 = "\n...> full cell: \n";
var G__21175_21198 = cljs.core.deref(c);
var G__21176_21199 = "\n\n...> callstack, latest first: \n";
var G__21177_21200 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__21164_21187,G__21165_21188,G__21166_21189,G__21167_21190,G__21168_21191,G__21169_21192,G__21170_21193,G__21171_21194,G__21172_21195,G__21173_21196,G__21174_21197,G__21175_21198,G__21176_21199,G__21177_21200) : tiltontec.util.core.err.call(null,G__21164_21187,G__21165_21188,G__21166_21189,G__21167_21190,G__21168_21191,G__21169_21192,G__21170_21193,G__21171_21194,G__21172_21195,G__21173_21196,G__21174_21197,G__21175_21198,G__21176_21199,G__21177_21200));
} else {
}

var _STAR_call_stack_STAR__orig_val__21178 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__21179 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__21180 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__21181 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__21182 = c;
var _STAR_defer_changes_STAR__temp_val__21183 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21181);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21182);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21183);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__21184 = tiltontec.cell.base.c_rule(c);
return (fexpr__21184.cljs$core$IFn$_invoke$arity$1 ? fexpr__21184.cljs$core$IFn$_invoke$arity$1(c) : fexpr__21184.call(null,c));
})();
var prop_code_QMARK_ = (function (){var and__4115__auto__ = tiltontec.cell.base.c_synaptic_QMARK_(c);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.vector_QMARK_(raw_value)) && (cljs.core.contains_QMARK_(cljs.core.meta(raw_value),cljs.core.cst$kw$propagate)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(raw_value),cljs.core.cst$kw$propagate.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21180);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21179);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21178);
}});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.c_awaken !== 'undefined')){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21201 = cljs.core.get_global_hierarchy;
return (fexpr__21201.cljs$core$IFn$_invoke$arity$0 ? fexpr__21201.cljs$core$IFn$_invoke$arity$0() : fexpr__21201.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),(function (c){
return tiltontec.util.base.mx_type(c);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__21202 = cljs.core.seq(c);
var chunk__21203 = null;
var count__21204 = (0);
var i__21205 = (0);
while(true){
if((i__21205 < count__21204)){
var ce = chunk__21203.cljs$core$IIndexed$_nth$arity$2(null,i__21205);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21206 = seq__21202;
var G__21207 = chunk__21203;
var G__21208 = count__21204;
var G__21209 = (i__21205 + (1));
seq__21202 = G__21206;
chunk__21203 = G__21207;
count__21204 = G__21208;
i__21205 = G__21209;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21202);
if(temp__5804__auto__){
var seq__21202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21202__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21202__$1);
var G__21210 = cljs.core.chunk_rest(seq__21202__$1);
var G__21211 = c__4556__auto__;
var G__21212 = cljs.core.count(c__4556__auto__);
var G__21213 = (0);
seq__21202 = G__21210;
chunk__21203 = G__21211;
count__21204 = G__21212;
i__21205 = G__21213;
continue;
} else {
var ce = cljs.core.first(seq__21202__$1);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21214 = cljs.core.next(seq__21202__$1);
var G__21215 = null;
var G__21216 = (0);
var G__21217 = (0);
seq__21202 = G__21214;
chunk__21203 = G__21215;
count__21204 = G__21216;
i__21205 = G__21217;
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
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if(tiltontec.cell.base.c_pulse_unobserved_QMARK_(c)){
var temp__5804__auto___21218 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___21218)){
var me_21219 = temp__5804__auto___21218;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),me_21219], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__21220 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21221 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21221);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21220);
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(tiltontec.util.core.any_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
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

var result__16560__auto__ = new_value;
var _STAR_depender_STAR__orig_val__21222_21224 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21223_21225 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21223_21225);

try{var prior_value_21226 = tiltontec.cell.base.c_value(c);
var prior_state_21227 = tiltontec.cell.base.c_value_state(c);
var callers_21228 = tiltontec.cell.base.c_callers(c);
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,c], null),new_value);

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c));
} else {
return and__4115__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store(tiltontec.cell.base.c_model(c),tiltontec.cell.base.c_slot(c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update(c,cljs.core.cst$kw$slotv_DASH_assume);

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21226) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21226)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___21229 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___21229)){
var optimize_21230 = temp__5804__auto___21229;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_21226) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_21226));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_21227]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21226) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21226));
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

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_21226,callers_21228) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_21226,callers_21228));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21222_21224);
}
return result__16560__auto__;
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto__)){
var me = temp__5804__auto__;
return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),tiltontec.cell.base.c_pulse_observed(c)], null)));
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
if(cljs.core.truth_(((tiltontec.cell.base.c_formula_QMARK_(c))?((((cljs.core.empty_QMARK_(tiltontec.cell.base.c_useds(c))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$when_DASH_value_DASH_t,tiltontec.cell.base.c_optimize(c))) && ((!((tiltontec.cell.base.c_value(c) == null))))))))?(function (){var and__4115__auto__ = tiltontec.cell.base.c_optimize(c);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(tiltontec.cell.base.c_optimized_away_QMARK_(c)))) && (tiltontec.cell.base.c_valid_QMARK_(c)) && (cljs.core.not(tiltontec.cell.base.c_synaptic_QMARK_(c))) && (cljs.core.not(tiltontec.cell.base.c_input_QMARK_(c))));
} else {
return and__4115__auto__;
}
})():false):false))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))){
tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$freeze);
} else {
}

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__5804__auto___21235 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___21235)){
var me_21236 = temp__5804__auto___21235;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_21236], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_21236)),tiltontec.cell.base.c_slot(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__21231_21237 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__21232_21238 = null;
var count__21233_21239 = (0);
var i__21234_21240 = (0);
while(true){
if((i__21234_21240 < count__21233_21239)){
var caller_21241 = chunk__21232_21238.cljs$core$IIndexed$_nth$arity$2(null,i__21234_21240);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21241,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21241)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21241);
}


var G__21242 = seq__21231_21237;
var G__21243 = chunk__21232_21238;
var G__21244 = count__21233_21239;
var G__21245 = (i__21234_21240 + (1));
seq__21231_21237 = G__21242;
chunk__21232_21238 = G__21243;
count__21233_21239 = G__21244;
i__21234_21240 = G__21245;
continue;
} else {
var temp__5804__auto___21246 = cljs.core.seq(seq__21231_21237);
if(temp__5804__auto___21246){
var seq__21231_21247__$1 = temp__5804__auto___21246;
if(cljs.core.chunked_seq_QMARK_(seq__21231_21247__$1)){
var c__4556__auto___21248 = cljs.core.chunk_first(seq__21231_21247__$1);
var G__21249 = cljs.core.chunk_rest(seq__21231_21247__$1);
var G__21250 = c__4556__auto___21248;
var G__21251 = cljs.core.count(c__4556__auto___21248);
var G__21252 = (0);
seq__21231_21237 = G__21249;
chunk__21232_21238 = G__21250;
count__21233_21239 = G__21251;
i__21234_21240 = G__21252;
continue;
} else {
var caller_21253 = cljs.core.first(seq__21231_21247__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21253,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21253)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21253);
}


var G__21254 = cljs.core.next(seq__21231_21247__$1);
var G__21255 = null;
var G__21256 = (0);
var G__21257 = (0);
seq__21231_21237 = G__21254;
chunk__21232_21238 = G__21255;
count__21233_21239 = G__21256;
i__21234_21240 = G__21257;
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

var temp__5804__auto___21258 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___21258)){
var onq_21259 = temp__5804__auto___21258;
(onq_21259.cljs$core$IFn$_invoke$arity$1 ? onq_21259.cljs$core$IFn$_invoke$arity$1(c) : onq_21259.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.md_quiesce_self = (function tiltontec$cell$evaluate$md_quiesce_self(me){
var temp__5804__auto___21264 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___21264)){
var onq_21265 = temp__5804__auto___21264;
(onq_21265.cljs$core$IFn$_invoke$arity$1 ? onq_21265.cljs$core$IFn$_invoke$arity$1(me) : onq_21265.call(null,me));
} else {
}

var seq__21260_21266 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__21261_21267 = null;
var count__21262_21268 = (0);
var i__21263_21269 = (0);
while(true){
if((i__21263_21269 < count__21262_21268)){
var c_21270 = chunk__21261_21267.cljs$core$IIndexed$_nth$arity$2(null,i__21263_21269);
if(cljs.core.truth_(c_21270)){
tiltontec.cell.evaluate.c_quiesce(c_21270);
} else {
}


var G__21271 = seq__21260_21266;
var G__21272 = chunk__21261_21267;
var G__21273 = count__21262_21268;
var G__21274 = (i__21263_21269 + (1));
seq__21260_21266 = G__21271;
chunk__21261_21267 = G__21272;
count__21262_21268 = G__21273;
i__21263_21269 = G__21274;
continue;
} else {
var temp__5804__auto___21275 = cljs.core.seq(seq__21260_21266);
if(temp__5804__auto___21275){
var seq__21260_21276__$1 = temp__5804__auto___21275;
if(cljs.core.chunked_seq_QMARK_(seq__21260_21276__$1)){
var c__4556__auto___21277 = cljs.core.chunk_first(seq__21260_21276__$1);
var G__21278 = cljs.core.chunk_rest(seq__21260_21276__$1);
var G__21279 = c__4556__auto___21277;
var G__21280 = cljs.core.count(c__4556__auto___21277);
var G__21281 = (0);
seq__21260_21266 = G__21278;
chunk__21261_21267 = G__21279;
count__21262_21268 = G__21280;
i__21263_21269 = G__21281;
continue;
} else {
var c_21282 = cljs.core.first(seq__21260_21276__$1);
if(cljs.core.truth_(c_21282)){
tiltontec.cell.evaluate.c_quiesce(c_21282);
} else {
}


var G__21283 = cljs.core.next(seq__21260_21276__$1);
var G__21284 = null;
var G__21285 = (0);
var G__21286 = (0);
seq__21260_21266 = G__21283;
chunk__21261_21267 = G__21284;
count__21262_21268 = G__21285;
i__21263_21269 = G__21286;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(me,null);

return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,me], null),cljs.core.cst$kw$dead);
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.md_quiesce !== 'undefined')){
} else {
tiltontec.cell.evaluate.md_quiesce = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21287 = cljs.core.get_global_hierarchy;
return (fexpr__21287.cljs$core$IFn$_invoke$arity$0 ? fexpr__21287.cljs$core$IFn$_invoke$arity$0() : fexpr__21287.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","md-quiesce"),(function (me){
if(tiltontec.cell.base.md_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.base.mx_type(me)], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiesce_BANG__BANG__BANG__DASH_def], 0));

return tiltontec.cell.evaluate.md_quiesce_self(me);
}));
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined')){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21288 = cljs.core.get_global_hierarchy;
return (fexpr__21288.cljs$core$IFn$_invoke$arity$0 ? fexpr__21288.cljs$core$IFn$_invoke$arity$0() : fexpr__21288.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),(function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.base.mx_type(me),slot], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__21291 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__21292 = tiltontec.cell.base.c_model(c);
var G__21293 = tiltontec.cell.base.c_slot(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__21292,G__21293) : tiltontec.cell.evaluate.unchanged_test.call(null,G__21292,G__21293));
}
})();
return (fexpr__21291.cljs$core$IFn$_invoke$arity$2 ? fexpr__21291.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__21291.call(null,new_value,old_value));
})());
});

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(cljs.core.truth_(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.base._STAR_custom_propagator_STAR_)){
return (tiltontec.cell.base._STAR_custom_propagator_STAR_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.base._STAR_custom_propagator_STAR_.cljs$core$IFn$_invoke$arity$2(c,prior_value) : tiltontec.cell.base._STAR_custom_propagator_STAR_.call(null,c,prior_value));
} else {
return null;
}
} else {
var _STAR_depender_STAR__orig_val__21294 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__21295 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__21296 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__21297 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__21298 = null;
var _STAR_call_stack_STAR__temp_val__21299 = null;
var _STAR_c_prop_depth_STAR__temp_val__21300 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__21301 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21298);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21299);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__21300);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21301);

try{if(cljs.core.truth_((function (){var and__4115__auto__ = prior_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(and__4115__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_(cljs.core.type(tiltontec.cell.base.c_model(c)),tiltontec.cell.base.c_slot(c));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5804__auto___21306 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___21306)){
var ownees_21307 = temp__5804__auto___21306;
var seq__21302_21308 = cljs.core.seq(ownees_21307);
var chunk__21303_21309 = null;
var count__21304_21310 = (0);
var i__21305_21311 = (0);
while(true){
if((i__21305_21311 < count__21304_21310)){
var ownee_21312 = chunk__21303_21309.cljs$core$IIndexed$_nth$arity$2(null,i__21305_21311);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21312) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21312));


var G__21313 = seq__21302_21308;
var G__21314 = chunk__21303_21309;
var G__21315 = count__21304_21310;
var G__21316 = (i__21305_21311 + (1));
seq__21302_21308 = G__21313;
chunk__21303_21309 = G__21314;
count__21304_21310 = G__21315;
i__21305_21311 = G__21316;
continue;
} else {
var temp__5804__auto___21317__$1 = cljs.core.seq(seq__21302_21308);
if(temp__5804__auto___21317__$1){
var seq__21302_21318__$1 = temp__5804__auto___21317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21302_21318__$1)){
var c__4556__auto___21319 = cljs.core.chunk_first(seq__21302_21318__$1);
var G__21320 = cljs.core.chunk_rest(seq__21302_21318__$1);
var G__21321 = c__4556__auto___21319;
var G__21322 = cljs.core.count(c__4556__auto___21319);
var G__21323 = (0);
seq__21302_21308 = G__21320;
chunk__21303_21309 = G__21321;
count__21304_21310 = G__21322;
i__21305_21311 = G__21323;
continue;
} else {
var ownee_21324 = cljs.core.first(seq__21302_21318__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21324) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21324));


var G__21325 = cljs.core.next(seq__21302_21318__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__21302_21308 = G__21325;
chunk__21303_21309 = G__21326;
count__21304_21310 = G__21327;
i__21305_21311 = G__21328;
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
if(cljs.core.truth_((function (){var or__4126__auto__ = tiltontec.cell.base.c_pulse_unobserved_QMARK_(c);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy(c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_asked,cljs.core.cst$kw$always,true], null));
}
})())){
tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$propagate);
} else {
}
}

return tiltontec.cell.evaluate.ephemeral_reset(c);
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21297);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__21296);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21295);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21294);
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
var _STAR_causation_STAR__orig_val__21329 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__21330 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__21330);

try{var seq__21331 = cljs.core.seq(cljs.core.seq(callers));
var chunk__21332 = null;
var count__21333 = (0);
var i__21334 = (0);
while(true){
if((i__21334 < count__21333)){
var caller = chunk__21332.cljs$core$IIndexed$_nth$arity$2(null,i__21334);
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
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}


var G__21335 = seq__21331;
var G__21336 = chunk__21332;
var G__21337 = count__21333;
var G__21338 = (i__21334 + (1));
seq__21331 = G__21335;
chunk__21332 = G__21336;
count__21333 = G__21337;
i__21334 = G__21338;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21331);
if(temp__5804__auto__){
var seq__21331__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21331__$1);
var G__21339 = cljs.core.chunk_rest(seq__21331__$1);
var G__21340 = c__4556__auto__;
var G__21341 = cljs.core.count(c__4556__auto__);
var G__21342 = (0);
seq__21331 = G__21339;
chunk__21332 = G__21340;
count__21333 = G__21341;
i__21334 = G__21342;
continue;
} else {
var caller = cljs.core.first(seq__21331__$1);
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
tiltontec.cell.evaluate.calculate_and_set(caller,cljs.core.cst$kw$propagate,c);

}


var G__21343 = cljs.core.next(seq__21331__$1);
var G__21344 = null;
var G__21345 = (0);
var G__21346 = (0);
seq__21331 = G__21343;
chunk__21332 = G__21344;
count__21333 = G__21345;
i__21334 = G__21346;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__21329);
}}
}));
}
});
