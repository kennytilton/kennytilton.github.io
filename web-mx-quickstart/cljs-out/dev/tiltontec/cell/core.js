// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.util.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
tiltontec.cell.core._PLUS_valid_input_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106),null,new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"watch","watch",380988277),null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null], null), null);
tiltontec.cell.core._PLUS_valid_formula_options_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248),null,new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106),null,new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007),null,new cljs.core.Keyword(null,"rule","rule",729973257),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,new cljs.core.Keyword(null,"prop","prop",-515168332),null,new cljs.core.Keyword(null,"watch","watch",380988277),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201),null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"and-then","and-then",-1523489059),null,new cljs.core.Keyword(null,"async?","async?",1523057758),null,new cljs.core.Keyword(null,"model","model",331153215),null], null), null);
tiltontec.cell.core.c_options_canonicalize = (function tiltontec$cell$core$c_options_canonicalize(options,allowed){
var G__20137 = options;
var vec__20138 = G__20137;
var seq__20139 = cljs.core.seq.call(null,vec__20138);
var first__20140 = cljs.core.first.call(null,seq__20139);
var seq__20139__$1 = cljs.core.next.call(null,seq__20139);
var k = first__20140;
var first__20140__$1 = cljs.core.first.call(null,seq__20139__$1);
var seq__20139__$2 = cljs.core.next.call(null,seq__20139__$1);
var v = first__20140__$1;
var more = seq__20139__$2;
var res = null;
var G__20137__$1 = G__20137;
var res__$1 = res;
while(true){
var vec__20144 = G__20137__$1;
var seq__20145 = cljs.core.seq.call(null,vec__20144);
var first__20146 = cljs.core.first.call(null,seq__20145);
var seq__20145__$1 = cljs.core.next.call(null,seq__20145);
var k__$1 = first__20146;
var first__20146__$1 = cljs.core.first.call(null,seq__20145__$1);
var seq__20145__$2 = cljs.core.next.call(null,seq__20145__$1);
var v__$1 = first__20146__$1;
var more__$1 = seq__20145__$2;
var res__$2 = res__$1;
if((k__$1 == null)){
return cljs.core.reverse.call(null,res__$2);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k__$1]),allowed))){
} else {
throw (new Error(["Assert failed: ",["Cell option invalid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),". Only allowed are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(allowed)].join(''),"\n","(some #{k} allowed)"].join('')));
}

var G__20147 = more__$1;
var G__20148 = cljs.core.conj.call(null,res__$2,k__$1,v__$1);
G__20137__$1 = G__20147;
res__$1 = G__20148;
continue;

}
break;
}
});
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20150 = arguments.length;
var i__4737__auto___20151 = (0);
while(true){
if((i__4737__auto___20151 < len__4736__auto___20150)){
args__4742__auto__.push((arguments[i__4737__auto___20151]));

var G__20152 = (i__4737__auto___20151 + (1));
i__4737__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,tiltontec.cell.core.c_options_canonicalize.call(null,kvs,tiltontec.cell.core._PLUS_valid_input_options_PLUS_));
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"pulse-watched","pulse-watched",33719362),new cljs.core.Keyword(null,"mx-sid","mx-sid",-508332951),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"synapses","synapses",-614206130),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.util.base.mx_sid_next.call(null),tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,false,null,new cljs.core.Keyword(null,"nascent","nascent",443401807),null,true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
}));

(tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq20149){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20149));
}));

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20154 = arguments.length;
var i__4737__auto___20155 = (0);
while(true){
if((i__4737__auto___20155 < len__4736__auto___20154)){
args__4742__auto__.push((arguments[i__4737__auto___20155]));

var G__20156 = (i__4737__auto___20155 + (1));
i__4737__auto___20155 = G__20156;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,tiltontec.cell.core.c_options_canonicalize.call(null,kvs,tiltontec.cell.core._PLUS_valid_formula_options_PLUS_));
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_.call(null,rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"pulse-watched","pulse-watched",33719362),new cljs.core.Keyword(null,"mx-sid","mx-sid",-508332951),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,null,tiltontec.util.base.mx_sid_next.call(null),tiltontec.cell.base.unbound,false,false,null,new cljs.core.Keyword(null,"nascent","nascent",443401807),null,cljs.core.PersistentHashSet.EMPTY,true,false]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mx-type","mx-type",2136489290),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null));
}));

(tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq20153){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20153));
}));

