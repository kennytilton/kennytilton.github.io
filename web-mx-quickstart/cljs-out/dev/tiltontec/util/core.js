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
var G__16575 = arguments.length;
switch (G__16575) {
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
var G__16576_16593 = "model.util.core/rmap-setf> prop:";
var G__16577_16594 = prop;
var G__16578_16595 = cljs.core.cst$kw$tag;
var G__16579_16596 = tag;
var G__16580_16597 = "new-value:";
var G__16581_16598 = new_value;
var G__16582_16599 = "failed assertion any-ref? on ref:";
var G__16583_16600 = mut;
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__16576_16593,G__16577_16594,G__16578_16595,G__16579_16596,G__16580_16597,G__16581_16598,G__16582_16599,G__16583_16600) : tiltontec.util.core.pln.call(null,G__16576_16593,G__16577_16594,G__16578_16595,G__16579_16596,G__16580_16597,G__16581_16598,G__16582_16599,G__16583_16600));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

if(cljs.core.map_QMARK_(cljs.core.deref(mut))){
} else {
var G__16584_16601 = "model.util.core/rmap-setf> prop:";
var G__16585_16602 = prop;
var G__16586_16603 = cljs.core.cst$kw$tag;
var G__16587_16604 = tag;
var G__16588_16605 = "new-value:";
var G__16589_16606 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__16590_16607 = "failed assertion map? on ref:";
var G__16591_16608 = cljs.core.deref(mut);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__16584_16601,G__16585_16602,G__16586_16603,G__16587_16604,G__16588_16605,G__16589_16606,G__16590_16607,G__16591_16608) : tiltontec.util.core.pln.call(null,G__16584_16601,G__16585_16602,G__16586_16603,G__16587_16604,G__16588_16605,G__16589_16606,G__16590_16607,G__16591_16608));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mut,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.mut_set_BANG_.cljs$lang$maxFixedArity = 4);

tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(var_args){
var G__16610 = arguments.length;
switch (G__16610) {
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

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2 = (function (p__16611,new_value){
var vec__16612 = p__16611;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612,(1),null);
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,ref], null),new_value,null);
}));

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3 = (function (p__16615,new_value,tag){
var vec__16616 = p__16615;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616,(1),null);
if(tiltontec.util.core.any_ref_QMARK_(ref)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16627 = "model.util.core/rmap-setf> prop:";
var G__16628 = prop;
var G__16629 = cljs.core.cst$kw$tag;
var G__16630 = tag;
var G__16631 = "new-value:";
var G__16632 = new_value;
var G__16633 = "failed assertion any-ref? on ref:";
var G__16634 = ref;
return (tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634) : tiltontec.util.core.pln.call(null,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634));
})()),"\n","(any-ref? ref)"].join('')));
}

if(cljs.core.map_QMARK_(cljs.core.deref(ref))){
} else {
var G__16635_16644 = "model.util.core/rmap-setf> prop:";
var G__16636_16645 = prop;
var G__16637_16646 = cljs.core.cst$kw$tag;
var G__16638_16647 = tag;
var G__16639_16648 = "new-value:";
var G__16640_16649 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__16641_16650 = "failed assertion map? on ref:";
var G__16642_16651 = cljs.core.deref(ref);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__16635_16644,G__16636_16645,G__16637_16646,G__16638_16647,G__16639_16648,G__16640_16649,G__16641_16650,G__16642_16651) : tiltontec.util.core.pln.call(null,G__16635_16644,G__16636_16645,G__16637_16646,G__16638_16647,G__16639_16648,G__16640_16649,G__16641_16650,G__16642_16651));

throw (new Error("Assert failed: false"));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.rmap_setf.cljs$lang$maxFixedArity = 3);

tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__16652,new_value){
var vec__16653 = p__16652;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16653,(1),null);
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16656 = cljs.core.get_global_hierarchy;
return (fexpr__16656.cljs$core$IFn$_invoke$arity$0 ? fexpr__16656.cljs$core$IFn$_invoke$arity$0() : fexpr__16656.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.util.core","err"),(function() { 
var G__16657__delegate = function (a1,args){
return cljs.core.fn_QMARK_(a1);
};
var G__16657 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__16658__i = 0, G__16658__a = new Array(arguments.length -  1);
while (G__16658__i < G__16658__a.length) {G__16658__a[G__16658__i] = arguments[G__16658__i + 1]; ++G__16658__i;}
  args = new cljs.core.IndexedSeq(G__16658__a,0,null);
} 
return G__16657__delegate.call(this,a1,args);};
G__16657.cljs$lang$maxFixedArity = 1;
G__16657.cljs$lang$applyTo = (function (arglist__16659){
var a1 = cljs.core.first(arglist__16659);
var args = cljs.core.rest(arglist__16659);
return G__16657__delegate(a1,args);
});
G__16657.cljs$core$IFn$_invoke$arity$variadic = G__16657__delegate;
return G__16657;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function() { 
var G__16661__delegate = function (fn,mas){
var G__16660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,mas);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__16660) : tiltontec.util.core.err.call(null,G__16660));
};
var G__16661 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__16662__i = 0, G__16662__a = new Array(arguments.length -  1);
while (G__16662__i < G__16662__a.length) {G__16662__a[G__16662__i] = arguments[G__16662__i + 1]; ++G__16662__i;}
  mas = new cljs.core.IndexedSeq(G__16662__a,0,null);
} 
return G__16661__delegate.call(this,fn,mas);};
G__16661.cljs$lang$maxFixedArity = 1;
G__16661.cljs$lang$applyTo = (function (arglist__16663){
var fn = cljs.core.first(arglist__16663);
var mas = cljs.core.rest(arglist__16663);
return G__16661__delegate(fn,mas);
});
G__16661.cljs$core$IFn$_invoke$arity$variadic = G__16661__delegate;
return G__16661;
})()
);
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__16664__delegate = function (bits){
throw (new Error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons("mxerr>",bits))));
};
var G__16664 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__16665__i = 0, G__16665__a = new Array(arguments.length -  0);
while (G__16665__i < G__16665__a.length) {G__16665__a[G__16665__i] = arguments[G__16665__i + 0]; ++G__16665__i;}
  bits = new cljs.core.IndexedSeq(G__16665__a,0,null);
} 
return G__16664__delegate.call(this,bits);};
G__16664.cljs$lang$maxFixedArity = 0;
G__16664.cljs$lang$applyTo = (function (arglist__16666){
var bits = cljs.core.seq(arglist__16666);
return G__16664__delegate(bits);
});
G__16664.cljs$core$IFn$_invoke$arity$variadic = G__16664__delegate;
return G__16664;
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
var G__16667 = (n - (1));
return (tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1(G__16667) : tiltontec.util.core.wtrx_test.call(null,G__16667));
} else {
return null;
}
}),(0),(10),(new cljs.core.List(null,"test",(new cljs.core.List(null,n,null,(1),null)),(2),null)));
});
tiltontec.util.core.prop_users = (function tiltontec$util$core$prop_users(me,prop){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$propq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__16668 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__16668) : prop.call(null,G__16668));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.prop_useds = (function tiltontec$util$core$prop_useds(me,prop){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prop,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__16669 = cljs.core.deref(me);
return (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(G__16669) : prop.call(null,G__16669));
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
var result__16422__auto__ = cljs.core.first(cljs.core.deref(q));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.subvec,(1));

return result__16422__auto__;
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
var len__4736__auto___16671 = arguments.length;
var i__4737__auto___16672 = (0);
while(true){
if((i__4737__auto___16672 < len__4736__auto___16671)){
args__4742__auto__.push((arguments[i__4737__auto___16672]));

var G__16673 = (i__4737__auto___16672 + (1));
i__4737__auto___16672 = G__16673;
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
(tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq16670){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16670));
}));

tiltontec.util.core.xpln = (function tiltontec$util$core$xpln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16675 = arguments.length;
var i__4737__auto___16676 = (0);
while(true){
if((i__4737__auto___16676 < len__4736__auto___16675)){
args__4742__auto__.push((arguments[i__4737__auto___16676]));

var G__16677 = (i__4737__auto___16676 + (1));
i__4737__auto___16676 = G__16677;
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
(tiltontec.util.core.xpln.cljs$lang$applyTo = (function (seq16674){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16674));
}));

tiltontec.util.core.eko = (function tiltontec$util$core$eko(key,value){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eko_BANG__BANG__BANG_,key,value], 0));

return value;
});
tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16680 = arguments.length;
var i__4737__auto___16681 = (0);
while(true){
if((i__4737__auto___16681 < len__4736__auto___16680)){
args__4742__auto__.push((arguments[i__4737__auto___16681]));

var G__16682 = (i__4737__auto___16681 + (1));
i__4737__auto___16681 = G__16682;
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
(tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq16678){
var G__16679 = cljs.core.first(seq16678);
var seq16678__$1 = cljs.core.next(seq16678);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16679,seq16678__$1);
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
var G__16684 = arguments.length;
switch (G__16684) {
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
