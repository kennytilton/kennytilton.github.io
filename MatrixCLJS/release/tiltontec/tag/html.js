// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('tiltontec.tag.html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.tag.html.tagfo = (function tiltontec$tag$html$tagfo(me){
return cljs.core.select_keys(cljs.core.deref(me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$tag,cljs.core.cst$kw$class,cljs.core.cst$kw$name], null));
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.tag.html.mxa_find_tag = (function tiltontec$tag$html$mxa_find_tag(me,tag){
return tiltontec.model.core.fasc((function (visited){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(visited)));
}),me);
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.tag.html.mxa_find_type = (function tiltontec$tag$html$mxa_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc((function (visited){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,tiltontec.cell.base.ia_type(visited));
}),me);
});
tiltontec.tag.html.dom_has_class = (function tiltontec$tag$html$dom_has_class(dom,class$){
if(cljs.core.truth_(dom)){
var cs = dom.classList;
if(cljs.core.truth_(cs)){
return dom.classList.contains(class$);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.dom_ancestor_by_class = (function tiltontec$tag$html$dom_ancestor_by_class(dom,class$){
if(cljs.core.truth_(dom)){
var pn = dom.parentNode;
if(cljs.core.truth_(pn)){
if(cljs.core.truth_(tiltontec.tag.html.dom_has_class(pn,class$))){
return pn;
} else {
return (tiltontec.tag.html.dom_ancestor_by_class.cljs$core$IFn$_invoke$arity$2 ? tiltontec.tag.html.dom_ancestor_by_class.cljs$core$IFn$_invoke$arity$2(pn,class$) : tiltontec.tag.html.dom_ancestor_by_class.call(null,pn,class$));
}
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.dom_ancestor_by_tag = (function tiltontec$tag$html$dom_ancestor_by_tag(dom,tag){
if(cljs.core.truth_(dom)){
var pn = dom.parentNode;
if(cljs.core.truth_(pn)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pn.tagName,clojure.string.upper_case(tag))){
return pn;
} else {
return (tiltontec.tag.html.dom_ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 ? tiltontec.tag.html.dom_ancestor_by_tag.cljs$core$IFn$_invoke$arity$2(pn,tag) : tiltontec.tag.html.dom_ancestor_by_tag.call(null,pn,tag));
}
} else {
return null;
}
} else {
return null;
}
});
tiltontec.tag.html.to_html = (function tiltontec$tag$html$to_html(me){
if(typeof me === 'string'){
return me;
} else {
if(cljs.core.coll_QMARK_(me)){
var b$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.tag.html.to_html,me);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,b$);
} else {
var h = cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"<~a ~a>~@[~a~]~{~a~}</~0@*~a>",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)),(tiltontec.tag.html.to_attrs.cljs$core$IFn$_invoke$arity$1 ? tiltontec.tag.html.to_attrs.cljs$core$IFn$_invoke$arity$1(me) : tiltontec.tag.html.to_attrs.call(null,me)),tiltontec.model.core.md_get(me,cljs.core.cst$kw$content),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tiltontec.tag.html.to_html,tiltontec.model.core.md_get(me,cljs.core.cst$kw$kids))], 0));
return h;

}
}
});
tiltontec.tag.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_type,"type"], null);
tiltontec.tag.html.true_html = (function tiltontec$tag$html$true_html(keyword){
var or__6640__auto__ = (keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(tiltontec.tag.html._PLUS_true_html_PLUS_) : keyword.call(null,tiltontec.tag.html._PLUS_true_html_PLUS_));
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
return cljs.core.name(keyword);
}
});
tiltontec.tag.html.to_attrs = (function tiltontec$tag$html$to_attrs(me){
var unblank = (function (s){
if((cljs.core.count(s) > (0))){
return s;
} else {
return null;
}
});
var attr_keys = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$hidden,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$checked,cljs.core.cst$kw$disabled,cljs.core.cst$kw$autofocus,cljs.core.cst$kw$href,cljs.core.cst$kw$input_DASH_type,cljs.core.cst$kw$for,cljs.core.cst$kw$onclick,cljs.core.cst$kw$ondblclick,cljs.core.cst$kw$onkeypress,cljs.core.cst$kw$onblur,cljs.core.cst$kw$onmouseover,cljs.core.cst$kw$onkeydown,cljs.core.cst$kw$id,cljs.core.cst$kw$value], null);
var style_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display], null);
var ga = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__7429__auto__ = ((function (unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__15078(s__15079){
return (new cljs.core.LazySeq(null,((function (unblank,attr_keys,style_keys){
return (function (){
var s__15079__$1 = s__15079;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15079__$1);
if(temp__4657__auto__){
var s__15079__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15079__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__15079__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__15081 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__15080 = (0);
while(true){
if((i__15080 < size__7428__auto__)){
var vec__15082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__15080);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15082,(1),null);
cljs.core.chunk_append(b__15081,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hidden,cljs.core.cst$kw$checked,cljs.core.cst$kw$disabled,cljs.core.cst$kw$autofocus], null)))?(cljs.core.truth_(v)?cljs.core.name(k):""):cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a='~a'",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.tag.html.true_html(k),v], 0))));

var G__15102 = (i__15080 + (1));
i__15080 = G__15102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15081),tiltontec$tag$html$to_attrs_$_iter__15078(cljs.core.chunk_rest(s__15079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15081),null);
}
} else {
var vec__15085 = cljs.core.first(s__15079__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15085,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hidden,cljs.core.cst$kw$checked,cljs.core.cst$kw$disabled,cljs.core.cst$kw$autofocus], null)))?(cljs.core.truth_(v)?cljs.core.name(k):""):cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a='~a'",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tiltontec.tag.html.true_html(k),v], 0))),tiltontec$tag$html$to_attrs_$_iter__15078(cljs.core.rest(s__15079__$2)));
}
} else {
return null;
}
break;
}
});})(unblank,attr_keys,style_keys))
,null,null));
});})(unblank,attr_keys,style_keys))
;
return iter__7429__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__7429__auto____$1 = ((function (iter__7429__auto__,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__15088(s__15089){
return (new cljs.core.LazySeq(null,((function (iter__7429__auto__,unblank,attr_keys,style_keys){
return (function (){
var s__15089__$1 = s__15089;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15089__$1);
if(temp__4657__auto__){
var s__15089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15089__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__15089__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__15091 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__15090 = (0);
while(true){
if((i__15090 < size__7428__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__15090);
cljs.core.chunk_append(b__15091,(function (){var v = tiltontec.model.core.md_get(me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})());

var G__15103 = (i__15090 + (1));
i__15090 = G__15103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15091),tiltontec$tag$html$to_attrs_$_iter__15088(cljs.core.chunk_rest(s__15089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15091),null);
}
} else {
var k = cljs.core.first(s__15089__$2);
return cljs.core.cons((function (){var v = tiltontec.model.core.md_get(me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})(),tiltontec$tag$html$to_attrs_$_iter__15088(cljs.core.rest(s__15089__$2)));
}
} else {
return null;
}
break;
}
});})(iter__7429__auto__,unblank,attr_keys,style_keys))
,null,null));
});})(iter__7429__auto__,unblank,attr_keys,style_keys))
;
return iter__7429__auto____$1(attr_keys);
})()));
})());
var css = clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",(function (){var iter__7429__auto__ = ((function (ga,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__15092(s__15093){
return (new cljs.core.LazySeq(null,((function (ga,unblank,attr_keys,style_keys){
return (function (){
var s__15093__$1 = s__15093;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15093__$1);
if(temp__4657__auto__){
var s__15093__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15093__$2)){
var c__7427__auto__ = cljs.core.chunk_first(s__15093__$2);
var size__7428__auto__ = cljs.core.count(c__7427__auto__);
var b__15095 = cljs.core.chunk_buffer(size__7428__auto__);
if((function (){var i__15094 = (0);
while(true){
if((i__15094 < size__7428__auto__)){
var vec__15096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7427__auto__,i__15094);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15096,(1),null);
cljs.core.chunk_append(b__15095,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),v], 0)));

var G__15104 = (i__15094 + (1));
i__15094 = G__15104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15095),tiltontec$tag$html$to_attrs_$_iter__15092(cljs.core.chunk_rest(s__15093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15095),null);
}
} else {
var vec__15099 = cljs.core.first(s__15093__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15099,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15099,(1),null);
return cljs.core.cons(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k),v], 0)),tiltontec$tag$html$to_attrs_$_iter__15092(cljs.core.rest(s__15093__$2)));
}
} else {
return null;
}
break;
}
});})(ga,unblank,attr_keys,style_keys))
,null,null));
});})(ga,unblank,attr_keys,style_keys))
;
return iter__7429__auto__(cljs.core.select_keys(cljs.core.deref(me),style_keys));
})());
var fa = cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~@[~a~]~@[ style='~a'~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unblank(ga),unblank(css)], 0));
return fa;
});
tiltontec.tag.html.tag_dom = (function tiltontec$tag$html$tag_dom(me){
var id = tiltontec.model.core.md_get(me,cljs.core.cst$kw$id);
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6640__auto__ = tiltontec.model.core.md_get(me,cljs.core.cst$kw$dom_DASH_cache);
if(cljs.core.truth_(or__6640__auto__)){
return or__6640__auto__;
} else {
var temp__4655__auto__ = document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var dom = temp__4655__auto__;
return tiltontec.model.core.backdoor_reset_BANG_(me,cljs.core.cst$kw$dom_DASH_cache,dom);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$no_DASH_element,id,cljs.core.cst$kw$found], 0));
}
}
});
tiltontec.tag.html.tag = (function tiltontec$tag$html$tag(me){
return tiltontec.model.core.md_get(me,cljs.core.cst$kw$tag);
});
tiltontec.cell.evaluate.not_to_be.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (me){
var seq__15105_15109 = cljs.core.seq(cljs.core.cst$kw$kids.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(me)));
var chunk__15106_15110 = null;
var count__15107_15111 = (0);
var i__15108_15112 = (0);
while(true){
if((i__15108_15112 < count__15107_15111)){
var k_15113 = chunk__15106_15110.cljs$core$IIndexed$_nth$arity$2(null,i__15108_15112);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_15113))){
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_15113) : tiltontec.cell.evaluate.not_to_be.call(null,k_15113));
} else {
}

