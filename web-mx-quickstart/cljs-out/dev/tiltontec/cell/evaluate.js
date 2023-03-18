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
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.integrity');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_(rc))){
return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$ephemeral_DASH_reset,rc,(function (opcode,defer_info){
var temp__5804__auto___22350 = cljs.core.cst$kw$me.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc));
if(cljs.core.truth_(temp__5804__auto___22350)){
var me_22351 = temp__5804__auto___22350;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(me_22351,cljs.core.assoc,cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rc)),null);
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

var G__22352 = "evic> unbound prop %s of model %s";
var G__22353 = tiltontec.cell.base.c_prop(c);
var G__22354 = tiltontec.cell.base.c_model(c);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__22352,G__22353,G__22354) : tiltontec.util.core.err.call(null,G__22352,G__22353,G__22354));
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
var G__22355 = cljs.core.str;
var G__22356 = "evic> model %s of cell %s is dead";
var G__22357 = tiltontec.cell.base.c_model(c);
var G__22358 = c;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__22355,G__22356,G__22357,G__22358) : tiltontec.util.core.err.call(null,G__22355,G__22356,G__22357,G__22358));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_(c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__22375 = cljs.core.seq(tiltontec.cell.base.c_useds(c));
var vec__22376 = G__22375;
var seq__22377 = cljs.core.seq(vec__22376);
var first__22378 = cljs.core.first(seq__22377);
var seq__22377__$1 = cljs.core.next(seq__22377);
var used = first__22378;
var urest = seq__22377__$1;
var G__22375__$1 = G__22375;
while(true){
var vec__22379 = G__22375__$1;
var seq__22380 = cljs.core.seq(vec__22379);
var first__22381 = cljs.core.first(seq__22380);
var seq__22380__$1 = cljs.core.next(seq__22380);
var used__$1 = first__22381;
var urest__$1 = seq__22380__$1;
if(cljs.core.truth_(used__$1)){
var G__22382_22388 = used__$1;
var G__22383_22389 = cljs.core.cst$kw$nested;
var G__22384_22390 = c;
(tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.ensure_value_is_current.cljs$core$IFn$_invoke$arity$3(G__22382_22388,G__22383_22389,G__22384_22390) : tiltontec.cell.evaluate.ensure_value_is_current.call(null,G__22382_22388,G__22383_22389,G__22384_22390));

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
var G__22391 = urest__$1;
G__22375__$1 = G__22391;
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
var G__22385_22392 = c;
var G__22386_22393 = cljs.core.cst$kw$evic;
var G__22387_22394 = ensurer;
(tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.calculate_and_set.cljs$core$IFn$_invoke$arity$3(G__22385_22392,G__22386_22393,G__22387_22394) : tiltontec.cell.evaluate.calculate_and_set.call(null,G__22385_22392,G__22386_22393,G__22387_22394));
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
var result__16405__auto__ = tiltontec.cell.integrity.call_with_integrity(null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value(c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
["asker=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop(tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__16405__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current(c,cljs.core.cst$kw$c_DASH_read,null);
return ev;
})();
if((((tiltontec.cell.base.c_model(c) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_state(c),cljs.core.cst$kw$nascent)) && (tiltontec.cell.base.c_pulse_unwatched_QMARK_(c)))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$cell$base_SLASH_state,c], null),cljs.core.cst$kw$awake);

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$3(c,prior_value,cljs.core.cst$kw$cget);

tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
}

return result__16405__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record(c);
} else {
}

