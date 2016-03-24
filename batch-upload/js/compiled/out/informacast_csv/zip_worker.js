// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('informacast_csv.zip_worker');
goog.require('cljs.core');
goog.require('informacast_csv.informormacast_communicator');
goog.require('reagent.core');
goog.require('clojure.set');
if(typeof informacast_csv.zip_worker.assets !== 'undefined'){
} else {
informacast_csv.zip_worker.assets = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof informacast_csv.zip_worker.missing_assets !== 'undefined'){
} else {
informacast_csv.zip_worker.missing_assets = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof informacast_csv.zip_worker.omitted_attributes !== 'undefined'){
} else {
informacast_csv.zip_worker.omitted_attributes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_set());
}
informacast_csv.zip_worker.get_missing_assets = (function informacast_csv$zip_worker$get_missing_assets(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.zip_worker.missing_assets) : cljs.core.deref.call(null,informacast_csv.zip_worker.missing_assets));
});
informacast_csv.zip_worker.get_omitted_attributes = (function informacast_csv$zip_worker$get_omitted_attributes(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.zip_worker.omitted_attributes) : cljs.core.deref.call(null,informacast_csv.zip_worker.omitted_attributes));
});
informacast_csv.zip_worker.csv_header_server_equivalencies = cljs.core.PersistentHashMap.fromArrays(["Skip Phones in Use","Re-broadcast","Broadcast Count","Short Text","Play Volume","Description","Persistent Text","Pause","Long Text","audio","Allow Customization","Message type","Message Priority","icon"],["skipPhonesInUse","replay","repetitions","shortText","volume","description","persistentText","repetitionPause","longText","mainAudio","customizable","messageType","priority","displayIcon"]);
informacast_csv.zip_worker.all_message_attributes = cljs.core.PersistentHashMap.fromArrays(["synchronizedDelivery","postTone","persistentText","customizable","scrollSpeed","priority","replay","scrollDuration","concatenateText","longText","repeatIndefinitely","scrollRepetitions","messageType","displayIcon","repetitionPause","repetitions","preTone","volume","shortText","skipPhonesInUse","mainAudio","description"],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(5)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"warn.bmp"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"As-Is",cljs.core.cst$kw$allowable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["As-Is","Maximum","Medium","Low"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null)]);
informacast_csv.zip_worker.find_zipfile_js_obj_by_substring_within_key = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key(search_string){

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(search_string,"")){
return cljs.core.first((function (){var iter__5279__auto__ = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8653(s__8654){
return (new cljs.core.LazySeq(null,(function (){
var s__8654__$1 = s__8654;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8654__$1);
if(temp__4425__auto__){
var s__8654__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8654__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8654__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8656 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8655 = (0);
while(true){
if((i__8655 < size__5278__auto__)){
var vec__8661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8655);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(1),null);
cljs.core.chunk_append(b__8656,(function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})());

var G__8663 = (i__8655 + (1));
i__8655 = G__8663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8656),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8653(cljs.core.chunk_rest(s__8654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8656),null);
}
} else {
var vec__8662 = cljs.core.first(s__8654__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8662,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8662,(1),null);
return cljs.core.cons((function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})(),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8653(cljs.core.rest(s__8654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__5279__auto__){
return (function (p1__8642_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__8642_SHARP_).indexOf(search_string),(-1));
});})(iter__5279__auto__))
,cljs.core.vec((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.zip_worker.assets) : cljs.core.deref.call(null,informacast_csv.zip_worker.assets)))));
})());
} else {
return null;
}
});
informacast_csv.zip_worker.fetch_csv_from_memory = (function informacast_csv$zip_worker$fetch_csv_from_memory(){
return informacast_csv.zip_worker.find_zipfile_js_obj_by_substring_within_key("informacast_import.csv").asText();
});
informacast_csv.zip_worker.update_each = (function informacast_csv$zip_worker$update_each(m,ks,fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8664_SHARP_,p2__8665_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__8664_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__8665_SHARP_], null),fn);
}),m,ks);
});
informacast_csv.zip_worker.fetch_csv_header_attributes = (function informacast_csv$zip_worker$fetch_csv_header_attributes(){

return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8666_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,p1__8666_SHARP_);
}),cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Papa.parse(informacast_csv.zip_worker.fetch_csv_from_memory())),"data"))));
});
informacast_csv.zip_worker.fetch_all_message_attributes = (function informacast_csv$zip_worker$fetch_all_message_attributes(){

return cljs.core.set(cljs.core.keys(informacast_csv.zip_worker.all_message_attributes));
});
informacast_csv.zip_worker.find_ommitted_attributes = (function informacast_csv$zip_worker$find_ommitted_attributes(){

var G__8669 = informacast_csv.zip_worker.omitted_attributes;
var G__8670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.fetch_all_message_attributes(),informacast_csv.zip_worker.fetch_csv_header_attributes()));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8669,G__8670) : cljs.core.reset_BANG_.call(null,G__8669,G__8670));
});
informacast_csv.zip_worker.convert_strings_to_boolean = (function informacast_csv$zip_worker$convert_strings_to_boolean(parsed_csv){
var iter__5279__auto__ = (function informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8678(s__8679){
return (new cljs.core.LazySeq(null,(function (){
var s__8679__$1 = s__8679;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8679__$1);
if(temp__4425__auto__){
var s__8679__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8679__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8679__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8681 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8680 = (0);
while(true){
if((i__8680 < size__5278__auto__)){
var document = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8680);
cljs.core.chunk_append(b__8681,informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (i__8680,document,c__5277__auto__,size__5278__auto__,b__8681,s__8679__$2,temp__4425__auto__){
return (function (p1__8671_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8671_SHARP_,"");
});})(i__8680,document,c__5277__auto__,size__5278__auto__,b__8681,s__8679__$2,temp__4425__auto__))
));

var G__8684 = (i__8680 + (1));
i__8680 = G__8684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8681),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8678(cljs.core.chunk_rest(s__8679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8681),null);
}
} else {
var document = cljs.core.first(s__8679__$2);
return cljs.core.cons(informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (document,s__8679__$2,temp__4425__auto__){
return (function (p1__8671_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8671_SHARP_,"");
});})(document,s__8679__$2,temp__4425__auto__))
),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8678(cljs.core.rest(s__8679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(parsed_csv);
});
informacast_csv.zip_worker.parse_csv = (function informacast_csv$zip_worker$parse_csv(){
return informacast_csv.zip_worker.convert_strings_to_boolean(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Papa.parse(informacast_csv.zip_worker.fetch_csv_from_memory(),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,true], null)))),"data"));
});
informacast_csv.zip_worker.store_in_memory = (function informacast_csv$zip_worker$store_in_memory(file){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.assets,(function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.zip_worker.assets) : cljs.core.deref.call(null,informacast_csv.zip_worker.assets)),file.name,file);
}));
});
informacast_csv.zip_worker.get_mime_type_of_zip_file = (function informacast_csv$zip_worker$get_mime_type_of_zip_file(zip_file){
var mime_map = new cljs.core.PersistentArrayMap(null, 6, ["wav","audio/wav","png","image/png","bmp","image/bmp","jpg","image/jpeg","jpeg","image/jpeg","gif","image/gif"], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mime_map,cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2((zip_file["name"]),".")));
});
informacast_csv.zip_worker.construct_blob = (function informacast_csv$zip_worker$construct_blob(file_name){
var temp__4423__auto__ = informacast_csv.zip_worker.find_zipfile_js_obj_by_substring_within_key(file_name);
if(cljs.core.truth_(temp__4423__auto__)){
var zip_file_obj = temp__4423__auto__;
var type = informacast_csv.zip_worker.get_mime_type_of_zip_file(zip_file_obj);
return (new Blob((new Array(zip_file_obj.asArrayBuffer())),{"type": type}));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_name,"")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.missing_assets,((function (temp__4423__auto__){
return (function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(informacast_csv.zip_worker.missing_assets) : cljs.core.deref.call(null,informacast_csv.zip_worker.missing_assets)),file_name);
});})(temp__4423__auto__))
);
} else {
}

