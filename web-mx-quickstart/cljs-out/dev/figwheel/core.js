// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__32380_SHARP_){
var k = f.call(null,p1__32380_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32381){
var vec__32382 = p__32381;
var k = cljs.core.nth.call(null,vec__32382,(0),null);
var v = cljs.core.nth.call(null,vec__32382,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32386 = arguments.length;
var i__4737__auto___32387 = (0);
while(true){
if((i__4737__auto___32387 < len__4736__auto___32386)){
args__4742__auto__.push((arguments[i__4737__auto___32387]));

var G__32388 = (i__4737__auto___32387 + (1));
i__4737__auto___32387 = G__32388;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq32385){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32385));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__32391){
var map__32392 = p__32391;
var map__32392__$1 = (((((!((map__32392 == null))))?(((((map__32392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);
var message = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__32390_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32390_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__32389_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__32389_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__32395){
var map__32396 = p__32395;
var map__32396__$1 = (((((!((map__32396 == null))))?(((((map__32396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32396):map__32396);
var message_data = map__32396__$1;
var message = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__32398 = file_excerpt;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var start_line = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__32399 = cljs.core.split_with.call(null,(function (p1__32394_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__32394_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__32399,(0),null);
var end = cljs.core.nth.call(null,vec__32399,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__32403){
var map__32404 = p__32403;
var map__32404__$1 = (((((!((map__32404 == null))))?(((((map__32404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32404):map__32404);
var file = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32404__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32406 = "";
var G__32406__$1 = (cljs.core.truth_(file)?[G__32406,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32406);
var G__32406__$2 = (cljs.core.truth_(line)?[G__32406__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32406__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__32406__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32406__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_32465 = (new goog.debug.Console());
var G__32413_32466 = c_32465.getFormatter();
goog.object.set(G__32413_32466,"showAbsoluteTime",false);

goog.object.set(G__32413_32466,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_32465);

}

var temp__5804__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5804__auto__)){
var console_instance = temp__5804__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__32414 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__32414,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__32414;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5802__auto__ = e.event_;
if(cljs.core.truth_(temp__5802__auto__)){
var e__$1 = temp__5802__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_32467 = cljs.core.atom.call(null,(0));
var promise_chain_32468 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_32467) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ts = temp__5802__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_32467,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_32468.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__32415 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__32416 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__32416);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__32417 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__32418 = null;
var count__32419 = (0);
var i__32420 = (0);
while(true){
if((i__32420 < count__32419)){
var w = cljs.core._nth.call(null,chunk__32418,i__32420);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__32469 = seq__32417;
var G__32470 = chunk__32418;
var G__32471 = count__32419;
var G__32472 = (i__32420 + (1));
seq__32417 = G__32469;
chunk__32418 = G__32470;
count__32419 = G__32471;
i__32420 = G__32472;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32417);
if(temp__5804__auto__){
var seq__32417__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32417__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32417__$1);
var G__32473 = cljs.core.chunk_rest.call(null,seq__32417__$1);
var G__32474 = c__4556__auto__;
var G__32475 = cljs.core.count.call(null,c__4556__auto__);
var G__32476 = (0);
seq__32417 = G__32473;
chunk__32418 = G__32474;
count__32419 = G__32475;
i__32420 = G__32476;
continue;
} else {
var w = cljs.core.first.call(null,seq__32417__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__32477 = cljs.core.next.call(null,seq__32417__$1);
var G__32478 = null;
var G__32479 = (0);
var G__32480 = (0);
seq__32417 = G__32477;
chunk__32418 = G__32478;
count__32419 = G__32479;
i__32420 = G__32480;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__32415);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_32468.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__32421 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__32422 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__32422);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__32421);
}}));
} else {
return promise_chain_32468.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32481 = arguments.length;
var i__4737__auto___32482 = (0);
while(true){
if((i__4737__auto___32482 < len__4736__auto___32481)){
args__4742__auto__.push((arguments[i__4737__auto___32482]));

var G__32483 = (i__4737__auto___32482 + (1));
i__4737__auto___32482 = G__32483;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__32425){
var vec__32426 = p__32425;
var n = cljs.core.nth.call(null,vec__32426,(0),null);
var mdata = cljs.core.nth.call(null,vec__32426,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__32429 = cljs.core.seq.call(null,hooks);
var chunk__32430 = null;
var count__32431 = (0);
var i__32432 = (0);
while(true){
if((i__32432 < count__32431)){
var vec__32441 = cljs.core._nth.call(null,chunk__32430,i__32432);
var n = cljs.core.nth.call(null,vec__32441,(0),null);
var f = cljs.core.nth.call(null,vec__32441,(1),null);
var temp__5802__auto___32484 = cljs.core.reduce.call(null,((function (seq__32429,chunk__32430,count__32431,i__32432,vec__32441,n,f,hooks){
return (function (p1__32407_SHARP_,p2__32408_SHARP_){
if(cljs.core.truth_(p1__32407_SHARP_)){
return goog.object.get(p1__32407_SHARP_,p2__32408_SHARP_);
} else {
return null;
}
});})(seq__32429,chunk__32430,count__32431,i__32432,vec__32441,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___32484)){
var hook_32485 = temp__5802__auto___32484;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_32485,args);
}catch (e32444){if((e32444 instanceof Error)){
var e_32486 = e32444;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_32486);
} else {
throw e32444;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__32487 = seq__32429;
var G__32488 = chunk__32430;
var G__32489 = count__32431;
var G__32490 = (i__32432 + (1));
seq__32429 = G__32487;
chunk__32430 = G__32488;
count__32431 = G__32489;
i__32432 = G__32490;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32429);
if(temp__5804__auto__){
var seq__32429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32429__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32429__$1);
var G__32491 = cljs.core.chunk_rest.call(null,seq__32429__$1);
var G__32492 = c__4556__auto__;
var G__32493 = cljs.core.count.call(null,c__4556__auto__);
var G__32494 = (0);
seq__32429 = G__32491;
chunk__32430 = G__32492;
count__32431 = G__32493;
i__32432 = G__32494;
continue;
} else {
var vec__32445 = cljs.core.first.call(null,seq__32429__$1);
var n = cljs.core.nth.call(null,vec__32445,(0),null);
var f = cljs.core.nth.call(null,vec__32445,(1),null);
var temp__5802__auto___32495 = cljs.core.reduce.call(null,((function (seq__32429,chunk__32430,count__32431,i__32432,vec__32445,n,f,seq__32429__$1,temp__5804__auto__,hooks){
return (function (p1__32407_SHARP_,p2__32408_SHARP_){
if(cljs.core.truth_(p1__32407_SHARP_)){
return goog.object.get(p1__32407_SHARP_,p2__32408_SHARP_);
} else {
return null;
}
});})(seq__32429,chunk__32430,count__32431,i__32432,vec__32445,n,f,seq__32429__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___32495)){
var hook_32496 = temp__5802__auto___32495;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_32496,args);
}catch (e32448){if((e32448 instanceof Error)){
var e_32497 = e32448;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_32497);
} else {
throw e32448;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__32498 = cljs.core.next.call(null,seq__32429__$1);
var G__32499 = null;
var G__32500 = (0);
var G__32501 = (0);
seq__32429 = G__32498;
chunk__32430 = G__32499;
count__32431 = G__32500;
i__32432 = G__32501;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq32423){
var G__32424 = cljs.core.first.call(null,seq32423);
var seq32423__$1 = cljs.core.next.call(null,seq32423);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32424,seq32423__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32449){
var vec__32450 = p__32449;
var k = cljs.core.nth.call(null,vec__32450,(0),null);
var v = cljs.core.nth.call(null,vec__32450,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__32409_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__32409_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__32409_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__32410_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__32410_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__32411_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__32411_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__32453_32502 = cljs.core.seq.call(null,to_reload);
var chunk__32454_32503 = null;
var count__32455_32504 = (0);
var i__32456_32505 = (0);
while(true){
if((i__32456_32505 < count__32455_32504)){
var ns_32506 = cljs.core._nth.call(null,chunk__32454_32503,i__32456_32505);
goog.require(cljs.core.name.call(null,ns_32506),true);


var G__32507 = seq__32453_32502;
var G__32508 = chunk__32454_32503;
var G__32509 = count__32455_32504;
var G__32510 = (i__32456_32505 + (1));
seq__32453_32502 = G__32507;
chunk__32454_32503 = G__32508;
count__32455_32504 = G__32509;
i__32456_32505 = G__32510;
continue;
} else {
var temp__5804__auto___32511 = cljs.core.seq.call(null,seq__32453_32502);
if(temp__5804__auto___32511){
var seq__32453_32512__$1 = temp__5804__auto___32511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32453_32512__$1)){
var c__4556__auto___32513 = cljs.core.chunk_first.call(null,seq__32453_32512__$1);
var G__32514 = cljs.core.chunk_rest.call(null,seq__32453_32512__$1);
var G__32515 = c__4556__auto___32513;
var G__32516 = cljs.core.count.call(null,c__4556__auto___32513);
var G__32517 = (0);
seq__32453_32502 = G__32514;
chunk__32454_32503 = G__32515;
count__32455_32504 = G__32516;
i__32456_32505 = G__32517;
continue;
} else {
var ns_32518 = cljs.core.first.call(null,seq__32453_32512__$1);
goog.require(cljs.core.name.call(null,ns_32518),true);


var G__32519 = cljs.core.next.call(null,seq__32453_32512__$1);
var G__32520 = null;
var G__32521 = (0);
var G__32522 = (0);
seq__32453_32502 = G__32519;
chunk__32454_32503 = G__32520;
count__32455_32504 = G__32521;
i__32456_32505 = G__32522;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_32523 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5804__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var not_loaded = temp__5804__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_32523);
} else {
setTimeout(after_reload_fn_32523,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__32457 = cljs.core.seq.call(null,warnings);
var chunk__32458 = null;
var count__32459 = (0);
var i__32460 = (0);
while(true){
if((i__32460 < count__32459)){
var warning = cljs.core._nth.call(null,chunk__32458,i__32460);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__32524 = seq__32457;
var G__32525 = chunk__32458;
var G__32526 = count__32459;
var G__32527 = (i__32460 + (1));
seq__32457 = G__32524;
chunk__32458 = G__32525;
count__32459 = G__32526;
i__32460 = G__32527;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32457);
if(temp__5804__auto__){
var seq__32457__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32457__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32457__$1);
var G__32528 = cljs.core.chunk_rest.call(null,seq__32457__$1);
var G__32529 = c__4556__auto__;
var G__32530 = cljs.core.count.call(null,c__4556__auto__);
var G__32531 = (0);
seq__32457 = G__32528;
chunk__32458 = G__32529;
count__32459 = G__32530;
i__32460 = G__32531;
continue;
} else {
var warning = cljs.core.first.call(null,seq__32457__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__32532 = cljs.core.next.call(null,seq__32457__$1);
var G__32533 = null;
var G__32534 = (0);
var G__32535 = (0);
seq__32457 = G__32532;
chunk__32458 = G__32533;
count__32459 = G__32534;
i__32460 = G__32535;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__32461){
var map__32462 = p__32461;
var map__32462__$1 = (((((!((map__32462 == null))))?(((((map__32462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32462):map__32462);
var exception_data = map__32462__$1;
var file = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__32412_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__32412_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__32464 = "Compile Exception - ";
var G__32464__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__32464,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__32464);
if(cljs.core.truth_(file)){
return [G__32464__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__32464__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
