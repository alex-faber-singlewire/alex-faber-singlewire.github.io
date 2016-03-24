// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = {};

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$7 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$7(this$,uri,method,body,headers,handler,opts) : m__5163__auto__.call(null,this$,uri,method,body,headers,handler,opts));
} else {
var m__5163__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$7 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$7(this$,uri,method,body,headers,handler,opts) : m__5163__auto____$1.call(null,this$,uri,method,body,headers,handler,opts));
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = {};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._abort[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto__.call(null,this$));
} else {
var m__5163__auto____$1 = (ajax.core._abort["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = {};


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = {};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._status[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto__.call(null,this$));
} else {
var m__5163__auto____$1 = (ajax.core._status["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._status_text[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto__.call(null,this$));
} else {
var m__5163__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format
 * such as a blob or arraybuffer.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._body[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto__.call(null,this$));
} else {
var m__5163__auto____$1 = (ajax.core._body["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._get_response_header[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5163__auto__.call(null,this$,header));
} else {
var m__5163__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5163__auto____$1.call(null,this$,header));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (ajax.core._was_aborted[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return (m__5163__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto__.call(null,this$));
} else {
var m__5163__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__5163__auto____$1 == null))){
return (m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5163__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5163__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__4526__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,params));
if(or__4526__auto__){
return or__4526__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9961){
var map__9962 = p__9961;
var map__9962__$1 = ((((!((map__9962 == null)))?((((map__9962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9962):map__9962);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9962__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9962__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var this$__$1 = this;
var G__9964 = this$__$1;
var G__9966_9970 = G__9964;
var G__9967_9971 = goog.net.EventType.COMPLETE;
var G__9968_9972 = ((function (G__9966_9970,G__9967_9971,G__9964,this$__$1,map__9962,map__9962__$1,timeout,with_credentials){
return (function (p1__9960_SHARP_){
var G__9969 = p1__9960_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__9969) : handler.call(null,G__9969));
});})(G__9966_9970,G__9967_9971,G__9964,this$__$1,map__9962,map__9962__$1,timeout,with_credentials))
;
goog.events.listen(G__9966_9970,G__9967_9971,G__9968_9972);

G__9964.setTimeoutInterval(timeout);

G__9964.setWithCredentials(with_credentials);

G__9964.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__9964;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9974){
var map__9975 = p__9974;
var map__9975__$1 = ((((!((map__9975 == null)))?((((map__9975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9975):map__9975);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9975__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9975__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9975__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9975,map__9975__$1,timeout,with_credentials,response_format){
return (function (p1__9973_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.core.ready_state(p1__9973_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__9975,map__9975__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

var temp__4425__auto___9983 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___9983)){
var response_type_9984 = temp__4425__auto___9983;
this$__$1.responseType = cljs.core.name(response_type_9984);
} else {
}

var seq__9977_9985 = cljs.core.seq(headers);
var chunk__9978_9986 = null;
var count__9979_9987 = (0);
var i__9980_9988 = (0);
while(true){
if((i__9980_9988 < count__9979_9987)){
var vec__9981_9989 = chunk__9978_9986.cljs$core$IIndexed$_nth$arity$2(null,i__9980_9988);
var k_9990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9981_9989,(0),null);
var v_9991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9981_9989,(1),null);
this$__$1.setRequestHeader(k_9990,v_9991);

var G__9992 = seq__9977_9985;
var G__9993 = chunk__9978_9986;
var G__9994 = count__9979_9987;
var G__9995 = (i__9980_9988 + (1));
seq__9977_9985 = G__9992;
chunk__9978_9986 = G__9993;
count__9979_9987 = G__9994;
i__9980_9988 = G__9995;
continue;
} else {
var temp__4425__auto___9996 = cljs.core.seq(seq__9977_9985);
if(temp__4425__auto___9996){
var seq__9977_9997__$1 = temp__4425__auto___9996;
if(cljs.core.chunked_seq_QMARK_(seq__9977_9997__$1)){
var c__5310__auto___9998 = cljs.core.chunk_first(seq__9977_9997__$1);
var G__9999 = cljs.core.chunk_rest(seq__9977_9997__$1);
var G__10000 = c__5310__auto___9998;
var G__10001 = cljs.core.count(c__5310__auto___9998);
var G__10002 = (0);
seq__9977_9985 = G__9999;
chunk__9978_9986 = G__10000;
count__9979_9987 = G__10001;
i__9980_9988 = G__10002;
continue;
} else {
var vec__9982_10003 = cljs.core.first(seq__9977_9997__$1);
var k_10004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9982_10003,(0),null);
var v_10005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9982_10003,(1),null);
this$__$1.setRequestHeader(k_10004,v_10005);

var G__10006 = cljs.core.next(seq__9977_9997__$1);
var G__10007 = null;
var G__10008 = (0);
var G__10009 = (0);
seq__9977_9985 = G__10006;
chunk__9978_9986 = G__10007;
count__9979_9987 = G__10008;
i__9980_9988 = G__10009;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4526__auto__ = body;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__10010){
var map__10011 = p__10010;
var map__10011__$1 = ((((!((map__10011 == null)))?((((map__10011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10011):map__10011);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10011__$1,cljs.core.cst$kw$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10011__$1,cljs.core.cst$kw$timeout);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10011__$1,cljs.core.cst$kw$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10011__$1,cljs.core.cst$kw$max_DASH_retries);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string(ajax.core._body(xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var args10013 = [];
var len__5565__auto___10016 = arguments.length;
var i__5566__auto___10017 = (0);
while(true){
if((i__5566__auto___10017 < len__5565__auto___10016)){
args10013.push((arguments[i__5566__auto___10017]));

var G__10018 = (i__5566__auto___10017 + (1));
i__5566__auto___10017 = G__10018;
continue;
} else {
}
break;
}

var G__10015 = args10013.length;
switch (G__10015) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10013.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.read_edn,cljs.core.cst$kw$description,"EDN",cljs.core.cst$kw$content_DASH_type,"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,cljs.core.pr_str,cljs.core.cst$kw$content_DASH_type,"application/edn"], null);
});
ajax.core.transit_write = (function ajax$core$transit_write(){
var args10020 = [];
var len__5565__auto___10023 = arguments.length;
var i__5566__auto___10024 = (0);
while(true){
if((i__5566__auto___10024 < len__5565__auto___10023)){
args10020.push((arguments[i__5566__auto___10024]));

var G__10025 = (i__5566__auto___10024 + (1));
i__5566__auto___10024 = G__10025;
continue;
} else {
}
break;
}

var G__10022 = args10020.length;
switch (G__10022) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10020.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var args10027 = [];
var len__5565__auto___10033 = arguments.length;
var i__5566__auto___10034 = (0);
while(true){
if((i__5566__auto___10034 < len__5565__auto___10033)){
args10027.push((arguments[i__5566__auto___10034]));

var G__10035 = (i__5566__auto___10034 + (1));
i__5566__auto___10034 = G__10035;
continue;
} else {
}
break;
}

var G__10029 = args10027.length;
switch (G__10029) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10027.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__10030){
var map__10031 = p__10030;
var map__10031__$1 = ((((!((map__10031 == null)))?((((map__10031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10031):map__10031);
var opts = map__10031__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10031__$1,cljs.core.cst$kw$type);
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10031__$1,cljs.core.cst$kw$writer);
var writer__$1 = (function (){var or__4526__auto__ = writer;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__4526__auto____$1 = type;
if(cljs.core.truth_(or__4526__auto____$1)){
return or__4526__auto____$1;
} else {
return cljs.core.cst$kw$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.cst$kw$content_DASH_type,"application/transit+json"], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var args10037 = [];
var len__5565__auto___10040 = arguments.length;
var i__5566__auto___10041 = (0);
while(true){
if((i__5566__auto___10041 < len__5565__auto___10040)){
args10037.push((arguments[i__5566__auto___10041]));

var G__10042 = (i__5566__auto___10041 + (1));
i__5566__auto___10041 = G__10042;
continue;
} else {
}
break;
}

var G__10039 = args10037.length;
switch (G__10039) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10037.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var args10044 = [];
var len__5565__auto___10050 = arguments.length;
var i__5566__auto___10051 = (0);
while(true){
if((i__5566__auto___10051 < len__5565__auto___10050)){
args10044.push((arguments[i__5566__auto___10051]));

var G__10052 = (i__5566__auto___10051 + (1));
i__5566__auto___10051 = G__10052;
continue;
} else {
}
break;
}

var G__10046 = args10044.length;
switch (G__10046) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10044.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__10047){
var map__10048 = p__10047;
var map__10048__$1 = ((((!((map__10048 == null)))?((((map__10048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10048):map__10048);
var opts = map__10048__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10048__$1,cljs.core.cst$kw$type);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10048__$1,cljs.core.cst$kw$reader);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10048__$1,cljs.core.cst$kw$raw);
var reader__$1 = (function (){var or__4526__auto__ = reader;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__4526__auto____$1 = type;
if(cljs.core.truth_(or__4526__auto____$1)){
return or__4526__auto____$1;
} else {
return cljs.core.cst$kw$json;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__10055 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__10055);
})().toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.params_to_str,cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var args10056 = [];
var len__5565__auto___10059 = arguments.length;
var i__5566__auto___10060 = (0);
while(true){
if((i__5566__auto___10060 < len__5565__auto___10059)){
args10056.push((arguments[i__5566__auto___10060]));

var G__10061 = (i__5566__auto___10060 + (1));
i__5566__auto___10060 = G__10061;
continue;
} else {
}
break;
}

var G__10058 = args10056.length;
switch (G__10058) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10056.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var args10063 = [];
var len__5565__auto___10066 = arguments.length;
var i__5566__auto___10067 = (0);
while(true){
if((i__5566__auto___10067 < len__5565__auto___10066)){
args10063.push((arguments[i__5566__auto___10067]));

var G__10068 = (i__5566__auto___10067 + (1));
i__5566__auto___10067 = G__10068;
continue;
} else {
}
break;
}

var G__10065 = args10063.length;
switch (G__10065) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10063.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4514__auto__ = prefix;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4514__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4514__auto__ = prefix;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4514__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4514__auto__ = prefix;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4514__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__4514__auto__ = prefix;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__4514__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var args10070 = [];
var len__5565__auto___10076 = arguments.length;
var i__5566__auto___10077 = (0);
while(true){
if((i__5566__auto___10077 < len__5565__auto___10076)){
args10070.push((arguments[i__5566__auto___10077]));

var G__10078 = (i__5566__auto___10077 + (1));
i__5566__auto___10077 = G__10078;
continue;
} else {
}
break;
}

var G__10072 = args10070.length;
switch (G__10072) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10070.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__10073){
var map__10074 = p__10073;
var map__10074__$1 = ((((!((map__10074 == null)))?((((map__10074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10074):map__10074);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10074__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10074__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10074__$1,cljs.core.cst$kw$raw);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var args10080 = [];
var len__5565__auto___10083 = arguments.length;
var i__5566__auto___10084 = (0);
while(true){
if((i__5566__auto___10084 < len__5565__auto___10083)){
args10080.push((arguments[i__5566__auto___10084]));

var G__10085 = (i__5566__auto___10084 + (1));
i__5566__auto___10084 = G__10085;
continue;
} else {
}
break;
}

var G__10082 = args10080.length;
switch (G__10082) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10080.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(opts) : format_entry.call(null,opts));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(opts) : format_entry.call(null,opts));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var args10087 = [];
var len__5565__auto___10090 = arguments.length;
var i__5566__auto___10091 = (0);
while(true){
if((i__5566__auto___10091 < len__5565__auto___10090)){
args10087.push((arguments[i__5566__auto___10091]));

var G__10092 = (i__5566__auto___10091 + (1));
i__5566__auto___10091 = G__10092;
continue;
} else {
}
break;
}

var G__10089 = args10087.length;
switch (G__10089) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10087.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__4526__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__4526__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var args10094 = [];
var len__5565__auto___10097 = arguments.length;
var i__5566__auto___10098 = (0);
while(true){
if((i__5566__auto___10098 < len__5565__auto___10097)){
args10094.push((arguments[i__5566__auto___10098]));

var G__10099 = (i__5566__auto___10098 + (1));
i__5566__auto___10098 = G__10099;
continue;
} else {
}
break;
}

var G__10096 = args10094.length;
switch (G__10096) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10094.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__10101){
var map__10104 = p__10101;
var map__10104__$1 = ((((!((map__10104 == null)))?((((map__10104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10104):map__10104);
var opts = map__10104__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10104__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((function (){var or__4526__auto__ = ajax.core._get_response_header(xhrio,"Content-Type");
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var args10106 = [];
var len__5565__auto___10109 = arguments.length;
var i__5566__auto___10110 = (0);
while(true){
if((i__5566__auto___10110 < len__5565__auto___10109)){
args10106.push((arguments[i__5566__auto___10110]));

var G__10111 = (i__5566__auto___10110 + (1));
i__5566__auto___10110 = G__10111;
continue;
} else {
}
break;
}

var G__10108 = args10106.length;
switch (G__10108) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10106.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__10113){
var map__10116 = p__10113;
var map__10116__$1 = ((((!((map__10116 == null)))?((((map__10116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10116):map__10116);
var opts = map__10116__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10116__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1(opts),response_format));
} else {
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var args10118 = [];
var len__5565__auto___10121 = arguments.length;
var i__5566__auto___10122 = (0);
while(true){
if((i__5566__auto___10122 < len__5565__auto___10121)){
args10118.push((arguments[i__5566__auto___10122]));

var G__10123 = (i__5566__auto___10122 + (1));
i__5566__auto___10122 = G__10123;
continue;
} else {
}
break;
}

var G__10120 = args10118.length;
switch (G__10120) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10118.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__10125){
var map__10128 = p__10125;
var map__10128__$1 = ((((!((map__10128 == null)))?((((map__10128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10128):map__10128);
var opts = map__10128__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10128__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__10130,xhrio){
var map__10133 = p__10130;
var map__10133__$1 = ((((!((map__10133 == null)))?((((map__10133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10133):map__10133);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.array_seq([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.core._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.core._status_text(xhrio),cljs.core.array_seq([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(){
var args__5572__auto__ = [];
var len__5565__auto___10139 = arguments.length;
var i__5566__auto___10140 = (0);
while(true){
if((i__5566__auto___10140 < len__5565__auto___10139)){
args__5572__auto__.push((arguments[i__5566__auto___10140]));

var G__10141 = (i__5566__auto___10140 + (1));
i__5566__auto___10140 = G__10141;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((3) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5573__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq10135){
var G__10136 = cljs.core.first(seq10135);
var seq10135__$1 = cljs.core.next(seq10135);
var G__10137 = cljs.core.first(seq10135__$1);
var seq10135__$2 = cljs.core.next(seq10135__$1);
var G__10138 = cljs.core.first(seq10135__$2);
var seq10135__$3 = cljs.core.next(seq10135__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__10136,G__10137,G__10138,seq10135__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__10142,xhrio){
var map__10151 = p__10142;
var map__10151__$1 = ((((!((map__10151 == null)))?((((map__10151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10151):map__10151);
var format = map__10151__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10151__$1,cljs.core.cst$kw$read);
try{var status = ajax.core._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted(xhrio))){
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request aborted by client.",cljs.core.cst$kw$aborted) : fail.call(null,"Request aborted by client.",cljs.core.cst$kw$aborted));
} else {
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2("Request timed out.",cljs.core.cst$kw$timeout) : fail.call(null,"Request timed out.",cljs.core.cst$kw$timeout));
}
} else {
try{var response = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(xhrio) : read.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__10155 = ajax.core._status_text(xhrio);
var G__10156 = cljs.core.cst$kw$error;
var G__10157 = cljs.core.cst$kw$response;
var G__10158 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__10155,G__10156,G__10157,G__10158) : fail.call(null,G__10155,G__10156,G__10157,G__10158));
}
}catch (e10154){if((e10154 instanceof Object)){
var e = e10154;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e10154;

}
}}
}catch (e10153){if((e10153 instanceof Object)){
var e = e10153;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.cst$kw$exception,cljs.core.array_seq([cljs.core.cst$kw$exception,e], 0));
} else {
throw e10153;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
if(cljs.core.truth_(cljs.core.re_find(/\?/,uri))){
return [cljs.core.str(uri),cljs.core.str("&"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
}
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__10159,p__10160){
var map__10167 = p__10159;
var map__10167__$1 = ((((!((map__10167 == null)))?((((map__10167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10167):map__10167);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,cljs.core.cst$kw$headers);
var map__10168 = p__10160;
var map__10168__$1 = ((((!((map__10168 == null)))?((((map__10168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10168):map__10168);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10168__$1,cljs.core.cst$kw$content_DASH_type);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__4526__auto__ = headers;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers__$1], null);
} else {
var map__10171 = ajax.core.get_request_format(format);
var map__10171__$1 = ((((!((map__10171 == null)))?((((map__10171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10171):map__10171);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10171__$1,cljs.core.cst$kw$write);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10171__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?(write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params)):(cljs.core.truth_(ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([headers__$1,content_type__$2], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var args10173 = [];
var len__5565__auto___10176 = arguments.length;
var i__5566__auto___10177 = (0);
while(true){
if((i__5566__auto___10177 < len__5565__auto___10176)){
args10173.push((arguments[i__5566__auto___10177]));

var G__10178 = (i__5566__auto___10177 + (1));
i__5566__auto___10177 = G__10178;
continue;
} else {
}
break;
}

var G__10175 = args10173.length;
switch (G__10175) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10173.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(response) : handler.call(null,response));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(response) : handler.call(null,response));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(response) : handler.call(null,response));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__10180){
var map__10183 = p__10180;
var map__10183__$1 = ((((!((map__10183 == null)))?((((map__10183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10183):map__10183);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10183__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__10185){
var map__10189 = p__10185;
var map__10189__$1 = ((((!((map__10189 == null)))?((((map__10189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10189):map__10189);
var opts = map__10189__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10189__$1,cljs.core.cst$kw$method);
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10189__$1,cljs.core.cst$kw$api);
var response_format = ajax.core.get_response_format(opts);
var method__$1 = ajax.core.normalize_method(method);
var vec__10191 = ajax.core.process_inputs(opts,response_format);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(2),null);
var handler = ajax.core.base_handler(response_format,opts);
var api__$1 = (function (){var or__4526__auto__ = api;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request(api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__10193 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__10193) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),ajax$core$keyword_response_format_2(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__10198 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__10198) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10200_SHARP_){
return ajax.core.keyword_response_format_2(p1__10200_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2(format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var args10201 = [];
var len__5565__auto___10214 = arguments.length;
var i__5566__auto___10215 = (0);
while(true){
if((i__5566__auto___10215 < len__5565__auto___10214)){
args10201.push((arguments[i__5566__auto___10215]));

var G__10216 = (i__5566__auto___10215 + (1));
i__5566__auto___10215 = G__10216;
continue;
} else {
}
break;
}

var G__10203 = args10201.length;
switch (G__10203) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10201.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__10204,p__10205){
var map__10206 = p__10204;
var map__10206__$1 = ((((!((map__10206 == null)))?((((map__10206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10206):map__10206);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10206__$1,cljs.core.cst$kw$finally);
var vec__10207 = p__10205;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10207,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10207,(1),null);
var temp__4423__auto___10218 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___10218)){
var h_10219 = temp__4423__auto___10218;
(h_10219.cljs$core$IFn$_invoke$arity$1 ? h_10219.cljs$core$IFn$_invoke$arity$1(result) : h_10219.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__10209){
var map__10210 = p__10209;
var map__10210__$1 = ((((!((map__10210 == null)))?((((map__10210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10210):map__10210);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10210__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10210__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10210__$1,cljs.core.cst$kw$finally);
return ((function (map__10210,map__10210__$1,handler,error_handler,finally$){
return (function (p__10212){
var vec__10213 = p__10212;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,(1),null);
var temp__4423__auto___10220 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___10220)){
var h_10221 = temp__4423__auto___10220;
(h_10221.cljs$core$IFn$_invoke$arity$1 ? h_10221.cljs$core$IFn$_invoke$arity$1(result) : h_10221.call(null,result));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__10210,map__10210__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__10222){
var map__10225 = p__10222;
var map__10225__$1 = ((((!((map__10225 == null)))?((((map__10225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10225):map__10225);
var opts = map__10225__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.cst$kw$params);

var needs_format = cljs.core.not((function (){var or__4526__auto__ = ajax.core.submittable_QMARK_(params);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__4526__auto__ = format;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.array_seq([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var args__5572__auto__ = [];
var len__5565__auto___10229 = arguments.length;
var i__5566__auto___10230 = (0);
while(true){
if((i__5566__auto___10230 < len__5565__auto___10229)){
args__5572__auto__.push((arguments[i__5566__auto___10230]));

var G__10231 = (i__5566__auto___10230 + (1));
i__5566__auto___10230 = G__10231;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq10227){
var G__10228 = cljs.core.first(seq10227);
var seq10227__$1 = cljs.core.next(seq10227);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__10228,seq10227__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var args__5572__auto__ = [];
var len__5565__auto___10234 = arguments.length;
var i__5566__auto___10235 = (0);
while(true){
if((i__5566__auto___10235 < len__5565__auto___10234)){
args__5572__auto__.push((arguments[i__5566__auto___10235]));

var G__10236 = (i__5566__auto___10235 + (1));
i__5566__auto___10235 = G__10236;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq10232){
var G__10233 = cljs.core.first(seq10232);
var seq10232__$1 = cljs.core.next(seq10232);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__10233,seq10232__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var args__5572__auto__ = [];
var len__5565__auto___10239 = arguments.length;
var i__5566__auto___10240 = (0);
while(true){
if((i__5566__auto___10240 < len__5565__auto___10239)){
args__5572__auto__.push((arguments[i__5566__auto___10240]));

var G__10241 = (i__5566__auto___10240 + (1));
i__5566__auto___10240 = G__10241;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq10237){
var G__10238 = cljs.core.first(seq10237);
var seq10237__$1 = cljs.core.next(seq10237);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__10238,seq10237__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var args__5572__auto__ = [];
var len__5565__auto___10244 = arguments.length;
var i__5566__auto___10245 = (0);
while(true){
if((i__5566__auto___10245 < len__5565__auto___10244)){
args__5572__auto__.push((arguments[i__5566__auto___10245]));

var G__10246 = (i__5566__auto___10245 + (1));
i__5566__auto___10245 = G__10246;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq10242){
var G__10243 = cljs.core.first(seq10242);
var seq10242__$1 = cljs.core.next(seq10242);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__10243,seq10242__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var args__5572__auto__ = [];
var len__5565__auto___10249 = arguments.length;
var i__5566__auto___10250 = (0);
while(true){
if((i__5566__auto___10250 < len__5565__auto___10249)){
args__5572__auto__.push((arguments[i__5566__auto___10250]));

var G__10251 = (i__5566__auto___10250 + (1));
i__5566__auto___10250 = G__10251;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq10247){
var G__10248 = cljs.core.first(seq10247);
var seq10247__$1 = cljs.core.next(seq10247);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__10248,seq10247__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var args__5572__auto__ = [];
var len__5565__auto___10254 = arguments.length;
var i__5566__auto___10255 = (0);
while(true){
if((i__5566__auto___10255 < len__5565__auto___10254)){
args__5572__auto__.push((arguments[i__5566__auto___10255]));

var G__10256 = (i__5566__auto___10255 + (1));
i__5566__auto___10255 = G__10256;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq10252){
var G__10253 = cljs.core.first(seq10252);
var seq10252__$1 = cljs.core.next(seq10252);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__10253,seq10252__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var args__5572__auto__ = [];
var len__5565__auto___10259 = arguments.length;
var i__5566__auto___10260 = (0);
while(true){
if((i__5566__auto___10260 < len__5565__auto___10259)){
args__5572__auto__.push((arguments[i__5566__auto___10260]));

var G__10261 = (i__5566__auto___10260 + (1));
i__5566__auto___10260 = G__10261;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq10257){
var G__10258 = cljs.core.first(seq10257);
var seq10257__$1 = cljs.core.next(seq10257);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__10258,seq10257__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(){
var args__5572__auto__ = [];
var len__5565__auto___10264 = arguments.length;
var i__5566__auto___10265 = (0);
while(true){
if((i__5566__auto___10265 < len__5565__auto___10264)){
args__5572__auto__.push((arguments[i__5566__auto___10265]));

var G__10266 = (i__5566__auto___10265 + (1));
i__5566__auto___10265 = G__10266;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__7402__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__7402__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__7402__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq10262){
var G__10263 = cljs.core.first(seq10262);
var seq10262__$1 = cljs.core.next(seq10262);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__10263,seq10262__$1);
});
