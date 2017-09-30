// Compiled by ClojureScript 1.9.671 {}
goog.provide('todo.matrix');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.tag.html');
goog.require('tiltontec.tag.gen');
goog.require('todo.todo');
/**
 * Populated ny matrix-build! with the root of the application matrix.
 */
todo.matrix.matrix = cljs.core.atom.call(null,null);






todo.matrix.matrix_build_BANG_ = (function todo$matrix$matrix_build_BANG_(){
return cljs.core.reset_BANG_.call(null,todo.matrix.matrix,tiltontec.model.core.make.call(null,new cljs.core.Keyword("todo.matrix","todoApp","todo.matrix/todoApp",-1937236617),new cljs.core.Keyword(null,"route","route",329891309),tiltontec.cell.core.c_in.call(null,null),new cljs.core.Keyword(null,"todos","todos",630308868),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("todo.todo","todo-list","todo.todo/todo-list",1827350747,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_16300 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todo.todo.todo_list.call(null,me);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16300;
}})),new cljs.core.Keyword(null,"dom","dom",-1236537922),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("md","*par*","md/*par*",1864139880,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"landing-page","landing-page",-967020582,null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_16301 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_16302 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return todo.matrix.landing_page.call(null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16302;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16301;
}}))));
});
todo.matrix.dom = (function todo$matrix$dom(){
return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todo.matrix.matrix),new cljs.core.Keyword(null,"dom","dom",-1236537922));
});
todo.matrix.router = bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null));
todo.matrix.on_navigate = (function todo$matrix$on_navigate(route,params,query){
return tiltontec.model.core.md_reset_BANG_.call(null,cljs.core.deref.call(null,todo.matrix.matrix),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name.call(null,route));
});
todo.matrix.start_router = (function todo$matrix$start_router(){
return bide.core.start_BANG_.call(null,todo.matrix.router,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("todo","all","todo/all",885471764),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),todo.matrix.on_navigate], null));
});



todo.matrix.landing_page = (function todo$matrix$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry","todo-entry",1548401545,null))),cljs.core.list(new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-find-matrix","mx-find-matrix",1173112654,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16303#","p1__16303#",-212534405,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__16303#","p1__16303#",-212534405,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),cljs.core.list(new cljs.core.Symbol(null,"dashboard-footer","dashboard-footer",-1106288423,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16304 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"header",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry","todo-entry",1548401545,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16308 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"todos")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16308,me__$1,cache__$1,_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16310 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16310;
}});})(_STAR_par_STAR_16308,me__$1,cache__$1,_STAR_par_STAR_16304,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = todo.matrix.todo_entry.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16308;
}});})(_STAR_par_STAR_16304,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,todo.matrix.mx_todo_items.call(null,me__$1)) === (0));
});})(x__7481__auto__,_STAR_par_STAR_16304,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-find-matrix","mx-find-matrix",1173112654,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16303#","p1__16303#",-212534405,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__16303#","p1__16303#",-212534405,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16314 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = todo.matrix.toggle_all.call(null);
return cljs.core._conj.call(null,(function (){var x__7481__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-find-matrix","mx-find-matrix",1173112654,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var route = tiltontec.model.core.md_get.call(null,todo.matrix.mx_find_matrix.call(null,me__$2),new cljs.core.Keyword(null,"route","route",329891309));
return todo.matrix.mx_todo_items.call(null,me__$2);
});})(x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache))
),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),((function (x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache){
return (function (p1__16303_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__16303_SHARP_,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});})(x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache))
,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),todo.matrix.todo_list_item], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16316 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$2 = tiltontec.model.core.kid_values_kids.call(null,me__$2,cache__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16316;
}});})(x__7481__auto____$1,_STAR_par_STAR_16314,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16304,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})(),x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16314;
}});})(x__7481__auto__,_STAR_par_STAR_16304,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$2 = todo.matrix.dashboard_footer.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})(),x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16304;
}}))),tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Double-click a todo to edit it."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16317 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Double-click a todo to edit it.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16317,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16319 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Double-click a todo to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16319;
}});})(_STAR_par_STAR_16317,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16317,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16321 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Created by <a href=\"http://tiltontec.com\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16321;
}});})(x__7481__auto__,_STAR_par_STAR_16317,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16317,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16323 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Inspired by <a href=\"http://todomvc.com\">TodoMVC</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16323;
}});})(x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16317,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})(),x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16317;
}})))], null);
});
todo.matrix.todo_entry = (function todo$matrix$todo_entry(){
return tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","todo-process-on-enter","todo.matrix/todo-process-on-enter",-1359032781,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16324 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16324;
}})));
});
todo.matrix.todo_process_on_enter = (function todo$matrix$todo_process_on_enter(e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
var raw = e.target.value;
var title = clojure.string.trim.call(null,raw);
if(cljs.core._EQ_.call(null,title,"")){
if((cljs.core.count.call(null,raw) > (0))){
window.alert("A reminder to do nothing? We like it! But no.");
} else {
}
} else {
tiltontec.model.core.md_reset_BANG_.call(null,todo.matrix.mx_todos.call(null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,tiltontec.model.core.md_get.call(null,todo.matrix.mx_todos.call(null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709)),todo.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null))));
}

