// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('web_mx_quickstart.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('bide.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.gen');
goog.require('tiltontec.web_mx.gen_macro');
goog.require('tiltontec.web_mx.html');
goog.require('web_mx_quickstart.extra');
goog.require('web_mx_quickstart.lesson');
web_mx_quickstart.core.quick_start_toolbar = (function web_mx_quickstart$core$quick_start_toolbar(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$toolbar,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$start,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$into,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$menu,cljs.core.cst$sym$title,cljs.core.cst$sym$route], null),cljs.core.cst$kw$as,cljs.core.cst$sym$lesson], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$lessons)], null),cljs.core.list(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,cljs.core.list(cljs.core.cst$sym$str,"#/",cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$route)),cljs.core.cst$kw$selector,cljs.core.cst$sym$menu,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_route,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$route)], null),cljs.core.list(cljs.core.cst$sym$merge,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$none,cljs.core.cst$kw$border_DASH_width,"2px",cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$solid,cljs.core.cst$kw$border_DASH_color,"white",cljs.core.cst$kw$font_DASH_weight,"normal"], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,cljs.core.cst$sym$curr_DASH_route),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$font_DASH_weight,"bold"], null))))),cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title)))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28783 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28784 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28784);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_toolbar_$_iter__28785(s__28786){
return (new cljs.core.LazySeq(null,(function (){
var s__28786__$1 = s__28786;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28786__$1);
if(temp__5804__auto__){
var s__28786__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28786__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28786__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28788 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28787 = (0);
while(true){
if((i__28787 < size__4528__auto__)){
var map__28789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28787);
var map__28789__$1 = (((((!((map__28789 == null))))?(((((map__28789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28789):map__28789);
var lesson = map__28789__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28789__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28789__$1,cljs.core.cst$kw$title);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28789__$1,cljs.core.cst$kw$route);
cljs.core.chunk_append(b__28788,tiltontec.web_mx.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,["#/",cljs.core.name(route)].join(''),cljs.core.cst$kw$selector,menu,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_route,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$route)], null),cljs.core.list(cljs.core.cst$sym$merge,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$none,cljs.core.cst$kw$border_DASH_width,"2px",cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$solid,cljs.core.cst$kw$border_DASH_color,"white",cljs.core.cst$kw$font_DASH_weight,"normal"], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,cljs.core.cst$sym$curr_DASH_route),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$font_DASH_weight,"bold"], null))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28787,map__28789,map__28789__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__28788,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_route = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,me__$1),cljs.core.cst$kw$route);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$none,cljs.core.cst$kw$border_DASH_width,"2px",cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$solid,cljs.core.cst$kw$border_DASH_color,"white",cljs.core.cst$kw$font_DASH_weight,"normal"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,curr_route))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$font_DASH_weight,"bold"], null):null)], 0));
});})(i__28787,map__28789,map__28789__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__28788,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28787,map__28789,map__28789__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__28788,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28791 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28792 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28792);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var or__4126__auto__ = menu;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return title;
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28791);
}});})(i__28787,map__28789,map__28789__$1,lesson,menu,title,route,c__4527__auto__,size__4528__auto__,b__28788,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache))
], 0))));

