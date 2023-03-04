// Compiled by ClojureScript 1.10.773 {}
goog.provide('taoensso.tufte.stats');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('goog.array');

/**
* @constructor
 * @implements {cljs.core.ICounted}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sort_longs = (function taoensso$tufte$stats$sort_longs(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_.call(null,longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_.call(null,longs))?longs:cljs.core.to_array.call(null,longs));
goog.array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs.call(null,longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[Math.round((0.25 * max_idx))]),(a[Math.round((0.5 * max_idx))]),(a[Math.round((0.75 * max_idx))]),(a[Math.round((0.9 * max_idx))]),(a[Math.round((0.95 * max_idx))]),(a[Math.round((0.99 * max_idx))]),(a[max_idx])], null);
}
});

/**
* @constructor
*/
taoensso.tufte.stats.MinMax = (function (vmin,vmax){
this.vmin = vmin;
this.vmax = vmax;
});

(taoensso.tufte.stats.MinMax.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vmin","vmin",2087078343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vmax","vmax",205317983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte.stats/MinMax");
}));

/**
 * Positional factory function for taoensso.tufte.stats/MinMax.
 */
taoensso.tufte.stats.__GT_MinMax = (function taoensso$tufte$stats$__GT_MinMax(vmin,vmax){
return (new taoensso.tufte.stats.MinMax(vmin,vmax));
});

/**
 * Returns ?[<min> <max>]
 */
taoensso.tufte.stats.min_max = (function taoensso$tufte$stats$min_max(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_.call(null,longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count.call(null,longs) === (0))){
return null;
} else {
var vec__19849 = longs;
var v1 = cljs.core.nth.call(null,vec__19849,(0),null);
var min_max = cljs.core.reduce.call(null,(function (acc,in$){
var vmin = acc.vmin;
var vmax = acc.vmax;
if((in$ > vmax)){
return (new taoensso.tufte.stats.MinMax(vmin,in$));
} else {
if((in$ < vmin)){
return (new taoensso.tufte.stats.MinMax(in$,vmin));
} else {
return acc;
}
}
}),(new taoensso.tufte.stats.MinMax(v1,v1)),longs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_max.vmin,min_max.vmax], null);
}
}
});
/**
 * Given a collection of longs, returns map with keys:
 *   #{:n :min :max :sum :mean :mad-sum :mad :p25 :p50 :p75 :p90 :p95 :p99}, or nil
 *   if collection is empty.
 */
