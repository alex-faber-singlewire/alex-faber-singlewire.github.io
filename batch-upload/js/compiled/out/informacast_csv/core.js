// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('informacast_csv.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('reagent_forms.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('informacast_csv.zip_worker');
goog.require('informacast_csv.informormacast_communicator');
reagent.session.put_BANG_(cljs.core.cst$kw$enabled_DASH_pages,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$welcome,null,cljs.core.cst$kw$ip_DASH_address,null], null), null));
informacast_csv.core.enable_pages = (function informacast_csv$core$enable_pages(){
var args__5572__auto__ = [];
var len__5565__auto___10062 = arguments.length;
var i__5566__auto___10063 = (0);
while(true){
if((i__5566__auto___10063 < len__5565__auto___10062)){
args__5572__auto__.push((arguments[i__5566__auto___10063]));

var G__10064 = (i__5566__auto___10063 + (1));
i__5566__auto___10063 = G__10064;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic = (function (page_ids){
return reagent.session.put_BANG_(cljs.core.cst$kw$enabled_DASH_pages,cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (p1__10060_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages),p1__10060_SHARP_);
}),page_ids));
});

informacast_csv.core.enable_pages.cljs$lang$maxFixedArity = (0);

informacast_csv.core.enable_pages.cljs$lang$applyTo = (function (seq10061){
return informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10061));
});
informacast_csv.core.disable_pages = (function informacast_csv$core$disable_pages(){
var args__5572__auto__ = [];
var len__5565__auto___10067 = arguments.length;
var i__5566__auto___10068 = (0);
while(true){
if((i__5566__auto___10068 < len__5565__auto___10067)){
args__5572__auto__.push((arguments[i__5566__auto___10068]));

var G__10069 = (i__5566__auto___10068 + (1));
i__5566__auto___10068 = G__10069;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return informacast_csv.core.disable_pages.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

informacast_csv.core.disable_pages.cljs$core$IFn$_invoke$arity$variadic = (function (page_ids){
return reagent.session.put_BANG_(cljs.core.cst$kw$enabled_DASH_pages,cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (p1__10065_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages),p1__10065_SHARP_);
}),page_ids));
});

informacast_csv.core.disable_pages.cljs$lang$maxFixedArity = (0);

informacast_csv.core.disable_pages.cljs$lang$applyTo = (function (seq10066){
return informacast_csv.core.disable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10066));
});
informacast_csv.core.ip_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
informacast_csv.core.credentials_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
informacast_csv.core.import_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
informacast_csv.core.defaults_doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
informacast_csv.core.is_loading = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
informacast_csv.core.show_help = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
informacast_csv.core.set_loading_state = (function informacast_csv$core$set_loading_state(loading){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.core.is_loading,loading) : cljs.core.reset_BANG_.call(null,informacast_csv.core.is_loading,loading));
});
informacast_csv.core.toggle_help = (function informacast_csv$core$toggle_help(){
var G__10072 = informacast_csv.core.show_help;
var G__10073 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.show_help) : cljs.core.deref.call(null,informacast_csv.core.show_help)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10072,G__10073) : cljs.core.reset_BANG_.call(null,G__10072,G__10073));
});
informacast_csv.core.welcome_component = (function informacast_csv$core$welcome_component(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible_DASH_sm$visible_DASH_md$visible_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"150px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Welcome to the InformaCast Import Wizard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$narrow,"Before beginning, please make sure you're able to communicate with your InformaCast Server with this browser.\n   Doing so will allow the Import Wizard to effectively communicate the InformaCast API."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return informacast_csv.core.toggle_help().call(null);
})], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.show_help) : cljs.core.deref.call(null,informacast_csv.core.show_help)))?"Show Less Information":"Show More Information")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr$narrow], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.show_help) : cljs.core.deref.call(null,informacast_csv.core.show_help)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$narrow,"For example, when interacting with a local InformaCast server, navigating to this route: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"https://127.0.0.1:8444/InformaCast/admin"], null)," may bring up the following page in Chrome"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/Privacy_error_1.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"400px"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$narrow,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"*** If you don't see this page, but instead see the InformaCast Login page, you're free to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/ip-address",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"underline"], null)], null),"begin"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$narrow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),"If you see this page, please click the \"Advanced\" link, then click \"Proceed\" as shown below"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"images/Privacy_error_2.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"400px"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$narrow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"25px"], null)], null),"At this point you've allowed the InfomaCast Import Wizard to communicate with your InformaCast server, feel free to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/ip-address",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"underline"], null)], null),"begin"], null)," the wizard."], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/ip-address"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_width,"400px",cljs.core.cst$kw$margin_DASH_top,"25px",cljs.core.cst$kw$margin_DASH_bottom,"25px"], null)], null),"BEGIN ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_chevron_DASH_right], null)], null)], null)], null);
});
informacast_csv.core.submit_button = (function informacast_csv$core$submit_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.is_loading) : cljs.core.deref.call(null,informacast_csv.core.is_loading)),cljs.core.cst$kw$type,"submit"], null),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.is_loading) : cljs.core.deref.call(null,informacast_csv.core.is_loading)))?"Loading... ":"Submit "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_chevron_DASH_right], null)], null);
});
informacast_csv.core.ip_form_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
informacast_csv.core.set_loading_state(true);

