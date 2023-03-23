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
var G__24115 = arguments.length;
switch (G__24115) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24116 = (function (f,blockable,meta24117){
this.f = f;
this.blockable = blockable;
this.meta24117 = meta24117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24118,meta24117__$1){
var self__ = this;
var _24118__$1 = this;
return (new cljs.core.async.t_cljs$core$async24116(self__.f,self__.blockable,meta24117__$1));
}));

(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24118){
var self__ = this;
var _24118__$1 = this;
return self__.meta24117;
}));

(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24117], null);
}));

(cljs.core.async.t_cljs$core$async24116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24116");

(cljs.core.async.t_cljs$core$async24116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24116.
 */
cljs.core.async.__GT_t_cljs$core$async24116 = (function cljs$core$async$__GT_t_cljs$core$async24116(f__$1,blockable__$1,meta24117){
return (new cljs.core.async.t_cljs$core$async24116(f__$1,blockable__$1,meta24117));
});

}

return (new cljs.core.async.t_cljs$core$async24116(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24122 = arguments.length;
switch (G__24122) {
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
var G__24125 = arguments.length;
switch (G__24125) {
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
var G__24128 = arguments.length;
switch (G__24128) {
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
var val_24130 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24130) : fn1.call(null,val_24130));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24130) : fn1.call(null,val_24130));
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
var G__24132 = arguments.length;
switch (G__24132) {
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
var n__4613__auto___24134 = n;
var x_24135 = (0);
while(true){
if((x_24135 < n__4613__auto___24134)){
(a[x_24135] = (0));

var G__24136 = (x_24135 + (1));
x_24135 = G__24136;
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

var G__24137 = (i + (1));
i = G__24137;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24138 = (function (flag,meta24139){
this.flag = flag;
this.meta24139 = meta24139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24140,meta24139__$1){
var self__ = this;
var _24140__$1 = this;
return (new cljs.core.async.t_cljs$core$async24138(self__.flag,meta24139__$1));
}));

(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24140){
var self__ = this;
var _24140__$1 = this;
return self__.meta24139;
}));

(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24139], null);
}));

(cljs.core.async.t_cljs$core$async24138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24138");

(cljs.core.async.t_cljs$core$async24138.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24138.
 */
cljs.core.async.__GT_t_cljs$core$async24138 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24138(flag__$1,meta24139){
return (new cljs.core.async.t_cljs$core$async24138(flag__$1,meta24139));
});

}

return (new cljs.core.async.t_cljs$core$async24138(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24141 = (function (flag,cb,meta24142){
this.flag = flag;
this.cb = cb;
this.meta24142 = meta24142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24143,meta24142__$1){
var self__ = this;
var _24143__$1 = this;
return (new cljs.core.async.t_cljs$core$async24141(self__.flag,self__.cb,meta24142__$1));
}));

(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24143){
var self__ = this;
var _24143__$1 = this;
return self__.meta24142;
}));

(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24142], null);
}));

(cljs.core.async.t_cljs$core$async24141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24141");

(cljs.core.async.t_cljs$core$async24141.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24141.
 */
cljs.core.async.__GT_t_cljs$core$async24141 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24141(flag__$1,cb__$1,meta24142){
return (new cljs.core.async.t_cljs$core$async24141(flag__$1,cb__$1,meta24142));
});

}

