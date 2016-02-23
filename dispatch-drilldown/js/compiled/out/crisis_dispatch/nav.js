// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('crisis_dispatch.nav');
goog.require('cljs.core');
crisis_dispatch.nav.set_location_BANG_ = (function crisis_dispatch$nav$set_location_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10253 = arguments.length;
var i__5727__auto___10254 = (0);
while(true){
if((i__5727__auto___10254 < len__5726__auto___10253)){
args__5733__auto__.push((arguments[i__5727__auto___10254]));

var G__10255 = (i__5727__auto___10254 + (1));
i__5727__auto___10254 = G__10255;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return window.location.href = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",path);
});

crisis_dispatch.nav.set_location_BANG_.cljs$lang$maxFixedArity = (0);

crisis_dispatch.nav.set_location_BANG_.cljs$lang$applyTo = (function (seq10252){
return crisis_dispatch.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10252));
});
