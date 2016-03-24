// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
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
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__10655_SHARP_,p2__10654_SHARP_){
var or__4526__auto__ = (p2__10654_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__10654_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__10655_SHARP_) : p2__10654_SHARP_.call(null,path,value,p1__10655_SHARP_));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return p1__10655_SHARP_;
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
var G__10657 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__10657) : wrapper.call(null,G__10657));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__10660 = id;
var G__10661 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10660,G__10661) : save_BANG_.call(null,G__10660,G__10661));
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
reagent_forms.core.format_type = (function (){var method_table__5420__auto__ = (function (){var G__10662 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10662) : cljs.core.atom.call(null,G__10662));
})();
var prefer_table__5421__auto__ = (function (){var G__10663 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10663) : cljs.core.atom.call(null,G__10663));
})();
var method_cache__5422__auto__ = (function (){var G__10664 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10664) : cljs.core.atom.call(null,G__10664));
})();
var cached_hierarchy__5423__auto__ = (function (){var G__10665 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10665) : cljs.core.atom.call(null,G__10665));
})();
var hierarchy__5424__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$numeric], null)))){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
});})(method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__))
,cljs.core.cst$kw$default,hierarchy__5424__auto__,method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4514__auto__ = cljs.core.not((function (){var G__10669 = parseFloat(value);
return isNaN(G__10669);
})());
if(and__4514__auto__){
return fmt;
} else {
return and__4514__auto__;
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
if(cljs.core.truth_(reagent_forms.core.valid_number_ending_QMARK_(n))){
return n;
} else {
return parsed;
}
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
reagent_forms.core.bind = (function (){var method_table__5420__auto__ = (function (){var G__10670 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10670) : cljs.core.atom.call(null,G__10670));
})();
var prefer_table__5421__auto__ = (function (){var G__10671 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10671) : cljs.core.atom.call(null,G__10671));
})();
var method_cache__5422__auto__ = (function (){var G__10672 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10672) : cljs.core.atom.call(null,G__10672));
})();
var cached_hierarchy__5423__auto__ = (function (){var G__10673 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10673) : cljs.core.atom.call(null,G__10673));
})();
var hierarchy__5424__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__){
return (function (p__10674,_){
var map__10675 = p__10674;
var map__10675__$1 = ((((!((map__10675 == null)))?((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10675):map__10675);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10675__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$numeric,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$range,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__))
,cljs.core.cst$kw$default,hierarchy__5424__auto__,method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__10678,p__10679){
var map__10680 = p__10678;
var map__10680__$1 = ((((!((map__10680 == null)))?((((map__10680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10680):map__10680);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,cljs.core.cst$kw$fmt);
var map__10681 = p__10679;
var map__10681__$1 = ((((!((map__10681 == null)))?((((map__10681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10681):map__10681);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10681__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10681__$1,cljs.core.cst$kw$save_BANG_);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10681__$1,cljs.core.cst$kw$doc);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__4526__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__10680,map__10680__$1,field,id,fmt,map__10681,map__10681__$1,get,save_BANG_,doc){
return (function (p1__10677_SHARP_){
var G__10686 = id;
var G__10687 = (function (){var G__10688 = field;
var G__10689 = reagent_forms.core.value_of(p1__10677_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__10688,G__10689) : reagent_forms.core.format_type.call(null,G__10688,G__10689));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10686,G__10687) : save_BANG_.call(null,G__10686,G__10687));
});})(map__10680,map__10680__$1,field,id,fmt,map__10681,map__10681__$1,get,save_BANG_,doc))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__10690,p__10691){
var map__10692 = p__10690;
var map__10692__$1 = ((((!((map__10692 == null)))?((((map__10692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10692):map__10692);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10692__$1,cljs.core.cst$kw$id);
var map__10693 = p__10691;
var map__10693__$1 = ((((!((map__10693 == null)))?((((map__10693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10693):map__10693);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10693__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)),cljs.core.cst$kw$on_DASH_change,((function (map__10692,map__10692__$1,id,map__10693,map__10693__$1,get,save_BANG_){
return (function (){
var G__10696 = id;
var G__10697 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10696,G__10697) : save_BANG_.call(null,G__10696,G__10697));
});})(map__10692,map__10692__$1,id,map__10693,map__10693__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(){
var args__5572__auto__ = [];
var len__5565__auto___10705 = arguments.length;
var i__5566__auto___10706 = (0);
while(true){
if((i__5566__auto___10706 < len__5565__auto___10705)){
args__5572__auto__.push((arguments[i__5566__auto___10706]));

var G__10707 = (i__5566__auto___10706 + (1));
i__5566__auto___10706 = G__10707;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__10701,opts,p__10702){
var vec__10703 = p__10701;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10703,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10703,(1),null);
var body = cljs.core.nthnext(vec__10703,(2));
var vec__10704 = p__10702;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10704,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),attrs], 0))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq10698){
var G__10699 = cljs.core.first(seq10698);
var seq10698__$1 = cljs.core.next(seq10698);
var G__10700 = cljs.core.first(seq10698__$1);
var seq10698__$2 = cljs.core.next(seq10698__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__10699,G__10700,seq10698__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__5420__auto__ = (function (){var G__10708 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10708) : cljs.core.atom.call(null,G__10708));
})();
var prefer_table__5421__auto__ = (function (){var G__10709 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10709) : cljs.core.atom.call(null,G__10709));
})();
var method_cache__5422__auto__ = (function (){var G__10710 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10710) : cljs.core.atom.call(null,G__10710));
})();
var cached_hierarchy__5423__auto__ = (function (){var G__10711 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10711) : cljs.core.atom.call(null,G__10711));
})();
var hierarchy__5424__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__){
return (function (p__10712,_){
var vec__10713 = p__10712;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10713,(0),null);
var map__10714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10713,(1),null);
var map__10714__$1 = ((((!((map__10714 == null)))?((((map__10714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10714):map__10714);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10714__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__,hierarchy__5424__auto__))
,cljs.core.cst$kw$default,hierarchy__5424__auto__,method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__10717,p__10718){
var vec__10719 = p__10717;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,(0),null);
var map__10720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10719,(1),null);
var map__10720__$1 = ((((!((map__10720 == null)))?((((map__10720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10720):map__10720);
var attrs = map__10720__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10720__$1,cljs.core.cst$kw$valid_QMARK_);
var body = cljs.core.nthnext(vec__10719,(2));
var map__10721 = p__10718;
var map__10721__$1 = ((((!((map__10721 == null)))?((((map__10721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10721):map__10721);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10721__$1,cljs.core.cst$kw$doc);
return ((function (vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10724 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10724) : visible__9323__auto__.call(null,G__10724));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__10725 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__10725) : valid_QMARK_.call(null,G__10725));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,visible__9323__auto__,temp__4423__auto__,vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc){
return (function (p1__10716_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__10716_SHARP_))){
return [cljs.core.str(p1__10716_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,visible__9323__auto__,temp__4423__auto__,vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__10726 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__10726) : valid_QMARK_.call(null,G__10726));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc){
return (function (p1__10716_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__10716_SHARP_))){
return [cljs.core.str(p1__10716_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__10719,type,map__10720,map__10720__$1,attrs,valid_QMARK_,body,map__10721,map__10721__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__10727,p__10728){
var vec__10729 = p__10727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10729,(0),null);
var map__10730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10729,(1),null);
var map__10730__$1 = ((((!((map__10730 == null)))?((((map__10730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10730):map__10730);
var attrs = map__10730__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10730__$1,cljs.core.cst$kw$field);
var component = vec__10729;
var map__10731 = p__10728;
var map__10731__$1 = ((((!((map__10731 == null)))?((((map__10731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10731):map__10731);
var opts = map__10731__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10731__$1,cljs.core.cst$kw$doc);
return ((function (vec__10729,_,map__10730,map__10730__$1,attrs,field,component,map__10731,map__10731__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10734 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10734) : visible__9323__auto__.call(null,G__10734));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__10729,_,map__10730,map__10730__$1,attrs,field,component,map__10731,map__10731__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__10736,p__10737){
var vec__10738 = p__10736;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10738,(0),null);
var map__10739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10738,(1),null);
var map__10739__$1 = ((((!((map__10739 == null)))?((((map__10739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10739):map__10739);
var attrs = map__10739__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10739__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10739__$1,cljs.core.cst$kw$fmt);
var map__10740 = p__10737;
var map__10740__$1 = ((((!((map__10740 == null)))?((((map__10740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10740):map__10740);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10740__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10740__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10740__$1,cljs.core.cst$kw$save_BANG_);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$changed_DASH_self_QMARK_,false,cljs.core.cst$kw$value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))], null));
return ((function (display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10743 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10743) : visible__9323__auto__.call(null,G__10743));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var doc_value = (function (){var or__4526__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "";
}
})();
var map__10744 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(display_value) : cljs.core.deref.call(null,display_value));
var map__10744__$1 = ((((!((map__10744 == null)))?((((map__10744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10744):map__10744);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10744__$1,cljs.core.cst$kw$changed_DASH_self_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10744__$1,cljs.core.cst$kw$value);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.cst$kw$changed_DASH_self_QMARK_);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.cst$kw$on_DASH_change,((function (visible__9323__auto__,temp__4423__auto__,display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_){
return (function (p1__10735_SHARP_){
var temp__4423__auto____$1 = (function (){var G__10746 = cljs.core.cst$kw$numeric;
var G__10747 = reagent_forms.core.value_of(p1__10735_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__10746,G__10747) : reagent_forms.core.format_type.call(null,G__10746,G__10747));
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
var G__10748_10760 = display_value;
var G__10749_10761 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$changed_DASH_self_QMARK_,true,cljs.core.cst$kw$value,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10748_10760,G__10749_10761) : cljs.core.reset_BANG_.call(null,G__10748_10760,G__10749_10761));

var G__10750 = id;
var G__10751 = parseFloat(value);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10750,G__10751) : save_BANG_.call(null,G__10750,G__10751));
} else {
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
}
});})(visible__9323__auto__,temp__4423__auto__,display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var doc_value = (function (){var or__4526__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return "";
}
})();
var map__10752 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(display_value) : cljs.core.deref.call(null,display_value));
var map__10752__$1 = ((((!((map__10752 == null)))?((((map__10752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10752):map__10752);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10752__$1,cljs.core.cst$kw$changed_DASH_self_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10752__$1,cljs.core.cst$kw$value);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.cst$kw$changed_DASH_self_QMARK_);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_){
return (function (p1__10735_SHARP_){
var temp__4423__auto____$1 = (function (){var G__10754 = cljs.core.cst$kw$numeric;
var G__10755 = reagent_forms.core.value_of(p1__10735_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__10754,G__10755) : reagent_forms.core.format_type.call(null,G__10754,G__10755));
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
var G__10756_10762 = display_value;
var G__10757_10763 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$changed_DASH_self_QMARK_,true,cljs.core.cst$kw$value,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10756_10762,G__10757_10763) : cljs.core.reset_BANG_.call(null,G__10756_10762,G__10757_10763));

var G__10758 = id;
var G__10759 = parseFloat(value);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10758,G__10759) : save_BANG_.call(null,G__10758,G__10759));
} else {
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
}
});})(temp__4423__auto__,display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(display_value,vec__10738,type,map__10739,map__10739__$1,attrs,id,fmt,map__10740,map__10740__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__10765,p__10766){
var vec__10767 = p__10765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10767,(0),null);
var map__10768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10767,(1),null);
var map__10768__$1 = ((((!((map__10768 == null)))?((((map__10768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10768):map__10768);
var attrs = map__10768__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10768__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var map__10769 = p__10766;
var map__10769__$1 = ((((!((map__10769 == null)))?((((map__10769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10769):map__10769);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,cljs.core.cst$kw$save_BANG_);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10772 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10772) : visible__9323__auto__.call(null,G__10772));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,((function (visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (p1__10764_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__10764_SHARP_) : save_BANG_.call(null,id,p1__10764_SHARP_));
});})(visible__9323__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_){
return (function (p1__10764_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__10764_SHARP_) : save_BANG_.call(null,id,p1__10764_SHARP_));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__10767,_,map__10768,map__10768__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__10769,map__10769__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__10773,p__10774){
var vec__10775 = p__10773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10775,(0),null);
var map__10776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10775,(1),null);
var map__10776__$1 = ((((!((map__10776 == null)))?((((map__10776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10776):map__10776);
var attrs = map__10776__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10776__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10776__$1,cljs.core.cst$kw$field);
var component = vec__10775;
var map__10777 = p__10774;
var map__10777__$1 = ((((!((map__10777 == null)))?((((map__10777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10777):map__10777);
var opts = map__10777__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10777__$1,cljs.core.cst$kw$get);
return ((function (vec__10775,_,map__10776,map__10776__$1,attrs,id,field,component,map__10777,map__10777__$1,opts,doc,get){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10780 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10780) : visible__9323__auto__.call(null,G__10780));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__10775,_,map__10776,map__10776__$1,attrs,id,field,component,map__10777,map__10777__$1,opts,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__10781,p__10782){
var vec__10783 = p__10781;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10783,(0),null);
var map__10784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10783,(1),null);
var map__10784__$1 = ((((!((map__10784 == null)))?((((map__10784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10784):map__10784);
var attrs = map__10784__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10784__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10784__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10784__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10784__$1,cljs.core.cst$kw$placeholder);
var map__10785 = p__10782;
var map__10785__$1 = ((((!((map__10785 == null)))?((((map__10785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10785):map__10785);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10785__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10785__$1,cljs.core.cst$kw$get);
return ((function (vec__10783,type,map__10784,map__10784__$1,attrs,id,preamble,postamble,placeholder,map__10785,map__10785__$1,doc,get){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10788 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10788) : visible__9323__auto__.call(null,G__10788));
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
;})(vec__10783,type,map__10784,map__10784__$1,attrs,id,preamble,postamble,placeholder,map__10785,map__10785__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__10789,p__10790){
var vec__10791 = p__10789;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10791,(0),null);
var map__10792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10791,(1),null);
var map__10792__$1 = ((((!((map__10792 == null)))?((((map__10792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10792):map__10792);
var attrs = map__10792__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10792__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10792__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10792__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__10791,(2));
var map__10793 = p__10790;
var map__10793__$1 = ((((!((map__10793 == null)))?((((map__10793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10793):map__10793);
var opts = map__10793__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10793__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10793__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10793__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10796 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10796) : visible__9323__auto__.call(null,G__10796));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__10797 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__10797) : event.call(null,G__10797));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4526__auto__ = touch_event;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,visible__9323__auto__,temp__4423__auto__,vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,visible__9323__auto__,temp__4423__auto__,vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_))
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
if(cljs.core.truth_((function (){var G__10798 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__10798) : event.call(null,G__10798));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4526__auto__ = touch_event;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,temp__4423__auto__,vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,temp__4423__auto__,vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__10791,type,map__10792,map__10792__$1,attrs,id,event,touch_event,body,map__10793,map__10793__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__10799,p__10800){
var vec__10801 = p__10799;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10801,(0),null);
var map__10802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10801,(1),null);
var map__10802__$1 = ((((!((map__10802 == null)))?((((map__10802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10802):map__10802);
var attrs = map__10802__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10802__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10802__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10802__$1,cljs.core.cst$kw$value);
var body = cljs.core.nthnext(vec__10801,(2));
var map__10803 = p__10800;
var map__10803__$1 = ((((!((map__10803 == null)))?((((map__10803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10803):map__10803);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10803__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10803__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10803__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10806 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10806) : visible__9323__auto__.call(null,G__10806));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (visible__9323__auto__,temp__4423__auto__,vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(visible__9323__auto__,temp__4423__auto__,vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(temp__4423__auto__,vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
}
});
;})(vec__10801,type,map__10802,map__10802__$1,attrs,field,name,value,body,map__10803,map__10803__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__10810,p__10811){
var vec__10812 = p__10810;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,(0),null);
var map__10813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,(1),null);
var map__10813__$1 = ((((!((map__10813 == null)))?((((map__10813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10813):map__10813);
var attrs = map__10813__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$id);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$input_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$list_DASH_class);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$item_DASH_class);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$highlight_DASH_class);
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10813__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10813__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10813__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var map__10814 = p__10811;
var map__10814__$1 = ((((!((map__10814 == null)))?((((map__10814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10814):map__10814);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10814__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10814__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10814__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
var choice_10848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice_10848) : save_BANG_.call(null,id,choice_10848));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice_10848) : choice_fn.call(null,choice_10848));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10817 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10817) : visible__9323__auto__.call(null,G__10817));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.not(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,"") : save_BANG_.call(null,id,""));
} else {
return null;
}
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));
}
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10807_SHARP_){
var G__10819_10849 = selections;
var G__10820_10850 = (function (){var G__10821 = reagent_forms.core.value_of(p1__10807_SHARP_).toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__10821) : data_source.call(null,G__10821));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10819_10849,G__10820_10850) : cljs.core.reset_BANG_.call(null,G__10819_10849,G__10820_10850));

var G__10822_10851 = id;
var G__10823_10852 = reagent_forms.core.value_of(p1__10807_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10822_10851,G__10823_10852) : save_BANG_.call(null,G__10822_10851,G__10823_10852));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10808_SHARP_){
var G__10824 = p1__10808_SHARP_.which;
switch (G__10824) {
case (38):
p1__10808_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0)))){
var G__10825 = selected_index;
var G__10826 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10825,G__10826) : cljs.core.reset_BANG_.call(null,G__10825,G__10826));
} else {
return null;
}

break;
case (40):
p1__10808_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1))))){
var G__10827 = selected_index;
var G__10828 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10827,G__10828) : cljs.core.reset_BANG_.call(null,G__10827,G__10828));
} else {
return null;
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
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4526__auto__){
return or__4526__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10809_SHARP_){
var G__10830 = selected_index;
var G__10831 = (function (){var G__10832 = p1__10809_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__10832);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10830,G__10831) : cljs.core.reset_BANG_.call(null,G__10830,G__10831));
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(visible__9323__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.not(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,"") : save_BANG_.call(null,id,""));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10807_SHARP_){
var G__10834_10854 = selections;
var G__10835_10855 = (function (){var G__10836 = reagent_forms.core.value_of(p1__10807_SHARP_).toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__10836) : data_source.call(null,G__10836));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10834_10854,G__10835_10855) : cljs.core.reset_BANG_.call(null,G__10834_10854,G__10835_10855));

var G__10837_10856 = id;
var G__10838_10857 = reagent_forms.core.value_of(p1__10807_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10837_10856,G__10838_10857) : save_BANG_.call(null,G__10837_10856,G__10838_10857));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(0)) : cljs.core.reset_BANG_.call(null,selected_index,(0)));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10808_SHARP_){
var G__10839 = p1__10808_SHARP_.which;
switch (G__10839) {
case (38):
p1__10808_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0)))){
var G__10840 = selected_index;
var G__10841 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) - (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10840,G__10841) : cljs.core.reset_BANG_.call(null,G__10840,G__10841));
} else {
return null;
}

break;
case (40):
p1__10808_SHARP_.preventDefault();

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1))))){
var G__10842 = selected_index;
var G__10843 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) + (1));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10842,G__10843) : cljs.core.reset_BANG_.call(null,G__10842,G__10843));
} else {
return null;
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
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4526__auto__){
return or__4526__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (p1__10809_SHARP_){
var G__10845 = selected_index;
var G__10846 = (function (){var G__10847 = p1__10809_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__10847);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10845,G__10846) : cljs.core.reset_BANG_.call(null,G__10845,G__10846));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__10812,type,map__10813,map__10813__$1,attrs,id,data_source,input_class,list_class,item_class,highlight_class,result_fn,choice_fn,clear_on_focus_QMARK_,map__10814,map__10814__$1,doc,get,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__10859,p__10860,selections,field,id){
var vec__10890 = p__10859;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(0),null);
var map__10891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10890,(1),null);
var map__10891__$1 = ((((!((map__10891 == null)))?((((map__10891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10891):map__10891);
var attrs = map__10891__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10891__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10891__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__10890,(2));
var map__10892 = p__10860;
var map__10892__$1 = ((((!((map__10892 == null)))?((((map__10892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10892):map__10892);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10892__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10892__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__10890,type,map__10891,map__10891__$1,attrs,key,touch_event,body,map__10892,map__10892__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__10913 = id;
var G__10914 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10913,G__10914) : save_BANG_.call(null,G__10913,G__10914));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key);
var G__10915_10919 = selections;
var G__10916_10920 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10915_10919,G__10916_10920) : cljs.core.reset_BANG_.call(null,G__10915_10919,G__10916_10920));

var G__10917 = id;
var G__10918 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__10917,G__10918) : save_BANG_.call(null,G__10917,G__10918));
}
});})(vec__10890,type,map__10891,map__10891__$1,attrs,key,touch_event,body,map__10892,map__10892__$1,save_BANG_,multi_select))
;
return ((function (vec__10890,type,map__10891,map__10891__$1,attrs,key,touch_event,body,map__10892,map__10892__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?"active":null),(function (){var or__4526__auto__ = touch_event;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__10890,type,map__10891,map__10891__$1,attrs,key,touch_event,body,map__10892,map__10892__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__10921){
var map__10928 = p__10921;
var map__10928__$1 = ((((!((map__10928 == null)))?((((map__10928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10928):map__10928);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__10928,map__10928__$1,get,multi_select){
return (function (m,p__10930){
var vec__10931 = p__10930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10931,(0),null);
var map__10932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10931,(1),null);
var map__10932__$1 = ((((!((map__10932 == null)))?((((map__10932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10932):map__10932);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10932__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__10928,map__10928__$1,get,multi_select))
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
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__10936,p__10937){
var vec__10948 = p__10936;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948,(0),null);
var map__10949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948,(1),null);
var map__10949__$1 = ((((!((map__10949 == null)))?((((map__10949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10949):map__10949);
var attrs = map__10949__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10949__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10949__$1,cljs.core.cst$kw$id);
var selection_items = cljs.core.nthnext(vec__10948,(2));
var map__10950 = p__10937;
var map__10950__$1 = ((((!((map__10950 == null)))?((((map__10950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10950):map__10950);
var opts = map__10950__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10950__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get){
return (function (p1__10934_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get){
return (function (p__10953){
var vec__10954 = p__10953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10954,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get))
,p1__10934_SHARP_));
});})(selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get){
return (function (p1__10935_SHARP_){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10935_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var visible_QMARK_ = temp__4423__auto__;
var G__10956 = (function (){var G__10957 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10957) : cljs.core.deref.call(null,G__10957));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__10956) : visible_QMARK_.call(null,G__10956));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__10948,type,map__10949,map__10949__$1,attrs,field,id,selection_items,map__10950,map__10950__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__10958,p__10959){
var vec__10960 = p__10958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960,(1),null);
var field = vec__10960;
var map__10961 = p__10959;
var map__10961__$1 = ((((!((map__10961 == null)))?((((map__10961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10961):map__10961);
var opts = map__10961__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10961__$1,cljs.core.cst$kw$doc);
return ((function (vec__10960,_,attrs,field,map__10961,map__10961__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10963 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10963) : visible__9323__auto__.call(null,G__10963));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__10960,_,attrs,field,map__10961,map__10961__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__10964,p__10965){
var vec__10966 = p__10964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10966,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10966,(1),null);
var field = vec__10966;
var map__10967 = p__10965;
var map__10967__$1 = ((((!((map__10967 == null)))?((((map__10967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10967):map__10967);
var opts = map__10967__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10967__$1,cljs.core.cst$kw$doc);
return ((function (vec__10966,_,attrs,field,map__10967,map__10967__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__10969 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__10969) : visible__9323__auto__.call(null,G__10969));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
}
});
;})(vec__10966,_,attrs,field,map__10967,map__10967__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5279__auto__ = (function reagent_forms$core$map_options_$_iter__10988(s__10989){
return (new cljs.core.LazySeq(null,(function (){
var s__10989__$1 = s__10989;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10989__$1);
if(temp__4425__auto__){
var s__10989__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10989__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10989__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10991 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10990 = (0);
while(true){
if((i__10990 < size__5278__auto__)){
var vec__11000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10990);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(0),null);
var map__11001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(1),null);
var map__11001__$1 = ((((!((map__11001 == null)))?((((map__11001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11001):map__11001);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11001__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(2),null);
cljs.core.chunk_append(b__10991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__11006 = (i__10990 + (1));
i__10990 = G__11006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10991),reagent_forms$core$map_options_$_iter__10988(cljs.core.chunk_rest(s__10989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10991),null);
}
} else {
var vec__11003 = cljs.core.first(s__10989__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(0),null);
var map__11004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(1),null);
var map__11004__$1 = ((((!((map__11004 == null)))?((((map__11004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11004):map__11004);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11004__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__10988(cljs.core.rest(s__10989__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11007_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__11007_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__11010,p__11011){
var vec__11012 = p__11010;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11012,(0),null);
var map__11013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11012,(1),null);
var map__11013__$1 = ((((!((map__11013 == null)))?((((map__11013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11013):map__11013);
var attrs = map__11013__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11013__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11013__$1,cljs.core.cst$kw$id);
var options = cljs.core.nthnext(vec__11012,(2));
var map__11014 = p__11011;
var map__11014__$1 = ((((!((map__11014 == null)))?((((map__11014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11014):map__11014);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11014__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11014__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11014__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4526__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__11017_11026 = id;
var G__11018_11027 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__11017_11026,G__11018_11027) : save_BANG_.call(null,G__11017_11026,G__11018_11027));

return ((function (options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__9323__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__11019 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__9323__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__9323__auto__.cljs$core$IFn$_invoke$arity$1(G__11019) : visible__9323__auto__.call(null,G__11019));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (visible__9323__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_){
return (function (p1__11008_SHARP_){
var G__11020 = id;
var G__11021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__11008_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__11020,G__11021) : save_BANG_.call(null,G__11020,G__11021));
});})(visible__9323__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__9323__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_){
return (function (p1__11009_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__11009_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__11022 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11022) : visible_QMARK_.call(null,G__11022));
} else {
return true;
}
});})(visible__9323__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_){
return (function (p1__11008_SHARP_){
var G__11023 = id;
var G__11024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__11008_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__11023,G__11024) : save_BANG_.call(null,G__11023,G__11024));
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_){
return (function (p1__11009_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__11009_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__11025 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11025) : visible_QMARK_.call(null,G__11025));
} else {
return true;
}
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__11012,type,map__11013,map__11013__$1,attrs,field,id,options,map__11014,map__11014__$1,doc,get,save_BANG_))
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
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(){
var args__5572__auto__ = [];
var len__5565__auto___11032 = arguments.length;
var i__5566__auto___11033 = (0);
while(true){
if((i__5566__auto___11033 < len__5565__auto___11032)){
args__5572__auto__.push((arguments[i__5566__auto___11033]));

var G__11034 = (i__5566__auto___11033 + (1));
i__5566__auto___11033 = G__11034;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__11028_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc)),(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(p1__11028_SHARP_) : reagent_forms.core.id__GT_path.call(null,p1__11028_SHARP_)));
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

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq11029){
var G__11030 = cljs.core.first(seq11029);
var seq11029__$1 = cljs.core.next(seq11029);
var G__11031 = cljs.core.first(seq11029__$1);
var seq11029__$2 = cljs.core.next(seq11029__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__11030,G__11031,seq11029__$2);
});
