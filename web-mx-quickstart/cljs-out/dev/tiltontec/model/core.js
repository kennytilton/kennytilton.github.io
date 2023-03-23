// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.diagnostic');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.base');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.call(null,null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.mget = (function tiltontec$model$core$mget(me,prop){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed nil for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_.call(null,me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),prop)))){
return tiltontec.util.core.err.call(null,cljs.core.str,"MXAPI_ILLEGAL_GET_NO_SUCH_prop> mget was attempted on non-existent prop \"",prop,"\".","\n...> FYI: known props are",cljs.core.keys.call(null,cljs.core.deref.call(null,me)),"\n...> FYI: use mget? if prop might not exist.");
} else {
var dbg_QMARK_ = false;
if(dbg_QMARK_){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"mget-sees-c?","mget-sees-c?",-669112007),tiltontec.cell.base.cinfo.call(null,tiltontec.model.base.md_cell.call(null,me,prop)));

cljs.core.prn.call(null,new cljs.core.Keyword(null,"me-prop","me-prop",-2055304980),prop.call(null,cljs.core.deref.call(null,me)));
} else {
}

var temp__5802__auto__ = tiltontec.model.base.md_cell.call(null,me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.evaluate.cget.call(null,c);
} else {
return prop.call(null,cljs.core.deref.call(null,me));
}
}
});
tiltontec.model.core.mget_QMARK_ = (function tiltontec$model$core$mget_QMARK_(me,prop){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ",["mget passed nil for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"\n","me"].join('')));
}

if(tiltontec.util.core.any_ref_QMARK_.call(null,me)){
} else {
throw (new Error(["Assert failed: ",["mget passed non-model for me accessing prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(me)].join(''),"\n","(any-ref? me)"].join('')));
}

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),prop)){
return tiltontec.model.core.mget.call(null,me,prop);
} else {
return null;
}
});
var ret__4785__auto___20711 = (function (){
tiltontec.model.core.def_mget = (function tiltontec$model$core$def_mget(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20712 = arguments.length;
var i__4737__auto___20713 = (0);
while(true){
if((i__4737__auto___20713 < len__4736__auto___20712)){
args__4742__auto__.push((arguments[i__4737__auto___20713]));

var G__20714 = (i__4737__auto___20713 + (1));
i__4737__auto___20713 = G__20714;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.def_mget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,props){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.call(null,(function (prop_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = reader_prefix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),cljs.core.name.call(null,prop_SHARP_)].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","mget","tiltontec.model.core/mget",81094933,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ref","ref",-1364538802,null),null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.call(null,cljs.core.name.call(null,prop_SHARP_)),null,(1),null))))),null,(1),null)))));
}),props))));
}));

(tiltontec.model.core.def_mget.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.def_mget.cljs$lang$applyTo = (function (seq20707){
var G__20708 = cljs.core.first.call(null,seq20707);
var seq20707__$1 = cljs.core.next.call(null,seq20707);
var G__20709 = cljs.core.first.call(null,seq20707__$1);
var seq20707__$2 = cljs.core.next.call(null,seq20707__$1);
var G__20710 = cljs.core.first.call(null,seq20707__$2);
var seq20707__$3 = cljs.core.next.call(null,seq20707__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20708,G__20709,G__20710,seq20707__$3);
}));

return null;
})()
;
(tiltontec.model.core.def_mget.cljs$lang$macro = true);

