// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('web_mx_quickstart.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.gen');
goog.require('tiltontec.web_mx.gen_macro');
goog.require('tiltontec.web_mx.html');
goog.require('web_mx_quickstart.extra');
goog.require('web_mx_quickstart.lesson');
web_mx_quickstart.core.quick_start_toolbar = (function web_mx_quickstart$core$quick_start_toolbar(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$toolbar,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$start,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$menu,cljs.core.cst$sym$title], null),cljs.core.cst$kw$as,cljs.core.cst$sym$demo], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$demos)], null),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"bold","normal")], null))),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$demo)))], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title)))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28714 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28715 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28715);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_toolbar_$_iter__28716(s__28717){
return (new cljs.core.LazySeq(null,(function (){
var s__28717__$1 = s__28717;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28717__$1);
if(temp__5804__auto__){
var s__28717__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28717__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28717__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28719 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28718 = (0);
while(true){
if((i__28718 < size__4528__auto__)){
var map__28720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28718);
var map__28720__$1 = (((((!((map__28720 == null))))?(((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28720):map__28720);
var demo = map__28720__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28720__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28720__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__28719,tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"bold","normal")], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_demo = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo,curr_demo))?"orange":"white"),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo,curr_demo))?"bold":"normal")], null);
});})(i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$demo))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return ((function (i__28718,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$demos;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(((function (i__28718,name__17145__auto__,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
});})(i__28718,name__17145__auto__,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
,me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$selected_DASH_demo,demo);
});
;})(i__28718,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
});})(i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28722 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28723 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28723);

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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28722);
}});})(i__28718,map__28720,map__28720__$1,demo,menu,title,c__4527__auto__,size__4528__auto__,b__28719,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))));

var G__28728 = (i__28718 + (1));
i__28718 = G__28728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28719),web_mx_quickstart$core$quick_start_toolbar_$_iter__28716(cljs.core.chunk_rest(s__28717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28719),null);
}
} else {
var map__28724 = cljs.core.first(s__28717__$2);
var map__28724__$1 = (((((!((map__28724 == null))))?(((((map__28724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28724):map__28724);
var demo = map__28724__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28724__$1,cljs.core.cst$kw$title);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$demo,cljs.core.cst$sym$curr_DASH_demo),"bold","normal")], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_demo = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo,curr_demo))?"orange":"white"),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(demo,curr_demo))?"bold":"normal")], null);
});})(map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$demo))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return (function (){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$demos;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic((function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
}),me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$selected_DASH_demo,demo);
});
});})(map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28726 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28727 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28727);

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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28726);
}});})(map__28724,map__28724__$1,demo,menu,title,s__28717__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$quick_start_toolbar_$_iter__28716(cljs.core.rest(s__28717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me),cljs.core.cst$kw$demos));
})()),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28714);
}})], 0)));
});
web_mx_quickstart.core.quick_start = (function web_mx_quickstart$core$quick_start(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28783 = arguments.length;
var i__4737__auto___28784 = (0);
while(true){
if((i__4737__auto___28784 < len__4736__auto___28783)){
args__4742__auto__.push((arguments[i__4737__auto___28784]));

var G__28785 = (i__4737__auto___28784 + (1));
i__4737__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return web_mx_quickstart.core.quick_start.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(web_mx_quickstart.core.quick_start.cljs$core$IFn$_invoke$arity$variadic = (function (demo_title,start_demo_ix,demos){
return tiltontec.web_mx.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$demos,cljs.core.cst$kw$selected_DASH_demo,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$demos),cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$start_DASH_demo_DASH_ix),(0),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$start_DASH_demo_DASH_ix,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos)),cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos)),cljs.core.cst$kw$else,cljs.core.cst$sym$start_DASH_demo_DASH_ix))),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR__orig_val__28733 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__28734 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__28734);