e.preventDefault();

return informacast_csv.informormacast_communicator.ping(cljs.core.cst$kw$ip_DASH_address.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.ip_doc) : cljs.core.deref.call(null,informacast_csv.core.ip_doc))),(function (){
informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$credentials], 0));

return secretary.core.dispatch_BANG_("#/credentials");
}),(function (){
informacast_csv.core.disable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$credentials,cljs.core.cst$kw$import], 0));

return alert("Unable to find InformaCast server at specified URL");
}),(function (){
return informacast_csv.core.set_loading_state(false);
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,cljs.core.cst$kw$ip_DASH_address,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16pt"], null)], null),"ADDRESS:PORT"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$narrow,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$ip_DASH_address,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.submit_button], null)], null);
informacast_csv.core.ip_address_component = (function informacast_csv$core$ip_address_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$visible_DASH_md,((cljs.core.not(clojure.string.blank_QMARK_(cljs.core.cst$kw$ip_DASH_address.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.ip_doc) : cljs.core.deref.call(null,informacast_csv.core.ip_doc))))))?[cljs.core.str("The route we will ping to see if your server is online is: "),cljs.core.str(informacast_csv.informormacast_communicator.interpolate_ip_address(cljs.core.cst$kw$ip_DASH_address.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.ip_doc) : cljs.core.deref.call(null,informacast_csv.core.ip_doc)))))].join(''):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,informacast_csv.core.ip_form_template,informacast_csv.core.ip_doc], null)], null);
});
});
informacast_csv.core.credentials_form_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
informacast_csv.core.set_loading_state(true);

e.preventDefault();

return informacast_csv.informormacast_communicator.authenticate(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.credentials_doc) : cljs.core.deref.call(null,informacast_csv.core.credentials_doc))),cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.credentials_doc) : cljs.core.deref.call(null,informacast_csv.core.credentials_doc))),(function (){
informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$import], 0));

return secretary.core.dispatch_BANG_("#/import");
}),(function (p1__10074_SHARP_){
informacast_csv.core.disable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$import], 0));

return alert(p1__10074_SHARP_);
}),(function (){
return informacast_csv.core.set_loading_state(false);
}));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,cljs.core.cst$kw$username,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16pt"], null)], null),"Credentials"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$narrow$very,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$placeholder,"user name",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$narrow$very,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$field,cljs.core.cst$kw$password,cljs.core.cst$kw$placeholder,"password",cljs.core.cst$kw$id,cljs.core.cst$kw$password,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.submit_button], null)], null);
informacast_csv.core.credentials_component = (function informacast_csv$core$credentials_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,informacast_csv.core.credentials_form_template,informacast_csv.core.credentials_doc], null)], null);
});
});
informacast_csv.core.proceed_button = (function informacast_csv$core$proceed_button(){
if(cljs.core.contains_QMARK_(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages),cljs.core.cst$kw$defaults)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/defaults"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,"Proceed to Defaults ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$glyphicon$glyphicon_DASH_chevron_DASH_right], null)], null)], null);
} else {
return null;
}
});
informacast_csv.core.import_form_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SUBMITTED"], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$for,cljs.core.cst$kw$username,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"16pt"], null)], null),"IMPORT YOUR .ZIP FILE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$narrow,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$id,cljs.core.cst$kw$file_DASH_input,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
var file_10075 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_reader_10076 = (new FileReader());
file_reader_10076.onload = ((function (file_10075,file_reader_10076){
return (function (e__$1){
return informacast_csv.zip_worker.store_zip_in_memory(e__$1.target.result);
});})(file_10075,file_reader_10076))
;