var G__28797 = (i__28787 + (1));
i__28787 = G__28797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28788),web_mx_quickstart$core$quick_start_toolbar_$_iter__28785(cljs.core.chunk_rest(s__28786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28788),null);
}
} else {
var map__28793 = cljs.core.first(s__28786__$2);
var map__28793__$1 = (((((!((map__28793 == null))))?(((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28793):map__28793);
var lesson = map__28793__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,cljs.core.cst$kw$title);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,cljs.core.cst$kw$route);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("a",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,["#/",cljs.core.name(route)].join(''),cljs.core.cst$kw$selector,menu,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_route,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$route)], null),cljs.core.list(cljs.core.cst$sym$merge,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$none,cljs.core.cst$kw$border_DASH_width,"2px",cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$solid,cljs.core.cst$kw$border_DASH_color,"white",cljs.core.cst$kw$font_DASH_weight,"normal"], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,cljs.core.cst$sym$curr_DASH_route),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$font_DASH_weight,"bold"], null))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28793,map__28793__$1,lesson,menu,title,route,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_route = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,me__$1),cljs.core.cst$kw$route);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$none,cljs.core.cst$kw$border_DASH_width,"2px",cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$solid,cljs.core.cst$kw$border_DASH_color,"white",cljs.core.cst$kw$font_DASH_weight,"normal"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,curr_route))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$font_DASH_weight,"bold"], null):null)], 0));
});})(map__28793,map__28793__$1,lesson,menu,title,route,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28793,map__28793__$1,lesson,menu,title,route,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28795 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28796 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28796);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var or__4126__auto__ = menu;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return title;
}
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28795);
}});})(map__28793,map__28793__$1,lesson,menu,title,route,s__28786__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28783,_STAR_parent_STAR__temp_val__28784,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$quick_start_toolbar_$_iter__28785(cljs.core.rest(s__28786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,me),cljs.core.cst$kw$lessons));
})()),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28783);
}})], 0)));
});
web_mx_quickstart.core.quick_start = (function web_mx_quickstart$core$quick_start(lesson_title,lessons){
return tiltontec.web_mx.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$name,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$kw$route,tiltontec.cell.core.cI(cljs.core.cst$kw$intro),cljs.core.cst$kw$router_DASH_starter,(function (){
return bide.core.start_BANG_(bide.core.router(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$intro], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28799){
var map__28800 = p__28799;
var map__28800__$1 = (((((!((map__28800 == null))))?(((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28800):map__28800);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.cst$kw$route);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["/",cljs.core.name(route)].join(''),route], null);
}),lessons)))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default,cljs.core.cst$kw$ignore,cljs.core.cst$kw$on_DASH_navigate,(function (route,params,query){
var temp__5804__auto__ = cljs.core.deref(tiltontec.model.core.matrix);
if(cljs.core.truth_(temp__5804__auto__)){
var mtx = temp__5804__auto__;
return tiltontec.model.core.mset_BANG_(mtx,cljs.core.cst$kw$route,route);
} else {
return null;
}
})], null));
}),cljs.core.cst$kw$selected_DASH_lesson,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$route,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$route)], null),cljs.core.list(cljs.core.cst$sym$some,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lesson], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$route,cljs.core.list(cljs.core.cst$kw$route,cljs.core.cst$sym$lesson)),cljs.core.cst$sym$lesson)),cljs.core.cst$sym$lessons))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var route = tiltontec.model.core.mget(me,cljs.core.cst$kw$route);
return cljs.core.some((function (lesson){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(lesson))){
return lesson;
} else {
return null;
}
}),lessons);
})], 0)),cljs.core.cst$kw$keydowner,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (_,me,new$,___$1,___$2){
return document.addEventListener("keydown",new$);
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lessons,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$lessons),cljs.core.cst$sym$lesson,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$selected_DASH_lesson),cljs.core.cst$sym$curr_DASH_x,cljs.core.list(cljs.core.cst$sym$$indexOf,cljs.core.cst$sym$lessons,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_x,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$$_DASH_key,cljs.core.cst$sym$evt),"Home",(0),"End",cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$lessons)),cljs.core.list("ArrowRight","ArrowDown","PageDown"),cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curr_DASH_x),cljs.core.list("ArrowLeft","ArrowUp","PageUp"),cljs.core.list(cljs.core.cst$sym$dec,cljs.core.cst$sym$curr_DASH_x),null)], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_LT__EQ_,(0),cljs.core.cst$sym$new_DASH_x,cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$lessons))),cljs.core.list(cljs.core.cst$sym$$stopPropagation,cljs.core.cst$sym$evt),cljs.core.list(cljs.core.cst$sym$$preventDefault,cljs.core.cst$sym$evt),cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$route,cljs.core.list(cljs.core.cst$kw$route,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.cst$sym$lessons,cljs.core.cst$sym$new_DASH_x)))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return (function (evt){
var lessons__$1 = tiltontec.model.core.mget(me,cljs.core.cst$kw$lessons);
var lesson = tiltontec.model.core.mget(me,cljs.core.cst$kw$selected_DASH_lesson);
var curr_x = lessons__$1.indexOf(lesson);
var temp__5804__auto__ = (function (){var G__28802 = evt.key;
switch (G__28802) {
case "Home":
return (0);

break;
case "End":
return (cljs.core.count(lessons__$1) - (1));

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
if(((((0) <= new_x)) && ((new_x <= (cljs.core.count(lessons__$1) - (1)))))){
evt.stopPropagation();

evt.preventDefault();

return tiltontec.model.core.mset_BANG_(me,cljs.core.cst$kw$route,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lessons__$1,new_x)));
} else {
return null;
}
} else {
return null;
}
});
})], 0)),cljs.core.cst$kw$lessons,lessons,cljs.core.cst$kw$show_DASH_glossary_QMARK_,tiltontec.cell.core.cI(false)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$lesson_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lesson,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_lesson)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$fade_DASH_in,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$lesson)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28798_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28798_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx)))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28803 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28804 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28804);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$lesson_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lesson,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_lesson)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$fade_DASH_in,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$lesson)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28798_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28798_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28805 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28806 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28806);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$lesson_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28807 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28808 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28808);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$lesson_DASH_title)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28809 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28810 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28810);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,lesson_title,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28809);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"use <- or -> keys<br>&nbsp;")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28811 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28812 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28812);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"use <- or -> keys<br>&nbsp;",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28811);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.core.quick_start_toolbar(),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28807);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto__ = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,me__$1),cljs.core.cst$kw$selected_DASH_lesson);
if(cljs.core.truth_(temp__5804__auto__)){
var lesson = temp__5804__auto__;
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$fade_DASH_in,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$lesson)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$lesson))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28798_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28798_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$lesson)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28813 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28814 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28814);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$lesson))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28815 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28816 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28816);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(lesson),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28815);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$preamble.cljs$core$IFn$_invoke$arity$1(lesson);
if(cljs.core.truth_(temp__5804__auto____$1)){
var preamble = temp__5804__auto____$1;
if(typeof preamble === 'string'){
return tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$preamble)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28817 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28818 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28818);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,preamble,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28817);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_$_iter__28819(s__28820){
return (new cljs.core.LazySeq(null,(function (){
var s__28820__$1 = s__28820;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28820__$1);
if(temp__5804__auto____$2){
var s__28820__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28820__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28820__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28822 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28821 = (0);
while(true){
if((i__28821 < size__4528__auto__)){
var elt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28821);
cljs.core.chunk_append(b__28822,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28821,elt,c__4527__auto__,size__4528__auto__,b__28822,s__28820__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28823 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28824 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28824);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28823);
}});})(i__28821,elt,c__4527__auto__,size__4528__auto__,b__28822,s__28820__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache))
], 0))));

