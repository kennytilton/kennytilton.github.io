// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
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
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_.call(null,rc))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__5804__auto___19622 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__5804__auto___19622)){
var me_19623 = temp__5804__auto___19622;
cljs.core.swap_BANG_.call(null,me_19623,cljs.core.assoc,new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
} else {
}

return cljs.core.swap_BANG_.call(null,rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
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
if(tiltontec.cell.base.c_unbound_QMARK_.call(null,c)){
tiltontec.util.base.call_trc.call(null,":unbound!!!",tiltontec.cell.base.c_prop);

return tiltontec.util.core.err.call(null,"evic> unbound prop %s of model %s",tiltontec.cell.base.c_prop.call(null,c),tiltontec.cell.base.c_model.call(null,c));
} else {
if(tiltontec.cell.base.c_valid_QMARK_.call(null,c)){
return tiltontec.cell.base.c_value.call(null,c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__4115__auto__)){
return ((tiltontec.cell.base.c_valid_QMARK_.call(null,c)) && ((!(((tiltontec.cell.base.c_formula_QMARK_.call(null,c)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null)))))));
} else {
return and__4115__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__5804__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__5804__auto__)){
var md = temp__5804__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (!(tiltontec.cell.base.c_valid_QMARK_.call(null,c)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__19637 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__19638 = G__19637;
var seq__19639 = cljs.core.seq.call(null,vec__19638);
var first__19640 = cljs.core.first.call(null,seq__19639);
var seq__19639__$1 = cljs.core.next.call(null,seq__19639);
var used = first__19640;
var urest = seq__19639__$1;
var G__19637__$1 = G__19637;
while(true){
var vec__19641 = G__19637__$1;
var seq__19642 = cljs.core.seq.call(null,vec__19641);
var first__19643 = cljs.core.first.call(null,seq__19642);
var seq__19642__$1 = cljs.core.next.call(null,seq__19642);
var used__$1 = first__19643;
var urest__$1 = seq__19642__$1;
if(cljs.core.truth_(used__$1)){
tiltontec.cell.evaluate.ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__4126__auto____$1 = (function (){var temp__5804__auto__ = tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var last_changed = temp__5804__auto__;
return (last_changed > tiltontec.cell.base.c_pulse.call(null,c));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__19644 = urest__$1;
G__19637__$1 = G__19644;
continue;
}
} else {
return null;
}
break;
}
}
})())){
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.call(null,c);
var calc_val = (cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))?null:(function (){
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"evic-sees-uncurrent","evic-sees-uncurrent",1502693079));

return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer);
})()
);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"evic-uncurrent-returns","evic-uncurrent-returns",-476303952),tiltontec.cell.base.c_value.call(null,c),new cljs.core.Keyword(null,"not-calc","not-calc",1774380976),calc_val,new cljs.core.Keyword(null,"ci","ci",409276812),tiltontec.cell.base.cinfo.call(null,c));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"evic-uncurrent-cee!!!","evic-uncurrent-cee!!!",1189138015),cljs.core.deref.call(null,c),tiltontec.cell.evaluate.cget_value_as_is.call(null,c));
} else {
}

return tiltontec.cell.evaluate.cget_value_as_is.call(null,c);
} else {
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"just-pulse-valid-uninfluenced","just-pulse-valid-uninfluenced",69525959));

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value.call(null,c);

}
}
}
}
}
});
tiltontec.cell.evaluate.cget_value_as_is = (function tiltontec$cell$evaluate$cget_value_as_is(c){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
if(((cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,c),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396))))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else {
return cljs.core.deref.call(null,c);
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
if((!(tiltontec.cell.base.c_ref_QMARK_.call(null,c)))){
return c;
} else {
if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)){
return tiltontec.cell.evaluate.cget_value_as_is.call(null,c);
} else {
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.call(null,c,new cljs.core.Keyword(null,"cget","cget",1794378742));
var _ = (cljs.core.truth_(dbg_QMARK_)?cljs.core.prn.call(null,new cljs.core.Keyword(null,"cget-sees-integ","cget-sees-integ",828726876),tiltontec.cell.base._STAR_within_integrity_STAR_):null);
var ci = tiltontec.cell.base.cinfo.call(null,c);
var pg1 = (function (){var result__9539__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error(["Assert failed: ","c lost c-refness","\n","(c-ref? c)"].join('')));
}

var prior_value = tiltontec.cell.base.c_value.call(null,c);
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"cget-core","cget-core",-407265636),tiltontec.util.base.mx_type.call(null,tiltontec.cell.base.c_model.call(null,c)));