file_reader_10076.readAsArrayBuffer(file_10075);

return informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$defaults], 0));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Process will begin immediately after selecting respective zip file"], null)], null);
informacast_csv.core.import_component = (function informacast_csv$core$import_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,informacast_csv.core.import_form_template,informacast_csv.core.import_doc], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.proceed_button], null)], null);
});
});
informacast_csv.core.record_default_value_BANG_ = (function informacast_csv$core$record_default_value_BANG_(id,value){
if(cljs.core.truth_(clojure.string.blank_QMARK_(value))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(informacast_csv.core.defaults_doc,cljs.core.dissoc,id);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(informacast_csv.core.defaults_doc,cljs.core.assoc,id,(cljs.core.truth_((function (){var or__4526__auto__ = (function (){var G__10080 = Number(value);
return isNaN(G__10080);
})();
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return !(typeof value === 'string');
}
})())?value:Number(value)));
}
});
informacast_csv.core.input_field = (function informacast_csv$core$input_field(omitted_attribute,message_attributes){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,(function (){var message_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attributes,omitted_attribute);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(message_attribute);
var label_text = clojure.string.replace(omitted_attribute,/[A-Z]/,((function (message_attribute,type){
return (function (p1__10081_SHARP_){
return [cljs.core.str(" "),cljs.core.str(p1__10081_SHARP_.toLowerCase())].join('');
});})(message_attribute,type))
);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$visible_DASH_md$visible_DASH_lg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_control$defaults_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),label_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$visible_DASH_xs$visible_DASH_sm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_control$defaults_DASH_label,label_text], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$string)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$integer))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attribute,cljs.core.cst$kw$allowable))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$integer))?"number":"text"),cljs.core.cst$kw$id,omitted_attribute,cljs.core.cst$kw$on_DASH_change,((function (message_attribute,type,label_text){
return (function (p1__10082_SHARP_){
return informacast_csv.core.record_default_value_BANG_(omitted_attribute,p1__10082_SHARP_.target.value);
});})(message_attribute,type,label_text))
,cljs.core.cst$kw$placeholder,[cljs.core.str("Default: "),cljs.core.str((function (){var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attribute,cljs.core.cst$kw$default);
if(cljs.core.truth_(temp__4423__auto__)){
var default$ = temp__4423__auto__;
return default$;
} else {
return "N/A";
}
})())].join('')], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$boolean))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,omitted_attribute,cljs.core.cst$kw$on_DASH_change,((function (message_attribute,type,label_text){
return (function (p1__10083_SHARP_){
return informacast_csv.core.record_default_value_BANG_(omitted_attribute,p1__10083_SHARP_.target.checked);
});})(message_attribute,type,label_text))
,cljs.core.cst$kw$defaultChecked,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attribute,cljs.core.cst$kw$default)], null),[cljs.core.str("  -  Default: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attribute,cljs.core.cst$kw$default))].join('')], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$confirmation_DASH_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,omitted_attribute,cljs.core.cst$kw$onChange,((function (message_attribute,type,label_text){
return (function (p1__10084_SHARP_){
return informacast_csv.core.record_default_value_BANG_(omitted_attribute,p1__10084_SHARP_.target.value);
});})(message_attribute,type,label_text))
], null),(function (){var iter__5279__auto__ = ((function (message_attribute,type,label_text){
return (function informacast_csv$core$input_field_$_iter__10091(s__10092){
return (new cljs.core.LazySeq(null,((function (message_attribute,type,label_text){
return (function (){
var s__10092__$1 = s__10092;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10092__$1);
if(temp__4425__auto__){
var s__10092__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10092__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10092__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10094 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10093 = (0);
while(true){
if((i__10093 < size__5278__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10093);
cljs.core.chunk_append(b__10094,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,option], null),option], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null)));

var G__10097 = (i__10093 + (1));
i__10093 = G__10097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10094),informacast_csv$core$input_field_$_iter__10091(cljs.core.chunk_rest(s__10092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10094),null);
}
} else {
var option = cljs.core.first(s__10092__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,option], null),option], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,option], null)),informacast_csv$core$input_field_$_iter__10091(cljs.core.rest(s__10092__$2)));
}
} else {
return null;
}
break;
}
});})(message_attribute,type,label_text))
,null,null));
});})(message_attribute,type,label_text))
;
return iter__5279__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(message_attribute,cljs.core.cst$kw$allowable));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("Not Implemented: "),cljs.core.str(omitted_attribute)].join('')], null)
)))], null)], null);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,omitted_attribute], null));
});
informacast_csv.core.defaults_component = (function informacast_csv$core$defaults_component(){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible_DASH_sm$visible_DASH_md$visible_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"150px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Defaults"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"These fields are the remaining message attributes that you didn't specify any values for in your .csv file.  Feel free\n     to set default values for all soon to be imported messages here"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,(function (e){
e.preventDefault();

informacast_csv.zip_worker.begin_adding_messages((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.core.defaults_doc) : cljs.core.deref.call(null,informacast_csv.core.defaults_doc)));

informacast_csv.core.enable_pages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$results], 0));

