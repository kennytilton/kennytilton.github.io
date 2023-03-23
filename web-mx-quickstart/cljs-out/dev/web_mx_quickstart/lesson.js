// Compiled by ClojureScript 1.10.773 {}
goog.provide('web_mx_quickstart.lesson');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('tiltontec.matrix.api');
goog.require('tiltontec.web_mx.api');
web_mx_quickstart.lesson.tl_dr = (function web_mx_quickstart$lesson$tl_dr(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The count is now...."),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),"42"),cljs.core.list(new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),"Increment Feature Not Yet Implemented"))], null),cljs.core.list(new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),"+")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16483 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16484 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16484);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The count is now....")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16485 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16486 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16486);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16485);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"42")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16487 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16488 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16488);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16487);
}}))),(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"svg",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){
return alert("Increment Feature Not Yet Implemented");
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),"+"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16489 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16490 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16490);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"circle",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"text",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"+")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16491 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16492 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16492);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16491);
}}))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16489);
}}))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16483);
}})));
});
web_mx_quickstart.lesson.just_html = (function web_mx_quickstart$lesson$just_html(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The count is now...."),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),"42"),cljs.core.list(new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),"Increment Feature Not Yet Implemented"))], null),cljs.core.list(new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),"+")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16493 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16494 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16494);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The count is now....")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16495 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16496 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16496);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The count is now....",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16495);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"42")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16497 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16498 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16498);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16497);
}}))),(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"svg",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){
return alert("Increment Feature Not Yet Implemented");
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),"+"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16499 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16500 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16500);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"circle",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"text",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"+")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16501 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16502 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16502);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16501);
}}))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16499);
}}))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16493);
}})));
});
web_mx_quickstart.lesson.ex_just_html = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Keyword(null,"exercise","exercise",-801618741),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"menu","menu",352255198)],["tiltontec.example.quick-start.lesson/just-html",web_mx_quickstart.lesson.just_html,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Feel free to experiment with other HTML or SVG tags.","Where HTML has <code>&lt;tag attributes*> children*&lt;/tag></code><br>...Web/MX has: <code>(tag {attributes*} children*)</code>.","If you find some HTML that does not translate to Web/MX, please send a failing example along."], null),new cljs.core.Keyword(null,"just-html","just-html",-349830583),"It is just HTML","We just write HTML, SVG, and CSS, using CLJS workalikes.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Web/MX introduces no framework of its own, it just manages the DOM.","Matrix just manages the state.","Aside from CLJS->JS, no preprocessor is involved."], null),"(div {:class :intro}\n    ;; <b>^^ if the first argument to any tag is a literal map, the key-values</b>\n    ;; <b>become HTML element attribute-values, with keywords => strings</b>\n\n    (h2 \"The count is now....\")\n    (span {:class :digi-readout} \"42\")\n    ;; <b>^^ arguments following the optional maps become children, or text content</b>\n\n    (svg {:width   64 :height 64\n          ;; <b> ^^^ numbers also get string-ified for the DOM constructors</b>\n          :cursor :pointer\n          :onclick #(js/alert \"Increment Feature Not Yet Implemented\")}\n      (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n               :stroke \"orange\" :stroke-width 5\n               :fill   :transparent})\n      (text {:class       :heavychar\n             :x \"50%\" :y \"70%\"\n             :text-anchor :middle} \"+\")))","It's Just HTML"]);
web_mx_quickstart.lesson.and_cljs = (function web_mx_quickstart$lesson$and_cljs(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The count is now..."),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"digi-readout"], null),"42"),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),"1em"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opcode","opcode",311089360,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Opcode \"",new cljs.core.Symbol(null,"opcode","opcode",311089360,null),"\" RSN.")))], null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16503 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16504 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16504);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The count is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16505 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16506 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16506);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The count is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16505);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"digi-readout"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"42")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16507 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16508 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16508);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"42",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16507);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opcode","opcode",311089360,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Opcode \"",new cljs.core.Symbol(null,"opcode","opcode",311089360,null),"\" RSN.")))], null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16509 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16510 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16510);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.mapv.call(null,(function (opcode){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,opcode))){
return tiltontec.web_mx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){
return alert(["Opcode \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opcode),"\" RSN."].join(''));
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16511 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16512 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16512);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,opcode,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16511);
}})));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","=","+","boom"], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16509);
}}))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16503);
}})));
});
web_mx_quickstart.lesson.ex_and_cljs = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"...and CLJS",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"and-cljs","and-cljs",1859658249),new cljs.core.Keyword(null,"title","title",636505583),"...and CLJS",new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.and_cljs,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"It is just HTML <i>and</i> CLJS.",new cljs.core.Keyword(null,"code","code",1586293142),"(defn and-cljs []\n  (div {:class :intro}\n    (h2 \"The count is now...\")\n    (span {:class \"digi-readout\"} \"42\")\n    (div {:style {:display :flex\n                  :gap     \"1em\"}}\n      ;; <b>children, below built into a vector using CLJS,\n      ;; are automatically flattened, with any nils removed</b>\n      (mapv (fn [opcode]\n              (when (= 1 (count opcode))\n                (button {:class   :push-button\n                         :onclick #(js/alert\n                                     (str \"Opcode \\\"\" opcode \"\\\" RSN.\"))}\n                  opcode)))\n        [\"-\" \"=\" \"+\" \"boom\"]))))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["In fact, all this code is CLJS. For example, DIV is a CLJS macro that returns\n    a Clojure <i>proxy</i> for a DOM DIV.","Proxies are not VDOM. Proxies are long-lived models that manage their DOM incarnations as events unfold."], null)], null);
web_mx_quickstart.lesson.opcode_button = (function web_mx_quickstart$lesson$opcode_button(label,onclick){
return tiltontec.web_mx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818),new cljs.core.Keyword(null,"onclick","onclick",1297553739),onclick], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16513 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16514 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16514);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,label,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16513);
}})));
});
web_mx_quickstart.lesson.math_keypad = (function web_mx_quickstart$lesson$math_keypad(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16518 = arguments.length;
var i__4737__auto___16519 = (0);
while(true){
if((i__4737__auto___16519 < len__4736__auto___16518)){
args__4742__auto__.push((arguments[i__4737__auto___16519]));

var G__16520 = (i__4737__auto___16519 + (1));
i__4737__auto___16519 = G__16520;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(web_mx_quickstart.lesson.math_keypad.cljs$core$IFn$_invoke$arity$variadic = (function (opcodes){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"gap","gap",80255254),"1em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opcode","opcode",311089360,null)], null),cljs.core.list(new cljs.core.Symbol(null,"opcode-button","opcode-button",-917462294,null),new cljs.core.Symbol(null,"opcode","opcode",311089360,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("js","alert","js/alert",1068586668,null),"Feature Not Yet Implemented")))),new cljs.core.Symbol(null,"opcodes","opcodes",313128037,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16516 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16517 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16517);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.mapv.call(null,(function (opcode){
return web_mx_quickstart.lesson.opcode_button.call(null,opcode,(function (){
return alert("Feature Not Yet Implemented");
}));
}),opcodes),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16516);
}})));
}));