var result__9539__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"cget-post-evic-val","cget-post-evic-val",-1740567781),ev);
} else {
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"evic-flushed-returns","evic-flushed-returns",-212202680),ev,new cljs.core.Keyword(null,"ci-was","ci-was",1333515462),ci);
} else {
}
}

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"cget-ev!!!!!!!!!!!","cget-ev!!!!!!!!!!!",1113606375),ev,new cljs.core.Keyword(null,"ci-was","ci-was",1333515462),ci);
} else {
}

return ev;
})();
if((((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && (tiltontec.cell.base.c_pulse_unwatched_QMARK_.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.watch.c_watch.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__9539__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.base.dependency_record.call(null,c);
} else {
}

return result__9539__auto__;
})();
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"cget-returns!!!!!!","cget-returns!!!!!!",-1744371711),pg1,new cljs.core.Keyword(null,"ci-was","ci-was",1333515462),ci);
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
var vec__19645 = tiltontec.cell.evaluate.calculate_and_link.call(null,c);
var raw_value = cljs.core.nth.call(null,vec__19645,(0),null);
var propagation_code = cljs.core.nth.call(null,vec__19645,(1),null);
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"post-cnlink-sees!!!!","post-cnlink-sees!!!!",1345047804),dbgid,new cljs.core.Keyword(null,"opti","opti",-399274040),tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c),new cljs.core.Keyword(null,"prop","prop",-515168332),tiltontec.cell.base.c_prop.call(null,c),raw_value,propagation_code);

if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error(["Assert failed: ","calc-n-set","\n","(map? (deref c))"].join('')));
}

tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"not-optimized!!!!!!!!!!!","not-optimized!!!!!!!!!!!",-967947088));

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code);
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
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base._STAR_call_stack_STAR_))){
var me_19655 = tiltontec.cell.base.c_model.call(null,c);
var prop_19656 = tiltontec.cell.base.c_prop_name.call(null,c);
tiltontec.util.core.err.call(null,cljs.core.str,"MXAPI_COMPUTE_CYCLE_DETECTED> cyclic dependency detected while computing prop '",prop_19656,"' of model '",tiltontec.cell.base.c_md_name.call(null,c),"'.\n","...> formula for ",prop_19656,":\n",tiltontec.cell.base.c_code$.call(null,c),"\n...> full cell: \n",cljs.core.deref.call(null,c),"\n\n...> callstack, latest first: \n",clojure.string.join.call(null,"\n",cljs.core.mapv.call(null,(function (cd){
return ["....> md-name:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name.call(null,cd))," prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name.call(null,cd)),"\n....>    code:",tiltontec.cell.base.c_code$.call(null,cd)].join('');
}),tiltontec.cell.base._STAR_call_stack_STAR_)));
} else {
}

var _STAR_call_stack_STAR__orig_val__19648 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__19649 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__19650 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_call_stack_STAR__temp_val__19651 = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);
var _STAR_depender_STAR__temp_val__19652 = c;
var _STAR_defer_changes_STAR__temp_val__19653 = true;
(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__19651);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__19652);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__19653);

try{tiltontec.cell.base.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error(["Assert failed: ",["No rule in %s type %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join(''),"\n","(c-rule c)"].join('')));
}

try{var raw_value = tiltontec.cell.base.c_rule.call(null,c).call(null,c);
var prop_code_QMARK_ = (function (){var and__4115__auto__ = tiltontec.cell.base.c_synaptic_QMARK_.call(null,c);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.vector_QMARK_.call(null,raw_value)) && (cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905))));
} else {
return and__4115__auto__;
}
})();
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"cnlink-raw-val","cnlink-raw-val",-2058141867),raw_value,prop_code_QMARK_);