return e.target.value = "";
} else {
return null;
}
});
todo.matrix.toggle_all = (function todo$matrix$toggle_all(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"action","action",-811238024),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null)),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,todo.todo.td_completed),todo.matrix.mx_todo_items.call(null,me)))){
return new cljs.core.Keyword(null,"complete","complete",-500388775);
} else {
return new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822);
}
})),new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core._EQ_.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16325 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16325;
}}))),tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","td-completed-toggle-all","todo.matrix/td-completed-toggle-all",159513637,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Mark all as complete")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16326 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16326;
}})))], null);
});
todo.matrix.td_completed_toggle_all = (function todo$matrix$td_completed_toggle_all(event){
var input = tiltontec.model.core.mxu_find_class.call(null,todo.matrix.event_to_mx.call(null,event),"toggle-all");
var action = tiltontec.model.core.md_get.call(null,input,new cljs.core.Keyword(null,"action","action",-811238024));
var seq__16327 = cljs.core.seq.call(null,todo.matrix.mx_todo_items.call(null));
var chunk__16328 = null;
var count__16329 = (0);
var i__16330 = (0);
while(true){
if((i__16330 < count__16329)){
var td = cljs.core._nth.call(null,chunk__16328,i__16330);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__16331 = seq__16327;
var G__16332 = chunk__16328;
var G__16333 = count__16329;
var G__16334 = (i__16330 + (1));
seq__16327 = G__16331;
chunk__16328 = G__16332;
count__16329 = G__16333;
i__16330 = G__16334;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16327);
if(temp__4657__auto__){
var seq__16327__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16327__$1)){
var c__7458__auto__ = cljs.core.chunk_first.call(null,seq__16327__$1);
var G__16335 = cljs.core.chunk_rest.call(null,seq__16327__$1);
var G__16336 = c__7458__auto__;
var G__16337 = cljs.core.count.call(null,c__7458__auto__);
var G__16338 = (0);
seq__16327 = G__16335;
chunk__16328 = G__16336;
count__16329 = G__16337;
i__16330 = G__16338;
continue;
} else {
var td = cljs.core.first.call(null,seq__16327__$1);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__16339 = cljs.core.next.call(null,seq__16327__$1);
var G__16340 = null;
var G__16341 = (0);
var G__16342 = (0);
seq__16327 = G__16339;
chunk__16328 = G__16340;
count__16329 = G__16341;
i__16330 = G__16342;
continue;
}
} else {
return null;
}
}
break;
}
});
todo.matrix.todo_list_item = (function todo$matrix$todo_list_item(me,td){
return tiltontec.tag.gen.make_tag.call(null,"li",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"todo","todo",-1046442570),td,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"todo-li","todo-li",-324226635),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)),"completed","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(todo.todo.td_completed.call(null,td))){
return "completed";
} else {
return "";
}
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Symbol(null,"unbound","unbound",274204873,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"All"),cljs.core.list(new cljs.core.Symbol(null,"xor","xor",520589273,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"Active"),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503)))),"block",new cljs.core.Keyword(null,"default","default",-1987822328),"none"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var route = todo.matrix.mx_route.call(null,me__$1);
if((route == null)){
return tiltontec.cell.base.unbound;
} else {
if(cljs.core.truth_((function (){var or__6638__auto__ = cljs.core._EQ_.call(null,route,"All");
if(or__6638__auto__){
return or__6638__auto__;
} else {
return tiltontec.util.core.xor.call(null,cljs.core._EQ_.call(null,route,"Active"),tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503)));
}
})())){
return "block";
} else {
return "none";

}
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-toggle-completed","todo.matrix/todo-toggle-completed",1417507710,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-start-editing","todo.matrix/todo-start-editing",-1859783639,null))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","delete-by-key","todo.matrix/delete-by-key",-149817716,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c?n","c?n",231848553,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"onblur","onblur",689939618),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-edit","todo.matrix/todo-edit",-2064565193,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-edit","todo.matrix/todo-edit",-2064565193,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16343 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-toggle-completed","todo.matrix/todo-toggle-completed",1417507710,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","todo-start-editing","todo.matrix/todo-start-editing",-1859783639,null))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","delete-by-key","todo.matrix/delete-by-key",-149817716,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16351 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});})(_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","todo-toggle-completed","todo.matrix/todo-toggle-completed",1417507710,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,(function (){var x__7481__auto__ = todo.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto__);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16353 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16353;
}});})(_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","todo-start-editing","todo.matrix/todo-start-editing",-1859783639,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16355 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = todo.todo.td_title.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16355;
}});})(x__7481__auto__,_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","delete-by-key","todo.matrix/delete-by-key",-149817716,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,(function (){var x__7481__auto____$2 = todo.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16357 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16357;
}});})(x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16351,me__$2,cache__$1,_STAR_par_STAR_16343,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})(),x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16351;
}});})(_STAR_par_STAR_16343,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_depender_STAR_16360 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todo.todo.td_title.call(null,td);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_16360;
}});})(x__7481__auto__,_STAR_par_STAR_16343,me__$1,cache))
),new cljs.core.Keyword(null,"onblur","onblur",689939618),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","todo-edit","todo.matrix/todo-edit",-2064565193,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,(function (){var x__7481__auto____$1 = todo.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})());
})(),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","todo-edit","todo.matrix/todo-edit",-2064565193,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,(function (){var x__7481__auto____$1 = todo.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16343,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16361 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16361;
}});})(x__7481__auto__,_STAR_par_STAR_16343,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16343;
}})));
});
todo.matrix.delete_by_key = (function todo$matrix$delete_by_key(event,id){
return todo.todo.td_delete.call(null,todo.matrix.mx_todo_lookup.call(null,id));
});
todo.matrix.todo_toggle_completed = (function todo$matrix$todo_toggle_completed(event,id){
var is = todo.matrix.mx_todo_items.call(null);
var td = cljs.core.some.call(null,((function (is){
return (function (td){
if(cljs.core._EQ_.call(null,id,todo.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
});})(is))
,is);
return todo.todo.td_toggle_completed.call(null,td);
});
todo.matrix.todo_start_editing = (function todo$matrix$todo_start_editing(e){
var lbl = todo.matrix.event_to_mx.call(null,e);
var li = tiltontec.tag.html.mxa_find_tag.call(null,lbl,"li");
var edt_dom = tiltontec.tag.html.tag_dom.call(null,li).getElementsByClassName("edit").item((0));
tiltontec.tag.html.tag_dom.call(null,li).classList.add("editing");

edt_dom.focus();

return edt_dom.setSelectionRange((0),edt_dom.value.length);
});
todo.matrix.todo_edit = (function todo$matrix$todo_edit(e,td_key){
if(tiltontec.cell.base._STAR_within_integrity_STAR_){
return null;
} else {
var edom = e.target;
var title = clojure.string.trim.call(null,edom.value);
var td = todo.matrix.mx_todo_lookup.call(null,td_key,todo.matrix.event_to_mx.call(null,e));
var li_dom = tiltontec.tag.html.dom_ancestor_by_tag.call(null,edom,"li");
if(cljs.core.truth_((function (){var or__6638__auto__ = (function (){var and__6626__auto__ = cljs.core._EQ_.call(null,e.type,"blur");
if(and__6626__auto__){
return tiltontec.tag.html.dom_has_class.call(null,li_dom,"editing");
} else {
return and__6626__auto__;
}
})();
if(cljs.core.truth_(or__6638__auto__)){
return or__6638__auto__;
} else {
return cljs.core._EQ_.call(null,e.key,"Enter");
}
})())){
if(cljs.core._EQ_.call(null,title,"")){
todo.todo.td_delete.call(null,td);
} else {
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"title","title",636505583),title);
}

edom.value = title;

return li_dom.classList.remove("editing");
} else {
if(cljs.core._EQ_.call(null,e.key,"Escape")){
edom.value = todo.todo.td_title.call(null,td);

return li_dom.classList.remove("editing");
} else {
return null;
}
}
}
});
todo.matrix.dashboard_footer = (function todo$matrix$dashboard_footer(){
return tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return (cljs.core.count.call(null,todo.matrix.mx_todo_items.call(null,me)) === (0));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))))], null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todo.matrix","clear-completed","todo.matrix/clear-completed",249466851,null))], null),"Clear completed"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16362 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto__ = tiltontec.tag.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",cljs.core.count.call(null,cljs.core.remove.call(null,todo.todo.td_completed,todo.matrix.mx_todo_items.call(null,me__$1))));
});})(_STAR_par_STAR_16362,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16364 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16364;
}});})(_STAR_par_STAR_16362,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16398 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = (function (){var iter__7427__auto__ = ((function (_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function todo$matrix$dashboard_footer_$_iter__16415(s__16416){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (){
var s__16416__$1 = s__16416;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16416__$1);
if(temp__4657__auto__){
var s__16416__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16416__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__16416__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__16418 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__16417 = (0);
while(true){
if((i__16417 < size__7426__auto__)){
var vec__16419 = cljs.core._nth.call(null,c__7425__auto__,i__16417);
var label = cljs.core.nth.call(null,vec__16419,(0),null);
var route = cljs.core.nth.call(null,vec__16419,(1),null);
cljs.core.chunk_append.call(null,b__16418,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16417,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16422 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todo.matrix.mx_route.call(null,me__$3));
});})(i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16424 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16424;
}});})(i__16417,_STAR_par_STAR_16422,me__$2,cache__$2,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16422;
}});})(i__16417,vec__16419,label,route,c__7425__auto__,size__7426__auto__,b__16418,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
)));

