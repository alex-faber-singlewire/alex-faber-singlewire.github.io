// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.handlers');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('crisis_proto.nav');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('crisis_proto.db');
goog.require('re_frame.core');
crisis_proto.handlers.form_full_base_url = (function crisis_proto$handlers$form_full_base_url(base_url){
return [cljs.core.str("https://"),cljs.core.str(base_url),cljs.core.str("/InformaCast/RESTServices/V1/")].join('');
});
crisis_proto.handlers.form_credentials_map = (function crisis_proto$handlers$form_credentials_map(db){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$username], null)),cljs.core.cst$kw$password,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$password], null))], null);
});
crisis_proto.handlers.pprint = (function crisis_proto$handlers$pprint(obj){
var G__15961_15962 = JSON.stringify(cljs.core.clj__GT_js(obj));
console.log(G__15961_15962);

return obj;
});
crisis_proto.handlers.md5_hash = (function crisis_proto$handlers$md5_hash(var_args){
var args__5659__auto__ = [];
var len__5652__auto___15967 = arguments.length;
var i__5653__auto___15968 = (0);
while(true){
if((i__5653__auto___15968 < len__5652__auto___15967)){
args__5659__auto__.push((arguments[i__5653__auto___15968]));

var G__15969 = (i__5653__auto___15968 + (1));
i__5653__auto___15968 = G__15969;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15965 = (function (){var G__15966 = (new goog.crypt.Md5());
G__15966.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15966;
})().digest();
return goog.crypt.byteArrayToHex(G__15965);
});

crisis_proto.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_proto.handlers.md5_hash.cljs$lang$applyTo = (function (seq15963){
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15963));
});
crisis_proto.handlers.has_success_status_QMARK_ = (function crisis_proto$handlers$has_success_status_QMARK_(response){
return (((200) <= cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response))) && ((cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response) <= (299)));
});
/**
 * Throws an exception whenever the database doesn't match the schema provided in core.db.
 * Meant to only be used in development, as the error is unhandled
 */
crisis_proto.handlers.validate_db = (function crisis_proto$handlers$validate_db(handler){
return (function crisis_proto$handlers$validate_db_$_imposter_handler(db,v){
var mutated_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
crisis_proto.db.validate(mutated_db);

return mutated_db;
});
});
crisis_proto.handlers.pprint_db = (function crisis_proto$handlers$pprint_db(handler){
return (function crisis_proto$handlers$pprint_db_$_imposter_handler(db,v){
return crisis_proto.handlers.pprint((handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v)));
});
});
/**
 * Finds all the unique parameters that exist in the shortText and longText of the messages within the scenario
 */
crisis_proto.handlers.find_parameters = (function crisis_proto$handlers$find_parameters(scenario){
var extract_parameters_from_str = (function crisis_proto$handlers$find_parameters_$_extract_parameters_from_str(string){
var potential_parameters = clojure.string.split.cljs$core$IFn$_invoke$arity$2(string,/(#\{[^#]+\})/);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (potential_parameters){
return (function (p1__15970_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/#\{[^#]+\}/,p1__15970_SHARP_))){
return p1__15970_SHARP_;
} else {
return null;
}
});})(potential_parameters))
,potential_parameters));
});
var extract_parameters = (function crisis_proto$handlers$find_parameters_$_extract_parameters(full_message){

var short_text_parameters = extract_parameters_from_str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(full_message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$customizable], null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(full_message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$shortText], null)):null));
var long_text_parameters = extract_parameters_from_str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(full_message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$customizable], null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(full_message,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$longText], null)):null));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(short_text_parameters,long_text_parameters);
});
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(extract_parameters,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null)))));
});
/**
 * If there's a difference in parameters, the new parameters are recored (saved to the db) and the reconciled flag is set to false to
 *   indicate that each parameter needs to be given options
 */
crisis_proto.handlers.find_and_record_parameters = (function crisis_proto$handlers$find_and_record_parameters(db,p__15971){
var vec__15973 = p__15971;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(1),null);
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto__)){
var scenario_with_full_messages = temp__4423__auto__;
var parameters = crisis_proto.handlers.find_parameters(scenario_with_full_messages);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null),parameters),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciled_QMARK_], null),cljs.core.empty_QMARK_(parameters));
} else {
throw [cljs.core.str("[find-and-record-parameters] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
}
});
crisis_proto.handlers.set_in = (function crisis_proto$handlers$set_in(db,p__15974){
var vec__15976 = p__15974;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15976,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_proto.handlers.set_current_page = (function crisis_proto$handlers$set_current_page(db,p__15977){
var vec__15980 = p__15977;
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(0),null);
var G__15981_15982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15981_15982) : re_frame.core.dispatch.call(null,G__15981_15982));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,((cljs.core.not(active_panel))?cljs.core.cst$kw$home:active_panel));
});
crisis_proto.handlers.set_response_status = (function crisis_proto$handlers$set_response_status(db,p__15983){
var vec__15985 = p__15983;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(0),null);
var success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(2),null);
if(cljs.core.truth_(success)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,success], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,error,cljs.core.cst$kw$result,null], null));
}
});
crisis_proto.handlers.clear_response_status = (function crisis_proto$handlers$clear_response_status(db,p__15986){
var vec__15988 = p__15986;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,null], null));
});
/**
 * Checks to see if the scenario exists in the database first.  If it does, it gets set as the active scenario.
 *   If not, the user is directed to the not-found screen
 */
crisis_proto.handlers.set_active_scenario = (function crisis_proto$handlers$set_active_scenario(db,p__15989){
var vec__15992 = p__15989;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15992,(0),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_scenario,scenario_name);
} else {
var G__15993_15994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15993_15994) : re_frame.core.dispatch.call(null,G__15993_15994));

return db;
}
});
crisis_proto.handlers.fetch_all_messages = (function crisis_proto$handlers$fetch_all_messages(db,_){
var G__16048_16101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16048_16101) : re_frame.core.dispatch.call(null,G__16048_16101));

var response_chan_16102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$query_DASH_params,new cljs.core.PersistentArrayMap(null, 1, ["maxCount",(25000)], null),cljs.core.cst$kw$channel,response_chan_16102], null)], 0));