return secretary.core.dispatch_BANG_("#/results");
})], null),(function (){var iter__5279__auto__ = (function informacast_csv$core$defaults_component_$_iter__10104(s__10105){
return (new cljs.core.LazySeq(null,(function (){
var s__10105__$1 = s__10105;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10105__$1);
if(temp__4425__auto__){
var s__10105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10105__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10105__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10107 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10106 = (0);
while(true){
if((i__10106 < size__5278__auto__)){
var omitted_attribute = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10106);
cljs.core.chunk_append(b__10107,informacast_csv.core.input_field(omitted_attribute,informacast_csv.zip_worker.all_message_attributes));

var G__10110 = (i__10106 + (1));
i__10106 = G__10110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10107),informacast_csv$core$defaults_component_$_iter__10104(cljs.core.chunk_rest(s__10105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10107),null);
}
} else {
var omitted_attribute = cljs.core.first(s__10105__$2);
return cljs.core.cons(informacast_csv.core.input_field(omitted_attribute,informacast_csv.zip_worker.all_message_attributes),informacast_csv$core$defaults_component_$_iter__10104(cljs.core.rest(s__10105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(cljs.core.vec(informacast_csv.zip_worker.get_omitted_attributes()));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.submit_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"50px"], null)], null)], null)], null);
});
});
informacast_csv.core.results_component = (function informacast_csv$core$results_component(){
if((cljs.core.empty_QMARK_(informacast_csv.informormacast_communicator.get_successful_operations())) && (cljs.core.empty_QMARK_(informacast_csv.informormacast_communicator.get_unsuccessful_operations()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Processing Operations..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"Processing should be complete within a couple of seconds"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible_DASH_sm$visible_DASH_md$visible_DASH_lg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"150px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"RESULTS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Successful Operations"], null),(function (){var iter__5279__auto__ = (function informacast_csv$core$results_component_$_iter__10129(s__10130){
return (new cljs.core.LazySeq(null,(function (){
var s__10130__$1 = s__10130;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10130__$1);
if(temp__4425__auto__){
var s__10130__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10130__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10130__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10132 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10131 = (0);
while(true){
if((i__10131 < size__5278__auto__)){
var operation_description = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10131);
cljs.core.chunk_append(b__10132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_primary,[cljs.core.str("Description: "),cljs.core.str(operation_description)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,operation_description], null)));

var G__10147 = (i__10131 + (1));
i__10131 = G__10147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10132),informacast_csv$core$results_component_$_iter__10129(cljs.core.chunk_rest(s__10130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10132),null);
}
} else {
var operation_description = cljs.core.first(s__10130__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_primary,[cljs.core.str("Description: "),cljs.core.str(operation_description)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,operation_description], null)),informacast_csv$core$results_component_$_iter__10129(cljs.core.rest(s__10130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(informacast_csv.informormacast_communicator.get_successful_operations());
})(),(cljs.core.truth_(cljs.core.not_empty(informacast_csv.informormacast_communicator.get_unsuccessful_operations()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Unsuccessful Operations"], null),(function (){var iter__5279__auto__ = (function informacast_csv$core$results_component_$_iter__10135(s__10136){
return (new cljs.core.LazySeq(null,(function (){
var s__10136__$1 = s__10136;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10136__$1);
if(temp__4425__auto__){
var s__10136__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10136__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10136__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10138 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10137 = (0);
while(true){
if((i__10137 < size__5278__auto__)){
var operation_description = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10137);
cljs.core.chunk_append(b__10138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_primary,[cljs.core.str("Description: "),cljs.core.str(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(operation_description))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_danger,[cljs.core.str("Status: "),cljs.core.str(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(operation_description))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("fieldName: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$field_DASH_name))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("fieldValue: "),cljs.core.str((function (){var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$field_DASH_value);
if(cljs.core.truth_(temp__4423__auto__)){
var field_value = temp__4423__auto__;
return field_value;
} else {
return "null";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("messageType: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$message_DASH_type))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("message: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,operation_description], null)));

var G__10148 = (i__10137 + (1));
i__10137 = G__10148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10138),informacast_csv$core$results_component_$_iter__10135(cljs.core.chunk_rest(s__10136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10138),null);
}
} else {
var operation_description = cljs.core.first(s__10136__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_primary,[cljs.core.str("Description: "),cljs.core.str(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(operation_description))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$text_DASH_danger,[cljs.core.str("Status: "),cljs.core.str(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(operation_description))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("fieldName: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$field_DASH_name))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("fieldValue: "),cljs.core.str((function (){var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$field_DASH_value);
if(cljs.core.truth_(temp__4423__auto__)){
var field_value = temp__4423__auto__;
return field_value;
} else {
return "null";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("messageType: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$message_DASH_type))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("message: "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(operation_description,cljs.core.cst$kw$message))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,operation_description], null)),informacast_csv$core$results_component_$_iter__10135(cljs.core.rest(s__10136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(informacast_csv.informormacast_communicator.get_unsuccessful_operations());
})()], null):null),(cljs.core.truth_(cljs.core.not_empty(informacast_csv.zip_worker.get_missing_assets()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Missing Assets"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"These assets are listed in your ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"informcast_import.csv"], null)," or set in your global defaults but cannot be found within your .zip file.  ","They may be the reasons why some of the operations listed above are failing"], null),(function (){var iter__5279__auto__ = (function informacast_csv$core$results_component_$_iter__10141(s__10142){
return (new cljs.core.LazySeq(null,(function (){
var s__10142__$1 = s__10142;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10142__$1);
if(temp__4425__auto__){
var s__10142__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10142__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10142__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10144 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10143 = (0);
while(true){
if((i__10143 < size__5278__auto__)){
var asset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10143);
cljs.core.chunk_append(b__10144,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,asset], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,asset], null)));

var G__10149 = (i__10143 + (1));
i__10143 = G__10149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10144),informacast_csv$core$results_component_$_iter__10141(cljs.core.chunk_rest(s__10142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10144),null);
}
} else {
var asset = cljs.core.first(s__10142__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,asset], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,asset], null)),informacast_csv$core$results_component_$_iter__10141(cljs.core.rest(s__10142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(informacast_csv.zip_worker.get_missing_assets());
})()], null):null)], null);
}
});
informacast_csv.core.not_found_component = (function informacast_csv$core$not_found_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"cover-heading"], null),"PAGE NOT FOUND"], null);
});
informacast_csv.core.page_links = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$welcome,cljs.core.cst$kw$title,"1 - Welcome",cljs.core.cst$kw$url,"#/",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.welcome_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_welcome_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$welcome_DASH_component,"src/cljs/informacast_csv/core.cljs",24,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.welcome_component)?informacast_csv.core.welcome_component.cljs$lang$test:null)]))], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$ip_DASH_address,cljs.core.cst$kw$title,"2 - IP Address",cljs.core.cst$kw$url,"#/ip-address",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.ip_address_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_ip_DASH_address_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$ip_DASH_address_DASH_component,"src/cljs/informacast_csv/core.cljs",27,1,89,89,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.ip_address_component)?informacast_csv.core.ip_address_component.cljs$lang$test:null)]))], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$credentials,cljs.core.cst$kw$title,"3 - Credentials",cljs.core.cst$kw$url,"#/credentials",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.credentials_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_credentials_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$credentials_DASH_component,"src/cljs/informacast_csv/core.cljs",28,1,122,122,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.credentials_component)?informacast_csv.core.credentials_component.cljs$lang$test:null)]))], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$import,cljs.core.cst$kw$title,"4 - Import",cljs.core.cst$kw$url,"#/import",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.import_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_import_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$import_DASH_component,"src/cljs/informacast_csv/core.cljs",23,1,151,151,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.import_component)?informacast_csv.core.import_component.cljs$lang$test:null)]))], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$defaults,cljs.core.cst$kw$title,"5 - Defaults",cljs.core.cst$kw$url,"#/defaults",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.defaults_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_defaults_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$defaults_DASH_component,"src/cljs/informacast_csv/core.cljs",25,1,192,192,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.defaults_component)?informacast_csv.core.defaults_component.cljs$lang$test:null)]))], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$results,cljs.core.cst$kw$title,"6 - Results",cljs.core.cst$kw$url,"#/results",cljs.core.cst$kw$component,new cljs.core.Var(function(){return informacast_csv.core.results_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_results_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$results_DASH_component,"src/cljs/informacast_csv/core.cljs",24,1,209,209,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.results_component)?informacast_csv.core.results_component.cljs$lang$test:null)]))], null)], null);
informacast_csv.core.set_current_page = (function informacast_csv$core$set_current_page(page_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.cst$kw$not_DASH_found)){
reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return informacast_csv.core.not_found_component;},cljs.core.cst$sym$informacast_DASH_csv$core_SLASH_not_DASH_found_DASH_component,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$core,cljs.core.cst$sym$not_DASH_found_DASH_component,"src/cljs/informacast_csv/core.cljs",26,1,242,242,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(informacast_csv.core.not_found_component)?informacast_csv.core.not_found_component.cljs$lang$test:null)])));

