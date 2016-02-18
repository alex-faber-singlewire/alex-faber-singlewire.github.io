// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4582__auto__ = v;
if(cljs.core.truth_(and__4582__auto__)){
return (v > (0));
} else {
return and__4582__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20250_SHARP_,p2__20249_SHARP_){
var vec__20252 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__20249_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20250_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20253_SHARP_){
return cljs_http.client.encode_val(k,p1__20253_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20254){
var vec__20256 = p__20254;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__20257_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__20257_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4582__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__4582__auto__){
var and__4582__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__4582__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4582__auto____$1;
}
} else {
return and__4582__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20259) : client.call(null,G__20259));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__20260_SHARP_){
return cljs_http.client.decode_body(p1__20260_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20266 = arguments.length;
var i__5653__auto___20267 = (0);
while(true){
if((i__5653__auto___20267 < len__5652__auto___20266)){
args__5659__auto__.push((arguments[i__5653__auto___20267]));

var G__20268 = (i__5653__auto___20267 + (1));
i__5653__auto___20267 = G__20268;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20263){
var vec__20264 = p__20263;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20264,(0),null);
return ((function (vec__20264,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4594__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
var G__20265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20265) : client.call(null,G__20265));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20264,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20261){
var G__20262 = cljs.core.first(seq20261);
var seq20261__$1 = cljs.core.next(seq20261);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__20262,seq20261__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20274 = arguments.length;
var i__5653__auto___20275 = (0);
while(true){
if((i__5653__auto___20275 < len__5652__auto___20274)){
args__5659__auto__.push((arguments[i__5653__auto___20275]));

var G__20276 = (i__5653__auto___20275 + (1));
i__5653__auto___20275 = G__20276;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20271){
var vec__20272 = p__20271;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20272,(0),null);
return ((function (vec__20272,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4594__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
var G__20273 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20273) : client.call(null,G__20273));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20272,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20269){
var G__20270 = cljs.core.first(seq20269);
var seq20269__$1 = cljs.core.next(seq20269);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__20270,seq20269__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20282 = arguments.length;
var i__5653__auto___20283 = (0);
while(true){
if((i__5653__auto___20283 < len__5652__auto___20282)){
args__5659__auto__.push((arguments[i__5653__auto___20283]));

var G__20284 = (i__5653__auto___20283 + (1));
i__5653__auto___20283 = G__20284;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20279){
var vec__20280 = p__20279;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(0),null);
return ((function (vec__20280,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4594__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
var G__20281 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20281) : client.call(null,G__20281));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20280,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20277){
var G__20278 = cljs.core.first(seq20277);
var seq20277__$1 = cljs.core.next(seq20277);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__20278,seq20277__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__20288 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__20288__$1 = ((((!((map__20288 == null)))?((((map__20288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20288):map__20288);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20288__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20288__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20290 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20290) : client.call(null,G__20290));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__20295 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__20295__$1 = ((((!((map__20295 == null)))?((((map__20295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20295):map__20295);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20295__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20295__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__20295,map__20295__$1,decoding,decoding_opts){
return (function (p1__20291_SHARP_){
return cljs_http.util.transit_decode(p1__20291_SHARP_,decoding,decoding_opts);
});})(map__20295,map__20295__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__20295,map__20295__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20292_SHARP_){
return cljs_http.client.decode_body(p1__20292_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__20295,map__20295__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20298 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20298) : client.call(null,G__20298));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__20299_SHARP_){
return cljs_http.client.decode_body(p1__20299_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20304){
var map__20305 = p__20304;
var map__20305__$1 = ((((!((map__20305 == null)))?((((map__20305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20305):map__20305);
var req = map__20305__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20305__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__20307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20307) : client.call(null,G__20307));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20312){
var map__20313 = p__20312;
var map__20313__$1 = ((((!((map__20313 == null)))?((((map__20313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20313):map__20313);
var request = map__20313__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20313__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20313__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20313__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__4582__auto__ = form_params;
if(cljs.core.truth_(and__4582__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4582__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__20315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20315) : client.call(null,G__20315));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__20322_20328 = cljs.core.seq(params);
var chunk__20323_20329 = null;
var count__20324_20330 = (0);
var i__20325_20331 = (0);
while(true){
if((i__20325_20331 < count__20324_20330)){
var vec__20326_20332 = chunk__20323_20329.cljs$core$IIndexed$_nth$arity$2(null,i__20325_20331);
var k_20333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326_20332,(0),null);
var v_20334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326_20332,(1),null);
if(cljs.core.coll_QMARK_(v_20334)){
form_data.append(cljs.core.name(k_20333),cljs.core.first(v_20334),cljs.core.second(v_20334));
} else {
form_data.append(cljs.core.name(k_20333),v_20334);
}

var G__20335 = seq__20322_20328;
var G__20336 = chunk__20323_20329;
var G__20337 = count__20324_20330;
var G__20338 = (i__20325_20331 + (1));
seq__20322_20328 = G__20335;
chunk__20323_20329 = G__20336;
count__20324_20330 = G__20337;
i__20325_20331 = G__20338;
continue;
} else {
var temp__4425__auto___20339 = cljs.core.seq(seq__20322_20328);
if(temp__4425__auto___20339){
var seq__20322_20340__$1 = temp__4425__auto___20339;
if(cljs.core.chunked_seq_QMARK_(seq__20322_20340__$1)){
var c__5397__auto___20341 = cljs.core.chunk_first(seq__20322_20340__$1);
var G__20342 = cljs.core.chunk_rest(seq__20322_20340__$1);
var G__20343 = c__5397__auto___20341;
var G__20344 = cljs.core.count(c__5397__auto___20341);
var G__20345 = (0);
seq__20322_20328 = G__20342;
chunk__20323_20329 = G__20343;
count__20324_20330 = G__20344;
i__20325_20331 = G__20345;
continue;
} else {
var vec__20327_20346 = cljs.core.first(seq__20322_20340__$1);
var k_20347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20327_20346,(0),null);
var v_20348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20327_20346,(1),null);
if(cljs.core.coll_QMARK_(v_20348)){
form_data.append(cljs.core.name(k_20347),cljs.core.first(v_20348),cljs.core.second(v_20348));
} else {
form_data.append(cljs.core.name(k_20347),v_20348);
}

var G__20349 = cljs.core.next(seq__20322_20340__$1);
var G__20350 = null;
var G__20351 = (0);
var G__20352 = (0);
seq__20322_20328 = G__20349;
chunk__20323_20329 = G__20350;
count__20324_20330 = G__20351;
i__20325_20331 = G__20352;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__20357){
var map__20358 = p__20357;
var map__20358__$1 = ((((!((map__20358 == null)))?((((map__20358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20358):map__20358);
var request = map__20358__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20358__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20358__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__4582__auto__ = multipart_params;
if(cljs.core.truth_(and__4582__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4582__auto__;
}
})())){
var G__20360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20360) : client.call(null,G__20360));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var G__20362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20362) : client.call(null,G__20362));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20363_SHARP_){
var G__20365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20363_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20365) : client.call(null,G__20365));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20371){
var map__20372 = p__20371;
var map__20372__$1 = ((((!((map__20372 == null)))?((((map__20372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20372):map__20372);
var req = map__20372__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20372__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4423__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
var G__20374 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4423__auto__,map__20372,map__20372__$1,req,query_params){
return (function (p1__20366_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__20366_SHARP_,query_params], 0));
});})(spec,temp__4423__auto__,map__20372,map__20372__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20374) : client.call(null,G__20374));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20380 = arguments.length;
var i__5653__auto___20381 = (0);
while(true){
if((i__5653__auto___20381 < len__5652__auto___20380)){
args__5659__auto__.push((arguments[i__5653__auto___20381]));

var G__20382 = (i__5653__auto___20381 + (1));
i__5653__auto___20381 = G__20382;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20377){
var vec__20378 = p__20377;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378,(0),null);
return ((function (vec__20378,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4594__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__20379 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20379) : client.call(null,G__20379));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__20378,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20375){
var G__20376 = cljs.core.first(seq20375);
var seq20375__$1 = cljs.core.next(seq20375);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__20376,seq20375__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
var G__20384 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20384) : client.call(null,G__20384));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20390 = arguments.length;
var i__5653__auto___20391 = (0);
while(true){
if((i__5653__auto___20391 < len__5652__auto___20390)){
args__5659__auto__.push((arguments[i__5653__auto___20391]));

var G__20392 = (i__5653__auto___20391 + (1));
i__5653__auto___20391 = G__20392;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20387){
var vec__20388 = p__20387;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20388,(0),null);
var G__20389 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20389) : cljs_http.client.request.call(null,G__20389));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20385){
var G__20386 = cljs.core.first(seq20385);
var seq20385__$1 = cljs.core.next(seq20385);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__20386,seq20385__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20398 = arguments.length;
var i__5653__auto___20399 = (0);
while(true){
if((i__5653__auto___20399 < len__5652__auto___20398)){
args__5659__auto__.push((arguments[i__5653__auto___20399]));

var G__20400 = (i__5653__auto___20399 + (1));
i__5653__auto___20399 = G__20400;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20395){
var vec__20396 = p__20395;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20396,(0),null);
var G__20397 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20397) : cljs_http.client.request.call(null,G__20397));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq20393){
var G__20394 = cljs.core.first(seq20393);
var seq20393__$1 = cljs.core.next(seq20393);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__20394,seq20393__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20406 = arguments.length;
var i__5653__auto___20407 = (0);
while(true){
if((i__5653__auto___20407 < len__5652__auto___20406)){
args__5659__auto__.push((arguments[i__5653__auto___20407]));

var G__20408 = (i__5653__auto___20407 + (1));
i__5653__auto___20407 = G__20408;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20403){
var vec__20404 = p__20403;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,(0),null);
var G__20405 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20405) : cljs_http.client.request.call(null,G__20405));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq20401){
var G__20402 = cljs.core.first(seq20401);
var seq20401__$1 = cljs.core.next(seq20401);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__20402,seq20401__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20414 = arguments.length;
var i__5653__auto___20415 = (0);
while(true){
if((i__5653__auto___20415 < len__5652__auto___20414)){
args__5659__auto__.push((arguments[i__5653__auto___20415]));

var G__20416 = (i__5653__auto___20415 + (1));
i__5653__auto___20415 = G__20416;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20411){
var vec__20412 = p__20411;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,(0),null);
var G__20413 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20413) : cljs_http.client.request.call(null,G__20413));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq20409){
var G__20410 = cljs.core.first(seq20409);
var seq20409__$1 = cljs.core.next(seq20409);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__20410,seq20409__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20422 = arguments.length;
var i__5653__auto___20423 = (0);
while(true){
if((i__5653__auto___20423 < len__5652__auto___20422)){
args__5659__auto__.push((arguments[i__5653__auto___20423]));

var G__20424 = (i__5653__auto___20423 + (1));
i__5653__auto___20423 = G__20424;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20419){
var vec__20420 = p__20419;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,(0),null);
var G__20421 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20421) : cljs_http.client.request.call(null,G__20421));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq20417){
var G__20418 = cljs.core.first(seq20417);
var seq20417__$1 = cljs.core.next(seq20417);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__20418,seq20417__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20430 = arguments.length;
var i__5653__auto___20431 = (0);
while(true){
if((i__5653__auto___20431 < len__5652__auto___20430)){
args__5659__auto__.push((arguments[i__5653__auto___20431]));

var G__20432 = (i__5653__auto___20431 + (1));
i__5653__auto___20431 = G__20432;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20427){
var vec__20428 = p__20427;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(0),null);
var G__20429 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20429) : cljs_http.client.request.call(null,G__20429));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq20425){
var G__20426 = cljs.core.first(seq20425);
var seq20425__$1 = cljs.core.next(seq20425);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__20426,seq20425__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20438 = arguments.length;
var i__5653__auto___20439 = (0);
while(true){
if((i__5653__auto___20439 < len__5652__auto___20438)){
args__5659__auto__.push((arguments[i__5653__auto___20439]));

var G__20440 = (i__5653__auto___20439 + (1));
i__5653__auto___20439 = G__20440;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20435){
var vec__20436 = p__20435;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,(0),null);
var G__20437 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20437) : cljs_http.client.request.call(null,G__20437));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq20433){
var G__20434 = cljs.core.first(seq20433);
var seq20433__$1 = cljs.core.next(seq20433);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__20434,seq20433__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20446 = arguments.length;
var i__5653__auto___20447 = (0);
while(true){
if((i__5653__auto___20447 < len__5652__auto___20446)){
args__5659__auto__.push((arguments[i__5653__auto___20447]));

var G__20448 = (i__5653__auto___20447 + (1));
i__5653__auto___20447 = G__20448;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20443){
var vec__20444 = p__20443;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20444,(0),null);
var G__20445 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20445) : cljs_http.client.request.call(null,G__20445));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq20441){
var G__20442 = cljs.core.first(seq20441);
var seq20441__$1 = cljs.core.next(seq20441);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__20442,seq20441__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20454 = arguments.length;
var i__5653__auto___20455 = (0);
while(true){
if((i__5653__auto___20455 < len__5652__auto___20454)){
args__5659__auto__.push((arguments[i__5653__auto___20455]));

var G__20456 = (i__5653__auto___20455 + (1));
i__5653__auto___20455 = G__20456;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20451){
var vec__20452 = p__20451;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20452,(0),null);
var G__20453 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20453) : cljs_http.client.request.call(null,G__20453));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq20449){
var G__20450 = cljs.core.first(seq20449);
var seq20449__$1 = cljs.core.next(seq20449);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__20450,seq20449__$1);
});