var ret__4785__auto___20165 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20166 = arguments.length;
var i__4737__auto___20167 = (0);
while(true){
if((i__4737__auto___20167 < len__4736__auto___20166)){
args__4742__auto__.push((arguments[i__4737__auto___20167]));

var G__20168 = (i__4737__auto___20167 + (1));
i__4737__auto___20167 = G__20168;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20161,body){
var vec__20162 = p__20161;
var c = cljs.core.nth.call(null,vec__20162,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"me","me",1501524834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cell","_cell",744429023,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_prop-name","_prop-name",939254867,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-prop","tiltontec.cell.base/c-prop",-1900580162,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq20157){
var G__20158 = cljs.core.first.call(null,seq20157);
var seq20157__$1 = cljs.core.next.call(null,seq20157);
var G__20159 = cljs.core.first.call(null,seq20157__$1);
var seq20157__$2 = cljs.core.next.call(null,seq20157__$1);
var G__20160 = cljs.core.first.call(null,seq20157__$2);
var seq20157__$3 = cljs.core.next.call(null,seq20157__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20158,G__20159,G__20160,seq20157__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var.cljs$lang$macro = true);

var ret__4785__auto___20177 = (function (){
tiltontec.cell.core.c_fn_var_ex = (function tiltontec$cell$core$c_fn_var_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20178 = arguments.length;
var i__4737__auto___20179 = (0);
while(true){
if((i__4737__auto___20179 < len__4736__auto___20178)){
args__4742__auto__.push((arguments[i__4737__auto___20179]));

var G__20180 = (i__4737__auto___20179 + (1));
i__4737__auto___20179 = G__20180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_var_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20173,body){
var vec__20174 = p__20173;
var c = cljs.core.nth.call(null,vec__20174,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"me","me",1501524834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cell","_cell",744429023,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_prop-name","_prop-name",939254867,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-prop","tiltontec.cell.base/c-prop",-1900580162,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.c_fn_var_ex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$applyTo = (function (seq20169){
var G__20170 = cljs.core.first.call(null,seq20169);
var seq20169__$1 = cljs.core.next.call(null,seq20169);
var G__20171 = cljs.core.first.call(null,seq20169__$1);
var seq20169__$2 = cljs.core.next.call(null,seq20169__$1);
var G__20172 = cljs.core.first.call(null,seq20169__$2);
var seq20169__$3 = cljs.core.next.call(null,seq20169__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20170,G__20171,G__20172,seq20169__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_var_ex.cljs$lang$macro = true);

var ret__4785__auto___20184 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20185 = arguments.length;
var i__4737__auto___20186 = (0);
while(true){
if((i__4737__auto___20186 < len__4736__auto___20185)){
args__4742__auto__.push((arguments[i__4737__auto___20186]));

var G__20187 = (i__4737__auto___20186 + (1));
i__4737__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prop-c#","prop-c#",-287880666,null),null,(1),null))))),null,(1),null)),body)));
}));

(tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq20181){
var G__20182 = cljs.core.first.call(null,seq20181);
var seq20181__$1 = cljs.core.next.call(null,seq20181);
var G__20183 = cljs.core.first.call(null,seq20181__$1);
var seq20181__$2 = cljs.core.next.call(null,seq20181__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20182,G__20183,seq20181__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn.cljs$lang$macro = true);

var ret__4785__auto___20191 = (function (){
tiltontec.cell.core.c_fn_ex = (function tiltontec$cell$core$c_fn_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20192 = arguments.length;
var i__4737__auto___20193 = (0);
while(true){
if((i__4737__auto___20193 < len__4736__auto___20192)){
args__4742__auto__.push((arguments[i__4737__auto___20193]));

var G__20194 = (i__4737__auto___20193 + (1));
i__4737__auto___20193 = G__20194;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_fn_ex.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var-ex","tiltontec.cell.core/c-fn-var-ex",1276927215,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prop-c#","prop-c#",-287880666,null),null,(1),null))))),null,(1),null)),body)));
}));

