// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
crisis_dispatch.views.navigation = (function crisis_dispatch$views$navigation(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"masthead clearfix",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible_DASH_sm$visible_DASH_md$visible_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,"260px",cljs.core.cst$kw$top,"21px",cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"InformaCast Crisis Dispatcher"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"inner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$masthead_DASH_brand,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/Algonquin_College_logo.svg.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"200px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible_DASH_xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,"InformaCast Crisis Dispatcher"], null)], null)], null)], null);
});
crisis_dispatch.views.credentials_panel = (function crisis_dispatch$views$credentials_panel(){
var admin_configuration = (function (){var G__14696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14696) : re_frame.core.subscribe.call(null,G__14696));
})();
var form_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (admin_configuration,form_doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"InformaCast Credentials"], null),(function (){var temp__4423__auto__ = cljs.core.cst$kw$configuration.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration)));
if(cljs.core.truth_(temp__4423__auto__)){
var configuration = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),[cljs.core.str("for: "),cljs.core.str(cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1(configuration))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_muted,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),"The configuration file you supplied offered the InformaCast address above.  In order for this\n           dispatch application to work, please supply your InformaCast Credentials below"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_4$col_DASH_sm_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (configuration,temp__4423__auto__,admin_configuration,form_doc){
return (function (e){
e.preventDefault();

var G__14697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_informacast_DASH_credentials,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(form_doc) : cljs.core.deref.call(null,form_doc))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14697) : re_frame.core.dispatch.call(null,G__14697));
});})(configuration,temp__4423__auto__,admin_configuration,form_doc))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$placeholder,"Username"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$password,cljs.core.cst$kw$id,cljs.core.cst$kw$password,cljs.core.cst$kw$placeholder,"Password"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$form_DASH_control$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#00713A"], null)], null),"Test & Set"], null)], null)], null),form_doc], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_shadow,"none",cljs.core.cst$kw$color,"#00713A"], null)], null),"Please ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/init",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#96D9F7"], null)], null),"initialize"], null)," before adding your credentials"], null);
}
})()], null);
});
;})(admin_configuration,form_doc))
});
crisis_dispatch.views.initialization_panel = (function crisis_dispatch$views$initialization_panel(){
var admin_configuration = (function (){var G__14701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14701) : re_frame.core.subscribe.call(null,G__14701));
})();
return ((function (admin_configuration){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),"Scenario File"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_4$col_DASH_sm_DASH_offset_DASH_4$col_DASH_xs_DASH_8$col_DASH_xs_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,((function (admin_configuration){
return (function (e){
var temp__4425__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__4425__auto__)){
var file = temp__4425__auto__;
var G__14702 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_file,file,cljs.core.cst$kw$scenario], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14702) : re_frame.core.dispatch.call(null,G__14702));
} else {
return null;
}
});})(admin_configuration))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),"Situation Hierarchy File"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm_DASH_4$col_DASH_sm_DASH_offset_DASH_4$col_DASH_xs_DASH_8$col_DASH_xs_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,((function (admin_configuration){
return (function (e){
var temp__4425__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__4425__auto__)){
var file = temp__4425__auto__;
var G__14703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open_DASH_file,file,cljs.core.cst$kw$situation], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14703) : re_frame.core.dispatch.call(null,G__14703));
} else {
return null;
}
});})(admin_configuration))
], null)], null)], null)], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/credentials"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,"Proceed"], null)], null)], null):null)], null);
});
;})(admin_configuration))
});
crisis_dispatch.views.home_panel = (function crisis_dispatch$views$home_panel(){
var situations = (function (){var G__14743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$situations], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14743) : re_frame.core.subscribe.call(null,G__14743));
})();
var active_situations = (function (){var G__14744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situations], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14744) : re_frame.core.subscribe.call(null,G__14744));
})();
var active_situation_name = (function (){var G__14745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_situation_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14745) : re_frame.core.subscribe.call(null,G__14745));
})();
var admin_configuration = (function (){var G__14746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$admin_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14746) : re_frame.core.subscribe.call(null,G__14746));
})();
var viewable_scenarios = (function (){var G__14747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewable_DASH_scenarios], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14747) : re_frame.core.subscribe.call(null,G__14747));
})();
return ((function (situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function (){
var scenarios = cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((!(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(situations) : cljs.core.deref.call(null,situations)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situation_name) : cljs.core.deref.call(null,active_situation_name)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),[cljs.core.str("Currently in Situation: "),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situation_name) : cljs.core.deref.call(null,active_situation_name)))].join('')], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function crisis_dispatch$views$home_panel_$_iter__14748(s__14749){
return (new cljs.core.LazySeq(null,((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function (){
var s__14749__$1 = s__14749;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14749__$1);
if(temp__4425__auto__){
var s__14749__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14749__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14749__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14751 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14750 = (0);
while(true){
if((i__14750 < size__5439__auto__)){
var situation = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14750);
cljs.core.chunk_append(b__14751,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))))))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations)))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations)))))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/situation/"),cljs.core.str((function (){var G__14756 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(situation);
return encodeURI(G__14756);
})())].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(situation)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(situation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(situation),cljs.core.cst$kw$alt,"Missing Image"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(situation)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_circle_DASH_o_DASH_down], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,situation], null)));

