// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18395){
var map__18396 = p__18395;
var map__18396__$1 = cljs.core.__destructure_map.call(null,map__18396);
var m = map__18396__$1;
var n = cljs.core.get.call(null,map__18396__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18397_18425 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18398_18426 = null;
var count__18399_18427 = (0);
var i__18400_18428 = (0);
while(true){
if((i__18400_18428 < count__18399_18427)){
var f_18429 = cljs.core._nth.call(null,chunk__18398_18426,i__18400_18428);
cljs.core.println.call(null,"  ",f_18429);


var G__18430 = seq__18397_18425;
var G__18431 = chunk__18398_18426;
var G__18432 = count__18399_18427;
var G__18433 = (i__18400_18428 + (1));
seq__18397_18425 = G__18430;
chunk__18398_18426 = G__18431;
count__18399_18427 = G__18432;
i__18400_18428 = G__18433;
continue;
} else {
var temp__5720__auto___18434 = cljs.core.seq.call(null,seq__18397_18425);
if(temp__5720__auto___18434){
var seq__18397_18435__$1 = temp__5720__auto___18434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18397_18435__$1)){
var c__4679__auto___18436 = cljs.core.chunk_first.call(null,seq__18397_18435__$1);
var G__18437 = cljs.core.chunk_rest.call(null,seq__18397_18435__$1);
var G__18438 = c__4679__auto___18436;
var G__18439 = cljs.core.count.call(null,c__4679__auto___18436);
var G__18440 = (0);
seq__18397_18425 = G__18437;
chunk__18398_18426 = G__18438;
count__18399_18427 = G__18439;
i__18400_18428 = G__18440;
continue;
} else {
var f_18441 = cljs.core.first.call(null,seq__18397_18435__$1);
cljs.core.println.call(null,"  ",f_18441);


var G__18442 = cljs.core.next.call(null,seq__18397_18435__$1);
var G__18443 = null;
var G__18444 = (0);
var G__18445 = (0);
seq__18397_18425 = G__18442;
chunk__18398_18426 = G__18443;
count__18399_18427 = G__18444;
i__18400_18428 = G__18445;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18446 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18446);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18446)))?cljs.core.second.call(null,arglists_18446):arglists_18446));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18401_18447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18402_18448 = null;
var count__18403_18449 = (0);
var i__18404_18450 = (0);
while(true){
if((i__18404_18450 < count__18403_18449)){
var vec__18413_18451 = cljs.core._nth.call(null,chunk__18402_18448,i__18404_18450);
var name_18452 = cljs.core.nth.call(null,vec__18413_18451,(0),null);
var map__18416_18453 = cljs.core.nth.call(null,vec__18413_18451,(1),null);
var map__18416_18454__$1 = cljs.core.__destructure_map.call(null,map__18416_18453);
var doc_18455 = cljs.core.get.call(null,map__18416_18454__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18456 = cljs.core.get.call(null,map__18416_18454__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18452);

cljs.core.println.call(null," ",arglists_18456);

if(cljs.core.truth_(doc_18455)){
cljs.core.println.call(null," ",doc_18455);
} else {
}


var G__18457 = seq__18401_18447;
var G__18458 = chunk__18402_18448;
var G__18459 = count__18403_18449;
var G__18460 = (i__18404_18450 + (1));
seq__18401_18447 = G__18457;
chunk__18402_18448 = G__18458;
count__18403_18449 = G__18459;
i__18404_18450 = G__18460;
continue;
} else {
var temp__5720__auto___18461 = cljs.core.seq.call(null,seq__18401_18447);
if(temp__5720__auto___18461){
var seq__18401_18462__$1 = temp__5720__auto___18461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18401_18462__$1)){
var c__4679__auto___18463 = cljs.core.chunk_first.call(null,seq__18401_18462__$1);
var G__18464 = cljs.core.chunk_rest.call(null,seq__18401_18462__$1);
var G__18465 = c__4679__auto___18463;
var G__18466 = cljs.core.count.call(null,c__4679__auto___18463);
var G__18467 = (0);
seq__18401_18447 = G__18464;
chunk__18402_18448 = G__18465;
count__18403_18449 = G__18466;
i__18404_18450 = G__18467;
continue;
} else {
var vec__18417_18468 = cljs.core.first.call(null,seq__18401_18462__$1);
var name_18469 = cljs.core.nth.call(null,vec__18417_18468,(0),null);
var map__18420_18470 = cljs.core.nth.call(null,vec__18417_18468,(1),null);
var map__18420_18471__$1 = cljs.core.__destructure_map.call(null,map__18420_18470);
var doc_18472 = cljs.core.get.call(null,map__18420_18471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18473 = cljs.core.get.call(null,map__18420_18471__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18469);

cljs.core.println.call(null," ",arglists_18473);

if(cljs.core.truth_(doc_18472)){
cljs.core.println.call(null," ",doc_18472);
} else {
}


var G__18474 = cljs.core.next.call(null,seq__18401_18462__$1);
var G__18475 = null;
var G__18476 = (0);
var G__18477 = (0);
seq__18401_18447 = G__18474;
chunk__18402_18448 = G__18475;
count__18403_18449 = G__18476;
i__18404_18450 = G__18477;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__18421 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18422 = null;
var count__18423 = (0);
var i__18424 = (0);
while(true){
if((i__18424 < count__18423)){
var role = cljs.core._nth.call(null,chunk__18422,i__18424);
var temp__5720__auto___18478__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18478__$1)){
var spec_18479 = temp__5720__auto___18478__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18479));
} else {
}


var G__18480 = seq__18421;
var G__18481 = chunk__18422;
var G__18482 = count__18423;
var G__18483 = (i__18424 + (1));
seq__18421 = G__18480;
chunk__18422 = G__18481;
count__18423 = G__18482;
i__18424 = G__18483;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__18421);
if(temp__5720__auto____$1){
var seq__18421__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18421__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18421__$1);
var G__18484 = cljs.core.chunk_rest.call(null,seq__18421__$1);
var G__18485 = c__4679__auto__;
var G__18486 = cljs.core.count.call(null,c__4679__auto__);
var G__18487 = (0);
seq__18421 = G__18484;
chunk__18422 = G__18485;
count__18423 = G__18486;
i__18424 = G__18487;
continue;
} else {
var role = cljs.core.first.call(null,seq__18421__$1);
var temp__5720__auto___18488__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___18488__$2)){
var spec_18489 = temp__5720__auto___18488__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18489));
} else {
}


