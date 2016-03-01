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
var G__15966_15967 = JSON.stringify(cljs.core.clj__GT_js(obj));
console.log(G__15966_15967);

return obj;
});
crisis_proto.handlers.md5_hash = (function crisis_proto$handlers$md5_hash(var_args){
var args__5659__auto__ = [];
var len__5652__auto___15972 = arguments.length;
var i__5653__auto___15973 = (0);
while(true){
if((i__5653__auto___15973 < len__5652__auto___15972)){
args__5659__auto__.push((arguments[i__5653__auto___15973]));

var G__15974 = (i__5653__auto___15973 + (1));
i__5653__auto___15973 = G__15974;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var G__15970 = (function (){var G__15971 = (new goog.crypt.Md5());
G__15971.update(clojure.string.trim([cljs.core.str(v)].join('')));

return G__15971;
})().digest();
return goog.crypt.byteArrayToHex(G__15970);
});

crisis_proto.handlers.md5_hash.cljs$lang$maxFixedArity = (0);

crisis_proto.handlers.md5_hash.cljs$lang$applyTo = (function (seq15968){
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15968));
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
return (function (p1__15975_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/#\{[^#]+\}/,p1__15975_SHARP_))){
return p1__15975_SHARP_;
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
crisis_proto.handlers.find_and_record_parameters = (function crisis_proto$handlers$find_and_record_parameters(db,p__15976){
var vec__15978 = p__15976;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15978,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15978,(1),null);
var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null));
if(cljs.core.truth_(temp__4423__auto__)){
var scenario_with_full_messages = temp__4423__auto__;
var parameters = crisis_proto.handlers.find_parameters(scenario_with_full_messages);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null),parameters),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciled_QMARK_], null),cljs.core.empty_QMARK_(parameters));
} else {
throw [cljs.core.str("[find-and-record-parameters] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
}
});
crisis_proto.handlers.set_in = (function crisis_proto$handlers$set_in(db,p__15979){
var vec__15981 = p__15979;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(1),null);
return cljs.core.assoc_in(db,path,v);
});
crisis_proto.handlers.set_current_page = (function crisis_proto$handlers$set_current_page(db,p__15982){
var vec__15985 = p__15982;
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(0),null);
var G__15986_15987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15986_15987) : re_frame.core.dispatch.call(null,G__15986_15987));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,((cljs.core.not(active_panel))?cljs.core.cst$kw$home:active_panel));
});
crisis_proto.handlers.set_response_status = (function crisis_proto$handlers$set_response_status(db,p__15988){
var vec__15990 = p__15988;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(0),null);
var success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(2),null);
if(cljs.core.truth_(success)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,success], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,error,cljs.core.cst$kw$result,null], null));
}
});
crisis_proto.handlers.clear_response_status = (function crisis_proto$handlers$clear_response_status(db,p__15991){
var vec__15993 = p__15991;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15993,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,null], null));
});
/**
 * Checks to see if the scenario exists in the database first.  If it does, it gets set as the active scenario.
 *   If not, the user is directed to the not-found screen
 */
crisis_proto.handlers.set_active_scenario = (function crisis_proto$handlers$set_active_scenario(db,p__15994){
var vec__15997 = p__15994;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(0),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_scenario,scenario_name);
} else {
var G__15998_15999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15998_15999) : re_frame.core.dispatch.call(null,G__15998_15999));

return db;
}
});
crisis_proto.handlers.fetch_all_messages = (function crisis_proto$handlers$fetch_all_messages(db,_){
var G__16053_16106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16053_16106) : re_frame.core.dispatch.call(null,G__16053_16106));

var response_chan_16107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$query_DASH_params,new cljs.core.PersistentArrayMap(null, 1, ["maxCount",(25000)], null),cljs.core.cst$kw$channel,response_chan_16107], null)], 0));

var c__8710__auto___16108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16108,response_chan_16107){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16108,response_chan_16107){
return (function (state_16090){
var state_val_16091 = (state_16090[(1)]);
if((state_val_16091 === (1))){
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16090__$1,(2),response_chan_16107);
} else {
if((state_val_16091 === (2))){
var inst_16056 = (state_16090[(7)]);
var inst_16055 = (state_16090[(2)]);
var inst_16056__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16055);
var inst_16057 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16056__$1);
var inst_16058 = ((200) <= inst_16057);
var inst_16059 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16056__$1);
var inst_16060 = (inst_16059 <= (299));
var inst_16061 = (inst_16058) && (inst_16060);
var state_16090__$1 = (function (){var statearr_16092 = state_16090;
(statearr_16092[(7)] = inst_16056__$1);

return statearr_16092;
})();
if(cljs.core.truth_(inst_16061)){
var statearr_16093_16109 = state_16090__$1;
(statearr_16093_16109[(1)] = (3));

} else {
var statearr_16094_16110 = state_16090__$1;
(statearr_16094_16110[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (3))){
var inst_16056 = (state_16090[(7)]);
var inst_16063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16064 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16056);
var inst_16065 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16064);
var inst_16066 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16065,null];
var inst_16067 = (new cljs.core.PersistentVector(null,4,(5),inst_16063,inst_16066,null));
var inst_16068 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16067) : re_frame.core.dispatch.call(null,inst_16067));
var inst_16069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16070 = [cljs.core.cst$kw$save_DASH_fetched_DASH_messages];
var inst_16071 = (new cljs.core.PersistentVector(null,1,(5),inst_16069,inst_16070,null));
var inst_16072 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16071) : re_frame.core.dispatch.call(null,inst_16071));
var inst_16073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16074 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16075 = (new cljs.core.PersistentVector(null,2,(5),inst_16073,inst_16074,null));
var inst_16076 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16075) : re_frame.core.dispatch.call(null,inst_16075));
var state_16090__$1 = (function (){var statearr_16095 = state_16090;
(statearr_16095[(8)] = inst_16072);

(statearr_16095[(9)] = inst_16068);

return statearr_16095;
})();
var statearr_16096_16111 = state_16090__$1;
(statearr_16096_16111[(2)] = inst_16076);

