// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.matrix');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('tiltontec.tag.gen');
goog.require('todomx.todo');
/**
 * matrix-build! will populate this with the root of the application matrix.
 */
todomx.matrix.matrix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);






todomx.matrix.matrix_build_BANG_ = (function todomx$matrix$matrix_build_BANG_(){
return cljs.core.reset_BANG_(todomx.matrix.matrix,tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$todomx$matrix_SLASH_todoApp,cljs.core.cst$kw$route,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obs,(function (slot,me,new$,old,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.cell.base.unbound,old)){
return null;
} else {
return tiltontec.tag.html.io_upsert("todo-matrixcljs.route",new$);
}
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$io_DASH_read,"todo-matrixcljs.route"),"All")),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_11914 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var or__6640__auto__ = tiltontec.tag.html.io_read("todo-matrixcljs.route");
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "All";
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_11914;
}})], 0)),cljs.core.cst$kw$todos,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$todomx$todo_SLASH_todo_DASH_list)),cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_11915 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomx.todo.todo_list();
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_11915;
}})], 0)),cljs.core.cst$kw$dom,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$md_SLASH_with_DASH_par,cljs.core.cst$sym$me,cljs.core.list(cljs.core.cst$sym$landing_DASH_page))),cljs.core.cst$kw$input_QMARK_,null,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_11916 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_11917 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return (todomx.matrix.landing_page.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.landing_page.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.landing_page.call(null));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11917;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_11916;
}})], 0))], 0)));
});
todomx.matrix.dom = (function todomx$matrix$dom(){
return tiltontec.model.core.md_get(cljs.core.deref(todomx.matrix.matrix),cljs.core.cst$kw$dom);
});
todomx.matrix.router = bide.core.router(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$All], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",cljs.core.cst$kw$Active], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",cljs.core.cst$kw$Completed], null)], null));
todomx.matrix.on_navigate = (function todomx$matrix$on_navigate(route,params,query){
if(cljs.core.truth_(cljs.core.deref(todomx.matrix.matrix))){
return tiltontec.model.core.md_reset_BANG_(cljs.core.deref(todomx.matrix.matrix),cljs.core.cst$kw$route,cljs.core.name(route));
} else {
return null;
}
});
todomx.matrix.start_router = (function todomx$matrix$start_router(){
return bide.core.start_BANG_(todomx.matrix.router,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default,cljs.core.cst$kw$ignore,cljs.core.cst$kw$on_DASH_navigate,todomx.matrix.on_navigate], null));
});