tiltontec.model.core._STAR_parent_STAR_ = null;
var ret__4785__auto___20719 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20720 = arguments.length;
var i__4737__auto___20721 = (0);
while(true){
if((i__4737__auto___20721 < len__4736__auto___20720)){
args__4742__auto__.push((arguments[i__4737__auto___20721]));

var G__20722 = (i__4737__auto___20721 + (1));
i__4737__auto___20721 = G__20722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","*parent*","tiltontec.model.core/*parent*",43086772,null),null,(1),null)),(new cljs.core.List(null,meform,null,(1),null)))))),null,(1),null)),body)));
}));

(tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq20715){
var G__20716 = cljs.core.first.call(null,seq20715);
var seq20715__$1 = cljs.core.next.call(null,seq20715);
var G__20717 = cljs.core.first.call(null,seq20715__$1);
var seq20715__$2 = cljs.core.next.call(null,seq20715__$1);
var G__20718 = cljs.core.first.call(null,seq20715__$2);
var seq20715__$3 = cljs.core.next.call(null,seq20715__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20716,G__20717,G__20718,seq20715__$3);
}));

return null;
})()
;
(tiltontec.model.core.with_par.cljs$lang$macro = true);

tiltontec.model.core.mset_BANG_ = (function tiltontec$model$core$mset_BANG_(me,prop,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__5802__auto__ = tiltontec.model.base.md_cell.call(null,me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),prop)){
return tiltontec.util.core.err.call(null,cljs.core.str,"MXAPI_ILLEGAL_MUTATE_NONCELL> invalid mswap!/mset!/md-reset! to the property '",prop,"', which is not mediated by any cell.\n","...> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI'. eg: (make... :answer (cI 42)).\n","...> look for MXAPI_ILLEGAL_MUTATE_NONCELL in the Errors documentation for  more details.\n","...> FYI: intended new value is [",new_value,"]; initial value was [",cljs.core.get.call(null,cljs.core.deref.call(null,me),prop,new cljs.core.Keyword(null,"no-such-prop","no-such-prop",1565651015)),"].\n","...> FYI: instance is of type ",tiltontec.util.base.mx_type.call(null,me),".\n","...> FYI: full instance is ",cljs.core.deref.call(null,me),"\n","...> FYI: instance meta is ",cljs.core.meta.call(null,me),"\n.");
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"MXAPI_ILLEGAL_MUTATE_NO_SUCH_prop> mswap!/mset!/md-reset! was attempted to non-existent prop \"",prop,"\".\n","...> FYI: known props are",cljs.core.keys.call(null,cljs.core.deref.call(null,me)));
}
}
});
/**
 * alternate syntax conforming with clojure terminology
 */
tiltontec.model.core.mreset_BANG_ = (function tiltontec$model$core$mreset_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_.call(null,me,prop,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_.call(null,me,prop,new_value);
});
/**
 * deprecated. use mset!
 */
tiltontec.model.core.md_set_BANG_ = (function tiltontec$model$core$md_set_BANG_(me,prop,new_value){
return tiltontec.model.core.mset_BANG_.call(null,me,prop,new_value);
});
tiltontec.model.core.mswap_BANG_ = (function tiltontec$model$core$mswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20727 = arguments.length;
var i__4737__auto___20728 = (0);
while(true){
if((i__4737__auto___20728 < len__4736__auto___20727)){
args__4742__auto__.push((arguments[i__4737__auto___20728]));

var G__20729 = (i__4737__auto___20728 + (1));
i__4737__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (me,prop,swap_fn,swap_fn_args){
return tiltontec.model.core.mset_BANG_.call(null,me,prop,cljs.core.apply.call(null,swap_fn,tiltontec.model.core.mget.call(null,me,prop),swap_fn_args));
}));

(tiltontec.model.core.mswap_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.mswap_BANG_.cljs$lang$applyTo = (function (seq20723){
var G__20724 = cljs.core.first.call(null,seq20723);
var seq20723__$1 = cljs.core.next.call(null,seq20723);
var G__20725 = cljs.core.first.call(null,seq20723__$1);
var seq20723__$2 = cljs.core.next.call(null,seq20723__$1);
var G__20726 = cljs.core.first.call(null,seq20723__$2);
var seq20723__$3 = cljs.core.next.call(null,seq20723__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20724,G__20725,G__20726,seq20723__$3);
}));

tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,prop,new_value){
var temp__5802__auto__ = tiltontec.model.base.md_cell.call(null,me,prop);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,prop,new_value){
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20743 = arguments.length;
var i__4737__auto___20744 = (0);
while(true){
if((i__4737__auto___20744 < len__4736__auto___20743)){
args__4742__auto__.push((arguments[i__4737__auto___20744]));

var G__20745 = (i__4737__auto___20744 + (1));
i__4737__auto___20744 = G__20745;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var meta_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007),null,new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),null], null), null);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),tiltontec.model.core._STAR_parent_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20731){
var vec__20732 = p__20731;
var k = cljs.core.nth.call(null,vec__20732,(0),null);
var v = cljs.core.nth.call(null,vec__20732,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,((tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
}),cljs.core.filter.call(null,(function (p__20735){
var vec__20736 = p__20735;
var prop = cljs.core.nth.call(null,vec__20736,(0),null);
var v = cljs.core.nth.call(null,vec__20736,(1),null);
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys));
}),cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"nascent","nascent",443401807),new cljs.core.Keyword(null,"mx-sid","mx-sid",-508332951),tiltontec.util.base.mx_sid_next.call(null),new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),cljs.core.get.call(null,iargs,new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),new cljs.core.Keyword("tiltontec.cell.base","model","tiltontec.cell.base/model",284743830)),new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007),cljs.core.get.call(null,iargs,new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007))], null));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,(function (p__20739){
var vec__20740 = p__20739;
var prop = cljs.core.nth.call(null,vec__20740,(0),null);
var v = cljs.core.nth.call(null,vec__20740,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prop]),meta_keys))){
return null;
} else {
return tiltontec.model.base.md_install_cell.call(null,me,prop,v);
}
}),cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,(function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
}));

