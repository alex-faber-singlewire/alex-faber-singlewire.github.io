// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.handlers');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
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
crisis_dispatch.handlers.set_in = (function crisis_dispatch$handlers$set_in(db,p__15049){
var vec__15051 = p__15049;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15051,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_dispatch.handlers.open_file = (function crisis_dispatch$handlers$open_file(db,p__15052){
var vec__15057 = p__15052;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(0),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__15057,file){
return (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
var cljs_obj = cognitect.transit.read(r,e.target.result);
var G__15058_15061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null),cljs_obj], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15058_15061) : re_frame.core.dispatch.call(null,G__15058_15061));

var G__15059_15062 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15059_15062) : re_frame.core.dispatch.call(null,G__15059_15062));

var G__15060_15063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15060_15063) : re_frame.core.dispatch.call(null,G__15060_15063));

return crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/credentials"], 0));
});})(file_reader,vec__15057,file))
;

file_reader.readAsText(file);

return db;
});
crisis_dispatch.handlers.md5_hash = (function crisis_dispatch$handlers$md5_hash(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15068 = arguments.length;
var i__5727__auto___15069 = (0);
while(true){
if((i__5727__auto___15069 < len__5726__auto___15068)){
args__5733__auto__.push((arguments[i__5727__auto___15069]));

var G__15070 = (i__5727__auto___15069 + (1));
i__5727__auto___15069 = G__15070;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15066 = (function (){var G__15067 = (new goog.crypt.Md5());
G__15067.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15067;
})().digest();
return goog.crypt.byteArrayToHex(G__15066);
});

crisis_dispatch.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.md5_hash.cljs$lang$applyTo = (function (seq15064){
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15064));
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
var len__5726__auto___15125 = arguments.length;
var i__5727__auto___15126 = (0);
while(true){
if((i__5727__auto___15126 < len__5726__auto___15125)){
args__5733__auto__.push((arguments[i__5727__auto___15126]));

var G__15127 = (i__5727__auto___15126 + (1));
i__5727__auto___15126 = G__15127;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic = (function (p__15073){
var map__15074 = p__15073;
var map__15074__$1 = ((((!((map__15074 == null)))?((((map__15074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15074):map__15074);
var message_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$message_DASH_ids);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15074__$1,cljs.core.cst$kw$error_DASH_cb);
var channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (p1__15071_SHARP_){
return crisis_dispatch.handlers.fetch_full_message_by_id(p1__15071_SHARP_,full_base_url,credentials_map);
});})(map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
,message_ids);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15103){
var state_val_15104 = (state_15103[(1)]);
if((state_val_15104 === (7))){
var inst_15078 = (state_15103[(7)]);
var inst_15077 = (state_15103[(8)]);
var inst_15085 = (state_15103[(2)]);
var inst_15086 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15077,inst_15085);
var inst_15087 = cljs.core.rest(inst_15078);
var inst_15088 = cljs.core.vec(inst_15087);
var inst_15077__$1 = inst_15086;
var inst_15078__$1 = inst_15088;
var state_15103__$1 = (function (){var statearr_15105 = state_15103;
(statearr_15105[(7)] = inst_15078__$1);

(statearr_15105[(8)] = inst_15077__$1);

return statearr_15105;
})();
var statearr_15106_15128 = state_15103__$1;
(statearr_15106_15128[(2)] = null);

(statearr_15106_15128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (1))){
var inst_15076 = cljs.core.PersistentVector.EMPTY;
var inst_15077 = inst_15076;
var inst_15078 = channels;
var state_15103__$1 = (function (){var statearr_15107 = state_15103;
(statearr_15107[(7)] = inst_15078);

(statearr_15107[(8)] = inst_15077);

return statearr_15107;
})();
var statearr_15108_15129 = state_15103__$1;
(statearr_15108_15129[(2)] = null);

(statearr_15108_15129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (4))){
var inst_15077 = (state_15103[(8)]);
var state_15103__$1 = state_15103;
var statearr_15109_15130 = state_15103__$1;
(statearr_15109_15130[(2)] = inst_15077);

(statearr_15109_15130[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (6))){
var inst_15091 = (state_15103[(2)]);
var state_15103__$1 = state_15103;
var statearr_15110_15131 = state_15103__$1;
(statearr_15110_15131[(2)] = inst_15091);

(statearr_15110_15131[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (3))){
var inst_15093 = (state_15103[(9)]);
var inst_15093__$1 = (state_15103[(2)]);
var inst_15094 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15093__$1);
var state_15103__$1 = (function (){var statearr_15111 = state_15103;
(statearr_15111[(9)] = inst_15093__$1);

return statearr_15111;
})();
if(inst_15094){
var statearr_15112_15132 = state_15103__$1;
(statearr_15112_15132[(1)] = (8));

} else {
var statearr_15113_15133 = state_15103__$1;
(statearr_15113_15133[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (2))){
var inst_15078 = (state_15103[(7)]);
var inst_15080 = cljs.core.empty_QMARK_(inst_15078);
var state_15103__$1 = state_15103;
if(inst_15080){
var statearr_15114_15134 = state_15103__$1;
(statearr_15114_15134[(1)] = (4));

} else {
var statearr_15115_15135 = state_15103__$1;
(statearr_15115_15135[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (9))){
var inst_15099 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15103__$1 = state_15103;
var statearr_15116_15136 = state_15103__$1;
(statearr_15116_15136[(2)] = inst_15099);

(statearr_15116_15136[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15104 === (5))){
var inst_15078 = (state_15103[(7)]);
var inst_15083 = cljs.core.first(inst_15078);
var state_15103__$1 = state_15103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15103__$1,(7),inst_15083);
} else {
if((state_val_15104 === (10))){
var inst_15101 = (state_15103[(2)]);
var state_15103__$1 = state_15103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15103__$1,inst_15101);
} else {
if((state_val_15104 === (8))){
var inst_15093 = (state_15103[(9)]);
var inst_15096 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,inst_15093);
var inst_15097 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15096) : success_cb.call(null,inst_15096));
var state_15103__$1 = state_15103;
var statearr_15117_15137 = state_15103__$1;
(statearr_15117_15137[(2)] = inst_15097);

(statearr_15117_15137[(1)] = (10));


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
});})(c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15121[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15121[(1)] = (1));

return statearr_15121;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15103){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15103);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15122){if((e15122 instanceof Object)){
var ex__8846__auto__ = e15122;
var statearr_15123_15138 = state_15103;
(statearr_15123_15138[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15103);

return cljs.core.cst$kw$recur;
} else {
throw e15122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15139 = state_15103;
state_15103 = G__15139;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15103){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15124 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,channels,map__15074,map__15074__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$applyTo = (function (seq15072){
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15072));
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
crisis_dispatch.handlers.fetch_full_messages_of_scenario = (function crisis_dispatch$handlers$fetch_full_messages_of_scenario(db,p__15142){
var vec__15146 = p__15142;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15146,(0),null);
var temp__4423__auto___15149 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto___15149)){
var scenario_15150 = temp__4423__auto___15149;
var message_ids_15151 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name){
return (function (p1__15140_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__15140_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name))
,cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(scenario_15150));
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,message_ids_15151,cljs.core.cst$kw$full_DASH_base_DASH_url,crisis_dispatch.handlers.form_full_base_url(db),cljs.core.cst$kw$credentials_DASH_map,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$success_DASH_cb,((function (message_ids_15151,scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name){
return (function (p1__15141_SHARP_){
var G__15147_15152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_fetched_DASH_messages,p1__15141_SHARP_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15147_15152) : re_frame.core.dispatch.call(null,G__15147_15152));

var G__15148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15148) : re_frame.core.dispatch.call(null,G__15148));
});})(message_ids_15151,scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name))
,cljs.core.cst$kw$error_DASH_cb,((function (message_ids_15151,scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name){
return (function (){
return alert("Error: Unsuccessful fetch of at least one message in scenario.  Not able to proceed");
});})(message_ids_15151,scenario_15150,temp__4423__auto___15149,vec__15146,scenario_name))
], 0));
} else {
crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
}

