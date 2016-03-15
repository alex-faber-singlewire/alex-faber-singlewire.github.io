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
var active_panel = (function (){var G__16622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16622) : re_frame.core.subscribe.call(null,G__16622));
})();
var nav_bar_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Home",cljs.core.cst$kw$route,"#/",cljs.core.cst$kw$panel_DASH_name,cljs.core.cst$kw$home], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Scenarios",cljs.core.cst$kw$route,"#/scenarios",cljs.core.cst$kw$panel_DASH_name,cljs.core.cst$kw$scenarios], null)], null);
return ((function (active_panel,nav_bar_items){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border_DASH_bottom,"1px solid #56C0E0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (active_panel,nav_bar_items){
return (function crisis_proto$views$core$navbar_$_iter__16623(s__16624){
return (new cljs.core.LazySeq(null,((function (active_panel,nav_bar_items){
return (function (){
var s__16624__$1 = s__16624;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16624__$1);
if(temp__4425__auto__){
var s__16624__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16624__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16624__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16626 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16625 = (0);
while(true){
if((i__16625 < size__5365__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16625);
cljs.core.chunk_append(b__16626,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$panel_DASH_name.cljs$core$IFn$_invoke$arity$1(item),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__16629 = (i__16625 + (1));
i__16625 = G__16629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16626),crisis_proto$views$core$navbar_$_iter__16623(cljs.core.chunk_rest(s__16624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16626),null);
}
} else {
var item = cljs.core.first(s__16624__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$panel_DASH_name.cljs$core$IFn$_invoke$arity$1(item),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),crisis_proto$views$core$navbar_$_iter__16623(cljs.core.rest(s__16624__$2)));
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
var admin_configuration = (function (){var G__16632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16632) : re_frame.core.subscribe.call(null,G__16632));
})();
var form_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration))),cljs.core.cst$kw$username,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration))),cljs.core.cst$kw$password,cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration)))], null));
return ((function (admin_configuration,form_doc){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (admin_configuration,form_doc){
return (function (e){
e.preventDefault();

var G__16633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validate_DASH_informacast_DASH_configuration,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_doc) : cljs.core.deref.call(null,form_doc))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16633) : re_frame.core.dispatch.call(null,G__16633));
});})(admin_configuration,form_doc))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$base_DASH_url,cljs.core.cst$kw$placeholder,"Base URL: https://172.30.226.233:8444"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$placeholder,"Username"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$password,cljs.core.cst$kw$id,cljs.core.cst$kw$password,cljs.core.cst$kw$placeholder,"Password"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$form_DASH_control$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),"Check and Set"], null)], null)], null),form_doc], null)], null)], null);
});
;})(admin_configuration,form_doc))
});
crisis_proto.views.core.scenarios_panel = (function crisis_proto$views$core$scenarios_panel(){
var scenario_names = (function (){var G__16646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scenario_DASH_names], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16646) : re_frame.core.subscribe.call(null,G__16646));
})();
return ((function (scenario_names){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (scenario_names){
return (function crisis_proto$views$core$scenarios_panel_$_iter__16647(s__16648){
return (new cljs.core.LazySeq(null,((function (scenario_names){
return (function (){
var s__16648__$1 = s__16648;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16648__$1);
if(temp__4425__auto__){
var s__16648__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16648__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16648__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16650 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16649 = (0);
while(true){
if((i__16649 < size__5365__auto__)){
var name = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16649);
cljs.core.chunk_append(b__16650,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__16649,name,c__5364__auto__,size__5365__auto__,b__16650,s__16648__$2,temp__4425__auto__,scenario_names){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",name], 0));
});})(i__16649,name,c__5364__auto__,size__5365__auto__,b__16650,s__16648__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"25px"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__16649,name,c__5364__auto__,size__5365__auto__,b__16650,s__16648__$2,temp__4425__auto__,scenario_names){
return (function (){
var G__16655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16655) : re_frame.core.dispatch.call(null,G__16655));
});})(i__16649,name,c__5364__auto__,size__5365__auto__,b__16650,s__16648__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"25px",cljs.core.cst$kw$padding_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)));

var G__16658 = (i__16649 + (1));
i__16649 = G__16658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16650),crisis_proto$views$core$scenarios_panel_$_iter__16647(cljs.core.chunk_rest(s__16648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16650),null);
}
} else {
var name = cljs.core.first(s__16648__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (name,s__16648__$2,temp__4425__auto__,scenario_names){
return (function (){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",name], 0));
});})(name,s__16648__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"25px"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (name,s__16648__$2,temp__4425__auto__,scenario_names){
return (function (){
var G__16656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_scenario,name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16656) : re_frame.core.dispatch.call(null,G__16656));
});})(name,s__16648__$2,temp__4425__auto__,scenario_names))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"25px",cljs.core.cst$kw$padding_DASH_bottom,"25px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)),crisis_proto$views$core$scenarios_panel_$_iter__16647(cljs.core.rest(s__16648__$2)));
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
var G__16657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$finalize], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16657) : re_frame.core.dispatch.call(null,G__16657));
});})(scenario_names))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_file_DASH_code_DASH_o], null)," Export Configuration"], null)], null)], null)], null)], null);
});
;})(scenario_names))
});
crisis_proto.views.core.scenario_panel = (function crisis_proto$views$core$scenario_panel(){
var active_scenario = (function (){var G__16665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16665) : re_frame.core.subscribe.call(null,G__16665));
})();
var uploaded_image_base64 = (function (){var G__16666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uploaded_DASH_image], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16666) : re_frame.core.subscribe.call(null,G__16666));
})();
var button_preview_color = (function (){var G__16667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_DASH_preview_DASH_color], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16667) : re_frame.core.subscribe.call(null,G__16667));
})();
return ((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Scenario: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2$col_DASH_md_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Color"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Hex Value: (#FFFFFF)",cljs.core.cst$kw$on_DASH_change,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (e){
var G__16668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_button_DASH_preview_DASH_color,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16668) : re_frame.core.dispatch.call(null,G__16668));
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2$col_DASH_md_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Icon"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$placeholder,"Upload Image",cljs.core.cst$kw$on_DASH_change,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (e){
var temp__4425__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__4425__auto__)){
var file = temp__4425__auto__;
var G__16669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_uploaded_DASH_image,file], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16669) : re_frame.core.dispatch.call(null,G__16669));
} else {
return null;
}
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_10$col_DASH_sm_DASH_offset_DASH_1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_warning,"Note: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,"for best results, upload ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,".png"], null)," images that have equal width and height"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$text_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),"Button Image and Color Preview"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(button_preview_color) : cljs.core.deref.call(null,button_preview_color))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(uploaded_image_base64) : cljs.core.deref.call(null,uploaded_image_base64))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (active_scenario,uploaded_image_base64,button_preview_color){
return (function (){
var G__16670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept_DASH_button_DASH_preview], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16670) : re_frame.core.dispatch.call(null,G__16670));
});})(active_scenario,uploaded_image_base64,button_preview_color))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_check], null)," Accept Preview"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$text_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),[cljs.core.str("Current Color and Image for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_left], null)," Back"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Messages ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(active_scenario,uploaded_image_base64,button_preview_color))
});
crisis_proto.views.core.new_scenario_panel = (function crisis_proto$views$core$new_scenario_panel(){
var form_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var form_submission = (function (){var G__16673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_DASH_submission], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16673) : re_frame.core.subscribe.call(null,G__16673));
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

var G__16674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$create_DASH_new_DASH_scenario,cljs.core.cst$kw$new_DASH_scenario_DASH_name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_doc) : cljs.core.deref.call(null,form_doc)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16674) : re_frame.core.dispatch.call(null,G__16674));
});})(form_doc,form_submission))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$new_DASH_scenario_DASH_name,cljs.core.cst$kw$placeholder,"Scenario Name"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$form_DASH_control$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"submit"], null),"Create Scenario"], null)], null)], null),form_doc], null)], null)], null)], null);
});
;})(form_doc,form_submission))
});
crisis_proto.views.core.scenario_messages_panel = (function crisis_proto$views$core$scenario_messages_panel(){
var active_scenario = (function (){var G__16685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16685) : re_frame.core.subscribe.call(null,G__16685));
})();
var working_QMARK_ = (function (){var G__16686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$working_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16686) : re_frame.core.subscribe.call(null,G__16686));
})();
return ((function (active_scenario,working_QMARK_){
return (function (){
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Scenario: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Affiliated Messages ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - These are the messages that are sent whenever the dispatcher triggers the ",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))," scenario"], null)], null),((cljs.core.empty_QMARK_(messages))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_warning$text_DASH_center,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"25px",cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),"No Messages Selected"], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (messages,active_scenario,working_QMARK_){
return (function crisis_proto$views$core$scenario_messages_panel_$_iter__16687(s__16688){
return (new cljs.core.LazySeq(null,((function (messages,active_scenario,working_QMARK_){
return (function (){
var s__16688__$1 = s__16688;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16688__$1);
if(temp__4425__auto__){
var s__16688__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16688__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16688__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16690 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16689 = (0);
while(true){
if((i__16689 < size__5365__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16689);
cljs.core.chunk_append(b__16690,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null)));

var G__16693 = (i__16689 + (1));
i__16689 = G__16693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16690),crisis_proto$views$core$scenario_messages_panel_$_iter__16687(cljs.core.chunk_rest(s__16688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16690),null);
}
} else {
var message = cljs.core.first(s__16688__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null)),crisis_proto$views$core$scenario_messages_panel_$_iter__16687(cljs.core.rest(s__16688__$2)));
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
return (function (p1__16675_SHARP_,p2__16676_SHARP_){
return [cljs.core.str(p1__16675_SHARP_),cljs.core.str(" "),cljs.core.str(p2__16676_SHARP_)].join('');
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
var active_scenario = (function (){var G__16699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16699) : re_frame.core.subscribe.call(null,G__16699));
})();
var network_response = (function (){var G__16700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$network_DASH_response], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16700) : re_frame.core.subscribe.call(null,G__16700));
})();
var fetched_messages = (function (){var G__16701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetched_DASH_messages], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16701) : re_frame.core.subscribe.call(null,G__16701));
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
var G__16702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetch_DASH_full_DASH_message_DASH_and_DASH_populate_DASH_modal,message], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16702) : re_frame.core.dispatch.call(null,G__16702));
});})(active_scenario,network_response,fetched_messages))
,cljs.core.cst$kw$save_DASH_callback,((function (active_scenario,network_response,fetched_messages){
return (function (selected_messages){
var G__16703_16704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_selected_DASH_messages_DASH_for_DASH_scenario,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),selected_messages], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16703_16704) : re_frame.core.dispatch.call(null,G__16703_16704));

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
var active_scenario = (function (){var G__16734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16734) : re_frame.core.subscribe.call(null,G__16734));
})();
var selected_message = (function (){var G__16735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_message], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16735) : re_frame.core.subscribe.call(null,G__16735));
})();
var selected_option = (function (){var G__16736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_option], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16736) : re_frame.core.subscribe.call(null,G__16736));
})();
return ((function (active_scenario,selected_message,selected_option){
return (function (){
var reconciliation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null));
var messages = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$messages], null));
var destination_parameter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation,cljs.core.cst$kw$destination_DASH_determined_DASH_by], null));
var path = (cljs.core.truth_(destination_parameter)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message))),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null));
var recipient_groups = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),path);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),((cljs.core.empty_QMARK_(reconciliation))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/parameters")].join('')], null),"Parameters"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Recipient Groups for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(destination_parameter)?"col-md-6":"col-sm-8")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_info,"Affiliated Messages"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16737(s__16738){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16738__$1 = s__16738;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16738__$1);
if(temp__4425__auto__){
var s__16738__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16738__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16738__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16740 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16739 = (0);
while(true){
if((i__16739 < size__5365__auto__)){
var message = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16739);
cljs.core.chunk_append(b__16740,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),message);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (i__16739,selected_QMARK_,message,c__5364__auto__,size__5365__auto__,b__16740,s__16738__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16745 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_message,message,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16745) : re_frame.core.dispatch.call(null,G__16745));
});})(i__16739,selected_QMARK_,message,c__5364__auto__,size__5365__auto__,b__16740,s__16738__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null));
})());