return result__16405__auto__;
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
var vec__22395 = (tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.calculate_and_link.cljs$core$IFn$_invoke$arity$1(c) : tiltontec.cell.evaluate.calculate_and_link.call(null,c));
var raw_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395,(0),null);
var propagation_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395,(1),null);
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
var me_22419 = tiltontec.cell.base.c_model(c);
var prop_22420 = tiltontec.cell.base.c_prop_name(c);
var G__22398_22421 = cljs.core.str;
var G__22399_22422 = "MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '";
var G__22400_22423 = prop_22420;
var G__22401_22424 = "' of model '";
var G__22402_22425 = tiltontec.cell.base.c_md_name(c);
var G__22403_22426 = "'.\n";
var G__22404_22427 = "...> formula for ";
var G__22405_22428 = prop_22420;
var G__22406_22429 = ":\n";
var G__22407_22430 = tiltontec.cell.base.c_code$(c);
var G__22408_22431 = "\n...> full cell: \n";
var G__22409_22432 = cljs.core.deref(c);
var G__22410_22433 = "\n\n...> callstack, latest first: \n";
var G__22411_22434 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name(cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name(cd)),"\n....>    code:",tiltontec.cell.base.c_code$(cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_));
(tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$14(G__22398_22421,G__22399_22422,G__22400_22423,G__22401_22424,G__22402_22425,G__22403_22426,G__22404_22427,G__22405_22428,G__22406_22429,G__22407_22430,G__22408_22431,G__22409_22432,G__22410_22433,G__22411_22434) : tiltontec.util.core.err.call(null,G__22398_22421,G__22399_22422,G__22400_22423,G__22401_22424,G__22402_22425,G__22403_22426,G__22404_22427,G__22405_22428,G__22406_22429,G__22407_22430,G__22408_22431,G__22409_22432,G__22410_22433,G__22411_22434));
} else {
}

var _STAR_call_stack_STAR__orig_val__22412 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__22413 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__22414 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__22415 = cljs.core.cons(c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__22416 = c;
var _STAR_defer_changes_STAR__temp_val__22417 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__22415);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__22416);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__22417);

try{tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$pre_DASH_rule_DASH_clear);

if(cljs.core.truth_(tiltontec.cell.base.c_rule(c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prop.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(cljs.core.deref(c)))].join(''),"\n","(c-rule c)"].join('')));
}

var raw_value = (function (){var fexpr__22418 = tiltontec.cell.base.c_rule(c);
return (fexpr__22418.cljs$core$IFn$_invoke$arity$1 ? fexpr__22418.cljs$core$IFn$_invoke$arity$1(c) : fexpr__22418.call(null,c));
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__22414);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__22413);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__22412);
}});
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (c){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$c_DASH_awaken_DASH_def_BANG__BANG__BANG_], 0));

if(cljs.core.coll_QMARK_(c)){
var seq__22435 = cljs.core.seq(c);
var chunk__22436 = null;
var count__22437 = (0);
var i__22438 = (0);
while(true){
if((i__22438 < count__22437)){
var ce = chunk__22436.cljs$core$IIndexed$_nth$arity$2(null,i__22438);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__22439 = seq__22435;
var G__22440 = chunk__22436;
var G__22441 = count__22437;
var G__22442 = (i__22438 + (1));
seq__22435 = G__22439;
chunk__22436 = G__22440;
count__22437 = G__22441;
i__22438 = G__22442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22435);
if(temp__5804__auto__){
var seq__22435__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22435__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22435__$1);
var G__22443 = cljs.core.chunk_rest(seq__22435__$1);
var G__22444 = c__4556__auto__;
var G__22445 = cljs.core.count(c__4556__auto__);
var G__22446 = (0);
seq__22435 = G__22443;
chunk__22436 = G__22444;
count__22437 = G__22445;
i__22438 = G__22446;
continue;
} else {
var ce = cljs.core.first(seq__22435__$1);
(tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.c_awaken.cljs$core$IFn$_invoke$arity$1(ce) : tiltontec.cell.poly.c_awaken.call(null,ce));


var G__22447 = cljs.core.next(seq__22435__$1);
var G__22448 = null;
var G__22449 = (0);
var G__22450 = (0);
seq__22435 = G__22447;
chunk__22436 = G__22448;
count__22437 = G__22449;
i__22438 = G__22450;
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
var temp__5804__auto___22451 = tiltontec.cell.base.c_me(c);
if(cljs.core.truth_(temp__5804__auto___22451)){
var me_22452 = temp__5804__auto___22451;
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop(c),me_22452], null),tiltontec.cell.base.c_value(c));
} else {
}

tiltontec.cell.watch.c_watch.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$cell_DASH_awaken);

