// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
} else {
return null;
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
var ret__7805__auto___9657 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9658 = arguments.length;
var i__7766__auto___9659 = (0);
while(true){
if((i__7766__auto___9659 < len__7765__auto___9658)){
args__7772__auto__.push((arguments[i__7766__auto___9659]));

var G__9660 = (i__7766__auto___9659 + (1));
i__7766__auto___9659 = G__9660;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),(function (){var x__7483__auto__ = meform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),body)));
});

tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq9653){
var G__9654 = cljs.core.first.call(null,seq9653);
var seq9653__$1 = cljs.core.next.call(null,seq9653);
var G__9655 = cljs.core.first.call(null,seq9653__$1);
var seq9653__$2 = cljs.core.next.call(null,seq9653__$1);
var G__9656 = cljs.core.first.call(null,seq9653__$2);
var seq9653__$3 = cljs.core.next.call(null,seq9653__$2);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic(G__9654,G__9655,G__9656,seq9653__$3);
});

return null;
})()
;
tiltontec.model.core.with_par.cljs$lang$macro = true;

tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,me));

cljs.core.println.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot ",slot,"\n         ;; but has ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,cljs.core.deref.call(null,me)))].join(''));
}
}
});
tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9674 = arguments.length;
var i__7766__auto___9675 = (0);
while(true){
if((i__7766__auto___9675 < len__7765__auto___9674)){
args__7772__auto__.push((arguments[i__7766__auto___9675]));

var G__9676 = (i__7766__auto___9675 + (1));
i__7766__auto___9675 = G__9676;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__9662){
var vec__9663 = p__9662;
var k = cljs.core.nth.call(null,vec__9663,(0),null);
var v = cljs.core.nth.call(null,vec__9663,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__9666){
var vec__9667 = p__9666;
var slot = cljs.core.nth.call(null,vec__9667,(0),null);
var v = cljs.core.nth.call(null,vec__9667,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__9670){
var vec__9671 = p__9670;
var slot = cljs.core.nth.call(null,vec__9671,(0),null);
var v = cljs.core.nth.call(null,vec__9671,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(iargs,me))
,cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq9661){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9661));
});

tiltontec.model.core.mm_obj = Object;
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__9677 = cljs.core.seq.call(null,lostks);
var chunk__9678 = null;
var count__9679 = (0);
var i__9680 = (0);
while(true){
if((i__9680 < count__9679)){
var k = cljs.core._nth.call(null,chunk__9678,i__9680);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__9681 = seq__9677;
var G__9682 = chunk__9678;
var G__9683 = count__9679;
var G__9684 = (i__9680 + (1));
seq__9677 = G__9681;
chunk__9678 = G__9682;
count__9679 = G__9683;
i__9680 = G__9684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9677);
if(temp__4657__auto__){
var seq__9677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9677__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__9677__$1);
var G__9685 = cljs.core.chunk_rest.call(null,seq__9677__$1);
var G__9686 = c__7460__auto__;
var G__9687 = cljs.core.count.call(null,c__7460__auto__);
var G__9688 = (0);
seq__9677 = G__9685;
chunk__9678 = G__9686;
count__9679 = G__9687;
i__9680 = G__9688;
continue;
} else {
var k = cljs.core.first.call(null,seq__9677__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__9689 = cljs.core.next.call(null,seq__9677__$1);
var G__9690 = null;
var G__9691 = (0);
var G__9692 = (0);
seq__9677 = G__9689;
chunk__9678 = G__9690;
count__9679 = G__9691;
i__9680 = G__9692;
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
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"family-not-to-be!","family-not-to-be!",996747952),me);

var seq__9693_9697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__9694_9698 = null;
var count__9695_9699 = (0);
var i__9696_9700 = (0);
while(true){
if((i__9696_9700 < count__9695_9699)){
var k_9701 = cljs.core._nth.call(null,chunk__9694_9698,i__9696_9700);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_9701))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_9701);
} else {
}

var G__9702 = seq__9693_9697;
var G__9703 = chunk__9694_9698;
var G__9704 = count__9695_9699;
var G__9705 = (i__9696_9700 + (1));
seq__9693_9697 = G__9702;
chunk__9694_9698 = G__9703;
count__9695_9699 = G__9704;
i__9696_9700 = G__9705;
continue;
} else {
var temp__4657__auto___9706 = cljs.core.seq.call(null,seq__9693_9697);
if(temp__4657__auto___9706){
var seq__9693_9707__$1 = temp__4657__auto___9706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9693_9707__$1)){
var c__7460__auto___9708 = cljs.core.chunk_first.call(null,seq__9693_9707__$1);
var G__9709 = cljs.core.chunk_rest.call(null,seq__9693_9707__$1);
var G__9710 = c__7460__auto___9708;
var G__9711 = cljs.core.count.call(null,c__7460__auto___9708);
var G__9712 = (0);
seq__9693_9697 = G__9709;
chunk__9694_9698 = G__9710;
count__9695_9699 = G__9711;
i__9696_9700 = G__9712;
continue;
} else {
var k_9713 = cljs.core.first.call(null,seq__9693_9707__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_9713))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_9713);
} else {
}

