// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
var G__17053_17055 = cljs.core.cst$kw$working_QMARK_;
var G__17054_17056 = ((function (G__17053_17055){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17053_17055){
return (function (){
return cljs.core.cst$kw$working_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
});})(G__17053_17055))
);
});})(G__17053_17055))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17053_17055,G__17054_17056) : re_frame.core.register_sub.call(null,G__17053_17055,G__17054_17056));
var G__17057_17059 = cljs.core.cst$kw$name;
var G__17058_17060 = ((function (G__17057_17059){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17057_17059){
return (function (){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
});})(G__17057_17059))
);
});})(G__17057_17059))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17057_17059,G__17058_17060) : re_frame.core.register_sub.call(null,G__17057_17059,G__17058_17060));
var G__17061_17063 = cljs.core.cst$kw$active_DASH_panel;
var G__17062_17064 = ((function (G__17061_17063){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17061_17063){
return (function (){
return cljs.core.cst$kw$active_DASH_panel.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
});})(G__17061_17063))
);
});})(G__17061_17063))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17061_17063,G__17062_17064) : re_frame.core.register_sub.call(null,G__17061_17063,G__17062_17064));
var G__17065_17067 = cljs.core.cst$kw$scenario_DASH_names;
var G__17066_17068 = ((function (G__17065_17067){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17065_17067){
return (function (){
return cljs.core.keys(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db))));
});})(G__17065_17067))
);
});})(G__17065_17067))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17065_17067,G__17066_17068) : re_frame.core.register_sub.call(null,G__17065_17067,G__17066_17068));
var G__17069_17071 = cljs.core.cst$kw$form_DASH_submission;
var G__17070_17072 = ((function (G__17069_17071){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17069_17071){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$form_DASH_submission);
});})(G__17069_17071))
);
});})(G__17069_17071))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17069_17071,G__17070_17072) : re_frame.core.register_sub.call(null,G__17069_17071,G__17070_17072));
var G__17073_17075 = cljs.core.cst$kw$active_DASH_scenario;
var G__17074_17076 = ((function (G__17073_17075){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17073_17075){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenarios,cljs.core.cst$kw$active_DASH_scenario.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)))], null));
});})(G__17073_17075))
);
});})(G__17073_17075))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17073_17075,G__17074_17076) : re_frame.core.register_sub.call(null,G__17073_17075,G__17074_17076));
var G__17077_17079 = cljs.core.cst$kw$network_DASH_response;
var G__17078_17080 = ((function (G__17077_17079){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17077_17079){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$network_DASH_response);
});})(G__17077_17079))
);
});})(G__17077_17079))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17077_17079,G__17078_17080) : re_frame.core.register_sub.call(null,G__17077_17079,G__17078_17080));
var G__17081_17083 = cljs.core.cst$kw$fetched_DASH_messages;
var G__17082_17084 = ((function (G__17081_17083){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17081_17083){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$fetched_DASH_messages);
});})(G__17081_17083))
);
});})(G__17081_17083))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17081_17083,G__17082_17084) : re_frame.core.register_sub.call(null,G__17081_17083,G__17082_17084));
var G__17085_17087 = cljs.core.cst$kw$parameter_DASH_options;
var G__17086_17088 = ((function (G__17085_17087){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17085_17087){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$parameter_DASH_options);
});})(G__17085_17087))
);
});})(G__17085_17087))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17085_17087,G__17086_17088) : re_frame.core.register_sub.call(null,G__17085_17087,G__17086_17088));
var G__17089_17091 = cljs.core.cst$kw$modal_DASH_content;
var G__17090_17092 = ((function (G__17089_17091){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17089_17091){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$modal_DASH_content);
});})(G__17089_17091))
);
});})(G__17089_17091))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17089_17091,G__17090_17092) : re_frame.core.register_sub.call(null,G__17089_17091,G__17090_17092));
var G__17093_17095 = cljs.core.cst$kw$selected_DASH_parameter_DASH_options;
var G__17094_17096 = ((function (G__17093_17095){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17093_17095){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$selected_DASH_parameter_DASH_options);
});})(G__17093_17095))
);
});})(G__17093_17095))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17093_17095,G__17094_17096) : re_frame.core.register_sub.call(null,G__17093_17095,G__17094_17096));
var G__17097_17099 = cljs.core.cst$kw$selected_DASH_message;
var G__17098_17100 = ((function (G__17097_17099){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17097_17099){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$selected_DASH_message);
});})(G__17097_17099))
);
});})(G__17097_17099))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17097_17099,G__17098_17100) : re_frame.core.register_sub.call(null,G__17097_17099,G__17098_17100));
var G__17101_17103 = cljs.core.cst$kw$selected_DASH_option;
var G__17102_17104 = ((function (G__17101_17103){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17101_17103){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$selected_DASH_option);
});})(G__17101_17103))
);
});})(G__17101_17103))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17101_17103,G__17102_17104) : re_frame.core.register_sub.call(null,G__17101_17103,G__17102_17104));
var G__17105_17107 = cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups;
var G__17106_17108 = ((function (G__17105_17107){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17105_17107){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups);
});})(G__17105_17107))
);
});})(G__17105_17107))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17105_17107,G__17106_17108) : re_frame.core.register_sub.call(null,G__17105_17107,G__17106_17108));
var G__17109_17111 = cljs.core.cst$kw$uploaded_DASH_image;
var G__17110_17112 = ((function (G__17109_17111){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17109_17111){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$uploaded_DASH_image);
});})(G__17109_17111))
);
});})(G__17109_17111))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17109_17111,G__17110_17112) : re_frame.core.register_sub.call(null,G__17109_17111,G__17110_17112));
var G__17113_17115 = cljs.core.cst$kw$button_DASH_preview_DASH_color;
var G__17114_17116 = ((function (G__17113_17115){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17113_17115){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$button_DASH_preview_DASH_color);
});})(G__17113_17115))
);
});})(G__17113_17115))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17113_17115,G__17114_17116) : re_frame.core.register_sub.call(null,G__17113_17115,G__17114_17116));
var G__17117_17119 = cljs.core.cst$kw$admin_DASH_configuration;
var G__17118_17120 = ((function (G__17117_17119){
return (function (db){
return reagent.ratom.make_reaction(((function (G__17117_17119){
return (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),cljs.core.cst$kw$configuration);
});})(G__17117_17119))
);
});})(G__17117_17119))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__17117_17119,G__17118_17120) : re_frame.core.register_sub.call(null,G__17117_17119,G__17118_17120));
