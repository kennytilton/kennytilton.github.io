// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.util.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cognitect.transit');
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
var G__10930 = arguments.length;
switch (G__10930) {
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

(tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (mut,slot,new_value){
return tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4(mut,slot,new_value,null);
}));

(tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (mut,slot,new_value,tag){
if(tiltontec.util.core.any_ref_QMARK_(mut)){
} else {
var G__10931_10948 = "model.util.core/rmap-setf> slot:";
var G__10932_10949 = slot;
var G__10933_10950 = cljs.core.cst$kw$tag;
var G__10934_10951 = tag;
var G__10935_10952 = "new-value:";
var G__10936_10953 = new_value;
var G__10937_10954 = "failed assertion any-ref? on ref:";
var G__10938_10955 = mut;
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10931_10948,G__10932_10949,G__10933_10950,G__10934_10951,G__10935_10952,G__10936_10953,G__10937_10954,G__10938_10955) : tiltontec.util.core.pln.call(null,G__10931_10948,G__10932_10949,G__10933_10950,G__10934_10951,G__10935_10952,G__10936_10953,G__10937_10954,G__10938_10955));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

if(cljs.core.map_QMARK_(cljs.core.deref(mut))){
} else {
var G__10939_10956 = "model.util.core/rmap-setf> slot:";
var G__10940_10957 = slot;
var G__10941_10958 = cljs.core.cst$kw$tag;
var G__10942_10959 = tag;
var G__10943_10960 = "new-value:";
var G__10944_10961 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__10945_10962 = "failed assertion map? on ref:";
var G__10946_10963 = cljs.core.deref(mut);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10939_10956,G__10940_10957,G__10941_10958,G__10942_10959,G__10943_10960,G__10944_10961,G__10945_10962,G__10946_10963) : tiltontec.util.core.pln.call(null,G__10939_10956,G__10940_10957,G__10941_10958,G__10942_10959,G__10943_10960,G__10944_10961,G__10945_10962,G__10946_10963));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mut,cljs.core.assoc,slot,new_value);

return new_value;
}));

(tiltontec.util.core.mut_set_BANG_.cljs$lang$maxFixedArity = 4);

tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(var_args){
var G__10965 = arguments.length;
switch (G__10965) {
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

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2 = (function (p__10966,new_value){
var vec__10967 = p__10966;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10967,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10967,(1),null);
return tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,ref], null),new_value,null);
}));

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3 = (function (p__10970,new_value,tag){
var vec__10971 = p__10970;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10971,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10971,(1),null);
if(tiltontec.util.core.any_ref_QMARK_(ref)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__10982 = "model.util.core/rmap-setf> slot:";
var G__10983 = slot;
var G__10984 = cljs.core.cst$kw$tag;
var G__10985 = tag;
var G__10986 = "new-value:";
var G__10987 = new_value;
var G__10988 = "failed assertion any-ref? on ref:";
var G__10989 = ref;
return (tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10982,G__10983,G__10984,G__10985,G__10986,G__10987,G__10988,G__10989) : tiltontec.util.core.pln.call(null,G__10982,G__10983,G__10984,G__10985,G__10986,G__10987,G__10988,G__10989));
})()),"\n","(any-ref? ref)"].join('')));
}

if(cljs.core.map_QMARK_(cljs.core.deref(ref))){
} else {
var G__10990_10999 = "model.util.core/rmap-setf> slot:";
var G__10991_11000 = slot;
var G__10992_11001 = cljs.core.cst$kw$tag;
var G__10993_11002 = tag;
var G__10994_11003 = "new-value:";
var G__10995_11004 = (function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$NIL;
}
})();
var G__10996_11005 = "failed assertion map? on ref:";
var G__10997_11006 = cljs.core.deref(ref);
(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8 ? tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$8(G__10990_10999,G__10991_11000,G__10992_11001,G__10993_11002,G__10994_11003,G__10995_11004,G__10996_11005,G__10997_11006) : tiltontec.util.core.pln.call(null,G__10990_10999,G__10991_11000,G__10992_11001,G__10993_11002,G__10994_11003,G__10995_11004,G__10996_11005,G__10997_11006));

throw (new Error("Assert failed: false"));

}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,slot,new_value);

return new_value;
}));

(tiltontec.util.core.rmap_setf.cljs$lang$maxFixedArity = 3);

tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__11007,new_value){
var vec__11008 = p__11007;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11008,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11008,(1),null);
if(cljs.core.truth_(cljs.core.meta(ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([slot,new_value], 0));

return new_value;
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.util !== 'undefined') && (typeof tiltontec.util.core !== 'undefined') && (typeof tiltontec.util.core.err !== 'undefined')){
} else {
tiltontec.util.core.err = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11011 = cljs.core.get_global_hierarchy;
return (fexpr__11011.cljs$core$IFn$_invoke$arity$0 ? fexpr__11011.cljs$core$IFn$_invoke$arity$0() : fexpr__11011.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tiltontec.util.core","err"),(function() { 
var G__11012__delegate = function (a1,args){
return cljs.core.fn_QMARK_(a1);
};
var G__11012 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__11013__i = 0, G__11013__a = new Array(arguments.length -  1);
while (G__11013__i < G__11013__a.length) {G__11013__a[G__11013__i] = arguments[G__11013__i + 1]; ++G__11013__i;}
  args = new cljs.core.IndexedSeq(G__11013__a,0,null);
} 
return G__11012__delegate.call(this,a1,args);};
G__11012.cljs$lang$maxFixedArity = 1;
G__11012.cljs$lang$applyTo = (function (arglist__11014){
var a1 = cljs.core.first(arglist__11014);
var args = cljs.core.rest(arglist__11014);
return G__11012__delegate(a1,args);
});
G__11012.cljs$core$IFn$_invoke$arity$variadic = G__11012__delegate;
return G__11012;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function() { 
var G__11016__delegate = function (fn,mas){
var G__11015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,mas);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$1(G__11015) : tiltontec.util.core.err.call(null,G__11015));
};
var G__11016 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__11017__i = 0, G__11017__a = new Array(arguments.length -  1);
while (G__11017__i < G__11017__a.length) {G__11017__a[G__11017__i] = arguments[G__11017__i + 1]; ++G__11017__i;}
  mas = new cljs.core.IndexedSeq(G__11017__a,0,null);
} 
return G__11016__delegate.call(this,fn,mas);};
G__11016.cljs$lang$maxFixedArity = 1;
G__11016.cljs$lang$applyTo = (function (arglist__11018){
var fn = cljs.core.first(arglist__11018);
var mas = cljs.core.rest(arglist__11018);
return G__11016__delegate(fn,mas);
});
G__11016.cljs$core$IFn$_invoke$arity$variadic = G__11016__delegate;
return G__11016;
})()
);
tiltontec.util.core.err.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__11019__delegate = function (bits){
throw (new Error(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons("mxerr>",bits))));
};
var G__11019 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__11020__i = 0, G__11020__a = new Array(arguments.length -  0);
while (G__11020__i < G__11020__a.length) {G__11020__a[G__11020__i] = arguments[G__11020__i + 0]; ++G__11020__i;}
  bits = new cljs.core.IndexedSeq(G__11020__a,0,null);
} 
return G__11019__delegate.call(this,bits);};
G__11019.cljs$lang$maxFixedArity = 0;
G__11019.cljs$lang$applyTo = (function (arglist__11021){
var bits = cljs.core.seq(arglist__11021);
return G__11019__delegate(bits);
});
G__11019.cljs$core$IFn$_invoke$arity$variadic = G__11019__delegate;
return G__11019;
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
var G__11022 = (n - (1));
return (tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1 ? tiltontec.util.core.wtrx_test.cljs$core$IFn$_invoke$arity$1(G__11022) : tiltontec.util.core.wtrx_test.call(null,G__11022));
} else {
return null;
}
}),(0),(10),(new cljs.core.List(null,"test",(new cljs.core.List(null,n,null,(1),null)),(2),null)));
});
tiltontec.util.core.slot_users = (function tiltontec$util$core$slot_users(me,slot){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$slotq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$callers.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__11023 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__11023) : slot.call(null,G__11023));
})()),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.slot_useds = (function tiltontec$util$core$slot_useds(me,slot){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$slot,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,cljs.core.cst$kw$useds.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__11024 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__11024) : slot.call(null,G__11024));
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
var result__10779__auto__ = cljs.core.first(cljs.core.deref(q));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(q,cljs.core.subvec,(1));

return result__10779__auto__;
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
var len__4736__auto___11026 = arguments.length;
var i__4737__auto___11027 = (0);
while(true){
if((i__4737__auto___11027 < len__4736__auto___11026)){
args__4742__auto__.push((arguments[i__4737__auto___11027]));

var G__11028 = (i__4737__auto___11027 + (1));
i__4737__auto___11027 = G__11028;
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
(tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq11025){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11025));
}));

tiltontec.util.core.xpln = (function tiltontec$util$core$xpln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11030 = arguments.length;
var i__4737__auto___11031 = (0);
while(true){
if((i__4737__auto___11031 < len__4736__auto___11030)){
args__4742__auto__.push((arguments[i__4737__auto___11031]));

var G__11032 = (i__4737__auto___11031 + (1));
i__4737__auto___11031 = G__11032;
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
(tiltontec.util.core.xpln.cljs$lang$applyTo = (function (seq11029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11029));
}));

tiltontec.util.core.eko = (function tiltontec$util$core$eko(key,value){
tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eko_BANG__BANG__BANG_,key,value], 0));

return value;
});
tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11035 = arguments.length;
var i__4737__auto___11036 = (0);
while(true){
if((i__4737__auto___11036 < len__4736__auto___11035)){
args__4742__auto__.push((arguments[i__4737__auto___11036]));

var G__11037 = (i__4737__auto___11036 + (1));
i__4737__auto___11036 = G__11037;
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
(tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq11033){
var G__11034 = cljs.core.first(seq11033);
var seq11033__$1 = cljs.core.next(seq11033);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11034,seq11033__$1);
}));

tiltontec.util.core.now = (function tiltontec$util$core$now(){
return (new Date()).getTime();
});
tiltontec.util.core.map_to_json = (function tiltontec$util$core$map_to_json(map){
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),map);
});
tiltontec.util.core.json_to_map = (function tiltontec$util$core$json_to_map(json){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),json);
});
tiltontec.util.core.counts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tiltontec.util.core.counts_reset = (function tiltontec$util$core$counts_reset(){
return cljs.core.reset_BANG_(tiltontec.util.core.counts,null);
});
/**
 * Count it
 */
tiltontec.util.core.countit = (function tiltontec$util$core$countit(var_args){
var G__11039 = arguments.length;
switch (G__11039) {
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
