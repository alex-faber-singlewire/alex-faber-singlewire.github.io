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
crisis_dispatch.handlers.set_in = (function crisis_dispatch$handlers$set_in(db,p__15159){
var vec__15161 = p__15159;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(1),null);
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
}catch (e15163){if((e15163 instanceof Error)){
var e = e15163;
alert("Invalid Situation Configuration File");

return console.error(e);
} else {
throw e15163;

}
}});
crisis_dispatch.handlers.open_file = (function crisis_dispatch$handlers$open_file(db,p__15164){
var vec__15171 = p__15164;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15171,(0),null);
var file_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15171,(1),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__15171,file,file_type){
return (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$scenario)){
var cljs_obj = cognitect.transit.read(r,e.target.result);
var G__15172_15177 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null),cljs_obj], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15172_15177) : re_frame.core.dispatch.call(null,G__15172_15177));

var G__15173_15178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15173_15178) : re_frame.core.dispatch.call(null,G__15173_15178));

var G__15174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15174) : re_frame.core.dispatch.call(null,G__15174));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$situation)){
var cljs_obj = clojure.walk.keywordize_keys(cognitect.transit.read(r,e.target.result));
if(cljs.core.truth_(crisis_dispatch.handlers.valid_situation_file_QMARK_(cljs_obj))){
var G__15175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$situations], null),cljs_obj], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15175) : re_frame.core.dispatch.call(null,G__15175));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$appearance)){
var cljs_obj = clojure.walk.keywordize_keys(cognitect.transit.read(r,e.target.result));
var G__15176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$appearance], null),cljs_obj], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15176) : re_frame.core.dispatch.call(null,G__15176));
} else {
return null;
}
}
}
});})(file_reader,vec__15171,file,file_type))
;

file_reader.readAsText(file);

