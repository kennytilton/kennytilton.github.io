// Compiled by ClojureScript 1.10.773 {}
goog.provide('taoensso.tufte.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.tufte.stats');

/**
* @constructor
*/
taoensso.tufte.impl.Time = (function (id,t){
this.id = id;
this.t = t;
});

(taoensso.tufte.impl.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.Time.cljs$lang$type = true);

(taoensso.tufte.impl.Time.cljs$lang$ctorStr = "taoensso.tufte.impl/Time");

(taoensso.tufte.impl.Time.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/Time");
}));

/**
 * Positional factory function for taoensso.tufte.impl/Time.
 */
taoensso.tufte.impl.__GT_Time = (function taoensso$tufte$impl$__GT_Time(id,t){
return (new taoensso.tufte.impl.Time(id,t));
});


/**
* @constructor
*/
taoensso.tufte.impl.TimeSpan = (function (t0,t1){
this.t0 = t0;
this.t1 = t1;
});

(taoensso.tufte.impl.TimeSpan.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.TimeSpan.cljs$lang$type = true);

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorStr = "taoensso.tufte.impl/TimeSpan");

(taoensso.tufte.impl.TimeSpan.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/TimeSpan");
}));

/**
 * Positional factory function for taoensso.tufte.impl/TimeSpan.
 */
taoensso.tufte.impl.__GT_TimeSpan = (function taoensso$tufte$impl$__GT_TimeSpan(t0,t1){
return (new taoensso.tufte.impl.TimeSpan(t0,t1));
});

var ret__4785__auto___32052 = taoensso.tufte.impl.mt_acc = (function taoensso$tufte$impl$mt_acc(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"LinkedList.","LinkedList.",1768362422,null),null,(1),null))))),null,(1),null)))));
});
(taoensso.tufte.impl.mt_acc.cljs$lang$macro = true);

var ret__4785__auto___32053 = taoensso.tufte.impl.mt_add = (function taoensso$tufte$impl$mt_add(_AMPERSAND_form,_AMPERSAND_env,mt,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,mt,null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".add",".add",874262363,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,mt,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"LinkedList","LinkedList",-77636189,null)], null)),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
(taoensso.tufte.impl.mt_add.cljs$lang$macro = true);

var ret__4785__auto___32054 = taoensso.tufte.impl.mt_count = (function taoensso$tufte$impl$mt_count(_AMPERSAND_form,_AMPERSAND_env,mt){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,mt,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".size",".size",-1531811384,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,mt,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"LinkedList","LinkedList",-77636189,null)], null)),null,(1),null))))),null,(1),null)))));
});
(taoensso.tufte.impl.mt_count.cljs$lang$macro = true);


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PStats = (function (pd,t1,tspans,realized_){
this.pd = pd;
this.t1 = t1;
this.tspans = tspans;
this.realized_ = realized_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(taoensso.tufte.impl.PStats.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized_);
}));

(taoensso.tufte.impl.PStats.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.realized_QMARK_.call(null,self__.realized_);
}));

(taoensso.tufte.impl.PStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pd","pd",1514324481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"t1","t1",1665503971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"tspans","tspans",451349869,null),new cljs.core.Symbol(null,"realized_","realized_",495032039,null)], null);
}));

(taoensso.tufte.impl.PStats.cljs$lang$type = true);

(taoensso.tufte.impl.PStats.cljs$lang$ctorStr = "taoensso.tufte.impl/PStats");

(taoensso.tufte.impl.PStats.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/PStats");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PStats.
 */
taoensso.tufte.impl.__GT_PStats = (function taoensso$tufte$impl$__GT_PStats(pd,t1,tspans,realized_){
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,realized_));
});


/**
* @constructor
*/
taoensso.tufte.impl.PState = (function (acc,id_times,id_stats){
this.acc = acc;
this.id_times = id_times;
this.id_stats = id_stats;
});

