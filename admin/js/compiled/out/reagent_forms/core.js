// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__21248_SHARP_,p2__21247_SHARP_){
var or__4594__auto__ = (p2__21247_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__21247_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__21248_SHARP_) : p2__21247_SHARP_.call(null,path,value,p1__21248_SHARP_));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return p1__21248_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__21250 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__21250) : wrapper.call(null,G__21250));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__21253 = id;
var G__21254 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21253,G__21254) : save_BANG_.call(null,G__21253,G__21254));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$get,(function (){var temp__4423__auto__ = cljs.core.cst$kw$in_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4423__auto__)){
var in_fn = temp__4423__auto__;
return reagent_forms.core.wrap_get_fn(cljs.core.cst$kw$get.cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return cljs.core.cst$kw$get.cljs$core$IFn$_invoke$arity$1(opts);
}
})(),cljs.core.cst$kw$save_BANG_,(function (){var temp__4423__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4423__auto__)){
var out_fn = temp__4423__auto__;
return reagent_forms.core.wrap_save_fn(cljs.core.cst$kw$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return cljs.core.cst$kw$save_BANG_.cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__5507__auto__ = (function (){var G__21255 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21255) : cljs.core.atom.call(null,G__21255));
})();
var prefer_table__5508__auto__ = (function (){var G__21256 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21256) : cljs.core.atom.call(null,G__21256));
})();
var method_cache__5509__auto__ = (function (){var G__21257 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21257) : cljs.core.atom.call(null,G__21257));
})();
var cached_hierarchy__5510__auto__ = (function (){var G__21258 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21258) : cljs.core.atom.call(null,G__21258));
})();
var hierarchy__5511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$numeric], null)))){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
});})(method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__))
,cljs.core.cst$kw$default,hierarchy__5511__auto__,method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4582__auto__ = cljs.core.not((function (){var G__21262 = parseFloat(value);
return isNaN(G__21262);
})());
if(and__4582__auto__){
return fmt;
} else {
return and__4582__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__5507__auto__ = (function (){var G__21263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21263) : cljs.core.atom.call(null,G__21263));
})();
var prefer_table__5508__auto__ = (function (){var G__21264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21264) : cljs.core.atom.call(null,G__21264));
})();
var method_cache__5509__auto__ = (function (){var G__21265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21265) : cljs.core.atom.call(null,G__21265));
})();
var cached_hierarchy__5510__auto__ = (function (){var G__21266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21266) : cljs.core.atom.call(null,G__21266));
})();
var hierarchy__5511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__){
return (function (p__21267,_){
var map__21268 = p__21267;
var map__21268__$1 = ((((!((map__21268 == null)))?((((map__21268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21268):map__21268);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$numeric,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$range,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__))
,cljs.core.cst$kw$default,hierarchy__5511__auto__,method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__21271,p__21272){
var map__21273 = p__21271;
var map__21273__$1 = ((((!((map__21273 == null)))?((((map__21273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21273):map__21273);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$fmt);
var map__21274 = p__21272;
var map__21274__$1 = ((((!((map__21274 == null)))?((((map__21274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21274):map__21274);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21274__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21274__$1,cljs.core.cst$kw$save_BANG_);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21274__$1,cljs.core.cst$kw$doc);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__4594__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__21273,map__21273__$1,field,id,fmt,map__21274,map__21274__$1,get,save_BANG_,doc){
return (function (p1__21270_SHARP_){
var G__21279 = id;
var G__21280 = (function (){var G__21281 = field;
var G__21282 = reagent_forms.core.value_of(p1__21270_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__21281,G__21282) : reagent_forms.core.format_type.call(null,G__21281,G__21282));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21279,G__21280) : save_BANG_.call(null,G__21279,G__21280));
});})(map__21273,map__21273__$1,field,id,fmt,map__21274,map__21274__$1,get,save_BANG_,doc))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__21283,p__21284){
var map__21285 = p__21283;
var map__21285__$1 = ((((!((map__21285 == null)))?((((map__21285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21285):map__21285);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21285__$1,cljs.core.cst$kw$id);
var map__21286 = p__21284;
var map__21286__$1 = ((((!((map__21286 == null)))?((((map__21286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21286):map__21286);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21286__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_checked,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)),cljs.core.cst$kw$on_DASH_change,((function (map__21285,map__21285__$1,id,map__21286,map__21286__$1,get,save_BANG_){
return (function (){
var G__21289 = id;
var G__21290 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21289,G__21290) : save_BANG_.call(null,G__21289,G__21290));
});})(map__21285,map__21285__$1,id,map__21286,map__21286__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__5659__auto__ = [];
var len__5652__auto___21298 = arguments.length;
var i__5653__auto___21299 = (0);
while(true){
if((i__5653__auto___21299 < len__5652__auto___21298)){
args__5659__auto__.push((arguments[i__5653__auto___21299]));

var G__21300 = (i__5653__auto___21299 + (1));
i__5653__auto___21299 = G__21300;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((2) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5660__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21294,opts,p__21295){
var vec__21296 = p__21294;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(1),null);
var body = cljs.core.nthnext(vec__21296,(2));
var vec__21297 = p__21295;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21297,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),attrs], 0))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq21291){
var G__21292 = cljs.core.first(seq21291);
var seq21291__$1 = cljs.core.next(seq21291);
var G__21293 = cljs.core.first(seq21291__$1);
var seq21291__$2 = cljs.core.next(seq21291__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__21292,G__21293,seq21291__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__5507__auto__ = (function (){var G__21301 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21301) : cljs.core.atom.call(null,G__21301));
})();
var prefer_table__5508__auto__ = (function (){var G__21302 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21302) : cljs.core.atom.call(null,G__21302));
})();
var method_cache__5509__auto__ = (function (){var G__21303 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21303) : cljs.core.atom.call(null,G__21303));
})();
var cached_hierarchy__5510__auto__ = (function (){var G__21304 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21304) : cljs.core.atom.call(null,G__21304));
})();
var hierarchy__5511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__){
return (function (p__21305,_){
var vec__21306 = p__21305;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(0),null);
var map__21307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(1),null);
var map__21307__$1 = ((((!((map__21307 == null)))?((((map__21307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21307):map__21307);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21307__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__,hierarchy__5511__auto__))
,cljs.core.cst$kw$default,hierarchy__5511__auto__,method_table__5507__auto__,prefer_table__5508__auto__,method_cache__5509__auto__,cached_hierarchy__5510__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__21310,p__21311){
var vec__21312 = p__21310;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21312,(0),null);
var map__21313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21312,(1),null);
var map__21313__$1 = ((((!((map__21313 == null)))?((((map__21313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21313):map__21313);
var attrs = map__21313__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313__$1,cljs.core.cst$kw$valid_QMARK_);
var body = cljs.core.nthnext(vec__21312,(2));
var map__21314 = p__21311;
var map__21314__$1 = ((((!((map__21314 == null)))?((((map__21314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21314):map__21314);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21314__$1,cljs.core.cst$kw$doc);
return ((function (vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21317 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21317) : visible__14869__auto__.call(null,G__21317));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__21318 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21318) : valid_QMARK_.call(null,G__21318));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,visible__14869__auto__,temp__4423__auto__,vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc){
return (function (p1__21309_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__21309_SHARP_))){
return [cljs.core.str(p1__21309_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,visible__14869__auto__,temp__4423__auto__,vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__21319 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21319) : valid_QMARK_.call(null,G__21319));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc){
return (function (p1__21309_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__21309_SHARP_))){
return [cljs.core.str(p1__21309_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__21312,type,map__21313,map__21313__$1,attrs,valid_QMARK_,body,map__21314,map__21314__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__21320,p__21321){
var vec__21322 = p__21320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21322,(0),null);
var map__21323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21322,(1),null);
var map__21323__$1 = ((((!((map__21323 == null)))?((((map__21323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21323):map__21323);
var attrs = map__21323__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323__$1,cljs.core.cst$kw$field);
var component = vec__21322;
var map__21324 = p__21321;
var map__21324__$1 = ((((!((map__21324 == null)))?((((map__21324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21324):map__21324);
var opts = map__21324__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324__$1,cljs.core.cst$kw$doc);
return ((function (vec__21322,_,map__21323,map__21323__$1,attrs,field,component,map__21324,map__21324__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21327 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21327) : visible__14869__auto__.call(null,G__21327));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__21322,_,map__21323,map__21323__$1,attrs,field,component,map__21324,map__21324__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__21330,p__21331){
var vec__21332 = p__21330;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(0),null);
var map__21333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(1),null);
var map__21333__$1 = ((((!((map__21333 == null)))?((((map__21333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21333):map__21333);
var attrs = map__21333__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333__$1,cljs.core.cst$kw$fmt);
var map__21334 = p__21331;
var map__21334__$1 = ((((!((map__21334 == null)))?((((map__21334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21334):map__21334);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,cljs.core.cst$kw$save_BANG_);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21337 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21337) : visible__14869__auto__.call(null,G__21337));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__4594__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (visible__14869__auto__,temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_){
return (function (p1__21328_SHARP_){
var G__21338 = input_value;
var G__21339 = reagent_forms.core.value_of(p1__21328_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21338,G__21339) : cljs.core.reset_BANG_.call(null,G__21338,G__21339));
});})(visible__14869__auto__,temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__14869__auto__,temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_){
return (function (p1__21329_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__21342 = id;
var G__21343 = (function (){var G__21344 = cljs.core.cst$kw$numeric;
var G__21345 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__21329_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__21344,G__21345) : reagent_forms.core.format_type.call(null,G__21344,G__21345));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21342,G__21343) : save_BANG_.call(null,G__21342,G__21343));
});})(visible__14869__auto__,temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__4594__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_){
return (function (p1__21328_SHARP_){
var G__21346 = input_value;
var G__21347 = reagent_forms.core.value_of(p1__21328_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21346,G__21347) : cljs.core.reset_BANG_.call(null,G__21346,G__21347));
});})(temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_){
return (function (p1__21329_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__21350 = id;
var G__21351 = (function (){var G__21352 = cljs.core.cst$kw$numeric;
var G__21353 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__21329_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__21352,G__21353) : reagent_forms.core.format_type.call(null,G__21352,G__21353));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21350,G__21351) : save_BANG_.call(null,G__21350,G__21351));
});})(temp__4423__auto__,input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(input_value,vec__21332,type,map__21333,map__21333__$1,attrs,id,fmt,map__21334,map__21334__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__21355,p__21356){
var vec__21357 = p__21355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,(0),null);
var map__21358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,(1),null);
var map__21358__$1 = ((((!((map__21358 == null)))?((((map__21358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21358):map__21358);
var attrs = map__21358__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var map__21359 = p__21356;
var map__21359__$1 = ((((!((map__21359 == null)))?((((map__21359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21359):map__21359);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359__$1,cljs.core.cst$kw$save_BANG_);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21362 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21362) : visible__14869__auto__.call(null,G__21362));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,((function (visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (p1__21354_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__21354_SHARP_) : save_BANG_.call(null,id,p1__21354_SHARP_));
});})(visible__14869__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_){
return (function (p1__21354_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__21354_SHARP_) : save_BANG_.call(null,id,p1__21354_SHARP_));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__21357,_,map__21358,map__21358__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__21359,map__21359__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__21363,p__21364){
var vec__21365 = p__21363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21365,(0),null);
var map__21366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21365,(1),null);
var map__21366__$1 = ((((!((map__21366 == null)))?((((map__21366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21366):map__21366);
var attrs = map__21366__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__21365;
var map__21367 = p__21364;
var map__21367__$1 = ((((!((map__21367 == null)))?((((map__21367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21367):map__21367);
var opts = map__21367__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4594__auto__ = checked;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return ((function (vec__21365,_,map__21366,map__21366__$1,attrs,id,field,checked,default_checked,component,map__21367,map__21367__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21370 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21370) : visible__14869__auto__.call(null,G__21370));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__21365,_,map__21366,map__21366__$1,attrs,id,field,checked,default_checked,component,map__21367,map__21367__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__21371,p__21372){
var vec__21373 = p__21371;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,(0),null);
var map__21374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,(1),null);
var map__21374__$1 = ((((!((map__21374 == null)))?((((map__21374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21374):map__21374);
var attrs = map__21374__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,cljs.core.cst$kw$placeholder);
var map__21375 = p__21372;
var map__21375__$1 = ((((!((map__21375 == null)))?((((map__21375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21375):map__21375);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,cljs.core.cst$kw$get);
return ((function (vec__21373,type,map__21374,map__21374__$1,attrs,id,preamble,postamble,placeholder,map__21375,map__21375__$1,doc,get){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21378 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21378) : visible__14869__auto__.call(null,G__21378));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__21373,type,map__21374,map__21374__$1,attrs,id,preamble,postamble,placeholder,map__21375,map__21375__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__21379,p__21380){
var vec__21381 = p__21379;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21381,(0),null);
var map__21382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21381,(1),null);
var map__21382__$1 = ((((!((map__21382 == null)))?((((map__21382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21382):map__21382);
var attrs = map__21382__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__21381,(2));
var map__21383 = p__21380;
var map__21383__$1 = ((((!((map__21383 == null)))?((((map__21383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21383):map__21383);
var opts = map__21383__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21386 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21386) : visible__14869__auto__.call(null,G__21386));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__21387 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__21387) : event.call(null,G__21387));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4594__auto__ = touch_event;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,visible__14869__auto__,temp__4423__auto__,vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,visible__14869__auto__,temp__4423__auto__,vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__21388 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__21388) : event.call(null,G__21388));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4594__auto__ = touch_event;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,temp__4423__auto__,vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,temp__4423__auto__,vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__21381,type,map__21382,map__21382__$1,attrs,id,event,touch_event,body,map__21383,map__21383__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__21389,p__21390){
var vec__21391 = p__21389;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21391,(0),null);
var map__21392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21391,(1),null);
var map__21392__$1 = ((((!((map__21392 == null)))?((((map__21392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21392):map__21392);
var attrs = map__21392__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,cljs.core.cst$kw$default_DASH_checked);
var body = cljs.core.nthnext(vec__21391,(2));
var map__21393 = p__21390;
var map__21393__$1 = ((((!((map__21393 == null)))?((((map__21393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21393):map__21393);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4594__auto__ = checked;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return ((function (vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21396 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21396) : visible__14869__auto__.call(null,G__21396));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (visible__14869__auto__,temp__4423__auto__,vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(visible__14869__auto__,temp__4423__auto__,vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(temp__4423__auto__,vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
}
});
;})(vec__21391,type,map__21392,map__21392__$1,attrs,field,name,value,checked,default_checked,body,map__21393,map__21393__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__21400,p__21401){
var vec__21402 = p__21400;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21402,(0),null);
var map__21403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21402,(1),null);
var map__21403__$1 = ((((!((map__21403 == null)))?((((map__21403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21403):map__21403);
var attrs = map__21403__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21403__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$input_DASH_placeholder);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21403__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21403__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21403__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var map__21404 = p__21401;
var map__21404__$1 = ((((!((map__21404 == null)))?((((map__21404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21404):map__21404);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__4582__auto__ = cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(cljs.core.truth_(and__4582__auto__)){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) > (-1));
} else {
return and__4582__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21407 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21407) : visible__14869__auto__.call(null,G__21407));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$placeholder,input_placeholder,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.not(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21397_SHARP_){
var temp__4425__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__21397_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
var G__21409_21434 = selections;
var G__21410_21435 = (function (){var G__21411 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__21411) : data_source.call(null,G__21411));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21409_21434,G__21410_21435) : cljs.core.reset_BANG_.call(null,G__21409_21434,G__21410_21435));

var G__21412_21436 = id;
var G__21413_21437 = reagent_forms.core.value_of(p1__21397_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21412_21436,G__21413_21437) : save_BANG_.call(null,G__21412_21436,G__21413_21437));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21398_SHARP_){
var G__21414 = p1__21398_SHARP_.which;
switch (G__21414) {
case (38):
p1__21398_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__21398_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__21415_21439 = id;
var G__21416_21440 = reagent_forms.core.value_of(p1__21398_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21415_21439,G__21416_21440) : save_BANG_.call(null,G__21415_21439,G__21416_21440));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected();

break;
case (13):
return choose_selected();

break;
case (27):
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));

break;
default:
return "default";

}
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4594__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4594__auto__){
return or__4594__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21399_SHARP_){
var G__21418 = selected_index;
var G__21419 = (function (){var G__21420 = p1__21399_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__21420);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21418,G__21419) : cljs.core.reset_BANG_.call(null,G__21418,G__21419));
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(visible__14869__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$placeholder,input_placeholder,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.not(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21397_SHARP_){
var temp__4425__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__21397_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
var G__21422_21441 = selections;
var G__21423_21442 = (function (){var G__21424 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__21424) : data_source.call(null,G__21424));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21422_21441,G__21423_21442) : cljs.core.reset_BANG_.call(null,G__21422_21441,G__21423_21442));

var G__21425_21443 = id;
var G__21426_21444 = reagent_forms.core.value_of(p1__21397_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21425_21443,G__21426_21444) : save_BANG_.call(null,G__21425_21443,G__21426_21444));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21398_SHARP_){
var G__21427 = p1__21398_SHARP_.which;
switch (G__21427) {
case (38):
p1__21398_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__21398_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__21428_21446 = id;
var G__21429_21447 = reagent_forms.core.value_of(p1__21398_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21428_21446,G__21429_21447) : save_BANG_.call(null,G__21428_21446,G__21429_21447));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected();

break;
case (13):
return choose_selected();

break;
case (27):
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));

break;
default:
return "default";

}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4594__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4594__auto__){
return or__4594__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (p1__21399_SHARP_){
var G__21431 = selected_index;
var G__21432 = (function (){var G__21433 = p1__21399_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__21433);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21431,G__21432) : cljs.core.reset_BANG_.call(null,G__21431,G__21432));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__21402,type,map__21403,map__21403__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__21404,map__21404__$1,doc,get,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__21448,p__21449,selections,field,id){
var vec__21479 = p__21448;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479,(0),null);
var map__21480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21479,(1),null);
var map__21480__$1 = ((((!((map__21480 == null)))?((((map__21480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21480):map__21480);
var attrs = map__21480__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__21479,(2));
var map__21481 = p__21449;
var map__21481__$1 = ((((!((map__21481 == null)))?((((map__21481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21481):map__21481);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__21479,type,map__21480,map__21480__$1,attrs,key,touch_event,body,map__21481,map__21481__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__21502 = id;
var G__21503 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21502,G__21503) : save_BANG_.call(null,G__21502,G__21503));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key);
var G__21504_21508 = selections;
var G__21505_21509 = cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21504_21508,G__21505_21509) : cljs.core.reset_BANG_.call(null,G__21504_21508,G__21505_21509));

var G__21506 = id;
var G__21507 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21506,G__21507) : save_BANG_.call(null,G__21506,G__21507));
}
});})(vec__21479,type,map__21480,map__21480__$1,attrs,key,touch_event,body,map__21481,map__21481__$1,save_BANG_,multi_select))
;
return ((function (vec__21479,type,map__21480,map__21480__$1,attrs,key,touch_event,body,map__21481,map__21481__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?"active":null),(function (){var or__4594__auto__ = touch_event;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__21479,type,map__21480,map__21480__$1,attrs,key,touch_event,body,map__21481,map__21481__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__21510){
var map__21517 = p__21510;
var map__21517__$1 = ((((!((map__21517 == null)))?((((map__21517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21517):map__21517);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__21517,map__21517__$1,get,multi_select){
return (function (m,p__21519){
var vec__21520 = p__21519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520,(0),null);
var map__21521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520,(1),null);
var map__21521__$1 = ((((!((map__21521 == null)))?((((map__21521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21521):map__21521);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__21517,map__21517__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__21525,p__21526){
var vec__21537 = p__21525;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21537,(0),null);
var map__21538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21537,(1),null);
var map__21538__$1 = ((((!((map__21538 == null)))?((((map__21538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21538):map__21538);
var attrs = map__21538__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21538__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21538__$1,cljs.core.cst$kw$id);
var selection_items = cljs.core.nthnext(vec__21537,(2));
var map__21539 = p__21526;
var map__21539__$1 = ((((!((map__21539 == null)))?((((map__21539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21539):map__21539);
var opts = map__21539__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21539__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get){
return (function (p1__21523_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get){
return (function (p__21542){
var vec__21543 = p__21542;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21543,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get))
,p1__21523_SHARP_));
});})(selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get){
return (function (p1__21524_SHARP_){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__21524_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var visible_QMARK_ = temp__4423__auto__;
var G__21545 = (function (){var G__21546 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21546) : cljs.core.deref.call(null,G__21546));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21545) : visible_QMARK_.call(null,G__21545));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__21537,type,map__21538,map__21538__$1,attrs,field,id,selection_items,map__21539,map__21539__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__21547,p__21548){
var vec__21549 = p__21547;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21549,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21549,(1),null);
var field = vec__21549;
var map__21550 = p__21548;
var map__21550__$1 = ((((!((map__21550 == null)))?((((map__21550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21550):map__21550);
var opts = map__21550__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21550__$1,cljs.core.cst$kw$doc);
return ((function (vec__21549,_,attrs,field,map__21550,map__21550__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21552 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21552) : visible__14869__auto__.call(null,G__21552));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__21549,_,attrs,field,map__21550,map__21550__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__21553,p__21554){
var vec__21555 = p__21553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21555,(1),null);
var field = vec__21555;
var map__21556 = p__21554;
var map__21556__$1 = ((((!((map__21556 == null)))?((((map__21556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21556):map__21556);
var opts = map__21556__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21556__$1,cljs.core.cst$kw$doc);
return ((function (vec__21555,_,attrs,field,map__21556,map__21556__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21558 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21558) : visible__14869__auto__.call(null,G__21558));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
}
});
;})(vec__21555,_,attrs,field,map__21556,map__21556__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5366__auto__ = (function reagent_forms$core$map_options_$_iter__21577(s__21578){
return (new cljs.core.LazySeq(null,(function (){
var s__21578__$1 = s__21578;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21578__$1);
if(temp__4425__auto__){
var s__21578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21578__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__21578__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__21580 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__21579 = (0);
while(true){
if((i__21579 < size__5365__auto__)){
var vec__21589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__21579);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21589,(0),null);
var map__21590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21589,(1),null);
var map__21590__$1 = ((((!((map__21590 == null)))?((((map__21590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21590):map__21590);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21590__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21589,(2),null);
cljs.core.chunk_append(b__21580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__21595 = (i__21579 + (1));
i__21579 = G__21595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21580),reagent_forms$core$map_options_$_iter__21577(cljs.core.chunk_rest(s__21578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21580),null);
}
} else {
var vec__21592 = cljs.core.first(s__21578__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592,(0),null);
var map__21593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592,(1),null);
var map__21593__$1 = ((((!((map__21593 == null)))?((((map__21593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21593):map__21593);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21593__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__21577(cljs.core.rest(s__21578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21596_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__21596_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__21599,p__21600){
var vec__21601 = p__21599;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21601,(0),null);
var map__21602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21601,(1),null);
var map__21602__$1 = ((((!((map__21602 == null)))?((((map__21602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21602):map__21602);
var attrs = map__21602__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602__$1,cljs.core.cst$kw$id);
var options = cljs.core.nthnext(vec__21601,(2));
var map__21603 = p__21600;
var map__21603__$1 = ((((!((map__21603 == null)))?((((map__21603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21603):map__21603);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21603__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21603__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21603__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4594__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__21606_21615 = id;
var G__21607_21616 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21606_21615,G__21607_21616) : save_BANG_.call(null,G__21606_21615,G__21607_21616));

return ((function (options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__14869__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__21608 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__14869__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__14869__auto__.cljs$core$IFn$_invoke$arity$1(G__21608) : visible__14869__auto__.call(null,G__21608));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (visible__14869__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_){
return (function (p1__21597_SHARP_){
var G__21609 = id;
var G__21610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__21597_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21609,G__21610) : save_BANG_.call(null,G__21609,G__21610));
});})(visible__14869__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__14869__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_){
return (function (p1__21598_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21598_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__21611 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21611) : visible_QMARK_.call(null,G__21611));
} else {
return true;
}
});})(visible__14869__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_){
return (function (p1__21597_SHARP_){
var G__21612 = id;
var G__21613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__21597_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__21612,G__21613) : save_BANG_.call(null,G__21612,G__21613));
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_){
return (function (p1__21598_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21598_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__21614 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21614) : visible_QMARK_.call(null,G__21614));
} else {
return true;
}
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__21601,type,map__21602,map__21602__$1,attrs,field,id,options,map__21603,map__21603__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$field));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__5659__auto__ = [];
var len__5652__auto___21621 = arguments.length;
var i__5653__auto___21622 = (0);
while(true){
if((i__5653__auto___21622 < len__5652__auto___21621)){
args__5659__auto__.push((arguments[i__5653__auto___21622]));

var G__21623 = (i__5653__auto___21622 + (1));
i__5653__auto___21622 = G__21623;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((2) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5660__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__21617_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc)),(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(p1__21617_SHARP_) : reagent_forms.core.id__GT_path.call(null,p1__21617_SHARP_)));
}),cljs.core.cst$kw$save_BANG_,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_(node))){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq21618){
var G__21619 = cljs.core.first(seq21618);
var seq21618__$1 = cljs.core.next(seq21618);
var G__21620 = cljs.core.first(seq21618__$1);
var seq21618__$2 = cljs.core.next(seq21618__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__21619,G__21620,seq21618__$2);
});