return db;
});
crisis_dispatch.handlers.md5_hash = (function crisis_dispatch$handlers$md5_hash(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15183 = arguments.length;
var i__5727__auto___15184 = (0);
while(true){
if((i__5727__auto___15184 < len__5726__auto___15183)){
args__5733__auto__.push((arguments[i__5727__auto___15184]));

var G__15185 = (i__5727__auto___15184 + (1));
i__5727__auto___15184 = G__15185;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15181 = (function (){var G__15182 = (new goog.crypt.Md5());
G__15182.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15182;
})().digest();
return goog.crypt.byteArrayToHex(G__15181);
});

crisis_dispatch.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.md5_hash.cljs$lang$applyTo = (function (seq15179){
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15179));
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
var len__5726__auto___15240 = arguments.length;
var i__5727__auto___15241 = (0);
while(true){
if((i__5727__auto___15241 < len__5726__auto___15240)){
args__5733__auto__.push((arguments[i__5727__auto___15241]));

var G__15242 = (i__5727__auto___15241 + (1));
i__5727__auto___15241 = G__15242;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic = (function (p__15188){
var map__15189 = p__15188;
var map__15189__$1 = ((((!((map__15189 == null)))?((((map__15189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15189):map__15189);
var message_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15189__$1,cljs.core.cst$kw$message_DASH_ids);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15189__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15189__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15189__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15189__$1,cljs.core.cst$kw$error_DASH_cb);
var channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (p1__15186_SHARP_){
return crisis_dispatch.handlers.fetch_full_message_by_id(p1__15186_SHARP_,full_base_url,credentials_map);
});})(map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
,message_ids);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15218){
var state_val_15219 = (state_15218[(1)]);
if((state_val_15219 === (7))){
var inst_15192 = (state_15218[(7)]);
var inst_15193 = (state_15218[(8)]);
var inst_15200 = (state_15218[(2)]);
var inst_15201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15192,inst_15200);
var inst_15202 = cljs.core.rest(inst_15193);
var inst_15203 = cljs.core.vec(inst_15202);
var inst_15192__$1 = inst_15201;
var inst_15193__$1 = inst_15203;
var state_15218__$1 = (function (){var statearr_15220 = state_15218;
(statearr_15220[(7)] = inst_15192__$1);

(statearr_15220[(8)] = inst_15193__$1);

return statearr_15220;
})();
var statearr_15221_15243 = state_15218__$1;
(statearr_15221_15243[(2)] = null);

(statearr_15221_15243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (1))){
var inst_15191 = cljs.core.PersistentVector.EMPTY;
var inst_15192 = inst_15191;
var inst_15193 = channels;
var state_15218__$1 = (function (){var statearr_15222 = state_15218;
(statearr_15222[(7)] = inst_15192);

(statearr_15222[(8)] = inst_15193);

return statearr_15222;
})();
var statearr_15223_15244 = state_15218__$1;
(statearr_15223_15244[(2)] = null);

(statearr_15223_15244[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (4))){
var inst_15192 = (state_15218[(7)]);
var state_15218__$1 = state_15218;
var statearr_15224_15245 = state_15218__$1;
(statearr_15224_15245[(2)] = inst_15192);

(statearr_15224_15245[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (6))){
var inst_15206 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
var statearr_15225_15246 = state_15218__$1;
(statearr_15225_15246[(2)] = inst_15206);

(statearr_15225_15246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (3))){
var inst_15208 = (state_15218[(9)]);
var inst_15208__$1 = (state_15218[(2)]);
var inst_15209 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15208__$1);
var state_15218__$1 = (function (){var statearr_15226 = state_15218;
(statearr_15226[(9)] = inst_15208__$1);

return statearr_15226;
})();
if(inst_15209){
var statearr_15227_15247 = state_15218__$1;
(statearr_15227_15247[(1)] = (8));

} else {
var statearr_15228_15248 = state_15218__$1;
(statearr_15228_15248[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (2))){
var inst_15193 = (state_15218[(8)]);
var inst_15195 = cljs.core.empty_QMARK_(inst_15193);
var state_15218__$1 = state_15218;
if(inst_15195){
var statearr_15229_15249 = state_15218__$1;
(statearr_15229_15249[(1)] = (4));

} else {
var statearr_15230_15250 = state_15218__$1;
(statearr_15230_15250[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (9))){
var inst_15214 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15218__$1 = state_15218;
var statearr_15231_15251 = state_15218__$1;
(statearr_15231_15251[(2)] = inst_15214);

(statearr_15231_15251[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15219 === (5))){
var inst_15193 = (state_15218[(8)]);
var inst_15198 = cljs.core.first(inst_15193);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15218__$1,(7),inst_15198);
} else {
if((state_val_15219 === (10))){
var inst_15216 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15218__$1,inst_15216);
} else {
if((state_val_15219 === (8))){
var inst_15208 = (state_15218[(9)]);
var inst_15211 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,inst_15208);
var inst_15212 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15211) : success_cb.call(null,inst_15211));
var state_15218__$1 = state_15218;
var statearr_15232_15252 = state_15218__$1;
(statearr_15232_15252[(2)] = inst_15212);

(statearr_15232_15252[(1)] = (10));


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
});})(c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15236 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15236[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15236[(1)] = (1));

return statearr_15236;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15218){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15218);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15237){if((e15237 instanceof Object)){
var ex__8846__auto__ = e15237;
var statearr_15238_15253 = state_15218;
(statearr_15238_15253[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15218);

return cljs.core.cst$kw$recur;
} else {
throw e15237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15254 = state_15218;
state_15218 = G__15254;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15218){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15239 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,channels,map__15189,map__15189__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$applyTo = (function (seq15187){
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15187));
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
crisis_dispatch.handlers.fetch_full_messages_of_scenario = (function crisis_dispatch$handlers$fetch_full_messages_of_scenario(db,p__15257){
var vec__15261 = p__15257;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15261,(0),null);
var temp__4423__auto___15264 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto___15264)){
var scenario_15265 = temp__4423__auto___15264;
var message_ids_15266 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name){
return (function (p1__15255_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__15255_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name))
,cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(scenario_15265));
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,message_ids_15266,cljs.core.cst$kw$full_DASH_base_DASH_url,crisis_dispatch.handlers.form_full_base_url(db),cljs.core.cst$kw$credentials_DASH_map,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$success_DASH_cb,((function (message_ids_15266,scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name){
return (function (p1__15256_SHARP_){
var G__15262_15267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_fetched_DASH_messages,p1__15256_SHARP_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15262_15267) : re_frame.core.dispatch.call(null,G__15262_15267));

var G__15263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15263) : re_frame.core.dispatch.call(null,G__15263));
});})(message_ids_15266,scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name))
,cljs.core.cst$kw$error_DASH_cb,((function (message_ids_15266,scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name){
return (function (){
return alert("Error: Unsuccessful fetch of at least one message in scenario.  Not able to proceed");
});})(message_ids_15266,scenario_15265,temp__4423__auto___15264,vec__15261,scenario_name))
], 0));
} else {
crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
}

return db;
});
/**
 * Only called when all message response status codes are successful in nature
 */
