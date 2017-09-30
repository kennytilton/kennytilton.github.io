// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.integrity._STAR_dp_log_STAR_ = false;
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__13902 = arguments.length;
switch (G__13902) {
case 0:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$anon);
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
return null;
} else {
if(tiltontec.cell.integrity._STAR_dp_log_STAR_){
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic("dp-next> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) + (1)),pulse_info], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base._PLUS_pulse_PLUS_,cljs.core.inc);
}
});

tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1;

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.c_pulse(c),cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_(c))){
return null;
} else {
if((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) >= tiltontec.cell.base.c_pulse(c))){
} else {
throw (new Error("Assert failed: (>= (clojure.core/deref +pulse+) (c-pulse c))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(c,cljs.core.assoc,cljs.core.cst$kw$pulse,cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_));
}
});
tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tell_DASH_dependents,cljs.core.cst$kw$awaken,cljs.core.cst$kw$client,cljs.core.cst$kw$ephemeral_DASH_reset,cljs.core.cst$kw$change], null);
tiltontec.cell.integrity.unfin_biz = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7429__auto__ = (function tiltontec$cell$integrity$iter__13904(s__13905){
return (new cljs.core.LazySeq(null,(function (){
var s__13905__$1 = s__13905;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13905__$1);
if(temp__4657__auto__){
var s__13905__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13905__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__13905__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__13907 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__13906 = (0);
while(true){
if((i__13906 < size__7428__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__13906);
cljs.core.chunk_append(b__13907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null));

var G__13908 = (i__13906 + (1));
i__13906 = G__13908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),tiltontec$cell$integrity$iter__13904(cljs.core.chunk_rest(s__13905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),null);
}
} else {
var i = cljs.core.first(s__13905__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$integrity$iter__13904(cljs.core.rest(s__13905__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_);
})());
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__6640__auto__ = (opcode.cljs$core$IFn$_invoke$arity$1 ? opcode.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.integrity.unfin_biz) : opcode.call(null,tiltontec.cell.integrity.unfin_biz));
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var G__13909 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb-queue> opcode unknown: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__13909) : tiltontec.util.core.err.call(null,G__13909));
}
});
tiltontec.cell.integrity.ufb_queue_ensure = (function tiltontec$cell$integrity$ufb_queue_ensure(opcode){

return tiltontec.cell.integrity.ufb_queue(opcode);
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add(tiltontec.cell.integrity.ufb_queue_ensure(opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__4655__auto__ = tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(opcode));
if(cljs.core.truth_(temp__4655__auto__)){
var uqp = temp__4655__auto__;
var G__13910 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb queue %s not empty, viz %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uqp)].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__13910) : tiltontec.util.core.err.call(null,G__13910));
} else {
return true;
}
});
tiltontec.cell.integrity._STAR_ufb_do_q_STAR_ = null;
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__13912 = arguments.length;
switch (G__13912) {
case 1:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1 = (function (opcode){
return tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.integrity.ufb_queue(opcode),opcode);
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__4657__auto__ = tiltontec.util.core.fifo_pop(q);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__13913 = temp__4657__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(0),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(1),null);
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ufb_DASH_do_DASH_yep,defer_info,task], 0));

(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : task.call(null,opcode,defer_info));

var G__13917 = q;
var G__13918 = opcode;
q = G__13917;
opcode = G__13918;
continue;
} else {
return null;
}
break;
}
});

tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2;

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = cljs.core.cst$kw$tell_DASH_dependents;
while(true){
var G__13919 = tag;
var G__13919__$1 = (((G__13919 instanceof cljs.core.Keyword))?G__13919.fqn:null);
switch (G__13919__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$awaken);

var G__13926 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue_ensure(cljs.core.cst$kw$tell_DASH_dependents)))?cljs.core.cst$kw$tell_DASH_dependents:cljs.core.cst$kw$handle_DASH_clients);
tag = G__13926;
continue;

break;
case "handle-clients":
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handle_DASH_clients_BANG__BANG__BANG__BANG__BANG_], 0));

var temp__4657__auto__ = tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client);
if(cljs.core.truth_(temp__4657__auto__)){
var clientq = temp__4657__auto__;
var temp__4655__auto___13927 = cljs.core.deref(tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__4655__auto___13927)){
var cqh_13928 = temp__4655__auto___13927;
(cqh_13928.cljs$core$IFn$_invoke$arity$1 ? cqh_13928.cljs$core$IFn$_invoke$arity$1(clientq) : cqh_13928.call(null,clientq));
} else {
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2(clientq,cljs.core.cst$kw$client);
}

var G__13929 = (cljs.core.truth_(tiltontec.util.core.fifo_peek(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$client)))?(function (){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$re_DASH_handling_DASH_clients_BANG__BANG__BANG__BANG_], 0));

return cljs.core.cst$kw$handle_DASH_clients;
})()
:cljs.core.cst$kw$ephemeral_DASH_reset);
tag = G__13929;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ephemeral_DASH_reset);

var G__13930 = cljs.core.cst$kw$deferred_DASH_state_DASH_change;
tag = G__13930;
continue;