return db;
});
/**
 * Only called when all message response status codes are successful in nature
 */
crisis_dispatch.handlers.save_fetched_messages = (function crisis_dispatch$handlers$save_fetched_messages(db,p__15153){
var vec__15155 = p__15153;
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15155,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,messages);
});
crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration = (function crisis_dispatch$handlers$get_all_recipient_group_ids_in_configuration(db){
var scenarios = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenarios){
return (function (p__15162){
var vec__15163 = p__15162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15163,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15163,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15163,_,scenario_val,scenarios){
return (function (p__15164){
var vec__15165 = p__15164;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15165,(1),null);
if(!(cljs.core.map_QMARK_(v1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v1);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15165,___$1,v1,vec__15163,_,scenario_val,scenarios){
return (function (p__15166){
var vec__15167 = p__15166;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v2);
});})(vec__15165,___$1,v1,vec__15163,_,scenario_val,scenarios))
,cljs.core.seq(v1));
}
});})(vec__15163,_,scenario_val,scenarios))
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
var len__5726__auto___15206 = arguments.length;
var i__5727__auto___15207 = (0);
while(true){
if((i__5727__auto___15207 < len__5726__auto___15206)){
args__5733__auto__.push((arguments[i__5727__auto___15207]));

var G__15208 = (i__5727__auto___15207 + (1));
i__5727__auto___15207 = G__15208;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic = (function (p__15169){
var map__15170 = p__15169;
var map__15170__$1 = ((((!((map__15170 == null)))?((((map__15170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15170):map__15170);
var recipient_group_ids_in_configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15170__$1,cljs.core.cst$kw$error_DASH_cb);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15192){
var state_val_15193 = (state_15192[(1)]);
if((state_val_15193 === (1))){
var inst_15172 = [cljs.core.str(full_base_url),cljs.core.str("RecipientGroups/")].join('');
var inst_15173 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15174 = [false,credentials_map];
var inst_15175 = cljs.core.PersistentHashMap.fromArrays(inst_15173,inst_15174);
var inst_15176 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15172,cljs.core.array_seq([inst_15175], 0));
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15192__$1,(2),inst_15176);
} else {
if((state_val_15193 === (2))){
var inst_15178 = (state_15192[(7)]);
var inst_15178__$1 = (state_15192[(2)]);
var inst_15179 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15178__$1);
var state_15192__$1 = (function (){var statearr_15194 = state_15192;
(statearr_15194[(7)] = inst_15178__$1);

return statearr_15194;
})();
if(cljs.core.truth_(inst_15179)){
var statearr_15195_15209 = state_15192__$1;
(statearr_15195_15209[(1)] = (3));

} else {
var statearr_15196_15210 = state_15192__$1;
(statearr_15196_15210[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (3))){
var inst_15178 = (state_15192[(7)]);
var inst_15181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15182 = [cljs.core.cst$kw$body,cljs.core.cst$kw$data];
var inst_15183 = (new cljs.core.PersistentVector(null,2,(5),inst_15181,inst_15182,null));
var inst_15184 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_15178,inst_15183);
var inst_15185 = crisis_dispatch.handlers.filter_recipient_groups(inst_15184,recipient_group_ids_in_configuration);
var inst_15186 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15185) : success_cb.call(null,inst_15185));
var state_15192__$1 = state_15192;
var statearr_15197_15211 = state_15192__$1;
(statearr_15197_15211[(2)] = inst_15186);

(statearr_15197_15211[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (4))){
var inst_15188 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15192__$1 = state_15192;
var statearr_15198_15212 = state_15192__$1;
(statearr_15198_15212[(2)] = inst_15188);

(statearr_15198_15212[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15193 === (5))){
var inst_15190 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15192__$1,inst_15190);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15202 = [null,null,null,null,null,null,null,null];
(statearr_15202[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15202[(1)] = (1));

return statearr_15202;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15192){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15192);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15203){if((e15203 instanceof Object)){
var ex__8846__auto__ = e15203;
var statearr_15204_15213 = state_15192;
(statearr_15204_15213[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15192);

return cljs.core.cst$kw$recur;
} else {
throw e15203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15214 = state_15192;
state_15192 = G__15214;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15192){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15205 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,map__15170,map__15170__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$applyTo = (function (seq15168){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15168));
});
crisis_dispatch.handlers.validate_ic_state = (function crisis_dispatch$handlers$validate_ic_state(db,_){
var temp__4425__auto___15221 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration], null));
if(cljs.core.truth_(temp__4425__auto___15221)){
var admin_configuration_15222 = temp__4425__auto___15221;
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1(admin_configuration_15222);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(admin_configuration_15222);
if(cljs.core.truth_(and__4656__auto____$1)){
return cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(admin_configuration_15222);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
var full_base_url_15223 = crisis_dispatch.handlers.form_full_base_url(db);
var credentials_map_15224 = crisis_dispatch.handlers.form_credentials_map(db);
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,crisis_dispatch.handlers.get_all_message_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15223,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15224,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221){
return (function (messages){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration,crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15223,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15224,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221){
return (function (recipient_groups){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[start] ========== MESSAGES =========== [start]"], 0));

crisis_dispatch.handlers.pprint(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[end]   ========== MESSAGES ===========   [end]"], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[start] ========== RECIPIENT GROUPS =========== [start]"], 0));

crisis_dispatch.handlers.pprint(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,recipient_groups));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[end]   ========== RECIPIENT GROUPS ===========   [end]"], 0));

var G__15218 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null)),crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,recipient_groups)], 0)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15218) : re_frame.core.dispatch.call(null,G__15218));
});})(full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221){
return (function (){
var G__15219_15225 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15219_15225) : re_frame.core.dispatch.call(null,G__15219_15225));

return console.error("Unable to fetch all recipient groups from InformaCast.  Unable to proceed");
});})(full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221))
], 0));
});})(full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221){
return (function (){
var G__15220_15226 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15220_15226) : re_frame.core.dispatch.call(null,G__15220_15226));

return console.error("Unable to fetch all messages from InformaCast.  Unable to proceed");
});})(full_base_url_15223,credentials_map_15224,admin_configuration_15222,temp__4425__auto___15221))
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
return (function (p1__15227_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15227_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(destination_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_parameter_options,destination_determined_by)], null)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15228_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15228_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destination_mapping,message_id));
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var subsitute_parameters = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_subsitute_parameters(message_str){
if(cljs.core.truth_(message_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (r,p__15243){
var vec__15244 = p__15243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(1),null);
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
var c__8909__auto___15343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15343){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15343){
return (function (state_15322){
var state_val_15323 = (state_15322[(1)]);
if((state_val_15323 === (7))){
var inst_15297 = (state_15322[(7)]);
var inst_15298 = (state_15322[(8)]);
var inst_15305 = (state_15322[(2)]);
var inst_15306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15297,inst_15305);
var inst_15307 = cljs.core.rest(inst_15298);
var inst_15308 = cljs.core.vec(inst_15307);
var inst_15297__$1 = inst_15306;
var inst_15298__$1 = inst_15308;
var state_15322__$1 = (function (){var statearr_15324 = state_15322;
(statearr_15324[(7)] = inst_15297__$1);

(statearr_15324[(8)] = inst_15298__$1);

return statearr_15324;
})();
var statearr_15325_15344 = state_15322__$1;
(statearr_15325_15344[(2)] = null);

(statearr_15325_15344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (1))){
var inst_15294 = cljs.core.cst$kw$broadcast_DASH_instructions.cljs$core$IFn$_invoke$arity$1(db);
var inst_15295 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(send_broadcast_instruction,inst_15294);
var inst_15296 = cljs.core.PersistentVector.EMPTY;
var inst_15297 = inst_15296;
var inst_15298 = inst_15295;
var state_15322__$1 = (function (){var statearr_15326 = state_15322;
(statearr_15326[(7)] = inst_15297);

(statearr_15326[(8)] = inst_15298);

return statearr_15326;
})();
var statearr_15327_15345 = state_15322__$1;
(statearr_15327_15345[(2)] = null);

(statearr_15327_15345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (4))){
var inst_15297 = (state_15322[(7)]);
var state_15322__$1 = state_15322;
var statearr_15328_15346 = state_15322__$1;
(statearr_15328_15346[(2)] = inst_15297);

(statearr_15328_15346[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (6))){
var inst_15311 = (state_15322[(2)]);
var state_15322__$1 = state_15322;
var statearr_15329_15347 = state_15322__$1;
(statearr_15329_15347[(2)] = inst_15311);

(statearr_15329_15347[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (3))){
var inst_15313 = (state_15322[(2)]);
var inst_15314 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15313);
var state_15322__$1 = state_15322;
if(inst_15314){
var statearr_15330_15348 = state_15322__$1;
(statearr_15330_15348[(1)] = (8));

} else {
var statearr_15331_15349 = state_15322__$1;
(statearr_15331_15349[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (2))){
var inst_15298 = (state_15322[(8)]);
var inst_15300 = cljs.core.empty_QMARK_(inst_15298);
var state_15322__$1 = state_15322;
if(inst_15300){
var statearr_15332_15350 = state_15322__$1;
(statearr_15332_15350[(1)] = (4));

} else {
var statearr_15333_15351 = state_15322__$1;
(statearr_15333_15351[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (9))){
var inst_15318 = alert("Unable to send all broadcasts");
var state_15322__$1 = state_15322;
var statearr_15334_15352 = state_15322__$1;
(statearr_15334_15352[(2)] = inst_15318);

(statearr_15334_15352[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15323 === (5))){
var inst_15298 = (state_15322[(8)]);
var inst_15303 = cljs.core.first(inst_15298);
var state_15322__$1 = state_15322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15322__$1,(7),inst_15303);
} else {
if((state_val_15323 === (10))){
var inst_15320 = (state_15322[(2)]);
var state_15322__$1 = state_15322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15322__$1,inst_15320);
} else {
if((state_val_15323 === (8))){
var inst_15316 = alert("All Broadcasts Sent");
var state_15322__$1 = state_15322;
var statearr_15335_15353 = state_15322__$1;
(statearr_15335_15353[(2)] = inst_15316);

(statearr_15335_15353[(1)] = (10));


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
});})(c__8909__auto___15343))
;
return ((function (switch__8842__auto__,c__8909__auto___15343){
return (function() {
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0 = (function (){
var statearr_15339 = [null,null,null,null,null,null,null,null,null];
(statearr_15339[(0)] = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__);

(statearr_15339[(1)] = (1));

return statearr_15339;
});
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1 = (function (state_15322){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15322);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15340){if((e15340 instanceof Object)){
var ex__8846__auto__ = e15340;
var statearr_15341_15354 = state_15322;
(statearr_15341_15354[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15322);

return cljs.core.cst$kw$recur;
} else {
throw e15340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15355 = state_15322;
state_15322 = G__15355;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = function(state_15322){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1.call(this,state_15322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15343))
})();
var state__8911__auto__ = (function (){var statearr_15342 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15343);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15343))
);


return db;
});
crisis_dispatch.handlers.start_interval = (function crisis_dispatch$handlers$start_interval(db,_){
var interval = window.setInterval((function (){
var G__15357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15357) : re_frame.core.dispatch.call(null,G__15357));
}),(15000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$interval,interval);
});
crisis_dispatch.handlers.set_informacast_credentials = (function crisis_dispatch$handlers$set_informacast_credentials(db,p__15358){
var vec__15410 = p__15358;
var map__15411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410,(0),null);
var map__15411__$1 = ((((!((map__15411 == null)))?((((map__15411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15411):map__15411);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15411__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15411__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))){
var c__8909__auto___15461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password){
return (function (state_15447){
var state_val_15448 = (state_15447[(1)]);
if((state_val_15448 === (1))){
var inst_15413 = crisis_dispatch.handlers.form_full_base_url(db);
var inst_15414 = [cljs.core.str(inst_15413),cljs.core.str("Messages/")].join('');
var inst_15415 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15416 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_15417 = [username,password];
var inst_15418 = cljs.core.PersistentHashMap.fromArrays(inst_15416,inst_15417);
var inst_15419 = [false,inst_15418];
var inst_15420 = cljs.core.PersistentHashMap.fromArrays(inst_15415,inst_15419);
var inst_15421 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15414,cljs.core.array_seq([inst_15420], 0));
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15447__$1,(2),inst_15421);
} else {
if((state_val_15448 === (2))){
var inst_15423 = (state_15447[(2)]);
var inst_15424 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15423);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15424)){
var statearr_15449_15462 = state_15447__$1;
(statearr_15449_15462[(1)] = (3));

} else {
var statearr_15450_15463 = state_15447__$1;
(statearr_15450_15463[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15448 === (3))){
var inst_15426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15428 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username];
var inst_15429 = (new cljs.core.PersistentVector(null,3,(5),inst_15427,inst_15428,null));
var inst_15430 = [cljs.core.cst$kw$set_DASH_in,inst_15429,username];
var inst_15431 = (new cljs.core.PersistentVector(null,3,(5),inst_15426,inst_15430,null));
var inst_15432 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15431) : re_frame.core.dispatch.call(null,inst_15431));
var inst_15433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15435 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password];
var inst_15436 = (new cljs.core.PersistentVector(null,3,(5),inst_15434,inst_15435,null));
var inst_15437 = [cljs.core.cst$kw$set_DASH_in,inst_15436,password];
var inst_15438 = (new cljs.core.PersistentVector(null,3,(5),inst_15433,inst_15437,null));
var inst_15439 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15438) : re_frame.core.dispatch.call(null,inst_15438));
var inst_15440 = alert("Successfully applied credentials");
var inst_15441 = crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
var state_15447__$1 = (function (){var statearr_15451 = state_15447;
(statearr_15451[(7)] = inst_15439);

(statearr_15451[(8)] = inst_15432);

(statearr_15451[(9)] = inst_15440);

return statearr_15451;
})();
var statearr_15452_15464 = state_15447__$1;
(statearr_15452_15464[(2)] = inst_15441);

(statearr_15452_15464[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15448 === (4))){
var inst_15443 = alert("Invalid Credentials");
var state_15447__$1 = state_15447;
var statearr_15453_15465 = state_15447__$1;
(statearr_15453_15465[(2)] = inst_15443);

(statearr_15453_15465[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15448 === (5))){
var inst_15445 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15447__$1,inst_15445);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password))
;
return ((function (switch__8842__auto__,c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password){
return (function() {
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0 = (function (){
var statearr_15457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15457[(0)] = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__);

(statearr_15457[(1)] = (1));

return statearr_15457;
});
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1 = (function (state_15447){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15447);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15458){if((e15458 instanceof Object)){
var ex__8846__auto__ = e15458;
var statearr_15459_15466 = state_15447;
(statearr_15459_15466[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15447);

return cljs.core.cst$kw$recur;
} else {
throw e15458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15467 = state_15447;
state_15447 = G__15467;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = function(state_15447){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1.call(this,state_15447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password))
})();
var state__8911__auto__ = (function (){var statearr_15460 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15461);

return statearr_15460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15461,vec__15410,map__15411,map__15411__$1,username,password))
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
