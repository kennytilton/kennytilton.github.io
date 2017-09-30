// Compiled by ClojureScript 1.9.671 {}
goog.provide('todomx.matrix');
goog.require('cljs.core');
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
todomx.matrix.matrix = cljs.core.atom.call(null,null);






todomx.matrix.matrix_build_BANG_ = (function todomx$matrix$matrix_build_BANG_(){
return cljs.core.reset_BANG_.call(null,todomx.matrix.matrix,tiltontec.model.core.make.call(null,new cljs.core.Keyword("todomx.matrix","todoApp","todomx.matrix/todoApp",-2063259668),new cljs.core.Keyword(null,"route","route",329891309),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
if(cljs.core._EQ_.call(null,tiltontec.cell.base.unbound,old)){
return null;
} else {
return tiltontec.tag.html.io_upsert.call(null,"todo-matrixcljs.route",new$);
}
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"io-read","io-read",736682236,null),"todo-matrixcljs.route"),"All")),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_9442 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var or__6640__auto__ = tiltontec.tag.html.io_read.call(null,"todo-matrixcljs.route");
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return "All";
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_9442;
}})),new cljs.core.Keyword(null,"todos","todos",630308868),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("todomx.todo","todo-list","todomx.todo/todo-list",2069191062,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_9443 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return todomx.todo.todo_list.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_9443;
}})),new cljs.core.Keyword(null,"dom","dom",-1236537922),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"landing-page","landing-page",-967020582,null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_9444 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_9445 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return todomx.matrix.landing_page.call(null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9445;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_9444;
}}))));
});
todomx.matrix.dom = (function todomx$matrix$dom(){
return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todomx.matrix.matrix),new cljs.core.Keyword(null,"dom","dom",-1236537922));
});
todomx.matrix.router = bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null));
todomx.matrix.on_navigate = (function todomx$matrix$on_navigate(route,params,query){
if(cljs.core.truth_(cljs.core.deref.call(null,todomx.matrix.matrix))){
return tiltontec.model.core.md_reset_BANG_.call(null,cljs.core.deref.call(null,todomx.matrix.matrix),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name.call(null,route));
} else {
return null;
}
});
todomx.matrix.start_router = (function todomx$matrix$start_router(){
return bide.core.start_BANG_.call(null,todomx.matrix.router,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),todomx.matrix.on_navigate], null));
});



todomx.matrix.landing_page = (function todomx$matrix$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry","todo-entry",1548401545,null))),cljs.core.list(new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972)))], null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9446#","p1__9446#",1892581811,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__9446#","p1__9446#",1892581811,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),cljs.core.list(new cljs.core.Symbol(null,"dashboard-footer","dashboard-footer",-1106288423,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9447 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"header",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry","todo-entry",1548401545,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9451 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"todos")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9451,me__$1,cache__$1,_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9453 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9453;
}});})(_STAR_par_STAR_9451,me__$1,cache__$1,_STAR_par_STAR_9447,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = todomx.matrix.todo_entry.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9451;
}});})(_STAR_par_STAR_9447,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me__$1),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
});})(x__7483__auto__,_STAR_par_STAR_9447,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9446#","p1__9446#",1892581811,null)], null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"p1__9446#","p1__9446#",1892581811,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null)], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9459 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = todomx.matrix.toggle_all.call(null);
return cljs.core._conj.call(null,(function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list",new cljs.core.Keyword(null,"kid-values","kid-values",575730341),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var temp__4657__auto__ = todomx.matrix.mx_route.call(null,me__$2);
if(cljs.core.truth_(temp__4657__auto__)){
var rte = temp__4657__auto__;
return cljs.core.sort_by.call(null,todomx.todo.td_created,tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me__$2),(function (){var G__9462 = todomx.matrix.mx_route.call(null,me__$2);
switch (G__9462) {
case "All":
return new cljs.core.Keyword(null,"items","items",1031954938);

break;
case "Completed":
return new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098);

break;
case "Active":
return new cljs.core.Keyword(null,"items-active","items-active",-1058660354);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9462)].join('')));

}
})()));
} else {
return null;
}
});})(x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache))
),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),((function (x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache){
return (function (p1__9446_SHARP_){
return tiltontec.model.core.md_get.call(null,p1__9446_SHARP_,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});})(x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache))
,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),todomx.matrix.todo_list_item], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9463 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$2 = tiltontec.model.core.kid_values_kids.call(null,me__$2,cache__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9463;
}});})(x__7483__auto____$1,_STAR_par_STAR_9459,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9447,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9459;
}});})(x__7483__auto__,_STAR_par_STAR_9447,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$2 = todomx.matrix.dashboard_footer.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9447;
}}))),tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Double-click a to-do list item to edit it."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9464 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Double-click a to-do list item to edit it.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9464,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9466 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Double-click a to-do list item to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9466;
}});})(_STAR_par_STAR_9464,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9464,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9468 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Created by <a href=\"https://github.com/kennytilton\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9468;
}});})(x__7483__auto__,_STAR_par_STAR_9464,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9464,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9470 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9470;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9464,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9464;
}})))], null);
});
todomx.matrix.todo_entry = (function todomx$matrix$todo_entry(){
return tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs doing?",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","todo-process-on-enter","todomx.matrix/todo-process-on-enter",-1219251290,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9472 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9472;
}})));
});
todomx.matrix.todo_process_on_enter = (function todomx$matrix$todo_process_on_enter(e){
if(cljs.core._EQ_.call(null,e.key,"Enter")){
var raw = e.target.value;
var title = clojure.string.trim.call(null,raw);
if(cljs.core._EQ_.call(null,title,"")){
if((cljs.core.count.call(null,raw) > (0))){
window.alert("A reminder to do nothing? We like it! But no.");
} else {
}
} else {
tiltontec.model.core.md_reset_BANG_.call(null,todomx.matrix.mx_todos.call(null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709)),todomx.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null))));
}