(web_mx_quickstart.lesson.math_keypad.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(web_mx_quickstart.lesson.math_keypad.cljs$lang$applyTo = (function (seq16515){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16515));
}));

web_mx_quickstart.lesson.speedo_title_style = (function web_mx_quickstart$lesson$speedo_title_style(ok_color,bad_color){
return tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993)),new cljs.core.Keyword(null,"answer","answer",-742633163)),(42)),new cljs.core.Symbol(null,"ok-color","ok-color",-1812268621,null),new cljs.core.Symbol(null,"bad-color","bad-color",890893086,null))], null)),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,tiltontec.matrix.api.mget.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),me,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"answer","answer",-742633163)),(42)))?ok_color:bad_color)], null);
}));
});
web_mx_quickstart.lesson.html_composition = (function web_mx_quickstart$lesson$html_composition(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"speedo-title-style","speedo-title-style",1419544342,null),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"orange","orange",73816386))], null),"The answer is"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"answer","answer",-742633163),(42)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"answer","answer",-742633163)))),cljs.core.list(new cljs.core.Symbol(null,"math-keypad","math-keypad",-728989696,null),"-","=","+"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16521 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16522 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16522);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),web_mx_quickstart.lesson.speedo_title_style.call(null,new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"orange","orange",73816386))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The answer is")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16523 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16524 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16524);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The answer is",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16523);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"answer","answer",-742633163),(42)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"answer","answer",-742633163))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16525 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16526 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16526);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me__$1,new cljs.core.Keyword(null,"answer","answer",-742633163))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16525);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.math_keypad.call(null,"-","=","+"),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16521);
}})));
});
web_mx_quickstart.lesson.ex_html_composition = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Composable<br>Widgets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"html-composition","html-composition",-858016677),new cljs.core.Keyword(null,"title","title",636505583),"Functional GUI composition",new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.html_composition,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Because it is all CLJS, we can move sub-structure into functions.",new cljs.core.Keyword(null,"code","code",1586293142),"(defn opcode-button [label onclick]\n  (button {:class   :push-button\n           :onclick onclick}\n    label))\n\n(defn math-keypad [& opcodes]\n  (div {:style {:display :flex\n                :gap     \"1em\"}}\n    (mapv (fn [opcode]\n            (opcode-button opcode\n              #(js/alert \"Feature Not Yet Implemented\")))\n      opcodes)))\n\n(defn speedo-title-style [ok-color bad-color]\n  ; even formulas can be functions\n  (cF {:color (if (= (mget (fmu :speedometer) :answer) 42)\n                ok-color bad-color)}))\n\n(defn html-composition []\n  (div {:class :intro}\n    (span {:style (speedo-title-style :green :orange)}\n      \"The answer is\")\n    (span {:class :digi-readout}\n        {:name :speedometer\n         :answer 42}\n        (str (mget me :answer)))\n    (math-keypad \"-\" \"=\" \"+\")))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Where Hiccup distinguishes HTML from other code, Web/MX merges the two."], null)], null);
web_mx_quickstart.lesson.custom_state = (function web_mx_quickstart$lesson$custom_state(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null))], null),"The speed is now..."),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mph","mph",924313379),(42)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16527 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16528 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16528);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null)),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null);
}))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The speed is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16529 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16530 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16530);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16529);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mph","mph",924313379),(42)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16531 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16532 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16532);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me__$1,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph"].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16531);
}}))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16527);
}})));
});
web_mx_quickstart.lesson.ex_custom_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Ad Hoc Properties",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"custom-state","custom-state",-1543240698),new cljs.core.Keyword(null,"title","title",636505583),"Ad hoc widget properties",new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.custom_state,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Widgets define ad hoc properties as needed.",new cljs.core.Keyword(null,"code","code",1586293142),"(div {:class :intro}\n    (h2 \"The speed is now...\")\n    (span {:class :digi-readout}\n      ;; <b>An optional second map is for custom state.</b>\n      {:mph  42}\n\n      ;; <b>below: mget, short for \"model-get\", is the MX \"getter\" for model (object) properties</b>\n      ;; <b>n.b. Tag children, even plain strings, always start out in an auto-genned formula.</b>\n      (str (mget me :mph) \" mph\")))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag macros take an optional second map of ad hoc, custom properties. This map is identified\n   positionally, so an empty first map must be coded even if no HTML attributes need specification.","Here, a generic <code>span</code> embodying a speedometer thinks it might usefully have a <code>{:mph 42}</code> property.\n   We will put that to use soon.","<code>mget</code> can be used anywhere. Inside a formula, it transparently subscribes to the property being read.","Big picture: Matrix follows the <a href=https://en.wikipedia.org/wiki/Prototype-based_programming target=\"_blank\">prototype model</a>,\n\n                     so generic tags can be re-used without subclassing."], null)], null);
web_mx_quickstart.lesson.speedometer = (function web_mx_quickstart$lesson$speedometer(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),(65),new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379)),(55))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return (tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)) > (55));
})),new cljs.core.Keyword(null,"speedo-text","speedo-text",-1255667408),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph",cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865)),"<br>Slow down"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph",(cljs.core.truth_(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865)))?"<br>Slow down":null)].join('');
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"speedo-text","speedo-text",-1255667408)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16533 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16534 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16534);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"speedo-text","speedo-text",-1255667408)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16533);
}})));
});
web_mx_quickstart.lesson.derived_state = (function web_mx_quickstart$lesson$derived_state(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The speed is now..."),cljs.core.list(new cljs.core.Symbol(null,"speedometer","speedometer",1034629534,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16535 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16536 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16536);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The speed is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16537 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16538 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16538);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16537);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedometer.call(null),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16535);
}})));
});
web_mx_quickstart.lesson.ex_derived_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Functional<br>Properties",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"derived-state","derived-state",2122544324),new cljs.core.Keyword(null,"title","title",636505583),"Functional, computed, reactive properties",new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.derived_state,new cljs.core.Keyword(null,"code","code",1586293142),"(defn speedometer []\n  (span {:class :digi-readout}\n    {:name        :speedometer\n     :mph         65\n     :too-fast?   (cF (> (mget me :mph) 55))\n     ;; <b>'cF', or \"cell formula\", defines a computed/derived property.</b>\n     ;; <b>'me' is lexically injected, like JS 'this' or Smalltalk 'self'.</b>\n     ;; <b>Properties such as 'mph' are transparently subscribed.</b>\n     :speedo-text (cF (str (mget me :mph) \" mph\"\n                        (when (mget me :too-fast?) \"Slow down\")))}\n    (mget me :speedo-text)))\n\n(defn derived-state []\n  (div {:class :intro}\n    (h2 \"The speed is now...\")\n    (speedometer)))",new cljs.core.Keyword(null,"preamble","preamble",1641040241),"A property can be expressed as a function, or \"formula\", of other properties.",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>too-fast?</code> property is fed by the reactive formula <code>(cF (> (mget me :mph) 55))</code>.\n    When <code>mph</code> changes, <code>too-fast?</code> will be recomputed, then <code>speedo-text</code>.","Formula dependencies are automatically recorded, and adjusted anew on each evaluation.\n               Together these trees of property-dependencies form the same coherent, one-way DAG found in Flux derivatives,\n               but with developers doing no more than code derivations one property at a time.","Not just automatically detected, the Web/MX DAG extends all the way out to individual leaves\n              of the application. Individual formulas can be provided for any widget\n              attribute, and even individual style properties. Flux reactivity stops at the view function.","n.b. Different instances can have different formulas for the same property,\n              extending further the \"prototype\" reusability win.</li>"], null)], null);
web_mx_quickstart.lesson.speedometer_2 = (function web_mx_quickstart$lesson$speedometer_2(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),(60),new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379)),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return (tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)) > tiltontec.matrix.api.mget.call(null,tiltontec.matrix.api.fasc.call(null,new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),me),new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250)));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph",cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865)),"<br>Slow down")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16539 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16540 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16540);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph",(cljs.core.truth_(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"too-fast?","too-fast?",-1661322865)))?"<br>Slow down":null)].join(''),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16539);
}})));
});
web_mx_quickstart.lesson.navigation = (function web_mx_quickstart$lesson$navigation(geo_type){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250),(55)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zone","zone",-585760786,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Symbol(null,"speedo","speedo",-412778531,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993))], null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"The speed is now ~a mph over the speed limit.",cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"speedo","speedo",-412778531,null),new cljs.core.Keyword(null,"mph","mph",924313379)),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"zone","zone",-585760786,null),new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250))))))], null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol(null,"speedometer-2","speedometer-2",666262403,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16541 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16542 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16542);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"zone","zone",-585760786,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Symbol(null,"speedo","speedo",-412778531,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993))], null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"The speed is now ~a mph over the speed limit.",cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"speedo","speedo",-412778531,null),new cljs.core.Keyword(null,"mph","mph",924313379)),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"zone","zone",-585760786,null),new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
var zone = tiltontec.matrix.api.fasc.call(null,new cljs.core.Keyword(null,"speed-zone","speed-zone",-832373443),me__$1);
var speedo = (function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),me__$1,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})();
return cljs.pprint.cl_format.call(null,null,"The speed is now ~a mph over the speed limit.",(tiltontec.matrix.api.mget.call(null,speedo,new cljs.core.Keyword(null,"mph","mph",924313379)) - tiltontec.matrix.api.mget.call(null,zone,new cljs.core.Keyword(null,"speed-limit","speed-limit",-1254826250))));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"text","text",-1790561697)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16543 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16544 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16544);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.matrix.api.mget.call(null,me__$1,new cljs.core.Keyword(null,"text","text",-1790561697)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16543);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedometer_2.call(null),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16541);
}})));
});
web_mx_quickstart.lesson.ex_navigation = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Random Property<br>Access",new cljs.core.Keyword(null,"title","title",636505583),"Random property access",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.navigation,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"A widget property formula can find and use any other app property.",new cljs.core.Keyword(null,"code","code",1586293142),"(defn speedometer-2 []\n  (span {:class :digi-readout}\n    {:name      :speedometer\n     :mph       60\n     :too-fast? (cF (> (mget me :mph)\n                      (mget (fasc :speed-zone me) :speed-limit)))}\n    (str (mget me :mph) \" mph\"\n      (when (mget me :too-fast?) \"Slow down\"))))\n\n(defn navigation [geo-type]\n  (div {:class :intro}\n    {:name        :speed-zone\n     :speed-limit 55}\n    (h2 {}\n      ;; <b>`fasc` searches up the parent chain only</b>\n      {:text (cF (let [zone (fasc :speed-zone me)\n                       speedo (fmu :speedometer)]\n                   (pp/cl-format nil \"The speed is now ~a mph over the speed limit.\"\n                     (- (mget speedo :mph) (mget zone :speed-limit)))))}\n      (mget me :text))\n    (speedometer-2)))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The headline needs the speed limit and current speed for its text. The speedometer readout needs\n     the speed limit, to decide its text color.","We retrieve values from named other widgets, using navigation\n     utilities such as <code>fasc</code> and <code>fmu</code> to avoid hard-coding paths.","<h3>About navigation</h3>MX proxy models are like the DOM; every element but the root has\n              one parent and knows that parent as a fixed property,\n               and every has zero or more children. Simple enough that, should a convoluted DOM organization arise,\n               a dev could easily write their own navigation code.","Second, the provided <code>fm-navig</code> utility takes a \"test\" function as its first parameter, which by default\n              tests the <code>:name</code> of every node for a match with the sought name. Here again a dev can write a test function\n              of arbitrary complexity if needed.","Just to fill in the navigation picture a bit, <code>fm-navig</code> by default does a depth-first, left-right\n               search starting at the provided start node, recursing up to the start's parent if necessary. So search for\n               a name benefits from a natural scoping, and duplicate names arising from a row of similar components works out fine.","A cautionary note on navigation: a formula computing a widget's children has to use the option that tells\n               fm-navig to search \"up only\", because otherwise it will ask for the children being computed and\n               a \"cyclic dependency\" exception will be thrown."], null)], null);
web_mx_quickstart.lesson.plus_button = (function web_mx_quickstart$lesson$plus_button(onclick){
return tiltontec.web_mx.api.make_svg.call(null,"svg",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"onclick","onclick",1297553739),onclick], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"circle","circle",-751223407,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)),cljs.core.list(new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),"+"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16545 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16546 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16546);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"circle",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"40%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),cljs.core.PersistentArrayMap.EMPTY,null),(new cljs.core.List(null,tiltontec.web_mx.api.make_svg.call(null,"text",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"heavychar","heavychar",-1425996374),new cljs.core.Keyword(null,"x","x",2099068185),"50%",new cljs.core.Keyword(null,"y","y",-1757859776),"70%",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"middle","middle",-701029031)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"+")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16547 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16548 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16548);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"+",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16547);
}}))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16545);
}})));
});
web_mx_quickstart.lesson.speedometer_3 = (function web_mx_quickstart$lesson$speedometer_3(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690),new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379)),(55)),"red","cyan")], null)),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)) > (55)))?"red":"cyan")], null);
}))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),tiltontec.matrix.api.cI.call(null,(42)),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph"].join('');
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"display","display",242065432)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16549 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16550 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16550);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"display","display",242065432)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16549);
}})));
});
web_mx_quickstart.lesson.handler_mutation = (function web_mx_quickstart$lesson$handler_mutation(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The speed limit is 55 mph. Your speed is now..."),cljs.core.list(new cljs.core.Symbol(null,"speedometer-3","speedometer-3",1224111668,null)),cljs.core.list(new cljs.core.Symbol(null,"plus-button","plus-button",-307461051,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),cljs.core.list(new cljs.core.Symbol(null,"evt-md","evt-md",93907570,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))),new cljs.core.Keyword(null,"mph","mph",924313379),new cljs.core.Symbol(null,"inc","inc",324505433,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16551 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16552 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16552);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The speed limit is 55 mph. Your speed is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16553 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16554 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16554);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16553);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedometer_3.call(null),(new cljs.core.List(null,web_mx_quickstart.lesson.plus_button.call(null,(function (evt){
return tiltontec.matrix.api.mswap_BANG_.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),tiltontec.web_mx.api.evt_md.call(null,evt),new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16551);
}})));
});
web_mx_quickstart.lesson.ex_handler_mutation = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Keyword(null,"exercise","exercise",-801618741),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"menu","menu",352255198)],["tiltontec.example.quick-start.lesson/handler-mutation",web_mx_quickstart.lesson.handler_mutation,"Add custom state <code>throttled</code>, with a formula that computes <code>true</code> if <code>mph</code> is\n   fifty-five or more. Check <code>throttled</code> in the <code>onclick</code> handler before allowing increment.",new cljs.core.Keyword(null,"dag-mutation","dag-mutation",1130225413),"Random state DAG change","A widget event handler can mutate any property of any widget. Give it a try.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wrapping <code>mph</code> value in <code>(cI 42)</code>, <code>cI</code> for \"cell Input\",\n    lets us alter <code>mph</code> imperatively.","Here, an event handler navigates via\n    utility <code>fmu</code> (search \"family up\") to the speedometer widget and increments it."], null),"(defn plus-button [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn speedometer-3 []\n  (span {:class :digi-readout\n         :style (cF {:color (if (> (mget me :mph) 55)\n                              \"red\" \"cyan\")})}\n    {:name    :speedometer\n     ;; <b>If we intend to mutate a property, we must wrap the value in `cI`, short for \"cell input\"</b>\n     :mph     (cI 42)\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn handler-mutation []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speedometer-3)\n    (plus-button (fn [evt]\n                  ;; <b>`evt-md` (event model) determines the MX proxy/model associated with a handler event.</b>\n                  ;; <b>'mswap!' performs a Clojure 'swap!' on the ':mph' property of the model.</b>\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))","Random Property<br>Mutation"]);
web_mx_quickstart.lesson.speedometer_4 = (function web_mx_quickstart$lesson$speedometer_4(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (p1__16555_SHARP_){
return tiltontec.matrix.api.mswap_BANG_.call(null,tiltontec.web_mx.api.evt_md.call(null,p1__16555_SHARP_),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),tiltontec.matrix.api.cI.call(null,(42),new cljs.core.Keyword(null,"watch","watch",380988277),(function (slot,me,new_val,prior_val,cell){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"watch-sees-change","watch-sees-change",-1828498131),slot,new_val);
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph"].join('');
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"display","display",242065432)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16556 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16557 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16557);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"display","display",242065432)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16556);
}})));
});
web_mx_quickstart.lesson.watches = (function web_mx_quickstart$lesson$watches(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The speed is now..."),cljs.core.list(new cljs.core.Symbol(null,"speedometer-4","speedometer-4",-353343159,null)),cljs.core.list(new cljs.core.Symbol(null,"plus-button","plus-button",-307461051,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),cljs.core.list(new cljs.core.Symbol(null,"evt-md","evt-md",93907570,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))),new cljs.core.Keyword(null,"mph","mph",924313379),new cljs.core.Symbol(null,"inc","inc",324505433,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16558 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16559 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16559);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The speed is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16560 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16561 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16561);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16560);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedometer_4.call(null),(new cljs.core.List(null,web_mx_quickstart.lesson.plus_button.call(null,(function (evt){
return tiltontec.matrix.api.mswap_BANG_.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),tiltontec.web_mx.api.evt_md.call(null,evt),new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16558);
}})));
});
web_mx_quickstart.lesson.ex_watches = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Watch Functions",new cljs.core.Keyword(null,"title","title",636505583),"Ad hoc, on-change \"watch\" functions per property",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.watches,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Any property can use an on-change \"watch\" function for side-effects.",new cljs.core.Keyword(null,"code","code",1586293142),"(defn speedometer-4 []\n  (span {:class   :digi-readout\n         :onclick #(mswap! (evt-md %) :mph inc)}\n    {:name    :speedometer\n     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                              ;; <b>`cI`, cell input, takes a :watch option for an \"on change\" function</b>\n                              (prn :watch-sees-change slot new-val)))\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn watches []\n  (div {:class :intro}\n    (h2 \"The speed is now...\")\n    (speedometer-4)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A watch function fires when a cell value is initialized, and if the value changes. Watches are used to\n   dispatch actions outside the Matrix, if only for logging/debugging, as here. (See the browser console.)","Watches could also write to localStorage, or dispatch XHR requests. Web/MX itself, as an extreme example,\n              does all its dynamic DOM maintenance in watch functions on HTML attributes.","Watch functions are dispatched non-deterministically\u2013whenever state propagation happens to reach a property.\n              If coordination of watch actions is required, a custom action handler can be specified."], null)], null);
web_mx_quickstart.lesson.speed_governor = (function web_mx_quickstart$lesson$speed_governor(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (p1__16562_SHARP_){
return tiltontec.matrix.api.mswap_BANG_.call(null,tiltontec.web_mx.api.evt_md.call(null,p1__16562_SHARP_),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),tiltontec.matrix.api.cI.call(null,(42),new cljs.core.Keyword(null,"watch","watch",380988277),(function (slot,me,new_val,prior_val,cell){
if((new_val > (55))){
alert("You have triggered the speed governor; auto-resetting to 45 mph.");

return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"speed-governor","speed-governor",251576550),(function (opcode,defer_info){
return tiltontec.matrix.api.mset_BANG_.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379),(45));
}));
} else {
return null;
}
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))," mph")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)))," mph"].join('');
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"display","display",242065432)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16563 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16564 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16564);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"display","display",242065432)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16563);
}})));
});
web_mx_quickstart.lesson.watch_cc = (function web_mx_quickstart$lesson$watch_cc(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),"The speed limit is 55 mph. Your speed is now..."),cljs.core.list(new cljs.core.Symbol(null,"speed-governor","speed-governor",1892108077,null)),cljs.core.list(new cljs.core.Symbol(null,"plus-button","plus-button",-307461051,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),cljs.core.list(new cljs.core.Symbol(null,"evt-md","evt-md",93907570,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))),new cljs.core.Keyword(null,"mph","mph",924313379),new cljs.core.Symbol(null,"inc","inc",324505433,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16565 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16566 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16566);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"The speed limit is 55 mph. Your speed is now...")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16567 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16568 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16568);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"The speed limit is 55 mph. Your speed is now...",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16567);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speed_governor.call(null),(new cljs.core.List(null,web_mx_quickstart.lesson.plus_button.call(null,(function (evt){
return tiltontec.matrix.api.mswap_BANG_.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),tiltontec.web_mx.api.evt_md.call(null,evt),new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16565);
}})));
});
web_mx_quickstart.lesson.ex_watch_cc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Watch Function<br>Mutation",new cljs.core.Keyword(null,"title","title",636505583),"Exception: how watches can mutate a Matrix property",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"watch-cc","watch-cc",1852037849),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.watch_cc,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"Watch functions must operate outside Matrix state flow, but <i>can</i> enqueue alterations\n    of Matrix state for subsequent execution.",new cljs.core.Keyword(null,"code","code",1586293142),"(defn speed-governor []\n  (span {:class   :digi-readout\n         :onclick #(mswap! (evt-md %) :mph inc)}\n    {:name    :speedometer\n     :mph     (cI 42 :watch (fn [slot me new-val prior-val cell]\n                              (when (> new-val 55)\n                                (js/alert \"You have triggered the speed governor; auto-resetting to 45 mph.\")\n\n                                ;; <b>`with-cc` must wrap any DAG mutation by a watch function </b>\n                                (with-cc :speed-governor\n                                  ;; <b>'mset!', like its alias 'mreset!, performs a 'reset!' of a model property.</b>\n                                  (mset! me :mph 45)))))\n     :display (cF (str (mget me :mph) \" mph\"))}\n    (mget me :display)))\n\n(defn watch-cc []\n  (div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speed-governor)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc)))))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Try increasing the speed above 55. A watch function will intervene.","In our experience coding with Matrix, we frequently\n   encounter opportunities for the app to usefully update state normally controlled by the user. The macro <code>(with-cc TAG & BODY)</code> schedules the <code>mset!</code> mutation for execution\n              immediately after the current propagation, when state consistency can be guaranteed. TAG is just for debugging."], null)], null);
web_mx_quickstart.lesson.ex_data_integrity = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Data Integrity",new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix silently builds an internal DAG at run time by noting when one property formula reads\n    another property. When a property is subsequently modified, Matrix uses that derived DAG to ensure\n     the following:"], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data-integrity","data-integrity",-2031534330),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.watch_cc,new cljs.core.Keyword(null,"code","code",1586293142),"(div {:class :intro}\n    (h2 \"The speed limit is 55 mph. Your speed is now...\")\n    (speed-governor)\n    (plus-button (fn [evt]\n                  (mswap! (fmu :speedometer (evt-md evt)) :mph inc))))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h3>The Data Integrity Contract</h3> When application code assigns a value to some\n   input cell X, the Matrix engine guarantees:\n              <br><br>&nbsp;&bull; recomputation exactly once of all and only state affected by the change to X, directly\n              or indirectly through some intermediate datapoint. Note that if A depends on B, and B depends on X, when B\n              gets recalculated it may come up with the same value as before. In this case A is not considered to have\n              been affected by the change to X and will not be recomputed;\n              <br><br>&nbsp;&bull; recomputations, when they read other datapoints, will see only values current\n              with the new value of X. Example: if A depends on B and X, and B depends on X, when X changes and\n               A reads B and X to compute a new value, B must return a value recomputed from the new value of X;\n              <br><br>&nbsp;&bull; similarly, client watch functions will see only values current with the new value of X;\n              <br><br>&nbsp;&bull; a corollary: should a client watch MSET! a datapoint Y, all the above will happen with\n               values current with not just X, but also with the value of Y prior to the change to Y; and\n              <br><br>&nbsp;&bull; deferred \u201Cclient\u201D code will see only values current with X and\n              not any values current with some subsequent change to Y enqueued by an observer."], null)], null);
web_mx_quickstart.lesson.cat_fact_uri = "https://catfact.ninja/fact";
web_mx_quickstart.lesson.async_cat = (function web_mx_quickstart$lesson$async_cat(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"intro"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818)], null),"Cat Chat"),cljs.core.list(new cljs.core.Symbol(null,"plus-button","plus-button",-307461051,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16569#","p1__16569#",-498457232,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mset!","mset!",836980241,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"cat-fact","cat-fact",-41976919),cljs.core.list(new cljs.core.Symbol(null,"evt-md","evt-md",93907570,null),new cljs.core.Symbol(null,"p1__16569#","p1__16569#",-498457232,null))),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849),true))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"cat-chat","cat-chat",971200088)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cat-fact","cat-fact",-41976919),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),false,new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),true),new cljs.core.Keyword(null,"cat-request","cat-request",-1618263764),cljs.core.list(new cljs.core.Symbol(null,"cF+","cF+",-993748223,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"response-chan","response-chan",-456765440,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"response-chan","response-chan",-456765440,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",572107335,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"response-chan","response-chan",-456765440,null))], null),cljs.core.list(new cljs.core.Symbol(null,"with-cc","with-cc",-1260431727,null),new cljs.core.Keyword(null,"set-cat","set-cat",-211835955),cljs.core.list(new cljs.core.Symbol(null,"mset!","mset!",836980241,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"cat-response","cat-response",17602881),new cljs.core.Symbol(null,"response","response",572107335,null)))))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849)),cljs.core.list(new cljs.core.Symbol("client","get","client/get",435087009,null),new cljs.core.Symbol(null,"cat-fact-uri","cat-fact-uri",-269835421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null)))),new cljs.core.Keyword(null,"cat-response","cat-response",17602881),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",572107335,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"cat-response","cat-response",17602881))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Symbol(null,"response","response",572107335,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fact","fact",-799816531)], null))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Error>  ",cljs.core.list(new cljs.core.Keyword(null,"error-code","error-code",180497232),new cljs.core.Symbol(null,"response","response",572107335,null)),": ",cljs.core.list(new cljs.core.Keyword(null,"error-text","error-text",2021893718),new cljs.core.Symbol(null,"response","response",572107335,null)))),"Click (+) to see a cat fact.")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16570 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16571 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16571);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"push-button","push-button",625970818)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Cat Chat")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16572 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16573 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16573);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"Cat Chat",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16572);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.plus_button.call(null,(function (p1__16569_SHARP_){
return tiltontec.matrix.api.mset_BANG_.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"cat-fact","cat-fact",-41976919);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),tiltontec.web_mx.api.evt_md.call(null,p1__16569_SHARP_),new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849),true);
})),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"cat-chat","cat-chat",971200088)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cat-fact","cat-fact",-41976919),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849),tiltontec.matrix.api.cI.call(null,false,new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),true),new cljs.core.Keyword(null,"cat-request","cat-request",-1618263764),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"watch","watch",380988277),(function (_,me__$1,response_chan,___$1,___$2){
if(cljs.core.truth_(response_chan)){
var c__15041__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15042__auto__ = (function (){var switch__15018__auto__ = (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (1))){
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16579__$1,(2),response_chan);
} else {
if((state_val_16580 === (2))){
var inst_16575 = (state_16579[(2)]);
var inst_16576 = (function (){var response = inst_16575;
return (function (opcode,defer_info){
return tiltontec.matrix.api.mset_BANG_.call(null,me__$1,new cljs.core.Keyword(null,"cat-response","cat-response",17602881),response);
});
})();
var inst_16577 = tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"set-cat","set-cat",-211835955),inst_16576);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16579__$1,inst_16577);
} else {
return null;
}
}
});
return (function() {
var web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__ = null;
var web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____0 = (function (){
var statearr_16581 = [null,null,null,null,null,null,null];
(statearr_16581[(0)] = web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__);

(statearr_16581[(1)] = (1));

return statearr_16581;
});
var web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____1 = (function (state_16579){
while(true){
var ret_value__15020__auto__ = (function (){try{while(true){
var result__15021__auto__ = switch__15018__auto__.call(null,state_16579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15021__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object)){
var ex__15022__auto__ = e16582;
var statearr_16583_16589 = state_16579;
(statearr_16583_16589[(5)] = ex__15022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16590 = state_16579;
state_16579 = G__16590;
continue;
} else {
return ret_value__15020__auto__;
}
break;
}
});
web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____0.call(this);
case 1:
return web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__.cljs$core$IFn$_invoke$arity$0 = web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____0;
web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__.cljs$core$IFn$_invoke$arity$1 = web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto____1;
return web_mx_quickstart$lesson$async_cat_$_state_machine__15019__auto__;
})()
})();
var state__15043__auto__ = (function (){var statearr_16584 = f__15042__auto__.call(null);
(statearr_16584[(6)] = c__15041__auto__);

return statearr_16584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15043__auto__);
}));

