// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9134 = arguments.length;
var i__7766__auto___9135 = (0);
while(true){
if((i__7766__auto___9135 < len__7765__auto___9134)){
args__7772__auto__.push((arguments[i__7766__auto___9135]));

var G__9136 = (i__7766__auto___9135 + (1));
i__7766__auto___9135 = G__9136;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq9133){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9133));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9138 = arguments.length;
var i__7766__auto___9139 = (0);
while(true){
if((i__7766__auto___9139 < len__7765__auto___9138)){
args__7772__auto__.push((arguments[i__7766__auto___9139]));

var G__9140 = (i__7766__auto___9139 + (1));
i__7766__auto___9139 = G__9140;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_.call(null,rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),false,(0),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq9137){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9137));
});

var ret__7805__auto___9149 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9150 = arguments.length;
var i__7766__auto___9151 = (0);
while(true){
if((i__7766__auto___9151 < len__7765__auto___9150)){
args__7772__auto__.push((arguments[i__7766__auto___9151]));

var G__9152 = (i__7766__auto___9151 + (1));
i__7766__auto___9151 = G__9152;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9145,body){
var vec__9146 = p__9145;
var c = cljs.core.nth.call(null,vec__9146,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7483__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),(function (){var x__7483__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),(function (){var x__7483__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq9141){
var G__9142 = cljs.core.first.call(null,seq9141);
var seq9141__$1 = cljs.core.next.call(null,seq9141);
var G__9143 = cljs.core.first.call(null,seq9141__$1);
var seq9141__$2 = cljs.core.next.call(null,seq9141__$1);
var G__9144 = cljs.core.first.call(null,seq9141__$2);
var seq9141__$3 = cljs.core.next.call(null,seq9141__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__9142,G__9143,G__9144,seq9141__$3);
});

return null;
})()
;
tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;

var ret__7805__auto___9156 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9157 = arguments.length;
var i__7766__auto___9158 = (0);
while(true){
if((i__7766__auto___9158 < len__7765__auto___9157)){
args__7772__auto__.push((arguments[i__7766__auto___9158]));

var G__9159 = (i__7766__auto___9158 + (1));
i__7766__auto___9158 = G__9159;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-c#","slot-c#",1084398166,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq9153){
var G__9154 = cljs.core.first.call(null,seq9153);
var seq9153__$1 = cljs.core.next.call(null,seq9153);
var G__9155 = cljs.core.first.call(null,seq9153__$1);
var seq9153__$2 = cljs.core.next.call(null,seq9153__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__9154,G__9155,seq9153__$2);
});

return null;
})()
;
tiltontec.cell.core.c_fn.cljs$lang$macro = true;