if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}catch (e19654){if((e19654 instanceof Error)){
var e = e19654;
cljs.core.prn.call(null,new cljs.core.Keyword(null,"cnlink-caught-exception","cnlink-caught-exception",-1692943685),e);

cljs.core.prn.call(null,new cljs.core.Keyword(null,"cnlink-fail-c","cnlink-fail-c",-1324382858),tiltontec.cell.base.cinfo.call(null,c));

throw e;
} else {
throw e19654;

}
}}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__19650);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__19649);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__19648);
}});
cljs.core._add_method.call(null,tiltontec.cell.poly.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"c-awaken-def!!!","c-awaken-def!!!",-245288408));

if(cljs.core.coll_QMARK_.call(null,c)){
var seq__19657 = cljs.core.seq.call(null,c);
var chunk__19658 = null;
var count__19659 = (0);
var i__19660 = (0);
while(true){
if((i__19660 < count__19659)){
var ce = cljs.core._nth.call(null,chunk__19658,i__19660);
tiltontec.cell.poly.c_awaken.call(null,ce);


var G__19661 = seq__19657;
var G__19662 = chunk__19658;
var G__19663 = count__19659;
var G__19664 = (i__19660 + (1));
seq__19657 = G__19661;
chunk__19658 = G__19662;
count__19659 = G__19663;
i__19660 = G__19664;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19657);
if(temp__5804__auto__){
var seq__19657__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19657__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19657__$1);
var G__19665 = cljs.core.chunk_rest.call(null,seq__19657__$1);
var G__19666 = c__4556__auto__;
var G__19667 = cljs.core.count.call(null,c__4556__auto__);
var G__19668 = (0);
seq__19657 = G__19665;
chunk__19658 = G__19666;
count__19659 = G__19667;
i__19660 = G__19668;
continue;
} else {
var ce = cljs.core.first.call(null,seq__19657__$1);
tiltontec.cell.poly.c_awaken.call(null,ce);


var G__19669 = cljs.core.next.call(null,seq__19657__$1);
var G__19670 = null;
var G__19671 = (0);
var G__19672 = (0);
seq__19657 = G__19669;
chunk__19658 = G__19670;
count__19659 = G__19671;
i__19660 = G__19672;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),((tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),tiltontec.util.base.mx_type.call(null,c),cljs.core.meta.call(null,c)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,tiltontec.util.base.mx_type.call(null,c),cljs.core.meta.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.poly.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if(tiltontec.cell.base.c_pulse_unwatched_QMARK_.call(null,c)){
var temp__5804__auto___19673 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__5804__auto___19673)){
var me_19674 = temp__5804__auto___19673;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop.call(null,c),me_19674], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.watch.c_watch.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.poly.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR__orig_val__19675 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__19676 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__19676);

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__19675);
}}));



tiltontec.cell.evaluate.md_prop_value_store = (function tiltontec$cell$evaluate$md_prop_value_store(me,prop,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(tiltontec.util.core.any_ref_QMARK_.call(null,me)){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),value);
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
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"cva-entry","cva-entry",1951464726),new_value,propagation_code);

var dbg_QMARK__19679 = tiltontec.cell.base.c_debug_QMARK_.call(null,c);
var ci_19680 = tiltontec.cell.base.cinfo.call(null,c);
var result__9539__auto___19681 = new_value;
var _STAR_depender_STAR__orig_val__19677_19682 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__19678_19683 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__19678_19683);

try{var prior_value_19684 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_19685 = tiltontec.cell.base.c_value_state.call(null,c);
var callers_19686 = tiltontec.cell.base.c_callers.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"new-vlue-installed","new-vlue-installed",794148950),tiltontec.cell.base.c_prop.call(null,c),new_value,tiltontec.cell.base.c_value.call(null,c),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)));

