// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.util.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.util.base');
tiltontec.util.core.type_of = (function tiltontec$util$core$type_of(x){
return cljs.core.type.call(null,x);
});
tiltontec.util.core.xor = (function tiltontec$util$core$xor(a,b){
var or__4126__auto__ = (function (){var and__4115__auto__ = a;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,b);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = b;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,a);
} else {
return and__4115__auto__;
}
}
});

tiltontec.util.core.set_ify = (function tiltontec$util$core$set_ify(x){
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.set.call(null,x);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
tiltontec.util.core.cl_find = (function tiltontec$util$core$cl_find(sought,coll){
if((sought == null)){
return null;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([sought]),coll);
}
});
tiltontec.util.core.uuidv4 = (function tiltontec$util$core$uuidv4(){
var hex = (function tiltontec$util$core$uuidv4_$_hex(){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join(''));
});
tiltontec.util.core.ia_ref = (function tiltontec$util$core$ia_ref(x){
return cljs.core.atom.call(null,x);
});
tiltontec.util.core.any_ref_QMARK_ = (function tiltontec$util$core$any_ref_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
tiltontec.util.core.mut_set_BANG_ = (function tiltontec$util$core$mut_set_BANG_(var_args){
var G__19040 = arguments.length;
switch (G__19040) {
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
return tiltontec.util.core.mut_set_BANG_.call(null,mut,prop,new_value,null);
}));

(tiltontec.util.core.mut_set_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (mut,prop,new_value,tag){
if(tiltontec.util.core.any_ref_QMARK_.call(null,mut)){
} else {
tiltontec.util.core.pln.call(null,"model.util.core/rmap-setf> prop:",prop,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,"new-value:",new_value,"failed assertion any-ref? on ref:",mut);

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,mut))){
} else {
tiltontec.util.core.pln.call(null,"model.util.core/rmap-setf> prop:",prop,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,"new-value:",(function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"NIL","NIL",757349226);
}
})(),"failed assertion map? on ref:",cljs.core.deref.call(null,mut));

throw (new Error(["Assert failed: ","see console","\n","false"].join('')));

}

cljs.core.swap_BANG_.call(null,mut,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.mut_set_BANG_.cljs$lang$maxFixedArity = 4);

tiltontec.util.core.rmap_setf = (function tiltontec$util$core$rmap_setf(var_args){
var G__19043 = arguments.length;
switch (G__19043) {
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

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$2 = (function (p__19044,new_value){
var vec__19045 = p__19044;
var prop = cljs.core.nth.call(null,vec__19045,(0),null);
var ref = cljs.core.nth.call(null,vec__19045,(1),null);
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,ref], null),new_value,null);
}));

(tiltontec.util.core.rmap_setf.cljs$core$IFn$_invoke$arity$3 = (function (p__19048,new_value,tag){
var vec__19049 = p__19048;
var prop = cljs.core.nth.call(null,vec__19049,(0),null);
var ref = cljs.core.nth.call(null,vec__19049,(1),null);
if(tiltontec.util.core.any_ref_QMARK_.call(null,ref)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.pln.call(null,"model.util.core/rmap-setf> prop:",prop,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,"new-value:",new_value,"failed assertion any-ref? on ref:",ref)),"\n","(any-ref? ref)"].join('')));
}

if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,ref))){
} else {
tiltontec.util.core.pln.call(null,"model.util.core/rmap-setf> prop:",prop,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,"new-value:",(function (){var or__4126__auto__ = new_value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"NIL","NIL",757349226);
}
})(),"failed assertion map? on ref:",cljs.core.deref.call(null,ref));

throw (new Error("Assert failed: false"));

}

cljs.core.swap_BANG_.call(null,ref,cljs.core.assoc,prop,new_value);

return new_value;
}));

(tiltontec.util.core.rmap_setf.cljs$lang$maxFixedArity = 3);