return me;

}
}));

(tiltontec.model.core.make.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.model.core.make.cljs$lang$applyTo = (function (seq20730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20730));
}));

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.mget.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
tiltontec.model.core.fm_kids_watch = (function tiltontec$model$core$fm_kids_watch(me,newk,oldk,c){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"fm-kids-watch","fm-kids-watch",-1854071122),tiltontec.cell.base.minfo.call(null,me),new cljs.core.Keyword(null,"lostks","lostks",-1015917474),cljs.core.count.call(null,lostks));

var seq__20746 = cljs.core.seq.call(null,lostks);
var chunk__20747 = null;
var count__20748 = (0);
var i__20749 = (0);
while(true){
if((i__20749 < count__20748)){
var k = cljs.core._nth.call(null,chunk__20747,i__20749);
tiltontec.cell.poly.md_quiesce.call(null,k);


var G__20750 = seq__20746;
var G__20751 = chunk__20747;
var G__20752 = count__20748;
var G__20753 = (i__20749 + (1));
seq__20746 = G__20750;
chunk__20747 = G__20751;
count__20748 = G__20752;
i__20749 = G__20753;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20746);
if(temp__5804__auto__){
var seq__20746__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20746__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20746__$1);
var G__20754 = cljs.core.chunk_rest.call(null,seq__20746__$1);
var G__20755 = c__4556__auto__;
var G__20756 = cljs.core.count.call(null,c__4556__auto__);
var G__20757 = (0);
seq__20746 = G__20754;
chunk__20747 = G__20755;
count__20748 = G__20756;
i__20749 = G__20757;
continue;
} else {
var k = cljs.core.first.call(null,seq__20746__$1);
tiltontec.cell.poly.md_quiesce.call(null,k);


var G__20758 = cljs.core.next.call(null,seq__20746__$1);
var G__20759 = null;
var G__20760 = (0);
var G__20761 = (0);
seq__20746 = G__20758;
chunk__20747 = G__20759;
count__20748 = G__20760;
i__20749 = G__20761;
continue;
}
} else {
return null;
}
}
break;
}
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.poly.watch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (prop,me,newk,oldk,c){
return tiltontec.model.core.fm_kids_watch.call(null,me,newk,oldk,c);
}));
cljs.core._add_method.call(null,tiltontec.cell.poly.md_quiesce,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (me){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"family-md-quies-entry!","family-md-quies-entry!",19307081),tiltontec.cell.base.minfo.call(null,me));

var seq__20762_20766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__20763_20767 = null;
var count__20764_20768 = (0);
var i__20765_20769 = (0);
while(true){
if((i__20765_20769 < count__20764_20768)){
var k_20770 = cljs.core._nth.call(null,chunk__20763_20767,i__20765_20769);
if(tiltontec.cell.base.md_ref_QMARK_.call(null,k_20770)){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"family-md-quiKID!","family-md-quiKID!",-730558790),tiltontec.cell.base.minfo.call(null,me));

tiltontec.cell.poly.md_quiesce.call(null,k_20770);
} else {
}


var G__20771 = seq__20762_20766;
var G__20772 = chunk__20763_20767;
var G__20773 = count__20764_20768;
var G__20774 = (i__20765_20769 + (1));
seq__20762_20766 = G__20771;
chunk__20763_20767 = G__20772;
count__20764_20768 = G__20773;
i__20765_20769 = G__20774;
continue;
} else {
var temp__5804__auto___20775 = cljs.core.seq.call(null,seq__20762_20766);
if(temp__5804__auto___20775){
var seq__20762_20776__$1 = temp__5804__auto___20775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20762_20776__$1)){
var c__4556__auto___20777 = cljs.core.chunk_first.call(null,seq__20762_20776__$1);
var G__20778 = cljs.core.chunk_rest.call(null,seq__20762_20776__$1);
var G__20779 = c__4556__auto___20777;
var G__20780 = cljs.core.count.call(null,c__4556__auto___20777);
var G__20781 = (0);
seq__20762_20766 = G__20778;
chunk__20763_20767 = G__20779;
count__20764_20768 = G__20780;
i__20765_20769 = G__20781;
continue;
} else {
var k_20782 = cljs.core.first.call(null,seq__20762_20776__$1);
if(tiltontec.cell.base.md_ref_QMARK_.call(null,k_20782)){
tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121),new cljs.core.Keyword(null,"family-md-quiKID!","family-md-quiKID!",-730558790),tiltontec.cell.base.minfo.call(null,me));