var c__8710__auto___16103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16103,response_chan_16102){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16103,response_chan_16102){
return (function (state_16085){
var state_val_16086 = (state_16085[(1)]);
if((state_val_16086 === (1))){
var state_16085__$1 = state_16085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16085__$1,(2),response_chan_16102);
} else {
if((state_val_16086 === (2))){
var inst_16051 = (state_16085[(7)]);
var inst_16050 = (state_16085[(2)]);
var inst_16051__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16050);
var inst_16052 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16051__$1);
var inst_16053 = ((200) <= inst_16052);
var inst_16054 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16051__$1);
var inst_16055 = (inst_16054 <= (299));
var inst_16056 = (inst_16053) && (inst_16055);
var state_16085__$1 = (function (){var statearr_16087 = state_16085;
(statearr_16087[(7)] = inst_16051__$1);

return statearr_16087;
})();
if(cljs.core.truth_(inst_16056)){
var statearr_16088_16104 = state_16085__$1;
(statearr_16088_16104[(1)] = (3));

} else {
var statearr_16089_16105 = state_16085__$1;
(statearr_16089_16105[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16086 === (3))){
var inst_16051 = (state_16085[(7)]);
var inst_16058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16059 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16051);
var inst_16060 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16059);
var inst_16061 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16060,null];
var inst_16062 = (new cljs.core.PersistentVector(null,4,(5),inst_16058,inst_16061,null));
var inst_16063 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16062) : re_frame.core.dispatch.call(null,inst_16062));
var inst_16064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16065 = [cljs.core.cst$kw$save_DASH_fetched_DASH_messages];
var inst_16066 = (new cljs.core.PersistentVector(null,1,(5),inst_16064,inst_16065,null));
var inst_16067 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16066) : re_frame.core.dispatch.call(null,inst_16066));
var inst_16068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16069 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16070 = (new cljs.core.PersistentVector(null,2,(5),inst_16068,inst_16069,null));
var inst_16071 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16070) : re_frame.core.dispatch.call(null,inst_16070));
var state_16085__$1 = (function (){var statearr_16090 = state_16085;
(statearr_16090[(8)] = inst_16063);

(statearr_16090[(9)] = inst_16067);

return statearr_16090;
})();
var statearr_16091_16106 = state_16085__$1;
(statearr_16091_16106[(2)] = inst_16071);

(statearr_16091_16106[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16086 === (4))){
var inst_16051 = (state_16085[(7)]);
var inst_16073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16074 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16051);
var inst_16075 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16074];
var inst_16076 = (new cljs.core.PersistentVector(null,4,(5),inst_16073,inst_16075,null));
var inst_16077 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16076) : re_frame.core.dispatch.call(null,inst_16076));
var inst_16078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16079 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16080 = (new cljs.core.PersistentVector(null,2,(5),inst_16078,inst_16079,null));
var inst_16081 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16080) : re_frame.core.dispatch.call(null,inst_16080));
var state_16085__$1 = (function (){var statearr_16092 = state_16085;
(statearr_16092[(10)] = inst_16077);

return statearr_16092;
})();
var statearr_16093_16107 = state_16085__$1;
(statearr_16093_16107[(2)] = inst_16081);

(statearr_16093_16107[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16086 === (5))){
var inst_16083 = (state_16085[(2)]);
var state_16085__$1 = state_16085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16085__$1,inst_16083);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16103,response_chan_16102))
;
return ((function (switch__8643__auto__,c__8710__auto___16103,response_chan_16102){
return (function() {
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0 = (function (){
var statearr_16097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16097[(0)] = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__);

(statearr_16097[(1)] = (1));

return statearr_16097;
});
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1 = (function (state_16085){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16085);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16098){if((e16098 instanceof Object)){
var ex__8647__auto__ = e16098;
var statearr_16099_16108 = state_16085;
(statearr_16099_16108[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16085);

return cljs.core.cst$kw$recur;
} else {
throw e16098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16109 = state_16085;
state_16085 = G__16109;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = function(state_16085){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1.call(this,state_16085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16103,response_chan_16102))
})();
var state__8712__auto__ = (function (){var statearr_16100 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16103);

return statearr_16100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16103,response_chan_16102))
);


return db;
});
crisis_proto.handlers.save_selected_messages_for_scenario = (function crisis_proto$handlers$save_selected_messages_for_scenario(db,p__16110){
var vec__16112 = p__16110;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16112,(0),null);
var selected_messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16112,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null),selected_messages);
});
crisis_proto.handlers.fetch_full_message_details_for_scenario = (function crisis_proto$handlers$fetch_full_message_details_for_scenario(db,p__16113){
var vec__16167 = p__16113;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167,(0),null);
var G__16168_16220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16168_16220) : re_frame.core.dispatch.call(null,G__16168_16220));

