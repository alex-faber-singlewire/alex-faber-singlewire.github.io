// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.views.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('crisis_proto.nav');
goog.require('crisis_proto.views.selector');
goog.require('reagent_forms.core');
goog.require('crisis_proto.views.modal');
goog.require('re_frame.core');
crisis_proto.views.core.navbar = (function crisis_proto$views$core$navbar(){
var active_panel = (function (){var G__16615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16615) : re_frame.core.subscribe.call(null,G__16615));
})();
var nav_bar_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Home",cljs.core.cst$kw$route,"#/",cljs.core.cst$kw$panel_DASH_name,cljs.core.cst$kw$home], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Scenarios",cljs.core.cst$kw$route,"#/scenarios",cljs.core.cst$kw$panel_DASH_name,cljs.core.cst$kw$scenarios], null)], null);
return ((function (active_panel,nav_bar_items){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_bottom,"1px solid #56C0E0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (active_panel,nav_bar_items){
return (function crisis_proto$views$core$navbar_$_iter__16616(s__16617){
return (new cljs.core.LazySeq(null,((function (active_panel,nav_bar_items){
return (function (){
var s__16617__$1 = s__16617;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16617__$1);
if(temp__4425__auto__){
var s__16617__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16617__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16617__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16619 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16618 = (0);
while(true){
if((i__16618 < size__5365__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16618);
cljs.core.chunk_append(b__16619,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$panel_DASH_name.cljs$core$IFn$_invoke$arity$1(item),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__16622 = (i__16618 + (1));
i__16618 = G__16622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16619),crisis_proto$views$core$navbar_$_iter__16616(cljs.core.chunk_rest(s__16617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16619),null);
}
} else {
var item = cljs.core.first(s__16617__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$panel_DASH_name.cljs$core$IFn$_invoke$arity$1(item),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),crisis_proto$views$core$navbar_$_iter__16616(cljs.core.rest(s__16617__$2)));
}
} else {
return null;
}
break;
}
});})(active_panel,nav_bar_items))
,null,null));
});})(active_panel,nav_bar_items))
;
return iter__5366__auto__(nav_bar_items);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,"right",cljs.core.cst$kw$color,"#2B75DC"], null),cljs.core.cst$kw$href,"#/"], null),"InformaCast Crisis - Administration"], null)], null);
});
;})(active_panel,nav_bar_items))
});
crisis_proto.views.core.home_panel = (function crisis_proto$views$core$home_panel(){
var admin_configuration = (function (){var G__16625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16625) : re_frame.core.subscribe.call(null,G__16625));
})();
var form_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration))),cljs.core.cst$kw$username,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration))),cljs.core.cst$kw$password,cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration)))], null));
return ((function (admin_configuration,form_doc){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (admin_configuration,form_doc){
return (function (e){
e.preventDefault();

var G__16626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_informacast_DASH_configuration,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_doc) : cljs.core.deref.call(null,form_doc))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16626) : re_frame.core.dispatch.call(null,G__16626));
});})(admin_configuration,form_doc))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$placeholder,"Base URL: https://172.30.226.233:8444"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$placeholder,"Username"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$password,cljs.core.cst$kw$id,cljs.core.cst$kw$password,cljs.core.cst$kw$placeholder,"Password"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$form_DASH_control$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),"Check and Set"], null)], null)], null),form_doc], null)], null)], null);
});
;})(admin_configuration,form_doc))
});
crisis_proto.views.core.scenarios_panel = (function crisis_proto$views$core$scenarios_panel(){
var scenario_names = (function (){var G__16639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenario_DASH_names], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16639) : re_frame.core.subscribe.call(null,G__16639));
})();
return ((function (scenario_names){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (scenario_names){
return (function crisis_proto$views$core$scenarios_panel_$_iter__16640(s__16641){
return (new cljs.core.LazySeq(null,((function (scenario_names){
return (function (){
var s__16641__$1 = s__16641;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16641__$1);
if(temp__4425__auto__){
var s__16641__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16641__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16641__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16643 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16642 = (0);
while(true){
if((i__16642 < size__5365__auto__)){
var name = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16642);
cljs.core.chunk_append(b__16643,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__16642,name,c__5364__auto__,size__5365__auto__,b__16643,s__16641__$2,temp__4425__auto__,scenario_names){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",name], 0));
});})(i__16642,name,c__5364__auto__,size__5365__auto__,b__16643,s__16641__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"25px"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__16642,name,c__5364__auto__,size__5365__auto__,b__16643,s__16641__$2,temp__4425__auto__,scenario_names){
return (function (){
var G__16648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16648) : re_frame.core.dispatch.call(null,G__16648));
});})(i__16642,name,c__5364__auto__,size__5365__auto__,b__16643,s__16641__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"25px",cljs.core.cst$kw$padding_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)));

var G__16651 = (i__16642 + (1));
i__16642 = G__16651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),crisis_proto$views$core$scenarios_panel_$_iter__16640(cljs.core.chunk_rest(s__16641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16643),null);
}
} else {
var name = cljs.core.first(s__16641__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (name,s__16641__$2,temp__4425__auto__,scenario_names){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",name], 0));
});})(name,s__16641__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"25px"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (name,s__16641__$2,temp__4425__auto__,scenario_names){
return (function (){
var G__16649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16649) : re_frame.core.dispatch.call(null,G__16649));
});})(name,s__16641__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"25px",cljs.core.cst$kw$padding_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)),crisis_proto$views$core$scenarios_panel_$_iter__16640(cljs.core.rest(s__16641__$2)));
}
} else {
return null;
}
break;
}
});})(scenario_names))
,null,null));
});})(scenario_names))
;
return iter__5366__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(scenario_names) : cljs.core.deref.call(null,scenario_names)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/new")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_lg$text_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$padding,"25px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus], null)," New Scenario"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (scenario_names){
return (function (){
var G__16650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$finalize], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16650) : re_frame.core.dispatch.call(null,G__16650));
});})(scenario_names))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_file_DASH_code_DASH_o], null)," Export Configuration"], null)], null)], null)], null)], null);
});
;})(scenario_names))
});
crisis_proto.views.core.scenario_panel = (function crisis_proto$views$core$scenario_panel(){
var active_scenario = (function (){var G__16658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16658) : re_frame.core.subscribe.call(null,G__16658));
})();
var uploaded_image_base64 = (function (){var G__16659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploaded_DASH_image], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16659) : re_frame.core.subscribe.call(null,G__16659));
})();
var button_preview_color = (function (){var G__16660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_DASH_preview_DASH_color], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16660) : re_frame.core.subscribe.call(null,G__16660));
})();
return ((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Scenario: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2$col_DASH_md_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Color"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Hex Value: (#FFFFFF)",cljs.core.cst$kw$on_DASH_change,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (e){
var G__16661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_button_DASH_preview_DASH_color,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16661) : re_frame.core.dispatch.call(null,G__16661));
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2$col_DASH_md_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Icon"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$placeholder,"Upload Image",cljs.core.cst$kw$on_DASH_change,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (e){
var temp__4425__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__4425__auto__)){
var file = temp__4425__auto__;
var G__16662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_uploaded_DASH_image,file], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16662) : re_frame.core.dispatch.call(null,G__16662));
} else {
return null;
}
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_10$col_DASH_sm_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_warning,"Note: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,"for best results, upload ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,".png"], null)," images that have equal width and height"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$text_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),"Button Image and Color Preview"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(button_preview_color) : cljs.core.deref.call(null,button_preview_color))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(uploaded_image_base64) : cljs.core.deref.call(null,uploaded_image_base64))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (){
var G__16663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept_DASH_button_DASH_preview], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16663) : re_frame.core.dispatch.call(null,G__16663));
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_check], null)," Accept Preview"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$text_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),[cljs.core.str("Current Color and Image for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_left], null)," Back"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Messages ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(active_scenario,uploaded_image_base64,button_preview_color))
});
crisis_proto.views.core.new_scenario_panel = (function crisis_proto$views$core$new_scenario_panel(){
var form_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var form_submission = (function (){var G__16666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_submission], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16666) : re_frame.core.subscribe.call(null,G__16666));
})();
return ((function (form_doc,form_submission){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"New Scenario"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Give your new scenario a name"], null),(function (){var temp__4425__auto__ = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_submission) : cljs.core.deref.call(null,form_submission)));
if(cljs.core.truth_(temp__4425__auto__)){
var errors = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6$text_DASH_danger,errors], null);
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_submission) : cljs.core.deref.call(null,form_submission)));
if(cljs.core.truth_(temp__4425__auto__)){
var success_message = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6$text_DASH_success,success_message], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (form_doc,form_submission){
return (function (e){
e.preventDefault();

var G__16667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$create_DASH_new_DASH_scenario,cljs.core.cst$kw$new_DASH_scenario_DASH_name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_doc) : cljs.core.deref.call(null,form_doc)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16667) : re_frame.core.dispatch.call(null,G__16667));
});})(form_doc,form_submission))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$new_DASH_scenario_DASH_name,cljs.core.cst$kw$placeholder,"Scenario Name"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$form_DASH_control$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),"Create Scenario"], null)], null)], null),form_doc], null)], null)], null)], null);
});
;})(form_doc,form_submission))
});
crisis_proto.views.core.scenario_messages_panel = (function crisis_proto$views$core$scenario_messages_panel(){
var active_scenario = (function (){var G__16678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16678) : re_frame.core.subscribe.call(null,G__16678));
})();
var working_QMARK_ = (function (){var G__16679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$working_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16679) : re_frame.core.subscribe.call(null,G__16679));
})();
return ((function (active_scenario,working_QMARK_){
return (function (){
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Scenario: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Affiliated Messages ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - These are the messages that are sent whenever the dispatcher triggers the ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))," scenario"], null)], null),((cljs.core.empty_QMARK_(messages))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_warning$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"25px",cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),"No Messages Selected"], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (messages,active_scenario,working_QMARK_){
return (function crisis_proto$views$core$scenario_messages_panel_$_iter__16680(s__16681){
return (new cljs.core.LazySeq(null,((function (messages,active_scenario,working_QMARK_){
return (function (){
var s__16681__$1 = s__16681;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16681__$1);
if(temp__4425__auto__){
var s__16681__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16681__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16681__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16683 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16682 = (0);
while(true){
if((i__16682 < size__5365__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16682);
cljs.core.chunk_append(b__16683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null)));

var G__16686 = (i__16682 + (1));
i__16682 = G__16686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16683),crisis_proto$views$core$scenario_messages_panel_$_iter__16680(cljs.core.chunk_rest(s__16681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16683),null);
}
} else {
var message = cljs.core.first(s__16681__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null)),crisis_proto$views$core$scenario_messages_panel_$_iter__16680(cljs.core.rest(s__16681__$2)));
}
} else {
return null;
}
break;
}
});})(messages,active_scenario,working_QMARK_))
,null,null));
});})(messages,active_scenario,working_QMARK_))
;
return iter__5366__auto__(messages);
})()))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/update-messages")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_pencil], null)," Update Messages"], null)], null)], null)], null)], null),((cljs.core.empty_QMARK_(messages))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_12,((cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(working_QMARK_) : cljs.core.deref.call(null,working_QMARK_))))?(function (){var parameters = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null));
if((cljs.core.count(parameters) >= (1))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center,[cljs.core.str((((cljs.core.count(parameters) > (1)))?"These parameters were found":"This parameter was found")),cljs.core.str(" in your selected customizable messages: ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"0.7em"], null)], null),"If you don't see a parameter here that you should, make sure that the message it resides in is customizable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre$text_DASH_center,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (parameters,messages,active_scenario,working_QMARK_){
return (function (p1__16668_SHARP_,p2__16669_SHARP_){
return [cljs.core.str(p1__16668_SHARP_),cljs.core.str(" "),cljs.core.str(p2__16669_SHARP_)].join('');
});})(parameters,messages,active_scenario,working_QMARK_))
,parameters)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/parameters")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Next ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"0.7em"], null)], null),"If there are parameters in your selected message(s) but they're not listed here, make sure that the message it resides in is customizable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/recipient-groups")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),"Assign Recipient Groups"], null)], null)], null)], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info$text_DASH_center,"Probing Selected Messages for Parameters"], null))], null)], null)], null))], null);
});
;})(active_scenario,working_QMARK_))
});
crisis_proto.views.core.update_scenario_messages_panel = (function crisis_proto$views$core$update_scenario_messages_panel(){
var active_scenario = (function (){var G__16692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16692) : re_frame.core.subscribe.call(null,G__16692));
})();
var network_response = (function (){var G__16693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$network_DASH_response], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16693) : re_frame.core.subscribe.call(null,G__16693));
})();
var fetched_messages = (function (){var G__16694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetched_DASH_messages], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16694) : re_frame.core.subscribe.call(null,G__16694));
})();
return ((function (active_scenario,network_response,fetched_messages){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Update Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Configuring: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),"Set which messages you'd like to send whenever the ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))," scenario is triggered by toggling them to the right"], null),(cljs.core.truth_((function (){var or__4594__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(network_response) : cljs.core.deref.call(null,network_response)));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fetched_messages) : cljs.core.deref.call(null,fetched_messages));
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.init,cljs.core.cst$kw$initial_DASH_content,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fetched_messages) : cljs.core.deref.call(null,fetched_messages))),cljs.core.cst$kw$selected_DASH_content,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null)),cljs.core.cst$kw$content_DASH_key,cljs.core.cst$kw$description,cljs.core.cst$kw$left_DASH_column_DASH_title,"IC Messages",cljs.core.cst$kw$right_DASH_column_DASH_title,[cljs.core.str("Selected messages for "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join(''),cljs.core.cst$kw$main_DASH_button_DASH_click_DASH_callback,((function (active_scenario,network_response,fetched_messages){
return (function (message){
var G__16695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_and_DASH_populate_DASH_modal,message], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16695) : re_frame.core.dispatch.call(null,G__16695));
});})(active_scenario,network_response,fetched_messages))
,cljs.core.cst$kw$save_DASH_callback,((function (active_scenario,network_response,fetched_messages){
return (function (selected_messages){
var G__16696_16697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_selected_DASH_messages_DASH_for_DASH_scenario,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),selected_messages], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16696_16697) : re_frame.core.dispatch.call(null,G__16696_16697));

return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),"/messages"], 0));
});})(active_scenario,network_response,fetched_messages))
,cljs.core.cst$kw$cancel_DASH_callback,((function (active_scenario,network_response,fetched_messages){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),"/messages"], 0));
});})(active_scenario,network_response,fetched_messages))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_danger,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(network_response) : cljs.core.deref.call(null,network_response)))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.modal.prepare,cljs.core.cst$kw$title,"Full Message Details"], null)], null);
});
;})(active_scenario,network_response,fetched_messages))
});
crisis_proto.views.core.recipient_groups_panel = (function crisis_proto$views$core$recipient_groups_panel(){
var active_scenario = (function (){var G__16727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16727) : re_frame.core.subscribe.call(null,G__16727));
})();
var selected_message = (function (){var G__16728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_message], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16728) : re_frame.core.subscribe.call(null,G__16728));
})();
var selected_option = (function (){var G__16729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_option], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16729) : re_frame.core.subscribe.call(null,G__16729));
})();
return ((function (active_scenario,selected_message,selected_option){
return (function (){
var reconciliation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null));
var destination_parameter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null));
var path = (cljs.core.truth_(destination_parameter)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message))),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null));
var recipient_groups = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),path);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),((cljs.core.empty_QMARK_(reconciliation))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/parameters")].join('')], null),"Parameters"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Recipient Groups for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(destination_parameter)?"col-md-6":"col-sm-8")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Affiliated Messages"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16730(s__16731){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16731__$1 = s__16731;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16731__$1);
if(temp__4425__auto__){
var s__16731__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16731__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16731__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16733 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16732 = (0);
while(true){
if((i__16732 < size__5365__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16732);
cljs.core.chunk_append(b__16733,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),message);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (i__16732,selected_QMARK_,message,c__5364__auto__,size__5365__auto__,b__16733,s__16731__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16738 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_message,message,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16738) : re_frame.core.dispatch.call(null,G__16738));
});})(i__16732,selected_QMARK_,message,c__5364__auto__,size__5365__auto__,b__16733,s__16731__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null));
})());

