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
goog.require('tiltontec.cell.watch');
goog.require('tiltontec.cell.integrity');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__5804__auto___20929 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___20929)){
var me_20930 = temp__5804__auto___20929;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_20930,cljs.core.assoc,cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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

var G__20931 = "evic> unbound prop %s of model %s";
var G__20932 = tiltontec.cell.base.c_prop(c);
var G__20933 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__20931,G__20932,G__20933) : tiltontec.util.core.err.call(null,G__20931,G__20932,G__20933));
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
var G__20934 = cljs.core.str;
var G__20935 = "evic> model %s of cell %s is dead";
var G__20936 = tiltontec.cell.base.c_model(c);
var G__20937 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__20934,G__20935,G__20936,G__20937) : tiltontec.util.core.err.call(null,G__20934,G__20935,G__20936,G__20937));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__20954 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__20955 = G__20954;
var seq__20956 = cljs.core.seq(vec__20955);
var first__20957 = cljs.core.first(seq__20956);
var seq__20956__$1 = cljs.core.next(seq__20956);
var used = first__20957;
var urest = seq__20956__$1;
var G__20954__$1 = G__20954;
while(true){
var vec__20958 = G__20954__$1;
var seq__20959 = cljs.core.seq(vec__20958);
var first__20960 = cljs.core.first(seq__20959);
var seq__20959__$1 = cljs.core.next(seq__20959);
var used__$1 = first__20960;
var urest__$1 = seq__20959__$1;
if(cljs.core.truth_(used__$1)){
var G__20961_20967 = used__$1;
var G__20962_20968 = cljs.core.cst$kw$nested;
var G__20963_20969 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__20961_20967,G__20962_20968,G__20963_20969) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__20961_20967,G__20962_20968,G__20963_20969));

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
var G__20970 = urest__$1;
G__20954__$1 = G__20970;
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
var G__20964_20971 = c;
var G__20965_20972 = cljs.core.cst$kw$evic;
var G__20966_20973 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__20964_20971,G__20965_20972,G__20966_20973) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__20964_20971,G__20965_20972,G__20966_20973));
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
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(c))){
var result__16422__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__16422__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && (tiltontec.cell.base.c_pulse_unwatched_QMARK_(c)))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__16422__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record(c);
} else {
}

return result__16422__auto__;
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
var vec__20974 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20974,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20974,(1),null);
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if(cljs.core.map_QMARK_(cljs.core.deref(c))){
} else {
throw (new Error(["Assert failed: ","calc-n-set","\n","(map? (deref c))"].join('')));
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
var me_20998 = tiltontec.cell.base.c_model(c);
var prop_20999 = tiltontec.cell.base.c_prop_name(c);
var G__20977_21000 = cljs.core.str;
var G__20978_21001 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '";
var G__20979_21002 = prop_20999;
var G__20980_21003 = "' of model '";
var G__20981_21004 = tiltontec.cell.base.c_md_name(c);
var G__20982_21005 = "'.\n";
var G__20983_21006 = "...> formula for ";
var G__20984_21007 = prop_20999;
var G__20985_21008 = ":\n";
var G__20986_21009 = tiltontec.cell.base.c_code$(c);
var G__20987_21010 = "\n...> full cell: \n";
var G__20988_21011 = cljs.core.deref(c);
var G__20989_21012 = "\n\n...> callstack, latest first: \n";
var G__20990_21013 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__20977_21000,G__20978_21001,G__20979_21002,G__20980_21003,G__20981_21004,G__20982_21005,G__20983_21006,G__20984_21007,G__20985_21008,G__20986_21009,G__20987_21010,G__20988_21011,G__20989_21012,G__20990_21013) : tiltontec.util.core.err.call(null,G__20977_21000,G__20978_21001,G__20979_21002,G__20980_21003,G__20981_21004,G__20982_21005,G__20983_21006,G__20984_21007,G__20985_21008,G__20986_21009,G__20987_21010,G__20988_21011,G__20989_21012,G__20990_21013));
} else {
}

