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
var G__15958_15959 = JSON.stringify(cljs.core.clj__GT_js(obj));
console.log(G__15958_15959);

return obj;
});
crisis_proto.handlers.md5_hash = (function crisis_proto$handlers$md5_hash(var_args){
var args__5659__auto__ = [];
var len__5652__auto___15964 = arguments.length;
var i__5653__auto___15965 = (0);
while(true){
if((i__5653__auto___15965 < len__5652__auto___15964)){
args__5659__auto__.push((arguments[i__5653__auto___15965]));

var G__15966 = (i__5653__auto___15965 + (1));
i__5653__auto___15965 = G__15966;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15962 = (function (){var G__15963 = (new goog.crypt.Md5());
G__15963.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15963;
})().digest();
return goog.crypt.byteArrayToHex(G__15962);
});

crisis_proto.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_proto.handlers.md5_hash.cljs$lang$applyTo = (function (seq15960){
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15960));
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
return (function (p1__15967_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/#\{[^#]+\}/,p1__15967_SHARP_))){
return p1__15967_SHARP_;
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
crisis_proto.handlers.find_and_record_parameters = (function crisis_proto$handlers$find_and_record_parameters(db,p__15968){
var vec__15970 = p__15968;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto__)){
var scenario_with_full_messages = temp__4423__auto__;
var parameters = crisis_proto.handlers.find_parameters(scenario_with_full_messages);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null),parameters),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciled_QMARK_], null),cljs.core.empty_QMARK_(parameters));
} else {
throw [cljs.core.str("[find-and-record-parameters] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
}
});
crisis_proto.handlers.set_in = (function crisis_proto$handlers$set_in(db,p__15971){
var vec__15973 = p__15971;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_proto.handlers.set_current_page = (function crisis_proto$handlers$set_current_page(db,p__15974){
var vec__15977 = p__15974;
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15977,(0),null);
var G__15978_15979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15978_15979) : re_frame.core.dispatch.call(null,G__15978_15979));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,((cljs.core.not(active_panel))?cljs.core.cst$kw$home:active_panel));
});
crisis_proto.handlers.set_response_status = (function crisis_proto$handlers$set_response_status(db,p__15980){
var vec__15982 = p__15980;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(0),null);
var success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15982,(2),null);
if(cljs.core.truth_(success)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,success], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,error,cljs.core.cst$kw$result,null], null));
}
});
crisis_proto.handlers.clear_response_status = (function crisis_proto$handlers$clear_response_status(db,p__15983){
var vec__15985 = p__15983;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,null], null));
});
/**
 * Checks to see if the scenario exists in the database first.  If it does, it gets set as the active scenario.
 *   If not, the user is directed to the not-found screen
 */
crisis_proto.handlers.set_active_scenario = (function crisis_proto$handlers$set_active_scenario(db,p__15986){
var vec__15989 = p__15986;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15989,(0),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_scenario,scenario_name);
} else {
var G__15990_15991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15990_15991) : re_frame.core.dispatch.call(null,G__15990_15991));

return db;
}
});
crisis_proto.handlers.fetch_all_messages = (function crisis_proto$handlers$fetch_all_messages(db,_){
var G__16045_16098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16045_16098) : re_frame.core.dispatch.call(null,G__16045_16098));

var response_chan_16099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$query_DASH_params,new cljs.core.PersistentArrayMap(null, 1, ["maxCount",(25000)], null),cljs.core.cst$kw$channel,response_chan_16099], null)], 0));

var c__8710__auto___16100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16100,response_chan_16099){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16100,response_chan_16099){
return (function (state_16082){
var state_val_16083 = (state_16082[(1)]);
if((state_val_16083 === (1))){
var state_16082__$1 = state_16082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16082__$1,(2),response_chan_16099);
} else {
if((state_val_16083 === (2))){
var inst_16048 = (state_16082[(7)]);
var inst_16047 = (state_16082[(2)]);
var inst_16048__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16047);
var inst_16049 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16048__$1);
var inst_16050 = ((200) <= inst_16049);
var inst_16051 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16048__$1);
var inst_16052 = (inst_16051 <= (299));
var inst_16053 = (inst_16050) && (inst_16052);
var state_16082__$1 = (function (){var statearr_16084 = state_16082;
(statearr_16084[(7)] = inst_16048__$1);

return statearr_16084;
})();
if(cljs.core.truth_(inst_16053)){
var statearr_16085_16101 = state_16082__$1;
(statearr_16085_16101[(1)] = (3));

} else {
var statearr_16086_16102 = state_16082__$1;
(statearr_16086_16102[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16083 === (3))){
var inst_16048 = (state_16082[(7)]);
var inst_16055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16056 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16048);
var inst_16057 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16056);
var inst_16058 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16057,null];
var inst_16059 = (new cljs.core.PersistentVector(null,4,(5),inst_16055,inst_16058,null));
var inst_16060 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16059) : re_frame.core.dispatch.call(null,inst_16059));
var inst_16061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16062 = [cljs.core.cst$kw$save_DASH_fetched_DASH_messages];
var inst_16063 = (new cljs.core.PersistentVector(null,1,(5),inst_16061,inst_16062,null));
var inst_16064 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16063) : re_frame.core.dispatch.call(null,inst_16063));
var inst_16065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16066 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16067 = (new cljs.core.PersistentVector(null,2,(5),inst_16065,inst_16066,null));
var inst_16068 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16067) : re_frame.core.dispatch.call(null,inst_16067));
var state_16082__$1 = (function (){var statearr_16087 = state_16082;
(statearr_16087[(8)] = inst_16060);

(statearr_16087[(9)] = inst_16064);

return statearr_16087;
})();
var statearr_16088_16103 = state_16082__$1;
(statearr_16088_16103[(2)] = inst_16068);