var G__16756 = (i__16732 + (1));
i__16732 = G__16756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16733),crisis_proto$views$core$recipient_groups_panel_$_iter__16730(cljs.core.chunk_rest(s__16731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16733),null);
}
} else {
var message = cljs.core.first(s__16731__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),message);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,message,s__16731__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16739 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_message,message,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16739) : re_frame.core.dispatch.call(null,G__16739));
});})(selected_QMARK_,message,s__16731__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null));
})(),crisis_proto$views$core$recipient_groups_panel_$_iter__16730(cljs.core.rest(s__16731__$2)));
}
} else {
return null;
}
break;
}
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
,null,null));
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
;
return iter__5366__auto__(messages);
})())], null),(cljs.core.truth_(destination_parameter)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Parameter that Determines Destination",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(reconciliation)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16740(s__16741){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16741__$1 = s__16741;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16741__$1);
if(temp__4425__auto__){
var s__16741__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16741__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16741__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16743 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16742 = (0);
while(true){
if((i__16742 < size__5365__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16742);
cljs.core.chunk_append(b__16743,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)),option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (i__16742,selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__16743,s__16741__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16748 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_option,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16748) : re_frame.core.dispatch.call(null,G__16748));
});})(i__16742,selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__16743,s__16741__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__16757 = (i__16742 + (1));
i__16742 = G__16757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16743),crisis_proto$views$core$recipient_groups_panel_$_iter__16740(cljs.core.chunk_rest(s__16741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16743),null);
}
} else {
var option = cljs.core.first(s__16741__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)),option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,option,s__16741__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16749 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_option,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16749) : re_frame.core.dispatch.call(null,G__16749));
});})(selected_QMARK_,option,s__16741__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$recipient_groups_panel_$_iter__16740(cljs.core.rest(s__16741__$2)));
}
} else {
return null;
}
break;
}
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
,null,null));
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
;
return iter__5366__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciliation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(reconciliation)], null)));
})())], null):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Recipient Groups",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,[cljs.core.str(" for "),cljs.core.str(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))),cljs.core.str((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))?[cljs.core.str(" and "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option))))].join(''):null))].join('')], null):null)], null),(cljs.core.truth_((function (){var or__4594__auto__ = (function (){var and__4582__auto__ = (cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(reconciliation) == null);
if(and__4582__auto__){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message));
} else {
return and__4582__auto__;
}
})();
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
var and__4582__auto__ = cljs.core.cst$kw$destination_DASH_determined_DASH_by.cljs$core$IFn$_invoke$arity$1(reconciliation);
if(cljs.core.truth_(and__4582__auto__)){
var and__4582__auto____$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message));
if(cljs.core.truth_(and__4582__auto____$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option));
} else {
return and__4582__auto____$1;
}
} else {
return and__4582__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((!(cljs.core.empty_QMARK_(recipient_groups)))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16750(s__16751){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16751__$1 = s__16751;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16751__$1);
if(temp__4425__auto__){
var s__16751__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16751__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16751__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16753 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16752 = (0);
while(true){
if((i__16752 < size__5365__auto__)){
var recipient_group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16752);
cljs.core.chunk_append(b__16753,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)));

var G__16758 = (i__16752 + (1));
i__16752 = G__16758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16753),crisis_proto$views$core$recipient_groups_panel_$_iter__16750(cljs.core.chunk_rest(s__16751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16753),null);
}
} else {
var recipient_group = cljs.core.first(s__16751__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)),crisis_proto$views$core$recipient_groups_panel_$_iter__16750(cljs.core.rest(s__16751__$2)));
}
} else {
return null;
}
break;
}
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
,null,null));
});})(reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
;
return iter__5366__auto__(recipient_groups);
})()):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_warning$text_DASH_center,"No Recipient Groups Assigned"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/update-recipient-groups")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),"Update Recipient Groups"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_warning,(cljs.core.truth_(destination_parameter)?"Please select a message and a parameter option to get started":"Please select a message to get started")], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str(((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$entries], null))))?"/messages":"/parameters"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_left], null)," Cancel"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenarios")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Back to Scenarios ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null)], null);
});
;})(active_scenario,selected_message,selected_option))
});
crisis_proto.views.core.parameters_panel = (function crisis_proto$views$core$parameters_panel(){
var active_scenario = (function (){var G__16897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16897) : re_frame.core.subscribe.call(null,G__16897));
})();
return ((function (active_scenario){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Parameters"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,[cljs.core.str("Reconciling Parameters for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Define Questions",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - What would you like to ask the dispatcher to help them supply an appropriate option?"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16898(s__16899){
return (new cljs.core.LazySeq(null,((function (active_scenario){
return (function (){
var s__16899__$1 = s__16899;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16899__$1);
if(temp__4425__auto__){
var s__16899__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16899__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16899__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16901 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16900 = (0);
while(true){
if((i__16900 < size__5365__auto__)){
var vec__16908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16900);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16908,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16908,(1),null);
cljs.core.chunk_append(b__16901,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,parameter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Question",cljs.core.cst$kw$value,question,cljs.core.cst$kw$on_DASH_change,((function (i__16900,vec__16908,parameter,question,c__5364__auto__,size__5365__auto__,b__16901,s__16899__$2,temp__4425__auto__,active_scenario){
return (function (e){
var new_question = e.target.value;
var G__16909 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),parameter,new_question], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16909) : re_frame.core.dispatch.call(null,G__16909));
});})(i__16900,vec__16908,parameter,question,c__5364__auto__,size__5365__auto__,b__16901,s__16899__$2,temp__4425__auto__,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(parameter),cljs.core.str("-question")].join('')], null)));

var G__17034 = (i__16900 + (1));
i__16900 = G__17034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16901),crisis_proto$views$core$parameters_panel_$_iter__16898(cljs.core.chunk_rest(s__16899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16901),null);
}
} else {
var vec__16910 = cljs.core.first(s__16899__$2);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16910,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16910,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,parameter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Question",cljs.core.cst$kw$value,question,cljs.core.cst$kw$on_DASH_change,((function (vec__16910,parameter,question,s__16899__$2,temp__4425__auto__,active_scenario){
return (function (e){
var new_question = e.target.value;
var G__16911 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),parameter,new_question], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16911) : re_frame.core.dispatch.call(null,G__16911));
});})(vec__16910,parameter,question,s__16899__$2,temp__4425__auto__,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(parameter),cljs.core.str("-question")].join('')], null)),crisis_proto$views$core$parameters_panel_$_iter__16898(cljs.core.rest(s__16899__$2)));
}
} else {
return null;
}
break;
}
});})(active_scenario))
,null,null));
});})(active_scenario))
;
return iter__5366__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions], null)));
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"55px"], null)], null),"Define Order",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - In what order whould you like the questions to be shown to the dispatcher?"], null)], null),(function (){var parameter_order_vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (parameter_order_vector,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16912(s__16913){
return (new cljs.core.LazySeq(null,((function (parameter_order_vector,active_scenario){
return (function (){
var s__16913__$1 = s__16913;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16913__$1);
if(temp__4425__auto__){
var s__16913__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16913__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16913__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16915 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16914 = (0);
while(true){
if((i__16914 < size__5365__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16914);
cljs.core.chunk_append(b__16915,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"Number",cljs.core.cst$kw$placeholder,"Position",cljs.core.cst$kw$value,(cljs.core.to_array(parameter_order_vector).indexOf(entry) + (1)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,cljs.core.count(parameter_order_vector),cljs.core.cst$kw$on_DASH_change,((function (i__16914,entry,c__5364__auto__,size__5365__auto__,b__16915,s__16913__$2,temp__4425__auto__,parameter_order_vector,active_scenario){
return (function (e){
var order = e.target.value;
var G__16920 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question_DASH_order,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),entry,order], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16920) : re_frame.core.dispatch.call(null,G__16920));
});})(i__16914,entry,c__5364__auto__,size__5365__auto__,b__16915,s__16913__$2,temp__4425__auto__,parameter_order_vector,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)));

var G__17035 = (i__16914 + (1));
i__16914 = G__17035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16915),crisis_proto$views$core$parameters_panel_$_iter__16912(cljs.core.chunk_rest(s__16913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16915),null);
}
} else {
var entry = cljs.core.first(s__16913__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"Number",cljs.core.cst$kw$placeholder,"Position",cljs.core.cst$kw$value,(cljs.core.to_array(parameter_order_vector).indexOf(entry) + (1)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,cljs.core.count(parameter_order_vector),cljs.core.cst$kw$on_DASH_change,((function (entry,s__16913__$2,temp__4425__auto__,parameter_order_vector,active_scenario){
return (function (e){
var order = e.target.value;
var G__16921 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question_DASH_order,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),entry,order], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16921) : re_frame.core.dispatch.call(null,G__16921));
});})(entry,s__16913__$2,temp__4425__auto__,parameter_order_vector,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)),crisis_proto$views$core$parameters_panel_$_iter__16912(cljs.core.rest(s__16913__$2)));
}
} else {
return null;
}
break;
}
});})(parameter_order_vector,active_scenario))
,null,null));
});})(parameter_order_vector,active_scenario))
;
return iter__5366__auto__(parameter_order_vector);
})());
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"55px"], null)], null),"Define Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - What options should the dispatcher choose from when answering each question?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Are your parameters related?",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - If so, be sure to order them correctly in the step above.  Then, highlight an option that you'd next parameter\n       options to be related to"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"25px",cljs.core.cst$kw$margin_DASH_bottom,"50px"], null)], null),(function (){var options_related = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$options], null));
var selected_options = (function (){var G__16922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16922) : re_frame.core.subscribe.call(null,G__16922));
})();
var order = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16923(s__16924){
return (new cljs.core.LazySeq(null,((function (options_related,selected_options,order,active_scenario){
return (function (){
var s__16924__$1 = s__16924;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16924__$1);
if(temp__4425__auto__){
var s__16924__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16924__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16924__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16926 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16925 = (0);
while(true){
if((i__16925 < size__5365__auto__)){
var parameter_name = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16925);
cljs.core.chunk_append(b__16926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,parameter_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,[cljs.core.str("? - "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter_name], null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_related,parameter_name);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (i__16925,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16975(s__16976){
return (new cljs.core.LazySeq(null,((function (i__16925,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var s__16976__$1 = s__16976;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16976__$1);
if(temp__4425__auto____$1){
var s__16976__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16976__$2)){
var c__5364__auto____$1 = cljs.core.chunk_first(s__16976__$2);
var size__5365__auto____$1 = cljs.core.count(c__5364__auto____$1);
var b__16978 = cljs.core.chunk_buffer(size__5365__auto____$1);
if((function (){var i__16977 = (0);
while(true){
if((i__16977 < size__5365__auto____$1)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto____$1,i__16977);
cljs.core.chunk_append(b__16978,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16759_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16759_SHARP_));
});})(i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__16989){
var vec__16990 = p__16989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(1),null);
return (v == null);
});})(i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16991 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16991) : re_frame.core.dispatch.call(null,G__16991));
});})(i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16992 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16992) : re_frame.core.dispatch.call(null,G__16992));
});})(i__16977,i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16978,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__17036 = (i__16977 + (1));
i__16977 = G__17036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16978),crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16975(cljs.core.chunk_rest(s__16976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16978),null);
}
} else {
var option = cljs.core.first(s__16976__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16759_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16759_SHARP_));
});})(i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__16993){
var vec__16994 = p__16993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16994,(1),null);
return (v == null);
});})(i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16995 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16995) : re_frame.core.dispatch.call(null,G__16995));
});})(i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16996 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16996) : re_frame.core.dispatch.call(null,G__16996));
});})(i__16925,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16976__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16975(cljs.core.rest(s__16976__$2)));
}
} else {
return null;
}
break;
}
});})(i__16925,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,null,null));
});})(i__16925,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,options));
})());
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (i__16925,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (e){
e.preventDefault();

var input = document.getElementById([cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''));
var new_option = input.value;
if(cljs.core.truth_(clojure.string.blank_QMARK_(new_option))){
return null;
} else {
var G__16997_17037 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,parameter_name,new_option,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16997_17037) : re_frame.core.dispatch.call(null,G__16997_17037));

return input.value = "";
}
});})(i__16925,parameter_name,c__5364__auto__,size__5365__auto__,b__16926,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''),cljs.core.cst$kw$placeholder,[cljs.core.str("Add an option for "),cljs.core.str(parameter_name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter_name], null)));

