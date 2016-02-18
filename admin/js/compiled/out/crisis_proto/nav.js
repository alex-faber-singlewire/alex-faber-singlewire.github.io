// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('crisis_proto.nav');
goog.require('cljs.core');
crisis_proto.nav.set_location_BANG_ = (function crisis_proto$nav$set_location_BANG_(var_args){
var args__5659__auto__ = [];
var len__5652__auto___20771 = arguments.length;
var i__5653__auto___20772 = (0);
while(true){
if((i__5653__auto___20772 < len__5652__auto___20771)){
args__5659__auto__.push((arguments[i__5653__auto___20772]));

var G__20773 = (i__5653__auto___20772 + (1));
i__5653__auto___20772 = G__20773;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return window.location.href = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",path);
});

crisis_proto.nav.set_location_BANG_.cljs$lang$maxFixedArity = (0);

crisis_proto.nav.set_location_BANG_.cljs$lang$applyTo = (function (seq20770){
return crisis_proto.nav.set_location_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20770));
});