return e.target.value = "";
} else {
return null;
}
});
todomx.matrix.toggle_all = (function todomx$matrix$toggle_all(){
return tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null)),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,todomx.todo.td_completed),todomx.matrix.mx_todo_items.call(null,me)))){
return new cljs.core.Keyword(null,"complete","complete",-500388775);
} else {
return new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822);
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","td-completed-toggle-all","todomx.matrix/td-completed-toggle-all",1897194418,null)))], null),"Mark all as complete"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9473 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9473,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core._EQ_.call(null,tiltontec.model.core.md_get.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822));
});})(_STAR_par_STAR_9473,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9473,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9475 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9475;
}});})(_STAR_par_STAR_9473,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","td-completed-toggle-all","todomx.matrix/td-completed-toggle-all",1897194418,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9473,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","td-completed-toggle-all","todomx.matrix/td-completed-toggle-all",1897194418,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,cljs.core.List.EMPTY);
});})(x__7483__auto__,_STAR_par_STAR_9473,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Mark all as complete")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9473,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9477 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9477;
}});})(x__7483__auto__,_STAR_par_STAR_9473,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9473;
}})));
});
todomx.matrix.td_completed_toggle_all = (function todomx$matrix$td_completed_toggle_all(event){
var action = tiltontec.model.core.md_get.call(null,tiltontec.model.core.mx_par.call(null,todomx.matrix.event_to_mx.call(null,event)),new cljs.core.Keyword(null,"action","action",-811238024));
var seq__9478 = cljs.core.seq.call(null,todomx.matrix.mx_todo_items.call(null));
var chunk__9479 = null;
var count__9480 = (0);
var i__9481 = (0);
while(true){
if((i__9481 < count__9480)){
var td = cljs.core._nth.call(null,chunk__9479,i__9481);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__9482 = seq__9478;
var G__9483 = chunk__9479;
var G__9484 = count__9480;
var G__9485 = (i__9481 + (1));
seq__9478 = G__9482;
chunk__9479 = G__9483;
count__9480 = G__9484;
i__9481 = G__9485;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9478);
if(temp__4657__auto__){
var seq__9478__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9478__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__9478__$1);
var G__9486 = cljs.core.chunk_rest.call(null,seq__9478__$1);
var G__9487 = c__7460__auto__;
var G__9488 = cljs.core.count.call(null,c__7460__auto__);
var G__9489 = (0);
seq__9478 = G__9486;
chunk__9479 = G__9487;
count__9480 = G__9488;
i__9481 = G__9489;
continue;
} else {
var td = cljs.core.first.call(null,seq__9478__$1);
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__9490 = cljs.core.next.call(null,seq__9478__$1);
var G__9491 = null;
var G__9492 = (0);
var G__9493 = (0);
seq__9478 = G__9490;
chunk__9479 = G__9491;
count__9480 = G__9492;
i__9481 = G__9493;
continue;
}
} else {
return null;
}
}
break;
}
});
todomx.matrix.todo_list_item = (function todomx$matrix$todo_list_item(me,td){
return tiltontec.tag.gen.make_tag.call(null,"li",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"todo","todo",-1046442570),td,new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)),"completed","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(todomx.todo.td_completed.call(null,td))){
return "completed";
} else {
return "";
}
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Symbol(null,"unbound","unbound",274204873,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"All"),cljs.core.list(new cljs.core.Symbol(null,"xor","xor",520589273,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"Active"),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503)))),"block",new cljs.core.Keyword(null,"default","default",-1987822328),"none"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var route = todomx.matrix.mx_route.call(null,me__$1);
if((route == null)){
return tiltontec.cell.base.unbound;
} else {
if(cljs.core.truth_((function (){var or__6640__auto__ = cljs.core._EQ_.call(null,route,"All");
if(or__6640__auto__){
return or__6640__auto__;
} else {
return tiltontec.util.core.xor.call(null,cljs.core._EQ_.call(null,route,"Active"),tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503)));
}
})())){
return "block";
} else {
return "none";

}
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-toggle-completed","todomx.matrix/todo-toggle-completed",1575642339,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-start-editing","todomx.matrix/todo-start-editing",-2003770986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","delete-by-key","todomx.matrix/delete-by-key",-1902095,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-edit","todomx.matrix/todo-edit",-1671154772,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-edit","todomx.matrix/todo-edit",-1671154772,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9494 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-toggle-completed","todomx.matrix/todo-toggle-completed",1575642339,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","todo-start-editing","todomx.matrix/todo-start-editing",-2003770986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","delete-by-key","todomx.matrix/delete-by-key",-1902095,null),cljs.core.list(new cljs.core.Symbol(null,"td-id","td-id",-220247725,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9502 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"input-type","input-type",856973840),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return tiltontec.model.core.md_get.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});})(_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","todo-toggle-completed","todomx.matrix/todo-toggle-completed",1575642339,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,(function (){var x__7483__auto__ = todomx.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto__);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9504 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9504;
}});})(_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","todo-start-editing","todomx.matrix/todo-start-editing",-2003770986,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"td","td",-1174502416,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9506 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = todomx.todo.td_title.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9506;
}});})(x__7483__auto__,_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","delete-by-key","todomx.matrix/delete-by-key",-1902095,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,(function (){var x__7483__auto____$2 = todomx.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9508 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9508;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9502,me__$2,cache__$1,_STAR_par_STAR_9494,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9502;
}});})(_STAR_par_STAR_9494,me__$1,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","todo-edit","todomx.matrix/todo-edit",-1671154772,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,(function (){var x__7483__auto____$1 = todomx.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})());
})(),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","todo-edit","todomx.matrix/todo-edit",-1671154772,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,(function (){var x__7483__auto____$1 = todomx.todo.td_id.call(null,td);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})());
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9494,me__$1,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9510 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9510;
}});})(x__7483__auto__,_STAR_par_STAR_9494,me__$1,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9494;
}})));
});
todomx.matrix.delete_by_key = (function todomx$matrix$delete_by_key(event,id){
return todomx.todo.td_delete_BANG_.call(null,todomx.matrix.mx_todo_lookup.call(null,id));
});
todomx.matrix.todo_toggle_completed = (function todomx$matrix$todo_toggle_completed(event,id){
var tds = todomx.matrix.mx_todo_items.call(null);
var td = cljs.core.some.call(null,((function (tds){
return (function (td){
if(cljs.core._EQ_.call(null,id,todomx.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
});})(tds))
,tds);
return todomx.todo.td_toggle_completed_BANG_.call(null,td);
});
todomx.matrix.todo_start_editing = (function todomx$matrix$todo_start_editing(e){
var lbl = todomx.matrix.event_to_mx.call(null,e);
var li = tiltontec.tag.html.mxa_find_tag.call(null,lbl,"li");
var edt_dom = tiltontec.tag.html.tag_dom.call(null,li).getElementsByClassName("edit").item((0));
edt_dom.value = todomx.todo.td_title.call(null,tiltontec.model.core.md_get.call(null,li,new cljs.core.Keyword(null,"todo","todo",-1046442570)));

tiltontec.tag.html.tag_dom.call(null,li).classList.add("editing");

edt_dom.focus();

return edt_dom.setSelectionRange((0),edt_dom.value.length);
});
todomx.matrix.todo_edit = (function todomx$matrix$todo_edit(e,td_key){
var edom = e.target;
var li_dom = tiltontec.tag.html.dom_ancestor_by_tag.call(null,edom,"li");
if(cljs.core.truth_(tiltontec.tag.html.dom_has_class.call(null,li_dom,"editing"))){
var title = clojure.string.trim.call(null,edom.value);
var td = todomx.matrix.mx_todo_lookup.call(null,td_key,todomx.matrix.event_to_mx.call(null,e));
if((cljs.core._EQ_.call(null,e.type,"blur")) || (cljs.core._EQ_.call(null,e.key,"Enter"))){
if(cljs.core._EQ_.call(null,title,"")){
todomx.todo.td_delete_BANG_.call(null,td);
} else {
tiltontec.model.core.md_reset_BANG_.call(null,td,new cljs.core.Keyword(null,"title","title",636505583),title);
}

return li_dom.classList.remove("editing");
} else {
if(cljs.core._EQ_.call(null,e.key,"Escape")){
return li_dom.classList.remove("editing");
} else {
return null;
}
}
} else {
return null;
}
});
todomx.matrix.dashboard_footer = (function todomx$matrix$dashboard_footer(){
return tiltontec.tag.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,me),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))))], null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"on-evt!","on-evt!",-1722535569,null),new cljs.core.Symbol("todomx.matrix","clear-completed","todomx.matrix/clear-completed",107714902,null))], null),"Clear completed"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9511 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto__ = tiltontec.tag.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",cljs.core.count.call(null,cljs.core.remove.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null,me__$1))));
});})(_STAR_par_STAR_9511,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9513 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.List.EMPTY)));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9513;
}});})(_STAR_par_STAR_9511,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9547 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = (function (){var iter__7429__auto__ = ((function (_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function todomx$matrix$dashboard_footer_$_iter__9564(s__9565){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (){
var s__9565__$1 = s__9565;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9565__$1);
if(temp__4657__auto__){
var s__9565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9565__$2)){
var c__7427__auto__ = cljs.core.chunk_first.call(null,s__9565__$2);
var size__7428__auto__ = cljs.core.count.call(null,c__7427__auto__);
var b__9567 = cljs.core.chunk_buffer.call(null,size__7428__auto__);
if((function (){var i__9566 = (0);
while(true){
if((i__9566 < size__7428__auto__)){
var vec__9568 = cljs.core._nth.call(null,c__7427__auto__,i__9566);
var label = cljs.core.nth.call(null,vec__9568,(0),null);
var route = cljs.core.nth.call(null,vec__9568,(1),null);
cljs.core.chunk_append.call(null,b__9567,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__9566,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9571 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todomx.matrix.mx_route.call(null,me__$3));
});})(i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9573 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9573;
}});})(i__9566,_STAR_par_STAR_9571,me__$2,cache__$2,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9571;
}});})(i__9566,vec__9568,label,route,c__7427__auto__,size__7428__auto__,b__9567,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
)));

