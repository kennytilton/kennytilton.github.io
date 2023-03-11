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
var temp__5804__auto___15163 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___15163)){
var me_15164 = temp__5804__auto___15163;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_15164,cljs.core.assoc,cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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

var G__15165 = "evic> unbound prop %s of model %s";
var G__15166 = tiltontec.cell.base.c_prop(c);
var G__15167 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__15165,G__15166,G__15167) : tiltontec.util.core.err.call(null,G__15165,G__15166,G__15167));
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
var G__15168 = cljs.core.str;
var G__15169 = "evic> model %s of cell %s is dead";
var G__15170 = tiltontec.cell.base.c_model(c);
var G__15171 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__15168,G__15169,G__15170,G__15171) : tiltontec.util.core.err.call(null,G__15168,G__15169,G__15170,G__15171));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__15188 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__15189 = G__15188;
var seq__15190 = cljs.core.seq(vec__15189);
var first__15191 = cljs.core.first(seq__15190);
var seq__15190__$1 = cljs.core.next(seq__15190);
var used = first__15191;
var urest = seq__15190__$1;
var G__15188__$1 = G__15188;
while(true){
var vec__15192 = G__15188__$1;
var seq__15193 = cljs.core.seq(vec__15192);
var first__15194 = cljs.core.first(seq__15193);
var seq__15193__$1 = cljs.core.next(seq__15193);
var used__$1 = first__15194;
var urest__$1 = seq__15193__$1;
if(cljs.core.truth_(used__$1)){
var G__15195_15201 = used__$1;
var G__15196_15202 = cljs.core.cst$kw$nested;
var G__15197_15203 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__15195_15201,G__15196_15202,G__15197_15203) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__15195_15201,G__15196_15202,G__15197_15203));

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
var G__15204 = urest__$1;
G__15188__$1 = G__15204;
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
var G__15198_15205 = c;
var G__15199_15206 = cljs.core.cst$kw$evic;
var G__15200_15207 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__15198_15205,G__15199_15206,G__15200_15207) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__15198_15205,G__15199_15206,G__15200_15207));
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
var result__10624__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__10624__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && (tiltontec.cell.base.c_pulse_unobserved_QMARK_(c)))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__10624__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record(c);
} else {
}

return result__10624__auto__;
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
var vec__15208 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(1),null);
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
var me_15232 = tiltontec.cell.base.c_model(c);
var prop_15233 = tiltontec.cell.base.c_prop_name(c);
var G__15211_15234 = cljs.core.str;
var G__15212_15235 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '";
var G__15213_15236 = prop_15233;
var G__15214_15237 = "' of model '";
var G__15215_15238 = tiltontec.cell.base.c_md_name(c);
var G__15216_15239 = "'.\n";
var G__15217_15240 = "...> formula for ";
var G__15218_15241 = prop_15233;
var G__15219_15242 = ":\n";
var G__15220_15243 = tiltontec.cell.base.c_code$(c);
var G__15221_15244 = "\n...> full cell: \n";
var G__15222_15245 = cljs.core.deref(c);
var G__15223_15246 = "\n\n...> callstack, latest first: \n";
var G__15224_15247 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__15211_15234,G__15212_15235,G__15213_15236,G__15214_15237,G__15215_15238,G__15216_15239,G__15217_15240,G__15218_15241,G__15219_15242,G__15220_15243,G__15221_15244,G__15222_15245,G__15223_15246,G__15224_15247) : tiltontec.util.core.err.call(null,G__15211_15234,G__15212_15235,G__15213_15236,G__15214_15237,G__15215_15238,G__15216_15239,G__15217_15240,G__15218_15241,G__15219_15242,G__15220_15243,G__15221_15244,G__15222_15245,G__15223_15246,G__15224_15247));
} else {
}