var G__15114 = seq__15105_15109;
var G__15115 = chunk__15106_15110;
var G__15116 = count__15107_15111;
var G__15117 = (i__15108_15112 + (1));
seq__15105_15109 = G__15114;
chunk__15106_15110 = G__15115;
count__15107_15111 = G__15116;
i__15108_15112 = G__15117;
continue;
} else {
var temp__4657__auto___15118 = cljs.core.seq(seq__15105_15109);
if(temp__4657__auto___15118){
var seq__15105_15119__$1 = temp__4657__auto___15118;
if(cljs.core.chunked_seq_QMARK_(seq__15105_15119__$1)){
var c__7460__auto___15120 = cljs.core.chunk_first(seq__15105_15119__$1);
var G__15121 = cljs.core.chunk_rest(seq__15105_15119__$1);
var G__15122 = c__7460__auto___15120;
var G__15123 = cljs.core.count(c__7460__auto___15120);
var G__15124 = (0);
seq__15105_15109 = G__15121;
chunk__15106_15110 = G__15122;
count__15107_15111 = G__15123;
i__15108_15112 = G__15124;
continue;
} else {
var k_15125 = cljs.core.first(seq__15105_15119__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_(k_15125))){
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(k_15125) : tiltontec.cell.evaluate.not_to_be.call(null,k_15125));
} else {
}

var G__15126 = cljs.core.next(seq__15105_15119__$1);
var G__15127 = null;
var G__15128 = (0);
var G__15129 = (0);
seq__15105_15109 = G__15126;
chunk__15106_15110 = G__15127;
count__15107_15111 = G__15128;
i__15108_15112 = G__15129;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self(me);
}));
tiltontec.cell.observer.observe.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kids,cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
if(cljs.core.truth_(tiltontec.tag.html.tag_dom(me))){
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$obskids_DASH_me_DASH_notagdom,tiltontec.tag.html.tagfo(me),newv], 0));
}