var G__17038 = (i__16925 + (1));
i__16925 = G__17038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16926),crisis_proto$views$core$parameters_panel_$_iter__16923(cljs.core.chunk_rest(s__16924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16926),null);
}
} else {
var parameter_name = cljs.core.first(s__16924__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,parameter_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,[cljs.core.str("? - "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter_name], null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_related,parameter_name);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16998(s__16999){
return (new cljs.core.LazySeq(null,((function (options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var s__16999__$1 = s__16999;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16999__$1);
if(temp__4425__auto____$1){
var s__16999__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16999__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16999__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__17001 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__17000 = (0);
while(true){
if((i__17000 < size__5365__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__17000);
cljs.core.chunk_append(b__17001,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16759_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16759_SHARP_));
});})(i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__17012){
var vec__17013 = p__17012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17013,(1),null);
return (v == null);
});})(i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17014 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17014) : re_frame.core.dispatch.call(null,G__17014));
});})(i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17015 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17015) : re_frame.core.dispatch.call(null,G__17015));
});})(i__17000,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17001,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__17039 = (i__17000 + (1));
i__17000 = G__17039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17001),crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16998(cljs.core.chunk_rest(s__16999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17001),null);
}
} else {
var option = cljs.core.first(s__16999__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16759_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16759_SHARP_));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__17016){
var vec__17017 = p__17016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17017,(1),null);
return (v == null);
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17018 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17018) : re_frame.core.dispatch.call(null,G__17018));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17019 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17019) : re_frame.core.dispatch.call(null,G__17019));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16999__$2,temp__4425__auto____$1,options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$parameters_panel_$_iter__16923_$_iter__16998(cljs.core.rest(s__16999__$2)));
}
} else {
return null;
}
break;
}
});})(options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,null,null));
});})(options,parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,options));
})());
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (e){
e.preventDefault();

var input = document.getElementById([cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''));
var new_option = input.value;
if(cljs.core.truth_(clojure.string.blank_QMARK_(new_option))){
return null;
} else {
var G__17020_17040 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,parameter_name,new_option,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17020_17040) : re_frame.core.dispatch.call(null,G__17020_17040));