taoensso.tufte.stats.stats = (function taoensso$tufte$stats$stats(longs){
if(cljs.core.truth_(longs)){
var sorted_longs = taoensso.tufte.stats.sort_longs.call(null,longs);
var a = sorted_longs.a;
var n = a.length;
if((n === (0))){
return null;
} else {
var sum = (function (){var a__4610__auto__ = a;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var acc = (0);
while(true){
if((i < l__4611__auto__)){
var G__19855 = (i + (1));
var G__19856 = (acc + (a[i]));
i = G__19855;
acc = G__19856;
continue;
} else {
return acc;
}
break;
}
})();
var mean = (sum / n);
var mad_sum = (function (){var a__4610__auto__ = a;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var acc = 0.0;
while(true){
if((i < l__4611__auto__)){
var G__19857 = (i + (1));
var G__19858 = (acc + Math.abs(((a[i]) - mean)));
i = G__19857;
acc = G__19858;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__19852 = taoensso.tufte.stats.long_percentiles.call(null,sorted_longs);
var vmin = cljs.core.nth.call(null,vec__19852,(0),null);
var p25 = cljs.core.nth.call(null,vec__19852,(1),null);
var p50 = cljs.core.nth.call(null,vec__19852,(2),null);
var p75 = cljs.core.nth.call(null,vec__19852,(3),null);
var p90 = cljs.core.nth.call(null,vec__19852,(4),null);
var p95 = cljs.core.nth.call(null,vec__19852,(5),null);
var p99 = cljs.core.nth.call(null,vec__19852,(6),null);
var vmax = cljs.core.nth.call(null,vec__19852,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
}
} else {
return null;
}
});
/**
 * `(merge-stats (stats c0) (stats c1))` is a basic approximation of `(stats (into c0 c1)))`.
 */
taoensso.tufte.stats.merge_stats = (function taoensso$tufte$stats$merge_stats(m0,m1){
if(cljs.core.truth_(m0)){
if(cljs.core.truth_(m1)){
var _ = (cljs.core.truth_(cljs.core.get.call(null,m0,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.call(null,m1,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__19859 = m0;
var map__19859__$1 = (((((!((map__19859 == null))))?(((((map__19859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19859):map__19859);
var p99_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var sum0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p90_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"max","max",61366548));
var p25_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var n0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p75_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var p95_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var mad_sum0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var min0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_0 = cljs.core.get.call(null,map__19859__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var map__19860 = m1;
var map__19860__$1 = (((((!((map__19860 == null))))?(((((map__19860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19860):map__19860);
var p95_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var sum1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var n1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"n","n",562130025));
var max1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mad_sum1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p75_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var min1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var p99_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var p25_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90_1 = cljs.core.get.call(null,map__19860__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var ___$2 = (((n0 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n0)"))})());
var ___$3 = (((n1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n1)"))})());
var n2 = (n1 + n0);
var n0_ratio = (n0 / n2);
var n1_ratio = (n1 / n2);
var sum2 = (sum0 + sum1);
var mean2 = (sum2 / n2);
var min2 = (((min0 < min1))?min0:min1);
var max2 = (((max0 > max1))?max0:max1);
var mad_sum2 = (mad_sum0 + mad_sum1);
var p25_2 = Math.round(((n0_ratio * p25_0) + (n1_ratio * p25_1)));
var p50_2 = Math.round(((n0_ratio * p50_0) + (n1_ratio * p50_1)));
var p75_2 = Math.round(((n0_ratio * p75_0) + (n1_ratio * p75_1)));
var p90_2 = Math.round(((n0_ratio * p90_0) + (n1_ratio * p90_1)));
var p95_2 = Math.round(((n0_ratio * p95_0) + (n1_ratio * p95_1)));
var p99_2 = Math.round(((n0_ratio * p99_0) + (n1_ratio * p99_1)));
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((n / d) * 100.0))),"%"].join('');
});
taoensso.tufte.stats.fmt_2f = (function taoensso$tufte$stats$fmt_2f(n){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2.call(null,n));
});
taoensso.tufte.stats.fmt_calls = (function taoensso$tufte$stats$fmt_calls(n){
return [(((n < (0)))?"-":null),clojure.string.reverse.call(null,clojure.string.join.call(null,",",cljs.core.map.call(null,clojure.string.join,cljs.core.partition.call(null,(3),(3),"",cljs.core.reverse.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.fmt_nano = (function taoensso$tufte$stats$fmt_nano(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [taoensso.tufte.stats.fmt_2f.call(null,(ns / 6.0E10)),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [taoensso.tufte.stats.fmt_2f.call(null,(ns / 1.0E9)),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [taoensso.tufte.stats.fmt_2f.call(null,(ns / 1000000.0)),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [taoensso.tufte.stats.fmt_2f.call(null,(ns / 1000.0)),"\u03BCs"].join('');
} else {
return [taoensso.tufte.stats.fmt_2f.call(null,ns),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__19863){
var map__19864 = p__19863;
var map__19864__$1 = (((((!((map__19864 == null))))?(((((map__19864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19864):map__19864);
var format_id_fn = cljs.core.get.call(null,map__19864__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var c = cljs.core.count.call(null,format_id_fn.call(null,k));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),stats);
} else {
return null;
}
});
/**
 * Returns a formatted table string for given `{<id> <stats>}` map.
 *   Assumes nanosecond clock, stats based on profiling id'd nanosecond times.
 */
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__19866){
var map__19867 = p__19866;
var map__19867__$1 = (((((!((map__19867 == null))))?(((((map__19867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19867):map__19867);
var opts = map__19867__$1;
var columns = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (m){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.call(null,map__19867__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_.call(null,(function (__in){
var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,taoensso.tufte.stats.all_format_columns),x);
}).call(null,__in)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e19869){if((e19869 instanceof Error)){
var e = e19869;
return e;
} else {
throw e19869;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tufte.stats",283,"([:el all-format-columns] __in)",__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$.call(null,clock_total);
var accounted_total = cljs.core.reduce_kv.call(null,(function (acc,_id,s){
return (acc + cljs.core.long$.call(null,cljs.core.get.call(null,s,new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.call(null,(function (id){
return sort_fn.call(null,cljs.core.get.call(null,id_stats,id));
}),taoensso.encore.rcompare,cljs.core.keys.call(null,id_stats));
var max_id_width__$1 = (function (){var or__4126__auto__ = max_id_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width.call(null,id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.call(null,"");
var append_col = (function (column,s){
var map__19870 = cljs.core.get.call(null,column__GT_pattern,column);
var map__19870__$1 = (((((!((map__19870 == null))))?(((((map__19870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19870):map__19870);
var min_width = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.call(null,sb,taoensso.encore.format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19873 = align;
var G__19873__$1 = (((G__19873 instanceof cljs.core.Keyword))?G__19873.fqn:null);
switch (G__19873__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19873__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),s));
});
var seq__19874_19931 = cljs.core.seq.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns));
var chunk__19875_19932 = null;
var count__19876_19933 = (0);
var i__19877_19934 = (0);
while(true){
if((i__19877_19934 < count__19876_19933)){
var column_19935 = cljs.core._nth.call(null,chunk__19875_19932,i__19877_19934);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),column_19935)){
} else {
taoensso.encore.sb_append.call(null,sb," ");
}

append_col.call(null,column_19935,cljs.core.get_in.call(null,column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19935,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__19936 = seq__19874_19931;
var G__19937 = chunk__19875_19932;
var G__19938 = count__19876_19933;
var G__19939 = (i__19877_19934 + (1));
seq__19874_19931 = G__19936;
chunk__19875_19932 = G__19937;
count__19876_19933 = G__19938;
i__19877_19934 = G__19939;
continue;
} else {
var temp__5804__auto___19940 = cljs.core.seq.call(null,seq__19874_19931);
if(temp__5804__auto___19940){
var seq__19874_19941__$1 = temp__5804__auto___19940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19874_19941__$1)){
var c__4556__auto___19942 = cljs.core.chunk_first.call(null,seq__19874_19941__$1);
var G__19943 = cljs.core.chunk_rest.call(null,seq__19874_19941__$1);
var G__19944 = c__4556__auto___19942;
var G__19945 = cljs.core.count.call(null,c__4556__auto___19942);
var G__19946 = (0);
seq__19874_19931 = G__19943;
chunk__19875_19932 = G__19944;
count__19876_19933 = G__19945;
i__19877_19934 = G__19946;
continue;
} else {
var column_19947 = cljs.core.first.call(null,seq__19874_19941__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),column_19947)){
} else {
taoensso.encore.sb_append.call(null,sb," ");
}

append_col.call(null,column_19947,cljs.core.get_in.call(null,column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19947,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__19948 = cljs.core.next.call(null,seq__19874_19941__$1);
var G__19949 = null;
var G__19950 = (0);
var G__19951 = (0);
seq__19874_19931 = G__19948;
chunk__19875_19932 = G__19949;
count__19876_19933 = G__19950;
i__19877_19934 = G__19951;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n\n");

var seq__19878_19952 = cljs.core.seq.call(null,sorted_ids);
var chunk__19879_19953 = null;
var count__19880_19954 = (0);
var i__19881_19955 = (0);
while(true){
if((i__19881_19955 < count__19880_19954)){
var id_19956 = cljs.core._nth.call(null,chunk__19879_19953,i__19881_19955);
var s_19957 = cljs.core.get.call(null,id_stats,id_19956);
var sum_19958 = cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_19959 = cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),format_id_fn.call(null,id_19956));

var seq__19898_19960 = cljs.core.seq.call(null,columns);
var chunk__19899_19961 = null;
var count__19900_19962 = (0);
var i__19901_19963 = (0);
while(true){
if((i__19901_19963 < count__19900_19962)){
var column_19964 = cljs.core._nth.call(null,chunk__19899_19961,i__19901_19963);
taoensso.encore.sb_append.call(null,sb," ");

var G__19904_19965 = column_19964;
var G__19904_19966__$1 = (((G__19904_19965 instanceof cljs.core.Keyword))?G__19904_19965.fqn:null);
switch (G__19904_19966__$1) {
case "n-calls":
append_col.call(null,column_19964,taoensso.tufte.stats.fmt_calls.call(null,cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col.call(null,column_19964,taoensso.tufte.stats.fmt_nano.call(null,mean_19959));

break;
case "mad":
append_col.call(null,column_19964,["\u00B1",taoensso.tufte.stats.perc.call(null,cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_19959)].join(''));

break;
case "total":
append_col.call(null,column_19964,taoensso.tufte.stats.perc.call(null,sum_19958,clock_total__$1));

break;
case "clock":
append_col.call(null,column_19964,taoensso.tufte.stats.fmt_nano.call(null,sum_19958));

break;
default:
append_col.call(null,column_19964,taoensso.tufte.stats.fmt_nano.call(null,cljs.core.get.call(null,s_19957,column_19964)));

}


var G__19968 = seq__19898_19960;
var G__19969 = chunk__19899_19961;
var G__19970 = count__19900_19962;
var G__19971 = (i__19901_19963 + (1));
seq__19898_19960 = G__19968;
chunk__19899_19961 = G__19969;
count__19900_19962 = G__19970;
i__19901_19963 = G__19971;
continue;
} else {
var temp__5804__auto___19972 = cljs.core.seq.call(null,seq__19898_19960);
if(temp__5804__auto___19972){
var seq__19898_19973__$1 = temp__5804__auto___19972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19898_19973__$1)){
var c__4556__auto___19974 = cljs.core.chunk_first.call(null,seq__19898_19973__$1);
var G__19975 = cljs.core.chunk_rest.call(null,seq__19898_19973__$1);
var G__19976 = c__4556__auto___19974;
var G__19977 = cljs.core.count.call(null,c__4556__auto___19974);
var G__19978 = (0);
seq__19898_19960 = G__19975;
chunk__19899_19961 = G__19976;
count__19900_19962 = G__19977;
i__19901_19963 = G__19978;
continue;
} else {
var column_19979 = cljs.core.first.call(null,seq__19898_19973__$1);
taoensso.encore.sb_append.call(null,sb," ");

var G__19905_19980 = column_19979;
var G__19905_19981__$1 = (((G__19905_19980 instanceof cljs.core.Keyword))?G__19905_19980.fqn:null);
switch (G__19905_19981__$1) {
case "n-calls":
append_col.call(null,column_19979,taoensso.tufte.stats.fmt_calls.call(null,cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col.call(null,column_19979,taoensso.tufte.stats.fmt_nano.call(null,mean_19959));

break;
case "mad":
append_col.call(null,column_19979,["\u00B1",taoensso.tufte.stats.perc.call(null,cljs.core.get.call(null,s_19957,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_19959)].join(''));

break;
case "total":
append_col.call(null,column_19979,taoensso.tufte.stats.perc.call(null,sum_19958,clock_total__$1));

break;
case "clock":
append_col.call(null,column_19979,taoensso.tufte.stats.fmt_nano.call(null,sum_19958));

break;
default:
append_col.call(null,column_19979,taoensso.tufte.stats.fmt_nano.call(null,cljs.core.get.call(null,s_19957,column_19979)));

}


var G__19983 = cljs.core.next.call(null,seq__19898_19973__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__19898_19960 = G__19983;
chunk__19899_19961 = G__19984;
count__19900_19962 = G__19985;
i__19901_19963 = G__19986;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n");


var G__19987 = seq__19878_19952;
var G__19988 = chunk__19879_19953;
var G__19989 = count__19880_19954;
var G__19990 = (i__19881_19955 + (1));
seq__19878_19952 = G__19987;
chunk__19879_19953 = G__19988;
count__19880_19954 = G__19989;
i__19881_19955 = G__19990;
continue;
} else {
var temp__5804__auto___19991 = cljs.core.seq.call(null,seq__19878_19952);
if(temp__5804__auto___19991){
var seq__19878_19992__$1 = temp__5804__auto___19991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19878_19992__$1)){
var c__4556__auto___19993 = cljs.core.chunk_first.call(null,seq__19878_19992__$1);
var G__19994 = cljs.core.chunk_rest.call(null,seq__19878_19992__$1);
var G__19995 = c__4556__auto___19993;
var G__19996 = cljs.core.count.call(null,c__4556__auto___19993);
var G__19997 = (0);
seq__19878_19952 = G__19994;
chunk__19879_19953 = G__19995;
count__19880_19954 = G__19996;
i__19881_19955 = G__19997;
continue;
} else {
var id_19998 = cljs.core.first.call(null,seq__19878_19992__$1);
var s_19999 = cljs.core.get.call(null,id_stats,id_19998);
var sum_20000 = cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_20001 = cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),format_id_fn.call(null,id_19998));

var seq__19906_20002 = cljs.core.seq.call(null,columns);
var chunk__19907_20003 = null;
var count__19908_20004 = (0);
var i__19909_20005 = (0);
while(true){
if((i__19909_20005 < count__19908_20004)){
var column_20006 = cljs.core._nth.call(null,chunk__19907_20003,i__19909_20005);
taoensso.encore.sb_append.call(null,sb," ");

var G__19912_20007 = column_20006;
var G__19912_20008__$1 = (((G__19912_20007 instanceof cljs.core.Keyword))?G__19912_20007.fqn:null);
switch (G__19912_20008__$1) {
case "n-calls":
append_col.call(null,column_20006,taoensso.tufte.stats.fmt_calls.call(null,cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col.call(null,column_20006,taoensso.tufte.stats.fmt_nano.call(null,mean_20001));

break;
case "mad":
append_col.call(null,column_20006,["\u00B1",taoensso.tufte.stats.perc.call(null,cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_20001)].join(''));

break;
case "total":
append_col.call(null,column_20006,taoensso.tufte.stats.perc.call(null,sum_20000,clock_total__$1));

break;
case "clock":
append_col.call(null,column_20006,taoensso.tufte.stats.fmt_nano.call(null,sum_20000));

break;
default:
append_col.call(null,column_20006,taoensso.tufte.stats.fmt_nano.call(null,cljs.core.get.call(null,s_19999,column_20006)));

}


var G__20010 = seq__19906_20002;
var G__20011 = chunk__19907_20003;
var G__20012 = count__19908_20004;
var G__20013 = (i__19909_20005 + (1));
seq__19906_20002 = G__20010;
chunk__19907_20003 = G__20011;
count__19908_20004 = G__20012;
i__19909_20005 = G__20013;
continue;
} else {
var temp__5804__auto___20014__$1 = cljs.core.seq.call(null,seq__19906_20002);
if(temp__5804__auto___20014__$1){
var seq__19906_20015__$1 = temp__5804__auto___20014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19906_20015__$1)){
var c__4556__auto___20016 = cljs.core.chunk_first.call(null,seq__19906_20015__$1);
var G__20017 = cljs.core.chunk_rest.call(null,seq__19906_20015__$1);
var G__20018 = c__4556__auto___20016;
var G__20019 = cljs.core.count.call(null,c__4556__auto___20016);
var G__20020 = (0);
seq__19906_20002 = G__20017;
chunk__19907_20003 = G__20018;
count__19908_20004 = G__20019;
i__19909_20005 = G__20020;
continue;
} else {
var column_20021 = cljs.core.first.call(null,seq__19906_20015__$1);
taoensso.encore.sb_append.call(null,sb," ");

var G__19913_20022 = column_20021;
var G__19913_20023__$1 = (((G__19913_20022 instanceof cljs.core.Keyword))?G__19913_20022.fqn:null);
switch (G__19913_20023__$1) {
case "n-calls":
append_col.call(null,column_20021,taoensso.tufte.stats.fmt_calls.call(null,cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col.call(null,column_20021,taoensso.tufte.stats.fmt_nano.call(null,mean_20001));

break;
case "mad":
append_col.call(null,column_20021,["\u00B1",taoensso.tufte.stats.perc.call(null,cljs.core.get.call(null,s_19999,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_20001)].join(''));

break;
case "total":
append_col.call(null,column_20021,taoensso.tufte.stats.perc.call(null,sum_20000,clock_total__$1));

break;
case "clock":
append_col.call(null,column_20021,taoensso.tufte.stats.fmt_nano.call(null,sum_20000));

break;
default:
append_col.call(null,column_20021,taoensso.tufte.stats.fmt_nano.call(null,cljs.core.get.call(null,s_19999,column_20021)));

}


var G__20025 = cljs.core.next.call(null,seq__19906_20015__$1);
var G__20026 = null;
var G__20027 = (0);
var G__20028 = (0);
seq__19906_20002 = G__20025;
chunk__19907_20003 = G__20026;
count__19908_20004 = G__20027;
i__19909_20005 = G__20028;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n");


var G__20029 = cljs.core.next.call(null,seq__19878_19992__$1);
var G__20030 = null;
var G__20031 = (0);
var G__20032 = (0);
seq__19878_19952 = G__20029;
chunk__19879_19953 = G__20030;
count__19880_19954 = G__20031;
i__19881_19955 = G__20032;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n");

append_col.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__19914_20033 = cljs.core.seq.call(null,columns);
var chunk__19915_20034 = null;
var count__19916_20035 = (0);
var i__19917_20036 = (0);
while(true){
if((i__19917_20036 < count__19916_20035)){
var column_20037 = cljs.core._nth.call(null,chunk__19915_20034,i__19917_20036);
taoensso.encore.sb_append.call(null,sb," ");

var G__19920_20038 = column_20037;
var G__19920_20039__$1 = (((G__19920_20038 instanceof cljs.core.Keyword))?G__19920_20038.fqn:null);
switch (G__19920_20039__$1) {
case "total":
append_col.call(null,column_20037,taoensso.tufte.stats.perc.call(null,accounted_total,clock_total__$1));

break;
case "clock":
append_col.call(null,column_20037,taoensso.tufte.stats.fmt_nano.call(null,accounted_total));

break;
default:
append_col.call(null,column_20037,"");

}


var G__20041 = seq__19914_20033;
var G__20042 = chunk__19915_20034;
var G__20043 = count__19916_20035;
var G__20044 = (i__19917_20036 + (1));
seq__19914_20033 = G__20041;
chunk__19915_20034 = G__20042;
count__19916_20035 = G__20043;
i__19917_20036 = G__20044;
continue;
} else {
var temp__5804__auto___20045 = cljs.core.seq.call(null,seq__19914_20033);
if(temp__5804__auto___20045){
var seq__19914_20046__$1 = temp__5804__auto___20045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19914_20046__$1)){
var c__4556__auto___20047 = cljs.core.chunk_first.call(null,seq__19914_20046__$1);
var G__20048 = cljs.core.chunk_rest.call(null,seq__19914_20046__$1);
var G__20049 = c__4556__auto___20047;
var G__20050 = cljs.core.count.call(null,c__4556__auto___20047);
var G__20051 = (0);
seq__19914_20033 = G__20048;
chunk__19915_20034 = G__20049;
count__19916_20035 = G__20050;
i__19917_20036 = G__20051;
continue;
} else {
var column_20052 = cljs.core.first.call(null,seq__19914_20046__$1);
taoensso.encore.sb_append.call(null,sb," ");

var G__19921_20053 = column_20052;
var G__19921_20054__$1 = (((G__19921_20053 instanceof cljs.core.Keyword))?G__19921_20053.fqn:null);
switch (G__19921_20054__$1) {
case "total":
append_col.call(null,column_20052,taoensso.tufte.stats.perc.call(null,accounted_total,clock_total__$1));

break;
case "clock":
append_col.call(null,column_20052,taoensso.tufte.stats.fmt_nano.call(null,accounted_total));

break;
default:
append_col.call(null,column_20052,"");

}


var G__20056 = cljs.core.next.call(null,seq__19914_20046__$1);
var G__20057 = null;
var G__20058 = (0);
var G__20059 = (0);
seq__19914_20033 = G__20056;
chunk__19915_20034 = G__20057;
count__19916_20035 = G__20058;
i__19917_20036 = G__20059;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n");

append_col.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__19922_20060 = cljs.core.seq.call(null,columns);
var chunk__19923_20061 = null;
var count__19924_20062 = (0);
var i__19925_20063 = (0);
while(true){
if((i__19925_20063 < count__19924_20062)){
var column_20064 = cljs.core._nth.call(null,chunk__19923_20061,i__19925_20063);
taoensso.encore.sb_append.call(null,sb," ");

var G__19928_20065 = column_20064;
var G__19928_20066__$1 = (((G__19928_20065 instanceof cljs.core.Keyword))?G__19928_20065.fqn:null);
switch (G__19928_20066__$1) {
case "total":
append_col.call(null,column_20064,"100%");

break;
case "clock":
append_col.call(null,column_20064,taoensso.tufte.stats.fmt_nano.call(null,clock_total__$1));

break;
default:
append_col.call(null,column_20064,"");

}


var G__20068 = seq__19922_20060;
var G__20069 = chunk__19923_20061;
var G__20070 = count__19924_20062;
var G__20071 = (i__19925_20063 + (1));
seq__19922_20060 = G__20068;
chunk__19923_20061 = G__20069;
count__19924_20062 = G__20070;
i__19925_20063 = G__20071;
continue;
} else {
var temp__5804__auto___20072 = cljs.core.seq.call(null,seq__19922_20060);
if(temp__5804__auto___20072){
var seq__19922_20073__$1 = temp__5804__auto___20072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19922_20073__$1)){
var c__4556__auto___20074 = cljs.core.chunk_first.call(null,seq__19922_20073__$1);
var G__20075 = cljs.core.chunk_rest.call(null,seq__19922_20073__$1);
var G__20076 = c__4556__auto___20074;
var G__20077 = cljs.core.count.call(null,c__4556__auto___20074);
var G__20078 = (0);
seq__19922_20060 = G__20075;
chunk__19923_20061 = G__20076;
count__19924_20062 = G__20077;
i__19925_20063 = G__20078;
continue;
} else {
var column_20079 = cljs.core.first.call(null,seq__19922_20073__$1);
taoensso.encore.sb_append.call(null,sb," ");

var G__19929_20080 = column_20079;
var G__19929_20081__$1 = (((G__19929_20080 instanceof cljs.core.Keyword))?G__19929_20080.fqn:null);
switch (G__19929_20081__$1) {
case "total":
append_col.call(null,column_20079,"100%");

break;
case "clock":
append_col.call(null,column_20079,taoensso.tufte.stats.fmt_nano.call(null,clock_total__$1));

break;
default:
append_col.call(null,column_20079,"");

}


var G__20083 = cljs.core.next.call(null,seq__19922_20073__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__19922_20060 = G__20083;
chunk__19923_20061 = G__20084;
count__19924_20062 = G__20085;
i__19925_20063 = G__20086;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.call(null,sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});

//# sourceMappingURL=stats.js.map