todomx.matrix.landing_page = (function todomx$matrix$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag("section",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"todoapp"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(cljs.core.cst$sym$todo_DASH_entry)),cljs.core.list(cljs.core.cst$sym$section,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"main",cljs.core.cst$kw$hidden,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$empty_QMARK_))], null),cljs.core.list(cljs.core.cst$sym$toggle_DASH_all),cljs.core.list(cljs.core.cst$sym$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"todo-list",cljs.core.cst$kw$kid_DASH_values,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rte,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$sort_DASH_by,cljs.core.cst$sym$td_DASH_created,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me),"All",cljs.core.cst$kw$items,"Completed",cljs.core.cst$kw$items_DASH_completed,"Active",cljs.core.cst$kw$items_DASH_active))))),cljs.core.cst$kw$kid_DASH_key,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__11918_SHARP_], null),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$p1__11918_SHARP_,cljs.core.cst$kw$todo)),cljs.core.cst$kw$kid_DASH_factory,cljs.core.cst$sym$todo_DASH_list_DASH_item], null),cljs.core.list(cljs.core.cst$sym$kid_DASH_values_DASH_kids,cljs.core.cst$sym$me,cljs.core.cst$sym$cache))),cljs.core.list(cljs.core.cst$sym$dashboard_DASH_footer))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11919 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("header",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(cljs.core.cst$sym$todo_DASH_entry))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11923 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"todos")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11923,me__$1,cache__$1,_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11925 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11925;
}});})(_STAR_par_STAR_11923,me__$1,cache__$1,_STAR_par_STAR_11919,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = (todomx.matrix.todo_entry.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.todo_entry.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.todo_entry.call(null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11923;
}});})(_STAR_par_STAR_11919,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("section",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"main",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$empty_QMARK_)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todos.call(null,me__$1)),cljs.core.cst$kw$empty_QMARK_);
});})(x__7483__auto__,_STAR_par_STAR_11919,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$toggle_DASH_all),cljs.core.list(cljs.core.cst$sym$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"todo-list",cljs.core.cst$kw$kid_DASH_values,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rte,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$sort_DASH_by,cljs.core.cst$sym$td_DASH_created,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me),"All",cljs.core.cst$kw$items,"Completed",cljs.core.cst$kw$items_DASH_completed,"Active",cljs.core.cst$kw$items_DASH_active))))),cljs.core.cst$kw$kid_DASH_key,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__11918_SHARP_], null),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$p1__11918_SHARP_,cljs.core.cst$kw$todo)),cljs.core.cst$kw$kid_DASH_factory,cljs.core.cst$sym$todo_DASH_list_DASH_item], null),cljs.core.list(cljs.core.cst$sym$kid_DASH_values_DASH_kids,cljs.core.cst$sym$me,cljs.core.cst$sym$cache)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11931 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = (todomx.matrix.toggle_all.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.toggle_all.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.toggle_all.call(null));
return cljs.core._conj((function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag("ul",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"todo-list",cljs.core.cst$kw$kid_DASH_values,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rte,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$sort_DASH_by,cljs.core.cst$sym$td_DASH_created,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me),"All",cljs.core.cst$kw$items,"Completed",cljs.core.cst$kw$items_DASH_completed,"Active",cljs.core.cst$kw$items_DASH_active))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
var temp__4657__auto__ = (todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$2) : todomx.matrix.mx_route.call(null,me__$2));
if(cljs.core.truth_(temp__4657__auto__)){
var rte = temp__4657__auto__;
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_created,tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me__$2) : todomx.matrix.mx_todos.call(null,me__$2)),(function (){var G__11934 = (todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$2) : todomx.matrix.mx_route.call(null,me__$2));
switch (G__11934) {
case "All":
return cljs.core.cst$kw$items;

break;
case "Completed":
return cljs.core.cst$kw$items_DASH_completed;

break;
case "Active":
return cljs.core.cst$kw$items_DASH_active;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11934)].join('')));

}
})()));
} else {
return null;
}
});})(x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache))
], 0)),cljs.core.cst$kw$kid_DASH_key,((function (x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache){
return (function (p1__11918_SHARP_){
return tiltontec.model.core.md_get(p1__11918_SHARP_,cljs.core.cst$kw$todo);
});})(x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache))
,cljs.core.cst$kw$kid_DASH_factory,todomx.matrix.todo_list_item], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$kid_DASH_values_DASH_kids,cljs.core.cst$sym$me,cljs.core.cst$sym$cache))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11935 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$2 = tiltontec.model.core.kid_values_kids(me__$2,cache__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11935;
}});})(x__7483__auto____$1,_STAR_par_STAR_11931,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11919,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11931;
}});})(x__7483__auto__,_STAR_par_STAR_11919,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$2 = (todomx.matrix.dashboard_footer.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.dashboard_footer.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.dashboard_footer.call(null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11919;
}})], 0))),tiltontec.tag.gen.make_tag("footer",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"info"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Double-click a to-do list item to edit it."),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>."),cljs.core.list(cljs.core.cst$sym$p,cljs.core.PersistentArrayMap.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11936 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Double-click a to-do list item to edit it.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11936,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11938 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Double-click a to-do list item to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11938;
}});})(_STAR_par_STAR_11936,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11936,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11940 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11940;
}});})(x__7483__auto__,_STAR_par_STAR_11936,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag("p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>.")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11936,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11942 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11942;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11936,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11936;
}})], 0)))], null);
});
todomx.matrix.todo_entry = (function todomx$matrix$todo_entry(){
return tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"new-todo",cljs.core.cst$kw$autofocus,true,cljs.core.cst$kw$placeholder,"What needs doing?",cljs.core.cst$kw$onkeypress,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_process_DASH_on_DASH_enter)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,cljs.core.List.EMPTY], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11944 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11944;
}})], 0)));
});
todomx.matrix.todo_process_on_enter = (function todomx$matrix$todo_process_on_enter(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
var raw = e.target.value;
var title = clojure.string.trim(raw);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
if((cljs.core.count(raw) > (0))){
window.alert("A reminder to do nothing? We like it! But no.");
} else {
}
} else {
tiltontec.model.core.md_reset_BANG_((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todos.call(null)),cljs.core.cst$kw$items_DASH_raw,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todos.call(null)),cljs.core.cst$kw$items_DASH_raw),todomx.todo.make_todo(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null))));
}