return input.value = "";
}
});})(parameter_name,s__16924__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''),cljs.core.cst$kw$placeholder,[cljs.core.str("Add an option for "),cljs.core.str(parameter_name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter_name], null)),crisis_proto$views$core$parameters_panel_$_iter__16923(cljs.core.rest(s__16924__$2)));
}
} else {
return null;
}
break;
}
});})(options_related,selected_options,order,active_scenario))
,null,null));
});})(options_related,selected_options,order,active_scenario))
;
return iter__5366__auto__(order);
})())], null)], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Determine Destination",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - Do one of the parameters above determine where the messages should be sent? If so, which one?"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_warning,"Note: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," the parameter you choose must not allow free-formed input"], null)], null),(function (){var selected_parameter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(selected_parameter)?null:"active"),cljs.core.cst$kw$on_DASH_click,((function (selected_parameter,active_scenario){
return (function (){
var G__17021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17021) : re_frame.core.dispatch.call(null,G__17021));
});})(selected_parameter,active_scenario))
], null),"No"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (selected_parameter,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__17022(s__17023){
return (new cljs.core.LazySeq(null,((function (selected_parameter,active_scenario){
return (function (){
var s__17023__$1 = s__17023;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17023__$1);
if(temp__4425__auto__){
var s__17023__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17023__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__17023__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__17025 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__17024 = (0);
while(true){
if((i__17024 < size__5365__auto__)){
var parameter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__17024);
cljs.core.chunk_append(b__17025,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parameter,selected_parameter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__17024,parameter,c__5364__auto__,size__5365__auto__,b__17025,s__17023__$2,temp__4425__auto__,selected_parameter,active_scenario){
return (function (){
var G__17030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,parameter], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17030) : re_frame.core.dispatch.call(null,G__17030));
});})(i__17024,parameter,c__5364__auto__,size__5365__auto__,b__17025,s__17023__$2,temp__4425__auto__,selected_parameter,active_scenario))
], null),parameter], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter], null)));