crisis_dispatch.handlers.save_fetched_messages = (function crisis_dispatch$handlers$save_fetched_messages(db,p__15268){
var vec__15270 = p__15268;
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,messages);
});
crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration = (function crisis_dispatch$handlers$get_all_recipient_group_ids_in_configuration(db){
var scenarios = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenarios){
return (function (p__15277){
var vec__15278 = p__15277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15278,_,scenario_val,scenarios){
return (function (p__15279){
var vec__15280 = p__15279;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15280,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15280,(1),null);
if(!(cljs.core.map_QMARK_(v1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v1);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15280,___$1,v1,vec__15278,_,scenario_val,scenarios){
return (function (p__15281){
var vec__15282 = p__15281;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v2);
});})(vec__15280,___$1,v1,vec__15278,_,scenario_val,scenarios))
,cljs.core.seq(v1));
}
});})(vec__15278,_,scenario_val,scenarios))
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
var len__5726__auto___15321 = arguments.length;
var i__5727__auto___15322 = (0);
while(true){
if((i__5727__auto___15322 < len__5726__auto___15321)){
args__5733__auto__.push((arguments[i__5727__auto___15322]));

var G__15323 = (i__5727__auto___15322 + (1));
i__5727__auto___15322 = G__15323;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic = (function (p__15284){
var map__15285 = p__15284;
var map__15285__$1 = ((((!((map__15285 == null)))?((((map__15285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15285):map__15285);
var recipient_group_ids_in_configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15285__$1,cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15285__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15285__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15285__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15285__$1,cljs.core.cst$kw$error_DASH_cb);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15307){
var state_val_15308 = (state_15307[(1)]);
if((state_val_15308 === (1))){
var inst_15287 = [cljs.core.str(full_base_url),cljs.core.str("RecipientGroups/")].join('');
var inst_15288 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15289 = [false,credentials_map];
var inst_15290 = cljs.core.PersistentHashMap.fromArrays(inst_15288,inst_15289);
var inst_15291 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15287,cljs.core.array_seq([inst_15290], 0));
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15307__$1,(2),inst_15291);
} else {
if((state_val_15308 === (2))){
var inst_15293 = (state_15307[(7)]);
var inst_15293__$1 = (state_15307[(2)]);
var inst_15294 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15293__$1);
var state_15307__$1 = (function (){var statearr_15309 = state_15307;
(statearr_15309[(7)] = inst_15293__$1);

return statearr_15309;
})();
if(cljs.core.truth_(inst_15294)){
var statearr_15310_15324 = state_15307__$1;
(statearr_15310_15324[(1)] = (3));

} else {
var statearr_15311_15325 = state_15307__$1;
(statearr_15311_15325[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15308 === (3))){
var inst_15293 = (state_15307[(7)]);
var inst_15296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15297 = [cljs.core.cst$kw$body,cljs.core.cst$kw$data];
var inst_15298 = (new cljs.core.PersistentVector(null,2,(5),inst_15296,inst_15297,null));
var inst_15299 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_15293,inst_15298);
var inst_15300 = crisis_dispatch.handlers.filter_recipient_groups(inst_15299,recipient_group_ids_in_configuration);
var inst_15301 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15300) : success_cb.call(null,inst_15300));
var state_15307__$1 = state_15307;
var statearr_15312_15326 = state_15307__$1;
(statearr_15312_15326[(2)] = inst_15301);

(statearr_15312_15326[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15308 === (4))){
var inst_15303 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15307__$1 = state_15307;
var statearr_15313_15327 = state_15307__$1;
(statearr_15313_15327[(2)] = inst_15303);

(statearr_15313_15327[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15308 === (5))){
var inst_15305 = (state_15307[(2)]);
var state_15307__$1 = state_15307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15307__$1,inst_15305);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15317 = [null,null,null,null,null,null,null,null];
(statearr_15317[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15317[(1)] = (1));

return statearr_15317;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15307){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15307);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15318){if((e15318 instanceof Object)){
var ex__8846__auto__ = e15318;
var statearr_15319_15328 = state_15307;
(statearr_15319_15328[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15307);

return cljs.core.cst$kw$recur;
} else {
throw e15318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15329 = state_15307;
state_15307 = G__15329;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15307){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15320 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,map__15285,map__15285__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$applyTo = (function (seq15283){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15283));
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
return (function (p1__15330_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15330_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(destination_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_parameter_options,destination_determined_by)], null)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15331_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15331_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destination_mapping,message_id));
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var subsitute_parameters = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_subsitute_parameters(message_str){
if(cljs.core.truth_(message_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (r,p__15346){
var vec__15347 = p__15346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347,(1),null);
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
var c__8909__auto___15446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15446){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15446){
return (function (state_15425){
var state_val_15426 = (state_15425[(1)]);
if((state_val_15426 === (7))){
var inst_15401 = (state_15425[(7)]);
var inst_15400 = (state_15425[(8)]);
var inst_15408 = (state_15425[(2)]);
var inst_15409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15400,inst_15408);
var inst_15410 = cljs.core.rest(inst_15401);
var inst_15411 = cljs.core.vec(inst_15410);
var inst_15400__$1 = inst_15409;
var inst_15401__$1 = inst_15411;
var state_15425__$1 = (function (){var statearr_15427 = state_15425;
(statearr_15427[(7)] = inst_15401__$1);

(statearr_15427[(8)] = inst_15400__$1);

return statearr_15427;
})();
var statearr_15428_15447 = state_15425__$1;
(statearr_15428_15447[(2)] = null);

(statearr_15428_15447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (1))){
var inst_15397 = cljs.core.cst$kw$broadcast_DASH_instructions.cljs$core$IFn$_invoke$arity$1(db);
var inst_15398 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(send_broadcast_instruction,inst_15397);
var inst_15399 = cljs.core.PersistentVector.EMPTY;
var inst_15400 = inst_15399;
var inst_15401 = inst_15398;
var state_15425__$1 = (function (){var statearr_15429 = state_15425;
(statearr_15429[(7)] = inst_15401);

(statearr_15429[(8)] = inst_15400);

return statearr_15429;
})();
var statearr_15430_15448 = state_15425__$1;
(statearr_15430_15448[(2)] = null);

(statearr_15430_15448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (4))){
var inst_15400 = (state_15425[(8)]);
var state_15425__$1 = state_15425;
var statearr_15431_15449 = state_15425__$1;
(statearr_15431_15449[(2)] = inst_15400);

(statearr_15431_15449[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (6))){
var inst_15414 = (state_15425[(2)]);
var state_15425__$1 = state_15425;
var statearr_15432_15450 = state_15425__$1;
(statearr_15432_15450[(2)] = inst_15414);

(statearr_15432_15450[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (3))){
var inst_15416 = (state_15425[(2)]);
var inst_15417 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15416);
var state_15425__$1 = state_15425;
if(inst_15417){
var statearr_15433_15451 = state_15425__$1;
(statearr_15433_15451[(1)] = (8));

} else {
var statearr_15434_15452 = state_15425__$1;
(statearr_15434_15452[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (2))){
var inst_15401 = (state_15425[(7)]);
var inst_15403 = cljs.core.empty_QMARK_(inst_15401);
var state_15425__$1 = state_15425;
if(inst_15403){
var statearr_15435_15453 = state_15425__$1;
(statearr_15435_15453[(1)] = (4));

} else {
var statearr_15436_15454 = state_15425__$1;
(statearr_15436_15454[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (9))){
var inst_15421 = alert("Unable to send all broadcasts");
var state_15425__$1 = state_15425;
var statearr_15437_15455 = state_15425__$1;
(statearr_15437_15455[(2)] = inst_15421);

(statearr_15437_15455[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15426 === (5))){
var inst_15401 = (state_15425[(7)]);
var inst_15406 = cljs.core.first(inst_15401);
var state_15425__$1 = state_15425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15425__$1,(7),inst_15406);
} else {
if((state_val_15426 === (10))){
var inst_15423 = (state_15425[(2)]);
var state_15425__$1 = state_15425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15425__$1,inst_15423);
} else {
if((state_val_15426 === (8))){
var inst_15419 = alert("All Broadcasts Sent");
var state_15425__$1 = state_15425;
var statearr_15438_15456 = state_15425__$1;
(statearr_15438_15456[(2)] = inst_15419);

(statearr_15438_15456[(1)] = (10));


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
});})(c__8909__auto___15446))
;
return ((function (switch__8842__auto__,c__8909__auto___15446){
return (function() {
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0 = (function (){
var statearr_15442 = [null,null,null,null,null,null,null,null,null];
(statearr_15442[(0)] = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__);

(statearr_15442[(1)] = (1));

return statearr_15442;
});
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1 = (function (state_15425){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15425);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15443){if((e15443 instanceof Object)){
var ex__8846__auto__ = e15443;
var statearr_15444_15457 = state_15425;
(statearr_15444_15457[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15425);

return cljs.core.cst$kw$recur;
} else {
throw e15443;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15458 = state_15425;
state_15425 = G__15458;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = function(state_15425){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1.call(this,state_15425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15446))
})();
var state__8911__auto__ = (function (){var statearr_15445 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15446);

return statearr_15445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15446))
);


return db;
});
crisis_dispatch.handlers.start_interval = (function crisis_dispatch$handlers$start_interval(db,_){
var interval = window.setInterval((function (){
var G__15460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15460) : re_frame.core.dispatch.call(null,G__15460));
}),(15000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$interval,interval);
});
crisis_dispatch.handlers.set_informacast_credentials = (function crisis_dispatch$handlers$set_informacast_credentials(db,p__15461){
var vec__15513 = p__15461;
var map__15514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,(0),null);
var map__15514__$1 = ((((!((map__15514 == null)))?((((map__15514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15514):map__15514);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15514__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15514__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))){
var c__8909__auto___15564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password){
return (function (state_15550){
var state_val_15551 = (state_15550[(1)]);
if((state_val_15551 === (1))){
var inst_15516 = crisis_dispatch.handlers.form_full_base_url(db);
var inst_15517 = [cljs.core.str(inst_15516),cljs.core.str("Messages/")].join('');
var inst_15518 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15519 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_15520 = [username,password];
var inst_15521 = cljs.core.PersistentHashMap.fromArrays(inst_15519,inst_15520);
var inst_15522 = [false,inst_15521];
var inst_15523 = cljs.core.PersistentHashMap.fromArrays(inst_15518,inst_15522);
var inst_15524 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15517,cljs.core.array_seq([inst_15523], 0));
var state_15550__$1 = state_15550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15550__$1,(2),inst_15524);
} else {
if((state_val_15551 === (2))){
var inst_15526 = (state_15550[(2)]);
var inst_15527 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15526);
var state_15550__$1 = state_15550;
if(cljs.core.truth_(inst_15527)){
var statearr_15552_15565 = state_15550__$1;
(statearr_15552_15565[(1)] = (3));

} else {
var statearr_15553_15566 = state_15550__$1;
(statearr_15553_15566[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (3))){
var inst_15529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15530 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15531 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username];
var inst_15532 = (new cljs.core.PersistentVector(null,3,(5),inst_15530,inst_15531,null));
var inst_15533 = [cljs.core.cst$kw$set_DASH_in,inst_15532,username];
var inst_15534 = (new cljs.core.PersistentVector(null,3,(5),inst_15529,inst_15533,null));
var inst_15535 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15534) : re_frame.core.dispatch.call(null,inst_15534));
var inst_15536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15538 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password];
var inst_15539 = (new cljs.core.PersistentVector(null,3,(5),inst_15537,inst_15538,null));
var inst_15540 = [cljs.core.cst$kw$set_DASH_in,inst_15539,password];
var inst_15541 = (new cljs.core.PersistentVector(null,3,(5),inst_15536,inst_15540,null));
var inst_15542 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15541) : re_frame.core.dispatch.call(null,inst_15541));
var inst_15543 = alert("Successfully applied credentials");
var inst_15544 = crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
var state_15550__$1 = (function (){var statearr_15554 = state_15550;
(statearr_15554[(7)] = inst_15542);

(statearr_15554[(8)] = inst_15535);

(statearr_15554[(9)] = inst_15543);

return statearr_15554;
})();
var statearr_15555_15567 = state_15550__$1;
(statearr_15555_15567[(2)] = inst_15544);

(statearr_15555_15567[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (4))){
var inst_15546 = alert("Invalid Credentials");
var state_15550__$1 = state_15550;
var statearr_15556_15568 = state_15550__$1;
(statearr_15556_15568[(2)] = inst_15546);

(statearr_15556_15568[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15551 === (5))){
var inst_15548 = (state_15550[(2)]);
var state_15550__$1 = state_15550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15550__$1,inst_15548);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password))
;
return ((function (switch__8842__auto__,c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password){
return (function() {
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0 = (function (){
var statearr_15560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15560[(0)] = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__);

(statearr_15560[(1)] = (1));

return statearr_15560;
});
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1 = (function (state_15550){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15550);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15561){if((e15561 instanceof Object)){
var ex__8846__auto__ = e15561;
var statearr_15562_15569 = state_15550;
(statearr_15562_15569[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15550);

return cljs.core.cst$kw$recur;
} else {
throw e15561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15570 = state_15550;
state_15550 = G__15570;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = function(state_15550){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1.call(this,state_15550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password))
})();
var state__8911__auto__ = (function (){var statearr_15563 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15564);

return statearr_15563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15564,vec__15513,map__15514,map__15514__$1,username,password))
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