var G__14782 = (i__14750 + (1));
i__14750 = G__14782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14751),crisis_dispatch$views$home_panel_$_iter__14748(cljs.core.chunk_rest(s__14749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14751),null);
}
} else {
var situation = cljs.core.first(s__14749__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))))))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations)))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations)))))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("#/situation/"),cljs.core.str((function (){var G__14757 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(situation);
return encodeURI(G__14757);
})())].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(situation)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(situation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(situation),cljs.core.cst$kw$alt,"Missing Image"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(situation)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_arrow_DASH_circle_DASH_o_DASH_down], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,situation], null)),crisis_dispatch$views$home_panel_$_iter__14748(cljs.core.rest(s__14749__$2)));
}
} else {
return null;
}
break;
}
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
,null,null));
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
;
return iter__5440__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function crisis_dispatch$views$home_panel_$_iter__14758(s__14759){
return (new cljs.core.LazySeq(null,((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function (){
var s__14759__$1 = s__14759;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14759__$1);
if(temp__4425__auto__){
var s__14759__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14759__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14759__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14761 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14760 = (0);
while(true){
if((i__14760 < size__5439__auto__)){
var scenario = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14760);
cljs.core.chunk_append(b__14761,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))))))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios)))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios)))))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(function (){var temp__4423__auto__ = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameter_DASH_configuration,cljs.core.cst$kw$order], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var first_parameter = temp__4423__auto__;
return [cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14768 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario);
return encodeURI(G__14768);
})()),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(first_parameter))].join('');
} else {
return [cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14769 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario);
return encodeURI(G__14769);
})()),cljs.core.str("/dispatch")].join('');
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)));

var G__14783 = (i__14760 + (1));
i__14760 = G__14783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14761),crisis_dispatch$views$home_panel_$_iter__14758(cljs.core.chunk_rest(s__14759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14761),null);
}
} else {
var scenario = cljs.core.first(s__14759__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios))))))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios)))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_situations) : cljs.core.deref.call(null,active_situations))) + cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios)))))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(function (){var temp__4423__auto__ = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameter_DASH_configuration,cljs.core.cst$kw$order], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var first_parameter = temp__4423__auto__;
return [cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14770 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario);
return encodeURI(G__14770);
})()),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(first_parameter))].join('');
} else {
return [cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14771 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario);
return encodeURI(G__14771);
})()),cljs.core.str("/dispatch")].join('');
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)),crisis_dispatch$views$home_panel_$_iter__14758(cljs.core.rest(s__14759__$2)));
}
} else {
return null;
}
break;
}
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
,null,null));
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
;
return iter__5440__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(viewable_scenarios) : cljs.core.deref.call(null,viewable_scenarios)));
})())], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function crisis_dispatch$views$home_panel_$_iter__14772(s__14773){
return (new cljs.core.LazySeq(null,((function (scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios){
return (function (){
var s__14773__$1 = s__14773;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14773__$1);
if(temp__4425__auto__){
var s__14773__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14773__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14773__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14775 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14774 = (0);
while(true){
if((i__14774 < size__5439__auto__)){
var vec__14780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14774);
var scenario_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14780,(0),null);
var scenario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14780,(1),null);
cljs.core.chunk_append(b__14775,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(scenarios)))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(scenarios))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(scenarios))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(function (){var temp__4423__auto__ = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameter_DASH_configuration,cljs.core.cst$kw$order], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var first_parameter = temp__4423__auto__;
return [cljs.core.str("#/scenario/"),cljs.core.str(encodeURI(scenario_key)),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(first_parameter))].join('');
} else {
return [cljs.core.str("#/scenario/"),cljs.core.str(encodeURI(scenario_key)),cljs.core.str("/dispatch")].join('');
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scenario_key], null)));