var G__17041 = (i__17024 + (1));
i__17024 = G__17041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17025),crisis_proto$views$core$parameters_panel_$_iter__17022(cljs.core.chunk_rest(s__17023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17025),null);
}
} else {
var parameter = cljs.core.first(s__17023__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parameter,selected_parameter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (parameter,s__17023__$2,temp__4425__auto__,selected_parameter,active_scenario){
return (function (){
var G__17031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,parameter], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17031) : re_frame.core.dispatch.call(null,G__17031));
});})(parameter,s__17023__$2,temp__4425__auto__,selected_parameter,active_scenario))
], null),parameter], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter], null)),crisis_proto$views$core$parameters_panel_$_iter__17022(cljs.core.rest(s__17023__$2)));
}
} else {
return null;
}
break;
}
});})(selected_parameter,active_scenario))
,null,null));
});})(selected_parameter,active_scenario))
;
return iter__5366__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null)));
})())], null);
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_left], null)," Previous"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_warning,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (active_scenario){
return (function (){
var G__17032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_reconcilation_DASH_temp], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17032) : re_frame.core.dispatch.call(null,G__17032));
});})(active_scenario))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_undo], null)," Reset to Last Save"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (active_scenario){
return (function (){
var G__17033_17042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_reconciliation], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17033_17042) : re_frame.core.dispatch.call(null,G__17033_17042));

