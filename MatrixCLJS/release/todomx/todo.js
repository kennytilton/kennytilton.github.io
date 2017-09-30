// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('todomx.todo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.tag.html');


todomx.todo.TODO_LS_PREFIX = "todos-matrixcljs.";
todomx.todo.todo_list = (function todomx$todo$todo_list(){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$todomx$todo_SLASH_todo_DASH_list,cljs.core.cst$kw$items_DASH_raw,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$load_DASH_all)),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR_15209 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return (todomx.todo.load_all.cljs$core$IFn$_invoke$arity$0 ? todomx.todo.load_all.cljs$core$IFn$_invoke$arity$0() : todomx.todo.load_all.call(null));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15209;
}})], 0)),cljs.core.cst$kw$items,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__15208_SHARP_], null),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$p1__15208_SHARP_,cljs.core.cst$kw$deleted)),cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items_DASH_raw)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (me,cache){
return (function (p1__15208_SHARP_){
return tiltontec.model.core.md_get(p1__15208_SHARP_,cljs.core.cst$kw$deleted);
});})(me,cache))
,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items_DASH_raw)));
})], 0)),cljs.core.cst$kw$items_DASH_completed,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$filter,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
})], 0)),cljs.core.cst$kw$items_DASH_active,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$remove,cljs.core.cst$sym$td_DASH_completed,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_completed,tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)));
})], 0)),cljs.core.cst$kw$empty_QMARK_,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$zero_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$md_DASH_get,cljs.core.cst$sym$me,cljs.core.cst$kw$items)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return (cljs.core.count(tiltontec.model.core.md_get(me,cljs.core.cst$kw$items)) === (0));
})], 0))], 0));
});
/**
 * Make a matrix incarnation of a todo on initial entry
 */
todomx.todo.make_todo = (function todomx$todo$make_todo(islots){
var net_slots = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$todomx$todo_SLASH_todo,cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(todomx.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4())].join(''),cljs.core.cst$kw$created,tiltontec.util.core.now(),cljs.core.cst$kw$title,tiltontec.cell.core.c_in(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(islots)),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(false),cljs.core.cst$kw$deleted,tiltontec.cell.core.c_in(null)], null)], 0));
var todo = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.make,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,net_slots)));
(todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1(todo) : todomx.todo.td_upsert.call(null,todo));

return todo;
});
todomx.todo.td_created = (function todomx$todo$td_created(td){
return cljs.core.cst$kw$created.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(td));
});
todomx.todo.td_title = (function todomx$todo$td_title(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$title);
});
todomx.todo.td_id = (function todomx$todo$td_id(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$id);
});
todomx.todo.td_completed = (function todomx$todo$td_completed(td){
return tiltontec.model.core.md_get(td,cljs.core.cst$kw$completed);
});
todomx.todo.td_delete_BANG_ = (function todomx$todo$td_delete_BANG_(td){
return tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$deleted,tiltontec.util.core.now());
});
todomx.todo.td_toggle_completed_BANG_ = (function todomx$todo$td_toggle_completed_BANG_(td){
return tiltontec.model.core.md_reset_BANG_(td,cljs.core.cst$kw$completed,(cljs.core.truth_(todomx.todo.td_completed(td))?null:tiltontec.util.core.now()));
});
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$todomx$todo_SLASH_todo], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return (todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1 ? todomx.todo.td_upsert.cljs$core$IFn$_invoke$arity$1(me) : todomx.todo.td_upsert.call(null,me));
}
}));
todomx.todo.td_to_map = (function todomx$todo$td_to_map(todo){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7429__auto__ = (function todomx$todo$td_to_map_$_iter__15210(s__15211){
return (new cljs.core.LazySeq(null,(function (){
var s__15211__$1 = s__15211;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15211__$1);
if(temp__4657__auto__){
var s__15211__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15211__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__15211__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__15213 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__15212 = (0);
while(true){
if((i__15212 < size__7428__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__15212);
cljs.core.chunk_append(b__15213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get(todo,k)], null));

var G__15214 = (i__15212 + (1));
i__15212 = G__15214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15213),todomx$todo$td_to_map_$_iter__15210(cljs.core.chunk_rest(s__15211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15213),null);
}
} else {
var k = cljs.core.first(s__15211__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get(todo,k)], null),todomx$todo$td_to_map_$_iter__15210(cljs.core.rest(s__15211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$created,cljs.core.cst$kw$title,cljs.core.cst$kw$completed,cljs.core.cst$kw$deleted], null));
})());
});
todomx.todo.td_to_json = (function todomx$todo$td_to_json(todo){
return tiltontec.util.core.map_to_json(todomx.todo.td_to_map(todo));
});
todomx.todo.reload_todo = (function todomx$todo$reload_todo(islots){
var net_slots = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([islots,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$todomx$todo_SLASH_todo,cljs.core.cst$kw$title,tiltontec.cell.core.c_in(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(islots)),cljs.core.cst$kw$completed,tiltontec.cell.core.c_in(cljs.core.cst$kw$completed.cljs$core$IFn$_invoke$arity$2(islots,false)),cljs.core.cst$kw$deleted,(function (){var or__6640__auto__ = cljs.core.cst$kw$deleted.cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return tiltontec.cell.core.c_in(null);
}
})()], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.make,cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,net_slots)));
});
todomx.todo.td_from_json = (function todomx$todo$td_from_json(json){
return todomx.todo.reload_todo(tiltontec.util.core.json_to_map(json));
});
todomx.todo.td_upsert = (function todomx$todo$td_upsert(td){
return tiltontec.tag.html.io_upsert(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(td)),JSON.stringify(todomx.todo.td_to_json(td)));
});
todomx.todo.td_load = (function todomx$todo$td_load(id){
return todomx.todo.td_from_json(JSON.parse(tiltontec.tag.html.io_read(id)));
});
todomx.todo.load_all = (function todomx$todo$load_all(){
var keys = tiltontec.tag.html.io_find(todomx.todo.TODO_LS_PREFIX);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(todomx.todo.td_load,tiltontec.tag.html.io_find(todomx.todo.TODO_LS_PREFIX));
});