if(cljs.core.truth_((function (){var and__4115__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__4115__auto__;
}
})())){
tiltontec.cell.evaluate.md_prop_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_prop.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"propv-assume","propv-assume",528209981));

if(cljs.core.truth_((((!(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))))?((cljs.core.not_EQ_.call(null,propagation_code,false))?tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_19684):false):false))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_));
} else {
}

var temp__5804__auto___19687 = ((tiltontec.cell.base.c_formula_QMARK_.call(null,c))?tiltontec.cell.base.c_optimize.call(null,c):false);
if(cljs.core.truth_(temp__5804__auto___19687)){
var optimize_19688 = temp__5804__auto___19687;
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_19684);

if(cljs.core.truth_(dbg_QMARK__19679)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"post-opti-c!!!!!!!!!-at-ceee","post-opti-c!!!!!!!!!-at-ceee",-1861991943),cljs.core.deref.call(null,c),new cljs.core.Keyword(null,"cref","cref",-1400749712),tiltontec.cell.base.c_ref_QMARK_.call(null,c),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,c),new cljs.core.Keyword(null,"metamxty","metamxty",-348921142),new cljs.core.Keyword(null,"mx-type","mx-type",2136489290).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c)),new cljs.core.Keyword(null,"typec","typec",670312541),cljs.core.type.call(null,c),new cljs.core.Keyword(null,"mxty","mxty",1950554831),tiltontec.util.base.mx_type.call(null,c),new cljs.core.Keyword(null,"ci","ci",409276812),ci_19680);

cljs.core.prn.call(null,new cljs.core.Keyword(null,"post-opti-c!!!!!!!!!","post-opti-c!!!!!!!!!",-779239802),ci_19680);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_19685]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.call(null,propagation_code,true);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if(cljs.core._EQ_.call(null,propagation_code,false)){
return null;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_19684);
}
}
}
})())){
tiltontec.cell.base.cdbg.call(null,dbg_QMARK__19679,new cljs.core.Keyword(null,"sth-happened","sth-happened",-232358755),propagation_code,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));

if(((cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970))) || (tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)))){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.base.cdbg.call(null,dbg_QMARK__19679,new cljs.core.Keyword(null,"cva-calls-propagate","cva-calls-propagate",-2009542015),cljs.core.count.call(null,callers_19686),prior_value_19684);

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_19684,callers_19686);
}
} else {
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__19677_19682);
}

return new_value;
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__5804__auto__)){
var me = temp__5804__auto__;
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"opti","opti",-399274040),new cljs.core.Keyword(null,"md-cell-flush","md-cell-flush",-1378613750),tiltontec.cell.base.cinfo.call(null,c),new cljs.core.Keyword(null,"mi","mi",-387784306),tiltontec.cell.base.minfo.call(null,me));

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop.call(null,c),new cljs.core.Keyword(null,"val","val",128701612),tiltontec.cell.base.c_value.call(null,c),new cljs.core.Keyword(null,"pulse","pulse",-244494476),tiltontec.cell.base.c_pulse_watched.call(null,c)], null)));
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
var dbg_QMARK_ = tiltontec.cell.base.c_debug_QMARK_.call(null,c);
if(cljs.core.truth_(((tiltontec.cell.base.c_formula_QMARK_.call(null,c))?((((cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"freeze","freeze",2043466309),tiltontec.cell.base.c_optimize.call(null,c))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_optimize.call(null,c))) && ((!((tiltontec.cell.base.c_value.call(null,c) == null))))))))?(function (){var and__4115__auto__ = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)))) && (tiltontec.cell.base.c_valid_QMARK_.call(null,c)) && (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c))));
} else {
return and__4115__auto__;
}
})():false):false))){
tiltontec.cell.base.cdbg.call(null,c,new cljs.core.Keyword(null,"optimizing-away!!","optimizing-away!!",1566478523));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"freeze","freeze",2043466309),tiltontec.cell.base.c_optimize.call(null,c))){
tiltontec.cell.base.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
} else {
}

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.watch.c_watch.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__5804__auto___19693 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__5804__auto___19693)){
var me_19694 = temp__5804__auto___19693;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_19694], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_19694)),tiltontec.cell.base.c_prop.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"post-flush-c!!!!!!!!!","post-flush-c!!!!!!!!!",1396291223),tiltontec.cell.base.cinfo.call(null,c));
} else {
}
} else {
}