var _STAR_call_stack_STAR__orig_val__20991 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__20992 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__20993 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__20994 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__20995 = c;
var _STAR_defer_changes_STAR__temp_val__20996 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__20994);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20995);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__20996);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__20997 = tiltontec.cell.base.c_rule(c);
return (fexpr__20997.cljs$core$IFn$_invoke$arity$1 ? fexpr__20997.cljs$core$IFn$_invoke$arity$1(c) : fexpr__20997.call(null,c));
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__20993);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20992);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__20991);
}});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.evaluate !== 'undefined') && (typeof tiltontec.cell.evaluate.c_awaken !== 'undefined')){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21014 = cljs.core.get_global_hierarchy;
return (fexpr__21014.cljs$core$IFn$_invoke$arity$0 ? fexpr__21014.cljs$core$IFn$_invoke$arity$0() : fexpr__21014.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.cell.evaluate","c-awaken"),(function (c){
return tiltontec.util.base.mx_type(c);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__21015 = cljs.core.seq(c);
var chunk__21016 = null;
var count__21017 = (0);
var i__21018 = (0);
while(true){
if((i__21018 < count__21017)){
var ce = chunk__21016.cljs$core$IIndexed$_nth$arity$2(null,i__21018);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21019 = seq__21015;
var G__21020 = chunk__21016;
var G__21021 = count__21017;
var G__21022 = (i__21018 + (1));
seq__21015 = G__21019;
chunk__21016 = G__21020;
count__21017 = G__21021;
i__21018 = G__21022;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21015);
if(temp__5804__auto__){
var seq__21015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21015__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21015__$1);
var G__21023 = cljs.core.chunk_rest(seq__21015__$1);
var G__21024 = c__4556__auto__;
var G__21025 = cljs.core.count(c__4556__auto__);
var G__21026 = (0);
seq__21015 = G__21023;
chunk__21016 = G__21024;
count__21017 = G__21025;
i__21018 = G__21026;
continue;
} else {
var ce = cljs.core.first(seq__21015__$1);
(tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.evaluate.c_awaken.call(null,ce));


var G__21027 = cljs.core.next(seq__21015__$1);
var G__21028 = null;
var G__21029 = (0);
var G__21030 = (0);
seq__21015 = G__21027;
chunk__21016 = G__21028;
count__21017 = G__21029;
i__21018 = G__21030;
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

if(tiltontec.cell.base.c_pulse_unwatched_QMARK_(c)){
var temp__5804__auto___21031 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___21031)){
var me_21032 = temp__5804__auto___21031;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),me_21032], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.evaluate.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__21033 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21034 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21034);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21033);
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

var result__16422__auto__ = new_value;
var _STAR_depender_STAR__orig_val__21035_21037 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__21036_21038 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21036_21038);

try{var prior_value_21039 = tiltontec.cell.base.c_value(c);
var prior_state_21040 = tiltontec.cell.base.c_value_state(c);
var callers_21041 = tiltontec.cell.base.c_callers(c);
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

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21039) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21039)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___21042 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___21042)){
var optimize_21043 = temp__5804__auto___21042;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_21039) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_21039));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_21040]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_21039) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_21039));
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

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_21039,callers_21041) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_21039,callers_21041));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21035_21037);
}
return result__16422__auto__;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$freeze,tiltontec.cell.base.c_optimize(c))){
tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$freeze);
} else {
}

tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$optimized_DASH_away);

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$opti_DASH_away);

var temp__5804__auto___21048 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___21048)){
var me_21049 = temp__5804__auto___21048;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_21049], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_21049)),tiltontec.cell.base.c_prop(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__21044_21050 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__21045_21051 = null;
var count__21046_21052 = (0);
var i__21047_21053 = (0);
while(true){
if((i__21047_21053 < count__21046_21052)){
var caller_21054 = chunk__21045_21051.cljs$core$IIndexed$_nth$arity$2(null,i__21047_21053);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21054,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21054)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21054);
}


