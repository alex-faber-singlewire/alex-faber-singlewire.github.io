// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.db');
goog.require('cljs.core');
goog.require('schema.core');
crisis_proto.db.related_option_schema = cljs.core.PersistentArrayMap.fromArray([schema.core.maybe(schema.core.Str),schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map_QMARK_,schema.core.recursive(new cljs.core.Var(function(){return crisis_proto.db.related_option_schema;},cljs.core.cst$sym$crisis_DASH_proto$db_SLASH_related_DASH_option_DASH_schema,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$ns,cljs.core.cst$sym$crisis_DASH_proto$db,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$file,"/Users/alexfaber/Singlewire/Playground/crisis-proto/src/cljs/crisis_proto/db.cljs",cljs.core.cst$kw$line,4,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$related_DASH_option_DASH_schema,cljs.core.cst$kw$test,(cljs.core.truth_(crisis_proto.db.related_option_schema)?crisis_proto.db.related_option_schema.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null))),cljs.core.cst$kw$else,schema.core.maybe(schema.core.Str)], 0))], true, false);
crisis_proto.db.db_schema = cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key(cljs.core.cst$kw$active_DASH_scenario),schema.core.optional_key(cljs.core.cst$kw$network_DASH_response),schema.core.optional_key(cljs.core.cst$kw$form_DASH_submission),schema.core.optional_key(cljs.core.cst$kw$fetched_DASH_recipient_DASH_groups),schema.core.optional_key(cljs.core.cst$kw$scenarios),schema.core.optional_key(cljs.core.cst$kw$selected_DASH_message),schema.core.optional_key(cljs.core.cst$kw$working_QMARK_),schema.core.optional_key(cljs.core.cst$kw$modal_DASH_content),schema.core.optional_key(cljs.core.cst$kw$selected_DASH_option),schema.core.optional_key(cljs.core.cst$kw$configuration),schema.core.optional_key(cljs.core.cst$kw$button_DASH_preview_DASH_color),schema.core.optional_key(cljs.core.cst$kw$fetched_DASH_messages),schema.core.required_key(cljs.core.cst$kw$active_DASH_panel),schema.core.optional_key(cljs.core.cst$kw$selected_DASH_parameter_DASH_options),schema.core.optional_key(cljs.core.cst$kw$uploaded_DASH_image)],[schema.core.Str,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,schema.core.Any,cljs.core.cst$kw$result,schema.core.Any], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,schema.core.Any,cljs.core.cst$kw$result,schema.core.Any], null),schema.core.Any,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$name,schema.core.Str,schema.core.optional_key(cljs.core.cst$kw$icon),schema.core.maybe(schema.core.Str),schema.core.optional_key(cljs.core.cst$kw$button_DASH_color),schema.core.maybe(schema.core.Str),schema.core.optional_key(cljs.core.cst$kw$affiliations),cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$messages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),schema.core.optional_key(cljs.core.cst$kw$full_DASH_message_DASH_responses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),schema.core.optional_key(cljs.core.cst$kw$message_DASH_recipient_DASH_group_DASH_mapping),cljs.core.PersistentArrayMap.fromArray([schema.core.maybe(schema.core.Num),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.maybe(schema.core.Any)], null)], true, false),schema.core.optional_key(cljs.core.cst$kw$message_DASH_parameter_DASH_recipient_DASH_group_DASH_mapping),cljs.core.PersistentArrayMap.fromArray([schema.core.maybe(schema.core.Num),cljs.core.PersistentArrayMap.fromArray([schema.core.maybe(schema.core.Str),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.maybe(schema.core.Any)], null)], true, false)], true, false)], true, false),schema.core.optional_key(cljs.core.cst$kw$parameters),cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$entries,cljs.core.PersistentHashSet.fromArray([schema.core.Str], true),cljs.core.cst$kw$reconciled_QMARK_,schema.core.Bool,schema.core.optional_key(cljs.core.cst$kw$reconciliation),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$order,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),cljs.core.cst$kw$questions,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Str], true, false),cljs.core.cst$kw$destination_DASH_determined_DASH_by,schema.core.maybe(schema.core.Str),cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false),cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.maybe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,schema.core.Str,cljs.core.cst$kw$parents,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.maybe(schema.core.Any)], true, false)], null))], null)], true, false)], null),schema.core.optional_key(cljs.core.cst$kw$reconciliation_DASH_temp),cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(cljs.core.cst$kw$order),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null),schema.core.optional_key(cljs.core.cst$kw$questions),cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Str], true, false),schema.core.optional_key(cljs.core.cst$kw$destination_DASH_determined_DASH_by),schema.core.maybe(schema.core.Str),schema.core.optional_key(cljs.core.cst$kw$allow_DASH_freeform_DASH_text_QMARK_),cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false),schema.core.optional_key(cljs.core.cst$kw$options),cljs.core.PersistentArrayMap.fromArray([schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.maybe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,schema.core.Str,cljs.core.cst$kw$parents,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.maybe(schema.core.Any)], true, false)], null))], null)], true, false)], true, false)], true, false)], true, false)], true, false),schema.core.maybe(schema.core.Any),schema.core.Bool,schema.core.Any,schema.core.maybe(schema.core.Any),cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(cljs.core.cst$kw$base_DASH_url),schema.core.Str,schema.core.optional_key(cljs.core.cst$kw$username),schema.core.Str,schema.core.optional_key(cljs.core.cst$kw$password),schema.core.Str], true, false),schema.core.maybe(schema.core.Str),schema.core.Any,schema.core.Keyword,cljs.core.PersistentArrayMap.fromArray([schema.core.maybe(schema.core.Str),schema.core.maybe(schema.core.Any)], true, false),schema.core.maybe(schema.core.Str)]);
crisis_proto.db.default_db = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$form_DASH_submission,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$errors,null,cljs.core.cst$kw$result,null], null),cljs.core.cst$kw$modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"modal"], null),cljs.core.cst$kw$active_DASH_panel,cljs.core.cst$kw$home,cljs.core.cst$kw$selected_DASH_parameter_DASH_options,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$scenarios,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$configuration,cljs.core.PersistentArrayMap.EMPTY], null);
crisis_proto.db.validate = (function crisis_proto$db$validate(db){
try{return schema.core.validate(crisis_proto.db.db_schema,db);
}catch (e16618){if((e16618 instanceof Error)){
var e = e16618;
console.error("Database Integrity Issue, current state shown below");

console.log(db);

var G__16619_16620 = JSON.stringify(cljs.core.clj__GT_js(db));
console.log(G__16619_16620);

throw e;
} else {
throw e16618;

}
}});