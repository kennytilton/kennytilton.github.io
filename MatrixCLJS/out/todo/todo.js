// Compiled by ClojureScript 1.9.671 {}
goog.provide('todo.todo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.tag.html');
todo.todo.TODO_LS_PREFIX = "todos-matrixjs.";
todo.todo.todo_list = (function todo$todo$todo_list(mx){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("todo.todo","todo-list","todo.todo/todo-list",186819220),new cljs.core.Keyword(null,"par","par",-61778778),mx,new cljs.core.Keyword(null,"items-raw","items-raw",153861709),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"load-all","load-all",-1250839730,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_15989 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todo.todo.load_all.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_15989;
}})),new cljs.core.Keyword(null,"items","items",1031954938),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__15988#","p1__15988#",-586210066,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__15988#","p1__15988#",-586210066,null),new cljs.core.Keyword(null,"deleted","deleted",-510100639))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,((function (me,cache){
return (function (p1__15988_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__15988_SHARP_,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
});})(me,cache))
,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items-raw","items-raw",153861709))));
})));
});
/**
 * Make a matrix todo either on initial entry or on page load when
 *    pulling localStorage into the matrix
 */
todo.todo.make_todo = (function todo$todo$make_todo(islots){
var net_slots = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("todo.todo","todo","todo.todo/todo",-353572724),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(todo.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4.call(null))].join(''),new cljs.core.Keyword(null,"created","created",-704993748),tiltontec.util.core.now.call(null)], null),islots,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$2(islots,false)),new cljs.core.Keyword(null,"deleted","deleted",-510100639),(function (){var or__6638__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__6638__auto__)){
return or__6638__auto__;
} else {
return tiltontec.cell.core.c_in.call(null,null);
}
})()], null));
var todo__$1 = cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,net_slots)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(islots))){
} else {
todo.todo.td_upsert.call(null,todo__$1);
}

return todo__$1;
});
todo.todo.td_to_map = (function todo$todo$td_to_map(todo__$1){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7427__auto__ = (function todo$todo$td_to_map_$_iter__15990(s__15991){
return (new cljs.core.LazySeq(null,(function (){
var s__15991__$1 = s__15991;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15991__$1);
if(temp__4657__auto__){
var s__15991__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15991__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__15991__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__15993 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__15992 = (0);
while(true){
if((i__15992 < size__7426__auto__)){
var k = cljs.core._nth.call(null,c__7425__auto__,i__15992);
cljs.core.chunk_append.call(null,b__15993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo__$1,k)], null));

var G__15994 = (i__15992 + (1));
i__15992 = G__15994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),todo$todo$td_to_map_$_iter__15990.call(null,cljs.core.chunk_rest.call(null,s__15991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),null);
}
} else {
var k = cljs.core.first.call(null,s__15991__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo__$1,k)], null),todo$todo$td_to_map_$_iter__15990.call(null,cljs.core.rest.call(null,s__15991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7427__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"deleted","deleted",-510100639)], null));
})());
});
todo.todo.td_to_json = (function todo$todo$td_to_json(todo__$1){
return tiltontec.util.core.map_to_json.call(null,todo.todo.td_to_map.call(null,todo__$1));
});
todo.todo.td_from_json = (function todo$todo$td_from_json(json){
return todo.todo.make_todo.call(null,cljs.core.assoc.call(null,tiltontec.util.core.json_to_map.call(null,json),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"todo-42","todo-42",-778414513)));
});
todo.todo.td_upsert = (function todo$todo$td_upsert(td){
return tiltontec.tag.html.io_upsert.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,td)),JSON.stringify(todo.todo.td_to_json.call(null,td)));
});
todo.todo.td_load = (function todo$todo$td_load(id){
return todo.todo.td_from_json.call(null,JSON.parse(tiltontec.tag.html.io_read.call(null,id)));
});
todo.todo.load_all = (function todo$todo$load_all(){
var keys = tiltontec.tag.html.io_find.call(null,todo.todo.TODO_LS_PREFIX);
return cljs.core.map.call(null,todo.todo.td_load,tiltontec.tag.html.io_find.call(null,todo.todo.TODO_LS_PREFIX));
});
todo.todo.td_title = (function todo$todo$td_title(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"title","title",636505583));
});
todo.todo.td_id = (function todo$todo$td_id(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"id","id",-1388402092));
});
todo.todo.td_completed = (function todo$todo$td_completed(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});
todo.todo.td_delete = (function todo$todo$td_delete(td){
return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.util.core.now.call(null));
});
todo.todo.td_toggle_completed = (function todo$todo$td_toggle_completed(td){
return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),(cljs.core.truth_(todo.todo.td_completed.call(null,td))?null:tiltontec.util.core.now.call(null)));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo.todo","todo","todo.todo/todo",-353572724)], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.call(null,old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return todo.todo.td_upsert.call(null,me);
}
}));

//# sourceMappingURL=todo.js.map