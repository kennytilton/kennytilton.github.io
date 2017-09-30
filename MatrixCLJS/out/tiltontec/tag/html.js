// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.tag.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.tag.html.tagfo = (function tiltontec$tag$html$tagfo(me){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.tag.html.mxa_find_tag = (function tiltontec$tag$html$mxa_find_tag(me,tag){
return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visited)));
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

return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,type,tiltontec.cell.base.ia_type.call(null,visited));
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
if(cljs.core.truth_(tiltontec.tag.html.dom_has_class.call(null,pn,class$))){
return pn;
} else {
return tiltontec.tag.html.dom_ancestor_by_class.call(null,pn,class$);
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
if(cljs.core._EQ_.call(null,pn.tagName,clojure.string.upper_case.call(null,tag))){
return pn;
} else {
return tiltontec.tag.html.dom_ancestor_by_tag.call(null,pn,tag);
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
if(cljs.core.coll_QMARK_.call(null,me)){
var b$ = cljs.core.map.call(null,tiltontec.tag.html.to_html,me);
return cljs.core.apply.call(null,cljs.core.str,b$);
} else {
var h = cljs.pprint.cl_format.call(null,null,"<~a ~a>~@[~a~]~{~a~}</~0@*~a>",new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),tiltontec.tag.html.to_attrs.call(null,me),tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.map.call(null,tiltontec.tag.html.to_html,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771))));
return h;

}
}
});
tiltontec.tag.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-type","input-type",856973840),"type"], null);
tiltontec.tag.html.true_html = (function tiltontec$tag$html$true_html(keyword){
var or__6638__auto__ = keyword.call(null,tiltontec.tag.html._PLUS_true_html_PLUS_);
if(cljs.core.truth_(or__6638__auto__)){
return or__6638__auto__;
} else {
return cljs.core.name.call(null,keyword);
}
});
tiltontec.tag.html.to_attrs = (function tiltontec$tag$html$to_attrs(me){
var unblank = (function (s){
if((cljs.core.count.call(null,s) > (0))){
return s;
} else {
return null;
}
});
var attr_keys = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"onclick","onclick",1297553739),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),new cljs.core.Keyword(null,"onblur","onblur",689939618),new cljs.core.Keyword(null,"onmouseover","onmouseover",-455386327),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
var style_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null);
var ga = clojure.string.join.call(null," ",(function (){var iter__7427__auto__ = ((function (unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__10889(s__10890){
return (new cljs.core.LazySeq(null,((function (unblank,attr_keys,style_keys){
return (function (){
var s__10890__$1 = s__10890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10890__$1);
if(temp__4657__auto__){
var s__10890__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10890__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__10890__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__10892 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__10891 = (0);
while(true){
if((i__10891 < size__7426__auto__)){
var vec__10893 = cljs.core._nth.call(null,c__7425__auto__,i__10891);
var k = cljs.core.nth.call(null,vec__10893,(0),null);
var v = cljs.core.nth.call(null,vec__10893,(1),null);
cljs.core.chunk_append.call(null,b__10892,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732)], null)))?(cljs.core.truth_(v)?cljs.core.name.call(null,k):""):cljs.pprint.cl_format.call(null,null,"~a='~a'",tiltontec.tag.html.true_html.call(null,k),v)));

var G__10913 = (i__10891 + (1));
i__10891 = G__10913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10892),tiltontec$tag$html$to_attrs_$_iter__10889.call(null,cljs.core.chunk_rest.call(null,s__10890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10892),null);
}
} else {
var vec__10896 = cljs.core.first.call(null,s__10890__$2);
var k = cljs.core.nth.call(null,vec__10896,(0),null);
var v = cljs.core.nth.call(null,vec__10896,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732)], null)))?(cljs.core.truth_(v)?cljs.core.name.call(null,k):""):cljs.pprint.cl_format.call(null,null,"~a='~a'",tiltontec.tag.html.true_html.call(null,k),v)),tiltontec$tag$html$to_attrs_$_iter__10889.call(null,cljs.core.rest.call(null,s__10890__$2)));
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
return iter__7427__auto__.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7427__auto____$1 = ((function (iter__7427__auto__,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__10899(s__10900){
return (new cljs.core.LazySeq(null,((function (iter__7427__auto__,unblank,attr_keys,style_keys){
return (function (){
var s__10900__$1 = s__10900;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10900__$1);
if(temp__4657__auto__){
var s__10900__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10900__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__10900__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__10902 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__10901 = (0);
while(true){
if((i__10901 < size__7426__auto__)){
var k = cljs.core._nth.call(null,c__7425__auto__,i__10901);
cljs.core.chunk_append.call(null,b__10902,(function (){var v = tiltontec.model.core.md_get.call(null,me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})());

var G__10914 = (i__10901 + (1));
i__10901 = G__10914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10902),tiltontec$tag$html$to_attrs_$_iter__10899.call(null,cljs.core.chunk_rest.call(null,s__10900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10902),null);
}
} else {
var k = cljs.core.first.call(null,s__10900__$2);
return cljs.core.cons.call(null,(function (){var v = tiltontec.model.core.md_get.call(null,me,k);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})(),tiltontec$tag$html$to_attrs_$_iter__10899.call(null,cljs.core.rest.call(null,s__10900__$2)));
}
} else {
return null;
}
break;
}
});})(iter__7427__auto__,unblank,attr_keys,style_keys))
,null,null));
});})(iter__7427__auto__,unblank,attr_keys,style_keys))
;
return iter__7427__auto____$1.call(null,attr_keys);
})()));
})());
var css = clojure.string.join.call(null,";",(function (){var iter__7427__auto__ = ((function (ga,unblank,attr_keys,style_keys){
return (function tiltontec$tag$html$to_attrs_$_iter__10903(s__10904){
return (new cljs.core.LazySeq(null,((function (ga,unblank,attr_keys,style_keys){
return (function (){
var s__10904__$1 = s__10904;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10904__$1);
if(temp__4657__auto__){
var s__10904__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10904__$2)){
var c__7425__auto__ = cljs.core.chunk_first.call(null,s__10904__$2);
var size__7426__auto__ = cljs.core.count.call(null,c__7425__auto__);
var b__10906 = cljs.core.chunk_buffer.call(null,size__7426__auto__);
if((function (){var i__10905 = (0);
while(true){
if((i__10905 < size__7426__auto__)){
var vec__10907 = cljs.core._nth.call(null,c__7425__auto__,i__10905);
var k = cljs.core.nth.call(null,vec__10907,(0),null);
var v = cljs.core.nth.call(null,vec__10907,(1),null);
cljs.core.chunk_append.call(null,b__10906,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v));

var G__10915 = (i__10905 + (1));
i__10905 = G__10915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10906),tiltontec$tag$html$to_attrs_$_iter__10903.call(null,cljs.core.chunk_rest.call(null,s__10904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10906),null);
}
} else {
var vec__10910 = cljs.core.first.call(null,s__10904__$2);
var k = cljs.core.nth.call(null,vec__10910,(0),null);
var v = cljs.core.nth.call(null,vec__10910,(1),null);
return cljs.core.cons.call(null,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v),tiltontec$tag$html$to_attrs_$_iter__10903.call(null,cljs.core.rest.call(null,s__10904__$2)));
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
return iter__7427__auto__.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),style_keys));
})());
var fa = cljs.pprint.cl_format.call(null,null,"~@[~a~]~@[ style='~a'~]",unblank.call(null,ga),unblank.call(null,css));
return fa;
});
tiltontec.tag.html.tag_dom = (function tiltontec$tag$html$tag_dom(me){
var id = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6638__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__6638__auto__)){
return or__6638__auto__;
} else {
var temp__4655__auto__ = document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var dom = temp__4655__auto__;
return tiltontec.model.core.backdoor_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),dom);
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"no-element","no-element",470772656),id,new cljs.core.Keyword(null,"found","found",-584700170));
}
}
});
tiltontec.tag.html.tag = (function tiltontec$tag$html$tag(me){
return tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (me){
var seq__10916_10920 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__10917_10921 = null;
var count__10918_10922 = (0);
var i__10919_10923 = (0);
while(true){
if((i__10919_10923 < count__10918_10922)){
var k_10924 = cljs.core._nth.call(null,chunk__10917_10921,i__10919_10923);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_10924))){
tiltontec.cell.evaluate.not_to_be.call(null,k_10924);
} else {
}

var G__10925 = seq__10916_10920;
var G__10926 = chunk__10917_10921;
var G__10927 = count__10918_10922;
var G__10928 = (i__10919_10923 + (1));
seq__10916_10920 = G__10925;
chunk__10917_10921 = G__10926;
count__10918_10922 = G__10927;
i__10919_10923 = G__10928;
continue;
} else {
var temp__4657__auto___10929 = cljs.core.seq.call(null,seq__10916_10920);
if(temp__4657__auto___10929){
var seq__10916_10930__$1 = temp__4657__auto___10929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10916_10930__$1)){
var c__7458__auto___10931 = cljs.core.chunk_first.call(null,seq__10916_10930__$1);
var G__10932 = cljs.core.chunk_rest.call(null,seq__10916_10930__$1);
var G__10933 = c__7458__auto___10931;
var G__10934 = cljs.core.count.call(null,c__7458__auto___10931);
var G__10935 = (0);
seq__10916_10920 = G__10932;
chunk__10917_10921 = G__10933;
count__10918_10922 = G__10934;
i__10919_10923 = G__10935;
continue;
} else {
var k_10936 = cljs.core.first.call(null,seq__10916_10930__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_10936))){
tiltontec.cell.evaluate.not_to_be.call(null,k_10936);
} else {
}