return null;
}
});
informacast_csv.zip_worker.construct_blob_if_necessary = (function informacast_csv$zip_worker$construct_blob_if_necessary(key,val){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["postTone",null,"displayIcon",null,"audio",null,"preTone",null,"mainAudio",null,"icon",null], null), null),key)){
return informacast_csv.zip_worker.construct_blob(val);
} else {
return val;
}
});
informacast_csv.zip_worker.add_messages = (function informacast_csv$zip_worker$add_messages(parsed_csv,global_defaults){
informacast_csv.informormacast_communicator.reset_operation_record();

var seq__8713 = cljs.core.seq(parsed_csv);
var chunk__8714 = null;
var count__8715 = (0);
var i__8716 = (0);
while(true){
if((i__8716 < count__8715)){
var document = chunk__8714.cljs$core$IIndexed$_nth$arity$2(null,i__8716);
var form_data_8741 = (new FormData());
var seq__8717_8742 = cljs.core.seq(document);
var chunk__8718_8743 = null;
var count__8719_8744 = (0);
var i__8720_8745 = (0);
while(true){
if((i__8720_8745 < count__8719_8744)){
var vec__8721_8746 = chunk__8718_8743.cljs$core$IIndexed$_nth$arity$2(null,i__8720_8745);
var key_8747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721_8746,(0),null);
var val_8748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721_8746,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_8748 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_8748);
}
})())){
form_data_8741.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_8747),informacast_csv.zip_worker.construct_blob_if_necessary(key_8747,val_8748));
} else {
}

