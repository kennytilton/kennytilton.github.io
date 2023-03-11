// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.util.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tiltontec.util.base');
tiltontec.util.core.type_of = (function tiltontec$util$core$type_of(x){
return cljs.core.type(x);
});
tiltontec.util.core.xor = (function tiltontec$util$core$xor(a,b){
var or__4126__auto__ = (function (){var and__4115__auto__ = a;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(b);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = b;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(a);
} else {
return and__4115__auto__;
}
}
});

tiltontec.util.core.set_ify = (function tiltontec$util$core$set_ify(x){
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
tiltontec.util.core.cl_find = (function tiltontec$util$core$cl_find(sought,coll){
if((sought == null)){
return null;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sought]),coll);
}
});
tiltontec.util.core.uuidv4 = (function tiltontec$util$core$uuidv4(){
var hex = (function tiltontec$util$core$uuidv4_$_hex(){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join(''));
});
tiltontec.util.core.ia_ref = (function tiltontec$util$core$ia_ref(x){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
});
tiltontec.util.core.any_ref_QMARK_ = (function tiltontec$util$core$any_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
tiltontec.util.core.mut_set_BANG_ = (function tiltontec$util$core$mut_set_BANG_(var_args){
var G__10777 = arguments.length;
switch (G__10777) {
case 3:
return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (mut,prop,new_value){
return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4(mut,prop,new_value,null);
}));

(tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (mut,prop,new_value,tag){
if(tiltontec.util.core.any_ref_QMARK_(mut)){
} else {
var G__10778_10795 = "model.util.core/rmap-setf> prop:";
var G__10779_10796 = prop;
var G__10780_10797 = cljs.core.cst$kw$tag;
var G__10781_10798 = tag;
var G__10782_10799 = "new-value:";
var G__10783_10800 = new_value;
var G__10784_10801 = "failed assertion any-ref? on ref:";
var G__10785_10802 = mut;
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10778_10795,G__10779_10796,G__10780_10797,G__10781_10798,G__10782_10799,G__10783_10800,G__10784_10801,G__10785_10802) : tiltontec.util.core.pln.call(null,G__10778_10795,G__10779_10796,G__10780_10797,G__10781_10798,G__10782_10799,G__10783_10800,G__10784_10801,G__10785_10802));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

if(cljs.core.map_QMARK_(cljs.core.deref(mut))){
} else {
var G__10786_10803 = "model.util.core/rmap-setf> prop:";
var G__10787_10804 = prop;
var G__10788_10805 = cljs.core.cst$kw$tag;
var G__10789_10806 = tag;
var G__10790_10807 = "new-value:";
var G__10791_10808 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__10792_10809 = "failed assertion map? on ref:";
var G__10793_10810 = cljs.core.deref(mut);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10786_10803,G__10787_10804,G__10788_10805,G__10789_10806,G__10790_10807,G__10791_10808,G__10792_10809,G__10793_10810) : tiltontec.util.core.pln.call(null,G__10786_10803,G__10787_10804,G__10788_10805,G__10789_10806,G__10790_10807,G__10791_10808,G__10792_10809,G__10793_10810));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mut,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.mut_set_BANG_.cljs$lang$maxFixedArity = 4);

tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(var_args){
var G__10812 = arguments.length;
switch (G__10812) {
case 2:
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2 = (function (p__10813,new_value){
var vec__10814 = p__10813;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10814,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10814,(1),null);
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,ref], null),new_value,null);
}));

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3 = (function (p__10817,new_value,tag){
var vec__10818 = p__10817;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10818,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10818,(1),null);
if(tiltontec.util.core.any_ref_QMARK_(ref)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__10829 = "model.util.core/rmap-setf> prop:";
var G__10830 = prop;
var G__10831 = cljs.core.cst$kw$tag;
var G__10832 = tag;
var G__10833 = "new-value:";
var G__10834 = new_value;
var G__10835 = "failed assertion any-ref? on ref:";
var G__10836 = ref;
return (tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10829,G__10830,G__10831,G__10832,G__10833,G__10834,G__10835,G__10836) : tiltontec.util.core.pln.call(null,G__10829,G__10830,G__10831,G__10832,G__10833,G__10834,G__10835,G__10836));
})()),"\n","(any-ref? ref)"].join('')));
}

