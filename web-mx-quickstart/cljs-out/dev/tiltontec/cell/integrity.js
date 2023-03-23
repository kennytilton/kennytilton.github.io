// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
(cljs.core._STAR_print_level_STAR_ = (3));
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__19371 = arguments.length;
switch (G__19371) {
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
return tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478));
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(cljs.core.truth_(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_)){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_dp_log_STAR_)){
tiltontec.util.base.call_trc.call(null,"dp-next> ",(cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_) + (1)),pulse_info);
} else {
}

return cljs.core.swap_BANG_.call(null,tiltontec.cell.base._STAR_pulse_STAR_,cljs.core.inc);
}
}));

(tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1);

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
var and__4115__auto__ = tiltontec.cell.base.c_pulse.call(null,c);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,tiltontec.cell.base.c_pulse.call(null,c),cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_));
} else {
return and__4115__auto__;
}
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)){
return null;
} else {
if((((tiltontec.cell.base.c_pulse.call(null,c) == null)) || ((cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_) >= tiltontec.cell.base.c_pulse.call(null,c))))){
} else {
throw (new Error("Assert failed: (or (nil? (c-pulse c)) (>= (clojure.core/deref *pulse*) (c-pulse c)))"));
}

return cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"pulse","pulse",-244494476),cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_));
}
});
tiltontec.cell.integrity.ufb_counts = (function tiltontec$cell$integrity$ufb_counts(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$cell$integrity$ufb_counts_$_iter__19373(s__19374){
return (new cljs.core.LazySeq(null,(function (){
var s__19374__$1 = s__19374;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19374__$1);
if(temp__5804__auto__){
var s__19374__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19374__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19374__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19376 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19375 = (0);
while(true){
if((i__19375 < size__4528__auto__)){
var vec__19377 = cljs.core._nth.call(null,c__4527__auto__,i__19375);
var k = cljs.core.nth.call(null,vec__19377,(0),null);
var v = cljs.core.nth.call(null,vec__19377,(1),null);
cljs.core.chunk_append.call(null,b__19376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count.call(null,cljs.core.deref.call(null,v))], null));

var G__19383 = (i__19375 + (1));
i__19375 = G__19383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19376),tiltontec$cell$integrity$ufb_counts_$_iter__19373.call(null,cljs.core.chunk_rest.call(null,s__19374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19376),null);
}
} else {
var vec__19380 = cljs.core.first.call(null,s__19374__$2);
var k = cljs.core.nth.call(null,vec__19380,(0),null);
var v = cljs.core.nth.call(null,vec__19380,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count.call(null,cljs.core.deref.call(null,v))], null),tiltontec$cell$integrity$ufb_counts_$_iter__19373.call(null,cljs.core.rest.call(null,s__19374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tiltontec.cell.base._STAR_unfinished_business_STAR_);
})());
});
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__4126__auto__ = opcode.call(null,tiltontec.cell.base._STAR_unfinished_business_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tiltontec.util.core.err.call(null,["ufb-queue> opcode unknown: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join(''));
}
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add.call(null,tiltontec.cell.integrity.ufb_queue.call(null,opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__5802__auto__ = tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue.call(null,opcode));
if(cljs.core.truth_(temp__5802__auto__)){
var uqp = temp__5802__auto__;
return tiltontec.util.core.err.call(null,"ufb queue %s not empty, viz %s",opcode,uqp);
} else {
return true;
}
});
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__19385 = arguments.length;
switch (G__19385) {
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
return tiltontec.cell.integrity.ufb_do.call(null,tiltontec.cell.integrity.ufb_queue.call(null,opcode),opcode);
}));

(tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__5804__auto__ = tiltontec.util.core.fifo_pop.call(null,q);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__19386 = temp__5804__auto__;
var defer_info = cljs.core.nth.call(null,vec__19386,(0),null);
var task = cljs.core.nth.call(null,vec__19386,(1),null);
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"ufb-do-yep","ufb-do-yep",-2077548937),defer_info,task);

task.call(null,opcode,defer_info);

var G__19390 = q;
var G__19391 = opcode;
q = G__19390;
opcode = G__19391;
continue;
} else {
return null;
}
break;
}
}));

(tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2);

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
while(true){
var G__19392 = tag;
var G__19392__$1 = (((G__19392 instanceof cljs.core.Keyword))?G__19392.fqn:null);
switch (G__19392__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152));

var G__19397 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388))))?new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388):new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173));
tag = G__19397;
continue;

break;
case "handle-clients":
tiltontec.util.core.plnk.call(null,new cljs.core.Keyword(null,"handle-clients!!!","handle-clients!!!",-884819601));

var temp__5804__auto__ = tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117));
if(cljs.core.truth_(temp__5804__auto__)){
var clientq = temp__5804__auto__;
var temp__5802__auto___19398 = cljs.core.deref.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__5802__auto___19398)){
var cqh_19399 = temp__5802__auto___19398;
cqh_19399.call(null,clientq);
} else {
tiltontec.cell.integrity.ufb_do.call(null,clientq,new cljs.core.Keyword(null,"client","client",-1323448117));
}

var G__19400 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117))))?(function (){
tiltontec.util.core.plnk.call(null,new cljs.core.Keyword(null,"re-handling-clients!!!!","re-handling-clients!!!!",-1248166541));

return new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173);
})()
:new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));
tag = G__19400;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));

var G__19401 = new cljs.core.Keyword(null,"deferred-state-change","deferred-state-change",-1362791478);
tag = G__19401;
continue;

break;
case "deferred-state-change":
var temp__5804__auto__ = tiltontec.util.core.fifo_pop.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"change","change",-1163046502)));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__19393 = temp__5804__auto__;
var defer_info = cljs.core.nth.call(null,vec__19393,(0),null);
var task_fn = cljs.core.nth.call(null,vec__19393,(1),null);
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"defferred-state-chg","defferred-state-chg",-147686539));

task_fn.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),defer_info);

var G__19402 = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
tag = G__19402;
continue;
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19392__$1)].join('')));

}
break;
}
}
});
var ret__4785__auto___19411 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19412 = arguments.length;
var i__4737__auto___19413 = (0);
while(true){
if((i__4737__auto___19413 < len__4736__auto___19412)){
args__4742__auto__.push((arguments[i__4737__auto___19413]));

var G__19414 = (i__4737__auto___19413 + (1));
i__4737__auto___19413 = G__19414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19407,body){
var vec__19408 = p__19407;
var opcode = cljs.core.nth.call(null,vec__19408,(0),null);
var info = cljs.core.nth.call(null,vec__19408,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.integrity","call-with-integrity","tiltontec.cell.integrity/call-with-integrity",-729981427,null),null,(1),null)),(new cljs.core.List(null,opcode,null,(1),null)),(new cljs.core.List(null,info,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"opcode","opcode",311089360,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq19403){
var G__19404 = cljs.core.first.call(null,seq19403);
var seq19403__$1 = cljs.core.next.call(null,seq19403);
var G__19405 = cljs.core.first.call(null,seq19403__$1);
var seq19403__$2 = cljs.core.next.call(null,seq19403__$1);
var G__19406 = cljs.core.first.call(null,seq19403__$2);
var seq19403__$3 = cljs.core.next.call(null,seq19403__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19404,G__19405,G__19406,seq19403__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true);

var ret__4785__auto___19419 = (function (){
tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19420 = arguments.length;
var i__4737__auto___19421 = (0);
while(true){
if((i__4737__auto___19421 < len__4736__auto___19420)){
args__4742__auto__.push((arguments[i__4737__auto___19421]));

var G__19422 = (i__4737__auto___19421 + (1));
i__4737__auto___19421 = G__19422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_cc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"change","change",-1163046502),null,(1),null)),(new cljs.core.List(null,id,null,(1),null))))),null,(1),null)),body)));
}));

