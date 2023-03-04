// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('web_mx_quickstart.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.web_mx.gen');
goog.require('tiltontec.web_mx.gen_macro');
goog.require('tiltontec.web_mx.html');
goog.require('web_mx_quickstart.lesson');
web_mx_quickstart.core.quick_start_toolbar = (function web_mx_quickstart$core$quick_start_toolbar(){
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$toolbar,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$start,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$menu,cljs.core.cst$sym$title], null),cljs.core.cst$kw$as,cljs.core.cst$sym$clk], null),cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$demos)], null),cljs.core.list(cljs.core.cst$sym$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_clk,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"bold","normal")], null))),cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$clk)))], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title)))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28693 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28694 = me;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28694);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$quick_start_toolbar_$_iter__28695(s__28696){
return (new cljs.core.LazySeq(null,(function (){
var s__28696__$1 = s__28696;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28696__$1);
if(temp__5804__auto__){
var s__28696__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28696__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28696__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28698 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28697 = (0);
while(true){
if((i__28697 < size__4528__auto__)){
var map__28699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28697);
var map__28699__$1 = (((((!((map__28699 == null))))?(((((map__28699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28699):map__28699);
var clk = map__28699__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28699__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28699__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__28698,tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_clk,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"bold","normal")], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_clk = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clk,curr_clk))?"orange":"white"),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clk,curr_clk))?"bold":"normal")], null);
});})(i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$clk))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
return ((function (i__28697,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (){
return tiltontec.model.core.mset_BANG_((function (){var name__17145__auto__ = cljs.core.cst$kw$demos;
return tiltontec.model.core.fm_navig.cljs$core$IFn$_invoke$arity$variadic(((function (i__28697,name__17145__auto__,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (p1__17144__17146__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__17145__auto__,tiltontec.model.core.md_get(p1__17144__17146__auto__,cljs.core.cst$kw$name));
});})(i__28697,name__17145__auto__,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
,me__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$me_QMARK_,false,cljs.core.cst$kw$up_QMARK_,true,cljs.core.cst$kw$inside_QMARK_,false], 0));
})(),cljs.core.cst$kw$selected_DASH_demo,clk);
});
;})(i__28697,me__$1,_cell__$1,_slot_name__$1,_cache__$1,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
});})(i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28701 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28702 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28702);

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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28701);
}});})(i__28697,map__28699,map__28699__$1,clk,menu,title,c__4527__auto__,size__4528__auto__,b__28698,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0))));