var fetch_full_message_by_id = ((function (vec__16167,scenario_name){
return (function crisis_proto$handlers$fetch_full_message_details_for_scenario_$_fetch_full_message_by_id(message_id){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/"),cljs.core.str(message_id)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db)], null)], 0));
});})(vec__16167,scenario_name))
;
var scenario = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db)], null));
if(cljs.core.not(scenario)){
throw [cljs.core.str("[fetch-full-message-details-for-scenario] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
} else {
var c__8710__auto___16221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16221,scenario,vec__16167,scenario_name){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16221,scenario,vec__16167,scenario_name){
return (function (state_16202){
var state_val_16203 = (state_16202[(1)]);
if((state_val_16203 === (1))){
var inst_16169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16170 = [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages];
var inst_16171 = (new cljs.core.PersistentVector(null,2,(5),inst_16169,inst_16170,null));
var inst_16172 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,inst_16171);
var inst_16173 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,inst_16172);
var inst_16174 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fetch_full_message_by_id,inst_16173);
var inst_16175 = cljs.core.PersistentVector.EMPTY;
var inst_16176 = inst_16175;
var inst_16177 = inst_16174;
var state_16202__$1 = (function (){var statearr_16204 = state_16202;
(statearr_16204[(7)] = inst_16176);

(statearr_16204[(8)] = inst_16177);

return statearr_16204;
})();
var statearr_16205_16222 = state_16202__$1;
(statearr_16205_16222[(2)] = null);

(statearr_16205_16222[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16203 === (2))){
var inst_16177 = (state_16202[(8)]);
var inst_16179 = cljs.core.empty_QMARK_(inst_16177);
var state_16202__$1 = state_16202;
if(inst_16179){
var statearr_16206_16223 = state_16202__$1;
(statearr_16206_16223[(1)] = (4));

} else {
var statearr_16207_16224 = state_16202__$1;
(statearr_16207_16224[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16203 === (3))){
var inst_16192 = (state_16202[(2)]);
var inst_16193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16194 = [cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,scenario_name,inst_16192];
var inst_16195 = (new cljs.core.PersistentVector(null,3,(5),inst_16193,inst_16194,null));
var inst_16196 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16195) : re_frame.core.dispatch.call(null,inst_16195));
var inst_16197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16198 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16199 = (new cljs.core.PersistentVector(null,2,(5),inst_16197,inst_16198,null));
var inst_16200 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16199) : re_frame.core.dispatch.call(null,inst_16199));
var state_16202__$1 = (function (){var statearr_16208 = state_16202;
(statearr_16208[(9)] = inst_16196);

return statearr_16208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16202__$1,inst_16200);
} else {
if((state_val_16203 === (4))){
var inst_16176 = (state_16202[(7)]);
var state_16202__$1 = state_16202;
var statearr_16209_16225 = state_16202__$1;
(statearr_16209_16225[(2)] = inst_16176);

(statearr_16209_16225[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16203 === (5))){
var inst_16177 = (state_16202[(8)]);
var inst_16182 = cljs.core.first(inst_16177);
var state_16202__$1 = state_16202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16202__$1,(7),inst_16182);
} else {
if((state_val_16203 === (6))){
var inst_16190 = (state_16202[(2)]);
var state_16202__$1 = state_16202;
var statearr_16210_16226 = state_16202__$1;
(statearr_16210_16226[(2)] = inst_16190);

(statearr_16210_16226[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16203 === (7))){
var inst_16176 = (state_16202[(7)]);
var inst_16177 = (state_16202[(8)]);
var inst_16184 = (state_16202[(2)]);
var inst_16185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_16176,inst_16184);
var inst_16186 = cljs.core.rest(inst_16177);
var inst_16187 = cljs.core.vec(inst_16186);
var inst_16176__$1 = inst_16185;
var inst_16177__$1 = inst_16187;
var state_16202__$1 = (function (){var statearr_16211 = state_16202;
(statearr_16211[(7)] = inst_16176__$1);

(statearr_16211[(8)] = inst_16177__$1);

return statearr_16211;
})();
var statearr_16212_16227 = state_16202__$1;
(statearr_16212_16227[(2)] = null);

(statearr_16212_16227[(1)] = (2));


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
});})(c__8710__auto___16221,scenario,vec__16167,scenario_name))
;
return ((function (switch__8643__auto__,c__8710__auto___16221,scenario,vec__16167,scenario_name){
return (function() {
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0 = (function (){
var statearr_16216 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16216[(0)] = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__);

(statearr_16216[(1)] = (1));

return statearr_16216;
});
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1 = (function (state_16202){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16202);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16217){if((e16217 instanceof Object)){
var ex__8647__auto__ = e16217;
var statearr_16218_16228 = state_16202;
(statearr_16218_16228[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16202);

return cljs.core.cst$kw$recur;
} else {
throw e16217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16229 = state_16202;
state_16202 = G__16229;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = function(state_16202){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1.call(this,state_16202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16221,scenario,vec__16167,scenario_name))
})();
var state__8712__auto__ = (function (){var statearr_16219 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16221);

return statearr_16219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16221,scenario,vec__16167,scenario_name))
);

}

return db;
});
crisis_proto.handlers.initialize_reconciliation_temp = (function crisis_proto$handlers$initialize_reconciliation_temp(db,_){
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var active_scenario = temp__4423__auto__;
var blank_parameters_reconciliations = ((function (active_scenario,temp__4423__auto__){
return (function crisis_proto$handlers$initialize_reconciliation_temp_$_blank_parameters_reconciliations(parameters){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_scenario,temp__4423__auto__){
return (function (r,p){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(r,cljs.core.cst$kw$order,cljs.core.conj,p),cljs.core.cst$kw$questions,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray([p,[cljs.core.str("Provide an option for "),cljs.core.str(p)].join('')], true, false)),cljs.core.cst$kw$options,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray([p,cljs.core.PersistentVector.EMPTY], true, false));
});})(active_scenario,temp__4423__auto__))
,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$questions,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$destination_DASH_determined_DASH_by,null,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null),parameters);
});})(active_scenario,temp__4423__auto__))
;
var saved_reconciliation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((((cljs.core.empty_QMARK_(saved_reconciliation)) || ((saved_reconciliation == null)))?cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null),blank_parameters_reconciliations(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null)))):cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null),saved_reconciliation)),cljs.core.cst$kw$selected_DASH_parameter_DASH_options,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (saved_reconciliation,active_scenario,temp__4423__auto__){
return (function (r,p){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.fromArray([p,null], true, false));
});})(saved_reconciliation,active_scenario,temp__4423__auto__))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null))));
} else {
var G__16231_16232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16231_16232) : re_frame.core.dispatch.call(null,G__16231_16232));