if(cljs.core.truth_(tiltontec.tag.html.tag_dom(me))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No tag-dom in kids observer"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.tag.html.tagfo(me))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(tag-dom me)")].join('')));
}

if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.tag.html.tag_dom(me).tagName]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LABEL"], null)))){
return tiltontec.tag.html.tag_dom(me).innerHTML = tiltontec.tag.html.to_html(newv);
} else {
var pdom = tiltontec.tag.html.tag_dom(me);
var frag = document.createDocumentFragment();
var seq__15130_15138 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(oldv),cljs.core.set(newv)));
var chunk__15131_15139 = null;
var count__15132_15140 = (0);
var i__15133_15141 = (0);
while(true){
if((i__15133_15141 < count__15132_15140)){
var oldk_15142 = chunk__15131_15139.cljs$core$IIndexed$_nth$arity$2(null,i__15133_15141);
if(typeof oldk_15142 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_15142) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_15142));
}

var G__15143 = seq__15130_15138;
var G__15144 = chunk__15131_15139;
var G__15145 = count__15132_15140;
var G__15146 = (i__15133_15141 + (1));
seq__15130_15138 = G__15143;
chunk__15131_15139 = G__15144;
count__15132_15140 = G__15145;
i__15133_15141 = G__15146;
continue;
} else {
var temp__4657__auto___15147 = cljs.core.seq(seq__15130_15138);
if(temp__4657__auto___15147){
var seq__15130_15148__$1 = temp__4657__auto___15147;
if(cljs.core.chunked_seq_QMARK_(seq__15130_15148__$1)){
var c__7460__auto___15149 = cljs.core.chunk_first(seq__15130_15148__$1);
var G__15150 = cljs.core.chunk_rest(seq__15130_15148__$1);
var G__15151 = c__7460__auto___15149;
var G__15152 = cljs.core.count(c__7460__auto___15149);
var G__15153 = (0);
seq__15130_15138 = G__15150;
chunk__15131_15139 = G__15151;
count__15132_15140 = G__15152;
i__15133_15141 = G__15153;
continue;
} else {
var oldk_15154 = cljs.core.first(seq__15130_15148__$1);
if(typeof oldk_15154 === 'string'){
} else {
(tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1 ? tiltontec.cell.evaluate.not_to_be.cljs$core$IFn$_invoke$arity$1(oldk_15154) : tiltontec.cell.evaluate.not_to_be.call(null,oldk_15154));
}

var G__15155 = cljs.core.next(seq__15130_15148__$1);
var G__15156 = null;
var G__15157 = (0);
var G__15158 = (0);
seq__15130_15138 = G__15155;
chunk__15131_15139 = G__15156;
count__15132_15140 = G__15157;
i__15133_15141 = G__15158;
continue;
}
} else {
}
}
break;
}