tiltontec.cell.poly.md_quiesce.call(null,k_20782);
} else {
}


var G__20783 = cljs.core.next.call(null,seq__20762_20776__$1);
var G__20784 = null;
var G__20785 = (0);
var G__20786 = (0);
seq__20762_20766 = G__20783;
chunk__20763_20767 = G__20784;
count__20764_20768 = G__20785;
i__20765_20769 = G__20786;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.poly.md_quiesce_self.call(null,me);
}));
tiltontec.model.core.md_par = (function tiltontec$model$core$md_par(me){
return new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
var ret__4785__auto___20794 = (function (){
tiltontec.model.core.mpar = (function tiltontec$model$core$mpar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20795 = arguments.length;
var i__4737__auto___20796 = (0);
while(true){
if((i__4737__auto___20796 < len__4736__auto___20795)){
args__4742__auto__.push((arguments[i__4737__auto___20796]));

var G__20797 = (i__4737__auto___20796 + (1));
i__4737__auto___20796 = G__20797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.mpar.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20790){
var vec__20791 = p__20790;
var me = cljs.core.nth.call(null,vec__20791,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,me__$1,null,(1),null))))),null,(1),null)))));
}));

(tiltontec.model.core.mpar.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.mpar.cljs$lang$applyTo = (function (seq20787){
var G__20788 = cljs.core.first.call(null,seq20787);
var seq20787__$1 = cljs.core.next.call(null,seq20787);
var G__20789 = cljs.core.first.call(null,seq20787__$1);
var seq20787__$2 = cljs.core.next.call(null,seq20787__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20788,G__20789,seq20787__$2);
}));

return null;
})()
;
(tiltontec.model.core.mpar.cljs$lang$macro = true);

var ret__4785__auto___20807 = (function (){
/**
 * Search matrix ascendents from node 'me' looking for `what`, and extract `prop`
 */
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20808 = arguments.length;
var i__4737__auto___20809 = (0);
while(true){
if((i__4737__auto___20809 < len__4736__auto___20808)){
args__4742__auto__.push((arguments[i__4737__auto___20809]));

var G__20810 = (i__4737__auto___20809 + (1));
i__4737__auto___20809 = G__20810;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,prop,p__20803){
var vec__20804 = p__20803;
var me = cljs.core.nth.call(null,vec__20804,(0),null);
var me__$1 = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","mget","tiltontec.model.core/mget",81094933,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null),null,(1),null)),(new cljs.core.List(null,what,null,(1),null)),(new cljs.core.List(null,me__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,prop,null,(1),null)))));
}));

(tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq20798){
var G__20799 = cljs.core.first.call(null,seq20798);
var seq20798__$1 = cljs.core.next.call(null,seq20798);
var G__20800 = cljs.core.first.call(null,seq20798__$1);
var seq20798__$2 = cljs.core.next.call(null,seq20798__$1);
var G__20801 = cljs.core.first.call(null,seq20798__$2);
var seq20798__$3 = cljs.core.next.call(null,seq20798__$2);
var G__20802 = cljs.core.first.call(null,seq20798__$3);
var seq20798__$4 = cljs.core.next.call(null,seq20798__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20799,G__20800,G__20801,G__20802,seq20798__$4);
}));

return null;
})()
;
(tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true);

/**
 * Return true if 'poss' is the matrix reference we 'seek'
 * 
 * There are 4 branches to this.
 * 
 * 'poss' is not a ref, return false
 * 'seek' is a fn?, we return result of invoke it with 'poss'
 * 'seek' is a keyword?, we return true if it is = with (:name poss)
 * :else compare 'poss' and 'seek' directly using =
 */