return db;
}
});
crisis_proto.handlers.remove_option_from_parameter = (function crisis_proto$handlers$remove_option_from_parameter(db,p__16233){
var vec__16235 = p__16233;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(1),null);
var option_remover = ((function (vec__16235,parameter_name,option){
return (function crisis_proto$handlers$remove_option_from_parameter_$_option_remover(p_option){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p_option,option)){
return p_option;
} else {
return null;
}
});})(vec__16235,parameter_name,option))
;
var path = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,path,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(option_remover,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
});
crisis_proto.handlers.update_parameter_question = (function crisis_proto$handlers$update_parameter_question(db,p__16236){
var vec__16238 = p__16236;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(1),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter], null),question);
});
crisis_proto.handlers.update_parameter_question_order = (function crisis_proto$handlers$update_parameter_question_order(db,p__16239){
var vec__16244 = p__16239;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(1),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(2),null);
if(cljs.core.not((function (){var G__16245 = parseInt(new_order);
return isNaN(G__16245);
})())){
var order_vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
var new_index = (parseInt(new_order) - (1));
var old_index = cljs.core.to_array(order_vector).indexOf(parameter);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (order_vector,new_index,old_index,vec__16244,active_scenario_name,parameter,new_order){
return (function (total,p__16246){
var vec__16247 = p__16246;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16247,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,old_index)){
return total;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,new_index)){
if((new_index > old_index)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(total,v),cljs.core.get.cljs$core$IFn$_invoke$arity$2(order_vector,old_index));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(total,cljs.core.get.cljs$core$IFn$_invoke$arity$2(order_vector,old_index)),v);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(total,v);

}
}
});})(order_vector,new_index,old_index,vec__16244,active_scenario_name,parameter,new_order))
,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (order_vector,new_index,old_index,vec__16244,active_scenario_name,parameter,new_order){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(order_vector,new_index,old_index,vec__16244,active_scenario_name,parameter,new_order))
,order_vector)));
} else {
return db;
}
});
crisis_proto.handlers.fetch_all_recipient_groups = (function crisis_proto$handlers$fetch_all_recipient_groups(db,_){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("RecipientGroups/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$query_DASH_params,new cljs.core.PersistentArrayMap(null, 1, ["maxCount",(9999)], null),cljs.core.cst$kw$channel,response_chan], null)], 0));

var c__8710__auto___16334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16334,response_chan){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16334,response_chan){
return (function (state_16319){
var state_val_16320 = (state_16319[(1)]);
if((state_val_16320 === (1))){
var state_16319__$1 = state_16319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16319__$1,(2),response_chan);
} else {
if((state_val_16320 === (2))){
var inst_16293 = (state_16319[(7)]);
var inst_16292 = (state_16319[(2)]);
var inst_16293__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16292);
var inst_16294 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16293__$1);
var inst_16295 = ((200) <= inst_16294);
var inst_16296 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16293__$1);
var inst_16297 = (inst_16296 <= (299));
var inst_16298 = (inst_16295) && (inst_16297);
var state_16319__$1 = (function (){var statearr_16321 = state_16319;
(statearr_16321[(7)] = inst_16293__$1);

return statearr_16321;
})();
if(cljs.core.truth_(inst_16298)){
var statearr_16322_16335 = state_16319__$1;
(statearr_16322_16335[(1)] = (3));

} else {
var statearr_16323_16336 = state_16319__$1;
(statearr_16323_16336[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (3))){
var inst_16293 = (state_16319[(7)]);
var inst_16300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16301 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16293);
var inst_16302 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16301);
var inst_16303 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16302,null];
var inst_16304 = (new cljs.core.PersistentVector(null,4,(5),inst_16300,inst_16303,null));
var inst_16305 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16304) : re_frame.core.dispatch.call(null,inst_16304));
var inst_16306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16307 = [cljs.core.cst$kw$save_DASH_fetched_DASH_recipient_DASH_groups];
var inst_16308 = (new cljs.core.PersistentVector(null,1,(5),inst_16306,inst_16307,null));
var inst_16309 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16308) : re_frame.core.dispatch.call(null,inst_16308));
var state_16319__$1 = (function (){var statearr_16324 = state_16319;
(statearr_16324[(8)] = inst_16305);

return statearr_16324;
})();
var statearr_16325_16337 = state_16319__$1;
(statearr_16325_16337[(2)] = inst_16309);

(statearr_16325_16337[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (4))){
var inst_16293 = (state_16319[(7)]);
var inst_16311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16312 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16293);
var inst_16313 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16312];
var inst_16314 = (new cljs.core.PersistentVector(null,4,(5),inst_16311,inst_16313,null));
var inst_16315 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16314) : re_frame.core.dispatch.call(null,inst_16314));
var state_16319__$1 = state_16319;
var statearr_16326_16338 = state_16319__$1;
(statearr_16326_16338[(2)] = inst_16315);