var ret__7805__auto___9163 = (function (){
tiltontec.cell.core.c_QMARK_ = (function tiltontec$cell$core$c_QMARK_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9164 = arguments.length;
var i__7766__auto___9165 = (0);
while(true){
if((i__7766__auto___9165 < len__7765__auto___9164)){
args__7772__auto__.push((arguments[i__7766__auto___9165]));

var G__9166 = (i__7766__auto___9165 + (1));
i__7766__auto___9165 = G__9166;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_.cljs$lang$applyTo = (function (seq9160){
var G__9161 = cljs.core.first.call(null,seq9160);
var seq9160__$1 = cljs.core.next.call(null,seq9160);
var G__9162 = cljs.core.first.call(null,seq9160__$1);
var seq9160__$2 = cljs.core.next.call(null,seq9160__$1);
return tiltontec.cell.core.c_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__9161,G__9162,seq9160__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_.cljs$lang$macro = true;

var ret__7805__auto___9175 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_ = (function tiltontec$cell$core$c_QMARK__PLUS_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9176 = arguments.length;
var i__7766__auto___9177 = (0);
while(true){
if((i__7766__auto___9177 < len__7765__auto___9176)){
args__7772__auto__.push((arguments[i__7766__auto___9177]));

var G__9178 = (i__7766__auto___9177 + (1));
i__7766__auto___9177 = G__9178;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9171,body){
var vec__9172 = p__9171;
var seq__9173 = cljs.core.seq.call(null,vec__9172);
var options = seq__9173;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$applyTo = (function (seq9167){
var G__9168 = cljs.core.first.call(null,seq9167);
var seq9167__$1 = cljs.core.next.call(null,seq9167);
var G__9169 = cljs.core.first.call(null,seq9167__$1);
var seq9167__$2 = cljs.core.next.call(null,seq9167__$1);
var G__9170 = cljs.core.first.call(null,seq9167__$2);
var seq9167__$3 = cljs.core.next.call(null,seq9167__$2);
return tiltontec.cell.core.c_QMARK__PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__9168,G__9169,G__9170,seq9167__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_.cljs$lang$macro = true;

var ret__7805__auto___9182 = (function (){
tiltontec.cell.core.c_QMARK_n = (function tiltontec$cell$core$c_QMARK_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9183 = arguments.length;
var i__7766__auto___9184 = (0);
while(true){
if((i__7766__auto___9184 < len__7765__auto___9183)){
args__7772__auto__.push((arguments[i__7766__auto___9184]));

var G__9185 = (i__7766__auto___9184 + (1));
i__7766__auto___9184 = G__9185;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n.cljs$lang$applyTo = (function (seq9179){
var G__9180 = cljs.core.first.call(null,seq9179);
var seq9179__$1 = cljs.core.next.call(null,seq9179);
var G__9181 = cljs.core.first.call(null,seq9179__$1);
var seq9179__$2 = cljs.core.next.call(null,seq9179__$1);
return tiltontec.cell.core.c_QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__9180,G__9181,seq9179__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n.cljs$lang$macro = true;

var ret__7805__auto___9194 = (function (){
tiltontec.cell.core.c_QMARK__PLUS_n = (function tiltontec$cell$core$c_QMARK__PLUS_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9195 = arguments.length;
var i__7766__auto___9196 = (0);
while(true){
if((i__7766__auto___9196 < len__7765__auto___9195)){
args__7772__auto__.push((arguments[i__7766__auto___9196]));

var G__9197 = (i__7766__auto___9196 + (1));
i__7766__auto___9196 = G__9197;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9190,body){
var vec__9191 = p__9190;
var seq__9192 = cljs.core.seq.call(null,vec__9191);
var options = seq__9192;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$applyTo = (function (seq9186){
var G__9187 = cljs.core.first.call(null,seq9186);
var seq9186__$1 = cljs.core.next.call(null,seq9186);
var G__9188 = cljs.core.first.call(null,seq9186__$1);
var seq9186__$2 = cljs.core.next.call(null,seq9186__$1);
var G__9189 = cljs.core.first.call(null,seq9186__$2);
var seq9186__$3 = cljs.core.next.call(null,seq9186__$2);
return tiltontec.cell.core.c_QMARK__PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__9187,G__9188,G__9189,seq9186__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__PLUS_n.cljs$lang$macro = true;

var ret__7805__auto___9201 = (function (){
tiltontec.cell.core.c__QMARK_n = (function tiltontec$cell$core$c__QMARK_n(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9202 = arguments.length;
var i__7766__auto___9203 = (0);
while(true){
if((i__7766__auto___9203 < len__7765__auto___9202)){
args__7772__auto__.push((arguments[i__7766__auto___9203]));

var G__9204 = (i__7766__auto___9203 + (1));
i__7766__auto___9203 = G__9204;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c__QMARK_n.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_n.cljs$lang$applyTo = (function (seq9198){
var G__9199 = cljs.core.first.call(null,seq9198);
var seq9198__$1 = cljs.core.next.call(null,seq9198);
var G__9200 = cljs.core.first.call(null,seq9198__$1);
var seq9198__$2 = cljs.core.next.call(null,seq9198__$1);
return tiltontec.cell.core.c__QMARK_n.cljs$core$IFn$_invoke$arity$variadic(G__9199,G__9200,seq9198__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_n.cljs$lang$macro = true;

var ret__7805__auto___9208 = (function (){
tiltontec.cell.core.c_QMARK_n_dbg = (function tiltontec$cell$core$c_QMARK_n_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9209 = arguments.length;
var i__7766__auto___9210 = (0);
while(true){
if((i__7766__auto___9210 < len__7765__auto___9209)){
args__7772__auto__.push((arguments[i__7766__auto___9210]));

var G__9211 = (i__7766__auto___9210 + (1));
i__7766__auto___9210 = G__9211;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$applyTo = (function (seq9205){
var G__9206 = cljs.core.first.call(null,seq9205);
var seq9205__$1 = cljs.core.next.call(null,seq9205);
var G__9207 = cljs.core.first.call(null,seq9205__$1);
var seq9205__$2 = cljs.core.next.call(null,seq9205__$1);
return tiltontec.cell.core.c_QMARK_n_dbg.cljs$core$IFn$_invoke$arity$variadic(G__9206,G__9207,seq9205__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_dbg.cljs$lang$macro = true;

var ret__7805__auto___9216 = (function (){
tiltontec.cell.core.c_QMARK_n_until = (function tiltontec$cell$core$c_QMARK_n_until(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9217 = arguments.length;
var i__7766__auto___9218 = (0);
while(true){
if((i__7766__auto___9218 < len__7765__auto___9217)){
args__7772__auto__.push((arguments[i__7766__auto___9218]));

var G__9219 = (i__7766__auto___9218 + (1));
i__7766__auto___9218 = G__9219;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),args)));
});

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK_n_until.cljs$lang$applyTo = (function (seq9212){
var G__9213 = cljs.core.first.call(null,seq9212);
var seq9212__$1 = cljs.core.next.call(null,seq9212);
var G__9214 = cljs.core.first.call(null,seq9212__$1);
var seq9212__$2 = cljs.core.next.call(null,seq9212__$1);
var G__9215 = cljs.core.first.call(null,seq9212__$2);
var seq9212__$3 = cljs.core.next.call(null,seq9212__$2);
return tiltontec.cell.core.c_QMARK_n_until.cljs$core$IFn$_invoke$arity$variadic(G__9213,G__9214,G__9215,seq9212__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_n_until.cljs$lang$macro = true;

var ret__7805__auto___9223 = (function (){
tiltontec.cell.core.c_QMARK_once = (function tiltontec$cell$core$c_QMARK_once(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9224 = arguments.length;
var i__7766__auto___9225 = (0);
while(true){
if((i__7766__auto___9225 < len__7765__auto___9224)){
args__7772__auto__.push((arguments[i__7766__auto___9225]));

var G__9226 = (i__7766__auto___9225 + (1));
i__7766__auto___9225 = G__9226;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_once.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_once.cljs$lang$applyTo = (function (seq9220){
var G__9221 = cljs.core.first.call(null,seq9220);
var seq9220__$1 = cljs.core.next.call(null,seq9220);
var G__9222 = cljs.core.first.call(null,seq9220__$1);
var seq9220__$2 = cljs.core.next.call(null,seq9220__$1);
return tiltontec.cell.core.c_QMARK_once.cljs$core$IFn$_invoke$arity$variadic(G__9221,G__9222,seq9220__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_once.cljs$lang$macro = true;

var ret__7805__auto___9230 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9231 = arguments.length;
var i__7766__auto___9232 = (0);
while(true){
if((i__7766__auto___9232 < len__7765__auto___9231)){
args__7772__auto__.push((arguments[i__7766__auto___9232]));

var G__9233 = (i__7766__auto___9232 + (1));
i__7766__auto___9232 = G__9233;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq9227){
var G__9228 = cljs.core.first.call(null,seq9227);
var seq9227__$1 = cljs.core.next.call(null,seq9227);
var G__9229 = cljs.core.first.call(null,seq9227__$1);
var seq9227__$2 = cljs.core.next.call(null,seq9227__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__9228,G__9229,seq9227__$2);
});

return null;
})()
;
tiltontec.cell.core.c_1.cljs$lang$macro = true;

var ret__7805__auto___9237 = (function (){
tiltontec.cell.core.c_QMARK_1 = (function tiltontec$cell$core$c_QMARK_1(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9238 = arguments.length;
var i__7766__auto___9239 = (0);
while(true){
if((i__7766__auto___9239 < len__7765__auto___9238)){
args__7772__auto__.push((arguments[i__7766__auto___9239]));

var G__9240 = (i__7766__auto___9239 + (1));
i__7766__auto___9239 = G__9240;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c?once","tiltontec.cell.core/c?once",88229667,null)),body)));
});

tiltontec.cell.core.c_QMARK_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_1.cljs$lang$applyTo = (function (seq9234){
var G__9235 = cljs.core.first.call(null,seq9234);
var seq9234__$1 = cljs.core.next.call(null,seq9234);
var G__9236 = cljs.core.first.call(null,seq9234__$1);
var seq9234__$2 = cljs.core.next.call(null,seq9234__$1);
return tiltontec.cell.core.c_QMARK_1.cljs$core$IFn$_invoke$arity$variadic(G__9235,G__9236,seq9234__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_1.cljs$lang$macro = true;

var ret__7805__auto___9244 = (function (){
tiltontec.cell.core.c_QMARK_dbg = (function tiltontec$cell$core$c_QMARK_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9245 = arguments.length;
var i__7766__auto___9246 = (0);
while(true){
if((i__7766__auto___9246 < len__7765__auto___9245)){
args__7772__auto__.push((arguments[i__7766__auto___9246]));

var G__9247 = (i__7766__auto___9246 + (1));
i__7766__auto___9246 = G__9247;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_QMARK_dbg.cljs$lang$applyTo = (function (seq9241){
var G__9242 = cljs.core.first.call(null,seq9241);
var seq9241__$1 = cljs.core.next.call(null,seq9241);
var G__9243 = cljs.core.first.call(null,seq9241__$1);
var seq9241__$2 = cljs.core.next.call(null,seq9241__$1);
return tiltontec.cell.core.c_QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__9242,G__9243,seq9241__$2);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK_dbg.cljs$lang$macro = true;

var ret__7805__auto___9256 = (function (){
tiltontec.cell.core.c_QMARK__ = (function tiltontec$cell$core$c_QMARK__(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9257 = arguments.length;
var i__7766__auto___9258 = (0);
while(true){
if((i__7766__auto___9258 < len__7765__auto___9257)){
args__7772__auto__.push((arguments[i__7766__auto___9258]));

var G__9259 = (i__7766__auto___9258 + (1));
i__7766__auto___9258 = G__9259;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9252,body){
var vec__9253 = p__9252;
var seq__9254 = cljs.core.seq.call(null,vec__9253);
var options = seq__9254;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c_QMARK__.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_QMARK__.cljs$lang$applyTo = (function (seq9248){
var G__9249 = cljs.core.first.call(null,seq9248);
var seq9248__$1 = cljs.core.next.call(null,seq9248);
var G__9250 = cljs.core.first.call(null,seq9248__$1);
var seq9248__$2 = cljs.core.next.call(null,seq9248__$1);
var G__9251 = cljs.core.first.call(null,seq9248__$2);
var seq9248__$3 = cljs.core.next.call(null,seq9248__$2);
return tiltontec.cell.core.c_QMARK__.cljs$core$IFn$_invoke$arity$variadic(G__9249,G__9250,G__9251,seq9248__$3);
});

return null;
})()
;
tiltontec.cell.core.c_QMARK__.cljs$lang$macro = true;

var ret__7805__auto___9268 = (function (){
tiltontec.cell.core.c__QMARK_ = (function tiltontec$cell$core$c__QMARK_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9269 = arguments.length;
var i__7766__auto___9270 = (0);
while(true){
if((i__7766__auto___9270 < len__7765__auto___9269)){
args__7772__auto__.push((arguments[i__7766__auto___9270]));

var G__9271 = (i__7766__auto___9270 + (1));
i__7766__auto___9270 = G__9271;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9264,body){
var vec__9265 = p__9264;
var seq__9266 = cljs.core.seq.call(null,vec__9265);
var options = seq__9266;

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.cell.core.c__QMARK_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c__QMARK_.cljs$lang$applyTo = (function (seq9260){
var G__9261 = cljs.core.first.call(null,seq9260);
var seq9260__$1 = cljs.core.next.call(null,seq9260);
var G__9262 = cljs.core.first.call(null,seq9260__$1);
var seq9260__$2 = cljs.core.next.call(null,seq9260__$1);
var G__9263 = cljs.core.first.call(null,seq9260__$2);
var seq9260__$3 = cljs.core.next.call(null,seq9260__$2);
return tiltontec.cell.core.c__QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__9261,G__9262,G__9263,seq9260__$3);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_.cljs$lang$macro = true;

var ret__7805__auto___9275 = (function (){
tiltontec.cell.core.c__QMARK_dbg = (function tiltontec$cell$core$c__QMARK_dbg(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9276 = arguments.length;
var i__7766__auto___9277 = (0);
while(true){
if((i__7766__auto___9277 < len__7765__auto___9276)){
args__7772__auto__.push((arguments[i__7766__auto___9277]));

var G__9278 = (i__7766__auto___9277 + (1));
i__7766__auto___9277 = G__9278;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c__QMARK_dbg.cljs$lang$applyTo = (function (seq9272){
var G__9273 = cljs.core.first.call(null,seq9272);
var seq9272__$1 = cljs.core.next.call(null,seq9272);
var G__9274 = cljs.core.first.call(null,seq9272__$1);
var seq9272__$2 = cljs.core.next.call(null,seq9272__$1);
return tiltontec.cell.core.c__QMARK_dbg.cljs$core$IFn$_invoke$arity$variadic(G__9273,G__9274,seq9272__$2);
});

return null;
})()
;
tiltontec.cell.core.c__QMARK_dbg.cljs$lang$macro = true;

var ret__7805__auto___9287 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9288 = arguments.length;
var i__7766__auto___9289 = (0);
while(true){
if((i__7766__auto___9289 < len__7765__auto___9288)){
args__7772__auto__.push((arguments[i__7766__auto___9289]));

var G__9290 = (i__7766__auto___9289 + (1));
i__7766__auto___9289 = G__9290;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9283,body){
var vec__9284 = p__9283;
var seq__9285 = cljs.core.seq.call(null,vec__9284);
var kvs = seq__9285;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7483__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq9279){
var G__9280 = cljs.core.first.call(null,seq9279);
var seq9279__$1 = cljs.core.next.call(null,seq9279);
var G__9281 = cljs.core.first.call(null,seq9279__$1);
var seq9279__$2 = cljs.core.next.call(null,seq9279__$1);
var G__9282 = cljs.core.first.call(null,seq9279__$2);
var seq9279__$3 = cljs.core.next.call(null,seq9279__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__9280,G__9281,G__9282,seq9279__$3);
});

return null;
})()
;
tiltontec.cell.core.c_formula.cljs$lang$macro = true;

tiltontec.cell.core.c_in = (function tiltontec$cell$core$c_in(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9293 = arguments.length;
var i__7766__auto___9294 = (0);
while(true){
if((i__7766__auto___9294 < len__7765__auto___9293)){
args__7772__auto__.push((arguments[i__7766__auto___9294]));

var G__9295 = (i__7766__auto___9294 + (1));
i__7766__auto___9294 = G__9295;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((1) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7773__auto__);
});

tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs));
});

tiltontec.cell.core.c_in.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.c_in.cljs$lang$applyTo = (function (seq9291){
var G__9292 = cljs.core.first.call(null,seq9291);
var seq9291__$1 = cljs.core.next.call(null,seq9291);
return tiltontec.cell.core.c_in.cljs$core$IFn$_invoke$arity$variadic(G__9292,seq9291__$1);
});

tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(tiltontec.cell.base._STAR_defer_changes_STAR_){
throw (new Error("c-reset!> change to %s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot.call(null,c)));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot.call(null,c),(function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
}));

}
}
});
var ret__7805__auto___9298 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7483__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__9296__auto__","c__9296__auto__",-1500576555,null)),(function (){var x__7483__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__9297__auto__","new-value__9297__auto__",1440430266,null)),(function (){var x__7483__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__9296__auto__","c__9296__auto__",-1500576555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__9297__auto__","new-value__9297__auto__",1440430266,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});
tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});

//# sourceMappingURL=core.js.map