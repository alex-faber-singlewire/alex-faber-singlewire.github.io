// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.handlers');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('schema.core');
goog.require('crisis_dispatch.nav');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('crisis_dispatch.db');
goog.require('re_frame.core');
crisis_dispatch.handlers.form_full_base_url = (function crisis_dispatch$handlers$form_full_base_url(db){
return [cljs.core.str("https://"),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null))),cljs.core.str("/InformaCast/RESTServices/V1/")].join('');
});
crisis_dispatch.handlers.form_credentials_map = (function crisis_dispatch$handlers$form_credentials_map(db){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username], null)),cljs.core.cst$kw$password,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password], null))], null);
});
crisis_dispatch.handlers.pprint = (function crisis_dispatch$handlers$pprint(obj){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([JSON.stringify(cljs.core.clj__GT_js(obj))], 0));

return obj;
});
crisis_dispatch.handlers.has_success_status_QMARK_ = (function crisis_dispatch$handlers$has_success_status_QMARK_(response){
return (((200) <= cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response))) && ((cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response) <= (299)));
});
/**
 * Throws an exception whenever the database doesn't match the schema provided in core.db.
 * Meant to only be used in development, as the error is unhandled
 */
crisis_dispatch.handlers.validate_db = (function crisis_dispatch$handlers$validate_db(handler){
return (function crisis_dispatch$handlers$validate_db_$_imposter_handler(db,v){
var mutated_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
crisis_dispatch.db.validate(mutated_db);

return mutated_db;
});
});
crisis_dispatch.handlers.pprint_db = (function crisis_dispatch$handlers$pprint_db(handler){
return (function crisis_dispatch$handlers$pprint_db_$_imposter_handler(db,v){
return crisis_dispatch.handlers.pprint((handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v)));
});
});
crisis_dispatch.handlers.set_in = (function crisis_dispatch$handlers$set_in(db,p__15197){
var vec__15199 = p__15197;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_dispatch.handlers.valid_situation_file_QMARK_ = (function crisis_dispatch$handlers$valid_situation_file_QMARK_(v){
var situation_schema = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,schema.core.Str,cljs.core.cst$kw$name,schema.core.Str,cljs.core.cst$kw$color,schema.core.Str,cljs.core.cst$kw$image,schema.core.maybe(schema.core.Str),cljs.core.cst$kw$parent,schema.core.maybe(schema.core.Str)], null);
var scenario_schema = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,schema.core.Str,cljs.core.cst$kw$parent,schema.core.Str,cljs.core.cst$kw$scenarioId,schema.core.Str], null);
var valid_situation_or_scenario_QMARK_ = ((function (situation_schema,scenario_schema){
return (function crisis_dispatch$handlers$valid_situation_file_QMARK__$_valid_situation_or_scenario_QMARK_(i){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(i),"situation")){
return schema.core.validate(situation_schema,i);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(i),"scenario")){
return schema.core.validate(scenario_schema,i);
} else {
throw (new Error([cljs.core.str("Invalid Value for key \":type\" : "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(i))].join('')));

}
}
});})(situation_schema,scenario_schema))
;
try{return cljs.core.every_QMARK_(valid_situation_or_scenario_QMARK_,v);
}catch (e15201){if((e15201 instanceof Error)){
var e = e15201;
alert("Invalid Situation Configuration File");

return console.error(e);
} else {
throw e15201;

}
}});
crisis_dispatch.handlers.open_file = (function crisis_dispatch$handlers$open_file(db,p__15202){
var vec__15209 = p__15202;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(0),null);
var file_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209,(1),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__15209,file,file_type){
return (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$scenario)){
var cljs_obj = cognitect.transit.read(r,e.target.result);
var G__15210_15215 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null),cljs_obj], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15210_15215) : re_frame.core.dispatch.call(null,G__15210_15215));

var G__15211_15216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15211_15216) : re_frame.core.dispatch.call(null,G__15211_15216));

