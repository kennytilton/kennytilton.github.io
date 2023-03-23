// Compiled by ClojureScript 1.10.773 {}
goog.provide('web_mx_quickstart.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('bide.core');
goog.require('tiltontec.matrix.api');
goog.require('tiltontec.web_mx.api');
goog.require('web_mx_quickstart.extra');
goog.require('web_mx_quickstart.lesson');
web_mx_quickstart.core.quick_start_toolbar = (function web_mx_quickstart$core$quick_start_toolbar(){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"scroll","scroll",971553779),new cljs.core.Keyword(null,"gap","gap",80255254),"9px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"start","start",-355208981)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-toolbar","anchor-toolbar",-1312395170)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-less","tbar-get-less",-40993678)),new cljs.core.Keyword(null,"lessons","lessons",1419621080))], null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"#/",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"route","route",1970422836,null))),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-route","tbar-get-route",-234839382)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"2px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"orange",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null))))),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"anchor-",new cljs.core.Symbol(null,"route","route",1970422836,null))], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"title","title",-2017930186,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16600 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16601 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16601);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_toolbar_$_iter__16602(s__16603){
return (new cljs.core.LazySeq(null,(function (){
var s__16603__$1 = s__16603;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16603__$1);
if(temp__5804__auto__){
var s__16603__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16603__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16603__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16605 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16604 = (0);
while(true){
if((i__16604 < size__4528__auto__)){
var map__16606 = cljs.core._nth.call(null,c__4527__auto__,i__16604);
var map__16606__$1 = (((((!((map__16606 == null))))?(((((map__16606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16606):map__16606);
var lesson = map__16606__$1;
var menu = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var title = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword(null,"title","title",636505583));
var route = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword(null,"route","route",329891309));
cljs.core.chunk_append.call(null,b__16605,tiltontec.web_mx.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),["#/",cljs.core.name.call(null,route)].join(''),new cljs.core.Keyword(null,"selector","selector",762528866),menu,new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-route","tbar-get-route",-234839382)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"2px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"orange",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16604,map__16606,map__16606__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__16605,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
var curr_route = tiltontec.matrix.api.mget.call(null,tiltontec.matrix.api.fasc.call(null,new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),me__$1,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-route","tbar-get-route",-234839382)),new cljs.core.Keyword(null,"route","route",329891309));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"2px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),((cljs.core._EQ_.call(null,route,curr_route))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"orange",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null));
});})(i__16604,map__16606,map__16606__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__16605,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),["anchor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('')], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16604,map__16606,map__16606__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__16605,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16608 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16609 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16609);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(function (){var or__4126__auto__ = menu;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return title;
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16608);
}});})(i__16604,map__16606,map__16606__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__16605,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache))
)));

