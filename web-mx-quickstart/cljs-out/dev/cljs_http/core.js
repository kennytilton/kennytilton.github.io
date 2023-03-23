// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__19717){
var vec__19718 = p__19717;
var k = cljs.core.nth.call(null,vec__19718,(0),null);
var v = cljs.core.nth.call(null,vec__19718,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19721 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__19721)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__19721)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__19721)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__19721)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__19721)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__19721)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19721)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19722){
var map__19723 = p__19722;
var map__19723__$1 = (((((!((map__19723 == null))))?(((((map__19723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19723):map__19723);
var request = map__19723__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19723__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__19723__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__19723__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19725 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__19725,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__19725,response_type);

G__19725.setTimeoutInterval(timeout);

G__19725.setWithCredentials(send_credentials);

return G__19725;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19726){
var map__19727 = p__19726;
var map__19727__$1 = (((((!((map__19727 == null))))?(((((map__19727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19727):map__19727);
var request = map__19727__$1;
var request_method = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__19727__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_19751 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__19729_19752 = xhr;
G__19729_19752.setProgressEventsEnabled(true);

G__19729_19752.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_19751,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__19729_19752.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_19751,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15819__auto___19753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19740){
var state_val_19741 = (state_19740[(1)]);
if((state_val_19741 === (1))){
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19740__$1,(2),cancel);
} else {
if((state_val_19741 === (2))){
var inst_19731 = (state_19740[(2)]);
var inst_19732 = xhr.isComplete();
var inst_19733 = cljs.core.not.call(null,inst_19732);
var state_19740__$1 = (function (){var statearr_19742 = state_19740;
(statearr_19742[(7)] = inst_19731);

return statearr_19742;
})();
if(inst_19733){
var statearr_19743_19754 = state_19740__$1;
(statearr_19743_19754[(1)] = (3));

} else {
var statearr_19744_19755 = state_19740__$1;
(statearr_19744_19755[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (3))){
var inst_19735 = xhr.abort();
var state_19740__$1 = state_19740;
var statearr_19745_19756 = state_19740__$1;
(statearr_19745_19756[(2)] = inst_19735);

(statearr_19745_19756[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (4))){
var state_19740__$1 = state_19740;
var statearr_19746_19757 = state_19740__$1;
(statearr_19746_19757[(2)] = null);

(statearr_19746_19757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19741 === (5))){
var inst_19738 = (state_19740[(2)]);
var state_19740__$1 = state_19740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19740__$1,inst_19738);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__15653__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15653__auto____0 = (function (){
var statearr_19747 = [null,null,null,null,null,null,null,null];
(statearr_19747[(0)] = cljs_http$core$xhr_$_state_machine__15653__auto__);

(statearr_19747[(1)] = (1));

return statearr_19747;
});
var cljs_http$core$xhr_$_state_machine__15653__auto____1 = (function (state_19740){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19748){if((e19748 instanceof Object)){
var ex__15656__auto__ = e19748;
var statearr_19749_19758 = state_19740;
(statearr_19749_19758[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19759 = state_19740;
state_19740 = G__19759;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15653__auto__ = function(state_19740){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15653__auto____1.call(this,state_19740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15653__auto____0;
cljs_http$core$xhr_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15653__auto____1;
return cljs_http$core$xhr_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19750 = f__15820__auto__.call(null);
(statearr_19750[(6)] = c__15819__auto___19753);

return statearr_19750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19760){
var map__19761 = p__19760;
var map__19761__$1 = (((((!((map__19761 == null))))?(((((map__19761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19761):map__19761);
var request = map__19761__$1;
var timeout = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__19761__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19774 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_19774], null));

if(cljs.core.truth_(cancel)){
var c__15819__auto___19775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19767){
var state_val_19768 = (state_19767[(1)]);
if((state_val_19768 === (1))){
var state_19767__$1 = state_19767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19767__$1,(2),cancel);
} else {
if((state_val_19768 === (2))){
var inst_19764 = (state_19767[(2)]);
var inst_19765 = jsonp.cancel(req_19774);
var state_19767__$1 = (function (){var statearr_19769 = state_19767;
(statearr_19769[(7)] = inst_19764);

return statearr_19769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19767__$1,inst_19765);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__15653__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15653__auto____0 = (function (){
var statearr_19770 = [null,null,null,null,null,null,null,null];
(statearr_19770[(0)] = cljs_http$core$jsonp_$_state_machine__15653__auto__);

(statearr_19770[(1)] = (1));

return statearr_19770;
});
var cljs_http$core$jsonp_$_state_machine__15653__auto____1 = (function (state_19767){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19771){if((e19771 instanceof Object)){
var ex__15656__auto__ = e19771;
var statearr_19772_19776 = state_19767;
(statearr_19772_19776[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19777 = state_19767;
state_19767 = G__19777;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15653__auto__ = function(state_19767){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15653__auto____1.call(this,state_19767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15653__auto____0;
cljs_http$core$jsonp_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15653__auto____1;
return cljs_http$core$jsonp_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19773 = f__15820__auto__.call(null);
(statearr_19773[(6)] = c__15819__auto___19775);

return statearr_19773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19778){
var map__19779 = p__19778;
var map__19779__$1 = (((((!((map__19779 == null))))?(((((map__19779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19779):map__19779);
var request = map__19779__$1;
var request_method = cljs.core.get.call(null,map__19779__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
