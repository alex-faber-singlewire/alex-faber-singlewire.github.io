// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,(function (p1__22852_SHARP_){
return console.log(p1__22852_SHARP_);
}),cljs.core.cst$kw$warn,(function (p1__22853_SHARP_){
return console.warn(p1__22853_SHARP_);
}),cljs.core.cst$kw$error,(function (p1__22854_SHARP_){
return console.error(p1__22854_SHARP_);
}),cljs.core.cst$kw$group,(function (p1__22855_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__22855_SHARP_);
} else {
return console.log(p1__22855_SHARP_);
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
var args__5659__auto__ = [];
var len__5652__auto___22857 = arguments.length;
var i__5653__auto___22858 = (0);
while(true){
if((i__5653__auto___22858 < len__5652__auto___22857)){
args__5659__auto__.push((arguments[i__5653__auto___22858]));

var G__22859 = (i__5653__auto___22858 + (1));
i__5653__auto___22858 = G__22859;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$log.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq22856){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22856));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__5659__auto__ = [];
var len__5652__auto___22861 = arguments.length;
var i__5653__auto___22862 = (0);
while(true){
if((i__5653__auto___22862 < len__5652__auto___22861)){
args__5659__auto__.push((arguments[i__5653__auto___22862]));

var G__22863 = (i__5653__auto___22862 + (1));
i__5653__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq22860){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22860));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__5659__auto__ = [];
var len__5652__auto___22865 = arguments.length;
var i__5653__auto___22866 = (0);
while(true){
if((i__5653__auto___22866 < len__5652__auto___22865)){
args__5659__auto__.push((arguments[i__5653__auto___22866]));

var G__22867 = (i__5653__auto___22866 + (1));
i__5653__auto___22866 = G__22867;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq22864){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22864));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__5659__auto__ = [];
var len__5652__auto___22869 = arguments.length;
var i__5653__auto___22870 = (0);
while(true){
if((i__5653__auto___22870 < len__5652__auto___22869)){
args__5659__auto__.push((arguments[i__5653__auto___22870]));

var G__22871 = (i__5653__auto___22870 + (1));
i__5653__auto___22870 = G__22871;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$groupEnd.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq22868){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22868));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__5659__auto__ = [];
var len__5652__auto___22873 = arguments.length;
var i__5653__auto___22874 = (0);
while(true){
if((i__5653__auto___22874 < len__5652__auto___22873)){
args__5659__auto__.push((arguments[i__5653__auto___22874]));

var G__22875 = (i__5653__auto___22874 + (1));
i__5653__auto___22874 = G__22875;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((0) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5660__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq22872){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22872));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