var G__16614 = (i__16604 + (1));
i__16604 = G__16614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16605),web_mx_quickstart$core$quick_start_toolbar_$_iter__16602.call(null,cljs.core.chunk_rest.call(null,s__16603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16605),null);
}
} else {
var map__16610 = cljs.core.first.call(null,s__16603__$2);
var map__16610__$1 = (((((!((map__16610 == null))))?(((((map__16610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16610):map__16610);
var lesson = map__16610__$1;
var menu = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var title = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"title","title",636505583));
var route = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"route","route",329891309));
return cljs.core.cons.call(null,tiltontec.web_mx.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),["#/",cljs.core.name.call(null,route)].join(''),new cljs.core.Keyword(null,"selector","selector",762528866),menu,new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),cljs.core.list(new cljs.core.Symbol(null,"fasc","fasc",1750413500,null),new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-route","tbar-get-route",-234839382)),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"2px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"curr-route","curr-route",149307381,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"orange",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (map__16610,map__16610__$1,lesson,menu,title,route,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
var curr_route = tiltontec.matrix.api.mget.call(null,tiltontec.matrix.api.fasc.call(null,new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),me__$1,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-route","tbar-get-route",-234839382)),new cljs.core.Keyword(null,"route","route",329891309));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"128px",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"2px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal"], null),((cljs.core._EQ_.call(null,route,curr_route))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"orange",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null));
});})(map__16610,map__16610__$1,lesson,menu,title,route,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache))
),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),["anchor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('')], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (map__16610,map__16610__$1,lesson,menu,title,route,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16612 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16613 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16613);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(function (){var or__4126__auto__ = menu;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return title;
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16612);
}});})(map__16610,map__16610__$1,lesson,menu,title,route,s__16603__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__16600,_STAR_parent_STAR__temp_val__16601,me,_cell,_prop_name,_cache))
)),web_mx_quickstart$core$quick_start_toolbar_$_iter__16602.call(null,cljs.core.rest.call(null,s__16603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tiltontec.matrix.api.mget.call(null,tiltontec.matrix.api.fasc.call(null,new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),me,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"tbar-get-less","tbar-get-less",-40993678)),new cljs.core.Keyword(null,"lessons","lessons",1419621080)));
})()),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16600);
}})));
});
web_mx_quickstart.core.quick_start = (function web_mx_quickstart$core$quick_start(lesson_title,lessons){
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"quick-start","quick-start",-375992496),new cljs.core.Keyword(null,"route","route",329891309),tiltontec.matrix.api.cI.call(null,new cljs.core.Keyword(null,"intro","intro",-886090599)),new cljs.core.Keyword(null,"router-starter","router-starter",-629272961),(function (){
return bide.core.start_BANG_.call(null,bide.core.router.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"intro","intro",-886090599)], null)], null),cljs.core.map.call(null,(function (p__16615){
var map__16616 = p__16615;
var map__16616__$1 = (((((!((map__16616 == null))))?(((((map__16616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16616):map__16616);
var route = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"route","route",329891309));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["/",cljs.core.name.call(null,route)].join(''),route], null);
}),lessons)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (route,params,query){
var temp__5804__auto__ = cljs.core.deref.call(null,tiltontec.matrix.api.matrix);
if(cljs.core.truth_(temp__5804__auto__)){
var mtx = temp__5804__auto__;
return tiltontec.matrix.api.mset_BANG_.call(null,mtx,new cljs.core.Keyword(null,"route","route",329891309),route);
} else {
return null;
}
})], null));
}),new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),false,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
var route = tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"route","route",329891309));
return cljs.core.some.call(null,(function (lesson){
if(cljs.core._EQ_.call(null,route,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(lesson))){
return lesson;
} else {
return null;
}
}),lessons);
})),new cljs.core.Keyword(null,"keydowner","keydowner",1359417228),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"watch","watch",380988277),(function (_,me,new$,___$1,___$2){
return document.addEventListener("keydown",new$);
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"lessons","lessons",1419621080)),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500)),new cljs.core.Symbol(null,"curr-x","curr-x",166934853,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-x","new-x",1236971951,null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,".-key",".-key",1962611766,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),"Home",(0),"End",cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null))),cljs.core.list("ArrowRight","ArrowDown","PageDown"),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curr-x","curr-x",166934853,null)),cljs.core.list("ArrowLeft","ArrowUp","PageUp"),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"curr-x","curr-x",166934853,null)),null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(0),new cljs.core.Symbol(null,"new-x","new-x",1236971951,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null)))),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),cljs.core.list(new cljs.core.Symbol(null,".preventDefault",".preventDefault",1855844498,null),new cljs.core.Symbol(null,"evt","evt",388964660,null)),cljs.core.list(new cljs.core.Symbol(null,"mset!","mset!",836980241,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.list(new cljs.core.Keyword(null,"route","route",329891309),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null),new cljs.core.Symbol(null,"new-x","new-x",1236971951,null))))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
return (function (evt){
var lessons__$1 = tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"lessons","lessons",1419621080));
var lesson = tiltontec.matrix.api.mget.call(null,me,new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500));
var curr_x = lessons__$1.indexOf(lesson);
var temp__5804__auto__ = (function (){var G__16618 = evt.key;
switch (G__16618) {
case "Home":
return (0);

break;
case "End":
return (cljs.core.count.call(null,lessons__$1) - (1));

break;
case "ArrowRight":
case "ArrowDown":
case "PageDown":
return (curr_x + (1));

break;
case "ArrowLeft":
case "ArrowUp":
case "PageUp":
return (curr_x - (1));

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var new_x = temp__5804__auto__;
if(((((0) <= new_x)) && ((new_x <= (cljs.core.count.call(null,lessons__$1) - (1)))))){
evt.stopPropagation();

evt.preventDefault();

return tiltontec.matrix.api.mset_BANG_.call(null,me,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,lessons__$1,new_x)));
} else {
return null;
}
} else {
return null;
}
});
})),new cljs.core.Keyword(null,"lessons","lessons",1419621080),lessons,new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),tiltontec.matrix.api.cI.call(null,false)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["180px",new cljs.core.Keyword(null,"center","center",-748944368),"4mm ridge orange",(0),new cljs.core.Keyword(null,"start","start",-355208981),"1em",new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"column","column",2078222095),"100%",(0)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"qs-dash","qs-dash",1211521135)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"padding","padding",1660304693),"18px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.Symbol(null,"lesson-title","lesson-title",1347298577,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),"use <- or -> keys<br>&nbsp;"),cljs.core.list(new cljs.core.Symbol(null,"quick-start-toolbar","quick-start-toolbar",2116182143,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lesson","lesson",1264767999,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500))], null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"padding","padding",1660304693),"4em",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null),cljs.core.list(new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elt","elt",1496134729,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"elt","elt",1496134729,null)))))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson-code","lesson-code",296928923)], null),cljs.core.list(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.list(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"Hide Glossary","Show Glossary")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"display:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"block","none")))], null),cljs.core.list(new cljs.core.Symbol("extra","glossary","extra/glossary",-1379697611,null)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null)))))))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,prop_c_SHARP_);
var _cell = prop_c_SHARP_;
var _prop_name = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP_);
var _cache = tiltontec.cell.base.c_value.call(null,prop_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16619 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16620 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16620);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["180px",new cljs.core.Keyword(null,"center","center",-748944368),"4mm ridge orange",(0),new cljs.core.Keyword(null,"start","start",-355208981),"1em",new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"column","column",2078222095),"100%",(0)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"qs-dash","qs-dash",1211521135)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"padding","padding",1660304693),"18px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.Symbol(null,"lesson-title","lesson-title",1347298577,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),"use <- or -> keys<br>&nbsp;"),cljs.core.list(new cljs.core.Symbol(null,"quick-start-toolbar","quick-start-toolbar",2116182143,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16621 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16622 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16622);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"padding","padding",1660304693),"18px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"lesson-title","lesson-title",1347298577,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16623 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16624 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16624);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,lesson_title,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16623);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"use <- or -> keys<br>&nbsp;")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16625 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16626 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16626);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,"use <- or -> keys<br>&nbsp;",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16625);
}}))),(new cljs.core.List(null,web_mx_quickstart.core.quick_start_toolbar.call(null),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16621);
}}))),(new cljs.core.List(null,(function (){var qstart = me;
return tiltontec.web_mx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lesson","lesson",1264767999,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500))], null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"padding","padding",1660304693),"4em",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null),cljs.core.list(new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elt","elt",1496134729,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"elt","elt",1496134729,null)))))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson-code","lesson-code",296928923)], null),cljs.core.list(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.list(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"Hide Glossary","Show Glossary")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"display:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"block","none")))], null),cljs.core.list(new cljs.core.Symbol("extra","glossary","extra/glossary",-1379697611,null)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null)))))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$1);
var _cell__$1 = prop_c_SHARP___$1;
var _prop_name__$1 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16627 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16628 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16628);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(function (){var temp__5804__auto__ = tiltontec.matrix.api.mget.call(null,qstart,new cljs.core.Keyword(null,"selected-lesson","selected-lesson",927794500));
if(cljs.core.truth_(temp__5804__auto__)){
var lesson = temp__5804__auto__;
return tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"fade-in","fade-in",999370239),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"padding","padding",1660304693),"4em",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h2","h2",1267868799,null),cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null),cljs.core.list(new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elt","elt",1496134729,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"elt","elt",1496134729,null)))))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson-code","lesson-code",296928923)], null),cljs.core.list(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.list(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"Hide Glossary","Show Glossary")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"display:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"block","none")))], null),cljs.core.list(new cljs.core.Symbol("extra","glossary","extra/glossary",-1379697611,null)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cx","cx",-1381741445,null),new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null)))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$2);
var _cell__$2 = prop_c_SHARP___$2;
var _prop_name__$2 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16629 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16630 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16630);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"h2",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16631 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16632 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16632);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(lesson),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16631);
}}))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"preamble","preamble",1641040241).cljs$core$IFn$_invoke$arity$1(lesson);
if(cljs.core.truth_(temp__5804__auto____$1)){
var preamble = temp__5804__auto____$1;
if(typeof preamble === 'string'){
return tiltontec.web_mx.gen.make_tag.call(null,"blockquote",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"preamble","preamble",-1013395528,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16633 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16634 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16634);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,preamble,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16633);
}})));
} else {
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_$_iter__16635(s__16636){
return (new cljs.core.LazySeq(null,(function (){
var s__16636__$1 = s__16636;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__16636__$1);
if(temp__5804__auto____$2){
var s__16636__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16636__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16636__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16638 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16637 = (0);
while(true){
if((i__16637 < size__4528__auto__)){
var elt = cljs.core._nth.call(null,c__4527__auto__,i__16637);
cljs.core.chunk_append.call(null,b__16638,tiltontec.web_mx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"elt","elt",1496134729,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16637,elt,c__4527__auto__,size__4528__auto__,b__16638,s__16636__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16639 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16640 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16640);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16639);
}});})(i__16637,elt,c__4527__auto__,size__4528__auto__,b__16638,s__16636__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache))
)));

