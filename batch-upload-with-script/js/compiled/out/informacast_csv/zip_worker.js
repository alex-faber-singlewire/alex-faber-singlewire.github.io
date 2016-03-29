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
informacast_csv.zip_worker.csv_header_server_equivalencies = cljs.core.PersistentHashMap.fromArrays(["Script","Skip Phones in Use","Re-broadcast","Broadcast Count","Short Text","Play Volume","Description","Persistent Text","Pause","Long Text","audio","Allow Customization","Message type","Message Priority","icon"],["messageAudioScript","skipPhonesInUse","replay","repetitions","shortText","volume","description","persistentText","repetitionPause","longText","mainAudio","customizable","messageType","priority","displayIcon"]);
informacast_csv.zip_worker.all_message_attributes = cljs.core.PersistentHashMap.fromArrays(["synchronizedDelivery","postTone","persistentText","customizable","scrollSpeed","priority","replay","scrollDuration","concatenateText","longText","repeatIndefinitely","scrollRepetitions","messageType","displayIcon","repetitionPause","repetitions","preTone","volume","shortText","messageAudioScript","skipPhonesInUse","mainAudio","description"],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(5)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"warn.bmp"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$integer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"As-Is",cljs.core.cst$kw$allowable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["As-Is","Maximum","Medium","Low"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,null], null)]);
informacast_csv.zip_worker.find_zipfile_js_obj_by_substring_within_key = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key(search_string){

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(search_string,"")){
return cljs.core.first((function (){var iter__5279__auto__ = (function informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8958(s__8959){
return (new cljs.core.LazySeq(null,(function (){
var s__8959__$1 = s__8959;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8959__$1);
if(temp__4425__auto__){
var s__8959__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8959__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8959__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8961 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8960 = (0);
while(true){
if((i__8960 < size__5278__auto__)){
var vec__8966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8960);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8966,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8966,(1),null);
cljs.core.chunk_append(b__8961,(function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})());

var G__8968 = (i__8960 + (1));
i__8960 = G__8968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8961),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8958(cljs.core.chunk_rest(s__8959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8961),null);
}
} else {
var vec__8967 = cljs.core.first(s__8959__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8967,(0),null);
var zip_file_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8967,(1),null);
return cljs.core.cons((function (){var file_name = (zip_file_obj["name"]);
var word_begin_index = file_name.indexOf(search_string);
var preceeding_char = file_name.substring((word_begin_index - (1)),word_begin_index);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",preceeding_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",preceeding_char))){
return zip_file_obj;
} else {
return null;
}
})(),informacast_csv$zip_worker$find_zipfile_js_obj_by_substring_within_key_$_iter__8958(cljs.core.rest(s__8959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (iter__5279__auto__){
return (function (p1__8947_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__8947_SHARP_).indexOf(search_string),(-1));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8969_SHARP_,p2__8970_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__8969_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__8970_SHARP_], null),fn);
}),m,ks);
});
informacast_csv.zip_worker.fetch_csv_header_attributes = (function informacast_csv$zip_worker$fetch_csv_header_attributes(){

return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8971_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,p1__8971_SHARP_);
}),cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Papa.parse(informacast_csv.zip_worker.fetch_csv_from_memory())),"data"))));
});
informacast_csv.zip_worker.fetch_all_message_attributes = (function informacast_csv$zip_worker$fetch_all_message_attributes(){

return cljs.core.set(cljs.core.keys(informacast_csv.zip_worker.all_message_attributes));
});
informacast_csv.zip_worker.find_ommitted_attributes = (function informacast_csv$zip_worker$find_ommitted_attributes(){

var G__8974 = informacast_csv.zip_worker.omitted_attributes;
var G__8975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.fetch_all_message_attributes(),informacast_csv.zip_worker.fetch_csv_header_attributes()));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8974,G__8975) : cljs.core.reset_BANG_.call(null,G__8974,G__8975));
});
informacast_csv.zip_worker.convert_strings_to_boolean = (function informacast_csv$zip_worker$convert_strings_to_boolean(parsed_csv){
var iter__5279__auto__ = (function informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8983(s__8984){
return (new cljs.core.LazySeq(null,(function (){
var s__8984__$1 = s__8984;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__8984__$1);
if(temp__4425__auto__){
var s__8984__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8984__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__8984__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__8986 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__8985 = (0);
while(true){
if((i__8985 < size__5278__auto__)){
var document = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__8985);
cljs.core.chunk_append(b__8986,informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (i__8985,document,c__5277__auto__,size__5278__auto__,b__8986,s__8984__$2,temp__4425__auto__){
return (function (p1__8976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8976_SHARP_,"");
});})(i__8985,document,c__5277__auto__,size__5278__auto__,b__8986,s__8984__$2,temp__4425__auto__))
));

var G__8989 = (i__8985 + (1));
i__8985 = G__8989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8986),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8983(cljs.core.chunk_rest(s__8984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8986),null);
}
} else {
var document = cljs.core.first(s__8984__$2);
return cljs.core.cons(informacast_csv.zip_worker.update_each(document,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skip Phones in Use","Re-broadcast","Allow Customization","Persistent Text"], null),((function (document,s__8984__$2,temp__4425__auto__){
return (function (p1__8976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8976_SHARP_,"");
});})(document,s__8984__$2,temp__4425__auto__))
),informacast_csv$zip_worker$convert_strings_to_boolean_$_iter__8983(cljs.core.rest(s__8984__$2)));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Script",null,"postTone",null,"displayIcon",null,"audio",null,"preTone",null,"mainAudio",null,"icon",null], null), null),key)){
return informacast_csv.zip_worker.construct_blob(val);
} else {
return val;
}
});
informacast_csv.zip_worker.add_messages = (function informacast_csv$zip_worker$add_messages(parsed_csv,global_defaults){
informacast_csv.informormacast_communicator.reset_operation_record();

var seq__9018 = cljs.core.seq(parsed_csv);
var chunk__9019 = null;
var count__9020 = (0);
var i__9021 = (0);
while(true){
if((i__9021 < count__9020)){
var document = chunk__9019.cljs$core$IIndexed$_nth$arity$2(null,i__9021);
var form_data_9046 = (new FormData());
var seq__9022_9047 = cljs.core.seq(document);
var chunk__9023_9048 = null;
var count__9024_9049 = (0);
var i__9025_9050 = (0);
while(true){
if((i__9025_9050 < count__9024_9049)){
var vec__9026_9051 = chunk__9023_9048.cljs$core$IIndexed$_nth$arity$2(null,i__9025_9050);
var key_9052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026_9051,(0),null);
var val_9053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9026_9051,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9053 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9053);
}
})())){
form_data_9046.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9052),informacast_csv.zip_worker.construct_blob_if_necessary(key_9052,val_9053));
} else {
}