return reagent.session.put_BANG_(cljs.core.cst$kw$active_DASH_link,null);
} else {
reagent.session.put_BANG_(cljs.core.cst$kw$current_DASH_page,cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10150_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__10150_SHARP_),page_id);
}),informacast_csv.core.page_links))));

return reagent.session.put_BANG_(cljs.core.cst$kw$active_DASH_link,page_id);
}
});
informacast_csv.core.navigation = (function informacast_csv$core$navigation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"masthead clearfix"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"inner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"masthead-brand"], null),"InformaCast Import Wizard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"nav masthead-nav"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5279__auto__ = (function informacast_csv$core$navigation_$_iter__10157(s__10158){
return (new cljs.core.LazySeq(null,(function (){
var s__10158__$1 = s__10158;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10158__$1);
if(temp__4425__auto__){
var s__10158__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10158__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10158__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10160 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10159 = (0);
while(true){
if((i__10159 < size__5278__auto__)){
var link = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10159);
cljs.core.chunk_append(b__10160,(function (){var link_enabled_QMARK_ = cljs.core.contains_QMARK_(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(link));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(link),reagent.session.get(cljs.core.cst$kw$active_DASH_link)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,((link_enabled_QMARK_)?cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(link):(function (){var route = cljs.core.name(cljs.core.last(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"welcome")){
return "#/";
} else {
return [cljs.core.str("#/"),cljs.core.str(route)].join('');
}
})()),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,((link_enabled_QMARK_)?"pointer":"not-allowed"),cljs.core.cst$kw$color,((link_enabled_QMARK_)?null:"#FBC6D3")], null)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(link)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,link], null));
})());

var G__10163 = (i__10159 + (1));
i__10159 = G__10163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10160),informacast_csv$core$navigation_$_iter__10157(cljs.core.chunk_rest(s__10158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10160),null);
}
} else {
var link = cljs.core.first(s__10158__$2);
return cljs.core.cons((function (){var link_enabled_QMARK_ = cljs.core.contains_QMARK_(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(link));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(link),reagent.session.get(cljs.core.cst$kw$active_DASH_link)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,((link_enabled_QMARK_)?cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(link):(function (){var route = cljs.core.name(cljs.core.last(reagent.session.get(cljs.core.cst$kw$enabled_DASH_pages)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,"welcome")){
return "#/";
} else {
return [cljs.core.str("#/"),cljs.core.str(route)].join('');
}
})()),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,((link_enabled_QMARK_)?"pointer":"not-allowed"),cljs.core.cst$kw$color,((link_enabled_QMARK_)?null:"#FBC6D3")], null)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(link)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,link], null));
})(),informacast_csv$core$navigation_$_iter__10157(cljs.core.rest(s__10158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(informacast_csv.core.page_links);
})())], null)], null)], null)], null);
});
informacast_csv.core.page = (function informacast_csv$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cover_DASH_container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.navigation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"inner cover"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get(cljs.core.cst$kw$current_DASH_page)], null)], null)], null);
});
informacast_csv.core.render_app = (function informacast_csv$core$render_app(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [informacast_csv.core.page], null),document.getElementById("app"));
});
/**
 * Listens for html5 route changes and notifies secretary of the event
 */
