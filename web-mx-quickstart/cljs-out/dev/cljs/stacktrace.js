// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__31513 = cljs.core.reduce.call(null,(function (p__31519,p__31520){
var vec__31521 = p__31519;
var pre = cljs.core.nth.call(null,vec__31521,(0),null);
var post = cljs.core.nth.call(null,vec__31521,(1),null);
var vec__31524 = p__31520;
var x = cljs.core.nth.call(null,vec__31524,(0),null);
var i = cljs.core.nth.call(null,vec__31524,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__31513,(0),null);
var vec__31516 = cljs.core.nth.call(null,vec__31513,(1),null);
var line = cljs.core.nth.call(null,vec__31516,(0),null);
var column = cljs.core.nth.call(null,vec__31516,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31527 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__31527,"(","");
} else {
return G__31527;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__31528 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__31528,")","");
} else {
return G__31528;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__31529 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__31529,")","");
} else {
return G__31529;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__31530,file,p__31531){
var map__31532 = p__31530;
var map__31532__$1 = (((((!((map__31532 == null))))?(((((map__31532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);
var repl_env = map__31532__$1;
var host = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__31533 = p__31531;
var map__31533__$1 = (((((!((map__31533 == null))))?(((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var opts = map__31533__$1;
var asset_path = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = host_port;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = asset_path;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),"/"].join('')),"");
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var asset_root = temp__5802__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__31536 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__31536,(0),null);
var flc = cljs.core.nth.call(null,vec__31536,(1),null);
var vec__31539 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__31539,(0),null);
var line = cljs.core.nth.call(null,vec__31539,(1),null);
var column = cljs.core.nth.call(null,vec__31539,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__31544_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__31544_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__31543_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__31543_SHARP_,"    at eval")));
}),cljs.core.drop_while.call(null,(function (p1__31542_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__31542_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__31545 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__31545,(0),null);
var flc = cljs.core.nth.call(null,vec__31545,(1),null);
var vec__31548 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__31548,(0),null);
var line = cljs.core.nth.call(null,vec__31548,(1),null);
var column = cljs.core.nth.call(null,vec__31548,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__31553_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__31553_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__31552_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__31552_SHARP_,"eval code")));
}),cljs.core.drop_while.call(null,(function (p1__31551_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__31551_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__31554 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__31554,(0),null);
var flc = cljs.core.nth.call(null,vec__31554,(1),null);
var vec__31557 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__31557,(0),null);
var line = cljs.core.nth.call(null,vec__31557,(1),null);
var column = cljs.core.nth.call(null,vec__31557,(2),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = function$;
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = line;
if(cljs.core.truth_(and__4115__auto____$2)){
return column;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__31562_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__31562_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__31561_SHARP_){
return cljs.core._EQ_.call(null,p1__31561_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__31560_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__31560_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__31563){
var map__31564 = p__31563;
var map__31564__$1 = (((((!((map__31564 == null))))?(((((map__31564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31564):map__31564);
var opts = map__31564__$1;
var output_dir = cljs.core.get.call(null,map__31564__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,x)));
} else {
return and__4115__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__31573 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__31573,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__31573,(1),null);
var vec__31576 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__31576,(0),null);
var line_part = cljs.core.nth.call(null,vec__31576,(1),null);
var col_part = cljs.core.nth.call(null,vec__31576,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__31579 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__31579,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__31579;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__31580_SHARP_){
return (p1__31580_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__31581_SHARP_,p2__31582_SHARP_){
return p1__31581_SHARP_.call(null,p2__31582_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5802__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__5802__auto__)){
var columns = temp__5802__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__31583,sms,opts){
var map__31584 = p__31583;
var map__31584__$1 = (((((!((map__31584 == null))))?(((((map__31584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31584):map__31584);
var function$ = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__31586 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31586,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31586,(1),null);
var call = cljs.core.nth.call(null,vec__31586,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",(cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null)].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__31592 = arguments.length;
switch (G__31592) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__31589_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__31589_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,(function (p1__31590_SHARP_){
return cljs.core.dissoc.call(null,p1__31590_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__31595 = arguments.length;
switch (G__31595) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31596_31613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31597_31614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31598_31615 = true;
var _STAR_print_fn_STAR__temp_val__31599_31616 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31598_31615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31599_31616);

try{var seq__31600_31617 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__31601_31618 = null;
var count__31602_31619 = (0);
var i__31603_31620 = (0);
while(true){
if((i__31603_31620 < count__31602_31619)){
var map__31608_31621 = cljs.core._nth.call(null,chunk__31601_31618,i__31603_31620);
var map__31608_31622__$1 = (((((!((map__31608_31621 == null))))?(((((map__31608_31621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31608_31621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608_31621):map__31608_31621);
var function_31623 = cljs.core.get.call(null,map__31608_31622__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_31624 = cljs.core.get.call(null,map__31608_31622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_31625 = cljs.core.get.call(null,map__31608_31622__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31626 = cljs.core.get.call(null,map__31608_31622__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_31623)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_31623)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_31624),(cljs.core.truth_(line_31625)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31625)].join(''):null),(cljs.core.truth_(column_31626)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31626)].join(''):null),")"].join(''));


var G__31627 = seq__31600_31617;
var G__31628 = chunk__31601_31618;
var G__31629 = count__31602_31619;
var G__31630 = (i__31603_31620 + (1));
seq__31600_31617 = G__31627;
chunk__31601_31618 = G__31628;
count__31602_31619 = G__31629;
i__31603_31620 = G__31630;
continue;
} else {
var temp__5804__auto___31631 = cljs.core.seq.call(null,seq__31600_31617);
if(temp__5804__auto___31631){
var seq__31600_31632__$1 = temp__5804__auto___31631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31600_31632__$1)){
var c__4556__auto___31633 = cljs.core.chunk_first.call(null,seq__31600_31632__$1);
var G__31634 = cljs.core.chunk_rest.call(null,seq__31600_31632__$1);
var G__31635 = c__4556__auto___31633;
var G__31636 = cljs.core.count.call(null,c__4556__auto___31633);
var G__31637 = (0);
seq__31600_31617 = G__31634;
chunk__31601_31618 = G__31635;
count__31602_31619 = G__31636;
i__31603_31620 = G__31637;
continue;
} else {
var map__31610_31638 = cljs.core.first.call(null,seq__31600_31632__$1);
var map__31610_31639__$1 = (((((!((map__31610_31638 == null))))?(((((map__31610_31638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31610_31638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31610_31638):map__31610_31638);
var function_31640 = cljs.core.get.call(null,map__31610_31639__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_31641 = cljs.core.get.call(null,map__31610_31639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_31642 = cljs.core.get.call(null,map__31610_31639__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31643 = cljs.core.get.call(null,map__31610_31639__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_31640)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_31640)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_31641),(cljs.core.truth_(line_31642)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31642)].join(''):null),(cljs.core.truth_(column_31643)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31643)].join(''):null),")"].join(''));


var G__31644 = cljs.core.next.call(null,seq__31600_31632__$1);
var G__31645 = null;
var G__31646 = (0);
var G__31647 = (0);
seq__31600_31617 = G__31644;
chunk__31601_31618 = G__31645;
count__31602_31619 = G__31646;
i__31603_31620 = G__31647;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31597_31614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31596_31613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=stacktrace.js.map