var seq__19689_19695 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__19690_19696 = null;
var count__19691_19697 = (0);
var i__19692_19698 = (0);
while(true){
if((i__19692_19698 < count__19691_19697)){
var caller_19699 = cljs.core._nth.call(null,chunk__19690_19696,i__19692_19698);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"optimized-c-runs-caller","optimized-c-runs-caller",1281411614),tiltontec.cell.base.cinfo.call(null,c),new cljs.core.Keyword(null,"cinfo","cinfo",-259107143),caller_19699);
} else {
}

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_19699,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,caller_19699)){
} else {
tiltontec.cell.base.dependency_drop.call(null,c,caller_19699);
}


var G__19700 = seq__19689_19695;
var G__19701 = chunk__19690_19696;
var G__19702 = count__19691_19697;
var G__19703 = (i__19692_19698 + (1));
seq__19689_19695 = G__19700;
chunk__19690_19696 = G__19701;
count__19691_19697 = G__19702;
i__19692_19698 = G__19703;
continue;
} else {
var temp__5804__auto___19704 = cljs.core.seq.call(null,seq__19689_19695);
if(temp__5804__auto___19704){
var seq__19689_19705__$1 = temp__5804__auto___19704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19689_19705__$1)){
var c__4556__auto___19706 = cljs.core.chunk_first.call(null,seq__19689_19705__$1);
var G__19707 = cljs.core.chunk_rest.call(null,seq__19689_19705__$1);
var G__19708 = c__4556__auto___19706;
var G__19709 = cljs.core.count.call(null,c__4556__auto___19706);
var G__19710 = (0);
seq__19689_19695 = G__19707;
chunk__19690_19696 = G__19708;
count__19691_19697 = G__19709;
i__19692_19698 = G__19710;
continue;
} else {
var caller_19711 = cljs.core.first.call(null,seq__19689_19705__$1);
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"optimized-c-runs-caller","optimized-c-runs-caller",1281411614),tiltontec.cell.base.cinfo.call(null,c),new cljs.core.Keyword(null,"cinfo","cinfo",-259107143),caller_19711);
} else {
}

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_19711,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,caller_19711)){
} else {
tiltontec.cell.base.dependency_drop.call(null,c,caller_19711);
}


var G__19712 = cljs.core.next.call(null,seq__19689_19705__$1);
var G__19713 = null;
var G__19714 = (0);
var G__19715 = (0);
seq__19689_19695 = G__19712;
chunk__19690_19696 = G__19713;
count__19691_19697 = G__19714;
i__19692_19698 = G__19715;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"resetting-cell-to-val!!!","resetting-cell-to-val!!!",-1485946679),tiltontec.cell.base.c_value.call(null,c));
} else {
}

return cljs.core.reset_BANG_.call(null,c,tiltontec.cell.base.c_value.call(null,c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__5804__auto___19716 = new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(temp__5804__auto___19716)){
var onq_19717 = temp__5804__auto___19716;
onq_19717.call(null,c);
} else {
}

tiltontec.cell.base.unlink_from_callers.call(null,c);

tiltontec.cell.base.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_.call(null,c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
cljs.core._add_method.call(null,tiltontec.cell.poly.md_quiesce_self,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"qself-fallthru","qself-fallthru",1150526183),tiltontec.cell.base.minfo.call(null,me));

var temp__5804__auto___19722 = new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me));
if(cljs.core.truth_(temp__5804__auto___19722)){
var onq_19723 = temp__5804__auto___19722;
onq_19723.call(null,me);
} else {
}

