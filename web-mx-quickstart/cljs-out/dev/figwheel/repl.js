// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31716_SHARP_,p2__31717_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31716_SHARP_)),p2__31717_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31718_SHARP_,p2__31719_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31718_SHARP_),p2__31719_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__31727 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31727.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31727.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31727;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e31728){if((e31728 instanceof Error)){
var e = e31728;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e31728;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31729){if((e31729 instanceof Error)){
var e = e31729;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e31729;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__31730 = cljs.core._EQ_;
var expr__31731 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__31730.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31731))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31730.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31731))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31730.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31731))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__31733,callback){
var map__31734 = p__31733;
var map__31734__$1 = (((((!((map__31734 == null))))?(((((map__31734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31734):map__31734);
var file_msg = map__31734__$1;
var request_url = cljs.core.get.call(null,map__31734__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__31720_SHARP_){
return p1__31720_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__31737 = arguments.length;
switch (G__31737) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5804__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__31721_SHARP_){
return p1__31721_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e31738){if((e31738 instanceof Error)){
var e_31815 = e31738;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_31815);
} else {
throw e31738;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__31722_SHARP_){
return p1__31722_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5804__auto__)){
var next_promise_fn = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__31723_SHARP_){
return p1__31723_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/**
 * @define {string}
 */
figwheel.repl.print_output = goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__31816__delegate = function (args){
var seq__31739 = cljs.core.seq.call(null,printers);
var chunk__31740 = null;
var count__31741 = (0);
var i__31742 = (0);
while(true){
if((i__31742 < count__31741)){
var p = cljs.core._nth.call(null,chunk__31740,i__31742);
figwheel.repl.out_print.call(null,p,args);


var G__31817 = seq__31739;
var G__31818 = chunk__31740;
var G__31819 = count__31741;
var G__31820 = (i__31742 + (1));
seq__31739 = G__31817;
chunk__31740 = G__31818;
count__31741 = G__31819;
i__31742 = G__31820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__31739);
if(temp__5804__auto__){
var seq__31739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31739__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31739__$1);
var G__31821 = cljs.core.chunk_rest.call(null,seq__31739__$1);
var G__31822 = c__4556__auto__;
var G__31823 = cljs.core.count.call(null,c__4556__auto__);
var G__31824 = (0);
seq__31739 = G__31821;
chunk__31740 = G__31822;
count__31741 = G__31823;
i__31742 = G__31824;
continue;
} else {
var p = cljs.core.first.call(null,seq__31739__$1);
figwheel.repl.out_print.call(null,p,args);


var G__31825 = cljs.core.next.call(null,seq__31739__$1);
var G__31826 = null;
var G__31827 = (0);
var G__31828 = (0);
seq__31739 = G__31825;
chunk__31740 = G__31826;
count__31741 = G__31827;
i__31742 = G__31828;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__31816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31829__i = 0, G__31829__a = new Array(arguments.length -  0);
while (G__31829__i < G__31829__a.length) {G__31829__a[G__31829__i] = arguments[G__31829__i + 0]; ++G__31829__i;}
  args = new cljs.core.IndexedSeq(G__31829__a,0,null);
} 
return G__31816__delegate.call(this,args);};
G__31816.cljs$lang$maxFixedArity = 0;
G__31816.cljs$lang$applyTo = (function (arglist__31830){
var args = cljs.core.seq(arglist__31830);
return G__31816__delegate(args);
});
G__31816.cljs$core$IFn$_invoke$arity$variadic = G__31816__delegate;
return G__31816;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__31831__delegate = function (args){
var seq__31743 = cljs.core.seq.call(null,printers);
var chunk__31744 = null;
var count__31745 = (0);
var i__31746 = (0);
while(true){
if((i__31746 < count__31745)){
var p = cljs.core._nth.call(null,chunk__31744,i__31746);
figwheel.repl.err_print.call(null,p,args);


var G__31832 = seq__31743;
var G__31833 = chunk__31744;
var G__31834 = count__31745;
var G__31835 = (i__31746 + (1));
seq__31743 = G__31832;
chunk__31744 = G__31833;
count__31745 = G__31834;
i__31746 = G__31835;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__31743);
if(temp__5804__auto__){
var seq__31743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31743__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31743__$1);
var G__31836 = cljs.core.chunk_rest.call(null,seq__31743__$1);
var G__31837 = c__4556__auto__;
var G__31838 = cljs.core.count.call(null,c__4556__auto__);
var G__31839 = (0);
seq__31743 = G__31836;
chunk__31744 = G__31837;
count__31745 = G__31838;
i__31746 = G__31839;
continue;
} else {
var p = cljs.core.first.call(null,seq__31743__$1);
figwheel.repl.err_print.call(null,p,args);


var G__31840 = cljs.core.next.call(null,seq__31743__$1);
var G__31841 = null;
var G__31842 = (0);
var G__31843 = (0);
seq__31743 = G__31840;
chunk__31744 = G__31841;
count__31745 = G__31842;
i__31746 = G__31843;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__31831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31844__i = 0, G__31844__a = new Array(arguments.length -  0);
while (G__31844__i < G__31844__a.length) {G__31844__a[G__31844__i] = arguments[G__31844__i + 0]; ++G__31844__i;}
  args = new cljs.core.IndexedSeq(G__31844__a,0,null);
} 
return G__31831__delegate.call(this,args);};
G__31831.cljs$lang$maxFixedArity = 0;
G__31831.cljs$lang$applyTo = (function (arglist__31845){
var args = cljs.core.seq(arglist__31845);
return G__31831__delegate(args);
});
G__31831.cljs$core$IFn$_invoke$arity$variadic = G__31831__delegate;
return G__31831;
})()
);
});


/**
 * @define {string}
 */
figwheel.repl.connect_url = goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__31747,response_body){
var map__31748 = p__31747;
var map__31748__$1 = (((((!((map__31748 == null))))?(((((map__31748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31748):map__31748);
var uuid = cljs.core.get.call(null,map__31748__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__31750 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__31750,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__31750;
}
});

figwheel.repl.http_post = (function (){var pred__31751 = cljs.core._EQ_;
var expr__31752 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__31751.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31752))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__31754 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5804__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5804__auto__)){
var q = temp__5804__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__31724_SHARP_){
return console.error(p1__31724_SHARP_);
}));
G__31754.write(post_data);

G__31754.end();

return G__31754;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__31755,response_body){
var map__31756 = p__31755;
var map__31756__$1 = (((((!((map__31756 == null))))?(((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var old_msg = map__31756__$1;
var websocket = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5804__auto___31846 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5804__auto___31846)){
var sn_31847 = temp__5804__auto___31846;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_31847);
} else {
}

var temp__5804__auto___31848 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5804__auto___31848)){
var sid_31849 = temp__5804__auto___31848;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_31849);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__31850 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31759 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31760 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31761 = true;
var _STAR_print_fn_STAR__temp_val__31762 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31761);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31762);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e31763){if((e31763 instanceof Error)){
var e = e31763;
return null;
} else {
throw e31763;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__4115__auto__ = print_to_console_QMARK__31850;
if(cljs.core.truth_(and__4115__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__4115__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31760);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31759);
}}catch (e31758){if((e31758 instanceof Error)){
var e = e31758;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e31758;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__31764){
var map__31765 = p__31764;
var map__31765__$1 = (((((!((map__31765 == null))))?(((((map__31765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31765):map__31765);
var msg = map__31765__$1;
var code = cljs.core.get.call(null,map__31765__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__31767){
var map__31768 = p__31767;
var map__31768__$1 = (((((!((map__31768 == null))))?(((((map__31768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31768):map__31768);
var messages = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__31770 = cljs.core.seq.call(null,messages);
var chunk__31771 = null;
var count__31772 = (0);
var i__31773 = (0);
while(true){
if((i__31773 < count__31772)){
var msg = cljs.core._nth.call(null,chunk__31771,i__31773);
figwheel.repl.message.call(null,(function (){var G__31776 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__31776,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__31776;
}
})());


var G__31851 = seq__31770;
var G__31852 = chunk__31771;
var G__31853 = count__31772;
var G__31854 = (i__31773 + (1));
seq__31770 = G__31851;
chunk__31771 = G__31852;
count__31772 = G__31853;
i__31773 = G__31854;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__31770);
if(temp__5804__auto__){
var seq__31770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31770__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31770__$1);
var G__31855 = cljs.core.chunk_rest.call(null,seq__31770__$1);
var G__31856 = c__4556__auto__;
var G__31857 = cljs.core.count.call(null,c__4556__auto__);
var G__31858 = (0);
seq__31770 = G__31855;
chunk__31771 = G__31856;
count__31772 = G__31857;
i__31773 = G__31858;
continue;
} else {
var msg = cljs.core.first.call(null,seq__31770__$1);
figwheel.repl.message.call(null,(function (){var G__31777 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__31777,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__31777;
}
})());


var G__31859 = cljs.core.next.call(null,seq__31770__$1);
var G__31860 = null;
var G__31861 = (0);
var G__31862 = (0);
seq__31770 = G__31859;
chunk__31771 = G__31860;
count__31772 = G__31861;
i__31773 = G__31862;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4126__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__31778_31863 = uri.getQueryData().add("fwsid",(function (){var or__4126__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__31778_31863.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4217__auto__ = Math.pow((2),attempt);
var y__4218__auto__ = (20);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31725_SHARP_){
if(typeof p1__31725_SHARP_ === 'string'){
return p1__31725_SHARP_;
} else {
return goog.json.serialize(p1__31725_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31726_SHARP_){
if(typeof p1__31726_SHARP_ === 'string'){
return p1__31726_SHARP_;
} else {
return goog.json.serialize(p1__31726_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__31779 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__31779,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__31779;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__31780 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__31780,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__31780;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4126__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = ((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?(function (){try{return require("ws");
}catch (e31784){if((e31784 instanceof Error)){
var e = e31784;
return null;
} else {
throw e31784;

}
}})():false);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996))){
return goog.object.get(self,"WebSocket");
} else {
return false;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5802__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5802__auto__)){
var websocket_class = temp__5802__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31864 = arguments.length;
var i__4737__auto___31865 = (0);
while(true){
if((i__4737__auto___31865 < len__4736__auto___31864)){
args__4742__auto__.push((arguments[i__4737__auto___31865]));

var G__31866 = (i__4737__auto___31865 + (1));
i__4737__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__31786){
var vec__31787 = p__31786;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31787,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__31790 = websocket;
G__31790.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5804__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e31791){if((e31791 instanceof Error)){
var e__$1 = e31791;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e31791;

}
}} else {
return null;
}
}));

G__31790.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__31790.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
}));

G__31790.open(url);

return G__31790;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq31785){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31785));
}));


figwheel.repl.http_get = (function (){var pred__31792 = cljs.core._EQ_;
var expr__31793 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__31792.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31793))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e31795){if((e31795 instanceof Error)){
var e = e31795;
console.error(e);

return err.call(null,e);
} else {
throw e31795;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e31796){if((e31796 instanceof Error)){
var e = e31796;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e31796;

}
}});
var G__31797_31867 = url.getQueryData();
G__31797_31867.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = goog.object.get(msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((((e instanceof goog.net.XhrIo))?e.getResponseBody():false))){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31868 = arguments.length;
var i__4737__auto___31869 = (0);
while(true){
if((i__4737__auto___31869 < len__4736__auto___31868)){
args__4742__auto__.push((arguments[i__4737__auto___31869]));

var G__31870 = (i__4737__auto___31869 + (1));
i__4737__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__31799){
var vec__31800 = p__31799;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31800,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq31798){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31798));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(url,"http");
if(or__4126__auto__){
return or__4126__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/**
 * @define {string}
 */
figwheel.repl.client_log_level = goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__31803 = cljs.core.seq.call(null,(function (){var G__31808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__31808,figwheel.core.logger);
} else {
return G__31808;
}
})());
var chunk__31804 = null;
var count__31805 = (0);
var i__31806 = (0);
while(true){
if((i__31806 < count__31805)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__31804,i__31806);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__31871 = seq__31803;
var G__31872 = chunk__31804;
var G__31873 = count__31805;
var G__31874 = (i__31806 + (1));
seq__31803 = G__31871;
chunk__31804 = G__31872;
count__31805 = G__31873;
i__31806 = G__31874;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__31803);
if(temp__5804__auto__){
var seq__31803__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31803__$1);
var G__31875 = cljs.core.chunk_rest.call(null,seq__31803__$1);
var G__31876 = c__4556__auto__;
var G__31877 = cljs.core.count.call(null,c__4556__auto__);
var G__31878 = (0);
seq__31803 = G__31875;
chunk__31804 = G__31876;
count__31805 = G__31877;
i__31806 = G__31878;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__31803__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__31879 = cljs.core.next.call(null,seq__31803__$1);
var G__31880 = null;
var G__31881 = (0);
var G__31882 = (0);
seq__31803 = G__31879;
chunk__31804 = G__31880;
count__31805 = G__31881;
i__31806 = G__31882;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4126__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31883 = arguments.length;
var i__4737__auto___31884 = (0);
while(true){
if((i__4737__auto___31884 < len__4736__auto___31883)){
args__4742__auto__.push((arguments[i__4737__auto___31884]));

var G__31885 = (i__4737__auto___31884 + (1));
i__4737__auto___31884 = G__31885;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__31810){
var vec__31811 = p__31810;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31811,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq31809){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31809));
}));


//# sourceMappingURL=repl.js.map
