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

var _STAR_parent_STAR__orig_val__33830 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33831 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33831);

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

var _STAR_parent_STAR__orig_val__33832 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33833 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33833);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33832);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33834 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33835 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33835);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33834);
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

var _STAR_parent_STAR__orig_val__33836 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33837 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33837);

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

var _STAR_parent_STAR__orig_val__33838 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33839 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33839);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33838);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33836);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33830);
}})], 0)));
});
web_mx_quickstart.lesson.ex_just_html = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$menu,"Just HTML",cljs.core.cst$kw$title,"It's Just HTML",cljs.core.cst$kw$ns,"tiltontec.example.quick-start.lesson/just-html",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.just_html,cljs.core.cst$kw$preamble,"To begin with, we just write HTML, SVG, and CSS, each thinly disguised as CLJS.",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Web/MX introduces no framework of its own, it just manages the DOM.\n    Aside from CLJS->JS, no preprocessor is involved, and the stability of CLJS makes this one exception\n    a net win.","Matrix just manages the state."], null),cljs.core.cst$kw$code,"(div {:class :intro}\n    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>\n    ;; <b>become HTML element attribute-values, with keywords => strings</b>\n\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    ;; <b>^^ arguments following the optional maps become children, or text content</b>\n\n    (svg {:width   64 :height 64\n          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>\n          :cursor :pointer\n          :onclick #(js/alert \"Increment Feature Not Yet Implemented\")}\n      (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n               :stroke \"orange\" :stroke-width 5\n               :fill   :transparent})\n      (text {:class       :heavychar\n             :x \"50%\" :y \"70%\"\n             :text-anchor :middle} \"+\")))",cljs.core.cst$kw$exercise,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Feel free to experiment with other HTML or SVG tags.","Where HTML has <code>&lt;tag attributes*> children*&lt;/tag></code><br>...Web/MX has: <code>(tag {attributes*} children*)</code>.","If you find some HTML that does not translate to Web/MX, please send a failing example along."], null)], null);
web_mx_quickstart.lesson.and_cljs = (function web_mx_quickstart$lesson$and_cljs(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The count is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"digi-readout"], null),"42"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opcode], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$opcode)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,cljs.core.list(cljs.core.cst$sym$str,"Opcode \"",cljs.core.cst$sym$opcode,"\" not yet implemented")))], null),cljs.core.cst$sym$opcode))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33840 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33841 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33841);

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

var _STAR_parent_STAR__orig_val__33842 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33843 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33843);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33842);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"digi-readout"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33844 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33845 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33845);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33844);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opcode], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$opcode)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,cljs.core.list(cljs.core.cst$sym$str,"Opcode \"",cljs.core.cst$sym$opcode,"\" not yet implemented")))], null),cljs.core.cst$sym$opcode))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33846 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33847 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33847);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opcode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(opcode))){
return tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$onclick,(function (){
return alert(["Opcode \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),"\" not yet implemented"].join(''));
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$opcode)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33848 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33849 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33849);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,opcode,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33848);
}})], 0)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33846);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33840);
}})], 0)));
});
web_mx_quickstart.lesson.ex_and_cljs = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"...and CLJS",cljs.core.cst$kw$title,"...and CLJS",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.and_cljs,cljs.core.cst$kw$preamble,"It is just HTML <i>and</i> CLJS.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The count is now...\")\n    (span {:class \"digi-readout\"} \"42\")\n    (div {:style {:display :flex\n                  :gap     \"1em\"}}\n      ;; <b>children, below built into a vector, are automatically flattened, with any nils removed</b>\n      (mapv (fn [opcode]\n              (when (= 1 (count opcode))\n                (button {:class   :push-button\n                         :onclick #(js/alert (str \"Opcode \\\"\" opcode \"\\\" not yet implemented\"))}\n                  opcode)))\n        [\"-\" \"=\" \"+\" \"boom\"])))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["In fact, all this code is CLJS. For example, DIV is a CLJS macro that returns\n    a Clojure <i>proxy</i> for a DOM DIV. Proxies are not VDOM. Proxies are long-lived models that manage their DOM incarnations as events unfold."], null)], null);
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

var _STAR_parent_STAR__orig_val__33850 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33851 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33851);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,label,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33850);
}})], 0)));
});
web_mx_quickstart.lesson.math_keypad = (function web_mx_quickstart$lesson$math_keypad(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33855 = arguments.length;
var i__4737__auto___33856 = (0);
while(true){
if((i__4737__auto___33856 < len__4736__auto___33855)){
args__4742__auto__.push((arguments[i__4737__auto___33856]));

var G__33857 = (i__4737__auto___33856 + (1));
i__4737__auto___33856 = G__33857;
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

var _STAR_parent_STAR__orig_val__33853 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33854 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33854);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (opcode){
return web_mx_quickstart.lesson.opcode_button(opcode,(function (){
return alert("Feature Not Yet Implemented");
}));
}),opcodes),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33853);
}})], 0)));
}));