(tiltontec.cell.core.c_fn_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_fn_ex.cljs$lang$applyTo = (function (seq20188){
var G__20189 = cljs.core.first.call(null,seq20188);
var seq20188__$1 = cljs.core.next.call(null,seq20188);
var G__20190 = cljs.core.first.call(null,seq20188__$1);
var seq20188__$2 = cljs.core.next.call(null,seq20188__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20189,G__20190,seq20188__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_fn_ex.cljs$lang$macro = true);

var ret__4785__auto___20198 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20199 = arguments.length;
var i__4737__auto___20200 = (0);
while(true){
if((i__4737__auto___20200 < len__4736__auto___20199)){
args__4742__auto__.push((arguments[i__4737__auto___20200]));

var G__20201 = (i__4737__auto___20200 + (1));
i__4737__auto___20200 = G__20201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.cF.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq20195){
var G__20196 = cljs.core.first.call(null,seq20195);
var seq20195__$1 = cljs.core.next.call(null,seq20195);
var G__20197 = cljs.core.first.call(null,seq20195__$1);
var seq20195__$2 = cljs.core.next.call(null,seq20195__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20196,G__20197,seq20195__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF.cljs$lang$macro = true);

var ret__4785__auto___20210 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20211 = arguments.length;
var i__4737__auto___20212 = (0);
while(true){
if((i__4737__auto___20212 < len__4736__auto___20211)){
args__4742__auto__.push((arguments[i__4737__auto___20212]));

var G__20213 = (i__4737__auto___20212 + (1));
i__4737__auto___20212 = G__20213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20206,body){
var vec__20207 = p__20206;
var seq__20208 = cljs.core.seq.call(null,vec__20207);
var options = seq__20208;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),options,(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq20202){
var G__20203 = cljs.core.first.call(null,seq20202);
var seq20202__$1 = cljs.core.next.call(null,seq20202);
var G__20204 = cljs.core.first.call(null,seq20202__$1);
var seq20202__$2 = cljs.core.next.call(null,seq20202__$1);
var G__20205 = cljs.core.first.call(null,seq20202__$2);
var seq20202__$3 = cljs.core.next.call(null,seq20202__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20203,G__20204,G__20205,seq20202__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true);

var ret__4785__auto___20217 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20218 = arguments.length;
var i__4737__auto___20219 = (0);
while(true){
if((i__4737__auto___20219 < len__4736__auto___20218)){
args__4742__auto__.push((arguments[i__4737__auto___20219]));

var G__20220 = (i__4737__auto___20219 + (1));
i__4737__auto___20219 = G__20220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.cFn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq20214){
var G__20215 = cljs.core.first.call(null,seq20214);
var seq20214__$1 = cljs.core.next.call(null,seq20214);
var G__20216 = cljs.core.first.call(null,seq20214__$1);
var seq20214__$2 = cljs.core.next.call(null,seq20214__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20215,G__20216,seq20214__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn.cljs$lang$macro = true);

var ret__4785__auto___20229 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20230 = arguments.length;
var i__4737__auto___20231 = (0);
while(true){
if((i__4737__auto___20231 < len__4736__auto___20230)){
args__4742__auto__.push((arguments[i__4737__auto___20231]));

var G__20232 = (i__4737__auto___20231 + (1));
i__4737__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20225,body){
var vec__20226 = p__20225;
var seq__20227 = cljs.core.seq.call(null,vec__20226);
var options = seq__20227;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),options,(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq20221){
var G__20222 = cljs.core.first.call(null,seq20221);
var seq20221__$1 = cljs.core.next.call(null,seq20221);
var G__20223 = cljs.core.first.call(null,seq20221__$1);
var seq20221__$2 = cljs.core.next.call(null,seq20221__$1);
var G__20224 = cljs.core.first.call(null,seq20221__$2);
var seq20221__$3 = cljs.core.next.call(null,seq20221__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20222,G__20223,G__20224,seq20221__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true);

var ret__4785__auto___20236 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20237 = arguments.length;
var i__4737__auto___20238 = (0);
while(true){
if((i__4737__auto___20238 < len__4736__auto___20237)){
args__4742__auto__.push((arguments[i__4737__auto___20238]));

var G__20239 = (i__4737__auto___20238 + (1));
i__4737__auto___20238 = G__20239;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.c_Fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq20233){
var G__20234 = cljs.core.first.call(null,seq20233);
var seq20233__$1 = cljs.core.next.call(null,seq20233);
var G__20235 = cljs.core.first.call(null,seq20233__$1);
var seq20233__$2 = cljs.core.next.call(null,seq20233__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20234,G__20235,seq20233__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fn.cljs$lang$macro = true);

var ret__4785__auto___20243 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20244 = arguments.length;
var i__4737__auto___20245 = (0);
while(true){
if((i__4737__auto___20245 < len__4736__auto___20244)){
args__4742__auto__.push((arguments[i__4737__auto___20245]));

var G__20246 = (i__4737__auto___20245 + (1));
i__4737__auto___20245 = G__20246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.cFn_dbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq20240){
var G__20241 = cljs.core.first.call(null,seq20240);
var seq20240__$1 = cljs.core.next.call(null,seq20240);
var G__20242 = cljs.core.first.call(null,seq20240__$1);
var seq20240__$2 = cljs.core.next.call(null,seq20240__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20241,G__20242,seq20240__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true);

var ret__4785__auto___20251 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20252 = arguments.length;
var i__4737__auto___20253 = (0);
while(true){
if((i__4737__auto___20253 < len__4736__auto___20252)){
args__4742__auto__.push((arguments[i__4737__auto___20253]));

var G__20254 = (i__4737__auto___20253 + (1));
i__4737__auto___20253 = G__20254;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)),args)));
}));

(tiltontec.cell.core.cFn_until.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq20247){
var G__20248 = cljs.core.first.call(null,seq20247);
var seq20247__$1 = cljs.core.next.call(null,seq20247);
var G__20249 = cljs.core.first.call(null,seq20247__$1);
var seq20247__$2 = cljs.core.next.call(null,seq20247__$1);
var G__20250 = cljs.core.first.call(null,seq20247__$2);
var seq20247__$3 = cljs.core.next.call(null,seq20247__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20248,G__20249,G__20250,seq20247__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cFn_until.cljs$lang$macro = true);

var ret__4785__auto___20258 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20259 = arguments.length;
var i__4737__auto___20260 = (0);
while(true){
if((i__4737__auto___20260 < len__4736__auto___20259)){
args__4742__auto__.push((arguments[i__4737__auto___20260]));

var G__20261 = (i__4737__auto___20260 + (1));
i__4737__auto___20260 = G__20261;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.cFonce.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq20255){
var G__20256 = cljs.core.first.call(null,seq20255);
var seq20255__$1 = cljs.core.next.call(null,seq20255);
var G__20257 = cljs.core.first.call(null,seq20255__$1);
var seq20255__$2 = cljs.core.next.call(null,seq20255__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20256,G__20257,seq20255__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFonce.cljs$lang$macro = true);

var ret__4785__auto___20265 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20266 = arguments.length;
var i__4737__auto___20267 = (0);
while(true){
if((i__4737__auto___20267 < len__4736__auto___20266)){
args__4742__auto__.push((arguments[i__4737__auto___20267]));

var G__20268 = (i__4737__auto___20267 + (1));
i__4737__auto___20267 = G__20268;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"input?","input?",-1792843173),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq20262){
var G__20263 = cljs.core.first.call(null,seq20262);
var seq20262__$1 = cljs.core.next.call(null,seq20262);
var G__20264 = cljs.core.first.call(null,seq20262__$1);
var seq20262__$2 = cljs.core.next.call(null,seq20262__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20263,G__20264,seq20262__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_1.cljs$lang$macro = true);

var ret__4785__auto___20272 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20273 = arguments.length;
var i__4737__auto___20274 = (0);
while(true){
if((i__4737__auto___20274 < len__4736__auto___20273)){
args__4742__auto__.push((arguments[i__4737__auto___20274]));

var G__20275 = (i__4737__auto___20274 + (1));
i__4737__auto___20274 = G__20275;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","cFonce","tiltontec.cell.core/cFonce",1541505458,null),null,(1),null)),body)));
}));

(tiltontec.cell.core.cF1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq20269){
var G__20270 = cljs.core.first.call(null,seq20269);
var seq20269__$1 = cljs.core.next.call(null,seq20269);
var G__20271 = cljs.core.first.call(null,seq20269__$1);
var seq20269__$2 = cljs.core.next.call(null,seq20269__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20270,G__20271,seq20269__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cF1.cljs$lang$macro = true);

var ret__4785__auto___20279 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20280 = arguments.length;
var i__4737__auto___20281 = (0);
while(true){
if((i__4737__auto___20281 < len__4736__auto___20280)){
args__4742__auto__.push((arguments[i__4737__auto___20281]));

var G__20282 = (i__4737__auto___20281 + (1));
i__4737__auto___20281 = G__20282;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.cFdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq20276){
var G__20277 = cljs.core.first.call(null,seq20276);
var seq20276__$1 = cljs.core.next.call(null,seq20276);
var G__20278 = cljs.core.first.call(null,seq20276__$1);
var seq20276__$2 = cljs.core.next.call(null,seq20276__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20277,G__20278,seq20276__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cFdbg.cljs$lang$macro = true);

var ret__4785__auto___20291 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20292 = arguments.length;
var i__4737__auto___20293 = (0);
while(true){
if((i__4737__auto___20293 < len__4736__auto___20292)){
args__4742__auto__.push((arguments[i__4737__auto___20293]));

var G__20294 = (i__4737__auto___20293 + (1));
i__4737__auto___20293 = G__20294;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20287,body){
var vec__20288 = p__20287;
var seq__20289 = cljs.core.seq.call(null,vec__20288);
var options = seq__20289;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),options,(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq20283){
var G__20284 = cljs.core.first.call(null,seq20283);
var seq20283__$1 = cljs.core.next.call(null,seq20283);
var G__20285 = cljs.core.first.call(null,seq20283__$1);
var seq20283__$2 = cljs.core.next.call(null,seq20283__$1);
var G__20286 = cljs.core.first.call(null,seq20283__$2);
var seq20283__$3 = cljs.core.next.call(null,seq20283__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20284,G__20285,G__20286,seq20283__$3);
}));

return null;
})()
;
(tiltontec.cell.core.cF_.cljs$lang$macro = true);

var ret__4785__auto___20303 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20304 = arguments.length;
var i__4737__auto___20305 = (0);
while(true){
if((i__4737__auto___20305 < len__4736__auto___20304)){
args__4742__auto__.push((arguments[i__4737__auto___20305]));

var G__20306 = (i__4737__auto___20305 + (1));
i__4737__auto___20305 = G__20306;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20299,body){
var vec__20300 = p__20299;
var seq__20301 = cljs.core.seq.call(null,vec__20300);
var options = seq__20301;

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),options,(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq20295){
var G__20296 = cljs.core.first.call(null,seq20295);
var seq20295__$1 = cljs.core.next.call(null,seq20295);
var G__20297 = cljs.core.first.call(null,seq20295__$1);
var seq20295__$2 = cljs.core.next.call(null,seq20295__$1);
var G__20298 = cljs.core.first.call(null,seq20295__$2);
var seq20295__$3 = cljs.core.next.call(null,seq20295__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20296,G__20297,G__20298,seq20295__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_F.cljs$lang$macro = true);

var ret__4785__auto___20310 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20311 = arguments.length;
var i__4737__auto___20312 = (0);
while(true){
if((i__4737__auto___20312 < len__4736__auto___20311)){
args__4742__auto__.push((arguments[i__4737__auto___20312]));

var G__20313 = (i__4737__auto___20312 + (1));
i__4737__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"lazy","lazy",-424547181),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))));
}));

(tiltontec.cell.core.c_Fdbg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq20307){
var G__20308 = cljs.core.first.call(null,seq20307);
var seq20307__$1 = cljs.core.next.call(null,seq20307);
var G__20309 = cljs.core.first.call(null,seq20307__$1);
var seq20307__$2 = cljs.core.next.call(null,seq20307__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20308,G__20309,seq20307__$2);
}));

return null;
})()
;
(tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true);

var ret__4785__auto___20322 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20323 = arguments.length;
var i__4737__auto___20324 = (0);
while(true){
if((i__4737__auto___20324 < len__4736__auto___20323)){
args__4742__auto__.push((arguments[i__4737__auto___20324]));

var G__20325 = (i__4737__auto___20324 + (1));
i__4737__auto___20324 = G__20325;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20318,body){
var vec__20319 = p__20318;
var seq__20320 = cljs.core.seq.call(null,vec__20319);
var kvs = seq__20320;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"rule","rule",729973257),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null),null,(1),null)),body))),null,(1),null)),cljs.core.keys)));
}));

(tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq20314){
var G__20315 = cljs.core.first.call(null,seq20314);
var seq20314__$1 = cljs.core.next.call(null,seq20314);
var G__20316 = cljs.core.first.call(null,seq20314__$1);
var seq20314__$2 = cljs.core.next.call(null,seq20314__$1);
var G__20317 = cljs.core.first.call(null,seq20314__$2);
var seq20314__$3 = cljs.core.next.call(null,seq20314__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20315,G__20316,G__20317,seq20314__$3);
}));

return null;
})()
;
(tiltontec.cell.core.c_formula.cljs$lang$macro = true);

var ret__4785__auto___20333 = (function (){
tiltontec.cell.core.cf_freeze = (function tiltontec$cell$core$cf_freeze(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20334 = arguments.length;
var i__4737__auto___20335 = (0);
while(true){
if((i__4737__auto___20335 < len__4736__auto___20334)){
args__4742__auto__.push((arguments[i__4737__auto___20335]));

var G__20336 = (i__4737__auto___20335 + (1));
i__4737__auto___20335 = G__20336;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cf_freeze.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20329){
var vec__20330 = p__20329;
var value_form = cljs.core.nth.call(null,vec__20330,(0),null);
var value_source = (function (){var or__4126__auto__ = value_form;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_cache","_cache",2082913559,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.util.core","rmap-setf","tiltontec.util.core/rmap-setf",829497923,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cell","_cell",744429023,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"freeze","freeze",2043466309),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,value_source,null,(1),null)))));
}));

(tiltontec.cell.core.cf_freeze.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.cf_freeze.cljs$lang$applyTo = (function (seq20326){
var G__20327 = cljs.core.first.call(null,seq20326);
var seq20326__$1 = cljs.core.next.call(null,seq20326);
var G__20328 = cljs.core.first.call(null,seq20326__$1);
var seq20326__$2 = cljs.core.next.call(null,seq20326__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20327,G__20328,seq20326__$2);
}));

return null;
})()
;
(tiltontec.cell.core.cf_freeze.cljs$lang$macro = true);

var ret__4785__auto___20342 = (function (){
tiltontec.cell.core.with_c_associating = (function tiltontec$cell$core$with_c_associating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20343 = arguments.length;
var i__4737__auto___20344 = (0);
while(true){
if((i__4737__auto___20344 < len__4736__auto___20343)){
args__4742__auto__.push((arguments[i__4737__auto___20344]));

var G__20345 = (i__4737__auto___20344 + (1));
i__4737__auto___20344 = G__20345;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_associating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20337__auto__","curr__20337__auto__",34804719,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"key-values__20338__auto__","key-values__20338__auto__",-2027562544,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20337__auto__","curr__20337__auto__",34804719,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"key-values__20338__auto__","key-values__20338__auto__",-2027562544,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20337__auto__","curr__20337__auto__",34804719,null),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.with_c_associating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_associating.cljs$lang$applyTo = (function (seq20339){
var G__20340 = cljs.core.first.call(null,seq20339);
var seq20339__$1 = cljs.core.next.call(null,seq20339);
var G__20341 = cljs.core.first.call(null,seq20339__$1);
var seq20339__$2 = cljs.core.next.call(null,seq20339__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20340,G__20341,seq20339__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_associating.cljs$lang$macro = true);

var ret__4785__auto___20352 = (function (){
tiltontec.cell.core.with_c_accumulating = (function tiltontec$cell$core$with_c_accumulating(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20353 = arguments.length;
var i__4737__auto___20354 = (0);
while(true){
if((i__4737__auto___20354 < len__4736__auto___20353)){
args__4742__auto__.push((arguments[i__4737__auto___20354]));

var G__20355 = (i__4737__auto___20354 + (1));
i__4737__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_accumulating.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20346__auto__","curr__20346__auto__",1760707908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new-op__20347__auto__","new-op__20347__auto__",848257070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-value__20348__auto__","new-value__20348__auto__",976750689,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new-op__20347__auto__","new-op__20347__auto__",848257070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20346__auto__","curr__20346__auto__",1760707908,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-value__20348__auto__","new-value__20348__auto__",976750689,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20346__auto__","curr__20346__auto__",1760707908,null),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.with_c_accumulating.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_accumulating.cljs$lang$applyTo = (function (seq20349){
var G__20350 = cljs.core.first.call(null,seq20349);
var seq20349__$1 = cljs.core.next.call(null,seq20349);
var G__20351 = cljs.core.first.call(null,seq20349__$1);
var seq20349__$2 = cljs.core.next.call(null,seq20349__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20350,G__20351,seq20349__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_accumulating.cljs$lang$macro = true);

var ret__4785__auto___20362 = (function (){
tiltontec.cell.core.with_c_conj = (function tiltontec$cell$core$with_c_conj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20363 = arguments.length;
var i__4737__auto___20364 = (0);
while(true){
if((i__4737__auto___20364 < len__4736__auto___20363)){
args__4742__auto__.push((arguments[i__4737__auto___20364]));

var G__20365 = (i__4737__auto___20364 + (1));
i__4737__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_conj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,initial_value,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20356__auto__","curr__20356__auto__",1357617644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,initial_value,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new-elt__20357__auto__","new-elt__20357__auto__",867775449,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20356__auto__","curr__20356__auto__",1357617644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-elt__20357__auto__","new-elt__20357__auto__",867775449,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20356__auto__","curr__20356__auto__",1357617644,null),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.with_c_conj.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tiltontec.cell.core.with_c_conj.cljs$lang$applyTo = (function (seq20358){
var G__20359 = cljs.core.first.call(null,seq20358);
var seq20358__$1 = cljs.core.next.call(null,seq20358);
var G__20360 = cljs.core.first.call(null,seq20358__$1);
var seq20358__$2 = cljs.core.next.call(null,seq20358__$1);
var G__20361 = cljs.core.first.call(null,seq20358__$2);
var seq20358__$3 = cljs.core.next.call(null,seq20358__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20359,G__20360,G__20361,seq20358__$3);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_conj.cljs$lang$macro = true);

var ret__4785__auto___20370 = (function (){
tiltontec.cell.core.with_c_latest = (function tiltontec$cell$core$with_c_latest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20371 = arguments.length;
var i__4737__auto___20372 = (0);
while(true){
if((i__4737__auto___20372 < len__4736__auto___20371)){
args__4742__auto__.push((arguments[i__4737__auto___20372]));

var G__20373 = (i__4737__auto___20372 + (1));
i__4737__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_c_latest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20366__auto__","curr__20366__auto__",-1059833348,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"_cache","_cache",2082913559,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"curr__20366__auto__","curr__20366__auto__",-1059833348,null),null,(1),null))))),null,(1),null)))));
}));

(tiltontec.cell.core.with_c_latest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_c_latest.cljs$lang$applyTo = (function (seq20367){
var G__20368 = cljs.core.first.call(null,seq20367);
var seq20367__$1 = cljs.core.next.call(null,seq20367);
var G__20369 = cljs.core.first.call(null,seq20367__$1);
var seq20367__$2 = cljs.core.next.call(null,seq20367__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20368,G__20369,seq20367__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_c_latest.cljs$lang$macro = true);

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20376 = arguments.length;
var i__4737__auto___20377 = (0);
while(true){
if((i__4737__auto___20377 < len__4736__auto___20376)){
args__4742__auto__.push((arguments[i__4737__auto___20377]));

var G__20378 = (i__4737__auto___20377 + (1));
i__4737__auto___20377 = G__20378;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs);
}));

(tiltontec.cell.core.cI.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq20374){
var G__20375 = cljs.core.first.call(null,seq20374);
var seq20374__$1 = cljs.core.next.call(null,seq20374);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20375,seq20374__$1);
}));

tiltontec.cell.core.cset_BANG_ = (function tiltontec$cell$core$cset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(cljs.core.not.call(null,tiltontec.cell.base.c_async_QMARK_.call(null,c))){
} else {
throw (new Error(["Assert failed: ",["attempt to cset! cfuture ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c))].join(''),"\n","(not (c-async? c))"].join('')));
}

if(cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c))){
var me = tiltontec.cell.base.c_model.call(null,c);
return tiltontec.util.core.err.call(null,cljs.core.str,"MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL> invalid mswap!/mset!/md-reset! to the property '",tiltontec.cell.base.c_prop_name.call(null,c),"', which is not mediated by an input cell.\n","..> if such post-make mutation is in fact required, wrap the initial argument to model.core/make in 'cI', 'cFn', or 'cF+n'. eg: (make... :answer (cFn <computation>)).\n","..> look for MXAPI_ILLEGAL_MUTATE_NONINPUT_CELL in the Matrix Errors documentation for  more details.\n","..> FYI: intended new value is [",new_value,"].\n","..> FYI: the non-input cell is ",cljs.core.deref.call(null,c),"\n","..> FYI: instance is of type ",tiltontec.util.base.mx_type.call(null,me),".\n","..> FYI: full instance is ",cljs.core.deref.call(null,me),"\n","..> FYI: instance meta is ",cljs.core.meta.call(null,me),"\n.");
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_defer_changes_STAR_)){
var prop = tiltontec.cell.base.c_prop_name.call(null,c);
var me = tiltontec.cell.base.c_model.call(null,c);
return tiltontec.util.core.err.call(null,"MXAPI_UNDEFERRED_CHANGE> undeferred mswap!/mset!/md-reset! to the property '",prop,"' by an watch detected.","...> such mutations must be wrapped by WITH-INTEGRITY, must conveniently with macro WITH-CC.","...> look for MXAPI_UNDEFERRED_CHANGE in the Errors documentation for  more details.\n","...> FYI: intended new value is [",new_value,"]; current value is [",cljs.core.get.call(null,cljs.core.deref.call(null,me),prop,new cljs.core.Keyword(null,"no-such-prop","no-such-prop",1565651015)),"].\n","...> FYI: instance is of type ",tiltontec.util.base.mx_type.call(null,me),".\n","...> FYI: full instance is ",cljs.core.deref.call(null,me),"\n","...> FYI: instance meta is ",cljs.core.meta.call(null,me),"\n.");
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_prop.call(null,c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
}));

}
}
}
});
tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){
return tiltontec.cell.core.cset_BANG_.call(null,c,new_value);
});
tiltontec.cell.core.c_swap_BANG_ = (function tiltontec$cell$core$c_swap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20382 = arguments.length;
var i__4737__auto___20383 = (0);
while(true){
if((i__4737__auto___20383 < len__4736__auto___20382)){
args__4742__auto__.push((arguments[i__4737__auto___20383]));

var G__20384 = (i__4737__auto___20383 + (1));
i__4737__auto___20383 = G__20384;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.c_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG_.call(null,c,cljs.core.apply.call(null,swap_fn,tiltontec.cell.evaluate.cget.call(null,c),swap_fn_args));
}));

(tiltontec.cell.core.c_swap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.c_swap_BANG_.cljs$lang$applyTo = (function (seq20379){
var G__20380 = cljs.core.first.call(null,seq20379);
var seq20379__$1 = cljs.core.next.call(null,seq20379);
var G__20381 = cljs.core.first.call(null,seq20379__$1);
var seq20379__$2 = cljs.core.next.call(null,seq20379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20380,G__20381,seq20379__$2);
}));

var ret__4785__auto___20387 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","*within-integrity*","tiltontec.cell.base/*within-integrity*",1558744567,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"c-reset-next! deferred change to %s not under WITH-INTEGRITY supervision.",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.base","c-prop","tiltontec.cell.base/c-prop",-1900580162,null),null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"change","change",-1163046502),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"opcode","opcode",311089360,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20385__auto__","c__20385__auto__",-516987749,null),null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-value__20386__auto__","new-value__20386__auto__",-912689797,null),null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20385__auto__","c__20385__auto__",-516987749,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-value__20386__auto__","new-value__20386__auto__",-912689797,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
});
(tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true);

var ret__4785__auto___20388 = /**
 * Completely untested!!!!!!!!!!!!!!!
 */
tiltontec.cell.core.cset_next_BANG_ = (function tiltontec$cell$core$cset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","c-reset-next!","tiltontec.cell.core/c-reset-next!",-485446424,null),null,(1),null)),(new cljs.core.List(null,f_c,null,(1),null)),(new cljs.core.List(null,f_new_value,null,(1),null)))));
});
(tiltontec.cell.core.cset_next_BANG_.cljs$lang$macro = true);

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});
tiltontec.cell.core.call_with_mx = (function tiltontec$cell$core$call_with_mx(fn){
var _STAR_pulse_STAR__orig_val__20389 = tiltontec.cell.base._STAR_pulse_STAR_;
var _STAR_within_integrity_STAR__orig_val__20390 = tiltontec.cell.base._STAR_within_integrity_STAR_;
var _STAR_unfinished_business_STAR__orig_val__20391 = tiltontec.cell.base._STAR_unfinished_business_STAR_;
var _STAR_causation_STAR__orig_val__20392 = tiltontec.cell.base._STAR_causation_STAR_;
var _STAR_call_stack_STAR__orig_val__20393 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR__orig_val__20394 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR__orig_val__20395 = tiltontec.cell.base._STAR_defer_changes_STAR_;
var _STAR_quiesce_STAR__orig_val__20396 = tiltontec.cell.base._STAR_quiesce_STAR_;
var _STAR_custom_propagator_STAR__orig_val__20397 = tiltontec.cell.base._STAR_custom_propagator_STAR_;
var _STAR_c_prop_depth_STAR__orig_val__20398 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_one_pulse_QMARK__STAR__orig_val__20399 = tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_;
var _STAR_dp_log_STAR__orig_val__20400 = tiltontec.cell.base._STAR_dp_log_STAR_;
var _STAR_pulse_STAR__temp_val__20401 = tiltontec.cell.base.pulse_initial.call(null);
var _STAR_within_integrity_STAR__temp_val__20402 = false;
var _STAR_unfinished_business_STAR__temp_val__20403 = tiltontec.cell.base.unfin_biz_build.call(null);
var _STAR_causation_STAR__temp_val__20404 = cljs.core.List.EMPTY;
var _STAR_call_stack_STAR__temp_val__20405 = null;
var _STAR_depender_STAR__temp_val__20406 = null;
var _STAR_defer_changes_STAR__temp_val__20407 = false;
var _STAR_quiesce_STAR__temp_val__20408 = false;
var _STAR_custom_propagator_STAR__temp_val__20409 = null;
var _STAR_c_prop_depth_STAR__temp_val__20410 = (0);
var _STAR_one_pulse_QMARK__STAR__temp_val__20411 = false;
var _STAR_dp_log_STAR__temp_val__20412 = false;
(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__temp_val__20401);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__temp_val__20402);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__temp_val__20403);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__temp_val__20404);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__temp_val__20405);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__20406);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__temp_val__20407);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__temp_val__20408);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__temp_val__20409);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__temp_val__20410);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__temp_val__20411);

(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__temp_val__20412);

try{return fn.call(null);
}finally {(tiltontec.cell.base._STAR_dp_log_STAR_ = _STAR_dp_log_STAR__orig_val__20400);

(tiltontec.cell.base._STAR_one_pulse_QMARK__STAR_ = _STAR_one_pulse_QMARK__STAR__orig_val__20399);

(tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR__orig_val__20398);

(tiltontec.cell.base._STAR_custom_propagator_STAR_ = _STAR_custom_propagator_STAR__orig_val__20397);

(tiltontec.cell.base._STAR_quiesce_STAR_ = _STAR_quiesce_STAR__orig_val__20396);

(tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR__orig_val__20395);

(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__20394);

(tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR__orig_val__20393);

(tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR__orig_val__20392);

(tiltontec.cell.base._STAR_unfinished_business_STAR_ = _STAR_unfinished_business_STAR__orig_val__20391);

(tiltontec.cell.base._STAR_within_integrity_STAR_ = _STAR_within_integrity_STAR__orig_val__20390);

(tiltontec.cell.base._STAR_pulse_STAR_ = _STAR_pulse_STAR__orig_val__20389);
}});
var ret__4785__auto___20416 = (function (){
tiltontec.cell.core.with_mx = (function tiltontec$cell$core$with_mx(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20417 = arguments.length;
var i__4737__auto___20418 = (0);
while(true){
if((i__4737__auto___20418 < len__4736__auto___20417)){
args__4742__auto__.push((arguments[i__4737__auto___20418]));

var G__20419 = (i__4737__auto___20418 + (1));
i__4737__auto___20418 = G__20419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.with_mx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tiltontec.cell.core.with_mx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tiltontec.cell.core","call-with-mx","tiltontec.cell.core/call-with-mx",1212627376,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(tiltontec.cell.core.with_mx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tiltontec.cell.core.with_mx.cljs$lang$applyTo = (function (seq20413){
var G__20414 = cljs.core.first.call(null,seq20413);
var seq20413__$1 = cljs.core.next.call(null,seq20413);
var G__20415 = cljs.core.first.call(null,seq20413__$1);
var seq20413__$2 = cljs.core.next.call(null,seq20413__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20414,G__20415,seq20413__$2);
}));

return null;
})()
;
(tiltontec.cell.core.with_mx.cljs$lang$macro = true);

/**
 * How far we are in edges from the starting node.
 */
tiltontec.cell.core._STAR_dag_depth_STAR_ = (0);
/**
 * How many edges to follow from users/callers.
 */
tiltontec.cell.core._STAR_dag_prn_len_STAR_ = (5);
/**
 * Which DAG nodes have been dumped so far.
 */
tiltontec.cell.core._PLUS_dag_visited_PLUS_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
tiltontec.cell.core.dag_prn = (function tiltontec$cell$core$dag_prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20421 = arguments.length;
var i__4737__auto___20422 = (0);
while(true){
if((i__4737__auto___20422 < len__4736__auto___20421)){
args__4742__auto__.push((arguments[i__4737__auto___20422]));

var G__20423 = (i__4737__auto___20422 + (1));
i__4737__auto___20422 = G__20423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tiltontec.cell.core.dag_prn.cljs$core$IFn$_invoke$arity$variadic = (function (os){
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.cell.core._STAR_dag_depth_STAR_,".|"));
return cljs.core.apply.call(null,cljs.core.println,path,os);
}));

(tiltontec.cell.core.dag_prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tiltontec.cell.core.dag_prn.cljs$lang$applyTo = (function (seq20420){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20420));
}));