var G__16763 = (i__16739 + (1));
i__16739 = G__16763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16740),crisis_proto$views$core$recipient_groups_panel_$_iter__16737(cljs.core.chunk_rest(s__16738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16740),null);
}
} else {
var message = cljs.core.first(s__16738__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),message);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,message,s__16738__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16746 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_message,message,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16746) : re_frame.core.dispatch.call(null,G__16746));
});})(selected_QMARK_,message,s__16738__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,message], null));
})(),crisis_proto$views$core$recipient_groups_panel_$_iter__16737(cljs.core.rest(s__16738__$2)));
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
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16747(s__16748){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16748__$1 = s__16748;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16748__$1);
if(temp__4425__auto__){
var s__16748__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16748__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16748__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16750 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16749 = (0);
while(true){
if((i__16749 < size__5365__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16749);
cljs.core.chunk_append(b__16750,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)),option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (i__16749,selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__16750,s__16748__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16755 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_option,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16755) : re_frame.core.dispatch.call(null,G__16755));
});})(i__16749,selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__16750,s__16748__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__16764 = (i__16749 + (1));
i__16749 = G__16764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16750),crisis_proto$views$core$recipient_groups_panel_$_iter__16747(cljs.core.chunk_rest(s__16748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16750),null);
}
} else {
var option = cljs.core.first(s__16748__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)),option);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,option,s__16748__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var G__16756 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected,cljs.core.cst$kw$selected_DASH_option,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16756) : re_frame.core.dispatch.call(null,G__16756));
});})(selected_QMARK_,option,s__16748__$2,temp__4425__auto__,reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$recipient_groups_panel_$_iter__16747(cljs.core.rest(s__16748__$2)));
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
return (function crisis_proto$views$core$recipient_groups_panel_$_iter__16757(s__16758){
return (new cljs.core.LazySeq(null,((function (reconciliation,messages,destination_parameter,path,recipient_groups,active_scenario,selected_message,selected_option){
return (function (){
var s__16758__$1 = s__16758;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16758__$1);
if(temp__4425__auto__){
var s__16758__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16758__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16758__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16760 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16759 = (0);
while(true){
if((i__16759 < size__5365__auto__)){
var recipient_group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16759);
cljs.core.chunk_append(b__16760,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)));

var G__16765 = (i__16759 + (1));
i__16759 = G__16765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16760),crisis_proto$views$core$recipient_groups_panel_$_iter__16757(cljs.core.chunk_rest(s__16758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16760),null);
}
} else {
var recipient_group = cljs.core.first(s__16758__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)),crisis_proto$views$core$recipient_groups_panel_$_iter__16757(cljs.core.rest(s__16758__$2)));
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
var active_scenario = (function (){var G__16904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16904) : re_frame.core.subscribe.call(null,G__16904));
})();
return ((function (active_scenario){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Parameters"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,[cljs.core.str("Reconciling Parameters for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Define Questions",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted," - What would you like to ask the dispatcher to help them supply an appropriate option?"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16905(s__16906){
return (new cljs.core.LazySeq(null,((function (active_scenario){
return (function (){
var s__16906__$1 = s__16906;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16906__$1);
if(temp__4425__auto__){
var s__16906__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16906__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16906__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16908 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16907 = (0);
while(true){
if((i__16907 < size__5365__auto__)){
var vec__16915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16907);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915,(1),null);
cljs.core.chunk_append(b__16908,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,parameter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Question",cljs.core.cst$kw$value,question,cljs.core.cst$kw$on_DASH_change,((function (i__16907,vec__16915,parameter,question,c__5364__auto__,size__5365__auto__,b__16908,s__16906__$2,temp__4425__auto__,active_scenario){
return (function (e){
var new_question = e.target.value;
var G__16916 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),parameter,new_question], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16916) : re_frame.core.dispatch.call(null,G__16916));
});})(i__16907,vec__16915,parameter,question,c__5364__auto__,size__5365__auto__,b__16908,s__16906__$2,temp__4425__auto__,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(parameter),cljs.core.str("-question")].join('')], null)));

var G__17041 = (i__16907 + (1));
i__16907 = G__17041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16908),crisis_proto$views$core$parameters_panel_$_iter__16905(cljs.core.chunk_rest(s__16906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16908),null);
}
} else {
var vec__16917 = cljs.core.first(s__16906__$2);
var parameter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16917,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16917,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,parameter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Question",cljs.core.cst$kw$value,question,cljs.core.cst$kw$on_DASH_change,((function (vec__16917,parameter,question,s__16906__$2,temp__4425__auto__,active_scenario){
return (function (e){
var new_question = e.target.value;
var G__16918 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),parameter,new_question], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16918) : re_frame.core.dispatch.call(null,G__16918));
});})(vec__16917,parameter,question,s__16906__$2,temp__4425__auto__,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(parameter),cljs.core.str("-question")].join('')], null)),crisis_proto$views$core$parameters_panel_$_iter__16905(cljs.core.rest(s__16906__$2)));
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
return (function crisis_proto$views$core$parameters_panel_$_iter__16919(s__16920){
return (new cljs.core.LazySeq(null,((function (parameter_order_vector,active_scenario){
return (function (){
var s__16920__$1 = s__16920;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16920__$1);
if(temp__4425__auto__){
var s__16920__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16920__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16920__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16922 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16921 = (0);
while(true){
if((i__16921 < size__5365__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16921);
cljs.core.chunk_append(b__16922,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"Number",cljs.core.cst$kw$placeholder,"Position",cljs.core.cst$kw$value,(cljs.core.to_array(parameter_order_vector).indexOf(entry) + (1)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,cljs.core.count(parameter_order_vector),cljs.core.cst$kw$on_DASH_change,((function (i__16921,entry,c__5364__auto__,size__5365__auto__,b__16922,s__16920__$2,temp__4425__auto__,parameter_order_vector,active_scenario){
return (function (e){
var order = e.target.value;
var G__16927 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question_DASH_order,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),entry,order], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16927) : re_frame.core.dispatch.call(null,G__16927));
});})(i__16921,entry,c__5364__auto__,size__5365__auto__,b__16922,s__16920__$2,temp__4425__auto__,parameter_order_vector,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)));

var G__17042 = (i__16921 + (1));
i__16921 = G__17042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16922),crisis_proto$views$core$parameters_panel_$_iter__16919(cljs.core.chunk_rest(s__16920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16922),null);
}
} else {
var entry = cljs.core.first(s__16920__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_sm_DASH_3$form_DASH_control_DASH_label$text_DASH_right,entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$large$form_DASH_control,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"Number",cljs.core.cst$kw$placeholder,"Position",cljs.core.cst$kw$value,(cljs.core.to_array(parameter_order_vector).indexOf(entry) + (1)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,cljs.core.count(parameter_order_vector),cljs.core.cst$kw$on_DASH_change,((function (entry,s__16920__$2,temp__4425__auto__,parameter_order_vector,active_scenario){
return (function (e){
var order = e.target.value;
var G__16928 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_parameter_DASH_question_DASH_order,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),entry,order], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16928) : re_frame.core.dispatch.call(null,G__16928));
});})(entry,s__16920__$2,temp__4425__auto__,parameter_order_vector,active_scenario))
], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)),crisis_proto$views$core$parameters_panel_$_iter__16919(cljs.core.rest(s__16920__$2)));
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
var selected_options = (function (){var G__16929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_parameter_DASH_options], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16929) : re_frame.core.subscribe.call(null,G__16929));
})();
var order = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$order], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16930(s__16931){
return (new cljs.core.LazySeq(null,((function (options_related,selected_options,order,active_scenario){
return (function (){
var s__16931__$1 = s__16931;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16931__$1);
if(temp__4425__auto__){
var s__16931__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16931__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__16931__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__16933 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__16932 = (0);
while(true){
if((i__16932 < size__5365__auto__)){
var parameter_name = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__16932);
cljs.core.chunk_append(b__16933,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,parameter_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,[cljs.core.str("? - "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter_name], null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_related,parameter_name);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (i__16932,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__16982(s__16983){
return (new cljs.core.LazySeq(null,((function (i__16932,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var s__16983__$1 = s__16983;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16983__$1);
if(temp__4425__auto____$1){
var s__16983__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16983__$2)){
var c__5364__auto____$1 = cljs.core.chunk_first(s__16983__$2);
var size__5365__auto____$1 = cljs.core.count(c__5364__auto____$1);
var b__16985 = cljs.core.chunk_buffer(size__5365__auto____$1);
if((function (){var i__16984 = (0);
while(true){
if((i__16984 < size__5365__auto____$1)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto____$1,i__16984);
cljs.core.chunk_append(b__16985,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16766_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16766_SHARP_));
});})(i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__16996){
var vec__16997 = p__16996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16997,(1),null);
return (v == null);
});})(i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16998 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16998) : re_frame.core.dispatch.call(null,G__16998));
});})(i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__16999 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16999) : re_frame.core.dispatch.call(null,G__16999));
});})(i__16984,i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto____$1,size__5365__auto____$1,b__16985,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__17043 = (i__16984 + (1));
i__16984 = G__17043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16985),crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__16982(cljs.core.chunk_rest(s__16983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16985),null);
}
} else {
var option = cljs.core.first(s__16983__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16766_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16766_SHARP_));
});})(i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__17000){
var vec__17001 = p__17000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17001,(1),null);
return (v == null);
});})(i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17002 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17002) : re_frame.core.dispatch.call(null,G__17002));
});})(i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17003) : re_frame.core.dispatch.call(null,G__17003));
});})(i__16932,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__16983__$2,temp__4425__auto____$1,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__16982(cljs.core.rest(s__16983__$2)));
}
} else {
return null;
}
break;
}
});})(i__16932,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,null,null));
});})(i__16932,options,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,options));
})());
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (i__16932,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (e){
e.preventDefault();

var input = document.getElementById([cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''));
var new_option = input.value;
if(cljs.core.truth_(clojure.string.blank_QMARK_(new_option))){
return null;
} else {
var G__17004_17044 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,parameter_name,new_option,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17004_17044) : re_frame.core.dispatch.call(null,G__17004_17044));

return input.value = "";
}
});})(i__16932,parameter_name,c__5364__auto__,size__5365__auto__,b__16933,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''),cljs.core.cst$kw$placeholder,[cljs.core.str("Add an option for "),cljs.core.str(parameter_name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter_name], null)));