return e.target.value = "";
} else {
return null;
}
});
goog.exportSymbol('todomx.matrix.todo_process_on_enter', todomx.matrix.todo_process_on_enter);
todomx.matrix.toggle_all = (function todomx$matrix$toggle_all(){
return tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$some,cljs.core.list(cljs.core.cst$sym$complement,cljs.core.cst$sym$td_DASH_completed),cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me)),cljs.core.cst$kw$complete,cljs.core.cst$kw$uncomplete)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(cljs.core.some(cljs.core.complement(todomx.todo.td_completed),(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(me) : todomx.matrix.mx_todo_items.call(null,me))))){
return cljs.core.cst$kw$complete;
} else {
return cljs.core.cst$kw$uncomplete;
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"toggle-all",cljs.core.cst$kw$class,"toggle-all",cljs.core.cst$kw$input_DASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_par,cljs.core.cst$sym$me),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,"toggle-all",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_td_DASH_completed_DASH_toggle_DASH_all))], null),"Mark all as complete"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11945 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"toggle-all",cljs.core.cst$kw$class,"toggle-all",cljs.core.cst$kw$input_DASH_type,"checkbox",cljs.core.cst$kw$checked,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_par,cljs.core.cst$sym$me),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11945,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.md_get(tiltontec.model.core.mx_par(me__$1),cljs.core.cst$kw$action),cljs.core.cst$kw$uncomplete);
});})(_STAR_par_STAR_11945,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11945,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11947 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11947;
}});})(_STAR_par_STAR_11945,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("label",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,"toggle-all",cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_td_DASH_completed_DASH_toggle_DASH_all)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11945,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_td_DASH_completed_DASH_toggle_DASH_all)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,cljs.core.List.EMPTY], 0));
});})(x__7483__auto__,_STAR_par_STAR_11945,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Mark all as complete")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11945,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11949 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11949;
}});})(x__7483__auto__,_STAR_par_STAR_11945,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11945;
}})], 0)));
});
todomx.matrix.td_completed_toggle_all = (function todomx$matrix$td_completed_toggle_all(event){
var action = tiltontec.model.core.md_get(tiltontec.model.core.mx_par((todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1(event) : todomx.matrix.event_to_mx.call(null,event))),cljs.core.cst$kw$action);
var seq__11950 = cljs.core.seq((todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todo_items.call(null)));
var chunk__11951 = null;
var count__11952 = (0);
var i__11953 = (0);
while(true){
if((i__11953 < count__11952)){
var td = chunk__11951.cljs$core$IIndexed$_nth$arity$2(null,i__11953);
tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$complete))?tiltontec.util.core.now():null));

var G__11954 = seq__11950;
var G__11955 = chunk__11951;
var G__11956 = count__11952;
var G__11957 = (i__11953 + (1));
seq__11950 = G__11954;
chunk__11951 = G__11955;
count__11952 = G__11956;
i__11953 = G__11957;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11950);
if(temp__4657__auto__){
var seq__11950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11950__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__11950__$1);
var G__11958 = cljs.core.chunk_rest(seq__11950__$1);
var G__11959 = c__7460__auto__;
var G__11960 = cljs.core.count(c__7460__auto__);
var G__11961 = (0);
seq__11950 = G__11958;
chunk__11951 = G__11959;
count__11952 = G__11960;
i__11953 = G__11961;
continue;
} else {
var td = cljs.core.first(seq__11950__$1);
tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$complete))?tiltontec.util.core.now():null));