var G__15212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15212) : re_frame.core.dispatch.call(null,G__15212));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$situation)){
var cljs_obj = clojure.walk.keywordize_keys(cognitect.transit.read(r,e.target.result));
if(cljs.core.truth_(crisis_dispatch.handlers.valid_situation_file_QMARK_(cljs_obj))){
var G__15213 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$situations], null),cljs_obj], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15213) : re_frame.core.dispatch.call(null,G__15213));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$appearance)){
var cljs_obj = clojure.walk.keywordize_keys(cognitect.transit.read(r,e.target.result));
var G__15214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$appearance], null),cljs_obj], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15214) : re_frame.core.dispatch.call(null,G__15214));
} else {
return null;
}
}
}
});})(file_reader,vec__15209,file,file_type))
;

file_reader.readAsText(file);

return db;
});
crisis_dispatch.handlers.md5_hash = (function crisis_dispatch$handlers$md5_hash(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15221 = arguments.length;
var i__5727__auto___15222 = (0);
while(true){
if((i__5727__auto___15222 < len__5726__auto___15221)){
args__5733__auto__.push((arguments[i__5727__auto___15222]));

var G__15223 = (i__5727__auto___15222 + (1));
i__5727__auto___15222 = G__15223;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15219 = (function (){var G__15220 = (new goog.crypt.Md5());
G__15220.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15220;
})().digest();
return goog.crypt.byteArrayToHex(G__15219);
});

crisis_dispatch.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.md5_hash.cljs$lang$applyTo = (function (seq15217){
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15217));
});
crisis_dispatch.handlers.fetch_full_message_by_id = (function crisis_dispatch$handlers$fetch_full_message_by_id(message_id,full_base_url,credentials_map){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(full_base_url),cljs.core.str("Messages/"),cljs.core.str(message_id)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,credentials_map], null)], 0));
});
/**
 * fetches all messages concurrently and then, if all were successful, calls the success-cb with the full response
 *   body of each fetched messages.  Otherwise, it simply calls the error-cb
 */
