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
informacast_csv.zip_worker.csv_header_server_equivalencies = cljs.core.PersistentHashMap.fromArrays(["Script","Pre Tone","Skip Phones in Use","Re-broadcast","Broadcast Count","Short Text","Play Volume","Description","Persistent Text","Pause","Long Text","audio","Allow Customization","Message type","Message Priority","icon"],["messageAudioScript","preTone","skipPhonesInUse","replay","repetitions","shortText","volume","description","persistentText","repetitionPause","longText","mainAudio","customizable","messageType","priority","displayIcon"]);
informacast_csv.zip_worker.all_message_attributes = cljs.core.PersistentHashMap.fromArrays(["synchronizedDelivery","postTone","persistentText","customizable","scrollSpeed","priority","replay","scrollDuration","concatenateText","longText","repeatIndefinitely","scrollRepetitions","messageType","displayIcon","repetitionPause","repetitions","preTone","volume","shortText","messageAudioScript","skipPhonesInUse","mainAudio","description"],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(5)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"warn.bmp"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"As-Is",cljs.core.cst$kw$allowable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["As-Is","Maximum","Medium","Low"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null)]);
informacast_csv.zip_worker.find_zipfile_js_obj_by_substring_within_key = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key(search_string){

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(search_string,"")){
return cljs.core.first((function (){var iter__5279__auto__ = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8905(s__8906){
return (new cljs.core.LazySeq(null,(function (){
var s__8906__$1 = s__8906;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8906__$1);
if(temp__4425__auto__){
var s__8906__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8906__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8906__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8908 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8907 = (0);
while(true){
if((i__8907 < size__5278__auto__)){
var vec__8913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8907);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8913,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8913,(1),null);
cljs.core.chunk_append(b__8908,(function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})());

var G__8915 = (i__8907 + (1));
i__8907 = G__8915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8908),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8905(cljs.core.chunk_rest(s__8906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8908),null);
}
} else {
var vec__8914 = cljs.core.first(s__8906__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(1),null);
return cljs.core.cons((function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})(),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8905(cljs.core.rest(s__8906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__5279__auto__){
return (function (p1__8894_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__8894_SHARP_).indexOf(search_string),(-1));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8916_SHARP_,p2__8917_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__8916_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__8917_SHARP_], null),fn);
}),m,ks);
});
informacast_csv.zip_worker.fetch_csv_header_attributes = (function informacast_csv$zip_worker$fetch_csv_header_attributes(){

return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8918_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,p1__8918_SHARP_);
}),cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Papa.parse(informacast_csv.zip_worker.fetch_csv_from_memory())),"data"))));
});
informacast_csv.zip_worker.fetch_all_message_attributes = (function informacast_csv$zip_worker$fetch_all_message_attributes(){

return cljs.core.set(cljs.core.keys(informacast_csv.zip_worker.all_message_attributes));
});
informacast_csv.zip_worker.find_ommitted_attributes = (function informacast_csv$zip_worker$find_ommitted_attributes(){

var G__8921 = informacast_csv.zip_worker.omitted_attributes;
var G__8922 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.fetch_all_message_attributes(),informacast_csv.zip_worker.fetch_csv_header_attributes()));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8921,G__8922) : cljs.core.reset_BANG_.call(null,G__8921,G__8922));
});
informacast_csv.zip_worker.convert_strings_to_boolean = (function informacast_csv$zip_worker$convert_strings_to_boolean(parsed_csv){
var iter__5279__auto__ = (function informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8930(s__8931){
return (new cljs.core.LazySeq(null,(function (){
var s__8931__$1 = s__8931;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8931__$1);
if(temp__4425__auto__){
var s__8931__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8931__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8931__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8933 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8932 = (0);
while(true){
if((i__8932 < size__5278__auto__)){
var document = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8932);
cljs.core.chunk_append(b__8933,informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (i__8932,document,c__5277__auto__,size__5278__auto__,b__8933,s__8931__$2,temp__4425__auto__){
return (function (p1__8923_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8923_SHARP_,"");
});})(i__8932,document,c__5277__auto__,size__5278__auto__,b__8933,s__8931__$2,temp__4425__auto__))
));

var G__8936 = (i__8932 + (1));
i__8932 = G__8936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8933),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8930(cljs.core.chunk_rest(s__8931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8933),null);
}
} else {
var document = cljs.core.first(s__8931__$2);
return cljs.core.cons(informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (document,s__8931__$2,temp__4425__auto__){
return (function (p1__8923_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8923_SHARP_,"");
});})(document,s__8931__$2,temp__4425__auto__))
),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8930(cljs.core.rest(s__8931__$2)));
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
var mime_map = new cljs.core.PersistentArrayMap(null, 7, ["wav","audio/wav","png","image/png","bmp","image/bmp","jpg","image/jpeg","jpeg","image/jpeg","gif","image/gif","js","application/javascript"], null);
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Script",null,"Pre Tone",null,"postTone",null,"displayIcon",null,"audio",null,"mainAudio",null,"icon",null], null), null),key)){
return informacast_csv.zip_worker.construct_blob(val);
} else {
return val;
}
});
informacast_csv.zip_worker.add_messages = (function informacast_csv$zip_worker$add_messages(parsed_csv,global_defaults){
informacast_csv.informormacast_communicator.reset_operation_record();

var seq__8965 = cljs.core.seq(parsed_csv);
var chunk__8966 = null;
var count__8967 = (0);
var i__8968 = (0);
while(true){
if((i__8968 < count__8967)){
var document = chunk__8966.cljs$core$IIndexed$_nth$arity$2(null,i__8968);
var form_data_8993 = (new FormData());
var seq__8969_8994 = cljs.core.seq(document);
var chunk__8970_8995 = null;
var count__8971_8996 = (0);
var i__8972_8997 = (0);
while(true){
if((i__8972_8997 < count__8971_8996)){
var vec__8973_8998 = chunk__8970_8995.cljs$core$IIndexed$_nth$arity$2(null,i__8972_8997);
var key_8999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8973_8998,(0),null);
var val_9000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8973_8998,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9000 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9000);
}
})())){
form_data_8993.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_8999),informacast_csv.zip_worker.construct_blob_if_necessary(key_8999,val_9000));
} else {
}