return tiltontec.cell.evaluate.ephemeral_reset(c);
} else {
return null;
}
}));
tiltontec.cell.poly.c_awaken.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tiltontec$cell$base_SLASH_c_DASH_formula,(function (c){
var _STAR_depender_STAR__orig_val__22453 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__22454 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__22454);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_(c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set(c,cljs.core.cst$kw$fn_DASH_c_DASH_awaken,null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__22453);
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

var result__16405__auto__ = new_value;
var _STAR_depender_STAR__orig_val__22455_22457 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__22456_22458 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__22456_22458);

try{var prior_value_22459 = tiltontec.cell.base.c_value(c);
var prior_state_22460 = tiltontec.cell.base.c_value_state(c);
var callers_22461 = tiltontec.cell.base.c_callers(c);
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

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_(c))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(propagation_code,false))?(tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_22459) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_22459)):false):false))){
tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pulse_DASH_last_DASH_changed,c], null),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___22462 = ((tiltontec.cell.base.c_formula_QMARK_(c))?tiltontec.cell.base.c_optimize(c):false);
if(cljs.core.truth_(temp__5804__auto___22462)){
var optimize_22463 = temp__5804__auto___22462;
(tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2(c,prior_value_22459) : tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_22459));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_22460]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$uncurrent], null)));
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
return (tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.c_value_changed_QMARK_.cljs$core$IFn$_invoke$arity$3(c,new_value,prior_value_22459) : tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_22459));
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

(tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3 ? tiltontec.cell.evaluate.propagate.cljs$core$IFn$_invoke$arity$3(c,prior_value_22459,callers_22461) : tiltontec.cell.evaluate.propagate.call(null,c,prior_value_22459,callers_22461));
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__22455_22457);
}
return result__16405__auto__;
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

var temp__5804__auto___22468 = tiltontec.cell.base.c_model(c);
if(cljs.core.truth_(temp__5804__auto___22468)){
var me_22469 = temp__5804__auto___22468;
tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me_22469], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me_22469)),tiltontec.cell.base.c_prop(c),null));

tiltontec.cell.evaluate.md_cell_flush(c);
} else {
}

var seq__22464_22470 = cljs.core.seq(cljs.core.seq(tiltontec.cell.base.c_callers(c)));
var chunk__22465_22471 = null;
var count__22466_22472 = (0);
var i__22467_22473 = (0);
while(true){
if((i__22467_22473 < count__22466_22472)){
var caller_22474 = chunk__22465_22471.cljs$core$IIndexed$_nth$arity$2(null,i__22467_22473);
tiltontec.cell.evaluate.ensure_value_is_current(caller_22474,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_22474)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_22474);
}


var G__22475 = seq__22464_22470;
var G__22476 = chunk__22465_22471;
var G__22477 = count__22466_22472;
var G__22478 = (i__22467_22473 + (1));
seq__22464_22470 = G__22475;
chunk__22465_22471 = G__22476;
count__22466_22472 = G__22477;
i__22467_22473 = G__22478;
continue;
} else {
var temp__5804__auto___22479 = cljs.core.seq(seq__22464_22470);
if(temp__5804__auto___22479){
var seq__22464_22480__$1 = temp__5804__auto___22479;
if(cljs.core.chunked_seq_QMARK_(seq__22464_22480__$1)){
var c__4556__auto___22481 = cljs.core.chunk_first(seq__22464_22480__$1);
var G__22482 = cljs.core.chunk_rest(seq__22464_22480__$1);
var G__22483 = c__4556__auto___22481;
var G__22484 = cljs.core.count(c__4556__auto___22481);
var G__22485 = (0);
seq__22464_22470 = G__22482;
chunk__22465_22471 = G__22483;
count__22466_22472 = G__22484;
i__22467_22473 = G__22485;
continue;
} else {
var caller_22486 = cljs.core.first(seq__22464_22480__$1);
tiltontec.cell.evaluate.ensure_value_is_current(caller_22486,cljs.core.cst$kw$opti_DASH_used,c);

if(tiltontec.cell.base.c_optimized_away_QMARK_(caller_22486)){
} else {
tiltontec.cell.base.dependency_drop(c,caller_22486);
}


var G__22487 = cljs.core.next(seq__22464_22480__$1);
var G__22488 = null;
var G__22489 = (0);
var G__22490 = (0);
seq__22464_22470 = G__22487;
chunk__22465_22471 = G__22488;
count__22466_22472 = G__22489;
i__22467_22473 = G__22490;
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

var temp__5804__auto___22491 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(temp__5804__auto___22491)){
var onq_22492 = temp__5804__auto___22491;
(onq_22492.cljs$core$IFn$_invoke$arity$1 ? onq_22492.cljs$core$IFn$_invoke$arity$1(c) : onq_22492.call(null,c));
} else {
}

tiltontec.cell.base.unlink_from_callers(c);

tiltontec.cell.base.unlink_from_used(c,cljs.core.cst$kw$quiesce);

return cljs.core.reset_BANG_(c,cljs.core.cst$kw$dead_DASH_c);
});
tiltontec.cell.poly.md_quiesce_self.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (me){
var temp__5804__auto___22497 = cljs.core.cst$kw$on_DASH_quiesce.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me));
if(cljs.core.truth_(temp__5804__auto___22497)){
var onq_22498 = temp__5804__auto___22497;
(onq_22498.cljs$core$IFn$_invoke$arity$1 ? onq_22498.cljs$core$IFn$_invoke$arity$1(me) : onq_22498.call(null,me));
} else {
}

