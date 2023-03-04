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
var G__25192 = arguments.length;
switch (G__25192) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25193 = (function (f,blockable,meta25194){
this.f = f;
this.blockable = blockable;
this.meta25194 = meta25194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25195,meta25194__$1){
var self__ = this;
var _25195__$1 = this;
return (new cljs.core.async.t_cljs$core$async25193(self__.f,self__.blockable,meta25194__$1));
}));

(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25195){
var self__ = this;
var _25195__$1 = this;
return self__.meta25194;
}));

(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta25194], null);
}));

(cljs.core.async.t_cljs$core$async25193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25193");

(cljs.core.async.t_cljs$core$async25193.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25193.
 */
cljs.core.async.__GT_t_cljs$core$async25193 = (function cljs$core$async$__GT_t_cljs$core$async25193(f__$1,blockable__$1,meta25194){
return (new cljs.core.async.t_cljs$core$async25193(f__$1,blockable__$1,meta25194));
});

}

return (new cljs.core.async.t_cljs$core$async25193(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25199 = arguments.length;
switch (G__25199) {
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
var G__25202 = arguments.length;
switch (G__25202) {
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
var G__25205 = arguments.length;
switch (G__25205) {
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
var val_25207 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25207) : fn1.call(null,val_25207));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25207) : fn1.call(null,val_25207));
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
var G__25209 = arguments.length;
switch (G__25209) {
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
var n__4613__auto___25211 = n;
var x_25212 = (0);
while(true){
if((x_25212 < n__4613__auto___25211)){
(a[x_25212] = (0));

var G__25213 = (x_25212 + (1));
x_25212 = G__25213;
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

var G__25214 = (i + (1));
i = G__25214;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25215 = (function (flag,meta25216){
this.flag = flag;
this.meta25216 = meta25216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25217,meta25216__$1){
var self__ = this;
var _25217__$1 = this;
return (new cljs.core.async.t_cljs$core$async25215(self__.flag,meta25216__$1));
}));

(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25217){
var self__ = this;
var _25217__$1 = this;
return self__.meta25216;
}));

(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta25216], null);
}));

(cljs.core.async.t_cljs$core$async25215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25215");

(cljs.core.async.t_cljs$core$async25215.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25215.
 */
cljs.core.async.__GT_t_cljs$core$async25215 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25215(flag__$1,meta25216){
return (new cljs.core.async.t_cljs$core$async25215(flag__$1,meta25216));
});

}

return (new cljs.core.async.t_cljs$core$async25215(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25218 = (function (flag,cb,meta25219){
this.flag = flag;
this.cb = cb;
this.meta25219 = meta25219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25220,meta25219__$1){
var self__ = this;
var _25220__$1 = this;
return (new cljs.core.async.t_cljs$core$async25218(self__.flag,self__.cb,meta25219__$1));
}));

(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25220){
var self__ = this;
var _25220__$1 = this;
return self__.meta25219;
}));

(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta25219], null);
}));

(cljs.core.async.t_cljs$core$async25218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25218");

(cljs.core.async.t_cljs$core$async25218.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25218.
 */
cljs.core.async.__GT_t_cljs$core$async25218 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25218(flag__$1,cb__$1,meta25219){
return (new cljs.core.async.t_cljs$core$async25218(flag__$1,cb__$1,meta25219));
});

}