(web_mx_quickstart.lesson.math_keypad.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(web_mx_quickstart.lesson.math_keypad.cljs$lang$applyTo = (function (seq33852){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33852));
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

var _STAR_parent_STAR__orig_val__33858 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33859 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33859);

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

var _STAR_parent_STAR__orig_val__33860 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33861 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33861);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33860);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"42")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33862 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33863 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33863);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33862);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-","=","+"], 0)),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33858);
}})], 0)));
});
web_mx_quickstart.lesson.ex_html_composition = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Composable<br>Widgets",cljs.core.cst$kw$title,"Functional GUI Composition",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.html_composition,cljs.core.cst$kw$preamble,"Because it is all CLJS, we can move sub-structure into functions.",cljs.core.cst$kw$code,"(defn opcode-button [label onclick]\n  (button {:class   :push-button\n           :onclick onclick}\n    label))\n\n(defn math-keypad [& opcodes]\n  (div {:style {:display :flex\n                :gap     \"1em\"}}\n    (mapv (fn [opcode]\n            (opcode-button opcode\n              #(js/alert \"Feature Not Yet Implemented\")))\n      opcodes)))\n\n(defn html-composition []\n  (div {:class :intro}\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    (math-keypad \"-\" \"=\" \"+\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["HTML composition becomes function composition. Always nice."], null)], null);
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

var _STAR_parent_STAR__orig_val__33864 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33865 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33865);

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

var _STAR_parent_STAR__orig_val__33866 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33867 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33867);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33866);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mph,(42)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33868 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33869 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33869);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph"].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33868);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33864);
}})], 0)));
});
web_mx_quickstart.lesson.ex_custom_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"In-place<br>State",cljs.core.cst$kw$title,"\"In-place\" widget state, property by property",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.custom_state,cljs.core.cst$kw$preamble,"Widgets define local state as needed.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      ;; <b>An optional second map is for custom state.</b>\n      {:mph  42}\n\n      ;; <b>below: mget, short for \"model-get\", is the MX \"getter\" for model (object) properties</b>\n      ;; <b>n.b. Tag children, even plain strings, always start out in an auto-genned formula.</b>\n      (str (mget me :mph) \" mph\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag macros take an optional second map of custom widget state. The map for custom state is identified\n   positionally, so an empty first map must be coded even if no HTML attributes need specification.","Here, a generic <code>span</code> embodying a speedometer thinks it might usefully have a <code>{:mph 42}</code> property.\n   We will put that to use next.","`mget` can be used anywhere. Inside a formula, it transparently subscribes to the property being read.","Big picture: Matrix follows the <a href=https://en.wikipedia.org/wiki/Prototype-based_programming target=\"_blank\">prototype model</a>,\n\n                     so generic tags can be re-used without subclassing."], null)], null);
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

var _STAR_parent_STAR__orig_val__33870 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33871 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33871);

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

var _STAR_parent_STAR__orig_val__33872 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33873 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33873);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33872);
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

var _STAR_parent_STAR__orig_val__33874 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33875 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33875);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$speedo_DASH_text),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33874);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33870);
}})], 0)));
});
web_mx_quickstart.lesson.ex_derived_state = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Functional<br>Properties",cljs.core.cst$kw$title,"Functional, computed, reactive properties",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.derived_state,cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      {:name :speedometer\n       :mph         65\n       \n       ;; <b>'cF', or \"cell formula\", defines a computed/derived property.</b>\n       ;; <b>When properties, such as 'mph', are read by a formula, the formula is re-run.</b>\n       :too-fast?   (cF (> (mget me :mph) 55))\n       :speedo-text (cF (str (mget me :mph) \" mph\"\n                          (when (mget me :too-fast?) \"Slow down\")))}\n      (mget me :speedo-text)))",cljs.core.cst$kw$preamble,"A property can be expressed as a function, or \"formula\", of other properties.",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>too-fast?</code> property is fed by the reactive formula <code>(cF (> (mget me :mph) 55))</code>.\n    When <code>mph</code> changes, <code>too-fast?</code> will be recomputed, then <code>speedo-text</code>.","Interdependent properties form the same coherent, one-way graph (DAG) as found in Flux derivatives,\n              but without us doing anything; Matrix internals identify the DAG for us.","D/X note: different instances can have different formulas for the same property,\n              extending the \"prototype\" reusability win.</li>"], null)], null);
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

var _STAR_parent_STAR__orig_val__33876 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33877 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33877);

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
var speedo = (function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
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

var _STAR_parent_STAR__orig_val__33878 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33879 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33879);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$text),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33878);
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

var _STAR_parent_STAR__orig_val__33880 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33881 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33881);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph))," mph",(cljs.core.truth_(tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$too_DASH_fast_QMARK_))?"<br>Slow down":null)].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33880);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33876);
}})], 0)));
});
web_mx_quickstart.lesson.ex_navigation = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Random State<br>Access",cljs.core.cst$kw$title,"Random state access",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.navigation,cljs.core.cst$kw$preamble,"A widget property can retrieve state as needed from any other component.",cljs.core.cst$kw$code,"(div {:class :intro}\n    {:name        :speed-zone\n     :speed-limit 55}\n    (h2 {}\n      ;; <b>`fasc` searches up the parent chain only</b>\n      {:text (cF (let [zone (fasc :speed-zone me)\n                       speedo (fmu :speedometer)]\n                   (pp/cl-format nil \"The speed is now ~a mph over the speed limit.\"\n                     (- (mget speedo :mph) (mget zone :speed-limit)))))}\n      (mget me :text))\n    (span {:class :digi-readout}\n      {:name      :speedometer\n       :mph       60\n       :too-fast? (cF (> (mget me :mph)\n                        (mget (fasc :speed-zone me) :speed-limit)))}\n      (str (mget me :mph) \" mph\"\n        (when (mget me :too-fast?) \"Slow down\"))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The headline needs the speed limit and current speed for its text. The speedometer readout needs\n     the speed limit, to decide its text color.","We retrieve values from named other widgets, using navigation\n     utilities such as <code>fasc</code> and <code>fmu</code> to avoid hard-coding paths.","About navigation: MX models are like the DOM; every element but the root has one parent and knows that parent as a fixed property,\n               and everyone has zero or more children. So should any convoluted organization need to be navigated, a dev can write their own\n                bespoke navigation code.","Second, the provided fm-navig utility takes a \"test\" function as its first parameter, which by default\n              tests the :name of every node for a match with the sought name. Here again a dev can write a test function\n              of arbitrary complexity if needed.","Just to fill in the navigation picture a bit, <code>fm-navig</code> by default does a depth-first, left-right\n               search starting at the provided start node, recursing up to the start's parent if necessary. So search for\n               a name benefits from a natural scoping, and duplicate names arising from a row of similar components works out fine.","A cautionary note on navigation: a formula computing a widget's children has to use the option that tells\n               fm-navig to search \"up only\", because otherwise it will ask for the children being computed and\n               a \"cyclic dependency\" exception will be thrown."], null)], null);
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

var _STAR_parent_STAR__orig_val__33882 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33883 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33883);

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

var _STAR_parent_STAR__orig_val__33884 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33885 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33885);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33884);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33882);
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