crisis_dispatch.handlers.fetch_full_messages = (function crisis_dispatch$handlers$fetch_full_messages(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15278 = arguments.length;
var i__5727__auto___15279 = (0);
while(true){
if((i__5727__auto___15279 < len__5726__auto___15278)){
args__5733__auto__.push((arguments[i__5727__auto___15279]));

var G__15280 = (i__5727__auto___15279 + (1));
i__5727__auto___15279 = G__15280;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic = (function (p__15226){
var map__15227 = p__15226;
var map__15227__$1 = ((((!((map__15227 == null)))?((((map__15227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15227):map__15227);
var message_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227__$1,cljs.core.cst$kw$message_DASH_ids);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15227__$1,cljs.core.cst$kw$error_DASH_cb);
var channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (p1__15224_SHARP_){
return crisis_dispatch.handlers.fetch_full_message_by_id(p1__15224_SHARP_,full_base_url,credentials_map);
});})(map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
,message_ids);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15256){
var state_val_15257 = (state_15256[(1)]);
if((state_val_15257 === (7))){
var inst_15231 = (state_15256[(7)]);
var inst_15230 = (state_15256[(8)]);
var inst_15238 = (state_15256[(2)]);
var inst_15239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15230,inst_15238);
var inst_15240 = cljs.core.rest(inst_15231);
var inst_15241 = cljs.core.vec(inst_15240);
var inst_15230__$1 = inst_15239;
var inst_15231__$1 = inst_15241;
var state_15256__$1 = (function (){var statearr_15258 = state_15256;
(statearr_15258[(7)] = inst_15231__$1);

(statearr_15258[(8)] = inst_15230__$1);

return statearr_15258;
})();
var statearr_15259_15281 = state_15256__$1;
(statearr_15259_15281[(2)] = null);

(statearr_15259_15281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (1))){
var inst_15229 = cljs.core.PersistentVector.EMPTY;
var inst_15230 = inst_15229;
var inst_15231 = channels;
var state_15256__$1 = (function (){var statearr_15260 = state_15256;
(statearr_15260[(7)] = inst_15231);

(statearr_15260[(8)] = inst_15230);

return statearr_15260;
})();
var statearr_15261_15282 = state_15256__$1;
(statearr_15261_15282[(2)] = null);

(statearr_15261_15282[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (4))){
var inst_15230 = (state_15256[(8)]);
var state_15256__$1 = state_15256;
var statearr_15262_15283 = state_15256__$1;
(statearr_15262_15283[(2)] = inst_15230);

(statearr_15262_15283[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (6))){
var inst_15244 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15263_15284 = state_15256__$1;
(statearr_15263_15284[(2)] = inst_15244);

(statearr_15263_15284[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (3))){
var inst_15246 = (state_15256[(9)]);
var inst_15246__$1 = (state_15256[(2)]);
var inst_15247 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15246__$1);
var state_15256__$1 = (function (){var statearr_15264 = state_15256;
(statearr_15264[(9)] = inst_15246__$1);

return statearr_15264;
})();
if(inst_15247){
var statearr_15265_15285 = state_15256__$1;
(statearr_15265_15285[(1)] = (8));

} else {
var statearr_15266_15286 = state_15256__$1;
(statearr_15266_15286[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (2))){
var inst_15231 = (state_15256[(7)]);
var inst_15233 = cljs.core.empty_QMARK_(inst_15231);
var state_15256__$1 = state_15256;
if(inst_15233){
var statearr_15267_15287 = state_15256__$1;
(statearr_15267_15287[(1)] = (4));

} else {
var statearr_15268_15288 = state_15256__$1;
(statearr_15268_15288[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (9))){
var inst_15252 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15256__$1 = state_15256;
var statearr_15269_15289 = state_15256__$1;
(statearr_15269_15289[(2)] = inst_15252);

(statearr_15269_15289[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (5))){
var inst_15231 = (state_15256[(7)]);
var inst_15236 = cljs.core.first(inst_15231);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15256__$1,(7),inst_15236);
} else {
if((state_val_15257 === (10))){
var inst_15254 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15256__$1,inst_15254);
} else {
if((state_val_15257 === (8))){
var inst_15246 = (state_15256[(9)]);
var inst_15249 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,inst_15246);
var inst_15250 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15249) : success_cb.call(null,inst_15249));
var state_15256__$1 = state_15256;
var statearr_15270_15290 = state_15256__$1;
(statearr_15270_15290[(2)] = inst_15250);

(statearr_15270_15290[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15274[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15274[(1)] = (1));

return statearr_15274;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15256){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15256);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15275){if((e15275 instanceof Object)){
var ex__8846__auto__ = e15275;
var statearr_15276_15291 = state_15256;
(statearr_15276_15291[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15256);

return cljs.core.cst$kw$recur;
} else {
throw e15275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15292 = state_15256;
state_15256 = G__15292;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15277 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,channels,map__15227,map__15227__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$applyTo = (function (seq15225){
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15225));
});
crisis_dispatch.handlers.get_all_message_ids_in_configuration = (function crisis_dispatch$handlers$get_all_message_ids_in_configuration(db){
var scenario_names = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null)));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_names){
return (function (scenario_name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_names){
return (function (message){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_names))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$messages], null)));
});})(scenario_names))
,scenario_names));
});
crisis_dispatch.handlers.fetch_full_messages_of_scenario = (function crisis_dispatch$handlers$fetch_full_messages_of_scenario(db,p__15295){
var vec__15299 = p__15295;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15299,(0),null);
var temp__4423__auto___15302 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto___15302)){
var scenario_15303 = temp__4423__auto___15302;
var message_ids_15304 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name){
return (function (p1__15293_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__15293_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name))
,cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(scenario_15303));
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,message_ids_15304,cljs.core.cst$kw$full_DASH_base_DASH_url,crisis_dispatch.handlers.form_full_base_url(db),cljs.core.cst$kw$credentials_DASH_map,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$success_DASH_cb,((function (message_ids_15304,scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name){
return (function (p1__15294_SHARP_){
var G__15300_15305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_fetched_DASH_messages,p1__15294_SHARP_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15300_15305) : re_frame.core.dispatch.call(null,G__15300_15305));

var G__15301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15301) : re_frame.core.dispatch.call(null,G__15301));
});})(message_ids_15304,scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name))
,cljs.core.cst$kw$error_DASH_cb,((function (message_ids_15304,scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name){
return (function (){
return alert("Error: Unsuccessful fetch of at least one message in scenario.  Not able to proceed");
});})(message_ids_15304,scenario_15303,temp__4423__auto___15302,vec__15299,scenario_name))
], 0));
} else {
crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
}