var G__9001 = seq__8969_8994;
var G__9002 = chunk__8970_8995;
var G__9003 = count__8971_8996;
var G__9004 = (i__8972_8997 + (1));
seq__8969_8994 = G__9001;
chunk__8970_8995 = G__9002;
count__8971_8996 = G__9003;
i__8972_8997 = G__9004;
continue;
} else {
var temp__4425__auto___9005 = cljs.core.seq(seq__8969_8994);
if(temp__4425__auto___9005){
var seq__8969_9006__$1 = temp__4425__auto___9005;
if(cljs.core.chunked_seq_QMARK_(seq__8969_9006__$1)){
var c__5310__auto___9007 = cljs.core.chunk_first(seq__8969_9006__$1);
var G__9008 = cljs.core.chunk_rest(seq__8969_9006__$1);
var G__9009 = c__5310__auto___9007;
var G__9010 = cljs.core.count(c__5310__auto___9007);
var G__9011 = (0);
seq__8969_8994 = G__9008;
chunk__8970_8995 = G__9009;
count__8971_8996 = G__9010;
i__8972_8997 = G__9011;
continue;
} else {
var vec__8974_9012 = cljs.core.first(seq__8969_9006__$1);
var key_9013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8974_9012,(0),null);
var val_9014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8974_9012,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9014 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9014);
}
})())){
form_data_8993.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9013),informacast_csv.zip_worker.construct_blob_if_necessary(key_9013,val_9014));
} else {
}

var G__9015 = cljs.core.next(seq__8969_9006__$1);
var G__9016 = null;
var G__9017 = (0);
var G__9018 = (0);
seq__8969_8994 = G__9015;
chunk__8970_8995 = G__9016;
count__8971_8996 = G__9017;
i__8972_8997 = G__9018;
continue;
}
} else {
}
}
break;
}

