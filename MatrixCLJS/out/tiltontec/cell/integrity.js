// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.integrity');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_ = false;
tiltontec.cell.integrity._STAR_dp_log_STAR_ = false;
tiltontec.cell.integrity.data_pulse_next = (function tiltontec$cell$integrity$data_pulse_next(var_args){
var G__8865 = arguments.length;
switch (G__8865) {
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
return tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478));
});

tiltontec.cell.integrity.data_pulse_next.cljs$core$IFn$_invoke$arity$1 = (function (pulse_info){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
return null;
} else {
if(tiltontec.cell.integrity._STAR_dp_log_STAR_){
tiltontec.util.base.call_trc.call(null,"dp-next> ",(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) + (1)),pulse_info);
} else {
}

return cljs.core.swap_BANG_.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_,cljs.core.inc);
}
});

tiltontec.cell.integrity.data_pulse_next.cljs$lang$maxFixedArity = 1;

tiltontec.cell.integrity.c_current_QMARK_ = (function tiltontec$cell$integrity$c_current_QMARK_(c){
return cljs.core._EQ_.call(null,tiltontec.cell.base.c_pulse.call(null,c),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));
});
tiltontec.cell.integrity.c_pulse_update = (function tiltontec$cell$integrity$c_pulse_update(c,key){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) >= tiltontec.cell.base.c_pulse.call(null,c))){
} else {
throw (new Error("Assert failed: (>= (clojure.core/deref +pulse+) (c-pulse c))"));
}

return cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"pulse","pulse",-244494476),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));
}
});
tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),new cljs.core.Keyword(null,"awaken","awaken",-1899628152),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),new cljs.core.Keyword(null,"change","change",-1163046502)], null);
tiltontec.cell.integrity.unfin_biz = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7429__auto__ = (function tiltontec$cell$integrity$iter__8867(s__8868){
return (new cljs.core.LazySeq(null,(function (){
var s__8868__$1 = s__8868;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8868__$1);
if(temp__4657__auto__){
var s__8868__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8868__$2)){
var c__7427__auto__ = cljs.core.chunk_first.call(null,s__8868__$2);
var size__7428__auto__ = cljs.core.count.call(null,c__7427__auto__);
var b__8870 = cljs.core.chunk_buffer.call(null,size__7428__auto__);
if((function (){var i__8869 = (0);
while(true){
if((i__8869 < size__7428__auto__)){
var i = cljs.core._nth.call(null,c__7427__auto__,i__8869);
cljs.core.chunk_append.call(null,b__8870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null));

var G__8871 = (i__8869 + (1));
i__8869 = G__8871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8870),tiltontec$cell$integrity$iter__8867.call(null,cljs.core.chunk_rest.call(null,s__8868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8870),null);
}
} else {
var i = cljs.core.first.call(null,s__8868__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null),tiltontec$cell$integrity$iter__8867.call(null,cljs.core.rest.call(null,s__8868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__.call(null,tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_);
})());
tiltontec.cell.integrity.ufb_queue = (function tiltontec$cell$integrity$ufb_queue(opcode){
var or__6640__auto__ = opcode.call(null,tiltontec.cell.integrity.unfin_biz);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return tiltontec.util.core.err.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb-queue> opcode unknown: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode)].join(''));
}
});
tiltontec.cell.integrity.ufb_queue_ensure = (function tiltontec$cell$integrity$ufb_queue_ensure(opcode){

return tiltontec.cell.integrity.ufb_queue.call(null,opcode);
});
tiltontec.cell.integrity.ufb_add = (function tiltontec$cell$integrity$ufb_add(opcode,continuation){
return tiltontec.util.core.fifo_add.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,opcode),continuation);
});
tiltontec.cell.integrity.ufb_assert_q_empty = (function tiltontec$cell$integrity$ufb_assert_q_empty(opcode){
var temp__4655__auto__ = tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,opcode));
if(cljs.core.truth_(temp__4655__auto__)){
var uqp = temp__4655__auto__;
return tiltontec.util.core.err.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ufb queue %s not empty, viz %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uqp)].join(''));
} else {
return true;
}
});
tiltontec.cell.integrity._STAR_ufb_do_q_STAR_ = null;
tiltontec.cell.integrity.ufb_do = (function tiltontec$cell$integrity$ufb_do(var_args){
var G__8873 = arguments.length;
switch (G__8873) {
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
return tiltontec.cell.integrity.ufb_do.call(null,tiltontec.cell.integrity.ufb_queue.call(null,opcode),opcode);
});

tiltontec.cell.integrity.ufb_do.cljs$core$IFn$_invoke$arity$2 = (function (q,opcode){
while(true){
var temp__4657__auto__ = tiltontec.util.core.fifo_pop.call(null,q);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__8874 = temp__4657__auto__;
var defer_info = cljs.core.nth.call(null,vec__8874,(0),null);
var task = cljs.core.nth.call(null,vec__8874,(1),null);
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"ufb-do-yep","ufb-do-yep",-2077548937),defer_info,task);

task.call(null,opcode,defer_info);

var G__8878 = q;
var G__8879 = opcode;
q = G__8878;
opcode = G__8879;
continue;
} else {
return null;
}
break;
}
});

