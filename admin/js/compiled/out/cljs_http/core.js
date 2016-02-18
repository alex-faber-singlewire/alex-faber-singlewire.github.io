// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__20650 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20650) : cljs.core.atom.call(null,G__20650));
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
return (function (p__20653){
var vec__20654 = p__20653;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20654,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20656 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__20656)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__20656)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__20656)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__20656)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__20656)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20656)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20657){
var map__20661 = p__20657;
var map__20661__$1 = ((((!((map__20661 == null)))?((((map__20661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20661):map__20661);
var request = map__20661__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20661__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4594__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20663 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__20663,default_headers);

cljs_http.core.apply_response_type_BANG_(G__20663,response_type);

G__20663.setTimeoutInterval(timeout);

G__20663.setWithCredentials(send_credentials);

return G__20663;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20664){
var map__20692 = p__20664;
var map__20692__$1 = ((((!((map__20692 == null)))?((((map__20692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20692):map__20692);
var request = map__20692__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20692__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4594__auto__ = request_method;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__20694 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__20694) : cljs_http.core.error_kw.call(null,G__20694));
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__8710__auto___20719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_20705){
var state_val_20706 = (state_20705[(1)]);
if((state_val_20706 === (1))){
var state_20705__$1 = state_20705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20705__$1,(2),cancel);
} else {
if((state_val_20706 === (2))){
var inst_20696 = (state_20705[(2)]);
var inst_20697 = xhr__$1.isComplete();
var inst_20698 = cljs.core.not(inst_20697);
var state_20705__$1 = (function (){var statearr_20707 = state_20705;
(statearr_20707[(7)] = inst_20696);

return statearr_20707;
})();
if(inst_20698){
var statearr_20708_20720 = state_20705__$1;
(statearr_20708_20720[(1)] = (3));

} else {
var statearr_20709_20721 = state_20705__$1;
(statearr_20709_20721[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20706 === (3))){
var inst_20700 = xhr__$1.abort();
var state_20705__$1 = state_20705;
var statearr_20710_20722 = state_20705__$1;
(statearr_20710_20722[(2)] = inst_20700);

(statearr_20710_20722[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20706 === (4))){
var state_20705__$1 = state_20705;
var statearr_20711_20723 = state_20705__$1;
(statearr_20711_20723[(2)] = null);

(statearr_20711_20723[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20706 === (5))){
var inst_20703 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20705__$1,inst_20703);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__8643__auto__,c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__8644__auto__ = null;
var cljs_http$core$xhr_$_state_machine__8644__auto____0 = (function (){
var statearr_20715 = [null,null,null,null,null,null,null,null];
(statearr_20715[(0)] = cljs_http$core$xhr_$_state_machine__8644__auto__);

(statearr_20715[(1)] = (1));

return statearr_20715;
});
var cljs_http$core$xhr_$_state_machine__8644__auto____1 = (function (state_20705){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_20705);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e20716){if((e20716 instanceof Object)){
var ex__8647__auto__ = e20716;
var statearr_20717_20724 = state_20705;
(statearr_20717_20724[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20705);

return cljs.core.cst$kw$recur;
} else {
throw e20716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__20725 = state_20705;
state_20705 = G__20725;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__8644__auto__ = function(state_20705){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__8644__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__8644__auto____1.call(this,state_20705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__8644__auto____0;
cljs_http$core$xhr_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__8644__auto____1;
return cljs_http$core$xhr_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__8712__auto__ = (function (){var statearr_20718 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_20718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___20719);

return statearr_20718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___20719,channel,request_url,method,headers__$1,xhr__$1,map__20692,map__20692__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20726){
var map__20743 = p__20726;
var map__20743__$1 = ((((!((map__20743 == null)))?((((map__20743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20743):map__20743);
var request = map__20743__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_20759 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_20759], null));

if(cljs.core.truth_(cancel)){
var c__8710__auto___20760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel){
return (function (state_20749){
var state_val_20750 = (state_20749[(1)]);
if((state_val_20750 === (1))){
var state_20749__$1 = state_20749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20749__$1,(2),cancel);
} else {
if((state_val_20750 === (2))){
var inst_20746 = (state_20749[(2)]);
var inst_20747 = jsonp__$1.cancel(req_20759);
var state_20749__$1 = (function (){var statearr_20751 = state_20749;
(statearr_20751[(7)] = inst_20746);

return statearr_20751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20749__$1,inst_20747);
} else {
return null;
}
}
});})(c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__8643__auto__,c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__8644__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__8644__auto____0 = (function (){
var statearr_20755 = [null,null,null,null,null,null,null,null];
(statearr_20755[(0)] = cljs_http$core$jsonp_$_state_machine__8644__auto__);

(statearr_20755[(1)] = (1));

return statearr_20755;
});
var cljs_http$core$jsonp_$_state_machine__8644__auto____1 = (function (state_20749){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_20749);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e20756){if((e20756 instanceof Object)){
var ex__8647__auto__ = e20756;
var statearr_20757_20761 = state_20749;
(statearr_20757_20761[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20749);

return cljs.core.cst$kw$recur;
} else {
throw e20756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__20762 = state_20749;
state_20749 = G__20762;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__8644__auto__ = function(state_20749){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__8644__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__8644__auto____1.call(this,state_20749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__8644__auto____0;
cljs_http$core$jsonp_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__8644__auto____1;
return cljs_http$core$jsonp_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel))
})();
var state__8712__auto__ = (function (){var statearr_20758 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_20758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___20760);

return statearr_20758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___20760,req_20759,channel,jsonp__$1,map__20743,map__20743__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20763){
var map__20766 = p__20763;
var map__20766__$1 = ((((!((map__20766 == null)))?((((map__20766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20766):map__20766);
var request__$1 = map__20766__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
