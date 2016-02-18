// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12225 = [];
var len__5726__auto___12231 = arguments.length;
var i__5727__auto___12232 = (0);
while(true){
if((i__5727__auto___12232 < len__5726__auto___12231)){
args12225.push((arguments[i__5727__auto___12232]));

var G__12233 = (i__5727__auto___12232 + (1));
i__5727__auto___12232 = G__12233;
continue;
} else {
}
break;
}

var G__12227 = args12225.length;
switch (G__12227) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12225.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12228 = (function (f,blockable,meta12229){
this.f = f;
this.blockable = blockable;
this.meta12229 = meta12229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12230,meta12229__$1){
var self__ = this;
var _12230__$1 = this;
return (new cljs.core.async.t_cljs$core$async12228(self__.f,self__.blockable,meta12229__$1));
});

cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12230){
var self__ = this;
var _12230__$1 = this;
return self__.meta12229;
});

cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12229], null);
});

cljs.core.async.t_cljs$core$async12228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12228";

cljs.core.async.t_cljs$core$async12228.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async12228");
});

cljs.core.async.__GT_t_cljs$core$async12228 = (function cljs$core$async$__GT_t_cljs$core$async12228(f__$1,blockable__$1,meta12229){
return (new cljs.core.async.t_cljs$core$async12228(f__$1,blockable__$1,meta12229));
});

}

return (new cljs.core.async.t_cljs$core$async12228(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
var args12237 = [];
var len__5726__auto___12240 = arguments.length;
var i__5727__auto___12241 = (0);
while(true){
if((i__5727__auto___12241 < len__5726__auto___12240)){
args12237.push((arguments[i__5727__auto___12241]));

var G__12242 = (i__5727__auto___12241 + (1));
i__5727__auto___12241 = G__12242;
continue;
} else {
}
break;
}

var G__12239 = args12237.length;
switch (G__12239) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12237.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12244 = [];
var len__5726__auto___12247 = arguments.length;
var i__5727__auto___12248 = (0);
while(true){
if((i__5727__auto___12248 < len__5726__auto___12247)){
args12244.push((arguments[i__5727__auto___12248]));

var G__12249 = (i__5727__auto___12248 + (1));
i__5727__auto___12248 = G__12249;
continue;
} else {
}
break;
}

var G__12246 = args12244.length;
switch (G__12246) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12244.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args12251 = [];
var len__5726__auto___12254 = arguments.length;
var i__5727__auto___12255 = (0);
while(true){
if((i__5727__auto___12255 < len__5726__auto___12254)){
args12251.push((arguments[i__5727__auto___12255]));

var G__12256 = (i__5727__auto___12255 + (1));
i__5727__auto___12255 = G__12256;
continue;
} else {
}
break;
}

var G__12253 = args12251.length;
switch (G__12253) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12251.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12258 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12258) : fn1.call(null,val_12258));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12258,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12258) : fn1.call(null,val_12258));
});})(val_12258,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args12259 = [];
var len__5726__auto___12262 = arguments.length;
var i__5727__auto___12263 = (0);
while(true){
if((i__5727__auto___12263 < len__5726__auto___12262)){
args12259.push((arguments[i__5727__auto___12263]));

var G__12264 = (i__5727__auto___12263 + (1));
i__5727__auto___12263 = G__12264;
continue;
} else {
}
break;
}

var G__12261 = args12259.length;
switch (G__12261) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12259.length)].join('')));

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
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
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
var n__5571__auto___12266 = n;
var x_12267 = (0);
while(true){
if((x_12267 < n__5571__auto___12266)){
(a[x_12267] = (0));

var G__12268 = (x_12267 + (1));
x_12267 = G__12268;
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

var G__12269 = (i + (1));
i = G__12269;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async12273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12273 = (function (alt_flag,flag,meta12274){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12274 = meta12274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12275,meta12274__$1){
var self__ = this;
var _12275__$1 = this;
return (new cljs.core.async.t_cljs$core$async12273(self__.alt_flag,self__.flag,meta12274__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12275){
var self__ = this;
var _12275__$1 = this;
return self__.meta12274;
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12274], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12273";

cljs.core.async.t_cljs$core$async12273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async12273");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12273 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12273(alt_flag__$1,flag__$1,meta12274){
return (new cljs.core.async.t_cljs$core$async12273(alt_flag__$1,flag__$1,meta12274));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12273(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12279 = (function (alt_handler,flag,cb,meta12280){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12280 = meta12280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12281,meta12280__$1){
var self__ = this;
var _12281__$1 = this;
return (new cljs.core.async.t_cljs$core$async12279(self__.alt_handler,self__.flag,self__.cb,meta12280__$1));
});

cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12281){
var self__ = this;
var _12281__$1 = this;
return self__.meta12280;
});

cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12280], null);
});

cljs.core.async.t_cljs$core$async12279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12279";

cljs.core.async.t_cljs$core$async12279.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async12279");
});

cljs.core.async.__GT_t_cljs$core$async12279 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12279(alt_handler__$1,flag__$1,cb__$1,meta12280){
return (new cljs.core.async.t_cljs$core$async12279(alt_handler__$1,flag__$1,cb__$1,meta12280));
});

}