(statearr_16096_16111[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (4))){
var inst_16056 = (state_16090[(7)]);
var inst_16078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16079 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16056);
var inst_16080 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16079];
var inst_16081 = (new cljs.core.PersistentVector(null,4,(5),inst_16078,inst_16080,null));
var inst_16082 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16081) : re_frame.core.dispatch.call(null,inst_16081));
var inst_16083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16084 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16085 = (new cljs.core.PersistentVector(null,2,(5),inst_16083,inst_16084,null));
var inst_16086 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16085) : re_frame.core.dispatch.call(null,inst_16085));
var state_16090__$1 = (function (){var statearr_16097 = state_16090;
(statearr_16097[(10)] = inst_16082);

return statearr_16097;
})();
var statearr_16098_16112 = state_16090__$1;
(statearr_16098_16112[(2)] = inst_16086);

(statearr_16098_16112[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16091 === (5))){
var inst_16088 = (state_16090[(2)]);
var state_16090__$1 = state_16090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16090__$1,inst_16088);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16108,response_chan_16107))
;
return ((function (switch__8643__auto__,c__8710__auto___16108,response_chan_16107){
return (function() {
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0 = (function (){
var statearr_16102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16102[(0)] = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__);

(statearr_16102[(1)] = (1));

return statearr_16102;
});
var crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1 = (function (state_16090){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16090);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16103){if((e16103 instanceof Object)){
var ex__8647__auto__ = e16103;
var statearr_16104_16113 = state_16090;
(statearr_16104_16113[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16090);

return cljs.core.cst$kw$recur;
} else {
throw e16103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16114 = state_16090;
state_16090 = G__16114;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__ = function(state_16090){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1.call(this,state_16090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_messages_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16108,response_chan_16107))
})();
var state__8712__auto__ = (function (){var statearr_16105 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16108);

return statearr_16105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16108,response_chan_16107))
);


return db;
});
crisis_proto.handlers.save_selected_messages_for_scenario = (function crisis_proto$handlers$save_selected_messages_for_scenario(db,p__16115){
var vec__16117 = p__16115;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16117,(0),null);
var selected_messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16117,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null),selected_messages);
});
crisis_proto.handlers.fetch_full_message_details_for_scenario = (function crisis_proto$handlers$fetch_full_message_details_for_scenario(db,p__16118){
var vec__16172 = p__16118;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16172,(0),null);
var G__16173_16225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_working,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16173_16225) : re_frame.core.dispatch.call(null,G__16173_16225));

var fetch_full_message_by_id = ((function (vec__16172,scenario_name){
return (function crisis_proto$handlers$fetch_full_message_details_for_scenario_$_fetch_full_message_by_id(message_id){
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("Messages/"),cljs.core.str(message_id)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db)], null)], 0));
});})(vec__16172,scenario_name))
;
var scenario = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db)], null));
if(cljs.core.not(scenario)){
throw [cljs.core.str("[fetch-full-message-details-for-scenario] Unable to find scenario by name of: "),cljs.core.str(scenario_name)].join('');
} else {
var c__8710__auto___16226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16226,scenario,vec__16172,scenario_name){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16226,scenario,vec__16172,scenario_name){
return (function (state_16207){
var state_val_16208 = (state_16207[(1)]);
if((state_val_16208 === (1))){
var inst_16174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16175 = [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages];
var inst_16176 = (new cljs.core.PersistentVector(null,2,(5),inst_16174,inst_16175,null));
var inst_16177 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,inst_16176);
var inst_16178 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,inst_16177);
var inst_16179 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(fetch_full_message_by_id,inst_16178);
var inst_16180 = cljs.core.PersistentVector.EMPTY;
var inst_16181 = inst_16180;
var inst_16182 = inst_16179;
var state_16207__$1 = (function (){var statearr_16209 = state_16207;
(statearr_16209[(7)] = inst_16182);

(statearr_16209[(8)] = inst_16181);

return statearr_16209;
})();
var statearr_16210_16227 = state_16207__$1;
(statearr_16210_16227[(2)] = null);

(statearr_16210_16227[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16208 === (2))){
var inst_16182 = (state_16207[(7)]);
var inst_16184 = cljs.core.empty_QMARK_(inst_16182);
var state_16207__$1 = state_16207;
if(inst_16184){
var statearr_16211_16228 = state_16207__$1;
(statearr_16211_16228[(1)] = (4));

} else {
var statearr_16212_16229 = state_16207__$1;
(statearr_16212_16229[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16208 === (3))){
var inst_16197 = (state_16207[(2)]);
var inst_16198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16199 = [cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,scenario_name,inst_16197];
var inst_16200 = (new cljs.core.PersistentVector(null,3,(5),inst_16198,inst_16199,null));
var inst_16201 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16200) : re_frame.core.dispatch.call(null,inst_16200));
var inst_16202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16203 = [cljs.core.cst$kw$set_DASH_working,false];
var inst_16204 = (new cljs.core.PersistentVector(null,2,(5),inst_16202,inst_16203,null));
var inst_16205 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16204) : re_frame.core.dispatch.call(null,inst_16204));
var state_16207__$1 = (function (){var statearr_16213 = state_16207;
(statearr_16213[(9)] = inst_16201);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16207__$1,inst_16205);
} else {
if((state_val_16208 === (4))){
var inst_16181 = (state_16207[(8)]);
var state_16207__$1 = state_16207;
var statearr_16214_16230 = state_16207__$1;
(statearr_16214_16230[(2)] = inst_16181);

(statearr_16214_16230[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16208 === (5))){
var inst_16182 = (state_16207[(7)]);
var inst_16187 = cljs.core.first(inst_16182);
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16207__$1,(7),inst_16187);
} else {
if((state_val_16208 === (6))){
var inst_16195 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16215_16231 = state_16207__$1;
(statearr_16215_16231[(2)] = inst_16195);

(statearr_16215_16231[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16208 === (7))){
var inst_16182 = (state_16207[(7)]);
var inst_16181 = (state_16207[(8)]);
var inst_16189 = (state_16207[(2)]);
var inst_16190 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_16181,inst_16189);
var inst_16191 = cljs.core.rest(inst_16182);
var inst_16192 = cljs.core.vec(inst_16191);
var inst_16181__$1 = inst_16190;
var inst_16182__$1 = inst_16192;
var state_16207__$1 = (function (){var statearr_16216 = state_16207;
(statearr_16216[(7)] = inst_16182__$1);

(statearr_16216[(8)] = inst_16181__$1);

return statearr_16216;
})();
var statearr_16217_16232 = state_16207__$1;
(statearr_16217_16232[(2)] = null);

(statearr_16217_16232[(1)] = (2));


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
});})(c__8710__auto___16226,scenario,vec__16172,scenario_name))
;
return ((function (switch__8643__auto__,c__8710__auto___16226,scenario,vec__16172,scenario_name){
return (function() {
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0 = (function (){
var statearr_16221 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16221[(0)] = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__);

(statearr_16221[(1)] = (1));

return statearr_16221;
});
var crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1 = (function (state_16207){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16207);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16222){if((e16222 instanceof Object)){
var ex__8647__auto__ = e16222;
var statearr_16223_16233 = state_16207;
(statearr_16223_16233[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16207);

return cljs.core.cst$kw$recur;
} else {
throw e16222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16234 = state_16207;
state_16207 = G__16234;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__ = function(state_16207){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1.call(this,state_16207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_full_message_details_for_scenario_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16226,scenario,vec__16172,scenario_name))
})();
var state__8712__auto__ = (function (){var statearr_16224 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16226);

return statearr_16224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16226,scenario,vec__16172,scenario_name))
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(r,cljs.core.cst$kw$order,cljs.core.conj,p),cljs.core.cst$kw$questions,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray([p,[cljs.core.str("Provide an option for "),cljs.core.str(p)].join('')], true, false)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_,p], null),false),cljs.core.cst$kw$options,cljs.core.conj,cljs.core.PersistentArrayMap.fromArray([p,cljs.core.PersistentVector.EMPTY], true, false));
});})(active_scenario,temp__4423__auto__))
,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$questions,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$destination_DASH_determined_DASH_by,null,cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null),parameters);
});})(active_scenario,temp__4423__auto__))
;
var saved_reconciliation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((((cljs.core.empty_QMARK_(saved_reconciliation)) || ((saved_reconciliation == null)))?cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null),blank_parameters_reconciliations(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null)))):cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null),saved_reconciliation)),cljs.core.cst$kw$selected_DASH_parameter_DASH_options,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (saved_reconciliation,active_scenario,temp__4423__auto__){
return (function (r,p){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.fromArray([p,null], true, false));
});})(saved_reconciliation,active_scenario,temp__4423__auto__))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null))));
} else {
var G__16236_16237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$not_DASH_found], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16236_16237) : re_frame.core.dispatch.call(null,G__16236_16237));

