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
var G__8808 = [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
return btoa(G__8808);
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
informacast_csv.informormacast_communicator.build_form_data = (function informacast_csv$informormacast_communicator$build_form_data(attributes){
var form_data = (new FormData());
var seq__8815_8821 = cljs.core.seq(attributes);
var chunk__8816_8822 = null;
var count__8817_8823 = (0);
var i__8818_8824 = (0);
while(true){
if((i__8818_8824 < count__8817_8823)){
var vec__8819_8825 = chunk__8816_8822.cljs$core$IIndexed$_nth$arity$2(null,i__8818_8824);
var key_8826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8819_8825,(0),null);
var val_8827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8819_8825,(1),null);
form_data.append(key_8826,val_8827);

var G__8828 = seq__8815_8821;
var G__8829 = chunk__8816_8822;
var G__8830 = count__8817_8823;
var G__8831 = (i__8818_8824 + (1));
seq__8815_8821 = G__8828;
chunk__8816_8822 = G__8829;
count__8817_8823 = G__8830;
i__8818_8824 = G__8831;
continue;
} else {
var temp__4425__auto___8832 = cljs.core.seq(seq__8815_8821);
if(temp__4425__auto___8832){
var seq__8815_8833__$1 = temp__4425__auto___8832;
if(cljs.core.chunked_seq_QMARK_(seq__8815_8833__$1)){
var c__5310__auto___8834 = cljs.core.chunk_first(seq__8815_8833__$1);
var G__8835 = cljs.core.chunk_rest(seq__8815_8833__$1);
var G__8836 = c__5310__auto___8834;
var G__8837 = cljs.core.count(c__5310__auto___8834);
var G__8838 = (0);
seq__8815_8821 = G__8835;
chunk__8816_8822 = G__8836;
count__8817_8823 = G__8837;
i__8818_8824 = G__8838;
continue;
} else {
var vec__8820_8839 = cljs.core.first(seq__8815_8833__$1);
var key_8840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8820_8839,(0),null);
var val_8841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8820_8839,(1),null);
form_data.append(key_8840,val_8841);

var G__8842 = cljs.core.next(seq__8815_8833__$1);
var G__8843 = null;
var G__8844 = (0);
var G__8845 = (0);
seq__8815_8821 = G__8842;
chunk__8816_8822 = G__8843;
count__8817_8823 = G__8844;
i__8818_8824 = G__8845;
continue;
}
} else {
}
}
break;
}

return form_data;
});
informacast_csv.informormacast_communicator.update_message = (function informacast_csv$informormacast_communicator$update_message(messageId,attributes,form_description){
var xhr = (new XMLHttpRequest());
var encoded_credentials = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.valid_encoded_credentials) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.valid_encoded_credentials));
var route = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.informormacast_communicator.valid_route) : cljs.core.deref.call(null,informacast_csv.informormacast_communicator.valid_route));
if(cljs.core.truth_(encoded_credentials)){
if(cljs.core.truth_(route)){
xhr.upload.addEventListener("error",((function (xhr,encoded_credentials,route){
return (function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("error: "),cljs.core.str(e)].join('')], 0));
});})(xhr,encoded_credentials,route))
,false);

xhr.open("PUT",[cljs.core.str("https://"),cljs.core.str(route),cljs.core.str("/InformaCast/RESTServices/V1/Messages/formData/"),cljs.core.str(messageId)].join(''),true);

xhr.onreadystatechange = ((function (xhr,encoded_credentials,route){
return (function (_){
var status = xhr.status;
if(((status < (300))) && ((status >= (200))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4)))){
return informacast_csv.informormacast_communicator.add_successful_operation([cljs.core.str("[Updated] "),cljs.core.str(form_description)].join(''));
} else {
if(((status < (600))) && ((status >= (400)))){
var error_messages = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(xhr.responseText));
var seq__8850 = cljs.core.seq(error_messages);
var chunk__8851 = null;
var count__8852 = (0);
var i__8853 = (0);
while(true){
if((i__8853 < count__8852)){
var message = chunk__8851.cljs$core$IIndexed$_nth$arity$2(null,i__8853);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,[cljs.core.str("[Updated] "),cljs.core.str(form_description)].join(''),cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8854 = seq__8850;
var G__8855 = chunk__8851;
var G__8856 = count__8852;
var G__8857 = (i__8853 + (1));
seq__8850 = G__8854;
chunk__8851 = G__8855;
count__8852 = G__8856;
i__8853 = G__8857;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8850);
if(temp__4425__auto__){
var seq__8850__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8850__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8850__$1);
var G__8858 = cljs.core.chunk_rest(seq__8850__$1);
var G__8859 = c__5310__auto__;
var G__8860 = cljs.core.count(c__5310__auto__);
var G__8861 = (0);
seq__8850 = G__8858;
chunk__8851 = G__8859;
count__8852 = G__8860;
i__8853 = G__8861;
continue;
} else {
var message = cljs.core.first(seq__8850__$1);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,[cljs.core.str("[Updated] "),cljs.core.str(form_description)].join(''),cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8862 = cljs.core.next(seq__8850__$1);
var G__8863 = null;
var G__8864 = (0);
var G__8865 = (0);
seq__8850 = G__8862;
chunk__8851 = G__8863;
count__8852 = G__8864;
i__8853 = G__8865;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});})(xhr,encoded_credentials,route))
;