(statearr_16326_16338[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16320 === (5))){
var inst_16317 = (state_16319[(2)]);
var state_16319__$1 = state_16319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16319__$1,inst_16317);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16334,response_chan))
;
return ((function (switch__8643__auto__,c__8710__auto___16334,response_chan){
return (function() {
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0 = (function (){
var statearr_16330 = [null,null,null,null,null,null,null,null,null];
(statearr_16330[(0)] = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__);

(statearr_16330[(1)] = (1));

return statearr_16330;
});
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1 = (function (state_16319){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16319);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16331){if((e16331 instanceof Object)){
var ex__8647__auto__ = e16331;
var statearr_16332_16339 = state_16319;
(statearr_16332_16339[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16319);

return cljs.core.cst$kw$recur;
} else {
throw e16331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16340 = state_16319;
state_16319 = G__16340;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = function(state_16319){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1.call(this,state_16319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16334,response_chan))
})();
var state__8712__auto__ = (function (){var statearr_16333 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16334);

return statearr_16333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16334,response_chan))
);


return db;
});
crisis_proto.handlers.save_recipient_group_mapping = (function crisis_proto$handlers$save_recipient_group_mapping(db,p__16341){
var vec__16343 = p__16341;
var selected_recipient_groups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16343,(0),null);
var selected_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16343,(1),null);
var selected_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16343,(2),null);
var base_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations], null);
var path = (cljs.core.truth_(selected_option)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(selected_option)], null))):cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message)], null))));
return cljs.core.assoc_in(db,path,selected_recipient_groups);
});
crisis_proto.handlers.download = (function crisis_proto$handlers$download(content){
var element_16344 = document.createElement("a");
var date_16345 = (new Date());
var w_16346 = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
element_16344.setAttribute("href",[cljs.core.str("data:json;charset=utf-8,"),cljs.core.str(cognitect.transit.write(w_16346,content))].join(''));

element_16344.setAttribute("download",[cljs.core.str("dispatch-config-"),cljs.core.str(date_16345.toISOString()),cljs.core.str(".json")].join(''));

element_16344.style.display = "none";

document.body.appendChild(element_16344);

element_16344.click();

document.body.removeChild(element_16344);

return content;
});
crisis_proto.handlers.add_scenarios = (function crisis_proto$handlers$add_scenarios(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16349){
var vec__16350 = p__16349;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16350,(1),null);
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$icon,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$button_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$messages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null))], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_parameters = (function crisis_proto$handlers$add_parameters(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16353){
var vec__16354 = p__16353;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16354,(1),null);
var parameter_config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k,cljs.core.cst$kw$parameter_DASH_configuration], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$questions,cljs.core.cst$kw$questions.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$destination_DASH_determined_DASH_by,cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$options,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(parameter_config)], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_destination_mapping = (function crisis_proto$handlers$add_destination_mapping(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16357){
var vec__16358 = p__16357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16358,(1),null);
var parameter_determines_destination_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null));
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k,cljs.core.cst$kw$destination_DASH_mapping], null),(cljs.core.truth_(parameter_determines_destination_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping], null))));
}),export$,scenarios);
});
crisis_proto.handlers.every_full_message_successfully_fetched_QMARK_ = (function crisis_proto$handlers$every_full_message_successfully_fetched_QMARK_(db){
return cljs.core.every_QMARK_((function (scenario_name){
return cljs.core.every_QMARK_(crisis_proto.handlers.has_success_status_QMARK_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null)));
}),cljs.core.keys(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_proto.handlers.contains_recipient_group_mappings_for_every_scenario_QMARK_ = (function crisis_proto$handlers$contains_recipient_group_mappings_for_every_scenario_QMARK_(db){
return cljs.core.every_QMARK_((function (scenario_name){
var or__4594__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping], null)));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping], null)));
}
}),cljs.core.keys(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_proto.handlers.valid_configuration_QMARK_ = (function crisis_proto$handlers$valid_configuration_QMARK_(db){
var and__4582__auto__ = crisis_proto.handlers.every_full_message_successfully_fetched_QMARK_(db);
if(cljs.core.truth_(and__4582__auto__)){
return crisis_proto.handlers.contains_recipient_group_mappings_for_every_scenario_QMARK_(db);
} else {
return and__4582__auto__;
}
});
crisis_proto.handlers.blank_str__GT_nil = (function crisis_proto$handlers$blank_str__GT_nil(string){
if(cljs.core.truth_(clojure.string.blank_QMARK_(string))){
return null;
} else {
return string;
}
});
crisis_proto.handlers.get_all_configured_full_messages = (function crisis_proto$handlers$get_all_configured_full_messages(db){
var extract_full_messages_from_scenario = (function crisis_proto$handlers$get_all_configured_full_messages_$_extract_full_messages_from_scenario(r,scenario_name){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null))));
});
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16361_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16361_SHARP_,cljs.core.cst$kw$shortText,crisis_proto.handlers.blank_str__GT_nil(cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(p1__16361_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16360_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16360_SHARP_,cljs.core.cst$kw$longText,crisis_proto.handlers.blank_str__GT_nil(cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(p1__16360_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16359_SHARP_){
return cljs.core.select_keys(p1__16359_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId,cljs.core.cst$kw$customizable,cljs.core.cst$kw$shortText,cljs.core.cst$kw$longText], null));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extract_full_messages_from_scenario,cljs.core.PersistentVector.EMPTY,cljs.core.keys(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)))))));
});
crisis_proto.handlers.desensitize_recipient_groups = (function crisis_proto$handlers$desensitize_recipient_groups(recipient_groups){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (rg){
return cljs.core.select_keys(rg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$id,cljs.core.cst$kw$link], null));
}),recipient_groups));
});
crisis_proto.handlers.get_all_configured_recipient_groups = (function crisis_proto$handlers$get_all_configured_recipient_groups(db){
return crisis_proto.handlers.desensitize_recipient_groups(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16364){
var vec__16365 = p__16364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(1),null);
var affiliations = cljs.core.cst$kw$affiliations.cljs$core$IFn$_invoke$arity$1(scenario_val);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario_val,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.vals(cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations))));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.vals(cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations)))));
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_proto.handlers.hash_messages_and_recipient_groups = (function crisis_proto$handlers$hash_messages_and_recipient_groups(db){
var messages = crisis_proto.handlers.get_all_configured_full_messages(db);
var recipient_groups = crisis_proto.handlers.get_all_configured_recipient_groups(db);
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,recipient_groups)], 0));
});
crisis_proto.handlers.add_configuration_summary = (function crisis_proto$handlers$add_configuration_summary(export$,db){
return cljs.core.assoc_in(cljs.core.assoc_in(export$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$summary,cljs.core.cst$kw$messages], null),crisis_proto.handlers.get_all_configured_full_messages(db)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$summary,cljs.core.cst$kw$recipient_DASH_groups], null),crisis_proto.handlers.get_all_configured_recipient_groups(db));
});
crisis_proto.handlers.finalize = (function crisis_proto$handlers$finalize(db,_){
var export_16366 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scenarios,cljs.core.PersistentArrayMap.EMPTY], null);
var scenarios_16367 = cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(crisis_proto.handlers.valid_configuration_QMARK_(db))){
crisis_proto.handlers.download(crisis_proto.handlers.pprint(cljs.core.assoc_in(cljs.core.assoc_in(crisis_proto.handlers.add_configuration_summary(crisis_proto.handlers.add_destination_mapping(crisis_proto.handlers.add_parameters(crisis_proto.handlers.add_scenarios(export_16366,scenarios_16367),scenarios_16367),scenarios_16367),db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null),crisis_proto.handlers.hash_messages_and_recipient_groups(db))));
} else {
alert("Unable to export configuration.  Check console for more details");

console.error("Unable to export configuration: not all messages were fetched successfully or a scenario doesn't have a recipient group mapping");
}

return db;
});
crisis_proto.handlers.set_uploaded_image = (function crisis_proto$handlers$set_uploaded_image(db,p__16368){
var vec__16371 = p__16368;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371,(0),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__16371,file){
return (function (e){
var G__16372 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploaded_DASH_image], null),e.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16372) : re_frame.core.dispatch.call(null,G__16372));
});})(file_reader,vec__16371,file))
;

file_reader.readAsDataURL(file);

return db;
});
crisis_proto.handlers.delete_scenario = (function crisis_proto$handlers$delete_scenario(db,p__16373){
var vec__16375 = p__16373;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16375,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$scenarios,cljs.core.dissoc,scenario_name);
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_in);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clear_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.clear_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$create_DASH_new_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16376){
var vec__16377 = p__16376;
var new_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(0),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null)))){
var G__16378_16380 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,[cljs.core.str("Successfully created the scenario: "),cljs.core.str(new_scenario_name)].join(''),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16378_16380) : re_frame.core.dispatch.call(null,G__16378_16380));

crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",new_scenario_name], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_scenario_name,cljs.core.cst$kw$affiliations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$messages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.PersistentArrayMap.EMPTY], null)], null));
} else {
var G__16379_16381 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,null,[cljs.core.str(new_scenario_name),cljs.core.str(" scenario already exists. Please provide a unique scenario name")].join('')], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16379_16381) : re_frame.core.dispatch.call(null,G__16379_16381));