try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.mget(me,cljs.core.cst$kw$demos),(((start_demo_ix < (0)))?(0):(((start_demo_ix >= cljs.core.count(demos)))?(cljs.core.count(demos) - (1)):start_demo_ix
)));
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__28733);
}})], 0)),cljs.core.cst$kw$keydowner,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$watch,(function (_,me,new$,___$1,___$2){
return document.addEventListener("keydown",new$);
}),cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$evt], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$demos,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$demos),cljs.core.cst$sym$demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$selected_DASH_demo),cljs.core.cst$sym$curr_DASH_x,cljs.core.list(cljs.core.cst$sym$$indexOf,cljs.core.cst$sym$demos,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$prn,cljs.core.cst$kw$curr,cljs.core.cst$sym$curr_DASH_x,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$$_DASH_key,cljs.core.cst$sym$evt),cljs.core.cst$kw$shift,cljs.core.list(cljs.core.cst$sym$$_DASH_shiftKey,cljs.core.cst$sym$evt)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$new_DASH_x,cljs.core.list(cljs.core.cst$sym$case,cljs.core.list(cljs.core.cst$sym$$_DASH_key,cljs.core.cst$sym$evt),"Home",(0),"End",cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos)),cljs.core.list("ArrowRight","ArrowDown","PageDown"),cljs.core.list(cljs.core.cst$sym$inc,cljs.core.cst$sym$curr_DASH_x),cljs.core.list("ArrowLeft","ArrowUp","PageUp"),cljs.core.list(cljs.core.cst$sym$dec,cljs.core.cst$sym$curr_DASH_x),null)], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_LT__EQ_,(0),cljs.core.cst$sym$new_DASH_x,cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos))),cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.cst$sym$me,cljs.core.cst$kw$selected_DASH_demo,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.cst$sym$demos,cljs.core.cst$sym$new_DASH_x))))),cljs.core.list(cljs.core.cst$sym$prn,cljs.core.cst$kw$keydowner,cljs.core.list(cljs.core.cst$sym$$_DASH_key,cljs.core.cst$sym$evt),cljs.core.list(cljs.core.cst$sym$$_DASH_shiftKey,cljs.core.cst$sym$evt)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
return (function (evt){
var demos_28786__$1 = tiltontec.model.core.mget(me,cljs.core.cst$kw$demos);
var demo_28787 = tiltontec.model.core.mget(me,cljs.core.cst$kw$selected_DASH_demo);
var curr_x_28788 = demos_28786__$1.indexOf(demo_28787);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$curr,curr_x_28788,cljs.core.cst$kw$key,evt.key,cljs.core.cst$kw$shift,evt.shiftKey], 0));

var temp__5804__auto___28789 = (function (){var G__28735 = evt.key;
switch (G__28735) {
case "Home":
return (0);

break;
case "End":
return (cljs.core.count(demos_28786__$1) - (1));

break;
case "ArrowRight":
case "ArrowDown":
case "PageDown":
return (curr_x_28788 + (1));

break;
case "ArrowLeft":
case "ArrowUp":
case "PageUp":
return (curr_x_28788 - (1));

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5804__auto___28789)){
var new_x_28791 = temp__5804__auto___28789;
if(((((0) <= new_x_28791)) && ((new_x_28791 <= (cljs.core.count(demos_28786__$1) - (1)))))){
tiltontec.model.core.mset_BANG_(me,cljs.core.cst$kw$selected_DASH_demo,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(demos_28786__$1,new_x_28791));
} else {
}
} else {
}

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keydowner,evt.key,evt.shiftKey], 0));
});
})], 0)),cljs.core.cst$kw$demos,demos,cljs.core.cst$kw$show_DASH_glossary_QMARK_,tiltontec.cell.core.cI(false)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$demo)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28729_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28729_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx)))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28736 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28737 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28737);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$demo,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$demo)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28729_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28729_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28738 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28739 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28739);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$span,"use <- or -> keys<br>&nbsp;"),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28740 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28741 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28741);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$demo_DASH_title)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28742 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28743 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28743);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,demo_title,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28742);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"use <- or -> keys<br>&nbsp;")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28744 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28745 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28745);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"use <- or -> keys<br>&nbsp;",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28744);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.core.quick_start_toolbar(),null,(1),null)),(2),null)),(3),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28740);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto__ = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
if(cljs.core.truth_(temp__5804__auto__)){
var demo = temp__5804__auto__;
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$demo)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$demo))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28729_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28729_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$demo)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28746 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28747 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28747);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$demo))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28748 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28749 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28749);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(demo),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28748);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$preamble.cljs$core$IFn$_invoke$arity$1(demo);
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

var _STAR_parent_STAR__orig_val__28750 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28751 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28751);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,preamble,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28750);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$iter__28752(s__28753){
return (new cljs.core.LazySeq(null,(function (){
var s__28753__$1 = s__28753;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28753__$1);
if(temp__5804__auto____$2){
var s__28753__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28753__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28753__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28755 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28754 = (0);
while(true){
if((i__28754 < size__4528__auto__)){
var elt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28754);
cljs.core.chunk_append(b__28755,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28754,elt,c__4527__auto__,size__4528__auto__,b__28755,s__28753__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28756 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28757 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28757);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28756);
}});})(i__28754,elt,c__4527__auto__,size__4528__auto__,b__28755,s__28753__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache))
], 0))));

