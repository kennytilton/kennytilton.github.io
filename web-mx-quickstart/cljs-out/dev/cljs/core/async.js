// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14327 = arguments.length;
switch (G__14327) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14328 = (function (f,blockable,meta14329){
this.f = f;
this.blockable = blockable;
this.meta14329 = meta14329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14330,meta14329__$1){
var self__ = this;
var _14330__$1 = this;
return (new cljs.core.async.t_cljs$core$async14328(self__.f,self__.blockable,meta14329__$1));
}));

(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14330){
var self__ = this;
var _14330__$1 = this;
return self__.meta14329;
}));

(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14329], null);
}));

(cljs.core.async.t_cljs$core$async14328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14328");

(cljs.core.async.t_cljs$core$async14328.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14328.
 */
cljs.core.async.__GT_t_cljs$core$async14328 = (function cljs$core$async$__GT_t_cljs$core$async14328(f__$1,blockable__$1,meta14329){
return (new cljs.core.async.t_cljs$core$async14328(f__$1,blockable__$1,meta14329));
});

}

return (new cljs.core.async.t_cljs$core$async14328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__14334 = arguments.length;
switch (G__14334) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14337 = arguments.length;
switch (G__14337) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__14340 = arguments.length;
switch (G__14340) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14342 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14342) : fn1.call(null,val_14342));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14342) : fn1.call(null,val_14342));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__14344 = arguments.length;
switch (G__14344) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___14346 = n;
var x_14347 = (0);
while(true){
if((x_14347 < n__4613__auto___14346)){
(a[x_14347] = (0));

var G__14348 = (x_14347 + (1));
x_14347 = G__14348;
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

var G__14349 = (i + (1));
i = G__14349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14350 = (function (flag,meta14351){
this.flag = flag;
this.meta14351 = meta14351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14352,meta14351__$1){
var self__ = this;
var _14352__$1 = this;
return (new cljs.core.async.t_cljs$core$async14350(self__.flag,meta14351__$1));
}));

(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14352){
var self__ = this;
var _14352__$1 = this;
return self__.meta14351;
}));

(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14351], null);
}));

(cljs.core.async.t_cljs$core$async14350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14350");

(cljs.core.async.t_cljs$core$async14350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14350.
 */
cljs.core.async.__GT_t_cljs$core$async14350 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14350(flag__$1,meta14351){
return (new cljs.core.async.t_cljs$core$async14350(flag__$1,meta14351));
});

}

return (new cljs.core.async.t_cljs$core$async14350(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14353 = (function (flag,cb,meta14354){
this.flag = flag;
this.cb = cb;
this.meta14354 = meta14354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14355,meta14354__$1){
var self__ = this;
var _14355__$1 = this;
return (new cljs.core.async.t_cljs$core$async14353(self__.flag,self__.cb,meta14354__$1));
}));

(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14355){
var self__ = this;
var _14355__$1 = this;
return self__.meta14354;
}));

(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14354], null);
}));

(cljs.core.async.t_cljs$core$async14353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14353");

(cljs.core.async.t_cljs$core$async14353.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14353.
 */
cljs.core.async.__GT_t_cljs$core$async14353 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14353(flag__$1,cb__$1,meta14354){
return (new cljs.core.async.t_cljs$core$async14353(flag__$1,cb__$1,meta14354));
});

}