var G__8749 = seq__8717_8742;
var G__8750 = chunk__8718_8743;
var G__8751 = count__8719_8744;
var G__8752 = (i__8720_8745 + (1));
seq__8717_8742 = G__8749;
chunk__8718_8743 = G__8750;
count__8719_8744 = G__8751;
i__8720_8745 = G__8752;
continue;
} else {
var temp__4425__auto___8753 = cljs.core.seq(seq__8717_8742);
if(temp__4425__auto___8753){
var seq__8717_8754__$1 = temp__4425__auto___8753;
if(cljs.core.chunked_seq_QMARK_(seq__8717_8754__$1)){
var c__5310__auto___8755 = cljs.core.chunk_first(seq__8717_8754__$1);
var G__8756 = cljs.core.chunk_rest(seq__8717_8754__$1);
var G__8757 = c__5310__auto___8755;
var G__8758 = cljs.core.count(c__5310__auto___8755);
var G__8759 = (0);
seq__8717_8742 = G__8756;
chunk__8718_8743 = G__8757;
count__8719_8744 = G__8758;
i__8720_8745 = G__8759;
continue;
} else {
var vec__8722_8760 = cljs.core.first(seq__8717_8754__$1);
var key_8761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8722_8760,(0),null);
var val_8762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8722_8760,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_8762 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_8762);
}
})())){
form_data_8741.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_8761),informacast_csv.zip_worker.construct_blob_if_necessary(key_8761,val_8762));
} else {
}

var G__8763 = cljs.core.next(seq__8717_8754__$1);
var G__8764 = null;
var G__8765 = (0);
var G__8766 = (0);
seq__8717_8742 = G__8763;
chunk__8718_8743 = G__8764;
count__8719_8744 = G__8765;
i__8720_8745 = G__8766;
continue;
}
} else {
}
}
break;
}

var seq__8723_8767 = cljs.core.seq(global_defaults);
var chunk__8724_8768 = null;
var count__8725_8769 = (0);
var i__8726_8770 = (0);
while(true){
if((i__8726_8770 < count__8725_8769)){
var vec__8727_8771 = chunk__8724_8768.cljs$core$IIndexed$_nth$arity$2(null,i__8726_8770);
var key_8772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8727_8771,(0),null);
var val_8773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8727_8771,(1),null);
form_data_8741.append(key_8772,informacast_csv.zip_worker.construct_blob_if_necessary(key_8772,val_8773));

var G__8774 = seq__8723_8767;
var G__8775 = chunk__8724_8768;
var G__8776 = count__8725_8769;
var G__8777 = (i__8726_8770 + (1));
seq__8723_8767 = G__8774;
chunk__8724_8768 = G__8775;
count__8725_8769 = G__8776;
i__8726_8770 = G__8777;
continue;
} else {
var temp__4425__auto___8778 = cljs.core.seq(seq__8723_8767);
if(temp__4425__auto___8778){
var seq__8723_8779__$1 = temp__4425__auto___8778;
if(cljs.core.chunked_seq_QMARK_(seq__8723_8779__$1)){
var c__5310__auto___8780 = cljs.core.chunk_first(seq__8723_8779__$1);
var G__8781 = cljs.core.chunk_rest(seq__8723_8779__$1);
var G__8782 = c__5310__auto___8780;
var G__8783 = cljs.core.count(c__5310__auto___8780);
var G__8784 = (0);
seq__8723_8767 = G__8781;
chunk__8724_8768 = G__8782;
count__8725_8769 = G__8783;
i__8726_8770 = G__8784;
continue;
} else {
var vec__8728_8785 = cljs.core.first(seq__8723_8779__$1);
var key_8786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8728_8785,(0),null);
var val_8787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8728_8785,(1),null);
form_data_8741.append(key_8786,informacast_csv.zip_worker.construct_blob_if_necessary(key_8786,val_8787));

var G__8788 = cljs.core.next(seq__8723_8779__$1);
var G__8789 = null;
var G__8790 = (0);
var G__8791 = (0);
seq__8723_8767 = G__8788;
chunk__8724_8768 = G__8789;
count__8725_8769 = G__8790;
i__8726_8770 = G__8791;
continue;
}
} else {
}
}
break;
}