return (new cljs.core.async.t_cljs$core$async24141(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24144_SHARP_){
var G__24146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24144_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24146) : fret.call(null,G__24146));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24145_SHARP_){
var G__24147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24145_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24147) : fret.call(null,G__24147));
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
var G__24148 = (i + (1));
i = G__24148;
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
var len__4736__auto___24154 = arguments.length;
var i__4737__auto___24155 = (0);
while(true){
if((i__4737__auto___24155 < len__4736__auto___24154)){
args__4742__auto__.push((arguments[i__4737__auto___24155]));

var G__24156 = (i__4737__auto___24155 + (1));
i__4737__auto___24155 = G__24156;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24151){
var map__24152 = p__24151;
var map__24152__$1 = (((((!((map__24152 == null))))?(((((map__24152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24152):map__24152);
var opts = map__24152__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24149){
var G__24150 = cljs.core.first(seq24149);
var seq24149__$1 = cljs.core.next(seq24149);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24150,seq24149__$1);
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
var G__24158 = arguments.length;
switch (G__24158) {
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
var c__22174__auto___24204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24182){
var state_val_24183 = (state_24182[(1)]);
if((state_val_24183 === (7))){
var inst_24178 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
var statearr_24184_24205 = state_24182__$1;
(statearr_24184_24205[(2)] = inst_24178);

(statearr_24184_24205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (1))){
var state_24182__$1 = state_24182;
var statearr_24185_24206 = state_24182__$1;
(statearr_24185_24206[(2)] = null);

(statearr_24185_24206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (4))){
var inst_24161 = (state_24182[(7)]);
var inst_24161__$1 = (state_24182[(2)]);
var inst_24162 = (inst_24161__$1 == null);
var state_24182__$1 = (function (){var statearr_24186 = state_24182;
(statearr_24186[(7)] = inst_24161__$1);

return statearr_24186;
})();
if(cljs.core.truth_(inst_24162)){
var statearr_24187_24207 = state_24182__$1;
(statearr_24187_24207[(1)] = (5));

} else {
var statearr_24188_24208 = state_24182__$1;
(statearr_24188_24208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (13))){
var state_24182__$1 = state_24182;
var statearr_24189_24209 = state_24182__$1;
(statearr_24189_24209[(2)] = null);

(statearr_24189_24209[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (6))){
var inst_24161 = (state_24182[(7)]);
var state_24182__$1 = state_24182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24182__$1,(11),to,inst_24161);
} else {
if((state_val_24183 === (3))){
var inst_24180 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24182__$1,inst_24180);
} else {
if((state_val_24183 === (12))){
var state_24182__$1 = state_24182;
var statearr_24190_24210 = state_24182__$1;
(statearr_24190_24210[(2)] = null);

(statearr_24190_24210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (2))){
var state_24182__$1 = state_24182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24182__$1,(4),from);
} else {
if((state_val_24183 === (11))){
var inst_24171 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
if(cljs.core.truth_(inst_24171)){
var statearr_24191_24211 = state_24182__$1;
(statearr_24191_24211[(1)] = (12));

} else {
var statearr_24192_24212 = state_24182__$1;
(statearr_24192_24212[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (9))){
var state_24182__$1 = state_24182;
var statearr_24193_24213 = state_24182__$1;
(statearr_24193_24213[(2)] = null);

(statearr_24193_24213[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (5))){
var state_24182__$1 = state_24182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24194_24214 = state_24182__$1;
(statearr_24194_24214[(1)] = (8));

} else {
var statearr_24195_24215 = state_24182__$1;
(statearr_24195_24215[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (14))){
var inst_24176 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
var statearr_24196_24216 = state_24182__$1;
(statearr_24196_24216[(2)] = inst_24176);

(statearr_24196_24216[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (10))){
var inst_24168 = (state_24182[(2)]);
var state_24182__$1 = state_24182;
var statearr_24197_24217 = state_24182__$1;
(statearr_24197_24217[(2)] = inst_24168);

(statearr_24197_24217[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24183 === (8))){
var inst_24165 = cljs.core.async.close_BANG_(to);
var state_24182__$1 = state_24182;
var statearr_24198_24218 = state_24182__$1;
(statearr_24198_24218[(2)] = inst_24165);

(statearr_24198_24218[(1)] = (10));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24199 = [null,null,null,null,null,null,null,null];
(statearr_24199[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24199[(1)] = (1));

return statearr_24199;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24182){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24182);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24200){if((e24200 instanceof Object)){
var ex__21987__auto__ = e24200;
var statearr_24201_24219 = state_24182;
(statearr_24201_24219[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24182);

return cljs.core.cst$kw$recur;
} else {
throw e24200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24220 = state_24182;
state_24182 = G__24220;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24202 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24202[(6)] = c__22174__auto___24204);

return statearr_24202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var process = (function (p__24221){
var vec__24222 = p__24221;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(1),null);
var job = vec__24222;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22174__auto___24393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24229){
var state_val_24230 = (state_24229[(1)]);
if((state_val_24230 === (1))){
var state_24229__$1 = state_24229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24229__$1,(2),res,v);
} else {
if((state_val_24230 === (2))){
var inst_24226 = (state_24229[(2)]);
var inst_24227 = cljs.core.async.close_BANG_(res);
var state_24229__$1 = (function (){var statearr_24231 = state_24229;
(statearr_24231[(7)] = inst_24226);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24229__$1,inst_24227);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24232 = [null,null,null,null,null,null,null,null];
(statearr_24232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24232[(1)] = (1));

return statearr_24232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24229){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24229);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24233){if((e24233 instanceof Object)){
var ex__21987__auto__ = e24233;
var statearr_24234_24394 = state_24229;
(statearr_24234_24394[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24229);

return cljs.core.cst$kw$recur;
} else {
throw e24233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24395 = state_24229;
state_24229 = G__24395;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24235 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24235[(6)] = c__22174__auto___24393);

return statearr_24235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__24236){
var vec__24237 = p__24236;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24237,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24237,(1),null);
var job = vec__24237;
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
var n__4613__auto___24396 = n;
var __24397 = (0);
while(true){
if((__24397 < n__4613__auto___24396)){
var G__24240_24398 = type;
var G__24240_24399__$1 = (((G__24240_24398 instanceof cljs.core.Keyword))?G__24240_24398.fqn:null);
switch (G__24240_24399__$1) {
case "compute":
var c__22174__auto___24401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24397,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = ((function (__24397,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function (state_24253){
var state_val_24254 = (state_24253[(1)]);
if((state_val_24254 === (1))){
var state_24253__$1 = state_24253;
var statearr_24255_24402 = state_24253__$1;
(statearr_24255_24402[(2)] = null);

(statearr_24255_24402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24254 === (2))){
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24253__$1,(4),jobs);
} else {
if((state_val_24254 === (3))){
var inst_24251 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24253__$1,inst_24251);
} else {
if((state_val_24254 === (4))){
var inst_24243 = (state_24253[(2)]);
var inst_24244 = process(inst_24243);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24244)){
var statearr_24256_24403 = state_24253__$1;
(statearr_24256_24403[(1)] = (5));

} else {
var statearr_24257_24404 = state_24253__$1;
(statearr_24257_24404[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24254 === (5))){
var state_24253__$1 = state_24253;
var statearr_24258_24405 = state_24253__$1;
(statearr_24258_24405[(2)] = null);

(statearr_24258_24405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24254 === (6))){
var state_24253__$1 = state_24253;
var statearr_24259_24406 = state_24253__$1;
(statearr_24259_24406[(2)] = null);

(statearr_24259_24406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24254 === (7))){
var inst_24249 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24260_24407 = state_24253__$1;
(statearr_24260_24407[(2)] = inst_24249);

(statearr_24260_24407[(1)] = (3));


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
});})(__24397,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
;
return ((function (__24397,switch__21983__auto__,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24261 = [null,null,null,null,null,null,null];
(statearr_24261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24261[(1)] = (1));

return statearr_24261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24253){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24253);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24262){if((e24262 instanceof Object)){
var ex__21987__auto__ = e24262;
var statearr_24263_24408 = state_24253;
(statearr_24263_24408[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24253);

return cljs.core.cst$kw$recur;
} else {
throw e24262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24409 = state_24253;
state_24253 = G__24409;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
;})(__24397,switch__21983__auto__,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
})();
var state__22176__auto__ = (function (){var statearr_24264 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24264[(6)] = c__22174__auto___24401);

return statearr_24264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
});})(__24397,c__22174__auto___24401,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
);


break;
case "async":
var c__22174__auto___24410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24397,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = ((function (__24397,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function (state_24277){
var state_val_24278 = (state_24277[(1)]);
if((state_val_24278 === (1))){
var state_24277__$1 = state_24277;
var statearr_24279_24411 = state_24277__$1;
(statearr_24279_24411[(2)] = null);

(statearr_24279_24411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24278 === (2))){
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24277__$1,(4),jobs);
} else {
if((state_val_24278 === (3))){
var inst_24275 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24277__$1,inst_24275);
} else {
if((state_val_24278 === (4))){
var inst_24267 = (state_24277[(2)]);
var inst_24268 = async(inst_24267);
var state_24277__$1 = state_24277;
if(cljs.core.truth_(inst_24268)){
var statearr_24280_24412 = state_24277__$1;
(statearr_24280_24412[(1)] = (5));

} else {
var statearr_24281_24413 = state_24277__$1;
(statearr_24281_24413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24278 === (5))){
var state_24277__$1 = state_24277;
var statearr_24282_24414 = state_24277__$1;
(statearr_24282_24414[(2)] = null);

(statearr_24282_24414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24278 === (6))){
var state_24277__$1 = state_24277;
var statearr_24283_24415 = state_24277__$1;
(statearr_24283_24415[(2)] = null);

(statearr_24283_24415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24278 === (7))){
var inst_24273 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24284_24416 = state_24277__$1;
(statearr_24284_24416[(2)] = inst_24273);

(statearr_24284_24416[(1)] = (3));


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
});})(__24397,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
;
return ((function (__24397,switch__21983__auto__,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24285 = [null,null,null,null,null,null,null];
(statearr_24285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24285[(1)] = (1));

return statearr_24285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24277){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24277);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24286){if((e24286 instanceof Object)){
var ex__21987__auto__ = e24286;
var statearr_24287_24417 = state_24277;
(statearr_24287_24417[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24277);

return cljs.core.cst$kw$recur;
} else {
throw e24286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24418 = state_24277;
state_24277 = G__24418;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
;})(__24397,switch__21983__auto__,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
})();
var state__22176__auto__ = (function (){var statearr_24288 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24288[(6)] = c__22174__auto___24410);

return statearr_24288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
});})(__24397,c__22174__auto___24410,G__24240_24398,G__24240_24399__$1,n__4613__auto___24396,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24240_24399__$1)].join('')));

}

var G__24419 = (__24397 + (1));
__24397 = G__24419;
continue;
} else {
}
break;
}

var c__22174__auto___24420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24310){
var state_val_24311 = (state_24310[(1)]);
if((state_val_24311 === (7))){
var inst_24306 = (state_24310[(2)]);
var state_24310__$1 = state_24310;
var statearr_24312_24421 = state_24310__$1;
(statearr_24312_24421[(2)] = inst_24306);

(statearr_24312_24421[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24311 === (1))){
var state_24310__$1 = state_24310;
var statearr_24313_24422 = state_24310__$1;
(statearr_24313_24422[(2)] = null);

(statearr_24313_24422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24311 === (4))){
var inst_24291 = (state_24310[(7)]);
var inst_24291__$1 = (state_24310[(2)]);
var inst_24292 = (inst_24291__$1 == null);
var state_24310__$1 = (function (){var statearr_24314 = state_24310;
(statearr_24314[(7)] = inst_24291__$1);

return statearr_24314;
})();
if(cljs.core.truth_(inst_24292)){
var statearr_24315_24423 = state_24310__$1;
(statearr_24315_24423[(1)] = (5));

} else {
var statearr_24316_24424 = state_24310__$1;
(statearr_24316_24424[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24311 === (6))){
var inst_24296 = (state_24310[(8)]);
var inst_24291 = (state_24310[(7)]);
var inst_24296__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24298 = [inst_24291,inst_24296__$1];
var inst_24299 = (new cljs.core.PersistentVector(null,2,(5),inst_24297,inst_24298,null));
var state_24310__$1 = (function (){var statearr_24317 = state_24310;
(statearr_24317[(8)] = inst_24296__$1);

return statearr_24317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24310__$1,(8),jobs,inst_24299);
} else {
if((state_val_24311 === (3))){
var inst_24308 = (state_24310[(2)]);
var state_24310__$1 = state_24310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24310__$1,inst_24308);
} else {
if((state_val_24311 === (2))){
var state_24310__$1 = state_24310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24310__$1,(4),from);
} else {
if((state_val_24311 === (9))){
var inst_24303 = (state_24310[(2)]);
var state_24310__$1 = (function (){var statearr_24318 = state_24310;
(statearr_24318[(9)] = inst_24303);

return statearr_24318;
})();
var statearr_24319_24425 = state_24310__$1;
(statearr_24319_24425[(2)] = null);

(statearr_24319_24425[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24311 === (5))){
var inst_24294 = cljs.core.async.close_BANG_(jobs);
var state_24310__$1 = state_24310;
var statearr_24320_24426 = state_24310__$1;
(statearr_24320_24426[(2)] = inst_24294);

(statearr_24320_24426[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24311 === (8))){
var inst_24296 = (state_24310[(8)]);
var inst_24301 = (state_24310[(2)]);
var state_24310__$1 = (function (){var statearr_24321 = state_24310;
(statearr_24321[(10)] = inst_24301);

return statearr_24321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24310__$1,(9),results,inst_24296);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24322[(1)] = (1));

return statearr_24322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24310){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24310);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24323){if((e24323 instanceof Object)){
var ex__21987__auto__ = e24323;
var statearr_24324_24427 = state_24310;
(statearr_24324_24427[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24310);

return cljs.core.cst$kw$recur;
} else {
throw e24323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24428 = state_24310;
state_24310 = G__24428;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24325 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24325[(6)] = c__22174__auto___24420);

return statearr_24325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


var c__22174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24363){
var state_val_24364 = (state_24363[(1)]);
if((state_val_24364 === (7))){
var inst_24359 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24365_24429 = state_24363__$1;
(statearr_24365_24429[(2)] = inst_24359);

(statearr_24365_24429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (20))){
var state_24363__$1 = state_24363;
var statearr_24366_24430 = state_24363__$1;
(statearr_24366_24430[(2)] = null);

(statearr_24366_24430[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (1))){
var state_24363__$1 = state_24363;
var statearr_24367_24431 = state_24363__$1;
(statearr_24367_24431[(2)] = null);

(statearr_24367_24431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (4))){
var inst_24328 = (state_24363[(7)]);
var inst_24328__$1 = (state_24363[(2)]);
var inst_24329 = (inst_24328__$1 == null);
var state_24363__$1 = (function (){var statearr_24368 = state_24363;
(statearr_24368[(7)] = inst_24328__$1);

return statearr_24368;
})();
if(cljs.core.truth_(inst_24329)){
var statearr_24369_24432 = state_24363__$1;
(statearr_24369_24432[(1)] = (5));

} else {
var statearr_24370_24433 = state_24363__$1;
(statearr_24370_24433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (15))){
var inst_24341 = (state_24363[(8)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24363__$1,(18),to,inst_24341);
} else {
if((state_val_24364 === (21))){
var inst_24354 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24371_24434 = state_24363__$1;
(statearr_24371_24434[(2)] = inst_24354);

(statearr_24371_24434[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (13))){
var inst_24356 = (state_24363[(2)]);
var state_24363__$1 = (function (){var statearr_24372 = state_24363;
(statearr_24372[(9)] = inst_24356);

return statearr_24372;
})();
var statearr_24373_24435 = state_24363__$1;
(statearr_24373_24435[(2)] = null);

(statearr_24373_24435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (6))){
var inst_24328 = (state_24363[(7)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24363__$1,(11),inst_24328);
} else {
if((state_val_24364 === (17))){
var inst_24349 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
if(cljs.core.truth_(inst_24349)){
var statearr_24374_24436 = state_24363__$1;
(statearr_24374_24436[(1)] = (19));

} else {
var statearr_24375_24437 = state_24363__$1;
(statearr_24375_24437[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (3))){
var inst_24361 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24363__$1,inst_24361);
} else {
if((state_val_24364 === (12))){
var inst_24338 = (state_24363[(10)]);
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24363__$1,(14),inst_24338);
} else {
if((state_val_24364 === (2))){
var state_24363__$1 = state_24363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24363__$1,(4),results);
} else {
if((state_val_24364 === (19))){
var state_24363__$1 = state_24363;
var statearr_24376_24438 = state_24363__$1;
(statearr_24376_24438[(2)] = null);

(statearr_24376_24438[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (11))){
var inst_24338 = (state_24363[(2)]);
var state_24363__$1 = (function (){var statearr_24377 = state_24363;
(statearr_24377[(10)] = inst_24338);

return statearr_24377;
})();
var statearr_24378_24439 = state_24363__$1;
(statearr_24378_24439[(2)] = null);

(statearr_24378_24439[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (9))){
var state_24363__$1 = state_24363;
var statearr_24379_24440 = state_24363__$1;
(statearr_24379_24440[(2)] = null);

(statearr_24379_24440[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (5))){
var state_24363__$1 = state_24363;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24380_24441 = state_24363__$1;
(statearr_24380_24441[(1)] = (8));

} else {
var statearr_24381_24442 = state_24363__$1;
(statearr_24381_24442[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (14))){
var inst_24341 = (state_24363[(8)]);
var inst_24341__$1 = (state_24363[(2)]);
var inst_24342 = (inst_24341__$1 == null);
var inst_24343 = cljs.core.not(inst_24342);
var state_24363__$1 = (function (){var statearr_24382 = state_24363;
(statearr_24382[(8)] = inst_24341__$1);

return statearr_24382;
})();
if(inst_24343){
var statearr_24383_24443 = state_24363__$1;
(statearr_24383_24443[(1)] = (15));

} else {
var statearr_24384_24444 = state_24363__$1;
(statearr_24384_24444[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (16))){
var state_24363__$1 = state_24363;
var statearr_24385_24445 = state_24363__$1;
(statearr_24385_24445[(2)] = false);

(statearr_24385_24445[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (10))){
var inst_24335 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24386_24446 = state_24363__$1;
(statearr_24386_24446[(2)] = inst_24335);

(statearr_24386_24446[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (18))){
var inst_24346 = (state_24363[(2)]);
var state_24363__$1 = state_24363;
var statearr_24387_24447 = state_24363__$1;
(statearr_24387_24447[(2)] = inst_24346);

(statearr_24387_24447[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24364 === (8))){
var inst_24332 = cljs.core.async.close_BANG_(to);
var state_24363__$1 = state_24363;
var statearr_24388_24448 = state_24363__$1;
(statearr_24388_24448[(2)] = inst_24332);

(statearr_24388_24448[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1 = (function (state_24363){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24363);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__21987__auto__ = e24390;
var statearr_24391_24449 = state_24363;
(statearr_24391_24449[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24363);

return cljs.core.cst$kw$recur;
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24450 = state_24363;
state_24363 = G__24450;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__ = function(state_24363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1.call(this,state_24363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24392 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24392[(6)] = c__22174__auto__);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));

return c__22174__auto__;
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
var G__24452 = arguments.length;
switch (G__24452) {
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
var G__24455 = arguments.length;
switch (G__24455) {
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
var G__24458 = arguments.length;
switch (G__24458) {
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
var c__22174__auto___24507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24484){
var state_val_24485 = (state_24484[(1)]);
if((state_val_24485 === (7))){
var inst_24480 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24486_24508 = state_24484__$1;
(statearr_24486_24508[(2)] = inst_24480);

(statearr_24486_24508[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (1))){
var state_24484__$1 = state_24484;
var statearr_24487_24509 = state_24484__$1;
(statearr_24487_24509[(2)] = null);

(statearr_24487_24509[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (4))){
var inst_24461 = (state_24484[(7)]);
var inst_24461__$1 = (state_24484[(2)]);
var inst_24462 = (inst_24461__$1 == null);
var state_24484__$1 = (function (){var statearr_24488 = state_24484;
(statearr_24488[(7)] = inst_24461__$1);

return statearr_24488;
})();
if(cljs.core.truth_(inst_24462)){
var statearr_24489_24510 = state_24484__$1;
(statearr_24489_24510[(1)] = (5));

} else {
var statearr_24490_24511 = state_24484__$1;
(statearr_24490_24511[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (13))){
var state_24484__$1 = state_24484;
var statearr_24491_24512 = state_24484__$1;
(statearr_24491_24512[(2)] = null);

(statearr_24491_24512[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (6))){
var inst_24461 = (state_24484[(7)]);
var inst_24467 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24461) : p.call(null,inst_24461));
var state_24484__$1 = state_24484;
if(cljs.core.truth_(inst_24467)){
var statearr_24492_24513 = state_24484__$1;
(statearr_24492_24513[(1)] = (9));

} else {
var statearr_24493_24514 = state_24484__$1;
(statearr_24493_24514[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (3))){
var inst_24482 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24484__$1,inst_24482);
} else {
if((state_val_24485 === (12))){
var state_24484__$1 = state_24484;
var statearr_24494_24515 = state_24484__$1;
(statearr_24494_24515[(2)] = null);

(statearr_24494_24515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (2))){
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24484__$1,(4),ch);
} else {
if((state_val_24485 === (11))){
var inst_24461 = (state_24484[(7)]);
var inst_24471 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24484__$1,(8),inst_24471,inst_24461);
} else {
if((state_val_24485 === (9))){
var state_24484__$1 = state_24484;
var statearr_24495_24516 = state_24484__$1;
(statearr_24495_24516[(2)] = tc);

(statearr_24495_24516[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (5))){
var inst_24464 = cljs.core.async.close_BANG_(tc);
var inst_24465 = cljs.core.async.close_BANG_(fc);
var state_24484__$1 = (function (){var statearr_24496 = state_24484;
(statearr_24496[(8)] = inst_24464);

return statearr_24496;
})();
var statearr_24497_24517 = state_24484__$1;
(statearr_24497_24517[(2)] = inst_24465);

(statearr_24497_24517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (14))){
var inst_24478 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
var statearr_24498_24518 = state_24484__$1;
(statearr_24498_24518[(2)] = inst_24478);

(statearr_24498_24518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (10))){
var state_24484__$1 = state_24484;
var statearr_24499_24519 = state_24484__$1;
(statearr_24499_24519[(2)] = fc);

(statearr_24499_24519[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24485 === (8))){
var inst_24473 = (state_24484[(2)]);
var state_24484__$1 = state_24484;
if(cljs.core.truth_(inst_24473)){
var statearr_24500_24520 = state_24484__$1;
(statearr_24500_24520[(1)] = (12));

} else {
var statearr_24501_24521 = state_24484__$1;
(statearr_24501_24521[(1)] = (13));

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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24502 = [null,null,null,null,null,null,null,null,null];
(statearr_24502[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24502[(1)] = (1));

return statearr_24502;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24484){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24484);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24503){if((e24503 instanceof Object)){
var ex__21987__auto__ = e24503;
var statearr_24504_24522 = state_24484;
(statearr_24504_24522[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24484);

return cljs.core.cst$kw$recur;
} else {
throw e24503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24523 = state_24484;
state_24484 = G__24523;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24505 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24505[(6)] = c__22174__auto___24507);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var c__22174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24544){
var state_val_24545 = (state_24544[(1)]);
if((state_val_24545 === (7))){
var inst_24540 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
var statearr_24546_24564 = state_24544__$1;
(statearr_24546_24564[(2)] = inst_24540);

(statearr_24546_24564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (1))){
var inst_24524 = init;
var state_24544__$1 = (function (){var statearr_24547 = state_24544;
(statearr_24547[(7)] = inst_24524);

return statearr_24547;
})();
var statearr_24548_24565 = state_24544__$1;
(statearr_24548_24565[(2)] = null);

(statearr_24548_24565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (4))){
var inst_24527 = (state_24544[(8)]);
var inst_24527__$1 = (state_24544[(2)]);
var inst_24528 = (inst_24527__$1 == null);
var state_24544__$1 = (function (){var statearr_24549 = state_24544;
(statearr_24549[(8)] = inst_24527__$1);

return statearr_24549;
})();
if(cljs.core.truth_(inst_24528)){
var statearr_24550_24566 = state_24544__$1;
(statearr_24550_24566[(1)] = (5));

} else {
var statearr_24551_24567 = state_24544__$1;
(statearr_24551_24567[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (6))){
var inst_24527 = (state_24544[(8)]);
var inst_24524 = (state_24544[(7)]);
var inst_24531 = (state_24544[(9)]);
var inst_24531__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24524,inst_24527) : f.call(null,inst_24524,inst_24527));
var inst_24532 = cljs.core.reduced_QMARK_(inst_24531__$1);
var state_24544__$1 = (function (){var statearr_24552 = state_24544;
(statearr_24552[(9)] = inst_24531__$1);

return statearr_24552;
})();
if(inst_24532){
var statearr_24553_24568 = state_24544__$1;
(statearr_24553_24568[(1)] = (8));

} else {
var statearr_24554_24569 = state_24544__$1;
(statearr_24554_24569[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (3))){
var inst_24542 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24544__$1,inst_24542);
} else {
if((state_val_24545 === (2))){
var state_24544__$1 = state_24544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24544__$1,(4),ch);
} else {
if((state_val_24545 === (9))){
var inst_24531 = (state_24544[(9)]);
var inst_24524 = inst_24531;
var state_24544__$1 = (function (){var statearr_24555 = state_24544;
(statearr_24555[(7)] = inst_24524);

return statearr_24555;
})();
var statearr_24556_24570 = state_24544__$1;
(statearr_24556_24570[(2)] = null);

(statearr_24556_24570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (5))){
var inst_24524 = (state_24544[(7)]);
var state_24544__$1 = state_24544;
var statearr_24557_24571 = state_24544__$1;
(statearr_24557_24571[(2)] = inst_24524);

(statearr_24557_24571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (10))){
var inst_24538 = (state_24544[(2)]);
var state_24544__$1 = state_24544;
var statearr_24558_24572 = state_24544__$1;
(statearr_24558_24572[(2)] = inst_24538);

(statearr_24558_24572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24545 === (8))){
var inst_24531 = (state_24544[(9)]);
var inst_24534 = cljs.core.deref(inst_24531);
var state_24544__$1 = state_24544;
var statearr_24559_24573 = state_24544__$1;
(statearr_24559_24573[(2)] = inst_24534);

(statearr_24559_24573[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21984__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$reduce_$_state_machine__21984__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$reduce_$_state_machine__21984__auto____1 = (function (state_24544){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24544);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__21987__auto__ = e24561;
var statearr_24562_24574 = state_24544;
(statearr_24562_24574[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24544);

return cljs.core.cst$kw$recur;
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24575 = state_24544;
state_24544 = G__24575;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21984__auto__ = function(state_24544){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21984__auto____1.call(this,state_24544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21984__auto____0;
cljs$core$async$reduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21984__auto____1;
return cljs$core$async$reduce_$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24563 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24563[(6)] = c__22174__auto__);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));

return c__22174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__22174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24581){
var state_val_24582 = (state_24581[(1)]);
if((state_val_24582 === (1))){
var inst_24576 = cljs.core.async.reduce(f__$1,init,ch);
var state_24581__$1 = state_24581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24581__$1,(2),inst_24576);
} else {
if((state_val_24582 === (2))){
var inst_24578 = (state_24581[(2)]);
var inst_24579 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24578) : f__$1.call(null,inst_24578));
var state_24581__$1 = state_24581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24581__$1,inst_24579);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21984__auto____0 = (function (){
var statearr_24583 = [null,null,null,null,null,null,null];
(statearr_24583[(0)] = cljs$core$async$transduce_$_state_machine__21984__auto__);

(statearr_24583[(1)] = (1));

return statearr_24583;
});
var cljs$core$async$transduce_$_state_machine__21984__auto____1 = (function (state_24581){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24581);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24584){if((e24584 instanceof Object)){
var ex__21987__auto__ = e24584;
var statearr_24585_24587 = state_24581;
(statearr_24585_24587[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24581);

return cljs.core.cst$kw$recur;
} else {
throw e24584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24588 = state_24581;
state_24581 = G__24588;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21984__auto__ = function(state_24581){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21984__auto____1.call(this,state_24581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21984__auto____0;
cljs$core$async$transduce_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21984__auto____1;
return cljs$core$async$transduce_$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24586 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24586[(6)] = c__22174__auto__);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));

return c__22174__auto__;
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
var G__24590 = arguments.length;
switch (G__24590) {
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
var c__22174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24615){
var state_val_24616 = (state_24615[(1)]);
if((state_val_24616 === (7))){
var inst_24597 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24617_24638 = state_24615__$1;
(statearr_24617_24638[(2)] = inst_24597);

(statearr_24617_24638[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (1))){
var inst_24591 = cljs.core.seq(coll);
var inst_24592 = inst_24591;
var state_24615__$1 = (function (){var statearr_24618 = state_24615;
(statearr_24618[(7)] = inst_24592);

return statearr_24618;
})();
var statearr_24619_24639 = state_24615__$1;
(statearr_24619_24639[(2)] = null);

(statearr_24619_24639[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (4))){
var inst_24592 = (state_24615[(7)]);
var inst_24595 = cljs.core.first(inst_24592);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24615__$1,(7),ch,inst_24595);
} else {
if((state_val_24616 === (13))){
var inst_24609 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24620_24640 = state_24615__$1;
(statearr_24620_24640[(2)] = inst_24609);

(statearr_24620_24640[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (6))){
var inst_24600 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
if(cljs.core.truth_(inst_24600)){
var statearr_24621_24641 = state_24615__$1;
(statearr_24621_24641[(1)] = (8));

} else {
var statearr_24622_24642 = state_24615__$1;
(statearr_24622_24642[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (3))){
var inst_24613 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24615__$1,inst_24613);
} else {
if((state_val_24616 === (12))){
var state_24615__$1 = state_24615;
var statearr_24623_24643 = state_24615__$1;
(statearr_24623_24643[(2)] = null);

(statearr_24623_24643[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (2))){
var inst_24592 = (state_24615[(7)]);
var state_24615__$1 = state_24615;
if(cljs.core.truth_(inst_24592)){
var statearr_24624_24644 = state_24615__$1;
(statearr_24624_24644[(1)] = (4));

} else {
var statearr_24625_24645 = state_24615__$1;
(statearr_24625_24645[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (11))){
var inst_24606 = cljs.core.async.close_BANG_(ch);
var state_24615__$1 = state_24615;
var statearr_24626_24646 = state_24615__$1;
(statearr_24626_24646[(2)] = inst_24606);

(statearr_24626_24646[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (9))){
var state_24615__$1 = state_24615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24627_24647 = state_24615__$1;
(statearr_24627_24647[(1)] = (11));

} else {
var statearr_24628_24648 = state_24615__$1;
(statearr_24628_24648[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (5))){
var inst_24592 = (state_24615[(7)]);
var state_24615__$1 = state_24615;
var statearr_24629_24649 = state_24615__$1;
(statearr_24629_24649[(2)] = inst_24592);

(statearr_24629_24649[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (10))){
var inst_24611 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24630_24650 = state_24615__$1;
(statearr_24630_24650[(2)] = inst_24611);

(statearr_24630_24650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24616 === (8))){
var inst_24592 = (state_24615[(7)]);
var inst_24602 = cljs.core.next(inst_24592);
var inst_24592__$1 = inst_24602;
var state_24615__$1 = (function (){var statearr_24631 = state_24615;
(statearr_24631[(7)] = inst_24592__$1);

return statearr_24631;
})();
var statearr_24632_24651 = state_24615__$1;
(statearr_24632_24651[(2)] = null);

(statearr_24632_24651[(1)] = (2));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_24633 = [null,null,null,null,null,null,null,null];
(statearr_24633[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_24633[(1)] = (1));

return statearr_24633;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_24615){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24615);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24634){if((e24634 instanceof Object)){
var ex__21987__auto__ = e24634;
var statearr_24635_24652 = state_24615;
(statearr_24635_24652[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24615);

return cljs.core.cst$kw$recur;
} else {
throw e24634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24653 = state_24615;
state_24615 = G__24653;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_24615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_24615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24636 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24636[(6)] = c__22174__auto__);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));

return c__22174__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24654 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24654(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24655 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24655(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24656 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24656(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24657 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24657(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24658 = (function (ch,cs,meta24659){
this.ch = ch;
this.cs = cs;
this.meta24659 = meta24659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24660,meta24659__$1){
var self__ = this;
var _24660__$1 = this;
return (new cljs.core.async.t_cljs$core$async24658(self__.ch,self__.cs,meta24659__$1));
}));

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24660){
var self__ = this;
var _24660__$1 = this;
return self__.meta24659;
}));

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta24659], null);
}));

(cljs.core.async.t_cljs$core$async24658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24658");

(cljs.core.async.t_cljs$core$async24658.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24658.
 */
cljs.core.async.__GT_t_cljs$core$async24658 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24658(ch__$1,cs__$1,meta24659){
return (new cljs.core.async.t_cljs$core$async24658(ch__$1,cs__$1,meta24659));
});

}

return (new cljs.core.async.t_cljs$core$async24658(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22174__auto___24880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_24795){
var state_val_24796 = (state_24795[(1)]);
if((state_val_24796 === (7))){
var inst_24791 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24797_24881 = state_24795__$1;
(statearr_24797_24881[(2)] = inst_24791);

(statearr_24797_24881[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (20))){
var inst_24694 = (state_24795[(7)]);
var inst_24706 = cljs.core.first(inst_24694);
var inst_24707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24706,(0),null);
var inst_24708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24706,(1),null);
var state_24795__$1 = (function (){var statearr_24798 = state_24795;
(statearr_24798[(8)] = inst_24707);

return statearr_24798;
})();
if(cljs.core.truth_(inst_24708)){
var statearr_24799_24882 = state_24795__$1;
(statearr_24799_24882[(1)] = (22));

} else {
var statearr_24800_24883 = state_24795__$1;
(statearr_24800_24883[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (27))){
var inst_24663 = (state_24795[(9)]);
var inst_24738 = (state_24795[(10)]);
var inst_24743 = (state_24795[(11)]);
var inst_24736 = (state_24795[(12)]);
var inst_24743__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24736,inst_24738);
var inst_24744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24743__$1,inst_24663,done);
var state_24795__$1 = (function (){var statearr_24801 = state_24795;
(statearr_24801[(11)] = inst_24743__$1);

return statearr_24801;
})();
if(cljs.core.truth_(inst_24744)){
var statearr_24802_24884 = state_24795__$1;
(statearr_24802_24884[(1)] = (30));

} else {
var statearr_24803_24885 = state_24795__$1;
(statearr_24803_24885[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (1))){
var state_24795__$1 = state_24795;
var statearr_24804_24886 = state_24795__$1;
(statearr_24804_24886[(2)] = null);

(statearr_24804_24886[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (24))){
var inst_24694 = (state_24795[(7)]);
var inst_24713 = (state_24795[(2)]);
var inst_24714 = cljs.core.next(inst_24694);
var inst_24672 = inst_24714;
var inst_24673 = null;
var inst_24674 = (0);
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24805 = state_24795;
(statearr_24805[(13)] = inst_24713);

(statearr_24805[(14)] = inst_24672);

(statearr_24805[(15)] = inst_24675);

(statearr_24805[(16)] = inst_24674);

(statearr_24805[(17)] = inst_24673);

return statearr_24805;
})();
var statearr_24806_24887 = state_24795__$1;
(statearr_24806_24887[(2)] = null);

(statearr_24806_24887[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (39))){
var state_24795__$1 = state_24795;
var statearr_24810_24888 = state_24795__$1;
(statearr_24810_24888[(2)] = null);

(statearr_24810_24888[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (4))){
var inst_24663 = (state_24795[(9)]);
var inst_24663__$1 = (state_24795[(2)]);
var inst_24664 = (inst_24663__$1 == null);
var state_24795__$1 = (function (){var statearr_24811 = state_24795;
(statearr_24811[(9)] = inst_24663__$1);

return statearr_24811;
})();
if(cljs.core.truth_(inst_24664)){
var statearr_24812_24889 = state_24795__$1;
(statearr_24812_24889[(1)] = (5));

} else {
var statearr_24813_24890 = state_24795__$1;
(statearr_24813_24890[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (15))){
var inst_24672 = (state_24795[(14)]);
var inst_24675 = (state_24795[(15)]);
var inst_24674 = (state_24795[(16)]);
var inst_24673 = (state_24795[(17)]);
var inst_24690 = (state_24795[(2)]);
var inst_24691 = (inst_24675 + (1));
var tmp24807 = inst_24672;
var tmp24808 = inst_24674;
var tmp24809 = inst_24673;
var inst_24672__$1 = tmp24807;
var inst_24673__$1 = tmp24809;
var inst_24674__$1 = tmp24808;
var inst_24675__$1 = inst_24691;
var state_24795__$1 = (function (){var statearr_24814 = state_24795;
(statearr_24814[(14)] = inst_24672__$1);

(statearr_24814[(15)] = inst_24675__$1);

(statearr_24814[(18)] = inst_24690);

(statearr_24814[(16)] = inst_24674__$1);

(statearr_24814[(17)] = inst_24673__$1);

return statearr_24814;
})();
var statearr_24815_24891 = state_24795__$1;
(statearr_24815_24891[(2)] = null);

(statearr_24815_24891[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (21))){
var inst_24717 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24819_24892 = state_24795__$1;
(statearr_24819_24892[(2)] = inst_24717);

(statearr_24819_24892[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (31))){
var inst_24743 = (state_24795[(11)]);
var inst_24747 = done(null);
var inst_24748 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24743);
var state_24795__$1 = (function (){var statearr_24820 = state_24795;
(statearr_24820[(19)] = inst_24747);

return statearr_24820;
})();
var statearr_24821_24893 = state_24795__$1;
(statearr_24821_24893[(2)] = inst_24748);

(statearr_24821_24893[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (32))){
var inst_24738 = (state_24795[(10)]);
var inst_24735 = (state_24795[(20)]);
var inst_24737 = (state_24795[(21)]);
var inst_24736 = (state_24795[(12)]);
var inst_24750 = (state_24795[(2)]);
var inst_24751 = (inst_24738 + (1));
var tmp24816 = inst_24735;
var tmp24817 = inst_24737;
var tmp24818 = inst_24736;
var inst_24735__$1 = tmp24816;
var inst_24736__$1 = tmp24818;
var inst_24737__$1 = tmp24817;
var inst_24738__$1 = inst_24751;
var state_24795__$1 = (function (){var statearr_24822 = state_24795;
(statearr_24822[(10)] = inst_24738__$1);

(statearr_24822[(22)] = inst_24750);

(statearr_24822[(20)] = inst_24735__$1);

(statearr_24822[(21)] = inst_24737__$1);

(statearr_24822[(12)] = inst_24736__$1);

return statearr_24822;
})();
var statearr_24823_24894 = state_24795__$1;
(statearr_24823_24894[(2)] = null);

(statearr_24823_24894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (40))){
var inst_24763 = (state_24795[(23)]);
var inst_24767 = done(null);
var inst_24768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24763);
var state_24795__$1 = (function (){var statearr_24824 = state_24795;
(statearr_24824[(24)] = inst_24767);

return statearr_24824;
})();
var statearr_24825_24895 = state_24795__$1;
(statearr_24825_24895[(2)] = inst_24768);

(statearr_24825_24895[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (33))){
var inst_24754 = (state_24795[(25)]);
var inst_24756 = cljs.core.chunked_seq_QMARK_(inst_24754);
var state_24795__$1 = state_24795;
if(inst_24756){
var statearr_24826_24896 = state_24795__$1;
(statearr_24826_24896[(1)] = (36));

} else {
var statearr_24827_24897 = state_24795__$1;
(statearr_24827_24897[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (13))){
var inst_24684 = (state_24795[(26)]);
var inst_24687 = cljs.core.async.close_BANG_(inst_24684);
var state_24795__$1 = state_24795;
var statearr_24828_24898 = state_24795__$1;
(statearr_24828_24898[(2)] = inst_24687);

(statearr_24828_24898[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (22))){
var inst_24707 = (state_24795[(8)]);
var inst_24710 = cljs.core.async.close_BANG_(inst_24707);
var state_24795__$1 = state_24795;
var statearr_24829_24899 = state_24795__$1;
(statearr_24829_24899[(2)] = inst_24710);

(statearr_24829_24899[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (36))){
var inst_24754 = (state_24795[(25)]);
var inst_24758 = cljs.core.chunk_first(inst_24754);
var inst_24759 = cljs.core.chunk_rest(inst_24754);
var inst_24760 = cljs.core.count(inst_24758);
var inst_24735 = inst_24759;
var inst_24736 = inst_24758;
var inst_24737 = inst_24760;
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24830 = state_24795;
(statearr_24830[(10)] = inst_24738);

(statearr_24830[(20)] = inst_24735);

(statearr_24830[(21)] = inst_24737);

(statearr_24830[(12)] = inst_24736);

return statearr_24830;
})();
var statearr_24831_24900 = state_24795__$1;
(statearr_24831_24900[(2)] = null);

(statearr_24831_24900[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (41))){
var inst_24754 = (state_24795[(25)]);
var inst_24770 = (state_24795[(2)]);
var inst_24771 = cljs.core.next(inst_24754);
var inst_24735 = inst_24771;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24832 = state_24795;
(statearr_24832[(10)] = inst_24738);

(statearr_24832[(20)] = inst_24735);

(statearr_24832[(21)] = inst_24737);

(statearr_24832[(12)] = inst_24736);

(statearr_24832[(27)] = inst_24770);

return statearr_24832;
})();
var statearr_24833_24901 = state_24795__$1;
(statearr_24833_24901[(2)] = null);

(statearr_24833_24901[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (43))){
var state_24795__$1 = state_24795;
var statearr_24834_24902 = state_24795__$1;
(statearr_24834_24902[(2)] = null);

(statearr_24834_24902[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (29))){
var inst_24779 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24835_24903 = state_24795__$1;
(statearr_24835_24903[(2)] = inst_24779);

(statearr_24835_24903[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (44))){
var inst_24788 = (state_24795[(2)]);
var state_24795__$1 = (function (){var statearr_24836 = state_24795;
(statearr_24836[(28)] = inst_24788);

return statearr_24836;
})();
var statearr_24837_24904 = state_24795__$1;
(statearr_24837_24904[(2)] = null);

(statearr_24837_24904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (6))){
var inst_24727 = (state_24795[(29)]);
var inst_24726 = cljs.core.deref(cs);
var inst_24727__$1 = cljs.core.keys(inst_24726);
var inst_24728 = cljs.core.count(inst_24727__$1);
var inst_24729 = cljs.core.reset_BANG_(dctr,inst_24728);
var inst_24734 = cljs.core.seq(inst_24727__$1);
var inst_24735 = inst_24734;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24795__$1 = (function (){var statearr_24838 = state_24795;
(statearr_24838[(10)] = inst_24738);

(statearr_24838[(20)] = inst_24735);

(statearr_24838[(21)] = inst_24737);

(statearr_24838[(12)] = inst_24736);

(statearr_24838[(29)] = inst_24727__$1);

(statearr_24838[(30)] = inst_24729);

return statearr_24838;
})();
var statearr_24839_24905 = state_24795__$1;
(statearr_24839_24905[(2)] = null);

(statearr_24839_24905[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (28))){
var inst_24735 = (state_24795[(20)]);
var inst_24754 = (state_24795[(25)]);
var inst_24754__$1 = cljs.core.seq(inst_24735);
var state_24795__$1 = (function (){var statearr_24840 = state_24795;
(statearr_24840[(25)] = inst_24754__$1);

return statearr_24840;
})();
if(inst_24754__$1){
var statearr_24841_24906 = state_24795__$1;
(statearr_24841_24906[(1)] = (33));

} else {
var statearr_24842_24907 = state_24795__$1;
(statearr_24842_24907[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (25))){
var inst_24738 = (state_24795[(10)]);
var inst_24737 = (state_24795[(21)]);
var inst_24740 = (inst_24738 < inst_24737);
var inst_24741 = inst_24740;
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24741)){
var statearr_24843_24908 = state_24795__$1;
(statearr_24843_24908[(1)] = (27));

} else {
var statearr_24844_24909 = state_24795__$1;
(statearr_24844_24909[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (34))){
var state_24795__$1 = state_24795;
var statearr_24845_24910 = state_24795__$1;
(statearr_24845_24910[(2)] = null);

(statearr_24845_24910[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (17))){
var state_24795__$1 = state_24795;
var statearr_24846_24911 = state_24795__$1;
(statearr_24846_24911[(2)] = null);

(statearr_24846_24911[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (3))){
var inst_24793 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24795__$1,inst_24793);
} else {
if((state_val_24796 === (12))){
var inst_24722 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24847_24912 = state_24795__$1;
(statearr_24847_24912[(2)] = inst_24722);

(statearr_24847_24912[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (2))){
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24795__$1,(4),ch);
} else {
if((state_val_24796 === (23))){
var state_24795__$1 = state_24795;
var statearr_24848_24913 = state_24795__$1;
(statearr_24848_24913[(2)] = null);

(statearr_24848_24913[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (35))){
var inst_24777 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24849_24914 = state_24795__$1;
(statearr_24849_24914[(2)] = inst_24777);

(statearr_24849_24914[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (19))){
var inst_24694 = (state_24795[(7)]);
var inst_24698 = cljs.core.chunk_first(inst_24694);
var inst_24699 = cljs.core.chunk_rest(inst_24694);
var inst_24700 = cljs.core.count(inst_24698);
var inst_24672 = inst_24699;
var inst_24673 = inst_24698;
var inst_24674 = inst_24700;
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24850 = state_24795;
(statearr_24850[(14)] = inst_24672);

(statearr_24850[(15)] = inst_24675);

(statearr_24850[(16)] = inst_24674);

(statearr_24850[(17)] = inst_24673);

return statearr_24850;
})();
var statearr_24851_24915 = state_24795__$1;
(statearr_24851_24915[(2)] = null);

(statearr_24851_24915[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (11))){
var inst_24672 = (state_24795[(14)]);
var inst_24694 = (state_24795[(7)]);
var inst_24694__$1 = cljs.core.seq(inst_24672);
var state_24795__$1 = (function (){var statearr_24852 = state_24795;
(statearr_24852[(7)] = inst_24694__$1);

return statearr_24852;
})();
if(inst_24694__$1){
var statearr_24853_24916 = state_24795__$1;
(statearr_24853_24916[(1)] = (16));

} else {
var statearr_24854_24917 = state_24795__$1;
(statearr_24854_24917[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (9))){
var inst_24724 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24855_24918 = state_24795__$1;
(statearr_24855_24918[(2)] = inst_24724);

(statearr_24855_24918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (5))){
var inst_24670 = cljs.core.deref(cs);
var inst_24671 = cljs.core.seq(inst_24670);
var inst_24672 = inst_24671;
var inst_24673 = null;
var inst_24674 = (0);
var inst_24675 = (0);
var state_24795__$1 = (function (){var statearr_24856 = state_24795;
(statearr_24856[(14)] = inst_24672);

(statearr_24856[(15)] = inst_24675);

(statearr_24856[(16)] = inst_24674);

(statearr_24856[(17)] = inst_24673);

return statearr_24856;
})();
var statearr_24857_24919 = state_24795__$1;
(statearr_24857_24919[(2)] = null);

(statearr_24857_24919[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (14))){
var state_24795__$1 = state_24795;
var statearr_24858_24920 = state_24795__$1;
(statearr_24858_24920[(2)] = null);

(statearr_24858_24920[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (45))){
var inst_24785 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24859_24921 = state_24795__$1;
(statearr_24859_24921[(2)] = inst_24785);

(statearr_24859_24921[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (26))){
var inst_24727 = (state_24795[(29)]);
var inst_24781 = (state_24795[(2)]);
var inst_24782 = cljs.core.seq(inst_24727);
var state_24795__$1 = (function (){var statearr_24860 = state_24795;
(statearr_24860[(31)] = inst_24781);

return statearr_24860;
})();
if(inst_24782){
var statearr_24861_24922 = state_24795__$1;
(statearr_24861_24922[(1)] = (42));

} else {
var statearr_24862_24923 = state_24795__$1;
(statearr_24862_24923[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (16))){
var inst_24694 = (state_24795[(7)]);
var inst_24696 = cljs.core.chunked_seq_QMARK_(inst_24694);
var state_24795__$1 = state_24795;
if(inst_24696){
var statearr_24863_24924 = state_24795__$1;
(statearr_24863_24924[(1)] = (19));

} else {
var statearr_24864_24925 = state_24795__$1;
(statearr_24864_24925[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (38))){
var inst_24774 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24865_24926 = state_24795__$1;
(statearr_24865_24926[(2)] = inst_24774);

(statearr_24865_24926[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (30))){
var state_24795__$1 = state_24795;
var statearr_24866_24927 = state_24795__$1;
(statearr_24866_24927[(2)] = null);

(statearr_24866_24927[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (10))){
var inst_24675 = (state_24795[(15)]);
var inst_24673 = (state_24795[(17)]);
var inst_24683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24673,inst_24675);
var inst_24684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24683,(0),null);
var inst_24685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24683,(1),null);
var state_24795__$1 = (function (){var statearr_24867 = state_24795;
(statearr_24867[(26)] = inst_24684);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24685)){
var statearr_24868_24928 = state_24795__$1;
(statearr_24868_24928[(1)] = (13));

} else {
var statearr_24869_24929 = state_24795__$1;
(statearr_24869_24929[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (18))){
var inst_24720 = (state_24795[(2)]);
var state_24795__$1 = state_24795;
var statearr_24870_24930 = state_24795__$1;
(statearr_24870_24930[(2)] = inst_24720);

(statearr_24870_24930[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (42))){
var state_24795__$1 = state_24795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24795__$1,(45),dchan);
} else {
if((state_val_24796 === (37))){
var inst_24663 = (state_24795[(9)]);
var inst_24763 = (state_24795[(23)]);
var inst_24754 = (state_24795[(25)]);
var inst_24763__$1 = cljs.core.first(inst_24754);
var inst_24764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24763__$1,inst_24663,done);
var state_24795__$1 = (function (){var statearr_24871 = state_24795;
(statearr_24871[(23)] = inst_24763__$1);

return statearr_24871;
})();
if(cljs.core.truth_(inst_24764)){
var statearr_24872_24931 = state_24795__$1;
(statearr_24872_24931[(1)] = (39));

} else {
var statearr_24873_24932 = state_24795__$1;
(statearr_24873_24932[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24796 === (8))){
var inst_24675 = (state_24795[(15)]);
var inst_24674 = (state_24795[(16)]);
var inst_24677 = (inst_24675 < inst_24674);
var inst_24678 = inst_24677;
var state_24795__$1 = state_24795;
if(cljs.core.truth_(inst_24678)){
var statearr_24874_24933 = state_24795__$1;
(statearr_24874_24933[(1)] = (10));

} else {
var statearr_24875_24934 = state_24795__$1;
(statearr_24875_24934[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21984__auto__ = null;
var cljs$core$async$mult_$_state_machine__21984__auto____0 = (function (){
var statearr_24876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24876[(0)] = cljs$core$async$mult_$_state_machine__21984__auto__);

(statearr_24876[(1)] = (1));

return statearr_24876;
});
var cljs$core$async$mult_$_state_machine__21984__auto____1 = (function (state_24795){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_24795);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e24877){if((e24877 instanceof Object)){
var ex__21987__auto__ = e24877;
var statearr_24878_24935 = state_24795;
(statearr_24878_24935[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24795);

return cljs.core.cst$kw$recur;
} else {
throw e24877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__24936 = state_24795;
state_24795 = G__24936;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21984__auto__ = function(state_24795){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21984__auto____1.call(this,state_24795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21984__auto____0;
cljs$core$async$mult_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21984__auto____1;
return cljs$core$async$mult_$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_24879 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_24879[(6)] = c__22174__auto___24880);

return statearr_24879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var G__24938 = arguments.length;
switch (G__24938) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_24940 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_24940(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24941 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_24941(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24942 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24942(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24943 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_24943(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24944 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24944(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24955 = arguments.length;
var i__4737__auto___24956 = (0);
while(true){
if((i__4737__auto___24956 < len__4736__auto___24955)){
args__4742__auto__.push((arguments[i__4737__auto___24956]));

var G__24957 = (i__4737__auto___24956 + (1));
i__4737__auto___24956 = G__24957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24949){
var map__24950 = p__24949;
var map__24950__$1 = (((((!((map__24950 == null))))?(((((map__24950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24950):map__24950);
var opts = map__24950__$1;
var statearr_24952_24958 = state;
(statearr_24952_24958[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_24953_24959 = state;
(statearr_24953_24959[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_24954_24960 = state;
(statearr_24954_24960[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24945){
var G__24946 = cljs.core.first(seq24945);
var seq24945__$1 = cljs.core.next(seq24945);
var G__24947 = cljs.core.first(seq24945__$1);
var seq24945__$2 = cljs.core.next(seq24945__$1);
var G__24948 = cljs.core.first(seq24945__$2);
var seq24945__$3 = cljs.core.next(seq24945__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24946,G__24947,G__24948,seq24945__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24961 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24962){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24962 = meta24962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24963,meta24962__$1){
var self__ = this;
var _24963__$1 = this;
return (new cljs.core.async.t_cljs$core$async24961(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24962__$1));
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24963){
var self__ = this;
var _24963__$1 = this;
return self__.meta24962;
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24961.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta24962], null);
}));

(cljs.core.async.t_cljs$core$async24961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24961");

(cljs.core.async.t_cljs$core$async24961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24961.
 */
cljs.core.async.__GT_t_cljs$core$async24961 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24961(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24962){
return (new cljs.core.async.t_cljs$core$async24961(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24962));
});

}

return (new cljs.core.async.t_cljs$core$async24961(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22174__auto___25125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25065){
var state_val_25066 = (state_25065[(1)]);
if((state_val_25066 === (7))){
var inst_24980 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25067_25126 = state_25065__$1;
(statearr_25067_25126[(2)] = inst_24980);

(statearr_25067_25126[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (20))){
var inst_24992 = (state_25065[(7)]);
var state_25065__$1 = state_25065;
var statearr_25068_25127 = state_25065__$1;
(statearr_25068_25127[(2)] = inst_24992);

(statearr_25068_25127[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (27))){
var state_25065__$1 = state_25065;
var statearr_25069_25128 = state_25065__$1;
(statearr_25069_25128[(2)] = null);

(statearr_25069_25128[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (1))){
var inst_24967 = (state_25065[(8)]);
var inst_24967__$1 = calc_state();
var inst_24969 = (inst_24967__$1 == null);
var inst_24970 = cljs.core.not(inst_24969);
var state_25065__$1 = (function (){var statearr_25070 = state_25065;
(statearr_25070[(8)] = inst_24967__$1);

return statearr_25070;
})();
if(inst_24970){
var statearr_25071_25129 = state_25065__$1;
(statearr_25071_25129[(1)] = (2));

} else {
var statearr_25072_25130 = state_25065__$1;
(statearr_25072_25130[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (24))){
var inst_25016 = (state_25065[(9)]);
var inst_25025 = (state_25065[(10)]);
var inst_25039 = (state_25065[(11)]);
var inst_25039__$1 = (inst_25016.cljs$core$IFn$_invoke$arity$1 ? inst_25016.cljs$core$IFn$_invoke$arity$1(inst_25025) : inst_25016.call(null,inst_25025));
var state_25065__$1 = (function (){var statearr_25073 = state_25065;
(statearr_25073[(11)] = inst_25039__$1);

return statearr_25073;
})();
if(cljs.core.truth_(inst_25039__$1)){
var statearr_25074_25131 = state_25065__$1;
(statearr_25074_25131[(1)] = (29));

} else {
var statearr_25075_25132 = state_25065__$1;
(statearr_25075_25132[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (4))){
var inst_24983 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_24983)){
var statearr_25076_25133 = state_25065__$1;
(statearr_25076_25133[(1)] = (8));

} else {
var statearr_25077_25134 = state_25065__$1;
(statearr_25077_25134[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (15))){
var inst_25010 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25010)){
var statearr_25078_25135 = state_25065__$1;
(statearr_25078_25135[(1)] = (19));

} else {
var statearr_25079_25136 = state_25065__$1;
(statearr_25079_25136[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (21))){
var inst_25015 = (state_25065[(12)]);
var inst_25015__$1 = (state_25065[(2)]);
var inst_25016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25015__$1,cljs.core.cst$kw$solos);
var inst_25017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25015__$1,cljs.core.cst$kw$mutes);
var inst_25018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25015__$1,cljs.core.cst$kw$reads);
var state_25065__$1 = (function (){var statearr_25080 = state_25065;
(statearr_25080[(9)] = inst_25016);

(statearr_25080[(13)] = inst_25017);

(statearr_25080[(12)] = inst_25015__$1);

return statearr_25080;
})();
return cljs.core.async.ioc_alts_BANG_(state_25065__$1,(22),inst_25018);
} else {
if((state_val_25066 === (31))){
var inst_25047 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25047)){
var statearr_25081_25137 = state_25065__$1;
(statearr_25081_25137[(1)] = (32));

} else {
var statearr_25082_25138 = state_25065__$1;
(statearr_25082_25138[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (32))){
var inst_25024 = (state_25065[(14)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25065__$1,(35),out,inst_25024);
} else {
if((state_val_25066 === (33))){
var inst_25015 = (state_25065[(12)]);
var inst_24992 = inst_25015;
var state_25065__$1 = (function (){var statearr_25083 = state_25065;
(statearr_25083[(7)] = inst_24992);

return statearr_25083;
})();
var statearr_25084_25139 = state_25065__$1;
(statearr_25084_25139[(2)] = null);

(statearr_25084_25139[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (13))){
var inst_24992 = (state_25065[(7)]);
var inst_24999 = inst_24992.cljs$lang$protocol_mask$partition0$;
var inst_25000 = (inst_24999 & (64));
var inst_25001 = inst_24992.cljs$core$ISeq$;
var inst_25002 = (cljs.core.PROTOCOL_SENTINEL === inst_25001);
var inst_25003 = ((inst_25000) || (inst_25002));
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25003)){
var statearr_25085_25140 = state_25065__$1;
(statearr_25085_25140[(1)] = (16));

} else {
var statearr_25086_25141 = state_25065__$1;
(statearr_25086_25141[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (22))){
var inst_25024 = (state_25065[(14)]);
var inst_25025 = (state_25065[(10)]);
var inst_25023 = (state_25065[(2)]);
var inst_25024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25023,(0),null);
var inst_25025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25023,(1),null);
var inst_25026 = (inst_25024__$1 == null);
var inst_25027 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25025__$1,change);
var inst_25028 = ((inst_25026) || (inst_25027));
var state_25065__$1 = (function (){var statearr_25087 = state_25065;
(statearr_25087[(14)] = inst_25024__$1);

(statearr_25087[(10)] = inst_25025__$1);

return statearr_25087;
})();
if(cljs.core.truth_(inst_25028)){
var statearr_25088_25142 = state_25065__$1;
(statearr_25088_25142[(1)] = (23));

} else {
var statearr_25089_25143 = state_25065__$1;
(statearr_25089_25143[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (36))){
var inst_25015 = (state_25065[(12)]);
var inst_24992 = inst_25015;
var state_25065__$1 = (function (){var statearr_25090 = state_25065;
(statearr_25090[(7)] = inst_24992);

return statearr_25090;
})();
var statearr_25091_25144 = state_25065__$1;
(statearr_25091_25144[(2)] = null);

(statearr_25091_25144[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (29))){
var inst_25039 = (state_25065[(11)]);
var state_25065__$1 = state_25065;
var statearr_25092_25145 = state_25065__$1;
(statearr_25092_25145[(2)] = inst_25039);

(statearr_25092_25145[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (6))){
var state_25065__$1 = state_25065;
var statearr_25093_25146 = state_25065__$1;
(statearr_25093_25146[(2)] = false);

(statearr_25093_25146[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (28))){
var inst_25035 = (state_25065[(2)]);
var inst_25036 = calc_state();
var inst_24992 = inst_25036;
var state_25065__$1 = (function (){var statearr_25094 = state_25065;
(statearr_25094[(7)] = inst_24992);

(statearr_25094[(15)] = inst_25035);

return statearr_25094;
})();
var statearr_25095_25147 = state_25065__$1;
(statearr_25095_25147[(2)] = null);

(statearr_25095_25147[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (25))){
var inst_25061 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25096_25148 = state_25065__$1;
(statearr_25096_25148[(2)] = inst_25061);

(statearr_25096_25148[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (34))){
var inst_25059 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25097_25149 = state_25065__$1;
(statearr_25097_25149[(2)] = inst_25059);

(statearr_25097_25149[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (17))){
var state_25065__$1 = state_25065;
var statearr_25098_25150 = state_25065__$1;
(statearr_25098_25150[(2)] = false);

(statearr_25098_25150[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (3))){
var state_25065__$1 = state_25065;
var statearr_25099_25151 = state_25065__$1;
(statearr_25099_25151[(2)] = false);

(statearr_25099_25151[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (12))){
var inst_25063 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25065__$1,inst_25063);
} else {
if((state_val_25066 === (2))){
var inst_24967 = (state_25065[(8)]);
var inst_24972 = inst_24967.cljs$lang$protocol_mask$partition0$;
var inst_24973 = (inst_24972 & (64));
var inst_24974 = inst_24967.cljs$core$ISeq$;
var inst_24975 = (cljs.core.PROTOCOL_SENTINEL === inst_24974);
var inst_24976 = ((inst_24973) || (inst_24975));
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_24976)){
var statearr_25100_25152 = state_25065__$1;
(statearr_25100_25152[(1)] = (5));

} else {
var statearr_25101_25153 = state_25065__$1;
(statearr_25101_25153[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (23))){
var inst_25024 = (state_25065[(14)]);
var inst_25030 = (inst_25024 == null);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25030)){
var statearr_25102_25154 = state_25065__$1;
(statearr_25102_25154[(1)] = (26));

} else {
var statearr_25103_25155 = state_25065__$1;
(statearr_25103_25155[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (35))){
var inst_25050 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
if(cljs.core.truth_(inst_25050)){
var statearr_25104_25156 = state_25065__$1;
(statearr_25104_25156[(1)] = (36));

} else {
var statearr_25105_25157 = state_25065__$1;
(statearr_25105_25157[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (19))){
var inst_24992 = (state_25065[(7)]);
var inst_25012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24992);
var state_25065__$1 = state_25065;
var statearr_25106_25158 = state_25065__$1;
(statearr_25106_25158[(2)] = inst_25012);

(statearr_25106_25158[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (11))){
var inst_24992 = (state_25065[(7)]);
var inst_24996 = (inst_24992 == null);
var inst_24997 = cljs.core.not(inst_24996);
var state_25065__$1 = state_25065;
if(inst_24997){
var statearr_25107_25159 = state_25065__$1;
(statearr_25107_25159[(1)] = (13));

} else {
var statearr_25108_25160 = state_25065__$1;
(statearr_25108_25160[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (9))){
var inst_24967 = (state_25065[(8)]);
var state_25065__$1 = state_25065;
var statearr_25109_25161 = state_25065__$1;
(statearr_25109_25161[(2)] = inst_24967);

(statearr_25109_25161[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (5))){
var state_25065__$1 = state_25065;
var statearr_25110_25162 = state_25065__$1;
(statearr_25110_25162[(2)] = true);

(statearr_25110_25162[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (14))){
var state_25065__$1 = state_25065;
var statearr_25111_25163 = state_25065__$1;
(statearr_25111_25163[(2)] = false);

(statearr_25111_25163[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (26))){
var inst_25025 = (state_25065[(10)]);
var inst_25032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25025);
var state_25065__$1 = state_25065;
var statearr_25112_25164 = state_25065__$1;
(statearr_25112_25164[(2)] = inst_25032);

(statearr_25112_25164[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (16))){
var state_25065__$1 = state_25065;
var statearr_25113_25165 = state_25065__$1;
(statearr_25113_25165[(2)] = true);

(statearr_25113_25165[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (38))){
var inst_25055 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25114_25166 = state_25065__$1;
(statearr_25114_25166[(2)] = inst_25055);

(statearr_25114_25166[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (30))){
var inst_25016 = (state_25065[(9)]);
var inst_25025 = (state_25065[(10)]);
var inst_25017 = (state_25065[(13)]);
var inst_25042 = cljs.core.empty_QMARK_(inst_25016);
var inst_25043 = (inst_25017.cljs$core$IFn$_invoke$arity$1 ? inst_25017.cljs$core$IFn$_invoke$arity$1(inst_25025) : inst_25017.call(null,inst_25025));
var inst_25044 = cljs.core.not(inst_25043);
var inst_25045 = ((inst_25042) && (inst_25044));
var state_25065__$1 = state_25065;
var statearr_25115_25167 = state_25065__$1;
(statearr_25115_25167[(2)] = inst_25045);

(statearr_25115_25167[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (10))){
var inst_24967 = (state_25065[(8)]);
var inst_24988 = (state_25065[(2)]);
var inst_24989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24988,cljs.core.cst$kw$solos);
var inst_24990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24988,cljs.core.cst$kw$mutes);
var inst_24991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24988,cljs.core.cst$kw$reads);
var inst_24992 = inst_24967;
var state_25065__$1 = (function (){var statearr_25116 = state_25065;
(statearr_25116[(16)] = inst_24990);

(statearr_25116[(7)] = inst_24992);

(statearr_25116[(17)] = inst_24991);

(statearr_25116[(18)] = inst_24989);

return statearr_25116;
})();
var statearr_25117_25168 = state_25065__$1;
(statearr_25117_25168[(2)] = null);

(statearr_25117_25168[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (18))){
var inst_25007 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25118_25169 = state_25065__$1;
(statearr_25118_25169[(2)] = inst_25007);

(statearr_25118_25169[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (37))){
var state_25065__$1 = state_25065;
var statearr_25119_25170 = state_25065__$1;
(statearr_25119_25170[(2)] = null);

(statearr_25119_25170[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25066 === (8))){
var inst_24967 = (state_25065[(8)]);
var inst_24985 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24967);
var state_25065__$1 = state_25065;
var statearr_25120_25171 = state_25065__$1;
(statearr_25120_25171[(2)] = inst_24985);

(statearr_25120_25171[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__21984__auto__ = null;
var cljs$core$async$mix_$_state_machine__21984__auto____0 = (function (){
var statearr_25121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25121[(0)] = cljs$core$async$mix_$_state_machine__21984__auto__);

(statearr_25121[(1)] = (1));

return statearr_25121;
});
var cljs$core$async$mix_$_state_machine__21984__auto____1 = (function (state_25065){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25065);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25122){if((e25122 instanceof Object)){
var ex__21987__auto__ = e25122;
var statearr_25123_25172 = state_25065;
(statearr_25123_25172[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25065);

return cljs.core.cst$kw$recur;
} else {
throw e25122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25173 = state_25065;
state_25065 = G__25173;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21984__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21984__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21984__auto____0;
cljs$core$async$mix_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21984__auto____1;
return cljs$core$async$mix_$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25124 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25124[(6)] = c__22174__auto___25125);

return statearr_25124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25176 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25176(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25177 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25177(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25178 = (function() {
var G__25179 = null;
var G__25179__1 = (function (p){
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
var G__25179__2 = (function (p,v){
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
G__25179 = function(p,v){
switch(arguments.length){
case 1:
return G__25179__1.call(this,p);
case 2:
return G__25179__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25179.cljs$core$IFn$_invoke$arity$1 = G__25179__1;
G__25179.cljs$core$IFn$_invoke$arity$2 = G__25179__2;
return G__25179;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25175 = arguments.length;
switch (G__25175) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25178.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25178.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__25183 = arguments.length;
switch (G__25183) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__25181_SHARP_){
if(cljs.core.truth_((p1__25181_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25181_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25181_SHARP_.call(null,topic)))){
return p1__25181_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25181_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25184 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25185){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25185 = meta25185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25186,meta25185__$1){
var self__ = this;
var _25186__$1 = this;
return (new cljs.core.async.t_cljs$core$async25184(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25185__$1));
}));

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25186){
var self__ = this;
var _25186__$1 = this;
return self__.meta25185;
}));

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25185], null);
}));

(cljs.core.async.t_cljs$core$async25184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25184");

(cljs.core.async.t_cljs$core$async25184.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25184.
 */
cljs.core.async.__GT_t_cljs$core$async25184 = (function cljs$core$async$__GT_t_cljs$core$async25184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25185){
return (new cljs.core.async.t_cljs$core$async25184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25185));
});

}

return (new cljs.core.async.t_cljs$core$async25184(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22174__auto___25304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25258){
var state_val_25259 = (state_25258[(1)]);
if((state_val_25259 === (7))){
var inst_25254 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25260_25305 = state_25258__$1;
(statearr_25260_25305[(2)] = inst_25254);

(statearr_25260_25305[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (20))){
var state_25258__$1 = state_25258;
var statearr_25261_25306 = state_25258__$1;
(statearr_25261_25306[(2)] = null);

(statearr_25261_25306[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (1))){
var state_25258__$1 = state_25258;
var statearr_25262_25307 = state_25258__$1;
(statearr_25262_25307[(2)] = null);

(statearr_25262_25307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (24))){
var inst_25237 = (state_25258[(7)]);
var inst_25246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25237);
var state_25258__$1 = state_25258;
var statearr_25263_25308 = state_25258__$1;
(statearr_25263_25308[(2)] = inst_25246);

(statearr_25263_25308[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (4))){
var inst_25189 = (state_25258[(8)]);
var inst_25189__$1 = (state_25258[(2)]);
var inst_25190 = (inst_25189__$1 == null);
var state_25258__$1 = (function (){var statearr_25264 = state_25258;
(statearr_25264[(8)] = inst_25189__$1);

return statearr_25264;
})();
if(cljs.core.truth_(inst_25190)){
var statearr_25265_25309 = state_25258__$1;
(statearr_25265_25309[(1)] = (5));

} else {
var statearr_25266_25310 = state_25258__$1;
(statearr_25266_25310[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (15))){
var inst_25231 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25267_25311 = state_25258__$1;
(statearr_25267_25311[(2)] = inst_25231);

(statearr_25267_25311[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (21))){
var inst_25251 = (state_25258[(2)]);
var state_25258__$1 = (function (){var statearr_25268 = state_25258;
(statearr_25268[(9)] = inst_25251);

return statearr_25268;
})();
var statearr_25269_25312 = state_25258__$1;
(statearr_25269_25312[(2)] = null);

(statearr_25269_25312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (13))){
var inst_25213 = (state_25258[(10)]);
var inst_25215 = cljs.core.chunked_seq_QMARK_(inst_25213);
var state_25258__$1 = state_25258;
if(inst_25215){
var statearr_25270_25313 = state_25258__$1;
(statearr_25270_25313[(1)] = (16));

} else {
var statearr_25271_25314 = state_25258__$1;
(statearr_25271_25314[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (22))){
var inst_25243 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25243)){
var statearr_25272_25315 = state_25258__$1;
(statearr_25272_25315[(1)] = (23));

} else {
var statearr_25273_25316 = state_25258__$1;
(statearr_25273_25316[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (6))){
var inst_25237 = (state_25258[(7)]);
var inst_25189 = (state_25258[(8)]);
var inst_25239 = (state_25258[(11)]);
var inst_25237__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25189) : topic_fn.call(null,inst_25189));
var inst_25238 = cljs.core.deref(mults);
var inst_25239__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25238,inst_25237__$1);
var state_25258__$1 = (function (){var statearr_25274 = state_25258;
(statearr_25274[(7)] = inst_25237__$1);

(statearr_25274[(11)] = inst_25239__$1);

return statearr_25274;
})();
if(cljs.core.truth_(inst_25239__$1)){
var statearr_25275_25317 = state_25258__$1;
(statearr_25275_25317[(1)] = (19));

} else {
var statearr_25276_25318 = state_25258__$1;
(statearr_25276_25318[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (25))){
var inst_25248 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25277_25319 = state_25258__$1;
(statearr_25277_25319[(2)] = inst_25248);

(statearr_25277_25319[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (17))){
var inst_25213 = (state_25258[(10)]);
var inst_25222 = cljs.core.first(inst_25213);
var inst_25223 = cljs.core.async.muxch_STAR_(inst_25222);
var inst_25224 = cljs.core.async.close_BANG_(inst_25223);
var inst_25225 = cljs.core.next(inst_25213);
var inst_25199 = inst_25225;
var inst_25200 = null;
var inst_25201 = (0);
var inst_25202 = (0);
var state_25258__$1 = (function (){var statearr_25278 = state_25258;
(statearr_25278[(12)] = inst_25199);

(statearr_25278[(13)] = inst_25201);

(statearr_25278[(14)] = inst_25224);

(statearr_25278[(15)] = inst_25202);

(statearr_25278[(16)] = inst_25200);

return statearr_25278;
})();
var statearr_25279_25320 = state_25258__$1;
(statearr_25279_25320[(2)] = null);

(statearr_25279_25320[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (3))){
var inst_25256 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25258__$1,inst_25256);
} else {
if((state_val_25259 === (12))){
var inst_25233 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25280_25321 = state_25258__$1;
(statearr_25280_25321[(2)] = inst_25233);

(statearr_25280_25321[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (2))){
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25258__$1,(4),ch);
} else {
if((state_val_25259 === (23))){
var state_25258__$1 = state_25258;
var statearr_25281_25322 = state_25258__$1;
(statearr_25281_25322[(2)] = null);

(statearr_25281_25322[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (19))){
var inst_25189 = (state_25258[(8)]);
var inst_25239 = (state_25258[(11)]);
var inst_25241 = cljs.core.async.muxch_STAR_(inst_25239);
var state_25258__$1 = state_25258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25258__$1,(22),inst_25241,inst_25189);
} else {
if((state_val_25259 === (11))){
var inst_25199 = (state_25258[(12)]);
var inst_25213 = (state_25258[(10)]);
var inst_25213__$1 = cljs.core.seq(inst_25199);
var state_25258__$1 = (function (){var statearr_25282 = state_25258;
(statearr_25282[(10)] = inst_25213__$1);

return statearr_25282;
})();
if(inst_25213__$1){
var statearr_25283_25323 = state_25258__$1;
(statearr_25283_25323[(1)] = (13));

} else {
var statearr_25284_25324 = state_25258__$1;
(statearr_25284_25324[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (9))){
var inst_25235 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25285_25325 = state_25258__$1;
(statearr_25285_25325[(2)] = inst_25235);

(statearr_25285_25325[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (5))){
var inst_25196 = cljs.core.deref(mults);
var inst_25197 = cljs.core.vals(inst_25196);
var inst_25198 = cljs.core.seq(inst_25197);
var inst_25199 = inst_25198;
var inst_25200 = null;
var inst_25201 = (0);
var inst_25202 = (0);
var state_25258__$1 = (function (){var statearr_25286 = state_25258;
(statearr_25286[(12)] = inst_25199);

(statearr_25286[(13)] = inst_25201);

(statearr_25286[(15)] = inst_25202);

(statearr_25286[(16)] = inst_25200);

return statearr_25286;
})();
var statearr_25287_25326 = state_25258__$1;
(statearr_25287_25326[(2)] = null);

(statearr_25287_25326[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (14))){
var state_25258__$1 = state_25258;
var statearr_25291_25327 = state_25258__$1;
(statearr_25291_25327[(2)] = null);

(statearr_25291_25327[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (16))){
var inst_25213 = (state_25258[(10)]);
var inst_25217 = cljs.core.chunk_first(inst_25213);
var inst_25218 = cljs.core.chunk_rest(inst_25213);
var inst_25219 = cljs.core.count(inst_25217);
var inst_25199 = inst_25218;
var inst_25200 = inst_25217;
var inst_25201 = inst_25219;
var inst_25202 = (0);
var state_25258__$1 = (function (){var statearr_25292 = state_25258;
(statearr_25292[(12)] = inst_25199);

(statearr_25292[(13)] = inst_25201);

(statearr_25292[(15)] = inst_25202);

(statearr_25292[(16)] = inst_25200);

return statearr_25292;
})();
var statearr_25293_25328 = state_25258__$1;
(statearr_25293_25328[(2)] = null);

(statearr_25293_25328[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (10))){
var inst_25199 = (state_25258[(12)]);
var inst_25201 = (state_25258[(13)]);
var inst_25202 = (state_25258[(15)]);
var inst_25200 = (state_25258[(16)]);
var inst_25207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25200,inst_25202);
var inst_25208 = cljs.core.async.muxch_STAR_(inst_25207);
var inst_25209 = cljs.core.async.close_BANG_(inst_25208);
var inst_25210 = (inst_25202 + (1));
var tmp25288 = inst_25199;
var tmp25289 = inst_25201;
var tmp25290 = inst_25200;
var inst_25199__$1 = tmp25288;
var inst_25200__$1 = tmp25290;
var inst_25201__$1 = tmp25289;
var inst_25202__$1 = inst_25210;
var state_25258__$1 = (function (){var statearr_25294 = state_25258;
(statearr_25294[(12)] = inst_25199__$1);

(statearr_25294[(13)] = inst_25201__$1);

(statearr_25294[(15)] = inst_25202__$1);

(statearr_25294[(17)] = inst_25209);

(statearr_25294[(16)] = inst_25200__$1);

return statearr_25294;
})();
var statearr_25295_25329 = state_25258__$1;
(statearr_25295_25329[(2)] = null);

(statearr_25295_25329[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (18))){
var inst_25228 = (state_25258[(2)]);
var state_25258__$1 = state_25258;
var statearr_25296_25330 = state_25258__$1;
(statearr_25296_25330[(2)] = inst_25228);

(statearr_25296_25330[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25259 === (8))){
var inst_25201 = (state_25258[(13)]);
var inst_25202 = (state_25258[(15)]);
var inst_25204 = (inst_25202 < inst_25201);
var inst_25205 = inst_25204;
var state_25258__$1 = state_25258;
if(cljs.core.truth_(inst_25205)){
var statearr_25297_25331 = state_25258__$1;
(statearr_25297_25331[(1)] = (10));

} else {
var statearr_25298_25332 = state_25258__$1;
(statearr_25298_25332[(1)] = (11));

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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25258){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25258);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25300){if((e25300 instanceof Object)){
var ex__21987__auto__ = e25300;
var statearr_25301_25333 = state_25258;
(statearr_25301_25333[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25258);

return cljs.core.cst$kw$recur;
} else {
throw e25300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25334 = state_25258;
state_25258 = G__25334;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25302 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25302[(6)] = c__22174__auto___25304);

return statearr_25302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var G__25336 = arguments.length;
switch (G__25336) {
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
var G__25339 = arguments.length;
switch (G__25339) {
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
var G__25342 = arguments.length;
switch (G__25342) {
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
var c__22174__auto___25409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25381){
var state_val_25382 = (state_25381[(1)]);
if((state_val_25382 === (7))){
var state_25381__$1 = state_25381;
var statearr_25383_25410 = state_25381__$1;
(statearr_25383_25410[(2)] = null);

(statearr_25383_25410[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (1))){
var state_25381__$1 = state_25381;
var statearr_25384_25411 = state_25381__$1;
(statearr_25384_25411[(2)] = null);

(statearr_25384_25411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (4))){
var inst_25345 = (state_25381[(7)]);
var inst_25347 = (inst_25345 < cnt);
var state_25381__$1 = state_25381;
if(cljs.core.truth_(inst_25347)){
var statearr_25385_25412 = state_25381__$1;
(statearr_25385_25412[(1)] = (6));

} else {
var statearr_25386_25413 = state_25381__$1;
(statearr_25386_25413[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (15))){
var inst_25377 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25387_25414 = state_25381__$1;
(statearr_25387_25414[(2)] = inst_25377);

(statearr_25387_25414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (13))){
var inst_25370 = cljs.core.async.close_BANG_(out);
var state_25381__$1 = state_25381;
var statearr_25388_25415 = state_25381__$1;
(statearr_25388_25415[(2)] = inst_25370);

(statearr_25388_25415[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (6))){
var state_25381__$1 = state_25381;
var statearr_25389_25416 = state_25381__$1;
(statearr_25389_25416[(2)] = null);

(statearr_25389_25416[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (3))){
var inst_25379 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25381__$1,inst_25379);
} else {
if((state_val_25382 === (12))){
var inst_25367 = (state_25381[(8)]);
var inst_25367__$1 = (state_25381[(2)]);
var inst_25368 = cljs.core.some(cljs.core.nil_QMARK_,inst_25367__$1);
var state_25381__$1 = (function (){var statearr_25390 = state_25381;
(statearr_25390[(8)] = inst_25367__$1);

return statearr_25390;
})();
if(cljs.core.truth_(inst_25368)){
var statearr_25391_25417 = state_25381__$1;
(statearr_25391_25417[(1)] = (13));

} else {
var statearr_25392_25418 = state_25381__$1;
(statearr_25392_25418[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (2))){
var inst_25344 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25345 = (0);
var state_25381__$1 = (function (){var statearr_25393 = state_25381;
(statearr_25393[(9)] = inst_25344);

(statearr_25393[(7)] = inst_25345);

return statearr_25393;
})();
var statearr_25394_25419 = state_25381__$1;
(statearr_25394_25419[(2)] = null);

(statearr_25394_25419[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (11))){
var inst_25345 = (state_25381[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25381,(10),Object,null,(9));
var inst_25354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25345) : chs__$1.call(null,inst_25345));
var inst_25355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25345) : done.call(null,inst_25345));
var inst_25356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25354,inst_25355);
var state_25381__$1 = state_25381;
var statearr_25395_25420 = state_25381__$1;
(statearr_25395_25420[(2)] = inst_25356);


cljs.core.async.impl.ioc_helpers.process_exception(state_25381__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (9))){
var inst_25345 = (state_25381[(7)]);
var inst_25358 = (state_25381[(2)]);
var inst_25359 = (inst_25345 + (1));
var inst_25345__$1 = inst_25359;
var state_25381__$1 = (function (){var statearr_25396 = state_25381;
(statearr_25396[(10)] = inst_25358);

(statearr_25396[(7)] = inst_25345__$1);

return statearr_25396;
})();
var statearr_25397_25421 = state_25381__$1;
(statearr_25397_25421[(2)] = null);

(statearr_25397_25421[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (5))){
var inst_25365 = (state_25381[(2)]);
var state_25381__$1 = (function (){var statearr_25398 = state_25381;
(statearr_25398[(11)] = inst_25365);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25381__$1,(12),dchan);
} else {
if((state_val_25382 === (14))){
var inst_25367 = (state_25381[(8)]);
var inst_25372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25367);
var state_25381__$1 = state_25381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25381__$1,(16),out,inst_25372);
} else {
if((state_val_25382 === (16))){
var inst_25374 = (state_25381[(2)]);
var state_25381__$1 = (function (){var statearr_25399 = state_25381;
(statearr_25399[(12)] = inst_25374);

return statearr_25399;
})();
var statearr_25400_25422 = state_25381__$1;
(statearr_25400_25422[(2)] = null);

(statearr_25400_25422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (10))){
var inst_25349 = (state_25381[(2)]);
var inst_25350 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25381__$1 = (function (){var statearr_25401 = state_25381;
(statearr_25401[(13)] = inst_25349);

return statearr_25401;
})();
var statearr_25402_25423 = state_25381__$1;
(statearr_25402_25423[(2)] = inst_25350);


cljs.core.async.impl.ioc_helpers.process_exception(state_25381__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25382 === (8))){
var inst_25363 = (state_25381[(2)]);
var state_25381__$1 = state_25381;
var statearr_25403_25424 = state_25381__$1;
(statearr_25403_25424[(2)] = inst_25363);

(statearr_25403_25424[(1)] = (5));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25404[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25404[(1)] = (1));

return statearr_25404;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25381){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25381);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25405){if((e25405 instanceof Object)){
var ex__21987__auto__ = e25405;
var statearr_25406_25425 = state_25381;
(statearr_25406_25425[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25381);

return cljs.core.cst$kw$recur;
} else {
throw e25405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25426 = state_25381;
state_25381 = G__25426;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25407 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25407[(6)] = c__22174__auto___25409);

return statearr_25407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var G__25429 = arguments.length;
switch (G__25429) {
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
var c__22174__auto___25483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25461){
var state_val_25462 = (state_25461[(1)]);
if((state_val_25462 === (7))){
var inst_25441 = (state_25461[(7)]);
var inst_25440 = (state_25461[(8)]);
var inst_25440__$1 = (state_25461[(2)]);
var inst_25441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25440__$1,(0),null);
var inst_25442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25440__$1,(1),null);
var inst_25443 = (inst_25441__$1 == null);
var state_25461__$1 = (function (){var statearr_25463 = state_25461;
(statearr_25463[(7)] = inst_25441__$1);

(statearr_25463[(8)] = inst_25440__$1);

(statearr_25463[(9)] = inst_25442);

return statearr_25463;
})();
if(cljs.core.truth_(inst_25443)){
var statearr_25464_25484 = state_25461__$1;
(statearr_25464_25484[(1)] = (8));

} else {
var statearr_25465_25485 = state_25461__$1;
(statearr_25465_25485[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (1))){
var inst_25430 = cljs.core.vec(chs);
var inst_25431 = inst_25430;
var state_25461__$1 = (function (){var statearr_25466 = state_25461;
(statearr_25466[(10)] = inst_25431);

return statearr_25466;
})();
var statearr_25467_25486 = state_25461__$1;
(statearr_25467_25486[(2)] = null);

(statearr_25467_25486[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (4))){
var inst_25431 = (state_25461[(10)]);
var state_25461__$1 = state_25461;
return cljs.core.async.ioc_alts_BANG_(state_25461__$1,(7),inst_25431);
} else {
if((state_val_25462 === (6))){
var inst_25457 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25468_25487 = state_25461__$1;
(statearr_25468_25487[(2)] = inst_25457);

(statearr_25468_25487[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (3))){
var inst_25459 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25461__$1,inst_25459);
} else {
if((state_val_25462 === (2))){
var inst_25431 = (state_25461[(10)]);
var inst_25433 = cljs.core.count(inst_25431);
var inst_25434 = (inst_25433 > (0));
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25434)){
var statearr_25470_25488 = state_25461__$1;
(statearr_25470_25488[(1)] = (4));

} else {
var statearr_25471_25489 = state_25461__$1;
(statearr_25471_25489[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (11))){
var inst_25431 = (state_25461[(10)]);
var inst_25450 = (state_25461[(2)]);
var tmp25469 = inst_25431;
var inst_25431__$1 = tmp25469;
var state_25461__$1 = (function (){var statearr_25472 = state_25461;
(statearr_25472[(11)] = inst_25450);

(statearr_25472[(10)] = inst_25431__$1);

return statearr_25472;
})();
var statearr_25473_25490 = state_25461__$1;
(statearr_25473_25490[(2)] = null);

(statearr_25473_25490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (9))){
var inst_25441 = (state_25461[(7)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25461__$1,(11),out,inst_25441);
} else {
if((state_val_25462 === (5))){
var inst_25455 = cljs.core.async.close_BANG_(out);
var state_25461__$1 = state_25461;
var statearr_25474_25491 = state_25461__$1;
(statearr_25474_25491[(2)] = inst_25455);

(statearr_25474_25491[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (10))){
var inst_25453 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25475_25492 = state_25461__$1;
(statearr_25475_25492[(2)] = inst_25453);

(statearr_25475_25492[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25462 === (8))){
var inst_25441 = (state_25461[(7)]);
var inst_25431 = (state_25461[(10)]);
var inst_25440 = (state_25461[(8)]);
var inst_25442 = (state_25461[(9)]);
var inst_25445 = (function (){var cs = inst_25431;
var vec__25436 = inst_25440;
var v = inst_25441;
var c = inst_25442;
return (function (p1__25427_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25427_SHARP_);
});
})();
var inst_25446 = cljs.core.filterv(inst_25445,inst_25431);
var inst_25431__$1 = inst_25446;
var state_25461__$1 = (function (){var statearr_25476 = state_25461;
(statearr_25476[(10)] = inst_25431__$1);

return statearr_25476;
})();
var statearr_25477_25493 = state_25461__$1;
(statearr_25477_25493[(2)] = null);

(statearr_25477_25493[(1)] = (2));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25478[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25478[(1)] = (1));

return statearr_25478;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25461){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25461);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25479){if((e25479 instanceof Object)){
var ex__21987__auto__ = e25479;
var statearr_25480_25494 = state_25461;
(statearr_25480_25494[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25461);

return cljs.core.cst$kw$recur;
} else {
throw e25479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25495 = state_25461;
state_25461 = G__25495;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25481 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25481[(6)] = c__22174__auto___25483);

return statearr_25481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
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
var G__25497 = arguments.length;
switch (G__25497) {
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
var c__22174__auto___25542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25521){
var state_val_25522 = (state_25521[(1)]);
if((state_val_25522 === (7))){
var inst_25503 = (state_25521[(7)]);
var inst_25503__$1 = (state_25521[(2)]);
var inst_25504 = (inst_25503__$1 == null);
var inst_25505 = cljs.core.not(inst_25504);
var state_25521__$1 = (function (){var statearr_25523 = state_25521;
(statearr_25523[(7)] = inst_25503__$1);

return statearr_25523;
})();
if(inst_25505){
var statearr_25524_25543 = state_25521__$1;
(statearr_25524_25543[(1)] = (8));

} else {
var statearr_25525_25544 = state_25521__$1;
(statearr_25525_25544[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (1))){
var inst_25498 = (0);
var state_25521__$1 = (function (){var statearr_25526 = state_25521;
(statearr_25526[(8)] = inst_25498);

return statearr_25526;
})();
var statearr_25527_25545 = state_25521__$1;
(statearr_25527_25545[(2)] = null);

(statearr_25527_25545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (4))){
var state_25521__$1 = state_25521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25521__$1,(7),ch);
} else {
if((state_val_25522 === (6))){
var inst_25516 = (state_25521[(2)]);
var state_25521__$1 = state_25521;
var statearr_25528_25546 = state_25521__$1;
(statearr_25528_25546[(2)] = inst_25516);

(statearr_25528_25546[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (3))){
var inst_25518 = (state_25521[(2)]);
var inst_25519 = cljs.core.async.close_BANG_(out);
var state_25521__$1 = (function (){var statearr_25529 = state_25521;
(statearr_25529[(9)] = inst_25518);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25521__$1,inst_25519);
} else {
if((state_val_25522 === (2))){
var inst_25498 = (state_25521[(8)]);
var inst_25500 = (inst_25498 < n);
var state_25521__$1 = state_25521;
if(cljs.core.truth_(inst_25500)){
var statearr_25530_25547 = state_25521__$1;
(statearr_25530_25547[(1)] = (4));

} else {
var statearr_25531_25548 = state_25521__$1;
(statearr_25531_25548[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (11))){
var inst_25498 = (state_25521[(8)]);
var inst_25508 = (state_25521[(2)]);
var inst_25509 = (inst_25498 + (1));
var inst_25498__$1 = inst_25509;
var state_25521__$1 = (function (){var statearr_25532 = state_25521;
(statearr_25532[(10)] = inst_25508);

(statearr_25532[(8)] = inst_25498__$1);

return statearr_25532;
})();
var statearr_25533_25549 = state_25521__$1;
(statearr_25533_25549[(2)] = null);

(statearr_25533_25549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (9))){
var state_25521__$1 = state_25521;
var statearr_25534_25550 = state_25521__$1;
(statearr_25534_25550[(2)] = null);

(statearr_25534_25550[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (5))){
var state_25521__$1 = state_25521;
var statearr_25535_25551 = state_25521__$1;
(statearr_25535_25551[(2)] = null);

(statearr_25535_25551[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (10))){
var inst_25513 = (state_25521[(2)]);
var state_25521__$1 = state_25521;
var statearr_25536_25552 = state_25521__$1;
(statearr_25536_25552[(2)] = inst_25513);

(statearr_25536_25552[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25522 === (8))){
var inst_25503 = (state_25521[(7)]);
var state_25521__$1 = state_25521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25521__$1,(11),out,inst_25503);
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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25537[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25537[(1)] = (1));

return statearr_25537;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25521){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25521);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object)){
var ex__21987__auto__ = e25538;
var statearr_25539_25553 = state_25521;
(statearr_25539_25553[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25521);

return cljs.core.cst$kw$recur;
} else {
throw e25538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25554 = state_25521;
state_25521 = G__25554;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25540 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25540[(6)] = c__22174__auto___25542);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25556 = (function (f,ch,meta25557){
this.f = f;
this.ch = ch;
this.meta25557 = meta25557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25558,meta25557__$1){
var self__ = this;
var _25558__$1 = this;
return (new cljs.core.async.t_cljs$core$async25556(self__.f,self__.ch,meta25557__$1));
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25558){
var self__ = this;
var _25558__$1 = this;
return self__.meta25557;
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25559 = (function (f,ch,meta25557,_,fn1,meta25560){
this.f = f;
this.ch = ch;
this.meta25557 = meta25557;
this._ = _;
this.fn1 = fn1;
this.meta25560 = meta25560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25561,meta25560__$1){
var self__ = this;
var _25561__$1 = this;
return (new cljs.core.async.t_cljs$core$async25559(self__.f,self__.ch,self__.meta25557,self__._,self__.fn1,meta25560__$1));
}));

(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25561){
var self__ = this;
var _25561__$1 = this;
return self__.meta25560;
}));

(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__25555_SHARP_){
var G__25562 = (((p1__25555_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25555_SHARP_) : self__.f.call(null,p1__25555_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25562) : f1.call(null,G__25562));
});
}));

(cljs.core.async.t_cljs$core$async25559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25557,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25556], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25560], null);
}));

(cljs.core.async.t_cljs$core$async25559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25559");

(cljs.core.async.t_cljs$core$async25559.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25559.
 */
cljs.core.async.__GT_t_cljs$core$async25559 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25559(f__$1,ch__$1,meta25557__$1,___$2,fn1__$1,meta25560){
return (new cljs.core.async.t_cljs$core$async25559(f__$1,ch__$1,meta25557__$1,___$2,fn1__$1,meta25560));
});

}

return (new cljs.core.async.t_cljs$core$async25559(self__.f,self__.ch,self__.meta25557,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25563 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25563) : self__.f.call(null,G__25563));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25557], null);
}));

(cljs.core.async.t_cljs$core$async25556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25556");

(cljs.core.async.t_cljs$core$async25556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25556.
 */
cljs.core.async.__GT_t_cljs$core$async25556 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25556(f__$1,ch__$1,meta25557){
return (new cljs.core.async.t_cljs$core$async25556(f__$1,ch__$1,meta25557));
});

}

return (new cljs.core.async.t_cljs$core$async25556(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25564 = (function (f,ch,meta25565){
this.f = f;
this.ch = ch;
this.meta25565 = meta25565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25566,meta25565__$1){
var self__ = this;
var _25566__$1 = this;
return (new cljs.core.async.t_cljs$core$async25564(self__.f,self__.ch,meta25565__$1));
}));

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25566){
var self__ = this;
var _25566__$1 = this;
return self__.meta25565;
}));

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async25564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25565], null);
}));

(cljs.core.async.t_cljs$core$async25564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25564");

(cljs.core.async.t_cljs$core$async25564.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25564.
 */
cljs.core.async.__GT_t_cljs$core$async25564 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25564(f__$1,ch__$1,meta25565){
return (new cljs.core.async.t_cljs$core$async25564(f__$1,ch__$1,meta25565));
});

}

return (new cljs.core.async.t_cljs$core$async25564(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25567 = (function (p,ch,meta25568){
this.p = p;
this.ch = ch;
this.meta25568 = meta25568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25569,meta25568__$1){
var self__ = this;
var _25569__$1 = this;
return (new cljs.core.async.t_cljs$core$async25567(self__.p,self__.ch,meta25568__$1));
}));

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25569){
var self__ = this;
var _25569__$1 = this;
return self__.meta25568;
}));

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25568], null);
}));

(cljs.core.async.t_cljs$core$async25567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25567");

(cljs.core.async.t_cljs$core$async25567.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25567.
 */
cljs.core.async.__GT_t_cljs$core$async25567 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25567(p__$1,ch__$1,meta25568){
return (new cljs.core.async.t_cljs$core$async25567(p__$1,ch__$1,meta25568));
});

}

return (new cljs.core.async.t_cljs$core$async25567(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25571 = arguments.length;
switch (G__25571) {
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
var c__22174__auto___25611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25592){
var state_val_25593 = (state_25592[(1)]);
if((state_val_25593 === (7))){
var inst_25588 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
var statearr_25594_25612 = state_25592__$1;
(statearr_25594_25612[(2)] = inst_25588);

(statearr_25594_25612[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (1))){
var state_25592__$1 = state_25592;
var statearr_25595_25613 = state_25592__$1;
(statearr_25595_25613[(2)] = null);

(statearr_25595_25613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (4))){
var inst_25574 = (state_25592[(7)]);
var inst_25574__$1 = (state_25592[(2)]);
var inst_25575 = (inst_25574__$1 == null);
var state_25592__$1 = (function (){var statearr_25596 = state_25592;
(statearr_25596[(7)] = inst_25574__$1);

return statearr_25596;
})();
if(cljs.core.truth_(inst_25575)){
var statearr_25597_25614 = state_25592__$1;
(statearr_25597_25614[(1)] = (5));

} else {
var statearr_25598_25615 = state_25592__$1;
(statearr_25598_25615[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (6))){
var inst_25574 = (state_25592[(7)]);
var inst_25579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25574) : p.call(null,inst_25574));
var state_25592__$1 = state_25592;
if(cljs.core.truth_(inst_25579)){
var statearr_25599_25616 = state_25592__$1;
(statearr_25599_25616[(1)] = (8));

} else {
var statearr_25600_25617 = state_25592__$1;
(statearr_25600_25617[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (3))){
var inst_25590 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25592__$1,inst_25590);
} else {
if((state_val_25593 === (2))){
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25592__$1,(4),ch);
} else {
if((state_val_25593 === (11))){
var inst_25582 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
var statearr_25601_25618 = state_25592__$1;
(statearr_25601_25618[(2)] = inst_25582);

(statearr_25601_25618[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (9))){
var state_25592__$1 = state_25592;
var statearr_25602_25619 = state_25592__$1;
(statearr_25602_25619[(2)] = null);

(statearr_25602_25619[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (5))){
var inst_25577 = cljs.core.async.close_BANG_(out);
var state_25592__$1 = state_25592;
var statearr_25603_25620 = state_25592__$1;
(statearr_25603_25620[(2)] = inst_25577);

(statearr_25603_25620[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (10))){
var inst_25585 = (state_25592[(2)]);
var state_25592__$1 = (function (){var statearr_25604 = state_25592;
(statearr_25604[(8)] = inst_25585);

return statearr_25604;
})();
var statearr_25605_25621 = state_25592__$1;
(statearr_25605_25621[(2)] = null);

(statearr_25605_25621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25593 === (8))){
var inst_25574 = (state_25592[(7)]);
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25592__$1,(11),out,inst_25574);
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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25606 = [null,null,null,null,null,null,null,null,null];
(statearr_25606[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25606[(1)] = (1));

return statearr_25606;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25592){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25592);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25607){if((e25607 instanceof Object)){
var ex__21987__auto__ = e25607;
var statearr_25608_25622 = state_25592;
(statearr_25608_25622[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25592);

return cljs.core.cst$kw$recur;
} else {
throw e25607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25623 = state_25592;
state_25592 = G__25623;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25609 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25609[(6)] = c__22174__auto___25611);

return statearr_25609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25625 = arguments.length;
switch (G__25625) {
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
var c__22174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25688){
var state_val_25689 = (state_25688[(1)]);
if((state_val_25689 === (7))){
var inst_25684 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25690_25728 = state_25688__$1;
(statearr_25690_25728[(2)] = inst_25684);

(statearr_25690_25728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (20))){
var inst_25654 = (state_25688[(7)]);
var inst_25665 = (state_25688[(2)]);
var inst_25666 = cljs.core.next(inst_25654);
var inst_25640 = inst_25666;
var inst_25641 = null;
var inst_25642 = (0);
var inst_25643 = (0);
var state_25688__$1 = (function (){var statearr_25691 = state_25688;
(statearr_25691[(8)] = inst_25640);

(statearr_25691[(9)] = inst_25643);

(statearr_25691[(10)] = inst_25665);

(statearr_25691[(11)] = inst_25642);

(statearr_25691[(12)] = inst_25641);

return statearr_25691;
})();
var statearr_25692_25729 = state_25688__$1;
(statearr_25692_25729[(2)] = null);

(statearr_25692_25729[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (1))){
var state_25688__$1 = state_25688;
var statearr_25693_25730 = state_25688__$1;
(statearr_25693_25730[(2)] = null);

(statearr_25693_25730[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (4))){
var inst_25629 = (state_25688[(13)]);
var inst_25629__$1 = (state_25688[(2)]);
var inst_25630 = (inst_25629__$1 == null);
var state_25688__$1 = (function (){var statearr_25694 = state_25688;
(statearr_25694[(13)] = inst_25629__$1);

return statearr_25694;
})();
if(cljs.core.truth_(inst_25630)){
var statearr_25695_25731 = state_25688__$1;
(statearr_25695_25731[(1)] = (5));

} else {
var statearr_25696_25732 = state_25688__$1;
(statearr_25696_25732[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (15))){
var state_25688__$1 = state_25688;
var statearr_25700_25733 = state_25688__$1;
(statearr_25700_25733[(2)] = null);

(statearr_25700_25733[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (21))){
var state_25688__$1 = state_25688;
var statearr_25701_25734 = state_25688__$1;
(statearr_25701_25734[(2)] = null);

(statearr_25701_25734[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (13))){
var inst_25640 = (state_25688[(8)]);
var inst_25643 = (state_25688[(9)]);
var inst_25642 = (state_25688[(11)]);
var inst_25641 = (state_25688[(12)]);
var inst_25650 = (state_25688[(2)]);
var inst_25651 = (inst_25643 + (1));
var tmp25697 = inst_25640;
var tmp25698 = inst_25642;
var tmp25699 = inst_25641;
var inst_25640__$1 = tmp25697;
var inst_25641__$1 = tmp25699;
var inst_25642__$1 = tmp25698;
var inst_25643__$1 = inst_25651;
var state_25688__$1 = (function (){var statearr_25702 = state_25688;
(statearr_25702[(14)] = inst_25650);

(statearr_25702[(8)] = inst_25640__$1);

(statearr_25702[(9)] = inst_25643__$1);

(statearr_25702[(11)] = inst_25642__$1);

(statearr_25702[(12)] = inst_25641__$1);

return statearr_25702;
})();
var statearr_25703_25735 = state_25688__$1;
(statearr_25703_25735[(2)] = null);

(statearr_25703_25735[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (22))){
var state_25688__$1 = state_25688;
var statearr_25704_25736 = state_25688__$1;
(statearr_25704_25736[(2)] = null);

(statearr_25704_25736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (6))){
var inst_25629 = (state_25688[(13)]);
var inst_25638 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25629) : f.call(null,inst_25629));
var inst_25639 = cljs.core.seq(inst_25638);
var inst_25640 = inst_25639;
var inst_25641 = null;
var inst_25642 = (0);
var inst_25643 = (0);
var state_25688__$1 = (function (){var statearr_25705 = state_25688;
(statearr_25705[(8)] = inst_25640);

(statearr_25705[(9)] = inst_25643);

(statearr_25705[(11)] = inst_25642);

(statearr_25705[(12)] = inst_25641);

return statearr_25705;
})();
var statearr_25706_25737 = state_25688__$1;
(statearr_25706_25737[(2)] = null);

(statearr_25706_25737[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (17))){
var inst_25654 = (state_25688[(7)]);
var inst_25658 = cljs.core.chunk_first(inst_25654);
var inst_25659 = cljs.core.chunk_rest(inst_25654);
var inst_25660 = cljs.core.count(inst_25658);
var inst_25640 = inst_25659;
var inst_25641 = inst_25658;
var inst_25642 = inst_25660;
var inst_25643 = (0);
var state_25688__$1 = (function (){var statearr_25707 = state_25688;
(statearr_25707[(8)] = inst_25640);

(statearr_25707[(9)] = inst_25643);

(statearr_25707[(11)] = inst_25642);

(statearr_25707[(12)] = inst_25641);

return statearr_25707;
})();
var statearr_25708_25738 = state_25688__$1;
(statearr_25708_25738[(2)] = null);

(statearr_25708_25738[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (3))){
var inst_25686 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25688__$1,inst_25686);
} else {
if((state_val_25689 === (12))){
var inst_25674 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25709_25739 = state_25688__$1;
(statearr_25709_25739[(2)] = inst_25674);

(statearr_25709_25739[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (2))){
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25688__$1,(4),in$);
} else {
if((state_val_25689 === (23))){
var inst_25682 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25710_25740 = state_25688__$1;
(statearr_25710_25740[(2)] = inst_25682);

(statearr_25710_25740[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (19))){
var inst_25669 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25711_25741 = state_25688__$1;
(statearr_25711_25741[(2)] = inst_25669);

(statearr_25711_25741[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (11))){
var inst_25640 = (state_25688[(8)]);
var inst_25654 = (state_25688[(7)]);
var inst_25654__$1 = cljs.core.seq(inst_25640);
var state_25688__$1 = (function (){var statearr_25712 = state_25688;
(statearr_25712[(7)] = inst_25654__$1);

return statearr_25712;
})();
if(inst_25654__$1){
var statearr_25713_25742 = state_25688__$1;
(statearr_25713_25742[(1)] = (14));

} else {
var statearr_25714_25743 = state_25688__$1;
(statearr_25714_25743[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (9))){
var inst_25676 = (state_25688[(2)]);
var inst_25677 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25688__$1 = (function (){var statearr_25715 = state_25688;
(statearr_25715[(15)] = inst_25676);

return statearr_25715;
})();
if(cljs.core.truth_(inst_25677)){
var statearr_25716_25744 = state_25688__$1;
(statearr_25716_25744[(1)] = (21));

} else {
var statearr_25717_25745 = state_25688__$1;
(statearr_25717_25745[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (5))){
var inst_25632 = cljs.core.async.close_BANG_(out);
var state_25688__$1 = state_25688;
var statearr_25718_25746 = state_25688__$1;
(statearr_25718_25746[(2)] = inst_25632);

(statearr_25718_25746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (14))){
var inst_25654 = (state_25688[(7)]);
var inst_25656 = cljs.core.chunked_seq_QMARK_(inst_25654);
var state_25688__$1 = state_25688;
if(inst_25656){
var statearr_25719_25747 = state_25688__$1;
(statearr_25719_25747[(1)] = (17));

} else {
var statearr_25720_25748 = state_25688__$1;
(statearr_25720_25748[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (16))){
var inst_25672 = (state_25688[(2)]);
var state_25688__$1 = state_25688;
var statearr_25721_25749 = state_25688__$1;
(statearr_25721_25749[(2)] = inst_25672);

(statearr_25721_25749[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25689 === (10))){
var inst_25643 = (state_25688[(9)]);
var inst_25641 = (state_25688[(12)]);
var inst_25648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25641,inst_25643);
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25688__$1,(13),out,inst_25648);
} else {
if((state_val_25689 === (18))){
var inst_25654 = (state_25688[(7)]);
var inst_25663 = cljs.core.first(inst_25654);
var state_25688__$1 = state_25688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25688__$1,(20),out,inst_25663);
} else {
if((state_val_25689 === (8))){
var inst_25643 = (state_25688[(9)]);
var inst_25642 = (state_25688[(11)]);
var inst_25645 = (inst_25643 < inst_25642);
var inst_25646 = inst_25645;
var state_25688__$1 = state_25688;
if(cljs.core.truth_(inst_25646)){
var statearr_25722_25750 = state_25688__$1;
(statearr_25722_25750[(1)] = (10));

} else {
var statearr_25723_25751 = state_25688__$1;
(statearr_25723_25751[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_25724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25724[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__);

(statearr_25724[(1)] = (1));

return statearr_25724;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1 = (function (state_25688){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25688);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25725){if((e25725 instanceof Object)){
var ex__21987__auto__ = e25725;
var statearr_25726_25752 = state_25688;
(statearr_25726_25752[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25688);

return cljs.core.cst$kw$recur;
} else {
throw e25725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25753 = state_25688;
state_25688 = G__25753;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__ = function(state_25688){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1.call(this,state_25688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25727 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25727[(6)] = c__22174__auto__);

return statearr_25727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));

return c__22174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25755 = arguments.length;
switch (G__25755) {
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
var G__25758 = arguments.length;
switch (G__25758) {
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
var G__25761 = arguments.length;
switch (G__25761) {
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
var c__22174__auto___25808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25785){
var state_val_25786 = (state_25785[(1)]);
if((state_val_25786 === (7))){
var inst_25780 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25787_25809 = state_25785__$1;
(statearr_25787_25809[(2)] = inst_25780);

(statearr_25787_25809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (1))){
var inst_25762 = null;
var state_25785__$1 = (function (){var statearr_25788 = state_25785;
(statearr_25788[(7)] = inst_25762);

return statearr_25788;
})();
var statearr_25789_25810 = state_25785__$1;
(statearr_25789_25810[(2)] = null);

(statearr_25789_25810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (4))){
var inst_25765 = (state_25785[(8)]);
var inst_25765__$1 = (state_25785[(2)]);
var inst_25766 = (inst_25765__$1 == null);
var inst_25767 = cljs.core.not(inst_25766);
var state_25785__$1 = (function (){var statearr_25790 = state_25785;
(statearr_25790[(8)] = inst_25765__$1);

return statearr_25790;
})();
if(inst_25767){
var statearr_25791_25811 = state_25785__$1;
(statearr_25791_25811[(1)] = (5));

} else {
var statearr_25792_25812 = state_25785__$1;
(statearr_25792_25812[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (6))){
var state_25785__$1 = state_25785;
var statearr_25793_25813 = state_25785__$1;
(statearr_25793_25813[(2)] = null);

(statearr_25793_25813[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (3))){
var inst_25782 = (state_25785[(2)]);
var inst_25783 = cljs.core.async.close_BANG_(out);
var state_25785__$1 = (function (){var statearr_25794 = state_25785;
(statearr_25794[(9)] = inst_25782);

return statearr_25794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25785__$1,inst_25783);
} else {
if((state_val_25786 === (2))){
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25785__$1,(4),ch);
} else {
if((state_val_25786 === (11))){
var inst_25765 = (state_25785[(8)]);
var inst_25774 = (state_25785[(2)]);
var inst_25762 = inst_25765;
var state_25785__$1 = (function (){var statearr_25795 = state_25785;
(statearr_25795[(7)] = inst_25762);

(statearr_25795[(10)] = inst_25774);

return statearr_25795;
})();
var statearr_25796_25814 = state_25785__$1;
(statearr_25796_25814[(2)] = null);

(statearr_25796_25814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (9))){
var inst_25765 = (state_25785[(8)]);
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25785__$1,(11),out,inst_25765);
} else {
if((state_val_25786 === (5))){
var inst_25762 = (state_25785[(7)]);
var inst_25765 = (state_25785[(8)]);
var inst_25769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25765,inst_25762);
var state_25785__$1 = state_25785;
if(inst_25769){
var statearr_25798_25815 = state_25785__$1;
(statearr_25798_25815[(1)] = (8));

} else {
var statearr_25799_25816 = state_25785__$1;
(statearr_25799_25816[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (10))){
var inst_25777 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25800_25817 = state_25785__$1;
(statearr_25800_25817[(2)] = inst_25777);

(statearr_25800_25817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25786 === (8))){
var inst_25762 = (state_25785[(7)]);
var tmp25797 = inst_25762;
var inst_25762__$1 = tmp25797;
var state_25785__$1 = (function (){var statearr_25801 = state_25785;
(statearr_25801[(7)] = inst_25762__$1);

return statearr_25801;
})();
var statearr_25802_25818 = state_25785__$1;
(statearr_25802_25818[(2)] = null);

(statearr_25802_25818[(1)] = (2));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25803[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25803[(1)] = (1));

return statearr_25803;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25785){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25785);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25804){if((e25804 instanceof Object)){
var ex__21987__auto__ = e25804;
var statearr_25805_25819 = state_25785;
(statearr_25805_25819[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25785);

return cljs.core.cst$kw$recur;
} else {
throw e25804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25820 = state_25785;
state_25785 = G__25820;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25806 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25806[(6)] = c__22174__auto___25808);

return statearr_25806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25822 = arguments.length;
switch (G__25822) {
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
var c__22174__auto___25888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25860){
var state_val_25861 = (state_25860[(1)]);
if((state_val_25861 === (7))){
var inst_25856 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25862_25889 = state_25860__$1;
(statearr_25862_25889[(2)] = inst_25856);

(statearr_25862_25889[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (1))){
var inst_25823 = (new Array(n));
var inst_25824 = inst_25823;
var inst_25825 = (0);
var state_25860__$1 = (function (){var statearr_25863 = state_25860;
(statearr_25863[(7)] = inst_25824);

(statearr_25863[(8)] = inst_25825);

return statearr_25863;
})();
var statearr_25864_25890 = state_25860__$1;
(statearr_25864_25890[(2)] = null);

(statearr_25864_25890[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (4))){
var inst_25828 = (state_25860[(9)]);
var inst_25828__$1 = (state_25860[(2)]);
var inst_25829 = (inst_25828__$1 == null);
var inst_25830 = cljs.core.not(inst_25829);
var state_25860__$1 = (function (){var statearr_25865 = state_25860;
(statearr_25865[(9)] = inst_25828__$1);

return statearr_25865;
})();
if(inst_25830){
var statearr_25866_25891 = state_25860__$1;
(statearr_25866_25891[(1)] = (5));

} else {
var statearr_25867_25892 = state_25860__$1;
(statearr_25867_25892[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (15))){
var inst_25850 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25868_25893 = state_25860__$1;
(statearr_25868_25893[(2)] = inst_25850);

(statearr_25868_25893[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (13))){
var state_25860__$1 = state_25860;
var statearr_25869_25894 = state_25860__$1;
(statearr_25869_25894[(2)] = null);

(statearr_25869_25894[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (6))){
var inst_25825 = (state_25860[(8)]);
var inst_25846 = (inst_25825 > (0));
var state_25860__$1 = state_25860;
if(cljs.core.truth_(inst_25846)){
var statearr_25870_25895 = state_25860__$1;
(statearr_25870_25895[(1)] = (12));

} else {
var statearr_25871_25896 = state_25860__$1;
(statearr_25871_25896[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (3))){
var inst_25858 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25860__$1,inst_25858);
} else {
if((state_val_25861 === (12))){
var inst_25824 = (state_25860[(7)]);
var inst_25848 = cljs.core.vec(inst_25824);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25860__$1,(15),out,inst_25848);
} else {
if((state_val_25861 === (2))){
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25860__$1,(4),ch);
} else {
if((state_val_25861 === (11))){
var inst_25840 = (state_25860[(2)]);
var inst_25841 = (new Array(n));
var inst_25824 = inst_25841;
var inst_25825 = (0);
var state_25860__$1 = (function (){var statearr_25872 = state_25860;
(statearr_25872[(10)] = inst_25840);

(statearr_25872[(7)] = inst_25824);

(statearr_25872[(8)] = inst_25825);

return statearr_25872;
})();
var statearr_25873_25897 = state_25860__$1;
(statearr_25873_25897[(2)] = null);

(statearr_25873_25897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (9))){
var inst_25824 = (state_25860[(7)]);
var inst_25838 = cljs.core.vec(inst_25824);
var state_25860__$1 = state_25860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25860__$1,(11),out,inst_25838);
} else {
if((state_val_25861 === (5))){
var inst_25824 = (state_25860[(7)]);
var inst_25833 = (state_25860[(11)]);
var inst_25825 = (state_25860[(8)]);
var inst_25828 = (state_25860[(9)]);
var inst_25832 = (inst_25824[inst_25825] = inst_25828);
var inst_25833__$1 = (inst_25825 + (1));
var inst_25834 = (inst_25833__$1 < n);
var state_25860__$1 = (function (){var statearr_25874 = state_25860;
(statearr_25874[(12)] = inst_25832);

(statearr_25874[(11)] = inst_25833__$1);

return statearr_25874;
})();
if(cljs.core.truth_(inst_25834)){
var statearr_25875_25898 = state_25860__$1;
(statearr_25875_25898[(1)] = (8));

} else {
var statearr_25876_25899 = state_25860__$1;
(statearr_25876_25899[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (14))){
var inst_25853 = (state_25860[(2)]);
var inst_25854 = cljs.core.async.close_BANG_(out);
var state_25860__$1 = (function (){var statearr_25878 = state_25860;
(statearr_25878[(13)] = inst_25853);

return statearr_25878;
})();
var statearr_25879_25900 = state_25860__$1;
(statearr_25879_25900[(2)] = inst_25854);

(statearr_25879_25900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (10))){
var inst_25844 = (state_25860[(2)]);
var state_25860__$1 = state_25860;
var statearr_25880_25901 = state_25860__$1;
(statearr_25880_25901[(2)] = inst_25844);

(statearr_25880_25901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25861 === (8))){
var inst_25824 = (state_25860[(7)]);
var inst_25833 = (state_25860[(11)]);
var tmp25877 = inst_25824;
var inst_25824__$1 = tmp25877;
var inst_25825 = inst_25833;
var state_25860__$1 = (function (){var statearr_25881 = state_25860;
(statearr_25881[(7)] = inst_25824__$1);

(statearr_25881[(8)] = inst_25825);

return statearr_25881;
})();
var statearr_25882_25902 = state_25860__$1;
(statearr_25882_25902[(2)] = null);

(statearr_25882_25902[(1)] = (2));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25883[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25883[(1)] = (1));

return statearr_25883;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25860){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25860);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25884){if((e25884 instanceof Object)){
var ex__21987__auto__ = e25884;
var statearr_25885_25903 = state_25860;
(statearr_25885_25903[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25860);

return cljs.core.cst$kw$recur;
} else {
throw e25884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25904 = state_25860;
state_25860 = G__25904;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25886 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25886[(6)] = c__22174__auto___25888);

return statearr_25886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25906 = arguments.length;
switch (G__25906) {
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
var c__22174__auto___25976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22175__auto__ = (function (){var switch__21983__auto__ = (function (state_25948){
var state_val_25949 = (state_25948[(1)]);
if((state_val_25949 === (7))){
var inst_25944 = (state_25948[(2)]);
var state_25948__$1 = state_25948;
var statearr_25950_25977 = state_25948__$1;
(statearr_25950_25977[(2)] = inst_25944);

(statearr_25950_25977[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (1))){
var inst_25907 = [];
var inst_25908 = inst_25907;
var inst_25909 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25948__$1 = (function (){var statearr_25951 = state_25948;
(statearr_25951[(7)] = inst_25908);

(statearr_25951[(8)] = inst_25909);

return statearr_25951;
})();
var statearr_25952_25978 = state_25948__$1;
(statearr_25952_25978[(2)] = null);

(statearr_25952_25978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (4))){
var inst_25912 = (state_25948[(9)]);
var inst_25912__$1 = (state_25948[(2)]);
var inst_25913 = (inst_25912__$1 == null);
var inst_25914 = cljs.core.not(inst_25913);
var state_25948__$1 = (function (){var statearr_25953 = state_25948;
(statearr_25953[(9)] = inst_25912__$1);

return statearr_25953;
})();
if(inst_25914){
var statearr_25954_25979 = state_25948__$1;
(statearr_25954_25979[(1)] = (5));

} else {
var statearr_25955_25980 = state_25948__$1;
(statearr_25955_25980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (15))){
var inst_25938 = (state_25948[(2)]);
var state_25948__$1 = state_25948;
var statearr_25956_25981 = state_25948__$1;
(statearr_25956_25981[(2)] = inst_25938);

(statearr_25956_25981[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (13))){
var state_25948__$1 = state_25948;
var statearr_25957_25982 = state_25948__$1;
(statearr_25957_25982[(2)] = null);

(statearr_25957_25982[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (6))){
var inst_25908 = (state_25948[(7)]);
var inst_25933 = inst_25908.length;
var inst_25934 = (inst_25933 > (0));
var state_25948__$1 = state_25948;
if(cljs.core.truth_(inst_25934)){
var statearr_25958_25983 = state_25948__$1;
(statearr_25958_25983[(1)] = (12));

} else {
var statearr_25959_25984 = state_25948__$1;
(statearr_25959_25984[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (3))){
var inst_25946 = (state_25948[(2)]);
var state_25948__$1 = state_25948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25948__$1,inst_25946);
} else {
if((state_val_25949 === (12))){
var inst_25908 = (state_25948[(7)]);
var inst_25936 = cljs.core.vec(inst_25908);
var state_25948__$1 = state_25948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25948__$1,(15),out,inst_25936);
} else {
if((state_val_25949 === (2))){
var state_25948__$1 = state_25948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25948__$1,(4),ch);
} else {
if((state_val_25949 === (11))){
var inst_25912 = (state_25948[(9)]);
var inst_25916 = (state_25948[(10)]);
var inst_25926 = (state_25948[(2)]);
var inst_25927 = [];
var inst_25928 = inst_25927.push(inst_25912);
var inst_25908 = inst_25927;
var inst_25909 = inst_25916;
var state_25948__$1 = (function (){var statearr_25960 = state_25948;
(statearr_25960[(11)] = inst_25926);

(statearr_25960[(7)] = inst_25908);

(statearr_25960[(12)] = inst_25928);

(statearr_25960[(8)] = inst_25909);

return statearr_25960;
})();
var statearr_25961_25985 = state_25948__$1;
(statearr_25961_25985[(2)] = null);

(statearr_25961_25985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (9))){
var inst_25908 = (state_25948[(7)]);
var inst_25924 = cljs.core.vec(inst_25908);
var state_25948__$1 = state_25948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25948__$1,(11),out,inst_25924);
} else {
if((state_val_25949 === (5))){
var inst_25909 = (state_25948[(8)]);
var inst_25912 = (state_25948[(9)]);
var inst_25916 = (state_25948[(10)]);
var inst_25916__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25912) : f.call(null,inst_25912));
var inst_25917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25916__$1,inst_25909);
var inst_25918 = cljs.core.keyword_identical_QMARK_(inst_25909,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25919 = ((inst_25917) || (inst_25918));
var state_25948__$1 = (function (){var statearr_25962 = state_25948;
(statearr_25962[(10)] = inst_25916__$1);

return statearr_25962;
})();
if(cljs.core.truth_(inst_25919)){
var statearr_25963_25986 = state_25948__$1;
(statearr_25963_25986[(1)] = (8));

} else {
var statearr_25964_25987 = state_25948__$1;
(statearr_25964_25987[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (14))){
var inst_25941 = (state_25948[(2)]);
var inst_25942 = cljs.core.async.close_BANG_(out);
var state_25948__$1 = (function (){var statearr_25966 = state_25948;
(statearr_25966[(13)] = inst_25941);

return statearr_25966;
})();
var statearr_25967_25988 = state_25948__$1;
(statearr_25967_25988[(2)] = inst_25942);

(statearr_25967_25988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (10))){
var inst_25931 = (state_25948[(2)]);
var state_25948__$1 = state_25948;
var statearr_25968_25989 = state_25948__$1;
(statearr_25968_25989[(2)] = inst_25931);

(statearr_25968_25989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25949 === (8))){
var inst_25908 = (state_25948[(7)]);
var inst_25912 = (state_25948[(9)]);
var inst_25916 = (state_25948[(10)]);
var inst_25921 = inst_25908.push(inst_25912);
var tmp25965 = inst_25908;
var inst_25908__$1 = tmp25965;
var inst_25909 = inst_25916;
var state_25948__$1 = (function (){var statearr_25969 = state_25948;
(statearr_25969[(7)] = inst_25908__$1);

(statearr_25969[(8)] = inst_25909);

(statearr_25969[(14)] = inst_25921);

return statearr_25969;
})();
var statearr_25970_25990 = state_25948__$1;
(statearr_25970_25990[(2)] = null);

(statearr_25970_25990[(1)] = (2));


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
var cljs$core$async$state_machine__21984__auto__ = null;
var cljs$core$async$state_machine__21984__auto____0 = (function (){
var statearr_25971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25971[(0)] = cljs$core$async$state_machine__21984__auto__);

(statearr_25971[(1)] = (1));

return statearr_25971;
});
var cljs$core$async$state_machine__21984__auto____1 = (function (state_25948){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__(state_25948);
if(cljs.core.keyword_identical_QMARK_(result__21986__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e25972){if((e25972 instanceof Object)){
var ex__21987__auto__ = e25972;
var statearr_25973_25991 = state_25948;
(statearr_25973_25991[(5)] = ex__21987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25948);

return cljs.core.cst$kw$recur;
} else {
throw e25972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21985__auto__,cljs.core.cst$kw$recur)){
var G__25992 = state_25948;
state_25948 = G__25992;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
cljs$core$async$state_machine__21984__auto__ = function(state_25948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21984__auto____1.call(this,state_25948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21984__auto____0;
cljs$core$async$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21984__auto____1;
return cljs$core$async$state_machine__21984__auto__;
})()
})();
var state__22176__auto__ = (function (){var statearr_25974 = (f__22175__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22175__auto__.cljs$core$IFn$_invoke$arity$0() : f__22175__auto__.call(null));
(statearr_25974[(6)] = c__22174__auto___25976);

return statearr_25974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