(statearr_16088_16103[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16083 === (4))){
var inst_16048 = (state_16082[(7)]);
var inst_16070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16071 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16048);
var inst_16072 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16071];
var inst_16073 = (new cljs.core.PersistentVector(null,4,(5),inst_16070,inst_16072,null));
var inst_16074 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16073) : re_frame.core.dispatch.call(null,inst_16073));
var inst_16075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16076 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16077 = (new cljs.core.PersistentVector(null,2,(5),inst_16075,inst_16076,null));
var inst_16078 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16077) : re_frame.core.dispatch.call(null,inst_16077));
var state_16082__$1 = (function (){var statearr_16089 = state_16082;
(statearr_16089[(10)] = inst_16074);

return statearr_16089;
})();
var statearr_16090_16104 = state_16082__$1;
(statearr_16090_16104[(2)] = inst_16078);

(statearr_16090_16104[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16083 === (5))){
var inst_16080 = (state_16082[(2)]);
var state_16082__$1 = state_16082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16082__$1,inst_16080);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16100,response_chan_16099))
;
return ((function (switch__8643__auto__,c__8710__auto___16100,response_chan_16099){
return (function() {
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0 = (function (){
var statearr_16094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16094[(0)] = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__);

(statearr_16094[(1)] = (1));

return statearr_16094;
});
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1 = (function (state_16082){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16082);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16095){if((e16095 instanceof Object)){
var ex__8647__auto__ = e16095;
var statearr_16096_16105 = state_16082;
(statearr_16096_16105[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16082);

return cljs.core.cst$kw$recur;
} else {
throw e16095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16106 = state_16082;
state_16082 = G__16106;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = function(state_16082){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1.call(this,state_16082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16100,response_chan_16099))
})();
var state__8712__auto__ = (function (){var statearr_16097 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16100);

return statearr_16097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16100,response_chan_16099))
);


return db;
});
crisis_proto.handlers.save_selected_messages_for_scenario = (function crisis_proto$handlers$save_selected_messages_for_scenario(db,p__16107){
var vec__16109 = p__16107;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16109,(0),null);
var selected_messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16109,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null),selected_messages);
});
crisis_proto.handlers.fetch_full_message_details_for_scenario = (function crisis_proto$handlers$fetch_full_message_details_for_scenario(db,p__16110){
var vec__16164 = p__16110;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16164,(0),null);
var G__16165_16217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16165_16217) : re_frame.core.dispatch.call(null,G__16165_16217));