tiltontec.model.core.fm_navig_EQ_ = (function tiltontec$model$core$fm_navig_EQ_(seek,poss){
if(((tiltontec.util.core.any_ref_QMARK_.call(null,poss)) || (typeof poss === 'string'))){
} else {
throw (new Error(["Assert failed: ",["poss not ref ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join(''),"\n","(or (any-ref? poss) (string? poss))"].join('')));
}

if((!(tiltontec.util.core.any_ref_QMARK_.call(null,poss)))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-navig=bailnotref","fm-navig=bailnotref",-704458451),poss);

return false;
} else {
if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return ((cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.util.base.mx_type.call(null,poss),seek)));
} else {
tiltontec.util.base.call_trc.call(null,":fm-navig=-else-pplain=!",seek);

return cljs.core._EQ_.call(null,seek,poss);

}
}
}
});
tiltontec.model.core.fasc_higher = (function tiltontec$model$core$fasc_higher(what,where,options){
if(cljs.core.truth_(where)){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> 'where' arg is nil seeking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","where"].join('')));
}

if((!(tiltontec.cell.base.mdead_QMARK_.call(null,where)))){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> reaches dead 'where' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo.call(null,where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seeking","seeking",-1543638812)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)].join(''),"\n","(not (mdead? where))"].join('')));
}

if(cljs.core.truth_(what)){
} else {
throw (new Error(["Assert failed: ",["fasc-higher> 'what' arg is nil searching from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo.call(null,where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","what"].join('')));
}

tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"navig","navig",787023008),new cljs.core.Keyword(null,"fasc-higher","fasc-higher",-850076472),new cljs.core.Keyword(null,"what","what",987290269),what,new cljs.core.Keyword(null,"where","where",-2044795965),tiltontec.cell.base.minfo.call(null,where));

var or__4126__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.model.core.fm_navig_EQ_.call(null,what,where);
if(cljs.core.truth_(and__4115__auto____$1)){
return where;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__5804__auto__)){
var par = temp__5804__auto__;
return tiltontec.model.core.fasc_higher.call(null,what,par,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"me?","me?",-625404259),true));
} else {
return null;
}
}
});
/**
 * Search matrix ascendents for 'what', starting at 'where'
 * See fm-navig= for options about 'what' can be
 * if :me? is true, and (fm-navig= what where) return 'where'
 * if (:parent @where) returns a parent, recurse up the family tree
 * return an error when (:must? options) is true and we nothing is found
 */
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20817 = arguments.length;
var i__4737__auto___20818 = (0);
while(true){
if((i__4737__auto___20818 < len__4736__auto___20817)){
args__4742__auto__.push((arguments[i__4737__auto___20818]));

var G__20819 = (i__4737__auto___20818 + (1));
i__4737__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_(where)){
} else {
throw (new Error(["Assert failed: ",["fasc> 'where' arg is nil seeking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(what),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","where"].join('')));
}

if((!(tiltontec.cell.base.mdead_QMARK_.call(null,where)))){
} else {
throw (new Error(["Assert failed: ",["fasc> pass dead 'where' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo.call(null,where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seeking","seeking",-1543638812)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(what)].join(''),"\n","(not (mdead? where))"].join('')));
}

if(cljs.core.truth_(what)){
} else {
throw (new Error(["Assert failed: ",["fasc> 'what' arg is nil searching from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.minfo.call(null,where)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(options)].join(''),"\n","what"].join('')));
}

tiltontec.cell.diagnostic.mxtrc.call(null,new cljs.core.Keyword(null,"navig","navig",787023008),new cljs.core.Keyword(null,"fasc-entry","fasc-entry",1715508895),new cljs.core.Keyword(null,"what","what",987290269),what,new cljs.core.Keyword(null,"where","where",-2044795965),tiltontec.cell.base.minfo.call(null,where));

try{var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR__orig_val__20815 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__20816 = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20816);

try{var or__4126__auto__ = tiltontec.model.core.fasc_higher.call(null,what,where,options__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"fasc-failed","fasc-failed",349768299),what,new cljs.core.Keyword(null,"from","from",1815293044),tiltontec.cell.base.minfo.call(null,where),new cljs.core.Keyword(null,"options","options",99638489),options__$1);

if(cljs.core.truth_(((cljs.core.not.call(null,new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1)))?tiltontec.model.core.fm_navig_EQ_.call(null,what,where):false))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"fasc-failed-with-me?-option-false-but-me-matches-what!!!!!!!!","fasc-failed-with-me?-option-false-but-me-matches-what!!!!!!!!",-1036921141));
} else {
}

var md_20820 = (cljs.core.truth_(new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1))?where:new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
while(true){
if(cljs.core.truth_(md_20820)){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"fasc-fail-saw","fasc-fail-saw",-904933576),tiltontec.cell.base.minfo.call(null,md_20820));

var G__20821 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,md_20820));
md_20820 = G__20821;
continue;
} else {
}
break;
}

