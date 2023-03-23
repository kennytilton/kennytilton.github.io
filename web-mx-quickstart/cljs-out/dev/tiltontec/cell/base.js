// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.cell.base');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('tiltontec.util.base');
goog.require('cljs.test');
goog.require('tiltontec.util.core');
tiltontec.cell.base.pulse_initial = (function tiltontec$cell$base$pulse_initial(){
return cljs.core.atom.call(null,(0));
});
tiltontec.cell.base._STAR_pulse_STAR_ = tiltontec.cell.base.pulse_initial.call(null);
tiltontec.cell.base._STAR_custom_propagator_STAR_ = null;
tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.base._STAR_dp_log_STAR_ = false;
tiltontec.cell.base.pulse_now = (function tiltontec$cell$base$pulse_now(){
return cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_);
});
tiltontec.cell.base.cells_init = (function tiltontec$cell$base$cells_init(){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._STAR_pulse_STAR_,(0));
});
tiltontec.cell.base._STAR_causation_STAR_ = cljs.core.List.EMPTY;
tiltontec.cell.base._STAR_call_stack_STAR_ = null;
/**
 * *depender* let's us differentiate between the call stack and
 * and dependency. The problem with overloading *call-stack* with both roles
 * is that we miss cyclic reentrance when we use without-c-dependency in a
 * rule to get once behavior or just when fm-traversing to find someone
 */