var fetch_full_message_by_id = ((function (vec__16164,scenario_name){
return (function crisis_proto$handlers$fetch_full_message_details_for_scenario_$_fetch_full_message_by_id(message_id){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/"),cljs.core.str(message_id)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db)], null)], 0));
});})(vec__16164,scenario_name))
;
var scenario = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db)], null));
if(cljs.core.not(scenario)){
throw [cljs.core.str("[fetch-full-message-details-for-scenario] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
} else {
var c__8710__auto___16218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16218,scenario,vec__16164,scenario_name){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16218,scenario,vec__16164,scenario_name){
return (function (state_16199){
var state_val_16200 = (state_16199[(1)]);
if((state_val_16200 === (1))){
var inst_16166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16167 = [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages];
var inst_16168 = (new cljs.core.PersistentVector(null,2,(5),inst_16166,inst_16167,null));
var inst_16169 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,inst_16168);
var inst_16170 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,inst_16169);
var inst_16171 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fetch_full_message_by_id,inst_16170);
var inst_16172 = cljs.core.PersistentVector.EMPTY;
var inst_16173 = inst_16172;
var inst_16174 = inst_16171;
var state_16199__$1 = (function (){var statearr_16201 = state_16199;
(statearr_16201[(7)] = inst_16173);

(statearr_16201[(8)] = inst_16174);

return statearr_16201;
})();
var statearr_16202_16219 = state_16199__$1;
(statearr_16202_16219[(2)] = null);

(statearr_16202_16219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (2))){
var inst_16174 = (state_16199[(8)]);
var inst_16176 = cljs.core.empty_QMARK_(inst_16174);
var state_16199__$1 = state_16199;
if(inst_16176){
var statearr_16203_16220 = state_16199__$1;
(statearr_16203_16220[(1)] = (4));

} else {
var statearr_16204_16221 = state_16199__$1;
(statearr_16204_16221[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (3))){
var inst_16189 = (state_16199[(2)]);
var inst_16190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16191 = [cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,scenario_name,inst_16189];
var inst_16192 = (new cljs.core.PersistentVector(null,3,(5),inst_16190,inst_16191,null));
var inst_16193 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16192) : re_frame.core.dispatch.call(null,inst_16192));
var inst_16194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16195 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16196 = (new cljs.core.PersistentVector(null,2,(5),inst_16194,inst_16195,null));
var inst_16197 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16196) : re_frame.core.dispatch.call(null,inst_16196));
var state_16199__$1 = (function (){var statearr_16205 = state_16199;
(statearr_16205[(9)] = inst_16193);

return statearr_16205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16199__$1,inst_16197);
} else {
if((state_val_16200 === (4))){
var inst_16173 = (state_16199[(7)]);
var state_16199__$1 = state_16199;
var statearr_16206_16222 = state_16199__$1;
(statearr_16206_16222[(2)] = inst_16173);

(statearr_16206_16222[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (5))){
var inst_16174 = (state_16199[(8)]);
var inst_16179 = cljs.core.first(inst_16174);
var state_16199__$1 = state_16199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16199__$1,(7),inst_16179);
} else {
if((state_val_16200 === (6))){
var inst_16187 = (state_16199[(2)]);
var state_16199__$1 = state_16199;
var statearr_16207_16223 = state_16199__$1;
(statearr_16207_16223[(2)] = inst_16187);

(statearr_16207_16223[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16200 === (7))){
var inst_16173 = (state_16199[(7)]);
var inst_16174 = (state_16199[(8)]);
var inst_16181 = (state_16199[(2)]);
var inst_16182 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_16173,inst_16181);
var inst_16183 = cljs.core.rest(inst_16174);
var inst_16184 = cljs.core.vec(inst_16183);
var inst_16173__$1 = inst_16182;
var inst_16174__$1 = inst_16184;
var state_16199__$1 = (function (){var statearr_16208 = state_16199;
(statearr_16208[(7)] = inst_16173__$1);

(statearr_16208[(8)] = inst_16174__$1);

return statearr_16208;
})();
var statearr_16209_16224 = state_16199__$1;
(statearr_16209_16224[(2)] = null);

(statearr_16209_16224[(1)] = (2));


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
});})(c__8710__auto___16218,scenario,vec__16164,scenario_name))
;
return ((function (switch__8643__auto__,c__8710__auto___16218,scenario,vec__16164,scenario_name){
return (function() {
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0 = (function (){
var statearr_16213 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16213[(0)] = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__);

(statearr_16213[(1)] = (1));

return statearr_16213;
});
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1 = (function (state_16199){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16199);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16214){if((e16214 instanceof Object)){
var ex__8647__auto__ = e16214;
var statearr_16215_16225 = state_16199;
(statearr_16215_16225[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16199);

return cljs.core.cst$kw$recur;
} else {
throw e16214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16226 = state_16199;
state_16199 = G__16226;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = function(state_16199){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1.call(this,state_16199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16218,scenario,vec__16164,scenario_name))
})();
var state__8712__auto__ = (function (){var statearr_16216 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16218);

return statearr_16216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16218,scenario,vec__16164,scenario_name))
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
var G__16228_16229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16228_16229) : re_frame.core.dispatch.call(null,G__16228_16229));

return db;
}
});
crisis_proto.handlers.remove_option_from_parameter = (function crisis_proto$handlers$remove_option_from_parameter(db,p__16230){
var vec__16232 = p__16230;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16232,(1),null);
var option_remover = ((function (vec__16232,parameter_name,option){
return (function crisis_proto$handlers$remove_option_from_parameter_$_option_remover(p_option){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p_option,option)){
return p_option;
} else {
return null;
}
});})(vec__16232,parameter_name,option))
;
var path = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,path,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(option_remover,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
});
crisis_proto.handlers.update_parameter_question = (function crisis_proto$handlers$update_parameter_question(db,p__16233){
var vec__16235 = p__16233;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(1),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter], null),question);
});
crisis_proto.handlers.update_parameter_question_order = (function crisis_proto$handlers$update_parameter_question_order(db,p__16236){
var vec__16241 = p__16236;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(1),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(2),null);
if(cljs.core.not((function (){var G__16242 = parseInt(new_order);
return isNaN(G__16242);
})())){
var order_vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
var new_index = (parseInt(new_order) - (1));
var old_index = cljs.core.to_array(order_vector).indexOf(parameter);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (order_vector,new_index,old_index,vec__16241,active_scenario_name,parameter,new_order){
return (function (total,p__16243){
var vec__16244 = p__16243;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(1),null);
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
});})(order_vector,new_index,old_index,vec__16241,active_scenario_name,parameter,new_order))
,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (order_vector,new_index,old_index,vec__16241,active_scenario_name,parameter,new_order){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(order_vector,new_index,old_index,vec__16241,active_scenario_name,parameter,new_order))
,order_vector)));
} else {
return db;
}
});
crisis_proto.handlers.fetch_all_recipient_groups = (function crisis_proto$handlers$fetch_all_recipient_groups(db,_){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("RecipientGroups/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$channel,response_chan], null)], 0));

var c__8710__auto___16331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16331,response_chan){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16331,response_chan){
return (function (state_16316){
var state_val_16317 = (state_16316[(1)]);
if((state_val_16317 === (1))){
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16316__$1,(2),response_chan);
} else {
if((state_val_16317 === (2))){
var inst_16290 = (state_16316[(7)]);
var inst_16289 = (state_16316[(2)]);
var inst_16290__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16289);
var inst_16291 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16290__$1);
var inst_16292 = ((200) <= inst_16291);
var inst_16293 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16290__$1);
var inst_16294 = (inst_16293 <= (299));
var inst_16295 = (inst_16292) && (inst_16294);
var state_16316__$1 = (function (){var statearr_16318 = state_16316;
(statearr_16318[(7)] = inst_16290__$1);

return statearr_16318;
})();
if(cljs.core.truth_(inst_16295)){
var statearr_16319_16332 = state_16316__$1;
(statearr_16319_16332[(1)] = (3));

} else {
var statearr_16320_16333 = state_16316__$1;
(statearr_16320_16333[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16317 === (3))){
var inst_16290 = (state_16316[(7)]);
var inst_16297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16298 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16290);
var inst_16299 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16298);
var inst_16300 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16299,null];
var inst_16301 = (new cljs.core.PersistentVector(null,4,(5),inst_16297,inst_16300,null));
var inst_16302 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16301) : re_frame.core.dispatch.call(null,inst_16301));
var inst_16303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16304 = [cljs.core.cst$kw$save_DASH_fetched_DASH_recipient_DASH_groups];
var inst_16305 = (new cljs.core.PersistentVector(null,1,(5),inst_16303,inst_16304,null));
var inst_16306 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16305) : re_frame.core.dispatch.call(null,inst_16305));
var state_16316__$1 = (function (){var statearr_16321 = state_16316;
(statearr_16321[(8)] = inst_16302);

return statearr_16321;
})();
var statearr_16322_16334 = state_16316__$1;
(statearr_16322_16334[(2)] = inst_16306);