var G__17045 = (i__16932 + (1));
i__16932 = G__17045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16933),crisis_proto$views$core$parameters_panel_$_iter__16930(cljs.core.chunk_rest(s__16931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16933),null);
}
} else {
var parameter_name = cljs.core.first(s__16931__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,parameter_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,[cljs.core.str("? - "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation_DASH_temp,cljs.core.cst$kw$questions,parameter_name], null)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_related,parameter_name);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__17005(s__17006){
return (new cljs.core.LazySeq(null,((function (options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var s__17006__$1 = s__17006;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__17006__$1);
if(temp__4425__auto____$1){
var s__17006__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17006__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__17006__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__17008 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__17007 = (0);
while(true){
if((i__17007 < size__5365__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__17007);
cljs.core.chunk_append(b__17008,(function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16766_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16766_SHARP_));
});})(i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__17019){
var vec__17020 = p__17019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(1),null);
return (v == null);
});})(i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17021 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17021) : re_frame.core.dispatch.call(null,G__17021));
});})(i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17022) : re_frame.core.dispatch.call(null,G__17022));
});})(i__17007,selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,c__5364__auto__,size__5365__auto__,b__17008,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})());

var G__17046 = (i__17007 + (1));
i__17007 = G__17046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17008),crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__17005(cljs.core.chunk_rest(s__17006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17008),null);
}
} else {
var option = cljs.core.first(s__17006__$2);
return cljs.core.cons((function (){var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),parameter_name),option);
var parameter_order_index = cljs.core.to_array(order).indexOf(parameter_name);
var parameters_lower_in_order = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(order,(0),parameter_order_index);
var parents_selected_QMARK_ = cljs.core.every_QMARK_(((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p1__16766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,p1__16766_SHARP_], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options)),p1__16766_SHARP_));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,parameters_lower_in_order);
var without_parents_QMARK_ = cljs.core.every_QMARK_(((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (p__17023){
var vec__17024 = p__17023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17024,(1),null);
return (v == null);
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(option));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$btn_DASH_group_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_10$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((without_parents_QMARK_)?"#56C0E0":((parents_selected_QMARK_)?"#F2AE43":null)),cljs.core.cst$kw$border_DASH_color,((selected_QMARK_)?"#F2AE43":null)], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17025 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_selected_DASH_option,parameter_name,option,selected_QMARK_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17025) : re_frame.core.dispatch.call(null,G__17025));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$col_DASH_xs_DASH_2$btn$btn_DASH_secondary$text_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (){
var G__17026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_option_DASH_from_DASH_parameter,parameter_name,option], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17026) : re_frame.core.dispatch.call(null,G__17026));
});})(selected_QMARK_,parameter_order_index,parameters_lower_in_order,parents_selected_QMARK_,without_parents_QMARK_,option,s__17006__$2,temp__4425__auto____$1,options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null));
})(),crisis_proto$views$core$parameters_panel_$_iter__16930_$_iter__17005(cljs.core.rest(s__17006__$2)));
}
} else {
return null;
}
break;
}
});})(options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
,null,null));
});})(options,parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,options));
})());
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario){
return (function (e){
e.preventDefault();

var input = document.getElementById([cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''));
var new_option = input.value;
if(cljs.core.truth_(clojure.string.blank_QMARK_(new_option))){
return null;
} else {
var G__17027_17047 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_option_DASH_to_DASH_parameter,parameter_name,new_option,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_options) : cljs.core.deref.call(null,selected_options))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17027_17047) : re_frame.core.dispatch.call(null,G__17027_17047));

