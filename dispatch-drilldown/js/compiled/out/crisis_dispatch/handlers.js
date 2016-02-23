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
crisis_dispatch.handlers.set_in = (function crisis_dispatch$handlers$set_in(db,p__15179){
var vec__15181 = p__15179;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);
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
}catch (e15183){if((e15183 instanceof Error)){
var e = e15183;
alert("Invalid Situation Configuration File");

return console.error(e);
} else {
throw e15183;

}
}});
crisis_dispatch.handlers.open_file = (function crisis_dispatch$handlers$open_file(db,p__15184){
var vec__15190 = p__15184;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(0),null);
var file_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(1),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__15190,file,file_type){
return (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_type,cljs.core.cst$kw$scenario)){
var cljs_obj = cognitect.transit.read(r,e.target.result);
var G__15191_15195 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null),cljs_obj], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15191_15195) : re_frame.core.dispatch.call(null,G__15191_15195));

var G__15192_15196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15192_15196) : re_frame.core.dispatch.call(null,G__15192_15196));

var G__15193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15193) : re_frame.core.dispatch.call(null,G__15193));
} else {
var cljs_obj = clojure.walk.keywordize_keys(cognitect.transit.read(r,e.target.result));
if(cljs.core.truth_(crisis_dispatch.handlers.valid_situation_file_QMARK_(cljs_obj))){
var G__15194 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$situations], null),cljs_obj], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15194) : re_frame.core.dispatch.call(null,G__15194));
} else {
return null;
}
}
});})(file_reader,vec__15190,file,file_type))
;

file_reader.readAsText(file);