var G__9054 = seq__9022_9047;
var G__9055 = chunk__9023_9048;
var G__9056 = count__9024_9049;
var G__9057 = (i__9025_9050 + (1));
seq__9022_9047 = G__9054;
chunk__9023_9048 = G__9055;
count__9024_9049 = G__9056;
i__9025_9050 = G__9057;
continue;
} else {
var temp__4425__auto___9058 = cljs.core.seq(seq__9022_9047);
if(temp__4425__auto___9058){
var seq__9022_9059__$1 = temp__4425__auto___9058;
if(cljs.core.chunked_seq_QMARK_(seq__9022_9059__$1)){
var c__5310__auto___9060 = cljs.core.chunk_first(seq__9022_9059__$1);
var G__9061 = cljs.core.chunk_rest(seq__9022_9059__$1);
var G__9062 = c__5310__auto___9060;
var G__9063 = cljs.core.count(c__5310__auto___9060);
var G__9064 = (0);
seq__9022_9047 = G__9061;
chunk__9023_9048 = G__9062;
count__9024_9049 = G__9063;
i__9025_9050 = G__9064;
continue;
} else {
var vec__9027_9065 = cljs.core.first(seq__9022_9059__$1);
var key_9066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027_9065,(0),null);
var val_9067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027_9065,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9067 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9067);
}
})())){
form_data_9046.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9066),informacast_csv.zip_worker.construct_blob_if_necessary(key_9066,val_9067));
} else {
}

var G__9068 = cljs.core.next(seq__9022_9059__$1);
var G__9069 = null;
var G__9070 = (0);
var G__9071 = (0);
seq__9022_9047 = G__9068;
chunk__9023_9048 = G__9069;
count__9024_9049 = G__9070;
i__9025_9050 = G__9071;
continue;
}
} else {
}
}
break;
}

