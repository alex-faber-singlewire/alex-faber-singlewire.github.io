// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var args__5572__auto__ = [];
var len__5565__auto___11948 = arguments.length;
var i__5566__auto___11949 = (0);
while(true){
if((i__5566__auto___11949 < len__5565__auto___11948)){
args__5572__auto__.push((arguments[i__5566__auto___11949]));

var G__11950 = (i__5566__auto___11949 + (1));
i__5566__auto___11949 = G__11950;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__11946){
var vec__11947 = p__11946;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11947,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq11944){
var G__11945 = cljs.core.first(seq11944);
var seq11944__$1 = cljs.core.next(seq11944);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__11945,seq11944__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var args__5572__auto__ = [];
var len__5565__auto___11955 = arguments.length;
var i__5566__auto___11956 = (0);
while(true){
if((i__5566__auto___11956 < len__5565__auto___11955)){
args__5572__auto__.push((arguments[i__5566__auto___11956]));

var G__11957 = (i__5566__auto___11956 + (1));
i__5566__auto___11956 = G__11957;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__11953){
var vec__11954 = p__11953;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11954,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq11951){
var G__11952 = cljs.core.first(seq11951);
var seq11951__$1 = cljs.core.next(seq11951);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__11952,seq11951__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___11960 = arguments.length;
var i__5566__auto___11961 = (0);
while(true){
if((i__5566__auto___11961 < len__5565__auto___11960)){
args__5572__auto__.push((arguments[i__5566__auto___11961]));

var G__11962 = (i__5566__auto___11961 + (1));
i__5566__auto___11961 = G__11962;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq11958){
var G__11959 = cljs.core.first(seq11958);
var seq11958__$1 = cljs.core.next(seq11958);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11959,seq11958__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__11965 = reagent.session.state;
var G__11966 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11965,G__11966) : cljs.core.reset_BANG_.call(null,G__11965,G__11966));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__11967_SHARP_){
return cljs.core.assoc_in(p1__11967_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___11972 = arguments.length;
var i__5566__auto___11973 = (0);
while(true){
if((i__5566__auto___11973 < len__5565__auto___11972)){
args__5572__auto__.push((arguments[i__5566__auto___11973]));

var G__11974 = (i__5566__auto___11973 + (1));
i__5566__auto___11973 = G__11974;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__11970){
var vec__11971 = p__11970;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq11968){
var G__11969 = cljs.core.first(seq11968);
var seq11968__$1 = cljs.core.next(seq11968);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11969,seq11968__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___11979 = arguments.length;
var i__5566__auto___11980 = (0);
while(true){
if((i__5566__auto___11980 < len__5565__auto___11979)){
args__5572__auto__.push((arguments[i__5566__auto___11980]));

var G__11981 = (i__5566__auto___11980 + (1));
i__5566__auto___11980 = G__11981;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__11977){
var vec__11978 = p__11977;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11978,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq11975){
var G__11976 = cljs.core.first(seq11975);
var seq11975__$1 = cljs.core.next(seq11975);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11976,seq11975__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___11986 = arguments.length;
var i__5566__auto___11987 = (0);
while(true){
if((i__5566__auto___11987 < len__5565__auto___11986)){
args__5572__auto__.push((arguments[i__5566__auto___11987]));

var G__11988 = (i__5566__auto___11987 + (1));
i__5566__auto___11987 = G__11988;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__11982_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__11982_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq11983){
var G__11984 = cljs.core.first(seq11983);
var seq11983__$1 = cljs.core.next(seq11983);
var G__11985 = cljs.core.first(seq11983__$1);
var seq11983__$2 = cljs.core.next(seq11983__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11984,G__11985,seq11983__$2);
});