var seq__19718_19724 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__19719_19725 = null;
var count__19720_19726 = (0);
var i__19721_19727 = (0);
while(true){
if((i__19721_19727 < count__19720_19726)){
var c_19728 = cljs.core._nth.call(null,chunk__19719_19725,i__19721_19727);
if(cljs.core.truth_(c_19728)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_19728);
} else {
}


var G__19729 = seq__19718_19724;
var G__19730 = chunk__19719_19725;
var G__19731 = count__19720_19726;
var G__19732 = (i__19721_19727 + (1));
seq__19718_19724 = G__19729;
chunk__19719_19725 = G__19730;
count__19720_19726 = G__19731;
i__19721_19727 = G__19732;
continue;
} else {
var temp__5804__auto___19733 = cljs.core.seq.call(null,seq__19718_19724);
if(temp__5804__auto___19733){
var seq__19718_19734__$1 = temp__5804__auto___19733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19718_19734__$1)){
var c__4556__auto___19735 = cljs.core.chunk_first.call(null,seq__19718_19734__$1);
var G__19736 = cljs.core.chunk_rest.call(null,seq__19718_19734__$1);
var G__19737 = c__4556__auto___19735;
var G__19738 = cljs.core.count.call(null,c__4556__auto___19735);
var G__19739 = (0);
seq__19718_19724 = G__19736;
chunk__19719_19725 = G__19737;
count__19720_19726 = G__19738;
i__19721_19727 = G__19739;
continue;
} else {
var c_19740 = cljs.core.first.call(null,seq__19718_19734__$1);
if(cljs.core.truth_(c_19740)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_19740);
} else {
}


var G__19741 = cljs.core.next.call(null,seq__19718_19734__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19718_19724 = G__19741;
chunk__19719_19725 = G__19742;
count__19720_19726 = G__19743;
i__19721_19727 = G__19744;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,me,null);

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
}));
cljs.core._add_method.call(null,tiltontec.cell.poly.md_quiesce,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"def-fall-thru!","def-fall-thru!",301736197),tiltontec.cell.base.minfo.call(null,me));

return tiltontec.cell.poly.md_quiesce_self.call(null,me);
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.cell.poly.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_prop.call(null,c));
}
})().call(null,new_value,old_value));
});

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any watch; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"propagate","propagate",274376905),new cljs.core.Keyword(null,"entry","entry",505168823),tiltontec.cell.base.cinfo.call(null,c));

if(cljs.core.truth_(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_)){
if(cljs.core.truth_(tiltontec.cell.base._STAR_custom_propagator_STAR_)){
return tiltontec.cell.base._STAR_custom_propagator_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
var _STAR_depender_STAR__orig_val__19745 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR__orig_val__19746 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__19747 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR__orig_val__19748 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_depender_STAR__temp_val__19749 = null;
var _STAR_call_stack_STAR__temp_val__19750 = null;
var _STAR_c_prop_depth_STAR__temp_val__19751 = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));
var _STAR_defer_changes_STAR__temp_val__19752 = true;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__19749);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__19750);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__19751);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__19752);