var seq__9028_9072 = cljs.core.seq(global_defaults);
var chunk__9029_9073 = null;
var count__9030_9074 = (0);
var i__9031_9075 = (0);
while(true){
if((i__9031_9075 < count__9030_9074)){
var vec__9032_9076 = chunk__9029_9073.cljs$core$IIndexed$_nth$arity$2(null,i__9031_9075);
var key_9077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9032_9076,(0),null);
var val_9078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9032_9076,(1),null);
form_data_9046.append(key_9077,informacast_csv.zip_worker.construct_blob_if_necessary(key_9077,val_9078));

var G__9079 = seq__9028_9072;
var G__9080 = chunk__9029_9073;
var G__9081 = count__9030_9074;
var G__9082 = (i__9031_9075 + (1));
seq__9028_9072 = G__9079;
chunk__9029_9073 = G__9080;
count__9030_9074 = G__9081;
i__9031_9075 = G__9082;
continue;
} else {
var temp__4425__auto___9083 = cljs.core.seq(seq__9028_9072);
if(temp__4425__auto___9083){
var seq__9028_9084__$1 = temp__4425__auto___9083;
if(cljs.core.chunked_seq_QMARK_(seq__9028_9084__$1)){
var c__5310__auto___9085 = cljs.core.chunk_first(seq__9028_9084__$1);
var G__9086 = cljs.core.chunk_rest(seq__9028_9084__$1);
var G__9087 = c__5310__auto___9085;
var G__9088 = cljs.core.count(c__5310__auto___9085);
var G__9089 = (0);
seq__9028_9072 = G__9086;
chunk__9029_9073 = G__9087;
count__9030_9074 = G__9088;
i__9031_9075 = G__9089;
continue;
} else {
var vec__9033_9090 = cljs.core.first(seq__9028_9084__$1);
var key_9091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9033_9090,(0),null);
var val_9092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9033_9090,(1),null);
form_data_9046.append(key_9091,informacast_csv.zip_worker.construct_blob_if_necessary(key_9091,val_9092));

var G__9093 = cljs.core.next(seq__9028_9084__$1);
var G__9094 = null;
var G__9095 = (0);
var G__9096 = (0);
seq__9028_9072 = G__9093;
chunk__9029_9073 = G__9094;
count__9030_9074 = G__9095;
i__9031_9075 = G__9096;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto___9097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Script");
if(cljs.core.truth_(temp__4423__auto___9097)){
var script_name_9098 = temp__4423__auto___9097;
var script_val_9099 = informacast_csv.zip_worker.construct_blob_if_necessary("Script",script_name_9098);
informacast_csv.informormacast_communicator.post_message(form_data_9046,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),new cljs.core.PersistentArrayMap(null, 1, ["messageAudioScript",script_val_9099], null),new cljs.core.Var(function(){return informacast_csv.informormacast_communicator.update_message;},cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator_SLASH_update_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator,cljs.core.cst$sym$update_DASH_message,"src/cljs/informacast_csv/informormacast_communicator.cljs",21,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$messageId,cljs.core.cst$sym$attributes,cljs.core.cst$sym$form_DASH_description], null)),null,(cljs.core.truth_(informacast_csv.informormacast_communicator.update_message)?informacast_csv.informormacast_communicator.update_message.cljs$lang$test:null)])));
} else {
informacast_csv.informormacast_communicator.post_message(form_data_9046,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),null,null);
}

var G__9100 = seq__9018;
var G__9101 = chunk__9019;
var G__9102 = count__9020;
var G__9103 = (i__9021 + (1));
seq__9018 = G__9100;
chunk__9019 = G__9101;
count__9020 = G__9102;
i__9021 = G__9103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9018);
if(temp__4425__auto__){
var seq__9018__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9018__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__9018__$1);
var G__9104 = cljs.core.chunk_rest(seq__9018__$1);
var G__9105 = c__5310__auto__;
var G__9106 = cljs.core.count(c__5310__auto__);
var G__9107 = (0);
seq__9018 = G__9104;
chunk__9019 = G__9105;
count__9020 = G__9106;
i__9021 = G__9107;
continue;
} else {
var document = cljs.core.first(seq__9018__$1);
var form_data_9108 = (new FormData());
var seq__9034_9109 = cljs.core.seq(document);
var chunk__9035_9110 = null;
var count__9036_9111 = (0);
var i__9037_9112 = (0);
while(true){
if((i__9037_9112 < count__9036_9111)){
var vec__9038_9113 = chunk__9035_9110.cljs$core$IIndexed$_nth$arity$2(null,i__9037_9112);
var key_9114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038_9113,(0),null);
var val_9115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038_9113,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9115 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9115);
}
})())){
form_data_9108.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9114),informacast_csv.zip_worker.construct_blob_if_necessary(key_9114,val_9115));
} else {
}

