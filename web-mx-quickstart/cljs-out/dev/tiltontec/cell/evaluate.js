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
var temp__5804__auto___21128 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___21128)){
var me_21129 = temp__5804__auto___21128;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_21129,cljs.core.assoc,cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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

var G__21130 = "evic> unbound slot %s of model %s";
var G__21131 = tiltontec.cell.base.c_slot(c);
var G__21132 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__21130,G__21131,G__21132) : tiltontec.util.core.err.call(null,G__21130,G__21131,G__21132));
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
var G__21133 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21133) : tiltontec.cell.base.mdead_QMARK_.call(null,G__21133));
} else {
return null;
}
})())){
var G__21134 = cljs.core.str;
var G__21135 = "evic> model %s of cell %s is dead";
var G__21136 = tiltontec.cell.base.c_model(c);
var G__21137 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__21134,G__21135,G__21136,G__21137) : tiltontec.util.core.err.call(null,G__21134,G__21135,G__21136,G__21137));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__21154 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__21155 = G__21154;
var seq__21156 = cljs.core.seq(vec__21155);
var first__21157 = cljs.core.first(seq__21156);
var seq__21156__$1 = cljs.core.next(seq__21156);
var used = first__21157;
var urest = seq__21156__$1;
var G__21154__$1 = G__21154;
while(true){
var vec__21158 = G__21154__$1;
var seq__21159 = cljs.core.seq(vec__21158);
var first__21160 = cljs.core.first(seq__21159);
var seq__21159__$1 = cljs.core.next(seq__21159);
var used__$1 = first__21160;
var urest__$1 = seq__21159__$1;
if(cljs.core.truth_(used__$1)){
var G__21161_21167 = used__$1;
var G__21162_21168 = cljs.core.cst$kw$nested;
var G__21163_21169 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__21161_21167,G__21162_21168,G__21163_21169) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__21161_21167,G__21162_21168,G__21163_21169));

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
var G__21170 = urest__$1;
G__21154__$1 = G__21170;
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
var G__21164_21171 = c;
var G__21165_21172 = cljs.core.cst$kw$evic;
var G__21166_21173 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__21164_21171,G__21165_21172,G__21166_21173) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__21164_21171,G__21165_21172,G__21166_21173));
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
var vec__21174 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21174,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21174,(1),null);
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
var me_21198 = tiltontec.cell.base.c_model(c);
var slot_21199 = tiltontec.cell.base.c_slot_name(c);
var G__21177_21200 = cljs.core.str;
var G__21178_21201 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing slot '";
var G__21179_21202 = slot_21199;
var G__21180_21203 = "' of model '";
var G__21181_21204 = tiltontec.cell.base.c_md_name(c);
var G__21182_21205 = "'.\n";
var G__21183_21206 = "...> formula for ";
var G__21184_21207 = slot_21199;
var G__21185_21208 = ":\n";
var G__21186_21209 = tiltontec.cell.base.c_code$(c);
var G__21187_21210 = "\n...> full cell: \n";
var G__21188_21211 = cljs.core.deref(c);
var G__21189_21212 = "\n\n...> callstack, latest first: \n";
var G__21190_21213 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," slot: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__21177_21200,G__21178_21201,G__21179_21202,G__21180_21203,G__21181_21204,G__21182_21205,G__21183_21206,G__21184_21207,G__21185_21208,G__21186_21209,G__21187_21210,G__21188_21211,G__21189_21212,G__21190_21213) : tiltontec.util.core.err.call(null,G__21177_21200,G__21178_21201,G__21179_21202,G__21180_21203,G__21181_21204,G__21182_21205,G__21183_21206,G__21184_21207,G__21185_21208,G__21186_21209,G__21187_21210,G__21188_21211,G__21189_21212,G__21190_21213));
} else {
}

