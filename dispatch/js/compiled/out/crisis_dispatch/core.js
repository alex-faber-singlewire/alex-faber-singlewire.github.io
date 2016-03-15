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
var action__14977__auto___15552 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15547 = params__14978__auto__;
var map__15547__$1 = ((((!((map__15547 == null)))?((((map__15547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15547):map__15547);
var G__15549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15549) : re_frame.core.dispatch.call(null,G__15549));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15550 = params__14978__auto__;
var G__15551 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15551) : re_frame.core.dispatch.call(null,G__15551));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__14977__auto___15552);

var action__14977__auto___15558 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15553 = params__14978__auto__;
var map__15553__$1 = ((((!((map__15553 == null)))?((((map__15553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15553):map__15553);
var G__15555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15555) : re_frame.core.dispatch.call(null,G__15555));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15556 = params__14978__auto__;
var G__15557 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15557) : re_frame.core.dispatch.call(null,G__15557));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/init",action__14977__auto___15558);

var action__14977__auto___15564 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15559 = params__14978__auto__;
var map__15559__$1 = ((((!((map__15559 == null)))?((((map__15559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15559):map__15559);
var G__15561 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15561) : re_frame.core.dispatch.call(null,G__15561));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15562 = params__14978__auto__;
var G__15563 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15563) : re_frame.core.dispatch.call(null,G__15563));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__14977__auto___15564);

var action__14977__auto___15574 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15565 = params__14978__auto__;
var map__15565__$1 = ((((!((map__15565 == null)))?((((map__15565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15565):map__15565);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15565__$1,cljs.core.cst$kw$name);
var parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15565__$1,cljs.core.cst$kw$parameter);
var G__15567_15575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15567_15575) : re_frame.core.dispatch.call(null,G__15567_15575));

var G__15568_15576 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15568_15576) : re_frame.core.dispatch.call(null,G__15568_15576));

var G__15569 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURIComponent(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15569) : re_frame.core.dispatch.call(null,G__15569));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15570 = params__14978__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(1),null);
var G__15571_15577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15571_15577) : re_frame.core.dispatch.call(null,G__15571_15577));

var G__15572_15578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15572_15578) : re_frame.core.dispatch.call(null,G__15572_15578));

var G__15573 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURIComponent(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15573) : re_frame.core.dispatch.call(null,G__15573));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/parameter/:parameter",action__14977__auto___15574);

var action__14977__auto___15588 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15579 = params__14978__auto__;
var map__15579__$1 = ((((!((map__15579 == null)))?((((map__15579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15579):map__15579);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15579__$1,cljs.core.cst$kw$name);
var G__15581_15589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15581_15589) : re_frame.core.dispatch.call(null,G__15581_15589));

var G__15582_15590 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15582_15590) : re_frame.core.dispatch.call(null,G__15582_15590));

var G__15583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15583) : re_frame.core.dispatch.call(null,G__15583));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15584 = params__14978__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(0),null);
var G__15585_15591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15585_15591) : re_frame.core.dispatch.call(null,G__15585_15591));

var G__15586_15592 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),name], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15586_15592) : re_frame.core.dispatch.call(null,G__15586_15592));

var G__15587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15587) : re_frame.core.dispatch.call(null,G__15587));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/dispatch",action__14977__auto___15588);

var action__14977__auto___15598 = (function (params__14978__auto__){
if(cljs.core.map_QMARK_(params__14978__auto__)){
var map__15593 = params__14978__auto__;
var map__15593__$1 = ((((!((map__15593 == null)))?((((map__15593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15593):map__15593);
var G__15595 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15595) : re_frame.core.dispatch.call(null,G__15595));
} else {
if(cljs.core.vector_QMARK_(params__14978__auto__)){
var vec__15596 = params__14978__auto__;
var G__15597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15597) : re_frame.core.dispatch.call(null,G__15597));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__14977__auto___15598);

crisis_dispatch.core.history = (function (){var G__15599 = (new goog.History());
var G__15600_15603 = G__15599;
var G__15601_15604 = goog.history.EventType.NAVIGATE;
var G__15602_15605 = ((function (G__15600_15603,G__15601_15604,G__15599){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15600_15603,G__15601_15604,G__15599))
;
goog.events.listen(G__15600_15603,G__15601_15604,G__15602_15605);

G__15599.setEnabled(true);

return G__15599;
})();
crisis_dispatch.core.mount_root = (function crisis_dispatch$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.main_panel], null),document.getElementById("app"));
});
crisis_dispatch.core.init = (function crisis_dispatch$core$init(){
var G__15608_15610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15608_15610) : re_frame.core.dispatch_sync.call(null,G__15608_15610));

var G__15609_15611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_interval], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15609_15611) : re_frame.core.dispatch.call(null,G__15609_15611));

return crisis_dispatch.core.mount_root();
});
goog.exportSymbol('crisis_dispatch.core.init', crisis_dispatch.core.init);
