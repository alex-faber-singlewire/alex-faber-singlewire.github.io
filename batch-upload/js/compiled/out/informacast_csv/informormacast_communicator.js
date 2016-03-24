// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('informacast_csv.informormacast_communicator');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
informacast_csv.informormacast_communicator.valid_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
informacast_csv.informormacast_communicator.valid_encoded_credentials = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
informacast_csv.informormacast_communicator.successful_operations = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
informacast_csv.informormacast_communicator.unsuccessful_operations = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
informacast_csv.informormacast_communicator.add_successful_operation = (function informacast_csv$informormacast_communicator$add_successful_operation(operation){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.successful_operations,(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.successful_operations) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.successful_operations)),operation);
}));
});
informacast_csv.informormacast_communicator.add_unsuccessful_operation = (function informacast_csv$informormacast_communicator$add_unsuccessful_operation(operation){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.unsuccessful_operations,(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.unsuccessful_operations) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.unsuccessful_operations)),operation);
}));
});
informacast_csv.informormacast_communicator.get_successful_operations = (function informacast_csv$informormacast_communicator$get_successful_operations(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.successful_operations) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.successful_operations));
});
informacast_csv.informormacast_communicator.get_unsuccessful_operations = (function informacast_csv$informormacast_communicator$get_unsuccessful_operations(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.unsuccessful_operations) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.unsuccessful_operations));
});
informacast_csv.informormacast_communicator.interpolate_ip_address = (function informacast_csv$informormacast_communicator$interpolate_ip_address(ip_address){
return [cljs.core.str("https://"),cljs.core.str(ip_address),cljs.core.str("/InformaCast/RESTServices/V1/Admin/System/ldap/isLdapAuthenticationAllowed")].join('');
});
informacast_csv.informormacast_communicator.ping = (function informacast_csv$informormacast_communicator$ping(ip_address,success_callback,error_callback,finally_callback){
var url = informacast_csv.informormacast_communicator.interpolate_ip_address(ip_address);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$handler,((function (url){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.valid_route,ip_address) : cljs.core.reset_BANG_.call(null,informacast_csv.informormacast_communicator.valid_route,ip_address));

return (success_callback.cljs$core$IFn$_invoke$arity$0 ? success_callback.cljs$core$IFn$_invoke$arity$0() : success_callback.call(null));
});})(url))
,cljs.core.cst$kw$error_DASH_handler,((function (url){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.valid_route,null) : cljs.core.reset_BANG_.call(null,informacast_csv.informormacast_communicator.valid_route,null));

return (error_callback.cljs$core$IFn$_invoke$arity$0 ? error_callback.cljs$core$IFn$_invoke$arity$0() : error_callback.call(null));
});})(url))
,cljs.core.cst$kw$finally,((function (url){
return (function (){
return (finally_callback.cljs$core$IFn$_invoke$arity$0 ? finally_callback.cljs$core$IFn$_invoke$arity$0() : finally_callback.call(null));
});})(url))
,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
});
informacast_csv.informormacast_communicator.base_64_encode = (function informacast_csv$informormacast_communicator$base_64_encode(username,password){
var G__8566 = [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
return btoa(G__8566);
});
informacast_csv.informormacast_communicator.authenticate = (function informacast_csv$informormacast_communicator$authenticate(username,password,success_callback,error_callback,finally_callback){
var temp__4423__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.valid_route) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.valid_route));
if(cljs.core.truth_(temp__4423__auto__)){
var url = temp__4423__auto__;
var encoded_username_password = informacast_csv.informormacast_communicator.base_64_encode(username,password);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str("https://"),cljs.core.str(url),cljs.core.str("/InformaCast/RESTServices/V1/BasicAdmin/licensing")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$Authorization,[cljs.core.str("Basic "),cljs.core.str(encoded_username_password)].join('')], null),cljs.core.cst$kw$handler,((function (encoded_username_password,url,temp__4423__auto__){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.valid_encoded_credentials,encoded_username_password) : cljs.core.reset_BANG_.call(null,informacast_csv.informormacast_communicator.valid_encoded_credentials,encoded_username_password));

return (success_callback.cljs$core$IFn$_invoke$arity$0 ? success_callback.cljs$core$IFn$_invoke$arity$0() : success_callback.call(null));
});})(encoded_username_password,url,temp__4423__auto__))
,cljs.core.cst$kw$error_DASH_handler,((function (encoded_username_password,url,temp__4423__auto__){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.informormacast_communicator.valid_encoded_credentials,null) : cljs.core.reset_BANG_.call(null,informacast_csv.informormacast_communicator.valid_encoded_credentials,null));

return (error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1("Invalid Credentials") : error_callback.call(null,"Invalid Credentials"));
});})(encoded_username_password,url,temp__4423__auto__))
,cljs.core.cst$kw$finally,((function (encoded_username_password,url,temp__4423__auto__){
return (function (){
return (finally_callback.cljs$core$IFn$_invoke$arity$0 ? finally_callback.cljs$core$IFn$_invoke$arity$0() : finally_callback.call(null));
});})(encoded_username_password,url,temp__4423__auto__))
,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
} else {
return (error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1("You must have a valid InformaCast URL set before authenticating") : error_callback.call(null,"You must have a valid InformaCast URL set before authenticating"));
}
});
informacast_csv.informormacast_communicator.post_message = (function informacast_csv$informormacast_communicator$post_message(form_data,form_description){
var xhr = (new XMLHttpRequest());
var encoded_credentials = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.valid_encoded_credentials) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.valid_encoded_credentials));
var route = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.valid_route) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.valid_route));
if(cljs.core.truth_(encoded_credentials)){
if(cljs.core.truth_(informacast_csv.informormacast_communicator.valid_route)){
xhr.upload.addEventListener("error",((function (xhr,encoded_credentials,route){
return (function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("error: "),cljs.core.str(e)].join('')], 0));
});})(xhr,encoded_credentials,route))
,false);