var _STAR_call_stack_STAR__orig_val__21191 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__21192 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__21193 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__21194 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__21195 = c;
var _STAR_defer_changes_STAR__temp_val__21196 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21194);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21195);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21196);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slot.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__21197 = tiltontec.cell.base.c_rule(c);
return (fexpr__21197.cljs$core$IFn$_invoke$arity$1 ? fexpr__21197.cljs$core$IFn$_invoke$arity$1(c) : fexpr__21197.call(null,c));
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21193);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21192);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21191);
}});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.c_awaken !== 'undefined')){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21214 = cljs.core.get_global_hierarchy;
return (fexpr__21214.cljs$core$IFn$_invoke$arity$0 ? fexpr__21214.cljs$core$IFn$_invoke$arity$0() : fexpr__21214.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),(function (c){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(c));
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
if(cljs.core.coll_QMARK_(c)){
var seq__21215 = cljs.core.seq(c);
var chunk__21216 = null;
var count__21217 = (0);
var i__21218 = (0);
while(true){
if((i__21218 < count__21217)){
var ce = chunk__21216.cljs$core$IIndexed$_nth$arity$2(null,i__21218);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21219 = seq__21215;
var G__21220 = chunk__21216;
var G__21221 = count__21217;
var G__21222 = (i__21218 + (1));
seq__21215 = G__21219;
chunk__21216 = G__21220;
count__21217 = G__21221;
i__21218 = G__21222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21215);
if(temp__5804__auto__){
var seq__21215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21215__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21215__$1);
var G__21223 = cljs.core.chunk_rest(seq__21215__$1);
var G__21224 = c__4556__auto__;
var G__21225 = cljs.core.count(c__4556__auto__);
var G__21226 = (0);
seq__21215 = G__21223;
chunk__21216 = G__21224;
count__21217 = G__21225;
i__21218 = G__21226;
continue;
} else {
var ce = cljs.core.first(seq__21215__$1);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21227 = cljs.core.next(seq__21215__$1);
var G__21228 = null;
var G__21229 = (0);
var G__21230 = (0);
seq__21215 = G__21227;
chunk__21216 = G__21228;
count__21217 = G__21229;
i__21218 = G__21230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_fall_DASH_thru,((tiltontec.util.core.any_ref_QMARK_(c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH_of,cljs.core.type(c),cljs.core.deref(c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unref,c,cljs.core.type(c)], null))], 0));

}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_cell,(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if(tiltontec.cell.base.c_pulse_unobserved_QMARK_(c)){
var temp__5804__auto___21231 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___21231)){
var me_21232 = temp__5804__auto___21231;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot(c),me_21232], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__21233 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21234 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21234);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21233);
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
var _STAR_depender_STAR__orig_val__21235_21237 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21236_21238 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21236_21238);

try{var prior_value_21239 = tiltontec.cell.base.c_value(c);
var prior_state_21240 = tiltontec.cell.base.c_value_state(c);
var callers_21241 = tiltontec.cell.base.c_callers(c);
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

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21239) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21239)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___21242 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___21242)){
var optimize_21243 = temp__5804__auto___21242;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_21239) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_21239));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_21240]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21239) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21239));
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

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_21239,callers_21241) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_21239,callers_21241));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21235_21237);
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

var temp__5804__auto___21248 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___21248)){
var me_21249 = temp__5804__auto___21248;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_21249], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_21249)),tiltontec.cell.base.c_slot(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__21244_21250 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__21245_21251 = null;
var count__21246_21252 = (0);
var i__21247_21253 = (0);
while(true){
if((i__21247_21253 < count__21246_21252)){
var caller_21254 = chunk__21245_21251.cljs$core$IIndexed$_nth$arity$2(null,i__21247_21253);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21254,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21254)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21254);
}