var G__16666 = (i__16637 + (1));
i__16637 = G__16666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16638),web_mx_quickstart$core$quick_start_$_iter__16635.call(null,cljs.core.chunk_rest.call(null,s__16636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16638),null);
}
} else {
var elt = cljs.core.first.call(null,s__16636__$2);
return cljs.core.cons.call(null,tiltontec.web_mx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"elt","elt",1496134729,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (elt,s__16636__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16641 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16642 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16642);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16641);
}});})(elt,s__16636__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache))
)),web_mx_quickstart$core$quick_start_$_iter__16635.call(null,cljs.core.rest.call(null,s__16636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,preamble);
})());
}
} else {
return null;
}
})(),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"builder","builder",-2055262005),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16643 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16644 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16644);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"builder","builder",-2055262005).cljs$core$IFn$_invoke$arity$1(lesson).call(null),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16643);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"pre",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"lesson-code","lesson-code",296928923)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.list(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16645 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16646 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16646);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$4);
var _cell__$4 = prop_c_SHARP___$4;
var _prop_name__$4 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16647 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16648 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16648);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(lesson),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16647);
}}))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16645);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"glossary","glossary",1104312830)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!","mswap!",-1802136894,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"Hide Glossary","Show Glossary")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"display:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"block","none")))], null),cljs.core.list(new cljs.core.Symbol("extra","glossary","extra/glossary",-1379697611,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16649 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16650 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16650);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"pushbutton","pushbutton",-1536519115),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){
return tiltontec.matrix.api.mswap_BANG_.call(null,qstart,new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111),cljs.core.not);
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"Hide Glossary","Show Glossary"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$4);
var _cell__$4 = prop_c_SHARP___$4;
var _prop_name__$4 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16651 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16652 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16652);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,(cljs.core.truth_(tiltontec.matrix.api.mget.call(null,qstart,new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)))?"Hide Glossary":"Show Glossary"),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16651);
}}))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"display:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"mget","mget",701597289,null),new cljs.core.Symbol(null,"qstart","qstart",1268627383,null),new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)),"block","none"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$4);
var _cell__$4 = prop_c_SHARP___$4;
var _prop_name__$4 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$4);
return ["display:",(cljs.core.truth_(tiltontec.matrix.api.mget.call(null,qstart,new cljs.core.Keyword(null,"show-glossary?","show-glossary?",1120138111)))?"block":"none")].join('');
}))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("extra","glossary","extra/glossary",-1379697611,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$4);
var _cell__$4 = prop_c_SHARP___$4;
var _prop_name__$4 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16653 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16654 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16654);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,web_mx_quickstart.extra.glossary.call(null),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16653);
}}))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16649);
}}))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(lesson);
if(cljs.core.truth_(temp__5804__auto____$1)){
var c = temp__5804__auto____$1;
if(typeof c === 'string'){
return tiltontec.web_mx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"c","c",-122660552,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16655 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16656 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16656);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,c,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16655);
}})));
} else {
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_$_iter__16657(s__16658){
return (new cljs.core.LazySeq(null,(function (){
var s__16658__$1 = s__16658;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__16658__$1);
if(temp__5804__auto____$2){
var s__16658__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16658__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16658__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16660 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16659 = (0);
while(true){
if((i__16659 < size__4528__auto__)){
var cx = cljs.core._nth.call(null,c__4527__auto__,i__16659);
cljs.core.chunk_append.call(null,b__16660,tiltontec.web_mx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__16659,cx,c__4527__auto__,size__4528__auto__,b__16660,s__16658__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16661 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16662 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16662);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16661);
}});})(i__16659,cx,c__4527__auto__,size__4528__auto__,b__16660,s__16658__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache))
)));

