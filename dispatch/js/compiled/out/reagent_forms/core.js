// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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
return (function (p1__18530_SHARP_,p2__18529_SHARP_){
var or__4668__auto__ = (p2__18529_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__18529_SHARP_.cljs$core$IFn$_invoke$arity$3(path,value,p1__18530_SHARP_) : p2__18529_SHARP_.call(null,path,value,p1__18530_SHARP_));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return p1__18530_SHARP_;
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
var G__18532 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__18532) : wrapper.call(null,G__18532));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__18535 = id;
var G__18536 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18535,G__18536) : save_BANG_.call(null,G__18535,G__18536));
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
reagent_forms.core.format_type = (function (){var method_table__5581__auto__ = (function (){var G__18537 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18537) : cljs.core.atom.call(null,G__18537));
})();
var prefer_table__5582__auto__ = (function (){var G__18538 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18538) : cljs.core.atom.call(null,G__18538));
})();
var method_cache__5583__auto__ = (function (){var G__18539 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18539) : cljs.core.atom.call(null,G__18539));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__18540 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18540) : cljs.core.atom.call(null,G__18540));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$numeric], null)))){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not((function (){var G__18544 = parseFloat(value);
return isNaN(G__18544);
})());
if(and__4656__auto__){
return fmt;
} else {
return and__4656__auto__;
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
reagent_forms.core.bind = (function (){var method_table__5581__auto__ = (function (){var G__18545 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18545) : cljs.core.atom.call(null,G__18545));
})();
var prefer_table__5582__auto__ = (function (){var G__18546 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18546) : cljs.core.atom.call(null,G__18546));
})();
var method_cache__5583__auto__ = (function (){var G__18547 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18547) : cljs.core.atom.call(null,G__18547));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__18548 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18548) : cljs.core.atom.call(null,G__18548));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (p__18549,_){
var map__18550 = p__18549;
var map__18550__$1 = ((((!((map__18550 == null)))?((((map__18550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18550):map__18550);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$numeric,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$range,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__18553,p__18554){
var map__18555 = p__18553;
var map__18555__$1 = ((((!((map__18555 == null)))?((((map__18555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18555):map__18555);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18555__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18555__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18555__$1,cljs.core.cst$kw$fmt);
var map__18556 = p__18554;
var map__18556__$1 = ((((!((map__18556 == null)))?((((map__18556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18556):map__18556);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18556__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18556__$1,cljs.core.cst$kw$save_BANG_);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18556__$1,cljs.core.cst$kw$doc);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__4668__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,((function (map__18555,map__18555__$1,field,id,fmt,map__18556,map__18556__$1,get,save_BANG_,doc){
return (function (p1__18552_SHARP_){
var G__18561 = id;
var G__18562 = (function (){var G__18563 = field;
var G__18564 = reagent_forms.core.value_of(p1__18552_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18563,G__18564) : reagent_forms.core.format_type.call(null,G__18563,G__18564));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18561,G__18562) : save_BANG_.call(null,G__18561,G__18562));
});})(map__18555,map__18555__$1,field,id,fmt,map__18556,map__18556__$1,get,save_BANG_,doc))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__18565,p__18566){
var map__18567 = p__18565;
var map__18567__$1 = ((((!((map__18567 == null)))?((((map__18567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18567):map__18567);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18567__$1,cljs.core.cst$kw$id);
var map__18568 = p__18566;
var map__18568__$1 = ((((!((map__18568 == null)))?((((map__18568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18568):map__18568);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18568__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18568__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_checked,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)),cljs.core.cst$kw$on_DASH_change,((function (map__18567,map__18567__$1,id,map__18568,map__18568__$1,get,save_BANG_){
return (function (){
var G__18571 = id;
var G__18572 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18571,G__18572) : save_BANG_.call(null,G__18571,G__18572));
});})(map__18567,map__18567__$1,id,map__18568,map__18568__$1,get,save_BANG_))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__5733__auto__ = [];
var len__5726__auto___18580 = arguments.length;
var i__5727__auto___18581 = (0);
while(true){
if((i__5727__auto___18581 < len__5726__auto___18580)){
args__5733__auto__.push((arguments[i__5727__auto___18581]));

var G__18582 = (i__5727__auto___18581 + (1));
i__5727__auto___18581 = G__18582;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18576,opts,p__18577){
var vec__18578 = p__18576;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578,(1),null);
var body = cljs.core.nthnext(vec__18578,(2));
var vec__18579 = p__18577;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),attrs], 0))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq18573){
var G__18574 = cljs.core.first(seq18573);
var seq18573__$1 = cljs.core.next(seq18573);
var G__18575 = cljs.core.first(seq18573__$1);
var seq18573__$2 = cljs.core.next(seq18573__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__18574,G__18575,seq18573__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__5581__auto__ = (function (){var G__18583 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18583) : cljs.core.atom.call(null,G__18583));
})();
var prefer_table__5582__auto__ = (function (){var G__18584 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18584) : cljs.core.atom.call(null,G__18584));
})();
var method_cache__5583__auto__ = (function (){var G__18585 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18585) : cljs.core.atom.call(null,G__18585));
})();
var cached_hierarchy__5584__auto__ = (function (){var G__18586 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18586) : cljs.core.atom.call(null,G__18586));
})();
var hierarchy__5585__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__){
return (function (p__18587,_){
var vec__18588 = p__18587;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18588,(0),null);
var map__18589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18588,(1),null);
var map__18589__$1 = ((((!((map__18589 == null)))?((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18589):map__18589);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$range,cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$email,cljs.core.cst$kw$tel,cljs.core.cst$kw$textarea], null)))){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
});})(method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__,hierarchy__5585__auto__))
,cljs.core.cst$kw$default,hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__18592,p__18593){
var vec__18594 = p__18592;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18594,(0),null);
var map__18595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18594,(1),null);
var map__18595__$1 = ((((!((map__18595 == null)))?((((map__18595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18595):map__18595);
var attrs = map__18595__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,cljs.core.cst$kw$valid_QMARK_);
var body = cljs.core.nthnext(vec__18594,(2));
var map__18596 = p__18593;
var map__18596__$1 = ((((!((map__18596 == null)))?((((map__18596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18596):map__18596);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18596__$1,cljs.core.cst$kw$doc);
return ((function (vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18599 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18599) : visible__18521__auto__.call(null,G__18599));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__18600 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18600) : valid_QMARK_.call(null,G__18600));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,visible__18521__auto__,temp__4423__auto__,vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc){
return (function (p1__18591_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__18591_SHARP_))){
return [cljs.core.str(p1__18591_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,visible__18521__auto__,temp__4423__auto__,vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?(function (){var G__18601 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18601) : valid_QMARK_.call(null,G__18601));
})():null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),((function (valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc){
return (function (p1__18591_SHARP_){
if(!(cljs.core.empty_QMARK_(p1__18591_SHARP_))){
return [cljs.core.str(p1__18591_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__18594,type,map__18595,map__18595__$1,attrs,valid_QMARK_,body,map__18596,map__18596__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__18602,p__18603){
var vec__18604 = p__18602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604,(0),null);
var map__18605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604,(1),null);
var map__18605__$1 = ((((!((map__18605 == null)))?((((map__18605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18605):map__18605);
var attrs = map__18605__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18605__$1,cljs.core.cst$kw$field);
var component = vec__18604;
var map__18606 = p__18603;
var map__18606__$1 = ((((!((map__18606 == null)))?((((map__18606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18606):map__18606);
var opts = map__18606__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18606__$1,cljs.core.cst$kw$doc);
return ((function (vec__18604,_,map__18605,map__18605__$1,attrs,field,component,map__18606,map__18606__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18609 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18609) : visible__18521__auto__.call(null,G__18609));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__18604,_,map__18605,map__18605__$1,attrs,field,component,map__18606,map__18606__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__18612,p__18613){
var vec__18614 = p__18612;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(0),null);
var map__18615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(1),null);
var map__18615__$1 = ((((!((map__18615 == null)))?((((map__18615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18615):map__18615);
var attrs = map__18615__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18615__$1,cljs.core.cst$kw$fmt);
var map__18616 = p__18613;
var map__18616__$1 = ((((!((map__18616 == null)))?((((map__18616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18616):map__18616);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18616__$1,cljs.core.cst$kw$save_BANG_);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18619 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18619) : visible__18521__auto__.call(null,G__18619));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__4668__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (visible__18521__auto__,temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_){
return (function (p1__18610_SHARP_){
var G__18620 = input_value;
var G__18621 = reagent_forms.core.value_of(p1__18610_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18620,G__18621) : cljs.core.reset_BANG_.call(null,G__18620,G__18621));
});})(visible__18521__auto__,temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__18521__auto__,temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_){
return (function (p1__18611_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__18624 = id;
var G__18625 = (function (){var G__18626 = cljs.core.cst$kw$numeric;
var G__18627 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__18611_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18626,G__18627) : reagent_forms.core.format_type.call(null,G__18626,G__18627));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18624,G__18625) : save_BANG_.call(null,G__18624,G__18625));
});})(visible__18521__auto__,temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$value,(function (){var or__4668__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_value) : cljs.core.deref.call(null,input_value));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_){
return (function (p1__18610_SHARP_){
var G__18628 = input_value;
var G__18629 = reagent_forms.core.value_of(p1__18610_SHARP_);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18628,G__18629) : cljs.core.reset_BANG_.call(null,G__18628,G__18629));
});})(temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_){
return (function (p1__18611_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(input_value,null) : cljs.core.reset_BANG_.call(null,input_value,null));

var G__18632 = id;
var G__18633 = (function (){var G__18634 = cljs.core.cst$kw$numeric;
var G__18635 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__18611_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18634,G__18635) : reagent_forms.core.format_type.call(null,G__18634,G__18635));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18632,G__18633) : save_BANG_.call(null,G__18632,G__18633));
});})(temp__4423__auto__,input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_))
], null),attrs], 0))], null);
}
});
;})(input_value,vec__18614,type,map__18615,map__18615__$1,attrs,id,fmt,map__18616,map__18616__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__18637,p__18638){
var vec__18639 = p__18637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18639,(0),null);
var map__18640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18639,(1),null);
var map__18640__$1 = ((((!((map__18640 == null)))?((((map__18640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18640):map__18640);
var attrs = map__18640__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18640__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var map__18641 = p__18638;
var map__18641__$1 = ((((!((map__18641 == null)))?((((map__18641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18641):map__18641);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18641__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18641__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18641__$1,cljs.core.cst$kw$save_BANG_);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18644 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18644) : visible__18521__auto__.call(null,G__18644));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,((function (visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (p1__18636_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__18636_SHARP_) : save_BANG_.call(null,id,p1__18636_SHARP_));
});})(visible__18521__auto__,temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$value,(function (){var temp__4425__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,((function (temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_){
return (function (p1__18636_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__18636_SHARP_) : save_BANG_.call(null,id,p1__18636_SHARP_));
});})(temp__4423__auto__,fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__18639,_,map__18640,map__18640__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__18641,map__18641__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__18645,p__18646){
var vec__18647 = p__18645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(0),null);
var map__18648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(1),null);
var map__18648__$1 = ((((!((map__18648 == null)))?((((map__18648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18648):map__18648);
var attrs = map__18648__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__18647;
var map__18649 = p__18646;
var map__18649__$1 = ((((!((map__18649 == null)))?((((map__18649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18649):map__18649);
var opts = map__18649__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4668__auto__ = checked;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return ((function (vec__18647,_,map__18648,map__18648__$1,attrs,id,field,checked,default_checked,component,map__18649,map__18649__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18652 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18652) : visible__18521__auto__.call(null,G__18652));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0));
}
});
;})(vec__18647,_,map__18648,map__18648__$1,attrs,id,field,checked,default_checked,component,map__18649,map__18649__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__18653,p__18654){
var vec__18655 = p__18653;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18655,(0),null);
var map__18656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18655,(1),null);
var map__18656__$1 = ((((!((map__18656 == null)))?((((map__18656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18656):map__18656);
var attrs = map__18656__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,cljs.core.cst$kw$placeholder);
var map__18657 = p__18654;
var map__18657__$1 = ((((!((map__18657 == null)))?((((map__18657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18657):map__18657);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$get);
return ((function (vec__18655,type,map__18656,map__18656__$1,attrs,id,preamble,postamble,placeholder,map__18657,map__18657__$1,doc,get){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18660 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18660) : visible__18521__auto__.call(null,G__18660));
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
;})(vec__18655,type,map__18656,map__18656__$1,attrs,id,preamble,postamble,placeholder,map__18657,map__18657__$1,doc,get))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__18661,p__18662){
var vec__18663 = p__18661;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(0),null);
var map__18664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(1),null);
var map__18664__$1 = ((((!((map__18664 == null)))?((((map__18664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18664):map__18664);
var attrs = map__18664__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__18663,(2));
var map__18665 = p__18662;
var map__18665__$1 = ((((!((map__18665 == null)))?((((map__18665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18665):map__18665);
var opts = map__18665__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18665__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18665__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18665__$1,cljs.core.cst$kw$save_BANG_);
return ((function (vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18668 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18668) : visible__18521__auto__.call(null,G__18668));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__18669 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__18669) : event.call(null,G__18669));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4668__auto__ = touch_event;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,visible__18521__auto__,temp__4423__auto__,vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,visible__18521__auto__,temp__4423__auto__,vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_))
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
if(cljs.core.truth_((function (){var G__18670 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__18670) : event.call(null,G__18670));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4668__auto__ = touch_event;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),((function (message,temp__4423__auto____$1,temp__4423__auto__,vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
});})(message,temp__4423__auto____$1,temp__4423__auto__,vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__18663,type,map__18664,map__18664__$1,attrs,id,event,touch_event,body,map__18665,map__18665__$1,opts,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__18671,p__18672){
var vec__18673 = p__18671;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18673,(0),null);
var map__18674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18673,(1),null);
var map__18674__$1 = ((((!((map__18674 == null)))?((((map__18674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18674):map__18674);
var attrs = map__18674__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$field);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$default_DASH_checked);
var body = cljs.core.nthnext(vec__18673,(2));
var map__18675 = p__18672;
var map__18675__$1 = ((((!((map__18675 == null)))?((((map__18675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18675):map__18675);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4668__auto__ = checked;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return ((function (vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18678 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18678) : visible__18521__auto__.call(null,G__18678));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (visible__18521__auto__,temp__4423__auto__,vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(visible__18521__auto__,temp__4423__auto__,vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$default_DASH_checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_){
return (function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
});})(temp__4423__auto__,vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_))
], null),attrs], 0))], null),body);
}
});
;})(vec__18673,type,map__18674,map__18674__$1,attrs,field,name,value,checked,default_checked,body,map__18675,map__18675__$1,doc,get,save_BANG_))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__18682,p__18683){
var vec__18684 = p__18682;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(0),null);
var map__18685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(1),null);
var map__18685__$1 = ((((!((map__18685 == null)))?((((map__18685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18685):map__18685);
var attrs = map__18685__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18685__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$input_DASH_placeholder);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18685__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18685__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var map__18686 = p__18683;
var map__18686__$1 = ((((!((map__18686 == null)))?((((map__18686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18686):map__18686);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(cljs.core.truth_(and__4656__auto__)){
return ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)) > (-1));
} else {
return and__4656__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18689 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18689) : visible__18521__auto__.call(null,G__18689));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$placeholder,input_placeholder,cljs.core.cst$kw$class,input_class,cljs.core.cst$kw$value,(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.not(cljs.core.iterable_QMARK_(v))){
return v;
} else {
return cljs.core.first(v);
}
})(),cljs.core.cst$kw$on_DASH_focus,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18679_SHARP_){
var temp__4425__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__18679_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
var G__18691_18716 = selections;
var G__18692_18717 = (function (){var G__18693 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__18693) : data_source.call(null,G__18693));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18691_18716,G__18692_18717) : cljs.core.reset_BANG_.call(null,G__18691_18716,G__18692_18717));

var G__18694_18718 = id;
var G__18695_18719 = reagent_forms.core.value_of(p1__18679_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18694_18718,G__18695_18719) : save_BANG_.call(null,G__18694_18718,G__18695_18719));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18680_SHARP_){
var G__18696 = p1__18680_SHARP_.which;
switch (G__18696) {
case (38):
p1__18680_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__18680_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__18697_18721 = id;
var G__18698_18722 = reagent_forms.core.value_of(p1__18680_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18697_18721,G__18698_18722) : save_BANG_.call(null,G__18697_18721,G__18698_18722));

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
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4668__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4668__auto__){
return or__4668__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18681_SHARP_){
var G__18700 = selected_index;
var G__18701 = (function (){var G__18702 = p1__18681_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__18702);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18700,G__18701) : cljs.core.reset_BANG_.call(null,G__18700,G__18701));
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(visible__18521__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
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
})(),cljs.core.cst$kw$on_DASH_focus,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_blur,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mouse_on_list_QMARK_) : cljs.core.deref.call(null,mouse_on_list_QMARK_)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18679_SHARP_){
var temp__4425__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__18679_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
var G__18704_18723 = selections;
var G__18705_18724 = (function (){var G__18706 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__18706) : data_source.call(null,G__18706));
})();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18704_18723,G__18705_18724) : cljs.core.reset_BANG_.call(null,G__18704_18723,G__18705_18724));

var G__18707_18725 = id;
var G__18708_18726 = reagent_forms.core.value_of(p1__18679_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18707_18725,G__18708_18726) : save_BANG_.call(null,G__18707_18725,G__18708_18726));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,false) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,(-1)) : cljs.core.reset_BANG_.call(null,selected_index,(-1)));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18680_SHARP_){
var G__18709 = p1__18680_SHARP_.which;
switch (G__18709) {
case (38):
p1__18680_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(0))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);
}