var G__9582 = (i__9566 + (1));
i__9566 = G__9582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9567),todomx$matrix$dashboard_footer_$_iter__9564.call(null,cljs.core.chunk_rest.call(null,s__9565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9567),null);
}
} else {
var vec__9574 = cljs.core.first.call(null,s__9565__$2);
var label = cljs.core.nth.call(null,vec__9574,(0),null);
var route = cljs.core.nth.call(null,vec__9574,(1),null);
return cljs.core.cons.call(null,tiltontec.tag.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected",""))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9577 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = tiltontec.tag.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"selected","selected",574897764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),todomx.matrix.mx_route.call(null,me__$3));
});})(_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected","selected",574897764)),"selected","")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(tiltontec.model.core.md_get.call(null,me__$3,new cljs.core.Keyword(null,"selected","selected",574897764)))){
return "selected";
} else {
return "";
}
});})(_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9579 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7483__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9579;
}});})(_STAR_par_STAR_9577,me__$2,cache__$2,vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9577;
}});})(vec__9574,label,route,s__9565__$2,temp__4657__auto__,_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
)),todomx$matrix$dashboard_footer_$_iter__9564.call(null,cljs.core.rest.call(null,s__9565__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
,null,null));
});})(_STAR_par_STAR_9547,me__$1,cache__$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
;
return iter__7429__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9547;
}});})(x__7483__auto__,_STAR_par_STAR_9511,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7483__auto____$2 = tiltontec.tag.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,cljs.core.filter.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null,me__$1))) === (0));
});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){var fn_name__9303__auto__ = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("todomx.matrix","clear-completed","todomx.matrix/clear-completed",107714902,null))].join(''),"-","_"),"/",".");
return cljs.pprint.cl_format.call(null,null,tiltontec.tag.gen.on_event_attr_template,fn_name__9303__auto__,cljs.core.List.EMPTY);
})()], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for c?kids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clear completed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for c?kids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_9581 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9581;
}});})(x__7483__auto____$1,x__7483__auto__,_STAR_par_STAR_9511,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7483__auto____$2);
})(),x__7483__auto____$1);
})(),x__7483__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_9511;
}})));
});
todomx.matrix.clear_completed = (function todomx$matrix$clear_completed(e){
var seq__9583 = cljs.core.seq.call(null,cljs.core.filter.call(null,todomx.todo.td_completed,todomx.matrix.mx_todo_items.call(null)));
var chunk__9584 = null;
var count__9585 = (0);
var i__9586 = (0);
while(true){
if((i__9586 < count__9585)){
var td = cljs.core._nth.call(null,chunk__9584,i__9586);
todomx.todo.td_delete_BANG_.call(null,td);

var G__9587 = seq__9583;
var G__9588 = chunk__9584;
var G__9589 = count__9585;
var G__9590 = (i__9586 + (1));
seq__9583 = G__9587;
chunk__9584 = G__9588;
count__9585 = G__9589;
i__9586 = G__9590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9583);
if(temp__4657__auto__){
var seq__9583__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9583__$1)){
var c__7460__auto__ = cljs.core.chunk_first.call(null,seq__9583__$1);
var G__9591 = cljs.core.chunk_rest.call(null,seq__9583__$1);
var G__9592 = c__7460__auto__;
var G__9593 = cljs.core.count.call(null,c__7460__auto__);
var G__9594 = (0);
seq__9583 = G__9591;
chunk__9584 = G__9592;
count__9585 = G__9593;
i__9586 = G__9594;
continue;
} else {
var td = cljs.core.first.call(null,seq__9583__$1);
todomx.todo.td_delete_BANG_.call(null,td);

var G__9595 = cljs.core.next.call(null,seq__9583__$1);
var G__9596 = null;
var G__9597 = (0);
var G__9598 = (0);
seq__9583 = G__9595;
chunk__9584 = G__9596;
count__9585 = G__9597;
i__9586 = G__9598;
continue;
}
} else {
return null;
}
}
break;
}
});
todomx.matrix.mx_route = (function todomx$matrix$mx_route(mx){
return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_find_matrix.call(null,mx),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a node in the matrix, navigate to the root and read the todos. After
 *   the matrix is initially loaded (say in an event handler), one can pass nil
 *   and find the matrix in @matrix.
 */
todomx.matrix.mx_todos = (function todomx$matrix$mx_todos(var_args){
var G__9600 = arguments.length;
switch (G__9600) {
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
if(cljs.core.truth_(cljs.core.deref.call(null,todomx.matrix.matrix))){
} else {
throw (new Error("Assert failed: (clojure.core/deref matrix)"));
}

return tiltontec.model.core.md_get.call(null,cljs.core.deref.call(null,todomx.matrix.matrix),new cljs.core.Keyword(null,"todos","todos",630308868));
});

todomx.matrix.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return todomx.matrix.mx_todos.call(null);
} else {
var mtrx = todomx.matrix.mx_find_matrix.call(null,mx);
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core.md_get.call(null,mtrx,new cljs.core.Keyword(null,"todos","todos",630308868));
}
});