informacast_csv.informormacast_communicator.post_message(form_data_8741,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"));

var G__8792 = seq__8713;
var G__8793 = chunk__8714;
var G__8794 = count__8715;
var G__8795 = (i__8716 + (1));
seq__8713 = G__8792;
chunk__8714 = G__8793;
count__8715 = G__8794;
i__8716 = G__8795;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8713);
if(temp__4425__auto__){
var seq__8713__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8713__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8713__$1);
var G__8796 = cljs.core.chunk_rest(seq__8713__$1);
var G__8797 = c__5310__auto__;
var G__8798 = cljs.core.count(c__5310__auto__);
var G__8799 = (0);
seq__8713 = G__8796;
chunk__8714 = G__8797;
count__8715 = G__8798;
i__8716 = G__8799;
continue;
} else {
var document = cljs.core.first(seq__8713__$1);
var form_data_8800 = (new FormData());
var seq__8729_8801 = cljs.core.seq(document);
var chunk__8730_8802 = null;
var count__8731_8803 = (0);
var i__8732_8804 = (0);
while(true){
if((i__8732_8804 < count__8731_8803)){
var vec__8733_8805 = chunk__8730_8802.cljs$core$IIndexed$_nth$arity$2(null,i__8732_8804);
var key_8806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8733_8805,(0),null);
var val_8807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8733_8805,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_8807 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_8807);
}
})())){
form_data_8800.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_8806),informacast_csv.zip_worker.construct_blob_if_necessary(key_8806,val_8807));
} else {
}

var G__8808 = seq__8729_8801;
var G__8809 = chunk__8730_8802;
var G__8810 = count__8731_8803;
var G__8811 = (i__8732_8804 + (1));
seq__8729_8801 = G__8808;
chunk__8730_8802 = G__8809;
count__8731_8803 = G__8810;
i__8732_8804 = G__8811;
continue;
} else {
var temp__4425__auto___8812__$1 = cljs.core.seq(seq__8729_8801);
if(temp__4425__auto___8812__$1){
var seq__8729_8813__$1 = temp__4425__auto___8812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8729_8813__$1)){
var c__5310__auto___8814 = cljs.core.chunk_first(seq__8729_8813__$1);
var G__8815 = cljs.core.chunk_rest(seq__8729_8813__$1);
var G__8816 = c__5310__auto___8814;
var G__8817 = cljs.core.count(c__5310__auto___8814);
var G__8818 = (0);
seq__8729_8801 = G__8815;
chunk__8730_8802 = G__8816;
count__8731_8803 = G__8817;
i__8732_8804 = G__8818;
continue;
} else {
var vec__8734_8819 = cljs.core.first(seq__8729_8813__$1);
var key_8820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734_8819,(0),null);
var val_8821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734_8819,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_8821 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_8821);
}
})())){
form_data_8800.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_8820),informacast_csv.zip_worker.construct_blob_if_necessary(key_8820,val_8821));
} else {
}

var G__8822 = cljs.core.next(seq__8729_8813__$1);
var G__8823 = null;
var G__8824 = (0);
var G__8825 = (0);
seq__8729_8801 = G__8822;
chunk__8730_8802 = G__8823;
count__8731_8803 = G__8824;
i__8732_8804 = G__8825;
continue;
}
} else {
}
}
break;
}

var seq__8735_8826 = cljs.core.seq(global_defaults);
var chunk__8736_8827 = null;
var count__8737_8828 = (0);
var i__8738_8829 = (0);
while(true){
if((i__8738_8829 < count__8737_8828)){
var vec__8739_8830 = chunk__8736_8827.cljs$core$IIndexed$_nth$arity$2(null,i__8738_8829);
var key_8831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8739_8830,(0),null);
var val_8832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8739_8830,(1),null);
form_data_8800.append(key_8831,informacast_csv.zip_worker.construct_blob_if_necessary(key_8831,val_8832));