var _STAR_call_stack_STAR__orig_val__15225 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__15226 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__15227 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__15228 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__15229 = c;
var _STAR_defer_changes_STAR__temp_val__15230 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15228);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15229);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15230);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__15231 = tiltontec.cell.base.c_rule(c);
return (fexpr__15231.cljs$core$IFn$_invoke$arity$1 ? fexpr__15231.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15231.call(null,c));
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15227);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15226);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15225);
}});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.c_awaken !== 'undefined')){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15248 = cljs.core.get_global_hierarchy;
return (fexpr__15248.cljs$core$IFn$_invoke$arity$0 ? fexpr__15248.cljs$core$IFn$_invoke$arity$0() : fexpr__15248.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),(function (c){
return tiltontec.util.base.mx_type(c);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__15249 = cljs.core.seq(c);
var chunk__15250 = null;
var count__15251 = (0);
var i__15252 = (0);
while(true){
if((i__15252 < count__15251)){
var ce = chunk__15250.cljs$core$IIndexed$_nth$arity$2(null,i__15252);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__15253 = seq__15249;
var G__15254 = chunk__15250;
var G__15255 = count__15251;
var G__15256 = (i__15252 + (1));
seq__15249 = G__15253;
chunk__15250 = G__15254;
count__15251 = G__15255;
i__15252 = G__15256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15249);
if(temp__5804__auto__){
var seq__15249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15249__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15249__$1);
var G__15257 = cljs.core.chunk_rest(seq__15249__$1);
var G__15258 = c__4556__auto__;
var G__15259 = cljs.core.count(c__4556__auto__);
var G__15260 = (0);
seq__15249 = G__15257;
chunk__15250 = G__15258;
count__15251 = G__15259;
i__15252 = G__15260;
continue;
} else {
var ce = cljs.core.first(seq__15249__$1);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__15261 = cljs.core.next(seq__15249__$1);
var G__15262 = null;
var G__15263 = (0);
var G__15264 = (0);
seq__15249 = G__15261;
chunk__15250 = G__15262;
count__15251 = G__15263;
i__15252 = G__15264;
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
var temp__5804__auto___15265 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___15265)){
var me_15266 = temp__5804__auto___15265;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),me_15266], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__15267 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15268 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15268);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15267);
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

var result__10624__auto__ = new_value;
var _STAR_depender_STAR__orig_val__15269_15271 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__15270_15272 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15270_15272);

