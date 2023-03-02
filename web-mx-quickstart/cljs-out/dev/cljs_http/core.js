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
var temp__5804__auto__ = (function (){var fexpr__32925 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__32925.cljs$core$IFn$_invoke$arity$1 ? fexpr__32925.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__32925.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32926){
var vec__32927 = p__32926;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32927,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__32930 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__32930)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__32930)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__32930)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__32930)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__32930)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32930)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32930)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__32931){
var map__32932 = p__32931;
var map__32932__$1 = (((((!((map__32932 == null))))?(((((map__32932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32932):map__32932);
var request = map__32932__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__32934 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__32934,default_headers);

cljs_http.core.apply_response_type_BANG_(G__32934,response_type);

G__32934.setTimeoutInterval(timeout);

G__32934.setWithCredentials(send_credentials);

return G__32934;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__32935){
var map__32936 = p__32935;
var map__32936__$1 = (((((!((map__32936 == null))))?(((((map__32936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32936):map__32936);
var request = map__32936__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32936__$1,cljs.core.cst$kw$progress);
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
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__32938 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__32938) : cljs_http.core.error_kw.call(null,G__32938));
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
var listener_32961 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__32939_32962 = xhr;
G__32939_32962.setProgressEventsEnabled(true);

G__32939_32962.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_32961,cljs.core.cst$kw$upload));

G__32939_32962.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_32961,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__29017__auto___32963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32950){
var state_val_32951 = (state_32950[(1)]);
if((state_val_32951 === (1))){
var state_32950__$1 = state_32950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32950__$1,(2),cancel);
} else {
if((state_val_32951 === (2))){
var inst_32941 = (state_32950[(2)]);
var inst_32942 = xhr.isComplete();
var inst_32943 = cljs.core.not(inst_32942);
var state_32950__$1 = (function (){var statearr_32952 = state_32950;
(statearr_32952[(7)] = inst_32941);

return statearr_32952;
})();
if(inst_32943){
var statearr_32953_32964 = state_32950__$1;
(statearr_32953_32964[(1)] = (3));

} else {
var statearr_32954_32965 = state_32950__$1;
(statearr_32954_32965[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32951 === (3))){
var inst_32945 = xhr.abort();
var state_32950__$1 = state_32950;
var statearr_32955_32966 = state_32950__$1;
(statearr_32955_32966[(2)] = inst_32945);

(statearr_32955_32966[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32951 === (4))){
var state_32950__$1 = state_32950;
var statearr_32956_32967 = state_32950__$1;
(statearr_32956_32967[(2)] = null);

(statearr_32956_32967[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32951 === (5))){
var inst_32948 = (state_32950[(2)]);
var state_32950__$1 = state_32950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32950__$1,inst_32948);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__28827__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28827__auto____0 = (function (){
var statearr_32957 = [null,null,null,null,null,null,null,null];
(statearr_32957[(0)] = cljs_http$core$xhr_$_state_machine__28827__auto__);

(statearr_32957[(1)] = (1));

return statearr_32957;
});
var cljs_http$core$xhr_$_state_machine__28827__auto____1 = (function (state_32950){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32950);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32958){if((e32958 instanceof Object)){
var ex__28830__auto__ = e32958;
var statearr_32959_32968 = state_32950;
(statearr_32959_32968[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32950);

return cljs.core.cst$kw$recur;
} else {
throw e32958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32969 = state_32950;
state_32950 = G__32969;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28827__auto__ = function(state_32950){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28827__auto____1.call(this,state_32950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28827__auto____0;
cljs_http$core$xhr_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28827__auto____1;
return cljs_http$core$xhr_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32960 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32960[(6)] = c__29017__auto___32963);

return statearr_32960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__32970){
var map__32971 = p__32970;
var map__32971__$1 = (((((!((map__32971 == null))))?(((((map__32971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32971):map__32971);
var request = map__32971__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32971__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32971__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32971__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32971__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_32984 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_32984], null));

if(cljs.core.truth_(cancel)){
var c__29017__auto___32985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32977){
var state_val_32978 = (state_32977[(1)]);
if((state_val_32978 === (1))){
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32977__$1,(2),cancel);
} else {
if((state_val_32978 === (2))){
var inst_32974 = (state_32977[(2)]);
var inst_32975 = jsonp.cancel(req_32984);
var state_32977__$1 = (function (){var statearr_32979 = state_32977;
(statearr_32979[(7)] = inst_32974);

return statearr_32979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32977__$1,inst_32975);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__28827__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28827__auto____0 = (function (){
var statearr_32980 = [null,null,null,null,null,null,null,null];
(statearr_32980[(0)] = cljs_http$core$jsonp_$_state_machine__28827__auto__);

(statearr_32980[(1)] = (1));

return statearr_32980;
});
var cljs_http$core$jsonp_$_state_machine__28827__auto____1 = (function (state_32977){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32977);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32981){if((e32981 instanceof Object)){
var ex__28830__auto__ = e32981;
var statearr_32982_32986 = state_32977;
(statearr_32982_32986[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32977);

return cljs.core.cst$kw$recur;
} else {
throw e32981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32987 = state_32977;
state_32977 = G__32987;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28827__auto__ = function(state_32977){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28827__auto____1.call(this,state_32977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28827__auto____0;
cljs_http$core$jsonp_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28827__auto____1;
return cljs_http$core$jsonp_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32983 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32983[(6)] = c__29017__auto___32985);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__32988){
var map__32989 = p__32988;
var map__32989__$1 = (((((!((map__32989 == null))))?(((((map__32989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32989):map__32989);
var request = map__32989__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32989__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