return db;
});
crisis_dispatch.handlers.md5_hash = (function crisis_dispatch$handlers$md5_hash(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15201 = arguments.length;
var i__5727__auto___15202 = (0);
while(true){
if((i__5727__auto___15202 < len__5726__auto___15201)){
args__5733__auto__.push((arguments[i__5727__auto___15202]));

var G__15203 = (i__5727__auto___15202 + (1));
i__5727__auto___15202 = G__15203;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15199 = (function (){var G__15200 = (new goog.crypt.Md5());
G__15200.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15200;
})().digest();
return goog.crypt.byteArrayToHex(G__15199);
});

crisis_dispatch.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.md5_hash.cljs$lang$applyTo = (function (seq15197){
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15197));
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
var len__5726__auto___15258 = arguments.length;
var i__5727__auto___15259 = (0);
while(true){
if((i__5727__auto___15259 < len__5726__auto___15258)){
args__5733__auto__.push((arguments[i__5727__auto___15259]));

var G__15260 = (i__5727__auto___15259 + (1));
i__5727__auto___15259 = G__15260;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic = (function (p__15206){
var map__15207 = p__15206;
var map__15207__$1 = ((((!((map__15207 == null)))?((((map__15207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15207):map__15207);
var message_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15207__$1,cljs.core.cst$kw$message_DASH_ids);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15207__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15207__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15207__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15207__$1,cljs.core.cst$kw$error_DASH_cb);
var channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (p1__15204_SHARP_){
return crisis_dispatch.handlers.fetch_full_message_by_id(p1__15204_SHARP_,full_base_url,credentials_map);
});})(map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
,message_ids);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15236){
var state_val_15237 = (state_15236[(1)]);
if((state_val_15237 === (7))){
var inst_15210 = (state_15236[(7)]);
var inst_15211 = (state_15236[(8)]);
var inst_15218 = (state_15236[(2)]);
var inst_15219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15210,inst_15218);
var inst_15220 = cljs.core.rest(inst_15211);
var inst_15221 = cljs.core.vec(inst_15220);
var inst_15210__$1 = inst_15219;
var inst_15211__$1 = inst_15221;
var state_15236__$1 = (function (){var statearr_15238 = state_15236;
(statearr_15238[(7)] = inst_15210__$1);

(statearr_15238[(8)] = inst_15211__$1);

return statearr_15238;
})();
var statearr_15239_15261 = state_15236__$1;
(statearr_15239_15261[(2)] = null);

(statearr_15239_15261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (1))){
var inst_15209 = cljs.core.PersistentVector.EMPTY;
var inst_15210 = inst_15209;
var inst_15211 = channels;
var state_15236__$1 = (function (){var statearr_15240 = state_15236;
(statearr_15240[(7)] = inst_15210);

(statearr_15240[(8)] = inst_15211);

return statearr_15240;
})();
var statearr_15241_15262 = state_15236__$1;
(statearr_15241_15262[(2)] = null);

(statearr_15241_15262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (4))){
var inst_15210 = (state_15236[(7)]);
var state_15236__$1 = state_15236;
var statearr_15242_15263 = state_15236__$1;
(statearr_15242_15263[(2)] = inst_15210);

(statearr_15242_15263[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (6))){
var inst_15224 = (state_15236[(2)]);
var state_15236__$1 = state_15236;
var statearr_15243_15264 = state_15236__$1;
(statearr_15243_15264[(2)] = inst_15224);

(statearr_15243_15264[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (3))){
var inst_15226 = (state_15236[(9)]);
var inst_15226__$1 = (state_15236[(2)]);
var inst_15227 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15226__$1);
var state_15236__$1 = (function (){var statearr_15244 = state_15236;
(statearr_15244[(9)] = inst_15226__$1);

return statearr_15244;
})();
if(inst_15227){
var statearr_15245_15265 = state_15236__$1;
(statearr_15245_15265[(1)] = (8));

} else {
var statearr_15246_15266 = state_15236__$1;
(statearr_15246_15266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (2))){
var inst_15211 = (state_15236[(8)]);
var inst_15213 = cljs.core.empty_QMARK_(inst_15211);
var state_15236__$1 = state_15236;
if(inst_15213){
var statearr_15247_15267 = state_15236__$1;
(statearr_15247_15267[(1)] = (4));

} else {
var statearr_15248_15268 = state_15236__$1;
(statearr_15248_15268[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (9))){
var inst_15232 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15236__$1 = state_15236;
var statearr_15249_15269 = state_15236__$1;
(statearr_15249_15269[(2)] = inst_15232);

(statearr_15249_15269[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15237 === (5))){
var inst_15211 = (state_15236[(8)]);
var inst_15216 = cljs.core.first(inst_15211);
var state_15236__$1 = state_15236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15236__$1,(7),inst_15216);
} else {
if((state_val_15237 === (10))){
var inst_15234 = (state_15236[(2)]);
var state_15236__$1 = state_15236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15236__$1,inst_15234);
} else {
if((state_val_15237 === (8))){
var inst_15226 = (state_15236[(9)]);
var inst_15229 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,inst_15226);
var inst_15230 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15229) : success_cb.call(null,inst_15229));
var state_15236__$1 = state_15236;
var statearr_15250_15270 = state_15236__$1;
(statearr_15250_15270[(2)] = inst_15230);

(statearr_15250_15270[(1)] = (10));


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
});})(c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15254[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15254[(1)] = (1));

return statearr_15254;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15236){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15236);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15255){if((e15255 instanceof Object)){
var ex__8846__auto__ = e15255;
var statearr_15256_15271 = state_15236;
(statearr_15256_15271[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15236);

return cljs.core.cst$kw$recur;
} else {
throw e15255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15272 = state_15236;
state_15236 = G__15272;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15236){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15257 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,channels,map__15207,map__15207__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$applyTo = (function (seq15205){
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15205));
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
crisis_dispatch.handlers.fetch_full_messages_of_scenario = (function crisis_dispatch$handlers$fetch_full_messages_of_scenario(db,p__15275){
var vec__15279 = p__15275;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15279,(0),null);
var temp__4423__auto___15282 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto___15282)){
var scenario_15283 = temp__4423__auto___15282;
var message_ids_15284 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name){
return (function (p1__15273_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__15273_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name))
,cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(scenario_15283));
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,message_ids_15284,cljs.core.cst$kw$full_DASH_base_DASH_url,crisis_dispatch.handlers.form_full_base_url(db),cljs.core.cst$kw$credentials_DASH_map,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$success_DASH_cb,((function (message_ids_15284,scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name){
return (function (p1__15274_SHARP_){
var G__15280_15285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_fetched_DASH_messages,p1__15274_SHARP_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15280_15285) : re_frame.core.dispatch.call(null,G__15280_15285));

var G__15281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15281) : re_frame.core.dispatch.call(null,G__15281));
});})(message_ids_15284,scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name))
,cljs.core.cst$kw$error_DASH_cb,((function (message_ids_15284,scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name){
return (function (){
return alert("Error: Unsuccessful fetch of at least one message in scenario.  Not able to proceed");
});})(message_ids_15284,scenario_15283,temp__4423__auto___15282,vec__15279,scenario_name))
], 0));
} else {
crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
}