(statearr_16322_16334[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16317 === (4))){
var inst_16290 = (state_16316[(7)]);
var inst_16308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16309 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16290);
var inst_16310 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16309];
var inst_16311 = (new cljs.core.PersistentVector(null,4,(5),inst_16308,inst_16310,null));
var inst_16312 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16311) : re_frame.core.dispatch.call(null,inst_16311));
var state_16316__$1 = state_16316;
var statearr_16323_16335 = state_16316__$1;
(statearr_16323_16335[(2)] = inst_16312);

(statearr_16323_16335[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16317 === (5))){
var inst_16314 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16316__$1,inst_16314);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16331,response_chan))
;
return ((function (switch__8643__auto__,c__8710__auto___16331,response_chan){
return (function() {
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0 = (function (){
var statearr_16327 = [null,null,null,null,null,null,null,null,null];
(statearr_16327[(0)] = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__);

(statearr_16327[(1)] = (1));

return statearr_16327;
});
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1 = (function (state_16316){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16316);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object)){
var ex__8647__auto__ = e16328;
var statearr_16329_16336 = state_16316;
(statearr_16329_16336[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16316);

return cljs.core.cst$kw$recur;
} else {
throw e16328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16337 = state_16316;
state_16316 = G__16337;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = function(state_16316){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1.call(this,state_16316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16331,response_chan))
})();
var state__8712__auto__ = (function (){var statearr_16330 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16331);

return statearr_16330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16331,response_chan))
);


return db;
});
crisis_proto.handlers.save_recipient_group_mapping = (function crisis_proto$handlers$save_recipient_group_mapping(db,p__16338){
var vec__16340 = p__16338;
var selected_recipient_groups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(0),null);
var selected_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(1),null);
var selected_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(2),null);
var base_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations], null);
var path = (cljs.core.truth_(selected_option)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(selected_option)], null))):cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message)], null))));
return cljs.core.assoc_in(db,path,selected_recipient_groups);
});
crisis_proto.handlers.download = (function crisis_proto$handlers$download(content){
var element_16341 = document.createElement("a");
var date_16342 = (new Date());
var w_16343 = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
element_16341.setAttribute("href",[cljs.core.str("data:json;charset=utf-8,"),cljs.core.str(cognitect.transit.write(w_16343,content))].join(''));

element_16341.setAttribute("download",[cljs.core.str("dispatch-config-"),cljs.core.str(date_16342.toISOString()),cljs.core.str(".json")].join(''));

element_16341.style.display = "none";

document.body.appendChild(element_16341);

element_16341.click();

document.body.removeChild(element_16341);

return content;
});
crisis_proto.handlers.add_scenarios = (function crisis_proto$handlers$add_scenarios(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16346){
var vec__16347 = p__16346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(1),null);
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$icon,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$button_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$messages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null))], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_parameters = (function crisis_proto$handlers$add_parameters(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16350){
var vec__16351 = p__16350;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(1),null);
var parameter_config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k,cljs.core.cst$kw$parameter_DASH_configuration], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$order,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$questions,cljs.core.cst$kw$questions.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$destination_DASH_determined_DASH_by,cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$options,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(parameter_config)], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_destination_mapping = (function crisis_proto$handlers$add_destination_mapping(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16354){
var vec__16355 = p__16354;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(1),null);
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
crisis_proto.handlers.able_to_create_hash_QMARK_ = (function crisis_proto$handlers$able_to_create_hash_QMARK_(db){
var and__4582__auto__ = crisis_proto.handlers.every_full_message_successfully_fetched_QMARK_(db);
if(cljs.core.truth_(and__4582__auto__)){
return crisis_proto.handlers.contains_recipient_group_mappings_for_every_scenario_QMARK_(db);
} else {
return and__4582__auto__;
}
});
crisis_proto.handlers.get_all_configured_full_messages = (function crisis_proto$handlers$get_all_configured_full_messages(db){
var extract_full_messages_from_scenario = (function crisis_proto$handlers$get_all_configured_full_messages_$_extract_full_messages_from_scenario(r,scenario_name){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$body,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null))));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extract_full_messages_from_scenario,cljs.core.PersistentVector.EMPTY,cljs.core.keys(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_proto.handlers.get_all_configured_recipient_groups = (function crisis_proto$handlers$get_all_configured_recipient_groups(db){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16358){
var vec__16359 = p__16358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(1),null);
var affiliations = cljs.core.cst$kw$affiliations.cljs$core$IFn$_invoke$arity$1(scenario_val);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario_val,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.vals(cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations))));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.vals(cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations)))));
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db));
});
crisis_proto.handlers.hash_messages_and_recipient_groups = (function crisis_proto$handlers$hash_messages_and_recipient_groups(db){
var messages = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,crisis_proto.handlers.get_all_configured_full_messages(db));
var recipient_groups = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crisis_proto.handlers.get_all_configured_recipient_groups(db));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[start] ========== MESSAGES =========== [start]"], 0));