var seq__15134_15159 = cljs.core.seq(newv);
var chunk__15135_15160 = null;
var count__15136_15161 = (0);
var i__15137_15162 = (0);
while(true){
if((i__15137_15162 < count__15136_15161)){
var newk_15163 = chunk__15135_15160.cljs$core$IIndexed$_nth$arity$2(null,i__15137_15162);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_15163]),oldv))){
frag.appendChild(pdom.removeChild(tiltontec.tag.html.tag_dom(newk_15163)));
} else {
var incubator_15164 = document.createElement("div");
incubator_15164.innerHTML = tiltontec.tag.html.to_html(newk_15163);

tiltontec.model.core.backdoor_reset_BANG_(newk_15163,cljs.core.cst$kw$dom_DASH_cache,incubator_15164.firstChild);

var new_dom_15165 = incubator_15164.removeChild(incubator_15164.firstChild);
frag.appendChild(new_dom_15165);
}

var G__15166 = seq__15134_15159;
var G__15167 = chunk__15135_15160;
var G__15168 = count__15136_15161;
var G__15169 = (i__15137_15162 + (1));
seq__15134_15159 = G__15166;
chunk__15135_15160 = G__15167;
count__15136_15161 = G__15168;
i__15137_15162 = G__15169;
continue;
} else {
var temp__4657__auto___15170 = cljs.core.seq(seq__15134_15159);
if(temp__4657__auto___15170){
var seq__15134_15171__$1 = temp__4657__auto___15170;
if(cljs.core.chunked_seq_QMARK_(seq__15134_15171__$1)){
var c__7460__auto___15172 = cljs.core.chunk_first(seq__15134_15171__$1);
var G__15173 = cljs.core.chunk_rest(seq__15134_15171__$1);
var G__15174 = c__7460__auto___15172;
var G__15175 = cljs.core.count(c__7460__auto___15172);
var G__15176 = (0);
seq__15134_15159 = G__15173;
chunk__15135_15160 = G__15174;
count__15136_15161 = G__15175;
i__15137_15162 = G__15176;
continue;
} else {
var newk_15177 = cljs.core.first(seq__15134_15171__$1);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([newk_15177]),oldv))){
frag.appendChild(pdom.removeChild(tiltontec.tag.html.tag_dom(newk_15177)));
} else {
var incubator_15178 = document.createElement("div");
incubator_15178.innerHTML = tiltontec.tag.html.to_html(newk_15177);

tiltontec.model.core.backdoor_reset_BANG_(newk_15177,cljs.core.cst$kw$dom_DASH_cache,incubator_15178.firstChild);

var new_dom_15179 = incubator_15178.removeChild(incubator_15178.firstChild);
frag.appendChild(new_dom_15179);
}

var G__15180 = cljs.core.next(seq__15134_15171__$1);
var G__15181 = null;
var G__15182 = (0);
var G__15183 = (0);
seq__15134_15159 = G__15180;
chunk__15135_15160 = G__15181;
count__15136_15161 = G__15182;
i__15137_15162 = G__15183;
continue;
}
} else {
}
}
break;
}

pdom.innerHTML = null;

