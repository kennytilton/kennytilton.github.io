// Compiled by ClojureScript 1.10.773 {}
goog.provide('taoensso.tufte');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('taoensso.tufte.stats');
goog.require('taoensso.tufte.impl');
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(31),(0)], null));
taoensso.tufte.valid_call_level_QMARK_ = (function taoensso$tufte$valid_call_level_QMARK_(x){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null).call(null,x))){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null).call(null,x))){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_call_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_call_level = (function taoensso$tufte$valid_call_level(x){
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null).call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null).call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.call(null,"Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
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
var fn_QMARK__32643 = cljs.core.fn_QMARK_;
var compile_32644 = taoensso.encore.fmemoize.call(null,(function (x){
return taoensso.encore.compile_str_filter.call(null,x);
}));
var conform_QMARK__STAR__32645 = taoensso.encore.fmemoize.call(null,(function (x,ns){
return compile_32644.call(null,x).call(null,ns);
}));
var conform_QMARK__32646 = (function (ns_filter,ns){
if(cljs.core.truth_(fn_QMARK__32643.call(null,ns_filter))){
return ns_filter.call(null,ns);
} else {
return conform_QMARK__STAR__32645.call(null,ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.tufte.may_profile_ns_QMARK_ = (function taoensso$tufte$may_profile_ns_QMARK_(var_args){
var G__32638 = arguments.length;
switch (G__32638) {
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
if(cljs.core.truth_(conform_QMARK__32646.call(null,taoensso.tufte._STAR_ns_filter_STAR_,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__32646.call(null,ns_filter,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$lang$maxFixedArity = 2);


/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.tufte.ns__GT__QMARK_min_level = taoensso.encore.fmemoize.call(null,(function (specs,ns){
return taoensso.encore.rsome.call(null,(function (p__32639){
var vec__32640 = p__32639;
var ns_pattern = cljs.core.nth.call(null,vec__32640,(0),null);
var min_level = cljs.core.nth.call(null,vec__32640,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__32645.call(null,ns_pattern,ns))){
return taoensso.tufte.valid_min_level.call(null,min_level);
} else {
return null;
}
}),specs);
}));
var valid_min_level_32648 = taoensso.tufte.valid_min_level;
var ns__GT__QMARK_min_level_32649 = taoensso.tufte.ns__GT__QMARK_min_level;
taoensso.tufte.get_min_level = (function taoensso$tufte$get_min_level(default$,x,ns){
return valid_min_level_32648.call(null,(function (){var or__4126__auto__ = ((cljs.core.vector_QMARK_.call(null,x))?ns__GT__QMARK_min_level_32649.call(null,x,ns):x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
})());
});
var valid_call_level_32652 = taoensso.tufte.valid_call_level;
var may_profile_ns_QMARK__32653 = taoensso.tufte.may_profile_ns_QMARK_;
var get_min_level_32654 = taoensso.tufte.get_min_level;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__32651 = arguments.length;
switch (G__32651) {
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
return taoensso.tufte.may_profile_QMARK_.call(null,level,cljs.core._STAR_ns_STAR_);
}));

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if((valid_call_level_32652.call(null,level) >= cljs.core.long$.call(null,get_min_level_32654.call(null,(6),taoensso.tufte._STAR_min_level_STAR_,ns)))){
if(cljs.core.truth_(may_profile_ns_QMARK__32653.call(null,taoensso.tufte._STAR_ns_filter_STAR_,ns))){
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

(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32657,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32661 = k32657;
var G__32661__$1 = (((G__32661 instanceof cljs.core.Keyword))?G__32661.fqn:null);
switch (G__32661__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k32657,else__4383__auto__);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__32662){
var vec__32663 = p__32662;
var k__4403__auto__ = cljs.core.nth.call(null,vec__32663,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__32663,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32656){
var self__ = this;
var G__32656__$1 = this;
return (new cljs.core.RecordIter((0),G__32656__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32658,other32659){
var self__ = this;
var this32658__$1 = this;
return (((!((other32659 == null)))) && ((this32658__$1.constructor === other32659.constructor)) && (cljs.core._EQ_.call(null,this32658__$1.ns_str,other32659.ns_str)) && (cljs.core._EQ_.call(null,this32658__$1.level,other32659.level)) && (cljs.core._EQ_.call(null,this32658__$1._QMARK_id,other32659._QMARK_id)) && (cljs.core._EQ_.call(null,this32658__$1._QMARK_data,other32659._QMARK_data)) && (cljs.core._EQ_.call(null,this32658__$1.pstats,other32659.pstats)) && (cljs.core._EQ_.call(null,this32658__$1.pstats_str_,other32659.pstats_str_)) && (cljs.core._EQ_.call(null,this32658__$1._QMARK_file,other32659._QMARK_file)) && (cljs.core._EQ_.call(null,this32658__$1._QMARK_line,other32659._QMARK_line)) && (cljs.core._EQ_.call(null,this32658__$1.__extmap,other32659.__extmap)));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"?file","?file",1533429675),null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"?line","?line",-631853385),null,new cljs.core.Keyword(null,"pstats","pstats",276614232),null,new cljs.core.Keyword(null,"?id","?id",-712098248),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32656){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32666 = cljs.core.keyword_identical_QMARK_;
var expr__32667 = k__4388__auto__;
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__32667))){
return (new taoensso.tufte.HandlerVal(G__32656,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__32656,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"?id","?id",-712098248),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__32656,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__32656,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__32656,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,G__32656,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"?file","?file",1533429675),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,G__32656,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32666.call(null,new cljs.core.Keyword(null,"?line","?line",-631853385),expr__32667))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,G__32656,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__32656),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"level","level",1290497552),self__.level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line,null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32656){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,G__32656,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),new cljs.core.Symbol(null,"pstats","pstats",1917145759,null),new cljs.core.Symbol(null,"pstats-str_","pstats-str_",-735205348,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Symbol(null,"?line","?line",1008678142,null)], null);
}));

(taoensso.tufte.HandlerVal.cljs$lang$type = true);

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.tufte/HandlerVal",null,(1),null));
}));

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"taoensso.tufte/HandlerVal");
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
taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__32660){
var extmap__4419__auto__ = (function (){var G__32669 = cljs.core.dissoc.call(null,G__32660,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385));
if(cljs.core.record_QMARK_.call(null,G__32660)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32669);
} else {
return G__32669;
}
})();
return (new taoensso.tufte.HandlerVal(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"?id","?id",-712098248).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"pstats","pstats",276614232).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"?file","?file",1533429675).cljs$core$IFn$_invoke$arity$1(G__32660),new cljs.core.Keyword(null,"?line","?line",-631853385).cljs$core$IFn$_invoke$arity$1(G__32660),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.swap_BANG_.call(null,taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
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
var G__32672 = arguments.length;
switch (G__32672) {
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
return taoensso.tufte.add_handler_BANG_.call(null,handler_id,null,handler_fn);
}));

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = (((((ns_pattern == null)) || (cljs.core._EQ_.call(null,ns_pattern,"*"))))?handler_fn:(function (){var nsf_QMARK_ = taoensso.encore.compile_str_filter.call(null,ns_pattern);
return (function (m){
if(cljs.core.truth_(nsf_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499))))){
return handler_fn.call(null,m);
} else {
return null;
}
});
})());
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.swap_BANG_.call(null,taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
}));

(taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__32674){
var map__32675 = p__32674;
var map__32675__$1 = (((((!((map__32675 == null))))?(((((map__32675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32675):map__32675);
var ns_pattern = cljs.core.get.call(null,map__32675__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.call(null,map__32675__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"basic-println","basic-println",-1128346249));
var format_pstats_opts = cljs.core.get.call(null,map__32675__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
return taoensso.tufte.add_handler_BANG_.call(null,handler_id,ns_pattern,(function (p__32677){
var map__32678 = p__32677;
var map__32678__$1 = (((((!((map__32678 == null))))?(((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32678):map__32678);
var _QMARK_id = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
return cljs.core.println.call(null,[(cljs.core.truth_(_QMARK_id)?["\nid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null),(cljs.core.truth_(_QMARK_data)?["\ndata: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.format_pstats.call(null,pstats,format_pstats_opts))].join(''));
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
var G__32681 = arguments.length;
switch (G__32681) {
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
return taoensso.tufte.format_id_abbr.call(null,(1));
}));

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1 = (function (n){
var n__$1 = cljs.core.long$.call(null,(function (){var e = (function (){try{if(taoensso.encore.int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e32682){if((e32682 instanceof Error)){
var e = e32682;
return e;
} else {
throw e32682;

}
}})();
if((e == null)){
return n;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tufte",273,"(enc/int? n)",n,e,null);
}
})());
return taoensso.encore.fmemoize.call(null,(function (id){
var kw = (((id instanceof cljs.core.Keyword))?id:cljs.core.keyword.call(null,((typeof id === 'string')?id:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.tufte",276,"(string? id)",id,null,null))));
var ns_parts = cljs.core.pop.call(null,taoensso.encore.explode_keyword.call(null,kw));
var cnt = cljs.core.count.call(null,ns_parts);
var sb = taoensso.encore.reduce_indexed.call(null,(function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.call(null,sb,".");
}

if(((cnt - idx) <= n__$1)){
return taoensso.encore.sb_append.call(null,sb,in$);
} else {
return taoensso.encore.sb_append.call(null,sb,taoensso.encore.get_substr_by_idx.call(null,in$,(0),(1)));
}
}),taoensso.encore.str_builder.call(null),ns_parts);
if((cnt > (0))){
taoensso.encore.sb_append.call(null,sb,"/");
} else {
}

taoensso.encore.sb_append.call(null,sb,taoensso.encore.str_replace.call(null,cljs.core.name.call(null,kw),/^defn_/,""));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));
}));

(taoensso.tufte.format_id_abbr.cljs$lang$maxFixedArity = 1);

/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata_STAR_)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571);
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_local_get.call(null))){
return new cljs.core.Keyword(null,"thread","thread",947001524);
} else {
return null;
}
}
});
taoensso.tufte.default_nmax = cljs.core.long$.call(null,800000.0);
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
var G__32685 = arguments.length;
switch (G__32685) {
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
return taoensso.tufte.new_pdata.call(null,null);
}));

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1 = (function (p__32686){
var map__32687 = p__32686;
var map__32687__$1 = (((((!((map__32687 == null))))?(((((map__32687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32687):map__32687);
var dynamic_QMARK_ = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),true);
var nmax = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404),taoensso.tufte.default_nmax);
if(cljs.core.truth_(dynamic_QMARK_)){
return taoensso.tufte.impl.new_pdata_dynamic.call(null,nmax);
} else {
return taoensso.tufte.impl.new_pdata_local.call(null,nmax);
}
}));

(taoensso.tufte.new_pdata.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___32698 = (function (){
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
var len__4736__auto___32699 = arguments.length;
var i__4737__auto___32700 = (0);
while(true){
if((i__4737__auto___32700 < len__4736__auto___32699)){
args__4742__auto__.push((arguments[i__4737__auto___32700]));

var G__32701 = (i__4737__auto___32700 + (1));
i__4737__auto___32700 = G__32701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return taoensso.tufte.with_profiling.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(taoensso.tufte.with_profiling.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pdata,p__32695,body){
var map__32696 = p__32695;
var map__32696__$1 = (((((!((map__32696 == null))))?(((((map__32696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32696):map__32696);
var dynamic_QMARK_ = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423));
var nmax = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404),taoensso.tufte.default_nmax);
if(cljs.core.truth_(dynamic_QMARK_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte.impl","*pdata*","taoensso.tufte.impl/*pdata*",-2034311993,null),null,(1),null)),(new cljs.core.List(null,pdata,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte.impl","pdata-local-push","taoensso.tufte.impl/pdata-local-push",2010607670,null),null,(1),null)),(new cljs.core.List(null,pdata,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte.impl","pdata-local-pop","taoensso.tufte.impl/pdata-local-pop",-642095391,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}
}));

(taoensso.tufte.with_profiling.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(taoensso.tufte.with_profiling.cljs$lang$applyTo = (function (seq32690){
var G__32691 = cljs.core.first.call(null,seq32690);
var seq32690__$1 = cljs.core.next.call(null,seq32690);
var G__32692 = cljs.core.first.call(null,seq32690__$1);
var seq32690__$2 = cljs.core.next.call(null,seq32690__$1);
var G__32693 = cljs.core.first.call(null,seq32690__$2);
var seq32690__$3 = cljs.core.next.call(null,seq32690__$2);
var G__32694 = cljs.core.first.call(null,seq32690__$3);
var seq32690__$4 = cljs.core.next.call(null,seq32690__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32691,G__32692,G__32693,G__32694,seq32690__$4);
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
var G__32703 = arguments.length;
switch (G__32703) {
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
return taoensso.tufte.impl.capture_time_BANG_.call(null,pdata,id,nano_secs_elapsed);
}));

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nano_secs_elapsed){
var temp__5804__auto__ = (function (){var or__4126__auto__ = taoensso.tufte.impl._STAR_pdata_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.tufte.impl.pdata_local_get.call(null);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pd = temp__5804__auto__;
return taoensso.tufte.impl.capture_time_BANG_.call(null,pd,id,nano_secs_elapsed);
} else {
return null;
}
}));

(taoensso.tufte.capture_time_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.tufte.valid_compile_time_opts = (function taoensso$tufte$valid_compile_time_opts(dynamic_QMARK_,nmax){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),dynamic_QMARK_)){
} else {
throw cljs.core.ex_info.call(null,"[profile/d] `:dynamic?` opt must be compile-time bool value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),dynamic_QMARK_], null));
}

if(cljs.core.integer_QMARK_.call(null,nmax)){
return null;
} else {
throw cljs.core.ex_info.call(null,"[profile/d] `:nmax` opt must be compile-time integer value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nmax], null));
}
});
/**
 * Wraps `taoensso.encore/compile-str-filter`.
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_str_filter.call(null,ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.call(null) < p);
});
/**
 * Statistics are lossless unless data to merge are very large.
 */
taoensso.tufte.merge_pstats = (function taoensso$tufte$merge_pstats(var_args){
var G__32710 = arguments.length;
switch (G__32710) {
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
return taoensso.tufte.impl.merge_pstats.call(null,ps0,ps1);
}));

(taoensso.tufte.merge_pstats.cljs$lang$maxFixedArity = 2);

/**
 * Formats given pstats to a string table.
 *  Accounted < Clock => Some work was done that wasn't tracked by any p forms.
 *  Accounted > Clock => Nested p forms, and/or parallel threads.
 */
taoensso.tufte.format_pstats = (function taoensso$tufte$format_pstats(var_args){
var G__32713 = arguments.length;
switch (G__32713) {
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
return taoensso.tufte.format_pstats.call(null,ps,null);
}));

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps,opts){
if(cljs.core.truth_(ps)){
var map__32714 = (((ps instanceof taoensso.tufte.impl.PStats))?cljs.core.deref.call(null,ps):ps);
var map__32714__$1 = (((((!((map__32714 == null))))?(((((map__32714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32714):map__32714);
var clock = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
return taoensso.tufte.stats.format_stats.call(null,cljs.core.get.call(null,clock,new cljs.core.Keyword(null,"total","total",1916810418)),stats,opts);
} else {
return null;
}
}));

(taoensso.tufte.format_pstats.cljs$lang$maxFixedArity = 2);

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,_QMARK_meta_pid,fn_sym,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs));
var sigs__$1 = ((single_arity_QMARK_)?(new cljs.core.List(null,sigs,null,(1),null)):sigs);
var base_id = (cljs.core.truth_(_QMARK_meta_pid)?taoensso.encore.as_qname.call(null,_QMARK_meta_pid):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",(cljs.core.truth_(def_QMARK_)?"defn_":"fn_"),cljs.core.name.call(null,fn_sym)].join(''));
var get_id = ((single_arity_QMARK_)?(function (fn_sym__$1,_params){
return cljs.core.keyword.call(null,base_id);
}):(function (fn_sym__$1,params){
return cljs.core.keyword.call(null,[base_id,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,params))].join(''));
}));
var new_sigs = cljs.core.map.call(null,(function (p__32717){
var vec__32718 = p__32717;
var seq__32719 = cljs.core.seq.call(null,vec__32718);
var first__32720 = cljs.core.first.call(null,seq__32719);
var seq__32719__$1 = cljs.core.next.call(null,seq__32719);
var params = first__32720;
var others = seq__32719__$1;
var has_prepost_map_QMARK_ = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,others))) && (cljs.core.next.call(null,others)));
var vec__32721 = ((has_prepost_map_QMARK_)?others:cljs.core.cons.call(null,null,others));
var seq__32722 = cljs.core.seq.call(null,vec__32721);
var first__32723 = cljs.core.first.call(null,seq__32722);
var seq__32722__$1 = cljs.core.next.call(null,seq__32722);
var _QMARK_prepost_map = first__32723;
var body = seq__32722__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,_QMARK_prepost_map,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id.call(null,fn_sym,params),null,(1),null)),body))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id.call(null,fn_sym,params),null,(1),null)),body))),null,(1),null)))));
}
}),sigs__$1);
return new_sigs;
});
var ret__4785__auto___32730 = (function (){
/**
 * Like `fn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.fnp = (function taoensso$tufte$fnp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32731 = arguments.length;
var i__4737__auto___32732 = (0);
while(true){
if((i__4737__auto___32732 < len__4736__auto___32731)){
args__4742__auto__.push((arguments[i__4737__auto___32732]));

var G__32733 = (i__4737__auto___32732 + (1));
i__4737__auto___32732 = G__32733;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.fnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__32727 = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_fn_sym = cljs.core.nth.call(null,vec__32727,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__32727,(1),null);
var new_sigs = taoensso.tufte.fn_sigs.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"def","def",-1043430536)),new cljs.core.Keyword("tufte","id","tufte/id",-1276766466).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_QMARK_fn_sym)),(function (){var or__4126__auto__ = _QMARK_fn_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null,"");
}
})(),sigs__$1);
if(cljs.core.truth_(_QMARK_fn_sym)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,_QMARK_fn_sym,null,(1),null)),new_sigs)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),new_sigs)));
}
}));

(taoensso.tufte.fnp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.fnp.cljs$lang$applyTo = (function (seq32724){
var G__32725 = cljs.core.first.call(null,seq32724);
var seq32724__$1 = cljs.core.next.call(null,seq32724);
var G__32726 = cljs.core.first.call(null,seq32724__$1);
var seq32724__$2 = cljs.core.next.call(null,seq32724__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32725,G__32726,seq32724__$2);
}));

return null;
})()
;
(taoensso.tufte.fnp.cljs$lang$macro = true);

var ret__4785__auto___32740 = (function (){
/**
 * Like `defn` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp = (function taoensso$tufte$defnp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32741 = arguments.length;
var i__4737__auto___32742 = (0);
while(true){
if((i__4737__auto___32742 < len__4736__auto___32741)){
args__4742__auto__.push((arguments[i__4737__auto___32742]));

var G__32743 = (i__4737__auto___32742 + (1));
i__4737__auto___32742 = G__32743;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.defnp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__32737 = taoensso.encore.name_with_attrs.call(null,cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs));
var fn_sym = cljs.core.nth.call(null,vec__32737,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__32737,(1),null);
var new_sigs = taoensso.tufte.fn_sigs.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword("tufte","id","tufte/id",-1276766466).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fn_sym)),fn_sym,sigs__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),new_sigs)));
}));

(taoensso.tufte.defnp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.defnp.cljs$lang$applyTo = (function (seq32734){
var G__32735 = cljs.core.first.call(null,seq32734);
var seq32734__$1 = cljs.core.next.call(null,seq32734);
var G__32736 = cljs.core.first.call(null,seq32734__$1);
var seq32734__$2 = cljs.core.next.call(null,seq32734__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32735,G__32736,seq32734__$2);
}));

return null;
})()
;
(taoensso.tufte.defnp.cljs$lang$macro = true);

var ret__4785__auto___32750 = (function (){
/**
 * Like `defn-` but wraps fn bodies with `p` macro.
 */
taoensso.tufte.defnp_ = (function taoensso$tufte$defnp_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32751 = arguments.length;
var i__4737__auto___32752 = (0);
while(true){
if((i__4737__auto___32752 < len__4736__auto___32751)){
args__4742__auto__.push((arguments[i__4737__auto___32752]));

var G__32753 = (i__4737__auto___32752 + (1));
i__4737__auto___32752 = G__32753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.tufte.defnp_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.tufte.defnp_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var vec__32747 = taoensso.encore.name_with_attrs.call(null,cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"private","private",-558947994),true], null));
var fn_sym = cljs.core.nth.call(null,vec__32747,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__32747,(1),null);
var new_sigs = taoensso.tufte.fn_sigs.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword("tufte","id","tufte/id",-1276766466).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fn_sym)),fn_sym,sigs__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),new_sigs)));
}));