if(cljs.core.map_QMARK_(cljs.core.deref(ref))){
} else {
var G__10837_10846 = "model.util.core/rmap-setf> prop:";
var G__10838_10847 = prop;
var G__10839_10848 = cljs.core.cst$kw$tag;
var G__10840_10849 = tag;
var G__10841_10850 = "new-value:";
var G__10842_10851 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__10843_10852 = "failed assertion map? on ref:";
var G__10844_10853 = cljs.core.deref(ref);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10837_10846,G__10838_10847,G__10839_10848,G__10840_10849,G__10841_10850,G__10842_10851,G__10843_10852,G__10844_10853) : tiltontec.util.core.pln.call(null,G__10837_10846,G__10838_10847,G__10839_10848,G__10840_10849,G__10841_10850,G__10842_10851,G__10843_10852,G__10844_10853));

throw (new Error("Assert failed: false"));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.rmap_setf.cljs$lang$maxFixedArity = 3);

tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__10854,new_value){
var vec__10855 = p__10854;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10855,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10855,(1),null);
if(cljs.core.truth_(cljs.core.meta(ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,new_value], 0));

return new_value;
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.util !== 'undefined') && (typeof tiltontec.util.core !== 'undefined') && (typeof tiltontec.util.core.err !== 'undefined')){
} else {
tiltontec.util.core.err = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10858 = cljs.core.get_global_hierarchy;
return (fexpr__10858.cljs$core$IFn$_invoke$arity$0 ? fexpr__10858.cljs$core$IFn$_invoke$arity$0() : fexpr__10858.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.util.core","err"),(function() { 
var G__10859__delegate = function (a1,args){
return cljs.core.fn_QMARK_(a1);
};
var G__10859 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__10860__i = 0, G__10860__a = new Array(arguments.length -  1);
while (G__10860__i < G__10860__a.length) {G__10860__a[G__10860__i] = arguments[G__10860__i + 1]; ++G__10860__i;}
  args = new cljs.core.IndexedSeq(G__10860__a,0,null);
} 
return G__10859__delegate.call(this,a1,args);};
G__10859.cljs$lang$maxFixedArity = 1;
G__10859.cljs$lang$applyTo = (function (arglist__10861){
var a1 = cljs.core.first(arglist__10861);
var args = cljs.core.rest(arglist__10861);
return G__10859__delegate(a1,args);
});
G__10859.cljs$core$IFn$_invoke$arity$variadic = G__10859__delegate;
return G__10859;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function() { 
var G__10863__delegate = function (fn,mas){
var G__10862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,mas);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__10862) : tiltontec.util.core.err.call(null,G__10862));
};
var G__10863 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__10864__i = 0, G__10864__a = new Array(arguments.length -  1);
while (G__10864__i < G__10864__a.length) {G__10864__a[G__10864__i] = arguments[G__10864__i + 1]; ++G__10864__i;}
  mas = new cljs.core.IndexedSeq(G__10864__a,0,null);
} 
return G__10863__delegate.call(this,fn,mas);};
G__10863.cljs$lang$maxFixedArity = 1;
G__10863.cljs$lang$applyTo = (function (arglist__10865){
var fn = cljs.core.first(arglist__10865);
var mas = cljs.core.rest(arglist__10865);
return G__10863__delegate(fn,mas);
});
G__10863.cljs$core$IFn$_invoke$arity$variadic = G__10863__delegate;
return G__10863;
})()
);
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__10866__delegate = function (bits){
throw (new Error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons("mxerr>",bits))));
};
var G__10866 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__10867__i = 0, G__10867__a = new Array(arguments.length -  0);
while (G__10867__i < G__10867__a.length) {G__10867__a[G__10867__i] = arguments[G__10867__i + 0]; ++G__10867__i;}
  bits = new cljs.core.IndexedSeq(G__10867__a,0,null);
} 
return G__10866__delegate.call(this,bits);};
G__10866.cljs$lang$maxFixedArity = 0;
G__10866.cljs$lang$applyTo = (function (arglist__10868){
var bits = cljs.core.seq(arglist__10868);
return G__10866__delegate(bits);
});
G__10866.cljs$core$IFn$_invoke$arity$variadic = G__10866__delegate;
return G__10866;
})()
);
tiltontec.util.core.flz = (function tiltontec$util$core$flz(x){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.LazySeq)){
return cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(x));
} else {
return x;
}
});
tiltontec.util.core.wtrx_test = (function tiltontec$util$core$wtrx_test(n){
return tiltontec.util.base.call_wtrx((function (){
if((n > (0))){
var G__10869 = (n - (1));
return (tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1(G__10869) : tiltontec.util.core.wtrx_test.call(null,G__10869));
} else {
return null;
}
}),(0),(10),(new cljs.core.List(null,"test",(new cljs.core.List(null,n,null,(1),null)),(2),null)));
});
tiltontec.util.core.prop_users = (function tiltontec$util$core$prop_users(me,prop){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$propq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__10870 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__10870) : prop.call(null,G__10870));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.prop_useds = (function tiltontec$util$core$prop_useds(me,prop){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prop,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__10871 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__10871) : prop.call(null,G__10871));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.make_fifo_queue = (function tiltontec$util$core$make_fifo_queue(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
});
tiltontec.util.core.fifo_data = (function tiltontec$util$core$fifo_data(q){
return cljs.core.deref(q);
});
tiltontec.util.core.fifo_clear = (function tiltontec$util$core$fifo_clear(q){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(q,cljs.core.empty);
});
tiltontec.util.core.fifo_empty_QMARK_ = (function tiltontec$util$core$fifo_empty_QMARK_(q){
return cljs.core.empty_QMARK_(cljs.core.deref(q));
});
tiltontec.util.core.fifo_peek = (function tiltontec$util$core$fifo_peek(q){
return cljs.core.first(cljs.core.deref(q));
});
tiltontec.util.core.fifo_add = (function tiltontec$util$core$fifo_add(q,new$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.conj,new$);
});
tiltontec.util.core.fifo_pop = (function tiltontec$util$core$fifo_pop(q){
if(tiltontec.util.core.fifo_empty_QMARK_(q)){
return null;
} else {
var result__10624__auto__ = cljs.core.first(cljs.core.deref(q));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.subvec,(1));

return result__10624__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.util.core.pln = (function tiltontec$util$core$pln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10873 = arguments.length;
var i__4737__auto___10874 = (0);
while(true){
if((i__4737__auto___10874 < len__4736__auto___10873)){
args__4742__auto__.push((arguments[i__4737__auto___10874]));

var G__10875 = (i__4737__auto___10874 + (1));
i__4737__auto___10874 = G__10875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args)], 0));
}));