var G__21055 = seq__21044_21050;
var G__21056 = chunk__21045_21051;
var G__21057 = count__21046_21052;
var G__21058 = (i__21047_21053 + (1));
seq__21044_21050 = G__21055;
chunk__21045_21051 = G__21056;
count__21046_21052 = G__21057;
i__21047_21053 = G__21058;
continue;
} else {
var temp__5804__auto___21059 = cljs.core.seq(seq__21044_21050);
if(temp__5804__auto___21059){
var seq__21044_21060__$1 = temp__5804__auto___21059;
if(cljs.core.chunked_seq_QMARK_(seq__21044_21060__$1)){
var c__4556__auto___21061 = cljs.core.chunk_first(seq__21044_21060__$1);
var G__21062 = cljs.core.chunk_rest(seq__21044_21060__$1);
var G__21063 = c__4556__auto___21061;
var G__21064 = cljs.core.count(c__4556__auto___21061);
var G__21065 = (0);
seq__21044_21050 = G__21062;
chunk__21045_21051 = G__21063;
count__21046_21052 = G__21064;
i__21047_21053 = G__21065;
continue;
} else {
var caller_21066 = cljs.core.first(seq__21044_21060__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_21066,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_21066)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_21066);
}


var G__21067 = cljs.core.next(seq__21044_21060__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__21044_21050 = G__21067;
chunk__21045_21051 = G__21068;
count__21046_21052 = G__21069;
i__21047_21053 = G__21070;
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

var temp__5804__auto___21071 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___21071)){
var onq_21072 = temp__5804__auto___21071;
(onq_21072.cljs$core$IFn$_invoke$arity$1 ? onq_21072.cljs$core$IFn$_invoke$arity$1(c) : onq_21072.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.evaluate.md_quiesce_self = (function tiltontec$cell$evaluate$md_quiesce_self(me){
var temp__5804__auto___21077 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___21077)){
var onq_21078 = temp__5804__auto___21077;
(onq_21078.cljs$core$IFn$_invoke$arity$1 ? onq_21078.cljs$core$IFn$_invoke$arity$1(me) : onq_21078.call(null,me));
} else {
}

var seq__21073_21079 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__21074_21080 = null;
var count__21075_21081 = (0);
var i__21076_21082 = (0);
while(true){
if((i__21076_21082 < count__21075_21081)){
var c_21083 = chunk__21074_21080.cljs$core$IIndexed$_nth$arity$2(null,i__21076_21082);
if(cljs.core.truth_(c_21083)){
tiltontec.cell.evaluate.c_quiesce(c_21083);
} else {
}


var G__21084 = seq__21073_21079;
var G__21085 = chunk__21074_21080;
var G__21086 = count__21075_21081;
var G__21087 = (i__21076_21082 + (1));
seq__21073_21079 = G__21084;
chunk__21074_21080 = G__21085;
count__21075_21081 = G__21086;
i__21076_21082 = G__21087;
continue;
} else {
var temp__5804__auto___21088 = cljs.core.seq(seq__21073_21079);
if(temp__5804__auto___21088){
var seq__21073_21089__$1 = temp__5804__auto___21088;
if(cljs.core.chunked_seq_QMARK_(seq__21073_21089__$1)){
var c__4556__auto___21090 = cljs.core.chunk_first(seq__21073_21089__$1);
var G__21091 = cljs.core.chunk_rest(seq__21073_21089__$1);
var G__21092 = c__4556__auto___21090;
var G__21093 = cljs.core.count(c__4556__auto___21090);
var G__21094 = (0);
seq__21073_21079 = G__21091;
chunk__21074_21080 = G__21092;
count__21075_21081 = G__21093;
i__21076_21082 = G__21094;
continue;
} else {
var c_21095 = cljs.core.first(seq__21073_21089__$1);
if(cljs.core.truth_(c_21095)){
tiltontec.cell.evaluate.c_quiesce(c_21095);
} else {
}


var G__21096 = cljs.core.next(seq__21073_21089__$1);
var G__21097 = null;
var G__21098 = (0);
var G__21099 = (0);
seq__21073_21079 = G__21096;
chunk__21074_21080 = G__21097;
count__21075_21081 = G__21098;
i__21076_21082 = G__21099;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21100 = cljs.core.get_global_hierarchy;
return (fexpr__21100.cljs$core$IFn$_invoke$arity$0 ? fexpr__21100.cljs$core$IFn$_invoke$arity$0() : fexpr__21100.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21101 = cljs.core.get_global_hierarchy;
return (fexpr__21101.cljs$core$IFn$_invoke$arity$0 ? fexpr__21101.cljs$core$IFn$_invoke$arity$0() : fexpr__21101.call(null));
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
return cljs.core.not((function (){var fexpr__21104 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__21105 = tiltontec.cell.base.c_model(c);
var G__21106 = tiltontec.cell.base.c_prop(c);
return (tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__21105,G__21106) : tiltontec.cell.evaluate.unchanged_test.call(null,G__21105,G__21106));
}
})();
return (fexpr__21104.cljs$core$IFn$_invoke$arity$2 ? fexpr__21104.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__21104.call(null,new_value,old_value));
})());
});

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any watch; and
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
var _STAR_depender_STAR__orig_val__21107 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__21108 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__21109 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__21110 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__21111 = null;
var _STAR_call_stack_STAR__temp_val__21112 = null;
var _STAR_c_prop_depth_STAR__temp_val__21113 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__21114 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__21111);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__21112);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__21113);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__21114);

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
var temp__5804__auto___21119 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___21119)){
var ownees_21120 = temp__5804__auto___21119;
var seq__21115_21121 = cljs.core.seq(ownees_21120);
var chunk__21116_21122 = null;
var count__21117_21123 = (0);
var i__21118_21124 = (0);
while(true){
if((i__21118_21124 < count__21117_21123)){
var ownee_21125 = chunk__21116_21122.cljs$core$IIndexed$_nth$arity$2(null,i__21118_21124);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21125) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21125));


