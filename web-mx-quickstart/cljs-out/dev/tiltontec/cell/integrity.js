// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__14469 = arguments.length;
switch (G__14469) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$cell$integrity$ufb_counts_$_iter__14471(s__14472){
return (new cljs.core.LazySeq(null,(function (){
var s__14472__$1 = s__14472;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14472__$1);
if(temp__5804__auto__){
var s__14472__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14472__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__14472__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__14474 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__14473 = (0);
while(true){
if((i__14473 < size__4528__auto__)){
var vec__14475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__14473);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14475,(1),null);
cljs.core.chunk_append(b__14474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(cljs.core.deref(v))], null));

var G__14481 = (i__14473 + (1));
i__14473 = G__14481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14474),tiltontec$cell$integrity$ufb_counts_$_iter__14471(cljs.core.chunk_rest(s__14472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14474),null);
}
} else {
var vec__14478 = cljs.core.first(s__14472__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14478,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(cljs.core.deref(v))], null),tiltontec$cell$integrity$ufb_counts_$_iter__14471(cljs.core.rest(s__14472__$2)));
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
var G__14482 = ["ufb-queue> opcode unknown: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__14482) : tiltontec.util.core.err.call(null,G__14482));
}
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add(tiltontec.cell.integrity.ufb_queue(opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__5802__auto__ = tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(opcode));
if(cljs.core.truth_(temp__5802__auto__)){
var uqp = temp__5802__auto__;
var G__14483 = "ufb queue %s not empty, viz %s";
var G__14484 = opcode;
var G__14485 = uqp;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$3(G__14483,G__14484,G__14485) : tiltontec.util.core.err.call(null,G__14483,G__14484,G__14485));
} else {
return true;
}
});
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__14487 = arguments.length;
switch (G__14487) {
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
var vec__14488 = temp__5804__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14488,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14488,(1),null);
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ufb_DASH_do_DASH_yep,defer_info,task], 0));

(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : task.call(null,opcode,defer_info));

var G__14492 = q;
var G__14493 = opcode;
q = G__14492;
opcode = G__14493;
continue;
} else {
return null;
}
break;
}
}));

(tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2);

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
var G__14494 = (function (){var tag = cljs.core.cst$kw$tell_DASH_dependents;
while(true){
var G__14495 = tag;
var G__14495__$1 = (((G__14495 instanceof cljs.core.Keyword))?G__14495.fqn:null);
switch (G__14495__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$awaken);

var G__14502 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$tell_DASH_dependents)))?cljs.core.cst$kw$tell_DASH_dependents:cljs.core.cst$kw$handle_DASH_clients);
tag = G__14502;
continue;

break;
case "handle-clients":
tiltontec.util.core.plnk(cljs.core.cst$kw$handle_DASH_clients_BANG__BANG__BANG_);

var temp__5804__auto__ = tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client);
if(cljs.core.truth_(temp__5804__auto__)){
var clientq = temp__5804__auto__;
var temp__5802__auto___14503 = cljs.core.deref(tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__5802__auto___14503)){
var cqh_14504 = temp__5802__auto___14503;
(cqh_14504.cljs$core$IFn$_invoke$arity$1 ? cqh_14504.cljs$core$IFn$_invoke$arity$1(clientq) : cqh_14504.call(null,clientq));
} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(clientq,cljs.core.cst$kw$client);
}

var G__14505 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client)))?(function (){
tiltontec.util.core.plnk(cljs.core.cst$kw$re_DASH_handling_DASH_clients_BANG__BANG__BANG__BANG_);

return cljs.core.cst$kw$handle_DASH_clients;
})()
:cljs.core.cst$kw$ephemeral_DASH_reset);
tag = G__14505;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ephemeral_DASH_reset);

var G__14506 = cljs.core.cst$kw$deferred_DASH_state_DASH_change;
tag = G__14506;
continue;

break;
case "deferred-state-change":
var temp__5804__auto__ = tiltontec.util.core.fifo_pop(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$change));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__14496 = temp__5804__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(0),null);
var task_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(1),null);
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$defferred_DASH_state_DASH_chg);

var G__14499_14507 = cljs.core.cst$kw$change;
var G__14500_14508 = defer_info;
(task_fn.cljs$core$IFn$_invoke$arity$2 ? task_fn.cljs$core$IFn$_invoke$arity$2(G__14499_14507,G__14500_14508) : task_fn.call(null,G__14499_14507,G__14500_14508));

