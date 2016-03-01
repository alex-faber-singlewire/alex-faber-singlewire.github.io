// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.views.selector');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent_forms.core');
crisis_proto.views.selector.selector_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
crisis_proto.views.selector.remove_entry = (function crisis_proto$views$selector$remove_entry(entries,entry_to_remove){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([entry_to_remove], true),entries));
});
crisis_proto.views.selector.add__GT_remove_BANG_ = (function crisis_proto$views$selector$add__GT_remove_BANG_(entry){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crisis_proto.views.selector.selector_db,cljs.core.update,cljs.core.cst$kw$remove_DASH_column,cljs.core.conj,cljs.core.array_seq([entry], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crisis_proto.views.selector.selector_db,cljs.core.update,cljs.core.cst$kw$add_DASH_column,crisis_proto.views.selector.remove_entry,cljs.core.array_seq([entry], 0));
});
crisis_proto.views.selector.remove__GT_add_BANG_ = (function crisis_proto$views$selector$remove__GT_add_BANG_(entry){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crisis_proto.views.selector.selector_db,cljs.core.update,cljs.core.cst$kw$add_DASH_column,cljs.core.conj,cljs.core.array_seq([entry], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crisis_proto.views.selector.selector_db,cljs.core.update,cljs.core.cst$kw$remove_DASH_column,crisis_proto.views.selector.remove_entry,cljs.core.array_seq([entry], 0));
});
crisis_proto.views.selector.filter_BANG_ = (function crisis_proto$views$selector$filter_BANG_(content_key){
var filter_str = cljs.core.cst$kw$filter_DASH_str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)));
var initial_filtered_messages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (filter_str){
return (function (p1__22042_SHARP_){
return cljs.core.re_find(RegExp(filter_str,"i"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__22042_SHARP_,content_key));
});})(filter_str))
,cljs.core.cst$kw$initial_DASH_content.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db))));
var filtered_messages_sans_selected = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (filter_str,initial_filtered_messages){
return (function (m){
if(cljs.core.truth_(cljs.core.some(((function (filter_str,initial_filtered_messages){
return (function (p1__22043_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22043_SHARP_,m);
});})(filter_str,initial_filtered_messages))
,cljs.core.cst$kw$remove_DASH_column.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)))))){
return null;
} else {
return m;
}
});})(filter_str,initial_filtered_messages))
,initial_filtered_messages);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crisis_proto.views.selector.selector_db,cljs.core.assoc,cljs.core.cst$kw$add_DASH_column,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,filtered_messages_sans_selected)));
});
crisis_proto.views.selector.add_button = (function crisis_proto$views$selector$add_button(entry,content_key,main_button_click_callback){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_target,"#myModal",cljs.core.cst$kw$data_DASH_toggle,"modal",cljs.core.cst$kw$on_DASH_click,(function (){
return (main_button_click_callback.cljs$core$IFn$_invoke$arity$1 ? main_button_click_callback.cljs$core$IFn$_invoke$arity$1(entry) : main_button_click_callback.call(null,entry));
})], null),(cljs.core.truth_(content_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(entry,content_key):entry)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
crisis_proto.views.selector.add__GT_remove_BANG_(entry);

return crisis_proto.views.selector.filter_BANG_(content_key);
})], null),">"], null)], null);
});
});
crisis_proto.views.selector.remove_button = (function crisis_proto$views$selector$remove_button(entry,content_key,main_button_click_callback){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_selector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
crisis_proto.views.selector.remove__GT_add_BANG_(entry);

return crisis_proto.views.selector.filter_BANG_(content_key);
})], null),"<"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_target,"#myModal",cljs.core.cst$kw$data_DASH_toggle,"modal",cljs.core.cst$kw$on_DASH_click,(function (){
return (main_button_click_callback.cljs$core$IFn$_invoke$arity$1 ? main_button_click_callback.cljs$core$IFn$_invoke$arity$1(entry) : main_button_click_callback.call(null,entry));
})], null),(cljs.core.truth_(content_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(entry,content_key):entry)], null)], null)], null);
});
});
crisis_proto.views.selector.init = (function crisis_proto$views$selector$init(var_args){
var args__5659__auto__ = [];
var len__5652__auto___22068 = arguments.length;
var i__5653__auto___22069 = (0);
while(true){
if((i__5653__auto___22069 < len__5652__auto___22068)){
args__5659__auto__.push((arguments[i__5653__auto___22069]));

var G__22070 = (i__5653__auto___22069 + (1));
i__5653__auto___22069 = G__22070;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.views.selector.init.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.views.selector.init.cljs$core$IFn$_invoke$arity$variadic = (function (p__22046){
var map__22047 = p__22046;
var map__22047__$1 = ((((!((map__22047 == null)))?((((map__22047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22047):map__22047);
var initial_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$initial_DASH_content);
var selected_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$selected_DASH_content);
var content_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$content_DASH_key);
var left_column_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22047__$1,cljs.core.cst$kw$left_DASH_column_DASH_title,"Selectable");
var right_column_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22047__$1,cljs.core.cst$kw$right_DASH_column_DASH_title,"Selected");
var main_button_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$main_DASH_button_DASH_click_DASH_callback);
var save_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$save_DASH_callback);
var cancel_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22047__$1,cljs.core.cst$kw$cancel_DASH_callback);

var G__22049_22071 = crisis_proto.views.selector.selector_db;
var G__22050_22072 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$initial_DASH_content,initial_content,cljs.core.cst$kw$filter_DASH_str,""], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22049_22071,G__22050_22072) : cljs.core.reset_BANG_.call(null,G__22049_22071,G__22050_22072));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crisis_proto.views.selector.selector_db,cljs.core.assoc,cljs.core.cst$kw$add_DASH_column,initial_content);

