// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get(c);
} else {
var G__14751 = cljs.core.deref(me);
return (slot.cljs$core$IFn$_invoke$arity$1 ? slot.cljs$core$IFn$_invoke$arity$1(G__14751) : slot.call(null,G__14751));
}
} else {
return null;
}
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get(me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
var ret__7805__auto___14756 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14757 = arguments.length;
var i__7766__auto___14758 = (0);
while(true){
if((i__7766__auto___14758 < len__7765__auto___14757)){
args__7772__auto__.push((arguments[i__7766__auto___14758]));

var G__14759 = (i__7766__auto___14758 + (1));
i__7766__auto___14758 = G__14759;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_),(function (){var x__7483__auto__ = meform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq14752){
var G__14753 = cljs.core.first(seq14752);
var seq14752__$1 = cljs.core.next(seq14752);
var G__14754 = cljs.core.first(seq14752__$1);
var seq14752__$2 = cljs.core.next(seq14752__$1);
var G__14755 = cljs.core.first(seq14752__$2);
var seq14752__$3 = cljs.core.next(seq14752__$2);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic(G__14753,G__14754,G__14755,seq14752__$3);
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

var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,cljs.core.meta(me)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cz,cljs.core.cst$kw$cz.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(me))], 0));

if(cljs.core.contains_QMARK_(cljs.core.deref(me),slot)){
var G__14760 = cljs.core.str;
var G__14761 = "change not mediated by cell ";
var G__14762 = slot;
var G__14763 = "/";
var G__14764 = tiltontec.cell.base.ia_type(me);
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(G__14760,G__14761,G__14762,G__14763,G__14764) : tiltontec.util.core.err.call(null,G__14760,G__14761,G__14762,G__14763,G__14764));
} else {
var G__14765 = cljs.core.str;
var G__14766 = "change to slot not mediated by cell and map lacks slot ";
var G__14767 = slot;
var G__14768 = "\n         ;; but has ";
var G__14769 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(me)))].join('');
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$5(G__14765,G__14766,G__14767,G__14768,G__14769) : tiltontec.util.core.err.call(null,G__14765,G__14766,G__14767,G__14768,G__14769));
}
}
});
tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell(me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_(c,new_value);
} else {
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14783 = arguments.length;
var i__7766__auto___14784 = (0);
while(true){
if((i__7766__auto___14784 < len__7765__auto___14783)){
args__7772__auto__.push((arguments[i__7766__auto___14784]));

var G__14785 = (i__7766__auto___14784 + (1));
i__7766__auto___14784 = G__14785;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((0) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7773__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_(cljs.core.count(arg_list))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tiltontec.model.core.make,cljs.core.cst$kw$type,arg_list);
} else {
var iargs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,arg_list);
var me = cljs.core.atom.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$par,tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iargs){
return (function (p__14771){
var vec__14772 = p__14771;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_(v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iargs){
return (function (p__14775){
var vec__14776 = p__14775;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14776,(1),null);
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,slot));
});})(iargs))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,cljs.core.cst$kw$nascent], null),cljs.core.select_keys(iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type], null))], 0))], 0));
if(cljs.core.truth_(cljs.core.meta(me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cz,me], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iargs,me){
return (function (p__14779){
var vec__14780 = p__14779;
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14780,(1),null);
return tiltontec.model.base.md_install_cell(me,slot,v);
});})(iargs,me))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$awaken,me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken(me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq14770){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14770));
});

tiltontec.model.core.mm_obj = Object;
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldk),cljs.core.set(newk));
if(cljs.core.empty_QMARK_(lostks)){
return null;
} else {
var seq__14786 = cljs.core.seq(lostks);
var chunk__14787 = null;
var count__14788 = (0);
var i__14789 = (0);
while(true){
if((i__14789 < count__14788)){
var k = chunk__14787.cljs$core$IIndexed$_nth$arity$2(null,i__14789);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.not_to_be.call(null,k));

var G__14790 = seq__14786;
var G__14791 = chunk__14787;
var G__14792 = count__14788;
var G__14793 = (i__14789 + (1));
seq__14786 = G__14790;
chunk__14787 = G__14791;
count__14788 = G__14792;
i__14789 = G__14793;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14786);
if(temp__4657__auto__){
var seq__14786__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14786__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__14786__$1);
var G__14794 = cljs.core.chunk_rest(seq__14786__$1);
var G__14795 = c__7460__auto__;
var G__14796 = cljs.core.count(c__7460__auto__);
var G__14797 = (0);
seq__14786 = G__14794;
chunk__14787 = G__14795;
count__14788 = G__14796;
i__14789 = G__14797;
continue;
} else {
var k = cljs.core.first(seq__14786__$1);
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k) : tiltontec.cell.evaluate.not_to_be.call(null,k));

