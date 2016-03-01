// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async17389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17389 = (function (fn_handler,f,meta17390){
this.fn_handler = fn_handler;
this.f = f;
this.meta17390 = meta17390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17391,meta17390__$1){
var self__ = this;
var _17391__$1 = this;
return (new cljs.core.async.t_cljs$core$async17389(self__.fn_handler,self__.f,meta17390__$1));
});

cljs.core.async.t_cljs$core$async17389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17391){
var self__ = this;
var _17391__$1 = this;
return self__.meta17390;
});

cljs.core.async.t_cljs$core$async17389.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta17390], null);
});

cljs.core.async.t_cljs$core$async17389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17389";

cljs.core.async.t_cljs$core$async17389.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async17389");
});

cljs.core.async.__GT_t_cljs$core$async17389 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17389(fn_handler__$1,f__$1,meta17390){
return (new cljs.core.async.t_cljs$core$async17389(fn_handler__$1,f__$1,meta17390));
});

}

return (new cljs.core.async.t_cljs$core$async17389(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args17394 = [];
var len__5652__auto___17397 = arguments.length;
var i__5653__auto___17398 = (0);
while(true){
if((i__5653__auto___17398 < len__5652__auto___17397)){
args17394.push((arguments[i__5653__auto___17398]));

var G__17399 = (i__5653__auto___17398 + (1));
i__5653__auto___17398 = G__17399;
continue;
} else {
}
break;
}

var G__17396 = args17394.length;
switch (G__17396) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17394.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args17401 = [];
var len__5652__auto___17404 = arguments.length;
var i__5653__auto___17405 = (0);
while(true){
if((i__5653__auto___17405 < len__5652__auto___17404)){
args17401.push((arguments[i__5653__auto___17405]));

var G__17406 = (i__5653__auto___17405 + (1));
i__5653__auto___17405 = G__17406;
continue;
} else {
}
break;
}

var G__17403 = args17401.length;
switch (G__17403) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17401.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17408 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17408) : fn1.call(null,val_17408));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17408,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17408) : fn1.call(null,val_17408));
});})(val_17408,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args17409 = [];
var len__5652__auto___17412 = arguments.length;
var i__5653__auto___17413 = (0);
while(true){
if((i__5653__auto___17413 < len__5652__auto___17412)){
args17409.push((arguments[i__5653__auto___17413]));

var G__17414 = (i__5653__auto___17413 + (1));
i__5653__auto___17413 = G__17414;
continue;
} else {
}
break;
}

var G__17411 = args17409.length;
switch (G__17411) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17409.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5497__auto___17416 = n;
var x_17417 = (0);
while(true){
if((x_17417 < n__5497__auto___17416)){
(a[x_17417] = (0));

var G__17418 = (x_17417 + (1));
x_17417 = G__17418;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17419 = (i + (1));
i = G__17419;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async17423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17423 = (function (alt_flag,flag,meta17424){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17424 = meta17424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17425,meta17424__$1){
var self__ = this;
var _17425__$1 = this;
return (new cljs.core.async.t_cljs$core$async17423(self__.alt_flag,self__.flag,meta17424__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17425){
var self__ = this;
var _17425__$1 = this;
return self__.meta17424;
});})(flag))
;

cljs.core.async.t_cljs$core$async17423.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async17423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17423.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17424], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17423";

cljs.core.async.t_cljs$core$async17423.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async17423");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17423 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17423(alt_flag__$1,flag__$1,meta17424){
return (new cljs.core.async.t_cljs$core$async17423(alt_flag__$1,flag__$1,meta17424));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17423(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17429 = (function (alt_handler,flag,cb,meta17430){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17430 = meta17430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17431,meta17430__$1){
var self__ = this;
var _17431__$1 = this;
return (new cljs.core.async.t_cljs$core$async17429(self__.alt_handler,self__.flag,self__.cb,meta17430__$1));
});

cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17431){
var self__ = this;
var _17431__$1 = this;
return self__.meta17430;
});

cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17430], null);
});

cljs.core.async.t_cljs$core$async17429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17429";

cljs.core.async.t_cljs$core$async17429.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async17429");
});

cljs.core.async.__GT_t_cljs$core$async17429 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17429(alt_handler__$1,flag__$1,cb__$1,meta17430){
return (new cljs.core.async.t_cljs$core$async17429(alt_handler__$1,flag__$1,cb__$1,meta17430));
});

}