var G__10937 = cljs.core.next.call(null,seq__10916_10930__$1);
var G__10938 = null;
var G__10939 = (0);
var G__10940 = (0);
seq__10916_10920 = G__10937;
chunk__10917_10921 = G__10938;
count__10918_10922 = G__10939;
i__10919_10923 = G__10940;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
if(cljs.core.truth_(tiltontec.tag.html.tag_dom.call(null,me))){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"obskids-me-notagdom","obskids-me-notagdom",500921965),tiltontec.tag.html.tagfo.call(null,me),newv);
}

if(cljs.core.truth_(tiltontec.tag.html.tag_dom.call(null,me))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No tag-dom in kids observer"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.tag.html.tagfo.call(null,me))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(tag-dom me)")].join('')));
}

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.tag.html.tag_dom.call(null,me).tagName]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LABEL"], null)))){
return tiltontec.tag.html.tag_dom.call(null,me).innerHTML = tiltontec.tag.html.to_html.call(null,newv);
} else {
var pdom = tiltontec.tag.html.tag_dom.call(null,me);
var frag = document.createDocumentFragment();
var seq__10941_10949 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv)));
var chunk__10942_10950 = null;
var count__10943_10951 = (0);
var i__10944_10952 = (0);
while(true){
if((i__10944_10952 < count__10943_10951)){
var oldk_10953 = cljs.core._nth.call(null,chunk__10942_10950,i__10944_10952);
if(typeof oldk_10953 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_10953);
}

var G__10954 = seq__10941_10949;
var G__10955 = chunk__10942_10950;
var G__10956 = count__10943_10951;
var G__10957 = (i__10944_10952 + (1));
seq__10941_10949 = G__10954;
chunk__10942_10950 = G__10955;
count__10943_10951 = G__10956;
i__10944_10952 = G__10957;
continue;
} else {
var temp__4657__auto___10958 = cljs.core.seq.call(null,seq__10941_10949);
if(temp__4657__auto___10958){
var seq__10941_10959__$1 = temp__4657__auto___10958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10941_10959__$1)){
var c__7458__auto___10960 = cljs.core.chunk_first.call(null,seq__10941_10959__$1);
var G__10961 = cljs.core.chunk_rest.call(null,seq__10941_10959__$1);
var G__10962 = c__7458__auto___10960;
var G__10963 = cljs.core.count.call(null,c__7458__auto___10960);
var G__10964 = (0);
seq__10941_10949 = G__10961;
chunk__10942_10950 = G__10962;
count__10943_10951 = G__10963;
i__10944_10952 = G__10964;
continue;
} else {
var oldk_10965 = cljs.core.first.call(null,seq__10941_10959__$1);
if(typeof oldk_10965 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_10965);
}

