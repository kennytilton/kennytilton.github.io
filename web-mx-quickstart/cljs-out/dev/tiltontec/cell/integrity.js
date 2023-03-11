// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__14765 = arguments.length;
switch (G__14765) {
case 0:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$anon);
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(cljs.core.truth_(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_)){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_dp_log_STAR_)){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("dp-next> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_) + (1)),pulse_info], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base._STAR_pulse_STAR_,cljs.core.inc);
}
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1);

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
var and__4115__auto__ = tiltontec.cell.base.c_pulse(c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_pulse(c),cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
} else {
return and__4115__auto__;
}
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(tiltontec.cell.base.c_optimized_away_QMARK_(c)){
return null;
} else {
if((((tiltontec.cell.base.c_pulse(c) == null)) || ((cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_) >= tiltontec.cell.base.c_pulse(c))))){
} else {
throw (new Error("Assert failed: (or (nil? (c-pulse c)) (>= (clojure.core/deref *pulse*) (c-pulse c)))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,cljs.core.cst$kw$pulse,cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_));
}
});
tiltontec.cell.integrity.ufb_counts = (function tiltontec$cell$integrity$ufb_counts(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$cell$integrity$ufb_counts_$_iter__14767(s__14768){
return (new cljs.core.LazySeq(null,(function (){
var s__14768__$1 = s__14768;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14768__$1);
if(temp__5804__auto__){
var s__14768__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14768__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14768__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14770 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14769 = (0);
while(true){
if((i__14769 < size__4528__auto__)){
var vec__14771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14769);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14771,(1),null);
cljs.core.chunk_append(b__14770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(cljs.core.deref(v))], null));

var G__14777 = (i__14769 + (1));
i__14769 = G__14777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14770),tiltontec$cell$integrity$ufb_counts_$_iter__14767(cljs.core.chunk_rest(s__14768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14770),null);
}
} else {
var vec__14774 = cljs.core.first(s__14768__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14774,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(cljs.core.deref(v))], null),tiltontec$cell$integrity$ufb_counts_$_iter__14767(cljs.core.rest(s__14768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tiltontec.cell.base._STAR_unfinished_business_STAR_);
})());
});
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__4126__auto__ = (opcode.cljs$core$IFn$_invoke$arity$1 ? opcode.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base._STAR_unfinished_business_STAR_) : opcode.call(null,tiltontec.cell.base._STAR_unfinished_business_STAR_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__14778 = ["ufb-queue> opcode unknown: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__14778) : tiltontec.util.core.err.call(null,G__14778));
}
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add(tiltontec.cell.integrity.ufb_queue(opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__5802__auto__ = tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(opcode));
if(cljs.core.truth_(temp__5802__auto__)){
var uqp = temp__5802__auto__;
var G__14779 = "ufb queue %s not empty, viz %s";
var G__14780 = opcode;
var G__14781 = uqp;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__14779,G__14780,G__14781) : tiltontec.util.core.err.call(null,G__14779,G__14780,G__14781));
} else {
return true;
}
});
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__14783 = arguments.length;
switch (G__14783) {
case 1:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1 = (function (opcode){
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.integrity.ufb_queue(opcode),opcode);
}));

(tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__5804__auto__ = tiltontec.util.core.fifo_pop(q);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__14784 = temp__5804__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14784,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14784,(1),null);
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ufb_DASH_do_DASH_yep,defer_info,task], 0));

(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : task.call(null,opcode,defer_info));

var G__14788 = q;
var G__14789 = opcode;
q = G__14788;
opcode = G__14789;
continue;
} else {
return null;
}
break;
}
}));

(tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2);

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = cljs.core.cst$kw$tell_DASH_dependents;
while(true){
var G__14790 = tag;
var G__14790__$1 = (((G__14790 instanceof cljs.core.Keyword))?G__14790.fqn:null);
switch (G__14790__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$awaken);

var G__14797 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$tell_DASH_dependents)))?cljs.core.cst$kw$tell_DASH_dependents:cljs.core.cst$kw$handle_DASH_clients);
tag = G__14797;
continue;

break;
case "handle-clients":
tiltontec.util.core.plnk(cljs.core.cst$kw$handle_DASH_clients_BANG__BANG__BANG_);

var temp__5804__auto__ = tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client);
if(cljs.core.truth_(temp__5804__auto__)){
var clientq = temp__5804__auto__;
var temp__5802__auto___14798 = cljs.core.deref(tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__5802__auto___14798)){
var cqh_14799 = temp__5802__auto___14798;
(cqh_14799.cljs$core$IFn$_invoke$arity$1 ? cqh_14799.cljs$core$IFn$_invoke$arity$1(clientq) : cqh_14799.call(null,clientq));
} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(clientq,cljs.core.cst$kw$client);
}

var G__14800 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client)))?(function (){
tiltontec.util.core.plnk(cljs.core.cst$kw$re_DASH_handling_DASH_clients_BANG__BANG__BANG__BANG_);

return cljs.core.cst$kw$handle_DASH_clients;
})()
:cljs.core.cst$kw$ephemeral_DASH_reset);
tag = G__14800;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ephemeral_DASH_reset);

var G__14801 = cljs.core.cst$kw$deferred_DASH_state_DASH_change;
tag = G__14801;
continue;

