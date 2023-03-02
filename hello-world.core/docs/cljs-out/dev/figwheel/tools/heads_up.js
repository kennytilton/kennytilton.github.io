// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.tools.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.Promise');
goog.require('goog.object');
goog.scope(function(){
figwheel.tools.heads_up.goog$module$goog$object = goog.module.get('goog.object');
});

figwheel.tools.heads_up.node = (function figwheel$tools$heads_up$node(var_args){
var args__4870__auto__ = [];
var len__4864__auto___12111 = arguments.length;
var i__4865__auto___12112 = (0);
while(true){
if((i__4865__auto___12112 < len__4864__auto___12111)){
args__4870__auto__.push((arguments[i__4865__auto___12112]));

var G__12113 = (i__4865__auto___12112 + (1));
i__4865__auto___12112 = G__12113;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return figwheel.tools.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(figwheel.tools.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12103_12114 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12104_12115 = null;
var count__12105_12116 = (0);
var i__12106_12117 = (0);
while(true){
if((i__12106_12117 < count__12105_12116)){
var k_12118 = cljs.core._nth.call(null,chunk__12104_12115,i__12106_12117);
e.setAttribute(cljs.core.name.call(null,k_12118),cljs.core.get.call(null,attrs,k_12118));


var G__12119 = seq__12103_12114;
var G__12120 = chunk__12104_12115;
var G__12121 = count__12105_12116;
var G__12122 = (i__12106_12117 + (1));
seq__12103_12114 = G__12119;
chunk__12104_12115 = G__12120;
count__12105_12116 = G__12121;
i__12106_12117 = G__12122;
continue;
} else {
var temp__5720__auto___12123 = cljs.core.seq.call(null,seq__12103_12114);
if(temp__5720__auto___12123){
var seq__12103_12124__$1 = temp__5720__auto___12123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12103_12124__$1)){
var c__4679__auto___12125 = cljs.core.chunk_first.call(null,seq__12103_12124__$1);
var G__12126 = cljs.core.chunk_rest.call(null,seq__12103_12124__$1);
var G__12127 = c__4679__auto___12125;
var G__12128 = cljs.core.count.call(null,c__4679__auto___12125);
var G__12129 = (0);
seq__12103_12114 = G__12126;
chunk__12104_12115 = G__12127;
count__12105_12116 = G__12128;
i__12106_12117 = G__12129;
continue;
} else {
var k_12130 = cljs.core.first.call(null,seq__12103_12124__$1);
e.setAttribute(cljs.core.name.call(null,k_12130),cljs.core.get.call(null,attrs,k_12130));


var G__12131 = cljs.core.next.call(null,seq__12103_12124__$1);
var G__12132 = null;
var G__12133 = (0);
var G__12134 = (0);
seq__12103_12114 = G__12131;
chunk__12104_12115 = G__12132;
count__12105_12116 = G__12133;
i__12106_12117 = G__12134;
continue;
}
} else {
}
}
break;
}

var seq__12107_12135 = cljs.core.seq.call(null,children);
var chunk__12108_12136 = null;
var count__12109_12137 = (0);
var i__12110_12138 = (0);
while(true){
if((i__12110_12138 < count__12109_12137)){
var ch_12139 = cljs.core._nth.call(null,chunk__12108_12136,i__12110_12138);
e.appendChild(ch_12139);


var G__12140 = seq__12107_12135;
var G__12141 = chunk__12108_12136;
var G__12142 = count__12109_12137;
var G__12143 = (i__12110_12138 + (1));
seq__12107_12135 = G__12140;
chunk__12108_12136 = G__12141;
count__12109_12137 = G__12142;
i__12110_12138 = G__12143;
continue;
} else {
var temp__5720__auto___12144 = cljs.core.seq.call(null,seq__12107_12135);
if(temp__5720__auto___12144){
var seq__12107_12145__$1 = temp__5720__auto___12144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12107_12145__$1)){
var c__4679__auto___12146 = cljs.core.chunk_first.call(null,seq__12107_12145__$1);
var G__12147 = cljs.core.chunk_rest.call(null,seq__12107_12145__$1);
var G__12148 = c__4679__auto___12146;
var G__12149 = cljs.core.count.call(null,c__4679__auto___12146);
var G__12150 = (0);
seq__12107_12135 = G__12147;
chunk__12108_12136 = G__12148;
count__12109_12137 = G__12149;
i__12110_12138 = G__12150;
continue;
} else {
var ch_12151 = cljs.core.first.call(null,seq__12107_12145__$1);
e.appendChild(ch_12151);


var G__12152 = cljs.core.next.call(null,seq__12107_12145__$1);
var G__12153 = null;
var G__12154 = (0);
var G__12155 = (0);
seq__12107_12135 = G__12152;
chunk__12108_12136 = G__12153;
count__12109_12137 = G__12154;
i__12110_12138 = G__12155;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.tools.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.tools.heads_up.node.cljs$lang$applyTo = (function (seq12100){
var G__12101 = cljs.core.first.call(null,seq12100);
var seq12100__$1 = cljs.core.next.call(null,seq12100);
var G__12102 = cljs.core.first.call(null,seq12100__$1);
var seq12100__$2 = cljs.core.next.call(null,seq12100__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12101,G__12102,seq12100__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.tools !== 'undefined') && (typeof figwheel.tools.heads_up !== 'undefined') && (typeof figwheel.tools.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.tools.heads_up.heads_up_event_dispatch = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.tools.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return null;
}));
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.tools.heads_up.clear.call(null);
}));
figwheel.tools.heads_up.ancestor_nodes = (function figwheel$tools$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.tools.heads_up.get_dataset = (function figwheel$tools$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.tools.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.tools.heads_up.heads_up_onclick_handler = (function figwheel$tools$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.tools.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.tools.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.tools.heads_up.ensure_container = (function figwheel$tools$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_12156 = figwheel.tools.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_12156.onclick = figwheel.tools.heads_up.heads_up_onclick_handler);

(el_12156.innerHTML = figwheel.tools.heads_up.cljs_logo_svg);

el_12156.appendChild(figwheel.tools.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12156);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.tools.heads_up.set_style_BANG_ = (function figwheel$tools$heads_up$set_style_BANG_(p__12157,st_map){
var map__12158 = p__12157;
var map__12158__$1 = cljs.core.__destructure_map.call(null,map__12158);
var container_el = cljs.core.get.call(null,map__12158__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__12159){
var vec__12160 = p__12159;
var k = cljs.core.nth.call(null,vec__12160,(0),null);
var v = cljs.core.nth.call(null,vec__12160,(1),null);
return figwheel.tools.heads_up.goog$module$goog$object.set.call(null,container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.tools.heads_up.set_content_BANG_ = (function figwheel$tools$heads_up$set_content_BANG_(p__12163,dom_str){
var map__12164 = p__12163;
var map__12164__$1 = cljs.core.__destructure_map.call(null,map__12164);
var c = map__12164__$1;
var content_area_el = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.tools.heads_up.get_content = (function figwheel$tools$heads_up$get_content(p__12165){
var map__12166 = p__12165;
var map__12166__$1 = cljs.core.__destructure_map.call(null,map__12166);
var content_area_el = cljs.core.get.call(null,map__12166__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.tools.heads_up.close_link = (function figwheel$tools$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.tools.heads_up.display_heads_up = (function figwheel$tools$heads_up$display_heads_up(style,msg){
return (new goog.Promise((function (resolve,reject){
var c = figwheel.tools.heads_up.ensure_container.call(null);
figwheel.tools.heads_up.set_style_BANG_.call(null,c,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),"10px",new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"68px",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1.0"], null),style));

figwheel.tools.heads_up.set_content_BANG_.call(null,c,msg);

return setTimeout((function (){
figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null));

return resolve.call(null,true);
}),(300));
})));
});
figwheel.tools.heads_up.heading = (function figwheel$tools$heads_up$heading(var_args){
var G__12168 = arguments.length;
switch (G__12168) {
case 1:
return figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.tools.heads_up.heading.call(null,s,"");
}));

(figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.tools.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.tools.heads_up.file_selector_div = (function figwheel$tools$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.tools.heads_up.format_line = (function figwheel$tools$heads_up$format_line(msg,p__12170){
var map__12171 = p__12170;
var map__12171__$1 = cljs.core.__destructure_map.call(null,map__12171);
var file = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12171__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4253__auto__ = file;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})())){
return figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.tools.heads_up.escape = (function figwheel$tools$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.tools.heads_up.pad_line_number = (function figwheel$tools$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.tools.heads_up.inline_error_line = (function figwheel$tools$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.tools.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.tools.heads_up.format_inline_error_line = (function figwheel$tools$heads_up$format_inline_error_line(p__12172){
var vec__12173 = p__12172;
var typ = cljs.core.nth.call(null,vec__12173,(0),null);
var line_number = cljs.core.nth.call(null,vec__12173,(1),null);
var line = cljs.core.nth.call(null,vec__12173,(2),null);
var pred__12176 = cljs.core._EQ_;
var expr__12177 = typ;
if(cljs.core.truth_(pred__12176.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__12177))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__12176.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__12177))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__12176.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__12177))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.tools.heads_up.pad_line_numbers = (function figwheel$tools$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__12179_SHARP_){
return cljs.core.update_in.call(null,p1__12179_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.tools.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.tools.heads_up.format_inline_error = (function figwheel$tools$heads_up$format_inline_error(inline_error){
if(cljs.core.truth_(cljs.core.not_empty.call(null,inline_error))){
var lines = cljs.core.map.call(null,figwheel.tools.heads_up.format_inline_error_line,figwheel.tools.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
} else {
return null;
}
});
figwheel.tools.heads_up.flatten_exception = (function figwheel$tools$heads_up$flatten_exception(p1__12180_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__12180_SHARP_));
});
figwheel.tools.heads_up.exception__GT_display_data = (function figwheel$tools$heads_up$exception__GT_display_data(p__12182){
var map__12183 = p__12182;
var map__12183__$1 = cljs.core.__destructure_map.call(null,map__12183);
var exception = map__12183__$1;
var tag = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var message = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var type = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var file = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var data = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var error_inline = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
var data_for_display = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs/analysis-error",null,"tools.reader/eof-reader-exception",null,"tools.reader/reader-exception",null], null), null).call(null,tag))?null:data);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(function (){var pred__12184 = cljs.core._EQ_;
var expr__12185 = tag;
if(cljs.core.truth_(pred__12184.call(null,"clj/compiler-exception",expr__12185))){
return "Couldn't load Clojure file";
} else {
if(cljs.core.truth_(pred__12184.call(null,"cljs/missing-required-ns",expr__12185))){
return "Could not Find Namespace";
} else {
if(cljs.core.truth_(pred__12184.call(null,"cljs/analysis-error",expr__12185))){
return "Could not Analyze";
} else {
if(cljs.core.truth_(pred__12184.call(null,"tools.reader/eof-reader-exception",expr__12185))){
return "Could not Read";
} else {
if(cljs.core.truth_(pred__12184.call(null,"tools.reader/reader-exception",expr__12185))){
return "Could not Read";
} else {
if(cljs.core.truth_(pred__12184.call(null,"cljs/general-compile-failure",expr__12185))){
return "Could not Compile";
} else {
return "Compile Exception";
}
}
}
}
}
}
})(),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__12181_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12181_SHARP_),"</div>"].join('');
}),cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12187 = "";
var G__12187__$1 = (cljs.core.truth_(type)?[G__12187,figwheel.tools.heads_up.escape.call(null,type)].join(''):G__12187);
var G__12187__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = type;
if(cljs.core.truth_(and__4251__auto__)){
return message;
} else {
return and__4251__auto__;
}
})())?[G__12187__$1,": "].join(''):G__12187__$1);
if(cljs.core.truth_(message)){
return [G__12187__$2,"<span style=\"font-weight:bold;\">",figwheel.tools.heads_up.escape.call(null,message),"</span>"].join('');
} else {
return G__12187__$2;
}
})(),(cljs.core.truth_((function (){var and__4251__auto__ = (!((cljs.core.count.call(null,error_inline) > (0))));
if(and__4251__auto__){
return data_for_display;
} else {
return and__4251__auto__;
}
})())?["<pre style=\"white-space: pre-wrap\">",goog.string.trimRight((function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12192_12196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12193_12197 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12194_12198 = true;
var _STAR_print_fn_STAR__temp_val__12195_12199 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12194_12198);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12195_12199);

try{cljs.pprint.pprint.call(null,data_for_display);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12193_12197);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12192_12196);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.tools.heads_up.format_inline_error.call(null,error_inline):null)], null))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.tools.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.tools.heads_up.display_exception = (function figwheel$tools$heads_up$display_exception(exception_data){
var map__12200 = figwheel.tools.heads_up.exception__GT_display_data.call(null,exception_data);
var map__12200__$1 = cljs.core.__destructure_map.call(null,map__12200);
var head = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12200__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.tools.heads_up.close_link.call(null),figwheel.tools.heads_up.heading.call(null,head,sub_head),figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.tools.heads_up.warning_data__GT_display_data = (function figwheel$tools$heads_up$warning_data__GT_display_data(p__12202){
var map__12203 = p__12202;
var map__12203__$1 = cljs.core.__destructure_map.call(null,map__12203);
var warning_data = map__12203__$1;
var file = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__12201_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12201_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.tools.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.tools.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.tools.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.tools.heads_up.display_system_warning = (function figwheel$tools$heads_up$display_system_warning(header,msg){
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.tools.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.tools.heads_up.display_warning = (function figwheel$tools$heads_up$display_warning(warning_data){
var map__12204 = figwheel.tools.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__12204__$1 = cljs.core.__destructure_map.call(null,map__12204);
var head = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.tools.heads_up.close_link.call(null),figwheel.tools.heads_up.heading.call(null,head,sub_head),figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.tools.heads_up.format_warning_message = (function figwheel$tools$heads_up$format_warning_message(p__12205){
var map__12206 = p__12205;
var map__12206__$1 = cljs.core.__destructure_map.call(null,map__12206);
var warning_data = map__12206__$1;
var message = cljs.core.get.call(null,map__12206__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__12206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__12207 = message;
var G__12207__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12207)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__12207);
var G__12207__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12207__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__12207__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12207__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__12207__$2;
}
});
figwheel.tools.heads_up.append_warning_message = (function figwheel$tools$heads_up$append_warning_message(p__12208){
var map__12209 = p__12208;
var map__12209__$1 = cljs.core.__destructure_map.call(null,map__12209);
var warning_data = map__12209__$1;
var message = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__12210 = figwheel.tools.heads_up.ensure_container.call(null);
var map__12210__$1 = cljs.core.__destructure_map.call(null,map__12210);
var content_area_el = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.tools.heads_up.format_line.call(null,figwheel.tools.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5720__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5720__auto__)){
var last_child = temp__5720__auto__;
var temp__5718__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5718__auto__)){
var message_count = temp__5718__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.tools.heads_up.timeout_STAR_ = (function figwheel$tools$heads_up$timeout_STAR_(time_ms){
return (new goog.Promise((function (resolve,_){
return setTimeout((function (){
return resolve.call(null,true);
}),time_ms);
})));
});
figwheel.tools.heads_up.clear = (function figwheel$tools$heads_up$clear(){
var c = figwheel.tools.heads_up.ensure_container.call(null);
return (new goog.Promise((function (r,_){
figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.0"], null));

return r.call(null,true);
}))).then((function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(300));
})).then((function (_){
return figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 10px 0px 70px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"0px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent"], null));
})).then((function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(200));
})).then((function (_){
return figwheel.tools.heads_up.set_content_BANG_.call(null,c,"");
}));
});
figwheel.tools.heads_up.display_loaded_start = (function figwheel$tools$heads_up$display_loaded_start(){
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.tools.heads_up.flash_loaded = (function figwheel$tools$heads_up$flash_loaded(){
return figwheel.tools.heads_up.display_loaded_start.call(null).then((function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(400));
})).then((function (_){
return figwheel.tools.heads_up.clear.call(null);
}));
});
figwheel.tools.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.tools.heads_up.close_bad_compile_screen = (function figwheel$tools$heads_up$close_bad_compile_screen(){
var temp__5720__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.tools.heads_up.bad_compile_screen = (function figwheel$tools$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.tools.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.tools.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map