return input.value = "";
}
});})(parameter_name,s__16931__$2,temp__4425__auto__,options_related,selected_options,order,active_scenario))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str(parameter_name),cljs.core.str("-new-option")].join(''),cljs.core.cst$kw$placeholder,[cljs.core.str("Add an option for "),cljs.core.str(parameter_name)].join('')], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter_name], null)),crisis_proto$views$core$parameters_panel_$_iter__16930(cljs.core.rest(s__16931__$2)));
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
var G__17028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17028) : re_frame.core.dispatch.call(null,G__17028));
});})(selected_parameter,active_scenario))
], null),"No"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (selected_parameter,active_scenario){
return (function crisis_proto$views$core$parameters_panel_$_iter__17029(s__17030){
return (new cljs.core.LazySeq(null,((function (selected_parameter,active_scenario){
return (function (){
var s__17030__$1 = s__17030;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17030__$1);
if(temp__4425__auto__){
var s__17030__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17030__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__17030__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__17032 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__17031 = (0);
while(true){
if((i__17031 < size__5365__auto__)){
var parameter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__17031);
cljs.core.chunk_append(b__17032,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parameter,selected_parameter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__17031,parameter,c__5364__auto__,size__5365__auto__,b__17032,s__17030__$2,temp__4425__auto__,selected_parameter,active_scenario){
return (function (){
var G__17037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,parameter], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17037) : re_frame.core.dispatch.call(null,G__17037));
});})(i__17031,parameter,c__5364__auto__,size__5365__auto__,b__17032,s__17030__$2,temp__4425__auto__,selected_parameter,active_scenario))
], null),parameter], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter], null)));