return db;
});
/**
 * Only called when all message response status codes are successful in nature
 */
crisis_dispatch.handlers.save_fetched_messages = (function crisis_dispatch$handlers$save_fetched_messages(db,p__15306){
var vec__15308 = p__15306;
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,messages);
});
crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration = (function crisis_dispatch$handlers$get_all_recipient_group_ids_in_configuration(db){
var scenarios = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenarios){
return (function (p__15315){
var vec__15316 = p__15315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15316,_,scenario_val,scenarios){
return (function (p__15317){
var vec__15318 = p__15317;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318,(1),null);
if(!(cljs.core.map_QMARK_(v1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v1);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15318,___$1,v1,vec__15316,_,scenario_val,scenarios){
return (function (p__15319){
var vec__15320 = p__15319;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v2);
});})(vec__15318,___$1,v1,vec__15316,_,scenario_val,scenarios))
,cljs.core.seq(v1));
}
});})(vec__15316,_,scenario_val,scenarios))
,cljs.core.cst$kw$destination_DASH_mapping.cljs$core$IFn$_invoke$arity$1(scenario_val));
});})(scenarios))
,scenarios));
});
crisis_dispatch.handlers.filter_recipient_groups = (function crisis_dispatch$handlers$filter_recipient_groups(recipient_groups,configured_recipient_group_ids){
var is_a_scenario_recipient_group_QMARK_ = (function crisis_dispatch$handlers$filter_recipient_groups_$_is_a_scenario_recipient_group_QMARK_(recipient_group){
return cljs.core.some((function (scenario_recipient_group_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scenario_recipient_group_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient_group));
}),configured_recipient_group_ids);
});
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_a_scenario_recipient_group_QMARK_,recipient_groups));
});
crisis_dispatch.handlers.fetch_all_scenario_recipient_groups = (function crisis_dispatch$handlers$fetch_all_scenario_recipient_groups(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15359 = arguments.length;
var i__5727__auto___15360 = (0);
while(true){
if((i__5727__auto___15360 < len__5726__auto___15359)){
args__5733__auto__.push((arguments[i__5727__auto___15360]));

var G__15361 = (i__5727__auto___15360 + (1));
i__5727__auto___15360 = G__15361;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic = (function (p__15322){
var map__15323 = p__15322;
var map__15323__$1 = ((((!((map__15323 == null)))?((((map__15323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15323):map__15323);
var recipient_group_ids_in_configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15323__$1,cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15323__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15323__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15323__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15323__$1,cljs.core.cst$kw$error_DASH_cb);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15345){
var state_val_15346 = (state_15345[(1)]);
if((state_val_15346 === (1))){
var inst_15325 = [cljs.core.str(full_base_url),cljs.core.str("RecipientGroups/")].join('');
var inst_15326 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15327 = [false,credentials_map];
var inst_15328 = cljs.core.PersistentHashMap.fromArrays(inst_15326,inst_15327);
var inst_15329 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15325,cljs.core.array_seq([inst_15328], 0));
var state_15345__$1 = state_15345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15345__$1,(2),inst_15329);
} else {
if((state_val_15346 === (2))){
var inst_15331 = (state_15345[(7)]);
var inst_15331__$1 = (state_15345[(2)]);
var inst_15332 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15331__$1);
var state_15345__$1 = (function (){var statearr_15347 = state_15345;
(statearr_15347[(7)] = inst_15331__$1);

return statearr_15347;
})();
if(cljs.core.truth_(inst_15332)){
var statearr_15348_15362 = state_15345__$1;
(statearr_15348_15362[(1)] = (3));

} else {
var statearr_15349_15363 = state_15345__$1;
(statearr_15349_15363[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15346 === (3))){
var inst_15331 = (state_15345[(7)]);
var inst_15334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15335 = [cljs.core.cst$kw$body,cljs.core.cst$kw$data];
var inst_15336 = (new cljs.core.PersistentVector(null,2,(5),inst_15334,inst_15335,null));
var inst_15337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_15331,inst_15336);
var inst_15338 = crisis_dispatch.handlers.filter_recipient_groups(inst_15337,recipient_group_ids_in_configuration);
var inst_15339 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15338) : success_cb.call(null,inst_15338));
var state_15345__$1 = state_15345;
var statearr_15350_15364 = state_15345__$1;
(statearr_15350_15364[(2)] = inst_15339);

(statearr_15350_15364[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15346 === (4))){
var inst_15341 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15345__$1 = state_15345;
var statearr_15351_15365 = state_15345__$1;
(statearr_15351_15365[(2)] = inst_15341);

(statearr_15351_15365[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15346 === (5))){
var inst_15343 = (state_15345[(2)]);
var state_15345__$1 = state_15345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15345__$1,inst_15343);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15355 = [null,null,null,null,null,null,null,null];
(statearr_15355[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15355[(1)] = (1));

return statearr_15355;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15345){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15345);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15356){if((e15356 instanceof Object)){
var ex__8846__auto__ = e15356;
var statearr_15357_15366 = state_15345;
(statearr_15357_15366[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15345);

return cljs.core.cst$kw$recur;
} else {
throw e15356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15367 = state_15345;
state_15345 = G__15367;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15345){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15358 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,map__15323,map__15323__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$applyTo = (function (seq15321){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15321));
});
/**
 * Takes set of maps of recipient groups that contain irrelevant fields for the hashing algorithm.  This function removes the
 *   follow fields from each map: numPlugins, numPhones, and numSpeakers
 */
crisis_dispatch.handlers.desensitize_recipient_groups = (function crisis_dispatch$handlers$desensitize_recipient_groups(recipient_groups){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (rg){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rg,cljs.core.cst$kw$numPlugins),cljs.core.cst$kw$numPhones),cljs.core.cst$kw$numSpeakers);
}),recipient_groups));
});
crisis_dispatch.handlers.validate_ic_state = (function crisis_dispatch$handlers$validate_ic_state(db,_){
var temp__4425__auto___15374 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration], null));
if(cljs.core.truth_(temp__4425__auto___15374)){
var admin_configuration_15375 = temp__4425__auto___15374;
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1(admin_configuration_15375);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(admin_configuration_15375);
if(cljs.core.truth_(and__4656__auto____$1)){
return cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(admin_configuration_15375);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
var full_base_url_15376 = crisis_dispatch.handlers.form_full_base_url(db);
var credentials_map_15377 = crisis_dispatch.handlers.form_credentials_map(db);
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,crisis_dispatch.handlers.get_all_message_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15376,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15377,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374){
return (function (messages){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration,crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15376,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15377,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374){
return (function (recipient_groups){
var G__15371 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null)),crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crisis_dispatch.handlers.desensitize_recipient_groups(recipient_groups))], 0)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15371) : re_frame.core.dispatch.call(null,G__15371));
});})(full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374){
return (function (){
var G__15372_15378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15372_15378) : re_frame.core.dispatch.call(null,G__15372_15378));

return console.error("Unable to fetch all recipient groups from InformaCast.  Unable to proceed");
});})(full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374))
], 0));
});})(full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374){
return (function (){
var G__15373_15379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15373_15379) : re_frame.core.dispatch.call(null,G__15373_15379));

return console.error("Unable to fetch all messages from InformaCast.  Unable to proceed");
});})(full_base_url_15376,credentials_map_15377,admin_configuration_15375,temp__4425__auto___15374))
], 0));
} else {
}
} else {
}

