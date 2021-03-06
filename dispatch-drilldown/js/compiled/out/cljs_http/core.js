// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__14981 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14981) : cljs.core.atom.call(null,G__14981));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__14984){
var vec__14985 = p__14984;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14985,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__14987 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__14987)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__14987)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__14987)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__14987)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__14987)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14987)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__14988){
var map__14992 = p__14988;
var map__14992__$1 = ((((!((map__14992 == null)))?((((map__14992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14992):map__14992);
var request = map__14992__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4668__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__14994 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__14994,default_headers);

cljs_http.core.apply_response_type_BANG_(G__14994,response_type);

G__14994.setTimeoutInterval(timeout);

G__14994.setWithCredentials(send_credentials);

return G__14994;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__14995){
var map__15023 = p__14995;
var map__15023__$1 = ((((!((map__15023 == null)))?((((map__15023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15023):map__15023);
var request = map__15023__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15023__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15023__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15023__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15023__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15023__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4668__auto__ = request_method;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__15025 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__15025) : cljs_http.core.error_kw.call(null,G__15025));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12180__auto___15050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_15036){
var state_val_15037 = (state_15036[(1)]);
if((state_val_15037 === (1))){
var state_15036__$1 = state_15036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15036__$1,(2),cancel);
} else {
if((state_val_15037 === (2))){
var inst_15027 = (state_15036[(2)]);
var inst_15028 = xhr__$1.isComplete();
var inst_15029 = cljs.core.not(inst_15028);
var state_15036__$1 = (function (){var statearr_15038 = state_15036;
(statearr_15038[(7)] = inst_15027);

return statearr_15038;
})();
if(inst_15029){
var statearr_15039_15051 = state_15036__$1;
(statearr_15039_15051[(1)] = (3));

} else {
var statearr_15040_15052 = state_15036__$1;
(statearr_15040_15052[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (3))){
var inst_15031 = xhr__$1.abort();
var state_15036__$1 = state_15036;
var statearr_15041_15053 = state_15036__$1;
(statearr_15041_15053[(2)] = inst_15031);

(statearr_15041_15053[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (4))){
var state_15036__$1 = state_15036;
var statearr_15042_15054 = state_15036__$1;
(statearr_15042_15054[(2)] = null);

(statearr_15042_15054[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15037 === (5))){
var inst_15034 = (state_15036[(2)]);
var state_15036__$1 = state_15036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15036__$1,inst_15034);
} else {
return null;
}
}
}
}
}
});})(c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__12066__auto__,c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__12067__auto__ = null;
var cljs_http$core$xhr_$_state_machine__12067__auto____0 = (function (){
var statearr_15046 = [null,null,null,null,null,null,null,null];
(statearr_15046[(0)] = cljs_http$core$xhr_$_state_machine__12067__auto__);

(statearr_15046[(1)] = (1));

return statearr_15046;
});
var cljs_http$core$xhr_$_state_machine__12067__auto____1 = (function (state_15036){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_15036);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e15047){if((e15047 instanceof Object)){
var ex__12070__auto__ = e15047;
var statearr_15048_15055 = state_15036;
(statearr_15048_15055[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15036);

return cljs.core.cst$kw$recur;
} else {
throw e15047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__15056 = state_15036;
state_15036 = G__15056;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__12067__auto__ = function(state_15036){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__12067__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__12067__auto____1.call(this,state_15036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__12067__auto____0;
cljs_http$core$xhr_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__12067__auto____1;
return cljs_http$core$xhr_$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__12182__auto__ = (function (){var statearr_15049 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_15049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___15050);

return statearr_15049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___15050,channel,request_url,method,headers__$1,xhr__$1,map__15023,map__15023__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__15057){
var map__15074 = p__15057;
var map__15074__$1 = ((((!((map__15074 == null)))?((((map__15074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15074):map__15074);
var request = map__15074__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_15090 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_15090], null));

if(cljs.core.truth_(cancel)){
var c__12180__auto___15091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel){
return (function (state_15080){
var state_val_15081 = (state_15080[(1)]);
if((state_val_15081 === (1))){
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15080__$1,(2),cancel);
} else {
if((state_val_15081 === (2))){
var inst_15077 = (state_15080[(2)]);
var inst_15078 = jsonp__$1.cancel(req_15090);
var state_15080__$1 = (function (){var statearr_15082 = state_15080;
(statearr_15082[(7)] = inst_15077);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15080__$1,inst_15078);
} else {
return null;
}
}
});})(c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__12066__auto__,c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__12067__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__12067__auto____0 = (function (){
var statearr_15086 = [null,null,null,null,null,null,null,null];
(statearr_15086[(0)] = cljs_http$core$jsonp_$_state_machine__12067__auto__);

(statearr_15086[(1)] = (1));

return statearr_15086;
});
var cljs_http$core$jsonp_$_state_machine__12067__auto____1 = (function (state_15080){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_15080);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e15087){if((e15087 instanceof Object)){
var ex__12070__auto__ = e15087;
var statearr_15088_15092 = state_15080;
(statearr_15088_15092[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15080);

return cljs.core.cst$kw$recur;
} else {
throw e15087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__15093 = state_15080;
state_15080 = G__15093;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__12067__auto__ = function(state_15080){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__12067__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__12067__auto____1.call(this,state_15080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__12067__auto____0;
cljs_http$core$jsonp_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__12067__auto____1;
return cljs_http$core$jsonp_$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel))
})();
var state__12182__auto__ = (function (){var statearr_15089 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_15089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___15091);

return statearr_15089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___15091,req_15090,channel,jsonp__$1,map__15074,map__15074__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__15094){
var map__15097 = p__15094;
var map__15097__$1 = ((((!((map__15097 == null)))?((((map__15097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15097):map__15097);
var request__$1 = map__15097__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15097__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