return db;
}
});
crisis_proto.handlers.remove_option_from_parameter = (function crisis_proto$handlers$remove_option_from_parameter(db,p__16238){
var vec__16240 = p__16238;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16240,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16240,(1),null);
var option_remover = ((function (vec__16240,parameter_name,option){
return (function crisis_proto$handlers$remove_option_from_parameter_$_option_remover(p_option){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p_option,option)){
return p_option;
} else {
return null;
}
});})(vec__16240,parameter_name,option))
;
var path = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,path,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(option_remover,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
});
crisis_proto.handlers.update_parameter_question = (function crisis_proto$handlers$update_parameter_question(db,p__16241){
var vec__16243 = p__16241;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16243,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16243,(1),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16243,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter], null),question);
});
crisis_proto.handlers.update_parameter_question_order = (function crisis_proto$handlers$update_parameter_question_order(db,p__16244){
var vec__16249 = p__16244;
var active_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(1),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(2),null);
if(cljs.core.not((function (){var G__16250 = parseInt(new_order);
return isNaN(G__16250);
})())){
var order_vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
var new_index = (parseInt(new_order) - (1));
var old_index = cljs.core.to_array(order_vector).indexOf(parameter);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,active_scenario_name,cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (order_vector,new_index,old_index,vec__16249,active_scenario_name,parameter,new_order){
return (function (total,p__16251){
var vec__16252 = p__16251;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(1),null);
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
});})(order_vector,new_index,old_index,vec__16249,active_scenario_name,parameter,new_order))
,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (order_vector,new_index,old_index,vec__16249,active_scenario_name,parameter,new_order){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(order_vector,new_index,old_index,vec__16249,active_scenario_name,parameter,new_order))
,order_vector)));
} else {
return db;
}
});
crisis_proto.handlers.fetch_all_recipient_groups = (function crisis_proto$handlers$fetch_all_recipient_groups(db,_){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str("RecipientGroups/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$channel,response_chan], null)], 0));

var c__8710__auto___16339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16339,response_chan){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16339,response_chan){
return (function (state_16324){
var state_val_16325 = (state_16324[(1)]);
if((state_val_16325 === (1))){
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16324__$1,(2),response_chan);
} else {
if((state_val_16325 === (2))){
var inst_16298 = (state_16324[(7)]);
var inst_16297 = (state_16324[(2)]);
var inst_16298__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16297);
var inst_16299 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16298__$1);
var inst_16300 = ((200) <= inst_16299);
var inst_16301 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16298__$1);
var inst_16302 = (inst_16301 <= (299));
var inst_16303 = (inst_16300) && (inst_16302);
var state_16324__$1 = (function (){var statearr_16326 = state_16324;
(statearr_16326[(7)] = inst_16298__$1);

return statearr_16326;
})();
if(cljs.core.truth_(inst_16303)){
var statearr_16327_16340 = state_16324__$1;
(statearr_16327_16340[(1)] = (3));

} else {
var statearr_16328_16341 = state_16324__$1;
(statearr_16328_16341[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16325 === (3))){
var inst_16298 = (state_16324[(7)]);
var inst_16305 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16306 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16298);
var inst_16307 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_16306);
var inst_16308 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,inst_16307,null];
var inst_16309 = (new cljs.core.PersistentVector(null,4,(5),inst_16305,inst_16308,null));
var inst_16310 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16309) : re_frame.core.dispatch.call(null,inst_16309));
var inst_16311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16312 = [cljs.core.cst$kw$save_DASH_fetched_DASH_recipient_DASH_groups];
var inst_16313 = (new cljs.core.PersistentVector(null,1,(5),inst_16311,inst_16312,null));
var inst_16314 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16313) : re_frame.core.dispatch.call(null,inst_16313));
var state_16324__$1 = (function (){var statearr_16329 = state_16324;
(statearr_16329[(8)] = inst_16310);

return statearr_16329;
})();
var statearr_16330_16342 = state_16324__$1;
(statearr_16330_16342[(2)] = inst_16314);