tiltontec.cell.base._STAR_depender_STAR_ = null;
tiltontec.cell.base._STAR_defer_changes_STAR_ = false;
tiltontec.cell.base._PLUS_client_q_handler_PLUS_ = cljs.core.atom.call(null,null);
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.unbound !== 'undefined')){
} else {
tiltontec.cell.base.unbound = cljs.core.gensym.call(null,"unbound-cell-value");
}
tiltontec.cell.base.when_bound = (function tiltontec$cell$base$when_bound(x){
if(cljs.core.not_EQ_.call(null,x,tiltontec.cell.base.unbound)){
return x;
} else {
return null;
}
});
tiltontec.cell.base.cache_value = (function tiltontec$cell$base$cache_value(cache){
return tiltontec.cell.base.when_bound.call(null,cache);
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.cell !== 'undefined') && (typeof tiltontec.cell.base !== 'undefined') && (typeof tiltontec.cell.base.uncurrent !== 'undefined')){
} else {
tiltontec.cell.base.uncurrent = cljs.core.gensym.call(null,"uncurrent-formulaic-value");
}
tiltontec.cell.base._STAR_quiesce_STAR_ = false;
tiltontec.cell.base._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),new cljs.core.Keyword(null,"awaken","awaken",-1899628152),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),new cljs.core.Keyword(null,"change","change",-1163046502)], null);
tiltontec.cell.base.unfin_biz_build = (function tiltontec$cell$base$unfin_biz_build(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$cell$base$unfin_biz_build_$_iter__19177(s__19178){
return (new cljs.core.LazySeq(null,(function (){
var s__19178__$1 = s__19178;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19178__$1);
if(temp__5804__auto__){
var s__19178__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19178__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19178__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19180 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19179 = (0);
while(true){
if((i__19179 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__19179);
cljs.core.chunk_append.call(null,b__19180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null));

var G__19181 = (i__19179 + (1));
i__19179 = G__19181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19180),tiltontec$cell$base$unfin_biz_build_$_iter__19177.call(null,cljs.core.chunk_rest.call(null,s__19178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19180),null);
}
} else {
var i = cljs.core.first.call(null,s__19178__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$base$unfin_biz_build_$_iter__19177.call(null,cljs.core.rest.call(null,s__19178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tiltontec.cell.base._PLUS_ufb_opcodes_PLUS_);
})());
});
tiltontec.cell.base._STAR_unfinished_business_STAR_ = tiltontec.cell.base.unfin_biz_build.call(null);
tiltontec.cell.base._STAR_within_integrity_STAR_ = false;
tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (0);
tiltontec.cell.base._STAR_mx_trace_STAR_ = null;
tiltontec.cell.base._STAR_mx_minfo_STAR_ = null;
tiltontec.cell.base._PLUS_stop_PLUS_ = cljs.core.atom.call(null,false);
tiltontec.cell.base.cells_reset = (function tiltontec$cell$base$cells_reset(var_args){
var G__19183 = arguments.length;
switch (G__19183) {
case 0:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.cells_reset.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(tiltontec.cell.base.cells_reset.cljs$core$IFn$_invoke$arity$1 = (function (options){
cljs.core.reset_BANG_.call(null,tiltontec.cell.base._STAR_pulse_STAR_,(0));

return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_,new cljs.core.Keyword(null,"client-queue-handler","client-queue-handler",-817174181).cljs$core$IFn$_invoke$arity$1(options));
}));

(tiltontec.cell.base.cells_reset.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___19188 = (function (){
tiltontec.cell.base.without_c_dependency = (function tiltontec$cell$base$without_c_dependency(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19189 = arguments.length;
var i__4737__auto___19190 = (0);
while(true){
if((i__4737__auto___19190 < len__4736__auto___19189)){
args__4742__auto__.push((arguments[i__4737__auto___19190]));

var G__19191 = (i__4737__auto___19190 + (1));
i__4737__auto___19190 = G__19191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.without_c_dependency.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),body)));
}));

(tiltontec.cell.base.without_c_dependency.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.without_c_dependency.cljs$lang$applyTo = (function (seq19185){
var G__19186 = cljs.core.first.call(null,seq19185);
var seq19185__$1 = cljs.core.next.call(null,seq19185);
var G__19187 = cljs.core.first.call(null,seq19185__$1);
var seq19185__$2 = cljs.core.next.call(null,seq19185__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19186,G__19187,seq19185__$2);
}));

return null;
})()
;
(tiltontec.cell.base.without_c_dependency.cljs$lang$macro = true);

tiltontec.cell.base._PLUS_cause = (function tiltontec$cell$base$_PLUS_cause(){
return cljs.core.first.call(null,tiltontec.cell.base._STAR_causation_STAR_);
});
tiltontec.cell.base.c_stopper = (function tiltontec$cell$base$c_stopper(why){
return cljs.core.reset_BANG_.call(null,tiltontec.cell.base._PLUS_stop_PLUS_,why);
});
tiltontec.cell.base._PLUS_c_stopper_PLUS_ = cljs.core.atom.call(null,tiltontec.cell.base.c_stopper);
tiltontec.cell.base.c_stop = (function tiltontec$cell$base$c_stop(var_args){
var G__19193 = arguments.length;
switch (G__19193) {
case 0:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.base.c_stop.call(null,true);
}));

(tiltontec.cell.base.c_stop.cljs$core$IFn$_invoke$arity$1 = (function (why){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_c_stopper_PLUS_).call(null,why);
}));

(tiltontec.cell.base.c_stop.cljs$lang$maxFixedArity = 1);

tiltontec.cell.base.c_stopped = (function tiltontec$cell$base$c_stopped(){
return cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_);
});
var ret__4785__auto___19198 = (function (){
tiltontec.cell.base.un_stopped = (function tiltontec$cell$base$un_stopped(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19199 = arguments.length;
var i__4737__auto___19200 = (0);
while(true){
if((i__4737__auto___19200 < len__4736__auto___19199)){
args__4742__auto__.push((arguments[i__4737__auto___19200]));

var G__19201 = (i__4737__auto___19200 + (1));
i__4737__auto___19200 = G__19201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","+stop+","tiltontec.cell.base/+stop+",1421569483,null),null,(1),null))))),null,(1),null)),body)));
}));

(tiltontec.cell.base.un_stopped.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.un_stopped.cljs$lang$applyTo = (function (seq19195){
var G__19196 = cljs.core.first.call(null,seq19195);
var seq19195__$1 = cljs.core.next.call(null,seq19195);
var G__19197 = cljs.core.first.call(null,seq19195__$1);
var seq19195__$2 = cljs.core.next.call(null,seq19195__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19196,G__19197,seq19195__$2);
}));

return null;
})()
;
(tiltontec.cell.base.un_stopped.cljs$lang$macro = true);

tiltontec.cell.base.ustack$ = (function tiltontec$cell$base$ustack$(tag){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"ustack> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.map.call(null,(function (c){
return new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
}),tiltontec.cell.base._STAR_call_stack_STAR_)))].join('');
});
tiltontec.cell.base.c_break = (function tiltontec$cell$base$c_break(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19203 = arguments.length;
var i__4737__auto___19204 = (0);
while(true){
if((i__4737__auto___19204 < len__4736__auto___19203)){
args__4742__auto__.push((arguments[i__4737__auto___19204]));

var G__19205 = (i__4737__auto___19204 + (1));
i__4737__auto___19204 = G__19205;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.base.c_break.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(args));
}
}));