var G__9714 = cljs.core.next.call(null,seq__9693_9707__$1);
var G__9715 = null;
var G__9716 = (0);
var G__9717 = (0);
seq__9693_9697 = G__9714;
chunk__9694_9698 = G__9715;
count__9695_9699 = G__9716;
i__9696_9700 = G__9717;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__6640__auto__ = tiltontec.util.core.any_ref_QMARK_.call(null,poss);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not.call(null,tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fget=bailnotref","fget=bailnotref",-1507107200),poss);

return false;
} else {
if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
tiltontec.util.base.call_trc.call(null,":fget=-else-pplain=!",seek);

return cljs.core._EQ_.call(null,seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9722 = arguments.length;
var i__7766__auto___9723 = (0);
while(true){
if((i__7766__auto___9723 < len__7765__auto___9722)){
args__7772__auto__.push((arguments[i__7766__auto___9723]));

var G__9724 = (i__7766__auto___9723 + (1));
i__7766__auto___9723 = G__9724;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6628__auto__ = where;
if(cljs.core.truth_(and__6628__auto__)){
return what;
} else {
return and__6628__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_9721 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6640__auto__ = (function (){var and__6628__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6628__auto____$1)){
return where;
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var or__6640__auto____$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.call(null,what,par,new cljs.core.Keyword(null,"me?","me?",-625404259),true);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fasc-must-failed","fasc-must-failed",845302164),what,where,options__$1);
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_9721;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq9718){
var G__9719 = cljs.core.first.call(null,seq9718);
var seq9718__$1 = cljs.core.next.call(null,seq9718);
var G__9720 = cljs.core.first.call(null,seq9718__$1);
var seq9718__$2 = cljs.core.next.call(null,seq9718__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__9719,G__9720,seq9718__$2);
});

tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9730 = arguments.length;
var i__7766__auto___9731 = (0);
while(true){
if((i__7766__auto___9731 < len__7765__auto___9730)){
args__7772__auto__.push((arguments[i__7766__auto___9731]));

var G__9732 = (i__7766__auto___9731 + (1));
i__7766__auto___9731 = G__9732;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6628__auto__ = where;
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = what;
if(cljs.core.truth_(and__6628__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_.call(null,where);
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_9729 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,where))){
var or__6640__auto__ = (function (){var and__6628__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6628__auto____$1)){
return where;
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var or__6640__auto____$1 = (function (){var and__6628__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4655__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6628__auto__,or__6640__auto__,_STAR_depender_STAR_9729,options__$1){
return (function (p1__9725_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__9725_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6628__auto__,or__6640__auto__,_STAR_depender_STAR_9729,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
var or__6640__auto____$2 = (function (){var and__6628__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(or__6640__auto____$2)){
return or__6640__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_9729;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq9726){
var G__9727 = cljs.core.first.call(null,seq9726);
var seq9726__$1 = cljs.core.next.call(null,seq9726);
var G__9728 = cljs.core.first.call(null,seq9726__$1);
var seq9726__$2 = cljs.core.next.call(null,seq9726__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__9727,G__9728,seq9726__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
var ret__7805__auto___9742 = (function (){
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9743 = arguments.length;
var i__7766__auto___9744 = (0);
while(true){
if((i__7766__auto___9744 < len__7765__auto___9743)){
args__7772__auto__.push((arguments[i__7766__auto___9744]));

var G__9745 = (i__7766__auto___9744 + (1));
i__7766__auto___9744 = G__9745;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((4) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7773__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__9738){
var vec__9739 = p__9738;
var me = cljs.core.nth.call(null,vec__9739,(0),null);
var me__$1 = (function (){var or__6640__auto__ = me;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7483__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq9733){
var G__9734 = cljs.core.first.call(null,seq9733);
var seq9733__$1 = cljs.core.next.call(null,seq9733);
var G__9735 = cljs.core.first.call(null,seq9733__$1);
var seq9733__$2 = cljs.core.next.call(null,seq9733__$1);
var G__9736 = cljs.core.first.call(null,seq9733__$2);
var seq9733__$3 = cljs.core.next.call(null,seq9733__$2);
var G__9737 = cljs.core.first.call(null,seq9733__$3);
var seq9733__$4 = cljs.core.next.call(null,seq9733__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9734,G__9735,G__9736,G__9737,seq9733__$4);
});

return null;
})()
;
tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;

tiltontec.model.core.fmu_w_class = (function tiltontec$model$core$fmu_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__9746_SHARP_){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__9746_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.model.core.mxu_find_class = (function tiltontec$model$core$mxu_find_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__9747_SHARP_){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__9747_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__9748_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__9748_SHARP_))){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__9748_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.call(null,(function (p1__9749_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__9749_SHARP_))){
return cljs.core._EQ_.call(null,value,tiltontec.model.core.md_get.call(null,p1__9749_SHARP_,property));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
var ret__7805__auto___9753 = (function (){
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9754 = arguments.length;
var i__7766__auto___9755 = (0);
while(true){
if((i__7766__auto___9755 < len__7765__auto___9754)){
args__7772__auto__.push((arguments[i__7766__auto___9755]));

var G__9756 = (i__7766__auto___9755 + (1));
i__7766__auto___9755 = G__9756;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7483__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doall","cljs.core/doall",1093272293,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq9750){
var G__9751 = cljs.core.first.call(null,seq9750);
var seq9750__$1 = cljs.core.next.call(null,seq9750);
var G__9752 = cljs.core.first.call(null,seq9750__$1);
var seq9750__$2 = cljs.core.next.call(null,seq9750__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__9751,G__9752,seq9750__$2);
});

return null;
})()
;
tiltontec.model.core.the_kids.cljs$lang$macro = true;

var ret__7805__auto___9760 = (function (){
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7772__auto__ = [];
var len__7765__auto___9761 = arguments.length;
var i__7766__auto___9762 = (0);
while(true){
if((i__7766__auto___9762 < len__7765__auto___9761)){
args__7772__auto__.push((arguments[i__7766__auto___9762]));

var G__9763 = (i__7766__auto___9762 + (1));
i__7766__auto___9762 = G__9763;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","c?","tiltontec.model.core/c?",508213181,null)),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"no me for c?kids"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})())));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq9757){
var G__9758 = cljs.core.first.call(null,seq9757);
var seq9757__$1 = cljs.core.next.call(null,seq9757);
var G__9759 = cljs.core.first.call(null,seq9757__$1);
var seq9757__$2 = cljs.core.next.call(null,seq9757__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__9758,G__9759,seq9757__$2);
});

return null;
})()
;
tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.call(null,x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var k_factory = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.call(null,(function (){var iter__7429__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__9764(s__9765){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__9765__$1 = s__9765;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9765__$1);
if(temp__4657__auto__){
var s__9765__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9765__$2)){
var c__7427__auto__ = cljs.core.chunk_first.call(null,s__9765__$2);
var size__7428__auto__ = cljs.core.count.call(null,c__7427__auto__);
var b__9767 = cljs.core.chunk_buffer.call(null,size__7428__auto__);
if((function (){var i__9766 = (0);
while(true){
if((i__9766 < size__7428__auto__)){
var kid_value = cljs.core._nth.call(null,c__7427__auto__,i__9766);
cljs.core.chunk_append.call(null,b__9767,(function (){var or__6640__auto__ = cljs.core.some.call(null,((function (i__9766,kid_value,c__7427__auto__,size__7428__auto__,b__9767,s__9765__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(i__9766,kid_value,c__7427__auto__,size__7428__auto__,b__9767,s__9765__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var _STAR_par_STAR_9768 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9768;
}}
})());

var G__9770 = (i__9766 + (1));
i__9766 = G__9770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9767),tiltontec$model$core$kid_values_kids_$_iter__9764.call(null,cljs.core.chunk_rest.call(null,s__9765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9767),null);
}
} else {
var kid_value = cljs.core.first.call(null,s__9765__$2);
return cljs.core.cons.call(null,(function (){var or__6640__auto__ = cljs.core.some.call(null,((function (kid_value,s__9765__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__9765__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var _STAR_par_STAR_9769 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9769;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__9764.call(null,cljs.core.rest.call(null,s__9765__$2)));
}
} else {
return null;
}
break;
}
});})(x_kids__$1,k_key,k_factory))
,null,null));
});})(x_kids__$1,k_key,k_factory))
;
return iter__7429__auto__.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341)));
})());
});

//# sourceMappingURL=core.js.map