break;
case "deferred-state-change":
var temp__5804__auto__ = tiltontec.util.core.fifo_pop(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$change));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__14791 = temp__5804__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14791,(0),null);
var task_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14791,(1),null);
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defferred_DASH_state_DASH_chg);

var G__14794_14802 = cljs.core.cst$kw$change;
var G__14795_14803 = defer_info;
(task_fn.cljs$core$IFn$_invoke$arity$2 ? task_fn.cljs$core$IFn$_invoke$arity$2(G__14794_14802,G__14795_14803) : task_fn.call(null,G__14794_14802,G__14795_14803));

var G__14804 = cljs.core.cst$kw$tell_DASH_dependents;
tag = G__14804;
continue;
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14790__$1)].join('')));

}
break;
}
}
});
var ret__4785__auto___14813 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14814 = arguments.length;
var i__4737__auto___14815 = (0);
while(true){
if((i__4737__auto___14815 < len__4736__auto___14814)){
args__4742__auto__.push((arguments[i__4737__auto___14815]));

var G__14816 = (i__4737__auto___14815 + (1));
i__4737__auto___14815 = G__14816;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14809,body){
var vec__14810 = p__14809;
var opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_call_DASH_with_DASH_integrity,null,(1),null)),(new cljs.core.List(null,opcode,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,info,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq14805){
var G__14806 = cljs.core.first(seq14805);
var seq14805__$1 = cljs.core.next(seq14805);
var G__14807 = cljs.core.first(seq14805__$1);
var seq14805__$2 = cljs.core.next(seq14805__$1);
var G__14808 = cljs.core.first(seq14805__$2);
var seq14805__$3 = cljs.core.next(seq14805__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14806,G__14807,G__14808,seq14805__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true);

var ret__4785__auto___14821 = (function (){
tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14822 = arguments.length;
var i__4737__auto___14823 = (0);
while(true){
if((i__4737__auto___14823 < len__4736__auto___14822)){
args__4742__auto__.push((arguments[i__4737__auto___14823]));

var G__14824 = (i__4737__auto___14823 + (1));
i__4737__auto___14823 = G__14824;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_with_DASH_integrity,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),(new cljs.core.List(null,id,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.integrity.with_cc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_cc.cljs$lang$applyTo = (function (seq14817){
var G__14818 = cljs.core.first(seq14817);
var seq14817__$1 = cljs.core.next(seq14817);
var G__14819 = cljs.core.first(seq14817__$1);
var seq14817__$2 = cljs.core.next(seq14817__$1);
var G__14820 = cljs.core.first(seq14817__$2);
var seq14817__$3 = cljs.core.next(seq14817__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14818,G__14819,G__14820,seq14817__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_cc.cljs$lang$macro = true);

var ret__4785__auto___14828 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14829 = arguments.length;
var i__4737__auto___14830 = (0);
while(true){
if((i__4737__auto___14830 < len__4736__auto___14829)){
args__4742__auto__.push((arguments[i__4737__auto___14830]));

var G__14831 = (i__4737__auto___14830 + (1));
i__4737__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_defer_DASH_changes_STAR_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH__STAR_call_DASH_stack_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq14825){
var G__14826 = cljs.core.first(seq14825);
var seq14825__$1 = cljs.core.next(seq14825);
var G__14827 = cljs.core.first(seq14825__$1);
var seq14825__$2 = cljs.core.next(seq14825__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,seq14825__$2);
}));

return null;
})()
;
(tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true);

var ret__4785__auto___14836 = (function (){
tiltontec.cell.integrity.with_async_change = (function tiltontec$cell$integrity$with_async_change(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14837 = arguments.length;
var i__4737__auto___14838 = (0);
while(true){
if((i__4737__auto___14838 < len__4736__auto___14837)){
args__4742__auto__.push((arguments[i__4737__auto___14838]));

var G__14839 = (i__4737__auto___14838 + (1));
i__4737__auto___14838 = G__14839;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_async_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_async_change.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_defer_DASH_changes_STAR_,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH__STAR_call_DASH_stack_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_with_DASH_integrity,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$change,null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.integrity.with_async_change.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_async_change.cljs$lang$applyTo = (function (seq14832){
var G__14833 = cljs.core.first(seq14832);
var seq14832__$1 = cljs.core.next(seq14832);
var G__14834 = cljs.core.first(seq14832__$1);
var seq14832__$2 = cljs.core.next(seq14832__$1);
var G__14835 = cljs.core.first(seq14832__$2);
var seq14832__$3 = cljs.core.next(seq14832__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14833,G__14834,G__14835,seq14832__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_async_change.cljs$lang$macro = true);

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(tiltontec.cell.base._STAR_within_integrity_STAR_)){
if(cljs.core.truth_(opcode)){
var result__10624__auto__ = cljs.core.cst$kw$deferred_DASH_to_DASH_ufb_DASH_1;
tiltontec.cell.integrity.ufb_add(opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__10624__auto__;
} else {
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
}
} else {
var _STAR_within_integrity_STAR__orig_val__14840 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR__orig_val__14841 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_within_integrity_STAR__temp_val__14842 = true;
var _STAR_defer_changes_STAR__temp_val__14843 = false;
(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__14842);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__14843);

try{if((((cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,cljs.core.cst$kw$change)))){
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cwi,opcode,defer_info], null));
} else {
}

var result__10624__auto__ = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
tiltontec.cell.integrity.finish_business();

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$change);

return result__10624__auto__;
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__14841);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__14840);
}
}
});