var G__9116 = seq__9034_9109;
var G__9117 = chunk__9035_9110;
var G__9118 = count__9036_9111;
var G__9119 = (i__9037_9112 + (1));
seq__9034_9109 = G__9116;
chunk__9035_9110 = G__9117;
count__9036_9111 = G__9118;
i__9037_9112 = G__9119;
continue;
} else {
var temp__4425__auto___9120__$1 = cljs.core.seq(seq__9034_9109);
if(temp__4425__auto___9120__$1){
var seq__9034_9121__$1 = temp__4425__auto___9120__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9034_9121__$1)){
var c__5310__auto___9122 = cljs.core.chunk_first(seq__9034_9121__$1);
var G__9123 = cljs.core.chunk_rest(seq__9034_9121__$1);
var G__9124 = c__5310__auto___9122;
var G__9125 = cljs.core.count(c__5310__auto___9122);
var G__9126 = (0);
seq__9034_9109 = G__9123;
chunk__9035_9110 = G__9124;
count__9036_9111 = G__9125;
i__9037_9112 = G__9126;
continue;
} else {
var vec__9039_9127 = cljs.core.first(seq__9034_9121__$1);
var key_9128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9039_9127,(0),null);
var val_9129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9039_9127,(1),null);
if(cljs.core.not((function (){var or__4526__auto__ = (val_9129 == null);
if(or__4526__auto__){
return or__4526__auto__;
} else {
return clojure.string.blank_QMARK_(val_9129);
}
})())){
form_data_9108.append(cljs.core.get.cljs$core$IFn$_invoke$arity$2(informacast_csv.zip_worker.csv_header_server_equivalencies,key_9128),informacast_csv.zip_worker.construct_blob_if_necessary(key_9128,val_9129));
} else {
}

var G__9130 = cljs.core.next(seq__9034_9121__$1);
var G__9131 = null;
var G__9132 = (0);
var G__9133 = (0);
seq__9034_9109 = G__9130;
chunk__9035_9110 = G__9131;
count__9036_9111 = G__9132;
i__9037_9112 = G__9133;
continue;
}
} else {
}
}
break;
}

var seq__9040_9134 = cljs.core.seq(global_defaults);
var chunk__9041_9135 = null;
var count__9042_9136 = (0);
var i__9043_9137 = (0);
while(true){
if((i__9043_9137 < count__9042_9136)){
var vec__9044_9138 = chunk__9041_9135.cljs$core$IIndexed$_nth$arity$2(null,i__9043_9137);
var key_9139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044_9138,(0),null);
var val_9140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044_9138,(1),null);
form_data_9108.append(key_9139,informacast_csv.zip_worker.construct_blob_if_necessary(key_9139,val_9140));

var G__9141 = seq__9040_9134;
var G__9142 = chunk__9041_9135;
var G__9143 = count__9042_9136;
var G__9144 = (i__9043_9137 + (1));
seq__9040_9134 = G__9141;
chunk__9041_9135 = G__9142;
count__9042_9136 = G__9143;
i__9043_9137 = G__9144;
continue;
} else {
var temp__4425__auto___9145__$1 = cljs.core.seq(seq__9040_9134);
if(temp__4425__auto___9145__$1){
var seq__9040_9146__$1 = temp__4425__auto___9145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9040_9146__$1)){
var c__5310__auto___9147 = cljs.core.chunk_first(seq__9040_9146__$1);
var G__9148 = cljs.core.chunk_rest(seq__9040_9146__$1);
var G__9149 = c__5310__auto___9147;
var G__9150 = cljs.core.count(c__5310__auto___9147);
var G__9151 = (0);
seq__9040_9134 = G__9148;
chunk__9041_9135 = G__9149;
count__9042_9136 = G__9150;
i__9043_9137 = G__9151;
continue;
} else {
var vec__9045_9152 = cljs.core.first(seq__9040_9146__$1);
var key_9153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9045_9152,(0),null);
var val_9154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9045_9152,(1),null);
form_data_9108.append(key_9153,informacast_csv.zip_worker.construct_blob_if_necessary(key_9153,val_9154));