(taoensso.tufte.impl.PState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"id-times","id-times",-1251134881,null),new cljs.core.Symbol(null,"id-stats","id-stats",-1687089031,null)], null);
}));

(taoensso.tufte.impl.PState.cljs$lang$type = true);

(taoensso.tufte.impl.PState.cljs$lang$ctorStr = "taoensso.tufte.impl/PState");

(taoensso.tufte.impl.PState.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/PState");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PState.
 */
taoensso.tufte.impl.__GT_PState = (function taoensso$tufte$impl$__GT_PState(acc,id_times,id_stats){
return (new taoensso.tufte.impl.PState(acc,id_times,id_stats));
});


/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.impl.PData = (function (nmax,t0,pstate_){
this.nmax = nmax;
this.t0 = t0;
this.pstate_ = pstate_;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.impl.PData.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return taoensso.tufte.impl.deref_pdata.call(null,this$__$1);
}));

(taoensso.tufte.impl.PData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"nmax","nmax",-2045441365,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"t0","t0",-534273234,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"pstate_","pstate_",-1982806579,null)], null);
}));

(taoensso.tufte.impl.PData.cljs$lang$type = true);

(taoensso.tufte.impl.PData.cljs$lang$ctorStr = "taoensso.tufte.impl/PData");

(taoensso.tufte.impl.PData.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/PData");
}));

/**
 * Positional factory function for taoensso.tufte.impl/PData.
 */
taoensso.tufte.impl.__GT_PData = (function taoensso$tufte$impl$__GT_PData(nmax,t0,pstate_){
return (new taoensso.tufte.impl.PData(nmax,t0,pstate_));
});

taoensso.tufte.impl.new_pdata_local = (function taoensso$tufte$impl$new_pdata_local(nmax){
var t0 = taoensso.encore.now_nano.call(null);
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.volatile_BANG_.call(null,(new taoensso.tufte.impl.PState([],null,null)))));
});
taoensso.tufte.impl.new_pdata_dynamic = (function taoensso$tufte$impl$new_pdata_dynamic(nmax){
var t0 = taoensso.encore.now_nano.call(null);
return (new taoensso.tufte.impl.PData(nmax,t0,cljs.core.atom.call(null,(new taoensso.tufte.impl.PState(cljs.core.atom.call(null,null),null,null)))));
});
/**
 * PData->PStats
 */
taoensso.tufte.impl.deref_pdata = (function taoensso$tufte$impl$deref_pdata(pd){
var t1 = taoensso.encore.now_nano.call(null);
var t0 = pd.t0;
var tspans = (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan(t0,t1)),null,(1),null));
return (new taoensso.tufte.impl.PStats(pd,t1,tspans,(new cljs.core.Delay((function (){
return taoensso.tufte.impl.deref_pstats.call(null,pd,t1,tspans);
}),null))));
});
/**
 * nnil iff dynamic profiling active
 */
taoensso.tufte.impl._STAR_pdata_STAR_ = null;
var stack_32055 = [];
var pdata__32056 = cljs.core.volatile_BANG_.call(null,false);
taoensso.tufte.impl.pdata_local_get = (function taoensso$tufte$impl$pdata_local_get(){
return cljs.core.deref.call(null,pdata__32056);
});

taoensso.tufte.impl.pdata_local_pop = (function taoensso$tufte$impl$pdata_local_pop(){
var temp__5802__auto__ = stack_32055.pop();
if(cljs.core.truth_(temp__5802__auto__)){
var stashed = temp__5802__auto__;
return cljs.core.vreset_BANG_.call(null,pdata__32056,stashed);
} else {
return cljs.core.vreset_BANG_.call(null,pdata__32056,null);
}
});

