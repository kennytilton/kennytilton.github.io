// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('web_mx_quickstart.lesson');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.gen');
goog.require('tiltontec.web_mx.gen_macro');
web_mx_quickstart.lesson.tl_dr = (function web_mx_quickstart$lesson$tl_dr(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The count is now...."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),"42"),cljs.core.list(cljs.core.cst$sym$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(64),cljs.core.cst$kw$height,(64),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,"Increment Feature Not Yet Implemented"))], null),cljs.core.list(cljs.core.cst$sym$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null)),cljs.core.list(cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),"+")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27748 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27749 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27749);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The count is now....")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27750 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27751 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27751);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27750);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27752 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27753 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27753);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27752);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("svg",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(64),cljs.core.cst$kw$height,(64),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$onclick,(function (){
return alert("Increment Feature Not Yet Implemented");
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null)),cljs.core.list(cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),"+"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27754 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27755 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27755);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("circle",new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("text",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"+")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27756 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27757 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27757);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27756);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27754);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27748);
}})], 0)));
});
web_mx_quickstart.lesson.just_html = (function web_mx_quickstart$lesson$just_html(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The count is now...."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),"42"),cljs.core.list(cljs.core.cst$sym$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(64),cljs.core.cst$kw$height,(64),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,"Increment Feature Not Yet Implemented"))], null),cljs.core.list(cljs.core.cst$sym$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null)),cljs.core.list(cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),"+")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27758 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27759 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27759);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The count is now....")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27760 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27761 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27761);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27760);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27762 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27763 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27763);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27762);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("svg",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(64),cljs.core.cst$kw$height,(64),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$onclick,(function (){
return alert("Increment Feature Not Yet Implemented");
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null)),cljs.core.list(cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),"+"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27764 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27765 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27765);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("circle",new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("text",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"+")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27766 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27767 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27767);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27766);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27764);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27758);
}})], 0)));
});
web_mx_quickstart.lesson.ex_just_html = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$builder,cljs.core.cst$kw$exercise,cljs.core.cst$kw$route,cljs.core.cst$kw$title,cljs.core.cst$kw$preamble,cljs.core.cst$kw$comment,cljs.core.cst$kw$code,cljs.core.cst$kw$menu],["tiltontec.example.quick-start.lesson/just-html",web_mx_quickstart.lesson.just_html,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Feel free to experiment with other HTML or SVG tags.","Where HTML has <code>&lt;tag attributes*> children*&lt;/tag></code><br>...Web/MX has: <code>(tag {attributes*} children*)</code>.","If you find some HTML that does not translate to Web/MX, please send a failing example along."], null),cljs.core.cst$kw$just_DASH_html,"It is just HTML","We just write HTML, SVG, and CSS, using CLJS workalikes.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Web/MX introduces no framework of its own, it just manages the DOM. Matrix just manages the state.","Aside from CLJS->JS, no preprocessor is involved, and the stability of CLJS makes this one exception\n              a net win."], null),"(div {:class :intro}\n    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>\n    ;; <b>become HTML element attribute-values, with keywords => strings</b>\n\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    ;; <b>^^ arguments following the optional maps become children, or text content</b>\n\n    (svg {:width   64 :height 64\n          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>\n          :cursor :pointer\n          :onclick #(js/alert \"Increment Feature Not Yet Implemented\")}\n      (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n               :stroke \"orange\" :stroke-width 5\n               :fill   :transparent})\n      (text {:class       :heavychar\n             :x \"50%\" :y \"70%\"\n             :text-anchor :middle} \"+\")))","It's Just HTML"]);
web_mx_quickstart.lesson.and_cljs = (function web_mx_quickstart$lesson$and_cljs(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The count is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"digi-readout"], null),"42"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opcode], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$opcode)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,cljs.core.list(cljs.core.cst$sym$str,"Opcode \"",cljs.core.cst$sym$opcode,"\" RSN.")))], null),cljs.core.cst$sym$opcode))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27768 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27769 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27769);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The count is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27770 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27771 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27771);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27770);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"digi-readout"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27772 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27773 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27773);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27772);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opcode], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$opcode)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,cljs.core.list(cljs.core.cst$sym$str,"Opcode \"",cljs.core.cst$sym$opcode,"\" RSN.")))], null),cljs.core.cst$sym$opcode))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27774 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27775 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27775);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opcode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(opcode))){
return tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,(function (){
return alert(["Opcode \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),"\" RSN."].join(''));
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$opcode)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27776 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27777 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27777);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,opcode,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27776);
}})], 0)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27774);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27768);
}})], 0)));
});
web_mx_quickstart.lesson.ex_and_cljs = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"...and CLJS",cljs.core.cst$kw$route,cljs.core.cst$kw$and_DASH_cljs,cljs.core.cst$kw$title,"...and CLJS",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.and_cljs,cljs.core.cst$kw$preamble,"It is just HTML <i>and</i> CLJS.",cljs.core.cst$kw$code,"(defn and-cljs []\n  (div {:class :intro}\n    (h2 \"The count is now...\")\n    (span {:class \"digi-readout\"} \"42\")\n    (div {:style {:display :flex\n                  :gap     \"1em\"}}\n      ;; <b>children, below built into a vector using CLJS,\n      ;; are automatically flattened, with any nils removed</b>\n      (mapv (fn [opcode]\n              (when (= 1 (count opcode))\n                (button {:class   :push-button\n                         :onclick #(js/alert\n                                     (str \"Opcode \\\"\" opcode \"\\\" RSN.\"))}\n                  opcode)))\n        [\"-\" \"=\" \"+\" \"boom\"]))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["In fact, all this code is CLJS. For example, DIV is a CLJS macro that returns\n    a Clojure <i>proxy</i> for a DOM DIV. Proxies are not VDOM. Proxies are long-lived models that manage their DOM incarnations as events unfold."], null)], null);
web_mx_quickstart.lesson.opcode_button = (function web_mx_quickstart$lesson$opcode_button(label,onclick){
return tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,onclick], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$label)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27778 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27779 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27779);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,label,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27778);
}})], 0)));
});
web_mx_quickstart.lesson.math_keypad = (function web_mx_quickstart$lesson$math_keypad(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27783 = arguments.length;
var i__4737__auto___27784 = (0);
while(true){
if((i__4737__auto___27784 < len__4736__auto___27783)){
args__4742__auto__.push((arguments[i__4737__auto___27784]));

var G__27785 = (i__4737__auto___27784 + (1));
i__4737__auto___27784 = G__27785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic = (function (opcodes){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opcode], null),cljs.core.list(cljs.core.cst$sym$opcode_DASH_button,cljs.core.cst$sym$opcode,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,"Feature Not Yet Implemented")))),cljs.core.cst$sym$opcodes))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27781 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27782 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27782);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opcode){
return web_mx_quickstart.lesson.opcode_button(opcode,(function (){
return alert("Feature Not Yet Implemented");
}));
}),opcodes),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27781);
}})], 0)));
}));