var G__14798 = cljs.core.next(seq__14786__$1);
var G__14799 = null;
var G__14800 = (0);
var G__14801 = (0);
seq__14786 = G__14798;
chunk__14787 = G__14799;
count__14788 = G__14800;
i__14789 = G__14801;
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
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$model$core_SLASH_family], null),(function (me){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$family_DASH_not_DASH_to_DASH_be_BANG_,me], 0));

var seq__14802_14806 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__14803_14807 = null;
var count__14804_14808 = (0);
var i__14805_14809 = (0);
while(true){
if((i__14805_14809 < count__14804_14808)){
var k_14810 = chunk__14803_14807.cljs$core$IIndexed$_nth$arity$2(null,i__14805_14809);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_14810))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fm_DASH_not_DASH_to_DASH_be_DASH_kid_BANG_], 0));

(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_14810) : tiltontec.cell.evaluate.not_to_be.call(null,k_14810));
} else {
}

var G__14811 = seq__14802_14806;
var G__14812 = chunk__14803_14807;
var G__14813 = count__14804_14808;
var G__14814 = (i__14805_14809 + (1));
seq__14802_14806 = G__14811;
chunk__14803_14807 = G__14812;
count__14804_14808 = G__14813;
i__14805_14809 = G__14814;
continue;
} else {
var temp__4657__auto___14815 = cljs.core.seq(seq__14802_14806);
if(temp__4657__auto___14815){
var seq__14802_14816__$1 = temp__4657__auto___14815;
if(cljs.core.chunked_seq_QMARK_(seq__14802_14816__$1)){
var c__7460__auto___14817 = cljs.core.chunk_first(seq__14802_14816__$1);
var G__14818 = cljs.core.chunk_rest(seq__14802_14816__$1);
var G__14819 = c__7460__auto___14817;
var G__14820 = cljs.core.count(c__7460__auto___14817);
var G__14821 = (0);
seq__14802_14806 = G__14818;
chunk__14803_14807 = G__14819;
count__14804_14808 = G__14820;
i__14805_14809 = G__14821;
continue;
} else {
var k_14822 = cljs.core.first(seq__14802_14816__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_14822))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fm_DASH_not_DASH_to_DASH_be_DASH_kid_BANG_], 0));

(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_14822) : tiltontec.cell.evaluate.not_to_be.call(null,k_14822));
} else {
}

var G__14823 = cljs.core.next(seq__14802_14816__$1);
var G__14824 = null;
var G__14825 = (0);
var G__14826 = (0);
seq__14802_14806 = G__14823;
chunk__14803_14807 = G__14824;
count__14804_14808 = G__14825;
i__14805_14809 = G__14826;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__6640__auto__ = tiltontec.util.core.any_ref_QMARK_(poss);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not(tiltontec.util.core.any_ref_QMARK_(poss))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fget_EQ_bailnotref,poss], 0));

return false;
} else {
if(cljs.core.fn_QMARK_(seek)){
return (seek.cljs$core$IFn$_invoke$arity$1 ? seek.cljs$core$IFn$_invoke$arity$1(poss) : seek.call(null,poss));
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(poss)))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.ia_type(poss),seek));
} else {
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(":fget=-else-pplain=!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seek], 0));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14835 = arguments.length;
var i__7766__auto___14836 = (0);
while(true){
if((i__7766__auto___14836 < len__7765__auto___14835)){
args__7772__auto__.push((arguments[i__7766__auto___14836]));

var G__14837 = (i__7766__auto___14836 + (1));
i__7766__auto___14836 = G__14837;
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
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR_14830 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6640__auto__ = (function (){var and__6628__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
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
var or__6640__auto____$1 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true], 0));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__14831 = cljs.core.cst$kw$fasc_DASH_must_DASH_failed;
var G__14832 = what;
var G__14833 = where;
var G__14834 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__14831,G__14832,G__14833,G__14834) : tiltontec.util.core.err.call(null,G__14831,G__14832,G__14833,G__14834));
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14830;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq14827){
var G__14828 = cljs.core.first(seq14827);
var seq14827__$1 = cljs.core.next(seq14827);
var G__14829 = cljs.core.first(seq14827__$1);
var seq14827__$2 = cljs.core.next(seq14827__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__14828,G__14829,seq14827__$2);
});

tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14847 = arguments.length;
var i__7766__auto___14848 = (0);
while(true){
if((i__7766__auto___14848 < len__7765__auto___14847)){
args__7772__auto__.push((arguments[i__7766__auto___14848]));

var G__14849 = (i__7766__auto___14848 + (1));
i__7766__auto___14848 = G__14849;
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
return tiltontec.util.core.any_ref_QMARK_(where);
} else {
return and__6628__auto____$1;
}
} else {
return and__6628__auto__;
}
})())){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$wocd_QMARK_,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options)], 0));
var _STAR_depender_STAR_14842 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(cljs.core.cst$kw$wocd_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(where))){
var or__6640__auto__ = (function (){var and__6628__auto__ = cljs.core.cst$kw$me_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var and__6628__auto____$1 = tiltontec.model.core.fget_EQ_(what,where);
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
var or__6640__auto____$1 = (function (){var and__6628__auto__ = cljs.core.cst$kw$inside_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get(where,cljs.core.cst$kw$kids);
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_kids_BANG__BANG__BANG_,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));

var temp__4655__auto____$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$skip.cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some(((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6628__auto__,or__6640__auto__,_STAR_depender_STAR_14842,options__$1){
return (function (p1__14838_SHARP_){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,p1__14838_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6628__auto__,or__6640__auto__,_STAR_depender_STAR_14842,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_net_DASH_kids], 0));
}
} else {
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_DASH_no_DASH_kids,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where))], 0));
}
} else {
return and__6628__auto__;
}
})();
if(cljs.core.truth_(or__6640__auto____$1)){
return or__6640__auto____$1;
} else {
var or__6640__auto____$2 = (function (){var and__6628__auto__ = cljs.core.cst$kw$up_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6628__auto__)){
var temp__4657__auto__ = cljs.core.cst$kw$par.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,par,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$me_QMARK_,true,cljs.core.cst$kw$skip,where,cljs.core.cst$kw$inside_QMARK_,true], 0));
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
if(cljs.core.truth_(cljs.core.cst$kw$must_QMARK_.cljs$core$IFn$_invoke$arity$1(options__$1))){
var G__14843 = cljs.core.cst$kw$fget_DASH_must_DASH_failed;
var G__14844 = what;
var G__14845 = where;
var G__14846 = options__$1;
return (tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4 ? tiltontec.util.core.err.cljs$core$IFn$_invoke$arity$4(G__14843,G__14844,G__14845,G__14846) : tiltontec.util.core.err.call(null,G__14843,G__14844,G__14845,G__14846));
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_14842;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq14839){
var G__14840 = cljs.core.first(seq14839);
var seq14839__$1 = cljs.core.next(seq14839);
var G__14841 = cljs.core.first(seq14839__$1);
var seq14839__$2 = cljs.core.next(seq14839__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__14840,G__14841,seq14839__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(what,where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$must_QMARK_,true,cljs.core.cst$kw$up_QMARK_,true], 0));
});
var ret__7805__auto___14859 = (function (){
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14860 = arguments.length;
var i__7766__auto___14861 = (0);
while(true){
if((i__7766__auto___14861 < len__7765__auto___14860)){
args__7772__auto__.push((arguments[i__7766__auto___14861]));

var G__14862 = (i__7766__auto___14861 + (1));
i__7766__auto___14861 = G__14862;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((4) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7773__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__14855){
var vec__14856 = p__14855;
var me = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14856,(0),null);
var me__$1 = (function (){var or__6640__auto__ = me;
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return cljs.core.cst$sym$me;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_md_DASH_get),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_fm_BANG_),(function (){var x__7483__auto__ = what;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = me__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq14850){
var G__14851 = cljs.core.first(seq14850);
var seq14850__$1 = cljs.core.next(seq14850);
var G__14852 = cljs.core.first(seq14850__$1);
var seq14850__$2 = cljs.core.next(seq14850__$1);
var G__14853 = cljs.core.first(seq14850__$2);
var seq14850__$3 = cljs.core.next(seq14850__$2);
var G__14854 = cljs.core.first(seq14850__$3);
var seq14850__$4 = cljs.core.next(seq14850__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14851,G__14852,G__14853,G__14854,seq14850__$4);
});

return null;
})()
;
tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;

tiltontec.model.core.fmu_w_class = (function tiltontec$model$core$fmu_w_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__14863_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__14863_SHARP_,cljs.core.cst$kw$class));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.model.core.mxu_find_class = (function tiltontec$model$core$mxu_find_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__14864_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__14864_SHARP_,cljs.core.cst$kw$class));
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true], 0));
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__14865_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(p1__14865_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,tiltontec.model.core.md_get(p1__14865_SHARP_,cljs.core.cst$kw$class));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((function (p1__14866_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_(p1__14866_SHARP_))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tiltontec.model.core.md_get(p1__14866_SHARP_,property));
} else {
return null;
}
}),where,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$inside_QMARK_,true,cljs.core.cst$kw$up_QMARK_,false], 0));
});
var ret__7805__auto___14870 = (function (){
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14871 = arguments.length;
var i__7766__auto___14872 = (0);
while(true){
if((i__7766__auto___14872 < len__7765__auto___14871)){
args__7772__auto__.push((arguments[i__7766__auto___14872]));

var G__14873 = (i__7766__auto___14872 + (1));
i__7766__auto___14872 = G__14873;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH__STAR_par_STAR_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_doall),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_remove),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_flatten),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),tree)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq14867){
var G__14868 = cljs.core.first(seq14867);
var seq14867__$1 = cljs.core.next(seq14867);
var G__14869 = cljs.core.first(seq14867__$1);
var seq14867__$2 = cljs.core.next(seq14867__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__14868,G__14869,seq14867__$2);
});