cljs.core.prn.call(null,new cljs.core.Keyword(null,"fasc-failed-asc-end","fasc-failed-asc-end",1292773472));

return null;
} else {
return null;
}
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20815);
}}catch (e20814){if((e20814 instanceof Error)){
var e = e20814;
cljs.core.prn.call(null,new cljs.core.Keyword(null,"fasc-sees-err-returns-nil","fasc-sees-err-returns-nil",852927824),e);

return null;
} else {
throw e20814;

}
}}));

(tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq20811){
var G__20812 = cljs.core.first.call(null,seq20811);
var seq20811__$1 = cljs.core.next.call(null,seq20811);
var G__20813 = cljs.core.first.call(null,seq20811__$1);
var seq20811__$2 = cljs.core.next.call(null,seq20811__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20812,G__20813,seq20811__$2);
}));

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR__orig_val__20822 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__20823 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20823);

try{var sibs = tiltontec.model.core.md_kids.call(null,tiltontec.model.core.md_par.call(null,mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.call(null,mx,cljs.core.first.call(null,sibs))){
return cljs.core.second.call(null,sibs);
} else {
var G__20824 = cljs.core.rest.call(null,sibs);
sibs = G__20824;
continue;
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20822);
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR__orig_val__20825 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__20826 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20826);

try{var sibs = tiltontec.model.core.md_kids.call(null,tiltontec.model.core.md_par.call(null,mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.call(null,mx,cljs.core.first.call(null,sibs))){
return null;
} else {
if(cljs.core._EQ_.call(null,mx,cljs.core.second.call(null,sibs))){
return cljs.core.first.call(null,sibs);
} else {
var G__20827 = cljs.core.rest.call(null,sibs);
sibs = G__20827;
continue;

}
}
} else {
return null;
}
break;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20825);
}});
/**
 * Search matrix ascendents and descendents for 'what', starting at 'where'
 * 
 * if :me? is true, and (fm-navig= what where) return 'where' (:me? is false by default)
 * 
 * if :inside? is true, try kids recursively (after removing any listed in :skip option)
 * 
 * if :up? is true, invoke fm-navig on ancestor (skipping 'where')
 */
