// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,(function (p1__17595_SHARP_){
return console.log(p1__17595_SHARP_);
}),cljs.core.cst$kw$warn,(function (p1__17596_SHARP_){
return console.warn(p1__17596_SHARP_);
}),cljs.core.cst$kw$error,(function (p1__17597_SHARP_){
return console.error(p1__17597_SHARP_);
}),cljs.core.cst$kw$group,(function (p1__17598_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__17598_SHARP_);
} else {
return console.log(p1__17598_SHARP_);
}
}),cljs.core.cst$kw$groupEnd,(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.utils.default_loggers) : cljs.core.atom.call(null,re_frame.utils.default_loggers));
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$empty_QMARK_,cljs.core.list(cljs.core.cst$sym$difference,cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$new_DASH_loggers)),cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$default_DASH_loggers))))], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17600 = arguments.length;
var i__5727__auto___17601 = (0);
while(true){
if((i__5727__auto___17601 < len__5726__auto___17600)){
args__5733__auto__.push((arguments[i__5727__auto___17601]));

var G__17602 = (i__5727__auto___17601 + (1));
i__5727__auto___17601 = G__17602;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$log.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq17599){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17599));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17604 = arguments.length;
var i__5727__auto___17605 = (0);
while(true){
if((i__5727__auto___17605 < len__5726__auto___17604)){
args__5733__auto__.push((arguments[i__5727__auto___17605]));

var G__17606 = (i__5727__auto___17605 + (1));
i__5727__auto___17605 = G__17606;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq17603){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17603));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17608 = arguments.length;
var i__5727__auto___17609 = (0);
while(true){
if((i__5727__auto___17609 < len__5726__auto___17608)){
args__5733__auto__.push((arguments[i__5727__auto___17609]));

var G__17610 = (i__5727__auto___17609 + (1));
i__5727__auto___17609 = G__17610;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq17607){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17607));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17612 = arguments.length;
var i__5727__auto___17613 = (0);
while(true){
if((i__5727__auto___17613 < len__5726__auto___17612)){
args__5733__auto__.push((arguments[i__5727__auto___17613]));

var G__17614 = (i__5727__auto___17613 + (1));
i__5727__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$groupEnd.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq17611){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17611));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__5733__auto__ = [];
var len__5726__auto___17616 = arguments.length;
var i__5727__auto___17617 = (0);
while(true){
if((i__5727__auto___17617 < len__5726__auto___17616)){
args__5733__auto__.push((arguments[i__5727__auto___17617]));

var G__17618 = (i__5727__auto___17617 + (1));
i__5727__auto___17617 = G__17618;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq17615){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17615));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
