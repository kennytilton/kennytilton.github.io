// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__27182 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__27182.cljs$core$IFn$_invoke$arity$1 ? fexpr__27182.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__27182.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27183){
var vec__27184 = p__27183;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27184,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27187 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__27187)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__27187)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__27187)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__27187)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__27187)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27187)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27187)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27188){
var map__27189 = p__27188;
var map__27189__$1 = (((((!((map__27189 == null))))?(((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27189):map__27189);
var request = map__27189__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27189__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27189__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27189__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27191 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__27191,default_headers);

cljs_http.core.apply_response_type_BANG_(G__27191,response_type);

G__27191.setTimeoutInterval(timeout);

G__27191.setWithCredentials(send_credentials);

return G__27191;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27192){
var map__27193 = p__27192;
var map__27193__$1 = (((((!((map__27193 == null))))?(((((map__27193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27193):map__27193);
var request = map__27193__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__27195 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__27195) : cljs_http.core.error_kw.call(null,G__27195));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_27218 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__27196_27219 = xhr;
G__27196_27219.setProgressEventsEnabled(true);

G__27196_27219.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27218,cljs.core.cst$kw$upload));

G__27196_27219.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27218,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12386__auto___27220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_27207){
var state_val_27208 = (state_27207[(1)]);
if((state_val_27208 === (1))){
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27207__$1,(2),cancel);
} else {
if((state_val_27208 === (2))){
var inst_27198 = (state_27207[(2)]);
var inst_27199 = xhr.isComplete();
var inst_27200 = cljs.core.not(inst_27199);
var state_27207__$1 = (function (){var statearr_27209 = state_27207;
(statearr_27209[(7)] = inst_27198);

return statearr_27209;
})();
if(inst_27200){
var statearr_27210_27221 = state_27207__$1;
(statearr_27210_27221[(1)] = (3));

} else {
var statearr_27211_27222 = state_27207__$1;
(statearr_27211_27222[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27208 === (3))){
var inst_27202 = xhr.abort();
var state_27207__$1 = state_27207;
var statearr_27212_27223 = state_27207__$1;
(statearr_27212_27223[(2)] = inst_27202);

(statearr_27212_27223[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27208 === (4))){
var state_27207__$1 = state_27207;
var statearr_27213_27224 = state_27207__$1;
(statearr_27213_27224[(2)] = null);

(statearr_27213_27224[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27208 === (5))){
var inst_27205 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27207__$1,inst_27205);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__12196__auto__ = null;
var cljs_http$core$xhr_$_state_machine__12196__auto____0 = (function (){
var statearr_27214 = [null,null,null,null,null,null,null,null];
(statearr_27214[(0)] = cljs_http$core$xhr_$_state_machine__12196__auto__);

(statearr_27214[(1)] = (1));

return statearr_27214;
});
var cljs_http$core$xhr_$_state_machine__12196__auto____1 = (function (state_27207){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_27207);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__12199__auto__ = e27215;
var statearr_27216_27225 = state_27207;
(statearr_27216_27225[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27207);

return cljs.core.cst$kw$recur;
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__27226 = state_27207;
state_27207 = G__27226;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__12196__auto__ = function(state_27207){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__12196__auto____1.call(this,state_27207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__12196__auto____0;
cljs_http$core$xhr_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__12196__auto____1;
return cljs_http$core$xhr_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_27217 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_27217[(6)] = c__12386__auto___27220);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27227){
var map__27228 = p__27227;
var map__27228__$1 = (((((!((map__27228 == null))))?(((((map__27228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27228):map__27228);
var request = map__27228__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27228__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27228__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27228__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27228__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27241 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_27241], null));

if(cljs.core.truth_(cancel)){
var c__12386__auto___27242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_27234){
var state_val_27235 = (state_27234[(1)]);
if((state_val_27235 === (1))){
var state_27234__$1 = state_27234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27234__$1,(2),cancel);
} else {
if((state_val_27235 === (2))){
var inst_27231 = (state_27234[(2)]);
var inst_27232 = jsonp.cancel(req_27241);
var state_27234__$1 = (function (){var statearr_27236 = state_27234;
(statearr_27236[(7)] = inst_27231);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27234__$1,inst_27232);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__12196__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__12196__auto____0 = (function (){
var statearr_27237 = [null,null,null,null,null,null,null,null];
(statearr_27237[(0)] = cljs_http$core$jsonp_$_state_machine__12196__auto__);

(statearr_27237[(1)] = (1));

return statearr_27237;
});
var cljs_http$core$jsonp_$_state_machine__12196__auto____1 = (function (state_27234){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_27234);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e27238){if((e27238 instanceof Object)){
var ex__12199__auto__ = e27238;
var statearr_27239_27243 = state_27234;
(statearr_27239_27243[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27234);

return cljs.core.cst$kw$recur;
} else {
throw e27238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__27244 = state_27234;
state_27234 = G__27244;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__12196__auto__ = function(state_27234){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__12196__auto____1.call(this,state_27234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__12196__auto____0;
cljs_http$core$jsonp_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__12196__auto____1;
return cljs_http$core$jsonp_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_27240 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_27240[(6)] = c__12386__auto___27242);

return statearr_27240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27245){
var map__27246 = p__27245;
var map__27246__$1 = (((((!((map__27246 == null))))?(((((map__27246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27246):map__27246);
var request = map__27246__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27246__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