tiltontec.cell.integrity.ufb_do.cljs$lang$maxFixedArity = 2;

tiltontec.cell.integrity.finish_business = (function tiltontec$cell$integrity$finish_business(){
if(cljs.core.truth_(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
var tag = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
while(true){
var G__8880 = tag;
var G__8880__$1 = (((G__8880 instanceof cljs.core.Keyword))?G__8880.fqn:null);
switch (G__8880__$1) {
case "tell-dependents":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152));

var G__8885 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue_ensure.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388))))?new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388):new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173));
tag = G__8885;
continue;

break;
case "handle-clients":
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"handle-clients!!!!!","handle-clients!!!!!",-1474024132));

var temp__4657__auto__ = tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117));
if(cljs.core.truth_(temp__4657__auto__)){
var clientq = temp__4657__auto__;
var temp__4655__auto___8886 = cljs.core.deref.call(null,tiltontec.cell.base._PLUS_client_q_handler_PLUS_);
if(cljs.core.truth_(temp__4655__auto___8886)){
var cqh_8887 = temp__4655__auto___8886;
cqh_8887.call(null,clientq);
} else {
tiltontec.cell.integrity.ufb_do.call(null,clientq,new cljs.core.Keyword(null,"client","client",-1323448117));
}

var G__8888 = (cljs.core.truth_(tiltontec.util.core.fifo_peek.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"client","client",-1323448117))))?(function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"re-handling-clients!!!!","re-handling-clients!!!!",-1248166541));

return new cljs.core.Keyword(null,"handle-clients","handle-clients",-1446571173);
})()
:new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));
tag = G__8888;
continue;
} else {
return null;
}

break;
case "ephemeral-reset":
tiltontec.cell.integrity.ufb_do.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603));

var G__8889 = new cljs.core.Keyword(null,"deferred-state-change","deferred-state-change",-1362791478);
tag = G__8889;
continue;

break;
case "deferred-state-change":
var temp__4657__auto__ = tiltontec.util.core.fifo_pop.call(null,tiltontec.cell.integrity.ufb_queue.call(null,new cljs.core.Keyword(null,"change","change",-1163046502)));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__8881 = temp__4657__auto__;
var defer_info = cljs.core.nth.call(null,vec__8881,(0),null);
var task_fn = cljs.core.nth.call(null,vec__8881,(1),null);
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"def-state-chg","def-state-chg",1797246466));

task_fn.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),defer_info);