tiltontec.model.core.fm_navig = (function tiltontec$model$core$fm_navig(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20834 = arguments.length;
var i__4737__auto___20835 = (0);
while(true){
if((i__4737__auto___20835 < len__4736__auto___20834)){
args__4742__auto__.push((arguments[i__4737__auto___20835]));

var G__20836 = (i__4737__auto___20835 + (1));
i__4737__auto___20835 = G__20836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = where;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = what;
if(cljs.core.truth_(and__4115__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_.call(null,where);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR__orig_val__20832 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__20833 = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20833);

try{if(tiltontec.util.core.any_ref_QMARK_.call(null,where)){
var or__4126__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tiltontec.model.core.fm_navig_EQ_.call(null,what,where);
if(cljs.core.truth_(and__4115__auto____$1)){
return where;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var temp__5802__auto__ = tiltontec.model.core.mget_QMARK_.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__5802__auto__)){
var kids = temp__5802__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__5802__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__5802__auto____$1)){
var netkids = temp__5802__auto____$1;
return cljs.core.some.call(null,(function (p1__20828_SHARP_){
return tiltontec.model.core.fm_navig.call(null,what,p1__20828_SHARP_,new cljs.core.Keyword(null,"must?","must?",1639898554),false,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
}),netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__4115__auto__)){
var temp__5804__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__5804__auto__)){
var par = temp__5804__auto__;
return tiltontec.model.core.fm_navig.call(null,what,par,new cljs.core.Keyword(null,"must?","must?",1639898554),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fm-navig-must-failed","fm-navig-must-failed",-1075331599),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20832);
}} else {
return null;
}
}));

(tiltontec.model.core.fm_navig.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.fm_navig.cljs$lang$applyTo = (function (seq20829){
var G__20830 = cljs.core.first.call(null,seq20829);
var seq20829__$1 = cljs.core.next.call(null,seq20829);
var G__20831 = cljs.core.first.call(null,seq20829__$1);
var seq20829__$2 = cljs.core.next.call(null,seq20829__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20830,G__20831,seq20829__$2);
}));

/**
 * Search matrix ascendents and descendents from node 'where', for 'what', throwing an error when not found
 */
tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fm_navig.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search matrix ascendents from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fm_navig.call(null,(function (p1__20837_SHARP_){
return cljs.core._EQ_.call(null,name,tiltontec.model.core.mget_QMARK_.call(null,p1__20837_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
});
var ret__4785__auto___20849 = (function (){
tiltontec.model.core.fmu = (function tiltontec$model$core$fmu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20850 = arguments.length;
var i__4737__auto___20851 = (0);
while(true){
if((i__4737__auto___20851 < len__4736__auto___20850)){
args__4742__auto__.push((arguments[i__4737__auto___20851]));

var G__20852 = (i__4737__auto___20851 + (1));
i__4737__auto___20851 = G__20852;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.model.core.fmu.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,p__20845){
var vec__20846 = p__20845;
var me = cljs.core.nth.call(null,vec__20846,(0),null);

var me_ref = (function (){var or__4126__auto__ = me;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__20839__auto__","name__20839__auto__",-354239450,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","fm-navig","tiltontec.model.core/fm-navig",-23343707,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__20838__20840__auto__","p1__20838__20840__auto__",-1428004115,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__20839__auto__","name__20839__auto__",-354239450,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","mget?","tiltontec.model.core/mget?",-1957067486,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__20838__20840__auto__","p1__20838__20840__auto__",-1428004115,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,me_ref,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"me?","me?",-625404259),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"up?","up?",77854972),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"inside?","inside?",639243696),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null)))));
}));

(tiltontec.model.core.fmu.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.model.core.fmu.cljs$lang$applyTo = (function (seq20841){
var G__20842 = cljs.core.first.call(null,seq20841);
var seq20841__$1 = cljs.core.next.call(null,seq20841);
var G__20843 = cljs.core.first.call(null,seq20841__$1);
var seq20841__$2 = cljs.core.next.call(null,seq20841__$1);
var G__20844 = cljs.core.first.call(null,seq20841__$2);
var seq20841__$3 = cljs.core.next.call(null,seq20841__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20842,G__20843,G__20844,seq20841__$3);
}));

return null;
})()
;
(tiltontec.model.core.fmu.cljs$lang$macro = true);

/**
 * Search matrix ascendents from node 'where' looking for element with given id
 */