crisis_proto.handlers.pprint(messages);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[end]   ========== MESSAGES ===========   [end]"], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[start] ========== RECIPIENT GROUPS =========== [start]"], 0));

crisis_proto.handlers.pprint(recipient_groups);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[end]   ========== RECIPIENT GROUPS ===========   [end]"], 0));

return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([messages,recipient_groups], 0));
});
crisis_proto.handlers.finalize = (function crisis_proto$handlers$finalize(db,_){
var export_16360 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scenarios,cljs.core.PersistentArrayMap.EMPTY], null);
var scenarios_16361 = cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(crisis_proto.handlers.able_to_create_hash_QMARK_(db))){
crisis_proto.handlers.download(cljs.core.assoc_in(cljs.core.assoc_in(crisis_proto.handlers.add_destination_mapping(crisis_proto.handlers.add_parameters(crisis_proto.handlers.add_scenarios(export_16360,scenarios_16361),scenarios_16361),scenarios_16361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null),crisis_proto.handlers.hash_messages_and_recipient_groups(db)));
} else {
alert("Unable to export configuration.  Check console for more details");

console.error("Unable to export configuration: not all messages were fetched successfully or a scenario doesn't have a recipient group mapping");
}

return db;
});
crisis_proto.handlers.set_uploaded_image = (function crisis_proto$handlers$set_uploaded_image(db,p__16362){
var vec__16365 = p__16362;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__16365,file){
return (function (e){
var G__16366 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploaded_DASH_image], null),e.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16366) : re_frame.core.dispatch.call(null,G__16366));
});})(file_reader,vec__16365,file))
;

file_reader.readAsDataURL(file);

return db;
});
crisis_proto.handlers.delete_scenario = (function crisis_proto$handlers$delete_scenario(db,p__16367){
var vec__16369 = p__16367;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16369,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$scenarios,cljs.core.dissoc,scenario_name);
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_in);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clear_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.clear_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$create_DASH_new_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16370){
var vec__16371 = p__16370;
var new_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16371,(0),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null)))){
var G__16372_16374 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,[cljs.core.str("Successfully created the scenario: "),cljs.core.str(new_scenario_name)].join(''),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16372_16374) : re_frame.core.dispatch.call(null,G__16372_16374));

crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",new_scenario_name], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_scenario_name,cljs.core.cst$kw$affiliations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$messages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.PersistentArrayMap.EMPTY], null)], null));
} else {
var G__16373_16375 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,null,[cljs.core.str(new_scenario_name),cljs.core.str(" scenario already exists. Please provide a unique scenario name")].join('')], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16373_16375) : re_frame.core.dispatch.call(null,G__16373_16375));

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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,(re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1(crisis_proto.handlers.find_and_record_parameters) : re_frame.core.enrich.call(null,crisis_proto.handlers.find_and_record_parameters)),crisis_proto.handlers.validate_db], null),(function (db,p__16376){
var vec__16377 = p__16376;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(0),null);
var full_message_responses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null),full_message_responses);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_reconcilation_DASH_temp,crisis_proto.handlers.validate_db,crisis_proto.handlers.initialize_reconciliation_temp);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16379){
var vec__16380 = p__16379;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(0),null);
var new_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(1),null);
var parent_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(2),null);
var parameter_options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null));
var new_option_obj = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_option,cljs.core.cst$kw$parents,parent_options], null);
var option = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parameter_options,new_option_obj,vec__16380,parameter_name,new_option,parent_options){
return (function (p1__16378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16378_SHARP_,new_option_obj);
});})(parameter_options,new_option_obj,vec__16380,parameter_name,new_option,parent_options))
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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected_DASH_option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16381){
var vec__16382 = p__16381;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382,(2),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),option);
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_reconciliation,crisis_proto.handlers.validate_db,(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16383){
var vec__16384 = p__16383;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(2),null);
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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_working,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16385){
var vec__16386 = p__16385;
var working_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$working_QMARK_,working_QMARK_);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16387){
var vec__16388 = p__16387;
var selected_parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null),selected_parameter);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_recipient_DASH_group_DASH_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.save_recipient_group_mapping);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16389){
var vec__16390 = p__16389;
var modal_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_and_DASH_populate_DASH_modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16391){
var vec__16392 = p__16391;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(0),null);
var response_chan_16483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var message_id_16484 = cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(message);
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str([cljs.core.str("Messages/"),cljs.core.str(message_id_16484)].join(''))].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$channel,response_chan_16483], null)], 0));