break;
case (40):
p1__18680_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))) - (1)))){
return null;
} else {
var G__18710_18728 = id;
var G__18711_18729 = reagent_forms.core.value_of(p1__18680_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18710_18728,G__18711_18729) : save_BANG_.call(null,G__18710_18728,G__18711_18729));

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
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4668__auto__ = cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)));
if(or__4668__auto__){
return or__4668__auto__;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(typeahead_hidden_QMARK_) : cljs.core.deref.call(null,typeahead_hidden_QMARK_));
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouse_on_list_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selected_index) : cljs.core.deref.call(null,selected_index)),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (p1__18681_SHARP_){
var G__18713 = selected_index;
var G__18714 = (function (){var G__18715 = p1__18681_SHARP_.target.getAttribute("tabIndex");
return parseInt(G__18715);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18713,G__18714) : cljs.core.reset_BANG_.call(null,G__18713,G__18714));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,cljs.core.cst$kw$on_DASH_click,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(typeahead_hidden_QMARK_,true) : cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true));

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__18684,type,map__18685,map__18685__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__18686,map__18686__$1,doc,get,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__18730,p__18731,selections,field,id){
var vec__18761 = p__18730;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(0),null);
var map__18762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18761,(1),null);
var map__18762__$1 = ((((!((map__18762 == null)))?((((map__18762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18762):map__18762);
var attrs = map__18762__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18762__$1,cljs.core.cst$kw$touch_DASH_event);
var body = cljs.core.nthnext(vec__18761,(2));
var map__18763 = p__18731;
var map__18763__$1 = ((((!((map__18763 == null)))?((((map__18763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18763):map__18763);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18763__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18763__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = ((function (vec__18761,type,map__18762,map__18762__$1,attrs,key,touch_event,body,map__18763,map__18763__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__18784 = id;
var G__18785 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections))));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18784,G__18785) : save_BANG_.call(null,G__18784,G__18785));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key);
var G__18786_18790 = selections;
var G__18787_18791 = cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18786_18790,G__18787_18791) : cljs.core.reset_BANG_.call(null,G__18786_18790,G__18787_18791));

var G__18788 = id;
var G__18789 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18788,G__18789) : save_BANG_.call(null,G__18788,G__18789));
}
});})(vec__18761,type,map__18762,map__18762__$1,attrs,key,touch_event,body,map__18763,map__18763__$1,save_BANG_,multi_select))
;
return ((function (vec__18761,type,map__18762,map__18762__$1,attrs,key,touch_event,body,map__18763,map__18763__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selections) : cljs.core.deref.call(null,selections)),key))?"active":null),(function (){var or__4668__auto__ = touch_event;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__18761,type,map__18762,map__18762__$1,attrs,key,touch_event,body,map__18763,map__18763__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__18792){
var map__18799 = p__18792;
var map__18799__$1 = ((((!((map__18799 == null)))?((((map__18799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18799):map__18799);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18799__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18799__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__18799,map__18799__$1,get,multi_select){
return (function (m,p__18801){
var vec__18802 = p__18801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18802,(0),null);
var map__18803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18802,(1),null);
var map__18803__$1 = ((((!((map__18803 == null)))?((((map__18803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18803):map__18803);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18803__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__18799,map__18799__$1,get,multi_select))
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
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__18807,p__18808){
var vec__18819 = p__18807;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(0),null);
var map__18820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(1),null);
var map__18820__$1 = ((((!((map__18820 == null)))?((((map__18820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18820):map__18820);
var attrs = map__18820__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18820__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18820__$1,cljs.core.cst$kw$id);
var selection_items = cljs.core.nthnext(vec__18819,(2));
var map__18821 = p__18808;
var map__18821__$1 = ((((!((map__18821 == null)))?((((map__18821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18821):map__18821);
var opts = map__18821__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18821__$1,cljs.core.cst$kw$get);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get){
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get){
return (function (p1__18805_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get){
return (function (p__18824){
var vec__18825 = p__18824;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get))
,p1__18805_SHARP_));
});})(selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get))
);
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get){
return (function (p1__18806_SHARP_){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__18806_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var visible_QMARK_ = temp__4423__auto__;
var G__18827 = (function (){var G__18828 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18828) : cljs.core.deref.call(null,G__18828));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18827) : visible_QMARK_.call(null,G__18827));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__18819,type,map__18820,map__18820__$1,attrs,field,id,selection_items,map__18821,map__18821__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__18829,p__18830){
var vec__18831 = p__18829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(1),null);
var field = vec__18831;
var map__18832 = p__18830;
var map__18832__$1 = ((((!((map__18832 == null)))?((((map__18832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18832):map__18832);
var opts = map__18832__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,cljs.core.cst$kw$doc);
return ((function (vec__18831,_,attrs,field,map__18832,map__18832__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18834) : visible__18521__auto__.call(null,G__18834));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__18831,_,attrs,field,map__18832,map__18832__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__18835,p__18836){
var vec__18837 = p__18835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18837,(1),null);
var field = vec__18837;
var map__18838 = p__18836;
var map__18838__$1 = ((((!((map__18838 == null)))?((((map__18838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18838):map__18838);
var opts = map__18838__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,cljs.core.cst$kw$doc);
return ((function (vec__18837,_,attrs,field,map__18838,map__18838__$1,opts,doc){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18840 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18840) : visible__18521__auto__.call(null,G__18840));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null);
}
});
;})(vec__18837,_,attrs,field,map__18838,map__18838__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function reagent_forms$core$map_options_$_iter__18859(s__18860){
return (new cljs.core.LazySeq(null,(function (){
var s__18860__$1 = s__18860;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18860__$1);
if(temp__4425__auto__){
var s__18860__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18860__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__18860__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__18862 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__18861 = (0);
while(true){
if((i__18861 < size__5439__auto__)){
var vec__18871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__18861);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18871,(0),null);
var map__18872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18871,(1),null);
var map__18872__$1 = ((((!((map__18872 == null)))?((((map__18872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18872):map__18872);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18871,(2),null);
cljs.core.chunk_append(b__18862,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__18877 = (i__18861 + (1));
i__18861 = G__18877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18862),reagent_forms$core$map_options_$_iter__18859(cljs.core.chunk_rest(s__18860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18862),null);
}
} else {
var vec__18874 = cljs.core.first(s__18860__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18874,(0),null);
var map__18875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18874,(1),null);
var map__18875__$1 = ((((!((map__18875 == null)))?((((map__18875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18875):map__18875);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18875__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18874,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__18859(cljs.core.rest(s__18860__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18878_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__18878_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__18881,p__18882){
var vec__18883 = p__18881;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18883,(0),null);
var map__18884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18883,(1),null);
var map__18884__$1 = ((((!((map__18884 == null)))?((((map__18884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18884):map__18884);
var attrs = map__18884__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18884__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18884__$1,cljs.core.cst$kw$id);
var options = cljs.core.nthnext(vec__18883,(2));
var map__18885 = p__18882;
var map__18885__$1 = ((((!((map__18885 == null)))?((((map__18885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18885):map__18885);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18885__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4668__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__18888_18897 = id;
var G__18889_18898 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18888_18897,G__18889_18898) : save_BANG_.call(null,G__18888_18897,G__18889_18898));

return ((function (options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__18521__auto__ = temp__4423__auto__;
if(cljs.core.truth_((function (){var G__18890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible__18521__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18521__auto__.cljs$core$IFn$_invoke$arity$1(G__18890) : visible__18521__auto__.call(null,G__18890));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (visible__18521__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_){
return (function (p1__18879_SHARP_){
var G__18891 = id;
var G__18892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__18879_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18891,G__18892) : save_BANG_.call(null,G__18891,G__18892));
});})(visible__18521__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__18521__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_){
return (function (p1__18880_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__18880_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__18893 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18893) : visible_QMARK_.call(null,G__18893));
} else {
return true;
}
});})(visible__18521__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(selection) : cljs.core.deref.call(null,selection))),cljs.core.cst$kw$on_DASH_change,((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_){
return (function (p1__18879_SHARP_){
var G__18894 = id;
var G__18895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__18879_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18894,G__18895) : save_BANG_.call(null,G__18894,G__18895));
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_){
return (function (p1__18880_SHARP_){
var temp__4423__auto____$1 = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__18880_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
var G__18896 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc));
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18896) : visible_QMARK_.call(null,G__18896));
} else {
return true;
}
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__18883,type,map__18884,map__18884__$1,attrs,field,id,options,map__18885,map__18885__$1,doc,get,save_BANG_))
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
var args__5733__auto__ = [];
var len__5726__auto___18903 = arguments.length;
var i__5727__auto___18904 = (0);
while(true){
if((i__5727__auto___18904 < len__5726__auto___18903)){
args__5733__auto__.push((arguments[i__5727__auto___18904]));

var G__18905 = (i__5727__auto___18904 + (1));
i__5727__auto___18904 = G__18905;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__18899_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(doc) : cljs.core.deref.call(null,doc)),(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(p1__18899_SHARP_) : reagent_forms.core.id__GT_path.call(null,p1__18899_SHARP_)));
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

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first(seq18900);
var seq18900__$1 = cljs.core.next(seq18900);
var G__18902 = cljs.core.first(seq18900__$1);
var seq18900__$2 = cljs.core.next(seq18900__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__18901,G__18902,seq18900__$2);
});