tiltontec.util.core.rmap_meta_setf = (function tiltontec$util$core$rmap_meta_setf(p__19053,new_value){
var vec__19054 = p__19053;
var prop = cljs.core.nth.call(null,vec__19054,(0),null);
var ref = cljs.core.nth.call(null,vec__19054,(1),null);
if(cljs.core.truth_(cljs.core.meta.call(null,ref))){
} else {
throw (new Error("Assert failed: (meta ref)"));
}

cljs.core.alter_meta_BANG_.call(null,ref,cljs.core.assoc,prop,new_value);

return new_value;
});
if((typeof tiltontec !== 'undefined') && (typeof tiltontec.util !== 'undefined') && (typeof tiltontec.util.core !== 'undefined') && (typeof tiltontec.util.core.err !== 'undefined')){
} else {
tiltontec.util.core.err = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.util.core","err"),(function() { 
var G__19057__delegate = function (a1,args){
return cljs.core.fn_QMARK_.call(null,a1);
};
var G__19057 = function (a1,var_args){
var args = null;
if (arguments.length > 1) {
var G__19058__i = 0, G__19058__a = new Array(arguments.length -  1);
while (G__19058__i < G__19058__a.length) {G__19058__a[G__19058__i] = arguments[G__19058__i + 1]; ++G__19058__i;}
  args = new cljs.core.IndexedSeq(G__19058__a,0,null);
} 
return G__19057__delegate.call(this,a1,args);};
G__19057.cljs$lang$maxFixedArity = 1;
G__19057.cljs$lang$applyTo = (function (arglist__19059){
var a1 = cljs.core.first(arglist__19059);
var args = cljs.core.rest(arglist__19059);
return G__19057__delegate(a1,args);
});
G__19057.cljs$core$IFn$_invoke$arity$variadic = G__19057__delegate;
return G__19057;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.util.core.err,true,(function() { 
var G__19060__delegate = function (fn,mas){
return tiltontec.util.core.err.call(null,cljs.core.apply.call(null,fn,mas));
};
var G__19060 = function (fn,var_args){
var mas = null;
if (arguments.length > 1) {
var G__19061__i = 0, G__19061__a = new Array(arguments.length -  1);
while (G__19061__i < G__19061__a.length) {G__19061__a[G__19061__i] = arguments[G__19061__i + 1]; ++G__19061__i;}
  mas = new cljs.core.IndexedSeq(G__19061__a,0,null);
} 
return G__19060__delegate.call(this,fn,mas);};
G__19060.cljs$lang$maxFixedArity = 1;
G__19060.cljs$lang$applyTo = (function (arglist__19062){
var fn = cljs.core.first(arglist__19062);
var mas = cljs.core.rest(arglist__19062);
return G__19060__delegate(fn,mas);
});
G__19060.cljs$core$IFn$_invoke$arity$variadic = G__19060__delegate;
return G__19060;
})()
);
cljs.core._add_method.call(null,tiltontec.util.core.err,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__19063__delegate = function (bits){
throw (new Error(clojure.string.join.call(null," ",cljs.core.cons.call(null,"mxerr>",bits))));
};
var G__19063 = function (var_args){
var bits = null;
if (arguments.length > 0) {
var G__19064__i = 0, G__19064__a = new Array(arguments.length -  0);
while (G__19064__i < G__19064__a.length) {G__19064__a[G__19064__i] = arguments[G__19064__i + 0]; ++G__19064__i;}
  bits = new cljs.core.IndexedSeq(G__19064__a,0,null);
} 
return G__19063__delegate.call(this,bits);};
G__19063.cljs$lang$maxFixedArity = 0;
G__19063.cljs$lang$applyTo = (function (arglist__19065){
var bits = cljs.core.seq(arglist__19065);
return G__19063__delegate(bits);
});
G__19063.cljs$core$IFn$_invoke$arity$variadic = G__19063__delegate;
return G__19063;
})()
);
tiltontec.util.core.flz = (function tiltontec$util$core$flz(x){
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,x),cljs.core.LazySeq)){
return cljs.core.vec.call(null,cljs.core.doall.call(null,x));
} else {
return x;
}
});
tiltontec.util.core.wtrx_test = (function tiltontec$util$core$wtrx_test(n){
return tiltontec.util.base.call_wtrx.call(null,(function (){
if((n > (0))){
return tiltontec.util.core.wtrx_test.call(null,(n - (1)));
} else {
return null;
}
}),(0),(10),(new cljs.core.List(null,"test",(new cljs.core.List(null,n,null,(1),null)),(2),null)));
});
tiltontec.util.core.prop_users = (function tiltontec$util$core$prop_users(me,prop){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"propq","propq",202331530),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"callers","callers",-1991542784).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,prop.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.prop_useds = (function tiltontec$util$core$prop_useds(me,prop){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.map.call(null,cljs.core.deref,new cljs.core.Keyword(null,"useds","useds",621350967).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,prop.call(null,cljs.core.deref.call(null,me))),cljs.core.PersistentHashSet.EMPTY))));
});
tiltontec.util.core.make_fifo_queue = (function tiltontec$util$core$make_fifo_queue(){
return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
});
tiltontec.util.core.fifo_data = (function tiltontec$util$core$fifo_data(q){
return cljs.core.deref.call(null,q);
});
tiltontec.util.core.fifo_clear = (function tiltontec$util$core$fifo_clear(q){
return cljs.core.swap_BANG_.call(null,q,cljs.core.empty);
});
tiltontec.util.core.fifo_empty_QMARK_ = (function tiltontec$util$core$fifo_empty_QMARK_(q){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_peek = (function tiltontec$util$core$fifo_peek(q){
return cljs.core.first.call(null,cljs.core.deref.call(null,q));
});
tiltontec.util.core.fifo_add = (function tiltontec$util$core$fifo_add(q,new$){
return cljs.core.swap_BANG_.call(null,q,cljs.core.conj,new$);
});
tiltontec.util.core.fifo_pop = (function tiltontec$util$core$fifo_pop(q){
if(tiltontec.util.core.fifo_empty_QMARK_.call(null,q)){
return null;
} else {
var result__9539__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,q));
cljs.core.swap_BANG_.call(null,q,cljs.core.subvec,(1));

return result__9539__auto__;
}
});
tiltontec.util.core.ensure_vec = (function tiltontec$util$core$ensure_vec(x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
tiltontec.util.core.pln = (function tiltontec$util$core$pln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19067 = arguments.length;
var i__4737__auto___19068 = (0);
while(true){
if((i__4737__auto___19068 < len__4736__auto___19067)){
args__4742__auto__.push((arguments[i__4737__auto___19068]));

var G__19069 = (i__4737__auto___19068 + (1));
i__4737__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.util.core.pln.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,clojure.string.join.call(null," ",args));
}));

(tiltontec.util.core.pln.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.util.core.pln.cljs$lang$applyTo = (function (seq19066){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19066));
}));