var G__14509 = cljs.core.cst$kw$tell_DASH_dependents;
tag = G__14509;
continue;
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14495__$1)].join('')));

}
break;
}
})();
return (tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.base.un_stopped.cljs$core$IFn$_invoke$arity$1(G__14494) : tiltontec.cell.base.un_stopped.call(null,G__14494));
});
var ret__4785__auto___14518 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14519 = arguments.length;
var i__4737__auto___14520 = (0);
while(true){
if((i__4737__auto___14520 < len__4736__auto___14519)){
args__4742__auto__.push((arguments[i__4737__auto___14520]));

var G__14521 = (i__4737__auto___14520 + (1));
i__4737__auto___14520 = G__14521;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__14514,body){
var vec__14515 = p__14514;
var opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_call_DASH_with_DASH_integrity,null,(1),null)),(new cljs.core.List(null,opcode,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,info,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$opcode,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$defer_DASH_info,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq14510){
var G__14511 = cljs.core.first(seq14510);
var seq14510__$1 = cljs.core.next(seq14510);
var G__14512 = cljs.core.first(seq14510__$1);
var seq14510__$2 = cljs.core.next(seq14510__$1);
var G__14513 = cljs.core.first(seq14510__$2);
var seq14510__$3 = cljs.core.next(seq14510__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14511,G__14512,G__14513,seq14510__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true);

var ret__4785__auto___14526 = (function (){
tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14527 = arguments.length;
var i__4737__auto___14528 = (0);
while(true){
if((i__4737__auto___14528 < len__4736__auto___14527)){
args__4742__auto__.push((arguments[i__4737__auto___14528]));

var G__14529 = (i__4737__auto___14528 + (1));
i__4737__auto___14528 = G__14529;
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
(tiltontec.cell.integrity.with_cc.cljs$lang$applyTo = (function (seq14522){
var G__14523 = cljs.core.first(seq14522);
var seq14522__$1 = cljs.core.next(seq14522);
var G__14524 = cljs.core.first(seq14522__$1);
var seq14522__$2 = cljs.core.next(seq14522__$1);
var G__14525 = cljs.core.first(seq14522__$2);
var seq14522__$3 = cljs.core.next(seq14522__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14523,G__14524,G__14525,seq14522__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_cc.cljs$lang$macro = true);

var ret__4785__auto___14533 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14534 = arguments.length;
var i__4737__auto___14535 = (0);
while(true){
if((i__4737__auto___14535 < len__4736__auto___14534)){
args__4742__auto__.push((arguments[i__4737__auto___14535]));

var G__14536 = (i__4737__auto___14535 + (1));
i__4737__auto___14535 = G__14536;
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
(tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq14530){
var G__14531 = cljs.core.first(seq14530);
var seq14530__$1 = cljs.core.next(seq14530);
var G__14532 = cljs.core.first(seq14530__$1);
var seq14530__$2 = cljs.core.next(seq14530__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14531,G__14532,seq14530__$2);
}));

return null;
})()
;
(tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true);

var ret__4785__auto___14541 = (function (){
tiltontec.cell.integrity.with_async_change = (function tiltontec$cell$integrity$with_async_change(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14542 = arguments.length;
var i__4737__auto___14543 = (0);
while(true){
if((i__4737__auto___14543 < len__4736__auto___14542)){
args__4742__auto__.push((arguments[i__4737__auto___14543]));

var G__14544 = (i__4737__auto___14543 + (1));
i__4737__auto___14543 = G__14544;
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
(tiltontec.cell.integrity.with_async_change.cljs$lang$applyTo = (function (seq14537){
var G__14538 = cljs.core.first(seq14537);
var seq14537__$1 = cljs.core.next(seq14537);
var G__14539 = cljs.core.first(seq14537__$1);
var seq14537__$2 = cljs.core.next(seq14537__$1);
var G__14540 = cljs.core.first(seq14537__$2);
var seq14537__$3 = cljs.core.next(seq14537__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14538,G__14539,G__14540,seq14537__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_async_change.cljs$lang$macro = true);

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(tiltontec.cell.base._STAR_within_integrity_STAR_)){
if(cljs.core.truth_(opcode)){
var result__10625__auto__ = cljs.core.cst$kw$deferred_DASH_to_DASH_ufb_DASH_1;
tiltontec.cell.integrity.ufb_add(opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__10625__auto__;
} else {
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
}
} else {
var _STAR_within_integrity_STAR__orig_val__14545 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR__orig_val__14546 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_within_integrity_STAR__temp_val__14547 = true;
var _STAR_defer_changes_STAR__temp_val__14548 = false;
(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__14547);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__14548);

try{if((((cljs.core.deref(tiltontec.cell.base._STAR_pulse_STAR_) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,cljs.core.cst$kw$change)))){
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cwi,opcode,defer_info], null));
} else {
}

var result__10625__auto__ = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
tiltontec.cell.integrity.finish_business();

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$change);

return result__10625__auto__;
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__14546);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__14545);
}
}
});