return null;
})()
;
tiltontec.model.core.the_kids.cljs$lang$macro = true;

var ret__7805__auto___14877 = (function (){
tiltontec.model.core.c_QMARK_kids = (function tiltontec$model$core$c_QMARK_kids(var_args){
var args__7772__auto__ = [];
var len__7765__auto___14878 = arguments.length;
var i__7766__auto___14879 = (0);
while(true){
if((i__7766__auto___14879 < len__7765__auto___14878)){
args__7772__auto__.push((arguments[i__7766__auto___14879]));

var G__14880 = (i__7766__auto___14879 + (1));
i__7766__auto___14879 = G__14880;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_c_QMARK_),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assert),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$me),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"no me for c?kids")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids),tree)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.model.core.c_QMARK_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.c_QMARK_kids.cljs$lang$applyTo = (function (seq14874){
var G__14875 = cljs.core.first(seq14874);
var seq14874__$1 = cljs.core.next(seq14874);
var G__14876 = cljs.core.first(seq14874__$1);
var seq14874__$2 = cljs.core.next(seq14874__$1);
return tiltontec.model.core.c_QMARK_kids.cljs$core$IFn$_invoke$arity$variadic(G__14875,G__14876,seq14874__$2);
});

return null;
})()
;
tiltontec.model.core.c_QMARK_kids.cljs$lang$macro = true;

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_key);
var k_factory = tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_factory);
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7429__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__14881(s__14882){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__14882__$1 = s__14882;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14882__$1);
if(temp__4657__auto__){
var s__14882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14882__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__14882__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__14884 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__14883 = (0);
while(true){
if((i__14883 < size__7428__auto__)){
var kid_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__14883);
cljs.core.chunk_append(b__14884,(function (){var or__6640__auto__ = cljs.core.some(((function (i__14883,kid_value,c__7427__auto__,size__7428__auto__,b__14884,s__14882__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kid_value,(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid)))){
return x_kid;
} else {
return null;
}
});})(i__14883,kid_value,c__7427__auto__,size__7428__auto__,b__14884,s__14882__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var _STAR_par_STAR_14885 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_14885;
}}
})());

var G__14887 = (i__14883 + (1));
i__14883 = G__14887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14884),tiltontec$model$core$kid_values_kids_$_iter__14881(cljs.core.chunk_rest(s__14882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14884),null);
}
} else {
var kid_value = cljs.core.first(s__14882__$2);
return cljs.core.cons((function (){var or__6640__auto__ = cljs.core.some(((function (kid_value,s__14882__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kid_value,(k_key.cljs$core$IFn$_invoke$arity$1 ? k_key.cljs$core$IFn$_invoke$arity$1(x_kid) : k_key.call(null,x_kid)))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__14882__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var _STAR_par_STAR_14886 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (k_factory.cljs$core$IFn$_invoke$arity$2 ? k_factory.cljs$core$IFn$_invoke$arity$2(me,kid_value) : k_factory.call(null,me,kid_value));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_14886;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__14881(cljs.core.rest(s__14882__$2)));
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
return iter__7429__auto__(tiltontec.model.core.md_get(me,cljs.core.cst$kw$kid_DASH_values));
})());
});