var G__8890 = new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388);
tag = G__8890;
continue;
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8880__$1)].join('')));

}
break;
}
}
});
var ret__7805__auto___8899 = (function (){
tiltontec.cell.integrity.with_integrity = (function tiltontec$cell$integrity$with_integrity(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8900 = arguments.length;
var i__7766__auto___8901 = (0);
while(true){
if((i__7766__auto___8901 < len__7765__auto___8900)){
args__7772__auto__.push((arguments[i__7766__auto___8901]));

var G__8902 = (i__7766__auto___8901 + (1));
i__7766__auto___8901 = G__8902;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8895,body){
var vec__8896 = p__8895;
var opcode = cljs.core.nth.call(null,vec__8896,(0),null);
var info = cljs.core.nth.call(null,vec__8896,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","call-with-integrity","tiltontec.cell.integrity/call-with-integrity",-729981427,null)),(function (){var x__7483__auto__ = opcode;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.integrity.with_integrity.cljs$lang$maxFixedArity = (3);

tiltontec.cell.integrity.with_integrity.cljs$lang$applyTo = (function (seq8891){
var G__8892 = cljs.core.first.call(null,seq8891);
var seq8891__$1 = cljs.core.next.call(null,seq8891);
var G__8893 = cljs.core.first.call(null,seq8891__$1);
var seq8891__$2 = cljs.core.next.call(null,seq8891__$1);
var G__8894 = cljs.core.first.call(null,seq8891__$2);
var seq8891__$3 = cljs.core.next.call(null,seq8891__$2);
return tiltontec.cell.integrity.with_integrity.cljs$core$IFn$_invoke$arity$variadic(G__8892,G__8893,G__8894,seq8891__$3);
});

return null;
})()
;
tiltontec.cell.integrity.with_integrity.cljs$lang$macro = true;

var ret__7805__auto___8903 = tiltontec.cell.integrity.with_cc = (function tiltontec$cell$integrity$with_cc(_AMPERSAND_form,_AMPERSAND_env,id,_AMPERSAND_body,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),(function (){var x__7483__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});
tiltontec.cell.integrity.with_cc.cljs$lang$macro = true;

var ret__7805__auto___8907 = (function (){
tiltontec.cell.integrity.without_integrity = (function tiltontec$cell$integrity$without_integrity(var_args){
var args__7772__auto__ = [];
var len__7765__auto___8908 = arguments.length;
var i__7766__auto___8909 = (0);
while(true){
if((i__7766__auto___8909 < len__7765__auto___8908)){
args__7772__auto__.push((arguments[i__7766__auto___8909]));

var G__8910 = (i__7766__auto___8909 + (1));
i__7766__auto___8909 = G__8910;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*within-integrity*","tiltontec.cell.base/*within-integrity*",1558744567,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*defer-changes*","tiltontec.cell.base/*defer-changes*",405681033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","*call-stack*","tiltontec.cell.integrity/*call-stack*",1793416916,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});

tiltontec.cell.integrity.without_integrity.cljs$lang$maxFixedArity = (2);

tiltontec.cell.integrity.without_integrity.cljs$lang$applyTo = (function (seq8904){
var G__8905 = cljs.core.first.call(null,seq8904);
var seq8904__$1 = cljs.core.next.call(null,seq8904);
var G__8906 = cljs.core.first.call(null,seq8904__$1);
var seq8904__$2 = cljs.core.next.call(null,seq8904__$1);
return tiltontec.cell.integrity.without_integrity.cljs$core$IFn$_invoke$arity$variadic(G__8905,G__8906,seq8904__$2);
});

return null;
})()
;
tiltontec.cell.integrity.without_integrity.cljs$lang$macro = true;

tiltontec.cell.integrity.call_with_integrity = (function tiltontec$cell$integrity$call_with_integrity(opcode,defer_info,action){
if(cljs.core.truth_(opcode)){
if(cljs.core.truth_(tiltontec.util.core.cl_find.call(null,opcode,tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid opcode for with-integrity: %s. Allowed values: %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.integrity._PLUS_ufb_opcodes_PLUS_)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(cl-find opcode +ufb-opcodes+)")].join('')));
}
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,tiltontec.cell.base._PLUS_stop_PLUS_))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_stopped.call(null))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"cwi-sees-stop!!!!!!!!!!!","cwi-sees-stop!!!!!!!!!!!",-1009254623));
} else {
if(tiltontec.cell.base._STAR_within_integrity_STAR_){
if(cljs.core.truth_(opcode)){
var result__8288__auto__ = new cljs.core.Keyword(null,"deferred-to-ufb-1","deferred-to-ufb-1",-1094275721);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"cwi","cwi",1748296377),new cljs.core.Keyword(null,"defers","defers",-187510750),opcode,cljs.core.first.call(null,tiltontec.util.core.ensure_vec.call(null,defer_info)));

tiltontec.cell.integrity.ufb_add.call(null,opcode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defer_info,action], null));

return result__8288__auto__;
} else {
return action.call(null,opcode,defer_info);
}
} else {
var _STAR_within_integrity_STAR_8911 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_defer_changes_STAR_8912 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_within_integrity_STAR_ = true;

tiltontec.cell.base._STAR_defer_changes_STAR_ = false;

try{if(((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) === (0))) || (cljs.core._EQ_.call(null,opcode,new cljs.core.Keyword(null,"change","change",-1163046502)))){
tiltontec.cell.integrity.data_pulse_next.call(null,new cljs.core.Keyword(null,"cwi","cwi",1748296377));
} else {
}

var result__8288__auto__ = action.call(null,opcode,defer_info);
tiltontec.cell.integrity.finish_business.call(null);

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388));

tiltontec.cell.integrity.ufb_assert_q_empty.call(null,new cljs.core.Keyword(null,"change","change",-1163046502));

return result__8288__auto__;
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_8912;

tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR_8911;
}
}
}
}
});

//# sourceMappingURL=integrity.js.map