return db;
});
crisis_dispatch.handlers.form_broadcast_instructions = (function crisis_dispatch$handlers$form_broadcast_instructions(db,_){
var selected_parameter_options = cljs.core.cst$kw$selected_DASH_options.cljs$core$IFn$_invoke$arity$1(db);
var destination_determined_by = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameter_DASH_configuration,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null));
var destination_mapping = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$destination_DASH_mapping], null));
var build_recipients = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_build_recipients(message_id){
if(cljs.core.truth_(destination_determined_by)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15380_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15380_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(destination_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_parameter_options,destination_determined_by)], null)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15381_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15381_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destination_mapping,message_id));
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var subsitute_parameters = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_subsitute_parameters(message_str){
if(cljs.core.truth_(message_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (r,p__15396){
var vec__15397 = p__15396;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(1),null);
return clojure.string.replace(r,k,v);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,message_str,selected_parameter_options);
} else {
return null;
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var build_instruction = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_build_instruction(message){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$messageId,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(message),cljs.core.cst$kw$recipients,build_recipients(cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(message)),cljs.core.cst$kw$shortText,subsitute_parameters(cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(message)),cljs.core.cst$kw$longText,subsitute_parameters(cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(message))], null);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$broadcast_DASH_instructions,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_instruction,cljs.core.cst$kw$fetched_DASH_messages.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_dispatch.handlers.send_broadcasts = (function crisis_dispatch$handlers$send_broadcasts(db,_){
var send_broadcast_instruction = (function crisis_dispatch$handlers$send_broadcasts_$_send_broadcast_instruction(instruction){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_dispatch.handlers.form_full_base_url(db)),cljs.core.str("Messages/DynamicSender")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$json_DASH_params,cljs.core.clj__GT_js(instruction)], null)], 0));
});
var c__8909__auto___15496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15496){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15496){
return (function (state_15475){
var state_val_15476 = (state_15475[(1)]);
if((state_val_15476 === (7))){
var inst_15451 = (state_15475[(7)]);
var inst_15450 = (state_15475[(8)]);
var inst_15458 = (state_15475[(2)]);
var inst_15459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15450,inst_15458);
var inst_15460 = cljs.core.rest(inst_15451);
var inst_15461 = cljs.core.vec(inst_15460);
var inst_15450__$1 = inst_15459;
var inst_15451__$1 = inst_15461;
var state_15475__$1 = (function (){var statearr_15477 = state_15475;
(statearr_15477[(7)] = inst_15451__$1);

(statearr_15477[(8)] = inst_15450__$1);

return statearr_15477;
})();
var statearr_15478_15497 = state_15475__$1;
(statearr_15478_15497[(2)] = null);

(statearr_15478_15497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (1))){
var inst_15447 = cljs.core.cst$kw$broadcast_DASH_instructions.cljs$core$IFn$_invoke$arity$1(db);
var inst_15448 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(send_broadcast_instruction,inst_15447);
var inst_15449 = cljs.core.PersistentVector.EMPTY;
var inst_15450 = inst_15449;
var inst_15451 = inst_15448;
var state_15475__$1 = (function (){var statearr_15479 = state_15475;
(statearr_15479[(7)] = inst_15451);

(statearr_15479[(8)] = inst_15450);

return statearr_15479;
})();
var statearr_15480_15498 = state_15475__$1;
(statearr_15480_15498[(2)] = null);

(statearr_15480_15498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (4))){
var inst_15450 = (state_15475[(8)]);
var state_15475__$1 = state_15475;
var statearr_15481_15499 = state_15475__$1;
(statearr_15481_15499[(2)] = inst_15450);

(statearr_15481_15499[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (6))){
var inst_15464 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
var statearr_15482_15500 = state_15475__$1;
(statearr_15482_15500[(2)] = inst_15464);

(statearr_15482_15500[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (3))){
var inst_15466 = (state_15475[(2)]);
var inst_15467 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15466);
var state_15475__$1 = state_15475;
if(inst_15467){
var statearr_15483_15501 = state_15475__$1;
(statearr_15483_15501[(1)] = (8));

} else {
var statearr_15484_15502 = state_15475__$1;
(statearr_15484_15502[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (2))){
var inst_15451 = (state_15475[(7)]);
var inst_15453 = cljs.core.empty_QMARK_(inst_15451);
var state_15475__$1 = state_15475;
if(inst_15453){
var statearr_15485_15503 = state_15475__$1;
(statearr_15485_15503[(1)] = (4));

} else {
var statearr_15486_15504 = state_15475__$1;
(statearr_15486_15504[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (9))){
var inst_15471 = alert("Unable to send all broadcasts");
var state_15475__$1 = state_15475;
var statearr_15487_15505 = state_15475__$1;
(statearr_15487_15505[(2)] = inst_15471);

(statearr_15487_15505[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15476 === (5))){
var inst_15451 = (state_15475[(7)]);
var inst_15456 = cljs.core.first(inst_15451);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15475__$1,(7),inst_15456);
} else {
if((state_val_15476 === (10))){
var inst_15473 = (state_15475[(2)]);
var state_15475__$1 = state_15475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15475__$1,inst_15473);
} else {
if((state_val_15476 === (8))){
var inst_15469 = alert("All Broadcasts Sent");
var state_15475__$1 = state_15475;
var statearr_15488_15506 = state_15475__$1;
(statearr_15488_15506[(2)] = inst_15469);

(statearr_15488_15506[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8909__auto___15496))
;
return ((function (switch__8842__auto__,c__8909__auto___15496){
return (function() {
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0 = (function (){
var statearr_15492 = [null,null,null,null,null,null,null,null,null];
(statearr_15492[(0)] = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__);

(statearr_15492[(1)] = (1));

return statearr_15492;
});
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1 = (function (state_15475){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15475);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15493){if((e15493 instanceof Object)){
var ex__8846__auto__ = e15493;
var statearr_15494_15507 = state_15475;
(statearr_15494_15507[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15475);

return cljs.core.cst$kw$recur;
} else {
throw e15493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15508 = state_15475;
state_15475 = G__15508;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = function(state_15475){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1.call(this,state_15475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15496))
})();
var state__8911__auto__ = (function (){var statearr_15495 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15496);

return statearr_15495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15496))
);


return db;
});
crisis_dispatch.handlers.start_interval = (function crisis_dispatch$handlers$start_interval(db,_){
var interval = window.setInterval((function (){
var G__15510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15510) : re_frame.core.dispatch.call(null,G__15510));
}),(15000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$interval,interval);
});
crisis_dispatch.handlers.set_informacast_credentials = (function crisis_dispatch$handlers$set_informacast_credentials(db,p__15511){
var vec__15563 = p__15511;
var map__15564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15563,(0),null);
var map__15564__$1 = ((((!((map__15564 == null)))?((((map__15564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15564):map__15564);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15564__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15564__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))){
var c__8909__auto___15614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password){
return (function (state_15600){
var state_val_15601 = (state_15600[(1)]);
if((state_val_15601 === (1))){
var inst_15566 = crisis_dispatch.handlers.form_full_base_url(db);
var inst_15567 = [cljs.core.str(inst_15566),cljs.core.str("Messages/")].join('');
var inst_15568 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15569 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_15570 = [username,password];
var inst_15571 = cljs.core.PersistentHashMap.fromArrays(inst_15569,inst_15570);
var inst_15572 = [false,inst_15571];
var inst_15573 = cljs.core.PersistentHashMap.fromArrays(inst_15568,inst_15572);
var inst_15574 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15567,cljs.core.array_seq([inst_15573], 0));
var state_15600__$1 = state_15600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15600__$1,(2),inst_15574);
} else {
if((state_val_15601 === (2))){
var inst_15576 = (state_15600[(2)]);
var inst_15577 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15576);
var state_15600__$1 = state_15600;
if(cljs.core.truth_(inst_15577)){
var statearr_15602_15615 = state_15600__$1;
(statearr_15602_15615[(1)] = (3));

} else {
var statearr_15603_15616 = state_15600__$1;
(statearr_15603_15616[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15601 === (3))){
var inst_15579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15581 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username];
var inst_15582 = (new cljs.core.PersistentVector(null,3,(5),inst_15580,inst_15581,null));
var inst_15583 = [cljs.core.cst$kw$set_DASH_in,inst_15582,username];
var inst_15584 = (new cljs.core.PersistentVector(null,3,(5),inst_15579,inst_15583,null));
var inst_15585 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15584) : re_frame.core.dispatch.call(null,inst_15584));
var inst_15586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15587 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15588 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password];
var inst_15589 = (new cljs.core.PersistentVector(null,3,(5),inst_15587,inst_15588,null));
var inst_15590 = [cljs.core.cst$kw$set_DASH_in,inst_15589,password];
var inst_15591 = (new cljs.core.PersistentVector(null,3,(5),inst_15586,inst_15590,null));
var inst_15592 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15591) : re_frame.core.dispatch.call(null,inst_15591));
var inst_15593 = alert("Successfully applied credentials");
var inst_15594 = crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
var state_15600__$1 = (function (){var statearr_15604 = state_15600;
(statearr_15604[(7)] = inst_15585);

(statearr_15604[(8)] = inst_15593);

(statearr_15604[(9)] = inst_15592);

return statearr_15604;
})();
var statearr_15605_15617 = state_15600__$1;
(statearr_15605_15617[(2)] = inst_15594);

(statearr_15605_15617[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15601 === (4))){
var inst_15596 = alert("Invalid Credentials");
var state_15600__$1 = state_15600;
var statearr_15606_15618 = state_15600__$1;
(statearr_15606_15618[(2)] = inst_15596);

(statearr_15606_15618[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15601 === (5))){
var inst_15598 = (state_15600[(2)]);
var state_15600__$1 = state_15600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15600__$1,inst_15598);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password))
;
return ((function (switch__8842__auto__,c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password){
return (function() {
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0 = (function (){
var statearr_15610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15610[(0)] = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__);

(statearr_15610[(1)] = (1));

return statearr_15610;
});
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1 = (function (state_15600){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15600);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15611){if((e15611 instanceof Object)){
var ex__8846__auto__ = e15611;
var statearr_15612_15619 = state_15600;
(statearr_15612_15619[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15600);

return cljs.core.cst$kw$recur;
} else {
throw e15611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15620 = state_15600;
state_15600 = G__15620;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = function(state_15600){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1.call(this,state_15600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password))
})();
var state__8911__auto__ = (function (){var statearr_15613 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15614);

return statearr_15613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15614,vec__15563,map__15564,map__15564__$1,username,password))
);

} else {
alert("Unable to set InformaCast credentials.  Configuration file has yet to be supplied");
}

return db;
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.set_in);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return crisis_dispatch.db.default_db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$open_DASH_file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.open_file);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.fetch_full_messages_of_scenario);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_fetched_DASH_messages,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.save_fetched_messages);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.form_broadcast_instructions);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$send_DASH_broadcasts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.send_broadcasts);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$validate_DASH_ic_DASH_state,crisis_dispatch.handlers.validate_db,crisis_dispatch.handlers.validate_ic_state);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$start_DASH_interval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.start_interval);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_informacast_DASH_credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_dispatch.handlers.validate_db], null),crisis_dispatch.handlers.set_informacast_credentials);