var G__21126 = seq__21115_21121;
var G__21127 = chunk__21116_21122;
var G__21128 = count__21117_21123;
var G__21129 = (i__21118_21124 + (1));
seq__21115_21121 = G__21126;
chunk__21116_21122 = G__21127;
count__21117_21123 = G__21128;
i__21118_21124 = G__21129;
continue;
} else {
var temp__5804__auto___21130__$1 = cljs.core.seq(seq__21115_21121);
if(temp__5804__auto___21130__$1){
var seq__21115_21131__$1 = temp__5804__auto___21130__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21115_21131__$1)){
var c__4556__auto___21132 = cljs.core.chunk_first(seq__21115_21131__$1);
var G__21133 = cljs.core.chunk_rest(seq__21115_21131__$1);
var G__21134 = c__4556__auto___21132;
var G__21135 = cljs.core.count(c__4556__auto___21132);
var G__21136 = (0);
seq__21115_21121 = G__21133;
chunk__21116_21122 = G__21134;
count__21117_21123 = G__21135;
i__21118_21124 = G__21136;
continue;
} else {
var ownee_21137 = cljs.core.first(seq__21115_21131__$1);
(tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_21137) : tiltontec.cell.evaluate.md_quiesce.call(null,ownee_21137));


var G__21138 = cljs.core.next(seq__21115_21131__$1);
var G__21139 = null;
var G__21140 = (0);
var G__21141 = (0);
seq__21115_21121 = G__21138;
chunk__21116_21122 = G__21139;
count__21117_21123 = G__21140;
i__21118_21124 = G__21141;
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__21110);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__21109);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__21108);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__21107);
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
var _STAR_causation_STAR__orig_val__21142 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__21143 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__21143);

try{var seq__21144 = cljs.core.seq(cljs.core.seq(callers));
var chunk__21145 = null;
var count__21146 = (0);
var i__21147 = (0);
while(true){
if((i__21147 < count__21146)){
var caller = chunk__21145.cljs$core$IIndexed$_nth$arity$2(null,i__21147);
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


var G__21148 = seq__21144;
var G__21149 = chunk__21145;
var G__21150 = count__21146;
var G__21151 = (i__21147 + (1));
seq__21144 = G__21148;
chunk__21145 = G__21149;
count__21146 = G__21150;
i__21147 = G__21151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21144);
if(temp__5804__auto__){
var seq__21144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21144__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21144__$1);
var G__21152 = cljs.core.chunk_rest(seq__21144__$1);
var G__21153 = c__4556__auto__;
var G__21154 = cljs.core.count(c__4556__auto__);
var G__21155 = (0);
seq__21144 = G__21152;
chunk__21145 = G__21153;
count__21146 = G__21154;
i__21147 = G__21155;
continue;
} else {
var caller = cljs.core.first(seq__21144__$1);
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


var G__21156 = cljs.core.next(seq__21144__$1);
var G__21157 = null;
var G__21158 = (0);
var G__21159 = (0);
seq__21144 = G__21156;
chunk__21145 = G__21157;
count__21146 = G__21158;
i__21147 = G__21159;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__21142);
}}
}));
}
});