(tiltontec.util.core.pln.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq10872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10872));
}));

tiltontec.util.core.xpln = (function tiltontec$util$core$xpln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10877 = arguments.length;
var i__4737__auto___10878 = (0);
while(true){
if((i__4737__auto___10878 < len__4736__auto___10877)){
args__4742__auto__.push((arguments[i__4737__auto___10878]));

var G__10879 = (i__4737__auto___10878 + (1));
i__4737__auto___10878 = G__10879;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.xpln.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.util.core.xpln.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
}));

(tiltontec.util.core.xpln.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.util.core.xpln.cljs$lang$applyTo = (function (seq10876){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10876));
}));

tiltontec.util.core.eko = (function tiltontec$util$core$eko(key,value){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eko_BANG__BANG__BANG_,key,value], 0));

return value;
});
tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10882 = arguments.length;
var i__4737__auto___10883 = (0);
while(true){
if((i__4737__auto___10883 < len__4736__auto___10882)){
args__4742__auto__.push((arguments[i__4737__auto___10883]));

var G__10884 = (i__4737__auto___10883 + (1));
i__4737__auto___10883 = G__10884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic = (function (k,r){
if(typeof cljs.core.first(r) === 'string'){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$force);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.core._STAR_plnk_keys_STAR_], null));
}
})())){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0));
} else {
return null;
}
}
}));

(tiltontec.util.core.plnk.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq10880){
var G__10881 = cljs.core.first(seq10880);
var seq10880__$1 = cljs.core.next(seq10880);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10881,seq10880__$1);
}));

tiltontec.util.core.now = (function tiltontec$util$core$now(){
return (new Date()).getTime();
});
tiltontec.util.core.counts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.util.core.counts_reset = (function tiltontec$util$core$counts_reset(){
return cljs.core.reset_BANG_(tiltontec.util.core.counts,null);
});
/**
 * Count it
 */
tiltontec.util.core.countit = (function tiltontec$util$core$countit(var_args){
var G__10886 = arguments.length;
switch (G__10886) {
case 1:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$1 = (function (path){
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(path,(1));
}));

(tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2 = (function (path,n){
if(cljs.core.sequential_QMARK_(path)){
if(cljs.core.counted_QMARK_(n)){
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(n));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tiltontec.util.core.counts,cljs.core.update_in,path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0));
}
} else {
return tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),n);
}
}));

(tiltontec.util.core.countit.cljs$lang$maxFixedArity = 2);

tiltontec.util.core.counts_reset();

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$b], null),(7));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$a,(new cljs.core.List(null,cljs.core.cst$kw$b,null,(1),null)),(2),null)),(3));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,(2));

tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$y,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));