var seq__8975_9019 = cljs.core.seq(global_defaults);
var chunk__8976_9020 = null;
var count__8977_9021 = (0);
var i__8978_9022 = (0);
while(true){
if((i__8978_9022 < count__8977_9021)){
var vec__8979_9023 = chunk__8976_9020.cljs$core$IIndexed$_nth$arity$2(null,i__8978_9022);
var key_9024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8979_9023,(0),null);
var val_9025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8979_9023,(1),null);
form_data_8993.append(key_9024,informacast_csv.zip_worker.construct_blob_if_necessary(key_9024,val_9025));

var G__9026 = seq__8975_9019;
var G__9027 = chunk__8976_9020;
var G__9028 = count__8977_9021;
var G__9029 = (i__8978_9022 + (1));
seq__8975_9019 = G__9026;
chunk__8976_9020 = G__9027;
count__8977_9021 = G__9028;
i__8978_9022 = G__9029;
continue;
} else {
var temp__4425__auto___9030 = cljs.core.seq(seq__8975_9019);
if(temp__4425__auto___9030){
var seq__8975_9031__$1 = temp__4425__auto___9030;
if(cljs.core.chunked_seq_QMARK_(seq__8975_9031__$1)){
var c__5310__auto___9032 = cljs.core.chunk_first(seq__8975_9031__$1);
var G__9033 = cljs.core.chunk_rest(seq__8975_9031__$1);
var G__9034 = c__5310__auto___9032;
var G__9035 = cljs.core.count(c__5310__auto___9032);
var G__9036 = (0);
seq__8975_9019 = G__9033;
chunk__8976_9020 = G__9034;
count__8977_9021 = G__9035;
i__8978_9022 = G__9036;
continue;
} else {
var vec__8980_9037 = cljs.core.first(seq__8975_9031__$1);
var key_9038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980_9037,(0),null);
var val_9039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980_9037,(1),null);
form_data_8993.append(key_9038,informacast_csv.zip_worker.construct_blob_if_necessary(key_9038,val_9039));

var G__9040 = cljs.core.next(seq__8975_9031__$1);
var G__9041 = null;
var G__9042 = (0);
var G__9043 = (0);
seq__8975_9019 = G__9040;
chunk__8976_9020 = G__9041;
count__8977_9021 = G__9042;
i__8978_9022 = G__9043;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto___9044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Script");
if(cljs.core.truth_(temp__4423__auto___9044)){
var script_name_9045 = temp__4423__auto___9044;
var script_val_9046 = informacast_csv.zip_worker.construct_blob_if_necessary("Script",script_name_9045);
informacast_csv.informormacast_communicator.post_message(form_data_8993,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),new cljs.core.PersistentArrayMap(null, 1, ["messageAudioScript",script_val_9046], null),new cljs.core.Var(function(){return informacast_csv.informormacast_communicator.update_message;},cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator_SLASH_update_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator,cljs.core.cst$sym$update_DASH_message,"src/cljs/informacast_csv/informormacast_communicator.cljs",21,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$messageId,cljs.core.cst$sym$attributes,cljs.core.cst$sym$form_DASH_description], null)),null,(cljs.core.truth_(informacast_csv.informormacast_communicator.update_message)?informacast_csv.informormacast_communicator.update_message.cljs$lang$test:null)])));
} else {
informacast_csv.informormacast_communicator.post_message(form_data_8993,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),null,null);
}

var G__9047 = seq__8965;
var G__9048 = chunk__8966;
var G__9049 = count__8967;
var G__9050 = (i__8968 + (1));
seq__8965 = G__9047;
chunk__8966 = G__9048;
count__8967 = G__9049;
i__8968 = G__9050;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8965);
if(temp__4425__auto__){
var seq__8965__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8965__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8965__$1);
var G__9051 = cljs.core.chunk_rest(seq__8965__$1);
var G__9052 = c__5310__auto__;
var G__9053 = cljs.core.count(c__5310__auto__);
var G__9054 = (0);
seq__8965 = G__9051;
chunk__8966 = G__9052;
count__8967 = G__9053;
i__8968 = G__9054;
continue;
} else {
var document = cljs.core.first(seq__8965__$1);
var form_data_9055 = (new FormData());
var seq__8981_9056 = cljs.core.seq(document);
var chunk__8982_9057 = null;
var count__8983_9058 = (0);
var i__8984_9059 = (0);
while(true){
if((i__8984_9059 < count__8983_9058)){
var vec__8985_9060 = chunk__8982_9057.cljs$core$IIndexed$_nth$arity$2(null,i__8984_9059);
var key_9061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8985_9060,(0),null);
var val_9062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8985_9060,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9062 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9062);
}
})())){
form_data_9055.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9061),informacast_csv.zip_worker.construct_blob_if_necessary(key_9061,val_9062));
} else {
}