var G__10966 = cljs.core.next.call(null,seq__10941_10959__$1);
var G__10967 = null;
var G__10968 = (0);
var G__10969 = (0);
seq__10941_10949 = G__10966;
chunk__10942_10950 = G__10967;
count__10943_10951 = G__10968;
i__10944_10952 = G__10969;
continue;
}
} else {
}
}
break;
}

var seq__10945_10970 = cljs.core.seq.call(null,newv);
var chunk__10946_10971 = null;
var count__10947_10972 = (0);
var i__10948_10973 = (0);
while(true){
if((i__10948_10973 < count__10947_10972)){
var newk_10974 = cljs.core._nth.call(null,chunk__10946_10971,i__10948_10973);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_10974]),oldv))){
frag.appendChild(pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_10974)));
} else {
var incubator_10975 = document.createElement("div");
incubator_10975.innerHTML = tiltontec.tag.html.to_html.call(null,newk_10974);

tiltontec.model.core.backdoor_reset_BANG_.call(null,newk_10974,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),incubator_10975.firstChild);

var new_dom_10976 = incubator_10975.removeChild(incubator_10975.firstChild);
frag.appendChild(new_dom_10976);
}

var G__10977 = seq__10945_10970;
var G__10978 = chunk__10946_10971;
var G__10979 = count__10947_10972;
var G__10980 = (i__10948_10973 + (1));
seq__10945_10970 = G__10977;
chunk__10946_10971 = G__10978;
count__10947_10972 = G__10979;
i__10948_10973 = G__10980;
continue;
} else {
var temp__4657__auto___10981 = cljs.core.seq.call(null,seq__10945_10970);
if(temp__4657__auto___10981){
var seq__10945_10982__$1 = temp__4657__auto___10981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10945_10982__$1)){
var c__7458__auto___10983 = cljs.core.chunk_first.call(null,seq__10945_10982__$1);
var G__10984 = cljs.core.chunk_rest.call(null,seq__10945_10982__$1);
var G__10985 = c__7458__auto___10983;
var G__10986 = cljs.core.count.call(null,c__7458__auto___10983);
var G__10987 = (0);
seq__10945_10970 = G__10984;
chunk__10946_10971 = G__10985;
count__10947_10972 = G__10986;
i__10948_10973 = G__10987;
continue;
} else {
var newk_10988 = cljs.core.first.call(null,seq__10945_10982__$1);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_10988]),oldv))){
frag.appendChild(pdom.removeChild(tiltontec.tag.html.tag_dom.call(null,newk_10988)));
} else {
var incubator_10989 = document.createElement("div");
incubator_10989.innerHTML = tiltontec.tag.html.to_html.call(null,newk_10988);

tiltontec.model.core.backdoor_reset_BANG_.call(null,newk_10988,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),incubator_10989.firstChild);