var G__21255 = seq__21244_21250;
var G__21256 = chunk__21245_21251;
var G__21257 = count__21246_21252;
var G__21258 = (i__21247_21253 + (1));
seq__21244_21250 = G__21255;
chunk__21245_21251 = G__21256;
count__21246_21252 = G__21257;
i__21247_21253 = G__21258;
continue;
} else {
var temp__5804__auto___21259 = cljs.core.seq(seq__21244_21250);
if(temp__5804__auto___21259){
var seq__21244_21260__$1 = temp__5804__auto___21259;
if(cljs.core.chunked_seq_QMARK_(seq__21244_21260__$1)){
var c__4556__auto___21261 = cljs.core.chunk_first(seq__21244_21260__$1);
var G__21262 = cljs.core.chunk_rest(seq__21244_21260__$1);
var G__21263 = c__4556__auto___21261;
var G__21264 = cljs.core.count(c__4556__auto___21261);
var G__21265 = (0);
seq__21244_21250 = G__21262;
chunk__21245_21251 = G__21263;
count__21246_21252 = G__21264;
i__21247_21253 = G__21265;
continue;
} else {
var caller_21266 = cljs.core.first(seq__21244_21260__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21266,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21266)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21266);
}


var G__21267 = cljs.core.next(seq__21244_21260__$1);
var G__21268 = null;
var G__21269 = (0);
var G__21270 = (0);
seq__21244_21250 = G__21267;
chunk__21245_21251 = G__21268;
count__21246_21252 = G__21269;
i__21247_21253 = G__21270;
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

var temp__5804__auto___21271 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___21271)){
var onq_21272 = temp__5804__auto___21271;
(onq_21272.cljs$core$IFn$_invoke$arity$1 ? onq_21272.cljs$core$IFn$_invoke$arity$1(c) : onq_21272.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.md_quiesce_self = (function tiltontec$cell$evaluate$md_quiesce_self(me){
var temp__5804__auto___21277 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___21277)){
var onq_21278 = temp__5804__auto___21277;
(onq_21278.cljs$core$IFn$_invoke$arity$1 ? onq_21278.cljs$core$IFn$_invoke$arity$1(me) : onq_21278.call(null,me));
} else {
}

var seq__21273_21279 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__21274_21280 = null;
var count__21275_21281 = (0);
var i__21276_21282 = (0);
while(true){
if((i__21276_21282 < count__21275_21281)){
var c_21283 = chunk__21274_21280.cljs$core$IIndexed$_nth$arity$2(null,i__21276_21282);
if(cljs.core.truth_(c_21283)){
tiltontec.cell.evaluate.c_quiesce(c_21283);
} else {
}


var G__21284 = seq__21273_21279;
var G__21285 = chunk__21274_21280;
var G__21286 = count__21275_21281;
var G__21287 = (i__21276_21282 + (1));
seq__21273_21279 = G__21284;
chunk__21274_21280 = G__21285;
count__21275_21281 = G__21286;
i__21276_21282 = G__21287;
continue;
} else {
var temp__5804__auto___21288 = cljs.core.seq(seq__21273_21279);
if(temp__5804__auto___21288){
var seq__21273_21289__$1 = temp__5804__auto___21288;
if(cljs.core.chunked_seq_QMARK_(seq__21273_21289__$1)){
var c__4556__auto___21290 = cljs.core.chunk_first(seq__21273_21289__$1);
var G__21291 = cljs.core.chunk_rest(seq__21273_21289__$1);
var G__21292 = c__4556__auto___21290;
var G__21293 = cljs.core.count(c__4556__auto___21290);
var G__21294 = (0);
seq__21273_21279 = G__21291;
chunk__21274_21280 = G__21292;
count__21275_21281 = G__21293;
i__21276_21282 = G__21294;
continue;
} else {
var c_21295 = cljs.core.first(seq__21273_21289__$1);
if(cljs.core.truth_(c_21295)){
tiltontec.cell.evaluate.c_quiesce(c_21295);
} else {
}


var G__21296 = cljs.core.next(seq__21273_21289__$1);
var G__21297 = null;
var G__21298 = (0);
var G__21299 = (0);
seq__21273_21279 = G__21296;
chunk__21274_21280 = G__21297;
count__21275_21281 = G__21298;
i__21276_21282 = G__21299;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21300 = cljs.core.get_global_hierarchy;
return (fexpr__21300.cljs$core$IFn$_invoke$arity$0 ? fexpr__21300.cljs$core$IFn$_invoke$arity$0() : fexpr__21300.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","md-quiesce"),(function (me){
if(tiltontec.cell.base.md_ref_QMARK_(me)){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type(me)], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.md_quiesce.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21301 = cljs.core.get_global_hierarchy;
return (fexpr__21301.cljs$core$IFn$_invoke$arity$0 ? fexpr__21301.cljs$core$IFn$_invoke$arity$0() : fexpr__21301.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),(function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type(cljs.core.deref(me)):null),slot], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__21304 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__21305 = tiltontec.cell.base.c_model(c);
var G__21306 = tiltontec.cell.base.c_slot(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__21305,G__21306) : tiltontec.cell.evaluate.unchanged_test.call(null,G__21305,G__21306));
}
})();
return (fexpr__21304.cljs$core$IFn$_invoke$arity$2 ? fexpr__21304.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__21304.call(null,new_value,old_value));
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
var _STAR_depender_STAR__orig_val__21307 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__21308 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__21309 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__21310 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__21311 = null;
var _STAR_call_stack_STAR__temp_val__21312 = null;
var _STAR_c_prop_depth_STAR__temp_val__21313 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__21314 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21311);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21312);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__21313);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21314);

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
var temp__5804__auto___21319 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___21319)){
var ownees_21320 = temp__5804__auto___21319;
var seq__21315_21321 = cljs.core.seq(ownees_21320);
var chunk__21316_21322 = null;
var count__21317_21323 = (0);
var i__21318_21324 = (0);
while(true){
if((i__21318_21324 < count__21317_21323)){
var ownee_21325 = chunk__21316_21322.cljs$core$IIndexed$_nth$arity$2(null,i__21318_21324);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21325) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21325));