var G__28707 = (i__28697 + (1));
i__28697 = G__28707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28698),web_mx_quickstart$core$quick_start_toolbar_$_iter__28695(cljs.core.chunk_rest(s__28696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28698),null);
}
} else {
var map__28703 = cljs.core.first(s__28696__$2);
var map__28703__$1 = (((((!((map__28703 == null))))?(((((map__28703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28703):map__28703);
var clk = map__28703__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28703__$1,cljs.core.cst$kw$menu);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28703__$1,cljs.core.cst$kw$title);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("button",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$cursor,cljs.core.cst$kw$finger,cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$curr_DASH_clk,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"orange","white"),cljs.core.cst$kw$font_DASH_weight,cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$clk,cljs.core.cst$sym$curr_DASH_clk),"bold","normal")], null))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
var curr_clk = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_width,"144px",cljs.core.cst$kw$border_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clk,curr_clk))?"orange":"white"),cljs.core.cst$kw$font_DASH_weight,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clk,curr_clk))?"bold":"normal")], null);
});})(map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0)),cljs.core.cst$kw$onclick,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$fn,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$mset_BANG_,cljs.core.list(cljs.core.cst$sym$fmu,cljs.core.cst$kw$demos),cljs.core.cst$kw$selected_DASH_demo,cljs.core.cst$sym$clk))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
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
})(),cljs.core.cst$kw$selected_DASH_demo,clk);
});
});})(map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$or,cljs.core.cst$sym$menu,cljs.core.cst$sym$title))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28705 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28706 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28706);

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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28705);
}});})(map__28703,map__28703__$1,clk,menu,title,s__28696__$2,temp__5804__auto__,_STAR_parent_STAR__orig_val__28693,_STAR_parent_STAR__temp_val__28694,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$quick_start_toolbar_$_iter__28695(cljs.core.rest(s__28696__$2)));
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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28693);
}})], 0)));
});
web_mx_quickstart.core.quick_start = (function web_mx_quickstart$core$quick_start(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28777 = arguments.length;
var i__4737__auto___28778 = (0);
while(true){
if((i__4737__auto___28778 < len__4736__auto___28777)){
args__4742__auto__.push((arguments[i__4737__auto___28778]));

var G__28779 = (i__4737__auto___28778 + (1));
i__4737__auto___28778 = G__28779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return web_mx_quickstart.core.quick_start.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(web_mx_quickstart.core.quick_start.cljs$core$IFn$_invoke$arity$variadic = (function (demo_title,start_demo_ix,demos){
return tiltontec.web_mx.gen.make_tag("div",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$demos,cljs.core.cst$kw$selected_DASH_demo,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.cst$sym$tiltontec$cell$base_SLASH_without_DASH_c_DASH_dependency,cljs.core.list(cljs.core.cst$sym$nth,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.cst$sym$me,cljs.core.cst$kw$demos),cljs.core.list(cljs.core.cst$sym$cond,cljs.core.list(cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$start_DASH_demo_DASH_ix),(0),cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$start_DASH_demo_DASH_ix,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos)),cljs.core.list(cljs.core.cst$sym$dec,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$demos)),cljs.core.cst$kw$else,cljs.core.cst$sym$start_DASH_demo_DASH_ix))),cljs.core.cst$kw$input_QMARK_,true,cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model(slot_c_SHARP_);
var _cell = slot_c_SHARP_;
var _slot_name = tiltontec.cell.base.c_slot(slot_c_SHARP_);
var _cache = tiltontec.cell.base.c_value(slot_c_SHARP_);
var _STAR_depender_STAR__orig_val__28712 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_depender_STAR__temp_val__28713 = null;
(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__temp_val__28713);

try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiltontec.model.core.mget(me,cljs.core.cst$kw$demos),(((start_demo_ix < (0)))?(0):(((start_demo_ix >= cljs.core.count(demos)))?(cljs.core.count(demos) - (1)):start_demo_ix
)));
}finally {(tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR__orig_val__28712);
}})], 0)),cljs.core.cst$kw$demos,demos,cljs.core.cst$kw$show_DASH_glossary_QMARK_,tiltontec.cell.core.cI(false)], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clk,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$clk)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$gap,"6px",cljs.core.cst$kw$margin_DASH_top,"9px"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28708_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28708_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$table,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null))))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx)))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP_){
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

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$gap,"2em"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clk,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$selected_DASH_demo)], null),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$clk)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$gap,"6px",cljs.core.cst$kw$margin_DASH_top,"9px"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28708_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28708_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$table,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null))))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model(slot_c_SHARP___$1);
var _cell__$1 = slot_c_SHARP___$1;
var _slot_name__$1 = tiltontec.cell.base.c_slot(slot_c_SHARP___$1);
var _cache__$1 = tiltontec.cell.base.c_value(slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28716 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28717 = me__$1;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28717);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$start,cljs.core.cst$kw$border_DASH_right,"4mm ridge orange"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin_DASH_bottom,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),cljs.core.cst$sym$demo_DASH_title),cljs.core.list(cljs.core.cst$sym$quick_DASH_start_DASH_toolbar))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28718 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28719 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28719);

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

var _STAR_parent_STAR__orig_val__28720 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28721 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28721);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,demo_title,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28720);
}})], 0))),(new cljs.core.List(null,web_mx_quickstart.core.quick_start_toolbar(),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28718);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto__ = tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$1),cljs.core.cst$kw$selected_DASH_demo);
if(cljs.core.truth_(temp__5804__auto__)){
var clk = temp__5804__auto__;
return tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$padding,"6px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$h1,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$clk)),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preamble,cljs.core.list(cljs.core.cst$kw$preamble,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$preamble),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elt,cljs.core.cst$sym$preamble], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$elt))))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$clk))),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$gap,"6px",cljs.core.cst$kw$margin_DASH_top,"9px"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28708_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28708_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$table,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null))))),cljs.core.list(cljs.core.cst$sym$when_DASH_let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c,cljs.core.list(cljs.core.cst$kw$comment,cljs.core.cst$sym$clk)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$doall,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cx,cljs.core.cst$sym$c], null),cljs.core.list(cljs.core.cst$sym$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.cst$sym$cx))))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model(slot_c_SHARP___$2);
var _cell__$2 = slot_c_SHARP___$2;
var _slot_name__$2 = tiltontec.cell.base.c_slot(slot_c_SHARP___$2);
var _cache__$2 = tiltontec.cell.base.c_value(slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28722 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28723 = me__$2;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28723);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$title,cljs.core.cst$sym$clk))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28724 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28725 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28725);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(clk),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28724);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$preamble.cljs$core$IFn$_invoke$arity$1(clk);
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