var seq__22493_22499 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))));
var chunk__22494_22500 = null;
var count__22495_22501 = (0);
var i__22496_22502 = (0);
while(true){
if((i__22496_22502 < count__22495_22501)){
var c_22503 = chunk__22494_22500.cljs$core$IIndexed$_nth$arity$2(null,i__22496_22502);
if(cljs.core.truth_(c_22503)){
tiltontec.cell.evaluate.c_quiesce(c_22503);
} else {
}


var G__22504 = seq__22493_22499;
var G__22505 = chunk__22494_22500;
var G__22506 = count__22495_22501;
var G__22507 = (i__22496_22502 + (1));
seq__22493_22499 = G__22504;
chunk__22494_22500 = G__22505;
count__22495_22501 = G__22506;
i__22496_22502 = G__22507;
continue;
} else {
var temp__5804__auto___22508 = cljs.core.seq(seq__22493_22499);
if(temp__5804__auto___22508){
var seq__22493_22509__$1 = temp__5804__auto___22508;
if(cljs.core.chunked_seq_QMARK_(seq__22493_22509__$1)){
var c__4556__auto___22510 = cljs.core.chunk_first(seq__22493_22509__$1);
var G__22511 = cljs.core.chunk_rest(seq__22493_22509__$1);
var G__22512 = c__4556__auto___22510;
var G__22513 = cljs.core.count(c__4556__auto___22510);
var G__22514 = (0);
seq__22493_22499 = G__22511;
chunk__22494_22500 = G__22512;
count__22495_22501 = G__22513;
i__22496_22502 = G__22514;
continue;
} else {
var c_22515 = cljs.core.first(seq__22493_22509__$1);
if(cljs.core.truth_(c_22515)){
tiltontec.cell.evaluate.c_quiesce(c_22515);
} else {
}


var G__22516 = cljs.core.next(seq__22493_22509__$1);
var G__22517 = null;
var G__22518 = (0);
var G__22519 = (0);
seq__22493_22499 = G__22516;
chunk__22494_22500 = G__22517;
count__22495_22501 = G__22518;
i__22496_22502 = G__22519;
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
return (tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce_self.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.cell.poly.md_quiesce_self.call(null,me));
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not((function (){var fexpr__22522 = (function (){var or__4126__auto__ = cljs.core.cst$kw$unchanged_DASH_if.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__22523 = tiltontec.cell.base.c_model(c);
var G__22524 = tiltontec.cell.base.c_prop(c);
return (tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2 ? tiltontec.cell.poly.unchanged_test.cljs$core$IFn$_invoke$arity$2(G__22523,G__22524) : tiltontec.cell.poly.unchanged_test.call(null,G__22523,G__22524));
}
})();
return (fexpr__22522.cljs$core$IFn$_invoke$arity$2 ? fexpr__22522.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : fexpr__22522.call(null,new_value,old_value));
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
var _STAR_depender_STAR__orig_val__22525 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__22526 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__22527 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__22528 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__22529 = null;
var _STAR_call_stack_STAR__temp_val__22530 = null;
var _STAR_c_prop_depth_STAR__temp_val__22531 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__22532 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__22529);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__22530);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__22531);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__22532);

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
var temp__5804__auto___22537 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tiltontec.util.core.set_ify(prior_value),tiltontec.util.core.set_ify(tiltontec.cell.base.c_value(c)));
if(cljs.core.truth_(temp__5804__auto___22537)){
var ownees_22538 = temp__5804__auto___22537;
var seq__22533_22539 = cljs.core.seq(ownees_22538);
var chunk__22534_22540 = null;
var count__22535_22541 = (0);
var i__22536_22542 = (0);
while(true){
if((i__22536_22542 < count__22535_22541)){
var ownee_22543 = chunk__22534_22540.cljs$core$IIndexed$_nth$arity$2(null,i__22536_22542);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_22543) : tiltontec.cell.poly.md_quiesce.call(null,ownee_22543));


var G__22544 = seq__22533_22539;
var G__22545 = chunk__22534_22540;
var G__22546 = count__22535_22541;
var G__22547 = (i__22536_22542 + (1));
seq__22533_22539 = G__22544;
chunk__22534_22540 = G__22545;
count__22535_22541 = G__22546;
i__22536_22542 = G__22547;
continue;
} else {
var temp__5804__auto___22548__$1 = cljs.core.seq(seq__22533_22539);
if(temp__5804__auto___22548__$1){
var seq__22533_22549__$1 = temp__5804__auto___22548__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22533_22549__$1)){
var c__4556__auto___22550 = cljs.core.chunk_first(seq__22533_22549__$1);
var G__22551 = cljs.core.chunk_rest(seq__22533_22549__$1);
var G__22552 = c__4556__auto___22550;
var G__22553 = cljs.core.count(c__4556__auto___22550);
var G__22554 = (0);
seq__22533_22539 = G__22551;
chunk__22534_22540 = G__22552;
count__22535_22541 = G__22553;
i__22536_22542 = G__22554;
continue;
} else {
var ownee_22555 = cljs.core.first(seq__22533_22549__$1);
(tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.poly.md_quiesce.cljs$core$IFn$_invoke$arity$1(ownee_22555) : tiltontec.cell.poly.md_quiesce.call(null,ownee_22555));


var G__22556 = cljs.core.next(seq__22533_22549__$1);
var G__22557 = null;
var G__22558 = (0);
var G__22559 = (0);
seq__22533_22539 = G__22556;
chunk__22534_22540 = G__22557;
count__22535_22541 = G__22558;
i__22536_22542 = G__22559;
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
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__22528);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__22527);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__22526);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__22525);
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
var _STAR_causation_STAR__orig_val__22560 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__22561 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__22561);