var G__28851 = (i__28821 + (1));
i__28821 = G__28851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28822),web_mx_quickstart$core$quick_start_$_iter__28819(cljs.core.chunk_rest(s__28820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28822),null);
}
} else {
var elt = cljs.core.first(s__28820__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (elt,s__28820__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28825 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28826 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28826);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28825);
}});})(elt,s__28820__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$quick_start_$_iter__28819(cljs.core.rest(s__28820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(preamble);
})());
}
} else {
return null;
}
})(),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$lesson)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28827 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28828 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28828);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var fexpr__28829 = cljs.core.cst$kw$builder.cljs$core$IFn$_invoke$arity$1(lesson);
return (fexpr__28829.cljs$core$IFn$_invoke$arity$0 ? fexpr__28829.cljs$core$IFn$_invoke$arity$0() : fexpr__28829.call(null));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28827);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("pre",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$lesson)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28830 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28831 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28831);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("code",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$lesson))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28832 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28833 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28833);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(lesson),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28832);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28830);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28798_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28798_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28834 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28835 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28835);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,(function (p1__28798_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,tiltontec.web_mx.gen.evt_md(p1__28798_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.not);
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Glossary")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28836 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28837 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28837);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Glossary",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28836);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$quick_DASH_start,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
return ["display:",(cljs.core.truth_(tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$quick_DASH_start,me__$4),cljs.core.cst$kw$show_DASH_glossary_QMARK_))?"block":"none")].join('');
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28838 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28839 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28839);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,web_mx_quickstart.extra.glossary(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28838);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28834);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(lesson);
if(cljs.core.truth_(temp__5804__auto____$1)){
var c = temp__5804__auto____$1;
if(typeof c === 'string'){
return tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$c)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28840 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28841 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28841);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,c,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28840);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_$_iter__28842(s__28843){
return (new cljs.core.LazySeq(null,(function (){
var s__28843__$1 = s__28843;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28843__$1);
if(temp__5804__auto____$2){
var s__28843__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28843__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28843__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28845 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28844 = (0);
while(true){
if((i__28844 < size__4528__auto__)){
var cx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28844);
cljs.core.chunk_append(b__28845,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28844,cx,c__4527__auto__,size__4528__auto__,b__28845,s__28843__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28846 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28847 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28847);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28846);
}});})(i__28844,cx,c__4527__auto__,size__4528__auto__,b__28845,s__28843__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache))
], 0))));