var G__14784 = (i__14774 + (1));
i__14774 = G__14784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14775),crisis_dispatch$views$home_panel_$_iter__14772(cljs.core.chunk_rest(s__14773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14775),null);
}
} else {
var vec__14781 = cljs.core.first(s__14773__$2);
var scenario_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var scenario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(scenarios)))?"col-sm-12":(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(scenarios))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(scenarios))))?"col-md-6":"col-md-4"
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(function (){var temp__4423__auto__ = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenario,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parameter_DASH_configuration,cljs.core.cst$kw$order], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var first_parameter = temp__4423__auto__;
return [cljs.core.str("#/scenario/"),cljs.core.str(encodeURI(scenario_key)),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(first_parameter))].join('');
} else {
return [cljs.core.str("#/scenario/"),cljs.core.str(encodeURI(scenario_key)),cljs.core.str("/dispatch")].join('');
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_trigger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"25px",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$button_DASH_color.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(scenario)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scenario_key], null)),crisis_dispatch$views$home_panel_$_iter__14772(cljs.core.rest(s__14773__$2)));
}
} else {
return null;
}
break;
}
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
,null,null));
});})(scenarios,situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
;
return iter__5440__auto__(cljs.core.cst$kw$scenarios.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(admin_configuration) : cljs.core.deref.call(null,admin_configuration))));
})())),((cljs.core.empty_QMARK_(scenarios))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/init"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_warning,"Initialize"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/init",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#8AAE9D",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),"Initialize"], null))], null);
});
;})(situations,active_situations,active_situation_name,admin_configuration,viewable_scenarios))
});
crisis_dispatch.views.question_panel = (function crisis_dispatch$views$question_panel(){
var parameter_configuration = (function (){var G__14807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter_DASH_configuration], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14807) : re_frame.core.subscribe.call(null,G__14807));
})();
var active_scenario = (function (){var G__14808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14808) : re_frame.core.subscribe.call(null,G__14808));
})();
var active_parameter = (function (){var G__14809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_parameter], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14809) : re_frame.core.subscribe.call(null,G__14809));
})();
return ((function (parameter_configuration,active_scenario,active_parameter){
return (function (){
var next_parameter_index = (cljs.core.to_array(cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(parameter_configuration) : cljs.core.deref.call(null,parameter_configuration)))).indexOf((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_parameter) : cljs.core.deref.call(null,active_parameter))) + (1));
var next_parameter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(parameter_configuration) : cljs.core.deref.call(null,parameter_configuration))),next_parameter_index);
var options = (function (){var G__14810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14810) : re_frame.core.subscribe.call(null,G__14810));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(parameter_configuration) : cljs.core.deref.call(null,parameter_configuration)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$questions,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_parameter) : cljs.core.deref.call(null,active_parameter))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$list_DASH_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_shadow,"none",cljs.core.cst$kw$color,"black"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter){
return (function crisis_dispatch$views$question_panel_$_iter__14811(s__14812){
return (new cljs.core.LazySeq(null,((function (next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter){
return (function (){
var s__14812__$1 = s__14812;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14812__$1);
if(temp__4425__auto__){
var s__14812__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14812__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14812__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14814 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14813 = (0);
while(true){
if((i__14813 < size__5439__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14813);
cljs.core.chunk_append(b__14814,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(cljs.core.truth_(next_parameter)?[cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14823 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario));
return encodeURI(G__14823);
})()),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(next_parameter))].join(''):[cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14824 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario));
return encodeURI(G__14824);
})()),cljs.core.str("/dispatch")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (i__14813,option,c__5438__auto__,size__5439__auto__,b__14814,s__14812__$2,temp__4425__auto__,next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter){
return (function (){
var G__14825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_options,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_parameter) : cljs.core.deref.call(null,active_parameter))], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14825) : re_frame.core.dispatch.call(null,G__14825));
});})(i__14813,option,c__5438__auto__,size__5439__auto__,b__14814,s__14812__$2,temp__4425__auto__,next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null)));