xhr.open("POST",[cljs.core.str("https://"),cljs.core.str(route),cljs.core.str("/InformaCast/RESTServices/V1/Messages/formData/")].join(''),true);

xhr.onreadystatechange = ((function (xhr,encoded_credentials,route){
return (function (_){
var status = xhr.status;
if(((status < (300))) && ((status >= (200)))){
return informacast_csv.informormacast_communicator.add_successful_operation(form_description);
} else {
if(((status < (600))) && ((status >= (400)))){
var error_messages = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(xhr.responseText));
var seq__8571 = cljs.core.seq(error_messages);
var chunk__8572 = null;
var count__8573 = (0);
var i__8574 = (0);
while(true){
if((i__8574 < count__8573)){
var message = chunk__8572.cljs$core$IIndexed$_nth$arity$2(null,i__8574);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,form_description,cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8575 = seq__8571;
var G__8576 = chunk__8572;
var G__8577 = count__8573;
var G__8578 = (i__8574 + (1));
seq__8571 = G__8575;
chunk__8572 = G__8576;
count__8573 = G__8577;
i__8574 = G__8578;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8571);
if(temp__4425__auto__){
var seq__8571__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8571__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8571__$1);
var G__8579 = cljs.core.chunk_rest(seq__8571__$1);
var G__8580 = c__5310__auto__;
var G__8581 = cljs.core.count(c__5310__auto__);
var G__8582 = (0);
seq__8571 = G__8579;
chunk__8572 = G__8580;
count__8573 = G__8581;
i__8574 = G__8582;
continue;
} else {
var message = cljs.core.first(seq__8571__$1);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,form_description,cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8583 = cljs.core.next(seq__8571__$1);
var G__8584 = null;
var G__8585 = (0);
var G__8586 = (0);
seq__8571 = G__8583;
chunk__8572 = G__8584;
count__8573 = G__8585;
i__8574 = G__8586;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("form-description: "),cljs.core.str(form_description),cljs.core.str(" hasn't been added to the succesful or unsuccessful operation lists")].join('')], 0));

}
}
});})(xhr,encoded_credentials,route))
;

xhr.setRequestHeader("Authorization",[cljs.core.str("Basic "),cljs.core.str(encoded_credentials)].join(''));

return xhr.send(form_data);
} else {
return alert("You Must have a valid InformaCast URL set before authenticating");
}
} else {
return alert("You Must Have Valid InformaCast Credentials Set Before Adding Message Templates");
}
});
informacast_csv.informormacast_communicator.reset_operation_record = (function informacast_csv$informormacast_communicator$reset_operation_record(){
var G__8591_8595 = informacast_csv.informormacast_communicator.successful_operations;
var G__8592_8596 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8591_8595,G__8592_8596) : cljs.core.reset_BANG_.call(null,G__8591_8595,G__8592_8596));

var G__8593 = informacast_csv.informormacast_communicator.unsuccessful_operations;
var G__8594 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8593,G__8594) : cljs.core.reset_BANG_.call(null,G__8593,G__8594));
});