xhr.setRequestHeader("Authorization",[cljs.core.str("Basic "),cljs.core.str(encoded_credentials)].join(''));

return xhr.send(informacast_csv.informormacast_communicator.build_form_data(attributes));
} else {
return alert("You Must have a valid InformaCast URL set before authenticating");
}
} else {
return alert("You Must Have Valid InformaCast Credentials Set Before Adding Message Templates");
}
});
informacast_csv.informormacast_communicator.post_message = (function informacast_csv$informormacast_communicator$post_message(form_data,form_description,success_options,success_cb){
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
if(((status < (300))) && ((status >= (200))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4)))){
var response = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(xhr.response));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(success_options,"messageAudioScript"))){
var G__8873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,"messageId");
var G__8874 = success_options;
var G__8875 = form_description;
return (success_cb.cljs$core$IFn$_invoke$arity$3 ? success_cb.cljs$core$IFn$_invoke$arity$3(G__8873,G__8874,G__8875) : success_cb.call(null,G__8873,G__8874,G__8875));
} else {
return informacast_csv.informormacast_communicator.add_successful_operation([cljs.core.str("[Created] "),cljs.core.str(form_description)].join(''));
}
} else {
if(((status < (600))) && ((status >= (400)))){
var error_messages = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(xhr.responseText));
var seq__8876 = cljs.core.seq(error_messages);
var chunk__8877 = null;
var count__8878 = (0);
var i__8879 = (0);
while(true){
if((i__8879 < count__8878)){
var message = chunk__8877.cljs$core$IIndexed$_nth$arity$2(null,i__8879);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,[cljs.core.str("[Created] "),cljs.core.str(form_description)].join(''),cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8880 = seq__8876;
var G__8881 = chunk__8877;
var G__8882 = count__8878;
var G__8883 = (i__8879 + (1));
seq__8876 = G__8880;
chunk__8877 = G__8881;
count__8878 = G__8882;
i__8879 = G__8883;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8876);
if(temp__4425__auto__){
var seq__8876__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8876__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8876__$1);
var G__8884 = cljs.core.chunk_rest(seq__8876__$1);
var G__8885 = c__5310__auto__;
var G__8886 = cljs.core.count(c__5310__auto__);
var G__8887 = (0);
seq__8876 = G__8884;
chunk__8877 = G__8885;
count__8878 = G__8886;
i__8879 = G__8887;
continue;
} else {
var message = cljs.core.first(seq__8876__$1);
informacast_csv.informormacast_communicator.add_unsuccessful_operation(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$description,[cljs.core.str("[Created] "),cljs.core.str(form_description)].join(''),cljs.core.cst$kw$status,status,cljs.core.cst$kw$field_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldName"),cljs.core.cst$kw$field_DASH_value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"fieldValue"),cljs.core.cst$kw$message_DASH_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"messageType"),cljs.core.cst$kw$message,cljs.core.get.cljs$core$IFn$_invoke$arity$2(message,"message")], null));

var G__8888 = cljs.core.next(seq__8876__$1);
var G__8889 = null;
var G__8890 = (0);
var G__8891 = (0);
seq__8876 = G__8888;
chunk__8877 = G__8889;
count__8878 = G__8890;
i__8879 = G__8891;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
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
var G__8896_8900 = informacast_csv.informormacast_communicator.successful_operations;
var G__8897_8901 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8896_8900,G__8897_8901) : cljs.core.reset_BANG_.call(null,G__8896_8900,G__8897_8901));

var G__8898 = informacast_csv.informormacast_communicator.unsuccessful_operations;
var G__8899 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8898,G__8899) : cljs.core.reset_BANG_.call(null,G__8898,G__8899));
});
