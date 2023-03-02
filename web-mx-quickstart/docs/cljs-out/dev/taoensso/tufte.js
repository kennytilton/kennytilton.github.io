// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.tufte');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.encore');
goog.require('taoensso.tufte.stats');
goog.require('taoensso.tufte.impl');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(31),(0)], null));
taoensso.tufte.valid_call_level_QMARK_ = (function taoensso$tufte$valid_call_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__34407 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34407.cljs$core$IFn$_invoke$arity$1 ? fexpr__34407.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34407.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__34408 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34408.cljs$core$IFn$_invoke$arity$1 ? fexpr__34408.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34408.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_call_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_call_level = (function taoensso$tufte$valid_call_level(x){
var or__4126__auto__ = (function (){var fexpr__34410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34410.cljs$core$IFn$_invoke$arity$1 ? fexpr__34410.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34410.call(null,x));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__4126__auto__ = (function (){var fexpr__34412 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__34412.cljs$core$IFn$_invoke$arity$1 ? fexpr__34412.cljs$core$IFn$_invoke$arity$1(x) : fexpr__34412.call(null,x));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
/**
 * Integer e/o #{0 1 2 3 4 5 6}, or vector mapping ns-patterns to min-levels:
 *  [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]]
 * 
 *   See `*ns-filter*` for example patterns.
 */
taoensso.tufte._STAR_min_level_STAR_ = (2);
/**
 * (fn may-profile-ns? [ns]) predicate, or ns-pattern.
 *   Example ns-patterns:
 *  #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *  {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.tufte._STAR_ns_filter_STAR_ = "*";
var fn_QMARK__34420 = cljs.core.fn_QMARK_;
var compile_34421 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__34422 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__34413 = (compile_34421.cljs$core$IFn$_invoke$arity$1 ? compile_34421.cljs$core$IFn$_invoke$arity$1(x) : compile_34421.call(null,x));
return (fexpr__34413.cljs$core$IFn$_invoke$arity$1 ? fexpr__34413.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__34413.call(null,ns));
}));
var conform_QMARK__34423 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__34420.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__34420.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__34420.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__34422.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__34422.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__34422.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.tufte.may_profile_ns_QMARK_ = (function taoensso$tufte$may_profile_ns_QMARK_(var_args){
var G__34415 = arguments.length;
switch (G__34415) {
case 1:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ns){
if(cljs.core.truth_(conform_QMARK__34423(taoensso.tufte._STAR_ns_filter_STAR_,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__34423(ns_filter,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$lang$maxFixedArity = 2);


/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.tufte.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__34416){
var vec__34417 = p__34416;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34417,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34417,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__34422.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__34422.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__34422.call(null,ns_pattern,ns)))){
return taoensso.tufte.valid_min_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_min_level_34426 = taoensso.tufte.valid_min_level;
var ns__GT__QMARK_min_level_34427 = taoensso.tufte.ns__GT__QMARK_min_level;
taoensso.tufte.get_min_level = (function taoensso$tufte$get_min_level(default$,x,ns){
var G__34425 = (function (){var or__4126__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_34427.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_34427.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_34427.call(null,x,ns)):x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
})();
return (valid_min_level_34426.cljs$core$IFn$_invoke$arity$1 ? valid_min_level_34426.cljs$core$IFn$_invoke$arity$1(G__34425) : valid_min_level_34426.call(null,G__34425));
});
var valid_call_level_34430 = taoensso.tufte.valid_call_level;
var may_profile_ns_QMARK__34431 = taoensso.tufte.may_profile_ns_QMARK_;
var get_min_level_34432 = taoensso.tufte.get_min_level;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__34429 = arguments.length;
switch (G__34429) {
case 1:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_ns_STAR_);
}));

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if(((valid_call_level_34430.cljs$core$IFn$_invoke$arity$1 ? valid_call_level_34430.cljs$core$IFn$_invoke$arity$1(level) : valid_call_level_34430.call(null,level)) >= cljs.core.long$((get_min_level_34432.cljs$core$IFn$_invoke$arity$3 ? get_min_level_34432.cljs$core$IFn$_invoke$arity$3((6),taoensso.tufte._STAR_min_level_STAR_,ns) : get_min_level_34432.call(null,(6),taoensso.tufte._STAR_min_level_STAR_,ns))))){
if(cljs.core.truth_((may_profile_ns_QMARK__34431.cljs$core$IFn$_invoke$arity$2 ? may_profile_ns_QMARK__34431.cljs$core$IFn$_invoke$arity$2(taoensso.tufte._STAR_ns_filter_STAR_,ns) : may_profile_ns_QMARK__34431.call(null,taoensso.tufte._STAR_ns_filter_STAR_,ns)))){
return true;
} else {
return false;
}
} else {
return false;
}
}));

(taoensso.tufte.may_profile_QMARK_.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.tufte.HandlerVal = (function (ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,__meta,__extmap,__hash){
this.ns_str = ns_str;
this.level = level;
this._QMARK_id = _QMARK_id;
this._QMARK_data = _QMARK_data;
this.pstats = pstats;
this.pstats_str_ = pstats_str_;
this._QMARK_file = _QMARK_file;
this._QMARK_line = _QMARK_line;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34435,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34439 = k34435;
var G__34439__$1 = (((G__34439 instanceof cljs.core.Keyword))?G__34439.fqn:null);
switch (G__34439__$1) {
case "ns-str":
return self__.ns_str;

break;
case "level":
return self__.level;

break;
case "?id":
return self__._QMARK_id;

break;
case "?data":
return self__._QMARK_data;

break;
case "pstats":
return self__.pstats;

break;
case "pstats-str_":
return self__.pstats_str_;

break;
case "?file":
return self__._QMARK_file;

break;
case "?line":
return self__._QMARK_line;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34435,else__4383__auto__);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34440){
var vec__34441 = p__34440;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34441,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34441,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ns_DASH_str,self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$level,self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_id,self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_data,self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pstats,self__.pstats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pstats_DASH_str_,self__.pstats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_file,self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_QMARK_line,self__._QMARK_line],null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34434){
var self__ = this;
var G__34434__$1 = this;
return (new cljs.core.RecordIter((0),G__34434__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_id,cljs.core.cst$kw$_QMARK_data,cljs.core.cst$kw$pstats,cljs.core.cst$kw$pstats_DASH_str_,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$_QMARK_line], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__34444 = (function (coll__4377__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__34444(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34436,other34437){
var self__ = this;
var this34436__$1 = this;
return (((!((other34437 == null)))) && ((this34436__$1.constructor === other34437.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1.ns_str,other34437.ns_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1.level,other34437.level)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1._QMARK_id,other34437._QMARK_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1._QMARK_data,other34437._QMARK_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1.pstats,other34437.pstats)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1.pstats_str_,other34437.pstats_str_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1._QMARK_file,other34437._QMARK_file)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1._QMARK_line,other34437._QMARK_line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34436__$1.__extmap,other34437.__extmap)));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_QMARK_file,null,cljs.core.cst$kw$ns_DASH_str,null,cljs.core.cst$kw$level,null,cljs.core.cst$kw$pstats_DASH_str_,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$_QMARK_line,null,cljs.core.cst$kw$pstats,null,cljs.core.cst$kw$_QMARK_id,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34434){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34445 = cljs.core.keyword_identical_QMARK_;
var expr__34446 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__34448 = cljs.core.cst$kw$ns_DASH_str;
var G__34449 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34448,G__34449) : pred__34445.call(null,G__34448,G__34449));
})())){
return (new taoensso.tufte.HandlerVal(G__34434,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34450 = cljs.core.cst$kw$level;
var G__34451 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34450,G__34451) : pred__34445.call(null,G__34450,G__34451));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__34434,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34452 = cljs.core.cst$kw$_QMARK_id;
var G__34453 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34452,G__34453) : pred__34445.call(null,G__34452,G__34453));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__34434,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34454 = cljs.core.cst$kw$_QMARK_data;
var G__34455 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34454,G__34455) : pred__34445.call(null,G__34454,G__34455));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__34434,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34456 = cljs.core.cst$kw$pstats;
var G__34457 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34456,G__34457) : pred__34445.call(null,G__34456,G__34457));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__34434,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34458 = cljs.core.cst$kw$pstats_DASH_str_;
var G__34459 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34458,G__34459) : pred__34445.call(null,G__34458,G__34459));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,G__34434,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34460 = cljs.core.cst$kw$_QMARK_file;
var G__34461 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34460,G__34461) : pred__34445.call(null,G__34460,G__34461));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,G__34434,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34462 = cljs.core.cst$kw$_QMARK_line;
var G__34463 = expr__34446;
return (pred__34445.cljs$core$IFn$_invoke$arity$2 ? pred__34445.cljs$core$IFn$_invoke$arity$2(G__34462,G__34463) : pred__34445.call(null,G__34462,G__34463));
})())){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,G__34434,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34434),null));
}
}
}
}
}
}
}
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$ns_DASH_str,self__.ns_str,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$level,self__.level,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_QMARK_id,self__._QMARK_id,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_QMARK_data,self__._QMARK_data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pstats,self__.pstats,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pstats_DASH_str_,self__.pstats_str_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_QMARK_file,self__._QMARK_file,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_QMARK_line,self__._QMARK_line,null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34434){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,G__34434,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ns_DASH_str,cljs.core.cst$sym$level,cljs.core.cst$sym$_QMARK_id,cljs.core.cst$sym$_QMARK_data,cljs.core.cst$sym$pstats,cljs.core.cst$sym$pstats_DASH_str_,cljs.core.cst$sym$_QMARK_file,cljs.core.cst$sym$_QMARK_line], null);
}));

(taoensso.tufte.HandlerVal.cljs$lang$type = true);

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.tufte/HandlerVal",null,(1),null));
}));

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.tufte/HandlerVal");
}));

/**
 * Positional factory function for taoensso.tufte/HandlerVal.
 */
taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

/**
 * Factory function for taoensso.tufte/HandlerVal, taking a map of keywords to field values.
 */
taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__34438){
var extmap__4419__auto__ = (function (){var G__34464 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34438,cljs.core.cst$kw$ns_DASH_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_id,cljs.core.cst$kw$_QMARK_data,cljs.core.cst$kw$pstats,cljs.core.cst$kw$pstats_DASH_str_,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$_QMARK_line], 0));
if(cljs.core.record_QMARK_(G__34438)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34464);
} else {
return G__34464;
}
})();
return (new taoensso.tufte.HandlerVal(cljs.core.cst$kw$ns_DASH_str.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$_QMARK_id.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$_QMARK_data.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$pstats.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$pstats_DASH_str_.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$_QMARK_file.cljs$core$IFn$_invoke$arity$1(G__34438),cljs.core.cst$kw$_QMARK_line.cljs$core$IFn$_invoke$arity$1(G__34438),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Use this to register interest in stats output produced by `profile` calls.
 *   Each registered `handler-fn` will be called as:
 * 
 *  (handler-fn {:ns-str _ :level _ :?id _ :?data _ :pstats _ :pstats-str_ _})
 * 
 *   Map args:
 *  :ns-str      - Namespace string where `profile` call took place
 *  :level       - Level e/o #{0 1 2 3 4 5}, given in `(profile {:level _} ...)`
 *  :?id         - Optional group id,        given in `(profile {:id    _} ...)`
 *  :?data       - Optional arb data,        given in `(profile {:data  _} ...)`
 *  :pstats      - As in `(second (profiled ...))`. Derefable, mergeable.
 *  :pstats-str_ - `(delay (format-pstats pstats))
 * 
 *   Error handling (NB):
 *  Handler errors will be silently swallowed. Please `try`/`catch` and
 *  appropriately deal with (e.g. log) possible errors *within* `handler-fn`.
 * 
 *   Async/blocking:
 *  `handler-fn` should ideally be non-blocking, or reasonably cheap. Handler
 *   dispatch occurs through a 1-thread 1k-buffer dropping queue.
 * 
 *   Ns filtering:
 *  Provide an optional `ns-pattern` arg to only call handler for matching
 *  namespaces. See `*ns-filter*` for example patterns.
 * 
 *   Handler ideas:
 *  Save to a db, log, `put!` to an appropriate `core.async` channel, filter,
 *  aggregate, use for a realtime analytics dashboard, examine for outliers
 *  or unexpected output, ...
 */
taoensso.tufte.add_handler_BANG_ = (function taoensso$tufte$add_handler_BANG_(var_args){
var G__34467 = arguments.length;
switch (G__34467) {
case 2:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,null,handler_fn);
}));

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = (((((ns_pattern == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*"))))?handler_fn:(function (){var nsf_QMARK_ = taoensso.encore.compile_str_filter(ns_pattern);
return (function (m){
if(cljs.core.truth_((function (){var G__34468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$ns_DASH_str);
return (nsf_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nsf_QMARK_.cljs$core$IFn$_invoke$arity$1(G__34468) : nsf_QMARK_.call(null,G__34468));
})())){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(m) : handler_fn.call(null,m));
} else {
return null;
}
});
})());
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
}));

(taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__34470){
var map__34471 = p__34470;
var map__34471__$1 = (((((!((map__34471 == null))))?(((((map__34471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34471):map__34471);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34471__$1,cljs.core.cst$kw$ns_DASH_pattern,"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34471__$1,cljs.core.cst$kw$handler_DASH_id,cljs.core.cst$kw$basic_DASH_println);
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34471__$1,cljs.core.cst$kw$format_DASH_pstats_DASH_opts);
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__34473){
var map__34474 = p__34473;
var map__34474__$1 = (((((!((map__34474 == null))))?(((((map__34474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34474):map__34474);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,cljs.core.cst$kw$_QMARK_id);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,cljs.core.cst$kw$_QMARK_data);
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,cljs.core.cst$kw$pstats);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(_QMARK_id)?["\nid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null),(cljs.core.truth_(_QMARK_data)?["\ndata: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(pstats,format_pstats_opts) : taoensso.tufte.format_pstats.call(null,pstats,format_pstats_opts)))].join('')], 0));
}));
});
/**
 * Returns a cached (fn [id]) -> abbreviated id string.
 *   Takes `n` (default 1), the number of namespace parts to keep unabbreviated.
 * 
 *   Examples:
 *  ((format-id-abbr)   :foo)                     => "foo"
 *  ((format-id-abbr)   :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello.world/foo) => "e.h.world/foo"
 *  ((format-id-abbr 2) :example.hello.world/foo) => "e.hello.world/foo"
 *  ((format-id-abbr 0) :example.hello.world/foo) => "e.h.w/foo"
 */
taoensso.tufte.format_id_abbr = (function taoensso$tufte$format_id_abbr(var_args){
var G__34477 = arguments.length;
switch (G__34477) {
case 0:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((1));
}));

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1 = (function (n){
var n__$1 = cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e34478){if((e34478 instanceof Error)){
var e = e34478;
return e;
} else {
throw e34478;

}
}})();
if((e == null)){
return n;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte",273,"(enc/int? n)",n,e,null);
}
})());
return taoensso.encore.fmemoize((function (id){
var kw = (((id instanceof cljs.core.Keyword))?id:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((typeof id === 'string')?id:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte",276,"(string? id)",id,null,null))));
var ns_parts = cljs.core.pop(taoensso.encore.explode_keyword(kw));
var cnt = cljs.core.count(ns_parts);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if(((cnt - idx) <= n__$1)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(in$,(0),(1)));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
if((cnt > (0))){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");
} else {
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.str_replace(cljs.core.name(kw),/^defn_/,""));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));
}));

(taoensso.tufte.format_id_abbr.cljs$lang$maxFixedArity = 1);

/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata_STAR_)){
return cljs.core.cst$kw$dynamic;
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_local_get())){
return cljs.core.cst$kw$thread;
} else {
return null;
}
}
});
taoensso.tufte.default_nmax = cljs.core.long$(800000.0);
/**
 * Note: this is a low-level primitive for advanced users!
 *   Returns a new pdata object for use with `with-profiling` and/or `capture-time!`.
 *   Deref to get pstats:
 * 
 *  (let [pd (new-pdata)
 *        t0 (System/nanoTime)]
 *    (with-profiling pd {}
 *      (p :foo (Thread/sleep 100))
 *      (capture-time! pd :bar (- t0 (System/nanoTime))))
 *    (deref pd))
 * 
 *   Dynamic (thread-safe) by default.
 *   *WARNING*: don't change this default unless you're very sure the resulting
 *   pdata object will not be concurrently modified across threads. Concurrent
 *   modification will lead to bad data and/or exceptions!
 */
taoensso.tufte.new_pdata = (function taoensso$tufte$new_pdata(var_args){
var G__34481 = arguments.length;
switch (G__34481) {
case 0:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1 = (function (p__34482){
var map__34483 = p__34482;
var map__34483__$1 = (((((!((map__34483 == null))))?(((((map__34483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34483):map__34483);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34483__$1,cljs.core.cst$kw$dynamic_QMARK_,true);
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34483__$1,cljs.core.cst$kw$nmax,taoensso.tufte.default_nmax);
if(cljs.core.truth_(dynamic_QMARK_)){
return taoensso.tufte.impl.new_pdata_dynamic(nmax);
} else {
return taoensso.tufte.impl.new_pdata_local(nmax);
}
}));

(taoensso.tufte.new_pdata.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___34494 = (function (){
/**
 * Note: this is a low-level primitive for advanced users!
 *   Enables `p` forms in body and returns body's result.
 * 
 *   If `:dynamic?` is false (default), body's evaluation MUST begin
 *   and end without interruption on the same thread. In particular
 *   this means that body MUST NOT contain any parking `core.async`
 *   calls.
 * 
 *   See `new-pdata` for more info on low-level primitives.
 */
taoensso.tufte.with_profiling = (function taoensso$tufte$with_profiling(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34495 = arguments.length;
var i__4737__auto___34496 = (0);
while(true){
if((i__4737__auto___34496 < len__4736__auto___34495)){
args__4742__auto__.push((arguments[i__4737__auto___34496]));

var G__34497 = (i__4737__auto___34496 + (1));
i__4737__auto___34496 = G__34497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return taoensso.tufte.with_profiling.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(taoensso.tufte.with_profiling.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pdata,p__34491,body){
var map__34492 = p__34491;
var map__34492__$1 = (((((!((map__34492 == null))))?(((((map__34492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34492):map__34492);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34492__$1,cljs.core.cst$kw$dynamic_QMARK_);
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34492__$1,cljs.core.cst$kw$nmax,taoensso.tufte.default_nmax);
if(cljs.core.truth_(dynamic_QMARK_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte$impl_SLASH__STAR_pdata_STAR_,null,(1),null)),(new cljs.core.List(null,pdata,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte$impl_SLASH_pdata_DASH_local_DASH_push,null,(1),null)),(new cljs.core.List(null,pdata,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$finally,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte$impl_SLASH_pdata_DASH_local_DASH_pop,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}
}));

(taoensso.tufte.with_profiling.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.tufte.with_profiling.cljs$lang$applyTo = (function (seq34486){
var G__34487 = cljs.core.first(seq34486);
var seq34486__$1 = cljs.core.next(seq34486);
var G__34488 = cljs.core.first(seq34486__$1);
var seq34486__$2 = cljs.core.next(seq34486__$1);
var G__34489 = cljs.core.first(seq34486__$2);
var seq34486__$3 = cljs.core.next(seq34486__$2);
var G__34490 = cljs.core.first(seq34486__$3);
var seq34486__$4 = cljs.core.next(seq34486__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34487,G__34488,G__34489,G__34490,seq34486__$4);
}));

return null;
})()
;
(taoensso.tufte.with_profiling.cljs$lang$macro = true);

/**
 * Note: this is a low-level primitive for advanced users!
 *   Can be useful when tracking time across arbitrary thread boundaries or for
 *   async jobs / callbacks / etc.
 * 
 *   See `new-pdata` for more info on low-level primitives.
 */
taoensso.tufte.capture_time_BANG_ = (function taoensso$tufte$capture_time_BANG_(var_args){
var G__34499 = arguments.length;
switch (G__34499) {
case 3:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pdata,id,nano_secs_elapsed){
return taoensso.tufte.impl.capture_time_BANG_(pdata,id,nano_secs_elapsed);
}));

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nano_secs_elapsed){
var temp__5804__auto__ = (function (){var or__4126__auto__ = taoensso.tufte.impl._STAR_pdata_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.impl.pdata_local_get();
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pd = temp__5804__auto__;
return taoensso.tufte.impl.capture_time_BANG_(pd,id,nano_secs_elapsed);
} else {
return null;
}
}));

(taoensso.tufte.capture_time_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.tufte.valid_compile_time_opts = (function taoensso$tufte$valid_compile_time_opts(dynamic_QMARK_,nmax){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),dynamic_QMARK_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[profile/d] `:dynamic?` opt must be compile-time bool value",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,dynamic_QMARK_], null));
}

if(cljs.core.integer_QMARK_(nmax)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[profile/d] `:nmax` opt must be compile-time integer value",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,nmax], null));
}
});
/**
 * Wraps `taoensso.encore/compile-str-filter`.
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_str_filter(ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
/**
 * Statistics are lossless unless data to merge are very large.
 */
taoensso.tufte.merge_pstats = (function taoensso$tufte$merge_pstats(var_args){
var G__34506 = arguments.length;
switch (G__34506) {
case 0:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps0){
return ps0;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(ps0,ps1);
}));

(taoensso.tufte.merge_pstats.cljs$lang$maxFixedArity = 2);

/**
 * Formats given pstats to a string table.
 *  Accounted < Clock => Some work was done that wasn't tracked by any p forms.
 *  Accounted > Clock => Nested p forms, and/or parallel threads.
 */
taoensso.tufte.format_pstats = (function taoensso$tufte$format_pstats(var_args){
var G__34509 = arguments.length;
switch (G__34509) {
case 1:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps){
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(ps,null);
}));

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps,opts){
if(cljs.core.truth_(ps)){
var map__34510 = (((ps instanceof taoensso.tufte.impl.PStats))?cljs.core.deref(ps):ps);
var map__34510__$1 = (((((!((map__34510 == null))))?(((((map__34510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34510):map__34510);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34510__$1,cljs.core.cst$kw$clock);
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34510__$1,cljs.core.cst$kw$stats);
return taoensso.tufte.stats.format_stats(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clock,cljs.core.cst$kw$total),stats,opts);
} else {
return null;
}
}));

(taoensso.tufte.format_pstats.cljs$lang$maxFixedArity = 2);

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,_QMARK_meta_pid,fn_sym,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_(cljs.core.first(sigs));
var sigs__$1 = ((single_arity_QMARK_)?(new cljs.core.List(null,sigs,null,(1),null)):sigs);
var base_id = (cljs.core.truth_(_QMARK_meta_pid)?taoensso.encore.as_qname(_QMARK_meta_pid):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",(cljs.core.truth_(def_QMARK_)?"defn_":"fn_"),cljs.core.name(fn_sym)].join(''));
var get_id = ((single_arity_QMARK_)?(function (fn_sym__$1,_params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
}):(function (fn_sym__$1,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([base_id,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''));
}));
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34513){
var vec__34514 = p__34513;
var seq__34515 = cljs.core.seq(vec__34514);
var first__34516 = cljs.core.first(seq__34515);
var seq__34515__$1 = cljs.core.next(seq__34515);
var params = first__34516;
var others = seq__34515__$1;
var has_prepost_map_QMARK_ = ((cljs.core.map_QMARK_(cljs.core.first(others))) && (cljs.core.next(others)));
var vec__34517 = ((has_prepost_map_QMARK_)?others:cljs.core.cons(null,others));
var seq__34518 = cljs.core.seq(vec__34517);
var first__34519 = cljs.core.first(seq__34518);
var seq__34518__$1 = cljs.core.next(seq__34518);
var _QMARK_prepost_map = first__34519;
var body = seq__34518__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,_QMARK_prepost_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte_SLASH_p,null,(1),null)),(new cljs.core.List(null,(get_id.cljs$core$IFn$_invoke$arity$2 ? get_id.cljs$core$IFn$_invoke$arity$2(fn_sym,params) : get_id.call(null,fn_sym,params)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte_SLASH_p,null,(1),null)),(new cljs.core.List(null,(get_id.cljs$core$IFn$_invoke$arity$2 ? get_id.cljs$core$IFn$_invoke$arity$2(fn_sym,params) : get_id.call(null,fn_sym,params)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
}),sigs__$1);
return new_sigs;
});
var ret__4785__auto___34526 = (function (){
/**
 * Like `fn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.fnp = (function taoensso$tufte$fnp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34527 = arguments.length;
var i__4737__auto___34528 = (0);
while(true){
if((i__4737__auto___34528 < len__4736__auto___34527)){
args__4742__auto__.push((arguments[i__4737__auto___34528]));

var G__34529 = (i__4737__auto___34528 + (1));
i__4737__auto___34528 = G__34529;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__34523 = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(sigs),cljs.core.next(sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_fn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(1),null);
var new_sigs = taoensso.tufte.fn_sigs(cljs.core.not(cljs.core.cst$kw$def),cljs.core.cst$kw$tufte_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_QMARK_fn_sym)),(function (){var or__4126__auto__ = _QMARK_fn_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("");
}
})(),sigs__$1);
if(cljs.core.truth_(_QMARK_fn_sym)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,_QMARK_fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_sigs], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),new_sigs)));
}
}));

