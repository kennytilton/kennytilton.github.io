// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.tufte.stats');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$longs], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte.stats/SortedLongs");
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
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_(longs))?longs:cljs.core.to_array(longs));
goog.array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs(longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[(function (){var G__24082 = (0.25 * max_idx);
return Math.round(G__24082);
})()]),(a[(function (){var G__24083 = (0.5 * max_idx);
return Math.round(G__24083);
})()]),(a[(function (){var G__24084 = (0.75 * max_idx);
return Math.round(G__24084);
})()]),(a[(function (){var G__24085 = (0.9 * max_idx);
return Math.round(G__24085);
})()]),(a[(function (){var G__24086 = (0.95 * max_idx);
return Math.round(G__24086);
})()]),(a[(function (){var G__24087 = (0.99 * max_idx);
return Math.round(G__24087);
})()]),(a[max_idx])], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$vmin,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$vmax,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte.stats/MinMax");
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
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count(longs) === (0))){
return null;
} else {
var vec__24088 = longs;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24088,(0),null);
var min_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
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
var sorted_longs = taoensso.tufte.stats.sort_longs(longs);
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
var G__24095 = (i + (1));
var G__24096 = (acc + (a[i]));
i = G__24095;
acc = G__24096;
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
var G__24097 = (i + (1));
var G__24098 = (acc + (function (){var G__24094 = ((a[i]) - mean);
return Math.abs(G__24094);
})());
i = G__24097;
acc = G__24098;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__24091 = taoensso.tufte.stats.long_percentiles(sorted_longs);
var vmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(6),null);
var vmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(7),null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$mean,cljs.core.cst$kw$p75,cljs.core.cst$kw$mad_DASH_sum,cljs.core.cst$kw$p99,cljs.core.cst$kw$n,cljs.core.cst$kw$p25,cljs.core.cst$kw$p90,cljs.core.cst$kw$max,cljs.core.cst$kw$mad,cljs.core.cst$kw$p50,cljs.core.cst$kw$sum,cljs.core.cst$kw$p95],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
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
var _ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,cljs.core.cst$kw$n))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,cljs.core.cst$kw$n))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__24099 = m0;
var map__24099__$1 = (((((!((map__24099 == null))))?(((((map__24099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24099):map__24099);
var p99_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p99);
var sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$sum);
var p90_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p90);
var max0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$max);
var p25_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p25);
var n0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$n);
var p75_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p75);
var p95_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p95);
var mad_sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$mad_DASH_sum);
var min0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$min);
var p50_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24099__$1,cljs.core.cst$kw$p50);
var map__24100 = m1;
var map__24100__$1 = (((((!((map__24100 == null))))?(((((map__24100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24100):map__24100);
var p95_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p95);
var sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$sum);
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$n);
var max1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$max);
var mad_sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$mad_DASH_sum);
var p75_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p75);
var min1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$min);
var p50_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p50);
var p99_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p99);
var p25_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p25);
var p90_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24100__$1,cljs.core.cst$kw$p90);
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
var p25_2 = (function (){var G__24103 = ((n0_ratio * p25_0) + (n1_ratio * p25_1));
return Math.round(G__24103);
})();
var p50_2 = (function (){var G__24104 = ((n0_ratio * p50_0) + (n1_ratio * p50_1));
return Math.round(G__24104);
})();
var p75_2 = (function (){var G__24105 = ((n0_ratio * p75_0) + (n1_ratio * p75_1));
return Math.round(G__24105);
})();
var p90_2 = (function (){var G__24106 = ((n0_ratio * p90_0) + (n1_ratio * p90_1));
return Math.round(G__24106);
})();
var p95_2 = (function (){var G__24107 = ((n0_ratio * p95_0) + (n1_ratio * p95_1));
return Math.round(G__24107);
})();
var p99_2 = (function (){var G__24108 = ((n0_ratio * p99_0) + (n1_ratio * p99_1));
return Math.round(G__24108);
})();
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$mean,cljs.core.cst$kw$p75,cljs.core.cst$kw$mad_DASH_sum,cljs.core.cst$kw$p99,cljs.core.cst$kw$n,cljs.core.cst$kw$p25,cljs.core.cst$kw$p90,cljs.core.cst$kw$max,cljs.core.cst$kw$mad,cljs.core.cst$kw$p50,cljs.core.cst$kw$sum,cljs.core.cst$kw$p95],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24110 = ((n / d) * 100.0);
return Math.round(G__24110);
})()),"%"].join('');
});
taoensso.tufte.stats.fmt_2f = (function taoensso$tufte$stats$fmt_2f(n){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2(n));
});
taoensso.tufte.stats.fmt_calls = (function taoensso$tufte$stats$fmt_calls(n){
return [(((n < (0)))?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.fmt_nano = (function taoensso$tufte$stats$fmt_nano(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [taoensso.tufte.stats.fmt_2f((ns / 6.0E10)),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [taoensso.tufte.stats.fmt_2f((ns / 1.0E9)),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [taoensso.tufte.stats.fmt_2f((ns / 1000000.0)),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [taoensso.tufte.stats.fmt_2f((ns / 1000.0)),"\u03BCs"].join('');
} else {
return [taoensso.tufte.stats.fmt_2f(ns),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$n_DASH_calls,cljs.core.cst$kw$min,cljs.core.cst$kw$p25,cljs.core.cst$kw$p50,cljs.core.cst$kw$p75,cljs.core.cst$kw$p90,cljs.core.cst$kw$p95,cljs.core.cst$kw$p99,cljs.core.cst$kw$max,cljs.core.cst$kw$mean,cljs.core.cst$kw$mad,cljs.core.cst$kw$clock,cljs.core.cst$kw$total], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$n_DASH_calls,cljs.core.cst$kw$min,cljs.core.cst$kw$p50,cljs.core.cst$kw$p90,cljs.core.cst$kw$p95,cljs.core.cst$kw$p99,cljs.core.cst$kw$max,cljs.core.cst$kw$mean,cljs.core.cst$kw$mad,cljs.core.cst$kw$clock,cljs.core.cst$kw$total], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__24111){
var map__24112 = p__24111;
var map__24112__$1 = (((((!((map__24112 == null))))?(((((map__24112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24112):map__24112);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24112__$1,cljs.core.cst$kw$format_DASH_id_DASH_fn,taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv((function (acc,k,v){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(k) : format_id_fn.call(null,k)));
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
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__24114){
var map__24115 = p__24114;
var map__24115__$1 = (((((!((map__24115 == null))))?(((((map__24115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24115):map__24115);
var opts = map__24115__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24115__$1,cljs.core.cst$kw$columns,taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24115__$1,cljs.core.cst$kw$sort_DASH_fn,(function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$sum);
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24115__$1,cljs.core.cst$kw$format_DASH_id_DASH_fn,taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24115__$1,cljs.core.cst$kw$max_DASH_id_DASH_width);
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_((function (__in){
var e = (function (){try{if((function (){var fexpr__24118 = (function (x){
return cljs.core.contains_QMARK_((taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.all_format_columns) : taoensso.truss.impl.set_STAR_.call(null,taoensso.tufte.stats.all_format_columns)),x);
});
return fexpr__24118(__in);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e24117){if((e24117 instanceof Error)){
var e = e24117;
return e;
} else {
throw e24117;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte.stats",283,"([:el all-format-columns] __in)",__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,s){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,cljs.core.cst$kw$sum)));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__24119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__24119) : sort_fn.call(null,G__24119));
}),taoensso.encore.rcompare,cljs.core.keys(id_stats));
var max_id_width__$1 = (function (){var or__4126__auto__ = max_id_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min,cljs.core.cst$kw$mean,cljs.core.cst$kw$p75,cljs.core.cst$kw$p99,cljs.core.cst$kw$n_DASH_calls,cljs.core.cst$kw$p25,cljs.core.cst$kw$total,cljs.core.cst$kw$p90,cljs.core.cst$kw$max,cljs.core.cst$kw$id,cljs.core.cst$kw$mad,cljs.core.cst$kw$clock,cljs.core.cst$kw$p50,cljs.core.cst$kw$p95],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"Total",cljs.core.cst$kw$min_DASH_width,(6)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$heading,"pId",cljs.core.cst$kw$min_DASH_width,max_id_width__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$left], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heading,"MAD",cljs.core.cst$kw$min_DASH_width,(5)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__24120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__24120__$1 = (((((!((map__24120 == null))))?(((((map__24120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24120):map__24120);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24120__$1,cljs.core.cst$kw$min_DASH_width,(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24120__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$right);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24123 = align;
var G__24123__$1 = (((G__24123 instanceof cljs.core.Keyword))?G__24123.fqn:null);
switch (G__24123__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24123__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__24124_24181 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id], null),columns));
var chunk__24125_24182 = null;
var count__24126_24183 = (0);
var i__24127_24184 = (0);
while(true){
if((i__24127_24184 < count__24126_24183)){
var column_24185 = chunk__24125_24182.cljs$core$IIndexed$_nth$arity$2(null,i__24127_24184);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,column_24185)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_24185,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_24185,cljs.core.cst$kw$heading], null)));


var G__24186 = seq__24124_24181;
var G__24187 = chunk__24125_24182;
var G__24188 = count__24126_24183;
var G__24189 = (i__24127_24184 + (1));
seq__24124_24181 = G__24186;
chunk__24125_24182 = G__24187;
count__24126_24183 = G__24188;
i__24127_24184 = G__24189;
continue;
} else {
var temp__5804__auto___24190 = cljs.core.seq(seq__24124_24181);
if(temp__5804__auto___24190){
var seq__24124_24191__$1 = temp__5804__auto___24190;
if(cljs.core.chunked_seq_QMARK_(seq__24124_24191__$1)){
var c__4556__auto___24192 = cljs.core.chunk_first(seq__24124_24191__$1);
var G__24193 = cljs.core.chunk_rest(seq__24124_24191__$1);
var G__24194 = c__4556__auto___24192;
var G__24195 = cljs.core.count(c__4556__auto___24192);
var G__24196 = (0);
seq__24124_24181 = G__24193;
chunk__24125_24182 = G__24194;
count__24126_24183 = G__24195;
i__24127_24184 = G__24196;
continue;
} else {
var column_24197 = cljs.core.first(seq__24124_24191__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,column_24197)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_24197,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_24197,cljs.core.cst$kw$heading], null)));


var G__24198 = cljs.core.next(seq__24124_24191__$1);
var G__24199 = null;
var G__24200 = (0);
var G__24201 = (0);
seq__24124_24181 = G__24198;
chunk__24125_24182 = G__24199;
count__24126_24183 = G__24200;
i__24127_24184 = G__24201;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__24128_24202 = cljs.core.seq(sorted_ids);
var chunk__24129_24203 = null;
var count__24130_24204 = (0);
var i__24131_24205 = (0);
while(true){
if((i__24131_24205 < count__24130_24204)){
var id_24206 = chunk__24129_24203.cljs$core$IIndexed$_nth$arity$2(null,i__24131_24205);
var s_24207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_24206);
var sum_24208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$sum);
var mean_24209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$mean);
append_col(cljs.core.cst$kw$id,(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_24206) : format_id_fn.call(null,id_24206)));

var seq__24148_24210 = cljs.core.seq(columns);
var chunk__24149_24211 = null;
var count__24150_24212 = (0);
var i__24151_24213 = (0);
while(true){
if((i__24151_24213 < count__24150_24212)){
var column_24214 = chunk__24149_24211.cljs$core$IIndexed$_nth$arity$2(null,i__24151_24213);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24154_24215 = column_24214;
var G__24154_24216__$1 = (((G__24154_24215 instanceof cljs.core.Keyword))?G__24154_24215.fqn:null);
switch (G__24154_24216__$1) {
case "n-calls":
append_col(column_24214,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$n)));

break;
case "mean":
append_col(column_24214,taoensso.tufte.stats.fmt_nano(mean_24209));

break;
case "mad":
append_col(column_24214,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$mad),mean_24209)].join(''));

break;
case "total":
append_col(column_24214,taoensso.tufte.stats.perc(sum_24208,clock_total__$1));

break;
case "clock":
append_col(column_24214,taoensso.tufte.stats.fmt_nano(sum_24208));

break;
default:
append_col(column_24214,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,column_24214)));

}


var G__24218 = seq__24148_24210;
var G__24219 = chunk__24149_24211;
var G__24220 = count__24150_24212;
var G__24221 = (i__24151_24213 + (1));
seq__24148_24210 = G__24218;
chunk__24149_24211 = G__24219;
count__24150_24212 = G__24220;
i__24151_24213 = G__24221;
continue;
} else {
var temp__5804__auto___24222 = cljs.core.seq(seq__24148_24210);
if(temp__5804__auto___24222){
var seq__24148_24223__$1 = temp__5804__auto___24222;
if(cljs.core.chunked_seq_QMARK_(seq__24148_24223__$1)){
var c__4556__auto___24224 = cljs.core.chunk_first(seq__24148_24223__$1);
var G__24225 = cljs.core.chunk_rest(seq__24148_24223__$1);
var G__24226 = c__4556__auto___24224;
var G__24227 = cljs.core.count(c__4556__auto___24224);
var G__24228 = (0);
seq__24148_24210 = G__24225;
chunk__24149_24211 = G__24226;
count__24150_24212 = G__24227;
i__24151_24213 = G__24228;
continue;
} else {
var column_24229 = cljs.core.first(seq__24148_24223__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24155_24230 = column_24229;
var G__24155_24231__$1 = (((G__24155_24230 instanceof cljs.core.Keyword))?G__24155_24230.fqn:null);
switch (G__24155_24231__$1) {
case "n-calls":
append_col(column_24229,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$n)));

break;
case "mean":
append_col(column_24229,taoensso.tufte.stats.fmt_nano(mean_24209));

break;
case "mad":
append_col(column_24229,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,cljs.core.cst$kw$mad),mean_24209)].join(''));

break;
case "total":
append_col(column_24229,taoensso.tufte.stats.perc(sum_24208,clock_total__$1));

break;
case "clock":
append_col(column_24229,taoensso.tufte.stats.fmt_nano(sum_24208));

break;
default:
append_col(column_24229,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24207,column_24229)));

}


var G__24233 = cljs.core.next(seq__24148_24223__$1);
var G__24234 = null;
var G__24235 = (0);
var G__24236 = (0);
seq__24148_24210 = G__24233;
chunk__24149_24211 = G__24234;
count__24150_24212 = G__24235;
i__24151_24213 = G__24236;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__24237 = seq__24128_24202;
var G__24238 = chunk__24129_24203;
var G__24239 = count__24130_24204;
var G__24240 = (i__24131_24205 + (1));
seq__24128_24202 = G__24237;
chunk__24129_24203 = G__24238;
count__24130_24204 = G__24239;
i__24131_24205 = G__24240;
continue;
} else {
var temp__5804__auto___24241 = cljs.core.seq(seq__24128_24202);
if(temp__5804__auto___24241){
var seq__24128_24242__$1 = temp__5804__auto___24241;
if(cljs.core.chunked_seq_QMARK_(seq__24128_24242__$1)){
var c__4556__auto___24243 = cljs.core.chunk_first(seq__24128_24242__$1);
var G__24244 = cljs.core.chunk_rest(seq__24128_24242__$1);
var G__24245 = c__4556__auto___24243;
var G__24246 = cljs.core.count(c__4556__auto___24243);
var G__24247 = (0);
seq__24128_24202 = G__24244;
chunk__24129_24203 = G__24245;
count__24130_24204 = G__24246;
i__24131_24205 = G__24247;
continue;
} else {
var id_24248 = cljs.core.first(seq__24128_24242__$1);
var s_24249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_24248);
var sum_24250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$sum);
var mean_24251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$mean);
append_col(cljs.core.cst$kw$id,(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_24248) : format_id_fn.call(null,id_24248)));

var seq__24156_24252 = cljs.core.seq(columns);
var chunk__24157_24253 = null;
var count__24158_24254 = (0);
var i__24159_24255 = (0);
while(true){
if((i__24159_24255 < count__24158_24254)){
var column_24256 = chunk__24157_24253.cljs$core$IIndexed$_nth$arity$2(null,i__24159_24255);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24162_24257 = column_24256;
var G__24162_24258__$1 = (((G__24162_24257 instanceof cljs.core.Keyword))?G__24162_24257.fqn:null);
switch (G__24162_24258__$1) {
case "n-calls":
append_col(column_24256,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$n)));

break;
case "mean":
append_col(column_24256,taoensso.tufte.stats.fmt_nano(mean_24251));

break;
case "mad":
append_col(column_24256,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$mad),mean_24251)].join(''));

break;
case "total":
append_col(column_24256,taoensso.tufte.stats.perc(sum_24250,clock_total__$1));

break;
case "clock":
append_col(column_24256,taoensso.tufte.stats.fmt_nano(sum_24250));

break;
default:
append_col(column_24256,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,column_24256)));

}


var G__24260 = seq__24156_24252;
var G__24261 = chunk__24157_24253;
var G__24262 = count__24158_24254;
var G__24263 = (i__24159_24255 + (1));
seq__24156_24252 = G__24260;
chunk__24157_24253 = G__24261;
count__24158_24254 = G__24262;
i__24159_24255 = G__24263;
continue;
} else {
var temp__5804__auto___24264__$1 = cljs.core.seq(seq__24156_24252);
if(temp__5804__auto___24264__$1){
var seq__24156_24265__$1 = temp__5804__auto___24264__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24156_24265__$1)){
var c__4556__auto___24266 = cljs.core.chunk_first(seq__24156_24265__$1);
var G__24267 = cljs.core.chunk_rest(seq__24156_24265__$1);
var G__24268 = c__4556__auto___24266;
var G__24269 = cljs.core.count(c__4556__auto___24266);
var G__24270 = (0);
seq__24156_24252 = G__24267;
chunk__24157_24253 = G__24268;
count__24158_24254 = G__24269;
i__24159_24255 = G__24270;
continue;
} else {
var column_24271 = cljs.core.first(seq__24156_24265__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24163_24272 = column_24271;
var G__24163_24273__$1 = (((G__24163_24272 instanceof cljs.core.Keyword))?G__24163_24272.fqn:null);
switch (G__24163_24273__$1) {
case "n-calls":
append_col(column_24271,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$n)));

break;
case "mean":
append_col(column_24271,taoensso.tufte.stats.fmt_nano(mean_24251));

break;
case "mad":
append_col(column_24271,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,cljs.core.cst$kw$mad),mean_24251)].join(''));

break;
case "total":
append_col(column_24271,taoensso.tufte.stats.perc(sum_24250,clock_total__$1));

break;
case "clock":
append_col(column_24271,taoensso.tufte.stats.fmt_nano(sum_24250));

break;
default:
append_col(column_24271,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_24249,column_24271)));

}


