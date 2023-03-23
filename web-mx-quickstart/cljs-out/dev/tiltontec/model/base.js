// Compiled by ClojureScript 1.10.773 {}
goog.provide('tiltontec.model.base');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.poly');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
tiltontec.model.base.md_name = (function tiltontec$model$base$md_name(ref){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ref));
});
tiltontec.model.base.md_cz = (function tiltontec$model$base$md_cz(ref){
return new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ref));
});
tiltontec.model.base.md_cell = (function tiltontec$model$base$md_cell(me,prop){
return prop.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));
});
tiltontec.model.base.md_install_cell = (function tiltontec$model$base$md_install_cell(me,prop,c){
if(tiltontec.cell.base.c_ref_QMARK_.call(null,c)){
cljs.core.swap_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"prop","prop",-515168332),prop,new cljs.core.Keyword(null,"me","me",-139006693),me);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))?tiltontec.cell.base.c_value.call(null,c):null));

return true;
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,me], null),c);

return false;

}
});
/**
 * (1) do initial evaluation of all ruled props
 * (2) call watchs of all props
 */
tiltontec.model.base.md_awaken = (function tiltontec$model$base$md_awaken(me){
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","md-awaken passed nil","\n","me"].join('')));
}

tiltontec.cell.poly.md_awaken_before.call(null,me);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807),tiltontec.cell.base.md_state.call(null,me))){
} else {
throw (new Error(["Assert failed: ",["md-awaken> state not nascent post-awaken-before: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = tiltontec.cell.base.md_state.call(null,me);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"NIL","NIL",757349226);
}
})())," meta: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))].join(''),"\n","(= :nascent (md-state me))"].join('')));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),me], null),new cljs.core.Keyword(null,"awakening","awakening",838364227));

var seq__20499_20503 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,me)));
var chunk__20500_20504 = null;
var count__20501_20505 = (0);
var i__20502_20506 = (0);
while(true){
if((i__20502_20506 < count__20501_20505)){
var prop_20507 = cljs.core._nth.call(null,chunk__20500_20504,i__20502_20506);
var temp__5804__auto___20508 = prop_20507.call(null,tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.truth_(temp__5804__auto___20508)){
var c_20509 = temp__5804__auto___20508;
if(cljs.core._EQ_.call(null,c_20509,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
tiltontec.cell.poly.watch.call(null,prop_20507,me,prop_20507.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);
} else {
tiltontec.cell.poly.c_awaken.call(null,c_20509);

}
} else {
}


var G__20510 = seq__20499_20503;
var G__20511 = chunk__20500_20504;
var G__20512 = count__20501_20505;
var G__20513 = (i__20502_20506 + (1));
seq__20499_20503 = G__20510;
chunk__20500_20504 = G__20511;
count__20501_20505 = G__20512;
i__20502_20506 = G__20513;
continue;
} else {
var temp__5804__auto___20514 = cljs.core.seq.call(null,seq__20499_20503);
if(temp__5804__auto___20514){
var seq__20499_20515__$1 = temp__5804__auto___20514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20499_20515__$1)){
var c__4556__auto___20516 = cljs.core.chunk_first.call(null,seq__20499_20515__$1);
var G__20517 = cljs.core.chunk_rest.call(null,seq__20499_20515__$1);
var G__20518 = c__4556__auto___20516;
var G__20519 = cljs.core.count.call(null,c__4556__auto___20516);
var G__20520 = (0);
seq__20499_20503 = G__20517;
chunk__20500_20504 = G__20518;
count__20501_20505 = G__20519;
i__20502_20506 = G__20520;
continue;
} else {
var prop_20521 = cljs.core.first.call(null,seq__20499_20515__$1);
var temp__5804__auto___20522__$1 = prop_20521.call(null,tiltontec.model.base.md_cz.call(null,me),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core.truth_(temp__5804__auto___20522__$1)){
var c_20523 = temp__5804__auto___20522__$1;
if(cljs.core._EQ_.call(null,c_20523,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
tiltontec.cell.poly.watch.call(null,prop_20521,me,prop_20521.call(null,cljs.core.deref.call(null,me)),tiltontec.cell.base.unbound,null);
} else {
tiltontec.cell.poly.c_awaken.call(null,c_20523);

}
} else {
}


var G__20524 = cljs.core.next.call(null,seq__20499_20515__$1);
var G__20525 = null;
var G__20526 = (0);
var G__20527 = (0);
seq__20499_20503 = G__20524;
chunk__20500_20504 = G__20525;
count__20501_20505 = G__20526;
i__20502_20506 = G__20527;
continue;
}
} else {
}
}
break;
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),me], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

return me;
});

//# sourceMappingURL=base.js.map
