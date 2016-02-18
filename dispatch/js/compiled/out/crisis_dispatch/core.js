// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('crisis_dispatch.nav');
goog.require('crisis_dispatch.subs');
goog.require('crisis_dispatch.views');
goog.require('goog.history.EventType');
goog.require('crisis_dispatch.config');
goog.require('goog.History');
goog.require('goog.events');
goog.require('crisis_dispatch.handlers');
goog.require('re_frame.core');
if(cljs.core.truth_(crisis_dispatch.config.debug_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dev mode"], 0));
} else {
}
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__14944__auto___15515 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15510 = params__14945__auto__;
var map__15510__$1 = ((((!((map__15510 == null)))?((((map__15510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15510):map__15510);
var G__15512 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15512) : re_frame.core.dispatch.call(null,G__15512));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15513 = params__14945__auto__;
var G__15514 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15514) : re_frame.core.dispatch.call(null,G__15514));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14944__auto___15515);

var action__14944__auto___15521 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15516 = params__14945__auto__;
var map__15516__$1 = ((((!((map__15516 == null)))?((((map__15516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15516):map__15516);
var G__15518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15518) : re_frame.core.dispatch.call(null,G__15518));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15519 = params__14945__auto__;
var G__15520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15520) : re_frame.core.dispatch.call(null,G__15520));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/init",action__14944__auto___15521);

var action__14944__auto___15527 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15522 = params__14945__auto__;
var map__15522__$1 = ((((!((map__15522 == null)))?((((map__15522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15522):map__15522);
var G__15524 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15524) : re_frame.core.dispatch.call(null,G__15524));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15525 = params__14945__auto__;
var G__15526 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15526) : re_frame.core.dispatch.call(null,G__15526));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__14944__auto___15527);

var action__14944__auto___15537 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15528 = params__14945__auto__;
var map__15528__$1 = ((((!((map__15528 == null)))?((((map__15528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15528):map__15528);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15528__$1,cljs.core.cst$kw$name);
var parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15528__$1,cljs.core.cst$kw$parameter);
var G__15530_15538 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15530_15538) : re_frame.core.dispatch.call(null,G__15530_15538));

var G__15531_15539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15531_15539) : re_frame.core.dispatch.call(null,G__15531_15539));

var G__15532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURIComponent(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15532) : re_frame.core.dispatch.call(null,G__15532));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15533 = params__14945__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533,(1),null);
var G__15534_15540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15534_15540) : re_frame.core.dispatch.call(null,G__15534_15540));

var G__15535_15541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15535_15541) : re_frame.core.dispatch.call(null,G__15535_15541));

var G__15536 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURIComponent(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15536) : re_frame.core.dispatch.call(null,G__15536));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/parameter/:parameter",action__14944__auto___15537);

var action__14944__auto___15551 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15542 = params__14945__auto__;
var map__15542__$1 = ((((!((map__15542 == null)))?((((map__15542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15542):map__15542);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15542__$1,cljs.core.cst$kw$name);
var G__15544_15552 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15544_15552) : re_frame.core.dispatch.call(null,G__15544_15552));

var G__15545_15553 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15545_15553) : re_frame.core.dispatch.call(null,G__15545_15553));

var G__15546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15546) : re_frame.core.dispatch.call(null,G__15546));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15547 = params__14945__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547,(0),null);
var G__15548_15554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15548_15554) : re_frame.core.dispatch.call(null,G__15548_15554));

var G__15549_15555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15549_15555) : re_frame.core.dispatch.call(null,G__15549_15555));

var G__15550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15550) : re_frame.core.dispatch.call(null,G__15550));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/dispatch",action__14944__auto___15551);

var action__14944__auto___15561 = (function (params__14945__auto__){
if(cljs.core.map_QMARK_(params__14945__auto__)){
var map__15556 = params__14945__auto__;
var map__15556__$1 = ((((!((map__15556 == null)))?((((map__15556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15556):map__15556);
var G__15558 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15558) : re_frame.core.dispatch.call(null,G__15558));
} else {
if(cljs.core.vector_QMARK_(params__14945__auto__)){
var vec__15559 = params__14945__auto__;
var G__15560 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15560) : re_frame.core.dispatch.call(null,G__15560));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__14944__auto___15561);

crisis_dispatch.core.history = (function (){var G__15562 = (new goog.History());
var G__15563_15566 = G__15562;
var G__15564_15567 = goog.history.EventType.NAVIGATE;
var G__15565_15568 = ((function (G__15563_15566,G__15564_15567,G__15562){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15563_15566,G__15564_15567,G__15562))
;
goog.events.listen(G__15563_15566,G__15564_15567,G__15565_15568);

G__15562.setEnabled(true);

return G__15562;
})();
crisis_dispatch.core.mount_root = (function crisis_dispatch$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.main_panel], null),document.getElementById("app"));
});
crisis_dispatch.core.init = (function crisis_dispatch$core$init(){
var G__15571_15573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15571_15573) : re_frame.core.dispatch_sync.call(null,G__15571_15573));

var G__15572_15574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_interval], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15572_15574) : re_frame.core.dispatch.call(null,G__15572_15574));

return crisis_dispatch.core.mount_root();
});
goog.exportSymbol('crisis_dispatch.core.init', crisis_dispatch.core.init);