(tiltontec.cell.integrity.with_cc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_cc.cljs$lang$applyTo = (function (seq19415){
var G__19416 = cljs.core.first.call(null,seq19415);
var seq19415__$1 = cljs.core.next.call(null,seq19415);
var G__19417 = cljs.core.first.call(null,seq19415__$1);
var seq19415__$2 = cljs.core.next.call(null,seq19415__$1);
var G__19418 = cljs.core.first.call(null,seq19415__$2);
var seq19415__$3 = cljs.core.next.call(null,seq19415__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19416,G__19417,G__19418,seq19415__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_cc.cljs$lang$macro = true);

var ret__4785__auto___19426 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19427 = arguments.length;
var i__4737__auto___19428 = (0);
while(true){
if((i__4737__auto___19428 < len__4736__auto___19427)){
args__4742__auto__.push((arguments[i__4737__auto___19428]));

var G__19429 = (i__4737__auto___19428 + (1));
i__4737__auto___19428 = G__19429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*within-integrity*","tiltontec.cell.base/*within-integrity*",1558744567,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*defer-changes*","tiltontec.cell.base/*defer-changes*",405681033,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.integrity","*call-stack*","tiltontec.cell.integrity/*call-stack*",1793416916,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
}));

(tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq19423){
var G__19424 = cljs.core.first.call(null,seq19423);
var seq19423__$1 = cljs.core.next.call(null,seq19423);
var G__19425 = cljs.core.first.call(null,seq19423__$1);
var seq19423__$2 = cljs.core.next.call(null,seq19423__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19424,G__19425,seq19423__$2);
}));

return null;
})()
;
(tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true);

var ret__4785__auto___19434 = (function (){
tiltontec.cell.integrity.with_async_change = (function tiltontec$cell$integrity$with_async_change(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19435 = arguments.length;
var i__4737__auto___19436 = (0);
while(true){
if((i__4737__auto___19436 < len__4736__auto___19435)){
args__4742__auto__.push((arguments[i__4737__auto___19436]));

var G__19437 = (i__4737__auto___19436 + (1));
i__4737__auto___19436 = G__19437;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_async_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.integrity.with_async_change.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,id,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*within-integrity*","tiltontec.cell.base/*within-integrity*",1558744567,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*defer-changes*","tiltontec.cell.base/*defer-changes*",405681033,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.integrity","*call-stack*","tiltontec.cell.integrity/*call-stack*",1793416916,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"change","change",-1163046502),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.integrity.with_async_change.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.integrity.with_async_change.cljs$lang$applyTo = (function (seq19430){
var G__19431 = cljs.core.first.call(null,seq19430);
var seq19430__$1 = cljs.core.next.call(null,seq19430);
var G__19432 = cljs.core.first.call(null,seq19430__$1);
var seq19430__$2 = cljs.core.next.call(null,seq19430__$1);
var G__19433 = cljs.core.first.call(null,seq19430__$2);
var seq19430__$3 = cljs.core.next.call(null,seq19430__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19431,G__19432,G__19433,seq19430__$3);
}));

return null;
})()
;
(tiltontec.cell.integrity.with_async_change.cljs$lang$macro = true);

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(tiltontec.cell.base._STAR_within_integrity_STAR_)){
if(cljs.core.truth_(opcode)){
var result__9539__auto__ = new cljs.core.Keyword(null,"deferred-to-ufb-1","deferred-to-ufb-1",-1094275721);
tiltontec.cell.integrity.ufb_add.call(null,opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__9539__auto__;
} else {
return action.call(null,opcode,defer_info);
}
} else {
var _STAR_within_integrity_STAR__orig_val__19438 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR__orig_val__19439 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_within_integrity_STAR__temp_val__19440 = true;
var _STAR_defer_changes_STAR__temp_val__19441 = false;
(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__19440);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__19441);

try{if((((cljs.core.deref.call(null,tiltontec.cell.base._STAR_pulse_STAR_) === (0))) || (cljs.core._EQ_.call(null,opcode,new cljs.core.Keyword(null,"change","change",-1163046502))))){
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cwi","cwi",1748296377),opcode,defer_info], null));
} else {
}

var result__9539__auto__ = action.call(null,opcode,defer_info);
tiltontec.cell.integrity.finish_business.call(null);

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

return result__9539__auto__;
}finally {(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__19439);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__19438);
}
}
});

//# sourceMappingURL=integrity.js.map