return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),"/recipient-groups"], 0));
});})(active_scenario))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Next ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null);
});
;})(active_scenario))
});
crisis_proto.views.core.update_recipient_groups_panel = (function crisis_proto$views$core$update_recipient_groups_panel(){
var active_scenario = (function (){var G__17050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17050) : re_frame.core.subscribe.call(null,G__17050));
})();
var network_response = (function (){var G__17051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$network_DASH_response], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17051) : re_frame.core.subscribe.call(null,G__17051));
})();
var fetched_recipient_groups = (function (){var G__17052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17052) : re_frame.core.subscribe.call(null,G__17052));
})();
var selected_message = (function (){var G__17053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_message], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17053) : re_frame.core.subscribe.call(null,G__17053));
})();
var selected_option = (function (){var G__17054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_option], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17054) : re_frame.core.subscribe.call(null,G__17054));
})();
return ((function (active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/parameters")].join('')], null),"Parameters"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/recipient-groups")].join('')], null),"Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Update Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Configuring Recipient Groups for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Message: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null)], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Option: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null)], null):null),((cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(network_response) : cljs.core.deref.call(null,network_response)))))?(function (){var initial_content = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fetched_recipient_groups) : cljs.core.deref.call(null,fetched_recipient_groups)));
var selected_content = cljs.core.vec((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message))),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null))));
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.init,cljs.core.cst$kw$initial_DASH_content,initial_content,cljs.core.cst$kw$selected_DASH_content,selected_content,cljs.core.cst$kw$content_DASH_key,cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_column_DASH_title,"IC Recipient Groups",cljs.core.cst$kw$right_DASH_column_DASH_title,"Selected Recipient Groups",cljs.core.cst$kw$main_DASH_button_DASH_click_DASH_callback,((function (initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (recipient_group){
var G__17055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$populate_DASH_modal_DASH_with_DASH_recipient_DASH_group_DASH_details,recipient_group], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17055) : re_frame.core.dispatch.call(null,G__17055));
});})(initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option))
,cljs.core.cst$kw$save_DASH_callback,((function (initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (selected_recipient_groups){
var G__17056_17057 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_recipient_DASH_group_DASH_mapping,selected_recipient_groups,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17056_17057) : re_frame.core.dispatch.call(null,G__17056_17057));

return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/recipient-groups")].join('')], 0));
});})(initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option))
,cljs.core.cst$kw$cancel_DASH_callback,((function (initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/recipient-groups")].join('')], 0));
});})(initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option))
], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center$text_DASH_danger,"Unable to fetch Recipient Groups from InformaCast"], null).call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.modal.prepare,cljs.core.cst$kw$title,"Recipient Group Details"], null)], null);
});
;})(active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option))
});
if(typeof crisis_proto.views.core.panels !== 'undefined'){
} else {
crisis_proto.views.core.panels = (function (){var method_table__5507__auto__ = (function (){var G__17058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17058) : cljs.core.atom.call(null,G__17058));
})();
var prefer_table__5508__auto__ = (function (){var G__17059 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17059) : cljs.core.atom.call(null,G__17059));
})();
var method_cache__5509__auto__ = (function (){var G__17060 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17060) : cljs.core.atom.call(null,G__17060));
})();
var cached_hierarchy__5510__auto__ = (function (){var G__17061 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17061) : cljs.core.atom.call(null,G__17061));
})();
var hierarchy__5511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crisis-proto.views.core","panels"),cljs.core.identity,cljs.core.cst$kw$default,hierarchy__5511__auto__,method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__));
})();
}
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$home,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.home_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scenario,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.scenario_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scenarios,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.scenarios_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new_DASH_scenario,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.new_scenario_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$parameters,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.parameters_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scenario_DASH_messages,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.scenario_messages_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$update_DASH_scenario_DASH_messages,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.update_scenario_messages_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$update_DASH_recipient_DASH_groups,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.update_recipient_groups_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recipient_DASH_groups,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.recipient_groups_panel], null);
}));
crisis_proto.views.core.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$not_DASH_found,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Page not found"], null);
}));
crisis_proto.views.core.main_panel = (function crisis_proto$views$core$main_panel(){
var active_panel = (function (){var G__17064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17064) : re_frame.core.subscribe.call(null,G__17064));
})();
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.navbar], null),(function (){var G__17065 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel));
return (crisis_proto.views.core.panels.cljs$core$IFn$_invoke$arity$1 ? crisis_proto.views.core.panels.cljs$core$IFn$_invoke$arity$1(G__17065) : crisis_proto.views.core.panels.call(null,G__17065));
})()], null)], null);
});
;})(active_panel))
});