var G__11962 = cljs.core.next(seq__11950__$1);
var G__11963 = null;
var G__11964 = (0);
var G__11965 = (0);
seq__11950 = G__11962;
chunk__11951 = G__11963;
count__11952 = G__11964;
i__11953 = G__11965;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('todomx.matrix.td_completed_toggle_all', todomx.matrix.td_completed_toggle_all);
todomx.matrix.todo_list_item = (function todomx$matrix$todo_list_item(me,td){
return tiltontec.tag.gen.make_tag("li",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$todo,td,cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$td_DASH_completed,cljs.core.cst$sym$td),"completed","")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(todomx.todo.td_completed(td))){
return "completed";
} else {
return "";
}
})], 0)),cljs.core.cst$kw$display,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$route,cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me)], null),cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$route),cljs.core.cst$sym$unbound,cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,"All"),cljs.core.list(cljs.core.cst$sym$xor,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,"Active"),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$td,cljs.core.cst$kw$completed))),"block",cljs.core.cst$kw$default,"none"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var route = (todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_route.call(null,me__$1));
if((route == null)){
return tiltontec.cell.base.unbound;
} else {
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"All");
if(or__6640__auto__){
return or__6640__auto__;
} else {
return tiltontec.util.core.xor(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"Active"),tiltontec.model.core.md_get(td,cljs.core.cst$kw$completed));
}
})())){
return "block";
} else {
return "none";

}
}
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"view"], null),cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$input_DASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$td,cljs.core.cst$kw$completed)),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_toggle_DASH_completed,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_start_DASH_editing)], null),cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$td)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_delete_DASH_by_DASH_key,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td))], null))),cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"edit",cljs.core.cst$kw$onblur,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_edit,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td)),cljs.core.cst$kw$onkeydown,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_edit,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td))], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11966 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"view"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$input_DASH_type,"checkbox",cljs.core.cst$kw$checked,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$td,cljs.core.cst$kw$completed)),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_toggle_DASH_completed,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td))], null)),cljs.core.list(cljs.core.cst$sym$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_start_DASH_editing)], null),cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$td)),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_delete_DASH_by_DASH_key,cljs.core.list(cljs.core.cst$sym$td_DASH_id,cljs.core.cst$sym$td))], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11974 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"toggle",cljs.core.cst$kw$input_DASH_type,"checkbox",cljs.core.cst$kw$checked,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$td,cljs.core.cst$kw$completed)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$completed);
});})(_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache))
], 0)),cljs.core.cst$kw$onclick,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_toggle_DASH_completed)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,(function (){var x__7483__auto__ = todomx.todo.td_id(td);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11976 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11976;
}});})(_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("label",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ondblclick,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_start_DASH_editing)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,cljs.core.List.EMPTY], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$td_DASH_title,cljs.core.cst$sym$td))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11978 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = todomx.todo.td_title(td);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11978;
}});})(x__7483__auto__,_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"destroy",cljs.core.cst$kw$onclick,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_delete_DASH_by_DASH_key)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,(function (){var x__7483__auto____$2 = todomx.todo.td_id(td);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})()], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11980 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11980;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11974,me__$2,cache__$1,_STAR_par_STAR_11966,me__$1,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11974;
}});})(_STAR_par_STAR_11966,me__$1,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("input",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"edit",cljs.core.cst$kw$onblur,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_edit)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,(function (){var x__7483__auto____$1 = todomx.todo.td_id(td);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})()], 0));
})(),cljs.core.cst$kw$onkeydown,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_todo_DASH_edit)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,(function (){var x__7483__auto____$1 = todomx.todo.td_id(td);
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})()], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11966,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11982 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11982;
}});})(x__7483__auto__,_STAR_par_STAR_11966,me__$1,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11966;
}})], 0)));
});
todomx.matrix.delete_by_key = (function todomx$matrix$delete_by_key(event,id){
return todomx.todo.td_delete_BANG_((todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1(id) : todomx.matrix.mx_todo_lookup.call(null,id)));
});
goog.exportSymbol('todomx.matrix.delete_by_key', todomx.matrix.delete_by_key);
todomx.matrix.todo_toggle_completed = (function todomx$matrix$todo_toggle_completed(event,id){
var tds = (todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todo_items.call(null));
var td = cljs.core.some(((function (tds){
return (function (td){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,todomx.todo.td_id(td))){
return td;
} else {
return null;
}
});})(tds))
,tds);
return todomx.todo.td_toggle_completed_BANG_(td);
});
goog.exportSymbol('todomx.matrix.todo_toggle_completed', todomx.matrix.todo_toggle_completed);
todomx.matrix.todo_start_editing = (function todomx$matrix$todo_start_editing(e){
var lbl = (todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1(e) : todomx.matrix.event_to_mx.call(null,e));
var li = tiltontec.tag.html.mxa_find_tag(lbl,"li");
var edt_dom = tiltontec.tag.html.tag_dom(li).getElementsByClassName("edit").item((0));
edt_dom.value = todomx.todo.td_title(tiltontec.model.core.md_get(li,cljs.core.cst$kw$todo));

tiltontec.tag.html.tag_dom(li).classList.add("editing");

edt_dom.focus();

return edt_dom.setSelectionRange((0),edt_dom.value.length);
});
goog.exportSymbol('todomx.matrix.todo_start_editing', todomx.matrix.todo_start_editing);
todomx.matrix.todo_edit = (function todomx$matrix$todo_edit(e,td_key){
var edom = e.target;
var li_dom = tiltontec.tag.html.dom_ancestor_by_tag(edom,"li");
if(cljs.core.truth_(tiltontec.tag.html.dom_has_class(li_dom,"editing"))){
var title = clojure.string.trim(edom.value);
var td = (function (){var G__11983 = td_key;
var G__11984 = (todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.event_to_mx.cljs$core$IFn$_invoke$arity$1(e) : todomx.matrix.event_to_mx.call(null,e));
return (todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2 ? todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2(G__11983,G__11984) : todomx.matrix.mx_todo_lookup.call(null,G__11983,G__11984));
})();
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"blur")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter"))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,"")){
todomx.todo.td_delete_BANG_(td);
} else {
tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$title,title);
}