(statearr_16330_16342[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16325 === (4))){
var inst_16298 = (state_16324[(7)]);
var inst_16316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16317 = cljs.core.cst$kw$error_DASH_text.cljs$core$IFn$_invoke$arity$1(inst_16298);
var inst_16318 = [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$network_DASH_response,null,inst_16317];
var inst_16319 = (new cljs.core.PersistentVector(null,4,(5),inst_16316,inst_16318,null));
var inst_16320 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16319) : re_frame.core.dispatch.call(null,inst_16319));
var state_16324__$1 = state_16324;
var statearr_16331_16343 = state_16324__$1;
(statearr_16331_16343[(2)] = inst_16320);

(statearr_16331_16343[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16325 === (5))){
var inst_16322 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16324__$1,inst_16322);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16339,response_chan))
;
return ((function (switch__8643__auto__,c__8710__auto___16339,response_chan){
return (function() {
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = null;
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0 = (function (){
var statearr_16335 = [null,null,null,null,null,null,null,null,null];
(statearr_16335[(0)] = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__);

(statearr_16335[(1)] = (1));

return statearr_16335;
});
var crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1 = (function (state_16324){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16324);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16336){if((e16336 instanceof Object)){
var ex__8647__auto__ = e16336;
var statearr_16337_16344 = state_16324;
(statearr_16337_16344[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16324);

return cljs.core.cst$kw$recur;
} else {
throw e16336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16345 = state_16324;
state_16324 = G__16345;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__ = function(state_16324){
switch(arguments.length){
case 0:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1.call(this,state_16324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____0;
crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto____1;
return crisis_proto$handlers$fetch_all_recipient_groups_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16339,response_chan))
})();
var state__8712__auto__ = (function (){var statearr_16338 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16339);

return statearr_16338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16339,response_chan))
);


return db;
});
crisis_proto.handlers.save_recipient_group_mapping = (function crisis_proto$handlers$save_recipient_group_mapping(db,p__16346){
var vec__16348 = p__16346;
var selected_recipient_groups = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16348,(0),null);
var selected_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16348,(1),null);
var selected_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16348,(2),null);
var base_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$affiliations], null);
var path = (cljs.core.truth_(selected_option)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(selected_option)], null))):cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(selected_message)], null))));
return cljs.core.assoc_in(db,path,selected_recipient_groups);
});
crisis_proto.handlers.download = (function crisis_proto$handlers$download(content){
var element_16349 = document.createElement("a");
var date_16350 = (new Date());
var w_16351 = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
element_16349.setAttribute("href",[cljs.core.str("data:json;charset=utf-8,"),cljs.core.str(cognitect.transit.write(w_16351,content))].join(''));

element_16349.setAttribute("download",[cljs.core.str("dispatch-config-"),cljs.core.str(date_16350.toISOString()),cljs.core.str(".json")].join(''));

element_16349.style.display = "none";

document.body.appendChild(element_16349);

element_16349.click();

document.body.removeChild(element_16349);

return content;
});
crisis_proto.handlers.add_scenarios = (function crisis_proto$handlers$add_scenarios(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16354){
var vec__16355 = p__16354;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16355,(1),null);
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$icon,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$button_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(v),cljs.core.cst$kw$messages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null))], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_parameters = (function crisis_proto$handlers$add_parameters(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16358){
var vec__16359 = p__16358;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(1),null);
var parameter_config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
return cljs.core.assoc_in(r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,k,cljs.core.cst$kw$parameter_DASH_configuration], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$order,cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$questions,cljs.core.cst$kw$questions.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$destination_DASH_determined_DASH_by,cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_,cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_.cljs$core$IFn$_invoke$arity$1(parameter_config),cljs.core.cst$kw$options,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(parameter_config)], null));
}),export$,scenarios);
});
crisis_proto.handlers.add_destination_mapping = (function crisis_proto$handlers$add_destination_mapping(export$,scenarios){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16362){
var vec__16363 = p__16362;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363,(1),null);
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
/**
 * Takes set of maps of recipient groups that contain irrelevant fields for the hashing algorithm.  This function removes the
 *   follow fields from each map: numPlugins, numPhones, and numSpeakers
 */
crisis_proto.handlers.desensitize_recipient_groups = (function crisis_proto$handlers$desensitize_recipient_groups(recipient_groups){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (rg){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rg,cljs.core.cst$kw$numPlugins),cljs.core.cst$kw$numPhones),cljs.core.cst$kw$numSpeakers);
}),recipient_groups));
});
crisis_proto.handlers.get_all_configured_recipient_groups = (function crisis_proto$handlers$get_all_configured_recipient_groups(db){
return crisis_proto.handlers.desensitize_recipient_groups(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__16366){
var vec__16367 = p__16366;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16367,(0),null);
var scenario_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16367,(1),null);
var affiliations = cljs.core.cst$kw$affiliations.cljs$core$IFn$_invoke$arity$1(scenario_val);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario_val,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.vals(cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations))));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,r,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.vals(cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping.cljs$core$IFn$_invoke$arity$1(affiliations)))));
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db)));
});
crisis_proto.handlers.hash_messages_and_recipient_groups = (function crisis_proto$handlers$hash_messages_and_recipient_groups(db){
var messages = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId,crisis_proto.handlers.get_all_configured_full_messages(db));
var recipient_groups = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,crisis_proto.handlers.get_all_configured_recipient_groups(db));
return crisis_proto.handlers.md5_hash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([messages,recipient_groups], 0));
});
crisis_proto.handlers.finalize = (function crisis_proto$handlers$finalize(db,_){
var export_16368 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scenarios,cljs.core.PersistentArrayMap.EMPTY], null);
var scenarios_16369 = cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(crisis_proto.handlers.able_to_create_hash_QMARK_(db))){
crisis_proto.handlers.download(cljs.core.assoc_in(cljs.core.assoc_in(crisis_proto.handlers.add_destination_mapping(crisis_proto.handlers.add_parameters(crisis_proto.handlers.add_scenarios(export_16368,scenarios_16369),scenarios_16369),scenarios_16369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$checksum], null),crisis_proto.handlers.hash_messages_and_recipient_groups(db)));
} else {
alert("Unable to export configuration.  Check console for more details");

console.error("Unable to export configuration: not all messages were fetched successfully or a scenario doesn't have a recipient group mapping");
}