break;
case "deferred-state-change":
var temp__4657__auto__ = tiltontec.util.core.fifo_pop(tiltontec.cell.integrity.ufb_queue(cljs.core.cst$kw$change));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__13920 = temp__4657__auto__;
var defer_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13920,(0),null);
var task_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13920,(1),null);
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def_DASH_state_DASH_chg);

var G__13923_13931 = cljs.core.cst$kw$change;
var G__13924_13932 = defer_info;
(task_fn.cljs$core$IFn$_invoke$arity$2 ? task_fn.cljs$core$IFn$_invoke$arity$2(G__13923_13931,G__13924_13932) : task_fn.call(null,G__13923_13931,G__13924_13932));

var G__13933 = cljs.core.cst$kw$tell_DASH_dependents;
tag = G__13933;
continue;
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13919__$1)].join('')));

}
break;
}
}
});
var ret__7805__auto___13942 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__7772__auto__ = [];
var len__7765__auto___13943 = arguments.length;
var i__7766__auto___13944 = (0);
while(true){
if((i__7766__auto___13944 < len__7765__auto___13943)){
args__7772__auto__.push((arguments[i__7766__auto___13944]));

var G__13945 = (i__7766__auto___13944 + (1));
i__7766__auto___13944 = G__13945;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__13938,body){
var vec__13939 = p__13938;
var opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13939,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_call_DASH_with_DASH_integrity),(function (){var x__7483__auto__ = opcode;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = info;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opcode),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defer_DASH_info)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3);

tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq13934){
var G__13935 = cljs.core.first(seq13934);
var seq13934__$1 = cljs.core.next(seq13934);
var G__13936 = cljs.core.first(seq13934__$1);
var seq13934__$2 = cljs.core.next(seq13934__$1);
var G__13937 = cljs.core.first(seq13934__$2);
var seq13934__$3 = cljs.core.next(seq13934__$2);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic(G__13935,G__13936,G__13937,seq13934__$3);
});

return null;
})()
;
tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true;

var ret__7805__auto___13946 = tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(_AMPERSAND_form,_AMPERSAND_env,id,_AMPERSAND_body,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH_with_DASH_integrity),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$change),(function (){var x__7483__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});
tiltontec.cell.integrity.with_cc.cljs$lang$macro = true;

var ret__7805__auto___13950 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__7772__auto__ = [];
var len__7765__auto___13951 = arguments.length;
var i__7766__auto___13952 = (0);
while(true){
if((i__7766__auto___13952 < len__7765__auto___13951)){
args__7772__auto__.push((arguments[i__7766__auto___13952]));

var G__13953 = (i__7766__auto___13952 + (1));
i__7766__auto___13952 = G__13953;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_within_DASH_integrity_STAR_),cljs.core._conj(cljs.core.List.EMPTY,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$base_SLASH__STAR_defer_DASH_changes_STAR_),cljs.core._conj(cljs.core.List.EMPTY,false),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$cell$integrity_SLASH__STAR_call_DASH_stack_STAR_),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2);

tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq13947){
var G__13948 = cljs.core.first(seq13947);
var seq13947__$1 = cljs.core.next(seq13947);
var G__13949 = cljs.core.first(seq13947__$1);
var seq13947__$2 = cljs.core.next(seq13947__$1);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic(G__13948,G__13949,seq13947__$2);
});

return null;
})()
;
tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true;

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(opcode)){
if(cljs.core.truth_(tiltontec.util.core.cl_find(opcode,tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid opcode for with-integrity: %s. Allowed values: %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(cl-find opcode +ufb-opcodes+)")].join('')));
}
} else {
}

if(cljs.core.truth_(cljs.core.deref(tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_stopped())){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cwi_DASH_sees_DASH_stop_BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG__BANG_], 0));
} else {
if(tiltontec.cell.base._STAR_within_integrity_STAR_){
if(cljs.core.truth_(opcode)){
var result__11919__auto__ = cljs.core.cst$kw$deferred_DASH_to_DASH_ufb_DASH_1;
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cwi,cljs.core.cst$kw$defers,opcode,cljs.core.first(tiltontec.util.core.ensure_vec(defer_info))], 0));

tiltontec.cell.integrity.ufb_add(opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__11919__auto__;
} else {
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
}
} else {
var _STAR_within_integrity_STAR_13954 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR_13955 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_within_integrity_STAR_ = true;

tiltontec.cell.base._STAR_defer_changes_STAR_ = false;

try{if(((cljs.core.deref(tiltontec.cell.base._PLUS_pulse_PLUS_) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,cljs.core.cst$kw$change))){
tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cwi);
} else {
}

var result__11919__auto__ = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(opcode,defer_info) : action.call(null,opcode,defer_info));
tiltontec.cell.integrity.finish_business();

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$tell_DASH_dependents);

tiltontec.cell.integrity.ufb_assert_q_empty(cljs.core.cst$kw$change);

return result__11919__auto__;
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_13955;

tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR_13954;
}
}
}
}
});
