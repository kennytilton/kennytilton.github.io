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
var temp__5804__auto__ = (function (){var fexpr__26071 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__26071.cljs$core$IFn$_invoke$arity$1 ? fexpr__26071.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__26071.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26072){
var vec__26073 = p__26072;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26073,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__26076 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__26076)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__26076)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__26076)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__26076)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__26076)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26076)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26076)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__26077){
var map__26078 = p__26077;
var map__26078__$1 = (((((!((map__26078 == null))))?(((((map__26078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26078):map__26078);
var request = map__26078__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__26080 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__26080,default_headers);

cljs_http.core.apply_response_type_BANG_(G__26080,response_type);

G__26080.setTimeoutInterval(timeout);

G__26080.setWithCredentials(send_credentials);

return G__26080;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__26081){
var map__26082 = p__26081;
var map__26082__$1 = (((((!((map__26082 == null))))?(((((map__26082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26082):map__26082);
var request = map__26082__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,cljs.core.cst$kw$progress);
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
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__26084 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__26084) : cljs_http.core.error_kw.call(null,G__26084));
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
var listener_26107 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__26085_26108 = xhr;
G__26085_26108.setProgressEventsEnabled(true);

G__26085_26108.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26107,cljs.core.cst$kw$upload));

G__26085_26108.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26107,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22163__auto___26109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_26096){
var state_val_26097 = (state_26096[(1)]);
if((state_val_26097 === (1))){
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26096__$1,(2),cancel);
} else {
if((state_val_26097 === (2))){
var inst_26087 = (state_26096[(2)]);
var inst_26088 = xhr.isComplete();
var inst_26089 = cljs.core.not(inst_26088);
var state_26096__$1 = (function (){var statearr_26098 = state_26096;
(statearr_26098[(7)] = inst_26087);

return statearr_26098;
})();
if(inst_26089){
var statearr_26099_26110 = state_26096__$1;
(statearr_26099_26110[(1)] = (3));

} else {
var statearr_26100_26111 = state_26096__$1;
(statearr_26100_26111[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (3))){
var inst_26091 = xhr.abort();
var state_26096__$1 = state_26096;
var statearr_26101_26112 = state_26096__$1;
(statearr_26101_26112[(2)] = inst_26091);

(statearr_26101_26112[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (4))){
var state_26096__$1 = state_26096;
var statearr_26102_26113 = state_26096__$1;
(statearr_26102_26113[(2)] = null);

(statearr_26102_26113[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26097 === (5))){
var inst_26094 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26096__$1,inst_26094);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__21973__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21973__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = cljs_http$core$xhr_$_state_machine__21973__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var cljs_http$core$xhr_$_state_machine__21973__auto____1 = (function (state_26096){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_26096);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__21976__auto__ = e26104;
var statearr_26105_26114 = state_26096;
(statearr_26105_26114[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26096);

return cljs.core.cst$kw$recur;
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__26115 = state_26096;
state_26096 = G__26115;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21973__auto__ = function(state_26096){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21973__auto____1.call(this,state_26096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21973__auto____0;
cljs_http$core$xhr_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21973__auto____1;
return cljs_http$core$xhr_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_26106 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_26106[(6)] = c__22163__auto___26109);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__26116){
var map__26117 = p__26116;
var map__26117__$1 = (((((!((map__26117 == null))))?(((((map__26117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26117):map__26117);
var request = map__26117__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26117__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26117__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_26130 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_26130], null));

if(cljs.core.truth_(cancel)){
var c__22163__auto___26131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_26123){
var state_val_26124 = (state_26123[(1)]);
if((state_val_26124 === (1))){
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26123__$1,(2),cancel);
} else {
if((state_val_26124 === (2))){
var inst_26120 = (state_26123[(2)]);
var inst_26121 = jsonp.cancel(req_26130);
var state_26123__$1 = (function (){var statearr_26125 = state_26123;
(statearr_26125[(7)] = inst_26120);

return statearr_26125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26123__$1,inst_26121);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__21973__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21973__auto____0 = (function (){
var statearr_26126 = [null,null,null,null,null,null,null,null];
(statearr_26126[(0)] = cljs_http$core$jsonp_$_state_machine__21973__auto__);

(statearr_26126[(1)] = (1));

return statearr_26126;
});
var cljs_http$core$jsonp_$_state_machine__21973__auto____1 = (function (state_26123){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_26123);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e26127){if((e26127 instanceof Object)){
var ex__21976__auto__ = e26127;
var statearr_26128_26132 = state_26123;
(statearr_26128_26132[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26123);

return cljs.core.cst$kw$recur;
} else {
throw e26127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__26133 = state_26123;
state_26123 = G__26133;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21973__auto__ = function(state_26123){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21973__auto____1.call(this,state_26123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21973__auto____0;
cljs_http$core$jsonp_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21973__auto____1;
return cljs_http$core$jsonp_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_26129 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_26129[(6)] = c__22163__auto___26131);

return statearr_26129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__26134){
var map__26135 = p__26134;
var map__26135__$1 = (((((!((map__26135 == null))))?(((((map__26135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26135):map__26135);
var request = map__26135__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