return db;
});
crisis_proto.handlers.set_uploaded_image = (function crisis_proto$handlers$set_uploaded_image(db,p__16370){
var vec__16373 = p__16370;
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16373,(0),null);
var file_reader = (new FileReader());
file_reader.onload = ((function (file_reader,vec__16373,file){
return (function (e){
var G__16374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploaded_DASH_image], null),e.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16374) : re_frame.core.dispatch.call(null,G__16374));
});})(file_reader,vec__16373,file))
;

file_reader.readAsDataURL(file);

return db;
});
crisis_proto.handlers.delete_scenario = (function crisis_proto$handlers$delete_scenario(db,p__16375){
var vec__16377 = p__16375;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$scenarios,cljs.core.dissoc,scenario_name);
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db,crisis_proto.handlers.pprint_db], null),crisis_proto.handlers.set_in);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$clear_DASH_response_DASH_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.clear_response_status);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$create_DASH_new_DASH_scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16378){
var vec__16379 = p__16378;
var new_scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16379,(0),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null)))){
var G__16380_16382 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,[cljs.core.str("Successfully created the scenario: "),cljs.core.str(new_scenario_name)].join(''),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16380_16382) : re_frame.core.dispatch.call(null,G__16380_16382));

crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",new_scenario_name], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,new_scenario_name], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_scenario_name,cljs.core.cst$kw$affiliations,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$messages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.PersistentArrayMap.EMPTY], null)], null));
} else {
var G__16381_16383 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_response_DASH_status,cljs.core.cst$kw$form_DASH_submission,null,[cljs.core.str(new_scenario_name),cljs.core.str(" scenario already exists. Please provide a unique scenario name")].join('')], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16381_16383) : re_frame.core.dispatch.call(null,G__16381_16383));

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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$store_DASH_full_DASH_messages_DASH_in_DASH_scenario,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,(re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.enrich.cljs$core$IFn$_invoke$arity$1(crisis_proto.handlers.find_and_record_parameters) : re_frame.core.enrich.call(null,crisis_proto.handlers.find_and_record_parameters)),crisis_proto.handlers.validate_db], null),(function (db,p__16384){
var vec__16385 = p__16384;
var scenario_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16385,(0),null);
var full_message_responses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16385,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,scenario_name,cljs.core.cst$kw$affiliations,cljs.core.cst$kw$full_DASH_message_DASH_responses], null),full_message_responses);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_reconcilation_DASH_temp,crisis_proto.handlers.validate_db,crisis_proto.handlers.initialize_reconciliation_temp);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16387){
var vec__16388 = p__16387;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(0),null);
var new_option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(1),null);
var parent_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(2),null);
var parameter_options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options,parameter_name], null));
var new_option_obj = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,new_option,cljs.core.cst$kw$parents,parent_options], null);
var option = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parameter_options,new_option_obj,vec__16388,parameter_name,new_option,parent_options){
return (function (p1__16386_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16386_SHARP_,new_option_obj);
});})(parameter_options,new_option_obj,vec__16388,parameter_name,new_option,parent_options))
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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected_DASH_option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16389){
var vec__16390 = p__16389;
var parameter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390,(2),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options,parameter_name], null),option);
}
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_reconciliation,crisis_proto.handlers.validate_db,(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp], null)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_selected,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16391){
var vec__16392 = p__16391;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(1),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(2),null);
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
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_working,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16393){
var vec__16394 = p__16393;
var working_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16394,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$working_QMARK_,working_QMARK_);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16395){
var vec__16396 = p__16395;
var selected_parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(0),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null),selected_parameter);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$save_DASH_recipient_DASH_group_DASH_mapping,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.save_recipient_group_mapping);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16397){
var vec__16398 = p__16397;
var modal_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16398,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_and_DASH_populate_DASH_modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16399){
var vec__16400 = p__16399;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400,(0),null);
var response_chan_16491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var message_id_16492 = cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(message);
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$configuration,cljs.core.cst$kw$base_DASH_url], null)))),cljs.core.str([cljs.core.str("Messages/"),cljs.core.str(message_id_16492)].join(''))].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,crisis_proto.handlers.form_credentials_map(db),cljs.core.cst$kw$channel,response_chan_16491], null)], 0));