return (new cljs.core.async.t_cljs$core$async17429(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17432_SHARP_){
var G__17436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17432_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17436) : fret.call(null,G__17436));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17433_SHARP_){
var G__17437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17433_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17437) : fret.call(null,G__17437));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4594__auto__ = wport;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17438 = (i + (1));
i = G__17438;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4594__auto__ = ret;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4582__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4582__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4582__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5659__auto__ = [];
var len__5652__auto___17444 = arguments.length;
var i__5653__auto___17445 = (0);
while(true){
if((i__5653__auto___17445 < len__5652__auto___17444)){
args__5659__auto__.push((arguments[i__5653__auto___17445]));

var G__17446 = (i__5653__auto___17445 + (1));
i__5653__auto___17445 = G__17446;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((1) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5660__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17441){
var map__17442 = p__17441;
var map__17442__$1 = ((((!((map__17442 == null)))?((((map__17442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17442):map__17442);
var opts = map__17442__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17439){
var G__17440 = cljs.core.first(seq17439);
var seq17439__$1 = cljs.core.next(seq17439);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17440,seq17439__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17447 = [];
var len__5652__auto___17497 = arguments.length;
var i__5653__auto___17498 = (0);
while(true){
if((i__5653__auto___17498 < len__5652__auto___17497)){
args17447.push((arguments[i__5653__auto___17498]));

var G__17499 = (i__5653__auto___17498 + (1));
i__5653__auto___17498 = G__17499;
continue;
} else {
}
break;
}

var G__17449 = args17447.length;
switch (G__17449) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17447.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8710__auto___17501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___17501){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___17501){
return (function (state_17473){
var state_val_17474 = (state_17473[(1)]);
if((state_val_17474 === (7))){
var inst_17469 = (state_17473[(2)]);
var state_17473__$1 = state_17473;
var statearr_17475_17502 = state_17473__$1;
(statearr_17475_17502[(2)] = inst_17469);

(statearr_17475_17502[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (1))){
var state_17473__$1 = state_17473;
var statearr_17476_17503 = state_17473__$1;
(statearr_17476_17503[(2)] = null);

(statearr_17476_17503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (4))){
var inst_17452 = (state_17473[(7)]);
var inst_17452__$1 = (state_17473[(2)]);
var inst_17453 = (inst_17452__$1 == null);
var state_17473__$1 = (function (){var statearr_17477 = state_17473;
(statearr_17477[(7)] = inst_17452__$1);

return statearr_17477;
})();
if(cljs.core.truth_(inst_17453)){
var statearr_17478_17504 = state_17473__$1;
(statearr_17478_17504[(1)] = (5));

} else {
var statearr_17479_17505 = state_17473__$1;
(statearr_17479_17505[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (13))){
var state_17473__$1 = state_17473;
var statearr_17480_17506 = state_17473__$1;
(statearr_17480_17506[(2)] = null);

(statearr_17480_17506[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (6))){
var inst_17452 = (state_17473[(7)]);
var state_17473__$1 = state_17473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17473__$1,(11),to,inst_17452);
} else {
if((state_val_17474 === (3))){
var inst_17471 = (state_17473[(2)]);
var state_17473__$1 = state_17473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17473__$1,inst_17471);
} else {
if((state_val_17474 === (12))){
var state_17473__$1 = state_17473;
var statearr_17481_17507 = state_17473__$1;
(statearr_17481_17507[(2)] = null);

(statearr_17481_17507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (2))){
var state_17473__$1 = state_17473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17473__$1,(4),from);
} else {
if((state_val_17474 === (11))){
var inst_17462 = (state_17473[(2)]);
var state_17473__$1 = state_17473;
if(cljs.core.truth_(inst_17462)){
var statearr_17482_17508 = state_17473__$1;
(statearr_17482_17508[(1)] = (12));

} else {
var statearr_17483_17509 = state_17473__$1;
(statearr_17483_17509[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (9))){
var state_17473__$1 = state_17473;
var statearr_17484_17510 = state_17473__$1;
(statearr_17484_17510[(2)] = null);

(statearr_17484_17510[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (5))){
var state_17473__$1 = state_17473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17485_17511 = state_17473__$1;
(statearr_17485_17511[(1)] = (8));

} else {
var statearr_17486_17512 = state_17473__$1;
(statearr_17486_17512[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (14))){
var inst_17467 = (state_17473[(2)]);
var state_17473__$1 = state_17473;
var statearr_17487_17513 = state_17473__$1;
(statearr_17487_17513[(2)] = inst_17467);

(statearr_17487_17513[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (10))){
var inst_17459 = (state_17473[(2)]);
var state_17473__$1 = state_17473;
var statearr_17488_17514 = state_17473__$1;
(statearr_17488_17514[(2)] = inst_17459);

(statearr_17488_17514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17474 === (8))){
var inst_17456 = cljs.core.async.close_BANG_(to);
var state_17473__$1 = state_17473;
var statearr_17489_17515 = state_17473__$1;
(statearr_17489_17515[(2)] = inst_17456);

(statearr_17489_17515[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___17501))
;
return ((function (switch__8643__auto__,c__8710__auto___17501){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_17493 = [null,null,null,null,null,null,null,null];
(statearr_17493[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_17493[(1)] = (1));

return statearr_17493;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_17473){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17473);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17494){if((e17494 instanceof Object)){
var ex__8647__auto__ = e17494;
var statearr_17495_17516 = state_17473;
(statearr_17495_17516[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17473);

return cljs.core.cst$kw$recur;
} else {
throw e17494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17517 = state_17473;
state_17473 = G__17517;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_17473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_17473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___17501))
})();
var state__8712__auto__ = (function (){var statearr_17496 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___17501);

return statearr_17496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___17501))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17701){
var vec__17702 = p__17701;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17702,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17702,(1),null);
var job = vec__17702;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__8710__auto___17884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results){
return (function (state_17707){
var state_val_17708 = (state_17707[(1)]);
if((state_val_17708 === (1))){
var state_17707__$1 = state_17707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17707__$1,(2),res,v);
} else {
if((state_val_17708 === (2))){
var inst_17704 = (state_17707[(2)]);
var inst_17705 = cljs.core.async.close_BANG_(res);
var state_17707__$1 = (function (){var statearr_17709 = state_17707;
(statearr_17709[(7)] = inst_17704);

return statearr_17709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17707__$1,inst_17705);
} else {
return null;
}
}
});})(c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results))
;
return ((function (switch__8643__auto__,c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_17713 = [null,null,null,null,null,null,null,null];
(statearr_17713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__);

(statearr_17713[(1)] = (1));

return statearr_17713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1 = (function (state_17707){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17707);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17714){if((e17714 instanceof Object)){
var ex__8647__auto__ = e17714;
var statearr_17715_17885 = state_17707;
(statearr_17715_17885[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17707);

return cljs.core.cst$kw$recur;
} else {
throw e17714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17886 = state_17707;
state_17707 = G__17886;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = function(state_17707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1.call(this,state_17707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results))
})();
var state__8712__auto__ = (function (){var statearr_17716 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___17884);

return statearr_17716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___17884,res,vec__17702,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17717){
var vec__17718 = p__17717;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718,(1),null);
var job = vec__17718;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5497__auto___17887 = n;
var __17888 = (0);
while(true){
if((__17888 < n__5497__auto___17887)){
var G__17719_17889 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17719_17889) {
case "compute":
var c__8710__auto___17891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17888,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (__17888,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function (state_17732){
var state_val_17733 = (state_17732[(1)]);
if((state_val_17733 === (1))){
var state_17732__$1 = state_17732;
var statearr_17734_17892 = state_17732__$1;
(statearr_17734_17892[(2)] = null);

(statearr_17734_17892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17733 === (2))){
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17732__$1,(4),jobs);
} else {
if((state_val_17733 === (3))){
var inst_17730 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17732__$1,inst_17730);
} else {
if((state_val_17733 === (4))){
var inst_17722 = (state_17732[(2)]);
var inst_17723 = process(inst_17722);
var state_17732__$1 = state_17732;
if(cljs.core.truth_(inst_17723)){
var statearr_17735_17893 = state_17732__$1;
(statearr_17735_17893[(1)] = (5));

} else {
var statearr_17736_17894 = state_17732__$1;
(statearr_17736_17894[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17733 === (5))){
var state_17732__$1 = state_17732;
var statearr_17737_17895 = state_17732__$1;
(statearr_17737_17895[(2)] = null);

(statearr_17737_17895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17733 === (6))){
var state_17732__$1 = state_17732;
var statearr_17738_17896 = state_17732__$1;
(statearr_17738_17896[(2)] = null);

(statearr_17738_17896[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17733 === (7))){
var inst_17728 = (state_17732[(2)]);
var state_17732__$1 = state_17732;
var statearr_17739_17897 = state_17732__$1;
(statearr_17739_17897[(2)] = inst_17728);

(statearr_17739_17897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17888,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
;
return ((function (__17888,switch__8643__auto__,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_17743 = [null,null,null,null,null,null,null];
(statearr_17743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__);

(statearr_17743[(1)] = (1));

return statearr_17743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1 = (function (state_17732){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17732);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17744){if((e17744 instanceof Object)){
var ex__8647__auto__ = e17744;
var statearr_17745_17898 = state_17732;
(statearr_17745_17898[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17732);

return cljs.core.cst$kw$recur;
} else {
throw e17744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17899 = state_17732;
state_17732 = G__17899;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = function(state_17732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1.call(this,state_17732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__;
})()
;})(__17888,switch__8643__auto__,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
})();
var state__8712__auto__ = (function (){var statearr_17746 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___17891);

return statearr_17746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(__17888,c__8710__auto___17891,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
);


break;
case "async":
var c__8710__auto___17900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17888,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (__17888,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function (state_17759){
var state_val_17760 = (state_17759[(1)]);
if((state_val_17760 === (1))){
var state_17759__$1 = state_17759;
var statearr_17761_17901 = state_17759__$1;
(statearr_17761_17901[(2)] = null);

(statearr_17761_17901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17760 === (2))){
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17759__$1,(4),jobs);
} else {
if((state_val_17760 === (3))){
var inst_17757 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17759__$1,inst_17757);
} else {
if((state_val_17760 === (4))){
var inst_17749 = (state_17759[(2)]);
var inst_17750 = async(inst_17749);
var state_17759__$1 = state_17759;
if(cljs.core.truth_(inst_17750)){
var statearr_17762_17902 = state_17759__$1;
(statearr_17762_17902[(1)] = (5));

} else {
var statearr_17763_17903 = state_17759__$1;
(statearr_17763_17903[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17760 === (5))){
var state_17759__$1 = state_17759;
var statearr_17764_17904 = state_17759__$1;
(statearr_17764_17904[(2)] = null);

(statearr_17764_17904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17760 === (6))){
var state_17759__$1 = state_17759;
var statearr_17765_17905 = state_17759__$1;
(statearr_17765_17905[(2)] = null);

(statearr_17765_17905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17760 === (7))){
var inst_17755 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
var statearr_17766_17906 = state_17759__$1;
(statearr_17766_17906[(2)] = inst_17755);

(statearr_17766_17906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17888,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
;
return ((function (__17888,switch__8643__auto__,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_17770 = [null,null,null,null,null,null,null];
(statearr_17770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__);

(statearr_17770[(1)] = (1));

return statearr_17770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1 = (function (state_17759){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17759);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17771){if((e17771 instanceof Object)){
var ex__8647__auto__ = e17771;
var statearr_17772_17907 = state_17759;
(statearr_17772_17907[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17759);

return cljs.core.cst$kw$recur;
} else {
throw e17771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17908 = state_17759;
state_17759 = G__17908;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = function(state_17759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1.call(this,state_17759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__;
})()
;})(__17888,switch__8643__auto__,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
})();
var state__8712__auto__ = (function (){var statearr_17773 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___17900);

return statearr_17773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(__17888,c__8710__auto___17900,G__17719_17889,n__5497__auto___17887,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17909 = (__17888 + (1));
__17888 = G__17909;
continue;
} else {
}
break;
}

var c__8710__auto___17910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___17910,jobs,results,process,async){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___17910,jobs,results,process,async){
return (function (state_17795){
var state_val_17796 = (state_17795[(1)]);
if((state_val_17796 === (1))){
var state_17795__$1 = state_17795;
var statearr_17797_17911 = state_17795__$1;
(statearr_17797_17911[(2)] = null);

(statearr_17797_17911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (2))){
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17795__$1,(4),from);
} else {
if((state_val_17796 === (3))){
var inst_17793 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17795__$1,inst_17793);
} else {
if((state_val_17796 === (4))){
var inst_17776 = (state_17795[(7)]);
var inst_17776__$1 = (state_17795[(2)]);
var inst_17777 = (inst_17776__$1 == null);
var state_17795__$1 = (function (){var statearr_17798 = state_17795;
(statearr_17798[(7)] = inst_17776__$1);

return statearr_17798;
})();
if(cljs.core.truth_(inst_17777)){
var statearr_17799_17912 = state_17795__$1;
(statearr_17799_17912[(1)] = (5));

} else {
var statearr_17800_17913 = state_17795__$1;
(statearr_17800_17913[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (5))){
var inst_17779 = cljs.core.async.close_BANG_(jobs);
var state_17795__$1 = state_17795;
var statearr_17801_17914 = state_17795__$1;
(statearr_17801_17914[(2)] = inst_17779);

(statearr_17801_17914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (6))){
var inst_17781 = (state_17795[(8)]);
var inst_17776 = (state_17795[(7)]);
var inst_17781__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17783 = [inst_17776,inst_17781__$1];
var inst_17784 = (new cljs.core.PersistentVector(null,2,(5),inst_17782,inst_17783,null));
var state_17795__$1 = (function (){var statearr_17802 = state_17795;
(statearr_17802[(8)] = inst_17781__$1);

return statearr_17802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17795__$1,(8),jobs,inst_17784);
} else {
if((state_val_17796 === (7))){
var inst_17791 = (state_17795[(2)]);
var state_17795__$1 = state_17795;
var statearr_17803_17915 = state_17795__$1;
(statearr_17803_17915[(2)] = inst_17791);

(statearr_17803_17915[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17796 === (8))){
var inst_17781 = (state_17795[(8)]);
var inst_17786 = (state_17795[(2)]);
var state_17795__$1 = (function (){var statearr_17804 = state_17795;
(statearr_17804[(9)] = inst_17786);

return statearr_17804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17795__$1,(9),results,inst_17781);
} else {
if((state_val_17796 === (9))){
var inst_17788 = (state_17795[(2)]);
var state_17795__$1 = (function (){var statearr_17805 = state_17795;
(statearr_17805[(10)] = inst_17788);

return statearr_17805;
})();
var statearr_17806_17916 = state_17795__$1;
(statearr_17806_17916[(2)] = null);

(statearr_17806_17916[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___17910,jobs,results,process,async))
;
return ((function (switch__8643__auto__,c__8710__auto___17910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_17810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__);

(statearr_17810[(1)] = (1));

return statearr_17810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1 = (function (state_17795){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17795);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17811){if((e17811 instanceof Object)){
var ex__8647__auto__ = e17811;
var statearr_17812_17917 = state_17795;
(statearr_17812_17917[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17795);

return cljs.core.cst$kw$recur;
} else {
throw e17811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17918 = state_17795;
state_17795 = G__17918;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = function(state_17795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1.call(this,state_17795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___17910,jobs,results,process,async))
})();
var state__8712__auto__ = (function (){var statearr_17813 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___17910);

return statearr_17813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___17910,jobs,results,process,async))
);


var c__8710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto__,jobs,results,process,async){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto__,jobs,results,process,async){
return (function (state_17851){
var state_val_17852 = (state_17851[(1)]);
if((state_val_17852 === (7))){
var inst_17847 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
var statearr_17853_17919 = state_17851__$1;
(statearr_17853_17919[(2)] = inst_17847);

(statearr_17853_17919[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (20))){
var state_17851__$1 = state_17851;
var statearr_17854_17920 = state_17851__$1;
(statearr_17854_17920[(2)] = null);

(statearr_17854_17920[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (1))){
var state_17851__$1 = state_17851;
var statearr_17855_17921 = state_17851__$1;
(statearr_17855_17921[(2)] = null);

(statearr_17855_17921[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (4))){
var inst_17816 = (state_17851[(7)]);
var inst_17816__$1 = (state_17851[(2)]);
var inst_17817 = (inst_17816__$1 == null);
var state_17851__$1 = (function (){var statearr_17856 = state_17851;
(statearr_17856[(7)] = inst_17816__$1);

return statearr_17856;
})();
if(cljs.core.truth_(inst_17817)){
var statearr_17857_17922 = state_17851__$1;
(statearr_17857_17922[(1)] = (5));

} else {
var statearr_17858_17923 = state_17851__$1;
(statearr_17858_17923[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (15))){
var inst_17829 = (state_17851[(8)]);
var state_17851__$1 = state_17851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17851__$1,(18),to,inst_17829);
} else {
if((state_val_17852 === (21))){
var inst_17842 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
var statearr_17859_17924 = state_17851__$1;
(statearr_17859_17924[(2)] = inst_17842);

(statearr_17859_17924[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (13))){
var inst_17844 = (state_17851[(2)]);
var state_17851__$1 = (function (){var statearr_17860 = state_17851;
(statearr_17860[(9)] = inst_17844);

return statearr_17860;
})();
var statearr_17861_17925 = state_17851__$1;
(statearr_17861_17925[(2)] = null);

(statearr_17861_17925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (6))){
var inst_17816 = (state_17851[(7)]);
var state_17851__$1 = state_17851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17851__$1,(11),inst_17816);
} else {
if((state_val_17852 === (17))){
var inst_17837 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
if(cljs.core.truth_(inst_17837)){
var statearr_17862_17926 = state_17851__$1;
(statearr_17862_17926[(1)] = (19));

} else {
var statearr_17863_17927 = state_17851__$1;
(statearr_17863_17927[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (3))){
var inst_17849 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17851__$1,inst_17849);
} else {
if((state_val_17852 === (12))){
var inst_17826 = (state_17851[(10)]);
var state_17851__$1 = state_17851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17851__$1,(14),inst_17826);
} else {
if((state_val_17852 === (2))){
var state_17851__$1 = state_17851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17851__$1,(4),results);
} else {
if((state_val_17852 === (19))){
var state_17851__$1 = state_17851;
var statearr_17864_17928 = state_17851__$1;
(statearr_17864_17928[(2)] = null);

(statearr_17864_17928[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (11))){
var inst_17826 = (state_17851[(2)]);
var state_17851__$1 = (function (){var statearr_17865 = state_17851;
(statearr_17865[(10)] = inst_17826);

return statearr_17865;
})();
var statearr_17866_17929 = state_17851__$1;
(statearr_17866_17929[(2)] = null);

(statearr_17866_17929[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (9))){
var state_17851__$1 = state_17851;
var statearr_17867_17930 = state_17851__$1;
(statearr_17867_17930[(2)] = null);

(statearr_17867_17930[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (5))){
var state_17851__$1 = state_17851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17868_17931 = state_17851__$1;
(statearr_17868_17931[(1)] = (8));

} else {
var statearr_17869_17932 = state_17851__$1;
(statearr_17869_17932[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (14))){
var inst_17829 = (state_17851[(8)]);
var inst_17831 = (state_17851[(11)]);
var inst_17829__$1 = (state_17851[(2)]);
var inst_17830 = (inst_17829__$1 == null);
var inst_17831__$1 = cljs.core.not(inst_17830);
var state_17851__$1 = (function (){var statearr_17870 = state_17851;
(statearr_17870[(8)] = inst_17829__$1);

(statearr_17870[(11)] = inst_17831__$1);

return statearr_17870;
})();
if(inst_17831__$1){
var statearr_17871_17933 = state_17851__$1;
(statearr_17871_17933[(1)] = (15));

} else {
var statearr_17872_17934 = state_17851__$1;
(statearr_17872_17934[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (16))){
var inst_17831 = (state_17851[(11)]);
var state_17851__$1 = state_17851;
var statearr_17873_17935 = state_17851__$1;
(statearr_17873_17935[(2)] = inst_17831);

(statearr_17873_17935[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (10))){
var inst_17823 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
var statearr_17874_17936 = state_17851__$1;
(statearr_17874_17936[(2)] = inst_17823);

(statearr_17874_17936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (18))){
var inst_17834 = (state_17851[(2)]);
var state_17851__$1 = state_17851;
var statearr_17875_17937 = state_17851__$1;
(statearr_17875_17937[(2)] = inst_17834);

(statearr_17875_17937[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17852 === (8))){
var inst_17820 = cljs.core.async.close_BANG_(to);
var state_17851__$1 = state_17851;
var statearr_17876_17938 = state_17851__$1;
(statearr_17876_17938[(2)] = inst_17820);

(statearr_17876_17938[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto__,jobs,results,process,async))
;
return ((function (switch__8643__auto__,c__8710__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_17880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__);

(statearr_17880[(1)] = (1));

return statearr_17880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1 = (function (state_17851){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17851);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e17881){if((e17881 instanceof Object)){
var ex__8647__auto__ = e17881;
var statearr_17882_17939 = state_17851;
(statearr_17882_17939[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17851);

return cljs.core.cst$kw$recur;
} else {
throw e17881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__17940 = state_17851;
state_17851 = G__17940;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__ = function(state_17851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1.call(this,state_17851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto__,jobs,results,process,async))
})();
var state__8712__auto__ = (function (){var statearr_17883 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_17883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto__);

return statearr_17883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto__,jobs,results,process,async))
);

return c__8710__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args17941 = [];
var len__5652__auto___17944 = arguments.length;
var i__5653__auto___17945 = (0);
while(true){
if((i__5653__auto___17945 < len__5652__auto___17944)){
args17941.push((arguments[i__5653__auto___17945]));

var G__17946 = (i__5653__auto___17945 + (1));
i__5653__auto___17945 = G__17946;
continue;
} else {
}
break;
}

var G__17943 = args17941.length;
switch (G__17943) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17941.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args17948 = [];
var len__5652__auto___17951 = arguments.length;
var i__5653__auto___17952 = (0);
while(true){
if((i__5653__auto___17952 < len__5652__auto___17951)){
args17948.push((arguments[i__5653__auto___17952]));

var G__17953 = (i__5653__auto___17952 + (1));
i__5653__auto___17952 = G__17953;
continue;
} else {
}
break;
}

var G__17950 = args17948.length;
switch (G__17950) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17948.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args17955 = [];
var len__5652__auto___18008 = arguments.length;
var i__5653__auto___18009 = (0);
while(true){
if((i__5653__auto___18009 < len__5652__auto___18008)){
args17955.push((arguments[i__5653__auto___18009]));

var G__18010 = (i__5653__auto___18009 + (1));
i__5653__auto___18009 = G__18010;
continue;
} else {
}
break;
}

var G__17957 = args17955.length;
switch (G__17957) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17955.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__8710__auto___18012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___18012,tc,fc){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___18012,tc,fc){
return (function (state_17983){
var state_val_17984 = (state_17983[(1)]);
if((state_val_17984 === (7))){
var inst_17979 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_17985_18013 = state_17983__$1;
(statearr_17985_18013[(2)] = inst_17979);

(statearr_17985_18013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (1))){
var state_17983__$1 = state_17983;
var statearr_17986_18014 = state_17983__$1;
(statearr_17986_18014[(2)] = null);

(statearr_17986_18014[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (4))){
var inst_17960 = (state_17983[(7)]);
var inst_17960__$1 = (state_17983[(2)]);
var inst_17961 = (inst_17960__$1 == null);
var state_17983__$1 = (function (){var statearr_17987 = state_17983;
(statearr_17987[(7)] = inst_17960__$1);

return statearr_17987;
})();
if(cljs.core.truth_(inst_17961)){
var statearr_17988_18015 = state_17983__$1;
(statearr_17988_18015[(1)] = (5));

} else {
var statearr_17989_18016 = state_17983__$1;
(statearr_17989_18016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (13))){
var state_17983__$1 = state_17983;
var statearr_17990_18017 = state_17983__$1;
(statearr_17990_18017[(2)] = null);

(statearr_17990_18017[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (6))){
var inst_17960 = (state_17983[(7)]);
var inst_17966 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17960) : p.call(null,inst_17960));
var state_17983__$1 = state_17983;
if(cljs.core.truth_(inst_17966)){
var statearr_17991_18018 = state_17983__$1;
(statearr_17991_18018[(1)] = (9));

} else {
var statearr_17992_18019 = state_17983__$1;
(statearr_17992_18019[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (3))){
var inst_17981 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17983__$1,inst_17981);
} else {
if((state_val_17984 === (12))){
var state_17983__$1 = state_17983;
var statearr_17993_18020 = state_17983__$1;
(statearr_17993_18020[(2)] = null);

(statearr_17993_18020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (2))){
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17983__$1,(4),ch);
} else {
if((state_val_17984 === (11))){
var inst_17960 = (state_17983[(7)]);
var inst_17970 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17983__$1,(8),inst_17970,inst_17960);
} else {
if((state_val_17984 === (9))){
var state_17983__$1 = state_17983;
var statearr_17994_18021 = state_17983__$1;
(statearr_17994_18021[(2)] = tc);

(statearr_17994_18021[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (5))){
var inst_17963 = cljs.core.async.close_BANG_(tc);
var inst_17964 = cljs.core.async.close_BANG_(fc);
var state_17983__$1 = (function (){var statearr_17995 = state_17983;
(statearr_17995[(8)] = inst_17963);

return statearr_17995;
})();
var statearr_17996_18022 = state_17983__$1;
(statearr_17996_18022[(2)] = inst_17964);

(statearr_17996_18022[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (14))){
var inst_17977 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_17997_18023 = state_17983__$1;
(statearr_17997_18023[(2)] = inst_17977);

(statearr_17997_18023[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (10))){
var state_17983__$1 = state_17983;
var statearr_17998_18024 = state_17983__$1;
(statearr_17998_18024[(2)] = fc);

(statearr_17998_18024[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (8))){
var inst_17972 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
if(cljs.core.truth_(inst_17972)){
var statearr_17999_18025 = state_17983__$1;
(statearr_17999_18025[(1)] = (12));

} else {
var statearr_18000_18026 = state_17983__$1;
(statearr_18000_18026[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___18012,tc,fc))
;
return ((function (switch__8643__auto__,c__8710__auto___18012,tc,fc){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_18004 = [null,null,null,null,null,null,null,null,null];
(statearr_18004[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_18004[(1)] = (1));

return statearr_18004;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_17983){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_17983);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e18005){if((e18005 instanceof Object)){
var ex__8647__auto__ = e18005;
var statearr_18006_18027 = state_17983;
(statearr_18006_18027[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17983);

return cljs.core.cst$kw$recur;
} else {
throw e18005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__18028 = state_17983;
state_17983 = G__18028;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_17983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_17983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___18012,tc,fc))
})();
var state__8712__auto__ = (function (){var statearr_18007 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_18007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___18012);

return statearr_18007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___18012,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto__){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto__){
return (function (state_18075){
var state_val_18076 = (state_18075[(1)]);
if((state_val_18076 === (1))){
var inst_18061 = init;
var state_18075__$1 = (function (){var statearr_18077 = state_18075;
(statearr_18077[(7)] = inst_18061);

return statearr_18077;
})();
var statearr_18078_18093 = state_18075__$1;
(statearr_18078_18093[(2)] = null);

(statearr_18078_18093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18076 === (2))){
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18075__$1,(4),ch);
} else {
if((state_val_18076 === (3))){
var inst_18073 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18075__$1,inst_18073);
} else {
if((state_val_18076 === (4))){
var inst_18064 = (state_18075[(8)]);
var inst_18064__$1 = (state_18075[(2)]);
var inst_18065 = (inst_18064__$1 == null);
var state_18075__$1 = (function (){var statearr_18079 = state_18075;
(statearr_18079[(8)] = inst_18064__$1);

return statearr_18079;
})();
if(cljs.core.truth_(inst_18065)){
var statearr_18080_18094 = state_18075__$1;
(statearr_18080_18094[(1)] = (5));

} else {
var statearr_18081_18095 = state_18075__$1;
(statearr_18081_18095[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18076 === (5))){
var inst_18061 = (state_18075[(7)]);
var state_18075__$1 = state_18075;
var statearr_18082_18096 = state_18075__$1;
(statearr_18082_18096[(2)] = inst_18061);

(statearr_18082_18096[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18076 === (6))){
var inst_18061 = (state_18075[(7)]);
var inst_18064 = (state_18075[(8)]);
var inst_18068 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18061,inst_18064) : f.call(null,inst_18061,inst_18064));
var inst_18061__$1 = inst_18068;
var state_18075__$1 = (function (){var statearr_18083 = state_18075;
(statearr_18083[(7)] = inst_18061__$1);

return statearr_18083;
})();
var statearr_18084_18097 = state_18075__$1;
(statearr_18084_18097[(2)] = null);

(statearr_18084_18097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18076 === (7))){
var inst_18071 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18085_18098 = state_18075__$1;
(statearr_18085_18098[(2)] = inst_18071);

(statearr_18085_18098[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__8710__auto__))
;
return ((function (switch__8643__auto__,c__8710__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8644__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8644__auto____0 = (function (){
var statearr_18089 = [null,null,null,null,null,null,null,null,null];
(statearr_18089[(0)] = cljs$core$async$reduce_$_state_machine__8644__auto__);

(statearr_18089[(1)] = (1));

return statearr_18089;
});
var cljs$core$async$reduce_$_state_machine__8644__auto____1 = (function (state_18075){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_18075);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object)){
var ex__8647__auto__ = e18090;
var statearr_18091_18099 = state_18075;
(statearr_18091_18099[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18075);

return cljs.core.cst$kw$recur;
} else {
throw e18090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__18100 = state_18075;
state_18075 = G__18100;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8644__auto__ = function(state_18075){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8644__auto____1.call(this,state_18075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8644__auto____0;
cljs$core$async$reduce_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8644__auto____1;
return cljs$core$async$reduce_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto__))
})();
var state__8712__auto__ = (function (){var statearr_18092 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_18092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto__);

return statearr_18092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto__))
);

return c__8710__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args18101 = [];
var len__5652__auto___18153 = arguments.length;
var i__5653__auto___18154 = (0);
while(true){
if((i__5653__auto___18154 < len__5652__auto___18153)){
args18101.push((arguments[i__5653__auto___18154]));

var G__18155 = (i__5653__auto___18154 + (1));
i__5653__auto___18154 = G__18155;
continue;
} else {
}
break;
}

var G__18103 = args18101.length;
switch (G__18103) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18101.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto__){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto__){
return (function (state_18128){
var state_val_18129 = (state_18128[(1)]);
if((state_val_18129 === (7))){
var inst_18110 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18130_18157 = state_18128__$1;
(statearr_18130_18157[(2)] = inst_18110);

(statearr_18130_18157[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (1))){
var inst_18104 = cljs.core.seq(coll);
var inst_18105 = inst_18104;
var state_18128__$1 = (function (){var statearr_18131 = state_18128;
(statearr_18131[(7)] = inst_18105);

return statearr_18131;
})();
var statearr_18132_18158 = state_18128__$1;
(statearr_18132_18158[(2)] = null);

(statearr_18132_18158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (4))){
var inst_18105 = (state_18128[(7)]);
var inst_18108 = cljs.core.first(inst_18105);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18128__$1,(7),ch,inst_18108);
} else {
if((state_val_18129 === (13))){
var inst_18122 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18133_18159 = state_18128__$1;
(statearr_18133_18159[(2)] = inst_18122);

(statearr_18133_18159[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (6))){
var inst_18113 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
if(cljs.core.truth_(inst_18113)){
var statearr_18134_18160 = state_18128__$1;
(statearr_18134_18160[(1)] = (8));

} else {
var statearr_18135_18161 = state_18128__$1;
(statearr_18135_18161[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (3))){
var inst_18126 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18128__$1,inst_18126);
} else {
if((state_val_18129 === (12))){
var state_18128__$1 = state_18128;
var statearr_18136_18162 = state_18128__$1;
(statearr_18136_18162[(2)] = null);

(statearr_18136_18162[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (2))){
var inst_18105 = (state_18128[(7)]);
var state_18128__$1 = state_18128;
if(cljs.core.truth_(inst_18105)){
var statearr_18137_18163 = state_18128__$1;
(statearr_18137_18163[(1)] = (4));

} else {
var statearr_18138_18164 = state_18128__$1;
(statearr_18138_18164[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (11))){
var inst_18119 = cljs.core.async.close_BANG_(ch);
var state_18128__$1 = state_18128;
var statearr_18139_18165 = state_18128__$1;
(statearr_18139_18165[(2)] = inst_18119);

(statearr_18139_18165[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (9))){
var state_18128__$1 = state_18128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18140_18166 = state_18128__$1;
(statearr_18140_18166[(1)] = (11));

} else {
var statearr_18141_18167 = state_18128__$1;
(statearr_18141_18167[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (5))){
var inst_18105 = (state_18128[(7)]);
var state_18128__$1 = state_18128;
var statearr_18142_18168 = state_18128__$1;
(statearr_18142_18168[(2)] = inst_18105);

(statearr_18142_18168[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (10))){
var inst_18124 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18143_18169 = state_18128__$1;
(statearr_18143_18169[(2)] = inst_18124);

(statearr_18143_18169[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (8))){
var inst_18105 = (state_18128[(7)]);
var inst_18115 = cljs.core.next(inst_18105);
var inst_18105__$1 = inst_18115;
var state_18128__$1 = (function (){var statearr_18144 = state_18128;
(statearr_18144[(7)] = inst_18105__$1);

return statearr_18144;
})();
var statearr_18145_18170 = state_18128__$1;
(statearr_18145_18170[(2)] = null);

(statearr_18145_18170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto__))
;
return ((function (switch__8643__auto__,c__8710__auto__){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_18128){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_18128);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__8647__auto__ = e18150;
var statearr_18151_18171 = state_18128;
(statearr_18151_18171[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18128);

return cljs.core.cst$kw$recur;
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__18172 = state_18128;
state_18128 = G__18172;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_18128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_18128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto__))
})();
var state__8712__auto__ = (function (){var statearr_18152 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_18152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto__);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto__))
);

return c__8710__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5249__auto__ = (((_ == null))?null:_);
var m__5250__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5250__auto__.call(null,_));
} else {
var m__5250__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5250__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5250__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5250__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5250__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto__.call(null,m,ch));
} else {
var m__5250__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5250__auto__.call(null,m));
} else {
var m__5250__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5250__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18397 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18397) : cljs.core.atom.call(null,G__18397));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18398 = (function (mult,ch,cs,meta18399){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18399 = meta18399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18400,meta18399__$1){
var self__ = this;
var _18400__$1 = this;
return (new cljs.core.async.t_cljs$core$async18398(self__.mult,self__.ch,self__.cs,meta18399__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18400){
var self__ = this;
var _18400__$1 = this;
return self__.meta18399;
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18401_18621 = self__.cs;
var G__18402_18622 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18401_18621,G__18402_18622) : cljs.core.reset_BANG_.call(null,G__18401_18621,G__18402_18622));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18399], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18398";

cljs.core.async.t_cljs$core$async18398.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async18398");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18398 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18398(mult__$1,ch__$1,cs__$1,meta18399){
return (new cljs.core.async.t_cljs$core$async18398(mult__$1,ch__$1,cs__$1,meta18399));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18398(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8710__auto___18623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___18623,cs,m,dchan,dctr,done){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___18623,cs,m,dchan,dctr,done){
return (function (state_18533){
var state_val_18534 = (state_18533[(1)]);
if((state_val_18534 === (7))){
var inst_18529 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18535_18624 = state_18533__$1;
(statearr_18535_18624[(2)] = inst_18529);

(statearr_18535_18624[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (20))){
var inst_18434 = (state_18533[(7)]);
var inst_18444 = cljs.core.first(inst_18434);
var inst_18445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18444,(0),null);
var inst_18446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18444,(1),null);
var state_18533__$1 = (function (){var statearr_18536 = state_18533;
(statearr_18536[(8)] = inst_18445);

return statearr_18536;
})();
if(cljs.core.truth_(inst_18446)){
var statearr_18537_18625 = state_18533__$1;
(statearr_18537_18625[(1)] = (22));

} else {
var statearr_18538_18626 = state_18533__$1;
(statearr_18538_18626[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (27))){
var inst_18481 = (state_18533[(9)]);
var inst_18474 = (state_18533[(10)]);
var inst_18476 = (state_18533[(11)]);
var inst_18405 = (state_18533[(12)]);
var inst_18481__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18474,inst_18476);
var inst_18482 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18481__$1,inst_18405,done);
var state_18533__$1 = (function (){var statearr_18539 = state_18533;
(statearr_18539[(9)] = inst_18481__$1);

return statearr_18539;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18540_18627 = state_18533__$1;
(statearr_18540_18627[(1)] = (30));

} else {
var statearr_18541_18628 = state_18533__$1;
(statearr_18541_18628[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (1))){
var state_18533__$1 = state_18533;
var statearr_18542_18629 = state_18533__$1;
(statearr_18542_18629[(2)] = null);

(statearr_18542_18629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (24))){
var inst_18434 = (state_18533[(7)]);
var inst_18451 = (state_18533[(2)]);
var inst_18452 = cljs.core.next(inst_18434);
var inst_18414 = inst_18452;
var inst_18415 = null;
var inst_18416 = (0);
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18543 = state_18533;
(statearr_18543[(13)] = inst_18414);

(statearr_18543[(14)] = inst_18417);

(statearr_18543[(15)] = inst_18451);

(statearr_18543[(16)] = inst_18415);

(statearr_18543[(17)] = inst_18416);

return statearr_18543;
})();
var statearr_18544_18630 = state_18533__$1;
(statearr_18544_18630[(2)] = null);

(statearr_18544_18630[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (39))){
var state_18533__$1 = state_18533;
var statearr_18548_18631 = state_18533__$1;
(statearr_18548_18631[(2)] = null);

(statearr_18548_18631[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (4))){
var inst_18405 = (state_18533[(12)]);
var inst_18405__$1 = (state_18533[(2)]);
var inst_18406 = (inst_18405__$1 == null);
var state_18533__$1 = (function (){var statearr_18549 = state_18533;
(statearr_18549[(12)] = inst_18405__$1);

return statearr_18549;
})();
if(cljs.core.truth_(inst_18406)){
var statearr_18550_18632 = state_18533__$1;
(statearr_18550_18632[(1)] = (5));

} else {
var statearr_18551_18633 = state_18533__$1;
(statearr_18551_18633[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (15))){
var inst_18414 = (state_18533[(13)]);
var inst_18417 = (state_18533[(14)]);
var inst_18415 = (state_18533[(16)]);
var inst_18416 = (state_18533[(17)]);
var inst_18430 = (state_18533[(2)]);
var inst_18431 = (inst_18417 + (1));
var tmp18545 = inst_18414;
var tmp18546 = inst_18415;
var tmp18547 = inst_18416;
var inst_18414__$1 = tmp18545;
var inst_18415__$1 = tmp18546;
var inst_18416__$1 = tmp18547;
var inst_18417__$1 = inst_18431;
var state_18533__$1 = (function (){var statearr_18552 = state_18533;
(statearr_18552[(13)] = inst_18414__$1);

(statearr_18552[(18)] = inst_18430);

(statearr_18552[(14)] = inst_18417__$1);

(statearr_18552[(16)] = inst_18415__$1);

(statearr_18552[(17)] = inst_18416__$1);

return statearr_18552;
})();
var statearr_18553_18634 = state_18533__$1;
(statearr_18553_18634[(2)] = null);

(statearr_18553_18634[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (21))){
var inst_18455 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18557_18635 = state_18533__$1;
(statearr_18557_18635[(2)] = inst_18455);

(statearr_18557_18635[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (31))){
var inst_18481 = (state_18533[(9)]);
var inst_18485 = done(null);
var inst_18486 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18481);
var state_18533__$1 = (function (){var statearr_18558 = state_18533;
(statearr_18558[(19)] = inst_18485);

return statearr_18558;
})();
var statearr_18559_18636 = state_18533__$1;
(statearr_18559_18636[(2)] = inst_18486);

(statearr_18559_18636[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (32))){
var inst_18473 = (state_18533[(20)]);
var inst_18474 = (state_18533[(10)]);
var inst_18476 = (state_18533[(11)]);
var inst_18475 = (state_18533[(21)]);
var inst_18488 = (state_18533[(2)]);
var inst_18489 = (inst_18476 + (1));
var tmp18554 = inst_18473;
var tmp18555 = inst_18474;
var tmp18556 = inst_18475;
var inst_18473__$1 = tmp18554;
var inst_18474__$1 = tmp18555;
var inst_18475__$1 = tmp18556;
var inst_18476__$1 = inst_18489;
var state_18533__$1 = (function (){var statearr_18560 = state_18533;
(statearr_18560[(20)] = inst_18473__$1);

(statearr_18560[(10)] = inst_18474__$1);

(statearr_18560[(11)] = inst_18476__$1);

(statearr_18560[(22)] = inst_18488);

(statearr_18560[(21)] = inst_18475__$1);

return statearr_18560;
})();
var statearr_18561_18637 = state_18533__$1;
(statearr_18561_18637[(2)] = null);

(statearr_18561_18637[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (40))){
var inst_18501 = (state_18533[(23)]);
var inst_18505 = done(null);
var inst_18506 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18501);
var state_18533__$1 = (function (){var statearr_18562 = state_18533;
(statearr_18562[(24)] = inst_18505);

return statearr_18562;
})();
var statearr_18563_18638 = state_18533__$1;
(statearr_18563_18638[(2)] = inst_18506);

(statearr_18563_18638[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (33))){
var inst_18492 = (state_18533[(25)]);
var inst_18494 = cljs.core.chunked_seq_QMARK_(inst_18492);
var state_18533__$1 = state_18533;
if(inst_18494){
var statearr_18564_18639 = state_18533__$1;
(statearr_18564_18639[(1)] = (36));

} else {
var statearr_18565_18640 = state_18533__$1;
(statearr_18565_18640[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (13))){
var inst_18424 = (state_18533[(26)]);
var inst_18427 = cljs.core.async.close_BANG_(inst_18424);
var state_18533__$1 = state_18533;
var statearr_18566_18641 = state_18533__$1;
(statearr_18566_18641[(2)] = inst_18427);

(statearr_18566_18641[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (22))){
var inst_18445 = (state_18533[(8)]);
var inst_18448 = cljs.core.async.close_BANG_(inst_18445);
var state_18533__$1 = state_18533;
var statearr_18567_18642 = state_18533__$1;
(statearr_18567_18642[(2)] = inst_18448);

(statearr_18567_18642[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (36))){
var inst_18492 = (state_18533[(25)]);
var inst_18496 = cljs.core.chunk_first(inst_18492);
var inst_18497 = cljs.core.chunk_rest(inst_18492);
var inst_18498 = cljs.core.count(inst_18496);
var inst_18473 = inst_18497;
var inst_18474 = inst_18496;
var inst_18475 = inst_18498;
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18568 = state_18533;
(statearr_18568[(20)] = inst_18473);

(statearr_18568[(10)] = inst_18474);

(statearr_18568[(11)] = inst_18476);

(statearr_18568[(21)] = inst_18475);

return statearr_18568;
})();
var statearr_18569_18643 = state_18533__$1;
(statearr_18569_18643[(2)] = null);

(statearr_18569_18643[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (41))){
var inst_18492 = (state_18533[(25)]);
var inst_18508 = (state_18533[(2)]);
var inst_18509 = cljs.core.next(inst_18492);
var inst_18473 = inst_18509;
var inst_18474 = null;
var inst_18475 = (0);
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18570 = state_18533;
(statearr_18570[(20)] = inst_18473);

(statearr_18570[(10)] = inst_18474);

(statearr_18570[(11)] = inst_18476);

(statearr_18570[(21)] = inst_18475);

(statearr_18570[(27)] = inst_18508);

return statearr_18570;
})();
var statearr_18571_18644 = state_18533__$1;
(statearr_18571_18644[(2)] = null);

(statearr_18571_18644[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (43))){
var state_18533__$1 = state_18533;
var statearr_18572_18645 = state_18533__$1;
(statearr_18572_18645[(2)] = null);

(statearr_18572_18645[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (29))){
var inst_18517 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18573_18646 = state_18533__$1;
(statearr_18573_18646[(2)] = inst_18517);

(statearr_18573_18646[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (44))){
var inst_18526 = (state_18533[(2)]);
var state_18533__$1 = (function (){var statearr_18574 = state_18533;
(statearr_18574[(28)] = inst_18526);

return statearr_18574;
})();
var statearr_18575_18647 = state_18533__$1;
(statearr_18575_18647[(2)] = null);

(statearr_18575_18647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (6))){
var inst_18465 = (state_18533[(29)]);
var inst_18464 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18465__$1 = cljs.core.keys(inst_18464);
var inst_18466 = cljs.core.count(inst_18465__$1);
var inst_18467 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18466) : cljs.core.reset_BANG_.call(null,dctr,inst_18466));
var inst_18472 = cljs.core.seq(inst_18465__$1);
var inst_18473 = inst_18472;
var inst_18474 = null;
var inst_18475 = (0);
var inst_18476 = (0);
var state_18533__$1 = (function (){var statearr_18576 = state_18533;
(statearr_18576[(20)] = inst_18473);

(statearr_18576[(10)] = inst_18474);

(statearr_18576[(29)] = inst_18465__$1);

(statearr_18576[(11)] = inst_18476);

(statearr_18576[(21)] = inst_18475);

(statearr_18576[(30)] = inst_18467);

return statearr_18576;
})();
var statearr_18577_18648 = state_18533__$1;
(statearr_18577_18648[(2)] = null);

(statearr_18577_18648[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (28))){
var inst_18492 = (state_18533[(25)]);
var inst_18473 = (state_18533[(20)]);
var inst_18492__$1 = cljs.core.seq(inst_18473);
var state_18533__$1 = (function (){var statearr_18578 = state_18533;
(statearr_18578[(25)] = inst_18492__$1);

return statearr_18578;
})();
if(inst_18492__$1){
var statearr_18579_18649 = state_18533__$1;
(statearr_18579_18649[(1)] = (33));

} else {
var statearr_18580_18650 = state_18533__$1;
(statearr_18580_18650[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (25))){
var inst_18476 = (state_18533[(11)]);
var inst_18475 = (state_18533[(21)]);
var inst_18478 = (inst_18476 < inst_18475);
var inst_18479 = inst_18478;
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18479)){
var statearr_18581_18651 = state_18533__$1;
(statearr_18581_18651[(1)] = (27));

} else {
var statearr_18582_18652 = state_18533__$1;
(statearr_18582_18652[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (34))){
var state_18533__$1 = state_18533;
var statearr_18583_18653 = state_18533__$1;
(statearr_18583_18653[(2)] = null);

(statearr_18583_18653[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (17))){
var state_18533__$1 = state_18533;
var statearr_18584_18654 = state_18533__$1;
(statearr_18584_18654[(2)] = null);

(statearr_18584_18654[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (3))){
var inst_18531 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18533__$1,inst_18531);
} else {
if((state_val_18534 === (12))){
var inst_18460 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18585_18655 = state_18533__$1;
(statearr_18585_18655[(2)] = inst_18460);

(statearr_18585_18655[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (2))){
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18533__$1,(4),ch);
} else {
if((state_val_18534 === (23))){
var state_18533__$1 = state_18533;
var statearr_18586_18656 = state_18533__$1;
(statearr_18586_18656[(2)] = null);

(statearr_18586_18656[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (35))){
var inst_18515 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18587_18657 = state_18533__$1;
(statearr_18587_18657[(2)] = inst_18515);

(statearr_18587_18657[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (19))){
var inst_18434 = (state_18533[(7)]);
var inst_18438 = cljs.core.chunk_first(inst_18434);
var inst_18439 = cljs.core.chunk_rest(inst_18434);
var inst_18440 = cljs.core.count(inst_18438);
var inst_18414 = inst_18439;
var inst_18415 = inst_18438;
var inst_18416 = inst_18440;
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18588 = state_18533;
(statearr_18588[(13)] = inst_18414);

(statearr_18588[(14)] = inst_18417);

(statearr_18588[(16)] = inst_18415);

(statearr_18588[(17)] = inst_18416);

return statearr_18588;
})();
var statearr_18589_18658 = state_18533__$1;
(statearr_18589_18658[(2)] = null);

(statearr_18589_18658[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (11))){
var inst_18434 = (state_18533[(7)]);
var inst_18414 = (state_18533[(13)]);
var inst_18434__$1 = cljs.core.seq(inst_18414);
var state_18533__$1 = (function (){var statearr_18590 = state_18533;
(statearr_18590[(7)] = inst_18434__$1);

return statearr_18590;
})();
if(inst_18434__$1){
var statearr_18591_18659 = state_18533__$1;
(statearr_18591_18659[(1)] = (16));

} else {
var statearr_18592_18660 = state_18533__$1;
(statearr_18592_18660[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (9))){
var inst_18462 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18593_18661 = state_18533__$1;
(statearr_18593_18661[(2)] = inst_18462);

(statearr_18593_18661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (5))){
var inst_18412 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18413 = cljs.core.seq(inst_18412);
var inst_18414 = inst_18413;
var inst_18415 = null;
var inst_18416 = (0);
var inst_18417 = (0);
var state_18533__$1 = (function (){var statearr_18594 = state_18533;
(statearr_18594[(13)] = inst_18414);

(statearr_18594[(14)] = inst_18417);

(statearr_18594[(16)] = inst_18415);

(statearr_18594[(17)] = inst_18416);

return statearr_18594;
})();
var statearr_18595_18662 = state_18533__$1;
(statearr_18595_18662[(2)] = null);

(statearr_18595_18662[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (14))){
var state_18533__$1 = state_18533;
var statearr_18596_18663 = state_18533__$1;
(statearr_18596_18663[(2)] = null);

(statearr_18596_18663[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (45))){
var inst_18523 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18597_18664 = state_18533__$1;
(statearr_18597_18664[(2)] = inst_18523);

(statearr_18597_18664[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (26))){
var inst_18465 = (state_18533[(29)]);
var inst_18519 = (state_18533[(2)]);
var inst_18520 = cljs.core.seq(inst_18465);
var state_18533__$1 = (function (){var statearr_18598 = state_18533;
(statearr_18598[(31)] = inst_18519);

return statearr_18598;
})();
if(inst_18520){
var statearr_18599_18665 = state_18533__$1;
(statearr_18599_18665[(1)] = (42));

} else {
var statearr_18600_18666 = state_18533__$1;
(statearr_18600_18666[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (16))){
var inst_18434 = (state_18533[(7)]);
var inst_18436 = cljs.core.chunked_seq_QMARK_(inst_18434);
var state_18533__$1 = state_18533;
if(inst_18436){
var statearr_18601_18667 = state_18533__$1;
(statearr_18601_18667[(1)] = (19));

} else {
var statearr_18602_18668 = state_18533__$1;
(statearr_18602_18668[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (38))){
var inst_18512 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18603_18669 = state_18533__$1;
(statearr_18603_18669[(2)] = inst_18512);

(statearr_18603_18669[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (30))){
var state_18533__$1 = state_18533;
var statearr_18604_18670 = state_18533__$1;
(statearr_18604_18670[(2)] = null);

(statearr_18604_18670[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (10))){
var inst_18417 = (state_18533[(14)]);
var inst_18415 = (state_18533[(16)]);
var inst_18423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18415,inst_18417);
var inst_18424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(0),null);
var inst_18425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(1),null);
var state_18533__$1 = (function (){var statearr_18605 = state_18533;
(statearr_18605[(26)] = inst_18424);

return statearr_18605;
})();
if(cljs.core.truth_(inst_18425)){
var statearr_18606_18671 = state_18533__$1;
(statearr_18606_18671[(1)] = (13));

} else {
var statearr_18607_18672 = state_18533__$1;
(statearr_18607_18672[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (18))){
var inst_18458 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18608_18673 = state_18533__$1;
(statearr_18608_18673[(2)] = inst_18458);

(statearr_18608_18673[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (42))){
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18533__$1,(45),dchan);
} else {
if((state_val_18534 === (37))){
var inst_18501 = (state_18533[(23)]);
var inst_18492 = (state_18533[(25)]);
var inst_18405 = (state_18533[(12)]);
var inst_18501__$1 = cljs.core.first(inst_18492);
var inst_18502 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18501__$1,inst_18405,done);
var state_18533__$1 = (function (){var statearr_18609 = state_18533;
(statearr_18609[(23)] = inst_18501__$1);

return statearr_18609;
})();
if(cljs.core.truth_(inst_18502)){
var statearr_18610_18674 = state_18533__$1;
(statearr_18610_18674[(1)] = (39));

} else {
var statearr_18611_18675 = state_18533__$1;
(statearr_18611_18675[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18534 === (8))){
var inst_18417 = (state_18533[(14)]);
var inst_18416 = (state_18533[(17)]);
var inst_18419 = (inst_18417 < inst_18416);
var inst_18420 = inst_18419;
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18420)){
var statearr_18612_18676 = state_18533__$1;
(statearr_18612_18676[(1)] = (10));

} else {
var statearr_18613_18677 = state_18533__$1;
(statearr_18613_18677[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___18623,cs,m,dchan,dctr,done))
;
return ((function (switch__8643__auto__,c__8710__auto___18623,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8644__auto__ = null;
var cljs$core$async$mult_$_state_machine__8644__auto____0 = (function (){
var statearr_18617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18617[(0)] = cljs$core$async$mult_$_state_machine__8644__auto__);

(statearr_18617[(1)] = (1));

return statearr_18617;
});
var cljs$core$async$mult_$_state_machine__8644__auto____1 = (function (state_18533){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_18533);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e18618){if((e18618 instanceof Object)){
var ex__8647__auto__ = e18618;
var statearr_18619_18678 = state_18533;
(statearr_18619_18678[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18533);

return cljs.core.cst$kw$recur;
} else {
throw e18618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__18679 = state_18533;
state_18533 = G__18679;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8644__auto__ = function(state_18533){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8644__auto____1.call(this,state_18533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8644__auto____0;
cljs$core$async$mult_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8644__auto____1;
return cljs$core$async$mult_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___18623,cs,m,dchan,dctr,done))
})();
var state__8712__auto__ = (function (){var statearr_18620 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_18620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___18623);

return statearr_18620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___18623,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args18680 = [];
var len__5652__auto___18683 = arguments.length;
var i__5653__auto___18684 = (0);
while(true){
if((i__5653__auto___18684 < len__5652__auto___18683)){
args18680.push((arguments[i__5653__auto___18684]));

var G__18685 = (i__5653__auto___18684 + (1));
i__5653__auto___18684 = G__18685;
continue;
} else {
}
break;
}

var G__18682 = args18680.length;
switch (G__18682) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18680.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto__.call(null,m,ch));
} else {
var m__5250__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto__.call(null,m,ch));
} else {
var m__5250__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5250__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5250__auto__.call(null,m));
} else {
var m__5250__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5250__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5250__auto__.call(null,m,state_map));
} else {
var m__5250__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5250__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5249__auto__ = (((m == null))?null:m);
var m__5250__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5250__auto__.call(null,m,mode));
} else {
var m__5250__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5250__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5659__auto__ = [];
var len__5652__auto___18697 = arguments.length;
var i__5653__auto___18698 = (0);
while(true){
if((i__5653__auto___18698 < len__5652__auto___18697)){
args__5659__auto__.push((arguments[i__5653__auto___18698]));

var G__18699 = (i__5653__auto___18698 + (1));
i__5653__auto___18698 = G__18699;
continue;
} else {
}
break;
}

var argseq__5660__auto__ = ((((3) < args__5659__auto__.length))?(new cljs.core.IndexedSeq(args__5659__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5660__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18691){
var map__18692 = p__18691;
var map__18692__$1 = ((((!((map__18692 == null)))?((((map__18692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18692):map__18692);
var opts = map__18692__$1;
var statearr_18694_18700 = state;
(statearr_18694_18700[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__18692,map__18692__$1,opts){
return (function (val){
var statearr_18695_18701 = state;
(statearr_18695_18701[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18692,map__18692__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18696_18702 = state;
(statearr_18696_18702[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18687){
var G__18688 = cljs.core.first(seq18687);
var seq18687__$1 = cljs.core.next(seq18687);
var G__18689 = cljs.core.first(seq18687__$1);
var seq18687__$2 = cljs.core.next(seq18687__$1);
var G__18690 = cljs.core.first(seq18687__$2);
var seq18687__$3 = cljs.core.next(seq18687__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18688,G__18689,G__18690,seq18687__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18869 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18869) : cljs.core.atom.call(null,G__18869));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18870 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18871){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18871 = meta18871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18872,meta18871__$1){
var self__ = this;
var _18872__$1 = this;
return (new cljs.core.async.t_cljs$core$async18870(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18871__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18872){
var self__ = this;
var _18872__$1 = this;
return self__.meta18871;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18873_19035 = self__.cs;
var G__18874_19036 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18873_19035,G__18874_19036) : cljs.core.reset_BANG_.call(null,G__18873_19035,G__18874_19036));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18871], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18870";

cljs.core.async.t_cljs$core$async18870.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async18870");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18870 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18870(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18871){
return (new cljs.core.async.t_cljs$core$async18870(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18871));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18870(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8710__auto___19037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18972){
var state_val_18973 = (state_18972[(1)]);
if((state_val_18973 === (7))){
var inst_18890 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_18974_19038 = state_18972__$1;
(statearr_18974_19038[(2)] = inst_18890);

(statearr_18974_19038[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (20))){
var inst_18902 = (state_18972[(7)]);
var state_18972__$1 = state_18972;
var statearr_18975_19039 = state_18972__$1;
(statearr_18975_19039[(2)] = inst_18902);

(statearr_18975_19039[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (27))){
var state_18972__$1 = state_18972;
var statearr_18976_19040 = state_18972__$1;
(statearr_18976_19040[(2)] = null);

(statearr_18976_19040[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (1))){
var inst_18878 = (state_18972[(8)]);
var inst_18878__$1 = calc_state();
var inst_18880 = (inst_18878__$1 == null);
var inst_18881 = cljs.core.not(inst_18880);
var state_18972__$1 = (function (){var statearr_18977 = state_18972;
(statearr_18977[(8)] = inst_18878__$1);

return statearr_18977;
})();
if(inst_18881){
var statearr_18978_19041 = state_18972__$1;
(statearr_18978_19041[(1)] = (2));

} else {
var statearr_18979_19042 = state_18972__$1;
(statearr_18979_19042[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (24))){
var inst_18946 = (state_18972[(9)]);
var inst_18932 = (state_18972[(10)]);
var inst_18925 = (state_18972[(11)]);
var inst_18946__$1 = (inst_18925.cljs$core$IFn$_invoke$arity$1 ? inst_18925.cljs$core$IFn$_invoke$arity$1(inst_18932) : inst_18925.call(null,inst_18932));
var state_18972__$1 = (function (){var statearr_18980 = state_18972;
(statearr_18980[(9)] = inst_18946__$1);

return statearr_18980;
})();
if(cljs.core.truth_(inst_18946__$1)){
var statearr_18981_19043 = state_18972__$1;
(statearr_18981_19043[(1)] = (29));

} else {
var statearr_18982_19044 = state_18972__$1;
(statearr_18982_19044[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (4))){
var inst_18893 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18893)){
var statearr_18983_19045 = state_18972__$1;
(statearr_18983_19045[(1)] = (8));

} else {
var statearr_18984_19046 = state_18972__$1;
(statearr_18984_19046[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (15))){
var inst_18919 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18919)){
var statearr_18985_19047 = state_18972__$1;
(statearr_18985_19047[(1)] = (19));

} else {
var statearr_18986_19048 = state_18972__$1;
(statearr_18986_19048[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (21))){
var inst_18924 = (state_18972[(12)]);
var inst_18924__$1 = (state_18972[(2)]);
var inst_18925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18924__$1,cljs.core.cst$kw$solos);
var inst_18926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18924__$1,cljs.core.cst$kw$mutes);
var inst_18927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18924__$1,cljs.core.cst$kw$reads);
var state_18972__$1 = (function (){var statearr_18987 = state_18972;
(statearr_18987[(13)] = inst_18926);

(statearr_18987[(12)] = inst_18924__$1);

(statearr_18987[(11)] = inst_18925);

return statearr_18987;
})();
return cljs.core.async.ioc_alts_BANG_(state_18972__$1,(22),inst_18927);
} else {
if((state_val_18973 === (31))){
var inst_18954 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18954)){
var statearr_18988_19049 = state_18972__$1;
(statearr_18988_19049[(1)] = (32));

} else {
var statearr_18989_19050 = state_18972__$1;
(statearr_18989_19050[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (32))){
var inst_18931 = (state_18972[(14)]);
var state_18972__$1 = state_18972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18972__$1,(35),out,inst_18931);
} else {
if((state_val_18973 === (33))){
var inst_18924 = (state_18972[(12)]);
var inst_18902 = inst_18924;
var state_18972__$1 = (function (){var statearr_18990 = state_18972;
(statearr_18990[(7)] = inst_18902);

return statearr_18990;
})();
var statearr_18991_19051 = state_18972__$1;
(statearr_18991_19051[(2)] = null);

(statearr_18991_19051[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (13))){
var inst_18902 = (state_18972[(7)]);
var inst_18909 = inst_18902.cljs$lang$protocol_mask$partition0$;
var inst_18910 = (inst_18909 & (64));
var inst_18911 = inst_18902.cljs$core$ISeq$;
var inst_18912 = (inst_18910) || (inst_18911);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18912)){
var statearr_18992_19052 = state_18972__$1;
(statearr_18992_19052[(1)] = (16));

} else {
var statearr_18993_19053 = state_18972__$1;
(statearr_18993_19053[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (22))){
var inst_18932 = (state_18972[(10)]);
var inst_18931 = (state_18972[(14)]);
var inst_18930 = (state_18972[(2)]);
var inst_18931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18930,(0),null);
var inst_18932__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18930,(1),null);
var inst_18933 = (inst_18931__$1 == null);
var inst_18934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18932__$1,change);
var inst_18935 = (inst_18933) || (inst_18934);
var state_18972__$1 = (function (){var statearr_18994 = state_18972;
(statearr_18994[(10)] = inst_18932__$1);

(statearr_18994[(14)] = inst_18931__$1);

return statearr_18994;
})();
if(cljs.core.truth_(inst_18935)){
var statearr_18995_19054 = state_18972__$1;
(statearr_18995_19054[(1)] = (23));

} else {
var statearr_18996_19055 = state_18972__$1;
(statearr_18996_19055[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (36))){
var inst_18924 = (state_18972[(12)]);
var inst_18902 = inst_18924;
var state_18972__$1 = (function (){var statearr_18997 = state_18972;
(statearr_18997[(7)] = inst_18902);

return statearr_18997;
})();
var statearr_18998_19056 = state_18972__$1;
(statearr_18998_19056[(2)] = null);

(statearr_18998_19056[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (29))){
var inst_18946 = (state_18972[(9)]);
var state_18972__$1 = state_18972;
var statearr_18999_19057 = state_18972__$1;
(statearr_18999_19057[(2)] = inst_18946);

(statearr_18999_19057[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (6))){
var state_18972__$1 = state_18972;
var statearr_19000_19058 = state_18972__$1;
(statearr_19000_19058[(2)] = false);

(statearr_19000_19058[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (28))){
var inst_18942 = (state_18972[(2)]);
var inst_18943 = calc_state();
var inst_18902 = inst_18943;
var state_18972__$1 = (function (){var statearr_19001 = state_18972;
(statearr_19001[(7)] = inst_18902);

(statearr_19001[(15)] = inst_18942);

return statearr_19001;
})();
var statearr_19002_19059 = state_18972__$1;
(statearr_19002_19059[(2)] = null);

(statearr_19002_19059[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (25))){
var inst_18968 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_19003_19060 = state_18972__$1;
(statearr_19003_19060[(2)] = inst_18968);

(statearr_19003_19060[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (34))){
var inst_18966 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_19004_19061 = state_18972__$1;
(statearr_19004_19061[(2)] = inst_18966);

(statearr_19004_19061[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (17))){
var state_18972__$1 = state_18972;
var statearr_19005_19062 = state_18972__$1;
(statearr_19005_19062[(2)] = false);

(statearr_19005_19062[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (3))){
var state_18972__$1 = state_18972;
var statearr_19006_19063 = state_18972__$1;
(statearr_19006_19063[(2)] = false);

(statearr_19006_19063[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (12))){
var inst_18970 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18972__$1,inst_18970);
} else {
if((state_val_18973 === (2))){
var inst_18878 = (state_18972[(8)]);
var inst_18883 = inst_18878.cljs$lang$protocol_mask$partition0$;
var inst_18884 = (inst_18883 & (64));
var inst_18885 = inst_18878.cljs$core$ISeq$;
var inst_18886 = (inst_18884) || (inst_18885);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18886)){
var statearr_19007_19064 = state_18972__$1;
(statearr_19007_19064[(1)] = (5));

} else {
var statearr_19008_19065 = state_18972__$1;
(statearr_19008_19065[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (23))){
var inst_18931 = (state_18972[(14)]);
var inst_18937 = (inst_18931 == null);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18937)){
var statearr_19009_19066 = state_18972__$1;
(statearr_19009_19066[(1)] = (26));

} else {
var statearr_19010_19067 = state_18972__$1;
(statearr_19010_19067[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (35))){
var inst_18957 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18957)){
var statearr_19011_19068 = state_18972__$1;
(statearr_19011_19068[(1)] = (36));

} else {
var statearr_19012_19069 = state_18972__$1;
(statearr_19012_19069[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (19))){
var inst_18902 = (state_18972[(7)]);
var inst_18921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18902);
var state_18972__$1 = state_18972;
var statearr_19013_19070 = state_18972__$1;
(statearr_19013_19070[(2)] = inst_18921);

(statearr_19013_19070[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (11))){
var inst_18902 = (state_18972[(7)]);
var inst_18906 = (inst_18902 == null);
var inst_18907 = cljs.core.not(inst_18906);
var state_18972__$1 = state_18972;
if(inst_18907){
var statearr_19014_19071 = state_18972__$1;
(statearr_19014_19071[(1)] = (13));

} else {
var statearr_19015_19072 = state_18972__$1;
(statearr_19015_19072[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (9))){
var inst_18878 = (state_18972[(8)]);
var state_18972__$1 = state_18972;
var statearr_19016_19073 = state_18972__$1;
(statearr_19016_19073[(2)] = inst_18878);

(statearr_19016_19073[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (5))){
var state_18972__$1 = state_18972;
var statearr_19017_19074 = state_18972__$1;
(statearr_19017_19074[(2)] = true);

(statearr_19017_19074[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (14))){
var state_18972__$1 = state_18972;
var statearr_19018_19075 = state_18972__$1;
(statearr_19018_19075[(2)] = false);

(statearr_19018_19075[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (26))){
var inst_18932 = (state_18972[(10)]);
var inst_18939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18932);
var state_18972__$1 = state_18972;
var statearr_19019_19076 = state_18972__$1;
(statearr_19019_19076[(2)] = inst_18939);

(statearr_19019_19076[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (16))){
var state_18972__$1 = state_18972;
var statearr_19020_19077 = state_18972__$1;
(statearr_19020_19077[(2)] = true);

(statearr_19020_19077[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (38))){
var inst_18962 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_19021_19078 = state_18972__$1;
(statearr_19021_19078[(2)] = inst_18962);

(statearr_19021_19078[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (30))){
var inst_18926 = (state_18972[(13)]);
var inst_18932 = (state_18972[(10)]);
var inst_18925 = (state_18972[(11)]);
var inst_18949 = cljs.core.empty_QMARK_(inst_18925);
var inst_18950 = (inst_18926.cljs$core$IFn$_invoke$arity$1 ? inst_18926.cljs$core$IFn$_invoke$arity$1(inst_18932) : inst_18926.call(null,inst_18932));
var inst_18951 = cljs.core.not(inst_18950);
var inst_18952 = (inst_18949) && (inst_18951);
var state_18972__$1 = state_18972;
var statearr_19022_19079 = state_18972__$1;
(statearr_19022_19079[(2)] = inst_18952);

(statearr_19022_19079[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (10))){
var inst_18878 = (state_18972[(8)]);
var inst_18898 = (state_18972[(2)]);
var inst_18899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18898,cljs.core.cst$kw$solos);
var inst_18900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18898,cljs.core.cst$kw$mutes);
var inst_18901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18898,cljs.core.cst$kw$reads);
var inst_18902 = inst_18878;
var state_18972__$1 = (function (){var statearr_19023 = state_18972;
(statearr_19023[(16)] = inst_18900);

(statearr_19023[(7)] = inst_18902);

(statearr_19023[(17)] = inst_18899);

(statearr_19023[(18)] = inst_18901);

return statearr_19023;
})();
var statearr_19024_19080 = state_18972__$1;
(statearr_19024_19080[(2)] = null);

(statearr_19024_19080[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (18))){
var inst_18916 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_19025_19081 = state_18972__$1;
(statearr_19025_19081[(2)] = inst_18916);

(statearr_19025_19081[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (37))){
var state_18972__$1 = state_18972;
var statearr_19026_19082 = state_18972__$1;
(statearr_19026_19082[(2)] = null);

(statearr_19026_19082[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (8))){
var inst_18878 = (state_18972[(8)]);
var inst_18895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18878);
var state_18972__$1 = state_18972;
var statearr_19027_19083 = state_18972__$1;
(statearr_19027_19083[(2)] = inst_18895);

(statearr_19027_19083[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8643__auto__,c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8644__auto__ = null;
var cljs$core$async$mix_$_state_machine__8644__auto____0 = (function (){
var statearr_19031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19031[(0)] = cljs$core$async$mix_$_state_machine__8644__auto__);

(statearr_19031[(1)] = (1));

return statearr_19031;
});
var cljs$core$async$mix_$_state_machine__8644__auto____1 = (function (state_18972){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_18972);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19032){if((e19032 instanceof Object)){
var ex__8647__auto__ = e19032;
var statearr_19033_19084 = state_18972;
(statearr_19033_19084[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18972);

return cljs.core.cst$kw$recur;
} else {
throw e19032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19085 = state_18972;
state_18972 = G__19085;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8644__auto__ = function(state_18972){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8644__auto____1.call(this,state_18972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8644__auto____0;
cljs$core$async$mix_$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8644__auto____1;
return cljs$core$async$mix_$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8712__auto__ = (function (){var statearr_19034 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19037);

return statearr_19034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5249__auto__ = (((p == null))?null:p);
var m__5250__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5250__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5250__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5250__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5249__auto__ = (((p == null))?null:p);
var m__5250__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5250__auto__.call(null,p,v,ch));
} else {
var m__5250__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5250__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19086 = [];
var len__5652__auto___19089 = arguments.length;
var i__5653__auto___19090 = (0);
while(true){
if((i__5653__auto___19090 < len__5652__auto___19089)){
args19086.push((arguments[i__5653__auto___19090]));

var G__19091 = (i__5653__auto___19090 + (1));
i__5653__auto___19090 = G__19091;
continue;
} else {
}
break;
}

var G__19088 = args19086.length;
switch (G__19088) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19086.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5249__auto__ = (((p == null))?null:p);
var m__5250__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5250__auto__.call(null,p));
} else {
var m__5250__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5250__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5249__auto__ = (((p == null))?null:p);
var m__5250__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5249__auto__)]);
if(!((m__5250__auto__ == null))){
return (m__5250__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5250__auto__.call(null,p,v));
} else {
var m__5250__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5250__auto____$1 == null))){
return (m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5250__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5250__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args19094 = [];
var len__5652__auto___19222 = arguments.length;
var i__5653__auto___19223 = (0);
while(true){
if((i__5653__auto___19223 < len__5652__auto___19222)){
args19094.push((arguments[i__5653__auto___19223]));

var G__19224 = (i__5653__auto___19223 + (1));
i__5653__auto___19223 = G__19224;
continue;
} else {
}
break;
}

var G__19096 = args19094.length;
switch (G__19096) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19094.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19097 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19097) : cljs.core.atom.call(null,G__19097));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4594__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4594__auto__,mults){
return (function (p1__19093_SHARP_){
if(cljs.core.truth_((p1__19093_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19093_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19093_SHARP_.call(null,topic)))){
return p1__19093_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19093_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4594__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19098 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19099){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19099 = meta19099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19100,meta19099__$1){
var self__ = this;
var _19100__$1 = this;
return (new cljs.core.async.t_cljs$core$async19098(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19099__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19100){
var self__ = this;
var _19100__$1 = this;
return self__.meta19099;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19101 = self__.mults;
var G__19102 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19101,G__19102) : cljs.core.reset_BANG_.call(null,G__19101,G__19102));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19099], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19098";

cljs.core.async.t_cljs$core$async19098.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async19098");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19098 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19098(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19099){
return (new cljs.core.async.t_cljs$core$async19098(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19099));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19098(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8710__auto___19226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19226,mults,ensure_mult,p){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19226,mults,ensure_mult,p){
return (function (state_19174){
var state_val_19175 = (state_19174[(1)]);
if((state_val_19175 === (7))){
var inst_19170 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19176_19227 = state_19174__$1;
(statearr_19176_19227[(2)] = inst_19170);

(statearr_19176_19227[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (20))){
var state_19174__$1 = state_19174;
var statearr_19177_19228 = state_19174__$1;
(statearr_19177_19228[(2)] = null);

(statearr_19177_19228[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (1))){
var state_19174__$1 = state_19174;
var statearr_19178_19229 = state_19174__$1;
(statearr_19178_19229[(2)] = null);

(statearr_19178_19229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (24))){
var inst_19153 = (state_19174[(7)]);
var inst_19162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19153);
var state_19174__$1 = state_19174;
var statearr_19179_19230 = state_19174__$1;
(statearr_19179_19230[(2)] = inst_19162);

(statearr_19179_19230[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (4))){
var inst_19105 = (state_19174[(8)]);
var inst_19105__$1 = (state_19174[(2)]);
var inst_19106 = (inst_19105__$1 == null);
var state_19174__$1 = (function (){var statearr_19180 = state_19174;
(statearr_19180[(8)] = inst_19105__$1);

return statearr_19180;
})();
if(cljs.core.truth_(inst_19106)){
var statearr_19181_19231 = state_19174__$1;
(statearr_19181_19231[(1)] = (5));

} else {
var statearr_19182_19232 = state_19174__$1;
(statearr_19182_19232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (15))){
var inst_19147 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19183_19233 = state_19174__$1;
(statearr_19183_19233[(2)] = inst_19147);

(statearr_19183_19233[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (21))){
var inst_19167 = (state_19174[(2)]);
var state_19174__$1 = (function (){var statearr_19184 = state_19174;
(statearr_19184[(9)] = inst_19167);

return statearr_19184;
})();
var statearr_19185_19234 = state_19174__$1;
(statearr_19185_19234[(2)] = null);

(statearr_19185_19234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (13))){
var inst_19129 = (state_19174[(10)]);
var inst_19131 = cljs.core.chunked_seq_QMARK_(inst_19129);
var state_19174__$1 = state_19174;
if(inst_19131){
var statearr_19186_19235 = state_19174__$1;
(statearr_19186_19235[(1)] = (16));

} else {
var statearr_19187_19236 = state_19174__$1;
(statearr_19187_19236[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (22))){
var inst_19159 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
if(cljs.core.truth_(inst_19159)){
var statearr_19188_19237 = state_19174__$1;
(statearr_19188_19237[(1)] = (23));

} else {
var statearr_19189_19238 = state_19174__$1;
(statearr_19189_19238[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (6))){
var inst_19153 = (state_19174[(7)]);
var inst_19105 = (state_19174[(8)]);
var inst_19155 = (state_19174[(11)]);
var inst_19153__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19105) : topic_fn.call(null,inst_19105));
var inst_19154 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19155__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19154,inst_19153__$1);
var state_19174__$1 = (function (){var statearr_19190 = state_19174;
(statearr_19190[(7)] = inst_19153__$1);

(statearr_19190[(11)] = inst_19155__$1);

return statearr_19190;
})();
if(cljs.core.truth_(inst_19155__$1)){
var statearr_19191_19239 = state_19174__$1;
(statearr_19191_19239[(1)] = (19));

} else {
var statearr_19192_19240 = state_19174__$1;
(statearr_19192_19240[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (25))){
var inst_19164 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19193_19241 = state_19174__$1;
(statearr_19193_19241[(2)] = inst_19164);

(statearr_19193_19241[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (17))){
var inst_19129 = (state_19174[(10)]);
var inst_19138 = cljs.core.first(inst_19129);
var inst_19139 = cljs.core.async.muxch_STAR_(inst_19138);
var inst_19140 = cljs.core.async.close_BANG_(inst_19139);
var inst_19141 = cljs.core.next(inst_19129);
var inst_19115 = inst_19141;
var inst_19116 = null;
var inst_19117 = (0);
var inst_19118 = (0);
var state_19174__$1 = (function (){var statearr_19194 = state_19174;
(statearr_19194[(12)] = inst_19118);

(statearr_19194[(13)] = inst_19116);

(statearr_19194[(14)] = inst_19140);

(statearr_19194[(15)] = inst_19115);

(statearr_19194[(16)] = inst_19117);

return statearr_19194;
})();
var statearr_19195_19242 = state_19174__$1;
(statearr_19195_19242[(2)] = null);

(statearr_19195_19242[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (3))){
var inst_19172 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19174__$1,inst_19172);
} else {
if((state_val_19175 === (12))){
var inst_19149 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19196_19243 = state_19174__$1;
(statearr_19196_19243[(2)] = inst_19149);

(statearr_19196_19243[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (2))){
var state_19174__$1 = state_19174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19174__$1,(4),ch);
} else {
if((state_val_19175 === (23))){
var state_19174__$1 = state_19174;
var statearr_19197_19244 = state_19174__$1;
(statearr_19197_19244[(2)] = null);

(statearr_19197_19244[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (19))){
var inst_19105 = (state_19174[(8)]);
var inst_19155 = (state_19174[(11)]);
var inst_19157 = cljs.core.async.muxch_STAR_(inst_19155);
var state_19174__$1 = state_19174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19174__$1,(22),inst_19157,inst_19105);
} else {
if((state_val_19175 === (11))){
var inst_19129 = (state_19174[(10)]);
var inst_19115 = (state_19174[(15)]);
var inst_19129__$1 = cljs.core.seq(inst_19115);
var state_19174__$1 = (function (){var statearr_19198 = state_19174;
(statearr_19198[(10)] = inst_19129__$1);

return statearr_19198;
})();
if(inst_19129__$1){
var statearr_19199_19245 = state_19174__$1;
(statearr_19199_19245[(1)] = (13));

} else {
var statearr_19200_19246 = state_19174__$1;
(statearr_19200_19246[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (9))){
var inst_19151 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19201_19247 = state_19174__$1;
(statearr_19201_19247[(2)] = inst_19151);

(statearr_19201_19247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (5))){
var inst_19112 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_19113 = cljs.core.vals(inst_19112);
var inst_19114 = cljs.core.seq(inst_19113);
var inst_19115 = inst_19114;
var inst_19116 = null;
var inst_19117 = (0);
var inst_19118 = (0);
var state_19174__$1 = (function (){var statearr_19202 = state_19174;
(statearr_19202[(12)] = inst_19118);

(statearr_19202[(13)] = inst_19116);

(statearr_19202[(15)] = inst_19115);

(statearr_19202[(16)] = inst_19117);

return statearr_19202;
})();
var statearr_19203_19248 = state_19174__$1;
(statearr_19203_19248[(2)] = null);

(statearr_19203_19248[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (14))){
var state_19174__$1 = state_19174;
var statearr_19207_19249 = state_19174__$1;
(statearr_19207_19249[(2)] = null);

(statearr_19207_19249[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (16))){
var inst_19129 = (state_19174[(10)]);
var inst_19133 = cljs.core.chunk_first(inst_19129);
var inst_19134 = cljs.core.chunk_rest(inst_19129);
var inst_19135 = cljs.core.count(inst_19133);
var inst_19115 = inst_19134;
var inst_19116 = inst_19133;
var inst_19117 = inst_19135;
var inst_19118 = (0);
var state_19174__$1 = (function (){var statearr_19208 = state_19174;
(statearr_19208[(12)] = inst_19118);

(statearr_19208[(13)] = inst_19116);

(statearr_19208[(15)] = inst_19115);

(statearr_19208[(16)] = inst_19117);

return statearr_19208;
})();
var statearr_19209_19250 = state_19174__$1;
(statearr_19209_19250[(2)] = null);

(statearr_19209_19250[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (10))){
var inst_19118 = (state_19174[(12)]);
var inst_19116 = (state_19174[(13)]);
var inst_19115 = (state_19174[(15)]);
var inst_19117 = (state_19174[(16)]);
var inst_19123 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19116,inst_19118);
var inst_19124 = cljs.core.async.muxch_STAR_(inst_19123);
var inst_19125 = cljs.core.async.close_BANG_(inst_19124);
var inst_19126 = (inst_19118 + (1));
var tmp19204 = inst_19116;
var tmp19205 = inst_19115;
var tmp19206 = inst_19117;
var inst_19115__$1 = tmp19205;
var inst_19116__$1 = tmp19204;
var inst_19117__$1 = tmp19206;
var inst_19118__$1 = inst_19126;
var state_19174__$1 = (function (){var statearr_19210 = state_19174;
(statearr_19210[(12)] = inst_19118__$1);

(statearr_19210[(13)] = inst_19116__$1);

(statearr_19210[(15)] = inst_19115__$1);

(statearr_19210[(16)] = inst_19117__$1);

(statearr_19210[(17)] = inst_19125);

return statearr_19210;
})();
var statearr_19211_19251 = state_19174__$1;
(statearr_19211_19251[(2)] = null);

(statearr_19211_19251[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (18))){
var inst_19144 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19212_19252 = state_19174__$1;
(statearr_19212_19252[(2)] = inst_19144);

(statearr_19212_19252[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19175 === (8))){
var inst_19118 = (state_19174[(12)]);
var inst_19117 = (state_19174[(16)]);
var inst_19120 = (inst_19118 < inst_19117);
var inst_19121 = inst_19120;
var state_19174__$1 = state_19174;
if(cljs.core.truth_(inst_19121)){
var statearr_19213_19253 = state_19174__$1;
(statearr_19213_19253[(1)] = (10));

} else {
var statearr_19214_19254 = state_19174__$1;
(statearr_19214_19254[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19226,mults,ensure_mult,p))
;
return ((function (switch__8643__auto__,c__8710__auto___19226,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19218[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19218[(1)] = (1));

return statearr_19218;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19174){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19174);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19219){if((e19219 instanceof Object)){
var ex__8647__auto__ = e19219;
var statearr_19220_19255 = state_19174;
(statearr_19220_19255[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19174);

return cljs.core.cst$kw$recur;
} else {
throw e19219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19256 = state_19174;
state_19174 = G__19256;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19226,mults,ensure_mult,p))
})();
var state__8712__auto__ = (function (){var statearr_19221 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19226);

return statearr_19221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19226,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args19257 = [];
var len__5652__auto___19260 = arguments.length;
var i__5653__auto___19261 = (0);
while(true){
if((i__5653__auto___19261 < len__5652__auto___19260)){
args19257.push((arguments[i__5653__auto___19261]));

var G__19262 = (i__5653__auto___19261 + (1));
i__5653__auto___19261 = G__19262;
continue;
} else {
}
break;
}

var G__19259 = args19257.length;
switch (G__19259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19257.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args19264 = [];
var len__5652__auto___19267 = arguments.length;
var i__5653__auto___19268 = (0);
while(true){
if((i__5653__auto___19268 < len__5652__auto___19267)){
args19264.push((arguments[i__5653__auto___19268]));

var G__19269 = (i__5653__auto___19268 + (1));
i__5653__auto___19268 = G__19269;
continue;
} else {
}
break;
}

var G__19266 = args19264.length;
switch (G__19266) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19264.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args19271 = [];
var len__5652__auto___19342 = arguments.length;
var i__5653__auto___19343 = (0);
while(true){
if((i__5653__auto___19343 < len__5652__auto___19342)){
args19271.push((arguments[i__5653__auto___19343]));

var G__19344 = (i__5653__auto___19343 + (1));
i__5653__auto___19343 = G__19344;
continue;
} else {
}
break;
}

var G__19273 = args19271.length;
switch (G__19273) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19271.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__8710__auto___19346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19312){
var state_val_19313 = (state_19312[(1)]);
if((state_val_19313 === (7))){
var state_19312__$1 = state_19312;
var statearr_19314_19347 = state_19312__$1;
(statearr_19314_19347[(2)] = null);

(statearr_19314_19347[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (1))){
var state_19312__$1 = state_19312;
var statearr_19315_19348 = state_19312__$1;
(statearr_19315_19348[(2)] = null);

(statearr_19315_19348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (4))){
var inst_19276 = (state_19312[(7)]);
var inst_19278 = (inst_19276 < cnt);
var state_19312__$1 = state_19312;
if(cljs.core.truth_(inst_19278)){
var statearr_19316_19349 = state_19312__$1;
(statearr_19316_19349[(1)] = (6));

} else {
var statearr_19317_19350 = state_19312__$1;
(statearr_19317_19350[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (15))){
var inst_19308 = (state_19312[(2)]);
var state_19312__$1 = state_19312;
var statearr_19318_19351 = state_19312__$1;
(statearr_19318_19351[(2)] = inst_19308);

(statearr_19318_19351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (13))){
var inst_19301 = cljs.core.async.close_BANG_(out);
var state_19312__$1 = state_19312;
var statearr_19319_19352 = state_19312__$1;
(statearr_19319_19352[(2)] = inst_19301);

(statearr_19319_19352[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (6))){
var state_19312__$1 = state_19312;
var statearr_19320_19353 = state_19312__$1;
(statearr_19320_19353[(2)] = null);

(statearr_19320_19353[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (3))){
var inst_19310 = (state_19312[(2)]);
var state_19312__$1 = state_19312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19312__$1,inst_19310);
} else {
if((state_val_19313 === (12))){
var inst_19298 = (state_19312[(8)]);
var inst_19298__$1 = (state_19312[(2)]);
var inst_19299 = cljs.core.some(cljs.core.nil_QMARK_,inst_19298__$1);
var state_19312__$1 = (function (){var statearr_19321 = state_19312;
(statearr_19321[(8)] = inst_19298__$1);

return statearr_19321;
})();
if(cljs.core.truth_(inst_19299)){
var statearr_19322_19354 = state_19312__$1;
(statearr_19322_19354[(1)] = (13));

} else {
var statearr_19323_19355 = state_19312__$1;
(statearr_19323_19355[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (2))){
var inst_19275 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_19276 = (0);
var state_19312__$1 = (function (){var statearr_19324 = state_19312;
(statearr_19324[(7)] = inst_19276);

(statearr_19324[(9)] = inst_19275);

return statearr_19324;
})();
var statearr_19325_19356 = state_19312__$1;
(statearr_19325_19356[(2)] = null);

(statearr_19325_19356[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (11))){
var inst_19276 = (state_19312[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19312,(10),Object,null,(9));
var inst_19285 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19276) : chs__$1.call(null,inst_19276));
var inst_19286 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19276) : done.call(null,inst_19276));
var inst_19287 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19285,inst_19286);
var state_19312__$1 = state_19312;
var statearr_19326_19357 = state_19312__$1;
(statearr_19326_19357[(2)] = inst_19287);


cljs.core.async.impl.ioc_helpers.process_exception(state_19312__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (9))){
var inst_19276 = (state_19312[(7)]);
var inst_19289 = (state_19312[(2)]);
var inst_19290 = (inst_19276 + (1));
var inst_19276__$1 = inst_19290;
var state_19312__$1 = (function (){var statearr_19327 = state_19312;
(statearr_19327[(7)] = inst_19276__$1);

(statearr_19327[(10)] = inst_19289);

return statearr_19327;
})();
var statearr_19328_19358 = state_19312__$1;
(statearr_19328_19358[(2)] = null);

(statearr_19328_19358[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (5))){
var inst_19296 = (state_19312[(2)]);
var state_19312__$1 = (function (){var statearr_19329 = state_19312;
(statearr_19329[(11)] = inst_19296);

return statearr_19329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19312__$1,(12),dchan);
} else {
if((state_val_19313 === (14))){
var inst_19298 = (state_19312[(8)]);
var inst_19303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19298);
var state_19312__$1 = state_19312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19312__$1,(16),out,inst_19303);
} else {
if((state_val_19313 === (16))){
var inst_19305 = (state_19312[(2)]);
var state_19312__$1 = (function (){var statearr_19330 = state_19312;
(statearr_19330[(12)] = inst_19305);

return statearr_19330;
})();
var statearr_19331_19359 = state_19312__$1;
(statearr_19331_19359[(2)] = null);

(statearr_19331_19359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (10))){
var inst_19280 = (state_19312[(2)]);
var inst_19281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19312__$1 = (function (){var statearr_19332 = state_19312;
(statearr_19332[(13)] = inst_19280);

return statearr_19332;
})();
var statearr_19333_19360 = state_19312__$1;
(statearr_19333_19360[(2)] = inst_19281);


cljs.core.async.impl.ioc_helpers.process_exception(state_19312__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (8))){
var inst_19294 = (state_19312[(2)]);
var state_19312__$1 = state_19312;
var statearr_19334_19361 = state_19312__$1;
(statearr_19334_19361[(2)] = inst_19294);

(statearr_19334_19361[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8643__auto__,c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19338[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19338[(1)] = (1));

return statearr_19338;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19312){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19312);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19339){if((e19339 instanceof Object)){
var ex__8647__auto__ = e19339;
var statearr_19340_19362 = state_19312;
(statearr_19340_19362[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19312);

return cljs.core.cst$kw$recur;
} else {
throw e19339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19363 = state_19312;
state_19312 = G__19363;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8712__auto__ = (function (){var statearr_19341 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19346);

return statearr_19341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19346,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args19365 = [];
var len__5652__auto___19421 = arguments.length;
var i__5653__auto___19422 = (0);
while(true){
if((i__5653__auto___19422 < len__5652__auto___19421)){
args19365.push((arguments[i__5653__auto___19422]));

var G__19423 = (i__5653__auto___19422 + (1));
i__5653__auto___19422 = G__19423;
continue;
} else {
}
break;
}

var G__19367 = args19365.length;
switch (G__19367) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19365.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___19425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19425,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19425,out){
return (function (state_19397){
var state_val_19398 = (state_19397[(1)]);
if((state_val_19398 === (7))){
var inst_19376 = (state_19397[(7)]);
var inst_19377 = (state_19397[(8)]);
var inst_19376__$1 = (state_19397[(2)]);
var inst_19377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19376__$1,(0),null);
var inst_19378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19376__$1,(1),null);
var inst_19379 = (inst_19377__$1 == null);
var state_19397__$1 = (function (){var statearr_19399 = state_19397;
(statearr_19399[(7)] = inst_19376__$1);

(statearr_19399[(8)] = inst_19377__$1);

(statearr_19399[(9)] = inst_19378);

return statearr_19399;
})();
if(cljs.core.truth_(inst_19379)){
var statearr_19400_19426 = state_19397__$1;
(statearr_19400_19426[(1)] = (8));

} else {
var statearr_19401_19427 = state_19397__$1;
(statearr_19401_19427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (1))){
var inst_19368 = cljs.core.vec(chs);
var inst_19369 = inst_19368;
var state_19397__$1 = (function (){var statearr_19402 = state_19397;
(statearr_19402[(10)] = inst_19369);

return statearr_19402;
})();
var statearr_19403_19428 = state_19397__$1;
(statearr_19403_19428[(2)] = null);

(statearr_19403_19428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (4))){
var inst_19369 = (state_19397[(10)]);
var state_19397__$1 = state_19397;
return cljs.core.async.ioc_alts_BANG_(state_19397__$1,(7),inst_19369);
} else {
if((state_val_19398 === (6))){
var inst_19393 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19404_19429 = state_19397__$1;
(statearr_19404_19429[(2)] = inst_19393);

(statearr_19404_19429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (3))){
var inst_19395 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19397__$1,inst_19395);
} else {
if((state_val_19398 === (2))){
var inst_19369 = (state_19397[(10)]);
var inst_19371 = cljs.core.count(inst_19369);
var inst_19372 = (inst_19371 > (0));
var state_19397__$1 = state_19397;
if(cljs.core.truth_(inst_19372)){
var statearr_19406_19430 = state_19397__$1;
(statearr_19406_19430[(1)] = (4));

} else {
var statearr_19407_19431 = state_19397__$1;
(statearr_19407_19431[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (11))){
var inst_19369 = (state_19397[(10)]);
var inst_19386 = (state_19397[(2)]);
var tmp19405 = inst_19369;
var inst_19369__$1 = tmp19405;
var state_19397__$1 = (function (){var statearr_19408 = state_19397;
(statearr_19408[(11)] = inst_19386);

(statearr_19408[(10)] = inst_19369__$1);

return statearr_19408;
})();
var statearr_19409_19432 = state_19397__$1;
(statearr_19409_19432[(2)] = null);

(statearr_19409_19432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (9))){
var inst_19377 = (state_19397[(8)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19397__$1,(11),out,inst_19377);
} else {
if((state_val_19398 === (5))){
var inst_19391 = cljs.core.async.close_BANG_(out);
var state_19397__$1 = state_19397;
var statearr_19410_19433 = state_19397__$1;
(statearr_19410_19433[(2)] = inst_19391);

(statearr_19410_19433[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (10))){
var inst_19389 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19411_19434 = state_19397__$1;
(statearr_19411_19434[(2)] = inst_19389);

(statearr_19411_19434[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (8))){
var inst_19376 = (state_19397[(7)]);
var inst_19377 = (state_19397[(8)]);
var inst_19378 = (state_19397[(9)]);
var inst_19369 = (state_19397[(10)]);
var inst_19381 = (function (){var cs = inst_19369;
var vec__19374 = inst_19376;
var v = inst_19377;
var c = inst_19378;
return ((function (cs,vec__19374,v,c,inst_19376,inst_19377,inst_19378,inst_19369,state_val_19398,c__8710__auto___19425,out){
return (function (p1__19364_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19364_SHARP_);
});
;})(cs,vec__19374,v,c,inst_19376,inst_19377,inst_19378,inst_19369,state_val_19398,c__8710__auto___19425,out))
})();
var inst_19382 = cljs.core.filterv(inst_19381,inst_19369);
var inst_19369__$1 = inst_19382;
var state_19397__$1 = (function (){var statearr_19412 = state_19397;
(statearr_19412[(10)] = inst_19369__$1);

return statearr_19412;
})();
var statearr_19413_19435 = state_19397__$1;
(statearr_19413_19435[(2)] = null);

(statearr_19413_19435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19425,out))
;
return ((function (switch__8643__auto__,c__8710__auto___19425,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19417[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19417[(1)] = (1));

return statearr_19417;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19397){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19397);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19418){if((e19418 instanceof Object)){
var ex__8647__auto__ = e19418;
var statearr_19419_19436 = state_19397;
(statearr_19419_19436[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19397);

return cljs.core.cst$kw$recur;
} else {
throw e19418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19437 = state_19397;
state_19397 = G__19437;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19425,out))
})();
var state__8712__auto__ = (function (){var statearr_19420 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19425);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19425,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19438 = [];
var len__5652__auto___19487 = arguments.length;
var i__5653__auto___19488 = (0);
while(true){
if((i__5653__auto___19488 < len__5652__auto___19487)){
args19438.push((arguments[i__5653__auto___19488]));

var G__19489 = (i__5653__auto___19488 + (1));
i__5653__auto___19488 = G__19489;
continue;
} else {
}
break;
}

var G__19440 = args19438.length;
switch (G__19440) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19438.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___19491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19491,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19491,out){
return (function (state_19464){
var state_val_19465 = (state_19464[(1)]);
if((state_val_19465 === (7))){
var inst_19446 = (state_19464[(7)]);
var inst_19446__$1 = (state_19464[(2)]);
var inst_19447 = (inst_19446__$1 == null);
var inst_19448 = cljs.core.not(inst_19447);
var state_19464__$1 = (function (){var statearr_19466 = state_19464;
(statearr_19466[(7)] = inst_19446__$1);

return statearr_19466;
})();
if(inst_19448){
var statearr_19467_19492 = state_19464__$1;
(statearr_19467_19492[(1)] = (8));

} else {
var statearr_19468_19493 = state_19464__$1;
(statearr_19468_19493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (1))){
var inst_19441 = (0);
var state_19464__$1 = (function (){var statearr_19469 = state_19464;
(statearr_19469[(8)] = inst_19441);

return statearr_19469;
})();
var statearr_19470_19494 = state_19464__$1;
(statearr_19470_19494[(2)] = null);

(statearr_19470_19494[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (4))){
var state_19464__$1 = state_19464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19464__$1,(7),ch);
} else {
if((state_val_19465 === (6))){
var inst_19459 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19471_19495 = state_19464__$1;
(statearr_19471_19495[(2)] = inst_19459);

(statearr_19471_19495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (3))){
var inst_19461 = (state_19464[(2)]);
var inst_19462 = cljs.core.async.close_BANG_(out);
var state_19464__$1 = (function (){var statearr_19472 = state_19464;
(statearr_19472[(9)] = inst_19461);

return statearr_19472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19464__$1,inst_19462);
} else {
if((state_val_19465 === (2))){
var inst_19441 = (state_19464[(8)]);
var inst_19443 = (inst_19441 < n);
var state_19464__$1 = state_19464;
if(cljs.core.truth_(inst_19443)){
var statearr_19473_19496 = state_19464__$1;
(statearr_19473_19496[(1)] = (4));

} else {
var statearr_19474_19497 = state_19464__$1;
(statearr_19474_19497[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (11))){
var inst_19441 = (state_19464[(8)]);
var inst_19451 = (state_19464[(2)]);
var inst_19452 = (inst_19441 + (1));
var inst_19441__$1 = inst_19452;
var state_19464__$1 = (function (){var statearr_19475 = state_19464;
(statearr_19475[(8)] = inst_19441__$1);

(statearr_19475[(10)] = inst_19451);

return statearr_19475;
})();
var statearr_19476_19498 = state_19464__$1;
(statearr_19476_19498[(2)] = null);

(statearr_19476_19498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (9))){
var state_19464__$1 = state_19464;
var statearr_19477_19499 = state_19464__$1;
(statearr_19477_19499[(2)] = null);

(statearr_19477_19499[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (5))){
var state_19464__$1 = state_19464;
var statearr_19478_19500 = state_19464__$1;
(statearr_19478_19500[(2)] = null);

(statearr_19478_19500[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (10))){
var inst_19456 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19479_19501 = state_19464__$1;
(statearr_19479_19501[(2)] = inst_19456);

(statearr_19479_19501[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19465 === (8))){
var inst_19446 = (state_19464[(7)]);
var state_19464__$1 = state_19464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19464__$1,(11),out,inst_19446);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19491,out))
;
return ((function (switch__8643__auto__,c__8710__auto___19491,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19483[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19483[(1)] = (1));

return statearr_19483;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19464){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19464);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19484){if((e19484 instanceof Object)){
var ex__8647__auto__ = e19484;
var statearr_19485_19502 = state_19464;
(statearr_19485_19502[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19464);

return cljs.core.cst$kw$recur;
} else {
throw e19484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19503 = state_19464;
state_19464 = G__19503;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19491,out))
})();
var state__8712__auto__ = (function (){var statearr_19486 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19491);

return statearr_19486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19491,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19513 = (function (map_LT_,f,ch,meta19514){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19514 = meta19514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19515,meta19514__$1){
var self__ = this;
var _19515__$1 = this;
return (new cljs.core.async.t_cljs$core$async19513(self__.map_LT_,self__.f,self__.ch,meta19514__$1));
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19515){
var self__ = this;
var _19515__$1 = this;
return self__.meta19514;
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19516 = (function (map_LT_,f,ch,meta19514,_,fn1,meta19517){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19514 = meta19514;
this._ = _;
this.fn1 = fn1;
this.meta19517 = meta19517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19518,meta19517__$1){
var self__ = this;
var _19518__$1 = this;
return (new cljs.core.async.t_cljs$core$async19516(self__.map_LT_,self__.f,self__.ch,self__.meta19514,self__._,self__.fn1,meta19517__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19518){
var self__ = this;
var _19518__$1 = this;
return self__.meta19517;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19516.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19504_SHARP_){
var G__19519 = (((p1__19504_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19504_SHARP_) : self__.f.call(null,p1__19504_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19519) : f1.call(null,G__19519));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19516.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19514,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19513], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19517], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19516";

cljs.core.async.t_cljs$core$async19516.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async19516");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19516 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19516(map_LT___$1,f__$1,ch__$1,meta19514__$1,___$2,fn1__$1,meta19517){
return (new cljs.core.async.t_cljs$core$async19516(map_LT___$1,f__$1,ch__$1,meta19514__$1,___$2,fn1__$1,meta19517));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19516(self__.map_LT_,self__.f,self__.ch,self__.meta19514,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4582__auto__ = ret;
if(cljs.core.truth_(and__4582__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4582__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19520 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19520) : self__.f.call(null,G__19520));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19514], null);
});

cljs.core.async.t_cljs$core$async19513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19513";

cljs.core.async.t_cljs$core$async19513.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async19513");
});

cljs.core.async.__GT_t_cljs$core$async19513 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19513(map_LT___$1,f__$1,ch__$1,meta19514){
return (new cljs.core.async.t_cljs$core$async19513(map_LT___$1,f__$1,ch__$1,meta19514));
});

}

return (new cljs.core.async.t_cljs$core$async19513(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19524 = (function (map_GT_,f,ch,meta19525){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19525 = meta19525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19526,meta19525__$1){
var self__ = this;
var _19526__$1 = this;
return (new cljs.core.async.t_cljs$core$async19524(self__.map_GT_,self__.f,self__.ch,meta19525__$1));
});

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19526){
var self__ = this;
var _19526__$1 = this;
return self__.meta19525;
});

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19525], null);
});

cljs.core.async.t_cljs$core$async19524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19524";

cljs.core.async.t_cljs$core$async19524.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async19524");
});

cljs.core.async.__GT_t_cljs$core$async19524 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19524(map_GT___$1,f__$1,ch__$1,meta19525){
return (new cljs.core.async.t_cljs$core$async19524(map_GT___$1,f__$1,ch__$1,meta19525));
});

}

return (new cljs.core.async.t_cljs$core$async19524(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19530 = (function (filter_GT_,p,ch,meta19531){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19531 = meta19531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19532,meta19531__$1){
var self__ = this;
var _19532__$1 = this;
return (new cljs.core.async.t_cljs$core$async19530(self__.filter_GT_,self__.p,self__.ch,meta19531__$1));
});

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19532){
var self__ = this;
var _19532__$1 = this;
return self__.meta19531;
});

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19531], null);
});

cljs.core.async.t_cljs$core$async19530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19530";

cljs.core.async.t_cljs$core$async19530.cljs$lang$ctorPrWriter = (function (this__5192__auto__,writer__5193__auto__,opt__5194__auto__){
return cljs.core._write(writer__5193__auto__,"cljs.core.async/t_cljs$core$async19530");
});

cljs.core.async.__GT_t_cljs$core$async19530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19530(filter_GT___$1,p__$1,ch__$1,meta19531){
return (new cljs.core.async.t_cljs$core$async19530(filter_GT___$1,p__$1,ch__$1,meta19531));
});

}

return (new cljs.core.async.t_cljs$core$async19530(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args19533 = [];
var len__5652__auto___19577 = arguments.length;
var i__5653__auto___19578 = (0);
while(true){
if((i__5653__auto___19578 < len__5652__auto___19577)){
args19533.push((arguments[i__5653__auto___19578]));

var G__19579 = (i__5653__auto___19578 + (1));
i__5653__auto___19578 = G__19579;
continue;
} else {
}
break;
}

var G__19535 = args19533.length;
switch (G__19535) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19533.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___19581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19581,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19581,out){
return (function (state_19556){
var state_val_19557 = (state_19556[(1)]);
if((state_val_19557 === (7))){
var inst_19552 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19558_19582 = state_19556__$1;
(statearr_19558_19582[(2)] = inst_19552);

(statearr_19558_19582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (1))){
var state_19556__$1 = state_19556;
var statearr_19559_19583 = state_19556__$1;
(statearr_19559_19583[(2)] = null);

(statearr_19559_19583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (4))){
var inst_19538 = (state_19556[(7)]);
var inst_19538__$1 = (state_19556[(2)]);
var inst_19539 = (inst_19538__$1 == null);
var state_19556__$1 = (function (){var statearr_19560 = state_19556;
(statearr_19560[(7)] = inst_19538__$1);

return statearr_19560;
})();
if(cljs.core.truth_(inst_19539)){
var statearr_19561_19584 = state_19556__$1;
(statearr_19561_19584[(1)] = (5));

} else {
var statearr_19562_19585 = state_19556__$1;
(statearr_19562_19585[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (6))){
var inst_19538 = (state_19556[(7)]);
var inst_19543 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19538) : p.call(null,inst_19538));
var state_19556__$1 = state_19556;
if(cljs.core.truth_(inst_19543)){
var statearr_19563_19586 = state_19556__$1;
(statearr_19563_19586[(1)] = (8));

} else {
var statearr_19564_19587 = state_19556__$1;
(statearr_19564_19587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (3))){
var inst_19554 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19556__$1,inst_19554);
} else {
if((state_val_19557 === (2))){
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19556__$1,(4),ch);
} else {
if((state_val_19557 === (11))){
var inst_19546 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19565_19588 = state_19556__$1;
(statearr_19565_19588[(2)] = inst_19546);

(statearr_19565_19588[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (9))){
var state_19556__$1 = state_19556;
var statearr_19566_19589 = state_19556__$1;
(statearr_19566_19589[(2)] = null);

(statearr_19566_19589[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (5))){
var inst_19541 = cljs.core.async.close_BANG_(out);
var state_19556__$1 = state_19556;
var statearr_19567_19590 = state_19556__$1;
(statearr_19567_19590[(2)] = inst_19541);

(statearr_19567_19590[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (10))){
var inst_19549 = (state_19556[(2)]);
var state_19556__$1 = (function (){var statearr_19568 = state_19556;
(statearr_19568[(8)] = inst_19549);

return statearr_19568;
})();
var statearr_19569_19591 = state_19556__$1;
(statearr_19569_19591[(2)] = null);

(statearr_19569_19591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (8))){
var inst_19538 = (state_19556[(7)]);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19556__$1,(11),out,inst_19538);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19581,out))
;
return ((function (switch__8643__auto__,c__8710__auto___19581,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19573 = [null,null,null,null,null,null,null,null,null];
(statearr_19573[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19573[(1)] = (1));

return statearr_19573;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19556){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19556);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19574){if((e19574 instanceof Object)){
var ex__8647__auto__ = e19574;
var statearr_19575_19592 = state_19556;
(statearr_19575_19592[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19556);

return cljs.core.cst$kw$recur;
} else {
throw e19574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19593 = state_19556;
state_19556 = G__19593;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19581,out))
})();
var state__8712__auto__ = (function (){var statearr_19576 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19581);

return statearr_19576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19581,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19594 = [];
var len__5652__auto___19597 = arguments.length;
var i__5653__auto___19598 = (0);
while(true){
if((i__5653__auto___19598 < len__5652__auto___19597)){
args19594.push((arguments[i__5653__auto___19598]));

var G__19599 = (i__5653__auto___19598 + (1));
i__5653__auto___19598 = G__19599;
continue;
} else {
}
break;
}

var G__19596 = args19594.length;
switch (G__19596) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19594.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto__){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto__){
return (function (state_19766){
var state_val_19767 = (state_19766[(1)]);
if((state_val_19767 === (7))){
var inst_19762 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
var statearr_19768_19809 = state_19766__$1;
(statearr_19768_19809[(2)] = inst_19762);

(statearr_19768_19809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (20))){
var inst_19732 = (state_19766[(7)]);
var inst_19743 = (state_19766[(2)]);
var inst_19744 = cljs.core.next(inst_19732);
var inst_19718 = inst_19744;
var inst_19719 = null;
var inst_19720 = (0);
var inst_19721 = (0);
var state_19766__$1 = (function (){var statearr_19769 = state_19766;
(statearr_19769[(8)] = inst_19718);

(statearr_19769[(9)] = inst_19719);

(statearr_19769[(10)] = inst_19720);

(statearr_19769[(11)] = inst_19721);

(statearr_19769[(12)] = inst_19743);

return statearr_19769;
})();
var statearr_19770_19810 = state_19766__$1;
(statearr_19770_19810[(2)] = null);

(statearr_19770_19810[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (1))){
var state_19766__$1 = state_19766;
var statearr_19771_19811 = state_19766__$1;
(statearr_19771_19811[(2)] = null);

(statearr_19771_19811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (4))){
var inst_19707 = (state_19766[(13)]);
var inst_19707__$1 = (state_19766[(2)]);
var inst_19708 = (inst_19707__$1 == null);
var state_19766__$1 = (function (){var statearr_19772 = state_19766;
(statearr_19772[(13)] = inst_19707__$1);

return statearr_19772;
})();
if(cljs.core.truth_(inst_19708)){
var statearr_19773_19812 = state_19766__$1;
(statearr_19773_19812[(1)] = (5));

} else {
var statearr_19774_19813 = state_19766__$1;
(statearr_19774_19813[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (15))){
var state_19766__$1 = state_19766;
var statearr_19778_19814 = state_19766__$1;
(statearr_19778_19814[(2)] = null);

(statearr_19778_19814[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (21))){
var state_19766__$1 = state_19766;
var statearr_19779_19815 = state_19766__$1;
(statearr_19779_19815[(2)] = null);

(statearr_19779_19815[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (13))){
var inst_19718 = (state_19766[(8)]);
var inst_19719 = (state_19766[(9)]);
var inst_19720 = (state_19766[(10)]);
var inst_19721 = (state_19766[(11)]);
var inst_19728 = (state_19766[(2)]);
var inst_19729 = (inst_19721 + (1));
var tmp19775 = inst_19718;
var tmp19776 = inst_19719;
var tmp19777 = inst_19720;
var inst_19718__$1 = tmp19775;
var inst_19719__$1 = tmp19776;
var inst_19720__$1 = tmp19777;
var inst_19721__$1 = inst_19729;
var state_19766__$1 = (function (){var statearr_19780 = state_19766;
(statearr_19780[(8)] = inst_19718__$1);

(statearr_19780[(9)] = inst_19719__$1);

(statearr_19780[(14)] = inst_19728);

(statearr_19780[(10)] = inst_19720__$1);

(statearr_19780[(11)] = inst_19721__$1);

return statearr_19780;
})();
var statearr_19781_19816 = state_19766__$1;
(statearr_19781_19816[(2)] = null);

(statearr_19781_19816[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (22))){
var state_19766__$1 = state_19766;
var statearr_19782_19817 = state_19766__$1;
(statearr_19782_19817[(2)] = null);

(statearr_19782_19817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (6))){
var inst_19707 = (state_19766[(13)]);
var inst_19716 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19707) : f.call(null,inst_19707));
var inst_19717 = cljs.core.seq(inst_19716);
var inst_19718 = inst_19717;
var inst_19719 = null;
var inst_19720 = (0);
var inst_19721 = (0);
var state_19766__$1 = (function (){var statearr_19783 = state_19766;
(statearr_19783[(8)] = inst_19718);

(statearr_19783[(9)] = inst_19719);

(statearr_19783[(10)] = inst_19720);

(statearr_19783[(11)] = inst_19721);

return statearr_19783;
})();
var statearr_19784_19818 = state_19766__$1;
(statearr_19784_19818[(2)] = null);

(statearr_19784_19818[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (17))){
var inst_19732 = (state_19766[(7)]);
var inst_19736 = cljs.core.chunk_first(inst_19732);
var inst_19737 = cljs.core.chunk_rest(inst_19732);
var inst_19738 = cljs.core.count(inst_19736);
var inst_19718 = inst_19737;
var inst_19719 = inst_19736;
var inst_19720 = inst_19738;
var inst_19721 = (0);
var state_19766__$1 = (function (){var statearr_19785 = state_19766;
(statearr_19785[(8)] = inst_19718);

(statearr_19785[(9)] = inst_19719);

(statearr_19785[(10)] = inst_19720);

(statearr_19785[(11)] = inst_19721);

return statearr_19785;
})();
var statearr_19786_19819 = state_19766__$1;
(statearr_19786_19819[(2)] = null);

(statearr_19786_19819[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (3))){
var inst_19764 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19766__$1,inst_19764);
} else {
if((state_val_19767 === (12))){
var inst_19752 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
var statearr_19787_19820 = state_19766__$1;
(statearr_19787_19820[(2)] = inst_19752);

(statearr_19787_19820[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (2))){
var state_19766__$1 = state_19766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19766__$1,(4),in$);
} else {
if((state_val_19767 === (23))){
var inst_19760 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
var statearr_19788_19821 = state_19766__$1;
(statearr_19788_19821[(2)] = inst_19760);

(statearr_19788_19821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (19))){
var inst_19747 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
var statearr_19789_19822 = state_19766__$1;
(statearr_19789_19822[(2)] = inst_19747);

(statearr_19789_19822[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (11))){
var inst_19718 = (state_19766[(8)]);
var inst_19732 = (state_19766[(7)]);
var inst_19732__$1 = cljs.core.seq(inst_19718);
var state_19766__$1 = (function (){var statearr_19790 = state_19766;
(statearr_19790[(7)] = inst_19732__$1);

return statearr_19790;
})();
if(inst_19732__$1){
var statearr_19791_19823 = state_19766__$1;
(statearr_19791_19823[(1)] = (14));

} else {
var statearr_19792_19824 = state_19766__$1;
(statearr_19792_19824[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (9))){
var inst_19754 = (state_19766[(2)]);
var inst_19755 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19766__$1 = (function (){var statearr_19793 = state_19766;
(statearr_19793[(15)] = inst_19754);

return statearr_19793;
})();
if(cljs.core.truth_(inst_19755)){
var statearr_19794_19825 = state_19766__$1;
(statearr_19794_19825[(1)] = (21));

} else {
var statearr_19795_19826 = state_19766__$1;
(statearr_19795_19826[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (5))){
var inst_19710 = cljs.core.async.close_BANG_(out);
var state_19766__$1 = state_19766;
var statearr_19796_19827 = state_19766__$1;
(statearr_19796_19827[(2)] = inst_19710);

(statearr_19796_19827[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (14))){
var inst_19732 = (state_19766[(7)]);
var inst_19734 = cljs.core.chunked_seq_QMARK_(inst_19732);
var state_19766__$1 = state_19766;
if(inst_19734){
var statearr_19797_19828 = state_19766__$1;
(statearr_19797_19828[(1)] = (17));

} else {
var statearr_19798_19829 = state_19766__$1;
(statearr_19798_19829[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (16))){
var inst_19750 = (state_19766[(2)]);
var state_19766__$1 = state_19766;
var statearr_19799_19830 = state_19766__$1;
(statearr_19799_19830[(2)] = inst_19750);

(statearr_19799_19830[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19767 === (10))){
var inst_19719 = (state_19766[(9)]);
var inst_19721 = (state_19766[(11)]);
var inst_19726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19719,inst_19721);
var state_19766__$1 = state_19766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19766__$1,(13),out,inst_19726);
} else {
if((state_val_19767 === (18))){
var inst_19732 = (state_19766[(7)]);
var inst_19741 = cljs.core.first(inst_19732);
var state_19766__$1 = state_19766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19766__$1,(20),out,inst_19741);
} else {
if((state_val_19767 === (8))){
var inst_19720 = (state_19766[(10)]);
var inst_19721 = (state_19766[(11)]);
var inst_19723 = (inst_19721 < inst_19720);
var inst_19724 = inst_19723;
var state_19766__$1 = state_19766;
if(cljs.core.truth_(inst_19724)){
var statearr_19800_19831 = state_19766__$1;
(statearr_19800_19831[(1)] = (10));

} else {
var statearr_19801_19832 = state_19766__$1;
(statearr_19801_19832[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto__))
;
return ((function (switch__8643__auto__,c__8710__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____0 = (function (){
var statearr_19805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__);

(statearr_19805[(1)] = (1));

return statearr_19805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____1 = (function (state_19766){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19766);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19806){if((e19806 instanceof Object)){
var ex__8647__auto__ = e19806;
var statearr_19807_19833 = state_19766;
(statearr_19807_19833[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19766);

return cljs.core.cst$kw$recur;
} else {
throw e19806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19834 = state_19766;
state_19766 = G__19834;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__ = function(state_19766){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____1.call(this,state_19766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8644__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto__))
})();
var state__8712__auto__ = (function (){var statearr_19808 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto__);

return statearr_19808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto__))
);

return c__8710__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19835 = [];
var len__5652__auto___19838 = arguments.length;
var i__5653__auto___19839 = (0);
while(true){
if((i__5653__auto___19839 < len__5652__auto___19838)){
args19835.push((arguments[i__5653__auto___19839]));

var G__19840 = (i__5653__auto___19839 + (1));
i__5653__auto___19839 = G__19840;
continue;
} else {
}
break;
}

var G__19837 = args19835.length;
switch (G__19837) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19835.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args19842 = [];
var len__5652__auto___19845 = arguments.length;
var i__5653__auto___19846 = (0);
while(true){
if((i__5653__auto___19846 < len__5652__auto___19845)){
args19842.push((arguments[i__5653__auto___19846]));

var G__19847 = (i__5653__auto___19846 + (1));
i__5653__auto___19846 = G__19847;
continue;
} else {
}
break;
}

var G__19844 = args19842.length;
switch (G__19844) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19842.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args19849 = [];
var len__5652__auto___19900 = arguments.length;
var i__5653__auto___19901 = (0);
while(true){
if((i__5653__auto___19901 < len__5652__auto___19900)){
args19849.push((arguments[i__5653__auto___19901]));

var G__19902 = (i__5653__auto___19901 + (1));
i__5653__auto___19901 = G__19902;
continue;
} else {
}
break;
}

var G__19851 = args19849.length;
switch (G__19851) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19849.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___19904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19904,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19904,out){
return (function (state_19875){
var state_val_19876 = (state_19875[(1)]);
if((state_val_19876 === (7))){
var inst_19870 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19877_19905 = state_19875__$1;
(statearr_19877_19905[(2)] = inst_19870);

(statearr_19877_19905[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (1))){
var inst_19852 = null;
var state_19875__$1 = (function (){var statearr_19878 = state_19875;
(statearr_19878[(7)] = inst_19852);

return statearr_19878;
})();
var statearr_19879_19906 = state_19875__$1;
(statearr_19879_19906[(2)] = null);

(statearr_19879_19906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (4))){
var inst_19855 = (state_19875[(8)]);
var inst_19855__$1 = (state_19875[(2)]);
var inst_19856 = (inst_19855__$1 == null);
var inst_19857 = cljs.core.not(inst_19856);
var state_19875__$1 = (function (){var statearr_19880 = state_19875;
(statearr_19880[(8)] = inst_19855__$1);

return statearr_19880;
})();
if(inst_19857){
var statearr_19881_19907 = state_19875__$1;
(statearr_19881_19907[(1)] = (5));

} else {
var statearr_19882_19908 = state_19875__$1;
(statearr_19882_19908[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (6))){
var state_19875__$1 = state_19875;
var statearr_19883_19909 = state_19875__$1;
(statearr_19883_19909[(2)] = null);

(statearr_19883_19909[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (3))){
var inst_19872 = (state_19875[(2)]);
var inst_19873 = cljs.core.async.close_BANG_(out);
var state_19875__$1 = (function (){var statearr_19884 = state_19875;
(statearr_19884[(9)] = inst_19872);

return statearr_19884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19875__$1,inst_19873);
} else {
if((state_val_19876 === (2))){
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19875__$1,(4),ch);
} else {
if((state_val_19876 === (11))){
var inst_19855 = (state_19875[(8)]);
var inst_19864 = (state_19875[(2)]);
var inst_19852 = inst_19855;
var state_19875__$1 = (function (){var statearr_19885 = state_19875;
(statearr_19885[(7)] = inst_19852);

(statearr_19885[(10)] = inst_19864);

return statearr_19885;
})();
var statearr_19886_19910 = state_19875__$1;
(statearr_19886_19910[(2)] = null);

(statearr_19886_19910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (9))){
var inst_19855 = (state_19875[(8)]);
var state_19875__$1 = state_19875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19875__$1,(11),out,inst_19855);
} else {
if((state_val_19876 === (5))){
var inst_19852 = (state_19875[(7)]);
var inst_19855 = (state_19875[(8)]);
var inst_19859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19855,inst_19852);
var state_19875__$1 = state_19875;
if(inst_19859){
var statearr_19888_19911 = state_19875__$1;
(statearr_19888_19911[(1)] = (8));

} else {
var statearr_19889_19912 = state_19875__$1;
(statearr_19889_19912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (10))){
var inst_19867 = (state_19875[(2)]);
var state_19875__$1 = state_19875;
var statearr_19890_19913 = state_19875__$1;
(statearr_19890_19913[(2)] = inst_19867);

(statearr_19890_19913[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19876 === (8))){
var inst_19852 = (state_19875[(7)]);
var tmp19887 = inst_19852;
var inst_19852__$1 = tmp19887;
var state_19875__$1 = (function (){var statearr_19891 = state_19875;
(statearr_19891[(7)] = inst_19852__$1);

return statearr_19891;
})();
var statearr_19892_19914 = state_19875__$1;
(statearr_19892_19914[(2)] = null);

(statearr_19892_19914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19904,out))
;
return ((function (switch__8643__auto__,c__8710__auto___19904,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19896[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19896[(1)] = (1));

return statearr_19896;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19875){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19875);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19897){if((e19897 instanceof Object)){
var ex__8647__auto__ = e19897;
var statearr_19898_19915 = state_19875;
(statearr_19898_19915[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19875);

return cljs.core.cst$kw$recur;
} else {
throw e19897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__19916 = state_19875;
state_19875 = G__19916;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19904,out))
})();
var state__8712__auto__ = (function (){var statearr_19899 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19904);

return statearr_19899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19904,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19917 = [];
var len__5652__auto___19987 = arguments.length;
var i__5653__auto___19988 = (0);
while(true){
if((i__5653__auto___19988 < len__5652__auto___19987)){
args19917.push((arguments[i__5653__auto___19988]));

var G__19989 = (i__5653__auto___19988 + (1));
i__5653__auto___19988 = G__19989;
continue;
} else {
}
break;
}

var G__19919 = args19917.length;
switch (G__19919) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19917.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___19991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___19991,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___19991,out){
return (function (state_19957){
var state_val_19958 = (state_19957[(1)]);
if((state_val_19958 === (7))){
var inst_19953 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19959_19992 = state_19957__$1;
(statearr_19959_19992[(2)] = inst_19953);

(statearr_19959_19992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (1))){
var inst_19920 = (new Array(n));
var inst_19921 = inst_19920;
var inst_19922 = (0);
var state_19957__$1 = (function (){var statearr_19960 = state_19957;
(statearr_19960[(7)] = inst_19921);

(statearr_19960[(8)] = inst_19922);

return statearr_19960;
})();
var statearr_19961_19993 = state_19957__$1;
(statearr_19961_19993[(2)] = null);

(statearr_19961_19993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (4))){
var inst_19925 = (state_19957[(9)]);
var inst_19925__$1 = (state_19957[(2)]);
var inst_19926 = (inst_19925__$1 == null);
var inst_19927 = cljs.core.not(inst_19926);
var state_19957__$1 = (function (){var statearr_19962 = state_19957;
(statearr_19962[(9)] = inst_19925__$1);

return statearr_19962;
})();
if(inst_19927){
var statearr_19963_19994 = state_19957__$1;
(statearr_19963_19994[(1)] = (5));

} else {
var statearr_19964_19995 = state_19957__$1;
(statearr_19964_19995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (15))){
var inst_19947 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19965_19996 = state_19957__$1;
(statearr_19965_19996[(2)] = inst_19947);

(statearr_19965_19996[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (13))){
var state_19957__$1 = state_19957;
var statearr_19966_19997 = state_19957__$1;
(statearr_19966_19997[(2)] = null);

(statearr_19966_19997[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (6))){
var inst_19922 = (state_19957[(8)]);
var inst_19943 = (inst_19922 > (0));
var state_19957__$1 = state_19957;
if(cljs.core.truth_(inst_19943)){
var statearr_19967_19998 = state_19957__$1;
(statearr_19967_19998[(1)] = (12));

} else {
var statearr_19968_19999 = state_19957__$1;
(statearr_19968_19999[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (3))){
var inst_19955 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19957__$1,inst_19955);
} else {
if((state_val_19958 === (12))){
var inst_19921 = (state_19957[(7)]);
var inst_19945 = cljs.core.vec(inst_19921);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19957__$1,(15),out,inst_19945);
} else {
if((state_val_19958 === (2))){
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19957__$1,(4),ch);
} else {
if((state_val_19958 === (11))){
var inst_19937 = (state_19957[(2)]);
var inst_19938 = (new Array(n));
var inst_19921 = inst_19938;
var inst_19922 = (0);
var state_19957__$1 = (function (){var statearr_19969 = state_19957;
(statearr_19969[(7)] = inst_19921);

(statearr_19969[(8)] = inst_19922);

(statearr_19969[(10)] = inst_19937);

return statearr_19969;
})();
var statearr_19970_20000 = state_19957__$1;
(statearr_19970_20000[(2)] = null);

(statearr_19970_20000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (9))){
var inst_19921 = (state_19957[(7)]);
var inst_19935 = cljs.core.vec(inst_19921);
var state_19957__$1 = state_19957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19957__$1,(11),out,inst_19935);
} else {
if((state_val_19958 === (5))){
var inst_19921 = (state_19957[(7)]);
var inst_19925 = (state_19957[(9)]);
var inst_19930 = (state_19957[(11)]);
var inst_19922 = (state_19957[(8)]);
var inst_19929 = (inst_19921[inst_19922] = inst_19925);
var inst_19930__$1 = (inst_19922 + (1));
var inst_19931 = (inst_19930__$1 < n);
var state_19957__$1 = (function (){var statearr_19971 = state_19957;
(statearr_19971[(11)] = inst_19930__$1);

(statearr_19971[(12)] = inst_19929);

return statearr_19971;
})();
if(cljs.core.truth_(inst_19931)){
var statearr_19972_20001 = state_19957__$1;
(statearr_19972_20001[(1)] = (8));

} else {
var statearr_19973_20002 = state_19957__$1;
(statearr_19973_20002[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (14))){
var inst_19950 = (state_19957[(2)]);
var inst_19951 = cljs.core.async.close_BANG_(out);
var state_19957__$1 = (function (){var statearr_19975 = state_19957;
(statearr_19975[(13)] = inst_19950);

return statearr_19975;
})();
var statearr_19976_20003 = state_19957__$1;
(statearr_19976_20003[(2)] = inst_19951);

(statearr_19976_20003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (10))){
var inst_19941 = (state_19957[(2)]);
var state_19957__$1 = state_19957;
var statearr_19977_20004 = state_19957__$1;
(statearr_19977_20004[(2)] = inst_19941);

(statearr_19977_20004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19958 === (8))){
var inst_19921 = (state_19957[(7)]);
var inst_19930 = (state_19957[(11)]);
var tmp19974 = inst_19921;
var inst_19921__$1 = tmp19974;
var inst_19922 = inst_19930;
var state_19957__$1 = (function (){var statearr_19978 = state_19957;
(statearr_19978[(7)] = inst_19921__$1);

(statearr_19978[(8)] = inst_19922);

return statearr_19978;
})();
var statearr_19979_20005 = state_19957__$1;
(statearr_19979_20005[(2)] = null);

(statearr_19979_20005[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___19991,out))
;
return ((function (switch__8643__auto__,c__8710__auto___19991,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_19983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19983[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_19983[(1)] = (1));

return statearr_19983;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_19957){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_19957);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e19984){if((e19984 instanceof Object)){
var ex__8647__auto__ = e19984;
var statearr_19985_20006 = state_19957;
(statearr_19985_20006[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19957);

return cljs.core.cst$kw$recur;
} else {
throw e19984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__20007 = state_19957;
state_19957 = G__20007;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_19957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_19957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___19991,out))
})();
var state__8712__auto__ = (function (){var statearr_19986 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_19986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___19991);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___19991,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20008 = [];
var len__5652__auto___20082 = arguments.length;
var i__5653__auto___20083 = (0);
while(true){
if((i__5653__auto___20083 < len__5652__auto___20082)){
args20008.push((arguments[i__5653__auto___20083]));

var G__20084 = (i__5653__auto___20083 + (1));
i__5653__auto___20083 = G__20084;
continue;
} else {
}
break;
}

var G__20010 = args20008.length;
switch (G__20010) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20008.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__8710__auto___20086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__8710__auto___20086,out){
return (function (){
var f__8711__auto__ = (function (){var switch__8643__auto__ = ((function (c__8710__auto___20086,out){
return (function (state_20052){
var state_val_20053 = (state_20052[(1)]);
if((state_val_20053 === (7))){
var inst_20048 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20054_20087 = state_20052__$1;
(statearr_20054_20087[(2)] = inst_20048);

(statearr_20054_20087[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (1))){
var inst_20011 = [];
var inst_20012 = inst_20011;
var inst_20013 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20052__$1 = (function (){var statearr_20055 = state_20052;
(statearr_20055[(7)] = inst_20013);

(statearr_20055[(8)] = inst_20012);

return statearr_20055;
})();
var statearr_20056_20088 = state_20052__$1;
(statearr_20056_20088[(2)] = null);

(statearr_20056_20088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (4))){
var inst_20016 = (state_20052[(9)]);
var inst_20016__$1 = (state_20052[(2)]);
var inst_20017 = (inst_20016__$1 == null);
var inst_20018 = cljs.core.not(inst_20017);
var state_20052__$1 = (function (){var statearr_20057 = state_20052;
(statearr_20057[(9)] = inst_20016__$1);

return statearr_20057;
})();
if(inst_20018){
var statearr_20058_20089 = state_20052__$1;
(statearr_20058_20089[(1)] = (5));

} else {
var statearr_20059_20090 = state_20052__$1;
(statearr_20059_20090[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (15))){
var inst_20042 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20060_20091 = state_20052__$1;
(statearr_20060_20091[(2)] = inst_20042);

(statearr_20060_20091[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (13))){
var state_20052__$1 = state_20052;
var statearr_20061_20092 = state_20052__$1;
(statearr_20061_20092[(2)] = null);

(statearr_20061_20092[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (6))){
var inst_20012 = (state_20052[(8)]);
var inst_20037 = inst_20012.length;
var inst_20038 = (inst_20037 > (0));
var state_20052__$1 = state_20052;
if(cljs.core.truth_(inst_20038)){
var statearr_20062_20093 = state_20052__$1;
(statearr_20062_20093[(1)] = (12));

} else {
var statearr_20063_20094 = state_20052__$1;
(statearr_20063_20094[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (3))){
var inst_20050 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20052__$1,inst_20050);
} else {
if((state_val_20053 === (12))){
var inst_20012 = (state_20052[(8)]);
var inst_20040 = cljs.core.vec(inst_20012);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20052__$1,(15),out,inst_20040);
} else {
if((state_val_20053 === (2))){
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20052__$1,(4),ch);
} else {
if((state_val_20053 === (11))){
var inst_20016 = (state_20052[(9)]);
var inst_20020 = (state_20052[(10)]);
var inst_20030 = (state_20052[(2)]);
var inst_20031 = [];
var inst_20032 = inst_20031.push(inst_20016);
var inst_20012 = inst_20031;
var inst_20013 = inst_20020;
var state_20052__$1 = (function (){var statearr_20064 = state_20052;
(statearr_20064[(11)] = inst_20032);

(statearr_20064[(7)] = inst_20013);

(statearr_20064[(12)] = inst_20030);

(statearr_20064[(8)] = inst_20012);

return statearr_20064;
})();
var statearr_20065_20095 = state_20052__$1;
(statearr_20065_20095[(2)] = null);

(statearr_20065_20095[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (9))){
var inst_20012 = (state_20052[(8)]);
var inst_20028 = cljs.core.vec(inst_20012);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20052__$1,(11),out,inst_20028);
} else {
if((state_val_20053 === (5))){
var inst_20013 = (state_20052[(7)]);
var inst_20016 = (state_20052[(9)]);
var inst_20020 = (state_20052[(10)]);
var inst_20020__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20016) : f.call(null,inst_20016));
var inst_20021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20020__$1,inst_20013);
var inst_20022 = cljs.core.keyword_identical_QMARK_(inst_20013,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20023 = (inst_20021) || (inst_20022);
var state_20052__$1 = (function (){var statearr_20066 = state_20052;
(statearr_20066[(10)] = inst_20020__$1);

return statearr_20066;
})();
if(cljs.core.truth_(inst_20023)){
var statearr_20067_20096 = state_20052__$1;
(statearr_20067_20096[(1)] = (8));

} else {
var statearr_20068_20097 = state_20052__$1;
(statearr_20068_20097[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (14))){
var inst_20045 = (state_20052[(2)]);
var inst_20046 = cljs.core.async.close_BANG_(out);
var state_20052__$1 = (function (){var statearr_20070 = state_20052;
(statearr_20070[(13)] = inst_20045);

return statearr_20070;
})();
var statearr_20071_20098 = state_20052__$1;
(statearr_20071_20098[(2)] = inst_20046);

(statearr_20071_20098[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (10))){
var inst_20035 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20072_20099 = state_20052__$1;
(statearr_20072_20099[(2)] = inst_20035);

(statearr_20072_20099[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20053 === (8))){
var inst_20016 = (state_20052[(9)]);
var inst_20012 = (state_20052[(8)]);
var inst_20020 = (state_20052[(10)]);
var inst_20025 = inst_20012.push(inst_20016);
var tmp20069 = inst_20012;
var inst_20012__$1 = tmp20069;
var inst_20013 = inst_20020;
var state_20052__$1 = (function (){var statearr_20073 = state_20052;
(statearr_20073[(14)] = inst_20025);

(statearr_20073[(7)] = inst_20013);

(statearr_20073[(8)] = inst_20012__$1);

return statearr_20073;
})();
var statearr_20074_20100 = state_20052__$1;
(statearr_20074_20100[(2)] = null);

(statearr_20074_20100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8710__auto___20086,out))
;
return ((function (switch__8643__auto__,c__8710__auto___20086,out){
return (function() {
var cljs$core$async$state_machine__8644__auto__ = null;
var cljs$core$async$state_machine__8644__auto____0 = (function (){
var statearr_20078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20078[(0)] = cljs$core$async$state_machine__8644__auto__);

(statearr_20078[(1)] = (1));

return statearr_20078;
});
var cljs$core$async$state_machine__8644__auto____1 = (function (state_20052){
while(true){
var ret_value__8645__auto__ = (function (){try{while(true){
var result__8646__auto__ = switch__8643__auto__(state_20052);
if(cljs.core.keyword_identical_QMARK_(result__8646__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__8646__auto__;
}
break;
}
}catch (e20079){if((e20079 instanceof Object)){
var ex__8647__auto__ = e20079;
var statearr_20080_20101 = state_20052;
(statearr_20080_20101[(5)] = ex__8647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20052);

return cljs.core.cst$kw$recur;
} else {
throw e20079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__8645__auto__,cljs.core.cst$kw$recur)){
var G__20102 = state_20052;
state_20052 = G__20102;
continue;
} else {
return ret_value__8645__auto__;
}
break;
}
});
cljs$core$async$state_machine__8644__auto__ = function(state_20052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8644__auto____1.call(this,state_20052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8644__auto____0;
cljs$core$async$state_machine__8644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8644__auto____1;
return cljs$core$async$state_machine__8644__auto__;
})()
;})(switch__8643__auto__,c__8710__auto___20086,out))
})();
var state__8712__auto__ = (function (){var statearr_20081 = (f__8711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__8711__auto__.cljs$core$IFn$_invoke$arity$0() : f__8711__auto__.call(null));
(statearr_20081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8710__auto___20086);

return statearr_20081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__8712__auto__);
});})(c__8710__auto___20086,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