var seq__22051_22073 = cljs.core.seq(selected_content);
var chunk__22052_22074 = null;
var count__22053_22075 = (0);
var i__22054_22076 = (0);
while(true){
if((i__22054_22076 < count__22053_22075)){
var selected_entry_22077 = chunk__22052_22074.cljs$core$IIndexed$_nth$arity$2(null,i__22054_22076);
crisis_proto.views.selector.add__GT_remove_BANG_(selected_entry_22077);

var G__22078 = seq__22051_22073;
var G__22079 = chunk__22052_22074;
var G__22080 = count__22053_22075;
var G__22081 = (i__22054_22076 + (1));
seq__22051_22073 = G__22078;
chunk__22052_22074 = G__22079;
count__22053_22075 = G__22080;
i__22054_22076 = G__22081;
continue;
} else {
var temp__4425__auto___22082 = cljs.core.seq(seq__22051_22073);
if(temp__4425__auto___22082){
var seq__22051_22083__$1 = temp__4425__auto___22082;
if(cljs.core.chunked_seq_QMARK_(seq__22051_22083__$1)){
var c__5397__auto___22084 = cljs.core.chunk_first(seq__22051_22083__$1);
var G__22085 = cljs.core.chunk_rest(seq__22051_22083__$1);
var G__22086 = c__5397__auto___22084;
var G__22087 = cljs.core.count(c__5397__auto___22084);
var G__22088 = (0);
seq__22051_22073 = G__22085;
chunk__22052_22074 = G__22086;
count__22053_22075 = G__22087;
i__22054_22076 = G__22088;
continue;
} else {
var selected_entry_22089 = cljs.core.first(seq__22051_22083__$1);
crisis_proto.views.selector.add__GT_remove_BANG_(selected_entry_22089);

var G__22090 = cljs.core.next(seq__22051_22083__$1);
var G__22091 = null;
var G__22092 = (0);
var G__22093 = (0);
seq__22051_22073 = G__22090;
chunk__22052_22074 = G__22091;
count__22053_22075 = G__22092;
i__22054_22076 = G__22093;
continue;
}
} else {
}
}
break;
}