var new_dom_10990 = incubator_10989.removeChild(incubator_10989.firstChild);
frag.appendChild(new_dom_10990);
}

var G__10991 = cljs.core.next.call(null,seq__10945_10982__$1);
var G__10992 = null;
var G__10993 = (0);
var G__10994 = (0);
seq__10945_10970 = G__10991;
chunk__10946_10971 = G__10992;
count__10947_10972 = G__10993;
i__10948_10973 = G__10994;
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
tiltontec.tag.html._PLUS_global_attr_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null));
tiltontec.tag.html._PLUS_inline_css_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.tag.html","tag","tiltontec.tag.html/tag",1337322312)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var temp__4657__auto__ = tiltontec.tag.html.tag_dom.call(null,me);
if(cljs.core.truth_(temp__4657__auto__)){
var dom = temp__4657__auto__;
if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"content","content",15833224))){
return dom.innerHTML = newv;
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_global_attr_PLUS_.call(null,slot))){
var G__10995 = slot;
var G__10995__$1 = (((G__10995 instanceof cljs.core.Keyword))?G__10995.fqn:null);
switch (G__10995__$1) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10995__$1)].join('')));

}
} else {
if(cljs.core.truth_(tiltontec.tag.html._PLUS_inline_css_PLUS_.call(null,slot))){
var G__10996 = slot;
var G__10996__$1 = (((G__10996 instanceof cljs.core.Keyword))?G__10996.fqn:null);
switch (G__10996__$1) {
case "display":
return dom.style.display = newv;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10996__$1)].join('')));

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
var keys = tiltontec.tag.html.io_all_keys.call(null);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
var G__10999 = cljs.core.rest.call(null,keys);
var G__11000 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__10999;
found = G__11000;
continue;
} else {
return found;
}
break;
}
});
tiltontec.tag.html.io_truncate = (function tiltontec$tag$html$io_truncate(key_prefix){
var seq__11001 = cljs.core.seq.call(null,tiltontec.tag.html.io_find.call(null,key_prefix));
var chunk__11002 = null;
var count__11003 = (0);
var i__11004 = (0);
while(true){
if((i__11004 < count__11003)){
var key = cljs.core._nth.call(null,chunk__11002,i__11004);
tiltontec.tag.html.io_delete.call(null,key);

var G__11005 = seq__11001;
var G__11006 = chunk__11002;
var G__11007 = count__11003;
var G__11008 = (i__11004 + (1));
seq__11001 = G__11005;
chunk__11002 = G__11006;
count__11003 = G__11007;
i__11004 = G__11008;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11001);
if(temp__4657__auto__){
var seq__11001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11001__$1)){
var c__7458__auto__ = cljs.core.chunk_first.call(null,seq__11001__$1);
var G__11009 = cljs.core.chunk_rest.call(null,seq__11001__$1);
var G__11010 = c__7458__auto__;
var G__11011 = cljs.core.count.call(null,c__7458__auto__);
var G__11012 = (0);
seq__11001 = G__11009;
chunk__11002 = G__11010;
count__11003 = G__11011;
i__11004 = G__11012;
continue;
} else {
var key = cljs.core.first.call(null,seq__11001__$1);
tiltontec.tag.html.io_delete.call(null,key);

var G__11013 = cljs.core.next.call(null,seq__11001__$1);
var G__11014 = null;
var G__11015 = (0);
var G__11016 = (0);
seq__11001 = G__11013;
chunk__11002 = G__11014;
count__11003 = G__11015;
i__11004 = G__11016;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=html.js.map