var c__8710__auto___16493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function (state_16471){
var state_val_16472 = (state_16471[(1)]);
if((state_val_16472 === (1))){
var state_16471__$1 = state_16471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16471__$1,(2),response_chan_16491);
} else {
if((state_val_16472 === (2))){
var inst_16403 = (state_16471[(7)]);
var inst_16402 = (state_16471[(2)]);
var inst_16403__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16402);
var inst_16404 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16403__$1);
var state_16471__$1 = (function (){var statearr_16473 = state_16471;
(statearr_16473[(7)] = inst_16403__$1);

return statearr_16473;
})();
if(cljs.core.truth_(inst_16404)){
var statearr_16474_16494 = state_16471__$1;
(statearr_16474_16494[(1)] = (3));

} else {
var statearr_16475_16495 = state_16471__$1;
(statearr_16475_16495[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16472 === (3))){
var inst_16403 = (state_16471[(7)]);
var inst_16406 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_16403);
var inst_16407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16408 = [cljs.core.cst$kw$style];
var inst_16409 = [cljs.core.cst$kw$padding];
var inst_16410 = ["0px 25px 0px 25px"];
var inst_16411 = cljs.core.PersistentHashMap.fromArrays(inst_16409,inst_16410);
var inst_16412 = [inst_16411];
var inst_16413 = cljs.core.PersistentHashMap.fromArrays(inst_16408,inst_16412);
var inst_16414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16415 = [cljs.core.cst$kw$style];
var inst_16416 = [cljs.core.cst$kw$margin];
var inst_16417 = ["3px"];
var inst_16418 = cljs.core.PersistentHashMap.fromArrays(inst_16416,inst_16417);
var inst_16419 = [inst_16418];
var inst_16420 = cljs.core.PersistentHashMap.fromArrays(inst_16415,inst_16419);
var inst_16421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16422 = [cljs.core.cst$kw$span$text_DASH_info,"shortText"];
var inst_16423 = (new cljs.core.PersistentVector(null,2,(5),inst_16421,inst_16422,null));
var inst_16424 = cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(inst_16406);
var inst_16425 = [cljs.core.str(" - "),cljs.core.str(inst_16424)].join('');
var inst_16426 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16420,inst_16423,inst_16425];
var inst_16427 = (new cljs.core.PersistentVector(null,4,(5),inst_16414,inst_16426,null));
var inst_16428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16429 = [cljs.core.cst$kw$style];
var inst_16430 = [cljs.core.cst$kw$margin];
var inst_16431 = ["3px"];
var inst_16432 = cljs.core.PersistentHashMap.fromArrays(inst_16430,inst_16431);
var inst_16433 = [inst_16432];
var inst_16434 = cljs.core.PersistentHashMap.fromArrays(inst_16429,inst_16433);
var inst_16435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16436 = [cljs.core.cst$kw$span$text_DASH_info,"longText"];
var inst_16437 = (new cljs.core.PersistentVector(null,2,(5),inst_16435,inst_16436,null));
var inst_16438 = cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(inst_16406);
var inst_16439 = [cljs.core.str(" - "),cljs.core.str(inst_16438)].join('');
var inst_16440 = [cljs.core.cst$kw$p$text_DASH_muted,inst_16434,inst_16437,inst_16439];
var inst_16441 = (new cljs.core.PersistentVector(null,4,(5),inst_16428,inst_16440,null));
var inst_16442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16443 = [cljs.core.cst$kw$hr];
var inst_16444 = (new cljs.core.PersistentVector(null,1,(5),inst_16442,inst_16443,null));
var inst_16449 = (function (){var response = inst_16403;
var body = inst_16406;
return ((function (response,body,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function crisis_proto$handlers$iter__16445(s__16446){
return (new cljs.core.LazySeq(null,((function (response,body,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function (){
var s__16446__$1 = s__16446;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16446__$1);
if(temp__4425__auto__){
var s__16446__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16446__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16446__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16448 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16447 = (0);
while(true){
if((i__16447 < size__5365__auto__)){
var vec__16480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16447);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(1),null);
cljs.core.chunk_append(b__16448,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)));

var G__16496 = (i__16447 + (1));
i__16447 = G__16496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16448),crisis_proto$handlers$iter__16445(cljs.core.chunk_rest(s__16446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16448),null);
}
} else {
var vec__16481 = cljs.core.first(s__16446__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16481,(1),null);
return cljs.core.cons((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$shortText)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$longText)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null)),crisis_proto$handlers$iter__16445(cljs.core.rest(s__16446__$2)));
}
} else {
return null;
}
break;
}
});})(response,body,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
,null,null));
});
;})(response,body,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
})();
var inst_16450 = (function (){var response = inst_16403;
var body = inst_16406;
var iter__5366__auto__ = inst_16449;
return ((function (response,body,iter__5366__auto__,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,inst_16449,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function (key,_){
return key;
});
;})(response,body,iter__5366__auto__,inst_16403,inst_16406,inst_16407,inst_16408,inst_16409,inst_16410,inst_16411,inst_16412,inst_16413,inst_16414,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,inst_16421,inst_16422,inst_16423,inst_16424,inst_16425,inst_16426,inst_16427,inst_16428,inst_16429,inst_16430,inst_16431,inst_16432,inst_16433,inst_16434,inst_16435,inst_16436,inst_16437,inst_16438,inst_16439,inst_16440,inst_16441,inst_16442,inst_16443,inst_16444,inst_16449,state_val_16472,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
})();
var inst_16451 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_16450,inst_16406);
var inst_16452 = (inst_16449.cljs$core$IFn$_invoke$arity$1 ? inst_16449.cljs$core$IFn$_invoke$arity$1(inst_16451) : inst_16449.call(null,inst_16451));
var inst_16453 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(inst_16452);
var inst_16454 = [cljs.core.cst$kw$div,inst_16413,inst_16427,inst_16441,inst_16444,inst_16453];
var inst_16455 = (new cljs.core.PersistentVector(null,6,(5),inst_16407,inst_16454,null));
var inst_16456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16457 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16455];
var inst_16458 = (new cljs.core.PersistentVector(null,2,(5),inst_16456,inst_16457,null));
var inst_16459 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16458) : re_frame.core.dispatch.call(null,inst_16458));
var state_16471__$1 = state_16471;
var statearr_16482_16497 = state_16471__$1;
(statearr_16482_16497[(2)] = inst_16459);