return c__15041__auto__;
} else {
return null;
}
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849)),cljs.core.list(new cljs.core.Symbol("client","get","client/get",435087009,null),new cljs.core.Symbol(null,"cat-fact-uri","cat-fact-uri",-269835421,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(tiltontec.matrix.api.mget.call(null,me__$1,new cljs.core.Keyword(null,"get-new-fact?","get-new-fact?",-1892521849)))){
return cljs_http.client.get.call(null,web_mx_quickstart.lesson.cat_fact_uri,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
} else {
return null;
}
})),new cljs.core.Keyword(null,"cat-response","cat-response",17602881),tiltontec.matrix.api.cI.call(null,null)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"response","response",572107335,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"cat-response","cat-response",17602881))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Symbol(null,"response","response",572107335,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fact","fact",-799816531)], null))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Error>  ",cljs.core.list(new cljs.core.Keyword(null,"error-code","error-code",180497232),new cljs.core.Symbol(null,"response","response",572107335,null)),": ",cljs.core.list(new cljs.core.Keyword(null,"error-text","error-text",2021893718),new cljs.core.Symbol(null,"response","response",572107335,null)))),"Click (+) to see a cat fact."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16585 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16586 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16586);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(function (){var temp__5802__auto__ = tiltontec.matrix.api.mget.call(null,me__$1,new cljs.core.Keyword(null,"cat-response","cat-response",17602881));
if(cljs.core.truth_(temp__5802__auto__)){
var response = temp__5802__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(response))){
return tiltontec.web_mx.gen.make_tag.call(null,"span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fact","fact",-799816531)], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16587 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16588 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16588);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fact","fact",-799816531)], null)),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16587);
}})));
} else {
return ["Error>  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(response)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error-text","error-text",2021893718).cljs$core$IFn$_invoke$arity$1(response))].join('');
}
} else {
return "Click (+) to see a cat fact.";
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16585);
}}))),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16570);
}})));
});
web_mx_quickstart.lesson.ex_async_cat = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Async Events",new cljs.core.Keyword(null,"title","title",636505583),"Async processing = normal mutation",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"cat-chat","cat-chat",971200088),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.async_cat,new cljs.core.Keyword(null,"preamble","preamble",1641040241),"An async response is just another \"input\" property mutation.",new cljs.core.Keyword(null,"code","code",1586293142),"(div {:class \"intro\"}\n    (span {:class :push-button}\n      \"Cat Chat\")\n    (plus-button #(mset! (fmu :cat-fact (evt-md %)) :get-new-fact? true))\n    (div {:class :cat-chat}\n      {:name          :cat-fact\n       :get-new-fact? (cI false\n\n                        ;; <b>The \"plus\" widget will set this property repeatedly\n                        ;; to the same value, 'true'. Declaring it \"ephemeral?\" means\n                        ;; it will fire each time that same value is set.</b>\n                        :ephemeral? true)\n       :cat-request   (cF+\n                        ;; <b>`cF+`, or \"cF plus\", accepts cell options</b>\n                        [:watch (fn [_ me response-chan _ _]\n                                  (when response-chan\n                                    (go (let [response (&lt;! response-chan)]\n\n                                          ;; <b>whenever the XHR responds,</b>\n                                          ;; <b>we just `mset!` the \"waiting\" input cell</b>\n                                          (with-cc :set-cat\n                                            (mset! me :cat-response response))))))]\n                        (when (mget me :get-new-fact?)\n                          (client/get cat-fact-uri {:with-credentials? false})))\n       :cat-response  (cI nil)}\n\n      (if-let [response (mget me :cat-response)]\n        (if (:success response)\n          (span (get-in response [:body :fact]))\n          (str \"Error>  \" (:error-code response)\n            \": \" (:error-text response)))\n        \"Click (+) to see a chat fact.\")))",new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The <code>cat-request</code> property creates and dispatches an XHR via <code>client/get</code>, producing a core.async channel\n   to receive the response. Its watch function awaits the async response and feeds it into a conventional input property.","We handle async events by directing them to input Cells purpose-created to receive their output, where\n              Matrix handles them like any other input. With a different XHR library not using core.async, we\n              would use a similar approach with response handlers.","We used a special <code>:ephemeral?</code> qualifier for <code>:get-new-fact?</code> because\n              it works like an event, something that happens and is over.\n              Ephemeral properties revert to nil after propagating, without propagating that change."], null)], null);
web_mx_quickstart.lesson.speedo_review = (function web_mx_quickstart$lesson$speedo_review(){
return tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"digi-readout","digi-readout",2140758690),new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379)),(55)),"red","cyan")], null)),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379)) > (55)))?"red":"cyan")], null);
}))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),new cljs.core.Keyword(null,"mph","mph",924313379),tiltontec.matrix.api.cI.call(null,(42)),new cljs.core.Keyword(null,"air-drag","air-drag",1522051746),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("js","setInterval","js/setInterval",2090002939,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379),new cljs.core.Symbol(null,"*","*",345799209,null),0.98)),(1000))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return setInterval((function (){
return tiltontec.matrix.api.mswap_BANG_.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core._STAR_,0.98);
}),(1000));
})),new cljs.core.Keyword(null,"on-quiesce","on-quiesce",1946284007),(function (me){
var temp__5804__auto__ = tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"air-drag","air-drag",1522051746));
if(cljs.core.truth_(temp__5804__auto__)){
var i = temp__5804__auto__;
if(typeof i === 'number'){
return clearInterval(i);
} else {
return null;
}
} else {
return null;
}
})], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"~8,1f mph",cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"mph","mph",924313379))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16591 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16592 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16592);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.pprint.cl_format.call(null,null,"~8,1f mph",tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"mph","mph",924313379))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16591);
}})));
});
web_mx_quickstart.lesson.in_review = (function web_mx_quickstart$lesson$in_review(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"excess","excess",-708467437,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993)),new cljs.core.Keyword(null,"mph","mph",924313379)),(55))], null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.list(new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Symbol(null,"excess","excess",-708467437,null)),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"excess","excess",-708467437,null))))),cljs.core.list(new cljs.core.Symbol(null,"speedo-review","speedo-review",-412993813,null)),cljs.core.list(new cljs.core.Symbol(null,"plus-button","plus-button",-307461051,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__16593#","p1__16593#",1774659501,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993),cljs.core.list(new cljs.core.Symbol(null,"evt-md","evt-md",93907570,null),new cljs.core.Symbol(null,"p1__16593#","p1__16593#",1774659501,null))),new cljs.core.Keyword(null,"mph","mph",924313379),new cljs.core.Symbol(null,"inc","inc",324505433,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16594 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16595 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16595);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"excess","excess",-708467437,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fmu","fmu",-250272536,null),new cljs.core.Keyword(null,"speedometer","speedometer",-605901993)),new cljs.core.Keyword(null,"mph","mph",924313379)),(55))], null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",cljs.core.list(new cljs.core.Symbol("Math","abs","Math/abs",1400569394,null),new cljs.core.Symbol(null,"excess","excess",-708467437,null)),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"excess","excess",-708467437,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16596 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16597 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16597);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(function (){var excess = (tiltontec.matrix.api.mget.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),me__$1,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"mph","mph",924313379)) - (55));
return cljs.pprint.cl_format.call(null,null,"The speed is ~8,1f mph ~:[over~;under~] the speed limit.",Math.abs(excess),(excess < (0)));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16596);
}}))),(new cljs.core.List(null,web_mx_quickstart.lesson.speedo_review.call(null),(new cljs.core.List(null,web_mx_quickstart.lesson.plus_button.call(null,(function (p1__16593_SHARP_){
return tiltontec.matrix.api.mswap_BANG_.call(null,(function (){var name__11025__auto__ = new cljs.core.Keyword(null,"speedometer","speedometer",-605901993);
return tiltontec.model.core.fm_navig.call(null,(function (p1__11024__11026__auto__){
return cljs.core._EQ_.call(null,name__11025__auto__,tiltontec.model.core.mget_QMARK_.call(null,p1__11024__11026__auto__,new cljs.core.Keyword(null,"name","name",1843675177)));
}),tiltontec.web_mx.api.evt_md.call(null,p1__16593_SHARP_),new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),false);
})(),new cljs.core.Keyword(null,"mph","mph",924313379),cljs.core.inc);
})),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16594);
}})));
});
web_mx_quickstart.lesson.ex_in_review = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menu","menu",352255198),"Review",new cljs.core.Keyword(null,"title","title",636505583),"Review",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"in-review","in-review",-1376770603),new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.in_review,new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Our closing example reprises all key Web/MX features."], null),new cljs.core.Keyword(null,"code","code",1586293142),"(defn plus-button [onclick]\n  (svg {:width   64 :height 64 :cursor :pointer\n        :onclick onclick}\n    (circle {:cx     \"50%\" :cy \"50%\" :r \"40%\"\n             :stroke \"orange\" :stroke-width 5\n             :fill   :transparent})\n    (text {:class       :heavychar :x \"50%\" :y \"70%\"\n           :text-anchor :middle} \"+\")))\n\n(defn speedo-review []\n  (span {:class :digi-readout\n         :style (cF {:color (if (> (mget me :mph) 55)\n                              \"red\" \"cyan\")})}\n    {:name     :speedometer\n     :mph      (cI 42)\n     :air-drag (letfn [(clear-intv [i]\n                         (when (number? i)\n                           (js/clearInterval i)))]\n                 (cF+ [:watch (fn [_ _ new prior _]\n                                (clear-intv prior))\n                       :on-quiesce (fn [c]\n                                     (clear-intv (c-value c)))]\n                   (js/setInterval\n                     #(mswap! me :mph * 0.98) 1000)))}\n    (pp/cl-format nil \"~8,1f mph\" (mget me :mph))))\n\n(defn in-review []\n  (div {:class :intro}\n    (h2 (let [excess (- (mget (fmu :speedometer) :mph) 55)]\n          (pp/cl-format nil \"The speed is ~8,1f mph ~:[over~;under~] the speed limit.\"\n            (Math/abs excess) (neg? excess))))\n    (speedo-review)\n    (plus-button #(mswap! (fmu :speedometer (evt-md %)) :mph inc))))",new cljs.core.Keyword(null,"comment","comment",532206069),"\n   <ul type=circle>\n   <li>it looks and works like standard HTML, SVG, CSS, and CLJS;</li>\n   <li>all state dependencies are property to property;</li>\n   <li>the <code>H2</code> computes its text by navigating to the speedometer widget to read the <code>mph</code> value;</li>\n   <li>the <code>(plus-button ...)</code> button navigates to the speedometer to mutate the <code>mph</code> value;</li>\n   <li>the <code>air-drag</code> async interval mutates the DAG, reducing the <code>mph</code>;</li>\n   <li>function <code>plus-button</code> demonstrates reusable composition.</li>\n   </ul>"], null);
web_mx_quickstart.lesson.ex_tl_dr = cljs.core.merge.call(null,web_mx_quickstart.lesson.ex_in_review,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"menu","menu",352255198),"Intro",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"intro","intro",-886090599),new cljs.core.Keyword(null,"title","title",636505583),"Web/MX: Simplicity. Power. Fun.",new cljs.core.Keyword(null,"builder","builder",-2055262005),web_mx_quickstart.lesson.in_review,new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<blockquote>Standard HTML + fine-grained reactivity, all the way down.<br><br>\n     Declarative, functional, and transparent.<br><br>\n     No VDOM, pre-processor, compiler, special view functions, setState, subscribe/notify, hooks,refs, or separate store.\n\n                  </blockquote>\n\n                  With <a target=_blank href='https://github.com/kennytilton/web-mx'>Web/MX</a>,\n                  we build rich interfaces using a few key tricks:<br>\n                <ul type=disc>\n                <li>stick to <a target=_blank href='https://developer.mozilla.org/en-US/docs/Web/HTML'>standard</a> HTML, SVG, and CSS elements&hellip;</li>\n                <li>&hellip;but give them ad hoc properties as needed;</li>\n                <li>bring the DOM alive with reactive formulas for individual properties&hellip;</li>\n                <li>&hellip;and maintain the DOM with fine-grained updates;</li>\n                <li>let a formula access arbitrary other app state&hellip;</li>\n                <li>&hellip;and let an async handler <i>change</i> any properties;</li>\n                <li>support <i>watch</i> functions on properties, for side effects;</li>\n                <li>make it all declarative and transparent; and</li>\n                <li>because this is so much fun, create reactive wrappers for routing, XHR, localStorage&mdash;as much\n                as we like.</li>\n                 </ul>","Minimalist, but it scales:\n                <li>a simulated <a target=_blank href=\"http://tiltonsalgebra.com/#\">private Algebra tutor</a>;</li>\n                <li>a browser for the monthly <a target=_blank\n                href=\"https://kennytilton.github.io/whoishiring/\">AskHN: Who's Hiring?</a> question; and</li>\n                <li>to a lesser degree, this <a target=_blank href=\"https://github.com/kennytilton/kennytilton.github.io/tree/master/web-mx-quickstart\">Quick Start</a>\n                and the classic <a target=_blank and href='https://kennytilton.github.io/TodoFRP/'>TodoMVC.</li>","In the remaining panels, we will expand on each idea above, most of which are manifested below.\n                Hit (+) to fight the wind drag.<br>&nbsp;"], null),new cljs.core.Keyword(null,"comment","comment",532206069),null], null));

//# sourceMappingURL=lesson.js.map