return (new cljs.core.async.t_cljs$core$async14353(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14356_SHARP_){
var G__14358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14356_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14358) : fret.call(null,G__14358));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14357_SHARP_){
var G__14359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14357_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14359) : fret.call(null,G__14359));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14360 = (i + (1));
i = G__14360;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5804__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___14366 = arguments.length;
var i__4737__auto___14367 = (0);
while(true){
if((i__4737__auto___14367 < len__4736__auto___14366)){
args__4742__auto__.push((arguments[i__4737__auto___14367]));

var G__14368 = (i__4737__auto___14367 + (1));
i__4737__auto___14367 = G__14368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14363){
var map__14364 = p__14363;
var map__14364__$1 = (((((!((map__14364 == null))))?(((((map__14364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14364):map__14364);
var opts = map__14364__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14361){
var G__14362 = cljs.core.first(seq14361);
var seq14361__$1 = cljs.core.next(seq14361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14362,seq14361__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__14370 = arguments.length;
switch (G__14370) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12386__auto___14416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14394){
var state_val_14395 = (state_14394[(1)]);
if((state_val_14395 === (7))){
var inst_14390 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
var statearr_14396_14417 = state_14394__$1;
(statearr_14396_14417[(2)] = inst_14390);

(statearr_14396_14417[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (1))){
var state_14394__$1 = state_14394;
var statearr_14397_14418 = state_14394__$1;
(statearr_14397_14418[(2)] = null);

(statearr_14397_14418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (4))){
var inst_14373 = (state_14394[(7)]);
var inst_14373__$1 = (state_14394[(2)]);
var inst_14374 = (inst_14373__$1 == null);
var state_14394__$1 = (function (){var statearr_14398 = state_14394;
(statearr_14398[(7)] = inst_14373__$1);

return statearr_14398;
})();
if(cljs.core.truth_(inst_14374)){
var statearr_14399_14419 = state_14394__$1;
(statearr_14399_14419[(1)] = (5));

} else {
var statearr_14400_14420 = state_14394__$1;
(statearr_14400_14420[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (13))){
var state_14394__$1 = state_14394;
var statearr_14401_14421 = state_14394__$1;
(statearr_14401_14421[(2)] = null);

(statearr_14401_14421[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (6))){
var inst_14373 = (state_14394[(7)]);
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14394__$1,(11),to,inst_14373);
} else {
if((state_val_14395 === (3))){
var inst_14392 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14394__$1,inst_14392);
} else {
if((state_val_14395 === (12))){
var state_14394__$1 = state_14394;
var statearr_14402_14422 = state_14394__$1;
(statearr_14402_14422[(2)] = null);

(statearr_14402_14422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (2))){
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14394__$1,(4),from);
} else {
if((state_val_14395 === (11))){
var inst_14383 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
if(cljs.core.truth_(inst_14383)){
var statearr_14403_14423 = state_14394__$1;
(statearr_14403_14423[(1)] = (12));

} else {
var statearr_14404_14424 = state_14394__$1;
(statearr_14404_14424[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (9))){
var state_14394__$1 = state_14394;
var statearr_14405_14425 = state_14394__$1;
(statearr_14405_14425[(2)] = null);

(statearr_14405_14425[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (5))){
var state_14394__$1 = state_14394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14406_14426 = state_14394__$1;
(statearr_14406_14426[(1)] = (8));

} else {
var statearr_14407_14427 = state_14394__$1;
(statearr_14407_14427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (14))){
var inst_14388 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
var statearr_14408_14428 = state_14394__$1;
(statearr_14408_14428[(2)] = inst_14388);

(statearr_14408_14428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (10))){
var inst_14380 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
var statearr_14409_14429 = state_14394__$1;
(statearr_14409_14429[(2)] = inst_14380);

(statearr_14409_14429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14395 === (8))){
var inst_14377 = cljs.core.async.close_BANG_(to);
var state_14394__$1 = state_14394;
var statearr_14410_14430 = state_14394__$1;
(statearr_14410_14430[(2)] = inst_14377);

(statearr_14410_14430[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_14411 = [null,null,null,null,null,null,null,null];
(statearr_14411[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_14411[(1)] = (1));

return statearr_14411;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_14394){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14394);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14412){if((e14412 instanceof Object)){
var ex__12199__auto__ = e14412;
var statearr_14413_14431 = state_14394;
(statearr_14413_14431[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14394);

return cljs.core.cst$kw$recur;
} else {
throw e14412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14432 = state_14394;
state_14394 = G__14432;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_14394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_14394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14414 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14414[(6)] = c__12386__auto___14416);

return statearr_14414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__14433){
var vec__14434 = p__14433;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434,(1),null);
var job = vec__14434;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12386__auto___14605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14441){
var state_val_14442 = (state_14441[(1)]);
if((state_val_14442 === (1))){
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14441__$1,(2),res,v);
} else {
if((state_val_14442 === (2))){
var inst_14438 = (state_14441[(2)]);
var inst_14439 = cljs.core.async.close_BANG_(res);
var state_14441__$1 = (function (){var statearr_14443 = state_14441;
(statearr_14443[(7)] = inst_14438);

return statearr_14443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14441__$1,inst_14439);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_14444 = [null,null,null,null,null,null,null,null];
(statearr_14444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__);

(statearr_14444[(1)] = (1));

return statearr_14444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1 = (function (state_14441){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14441);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14445){if((e14445 instanceof Object)){
var ex__12199__auto__ = e14445;
var statearr_14446_14606 = state_14441;
(statearr_14446_14606[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14441);

return cljs.core.cst$kw$recur;
} else {
throw e14445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14607 = state_14441;
state_14441 = G__14607;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = function(state_14441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1.call(this,state_14441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14447 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14447[(6)] = c__12386__auto___14605);

return statearr_14447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14448){
var vec__14449 = p__14448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14449,(1),null);
var job = vec__14449;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___14608 = n;
var __14609 = (0);
while(true){
if((__14609 < n__4613__auto___14608)){
var G__14452_14610 = type;
var G__14452_14611__$1 = (((G__14452_14610 instanceof cljs.core.Keyword))?G__14452_14610.fqn:null);
switch (G__14452_14611__$1) {
case "compute":
var c__12386__auto___14613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14609,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = ((function (__14609,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function (state_14465){
var state_val_14466 = (state_14465[(1)]);
if((state_val_14466 === (1))){
var state_14465__$1 = state_14465;
var statearr_14467_14614 = state_14465__$1;
(statearr_14467_14614[(2)] = null);

(statearr_14467_14614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14466 === (2))){
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14465__$1,(4),jobs);
} else {
if((state_val_14466 === (3))){
var inst_14463 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14465__$1,inst_14463);
} else {
if((state_val_14466 === (4))){
var inst_14455 = (state_14465[(2)]);
var inst_14456 = process(inst_14455);
var state_14465__$1 = state_14465;
if(cljs.core.truth_(inst_14456)){
var statearr_14468_14615 = state_14465__$1;
(statearr_14468_14615[(1)] = (5));

} else {
var statearr_14469_14616 = state_14465__$1;
(statearr_14469_14616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14466 === (5))){
var state_14465__$1 = state_14465;
var statearr_14470_14617 = state_14465__$1;
(statearr_14470_14617[(2)] = null);

(statearr_14470_14617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14466 === (6))){
var state_14465__$1 = state_14465;
var statearr_14471_14618 = state_14465__$1;
(statearr_14471_14618[(2)] = null);

(statearr_14471_14618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14466 === (7))){
var inst_14461 = (state_14465[(2)]);
var state_14465__$1 = state_14465;
var statearr_14472_14619 = state_14465__$1;
(statearr_14472_14619[(2)] = inst_14461);

(statearr_14472_14619[(1)] = (3));


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
});})(__14609,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
;
return ((function (__14609,switch__12195__auto__,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_14473 = [null,null,null,null,null,null,null];
(statearr_14473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__);

(statearr_14473[(1)] = (1));

return statearr_14473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1 = (function (state_14465){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14465);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14474){if((e14474 instanceof Object)){
var ex__12199__auto__ = e14474;
var statearr_14475_14620 = state_14465;
(statearr_14475_14620[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14465);

return cljs.core.cst$kw$recur;
} else {
throw e14474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14621 = state_14465;
state_14465 = G__14621;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = function(state_14465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1.call(this,state_14465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__;
})()
;})(__14609,switch__12195__auto__,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
})();
var state__12388__auto__ = (function (){var statearr_14476 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14476[(6)] = c__12386__auto___14613);

return statearr_14476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
});})(__14609,c__12386__auto___14613,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
);


break;
case "async":
var c__12386__auto___14622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14609,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = ((function (__14609,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function (state_14489){
var state_val_14490 = (state_14489[(1)]);
if((state_val_14490 === (1))){
var state_14489__$1 = state_14489;
var statearr_14491_14623 = state_14489__$1;
(statearr_14491_14623[(2)] = null);

(statearr_14491_14623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14490 === (2))){
var state_14489__$1 = state_14489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14489__$1,(4),jobs);
} else {
if((state_val_14490 === (3))){
var inst_14487 = (state_14489[(2)]);
var state_14489__$1 = state_14489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14489__$1,inst_14487);
} else {
if((state_val_14490 === (4))){
var inst_14479 = (state_14489[(2)]);
var inst_14480 = async(inst_14479);
var state_14489__$1 = state_14489;
if(cljs.core.truth_(inst_14480)){
var statearr_14492_14624 = state_14489__$1;
(statearr_14492_14624[(1)] = (5));

} else {
var statearr_14493_14625 = state_14489__$1;
(statearr_14493_14625[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14490 === (5))){
var state_14489__$1 = state_14489;
var statearr_14494_14626 = state_14489__$1;
(statearr_14494_14626[(2)] = null);

(statearr_14494_14626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14490 === (6))){
var state_14489__$1 = state_14489;
var statearr_14495_14627 = state_14489__$1;
(statearr_14495_14627[(2)] = null);

(statearr_14495_14627[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14490 === (7))){
var inst_14485 = (state_14489[(2)]);
var state_14489__$1 = state_14489;
var statearr_14496_14628 = state_14489__$1;
(statearr_14496_14628[(2)] = inst_14485);

(statearr_14496_14628[(1)] = (3));


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
});})(__14609,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
;
return ((function (__14609,switch__12195__auto__,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_14497 = [null,null,null,null,null,null,null];
(statearr_14497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__);

(statearr_14497[(1)] = (1));

return statearr_14497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1 = (function (state_14489){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14489);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14498){if((e14498 instanceof Object)){
var ex__12199__auto__ = e14498;
var statearr_14499_14629 = state_14489;
(statearr_14499_14629[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14489);

return cljs.core.cst$kw$recur;
} else {
throw e14498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14630 = state_14489;
state_14489 = G__14630;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = function(state_14489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1.call(this,state_14489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__;
})()
;})(__14609,switch__12195__auto__,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
})();
var state__12388__auto__ = (function (){var statearr_14500 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14500[(6)] = c__12386__auto___14622);

return statearr_14500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
});})(__14609,c__12386__auto___14622,G__14452_14610,G__14452_14611__$1,n__4613__auto___14608,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14452_14611__$1)].join('')));

}

var G__14631 = (__14609 + (1));
__14609 = G__14631;
continue;
} else {
}
break;
}

var c__12386__auto___14632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14522){
var state_val_14523 = (state_14522[(1)]);
if((state_val_14523 === (7))){
var inst_14518 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14524_14633 = state_14522__$1;
(statearr_14524_14633[(2)] = inst_14518);

(statearr_14524_14633[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14523 === (1))){
var state_14522__$1 = state_14522;
var statearr_14525_14634 = state_14522__$1;
(statearr_14525_14634[(2)] = null);

(statearr_14525_14634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14523 === (4))){
var inst_14503 = (state_14522[(7)]);
var inst_14503__$1 = (state_14522[(2)]);
var inst_14504 = (inst_14503__$1 == null);
var state_14522__$1 = (function (){var statearr_14526 = state_14522;
(statearr_14526[(7)] = inst_14503__$1);

return statearr_14526;
})();
if(cljs.core.truth_(inst_14504)){
var statearr_14527_14635 = state_14522__$1;
(statearr_14527_14635[(1)] = (5));

} else {
var statearr_14528_14636 = state_14522__$1;
(statearr_14528_14636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14523 === (6))){
var inst_14503 = (state_14522[(7)]);
var inst_14508 = (state_14522[(8)]);
var inst_14508__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14510 = [inst_14503,inst_14508__$1];
var inst_14511 = (new cljs.core.PersistentVector(null,2,(5),inst_14509,inst_14510,null));
var state_14522__$1 = (function (){var statearr_14529 = state_14522;
(statearr_14529[(8)] = inst_14508__$1);

return statearr_14529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14522__$1,(8),jobs,inst_14511);
} else {
if((state_val_14523 === (3))){
var inst_14520 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14522__$1,inst_14520);
} else {
if((state_val_14523 === (2))){
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14522__$1,(4),from);
} else {
if((state_val_14523 === (9))){
var inst_14515 = (state_14522[(2)]);
var state_14522__$1 = (function (){var statearr_14530 = state_14522;
(statearr_14530[(9)] = inst_14515);

return statearr_14530;
})();
var statearr_14531_14637 = state_14522__$1;
(statearr_14531_14637[(2)] = null);

(statearr_14531_14637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14523 === (5))){
var inst_14506 = cljs.core.async.close_BANG_(jobs);
var state_14522__$1 = state_14522;
var statearr_14532_14638 = state_14522__$1;
(statearr_14532_14638[(2)] = inst_14506);

(statearr_14532_14638[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14523 === (8))){
var inst_14508 = (state_14522[(8)]);
var inst_14513 = (state_14522[(2)]);
var state_14522__$1 = (function (){var statearr_14533 = state_14522;
(statearr_14533[(10)] = inst_14513);

return statearr_14533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14522__$1,(9),results,inst_14508);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_14534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__);

(statearr_14534[(1)] = (1));

return statearr_14534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1 = (function (state_14522){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14522);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14535){if((e14535 instanceof Object)){
var ex__12199__auto__ = e14535;
var statearr_14536_14639 = state_14522;
(statearr_14536_14639[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14522);

return cljs.core.cst$kw$recur;
} else {
throw e14535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14640 = state_14522;
state_14522 = G__14640;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = function(state_14522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1.call(this,state_14522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14537 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14537[(6)] = c__12386__auto___14632);

return statearr_14537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14575){
var state_val_14576 = (state_14575[(1)]);
if((state_val_14576 === (7))){
var inst_14571 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14577_14641 = state_14575__$1;
(statearr_14577_14641[(2)] = inst_14571);

(statearr_14577_14641[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (20))){
var state_14575__$1 = state_14575;
var statearr_14578_14642 = state_14575__$1;
(statearr_14578_14642[(2)] = null);

(statearr_14578_14642[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (1))){
var state_14575__$1 = state_14575;
var statearr_14579_14643 = state_14575__$1;
(statearr_14579_14643[(2)] = null);

(statearr_14579_14643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (4))){
var inst_14540 = (state_14575[(7)]);
var inst_14540__$1 = (state_14575[(2)]);
var inst_14541 = (inst_14540__$1 == null);
var state_14575__$1 = (function (){var statearr_14580 = state_14575;
(statearr_14580[(7)] = inst_14540__$1);

return statearr_14580;
})();
if(cljs.core.truth_(inst_14541)){
var statearr_14581_14644 = state_14575__$1;
(statearr_14581_14644[(1)] = (5));

} else {
var statearr_14582_14645 = state_14575__$1;
(statearr_14582_14645[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (15))){
var inst_14553 = (state_14575[(8)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14575__$1,(18),to,inst_14553);
} else {
if((state_val_14576 === (21))){
var inst_14566 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14583_14646 = state_14575__$1;
(statearr_14583_14646[(2)] = inst_14566);

(statearr_14583_14646[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (13))){
var inst_14568 = (state_14575[(2)]);
var state_14575__$1 = (function (){var statearr_14584 = state_14575;
(statearr_14584[(9)] = inst_14568);

return statearr_14584;
})();
var statearr_14585_14647 = state_14575__$1;
(statearr_14585_14647[(2)] = null);

(statearr_14585_14647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (6))){
var inst_14540 = (state_14575[(7)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(11),inst_14540);
} else {
if((state_val_14576 === (17))){
var inst_14561 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
if(cljs.core.truth_(inst_14561)){
var statearr_14586_14648 = state_14575__$1;
(statearr_14586_14648[(1)] = (19));

} else {
var statearr_14587_14649 = state_14575__$1;
(statearr_14587_14649[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (3))){
var inst_14573 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14575__$1,inst_14573);
} else {
if((state_val_14576 === (12))){
var inst_14550 = (state_14575[(10)]);
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(14),inst_14550);
} else {
if((state_val_14576 === (2))){
var state_14575__$1 = state_14575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14575__$1,(4),results);
} else {
if((state_val_14576 === (19))){
var state_14575__$1 = state_14575;
var statearr_14588_14650 = state_14575__$1;
(statearr_14588_14650[(2)] = null);

(statearr_14588_14650[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (11))){
var inst_14550 = (state_14575[(2)]);
var state_14575__$1 = (function (){var statearr_14589 = state_14575;
(statearr_14589[(10)] = inst_14550);

return statearr_14589;
})();
var statearr_14590_14651 = state_14575__$1;
(statearr_14590_14651[(2)] = null);

(statearr_14590_14651[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (9))){
var state_14575__$1 = state_14575;
var statearr_14591_14652 = state_14575__$1;
(statearr_14591_14652[(2)] = null);

(statearr_14591_14652[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (5))){
var state_14575__$1 = state_14575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14592_14653 = state_14575__$1;
(statearr_14592_14653[(1)] = (8));

} else {
var statearr_14593_14654 = state_14575__$1;
(statearr_14593_14654[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (14))){
var inst_14553 = (state_14575[(8)]);
var inst_14553__$1 = (state_14575[(2)]);
var inst_14554 = (inst_14553__$1 == null);
var inst_14555 = cljs.core.not(inst_14554);
var state_14575__$1 = (function (){var statearr_14594 = state_14575;
(statearr_14594[(8)] = inst_14553__$1);

return statearr_14594;
})();
if(inst_14555){
var statearr_14595_14655 = state_14575__$1;
(statearr_14595_14655[(1)] = (15));

} else {
var statearr_14596_14656 = state_14575__$1;
(statearr_14596_14656[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (16))){
var state_14575__$1 = state_14575;
var statearr_14597_14657 = state_14575__$1;
(statearr_14597_14657[(2)] = false);

(statearr_14597_14657[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (10))){
var inst_14547 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14598_14658 = state_14575__$1;
(statearr_14598_14658[(2)] = inst_14547);

(statearr_14598_14658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (18))){
var inst_14558 = (state_14575[(2)]);
var state_14575__$1 = state_14575;
var statearr_14599_14659 = state_14575__$1;
(statearr_14599_14659[(2)] = inst_14558);

(statearr_14599_14659[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14576 === (8))){
var inst_14544 = cljs.core.async.close_BANG_(to);
var state_14575__$1 = state_14575;
var statearr_14600_14660 = state_14575__$1;
(statearr_14600_14660[(2)] = inst_14544);

(statearr_14600_14660[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_14601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__);

(statearr_14601[(1)] = (1));

return statearr_14601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1 = (function (state_14575){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14575);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14602){if((e14602 instanceof Object)){
var ex__12199__auto__ = e14602;
var statearr_14603_14661 = state_14575;
(statearr_14603_14661[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14575);

return cljs.core.cst$kw$recur;
} else {
throw e14602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14662 = state_14575;
state_14575 = G__14662;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__ = function(state_14575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1.call(this,state_14575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14604 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14604[(6)] = c__12386__auto__);

return statearr_14604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
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
var G__14664 = arguments.length;
switch (G__14664) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__14667 = arguments.length;
switch (G__14667) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__14670 = arguments.length;
switch (G__14670) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12386__auto___14719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14696){
var state_val_14697 = (state_14696[(1)]);
if((state_val_14697 === (7))){
var inst_14692 = (state_14696[(2)]);
var state_14696__$1 = state_14696;
var statearr_14698_14720 = state_14696__$1;
(statearr_14698_14720[(2)] = inst_14692);

(statearr_14698_14720[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (1))){
var state_14696__$1 = state_14696;
var statearr_14699_14721 = state_14696__$1;
(statearr_14699_14721[(2)] = null);

(statearr_14699_14721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (4))){
var inst_14673 = (state_14696[(7)]);
var inst_14673__$1 = (state_14696[(2)]);
var inst_14674 = (inst_14673__$1 == null);
var state_14696__$1 = (function (){var statearr_14700 = state_14696;
(statearr_14700[(7)] = inst_14673__$1);

return statearr_14700;
})();
if(cljs.core.truth_(inst_14674)){
var statearr_14701_14722 = state_14696__$1;
(statearr_14701_14722[(1)] = (5));

} else {
var statearr_14702_14723 = state_14696__$1;
(statearr_14702_14723[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (13))){
var state_14696__$1 = state_14696;
var statearr_14703_14724 = state_14696__$1;
(statearr_14703_14724[(2)] = null);

(statearr_14703_14724[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (6))){
var inst_14673 = (state_14696[(7)]);
var inst_14679 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14673) : p.call(null,inst_14673));
var state_14696__$1 = state_14696;
if(cljs.core.truth_(inst_14679)){
var statearr_14704_14725 = state_14696__$1;
(statearr_14704_14725[(1)] = (9));

} else {
var statearr_14705_14726 = state_14696__$1;
(statearr_14705_14726[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (3))){
var inst_14694 = (state_14696[(2)]);
var state_14696__$1 = state_14696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14696__$1,inst_14694);
} else {
if((state_val_14697 === (12))){
var state_14696__$1 = state_14696;
var statearr_14706_14727 = state_14696__$1;
(statearr_14706_14727[(2)] = null);

(statearr_14706_14727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (2))){
var state_14696__$1 = state_14696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14696__$1,(4),ch);
} else {
if((state_val_14697 === (11))){
var inst_14673 = (state_14696[(7)]);
var inst_14683 = (state_14696[(2)]);
var state_14696__$1 = state_14696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14696__$1,(8),inst_14683,inst_14673);
} else {
if((state_val_14697 === (9))){
var state_14696__$1 = state_14696;
var statearr_14707_14728 = state_14696__$1;
(statearr_14707_14728[(2)] = tc);

(statearr_14707_14728[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (5))){
var inst_14676 = cljs.core.async.close_BANG_(tc);
var inst_14677 = cljs.core.async.close_BANG_(fc);
var state_14696__$1 = (function (){var statearr_14708 = state_14696;
(statearr_14708[(8)] = inst_14676);

return statearr_14708;
})();
var statearr_14709_14729 = state_14696__$1;
(statearr_14709_14729[(2)] = inst_14677);

(statearr_14709_14729[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (14))){
var inst_14690 = (state_14696[(2)]);
var state_14696__$1 = state_14696;
var statearr_14710_14730 = state_14696__$1;
(statearr_14710_14730[(2)] = inst_14690);

(statearr_14710_14730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (10))){
var state_14696__$1 = state_14696;
var statearr_14711_14731 = state_14696__$1;
(statearr_14711_14731[(2)] = fc);

(statearr_14711_14731[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14697 === (8))){
var inst_14685 = (state_14696[(2)]);
var state_14696__$1 = state_14696;
if(cljs.core.truth_(inst_14685)){
var statearr_14712_14732 = state_14696__$1;
(statearr_14712_14732[(1)] = (12));

} else {
var statearr_14713_14733 = state_14696__$1;
(statearr_14713_14733[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_14714 = [null,null,null,null,null,null,null,null,null];
(statearr_14714[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_14714[(1)] = (1));

return statearr_14714;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_14696){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14696);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14715){if((e14715 instanceof Object)){
var ex__12199__auto__ = e14715;
var statearr_14716_14734 = state_14696;
(statearr_14716_14734[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14696);

return cljs.core.cst$kw$recur;
} else {
throw e14715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14735 = state_14696;
state_14696 = G__14735;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_14696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_14696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14717 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14717[(6)] = c__12386__auto___14719);

return statearr_14717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14756){
var state_val_14757 = (state_14756[(1)]);
if((state_val_14757 === (7))){
var inst_14752 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
var statearr_14758_14776 = state_14756__$1;
(statearr_14758_14776[(2)] = inst_14752);

(statearr_14758_14776[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (1))){
var inst_14736 = init;
var state_14756__$1 = (function (){var statearr_14759 = state_14756;
(statearr_14759[(7)] = inst_14736);

return statearr_14759;
})();
var statearr_14760_14777 = state_14756__$1;
(statearr_14760_14777[(2)] = null);

(statearr_14760_14777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (4))){
var inst_14739 = (state_14756[(8)]);
var inst_14739__$1 = (state_14756[(2)]);
var inst_14740 = (inst_14739__$1 == null);
var state_14756__$1 = (function (){var statearr_14761 = state_14756;
(statearr_14761[(8)] = inst_14739__$1);

return statearr_14761;
})();
if(cljs.core.truth_(inst_14740)){
var statearr_14762_14778 = state_14756__$1;
(statearr_14762_14778[(1)] = (5));

} else {
var statearr_14763_14779 = state_14756__$1;
(statearr_14763_14779[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (6))){
var inst_14736 = (state_14756[(7)]);
var inst_14739 = (state_14756[(8)]);
var inst_14743 = (state_14756[(9)]);
var inst_14743__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14736,inst_14739) : f.call(null,inst_14736,inst_14739));
var inst_14744 = cljs.core.reduced_QMARK_(inst_14743__$1);
var state_14756__$1 = (function (){var statearr_14764 = state_14756;
(statearr_14764[(9)] = inst_14743__$1);

return statearr_14764;
})();
if(inst_14744){
var statearr_14765_14780 = state_14756__$1;
(statearr_14765_14780[(1)] = (8));

} else {
var statearr_14766_14781 = state_14756__$1;
(statearr_14766_14781[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (3))){
var inst_14754 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14756__$1,inst_14754);
} else {
if((state_val_14757 === (2))){
var state_14756__$1 = state_14756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14756__$1,(4),ch);
} else {
if((state_val_14757 === (9))){
var inst_14743 = (state_14756[(9)]);
var inst_14736 = inst_14743;
var state_14756__$1 = (function (){var statearr_14767 = state_14756;
(statearr_14767[(7)] = inst_14736);

return statearr_14767;
})();
var statearr_14768_14782 = state_14756__$1;
(statearr_14768_14782[(2)] = null);

(statearr_14768_14782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (5))){
var inst_14736 = (state_14756[(7)]);
var state_14756__$1 = state_14756;
var statearr_14769_14783 = state_14756__$1;
(statearr_14769_14783[(2)] = inst_14736);

(statearr_14769_14783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (10))){
var inst_14750 = (state_14756[(2)]);
var state_14756__$1 = state_14756;
var statearr_14770_14784 = state_14756__$1;
(statearr_14770_14784[(2)] = inst_14750);

(statearr_14770_14784[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14757 === (8))){
var inst_14743 = (state_14756[(9)]);
var inst_14746 = cljs.core.deref(inst_14743);
var state_14756__$1 = state_14756;
var statearr_14771_14785 = state_14756__$1;
(statearr_14771_14785[(2)] = inst_14746);

(statearr_14771_14785[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12196__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12196__auto____0 = (function (){
var statearr_14772 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14772[(0)] = cljs$core$async$reduce_$_state_machine__12196__auto__);

(statearr_14772[(1)] = (1));

return statearr_14772;
});
var cljs$core$async$reduce_$_state_machine__12196__auto____1 = (function (state_14756){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14756);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14773){if((e14773 instanceof Object)){
var ex__12199__auto__ = e14773;
var statearr_14774_14786 = state_14756;
(statearr_14774_14786[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14756);

return cljs.core.cst$kw$recur;
} else {
throw e14773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14787 = state_14756;
state_14756 = G__14787;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12196__auto__ = function(state_14756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12196__auto____1.call(this,state_14756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12196__auto____0;
cljs$core$async$reduce_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12196__auto____1;
return cljs$core$async$reduce_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14775 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14775[(6)] = c__12386__auto__);

return statearr_14775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14793){
var state_val_14794 = (state_14793[(1)]);
if((state_val_14794 === (1))){
var inst_14788 = cljs.core.async.reduce(f__$1,init,ch);
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14793__$1,(2),inst_14788);
} else {
if((state_val_14794 === (2))){
var inst_14790 = (state_14793[(2)]);
var inst_14791 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14790) : f__$1.call(null,inst_14790));
var state_14793__$1 = state_14793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14793__$1,inst_14791);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12196__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12196__auto____0 = (function (){
var statearr_14795 = [null,null,null,null,null,null,null];
(statearr_14795[(0)] = cljs$core$async$transduce_$_state_machine__12196__auto__);

(statearr_14795[(1)] = (1));

return statearr_14795;
});
var cljs$core$async$transduce_$_state_machine__12196__auto____1 = (function (state_14793){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14793);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14796){if((e14796 instanceof Object)){
var ex__12199__auto__ = e14796;
var statearr_14797_14799 = state_14793;
(statearr_14797_14799[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14793);

return cljs.core.cst$kw$recur;
} else {
throw e14796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14800 = state_14793;
state_14793 = G__14800;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12196__auto__ = function(state_14793){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12196__auto____1.call(this,state_14793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12196__auto____0;
cljs$core$async$transduce_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12196__auto____1;
return cljs$core$async$transduce_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14798 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14798[(6)] = c__12386__auto__);

return statearr_14798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
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
var G__14802 = arguments.length;
switch (G__14802) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_14827){
var state_val_14828 = (state_14827[(1)]);
if((state_val_14828 === (7))){
var inst_14809 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14829_14850 = state_14827__$1;
(statearr_14829_14850[(2)] = inst_14809);

(statearr_14829_14850[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (1))){
var inst_14803 = cljs.core.seq(coll);
var inst_14804 = inst_14803;
var state_14827__$1 = (function (){var statearr_14830 = state_14827;
(statearr_14830[(7)] = inst_14804);

return statearr_14830;
})();
var statearr_14831_14851 = state_14827__$1;
(statearr_14831_14851[(2)] = null);

(statearr_14831_14851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (4))){
var inst_14804 = (state_14827[(7)]);
var inst_14807 = cljs.core.first(inst_14804);
var state_14827__$1 = state_14827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14827__$1,(7),ch,inst_14807);
} else {
if((state_val_14828 === (13))){
var inst_14821 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14832_14852 = state_14827__$1;
(statearr_14832_14852[(2)] = inst_14821);

(statearr_14832_14852[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (6))){
var inst_14812 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
if(cljs.core.truth_(inst_14812)){
var statearr_14833_14853 = state_14827__$1;
(statearr_14833_14853[(1)] = (8));

} else {
var statearr_14834_14854 = state_14827__$1;
(statearr_14834_14854[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (3))){
var inst_14825 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14827__$1,inst_14825);
} else {
if((state_val_14828 === (12))){
var state_14827__$1 = state_14827;
var statearr_14835_14855 = state_14827__$1;
(statearr_14835_14855[(2)] = null);

(statearr_14835_14855[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (2))){
var inst_14804 = (state_14827[(7)]);
var state_14827__$1 = state_14827;
if(cljs.core.truth_(inst_14804)){
var statearr_14836_14856 = state_14827__$1;
(statearr_14836_14856[(1)] = (4));

} else {
var statearr_14837_14857 = state_14827__$1;
(statearr_14837_14857[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (11))){
var inst_14818 = cljs.core.async.close_BANG_(ch);
var state_14827__$1 = state_14827;
var statearr_14838_14858 = state_14827__$1;
(statearr_14838_14858[(2)] = inst_14818);

(statearr_14838_14858[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (9))){
var state_14827__$1 = state_14827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14839_14859 = state_14827__$1;
(statearr_14839_14859[(1)] = (11));

} else {
var statearr_14840_14860 = state_14827__$1;
(statearr_14840_14860[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (5))){
var inst_14804 = (state_14827[(7)]);
var state_14827__$1 = state_14827;
var statearr_14841_14861 = state_14827__$1;
(statearr_14841_14861[(2)] = inst_14804);

(statearr_14841_14861[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (10))){
var inst_14823 = (state_14827[(2)]);
var state_14827__$1 = state_14827;
var statearr_14842_14862 = state_14827__$1;
(statearr_14842_14862[(2)] = inst_14823);

(statearr_14842_14862[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14828 === (8))){
var inst_14804 = (state_14827[(7)]);
var inst_14814 = cljs.core.next(inst_14804);
var inst_14804__$1 = inst_14814;
var state_14827__$1 = (function (){var statearr_14843 = state_14827;
(statearr_14843[(7)] = inst_14804__$1);

return statearr_14843;
})();
var statearr_14844_14863 = state_14827__$1;
(statearr_14844_14863[(2)] = null);

(statearr_14844_14863[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_14845 = [null,null,null,null,null,null,null,null];
(statearr_14845[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_14845[(1)] = (1));

return statearr_14845;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_14827){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_14827);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e14846){if((e14846 instanceof Object)){
var ex__12199__auto__ = e14846;
var statearr_14847_14864 = state_14827;
(statearr_14847_14864[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14827);

return cljs.core.cst$kw$recur;
} else {
throw e14846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__14865 = state_14827;
state_14827 = G__14865;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_14827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_14827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_14848 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_14848[(6)] = c__12386__auto__);

return statearr_14848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_14866 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14866(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14867 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14867(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14868 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14868(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14869 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14869(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14870 = (function (ch,cs,meta14871){
this.ch = ch;
this.cs = cs;
this.meta14871 = meta14871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14872,meta14871__$1){
var self__ = this;
var _14872__$1 = this;
return (new cljs.core.async.t_cljs$core$async14870(self__.ch,self__.cs,meta14871__$1));
}));

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14872){
var self__ = this;
var _14872__$1 = this;
return self__.meta14871;
}));

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14871], null);
}));

(cljs.core.async.t_cljs$core$async14870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14870");

(cljs.core.async.t_cljs$core$async14870.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async14870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14870.
 */
cljs.core.async.__GT_t_cljs$core$async14870 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14870(ch__$1,cs__$1,meta14871){
return (new cljs.core.async.t_cljs$core$async14870(ch__$1,cs__$1,meta14871));
});

}

return (new cljs.core.async.t_cljs$core$async14870(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12386__auto___15092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15007){
var state_val_15008 = (state_15007[(1)]);
if((state_val_15008 === (7))){
var inst_15003 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15009_15093 = state_15007__$1;
(statearr_15009_15093[(2)] = inst_15003);

(statearr_15009_15093[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (20))){
var inst_14906 = (state_15007[(7)]);
var inst_14918 = cljs.core.first(inst_14906);
var inst_14919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14918,(0),null);
var inst_14920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14918,(1),null);
var state_15007__$1 = (function (){var statearr_15010 = state_15007;
(statearr_15010[(8)] = inst_14919);

return statearr_15010;
})();
if(cljs.core.truth_(inst_14920)){
var statearr_15011_15094 = state_15007__$1;
(statearr_15011_15094[(1)] = (22));

} else {
var statearr_15012_15095 = state_15007__$1;
(statearr_15012_15095[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (27))){
var inst_14950 = (state_15007[(9)]);
var inst_14955 = (state_15007[(10)]);
var inst_14875 = (state_15007[(11)]);
var inst_14948 = (state_15007[(12)]);
var inst_14955__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14948,inst_14950);
var inst_14956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14955__$1,inst_14875,done);
var state_15007__$1 = (function (){var statearr_15013 = state_15007;
(statearr_15013[(10)] = inst_14955__$1);

return statearr_15013;
})();
if(cljs.core.truth_(inst_14956)){
var statearr_15014_15096 = state_15007__$1;
(statearr_15014_15096[(1)] = (30));

} else {
var statearr_15015_15097 = state_15007__$1;
(statearr_15015_15097[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (1))){
var state_15007__$1 = state_15007;
var statearr_15016_15098 = state_15007__$1;
(statearr_15016_15098[(2)] = null);

(statearr_15016_15098[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (24))){
var inst_14906 = (state_15007[(7)]);
var inst_14925 = (state_15007[(2)]);
var inst_14926 = cljs.core.next(inst_14906);
var inst_14884 = inst_14926;
var inst_14885 = null;
var inst_14886 = (0);
var inst_14887 = (0);
var state_15007__$1 = (function (){var statearr_15017 = state_15007;
(statearr_15017[(13)] = inst_14886);

(statearr_15017[(14)] = inst_14925);

(statearr_15017[(15)] = inst_14884);

(statearr_15017[(16)] = inst_14887);

(statearr_15017[(17)] = inst_14885);

return statearr_15017;
})();
var statearr_15018_15099 = state_15007__$1;
(statearr_15018_15099[(2)] = null);

(statearr_15018_15099[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (39))){
var state_15007__$1 = state_15007;
var statearr_15022_15100 = state_15007__$1;
(statearr_15022_15100[(2)] = null);

(statearr_15022_15100[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (4))){
var inst_14875 = (state_15007[(11)]);
var inst_14875__$1 = (state_15007[(2)]);
var inst_14876 = (inst_14875__$1 == null);
var state_15007__$1 = (function (){var statearr_15023 = state_15007;
(statearr_15023[(11)] = inst_14875__$1);

return statearr_15023;
})();
if(cljs.core.truth_(inst_14876)){
var statearr_15024_15101 = state_15007__$1;
(statearr_15024_15101[(1)] = (5));

} else {
var statearr_15025_15102 = state_15007__$1;
(statearr_15025_15102[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (15))){
var inst_14886 = (state_15007[(13)]);
var inst_14884 = (state_15007[(15)]);
var inst_14887 = (state_15007[(16)]);
var inst_14885 = (state_15007[(17)]);
var inst_14902 = (state_15007[(2)]);
var inst_14903 = (inst_14887 + (1));
var tmp15019 = inst_14886;
var tmp15020 = inst_14884;
var tmp15021 = inst_14885;
var inst_14884__$1 = tmp15020;
var inst_14885__$1 = tmp15021;
var inst_14886__$1 = tmp15019;
var inst_14887__$1 = inst_14903;
var state_15007__$1 = (function (){var statearr_15026 = state_15007;
(statearr_15026[(13)] = inst_14886__$1);

(statearr_15026[(18)] = inst_14902);

(statearr_15026[(15)] = inst_14884__$1);

(statearr_15026[(16)] = inst_14887__$1);

(statearr_15026[(17)] = inst_14885__$1);

return statearr_15026;
})();
var statearr_15027_15103 = state_15007__$1;
(statearr_15027_15103[(2)] = null);

(statearr_15027_15103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (21))){
var inst_14929 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15031_15104 = state_15007__$1;
(statearr_15031_15104[(2)] = inst_14929);

(statearr_15031_15104[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (31))){
var inst_14955 = (state_15007[(10)]);
var inst_14959 = done(null);
var inst_14960 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14955);
var state_15007__$1 = (function (){var statearr_15032 = state_15007;
(statearr_15032[(19)] = inst_14959);

return statearr_15032;
})();
var statearr_15033_15105 = state_15007__$1;
(statearr_15033_15105[(2)] = inst_14960);

(statearr_15033_15105[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (32))){
var inst_14950 = (state_15007[(9)]);
var inst_14947 = (state_15007[(20)]);
var inst_14949 = (state_15007[(21)]);
var inst_14948 = (state_15007[(12)]);
var inst_14962 = (state_15007[(2)]);
var inst_14963 = (inst_14950 + (1));
var tmp15028 = inst_14947;
var tmp15029 = inst_14949;
var tmp15030 = inst_14948;
var inst_14947__$1 = tmp15028;
var inst_14948__$1 = tmp15030;
var inst_14949__$1 = tmp15029;
var inst_14950__$1 = inst_14963;
var state_15007__$1 = (function (){var statearr_15034 = state_15007;
(statearr_15034[(22)] = inst_14962);

(statearr_15034[(9)] = inst_14950__$1);

(statearr_15034[(20)] = inst_14947__$1);

(statearr_15034[(21)] = inst_14949__$1);

(statearr_15034[(12)] = inst_14948__$1);

return statearr_15034;
})();
var statearr_15035_15106 = state_15007__$1;
(statearr_15035_15106[(2)] = null);

(statearr_15035_15106[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (40))){
var inst_14975 = (state_15007[(23)]);
var inst_14979 = done(null);
var inst_14980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14975);
var state_15007__$1 = (function (){var statearr_15036 = state_15007;
(statearr_15036[(24)] = inst_14979);

return statearr_15036;
})();
var statearr_15037_15107 = state_15007__$1;
(statearr_15037_15107[(2)] = inst_14980);

(statearr_15037_15107[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (33))){
var inst_14966 = (state_15007[(25)]);
var inst_14968 = cljs.core.chunked_seq_QMARK_(inst_14966);
var state_15007__$1 = state_15007;
if(inst_14968){
var statearr_15038_15108 = state_15007__$1;
(statearr_15038_15108[(1)] = (36));

} else {
var statearr_15039_15109 = state_15007__$1;
(statearr_15039_15109[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (13))){
var inst_14896 = (state_15007[(26)]);
var inst_14899 = cljs.core.async.close_BANG_(inst_14896);
var state_15007__$1 = state_15007;
var statearr_15040_15110 = state_15007__$1;
(statearr_15040_15110[(2)] = inst_14899);

(statearr_15040_15110[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (22))){
var inst_14919 = (state_15007[(8)]);
var inst_14922 = cljs.core.async.close_BANG_(inst_14919);
var state_15007__$1 = state_15007;
var statearr_15041_15111 = state_15007__$1;
(statearr_15041_15111[(2)] = inst_14922);

(statearr_15041_15111[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (36))){
var inst_14966 = (state_15007[(25)]);
var inst_14970 = cljs.core.chunk_first(inst_14966);
var inst_14971 = cljs.core.chunk_rest(inst_14966);
var inst_14972 = cljs.core.count(inst_14970);
var inst_14947 = inst_14971;
var inst_14948 = inst_14970;
var inst_14949 = inst_14972;
var inst_14950 = (0);
var state_15007__$1 = (function (){var statearr_15042 = state_15007;
(statearr_15042[(9)] = inst_14950);

(statearr_15042[(20)] = inst_14947);

(statearr_15042[(21)] = inst_14949);

(statearr_15042[(12)] = inst_14948);

return statearr_15042;
})();
var statearr_15043_15112 = state_15007__$1;
(statearr_15043_15112[(2)] = null);

(statearr_15043_15112[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (41))){
var inst_14966 = (state_15007[(25)]);
var inst_14982 = (state_15007[(2)]);
var inst_14983 = cljs.core.next(inst_14966);
var inst_14947 = inst_14983;
var inst_14948 = null;
var inst_14949 = (0);
var inst_14950 = (0);
var state_15007__$1 = (function (){var statearr_15044 = state_15007;
(statearr_15044[(9)] = inst_14950);

(statearr_15044[(20)] = inst_14947);

(statearr_15044[(21)] = inst_14949);

(statearr_15044[(27)] = inst_14982);

(statearr_15044[(12)] = inst_14948);

return statearr_15044;
})();
var statearr_15045_15113 = state_15007__$1;
(statearr_15045_15113[(2)] = null);

(statearr_15045_15113[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (43))){
var state_15007__$1 = state_15007;
var statearr_15046_15114 = state_15007__$1;
(statearr_15046_15114[(2)] = null);

(statearr_15046_15114[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (29))){
var inst_14991 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15047_15115 = state_15007__$1;
(statearr_15047_15115[(2)] = inst_14991);

(statearr_15047_15115[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (44))){
var inst_15000 = (state_15007[(2)]);
var state_15007__$1 = (function (){var statearr_15048 = state_15007;
(statearr_15048[(28)] = inst_15000);

return statearr_15048;
})();
var statearr_15049_15116 = state_15007__$1;
(statearr_15049_15116[(2)] = null);

(statearr_15049_15116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (6))){
var inst_14939 = (state_15007[(29)]);
var inst_14938 = cljs.core.deref(cs);
var inst_14939__$1 = cljs.core.keys(inst_14938);
var inst_14940 = cljs.core.count(inst_14939__$1);
var inst_14941 = cljs.core.reset_BANG_(dctr,inst_14940);
var inst_14946 = cljs.core.seq(inst_14939__$1);
var inst_14947 = inst_14946;
var inst_14948 = null;
var inst_14949 = (0);
var inst_14950 = (0);
var state_15007__$1 = (function (){var statearr_15050 = state_15007;
(statearr_15050[(9)] = inst_14950);

(statearr_15050[(20)] = inst_14947);

(statearr_15050[(29)] = inst_14939__$1);

(statearr_15050[(21)] = inst_14949);

(statearr_15050[(30)] = inst_14941);

(statearr_15050[(12)] = inst_14948);

return statearr_15050;
})();
var statearr_15051_15117 = state_15007__$1;
(statearr_15051_15117[(2)] = null);

(statearr_15051_15117[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (28))){
var inst_14966 = (state_15007[(25)]);
var inst_14947 = (state_15007[(20)]);
var inst_14966__$1 = cljs.core.seq(inst_14947);
var state_15007__$1 = (function (){var statearr_15052 = state_15007;
(statearr_15052[(25)] = inst_14966__$1);

return statearr_15052;
})();
if(inst_14966__$1){
var statearr_15053_15118 = state_15007__$1;
(statearr_15053_15118[(1)] = (33));

} else {
var statearr_15054_15119 = state_15007__$1;
(statearr_15054_15119[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (25))){
var inst_14950 = (state_15007[(9)]);
var inst_14949 = (state_15007[(21)]);
var inst_14952 = (inst_14950 < inst_14949);
var inst_14953 = inst_14952;
var state_15007__$1 = state_15007;
if(cljs.core.truth_(inst_14953)){
var statearr_15055_15120 = state_15007__$1;
(statearr_15055_15120[(1)] = (27));

} else {
var statearr_15056_15121 = state_15007__$1;
(statearr_15056_15121[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (34))){
var state_15007__$1 = state_15007;
var statearr_15057_15122 = state_15007__$1;
(statearr_15057_15122[(2)] = null);

(statearr_15057_15122[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (17))){
var state_15007__$1 = state_15007;
var statearr_15058_15123 = state_15007__$1;
(statearr_15058_15123[(2)] = null);

(statearr_15058_15123[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (3))){
var inst_15005 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15007__$1,inst_15005);
} else {
if((state_val_15008 === (12))){
var inst_14934 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15059_15124 = state_15007__$1;
(statearr_15059_15124[(2)] = inst_14934);

(statearr_15059_15124[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (2))){
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(4),ch);
} else {
if((state_val_15008 === (23))){
var state_15007__$1 = state_15007;
var statearr_15060_15125 = state_15007__$1;
(statearr_15060_15125[(2)] = null);

(statearr_15060_15125[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (35))){
var inst_14989 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15061_15126 = state_15007__$1;
(statearr_15061_15126[(2)] = inst_14989);

(statearr_15061_15126[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (19))){
var inst_14906 = (state_15007[(7)]);
var inst_14910 = cljs.core.chunk_first(inst_14906);
var inst_14911 = cljs.core.chunk_rest(inst_14906);
var inst_14912 = cljs.core.count(inst_14910);
var inst_14884 = inst_14911;
var inst_14885 = inst_14910;
var inst_14886 = inst_14912;
var inst_14887 = (0);
var state_15007__$1 = (function (){var statearr_15062 = state_15007;
(statearr_15062[(13)] = inst_14886);

(statearr_15062[(15)] = inst_14884);

(statearr_15062[(16)] = inst_14887);

(statearr_15062[(17)] = inst_14885);

return statearr_15062;
})();
var statearr_15063_15127 = state_15007__$1;
(statearr_15063_15127[(2)] = null);

(statearr_15063_15127[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (11))){
var inst_14906 = (state_15007[(7)]);
var inst_14884 = (state_15007[(15)]);
var inst_14906__$1 = cljs.core.seq(inst_14884);
var state_15007__$1 = (function (){var statearr_15064 = state_15007;
(statearr_15064[(7)] = inst_14906__$1);

return statearr_15064;
})();
if(inst_14906__$1){
var statearr_15065_15128 = state_15007__$1;
(statearr_15065_15128[(1)] = (16));

} else {
var statearr_15066_15129 = state_15007__$1;
(statearr_15066_15129[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (9))){
var inst_14936 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15067_15130 = state_15007__$1;
(statearr_15067_15130[(2)] = inst_14936);

(statearr_15067_15130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (5))){
var inst_14882 = cljs.core.deref(cs);
var inst_14883 = cljs.core.seq(inst_14882);
var inst_14884 = inst_14883;
var inst_14885 = null;
var inst_14886 = (0);
var inst_14887 = (0);
var state_15007__$1 = (function (){var statearr_15068 = state_15007;
(statearr_15068[(13)] = inst_14886);

(statearr_15068[(15)] = inst_14884);

(statearr_15068[(16)] = inst_14887);

(statearr_15068[(17)] = inst_14885);

return statearr_15068;
})();
var statearr_15069_15131 = state_15007__$1;
(statearr_15069_15131[(2)] = null);

(statearr_15069_15131[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (14))){
var state_15007__$1 = state_15007;
var statearr_15070_15132 = state_15007__$1;
(statearr_15070_15132[(2)] = null);

(statearr_15070_15132[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (45))){
var inst_14997 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15071_15133 = state_15007__$1;
(statearr_15071_15133[(2)] = inst_14997);

(statearr_15071_15133[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (26))){
var inst_14939 = (state_15007[(29)]);
var inst_14993 = (state_15007[(2)]);
var inst_14994 = cljs.core.seq(inst_14939);
var state_15007__$1 = (function (){var statearr_15072 = state_15007;
(statearr_15072[(31)] = inst_14993);

return statearr_15072;
})();
if(inst_14994){
var statearr_15073_15134 = state_15007__$1;
(statearr_15073_15134[(1)] = (42));

} else {
var statearr_15074_15135 = state_15007__$1;
(statearr_15074_15135[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (16))){
var inst_14906 = (state_15007[(7)]);
var inst_14908 = cljs.core.chunked_seq_QMARK_(inst_14906);
var state_15007__$1 = state_15007;
if(inst_14908){
var statearr_15075_15136 = state_15007__$1;
(statearr_15075_15136[(1)] = (19));

} else {
var statearr_15076_15137 = state_15007__$1;
(statearr_15076_15137[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (38))){
var inst_14986 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15077_15138 = state_15007__$1;
(statearr_15077_15138[(2)] = inst_14986);

(statearr_15077_15138[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (30))){
var state_15007__$1 = state_15007;
var statearr_15078_15139 = state_15007__$1;
(statearr_15078_15139[(2)] = null);

(statearr_15078_15139[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (10))){
var inst_14887 = (state_15007[(16)]);
var inst_14885 = (state_15007[(17)]);
var inst_14895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14885,inst_14887);
var inst_14896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14895,(0),null);
var inst_14897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14895,(1),null);
var state_15007__$1 = (function (){var statearr_15079 = state_15007;
(statearr_15079[(26)] = inst_14896);

return statearr_15079;
})();
if(cljs.core.truth_(inst_14897)){
var statearr_15080_15140 = state_15007__$1;
(statearr_15080_15140[(1)] = (13));

} else {
var statearr_15081_15141 = state_15007__$1;
(statearr_15081_15141[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (18))){
var inst_14932 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15082_15142 = state_15007__$1;
(statearr_15082_15142[(2)] = inst_14932);

(statearr_15082_15142[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (42))){
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(45),dchan);
} else {
if((state_val_15008 === (37))){
var inst_14966 = (state_15007[(25)]);
var inst_14875 = (state_15007[(11)]);
var inst_14975 = (state_15007[(23)]);
var inst_14975__$1 = cljs.core.first(inst_14966);
var inst_14976 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14975__$1,inst_14875,done);
var state_15007__$1 = (function (){var statearr_15083 = state_15007;
(statearr_15083[(23)] = inst_14975__$1);

return statearr_15083;
})();
if(cljs.core.truth_(inst_14976)){
var statearr_15084_15143 = state_15007__$1;
(statearr_15084_15143[(1)] = (39));

} else {
var statearr_15085_15144 = state_15007__$1;
(statearr_15085_15144[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15008 === (8))){
var inst_14886 = (state_15007[(13)]);
var inst_14887 = (state_15007[(16)]);
var inst_14889 = (inst_14887 < inst_14886);
var inst_14890 = inst_14889;
var state_15007__$1 = state_15007;
if(cljs.core.truth_(inst_14890)){
var statearr_15086_15145 = state_15007__$1;
(statearr_15086_15145[(1)] = (10));

} else {
var statearr_15087_15146 = state_15007__$1;
(statearr_15087_15146[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__12196__auto__ = null;
var cljs$core$async$mult_$_state_machine__12196__auto____0 = (function (){
var statearr_15088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15088[(0)] = cljs$core$async$mult_$_state_machine__12196__auto__);

(statearr_15088[(1)] = (1));

return statearr_15088;
});
var cljs$core$async$mult_$_state_machine__12196__auto____1 = (function (state_15007){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15007);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15089){if((e15089 instanceof Object)){
var ex__12199__auto__ = e15089;
var statearr_15090_15147 = state_15007;
(statearr_15090_15147[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15007);

return cljs.core.cst$kw$recur;
} else {
throw e15089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15148 = state_15007;
state_15007 = G__15148;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12196__auto__ = function(state_15007){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12196__auto____1.call(this,state_15007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12196__auto____0;
cljs$core$async$mult_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12196__auto____1;
return cljs$core$async$mult_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15091 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15091[(6)] = c__12386__auto___15092);

return statearr_15091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15150 = arguments.length;
switch (G__15150) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_15152 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_15152(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15153 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_15153(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15154 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15154(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15155 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_15155(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15156 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15156(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15167 = arguments.length;
var i__4737__auto___15168 = (0);
while(true){
if((i__4737__auto___15168 < len__4736__auto___15167)){
args__4742__auto__.push((arguments[i__4737__auto___15168]));

var G__15169 = (i__4737__auto___15168 + (1));
i__4737__auto___15168 = G__15169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15161){
var map__15162 = p__15161;
var map__15162__$1 = (((((!((map__15162 == null))))?(((((map__15162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15162):map__15162);
var opts = map__15162__$1;
var statearr_15164_15170 = state;
(statearr_15164_15170[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15165_15171 = state;
(statearr_15165_15171[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15166_15172 = state;
(statearr_15166_15172[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15157){
var G__15158 = cljs.core.first(seq15157);
var seq15157__$1 = cljs.core.next(seq15157);
var G__15159 = cljs.core.first(seq15157__$1);
var seq15157__$2 = cljs.core.next(seq15157__$1);
var G__15160 = cljs.core.first(seq15157__$2);
var seq15157__$3 = cljs.core.next(seq15157__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15158,G__15159,G__15160,seq15157__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15173 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15174){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15174 = meta15174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15175,meta15174__$1){
var self__ = this;
var _15175__$1 = this;
return (new cljs.core.async.t_cljs$core$async15173(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15174__$1));
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15175){
var self__ = this;
var _15175__$1 = this;
return self__.meta15174;
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15173.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15174], null);
}));

(cljs.core.async.t_cljs$core$async15173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15173");

(cljs.core.async.t_cljs$core$async15173.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15173.
 */
cljs.core.async.__GT_t_cljs$core$async15173 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15173(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15174){
return (new cljs.core.async.t_cljs$core$async15173(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15174));
});

}

return (new cljs.core.async.t_cljs$core$async15173(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12386__auto___15337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15277){
var state_val_15278 = (state_15277[(1)]);
if((state_val_15278 === (7))){
var inst_15192 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15279_15338 = state_15277__$1;
(statearr_15279_15338[(2)] = inst_15192);

(statearr_15279_15338[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (20))){
var inst_15204 = (state_15277[(7)]);
var state_15277__$1 = state_15277;
var statearr_15280_15339 = state_15277__$1;
(statearr_15280_15339[(2)] = inst_15204);

(statearr_15280_15339[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (27))){
var state_15277__$1 = state_15277;
var statearr_15281_15340 = state_15277__$1;
(statearr_15281_15340[(2)] = null);

(statearr_15281_15340[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (1))){
var inst_15179 = (state_15277[(8)]);
var inst_15179__$1 = calc_state();
var inst_15181 = (inst_15179__$1 == null);
var inst_15182 = cljs.core.not(inst_15181);
var state_15277__$1 = (function (){var statearr_15282 = state_15277;
(statearr_15282[(8)] = inst_15179__$1);

return statearr_15282;
})();
if(inst_15182){
var statearr_15283_15341 = state_15277__$1;
(statearr_15283_15341[(1)] = (2));

} else {
var statearr_15284_15342 = state_15277__$1;
(statearr_15284_15342[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (24))){
var inst_15251 = (state_15277[(9)]);
var inst_15237 = (state_15277[(10)]);
var inst_15228 = (state_15277[(11)]);
var inst_15251__$1 = (inst_15228.cljs$core$IFn$_invoke$arity$1 ? inst_15228.cljs$core$IFn$_invoke$arity$1(inst_15237) : inst_15228.call(null,inst_15237));
var state_15277__$1 = (function (){var statearr_15285 = state_15277;
(statearr_15285[(9)] = inst_15251__$1);

return statearr_15285;
})();
if(cljs.core.truth_(inst_15251__$1)){
var statearr_15286_15343 = state_15277__$1;
(statearr_15286_15343[(1)] = (29));

} else {
var statearr_15287_15344 = state_15277__$1;
(statearr_15287_15344[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (4))){
var inst_15195 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15195)){
var statearr_15288_15345 = state_15277__$1;
(statearr_15288_15345[(1)] = (8));

} else {
var statearr_15289_15346 = state_15277__$1;
(statearr_15289_15346[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (15))){
var inst_15222 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15222)){
var statearr_15290_15347 = state_15277__$1;
(statearr_15290_15347[(1)] = (19));

} else {
var statearr_15291_15348 = state_15277__$1;
(statearr_15291_15348[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (21))){
var inst_15227 = (state_15277[(12)]);
var inst_15227__$1 = (state_15277[(2)]);
var inst_15228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15227__$1,cljs.core.cst$kw$solos);
var inst_15229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15227__$1,cljs.core.cst$kw$mutes);
var inst_15230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15227__$1,cljs.core.cst$kw$reads);
var state_15277__$1 = (function (){var statearr_15292 = state_15277;
(statearr_15292[(12)] = inst_15227__$1);

(statearr_15292[(13)] = inst_15229);

(statearr_15292[(11)] = inst_15228);

return statearr_15292;
})();
return cljs.core.async.ioc_alts_BANG_(state_15277__$1,(22),inst_15230);
} else {
if((state_val_15278 === (31))){
var inst_15259 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15259)){
var statearr_15293_15349 = state_15277__$1;
(statearr_15293_15349[(1)] = (32));

} else {
var statearr_15294_15350 = state_15277__$1;
(statearr_15294_15350[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (32))){
var inst_15236 = (state_15277[(14)]);
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15277__$1,(35),out,inst_15236);
} else {
if((state_val_15278 === (33))){
var inst_15227 = (state_15277[(12)]);
var inst_15204 = inst_15227;
var state_15277__$1 = (function (){var statearr_15295 = state_15277;
(statearr_15295[(7)] = inst_15204);

return statearr_15295;
})();
var statearr_15296_15351 = state_15277__$1;
(statearr_15296_15351[(2)] = null);

(statearr_15296_15351[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (13))){
var inst_15204 = (state_15277[(7)]);
var inst_15211 = inst_15204.cljs$lang$protocol_mask$partition0$;
var inst_15212 = (inst_15211 & (64));
var inst_15213 = inst_15204.cljs$core$ISeq$;
var inst_15214 = (cljs.core.PROTOCOL_SENTINEL === inst_15213);
var inst_15215 = ((inst_15212) || (inst_15214));
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15215)){
var statearr_15297_15352 = state_15277__$1;
(statearr_15297_15352[(1)] = (16));

} else {
var statearr_15298_15353 = state_15277__$1;
(statearr_15298_15353[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (22))){
var inst_15237 = (state_15277[(10)]);
var inst_15236 = (state_15277[(14)]);
var inst_15235 = (state_15277[(2)]);
var inst_15236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15235,(0),null);
var inst_15237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15235,(1),null);
var inst_15238 = (inst_15236__$1 == null);
var inst_15239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15237__$1,change);
var inst_15240 = ((inst_15238) || (inst_15239));
var state_15277__$1 = (function (){var statearr_15299 = state_15277;
(statearr_15299[(10)] = inst_15237__$1);

(statearr_15299[(14)] = inst_15236__$1);

return statearr_15299;
})();
if(cljs.core.truth_(inst_15240)){
var statearr_15300_15354 = state_15277__$1;
(statearr_15300_15354[(1)] = (23));

} else {
var statearr_15301_15355 = state_15277__$1;
(statearr_15301_15355[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (36))){
var inst_15227 = (state_15277[(12)]);
var inst_15204 = inst_15227;
var state_15277__$1 = (function (){var statearr_15302 = state_15277;
(statearr_15302[(7)] = inst_15204);

return statearr_15302;
})();
var statearr_15303_15356 = state_15277__$1;
(statearr_15303_15356[(2)] = null);

(statearr_15303_15356[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (29))){
var inst_15251 = (state_15277[(9)]);
var state_15277__$1 = state_15277;
var statearr_15304_15357 = state_15277__$1;
(statearr_15304_15357[(2)] = inst_15251);

(statearr_15304_15357[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (6))){
var state_15277__$1 = state_15277;
var statearr_15305_15358 = state_15277__$1;
(statearr_15305_15358[(2)] = false);

(statearr_15305_15358[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (28))){
var inst_15247 = (state_15277[(2)]);
var inst_15248 = calc_state();
var inst_15204 = inst_15248;
var state_15277__$1 = (function (){var statearr_15306 = state_15277;
(statearr_15306[(15)] = inst_15247);

(statearr_15306[(7)] = inst_15204);

return statearr_15306;
})();
var statearr_15307_15359 = state_15277__$1;
(statearr_15307_15359[(2)] = null);

(statearr_15307_15359[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (25))){
var inst_15273 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15308_15360 = state_15277__$1;
(statearr_15308_15360[(2)] = inst_15273);

(statearr_15308_15360[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (34))){
var inst_15271 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15309_15361 = state_15277__$1;
(statearr_15309_15361[(2)] = inst_15271);

(statearr_15309_15361[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (17))){
var state_15277__$1 = state_15277;
var statearr_15310_15362 = state_15277__$1;
(statearr_15310_15362[(2)] = false);

(statearr_15310_15362[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (3))){
var state_15277__$1 = state_15277;
var statearr_15311_15363 = state_15277__$1;
(statearr_15311_15363[(2)] = false);

(statearr_15311_15363[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (12))){
var inst_15275 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15277__$1,inst_15275);
} else {
if((state_val_15278 === (2))){
var inst_15179 = (state_15277[(8)]);
var inst_15184 = inst_15179.cljs$lang$protocol_mask$partition0$;
var inst_15185 = (inst_15184 & (64));
var inst_15186 = inst_15179.cljs$core$ISeq$;
var inst_15187 = (cljs.core.PROTOCOL_SENTINEL === inst_15186);
var inst_15188 = ((inst_15185) || (inst_15187));
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15188)){
var statearr_15312_15364 = state_15277__$1;
(statearr_15312_15364[(1)] = (5));

} else {
var statearr_15313_15365 = state_15277__$1;
(statearr_15313_15365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (23))){
var inst_15236 = (state_15277[(14)]);
var inst_15242 = (inst_15236 == null);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15242)){
var statearr_15314_15366 = state_15277__$1;
(statearr_15314_15366[(1)] = (26));

} else {
var statearr_15315_15367 = state_15277__$1;
(statearr_15315_15367[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (35))){
var inst_15262 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
if(cljs.core.truth_(inst_15262)){
var statearr_15316_15368 = state_15277__$1;
(statearr_15316_15368[(1)] = (36));

} else {
var statearr_15317_15369 = state_15277__$1;
(statearr_15317_15369[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (19))){
var inst_15204 = (state_15277[(7)]);
var inst_15224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15204);
var state_15277__$1 = state_15277;
var statearr_15318_15370 = state_15277__$1;
(statearr_15318_15370[(2)] = inst_15224);

(statearr_15318_15370[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (11))){
var inst_15204 = (state_15277[(7)]);
var inst_15208 = (inst_15204 == null);
var inst_15209 = cljs.core.not(inst_15208);
var state_15277__$1 = state_15277;
if(inst_15209){
var statearr_15319_15371 = state_15277__$1;
(statearr_15319_15371[(1)] = (13));

} else {
var statearr_15320_15372 = state_15277__$1;
(statearr_15320_15372[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (9))){
var inst_15179 = (state_15277[(8)]);
var state_15277__$1 = state_15277;
var statearr_15321_15373 = state_15277__$1;
(statearr_15321_15373[(2)] = inst_15179);

(statearr_15321_15373[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (5))){
var state_15277__$1 = state_15277;
var statearr_15322_15374 = state_15277__$1;
(statearr_15322_15374[(2)] = true);

(statearr_15322_15374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (14))){
var state_15277__$1 = state_15277;
var statearr_15323_15375 = state_15277__$1;
(statearr_15323_15375[(2)] = false);

(statearr_15323_15375[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (26))){
var inst_15237 = (state_15277[(10)]);
var inst_15244 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15237);
var state_15277__$1 = state_15277;
var statearr_15324_15376 = state_15277__$1;
(statearr_15324_15376[(2)] = inst_15244);

(statearr_15324_15376[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (16))){
var state_15277__$1 = state_15277;
var statearr_15325_15377 = state_15277__$1;
(statearr_15325_15377[(2)] = true);

(statearr_15325_15377[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (38))){
var inst_15267 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15326_15378 = state_15277__$1;
(statearr_15326_15378[(2)] = inst_15267);

(statearr_15326_15378[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (30))){
var inst_15237 = (state_15277[(10)]);
var inst_15229 = (state_15277[(13)]);
var inst_15228 = (state_15277[(11)]);
var inst_15254 = cljs.core.empty_QMARK_(inst_15228);
var inst_15255 = (inst_15229.cljs$core$IFn$_invoke$arity$1 ? inst_15229.cljs$core$IFn$_invoke$arity$1(inst_15237) : inst_15229.call(null,inst_15237));
var inst_15256 = cljs.core.not(inst_15255);
var inst_15257 = ((inst_15254) && (inst_15256));
var state_15277__$1 = state_15277;
var statearr_15327_15379 = state_15277__$1;
(statearr_15327_15379[(2)] = inst_15257);

(statearr_15327_15379[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (10))){
var inst_15179 = (state_15277[(8)]);
var inst_15200 = (state_15277[(2)]);
var inst_15201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,cljs.core.cst$kw$solos);
var inst_15202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,cljs.core.cst$kw$mutes);
var inst_15203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,cljs.core.cst$kw$reads);
var inst_15204 = inst_15179;
var state_15277__$1 = (function (){var statearr_15328 = state_15277;
(statearr_15328[(16)] = inst_15203);

(statearr_15328[(17)] = inst_15202);

(statearr_15328[(7)] = inst_15204);

(statearr_15328[(18)] = inst_15201);

return statearr_15328;
})();
var statearr_15329_15380 = state_15277__$1;
(statearr_15329_15380[(2)] = null);

(statearr_15329_15380[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (18))){
var inst_15219 = (state_15277[(2)]);
var state_15277__$1 = state_15277;
var statearr_15330_15381 = state_15277__$1;
(statearr_15330_15381[(2)] = inst_15219);

(statearr_15330_15381[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (37))){
var state_15277__$1 = state_15277;
var statearr_15331_15382 = state_15277__$1;
(statearr_15331_15382[(2)] = null);

(statearr_15331_15382[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15278 === (8))){
var inst_15179 = (state_15277[(8)]);
var inst_15197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15179);
var state_15277__$1 = state_15277;
var statearr_15332_15383 = state_15277__$1;
(statearr_15332_15383[(2)] = inst_15197);

(statearr_15332_15383[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__12196__auto__ = null;
var cljs$core$async$mix_$_state_machine__12196__auto____0 = (function (){
var statearr_15333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15333[(0)] = cljs$core$async$mix_$_state_machine__12196__auto__);

(statearr_15333[(1)] = (1));

return statearr_15333;
});
var cljs$core$async$mix_$_state_machine__12196__auto____1 = (function (state_15277){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15277);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15334){if((e15334 instanceof Object)){
var ex__12199__auto__ = e15334;
var statearr_15335_15384 = state_15277;
(statearr_15335_15384[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15277);

return cljs.core.cst$kw$recur;
} else {
throw e15334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15385 = state_15277;
state_15277 = G__15385;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12196__auto__ = function(state_15277){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12196__auto____1.call(this,state_15277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12196__auto____0;
cljs$core$async$mix_$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12196__auto____1;
return cljs$core$async$mix_$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15336 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15336[(6)] = c__12386__auto___15337);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_15388 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_15388(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_15389 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_15389(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_15390 = (function() {
var G__15391 = null;
var G__15391__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__15391__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__15391 = function(p,v){
switch(arguments.length){
case 1:
return G__15391__1.call(this,p);
case 2:
return G__15391__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15391.cljs$core$IFn$_invoke$arity$1 = G__15391__1;
G__15391.cljs$core$IFn$_invoke$arity$2 = G__15391__2;
return G__15391;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15387 = arguments.length;
switch (G__15387) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15390.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15390.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__15395 = arguments.length;
switch (G__15395) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15393_SHARP_){
if(cljs.core.truth_((p1__15393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15393_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15393_SHARP_.call(null,topic)))){
return p1__15393_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15393_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15396 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15397){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15397 = meta15397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15398,meta15397__$1){
var self__ = this;
var _15398__$1 = this;
return (new cljs.core.async.t_cljs$core$async15396(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15397__$1));
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15398){
var self__ = this;
var _15398__$1 = this;
return self__.meta15397;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15397], null);
}));

(cljs.core.async.t_cljs$core$async15396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15396");

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15396.
 */
cljs.core.async.__GT_t_cljs$core$async15396 = (function cljs$core$async$__GT_t_cljs$core$async15396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15397){
return (new cljs.core.async.t_cljs$core$async15396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15397));
});

}

return (new cljs.core.async.t_cljs$core$async15396(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12386__auto___15516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15470){
var state_val_15471 = (state_15470[(1)]);
if((state_val_15471 === (7))){
var inst_15466 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15472_15517 = state_15470__$1;
(statearr_15472_15517[(2)] = inst_15466);

(statearr_15472_15517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (20))){
var state_15470__$1 = state_15470;
var statearr_15473_15518 = state_15470__$1;
(statearr_15473_15518[(2)] = null);

(statearr_15473_15518[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (1))){
var state_15470__$1 = state_15470;
var statearr_15474_15519 = state_15470__$1;
(statearr_15474_15519[(2)] = null);

(statearr_15474_15519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (24))){
var inst_15449 = (state_15470[(7)]);
var inst_15458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15449);
var state_15470__$1 = state_15470;
var statearr_15475_15520 = state_15470__$1;
(statearr_15475_15520[(2)] = inst_15458);

(statearr_15475_15520[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (4))){
var inst_15401 = (state_15470[(8)]);
var inst_15401__$1 = (state_15470[(2)]);
var inst_15402 = (inst_15401__$1 == null);
var state_15470__$1 = (function (){var statearr_15476 = state_15470;
(statearr_15476[(8)] = inst_15401__$1);

return statearr_15476;
})();
if(cljs.core.truth_(inst_15402)){
var statearr_15477_15521 = state_15470__$1;
(statearr_15477_15521[(1)] = (5));

} else {
var statearr_15478_15522 = state_15470__$1;
(statearr_15478_15522[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (15))){
var inst_15443 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15479_15523 = state_15470__$1;
(statearr_15479_15523[(2)] = inst_15443);

(statearr_15479_15523[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (21))){
var inst_15463 = (state_15470[(2)]);
var state_15470__$1 = (function (){var statearr_15480 = state_15470;
(statearr_15480[(9)] = inst_15463);

return statearr_15480;
})();
var statearr_15481_15524 = state_15470__$1;
(statearr_15481_15524[(2)] = null);

(statearr_15481_15524[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (13))){
var inst_15425 = (state_15470[(10)]);
var inst_15427 = cljs.core.chunked_seq_QMARK_(inst_15425);
var state_15470__$1 = state_15470;
if(inst_15427){
var statearr_15482_15525 = state_15470__$1;
(statearr_15482_15525[(1)] = (16));

} else {
var statearr_15483_15526 = state_15470__$1;
(statearr_15483_15526[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (22))){
var inst_15455 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
if(cljs.core.truth_(inst_15455)){
var statearr_15484_15527 = state_15470__$1;
(statearr_15484_15527[(1)] = (23));

} else {
var statearr_15485_15528 = state_15470__$1;
(statearr_15485_15528[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (6))){
var inst_15451 = (state_15470[(11)]);
var inst_15401 = (state_15470[(8)]);
var inst_15449 = (state_15470[(7)]);
var inst_15449__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15401) : topic_fn.call(null,inst_15401));
var inst_15450 = cljs.core.deref(mults);
var inst_15451__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15450,inst_15449__$1);
var state_15470__$1 = (function (){var statearr_15486 = state_15470;
(statearr_15486[(11)] = inst_15451__$1);

(statearr_15486[(7)] = inst_15449__$1);

return statearr_15486;
})();
if(cljs.core.truth_(inst_15451__$1)){
var statearr_15487_15529 = state_15470__$1;
(statearr_15487_15529[(1)] = (19));

} else {
var statearr_15488_15530 = state_15470__$1;
(statearr_15488_15530[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (25))){
var inst_15460 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15489_15531 = state_15470__$1;
(statearr_15489_15531[(2)] = inst_15460);

(statearr_15489_15531[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (17))){
var inst_15425 = (state_15470[(10)]);
var inst_15434 = cljs.core.first(inst_15425);
var inst_15435 = cljs.core.async.muxch_STAR_(inst_15434);
var inst_15436 = cljs.core.async.close_BANG_(inst_15435);
var inst_15437 = cljs.core.next(inst_15425);
var inst_15411 = inst_15437;
var inst_15412 = null;
var inst_15413 = (0);
var inst_15414 = (0);
var state_15470__$1 = (function (){var statearr_15490 = state_15470;
(statearr_15490[(12)] = inst_15413);

(statearr_15490[(13)] = inst_15412);

(statearr_15490[(14)] = inst_15414);

(statearr_15490[(15)] = inst_15436);

(statearr_15490[(16)] = inst_15411);

return statearr_15490;
})();
var statearr_15491_15532 = state_15470__$1;
(statearr_15491_15532[(2)] = null);

(statearr_15491_15532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (3))){
var inst_15468 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15470__$1,inst_15468);
} else {
if((state_val_15471 === (12))){
var inst_15445 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15492_15533 = state_15470__$1;
(statearr_15492_15533[(2)] = inst_15445);

(statearr_15492_15533[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (2))){
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15470__$1,(4),ch);
} else {
if((state_val_15471 === (23))){
var state_15470__$1 = state_15470;
var statearr_15493_15534 = state_15470__$1;
(statearr_15493_15534[(2)] = null);

(statearr_15493_15534[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (19))){
var inst_15451 = (state_15470[(11)]);
var inst_15401 = (state_15470[(8)]);
var inst_15453 = cljs.core.async.muxch_STAR_(inst_15451);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15470__$1,(22),inst_15453,inst_15401);
} else {
if((state_val_15471 === (11))){
var inst_15411 = (state_15470[(16)]);
var inst_15425 = (state_15470[(10)]);
var inst_15425__$1 = cljs.core.seq(inst_15411);
var state_15470__$1 = (function (){var statearr_15494 = state_15470;
(statearr_15494[(10)] = inst_15425__$1);

return statearr_15494;
})();
if(inst_15425__$1){
var statearr_15495_15535 = state_15470__$1;
(statearr_15495_15535[(1)] = (13));

} else {
var statearr_15496_15536 = state_15470__$1;
(statearr_15496_15536[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (9))){
var inst_15447 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15497_15537 = state_15470__$1;
(statearr_15497_15537[(2)] = inst_15447);

(statearr_15497_15537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (5))){
var inst_15408 = cljs.core.deref(mults);
var inst_15409 = cljs.core.vals(inst_15408);
var inst_15410 = cljs.core.seq(inst_15409);
var inst_15411 = inst_15410;
var inst_15412 = null;
var inst_15413 = (0);
var inst_15414 = (0);
var state_15470__$1 = (function (){var statearr_15498 = state_15470;
(statearr_15498[(12)] = inst_15413);

(statearr_15498[(13)] = inst_15412);

(statearr_15498[(14)] = inst_15414);

(statearr_15498[(16)] = inst_15411);

return statearr_15498;
})();
var statearr_15499_15538 = state_15470__$1;
(statearr_15499_15538[(2)] = null);

(statearr_15499_15538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (14))){
var state_15470__$1 = state_15470;
var statearr_15503_15539 = state_15470__$1;
(statearr_15503_15539[(2)] = null);

(statearr_15503_15539[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (16))){
var inst_15425 = (state_15470[(10)]);
var inst_15429 = cljs.core.chunk_first(inst_15425);
var inst_15430 = cljs.core.chunk_rest(inst_15425);
var inst_15431 = cljs.core.count(inst_15429);
var inst_15411 = inst_15430;
var inst_15412 = inst_15429;
var inst_15413 = inst_15431;
var inst_15414 = (0);
var state_15470__$1 = (function (){var statearr_15504 = state_15470;
(statearr_15504[(12)] = inst_15413);

(statearr_15504[(13)] = inst_15412);

(statearr_15504[(14)] = inst_15414);

(statearr_15504[(16)] = inst_15411);

return statearr_15504;
})();
var statearr_15505_15540 = state_15470__$1;
(statearr_15505_15540[(2)] = null);

(statearr_15505_15540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (10))){
var inst_15413 = (state_15470[(12)]);
var inst_15412 = (state_15470[(13)]);
var inst_15414 = (state_15470[(14)]);
var inst_15411 = (state_15470[(16)]);
var inst_15419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15412,inst_15414);
var inst_15420 = cljs.core.async.muxch_STAR_(inst_15419);
var inst_15421 = cljs.core.async.close_BANG_(inst_15420);
var inst_15422 = (inst_15414 + (1));
var tmp15500 = inst_15413;
var tmp15501 = inst_15412;
var tmp15502 = inst_15411;
var inst_15411__$1 = tmp15502;
var inst_15412__$1 = tmp15501;
var inst_15413__$1 = tmp15500;
var inst_15414__$1 = inst_15422;
var state_15470__$1 = (function (){var statearr_15506 = state_15470;
(statearr_15506[(12)] = inst_15413__$1);

(statearr_15506[(13)] = inst_15412__$1);

(statearr_15506[(17)] = inst_15421);

(statearr_15506[(14)] = inst_15414__$1);

(statearr_15506[(16)] = inst_15411__$1);

return statearr_15506;
})();
var statearr_15507_15541 = state_15470__$1;
(statearr_15507_15541[(2)] = null);

(statearr_15507_15541[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (18))){
var inst_15440 = (state_15470[(2)]);
var state_15470__$1 = state_15470;
var statearr_15508_15542 = state_15470__$1;
(statearr_15508_15542[(2)] = inst_15440);

(statearr_15508_15542[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15471 === (8))){
var inst_15413 = (state_15470[(12)]);
var inst_15414 = (state_15470[(14)]);
var inst_15416 = (inst_15414 < inst_15413);
var inst_15417 = inst_15416;
var state_15470__$1 = state_15470;
if(cljs.core.truth_(inst_15417)){
var statearr_15509_15543 = state_15470__$1;
(statearr_15509_15543[(1)] = (10));

} else {
var statearr_15510_15544 = state_15470__$1;
(statearr_15510_15544[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_15511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15511[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_15511[(1)] = (1));

return statearr_15511;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15470){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15470);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15512){if((e15512 instanceof Object)){
var ex__12199__auto__ = e15512;
var statearr_15513_15545 = state_15470;
(statearr_15513_15545[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15470);

return cljs.core.cst$kw$recur;
} else {
throw e15512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15546 = state_15470;
state_15470 = G__15546;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15514 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15514[(6)] = c__12386__auto___15516);

return statearr_15514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15548 = arguments.length;
switch (G__15548) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__15551 = arguments.length;
switch (G__15551) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__15554 = arguments.length;
switch (G__15554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12386__auto___15621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15593){
var state_val_15594 = (state_15593[(1)]);
if((state_val_15594 === (7))){
var state_15593__$1 = state_15593;
var statearr_15595_15622 = state_15593__$1;
(statearr_15595_15622[(2)] = null);

(statearr_15595_15622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (1))){
var state_15593__$1 = state_15593;
var statearr_15596_15623 = state_15593__$1;
(statearr_15596_15623[(2)] = null);

(statearr_15596_15623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (4))){
var inst_15557 = (state_15593[(7)]);
var inst_15559 = (inst_15557 < cnt);
var state_15593__$1 = state_15593;
if(cljs.core.truth_(inst_15559)){
var statearr_15597_15624 = state_15593__$1;
(statearr_15597_15624[(1)] = (6));

} else {
var statearr_15598_15625 = state_15593__$1;
(statearr_15598_15625[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (15))){
var inst_15589 = (state_15593[(2)]);
var state_15593__$1 = state_15593;
var statearr_15599_15626 = state_15593__$1;
(statearr_15599_15626[(2)] = inst_15589);

(statearr_15599_15626[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (13))){
var inst_15582 = cljs.core.async.close_BANG_(out);
var state_15593__$1 = state_15593;
var statearr_15600_15627 = state_15593__$1;
(statearr_15600_15627[(2)] = inst_15582);

(statearr_15600_15627[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (6))){
var state_15593__$1 = state_15593;
var statearr_15601_15628 = state_15593__$1;
(statearr_15601_15628[(2)] = null);

(statearr_15601_15628[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (3))){
var inst_15591 = (state_15593[(2)]);
var state_15593__$1 = state_15593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15593__$1,inst_15591);
} else {
if((state_val_15594 === (12))){
var inst_15579 = (state_15593[(8)]);
var inst_15579__$1 = (state_15593[(2)]);
var inst_15580 = cljs.core.some(cljs.core.nil_QMARK_,inst_15579__$1);
var state_15593__$1 = (function (){var statearr_15602 = state_15593;
(statearr_15602[(8)] = inst_15579__$1);

return statearr_15602;
})();
if(cljs.core.truth_(inst_15580)){
var statearr_15603_15629 = state_15593__$1;
(statearr_15603_15629[(1)] = (13));

} else {
var statearr_15604_15630 = state_15593__$1;
(statearr_15604_15630[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (2))){
var inst_15556 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15557 = (0);
var state_15593__$1 = (function (){var statearr_15605 = state_15593;
(statearr_15605[(9)] = inst_15556);

(statearr_15605[(7)] = inst_15557);

return statearr_15605;
})();
var statearr_15606_15631 = state_15593__$1;
(statearr_15606_15631[(2)] = null);

(statearr_15606_15631[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (11))){
var inst_15557 = (state_15593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15593,(10),Object,null,(9));
var inst_15566 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15557) : chs__$1.call(null,inst_15557));
var inst_15567 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15557) : done.call(null,inst_15557));
var inst_15568 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15566,inst_15567);
var state_15593__$1 = state_15593;
var statearr_15607_15632 = state_15593__$1;
(statearr_15607_15632[(2)] = inst_15568);


cljs.core.async.impl.ioc_helpers.process_exception(state_15593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (9))){
var inst_15557 = (state_15593[(7)]);
var inst_15570 = (state_15593[(2)]);
var inst_15571 = (inst_15557 + (1));
var inst_15557__$1 = inst_15571;
var state_15593__$1 = (function (){var statearr_15608 = state_15593;
(statearr_15608[(7)] = inst_15557__$1);

(statearr_15608[(10)] = inst_15570);

return statearr_15608;
})();
var statearr_15609_15633 = state_15593__$1;
(statearr_15609_15633[(2)] = null);

(statearr_15609_15633[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (5))){
var inst_15577 = (state_15593[(2)]);
var state_15593__$1 = (function (){var statearr_15610 = state_15593;
(statearr_15610[(11)] = inst_15577);

return statearr_15610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15593__$1,(12),dchan);
} else {
if((state_val_15594 === (14))){
var inst_15579 = (state_15593[(8)]);
var inst_15584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15579);
var state_15593__$1 = state_15593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15593__$1,(16),out,inst_15584);
} else {
if((state_val_15594 === (16))){
var inst_15586 = (state_15593[(2)]);
var state_15593__$1 = (function (){var statearr_15611 = state_15593;
(statearr_15611[(12)] = inst_15586);

return statearr_15611;
})();
var statearr_15612_15634 = state_15593__$1;
(statearr_15612_15634[(2)] = null);

(statearr_15612_15634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (10))){
var inst_15561 = (state_15593[(2)]);
var inst_15562 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15593__$1 = (function (){var statearr_15613 = state_15593;
(statearr_15613[(13)] = inst_15561);

return statearr_15613;
})();
var statearr_15614_15635 = state_15593__$1;
(statearr_15614_15635[(2)] = inst_15562);


cljs.core.async.impl.ioc_helpers.process_exception(state_15593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15594 === (8))){
var inst_15575 = (state_15593[(2)]);
var state_15593__$1 = state_15593;
var statearr_15615_15636 = state_15593__$1;
(statearr_15615_15636[(2)] = inst_15575);

(statearr_15615_15636[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_15616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15616[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_15616[(1)] = (1));

return statearr_15616;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15593){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15593);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15617){if((e15617 instanceof Object)){
var ex__12199__auto__ = e15617;
var statearr_15618_15637 = state_15593;
(statearr_15618_15637[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15593);

return cljs.core.cst$kw$recur;
} else {
throw e15617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15638 = state_15593;
state_15593 = G__15638;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15619 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15619[(6)] = c__12386__auto___15621);

return statearr_15619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15641 = arguments.length;
switch (G__15641) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___15695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15673){
var state_val_15674 = (state_15673[(1)]);
if((state_val_15674 === (7))){
var inst_15653 = (state_15673[(7)]);
var inst_15652 = (state_15673[(8)]);
var inst_15652__$1 = (state_15673[(2)]);
var inst_15653__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15652__$1,(0),null);
var inst_15654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15652__$1,(1),null);
var inst_15655 = (inst_15653__$1 == null);
var state_15673__$1 = (function (){var statearr_15675 = state_15673;
(statearr_15675[(9)] = inst_15654);

(statearr_15675[(7)] = inst_15653__$1);

(statearr_15675[(8)] = inst_15652__$1);

return statearr_15675;
})();
if(cljs.core.truth_(inst_15655)){
var statearr_15676_15696 = state_15673__$1;
(statearr_15676_15696[(1)] = (8));

} else {
var statearr_15677_15697 = state_15673__$1;
(statearr_15677_15697[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (1))){
var inst_15642 = cljs.core.vec(chs);
var inst_15643 = inst_15642;
var state_15673__$1 = (function (){var statearr_15678 = state_15673;
(statearr_15678[(10)] = inst_15643);

return statearr_15678;
})();
var statearr_15679_15698 = state_15673__$1;
(statearr_15679_15698[(2)] = null);

(statearr_15679_15698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (4))){
var inst_15643 = (state_15673[(10)]);
var state_15673__$1 = state_15673;
return cljs.core.async.ioc_alts_BANG_(state_15673__$1,(7),inst_15643);
} else {
if((state_val_15674 === (6))){
var inst_15669 = (state_15673[(2)]);
var state_15673__$1 = state_15673;
var statearr_15680_15699 = state_15673__$1;
(statearr_15680_15699[(2)] = inst_15669);

(statearr_15680_15699[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (3))){
var inst_15671 = (state_15673[(2)]);
var state_15673__$1 = state_15673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15673__$1,inst_15671);
} else {
if((state_val_15674 === (2))){
var inst_15643 = (state_15673[(10)]);
var inst_15645 = cljs.core.count(inst_15643);
var inst_15646 = (inst_15645 > (0));
var state_15673__$1 = state_15673;
if(cljs.core.truth_(inst_15646)){
var statearr_15682_15700 = state_15673__$1;
(statearr_15682_15700[(1)] = (4));

} else {
var statearr_15683_15701 = state_15673__$1;
(statearr_15683_15701[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (11))){
var inst_15643 = (state_15673[(10)]);
var inst_15662 = (state_15673[(2)]);
var tmp15681 = inst_15643;
var inst_15643__$1 = tmp15681;
var state_15673__$1 = (function (){var statearr_15684 = state_15673;
(statearr_15684[(11)] = inst_15662);

(statearr_15684[(10)] = inst_15643__$1);

return statearr_15684;
})();
var statearr_15685_15702 = state_15673__$1;
(statearr_15685_15702[(2)] = null);

(statearr_15685_15702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (9))){
var inst_15653 = (state_15673[(7)]);
var state_15673__$1 = state_15673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15673__$1,(11),out,inst_15653);
} else {
if((state_val_15674 === (5))){
var inst_15667 = cljs.core.async.close_BANG_(out);
var state_15673__$1 = state_15673;
var statearr_15686_15703 = state_15673__$1;
(statearr_15686_15703[(2)] = inst_15667);

(statearr_15686_15703[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (10))){
var inst_15665 = (state_15673[(2)]);
var state_15673__$1 = state_15673;
var statearr_15687_15704 = state_15673__$1;
(statearr_15687_15704[(2)] = inst_15665);

(statearr_15687_15704[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15674 === (8))){
var inst_15654 = (state_15673[(9)]);
var inst_15653 = (state_15673[(7)]);
var inst_15643 = (state_15673[(10)]);
var inst_15652 = (state_15673[(8)]);
var inst_15657 = (function (){var cs = inst_15643;
var vec__15648 = inst_15652;
var v = inst_15653;
var c = inst_15654;
return (function (p1__15639_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15639_SHARP_);
});
})();
var inst_15658 = cljs.core.filterv(inst_15657,inst_15643);
var inst_15643__$1 = inst_15658;
var state_15673__$1 = (function (){var statearr_15688 = state_15673;
(statearr_15688[(10)] = inst_15643__$1);

return statearr_15688;
})();
var statearr_15689_15705 = state_15673__$1;
(statearr_15689_15705[(2)] = null);

(statearr_15689_15705[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_15690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15690[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_15690[(1)] = (1));

return statearr_15690;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15673){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15673);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15691){if((e15691 instanceof Object)){
var ex__12199__auto__ = e15691;
var statearr_15692_15706 = state_15673;
(statearr_15692_15706[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15673);

return cljs.core.cst$kw$recur;
} else {
throw e15691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15707 = state_15673;
state_15673 = G__15707;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15693 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15693[(6)] = c__12386__auto___15695);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__15709 = arguments.length;
switch (G__15709) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___15754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15733){
var state_val_15734 = (state_15733[(1)]);
if((state_val_15734 === (7))){
var inst_15715 = (state_15733[(7)]);
var inst_15715__$1 = (state_15733[(2)]);
var inst_15716 = (inst_15715__$1 == null);
var inst_15717 = cljs.core.not(inst_15716);
var state_15733__$1 = (function (){var statearr_15735 = state_15733;
(statearr_15735[(7)] = inst_15715__$1);

return statearr_15735;
})();
if(inst_15717){
var statearr_15736_15755 = state_15733__$1;
(statearr_15736_15755[(1)] = (8));

} else {
var statearr_15737_15756 = state_15733__$1;
(statearr_15737_15756[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (1))){
var inst_15710 = (0);
var state_15733__$1 = (function (){var statearr_15738 = state_15733;
(statearr_15738[(8)] = inst_15710);

return statearr_15738;
})();
var statearr_15739_15757 = state_15733__$1;
(statearr_15739_15757[(2)] = null);

(statearr_15739_15757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (4))){
var state_15733__$1 = state_15733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15733__$1,(7),ch);
} else {
if((state_val_15734 === (6))){
var inst_15728 = (state_15733[(2)]);
var state_15733__$1 = state_15733;
var statearr_15740_15758 = state_15733__$1;
(statearr_15740_15758[(2)] = inst_15728);

(statearr_15740_15758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (3))){
var inst_15730 = (state_15733[(2)]);
var inst_15731 = cljs.core.async.close_BANG_(out);
var state_15733__$1 = (function (){var statearr_15741 = state_15733;
(statearr_15741[(9)] = inst_15730);

return statearr_15741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15733__$1,inst_15731);
} else {
if((state_val_15734 === (2))){
var inst_15710 = (state_15733[(8)]);
var inst_15712 = (inst_15710 < n);
var state_15733__$1 = state_15733;
if(cljs.core.truth_(inst_15712)){
var statearr_15742_15759 = state_15733__$1;
(statearr_15742_15759[(1)] = (4));

} else {
var statearr_15743_15760 = state_15733__$1;
(statearr_15743_15760[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (11))){
var inst_15710 = (state_15733[(8)]);
var inst_15720 = (state_15733[(2)]);
var inst_15721 = (inst_15710 + (1));
var inst_15710__$1 = inst_15721;
var state_15733__$1 = (function (){var statearr_15744 = state_15733;
(statearr_15744[(10)] = inst_15720);

(statearr_15744[(8)] = inst_15710__$1);

return statearr_15744;
})();
var statearr_15745_15761 = state_15733__$1;
(statearr_15745_15761[(2)] = null);

(statearr_15745_15761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (9))){
var state_15733__$1 = state_15733;
var statearr_15746_15762 = state_15733__$1;
(statearr_15746_15762[(2)] = null);

(statearr_15746_15762[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (5))){
var state_15733__$1 = state_15733;
var statearr_15747_15763 = state_15733__$1;
(statearr_15747_15763[(2)] = null);

(statearr_15747_15763[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (10))){
var inst_15725 = (state_15733[(2)]);
var state_15733__$1 = state_15733;
var statearr_15748_15764 = state_15733__$1;
(statearr_15748_15764[(2)] = inst_15725);

(statearr_15748_15764[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15734 === (8))){
var inst_15715 = (state_15733[(7)]);
var state_15733__$1 = state_15733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15733__$1,(11),out,inst_15715);
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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_15749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15749[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_15749[(1)] = (1));

return statearr_15749;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15733){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15733);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15750){if((e15750 instanceof Object)){
var ex__12199__auto__ = e15750;
var statearr_15751_15765 = state_15733;
(statearr_15751_15765[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15733);

return cljs.core.cst$kw$recur;
} else {
throw e15750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15766 = state_15733;
state_15733 = G__15766;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15752 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15752[(6)] = c__12386__auto___15754);

return statearr_15752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15768 = (function (f,ch,meta15769){
this.f = f;
this.ch = ch;
this.meta15769 = meta15769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15770,meta15769__$1){
var self__ = this;
var _15770__$1 = this;
return (new cljs.core.async.t_cljs$core$async15768(self__.f,self__.ch,meta15769__$1));
}));

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15770){
var self__ = this;
var _15770__$1 = this;
return self__.meta15769;
}));

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15771 = (function (f,ch,meta15769,_,fn1,meta15772){
this.f = f;
this.ch = ch;
this.meta15769 = meta15769;
this._ = _;
this.fn1 = fn1;
this.meta15772 = meta15772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15773,meta15772__$1){
var self__ = this;
var _15773__$1 = this;
return (new cljs.core.async.t_cljs$core$async15771(self__.f,self__.ch,self__.meta15769,self__._,self__.fn1,meta15772__$1));
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15773){
var self__ = this;
var _15773__$1 = this;
return self__.meta15772;
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15767_SHARP_){
var G__15774 = (((p1__15767_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15767_SHARP_) : self__.f.call(null,p1__15767_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15774) : f1.call(null,G__15774));
});
}));

(cljs.core.async.t_cljs$core$async15771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15769,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15768], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15772], null);
}));

(cljs.core.async.t_cljs$core$async15771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15771");

(cljs.core.async.t_cljs$core$async15771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15771.
 */
cljs.core.async.__GT_t_cljs$core$async15771 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15771(f__$1,ch__$1,meta15769__$1,___$2,fn1__$1,meta15772){
return (new cljs.core.async.t_cljs$core$async15771(f__$1,ch__$1,meta15769__$1,___$2,fn1__$1,meta15772));
});

}

return (new cljs.core.async.t_cljs$core$async15771(self__.f,self__.ch,self__.meta15769,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15775 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15775) : self__.f.call(null,G__15775));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15769], null);
}));

(cljs.core.async.t_cljs$core$async15768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15768");

(cljs.core.async.t_cljs$core$async15768.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15768.
 */
cljs.core.async.__GT_t_cljs$core$async15768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15768(f__$1,ch__$1,meta15769){
return (new cljs.core.async.t_cljs$core$async15768(f__$1,ch__$1,meta15769));
});

}

return (new cljs.core.async.t_cljs$core$async15768(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15776 = (function (f,ch,meta15777){
this.f = f;
this.ch = ch;
this.meta15777 = meta15777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15778,meta15777__$1){
var self__ = this;
var _15778__$1 = this;
return (new cljs.core.async.t_cljs$core$async15776(self__.f,self__.ch,meta15777__$1));
}));

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15778){
var self__ = this;
var _15778__$1 = this;
return self__.meta15777;
}));

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15777], null);
}));

(cljs.core.async.t_cljs$core$async15776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15776");

(cljs.core.async.t_cljs$core$async15776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15776.
 */
cljs.core.async.__GT_t_cljs$core$async15776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15776(f__$1,ch__$1,meta15777){
return (new cljs.core.async.t_cljs$core$async15776(f__$1,ch__$1,meta15777));
});

}

return (new cljs.core.async.t_cljs$core$async15776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15779 = (function (p,ch,meta15780){
this.p = p;
this.ch = ch;
this.meta15780 = meta15780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15781,meta15780__$1){
var self__ = this;
var _15781__$1 = this;
return (new cljs.core.async.t_cljs$core$async15779(self__.p,self__.ch,meta15780__$1));
}));

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15781){
var self__ = this;
var _15781__$1 = this;
return self__.meta15780;
}));

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15780], null);
}));

(cljs.core.async.t_cljs$core$async15779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15779");

(cljs.core.async.t_cljs$core$async15779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15779.
 */
cljs.core.async.__GT_t_cljs$core$async15779 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15779(p__$1,ch__$1,meta15780){
return (new cljs.core.async.t_cljs$core$async15779(p__$1,ch__$1,meta15780));
});

}

return (new cljs.core.async.t_cljs$core$async15779(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15783 = arguments.length;
switch (G__15783) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___15823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15804){
var state_val_15805 = (state_15804[(1)]);
if((state_val_15805 === (7))){
var inst_15800 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15806_15824 = state_15804__$1;
(statearr_15806_15824[(2)] = inst_15800);

(statearr_15806_15824[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (1))){
var state_15804__$1 = state_15804;
var statearr_15807_15825 = state_15804__$1;
(statearr_15807_15825[(2)] = null);

(statearr_15807_15825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (4))){
var inst_15786 = (state_15804[(7)]);
var inst_15786__$1 = (state_15804[(2)]);
var inst_15787 = (inst_15786__$1 == null);
var state_15804__$1 = (function (){var statearr_15808 = state_15804;
(statearr_15808[(7)] = inst_15786__$1);

return statearr_15808;
})();
if(cljs.core.truth_(inst_15787)){
var statearr_15809_15826 = state_15804__$1;
(statearr_15809_15826[(1)] = (5));

} else {
var statearr_15810_15827 = state_15804__$1;
(statearr_15810_15827[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (6))){
var inst_15786 = (state_15804[(7)]);
var inst_15791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15786) : p.call(null,inst_15786));
var state_15804__$1 = state_15804;
if(cljs.core.truth_(inst_15791)){
var statearr_15811_15828 = state_15804__$1;
(statearr_15811_15828[(1)] = (8));

} else {
var statearr_15812_15829 = state_15804__$1;
(statearr_15812_15829[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (3))){
var inst_15802 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15804__$1,inst_15802);
} else {
if((state_val_15805 === (2))){
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15804__$1,(4),ch);
} else {
if((state_val_15805 === (11))){
var inst_15794 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15813_15830 = state_15804__$1;
(statearr_15813_15830[(2)] = inst_15794);

(statearr_15813_15830[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (9))){
var state_15804__$1 = state_15804;
var statearr_15814_15831 = state_15804__$1;
(statearr_15814_15831[(2)] = null);

(statearr_15814_15831[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (5))){
var inst_15789 = cljs.core.async.close_BANG_(out);
var state_15804__$1 = state_15804;
var statearr_15815_15832 = state_15804__$1;
(statearr_15815_15832[(2)] = inst_15789);

(statearr_15815_15832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (10))){
var inst_15797 = (state_15804[(2)]);
var state_15804__$1 = (function (){var statearr_15816 = state_15804;
(statearr_15816[(8)] = inst_15797);

return statearr_15816;
})();
var statearr_15817_15833 = state_15804__$1;
(statearr_15817_15833[(2)] = null);

(statearr_15817_15833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15805 === (8))){
var inst_15786 = (state_15804[(7)]);
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15804__$1,(11),out,inst_15786);
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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_15818 = [null,null,null,null,null,null,null,null,null];
(statearr_15818[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_15818[(1)] = (1));

return statearr_15818;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15804){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15804);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15819){if((e15819 instanceof Object)){
var ex__12199__auto__ = e15819;
var statearr_15820_15834 = state_15804;
(statearr_15820_15834[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15804);

return cljs.core.cst$kw$recur;
} else {
throw e15819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15835 = state_15804;
state_15804 = G__15835;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15821 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15821[(6)] = c__12386__auto___15823);

return statearr_15821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15837 = arguments.length;
switch (G__15837) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15900){
var state_val_15901 = (state_15900[(1)]);
if((state_val_15901 === (7))){
var inst_15896 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
var statearr_15902_15940 = state_15900__$1;
(statearr_15902_15940[(2)] = inst_15896);

(statearr_15902_15940[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (20))){
var inst_15866 = (state_15900[(7)]);
var inst_15877 = (state_15900[(2)]);
var inst_15878 = cljs.core.next(inst_15866);
var inst_15852 = inst_15878;
var inst_15853 = null;
var inst_15854 = (0);
var inst_15855 = (0);
var state_15900__$1 = (function (){var statearr_15903 = state_15900;
(statearr_15903[(8)] = inst_15852);

(statearr_15903[(9)] = inst_15853);

(statearr_15903[(10)] = inst_15877);

(statearr_15903[(11)] = inst_15855);

(statearr_15903[(12)] = inst_15854);

return statearr_15903;
})();
var statearr_15904_15941 = state_15900__$1;
(statearr_15904_15941[(2)] = null);

(statearr_15904_15941[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (1))){
var state_15900__$1 = state_15900;
var statearr_15905_15942 = state_15900__$1;
(statearr_15905_15942[(2)] = null);

(statearr_15905_15942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (4))){
var inst_15841 = (state_15900[(13)]);
var inst_15841__$1 = (state_15900[(2)]);
var inst_15842 = (inst_15841__$1 == null);
var state_15900__$1 = (function (){var statearr_15906 = state_15900;
(statearr_15906[(13)] = inst_15841__$1);

return statearr_15906;
})();
if(cljs.core.truth_(inst_15842)){
var statearr_15907_15943 = state_15900__$1;
(statearr_15907_15943[(1)] = (5));

} else {
var statearr_15908_15944 = state_15900__$1;
(statearr_15908_15944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (15))){
var state_15900__$1 = state_15900;
var statearr_15912_15945 = state_15900__$1;
(statearr_15912_15945[(2)] = null);

(statearr_15912_15945[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (21))){
var state_15900__$1 = state_15900;
var statearr_15913_15946 = state_15900__$1;
(statearr_15913_15946[(2)] = null);

(statearr_15913_15946[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (13))){
var inst_15852 = (state_15900[(8)]);
var inst_15853 = (state_15900[(9)]);
var inst_15855 = (state_15900[(11)]);
var inst_15854 = (state_15900[(12)]);
var inst_15862 = (state_15900[(2)]);
var inst_15863 = (inst_15855 + (1));
var tmp15909 = inst_15852;
var tmp15910 = inst_15853;
var tmp15911 = inst_15854;
var inst_15852__$1 = tmp15909;
var inst_15853__$1 = tmp15910;
var inst_15854__$1 = tmp15911;
var inst_15855__$1 = inst_15863;
var state_15900__$1 = (function (){var statearr_15914 = state_15900;
(statearr_15914[(14)] = inst_15862);

(statearr_15914[(8)] = inst_15852__$1);

(statearr_15914[(9)] = inst_15853__$1);

(statearr_15914[(11)] = inst_15855__$1);

(statearr_15914[(12)] = inst_15854__$1);

return statearr_15914;
})();
var statearr_15915_15947 = state_15900__$1;
(statearr_15915_15947[(2)] = null);

(statearr_15915_15947[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (22))){
var state_15900__$1 = state_15900;
var statearr_15916_15948 = state_15900__$1;
(statearr_15916_15948[(2)] = null);

(statearr_15916_15948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (6))){
var inst_15841 = (state_15900[(13)]);
var inst_15850 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15841) : f.call(null,inst_15841));
var inst_15851 = cljs.core.seq(inst_15850);
var inst_15852 = inst_15851;
var inst_15853 = null;
var inst_15854 = (0);
var inst_15855 = (0);
var state_15900__$1 = (function (){var statearr_15917 = state_15900;
(statearr_15917[(8)] = inst_15852);

(statearr_15917[(9)] = inst_15853);

(statearr_15917[(11)] = inst_15855);

(statearr_15917[(12)] = inst_15854);

return statearr_15917;
})();
var statearr_15918_15949 = state_15900__$1;
(statearr_15918_15949[(2)] = null);

(statearr_15918_15949[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (17))){
var inst_15866 = (state_15900[(7)]);
var inst_15870 = cljs.core.chunk_first(inst_15866);
var inst_15871 = cljs.core.chunk_rest(inst_15866);
var inst_15872 = cljs.core.count(inst_15870);
var inst_15852 = inst_15871;
var inst_15853 = inst_15870;
var inst_15854 = inst_15872;
var inst_15855 = (0);
var state_15900__$1 = (function (){var statearr_15919 = state_15900;
(statearr_15919[(8)] = inst_15852);

(statearr_15919[(9)] = inst_15853);

(statearr_15919[(11)] = inst_15855);

(statearr_15919[(12)] = inst_15854);

return statearr_15919;
})();
var statearr_15920_15950 = state_15900__$1;
(statearr_15920_15950[(2)] = null);

(statearr_15920_15950[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (3))){
var inst_15898 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15900__$1,inst_15898);
} else {
if((state_val_15901 === (12))){
var inst_15886 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
var statearr_15921_15951 = state_15900__$1;
(statearr_15921_15951[(2)] = inst_15886);

(statearr_15921_15951[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (2))){
var state_15900__$1 = state_15900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15900__$1,(4),in$);
} else {
if((state_val_15901 === (23))){
var inst_15894 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
var statearr_15922_15952 = state_15900__$1;
(statearr_15922_15952[(2)] = inst_15894);

(statearr_15922_15952[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (19))){
var inst_15881 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
var statearr_15923_15953 = state_15900__$1;
(statearr_15923_15953[(2)] = inst_15881);

(statearr_15923_15953[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (11))){
var inst_15852 = (state_15900[(8)]);
var inst_15866 = (state_15900[(7)]);
var inst_15866__$1 = cljs.core.seq(inst_15852);
var state_15900__$1 = (function (){var statearr_15924 = state_15900;
(statearr_15924[(7)] = inst_15866__$1);

return statearr_15924;
})();
if(inst_15866__$1){
var statearr_15925_15954 = state_15900__$1;
(statearr_15925_15954[(1)] = (14));

} else {
var statearr_15926_15955 = state_15900__$1;
(statearr_15926_15955[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (9))){
var inst_15888 = (state_15900[(2)]);
var inst_15889 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15900__$1 = (function (){var statearr_15927 = state_15900;
(statearr_15927[(15)] = inst_15888);

return statearr_15927;
})();
if(cljs.core.truth_(inst_15889)){
var statearr_15928_15956 = state_15900__$1;
(statearr_15928_15956[(1)] = (21));

} else {
var statearr_15929_15957 = state_15900__$1;
(statearr_15929_15957[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (5))){
var inst_15844 = cljs.core.async.close_BANG_(out);
var state_15900__$1 = state_15900;
var statearr_15930_15958 = state_15900__$1;
(statearr_15930_15958[(2)] = inst_15844);

(statearr_15930_15958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (14))){
var inst_15866 = (state_15900[(7)]);
var inst_15868 = cljs.core.chunked_seq_QMARK_(inst_15866);
var state_15900__$1 = state_15900;
if(inst_15868){
var statearr_15931_15959 = state_15900__$1;
(statearr_15931_15959[(1)] = (17));

} else {
var statearr_15932_15960 = state_15900__$1;
(statearr_15932_15960[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (16))){
var inst_15884 = (state_15900[(2)]);
var state_15900__$1 = state_15900;
var statearr_15933_15961 = state_15900__$1;
(statearr_15933_15961[(2)] = inst_15884);

(statearr_15933_15961[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15901 === (10))){
var inst_15853 = (state_15900[(9)]);
var inst_15855 = (state_15900[(11)]);
var inst_15860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15853,inst_15855);
var state_15900__$1 = state_15900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15900__$1,(13),out,inst_15860);
} else {
if((state_val_15901 === (18))){
var inst_15866 = (state_15900[(7)]);
var inst_15875 = cljs.core.first(inst_15866);
var state_15900__$1 = state_15900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15900__$1,(20),out,inst_15875);
} else {
if((state_val_15901 === (8))){
var inst_15855 = (state_15900[(11)]);
var inst_15854 = (state_15900[(12)]);
var inst_15857 = (inst_15855 < inst_15854);
var inst_15858 = inst_15857;
var state_15900__$1 = state_15900;
if(cljs.core.truth_(inst_15858)){
var statearr_15934_15962 = state_15900__$1;
(statearr_15934_15962[(1)] = (10));

} else {
var statearr_15935_15963 = state_15900__$1;
(statearr_15935_15963[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____0 = (function (){
var statearr_15936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15936[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__);

(statearr_15936[(1)] = (1));

return statearr_15936;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____1 = (function (state_15900){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15900);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e15937){if((e15937 instanceof Object)){
var ex__12199__auto__ = e15937;
var statearr_15938_15964 = state_15900;
(statearr_15938_15964[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15900);

return cljs.core.cst$kw$recur;
} else {
throw e15937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__15965 = state_15900;
state_15900 = G__15965;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__ = function(state_15900){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____1.call(this,state_15900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12196__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_15939 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_15939[(6)] = c__12386__auto__);

return statearr_15939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));

return c__12386__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15967 = arguments.length;
switch (G__15967) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15970 = arguments.length;
switch (G__15970) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15973 = arguments.length;
switch (G__15973) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___16020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_15997){
var state_val_15998 = (state_15997[(1)]);
if((state_val_15998 === (7))){
var inst_15992 = (state_15997[(2)]);
var state_15997__$1 = state_15997;
var statearr_15999_16021 = state_15997__$1;
(statearr_15999_16021[(2)] = inst_15992);

(statearr_15999_16021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (1))){
var inst_15974 = null;
var state_15997__$1 = (function (){var statearr_16000 = state_15997;
(statearr_16000[(7)] = inst_15974);

return statearr_16000;
})();
var statearr_16001_16022 = state_15997__$1;
(statearr_16001_16022[(2)] = null);

(statearr_16001_16022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (4))){
var inst_15977 = (state_15997[(8)]);
var inst_15977__$1 = (state_15997[(2)]);
var inst_15978 = (inst_15977__$1 == null);
var inst_15979 = cljs.core.not(inst_15978);
var state_15997__$1 = (function (){var statearr_16002 = state_15997;
(statearr_16002[(8)] = inst_15977__$1);

return statearr_16002;
})();
if(inst_15979){
var statearr_16003_16023 = state_15997__$1;
(statearr_16003_16023[(1)] = (5));

} else {
var statearr_16004_16024 = state_15997__$1;
(statearr_16004_16024[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (6))){
var state_15997__$1 = state_15997;
var statearr_16005_16025 = state_15997__$1;
(statearr_16005_16025[(2)] = null);

(statearr_16005_16025[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (3))){
var inst_15994 = (state_15997[(2)]);
var inst_15995 = cljs.core.async.close_BANG_(out);
var state_15997__$1 = (function (){var statearr_16006 = state_15997;
(statearr_16006[(9)] = inst_15994);

return statearr_16006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15997__$1,inst_15995);
} else {
if((state_val_15998 === (2))){
var state_15997__$1 = state_15997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15997__$1,(4),ch);
} else {
if((state_val_15998 === (11))){
var inst_15977 = (state_15997[(8)]);
var inst_15986 = (state_15997[(2)]);
var inst_15974 = inst_15977;
var state_15997__$1 = (function (){var statearr_16007 = state_15997;
(statearr_16007[(10)] = inst_15986);

(statearr_16007[(7)] = inst_15974);

return statearr_16007;
})();
var statearr_16008_16026 = state_15997__$1;
(statearr_16008_16026[(2)] = null);

(statearr_16008_16026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (9))){
var inst_15977 = (state_15997[(8)]);
var state_15997__$1 = state_15997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15997__$1,(11),out,inst_15977);
} else {
if((state_val_15998 === (5))){
var inst_15977 = (state_15997[(8)]);
var inst_15974 = (state_15997[(7)]);
var inst_15981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15977,inst_15974);
var state_15997__$1 = state_15997;
if(inst_15981){
var statearr_16010_16027 = state_15997__$1;
(statearr_16010_16027[(1)] = (8));

} else {
var statearr_16011_16028 = state_15997__$1;
(statearr_16011_16028[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (10))){
var inst_15989 = (state_15997[(2)]);
var state_15997__$1 = state_15997;
var statearr_16012_16029 = state_15997__$1;
(statearr_16012_16029[(2)] = inst_15989);

(statearr_16012_16029[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15998 === (8))){
var inst_15974 = (state_15997[(7)]);
var tmp16009 = inst_15974;
var inst_15974__$1 = tmp16009;
var state_15997__$1 = (function (){var statearr_16013 = state_15997;
(statearr_16013[(7)] = inst_15974__$1);

return statearr_16013;
})();
var statearr_16014_16030 = state_15997__$1;
(statearr_16014_16030[(2)] = null);

(statearr_16014_16030[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_16015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16015[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_16015[(1)] = (1));

return statearr_16015;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_15997){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_15997);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e16016){if((e16016 instanceof Object)){
var ex__12199__auto__ = e16016;
var statearr_16017_16031 = state_15997;
(statearr_16017_16031[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15997);

return cljs.core.cst$kw$recur;
} else {
throw e16016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__16032 = state_15997;
state_15997 = G__16032;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_15997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_15997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_16018 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_16018[(6)] = c__12386__auto___16020);

return statearr_16018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16034 = arguments.length;
switch (G__16034) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___16100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_16072){
var state_val_16073 = (state_16072[(1)]);
if((state_val_16073 === (7))){
var inst_16068 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16074_16101 = state_16072__$1;
(statearr_16074_16101[(2)] = inst_16068);

(statearr_16074_16101[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (1))){
var inst_16035 = (new Array(n));
var inst_16036 = inst_16035;
var inst_16037 = (0);
var state_16072__$1 = (function (){var statearr_16075 = state_16072;
(statearr_16075[(7)] = inst_16036);

(statearr_16075[(8)] = inst_16037);

return statearr_16075;
})();
var statearr_16076_16102 = state_16072__$1;
(statearr_16076_16102[(2)] = null);

(statearr_16076_16102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (4))){
var inst_16040 = (state_16072[(9)]);
var inst_16040__$1 = (state_16072[(2)]);
var inst_16041 = (inst_16040__$1 == null);
var inst_16042 = cljs.core.not(inst_16041);
var state_16072__$1 = (function (){var statearr_16077 = state_16072;
(statearr_16077[(9)] = inst_16040__$1);

return statearr_16077;
})();
if(inst_16042){
var statearr_16078_16103 = state_16072__$1;
(statearr_16078_16103[(1)] = (5));

} else {
var statearr_16079_16104 = state_16072__$1;
(statearr_16079_16104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (15))){
var inst_16062 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16080_16105 = state_16072__$1;
(statearr_16080_16105[(2)] = inst_16062);

(statearr_16080_16105[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (13))){
var state_16072__$1 = state_16072;
var statearr_16081_16106 = state_16072__$1;
(statearr_16081_16106[(2)] = null);

(statearr_16081_16106[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (6))){
var inst_16037 = (state_16072[(8)]);
var inst_16058 = (inst_16037 > (0));
var state_16072__$1 = state_16072;
if(cljs.core.truth_(inst_16058)){
var statearr_16082_16107 = state_16072__$1;
(statearr_16082_16107[(1)] = (12));

} else {
var statearr_16083_16108 = state_16072__$1;
(statearr_16083_16108[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (3))){
var inst_16070 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16072__$1,inst_16070);
} else {
if((state_val_16073 === (12))){
var inst_16036 = (state_16072[(7)]);
var inst_16060 = cljs.core.vec(inst_16036);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16072__$1,(15),out,inst_16060);
} else {
if((state_val_16073 === (2))){
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16072__$1,(4),ch);
} else {
if((state_val_16073 === (11))){
var inst_16052 = (state_16072[(2)]);
var inst_16053 = (new Array(n));
var inst_16036 = inst_16053;
var inst_16037 = (0);
var state_16072__$1 = (function (){var statearr_16084 = state_16072;
(statearr_16084[(10)] = inst_16052);

(statearr_16084[(7)] = inst_16036);

(statearr_16084[(8)] = inst_16037);

return statearr_16084;
})();
var statearr_16085_16109 = state_16072__$1;
(statearr_16085_16109[(2)] = null);

(statearr_16085_16109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (9))){
var inst_16036 = (state_16072[(7)]);
var inst_16050 = cljs.core.vec(inst_16036);
var state_16072__$1 = state_16072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16072__$1,(11),out,inst_16050);
} else {
if((state_val_16073 === (5))){
var inst_16045 = (state_16072[(11)]);
var inst_16036 = (state_16072[(7)]);
var inst_16040 = (state_16072[(9)]);
var inst_16037 = (state_16072[(8)]);
var inst_16044 = (inst_16036[inst_16037] = inst_16040);
var inst_16045__$1 = (inst_16037 + (1));
var inst_16046 = (inst_16045__$1 < n);
var state_16072__$1 = (function (){var statearr_16086 = state_16072;
(statearr_16086[(11)] = inst_16045__$1);

(statearr_16086[(12)] = inst_16044);

return statearr_16086;
})();
if(cljs.core.truth_(inst_16046)){
var statearr_16087_16110 = state_16072__$1;
(statearr_16087_16110[(1)] = (8));

} else {
var statearr_16088_16111 = state_16072__$1;
(statearr_16088_16111[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (14))){
var inst_16065 = (state_16072[(2)]);
var inst_16066 = cljs.core.async.close_BANG_(out);
var state_16072__$1 = (function (){var statearr_16090 = state_16072;
(statearr_16090[(13)] = inst_16065);

return statearr_16090;
})();
var statearr_16091_16112 = state_16072__$1;
(statearr_16091_16112[(2)] = inst_16066);

(statearr_16091_16112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (10))){
var inst_16056 = (state_16072[(2)]);
var state_16072__$1 = state_16072;
var statearr_16092_16113 = state_16072__$1;
(statearr_16092_16113[(2)] = inst_16056);

(statearr_16092_16113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16073 === (8))){
var inst_16045 = (state_16072[(11)]);
var inst_16036 = (state_16072[(7)]);
var tmp16089 = inst_16036;
var inst_16036__$1 = tmp16089;
var inst_16037 = inst_16045;
var state_16072__$1 = (function (){var statearr_16093 = state_16072;
(statearr_16093[(7)] = inst_16036__$1);

(statearr_16093[(8)] = inst_16037);

return statearr_16093;
})();
var statearr_16094_16114 = state_16072__$1;
(statearr_16094_16114[(2)] = null);

(statearr_16094_16114[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_16095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16095[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_16095[(1)] = (1));

return statearr_16095;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_16072){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_16072);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e16096){if((e16096 instanceof Object)){
var ex__12199__auto__ = e16096;
var statearr_16097_16115 = state_16072;
(statearr_16097_16115[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16072);

return cljs.core.cst$kw$recur;
} else {
throw e16096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__16116 = state_16072;
state_16072 = G__16116;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_16072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_16072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_16098 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_16098[(6)] = c__12386__auto___16100);

return statearr_16098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16118 = arguments.length;
switch (G__16118) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12386__auto___16188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12387__auto__ = (function (){var switch__12195__auto__ = (function (state_16160){
var state_val_16161 = (state_16160[(1)]);
if((state_val_16161 === (7))){
var inst_16156 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
var statearr_16162_16189 = state_16160__$1;
(statearr_16162_16189[(2)] = inst_16156);

(statearr_16162_16189[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (1))){
var inst_16119 = [];
var inst_16120 = inst_16119;
var inst_16121 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16160__$1 = (function (){var statearr_16163 = state_16160;
(statearr_16163[(7)] = inst_16121);

(statearr_16163[(8)] = inst_16120);

return statearr_16163;
})();
var statearr_16164_16190 = state_16160__$1;
(statearr_16164_16190[(2)] = null);

(statearr_16164_16190[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (4))){
var inst_16124 = (state_16160[(9)]);
var inst_16124__$1 = (state_16160[(2)]);
var inst_16125 = (inst_16124__$1 == null);
var inst_16126 = cljs.core.not(inst_16125);
var state_16160__$1 = (function (){var statearr_16165 = state_16160;
(statearr_16165[(9)] = inst_16124__$1);

return statearr_16165;
})();
if(inst_16126){
var statearr_16166_16191 = state_16160__$1;
(statearr_16166_16191[(1)] = (5));

} else {
var statearr_16167_16192 = state_16160__$1;
(statearr_16167_16192[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (15))){
var inst_16150 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
var statearr_16168_16193 = state_16160__$1;
(statearr_16168_16193[(2)] = inst_16150);

(statearr_16168_16193[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (13))){
var state_16160__$1 = state_16160;
var statearr_16169_16194 = state_16160__$1;
(statearr_16169_16194[(2)] = null);

(statearr_16169_16194[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (6))){
var inst_16120 = (state_16160[(8)]);
var inst_16145 = inst_16120.length;
var inst_16146 = (inst_16145 > (0));
var state_16160__$1 = state_16160;
if(cljs.core.truth_(inst_16146)){
var statearr_16170_16195 = state_16160__$1;
(statearr_16170_16195[(1)] = (12));

} else {
var statearr_16171_16196 = state_16160__$1;
(statearr_16171_16196[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (3))){
var inst_16158 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16160__$1,inst_16158);
} else {
if((state_val_16161 === (12))){
var inst_16120 = (state_16160[(8)]);
var inst_16148 = cljs.core.vec(inst_16120);
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16160__$1,(15),out,inst_16148);
} else {
if((state_val_16161 === (2))){
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16160__$1,(4),ch);
} else {
if((state_val_16161 === (11))){
var inst_16124 = (state_16160[(9)]);
var inst_16128 = (state_16160[(10)]);
var inst_16138 = (state_16160[(2)]);
var inst_16139 = [];
var inst_16140 = inst_16139.push(inst_16124);
var inst_16120 = inst_16139;
var inst_16121 = inst_16128;
var state_16160__$1 = (function (){var statearr_16172 = state_16160;
(statearr_16172[(11)] = inst_16138);

(statearr_16172[(7)] = inst_16121);

(statearr_16172[(12)] = inst_16140);

(statearr_16172[(8)] = inst_16120);

return statearr_16172;
})();
var statearr_16173_16197 = state_16160__$1;
(statearr_16173_16197[(2)] = null);

(statearr_16173_16197[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (9))){
var inst_16120 = (state_16160[(8)]);
var inst_16136 = cljs.core.vec(inst_16120);
var state_16160__$1 = state_16160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16160__$1,(11),out,inst_16136);
} else {
if((state_val_16161 === (5))){
var inst_16124 = (state_16160[(9)]);
var inst_16121 = (state_16160[(7)]);
var inst_16128 = (state_16160[(10)]);
var inst_16128__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16124) : f.call(null,inst_16124));
var inst_16129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16128__$1,inst_16121);
var inst_16130 = cljs.core.keyword_identical_QMARK_(inst_16121,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16131 = ((inst_16129) || (inst_16130));
var state_16160__$1 = (function (){var statearr_16174 = state_16160;
(statearr_16174[(10)] = inst_16128__$1);

return statearr_16174;
})();
if(cljs.core.truth_(inst_16131)){
var statearr_16175_16198 = state_16160__$1;
(statearr_16175_16198[(1)] = (8));

} else {
var statearr_16176_16199 = state_16160__$1;
(statearr_16176_16199[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (14))){
var inst_16153 = (state_16160[(2)]);
var inst_16154 = cljs.core.async.close_BANG_(out);
var state_16160__$1 = (function (){var statearr_16178 = state_16160;
(statearr_16178[(13)] = inst_16153);

return statearr_16178;
})();
var statearr_16179_16200 = state_16160__$1;
(statearr_16179_16200[(2)] = inst_16154);

(statearr_16179_16200[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (10))){
var inst_16143 = (state_16160[(2)]);
var state_16160__$1 = state_16160;
var statearr_16180_16201 = state_16160__$1;
(statearr_16180_16201[(2)] = inst_16143);

(statearr_16180_16201[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16161 === (8))){
var inst_16124 = (state_16160[(9)]);
var inst_16128 = (state_16160[(10)]);
var inst_16120 = (state_16160[(8)]);
var inst_16133 = inst_16120.push(inst_16124);
var tmp16177 = inst_16120;
var inst_16120__$1 = tmp16177;
var inst_16121 = inst_16128;
var state_16160__$1 = (function (){var statearr_16181 = state_16160;
(statearr_16181[(7)] = inst_16121);

(statearr_16181[(14)] = inst_16133);

(statearr_16181[(8)] = inst_16120__$1);

return statearr_16181;
})();
var statearr_16182_16202 = state_16160__$1;
(statearr_16182_16202[(2)] = null);

(statearr_16182_16202[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12196__auto__ = null;
var cljs$core$async$state_machine__12196__auto____0 = (function (){
var statearr_16183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16183[(0)] = cljs$core$async$state_machine__12196__auto__);

(statearr_16183[(1)] = (1));

return statearr_16183;
});
var cljs$core$async$state_machine__12196__auto____1 = (function (state_16160){
while(true){
var ret_value__12197__auto__ = (function (){try{while(true){
var result__12198__auto__ = switch__12195__auto__(state_16160);
if(cljs.core.keyword_identical_QMARK_(result__12198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12198__auto__;
}
break;
}
}catch (e16184){if((e16184 instanceof Object)){
var ex__12199__auto__ = e16184;
var statearr_16185_16203 = state_16160;
(statearr_16185_16203[(5)] = ex__12199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16160);

return cljs.core.cst$kw$recur;
} else {
throw e16184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12197__auto__,cljs.core.cst$kw$recur)){
var G__16204 = state_16160;
state_16160 = G__16204;
continue;
} else {
return ret_value__12197__auto__;
}
break;
}
});
cljs$core$async$state_machine__12196__auto__ = function(state_16160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12196__auto____1.call(this,state_16160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12196__auto____0;
cljs$core$async$state_machine__12196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12196__auto____1;
return cljs$core$async$state_machine__12196__auto__;
})()
})();
var state__12388__auto__ = (function (){var statearr_16186 = (f__12387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12387__auto__.cljs$core$IFn$_invoke$arity$0() : f__12387__auto__.call(null));
(statearr_16186[(6)] = c__12386__auto___16188);

return statearr_16186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12388__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

