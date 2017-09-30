// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.tag.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tiltontec.model.core');
goog.require('cljs.pprint');
tiltontec.tag.gen.on_event_attr_template = "(function () { ~a(event~{,~s~})})()";
var ret__7805__auto___15255 = (function (){
tiltontec.tag.gen.on_evt_BANG_ = (function tiltontec$tag$gen$on_evt_BANG_(var_args){
var args__7772__auto__ = [];
var len__7765__auto___15256 = arguments.length;
var i__7766__auto___15257 = (0);
while(true){
if((i__7766__auto___15257 < len__7765__auto___15256)){
args__7772__auto__.push((arguments[i__7766__auto___15257]));

var G__15258 = (i__7766__auto___15257 + (1));
i__7766__auto___15257 = G__15258;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((3) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((3)),(0),null)):null);
return tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7773__auto__);
});

tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fname,cb_args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fn_DASH_name__15250__auto__),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$str_SLASH_replace),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$str_SLASH_replace),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7483__auto__ = fname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"-"),cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"/"),cljs.core._conj(cljs.core.List.EMPTY,".")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pp_SLASH_cl_DASH_format),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_on_DASH_event_DASH_attr_DASH_template),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fn_DASH_name__15250__auto__),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),cb_args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});

tiltontec.tag.gen.on_evt_BANG_.cljs$lang$maxFixedArity = (3);

tiltontec.tag.gen.on_evt_BANG_.cljs$lang$applyTo = (function (seq15251){
var G__15252 = cljs.core.first(seq15251);
var seq15251__$1 = cljs.core.next(seq15251);
var G__15253 = cljs.core.first(seq15251__$1);
var seq15251__$2 = cljs.core.next(seq15251__$1);
var G__15254 = cljs.core.first(seq15251__$2);
var seq15251__$3 = cljs.core.next(seq15251__$2);
return tiltontec.tag.gen.on_evt_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15252,G__15253,G__15254,seq15251__$3);
});

return null;
})()
;
tiltontec.tag.gen.on_evt_BANG_.cljs$lang$macro = true;

tiltontec.tag.gen.tag_dom_sid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
tiltontec.tag.gen.id_js = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tiltontec.tag.gen.dom_tag = (function tiltontec$tag$gen$dom_tag(dom){
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tiltontec.tag.gen.id_js),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom-tag did not find js for id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of dom "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag")].join('')));
}

return tag;
});
tiltontec.tag.gen.make_tag = (function tiltontec$tag$gen$make_tag(tag,attrs,c_QMARK_kids){
var dom_sid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tiltontec.tag.gen.tag_dom_sid,cljs.core.inc);
var js_obj = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tiltontec.model.core.make,cljs.core.cst$kw$type,cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag,cljs.core.cst$kw$tag,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(attrs))),cljs.core.cst$kw$id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_sid,cljs.core.cst$kw$kids,c_QMARK_kids], 0))], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tiltontec.tag.gen.id_js,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_sid)].join(''),js_obj);

return js_obj;
});
var ret__7805__auto___15259 = tiltontec.tag.gen.deftag = (function tiltontec$tag$gen$deftag(_AMPERSAND_form,_AMPERSAND_env,tag){
var kids_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("kids");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('');
var attrs_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("attrs");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defmacro),(function (){var x__7483__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7483__auto__ = attrs_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_AMPERSAND_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = kids_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_sequence),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_make_DASH_tag))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7483__auto__ = tag_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7483__auto__ = attrs_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_sequence),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7483__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$model$core_SLASH_c_QMARK_kids))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__7483__auto__ = kids_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()], 0))));
});
tiltontec.tag.gen.deftag.cljs$lang$macro = true;

var ret__7805__auto___15267 = (function (){
tiltontec.tag.gen.deftags = (function tiltontec$tag$gen$deftags(var_args){
var args__7772__auto__ = [];
var len__7765__auto___15268 = arguments.length;
var i__7766__auto___15269 = (0);
while(true){
if((i__7766__auto___15269 < len__7765__auto___15268)){
args__7772__auto__.push((arguments[i__7766__auto___15269]));

var G__15270 = (i__7766__auto___15269 + (1));
i__7766__auto___15269 = G__15270;
continue;
} else {
}
break;
}

var argseq__7773__auto__ = ((((2) < args__7772__auto__.length))?(new cljs.core.IndexedSeq(args__7772__auto__.slice((2)),(0),null)):null);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7773__auto__);
});

tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tags){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var iter__7429__auto__ = (function tiltontec$tag$gen$iter__15263(s__15264){
return (new cljs.core.LazySeq(null,(function (){
var s__15264__$1 = s__15264;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15264__$1);
if(temp__4657__auto__){
var s__15264__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15264__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__15264__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__15266 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__15265 = (0);
while(true){
if((i__15265 < size__7428__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__15265);
cljs.core.chunk_append(b__15266,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_deftag),(function (){var x__7483__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))));

var G__15271 = (i__15265 + (1));
i__15265 = G__15271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15266),tiltontec$tag$gen$iter__15263(cljs.core.chunk_rest(s__15264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15266),null);
}
} else {
var tag = cljs.core.first(s__15264__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$tiltontec$tag$gen_SLASH_deftag),(function (){var x__7483__auto__ = tag;
return cljs.core._conj(cljs.core.List.EMPTY,x__7483__auto__);
})()))),tiltontec$tag$gen$iter__15263(cljs.core.rest(s__15264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7429__auto__(tags);
})())));
});

tiltontec.tag.gen.deftags.cljs$lang$maxFixedArity = (2);

tiltontec.tag.gen.deftags.cljs$lang$applyTo = (function (seq15260){
var G__15261 = cljs.core.first(seq15260);
var seq15260__$1 = cljs.core.next(seq15260);
var G__15262 = cljs.core.first(seq15260__$1);
var seq15260__$2 = cljs.core.next(seq15260__$1);
return tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$variadic(G__15261,G__15262,seq15260__$2);
});

return null;
})()
;
tiltontec.tag.gen.deftags.cljs$lang$macro = true;















(tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$15 ? tiltontec.tag.gen.deftags.cljs$core$IFn$_invoke$arity$15(tiltontec.tag.gen.section,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button) : tiltontec.tag.gen.deftags.call(null,tiltontec.tag.gen.section,tiltontec.tag.gen.section,tiltontec.tag.gen.label,tiltontec.tag.gen.header,tiltontec.tag.gen.footer,tiltontec.tag.gen.h1,tiltontec.tag.gen.input,tiltontec.tag.gen.p,tiltontec.tag.gen.span,tiltontec.tag.gen.a,tiltontec.tag.gen.img,tiltontec.tag.gen.ul,tiltontec.tag.gen.li,tiltontec.tag.gen.div,tiltontec.tag.gen.button));