var _STAR_parent_STAR__orig_val__33886 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33887 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33887);

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

var _STAR_parent_STAR__orig_val__33888 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33889 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33889);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33888);
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

var _STAR_parent_STAR__orig_val__33890 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33891 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33891);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33890);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33886);
}})], 0)));
});
web_mx_quickstart.lesson.ex_handler_mutation = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$menu,"Random State<br>Mutation",cljs.core.cst$kw$title,"Random state DAG change",cljs.core.cst$kw$ns,"tiltontec.example.quick-start.lesson/handler-mutation",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.handler_mutation,cljs.core.cst$kw$preamble,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A widget event handler can mutate any property of any widget. (This button works.)"], null),cljs.core.cst$kw$code,"(defn speed-plus [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn handler-mutation []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (span {:class :digi-readout\n           :style (cF {:color (if (> (mget me :mph) 55)\n                                \"red\" \"cyan\")})}\n      {:name    :speedometer\n       ;; <b>If we intend to mutate a property, we must wrap the value in `cI`, short for \"cell input\"</b>\n       :mph     (cI 42)\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  ;; <b>`evt-md` (event model) determines the MX proxy/model associated with a handler event.</b>\n                  ;; <b>'mswap!' performs a Clojure 'swap!' on the ':mph' property of the model.</b>\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))",cljs.core.cst$kw$exercise,"Add custom state <code>throttled</code>, with a formula that computes <code>true</code> if <code>mph</code> is\n   fifty-five or more. Check <code>throttled</code> in the <code>onclick</code> handler before allowing increment.",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wrapping <code>mph</code> value in <code>(cI 42)</code>, <code>cI</code> for \"cell Input\",\n    lets us mutate <code>mph</code> imperatively.","Here, an event handler navigates via\n    utility <code>fmu</code> (search \"family up\") to the speedometer widget and mutates it."], null)], null);
web_mx_quickstart.lesson.watches = (function web_mx_quickstart$lesson$watches(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__33892_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__33892_SHARP_),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42),cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$slot,cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$prior_DASH_val,cljs.core.cst$sym$cell], null),cljs.core.list(cljs.core.cst$sym$prn,cljs.core.cst$kw$watch_DASH_sees_DASH_change,cljs.core.cst$sym$slot,cljs.core.cst$sym$new_DASH_val))),cljs.core.cst$kw$display,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display)),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$evt)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33893 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33894 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33894);

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