return (new cljs.core.async.t_cljs$core$async12279(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12282_SHARP_){
var G__12286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12282_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12286) : fret.call(null,G__12286));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12283_SHARP_){
var G__12287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12283_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12287) : fret.call(null,G__12287));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12288 = (i + (1));
i = G__12288;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4656__auto__;
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
var args__5733__auto__ = [];
var len__5726__auto___12294 = arguments.length;
var i__5727__auto___12295 = (0);
while(true){
if((i__5727__auto___12295 < len__5726__auto___12294)){
args__5733__auto__.push((arguments[i__5727__auto___12295]));

var G__12296 = (i__5727__auto___12295 + (1));
i__5727__auto___12295 = G__12296;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12291){
var map__12292 = p__12291;
var map__12292__$1 = ((((!((map__12292 == null)))?((((map__12292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12292):map__12292);
var opts = map__12292__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12289){
var G__12290 = cljs.core.first(seq12289);
var seq12289__$1 = cljs.core.next(seq12289);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12290,seq12289__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12297 = [];
var len__5726__auto___12347 = arguments.length;
var i__5727__auto___12348 = (0);
while(true){
if((i__5727__auto___12348 < len__5726__auto___12347)){
args12297.push((arguments[i__5727__auto___12348]));

var G__12349 = (i__5727__auto___12348 + (1));
i__5727__auto___12348 = G__12349;
continue;
} else {
}
break;
}

var G__12299 = args12297.length;
switch (G__12299) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12297.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12180__auto___12351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___12351){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___12351){
return (function (state_12323){
var state_val_12324 = (state_12323[(1)]);
if((state_val_12324 === (7))){
var inst_12319 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12325_12352 = state_12323__$1;
(statearr_12325_12352[(2)] = inst_12319);

(statearr_12325_12352[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (1))){
var state_12323__$1 = state_12323;
var statearr_12326_12353 = state_12323__$1;
(statearr_12326_12353[(2)] = null);

(statearr_12326_12353[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (4))){
var inst_12302 = (state_12323[(7)]);
var inst_12302__$1 = (state_12323[(2)]);
var inst_12303 = (inst_12302__$1 == null);
var state_12323__$1 = (function (){var statearr_12327 = state_12323;
(statearr_12327[(7)] = inst_12302__$1);

return statearr_12327;
})();
if(cljs.core.truth_(inst_12303)){
var statearr_12328_12354 = state_12323__$1;
(statearr_12328_12354[(1)] = (5));

} else {
var statearr_12329_12355 = state_12323__$1;
(statearr_12329_12355[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (13))){
var state_12323__$1 = state_12323;
var statearr_12330_12356 = state_12323__$1;
(statearr_12330_12356[(2)] = null);

(statearr_12330_12356[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (6))){
var inst_12302 = (state_12323[(7)]);
var state_12323__$1 = state_12323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12323__$1,(11),to,inst_12302);
} else {
if((state_val_12324 === (3))){
var inst_12321 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12323__$1,inst_12321);
} else {
if((state_val_12324 === (12))){
var state_12323__$1 = state_12323;
var statearr_12331_12357 = state_12323__$1;
(statearr_12331_12357[(2)] = null);

(statearr_12331_12357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (2))){
var state_12323__$1 = state_12323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12323__$1,(4),from);
} else {
if((state_val_12324 === (11))){
var inst_12312 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
if(cljs.core.truth_(inst_12312)){
var statearr_12332_12358 = state_12323__$1;
(statearr_12332_12358[(1)] = (12));

} else {
var statearr_12333_12359 = state_12323__$1;
(statearr_12333_12359[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (9))){
var state_12323__$1 = state_12323;
var statearr_12334_12360 = state_12323__$1;
(statearr_12334_12360[(2)] = null);

(statearr_12334_12360[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (5))){
var state_12323__$1 = state_12323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12335_12361 = state_12323__$1;
(statearr_12335_12361[(1)] = (8));

} else {
var statearr_12336_12362 = state_12323__$1;
(statearr_12336_12362[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (14))){
var inst_12317 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12337_12363 = state_12323__$1;
(statearr_12337_12363[(2)] = inst_12317);

(statearr_12337_12363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (10))){
var inst_12309 = (state_12323[(2)]);
var state_12323__$1 = state_12323;
var statearr_12338_12364 = state_12323__$1;
(statearr_12338_12364[(2)] = inst_12309);

(statearr_12338_12364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12324 === (8))){
var inst_12306 = cljs.core.async.close_BANG_(to);
var state_12323__$1 = state_12323;
var statearr_12339_12365 = state_12323__$1;
(statearr_12339_12365[(2)] = inst_12306);

(statearr_12339_12365[(1)] = (10));


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
});})(c__12180__auto___12351))
;
return ((function (switch__12066__auto__,c__12180__auto___12351){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_12343 = [null,null,null,null,null,null,null,null];
(statearr_12343[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_12343[(1)] = (1));

return statearr_12343;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_12323){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12323);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12344){if((e12344 instanceof Object)){
var ex__12070__auto__ = e12344;
var statearr_12345_12366 = state_12323;
(statearr_12345_12366[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12323);

return cljs.core.cst$kw$recur;
} else {
throw e12344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12367 = state_12323;
state_12323 = G__12367;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_12323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_12323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___12351))
})();
var state__12182__auto__ = (function (){var statearr_12346 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12351);

return statearr_12346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___12351))
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
return (function (p__12551){
var vec__12552 = p__12551;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(1),null);
var job = vec__12552;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12180__auto___12734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results){
return (function (state_12557){
var state_val_12558 = (state_12557[(1)]);
if((state_val_12558 === (1))){
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12557__$1,(2),res,v);
} else {
if((state_val_12558 === (2))){
var inst_12554 = (state_12557[(2)]);
var inst_12555 = cljs.core.async.close_BANG_(res);
var state_12557__$1 = (function (){var statearr_12559 = state_12557;
(statearr_12559[(7)] = inst_12554);

return statearr_12559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12557__$1,inst_12555);
} else {
return null;
}
}
});})(c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results))
;
return ((function (switch__12066__auto__,c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_12563 = [null,null,null,null,null,null,null,null];
(statearr_12563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__);

(statearr_12563[(1)] = (1));

return statearr_12563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1 = (function (state_12557){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12557);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12564){if((e12564 instanceof Object)){
var ex__12070__auto__ = e12564;
var statearr_12565_12735 = state_12557;
(statearr_12565_12735[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12557);

return cljs.core.cst$kw$recur;
} else {
throw e12564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12736 = state_12557;
state_12557 = G__12736;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = function(state_12557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1.call(this,state_12557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results))
})();
var state__12182__auto__ = (function (){var statearr_12566 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12734);

return statearr_12566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___12734,res,vec__12552,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12567){
var vec__12568 = p__12567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(1),null);
var job = vec__12568;
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
var n__5571__auto___12737 = n;
var __12738 = (0);
while(true){
if((__12738 < n__5571__auto___12737)){
var G__12569_12739 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12569_12739) {
case "compute":
var c__12180__auto___12741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12738,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (__12738,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function (state_12582){
var state_val_12583 = (state_12582[(1)]);
if((state_val_12583 === (1))){
var state_12582__$1 = state_12582;
var statearr_12584_12742 = state_12582__$1;
(statearr_12584_12742[(2)] = null);

(statearr_12584_12742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12583 === (2))){
var state_12582__$1 = state_12582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12582__$1,(4),jobs);
} else {
if((state_val_12583 === (3))){
var inst_12580 = (state_12582[(2)]);
var state_12582__$1 = state_12582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12582__$1,inst_12580);
} else {
if((state_val_12583 === (4))){
var inst_12572 = (state_12582[(2)]);
var inst_12573 = process(inst_12572);
var state_12582__$1 = state_12582;
if(cljs.core.truth_(inst_12573)){
var statearr_12585_12743 = state_12582__$1;
(statearr_12585_12743[(1)] = (5));

} else {
var statearr_12586_12744 = state_12582__$1;
(statearr_12586_12744[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12583 === (5))){
var state_12582__$1 = state_12582;
var statearr_12587_12745 = state_12582__$1;
(statearr_12587_12745[(2)] = null);

(statearr_12587_12745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12583 === (6))){
var state_12582__$1 = state_12582;
var statearr_12588_12746 = state_12582__$1;
(statearr_12588_12746[(2)] = null);

(statearr_12588_12746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12583 === (7))){
var inst_12578 = (state_12582[(2)]);
var state_12582__$1 = state_12582;
var statearr_12589_12747 = state_12582__$1;
(statearr_12589_12747[(2)] = inst_12578);

(statearr_12589_12747[(1)] = (3));


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
});})(__12738,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
;
return ((function (__12738,switch__12066__auto__,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_12593 = [null,null,null,null,null,null,null];
(statearr_12593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__);

(statearr_12593[(1)] = (1));

return statearr_12593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1 = (function (state_12582){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12582);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12594){if((e12594 instanceof Object)){
var ex__12070__auto__ = e12594;
var statearr_12595_12748 = state_12582;
(statearr_12595_12748[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12582);

return cljs.core.cst$kw$recur;
} else {
throw e12594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12749 = state_12582;
state_12582 = G__12749;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = function(state_12582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1.call(this,state_12582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__;
})()
;})(__12738,switch__12066__auto__,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
})();
var state__12182__auto__ = (function (){var statearr_12596 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12741);

return statearr_12596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(__12738,c__12180__auto___12741,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
);


break;
case "async":
var c__12180__auto___12750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12738,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (__12738,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function (state_12609){
var state_val_12610 = (state_12609[(1)]);
if((state_val_12610 === (1))){
var state_12609__$1 = state_12609;
var statearr_12611_12751 = state_12609__$1;
(statearr_12611_12751[(2)] = null);

(statearr_12611_12751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12610 === (2))){
var state_12609__$1 = state_12609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12609__$1,(4),jobs);
} else {
if((state_val_12610 === (3))){
var inst_12607 = (state_12609[(2)]);
var state_12609__$1 = state_12609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12609__$1,inst_12607);
} else {
if((state_val_12610 === (4))){
var inst_12599 = (state_12609[(2)]);
var inst_12600 = async(inst_12599);
var state_12609__$1 = state_12609;
if(cljs.core.truth_(inst_12600)){
var statearr_12612_12752 = state_12609__$1;
(statearr_12612_12752[(1)] = (5));

} else {
var statearr_12613_12753 = state_12609__$1;
(statearr_12613_12753[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12610 === (5))){
var state_12609__$1 = state_12609;
var statearr_12614_12754 = state_12609__$1;
(statearr_12614_12754[(2)] = null);

(statearr_12614_12754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12610 === (6))){
var state_12609__$1 = state_12609;
var statearr_12615_12755 = state_12609__$1;
(statearr_12615_12755[(2)] = null);

(statearr_12615_12755[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12610 === (7))){
var inst_12605 = (state_12609[(2)]);
var state_12609__$1 = state_12609;
var statearr_12616_12756 = state_12609__$1;
(statearr_12616_12756[(2)] = inst_12605);

(statearr_12616_12756[(1)] = (3));


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
});})(__12738,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
;
return ((function (__12738,switch__12066__auto__,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_12620 = [null,null,null,null,null,null,null];
(statearr_12620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__);

(statearr_12620[(1)] = (1));

return statearr_12620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1 = (function (state_12609){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12609);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12621){if((e12621 instanceof Object)){
var ex__12070__auto__ = e12621;
var statearr_12622_12757 = state_12609;
(statearr_12622_12757[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12609);

return cljs.core.cst$kw$recur;
} else {
throw e12621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12758 = state_12609;
state_12609 = G__12758;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = function(state_12609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1.call(this,state_12609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__;
})()
;})(__12738,switch__12066__auto__,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
})();
var state__12182__auto__ = (function (){var statearr_12623 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12750);

return statearr_12623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(__12738,c__12180__auto___12750,G__12569_12739,n__5571__auto___12737,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12759 = (__12738 + (1));
__12738 = G__12759;
continue;
} else {
}
break;
}

var c__12180__auto___12760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___12760,jobs,results,process,async){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___12760,jobs,results,process,async){
return (function (state_12645){
var state_val_12646 = (state_12645[(1)]);
if((state_val_12646 === (1))){
var state_12645__$1 = state_12645;
var statearr_12647_12761 = state_12645__$1;
(statearr_12647_12761[(2)] = null);

(statearr_12647_12761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (2))){
var state_12645__$1 = state_12645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12645__$1,(4),from);
} else {
if((state_val_12646 === (3))){
var inst_12643 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12645__$1,inst_12643);
} else {
if((state_val_12646 === (4))){
var inst_12626 = (state_12645[(7)]);
var inst_12626__$1 = (state_12645[(2)]);
var inst_12627 = (inst_12626__$1 == null);
var state_12645__$1 = (function (){var statearr_12648 = state_12645;
(statearr_12648[(7)] = inst_12626__$1);

return statearr_12648;
})();
if(cljs.core.truth_(inst_12627)){
var statearr_12649_12762 = state_12645__$1;
(statearr_12649_12762[(1)] = (5));

} else {
var statearr_12650_12763 = state_12645__$1;
(statearr_12650_12763[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (5))){
var inst_12629 = cljs.core.async.close_BANG_(jobs);
var state_12645__$1 = state_12645;
var statearr_12651_12764 = state_12645__$1;
(statearr_12651_12764[(2)] = inst_12629);

(statearr_12651_12764[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (6))){
var inst_12626 = (state_12645[(7)]);
var inst_12631 = (state_12645[(8)]);
var inst_12631__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12633 = [inst_12626,inst_12631__$1];
var inst_12634 = (new cljs.core.PersistentVector(null,2,(5),inst_12632,inst_12633,null));
var state_12645__$1 = (function (){var statearr_12652 = state_12645;
(statearr_12652[(8)] = inst_12631__$1);

return statearr_12652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12645__$1,(8),jobs,inst_12634);
} else {
if((state_val_12646 === (7))){
var inst_12641 = (state_12645[(2)]);
var state_12645__$1 = state_12645;
var statearr_12653_12765 = state_12645__$1;
(statearr_12653_12765[(2)] = inst_12641);

(statearr_12653_12765[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12646 === (8))){
var inst_12631 = (state_12645[(8)]);
var inst_12636 = (state_12645[(2)]);
var state_12645__$1 = (function (){var statearr_12654 = state_12645;
(statearr_12654[(9)] = inst_12636);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12645__$1,(9),results,inst_12631);
} else {
if((state_val_12646 === (9))){
var inst_12638 = (state_12645[(2)]);
var state_12645__$1 = (function (){var statearr_12655 = state_12645;
(statearr_12655[(10)] = inst_12638);

return statearr_12655;
})();
var statearr_12656_12766 = state_12645__$1;
(statearr_12656_12766[(2)] = null);

(statearr_12656_12766[(1)] = (2));


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
});})(c__12180__auto___12760,jobs,results,process,async))
;
return ((function (switch__12066__auto__,c__12180__auto___12760,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_12660 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__);

(statearr_12660[(1)] = (1));

return statearr_12660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1 = (function (state_12645){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12645);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12661){if((e12661 instanceof Object)){
var ex__12070__auto__ = e12661;
var statearr_12662_12767 = state_12645;
(statearr_12662_12767[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12645);

return cljs.core.cst$kw$recur;
} else {
throw e12661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12768 = state_12645;
state_12645 = G__12768;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = function(state_12645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1.call(this,state_12645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___12760,jobs,results,process,async))
})();
var state__12182__auto__ = (function (){var statearr_12663 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12760);

return statearr_12663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___12760,jobs,results,process,async))
);


var c__12180__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto__,jobs,results,process,async){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto__,jobs,results,process,async){
return (function (state_12701){
var state_val_12702 = (state_12701[(1)]);
if((state_val_12702 === (7))){
var inst_12697 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12703_12769 = state_12701__$1;
(statearr_12703_12769[(2)] = inst_12697);

(statearr_12703_12769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (20))){
var state_12701__$1 = state_12701;
var statearr_12704_12770 = state_12701__$1;
(statearr_12704_12770[(2)] = null);

(statearr_12704_12770[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (1))){
var state_12701__$1 = state_12701;
var statearr_12705_12771 = state_12701__$1;
(statearr_12705_12771[(2)] = null);

(statearr_12705_12771[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (4))){
var inst_12666 = (state_12701[(7)]);
var inst_12666__$1 = (state_12701[(2)]);
var inst_12667 = (inst_12666__$1 == null);
var state_12701__$1 = (function (){var statearr_12706 = state_12701;
(statearr_12706[(7)] = inst_12666__$1);

return statearr_12706;
})();
if(cljs.core.truth_(inst_12667)){
var statearr_12707_12772 = state_12701__$1;
(statearr_12707_12772[(1)] = (5));

} else {
var statearr_12708_12773 = state_12701__$1;
(statearr_12708_12773[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (15))){
var inst_12679 = (state_12701[(8)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12701__$1,(18),to,inst_12679);
} else {
if((state_val_12702 === (21))){
var inst_12692 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12709_12774 = state_12701__$1;
(statearr_12709_12774[(2)] = inst_12692);

(statearr_12709_12774[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (13))){
var inst_12694 = (state_12701[(2)]);
var state_12701__$1 = (function (){var statearr_12710 = state_12701;
(statearr_12710[(9)] = inst_12694);

return statearr_12710;
})();
var statearr_12711_12775 = state_12701__$1;
(statearr_12711_12775[(2)] = null);

(statearr_12711_12775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (6))){
var inst_12666 = (state_12701[(7)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12701__$1,(11),inst_12666);
} else {
if((state_val_12702 === (17))){
var inst_12687 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
if(cljs.core.truth_(inst_12687)){
var statearr_12712_12776 = state_12701__$1;
(statearr_12712_12776[(1)] = (19));

} else {
var statearr_12713_12777 = state_12701__$1;
(statearr_12713_12777[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (3))){
var inst_12699 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12701__$1,inst_12699);
} else {
if((state_val_12702 === (12))){
var inst_12676 = (state_12701[(10)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12701__$1,(14),inst_12676);
} else {
if((state_val_12702 === (2))){
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12701__$1,(4),results);
} else {
if((state_val_12702 === (19))){
var state_12701__$1 = state_12701;
var statearr_12714_12778 = state_12701__$1;
(statearr_12714_12778[(2)] = null);

(statearr_12714_12778[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (11))){
var inst_12676 = (state_12701[(2)]);
var state_12701__$1 = (function (){var statearr_12715 = state_12701;
(statearr_12715[(10)] = inst_12676);

return statearr_12715;
})();
var statearr_12716_12779 = state_12701__$1;
(statearr_12716_12779[(2)] = null);

(statearr_12716_12779[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (9))){
var state_12701__$1 = state_12701;
var statearr_12717_12780 = state_12701__$1;
(statearr_12717_12780[(2)] = null);

(statearr_12717_12780[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (5))){
var state_12701__$1 = state_12701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12718_12781 = state_12701__$1;
(statearr_12718_12781[(1)] = (8));

} else {
var statearr_12719_12782 = state_12701__$1;
(statearr_12719_12782[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (14))){
var inst_12679 = (state_12701[(8)]);
var inst_12681 = (state_12701[(11)]);
var inst_12679__$1 = (state_12701[(2)]);
var inst_12680 = (inst_12679__$1 == null);
var inst_12681__$1 = cljs.core.not(inst_12680);
var state_12701__$1 = (function (){var statearr_12720 = state_12701;
(statearr_12720[(8)] = inst_12679__$1);

(statearr_12720[(11)] = inst_12681__$1);

return statearr_12720;
})();
if(inst_12681__$1){
var statearr_12721_12783 = state_12701__$1;
(statearr_12721_12783[(1)] = (15));

} else {
var statearr_12722_12784 = state_12701__$1;
(statearr_12722_12784[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (16))){
var inst_12681 = (state_12701[(11)]);
var state_12701__$1 = state_12701;
var statearr_12723_12785 = state_12701__$1;
(statearr_12723_12785[(2)] = inst_12681);

(statearr_12723_12785[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (10))){
var inst_12673 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12724_12786 = state_12701__$1;
(statearr_12724_12786[(2)] = inst_12673);

(statearr_12724_12786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (18))){
var inst_12684 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12725_12787 = state_12701__$1;
(statearr_12725_12787[(2)] = inst_12684);

(statearr_12725_12787[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (8))){
var inst_12670 = cljs.core.async.close_BANG_(to);
var state_12701__$1 = state_12701;
var statearr_12726_12788 = state_12701__$1;
(statearr_12726_12788[(2)] = inst_12670);

(statearr_12726_12788[(1)] = (10));


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
});})(c__12180__auto__,jobs,results,process,async))
;
return ((function (switch__12066__auto__,c__12180__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_12730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__);

(statearr_12730[(1)] = (1));

return statearr_12730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1 = (function (state_12701){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12701);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12731){if((e12731 instanceof Object)){
var ex__12070__auto__ = e12731;
var statearr_12732_12789 = state_12701;
(statearr_12732_12789[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12701);

return cljs.core.cst$kw$recur;
} else {
throw e12731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12790 = state_12701;
state_12701 = G__12790;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto__,jobs,results,process,async))
})();
var state__12182__auto__ = (function (){var statearr_12733 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto__);

return statearr_12733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto__,jobs,results,process,async))
);

return c__12180__auto__;
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
var args12791 = [];
var len__5726__auto___12794 = arguments.length;
var i__5727__auto___12795 = (0);
while(true){
if((i__5727__auto___12795 < len__5726__auto___12794)){
args12791.push((arguments[i__5727__auto___12795]));

var G__12796 = (i__5727__auto___12795 + (1));
i__5727__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var G__12793 = args12791.length;
switch (G__12793) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12791.length)].join('')));

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
var args12798 = [];
var len__5726__auto___12801 = arguments.length;
var i__5727__auto___12802 = (0);
while(true){
if((i__5727__auto___12802 < len__5726__auto___12801)){
args12798.push((arguments[i__5727__auto___12802]));

var G__12803 = (i__5727__auto___12802 + (1));
i__5727__auto___12802 = G__12803;
continue;
} else {
}
break;
}

var G__12800 = args12798.length;
switch (G__12800) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12798.length)].join('')));

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
var args12805 = [];
var len__5726__auto___12858 = arguments.length;
var i__5727__auto___12859 = (0);
while(true){
if((i__5727__auto___12859 < len__5726__auto___12858)){
args12805.push((arguments[i__5727__auto___12859]));

var G__12860 = (i__5727__auto___12859 + (1));
i__5727__auto___12859 = G__12860;
continue;
} else {
}
break;
}

var G__12807 = args12805.length;
switch (G__12807) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12805.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12180__auto___12862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___12862,tc,fc){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___12862,tc,fc){
return (function (state_12833){
var state_val_12834 = (state_12833[(1)]);
if((state_val_12834 === (7))){
var inst_12829 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12835_12863 = state_12833__$1;
(statearr_12835_12863[(2)] = inst_12829);

(statearr_12835_12863[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (1))){
var state_12833__$1 = state_12833;
var statearr_12836_12864 = state_12833__$1;
(statearr_12836_12864[(2)] = null);

(statearr_12836_12864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (4))){
var inst_12810 = (state_12833[(7)]);
var inst_12810__$1 = (state_12833[(2)]);
var inst_12811 = (inst_12810__$1 == null);
var state_12833__$1 = (function (){var statearr_12837 = state_12833;
(statearr_12837[(7)] = inst_12810__$1);

return statearr_12837;
})();
if(cljs.core.truth_(inst_12811)){
var statearr_12838_12865 = state_12833__$1;
(statearr_12838_12865[(1)] = (5));

} else {
var statearr_12839_12866 = state_12833__$1;
(statearr_12839_12866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (13))){
var state_12833__$1 = state_12833;
var statearr_12840_12867 = state_12833__$1;
(statearr_12840_12867[(2)] = null);

(statearr_12840_12867[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (6))){
var inst_12810 = (state_12833[(7)]);
var inst_12816 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12810) : p.call(null,inst_12810));
var state_12833__$1 = state_12833;
if(cljs.core.truth_(inst_12816)){
var statearr_12841_12868 = state_12833__$1;
(statearr_12841_12868[(1)] = (9));

} else {
var statearr_12842_12869 = state_12833__$1;
(statearr_12842_12869[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (3))){
var inst_12831 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12833__$1,inst_12831);
} else {
if((state_val_12834 === (12))){
var state_12833__$1 = state_12833;
var statearr_12843_12870 = state_12833__$1;
(statearr_12843_12870[(2)] = null);

(statearr_12843_12870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (2))){
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12833__$1,(4),ch);
} else {
if((state_val_12834 === (11))){
var inst_12810 = (state_12833[(7)]);
var inst_12820 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12833__$1,(8),inst_12820,inst_12810);
} else {
if((state_val_12834 === (9))){
var state_12833__$1 = state_12833;
var statearr_12844_12871 = state_12833__$1;
(statearr_12844_12871[(2)] = tc);

(statearr_12844_12871[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (5))){
var inst_12813 = cljs.core.async.close_BANG_(tc);
var inst_12814 = cljs.core.async.close_BANG_(fc);
var state_12833__$1 = (function (){var statearr_12845 = state_12833;
(statearr_12845[(8)] = inst_12813);

return statearr_12845;
})();
var statearr_12846_12872 = state_12833__$1;
(statearr_12846_12872[(2)] = inst_12814);

(statearr_12846_12872[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (14))){
var inst_12827 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
var statearr_12847_12873 = state_12833__$1;
(statearr_12847_12873[(2)] = inst_12827);

(statearr_12847_12873[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (10))){
var state_12833__$1 = state_12833;
var statearr_12848_12874 = state_12833__$1;
(statearr_12848_12874[(2)] = fc);

(statearr_12848_12874[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12834 === (8))){
var inst_12822 = (state_12833[(2)]);
var state_12833__$1 = state_12833;
if(cljs.core.truth_(inst_12822)){
var statearr_12849_12875 = state_12833__$1;
(statearr_12849_12875[(1)] = (12));

} else {
var statearr_12850_12876 = state_12833__$1;
(statearr_12850_12876[(1)] = (13));

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
});})(c__12180__auto___12862,tc,fc))
;
return ((function (switch__12066__auto__,c__12180__auto___12862,tc,fc){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_12854 = [null,null,null,null,null,null,null,null,null];
(statearr_12854[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_12854[(1)] = (1));

return statearr_12854;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_12833){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12833);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12855){if((e12855 instanceof Object)){
var ex__12070__auto__ = e12855;
var statearr_12856_12877 = state_12833;
(statearr_12856_12877[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12833);

return cljs.core.cst$kw$recur;
} else {
throw e12855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12878 = state_12833;
state_12833 = G__12878;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___12862,tc,fc))
})();
var state__12182__auto__ = (function (){var statearr_12857 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___12862);

return statearr_12857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___12862,tc,fc))
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
var c__12180__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto__){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto__){
return (function (state_12942){
var state_val_12943 = (state_12942[(1)]);
if((state_val_12943 === (7))){
var inst_12938 = (state_12942[(2)]);
var state_12942__$1 = state_12942;
var statearr_12944_12965 = state_12942__$1;
(statearr_12944_12965[(2)] = inst_12938);

(statearr_12944_12965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (1))){
var inst_12922 = init;
var state_12942__$1 = (function (){var statearr_12945 = state_12942;
(statearr_12945[(7)] = inst_12922);

return statearr_12945;
})();
var statearr_12946_12966 = state_12942__$1;
(statearr_12946_12966[(2)] = null);

(statearr_12946_12966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (4))){
var inst_12925 = (state_12942[(8)]);
var inst_12925__$1 = (state_12942[(2)]);
var inst_12926 = (inst_12925__$1 == null);
var state_12942__$1 = (function (){var statearr_12947 = state_12942;
(statearr_12947[(8)] = inst_12925__$1);

return statearr_12947;
})();
if(cljs.core.truth_(inst_12926)){
var statearr_12948_12967 = state_12942__$1;
(statearr_12948_12967[(1)] = (5));

} else {
var statearr_12949_12968 = state_12942__$1;
(statearr_12949_12968[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (6))){
var inst_12929 = (state_12942[(9)]);
var inst_12922 = (state_12942[(7)]);
var inst_12925 = (state_12942[(8)]);
var inst_12929__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12922,inst_12925) : f.call(null,inst_12922,inst_12925));
var inst_12930 = cljs.core.reduced_QMARK_(inst_12929__$1);
var state_12942__$1 = (function (){var statearr_12950 = state_12942;
(statearr_12950[(9)] = inst_12929__$1);

return statearr_12950;
})();
if(inst_12930){
var statearr_12951_12969 = state_12942__$1;
(statearr_12951_12969[(1)] = (8));

} else {
var statearr_12952_12970 = state_12942__$1;
(statearr_12952_12970[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (3))){
var inst_12940 = (state_12942[(2)]);
var state_12942__$1 = state_12942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12942__$1,inst_12940);
} else {
if((state_val_12943 === (2))){
var state_12942__$1 = state_12942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12942__$1,(4),ch);
} else {
if((state_val_12943 === (9))){
var inst_12929 = (state_12942[(9)]);
var inst_12922 = inst_12929;
var state_12942__$1 = (function (){var statearr_12953 = state_12942;
(statearr_12953[(7)] = inst_12922);

return statearr_12953;
})();
var statearr_12954_12971 = state_12942__$1;
(statearr_12954_12971[(2)] = null);

(statearr_12954_12971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (5))){
var inst_12922 = (state_12942[(7)]);
var state_12942__$1 = state_12942;
var statearr_12955_12972 = state_12942__$1;
(statearr_12955_12972[(2)] = inst_12922);

(statearr_12955_12972[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (10))){
var inst_12936 = (state_12942[(2)]);
var state_12942__$1 = state_12942;
var statearr_12956_12973 = state_12942__$1;
(statearr_12956_12973[(2)] = inst_12936);

(statearr_12956_12973[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12943 === (8))){
var inst_12929 = (state_12942[(9)]);
var inst_12932 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_12929) : cljs.core.deref.call(null,inst_12929));
var state_12942__$1 = state_12942;
var statearr_12957_12974 = state_12942__$1;
(statearr_12957_12974[(2)] = inst_12932);

(statearr_12957_12974[(1)] = (10));


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
});})(c__12180__auto__))
;
return ((function (switch__12066__auto__,c__12180__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12067__auto____0 = (function (){
var statearr_12961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12961[(0)] = cljs$core$async$reduce_$_state_machine__12067__auto__);

(statearr_12961[(1)] = (1));

return statearr_12961;
});
var cljs$core$async$reduce_$_state_machine__12067__auto____1 = (function (state_12942){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_12942);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e12962){if((e12962 instanceof Object)){
var ex__12070__auto__ = e12962;
var statearr_12963_12975 = state_12942;
(statearr_12963_12975[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12942);

return cljs.core.cst$kw$recur;
} else {
throw e12962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__12976 = state_12942;
state_12942 = G__12976;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12067__auto__ = function(state_12942){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12067__auto____1.call(this,state_12942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12067__auto____0;
cljs$core$async$reduce_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12067__auto____1;
return cljs$core$async$reduce_$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto__))
})();
var state__12182__auto__ = (function (){var statearr_12964 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_12964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto__);

return statearr_12964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto__))
);

return c__12180__auto__;
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
var args12977 = [];
var len__5726__auto___13029 = arguments.length;
var i__5727__auto___13030 = (0);
while(true){
if((i__5727__auto___13030 < len__5726__auto___13029)){
args12977.push((arguments[i__5727__auto___13030]));

var G__13031 = (i__5727__auto___13030 + (1));
i__5727__auto___13030 = G__13031;
continue;
} else {
}
break;
}

var G__12979 = args12977.length;
switch (G__12979) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12977.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12180__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto__){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto__){
return (function (state_13004){
var state_val_13005 = (state_13004[(1)]);
if((state_val_13005 === (7))){
var inst_12986 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13006_13033 = state_13004__$1;
(statearr_13006_13033[(2)] = inst_12986);

(statearr_13006_13033[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (1))){
var inst_12980 = cljs.core.seq(coll);
var inst_12981 = inst_12980;
var state_13004__$1 = (function (){var statearr_13007 = state_13004;
(statearr_13007[(7)] = inst_12981);

return statearr_13007;
})();
var statearr_13008_13034 = state_13004__$1;
(statearr_13008_13034[(2)] = null);

(statearr_13008_13034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (4))){
var inst_12981 = (state_13004[(7)]);
var inst_12984 = cljs.core.first(inst_12981);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13004__$1,(7),ch,inst_12984);
} else {
if((state_val_13005 === (13))){
var inst_12998 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13009_13035 = state_13004__$1;
(statearr_13009_13035[(2)] = inst_12998);

(statearr_13009_13035[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (6))){
var inst_12989 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
if(cljs.core.truth_(inst_12989)){
var statearr_13010_13036 = state_13004__$1;
(statearr_13010_13036[(1)] = (8));

} else {
var statearr_13011_13037 = state_13004__$1;
(statearr_13011_13037[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (3))){
var inst_13002 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13004__$1,inst_13002);
} else {
if((state_val_13005 === (12))){
var state_13004__$1 = state_13004;
var statearr_13012_13038 = state_13004__$1;
(statearr_13012_13038[(2)] = null);

(statearr_13012_13038[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (2))){
var inst_12981 = (state_13004[(7)]);
var state_13004__$1 = state_13004;
if(cljs.core.truth_(inst_12981)){
var statearr_13013_13039 = state_13004__$1;
(statearr_13013_13039[(1)] = (4));

} else {
var statearr_13014_13040 = state_13004__$1;
(statearr_13014_13040[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (11))){
var inst_12995 = cljs.core.async.close_BANG_(ch);
var state_13004__$1 = state_13004;
var statearr_13015_13041 = state_13004__$1;
(statearr_13015_13041[(2)] = inst_12995);

(statearr_13015_13041[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (9))){
var state_13004__$1 = state_13004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13016_13042 = state_13004__$1;
(statearr_13016_13042[(1)] = (11));

} else {
var statearr_13017_13043 = state_13004__$1;
(statearr_13017_13043[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (5))){
var inst_12981 = (state_13004[(7)]);
var state_13004__$1 = state_13004;
var statearr_13018_13044 = state_13004__$1;
(statearr_13018_13044[(2)] = inst_12981);

(statearr_13018_13044[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (10))){
var inst_13000 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13019_13045 = state_13004__$1;
(statearr_13019_13045[(2)] = inst_13000);

(statearr_13019_13045[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13005 === (8))){
var inst_12981 = (state_13004[(7)]);
var inst_12991 = cljs.core.next(inst_12981);
var inst_12981__$1 = inst_12991;
var state_13004__$1 = (function (){var statearr_13020 = state_13004;
(statearr_13020[(7)] = inst_12981__$1);

return statearr_13020;
})();
var statearr_13021_13046 = state_13004__$1;
(statearr_13021_13046[(2)] = null);

(statearr_13021_13046[(1)] = (2));


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
});})(c__12180__auto__))
;
return ((function (switch__12066__auto__,c__12180__auto__){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_13025 = [null,null,null,null,null,null,null,null];
(statearr_13025[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_13025[(1)] = (1));

return statearr_13025;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_13004){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_13004);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e13026){if((e13026 instanceof Object)){
var ex__12070__auto__ = e13026;
var statearr_13027_13047 = state_13004;
(statearr_13027_13047[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13004);

return cljs.core.cst$kw$recur;
} else {
throw e13026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__13048 = state_13004;
state_13004 = G__13048;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_13004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_13004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto__))
})();
var state__12182__auto__ = (function (){var statearr_13028 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_13028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto__);

return statearr_13028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto__))
);

return c__12180__auto__;
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
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto__.call(null,_));
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5324__auto____$1.call(null,_));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5324__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
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
var cs = (function (){var G__13273 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13273) : cljs.core.atom.call(null,G__13273));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13274 = (function (mult,ch,cs,meta13275){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13275 = meta13275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13276,meta13275__$1){
var self__ = this;
var _13276__$1 = this;
return (new cljs.core.async.t_cljs$core$async13274(self__.mult,self__.ch,self__.cs,meta13275__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13276){
var self__ = this;
var _13276__$1 = this;
return self__.meta13275;
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13277_13497 = self__.cs;
var G__13278_13498 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13277_13497,G__13278_13498) : cljs.core.reset_BANG_.call(null,G__13277_13497,G__13278_13498));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta13275], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13274";

cljs.core.async.t_cljs$core$async13274.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13274");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13274 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13274(mult__$1,ch__$1,cs__$1,meta13275){
return (new cljs.core.async.t_cljs$core$async13274(mult__$1,ch__$1,cs__$1,meta13275));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13274(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12180__auto___13499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___13499,cs,m,dchan,dctr,done){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___13499,cs,m,dchan,dctr,done){
return (function (state_13409){
var state_val_13410 = (state_13409[(1)]);
if((state_val_13410 === (7))){
var inst_13405 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13411_13500 = state_13409__$1;
(statearr_13411_13500[(2)] = inst_13405);

(statearr_13411_13500[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (20))){
var inst_13310 = (state_13409[(7)]);
var inst_13320 = cljs.core.first(inst_13310);
var inst_13321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13320,(0),null);
var inst_13322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13320,(1),null);
var state_13409__$1 = (function (){var statearr_13412 = state_13409;
(statearr_13412[(8)] = inst_13321);

return statearr_13412;
})();
if(cljs.core.truth_(inst_13322)){
var statearr_13413_13501 = state_13409__$1;
(statearr_13413_13501[(1)] = (22));

} else {
var statearr_13414_13502 = state_13409__$1;
(statearr_13414_13502[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (27))){
var inst_13281 = (state_13409[(9)]);
var inst_13350 = (state_13409[(10)]);
var inst_13352 = (state_13409[(11)]);
var inst_13357 = (state_13409[(12)]);
var inst_13357__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13350,inst_13352);
var inst_13358 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13357__$1,inst_13281,done);
var state_13409__$1 = (function (){var statearr_13415 = state_13409;
(statearr_13415[(12)] = inst_13357__$1);

return statearr_13415;
})();
if(cljs.core.truth_(inst_13358)){
var statearr_13416_13503 = state_13409__$1;
(statearr_13416_13503[(1)] = (30));

} else {
var statearr_13417_13504 = state_13409__$1;
(statearr_13417_13504[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (1))){
var state_13409__$1 = state_13409;
var statearr_13418_13505 = state_13409__$1;
(statearr_13418_13505[(2)] = null);

(statearr_13418_13505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (24))){
var inst_13310 = (state_13409[(7)]);
var inst_13327 = (state_13409[(2)]);
var inst_13328 = cljs.core.next(inst_13310);
var inst_13290 = inst_13328;
var inst_13291 = null;
var inst_13292 = (0);
var inst_13293 = (0);
var state_13409__$1 = (function (){var statearr_13419 = state_13409;
(statearr_13419[(13)] = inst_13293);

(statearr_13419[(14)] = inst_13291);

(statearr_13419[(15)] = inst_13290);

(statearr_13419[(16)] = inst_13327);

(statearr_13419[(17)] = inst_13292);

return statearr_13419;
})();
var statearr_13420_13506 = state_13409__$1;
(statearr_13420_13506[(2)] = null);

(statearr_13420_13506[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (39))){
var state_13409__$1 = state_13409;
var statearr_13424_13507 = state_13409__$1;
(statearr_13424_13507[(2)] = null);

(statearr_13424_13507[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (4))){
var inst_13281 = (state_13409[(9)]);
var inst_13281__$1 = (state_13409[(2)]);
var inst_13282 = (inst_13281__$1 == null);
var state_13409__$1 = (function (){var statearr_13425 = state_13409;
(statearr_13425[(9)] = inst_13281__$1);

return statearr_13425;
})();
if(cljs.core.truth_(inst_13282)){
var statearr_13426_13508 = state_13409__$1;
(statearr_13426_13508[(1)] = (5));

} else {
var statearr_13427_13509 = state_13409__$1;
(statearr_13427_13509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (15))){
var inst_13293 = (state_13409[(13)]);
var inst_13291 = (state_13409[(14)]);
var inst_13290 = (state_13409[(15)]);
var inst_13292 = (state_13409[(17)]);
var inst_13306 = (state_13409[(2)]);
var inst_13307 = (inst_13293 + (1));
var tmp13421 = inst_13291;
var tmp13422 = inst_13290;
var tmp13423 = inst_13292;
var inst_13290__$1 = tmp13422;
var inst_13291__$1 = tmp13421;
var inst_13292__$1 = tmp13423;
var inst_13293__$1 = inst_13307;
var state_13409__$1 = (function (){var statearr_13428 = state_13409;
(statearr_13428[(13)] = inst_13293__$1);

(statearr_13428[(14)] = inst_13291__$1);

(statearr_13428[(15)] = inst_13290__$1);

(statearr_13428[(18)] = inst_13306);

(statearr_13428[(17)] = inst_13292__$1);

return statearr_13428;
})();
var statearr_13429_13510 = state_13409__$1;
(statearr_13429_13510[(2)] = null);

(statearr_13429_13510[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (21))){
var inst_13331 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13433_13511 = state_13409__$1;
(statearr_13433_13511[(2)] = inst_13331);

(statearr_13433_13511[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (31))){
var inst_13357 = (state_13409[(12)]);
var inst_13361 = done(null);
var inst_13362 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13357);
var state_13409__$1 = (function (){var statearr_13434 = state_13409;
(statearr_13434[(19)] = inst_13361);

return statearr_13434;
})();
var statearr_13435_13512 = state_13409__$1;
(statearr_13435_13512[(2)] = inst_13362);

(statearr_13435_13512[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (32))){
var inst_13349 = (state_13409[(20)]);
var inst_13351 = (state_13409[(21)]);
var inst_13350 = (state_13409[(10)]);
var inst_13352 = (state_13409[(11)]);
var inst_13364 = (state_13409[(2)]);
var inst_13365 = (inst_13352 + (1));
var tmp13430 = inst_13349;
var tmp13431 = inst_13351;
var tmp13432 = inst_13350;
var inst_13349__$1 = tmp13430;
var inst_13350__$1 = tmp13432;
var inst_13351__$1 = tmp13431;
var inst_13352__$1 = inst_13365;
var state_13409__$1 = (function (){var statearr_13436 = state_13409;
(statearr_13436[(20)] = inst_13349__$1);

(statearr_13436[(21)] = inst_13351__$1);

(statearr_13436[(10)] = inst_13350__$1);

(statearr_13436[(11)] = inst_13352__$1);

(statearr_13436[(22)] = inst_13364);

return statearr_13436;
})();
var statearr_13437_13513 = state_13409__$1;
(statearr_13437_13513[(2)] = null);

(statearr_13437_13513[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (40))){
var inst_13377 = (state_13409[(23)]);
var inst_13381 = done(null);
var inst_13382 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13377);
var state_13409__$1 = (function (){var statearr_13438 = state_13409;
(statearr_13438[(24)] = inst_13381);

return statearr_13438;
})();
var statearr_13439_13514 = state_13409__$1;
(statearr_13439_13514[(2)] = inst_13382);

(statearr_13439_13514[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (33))){
var inst_13368 = (state_13409[(25)]);
var inst_13370 = cljs.core.chunked_seq_QMARK_(inst_13368);
var state_13409__$1 = state_13409;
if(inst_13370){
var statearr_13440_13515 = state_13409__$1;
(statearr_13440_13515[(1)] = (36));

} else {
var statearr_13441_13516 = state_13409__$1;
(statearr_13441_13516[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (13))){
var inst_13300 = (state_13409[(26)]);
var inst_13303 = cljs.core.async.close_BANG_(inst_13300);
var state_13409__$1 = state_13409;
var statearr_13442_13517 = state_13409__$1;
(statearr_13442_13517[(2)] = inst_13303);

(statearr_13442_13517[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (22))){
var inst_13321 = (state_13409[(8)]);
var inst_13324 = cljs.core.async.close_BANG_(inst_13321);
var state_13409__$1 = state_13409;
var statearr_13443_13518 = state_13409__$1;
(statearr_13443_13518[(2)] = inst_13324);

(statearr_13443_13518[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (36))){
var inst_13368 = (state_13409[(25)]);
var inst_13372 = cljs.core.chunk_first(inst_13368);
var inst_13373 = cljs.core.chunk_rest(inst_13368);
var inst_13374 = cljs.core.count(inst_13372);
var inst_13349 = inst_13373;
var inst_13350 = inst_13372;
var inst_13351 = inst_13374;
var inst_13352 = (0);
var state_13409__$1 = (function (){var statearr_13444 = state_13409;
(statearr_13444[(20)] = inst_13349);

(statearr_13444[(21)] = inst_13351);

(statearr_13444[(10)] = inst_13350);

(statearr_13444[(11)] = inst_13352);

return statearr_13444;
})();
var statearr_13445_13519 = state_13409__$1;
(statearr_13445_13519[(2)] = null);

(statearr_13445_13519[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (41))){
var inst_13368 = (state_13409[(25)]);
var inst_13384 = (state_13409[(2)]);
var inst_13385 = cljs.core.next(inst_13368);
var inst_13349 = inst_13385;
var inst_13350 = null;
var inst_13351 = (0);
var inst_13352 = (0);
var state_13409__$1 = (function (){var statearr_13446 = state_13409;
(statearr_13446[(27)] = inst_13384);

(statearr_13446[(20)] = inst_13349);

(statearr_13446[(21)] = inst_13351);

(statearr_13446[(10)] = inst_13350);

(statearr_13446[(11)] = inst_13352);

return statearr_13446;
})();
var statearr_13447_13520 = state_13409__$1;
(statearr_13447_13520[(2)] = null);

(statearr_13447_13520[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (43))){
var state_13409__$1 = state_13409;
var statearr_13448_13521 = state_13409__$1;
(statearr_13448_13521[(2)] = null);

(statearr_13448_13521[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (29))){
var inst_13393 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13449_13522 = state_13409__$1;
(statearr_13449_13522[(2)] = inst_13393);

(statearr_13449_13522[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (44))){
var inst_13402 = (state_13409[(2)]);
var state_13409__$1 = (function (){var statearr_13450 = state_13409;
(statearr_13450[(28)] = inst_13402);

return statearr_13450;
})();
var statearr_13451_13523 = state_13409__$1;
(statearr_13451_13523[(2)] = null);

(statearr_13451_13523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (6))){
var inst_13341 = (state_13409[(29)]);
var inst_13340 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_13341__$1 = cljs.core.keys(inst_13340);
var inst_13342 = cljs.core.count(inst_13341__$1);
var inst_13343 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_13342) : cljs.core.reset_BANG_.call(null,dctr,inst_13342));
var inst_13348 = cljs.core.seq(inst_13341__$1);
var inst_13349 = inst_13348;
var inst_13350 = null;
var inst_13351 = (0);
var inst_13352 = (0);
var state_13409__$1 = (function (){var statearr_13452 = state_13409;
(statearr_13452[(20)] = inst_13349);

(statearr_13452[(21)] = inst_13351);

(statearr_13452[(29)] = inst_13341__$1);

(statearr_13452[(30)] = inst_13343);

(statearr_13452[(10)] = inst_13350);

(statearr_13452[(11)] = inst_13352);

return statearr_13452;
})();
var statearr_13453_13524 = state_13409__$1;
(statearr_13453_13524[(2)] = null);

(statearr_13453_13524[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (28))){
var inst_13349 = (state_13409[(20)]);
var inst_13368 = (state_13409[(25)]);
var inst_13368__$1 = cljs.core.seq(inst_13349);
var state_13409__$1 = (function (){var statearr_13454 = state_13409;
(statearr_13454[(25)] = inst_13368__$1);

return statearr_13454;
})();
if(inst_13368__$1){
var statearr_13455_13525 = state_13409__$1;
(statearr_13455_13525[(1)] = (33));

} else {
var statearr_13456_13526 = state_13409__$1;
(statearr_13456_13526[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (25))){
var inst_13351 = (state_13409[(21)]);
var inst_13352 = (state_13409[(11)]);
var inst_13354 = (inst_13352 < inst_13351);
var inst_13355 = inst_13354;
var state_13409__$1 = state_13409;
if(cljs.core.truth_(inst_13355)){
var statearr_13457_13527 = state_13409__$1;
(statearr_13457_13527[(1)] = (27));

} else {
var statearr_13458_13528 = state_13409__$1;
(statearr_13458_13528[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (34))){
var state_13409__$1 = state_13409;
var statearr_13459_13529 = state_13409__$1;
(statearr_13459_13529[(2)] = null);

(statearr_13459_13529[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (17))){
var state_13409__$1 = state_13409;
var statearr_13460_13530 = state_13409__$1;
(statearr_13460_13530[(2)] = null);

(statearr_13460_13530[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (3))){
var inst_13407 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13409__$1,inst_13407);
} else {
if((state_val_13410 === (12))){
var inst_13336 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13461_13531 = state_13409__$1;
(statearr_13461_13531[(2)] = inst_13336);

(statearr_13461_13531[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (2))){
var state_13409__$1 = state_13409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13409__$1,(4),ch);
} else {
if((state_val_13410 === (23))){
var state_13409__$1 = state_13409;
var statearr_13462_13532 = state_13409__$1;
(statearr_13462_13532[(2)] = null);

(statearr_13462_13532[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (35))){
var inst_13391 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13463_13533 = state_13409__$1;
(statearr_13463_13533[(2)] = inst_13391);

(statearr_13463_13533[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (19))){
var inst_13310 = (state_13409[(7)]);
var inst_13314 = cljs.core.chunk_first(inst_13310);
var inst_13315 = cljs.core.chunk_rest(inst_13310);
var inst_13316 = cljs.core.count(inst_13314);
var inst_13290 = inst_13315;
var inst_13291 = inst_13314;
var inst_13292 = inst_13316;
var inst_13293 = (0);
var state_13409__$1 = (function (){var statearr_13464 = state_13409;
(statearr_13464[(13)] = inst_13293);

(statearr_13464[(14)] = inst_13291);

(statearr_13464[(15)] = inst_13290);

(statearr_13464[(17)] = inst_13292);

return statearr_13464;
})();
var statearr_13465_13534 = state_13409__$1;
(statearr_13465_13534[(2)] = null);

(statearr_13465_13534[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (11))){
var inst_13290 = (state_13409[(15)]);
var inst_13310 = (state_13409[(7)]);
var inst_13310__$1 = cljs.core.seq(inst_13290);
var state_13409__$1 = (function (){var statearr_13466 = state_13409;
(statearr_13466[(7)] = inst_13310__$1);

return statearr_13466;
})();
if(inst_13310__$1){
var statearr_13467_13535 = state_13409__$1;
(statearr_13467_13535[(1)] = (16));

} else {
var statearr_13468_13536 = state_13409__$1;
(statearr_13468_13536[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (9))){
var inst_13338 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13469_13537 = state_13409__$1;
(statearr_13469_13537[(2)] = inst_13338);

(statearr_13469_13537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (5))){
var inst_13288 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_13289 = cljs.core.seq(inst_13288);
var inst_13290 = inst_13289;
var inst_13291 = null;
var inst_13292 = (0);
var inst_13293 = (0);
var state_13409__$1 = (function (){var statearr_13470 = state_13409;
(statearr_13470[(13)] = inst_13293);

(statearr_13470[(14)] = inst_13291);

(statearr_13470[(15)] = inst_13290);

(statearr_13470[(17)] = inst_13292);

return statearr_13470;
})();
var statearr_13471_13538 = state_13409__$1;
(statearr_13471_13538[(2)] = null);

(statearr_13471_13538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (14))){
var state_13409__$1 = state_13409;
var statearr_13472_13539 = state_13409__$1;
(statearr_13472_13539[(2)] = null);

(statearr_13472_13539[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (45))){
var inst_13399 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13473_13540 = state_13409__$1;
(statearr_13473_13540[(2)] = inst_13399);

(statearr_13473_13540[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (26))){
var inst_13341 = (state_13409[(29)]);
var inst_13395 = (state_13409[(2)]);
var inst_13396 = cljs.core.seq(inst_13341);
var state_13409__$1 = (function (){var statearr_13474 = state_13409;
(statearr_13474[(31)] = inst_13395);

return statearr_13474;
})();
if(inst_13396){
var statearr_13475_13541 = state_13409__$1;
(statearr_13475_13541[(1)] = (42));

} else {
var statearr_13476_13542 = state_13409__$1;
(statearr_13476_13542[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (16))){
var inst_13310 = (state_13409[(7)]);
var inst_13312 = cljs.core.chunked_seq_QMARK_(inst_13310);
var state_13409__$1 = state_13409;
if(inst_13312){
var statearr_13477_13543 = state_13409__$1;
(statearr_13477_13543[(1)] = (19));

} else {
var statearr_13478_13544 = state_13409__$1;
(statearr_13478_13544[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (38))){
var inst_13388 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13479_13545 = state_13409__$1;
(statearr_13479_13545[(2)] = inst_13388);

(statearr_13479_13545[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (30))){
var state_13409__$1 = state_13409;
var statearr_13480_13546 = state_13409__$1;
(statearr_13480_13546[(2)] = null);

(statearr_13480_13546[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (10))){
var inst_13293 = (state_13409[(13)]);
var inst_13291 = (state_13409[(14)]);
var inst_13299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13291,inst_13293);
var inst_13300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13299,(0),null);
var inst_13301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13299,(1),null);
var state_13409__$1 = (function (){var statearr_13481 = state_13409;
(statearr_13481[(26)] = inst_13300);

return statearr_13481;
})();
if(cljs.core.truth_(inst_13301)){
var statearr_13482_13547 = state_13409__$1;
(statearr_13482_13547[(1)] = (13));

} else {
var statearr_13483_13548 = state_13409__$1;
(statearr_13483_13548[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (18))){
var inst_13334 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13484_13549 = state_13409__$1;
(statearr_13484_13549[(2)] = inst_13334);

(statearr_13484_13549[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (42))){
var state_13409__$1 = state_13409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13409__$1,(45),dchan);
} else {
if((state_val_13410 === (37))){
var inst_13377 = (state_13409[(23)]);
var inst_13281 = (state_13409[(9)]);
var inst_13368 = (state_13409[(25)]);
var inst_13377__$1 = cljs.core.first(inst_13368);
var inst_13378 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13377__$1,inst_13281,done);
var state_13409__$1 = (function (){var statearr_13485 = state_13409;
(statearr_13485[(23)] = inst_13377__$1);

return statearr_13485;
})();
if(cljs.core.truth_(inst_13378)){
var statearr_13486_13550 = state_13409__$1;
(statearr_13486_13550[(1)] = (39));

} else {
var statearr_13487_13551 = state_13409__$1;
(statearr_13487_13551[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13410 === (8))){
var inst_13293 = (state_13409[(13)]);
var inst_13292 = (state_13409[(17)]);
var inst_13295 = (inst_13293 < inst_13292);
var inst_13296 = inst_13295;
var state_13409__$1 = state_13409;
if(cljs.core.truth_(inst_13296)){
var statearr_13488_13552 = state_13409__$1;
(statearr_13488_13552[(1)] = (10));

} else {
var statearr_13489_13553 = state_13409__$1;
(statearr_13489_13553[(1)] = (11));

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
});})(c__12180__auto___13499,cs,m,dchan,dctr,done))
;
return ((function (switch__12066__auto__,c__12180__auto___13499,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12067__auto__ = null;
var cljs$core$async$mult_$_state_machine__12067__auto____0 = (function (){
var statearr_13493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13493[(0)] = cljs$core$async$mult_$_state_machine__12067__auto__);

(statearr_13493[(1)] = (1));

return statearr_13493;
});
var cljs$core$async$mult_$_state_machine__12067__auto____1 = (function (state_13409){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_13409);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e13494){if((e13494 instanceof Object)){
var ex__12070__auto__ = e13494;
var statearr_13495_13554 = state_13409;
(statearr_13495_13554[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13409);

return cljs.core.cst$kw$recur;
} else {
throw e13494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__13555 = state_13409;
state_13409 = G__13555;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12067__auto__ = function(state_13409){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12067__auto____1.call(this,state_13409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12067__auto____0;
cljs$core$async$mult_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12067__auto____1;
return cljs$core$async$mult_$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___13499,cs,m,dchan,dctr,done))
})();
var state__12182__auto__ = (function (){var statearr_13496 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_13496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___13499);

return statearr_13496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___13499,cs,m,dchan,dctr,done))
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
var args13556 = [];
var len__5726__auto___13559 = arguments.length;
var i__5727__auto___13560 = (0);
while(true){
if((i__5727__auto___13560 < len__5726__auto___13559)){
args13556.push((arguments[i__5727__auto___13560]));

var G__13561 = (i__5727__auto___13560 + (1));
i__5727__auto___13560 = G__13561;
continue;
} else {
}
break;
}

var G__13558 = args13556.length;
switch (G__13558) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13556.length)].join('')));

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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto__.call(null,m,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5324__auto____$1.call(null,m,ch));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto__.call(null,m));
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5324__auto____$1.call(null,m));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto__.call(null,m,state_map));
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5324__auto____$1.call(null,m,state_map));
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
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto__.call(null,m,mode));
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5324__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___13573 = arguments.length;
var i__5727__auto___13574 = (0);
while(true){
if((i__5727__auto___13574 < len__5726__auto___13573)){
args__5733__auto__.push((arguments[i__5727__auto___13574]));

var G__13575 = (i__5727__auto___13574 + (1));
i__5727__auto___13574 = G__13575;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13567){
var map__13568 = p__13567;
var map__13568__$1 = ((((!((map__13568 == null)))?((((map__13568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13568):map__13568);
var opts = map__13568__$1;
var statearr_13570_13576 = state;
(statearr_13570_13576[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__13568,map__13568__$1,opts){
return (function (val){
var statearr_13571_13577 = state;
(statearr_13571_13577[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__13568,map__13568__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13572_13578 = state;
(statearr_13572_13578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13563){
var G__13564 = cljs.core.first(seq13563);
var seq13563__$1 = cljs.core.next(seq13563);
var G__13565 = cljs.core.first(seq13563__$1);
var seq13563__$2 = cljs.core.next(seq13563__$1);
var G__13566 = cljs.core.first(seq13563__$2);
var seq13563__$3 = cljs.core.next(seq13563__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13564,G__13565,G__13566,seq13563__$3);
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
var cs = (function (){var G__13745 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13745) : cljs.core.atom.call(null,G__13745));
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
if(typeof cljs.core.async.t_cljs$core$async13746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13746 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13747){
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
this.meta13747 = meta13747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13748,meta13747__$1){
var self__ = this;
var _13748__$1 = this;
return (new cljs.core.async.t_cljs$core$async13746(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13747__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13748){
var self__ = this;
var _13748__$1 = this;
return self__.meta13747;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13749_13911 = self__.cs;
var G__13750_13912 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13749_13911,G__13750_13912) : cljs.core.reset_BANG_.call(null,G__13749_13911,G__13750_13912));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13746.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta13747], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13746";

cljs.core.async.t_cljs$core$async13746.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13746");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13746 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13746(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13747){
return (new cljs.core.async.t_cljs$core$async13746(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13747));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13746(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12180__auto___13913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13848){
var state_val_13849 = (state_13848[(1)]);
if((state_val_13849 === (7))){
var inst_13766 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13850_13914 = state_13848__$1;
(statearr_13850_13914[(2)] = inst_13766);

(statearr_13850_13914[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (20))){
var inst_13778 = (state_13848[(7)]);
var state_13848__$1 = state_13848;
var statearr_13851_13915 = state_13848__$1;
(statearr_13851_13915[(2)] = inst_13778);

(statearr_13851_13915[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (27))){
var state_13848__$1 = state_13848;
var statearr_13852_13916 = state_13848__$1;
(statearr_13852_13916[(2)] = null);

(statearr_13852_13916[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (1))){
var inst_13754 = (state_13848[(8)]);
var inst_13754__$1 = calc_state();
var inst_13756 = (inst_13754__$1 == null);
var inst_13757 = cljs.core.not(inst_13756);
var state_13848__$1 = (function (){var statearr_13853 = state_13848;
(statearr_13853[(8)] = inst_13754__$1);

return statearr_13853;
})();
if(inst_13757){
var statearr_13854_13917 = state_13848__$1;
(statearr_13854_13917[(1)] = (2));

} else {
var statearr_13855_13918 = state_13848__$1;
(statearr_13855_13918[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (24))){
var inst_13801 = (state_13848[(9)]);
var inst_13808 = (state_13848[(10)]);
var inst_13822 = (state_13848[(11)]);
var inst_13822__$1 = (inst_13801.cljs$core$IFn$_invoke$arity$1 ? inst_13801.cljs$core$IFn$_invoke$arity$1(inst_13808) : inst_13801.call(null,inst_13808));
var state_13848__$1 = (function (){var statearr_13856 = state_13848;
(statearr_13856[(11)] = inst_13822__$1);

return statearr_13856;
})();
if(cljs.core.truth_(inst_13822__$1)){
var statearr_13857_13919 = state_13848__$1;
(statearr_13857_13919[(1)] = (29));

} else {
var statearr_13858_13920 = state_13848__$1;
(statearr_13858_13920[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (4))){
var inst_13769 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13769)){
var statearr_13859_13921 = state_13848__$1;
(statearr_13859_13921[(1)] = (8));

} else {
var statearr_13860_13922 = state_13848__$1;
(statearr_13860_13922[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (15))){
var inst_13795 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13795)){
var statearr_13861_13923 = state_13848__$1;
(statearr_13861_13923[(1)] = (19));

} else {
var statearr_13862_13924 = state_13848__$1;
(statearr_13862_13924[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (21))){
var inst_13800 = (state_13848[(12)]);
var inst_13800__$1 = (state_13848[(2)]);
var inst_13801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13800__$1,cljs.core.cst$kw$solos);
var inst_13802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13800__$1,cljs.core.cst$kw$mutes);
var inst_13803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13800__$1,cljs.core.cst$kw$reads);
var state_13848__$1 = (function (){var statearr_13863 = state_13848;
(statearr_13863[(9)] = inst_13801);

(statearr_13863[(13)] = inst_13802);

(statearr_13863[(12)] = inst_13800__$1);

return statearr_13863;
})();
return cljs.core.async.ioc_alts_BANG_(state_13848__$1,(22),inst_13803);
} else {
if((state_val_13849 === (31))){
var inst_13830 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13830)){
var statearr_13864_13925 = state_13848__$1;
(statearr_13864_13925[(1)] = (32));

} else {
var statearr_13865_13926 = state_13848__$1;
(statearr_13865_13926[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (32))){
var inst_13807 = (state_13848[(14)]);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13848__$1,(35),out,inst_13807);
} else {
if((state_val_13849 === (33))){
var inst_13800 = (state_13848[(12)]);
var inst_13778 = inst_13800;
var state_13848__$1 = (function (){var statearr_13866 = state_13848;
(statearr_13866[(7)] = inst_13778);

return statearr_13866;
})();
var statearr_13867_13927 = state_13848__$1;
(statearr_13867_13927[(2)] = null);

(statearr_13867_13927[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (13))){
var inst_13778 = (state_13848[(7)]);
var inst_13785 = inst_13778.cljs$lang$protocol_mask$partition0$;
var inst_13786 = (inst_13785 & (64));
var inst_13787 = inst_13778.cljs$core$ISeq$;
var inst_13788 = (inst_13786) || (inst_13787);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13788)){
var statearr_13868_13928 = state_13848__$1;
(statearr_13868_13928[(1)] = (16));

} else {
var statearr_13869_13929 = state_13848__$1;
(statearr_13869_13929[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (22))){
var inst_13808 = (state_13848[(10)]);
var inst_13807 = (state_13848[(14)]);
var inst_13806 = (state_13848[(2)]);
var inst_13807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13806,(0),null);
var inst_13808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13806,(1),null);
var inst_13809 = (inst_13807__$1 == null);
var inst_13810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13808__$1,change);
var inst_13811 = (inst_13809) || (inst_13810);
var state_13848__$1 = (function (){var statearr_13870 = state_13848;
(statearr_13870[(10)] = inst_13808__$1);

(statearr_13870[(14)] = inst_13807__$1);

return statearr_13870;
})();
if(cljs.core.truth_(inst_13811)){
var statearr_13871_13930 = state_13848__$1;
(statearr_13871_13930[(1)] = (23));

} else {
var statearr_13872_13931 = state_13848__$1;
(statearr_13872_13931[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (36))){
var inst_13800 = (state_13848[(12)]);
var inst_13778 = inst_13800;
var state_13848__$1 = (function (){var statearr_13873 = state_13848;
(statearr_13873[(7)] = inst_13778);

return statearr_13873;
})();
var statearr_13874_13932 = state_13848__$1;
(statearr_13874_13932[(2)] = null);

(statearr_13874_13932[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (29))){
var inst_13822 = (state_13848[(11)]);
var state_13848__$1 = state_13848;
var statearr_13875_13933 = state_13848__$1;
(statearr_13875_13933[(2)] = inst_13822);

(statearr_13875_13933[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (6))){
var state_13848__$1 = state_13848;
var statearr_13876_13934 = state_13848__$1;
(statearr_13876_13934[(2)] = false);

(statearr_13876_13934[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (28))){
var inst_13818 = (state_13848[(2)]);
var inst_13819 = calc_state();
var inst_13778 = inst_13819;
var state_13848__$1 = (function (){var statearr_13877 = state_13848;
(statearr_13877[(15)] = inst_13818);

(statearr_13877[(7)] = inst_13778);

return statearr_13877;
})();
var statearr_13878_13935 = state_13848__$1;
(statearr_13878_13935[(2)] = null);

(statearr_13878_13935[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (25))){
var inst_13844 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13879_13936 = state_13848__$1;
(statearr_13879_13936[(2)] = inst_13844);

(statearr_13879_13936[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (34))){
var inst_13842 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13880_13937 = state_13848__$1;
(statearr_13880_13937[(2)] = inst_13842);

(statearr_13880_13937[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (17))){
var state_13848__$1 = state_13848;
var statearr_13881_13938 = state_13848__$1;
(statearr_13881_13938[(2)] = false);

(statearr_13881_13938[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (3))){
var state_13848__$1 = state_13848;
var statearr_13882_13939 = state_13848__$1;
(statearr_13882_13939[(2)] = false);

(statearr_13882_13939[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (12))){
var inst_13846 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13848__$1,inst_13846);
} else {
if((state_val_13849 === (2))){
var inst_13754 = (state_13848[(8)]);
var inst_13759 = inst_13754.cljs$lang$protocol_mask$partition0$;
var inst_13760 = (inst_13759 & (64));
var inst_13761 = inst_13754.cljs$core$ISeq$;
var inst_13762 = (inst_13760) || (inst_13761);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13762)){
var statearr_13883_13940 = state_13848__$1;
(statearr_13883_13940[(1)] = (5));

} else {
var statearr_13884_13941 = state_13848__$1;
(statearr_13884_13941[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (23))){
var inst_13807 = (state_13848[(14)]);
var inst_13813 = (inst_13807 == null);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13813)){
var statearr_13885_13942 = state_13848__$1;
(statearr_13885_13942[(1)] = (26));

} else {
var statearr_13886_13943 = state_13848__$1;
(statearr_13886_13943[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (35))){
var inst_13833 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
if(cljs.core.truth_(inst_13833)){
var statearr_13887_13944 = state_13848__$1;
(statearr_13887_13944[(1)] = (36));

} else {
var statearr_13888_13945 = state_13848__$1;
(statearr_13888_13945[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (19))){
var inst_13778 = (state_13848[(7)]);
var inst_13797 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13778);
var state_13848__$1 = state_13848;
var statearr_13889_13946 = state_13848__$1;
(statearr_13889_13946[(2)] = inst_13797);

(statearr_13889_13946[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (11))){
var inst_13778 = (state_13848[(7)]);
var inst_13782 = (inst_13778 == null);
var inst_13783 = cljs.core.not(inst_13782);
var state_13848__$1 = state_13848;
if(inst_13783){
var statearr_13890_13947 = state_13848__$1;
(statearr_13890_13947[(1)] = (13));

} else {
var statearr_13891_13948 = state_13848__$1;
(statearr_13891_13948[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (9))){
var inst_13754 = (state_13848[(8)]);
var state_13848__$1 = state_13848;
var statearr_13892_13949 = state_13848__$1;
(statearr_13892_13949[(2)] = inst_13754);

(statearr_13892_13949[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (5))){
var state_13848__$1 = state_13848;
var statearr_13893_13950 = state_13848__$1;
(statearr_13893_13950[(2)] = true);

(statearr_13893_13950[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (14))){
var state_13848__$1 = state_13848;
var statearr_13894_13951 = state_13848__$1;
(statearr_13894_13951[(2)] = false);

(statearr_13894_13951[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (26))){
var inst_13808 = (state_13848[(10)]);
var inst_13815 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13808);
var state_13848__$1 = state_13848;
var statearr_13895_13952 = state_13848__$1;
(statearr_13895_13952[(2)] = inst_13815);

(statearr_13895_13952[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (16))){
var state_13848__$1 = state_13848;
var statearr_13896_13953 = state_13848__$1;
(statearr_13896_13953[(2)] = true);

(statearr_13896_13953[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (38))){
var inst_13838 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13897_13954 = state_13848__$1;
(statearr_13897_13954[(2)] = inst_13838);

(statearr_13897_13954[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (30))){
var inst_13801 = (state_13848[(9)]);
var inst_13802 = (state_13848[(13)]);
var inst_13808 = (state_13848[(10)]);
var inst_13825 = cljs.core.empty_QMARK_(inst_13801);
var inst_13826 = (inst_13802.cljs$core$IFn$_invoke$arity$1 ? inst_13802.cljs$core$IFn$_invoke$arity$1(inst_13808) : inst_13802.call(null,inst_13808));
var inst_13827 = cljs.core.not(inst_13826);
var inst_13828 = (inst_13825) && (inst_13827);
var state_13848__$1 = state_13848;
var statearr_13898_13955 = state_13848__$1;
(statearr_13898_13955[(2)] = inst_13828);

(statearr_13898_13955[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (10))){
var inst_13754 = (state_13848[(8)]);
var inst_13774 = (state_13848[(2)]);
var inst_13775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13774,cljs.core.cst$kw$solos);
var inst_13776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13774,cljs.core.cst$kw$mutes);
var inst_13777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13774,cljs.core.cst$kw$reads);
var inst_13778 = inst_13754;
var state_13848__$1 = (function (){var statearr_13899 = state_13848;
(statearr_13899[(16)] = inst_13777);

(statearr_13899[(17)] = inst_13776);

(statearr_13899[(7)] = inst_13778);

(statearr_13899[(18)] = inst_13775);

return statearr_13899;
})();
var statearr_13900_13956 = state_13848__$1;
(statearr_13900_13956[(2)] = null);

(statearr_13900_13956[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (18))){
var inst_13792 = (state_13848[(2)]);
var state_13848__$1 = state_13848;
var statearr_13901_13957 = state_13848__$1;
(statearr_13901_13957[(2)] = inst_13792);

(statearr_13901_13957[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (37))){
var state_13848__$1 = state_13848;
var statearr_13902_13958 = state_13848__$1;
(statearr_13902_13958[(2)] = null);

(statearr_13902_13958[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13849 === (8))){
var inst_13754 = (state_13848[(8)]);
var inst_13771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13754);
var state_13848__$1 = state_13848;
var statearr_13903_13959 = state_13848__$1;
(statearr_13903_13959[(2)] = inst_13771);

(statearr_13903_13959[(1)] = (10));


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
});})(c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12066__auto__,c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12067__auto__ = null;
var cljs$core$async$mix_$_state_machine__12067__auto____0 = (function (){
var statearr_13907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13907[(0)] = cljs$core$async$mix_$_state_machine__12067__auto__);

(statearr_13907[(1)] = (1));

return statearr_13907;
});
var cljs$core$async$mix_$_state_machine__12067__auto____1 = (function (state_13848){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_13848);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e13908){if((e13908 instanceof Object)){
var ex__12070__auto__ = e13908;
var statearr_13909_13960 = state_13848;
(statearr_13909_13960[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13848);

return cljs.core.cst$kw$recur;
} else {
throw e13908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__13961 = state_13848;
state_13848 = G__13961;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12067__auto__ = function(state_13848){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12067__auto____1.call(this,state_13848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12067__auto____0;
cljs$core$async$mix_$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12067__auto____1;
return cljs$core$async$mix_$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12182__auto__ = (function (){var statearr_13910 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_13910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___13913);

return statearr_13910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___13913,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5324__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto__.call(null,p,v,ch));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5324__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13962 = [];
var len__5726__auto___13965 = arguments.length;
var i__5727__auto___13966 = (0);
while(true){
if((i__5727__auto___13966 < len__5726__auto___13965)){
args13962.push((arguments[i__5727__auto___13966]));

var G__13967 = (i__5727__auto___13966 + (1));
i__5727__auto___13966 = G__13967;
continue;
} else {
}
break;
}

var G__13964 = args13962.length;
switch (G__13964) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13962.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto__.call(null,p));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5324__auto____$1.call(null,p));
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
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto__.call(null,p,v));
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5324__auto____$1.call(null,p,v));
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
var args13970 = [];
var len__5726__auto___14098 = arguments.length;
var i__5727__auto___14099 = (0);
while(true){
if((i__5727__auto___14099 < len__5726__auto___14098)){
args13970.push((arguments[i__5727__auto___14099]));

var G__14100 = (i__5727__auto___14099 + (1));
i__5727__auto___14099 = G__14100;
continue;
} else {
}
break;
}

var G__13972 = args13970.length;
switch (G__13972) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13970.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__13973 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13973) : cljs.core.atom.call(null,G__13973));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4668__auto__,mults){
return (function (p1__13969_SHARP_){
if(cljs.core.truth_((p1__13969_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13969_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13969_SHARP_.call(null,topic)))){
return p1__13969_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13969_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13974 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13975){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13976,meta13975__$1){
var self__ = this;
var _13976__$1 = this;
return (new cljs.core.async.t_cljs$core$async13974(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13975__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13976){
var self__ = this;
var _13976__$1 = this;
return self__.meta13975;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13977 = self__.mults;
var G__13978 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13977,G__13978) : cljs.core.reset_BANG_.call(null,G__13977,G__13978));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13975], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13974";

cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async13974");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13974 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13975){
return (new cljs.core.async.t_cljs$core$async13974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13975));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13974(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12180__auto___14102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14102,mults,ensure_mult,p){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14102,mults,ensure_mult,p){
return (function (state_14050){
var state_val_14051 = (state_14050[(1)]);
if((state_val_14051 === (7))){
var inst_14046 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14052_14103 = state_14050__$1;
(statearr_14052_14103[(2)] = inst_14046);

(statearr_14052_14103[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (20))){
var state_14050__$1 = state_14050;
var statearr_14053_14104 = state_14050__$1;
(statearr_14053_14104[(2)] = null);

(statearr_14053_14104[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (1))){
var state_14050__$1 = state_14050;
var statearr_14054_14105 = state_14050__$1;
(statearr_14054_14105[(2)] = null);

(statearr_14054_14105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (24))){
var inst_14029 = (state_14050[(7)]);
var inst_14038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14029);
var state_14050__$1 = state_14050;
var statearr_14055_14106 = state_14050__$1;
(statearr_14055_14106[(2)] = inst_14038);

(statearr_14055_14106[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (4))){
var inst_13981 = (state_14050[(8)]);
var inst_13981__$1 = (state_14050[(2)]);
var inst_13982 = (inst_13981__$1 == null);
var state_14050__$1 = (function (){var statearr_14056 = state_14050;
(statearr_14056[(8)] = inst_13981__$1);

return statearr_14056;
})();
if(cljs.core.truth_(inst_13982)){
var statearr_14057_14107 = state_14050__$1;
(statearr_14057_14107[(1)] = (5));

} else {
var statearr_14058_14108 = state_14050__$1;
(statearr_14058_14108[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (15))){
var inst_14023 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14059_14109 = state_14050__$1;
(statearr_14059_14109[(2)] = inst_14023);

(statearr_14059_14109[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (21))){
var inst_14043 = (state_14050[(2)]);
var state_14050__$1 = (function (){var statearr_14060 = state_14050;
(statearr_14060[(9)] = inst_14043);

return statearr_14060;
})();
var statearr_14061_14110 = state_14050__$1;
(statearr_14061_14110[(2)] = null);

(statearr_14061_14110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (13))){
var inst_14005 = (state_14050[(10)]);
var inst_14007 = cljs.core.chunked_seq_QMARK_(inst_14005);
var state_14050__$1 = state_14050;
if(inst_14007){
var statearr_14062_14111 = state_14050__$1;
(statearr_14062_14111[(1)] = (16));

} else {
var statearr_14063_14112 = state_14050__$1;
(statearr_14063_14112[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (22))){
var inst_14035 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
if(cljs.core.truth_(inst_14035)){
var statearr_14064_14113 = state_14050__$1;
(statearr_14064_14113[(1)] = (23));

} else {
var statearr_14065_14114 = state_14050__$1;
(statearr_14065_14114[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (6))){
var inst_13981 = (state_14050[(8)]);
var inst_14031 = (state_14050[(11)]);
var inst_14029 = (state_14050[(7)]);
var inst_14029__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13981) : topic_fn.call(null,inst_13981));
var inst_14030 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14031__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14030,inst_14029__$1);
var state_14050__$1 = (function (){var statearr_14066 = state_14050;
(statearr_14066[(11)] = inst_14031__$1);

(statearr_14066[(7)] = inst_14029__$1);

return statearr_14066;
})();
if(cljs.core.truth_(inst_14031__$1)){
var statearr_14067_14115 = state_14050__$1;
(statearr_14067_14115[(1)] = (19));

} else {
var statearr_14068_14116 = state_14050__$1;
(statearr_14068_14116[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (25))){
var inst_14040 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14069_14117 = state_14050__$1;
(statearr_14069_14117[(2)] = inst_14040);

(statearr_14069_14117[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (17))){
var inst_14005 = (state_14050[(10)]);
var inst_14014 = cljs.core.first(inst_14005);
var inst_14015 = cljs.core.async.muxch_STAR_(inst_14014);
var inst_14016 = cljs.core.async.close_BANG_(inst_14015);
var inst_14017 = cljs.core.next(inst_14005);
var inst_13991 = inst_14017;
var inst_13992 = null;
var inst_13993 = (0);
var inst_13994 = (0);
var state_14050__$1 = (function (){var statearr_14070 = state_14050;
(statearr_14070[(12)] = inst_13994);

(statearr_14070[(13)] = inst_13992);

(statearr_14070[(14)] = inst_13993);

(statearr_14070[(15)] = inst_13991);

(statearr_14070[(16)] = inst_14016);

return statearr_14070;
})();
var statearr_14071_14118 = state_14050__$1;
(statearr_14071_14118[(2)] = null);

(statearr_14071_14118[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (3))){
var inst_14048 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14050__$1,inst_14048);
} else {
if((state_val_14051 === (12))){
var inst_14025 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14072_14119 = state_14050__$1;
(statearr_14072_14119[(2)] = inst_14025);

(statearr_14072_14119[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (2))){
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14050__$1,(4),ch);
} else {
if((state_val_14051 === (23))){
var state_14050__$1 = state_14050;
var statearr_14073_14120 = state_14050__$1;
(statearr_14073_14120[(2)] = null);

(statearr_14073_14120[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (19))){
var inst_13981 = (state_14050[(8)]);
var inst_14031 = (state_14050[(11)]);
var inst_14033 = cljs.core.async.muxch_STAR_(inst_14031);
var state_14050__$1 = state_14050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14050__$1,(22),inst_14033,inst_13981);
} else {
if((state_val_14051 === (11))){
var inst_14005 = (state_14050[(10)]);
var inst_13991 = (state_14050[(15)]);
var inst_14005__$1 = cljs.core.seq(inst_13991);
var state_14050__$1 = (function (){var statearr_14074 = state_14050;
(statearr_14074[(10)] = inst_14005__$1);

return statearr_14074;
})();
if(inst_14005__$1){
var statearr_14075_14121 = state_14050__$1;
(statearr_14075_14121[(1)] = (13));

} else {
var statearr_14076_14122 = state_14050__$1;
(statearr_14076_14122[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (9))){
var inst_14027 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14077_14123 = state_14050__$1;
(statearr_14077_14123[(2)] = inst_14027);

(statearr_14077_14123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (5))){
var inst_13988 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_13989 = cljs.core.vals(inst_13988);
var inst_13990 = cljs.core.seq(inst_13989);
var inst_13991 = inst_13990;
var inst_13992 = null;
var inst_13993 = (0);
var inst_13994 = (0);
var state_14050__$1 = (function (){var statearr_14078 = state_14050;
(statearr_14078[(12)] = inst_13994);

(statearr_14078[(13)] = inst_13992);

(statearr_14078[(14)] = inst_13993);

(statearr_14078[(15)] = inst_13991);

return statearr_14078;
})();
var statearr_14079_14124 = state_14050__$1;
(statearr_14079_14124[(2)] = null);

(statearr_14079_14124[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (14))){
var state_14050__$1 = state_14050;
var statearr_14083_14125 = state_14050__$1;
(statearr_14083_14125[(2)] = null);

(statearr_14083_14125[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (16))){
var inst_14005 = (state_14050[(10)]);
var inst_14009 = cljs.core.chunk_first(inst_14005);
var inst_14010 = cljs.core.chunk_rest(inst_14005);
var inst_14011 = cljs.core.count(inst_14009);
var inst_13991 = inst_14010;
var inst_13992 = inst_14009;
var inst_13993 = inst_14011;
var inst_13994 = (0);
var state_14050__$1 = (function (){var statearr_14084 = state_14050;
(statearr_14084[(12)] = inst_13994);

(statearr_14084[(13)] = inst_13992);

(statearr_14084[(14)] = inst_13993);

(statearr_14084[(15)] = inst_13991);

return statearr_14084;
})();
var statearr_14085_14126 = state_14050__$1;
(statearr_14085_14126[(2)] = null);

(statearr_14085_14126[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (10))){
var inst_13994 = (state_14050[(12)]);
var inst_13992 = (state_14050[(13)]);
var inst_13993 = (state_14050[(14)]);
var inst_13991 = (state_14050[(15)]);
var inst_13999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13992,inst_13994);
var inst_14000 = cljs.core.async.muxch_STAR_(inst_13999);
var inst_14001 = cljs.core.async.close_BANG_(inst_14000);
var inst_14002 = (inst_13994 + (1));
var tmp14080 = inst_13992;
var tmp14081 = inst_13993;
var tmp14082 = inst_13991;
var inst_13991__$1 = tmp14082;
var inst_13992__$1 = tmp14080;
var inst_13993__$1 = tmp14081;
var inst_13994__$1 = inst_14002;
var state_14050__$1 = (function (){var statearr_14086 = state_14050;
(statearr_14086[(12)] = inst_13994__$1);

(statearr_14086[(17)] = inst_14001);

(statearr_14086[(13)] = inst_13992__$1);

(statearr_14086[(14)] = inst_13993__$1);

(statearr_14086[(15)] = inst_13991__$1);

return statearr_14086;
})();
var statearr_14087_14127 = state_14050__$1;
(statearr_14087_14127[(2)] = null);

(statearr_14087_14127[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (18))){
var inst_14020 = (state_14050[(2)]);
var state_14050__$1 = state_14050;
var statearr_14088_14128 = state_14050__$1;
(statearr_14088_14128[(2)] = inst_14020);

(statearr_14088_14128[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14051 === (8))){
var inst_13994 = (state_14050[(12)]);
var inst_13993 = (state_14050[(14)]);
var inst_13996 = (inst_13994 < inst_13993);
var inst_13997 = inst_13996;
var state_14050__$1 = state_14050;
if(cljs.core.truth_(inst_13997)){
var statearr_14089_14129 = state_14050__$1;
(statearr_14089_14129[(1)] = (10));

} else {
var statearr_14090_14130 = state_14050__$1;
(statearr_14090_14130[(1)] = (11));

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
});})(c__12180__auto___14102,mults,ensure_mult,p))
;
return ((function (switch__12066__auto__,c__12180__auto___14102,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14094[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14094[(1)] = (1));

return statearr_14094;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14050){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14050);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14095){if((e14095 instanceof Object)){
var ex__12070__auto__ = e14095;
var statearr_14096_14131 = state_14050;
(statearr_14096_14131[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14050);

return cljs.core.cst$kw$recur;
} else {
throw e14095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14132 = state_14050;
state_14050 = G__14132;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14102,mults,ensure_mult,p))
})();
var state__12182__auto__ = (function (){var statearr_14097 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14102);

return statearr_14097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14102,mults,ensure_mult,p))
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
var args14133 = [];
var len__5726__auto___14136 = arguments.length;
var i__5727__auto___14137 = (0);
while(true){
if((i__5727__auto___14137 < len__5726__auto___14136)){
args14133.push((arguments[i__5727__auto___14137]));

var G__14138 = (i__5727__auto___14137 + (1));
i__5727__auto___14137 = G__14138;
continue;
} else {
}
break;
}

var G__14135 = args14133.length;
switch (G__14135) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14133.length)].join('')));

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
var args14140 = [];
var len__5726__auto___14143 = arguments.length;
var i__5727__auto___14144 = (0);
while(true){
if((i__5727__auto___14144 < len__5726__auto___14143)){
args14140.push((arguments[i__5727__auto___14144]));

var G__14145 = (i__5727__auto___14144 + (1));
i__5727__auto___14144 = G__14145;
continue;
} else {
}
break;
}

var G__14142 = args14140.length;
switch (G__14142) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14140.length)].join('')));

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
var args14147 = [];
var len__5726__auto___14218 = arguments.length;
var i__5727__auto___14219 = (0);
while(true){
if((i__5727__auto___14219 < len__5726__auto___14218)){
args14147.push((arguments[i__5727__auto___14219]));

var G__14220 = (i__5727__auto___14219 + (1));
i__5727__auto___14219 = G__14220;
continue;
} else {
}
break;
}

var G__14149 = args14147.length;
switch (G__14149) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14147.length)].join('')));

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
var c__12180__auto___14222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (7))){
var state_14188__$1 = state_14188;
var statearr_14190_14223 = state_14188__$1;
(statearr_14190_14223[(2)] = null);

(statearr_14190_14223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (1))){
var state_14188__$1 = state_14188;
var statearr_14191_14224 = state_14188__$1;
(statearr_14191_14224[(2)] = null);

(statearr_14191_14224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (4))){
var inst_14152 = (state_14188[(7)]);
var inst_14154 = (inst_14152 < cnt);
var state_14188__$1 = state_14188;
if(cljs.core.truth_(inst_14154)){
var statearr_14192_14225 = state_14188__$1;
(statearr_14192_14225[(1)] = (6));

} else {
var statearr_14193_14226 = state_14188__$1;
(statearr_14193_14226[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (15))){
var inst_14184 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14194_14227 = state_14188__$1;
(statearr_14194_14227[(2)] = inst_14184);

(statearr_14194_14227[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (13))){
var inst_14177 = cljs.core.async.close_BANG_(out);
var state_14188__$1 = state_14188;
var statearr_14195_14228 = state_14188__$1;
(statearr_14195_14228[(2)] = inst_14177);

(statearr_14195_14228[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (6))){
var state_14188__$1 = state_14188;
var statearr_14196_14229 = state_14188__$1;
(statearr_14196_14229[(2)] = null);

(statearr_14196_14229[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (3))){
var inst_14186 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14188__$1,inst_14186);
} else {
if((state_val_14189 === (12))){
var inst_14174 = (state_14188[(8)]);
var inst_14174__$1 = (state_14188[(2)]);
var inst_14175 = cljs.core.some(cljs.core.nil_QMARK_,inst_14174__$1);
var state_14188__$1 = (function (){var statearr_14197 = state_14188;
(statearr_14197[(8)] = inst_14174__$1);

return statearr_14197;
})();
if(cljs.core.truth_(inst_14175)){
var statearr_14198_14230 = state_14188__$1;
(statearr_14198_14230[(1)] = (13));

} else {
var statearr_14199_14231 = state_14188__$1;
(statearr_14199_14231[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (2))){
var inst_14151 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_14152 = (0);
var state_14188__$1 = (function (){var statearr_14200 = state_14188;
(statearr_14200[(9)] = inst_14151);

(statearr_14200[(7)] = inst_14152);

return statearr_14200;
})();
var statearr_14201_14232 = state_14188__$1;
(statearr_14201_14232[(2)] = null);

(statearr_14201_14232[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (11))){
var inst_14152 = (state_14188[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14188,(10),Object,null,(9));
var inst_14161 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14152) : chs__$1.call(null,inst_14152));
var inst_14162 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14152) : done.call(null,inst_14152));
var inst_14163 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14161,inst_14162);
var state_14188__$1 = state_14188;
var statearr_14202_14233 = state_14188__$1;
(statearr_14202_14233[(2)] = inst_14163);


cljs.core.async.impl.ioc_helpers.process_exception(state_14188__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (9))){
var inst_14152 = (state_14188[(7)]);
var inst_14165 = (state_14188[(2)]);
var inst_14166 = (inst_14152 + (1));
var inst_14152__$1 = inst_14166;
var state_14188__$1 = (function (){var statearr_14203 = state_14188;
(statearr_14203[(10)] = inst_14165);

(statearr_14203[(7)] = inst_14152__$1);

return statearr_14203;
})();
var statearr_14204_14234 = state_14188__$1;
(statearr_14204_14234[(2)] = null);

(statearr_14204_14234[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (5))){
var inst_14172 = (state_14188[(2)]);
var state_14188__$1 = (function (){var statearr_14205 = state_14188;
(statearr_14205[(11)] = inst_14172);

return statearr_14205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14188__$1,(12),dchan);
} else {
if((state_val_14189 === (14))){
var inst_14174 = (state_14188[(8)]);
var inst_14179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14174);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14188__$1,(16),out,inst_14179);
} else {
if((state_val_14189 === (16))){
var inst_14181 = (state_14188[(2)]);
var state_14188__$1 = (function (){var statearr_14206 = state_14188;
(statearr_14206[(12)] = inst_14181);

return statearr_14206;
})();
var statearr_14207_14235 = state_14188__$1;
(statearr_14207_14235[(2)] = null);

(statearr_14207_14235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (10))){
var inst_14156 = (state_14188[(2)]);
var inst_14157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14188__$1 = (function (){var statearr_14208 = state_14188;
(statearr_14208[(13)] = inst_14156);

return statearr_14208;
})();
var statearr_14209_14236 = state_14188__$1;
(statearr_14209_14236[(2)] = inst_14157);


cljs.core.async.impl.ioc_helpers.process_exception(state_14188__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14189 === (8))){
var inst_14170 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14210_14237 = state_14188__$1;
(statearr_14210_14237[(2)] = inst_14170);

(statearr_14210_14237[(1)] = (5));


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
});})(c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12066__auto__,c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14214[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14214[(1)] = (1));

return statearr_14214;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14188){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14188);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14215){if((e14215 instanceof Object)){
var ex__12070__auto__ = e14215;
var statearr_14216_14238 = state_14188;
(statearr_14216_14238[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14188);

return cljs.core.cst$kw$recur;
} else {
throw e14215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14239 = state_14188;
state_14188 = G__14239;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12182__auto__ = (function (){var statearr_14217 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14222);

return statearr_14217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14222,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14241 = [];
var len__5726__auto___14297 = arguments.length;
var i__5727__auto___14298 = (0);
while(true){
if((i__5727__auto___14298 < len__5726__auto___14297)){
args14241.push((arguments[i__5727__auto___14298]));

var G__14299 = (i__5727__auto___14298 + (1));
i__5727__auto___14298 = G__14299;
continue;
} else {
}
break;
}

var G__14243 = args14241.length;
switch (G__14243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14241.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14301,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14301,out){
return (function (state_14273){
var state_val_14274 = (state_14273[(1)]);
if((state_val_14274 === (7))){
var inst_14252 = (state_14273[(7)]);
var inst_14253 = (state_14273[(8)]);
var inst_14252__$1 = (state_14273[(2)]);
var inst_14253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14252__$1,(0),null);
var inst_14254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14252__$1,(1),null);
var inst_14255 = (inst_14253__$1 == null);
var state_14273__$1 = (function (){var statearr_14275 = state_14273;
(statearr_14275[(7)] = inst_14252__$1);

(statearr_14275[(8)] = inst_14253__$1);

(statearr_14275[(9)] = inst_14254);

return statearr_14275;
})();
if(cljs.core.truth_(inst_14255)){
var statearr_14276_14302 = state_14273__$1;
(statearr_14276_14302[(1)] = (8));

} else {
var statearr_14277_14303 = state_14273__$1;
(statearr_14277_14303[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (1))){
var inst_14244 = cljs.core.vec(chs);
var inst_14245 = inst_14244;
var state_14273__$1 = (function (){var statearr_14278 = state_14273;
(statearr_14278[(10)] = inst_14245);

return statearr_14278;
})();
var statearr_14279_14304 = state_14273__$1;
(statearr_14279_14304[(2)] = null);

(statearr_14279_14304[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (4))){
var inst_14245 = (state_14273[(10)]);
var state_14273__$1 = state_14273;
return cljs.core.async.ioc_alts_BANG_(state_14273__$1,(7),inst_14245);
} else {
if((state_val_14274 === (6))){
var inst_14269 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14280_14305 = state_14273__$1;
(statearr_14280_14305[(2)] = inst_14269);

(statearr_14280_14305[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (3))){
var inst_14271 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14273__$1,inst_14271);
} else {
if((state_val_14274 === (2))){
var inst_14245 = (state_14273[(10)]);
var inst_14247 = cljs.core.count(inst_14245);
var inst_14248 = (inst_14247 > (0));
var state_14273__$1 = state_14273;
if(cljs.core.truth_(inst_14248)){
var statearr_14282_14306 = state_14273__$1;
(statearr_14282_14306[(1)] = (4));

} else {
var statearr_14283_14307 = state_14273__$1;
(statearr_14283_14307[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (11))){
var inst_14245 = (state_14273[(10)]);
var inst_14262 = (state_14273[(2)]);
var tmp14281 = inst_14245;
var inst_14245__$1 = tmp14281;
var state_14273__$1 = (function (){var statearr_14284 = state_14273;
(statearr_14284[(10)] = inst_14245__$1);

(statearr_14284[(11)] = inst_14262);

return statearr_14284;
})();
var statearr_14285_14308 = state_14273__$1;
(statearr_14285_14308[(2)] = null);

(statearr_14285_14308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (9))){
var inst_14253 = (state_14273[(8)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14273__$1,(11),out,inst_14253);
} else {
if((state_val_14274 === (5))){
var inst_14267 = cljs.core.async.close_BANG_(out);
var state_14273__$1 = state_14273;
var statearr_14286_14309 = state_14273__$1;
(statearr_14286_14309[(2)] = inst_14267);

(statearr_14286_14309[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (10))){
var inst_14265 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14287_14310 = state_14273__$1;
(statearr_14287_14310[(2)] = inst_14265);

(statearr_14287_14310[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14274 === (8))){
var inst_14252 = (state_14273[(7)]);
var inst_14245 = (state_14273[(10)]);
var inst_14253 = (state_14273[(8)]);
var inst_14254 = (state_14273[(9)]);
var inst_14257 = (function (){var cs = inst_14245;
var vec__14250 = inst_14252;
var v = inst_14253;
var c = inst_14254;
return ((function (cs,vec__14250,v,c,inst_14252,inst_14245,inst_14253,inst_14254,state_val_14274,c__12180__auto___14301,out){
return (function (p1__14240_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14240_SHARP_);
});
;})(cs,vec__14250,v,c,inst_14252,inst_14245,inst_14253,inst_14254,state_val_14274,c__12180__auto___14301,out))
})();
var inst_14258 = cljs.core.filterv(inst_14257,inst_14245);
var inst_14245__$1 = inst_14258;
var state_14273__$1 = (function (){var statearr_14288 = state_14273;
(statearr_14288[(10)] = inst_14245__$1);

return statearr_14288;
})();
var statearr_14289_14311 = state_14273__$1;
(statearr_14289_14311[(2)] = null);

(statearr_14289_14311[(1)] = (2));


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
});})(c__12180__auto___14301,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14301,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14293[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14293[(1)] = (1));

return statearr_14293;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14273){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14273);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14294){if((e14294 instanceof Object)){
var ex__12070__auto__ = e14294;
var statearr_14295_14312 = state_14273;
(statearr_14295_14312[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14273);

return cljs.core.cst$kw$recur;
} else {
throw e14294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14313 = state_14273;
state_14273 = G__14313;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14301,out))
})();
var state__12182__auto__ = (function (){var statearr_14296 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14301);

return statearr_14296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14301,out))
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
var args14314 = [];
var len__5726__auto___14363 = arguments.length;
var i__5727__auto___14364 = (0);
while(true){
if((i__5727__auto___14364 < len__5726__auto___14363)){
args14314.push((arguments[i__5727__auto___14364]));

var G__14365 = (i__5727__auto___14364 + (1));
i__5727__auto___14364 = G__14365;
continue;
} else {
}
break;
}

var G__14316 = args14314.length;
switch (G__14316) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14314.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14367,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14367,out){
return (function (state_14340){
var state_val_14341 = (state_14340[(1)]);
if((state_val_14341 === (7))){
var inst_14322 = (state_14340[(7)]);
var inst_14322__$1 = (state_14340[(2)]);
var inst_14323 = (inst_14322__$1 == null);
var inst_14324 = cljs.core.not(inst_14323);
var state_14340__$1 = (function (){var statearr_14342 = state_14340;
(statearr_14342[(7)] = inst_14322__$1);

return statearr_14342;
})();
if(inst_14324){
var statearr_14343_14368 = state_14340__$1;
(statearr_14343_14368[(1)] = (8));

} else {
var statearr_14344_14369 = state_14340__$1;
(statearr_14344_14369[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (1))){
var inst_14317 = (0);
var state_14340__$1 = (function (){var statearr_14345 = state_14340;
(statearr_14345[(8)] = inst_14317);

return statearr_14345;
})();
var statearr_14346_14370 = state_14340__$1;
(statearr_14346_14370[(2)] = null);

(statearr_14346_14370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (4))){
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14340__$1,(7),ch);
} else {
if((state_val_14341 === (6))){
var inst_14335 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
var statearr_14347_14371 = state_14340__$1;
(statearr_14347_14371[(2)] = inst_14335);

(statearr_14347_14371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (3))){
var inst_14337 = (state_14340[(2)]);
var inst_14338 = cljs.core.async.close_BANG_(out);
var state_14340__$1 = (function (){var statearr_14348 = state_14340;
(statearr_14348[(9)] = inst_14337);

return statearr_14348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14340__$1,inst_14338);
} else {
if((state_val_14341 === (2))){
var inst_14317 = (state_14340[(8)]);
var inst_14319 = (inst_14317 < n);
var state_14340__$1 = state_14340;
if(cljs.core.truth_(inst_14319)){
var statearr_14349_14372 = state_14340__$1;
(statearr_14349_14372[(1)] = (4));

} else {
var statearr_14350_14373 = state_14340__$1;
(statearr_14350_14373[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (11))){
var inst_14317 = (state_14340[(8)]);
var inst_14327 = (state_14340[(2)]);
var inst_14328 = (inst_14317 + (1));
var inst_14317__$1 = inst_14328;
var state_14340__$1 = (function (){var statearr_14351 = state_14340;
(statearr_14351[(10)] = inst_14327);

(statearr_14351[(8)] = inst_14317__$1);

return statearr_14351;
})();
var statearr_14352_14374 = state_14340__$1;
(statearr_14352_14374[(2)] = null);

(statearr_14352_14374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (9))){
var state_14340__$1 = state_14340;
var statearr_14353_14375 = state_14340__$1;
(statearr_14353_14375[(2)] = null);

(statearr_14353_14375[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (5))){
var state_14340__$1 = state_14340;
var statearr_14354_14376 = state_14340__$1;
(statearr_14354_14376[(2)] = null);

(statearr_14354_14376[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (10))){
var inst_14332 = (state_14340[(2)]);
var state_14340__$1 = state_14340;
var statearr_14355_14377 = state_14340__$1;
(statearr_14355_14377[(2)] = inst_14332);

(statearr_14355_14377[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14341 === (8))){
var inst_14322 = (state_14340[(7)]);
var state_14340__$1 = state_14340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14340__$1,(11),out,inst_14322);
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
});})(c__12180__auto___14367,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14367,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14359[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14359[(1)] = (1));

return statearr_14359;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14340){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14340);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14360){if((e14360 instanceof Object)){
var ex__12070__auto__ = e14360;
var statearr_14361_14378 = state_14340;
(statearr_14361_14378[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14340);

return cljs.core.cst$kw$recur;
} else {
throw e14360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14379 = state_14340;
state_14340 = G__14379;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14367,out))
})();
var state__12182__auto__ = (function (){var statearr_14362 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14367);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14367,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14389 = (function (map_LT_,f,ch,meta14390){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14390 = meta14390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14391,meta14390__$1){
var self__ = this;
var _14391__$1 = this;
return (new cljs.core.async.t_cljs$core$async14389(self__.map_LT_,self__.f,self__.ch,meta14390__$1));
});

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14391){
var self__ = this;
var _14391__$1 = this;
return self__.meta14390;
});

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14392 = (function (map_LT_,f,ch,meta14390,_,fn1,meta14393){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14390 = meta14390;
this._ = _;
this.fn1 = fn1;
this.meta14393 = meta14393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14394,meta14393__$1){
var self__ = this;
var _14394__$1 = this;
return (new cljs.core.async.t_cljs$core$async14392(self__.map_LT_,self__.f,self__.ch,self__.meta14390,self__._,self__.fn1,meta14393__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14394){
var self__ = this;
var _14394__$1 = this;
return self__.meta14393;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14380_SHARP_){
var G__14395 = (((p1__14380_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14380_SHARP_) : self__.f.call(null,p1__14380_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14395) : f1.call(null,G__14395));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14390,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async14389], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta14393], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14392";

cljs.core.async.t_cljs$core$async14392.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14392");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14392 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14392(map_LT___$1,f__$1,ch__$1,meta14390__$1,___$2,fn1__$1,meta14393){
return (new cljs.core.async.t_cljs$core$async14392(map_LT___$1,f__$1,ch__$1,meta14390__$1,___$2,fn1__$1,meta14393));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14392(self__.map_LT_,self__.f,self__.ch,self__.meta14390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14396 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14396) : self__.f.call(null,G__14396));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14390], null);
});

cljs.core.async.t_cljs$core$async14389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14389";

cljs.core.async.t_cljs$core$async14389.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14389");
});

cljs.core.async.__GT_t_cljs$core$async14389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14389(map_LT___$1,f__$1,ch__$1,meta14390){
return (new cljs.core.async.t_cljs$core$async14389(map_LT___$1,f__$1,ch__$1,meta14390));
});

}

return (new cljs.core.async.t_cljs$core$async14389(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14400 = (function (map_GT_,f,ch,meta14401){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14401 = meta14401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14402,meta14401__$1){
var self__ = this;
var _14402__$1 = this;
return (new cljs.core.async.t_cljs$core$async14400(self__.map_GT_,self__.f,self__.ch,meta14401__$1));
});

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14402){
var self__ = this;
var _14402__$1 = this;
return self__.meta14401;
});

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async14400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14401], null);
});

cljs.core.async.t_cljs$core$async14400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14400";

cljs.core.async.t_cljs$core$async14400.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14400");
});

cljs.core.async.__GT_t_cljs$core$async14400 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14400(map_GT___$1,f__$1,ch__$1,meta14401){
return (new cljs.core.async.t_cljs$core$async14400(map_GT___$1,f__$1,ch__$1,meta14401));
});

}

return (new cljs.core.async.t_cljs$core$async14400(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14406 = (function (filter_GT_,p,ch,meta14407){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14407 = meta14407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14408,meta14407__$1){
var self__ = this;
var _14408__$1 = this;
return (new cljs.core.async.t_cljs$core$async14406(self__.filter_GT_,self__.p,self__.ch,meta14407__$1));
});

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14408){
var self__ = this;
var _14408__$1 = this;
return self__.meta14407;
});

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14407], null);
});

cljs.core.async.t_cljs$core$async14406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14406";

cljs.core.async.t_cljs$core$async14406.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write(writer__5267__auto__,"cljs.core.async/t_cljs$core$async14406");
});

cljs.core.async.__GT_t_cljs$core$async14406 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14406(filter_GT___$1,p__$1,ch__$1,meta14407){
return (new cljs.core.async.t_cljs$core$async14406(filter_GT___$1,p__$1,ch__$1,meta14407));
});

}

return (new cljs.core.async.t_cljs$core$async14406(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14409 = [];
var len__5726__auto___14453 = arguments.length;
var i__5727__auto___14454 = (0);
while(true){
if((i__5727__auto___14454 < len__5726__auto___14453)){
args14409.push((arguments[i__5727__auto___14454]));

var G__14455 = (i__5727__auto___14454 + (1));
i__5727__auto___14454 = G__14455;
continue;
} else {
}
break;
}

var G__14411 = args14409.length;
switch (G__14411) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14409.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14457,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14457,out){
return (function (state_14432){
var state_val_14433 = (state_14432[(1)]);
if((state_val_14433 === (7))){
var inst_14428 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
var statearr_14434_14458 = state_14432__$1;
(statearr_14434_14458[(2)] = inst_14428);

(statearr_14434_14458[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (1))){
var state_14432__$1 = state_14432;
var statearr_14435_14459 = state_14432__$1;
(statearr_14435_14459[(2)] = null);

(statearr_14435_14459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (4))){
var inst_14414 = (state_14432[(7)]);
var inst_14414__$1 = (state_14432[(2)]);
var inst_14415 = (inst_14414__$1 == null);
var state_14432__$1 = (function (){var statearr_14436 = state_14432;
(statearr_14436[(7)] = inst_14414__$1);

return statearr_14436;
})();
if(cljs.core.truth_(inst_14415)){
var statearr_14437_14460 = state_14432__$1;
(statearr_14437_14460[(1)] = (5));

} else {
var statearr_14438_14461 = state_14432__$1;
(statearr_14438_14461[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (6))){
var inst_14414 = (state_14432[(7)]);
var inst_14419 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14414) : p.call(null,inst_14414));
var state_14432__$1 = state_14432;
if(cljs.core.truth_(inst_14419)){
var statearr_14439_14462 = state_14432__$1;
(statearr_14439_14462[(1)] = (8));

} else {
var statearr_14440_14463 = state_14432__$1;
(statearr_14440_14463[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (3))){
var inst_14430 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14432__$1,inst_14430);
} else {
if((state_val_14433 === (2))){
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14432__$1,(4),ch);
} else {
if((state_val_14433 === (11))){
var inst_14422 = (state_14432[(2)]);
var state_14432__$1 = state_14432;
var statearr_14441_14464 = state_14432__$1;
(statearr_14441_14464[(2)] = inst_14422);

(statearr_14441_14464[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (9))){
var state_14432__$1 = state_14432;
var statearr_14442_14465 = state_14432__$1;
(statearr_14442_14465[(2)] = null);

(statearr_14442_14465[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (5))){
var inst_14417 = cljs.core.async.close_BANG_(out);
var state_14432__$1 = state_14432;
var statearr_14443_14466 = state_14432__$1;
(statearr_14443_14466[(2)] = inst_14417);

(statearr_14443_14466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (10))){
var inst_14425 = (state_14432[(2)]);
var state_14432__$1 = (function (){var statearr_14444 = state_14432;
(statearr_14444[(8)] = inst_14425);

return statearr_14444;
})();
var statearr_14445_14467 = state_14432__$1;
(statearr_14445_14467[(2)] = null);

(statearr_14445_14467[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14433 === (8))){
var inst_14414 = (state_14432[(7)]);
var state_14432__$1 = state_14432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14432__$1,(11),out,inst_14414);
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
});})(c__12180__auto___14457,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14457,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14449 = [null,null,null,null,null,null,null,null,null];
(statearr_14449[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14449[(1)] = (1));

return statearr_14449;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14432){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14432);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14450){if((e14450 instanceof Object)){
var ex__12070__auto__ = e14450;
var statearr_14451_14468 = state_14432;
(statearr_14451_14468[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14432);

return cljs.core.cst$kw$recur;
} else {
throw e14450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14469 = state_14432;
state_14432 = G__14469;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14457,out))
})();
var state__12182__auto__ = (function (){var statearr_14452 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14457);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14457,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14470 = [];
var len__5726__auto___14473 = arguments.length;
var i__5727__auto___14474 = (0);
while(true){
if((i__5727__auto___14474 < len__5726__auto___14473)){
args14470.push((arguments[i__5727__auto___14474]));

var G__14475 = (i__5727__auto___14474 + (1));
i__5727__auto___14474 = G__14475;
continue;
} else {
}
break;
}

var G__14472 = args14470.length;
switch (G__14472) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14470.length)].join('')));

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
var c__12180__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto__){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto__){
return (function (state_14642){
var state_val_14643 = (state_14642[(1)]);
if((state_val_14643 === (7))){
var inst_14638 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14644_14685 = state_14642__$1;
(statearr_14644_14685[(2)] = inst_14638);

(statearr_14644_14685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (20))){
var inst_14608 = (state_14642[(7)]);
var inst_14619 = (state_14642[(2)]);
var inst_14620 = cljs.core.next(inst_14608);
var inst_14594 = inst_14620;
var inst_14595 = null;
var inst_14596 = (0);
var inst_14597 = (0);
var state_14642__$1 = (function (){var statearr_14645 = state_14642;
(statearr_14645[(8)] = inst_14596);

(statearr_14645[(9)] = inst_14595);

(statearr_14645[(10)] = inst_14619);

(statearr_14645[(11)] = inst_14597);

(statearr_14645[(12)] = inst_14594);

return statearr_14645;
})();
var statearr_14646_14686 = state_14642__$1;
(statearr_14646_14686[(2)] = null);

(statearr_14646_14686[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (1))){
var state_14642__$1 = state_14642;
var statearr_14647_14687 = state_14642__$1;
(statearr_14647_14687[(2)] = null);

(statearr_14647_14687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (4))){
var inst_14583 = (state_14642[(13)]);
var inst_14583__$1 = (state_14642[(2)]);
var inst_14584 = (inst_14583__$1 == null);
var state_14642__$1 = (function (){var statearr_14648 = state_14642;
(statearr_14648[(13)] = inst_14583__$1);

return statearr_14648;
})();
if(cljs.core.truth_(inst_14584)){
var statearr_14649_14688 = state_14642__$1;
(statearr_14649_14688[(1)] = (5));

} else {
var statearr_14650_14689 = state_14642__$1;
(statearr_14650_14689[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (15))){
var state_14642__$1 = state_14642;
var statearr_14654_14690 = state_14642__$1;
(statearr_14654_14690[(2)] = null);

(statearr_14654_14690[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (21))){
var state_14642__$1 = state_14642;
var statearr_14655_14691 = state_14642__$1;
(statearr_14655_14691[(2)] = null);

(statearr_14655_14691[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (13))){
var inst_14596 = (state_14642[(8)]);
var inst_14595 = (state_14642[(9)]);
var inst_14597 = (state_14642[(11)]);
var inst_14594 = (state_14642[(12)]);
var inst_14604 = (state_14642[(2)]);
var inst_14605 = (inst_14597 + (1));
var tmp14651 = inst_14596;
var tmp14652 = inst_14595;
var tmp14653 = inst_14594;
var inst_14594__$1 = tmp14653;
var inst_14595__$1 = tmp14652;
var inst_14596__$1 = tmp14651;
var inst_14597__$1 = inst_14605;
var state_14642__$1 = (function (){var statearr_14656 = state_14642;
(statearr_14656[(8)] = inst_14596__$1);

(statearr_14656[(14)] = inst_14604);

(statearr_14656[(9)] = inst_14595__$1);

(statearr_14656[(11)] = inst_14597__$1);

(statearr_14656[(12)] = inst_14594__$1);

return statearr_14656;
})();
var statearr_14657_14692 = state_14642__$1;
(statearr_14657_14692[(2)] = null);

(statearr_14657_14692[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (22))){
var state_14642__$1 = state_14642;
var statearr_14658_14693 = state_14642__$1;
(statearr_14658_14693[(2)] = null);

(statearr_14658_14693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (6))){
var inst_14583 = (state_14642[(13)]);
var inst_14592 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14583) : f.call(null,inst_14583));
var inst_14593 = cljs.core.seq(inst_14592);
var inst_14594 = inst_14593;
var inst_14595 = null;
var inst_14596 = (0);
var inst_14597 = (0);
var state_14642__$1 = (function (){var statearr_14659 = state_14642;
(statearr_14659[(8)] = inst_14596);

(statearr_14659[(9)] = inst_14595);

(statearr_14659[(11)] = inst_14597);

(statearr_14659[(12)] = inst_14594);

return statearr_14659;
})();
var statearr_14660_14694 = state_14642__$1;
(statearr_14660_14694[(2)] = null);

(statearr_14660_14694[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (17))){
var inst_14608 = (state_14642[(7)]);
var inst_14612 = cljs.core.chunk_first(inst_14608);
var inst_14613 = cljs.core.chunk_rest(inst_14608);
var inst_14614 = cljs.core.count(inst_14612);
var inst_14594 = inst_14613;
var inst_14595 = inst_14612;
var inst_14596 = inst_14614;
var inst_14597 = (0);
var state_14642__$1 = (function (){var statearr_14661 = state_14642;
(statearr_14661[(8)] = inst_14596);

(statearr_14661[(9)] = inst_14595);

(statearr_14661[(11)] = inst_14597);

(statearr_14661[(12)] = inst_14594);

return statearr_14661;
})();
var statearr_14662_14695 = state_14642__$1;
(statearr_14662_14695[(2)] = null);

(statearr_14662_14695[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (3))){
var inst_14640 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14642__$1,inst_14640);
} else {
if((state_val_14643 === (12))){
var inst_14628 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14663_14696 = state_14642__$1;
(statearr_14663_14696[(2)] = inst_14628);

(statearr_14663_14696[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (2))){
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14642__$1,(4),in$);
} else {
if((state_val_14643 === (23))){
var inst_14636 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14664_14697 = state_14642__$1;
(statearr_14664_14697[(2)] = inst_14636);

(statearr_14664_14697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (19))){
var inst_14623 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14665_14698 = state_14642__$1;
(statearr_14665_14698[(2)] = inst_14623);

(statearr_14665_14698[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (11))){
var inst_14608 = (state_14642[(7)]);
var inst_14594 = (state_14642[(12)]);
var inst_14608__$1 = cljs.core.seq(inst_14594);
var state_14642__$1 = (function (){var statearr_14666 = state_14642;
(statearr_14666[(7)] = inst_14608__$1);

return statearr_14666;
})();
if(inst_14608__$1){
var statearr_14667_14699 = state_14642__$1;
(statearr_14667_14699[(1)] = (14));

} else {
var statearr_14668_14700 = state_14642__$1;
(statearr_14668_14700[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (9))){
var inst_14630 = (state_14642[(2)]);
var inst_14631 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14642__$1 = (function (){var statearr_14669 = state_14642;
(statearr_14669[(15)] = inst_14630);

return statearr_14669;
})();
if(cljs.core.truth_(inst_14631)){
var statearr_14670_14701 = state_14642__$1;
(statearr_14670_14701[(1)] = (21));

} else {
var statearr_14671_14702 = state_14642__$1;
(statearr_14671_14702[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (5))){
var inst_14586 = cljs.core.async.close_BANG_(out);
var state_14642__$1 = state_14642;
var statearr_14672_14703 = state_14642__$1;
(statearr_14672_14703[(2)] = inst_14586);

(statearr_14672_14703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (14))){
var inst_14608 = (state_14642[(7)]);
var inst_14610 = cljs.core.chunked_seq_QMARK_(inst_14608);
var state_14642__$1 = state_14642;
if(inst_14610){
var statearr_14673_14704 = state_14642__$1;
(statearr_14673_14704[(1)] = (17));

} else {
var statearr_14674_14705 = state_14642__$1;
(statearr_14674_14705[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (16))){
var inst_14626 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14675_14706 = state_14642__$1;
(statearr_14675_14706[(2)] = inst_14626);

(statearr_14675_14706[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14643 === (10))){
var inst_14595 = (state_14642[(9)]);
var inst_14597 = (state_14642[(11)]);
var inst_14602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14595,inst_14597);
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14642__$1,(13),out,inst_14602);
} else {
if((state_val_14643 === (18))){
var inst_14608 = (state_14642[(7)]);
var inst_14617 = cljs.core.first(inst_14608);
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14642__$1,(20),out,inst_14617);
} else {
if((state_val_14643 === (8))){
var inst_14596 = (state_14642[(8)]);
var inst_14597 = (state_14642[(11)]);
var inst_14599 = (inst_14597 < inst_14596);
var inst_14600 = inst_14599;
var state_14642__$1 = state_14642;
if(cljs.core.truth_(inst_14600)){
var statearr_14676_14707 = state_14642__$1;
(statearr_14676_14707[(1)] = (10));

} else {
var statearr_14677_14708 = state_14642__$1;
(statearr_14677_14708[(1)] = (11));

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
});})(c__12180__auto__))
;
return ((function (switch__12066__auto__,c__12180__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____0 = (function (){
var statearr_14681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14681[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__);

(statearr_14681[(1)] = (1));

return statearr_14681;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____1 = (function (state_14642){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14642);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14682){if((e14682 instanceof Object)){
var ex__12070__auto__ = e14682;
var statearr_14683_14709 = state_14642;
(statearr_14683_14709[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14642);

return cljs.core.cst$kw$recur;
} else {
throw e14682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14710 = state_14642;
state_14642 = G__14710;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__ = function(state_14642){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____1.call(this,state_14642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto__))
})();
var state__12182__auto__ = (function (){var statearr_14684 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto__);

return statearr_14684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto__))
);

return c__12180__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14711 = [];
var len__5726__auto___14714 = arguments.length;
var i__5727__auto___14715 = (0);
while(true){
if((i__5727__auto___14715 < len__5726__auto___14714)){
args14711.push((arguments[i__5727__auto___14715]));

var G__14716 = (i__5727__auto___14715 + (1));
i__5727__auto___14715 = G__14716;
continue;
} else {
}
break;
}

var G__14713 = args14711.length;
switch (G__14713) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14711.length)].join('')));

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
var args14718 = [];
var len__5726__auto___14721 = arguments.length;
var i__5727__auto___14722 = (0);
while(true){
if((i__5727__auto___14722 < len__5726__auto___14721)){
args14718.push((arguments[i__5727__auto___14722]));

var G__14723 = (i__5727__auto___14722 + (1));
i__5727__auto___14722 = G__14723;
continue;
} else {
}
break;
}

var G__14720 = args14718.length;
switch (G__14720) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14718.length)].join('')));

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
var args14725 = [];
var len__5726__auto___14776 = arguments.length;
var i__5727__auto___14777 = (0);
while(true){
if((i__5727__auto___14777 < len__5726__auto___14776)){
args14725.push((arguments[i__5727__auto___14777]));

var G__14778 = (i__5727__auto___14777 + (1));
i__5727__auto___14777 = G__14778;
continue;
} else {
}
break;
}

var G__14727 = args14725.length;
switch (G__14727) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14725.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14780,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14780,out){
return (function (state_14751){
var state_val_14752 = (state_14751[(1)]);
if((state_val_14752 === (7))){
var inst_14746 = (state_14751[(2)]);
var state_14751__$1 = state_14751;
var statearr_14753_14781 = state_14751__$1;
(statearr_14753_14781[(2)] = inst_14746);

(statearr_14753_14781[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (1))){
var inst_14728 = null;
var state_14751__$1 = (function (){var statearr_14754 = state_14751;
(statearr_14754[(7)] = inst_14728);

return statearr_14754;
})();
var statearr_14755_14782 = state_14751__$1;
(statearr_14755_14782[(2)] = null);

(statearr_14755_14782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (4))){
var inst_14731 = (state_14751[(8)]);
var inst_14731__$1 = (state_14751[(2)]);
var inst_14732 = (inst_14731__$1 == null);
var inst_14733 = cljs.core.not(inst_14732);
var state_14751__$1 = (function (){var statearr_14756 = state_14751;
(statearr_14756[(8)] = inst_14731__$1);

return statearr_14756;
})();
if(inst_14733){
var statearr_14757_14783 = state_14751__$1;
(statearr_14757_14783[(1)] = (5));

} else {
var statearr_14758_14784 = state_14751__$1;
(statearr_14758_14784[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (6))){
var state_14751__$1 = state_14751;
var statearr_14759_14785 = state_14751__$1;
(statearr_14759_14785[(2)] = null);

(statearr_14759_14785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (3))){
var inst_14748 = (state_14751[(2)]);
var inst_14749 = cljs.core.async.close_BANG_(out);
var state_14751__$1 = (function (){var statearr_14760 = state_14751;
(statearr_14760[(9)] = inst_14748);

return statearr_14760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14751__$1,inst_14749);
} else {
if((state_val_14752 === (2))){
var state_14751__$1 = state_14751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14751__$1,(4),ch);
} else {
if((state_val_14752 === (11))){
var inst_14731 = (state_14751[(8)]);
var inst_14740 = (state_14751[(2)]);
var inst_14728 = inst_14731;
var state_14751__$1 = (function (){var statearr_14761 = state_14751;
(statearr_14761[(10)] = inst_14740);

(statearr_14761[(7)] = inst_14728);

return statearr_14761;
})();
var statearr_14762_14786 = state_14751__$1;
(statearr_14762_14786[(2)] = null);

(statearr_14762_14786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (9))){
var inst_14731 = (state_14751[(8)]);
var state_14751__$1 = state_14751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14751__$1,(11),out,inst_14731);
} else {
if((state_val_14752 === (5))){
var inst_14731 = (state_14751[(8)]);
var inst_14728 = (state_14751[(7)]);
var inst_14735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14731,inst_14728);
var state_14751__$1 = state_14751;
if(inst_14735){
var statearr_14764_14787 = state_14751__$1;
(statearr_14764_14787[(1)] = (8));

} else {
var statearr_14765_14788 = state_14751__$1;
(statearr_14765_14788[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (10))){
var inst_14743 = (state_14751[(2)]);
var state_14751__$1 = state_14751;
var statearr_14766_14789 = state_14751__$1;
(statearr_14766_14789[(2)] = inst_14743);

(statearr_14766_14789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14752 === (8))){
var inst_14728 = (state_14751[(7)]);
var tmp14763 = inst_14728;
var inst_14728__$1 = tmp14763;
var state_14751__$1 = (function (){var statearr_14767 = state_14751;
(statearr_14767[(7)] = inst_14728__$1);

return statearr_14767;
})();
var statearr_14768_14790 = state_14751__$1;
(statearr_14768_14790[(2)] = null);

(statearr_14768_14790[(1)] = (2));


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
});})(c__12180__auto___14780,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14780,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14772[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14772[(1)] = (1));

return statearr_14772;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14751){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14751);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14773){if((e14773 instanceof Object)){
var ex__12070__auto__ = e14773;
var statearr_14774_14791 = state_14751;
(statearr_14774_14791[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14751);

return cljs.core.cst$kw$recur;
} else {
throw e14773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14792 = state_14751;
state_14751 = G__14792;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14780,out))
})();
var state__12182__auto__ = (function (){var statearr_14775 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14780);

return statearr_14775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14780,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14793 = [];
var len__5726__auto___14863 = arguments.length;
var i__5727__auto___14864 = (0);
while(true){
if((i__5727__auto___14864 < len__5726__auto___14863)){
args14793.push((arguments[i__5727__auto___14864]));

var G__14865 = (i__5727__auto___14864 + (1));
i__5727__auto___14864 = G__14865;
continue;
} else {
}
break;
}

var G__14795 = args14793.length;
switch (G__14795) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14793.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14867,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14867,out){
return (function (state_14833){
var state_val_14834 = (state_14833[(1)]);
if((state_val_14834 === (7))){
var inst_14829 = (state_14833[(2)]);
var state_14833__$1 = state_14833;
var statearr_14835_14868 = state_14833__$1;
(statearr_14835_14868[(2)] = inst_14829);

(statearr_14835_14868[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (1))){
var inst_14796 = (new Array(n));
var inst_14797 = inst_14796;
var inst_14798 = (0);
var state_14833__$1 = (function (){var statearr_14836 = state_14833;
(statearr_14836[(7)] = inst_14797);

(statearr_14836[(8)] = inst_14798);

return statearr_14836;
})();
var statearr_14837_14869 = state_14833__$1;
(statearr_14837_14869[(2)] = null);

(statearr_14837_14869[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (4))){
var inst_14801 = (state_14833[(9)]);
var inst_14801__$1 = (state_14833[(2)]);
var inst_14802 = (inst_14801__$1 == null);
var inst_14803 = cljs.core.not(inst_14802);
var state_14833__$1 = (function (){var statearr_14838 = state_14833;
(statearr_14838[(9)] = inst_14801__$1);

return statearr_14838;
})();
if(inst_14803){
var statearr_14839_14870 = state_14833__$1;
(statearr_14839_14870[(1)] = (5));

} else {
var statearr_14840_14871 = state_14833__$1;
(statearr_14840_14871[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (15))){
var inst_14823 = (state_14833[(2)]);
var state_14833__$1 = state_14833;
var statearr_14841_14872 = state_14833__$1;
(statearr_14841_14872[(2)] = inst_14823);

(statearr_14841_14872[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (13))){
var state_14833__$1 = state_14833;
var statearr_14842_14873 = state_14833__$1;
(statearr_14842_14873[(2)] = null);

(statearr_14842_14873[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (6))){
var inst_14798 = (state_14833[(8)]);
var inst_14819 = (inst_14798 > (0));
var state_14833__$1 = state_14833;
if(cljs.core.truth_(inst_14819)){
var statearr_14843_14874 = state_14833__$1;
(statearr_14843_14874[(1)] = (12));

} else {
var statearr_14844_14875 = state_14833__$1;
(statearr_14844_14875[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (3))){
var inst_14831 = (state_14833[(2)]);
var state_14833__$1 = state_14833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14833__$1,inst_14831);
} else {
if((state_val_14834 === (12))){
var inst_14797 = (state_14833[(7)]);
var inst_14821 = cljs.core.vec(inst_14797);
var state_14833__$1 = state_14833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14833__$1,(15),out,inst_14821);
} else {
if((state_val_14834 === (2))){
var state_14833__$1 = state_14833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14833__$1,(4),ch);
} else {
if((state_val_14834 === (11))){
var inst_14813 = (state_14833[(2)]);
var inst_14814 = (new Array(n));
var inst_14797 = inst_14814;
var inst_14798 = (0);
var state_14833__$1 = (function (){var statearr_14845 = state_14833;
(statearr_14845[(10)] = inst_14813);

(statearr_14845[(7)] = inst_14797);

(statearr_14845[(8)] = inst_14798);

return statearr_14845;
})();
var statearr_14846_14876 = state_14833__$1;
(statearr_14846_14876[(2)] = null);

(statearr_14846_14876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (9))){
var inst_14797 = (state_14833[(7)]);
var inst_14811 = cljs.core.vec(inst_14797);
var state_14833__$1 = state_14833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14833__$1,(11),out,inst_14811);
} else {
if((state_val_14834 === (5))){
var inst_14797 = (state_14833[(7)]);
var inst_14801 = (state_14833[(9)]);
var inst_14806 = (state_14833[(11)]);
var inst_14798 = (state_14833[(8)]);
var inst_14805 = (inst_14797[inst_14798] = inst_14801);
var inst_14806__$1 = (inst_14798 + (1));
var inst_14807 = (inst_14806__$1 < n);
var state_14833__$1 = (function (){var statearr_14847 = state_14833;
(statearr_14847[(12)] = inst_14805);

(statearr_14847[(11)] = inst_14806__$1);

return statearr_14847;
})();
if(cljs.core.truth_(inst_14807)){
var statearr_14848_14877 = state_14833__$1;
(statearr_14848_14877[(1)] = (8));

} else {
var statearr_14849_14878 = state_14833__$1;
(statearr_14849_14878[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (14))){
var inst_14826 = (state_14833[(2)]);
var inst_14827 = cljs.core.async.close_BANG_(out);
var state_14833__$1 = (function (){var statearr_14851 = state_14833;
(statearr_14851[(13)] = inst_14826);

return statearr_14851;
})();
var statearr_14852_14879 = state_14833__$1;
(statearr_14852_14879[(2)] = inst_14827);

(statearr_14852_14879[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (10))){
var inst_14817 = (state_14833[(2)]);
var state_14833__$1 = state_14833;
var statearr_14853_14880 = state_14833__$1;
(statearr_14853_14880[(2)] = inst_14817);

(statearr_14853_14880[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14834 === (8))){
var inst_14797 = (state_14833[(7)]);
var inst_14806 = (state_14833[(11)]);
var tmp14850 = inst_14797;
var inst_14797__$1 = tmp14850;
var inst_14798 = inst_14806;
var state_14833__$1 = (function (){var statearr_14854 = state_14833;
(statearr_14854[(7)] = inst_14797__$1);

(statearr_14854[(8)] = inst_14798);

return statearr_14854;
})();
var statearr_14855_14881 = state_14833__$1;
(statearr_14855_14881[(2)] = null);

(statearr_14855_14881[(1)] = (2));


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
});})(c__12180__auto___14867,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14867,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14859[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14859[(1)] = (1));

return statearr_14859;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14833){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14833);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14860){if((e14860 instanceof Object)){
var ex__12070__auto__ = e14860;
var statearr_14861_14882 = state_14833;
(statearr_14861_14882[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14833);

return cljs.core.cst$kw$recur;
} else {
throw e14860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14883 = state_14833;
state_14833 = G__14883;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14867,out))
})();
var state__12182__auto__ = (function (){var statearr_14862 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14867);

return statearr_14862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14867,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14884 = [];
var len__5726__auto___14958 = arguments.length;
var i__5727__auto___14959 = (0);
while(true){
if((i__5727__auto___14959 < len__5726__auto___14958)){
args14884.push((arguments[i__5727__auto___14959]));

var G__14960 = (i__5727__auto___14959 + (1));
i__5727__auto___14959 = G__14960;
continue;
} else {
}
break;
}

var G__14886 = args14884.length;
switch (G__14886) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14884.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12180__auto___14962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12180__auto___14962,out){
return (function (){
var f__12181__auto__ = (function (){var switch__12066__auto__ = ((function (c__12180__auto___14962,out){
return (function (state_14928){
var state_val_14929 = (state_14928[(1)]);
if((state_val_14929 === (7))){
var inst_14924 = (state_14928[(2)]);
var state_14928__$1 = state_14928;
var statearr_14930_14963 = state_14928__$1;
(statearr_14930_14963[(2)] = inst_14924);

(statearr_14930_14963[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (1))){
var inst_14887 = [];
var inst_14888 = inst_14887;
var inst_14889 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_14928__$1 = (function (){var statearr_14931 = state_14928;
(statearr_14931[(7)] = inst_14889);

(statearr_14931[(8)] = inst_14888);

return statearr_14931;
})();
var statearr_14932_14964 = state_14928__$1;
(statearr_14932_14964[(2)] = null);

(statearr_14932_14964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (4))){
var inst_14892 = (state_14928[(9)]);
var inst_14892__$1 = (state_14928[(2)]);
var inst_14893 = (inst_14892__$1 == null);
var inst_14894 = cljs.core.not(inst_14893);
var state_14928__$1 = (function (){var statearr_14933 = state_14928;
(statearr_14933[(9)] = inst_14892__$1);

return statearr_14933;
})();
if(inst_14894){
var statearr_14934_14965 = state_14928__$1;
(statearr_14934_14965[(1)] = (5));

} else {
var statearr_14935_14966 = state_14928__$1;
(statearr_14935_14966[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (15))){
var inst_14918 = (state_14928[(2)]);
var state_14928__$1 = state_14928;
var statearr_14936_14967 = state_14928__$1;
(statearr_14936_14967[(2)] = inst_14918);

(statearr_14936_14967[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (13))){
var state_14928__$1 = state_14928;
var statearr_14937_14968 = state_14928__$1;
(statearr_14937_14968[(2)] = null);

(statearr_14937_14968[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (6))){
var inst_14888 = (state_14928[(8)]);
var inst_14913 = inst_14888.length;
var inst_14914 = (inst_14913 > (0));
var state_14928__$1 = state_14928;
if(cljs.core.truth_(inst_14914)){
var statearr_14938_14969 = state_14928__$1;
(statearr_14938_14969[(1)] = (12));

} else {
var statearr_14939_14970 = state_14928__$1;
(statearr_14939_14970[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (3))){
var inst_14926 = (state_14928[(2)]);
var state_14928__$1 = state_14928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14928__$1,inst_14926);
} else {
if((state_val_14929 === (12))){
var inst_14888 = (state_14928[(8)]);
var inst_14916 = cljs.core.vec(inst_14888);
var state_14928__$1 = state_14928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14928__$1,(15),out,inst_14916);
} else {
if((state_val_14929 === (2))){
var state_14928__$1 = state_14928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14928__$1,(4),ch);
} else {
if((state_val_14929 === (11))){
var inst_14892 = (state_14928[(9)]);
var inst_14896 = (state_14928[(10)]);
var inst_14906 = (state_14928[(2)]);
var inst_14907 = [];
var inst_14908 = inst_14907.push(inst_14892);
var inst_14888 = inst_14907;
var inst_14889 = inst_14896;
var state_14928__$1 = (function (){var statearr_14940 = state_14928;
(statearr_14940[(11)] = inst_14906);

(statearr_14940[(12)] = inst_14908);

(statearr_14940[(7)] = inst_14889);

(statearr_14940[(8)] = inst_14888);

return statearr_14940;
})();
var statearr_14941_14971 = state_14928__$1;
(statearr_14941_14971[(2)] = null);

(statearr_14941_14971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (9))){
var inst_14888 = (state_14928[(8)]);
var inst_14904 = cljs.core.vec(inst_14888);
var state_14928__$1 = state_14928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14928__$1,(11),out,inst_14904);
} else {
if((state_val_14929 === (5))){
var inst_14892 = (state_14928[(9)]);
var inst_14896 = (state_14928[(10)]);
var inst_14889 = (state_14928[(7)]);
var inst_14896__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14892) : f.call(null,inst_14892));
var inst_14897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14896__$1,inst_14889);
var inst_14898 = cljs.core.keyword_identical_QMARK_(inst_14889,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_14899 = (inst_14897) || (inst_14898);
var state_14928__$1 = (function (){var statearr_14942 = state_14928;
(statearr_14942[(10)] = inst_14896__$1);

return statearr_14942;
})();
if(cljs.core.truth_(inst_14899)){
var statearr_14943_14972 = state_14928__$1;
(statearr_14943_14972[(1)] = (8));

} else {
var statearr_14944_14973 = state_14928__$1;
(statearr_14944_14973[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (14))){
var inst_14921 = (state_14928[(2)]);
var inst_14922 = cljs.core.async.close_BANG_(out);
var state_14928__$1 = (function (){var statearr_14946 = state_14928;
(statearr_14946[(13)] = inst_14921);

return statearr_14946;
})();
var statearr_14947_14974 = state_14928__$1;
(statearr_14947_14974[(2)] = inst_14922);

(statearr_14947_14974[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (10))){
var inst_14911 = (state_14928[(2)]);
var state_14928__$1 = state_14928;
var statearr_14948_14975 = state_14928__$1;
(statearr_14948_14975[(2)] = inst_14911);

(statearr_14948_14975[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14929 === (8))){
var inst_14892 = (state_14928[(9)]);
var inst_14896 = (state_14928[(10)]);
var inst_14888 = (state_14928[(8)]);
var inst_14901 = inst_14888.push(inst_14892);
var tmp14945 = inst_14888;
var inst_14888__$1 = tmp14945;
var inst_14889 = inst_14896;
var state_14928__$1 = (function (){var statearr_14949 = state_14928;
(statearr_14949[(14)] = inst_14901);

(statearr_14949[(7)] = inst_14889);

(statearr_14949[(8)] = inst_14888__$1);

return statearr_14949;
})();
var statearr_14950_14976 = state_14928__$1;
(statearr_14950_14976[(2)] = null);

(statearr_14950_14976[(1)] = (2));


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
});})(c__12180__auto___14962,out))
;
return ((function (switch__12066__auto__,c__12180__auto___14962,out){
return (function() {
var cljs$core$async$state_machine__12067__auto__ = null;
var cljs$core$async$state_machine__12067__auto____0 = (function (){
var statearr_14954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14954[(0)] = cljs$core$async$state_machine__12067__auto__);

(statearr_14954[(1)] = (1));

return statearr_14954;
});
var cljs$core$async$state_machine__12067__auto____1 = (function (state_14928){
while(true){
var ret_value__12068__auto__ = (function (){try{while(true){
var result__12069__auto__ = switch__12066__auto__(state_14928);
if(cljs.core.keyword_identical_QMARK_(result__12069__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12069__auto__;
}
break;
}
}catch (e14955){if((e14955 instanceof Object)){
var ex__12070__auto__ = e14955;
var statearr_14956_14977 = state_14928;
(statearr_14956_14977[(5)] = ex__12070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14928);

return cljs.core.cst$kw$recur;
} else {
throw e14955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12068__auto__,cljs.core.cst$kw$recur)){
var G__14978 = state_14928;
state_14928 = G__14978;
continue;
} else {
return ret_value__12068__auto__;
}
break;
}
});
cljs$core$async$state_machine__12067__auto__ = function(state_14928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12067__auto____1.call(this,state_14928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12067__auto____0;
cljs$core$async$state_machine__12067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12067__auto____1;
return cljs$core$async$state_machine__12067__auto__;
})()
;})(switch__12066__auto__,c__12180__auto___14962,out))
})();
var state__12182__auto__ = (function (){var statearr_14957 = (f__12181__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12181__auto__.cljs$core$IFn$_invoke$arity$0() : f__12181__auto__.call(null));
(statearr_14957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12180__auto___14962);

return statearr_14957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12182__auto__);
});})(c__12180__auto___14962,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