(web_mx_quickstart.lesson.math_keypad.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(web_mx_quickstart.lesson.math_keypad.cljs$lang$applyTo = (function (seq27780){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27780));
}));

web_mx_quickstart.lesson.html_composition = (function web_mx_quickstart$lesson$html_composition(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The count is now...."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),"42"),cljs.core.list(cljs.core.cst$sym$math_DASH_keypad,"-","=","+"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27786 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27787 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27787);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The count is now....")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27788 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27789 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27789);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27788);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27790 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27791 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27791);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27790);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-","=","+"], 0)),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27786);
}})], 0)));
});
web_mx_quickstart.lesson.ex_html_composition = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Composable<br>Widgets",cljs.core.cst$kw$route,cljs.core.cst$kw$html_DASH_composition,cljs.core.cst$kw$title,"Functional GUI composition",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.html_composition,cljs.core.cst$kw$preamble,"Because it is all CLJS, we can move sub-structure into functions.",cljs.core.cst$kw$code,"(defn opcode-button [label onclick]\n  (button {:class   :push-button\n           :onclick onclick}\n    label))\n\n(defn math-keypad [& opcodes]\n  (div {:style {:display :flex\n                :gap     \"1em\"}}\n    (mapv (fn [opcode]\n            (opcode-button opcode\n              #(js/alert \"Feature Not Yet Implemented\")))\n      opcodes)))\n\n(defn html-composition []\n  (div {:class :intro}\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    (math-keypad \"-\" \"=\" \"+\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hiccup syntactically distinguishes HTML from app; Web/MX blends them."], null)], null);
web_mx_quickstart.lesson.custom_state = (function web_mx_quickstart$lesson$custom_state(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mph,(42)], null),cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27792 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27793 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27793);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The speed is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27794 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27795 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27795);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27794);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mph,(42)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27796 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27797 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27797);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph"].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27796);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27792);
}})], 0)));
});
web_mx_quickstart.lesson.ex_custom_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Ad Hoc Properties",cljs.core.cst$kw$route,cljs.core.cst$kw$custom_DASH_state,cljs.core.cst$kw$title,"Ad hoc widget properties",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.custom_state,cljs.core.cst$kw$preamble,"Widgets define ad hoc properties as needed.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      ;; <b>An optional second map is for custom state.</b>\n      {:mph  42}\n\n      ;; <b>below: mget, short for \"model-get\", is the MX \"getter\" for model (object) properties</b>\n      ;; <b>n.b. Tag children, even plain strings, always start out in an auto-genned formula.</b>\n      (str (mget me :mph) \" mph\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag macros take an optional second map of ad hoc, custom properties. The map for custom state is identified\n   positionally, so an empty first map must be coded even if no HTML attributes are needed.","Here, a generic <code>span</code> embodying a speedometer thinks it might usefully have a <code>{:mph 42}</code> property.\n   We will put that to use soon.","<code>mget</code> can be used anywhere. Inside a formula, it transparently subscribes to the property being read.","Big picture: Matrix follows the <a href=https://en.wikipedia.org/wiki/Prototype-based_programming target=\"_blank\">prototype model</a>,\n\n                     so generic tags can be re-used without subclassing."], null)], null);
web_mx_quickstart.lesson.derived_state = (function web_mx_quickstart$lesson$derived_state(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,(65),cljs.core.cst$kw$too_DASH_fast_QMARK_,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55))),cljs.core.cst$kw$speedo_DASH_text,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph",cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$too_DASH_fast_QMARK_),"<br>Slow down")))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$speedo_DASH_text)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27798 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27799 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27799);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The speed is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27800 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27801 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27801);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27800);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,(65),cljs.core.cst$kw$too_DASH_fast_QMARK_,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return (tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph) > (55));
})], 0)),cljs.core.cst$kw$speedo_DASH_text,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph",cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$too_DASH_fast_QMARK_),"<br>Slow down"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph",(cljs.core.truth_(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$too_DASH_fast_QMARK_))?"<br>Slow down":null)].join('');
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$speedo_DASH_text))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27802 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27803 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27803);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$speedo_DASH_text),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27802);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27798);
}})], 0)));
});
web_mx_quickstart.lesson.ex_derived_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Functional<br>Properties",cljs.core.cst$kw$route,cljs.core.cst$kw$derived_DASH_state,cljs.core.cst$kw$title,"Functional, computed, reactive properties",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.derived_state,cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      {:name        :speedometer\n       :mph         65\n       :too-fast?   (cF (> (mget me :mph) 55))\n       ;; <b>'cF', or \"cell formula\", defines a computed/derived property.</b>\n       ;; <b>'me' is lexically injected, like JS 'this' or Smalltalk 'self'.</b>\n       ;; <b>Properties such as 'mph' are transparently subscribed.</b>\n       :speedo-text (cF (str (mget me :mph) \" mph\"\n                          (when (mget me :too-fast?) \"<br>Slow down\")))}\n      (mget me :speedo-text)))",cljs.core.cst$kw$preamble,"A property can be expressed as a function, or \"formula\", of other properties.",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>too-fast?</code> property is fed by the reactive formula <code>(cF (> (mget me :mph) 55))</code>.\n    When <code>mph</code> changes, <code>too-fast?</code> will be recomputed, then <code>speedo-text</code>.","Formula dependencies are automatically recorded, and adjusted anew on each evaluation.\n               Together these trees of property-dependencies form the same coherent, one-way DAG found in Flux derivatives,\n               but without us doing more than coding one property at a time.","The difference is that the Web/MX DAG extends all the way out to individual widget\n              attributes, and even individual style properties. Flux reactivity stops at the view function.","n.b. Different instances can have different formulas for the same property,\n              extending further the \"prototype\" reusability win.</li>"], null)], null);
web_mx_quickstart.lesson.navigation = (function web_mx_quickstart$lesson$navigation(geo_type){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$speed_DASH_zone,cljs.core.cst$kw$speed_DASH_limit,(55)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zone,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$speed_DASH_zone,cljs.core.cst$sym$me),cljs.core.cst$sym$speedo,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer)], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"The speed is now ~a mph over the speed limit.",cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$speedo,cljs.core.cst$kw$mph),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$zone,cljs.core.cst$kw$speed_DASH_limit)))))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$text)),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,(60),cljs.core.cst$kw$too_DASH_fast_QMARK_,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$speed_DASH_zone,cljs.core.cst$sym$me),cljs.core.cst$kw$speed_DASH_limit)))], null),cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph",cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$too_DASH_fast_QMARK_),"<br>Slow down"))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27804 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27805 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27805);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zone,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$speed_DASH_zone,cljs.core.cst$sym$me),cljs.core.cst$sym$speedo,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer)], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"The speed is now ~a mph over the speed limit.",cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$speedo,cljs.core.cst$kw$mph),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$zone,cljs.core.cst$kw$speed_DASH_limit))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var zone = tiltontec.model.core.fasc(cljs.core.cst$kw$speed_DASH_zone,me__$1);
var speedo = (function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})();
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"The speed is now ~a mph over the speed limit.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(tiltontec.model.core.mget(speedo,cljs.core.cst$kw$mph) - tiltontec.model.core.mget(zone,cljs.core.cst$kw$speed_DASH_limit))], 0));
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$text))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27806 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27807 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27807);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$text),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27806);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,(60),cljs.core.cst$kw$too_DASH_fast_QMARK_,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$speed_DASH_zone,cljs.core.cst$sym$me),cljs.core.cst$kw$speed_DASH_limit))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return (tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph) > tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$speed_DASH_zone,me__$1),cljs.core.cst$kw$speed_DASH_limit));
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph",cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$too_DASH_fast_QMARK_),"<br>Slow down")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27808 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27809 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27809);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph",(cljs.core.truth_(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$too_DASH_fast_QMARK_))?"<br>Slow down":null)].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27808);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27804);
}})], 0)));
});
web_mx_quickstart.lesson.ex_navigation = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Random Property<br>Access",cljs.core.cst$kw$title,"Random property access",cljs.core.cst$kw$route,cljs.core.cst$kw$navigation,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.navigation,cljs.core.cst$kw$preamble,"A widget property formula can find and use any other app property.",cljs.core.cst$kw$code,"(div {:class :intro}\n    {:name        :speed-zone\n     :speed-limit 55}\n    (h2 {}\n      ;; <b>`fasc` searches up the parent chain only</b>\n      {:text (cF (let [zone (fasc :speed-zone me)\n                       speedo (fmu :speedometer)]\n                   (pp/cl-format nil \"The speed is now ~a mph over the speed limit.\"\n                     (- (mget speedo :mph) (mget zone :speed-limit)))))}\n      (mget me :text))\n    (span {:class :digi-readout}\n      {:name      :speedometer\n       :mph       60\n       :too-fast? (cF (> (mget me :mph)\n                        (mget (fasc :speed-zone me) :speed-limit)))}\n      (str (mget me :mph) \" mph\"\n        (when (mget me :too-fast?) \"Slow down\"))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The headline needs the speed limit and current speed for its text. The speedometer readout needs\n     the speed limit, to decide its text color.","We retrieve values from named other widgets, using navigation\n     utilities such as <code>fasc</code> and <code>fmu</code> to avoid hard-coding paths.","About navigation: MX models are like the DOM; every element but the root has one parent and knows that parent as a fixed property,\n               and everyone has zero or more children. Simple enough that, should a convoluted DOM organization arise,\n               a dev could easily write their own navigation code.","Second, the provided fm-navig utility takes a \"test\" function as its first parameter, which by default\n              tests the :name of every node for a match with the sought name. Here again a dev can write a test function\n              of arbitrary complexity if needed.","Just to fill in the navigation picture a bit, <code>fm-navig</code> by default does a depth-first, left-right\n               search starting at the provided start node, recursing up to the start's parent if necessary. So search for\n               a name benefits from a natural scoping, and duplicate names arising from a row of similar components works out fine.","A cautionary note on navigation: a formula computing a widget's children has to use the option that tells\n               fm-navig to search \"up only\", because otherwise it will ask for the children being computed and\n               a \"cyclic dependency\" exception will be thrown."], null)], null);
web_mx_quickstart.lesson.speed_plus = (function web_mx_quickstart$lesson$speed_plus(onclick){
return tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("svg",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(64),cljs.core.cst$kw$height,(64),cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$onclick,onclick], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null)),cljs.core.list(cljs.core.cst$sym$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),"+"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27810 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27811 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27811);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("circle",new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,"50%",cljs.core.cst$kw$cy,"50%",cljs.core.cst$kw$r,"40%",cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$fill,cljs.core.cst$kw$transparent], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.gen.make_svg.cljs$core$IFn$_invoke$arity$4("text",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$heavychar,cljs.core.cst$kw$x,"50%",cljs.core.cst$kw$y,"70%",cljs.core.cst$kw$text_DASH_anchor,cljs.core.cst$kw$middle], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"+")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27812 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27813 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27813);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27812);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27810);
}})], 0)));
});
web_mx_quickstart.lesson.handler_mutation = (function web_mx_quickstart$lesson$handler_mutation(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed limit is 55 mph. Your speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42)),cljs.core.cst$kw$display,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display)),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$evt)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27814 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27815 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27815);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The speed limit is 55 mph. Your speed is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27816 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27817 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27817);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27816);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(((tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph) > (55)))?"red":"cyan")], null);
})], 0))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,tiltontec.cell.core.cI((42)),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph"].join('');
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27818 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27819 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27819);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27818);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27814);
}})], 0)));
});
web_mx_quickstart.lesson.ex_handler_mutation = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$builder,cljs.core.cst$kw$exercise,cljs.core.cst$kw$route,cljs.core.cst$kw$title,cljs.core.cst$kw$preamble,cljs.core.cst$kw$comment,cljs.core.cst$kw$code,cljs.core.cst$kw$menu],["tiltontec.example.quick-start.lesson/handler-mutation",web_mx_quickstart.lesson.handler_mutation,"Add custom state <code>throttled</code>, with a formula that computes <code>true</code> if <code>mph</code> is\n   fifty-five or more. Check <code>throttled</code> in the <code>onclick</code> handler before allowing increment.",cljs.core.cst$kw$dag_DASH_mutation,"Random state DAG change",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A widget event handler can mutate any property of any widget. Give it a try."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wrapping <code>mph</code> value in <code>(cI 42)</code>, <code>cI</code> for \"cell Input\",\n    lets us alter <code>mph</code> imperatively.","Here, an event handler navigates via\n    utility <code>fmu</code> (search \"family up\") to the speedometer widget and increments it."], null),"(defn speed-plus [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn handler-mutation []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (span {:class :digi-readout\n           :style (cF {:color (if (> (mget me :mph) 55)\n                                \"red\" \"cyan\")})}\n      {:name    :speedometer\n       ;; <b>If we intend to mutate a property, we must wrap the value in `cI`, short for \"cell input\"</b>\n       :mph     (cI 42)\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  ;; <b>`evt-md` (event model) determines the MX proxy/model associated with a handler event.</b>\n                  ;; <b>'mswap!' performs a Clojure 'swap!' on the ':mph' property of the model.</b>\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))","Random Property<br>Mutation"]);
web_mx_quickstart.lesson.watches = (function web_mx_quickstart$lesson$watches(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27820_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__27820_SHARP_),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42),cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$slot,cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$prior_DASH_val,cljs.core.cst$sym$cell], null),cljs.core.list(cljs.core.cst$sym$prn,cljs.core.cst$kw$watch_DASH_sees_DASH_change,cljs.core.cst$sym$slot,cljs.core.cst$sym$new_DASH_val))),cljs.core.cst$kw$display,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display)),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$evt)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27821 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27822 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27822);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The speed is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27823 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27824 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27824);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27823);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,(function (p1__27820_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.web_mx.gen.evt_md(p1__27820_SHARP_),cljs.core.cst$kw$mph,cljs.core.inc);
})], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((42),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (slot,me__$1,new_val,prior_val,cell){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch_DASH_sees_DASH_change,slot,new_val], 0));
})], 0)),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph"].join('');
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27825 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27826 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27826);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27825);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27821);
}})], 0)));
});
web_mx_quickstart.lesson.ex_watches = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Watch Functions",cljs.core.cst$kw$title,"Ad hoc, on-change \"watch\" functions per property",cljs.core.cst$kw$route,cljs.core.cst$kw$watches,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watches,cljs.core.cst$kw$preamble,"Any property can use an on-change \"watch\" function for side-effects.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:name    :speedometer\n       :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                ;; <b>`cI`, cell input, takes a :watch function</b>\n                                (prn :watch-sees-change slot new-val)))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A watch function fires when a cell value is initialized, and if the value changes. Watches are used to\n   dispatch actions outside the Matrix, if only for logging/debugging, as here. (See the browser console.)","Watches could also write to localStorage, or dispatch XHR requests. Web/MX itself, as an extreme example,\n   does all its dynamic DOM maintenance in a watch functions on HTML attributes.","Watch functions are dispatched non-deterministically, whenever state propagation happens to reach a property.\n              Where controlled coordination of watch actions is required, a custom action handler can be specified."], null)], null);
web_mx_quickstart.lesson.watch_cc = (function web_mx_quickstart$lesson$watch_cc(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed limit is 55 mph. Your speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27827_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__27827_SHARP_),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42),cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$slot,cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$prior_DASH_val,cljs.core.cst$sym$cell], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.cst$sym$new_DASH_val,(55)),cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,"You have triggered the speed governor; auto-resetting to 45 mph."),cljs.core.list(cljs.core.cst$sym$with_DASH_cc,cljs.core.cst$kw$speed_DASH_governor,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,(45)))))),cljs.core.cst$kw$display,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display)),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$evt)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27828 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27829 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27829);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The speed limit is 55 mph. Your speed is now...")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27830 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27831 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27831);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27830);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,(function (p1__27827_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.web_mx.gen.evt_md(p1__27827_SHARP_),cljs.core.cst$kw$mph,cljs.core.inc);
})], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((42),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (slot,me__$1,new_val,prior_val,cell){
if((new_val > (55))){
alert("You have triggered the speed governor; auto-resetting to 45 mph.");

return tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,cljs.core.cst$kw$speed_DASH_governor,(function (opcode,defer_info){
return tiltontec.model.core.mset_BANG_(me__$1,cljs.core.cst$kw$mph,(45));
}));
} else {
return null;
}
})], 0)),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph"].join('');
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27832 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27833 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27833);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27832);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27828);
}})], 0)));
});
web_mx_quickstart.lesson.ex_watch_cc = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Watch Function<br>Mutation",cljs.core.cst$kw$title,"Exception: how watches can mutate a Matrix property",cljs.core.cst$kw$route,cljs.core.cst$kw$watch_DASH_cc,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watch_cc,cljs.core.cst$kw$preamble,"Watch functions must operate outside Matrix state flow, but <i>can</i> enqueue alterations\n    of Matrix state for subsequent execution.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:name    :speedometer\n       :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                (when (> new-val 55)\n                                  (js/alert \"Speed governor auto-resetting to 45 mph.\")\n                                  \n                                  ;; <b>`with-cc` must wrap any DAG mutation by a watch function </b>\n                                  (with-cc :speed-governor\n                                    ;; <b>'mset!' mutates a model property.</b>\n                                    (mset! me :mph 45)))))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try increasing the speed above 55. A watch function will intervene.","In our experience coding with Matrix, we frequently\n   encounter opportunities for the app to usefully update state normally controlled by the user. The macro <code>(with-cc TAG & BODY)</code> schedules the <code>mset!</code> mutation for execution\n              immediately after the current propagation, when state consistency can be guaranteed. TAG is just for debugging."], null)], null);
web_mx_quickstart.lesson.ex_data_integrity = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$title,"Data Integrity",cljs.core.cst$kw$preamble,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix silently maintains an internal DAG at run time by noting when one property formula reads\n    another property. When a property is modified, Matrix uses the derived DAG to ensure\n     the \"data integrity\" invariants listed below."], null),cljs.core.cst$kw$route,cljs.core.cst$kw$data_DASH_integrity,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watch_cc,cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                (when (> new-val 55)\n                                  (with-cc :speed-governor\n                                    (mset! me :mph 45)))))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (p \"Click display to increment.\"))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h3>The Data Integrity Contract</h3> When application code assigns a value to some input cell X, the Matrix engine guarantees:\n              <br><br>&nbsp;&bull; recomputation exactly once of all and only state affected by the change to X, directly or indirectly through some intermediate datapoint. Note that if A depends on B, and B depends on X, when B gets recalculated it may come up with the same value as before. In this case A is not considered to have been affected by the change to X and will not be recomputed;\n              <br><br>&nbsp;&bull; recomputations, when they read other datapoints, will see only values current with the new value of X. Example: if A depends on B and X, and B depends on X, when X changes and A reads B and X to compute a new value, B must return a value recomputed from the new value of X;\n              <br><br>&nbsp;&bull; similarly, client observer (watch) callbacks will see only values current with the new value of X;\n              <br><br>&nbsp;&bull; a corollary: should a client observer MSET! a datapoint Y, all the above will happen with values current with not just X, but also with the value of Y prior to the change to Y; and\n              <br><br>&nbsp;&bull; deferred \u201Cclient\u201D code will see only values current with X and not any values current with some subsequent change to Y enqueued by an observer."], null)], null);
web_mx_quickstart.lesson.cat_fact_uri = "https://catfact.ninja/fact";
web_mx_quickstart.lesson.async_cat = (function web_mx_quickstart$lesson$async_cat(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"intro"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button], null),"Cat Chat"),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27834_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$cat_DASH_fact,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__27834_SHARP_)),cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,true))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$cat_DASH_chat], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$cat_DASH_fact,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,cljs.core.list(cljs.core.cst$sym$cI,false,cljs.core.cst$kw$ephemeral_QMARK_,true),cljs.core.cst$kw$cat_DASH_request,cljs.core.list(cljs.core.cst$sym$cF_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$me,cljs.core.cst$sym$response_DASH_chan,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$response_DASH_chan,cljs.core.list(cljs.core.cst$sym$go,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.cst$sym$response_DASH_chan)], null),cljs.core.list(cljs.core.cst$sym$with_DASH_cc,cljs.core.cst$kw$set_DASH_cat,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response,cljs.core.cst$sym$response))))))], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_),cljs.core.list(cljs.core.cst$sym$client_SLASH_get,cljs.core.cst$sym$cat_DASH_fact_DASH_uri,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)))),cljs.core.cst$kw$cat_DASH_response,cljs.core.list(cljs.core.cst$sym$cI,null)], null),cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$success,cljs.core.cst$sym$response),cljs.core.list(cljs.core.cst$sym$span,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null))),cljs.core.list(cljs.core.cst$sym$str,"Error>  ",cljs.core.list(cljs.core.cst$kw$error_DASH_code,cljs.core.cst$sym$response),": ",cljs.core.list(cljs.core.cst$kw$error_DASH_text,cljs.core.cst$sym$response))),"Click (+) to see a cat fact.")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27835 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27836 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27836);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Cat Chat")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27837 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27838 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27838);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Cat Chat",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27837);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (p1__27834_SHARP_){
return tiltontec.model.core.mset_BANG_((function (){var name__22952__auto__ = cljs.core.cst$kw$cat_DASH_fact;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(p1__27834_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,true);
})),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$cat_DASH_chat], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$cat_DASH_fact,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ephemeral_QMARK_,true], 0)),cljs.core.cst$kw$cat_DASH_request,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (_,me__$1,response_chan,___$1,___$2){
if(cljs.core.truth_(response_chan)){
var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (1))){
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27844__$1,(2),response_chan);
} else {
if((state_val_27845 === (2))){
var inst_27840 = (state_27844[(2)]);
var inst_27841 = (function (){var response = inst_27840;
return (function (opcode,defer_info){
return tiltontec.model.core.mset_BANG_(me__$1,cljs.core.cst$kw$cat_DASH_response,response);
});
})();
var inst_27842 = tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,cljs.core.cst$kw$set_DASH_cat,inst_27841);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27844__$1,inst_27842);
} else {
return null;
}
}
});
return (function() {
var web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__ = null;
var web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____0 = (function (){
var statearr_27846 = [null,null,null,null,null,null,null];
(statearr_27846[(0)] = web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__);

(statearr_27846[(1)] = (1));

return statearr_27846;
});
var web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____1 = (function (state_27844){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_27844);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e27847){if((e27847 instanceof Object)){
var ex__12199__auto__ = e27847;
var statearr_27848_27854 = state_27844;
(statearr_27848_27854[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27844);

return cljs.core.cst$kw$recur;
} else {
throw e27847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__27855 = state_27844;
state_27844 = G__27855;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____0.call(this);
case 1:
return web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____0;
web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto____1;
return web_mx_quickstart$lesson$async_cat_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_27849 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_27849[(6)] = c__12386__auto__);

return statearr_27849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
} else {
return null;
}
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_),cljs.core.list(cljs.core.cst$sym$client_SLASH_get,cljs.core.cst$sym$cat_DASH_fact_DASH_uri,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_))){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(web_mx_quickstart.lesson.cat_fact_uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)], 0));
} else {
return null;
}
})], 0)),cljs.core.cst$kw$cat_DASH_response,tiltontec.cell.core.cI(null)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$success,cljs.core.cst$sym$response),cljs.core.list(cljs.core.cst$sym$span,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null))),cljs.core.list(cljs.core.cst$sym$str,"Error>  ",cljs.core.list(cljs.core.cst$kw$error_DASH_code,cljs.core.cst$sym$response),": ",cljs.core.list(cljs.core.cst$kw$error_DASH_text,cljs.core.cst$sym$response))),"Click (+) to see a cat fact."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27850 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27851 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27851);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var temp__5802__auto__ = tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$cat_DASH_response);
if(cljs.core.truth_(temp__5802__auto__)){
var response = temp__5802__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(response))){
return tiltontec.web_mx.gen.make_tag("span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27852 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27853 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27853);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27852);
}})], 0)));
} else {
return ["Error>  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error_DASH_code.cljs$core$IFn$_invoke$arity$1(response)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(response))].join('');
}
} else {
return "Click (+) to see a cat fact.";
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27850);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27835);
}})], 0)));
});
web_mx_quickstart.lesson.ex_async_cat = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Async Events",cljs.core.cst$kw$title,"Async processing = normal mutation",cljs.core.cst$kw$route,cljs.core.cst$kw$cat_DASH_chat,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.async_cat,cljs.core.cst$kw$preamble,"An async response is just another \"input\" property mutation.",cljs.core.cst$kw$code,"(div {:class \"intro\"}\n    (span {:class :push-button}\n      \"Cat Chat\")\n    (speed-plus #(mset! (fmu :cat-fact (evt-md %)) :get-new-fact? true))\n    (div {:class :cat-chat}\n      {:name          :cat-fact\n       :get-new-fact? (cI false\n\n                        ;; <b>The \"plus\" widget will set this property repeatedly\n                        ;; to the same value, 'true'. Declaring it \"ephemeral?\" means\n                        ;; it will fire each time that same value is set.</b>\n                        :ephemeral? true)\n       :cat-request   (cF+\n                        ;; <b>`cF+`, or \"cF plus\", accepts cell options</b>\n                        [:watch (fn [_ me response-chan _ _]\n                                  (when response-chan\n                                    (go (let [response (&lt;! response-chan)]\n\n                                          ;; <b>whenever the XHR responds,</b>\n                                          ;; <b>we just `mset!` the \"waiting\" input cell</b>\n                                          (with-cc :set-cat\n                                            (mset! me :cat-response response))))))]\n                        (when (mget me :get-new-fact?)\n                          (client/get cat-fact-uri {:with-credentials? false})))\n       :cat-response  (cI nil)}\n\n      (if-let [response (mget me :cat-response)]\n        (if (:success response)\n          (span (get-in response [:body :fact]))\n          (str \"Error>  \" (:error-code response)\n            \": \" (:error-text response)))\n        \"Click (+) to see a chat fact.\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>cat-request</code> property creates and dispatches an XHR via <code>client/get</code>, producing a core.async channel\n   to receive the response. Its watch function awaits the async response and feeds it into a conventional input property.","We handle async events by directing them to input Cells purpose-created to receive their output, where\n              Matrix handles them like any other input. With a different XHR library not using core.async, we\n              would use a similar approach with response handlers.","We used a special <code>:ephemeral?</code> qualifier for <code>:get-new-fact?</code> because\n              it works like an event, something that happens and is over.\n              Ephemeral properties revert to nil after propagating, without propagating that change."], null)], null);
web_mx_quickstart.lesson.in_review = (function web_mx_quickstart$lesson$in_review(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$excess,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer),cljs.core.cst$kw$mph),(55))], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.list(cljs.core.cst$sym$Math_SLASH_abs,cljs.core.cst$sym$excess),cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$excess)))),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42)),cljs.core.cst$kw$air_DASH_drag,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$xi,cljs.core.list(cljs.core.cst$sym$atom,null)], null),cljs.core.list(cljs.core.cst$sym$cF_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,cljs.core.cst$sym$new,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$xi,cljs.core.cst$sym$new))], null),cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$try,cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,cljs.core.cst$sym$_STAR_,0.98),cljs.core.list(cljs.core.cst$sym$catch,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$e,cljs.core.list(cljs.core.cst$sym$js_SLASH_clearInterval,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$xi))))),(1000))))], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"~8,1f mph",cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph))),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__27856_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__27856_SHARP_)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27857 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27858 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27858);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$excess,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer),cljs.core.cst$kw$mph),(55))], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.list(cljs.core.cst$sym$Math_SLASH_abs,cljs.core.cst$sym$excess),cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$excess))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27859 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27860 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27860);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var excess = (tiltontec.model.core.mget((function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph) - (55));
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.abs(excess),(excess < (0))], 0));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27859);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(((tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph) > (55)))?"red":"cyan")], null);
})], 0))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,tiltontec.cell.core.cI((42)),cljs.core.cst$kw$air_DASH_drag,(function (){var xi = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (_,___$1,new$,___$2,___$3){
return cljs.core.reset_BANG_(xi,new$);
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$try,cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,cljs.core.cst$sym$_STAR_,0.98),cljs.core.list(cljs.core.cst$sym$catch,cljs.core.cst$sym$js_SLASH_Error,cljs.core.cst$sym$e,cljs.core.list(cljs.core.cst$sym$js_SLASH_clearInterval,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$xi))))),(1000))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return setInterval((function (){
try{return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(me__$1,cljs.core.cst$kw$mph,cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.98], 0));
}catch (e27861){if((e27861 instanceof Error)){
var e = e27861;
return clearInterval(cljs.core.deref(xi));
} else {
throw e27861;

}
}}),(1000));
})], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"~8,1f mph",cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__27862 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__27863 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__27863);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~8,1f mph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph)], 0)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27862);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (p1__27856_SHARP_){
return tiltontec.model.core.mswap_BANG_((function (){var name__22952__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__22951__22953__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__22952__auto__,tiltontec.model.core.mget_QMARK_(p1__22951__22953__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(p1__27856_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__27857);
}})], 0)));
});
web_mx_quickstart.lesson.ex_in_review = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$menu,"Review",cljs.core.cst$kw$title,"Review",cljs.core.cst$kw$route,cljs.core.cst$kw$in_DASH_review,cljs.core.cst$kw$builder,web_mx_quickstart.lesson.in_review,cljs.core.cst$kw$preamble,"Our closing example reprises all the key Web/MX features.",cljs.core.cst$kw$code,"(defn speed-plus [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(div {:class :intro}\n    (h2 (let [excess (- (mget (fmu :speedometer) :mph) 55)]\n          (pp/cl-format nil \"The speed is ~8,1f mph ~:[over~;under~] the speed limit.\"\n            (Math/abs excess)  (neg? excess) )))\n    (span {:class   :digi-readout\n           :style   (cF {:color (if (> (mget me :mph) 55)\n                                  \"red\" \"cyan\")})}\n      {:name :speedometer\n       :mph     (cI 42)\n       :air-drag (cF (js/setInterval\n                       #(mswap! me :mph * 0.98) 1000))}\n      (pp/cl-format nil  \"~8,1f mph\" (mget me :mph)))\n    (speed-plus #(mswap! (fmu :speedometer (evt-md %)) :mph inc)))",cljs.core.cst$kw$comment,"\n   <ul type=circle>\n   <li>it looks and works like standard HTML, SVG, CSS, and CLJS;</li>\n   <li>all state dependencies are property to property;</li>\n   <li>the <code>H2</code> computes its text by navigating to the speedometer widget to read the <code>mph</code> value;</li>\n   <li>the <code>(speed-plus ...)</code> button navigates to the speedometer to mutate <code>mph</code> value;</li>\n   <li>the <code>air-drag</code> async interval mutates the DAG, reducing the <code>mph</code>;</li>\n   <li>function <code>speed-plus</code> demonstrates reusable composition.</li>\n   </ul>"], null);
web_mx_quickstart.lesson.ex_tl_dr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([web_mx_quickstart.lesson.ex_in_review,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Intro",cljs.core.cst$kw$route,cljs.core.cst$kw$intro,cljs.core.cst$kw$title,"Web/MX: Simplicity. Power. Fun.",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.in_review,cljs.core.cst$kw$preamble,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<blockquote>Standard HTML + transparent reactivity, all the way down.\n                  </blockquote>\n\n                  With <a target=_blank href='https://github.com/kennytilton/web-mx'>Web/MX</a>, we build sophisticated interfaces from just a few ingredients:<br>\n                <ul type=circle>\n                <li>stick to <a target=_blank href='https://developer.mozilla.org/en-US/docs/Web/HTML'>standard</a> HTML, SVG, and CSS elements&hellip;</li>\n                <li>&hellip;but allow them ad hoc properties;</li>\n                <li>bring properties alive with reactive formulas;</li>\n                <li>let formulas <i>read</i> arbitrary other properties;</li>\n                <li>let async handlers <i>change</i> any properties;</li>\n                <li>support <i>watch</i> functions on properties, for side effects;</li>\n                <li>make it all declarative and transparent; and</li>\n                <li>because this is so much fun, create reactive wrappers for routing, XHR, localStorage&mdash;as much\n                as we like.</li>\n                 </ul>\n                 No VDOM, pre-processor, compiler, special view functions, setState, subscribe/notify, hooks,\n                 refs, or separate store.\n                 <br><br>Just transparent, fine-grained reactivity and standard HTML, slowing only to wire up\n                 existing, non-reactive libraries.","Minimalist, but it scales:\n                <li>a simulated <a target=_blank href=\"http://tiltonsalgebra.com/#\">private Algebra tutor</a>;</li>\n                <li>a browser for the monthly <a target=_blank\n                href=\"https://kennytilton.github.io/whoishiring/\">AskHN: Who's Hiring?</a> question; and</li>\n                <li>to a lesser degree, this <a target=_blank href=\"https://github.com/kennytilton/kennytilton.github.io/tree/master/web-mx-quickstart\">Quick Start</a>\n                and the classic <a target=_blank and href='https://kennytilton.github.io/TodoFRP/'>TodoMVC.</li>","In the remaining panels, we will expand on each idea above, most of which are manifested below.<br>&nbsp;"], null),cljs.core.cst$kw$comment,null], null)], 0));