var _STAR_parent_STAR__orig_val__33895 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33896 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33896);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33895);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,(function (p1__33892_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.web_mx.gen.evt_md(p1__33892_SHARP_),cljs.core.cst$kw$mph,cljs.core.inc);
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

var _STAR_parent_STAR__orig_val__33897 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33898 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33898);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33897);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33893);
}})], 0)));
});
web_mx_quickstart.lesson.ex_watches = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"State Watch<br>Functions",cljs.core.cst$kw$title,"\"On-change\" watch functions",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watches,cljs.core.cst$kw$preamble,"Any input or computed cell can specify an on-change 'watch' function to execute side-effects outside Matrix dataflow.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:name    :speedometer\n       :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                ;; <b>`cI`, cell input, takes a :watch option for an \"on change\" function</b>\n                                (prn :watch-sees-change slot new-val)))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A watch function fires when a cell value is initialized, and if the value changes. Watches are used to\n   dispatch actions outside the Matrix, if only for logging/debugging, as here. (See the browser console.)","The watch function in this example simply logs the new value. Other watches could write to\n              localStorage or dispatch XHR requests. Web/MX does all its dynamic DOM maintenance in watch functions."], null)], null);
web_mx_quickstart.lesson.watch_cc = (function web_mx_quickstart$lesson$watch_cc(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed limit is 55 mph. Your speed is now..."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__33899_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__33899_SHARP_),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42),cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$slot,cljs.core.cst$sym$me,cljs.core.cst$sym$new_DASH_val,cljs.core.cst$sym$prior_DASH_val,cljs.core.cst$sym$cell], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.cst$sym$new_DASH_val,(55)),cljs.core.list(cljs.core.cst$sym$js_SLASH_alert,"You have triggered the speed governor; auto-resetting to 45 mph."),cljs.core.list(cljs.core.cst$sym$with_DASH_cc,cljs.core.cst$kw$speed_DASH_governor,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,(45)))))),cljs.core.cst$kw$display,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)," mph"))], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display)),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$evt)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33900 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33901 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33901);

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

var _STAR_parent_STAR__orig_val__33902 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33903 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33903);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33902);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$onclick,(function (p1__33899_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.web_mx.gen.evt_md(p1__33899_SHARP_),cljs.core.cst$kw$mph,cljs.core.inc);
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

var _STAR_parent_STAR__orig_val__33904 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33905 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33905);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33904);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (evt){
return tiltontec.model.core.mswap_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(evt),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33900);
}})], 0)));
});
web_mx_quickstart.lesson.ex_watch_cc = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Watch State<br>Mutation",cljs.core.cst$kw$title,"Exception: how watches can mutate state",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watch_cc,cljs.core.cst$kw$preamble,"Watch functions must operate outside Matrix state flow, but <i>can</i> enqueue alterations\n    of Matrix state for execution.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:name    :speedometer\n       :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                (when (> new-val 55)\n                                  (js/alert \"You have triggered the speed governor; auto-resetting to 45 mph.\")\n                                  \n                                  ;; <b>`with-cc` must wrap any DAG mutation by a watch function </b>\n                                  (with-cc :speed-governor\n                                    ;; <b>'mset!', like its alias 'mreset!, performs a 'reset!' of a model property.</b>\n                                    (mset! me :mph 45)))))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (speed-plus (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try increasing the speed above 55. A watch function will intervene.","In our experience coding with Matrix, we frequently\n   encounter opportunities for the app to usefully update state normally controlled by the user. The macro <code>(with-cc TAG & BODY)</code> schedules the <code>mset!</code> mutation for execution\n              immediately after the current propagation, when state consistency can be guaranteed. TAG is just for debugging."], null)], null);
web_mx_quickstart.lesson.throttle_button = (function web_mx_quickstart$lesson$throttle_button(p__33906){
var vec__33907 = p__33906;
var opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33907,(0),null);
var factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33907,(1),null);
var setting = vec__33907;
return tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$current_DASH_opcode], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$throttle),cljs.core.cst$kw$setting)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"96px",cljs.core.cst$kw$background,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$opcode,cljs.core.cst$sym$current_DASH_opcode),"cyan","linen"),cljs.core.cst$kw$font_DASH_size,"18px"], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var vec__33910 = tiltontec.model.core.mget((function (){var name__17145__auto__ = cljs.core.cst$kw$throttle;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$setting);
var current_opcode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"96px",cljs.core.cst$kw$background,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opcode,current_opcode))?"cyan":"linen"),cljs.core.cst$kw$font_DASH_size,"18px"], null);
})], 0)),cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$throttle),cljs.core.cst$kw$setting,cljs.core.cst$sym$setting))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return (function (){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$throttle;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$setting,setting);
});
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$opcode))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33913 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33914 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33914);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.name(opcode),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33913);
}})], 0)));
});
web_mx_quickstart.lesson.speedometer = (function web_mx_quickstart$lesson$speedometer(){
return tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_width,"5em",cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_width,"5em",cljs.core.cst$kw$color,(((tiltontec.model.core.mget(me,cljs.core.cst$kw$mph) > (55)))?"red":"cyan")], null);
})], 0))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mph,tiltontec.cell.core.cI((42)),cljs.core.cst$kw$time,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$mph_DASH_now,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),cljs.core.cst$sym$throttle,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$throttle)], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$throttle,cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$throttle,cljs.core.cst$kw$setting)))))),(1000))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return setInterval((function (){
var mph_now = tiltontec.model.core.mget(me,cljs.core.cst$kw$mph);
var throttle = (function (){var name__17145__auto__ = cljs.core.cst$kw$throttle;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})();
if(cljs.core.truth_(throttle)){
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(me,cljs.core.cst$kw$mph,cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(tiltontec.model.core.mget(throttle,cljs.core.cst$kw$setting))], 0));
} else {
return null;
}
}),(1000));
})], 0)),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"~8,1f mph",cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~8,1f mph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.model.core.mget(me,cljs.core.cst$kw$mph)], 0));
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$display))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33915 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33916 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33916);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.model.core.mget(me,cljs.core.cst$kw$display),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33915);
}})], 0)));
});
web_mx_quickstart.lesson.async_throttle = (function web_mx_quickstart$lesson$async_throttle(){
var settings = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maintain,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coast,.98], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$brake_DASH_gently,.8], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$panic_DASH_stop,.60], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speed_DASH_up,1.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$floor_DASH_it,1.3], null)], null);
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"The speed is now..."),cljs.core.list(cljs.core.cst$sym$speedometer),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$throttle,cljs.core.cst$kw$setting,cljs.core.list(cljs.core.cst$sym$cI,cljs.core.list(cljs.core.cst$sym$second,cljs.core.cst$sym$settings))], null),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.cst$sym$throttle_DASH_button,cljs.core.cst$sym$settings)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33917 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33918 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33918);

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