taoensso.tufte.impl.pdata_local_push = (function taoensso$tufte$impl$pdata_local_push(v){
var temp__5802__auto__ = cljs.core.deref.call(null,pdata__32056);
if(cljs.core.truth_(temp__5802__auto__)){
var to_stash = temp__5802__auto__;
stack_32055.push(to_stash);

return cljs.core.vreset_BANG_.call(null,pdata__32056,v);
} else {
return cljs.core.vreset_BANG_.call(null,pdata__32056,v);
}
});

/**
* @constructor
*/
taoensso.tufte.impl.ElapsedTimeAcc = (function (tsum,max_t1){
this.tsum = tsum;
this.max_t1 = max_t1;
});

(taoensso.tufte.impl.ElapsedTimeAcc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"tsum","tsum",-52990159,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"max-t1","max-t1",314172921,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$type = true);

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorStr = "taoensso.tufte.impl/ElapsedTimeAcc");

(taoensso.tufte.impl.ElapsedTimeAcc.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.impl/ElapsedTimeAcc");
}));

/**
 * Positional factory function for taoensso.tufte.impl/ElapsedTimeAcc.
 */
taoensso.tufte.impl.__GT_ElapsedTimeAcc = (function taoensso$tufte$impl$__GT_ElapsedTimeAcc(tsum,max_t1){
return (new taoensso.tufte.impl.ElapsedTimeAcc(tsum,max_t1));
});

var sort_tspans_32057 = (function (tspans){
return cljs.core.sort_by.call(null,(function (tspan){
return tspan.t0;
}),tspans);
});
/**
 * Returns `tsum` (elapsed time) given collection of `TimeSpan`s.
 *  Based on https://codereview.stackexchange.com/a/126927.
 */
taoensso.tufte.impl.tspans__GT_tsum = (function taoensso$tufte$impl$tspans__GT_tsum(tspans){
if(cljs.core.empty_QMARK_.call(null,tspans)){
return (0);
} else {
var sorted_tspans = sort_tspans_32057.call(null,tspans);
return cljs.core.reduce.call(null,(function (acc,tspan){
var t1 = tspan.t1;
var max_t1 = acc.max_t1;
if((t1 > max_t1)){
var t0 = tspan.t0;
var tsum = acc.tsum;
return (new taoensso.tufte.impl.ElapsedTimeAcc((tsum + (t1 - Math.max(t0,max_t1))),t1));
} else {
return acc;
}
}),(new taoensso.tufte.impl.ElapsedTimeAcc((0),(0))),sorted_tspans).tsum;
}
});
taoensso.tufte.impl.merge_tspans = (function taoensso$tufte$impl$merge_tspans(nmax,t1,tspans0,tspans1){
var n0 = cljs.core.count.call(null,tspans0);
var n1 = cljs.core.count.call(null,tspans1);
var tspans2 = (((n1 > n0))?cljs.core.into.call(null,tspans1,tspans0):cljs.core.into.call(null,tspans0,tspans1));
if(((n0 + n1) > nmax)){
var tsum = taoensso.tufte.impl.tspans__GT_tsum.call(null,tspans2);
return (new cljs.core.List(null,(new taoensso.tufte.impl.TimeSpan((t1 - tsum),t1)),null,(1),null));
} else {
return tspans2;
}
});
/**
 * NB treats `from-times` as read-only (may be mutable `acc`)!
 */
taoensso.tufte.impl.times_into_id_times = (function taoensso$tufte$impl$times_into_id_times(to_id_times,from_times){
return cljs.core.not_empty.call(null,(function (){var temp__5802__auto__ = taoensso.encore.force_ref.call(null,from_times);
if(cljs.core.truth_(temp__5802__auto__)){
var from_times__$1 = temp__5802__auto__;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (m,in$){
var id = in$.id;
var t = in$.t;
return cljs.core.assoc_BANG_.call(null,m,id,cljs.core.conj.call(null,cljs.core.get.call(null,m,id),t));
}),cljs.core.transient$.call(null,(function (){var or__4126__auto__ = to_id_times;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),from_times__$1));
} else {
return to_id_times;
}
})());
});
/**
 * PStats->{:clock _ :stats {<id> <stats/stats>}} (API output)
 */