(taoensso.tufte.fnp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.fnp.cljs$lang$applyTo = (function (seq34520){
var G__34521 = cljs.core.first(seq34520);
var seq34520__$1 = cljs.core.next(seq34520);
var G__34522 = cljs.core.first(seq34520__$1);
var seq34520__$2 = cljs.core.next(seq34520__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34521,G__34522,seq34520__$2);
}));

return null;
})()
;
(taoensso.tufte.fnp.cljs$lang$macro = true);

var ret__4785__auto___34536 = (function (){
/**
 * Like `defn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp = (function taoensso$tufte$defnp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34537 = arguments.length;
var i__4737__auto___34538 = (0);
while(true){
if((i__4737__auto___34538 < len__4736__auto___34537)){
args__4742__auto__.push((arguments[i__4737__auto___34538]));

var G__34539 = (i__4737__auto___34538 + (1));
i__4737__auto___34538 = G__34539;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__34533 = taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.next(sigs));
var fn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(1),null);
var new_sigs = taoensso.tufte.fn_sigs(cljs.core.cst$kw$def,cljs.core.cst$kw$tufte_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fn_sym)),fn_sym,sigs__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_sigs], 0))));
}));

(taoensso.tufte.defnp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.defnp.cljs$lang$applyTo = (function (seq34530){
var G__34531 = cljs.core.first(seq34530);
var seq34530__$1 = cljs.core.next(seq34530);
var G__34532 = cljs.core.first(seq34530__$1);
var seq34530__$2 = cljs.core.next(seq34530__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34531,G__34532,seq34530__$2);
}));

return null;
})()
;
(taoensso.tufte.defnp.cljs$lang$macro = true);

var ret__4785__auto___34546 = (function (){
/**
 * Like `defn-` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp_ = (function taoensso$tufte$defnp_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34547 = arguments.length;
var i__4737__auto___34548 = (0);
while(true){
if((i__4737__auto___34548 < len__4736__auto___34547)){
args__4742__auto__.push((arguments[i__4737__auto___34548]));

var G__34549 = (i__4737__auto___34548 + (1));
i__4737__auto___34548 = G__34549;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.defnp_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__34543 = taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sigs),cljs.core.next(sigs),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$private,true], null));
var fn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543,(0),null);
var sigs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34543,(1),null);
var new_sigs = taoensso.tufte.fn_sigs(cljs.core.cst$kw$def,cljs.core.cst$kw$tufte_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fn_sym)),fn_sym,sigs__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_sigs], 0))));
}));

(taoensso.tufte.defnp_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.defnp_.cljs$lang$applyTo = (function (seq34540){
var G__34541 = cljs.core.first(seq34540);
var seq34540__$1 = cljs.core.next(seq34540);
var G__34542 = cljs.core.first(seq34540__$1);
var seq34540__$2 = cljs.core.next(seq34540__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34541,G__34542,seq34540__$2);
}));

return null;
})()
;
(taoensso.tufte.defnp_.cljs$lang$macro = true);

taoensso.tufte.sacc_drain_and_merge_BANG_ = (function taoensso$tufte$sacc_drain_and_merge_BANG_(pstats_){
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,cljs.core.PersistentArrayMap.EMPTY);
});
taoensso.tufte.sacc_add_BANG_ = (function taoensso$tufte$sacc_add_BANG_(pstats_,group_id,ps){
if(cljs.core.truth_((function (){var and__4115__auto__ = group_id;
if(cljs.core.truth_(and__4115__auto__)){
return ps;
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,group_id,taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,group_id),ps));
}));

return true;
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.StatsAccumulator = (function (pstats_){
this.pstats_ = pstats_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.StatsAccumulator.prototype.call = (function (self__,group_id,ps){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return taoensso.tufte.sacc_add_BANG_(self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.apply = (function (self__,args34550){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args34550)));
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (group_id,ps){
var self__ = this;
var _ = this;
return taoensso.tufte.sacc_add_BANG_(self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.tufte.sacc_drain_and_merge_BANG_(self__.pstats_);
}));

(taoensso.tufte.StatsAccumulator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pstats_], null);
}));

(taoensso.tufte.StatsAccumulator.cljs$lang$type = true);

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorStr = "taoensso.tufte/StatsAccumulator");

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.tufte/StatsAccumulator");
}));

/**
 * Positional factory function for taoensso.tufte/StatsAccumulator.
 */
taoensso.tufte.__GT_StatsAccumulator = (function taoensso$tufte$__GT_StatsAccumulator(pstats_){
return (new taoensso.tufte.StatsAccumulator(pstats_));
});

/**
 * Alpha, subject to change.
 *   Small util to help merge pstats from multiple runs or threads.
 * 
 *   Returns a stateful StatsAccumulator (`sacc`) with:
 *  - `(sacc <group-id> <pstats>)` ; Merges given pstats under given group id
 *  - `@sacc`                      ; Drains accumulator and returns {<group-id> <merged-pstats>}
 * 
 *   Note that you may want some kind of async/buffer/serialization
 *   mechanism in front of merge calls for performance (e.g. by using an agent).
 * 
 *   See also `add-accumulating-handler!`, example clj project.
 */
taoensso.tufte.stats_accumulator = (function taoensso$tufte$stats_accumulator(){
return (new taoensso.tufte.StatsAccumulator(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)));
});
/**
 * Alpha, subject to change.
 * 
 *   Creates a new StatsAccumulator (and agent in clj), then
 *   registers a handler to accumulate `profile` output to the
 *   StatsAccumulator using the agent.
 * 
 *   Returns the StatsAccumulator. You can deref the result to
 *   drain the accumulator and return {<group-id> <merged-pstats>}.
 * 
 *   One common pattern is to deref the accumulator every n
 *   minutes/etc. to get a view of total-system performance over
 *   the period, e.g.:
 * 
 *   (defonce my-sacc (add-accumulating-handler! {:ns-pattern "*"}))
 *   (defonce my-sacc-drainer
 *  ;; Will drain and print formatted stats every minute
 *  (future
 *    (while true
 *      (when-let [m (not-empty @my-sacc)]
 *        (println (format-grouped-pstats m)))
 *      (Thread/sleep 60000))))
 * 
 *   (profile ...) ; Used elsewhere in your application, e.g.
 *              ; wrapping relevant Ring routes in a web application.
 * 
 *   See also `format-grouped-pstats`, example clj project.
 */
taoensso.tufte.add_accumulating_handler_BANG_ = (function taoensso$tufte$add_accumulating_handler_BANG_(p__34551){
var map__34552 = p__34551;
var map__34552__$1 = (((((!((map__34552 == null))))?(((((map__34552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34552):map__34552);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34552__$1,cljs.core.cst$kw$ns_DASH_pattern,"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34552__$1,cljs.core.cst$kw$handler_DASH_id,cljs.core.cst$kw$accumulating);
var sacc = taoensso.tufte.stats_accumulator();
var agent_ = null;
taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__34554){
var map__34555 = p__34554;
var map__34555__$1 = (((((!((map__34555 == null))))?(((((map__34555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34555):map__34555);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34555__$1,cljs.core.cst$kw$_QMARK_id);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34555__$1,cljs.core.cst$kw$_QMARK_data);
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34555__$1,cljs.core.cst$kw$pstats);
var id = (function (){var or__4126__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$tufte_SLASH_nil_DASH_id;
}
})();
return (sacc.cljs$core$IFn$_invoke$arity$2 ? sacc.cljs$core$IFn$_invoke$arity$2(id,pstats) : sacc.call(null,id,pstats));
}));

return sacc;
});
/**
 * Alpha, subject to change.
 *   Takes a map of {<group-id> <PStats>} and formats a combined
 *   output string using `format-pstats`.
 * 
 *   See also example clj project.
 */
taoensso.tufte.format_grouped_pstats = (function taoensso$tufte$format_grouped_pstats(var_args){
var G__34558 = arguments.length;
switch (G__34558) {
case 1:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2 = (function (m,p__34559){
var map__34560 = p__34559;
var map__34560__$1 = (((((!((map__34560 == null))))?(((((map__34560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34560):map__34560);
var group_sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34560__$1,cljs.core.cst$kw$group_DASH_sort_DASH_fn,(function (m__$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clock,cljs.core.cst$kw$total], null),(0));
}));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34560__$1,cljs.core.cst$kw$format_DASH_pstats_DASH_opts);
if(cljs.core.truth_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,taoensso.encore.force_ref(v));
}),cljs.core.transient$(m),m));
var sorted_group_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__34562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id);
return (group_sort_fn.cljs$core$IFn$_invoke$arity$1 ? group_sort_fn.cljs$core$IFn$_invoke$arity$1(G__34562) : group_sort_fn.call(null,G__34562));
}),taoensso.encore.rcompare,cljs.core.keys(m__$1));
var max_id_width = cljs.core.reduce_kv((function (acc,_,p__34563){
var map__34564 = p__34563;
var map__34564__$1 = (((((!((map__34564 == null))))?(((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34564):map__34564);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,cljs.core.cst$kw$clock);
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,cljs.core.cst$kw$stats);
var temp__5802__auto__ = taoensso.tufte.stats.get_max_id_width(stats,format_pstats_opts);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if((cljs.core.long$(c) > acc)){
return c;
} else {
return acc;
}
} else {
return acc;
}
}),(0),m__$1);
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),",\n",taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(format_pstats_opts,cljs.core.cst$kw$max_DASH_id_DASH_width,max_id_width))].join('');
})),sorted_group_ids);
} else {
return null;
}
}));