var _STAR_parent_STAR__orig_val__33919 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33920 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33920);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33919);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedometer(),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$throttle,cljs.core.cst$kw$setting,tiltontec.cell.core.cI(cljs.core.second(settings))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.cst$sym$throttle_DASH_button,cljs.core.cst$sym$settings))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33921 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33922 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33922);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(web_mx_quickstart.lesson.throttle_button,settings),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33921);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33917);
}})], 0)));
});
web_mx_quickstart.lesson.ex_async_throttle = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Async mutation",cljs.core.cst$kw$title,"Handling async",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.async_throttle,cljs.core.cst$kw$preamble,"Async processing can be challenging, but in Matrix are just mutations of normal \"input\" properties.",cljs.core.cst$kw$code,"(defn throttle-button [[opcode factor :as setting]]\n  (button {:class   :push-button\n           :style   (cF (let [[current-opcode] (mget (fmu :throttle) :setting)]\n                          {:min-width  \"96px\"\n                           :background (if (= opcode current-opcode)\n                                         \"cyan\" \"linen\")\n                           :font-size  \"18px\"}))\n           :onclick (cF #(mset! (fmu :throttle) :setting setting))}\n    (name opcode)))\n\n(defn speedometer []\n  (span {:class :digi-readout\n         :style (cF {:color (if (> (mget me :mph) 55)\n                              \"red\" \"cyan\")})}\n    {:mph     (cI 42)\n     :time    (cF (js/setInterval\n                    (fn [] (let [mph-now (mget me :mph)]\n                             (mswap! me :mph *\n                               (second (mdv! :throttle :setting)))))\n                    1000))\n     :display (cF (pp/cl-format nil \"~8,1f mph\" (mget me :mph)))}\n    (mget me :display)))\n\n(defn async-throttle []\n  (let [settings [[:maintain 1] [:coast .95] [:brake-gently .8] [:panic-stop .60]\n                  [:speed-up 1.1] [:floor-it 1.3]]]\n    (div {:class :intro}\n      (h2 \"The speed is now...\")\n      (speedometer)\n      (div {:style {:display :flex\n                    :gap     \"1em\"}}\n        {:name    :throttle\n         :setting (cI (second settings))}\n        (mapv throttle-button settings)))))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We handle async events by directing them to input Cells."], null)], null);
web_mx_quickstart.lesson.ex_data_integrity = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Data Integrity",cljs.core.cst$kw$preamble,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix silently maintains an internal DAG at run time by noting when one property formula reads\n    another property. When a property is modified, Matrix uses the derived DAG to ensure\n     the \"data integrity\" invariants listed below."], null),cljs.core.cst$kw$builder,web_mx_quickstart.lesson.watch_cc,cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class   :digi-readout\n           :onclick #(mswap! (evt-md %) :mph inc)}\n      {:mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                                (when (> new-val 55)\n                                  (with-cc :speed-governor\n                                    (mset! me :mph 45)))))\n       :display (cF (str (mget me :mph) \" mph\"))}\n      (mget me :display))\n    (p \"Click display to increment.\"))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h3>The Data Integrity Contract</h3> When application code assigns a value to some input cell X, the Matrix engine guarantees:\n              <br><br>&nbsp;&bull; recomputation exactly once of all and only state affected by the change to X, directly or indirectly through some intermediate datapoint. Note that if A depends on B, and B depends on X, when B gets recalculated it may come up with the same value as before. In this case A is not considered to have been affected by the change to X and will not be recomputed;\n              <br><br>&nbsp;&bull; recomputations, when they read other datapoints, will see only values current with the new value of X. Example: if A depends on B and X, and B depends on X, when X changes and A reads B and X to compute a new value, B must return a value recomputed from the new value of X;\n              <br><br>&nbsp;&bull; similarly, client observer callbacks will see only values current with the new value of X;\n              <br><br>&nbsp;&bull; a corollary: should a client observer MSET! a datapoint Y, all the above will happen with values current with not just X, but also with the value of Y prior to the change to Y; and\n              <br><br>&nbsp;&bull; deferred \u201Cclient\u201D code will see only values current with X and not any values current with some subsequent change to Y enqueued by an observer."], null)], null);
web_mx_quickstart.lesson.cat_fact_uri = "https://catfact.ninja/fact";
web_mx_quickstart.lesson.async_cat = (function web_mx_quickstart$lesson$async_cat(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"intro"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$push_DASH_button], null),"Cat Chat"),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__33923_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$cat_DASH_fact,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__33923_SHARP_)),cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,true))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$cat_DASH_chat], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$cat_DASH_fact,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,cljs.core.list(cljs.core.cst$sym$cI,false,cljs.core.cst$kw$ephemeral_QMARK_,true),cljs.core.cst$kw$cat_DASH_request,cljs.core.list(cljs.core.cst$sym$cF_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$watch,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$me,cljs.core.cst$sym$response_DASH_chan,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$response_DASH_chan,cljs.core.list(cljs.core.cst$sym$go,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$_LT__BANG_,cljs.core.cst$sym$response_DASH_chan)], null),cljs.core.list(cljs.core.cst$sym$with_DASH_cc,cljs.core.cst$kw$set_DASH_cat,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response,cljs.core.cst$sym$response))))))], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_),cljs.core.list(cljs.core.cst$sym$client_SLASH_get,cljs.core.cst$sym$cat_DASH_fact_DASH_uri,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false], null)))),cljs.core.cst$kw$cat_DASH_response,cljs.core.list(cljs.core.cst$sym$cI,null)], null),cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$success,cljs.core.cst$sym$response),cljs.core.list(cljs.core.cst$sym$span,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null))),cljs.core.list(cljs.core.cst$sym$str,"Error>  ",cljs.core.list(cljs.core.cst$kw$error_DASH_code,cljs.core.cst$sym$response),": ",cljs.core.list(cljs.core.cst$kw$error_DASH_text,cljs.core.cst$sym$response))),"Click (+) to see a chat fact.")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33924 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33925 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33925);

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

