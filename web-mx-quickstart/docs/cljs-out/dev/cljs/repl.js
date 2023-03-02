// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31291){
var map__31292 = p__31291;
var map__31292__$1 = (((((!((map__31292 == null))))?(((((map__31292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31292):map__31292);
var m = map__31292__$1;
var n = cljs.core.get.call(null,map__31292__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__31294_31326 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31295_31327 = null;
var count__31296_31328 = (0);
var i__31297_31329 = (0);
while(true){
if((i__31297_31329 < count__31296_31328)){
var f_31330 = cljs.core._nth.call(null,chunk__31295_31327,i__31297_31329);
cljs.core.println.call(null,"  ",f_31330);


var G__31331 = seq__31294_31326;
var G__31332 = chunk__31295_31327;
var G__31333 = count__31296_31328;
var G__31334 = (i__31297_31329 + (1));
seq__31294_31326 = G__31331;
chunk__31295_31327 = G__31332;
count__31296_31328 = G__31333;
i__31297_31329 = G__31334;
continue;
} else {
var temp__5804__auto___31335 = cljs.core.seq.call(null,seq__31294_31326);
if(temp__5804__auto___31335){
var seq__31294_31336__$1 = temp__5804__auto___31335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31294_31336__$1)){
var c__4556__auto___31337 = cljs.core.chunk_first.call(null,seq__31294_31336__$1);
var G__31338 = cljs.core.chunk_rest.call(null,seq__31294_31336__$1);
var G__31339 = c__4556__auto___31337;
var G__31340 = cljs.core.count.call(null,c__4556__auto___31337);
var G__31341 = (0);
seq__31294_31326 = G__31338;
chunk__31295_31327 = G__31339;
count__31296_31328 = G__31340;
i__31297_31329 = G__31341;
continue;
} else {
var f_31342 = cljs.core.first.call(null,seq__31294_31336__$1);
cljs.core.println.call(null,"  ",f_31342);


var G__31343 = cljs.core.next.call(null,seq__31294_31336__$1);
var G__31344 = null;
var G__31345 = (0);
var G__31346 = (0);
seq__31294_31326 = G__31343;
chunk__31295_31327 = G__31344;
count__31296_31328 = G__31345;
i__31297_31329 = G__31346;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31347 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31347);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31347)))?cljs.core.second.call(null,arglists_31347):arglists_31347));
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
var seq__31298_31348 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31299_31349 = null;
var count__31300_31350 = (0);
var i__31301_31351 = (0);
while(true){
if((i__31301_31351 < count__31300_31350)){
var vec__31312_31352 = cljs.core._nth.call(null,chunk__31299_31349,i__31301_31351);
var name_31353 = cljs.core.nth.call(null,vec__31312_31352,(0),null);
var map__31315_31354 = cljs.core.nth.call(null,vec__31312_31352,(1),null);
var map__31315_31355__$1 = (((((!((map__31315_31354 == null))))?(((((map__31315_31354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31315_31354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31315_31354):map__31315_31354);
var doc_31356 = cljs.core.get.call(null,map__31315_31355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31357 = cljs.core.get.call(null,map__31315_31355__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31353);

cljs.core.println.call(null," ",arglists_31357);

if(cljs.core.truth_(doc_31356)){
cljs.core.println.call(null," ",doc_31356);
} else {
}


var G__31358 = seq__31298_31348;
var G__31359 = chunk__31299_31349;
var G__31360 = count__31300_31350;
var G__31361 = (i__31301_31351 + (1));
seq__31298_31348 = G__31358;
chunk__31299_31349 = G__31359;
count__31300_31350 = G__31360;
i__31301_31351 = G__31361;
continue;
} else {
var temp__5804__auto___31362 = cljs.core.seq.call(null,seq__31298_31348);
if(temp__5804__auto___31362){
var seq__31298_31363__$1 = temp__5804__auto___31362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31298_31363__$1)){
var c__4556__auto___31364 = cljs.core.chunk_first.call(null,seq__31298_31363__$1);
var G__31365 = cljs.core.chunk_rest.call(null,seq__31298_31363__$1);
var G__31366 = c__4556__auto___31364;
var G__31367 = cljs.core.count.call(null,c__4556__auto___31364);
var G__31368 = (0);
seq__31298_31348 = G__31365;
chunk__31299_31349 = G__31366;
count__31300_31350 = G__31367;
i__31301_31351 = G__31368;
continue;
} else {
var vec__31317_31369 = cljs.core.first.call(null,seq__31298_31363__$1);
var name_31370 = cljs.core.nth.call(null,vec__31317_31369,(0),null);
var map__31320_31371 = cljs.core.nth.call(null,vec__31317_31369,(1),null);
var map__31320_31372__$1 = (((((!((map__31320_31371 == null))))?(((((map__31320_31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31320_31371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31320_31371):map__31320_31371);
var doc_31373 = cljs.core.get.call(null,map__31320_31372__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31374 = cljs.core.get.call(null,map__31320_31372__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31370);

cljs.core.println.call(null," ",arglists_31374);

if(cljs.core.truth_(doc_31373)){
cljs.core.println.call(null," ",doc_31373);
} else {
}


var G__31375 = cljs.core.next.call(null,seq__31298_31363__$1);
var G__31376 = null;
var G__31377 = (0);
var G__31378 = (0);
seq__31298_31348 = G__31375;
chunk__31299_31349 = G__31376;
count__31300_31350 = G__31377;
i__31301_31351 = G__31378;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__31322 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31323 = null;
var count__31324 = (0);
var i__31325 = (0);
while(true){
if((i__31325 < count__31324)){
var role = cljs.core._nth.call(null,chunk__31323,i__31325);
var temp__5804__auto___31379__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31379__$1)){
var spec_31380 = temp__5804__auto___31379__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31380));
} else {
}


var G__31381 = seq__31322;
var G__31382 = chunk__31323;
var G__31383 = count__31324;
var G__31384 = (i__31325 + (1));
seq__31322 = G__31381;
chunk__31323 = G__31382;
count__31324 = G__31383;
i__31325 = G__31384;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__31322);
if(temp__5804__auto____$1){
var seq__31322__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31322__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31322__$1);
var G__31385 = cljs.core.chunk_rest.call(null,seq__31322__$1);
var G__31386 = c__4556__auto__;
var G__31387 = cljs.core.count.call(null,c__4556__auto__);
var G__31388 = (0);
seq__31322 = G__31385;
chunk__31323 = G__31386;
count__31324 = G__31387;
i__31325 = G__31388;
continue;
} else {
var role = cljs.core.first.call(null,seq__31322__$1);
var temp__5804__auto___31389__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31389__$2)){
var spec_31390 = temp__5804__auto___31389__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31390));
} else {
}


var G__31391 = cljs.core.next.call(null,seq__31322__$1);
var G__31392 = null;
var G__31393 = (0);
var G__31394 = (0);
seq__31322 = G__31391;
chunk__31323 = G__31392;
count__31324 = G__31393;
i__31325 = G__31394;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
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
var G__31395 = cljs.core.conj.call(null,via,t);
var G__31396 = cljs.core.ex_cause.call(null,t);
via = G__31395;
t = G__31396;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
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
var map__31399 = datafied_throwable;
var map__31399__$1 = (((((!((map__31399 == null))))?(((((map__31399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31399):map__31399);
var via = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31399__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31400 = cljs.core.last.call(null,via);
var map__31400__$1 = (((((!((map__31400 == null))))?(((((map__31400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31400):map__31400);
var type = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31400__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31401 = data;
var map__31401__$1 = (((((!((map__31401 == null))))?(((((map__31401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);
var problems = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31402 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31402__$1 = (((((!((map__31402 == null))))?(((((map__31402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31402):map__31402);
var top_data = map__31402__$1;
var source = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31407 = phase;
var G__31407__$1 = (((G__31407 instanceof cljs.core.Keyword))?G__31407.fqn:null);
switch (G__31407__$1) {
case "read-source":
var map__31408 = data;
var map__31408__$1 = (((((!((map__31408 == null))))?(((((map__31408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408):map__31408);
var line = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31410 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31410__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31410,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31410);
var G__31410__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31410__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31410__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31410__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31411 = top_data;
var G__31411__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31411,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31411);
var G__31411__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31411__$1);
var G__31411__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31411__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31411__$2);
var G__31411__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31411__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31411__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31411__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31411__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31412 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31412,(0),null);
var method = cljs.core.nth.call(null,vec__31412,(1),null);
var file = cljs.core.nth.call(null,vec__31412,(2),null);
var line = cljs.core.nth.call(null,vec__31412,(3),null);
var G__31415 = top_data;
var G__31415__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31415,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31415);
var G__31415__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31415__$1);
var G__31415__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31415__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31415__$2);
var G__31415__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31415__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31415__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31415__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31415__$4;
}

break;
case "execution":
var vec__31416 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31416,(0),null);
var method = cljs.core.nth.call(null,vec__31416,(1),null);
var file = cljs.core.nth.call(null,vec__31416,(2),null);
var line = cljs.core.nth.call(null,vec__31416,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31398_SHARP_){
var or__4126__auto__ = (p1__31398_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31398_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31419 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31419__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31419,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31419);
var G__31419__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31419__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31419__$1);
var G__31419__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31419__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31419__$2);
var G__31419__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31419__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31419__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31419__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31419__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31407__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31423){
var map__31424 = p__31423;
var map__31424__$1 = (((((!((map__31424 == null))))?(((((map__31424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31424):map__31424);
var triage_data = map__31424__$1;
var phase = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31424__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31426 = phase;
var G__31426__$1 = (((G__31426 instanceof cljs.core.Keyword))?G__31426.fqn:null);
switch (G__31426__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31427_31436 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31428_31437 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31429_31438 = true;
var _STAR_print_fn_STAR__temp_val__31430_31439 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31429_31438);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31430_31439);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31421_SHARP_){
return cljs.core.dissoc.call(null,p1__31421_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31428_31437);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31427_31436);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31431_31440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31432_31441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31433_31442 = true;
var _STAR_print_fn_STAR__temp_val__31434_31443 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31433_31442);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31434_31443);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31422_SHARP_){
return cljs.core.dissoc.call(null,p1__31422_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31432_31441);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31431_31440);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31426__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
