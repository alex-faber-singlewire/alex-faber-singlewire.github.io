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
crisis_dispatch.handlers.set_in = (function crisis_dispatch$handlers$set_in(db,p__15085){
var vec__15087 = p__15085;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15087,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_dispatch.handlers.open_file = (function crisis_dispatch$handlers$open_file(db,p__15088){
var vec__15093 = p__15088;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15093,(0),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__15093,file){
return (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
var cljs_obj = cognitect.transit.read(r,e.target.result);
var G__15094_15097 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null),cljs_obj], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15094_15097) : re_frame.core.dispatch.call(null,G__15094_15097));

var G__15095_15098 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15095_15098) : re_frame.core.dispatch.call(null,G__15095_15098));

var G__15096_15099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15096_15099) : re_frame.core.dispatch.call(null,G__15096_15099));

return crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/credentials"], 0));
});})(file_reader,vec__15093,file))
;

file_reader.readAsText(file);

return db;
});
crisis_dispatch.handlers.md5_hash = (function crisis_dispatch$handlers$md5_hash(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15104 = arguments.length;
var i__5727__auto___15105 = (0);
while(true){
if((i__5727__auto___15105 < len__5726__auto___15104)){
args__5733__auto__.push((arguments[i__5727__auto___15105]));

var G__15106 = (i__5727__auto___15105 + (1));
i__5727__auto___15105 = G__15106;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15102 = (function (){var G__15103 = (new goog.crypt.Md5());
G__15103.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15103;
})().digest();
return goog.crypt.byteArrayToHex(G__15102);
});

crisis_dispatch.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.md5_hash.cljs$lang$applyTo = (function (seq15100){
return crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15100));
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
var len__5726__auto___15161 = arguments.length;
var i__5727__auto___15162 = (0);
while(true){
if((i__5727__auto___15162 < len__5726__auto___15161)){
args__5733__auto__.push((arguments[i__5727__auto___15162]));

var G__15163 = (i__5727__auto___15162 + (1));
i__5727__auto___15162 = G__15163;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic = (function (p__15109){
var map__15110 = p__15109;
var map__15110__$1 = ((((!((map__15110 == null)))?((((map__15110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15110):map__15110);
var message_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,cljs.core.cst$kw$message_DASH_ids);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,cljs.core.cst$kw$error_DASH_cb);
var channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (p1__15107_SHARP_){
return crisis_dispatch.handlers.fetch_full_message_by_id(p1__15107_SHARP_,full_base_url,credentials_map);
});})(map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
,message_ids);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15139){
var state_val_15140 = (state_15139[(1)]);
if((state_val_15140 === (7))){
var inst_15114 = (state_15139[(7)]);
var inst_15113 = (state_15139[(8)]);
var inst_15121 = (state_15139[(2)]);
var inst_15122 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15113,inst_15121);
var inst_15123 = cljs.core.rest(inst_15114);
var inst_15124 = cljs.core.vec(inst_15123);
var inst_15113__$1 = inst_15122;
var inst_15114__$1 = inst_15124;
var state_15139__$1 = (function (){var statearr_15141 = state_15139;
(statearr_15141[(7)] = inst_15114__$1);

(statearr_15141[(8)] = inst_15113__$1);

return statearr_15141;
})();
var statearr_15142_15164 = state_15139__$1;
(statearr_15142_15164[(2)] = null);

(statearr_15142_15164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (1))){
var inst_15112 = cljs.core.PersistentVector.EMPTY;
var inst_15113 = inst_15112;
var inst_15114 = channels;
var state_15139__$1 = (function (){var statearr_15143 = state_15139;
(statearr_15143[(7)] = inst_15114);

(statearr_15143[(8)] = inst_15113);

return statearr_15143;
})();
var statearr_15144_15165 = state_15139__$1;
(statearr_15144_15165[(2)] = null);

(statearr_15144_15165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (4))){
var inst_15113 = (state_15139[(8)]);
var state_15139__$1 = state_15139;
var statearr_15145_15166 = state_15139__$1;
(statearr_15145_15166[(2)] = inst_15113);

(statearr_15145_15166[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (6))){
var inst_15127 = (state_15139[(2)]);
var state_15139__$1 = state_15139;
var statearr_15146_15167 = state_15139__$1;
(statearr_15146_15167[(2)] = inst_15127);

(statearr_15146_15167[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (3))){
var inst_15129 = (state_15139[(9)]);
var inst_15129__$1 = (state_15139[(2)]);
var inst_15130 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15129__$1);
var state_15139__$1 = (function (){var statearr_15147 = state_15139;
(statearr_15147[(9)] = inst_15129__$1);

return statearr_15147;
})();
if(inst_15130){
var statearr_15148_15168 = state_15139__$1;
(statearr_15148_15168[(1)] = (8));

} else {
var statearr_15149_15169 = state_15139__$1;
(statearr_15149_15169[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (2))){
var inst_15114 = (state_15139[(7)]);
var inst_15116 = cljs.core.empty_QMARK_(inst_15114);
var state_15139__$1 = state_15139;
if(inst_15116){
var statearr_15150_15170 = state_15139__$1;
(statearr_15150_15170[(1)] = (4));

} else {
var statearr_15151_15171 = state_15139__$1;
(statearr_15151_15171[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (9))){
var inst_15135 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15139__$1 = state_15139;
var statearr_15152_15172 = state_15139__$1;
(statearr_15152_15172[(2)] = inst_15135);

(statearr_15152_15172[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15140 === (5))){
var inst_15114 = (state_15139[(7)]);
var inst_15119 = cljs.core.first(inst_15114);
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15139__$1,(7),inst_15119);
} else {
if((state_val_15140 === (10))){
var inst_15137 = (state_15139[(2)]);
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15139__$1,inst_15137);
} else {
if((state_val_15140 === (8))){
var inst_15129 = (state_15139[(9)]);
var inst_15132 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,inst_15129);
var inst_15133 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15132) : success_cb.call(null,inst_15132));
var state_15139__$1 = state_15139;
var statearr_15153_15173 = state_15139__$1;
(statearr_15153_15173[(2)] = inst_15133);

(statearr_15153_15173[(1)] = (10));


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
});})(c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15157 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15157[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15157[(1)] = (1));

return statearr_15157;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15139){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15139);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15158){if((e15158 instanceof Object)){
var ex__8846__auto__ = e15158;
var statearr_15159_15174 = state_15139;
(statearr_15159_15174[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15139);

return cljs.core.cst$kw$recur;
} else {
throw e15158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15175 = state_15139;
state_15139 = G__15175;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15139){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15160 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,channels,map__15110,map__15110__$1,message_ids,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_full_messages.cljs$lang$applyTo = (function (seq15108){
return crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15108));
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
crisis_dispatch.handlers.fetch_full_messages_of_scenario = (function crisis_dispatch$handlers$fetch_full_messages_of_scenario(db,p__15178){
var vec__15182 = p__15178;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15182,(0),null);
var temp__4423__auto___15185 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto___15185)){
var scenario_15186 = temp__4423__auto___15185;
var message_ids_15187 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name){
return (function (p1__15176_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__15176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$messageId], null));
});})(scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name))
,cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(scenario_15186));
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,message_ids_15187,cljs.core.cst$kw$full_DASH_base_DASH_url,crisis_dispatch.handlers.form_full_base_url(db),cljs.core.cst$kw$credentials_DASH_map,crisis_dispatch.handlers.form_credentials_map(db),cljs.core.cst$kw$success_DASH_cb,((function (message_ids_15187,scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name){
return (function (p1__15177_SHARP_){
var G__15183_15188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_fetched_DASH_messages,p1__15177_SHARP_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15183_15188) : re_frame.core.dispatch.call(null,G__15183_15188));

var G__15184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_broadcast_DASH_instructions], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15184) : re_frame.core.dispatch.call(null,G__15184));
});})(message_ids_15187,scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name))
,cljs.core.cst$kw$error_DASH_cb,((function (message_ids_15187,scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name){
return (function (){
return alert("Error: Unsuccessful fetch of at least one message in scenario.  Not able to proceed");
});})(message_ids_15187,scenario_15186,temp__4423__auto___15185,vec__15182,scenario_name))
], 0));
} else {
crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
}