(taoensso.tufte.format_grouped_pstats.cljs$lang$maxFixedArity = 2);

var ret__4785__auto___34575 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34576 = arguments.length;
var i__4737__auto___34577 = (0);
while(true){
if((i__4737__auto___34577 < len__4736__auto___34576)){
args__4742__auto__.push((arguments[i__4737__auto___34577]));

var G__34578 = (i__4737__auto___34577 + (1));
i__4737__auto___34577 = G__34578;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte_SLASH__STAR_min_DASH_level_STAR_,null,(1),null)),(new cljs.core.List(null,level,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq34567){
var G__34568 = cljs.core.first(seq34567);
var seq34567__$1 = cljs.core.next(seq34567);
var G__34569 = cljs.core.first(seq34567__$1);
var seq34567__$2 = cljs.core.next(seq34567__$1);
var G__34570 = cljs.core.first(seq34567__$2);
var seq34567__$3 = cljs.core.next(seq34567__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34568,G__34569,G__34570,seq34567__$3);
}));

return null;
})()
;
(taoensso.tufte.with_min_level.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_min_level_BANG_ = (function taoensso$tufte$set_min_level_BANG_(level){
return (taoensso.tufte._STAR_min_level_STAR_ = level);
});

var ret__4785__auto___34579 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34580 = arguments.length;
var i__4737__auto___34581 = (0);
while(true){
if((i__4737__auto___34581 < len__4736__auto___34580)){
args__4742__auto__.push((arguments[i__4737__auto___34581]));

var G__34582 = (i__4737__auto___34581 + (1));
i__4737__auto___34581 = G__34582;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$tufte_SLASH__STAR_ns_DASH_filter_STAR_,null,(1),null)),(new cljs.core.List(null,ns_pattern,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq34571){
var G__34572 = cljs.core.first(seq34571);
var seq34571__$1 = cljs.core.next(seq34571);
var G__34573 = cljs.core.first(seq34571__$1);
var seq34571__$2 = cljs.core.next(seq34571__$1);
var G__34574 = cljs.core.first(seq34571__$2);
var seq34571__$3 = cljs.core.next(seq34571__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34572,G__34573,G__34574,seq34571__$3);
}));

return null;
})()
;
(taoensso.tufte.with_ns_pattern.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
return (taoensso.tufte._STAR_ns_filter_STAR_ = ns_pattern);
});