return db;
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return crisis_proto.db.default_db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_active_DASH_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_current_page);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_active_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_active_scenario);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_all_DASH_messages,crisis_proto.handlers.fetch_all_messages);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$save_DASH_fetched_DASH_messages,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_messages,cljs.core.cst$kw$network_DASH_response.cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_selected_DASH_messages_DASH_for_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.save_selected_messages_for_scenario);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_details_DASH_for_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.fetch_full_message_details_for_scenario);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,(re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1(crisis_proto.handlers.find_and_record_parameters) : re_frame.core.enrich.call(null,crisis_proto.handlers.find_and_record_parameters)),crisis_proto.handlers.validate_db], null),(function (db,p__16382){
var vec__16383 = p__16382;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(0),null);
var full_message_responses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null),full_message_responses);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_reconcilation_DASH_temp,crisis_proto.handlers.validate_db,crisis_proto.handlers.initialize_reconciliation_temp);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16385){
var vec__16386 = p__16385;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(0),null);
var new_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(1),null);
var parent_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(2),null);
var parameter_options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null));
var new_option_obj = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_option,cljs.core.cst$kw$parents,parent_options], null);
var option = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parameter_options,new_option_obj,vec__16386,parameter_name,new_option,parent_options){
return (function (p1__16384_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16384_SHARP_,new_option_obj);
});})(parameter_options,new_option_obj,vec__16386,parameter_name,new_option,parent_options))
,parameter_options);
if(cljs.core.empty_QMARK_(option)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null),cljs.core.conj,new_option_obj);
} else {
return db;
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.remove_option_from_parameter);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_parameter_DASH_question,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.update_parameter_question);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_parameter_DASH_question_DASH_order,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.update_parameter_question_order);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected_DASH_option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16387){
var vec__16388 = p__16387;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(2),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),option);
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_reconciliation,crisis_proto.handlers.validate_db,(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16389){
var vec__16390 = p__16389;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(2),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,entry);
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_all_DASH_recipient_DASH_groups,crisis_proto.handlers.validate_db,crisis_proto.handlers.fetch_all_recipient_groups);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_fetched_DASH_recipient_DASH_groups,crisis_proto.handlers.validate_db,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups,cljs.core.cst$kw$network_DASH_response.cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_recipient_DASH_group_DASH_mappings,crisis_proto.handlers.validate_db,(function (db,_){
var initialize = (function crisis_proto$handlers$initialize(message_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,message_id){
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,message_id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var existent_mapping = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,message_id,existent_mapping);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,message_id,cljs.core.PersistentVector.EMPTY);
}
}),cljs.core.PersistentArrayMap.EMPTY,message_ids);
});
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null));
var message_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,messages);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping], null),initialize(message_ids));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_working,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16391){
var vec__16392 = p__16391;
var working_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$working_QMARK_,working_QMARK_);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16393){
var vec__16394 = p__16393;
var selected_parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16394,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null),selected_parameter);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_recipient_DASH_group_DASH_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.save_recipient_group_mapping);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16395){
var vec__16396 = p__16395;
var modal_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_and_DASH_populate_DASH_modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16397){
var vec__16398 = p__16397;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16398,(0),null);
var response_chan_16489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var message_id_16490 = cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(message);
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str([cljs.core.str("Messages/"),cljs.core.str(message_id_16490)].join(''))].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$channel,response_chan_16489], null)], 0));

var c__8710__auto___16491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function (state_16469){
var state_val_16470 = (state_16469[(1)]);
if((state_val_16470 === (1))){
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16469__$1,(2),response_chan_16489);
} else {
if((state_val_16470 === (2))){
var inst_16401 = (state_16469[(7)]);
var inst_16400 = (state_16469[(2)]);
var inst_16401__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16400);
var inst_16402 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16401__$1);
var state_16469__$1 = (function (){var statearr_16471 = state_16469;
(statearr_16471[(7)] = inst_16401__$1);

return statearr_16471;
})();
if(cljs.core.truth_(inst_16402)){
var statearr_16472_16492 = state_16469__$1;
(statearr_16472_16492[(1)] = (3));

} else {
var statearr_16473_16493 = state_16469__$1;
(statearr_16473_16493[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16470 === (3))){
var inst_16401 = (state_16469[(7)]);
var inst_16404 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16401);
var inst_16405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16406 = [cljs.core.cst$kw$style];
var inst_16407 = [cljs.core.cst$kw$padding];
var inst_16408 = ["0px 25px 0px 25px"];
var inst_16409 = cljs.core.PersistentHashMap.fromArrays(inst_16407,inst_16408);
var inst_16410 = [inst_16409];
var inst_16411 = cljs.core.PersistentHashMap.fromArrays(inst_16406,inst_16410);
var inst_16412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16413 = [cljs.core.cst$kw$style];
var inst_16414 = [cljs.core.cst$kw$margin];
var inst_16415 = ["3px"];
var inst_16416 = cljs.core.PersistentHashMap.fromArrays(inst_16414,inst_16415);
var inst_16417 = [inst_16416];
var inst_16418 = cljs.core.PersistentHashMap.fromArrays(inst_16413,inst_16417);
var inst_16419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16420 = [cljs.core.cst$kw$span$text_DASH_info,"shortText"];
var inst_16421 = (new cljs.core.PersistentVector(null,2,(5),inst_16419,inst_16420,null));
var inst_16422 = cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(inst_16404);
var inst_16423 = [cljs.core.str(" - "),cljs.core.str(inst_16422)].join('');
var inst_16424 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16418,inst_16421,inst_16423];
var inst_16425 = (new cljs.core.PersistentVector(null,4,(5),inst_16412,inst_16424,null));
var inst_16426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16427 = [cljs.core.cst$kw$style];
var inst_16428 = [cljs.core.cst$kw$margin];
var inst_16429 = ["3px"];
var inst_16430 = cljs.core.PersistentHashMap.fromArrays(inst_16428,inst_16429);
var inst_16431 = [inst_16430];
var inst_16432 = cljs.core.PersistentHashMap.fromArrays(inst_16427,inst_16431);
var inst_16433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16434 = [cljs.core.cst$kw$span$text_DASH_info,"longText"];
var inst_16435 = (new cljs.core.PersistentVector(null,2,(5),inst_16433,inst_16434,null));
var inst_16436 = cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(inst_16404);
var inst_16437 = [cljs.core.str(" - "),cljs.core.str(inst_16436)].join('');
var inst_16438 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16432,inst_16435,inst_16437];
var inst_16439 = (new cljs.core.PersistentVector(null,4,(5),inst_16426,inst_16438,null));
var inst_16440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16441 = [cljs.core.cst$kw$hr];
var inst_16442 = (new cljs.core.PersistentVector(null,1,(5),inst_16440,inst_16441,null));
var inst_16447 = (function (){var response = inst_16401;
var body = inst_16404;
return ((function (response,body,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function crisis_proto$handlers$iter__16443(s__16444){
return (new cljs.core.LazySeq(null,((function (response,body,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function (){
var s__16444__$1 = s__16444;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16444__$1);
if(temp__4425__auto__){
var s__16444__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16444__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16444__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16446 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16445 = (0);
while(true){
if((i__16445 < size__5365__auto__)){
var vec__16478 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16445);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16478,(1),null);
cljs.core.chunk_append(b__16446,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)));

var G__16494 = (i__16445 + (1));
i__16445 = G__16494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16446),crisis_proto$handlers$iter__16443(cljs.core.chunk_rest(s__16444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16446),null);
}
} else {
var vec__16479 = cljs.core.first(s__16444__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16479,(1),null);
return cljs.core.cons((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)),crisis_proto$handlers$iter__16443(cljs.core.rest(s__16444__$2)));
}
} else {
return null;
}
break;
}
});})(response,body,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
,null,null));
});
;})(response,body,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
})();
var inst_16448 = (function (){var response = inst_16401;
var body = inst_16404;
var iter__5366__auto__ = inst_16447;
return ((function (response,body,iter__5366__auto__,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16447,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function (key,_){
return key;
});
;})(response,body,iter__5366__auto__,inst_16401,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16447,state_val_16470,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
})();
var inst_16449 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_16448,inst_16404);
var inst_16450 = (inst_16447.cljs$core$IFn$_invoke$arity$1 ? inst_16447.cljs$core$IFn$_invoke$arity$1(inst_16449) : inst_16447.call(null,inst_16449));
var inst_16451 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(inst_16450);
var inst_16452 = [cljs.core.cst$kw$div,inst_16411,inst_16425,inst_16439,inst_16442,inst_16451];
var inst_16453 = (new cljs.core.PersistentVector(null,6,(5),inst_16405,inst_16452,null));
var inst_16454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16455 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16453];
var inst_16456 = (new cljs.core.PersistentVector(null,2,(5),inst_16454,inst_16455,null));
var inst_16457 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16456) : re_frame.core.dispatch.call(null,inst_16456));
var state_16469__$1 = state_16469;
var statearr_16480_16495 = state_16469__$1;
(statearr_16480_16495[(2)] = inst_16457);

