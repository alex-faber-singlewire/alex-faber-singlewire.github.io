// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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
if(cljs.core.truth_((function (){var and__4656__auto__ = v;
if(cljs.core.truth_(and__4656__auto__)){
return (v > (0));
} else {
return and__4656__auto__;
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
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19055_SHARP_,p2__19054_SHARP_){
var vec__19057 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__19054_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19055_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19058_SHARP_){
return cljs_http.client.encode_val(k,p1__19058_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__19059){
var vec__19061 = p__19059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(1),null);
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
return (function (p1__19062_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__19062_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__4656__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
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
var G__19064 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19064) : client.call(null,G__19064));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__19065_SHARP_){
return cljs_http.client.decode_body(p1__19065_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19071 = arguments.length;
var i__5727__auto___19072 = (0);
while(true){
if((i__5727__auto___19072 < len__5726__auto___19071)){
args__5733__auto__.push((arguments[i__5727__auto___19072]));

var G__19073 = (i__5727__auto___19072 + (1));
i__5727__auto___19072 = G__19073;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19068){
var vec__19069 = p__19068;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19069,(0),null);
return ((function (vec__19069,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
var G__19070 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19070) : client.call(null,G__19070));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__19069,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq19066){
var G__19067 = cljs.core.first(seq19066);
var seq19066__$1 = cljs.core.next(seq19066);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__19067,seq19066__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19079 = arguments.length;
var i__5727__auto___19080 = (0);
while(true){
if((i__5727__auto___19080 < len__5726__auto___19079)){
args__5733__auto__.push((arguments[i__5727__auto___19080]));

var G__19081 = (i__5727__auto___19080 + (1));
i__5727__auto___19080 = G__19081;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19076){
var vec__19077 = p__19076;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19077,(0),null);
return ((function (vec__19077,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
var G__19078 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19078) : client.call(null,G__19078));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__19077,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq19074){
var G__19075 = cljs.core.first(seq19074);
var seq19074__$1 = cljs.core.next(seq19074);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__19075,seq19074__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19087 = arguments.length;
var i__5727__auto___19088 = (0);
while(true){
if((i__5727__auto___19088 < len__5726__auto___19087)){
args__5733__auto__.push((arguments[i__5727__auto___19088]));

var G__19089 = (i__5727__auto___19088 + (1));
i__5727__auto___19088 = G__19089;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19084){
var vec__19085 = p__19084;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19085,(0),null);
return ((function (vec__19085,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4668__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
var G__19086 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19086) : client.call(null,G__19086));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__19085,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq19082){
var G__19083 = cljs.core.first(seq19082);
var seq19082__$1 = cljs.core.next(seq19082);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__19083,seq19082__$1);
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
var map__19093 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__19093__$1 = ((((!((map__19093 == null)))?((((map__19093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19093):map__19093);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19093__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19093__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__19095 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19095) : client.call(null,G__19095));
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
var map__19100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__19100__$1 = ((((!((map__19100 == null)))?((((map__19100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19100):map__19100);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__19100,map__19100__$1,decoding,decoding_opts){
return (function (p1__19096_SHARP_){
return cljs_http.util.transit_decode(p1__19096_SHARP_,decoding,decoding_opts);
});})(map__19100,map__19100__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__19100,map__19100__$1,decoding,decoding_opts,transit_decode){
return (function (p1__19097_SHARP_){
return cljs_http.client.decode_body(p1__19097_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__19100,map__19100__$1,decoding,decoding_opts,transit_decode))
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
var G__19103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19103) : client.call(null,G__19103));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__19104_SHARP_){
return cljs_http.client.decode_body(p1__19104_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__19109){
var map__19110 = p__19109;
var map__19110__$1 = ((((!((map__19110 == null)))?((((map__19110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19110):map__19110);
var req = map__19110__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__19112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19112) : client.call(null,G__19112));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__19117){
var map__19118 = p__19117;
var map__19118__$1 = ((((!((map__19118 == null)))?((((map__19118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19118):map__19118);
var request = map__19118__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__4656__auto__ = form_params;
if(cljs.core.truth_(and__4656__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4656__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__19120 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19120) : client.call(null,G__19120));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__19127_19133 = cljs.core.seq(params);
var chunk__19128_19134 = null;
var count__19129_19135 = (0);
var i__19130_19136 = (0);
while(true){
if((i__19130_19136 < count__19129_19135)){
var vec__19131_19137 = chunk__19128_19134.cljs$core$IIndexed$_nth$arity$2(null,i__19130_19136);
var k_19138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19137,(0),null);
var v_19139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19137,(1),null);
if(cljs.core.coll_QMARK_(v_19139)){
form_data.append(cljs.core.name(k_19138),cljs.core.first(v_19139),cljs.core.second(v_19139));
} else {
form_data.append(cljs.core.name(k_19138),v_19139);
}

var G__19140 = seq__19127_19133;
var G__19141 = chunk__19128_19134;
var G__19142 = count__19129_19135;
var G__19143 = (i__19130_19136 + (1));
seq__19127_19133 = G__19140;
chunk__19128_19134 = G__19141;
count__19129_19135 = G__19142;
i__19130_19136 = G__19143;
continue;
} else {
var temp__4425__auto___19144 = cljs.core.seq(seq__19127_19133);
if(temp__4425__auto___19144){
var seq__19127_19145__$1 = temp__4425__auto___19144;
if(cljs.core.chunked_seq_QMARK_(seq__19127_19145__$1)){
var c__5471__auto___19146 = cljs.core.chunk_first(seq__19127_19145__$1);
var G__19147 = cljs.core.chunk_rest(seq__19127_19145__$1);
var G__19148 = c__5471__auto___19146;
var G__19149 = cljs.core.count(c__5471__auto___19146);
var G__19150 = (0);
seq__19127_19133 = G__19147;
chunk__19128_19134 = G__19148;
count__19129_19135 = G__19149;
i__19130_19136 = G__19150;
continue;
} else {
var vec__19132_19151 = cljs.core.first(seq__19127_19145__$1);
var k_19152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132_19151,(0),null);
var v_19153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19132_19151,(1),null);
if(cljs.core.coll_QMARK_(v_19153)){
form_data.append(cljs.core.name(k_19152),cljs.core.first(v_19153),cljs.core.second(v_19153));
} else {
form_data.append(cljs.core.name(k_19152),v_19153);
}

var G__19154 = cljs.core.next(seq__19127_19145__$1);
var G__19155 = null;
var G__19156 = (0);
var G__19157 = (0);
seq__19127_19133 = G__19154;
chunk__19128_19134 = G__19155;
count__19129_19135 = G__19156;
i__19130_19136 = G__19157;
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
return (function (p__19162){
var map__19163 = p__19162;
var map__19163__$1 = ((((!((map__19163 == null)))?((((map__19163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19163):map__19163);
var request = map__19163__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__4656__auto__ = multipart_params;
if(cljs.core.truth_(and__4656__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__4656__auto__;
}
})())){
var G__19165 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19165) : client.call(null,G__19165));
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
var G__19167 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19167) : client.call(null,G__19167));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__19168_SHARP_){
var G__19170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19168_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19170) : client.call(null,G__19170));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__19176){
var map__19177 = p__19176;
var map__19177__$1 = ((((!((map__19177 == null)))?((((map__19177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19177):map__19177);
var req = map__19177__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19177__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4423__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
var G__19179 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4423__auto__,map__19177,map__19177__$1,req,query_params){
return (function (p1__19171_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__19171_SHARP_,query_params], 0));
});})(spec,temp__4423__auto__,map__19177,map__19177__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19179) : client.call(null,G__19179));
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
var args__5733__auto__ = [];
var len__5726__auto___19185 = arguments.length;
var i__5727__auto___19186 = (0);
while(true){
if((i__5727__auto___19186 < len__5726__auto___19185)){
args__5733__auto__.push((arguments[i__5727__auto___19186]));

var G__19187 = (i__5727__auto___19186 + (1));
i__5727__auto___19186 = G__19187;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19182){
var vec__19183 = p__19182;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(0),null);
return ((function (vec__19183,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4668__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__19184 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19184) : client.call(null,G__19184));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__19183,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq19180){
var G__19181 = cljs.core.first(seq19180);
var seq19180__$1 = cljs.core.next(seq19180);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__19181,seq19180__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
var G__19189 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__19189) : client.call(null,G__19189));
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
var args__5733__auto__ = [];
var len__5726__auto___19195 = arguments.length;
var i__5727__auto___19196 = (0);
while(true){
if((i__5727__auto___19196 < len__5726__auto___19195)){
args__5733__auto__.push((arguments[i__5727__auto___19196]));

var G__19197 = (i__5727__auto___19196 + (1));
i__5727__auto___19196 = G__19197;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19192){
var vec__19193 = p__19192;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19193,(0),null);
var G__19194 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19194) : cljs_http.client.request.call(null,G__19194));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq19190){
var G__19191 = cljs.core.first(seq19190);
var seq19190__$1 = cljs.core.next(seq19190);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__19191,seq19190__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19203 = arguments.length;
var i__5727__auto___19204 = (0);
while(true){
if((i__5727__auto___19204 < len__5726__auto___19203)){
args__5733__auto__.push((arguments[i__5727__auto___19204]));

var G__19205 = (i__5727__auto___19204 + (1));
i__5727__auto___19204 = G__19205;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19200){
var vec__19201 = p__19200;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19201,(0),null);
var G__19202 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19202) : cljs_http.client.request.call(null,G__19202));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq19198){
var G__19199 = cljs.core.first(seq19198);
var seq19198__$1 = cljs.core.next(seq19198);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__19199,seq19198__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19211 = arguments.length;
var i__5727__auto___19212 = (0);
while(true){
if((i__5727__auto___19212 < len__5726__auto___19211)){
args__5733__auto__.push((arguments[i__5727__auto___19212]));

var G__19213 = (i__5727__auto___19212 + (1));
i__5727__auto___19212 = G__19213;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19208){
var vec__19209 = p__19208;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(0),null);
var G__19210 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19210) : cljs_http.client.request.call(null,G__19210));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq19206){
var G__19207 = cljs.core.first(seq19206);
var seq19206__$1 = cljs.core.next(seq19206);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__19207,seq19206__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19219 = arguments.length;
var i__5727__auto___19220 = (0);
while(true){
if((i__5727__auto___19220 < len__5726__auto___19219)){
args__5733__auto__.push((arguments[i__5727__auto___19220]));

var G__19221 = (i__5727__auto___19220 + (1));
i__5727__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19216){
var vec__19217 = p__19216;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217,(0),null);
var G__19218 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19218) : cljs_http.client.request.call(null,G__19218));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq19214){
var G__19215 = cljs.core.first(seq19214);
var seq19214__$1 = cljs.core.next(seq19214);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__19215,seq19214__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19227 = arguments.length;
var i__5727__auto___19228 = (0);
while(true){
if((i__5727__auto___19228 < len__5726__auto___19227)){
args__5733__auto__.push((arguments[i__5727__auto___19228]));

var G__19229 = (i__5727__auto___19228 + (1));
i__5727__auto___19228 = G__19229;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19224){
var vec__19225 = p__19224;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19225,(0),null);
var G__19226 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19226) : cljs_http.client.request.call(null,G__19226));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq19222){
var G__19223 = cljs.core.first(seq19222);
var seq19222__$1 = cljs.core.next(seq19222);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__19223,seq19222__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19235 = arguments.length;
var i__5727__auto___19236 = (0);
while(true){
if((i__5727__auto___19236 < len__5726__auto___19235)){
args__5733__auto__.push((arguments[i__5727__auto___19236]));

var G__19237 = (i__5727__auto___19236 + (1));
i__5727__auto___19236 = G__19237;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19232){
var vec__19233 = p__19232;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19233,(0),null);
var G__19234 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19234) : cljs_http.client.request.call(null,G__19234));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq19230){
var G__19231 = cljs.core.first(seq19230);
var seq19230__$1 = cljs.core.next(seq19230);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__19231,seq19230__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19243 = arguments.length;
var i__5727__auto___19244 = (0);
while(true){
if((i__5727__auto___19244 < len__5726__auto___19243)){
args__5733__auto__.push((arguments[i__5727__auto___19244]));

var G__19245 = (i__5727__auto___19244 + (1));
i__5727__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19240){
var vec__19241 = p__19240;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241,(0),null);
var G__19242 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19242) : cljs_http.client.request.call(null,G__19242));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq19238){
var G__19239 = cljs.core.first(seq19238);
var seq19238__$1 = cljs.core.next(seq19238);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__19239,seq19238__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19251 = arguments.length;
var i__5727__auto___19252 = (0);
while(true){
if((i__5727__auto___19252 < len__5726__auto___19251)){
args__5733__auto__.push((arguments[i__5727__auto___19252]));

var G__19253 = (i__5727__auto___19252 + (1));
i__5727__auto___19252 = G__19253;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19248){
var vec__19249 = p__19248;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249,(0),null);
var G__19250 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19250) : cljs_http.client.request.call(null,G__19250));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq19246){
var G__19247 = cljs.core.first(seq19246);
var seq19246__$1 = cljs.core.next(seq19246);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__19247,seq19246__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5733__auto__ = [];
var len__5726__auto___19259 = arguments.length;
var i__5727__auto___19260 = (0);
while(true){
if((i__5727__auto___19260 < len__5726__auto___19259)){
args__5733__auto__.push((arguments[i__5727__auto___19260]));

var G__19261 = (i__5727__auto___19260 + (1));
i__5727__auto___19260 = G__19261;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19256){
var vec__19257 = p__19256;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(0),null);
var G__19258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__19258) : cljs_http.client.request.call(null,G__19258));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq19254){
var G__19255 = cljs.core.first(seq19254);
var seq19254__$1 = cljs.core.next(seq19254);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__19255,seq19254__$1);
});