var G__18490 = cljs.core.next.call(null,seq__18421__$1);
var G__18491 = null;
var G__18492 = (0);
var G__18493 = (0);
seq__18421 = G__18490;
chunk__18422 = G__18491;
count__18423 = G__18492;
i__18424 = G__18493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18494 = cljs.core.conj.call(null,via,t);
var G__18495 = cljs.core.ex_cause.call(null,t);
via = G__18494;
t = G__18495;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18498 = datafied_throwable;
var map__18498__$1 = cljs.core.__destructure_map.call(null,map__18498);
var via = cljs.core.get.call(null,map__18498__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18498__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18498__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18499 = cljs.core.last.call(null,via);
var map__18499__$1 = cljs.core.__destructure_map.call(null,map__18499);
var type = cljs.core.get.call(null,map__18499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18499__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18500 = data;
var map__18500__$1 = cljs.core.__destructure_map.call(null,map__18500);
var problems = cljs.core.get.call(null,map__18500__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18500__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18500__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18501__$1 = cljs.core.__destructure_map.call(null,map__18501);
var top_data = map__18501__$1;
var source = cljs.core.get.call(null,map__18501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18502 = phase;
var G__18502__$1 = (((G__18502 instanceof cljs.core.Keyword))?G__18502.fqn:null);
switch (G__18502__$1) {
case "read-source":
var map__18503 = data;
var map__18503__$1 = cljs.core.__destructure_map.call(null,map__18503);
var line = cljs.core.get.call(null,map__18503__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18503__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18504 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18504__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18504,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18504);
var G__18504__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18504__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18504__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18504__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18505 = top_data;
var G__18505__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18505,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18505);
var G__18505__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18505__$1);
var G__18505__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18505__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18505__$2);
var G__18505__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18505__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18505__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18506 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18506,(0),null);
var method = cljs.core.nth.call(null,vec__18506,(1),null);
var file = cljs.core.nth.call(null,vec__18506,(2),null);
var line = cljs.core.nth.call(null,vec__18506,(3),null);
var G__18509 = top_data;
var G__18509__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18509,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18509);
var G__18509__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18509__$1);
var G__18509__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__18509__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18509__$2);
var G__18509__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18509__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18509__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18509__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18509__$4;
}

break;
case "execution":
var vec__18510 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18510,(0),null);
var method = cljs.core.nth.call(null,vec__18510,(1),null);
var file = cljs.core.nth.call(null,vec__18510,(2),null);
var line = cljs.core.nth.call(null,vec__18510,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18497_SHARP_){
var or__4253__auto__ = (p1__18497_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18497_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__18513 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18513__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18513,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18513);
var G__18513__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18513__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18513__$1);
var G__18513__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18513__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18513__$2);
var G__18513__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18513__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18513__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18513__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18513__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18502__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18517){
var map__18518 = p__18517;
var map__18518__$1 = cljs.core.__destructure_map.call(null,map__18518);
var triage_data = map__18518__$1;
var phase = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18518__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18519 = phase;
var G__18519__$1 = (((G__18519 instanceof cljs.core.Keyword))?G__18519.fqn:null);
switch (G__18519__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18520_18529 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18521_18530 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18522_18531 = true;
var _STAR_print_fn_STAR__temp_val__18523_18532 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18522_18531);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18523_18532);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18515_SHARP_){
return cljs.core.dissoc.call(null,p1__18515_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18521_18530);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18520_18529);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18524_18533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18525_18534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18526_18535 = true;
var _STAR_print_fn_STAR__temp_val__18527_18536 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18526_18535);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18527_18536);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18516_SHARP_){
return cljs.core.dissoc.call(null,p1__18516_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18525_18534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18524_18533);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18519__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