var c__8710__auto___16485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function (state_16463){
var state_val_16464 = (state_16463[(1)]);
if((state_val_16464 === (1))){
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16463__$1,(2),response_chan_16483);
} else {
if((state_val_16464 === (2))){
var inst_16395 = (state_16463[(7)]);
var inst_16394 = (state_16463[(2)]);
var inst_16395__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16394);
var inst_16396 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16395__$1);
var state_16463__$1 = (function (){var statearr_16465 = state_16463;
(statearr_16465[(7)] = inst_16395__$1);

return statearr_16465;
})();
if(cljs.core.truth_(inst_16396)){
var statearr_16466_16486 = state_16463__$1;
(statearr_16466_16486[(1)] = (3));

} else {
var statearr_16467_16487 = state_16463__$1;
(statearr_16467_16487[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16464 === (3))){
var inst_16395 = (state_16463[(7)]);
var inst_16398 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16395);
var inst_16399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16400 = [cljs.core.cst$kw$style];
var inst_16401 = [cljs.core.cst$kw$padding];
var inst_16402 = ["0px 25px 0px 25px"];
var inst_16403 = cljs.core.PersistentHashMap.fromArrays(inst_16401,inst_16402);
var inst_16404 = [inst_16403];
var inst_16405 = cljs.core.PersistentHashMap.fromArrays(inst_16400,inst_16404);
var inst_16406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16407 = [cljs.core.cst$kw$style];
var inst_16408 = [cljs.core.cst$kw$margin];
var inst_16409 = ["3px"];
var inst_16410 = cljs.core.PersistentHashMap.fromArrays(inst_16408,inst_16409);
var inst_16411 = [inst_16410];
var inst_16412 = cljs.core.PersistentHashMap.fromArrays(inst_16407,inst_16411);
var inst_16413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16414 = [cljs.core.cst$kw$span$text_DASH_info,"shortText"];
var inst_16415 = (new cljs.core.PersistentVector(null,2,(5),inst_16413,inst_16414,null));
var inst_16416 = cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(inst_16398);
var inst_16417 = [cljs.core.str(" - "),cljs.core.str(inst_16416)].join('');
var inst_16418 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16412,inst_16415,inst_16417];
var inst_16419 = (new cljs.core.PersistentVector(null,4,(5),inst_16406,inst_16418,null));
var inst_16420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16421 = [cljs.core.cst$kw$style];
var inst_16422 = [cljs.core.cst$kw$margin];
var inst_16423 = ["3px"];
var inst_16424 = cljs.core.PersistentHashMap.fromArrays(inst_16422,inst_16423);
var inst_16425 = [inst_16424];
var inst_16426 = cljs.core.PersistentHashMap.fromArrays(inst_16421,inst_16425);
var inst_16427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16428 = [cljs.core.cst$kw$span$text_DASH_info,"longText"];
var inst_16429 = (new cljs.core.PersistentVector(null,2,(5),inst_16427,inst_16428,null));
var inst_16430 = cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(inst_16398);
var inst_16431 = [cljs.core.str(" - "),cljs.core.str(inst_16430)].join('');
var inst_16432 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16426,inst_16429,inst_16431];
var inst_16433 = (new cljs.core.PersistentVector(null,4,(5),inst_16420,inst_16432,null));
var inst_16434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16435 = [cljs.core.cst$kw$hr];
var inst_16436 = (new cljs.core.PersistentVector(null,1,(5),inst_16434,inst_16435,null));
var inst_16441 = (function (){var response = inst_16395;
var body = inst_16398;
return ((function (response,body,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function crisis_proto$handlers$iter__16437(s__16438){
return (new cljs.core.LazySeq(null,((function (response,body,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function (){
var s__16438__$1 = s__16438;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16438__$1);
if(temp__4425__auto__){
var s__16438__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16438__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16438__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16440 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16439 = (0);
while(true){
if((i__16439 < size__5365__auto__)){
var vec__16472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16439);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16472,(1),null);
cljs.core.chunk_append(b__16440,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)));

var G__16488 = (i__16439 + (1));
i__16439 = G__16488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16440),crisis_proto$handlers$iter__16437(cljs.core.chunk_rest(s__16438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16440),null);
}
} else {
var vec__16473 = cljs.core.first(s__16438__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473,(1),null);
return cljs.core.cons((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)),crisis_proto$handlers$iter__16437(cljs.core.rest(s__16438__$2)));
}
} else {
return null;
}
break;
}
});})(response,body,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
,null,null));
});
;})(response,body,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
})();
var inst_16442 = (function (){var response = inst_16395;
var body = inst_16398;
var iter__5366__auto__ = inst_16441;
return ((function (response,body,iter__5366__auto__,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16441,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function (key,_){
return key;
});
;})(response,body,iter__5366__auto__,inst_16395,inst_16398,inst_16399,inst_16400,inst_16401,inst_16402,inst_16403,inst_16404,inst_16405,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16441,state_val_16464,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
})();
var inst_16443 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_16442,inst_16398);
var inst_16444 = (inst_16441.cljs$core$IFn$_invoke$arity$1 ? inst_16441.cljs$core$IFn$_invoke$arity$1(inst_16443) : inst_16441.call(null,inst_16443));
var inst_16445 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(inst_16444);
var inst_16446 = [cljs.core.cst$kw$div,inst_16405,inst_16419,inst_16433,inst_16436,inst_16445];
var inst_16447 = (new cljs.core.PersistentVector(null,6,(5),inst_16399,inst_16446,null));
var inst_16448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16449 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16447];
var inst_16450 = (new cljs.core.PersistentVector(null,2,(5),inst_16448,inst_16449,null));
var inst_16451 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16450) : re_frame.core.dispatch.call(null,inst_16450));
var state_16463__$1 = state_16463;
var statearr_16474_16489 = state_16463__$1;
(statearr_16474_16489[(2)] = inst_16451);