tiltontec.cell.core._STAR_dag_node_only_printer_STAR_ = (function tiltontec$cell$core$_STAR_dag_node_only_printer_STAR_(tag,c){
return tiltontec.cell.core.dag_prn.call(null,tag,new cljs.core.Keyword(null,"PM!","PM!",74541597),tiltontec.cell.base.c_prop_name.call(null,c),new cljs.core.Keyword(null,"of","of",-2075414212),tiltontec.cell.base.c_md_name.call(null,c));
});
tiltontec.cell.core.dag_dump_callers = (function tiltontec$cell$core$dag_dump_callers(c){
var ccs = cljs.core.take.call(null,(function (){var or__4126__auto__ = tiltontec.cell.core._STAR_dag_prn_len_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (999);
}
})(),tiltontec.cell.base.c_callers.call(null,c));
if(cljs.core.seq.call(null,ccs)){
var _STAR_dag_depth_STAR__orig_val__20424 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__20425 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__20425);

try{var seq__20426 = cljs.core.seq.call(null,ccs);
var chunk__20427 = null;
var count__20428 = (0);
var i__20429 = (0);
while(true){
if((i__20429 < count__20428)){
var cc = cljs.core._nth.call(null,chunk__20427,i__20429);
tiltontec.cell.core.dag_dump_1.call(null,new cljs.core.Keyword(null,"used-by","used-by",1820147100),cc);


var G__20430 = seq__20426;
var G__20431 = chunk__20427;
var G__20432 = count__20428;
var G__20433 = (i__20429 + (1));
seq__20426 = G__20430;
chunk__20427 = G__20431;
count__20428 = G__20432;
i__20429 = G__20433;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20426);
if(temp__5804__auto__){
var seq__20426__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20426__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20426__$1);
var G__20434 = cljs.core.chunk_rest.call(null,seq__20426__$1);
var G__20435 = c__4556__auto__;
var G__20436 = cljs.core.count.call(null,c__4556__auto__);
var G__20437 = (0);
seq__20426 = G__20434;
chunk__20427 = G__20435;
count__20428 = G__20436;
i__20429 = G__20437;
continue;
} else {
var cc = cljs.core.first.call(null,seq__20426__$1);
tiltontec.cell.core.dag_dump_1.call(null,new cljs.core.Keyword(null,"used-by","used-by",1820147100),cc);


var G__20438 = cljs.core.next.call(null,seq__20426__$1);
var G__20439 = null;
var G__20440 = (0);
var G__20441 = (0);
seq__20426 = G__20438;
chunk__20427 = G__20439;
count__20428 = G__20440;
i__20429 = G__20441;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__20424);
}} else {
return null;
}
});
tiltontec.cell.core._STAR_dag_callers_printer_STAR_ = tiltontec.cell.core.dag_dump_callers;
tiltontec.cell.core.dag_dump_useds = (function tiltontec$cell$core$dag_dump_useds(c){
var ccs = cljs.core.take.call(null,(function (){var or__4126__auto__ = tiltontec.cell.core._STAR_dag_prn_len_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (999);
}
})(),tiltontec.cell.base.c_useds.call(null,c));
if(cljs.core.seq.call(null,ccs)){
var _STAR_dag_depth_STAR__orig_val__20442 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__20443 = (tiltontec.cell.core._STAR_dag_depth_STAR_ + (1));
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__20443);

try{var seq__20444 = cljs.core.seq.call(null,ccs);
var chunk__20445 = null;
var count__20446 = (0);
var i__20447 = (0);
while(true){
if((i__20447 < count__20446)){
var cc = cljs.core._nth.call(null,chunk__20445,i__20447);
tiltontec.cell.core.dag_dump_1.call(null,new cljs.core.Keyword(null,"using","using",1948623036),cc);


var G__20448 = seq__20444;
var G__20449 = chunk__20445;
var G__20450 = count__20446;
var G__20451 = (i__20447 + (1));
seq__20444 = G__20448;
chunk__20445 = G__20449;
count__20446 = G__20450;
i__20447 = G__20451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20444);
if(temp__5804__auto__){
var seq__20444__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20444__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20444__$1);
var G__20452 = cljs.core.chunk_rest.call(null,seq__20444__$1);
var G__20453 = c__4556__auto__;
var G__20454 = cljs.core.count.call(null,c__4556__auto__);
var G__20455 = (0);
seq__20444 = G__20452;
chunk__20445 = G__20453;
count__20446 = G__20454;
i__20447 = G__20455;
continue;
} else {
var cc = cljs.core.first.call(null,seq__20444__$1);
tiltontec.cell.core.dag_dump_1.call(null,new cljs.core.Keyword(null,"using","using",1948623036),cc);


var G__20456 = cljs.core.next.call(null,seq__20444__$1);
var G__20457 = null;
var G__20458 = (0);
var G__20459 = (0);
seq__20444 = G__20456;
chunk__20445 = G__20457;
count__20446 = G__20458;
i__20447 = G__20459;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__20442);
}} else {
return null;
}
});
tiltontec.cell.core._STAR_dag_useds_printer_STAR_ = tiltontec.cell.core.dag_dump_useds;
tiltontec.cell.core.dag_dump_1 = (function tiltontec$cell$core$dag_dump_1(tag,c){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,tiltontec.cell.core._PLUS_dag_visited_PLUS_),c)){
return tiltontec.cell.core.dag_prn.call(null,clojure.string.upper_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_prop_name.call(null,c)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name.call(null,c))].join('')));
} else {
cljs.core.swap_BANG_.call(null,tiltontec.cell.core._PLUS_dag_visited_PLUS_,cljs.core.conj,c);

var temp__5804__auto___20460 = tiltontec.cell.core._STAR_dag_node_only_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___20460)){
var p_20461 = temp__5804__auto___20460;
p_20461.call(null,tag,c);
} else {
}

var temp__5804__auto___20462 = tiltontec.cell.core._STAR_dag_callers_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto___20462)){
var p_20463 = temp__5804__auto___20462;
p_20463.call(null,c);
} else {
}

var temp__5804__auto__ = tiltontec.cell.core._STAR_dag_useds_printer_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return p.call(null,c);
} else {
return null;
}

}
});
tiltontec.cell.core.dag_dump = (function tiltontec$cell$core$dag_dump(tag,c){
cljs.core.reset_BANG_.call(null,tiltontec.cell.core._PLUS_dag_visited_PLUS_,cljs.core.PersistentHashSet.EMPTY);

var _STAR_dag_depth_STAR__orig_val__20464 = tiltontec.cell.core._STAR_dag_depth_STAR_;
var _STAR_dag_depth_STAR__temp_val__20465 = (0);
(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__temp_val__20465);

try{return tiltontec.cell.core.dag_dump_1.call(null,tag,c);
}finally {(tiltontec.cell.core._STAR_dag_depth_STAR_ = _STAR_dag_depth_STAR__orig_val__20464);
}});

//# sourceMappingURL=core.js.map
