// Compiled by ClojureScript 1.9.671 {}
goog.provide('todomx.todo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.tag.html');


todomx.todo.TODO_LS_PREFIX = "todos-matrixcljs.";
todomx.todo.todo_list = (function todomx$todo$todo_list(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("todomx.todo","todo-list","todomx.todo/todo-list",428659535),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"load-all","load-all",-1250839730,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_12440 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomx.todo.load_all.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_12440;
}})),new cljs.core.Keyword(null,"items","items",1031954938),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12439#","p1__12439#",-267355342,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__12439#","p1__12439#",-267355342,null),new cljs.core.Keyword(null,"deleted","deleted",-510100639))),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,((function (me,cache){
return (function (p1__12439_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__12439_SHARP_,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
});})(me,cache))
,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items-raw","items-raw",153861709))));
})),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.filter.call(null,todomx.todo.td_completed,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938))));
})),new cljs.core.Keyword(null,"items-active","items-active",-1058660354),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,todomx.todo.td_completed,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938))));
})),new cljs.core.Keyword(null,"empty?","empty?",-1564122972),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return (cljs.core.count.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938))) === (0));
})));
});
/**
 * Make a matrix incarnation of a todo on initial entry
 */
todomx.todo.make_todo = (function todomx$todo$make_todo(islots){
var net_slots = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("todomx.todo","todo","todomx.todo/todo",-267986601),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(todomx.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4.call(null))].join(''),new cljs.core.Keyword(null,"created","created",-704993748),tiltontec.util.core.now.call(null),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.c_in.call(null,false),new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.cell.core.c_in.call(null,null)], null));
var todo = cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,net_slots)));
todomx.todo.td_upsert.call(null,todo);

return todo;
});
todomx.todo.td_created = (function todomx$todo$td_created(td){
return new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,td));
});
todomx.todo.td_title = (function todomx$todo$td_title(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"title","title",636505583));
});
todomx.todo.td_id = (function todomx$todo$td_id(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"id","id",-1388402092));
});
todomx.todo.td_completed = (function todomx$todo$td_completed(td){
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});
todomx.todo.td_delete_BANG_ = (function todomx$todo$td_delete_BANG_(td){
return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.util.core.now.call(null));
});
todomx.todo.td_toggle_completed_BANG_ = (function todomx$todo$td_toggle_completed_BANG_(td){
return tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),(cljs.core.truth_(todomx.todo.td_completed.call(null,td))?null:tiltontec.util.core.now.call(null)));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomx.todo","todo","todomx.todo/todo",-267986601)], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.call(null,old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return todomx.todo.td_upsert.call(null,me);
}
}));
todomx.todo.td_to_map = (function todomx$todo$td_to_map(todo){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7427__auto__ = (function todomx$todo$td_to_map_$_iter__12441(s__12442){
return (new cljs.core.LazySeq(null,(function (){
var s__12442__$1 = s__12442;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12442__$1);
if(temp__4657__auto__){
var s__12442__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12442__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__12442__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__12444 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__12443 = (0);
while(true){
if((i__12443 < size__7426__auto__)){
var k = cljs.core._nth.call(null,c__7425__auto__,i__12443);
cljs.core.chunk_append.call(null,b__12444,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo,k)], null));

var G__12445 = (i__12443 + (1));
i__12443 = G__12445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12444),todomx$todo$td_to_map_$_iter__12441.call(null,cljs.core.chunk_rest.call(null,s__12442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12444),null);
}
} else {
var k = cljs.core.first.call(null,s__12442__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core.md_get.call(null,todo,k)], null),todomx$todo$td_to_map_$_iter__12441.call(null,cljs.core.rest.call(null,s__12442__$2)));
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
todomx.todo.td_to_json = (function todomx$todo$td_to_json(todo){
return tiltontec.util.core.map_to_json.call(null,todomx.todo.td_to_map.call(null,todo));
});
todomx.todo.reload_todo = (function todomx$todo$reload_todo(islots){
var net_slots = cljs.core.merge.call(null,islots,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("todomx.todo","todo","todomx.todo/todo",-267986601),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.c_in.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$2(islots,false)),new cljs.core.Keyword(null,"deleted","deleted",-510100639),(function (){var or__6638__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__6638__auto__)){
return or__6638__auto__;
} else {
return tiltontec.cell.core.c_in.call(null,null);
}
})()], null));
return cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,net_slots)));
});
todomx.todo.td_from_json = (function todomx$todo$td_from_json(json){
return todomx.todo.reload_todo.call(null,tiltontec.util.core.json_to_map.call(null,json));
});
todomx.todo.td_upsert = (function todomx$todo$td_upsert(td){
return tiltontec.tag.html.io_upsert.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,td)),JSON.stringify(todomx.todo.td_to_json.call(null,td)));
});
todomx.todo.td_load = (function todomx$todo$td_load(id){
return todomx.todo.td_from_json.call(null,JSON.parse(tiltontec.tag.html.io_read.call(null,id)));
});
todomx.todo.load_all = (function todomx$todo$load_all(){
var keys = tiltontec.tag.html.io_find.call(null,todomx.todo.TODO_LS_PREFIX);
return cljs.core.map.call(null,todomx.todo.td_load,tiltontec.tag.html.io_find.call(null,todomx.todo.TODO_LS_PREFIX));
});

//# sourceMappingURL=todo.js.map