return db;
});
/**
 * Only called when all message response status codes are successful in nature
 */
crisis_dispatch.handlers.save_fetched_messages = (function crisis_dispatch$handlers$save_fetched_messages(db,p__15286){
var vec__15288 = p__15286;
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,messages);
});
crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration = (function crisis_dispatch$handlers$get_all_recipient_group_ids_in_configuration(db){
var scenarios = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenarios){
return (function (p__15295){
var vec__15296 = p__15295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15296,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15296,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15296,_,scenario_val,scenarios){
return (function (p__15297){
var vec__15298 = p__15297;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15298,(1),null);
if(!(cljs.core.map_QMARK_(v1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v1);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15298,___$1,v1,vec__15296,_,scenario_val,scenarios){
return (function (p__15299){
var vec__15300 = p__15299;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15300,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v2);
});})(vec__15298,___$1,v1,vec__15296,_,scenario_val,scenarios))
,cljs.core.seq(v1));
}
});})(vec__15296,_,scenario_val,scenarios))
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
var len__5726__auto___15339 = arguments.length;
var i__5727__auto___15340 = (0);
while(true){
if((i__5727__auto___15340 < len__5726__auto___15339)){
args__5733__auto__.push((arguments[i__5727__auto___15340]));

var G__15341 = (i__5727__auto___15340 + (1));
i__5727__auto___15340 = G__15341;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic = (function (p__15302){
var map__15303 = p__15302;
var map__15303__$1 = ((((!((map__15303 == null)))?((((map__15303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15303):map__15303);
var recipient_group_ids_in_configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15303__$1,cljs.core.cst$kw$error_DASH_cb);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15325){
var state_val_15326 = (state_15325[(1)]);
if((state_val_15326 === (1))){
var inst_15305 = [cljs.core.str(full_base_url),cljs.core.str("RecipientGroups/")].join('');
var inst_15306 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15307 = [false,credentials_map];
var inst_15308 = cljs.core.PersistentHashMap.fromArrays(inst_15306,inst_15307);
var inst_15309 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15305,cljs.core.array_seq([inst_15308], 0));
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15325__$1,(2),inst_15309);
} else {
if((state_val_15326 === (2))){
var inst_15311 = (state_15325[(7)]);
var inst_15311__$1 = (state_15325[(2)]);
var inst_15312 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15311__$1);
var state_15325__$1 = (function (){var statearr_15327 = state_15325;
(statearr_15327[(7)] = inst_15311__$1);

return statearr_15327;
})();
if(cljs.core.truth_(inst_15312)){
var statearr_15328_15342 = state_15325__$1;
(statearr_15328_15342[(1)] = (3));

} else {
var statearr_15329_15343 = state_15325__$1;
(statearr_15329_15343[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15326 === (3))){
var inst_15311 = (state_15325[(7)]);
var inst_15314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15315 = [cljs.core.cst$kw$body,cljs.core.cst$kw$data];
var inst_15316 = (new cljs.core.PersistentVector(null,2,(5),inst_15314,inst_15315,null));
var inst_15317 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_15311,inst_15316);
var inst_15318 = crisis_dispatch.handlers.filter_recipient_groups(inst_15317,recipient_group_ids_in_configuration);
var inst_15319 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15318) : success_cb.call(null,inst_15318));
var state_15325__$1 = state_15325;
var statearr_15330_15344 = state_15325__$1;
(statearr_15330_15344[(2)] = inst_15319);

(statearr_15330_15344[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15326 === (4))){
var inst_15321 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15325__$1 = state_15325;
var statearr_15331_15345 = state_15325__$1;
(statearr_15331_15345[(2)] = inst_15321);

(statearr_15331_15345[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15326 === (5))){
var inst_15323 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15325__$1,inst_15323);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15335 = [null,null,null,null,null,null,null,null];
(statearr_15335[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15335[(1)] = (1));

return statearr_15335;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15325){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15325);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15336){if((e15336 instanceof Object)){
var ex__8846__auto__ = e15336;
var statearr_15337_15346 = state_15325;
(statearr_15337_15346[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15325);

return cljs.core.cst$kw$recur;
} else {
throw e15336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15347 = state_15325;
state_15325 = G__15347;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15325){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15338 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,map__15303,map__15303__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$applyTo = (function (seq15301){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15301));
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
var temp__4425__auto___15354 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration], null));
if(cljs.core.truth_(temp__4425__auto___15354)){
var admin_configuration_15355 = temp__4425__auto___15354;
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1(admin_configuration_15355);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(admin_configuration_15355);
if(cljs.core.truth_(and__4656__auto____$1)){
return cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(admin_configuration_15355);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
var full_base_url_15356 = crisis_dispatch.handlers.form_full_base_url(db);
var credentials_map_15357 = crisis_dispatch.handlers.form_credentials_map(db);
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,crisis_dispatch.handlers.get_all_message_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15356,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15357,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354){
return (function (messages){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration,crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15356,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15357,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354){
return (function (recipient_groups){
var G__15351 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null)),crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crisis_dispatch.handlers.desensitize_recipient_groups(recipient_groups))], 0)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15351) : re_frame.core.dispatch.call(null,G__15351));
});})(full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354){
return (function (){
var G__15352_15358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15352_15358) : re_frame.core.dispatch.call(null,G__15352_15358));

return console.error("Unable to fetch all recipient groups from InformaCast.  Unable to proceed");
});})(full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354))
], 0));
});})(full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354){
return (function (){
var G__15353_15359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15353_15359) : re_frame.core.dispatch.call(null,G__15353_15359));

return console.error("Unable to fetch all messages from InformaCast.  Unable to proceed");
});})(full_base_url_15356,credentials_map_15357,admin_configuration_15355,temp__4425__auto___15354))
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
return (function (p1__15360_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15360_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(destination_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_parameter_options,destination_determined_by)], null)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15361_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15361_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destination_mapping,message_id));
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var subsitute_parameters = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_subsitute_parameters(message_str){
if(cljs.core.truth_(message_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (r,p__15376){
var vec__15377 = p__15376;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(1),null);
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
var c__8909__auto___15476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15476){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15476){
return (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (7))){
var inst_15431 = (state_15455[(7)]);
var inst_15430 = (state_15455[(8)]);
var inst_15438 = (state_15455[(2)]);
var inst_15439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15430,inst_15438);
var inst_15440 = cljs.core.rest(inst_15431);
var inst_15441 = cljs.core.vec(inst_15440);
var inst_15430__$1 = inst_15439;
var inst_15431__$1 = inst_15441;
var state_15455__$1 = (function (){var statearr_15457 = state_15455;
(statearr_15457[(7)] = inst_15431__$1);

(statearr_15457[(8)] = inst_15430__$1);

return statearr_15457;
})();
var statearr_15458_15477 = state_15455__$1;
(statearr_15458_15477[(2)] = null);

(statearr_15458_15477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (1))){
var inst_15427 = cljs.core.cst$kw$broadcast_DASH_instructions.cljs$core$IFn$_invoke$arity$1(db);
var inst_15428 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(send_broadcast_instruction,inst_15427);
var inst_15429 = cljs.core.PersistentVector.EMPTY;
var inst_15430 = inst_15429;
var inst_15431 = inst_15428;
var state_15455__$1 = (function (){var statearr_15459 = state_15455;
(statearr_15459[(7)] = inst_15431);

(statearr_15459[(8)] = inst_15430);

return statearr_15459;
})();
var statearr_15460_15478 = state_15455__$1;
(statearr_15460_15478[(2)] = null);

(statearr_15460_15478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (4))){
var inst_15430 = (state_15455[(8)]);
var state_15455__$1 = state_15455;
var statearr_15461_15479 = state_15455__$1;
(statearr_15461_15479[(2)] = inst_15430);

(statearr_15461_15479[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (6))){
var inst_15444 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15462_15480 = state_15455__$1;
(statearr_15462_15480[(2)] = inst_15444);

(statearr_15462_15480[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (3))){
var inst_15446 = (state_15455[(2)]);
var inst_15447 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15446);
var state_15455__$1 = state_15455;
if(inst_15447){
var statearr_15463_15481 = state_15455__$1;
(statearr_15463_15481[(1)] = (8));

} else {
var statearr_15464_15482 = state_15455__$1;
(statearr_15464_15482[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (2))){
var inst_15431 = (state_15455[(7)]);
var inst_15433 = cljs.core.empty_QMARK_(inst_15431);
var state_15455__$1 = state_15455;
if(inst_15433){
var statearr_15465_15483 = state_15455__$1;
(statearr_15465_15483[(1)] = (4));

} else {
var statearr_15466_15484 = state_15455__$1;
(statearr_15466_15484[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (9))){
var inst_15451 = alert("Unable to send all broadcasts");
var state_15455__$1 = state_15455;
var statearr_15467_15485 = state_15455__$1;
(statearr_15467_15485[(2)] = inst_15451);

(statearr_15467_15485[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15456 === (5))){
var inst_15431 = (state_15455[(7)]);
var inst_15436 = cljs.core.first(inst_15431);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15455__$1,(7),inst_15436);
} else {
if((state_val_15456 === (10))){
var inst_15453 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15455__$1,inst_15453);
} else {
if((state_val_15456 === (8))){
var inst_15449 = alert("All Broadcasts Sent");
var state_15455__$1 = state_15455;
var statearr_15468_15486 = state_15455__$1;
(statearr_15468_15486[(2)] = inst_15449);

(statearr_15468_15486[(1)] = (10));


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
});})(c__8909__auto___15476))
;
return ((function (switch__8842__auto__,c__8909__auto___15476){
return (function() {
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0 = (function (){
var statearr_15472 = [null,null,null,null,null,null,null,null,null];
(statearr_15472[(0)] = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__);

(statearr_15472[(1)] = (1));

return statearr_15472;
});
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1 = (function (state_15455){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15455);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15473){if((e15473 instanceof Object)){
var ex__8846__auto__ = e15473;
var statearr_15474_15487 = state_15455;
(statearr_15474_15487[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15455);

return cljs.core.cst$kw$recur;
} else {
throw e15473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15488 = state_15455;
state_15455 = G__15488;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15476))
})();
var state__8911__auto__ = (function (){var statearr_15475 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15476);

return statearr_15475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15476))
);


return db;
});
crisis_dispatch.handlers.start_interval = (function crisis_dispatch$handlers$start_interval(db,_){
var interval = window.setInterval((function (){
var G__15490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15490) : re_frame.core.dispatch.call(null,G__15490));
}),(15000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$interval,interval);
});
crisis_dispatch.handlers.set_informacast_credentials = (function crisis_dispatch$handlers$set_informacast_credentials(db,p__15491){
var vec__15543 = p__15491;
var map__15544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543,(0),null);
var map__15544__$1 = ((((!((map__15544 == null)))?((((map__15544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15544):map__15544);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15544__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15544__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))){
var c__8909__auto___15594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password){
return (function (state_15580){
var state_val_15581 = (state_15580[(1)]);
if((state_val_15581 === (1))){
var inst_15546 = crisis_dispatch.handlers.form_full_base_url(db);
var inst_15547 = [cljs.core.str(inst_15546),cljs.core.str("Messages/")].join('');
var inst_15548 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15549 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_15550 = [username,password];
var inst_15551 = cljs.core.PersistentHashMap.fromArrays(inst_15549,inst_15550);
var inst_15552 = [false,inst_15551];
var inst_15553 = cljs.core.PersistentHashMap.fromArrays(inst_15548,inst_15552);
var inst_15554 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15547,cljs.core.array_seq([inst_15553], 0));
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15580__$1,(2),inst_15554);
} else {
if((state_val_15581 === (2))){
var inst_15556 = (state_15580[(2)]);
var inst_15557 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15556);
var state_15580__$1 = state_15580;
if(cljs.core.truth_(inst_15557)){
var statearr_15582_15595 = state_15580__$1;
(statearr_15582_15595[(1)] = (3));

} else {
var statearr_15583_15596 = state_15580__$1;
(statearr_15583_15596[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15581 === (3))){
var inst_15559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15560 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15561 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username];
var inst_15562 = (new cljs.core.PersistentVector(null,3,(5),inst_15560,inst_15561,null));
var inst_15563 = [cljs.core.cst$kw$set_DASH_in,inst_15562,username];
var inst_15564 = (new cljs.core.PersistentVector(null,3,(5),inst_15559,inst_15563,null));
var inst_15565 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15564) : re_frame.core.dispatch.call(null,inst_15564));
var inst_15566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15567 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15568 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password];
var inst_15569 = (new cljs.core.PersistentVector(null,3,(5),inst_15567,inst_15568,null));
var inst_15570 = [cljs.core.cst$kw$set_DASH_in,inst_15569,password];
var inst_15571 = (new cljs.core.PersistentVector(null,3,(5),inst_15566,inst_15570,null));
var inst_15572 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15571) : re_frame.core.dispatch.call(null,inst_15571));
var inst_15573 = alert("Successfully applied credentials");
var inst_15574 = crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
var state_15580__$1 = (function (){var statearr_15584 = state_15580;
(statearr_15584[(7)] = inst_15572);

(statearr_15584[(8)] = inst_15565);

(statearr_15584[(9)] = inst_15573);

return statearr_15584;
})();
var statearr_15585_15597 = state_15580__$1;
(statearr_15585_15597[(2)] = inst_15574);

(statearr_15585_15597[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15581 === (4))){
var inst_15576 = alert("Invalid Credentials");
var state_15580__$1 = state_15580;
var statearr_15586_15598 = state_15580__$1;
(statearr_15586_15598[(2)] = inst_15576);

(statearr_15586_15598[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15581 === (5))){
var inst_15578 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15580__$1,inst_15578);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password))
;
return ((function (switch__8842__auto__,c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password){
return (function() {
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0 = (function (){
var statearr_15590 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15590[(0)] = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__);

(statearr_15590[(1)] = (1));

return statearr_15590;
});
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1 = (function (state_15580){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15580);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15591){if((e15591 instanceof Object)){
var ex__8846__auto__ = e15591;
var statearr_15592_15599 = state_15580;
(statearr_15592_15599[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15580);

return cljs.core.cst$kw$recur;
} else {
throw e15591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15600 = state_15580;
state_15580 = G__15600;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password))
})();
var state__8911__auto__ = (function (){var statearr_15593 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15594);

return statearr_15593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15594,vec__15543,map__15544,map__15544__$1,username,password))
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