informacast_csv.core.hook_browser_navigation_BANG_ = (function informacast_csv$core$hook_browser_navigation_BANG_(){
var G__10169 = (new goog.History());
var G__10170_10173 = G__10169;
var G__10171_10174 = goog.history.EventType.NAVIGATE;
var G__10172_10175 = ((function (G__10170_10173,G__10171_10174,G__10169){
return (function (p1__10164_SHARP_){
return secretary.core.dispatch_BANG_(p1__10164_SHARP_.token);
});})(G__10170_10173,G__10171_10174,G__10169))
;
goog.events.listen(G__10170_10173,G__10171_10174,G__10172_10175);

G__10169.setEnabled(true);

return G__10169;
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
informacast_csv.core.set_current_page(cljs.core.cst$kw$welcome);
var action__9953__auto___10179 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10176 = params__9954__auto__;
var map__10176__$1 = ((((!((map__10176 == null)))?((((map__10176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10176):map__10176);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$welcome);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10178 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$welcome);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__9953__auto___10179);

var action__9953__auto___10183 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10180 = params__9954__auto__;
var map__10180__$1 = ((((!((map__10180 == null)))?((((map__10180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10180):map__10180);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$ip_DASH_address);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10182 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$ip_DASH_address);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/ip-address",action__9953__auto___10183);

var action__9953__auto___10187 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10184 = params__9954__auto__;
var map__10184__$1 = ((((!((map__10184 == null)))?((((map__10184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10184):map__10184);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$credentials);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10186 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$credentials);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/credentials",action__9953__auto___10187);

var action__9953__auto___10191 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10188 = params__9954__auto__;
var map__10188__$1 = ((((!((map__10188 == null)))?((((map__10188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10188):map__10188);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$import);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10190 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$import);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/import",action__9953__auto___10191);

var action__9953__auto___10195 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10192 = params__9954__auto__;
var map__10192__$1 = ((((!((map__10192 == null)))?((((map__10192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10192):map__10192);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$defaults);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10194 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$defaults);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/defaults",action__9953__auto___10195);

var action__9953__auto___10199 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10196 = params__9954__auto__;
var map__10196__$1 = ((((!((map__10196 == null)))?((((map__10196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10196):map__10196);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$results);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10198 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$results);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/results",action__9953__auto___10199);

var action__9953__auto___10203 = (function (params__9954__auto__){
if(cljs.core.map_QMARK_(params__9954__auto__)){
var map__10200 = params__9954__auto__;
var map__10200__$1 = ((((!((map__10200 == null)))?((((map__10200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10200):map__10200);
return informacast_csv.core.set_current_page(cljs.core.cst$kw$not_DASH_found);
} else {
if(cljs.core.vector_QMARK_(params__9954__auto__)){
var vec__10202 = params__9954__auto__;
return informacast_csv.core.set_current_page(cljs.core.cst$kw$not_DASH_found);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__9953__auto___10203);

/**
 * Initializes the application by wiring our html5 routing with secretary and rendering our react application
 */
informacast_csv.core.init = (function informacast_csv$core$init(){
React.initializeTouchEvents(true);

cljs.core.enable_console_print_BANG_();

informacast_csv.core.hook_browser_navigation_BANG_();

return informacast_csv.core.render_app();
});
goog.exportSymbol('informacast_csv.core.init', informacast_csv.core.init);