var _STAR_parent_STAR__orig_val__28726 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28727 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28727);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,preamble,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28726);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$iter__28728(s__28729){
return (new cljs.core.LazySeq(null,(function (){
var s__28729__$1 = s__28729;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28729__$1);
if(temp__5804__auto____$2){
var s__28729__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28729__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28729__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28731 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28730 = (0);
while(true){
if((i__28730 < size__4528__auto__)){
var elt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28730);
cljs.core.chunk_append(b__28731,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28730,elt,c__4527__auto__,size__4528__auto__,b__28731,s__28729__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28732 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28733 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28733);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28732);
}});})(i__28730,elt,c__4527__auto__,size__4528__auto__,b__28731,s__28729__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))));

var G__28780 = (i__28730 + (1));
i__28730 = G__28780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28731),web_mx_quickstart$core$iter__28728(cljs.core.chunk_rest(s__28729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28731),null);
}
} else {
var elt = cljs.core.first(s__28729__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$elt)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (elt,s__28729__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28734 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28735 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28735);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,elt,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28734);
}});})(elt,s__28729__$2,temp__5804__auto____$2,preamble,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$iter__28728(cljs.core.rest(s__28729__$2)));
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
})(),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_color,"orange",cljs.core.cst$kw$border_DASH_style,"solid",cljs.core.cst$kw$border_DASH_width,"2px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.list(cljs.core.cst$kw$builder,cljs.core.cst$sym$clk)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28736 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28737 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28737);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,(function (){var fexpr__28738 = cljs.core.cst$kw$builder.cljs$core$IFn$_invoke$arity$1(clk);
return (fexpr__28738.cljs$core$IFn$_invoke$arity$0 ? fexpr__28738.cljs$core$IFn$_invoke$arity$0() : fexpr__28738.call(null));
})(),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28736);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("pre",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$lesson_DASH_code], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$clk)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28739 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28740 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28740);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("code",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$kw$code,cljs.core.cst$sym$clk))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28741 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28742 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28742);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(clk),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28741);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28739);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$row,cljs.core.cst$kw$gap,"6px",cljs.core.cst$kw$margin_DASH_top,"9px"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$glossary], null),tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28708_SHARP_], null),cljs.core.list(cljs.core.cst$sym$mswap_BANG_,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.list(cljs.core.cst$sym$evt_DASH_md,cljs.core.cst$sym$p1__28708_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.cst$sym$not))], null),"Glossary"),cljs.core.list(cljs.core.cst$sym$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.list(cljs.core.cst$sym$cF,cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none")))], null),cljs.core.list(cljs.core.cst$sym$table,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null)))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28743 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28744 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28744);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("span",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$pushbutton,cljs.core.cst$kw$onclick,(function (p1__28708_SHARP_){
return tiltontec.model.core.mswap_BANG_(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,tiltontec.web_mx.gen.evt_md(p1__28708_SHARP_)),cljs.core.cst$kw$show_DASH_glossary_QMARK_,cljs.core.not);
})], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Glossary")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28745 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28746 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28746);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Glossary",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28745);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("div",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$str,"display:",cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$mget,cljs.core.list(cljs.core.cst$sym$fasc,cljs.core.cst$kw$demos,cljs.core.cst$sym$me),cljs.core.cst$kw$show_DASH_glossary_QMARK_),"block","none"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
return ["display:",(cljs.core.truth_(tiltontec.model.core.mget(tiltontec.model.core.fasc(cljs.core.cst$kw$demos,me__$4),cljs.core.cst$kw$show_DASH_glossary_QMARK_))?"block":"none")].join('');
})], 0))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$table,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null))))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model(slot_c_SHARP___$4);
var _cell__$4 = slot_c_SHARP___$4;
var _slot_name__$4 = tiltontec.cell.base.c_slot(slot_c_SHARP___$4);
var _cache__$4 = tiltontec.cell.base.c_value(slot_c_SHARP___$4);
if(cljs.core.truth_(me__$4)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28747 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28748 = me__$4;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28748);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("table",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments")),cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$usage,cljs.core.cst$sym$description], null)], null),cljs.core.list(cljs.core.cst$sym$tr,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null)))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$5){
var me__$5 = tiltontec.cell.base.c_model(slot_c_SHARP___$5);
var _cell__$5 = slot_c_SHARP___$5;
var _slot_name__$5 = tiltontec.cell.base.c_slot(slot_c_SHARP___$5);
var _cache__$5 = tiltontec.cell.base.c_value(slot_c_SHARP___$5);
if(cljs.core.truth_(me__$5)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28749 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28750 = me__$5;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28750);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("tr",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$th,"Symbol"),cljs.core.list(cljs.core.cst$sym$th,"Comments"))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$6){
var me__$6 = tiltontec.cell.base.c_model(slot_c_SHARP___$6);
var _cell__$6 = slot_c_SHARP___$6;
var _slot_name__$6 = tiltontec.cell.base.c_slot(slot_c_SHARP___$6);
var _cache__$6 = tiltontec.cell.base.c_value(slot_c_SHARP___$6);
if(cljs.core.truth_(me__$6)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28751 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28752 = me__$6;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28752);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("th",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Symbol")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$7){
var me__$7 = tiltontec.cell.base.c_model(slot_c_SHARP___$7);
var _cell__$7 = slot_c_SHARP___$7;
var _slot_name__$7 = tiltontec.cell.base.c_slot(slot_c_SHARP___$7);
var _cache__$7 = tiltontec.cell.base.c_value(slot_c_SHARP___$7);
if(cljs.core.truth_(me__$7)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28753 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28754 = me__$7;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28754);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Symbol",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28753);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("th",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,"Comments")),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$7){
var me__$7 = tiltontec.cell.base.c_model(slot_c_SHARP___$7);
var _cell__$7 = slot_c_SHARP___$7;
var _slot_name__$7 = tiltontec.cell.base.c_slot(slot_c_SHARP___$7);
var _cache__$7 = tiltontec.cell.base.c_value(slot_c_SHARP___$7);
if(cljs.core.truth_(me__$7)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28755 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28756 = me__$7;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28756);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,"Comments",null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28755);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28751);
}})], 0))),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__28757){
var vec__28758 = p__28757;
var usage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(0),null);
var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(1),null);
return tiltontec.web_mx.gen.make_tag("tr",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$usage),cljs.core.list(cljs.core.cst$sym$td,cljs.core.cst$sym$description))),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$6){
var me__$6 = tiltontec.cell.base.c_model(slot_c_SHARP___$6);
var _cell__$6 = slot_c_SHARP___$6;
var _slot_name__$6 = tiltontec.cell.base.c_slot(slot_c_SHARP___$6);
var _cache__$6 = tiltontec.cell.base.c_value(slot_c_SHARP___$6);
if(cljs.core.truth_(me__$6)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28761 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28762 = me__$6;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28762);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("td",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$usage)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$7){
var me__$7 = tiltontec.cell.base.c_model(slot_c_SHARP___$7);
var _cell__$7 = slot_c_SHARP___$7;
var _slot_name__$7 = tiltontec.cell.base.c_slot(slot_c_SHARP___$7);
var _cache__$7 = tiltontec.cell.base.c_value(slot_c_SHARP___$7);
if(cljs.core.truth_(me__$7)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28763 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28764 = me__$7;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28764);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,usage,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28763);
}})], 0))),(new cljs.core.List(null,tiltontec.web_mx.gen.make_tag("td",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$description)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,(function (slot_c_SHARP___$7){
var me__$7 = tiltontec.cell.base.c_model(slot_c_SHARP___$7);
var _cell__$7 = slot_c_SHARP___$7;
var _slot_name__$7 = tiltontec.cell.base.c_slot(slot_c_SHARP___$7);
var _cache__$7 = tiltontec.cell.base.c_value(slot_c_SHARP___$7);
if(cljs.core.truth_(me__$7)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28765 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28766 = me__$7;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28766);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,description,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28765);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28761);
}})], 0)));
}),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mget <i>model</i> <i>property</i>)","The MX getter. Can be called from anywhere. When called in the scope of a Cell formula,\n                  establishes a reactive dependency on the gotten property."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mset! <i>model</i> <i>property</i> <i>value</i>)","The MX setter. Alias <code>mreset!</code>. Call from any imperative code. When calling\n                  from a <code>watch/observer</code>, must be wrapped in <code>(with-cc :tag setter)</code>"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(mswap! md prop fn & args)","mx swap!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(with-cc tag & body)","Required wrapper for MX mutation in scope of a watch function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cI value & option-values)","Marks the associated property as an MX input. eg, `:answer (cI 42)`"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF & body)","Provides a derived value for a property. Hidden parameter `me`. eg :answer (cF (* 6 9))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cF+ [& option-values] & body)","A version of `cF` that takes cell options such as :watch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFn & body)","Start as formula for initial value computation, then convert to input cell. Akin to\n                    \"constructor initialization\"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(cFonce & body)","Start as formula for initial computation, then behave as immutable property. Alias `cF1`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fm-navig seeking starting-at & options)","Search MX nodes for node matching `seeking`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fmu seeking & starting)","Search `up and around` from starting node, which defaults to lexical `me`."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(fasc seeking starting)","Search ascending parent chain from starting."], null)], null)),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28749);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28747);
}})], 0))),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28743);
}})], 0))),(new cljs.core.List(null,(function (){var temp__5804__auto____$1 = cljs.core.cst$kw$comment.cljs$core$IFn$_invoke$arity$1(clk);
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

var _STAR_parent_STAR__orig_val__28767 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28768 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28768);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,c,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28767);
}})], 0)));
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function web_mx_quickstart$core$iter__28769(s__28770){
return (new cljs.core.LazySeq(null,(function (){
var s__28770__$1 = s__28770;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__28770__$1);
if(temp__5804__auto____$2){
var s__28770__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__28770__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28770__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28772 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28771 = (0);
while(true){
if((i__28771 < size__4528__auto__)){
var cx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__28771);
cljs.core.chunk_append(b__28772,tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (i__28771,cx,c__4527__auto__,size__4528__auto__,b__28772,s__28770__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
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

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28773);
}});})(i__28771,cx,c__4527__auto__,size__4528__auto__,b__28772,s__28770__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))));