taoensso.tufte.impl.deref_pstats = (function taoensso$tufte$impl$deref_pstats(pd,t1,tspans){
var t0 = pd.t0;
var pstate_ = pd.pstate_;
var pstate = taoensso.encore.force_ref.call(null,pstate_);
var id_times = pstate.id_times;
var id_stats = pstate.id_stats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times.call(null,id_times,pstate.acc);
var id_stats__$1 = cljs.core.reduce_kv.call(null,(function (m,id,times){
var stats_LT_times = taoensso.tufte.stats.stats.call(null,times);
var merged = cljs.core.reduce.call(null,taoensso.tufte.stats.merge_stats,stats_LT_times,cljs.core.get.call(null,id_stats,id));
return cljs.core.assoc.call(null,m,id,merged);
}),id_times__$1,id_times__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stats","stats",-85643011),id_stats__$1,new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t0","t0",2120162535),t0,new cljs.core.Keyword(null,"t1","t1",24972444),t1,new cljs.core.Keyword(null,"total","total",1916810418),taoensso.tufte.impl.tspans__GT_tsum.call(null,tspans)], null)], null);
});
taoensso.tufte.impl.fast_into = (function taoensso$tufte$impl$fast_into(c0,c1){
if((cljs.core.count.call(null,c0) > cljs.core.count.call(null,c1))){
return cljs.core.into.call(null,c0,c1);
} else {
return cljs.core.into.call(null,c1,c0);
}
});
taoensso.tufte.impl.merge_stats_when_needed = (function taoensso$tufte$impl$merge_stats_when_needed(nmax,stats){
if((cljs.core.count.call(null,stats) <= nmax)){
return stats;
} else {
return (new cljs.core.List(null,cljs.core.reduce.call(null,taoensso.tufte.stats.merge_stats,stats),null,(1),null));
}
});
/**
 * Compacting merge
 */
taoensso.tufte.impl.merge_pstats = (function taoensso$tufte$impl$merge_pstats(var_args){
var G__32059 = arguments.length;
switch (G__32059) {
case 2:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.call(null,null,ps0,ps1);
}));

(taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$3 = (function (nmax,ps0,ps1){
if(cljs.core.truth_(ps0)){
if(cljs.core.truth_(ps1)){
var ps0__$1 = ps0;
var ps1__$1 = ps1;
var pd0 = ps0__$1.pd;
var pd1 = ps1__$1.pd;
var nmax__$1 = cljs.core.long$.call(null,(function (){var or__4126__auto__ = nmax;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pd0.nmax;
}
})());
var pd0_t0 = pd0.t0;
var ps0_t1 = ps0__$1.t1;
var pd1_t0 = pd1.t0;
var ps1_t1 = ps1__$1.t1;
var pd2_t0 = (((pd0_t0 < pd1_t0))?pd0_t0:pd1_t0);
var ps2_t1 = (((ps0_t1 > ps1_t1))?ps0_t1:ps1_t1);
var tspans2 = taoensso.tufte.impl.merge_tspans.call(null,nmax__$1,ps2_t1,ps0__$1.tspans,ps1__$1.tspans);
var pd0_pstate = taoensso.encore.force_ref.call(null,pd0.pstate_);
var pd1_pstate = taoensso.encore.force_ref.call(null,pd1.pstate_);
var pd0_id_times = taoensso.tufte.impl.times_into_id_times.call(null,pd0_pstate.id_times,pd0_pstate.acc);
var pd1_id_times = taoensso.tufte.impl.times_into_id_times.call(null,pd1_pstate.id_times,pd1_pstate.acc);
var pd0_id_stats = pd0_pstate.id_stats;
var pd1_id_stats = pd1_pstate.id_stats;
var pd2_ids = cljs.core.keys.call(null,cljs.core.conj.call(null,(function (){var or__4126__auto__ = pd0_id_times;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),pd1_id_times));
var vec__32060 = cljs.core.reduce.call(null,(function (p__32063,id){
var vec__32064 = p__32063;
var pd2_id_times = cljs.core.nth.call(null,vec__32064,(0),null);
var pd2_id_stats = cljs.core.nth.call(null,vec__32064,(1),null);
var pd0_times = cljs.core.get.call(null,pd0_id_times,id);
var pd0_stats = cljs.core.get.call(null,pd0_id_stats,id);
var pd1_times = cljs.core.get.call(null,pd1_id_times,id);
var pd1_stats = cljs.core.get.call(null,pd1_id_stats,id);
var pd2_times = taoensso.tufte.impl.fast_into.call(null,pd0_times,pd1_times);
var pd2_stats = taoensso.tufte.impl.fast_into.call(null,pd0_stats,pd1_stats);
if((cljs.core.count.call(null,pd2_times) <= nmax__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pd2_id_times,id,pd2_times),cljs.core.assoc.call(null,pd2_id_stats,id,pd2_stats)], null);
} else {
var stats_LT_times = taoensso.tufte.stats.stats.call(null,pd2_times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pd2_id_times,id,null),cljs.core.assoc.call(null,pd2_id_stats,id,taoensso.tufte.impl.merge_stats_when_needed.call(null,nmax__$1,cljs.core.conj.call(null,pd2_stats,stats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd0_id_times,pd0_id_stats], null),pd2_ids);
var pd2_id_times = cljs.core.nth.call(null,vec__32060,(0),null);
var pd2_id_stats = cljs.core.nth.call(null,vec__32060,(1),null);
var pd2 = (new taoensso.tufte.impl.PData(nmax__$1,pd2_t0,(new taoensso.tufte.impl.PState(null,pd2_id_times,pd2_id_stats))));
return (new taoensso.tufte.impl.PStats(pd2,ps2_t1,tspans2,(new cljs.core.Delay((function (){
return taoensso.tufte.impl.deref_pstats.call(null,pd2,ps2_t1,tspans2);
}),null))));
} else {
return ps0;
}
} else {
return ps1;
}
}));

(taoensso.tufte.impl.merge_pstats.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___32068 = taoensso.tufte.impl.atom_QMARK_ = (function taoensso$tufte$impl$atom_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","if-cljs","taoensso.encore/if-cljs",449826172,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs.core.Atom","cljs.core.Atom",-277403465,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"clojure.lang.Atom","clojure.lang.Atom",661742144,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
(taoensso.tufte.impl.atom_QMARK_.cljs$lang$macro = true);

taoensso.tufte.impl.capture_time_BANG_ = (function taoensso$tufte$impl$capture_time_BANG_(pd,id,ns_elapsed){
while(true){
var nmax = pd.nmax;
var pstate_ = pd.pstate_;
var pstate = cljs.core.deref.call(null,pstate_);
var acc = pstate.acc;
if((acc instanceof cljs.core.Atom)){
var _QMARK_pulled_times = (function (){while(true){
var old_times = cljs.core.deref.call(null,acc);
var new_times = cljs.core.conj.call(null,old_times,(new taoensso.tufte.impl.Time(id,ns_elapsed)));
if((cljs.core.count.call(null,new_times) <= nmax)){
if(cljs.core.compare_and_set_BANG_.call(null,acc,old_times,new_times)){
return null;
} else {
continue;
}
} else {
if(cljs.core.compare_and_set_BANG_.call(null,acc,old_times,null)){
return new_times;
} else {
continue;
}
}
break;
}
})();
var temp__5804__auto__ = _QMARK_pulled_times;
if(cljs.core.truth_(temp__5804__auto__)){
var times = temp__5804__auto__;
var t0 = taoensso.encore.now_nano.call(null);
cljs.core.swap_BANG_.call(null,pstate_,((function (pd,id,ns_elapsed,t0,times,temp__5804__auto__,_QMARK_pulled_times,nmax,pstate_,pstate,acc){
return (function (pstate__$1){
return taoensso.tufte.impl.compact_pstate.call(null,pstate__$1,times,nmax,true);
});})(pd,id,ns_elapsed,t0,times,temp__5804__auto__,_QMARK_pulled_times,nmax,pstate_,pstate,acc))
);

var G__32069 = pd;
var G__32070 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__32071 = (taoensso.encore.now_nano.call(null) - t0);
pd = G__32069;
id = G__32070;
ns_elapsed = G__32071;
continue;
} else {
return null;
}
} else {
acc.push((new taoensso.tufte.impl.Time(id,ns_elapsed)));

if((acc.length > nmax)){
var t0 = taoensso.encore.now_nano.call(null);
cljs.core.vreset_BANG_.call(null,pstate_,taoensso.tufte.impl.compact_pstate.call(null,pstate,acc,nmax,false));

var G__32072 = pd;
var G__32073 = new cljs.core.Keyword("tufte","compaction","tufte/compaction",357384907);
var G__32074 = (taoensso.encore.now_nano.call(null) - t0);
pd = G__32072;
id = G__32073;
ns_elapsed = G__32074;
continue;
} else {
return null;
}
}
break;
}
});
taoensso.tufte.impl.compact_pstate = (function taoensso$tufte$impl$compact_pstate(pstate,pulled_times,nmax,dynamic_QMARK_){
var id_times = pstate.id_times;
var id_stats = pstate.id_stats;
var id_times__$1 = taoensso.tufte.impl.times_into_id_times.call(null,id_times,pulled_times);
var vec__32075 = cljs.core.reduce_kv.call(null,(function (acc,id,times){
if((cljs.core.count.call(null,times) <= nmax)){
return acc;
} else {
var vec__32078 = acc;
var id_times__$2 = cljs.core.nth.call(null,vec__32078,(0),null);
var id_stats__$1 = cljs.core.nth.call(null,vec__32078,(1),null);
var stats_LT_times = taoensso.tufte.stats.stats.call(null,times);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,id_times__$2,id,null),cljs.core.assoc.call(null,id_stats__$1,id,taoensso.tufte.impl.merge_stats_when_needed.call(null,nmax,cljs.core.conj.call(null,cljs.core.get.call(null,id_stats__$1,id),stats_LT_times)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_times__$1,id_stats], null),id_times__$1);
var id_times__$2 = cljs.core.nth.call(null,vec__32075,(0),null);
var id_stats__$1 = cljs.core.nth.call(null,vec__32075,(1),null);
var new_acc = (cljs.core.truth_(dynamic_QMARK_)?pstate.acc:[]);
return (new taoensso.tufte.impl.PState(new_acc,id_times__$2,id_stats__$1));
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.tufte !== 'undefined') && (typeof taoensso.tufte.impl !== 'undefined') && (typeof taoensso.tufte.impl.handlers_ !== 'undefined')){
} else {
/**
 * {<hid> <handler-fn>}
 */
taoensso.tufte.impl.handlers_ = cljs.core.atom.call(null,null);
}
taoensso.tufte.impl.handle_blocking_BANG_ = (function taoensso$tufte$impl$handle_blocking_BANG_(m){
return taoensso.encore.run_kv_BANG_.call(null,(function (id,f){
try{return f.call(null,m);
}catch (e32081){var e = e32081;
try{return cljs.core.println.call(null,["WARNING: Uncaught Tufte `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"` handler error\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}catch (e32082){var __ = e32082;
return null;
}}}),cljs.core.deref.call(null,taoensso.tufte.impl.handlers_));
});
taoensso.tufte.impl.handle_BANG_ = (function taoensso$tufte$impl$handle_BANG_(m){
taoensso.tufte.impl.handle_blocking_BANG_.call(null,m);

return null;
});

//# sourceMappingURL=impl.js.map