return li_dom.classList.remove("editing");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Escape")){
return li_dom.classList.remove("editing");
} else {
return null;
}
}
} else {
return null;
}
});
goog.exportSymbol('todomx.matrix.todo_edit', todomx.matrix.todo_edit);
todomx.matrix.dashboard_footer = (function todomx$matrix$dashboard_footer(){
return tiltontec.tag.gen.make_tag("footer",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"footer",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.list(cljs.core.cst$sym$mx_DASH_todos,cljs.core.cst$sym$me),cljs.core.cst$kw$empty_QMARK_)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return tiltontec.model.core.md_get((todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(me) : todomx.matrix.mx_todos.call(null,me)),cljs.core.cst$kw$empty_QMARK_);
})], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"todo-count",cljs.core.cst$kw$content,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me)))))], null)),cljs.core.list(cljs.core.cst$sym$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"filters"], null),cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label,cljs.core.cst$sym$route], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(cljs.core.cst$sym$li,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$selected,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected",""))], null),cljs.core.cst$sym$label)))),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"clear-completed",cljs.core.cst$kw$hidden,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me))))),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$on_DASH_evt_BANG_,cljs.core.cst$sym$todomx$matrix_SLASH_clear_DASH_completed)], null),"Clear completed"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11985 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"todo-count",cljs.core.cst$kw$content,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$pp_SLASH_cl_DASH_format,null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"<strong>~a</strong>  item~:P remaining",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todo_items.call(null,me__$1))))], 0));
});})(_STAR_par_STAR_11985,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_11987 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11987;
}});})(_STAR_par_STAR_11985,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("ul",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"filters"], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label,cljs.core.cst$sym$route], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(cljs.core.cst$sym$li,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$selected,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected",""))], null),cljs.core.cst$sym$label))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12021 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = (function (){var iter__7429__auto__ = ((function (_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function todomx$matrix$dashboard_footer_$_iter__12038(s__12039){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (){
var s__12039__$1 = s__12039;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12039__$1);
if(temp__4657__auto__){
var s__12039__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12039__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__12039__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__12041 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__12040 = (0);
while(true){
if((i__12040 < size__7428__auto__)){
var vec__12042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__12040);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042,(1),null);
cljs.core.chunk_append(b__12041,tiltontec.tag.gen.make_tag("li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$selected,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected",""))], null),cljs.core.cst$sym$label))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__12040,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12045 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,route,cljs.core.cst$kw$selector,label,cljs.core.cst$kw$selected,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me__$3)),(todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$3) : todomx.matrix.mx_route.call(null,me__$3)));
});})(i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)),cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected","")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get(me__$3,cljs.core.cst$kw$selected))){
return "selected";
} else {
return "";
}
});})(i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$label)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12047 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = label;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12047;
}});})(i__12040,_STAR_par_STAR_12045,me__$2,cache__$2,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12045;
}});})(i__12040,vec__12042,label,route,c__7427__auto__,size__7428__auto__,b__12041,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0))));