try{if(cljs.core.truth_((function (){var and__4115__auto__ = prior_value;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__4115__auto____$1)){
return tiltontec.cell.base.md_prop_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_prop.call(null,c));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5804__auto___19757 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__5804__auto___19757)){
var ownees_19758 = temp__5804__auto___19757;
var seq__19753_19759 = cljs.core.seq.call(null,ownees_19758);
var chunk__19754_19760 = null;
var count__19755_19761 = (0);
var i__19756_19762 = (0);
while(true){
if((i__19756_19762 < count__19755_19761)){
var ownee_19763 = cljs.core._nth.call(null,chunk__19754_19760,i__19756_19762);
tiltontec.cell.poly.md_quiesce.call(null,ownee_19763);


var G__19764 = seq__19753_19759;
var G__19765 = chunk__19754_19760;
var G__19766 = count__19755_19761;
var G__19767 = (i__19756_19762 + (1));
seq__19753_19759 = G__19764;
chunk__19754_19760 = G__19765;
count__19755_19761 = G__19766;
i__19756_19762 = G__19767;
continue;
} else {
var temp__5804__auto___19768__$1 = cljs.core.seq.call(null,seq__19753_19759);
if(temp__5804__auto___19768__$1){
var seq__19753_19769__$1 = temp__5804__auto___19768__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19753_19769__$1)){
var c__4556__auto___19770 = cljs.core.chunk_first.call(null,seq__19753_19769__$1);
var G__19771 = cljs.core.chunk_rest.call(null,seq__19753_19769__$1);
var G__19772 = c__4556__auto___19770;
var G__19773 = cljs.core.count.call(null,c__4556__auto___19770);
var G__19774 = (0);
seq__19753_19759 = G__19771;
chunk__19754_19760 = G__19772;
count__19755_19761 = G__19773;
i__19756_19762 = G__19774;
continue;
} else {
var ownee_19775 = cljs.core.first.call(null,seq__19753_19769__$1);
tiltontec.cell.poly.md_quiesce.call(null,ownee_19775);


var G__19776 = cljs.core.next.call(null,seq__19753_19769__$1);
var G__19777 = null;
var G__19778 = (0);
var G__19779 = (0);
seq__19753_19759 = G__19776;
chunk__19754_19760 = G__19777;
count__19755_19761 = G__19778;
i__19756_19762 = G__19779;
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

tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers);

if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = tiltontec.cell.base.c_pulse_unwatched_QMARK_.call(null,c);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.watch.c_watch.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__19748);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__19747);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__19746);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__19745);
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_.call(null,callers)){
return null;
} else {
var causation = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,(function (opcode,defer_info){
if(tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c))){
return tiltontec.util.base.call_trc.call(null,"WHOAA!!!! dead by time :tell-deps dispatched; bailing",c);
} else {
var _STAR_causation_STAR__orig_val__19780 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_causation_STAR__temp_val__19781 = causation;
(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__19781);

try{var seq__19782 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__19783 = null;
var count__19784 = (0);
var i__19785 = (0);
while(true){
if((i__19785 < count__19784)){
var caller = cljs.core._nth.call(null,chunk__19783,i__19785);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)))));
}
}
}
})())){
} else {
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"propagate","propagate",274376905),new cljs.core.Keyword(null,"noti-caller","noti-caller",1776477848),tiltontec.cell.base.cinfo.call(null,caller),new cljs.core.Keyword(null,"callee","callee",-156445786),tiltontec.cell.base.cinfo.call(null,c));

tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}


var G__19786 = seq__19782;
var G__19787 = chunk__19783;
var G__19788 = count__19784;
var G__19789 = (i__19785 + (1));
seq__19782 = G__19786;
chunk__19783 = G__19787;
count__19784 = G__19788;
i__19785 = G__19789;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19782);
if(temp__5804__auto__){
var seq__19782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19782__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19782__$1);
var G__19790 = cljs.core.chunk_rest.call(null,seq__19782__$1);
var G__19791 = c__4556__auto__;
var G__19792 = cljs.core.count.call(null,c__4556__auto__);
var G__19793 = (0);
seq__19782 = G__19790;
chunk__19783 = G__19791;
count__19784 = G__19792;
i__19785 = G__19793;
continue;
} else {
var caller = cljs.core.first.call(null,seq__19782__$1);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && ((!(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)))));
}
}
}
})())){
} else {
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"propagate","propagate",274376905),new cljs.core.Keyword(null,"noti-caller","noti-caller",1776477848),tiltontec.cell.base.cinfo.call(null,caller),new cljs.core.Keyword(null,"callee","callee",-156445786),tiltontec.cell.base.cinfo.call(null,c));

tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}


var G__19794 = cljs.core.next.call(null,seq__19782__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19782 = G__19794;
chunk__19783 = G__19795;
count__19784 = G__19796;
i__19785 = G__19797;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__19780);
}}
}));
}
});

//# sourceMappingURL=evaluate.js.map