var G__9063 = seq__8981_9056;
var G__9064 = chunk__8982_9057;
var G__9065 = count__8983_9058;
var G__9066 = (i__8984_9059 + (1));
seq__8981_9056 = G__9063;
chunk__8982_9057 = G__9064;
count__8983_9058 = G__9065;
i__8984_9059 = G__9066;
continue;
} else {
var temp__4425__auto___9067__$1 = cljs.core.seq(seq__8981_9056);
if(temp__4425__auto___9067__$1){
var seq__8981_9068__$1 = temp__4425__auto___9067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8981_9068__$1)){
var c__5310__auto___9069 = cljs.core.chunk_first(seq__8981_9068__$1);
var G__9070 = cljs.core.chunk_rest(seq__8981_9068__$1);
var G__9071 = c__5310__auto___9069;
var G__9072 = cljs.core.count(c__5310__auto___9069);
var G__9073 = (0);
seq__8981_9056 = G__9070;
chunk__8982_9057 = G__9071;
count__8983_9058 = G__9072;
i__8984_9059 = G__9073;
continue;
} else {
var vec__8986_9074 = cljs.core.first(seq__8981_9068__$1);
var key_9075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8986_9074,(0),null);
var val_9076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8986_9074,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9076 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9076);
}
})())){
form_data_9055.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9075),informacast_csv.zip_worker.construct_blob_if_necessary(key_9075,val_9076));
} else {
}

var G__9077 = cljs.core.next(seq__8981_9068__$1);
var G__9078 = null;
var G__9079 = (0);
var G__9080 = (0);
seq__8981_9056 = G__9077;
chunk__8982_9057 = G__9078;
count__8983_9058 = G__9079;
i__8984_9059 = G__9080;
continue;
}
} else {
}
}
break;
}

var seq__8987_9081 = cljs.core.seq(global_defaults);
var chunk__8988_9082 = null;
var count__8989_9083 = (0);
var i__8990_9084 = (0);
while(true){
if((i__8990_9084 < count__8989_9083)){
var vec__8991_9085 = chunk__8988_9082.cljs$core$IIndexed$_nth$arity$2(null,i__8990_9084);
var key_9086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8991_9085,(0),null);
var val_9087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8991_9085,(1),null);
form_data_9055.append(key_9086,informacast_csv.zip_worker.construct_blob_if_necessary(key_9086,val_9087));

var G__9088 = seq__8987_9081;
var G__9089 = chunk__8988_9082;
var G__9090 = count__8989_9083;
var G__9091 = (i__8990_9084 + (1));
seq__8987_9081 = G__9088;
chunk__8988_9082 = G__9089;
count__8989_9083 = G__9090;
i__8990_9084 = G__9091;
continue;
} else {
var temp__4425__auto___9092__$1 = cljs.core.seq(seq__8987_9081);
if(temp__4425__auto___9092__$1){
var seq__8987_9093__$1 = temp__4425__auto___9092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8987_9093__$1)){
var c__5310__auto___9094 = cljs.core.chunk_first(seq__8987_9093__$1);
var G__9095 = cljs.core.chunk_rest(seq__8987_9093__$1);
var G__9096 = c__5310__auto___9094;
var G__9097 = cljs.core.count(c__5310__auto___9094);
var G__9098 = (0);
seq__8987_9081 = G__9095;
chunk__8988_9082 = G__9096;
count__8989_9083 = G__9097;
i__8990_9084 = G__9098;
continue;
} else {
var vec__8992_9099 = cljs.core.first(seq__8987_9093__$1);
var key_9100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992_9099,(0),null);
var val_9101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992_9099,(1),null);
form_data_9055.append(key_9100,informacast_csv.zip_worker.construct_blob_if_necessary(key_9100,val_9101));