var G__24275 = cljs.core.next(seq__24156_24265__$1);
var G__24276 = null;
var G__24277 = (0);
var G__24278 = (0);
seq__24156_24252 = G__24275;
chunk__24157_24253 = G__24276;
count__24158_24254 = G__24277;
i__24159_24255 = G__24278;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__24279 = cljs.core.next(seq__24128_24242__$1);
var G__24280 = null;
var G__24281 = (0);
var G__24282 = (0);
seq__24128_24202 = G__24279;
chunk__24129_24203 = G__24280;
count__24130_24204 = G__24281;
i__24131_24205 = G__24282;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(cljs.core.cst$kw$id,"Accounted");

var seq__24164_24283 = cljs.core.seq(columns);
var chunk__24165_24284 = null;
var count__24166_24285 = (0);
var i__24167_24286 = (0);
while(true){
if((i__24167_24286 < count__24166_24285)){
var column_24287 = chunk__24165_24284.cljs$core$IIndexed$_nth$arity$2(null,i__24167_24286);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24170_24288 = column_24287;
var G__24170_24289__$1 = (((G__24170_24288 instanceof cljs.core.Keyword))?G__24170_24288.fqn:null);
switch (G__24170_24289__$1) {
case "total":
append_col(column_24287,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_24287,taoensso.tufte.stats.fmt_nano(accounted_total));

break;
default:
append_col(column_24287,"");

}


var G__24291 = seq__24164_24283;
var G__24292 = chunk__24165_24284;
var G__24293 = count__24166_24285;
var G__24294 = (i__24167_24286 + (1));
seq__24164_24283 = G__24291;
chunk__24165_24284 = G__24292;
count__24166_24285 = G__24293;
i__24167_24286 = G__24294;
continue;
} else {
var temp__5804__auto___24295 = cljs.core.seq(seq__24164_24283);
if(temp__5804__auto___24295){
var seq__24164_24296__$1 = temp__5804__auto___24295;
if(cljs.core.chunked_seq_QMARK_(seq__24164_24296__$1)){
var c__4556__auto___24297 = cljs.core.chunk_first(seq__24164_24296__$1);
var G__24298 = cljs.core.chunk_rest(seq__24164_24296__$1);
var G__24299 = c__4556__auto___24297;
var G__24300 = cljs.core.count(c__4556__auto___24297);
var G__24301 = (0);
seq__24164_24283 = G__24298;
chunk__24165_24284 = G__24299;
count__24166_24285 = G__24300;
i__24167_24286 = G__24301;
continue;
} else {
var column_24302 = cljs.core.first(seq__24164_24296__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24171_24303 = column_24302;
var G__24171_24304__$1 = (((G__24171_24303 instanceof cljs.core.Keyword))?G__24171_24303.fqn:null);
switch (G__24171_24304__$1) {
case "total":
append_col(column_24302,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_24302,taoensso.tufte.stats.fmt_nano(accounted_total));

break;
default:
append_col(column_24302,"");

}


var G__24306 = cljs.core.next(seq__24164_24296__$1);
var G__24307 = null;
var G__24308 = (0);
var G__24309 = (0);
seq__24164_24283 = G__24306;
chunk__24165_24284 = G__24307;
count__24166_24285 = G__24308;
i__24167_24286 = G__24309;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(cljs.core.cst$kw$id,"Clock");

var seq__24172_24310 = cljs.core.seq(columns);
var chunk__24173_24311 = null;
var count__24174_24312 = (0);
var i__24175_24313 = (0);
while(true){
if((i__24175_24313 < count__24174_24312)){
var column_24314 = chunk__24173_24311.cljs$core$IIndexed$_nth$arity$2(null,i__24175_24313);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24178_24315 = column_24314;
var G__24178_24316__$1 = (((G__24178_24315 instanceof cljs.core.Keyword))?G__24178_24315.fqn:null);
switch (G__24178_24316__$1) {
case "total":
append_col(column_24314,"100%");

break;
case "clock":
append_col(column_24314,taoensso.tufte.stats.fmt_nano(clock_total__$1));

break;
default:
append_col(column_24314,"");

}


var G__24318 = seq__24172_24310;
var G__24319 = chunk__24173_24311;
var G__24320 = count__24174_24312;
var G__24321 = (i__24175_24313 + (1));
seq__24172_24310 = G__24318;
chunk__24173_24311 = G__24319;
count__24174_24312 = G__24320;
i__24175_24313 = G__24321;
continue;
} else {
var temp__5804__auto___24322 = cljs.core.seq(seq__24172_24310);
if(temp__5804__auto___24322){
var seq__24172_24323__$1 = temp__5804__auto___24322;
if(cljs.core.chunked_seq_QMARK_(seq__24172_24323__$1)){
var c__4556__auto___24324 = cljs.core.chunk_first(seq__24172_24323__$1);
var G__24325 = cljs.core.chunk_rest(seq__24172_24323__$1);
var G__24326 = c__4556__auto___24324;
var G__24327 = cljs.core.count(c__4556__auto___24324);
var G__24328 = (0);
seq__24172_24310 = G__24325;
chunk__24173_24311 = G__24326;
count__24174_24312 = G__24327;
i__24175_24313 = G__24328;
continue;
} else {
var column_24329 = cljs.core.first(seq__24172_24323__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__24179_24330 = column_24329;
var G__24179_24331__$1 = (((G__24179_24330 instanceof cljs.core.Keyword))?G__24179_24330.fqn:null);
switch (G__24179_24331__$1) {
case "total":
append_col(column_24329,"100%");

break;
case "clock":
append_col(column_24329,taoensso.tufte.stats.fmt_nano(clock_total__$1));

break;
default:
append_col(column_24329,"");

}


var G__24333 = cljs.core.next(seq__24172_24323__$1);
var G__24334 = null;
var G__24335 = (0);
var G__24336 = (0);
seq__24172_24310 = G__24333;
chunk__24173_24311 = G__24334;
count__24174_24312 = G__24335;
i__24175_24313 = G__24336;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});
