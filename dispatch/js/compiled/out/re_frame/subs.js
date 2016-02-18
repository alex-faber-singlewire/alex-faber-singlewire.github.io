// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.db');
goog.require('re_frame.utils');
re_frame.subs.key__GT_fn = (function (){var G__17876 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17876) : cljs.core.atom.call(null,G__17876));
})();
/**
 * Unregisters all subscription handlers
 */
re_frame.subs.clear_handlers_BANG_ = (function re_frame$subs$clear_handlers_BANG_(){
var G__17879 = re_frame.subs.key__GT_fn;
var G__17880 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17879,G__17880) : cljs.core.reset_BANG_.call(null,G__17879,G__17880));
});
/**
 * Registers a handler function for an id
 */
re_frame.subs.register = (function re_frame$subs$register(key_v,handler_fn){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting subscription-handler for: ",key_v], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
/**
 * Returns a reagent/reaction which observes a part of app-db
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args17882 = [];
var len__5726__auto___17890 = arguments.length;
var i__5727__auto___17891 = (0);
while(true){
if((i__5727__auto___17891 < len__5726__auto___17890)){
args17882.push((arguments[i__5727__auto___17891]));

var G__17892 = (i__5727__auto___17891 + (1));
i__5727__auto___17891 = G__17892;
continue;
} else {
}
break;
}

var G__17884 = args17882.length;
switch (G__17884) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17882.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (v){
var key_v = re_frame.utils.first_in_vector(v);
var handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v);
if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription."], 0));
} else {
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,v) : handler_fn.call(null,re_frame.db.app_db,v));
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var key_v = re_frame.utils.first_in_vector(v);
var handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.key__GT_fn) : cljs.core.deref.call(null,re_frame.subs.key__GT_fn)),key_v);
if(goog.DEBUG){
var temp__4425__auto___17894 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (key_v,handler_fn){
return (function (p1__17881_SHARP_){
if(!((p1__17881_SHARP_ == null))){
if((false) || (p1__17881_SHARP_.reagent$ratom$IReactiveAtom$)){
return true;
} else {
return false;
}
} else {
return false;
}
});})(key_v,handler_fn))
,dynv));
if(temp__4425__auto___17894){
var not_reactive_17895 = temp__4425__auto___17894;
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: dynv contained parameters that don't implement IReactiveAtom: ",not_reactive_17895], 0));
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription."], 0));
} else {
var dyn_vals = reagent.ratom.make_reaction(((function (key_v,handler_fn){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(key_v,handler_fn))
);
var sub = reagent.ratom.make_reaction(((function (dyn_vals,key_v,handler_fn){
return (function (){
var G__17886 = re_frame.db.app_db;
var G__17887 = v;
var G__17888 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__17886,G__17887,G__17888) : handler_fn.call(null,G__17886,G__17887,G__17888));
});})(dyn_vals,key_v,handler_fn))
);
return reagent.ratom.make_reaction(((function (dyn_vals,sub,key_v,handler_fn){
return (function (){
var G__17889 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17889) : cljs.core.deref.call(null,G__17889));
});})(dyn_vals,sub,key_v,handler_fn))
);
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;