var G__21326 = seq__21315_21321;
var G__21327 = chunk__21316_21322;
var G__21328 = count__21317_21323;
var G__21329 = (i__21318_21324 + (1));
seq__21315_21321 = G__21326;
chunk__21316_21322 = G__21327;
count__21317_21323 = G__21328;
i__21318_21324 = G__21329;
continue;
} else {
var temp__5804__auto___21330__$1 = cljs.core.seq(seq__21315_21321);
if(temp__5804__auto___21330__$1){
var seq__21315_21331__$1 = temp__5804__auto___21330__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21315_21331__$1)){
var c__4556__auto___21332 = cljs.core.chunk_first(seq__21315_21331__$1);
var G__21333 = cljs.core.chunk_rest(seq__21315_21331__$1);
var G__21334 = c__4556__auto___21332;
var G__21335 = cljs.core.count(c__4556__auto___21332);
var G__21336 = (0);
seq__21315_21321 = G__21333;
chunk__21316_21322 = G__21334;
count__21317_21323 = G__21335;
i__21318_21324 = G__21336;
continue;
} else {
var ownee_21337 = cljs.core.first(seq__21315_21331__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21337) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21337));


var G__21338 = cljs.core.next(seq__21315_21331__$1);
var G__21339 = null;
var G__21340 = (0);
var G__21341 = (0);
seq__21315_21321 = G__21338;
chunk__21316_21322 = G__21339;
count__21317_21323 = G__21340;
i__21318_21324 = G__21341;
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21310);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__21309);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21308);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21307);
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_(callers)){
return null;
} else {
var causation = cljs.core.cons(c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$tell_DASH_dependents,c,(function (opcode,defer_info){
if(cljs.core.truth_((function (){var G__21342 = tiltontec.cell.base.c_model(c);
return (tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.mdead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21342) : tiltontec.cell.base.mdead_QMARK_.call(null,G__21342));
})())){
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("WHOAA!!!! dead by time :tell-deps dispatched; bailing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
} else {
var _STAR_causation_STAR__orig_val__21343 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__21344 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__21344);

try{var seq__21345 = cljs.core.seq(cljs.core.seq(callers));
var chunk__21346 = null;
var count__21347 = (0);
var i__21348 = (0);
while(true){
if((i__21348 < count__21347)){
var caller = chunk__21346.cljs$core$IIndexed$_nth$arity$2(null,i__21348);
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


var G__21349 = seq__21345;
var G__21350 = chunk__21346;
var G__21351 = count__21347;
var G__21352 = (i__21348 + (1));
seq__21345 = G__21349;
chunk__21346 = G__21350;
count__21347 = G__21351;
i__21348 = G__21352;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21345);
if(temp__5804__auto__){
var seq__21345__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21345__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21345__$1);
var G__21353 = cljs.core.chunk_rest(seq__21345__$1);
var G__21354 = c__4556__auto__;
var G__21355 = cljs.core.count(c__4556__auto__);
var G__21356 = (0);
seq__21345 = G__21353;
chunk__21346 = G__21354;
count__21347 = G__21355;
i__21348 = G__21356;
continue;
} else {
var caller = cljs.core.first(seq__21345__$1);
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


var G__21357 = cljs.core.next(seq__21345__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21345 = G__21357;
chunk__21346 = G__21358;
count__21347 = G__21359;
i__21348 = G__21360;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__21343);
}}
}));
}
});