var G__14829 = (i__14813 + (1));
i__14813 = G__14829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14814),crisis_dispatch$views$question_panel_$_iter__14811(cljs.core.chunk_rest(s__14812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14814),null);
}
} else {
var option = cljs.core.first(s__14812__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,(cljs.core.truth_(next_parameter)?[cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14826 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario));
return encodeURI(G__14826);
})()),cljs.core.str("/parameter/"),cljs.core.str(encodeURI(next_parameter))].join(''):[cljs.core.str("#/scenario/"),cljs.core.str((function (){var G__14827 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_scenario) : cljs.core.deref.call(null,active_scenario));
return encodeURI(G__14827);
})()),cljs.core.str("/dispatch")].join(''))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,((function (option,s__14812__$2,temp__4425__auto__,next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter){
return (function (){
var G__14828 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_options,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_parameter) : cljs.core.deref.call(null,active_parameter))], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14828) : re_frame.core.dispatch.call(null,G__14828));
});})(option,s__14812__$2,temp__4425__auto__,next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(option)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null)),crisis_dispatch$views$question_panel_$_iter__14811(cljs.core.rest(s__14812__$2)));
}
} else {
return null;
}
break;
}
});})(next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter))
,null,null));
});})(next_parameter_index,next_parameter,options,parameter_configuration,active_scenario,active_parameter))
;
return iter__5440__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(options) : cljs.core.deref.call(null,options))));
})())], null)], null)], null)], null);
});
;})(parameter_configuration,active_scenario,active_parameter))
});
crisis_dispatch.views.dispatch_panel = (function crisis_dispatch$views$dispatch_panel(){
var selected_options = (function (){var G__14867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_options], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14867) : re_frame.core.subscribe.call(null,G__14867));
})();
var broadcast_instructions = (function (){var G__14868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$broadcast_DASH_instructions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14868) : re_frame.core.subscribe.call(null,G__14868));
})();
var fetched_full_messages = (function (){var G__14869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetched_DASH_messages], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14869) : re_frame.core.subscribe.call(null,G__14869));
})();
var destination_mapping = (function (){var G__14870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_destination_DASH_mapping], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14870) : re_frame.core.subscribe.call(null,G__14870));
})();
var parameter_that_determines_destination = (function (){var G__14871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_scenario_DASH_parameter_DASH_that_DASH_determines_DASH_destination], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14871) : re_frame.core.subscribe.call(null,G__14871));
})();
return ((function (selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (){
var find_full_message_by_id = ((function (selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function crisis_dispatch$views$dispatch_panel_$_find_full_message_by_id(message_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (p1__14830_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(p1__14830_SHARP_),message_id);
});})(selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fetched_full_messages) : cljs.core.deref.call(null,fetched_full_messages))));
});})(selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
;
var selected_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_options,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(parameter_that_determines_destination) : cljs.core.deref.call(null,parameter_that_determines_destination)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function crisis_dispatch$views$dispatch_panel_$_iter__14872(s__14873){
return (new cljs.core.LazySeq(null,((function (selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (){
var s__14873__$1 = s__14873;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14873__$1);
if(temp__4425__auto__){
var s__14873__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14873__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14873__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14875 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14874 = (0);
while(true){
if((i__14874 < size__5439__auto__)){
var instruction = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14874);
cljs.core.chunk_append(b__14875,(function (){var full_message = find_full_message_by_id(cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$well$text_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_shadow,"none",cljs.core.cst$kw$color,"grey"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$color,"#00713A"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(full_message)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#00713A"], null)], null),"Message Text"], null),(cljs.core.truth_(cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(instruction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(instruction)], null):null),(cljs.core.truth_(cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(instruction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(instruction)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var recipient_groups = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(destination_mapping) : cljs.core.deref.call(null,destination_mapping)),(cljs.core.truth_(selected_option)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction),selected_option], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#00713A"], null)], null),(((cljs.core.count(recipient_groups) > (1)))?"Destinations":"Destination")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_group,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (i__14874,recipient_groups,full_message,instruction,c__5438__auto__,size__5439__auto__,b__14875,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14890(s__14891){
return (new cljs.core.LazySeq(null,((function (i__14874,recipient_groups,full_message,instruction,c__5438__auto__,size__5439__auto__,b__14875,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (){
var s__14891__$1 = s__14891;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__14891__$1);
if(temp__4425__auto____$1){
var s__14891__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14891__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first(s__14891__$2);
var size__5439__auto____$1 = cljs.core.count(c__5438__auto____$1);
var b__14893 = cljs.core.chunk_buffer(size__5439__auto____$1);
if((function (){var i__14892 = (0);
while(true){
if((i__14892 < size__5439__auto____$1)){
var recipient_group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto____$1,i__14892);
cljs.core.chunk_append(b__14893,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F5F5F5"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus_DASH_circle], null),"  ",cljs.core.cst$kw$numPlugins.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null),"  ",cljs.core.cst$kw$numSpeakers.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_phone], null),"  ",cljs.core.cst$kw$numPhones.cljs$core$IFn$_invoke$arity$1(recipient_group)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)));

var G__14903 = (i__14892 + (1));
i__14892 = G__14903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14893),crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14890(cljs.core.chunk_rest(s__14891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14893),null);
}
} else {
var recipient_group = cljs.core.first(s__14891__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F5F5F5"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus_DASH_circle], null),"  ",cljs.core.cst$kw$numPlugins.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null),"  ",cljs.core.cst$kw$numSpeakers.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_phone], null),"  ",cljs.core.cst$kw$numPhones.cljs$core$IFn$_invoke$arity$1(recipient_group)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)),crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14890(cljs.core.rest(s__14891__$2)));
}
} else {
return null;
}
break;
}
});})(i__14874,recipient_groups,full_message,instruction,c__5438__auto__,size__5439__auto__,b__14875,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
,null,null));
});})(i__14874,recipient_groups,full_message,instruction,c__5438__auto__,size__5439__auto__,b__14875,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
;
return iter__5440__auto__(recipient_groups);
})())], null)], null);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,instruction], null));
})());