(statearr_16482_16497[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16472 === (4))){
var inst_16461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16462 = [cljs.core.cst$kw$h5$text_DASH_danger,"Error Fetching Message Details"];
var inst_16463 = (new cljs.core.PersistentVector(null,2,(5),inst_16461,inst_16462,null));
var inst_16464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16465 = [cljs.core.cst$kw$set_DASH_modal_DASH_content,inst_16463];
var inst_16466 = (new cljs.core.PersistentVector(null,2,(5),inst_16464,inst_16465,null));
var inst_16467 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16466) : re_frame.core.dispatch.call(null,inst_16466));
var state_16471__$1 = state_16471;
var statearr_16483_16498 = state_16471__$1;
(statearr_16483_16498[(2)] = inst_16467);

(statearr_16483_16498[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16472 === (5))){
var inst_16469 = (state_16471[(2)]);
var state_16471__$1 = state_16471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16471__$1,inst_16469);
} else {
return null;
}
}
}
}
}
});})(c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
;
return ((function (switch__8643__auto__,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16487 = [null,null,null,null,null,null,null,null];
(statearr_16487[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16487[(1)] = (1));

return statearr_16487;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16471){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16471);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16488){if((e16488 instanceof Object)){
var ex__8647__auto__ = e16488;
var statearr_16489_16499 = state_16471;
(statearr_16489_16499[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16471);

return cljs.core.cst$kw$recur;
} else {
throw e16488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16500 = state_16471;
state_16471 = G__16500;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16471){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
})();
var state__8712__auto__ = (function (){var statearr_16490 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16493);

return statearr_16490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16493,response_chan_16491,message_id_16492,vec__16400,message))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$populate_DASH_modal_DASH_with_DASH_recipient_DASH_group_DASH_details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16501){
var vec__16502 = p__16501;
var recipient_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(0),null);
var modal_body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pading,"0px 25px 0px 25px;"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (vec__16502,recipient_group){
return (function crisis_proto$handlers$iter__16503(s__16504){
return (new cljs.core.LazySeq(null,((function (vec__16502,recipient_group){
return (function (){
var s__16504__$1 = s__16504;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16504__$1);
if(temp__4425__auto__){
var s__16504__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16504__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16504__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16506 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16505 = (0);
while(true){
if((i__16505 < size__5365__auto__)){
var vec__16511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16505);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(1),null);
cljs.core.chunk_append(b__16506,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__16513 = (i__16505 + (1));
i__16505 = G__16513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16506),crisis_proto$handlers$iter__16503(cljs.core.chunk_rest(s__16504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16506),null);
}
} else {
var vec__16512 = cljs.core.first(s__16504__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_info,cljs.core.name(k)], null),[cljs.core.str(" - "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),crisis_proto$handlers$iter__16503(cljs.core.rest(s__16504__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16502,recipient_group))
,null,null));
});})(vec__16502,recipient_group))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__5366__auto__,vec__16502,recipient_group){
return (function (k,_){
return k;
});})(iter__5366__auto__,vec__16502,recipient_group))
,recipient_group));
})())], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_content,modal_body);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$validate_DASH_informacast_DASH_configuration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16514){
var vec__16515 = p__16514;
var map__16516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(0),null);
var map__16516__$1 = ((((!((map__16516 == null)))?((((map__16516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16516):map__16516);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,cljs.core.cst$kw$base_DASH_url);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,cljs.core.cst$kw$password);
var ping_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var credentials_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("Admin/System/ldap/isLdapAuthenticationAllowed")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$channel,ping_chan], null)], 0));

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(crisis_proto.handlers.form_full_base_url(base_url)),cljs.core.str("BasicAdmin/licensing")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_credentials_QMARK_,false,cljs.core.cst$kw$basic_DASH_auth,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null),cljs.core.cst$kw$channel,credentials_chan], null)], 0));