var G__28781 = (i__28771 + (1));
i__28771 = G__28781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28772),web_mx_quickstart$core$iter__28769(cljs.core.chunk_rest(s__28770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28772),null);
}
} else {
var cx = cljs.core.first(s__28770__$2);
return cljs.core.cons(tiltontec.web_mx.gen.make_tag("p",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$preamble], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.list(cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_assert,cljs.core.cst$sym$me,"no me for cFkids"),cljs.core.list(cljs.core.cst$sym$tiltontec$model$core_SLASH_the_DASH_kids,cljs.core.cst$sym$cx)),cljs.core.cst$kw$value,tiltontec.cell.base.unbound,cljs.core.cst$kw$rule,((function (cx,s__28770__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model(slot_c_SHARP___$3);
var _cell__$3 = slot_c_SHARP___$3;
var _slot_name__$3 = tiltontec.cell.base.c_slot(slot_c_SHARP___$3);
var _cache__$3 = tiltontec.cell.base.c_value(slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error(["Assert failed: ","no me for cFkids","\n","me"].join('')));
}

var _STAR_parent_STAR__orig_val__28775 = tiltontec.model.core._STAR_parent_STAR_;
var _STAR_parent_STAR__temp_val__28776 = me__$3;
(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__28776);

try{if(cljs.core.truth_(tiltontec.model.core._STAR_parent_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*parent*"));
}

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten((new cljs.core.List(null,cx,null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28775);
}});})(cx,s__28770__$2,temp__5804__auto____$2,c,temp__5804__auto____$1,_STAR_parent_STAR__orig_val__28722,_STAR_parent_STAR__temp_val__28723,me__$2,_cell__$2,_slot_name__$2,_cache__$2,clk,temp__5804__auto__,_STAR_parent_STAR__orig_val__28716,_STAR_parent_STAR__temp_val__28717,me__$1,_cell__$1,_slot_name__$1,_cache__$1,_STAR_parent_STAR__orig_val__28714,_STAR_parent_STAR__temp_val__28715,me,_cell,_slot_name,_cache))
], 0))),web_mx_quickstart$core$iter__28769(cljs.core.rest(s__28770__$2)));
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
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28722);
}})], 0)));
} else {
return null;
}
})(),null,(1),null)),(2),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28716);
}})], 0))),null,(1),null)))));
}finally {(tiltontec.model.core._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__28714);
}})], 0)));
}));

(web_mx_quickstart.core.quick_start.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(web_mx_quickstart.core.quick_start.cljs$lang$applyTo = (function (seq28709){
var G__28710 = cljs.core.first(seq28709);
var seq28709__$1 = cljs.core.next(seq28709);
var G__28711 = cljs.core.first(seq28709__$1);
var seq28709__$2 = cljs.core.next(seq28709__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28710,G__28711,seq28709__$2);
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
