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
var temp__5804__auto__ = (function (){var fexpr__27159 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__27159.cljs$core$IFn$_invoke$arity$1 ? fexpr__27159.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__27159.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27160){
var vec__27161 = p__27160;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27161,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27164 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__27164)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__27164)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__27164)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__27164)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__27164)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27164)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27164)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27165){
var map__27166 = p__27165;
var map__27166__$1 = (((((!((map__27166 == null))))?(((((map__27166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27166):map__27166);
var request = map__27166__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27168 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__27168,default_headers);

cljs_http.core.apply_response_type_BANG_(G__27168,response_type);

G__27168.setTimeoutInterval(timeout);

G__27168.setWithCredentials(send_credentials);

return G__27168;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27169){
var map__27170 = p__27169;
var map__27170__$1 = (((((!((map__27170 == null))))?(((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27170):map__27170);
var request = map__27170__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27170__$1,cljs.core.cst$kw$progress);
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
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__27172 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__27172) : cljs_http.core.error_kw.call(null,G__27172));
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
var listener_27195 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__27173_27196 = xhr;
G__27173_27196.setProgressEventsEnabled(true);

G__27173_27196.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27195,cljs.core.cst$kw$upload));

G__27173_27196.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27195,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__23251__auto___27197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (1))){
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27184__$1,(2),cancel);
} else {
if((state_val_27185 === (2))){
var inst_27175 = (state_27184[(2)]);
var inst_27176 = xhr.isComplete();
var inst_27177 = cljs.core.not(inst_27176);
var state_27184__$1 = (function (){var statearr_27186 = state_27184;
(statearr_27186[(7)] = inst_27175);

return statearr_27186;
})();
if(inst_27177){
var statearr_27187_27198 = state_27184__$1;
(statearr_27187_27198[(1)] = (3));

} else {
var statearr_27188_27199 = state_27184__$1;
(statearr_27188_27199[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27185 === (3))){
var inst_27179 = xhr.abort();
var state_27184__$1 = state_27184;
var statearr_27189_27200 = state_27184__$1;
(statearr_27189_27200[(2)] = inst_27179);

(statearr_27189_27200[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27185 === (4))){
var state_27184__$1 = state_27184;
var statearr_27190_27201 = state_27184__$1;
(statearr_27190_27201[(2)] = null);

(statearr_27190_27201[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27185 === (5))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27184__$1,inst_27182);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__23061__auto__ = null;
var cljs_http$core$xhr_$_state_machine__23061__auto____0 = (function (){
var statearr_27191 = [null,null,null,null,null,null,null,null];
(statearr_27191[(0)] = cljs_http$core$xhr_$_state_machine__23061__auto__);

(statearr_27191[(1)] = (1));

return statearr_27191;
});
var cljs_http$core$xhr_$_state_machine__23061__auto____1 = (function (state_27184){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_27184);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e27192){if((e27192 instanceof Object)){
var ex__23064__auto__ = e27192;
var statearr_27193_27202 = state_27184;
(statearr_27193_27202[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27184);

return cljs.core.cst$kw$recur;
} else {
throw e27192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__27203 = state_27184;
state_27184 = G__27203;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__23061__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__23061__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__23061__auto____0;
cljs_http$core$xhr_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__23061__auto____1;
return cljs_http$core$xhr_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_27194 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_27194[(6)] = c__23251__auto___27197);

return statearr_27194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27204){
var map__27205 = p__27204;
var map__27205__$1 = (((((!((map__27205 == null))))?(((((map__27205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27205):map__27205);
var request = map__27205__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27205__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27205__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27205__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27205__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27218 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_27218], null));

if(cljs.core.truth_(cancel)){
var c__23251__auto___27219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_27211){
var state_val_27212 = (state_27211[(1)]);
if((state_val_27212 === (1))){
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27211__$1,(2),cancel);
} else {
if((state_val_27212 === (2))){
var inst_27208 = (state_27211[(2)]);
var inst_27209 = jsonp.cancel(req_27218);
var state_27211__$1 = (function (){var statearr_27213 = state_27211;
(statearr_27213[(7)] = inst_27208);

return statearr_27213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27211__$1,inst_27209);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__23061__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__23061__auto____0 = (function (){
var statearr_27214 = [null,null,null,null,null,null,null,null];
(statearr_27214[(0)] = cljs_http$core$jsonp_$_state_machine__23061__auto__);

(statearr_27214[(1)] = (1));

return statearr_27214;
});
var cljs_http$core$jsonp_$_state_machine__23061__auto____1 = (function (state_27211){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_27211);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__23064__auto__ = e27215;
var statearr_27216_27220 = state_27211;
(statearr_27216_27220[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27211);

return cljs.core.cst$kw$recur;
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__27221 = state_27211;
state_27211 = G__27221;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__23061__auto__ = function(state_27211){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__23061__auto____1.call(this,state_27211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__23061__auto____0;
cljs_http$core$jsonp_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__23061__auto____1;
return cljs_http$core$jsonp_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_27217 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_27217[(6)] = c__23251__auto___27219);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27222){
var map__27223 = p__27222;
var map__27223__$1 = (((((!((map__27223 == null))))?(((((map__27223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27223):map__27223);
var request = map__27223__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