(taoensso.tufte.defnp_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.tufte.defnp_.cljs$lang$applyTo = (function (seq32744){
var G__32745 = cljs.core.first.call(null,seq32744);
var seq32744__$1 = cljs.core.next.call(null,seq32744);
var G__32746 = cljs.core.first.call(null,seq32744__$1);
var seq32744__$2 = cljs.core.next.call(null,seq32744__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32745,G__32746,seq32744__$2);
}));

return null;
})()
;
(taoensso.tufte.defnp_.cljs$lang$macro = true);

taoensso.tufte.sacc_drain_and_merge_BANG_ = (function taoensso$tufte$sacc_drain_and_merge_BANG_(pstats_){
return taoensso.encore.reset_in_BANG_.call(null,pstats_,cljs.core.PersistentArrayMap.EMPTY);
});
taoensso.tufte.sacc_add_BANG_ = (function taoensso$tufte$sacc_add_BANG_(pstats_,group_id,ps){
if(cljs.core.truth_((function (){var and__4115__auto__ = group_id;
if(cljs.core.truth_(and__4115__auto__)){
return ps;
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,pstats_,(function (m){
return cljs.core.assoc.call(null,m,group_id,taoensso.tufte.impl.merge_pstats.call(null,cljs.core.get.call(null,m,group_id),ps));
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
return taoensso.tufte.sacc_add_BANG_.call(null,self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.apply = (function (self__,args32754){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32754)));
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (group_id,ps){
var self__ = this;
var _ = this;
return taoensso.tufte.sacc_add_BANG_.call(null,self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.tufte.sacc_drain_and_merge_BANG_.call(null,self__.pstats_);
}));

(taoensso.tufte.StatsAccumulator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pstats_","pstats_",-970084866,null)], null);
}));

(taoensso.tufte.StatsAccumulator.cljs$lang$type = true);

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorStr = "taoensso.tufte/StatsAccumulator");

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"taoensso.tufte/StatsAccumulator");
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
return (new taoensso.tufte.StatsAccumulator(cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));
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
taoensso.tufte.add_accumulating_handler_BANG_ = (function taoensso$tufte$add_accumulating_handler_BANG_(p__32755){
var map__32756 = p__32755;
var map__32756__$1 = (((((!((map__32756 == null))))?(((((map__32756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);
var ns_pattern = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"accumulating","accumulating",988482775));
var sacc = taoensso.tufte.stats_accumulator.call(null);
var agent_ = null;
taoensso.tufte.add_handler_BANG_.call(null,handler_id,ns_pattern,(function (p__32758){
var map__32759 = p__32758;
var map__32759__$1 = (((((!((map__32759 == null))))?(((((map__32759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);
var _QMARK_id = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
var id = (function (){var or__4126__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("tufte","nil-id","tufte/nil-id",1406139614);
}
})();
return sacc.call(null,id,pstats);
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
var G__32762 = arguments.length;
switch (G__32762) {
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
return taoensso.tufte.format_grouped_pstats.call(null,m,null);
}));

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2 = (function (m,p__32763){
var map__32764 = p__32763;
var map__32764__$1 = (((((!((map__32764 == null))))?(((((map__32764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32764):map__32764);
var group_sort_fn = cljs.core.get.call(null,map__32764__$1,new cljs.core.Keyword(null,"group-sort-fn","group-sort-fn",1474480015),(function (m__$1){
return cljs.core.get_in.call(null,m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null),(0));
}));
var format_pstats_opts = cljs.core.get.call(null,map__32764__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
if(cljs.core.truth_(m)){
var m__$1 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,k,taoensso.encore.force_ref.call(null,v));
}),cljs.core.transient$.call(null,m),m));
var sorted_group_ids = cljs.core.sort_by.call(null,(function (id){
return group_sort_fn.call(null,cljs.core.get.call(null,m__$1,id));
}),taoensso.encore.rcompare,cljs.core.keys.call(null,m__$1));
var max_id_width = cljs.core.reduce_kv.call(null,(function (acc,_,p__32766){
var map__32767 = p__32766;
var map__32767__$1 = (((((!((map__32767 == null))))?(((((map__32767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);
var clock = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
var temp__5802__auto__ = taoensso.tufte.stats.get_max_id_width.call(null,stats,format_pstats_opts);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if((cljs.core.long$.call(null,c) > acc)){
return c;
} else {
return acc;
}
} else {
return acc;
}
}),(0),m__$1);
return taoensso.encore.str_join.call(null,"\n\n",cljs.core.map.call(null,(function (id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),",\n",taoensso.tufte.format_pstats.call(null,cljs.core.get.call(null,m__$1,id),cljs.core.assoc.call(null,format_pstats_opts,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373),max_id_width))].join('');
})),sorted_group_ids);
} else {
return null;
}
}));

(taoensso.tufte.format_grouped_pstats.cljs$lang$maxFixedArity = 2);

var ret__4785__auto___32778 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32779 = arguments.length;
var i__4737__auto___32780 = (0);
while(true){
if((i__4737__auto___32780 < len__4736__auto___32779)){
args__4742__auto__.push((arguments[i__4737__auto___32780]));

var G__32781 = (i__4737__auto___32780 + (1));
i__4737__auto___32780 = G__32781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*min-level*","taoensso.tufte/*min-level*",-1012922549,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq32770){
var G__32771 = cljs.core.first.call(null,seq32770);
var seq32770__$1 = cljs.core.next.call(null,seq32770);
var G__32772 = cljs.core.first.call(null,seq32770__$1);
var seq32770__$2 = cljs.core.next.call(null,seq32770__$1);
var G__32773 = cljs.core.first.call(null,seq32770__$2);
var seq32770__$3 = cljs.core.next.call(null,seq32770__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32771,G__32772,G__32773,seq32770__$3);
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

var ret__4785__auto___32782 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32783 = arguments.length;
var i__4737__auto___32784 = (0);
while(true){
if((i__4737__auto___32784 < len__4736__auto___32783)){
args__4742__auto__.push((arguments[i__4737__auto___32784]));

var G__32785 = (i__4737__auto___32784 + (1));
i__4737__auto___32784 = G__32785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*ns-filter*","taoensso.tufte/*ns-filter*",843426356,null),null,(1),null)),(new cljs.core.List(null,ns_pattern,null,(1),null)))))),null,(1),null)),body)));
}));

(taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq32774){
var G__32775 = cljs.core.first.call(null,seq32774);
var seq32774__$1 = cljs.core.next.call(null,seq32774);
var G__32776 = cljs.core.first.call(null,seq32774__$1);
var seq32774__$2 = cljs.core.next.call(null,seq32774__$1);
var G__32777 = cljs.core.first.call(null,seq32774__$2);
var seq32774__$3 = cljs.core.next.call(null,seq32774__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32775,G__32776,G__32777,seq32774__$3);
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

//# sourceMappingURL=tufte.js.map