var G__9155 = cljs.core.next(seq__9040_9146__$1);
var G__9156 = null;
var G__9157 = (0);
var G__9158 = (0);
seq__9040_9134 = G__9155;
chunk__9041_9135 = G__9156;
count__9042_9136 = G__9157;
i__9043_9137 = G__9158;
continue;
}
} else {
}
}
break;
}

var temp__4423__auto___9159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Script");
if(cljs.core.truth_(temp__4423__auto___9159)){
var script_name_9160 = temp__4423__auto___9159;
var script_val_9161 = informacast_csv.zip_worker.construct_blob_if_necessary("Script",script_name_9160);
informacast_csv.informormacast_communicator.post_message(form_data_9108,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),new cljs.core.PersistentArrayMap(null, 1, ["messageAudioScript",script_val_9161], null),new cljs.core.Var(function(){return informacast_csv.informormacast_communicator.update_message;},cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator_SLASH_update_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$informacast_DASH_csv$informormacast_DASH_communicator,cljs.core.cst$sym$update_DASH_message,"src/cljs/informacast_csv/informormacast_communicator.cljs",21,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$messageId,cljs.core.cst$sym$attributes,cljs.core.cst$sym$form_DASH_description], null)),null,(cljs.core.truth_(informacast_csv.informormacast_communicator.update_message)?informacast_csv.informormacast_communicator.update_message.cljs$lang$test:null)])));
} else {
informacast_csv.informormacast_communicator.post_message(form_data_9108,cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,"Description"),null,null);
}

var G__9162 = cljs.core.next(seq__9018__$1);
var G__9163 = null;
var G__9164 = (0);
var G__9165 = (0);
seq__9018 = G__9162;
chunk__9019 = G__9163;
count__9020 = G__9164;
i__9021 = G__9165;
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
var G__9174_9182 = informacast_csv.zip_worker.assets;
var G__9175_9183 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9174_9182,G__9175_9183) : cljs.core.reset_BANG_.call(null,G__9174_9182,G__9175_9183));

var G__9176_9184 = informacast_csv.zip_worker.missing_assets;
var G__9177_9185 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9176_9184,G__9177_9185) : cljs.core.reset_BANG_.call(null,G__9176_9184,G__9177_9185));

var zip_files_objs_9186 = (new JSZip(zip_file)).files;
var seq__9178_9187 = cljs.core.seq(Object.keys(zip_files_objs_9186));
var chunk__9179_9188 = null;
var count__9180_9189 = (0);
var i__9181_9190 = (0);
while(true){
if((i__9181_9190 < count__9180_9189)){
var file_name_9191 = chunk__9179_9188.cljs$core$IIndexed$_nth$arity$2(null,i__9181_9190);
var zip_file_obj_9192 = (zip_files_objs_9186[file_name_9191]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_9192);

var G__9193 = seq__9178_9187;
var G__9194 = chunk__9179_9188;
var G__9195 = count__9180_9189;
var G__9196 = (i__9181_9190 + (1));
seq__9178_9187 = G__9193;
chunk__9179_9188 = G__9194;
count__9180_9189 = G__9195;
i__9181_9190 = G__9196;
continue;
} else {
var temp__4425__auto___9197 = cljs.core.seq(seq__9178_9187);
if(temp__4425__auto___9197){
var seq__9178_9198__$1 = temp__4425__auto___9197;
if(cljs.core.chunked_seq_QMARK_(seq__9178_9198__$1)){
var c__5310__auto___9199 = cljs.core.chunk_first(seq__9178_9198__$1);
var G__9200 = cljs.core.chunk_rest(seq__9178_9198__$1);
var G__9201 = c__5310__auto___9199;
var G__9202 = cljs.core.count(c__5310__auto___9199);
var G__9203 = (0);
seq__9178_9187 = G__9200;
chunk__9179_9188 = G__9201;
count__9180_9189 = G__9202;
i__9181_9190 = G__9203;
continue;
} else {
var file_name_9204 = cljs.core.first(seq__9178_9198__$1);
var zip_file_obj_9205 = (zip_files_objs_9186[file_name_9204]);
informacast_csv.zip_worker.store_in_memory(zip_file_obj_9205);

var G__9206 = cljs.core.next(seq__9178_9198__$1);
var G__9207 = null;
var G__9208 = (0);
var G__9209 = (0);
seq__9178_9187 = G__9206;
chunk__9179_9188 = G__9207;
count__9180_9189 = G__9208;
i__9181_9190 = G__9209;
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