(statearr_16480_16495[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16470 === (4))){
var inst_16459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16460 = [cljs.core.cst$kw$h5$text_DASH_danger,"Error Fetching Message Details"];
var inst_16461 = (new cljs.core.PersistentVector(null,2,(5),inst_16459,inst_16460,null));
var inst_16462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16463 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16461];
var inst_16464 = (new cljs.core.PersistentVector(null,2,(5),inst_16462,inst_16463,null));
var inst_16465 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16464) : re_frame.core.dispatch.call(null,inst_16464));
var state_16469__$1 = state_16469;
var statearr_16481_16496 = state_16469__$1;
(statearr_16481_16496[(2)] = inst_16465);

(statearr_16481_16496[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16470 === (5))){
var inst_16467 = (state_16469[(2)]);
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16469__$1,inst_16467);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
;
return ((function (switch__8643__auto__,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16485 = [null,null,null,null,null,null,null,null];
(statearr_16485[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16485[(1)] = (1));

return statearr_16485;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16469){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16469);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16486){if((e16486 instanceof Object)){
var ex__8647__auto__ = e16486;
var statearr_16487_16497 = state_16469;
(statearr_16487_16497[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16469);

return cljs.core.cst$kw$recur;
} else {
throw e16486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16498 = state_16469;
state_16469 = G__16498;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16469){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
})();
var state__8712__auto__ = (function (){var statearr_16488 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16491);

return statearr_16488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16491,response_chan_16489,message_id_16490,vec__16398,message))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$populate_DASH_modal_DASH_with_DASH_recipient_DASH_group_DASH_details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16499){
var vec__16500 = p__16499;
var recipient_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16500,(0),null);
var modal_body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pading,"0px 25px 0px 25px;"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (vec__16500,recipient_group){
return (function crisis_proto$handlers$iter__16501(s__16502){
return (new cljs.core.LazySeq(null,((function (vec__16500,recipient_group){
return (function (){
var s__16502__$1 = s__16502;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16502__$1);
if(temp__4425__auto__){
var s__16502__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16502__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16502__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16504 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16503 = (0);
while(true){
if((i__16503 < size__5365__auto__)){
var vec__16509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16503);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16509,(1),null);
cljs.core.chunk_append(b__16504,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__16511 = (i__16503 + (1));
i__16503 = G__16511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16504),crisis_proto$handlers$iter__16501(cljs.core.chunk_rest(s__16502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16504),null);
}
} else {
var vec__16510 = cljs.core.first(s__16502__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),crisis_proto$handlers$iter__16501(cljs.core.rest(s__16502__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16500,recipient_group))
,null,null));
});})(vec__16500,recipient_group))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__5366__auto__,vec__16500,recipient_group){
return (function (k,_){
return k;
});})(iter__5366__auto__,vec__16500,recipient_group))
,recipient_group));
})())], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$validate_DASH_informacast_DASH_configuration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16512){
var vec__16513 = p__16512;
var map__16514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513,(0),null);
var map__16514__$1 = ((((!((map__16514 == null)))?((((map__16514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16514):map__16514);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16514__$1,cljs.core.cst$kw$base_DASH_url);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16514__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16514__$1,cljs.core.cst$kw$password);
var ping_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var credentials_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("Admin/System/ldap/isLdapAuthenticationAllowed")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$channel,ping_chan], null)], 0));

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("BasicAdmin/licensing")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null),cljs.core.cst$kw$channel,credentials_chan], null)], 0));