var G__9102 = cljs.core.next(seq__8987_9093__$1);
var G__9103 = null;
var G__9104 = (0);
var G__9105 = (0);
seq__8987_9081 = G__9102;
chunk__8988_9082 = G__9103;
count__8989_9083 = G__9104;
i__8990_9084 = G__9105;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto___9106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Script");
if(cljs.core.truth_(temp__4423__auto___9106)){
var script_name_9107 = temp__4423__auto___9106;
var script_val_9108 = informacast_csv.zip_worker.construct_blob_if_necessary("Script",script_name_9107);
informacast_csv.informormacast_communicator.post_message(form_data_9055,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),new cljs.core.PersistentArrayMap(null, 1, ["messageAudioScript",script_val_9108], null),new cljs.core.Var(function(){return informacast_csv.informormacast_communicator.update_message;},cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator_SLASH_update_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator,cljs.core.cst$sym$update_DASH_message,"src/cljs/informacast_csv/informormacast_communicator.cljs",21,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$messageId,cljs.core.cst$sym$attributes,cljs.core.cst$sym$form_DASH_description], null)),null,(cljs.core.truth_(informacast_csv.informormacast_communicator.update_message)?informacast_csv.informormacast_communicator.update_message.cljs$lang$test:null)])));
} else {
informacast_csv.informormacast_communicator.post_message(form_data_9055,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),null,null);
}

var G__9109 = cljs.core.next(seq__8965__$1);
var G__9110 = null;
var G__9111 = (0);
var G__9112 = (0);
seq__8965 = G__9109;
chunk__8966 = G__9110;
count__8967 = G__9111;
i__8968 = G__9112;
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
var G__9121_9129 = informacast_csv.zip_worker.assets;
var G__9122_9130 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9121_9129,G__9122_9130) : cljs.core.reset_BANG_.call(null,G__9121_9129,G__9122_9130));

var G__9123_9131 = informacast_csv.zip_worker.missing_assets;
var G__9124_9132 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9123_9131,G__9124_9132) : cljs.core.reset_BANG_.call(null,G__9123_9131,G__9124_9132));

var zip_files_objs_9133 = (new JSZip(zip_file)).files;
var seq__9125_9134 = cljs.core.seq(Object.keys(zip_files_objs_9133));
var chunk__9126_9135 = null;
var count__9127_9136 = (0);
var i__9128_9137 = (0);
while(true){
if((i__9128_9137 < count__9127_9136)){
var file_name_9138 = chunk__9126_9135.cljs$core$IIndexed$_nth$arity$2(null,i__9128_9137);
var zip_file_obj_9139 = (zip_files_objs_9133[file_name_9138]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_9139);

var G__9140 = seq__9125_9134;
var G__9141 = chunk__9126_9135;
var G__9142 = count__9127_9136;
var G__9143 = (i__9128_9137 + (1));
seq__9125_9134 = G__9140;
chunk__9126_9135 = G__9141;
count__9127_9136 = G__9142;
i__9128_9137 = G__9143;
continue;
} else {
var temp__4425__auto___9144 = cljs.core.seq(seq__9125_9134);
if(temp__4425__auto___9144){
var seq__9125_9145__$1 = temp__4425__auto___9144;
if(cljs.core.chunked_seq_QMARK_(seq__9125_9145__$1)){
var c__5310__auto___9146 = cljs.core.chunk_first(seq__9125_9145__$1);
var G__9147 = cljs.core.chunk_rest(seq__9125_9145__$1);
var G__9148 = c__5310__auto___9146;
var G__9149 = cljs.core.count(c__5310__auto___9146);
var G__9150 = (0);
seq__9125_9134 = G__9147;
chunk__9126_9135 = G__9148;
count__9127_9136 = G__9149;
i__9128_9137 = G__9150;
continue;
} else {
var file_name_9151 = cljs.core.first(seq__9125_9145__$1);
var zip_file_obj_9152 = (zip_files_objs_9133[file_name_9151]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_9152);

var G__9153 = cljs.core.next(seq__9125_9145__$1);
var G__9154 = null;
var G__9155 = (0);
var G__9156 = (0);
seq__9125_9134 = G__9153;
chunk__9126_9135 = G__9154;
count__9127_9136 = G__9155;
i__9128_9137 = G__9156;
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