(statearr_16474_16489[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16464 === (4))){
var inst_16453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16454 = [cljs.core.cst$kw$h5$text_DASH_danger,"Error Fetching Message Details"];
var inst_16455 = (new cljs.core.PersistentVector(null,2,(5),inst_16453,inst_16454,null));
var inst_16456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16457 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16455];
var inst_16458 = (new cljs.core.PersistentVector(null,2,(5),inst_16456,inst_16457,null));
var inst_16459 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16458) : re_frame.core.dispatch.call(null,inst_16458));
var state_16463__$1 = state_16463;
var statearr_16475_16490 = state_16463__$1;
(statearr_16475_16490[(2)] = inst_16459);

(statearr_16475_16490[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16464 === (5))){
var inst_16461 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16463__$1,inst_16461);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
;
return ((function (switch__8643__auto__,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16479 = [null,null,null,null,null,null,null,null];
(statearr_16479[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16479[(1)] = (1));

return statearr_16479;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16463){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16463);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16480){if((e16480 instanceof Object)){
var ex__8647__auto__ = e16480;
var statearr_16481_16491 = state_16463;
(statearr_16481_16491[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16463);

return cljs.core.cst$kw$recur;
} else {
throw e16480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16492 = state_16463;
state_16463 = G__16492;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16463){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
})();
var state__8712__auto__ = (function (){var statearr_16482 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16485);

return statearr_16482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16485,response_chan_16483,message_id_16484,vec__16392,message))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$populate_DASH_modal_DASH_with_DASH_recipient_DASH_group_DASH_details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16493){
var vec__16494 = p__16493;
var recipient_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16494,(0),null);
var modal_body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pading,"0px 25px 0px 25px;"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (vec__16494,recipient_group){
return (function crisis_proto$handlers$iter__16495(s__16496){
return (new cljs.core.LazySeq(null,((function (vec__16494,recipient_group){
return (function (){
var s__16496__$1 = s__16496;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16496__$1);
if(temp__4425__auto__){
var s__16496__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16496__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16496__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16498 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16497 = (0);
while(true){
if((i__16497 < size__5365__auto__)){
var vec__16503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16497);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16503,(1),null);
cljs.core.chunk_append(b__16498,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__16505 = (i__16497 + (1));
i__16497 = G__16505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16498),crisis_proto$handlers$iter__16495(cljs.core.chunk_rest(s__16496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16498),null);
}
} else {
var vec__16504 = cljs.core.first(s__16496__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),crisis_proto$handlers$iter__16495(cljs.core.rest(s__16496__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16494,recipient_group))
,null,null));
});})(vec__16494,recipient_group))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__5366__auto__,vec__16494,recipient_group){
return (function (k,_){
return k;
});})(iter__5366__auto__,vec__16494,recipient_group))
,recipient_group));
})())], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$validate_DASH_informacast_DASH_configuration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16506){
var vec__16507 = p__16506;
var map__16508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16507,(0),null);
var map__16508__$1 = ((((!((map__16508 == null)))?((((map__16508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16508):map__16508);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16508__$1,cljs.core.cst$kw$base_DASH_url);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16508__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16508__$1,cljs.core.cst$kw$password);
var ping_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var credentials_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("Admin/System/ldap/isLdapAuthenticationAllowed")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$channel,ping_chan], null)], 0));

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("BasicAdmin/licensing")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null),cljs.core.cst$kw$channel,credentials_chan], null)], 0));

var c__8710__auto___16581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password){
return (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (7))){
var inst_16515 = (state_16552[(7)]);
var inst_16527 = (state_16552[(8)]);
var inst_16527__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16515);
var state_16552__$1 = (function (){var statearr_16554 = state_16552;
(statearr_16554[(8)] = inst_16527__$1);

return statearr_16554;
})();
if(cljs.core.truth_(inst_16527__$1)){
var statearr_16555_16582 = state_16552__$1;
(statearr_16555_16582[(1)] = (10));

} else {
var statearr_16556_16583 = state_16552__$1;
(statearr_16556_16583[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (1))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(2),ping_chan);
} else {
if((state_val_16553 === (4))){
var inst_16512 = (state_16552[(9)]);
var inst_16518 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16512);
var inst_16519 = ((200) <= inst_16518);
var inst_16520 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16512);
var inst_16521 = (inst_16520 <= (299));
var inst_16522 = (inst_16519) && (inst_16521);
var state_16552__$1 = state_16552;
var statearr_16557_16584 = state_16552__$1;
(statearr_16557_16584[(2)] = inst_16522);