return ((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),left_column_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$small$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,"Filter",cljs.core.cst$kw$on_DASH_change,((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (p1__22044_SHARP_){
var filter_str = p1__22044_SHARP_.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crisis_proto.views.selector.selector_db,cljs.core.assoc,cljs.core.cst$kw$filter_DASH_str,filter_str);

return crisis_proto.views.selector.filter_BANG_(content_key);
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_height,"500px",cljs.core.cst$kw$overflow_DASH_y,"scroll"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function crisis_proto$views$selector$iter__22055(s__22056){
return (new cljs.core.LazySeq(null,((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (){
var s__22056__$1 = s__22056;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22056__$1);
if(temp__4425__auto__){
var s__22056__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22056__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__22056__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__22058 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__22057 = (0);
while(true){
if((i__22057 < size__5365__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__22057);
cljs.core.chunk_append(b__22058,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.add_button,entry,content_key,main_button_click_callback], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)));

var G__22094 = (i__22057 + (1));
i__22057 = G__22094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22058),crisis_proto$views$selector$iter__22055(cljs.core.chunk_rest(s__22056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22058),null);
}
} else {
var entry = cljs.core.first(s__22056__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.add_button,entry,content_key,main_button_click_callback], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)),crisis_proto$views$selector$iter__22055(cljs.core.rest(s__22056__$2)));
}
} else {
return null;
}
break;
}
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
,null,null));
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(content_key,cljs.core.cst$kw$add_DASH_column.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)))));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$label$label_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$border_DASH_radius,"0.0rem"], null)], null),right_column_title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max_DASH_height,"532px",cljs.core.cst$kw$overflow_DASH_y,"scroll"], null)], null),((cljs.core.empty_QMARK_(cljs.core.cst$kw$remove_DASH_column.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_center$text_DASH_warning,"Nothing Selected"], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = ((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function crisis_proto$views$selector$iter__22061(s__22062){
return (new cljs.core.LazySeq(null,((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (){
var s__22062__$1 = s__22062;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22062__$1);
if(temp__4425__auto__){
var s__22062__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22062__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__22062__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__22064 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__22063 = (0);
while(true){
if((i__22063 < size__5365__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__22063);
cljs.core.chunk_append(b__22064,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.remove_button,entry,content_key,main_button_click_callback], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)));

var G__22095 = (i__22063 + (1));
i__22063 = G__22095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22064),crisis_proto$views$selector$iter__22061(cljs.core.chunk_rest(s__22062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22064),null);
}
} else {
var entry = cljs.core.first(s__22062__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.selector.remove_button,entry,content_key,main_button_click_callback], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,entry], null)),crisis_proto$views$selector$iter__22061(cljs.core.rest(s__22062__$2)));
}
} else {
return null;
}
break;
}
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
,null,null));
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
;
return iter__5366__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(content_key,cljs.core.cst$kw$remove_DASH_column.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)))));
})()))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"25px",cljs.core.cst$kw$margin_DASH_bottom,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (){
return (cancel_callback.cljs$core$IFn$_invoke$arity$0 ? cancel_callback.cljs$core$IFn$_invoke$arity$0() : cancel_callback.call(null));
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)," Cancel"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,((function (map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback){
return (function (){
var G__22067 = cljs.core.cst$kw$remove_DASH_column.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(crisis_proto.views.selector.selector_db) : cljs.core.deref.call(null,crisis_proto.views.selector.selector_db)));
return (save_callback.cljs$core$IFn$_invoke$arity$1 ? save_callback.cljs$core$IFn$_invoke$arity$1(G__22067) : save_callback.call(null,G__22067));
});})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_check], null)," Save"], null)], null)], null)], null)], null);
});
;})(map__22047,map__22047__$1,initial_content,selected_content,content_key,left_column_title,right_column_title,main_button_click_callback,save_callback,cancel_callback))
});

crisis_proto.views.selector.init.cljs$lang$maxFixedArity = (0);

crisis_proto.views.selector.init.cljs$lang$applyTo = (function (seq22045){
return crisis_proto.views.selector.init.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22045));
});
