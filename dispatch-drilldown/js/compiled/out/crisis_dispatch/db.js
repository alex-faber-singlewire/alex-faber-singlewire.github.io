// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.db');
goog.require('cljs.core');
goog.require('schema.core');
crisis_dispatch.db.db_schema = cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key(cljs.core.cst$kw$interval),schema.core.optional_key(cljs.core.cst$kw$appearance),schema.core.optional_key(cljs.core.cst$kw$active_DASH_parameter),schema.core.optional_key(cljs.core.cst$kw$selected_DASH_options),schema.core.optional_key(cljs.core.cst$kw$active_DASH_scenario),schema.core.optional_key(cljs.core.cst$kw$active_DASH_situation_DASH_name),schema.core.optional_key(cljs.core.cst$kw$active_DASH_situations),cljs.core.cst$kw$active_DASH_panel,schema.core.optional_key(cljs.core.cst$kw$broadcast_DASH_instructions),schema.core.optional_key(cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_),schema.core.optional_key(cljs.core.cst$kw$configuration),schema.core.optional_key(cljs.core.cst$kw$situations),schema.core.optional_key(cljs.core.cst$kw$fetched_DASH_messages),schema.core.optional_key(cljs.core.cst$kw$admin_DASH_configuration)],[schema.core.Any,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$bannerImage,schema.core.Str,cljs.core.cst$kw$bannerText,schema.core.Str,cljs.core.cst$kw$color,schema.core.Str], null),schema.core.Str,cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Str], true, false),schema.core.Str,schema.core.maybe(schema.core.Str),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.maybe(schema.core.Any)], null),schema.core.Bool,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,schema.core.Str,cljs.core.cst$kw$username,schema.core.Str,cljs.core.cst$kw$password,schema.core.Str], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null),schema.core.Any,schema.core.maybe(schema.core.Any)]);
crisis_dispatch.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$active_DASH_panel,cljs.core.cst$kw$home,cljs.core.cst$kw$active_DASH_situation_DASH_name,null,cljs.core.cst$kw$ic_DASH_handshake_DASH_successful_QMARK_,true], null);
crisis_dispatch.db.validate = (function crisis_dispatch$db$validate(db){
try{return schema.core.validate(crisis_dispatch.db.db_schema,db);
}catch (e15192){if((e15192 instanceof Error)){
var e = e15192;
console.error("Database Integrity Issue, current state shown below");

console.log(db);

var G__15193_15194 = JSON.stringify(cljs.core.clj__GT_js(db));
console.log(G__15193_15194);

throw e;
} else {
throw e15192;

}
}});