var G__28852 = (i__28844 + (1));
i__28844 = G__28852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28845),web_mx_quickstart$core$quick_start_$_iter__28842(cljs.core.chunk_rest(s__28843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28845),null);
}
} else {
var cx = cljs.core.first(s__28843__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (cx,s__28843__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28848 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28849 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28849);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28848);
}});})(cx,s__28843__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28813,_STAR_parent_STAR__temp_val__28814,me__$2,_cell__$2,_slot_name__$2,_cache__$2,lesson,temp__5804__auto__,_STAR_parent_STAR__orig_val__28805,_STAR_parent_STAR__temp_val__28806,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28803,_STAR_parent_STAR__temp_val__28804,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$quick_start_$_iter__28842(cljs.core.rest(s__28843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(c);
})());
}
} else {
return null;
}
})(),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28813);
}})], 0)));
} else {
return null;
}
})(),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28805);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28803);
}})], 0)));
});
web_mx_quickstart.core.main = (function web_mx_quickstart$core$main(mx_builder){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main]: loading"], 0));

var root = goog.dom.getElement("app");
var app_matrix = (mx_builder.cljs$core$IFn$_invoke$arity$0 ? mx_builder.cljs$core$IFn$_invoke$arity$0() : mx_builder.call(null));
var app_dom = tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(app_matrix);
cljs.core.reset_BANG_(tiltontec.model.core.matrix,app_matrix);

(root.innerHTML = null);

goog.dom.appendChild(root,app_dom);

var temp__5804__auto__ = tiltontec.model.core.mget(app_matrix,cljs.core.cst$kw$router_DASH_starter);
if(cljs.core.truth_(temp__5804__auto__)){
var router_starter = temp__5804__auto__;
return (router_starter.cljs$core$IFn$_invoke$arity$0 ? router_starter.cljs$core$IFn$_invoke$arity$0() : router_starter.call(null));
} else {
return null;
}
});
web_mx_quickstart.core.lessons = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [web_mx_quickstart.lesson.ex_tl_dr,web_mx_quickstart.lesson.ex_just_html,web_mx_quickstart.lesson.ex_and_cljs,web_mx_quickstart.lesson.ex_html_composition,web_mx_quickstart.lesson.ex_custom_state,web_mx_quickstart.lesson.ex_derived_state,web_mx_quickstart.lesson.ex_navigation,web_mx_quickstart.lesson.ex_handler_mutation,web_mx_quickstart.lesson.ex_watches,web_mx_quickstart.lesson.ex_watch_cc,web_mx_quickstart.lesson.ex_async_cat,web_mx_quickstart.lesson.ex_data_integrity,web_mx_quickstart.lesson.ex_in_review], null);
web_mx_quickstart.core.main((function (){
return web_mx_quickstart.core.quick_start("Web/MX&trade;<br>Quick Start",web_mx_quickstart.core.lessons);
}));
