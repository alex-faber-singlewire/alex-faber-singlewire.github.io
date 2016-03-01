// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.views.modal');
goog.require('cljs.core');
goog.require('re_frame.core');
crisis_proto.views.modal.header = (function crisis_proto$views$modal$header(title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal-header"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$class,"close",cljs.core.cst$kw$data_DASH_dismiss,"modal",cljs.core.cst$kw$aria_DASH_label,"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"sr-only"], null),"Close"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"modal-title",cljs.core.cst$kw$id,"myModalLabel"], null),title], null)], null);
});
crisis_proto.views.modal.footer = (function crisis_proto$views$modal$footer(buttons){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_footer,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5366__auto__ = (function crisis_proto$views$modal$footer_$_iter__21230(s__21231){
return (new cljs.core.LazySeq(null,(function (){
var s__21231__$1 = s__21231;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__21231__$1);
if(temp__4425__auto__){
var s__21231__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21231__$2)){
var c__5364__auto__ = cljs.core.chunk_first(s__21231__$2);
var size__5365__auto__ = cljs.core.count(c__5364__auto__);
var b__21233 = cljs.core.chunk_buffer(size__5365__auto__);
if((function (){var i__21232 = (0);
while(true){
if((i__21232 < size__5365__auto__)){
var button = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5364__auto__,i__21232);
cljs.core.chunk_append(b__21233,(function (){var attributes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(button)], null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn,(cljs.core.truth_(cljs.core.cst$kw$close_DASH_modal_QMARK_.cljs$core$IFn$_invoke$arity$1(button))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_dismiss,"modal"], null)):attributes),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(button)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str("modal-button-"),cljs.core.str(button)].join('')], null));
})());

var G__21236 = (i__21232 + (1));
i__21232 = G__21236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21233),crisis_proto$views$modal$footer_$_iter__21230(cljs.core.chunk_rest(s__21231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21233),null);
}
} else {
var button = cljs.core.first(s__21231__$2);
return cljs.core.cons((function (){var attributes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(button)], null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn,(cljs.core.truth_(cljs.core.cst$kw$close_DASH_modal_QMARK_.cljs$core$IFn$_invoke$arity$1(button))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_dismiss,"modal"], null)):attributes),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(button)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str("modal-button-"),cljs.core.str(button)].join('')], null));
})(),crisis_proto$views$modal$footer_$_iter__21230(cljs.core.rest(s__21231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5366__auto__(buttons);
})())], null);
});
});
crisis_proto.views.modal.prepare = (function crisis_proto$views$modal$prepare(var_args){
var args__5659__auto__ = [];
var len__5652__auto___21242 = arguments.length;
var i__5653__auto___21243 = (0);
while(true){
if((i__5653__auto___21243 < len__5652__auto___21242)){
args__5659__auto__.push((arguments[i__5653__auto___21243]));

var G__21244 = (i__5653__auto___21243 + (1));
i__5653__auto___21243 = G__21244;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.views.modal.prepare.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.views.modal.prepare.cljs$core$IFn$_invoke$arity$variadic = (function (p__21238){
var map__21239 = p__21238;
var map__21239__$1 = ((((!((map__21239 == null)))?((((map__21239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21239):map__21239);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21239__$1,cljs.core.cst$kw$title,"TEST");
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21239__$1,cljs.core.cst$kw$buttons,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"btn-danger",cljs.core.cst$kw$text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_close], null)," Close"], null),cljs.core.cst$kw$close_DASH_modal_QMARK_,true], null)], null));
var large_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21239__$1,cljs.core.cst$kw$large_QMARK_,true);
var modal_content = (function (){var G__21241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$modal_DASH_content], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21241) : re_frame.core.subscribe.call(null,G__21241));
})();
return ((function (modal_content,map__21239,map__21239__$1,title,buttons,large_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_myModal$modal$fade,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_dialog,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"document",cljs.core.cst$kw$class,(cljs.core.truth_(large_QMARK_)?"modal-lg":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.modal.header,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_body,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(modal_content) : cljs.core.deref.call(null,modal_content))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crisis_proto.views.modal.footer,buttons], null)], null)], null)], null);
});
;})(modal_content,map__21239,map__21239__$1,title,buttons,large_QMARK_))
});

crisis_proto.views.modal.prepare.cljs$lang$maxFixedArity = (0);

crisis_proto.views.modal.prepare.cljs$lang$applyTo = (function (seq21237){
return crisis_proto.views.modal.prepare.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21237));
});