var G__16667 = (i__16659 + (1));
i__16659 = G__16667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16660),web_mx_quickstart$core$quick_start_$_iter__16657.call(null,cljs.core.chunk_rest.call(null,s__16658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16660),null);
}
} else {
var cx = cljs.core.first.call(null,s__16658__$2);
return cljs.core.cons.call(null,tiltontec.web_mx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"preamble","preamble",1641040241)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"cx","cx",-1381741445,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (cx,s__16658__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache){
return (function (prop_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,prop_c_SHARP___$3);
var _cell__$3 = prop_c_SHARP___$3;
var _prop_name__$3 = tiltontec.cell.base.c_prop.call(null,prop_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value.call(null,prop_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__16663 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__16664 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__16664);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16663);
}});})(cx,s__16658__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__16629,_STAR_parent_STAR__temp_val__16630,me__$2,_cell__$2,_prop_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__16627,_STAR_parent_STAR__temp_val__16628,me__$1,_cell__$1,_prop_name__$1,_cache__$1,qstart,_STAR_parent_STAR__orig_val__16619,_STAR_parent_STAR__temp_val__16620,me,_cell,_prop_name,_cache))
)),web_mx_quickstart$core$quick_start_$_iter__16657.call(null,cljs.core.rest.call(null,s__16658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,c);
})());
}
} else {
return null;
}
})(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16629);
}})));
} else {
return null;
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16627);
}})));
})(),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__16619);
}})));
});
web_mx_quickstart.core.main = (function web_mx_quickstart$core$main(mx_builder){
cljs.core.println.call(null,"[main]: loading app");

var root = goog.dom.getElement("app");
var app_matrix = mx_builder.call(null);
var app_dom = tiltontec.web_mx.api.tag_dom_create.call(null,app_matrix);
cljs.core.reset_BANG_.call(null,tiltontec.matrix.api.matrix,app_matrix);

(root.innerHTML = null);

goog.dom.appendChild(root,app_dom);

var temp__5804__auto__ = tiltontec.matrix.api.mget_QMARK_.call(null,app_matrix,new cljs.core.Keyword(null,"router-starter","router-starter",-629272961));
if(cljs.core.truth_(temp__5804__auto__)){
var router_starter = temp__5804__auto__;
return router_starter.call(null);
} else {
return null;
}
});
web_mx_quickstart.core.lessons = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [web_mx_quickstart.lesson.ex_tl_dr,web_mx_quickstart.lesson.ex_just_html,web_mx_quickstart.lesson.ex_and_cljs,web_mx_quickstart.lesson.ex_html_composition,web_mx_quickstart.lesson.ex_custom_state,web_mx_quickstart.lesson.ex_derived_state,web_mx_quickstart.lesson.ex_navigation,web_mx_quickstart.lesson.ex_handler_mutation,web_mx_quickstart.lesson.ex_watches,web_mx_quickstart.lesson.ex_watch_cc,web_mx_quickstart.lesson.ex_async_cat,web_mx_quickstart.lesson.ex_data_integrity,web_mx_quickstart.lesson.ex_in_review], null);
web_mx_quickstart.core.main.call(null,(function (){
return web_mx_quickstart.core.quick_start.call(null,"Web/MX&trade;<br>Quick Start",web_mx_quickstart.core.lessons);
}));

//# sourceMappingURL=core.js.map