var c__8710__auto___16589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password){
return (function (state_16560){
var state_val_16561 = (state_16560[(1)]);
if((state_val_16561 === (7))){
var inst_16535 = (state_16560[(7)]);
var inst_16523 = (state_16560[(8)]);
var inst_16535__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16523);
var state_16560__$1 = (function (){var statearr_16562 = state_16560;
(statearr_16562[(7)] = inst_16535__$1);

return statearr_16562;
})();
if(cljs.core.truth_(inst_16535__$1)){
var statearr_16563_16590 = state_16560__$1;
(statearr_16563_16590[(1)] = (10));

} else {
var statearr_16564_16591 = state_16560__$1;
(statearr_16564_16591[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (1))){
var state_16560__$1 = state_16560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16560__$1,(2),ping_chan);
} else {
if((state_val_16561 === (4))){
var inst_16520 = (state_16560[(9)]);
var inst_16526 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16520);
var inst_16527 = ((200) <= inst_16526);
var inst_16528 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16520);
var inst_16529 = (inst_16528 <= (299));
var inst_16530 = (inst_16527) && (inst_16529);
var state_16560__$1 = state_16560;
var statearr_16565_16592 = state_16560__$1;
(statearr_16565_16592[(2)] = inst_16530);

(statearr_16565_16592[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (15))){
var inst_16554 = (state_16560[(2)]);
var state_16560__$1 = state_16560;
var statearr_16566_16593 = state_16560__$1;
(statearr_16566_16593[(2)] = inst_16554);

(statearr_16566_16593[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (13))){
var inst_16546 = alert("Credentials Successfully Applied");
var inst_16547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16548 = [cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,base_url,username,password];
var inst_16549 = (new cljs.core.PersistentVector(null,4,(5),inst_16547,inst_16548,null));
var inst_16550 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_16549) : re_frame.core.dispatch.call(null,inst_16549));
var state_16560__$1 = (function (){var statearr_16567 = state_16560;
(statearr_16567[(10)] = inst_16546);

return statearr_16567;
})();
var statearr_16568_16594 = state_16560__$1;
(statearr_16568_16594[(2)] = inst_16550);

(statearr_16568_16594[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (6))){
var inst_16533 = (state_16560[(2)]);
var state_16560__$1 = state_16560;
if(cljs.core.truth_(inst_16533)){
var statearr_16569_16595 = state_16560__$1;
(statearr_16569_16595[(1)] = (7));

} else {
var statearr_16570_16596 = state_16560__$1;
(statearr_16570_16596[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (3))){
var inst_16524 = (state_16560[(11)]);
var inst_16520 = (state_16560[(9)]);
var inst_16522 = (state_16560[(2)]);
var inst_16523 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16522);
var inst_16524__$1 = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(inst_16520);
var state_16560__$1 = (function (){var statearr_16571 = state_16560;
(statearr_16571[(11)] = inst_16524__$1);

(statearr_16571[(8)] = inst_16523);

return statearr_16571;
})();
if(cljs.core.truth_(inst_16524__$1)){
var statearr_16572_16597 = state_16560__$1;
(statearr_16572_16597[(1)] = (4));

} else {
var statearr_16573_16598 = state_16560__$1;
(statearr_16573_16598[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (12))){
var inst_16544 = (state_16560[(2)]);
var state_16560__$1 = state_16560;
if(cljs.core.truth_(inst_16544)){
var statearr_16574_16599 = state_16560__$1;
(statearr_16574_16599[(1)] = (13));

} else {
var statearr_16575_16600 = state_16560__$1;
(statearr_16575_16600[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (2))){
var inst_16519 = (state_16560[(2)]);
var inst_16520 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16519);
var state_16560__$1 = (function (){var statearr_16576 = state_16560;
(statearr_16576[(9)] = inst_16520);

return statearr_16576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16560__$1,(3),credentials_chan);
} else {
if((state_val_16561 === (11))){
var inst_16535 = (state_16560[(7)]);
var state_16560__$1 = state_16560;
var statearr_16577_16601 = state_16560__$1;
(statearr_16577_16601[(2)] = inst_16535);

(statearr_16577_16601[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (9))){
var inst_16558 = (state_16560[(2)]);
var state_16560__$1 = state_16560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16560__$1,inst_16558);
} else {
if((state_val_16561 === (5))){
var inst_16524 = (state_16560[(11)]);
var state_16560__$1 = state_16560;
var statearr_16578_16602 = state_16560__$1;
(statearr_16578_16602[(2)] = inst_16524);

(statearr_16578_16602[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (14))){
var inst_16552 = alert("Invalid Credentials");
var state_16560__$1 = state_16560;
var statearr_16579_16603 = state_16560__$1;
(statearr_16579_16603[(2)] = inst_16552);

(statearr_16579_16603[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (10))){
var inst_16523 = (state_16560[(8)]);
var inst_16537 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16523);
var inst_16538 = ((200) <= inst_16537);
var inst_16539 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_16523);
var inst_16540 = (inst_16539 <= (299));
var inst_16541 = (inst_16538) && (inst_16540);
var state_16560__$1 = state_16560;
var statearr_16580_16604 = state_16560__$1;
(statearr_16580_16604[(2)] = inst_16541);

(statearr_16580_16604[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16561 === (8))){
var inst_16556 = alert("Supplied URL isn't corrrect");
var state_16560__$1 = state_16560;
var statearr_16581_16605 = state_16560__$1;
(statearr_16581_16605[(2)] = inst_16556);

(statearr_16581_16605[(1)] = (9));


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
});})(c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password))
;
return ((function (switch__8643__auto__,c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password){
return (function() {
var crisis_proto$handlers$state_machine__8644__auto__ = null;
var crisis_proto$handlers$state_machine__8644__auto____0 = (function (){
var statearr_16585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16585[(0)] = crisis_proto$handlers$state_machine__8644__auto__);

(statearr_16585[(1)] = (1));

return statearr_16585;
});
var crisis_proto$handlers$state_machine__8644__auto____1 = (function (state_16560){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_16560);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e16586){if((e16586 instanceof Object)){
var ex__8647__auto__ = e16586;
var statearr_16587_16606 = state_16560;
(statearr_16587_16606[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16560);

return cljs.core.cst$kw$recur;
} else {
throw e16586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__16607 = state_16560;
state_16560 = G__16607;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
crisis_proto$handlers$state_machine__8644__auto__ = function(state_16560){
switch(arguments.length){
case 0:
return crisis_proto$handlers$state_machine__8644__auto____0.call(this);
case 1:
return crisis_proto$handlers$state_machine__8644__auto____1.call(this,state_16560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = crisis_proto$handlers$state_machine__8644__auto____0;
crisis_proto$handlers$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = crisis_proto$handlers$state_machine__8644__auto____1;
return crisis_proto$handlers$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password))
})();
var state__8712__auto__ = (function (){var statearr_16588 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_16588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___16589);

return statearr_16588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___16589,ping_chan,credentials_chan,vec__16515,map__16516,map__16516__$1,base_url,username,password))
);


return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_informcast_DASH_credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16608){
var vec__16609 = p__16608;
var base_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609,(2),null);
crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenarios"], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$configuration,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,base_url,cljs.core.cst$kw$username,username,cljs.core.cst$kw$password,password], null));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$finalize,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.finalize);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_uploaded_DASH_image,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),crisis_proto.handlers.set_uploaded_image);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$accept_DASH_button_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,_){
var G__16610_16611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept_DASH_button_DASH_preview_DASH_color], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16610_16611) : re_frame.core.dispatch.call(null,G__16610_16611));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$icon], null),cljs.core.cst$kw$uploaded_DASH_image.cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_button_DASH_preview_DASH_color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,crisis_proto.handlers.validate_db], null),(function (db,p__16612){
var vec__16613 = p__16612;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613,(0),null);
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