var G__12056 = (i__12040 + (1));
i__12040 = G__12056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12041),todomx$matrix$dashboard_footer_$_iter__12038(cljs.core.chunk_rest(s__12039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12041),null);
}
} else {
var vec__12048 = cljs.core.first(s__12039__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(1),null);
return cljs.core.cons(tiltontec.tag.gen.make_tag("li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,cljs.core.cst$sym$route,cljs.core.cst$kw$selector,cljs.core.cst$sym$label,cljs.core.cst$kw$selected,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$class,cljs.core.list(cljs.core.cst$sym$c_QMARK_,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected",""))], null),cljs.core.cst$sym$label))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12051 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,route,cljs.core.cst$kw$selector,label,cljs.core.cst$kw$selected,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$kw$selector,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$me)),cljs.core.list(cljs.core.cst$sym$mx_DASH_route,cljs.core.cst$sym$me))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me__$3)),(todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_route.cljs$core$IFn$_invoke$arity$1(me__$3) : todomx.matrix.mx_route.call(null,me__$3)));
});})(_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)),cljs.core.cst$kw$class,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$selected),"selected","")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get(me__$3,cljs.core.cst$kw$selected))){
return "selected";
} else {
return "";
}
});})(_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0))], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$label)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12053 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((function (){var x__7483__auto____$1 = label;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12053;
}});})(_STAR_par_STAR_12051,me__$2,cache__$2,vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12051;
}});})(vec__12048,label,route,s__12039__$2,temp__4657__auto__,_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0))),todomx$matrix$dashboard_footer_$_iter__12038(cljs.core.rest(s__12039__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
,null,null));
});})(_STAR_par_STAR_12021,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
;
return iter__7429__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12021;
}});})(x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)));
return cljs.core._conj((function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"clear-completed",cljs.core.cst$kw$hidden,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$mx_DASH_todo_DASH_items,cljs.core.cst$sym$me))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(me__$1) : todomx.matrix.mx_todo_items.call(null,me__$1)))) === (0));
});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)),cljs.core.cst$kw$onclick,(function (){var fn_name__11775__auto__ = clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$todomx$matrix_SLASH_clear_DASH_completed)].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,tiltontec.tag.gen.on_event_attr_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_name__11775__auto__,cljs.core.List.EMPTY], 0));
})()], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for c?kids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Clear completed")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_12055 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(cljs.core._conj(cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_12055;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_11985,me,cache))
], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_11985;
}})], 0)));
});
todomx.matrix.clear_completed = (function todomx$matrix$clear_completed(e){
var seq__12057 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,(todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 ? todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0() : todomx.matrix.mx_todo_items.call(null))));
var chunk__12058 = null;
var count__12059 = (0);
var i__12060 = (0);
while(true){
if((i__12060 < count__12059)){
var td = chunk__12058.cljs$core$IIndexed$_nth$arity$2(null,i__12060);
todomx.todo.td_delete_BANG_(td);

var G__12061 = seq__12057;
var G__12062 = chunk__12058;
var G__12063 = count__12059;
var G__12064 = (i__12060 + (1));
seq__12057 = G__12061;
chunk__12058 = G__12062;
count__12059 = G__12063;
i__12060 = G__12064;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12057);
if(temp__4657__auto__){
var seq__12057__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12057__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__12057__$1);
var G__12065 = cljs.core.chunk_rest(seq__12057__$1);
var G__12066 = c__7460__auto__;
var G__12067 = cljs.core.count(c__7460__auto__);
var G__12068 = (0);
seq__12057 = G__12065;
chunk__12058 = G__12066;
count__12059 = G__12067;
i__12060 = G__12068;
continue;
} else {
var td = cljs.core.first(seq__12057__$1);
todomx.todo.td_delete_BANG_(td);

var G__12069 = cljs.core.next(seq__12057__$1);
var G__12070 = null;
var G__12071 = (0);
var G__12072 = (0);
seq__12057 = G__12069;
chunk__12058 = G__12070;
count__12059 = G__12071;
i__12060 = G__12072;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('todomx.matrix.clear_completed', todomx.matrix.clear_completed);
todomx.matrix.mx_route = (function todomx$matrix$mx_route(mx){
return tiltontec.model.core.md_get((todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1(mx) : todomx.matrix.mx_find_matrix.call(null,mx)),cljs.core.cst$kw$route);
});
/**
 * Given a node in the matrix, navigate to the root and read the todos. After
 *   the matrix is initially loaded (say in an event handler), one can pass nil
 *   and find the matrix in @matrix.
 */
todomx.matrix.mx_todos = (function todomx$matrix$mx_todos(var_args){
var G__12074 = arguments.length;
switch (G__12074) {
case 0:
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.truth_(cljs.core.deref(todomx.matrix.matrix))){
} else {
throw (new Error("Assert failed: (clojure.core/deref matrix)"));
}

return tiltontec.model.core.md_get(cljs.core.deref(todomx.matrix.matrix),cljs.core.cst$kw$todos);
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0();
} else {
var mtrx = (todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1 ? todomx.matrix.mx_find_matrix.cljs$core$IFn$_invoke$arity$1(mx) : todomx.matrix.mx_find_matrix.call(null,mx));
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core.md_get(mtrx,cljs.core.cst$kw$todos);
}
});