var _STAR_parent_STAR__orig_val__33926 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33927 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33927);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Cat Chat",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33926);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (p1__33923_SHARP_){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$cat_DASH_fact;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(p1__33923_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,true);
})),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$cat_DASH_chat], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$cat_DASH_fact,cljs.core.cst$kw$get_DASH_new_DASH_fact_QMARK_,tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ephemeral_QMARK_,true], 0)),cljs.core.cst$kw$cat_DASH_request,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (_,me__$1,response_chan,___$1,___$2){
if(cljs.core.truth_(response_chan)){
var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_33933){
var state_val_33934 = (state_33933[(1)]);
if((state_val_33934 === (1))){
var state_33933__$1 = state_33933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33933__$1,(2),response_chan);
} else {
if((state_val_33934 === (2))){
var inst_33929 = (state_33933[(2)]);
var inst_33930 = (function (){var response = inst_33929;
return (function (opcode,defer_info){
return tiltontec.model.core.mset_BANG_(me__$1,cljs.core.cst$kw$cat_DASH_response,response);
});
})();
var inst_33931 = tiltontec.cell.integrity.call_with_integrity(cljs.core.cst$kw$change,cljs.core.cst$kw$set_DASH_cat,inst_33930);
var state_33933__$1 = state_33933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33933__$1,inst_33931);
} else {
return null;
}
}
});
return (function() {
var web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__ = null;
var web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null];
(statearr_33935[(0)] = web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____1 = (function (state_33933){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_33933);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e33936){if((e33936 instanceof Object)){
var ex__28830__auto__ = e33936;
var statearr_33937_33943 = state_33933;
(statearr_33937_33943[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33933);

return cljs.core.cst$kw$recur;
} else {
throw e33936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__33944 = state_33933;
state_33933 = G__33944;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__ = function(state_33933){
switch(arguments.length){
case 0:
return web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____0.call(this);
case 1:
return web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____1.call(this,state_33933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____0;
web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto____1;
return web_mx_quickstart$lesson$async_cat_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_33938 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_33938[(6)] = c__29017__auto__);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
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
})], 0)),cljs.core.cst$kw$cat_DASH_response,tiltontec.cell.core.cI(null)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$response,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$cat_DASH_response)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$kw$success,cljs.core.cst$sym$response),cljs.core.list(cljs.core.cst$sym$span,cljs.core.list(cljs.core.cst$sym$get_DASH_in,cljs.core.cst$sym$response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null))),cljs.core.list(cljs.core.cst$sym$str,"Error>  ",cljs.core.list(cljs.core.cst$kw$error_DASH_code,cljs.core.cst$sym$response),": ",cljs.core.list(cljs.core.cst$kw$error_DASH_text,cljs.core.cst$sym$response))),"Click (+) to see a chat fact."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33939 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33940 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33940);

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