try{var prior_value_15273 = tiltontec.cell.base.c_value(c);
var prior_state_15274 = tiltontec.cell.base.c_value_state(c);
var callers_15275 = tiltontec.cell.base.c_callers(c);
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,c], null),new_value);

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

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

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15273) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15273)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___15276 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___15276)){
var optimize_15277 = temp__5804__auto___15276;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_15273) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_15273));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_15274]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_15273) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_15273));
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

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_15273,callers_15275) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_15273,callers_15275));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15269_15271);
}
return result__10624__auto__;
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto__ = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto__)){
var me = temp__5804__auto__;
return tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cells_DASH_flushed,me], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cells_DASH_flushed.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),tiltontec.cell.base.c_pulse_observed(c)], null)));
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))){
tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$freeze);
} else {
}

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.observer.c_observe.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__5804__auto___15282 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___15282)){
var me_15283 = temp__5804__auto___15282;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_15283], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_15283)),tiltontec.cell.base.c_prop(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__15278_15284 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__15279_15285 = null;
var count__15280_15286 = (0);
var i__15281_15287 = (0);
while(true){
if((i__15281_15287 < count__15280_15286)){
var caller_15288 = chunk__15279_15285.cljs$core$IIndexed$_nth$arity$2(null,i__15281_15287);
tiltontec.cell.evaluate.ensure_value_is_current(caller_15288,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15288)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15288);
}


var G__15289 = seq__15278_15284;
var G__15290 = chunk__15279_15285;
var G__15291 = count__15280_15286;
var G__15292 = (i__15281_15287 + (1));
seq__15278_15284 = G__15289;
chunk__15279_15285 = G__15290;
count__15280_15286 = G__15291;
i__15281_15287 = G__15292;
continue;
} else {
var temp__5804__auto___15293 = cljs.core.seq(seq__15278_15284);
if(temp__5804__auto___15293){
var seq__15278_15294__$1 = temp__5804__auto___15293;
if(cljs.core.chunked_seq_QMARK_(seq__15278_15294__$1)){
var c__4556__auto___15295 = cljs.core.chunk_first(seq__15278_15294__$1);
var G__15296 = cljs.core.chunk_rest(seq__15278_15294__$1);
var G__15297 = c__4556__auto___15295;
var G__15298 = cljs.core.count(c__4556__auto___15295);
var G__15299 = (0);
seq__15278_15284 = G__15296;
chunk__15279_15285 = G__15297;
count__15280_15286 = G__15298;
i__15281_15287 = G__15299;
continue;
} else {
var caller_15300 = cljs.core.first(seq__15278_15294__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_15300,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_15300)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_15300);
}


var G__15301 = cljs.core.next(seq__15278_15294__$1);
var G__15302 = null;
var G__15303 = (0);
var G__15304 = (0);
seq__15278_15284 = G__15301;
chunk__15279_15285 = G__15302;
count__15280_15286 = G__15303;
i__15281_15287 = G__15304;
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

var temp__5804__auto___15305 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___15305)){
var onq_15306 = temp__5804__auto___15305;
(onq_15306.cljs$core$IFn$_invoke$arity$1 ? onq_15306.cljs$core$IFn$_invoke$arity$1(c) : onq_15306.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.md_quiesce_self = (function tiltontec$cell$evaluate$md_quiesce_self(me){
var temp__5804__auto___15311 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___15311)){
var onq_15312 = temp__5804__auto___15311;
(onq_15312.cljs$core$IFn$_invoke$arity$1 ? onq_15312.cljs$core$IFn$_invoke$arity$1(me) : onq_15312.call(null,me));
} else {
}

var seq__15307_15313 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__15308_15314 = null;
var count__15309_15315 = (0);
var i__15310_15316 = (0);
while(true){
if((i__15310_15316 < count__15309_15315)){
var c_15317 = chunk__15308_15314.cljs$core$IIndexed$_nth$arity$2(null,i__15310_15316);
if(cljs.core.truth_(c_15317)){
tiltontec.cell.evaluate.c_quiesce(c_15317);
} else {
}


var G__15318 = seq__15307_15313;
var G__15319 = chunk__15308_15314;
var G__15320 = count__15309_15315;
var G__15321 = (i__15310_15316 + (1));
seq__15307_15313 = G__15318;
chunk__15308_15314 = G__15319;
count__15309_15315 = G__15320;
i__15310_15316 = G__15321;
continue;
} else {
var temp__5804__auto___15322 = cljs.core.seq(seq__15307_15313);
if(temp__5804__auto___15322){
var seq__15307_15323__$1 = temp__5804__auto___15322;
if(cljs.core.chunked_seq_QMARK_(seq__15307_15323__$1)){
var c__4556__auto___15324 = cljs.core.chunk_first(seq__15307_15323__$1);
var G__15325 = cljs.core.chunk_rest(seq__15307_15323__$1);
var G__15326 = c__4556__auto___15324;
var G__15327 = cljs.core.count(c__4556__auto___15324);
var G__15328 = (0);
seq__15307_15313 = G__15325;
chunk__15308_15314 = G__15326;
count__15309_15315 = G__15327;
i__15310_15316 = G__15328;
continue;
} else {
var c_15329 = cljs.core.first(seq__15307_15323__$1);
if(cljs.core.truth_(c_15329)){
tiltontec.cell.evaluate.c_quiesce(c_15329);
} else {
}


var G__15330 = cljs.core.next(seq__15307_15323__$1);
var G__15331 = null;
var G__15332 = (0);
var G__15333 = (0);
seq__15307_15313 = G__15330;
chunk__15308_15314 = G__15331;
count__15309_15315 = G__15332;
i__15310_15316 = G__15333;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15334 = cljs.core.get_global_hierarchy;
return (fexpr__15334.cljs$core$IFn$_invoke$arity$0 ? fexpr__15334.cljs$core$IFn$_invoke$arity$0() : fexpr__15334.call(null));
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
 *   to models it will be possible for a prop to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15335 = cljs.core.get_global_hierarchy;
return (fexpr__15335.cljs$core$IFn$_invoke$arity$0 ? fexpr__15335.cljs$core$IFn$_invoke$arity$0() : fexpr__15335.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","unchanged-test"),(function (me,prop){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.base.mx_type(me),prop], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.unchanged_test.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (self,propname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__15338 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__15339 = tiltontec.cell.base.c_model(c);
var G__15340 = tiltontec.cell.base.c_prop(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__15339,G__15340) : tiltontec.cell.evaluate.unchanged_test.call(null,G__15339,G__15340));
}
})();
return (fexpr__15338.cljs$core$IFn$_invoke$arity$2 ? fexpr__15338.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__15338.call(null,new_value,old_value));
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
var _STAR_depender_STAR__orig_val__15341 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__15342 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__15343 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__15344 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__15345 = null;
var _STAR_call_stack_STAR__temp_val__15346 = null;
var _STAR_c_prop_depth_STAR__temp_val__15347 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__15348 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__15345);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__15346);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__15347);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__15348);

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
var temp__5804__auto___15353 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___15353)){
var ownees_15354 = temp__5804__auto___15353;
var seq__15349_15355 = cljs.core.seq(ownees_15354);
var chunk__15350_15356 = null;
var count__15351_15357 = (0);
var i__15352_15358 = (0);
while(true){
if((i__15352_15358 < count__15351_15357)){
var ownee_15359 = chunk__15350_15356.cljs$core$IIndexed$_nth$arity$2(null,i__15352_15358);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15359) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_15359));