return db;
});
/**
 * Only called when all message response status codes are successful in nature
 */
crisis_dispatch.handlers.save_fetched_messages = (function crisis_dispatch$handlers$save_fetched_messages(db,p__15189){
var vec__15191 = p__15189;
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,messages);
});
crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration = (function crisis_dispatch$handlers$get_all_recipient_group_ids_in_configuration(db){
var scenarios = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$scenarios], null));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (scenarios){
return (function (p__15198){
var vec__15199 = p__15198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15199,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15199,_,scenario_val,scenarios){
return (function (p__15200){
var vec__15201 = p__15200;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
if(!(cljs.core.map_QMARK_(v1))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v1);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__15201,___$1,v1,vec__15199,_,scenario_val,scenarios){
return (function (p__15202){
var vec__15203 = p__15202;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15203,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15203,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,v2);
});})(vec__15201,___$1,v1,vec__15199,_,scenario_val,scenarios))
,cljs.core.seq(v1));
}
});})(vec__15199,_,scenario_val,scenarios))
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
var len__5726__auto___15242 = arguments.length;
var i__5727__auto___15243 = (0);
while(true){
if((i__5727__auto___15243 < len__5726__auto___15242)){
args__5733__auto__.push((arguments[i__5727__auto___15243]));

var G__15244 = (i__5727__auto___15243 + (1));
i__5727__auto___15243 = G__15244;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic = (function (p__15205){
var map__15206 = p__15205;
var map__15206__$1 = ((((!((map__15206 == null)))?((((map__15206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15206):map__15206);
var recipient_group_ids_in_configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration);
var full_base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,cljs.core.cst$kw$full_DASH_base_DASH_url);
var credentials_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,cljs.core.cst$kw$credentials_DASH_map);
var success_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,cljs.core.cst$kw$success_DASH_cb);
var error_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15206__$1,cljs.core.cst$kw$error_DASH_cb);
var c__8909__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function (state_15228){
var state_val_15229 = (state_15228[(1)]);
if((state_val_15229 === (1))){
var inst_15208 = [cljs.core.str(full_base_url),cljs.core.str("RecipientGroups/")].join('');
var inst_15209 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15210 = [false,credentials_map];
var inst_15211 = cljs.core.PersistentHashMap.fromArrays(inst_15209,inst_15210);
var inst_15212 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15208,cljs.core.array_seq([inst_15211], 0));
var state_15228__$1 = state_15228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15228__$1,(2),inst_15212);
} else {
if((state_val_15229 === (2))){
var inst_15214 = (state_15228[(7)]);
var inst_15214__$1 = (state_15228[(2)]);
var inst_15215 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15214__$1);
var state_15228__$1 = (function (){var statearr_15230 = state_15228;
(statearr_15230[(7)] = inst_15214__$1);

return statearr_15230;
})();
if(cljs.core.truth_(inst_15215)){
var statearr_15231_15245 = state_15228__$1;
(statearr_15231_15245[(1)] = (3));

} else {
var statearr_15232_15246 = state_15228__$1;
(statearr_15232_15246[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15229 === (3))){
var inst_15214 = (state_15228[(7)]);
var inst_15217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15218 = [cljs.core.cst$kw$body,cljs.core.cst$kw$data];
var inst_15219 = (new cljs.core.PersistentVector(null,2,(5),inst_15217,inst_15218,null));
var inst_15220 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_15214,inst_15219);
var inst_15221 = crisis_dispatch.handlers.filter_recipient_groups(inst_15220,recipient_group_ids_in_configuration);
var inst_15222 = (success_cb.cljs$core$IFn$_invoke$arity$1 ? success_cb.cljs$core$IFn$_invoke$arity$1(inst_15221) : success_cb.call(null,inst_15221));
var state_15228__$1 = state_15228;
var statearr_15233_15247 = state_15228__$1;
(statearr_15233_15247[(2)] = inst_15222);

(statearr_15233_15247[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15229 === (4))){
var inst_15224 = (error_cb.cljs$core$IFn$_invoke$arity$0 ? error_cb.cljs$core$IFn$_invoke$arity$0() : error_cb.call(null));
var state_15228__$1 = state_15228;
var statearr_15234_15248 = state_15228__$1;
(statearr_15234_15248[(2)] = inst_15224);

(statearr_15234_15248[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15229 === (5))){
var inst_15226 = (state_15228[(2)]);
var state_15228__$1 = state_15228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15228__$1,inst_15226);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
;
return ((function (switch__8842__auto__,c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb){
return (function() {
var crisis_dispatch$handlers$state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$state_machine__8843__auto____0 = (function (){
var statearr_15238 = [null,null,null,null,null,null,null,null];
(statearr_15238[(0)] = crisis_dispatch$handlers$state_machine__8843__auto__);

(statearr_15238[(1)] = (1));

return statearr_15238;
});
var crisis_dispatch$handlers$state_machine__8843__auto____1 = (function (state_15228){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15228);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15239){if((e15239 instanceof Object)){
var ex__8846__auto__ = e15239;
var statearr_15240_15249 = state_15228;
(statearr_15240_15249[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15228);

return cljs.core.cst$kw$recur;
} else {
throw e15239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15250 = state_15228;
state_15228 = G__15250;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$state_machine__8843__auto__ = function(state_15228){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$state_machine__8843__auto____1.call(this,state_15228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$state_machine__8843__auto____0;
crisis_dispatch$handlers$state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$state_machine__8843__auto____1;
return crisis_dispatch$handlers$state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
})();
var state__8911__auto__ = (function (){var statearr_15241 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto__);

return statearr_15241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto__,map__15206,map__15206__$1,recipient_group_ids_in_configuration,full_base_url,credentials_map,success_cb,error_cb))
);

return c__8909__auto__;
});

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$maxFixedArity = (0);

crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$lang$applyTo = (function (seq15204){
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15204));
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
var temp__4425__auto___15258 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration], null));
if(cljs.core.truth_(temp__4425__auto___15258)){
var admin_configuration_15259 = temp__4425__auto___15258;
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1(admin_configuration_15259);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(admin_configuration_15259);
if(cljs.core.truth_(and__4656__auto____$1)){
return cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(admin_configuration_15259);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
var full_base_url_15260 = crisis_dispatch.handlers.form_full_base_url(db);
var credentials_map_15261 = crisis_dispatch.handlers.form_credentials_map(db);
crisis_dispatch.handlers.fetch_full_messages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$message_DASH_ids,crisis_dispatch.handlers.get_all_message_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15260,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15261,cljs.core.cst$kw$success_DASH_cb,((function (full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258){
return (function (messages){
var abridged_messages = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258){
return (function (p1__15251_SHARP_){
return cljs.core.select_keys(p1__15251_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId,cljs.core.cst$kw$customizable,cljs.core.cst$kw$shortText,cljs.core.cst$kw$longText], null));
});})(full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258))
,messages);
return crisis_dispatch.handlers.fetch_all_scenario_recipient_groups.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$recipient_DASH_group_DASH_ids_DASH_in_DASH_configuration,crisis_dispatch.handlers.get_all_recipient_group_ids_in_configuration(db),cljs.core.cst$kw$full_DASH_base_DASH_url,full_base_url_15260,cljs.core.cst$kw$credentials_DASH_map,credentials_map_15261,cljs.core.cst$kw$success_DASH_cb,((function (abridged_messages,full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258){
return (function (recipient_groups){
var G__15255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null)),crisis_dispatch.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,abridged_messages),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crisis_dispatch.handlers.desensitize_recipient_groups(recipient_groups))], 0)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15255) : re_frame.core.dispatch.call(null,G__15255));
});})(abridged_messages,full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258))
,cljs.core.cst$kw$error_DASH_cb,((function (abridged_messages,full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258){
return (function (){
var G__15256_15262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15256_15262) : re_frame.core.dispatch.call(null,G__15256_15262));

return console.error("Unable to fetch all recipient groups from InformaCast.  Unable to proceed");
});})(abridged_messages,full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258))
], 0));
});})(full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258))
,cljs.core.cst$kw$error_DASH_cb,((function (full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258){
return (function (){
var G__15257_15263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null),false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15257_15263) : re_frame.core.dispatch.call(null,G__15257_15263));

return console.error("Unable to fetch all messages from InformaCast.  Unable to proceed");
});})(full_base_url_15260,credentials_map_15261,admin_configuration_15259,temp__4425__auto___15258))
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
return (function (p1__15264_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15264_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(destination_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_parameter_options,destination_determined_by)], null)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (p1__15265_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$type],[cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15265_SHARP_),"RECIPIENT_GROUP"]);
});})(selected_parameter_options,destination_determined_by,destination_mapping))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destination_mapping,message_id));
}
});})(selected_parameter_options,destination_determined_by,destination_mapping))
;
var subsitute_parameters = ((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function crisis_dispatch$handlers$form_broadcast_instructions_$_subsitute_parameters(message_str){
if(cljs.core.truth_(message_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (selected_parameter_options,destination_determined_by,destination_mapping){
return (function (r,p__15280){
var vec__15281 = p__15280;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281,(1),null);
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
var c__8909__auto___15380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15380){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15380){
return (function (state_15359){
var state_val_15360 = (state_15359[(1)]);
if((state_val_15360 === (7))){
var inst_15335 = (state_15359[(7)]);
var inst_15334 = (state_15359[(8)]);
var inst_15342 = (state_15359[(2)]);
var inst_15343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_15334,inst_15342);
var inst_15344 = cljs.core.rest(inst_15335);
var inst_15345 = cljs.core.vec(inst_15344);
var inst_15334__$1 = inst_15343;
var inst_15335__$1 = inst_15345;
var state_15359__$1 = (function (){var statearr_15361 = state_15359;
(statearr_15361[(7)] = inst_15335__$1);

(statearr_15361[(8)] = inst_15334__$1);

return statearr_15361;
})();
var statearr_15362_15381 = state_15359__$1;
(statearr_15362_15381[(2)] = null);

(statearr_15362_15381[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (1))){
var inst_15331 = cljs.core.cst$kw$broadcast_DASH_instructions.cljs$core$IFn$_invoke$arity$1(db);
var inst_15332 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(send_broadcast_instruction,inst_15331);
var inst_15333 = cljs.core.PersistentVector.EMPTY;
var inst_15334 = inst_15333;
var inst_15335 = inst_15332;
var state_15359__$1 = (function (){var statearr_15363 = state_15359;
(statearr_15363[(7)] = inst_15335);

(statearr_15363[(8)] = inst_15334);

return statearr_15363;
})();
var statearr_15364_15382 = state_15359__$1;
(statearr_15364_15382[(2)] = null);

(statearr_15364_15382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (4))){
var inst_15334 = (state_15359[(8)]);
var state_15359__$1 = state_15359;
var statearr_15365_15383 = state_15359__$1;
(statearr_15365_15383[(2)] = inst_15334);

(statearr_15365_15383[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (6))){
var inst_15348 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
var statearr_15366_15384 = state_15359__$1;
(statearr_15366_15384[(2)] = inst_15348);

(statearr_15366_15384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (3))){
var inst_15350 = (state_15359[(2)]);
var inst_15351 = cljs.core.every_QMARK_(crisis_dispatch.handlers.has_success_status_QMARK_,inst_15350);
var state_15359__$1 = state_15359;
if(inst_15351){
var statearr_15367_15385 = state_15359__$1;
(statearr_15367_15385[(1)] = (8));

} else {
var statearr_15368_15386 = state_15359__$1;
(statearr_15368_15386[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (2))){
var inst_15335 = (state_15359[(7)]);
var inst_15337 = cljs.core.empty_QMARK_(inst_15335);
var state_15359__$1 = state_15359;
if(inst_15337){
var statearr_15369_15387 = state_15359__$1;
(statearr_15369_15387[(1)] = (4));

} else {
var statearr_15370_15388 = state_15359__$1;
(statearr_15370_15388[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (9))){
var inst_15355 = alert("Unable to send all broadcasts");
var state_15359__$1 = state_15359;
var statearr_15371_15389 = state_15359__$1;
(statearr_15371_15389[(2)] = inst_15355);

(statearr_15371_15389[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15360 === (5))){
var inst_15335 = (state_15359[(7)]);
var inst_15340 = cljs.core.first(inst_15335);
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15359__$1,(7),inst_15340);
} else {
if((state_val_15360 === (10))){
var inst_15357 = (state_15359[(2)]);
var state_15359__$1 = state_15359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15359__$1,inst_15357);
} else {
if((state_val_15360 === (8))){
var inst_15353 = alert("All Broadcasts Sent");
var state_15359__$1 = state_15359;
var statearr_15372_15390 = state_15359__$1;
(statearr_15372_15390[(2)] = inst_15353);

(statearr_15372_15390[(1)] = (10));


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
});})(c__8909__auto___15380))
;
return ((function (switch__8842__auto__,c__8909__auto___15380){
return (function() {
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0 = (function (){
var statearr_15376 = [null,null,null,null,null,null,null,null,null];
(statearr_15376[(0)] = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__);

(statearr_15376[(1)] = (1));

return statearr_15376;
});
var crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1 = (function (state_15359){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15359);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15377){if((e15377 instanceof Object)){
var ex__8846__auto__ = e15377;
var statearr_15378_15391 = state_15359;
(statearr_15378_15391[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15359);

return cljs.core.cst$kw$recur;
} else {
throw e15377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15392 = state_15359;
state_15359 = G__15392;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__ = function(state_15359){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1.call(this,state_15359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$send_broadcasts_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15380))
})();
var state__8911__auto__ = (function (){var statearr_15379 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15380);

return statearr_15379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15380))
);


return db;
});
crisis_dispatch.handlers.start_interval = (function crisis_dispatch$handlers$start_interval(db,_){
var interval = window.setInterval((function (){
var G__15394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_ic_DASH_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15394) : re_frame.core.dispatch.call(null,G__15394));
}),(15000));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$interval,interval);
});
crisis_dispatch.handlers.set_informacast_credentials = (function crisis_dispatch$handlers$set_informacast_credentials(db,p__15395){
var vec__15447 = p__15395;
var map__15448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447,(0),null);
var map__15448__$1 = ((((!((map__15448 == null)))?((((map__15448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15448):map__15448);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))){
var c__8909__auto___15498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password){
return (function (){
var f__8910__auto__ = (function (){var switch__8842__auto__ = ((function (c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password){
return (function (state_15484){
var state_val_15485 = (state_15484[(1)]);
if((state_val_15485 === (1))){
var inst_15450 = crisis_dispatch.handlers.form_full_base_url(db);
var inst_15451 = [cljs.core.str(inst_15450),cljs.core.str("Messages/")].join('');
var inst_15452 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$basic_DASH_auth];
var inst_15453 = [cljs.core.cst$kw$username,cljs.core.cst$kw$password];
var inst_15454 = [username,password];
var inst_15455 = cljs.core.PersistentHashMap.fromArrays(inst_15453,inst_15454);
var inst_15456 = [false,inst_15455];
var inst_15457 = cljs.core.PersistentHashMap.fromArrays(inst_15452,inst_15456);
var inst_15458 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_15451,cljs.core.array_seq([inst_15457], 0));
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15484__$1,(2),inst_15458);
} else {
if((state_val_15485 === (2))){
var inst_15460 = (state_15484[(2)]);
var inst_15461 = crisis_dispatch.handlers.has_success_status_QMARK_(inst_15460);
var state_15484__$1 = state_15484;
if(cljs.core.truth_(inst_15461)){
var statearr_15486_15499 = state_15484__$1;
(statearr_15486_15499[(1)] = (3));

} else {
var statearr_15487_15500 = state_15484__$1;
(statearr_15487_15500[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (3))){
var inst_15463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15465 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$username];
var inst_15466 = (new cljs.core.PersistentVector(null,3,(5),inst_15464,inst_15465,null));
var inst_15467 = [cljs.core.cst$kw$set_DASH_in,inst_15466,username];
var inst_15468 = (new cljs.core.PersistentVector(null,3,(5),inst_15463,inst_15467,null));
var inst_15469 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15468) : re_frame.core.dispatch.call(null,inst_15468));
var inst_15470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15472 = [cljs.core.cst$kw$admin_DASH_configuration,cljs.core.cst$kw$configuration,cljs.core.cst$kw$password];
var inst_15473 = (new cljs.core.PersistentVector(null,3,(5),inst_15471,inst_15472,null));
var inst_15474 = [cljs.core.cst$kw$set_DASH_in,inst_15473,password];
var inst_15475 = (new cljs.core.PersistentVector(null,3,(5),inst_15470,inst_15474,null));
var inst_15476 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_15475) : re_frame.core.dispatch.call(null,inst_15475));
var inst_15477 = alert("Successfully applied credentials");
var inst_15478 = crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/"], 0));
var state_15484__$1 = (function (){var statearr_15488 = state_15484;
(statearr_15488[(7)] = inst_15476);

(statearr_15488[(8)] = inst_15469);

(statearr_15488[(9)] = inst_15477);

return statearr_15488;
})();
var statearr_15489_15501 = state_15484__$1;
(statearr_15489_15501[(2)] = inst_15478);

(statearr_15489_15501[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (4))){
var inst_15480 = alert("Invalid Credentials");
var state_15484__$1 = state_15484;
var statearr_15490_15502 = state_15484__$1;
(statearr_15490_15502[(2)] = inst_15480);

(statearr_15490_15502[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15485 === (5))){
var inst_15482 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15484__$1,inst_15482);
} else {
return null;
}
}
}
}
}
});})(c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password))
;
return ((function (switch__8842__auto__,c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password){
return (function() {
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = null;
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0 = (function (){
var statearr_15494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15494[(0)] = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__);

(statearr_15494[(1)] = (1));

return statearr_15494;
});
var crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1 = (function (state_15484){
while(true){
var ret_value__8844__auto__ = (function (){try{while(true){
var result__8845__auto__ = switch__8842__auto__(state_15484);
if(cljs.core.keyword_identical_QMARK_(result__8845__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8845__auto__;
}
break;
}
}catch (e15495){if((e15495 instanceof Object)){
var ex__8846__auto__ = e15495;
var statearr_15496_15503 = state_15484;
(statearr_15496_15503[(5)] = ex__8846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15484);

return cljs.core.cst$kw$recur;
} else {
throw e15495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8844__auto__,cljs.core.cst$kw$recur)){
var G__15504 = state_15484;
state_15484 = G__15504;
continue;
} else {
return ret_value__8844__auto__;
}
break;
}
});
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__ = function(state_15484){
switch(arguments.length){
case 0:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0.call(this);
case 1:
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1.call(this,state_15484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____0;
crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto____1;
return crisis_dispatch$handlers$set_informacast_credentials_$_state_machine__8843__auto__;
})()
;})(switch__8842__auto__,c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password))
})();
var state__8911__auto__ = (function (){var statearr_15497 = (f__8910__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8910__auto__.cljs$core$IFn$_invoke$arity$0() : f__8910__auto__.call(null));
(statearr_15497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8909__auto___15498);

return statearr_15497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8911__auto__);
});})(c__8909__auto___15498,vec__15447,map__15448,map__15448__$1,username,password))
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