try{var seq__22562 = cljs.core.seq(cljs.core.seq(callers));
var chunk__22563 = null;
var count__22564 = (0);
var i__22565 = (0);
while(true){
if((i__22565 < count__22564)){
var caller = chunk__22563.cljs$core$IIndexed$_nth$arity$2(null,i__22565);
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


var G__22566 = seq__22562;
var G__22567 = chunk__22563;
var G__22568 = count__22564;
var G__22569 = (i__22565 + (1));
seq__22562 = G__22566;
chunk__22563 = G__22567;
count__22564 = G__22568;
i__22565 = G__22569;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22562);
if(temp__5804__auto__){
var seq__22562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22562__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__22562__$1);
var G__22570 = cljs.core.chunk_rest(seq__22562__$1);
var G__22571 = c__4556__auto__;
var G__22572 = cljs.core.count(c__4556__auto__);
var G__22573 = (0);
seq__22562 = G__22570;
chunk__22563 = G__22571;
count__22564 = G__22572;
i__22565 = G__22573;
continue;
} else {
var caller = cljs.core.first(seq__22562__$1);
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


var G__22574 = cljs.core.next(seq__22562__$1);
var G__22575 = null;
var G__22576 = (0);
var G__22577 = (0);
seq__22562 = G__22574;
chunk__22563 = G__22575;
count__22564 = G__22576;
i__22565 = G__22577;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__22560);
}}
}));
}
});