(statearr_16557_16584[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (15))){
var inst_16546 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16558_16585 = state_16552__$1;
(statearr_16558_16585[(2)] = inst_16546);

(statearr_16558_16585[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (13))){
var inst_16538 = alert("Credentials Successfully Applied");
var inst_16539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16540 = [cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,base_url,username,password];
var inst_16541 = (new cljs.core.PersistentVector(null,4,(5),inst_16539,inst_16540,null));
var inst_16542 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16541) : re_frame.core.dispatch.call(null,inst_16541));
var state_16552__$1 = (function (){var statearr_16559 = state_16552;
(statearr_16559[(10)] = inst_16538);

return statearr_16559;
})();
var statearr_16560_16586 = state_16552__$1;
(statearr_16560_16586[(2)] = inst_16542);

(statearr_16560_16586[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (6))){
var inst_16525 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16525)){
var statearr_16561_16587 = state_16552__$1;
(statearr_16561_16587[(1)] = (7));

} else {
var statearr_16562_16588 = state_16552__$1;
(statearr_16562_16588[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (3))){
var inst_16512 = (state_16552[(9)]);
var inst_16516 = (state_16552[(11)]);
var inst_16514 = (state_16552[(2)]);
var inst_16515 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16514);
var inst_16516__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16512);
var state_16552__$1 = (function (){var statearr_16563 = state_16552;
(statearr_16563[(7)] = inst_16515);

(statearr_16563[(11)] = inst_16516__$1);

return statearr_16563;
})();
if(cljs.core.truth_(inst_16516__$1)){
var statearr_16564_16589 = state_16552__$1;
(statearr_16564_16589[(1)] = (4));

} else {
var statearr_16565_16590 = state_16552__$1;
(statearr_16565_16590[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (12))){
var inst_16536 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16536)){
var statearr_16566_16591 = state_16552__$1;
(statearr_16566_16591[(1)] = (13));

} else {
var statearr_16567_16592 = state_16552__$1;
(statearr_16567_16592[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (2))){
var inst_16511 = (state_16552[(2)]);
var inst_16512 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16511);
var state_16552__$1 = (function (){var statearr_16568 = state_16552;
(statearr_16568[(9)] = inst_16512);

return statearr_16568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(3),credentials_chan);
} else {
if((state_val_16553 === (11))){
var inst_16527 = (state_16552[(8)]);
var state_16552__$1 = state_16552;
var statearr_16569_16593 = state_16552__$1;
(statearr_16569_16593[(2)] = inst_16527);

(statearr_16569_16593[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (9))){
var inst_16550 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (5))){
var inst_16516 = (state_16552[(11)]);
var state_16552__$1 = state_16552;
var statearr_16570_16594 = state_16552__$1;
(statearr_16570_16594[(2)] = inst_16516);

(statearr_16570_16594[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (14))){
var inst_16544 = alert("Invalid Credentials");
var state_16552__$1 = state_16552;
var statearr_16571_16595 = state_16552__$1;
(statearr_16571_16595[(2)] = inst_16544);

(statearr_16571_16595[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (10))){
var inst_16515 = (state_16552[(7)]);
var inst_16529 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16515);
var inst_16530 = ((200) <= inst_16529);
var inst_16531 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16515);
var inst_16532 = (inst_16531 <= (299));
var inst_16533 = (inst_16530) && (inst_16532);
var state_16552__$1 = state_16552;
var statearr_16572_16596 = state_16552__$1;
(statearr_16572_16596[(2)] = inst_16533);

(statearr_16572_16596[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (8))){
var inst_16548 = alert("Supplied URL isn't corrrect");
var state_16552__$1 = state_16552;
var statearr_16573_16597 = state_16552__$1;
(statearr_16573_16597[(2)] = inst_16548);

(statearr_16573_16597[(1)] = (9));


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
});})(c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password))
;
return ((function (switch__8643__auto__,c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16577[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16577[(1)] = (1));

return statearr_16577;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16552){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16552);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16578){if((e16578 instanceof Object)){
var ex__8647__auto__ = e16578;
var statearr_16579_16598 = state_16552;
(statearr_16579_16598[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16552);

return cljs.core.cst$kw$recur;
} else {
throw e16578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16599 = state_16552;
state_16552 = G__16599;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password))
})();
var state__8712__auto__ = (function (){var statearr_16580 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16581);

return statearr_16580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16581,ping_chan,credentials_chan,vec__16507,map__16508,map__16508__$1,base_url,username,password))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16600){
var vec__16601 = p__16600;
var base_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(2),null);
crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenarios"], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$configuration,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,base_url,cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$finalize,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.finalize);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_uploaded_DASH_image,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_uploaded_image);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$accept_DASH_button_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,_){
var G__16602_16603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept_DASH_button_DASH_preview_DASH_color], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16602_16603) : re_frame.core.dispatch.call(null,G__16602_16603));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$icon], null),cljs.core.cst$kw$uploaded_DASH_image.cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_button_DASH_preview_DASH_color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16604){
var vec__16605 = p__16604;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16605,(0),null);
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