var G__28792 = (i__28754 + (1));
i__28754 = G__28792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28755),web_mx_quickstart$core$iter__28752(cljs.core.chunk_rest(s__28753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28755),null);
}
} else {
var elt = cljs.core.first(s__28753__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (elt,s__28753__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28758 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28759 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28759);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28758);
}});})(elt,s__28753__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$iter__28752(cljs.core.rest(s__28753__$2)));
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
})(),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$demo)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28760 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28761 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28761);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var fexpr__28762 = cljs.core.cst$kw$builder.cljs$core$IFn$_invoke$arity$1(demo);
return (fexpr__28762.cljs$core$IFn$_invoke$arity$0 ? fexpr__28762.cljs$core$IFn$_invoke$arity$0() : fexpr__28762.call(null));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28760);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("pre",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$demo)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28763 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28764 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28764);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("code",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$demo))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28765 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28766 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28766);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(demo),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28765);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28763);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$glossary], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28729_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28729_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28767 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28768 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28768);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,(function (p1__28729_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,tiltontec.web_mx.gen.evt_md(p1__28729_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.not);
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Glossary")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28769 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28770 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28770);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Glossary",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28769);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
return ["display:",(cljs.core.truth_(tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$4),cljs.core.cst$kw$show_DASH_glossary_QMARK_))?"block":"none")].join('');
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$extra_SLASH_glossary))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28771 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28772 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28772);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,web_mx_quickstart.extra.glossary(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28771);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28767);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(demo);
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

var _STAR_parent_STAR__orig_val__28773 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28774 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28774);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,c,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28773);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$iter__28775(s__28776){
return (new cljs.core.LazySeq(null,(function (){
var s__28776__$1 = s__28776;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28776__$1);
if(temp__5804__auto____$2){
var s__28776__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28776__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28776__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28778 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28777 = (0);
while(true){
if((i__28777 < size__4528__auto__)){
var cx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28777);
cljs.core.chunk_append(b__28778,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28777,cx,c__4527__auto__,size__4528__auto__,b__28778,s__28776__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28779 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28780 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28780);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28779);
}});})(i__28777,cx,c__4527__auto__,size__4528__auto__,b__28778,s__28776__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache))
], 0))));

var G__28793 = (i__28777 + (1));
i__28777 = G__28793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28778),web_mx_quickstart$core$iter__28775(cljs.core.chunk_rest(s__28776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28778),null);
}
} else {
var cx = cljs.core.first(s__28776__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (cx,s__28776__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28781 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28782 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28782);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28781);
}});})(cx,s__28776__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28746,_STAR_parent_STAR__temp_val__28747,me__$2,_cell__$2,_slot_name__$2,_cache__$2,demo,temp__5804__auto__,_STAR_parent_STAR__orig_val__28738,_STAR_parent_STAR__temp_val__28739,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28736,_STAR_parent_STAR__temp_val__28737,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$iter__28775(cljs.core.rest(s__28776__$2)));
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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28746);
}})], 0)));
} else {
return null;
}
})(),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28738);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28736);
}})], 0)));
}));

(web_mx_quickstart.core.quick_start.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(web_mx_quickstart.core.quick_start.cljs$lang$applyTo = (function (seq28730){
var G__28731 = cljs.core.first(seq28730);
var seq28730__$1 = cljs.core.next(seq28730);
var G__28732 = cljs.core.first(seq28730__$1);
var seq28730__$2 = cljs.core.next(seq28730__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28731,G__28732,seq28730__$2);
}));

web_mx_quickstart.core.main = (function web_mx_quickstart$core$main(mx_builder){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main]: loading"], 0));

var root = goog.dom.getElement("app");
var app_matrix = (mx_builder.cljs$core$IFn$_invoke$arity$0 ? mx_builder.cljs$core$IFn$_invoke$arity$0() : mx_builder.call(null));
var app_dom = tiltontec.web_mx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.mget(app_matrix,cljs.core.cst$kw$mx_DASH_dom));
(root.innerHTML = null);

return goog.dom.appendChild(root,app_dom);
});
web_mx_quickstart.core.main((function (){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$web_DASH_mx_DASH_quickstart$core_SLASH_intro,cljs.core.cst$kw$mx_DASH_dom,web_mx_quickstart.core.quick_start.cljs$core$IFn$_invoke$arity$variadic("Web/MX&trade;<br>Quick Start",(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([web_mx_quickstart.lesson.ex_tl_dr,web_mx_quickstart.lesson.ex_just_html,web_mx_quickstart.lesson.ex_and_cljs,web_mx_quickstart.lesson.ex_html_composition,web_mx_quickstart.lesson.ex_custom_state,web_mx_quickstart.lesson.ex_derived_state,web_mx_quickstart.lesson.ex_navigation,web_mx_quickstart.lesson.ex_handler_mutation,web_mx_quickstart.lesson.ex_watches,web_mx_quickstart.lesson.ex_watch_cc,web_mx_quickstart.lesson.ex_async_cat,web_mx_quickstart.lesson.ex_data_integrity,web_mx_quickstart.lesson.ex_in_review], 0))], 0));
}));
