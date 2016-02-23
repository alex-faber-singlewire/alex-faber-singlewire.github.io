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
var action__15071__auto___15658 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15651 = params__15072__auto__;
var map__15651__$1 = ((((!((map__15651 == null)))?((((map__15651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15651):map__15651);
var G__15653_15659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15653_15659) : re_frame.core.dispatch.call(null,G__15653_15659));

var G__15654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15654) : re_frame.core.dispatch.call(null,G__15654));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15655 = params__15072__auto__;
var G__15656_15660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15656_15660) : re_frame.core.dispatch.call(null,G__15656_15660));

var G__15657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15657) : re_frame.core.dispatch.call(null,G__15657));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15071__auto___15658);

var action__15071__auto___15666 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15661 = params__15072__auto__;
var map__15661__$1 = ((((!((map__15661 == null)))?((((map__15661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15661):map__15661);
var G__15663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15663) : re_frame.core.dispatch.call(null,G__15663));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15664 = params__15072__auto__;
var G__15665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15665) : re_frame.core.dispatch.call(null,G__15665));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/init",action__15071__auto___15666);

var action__15071__auto___15672 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15667 = params__15072__auto__;
var map__15667__$1 = ((((!((map__15667 == null)))?((((map__15667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15667):map__15667);
var G__15669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15669) : re_frame.core.dispatch.call(null,G__15669));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15670 = params__15072__auto__;
var G__15671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15671) : re_frame.core.dispatch.call(null,G__15671));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__15071__auto___15672);

var action__15071__auto___15682 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15673 = params__15072__auto__;
var map__15673__$1 = ((((!((map__15673 == null)))?((((map__15673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15673):map__15673);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15673__$1,cljs.core.cst$kw$name);
var parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15673__$1,cljs.core.cst$kw$parameter);
var G__15675_15683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15675_15683) : re_frame.core.dispatch.call(null,G__15675_15683));

var G__15676_15684 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15676_15684) : re_frame.core.dispatch.call(null,G__15676_15684));

var G__15677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15677) : re_frame.core.dispatch.call(null,G__15677));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15678 = params__15072__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(1),null);
var G__15679_15685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15679_15685) : re_frame.core.dispatch.call(null,G__15679_15685));

var G__15680_15686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15680_15686) : re_frame.core.dispatch.call(null,G__15680_15686));

var G__15681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15681) : re_frame.core.dispatch.call(null,G__15681));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/parameter/:parameter",action__15071__auto___15682);

var action__15071__auto___15696 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15687 = params__15072__auto__;
var map__15687__$1 = ((((!((map__15687 == null)))?((((map__15687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15687):map__15687);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15687__$1,cljs.core.cst$kw$name);
var G__15689_15697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15689_15697) : re_frame.core.dispatch.call(null,G__15689_15697));

var G__15690_15698 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15690_15698) : re_frame.core.dispatch.call(null,G__15690_15698));

var G__15691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15691) : re_frame.core.dispatch.call(null,G__15691));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15692 = params__15072__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15692,(0),null);
var G__15693_15699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15693_15699) : re_frame.core.dispatch.call(null,G__15693_15699));

var G__15694_15700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15694_15700) : re_frame.core.dispatch.call(null,G__15694_15700));

var G__15695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15695) : re_frame.core.dispatch.call(null,G__15695));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/dispatch",action__15071__auto___15696);

var action__15071__auto___15708 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15701 = params__15072__auto__;
var map__15701__$1 = ((((!((map__15701 == null)))?((((map__15701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15701):map__15701);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15701__$1,cljs.core.cst$kw$name);
var G__15703_15709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15703_15709) : re_frame.core.dispatch.call(null,G__15703_15709));

var G__15704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15704) : re_frame.core.dispatch.call(null,G__15704));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15705 = params__15072__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15705,(0),null);
var G__15706_15710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15706_15710) : re_frame.core.dispatch.call(null,G__15706_15710));

var G__15707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15707) : re_frame.core.dispatch.call(null,G__15707));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/situation/:name",action__15071__auto___15708);

var action__15071__auto___15716 = (function (params__15072__auto__){
if(cljs.core.map_QMARK_(params__15072__auto__)){
var map__15711 = params__15072__auto__;
var map__15711__$1 = ((((!((map__15711 == null)))?((((map__15711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15711):map__15711);
var G__15713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15713) : re_frame.core.dispatch.call(null,G__15713));
} else {
if(cljs.core.vector_QMARK_(params__15072__auto__)){
var vec__15714 = params__15072__auto__;
var G__15715 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15715) : re_frame.core.dispatch.call(null,G__15715));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__15071__auto___15716);

crisis_dispatch.core.history = (function (){var G__15717 = (new goog.History());
var G__15718_15721 = G__15717;
var G__15719_15722 = goog.history.EventType.NAVIGATE;
var G__15720_15723 = ((function (G__15718_15721,G__15719_15722,G__15717){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15718_15721,G__15719_15722,G__15717))
;
goog.events.listen(G__15718_15721,G__15719_15722,G__15720_15723);

G__15717.setEnabled(true);

return G__15717;
})();
crisis_dispatch.core.mount_root = (function crisis_dispatch$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.main_panel], null),document.getElementById("app"));
});
crisis_dispatch.core.init = (function crisis_dispatch$core$init(){
var G__15726_15728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15726_15728) : re_frame.core.dispatch_sync.call(null,G__15726_15728));

var G__15727_15729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_interval], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15727_15729) : re_frame.core.dispatch.call(null,G__15727_15729));

return crisis_dispatch.core.mount_root();
});
goog.exportSymbol('crisis_dispatch.core.init', crisis_dispatch.core.init);