tiltontec.util.core.xpln = (function tiltontec$util$core$xpln(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19071 = arguments.length;
var i__4737__auto___19072 = (0);
while(true){
if((i__4737__auto___19072 < len__4736__auto___19071)){
args__4742__auto__.push((arguments[i__4737__auto___19072]));

var G__19073 = (i__4737__auto___19072 + (1));
i__4737__auto___19072 = G__19073;
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
(tiltontec.util.core.xpln.cljs$lang$applyTo = (function (seq19070){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19070));
}));

tiltontec.util.core.eko = (function tiltontec$util$core$eko(key,value){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"eko!!!","eko!!!",807507425),key,value);

return value;
});
tiltontec.util.core._STAR_plnk_keys_STAR_ = cljs.core.PersistentVector.EMPTY;
tiltontec.util.core.plnk = (function tiltontec$util$core$plnk(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19076 = arguments.length;
var i__4737__auto___19077 = (0);
while(true){
if((i__4737__auto___19077 < len__4736__auto___19076)){
args__4742__auto__.push((arguments[i__4737__auto___19077]));

var G__19078 = (i__4737__auto___19077 + (1));
i__4737__auto___19077 = G__19078;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.util.core.plnk.cljs$core$IFn$_invoke$arity$variadic = (function (k,r){
if(typeof cljs.core.first.call(null,r) === 'string'){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"force","force",781957286));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.util.core._STAR_plnk_keys_STAR_], null));
}
})())){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,r));
} else {
return null;
}
}
}));

(tiltontec.util.core.plnk.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.util.core.plnk.cljs$lang$applyTo = (function (seq19074){
var G__19075 = cljs.core.first.call(null,seq19074);
var seq19074__$1 = cljs.core.next.call(null,seq19074);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19075,seq19074__$1);
}));

tiltontec.util.core.now = (function tiltontec$util$core$now(){
return (new Date()).getTime();
});
tiltontec.util.core.counts = cljs.core.atom.call(null,null);
tiltontec.util.core.counts_reset = (function tiltontec$util$core$counts_reset(){
return cljs.core.reset_BANG_.call(null,tiltontec.util.core.counts,null);
});
/**
 * Count it
 */
tiltontec.util.core.countit = (function tiltontec$util$core$countit(var_args){
var G__19080 = arguments.length;
switch (G__19080) {
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
return tiltontec.util.core.countit.call(null,path,(1));
}));

(tiltontec.util.core.countit.cljs$core$IFn$_invoke$arity$2 = (function (path,n){
if(cljs.core.sequential_QMARK_.call(null,path)){
if(cljs.core.counted_QMARK_.call(null,n)){
return tiltontec.util.core.countit.call(null,path,cljs.core.count.call(null,n));
} else {
return cljs.core.swap_BANG_.call(null,tiltontec.util.core.counts,cljs.core.update_in,path,cljs.core.fnil.call(null,cljs.core._PLUS_,(0)),n);
}
} else {
return tiltontec.util.core.countit.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),n);
}
}));

(tiltontec.util.core.countit.cljs$lang$maxFixedArity = 2);

tiltontec.util.core.counts_reset.call(null);

tiltontec.util.core.countit.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),(7));

tiltontec.util.core.countit.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"a","a",-2123407586),(new cljs.core.List(null,new cljs.core.Keyword(null,"b","b",1482224470),null,(1),null)),(2),null)),(3));

tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(2));

tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));

//# sourceMappingURL=core.js.map