todomx.matrix.mx_todos.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_items = (function todomx$matrix$mx_todo_items(var_args){
var G__12077 = arguments.length;
switch (G__12077) {
case 0:
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 = (function (){
return todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(null);
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if(cljs.core.truth_(todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(mx))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mti"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(mx-todos mx)")].join('')));
}

return tiltontec.model.core.md_get(todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1(mx),cljs.core.cst$kw$items);
});

todomx.matrix.mx_todo_items.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_lookup = (function todomx$matrix$mx_todo_lookup(var_args){
var G__12080 = arguments.length;
switch (G__12080) {
case 1:
return todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1 = (function (id){
return todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2(id,null);
});

todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2 = (function (id,mx){
return cljs.core.some((function (td){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,todomx.todo.td_id(td))){
return td;
} else {
return null;
}
}),todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1(mx));
});

todomx.matrix.mx_todo_lookup.cljs$lang$maxFixedArity = 2;

todomx.matrix.event_to_mx = (function todomx$matrix$event_to_mx(e){
return tiltontec.tag.gen.dom_tag(e.target);
});
todomx.matrix.mx_find_matrix = (function todomx$matrix$mx_find_matrix(mx){
return tiltontec.tag.html.mxa_find_type(mx,cljs.core.cst$kw$todomx$matrix_SLASH_todoApp);
});