var G__14904 = (i__14874 + (1));
i__14874 = G__14904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14875),crisis_dispatch$views$dispatch_panel_$_iter__14872(cljs.core.chunk_rest(s__14873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14875),null);
}
} else {
var instruction = cljs.core.first(s__14873__$2);
return cljs.core.cons((function (){var full_message = find_full_message_by_id(cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_8$col_DASH_md_DASH_offset_DASH_2,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$well$text_DASH_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_shadow,"none",cljs.core.cst$kw$color,"grey"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$color,"#00713A"], null)], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(full_message)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#00713A"], null)], null),"Message Text"], null),(cljs.core.truth_(cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(instruction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$shortText.cljs$core$IFn$_invoke$arity$1(instruction)], null):null),(cljs.core.truth_(cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(instruction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$longText.cljs$core$IFn$_invoke$arity$1(instruction)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(function (){var recipient_groups = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(destination_mapping) : cljs.core.deref.call(null,destination_mapping)),(cljs.core.truth_(selected_option)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction),selected_option], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$messageId.cljs$core$IFn$_invoke$arity$1(instruction)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#00713A"], null)], null),(((cljs.core.count(recipient_groups) > (1)))?"Destinations":"Destination")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$list_DASH_group,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5440__auto__ = ((function (recipient_groups,full_message,instruction,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14896(s__14897){
return (new cljs.core.LazySeq(null,((function (recipient_groups,full_message,instruction,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (){
var s__14897__$1 = s__14897;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__14897__$1);
if(temp__4425__auto____$1){
var s__14897__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14897__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__14897__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__14899 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__14898 = (0);
while(true){
if((i__14898 < size__5439__auto__)){
var recipient_group = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__14898);
cljs.core.chunk_append(b__14899,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F5F5F5"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus_DASH_circle], null),"  ",cljs.core.cst$kw$numPlugins.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null),"  ",cljs.core.cst$kw$numSpeakers.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_phone], null),"  ",cljs.core.cst$kw$numPhones.cljs$core$IFn$_invoke$arity$1(recipient_group)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)));

var G__14905 = (i__14898 + (1));
i__14898 = G__14905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14899),crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14896(cljs.core.chunk_rest(s__14897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14899),null);
}
} else {
var recipient_group = cljs.core.first(s__14897__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F5F5F5"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(recipient_group),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_plus_DASH_circle], null),"  ",cljs.core.cst$kw$numPlugins.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_volume_DASH_off], null),"  ",cljs.core.cst$kw$numSpeakers.cljs$core$IFn$_invoke$arity$1(recipient_group)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$badge,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_phone], null),"  ",cljs.core.cst$kw$numPhones.cljs$core$IFn$_invoke$arity$1(recipient_group)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,recipient_group], null)),crisis_dispatch$views$dispatch_panel_$_iter__14872_$_iter__14896(cljs.core.rest(s__14897__$2)));
}
} else {
return null;
}
break;
}
});})(recipient_groups,full_message,instruction,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
,null,null));
});})(recipient_groups,full_message,instruction,s__14873__$2,temp__4425__auto__,selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
;
return iter__5440__auto__(recipient_groups);
})())], null)], null);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,instruction], null));
})(),crisis_dispatch$views$dispatch_panel_$_iter__14872(cljs.core.rest(s__14873__$2)));
}
} else {
return null;
}
break;
}
});})(selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
,null,null));
});})(selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
;
return iter__5440__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(broadcast_instructions) : cljs.core.deref.call(null,broadcast_instructions)));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$background_DASH_color,"#00713A",cljs.core.cst$kw$text_DASH_shadow,"none"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination){
return (function (){
var G__14902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$send_DASH_broadcasts], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14902) : re_frame.core.dispatch.call(null,G__14902));
});})(selected_option,selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
], null),"SEND BROADCAST"], null)], null)], null)], null);
});
;})(selected_options,broadcast_instructions,fetched_full_messages,destination_mapping,parameter_that_determines_destination))
});
crisis_dispatch.views.not_found_panel = (function crisis_dispatch$views$not_found_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_danger,"404 "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"not found"], null);
});
if(typeof crisis_dispatch.views.panels !== 'undefined'){
} else {
crisis_dispatch.views.panels = (function (){var method_table__5581__auto__ = (function (){var G__14906 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14906) : cljs.core.atom.call(null,G__14906));
})();
var prefer_table__5582__auto__ = (function (){var G__14907 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14907) : cljs.core.atom.call(null,G__14907));
})();
var method_cache__5583__auto__ = (function (){var G__14908 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14908) : cljs.core.atom.call(null,G__14908));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__14909 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14909) : cljs.core.atom.call(null,G__14909));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crisis-dispatch.views","panels"),cljs.core.identity,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$init,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.initialization_panel], null);
}));
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$credentials,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.credentials_panel], null);
}));
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$home,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.home_panel], null);
}));
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$question,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.question_panel], null);
}));
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dispatch,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.dispatch_panel], null);
}));
crisis_dispatch.views.panels.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$not_DASH_found,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.not_found_panel], null);
}));
crisis_dispatch.views.main_panel = (function crisis_dispatch$views$main_panel(){
var active_panel = (function (){var G__14913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14913) : re_frame.core.subscribe.call(null,G__14913));
})();
var ic_handshake_successful_QMARK_ = (function (){var G__14914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14914) : re_frame.core.subscribe.call(null,G__14914));
})();
return ((function (active_panel,ic_handshake_successful_QMARK_){
return (function (){
if((cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ic_handshake_successful_QMARK_) : cljs.core.deref.call(null,ic_handshake_successful_QMARK_)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel)),cljs.core.cst$kw$init))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,"red",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_4$col_DASH_md_DASH_offset_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_center,"Unable to Proceed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_center,"The configuration for this dispatcher application no longer agrees with the state InformaCast is in."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$text_DASH_center,"Please ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/init",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#96D9F7"], null)], null),"upload"], null)," a new configuration file"], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_dispatch.views.navigation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$hidden_DASH_xs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"125px"], null)], null)], null),(function (){var G__14915 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel));
return (crisis_dispatch.views.panels.cljs$core$IFn$_invoke$arity$1 ? crisis_dispatch.views.panels.cljs$core$IFn$_invoke$arity$1(G__14915) : crisis_dispatch.views.panels.call(null,G__14915));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$hidden_DASH_sx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"50px"], null)], null)], null)], null)], null);
}
});
;})(active_panel,ic_handshake_successful_QMARK_))
});