return pdom.appendChild(frag);

}
} else {
return null;
}
}));
tiltontec.tag.html._PLUS_global_attr_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$checked,cljs.core.cst$kw$hidden], null));
tiltontec.tag.html._PLUS_inline_css_PLUS_ = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display], null));
tiltontec.cell.observer.observe_by_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tiltontec$tag$html_SLASH_tag], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,tiltontec.cell.base.unbound)){
var temp__4657__auto__ = tiltontec.tag.html.tag_dom(me);
if(cljs.core.truth_(temp__4657__auto__)){
var dom = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot,cljs.core.cst$kw$content)){
return dom.innerHTML = newv;
} else {
if(cljs.core.truth_((tiltontec.tag.html._PLUS_global_attr_PLUS_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.tag.html._PLUS_global_attr_PLUS_.cljs$core$IFn$_invoke$arity$1(slot) : tiltontec.tag.html._PLUS_global_attr_PLUS_.call(null,slot)))){
var G__15184 = slot;
var G__15184__$1 = (((G__15184 instanceof cljs.core.Keyword))?G__15184.fqn:null);
switch (G__15184__$1) {
case "hidden":
return dom.hidden = newv;

break;
case "class":
return dom.className = newv;

break;
case "checked":
return dom.checked = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15184__$1)].join('')));

}
} else {
if(cljs.core.truth_((tiltontec.tag.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1 ? tiltontec.tag.html._PLUS_inline_css_PLUS_.cljs$core$IFn$_invoke$arity$1(slot) : tiltontec.tag.html._PLUS_inline_css_PLUS_.call(null,slot)))){
var G__15185 = slot;
var G__15185__$1 = (((G__15185 instanceof cljs.core.Keyword))?G__15185.fqn:null);
switch (G__15185__$1) {
case "display":
return dom.style.display = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15185__$1)].join('')));

}
} else {
return null;
}
}
}
} else {
return null;
}
} else {
return null;
}
}));
tiltontec.tag.html.io_upsert = (function tiltontec$tag$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.tag.html.io_read = (function tiltontec$tag$html$io_read(key){
return window.localStorage.getItem(key);
});
tiltontec.tag.html.io_delete = (function tiltontec$tag$html$io_delete(key){
return window.localStorage.removeItem(key);
});
tiltontec.tag.html.io_clear_storage = (function tiltontec$tag$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.tag.html.io_all_keys = (function tiltontec$tag$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.tag.html.io_find = (function tiltontec$tag$html$io_find(key_prefix){
var keys = tiltontec.tag.html.io_all_keys();
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(keys)){
var G__15188 = cljs.core.rest(keys);
var G__15189 = ((clojure.string.starts_with_QMARK_(cljs.core.first(keys),key_prefix))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,cljs.core.first(keys)):found);
keys = G__15188;
found = G__15189;
continue;
} else {
return found;
}
break;
}
});
tiltontec.tag.html.io_truncate = (function tiltontec$tag$html$io_truncate(key_prefix){
var seq__15190 = cljs.core.seq(tiltontec.tag.html.io_find(key_prefix));
var chunk__15191 = null;
var count__15192 = (0);
var i__15193 = (0);
while(true){
if((i__15193 < count__15192)){
var key = chunk__15191.cljs$core$IIndexed$_nth$arity$2(null,i__15193);
tiltontec.tag.html.io_delete(key);

var G__15194 = seq__15190;
var G__15195 = chunk__15191;
var G__15196 = count__15192;
var G__15197 = (i__15193 + (1));
seq__15190 = G__15194;
chunk__15191 = G__15195;
count__15192 = G__15196;
i__15193 = G__15197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15190);
if(temp__4657__auto__){
var seq__15190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15190__$1)){
var c__7460__auto__ = cljs.core.chunk_first(seq__15190__$1);
var G__15198 = cljs.core.chunk_rest(seq__15190__$1);
var G__15199 = c__7460__auto__;
var G__15200 = cljs.core.count(c__7460__auto__);
var G__15201 = (0);
seq__15190 = G__15198;
chunk__15191 = G__15199;
count__15192 = G__15200;
i__15193 = G__15201;
continue;
} else {
var key = cljs.core.first(seq__15190__$1);
tiltontec.tag.html.io_delete(key);

var G__15202 = cljs.core.next(seq__15190__$1);
var G__15203 = null;
var G__15204 = (0);
var G__15205 = (0);
seq__15190 = G__15202;
chunk__15191 = G__15203;
count__15192 = G__15204;
i__15193 = G__15205;
continue;
}
} else {
return null;
}
}
break;
}
});