todomx.matrix.mx_todos.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_items = (function todomx$matrix$mx_todo_items(var_args){
var G__9603 = arguments.length;
switch (G__9603) {
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
return todomx.matrix.mx_todo_items.call(null,null);
});

todomx.matrix.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if(cljs.core.truth_(todomx.matrix.mx_todos.call(null,mx))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mti"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(mx-todos mx)")].join('')));
}

return tiltontec.model.core.md_get.call(null,todomx.matrix.mx_todos.call(null,mx),new cljs.core.Keyword(null,"items","items",1031954938));
});

todomx.matrix.mx_todo_items.cljs$lang$maxFixedArity = 1;

todomx.matrix.mx_todo_lookup = (function todomx$matrix$mx_todo_lookup(var_args){
var G__9606 = arguments.length;
switch (G__9606) {
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
return todomx.matrix.mx_todo_lookup.call(null,id,null);
});

todomx.matrix.mx_todo_lookup.cljs$core$IFn$_invoke$arity$2 = (function (id,mx){
return cljs.core.some.call(null,(function (td){
if(cljs.core._EQ_.call(null,id,todomx.todo.td_id.call(null,td))){
return td;
} else {
return null;
}
}),todomx.matrix.mx_todo_items.call(null,mx));
});

todomx.matrix.mx_todo_lookup.cljs$lang$maxFixedArity = 2;

todomx.matrix.event_to_mx = (function todomx$matrix$event_to_mx(e){
return tiltontec.tag.gen.dom_tag.call(null,e.target);
});
todomx.matrix.mx_find_matrix = (function todomx$matrix$mx_find_matrix(mx){
return tiltontec.tag.html.mxa_find_type.call(null,mx,new cljs.core.Keyword("todomx.matrix","todoApp","todomx.matrix/todoApp",-2063259668));
});

//# sourceMappingURL=matrix.js.map