(tiltontec.cell.base.c_break.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_break.cljs$lang$applyTo = (function (seq19202){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19202));
}));

tiltontec.cell.base.c_warn = (function tiltontec$cell$base$c_warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19207 = arguments.length;
var i__4737__auto___19208 = (0);
while(true){
if((i__4737__auto___19208 < len__4736__auto___19207)){
args__4742__auto__.push((arguments[i__4737__auto___19208]));

var G__19209 = (i__4737__auto___19208 + (1));
i__4737__auto___19208 = G__19209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.base.c_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(tiltontec.cell.base._PLUS_stop_PLUS_)){
return null;
} else {
return cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"WARNING: ",args));
}
}));

(tiltontec.cell.base.c_warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.base.c_warn.cljs$lang$applyTo = (function (seq19206){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19206));
}));

cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),new cljs.core.Keyword("tiltontec.cell.base","object","tiltontec.cell.base/object",1595927066));
cljs.core.derive.call(null,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071));
tiltontec.cell.base.c_formula_QMARK_ = (function tiltontec$cell$base$c_formula_QMARK_(c){
return tiltontec.util.base.mx_type_QMARK_.call(null,c,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037));
});
tiltontec.cell.base.c_ref_QMARK_ = (function tiltontec$cell$base$c_ref_QMARK_(x){
return ((tiltontec.util.core.any_ref_QMARK_.call(null,x)) && (tiltontec.util.base.mx_type_QMARK_.call(null,x,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071))));
});
tiltontec.cell.base.c_me = (function tiltontec$cell$base$c_me(ref){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_prop = (function tiltontec$cell$base$c_prop(ref){
return new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_state = (function tiltontec$cell$base$c_state(ref){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_input_QMARK_ = (function tiltontec$cell$base$c_input_QMARK_(ref){
return new cljs.core.Keyword(null,"input?","input?",-1792843173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_rule = (function tiltontec$cell$base$c_rule(ref){
return new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse = (function tiltontec$cell$base$c_pulse(ref){
return new cljs.core.Keyword(null,"pulse","pulse",-244494476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_last_changed = (function tiltontec$cell$base$c_pulse_last_changed(ref){
return new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_pulse_watched = (function tiltontec$cell$base$c_pulse_watched(ref){
return new cljs.core.Keyword(null,"pulse-watched","pulse-watched",33719362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_useds = (function tiltontec$cell$base$c_useds(ref){
return new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_users = (function tiltontec$cell$base$c_users(ref){
return new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_callers = (function tiltontec$cell$base$c_callers(ref){
return new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_optimize = (function tiltontec$cell$base$c_optimize(ref){
return new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_ephemeral_QMARK_ = (function tiltontec$cell$base$c_ephemeral_QMARK_(ref){
return new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_code = (function tiltontec$cell$base$c_code(ref){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_lazy = (function tiltontec$cell$base$c_lazy(ref){
return new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_synapses = (function tiltontec$cell$base$c_synapses(ref){
return new cljs.core.Keyword(null,"synapses","synapses",-614206130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_synaptic_QMARK_ = (function tiltontec$cell$base$c_synaptic_QMARK_(ref){
return new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});

tiltontec.cell.base.c_async_QMARK_ = (function tiltontec$cell$base$c_async_QMARK_(ref){
return new cljs.core.Keyword(null,"async?","async?",1523057758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.cell.base.dpc = (function tiltontec$cell$base$dpc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19212 = arguments.length;
var i__4737__auto___19213 = (0);
while(true){
if((i__4737__auto___19213 < len__4736__auto___19212)){
args__4742__auto__.push((arguments[i__4737__auto___19213]));

var G__19214 = (i__4737__auto___19213 + (1));
i__4737__auto___19213 = G__19214;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.base.dpc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.cell.base.dpc.cljs$core$IFn$_invoke$arity$variadic = (function (cell,bits){
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cell)))){
return cljs.core.apply.call(null,cljs.core.prn,bits);
} else {
return null;
}
}));

(tiltontec.cell.base.dpc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.cell.base.dpc.cljs$lang$applyTo = (function (seq19210){
var G__19211 = cljs.core.first.call(null,seq19210);
var seq19210__$1 = cljs.core.next.call(null,seq19210);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19211,seq19210__$1);
}));

tiltontec.cell.base.c_code$ = (function tiltontec$cell$base$c_code$(c){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19215_19221 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19216_19222 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19217_19223 = true;
var _STAR_print_fn_STAR__temp_val__19218_19224 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19217_19223);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19218_19224);

try{var _STAR_print_level_STAR__orig_val__19219_19225 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__19220_19226 = (20);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__19220_19226);

try{cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__19219_19225);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19216_19222);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19215_19221);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
tiltontec.cell.base.c_value = (function tiltontec$cell$base$c_value(c){
if(tiltontec.util.core.any_ref_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (any-ref? c)"));
}

if(((tiltontec.cell.base.c_ref_QMARK_.call(null,c)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
} else {
return cljs.core.deref.call(null,c);

}
});
tiltontec.cell.base.c_optimized_away_QMARK_ = (function tiltontec$cell$base$c_optimized_away_QMARK_(c){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
cljs.core.prn.call(null,new cljs.core.Keyword(null,"caway-notc","caway-notc",582032682),c,cljs.core.meta.call(null,c));
}

if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error(["Assert failed: ","c-awy?-got-not-c","\n","(c-ref? c)"].join('')));
}

return (((!(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))))) || ((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,c),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)))));
});
tiltontec.cell.base.c_model = (function tiltontec$cell$base$c_model(rc){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
});
tiltontec.cell.base.c_md_name = (function tiltontec$cell$base$c_md_name(c){
var temp__5802__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__5802__auto__)){
var md = temp__5802__auto__;
var or__4126__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,md));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "anon";
}
} else {
return "no-md";
}
});
tiltontec.cell.base.c_prop_name = (function tiltontec$cell$base$c_prop_name(rc){
return new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
});
tiltontec.cell.base.c_value_state = (function tiltontec$cell$base$c_value_state(rc){
var v = tiltontec.cell.base.c_value.call(null,rc);
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.unbound)){
return new cljs.core.Keyword(null,"unbound","unbound",-1366326654);
} else {
if(cljs.core._EQ_.call(null,v,tiltontec.cell.base.uncurrent)){
return new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
tiltontec.cell.base.c_unbound_QMARK_ = (function tiltontec$cell$base$c_unbound_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unbound","unbound",-1366326654),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.c_valid_QMARK_ = (function tiltontec$cell$base$c_valid_QMARK_(rc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"valid","valid",155614240),tiltontec.cell.base.c_value_state.call(null,rc));
});
tiltontec.cell.base.c_pulse_unwatched_QMARK_ = (function tiltontec$cell$base$c_pulse_unwatched_QMARK_(c){
var temp__5802__auto__ = tiltontec.cell.base.c_pulse_watched.call(null,c);
if(cljs.core.truth_(temp__5802__auto__)){
var pulse_watched = temp__5802__auto__;
return (cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_) > pulse_watched);
} else {
return true;
}
});
tiltontec.cell.base.dependency_record = (function tiltontec$cell$base$dependency_record(used){
if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,used)){
return null;
} else {
tiltontec.util.core.mut_set_BANG_.call(null,tiltontec.cell.base._STAR_depender_STAR_,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.util.core.mut_set_BANG_.call(null,used,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.conj.call(null,tiltontec.cell.base.c_callers.call(null,used),tiltontec.cell.base._STAR_depender_STAR_));
}
});
tiltontec.cell.base.dependency_drop = (function tiltontec$cell$base$dependency_drop(used,caller){
tiltontec.util.core.mut_set_BANG_.call(null,caller,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.disj.call(null,tiltontec.cell.base.c_useds.call(null,caller),used));

return tiltontec.util.core.mut_set_BANG_.call(null,used,new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),caller));
});
tiltontec.cell.base.unlink_from_callers = (function tiltontec$cell$base$unlink_from_callers(used){
var seq__19227 = cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,used));
var chunk__19228 = null;
var count__19229 = (0);
var i__19230 = (0);
while(true){
if((i__19230 < count__19229)){
var caller = cljs.core._nth.call(null,chunk__19228,i__19230);
tiltontec.cell.base.dependency_drop.call(null,used,caller);


var G__19231 = seq__19227;
var G__19232 = chunk__19228;
var G__19233 = count__19229;
var G__19234 = (i__19230 + (1));
seq__19227 = G__19231;
chunk__19228 = G__19232;
count__19229 = G__19233;
i__19230 = G__19234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19227);
if(temp__5804__auto__){
var seq__19227__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19227__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19227__$1);
var G__19235 = cljs.core.chunk_rest.call(null,seq__19227__$1);
var G__19236 = c__4556__auto__;
var G__19237 = cljs.core.count.call(null,c__4556__auto__);
var G__19238 = (0);
seq__19227 = G__19235;
chunk__19228 = G__19236;
count__19229 = G__19237;
i__19230 = G__19238;
continue;
} else {
var caller = cljs.core.first.call(null,seq__19227__$1);
tiltontec.cell.base.dependency_drop.call(null,used,caller);


var G__19239 = cljs.core.next.call(null,seq__19227__$1);
var G__19240 = null;
var G__19241 = (0);
var G__19242 = (0);
seq__19227 = G__19239;
chunk__19228 = G__19240;
count__19229 = G__19241;
i__19230 = G__19242;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.cell.base.unlink_from_used = (function tiltontec$cell$base$unlink_from_used(caller,why){

var seq__19243 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,caller));
var chunk__19244 = null;
var count__19245 = (0);
var i__19246 = (0);
while(true){
if((i__19246 < count__19245)){
var used = cljs.core._nth.call(null,chunk__19244,i__19246);
tiltontec.cell.base.dependency_drop.call(null,used,caller);


var G__19247 = seq__19243;
var G__19248 = chunk__19244;
var G__19249 = count__19245;
var G__19250 = (i__19246 + (1));
seq__19243 = G__19247;
chunk__19244 = G__19248;
count__19245 = G__19249;
i__19246 = G__19250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19243);
if(temp__5804__auto__){
var seq__19243__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19243__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19243__$1);
var G__19251 = cljs.core.chunk_rest.call(null,seq__19243__$1);
var G__19252 = c__4556__auto__;
var G__19253 = cljs.core.count.call(null,c__4556__auto__);
var G__19254 = (0);
seq__19243 = G__19251;
chunk__19244 = G__19252;
count__19245 = G__19253;
i__19246 = G__19254;
continue;
} else {
var used = cljs.core.first.call(null,seq__19243__$1);
tiltontec.cell.base.dependency_drop.call(null,used,caller);


var G__19255 = cljs.core.next.call(null,seq__19243__$1);
var G__19256 = null;
var G__19257 = (0);
var G__19258 = (0);
seq__19243 = G__19255;
chunk__19244 = G__19256;
count__19245 = G__19257;
i__19246 = G__19258;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.cell.base.c_props = (function tiltontec$cell$base$c_props(c,k){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

return cljs.core.set.call(null,cljs.core.map.call(null,tiltontec.cell.base.c_prop,k.call(null,cljs.core.deref.call(null,c))));
});
tiltontec.cell.base.md_ref_QMARK_ = (function tiltontec$cell$base$md_ref_QMARK_(x){
return tiltontec.util.core.any_ref_QMARK_.call(null,x);
});
tiltontec.cell.base.md_state = (function tiltontec$cell$base$md_state(me){
return new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me));
});
tiltontec.cell.base.mdead_QMARK_ = (function tiltontec$cell$base$mdead_QMARK_(me){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dead","dead",-1946604091),tiltontec.cell.base.md_state.call(null,me));
});
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.base.md_prop_owning_QMARK_ = (function tiltontec$cell$base$md_prop_owning_QMARK_(class_name,prop_name){
return false;
});
tiltontec.cell.base.c_debug_QMARK_ = (function tiltontec$cell$base$c_debug_QMARK_(var_args){
var G__19260 = arguments.length;
switch (G__19260) {
case 1:
return tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return tiltontec.cell.base.c_debug_QMARK_.call(null,c,new cljs.core.Keyword(null,"annon","annon",-928163887));
}));

(tiltontec.cell.base.c_debug_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,tag){
var temp__5804__auto__ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(temp__5804__auto__)){
var dbg = temp__5804__auto__;
var or__4126__auto__ = dbg === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.call(null,dbg,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if(cljs.core.coll_QMARK_.call(null,dbg)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tag]),dbg);
} else {
return false;
}
}
}
} else {
return null;
}
}));

(tiltontec.cell.base.c_debug_QMARK_.cljs$lang$maxFixedArity = 2);

tiltontec.cell.base.minfo = (function tiltontec$cell$base$minfo(me){
if(cljs.core.truth_(tiltontec.cell.base._STAR_mx_minfo_STAR_)){
if(cljs.core.fn_QMARK_.call(null,tiltontec.cell.base._STAR_mx_minfo_STAR_)){
} else {
throw (new Error("Assert failed: (fn? *mx-minfo*)"));
}

return tiltontec.cell.base._STAR_mx_minfo_STAR_.call(null,me);
} else {
if((me == null)){
return new cljs.core.Keyword(null,"NIL-MD","NIL-MD",1077917732);
} else {
if((!(tiltontec.util.core.any_ref_QMARK_.call(null,me)))){
return new cljs.core.Keyword(null,"NOT-ANY-REF","NOT-ANY-REF",1843757419);
} else {
if((!(tiltontec.cell.base.md_ref_QMARK_.call(null,me)))){
return new cljs.core.Keyword(null,"NOT-MD","NOT-MD",1700738744);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"anon","anon",-765650478);
}
})(),cljs.core.meta.call(null,me)], null);

}
}
}

}
});
tiltontec.cell.base.cinfo = (function tiltontec$cell$base$cinfo(c){
if((c == null)){
return new cljs.core.Keyword(null,"NIL-C","NIL-C",-554969136);
} else {
if((!(tiltontec.util.core.any_ref_QMARK_.call(null,c)))){
return new cljs.core.Keyword(null,"NOT-ANY-REF-C","NOT-ANY-REF-C",1845831331);
} else {
if((!(tiltontec.cell.base.c_ref_QMARK_.call(null,c)))){
return new cljs.core.Keyword(null,"NOT-C-REF","NOT-C-REF",1296587669);
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_prop_name.call(null,c),tiltontec.cell.base.c_md_name.call(null,c),new cljs.core.Keyword(null,"mx-sid","mx-sid",-508332951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"pulse","pulse",-244494476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val-state","val-state",-1681779977),tiltontec.cell.base.c_value.call(null,c),tiltontec.cell.base.c_value_state.call(null,c)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.count.call(null,new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c))),new cljs.core.Keyword(null,"callers","callers",-1991542784),cljs.core.count.call(null,new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c)))], null),tiltontec.util.base.mx_type.call(null,c),tiltontec.cell.base.c_async_QMARK_.call(null,c)], null);

}
}
}
});
tiltontec.cell.base.cdbg = (function tiltontec$cell$base$cdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19265 = arguments.length;
var i__4737__auto___19266 = (0);
while(true){
if((i__4737__auto___19266 < len__4736__auto___19265)){
args__4742__auto__.push((arguments[i__4737__auto___19266]));

var G__19267 = (i__4737__auto___19266 + (1));
i__4737__auto___19266 = G__19267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.base.cdbg.cljs$core$IFn$_invoke$arity$variadic = (function (c,tag,bits){
if(cljs.core.truth_(c)){
if(((cljs.core._EQ_.call(null,c,true)) || (tiltontec.cell.base.c_ref_QMARK_.call(null,c)))){
} else {
throw (new Error(["Assert failed: ",["cdbg> passed non c-ref? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((tiltontec.util.core.any_ref_QMARK_.call(null,c))?cljs.core.deref.call(null,c):c))].join(''),"\n","(or (= c true) (c-ref? c))"].join('')));
}

if((tag instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ",["cdbg> second parame s/b keyword tag, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),"\n","(keyword? tag)"].join('')));
}

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,c,true);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
}
})())){
cljs.core.prn.call(null);

return cljs.core.apply.call(null,cljs.core.prn,new cljs.core.Keyword(null,"cdbg>","cdbg>",-1502383772),tag,new cljs.core.Keyword(null,"cinfo","cinfo",-259107143),tiltontec.cell.base.cinfo.call(null,c),bits);
} else {
return null;
}
} else {
return null;
}
}));

(tiltontec.cell.base.cdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.base.cdbg.cljs$lang$applyTo = (function (seq19262){
var G__19263 = cljs.core.first.call(null,seq19262);
var seq19262__$1 = cljs.core.next.call(null,seq19262);
var G__19264 = cljs.core.first.call(null,seq19262__$1);
var seq19262__$2 = cljs.core.next.call(null,seq19262__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19263,G__19264,seq19262__$2);
}));


//# sourceMappingURL=base.js.map