var G__16433 = (i__16417 + (1));
i__16417 = G__16433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16418),todo$matrix$dashboard_footer_$_iter__16415.call(null,cljs.core.chunk_rest.call(null,s__16416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16418),null);
}
} else {
var vec__16425 = cljs.core.first.call(null,s__16416__$2);
var label = cljs.core.nth.call(null,vec__16425,(0),null);
var route = cljs.core.nth.call(null,vec__16425,(1),null);
return cljs.core.cons.call(null,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16428 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todo.matrix.mx_route.call(null,me__$3));
});})(_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16430 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7481__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16430;
}});})(_STAR_par_STAR_16428,me__$2,cache__$2,vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16428;
}});})(vec__16425,label,route,s__16416__$2,temp__4657__auto__,_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
)),todo$matrix$dashboard_footer_$_iter__16415.call(null,cljs.core.rest.call(null,s__16416__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
,null,null));
});})(_STAR_par_STAR_16398,me__$1,cache__$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
;
return iter__7427__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16398;
}});})(x__7481__auto__,_STAR_par_STAR_16362,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7481__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,cljs.core.filter.call(null,todo.todo.td_completed,todo.matrix.mx_todo_items.call(null,me__$1))) === (0));
});})(x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__16168__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todo.matrix","clear-completed","todo.matrix/clear-completed",249466851,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__16168__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clear completed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_16432 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16432;
}});})(x__7481__auto____$1,x__7481__auto__,_STAR_par_STAR_16362,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7481__auto____$2);
})(),x__7481__auto____$1);
})(),x__7481__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_16362;
}})));
});
todo.matrix.clear_completed = (function todo$matrix$clear_completed(e){
var seq__16434 = cljs.core.seq.call(null,cljs.core.filter.call(null,todo.todo.td_completed,todo.matrix.mx_todo_items.call(null)));
var chunk__16435 = null;
var count__16436 = (0);
var i__16437 = (0);
while(true){
if((i__16437 < count__16436)){
var td = cljs.core._nth.call(null,chunk__16435,i__16437);
todo.todo.td_delete.call(null,td);

var G__16438 = seq__16434;
var G__16439 = chunk__16435;
var G__16440 = count__16436;
var G__16441 = (i__16437 + (1));
seq__16434 = G__16438;
chunk__16435 = G__16439;
count__16436 = G__16440;
i__16437 = G__16441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16434);
if(temp__4657__auto__){
var seq__16434__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16434__$1)){
var c__7458__auto__ = cljs.core.chunk_first.call(null,seq__16434__$1);
var G__16442 = cljs.core.chunk_rest.call(null,seq__16434__$1);
var G__16443 = c__7458__auto__;
var G__16444 = cljs.core.count.call(null,c__7458__auto__);
var G__16445 = (0);
seq__16434 = G__16442;
chunk__16435 = G__16443;
count__16436 = G__16444;
i__16437 = G__16445;
continue;
} else {
var td = cljs.core.first.call(null,seq__16434__$1);
todo.todo.td_delete.call(null,td);

var G__16446 = cljs.core.next.call(null,seq__16434__$1);
var G__16447 = null;
var G__16448 = (0);
var G__16449 = (0);
seq__16434 = G__16446;
chunk__16435 = G__16447;
count__16436 = G__16448;
i__16437 = G__16449;
continue;
}
} else {
return null;
}
}
break;
}
});
todo.matrix.mx_route = (function todo$matrix$mx_route(mx){
return tiltontec.model.core.md_get.call(null,todo.matrix.mx_find_matrix.call(null,mx),new cljs.core.Keyword(null,"route","route",329891309));
});
todo.matrix.mx_todos = (function todo$matrix$mx_todos(var_args){
var G__16451 = arguments.length;
switch (G__16451) {
case 0:
return todo.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todo.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todo.matrix.mx_todos.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,todo.matrix.matrix))){
} else {
throw (new Error("Assert failed: (clojure.core/deref matrix)"));
}