var _STAR_parent_STAR__orig_val__33941 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33942 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33942);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$fact], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33941);
}})], 0)));
} else {
return ["Error>  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error_DASH_code.cljs$core$IFn$_invoke$arity$1(response)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(response))].join('');
}
} else {
return "Click (+) to see a chat fact.";
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33939);
}})], 0))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33924);
}})], 0)));
});
web_mx_quickstart.lesson.ex_async_cat = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$menu,"Async",cljs.core.cst$kw$title,"Async event processing",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.async_cat,cljs.core.cst$kw$preamble,"Async processing can be a challenge, but in Matrix an async response is just another \"input\" property mutation.",cljs.core.cst$kw$code,"(div {:class \"intro\"}\n    (span {:class :push-button}\n      \"Cat Chat\")\n    (speed-plus #(mset! (fmu :cat-fact (evt-md %)) :get-new-fact? true))\n    (div {:class :cat-chat}\n      {:name          :cat-fact\n       :get-new-fact? (cI false\n\n                        ;; <b>The \"plus\" widget will just set this property repeatedly to the same value, 'true'.</b>\n                        ;; <b>Declaring this input Cell \"ephemeral?\" means it will fire each time that same value is set.</b>\n                        :ephemeral? true)\n       :cat-request   (cF+ \n                        ;; <b>`cF+`, or \"cell formula plus\", accepts cell options in a vector first parameter</b>\n                        [:watch (fn [_ me response-chan _ _]\n                                     (when response-chan\n                                       (go (let [response (&lt;! response-chan)]\n\n                                             ;; <b>whenever the XHR responds, we just `mset!` the waiting input cell</b>\n                                             (with-cc :set-cat\n                                               (mset! me :cat-response response))))))]\n                        (when (mget me :get-new-fact?)\n                          (client/get cat-fact-uri {:with-credentials? false})))\n       :cat-response  (cI nil)}\n\n      (if-let [response (mget me :cat-response)]\n        (if (:success response)\n          (span (get-in response [:body :fact]))\n          (str \"Error>  \" (:error-code response)\n            \": \" (:error-text response)))\n        \"Click (+) to see a chat fact.\")))",cljs.core.cst$kw$comment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>cat-request</code> property creates and dispatches an XHR via <code>client/get</code>, producing a core.async channel\n   to receive the response. Its watch function awaits the async response and feeds it into a conventional input property.","We handle async events by directing them to input Cells purpose-created to receive their output, where\n              Matrix handles them like any other input."], null)], null);
web_mx_quickstart.lesson.ephemeral = (function web_mx_quickstart$lesson$ephemeral(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$roulette,cljs.core.cst$kw$bet,tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ephemeral_QMARK_,true,cljs.core.cst$kw$obs,(function (_,me,new_val,___$1,___$2){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$bet_DASH_obs_DASH_sees,new_val,tiltontec.model.core.mget(me,cljs.core.cst$kw$bet),tiltontec.model.core.mget(me,cljs.core.cst$kw$spin),tiltontec.model.core.mget(me,cljs.core.cst$kw$outcome),tiltontec.model.core.mget(me,cljs.core.cst$kw$bet_DASH_history)], 0));
})], 0)),cljs.core.cst$kw$bet_DASH_history,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bet,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$bet)], null),cljs.core.list(cljs.core.cst$sym$conj,cljs.core.cst$sym$_cache,cljs.core.cst$sym$bet))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var temp__5804__auto__ = tiltontec.model.core.mget(me,cljs.core.cst$kw$bet);
if(cljs.core.truth_(temp__5804__auto__)){
var bet = temp__5804__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_cache,bet);
} else {
return null;
}
})], 0)),cljs.core.cst$kw$spin,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$bet),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$rand_DASH_int,(2))),cljs.core.cst$kw$black,cljs.core.cst$kw$red))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core.mget(me,cljs.core.cst$kw$bet))){
if((cljs.core.rand_int((2)) === (0))){
return cljs.core.cst$kw$black;
} else {
return cljs.core.cst$kw$red;
}
} else {
return null;
}
})], 0)),cljs.core.cst$kw$outcome,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bet,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$bet)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$bet,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$spin)),cljs.core.cst$kw$win,cljs.core.cst$kw$loss))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var temp__5804__auto__ = tiltontec.model.core.mget(me,cljs.core.cst$kw$bet);
if(cljs.core.truth_(temp__5804__auto__)){
var bet = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bet,tiltontec.model.core.mget(me,cljs.core.cst$kw$spin))){
return cljs.core.cst$kw$win;
} else {
return cljs.core.cst$kw$loss;
}
} else {
return null;
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,"Faites votre pari, s'il vous pla\u00EEt"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$color], null),cljs.core.list(cljs.core.cst$sym$opcode_DASH_button,cljs.core.cst$sym$color,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$bet,cljs.core.list(cljs.core.cst$sym$keyword,cljs.core.cst$sym$color))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","black"], null))),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"visibility:",cljs.core.list(cljs.core.cst$sym$name,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$bet),cljs.core.cst$kw$visible,cljs.core.cst$kw$hidden))))], null),"The background below shows the spin."),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"font-size:28px; padding:9px; color:white; background:",cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spin,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$spin)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$spin),cljs.core.cst$kw$white)))], null),cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$outcome),cljs.core.cst$kw$win,"Wins!",cljs.core.cst$kw$loss,"Loses :(","...")))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33945 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33946 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33946);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Faites votre pari, s'il vous pla\u00EEt")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33947 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33948 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33948);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Faites votre pari, s'il vous pla\u00EEt",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33947);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$color], null),cljs.core.list(cljs.core.cst$sym$opcode_DASH_button,cljs.core.cst$sym$color,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$bet,cljs.core.list(cljs.core.cst$sym$keyword,cljs.core.cst$sym$color))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","black"], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33949 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33950 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33950);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (color){
return web_mx_quickstart.lesson.opcode_button(color,(function (){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$roulette;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$bet,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color));
}));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","black"], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33949);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,"visibility:",cljs.core.list(cljs.core.cst$sym$name,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$bet),cljs.core.cst$kw$visible,cljs.core.cst$kw$hidden)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return ["visibility:",cljs.core.name((cljs.core.truth_(tiltontec.model.core.mget((function (){var name__17145__auto__ = cljs.core.cst$kw$roulette;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$bet))?cljs.core.cst$kw$visible:cljs.core.cst$kw$hidden))].join('');
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"The background below shows the spin.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33951 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33952 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33952);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"The background below shows the spin.",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33951);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,"font-size:28px; padding:9px; color:white; background:",cljs.core.list(cljs.core.cst$sym$if_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spin,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$spin)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$spin),cljs.core.cst$kw$white))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return ["font-size:28px; padding:9px; color:white; background:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5802__auto__ = tiltontec.model.core.mget((function (){var name__17145__auto__ = cljs.core.cst$kw$roulette;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$spin);
if(cljs.core.truth_(temp__5802__auto__)){
var spin = temp__5802__auto__;
return cljs.core.name(spin);
} else {
return cljs.core.cst$kw$white;
}
})())].join('');
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$roulette),cljs.core.cst$kw$outcome),cljs.core.cst$kw$win,"Wins!",cljs.core.cst$kw$loss,"Loses :(","..."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33953 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33954 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33954);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var G__33955 = tiltontec.model.core.mget((function (){var name__17145__auto__ = cljs.core.cst$kw$roulette;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$outcome);
var G__33955__$1 = (((G__33955 instanceof cljs.core.Keyword))?G__33955.fqn:null);
switch (G__33955__$1) {
case "win":
return "Wins!";

break;
case "loss":
return "Loses :(";

break;
default:
return "...";

}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33953);
}})], 0))),null,(1),null)),(2),null)),(3),null)),(4),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33945);
}})], 0)));
});
web_mx_quickstart.lesson.ex_ephemeral = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Ephemerals",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.ephemeral,cljs.core.cst$kw$preamble,"When processing events, consecutive identical events are still two different events.",cljs.core.cst$kw$code,"(div {:class :intro}\n    {:name    :roulette\n     :bet     (cI nil :ephemeral? true) ;; <====== ephemeral\n     :bet-history (cF (when-let [bet (mget me :bet)]\n                        (conj _cache bet))) ;; <====== _cache\n     :spin    (cF (when (mget me :bet)\n                    (if (zero? (rand-int 2))\n                      :black :red)))\n     :outcome (cF (when-let [bet (mget me :bet)]\n                    (if (= bet (mget me :spin))\n                      :win :loss)))}\n    (h2 (str \"Faites jeux #\" (inc (count (mget (mx-par me) :bet-history)))))\n    (div {:style {:display :flex :gap     \"1em\"}}\n      (mapv (fn [color]\n              (opcode-button color\n                #(mset! (fmu :roulette) :bet (keyword color))))\n        [\"red\" \"black\"]))\n    (span {:style (cF (str \"visibility:\" (name (if (mget (fmu :roulette) :bet)\n                                                 :visible :hidden))))}\n      \"The background below shows the spin.\")\n    (span {:style (cF (str \"font-size:28px; padding:9px; color:white; background:\" (if-let [spin (mget (fmu :roulette) :spin)]\n                                                       (name spin) :white)))}\n      (case (mget (fmu :roulette) :outcome)\n        :win \"Wins!\"\n        :loss \"Loses :(\"\n        \"...\")))",cljs.core.cst$kw$comment,"Ephemeral cells start at nil. When changed to some value X, they propagate fully, then revert silently to nil.\n   When they are changed to X again, it is still recognized as a change.\n   <br><br>The lexically injected <code>_cache</code> lets us consider history in formulas."], null);
web_mx_quickstart.lesson.in_review = (function web_mx_quickstart$lesson$in_review(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$intro], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h2,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$excess,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer),cljs.core.cst$kw$mph),(55))], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.list(cljs.core.cst$sym$Math_SLASH_abs,cljs.core.cst$sym$excess),cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$excess)))),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,cljs.core.list(cljs.core.cst$sym$cI,(42)),cljs.core.cst$kw$air_DASH_drag,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,cljs.core.cst$sym$_STAR_,0.98)),(1000)))], null),cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"~8,1f mph",cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph))),cljs.core.list(cljs.core.cst$sym$speed_DASH_plus,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__33957_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$speedometer,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__33957_SHARP_)),cljs.core.cst$kw$mph,cljs.core.cst$sym$inc))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33958 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33959 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33959);

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