return (new cljs.core.async.t_cljs$core$async25218(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25221_SHARP_){
var G__25223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25221_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25223) : fret.call(null,G__25223));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25222_SHARP_){
var G__25224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25222_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25224) : fret.call(null,G__25224));
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
var G__25225 = (i + (1));
i = G__25225;
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
var len__4736__auto___25231 = arguments.length;
var i__4737__auto___25232 = (0);
while(true){
if((i__4737__auto___25232 < len__4736__auto___25231)){
args__4742__auto__.push((arguments[i__4737__auto___25232]));

var G__25233 = (i__4737__auto___25232 + (1));
i__4737__auto___25232 = G__25233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25228){
var map__25229 = p__25228;
var map__25229__$1 = (((((!((map__25229 == null))))?(((((map__25229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25229):map__25229);
var opts = map__25229__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25226){
var G__25227 = cljs.core.first(seq25226);
var seq25226__$1 = cljs.core.next(seq25226);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25227,seq25226__$1);
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
var G__25235 = arguments.length;
switch (G__25235) {
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
var c__23251__auto___25281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25259){
var state_val_25260 = (state_25259[(1)]);
if((state_val_25260 === (7))){
var inst_25255 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25261_25282 = state_25259__$1;
(statearr_25261_25282[(2)] = inst_25255);

(statearr_25261_25282[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (1))){
var state_25259__$1 = state_25259;
var statearr_25262_25283 = state_25259__$1;
(statearr_25262_25283[(2)] = null);

(statearr_25262_25283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (4))){
var inst_25238 = (state_25259[(7)]);
var inst_25238__$1 = (state_25259[(2)]);
var inst_25239 = (inst_25238__$1 == null);
var state_25259__$1 = (function (){var statearr_25263 = state_25259;
(statearr_25263[(7)] = inst_25238__$1);

return statearr_25263;
})();
if(cljs.core.truth_(inst_25239)){
var statearr_25264_25284 = state_25259__$1;
(statearr_25264_25284[(1)] = (5));

} else {
var statearr_25265_25285 = state_25259__$1;
(statearr_25265_25285[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (13))){
var state_25259__$1 = state_25259;
var statearr_25266_25286 = state_25259__$1;
(statearr_25266_25286[(2)] = null);

(statearr_25266_25286[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (6))){
var inst_25238 = (state_25259[(7)]);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25259__$1,(11),to,inst_25238);
} else {
if((state_val_25260 === (3))){
var inst_25257 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25259__$1,inst_25257);
} else {
if((state_val_25260 === (12))){
var state_25259__$1 = state_25259;
var statearr_25267_25287 = state_25259__$1;
(statearr_25267_25287[(2)] = null);

(statearr_25267_25287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (2))){
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25259__$1,(4),from);
} else {
if((state_val_25260 === (11))){
var inst_25248 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
if(cljs.core.truth_(inst_25248)){
var statearr_25268_25288 = state_25259__$1;
(statearr_25268_25288[(1)] = (12));

} else {
var statearr_25269_25289 = state_25259__$1;
(statearr_25269_25289[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (9))){
var state_25259__$1 = state_25259;
var statearr_25270_25290 = state_25259__$1;
(statearr_25270_25290[(2)] = null);

(statearr_25270_25290[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (5))){
var state_25259__$1 = state_25259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25271_25291 = state_25259__$1;
(statearr_25271_25291[(1)] = (8));

} else {
var statearr_25272_25292 = state_25259__$1;
(statearr_25272_25292[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (14))){
var inst_25253 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25273_25293 = state_25259__$1;
(statearr_25273_25293[(2)] = inst_25253);

(statearr_25273_25293[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (10))){
var inst_25245 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25274_25294 = state_25259__$1;
(statearr_25274_25294[(2)] = inst_25245);

(statearr_25274_25294[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25260 === (8))){
var inst_25242 = cljs.core.async.close_BANG_(to);
var state_25259__$1 = state_25259;
var statearr_25275_25295 = state_25259__$1;
(statearr_25275_25295[(2)] = inst_25242);

(statearr_25275_25295[(1)] = (10));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_25276 = [null,null,null,null,null,null,null,null];
(statearr_25276[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_25276[(1)] = (1));

return statearr_25276;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_25259){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25259);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object)){
var ex__23064__auto__ = e25277;
var statearr_25278_25296 = state_25259;
(statearr_25278_25296[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25259);

return cljs.core.cst$kw$recur;
} else {
throw e25277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25297 = state_25259;
state_25259 = G__25297;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_25259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_25259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25279 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25279[(6)] = c__23251__auto___25281);

return statearr_25279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var process = (function (p__25298){
var vec__25299 = p__25298;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25299,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25299,(1),null);
var job = vec__25299;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23251__auto___25470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (1))){
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25306__$1,(2),res,v);
} else {
if((state_val_25307 === (2))){
var inst_25303 = (state_25306[(2)]);
var inst_25304 = cljs.core.async.close_BANG_(res);
var state_25306__$1 = (function (){var statearr_25308 = state_25306;
(statearr_25308[(7)] = inst_25303);

return statearr_25308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25306__$1,inst_25304);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_25309 = [null,null,null,null,null,null,null,null];
(statearr_25309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__);

(statearr_25309[(1)] = (1));

return statearr_25309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1 = (function (state_25306){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25306);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object)){
var ex__23064__auto__ = e25310;
var statearr_25311_25471 = state_25306;
(statearr_25311_25471[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25306);

return cljs.core.cst$kw$recur;
} else {
throw e25310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25472 = state_25306;
state_25306 = G__25472;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25312 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25312[(6)] = c__23251__auto___25470);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__25313){
var vec__25314 = p__25313;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(1),null);
var job = vec__25314;
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
var n__4613__auto___25473 = n;
var __25474 = (0);
while(true){
if((__25474 < n__4613__auto___25473)){
var G__25317_25475 = type;
var G__25317_25476__$1 = (((G__25317_25475 instanceof cljs.core.Keyword))?G__25317_25475.fqn:null);
switch (G__25317_25476__$1) {
case "compute":
var c__23251__auto___25478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25474,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = ((function (__25474,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function (state_25330){
var state_val_25331 = (state_25330[(1)]);
if((state_val_25331 === (1))){
var state_25330__$1 = state_25330;
var statearr_25332_25479 = state_25330__$1;
(statearr_25332_25479[(2)] = null);

(statearr_25332_25479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25331 === (2))){
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25330__$1,(4),jobs);
} else {
if((state_val_25331 === (3))){
var inst_25328 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25330__$1,inst_25328);
} else {
if((state_val_25331 === (4))){
var inst_25320 = (state_25330[(2)]);
var inst_25321 = process(inst_25320);
var state_25330__$1 = state_25330;
if(cljs.core.truth_(inst_25321)){
var statearr_25333_25480 = state_25330__$1;
(statearr_25333_25480[(1)] = (5));

} else {
var statearr_25334_25481 = state_25330__$1;
(statearr_25334_25481[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25331 === (5))){
var state_25330__$1 = state_25330;
var statearr_25335_25482 = state_25330__$1;
(statearr_25335_25482[(2)] = null);

(statearr_25335_25482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25331 === (6))){
var state_25330__$1 = state_25330;
var statearr_25336_25483 = state_25330__$1;
(statearr_25336_25483[(2)] = null);

(statearr_25336_25483[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25331 === (7))){
var inst_25326 = (state_25330[(2)]);
var state_25330__$1 = state_25330;
var statearr_25337_25484 = state_25330__$1;
(statearr_25337_25484[(2)] = inst_25326);

(statearr_25337_25484[(1)] = (3));


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
});})(__25474,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
;
return ((function (__25474,switch__23060__auto__,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_25338 = [null,null,null,null,null,null,null];
(statearr_25338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__);

(statearr_25338[(1)] = (1));

return statearr_25338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1 = (function (state_25330){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25330);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25339){if((e25339 instanceof Object)){
var ex__23064__auto__ = e25339;
var statearr_25340_25485 = state_25330;
(statearr_25340_25485[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25330);

return cljs.core.cst$kw$recur;
} else {
throw e25339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25486 = state_25330;
state_25330 = G__25486;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = function(state_25330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1.call(this,state_25330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__;
})()
;})(__25474,switch__23060__auto__,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
})();
var state__23253__auto__ = (function (){var statearr_25341 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25341[(6)] = c__23251__auto___25478);

return statearr_25341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
});})(__25474,c__23251__auto___25478,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
);


break;
case "async":
var c__23251__auto___25487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25474,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = ((function (__25474,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function (state_25354){
var state_val_25355 = (state_25354[(1)]);
if((state_val_25355 === (1))){
var state_25354__$1 = state_25354;
var statearr_25356_25488 = state_25354__$1;
(statearr_25356_25488[(2)] = null);

(statearr_25356_25488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25355 === (2))){
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25354__$1,(4),jobs);
} else {
if((state_val_25355 === (3))){
var inst_25352 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25354__$1,inst_25352);
} else {
if((state_val_25355 === (4))){
var inst_25344 = (state_25354[(2)]);
var inst_25345 = async(inst_25344);
var state_25354__$1 = state_25354;
if(cljs.core.truth_(inst_25345)){
var statearr_25357_25489 = state_25354__$1;
(statearr_25357_25489[(1)] = (5));

} else {
var statearr_25358_25490 = state_25354__$1;
(statearr_25358_25490[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25355 === (5))){
var state_25354__$1 = state_25354;
var statearr_25359_25491 = state_25354__$1;
(statearr_25359_25491[(2)] = null);

(statearr_25359_25491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25355 === (6))){
var state_25354__$1 = state_25354;
var statearr_25360_25492 = state_25354__$1;
(statearr_25360_25492[(2)] = null);

(statearr_25360_25492[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25355 === (7))){
var inst_25350 = (state_25354[(2)]);
var state_25354__$1 = state_25354;
var statearr_25361_25493 = state_25354__$1;
(statearr_25361_25493[(2)] = inst_25350);

(statearr_25361_25493[(1)] = (3));


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
});})(__25474,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
;
return ((function (__25474,switch__23060__auto__,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_25362 = [null,null,null,null,null,null,null];
(statearr_25362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__);

(statearr_25362[(1)] = (1));

return statearr_25362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1 = (function (state_25354){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25354);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25363){if((e25363 instanceof Object)){
var ex__23064__auto__ = e25363;
var statearr_25364_25494 = state_25354;
(statearr_25364_25494[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25354);

return cljs.core.cst$kw$recur;
} else {
throw e25363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25495 = state_25354;
state_25354 = G__25495;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = function(state_25354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1.call(this,state_25354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__;
})()
;})(__25474,switch__23060__auto__,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
})();
var state__23253__auto__ = (function (){var statearr_25365 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25365[(6)] = c__23251__auto___25487);

return statearr_25365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
});})(__25474,c__23251__auto___25487,G__25317_25475,G__25317_25476__$1,n__4613__auto___25473,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25317_25476__$1)].join('')));

}

var G__25496 = (__25474 + (1));
__25474 = G__25496;
continue;
} else {
}
break;
}

var c__23251__auto___25497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25387){
var state_val_25388 = (state_25387[(1)]);
if((state_val_25388 === (7))){
var inst_25383 = (state_25387[(2)]);
var state_25387__$1 = state_25387;
var statearr_25389_25498 = state_25387__$1;
(statearr_25389_25498[(2)] = inst_25383);

(statearr_25389_25498[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25388 === (1))){
var state_25387__$1 = state_25387;
var statearr_25390_25499 = state_25387__$1;
(statearr_25390_25499[(2)] = null);

(statearr_25390_25499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25388 === (4))){
var inst_25368 = (state_25387[(7)]);
var inst_25368__$1 = (state_25387[(2)]);
var inst_25369 = (inst_25368__$1 == null);
var state_25387__$1 = (function (){var statearr_25391 = state_25387;
(statearr_25391[(7)] = inst_25368__$1);

return statearr_25391;
})();
if(cljs.core.truth_(inst_25369)){
var statearr_25392_25500 = state_25387__$1;
(statearr_25392_25500[(1)] = (5));

} else {
var statearr_25393_25501 = state_25387__$1;
(statearr_25393_25501[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25388 === (6))){
var inst_25368 = (state_25387[(7)]);
var inst_25373 = (state_25387[(8)]);
var inst_25373__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25374 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25375 = [inst_25368,inst_25373__$1];
var inst_25376 = (new cljs.core.PersistentVector(null,2,(5),inst_25374,inst_25375,null));
var state_25387__$1 = (function (){var statearr_25394 = state_25387;
(statearr_25394[(8)] = inst_25373__$1);

return statearr_25394;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25387__$1,(8),jobs,inst_25376);
} else {
if((state_val_25388 === (3))){
var inst_25385 = (state_25387[(2)]);
var state_25387__$1 = state_25387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25387__$1,inst_25385);
} else {
if((state_val_25388 === (2))){
var state_25387__$1 = state_25387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25387__$1,(4),from);
} else {
if((state_val_25388 === (9))){
var inst_25380 = (state_25387[(2)]);
var state_25387__$1 = (function (){var statearr_25395 = state_25387;
(statearr_25395[(9)] = inst_25380);

return statearr_25395;
})();
var statearr_25396_25502 = state_25387__$1;
(statearr_25396_25502[(2)] = null);

(statearr_25396_25502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25388 === (5))){
var inst_25371 = cljs.core.async.close_BANG_(jobs);
var state_25387__$1 = state_25387;
var statearr_25397_25503 = state_25387__$1;
(statearr_25397_25503[(2)] = inst_25371);

(statearr_25397_25503[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25388 === (8))){
var inst_25373 = (state_25387[(8)]);
var inst_25378 = (state_25387[(2)]);
var state_25387__$1 = (function (){var statearr_25398 = state_25387;
(statearr_25398[(10)] = inst_25378);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25387__$1,(9),results,inst_25373);
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
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_25399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__);

(statearr_25399[(1)] = (1));

return statearr_25399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1 = (function (state_25387){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25387);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25400){if((e25400 instanceof Object)){
var ex__23064__auto__ = e25400;
var statearr_25401_25504 = state_25387;
(statearr_25401_25504[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25387);

return cljs.core.cst$kw$recur;
} else {
throw e25400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25505 = state_25387;
state_25387 = G__25505;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = function(state_25387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1.call(this,state_25387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25402 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25402[(6)] = c__23251__auto___25497);

return statearr_25402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


var c__23251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25440){
var state_val_25441 = (state_25440[(1)]);
if((state_val_25441 === (7))){
var inst_25436 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25442_25506 = state_25440__$1;
(statearr_25442_25506[(2)] = inst_25436);

(statearr_25442_25506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (20))){
var state_25440__$1 = state_25440;
var statearr_25443_25507 = state_25440__$1;
(statearr_25443_25507[(2)] = null);

(statearr_25443_25507[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (1))){
var state_25440__$1 = state_25440;
var statearr_25444_25508 = state_25440__$1;
(statearr_25444_25508[(2)] = null);

(statearr_25444_25508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (4))){
var inst_25405 = (state_25440[(7)]);
var inst_25405__$1 = (state_25440[(2)]);
var inst_25406 = (inst_25405__$1 == null);
var state_25440__$1 = (function (){var statearr_25445 = state_25440;
(statearr_25445[(7)] = inst_25405__$1);

return statearr_25445;
})();
if(cljs.core.truth_(inst_25406)){
var statearr_25446_25509 = state_25440__$1;
(statearr_25446_25509[(1)] = (5));

} else {
var statearr_25447_25510 = state_25440__$1;
(statearr_25447_25510[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (15))){
var inst_25418 = (state_25440[(8)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25440__$1,(18),to,inst_25418);
} else {
if((state_val_25441 === (21))){
var inst_25431 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25448_25511 = state_25440__$1;
(statearr_25448_25511[(2)] = inst_25431);

(statearr_25448_25511[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (13))){
var inst_25433 = (state_25440[(2)]);
var state_25440__$1 = (function (){var statearr_25449 = state_25440;
(statearr_25449[(9)] = inst_25433);

return statearr_25449;
})();
var statearr_25450_25512 = state_25440__$1;
(statearr_25450_25512[(2)] = null);

(statearr_25450_25512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (6))){
var inst_25405 = (state_25440[(7)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25440__$1,(11),inst_25405);
} else {
if((state_val_25441 === (17))){
var inst_25426 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25426)){
var statearr_25451_25513 = state_25440__$1;
(statearr_25451_25513[(1)] = (19));

} else {
var statearr_25452_25514 = state_25440__$1;
(statearr_25452_25514[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (3))){
var inst_25438 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25440__$1,inst_25438);
} else {
if((state_val_25441 === (12))){
var inst_25415 = (state_25440[(10)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25440__$1,(14),inst_25415);
} else {
if((state_val_25441 === (2))){
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25440__$1,(4),results);
} else {
if((state_val_25441 === (19))){
var state_25440__$1 = state_25440;
var statearr_25453_25515 = state_25440__$1;
(statearr_25453_25515[(2)] = null);

(statearr_25453_25515[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (11))){
var inst_25415 = (state_25440[(2)]);
var state_25440__$1 = (function (){var statearr_25454 = state_25440;
(statearr_25454[(10)] = inst_25415);

return statearr_25454;
})();
var statearr_25455_25516 = state_25440__$1;
(statearr_25455_25516[(2)] = null);

(statearr_25455_25516[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (9))){
var state_25440__$1 = state_25440;
var statearr_25456_25517 = state_25440__$1;
(statearr_25456_25517[(2)] = null);

(statearr_25456_25517[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (5))){
var state_25440__$1 = state_25440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25457_25518 = state_25440__$1;
(statearr_25457_25518[(1)] = (8));

} else {
var statearr_25458_25519 = state_25440__$1;
(statearr_25458_25519[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (14))){
var inst_25418 = (state_25440[(8)]);
var inst_25418__$1 = (state_25440[(2)]);
var inst_25419 = (inst_25418__$1 == null);
var inst_25420 = cljs.core.not(inst_25419);
var state_25440__$1 = (function (){var statearr_25459 = state_25440;
(statearr_25459[(8)] = inst_25418__$1);

return statearr_25459;
})();
if(inst_25420){
var statearr_25460_25520 = state_25440__$1;
(statearr_25460_25520[(1)] = (15));

} else {
var statearr_25461_25521 = state_25440__$1;
(statearr_25461_25521[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (16))){
var state_25440__$1 = state_25440;
var statearr_25462_25522 = state_25440__$1;
(statearr_25462_25522[(2)] = false);

(statearr_25462_25522[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (10))){
var inst_25412 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25463_25523 = state_25440__$1;
(statearr_25463_25523[(2)] = inst_25412);

(statearr_25463_25523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (18))){
var inst_25423 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25464_25524 = state_25440__$1;
(statearr_25464_25524[(2)] = inst_25423);

(statearr_25464_25524[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25441 === (8))){
var inst_25409 = cljs.core.async.close_BANG_(to);
var state_25440__$1 = state_25440;
var statearr_25465_25525 = state_25440__$1;
(statearr_25465_25525[(2)] = inst_25409);

(statearr_25465_25525[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_25466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__);

(statearr_25466[(1)] = (1));

return statearr_25466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1 = (function (state_25440){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25440);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25467){if((e25467 instanceof Object)){
var ex__23064__auto__ = e25467;
var statearr_25468_25526 = state_25440;
(statearr_25468_25526[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25440);

return cljs.core.cst$kw$recur;
} else {
throw e25467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25527 = state_25440;
state_25440 = G__25527;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25469 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25469[(6)] = c__23251__auto__);

return statearr_25469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

return c__23251__auto__;
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
var G__25529 = arguments.length;
switch (G__25529) {
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
var G__25532 = arguments.length;
switch (G__25532) {
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
var G__25535 = arguments.length;
switch (G__25535) {
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
var c__23251__auto___25584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25561){
var state_val_25562 = (state_25561[(1)]);
if((state_val_25562 === (7))){
var inst_25557 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25563_25585 = state_25561__$1;
(statearr_25563_25585[(2)] = inst_25557);

(statearr_25563_25585[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (1))){
var state_25561__$1 = state_25561;
var statearr_25564_25586 = state_25561__$1;
(statearr_25564_25586[(2)] = null);

(statearr_25564_25586[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (4))){
var inst_25538 = (state_25561[(7)]);
var inst_25538__$1 = (state_25561[(2)]);
var inst_25539 = (inst_25538__$1 == null);
var state_25561__$1 = (function (){var statearr_25565 = state_25561;
(statearr_25565[(7)] = inst_25538__$1);

return statearr_25565;
})();
if(cljs.core.truth_(inst_25539)){
var statearr_25566_25587 = state_25561__$1;
(statearr_25566_25587[(1)] = (5));

} else {
var statearr_25567_25588 = state_25561__$1;
(statearr_25567_25588[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (13))){
var state_25561__$1 = state_25561;
var statearr_25568_25589 = state_25561__$1;
(statearr_25568_25589[(2)] = null);

(statearr_25568_25589[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (6))){
var inst_25538 = (state_25561[(7)]);
var inst_25544 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25538) : p.call(null,inst_25538));
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25544)){
var statearr_25569_25590 = state_25561__$1;
(statearr_25569_25590[(1)] = (9));

} else {
var statearr_25570_25591 = state_25561__$1;
(statearr_25570_25591[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (3))){
var inst_25559 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25561__$1,inst_25559);
} else {
if((state_val_25562 === (12))){
var state_25561__$1 = state_25561;
var statearr_25571_25592 = state_25561__$1;
(statearr_25571_25592[(2)] = null);

(statearr_25571_25592[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (2))){
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25561__$1,(4),ch);
} else {
if((state_val_25562 === (11))){
var inst_25538 = (state_25561[(7)]);
var inst_25548 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25561__$1,(8),inst_25548,inst_25538);
} else {
if((state_val_25562 === (9))){
var state_25561__$1 = state_25561;
var statearr_25572_25593 = state_25561__$1;
(statearr_25572_25593[(2)] = tc);

(statearr_25572_25593[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (5))){
var inst_25541 = cljs.core.async.close_BANG_(tc);
var inst_25542 = cljs.core.async.close_BANG_(fc);
var state_25561__$1 = (function (){var statearr_25573 = state_25561;
(statearr_25573[(8)] = inst_25541);

return statearr_25573;
})();
var statearr_25574_25594 = state_25561__$1;
(statearr_25574_25594[(2)] = inst_25542);

(statearr_25574_25594[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (14))){
var inst_25555 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25575_25595 = state_25561__$1;
(statearr_25575_25595[(2)] = inst_25555);

(statearr_25575_25595[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (10))){
var state_25561__$1 = state_25561;
var statearr_25576_25596 = state_25561__$1;
(statearr_25576_25596[(2)] = fc);

(statearr_25576_25596[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25562 === (8))){
var inst_25550 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25550)){
var statearr_25577_25597 = state_25561__$1;
(statearr_25577_25597[(1)] = (12));

} else {
var statearr_25578_25598 = state_25561__$1;
(statearr_25578_25598[(1)] = (13));

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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_25561){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25561);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__23064__auto__ = e25580;
var statearr_25581_25599 = state_25561;
(statearr_25581_25599[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25561);

return cljs.core.cst$kw$recur;
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25600 = state_25561;
state_25561 = G__25600;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_25561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_25561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25582 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25582[(6)] = c__23251__auto___25584);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var c__23251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25621){
var state_val_25622 = (state_25621[(1)]);
if((state_val_25622 === (7))){
var inst_25617 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25623_25641 = state_25621__$1;
(statearr_25623_25641[(2)] = inst_25617);

(statearr_25623_25641[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (1))){
var inst_25601 = init;
var state_25621__$1 = (function (){var statearr_25624 = state_25621;
(statearr_25624[(7)] = inst_25601);

return statearr_25624;
})();
var statearr_25625_25642 = state_25621__$1;
(statearr_25625_25642[(2)] = null);

(statearr_25625_25642[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (4))){
var inst_25604 = (state_25621[(8)]);
var inst_25604__$1 = (state_25621[(2)]);
var inst_25605 = (inst_25604__$1 == null);
var state_25621__$1 = (function (){var statearr_25626 = state_25621;
(statearr_25626[(8)] = inst_25604__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25605)){
var statearr_25627_25643 = state_25621__$1;
(statearr_25627_25643[(1)] = (5));

} else {
var statearr_25628_25644 = state_25621__$1;
(statearr_25628_25644[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (6))){
var inst_25604 = (state_25621[(8)]);
var inst_25601 = (state_25621[(7)]);
var inst_25608 = (state_25621[(9)]);
var inst_25608__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25601,inst_25604) : f.call(null,inst_25601,inst_25604));
var inst_25609 = cljs.core.reduced_QMARK_(inst_25608__$1);
var state_25621__$1 = (function (){var statearr_25629 = state_25621;
(statearr_25629[(9)] = inst_25608__$1);

return statearr_25629;
})();
if(inst_25609){
var statearr_25630_25645 = state_25621__$1;
(statearr_25630_25645[(1)] = (8));

} else {
var statearr_25631_25646 = state_25621__$1;
(statearr_25631_25646[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (3))){
var inst_25619 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25621__$1,inst_25619);
} else {
if((state_val_25622 === (2))){
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25621__$1,(4),ch);
} else {
if((state_val_25622 === (9))){
var inst_25608 = (state_25621[(9)]);
var inst_25601 = inst_25608;
var state_25621__$1 = (function (){var statearr_25632 = state_25621;
(statearr_25632[(7)] = inst_25601);

return statearr_25632;
})();
var statearr_25633_25647 = state_25621__$1;
(statearr_25633_25647[(2)] = null);

(statearr_25633_25647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (5))){
var inst_25601 = (state_25621[(7)]);
var state_25621__$1 = state_25621;
var statearr_25634_25648 = state_25621__$1;
(statearr_25634_25648[(2)] = inst_25601);

(statearr_25634_25648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (10))){
var inst_25615 = (state_25621[(2)]);
var state_25621__$1 = state_25621;
var statearr_25635_25649 = state_25621__$1;
(statearr_25635_25649[(2)] = inst_25615);

(statearr_25635_25649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25622 === (8))){
var inst_25608 = (state_25621[(9)]);
var inst_25611 = cljs.core.deref(inst_25608);
var state_25621__$1 = state_25621;
var statearr_25636_25650 = state_25621__$1;
(statearr_25636_25650[(2)] = inst_25611);

(statearr_25636_25650[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__23061__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23061__auto____0 = (function (){
var statearr_25637 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25637[(0)] = cljs$core$async$reduce_$_state_machine__23061__auto__);

(statearr_25637[(1)] = (1));

return statearr_25637;
});
var cljs$core$async$reduce_$_state_machine__23061__auto____1 = (function (state_25621){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25621);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25638){if((e25638 instanceof Object)){
var ex__23064__auto__ = e25638;
var statearr_25639_25651 = state_25621;
(statearr_25639_25651[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25621);

return cljs.core.cst$kw$recur;
} else {
throw e25638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25652 = state_25621;
state_25621 = G__25652;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23061__auto__ = function(state_25621){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23061__auto____1.call(this,state_25621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23061__auto____0;
cljs$core$async$reduce_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23061__auto____1;
return cljs$core$async$reduce_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25640 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25640[(6)] = c__23251__auto__);

return statearr_25640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

return c__23251__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (1))){
var inst_25653 = cljs.core.async.reduce(f__$1,init,ch);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25658__$1,(2),inst_25653);
} else {
if((state_val_25659 === (2))){
var inst_25655 = (state_25658[(2)]);
var inst_25656 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25655) : f__$1.call(null,inst_25655));
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25658__$1,inst_25656);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23061__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23061__auto____0 = (function (){
var statearr_25660 = [null,null,null,null,null,null,null];
(statearr_25660[(0)] = cljs$core$async$transduce_$_state_machine__23061__auto__);

(statearr_25660[(1)] = (1));

return statearr_25660;
});
var cljs$core$async$transduce_$_state_machine__23061__auto____1 = (function (state_25658){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25658);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object)){
var ex__23064__auto__ = e25661;
var statearr_25662_25664 = state_25658;
(statearr_25662_25664[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25658);

return cljs.core.cst$kw$recur;
} else {
throw e25661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25665 = state_25658;
state_25658 = G__25665;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23061__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23061__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23061__auto____0;
cljs$core$async$transduce_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23061__auto____1;
return cljs$core$async$transduce_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25663 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25663[(6)] = c__23251__auto__);

return statearr_25663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

return c__23251__auto__;
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
var G__25667 = arguments.length;
switch (G__25667) {
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
var c__23251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25692){
var state_val_25693 = (state_25692[(1)]);
if((state_val_25693 === (7))){
var inst_25674 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25694_25715 = state_25692__$1;
(statearr_25694_25715[(2)] = inst_25674);

(statearr_25694_25715[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (1))){
var inst_25668 = cljs.core.seq(coll);
var inst_25669 = inst_25668;
var state_25692__$1 = (function (){var statearr_25695 = state_25692;
(statearr_25695[(7)] = inst_25669);

return statearr_25695;
})();
var statearr_25696_25716 = state_25692__$1;
(statearr_25696_25716[(2)] = null);

(statearr_25696_25716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (4))){
var inst_25669 = (state_25692[(7)]);
var inst_25672 = cljs.core.first(inst_25669);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25692__$1,(7),ch,inst_25672);
} else {
if((state_val_25693 === (13))){
var inst_25686 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25697_25717 = state_25692__$1;
(statearr_25697_25717[(2)] = inst_25686);

(statearr_25697_25717[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (6))){
var inst_25677 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25677)){
var statearr_25698_25718 = state_25692__$1;
(statearr_25698_25718[(1)] = (8));

} else {
var statearr_25699_25719 = state_25692__$1;
(statearr_25699_25719[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (3))){
var inst_25690 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25692__$1,inst_25690);
} else {
if((state_val_25693 === (12))){
var state_25692__$1 = state_25692;
var statearr_25700_25720 = state_25692__$1;
(statearr_25700_25720[(2)] = null);

(statearr_25700_25720[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (2))){
var inst_25669 = (state_25692[(7)]);
var state_25692__$1 = state_25692;
if(cljs.core.truth_(inst_25669)){
var statearr_25701_25721 = state_25692__$1;
(statearr_25701_25721[(1)] = (4));

} else {
var statearr_25702_25722 = state_25692__$1;
(statearr_25702_25722[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (11))){
var inst_25683 = cljs.core.async.close_BANG_(ch);
var state_25692__$1 = state_25692;
var statearr_25703_25723 = state_25692__$1;
(statearr_25703_25723[(2)] = inst_25683);

(statearr_25703_25723[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (9))){
var state_25692__$1 = state_25692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25704_25724 = state_25692__$1;
(statearr_25704_25724[(1)] = (11));

} else {
var statearr_25705_25725 = state_25692__$1;
(statearr_25705_25725[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (5))){
var inst_25669 = (state_25692[(7)]);
var state_25692__$1 = state_25692;
var statearr_25706_25726 = state_25692__$1;
(statearr_25706_25726[(2)] = inst_25669);

(statearr_25706_25726[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (10))){
var inst_25688 = (state_25692[(2)]);
var state_25692__$1 = state_25692;
var statearr_25707_25727 = state_25692__$1;
(statearr_25707_25727[(2)] = inst_25688);

(statearr_25707_25727[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25693 === (8))){
var inst_25669 = (state_25692[(7)]);
var inst_25679 = cljs.core.next(inst_25669);
var inst_25669__$1 = inst_25679;
var state_25692__$1 = (function (){var statearr_25708 = state_25692;
(statearr_25708[(7)] = inst_25669__$1);

return statearr_25708;
})();
var statearr_25709_25728 = state_25692__$1;
(statearr_25709_25728[(2)] = null);

(statearr_25709_25728[(1)] = (2));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_25710 = [null,null,null,null,null,null,null,null];
(statearr_25710[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_25710[(1)] = (1));

return statearr_25710;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_25692){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25692);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25711){if((e25711 instanceof Object)){
var ex__23064__auto__ = e25711;
var statearr_25712_25729 = state_25692;
(statearr_25712_25729[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25692);

return cljs.core.cst$kw$recur;
} else {
throw e25711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__25730 = state_25692;
state_25692 = G__25730;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_25692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_25692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25713 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25713[(6)] = c__23251__auto__);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

return c__23251__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_25731 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_25731(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25732 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_25732(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25733 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_25733(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25734 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_25734(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25735 = (function (ch,cs,meta25736){
this.ch = ch;
this.cs = cs;
this.meta25736 = meta25736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25737,meta25736__$1){
var self__ = this;
var _25737__$1 = this;
return (new cljs.core.async.t_cljs$core$async25735(self__.ch,self__.cs,meta25736__$1));
}));

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25737){
var self__ = this;
var _25737__$1 = this;
return self__.meta25736;
}));

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25736], null);
}));

(cljs.core.async.t_cljs$core$async25735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25735");

(cljs.core.async.t_cljs$core$async25735.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25735.
 */
cljs.core.async.__GT_t_cljs$core$async25735 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25735(ch__$1,cs__$1,meta25736){
return (new cljs.core.async.t_cljs$core$async25735(ch__$1,cs__$1,meta25736));
});

}

return (new cljs.core.async.t_cljs$core$async25735(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23251__auto___25957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_25872){
var state_val_25873 = (state_25872[(1)]);
if((state_val_25873 === (7))){
var inst_25868 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25874_25958 = state_25872__$1;
(statearr_25874_25958[(2)] = inst_25868);

(statearr_25874_25958[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (20))){
var inst_25771 = (state_25872[(7)]);
var inst_25783 = cljs.core.first(inst_25771);
var inst_25784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25783,(0),null);
var inst_25785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25783,(1),null);
var state_25872__$1 = (function (){var statearr_25875 = state_25872;
(statearr_25875[(8)] = inst_25784);

return statearr_25875;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25876_25959 = state_25872__$1;
(statearr_25876_25959[(1)] = (22));

} else {
var statearr_25877_25960 = state_25872__$1;
(statearr_25877_25960[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (27))){
var inst_25740 = (state_25872[(9)]);
var inst_25813 = (state_25872[(10)]);
var inst_25820 = (state_25872[(11)]);
var inst_25815 = (state_25872[(12)]);
var inst_25820__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25813,inst_25815);
var inst_25821 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25820__$1,inst_25740,done);
var state_25872__$1 = (function (){var statearr_25878 = state_25872;
(statearr_25878[(11)] = inst_25820__$1);

return statearr_25878;
})();
if(cljs.core.truth_(inst_25821)){
var statearr_25879_25961 = state_25872__$1;
(statearr_25879_25961[(1)] = (30));

} else {
var statearr_25880_25962 = state_25872__$1;
(statearr_25880_25962[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (1))){
var state_25872__$1 = state_25872;
var statearr_25881_25963 = state_25872__$1;
(statearr_25881_25963[(2)] = null);

(statearr_25881_25963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (24))){
var inst_25771 = (state_25872[(7)]);
var inst_25790 = (state_25872[(2)]);
var inst_25791 = cljs.core.next(inst_25771);
var inst_25749 = inst_25791;
var inst_25750 = null;
var inst_25751 = (0);
var inst_25752 = (0);
var state_25872__$1 = (function (){var statearr_25882 = state_25872;
(statearr_25882[(13)] = inst_25750);

(statearr_25882[(14)] = inst_25749);

(statearr_25882[(15)] = inst_25752);

(statearr_25882[(16)] = inst_25751);

(statearr_25882[(17)] = inst_25790);

return statearr_25882;
})();
var statearr_25883_25964 = state_25872__$1;
(statearr_25883_25964[(2)] = null);

(statearr_25883_25964[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (39))){
var state_25872__$1 = state_25872;
var statearr_25887_25965 = state_25872__$1;
(statearr_25887_25965[(2)] = null);

(statearr_25887_25965[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (4))){
var inst_25740 = (state_25872[(9)]);
var inst_25740__$1 = (state_25872[(2)]);
var inst_25741 = (inst_25740__$1 == null);
var state_25872__$1 = (function (){var statearr_25888 = state_25872;
(statearr_25888[(9)] = inst_25740__$1);

return statearr_25888;
})();
if(cljs.core.truth_(inst_25741)){
var statearr_25889_25966 = state_25872__$1;
(statearr_25889_25966[(1)] = (5));

} else {
var statearr_25890_25967 = state_25872__$1;
(statearr_25890_25967[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (15))){
var inst_25750 = (state_25872[(13)]);
var inst_25749 = (state_25872[(14)]);
var inst_25752 = (state_25872[(15)]);
var inst_25751 = (state_25872[(16)]);
var inst_25767 = (state_25872[(2)]);
var inst_25768 = (inst_25752 + (1));
var tmp25884 = inst_25750;
var tmp25885 = inst_25749;
var tmp25886 = inst_25751;
var inst_25749__$1 = tmp25885;
var inst_25750__$1 = tmp25884;
var inst_25751__$1 = tmp25886;
var inst_25752__$1 = inst_25768;
var state_25872__$1 = (function (){var statearr_25891 = state_25872;
(statearr_25891[(13)] = inst_25750__$1);

(statearr_25891[(14)] = inst_25749__$1);

(statearr_25891[(15)] = inst_25752__$1);

(statearr_25891[(18)] = inst_25767);

(statearr_25891[(16)] = inst_25751__$1);

return statearr_25891;
})();
var statearr_25892_25968 = state_25872__$1;
(statearr_25892_25968[(2)] = null);

(statearr_25892_25968[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (21))){
var inst_25794 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25896_25969 = state_25872__$1;
(statearr_25896_25969[(2)] = inst_25794);

(statearr_25896_25969[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (31))){
var inst_25820 = (state_25872[(11)]);
var inst_25824 = done(null);
var inst_25825 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25820);
var state_25872__$1 = (function (){var statearr_25897 = state_25872;
(statearr_25897[(19)] = inst_25824);

return statearr_25897;
})();
var statearr_25898_25970 = state_25872__$1;
(statearr_25898_25970[(2)] = inst_25825);

(statearr_25898_25970[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (32))){
var inst_25812 = (state_25872[(20)]);
var inst_25814 = (state_25872[(21)]);
var inst_25813 = (state_25872[(10)]);
var inst_25815 = (state_25872[(12)]);
var inst_25827 = (state_25872[(2)]);
var inst_25828 = (inst_25815 + (1));
var tmp25893 = inst_25812;
var tmp25894 = inst_25814;
var tmp25895 = inst_25813;
var inst_25812__$1 = tmp25893;
var inst_25813__$1 = tmp25895;
var inst_25814__$1 = tmp25894;
var inst_25815__$1 = inst_25828;
var state_25872__$1 = (function (){var statearr_25899 = state_25872;
(statearr_25899[(20)] = inst_25812__$1);

(statearr_25899[(21)] = inst_25814__$1);

(statearr_25899[(10)] = inst_25813__$1);

(statearr_25899[(22)] = inst_25827);

(statearr_25899[(12)] = inst_25815__$1);

return statearr_25899;
})();
var statearr_25900_25971 = state_25872__$1;
(statearr_25900_25971[(2)] = null);

(statearr_25900_25971[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (40))){
var inst_25840 = (state_25872[(23)]);
var inst_25844 = done(null);
var inst_25845 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25840);
var state_25872__$1 = (function (){var statearr_25901 = state_25872;
(statearr_25901[(24)] = inst_25844);

return statearr_25901;
})();
var statearr_25902_25972 = state_25872__$1;
(statearr_25902_25972[(2)] = inst_25845);

(statearr_25902_25972[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (33))){
var inst_25831 = (state_25872[(25)]);
var inst_25833 = cljs.core.chunked_seq_QMARK_(inst_25831);
var state_25872__$1 = state_25872;
if(inst_25833){
var statearr_25903_25973 = state_25872__$1;
(statearr_25903_25973[(1)] = (36));

} else {
var statearr_25904_25974 = state_25872__$1;
(statearr_25904_25974[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (13))){
var inst_25761 = (state_25872[(26)]);
var inst_25764 = cljs.core.async.close_BANG_(inst_25761);
var state_25872__$1 = state_25872;
var statearr_25905_25975 = state_25872__$1;
(statearr_25905_25975[(2)] = inst_25764);

(statearr_25905_25975[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (22))){
var inst_25784 = (state_25872[(8)]);
var inst_25787 = cljs.core.async.close_BANG_(inst_25784);
var state_25872__$1 = state_25872;
var statearr_25906_25976 = state_25872__$1;
(statearr_25906_25976[(2)] = inst_25787);

(statearr_25906_25976[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (36))){
var inst_25831 = (state_25872[(25)]);
var inst_25835 = cljs.core.chunk_first(inst_25831);
var inst_25836 = cljs.core.chunk_rest(inst_25831);
var inst_25837 = cljs.core.count(inst_25835);
var inst_25812 = inst_25836;
var inst_25813 = inst_25835;
var inst_25814 = inst_25837;
var inst_25815 = (0);
var state_25872__$1 = (function (){var statearr_25907 = state_25872;
(statearr_25907[(20)] = inst_25812);

(statearr_25907[(21)] = inst_25814);

(statearr_25907[(10)] = inst_25813);

(statearr_25907[(12)] = inst_25815);

return statearr_25907;
})();
var statearr_25908_25977 = state_25872__$1;
(statearr_25908_25977[(2)] = null);

(statearr_25908_25977[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (41))){
var inst_25831 = (state_25872[(25)]);
var inst_25847 = (state_25872[(2)]);
var inst_25848 = cljs.core.next(inst_25831);
var inst_25812 = inst_25848;
var inst_25813 = null;
var inst_25814 = (0);
var inst_25815 = (0);
var state_25872__$1 = (function (){var statearr_25909 = state_25872;
(statearr_25909[(20)] = inst_25812);

(statearr_25909[(27)] = inst_25847);

(statearr_25909[(21)] = inst_25814);

(statearr_25909[(10)] = inst_25813);

(statearr_25909[(12)] = inst_25815);

return statearr_25909;
})();
var statearr_25910_25978 = state_25872__$1;
(statearr_25910_25978[(2)] = null);

(statearr_25910_25978[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (43))){
var state_25872__$1 = state_25872;
var statearr_25911_25979 = state_25872__$1;
(statearr_25911_25979[(2)] = null);

(statearr_25911_25979[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (29))){
var inst_25856 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25912_25980 = state_25872__$1;
(statearr_25912_25980[(2)] = inst_25856);

(statearr_25912_25980[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (44))){
var inst_25865 = (state_25872[(2)]);
var state_25872__$1 = (function (){var statearr_25913 = state_25872;
(statearr_25913[(28)] = inst_25865);

return statearr_25913;
})();
var statearr_25914_25981 = state_25872__$1;
(statearr_25914_25981[(2)] = null);

(statearr_25914_25981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (6))){
var inst_25804 = (state_25872[(29)]);
var inst_25803 = cljs.core.deref(cs);
var inst_25804__$1 = cljs.core.keys(inst_25803);
var inst_25805 = cljs.core.count(inst_25804__$1);
var inst_25806 = cljs.core.reset_BANG_(dctr,inst_25805);
var inst_25811 = cljs.core.seq(inst_25804__$1);
var inst_25812 = inst_25811;
var inst_25813 = null;
var inst_25814 = (0);
var inst_25815 = (0);
var state_25872__$1 = (function (){var statearr_25915 = state_25872;
(statearr_25915[(20)] = inst_25812);

(statearr_25915[(21)] = inst_25814);

(statearr_25915[(10)] = inst_25813);

(statearr_25915[(29)] = inst_25804__$1);

(statearr_25915[(30)] = inst_25806);

(statearr_25915[(12)] = inst_25815);

return statearr_25915;
})();
var statearr_25916_25982 = state_25872__$1;
(statearr_25916_25982[(2)] = null);

(statearr_25916_25982[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (28))){
var inst_25812 = (state_25872[(20)]);
var inst_25831 = (state_25872[(25)]);
var inst_25831__$1 = cljs.core.seq(inst_25812);
var state_25872__$1 = (function (){var statearr_25917 = state_25872;
(statearr_25917[(25)] = inst_25831__$1);

return statearr_25917;
})();
if(inst_25831__$1){
var statearr_25918_25983 = state_25872__$1;
(statearr_25918_25983[(1)] = (33));

} else {
var statearr_25919_25984 = state_25872__$1;
(statearr_25919_25984[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (25))){
var inst_25814 = (state_25872[(21)]);
var inst_25815 = (state_25872[(12)]);
var inst_25817 = (inst_25815 < inst_25814);
var inst_25818 = inst_25817;
var state_25872__$1 = state_25872;
if(cljs.core.truth_(inst_25818)){
var statearr_25920_25985 = state_25872__$1;
(statearr_25920_25985[(1)] = (27));

} else {
var statearr_25921_25986 = state_25872__$1;
(statearr_25921_25986[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (34))){
var state_25872__$1 = state_25872;
var statearr_25922_25987 = state_25872__$1;
(statearr_25922_25987[(2)] = null);

(statearr_25922_25987[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (17))){
var state_25872__$1 = state_25872;
var statearr_25923_25988 = state_25872__$1;
(statearr_25923_25988[(2)] = null);

(statearr_25923_25988[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (3))){
var inst_25870 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25872__$1,inst_25870);
} else {
if((state_val_25873 === (12))){
var inst_25799 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25924_25989 = state_25872__$1;
(statearr_25924_25989[(2)] = inst_25799);

(statearr_25924_25989[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (2))){
var state_25872__$1 = state_25872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25872__$1,(4),ch);
} else {
if((state_val_25873 === (23))){
var state_25872__$1 = state_25872;
var statearr_25925_25990 = state_25872__$1;
(statearr_25925_25990[(2)] = null);

(statearr_25925_25990[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (35))){
var inst_25854 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25926_25991 = state_25872__$1;
(statearr_25926_25991[(2)] = inst_25854);

(statearr_25926_25991[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (19))){
var inst_25771 = (state_25872[(7)]);
var inst_25775 = cljs.core.chunk_first(inst_25771);
var inst_25776 = cljs.core.chunk_rest(inst_25771);
var inst_25777 = cljs.core.count(inst_25775);
var inst_25749 = inst_25776;
var inst_25750 = inst_25775;
var inst_25751 = inst_25777;
var inst_25752 = (0);
var state_25872__$1 = (function (){var statearr_25927 = state_25872;
(statearr_25927[(13)] = inst_25750);

(statearr_25927[(14)] = inst_25749);

(statearr_25927[(15)] = inst_25752);

(statearr_25927[(16)] = inst_25751);

return statearr_25927;
})();
var statearr_25928_25992 = state_25872__$1;
(statearr_25928_25992[(2)] = null);

(statearr_25928_25992[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (11))){
var inst_25749 = (state_25872[(14)]);
var inst_25771 = (state_25872[(7)]);
var inst_25771__$1 = cljs.core.seq(inst_25749);
var state_25872__$1 = (function (){var statearr_25929 = state_25872;
(statearr_25929[(7)] = inst_25771__$1);

return statearr_25929;
})();
if(inst_25771__$1){
var statearr_25930_25993 = state_25872__$1;
(statearr_25930_25993[(1)] = (16));

} else {
var statearr_25931_25994 = state_25872__$1;
(statearr_25931_25994[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (9))){
var inst_25801 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25932_25995 = state_25872__$1;
(statearr_25932_25995[(2)] = inst_25801);

(statearr_25932_25995[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (5))){
var inst_25747 = cljs.core.deref(cs);
var inst_25748 = cljs.core.seq(inst_25747);
var inst_25749 = inst_25748;
var inst_25750 = null;
var inst_25751 = (0);
var inst_25752 = (0);
var state_25872__$1 = (function (){var statearr_25933 = state_25872;
(statearr_25933[(13)] = inst_25750);

(statearr_25933[(14)] = inst_25749);

(statearr_25933[(15)] = inst_25752);

(statearr_25933[(16)] = inst_25751);

return statearr_25933;
})();
var statearr_25934_25996 = state_25872__$1;
(statearr_25934_25996[(2)] = null);

(statearr_25934_25996[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (14))){
var state_25872__$1 = state_25872;
var statearr_25935_25997 = state_25872__$1;
(statearr_25935_25997[(2)] = null);

(statearr_25935_25997[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (45))){
var inst_25862 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25936_25998 = state_25872__$1;
(statearr_25936_25998[(2)] = inst_25862);

(statearr_25936_25998[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (26))){
var inst_25804 = (state_25872[(29)]);
var inst_25858 = (state_25872[(2)]);
var inst_25859 = cljs.core.seq(inst_25804);
var state_25872__$1 = (function (){var statearr_25937 = state_25872;
(statearr_25937[(31)] = inst_25858);

return statearr_25937;
})();
if(inst_25859){
var statearr_25938_25999 = state_25872__$1;
(statearr_25938_25999[(1)] = (42));

} else {
var statearr_25939_26000 = state_25872__$1;
(statearr_25939_26000[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (16))){
var inst_25771 = (state_25872[(7)]);
var inst_25773 = cljs.core.chunked_seq_QMARK_(inst_25771);
var state_25872__$1 = state_25872;
if(inst_25773){
var statearr_25940_26001 = state_25872__$1;
(statearr_25940_26001[(1)] = (19));

} else {
var statearr_25941_26002 = state_25872__$1;
(statearr_25941_26002[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (38))){
var inst_25851 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25942_26003 = state_25872__$1;
(statearr_25942_26003[(2)] = inst_25851);

(statearr_25942_26003[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (30))){
var state_25872__$1 = state_25872;
var statearr_25943_26004 = state_25872__$1;
(statearr_25943_26004[(2)] = null);

(statearr_25943_26004[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (10))){
var inst_25750 = (state_25872[(13)]);
var inst_25752 = (state_25872[(15)]);
var inst_25760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25750,inst_25752);
var inst_25761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25760,(0),null);
var inst_25762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25760,(1),null);
var state_25872__$1 = (function (){var statearr_25944 = state_25872;
(statearr_25944[(26)] = inst_25761);

return statearr_25944;
})();
if(cljs.core.truth_(inst_25762)){
var statearr_25945_26005 = state_25872__$1;
(statearr_25945_26005[(1)] = (13));

} else {
var statearr_25946_26006 = state_25872__$1;
(statearr_25946_26006[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (18))){
var inst_25797 = (state_25872[(2)]);
var state_25872__$1 = state_25872;
var statearr_25947_26007 = state_25872__$1;
(statearr_25947_26007[(2)] = inst_25797);

(statearr_25947_26007[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (42))){
var state_25872__$1 = state_25872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25872__$1,(45),dchan);
} else {
if((state_val_25873 === (37))){
var inst_25740 = (state_25872[(9)]);
var inst_25840 = (state_25872[(23)]);
var inst_25831 = (state_25872[(25)]);
var inst_25840__$1 = cljs.core.first(inst_25831);
var inst_25841 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25840__$1,inst_25740,done);
var state_25872__$1 = (function (){var statearr_25948 = state_25872;
(statearr_25948[(23)] = inst_25840__$1);

return statearr_25948;
})();
if(cljs.core.truth_(inst_25841)){
var statearr_25949_26008 = state_25872__$1;
(statearr_25949_26008[(1)] = (39));

} else {
var statearr_25950_26009 = state_25872__$1;
(statearr_25950_26009[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25873 === (8))){
var inst_25752 = (state_25872[(15)]);
var inst_25751 = (state_25872[(16)]);
var inst_25754 = (inst_25752 < inst_25751);
var inst_25755 = inst_25754;
var state_25872__$1 = state_25872;
if(cljs.core.truth_(inst_25755)){
var statearr_25951_26010 = state_25872__$1;
(statearr_25951_26010[(1)] = (10));

} else {
var statearr_25952_26011 = state_25872__$1;
(statearr_25952_26011[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__23061__auto__ = null;
var cljs$core$async$mult_$_state_machine__23061__auto____0 = (function (){
var statearr_25953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25953[(0)] = cljs$core$async$mult_$_state_machine__23061__auto__);

(statearr_25953[(1)] = (1));

return statearr_25953;
});
var cljs$core$async$mult_$_state_machine__23061__auto____1 = (function (state_25872){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_25872);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e25954){if((e25954 instanceof Object)){
var ex__23064__auto__ = e25954;
var statearr_25955_26012 = state_25872;
(statearr_25955_26012[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25872);

return cljs.core.cst$kw$recur;
} else {
throw e25954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26013 = state_25872;
state_25872 = G__26013;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23061__auto__ = function(state_25872){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23061__auto____1.call(this,state_25872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23061__auto____0;
cljs$core$async$mult_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23061__auto____1;
return cljs$core$async$mult_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_25956 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_25956[(6)] = c__23251__auto___25957);

return statearr_25956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var G__26015 = arguments.length;
switch (G__26015) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_26017 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_26017(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26018 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_26018(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26019 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26019(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26020 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_26020(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26021 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26021(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26032 = arguments.length;
var i__4737__auto___26033 = (0);
while(true){
if((i__4737__auto___26033 < len__4736__auto___26032)){
args__4742__auto__.push((arguments[i__4737__auto___26033]));

var G__26034 = (i__4737__auto___26033 + (1));
i__4737__auto___26033 = G__26034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26026){
var map__26027 = p__26026;
var map__26027__$1 = (((((!((map__26027 == null))))?(((((map__26027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26027):map__26027);
var opts = map__26027__$1;
var statearr_26029_26035 = state;
(statearr_26029_26035[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_26030_26036 = state;
(statearr_26030_26036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_26031_26037 = state;
(statearr_26031_26037[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26022){
var G__26023 = cljs.core.first(seq26022);
var seq26022__$1 = cljs.core.next(seq26022);
var G__26024 = cljs.core.first(seq26022__$1);
var seq26022__$2 = cljs.core.next(seq26022__$1);
var G__26025 = cljs.core.first(seq26022__$2);
var seq26022__$3 = cljs.core.next(seq26022__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26023,G__26024,G__26025,seq26022__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26038 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26039){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26039 = meta26039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26040,meta26039__$1){
var self__ = this;
var _26040__$1 = this;
return (new cljs.core.async.t_cljs$core$async26038(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26039__$1));
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26040){
var self__ = this;
var _26040__$1 = this;
return self__.meta26039;
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta26039], null);
}));

(cljs.core.async.t_cljs$core$async26038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26038");

(cljs.core.async.t_cljs$core$async26038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26038.
 */
cljs.core.async.__GT_t_cljs$core$async26038 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26038(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26039){
return (new cljs.core.async.t_cljs$core$async26038(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26039));
});

}

return (new cljs.core.async.t_cljs$core$async26038(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23251__auto___26202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26142){
var state_val_26143 = (state_26142[(1)]);
if((state_val_26143 === (7))){
var inst_26057 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26144_26203 = state_26142__$1;
(statearr_26144_26203[(2)] = inst_26057);

(statearr_26144_26203[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (20))){
var inst_26069 = (state_26142[(7)]);
var state_26142__$1 = state_26142;
var statearr_26145_26204 = state_26142__$1;
(statearr_26145_26204[(2)] = inst_26069);

(statearr_26145_26204[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (27))){
var state_26142__$1 = state_26142;
var statearr_26146_26205 = state_26142__$1;
(statearr_26146_26205[(2)] = null);

(statearr_26146_26205[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (1))){
var inst_26044 = (state_26142[(8)]);
var inst_26044__$1 = calc_state();
var inst_26046 = (inst_26044__$1 == null);
var inst_26047 = cljs.core.not(inst_26046);
var state_26142__$1 = (function (){var statearr_26147 = state_26142;
(statearr_26147[(8)] = inst_26044__$1);

return statearr_26147;
})();
if(inst_26047){
var statearr_26148_26206 = state_26142__$1;
(statearr_26148_26206[(1)] = (2));

} else {
var statearr_26149_26207 = state_26142__$1;
(statearr_26149_26207[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (24))){
var inst_26116 = (state_26142[(9)]);
var inst_26093 = (state_26142[(10)]);
var inst_26102 = (state_26142[(11)]);
var inst_26116__$1 = (inst_26093.cljs$core$IFn$_invoke$arity$1 ? inst_26093.cljs$core$IFn$_invoke$arity$1(inst_26102) : inst_26093.call(null,inst_26102));
var state_26142__$1 = (function (){var statearr_26150 = state_26142;
(statearr_26150[(9)] = inst_26116__$1);

return statearr_26150;
})();
if(cljs.core.truth_(inst_26116__$1)){
var statearr_26151_26208 = state_26142__$1;
(statearr_26151_26208[(1)] = (29));

} else {
var statearr_26152_26209 = state_26142__$1;
(statearr_26152_26209[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (4))){
var inst_26060 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26060)){
var statearr_26153_26210 = state_26142__$1;
(statearr_26153_26210[(1)] = (8));

} else {
var statearr_26154_26211 = state_26142__$1;
(statearr_26154_26211[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (15))){
var inst_26087 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26087)){
var statearr_26155_26212 = state_26142__$1;
(statearr_26155_26212[(1)] = (19));

} else {
var statearr_26156_26213 = state_26142__$1;
(statearr_26156_26213[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (21))){
var inst_26092 = (state_26142[(12)]);
var inst_26092__$1 = (state_26142[(2)]);
var inst_26093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26092__$1,cljs.core.cst$kw$solos);
var inst_26094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26092__$1,cljs.core.cst$kw$mutes);
var inst_26095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26092__$1,cljs.core.cst$kw$reads);
var state_26142__$1 = (function (){var statearr_26157 = state_26142;
(statearr_26157[(13)] = inst_26094);

(statearr_26157[(10)] = inst_26093);

(statearr_26157[(12)] = inst_26092__$1);

return statearr_26157;
})();
return cljs.core.async.ioc_alts_BANG_(state_26142__$1,(22),inst_26095);
} else {
if((state_val_26143 === (31))){
var inst_26124 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26124)){
var statearr_26158_26214 = state_26142__$1;
(statearr_26158_26214[(1)] = (32));

} else {
var statearr_26159_26215 = state_26142__$1;
(statearr_26159_26215[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (32))){
var inst_26101 = (state_26142[(14)]);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26142__$1,(35),out,inst_26101);
} else {
if((state_val_26143 === (33))){
var inst_26092 = (state_26142[(12)]);
var inst_26069 = inst_26092;
var state_26142__$1 = (function (){var statearr_26160 = state_26142;
(statearr_26160[(7)] = inst_26069);

return statearr_26160;
})();
var statearr_26161_26216 = state_26142__$1;
(statearr_26161_26216[(2)] = null);

(statearr_26161_26216[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (13))){
var inst_26069 = (state_26142[(7)]);
var inst_26076 = inst_26069.cljs$lang$protocol_mask$partition0$;
var inst_26077 = (inst_26076 & (64));
var inst_26078 = inst_26069.cljs$core$ISeq$;
var inst_26079 = (cljs.core.PROTOCOL_SENTINEL === inst_26078);
var inst_26080 = ((inst_26077) || (inst_26079));
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26080)){
var statearr_26162_26217 = state_26142__$1;
(statearr_26162_26217[(1)] = (16));

} else {
var statearr_26163_26218 = state_26142__$1;
(statearr_26163_26218[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (22))){
var inst_26101 = (state_26142[(14)]);
var inst_26102 = (state_26142[(11)]);
var inst_26100 = (state_26142[(2)]);
var inst_26101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26100,(0),null);
var inst_26102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26100,(1),null);
var inst_26103 = (inst_26101__$1 == null);
var inst_26104 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26102__$1,change);
var inst_26105 = ((inst_26103) || (inst_26104));
var state_26142__$1 = (function (){var statearr_26164 = state_26142;
(statearr_26164[(14)] = inst_26101__$1);

(statearr_26164[(11)] = inst_26102__$1);

return statearr_26164;
})();
if(cljs.core.truth_(inst_26105)){
var statearr_26165_26219 = state_26142__$1;
(statearr_26165_26219[(1)] = (23));

} else {
var statearr_26166_26220 = state_26142__$1;
(statearr_26166_26220[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (36))){
var inst_26092 = (state_26142[(12)]);
var inst_26069 = inst_26092;
var state_26142__$1 = (function (){var statearr_26167 = state_26142;
(statearr_26167[(7)] = inst_26069);

return statearr_26167;
})();
var statearr_26168_26221 = state_26142__$1;
(statearr_26168_26221[(2)] = null);

(statearr_26168_26221[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (29))){
var inst_26116 = (state_26142[(9)]);
var state_26142__$1 = state_26142;
var statearr_26169_26222 = state_26142__$1;
(statearr_26169_26222[(2)] = inst_26116);

(statearr_26169_26222[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (6))){
var state_26142__$1 = state_26142;
var statearr_26170_26223 = state_26142__$1;
(statearr_26170_26223[(2)] = false);

(statearr_26170_26223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (28))){
var inst_26112 = (state_26142[(2)]);
var inst_26113 = calc_state();
var inst_26069 = inst_26113;
var state_26142__$1 = (function (){var statearr_26171 = state_26142;
(statearr_26171[(15)] = inst_26112);

(statearr_26171[(7)] = inst_26069);

return statearr_26171;
})();
var statearr_26172_26224 = state_26142__$1;
(statearr_26172_26224[(2)] = null);

(statearr_26172_26224[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (25))){
var inst_26138 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26173_26225 = state_26142__$1;
(statearr_26173_26225[(2)] = inst_26138);

(statearr_26173_26225[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (34))){
var inst_26136 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26174_26226 = state_26142__$1;
(statearr_26174_26226[(2)] = inst_26136);

(statearr_26174_26226[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (17))){
var state_26142__$1 = state_26142;
var statearr_26175_26227 = state_26142__$1;
(statearr_26175_26227[(2)] = false);

(statearr_26175_26227[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (3))){
var state_26142__$1 = state_26142;
var statearr_26176_26228 = state_26142__$1;
(statearr_26176_26228[(2)] = false);

(statearr_26176_26228[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (12))){
var inst_26140 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26142__$1,inst_26140);
} else {
if((state_val_26143 === (2))){
var inst_26044 = (state_26142[(8)]);
var inst_26049 = inst_26044.cljs$lang$protocol_mask$partition0$;
var inst_26050 = (inst_26049 & (64));
var inst_26051 = inst_26044.cljs$core$ISeq$;
var inst_26052 = (cljs.core.PROTOCOL_SENTINEL === inst_26051);
var inst_26053 = ((inst_26050) || (inst_26052));
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26053)){
var statearr_26177_26229 = state_26142__$1;
(statearr_26177_26229[(1)] = (5));

} else {
var statearr_26178_26230 = state_26142__$1;
(statearr_26178_26230[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (23))){
var inst_26101 = (state_26142[(14)]);
var inst_26107 = (inst_26101 == null);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26107)){
var statearr_26179_26231 = state_26142__$1;
(statearr_26179_26231[(1)] = (26));

} else {
var statearr_26180_26232 = state_26142__$1;
(statearr_26180_26232[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (35))){
var inst_26127 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26127)){
var statearr_26181_26233 = state_26142__$1;
(statearr_26181_26233[(1)] = (36));

} else {
var statearr_26182_26234 = state_26142__$1;
(statearr_26182_26234[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (19))){
var inst_26069 = (state_26142[(7)]);
var inst_26089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26069);
var state_26142__$1 = state_26142;
var statearr_26183_26235 = state_26142__$1;
(statearr_26183_26235[(2)] = inst_26089);

(statearr_26183_26235[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (11))){
var inst_26069 = (state_26142[(7)]);
var inst_26073 = (inst_26069 == null);
var inst_26074 = cljs.core.not(inst_26073);
var state_26142__$1 = state_26142;
if(inst_26074){
var statearr_26184_26236 = state_26142__$1;
(statearr_26184_26236[(1)] = (13));

} else {
var statearr_26185_26237 = state_26142__$1;
(statearr_26185_26237[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (9))){
var inst_26044 = (state_26142[(8)]);
var state_26142__$1 = state_26142;
var statearr_26186_26238 = state_26142__$1;
(statearr_26186_26238[(2)] = inst_26044);

(statearr_26186_26238[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (5))){
var state_26142__$1 = state_26142;
var statearr_26187_26239 = state_26142__$1;
(statearr_26187_26239[(2)] = true);

(statearr_26187_26239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (14))){
var state_26142__$1 = state_26142;
var statearr_26188_26240 = state_26142__$1;
(statearr_26188_26240[(2)] = false);

(statearr_26188_26240[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (26))){
var inst_26102 = (state_26142[(11)]);
var inst_26109 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26102);
var state_26142__$1 = state_26142;
var statearr_26189_26241 = state_26142__$1;
(statearr_26189_26241[(2)] = inst_26109);

(statearr_26189_26241[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (16))){
var state_26142__$1 = state_26142;
var statearr_26190_26242 = state_26142__$1;
(statearr_26190_26242[(2)] = true);

(statearr_26190_26242[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (38))){
var inst_26132 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26191_26243 = state_26142__$1;
(statearr_26191_26243[(2)] = inst_26132);

(statearr_26191_26243[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (30))){
var inst_26094 = (state_26142[(13)]);
var inst_26093 = (state_26142[(10)]);
var inst_26102 = (state_26142[(11)]);
var inst_26119 = cljs.core.empty_QMARK_(inst_26093);
var inst_26120 = (inst_26094.cljs$core$IFn$_invoke$arity$1 ? inst_26094.cljs$core$IFn$_invoke$arity$1(inst_26102) : inst_26094.call(null,inst_26102));
var inst_26121 = cljs.core.not(inst_26120);
var inst_26122 = ((inst_26119) && (inst_26121));
var state_26142__$1 = state_26142;
var statearr_26192_26244 = state_26142__$1;
(statearr_26192_26244[(2)] = inst_26122);

(statearr_26192_26244[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (10))){
var inst_26044 = (state_26142[(8)]);
var inst_26065 = (state_26142[(2)]);
var inst_26066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26065,cljs.core.cst$kw$solos);
var inst_26067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26065,cljs.core.cst$kw$mutes);
var inst_26068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26065,cljs.core.cst$kw$reads);
var inst_26069 = inst_26044;
var state_26142__$1 = (function (){var statearr_26193 = state_26142;
(statearr_26193[(16)] = inst_26066);

(statearr_26193[(17)] = inst_26067);

(statearr_26193[(18)] = inst_26068);

(statearr_26193[(7)] = inst_26069);

return statearr_26193;
})();
var statearr_26194_26245 = state_26142__$1;
(statearr_26194_26245[(2)] = null);

(statearr_26194_26245[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (18))){
var inst_26084 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26195_26246 = state_26142__$1;
(statearr_26195_26246[(2)] = inst_26084);

(statearr_26195_26246[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (37))){
var state_26142__$1 = state_26142;
var statearr_26196_26247 = state_26142__$1;
(statearr_26196_26247[(2)] = null);

(statearr_26196_26247[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26143 === (8))){
var inst_26044 = (state_26142[(8)]);
var inst_26062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26044);
var state_26142__$1 = state_26142;
var statearr_26197_26248 = state_26142__$1;
(statearr_26197_26248[(2)] = inst_26062);

(statearr_26197_26248[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__23061__auto__ = null;
var cljs$core$async$mix_$_state_machine__23061__auto____0 = (function (){
var statearr_26198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26198[(0)] = cljs$core$async$mix_$_state_machine__23061__auto__);

(statearr_26198[(1)] = (1));

return statearr_26198;
});
var cljs$core$async$mix_$_state_machine__23061__auto____1 = (function (state_26142){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26142);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object)){
var ex__23064__auto__ = e26199;
var statearr_26200_26249 = state_26142;
(statearr_26200_26249[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26142);

return cljs.core.cst$kw$recur;
} else {
throw e26199;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26250 = state_26142;
state_26142 = G__26250;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23061__auto__ = function(state_26142){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23061__auto____1.call(this,state_26142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23061__auto____0;
cljs$core$async$mix_$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23061__auto____1;
return cljs$core$async$mix_$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26201 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26201[(6)] = c__23251__auto___26202);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_26253 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_26253(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26254 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_26254(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26255 = (function() {
var G__26256 = null;
var G__26256__1 = (function (p){
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
var G__26256__2 = (function (p,v){
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
G__26256 = function(p,v){
switch(arguments.length){
case 1:
return G__26256__1.call(this,p);
case 2:
return G__26256__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26256.cljs$core$IFn$_invoke$arity$1 = G__26256__1;
G__26256.cljs$core$IFn$_invoke$arity$2 = G__26256__2;
return G__26256;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26252 = arguments.length;
switch (G__26252) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26255.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26255.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__26260 = arguments.length;
switch (G__26260) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__26258_SHARP_){
if(cljs.core.truth_((p1__26258_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26258_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26258_SHARP_.call(null,topic)))){
return p1__26258_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26258_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26261 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26262){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26262 = meta26262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26263,meta26262__$1){
var self__ = this;
var _26263__$1 = this;
return (new cljs.core.async.t_cljs$core$async26261(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26262__$1));
}));

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26263){
var self__ = this;
var _26263__$1 = this;
return self__.meta26262;
}));

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta26262], null);
}));

(cljs.core.async.t_cljs$core$async26261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26261");

(cljs.core.async.t_cljs$core$async26261.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26261.
 */
cljs.core.async.__GT_t_cljs$core$async26261 = (function cljs$core$async$__GT_t_cljs$core$async26261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26262){
return (new cljs.core.async.t_cljs$core$async26261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26262));
});

}

return (new cljs.core.async.t_cljs$core$async26261(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23251__auto___26381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26335){
var state_val_26336 = (state_26335[(1)]);
if((state_val_26336 === (7))){
var inst_26331 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26337_26382 = state_26335__$1;
(statearr_26337_26382[(2)] = inst_26331);

(statearr_26337_26382[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (20))){
var state_26335__$1 = state_26335;
var statearr_26338_26383 = state_26335__$1;
(statearr_26338_26383[(2)] = null);

(statearr_26338_26383[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (1))){
var state_26335__$1 = state_26335;
var statearr_26339_26384 = state_26335__$1;
(statearr_26339_26384[(2)] = null);

(statearr_26339_26384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (24))){
var inst_26314 = (state_26335[(7)]);
var inst_26323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26314);
var state_26335__$1 = state_26335;
var statearr_26340_26385 = state_26335__$1;
(statearr_26340_26385[(2)] = inst_26323);

(statearr_26340_26385[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (4))){
var inst_26266 = (state_26335[(8)]);
var inst_26266__$1 = (state_26335[(2)]);
var inst_26267 = (inst_26266__$1 == null);
var state_26335__$1 = (function (){var statearr_26341 = state_26335;
(statearr_26341[(8)] = inst_26266__$1);

return statearr_26341;
})();
if(cljs.core.truth_(inst_26267)){
var statearr_26342_26386 = state_26335__$1;
(statearr_26342_26386[(1)] = (5));

} else {
var statearr_26343_26387 = state_26335__$1;
(statearr_26343_26387[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (15))){
var inst_26308 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26344_26388 = state_26335__$1;
(statearr_26344_26388[(2)] = inst_26308);

(statearr_26344_26388[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (21))){
var inst_26328 = (state_26335[(2)]);
var state_26335__$1 = (function (){var statearr_26345 = state_26335;
(statearr_26345[(9)] = inst_26328);

return statearr_26345;
})();
var statearr_26346_26389 = state_26335__$1;
(statearr_26346_26389[(2)] = null);

(statearr_26346_26389[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (13))){
var inst_26290 = (state_26335[(10)]);
var inst_26292 = cljs.core.chunked_seq_QMARK_(inst_26290);
var state_26335__$1 = state_26335;
if(inst_26292){
var statearr_26347_26390 = state_26335__$1;
(statearr_26347_26390[(1)] = (16));

} else {
var statearr_26348_26391 = state_26335__$1;
(statearr_26348_26391[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (22))){
var inst_26320 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
if(cljs.core.truth_(inst_26320)){
var statearr_26349_26392 = state_26335__$1;
(statearr_26349_26392[(1)] = (23));

} else {
var statearr_26350_26393 = state_26335__$1;
(statearr_26350_26393[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (6))){
var inst_26314 = (state_26335[(7)]);
var inst_26316 = (state_26335[(11)]);
var inst_26266 = (state_26335[(8)]);
var inst_26314__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26266) : topic_fn.call(null,inst_26266));
var inst_26315 = cljs.core.deref(mults);
var inst_26316__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26315,inst_26314__$1);
var state_26335__$1 = (function (){var statearr_26351 = state_26335;
(statearr_26351[(7)] = inst_26314__$1);

(statearr_26351[(11)] = inst_26316__$1);

return statearr_26351;
})();
if(cljs.core.truth_(inst_26316__$1)){
var statearr_26352_26394 = state_26335__$1;
(statearr_26352_26394[(1)] = (19));

} else {
var statearr_26353_26395 = state_26335__$1;
(statearr_26353_26395[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (25))){
var inst_26325 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26354_26396 = state_26335__$1;
(statearr_26354_26396[(2)] = inst_26325);

(statearr_26354_26396[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (17))){
var inst_26290 = (state_26335[(10)]);
var inst_26299 = cljs.core.first(inst_26290);
var inst_26300 = cljs.core.async.muxch_STAR_(inst_26299);
var inst_26301 = cljs.core.async.close_BANG_(inst_26300);
var inst_26302 = cljs.core.next(inst_26290);
var inst_26276 = inst_26302;
var inst_26277 = null;
var inst_26278 = (0);
var inst_26279 = (0);
var state_26335__$1 = (function (){var statearr_26355 = state_26335;
(statearr_26355[(12)] = inst_26301);

(statearr_26355[(13)] = inst_26279);

(statearr_26355[(14)] = inst_26278);

(statearr_26355[(15)] = inst_26277);

(statearr_26355[(16)] = inst_26276);

return statearr_26355;
})();
var statearr_26356_26397 = state_26335__$1;
(statearr_26356_26397[(2)] = null);

(statearr_26356_26397[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (3))){
var inst_26333 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26335__$1,inst_26333);
} else {
if((state_val_26336 === (12))){
var inst_26310 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26357_26398 = state_26335__$1;
(statearr_26357_26398[(2)] = inst_26310);

(statearr_26357_26398[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (2))){
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26335__$1,(4),ch);
} else {
if((state_val_26336 === (23))){
var state_26335__$1 = state_26335;
var statearr_26358_26399 = state_26335__$1;
(statearr_26358_26399[(2)] = null);

(statearr_26358_26399[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (19))){
var inst_26316 = (state_26335[(11)]);
var inst_26266 = (state_26335[(8)]);
var inst_26318 = cljs.core.async.muxch_STAR_(inst_26316);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26335__$1,(22),inst_26318,inst_26266);
} else {
if((state_val_26336 === (11))){
var inst_26290 = (state_26335[(10)]);
var inst_26276 = (state_26335[(16)]);
var inst_26290__$1 = cljs.core.seq(inst_26276);
var state_26335__$1 = (function (){var statearr_26359 = state_26335;
(statearr_26359[(10)] = inst_26290__$1);

return statearr_26359;
})();
if(inst_26290__$1){
var statearr_26360_26400 = state_26335__$1;
(statearr_26360_26400[(1)] = (13));

} else {
var statearr_26361_26401 = state_26335__$1;
(statearr_26361_26401[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (9))){
var inst_26312 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26362_26402 = state_26335__$1;
(statearr_26362_26402[(2)] = inst_26312);

(statearr_26362_26402[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (5))){
var inst_26273 = cljs.core.deref(mults);
var inst_26274 = cljs.core.vals(inst_26273);
var inst_26275 = cljs.core.seq(inst_26274);
var inst_26276 = inst_26275;
var inst_26277 = null;
var inst_26278 = (0);
var inst_26279 = (0);
var state_26335__$1 = (function (){var statearr_26363 = state_26335;
(statearr_26363[(13)] = inst_26279);

(statearr_26363[(14)] = inst_26278);

(statearr_26363[(15)] = inst_26277);

(statearr_26363[(16)] = inst_26276);

return statearr_26363;
})();
var statearr_26364_26403 = state_26335__$1;
(statearr_26364_26403[(2)] = null);

(statearr_26364_26403[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (14))){
var state_26335__$1 = state_26335;
var statearr_26368_26404 = state_26335__$1;
(statearr_26368_26404[(2)] = null);

(statearr_26368_26404[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (16))){
var inst_26290 = (state_26335[(10)]);
var inst_26294 = cljs.core.chunk_first(inst_26290);
var inst_26295 = cljs.core.chunk_rest(inst_26290);
var inst_26296 = cljs.core.count(inst_26294);
var inst_26276 = inst_26295;
var inst_26277 = inst_26294;
var inst_26278 = inst_26296;
var inst_26279 = (0);
var state_26335__$1 = (function (){var statearr_26369 = state_26335;
(statearr_26369[(13)] = inst_26279);

(statearr_26369[(14)] = inst_26278);

(statearr_26369[(15)] = inst_26277);

(statearr_26369[(16)] = inst_26276);

return statearr_26369;
})();
var statearr_26370_26405 = state_26335__$1;
(statearr_26370_26405[(2)] = null);

(statearr_26370_26405[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (10))){
var inst_26279 = (state_26335[(13)]);
var inst_26278 = (state_26335[(14)]);
var inst_26277 = (state_26335[(15)]);
var inst_26276 = (state_26335[(16)]);
var inst_26284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26277,inst_26279);
var inst_26285 = cljs.core.async.muxch_STAR_(inst_26284);
var inst_26286 = cljs.core.async.close_BANG_(inst_26285);
var inst_26287 = (inst_26279 + (1));
var tmp26365 = inst_26278;
var tmp26366 = inst_26277;
var tmp26367 = inst_26276;
var inst_26276__$1 = tmp26367;
var inst_26277__$1 = tmp26366;
var inst_26278__$1 = tmp26365;
var inst_26279__$1 = inst_26287;
var state_26335__$1 = (function (){var statearr_26371 = state_26335;
(statearr_26371[(13)] = inst_26279__$1);

(statearr_26371[(17)] = inst_26286);

(statearr_26371[(14)] = inst_26278__$1);

(statearr_26371[(15)] = inst_26277__$1);

(statearr_26371[(16)] = inst_26276__$1);

return statearr_26371;
})();
var statearr_26372_26406 = state_26335__$1;
(statearr_26372_26406[(2)] = null);

(statearr_26372_26406[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (18))){
var inst_26305 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26373_26407 = state_26335__$1;
(statearr_26373_26407[(2)] = inst_26305);

(statearr_26373_26407[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26336 === (8))){
var inst_26279 = (state_26335[(13)]);
var inst_26278 = (state_26335[(14)]);
var inst_26281 = (inst_26279 < inst_26278);
var inst_26282 = inst_26281;
var state_26335__$1 = state_26335;
if(cljs.core.truth_(inst_26282)){
var statearr_26374_26408 = state_26335__$1;
(statearr_26374_26408[(1)] = (10));

} else {
var statearr_26375_26409 = state_26335__$1;
(statearr_26375_26409[(1)] = (11));

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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26335){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26335);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__23064__auto__ = e26377;
var statearr_26378_26410 = state_26335;
(statearr_26378_26410[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26335);

return cljs.core.cst$kw$recur;
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26411 = state_26335;
state_26335 = G__26411;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26379 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26379[(6)] = c__23251__auto___26381);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var G__26413 = arguments.length;
switch (G__26413) {
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
var G__26416 = arguments.length;
switch (G__26416) {
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
var G__26419 = arguments.length;
switch (G__26419) {
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
var c__23251__auto___26486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26458){
var state_val_26459 = (state_26458[(1)]);
if((state_val_26459 === (7))){
var state_26458__$1 = state_26458;
var statearr_26460_26487 = state_26458__$1;
(statearr_26460_26487[(2)] = null);

(statearr_26460_26487[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (1))){
var state_26458__$1 = state_26458;
var statearr_26461_26488 = state_26458__$1;
(statearr_26461_26488[(2)] = null);

(statearr_26461_26488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (4))){
var inst_26422 = (state_26458[(7)]);
var inst_26424 = (inst_26422 < cnt);
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26424)){
var statearr_26462_26489 = state_26458__$1;
(statearr_26462_26489[(1)] = (6));

} else {
var statearr_26463_26490 = state_26458__$1;
(statearr_26463_26490[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (15))){
var inst_26454 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26464_26491 = state_26458__$1;
(statearr_26464_26491[(2)] = inst_26454);

(statearr_26464_26491[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (13))){
var inst_26447 = cljs.core.async.close_BANG_(out);
var state_26458__$1 = state_26458;
var statearr_26465_26492 = state_26458__$1;
(statearr_26465_26492[(2)] = inst_26447);

(statearr_26465_26492[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (6))){
var state_26458__$1 = state_26458;
var statearr_26466_26493 = state_26458__$1;
(statearr_26466_26493[(2)] = null);

(statearr_26466_26493[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (3))){
var inst_26456 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26458__$1,inst_26456);
} else {
if((state_val_26459 === (12))){
var inst_26444 = (state_26458[(8)]);
var inst_26444__$1 = (state_26458[(2)]);
var inst_26445 = cljs.core.some(cljs.core.nil_QMARK_,inst_26444__$1);
var state_26458__$1 = (function (){var statearr_26467 = state_26458;
(statearr_26467[(8)] = inst_26444__$1);

return statearr_26467;
})();
if(cljs.core.truth_(inst_26445)){
var statearr_26468_26494 = state_26458__$1;
(statearr_26468_26494[(1)] = (13));

} else {
var statearr_26469_26495 = state_26458__$1;
(statearr_26469_26495[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (2))){
var inst_26421 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26422 = (0);
var state_26458__$1 = (function (){var statearr_26470 = state_26458;
(statearr_26470[(9)] = inst_26421);

(statearr_26470[(7)] = inst_26422);

return statearr_26470;
})();
var statearr_26471_26496 = state_26458__$1;
(statearr_26471_26496[(2)] = null);

(statearr_26471_26496[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (11))){
var inst_26422 = (state_26458[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26458,(10),Object,null,(9));
var inst_26431 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26422) : chs__$1.call(null,inst_26422));
var inst_26432 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26422) : done.call(null,inst_26422));
var inst_26433 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26431,inst_26432);
var state_26458__$1 = state_26458;
var statearr_26472_26497 = state_26458__$1;
(statearr_26472_26497[(2)] = inst_26433);


cljs.core.async.impl.ioc_helpers.process_exception(state_26458__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (9))){
var inst_26422 = (state_26458[(7)]);
var inst_26435 = (state_26458[(2)]);
var inst_26436 = (inst_26422 + (1));
var inst_26422__$1 = inst_26436;
var state_26458__$1 = (function (){var statearr_26473 = state_26458;
(statearr_26473[(7)] = inst_26422__$1);

(statearr_26473[(10)] = inst_26435);

return statearr_26473;
})();
var statearr_26474_26498 = state_26458__$1;
(statearr_26474_26498[(2)] = null);

(statearr_26474_26498[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (5))){
var inst_26442 = (state_26458[(2)]);
var state_26458__$1 = (function (){var statearr_26475 = state_26458;
(statearr_26475[(11)] = inst_26442);

return statearr_26475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26458__$1,(12),dchan);
} else {
if((state_val_26459 === (14))){
var inst_26444 = (state_26458[(8)]);
var inst_26449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26444);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26458__$1,(16),out,inst_26449);
} else {
if((state_val_26459 === (16))){
var inst_26451 = (state_26458[(2)]);
var state_26458__$1 = (function (){var statearr_26476 = state_26458;
(statearr_26476[(12)] = inst_26451);

return statearr_26476;
})();
var statearr_26477_26499 = state_26458__$1;
(statearr_26477_26499[(2)] = null);

(statearr_26477_26499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (10))){
var inst_26426 = (state_26458[(2)]);
var inst_26427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26458__$1 = (function (){var statearr_26478 = state_26458;
(statearr_26478[(13)] = inst_26426);

return statearr_26478;
})();
var statearr_26479_26500 = state_26458__$1;
(statearr_26479_26500[(2)] = inst_26427);


cljs.core.async.impl.ioc_helpers.process_exception(state_26458__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26459 === (8))){
var inst_26440 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26480_26501 = state_26458__$1;
(statearr_26480_26501[(2)] = inst_26440);

(statearr_26480_26501[(1)] = (5));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26481[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26481[(1)] = (1));

return statearr_26481;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26458){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26458);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26482){if((e26482 instanceof Object)){
var ex__23064__auto__ = e26482;
var statearr_26483_26502 = state_26458;
(statearr_26483_26502[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26458);

return cljs.core.cst$kw$recur;
} else {
throw e26482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26503 = state_26458;
state_26458 = G__26503;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26484 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26484[(6)] = c__23251__auto___26486);

return statearr_26484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var G__26506 = arguments.length;
switch (G__26506) {
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
var c__23251__auto___26560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26538){
var state_val_26539 = (state_26538[(1)]);
if((state_val_26539 === (7))){
var inst_26517 = (state_26538[(7)]);
var inst_26518 = (state_26538[(8)]);
var inst_26517__$1 = (state_26538[(2)]);
var inst_26518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26517__$1,(0),null);
var inst_26519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26517__$1,(1),null);
var inst_26520 = (inst_26518__$1 == null);
var state_26538__$1 = (function (){var statearr_26540 = state_26538;
(statearr_26540[(9)] = inst_26519);

(statearr_26540[(7)] = inst_26517__$1);

(statearr_26540[(8)] = inst_26518__$1);

return statearr_26540;
})();
if(cljs.core.truth_(inst_26520)){
var statearr_26541_26561 = state_26538__$1;
(statearr_26541_26561[(1)] = (8));

} else {
var statearr_26542_26562 = state_26538__$1;
(statearr_26542_26562[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (1))){
var inst_26507 = cljs.core.vec(chs);
var inst_26508 = inst_26507;
var state_26538__$1 = (function (){var statearr_26543 = state_26538;
(statearr_26543[(10)] = inst_26508);

return statearr_26543;
})();
var statearr_26544_26563 = state_26538__$1;
(statearr_26544_26563[(2)] = null);

(statearr_26544_26563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (4))){
var inst_26508 = (state_26538[(10)]);
var state_26538__$1 = state_26538;
return cljs.core.async.ioc_alts_BANG_(state_26538__$1,(7),inst_26508);
} else {
if((state_val_26539 === (6))){
var inst_26534 = (state_26538[(2)]);
var state_26538__$1 = state_26538;
var statearr_26545_26564 = state_26538__$1;
(statearr_26545_26564[(2)] = inst_26534);

(statearr_26545_26564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (3))){
var inst_26536 = (state_26538[(2)]);
var state_26538__$1 = state_26538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26538__$1,inst_26536);
} else {
if((state_val_26539 === (2))){
var inst_26508 = (state_26538[(10)]);
var inst_26510 = cljs.core.count(inst_26508);
var inst_26511 = (inst_26510 > (0));
var state_26538__$1 = state_26538;
if(cljs.core.truth_(inst_26511)){
var statearr_26547_26565 = state_26538__$1;
(statearr_26547_26565[(1)] = (4));

} else {
var statearr_26548_26566 = state_26538__$1;
(statearr_26548_26566[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (11))){
var inst_26508 = (state_26538[(10)]);
var inst_26527 = (state_26538[(2)]);
var tmp26546 = inst_26508;
var inst_26508__$1 = tmp26546;
var state_26538__$1 = (function (){var statearr_26549 = state_26538;
(statearr_26549[(11)] = inst_26527);

(statearr_26549[(10)] = inst_26508__$1);

return statearr_26549;
})();
var statearr_26550_26567 = state_26538__$1;
(statearr_26550_26567[(2)] = null);

(statearr_26550_26567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (9))){
var inst_26518 = (state_26538[(8)]);
var state_26538__$1 = state_26538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26538__$1,(11),out,inst_26518);
} else {
if((state_val_26539 === (5))){
var inst_26532 = cljs.core.async.close_BANG_(out);
var state_26538__$1 = state_26538;
var statearr_26551_26568 = state_26538__$1;
(statearr_26551_26568[(2)] = inst_26532);

(statearr_26551_26568[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (10))){
var inst_26530 = (state_26538[(2)]);
var state_26538__$1 = state_26538;
var statearr_26552_26569 = state_26538__$1;
(statearr_26552_26569[(2)] = inst_26530);

(statearr_26552_26569[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26539 === (8))){
var inst_26519 = (state_26538[(9)]);
var inst_26517 = (state_26538[(7)]);
var inst_26518 = (state_26538[(8)]);
var inst_26508 = (state_26538[(10)]);
var inst_26522 = (function (){var cs = inst_26508;
var vec__26513 = inst_26517;
var v = inst_26518;
var c = inst_26519;
return (function (p1__26504_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26504_SHARP_);
});
})();
var inst_26523 = cljs.core.filterv(inst_26522,inst_26508);
var inst_26508__$1 = inst_26523;
var state_26538__$1 = (function (){var statearr_26553 = state_26538;
(statearr_26553[(10)] = inst_26508__$1);

return statearr_26553;
})();
var statearr_26554_26570 = state_26538__$1;
(statearr_26554_26570[(2)] = null);

(statearr_26554_26570[(1)] = (2));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26555[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26555[(1)] = (1));

return statearr_26555;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26538){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26538);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26556){if((e26556 instanceof Object)){
var ex__23064__auto__ = e26556;
var statearr_26557_26571 = state_26538;
(statearr_26557_26571[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26538);

return cljs.core.cst$kw$recur;
} else {
throw e26556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26572 = state_26538;
state_26538 = G__26572;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26558 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26558[(6)] = c__23251__auto___26560);

return statearr_26558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
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
var G__26574 = arguments.length;
switch (G__26574) {
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
var c__23251__auto___26619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26598){
var state_val_26599 = (state_26598[(1)]);
if((state_val_26599 === (7))){
var inst_26580 = (state_26598[(7)]);
var inst_26580__$1 = (state_26598[(2)]);
var inst_26581 = (inst_26580__$1 == null);
var inst_26582 = cljs.core.not(inst_26581);
var state_26598__$1 = (function (){var statearr_26600 = state_26598;
(statearr_26600[(7)] = inst_26580__$1);

return statearr_26600;
})();
if(inst_26582){
var statearr_26601_26620 = state_26598__$1;
(statearr_26601_26620[(1)] = (8));

} else {
var statearr_26602_26621 = state_26598__$1;
(statearr_26602_26621[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (1))){
var inst_26575 = (0);
var state_26598__$1 = (function (){var statearr_26603 = state_26598;
(statearr_26603[(8)] = inst_26575);

return statearr_26603;
})();
var statearr_26604_26622 = state_26598__$1;
(statearr_26604_26622[(2)] = null);

(statearr_26604_26622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (4))){
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26598__$1,(7),ch);
} else {
if((state_val_26599 === (6))){
var inst_26593 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26605_26623 = state_26598__$1;
(statearr_26605_26623[(2)] = inst_26593);

(statearr_26605_26623[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (3))){
var inst_26595 = (state_26598[(2)]);
var inst_26596 = cljs.core.async.close_BANG_(out);
var state_26598__$1 = (function (){var statearr_26606 = state_26598;
(statearr_26606[(9)] = inst_26595);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26598__$1,inst_26596);
} else {
if((state_val_26599 === (2))){
var inst_26575 = (state_26598[(8)]);
var inst_26577 = (inst_26575 < n);
var state_26598__$1 = state_26598;
if(cljs.core.truth_(inst_26577)){
var statearr_26607_26624 = state_26598__$1;
(statearr_26607_26624[(1)] = (4));

} else {
var statearr_26608_26625 = state_26598__$1;
(statearr_26608_26625[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (11))){
var inst_26575 = (state_26598[(8)]);
var inst_26585 = (state_26598[(2)]);
var inst_26586 = (inst_26575 + (1));
var inst_26575__$1 = inst_26586;
var state_26598__$1 = (function (){var statearr_26609 = state_26598;
(statearr_26609[(8)] = inst_26575__$1);

(statearr_26609[(10)] = inst_26585);

return statearr_26609;
})();
var statearr_26610_26626 = state_26598__$1;
(statearr_26610_26626[(2)] = null);

(statearr_26610_26626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (9))){
var state_26598__$1 = state_26598;
var statearr_26611_26627 = state_26598__$1;
(statearr_26611_26627[(2)] = null);

(statearr_26611_26627[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (5))){
var state_26598__$1 = state_26598;
var statearr_26612_26628 = state_26598__$1;
(statearr_26612_26628[(2)] = null);

(statearr_26612_26628[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (10))){
var inst_26590 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26613_26629 = state_26598__$1;
(statearr_26613_26629[(2)] = inst_26590);

(statearr_26613_26629[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26599 === (8))){
var inst_26580 = (state_26598[(7)]);
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26598__$1,(11),out,inst_26580);
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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26598){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26598);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object)){
var ex__23064__auto__ = e26615;
var statearr_26616_26630 = state_26598;
(statearr_26616_26630[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26598);

return cljs.core.cst$kw$recur;
} else {
throw e26615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26631 = state_26598;
state_26598 = G__26631;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26617 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26617[(6)] = c__23251__auto___26619);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26633 = (function (f,ch,meta26634){
this.f = f;
this.ch = ch;
this.meta26634 = meta26634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26635,meta26634__$1){
var self__ = this;
var _26635__$1 = this;
return (new cljs.core.async.t_cljs$core$async26633(self__.f,self__.ch,meta26634__$1));
}));

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26635){
var self__ = this;
var _26635__$1 = this;
return self__.meta26634;
}));

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26636 = (function (f,ch,meta26634,_,fn1,meta26637){
this.f = f;
this.ch = ch;
this.meta26634 = meta26634;
this._ = _;
this.fn1 = fn1;
this.meta26637 = meta26637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26638,meta26637__$1){
var self__ = this;
var _26638__$1 = this;
return (new cljs.core.async.t_cljs$core$async26636(self__.f,self__.ch,self__.meta26634,self__._,self__.fn1,meta26637__$1));
}));

(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26638){
var self__ = this;
var _26638__$1 = this;
return self__.meta26637;
}));

(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__26632_SHARP_){
var G__26639 = (((p1__26632_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26632_SHARP_) : self__.f.call(null,p1__26632_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26639) : f1.call(null,G__26639));
});
}));

(cljs.core.async.t_cljs$core$async26636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26634,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26633], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26637], null);
}));

(cljs.core.async.t_cljs$core$async26636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26636");

(cljs.core.async.t_cljs$core$async26636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26636.
 */
cljs.core.async.__GT_t_cljs$core$async26636 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26636(f__$1,ch__$1,meta26634__$1,___$2,fn1__$1,meta26637){
return (new cljs.core.async.t_cljs$core$async26636(f__$1,ch__$1,meta26634__$1,___$2,fn1__$1,meta26637));
});

}

return (new cljs.core.async.t_cljs$core$async26636(self__.f,self__.ch,self__.meta26634,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26640 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26640) : self__.f.call(null,G__26640));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26634], null);
}));

(cljs.core.async.t_cljs$core$async26633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26633");

(cljs.core.async.t_cljs$core$async26633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26633.
 */
cljs.core.async.__GT_t_cljs$core$async26633 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26633(f__$1,ch__$1,meta26634){
return (new cljs.core.async.t_cljs$core$async26633(f__$1,ch__$1,meta26634));
});

}

return (new cljs.core.async.t_cljs$core$async26633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26641 = (function (f,ch,meta26642){
this.f = f;
this.ch = ch;
this.meta26642 = meta26642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26643,meta26642__$1){
var self__ = this;
var _26643__$1 = this;
return (new cljs.core.async.t_cljs$core$async26641(self__.f,self__.ch,meta26642__$1));
}));

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26643){
var self__ = this;
var _26643__$1 = this;
return self__.meta26642;
}));

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async26641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26642], null);
}));

(cljs.core.async.t_cljs$core$async26641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26641");

(cljs.core.async.t_cljs$core$async26641.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26641.
 */
cljs.core.async.__GT_t_cljs$core$async26641 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26641(f__$1,ch__$1,meta26642){
return (new cljs.core.async.t_cljs$core$async26641(f__$1,ch__$1,meta26642));
});

}

return (new cljs.core.async.t_cljs$core$async26641(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26644 = (function (p,ch,meta26645){
this.p = p;
this.ch = ch;
this.meta26645 = meta26645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26646,meta26645__$1){
var self__ = this;
var _26646__$1 = this;
return (new cljs.core.async.t_cljs$core$async26644(self__.p,self__.ch,meta26645__$1));
}));

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26646){
var self__ = this;
var _26646__$1 = this;
return self__.meta26645;
}));

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26645], null);
}));

(cljs.core.async.t_cljs$core$async26644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26644");

(cljs.core.async.t_cljs$core$async26644.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26644.
 */
cljs.core.async.__GT_t_cljs$core$async26644 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26644(p__$1,ch__$1,meta26645){
return (new cljs.core.async.t_cljs$core$async26644(p__$1,ch__$1,meta26645));
});

}

return (new cljs.core.async.t_cljs$core$async26644(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26648 = arguments.length;
switch (G__26648) {
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
var c__23251__auto___26688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26669){
var state_val_26670 = (state_26669[(1)]);
if((state_val_26670 === (7))){
var inst_26665 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26671_26689 = state_26669__$1;
(statearr_26671_26689[(2)] = inst_26665);

(statearr_26671_26689[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (1))){
var state_26669__$1 = state_26669;
var statearr_26672_26690 = state_26669__$1;
(statearr_26672_26690[(2)] = null);

(statearr_26672_26690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (4))){
var inst_26651 = (state_26669[(7)]);
var inst_26651__$1 = (state_26669[(2)]);
var inst_26652 = (inst_26651__$1 == null);
var state_26669__$1 = (function (){var statearr_26673 = state_26669;
(statearr_26673[(7)] = inst_26651__$1);

return statearr_26673;
})();
if(cljs.core.truth_(inst_26652)){
var statearr_26674_26691 = state_26669__$1;
(statearr_26674_26691[(1)] = (5));

} else {
var statearr_26675_26692 = state_26669__$1;
(statearr_26675_26692[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (6))){
var inst_26651 = (state_26669[(7)]);
var inst_26656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26651) : p.call(null,inst_26651));
var state_26669__$1 = state_26669;
if(cljs.core.truth_(inst_26656)){
var statearr_26676_26693 = state_26669__$1;
(statearr_26676_26693[(1)] = (8));

} else {
var statearr_26677_26694 = state_26669__$1;
(statearr_26677_26694[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (3))){
var inst_26667 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26669__$1,inst_26667);
} else {
if((state_val_26670 === (2))){
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26669__$1,(4),ch);
} else {
if((state_val_26670 === (11))){
var inst_26659 = (state_26669[(2)]);
var state_26669__$1 = state_26669;
var statearr_26678_26695 = state_26669__$1;
(statearr_26678_26695[(2)] = inst_26659);

(statearr_26678_26695[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (9))){
var state_26669__$1 = state_26669;
var statearr_26679_26696 = state_26669__$1;
(statearr_26679_26696[(2)] = null);

(statearr_26679_26696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (5))){
var inst_26654 = cljs.core.async.close_BANG_(out);
var state_26669__$1 = state_26669;
var statearr_26680_26697 = state_26669__$1;
(statearr_26680_26697[(2)] = inst_26654);

(statearr_26680_26697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (10))){
var inst_26662 = (state_26669[(2)]);
var state_26669__$1 = (function (){var statearr_26681 = state_26669;
(statearr_26681[(8)] = inst_26662);

return statearr_26681;
})();
var statearr_26682_26698 = state_26669__$1;
(statearr_26682_26698[(2)] = null);

(statearr_26682_26698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26670 === (8))){
var inst_26651 = (state_26669[(7)]);
var state_26669__$1 = state_26669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26669__$1,(11),out,inst_26651);
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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26683 = [null,null,null,null,null,null,null,null,null];
(statearr_26683[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26683[(1)] = (1));

return statearr_26683;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26669){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26669);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26684){if((e26684 instanceof Object)){
var ex__23064__auto__ = e26684;
var statearr_26685_26699 = state_26669;
(statearr_26685_26699[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26669);

return cljs.core.cst$kw$recur;
} else {
throw e26684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26700 = state_26669;
state_26669 = G__26700;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26686 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26686[(6)] = c__23251__auto___26688);

return statearr_26686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26702 = arguments.length;
switch (G__26702) {
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
var c__23251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26765){
var state_val_26766 = (state_26765[(1)]);
if((state_val_26766 === (7))){
var inst_26761 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
var statearr_26767_26805 = state_26765__$1;
(statearr_26767_26805[(2)] = inst_26761);

(statearr_26767_26805[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (20))){
var inst_26731 = (state_26765[(7)]);
var inst_26742 = (state_26765[(2)]);
var inst_26743 = cljs.core.next(inst_26731);
var inst_26717 = inst_26743;
var inst_26718 = null;
var inst_26719 = (0);
var inst_26720 = (0);
var state_26765__$1 = (function (){var statearr_26768 = state_26765;
(statearr_26768[(8)] = inst_26717);

(statearr_26768[(9)] = inst_26719);

(statearr_26768[(10)] = inst_26742);

(statearr_26768[(11)] = inst_26720);

(statearr_26768[(12)] = inst_26718);

return statearr_26768;
})();
var statearr_26769_26806 = state_26765__$1;
(statearr_26769_26806[(2)] = null);

(statearr_26769_26806[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (1))){
var state_26765__$1 = state_26765;
var statearr_26770_26807 = state_26765__$1;
(statearr_26770_26807[(2)] = null);

(statearr_26770_26807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (4))){
var inst_26706 = (state_26765[(13)]);
var inst_26706__$1 = (state_26765[(2)]);
var inst_26707 = (inst_26706__$1 == null);
var state_26765__$1 = (function (){var statearr_26771 = state_26765;
(statearr_26771[(13)] = inst_26706__$1);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26707)){
var statearr_26772_26808 = state_26765__$1;
(statearr_26772_26808[(1)] = (5));

} else {
var statearr_26773_26809 = state_26765__$1;
(statearr_26773_26809[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (15))){
var state_26765__$1 = state_26765;
var statearr_26777_26810 = state_26765__$1;
(statearr_26777_26810[(2)] = null);

(statearr_26777_26810[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (21))){
var state_26765__$1 = state_26765;
var statearr_26778_26811 = state_26765__$1;
(statearr_26778_26811[(2)] = null);

(statearr_26778_26811[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (13))){
var inst_26717 = (state_26765[(8)]);
var inst_26719 = (state_26765[(9)]);
var inst_26720 = (state_26765[(11)]);
var inst_26718 = (state_26765[(12)]);
var inst_26727 = (state_26765[(2)]);
var inst_26728 = (inst_26720 + (1));
var tmp26774 = inst_26717;
var tmp26775 = inst_26719;
var tmp26776 = inst_26718;
var inst_26717__$1 = tmp26774;
var inst_26718__$1 = tmp26776;
var inst_26719__$1 = tmp26775;
var inst_26720__$1 = inst_26728;
var state_26765__$1 = (function (){var statearr_26779 = state_26765;
(statearr_26779[(8)] = inst_26717__$1);

(statearr_26779[(14)] = inst_26727);

(statearr_26779[(9)] = inst_26719__$1);

(statearr_26779[(11)] = inst_26720__$1);

(statearr_26779[(12)] = inst_26718__$1);

return statearr_26779;
})();
var statearr_26780_26812 = state_26765__$1;
(statearr_26780_26812[(2)] = null);

(statearr_26780_26812[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (22))){
var state_26765__$1 = state_26765;
var statearr_26781_26813 = state_26765__$1;
(statearr_26781_26813[(2)] = null);

(statearr_26781_26813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (6))){
var inst_26706 = (state_26765[(13)]);
var inst_26715 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26706) : f.call(null,inst_26706));
var inst_26716 = cljs.core.seq(inst_26715);
var inst_26717 = inst_26716;
var inst_26718 = null;
var inst_26719 = (0);
var inst_26720 = (0);
var state_26765__$1 = (function (){var statearr_26782 = state_26765;
(statearr_26782[(8)] = inst_26717);

(statearr_26782[(9)] = inst_26719);

(statearr_26782[(11)] = inst_26720);

(statearr_26782[(12)] = inst_26718);

return statearr_26782;
})();
var statearr_26783_26814 = state_26765__$1;
(statearr_26783_26814[(2)] = null);

(statearr_26783_26814[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (17))){
var inst_26731 = (state_26765[(7)]);
var inst_26735 = cljs.core.chunk_first(inst_26731);
var inst_26736 = cljs.core.chunk_rest(inst_26731);
var inst_26737 = cljs.core.count(inst_26735);
var inst_26717 = inst_26736;
var inst_26718 = inst_26735;
var inst_26719 = inst_26737;
var inst_26720 = (0);
var state_26765__$1 = (function (){var statearr_26784 = state_26765;
(statearr_26784[(8)] = inst_26717);

(statearr_26784[(9)] = inst_26719);

(statearr_26784[(11)] = inst_26720);

(statearr_26784[(12)] = inst_26718);

return statearr_26784;
})();
var statearr_26785_26815 = state_26765__$1;
(statearr_26785_26815[(2)] = null);

(statearr_26785_26815[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (3))){
var inst_26763 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26765__$1,inst_26763);
} else {
if((state_val_26766 === (12))){
var inst_26751 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
var statearr_26786_26816 = state_26765__$1;
(statearr_26786_26816[(2)] = inst_26751);

(statearr_26786_26816[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (2))){
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26765__$1,(4),in$);
} else {
if((state_val_26766 === (23))){
var inst_26759 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
var statearr_26787_26817 = state_26765__$1;
(statearr_26787_26817[(2)] = inst_26759);

(statearr_26787_26817[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (19))){
var inst_26746 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
var statearr_26788_26818 = state_26765__$1;
(statearr_26788_26818[(2)] = inst_26746);

(statearr_26788_26818[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (11))){
var inst_26717 = (state_26765[(8)]);
var inst_26731 = (state_26765[(7)]);
var inst_26731__$1 = cljs.core.seq(inst_26717);
var state_26765__$1 = (function (){var statearr_26789 = state_26765;
(statearr_26789[(7)] = inst_26731__$1);

return statearr_26789;
})();
if(inst_26731__$1){
var statearr_26790_26819 = state_26765__$1;
(statearr_26790_26819[(1)] = (14));

} else {
var statearr_26791_26820 = state_26765__$1;
(statearr_26791_26820[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (9))){
var inst_26753 = (state_26765[(2)]);
var inst_26754 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26765__$1 = (function (){var statearr_26792 = state_26765;
(statearr_26792[(15)] = inst_26753);

return statearr_26792;
})();
if(cljs.core.truth_(inst_26754)){
var statearr_26793_26821 = state_26765__$1;
(statearr_26793_26821[(1)] = (21));

} else {
var statearr_26794_26822 = state_26765__$1;
(statearr_26794_26822[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (5))){
var inst_26709 = cljs.core.async.close_BANG_(out);
var state_26765__$1 = state_26765;
var statearr_26795_26823 = state_26765__$1;
(statearr_26795_26823[(2)] = inst_26709);

(statearr_26795_26823[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (14))){
var inst_26731 = (state_26765[(7)]);
var inst_26733 = cljs.core.chunked_seq_QMARK_(inst_26731);
var state_26765__$1 = state_26765;
if(inst_26733){
var statearr_26796_26824 = state_26765__$1;
(statearr_26796_26824[(1)] = (17));

} else {
var statearr_26797_26825 = state_26765__$1;
(statearr_26797_26825[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (16))){
var inst_26749 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
var statearr_26798_26826 = state_26765__$1;
(statearr_26798_26826[(2)] = inst_26749);

(statearr_26798_26826[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26766 === (10))){
var inst_26720 = (state_26765[(11)]);
var inst_26718 = (state_26765[(12)]);
var inst_26725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26718,inst_26720);
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26765__$1,(13),out,inst_26725);
} else {
if((state_val_26766 === (18))){
var inst_26731 = (state_26765[(7)]);
var inst_26740 = cljs.core.first(inst_26731);
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26765__$1,(20),out,inst_26740);
} else {
if((state_val_26766 === (8))){
var inst_26719 = (state_26765[(9)]);
var inst_26720 = (state_26765[(11)]);
var inst_26722 = (inst_26720 < inst_26719);
var inst_26723 = inst_26722;
var state_26765__$1 = state_26765;
if(cljs.core.truth_(inst_26723)){
var statearr_26799_26827 = state_26765__$1;
(statearr_26799_26827[(1)] = (10));

} else {
var statearr_26800_26828 = state_26765__$1;
(statearr_26800_26828[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____0 = (function (){
var statearr_26801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__);

(statearr_26801[(1)] = (1));

return statearr_26801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____1 = (function (state_26765){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26765);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26802){if((e26802 instanceof Object)){
var ex__23064__auto__ = e26802;
var statearr_26803_26829 = state_26765;
(statearr_26803_26829[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26765);

return cljs.core.cst$kw$recur;
} else {
throw e26802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26830 = state_26765;
state_26765 = G__26830;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__ = function(state_26765){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____1.call(this,state_26765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23061__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26804 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26804[(6)] = c__23251__auto__);

return statearr_26804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));

return c__23251__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26832 = arguments.length;
switch (G__26832) {
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
var G__26835 = arguments.length;
switch (G__26835) {
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
var G__26838 = arguments.length;
switch (G__26838) {
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
var c__23251__auto___26885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (7))){
var inst_26857 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26864_26886 = state_26862__$1;
(statearr_26864_26886[(2)] = inst_26857);

(statearr_26864_26886[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (1))){
var inst_26839 = null;
var state_26862__$1 = (function (){var statearr_26865 = state_26862;
(statearr_26865[(7)] = inst_26839);

return statearr_26865;
})();
var statearr_26866_26887 = state_26862__$1;
(statearr_26866_26887[(2)] = null);

(statearr_26866_26887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (4))){
var inst_26842 = (state_26862[(8)]);
var inst_26842__$1 = (state_26862[(2)]);
var inst_26843 = (inst_26842__$1 == null);
var inst_26844 = cljs.core.not(inst_26843);
var state_26862__$1 = (function (){var statearr_26867 = state_26862;
(statearr_26867[(8)] = inst_26842__$1);

return statearr_26867;
})();
if(inst_26844){
var statearr_26868_26888 = state_26862__$1;
(statearr_26868_26888[(1)] = (5));

} else {
var statearr_26869_26889 = state_26862__$1;
(statearr_26869_26889[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (6))){
var state_26862__$1 = state_26862;
var statearr_26870_26890 = state_26862__$1;
(statearr_26870_26890[(2)] = null);

(statearr_26870_26890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (3))){
var inst_26859 = (state_26862[(2)]);
var inst_26860 = cljs.core.async.close_BANG_(out);
var state_26862__$1 = (function (){var statearr_26871 = state_26862;
(statearr_26871[(9)] = inst_26859);

return statearr_26871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (2))){
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26862__$1,(4),ch);
} else {
if((state_val_26863 === (11))){
var inst_26842 = (state_26862[(8)]);
var inst_26851 = (state_26862[(2)]);
var inst_26839 = inst_26842;
var state_26862__$1 = (function (){var statearr_26872 = state_26862;
(statearr_26872[(10)] = inst_26851);

(statearr_26872[(7)] = inst_26839);

return statearr_26872;
})();
var statearr_26873_26891 = state_26862__$1;
(statearr_26873_26891[(2)] = null);

(statearr_26873_26891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (9))){
var inst_26842 = (state_26862[(8)]);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26862__$1,(11),out,inst_26842);
} else {
if((state_val_26863 === (5))){
var inst_26842 = (state_26862[(8)]);
var inst_26839 = (state_26862[(7)]);
var inst_26846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26842,inst_26839);
var state_26862__$1 = state_26862;
if(inst_26846){
var statearr_26875_26892 = state_26862__$1;
(statearr_26875_26892[(1)] = (8));

} else {
var statearr_26876_26893 = state_26862__$1;
(statearr_26876_26893[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (10))){
var inst_26854 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26877_26894 = state_26862__$1;
(statearr_26877_26894[(2)] = inst_26854);

(statearr_26877_26894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26863 === (8))){
var inst_26839 = (state_26862[(7)]);
var tmp26874 = inst_26839;
var inst_26839__$1 = tmp26874;
var state_26862__$1 = (function (){var statearr_26878 = state_26862;
(statearr_26878[(7)] = inst_26839__$1);

return statearr_26878;
})();
var statearr_26879_26895 = state_26862__$1;
(statearr_26879_26895[(2)] = null);

(statearr_26879_26895[(1)] = (2));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26880[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26880[(1)] = (1));

return statearr_26880;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26862){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26862);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26881){if((e26881 instanceof Object)){
var ex__23064__auto__ = e26881;
var statearr_26882_26896 = state_26862;
(statearr_26882_26896[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26862);

return cljs.core.cst$kw$recur;
} else {
throw e26881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26897 = state_26862;
state_26862 = G__26897;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26883 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26883[(6)] = c__23251__auto___26885);

return statearr_26883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26899 = arguments.length;
switch (G__26899) {
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
var c__23251__auto___26965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_26937){
var state_val_26938 = (state_26937[(1)]);
if((state_val_26938 === (7))){
var inst_26933 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
var statearr_26939_26966 = state_26937__$1;
(statearr_26939_26966[(2)] = inst_26933);

(statearr_26939_26966[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (1))){
var inst_26900 = (new Array(n));
var inst_26901 = inst_26900;
var inst_26902 = (0);
var state_26937__$1 = (function (){var statearr_26940 = state_26937;
(statearr_26940[(7)] = inst_26901);

(statearr_26940[(8)] = inst_26902);

return statearr_26940;
})();
var statearr_26941_26967 = state_26937__$1;
(statearr_26941_26967[(2)] = null);

(statearr_26941_26967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (4))){
var inst_26905 = (state_26937[(9)]);
var inst_26905__$1 = (state_26937[(2)]);
var inst_26906 = (inst_26905__$1 == null);
var inst_26907 = cljs.core.not(inst_26906);
var state_26937__$1 = (function (){var statearr_26942 = state_26937;
(statearr_26942[(9)] = inst_26905__$1);

return statearr_26942;
})();
if(inst_26907){
var statearr_26943_26968 = state_26937__$1;
(statearr_26943_26968[(1)] = (5));

} else {
var statearr_26944_26969 = state_26937__$1;
(statearr_26944_26969[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (15))){
var inst_26927 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
var statearr_26945_26970 = state_26937__$1;
(statearr_26945_26970[(2)] = inst_26927);

(statearr_26945_26970[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (13))){
var state_26937__$1 = state_26937;
var statearr_26946_26971 = state_26937__$1;
(statearr_26946_26971[(2)] = null);

(statearr_26946_26971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (6))){
var inst_26902 = (state_26937[(8)]);
var inst_26923 = (inst_26902 > (0));
var state_26937__$1 = state_26937;
if(cljs.core.truth_(inst_26923)){
var statearr_26947_26972 = state_26937__$1;
(statearr_26947_26972[(1)] = (12));

} else {
var statearr_26948_26973 = state_26937__$1;
(statearr_26948_26973[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (3))){
var inst_26935 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26937__$1,inst_26935);
} else {
if((state_val_26938 === (12))){
var inst_26901 = (state_26937[(7)]);
var inst_26925 = cljs.core.vec(inst_26901);
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26937__$1,(15),out,inst_26925);
} else {
if((state_val_26938 === (2))){
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26937__$1,(4),ch);
} else {
if((state_val_26938 === (11))){
var inst_26917 = (state_26937[(2)]);
var inst_26918 = (new Array(n));
var inst_26901 = inst_26918;
var inst_26902 = (0);
var state_26937__$1 = (function (){var statearr_26949 = state_26937;
(statearr_26949[(10)] = inst_26917);

(statearr_26949[(7)] = inst_26901);

(statearr_26949[(8)] = inst_26902);

return statearr_26949;
})();
var statearr_26950_26974 = state_26937__$1;
(statearr_26950_26974[(2)] = null);

(statearr_26950_26974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (9))){
var inst_26901 = (state_26937[(7)]);
var inst_26915 = cljs.core.vec(inst_26901);
var state_26937__$1 = state_26937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26937__$1,(11),out,inst_26915);
} else {
if((state_val_26938 === (5))){
var inst_26910 = (state_26937[(11)]);
var inst_26901 = (state_26937[(7)]);
var inst_26902 = (state_26937[(8)]);
var inst_26905 = (state_26937[(9)]);
var inst_26909 = (inst_26901[inst_26902] = inst_26905);
var inst_26910__$1 = (inst_26902 + (1));
var inst_26911 = (inst_26910__$1 < n);
var state_26937__$1 = (function (){var statearr_26951 = state_26937;
(statearr_26951[(11)] = inst_26910__$1);

(statearr_26951[(12)] = inst_26909);

return statearr_26951;
})();
if(cljs.core.truth_(inst_26911)){
var statearr_26952_26975 = state_26937__$1;
(statearr_26952_26975[(1)] = (8));

} else {
var statearr_26953_26976 = state_26937__$1;
(statearr_26953_26976[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (14))){
var inst_26930 = (state_26937[(2)]);
var inst_26931 = cljs.core.async.close_BANG_(out);
var state_26937__$1 = (function (){var statearr_26955 = state_26937;
(statearr_26955[(13)] = inst_26930);

return statearr_26955;
})();
var statearr_26956_26977 = state_26937__$1;
(statearr_26956_26977[(2)] = inst_26931);

(statearr_26956_26977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (10))){
var inst_26921 = (state_26937[(2)]);
var state_26937__$1 = state_26937;
var statearr_26957_26978 = state_26937__$1;
(statearr_26957_26978[(2)] = inst_26921);

(statearr_26957_26978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26938 === (8))){
var inst_26910 = (state_26937[(11)]);
var inst_26901 = (state_26937[(7)]);
var tmp26954 = inst_26901;
var inst_26901__$1 = tmp26954;
var inst_26902 = inst_26910;
var state_26937__$1 = (function (){var statearr_26958 = state_26937;
(statearr_26958[(7)] = inst_26901__$1);

(statearr_26958[(8)] = inst_26902);

return statearr_26958;
})();
var statearr_26959_26979 = state_26937__$1;
(statearr_26959_26979[(2)] = null);

(statearr_26959_26979[(1)] = (2));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_26960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26960[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_26960[(1)] = (1));

return statearr_26960;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_26937){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_26937);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e26961){if((e26961 instanceof Object)){
var ex__23064__auto__ = e26961;
var statearr_26962_26980 = state_26937;
(statearr_26962_26980[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26937);

return cljs.core.cst$kw$recur;
} else {
throw e26961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__26981 = state_26937;
state_26937 = G__26981;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_26937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_26937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_26963 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_26963[(6)] = c__23251__auto___26965);

return statearr_26963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26983 = arguments.length;
switch (G__26983) {
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
var c__23251__auto___27053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23252__auto__ = (function (){var switch__23060__auto__ = (function (state_27025){
var state_val_27026 = (state_27025[(1)]);
if((state_val_27026 === (7))){
var inst_27021 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
var statearr_27027_27054 = state_27025__$1;
(statearr_27027_27054[(2)] = inst_27021);

(statearr_27027_27054[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (1))){
var inst_26984 = [];
var inst_26985 = inst_26984;
var inst_26986 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_27025__$1 = (function (){var statearr_27028 = state_27025;
(statearr_27028[(7)] = inst_26985);

(statearr_27028[(8)] = inst_26986);

return statearr_27028;
})();
var statearr_27029_27055 = state_27025__$1;
(statearr_27029_27055[(2)] = null);

(statearr_27029_27055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (4))){
var inst_26989 = (state_27025[(9)]);
var inst_26989__$1 = (state_27025[(2)]);
var inst_26990 = (inst_26989__$1 == null);
var inst_26991 = cljs.core.not(inst_26990);
var state_27025__$1 = (function (){var statearr_27030 = state_27025;
(statearr_27030[(9)] = inst_26989__$1);

return statearr_27030;
})();
if(inst_26991){
var statearr_27031_27056 = state_27025__$1;
(statearr_27031_27056[(1)] = (5));

} else {
var statearr_27032_27057 = state_27025__$1;
(statearr_27032_27057[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (15))){
var inst_27015 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
var statearr_27033_27058 = state_27025__$1;
(statearr_27033_27058[(2)] = inst_27015);

(statearr_27033_27058[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (13))){
var state_27025__$1 = state_27025;
var statearr_27034_27059 = state_27025__$1;
(statearr_27034_27059[(2)] = null);

(statearr_27034_27059[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (6))){
var inst_26985 = (state_27025[(7)]);
var inst_27010 = inst_26985.length;
var inst_27011 = (inst_27010 > (0));
var state_27025__$1 = state_27025;
if(cljs.core.truth_(inst_27011)){
var statearr_27035_27060 = state_27025__$1;
(statearr_27035_27060[(1)] = (12));

} else {
var statearr_27036_27061 = state_27025__$1;
(statearr_27036_27061[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (3))){
var inst_27023 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27025__$1,inst_27023);
} else {
if((state_val_27026 === (12))){
var inst_26985 = (state_27025[(7)]);
var inst_27013 = cljs.core.vec(inst_26985);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27025__$1,(15),out,inst_27013);
} else {
if((state_val_27026 === (2))){
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27025__$1,(4),ch);
} else {
if((state_val_27026 === (11))){
var inst_26993 = (state_27025[(10)]);
var inst_26989 = (state_27025[(9)]);
var inst_27003 = (state_27025[(2)]);
var inst_27004 = [];
var inst_27005 = inst_27004.push(inst_26989);
var inst_26985 = inst_27004;
var inst_26986 = inst_26993;
var state_27025__$1 = (function (){var statearr_27037 = state_27025;
(statearr_27037[(11)] = inst_27005);

(statearr_27037[(12)] = inst_27003);

(statearr_27037[(7)] = inst_26985);

(statearr_27037[(8)] = inst_26986);

return statearr_27037;
})();
var statearr_27038_27062 = state_27025__$1;
(statearr_27038_27062[(2)] = null);

(statearr_27038_27062[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (9))){
var inst_26985 = (state_27025[(7)]);
var inst_27001 = cljs.core.vec(inst_26985);
var state_27025__$1 = state_27025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27025__$1,(11),out,inst_27001);
} else {
if((state_val_27026 === (5))){
var inst_26993 = (state_27025[(10)]);
var inst_26989 = (state_27025[(9)]);
var inst_26986 = (state_27025[(8)]);
var inst_26993__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26989) : f.call(null,inst_26989));
var inst_26994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26993__$1,inst_26986);
var inst_26995 = cljs.core.keyword_identical_QMARK_(inst_26986,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26996 = ((inst_26994) || (inst_26995));
var state_27025__$1 = (function (){var statearr_27039 = state_27025;
(statearr_27039[(10)] = inst_26993__$1);

return statearr_27039;
})();
if(cljs.core.truth_(inst_26996)){
var statearr_27040_27063 = state_27025__$1;
(statearr_27040_27063[(1)] = (8));

} else {
var statearr_27041_27064 = state_27025__$1;
(statearr_27041_27064[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (14))){
var inst_27018 = (state_27025[(2)]);
var inst_27019 = cljs.core.async.close_BANG_(out);
var state_27025__$1 = (function (){var statearr_27043 = state_27025;
(statearr_27043[(13)] = inst_27018);

return statearr_27043;
})();
var statearr_27044_27065 = state_27025__$1;
(statearr_27044_27065[(2)] = inst_27019);

(statearr_27044_27065[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (10))){
var inst_27008 = (state_27025[(2)]);
var state_27025__$1 = state_27025;
var statearr_27045_27066 = state_27025__$1;
(statearr_27045_27066[(2)] = inst_27008);

(statearr_27045_27066[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27026 === (8))){
var inst_26993 = (state_27025[(10)]);
var inst_26989 = (state_27025[(9)]);
var inst_26985 = (state_27025[(7)]);
var inst_26998 = inst_26985.push(inst_26989);
var tmp27042 = inst_26985;
var inst_26985__$1 = tmp27042;
var inst_26986 = inst_26993;
var state_27025__$1 = (function (){var statearr_27046 = state_27025;
(statearr_27046[(14)] = inst_26998);

(statearr_27046[(7)] = inst_26985__$1);

(statearr_27046[(8)] = inst_26986);

return statearr_27046;
})();
var statearr_27047_27067 = state_27025__$1;
(statearr_27047_27067[(2)] = null);

(statearr_27047_27067[(1)] = (2));


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
var cljs$core$async$state_machine__23061__auto__ = null;
var cljs$core$async$state_machine__23061__auto____0 = (function (){
var statearr_27048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27048[(0)] = cljs$core$async$state_machine__23061__auto__);

(statearr_27048[(1)] = (1));

return statearr_27048;
});
var cljs$core$async$state_machine__23061__auto____1 = (function (state_27025){
while(true){
var ret_value__23062__auto__ = (function (){try{while(true){
var result__23063__auto__ = switch__23060__auto__(state_27025);
if(cljs.core.keyword_identical_QMARK_(result__23063__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23063__auto__;
}
break;
}
}catch (e27049){if((e27049 instanceof Object)){
var ex__23064__auto__ = e27049;
var statearr_27050_27068 = state_27025;
(statearr_27050_27068[(5)] = ex__23064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27025);

return cljs.core.cst$kw$recur;
} else {
throw e27049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23062__auto__,cljs.core.cst$kw$recur)){
var G__27069 = state_27025;
state_27025 = G__27069;
continue;
} else {
return ret_value__23062__auto__;
}
break;
}
});
cljs$core$async$state_machine__23061__auto__ = function(state_27025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23061__auto____1.call(this,state_27025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23061__auto____0;
cljs$core$async$state_machine__23061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23061__auto____1;
return cljs$core$async$state_machine__23061__auto__;
})()
})();
var state__23253__auto__ = (function (){var statearr_27051 = (f__23252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23252__auto__.cljs$core$IFn$_invoke$arity$0() : f__23252__auto__.call(null));
(statearr_27051[(6)] = c__23251__auto___27053);

return statearr_27051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23253__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