var G__8833 = seq__8735_8826;
var G__8834 = chunk__8736_8827;
var G__8835 = count__8737_8828;
var G__8836 = (i__8738_8829 + (1));
seq__8735_8826 = G__8833;
chunk__8736_8827 = G__8834;
count__8737_8828 = G__8835;
i__8738_8829 = G__8836;
continue;
} else {
var temp__4425__auto___8837__$1 = cljs.core.seq(seq__8735_8826);
if(temp__4425__auto___8837__$1){
var seq__8735_8838__$1 = temp__4425__auto___8837__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8735_8838__$1)){
var c__5310__auto___8839 = cljs.core.chunk_first(seq__8735_8838__$1);
var G__8840 = cljs.core.chunk_rest(seq__8735_8838__$1);
var G__8841 = c__5310__auto___8839;
var G__8842 = cljs.core.count(c__5310__auto___8839);
var G__8843 = (0);
seq__8735_8826 = G__8840;
chunk__8736_8827 = G__8841;
count__8737_8828 = G__8842;
i__8738_8829 = G__8843;
continue;
} else {
var vec__8740_8844 = cljs.core.first(seq__8735_8838__$1);
var key_8845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8740_8844,(0),null);
var val_8846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8740_8844,(1),null);
form_data_8800.append(key_8845,informacast_csv.zip_worker.construct_blob_if_necessary(key_8845,val_8846));

var G__8847 = cljs.core.next(seq__8735_8838__$1);
var G__8848 = null;
var G__8849 = (0);
var G__8850 = (0);
seq__8735_8826 = G__8847;
chunk__8736_8827 = G__8848;
count__8737_8828 = G__8849;
i__8738_8829 = G__8850;
continue;
}
} else {
}
}
break;
}

informacast_csv.informormacast_communicator.post_message(form_data_8800,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"));

var G__8851 = cljs.core.next(seq__8713__$1);
var G__8852 = null;
var G__8853 = (0);
var G__8854 = (0);
seq__8713 = G__8851;
chunk__8714 = G__8852;
count__8715 = G__8853;
i__8716 = G__8854;
continue;
}
} else {
return null;
}
}
break;
}
});
informacast_csv.zip_worker.store_zip_in_memory = (function informacast_csv$zip_worker$store_zip_in_memory(zip_file){
var G__8863_8871 = informacast_csv.zip_worker.assets;
var G__8864_8872 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8863_8871,G__8864_8872) : cljs.core.reset_BANG_.call(null,G__8863_8871,G__8864_8872));

var G__8865_8873 = informacast_csv.zip_worker.missing_assets;
var G__8866_8874 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8865_8873,G__8866_8874) : cljs.core.reset_BANG_.call(null,G__8865_8873,G__8866_8874));

var zip_files_objs_8875 = (new JSZip(zip_file)).files;
var seq__8867_8876 = cljs.core.seq(Object.keys(zip_files_objs_8875));
var chunk__8868_8877 = null;
var count__8869_8878 = (0);
var i__8870_8879 = (0);
while(true){
if((i__8870_8879 < count__8869_8878)){
var file_name_8880 = chunk__8868_8877.cljs$core$IIndexed$_nth$arity$2(null,i__8870_8879);
var zip_file_obj_8881 = (zip_files_objs_8875[file_name_8880]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_8881);

var G__8882 = seq__8867_8876;
var G__8883 = chunk__8868_8877;
var G__8884 = count__8869_8878;
var G__8885 = (i__8870_8879 + (1));
seq__8867_8876 = G__8882;
chunk__8868_8877 = G__8883;
count__8869_8878 = G__8884;
i__8870_8879 = G__8885;
continue;
} else {
var temp__4425__auto___8886 = cljs.core.seq(seq__8867_8876);
if(temp__4425__auto___8886){
var seq__8867_8887__$1 = temp__4425__auto___8886;
if(cljs.core.chunked_seq_QMARK_(seq__8867_8887__$1)){
var c__5310__auto___8888 = cljs.core.chunk_first(seq__8867_8887__$1);
var G__8889 = cljs.core.chunk_rest(seq__8867_8887__$1);
var G__8890 = c__5310__auto___8888;
var G__8891 = cljs.core.count(c__5310__auto___8888);
var G__8892 = (0);
seq__8867_8876 = G__8889;
chunk__8868_8877 = G__8890;
count__8869_8878 = G__8891;
i__8870_8879 = G__8892;
continue;
} else {
var file_name_8893 = cljs.core.first(seq__8867_8887__$1);
var zip_file_obj_8894 = (zip_files_objs_8875[file_name_8893]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_8894);

var G__8895 = cljs.core.next(seq__8867_8887__$1);
var G__8896 = null;
var G__8897 = (0);
var G__8898 = (0);
seq__8867_8876 = G__8895;
chunk__8868_8877 = G__8896;
count__8869_8878 = G__8897;
i__8870_8879 = G__8898;
continue;
}
} else {
}
}
break;
}

return informacast_csv.zip_worker.find_ommitted_attributes();
});
informacast_csv.zip_worker.begin_adding_messages = (function informacast_csv$zip_worker$begin_adding_messages(global_defaults){
return informacast_csv.zip_worker.add_messages(informacast_csv.zip_worker.parse_csv(),global_defaults);
});