var _STAR_parent_STAR__orig_val__33960 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33961 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33961);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var excess = (tiltontec.model.core.mget((function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph) - (55));
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.abs(excess),(excess < (0))], 0));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33960);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$digi_DASH_readout,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph),(55)),"red","cyan")], null)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(((tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph) > (55)))?"red":"cyan")], null);
})], 0))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$speedometer,cljs.core.cst$kw$mph,tiltontec.cell.core.cI((42)),cljs.core.cst$kw$air_DASH_drag,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$js_SLASH_setInterval,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$mph,cljs.core.cst$sym$_STAR_,0.98)),(1000))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return setInterval((function (){
return tiltontec.model.core.mswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(me__$1,cljs.core.cst$kw$mph,cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.98], 0));
}),(1000));
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"~8,1f mph",cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$mph)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__33962 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__33963 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__33963);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~8,1f mph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.model.core.mget(me__$1,cljs.core.cst$kw$mph)], 0)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33962);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_plus((function (p1__33957_SHARP_){
return tiltontec.model.core.mswap_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$speedometer;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),tiltontec.web_mx.gen.evt_md(p1__33957_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$mph,cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__33958);
}})], 0)));
});
web_mx_quickstart.lesson.ex_in_review = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Review",cljs.core.cst$kw$builder,web_mx_quickstart.lesson.in_review,cljs.core.cst$kw$preamble,"Our closing example reprises all the keyWeb/MX features.",cljs.core.cst$kw$code,"(div {:class :intro}\n    (h2 (let [excess (- (mget (fmu :speedometer) :mph) 55)]\n          (pp/cl-format nil \"The speed is ~8,1f mph ~:[over~;under~] the speed limit.\"\n            (Math/abs excess)  (neg? excess) )))\n    (span {:class   :digi-readout\n           :style   (cF {:color (if (> (mget me :mph) 55)\n                                  \"red\" \"cyan\")})}\n      {:name :speedometer\n       :mph     (cI 42)\n       :air-drag (cF (js/setInterval\n                       #(mswap! me :mph * 0.98) 1000))}\n      (pp/cl-format nil  \"~8,1f mph\" (mget me :mph)))\n    (speed-plus #(mswap! (fmu :speedometer (evt-md %)) :mph inc)))",cljs.core.cst$kw$comment,"\n   <li>it looks and works like standard HTML, SVG, CSS, and CLJS;</li>\n   <li>all state dependencies are property to property;</li>\n   <li>the <code>H2</code> computes its text by navigating to the speedometer widget to read the <code>mph</code> value;</li>\n   <li>the <code>(speed-plus ...)</code> button navigates to the speedometer to mutate <code>mph</code> value;</li>\n   <li>the <code>air-drag</code> async interval mutates the DAG, reducing the <code>mph</code>;</li>\n   <li>function <code>speed-plus</code> demonstrates reusable composition.</li>"], null);