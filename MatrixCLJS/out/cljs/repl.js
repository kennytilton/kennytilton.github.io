// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9690){
var map__9691 = p__9690;
var map__9691__$1 = ((((!((map__9691 == null)))?((((map__9691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9691):map__9691);
var m = map__9691__$1;
var n = cljs.core.get.call(null,map__9691__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9693_9715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9694_9716 = null;
var count__9695_9717 = (0);
var i__9696_9718 = (0);
while(true){
if((i__9696_9718 < count__9695_9717)){
var f_9719 = cljs.core._nth.call(null,chunk__9694_9716,i__9696_9718);
cljs.core.println.call(null,"  ",f_9719);

var G__9720 = seq__9693_9715;
var G__9721 = chunk__9694_9716;
var G__9722 = count__9695_9717;
var G__9723 = (i__9696_9718 + (1));
seq__9693_9715 = G__9720;
chunk__9694_9716 = G__9721;
count__9695_9717 = G__9722;
i__9696_9718 = G__9723;
continue;
} else {
var temp__4657__auto___9724 = cljs.core.seq.call(null,seq__9693_9715);
if(temp__4657__auto___9724){
var seq__9693_9725__$1 = temp__4657__auto___9724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9693_9725__$1)){
var c__7460__auto___9726 = cljs.core.chunk_first.call(null,seq__9693_9725__$1);
var G__9727 = cljs.core.chunk_rest.call(null,seq__9693_9725__$1);
var G__9728 = c__7460__auto___9726;
var G__9729 = cljs.core.count.call(null,c__7460__auto___9726);
var G__9730 = (0);
seq__9693_9715 = G__9727;
chunk__9694_9716 = G__9728;
count__9695_9717 = G__9729;
i__9696_9718 = G__9730;
continue;
} else {
var f_9731 = cljs.core.first.call(null,seq__9693_9725__$1);
cljs.core.println.call(null,"  ",f_9731);

var G__9732 = cljs.core.next.call(null,seq__9693_9725__$1);
var G__9733 = null;
var G__9734 = (0);
var G__9735 = (0);
seq__9693_9715 = G__9732;
chunk__9694_9716 = G__9733;
count__9695_9717 = G__9734;
i__9696_9718 = G__9735;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9736 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6640__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9736);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9736)))?cljs.core.second.call(null,arglists_9736):arglists_9736));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9697_9737 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9698_9738 = null;
var count__9699_9739 = (0);
var i__9700_9740 = (0);
while(true){
if((i__9700_9740 < count__9699_9739)){
var vec__9701_9741 = cljs.core._nth.call(null,chunk__9698_9738,i__9700_9740);
var name_9742 = cljs.core.nth.call(null,vec__9701_9741,(0),null);
var map__9704_9743 = cljs.core.nth.call(null,vec__9701_9741,(1),null);
var map__9704_9744__$1 = ((((!((map__9704_9743 == null)))?((((map__9704_9743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9704_9743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9704_9743):map__9704_9743);
var doc_9745 = cljs.core.get.call(null,map__9704_9744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9746 = cljs.core.get.call(null,map__9704_9744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9742);

cljs.core.println.call(null," ",arglists_9746);

if(cljs.core.truth_(doc_9745)){
cljs.core.println.call(null," ",doc_9745);
} else {
}

var G__9747 = seq__9697_9737;
var G__9748 = chunk__9698_9738;
var G__9749 = count__9699_9739;
var G__9750 = (i__9700_9740 + (1));
seq__9697_9737 = G__9747;
chunk__9698_9738 = G__9748;
count__9699_9739 = G__9749;
i__9700_9740 = G__9750;
continue;
} else {
var temp__4657__auto___9751 = cljs.core.seq.call(null,seq__9697_9737);
if(temp__4657__auto___9751){
var seq__9697_9752__$1 = temp__4657__auto___9751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9697_9752__$1)){
var c__7460__auto___9753 = cljs.core.chunk_first.call(null,seq__9697_9752__$1);
var G__9754 = cljs.core.chunk_rest.call(null,seq__9697_9752__$1);
var G__9755 = c__7460__auto___9753;
var G__9756 = cljs.core.count.call(null,c__7460__auto___9753);
var G__9757 = (0);
seq__9697_9737 = G__9754;
chunk__9698_9738 = G__9755;
count__9699_9739 = G__9756;
i__9700_9740 = G__9757;
continue;
} else {
var vec__9706_9758 = cljs.core.first.call(null,seq__9697_9752__$1);
var name_9759 = cljs.core.nth.call(null,vec__9706_9758,(0),null);
var map__9709_9760 = cljs.core.nth.call(null,vec__9706_9758,(1),null);
var map__9709_9761__$1 = ((((!((map__9709_9760 == null)))?((((map__9709_9760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9709_9760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9709_9760):map__9709_9760);
var doc_9762 = cljs.core.get.call(null,map__9709_9761__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9763 = cljs.core.get.call(null,map__9709_9761__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9759);

cljs.core.println.call(null," ",arglists_9763);

if(cljs.core.truth_(doc_9762)){
cljs.core.println.call(null," ",doc_9762);
} else {
}

var G__9764 = cljs.core.next.call(null,seq__9697_9752__$1);
var G__9765 = null;
var G__9766 = (0);
var G__9767 = (0);
seq__9697_9737 = G__9764;
chunk__9698_9738 = G__9765;
count__9699_9739 = G__9766;
i__9700_9740 = G__9767;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9711 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9712 = null;
var count__9713 = (0);
var i__9714 = (0);
while(true){
if((i__9714 < count__9713)){
var role = cljs.core._nth.call(null,chunk__9712,i__9714);
var temp__4657__auto___9768__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9768__$1)){
var spec_9769 = temp__4657__auto___9768__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_9769));
} else {
}

var G__9770 = seq__9711;
var G__9771 = chunk__9712;
var G__9772 = count__9713;
var G__9773 = (i__9714 + (1));
seq__9711 = G__9770;
chunk__9712 = G__9771;
count__9713 = G__9772;
i__9714 = G__9773;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9711);
if(temp__4657__auto____$1){
var seq__9711__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9711__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__9711__$1);
var G__9774 = cljs.core.chunk_rest.call(null,seq__9711__$1);
var G__9775 = c__7460__auto__;
var G__9776 = cljs.core.count.call(null,c__7460__auto__);
var G__9777 = (0);
seq__9711 = G__9774;
chunk__9712 = G__9775;
count__9713 = G__9776;
i__9714 = G__9777;
continue;
} else {
var role = cljs.core.first.call(null,seq__9711__$1);
var temp__4657__auto___9778__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9778__$2)){
var spec_9779 = temp__4657__auto___9778__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_9779));
} else {
}

var G__9780 = cljs.core.next.call(null,seq__9711__$1);
var G__9781 = null;
var G__9782 = (0);
var G__9783 = (0);
seq__9711 = G__9780;
chunk__9712 = G__9781;
count__9713 = G__9782;
i__9714 = G__9783;
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

//# sourceMappingURL=repl.js.map