return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todo.matrix.matrix),new cljs.core.Keyword(null,"todos","todos",630308868));
});

todo.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return todo.matrix.mx_todos.call(null);
} else {
var mtrx = todo.matrix.mx_find_matrix.call(null,mx);
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core.md_get.call(null,mtrx,new cljs.core.Keyword(null,"todos","todos",630308868));
}
});

todo.matrix.mx_todos.cljs$lang$maxFixedArity = 1;

todo.matrix.mx_todo_items = (function todo$matrix$mx_todo_items(var_args){
var G__16454 = arguments.length;
switch (G__16454) {
case 0:
return todo.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return todo.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todo.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$0 = (function (){
return todo.matrix.mx_todo_items.call(null,null);
});

todo.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if(cljs.core.truth_(todo.matrix.mx_todos.call(null,mx))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mti"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(mx-todos mx)")].join('')));
}

return tiltontec.model.core.md_get.call(null,todo.matrix.mx_todos.call(null,mx),new cljs.core.Keyword(null,"items","items",1031954938));
});

todo.matrix.mx_todo_items.cljs$lang$maxFixedArity = 1;

todo.matrix.mx_todo_lookup = (function todo$matrix$mx_todo_lookup(var_args){
var G__16457 = arguments.length;
switch (G__16457) {
case 1:
return todo.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return todo.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

todo.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$1 = (function (id){
return todo.matrix.mx_todo_lookup.call(null,id,null);
});

todo.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2 = (function (id,mx){
return cljs.core.some.call(null,(function (td){
if(cljs.core._EQ_.call(null,id,todo.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
}),todo.matrix.mx_todo_items.call(null,mx));
});

todo.matrix.mx_todo_lookup.cljs$lang$maxFixedArity = 2;

todo.matrix.event_to_mx = (function todo$matrix$event_to_mx(e){
return tiltontec.tag.gen.dom_tag.call(null,e.target);
});
todo.matrix.mx_find_matrix = (function todo$matrix$mx_find_matrix(mx){
return tiltontec.tag.html.mxa_find_type.call(null,mx,new cljs.core.Keyword("todo.matrix","todoApp","todo.matrix/todoApp",-1937236617));
});

//# sourceMappingURL=matrix.js.map