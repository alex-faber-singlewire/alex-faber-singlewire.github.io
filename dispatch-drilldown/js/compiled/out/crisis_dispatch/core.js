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
var action__15054__auto___15630 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15623 = params__15055__auto__;
var map__15623__$1 = ((((!((map__15623 == null)))?((((map__15623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15623):map__15623);
var G__15625_15631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15625_15631) : re_frame.core.dispatch.call(null,G__15625_15631));

var G__15626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15626) : re_frame.core.dispatch.call(null,G__15626));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15627 = params__15055__auto__;
var G__15628_15632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15628_15632) : re_frame.core.dispatch.call(null,G__15628_15632));

var G__15629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15629) : re_frame.core.dispatch.call(null,G__15629));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15054__auto___15630);

var action__15054__auto___15638 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15633 = params__15055__auto__;
var map__15633__$1 = ((((!((map__15633 == null)))?((((map__15633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15633):map__15633);
var G__15635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15635) : re_frame.core.dispatch.call(null,G__15635));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15636 = params__15055__auto__;
var G__15637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$init], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15637) : re_frame.core.dispatch.call(null,G__15637));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/init",action__15054__auto___15638);

var action__15054__auto___15644 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15639 = params__15055__auto__;
var map__15639__$1 = ((((!((map__15639 == null)))?((((map__15639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15639):map__15639);
var G__15641 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15641) : re_frame.core.dispatch.call(null,G__15641));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15642 = params__15055__auto__;
var G__15643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15643) : re_frame.core.dispatch.call(null,G__15643));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__15054__auto___15644);

var action__15054__auto___15654 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15645 = params__15055__auto__;
var map__15645__$1 = ((((!((map__15645 == null)))?((((map__15645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15645):map__15645);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15645__$1,cljs.core.cst$kw$name);
var parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15645__$1,cljs.core.cst$kw$parameter);
var G__15647_15655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15647_15655) : re_frame.core.dispatch.call(null,G__15647_15655));

var G__15648_15656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15648_15656) : re_frame.core.dispatch.call(null,G__15648_15656));

var G__15649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15649) : re_frame.core.dispatch.call(null,G__15649));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15650 = params__15055__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650,(0),null);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650,(1),null);
var G__15651_15657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$question], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15651_15657) : re_frame.core.dispatch.call(null,G__15651_15657));

var G__15652_15658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15652_15658) : re_frame.core.dispatch.call(null,G__15652_15658));

var G__15653 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null),decodeURI(parameter)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15653) : re_frame.core.dispatch.call(null,G__15653));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/parameter/:parameter",action__15054__auto___15654);

var action__15054__auto___15668 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15659 = params__15055__auto__;
var map__15659__$1 = ((((!((map__15659 == null)))?((((map__15659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15659):map__15659);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15659__$1,cljs.core.cst$kw$name);
var G__15661_15669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15661_15669) : re_frame.core.dispatch.call(null,G__15661_15669));

var G__15662_15670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15662_15670) : re_frame.core.dispatch.call(null,G__15662_15670));

var G__15663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15663) : re_frame.core.dispatch.call(null,G__15663));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15664 = params__15055__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15664,(0),null);
var G__15665_15671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$dispatch], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15665_15671) : re_frame.core.dispatch.call(null,G__15665_15671));

var G__15666_15672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null),decodeURI(name)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15666_15672) : re_frame.core.dispatch.call(null,G__15666_15672));

var G__15667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_messages_DASH_of_DASH_scenario,decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15667) : re_frame.core.dispatch.call(null,G__15667));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scenario/:name/dispatch",action__15054__auto___15668);

var action__15054__auto___15680 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15673 = params__15055__auto__;
var map__15673__$1 = ((((!((map__15673 == null)))?((((map__15673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15673):map__15673);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15673__$1,cljs.core.cst$kw$name);
var G__15675_15681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15675_15681) : re_frame.core.dispatch.call(null,G__15675_15681));

var G__15676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15676) : re_frame.core.dispatch.call(null,G__15676));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15677 = params__15055__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677,(0),null);
var G__15678_15682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$home], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15678_15682) : re_frame.core.dispatch.call(null,G__15678_15682));

var G__15679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null),decodeURI(name)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15679) : re_frame.core.dispatch.call(null,G__15679));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/situation/:name",action__15054__auto___15680);

var action__15054__auto___15688 = (function (params__15055__auto__){
if(cljs.core.map_QMARK_(params__15055__auto__)){
var map__15683 = params__15055__auto__;
var map__15683__$1 = ((((!((map__15683 == null)))?((((map__15683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15683):map__15683);
var G__15685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15685) : re_frame.core.dispatch.call(null,G__15685));
} else {
if(cljs.core.vector_QMARK_(params__15055__auto__)){
var vec__15686 = params__15055__auto__;
var G__15687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null),cljs.core.cst$kw$not_DASH_found], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15687) : re_frame.core.dispatch.call(null,G__15687));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__15054__auto___15688);

crisis_dispatch.core.history = (function (){var G__15689 = (new goog.History());
var G__15690_15693 = G__15689;
var G__15691_15694 = goog.history.EventType.NAVIGATE;
var G__15692_15695 = ((function (G__15690_15693,G__15691_15694,G__15689){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15690_15693,G__15691_15694,G__15689))
;
goog.events.listen(G__15690_15693,G__15691_15694,G__15692_15695);

G__15689.setEnabled(true);

return G__15689;
})();
crisis_dispatch.core.mount_root = (function crisis_dispatch$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.main_panel], null),document.getElementById("app"));
});
crisis_dispatch.core.init = (function crisis_dispatch$core$init(){
var G__15698_15700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__15698_15700) : re_frame.core.dispatch_sync.call(null,G__15698_15700));

var G__15699_15701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start_DASH_interval], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15699_15701) : re_frame.core.dispatch.call(null,G__15699_15701));

return crisis_dispatch.core.mount_root();
});
goog.exportSymbol('crisis_dispatch.core.init', crisis_dispatch.core.init);