var G__15360 = seq__15349_15355;
var G__15361 = chunk__15350_15356;
var G__15362 = count__15351_15357;
var G__15363 = (i__15352_15358 + (1));
seq__15349_15355 = G__15360;
chunk__15350_15356 = G__15361;
count__15351_15357 = G__15362;
i__15352_15358 = G__15363;
continue;
} else {
var temp__5804__auto___15364__$1 = cljs.core.seq(seq__15349_15355);
if(temp__5804__auto___15364__$1){
var seq__15349_15365__$1 = temp__5804__auto___15364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15349_15365__$1)){
var c__4556__auto___15366 = cljs.core.chunk_first(seq__15349_15365__$1);
var G__15367 = cljs.core.chunk_rest(seq__15349_15365__$1);
var G__15368 = c__4556__auto___15366;
var G__15369 = cljs.core.count(c__4556__auto___15366);
var G__15370 = (0);
seq__15349_15355 = G__15367;
chunk__15350_15356 = G__15368;
count__15351_15357 = G__15369;
i__15352_15358 = G__15370;
continue;
} else {
var ownee_15371 = cljs.core.first(seq__15349_15365__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_15371) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_15371));


var G__15372 = cljs.core.next(seq__15349_15365__$1);
var G__15373 = null;
var G__15374 = (0);
var G__15375 = (0);
seq__15349_15355 = G__15372;
chunk__15350_15356 = G__15373;
count__15351_15357 = G__15374;
i__15352_15358 = G__15375;
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__15344);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__15343);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__15342);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__15341);
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
var _STAR_causation_STAR__orig_val__15376 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__15377 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__15377);

try{var seq__15378 = cljs.core.seq(cljs.core.seq(callers));
var chunk__15379 = null;
var count__15380 = (0);
var i__15381 = (0);
while(true){
if((i__15381 < count__15380)){
var caller = chunk__15379.cljs$core$IIndexed$_nth$arity$2(null,i__15381);
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


var G__15382 = seq__15378;
var G__15383 = chunk__15379;
var G__15384 = count__15380;
var G__15385 = (i__15381 + (1));
seq__15378 = G__15382;
chunk__15379 = G__15383;
count__15380 = G__15384;
i__15381 = G__15385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15378);
if(temp__5804__auto__){
var seq__15378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15378__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15378__$1);
var G__15386 = cljs.core.chunk_rest(seq__15378__$1);
var G__15387 = c__4556__auto__;
var G__15388 = cljs.core.count(c__4556__auto__);
var G__15389 = (0);
seq__15378 = G__15386;
chunk__15379 = G__15387;
count__15380 = G__15388;
i__15381 = G__15389;
continue;
} else {
var caller = cljs.core.first(seq__15378__$1);
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


var G__15390 = cljs.core.next(seq__15378__$1);
var G__15391 = null;
var G__15392 = (0);
var G__15393 = (0);
seq__15378 = G__15390;
chunk__15379 = G__15391;
count__15380 = G__15392;
i__15381 = G__15393;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__15376);
}}
}));
}
});