var c__8710__auto___16587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password){
return (function (state_16558){
var state_val_16559 = (state_16558[(1)]);
if((state_val_16559 === (7))){
var inst_16533 = (state_16558[(7)]);
var inst_16521 = (state_16558[(8)]);
var inst_16533__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16521);
var state_16558__$1 = (function (){var statearr_16560 = state_16558;
(statearr_16560[(7)] = inst_16533__$1);

return statearr_16560;
})();
if(cljs.core.truth_(inst_16533__$1)){
var statearr_16561_16588 = state_16558__$1;
(statearr_16561_16588[(1)] = (10));

} else {
var statearr_16562_16589 = state_16558__$1;
(statearr_16562_16589[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (1))){
var state_16558__$1 = state_16558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16558__$1,(2),ping_chan);
} else {
if((state_val_16559 === (4))){
var inst_16518 = (state_16558[(9)]);
var inst_16524 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16518);
var inst_16525 = ((200) <= inst_16524);
var inst_16526 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16518);
var inst_16527 = (inst_16526 <= (299));
var inst_16528 = (inst_16525) && (inst_16527);
var state_16558__$1 = state_16558;
var statearr_16563_16590 = state_16558__$1;
(statearr_16563_16590[(2)] = inst_16528);

(statearr_16563_16590[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (15))){
var inst_16552 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
var statearr_16564_16591 = state_16558__$1;
(statearr_16564_16591[(2)] = inst_16552);

(statearr_16564_16591[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (13))){
var inst_16544 = alert("Credentials Successfully Applied");
var inst_16545 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16546 = [cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,base_url,username,password];
var inst_16547 = (new cljs.core.PersistentVector(null,4,(5),inst_16545,inst_16546,null));
var inst_16548 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16547) : re_frame.core.dispatch.call(null,inst_16547));
var state_16558__$1 = (function (){var statearr_16565 = state_16558;
(statearr_16565[(10)] = inst_16544);

return statearr_16565;
})();
var statearr_16566_16592 = state_16558__$1;
(statearr_16566_16592[(2)] = inst_16548);

(statearr_16566_16592[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (6))){
var inst_16531 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
if(cljs.core.truth_(inst_16531)){
var statearr_16567_16593 = state_16558__$1;
(statearr_16567_16593[(1)] = (7));

} else {
var statearr_16568_16594 = state_16558__$1;
(statearr_16568_16594[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (3))){
var inst_16518 = (state_16558[(9)]);
var inst_16522 = (state_16558[(11)]);
var inst_16520 = (state_16558[(2)]);
var inst_16521 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16520);
var inst_16522__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16518);
var state_16558__$1 = (function (){var statearr_16569 = state_16558;
(statearr_16569[(8)] = inst_16521);

(statearr_16569[(11)] = inst_16522__$1);

return statearr_16569;
})();
if(cljs.core.truth_(inst_16522__$1)){
var statearr_16570_16595 = state_16558__$1;
(statearr_16570_16595[(1)] = (4));

} else {
var statearr_16571_16596 = state_16558__$1;
(statearr_16571_16596[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (12))){
var inst_16542 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
if(cljs.core.truth_(inst_16542)){
var statearr_16572_16597 = state_16558__$1;
(statearr_16572_16597[(1)] = (13));

} else {
var statearr_16573_16598 = state_16558__$1;
(statearr_16573_16598[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (2))){
var inst_16517 = (state_16558[(2)]);
var inst_16518 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16517);
var state_16558__$1 = (function (){var statearr_16574 = state_16558;
(statearr_16574[(9)] = inst_16518);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16558__$1,(3),credentials_chan);
} else {
if((state_val_16559 === (11))){
var inst_16533 = (state_16558[(7)]);
var state_16558__$1 = state_16558;
var statearr_16575_16599 = state_16558__$1;
(statearr_16575_16599[(2)] = inst_16533);

(statearr_16575_16599[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (9))){
var inst_16556 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16558__$1,inst_16556);
} else {
if((state_val_16559 === (5))){
var inst_16522 = (state_16558[(11)]);
var state_16558__$1 = state_16558;
var statearr_16576_16600 = state_16558__$1;
(statearr_16576_16600[(2)] = inst_16522);

(statearr_16576_16600[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (14))){
var inst_16550 = alert("Invalid Credentials");
var state_16558__$1 = state_16558;
var statearr_16577_16601 = state_16558__$1;
(statearr_16577_16601[(2)] = inst_16550);

(statearr_16577_16601[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (10))){
var inst_16521 = (state_16558[(8)]);
var inst_16535 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16521);
var inst_16536 = ((200) <= inst_16535);
var inst_16537 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16521);
var inst_16538 = (inst_16537 <= (299));
var inst_16539 = (inst_16536) && (inst_16538);
var state_16558__$1 = state_16558;
var statearr_16578_16602 = state_16558__$1;
(statearr_16578_16602[(2)] = inst_16539);

(statearr_16578_16602[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16559 === (8))){
var inst_16554 = alert("Supplied URL isn't corrrect");
var state_16558__$1 = state_16558;
var statearr_16579_16603 = state_16558__$1;
(statearr_16579_16603[(2)] = inst_16554);

(statearr_16579_16603[(1)] = (9));


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
}
}
}
}
}
});})(c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password))
;
return ((function (switch__8643__auto__,c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16583[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16583[(1)] = (1));

return statearr_16583;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16558){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16558);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16584){if((e16584 instanceof Object)){
var ex__8647__auto__ = e16584;
var statearr_16585_16604 = state_16558;
(statearr_16585_16604[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16558);

return cljs.core.cst$kw$recur;
} else {
throw e16584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16605 = state_16558;
state_16558 = G__16605;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16558){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password))
})();
var state__8712__auto__ = (function (){var statearr_16586 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16587);

return statearr_16586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16587,ping_chan,credentials_chan,vec__16513,map__16514,map__16514__$1,base_url,username,password))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16606){
var vec__16607 = p__16606;
var base_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(2),null);
crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenarios"], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$configuration,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,base_url,cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$finalize,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.finalize);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_uploaded_DASH_image,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_uploaded_image);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$accept_DASH_button_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,_){
var G__16608_16609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept_DASH_button_DASH_preview_DASH_color], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16608_16609) : re_frame.core.dispatch.call(null,G__16608_16609));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$icon], null),cljs.core.cst$kw$uploaded_DASH_image.cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_button_DASH_preview_DASH_color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16610){
var vec__16611 = p__16610;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16611,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$button_DASH_preview_DASH_color,color);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$accept_DASH_button_DASH_preview_DASH_color,crisis_proto.handlers.validate_db,(function (db,_){
var temp__4423__auto__ = cljs.core.re_find(/^(?=\#[0-9A-Fa-f]*$)(?:.{4}|.{7}|.{9})$/,cljs.core.cst$kw$button_DASH_preview_DASH_color.cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__4423__auto__)){
var valid_6_digit_hex = temp__4423__auto__;
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$button_DASH_color], null),valid_6_digit_hex);
} else {
alert("Invalid Color: color value must be a valid hexadecimal value in the form of #FFFFFF for example.");

return db;
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$delete_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.delete_scenario);