tiltontec.model.core.mxu_find_id = (function tiltontec$model$core$mxu_find_id(where,id){
return tiltontec.model.core.fm_navig.call(null,(function (p1__20853_SHARP_){
return cljs.core._EQ_.call(null,id,tiltontec.model.core.mget_QMARK_.call(null,p1__20853_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
});
/**
 * Search matrix ascendants from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,type,tiltontec.util.base.mx_type.call(null,visited));
}),me);
});
/**
 * Search matrix descendents from 'where' for first with given :class
 */
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fm_navig.call(null,(function (p1__20854_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_.call(null,p1__20854_SHARP_)){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.mget_QMARK_.call(null,p1__20854_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
/**
 * Search matrix descendents from node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fm_navig.call(null,(function (p1__20855_SHARP_){
if(tiltontec.util.core.any_ref_QMARK_.call(null,p1__20855_SHARP_)){
return cljs.core._EQ_.call(null,value,tiltontec.model.core.mget_QMARK_.call(null,p1__20855_SHARP_,property));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
/**
 * Search matrix ascendents from node 'me' for 'id-name', trying first as a name, then as an id
 */
tiltontec.model.core.fmo = (function tiltontec$model$core$fmo(me,id_name){
var or__4126__auto__ = tiltontec.model.core.mxu_find_name.call(null,me,id_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tiltontec.model.core.mxu_find_id.call(null,me,id_name);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
throw ["fmo> not id or name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)].join('');
}
}
});
/**
 * Use 'fmo' and extract :value (or prop indicated by :prop-name)
 */
tiltontec.model.core.fmov = (function tiltontec$model$core$fmov(var_args){
var G__20857 = arguments.length;
switch (G__20857) {
case 2:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$2 = (function (me,id_name){
return tiltontec.model.core.fmov.call(null,me,id_name,new cljs.core.Keyword(null,"value","value",305978217));
}));

(tiltontec.model.core.fmov.cljs$core$IFn$_invoke$arity$3 = (function (me,id_name,prop_name){
var temp__5804__auto__ = tiltontec.model.core.fmo.call(null,me,id_name);
if(cljs.core.truth_(temp__5804__auto__)){
var mx = temp__5804__auto__;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mx),prop_name)){
return tiltontec.model.core.mget.call(null,mx,prop_name);
} else {
throw ["fmov> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_name)," lacks ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_name)," property"].join('');
}
} else {
return null;
}
}));

(tiltontec.model.core.fmov.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___20862 = (function (){
/**
 * Macro to flatten kids in 'tree' and relate them to 'me' via the *parent* dynamic binding
 */
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20863 = arguments.length;
var i__4737__auto___20864 = (0);
while(true){
if((i__4737__auto___20864 < len__4736__auto___20863)){
args__4742__auto__.push((arguments[i__4737__auto___20864]));

var G__20865 = (i__4737__auto___20864 + (1));
i__4737__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","*parent*","tiltontec.model.core/*parent*",43086772,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"me","me",1501524834,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","*parent*","tiltontec.model.core/*parent*",43086772,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doall","cljs.core/doall",1093272293,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),tree))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq20859){
var G__20860 = cljs.core.first.call(null,seq20859);
var seq20859__$1 = cljs.core.next.call(null,seq20859);
var G__20861 = cljs.core.first.call(null,seq20859__$1);
var seq20859__$2 = cljs.core.next.call(null,seq20859__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20860,G__20861,seq20859__$2);
}));

return null;
})()
;
(tiltontec.model.core.the_kids.cljs$lang$macro = true);

var ret__4785__auto___20869 = (function (){
/**
 * Syntax sugar for formulae that define :kids props
 */
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20870 = arguments.length;
var i__4737__auto___20871 = (0);
while(true){
if((i__4737__auto___20871 < len__4736__auto___20870)){
args__4742__auto__.push((arguments[i__4737__auto___20871]));

var G__20872 = (i__4737__auto___20871 + (1));
i__4737__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","cF","tiltontec.model.core/cF",-1537538283,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"me","me",1501524834,null),null,(1),null)),(new cljs.core.List(null,"no me for cFkids",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),null,(1),null)),tree))),null,(1),null)))));
}));

(tiltontec.model.core.cFkids.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq20866){
var G__20867 = cljs.core.first.call(null,seq20866);
var seq20866__$1 = cljs.core.next.call(null,seq20866);
var G__20868 = cljs.core.first.call(null,seq20866__$1);
var seq20866__$2 = cljs.core.next.call(null,seq20866__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20867,G__20868,seq20866__$2);
}));

return null;
})()
;
(tiltontec.model.core.cFkids.cljs$lang$macro = true);

/**
 * A pattern commonly employed in matrix applications is to define a :kid-factory on some
 * 'parent' cell, and use it to enrich the value extracted from the parent's kid cells.
 * 
 * This function maps across the :kids-values, invoking the factory as it goes
 */
tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var k_key = tiltontec.model.core.mget.call(null,me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var _ = (cljs.core.truth_(k_key)?null:(function(){throw (new Error("Assert failed: k-key"))})());
var x_kids__$1 = ((cljs.core.not_EQ_.call(null,x_kids,tiltontec.cell.base.unbound))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function tiltontec$model$core$kid_values_kids_$_iter__20873(s__20874){
return (new cljs.core.LazySeq(null,(function (){
var s__20874__$1 = s__20874;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20874__$1);
if(temp__5804__auto__){
var s__20874__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20874__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__20874__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__20876 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__20875 = (0);
while(true){
if((i__20875 < size__4528__auto__)){
var k = cljs.core._nth.call(null,c__4527__auto__,i__20875);
cljs.core.chunk_append.call(null,b__20876,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_key.call(null,k),k], null));

var G__20879 = (i__20875 + (1));
i__20875 = G__20879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20876),tiltontec$model$core$kid_values_kids_$_iter__20873.call(null,cljs.core.chunk_rest.call(null,s__20874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20876),null);
}
} else {
var k = cljs.core.first.call(null,s__20874__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_key.call(null,k),k], null),tiltontec$model$core$kid_values_kids_$_iter__20873.call(null,cljs.core.rest.call(null,s__20874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,x_kids);
})()):null);
var k_factory = tiltontec.model.core.mget.call(null,me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,kid_value){
var or__4126__auto__ = (function (){var and__4115__auto__ = x_kids__$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.call(null,x_kids__$1,kid_value);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var _STAR_parent_STAR__orig_val__20877 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__20878 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__20878);

try{return k_factory.call(null,me,kid_value);
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__20877);
}}
}),tiltontec.model.core.mget.call(null,me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341))));
});

//# sourceMappingURL=core.js.map
