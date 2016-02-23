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
var action__15089__auto___15680 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15673 = params__15090__auto__;
var map__15673__$1 = ((((!((map__15673 == null)))?((((map__15673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15673):map__15673);
var G__15675_15681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15675_15681) : re_frame.core.dispatch.call(null,G__15675_15681));

var G__15676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15676) : re_frame.core.dispatch.call(null,G__15676));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15677 = params__15090__auto__;
var G__15678_15682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15678_15682) : re_frame.core.dispatch.call(null,G__15678_15682));

var G__15679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15679) : re_frame.core.dispatch.call(null,G__15679));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15089__auto___15680);

var action__15089__auto___15688 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15683 = params__15090__auto__;
var map__15683__$1 = ((((!((map__15683 == null)))?((((map__15683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15683):map__15683);
var G__15685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15685) : re_frame.core.dispatch.call(null,G__15685));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15686 = params__15090__auto__;
var G__15687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15687) : re_frame.core.dispatch.call(null,G__15687));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/init",action__15089__auto___15688);

var action__15089__auto___15694 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15689 = params__15090__auto__;
var map__15689__$1 = ((((!((map__15689 == null)))?((((map__15689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15689):map__15689);
var G__15691 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15691) : re_frame.core.dispatch.call(null,G__15691));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15692 = params__15090__auto__;
var G__15693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15693) : re_frame.core.dispatch.call(null,G__15693));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__15089__auto___15694);

var action__15089__auto___15704 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15695 = params__15090__auto__;
var map__15695__$1 = ((((!((map__15695 == null)))?((((map__15695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15695):map__15695);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695__$1,cljs.core.cst$kw$name);
var parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15695__$1,cljs.core.cst$kw$parameter);
var G__15697_15705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15697_15705) : re_frame.core.dispatch.call(null,G__15697_15705));

var G__15698_15706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15698_15706) : re_frame.core.dispatch.call(null,G__15698_15706));

var G__15699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15699) : re_frame.core.dispatch.call(null,G__15699));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15700 = params__15090__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700,(1),null);
var G__15701_15707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15701_15707) : re_frame.core.dispatch.call(null,G__15701_15707));

var G__15702_15708 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15702_15708) : re_frame.core.dispatch.call(null,G__15702_15708));

var G__15703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15703) : re_frame.core.dispatch.call(null,G__15703));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/parameter/:parameter",action__15089__auto___15704);

var action__15089__auto___15718 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15709 = params__15090__auto__;
var map__15709__$1 = ((((!((map__15709 == null)))?((((map__15709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15709):map__15709);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15709__$1,cljs.core.cst$kw$name);
var G__15711_15719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15711_15719) : re_frame.core.dispatch.call(null,G__15711_15719));

var G__15712_15720 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15712_15720) : re_frame.core.dispatch.call(null,G__15712_15720));

var G__15713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15713) : re_frame.core.dispatch.call(null,G__15713));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15714 = params__15090__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15714,(0),null);
var G__15715_15721 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15715_15721) : re_frame.core.dispatch.call(null,G__15715_15721));

var G__15716_15722 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15716_15722) : re_frame.core.dispatch.call(null,G__15716_15722));

var G__15717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15717) : re_frame.core.dispatch.call(null,G__15717));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/dispatch",action__15089__auto___15718);

var action__15089__auto___15730 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15723 = params__15090__auto__;
var map__15723__$1 = ((((!((map__15723 == null)))?((((map__15723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15723):map__15723);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15723__$1,cljs.core.cst$kw$name);
var G__15725_15731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15725_15731) : re_frame.core.dispatch.call(null,G__15725_15731));

var G__15726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15726) : re_frame.core.dispatch.call(null,G__15726));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15727 = params__15090__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15727,(0),null);
var G__15728_15732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15728_15732) : re_frame.core.dispatch.call(null,G__15728_15732));

var G__15729 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15729) : re_frame.core.dispatch.call(null,G__15729));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/situation/:name",action__15089__auto___15730);

var action__15089__auto___15738 = (function (params__15090__auto__){
if(cljs.core.map_QMARK_(params__15090__auto__)){
var map__15733 = params__15090__auto__;
var map__15733__$1 = ((((!((map__15733 == null)))?((((map__15733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15733):map__15733);
var G__15735 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15735) : re_frame.core.dispatch.call(null,G__15735));
} else {
if(cljs.core.vector_QMARK_(params__15090__auto__)){
var vec__15736 = params__15090__auto__;
var G__15737 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15737) : re_frame.core.dispatch.call(null,G__15737));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__15089__auto___15738);

crisis_dispatch.core.history = (function (){var G__15739 = (new goog.History());
var G__15740_15743 = G__15739;
var G__15741_15744 = goog.history.EventType.NAVIGATE;
var G__15742_15745 = ((function (G__15740_15743,G__15741_15744,G__15739){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15740_15743,G__15741_15744,G__15739))
;
goog.events.listen(G__15740_15743,G__15741_15744,G__15742_15745);

G__15739.setEnabled(true);

return G__15739;
})();
crisis_dispatch.core.mount_root = (function crisis_dispatch$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.main_panel], null),document.getElementById("app"));
});
crisis_dispatch.core.init = (function crisis_dispatch$core$init(){
var G__15748_15750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15748_15750) : re_frame.core.dispatch_sync.call(null,G__15748_15750));

var G__15749_15751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_interval], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15749_15751) : re_frame.core.dispatch.call(null,G__15749_15751));

return crisis_dispatch.core.mount_root();
});
goog.exportSymbol('crisis_dispatch.core.init', crisis_dispatch.core.init);