var G__17048 = (i__17031 + (1));
i__17031 = G__17048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17032),crisis_proto$views$core$parameters_panel_$_iter__17029(cljs.core.chunk_rest(s__17030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17032),null);
}
} else {
var parameter = cljs.core.first(s__17030__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parameter,selected_parameter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (parameter,s__17030__$2,temp__4425__auto__,selected_parameter,active_scenario){
return (function (){
var G__17038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_destination_DASH_determined_DASH_by_DASH_parameter,parameter], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17038) : re_frame.core.dispatch.call(null,G__17038));
});})(parameter,s__17030__$2,temp__4425__auto__,selected_parameter,active_scenario))
], null),parameter], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,parameter], null)),crisis_proto$views$core$parameters_panel_$_iter__17029(cljs.core.rest(s__17030__$2)));
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
var G__17039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_reconcilation_DASH_temp], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17039) : re_frame.core.dispatch.call(null,G__17039));
});})(active_scenario))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_undo], null)," Reset to Last Save"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (active_scenario){
return (function (){
var G__17040_17049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_reconciliation], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17040_17049) : re_frame.core.dispatch.call(null,G__17040_17049));

return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/scenario/",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))),"/recipient-groups"], 0));
});})(active_scenario))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Next ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_right], null)], null)], null)], null)], null)], null);
});
;})(active_scenario))
});
crisis_proto.views.core.update_recipient_groups_panel = (function crisis_proto$views$core$update_recipient_groups_panel(){
var active_scenario = (function (){var G__17057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17057) : re_frame.core.subscribe.call(null,G__17057));
})();
var network_response = (function (){var G__17058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$network_DASH_response], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17058) : re_frame.core.subscribe.call(null,G__17058));
})();
var fetched_recipient_groups = (function (){var G__17059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17059) : re_frame.core.subscribe.call(null,G__17059));
})();
var selected_message = (function (){var G__17060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_message], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17060) : re_frame.core.subscribe.call(null,G__17060));
})();
var selected_option = (function (){var G__17061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_option], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17061) : re_frame.core.subscribe.call(null,G__17061));
})();
return ((function (active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/scenarios"], null),"Scenarios"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/messages")].join('')], null),"Messages"], null)], null),((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameters,cljs.core.cst$kw$reconciliation], null))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/parameters")].join('')], null),"Parameters"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/scenario/"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)))),cljs.core.str("/recipient-groups")].join('')], null),"Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$active,"Update Recipient Groups"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,[cljs.core.str("Configuring Recipient Groups for: "),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario))))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Message: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null)], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_info,"Option: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small$text_DASH_muted,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null)], null):null),((cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(network_response) : cljs.core.deref.call(null,network_response)))))?(function (){var initial_content = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fetched_recipient_groups) : cljs.core.deref.call(null,fetched_recipient_groups)));
var selected_content = cljs.core.vec((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message))),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option)))], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$affiliations,cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping,cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)))], null))));
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.init,cljs.core.cst$kw$initial_DASH_content,initial_content,cljs.core.cst$kw$selected_DASH_content,selected_content,cljs.core.cst$kw$content_DASH_key,cljs.core.cst$kw$name,cljs.core.cst$kw$left_DASH_column_DASH_title,"IC Recipient Groups",cljs.core.cst$kw$right_DASH_column_DASH_title,"Selected Recipient Groups",cljs.core.cst$kw$main_DASH_button_DASH_click_DASH_callback,((function (initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (recipient_group){
var G__17062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$populate_DASH_modal_DASH_with_DASH_recipient_DASH_group_DASH_details,recipient_group], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17062) : re_frame.core.dispatch.call(null,G__17062));
});})(initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option))
,cljs.core.cst$kw$save_DASH_callback,((function (initial_content,selected_content,active_scenario,network_response,fetched_recipient_groups,selected_message,selected_option){
return (function (selected_recipient_groups){
var G__17063_17064 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$save_DASH_recipient_DASH_group_DASH_mapping,selected_recipient_groups,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_message) : cljs.core.deref.call(null,selected_message)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_option) : cljs.core.deref.call(null,selected_option))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17063_17064) : re_frame.core.dispatch.call(null,G__17063_17064));

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
crisis_proto.views.core.panels = (function (){var method_table__5507__auto__ = (function (){var G__17065 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17065) : cljs.core.atom.call(null,G__17065));
})();
var prefer_table__5508__auto__ = (function (){var G__17066 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17066) : cljs.core.atom.call(null,G__17066));
})();
var method_cache__5509__auto__ = (function (){var G__17067 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17067) : cljs.core.atom.call(null,G__17067));
})();
var cached_hierarchy__5510__auto__ = (function (){var G__17068 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17068) : cljs.core.atom.call(null,G__17068));
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
var active_panel = (function (){var G__17071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17071) : re_frame.core.subscribe.call(null,G__17071));
})();
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.core.navbar], null),(function (){var G__17072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel));
return (crisis_proto.views.core.panels.cljs$core$IFn$_invoke$arity$1 ? crisis_proto.views.core.panels.cljs$core$IFn$_invoke$arity$1(G__17072) : crisis_proto.views.core.panels.call(null,G__17072));
})()], null)], null);
});
;})(active_panel))
});
