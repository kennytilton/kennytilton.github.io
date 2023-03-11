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
var G__25327 = arguments.length;
switch (G__25327) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25328 = (function (f,blockable,meta25329){
this.f = f;
this.blockable = blockable;
this.meta25329 = meta25329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25330,meta25329__$1){
var self__ = this;
var _25330__$1 = this;
return (new cljs.core.async.t_cljs$core$async25328(self__.f,self__.blockable,meta25329__$1));
}));

(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25330){
var self__ = this;
var _25330__$1 = this;
return self__.meta25329;
}));

(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta25329], null);
}));

(cljs.core.async.t_cljs$core$async25328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25328");

(cljs.core.async.t_cljs$core$async25328.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25328.
 */
cljs.core.async.__GT_t_cljs$core$async25328 = (function cljs$core$async$__GT_t_cljs$core$async25328(f__$1,blockable__$1,meta25329){
return (new cljs.core.async.t_cljs$core$async25328(f__$1,blockable__$1,meta25329));
});

}

return (new cljs.core.async.t_cljs$core$async25328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25334 = arguments.length;
switch (G__25334) {
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
var G__25337 = arguments.length;
switch (G__25337) {
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
var G__25340 = arguments.length;
switch (G__25340) {
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
var val_25342 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25342) : fn1.call(null,val_25342));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25342) : fn1.call(null,val_25342));
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
var G__25344 = arguments.length;
switch (G__25344) {
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
var n__4613__auto___25346 = n;
var x_25347 = (0);
while(true){
if((x_25347 < n__4613__auto___25346)){
(a[x_25347] = (0));

var G__25348 = (x_25347 + (1));
x_25347 = G__25348;
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

var G__25349 = (i + (1));
i = G__25349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25350 = (function (flag,meta25351){
this.flag = flag;
this.meta25351 = meta25351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25352,meta25351__$1){
var self__ = this;
var _25352__$1 = this;
return (new cljs.core.async.t_cljs$core$async25350(self__.flag,meta25351__$1));
}));

(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25352){
var self__ = this;
var _25352__$1 = this;
return self__.meta25351;
}));

(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta25351], null);
}));

(cljs.core.async.t_cljs$core$async25350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25350");

(cljs.core.async.t_cljs$core$async25350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25350.
 */
cljs.core.async.__GT_t_cljs$core$async25350 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25350(flag__$1,meta25351){
return (new cljs.core.async.t_cljs$core$async25350(flag__$1,meta25351));
});

}

return (new cljs.core.async.t_cljs$core$async25350(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25353 = (function (flag,cb,meta25354){
this.flag = flag;
this.cb = cb;
this.meta25354 = meta25354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25355,meta25354__$1){
var self__ = this;
var _25355__$1 = this;
return (new cljs.core.async.t_cljs$core$async25353(self__.flag,self__.cb,meta25354__$1));
}));

(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25355){
var self__ = this;
var _25355__$1 = this;
return self__.meta25354;
}));

(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta25354], null);
}));

(cljs.core.async.t_cljs$core$async25353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25353");

(cljs.core.async.t_cljs$core$async25353.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25353.
 */
cljs.core.async.__GT_t_cljs$core$async25353 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25353(flag__$1,cb__$1,meta25354){
return (new cljs.core.async.t_cljs$core$async25353(flag__$1,cb__$1,meta25354));
});

}

return (new cljs.core.async.t_cljs$core$async25353(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25356_SHARP_){
var G__25358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25356_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25358) : fret.call(null,G__25358));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25357_SHARP_){
var G__25359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25357_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25359) : fret.call(null,G__25359));
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
var G__25360 = (i + (1));
i = G__25360;
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
var len__4736__auto___25366 = arguments.length;
var i__4737__auto___25367 = (0);
while(true){
if((i__4737__auto___25367 < len__4736__auto___25366)){
args__4742__auto__.push((arguments[i__4737__auto___25367]));

var G__25368 = (i__4737__auto___25367 + (1));
i__4737__auto___25367 = G__25368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25363){
var map__25364 = p__25363;
var map__25364__$1 = (((((!((map__25364 == null))))?(((((map__25364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25364):map__25364);
var opts = map__25364__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25361){
var G__25362 = cljs.core.first(seq25361);
var seq25361__$1 = cljs.core.next(seq25361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25362,seq25361__$1);
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
var G__25370 = arguments.length;
switch (G__25370) {
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
var c__23386__auto___25416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25394){
var state_val_25395 = (state_25394[(1)]);
if((state_val_25395 === (7))){
var inst_25390 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25396_25417 = state_25394__$1;
(statearr_25396_25417[(2)] = inst_25390);

(statearr_25396_25417[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (1))){
var state_25394__$1 = state_25394;
var statearr_25397_25418 = state_25394__$1;
(statearr_25397_25418[(2)] = null);

(statearr_25397_25418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (4))){
var inst_25373 = (state_25394[(7)]);
var inst_25373__$1 = (state_25394[(2)]);
var inst_25374 = (inst_25373__$1 == null);
var state_25394__$1 = (function (){var statearr_25398 = state_25394;
(statearr_25398[(7)] = inst_25373__$1);

return statearr_25398;
})();
if(cljs.core.truth_(inst_25374)){
var statearr_25399_25419 = state_25394__$1;
(statearr_25399_25419[(1)] = (5));

} else {
var statearr_25400_25420 = state_25394__$1;
(statearr_25400_25420[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (13))){
var state_25394__$1 = state_25394;
var statearr_25401_25421 = state_25394__$1;
(statearr_25401_25421[(2)] = null);

(statearr_25401_25421[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (6))){
var inst_25373 = (state_25394[(7)]);
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25394__$1,(11),to,inst_25373);
} else {
if((state_val_25395 === (3))){
var inst_25392 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25394__$1,inst_25392);
} else {
if((state_val_25395 === (12))){
var state_25394__$1 = state_25394;
var statearr_25402_25422 = state_25394__$1;
(statearr_25402_25422[(2)] = null);

(statearr_25402_25422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (2))){
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25394__$1,(4),from);
} else {
if((state_val_25395 === (11))){
var inst_25383 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
if(cljs.core.truth_(inst_25383)){
var statearr_25403_25423 = state_25394__$1;
(statearr_25403_25423[(1)] = (12));

} else {
var statearr_25404_25424 = state_25394__$1;
(statearr_25404_25424[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (9))){
var state_25394__$1 = state_25394;
var statearr_25405_25425 = state_25394__$1;
(statearr_25405_25425[(2)] = null);

(statearr_25405_25425[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (5))){
var state_25394__$1 = state_25394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25406_25426 = state_25394__$1;
(statearr_25406_25426[(1)] = (8));

} else {
var statearr_25407_25427 = state_25394__$1;
(statearr_25407_25427[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (14))){
var inst_25388 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25408_25428 = state_25394__$1;
(statearr_25408_25428[(2)] = inst_25388);

(statearr_25408_25428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (10))){
var inst_25380 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25409_25429 = state_25394__$1;
(statearr_25409_25429[(2)] = inst_25380);

(statearr_25409_25429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25395 === (8))){
var inst_25377 = cljs.core.async.close_BANG_(to);
var state_25394__$1 = state_25394;
var statearr_25410_25430 = state_25394__$1;
(statearr_25410_25430[(2)] = inst_25377);

(statearr_25410_25430[(1)] = (10));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_25411 = [null,null,null,null,null,null,null,null];
(statearr_25411[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_25411[(1)] = (1));

return statearr_25411;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_25394){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25394);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25412){if((e25412 instanceof Object)){
var ex__23199__auto__ = e25412;
var statearr_25413_25431 = state_25394;
(statearr_25413_25431[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25394);

return cljs.core.cst$kw$recur;
} else {
throw e25412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25432 = state_25394;
state_25394 = G__25432;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_25394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_25394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25414 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25414[(6)] = c__23386__auto___25416);

return statearr_25414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var process = (function (p__25433){
var vec__25434 = p__25433;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25434,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25434,(1),null);
var job = vec__25434;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23386__auto___25605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25441){
var state_val_25442 = (state_25441[(1)]);
if((state_val_25442 === (1))){
var state_25441__$1 = state_25441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25441__$1,(2),res,v);
} else {
if((state_val_25442 === (2))){
var inst_25438 = (state_25441[(2)]);
var inst_25439 = cljs.core.async.close_BANG_(res);
var state_25441__$1 = (function (){var statearr_25443 = state_25441;
(statearr_25443[(7)] = inst_25438);

return statearr_25443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25441__$1,inst_25439);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_25444 = [null,null,null,null,null,null,null,null];
(statearr_25444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__);

(statearr_25444[(1)] = (1));

return statearr_25444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1 = (function (state_25441){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25441);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25445){if((e25445 instanceof Object)){
var ex__23199__auto__ = e25445;
var statearr_25446_25606 = state_25441;
(statearr_25446_25606[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25441);

return cljs.core.cst$kw$recur;
} else {
throw e25445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25607 = state_25441;
state_25441 = G__25607;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = function(state_25441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1.call(this,state_25441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25447 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25447[(6)] = c__23386__auto___25605);

return statearr_25447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__25448){
var vec__25449 = p__25448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,(1),null);
var job = vec__25449;
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
var n__4613__auto___25608 = n;
var __25609 = (0);
while(true){
if((__25609 < n__4613__auto___25608)){
var G__25452_25610 = type;
var G__25452_25611__$1 = (((G__25452_25610 instanceof cljs.core.Keyword))?G__25452_25610.fqn:null);
switch (G__25452_25611__$1) {
case "compute":
var c__23386__auto___25613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25609,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = ((function (__25609,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function (state_25465){
var state_val_25466 = (state_25465[(1)]);
if((state_val_25466 === (1))){
var state_25465__$1 = state_25465;
var statearr_25467_25614 = state_25465__$1;
(statearr_25467_25614[(2)] = null);

(statearr_25467_25614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25466 === (2))){
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25465__$1,(4),jobs);
} else {
if((state_val_25466 === (3))){
var inst_25463 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25465__$1,inst_25463);
} else {
if((state_val_25466 === (4))){
var inst_25455 = (state_25465[(2)]);
var inst_25456 = process(inst_25455);
var state_25465__$1 = state_25465;
if(cljs.core.truth_(inst_25456)){
var statearr_25468_25615 = state_25465__$1;
(statearr_25468_25615[(1)] = (5));

} else {
var statearr_25469_25616 = state_25465__$1;
(statearr_25469_25616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25466 === (5))){
var state_25465__$1 = state_25465;
var statearr_25470_25617 = state_25465__$1;
(statearr_25470_25617[(2)] = null);

(statearr_25470_25617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25466 === (6))){
var state_25465__$1 = state_25465;
var statearr_25471_25618 = state_25465__$1;
(statearr_25471_25618[(2)] = null);

(statearr_25471_25618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25466 === (7))){
var inst_25461 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25472_25619 = state_25465__$1;
(statearr_25472_25619[(2)] = inst_25461);

(statearr_25472_25619[(1)] = (3));


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
});})(__25609,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
;
return ((function (__25609,switch__23195__auto__,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_25473 = [null,null,null,null,null,null,null];
(statearr_25473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__);

(statearr_25473[(1)] = (1));

return statearr_25473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1 = (function (state_25465){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25465);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25474){if((e25474 instanceof Object)){
var ex__23199__auto__ = e25474;
var statearr_25475_25620 = state_25465;
(statearr_25475_25620[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25465);

return cljs.core.cst$kw$recur;
} else {
throw e25474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25621 = state_25465;
state_25465 = G__25621;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = function(state_25465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1.call(this,state_25465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__;
})()
;})(__25609,switch__23195__auto__,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
})();
var state__23388__auto__ = (function (){var statearr_25476 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25476[(6)] = c__23386__auto___25613);

return statearr_25476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
});})(__25609,c__23386__auto___25613,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
);


break;
case "async":
var c__23386__auto___25622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25609,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = ((function (__25609,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function (state_25489){
var state_val_25490 = (state_25489[(1)]);
if((state_val_25490 === (1))){
var state_25489__$1 = state_25489;
var statearr_25491_25623 = state_25489__$1;
(statearr_25491_25623[(2)] = null);

(statearr_25491_25623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (2))){
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25489__$1,(4),jobs);
} else {
if((state_val_25490 === (3))){
var inst_25487 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25489__$1,inst_25487);
} else {
if((state_val_25490 === (4))){
var inst_25479 = (state_25489[(2)]);
var inst_25480 = async(inst_25479);
var state_25489__$1 = state_25489;
if(cljs.core.truth_(inst_25480)){
var statearr_25492_25624 = state_25489__$1;
(statearr_25492_25624[(1)] = (5));

} else {
var statearr_25493_25625 = state_25489__$1;
(statearr_25493_25625[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (5))){
var state_25489__$1 = state_25489;
var statearr_25494_25626 = state_25489__$1;
(statearr_25494_25626[(2)] = null);

(statearr_25494_25626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (6))){
var state_25489__$1 = state_25489;
var statearr_25495_25627 = state_25489__$1;
(statearr_25495_25627[(2)] = null);

(statearr_25495_25627[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25490 === (7))){
var inst_25485 = (state_25489[(2)]);
var state_25489__$1 = state_25489;
var statearr_25496_25628 = state_25489__$1;
(statearr_25496_25628[(2)] = inst_25485);

(statearr_25496_25628[(1)] = (3));


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
});})(__25609,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
;
return ((function (__25609,switch__23195__auto__,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_25497 = [null,null,null,null,null,null,null];
(statearr_25497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__);

(statearr_25497[(1)] = (1));

return statearr_25497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1 = (function (state_25489){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25489);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25498){if((e25498 instanceof Object)){
var ex__23199__auto__ = e25498;
var statearr_25499_25629 = state_25489;
(statearr_25499_25629[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25489);

return cljs.core.cst$kw$recur;
} else {
throw e25498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25630 = state_25489;
state_25489 = G__25630;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__;
})()
;})(__25609,switch__23195__auto__,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
})();
var state__23388__auto__ = (function (){var statearr_25500 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25500[(6)] = c__23386__auto___25622);

return statearr_25500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
});})(__25609,c__23386__auto___25622,G__25452_25610,G__25452_25611__$1,n__4613__auto___25608,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25452_25611__$1)].join('')));

}

var G__25631 = (__25609 + (1));
__25609 = G__25631;
continue;
} else {
}
break;
}

var c__23386__auto___25632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25522){
var state_val_25523 = (state_25522[(1)]);
if((state_val_25523 === (7))){
var inst_25518 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25524_25633 = state_25522__$1;
(statearr_25524_25633[(2)] = inst_25518);

(statearr_25524_25633[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25523 === (1))){
var state_25522__$1 = state_25522;
var statearr_25525_25634 = state_25522__$1;
(statearr_25525_25634[(2)] = null);

(statearr_25525_25634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25523 === (4))){
var inst_25503 = (state_25522[(7)]);
var inst_25503__$1 = (state_25522[(2)]);
var inst_25504 = (inst_25503__$1 == null);
var state_25522__$1 = (function (){var statearr_25526 = state_25522;
(statearr_25526[(7)] = inst_25503__$1);

return statearr_25526;
})();
if(cljs.core.truth_(inst_25504)){
var statearr_25527_25635 = state_25522__$1;
(statearr_25527_25635[(1)] = (5));

} else {
var statearr_25528_25636 = state_25522__$1;
(statearr_25528_25636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25523 === (6))){
var inst_25503 = (state_25522[(7)]);
var inst_25508 = (state_25522[(8)]);
var inst_25508__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25510 = [inst_25503,inst_25508__$1];
var inst_25511 = (new cljs.core.PersistentVector(null,2,(5),inst_25509,inst_25510,null));
var state_25522__$1 = (function (){var statearr_25529 = state_25522;
(statearr_25529[(8)] = inst_25508__$1);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25522__$1,(8),jobs,inst_25511);
} else {
if((state_val_25523 === (3))){
var inst_25520 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25522__$1,inst_25520);
} else {
if((state_val_25523 === (2))){
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25522__$1,(4),from);
} else {
if((state_val_25523 === (9))){
var inst_25515 = (state_25522[(2)]);
var state_25522__$1 = (function (){var statearr_25530 = state_25522;
(statearr_25530[(9)] = inst_25515);

return statearr_25530;
})();
var statearr_25531_25637 = state_25522__$1;
(statearr_25531_25637[(2)] = null);

(statearr_25531_25637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25523 === (5))){
var inst_25506 = cljs.core.async.close_BANG_(jobs);
var state_25522__$1 = state_25522;
var statearr_25532_25638 = state_25522__$1;
(statearr_25532_25638[(2)] = inst_25506);

(statearr_25532_25638[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25523 === (8))){
var inst_25508 = (state_25522[(8)]);
var inst_25513 = (state_25522[(2)]);
var state_25522__$1 = (function (){var statearr_25533 = state_25522;
(statearr_25533[(10)] = inst_25513);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25522__$1,(9),results,inst_25508);
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
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_25534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__);

(statearr_25534[(1)] = (1));

return statearr_25534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1 = (function (state_25522){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25522);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25535){if((e25535 instanceof Object)){
var ex__23199__auto__ = e25535;
var statearr_25536_25639 = state_25522;
(statearr_25536_25639[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25522);

return cljs.core.cst$kw$recur;
} else {
throw e25535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25640 = state_25522;
state_25522 = G__25640;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = function(state_25522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1.call(this,state_25522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25537 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25537[(6)] = c__23386__auto___25632);

return statearr_25537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


var c__23386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25575){
var state_val_25576 = (state_25575[(1)]);
if((state_val_25576 === (7))){
var inst_25571 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25577_25641 = state_25575__$1;
(statearr_25577_25641[(2)] = inst_25571);

(statearr_25577_25641[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (20))){
var state_25575__$1 = state_25575;
var statearr_25578_25642 = state_25575__$1;
(statearr_25578_25642[(2)] = null);

(statearr_25578_25642[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (1))){
var state_25575__$1 = state_25575;
var statearr_25579_25643 = state_25575__$1;
(statearr_25579_25643[(2)] = null);

(statearr_25579_25643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (4))){
var inst_25540 = (state_25575[(7)]);
var inst_25540__$1 = (state_25575[(2)]);
var inst_25541 = (inst_25540__$1 == null);
var state_25575__$1 = (function (){var statearr_25580 = state_25575;
(statearr_25580[(7)] = inst_25540__$1);

return statearr_25580;
})();
if(cljs.core.truth_(inst_25541)){
var statearr_25581_25644 = state_25575__$1;
(statearr_25581_25644[(1)] = (5));

} else {
var statearr_25582_25645 = state_25575__$1;
(statearr_25582_25645[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (15))){
var inst_25553 = (state_25575[(8)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25575__$1,(18),to,inst_25553);
} else {
if((state_val_25576 === (21))){
var inst_25566 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25583_25646 = state_25575__$1;
(statearr_25583_25646[(2)] = inst_25566);

(statearr_25583_25646[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (13))){
var inst_25568 = (state_25575[(2)]);
var state_25575__$1 = (function (){var statearr_25584 = state_25575;
(statearr_25584[(9)] = inst_25568);

return statearr_25584;
})();
var statearr_25585_25647 = state_25575__$1;
(statearr_25585_25647[(2)] = null);

(statearr_25585_25647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (6))){
var inst_25540 = (state_25575[(7)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25575__$1,(11),inst_25540);
} else {
if((state_val_25576 === (17))){
var inst_25561 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
if(cljs.core.truth_(inst_25561)){
var statearr_25586_25648 = state_25575__$1;
(statearr_25586_25648[(1)] = (19));

} else {
var statearr_25587_25649 = state_25575__$1;
(statearr_25587_25649[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (3))){
var inst_25573 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25575__$1,inst_25573);
} else {
if((state_val_25576 === (12))){
var inst_25550 = (state_25575[(10)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25575__$1,(14),inst_25550);
} else {
if((state_val_25576 === (2))){
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25575__$1,(4),results);
} else {
if((state_val_25576 === (19))){
var state_25575__$1 = state_25575;
var statearr_25588_25650 = state_25575__$1;
(statearr_25588_25650[(2)] = null);

(statearr_25588_25650[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (11))){
var inst_25550 = (state_25575[(2)]);
var state_25575__$1 = (function (){var statearr_25589 = state_25575;
(statearr_25589[(10)] = inst_25550);

return statearr_25589;
})();
var statearr_25590_25651 = state_25575__$1;
(statearr_25590_25651[(2)] = null);

(statearr_25590_25651[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (9))){
var state_25575__$1 = state_25575;
var statearr_25591_25652 = state_25575__$1;
(statearr_25591_25652[(2)] = null);

(statearr_25591_25652[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (5))){
var state_25575__$1 = state_25575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25592_25653 = state_25575__$1;
(statearr_25592_25653[(1)] = (8));

} else {
var statearr_25593_25654 = state_25575__$1;
(statearr_25593_25654[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (14))){
var inst_25553 = (state_25575[(8)]);
var inst_25553__$1 = (state_25575[(2)]);
var inst_25554 = (inst_25553__$1 == null);
var inst_25555 = cljs.core.not(inst_25554);
var state_25575__$1 = (function (){var statearr_25594 = state_25575;
(statearr_25594[(8)] = inst_25553__$1);

return statearr_25594;
})();
if(inst_25555){
var statearr_25595_25655 = state_25575__$1;
(statearr_25595_25655[(1)] = (15));

} else {
var statearr_25596_25656 = state_25575__$1;
(statearr_25596_25656[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (16))){
var state_25575__$1 = state_25575;
var statearr_25597_25657 = state_25575__$1;
(statearr_25597_25657[(2)] = false);

(statearr_25597_25657[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (10))){
var inst_25547 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25598_25658 = state_25575__$1;
(statearr_25598_25658[(2)] = inst_25547);

(statearr_25598_25658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (18))){
var inst_25558 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25599_25659 = state_25575__$1;
(statearr_25599_25659[(2)] = inst_25558);

(statearr_25599_25659[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25576 === (8))){
var inst_25544 = cljs.core.async.close_BANG_(to);
var state_25575__$1 = state_25575;
var statearr_25600_25660 = state_25575__$1;
(statearr_25600_25660[(2)] = inst_25544);

(statearr_25600_25660[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1 = (function (state_25575){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25575);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__23199__auto__ = e25602;
var statearr_25603_25661 = state_25575;
(statearr_25603_25661[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25575);

return cljs.core.cst$kw$recur;
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25662 = state_25575;
state_25575 = G__25662;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25604 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25604[(6)] = c__23386__auto__);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));

return c__23386__auto__;
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
var G__25664 = arguments.length;
switch (G__25664) {
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
var G__25667 = arguments.length;
switch (G__25667) {
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
var G__25670 = arguments.length;
switch (G__25670) {
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
var c__23386__auto___25719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25696){
var state_val_25697 = (state_25696[(1)]);
if((state_val_25697 === (7))){
var inst_25692 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25698_25720 = state_25696__$1;
(statearr_25698_25720[(2)] = inst_25692);

(statearr_25698_25720[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (1))){
var state_25696__$1 = state_25696;
var statearr_25699_25721 = state_25696__$1;
(statearr_25699_25721[(2)] = null);

(statearr_25699_25721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (4))){
var inst_25673 = (state_25696[(7)]);
var inst_25673__$1 = (state_25696[(2)]);
var inst_25674 = (inst_25673__$1 == null);
var state_25696__$1 = (function (){var statearr_25700 = state_25696;
(statearr_25700[(7)] = inst_25673__$1);

return statearr_25700;
})();
if(cljs.core.truth_(inst_25674)){
var statearr_25701_25722 = state_25696__$1;
(statearr_25701_25722[(1)] = (5));

} else {
var statearr_25702_25723 = state_25696__$1;
(statearr_25702_25723[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (13))){
var state_25696__$1 = state_25696;
var statearr_25703_25724 = state_25696__$1;
(statearr_25703_25724[(2)] = null);

(statearr_25703_25724[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (6))){
var inst_25673 = (state_25696[(7)]);
var inst_25679 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25673) : p.call(null,inst_25673));
var state_25696__$1 = state_25696;
if(cljs.core.truth_(inst_25679)){
var statearr_25704_25725 = state_25696__$1;
(statearr_25704_25725[(1)] = (9));

} else {
var statearr_25705_25726 = state_25696__$1;
(statearr_25705_25726[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (3))){
var inst_25694 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25696__$1,inst_25694);
} else {
if((state_val_25697 === (12))){
var state_25696__$1 = state_25696;
var statearr_25706_25727 = state_25696__$1;
(statearr_25706_25727[(2)] = null);

(statearr_25706_25727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (2))){
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25696__$1,(4),ch);
} else {
if((state_val_25697 === (11))){
var inst_25673 = (state_25696[(7)]);
var inst_25683 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25696__$1,(8),inst_25683,inst_25673);
} else {
if((state_val_25697 === (9))){
var state_25696__$1 = state_25696;
var statearr_25707_25728 = state_25696__$1;
(statearr_25707_25728[(2)] = tc);

(statearr_25707_25728[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (5))){
var inst_25676 = cljs.core.async.close_BANG_(tc);
var inst_25677 = cljs.core.async.close_BANG_(fc);
var state_25696__$1 = (function (){var statearr_25708 = state_25696;
(statearr_25708[(8)] = inst_25676);

return statearr_25708;
})();
var statearr_25709_25729 = state_25696__$1;
(statearr_25709_25729[(2)] = inst_25677);

(statearr_25709_25729[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (14))){
var inst_25690 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25710_25730 = state_25696__$1;
(statearr_25710_25730[(2)] = inst_25690);

(statearr_25710_25730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (10))){
var state_25696__$1 = state_25696;
var statearr_25711_25731 = state_25696__$1;
(statearr_25711_25731[(2)] = fc);

(statearr_25711_25731[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25697 === (8))){
var inst_25685 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
if(cljs.core.truth_(inst_25685)){
var statearr_25712_25732 = state_25696__$1;
(statearr_25712_25732[(1)] = (12));

} else {
var statearr_25713_25733 = state_25696__$1;
(statearr_25713_25733[(1)] = (13));

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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_25714 = [null,null,null,null,null,null,null,null,null];
(statearr_25714[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_25714[(1)] = (1));

return statearr_25714;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_25696){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25696);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object)){
var ex__23199__auto__ = e25715;
var statearr_25716_25734 = state_25696;
(statearr_25716_25734[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25696);

return cljs.core.cst$kw$recur;
} else {
throw e25715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25735 = state_25696;
state_25696 = G__25735;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_25696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_25696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25717 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25717[(6)] = c__23386__auto___25719);

return statearr_25717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var c__23386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25756){
var state_val_25757 = (state_25756[(1)]);
if((state_val_25757 === (7))){
var inst_25752 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25758_25776 = state_25756__$1;
(statearr_25758_25776[(2)] = inst_25752);

(statearr_25758_25776[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (1))){
var inst_25736 = init;
var state_25756__$1 = (function (){var statearr_25759 = state_25756;
(statearr_25759[(7)] = inst_25736);

return statearr_25759;
})();
var statearr_25760_25777 = state_25756__$1;
(statearr_25760_25777[(2)] = null);

(statearr_25760_25777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (4))){
var inst_25739 = (state_25756[(8)]);
var inst_25739__$1 = (state_25756[(2)]);
var inst_25740 = (inst_25739__$1 == null);
var state_25756__$1 = (function (){var statearr_25761 = state_25756;
(statearr_25761[(8)] = inst_25739__$1);

return statearr_25761;
})();
if(cljs.core.truth_(inst_25740)){
var statearr_25762_25778 = state_25756__$1;
(statearr_25762_25778[(1)] = (5));

} else {
var statearr_25763_25779 = state_25756__$1;
(statearr_25763_25779[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (6))){
var inst_25743 = (state_25756[(9)]);
var inst_25736 = (state_25756[(7)]);
var inst_25739 = (state_25756[(8)]);
var inst_25743__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25736,inst_25739) : f.call(null,inst_25736,inst_25739));
var inst_25744 = cljs.core.reduced_QMARK_(inst_25743__$1);
var state_25756__$1 = (function (){var statearr_25764 = state_25756;
(statearr_25764[(9)] = inst_25743__$1);

return statearr_25764;
})();
if(inst_25744){
var statearr_25765_25780 = state_25756__$1;
(statearr_25765_25780[(1)] = (8));

} else {
var statearr_25766_25781 = state_25756__$1;
(statearr_25766_25781[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (3))){
var inst_25754 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25756__$1,inst_25754);
} else {
if((state_val_25757 === (2))){
var state_25756__$1 = state_25756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25756__$1,(4),ch);
} else {
if((state_val_25757 === (9))){
var inst_25743 = (state_25756[(9)]);
var inst_25736 = inst_25743;
var state_25756__$1 = (function (){var statearr_25767 = state_25756;
(statearr_25767[(7)] = inst_25736);

return statearr_25767;
})();
var statearr_25768_25782 = state_25756__$1;
(statearr_25768_25782[(2)] = null);

(statearr_25768_25782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (5))){
var inst_25736 = (state_25756[(7)]);
var state_25756__$1 = state_25756;
var statearr_25769_25783 = state_25756__$1;
(statearr_25769_25783[(2)] = inst_25736);

(statearr_25769_25783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (10))){
var inst_25750 = (state_25756[(2)]);
var state_25756__$1 = state_25756;
var statearr_25770_25784 = state_25756__$1;
(statearr_25770_25784[(2)] = inst_25750);

(statearr_25770_25784[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25757 === (8))){
var inst_25743 = (state_25756[(9)]);
var inst_25746 = cljs.core.deref(inst_25743);
var state_25756__$1 = state_25756;
var statearr_25771_25785 = state_25756__$1;
(statearr_25771_25785[(2)] = inst_25746);

(statearr_25771_25785[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__23196__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23196__auto____0 = (function (){
var statearr_25772 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25772[(0)] = cljs$core$async$reduce_$_state_machine__23196__auto__);

(statearr_25772[(1)] = (1));

return statearr_25772;
});
var cljs$core$async$reduce_$_state_machine__23196__auto____1 = (function (state_25756){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25756);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object)){
var ex__23199__auto__ = e25773;
var statearr_25774_25786 = state_25756;
(statearr_25774_25786[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25756);

return cljs.core.cst$kw$recur;
} else {
throw e25773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25787 = state_25756;
state_25756 = G__25787;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23196__auto__ = function(state_25756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23196__auto____1.call(this,state_25756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23196__auto____0;
cljs$core$async$reduce_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23196__auto____1;
return cljs$core$async$reduce_$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25775 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25775[(6)] = c__23386__auto__);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));

return c__23386__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (1))){
var inst_25788 = cljs.core.async.reduce(f__$1,init,ch);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25793__$1,(2),inst_25788);
} else {
if((state_val_25794 === (2))){
var inst_25790 = (state_25793[(2)]);
var inst_25791 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25790) : f__$1.call(null,inst_25790));
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25793__$1,inst_25791);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23196__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23196__auto____0 = (function (){
var statearr_25795 = [null,null,null,null,null,null,null];
(statearr_25795[(0)] = cljs$core$async$transduce_$_state_machine__23196__auto__);

(statearr_25795[(1)] = (1));

return statearr_25795;
});
var cljs$core$async$transduce_$_state_machine__23196__auto____1 = (function (state_25793){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25793);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25796){if((e25796 instanceof Object)){
var ex__23199__auto__ = e25796;
var statearr_25797_25799 = state_25793;
(statearr_25797_25799[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25793);

return cljs.core.cst$kw$recur;
} else {
throw e25796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25800 = state_25793;
state_25793 = G__25800;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23196__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23196__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23196__auto____0;
cljs$core$async$transduce_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23196__auto____1;
return cljs$core$async$transduce_$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25798 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25798[(6)] = c__23386__auto__);

return statearr_25798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));

return c__23386__auto__;
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
var G__25802 = arguments.length;
switch (G__25802) {
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
var c__23386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_25827){
var state_val_25828 = (state_25827[(1)]);
if((state_val_25828 === (7))){
var inst_25809 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25829_25850 = state_25827__$1;
(statearr_25829_25850[(2)] = inst_25809);

(statearr_25829_25850[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (1))){
var inst_25803 = cljs.core.seq(coll);
var inst_25804 = inst_25803;
var state_25827__$1 = (function (){var statearr_25830 = state_25827;
(statearr_25830[(7)] = inst_25804);

return statearr_25830;
})();
var statearr_25831_25851 = state_25827__$1;
(statearr_25831_25851[(2)] = null);

(statearr_25831_25851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (4))){
var inst_25804 = (state_25827[(7)]);
var inst_25807 = cljs.core.first(inst_25804);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25827__$1,(7),ch,inst_25807);
} else {
if((state_val_25828 === (13))){
var inst_25821 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25832_25852 = state_25827__$1;
(statearr_25832_25852[(2)] = inst_25821);

(statearr_25832_25852[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (6))){
var inst_25812 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25812)){
var statearr_25833_25853 = state_25827__$1;
(statearr_25833_25853[(1)] = (8));

} else {
var statearr_25834_25854 = state_25827__$1;
(statearr_25834_25854[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (3))){
var inst_25825 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25827__$1,inst_25825);
} else {
if((state_val_25828 === (12))){
var state_25827__$1 = state_25827;
var statearr_25835_25855 = state_25827__$1;
(statearr_25835_25855[(2)] = null);

(statearr_25835_25855[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (2))){
var inst_25804 = (state_25827[(7)]);
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25804)){
var statearr_25836_25856 = state_25827__$1;
(statearr_25836_25856[(1)] = (4));

} else {
var statearr_25837_25857 = state_25827__$1;
(statearr_25837_25857[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (11))){
var inst_25818 = cljs.core.async.close_BANG_(ch);
var state_25827__$1 = state_25827;
var statearr_25838_25858 = state_25827__$1;
(statearr_25838_25858[(2)] = inst_25818);

(statearr_25838_25858[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (9))){
var state_25827__$1 = state_25827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25839_25859 = state_25827__$1;
(statearr_25839_25859[(1)] = (11));

} else {
var statearr_25840_25860 = state_25827__$1;
(statearr_25840_25860[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (5))){
var inst_25804 = (state_25827[(7)]);
var state_25827__$1 = state_25827;
var statearr_25841_25861 = state_25827__$1;
(statearr_25841_25861[(2)] = inst_25804);

(statearr_25841_25861[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (10))){
var inst_25823 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25842_25862 = state_25827__$1;
(statearr_25842_25862[(2)] = inst_25823);

(statearr_25842_25862[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (8))){
var inst_25804 = (state_25827[(7)]);
var inst_25814 = cljs.core.next(inst_25804);
var inst_25804__$1 = inst_25814;
var state_25827__$1 = (function (){var statearr_25843 = state_25827;
(statearr_25843[(7)] = inst_25804__$1);

return statearr_25843;
})();
var statearr_25844_25863 = state_25827__$1;
(statearr_25844_25863[(2)] = null);

(statearr_25844_25863[(1)] = (2));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_25845 = [null,null,null,null,null,null,null,null];
(statearr_25845[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_25845[(1)] = (1));

return statearr_25845;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_25827){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_25827);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e25846){if((e25846 instanceof Object)){
var ex__23199__auto__ = e25846;
var statearr_25847_25864 = state_25827;
(statearr_25847_25864[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25827);

return cljs.core.cst$kw$recur;
} else {
throw e25846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__25865 = state_25827;
state_25827 = G__25865;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_25848 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_25848[(6)] = c__23386__auto__);

return statearr_25848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));

return c__23386__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_25866 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_25866(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25867 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_25867(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25868 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_25868(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25869 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_25869(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25870 = (function (ch,cs,meta25871){
this.ch = ch;
this.cs = cs;
this.meta25871 = meta25871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25872,meta25871__$1){
var self__ = this;
var _25872__$1 = this;
return (new cljs.core.async.t_cljs$core$async25870(self__.ch,self__.cs,meta25871__$1));
}));

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25872){
var self__ = this;
var _25872__$1 = this;
return self__.meta25871;
}));

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta25871], null);
}));

(cljs.core.async.t_cljs$core$async25870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25870");

(cljs.core.async.t_cljs$core$async25870.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25870.
 */
cljs.core.async.__GT_t_cljs$core$async25870 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25870(ch__$1,cs__$1,meta25871){
return (new cljs.core.async.t_cljs$core$async25870(ch__$1,cs__$1,meta25871));
});

}

return (new cljs.core.async.t_cljs$core$async25870(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23386__auto___26092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26007){
var state_val_26008 = (state_26007[(1)]);
if((state_val_26008 === (7))){
var inst_26003 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26009_26093 = state_26007__$1;
(statearr_26009_26093[(2)] = inst_26003);

(statearr_26009_26093[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (20))){
var inst_25906 = (state_26007[(7)]);
var inst_25918 = cljs.core.first(inst_25906);
var inst_25919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25918,(0),null);
var inst_25920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25918,(1),null);
var state_26007__$1 = (function (){var statearr_26010 = state_26007;
(statearr_26010[(8)] = inst_25919);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25920)){
var statearr_26011_26094 = state_26007__$1;
(statearr_26011_26094[(1)] = (22));

} else {
var statearr_26012_26095 = state_26007__$1;
(statearr_26012_26095[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (27))){
var inst_25875 = (state_26007[(9)]);
var inst_25948 = (state_26007[(10)]);
var inst_25955 = (state_26007[(11)]);
var inst_25950 = (state_26007[(12)]);
var inst_25955__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25948,inst_25950);
var inst_25956 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25955__$1,inst_25875,done);
var state_26007__$1 = (function (){var statearr_26013 = state_26007;
(statearr_26013[(11)] = inst_25955__$1);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25956)){
var statearr_26014_26096 = state_26007__$1;
(statearr_26014_26096[(1)] = (30));

} else {
var statearr_26015_26097 = state_26007__$1;
(statearr_26015_26097[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (1))){
var state_26007__$1 = state_26007;
var statearr_26016_26098 = state_26007__$1;
(statearr_26016_26098[(2)] = null);

(statearr_26016_26098[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (24))){
var inst_25906 = (state_26007[(7)]);
var inst_25925 = (state_26007[(2)]);
var inst_25926 = cljs.core.next(inst_25906);
var inst_25884 = inst_25926;
var inst_25885 = null;
var inst_25886 = (0);
var inst_25887 = (0);
var state_26007__$1 = (function (){var statearr_26017 = state_26007;
(statearr_26017[(13)] = inst_25887);

(statearr_26017[(14)] = inst_25886);

(statearr_26017[(15)] = inst_25885);

(statearr_26017[(16)] = inst_25884);

(statearr_26017[(17)] = inst_25925);

return statearr_26017;
})();
var statearr_26018_26099 = state_26007__$1;
(statearr_26018_26099[(2)] = null);

(statearr_26018_26099[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (39))){
var state_26007__$1 = state_26007;
var statearr_26022_26100 = state_26007__$1;
(statearr_26022_26100[(2)] = null);

(statearr_26022_26100[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (4))){
var inst_25875 = (state_26007[(9)]);
var inst_25875__$1 = (state_26007[(2)]);
var inst_25876 = (inst_25875__$1 == null);
var state_26007__$1 = (function (){var statearr_26023 = state_26007;
(statearr_26023[(9)] = inst_25875__$1);

return statearr_26023;
})();
if(cljs.core.truth_(inst_25876)){
var statearr_26024_26101 = state_26007__$1;
(statearr_26024_26101[(1)] = (5));

} else {
var statearr_26025_26102 = state_26007__$1;
(statearr_26025_26102[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (15))){
var inst_25887 = (state_26007[(13)]);
var inst_25886 = (state_26007[(14)]);
var inst_25885 = (state_26007[(15)]);
var inst_25884 = (state_26007[(16)]);
var inst_25902 = (state_26007[(2)]);
var inst_25903 = (inst_25887 + (1));
var tmp26019 = inst_25886;
var tmp26020 = inst_25885;
var tmp26021 = inst_25884;
var inst_25884__$1 = tmp26021;
var inst_25885__$1 = tmp26020;
var inst_25886__$1 = tmp26019;
var inst_25887__$1 = inst_25903;
var state_26007__$1 = (function (){var statearr_26026 = state_26007;
(statearr_26026[(13)] = inst_25887__$1);

(statearr_26026[(14)] = inst_25886__$1);

(statearr_26026[(15)] = inst_25885__$1);

(statearr_26026[(18)] = inst_25902);

(statearr_26026[(16)] = inst_25884__$1);

return statearr_26026;
})();
var statearr_26027_26103 = state_26007__$1;
(statearr_26027_26103[(2)] = null);

(statearr_26027_26103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (21))){
var inst_25929 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26031_26104 = state_26007__$1;
(statearr_26031_26104[(2)] = inst_25929);

(statearr_26031_26104[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (31))){
var inst_25955 = (state_26007[(11)]);
var inst_25959 = done(null);
var inst_25960 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25955);
var state_26007__$1 = (function (){var statearr_26032 = state_26007;
(statearr_26032[(19)] = inst_25959);

return statearr_26032;
})();
var statearr_26033_26105 = state_26007__$1;
(statearr_26033_26105[(2)] = inst_25960);

(statearr_26033_26105[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (32))){
var inst_25947 = (state_26007[(20)]);
var inst_25948 = (state_26007[(10)]);
var inst_25949 = (state_26007[(21)]);
var inst_25950 = (state_26007[(12)]);
var inst_25962 = (state_26007[(2)]);
var inst_25963 = (inst_25950 + (1));
var tmp26028 = inst_25947;
var tmp26029 = inst_25948;
var tmp26030 = inst_25949;
var inst_25947__$1 = tmp26028;
var inst_25948__$1 = tmp26029;
var inst_25949__$1 = tmp26030;
var inst_25950__$1 = inst_25963;
var state_26007__$1 = (function (){var statearr_26034 = state_26007;
(statearr_26034[(20)] = inst_25947__$1);

(statearr_26034[(22)] = inst_25962);

(statearr_26034[(10)] = inst_25948__$1);

(statearr_26034[(21)] = inst_25949__$1);

(statearr_26034[(12)] = inst_25950__$1);

return statearr_26034;
})();
var statearr_26035_26106 = state_26007__$1;
(statearr_26035_26106[(2)] = null);

(statearr_26035_26106[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (40))){
var inst_25975 = (state_26007[(23)]);
var inst_25979 = done(null);
var inst_25980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25975);
var state_26007__$1 = (function (){var statearr_26036 = state_26007;
(statearr_26036[(24)] = inst_25979);

return statearr_26036;
})();
var statearr_26037_26107 = state_26007__$1;
(statearr_26037_26107[(2)] = inst_25980);

(statearr_26037_26107[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (33))){
var inst_25966 = (state_26007[(25)]);
var inst_25968 = cljs.core.chunked_seq_QMARK_(inst_25966);
var state_26007__$1 = state_26007;
if(inst_25968){
var statearr_26038_26108 = state_26007__$1;
(statearr_26038_26108[(1)] = (36));

} else {
var statearr_26039_26109 = state_26007__$1;
(statearr_26039_26109[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (13))){
var inst_25896 = (state_26007[(26)]);
var inst_25899 = cljs.core.async.close_BANG_(inst_25896);
var state_26007__$1 = state_26007;
var statearr_26040_26110 = state_26007__$1;
(statearr_26040_26110[(2)] = inst_25899);

(statearr_26040_26110[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (22))){
var inst_25919 = (state_26007[(8)]);
var inst_25922 = cljs.core.async.close_BANG_(inst_25919);
var state_26007__$1 = state_26007;
var statearr_26041_26111 = state_26007__$1;
(statearr_26041_26111[(2)] = inst_25922);

(statearr_26041_26111[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (36))){
var inst_25966 = (state_26007[(25)]);
var inst_25970 = cljs.core.chunk_first(inst_25966);
var inst_25971 = cljs.core.chunk_rest(inst_25966);
var inst_25972 = cljs.core.count(inst_25970);
var inst_25947 = inst_25971;
var inst_25948 = inst_25970;
var inst_25949 = inst_25972;
var inst_25950 = (0);
var state_26007__$1 = (function (){var statearr_26042 = state_26007;
(statearr_26042[(20)] = inst_25947);

(statearr_26042[(10)] = inst_25948);

(statearr_26042[(21)] = inst_25949);

(statearr_26042[(12)] = inst_25950);

return statearr_26042;
})();
var statearr_26043_26112 = state_26007__$1;
(statearr_26043_26112[(2)] = null);

(statearr_26043_26112[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (41))){
var inst_25966 = (state_26007[(25)]);
var inst_25982 = (state_26007[(2)]);
var inst_25983 = cljs.core.next(inst_25966);
var inst_25947 = inst_25983;
var inst_25948 = null;
var inst_25949 = (0);
var inst_25950 = (0);
var state_26007__$1 = (function (){var statearr_26044 = state_26007;
(statearr_26044[(20)] = inst_25947);

(statearr_26044[(27)] = inst_25982);

(statearr_26044[(10)] = inst_25948);

(statearr_26044[(21)] = inst_25949);

(statearr_26044[(12)] = inst_25950);

return statearr_26044;
})();
var statearr_26045_26113 = state_26007__$1;
(statearr_26045_26113[(2)] = null);

(statearr_26045_26113[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (43))){
var state_26007__$1 = state_26007;
var statearr_26046_26114 = state_26007__$1;
(statearr_26046_26114[(2)] = null);

(statearr_26046_26114[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (29))){
var inst_25991 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26047_26115 = state_26007__$1;
(statearr_26047_26115[(2)] = inst_25991);

(statearr_26047_26115[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (44))){
var inst_26000 = (state_26007[(2)]);
var state_26007__$1 = (function (){var statearr_26048 = state_26007;
(statearr_26048[(28)] = inst_26000);

return statearr_26048;
})();
var statearr_26049_26116 = state_26007__$1;
(statearr_26049_26116[(2)] = null);

(statearr_26049_26116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (6))){
var inst_25939 = (state_26007[(29)]);
var inst_25938 = cljs.core.deref(cs);
var inst_25939__$1 = cljs.core.keys(inst_25938);
var inst_25940 = cljs.core.count(inst_25939__$1);
var inst_25941 = cljs.core.reset_BANG_(dctr,inst_25940);
var inst_25946 = cljs.core.seq(inst_25939__$1);
var inst_25947 = inst_25946;
var inst_25948 = null;
var inst_25949 = (0);
var inst_25950 = (0);
var state_26007__$1 = (function (){var statearr_26050 = state_26007;
(statearr_26050[(20)] = inst_25947);

(statearr_26050[(30)] = inst_25941);

(statearr_26050[(10)] = inst_25948);

(statearr_26050[(29)] = inst_25939__$1);

(statearr_26050[(21)] = inst_25949);

(statearr_26050[(12)] = inst_25950);

return statearr_26050;
})();
var statearr_26051_26117 = state_26007__$1;
(statearr_26051_26117[(2)] = null);

(statearr_26051_26117[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (28))){
var inst_25947 = (state_26007[(20)]);
var inst_25966 = (state_26007[(25)]);
var inst_25966__$1 = cljs.core.seq(inst_25947);
var state_26007__$1 = (function (){var statearr_26052 = state_26007;
(statearr_26052[(25)] = inst_25966__$1);

return statearr_26052;
})();
if(inst_25966__$1){
var statearr_26053_26118 = state_26007__$1;
(statearr_26053_26118[(1)] = (33));

} else {
var statearr_26054_26119 = state_26007__$1;
(statearr_26054_26119[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (25))){
var inst_25949 = (state_26007[(21)]);
var inst_25950 = (state_26007[(12)]);
var inst_25952 = (inst_25950 < inst_25949);
var inst_25953 = inst_25952;
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25953)){
var statearr_26055_26120 = state_26007__$1;
(statearr_26055_26120[(1)] = (27));

} else {
var statearr_26056_26121 = state_26007__$1;
(statearr_26056_26121[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (34))){
var state_26007__$1 = state_26007;
var statearr_26057_26122 = state_26007__$1;
(statearr_26057_26122[(2)] = null);

(statearr_26057_26122[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (17))){
var state_26007__$1 = state_26007;
var statearr_26058_26123 = state_26007__$1;
(statearr_26058_26123[(2)] = null);

(statearr_26058_26123[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (3))){
var inst_26005 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26007__$1,inst_26005);
} else {
if((state_val_26008 === (12))){
var inst_25934 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26059_26124 = state_26007__$1;
(statearr_26059_26124[(2)] = inst_25934);

(statearr_26059_26124[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (2))){
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26007__$1,(4),ch);
} else {
if((state_val_26008 === (23))){
var state_26007__$1 = state_26007;
var statearr_26060_26125 = state_26007__$1;
(statearr_26060_26125[(2)] = null);

(statearr_26060_26125[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (35))){
var inst_25989 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26061_26126 = state_26007__$1;
(statearr_26061_26126[(2)] = inst_25989);

(statearr_26061_26126[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (19))){
var inst_25906 = (state_26007[(7)]);
var inst_25910 = cljs.core.chunk_first(inst_25906);
var inst_25911 = cljs.core.chunk_rest(inst_25906);
var inst_25912 = cljs.core.count(inst_25910);
var inst_25884 = inst_25911;
var inst_25885 = inst_25910;
var inst_25886 = inst_25912;
var inst_25887 = (0);
var state_26007__$1 = (function (){var statearr_26062 = state_26007;
(statearr_26062[(13)] = inst_25887);

(statearr_26062[(14)] = inst_25886);

(statearr_26062[(15)] = inst_25885);

(statearr_26062[(16)] = inst_25884);

return statearr_26062;
})();
var statearr_26063_26127 = state_26007__$1;
(statearr_26063_26127[(2)] = null);

(statearr_26063_26127[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (11))){
var inst_25884 = (state_26007[(16)]);
var inst_25906 = (state_26007[(7)]);
var inst_25906__$1 = cljs.core.seq(inst_25884);
var state_26007__$1 = (function (){var statearr_26064 = state_26007;
(statearr_26064[(7)] = inst_25906__$1);

return statearr_26064;
})();
if(inst_25906__$1){
var statearr_26065_26128 = state_26007__$1;
(statearr_26065_26128[(1)] = (16));

} else {
var statearr_26066_26129 = state_26007__$1;
(statearr_26066_26129[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (9))){
var inst_25936 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26067_26130 = state_26007__$1;
(statearr_26067_26130[(2)] = inst_25936);

(statearr_26067_26130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (5))){
var inst_25882 = cljs.core.deref(cs);
var inst_25883 = cljs.core.seq(inst_25882);
var inst_25884 = inst_25883;
var inst_25885 = null;
var inst_25886 = (0);
var inst_25887 = (0);
var state_26007__$1 = (function (){var statearr_26068 = state_26007;
(statearr_26068[(13)] = inst_25887);

(statearr_26068[(14)] = inst_25886);

(statearr_26068[(15)] = inst_25885);

(statearr_26068[(16)] = inst_25884);

return statearr_26068;
})();
var statearr_26069_26131 = state_26007__$1;
(statearr_26069_26131[(2)] = null);

(statearr_26069_26131[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (14))){
var state_26007__$1 = state_26007;
var statearr_26070_26132 = state_26007__$1;
(statearr_26070_26132[(2)] = null);

(statearr_26070_26132[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (45))){
var inst_25997 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26071_26133 = state_26007__$1;
(statearr_26071_26133[(2)] = inst_25997);

(statearr_26071_26133[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (26))){
var inst_25939 = (state_26007[(29)]);
var inst_25993 = (state_26007[(2)]);
var inst_25994 = cljs.core.seq(inst_25939);
var state_26007__$1 = (function (){var statearr_26072 = state_26007;
(statearr_26072[(31)] = inst_25993);

return statearr_26072;
})();
if(inst_25994){
var statearr_26073_26134 = state_26007__$1;
(statearr_26073_26134[(1)] = (42));

} else {
var statearr_26074_26135 = state_26007__$1;
(statearr_26074_26135[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (16))){
var inst_25906 = (state_26007[(7)]);
var inst_25908 = cljs.core.chunked_seq_QMARK_(inst_25906);
var state_26007__$1 = state_26007;
if(inst_25908){
var statearr_26075_26136 = state_26007__$1;
(statearr_26075_26136[(1)] = (19));

} else {
var statearr_26076_26137 = state_26007__$1;
(statearr_26076_26137[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (38))){
var inst_25986 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26077_26138 = state_26007__$1;
(statearr_26077_26138[(2)] = inst_25986);

(statearr_26077_26138[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (30))){
var state_26007__$1 = state_26007;
var statearr_26078_26139 = state_26007__$1;
(statearr_26078_26139[(2)] = null);

(statearr_26078_26139[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (10))){
var inst_25887 = (state_26007[(13)]);
var inst_25885 = (state_26007[(15)]);
var inst_25895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25885,inst_25887);
var inst_25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25895,(0),null);
var inst_25897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25895,(1),null);
var state_26007__$1 = (function (){var statearr_26079 = state_26007;
(statearr_26079[(26)] = inst_25896);

return statearr_26079;
})();
if(cljs.core.truth_(inst_25897)){
var statearr_26080_26140 = state_26007__$1;
(statearr_26080_26140[(1)] = (13));

} else {
var statearr_26081_26141 = state_26007__$1;
(statearr_26081_26141[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (18))){
var inst_25932 = (state_26007[(2)]);
var state_26007__$1 = state_26007;
var statearr_26082_26142 = state_26007__$1;
(statearr_26082_26142[(2)] = inst_25932);

(statearr_26082_26142[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (42))){
var state_26007__$1 = state_26007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26007__$1,(45),dchan);
} else {
if((state_val_26008 === (37))){
var inst_25875 = (state_26007[(9)]);
var inst_25966 = (state_26007[(25)]);
var inst_25975 = (state_26007[(23)]);
var inst_25975__$1 = cljs.core.first(inst_25966);
var inst_25976 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25975__$1,inst_25875,done);
var state_26007__$1 = (function (){var statearr_26083 = state_26007;
(statearr_26083[(23)] = inst_25975__$1);

return statearr_26083;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26084_26143 = state_26007__$1;
(statearr_26084_26143[(1)] = (39));

} else {
var statearr_26085_26144 = state_26007__$1;
(statearr_26085_26144[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26008 === (8))){
var inst_25887 = (state_26007[(13)]);
var inst_25886 = (state_26007[(14)]);
var inst_25889 = (inst_25887 < inst_25886);
var inst_25890 = inst_25889;
var state_26007__$1 = state_26007;
if(cljs.core.truth_(inst_25890)){
var statearr_26086_26145 = state_26007__$1;
(statearr_26086_26145[(1)] = (10));

} else {
var statearr_26087_26146 = state_26007__$1;
(statearr_26087_26146[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__23196__auto__ = null;
var cljs$core$async$mult_$_state_machine__23196__auto____0 = (function (){
var statearr_26088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26088[(0)] = cljs$core$async$mult_$_state_machine__23196__auto__);

(statearr_26088[(1)] = (1));

return statearr_26088;
});
var cljs$core$async$mult_$_state_machine__23196__auto____1 = (function (state_26007){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26007);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26089){if((e26089 instanceof Object)){
var ex__23199__auto__ = e26089;
var statearr_26090_26147 = state_26007;
(statearr_26090_26147[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26007);

return cljs.core.cst$kw$recur;
} else {
throw e26089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26148 = state_26007;
state_26007 = G__26148;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23196__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23196__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23196__auto____0;
cljs$core$async$mult_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23196__auto____1;
return cljs$core$async$mult_$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26091 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26091[(6)] = c__23386__auto___26092);

return statearr_26091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var G__26150 = arguments.length;
switch (G__26150) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_26152 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_26152(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26153 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_26153(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26154 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26154(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26155 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_26155(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26156 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26156(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26167 = arguments.length;
var i__4737__auto___26168 = (0);
while(true){
if((i__4737__auto___26168 < len__4736__auto___26167)){
args__4742__auto__.push((arguments[i__4737__auto___26168]));

var G__26169 = (i__4737__auto___26168 + (1));
i__4737__auto___26168 = G__26169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26161){
var map__26162 = p__26161;
var map__26162__$1 = (((((!((map__26162 == null))))?(((((map__26162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26162):map__26162);
var opts = map__26162__$1;
var statearr_26164_26170 = state;
(statearr_26164_26170[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_26165_26171 = state;
(statearr_26165_26171[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_26166_26172 = state;
(statearr_26166_26172[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26157){
var G__26158 = cljs.core.first(seq26157);
var seq26157__$1 = cljs.core.next(seq26157);
var G__26159 = cljs.core.first(seq26157__$1);
var seq26157__$2 = cljs.core.next(seq26157__$1);
var G__26160 = cljs.core.first(seq26157__$2);
var seq26157__$3 = cljs.core.next(seq26157__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26158,G__26159,G__26160,seq26157__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26173 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26174){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26174 = meta26174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26175,meta26174__$1){
var self__ = this;
var _26175__$1 = this;
return (new cljs.core.async.t_cljs$core$async26173(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26174__$1));
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26175){
var self__ = this;
var _26175__$1 = this;
return self__.meta26174;
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta26174], null);
}));

(cljs.core.async.t_cljs$core$async26173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26173");

(cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26173.
 */
cljs.core.async.__GT_t_cljs$core$async26173 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26173(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26174){
return (new cljs.core.async.t_cljs$core$async26173(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26174));
});

}

return (new cljs.core.async.t_cljs$core$async26173(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23386__auto___26337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26277){
var state_val_26278 = (state_26277[(1)]);
if((state_val_26278 === (7))){
var inst_26192 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26279_26338 = state_26277__$1;
(statearr_26279_26338[(2)] = inst_26192);

(statearr_26279_26338[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (20))){
var inst_26204 = (state_26277[(7)]);
var state_26277__$1 = state_26277;
var statearr_26280_26339 = state_26277__$1;
(statearr_26280_26339[(2)] = inst_26204);

(statearr_26280_26339[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (27))){
var state_26277__$1 = state_26277;
var statearr_26281_26340 = state_26277__$1;
(statearr_26281_26340[(2)] = null);

(statearr_26281_26340[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (1))){
var inst_26179 = (state_26277[(8)]);
var inst_26179__$1 = calc_state();
var inst_26181 = (inst_26179__$1 == null);
var inst_26182 = cljs.core.not(inst_26181);
var state_26277__$1 = (function (){var statearr_26282 = state_26277;
(statearr_26282[(8)] = inst_26179__$1);

return statearr_26282;
})();
if(inst_26182){
var statearr_26283_26341 = state_26277__$1;
(statearr_26283_26341[(1)] = (2));

} else {
var statearr_26284_26342 = state_26277__$1;
(statearr_26284_26342[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (24))){
var inst_26228 = (state_26277[(9)]);
var inst_26251 = (state_26277[(10)]);
var inst_26237 = (state_26277[(11)]);
var inst_26251__$1 = (inst_26228.cljs$core$IFn$_invoke$arity$1 ? inst_26228.cljs$core$IFn$_invoke$arity$1(inst_26237) : inst_26228.call(null,inst_26237));
var state_26277__$1 = (function (){var statearr_26285 = state_26277;
(statearr_26285[(10)] = inst_26251__$1);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26251__$1)){
var statearr_26286_26343 = state_26277__$1;
(statearr_26286_26343[(1)] = (29));

} else {
var statearr_26287_26344 = state_26277__$1;
(statearr_26287_26344[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (4))){
var inst_26195 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26195)){
var statearr_26288_26345 = state_26277__$1;
(statearr_26288_26345[(1)] = (8));

} else {
var statearr_26289_26346 = state_26277__$1;
(statearr_26289_26346[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (15))){
var inst_26222 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26222)){
var statearr_26290_26347 = state_26277__$1;
(statearr_26290_26347[(1)] = (19));

} else {
var statearr_26291_26348 = state_26277__$1;
(statearr_26291_26348[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (21))){
var inst_26227 = (state_26277[(12)]);
var inst_26227__$1 = (state_26277[(2)]);
var inst_26228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26227__$1,cljs.core.cst$kw$solos);
var inst_26229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26227__$1,cljs.core.cst$kw$mutes);
var inst_26230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26227__$1,cljs.core.cst$kw$reads);
var state_26277__$1 = (function (){var statearr_26292 = state_26277;
(statearr_26292[(9)] = inst_26228);

(statearr_26292[(12)] = inst_26227__$1);

(statearr_26292[(13)] = inst_26229);

return statearr_26292;
})();
return cljs.core.async.ioc_alts_BANG_(state_26277__$1,(22),inst_26230);
} else {
if((state_val_26278 === (31))){
var inst_26259 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26259)){
var statearr_26293_26349 = state_26277__$1;
(statearr_26293_26349[(1)] = (32));

} else {
var statearr_26294_26350 = state_26277__$1;
(statearr_26294_26350[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (32))){
var inst_26236 = (state_26277[(14)]);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26277__$1,(35),out,inst_26236);
} else {
if((state_val_26278 === (33))){
var inst_26227 = (state_26277[(12)]);
var inst_26204 = inst_26227;
var state_26277__$1 = (function (){var statearr_26295 = state_26277;
(statearr_26295[(7)] = inst_26204);

return statearr_26295;
})();
var statearr_26296_26351 = state_26277__$1;
(statearr_26296_26351[(2)] = null);

(statearr_26296_26351[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (13))){
var inst_26204 = (state_26277[(7)]);
var inst_26211 = inst_26204.cljs$lang$protocol_mask$partition0$;
var inst_26212 = (inst_26211 & (64));
var inst_26213 = inst_26204.cljs$core$ISeq$;
var inst_26214 = (cljs.core.PROTOCOL_SENTINEL === inst_26213);
var inst_26215 = ((inst_26212) || (inst_26214));
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26215)){
var statearr_26297_26352 = state_26277__$1;
(statearr_26297_26352[(1)] = (16));

} else {
var statearr_26298_26353 = state_26277__$1;
(statearr_26298_26353[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (22))){
var inst_26236 = (state_26277[(14)]);
var inst_26237 = (state_26277[(11)]);
var inst_26235 = (state_26277[(2)]);
var inst_26236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26235,(0),null);
var inst_26237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26235,(1),null);
var inst_26238 = (inst_26236__$1 == null);
var inst_26239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26237__$1,change);
var inst_26240 = ((inst_26238) || (inst_26239));
var state_26277__$1 = (function (){var statearr_26299 = state_26277;
(statearr_26299[(14)] = inst_26236__$1);

(statearr_26299[(11)] = inst_26237__$1);

return statearr_26299;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26300_26354 = state_26277__$1;
(statearr_26300_26354[(1)] = (23));

} else {
var statearr_26301_26355 = state_26277__$1;
(statearr_26301_26355[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (36))){
var inst_26227 = (state_26277[(12)]);
var inst_26204 = inst_26227;
var state_26277__$1 = (function (){var statearr_26302 = state_26277;
(statearr_26302[(7)] = inst_26204);

return statearr_26302;
})();
var statearr_26303_26356 = state_26277__$1;
(statearr_26303_26356[(2)] = null);

(statearr_26303_26356[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (29))){
var inst_26251 = (state_26277[(10)]);
var state_26277__$1 = state_26277;
var statearr_26304_26357 = state_26277__$1;
(statearr_26304_26357[(2)] = inst_26251);

(statearr_26304_26357[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (6))){
var state_26277__$1 = state_26277;
var statearr_26305_26358 = state_26277__$1;
(statearr_26305_26358[(2)] = false);

(statearr_26305_26358[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (28))){
var inst_26247 = (state_26277[(2)]);
var inst_26248 = calc_state();
var inst_26204 = inst_26248;
var state_26277__$1 = (function (){var statearr_26306 = state_26277;
(statearr_26306[(7)] = inst_26204);

(statearr_26306[(15)] = inst_26247);

return statearr_26306;
})();
var statearr_26307_26359 = state_26277__$1;
(statearr_26307_26359[(2)] = null);

(statearr_26307_26359[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (25))){
var inst_26273 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26308_26360 = state_26277__$1;
(statearr_26308_26360[(2)] = inst_26273);

(statearr_26308_26360[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (34))){
var inst_26271 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26309_26361 = state_26277__$1;
(statearr_26309_26361[(2)] = inst_26271);

(statearr_26309_26361[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (17))){
var state_26277__$1 = state_26277;
var statearr_26310_26362 = state_26277__$1;
(statearr_26310_26362[(2)] = false);

(statearr_26310_26362[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (3))){
var state_26277__$1 = state_26277;
var statearr_26311_26363 = state_26277__$1;
(statearr_26311_26363[(2)] = false);

(statearr_26311_26363[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (12))){
var inst_26275 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26277__$1,inst_26275);
} else {
if((state_val_26278 === (2))){
var inst_26179 = (state_26277[(8)]);
var inst_26184 = inst_26179.cljs$lang$protocol_mask$partition0$;
var inst_26185 = (inst_26184 & (64));
var inst_26186 = inst_26179.cljs$core$ISeq$;
var inst_26187 = (cljs.core.PROTOCOL_SENTINEL === inst_26186);
var inst_26188 = ((inst_26185) || (inst_26187));
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26188)){
var statearr_26312_26364 = state_26277__$1;
(statearr_26312_26364[(1)] = (5));

} else {
var statearr_26313_26365 = state_26277__$1;
(statearr_26313_26365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (23))){
var inst_26236 = (state_26277[(14)]);
var inst_26242 = (inst_26236 == null);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26242)){
var statearr_26314_26366 = state_26277__$1;
(statearr_26314_26366[(1)] = (26));

} else {
var statearr_26315_26367 = state_26277__$1;
(statearr_26315_26367[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (35))){
var inst_26262 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26262)){
var statearr_26316_26368 = state_26277__$1;
(statearr_26316_26368[(1)] = (36));

} else {
var statearr_26317_26369 = state_26277__$1;
(statearr_26317_26369[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (19))){
var inst_26204 = (state_26277[(7)]);
var inst_26224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26204);
var state_26277__$1 = state_26277;
var statearr_26318_26370 = state_26277__$1;
(statearr_26318_26370[(2)] = inst_26224);

(statearr_26318_26370[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (11))){
var inst_26204 = (state_26277[(7)]);
var inst_26208 = (inst_26204 == null);
var inst_26209 = cljs.core.not(inst_26208);
var state_26277__$1 = state_26277;
if(inst_26209){
var statearr_26319_26371 = state_26277__$1;
(statearr_26319_26371[(1)] = (13));

} else {
var statearr_26320_26372 = state_26277__$1;
(statearr_26320_26372[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (9))){
var inst_26179 = (state_26277[(8)]);
var state_26277__$1 = state_26277;
var statearr_26321_26373 = state_26277__$1;
(statearr_26321_26373[(2)] = inst_26179);

(statearr_26321_26373[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (5))){
var state_26277__$1 = state_26277;
var statearr_26322_26374 = state_26277__$1;
(statearr_26322_26374[(2)] = true);

(statearr_26322_26374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (14))){
var state_26277__$1 = state_26277;
var statearr_26323_26375 = state_26277__$1;
(statearr_26323_26375[(2)] = false);

(statearr_26323_26375[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (26))){
var inst_26237 = (state_26277[(11)]);
var inst_26244 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26237);
var state_26277__$1 = state_26277;
var statearr_26324_26376 = state_26277__$1;
(statearr_26324_26376[(2)] = inst_26244);

(statearr_26324_26376[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (16))){
var state_26277__$1 = state_26277;
var statearr_26325_26377 = state_26277__$1;
(statearr_26325_26377[(2)] = true);

(statearr_26325_26377[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (38))){
var inst_26267 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26326_26378 = state_26277__$1;
(statearr_26326_26378[(2)] = inst_26267);

(statearr_26326_26378[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (30))){
var inst_26228 = (state_26277[(9)]);
var inst_26229 = (state_26277[(13)]);
var inst_26237 = (state_26277[(11)]);
var inst_26254 = cljs.core.empty_QMARK_(inst_26228);
var inst_26255 = (inst_26229.cljs$core$IFn$_invoke$arity$1 ? inst_26229.cljs$core$IFn$_invoke$arity$1(inst_26237) : inst_26229.call(null,inst_26237));
var inst_26256 = cljs.core.not(inst_26255);
var inst_26257 = ((inst_26254) && (inst_26256));
var state_26277__$1 = state_26277;
var statearr_26327_26379 = state_26277__$1;
(statearr_26327_26379[(2)] = inst_26257);

(statearr_26327_26379[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (10))){
var inst_26179 = (state_26277[(8)]);
var inst_26200 = (state_26277[(2)]);
var inst_26201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26200,cljs.core.cst$kw$solos);
var inst_26202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26200,cljs.core.cst$kw$mutes);
var inst_26203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26200,cljs.core.cst$kw$reads);
var inst_26204 = inst_26179;
var state_26277__$1 = (function (){var statearr_26328 = state_26277;
(statearr_26328[(16)] = inst_26202);

(statearr_26328[(7)] = inst_26204);

(statearr_26328[(17)] = inst_26201);

(statearr_26328[(18)] = inst_26203);

return statearr_26328;
})();
var statearr_26329_26380 = state_26277__$1;
(statearr_26329_26380[(2)] = null);

(statearr_26329_26380[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (18))){
var inst_26219 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26330_26381 = state_26277__$1;
(statearr_26330_26381[(2)] = inst_26219);

(statearr_26330_26381[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (37))){
var state_26277__$1 = state_26277;
var statearr_26331_26382 = state_26277__$1;
(statearr_26331_26382[(2)] = null);

(statearr_26331_26382[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26278 === (8))){
var inst_26179 = (state_26277[(8)]);
var inst_26197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26179);
var state_26277__$1 = state_26277;
var statearr_26332_26383 = state_26277__$1;
(statearr_26332_26383[(2)] = inst_26197);

(statearr_26332_26383[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__23196__auto__ = null;
var cljs$core$async$mix_$_state_machine__23196__auto____0 = (function (){
var statearr_26333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26333[(0)] = cljs$core$async$mix_$_state_machine__23196__auto__);

(statearr_26333[(1)] = (1));

return statearr_26333;
});
var cljs$core$async$mix_$_state_machine__23196__auto____1 = (function (state_26277){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26277);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26334){if((e26334 instanceof Object)){
var ex__23199__auto__ = e26334;
var statearr_26335_26384 = state_26277;
(statearr_26335_26384[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26277);

return cljs.core.cst$kw$recur;
} else {
throw e26334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26385 = state_26277;
state_26277 = G__26385;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23196__auto__ = function(state_26277){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23196__auto____1.call(this,state_26277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23196__auto____0;
cljs$core$async$mix_$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23196__auto____1;
return cljs$core$async$mix_$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26336 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26336[(6)] = c__23386__auto___26337);

return statearr_26336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_26388 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_26388(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26389 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_26389(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26390 = (function() {
var G__26391 = null;
var G__26391__1 = (function (p){
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
var G__26391__2 = (function (p,v){
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
G__26391 = function(p,v){
switch(arguments.length){
case 1:
return G__26391__1.call(this,p);
case 2:
return G__26391__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26391.cljs$core$IFn$_invoke$arity$1 = G__26391__1;
G__26391.cljs$core$IFn$_invoke$arity$2 = G__26391__2;
return G__26391;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26387 = arguments.length;
switch (G__26387) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26390.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26390.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__26395 = arguments.length;
switch (G__26395) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__26393_SHARP_){
if(cljs.core.truth_((p1__26393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26393_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26393_SHARP_.call(null,topic)))){
return p1__26393_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26393_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26396 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26397){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26397 = meta26397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26398,meta26397__$1){
var self__ = this;
var _26398__$1 = this;
return (new cljs.core.async.t_cljs$core$async26396(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26397__$1));
}));

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26398){
var self__ = this;
var _26398__$1 = this;
return self__.meta26397;
}));

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26396.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta26397], null);
}));

(cljs.core.async.t_cljs$core$async26396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26396");

(cljs.core.async.t_cljs$core$async26396.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26396.
 */
cljs.core.async.__GT_t_cljs$core$async26396 = (function cljs$core$async$__GT_t_cljs$core$async26396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26397){
return (new cljs.core.async.t_cljs$core$async26396(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26397));
});

}

return (new cljs.core.async.t_cljs$core$async26396(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23386__auto___26516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26470){
var state_val_26471 = (state_26470[(1)]);
if((state_val_26471 === (7))){
var inst_26466 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26472_26517 = state_26470__$1;
(statearr_26472_26517[(2)] = inst_26466);

(statearr_26472_26517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (20))){
var state_26470__$1 = state_26470;
var statearr_26473_26518 = state_26470__$1;
(statearr_26473_26518[(2)] = null);

(statearr_26473_26518[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (1))){
var state_26470__$1 = state_26470;
var statearr_26474_26519 = state_26470__$1;
(statearr_26474_26519[(2)] = null);

(statearr_26474_26519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (24))){
var inst_26449 = (state_26470[(7)]);
var inst_26458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26449);
var state_26470__$1 = state_26470;
var statearr_26475_26520 = state_26470__$1;
(statearr_26475_26520[(2)] = inst_26458);

(statearr_26475_26520[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (4))){
var inst_26401 = (state_26470[(8)]);
var inst_26401__$1 = (state_26470[(2)]);
var inst_26402 = (inst_26401__$1 == null);
var state_26470__$1 = (function (){var statearr_26476 = state_26470;
(statearr_26476[(8)] = inst_26401__$1);

return statearr_26476;
})();
if(cljs.core.truth_(inst_26402)){
var statearr_26477_26521 = state_26470__$1;
(statearr_26477_26521[(1)] = (5));

} else {
var statearr_26478_26522 = state_26470__$1;
(statearr_26478_26522[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (15))){
var inst_26443 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26479_26523 = state_26470__$1;
(statearr_26479_26523[(2)] = inst_26443);

(statearr_26479_26523[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (21))){
var inst_26463 = (state_26470[(2)]);
var state_26470__$1 = (function (){var statearr_26480 = state_26470;
(statearr_26480[(9)] = inst_26463);

return statearr_26480;
})();
var statearr_26481_26524 = state_26470__$1;
(statearr_26481_26524[(2)] = null);

(statearr_26481_26524[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (13))){
var inst_26425 = (state_26470[(10)]);
var inst_26427 = cljs.core.chunked_seq_QMARK_(inst_26425);
var state_26470__$1 = state_26470;
if(inst_26427){
var statearr_26482_26525 = state_26470__$1;
(statearr_26482_26525[(1)] = (16));

} else {
var statearr_26483_26526 = state_26470__$1;
(statearr_26483_26526[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (22))){
var inst_26455 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26455)){
var statearr_26484_26527 = state_26470__$1;
(statearr_26484_26527[(1)] = (23));

} else {
var statearr_26485_26528 = state_26470__$1;
(statearr_26485_26528[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (6))){
var inst_26401 = (state_26470[(8)]);
var inst_26451 = (state_26470[(11)]);
var inst_26449 = (state_26470[(7)]);
var inst_26449__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26401) : topic_fn.call(null,inst_26401));
var inst_26450 = cljs.core.deref(mults);
var inst_26451__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26450,inst_26449__$1);
var state_26470__$1 = (function (){var statearr_26486 = state_26470;
(statearr_26486[(11)] = inst_26451__$1);

(statearr_26486[(7)] = inst_26449__$1);

return statearr_26486;
})();
if(cljs.core.truth_(inst_26451__$1)){
var statearr_26487_26529 = state_26470__$1;
(statearr_26487_26529[(1)] = (19));

} else {
var statearr_26488_26530 = state_26470__$1;
(statearr_26488_26530[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (25))){
var inst_26460 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26489_26531 = state_26470__$1;
(statearr_26489_26531[(2)] = inst_26460);

(statearr_26489_26531[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (17))){
var inst_26425 = (state_26470[(10)]);
var inst_26434 = cljs.core.first(inst_26425);
var inst_26435 = cljs.core.async.muxch_STAR_(inst_26434);
var inst_26436 = cljs.core.async.close_BANG_(inst_26435);
var inst_26437 = cljs.core.next(inst_26425);
var inst_26411 = inst_26437;
var inst_26412 = null;
var inst_26413 = (0);
var inst_26414 = (0);
var state_26470__$1 = (function (){var statearr_26490 = state_26470;
(statearr_26490[(12)] = inst_26412);

(statearr_26490[(13)] = inst_26411);

(statearr_26490[(14)] = inst_26413);

(statearr_26490[(15)] = inst_26414);

(statearr_26490[(16)] = inst_26436);

return statearr_26490;
})();
var statearr_26491_26532 = state_26470__$1;
(statearr_26491_26532[(2)] = null);

(statearr_26491_26532[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (3))){
var inst_26468 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26470__$1,inst_26468);
} else {
if((state_val_26471 === (12))){
var inst_26445 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26492_26533 = state_26470__$1;
(statearr_26492_26533[(2)] = inst_26445);

(statearr_26492_26533[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (2))){
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26470__$1,(4),ch);
} else {
if((state_val_26471 === (23))){
var state_26470__$1 = state_26470;
var statearr_26493_26534 = state_26470__$1;
(statearr_26493_26534[(2)] = null);

(statearr_26493_26534[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (19))){
var inst_26401 = (state_26470[(8)]);
var inst_26451 = (state_26470[(11)]);
var inst_26453 = cljs.core.async.muxch_STAR_(inst_26451);
var state_26470__$1 = state_26470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26470__$1,(22),inst_26453,inst_26401);
} else {
if((state_val_26471 === (11))){
var inst_26411 = (state_26470[(13)]);
var inst_26425 = (state_26470[(10)]);
var inst_26425__$1 = cljs.core.seq(inst_26411);
var state_26470__$1 = (function (){var statearr_26494 = state_26470;
(statearr_26494[(10)] = inst_26425__$1);

return statearr_26494;
})();
if(inst_26425__$1){
var statearr_26495_26535 = state_26470__$1;
(statearr_26495_26535[(1)] = (13));

} else {
var statearr_26496_26536 = state_26470__$1;
(statearr_26496_26536[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (9))){
var inst_26447 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26497_26537 = state_26470__$1;
(statearr_26497_26537[(2)] = inst_26447);

(statearr_26497_26537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (5))){
var inst_26408 = cljs.core.deref(mults);
var inst_26409 = cljs.core.vals(inst_26408);
var inst_26410 = cljs.core.seq(inst_26409);
var inst_26411 = inst_26410;
var inst_26412 = null;
var inst_26413 = (0);
var inst_26414 = (0);
var state_26470__$1 = (function (){var statearr_26498 = state_26470;
(statearr_26498[(12)] = inst_26412);

(statearr_26498[(13)] = inst_26411);

(statearr_26498[(14)] = inst_26413);

(statearr_26498[(15)] = inst_26414);

return statearr_26498;
})();
var statearr_26499_26538 = state_26470__$1;
(statearr_26499_26538[(2)] = null);

(statearr_26499_26538[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (14))){
var state_26470__$1 = state_26470;
var statearr_26503_26539 = state_26470__$1;
(statearr_26503_26539[(2)] = null);

(statearr_26503_26539[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (16))){
var inst_26425 = (state_26470[(10)]);
var inst_26429 = cljs.core.chunk_first(inst_26425);
var inst_26430 = cljs.core.chunk_rest(inst_26425);
var inst_26431 = cljs.core.count(inst_26429);
var inst_26411 = inst_26430;
var inst_26412 = inst_26429;
var inst_26413 = inst_26431;
var inst_26414 = (0);
var state_26470__$1 = (function (){var statearr_26504 = state_26470;
(statearr_26504[(12)] = inst_26412);

(statearr_26504[(13)] = inst_26411);

(statearr_26504[(14)] = inst_26413);

(statearr_26504[(15)] = inst_26414);

return statearr_26504;
})();
var statearr_26505_26540 = state_26470__$1;
(statearr_26505_26540[(2)] = null);

(statearr_26505_26540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (10))){
var inst_26412 = (state_26470[(12)]);
var inst_26411 = (state_26470[(13)]);
var inst_26413 = (state_26470[(14)]);
var inst_26414 = (state_26470[(15)]);
var inst_26419 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26412,inst_26414);
var inst_26420 = cljs.core.async.muxch_STAR_(inst_26419);
var inst_26421 = cljs.core.async.close_BANG_(inst_26420);
var inst_26422 = (inst_26414 + (1));
var tmp26500 = inst_26412;
var tmp26501 = inst_26411;
var tmp26502 = inst_26413;
var inst_26411__$1 = tmp26501;
var inst_26412__$1 = tmp26500;
var inst_26413__$1 = tmp26502;
var inst_26414__$1 = inst_26422;
var state_26470__$1 = (function (){var statearr_26506 = state_26470;
(statearr_26506[(12)] = inst_26412__$1);

(statearr_26506[(17)] = inst_26421);

(statearr_26506[(13)] = inst_26411__$1);

(statearr_26506[(14)] = inst_26413__$1);

(statearr_26506[(15)] = inst_26414__$1);

return statearr_26506;
})();
var statearr_26507_26541 = state_26470__$1;
(statearr_26507_26541[(2)] = null);

(statearr_26507_26541[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (18))){
var inst_26440 = (state_26470[(2)]);
var state_26470__$1 = state_26470;
var statearr_26508_26542 = state_26470__$1;
(statearr_26508_26542[(2)] = inst_26440);

(statearr_26508_26542[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26471 === (8))){
var inst_26413 = (state_26470[(14)]);
var inst_26414 = (state_26470[(15)]);
var inst_26416 = (inst_26414 < inst_26413);
var inst_26417 = inst_26416;
var state_26470__$1 = state_26470;
if(cljs.core.truth_(inst_26417)){
var statearr_26509_26543 = state_26470__$1;
(statearr_26509_26543[(1)] = (10));

} else {
var statearr_26510_26544 = state_26470__$1;
(statearr_26510_26544[(1)] = (11));

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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_26511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26511[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_26511[(1)] = (1));

return statearr_26511;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26470){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26470);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26512){if((e26512 instanceof Object)){
var ex__23199__auto__ = e26512;
var statearr_26513_26545 = state_26470;
(statearr_26513_26545[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26470);

return cljs.core.cst$kw$recur;
} else {
throw e26512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26546 = state_26470;
state_26470 = G__26546;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26514 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26514[(6)] = c__23386__auto___26516);

return statearr_26514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var G__26548 = arguments.length;
switch (G__26548) {
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
var G__26551 = arguments.length;
switch (G__26551) {
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
var G__26554 = arguments.length;
switch (G__26554) {
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
var c__23386__auto___26621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26593){
var state_val_26594 = (state_26593[(1)]);
if((state_val_26594 === (7))){
var state_26593__$1 = state_26593;
var statearr_26595_26622 = state_26593__$1;
(statearr_26595_26622[(2)] = null);

(statearr_26595_26622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (1))){
var state_26593__$1 = state_26593;
var statearr_26596_26623 = state_26593__$1;
(statearr_26596_26623[(2)] = null);

(statearr_26596_26623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (4))){
var inst_26557 = (state_26593[(7)]);
var inst_26559 = (inst_26557 < cnt);
var state_26593__$1 = state_26593;
if(cljs.core.truth_(inst_26559)){
var statearr_26597_26624 = state_26593__$1;
(statearr_26597_26624[(1)] = (6));

} else {
var statearr_26598_26625 = state_26593__$1;
(statearr_26598_26625[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (15))){
var inst_26589 = (state_26593[(2)]);
var state_26593__$1 = state_26593;
var statearr_26599_26626 = state_26593__$1;
(statearr_26599_26626[(2)] = inst_26589);

(statearr_26599_26626[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (13))){
var inst_26582 = cljs.core.async.close_BANG_(out);
var state_26593__$1 = state_26593;
var statearr_26600_26627 = state_26593__$1;
(statearr_26600_26627[(2)] = inst_26582);

(statearr_26600_26627[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (6))){
var state_26593__$1 = state_26593;
var statearr_26601_26628 = state_26593__$1;
(statearr_26601_26628[(2)] = null);

(statearr_26601_26628[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (3))){
var inst_26591 = (state_26593[(2)]);
var state_26593__$1 = state_26593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26593__$1,inst_26591);
} else {
if((state_val_26594 === (12))){
var inst_26579 = (state_26593[(8)]);
var inst_26579__$1 = (state_26593[(2)]);
var inst_26580 = cljs.core.some(cljs.core.nil_QMARK_,inst_26579__$1);
var state_26593__$1 = (function (){var statearr_26602 = state_26593;
(statearr_26602[(8)] = inst_26579__$1);

return statearr_26602;
})();
if(cljs.core.truth_(inst_26580)){
var statearr_26603_26629 = state_26593__$1;
(statearr_26603_26629[(1)] = (13));

} else {
var statearr_26604_26630 = state_26593__$1;
(statearr_26604_26630[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (2))){
var inst_26556 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26557 = (0);
var state_26593__$1 = (function (){var statearr_26605 = state_26593;
(statearr_26605[(9)] = inst_26556);

(statearr_26605[(7)] = inst_26557);

return statearr_26605;
})();
var statearr_26606_26631 = state_26593__$1;
(statearr_26606_26631[(2)] = null);

(statearr_26606_26631[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (11))){
var inst_26557 = (state_26593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26593,(10),Object,null,(9));
var inst_26566 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26557) : chs__$1.call(null,inst_26557));
var inst_26567 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26557) : done.call(null,inst_26557));
var inst_26568 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26566,inst_26567);
var state_26593__$1 = state_26593;
var statearr_26607_26632 = state_26593__$1;
(statearr_26607_26632[(2)] = inst_26568);


cljs.core.async.impl.ioc_helpers.process_exception(state_26593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (9))){
var inst_26557 = (state_26593[(7)]);
var inst_26570 = (state_26593[(2)]);
var inst_26571 = (inst_26557 + (1));
var inst_26557__$1 = inst_26571;
var state_26593__$1 = (function (){var statearr_26608 = state_26593;
(statearr_26608[(7)] = inst_26557__$1);

(statearr_26608[(10)] = inst_26570);

return statearr_26608;
})();
var statearr_26609_26633 = state_26593__$1;
(statearr_26609_26633[(2)] = null);

(statearr_26609_26633[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (5))){
var inst_26577 = (state_26593[(2)]);
var state_26593__$1 = (function (){var statearr_26610 = state_26593;
(statearr_26610[(11)] = inst_26577);

return statearr_26610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26593__$1,(12),dchan);
} else {
if((state_val_26594 === (14))){
var inst_26579 = (state_26593[(8)]);
var inst_26584 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26579);
var state_26593__$1 = state_26593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26593__$1,(16),out,inst_26584);
} else {
if((state_val_26594 === (16))){
var inst_26586 = (state_26593[(2)]);
var state_26593__$1 = (function (){var statearr_26611 = state_26593;
(statearr_26611[(12)] = inst_26586);

return statearr_26611;
})();
var statearr_26612_26634 = state_26593__$1;
(statearr_26612_26634[(2)] = null);

(statearr_26612_26634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (10))){
var inst_26561 = (state_26593[(2)]);
var inst_26562 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26593__$1 = (function (){var statearr_26613 = state_26593;
(statearr_26613[(13)] = inst_26561);

return statearr_26613;
})();
var statearr_26614_26635 = state_26593__$1;
(statearr_26614_26635[(2)] = inst_26562);


cljs.core.async.impl.ioc_helpers.process_exception(state_26593__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_26594 === (8))){
var inst_26575 = (state_26593[(2)]);
var state_26593__$1 = state_26593;
var statearr_26615_26636 = state_26593__$1;
(statearr_26615_26636[(2)] = inst_26575);

(statearr_26615_26636[(1)] = (5));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26593){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26593);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__23199__auto__ = e26617;
var statearr_26618_26637 = state_26593;
(statearr_26618_26637[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26593);

return cljs.core.cst$kw$recur;
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26638 = state_26593;
state_26593 = G__26638;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26619 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26619[(6)] = c__23386__auto___26621);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var G__26641 = arguments.length;
switch (G__26641) {
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
var c__23386__auto___26695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (7))){
var inst_26652 = (state_26673[(7)]);
var inst_26653 = (state_26673[(8)]);
var inst_26652__$1 = (state_26673[(2)]);
var inst_26653__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26652__$1,(0),null);
var inst_26654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26652__$1,(1),null);
var inst_26655 = (inst_26653__$1 == null);
var state_26673__$1 = (function (){var statearr_26675 = state_26673;
(statearr_26675[(7)] = inst_26652__$1);

(statearr_26675[(9)] = inst_26654);

(statearr_26675[(8)] = inst_26653__$1);

return statearr_26675;
})();
if(cljs.core.truth_(inst_26655)){
var statearr_26676_26696 = state_26673__$1;
(statearr_26676_26696[(1)] = (8));

} else {
var statearr_26677_26697 = state_26673__$1;
(statearr_26677_26697[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (1))){
var inst_26642 = cljs.core.vec(chs);
var inst_26643 = inst_26642;
var state_26673__$1 = (function (){var statearr_26678 = state_26673;
(statearr_26678[(10)] = inst_26643);

return statearr_26678;
})();
var statearr_26679_26698 = state_26673__$1;
(statearr_26679_26698[(2)] = null);

(statearr_26679_26698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (4))){
var inst_26643 = (state_26673[(10)]);
var state_26673__$1 = state_26673;
return cljs.core.async.ioc_alts_BANG_(state_26673__$1,(7),inst_26643);
} else {
if((state_val_26674 === (6))){
var inst_26669 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26680_26699 = state_26673__$1;
(statearr_26680_26699[(2)] = inst_26669);

(statearr_26680_26699[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (2))){
var inst_26643 = (state_26673[(10)]);
var inst_26645 = cljs.core.count(inst_26643);
var inst_26646 = (inst_26645 > (0));
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26646)){
var statearr_26682_26700 = state_26673__$1;
(statearr_26682_26700[(1)] = (4));

} else {
var statearr_26683_26701 = state_26673__$1;
(statearr_26683_26701[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (11))){
var inst_26643 = (state_26673[(10)]);
var inst_26662 = (state_26673[(2)]);
var tmp26681 = inst_26643;
var inst_26643__$1 = tmp26681;
var state_26673__$1 = (function (){var statearr_26684 = state_26673;
(statearr_26684[(11)] = inst_26662);

(statearr_26684[(10)] = inst_26643__$1);

return statearr_26684;
})();
var statearr_26685_26702 = state_26673__$1;
(statearr_26685_26702[(2)] = null);

(statearr_26685_26702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (9))){
var inst_26653 = (state_26673[(8)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26673__$1,(11),out,inst_26653);
} else {
if((state_val_26674 === (5))){
var inst_26667 = cljs.core.async.close_BANG_(out);
var state_26673__$1 = state_26673;
var statearr_26686_26703 = state_26673__$1;
(statearr_26686_26703[(2)] = inst_26667);

(statearr_26686_26703[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (10))){
var inst_26665 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26687_26704 = state_26673__$1;
(statearr_26687_26704[(2)] = inst_26665);

(statearr_26687_26704[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26674 === (8))){
var inst_26652 = (state_26673[(7)]);
var inst_26654 = (state_26673[(9)]);
var inst_26653 = (state_26673[(8)]);
var inst_26643 = (state_26673[(10)]);
var inst_26657 = (function (){var cs = inst_26643;
var vec__26648 = inst_26652;
var v = inst_26653;
var c = inst_26654;
return (function (p1__26639_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26639_SHARP_);
});
})();
var inst_26658 = cljs.core.filterv(inst_26657,inst_26643);
var inst_26643__$1 = inst_26658;
var state_26673__$1 = (function (){var statearr_26688 = state_26673;
(statearr_26688[(10)] = inst_26643__$1);

return statearr_26688;
})();
var statearr_26689_26705 = state_26673__$1;
(statearr_26689_26705[(2)] = null);

(statearr_26689_26705[(1)] = (2));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26673){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26673);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__23199__auto__ = e26691;
var statearr_26692_26706 = state_26673;
(statearr_26692_26706[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26673);

return cljs.core.cst$kw$recur;
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26707 = state_26673;
state_26673 = G__26707;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26693 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26693[(6)] = c__23386__auto___26695);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
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
var G__26709 = arguments.length;
switch (G__26709) {
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
var c__23386__auto___26754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26733){
var state_val_26734 = (state_26733[(1)]);
if((state_val_26734 === (7))){
var inst_26715 = (state_26733[(7)]);
var inst_26715__$1 = (state_26733[(2)]);
var inst_26716 = (inst_26715__$1 == null);
var inst_26717 = cljs.core.not(inst_26716);
var state_26733__$1 = (function (){var statearr_26735 = state_26733;
(statearr_26735[(7)] = inst_26715__$1);

return statearr_26735;
})();
if(inst_26717){
var statearr_26736_26755 = state_26733__$1;
(statearr_26736_26755[(1)] = (8));

} else {
var statearr_26737_26756 = state_26733__$1;
(statearr_26737_26756[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (1))){
var inst_26710 = (0);
var state_26733__$1 = (function (){var statearr_26738 = state_26733;
(statearr_26738[(8)] = inst_26710);

return statearr_26738;
})();
var statearr_26739_26757 = state_26733__$1;
(statearr_26739_26757[(2)] = null);

(statearr_26739_26757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (4))){
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26733__$1,(7),ch);
} else {
if((state_val_26734 === (6))){
var inst_26728 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26740_26758 = state_26733__$1;
(statearr_26740_26758[(2)] = inst_26728);

(statearr_26740_26758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (3))){
var inst_26730 = (state_26733[(2)]);
var inst_26731 = cljs.core.async.close_BANG_(out);
var state_26733__$1 = (function (){var statearr_26741 = state_26733;
(statearr_26741[(9)] = inst_26730);

return statearr_26741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26733__$1,inst_26731);
} else {
if((state_val_26734 === (2))){
var inst_26710 = (state_26733[(8)]);
var inst_26712 = (inst_26710 < n);
var state_26733__$1 = state_26733;
if(cljs.core.truth_(inst_26712)){
var statearr_26742_26759 = state_26733__$1;
(statearr_26742_26759[(1)] = (4));

} else {
var statearr_26743_26760 = state_26733__$1;
(statearr_26743_26760[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (11))){
var inst_26710 = (state_26733[(8)]);
var inst_26720 = (state_26733[(2)]);
var inst_26721 = (inst_26710 + (1));
var inst_26710__$1 = inst_26721;
var state_26733__$1 = (function (){var statearr_26744 = state_26733;
(statearr_26744[(8)] = inst_26710__$1);

(statearr_26744[(10)] = inst_26720);

return statearr_26744;
})();
var statearr_26745_26761 = state_26733__$1;
(statearr_26745_26761[(2)] = null);

(statearr_26745_26761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (9))){
var state_26733__$1 = state_26733;
var statearr_26746_26762 = state_26733__$1;
(statearr_26746_26762[(2)] = null);

(statearr_26746_26762[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (5))){
var state_26733__$1 = state_26733;
var statearr_26747_26763 = state_26733__$1;
(statearr_26747_26763[(2)] = null);

(statearr_26747_26763[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (10))){
var inst_26725 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26748_26764 = state_26733__$1;
(statearr_26748_26764[(2)] = inst_26725);

(statearr_26748_26764[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26734 === (8))){
var inst_26715 = (state_26733[(7)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26733__$1,(11),out,inst_26715);
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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_26749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26749[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_26749[(1)] = (1));

return statearr_26749;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26733){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26733);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26750){if((e26750 instanceof Object)){
var ex__23199__auto__ = e26750;
var statearr_26751_26765 = state_26733;
(statearr_26751_26765[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26733);

return cljs.core.cst$kw$recur;
} else {
throw e26750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26766 = state_26733;
state_26733 = G__26766;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26752 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26752[(6)] = c__23386__auto___26754);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26768 = (function (f,ch,meta26769){
this.f = f;
this.ch = ch;
this.meta26769 = meta26769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26770,meta26769__$1){
var self__ = this;
var _26770__$1 = this;
return (new cljs.core.async.t_cljs$core$async26768(self__.f,self__.ch,meta26769__$1));
}));

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26770){
var self__ = this;
var _26770__$1 = this;
return self__.meta26769;
}));

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26771 = (function (f,ch,meta26769,_,fn1,meta26772){
this.f = f;
this.ch = ch;
this.meta26769 = meta26769;
this._ = _;
this.fn1 = fn1;
this.meta26772 = meta26772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26773,meta26772__$1){
var self__ = this;
var _26773__$1 = this;
return (new cljs.core.async.t_cljs$core$async26771(self__.f,self__.ch,self__.meta26769,self__._,self__.fn1,meta26772__$1));
}));

(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26773){
var self__ = this;
var _26773__$1 = this;
return self__.meta26772;
}));

(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__26767_SHARP_){
var G__26774 = (((p1__26767_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26767_SHARP_) : self__.f.call(null,p1__26767_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26774) : f1.call(null,G__26774));
});
}));

(cljs.core.async.t_cljs$core$async26771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26769,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async26768], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta26772], null);
}));

(cljs.core.async.t_cljs$core$async26771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26771");

(cljs.core.async.t_cljs$core$async26771.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26771.
 */
cljs.core.async.__GT_t_cljs$core$async26771 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26771(f__$1,ch__$1,meta26769__$1,___$2,fn1__$1,meta26772){
return (new cljs.core.async.t_cljs$core$async26771(f__$1,ch__$1,meta26769__$1,___$2,fn1__$1,meta26772));
});

}

return (new cljs.core.async.t_cljs$core$async26771(self__.f,self__.ch,self__.meta26769,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26775 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26775) : self__.f.call(null,G__26775));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26769], null);
}));

(cljs.core.async.t_cljs$core$async26768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26768");

(cljs.core.async.t_cljs$core$async26768.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26768.
 */
cljs.core.async.__GT_t_cljs$core$async26768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26768(f__$1,ch__$1,meta26769){
return (new cljs.core.async.t_cljs$core$async26768(f__$1,ch__$1,meta26769));
});

}

return (new cljs.core.async.t_cljs$core$async26768(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26776 = (function (f,ch,meta26777){
this.f = f;
this.ch = ch;
this.meta26777 = meta26777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26778,meta26777__$1){
var self__ = this;
var _26778__$1 = this;
return (new cljs.core.async.t_cljs$core$async26776(self__.f,self__.ch,meta26777__$1));
}));

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26778){
var self__ = this;
var _26778__$1 = this;
return self__.meta26777;
}));

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async26776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26777], null);
}));

(cljs.core.async.t_cljs$core$async26776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26776");

(cljs.core.async.t_cljs$core$async26776.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26776.
 */
cljs.core.async.__GT_t_cljs$core$async26776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26776(f__$1,ch__$1,meta26777){
return (new cljs.core.async.t_cljs$core$async26776(f__$1,ch__$1,meta26777));
});

}

return (new cljs.core.async.t_cljs$core$async26776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26779 = (function (p,ch,meta26780){
this.p = p;
this.ch = ch;
this.meta26780 = meta26780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26781,meta26780__$1){
var self__ = this;
var _26781__$1 = this;
return (new cljs.core.async.t_cljs$core$async26779(self__.p,self__.ch,meta26780__$1));
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26781){
var self__ = this;
var _26781__$1 = this;
return self__.meta26780;
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta26780], null);
}));

(cljs.core.async.t_cljs$core$async26779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26779");

(cljs.core.async.t_cljs$core$async26779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async26779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26779.
 */
cljs.core.async.__GT_t_cljs$core$async26779 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26779(p__$1,ch__$1,meta26780){
return (new cljs.core.async.t_cljs$core$async26779(p__$1,ch__$1,meta26780));
});

}

return (new cljs.core.async.t_cljs$core$async26779(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26783 = arguments.length;
switch (G__26783) {
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
var c__23386__auto___26823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26804){
var state_val_26805 = (state_26804[(1)]);
if((state_val_26805 === (7))){
var inst_26800 = (state_26804[(2)]);
var state_26804__$1 = state_26804;
var statearr_26806_26824 = state_26804__$1;
(statearr_26806_26824[(2)] = inst_26800);

(statearr_26806_26824[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (1))){
var state_26804__$1 = state_26804;
var statearr_26807_26825 = state_26804__$1;
(statearr_26807_26825[(2)] = null);

(statearr_26807_26825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (4))){
var inst_26786 = (state_26804[(7)]);
var inst_26786__$1 = (state_26804[(2)]);
var inst_26787 = (inst_26786__$1 == null);
var state_26804__$1 = (function (){var statearr_26808 = state_26804;
(statearr_26808[(7)] = inst_26786__$1);

return statearr_26808;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26809_26826 = state_26804__$1;
(statearr_26809_26826[(1)] = (5));

} else {
var statearr_26810_26827 = state_26804__$1;
(statearr_26810_26827[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (6))){
var inst_26786 = (state_26804[(7)]);
var inst_26791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26786) : p.call(null,inst_26786));
var state_26804__$1 = state_26804;
if(cljs.core.truth_(inst_26791)){
var statearr_26811_26828 = state_26804__$1;
(statearr_26811_26828[(1)] = (8));

} else {
var statearr_26812_26829 = state_26804__$1;
(statearr_26812_26829[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (3))){
var inst_26802 = (state_26804[(2)]);
var state_26804__$1 = state_26804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26804__$1,inst_26802);
} else {
if((state_val_26805 === (2))){
var state_26804__$1 = state_26804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26804__$1,(4),ch);
} else {
if((state_val_26805 === (11))){
var inst_26794 = (state_26804[(2)]);
var state_26804__$1 = state_26804;
var statearr_26813_26830 = state_26804__$1;
(statearr_26813_26830[(2)] = inst_26794);

(statearr_26813_26830[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (9))){
var state_26804__$1 = state_26804;
var statearr_26814_26831 = state_26804__$1;
(statearr_26814_26831[(2)] = null);

(statearr_26814_26831[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (5))){
var inst_26789 = cljs.core.async.close_BANG_(out);
var state_26804__$1 = state_26804;
var statearr_26815_26832 = state_26804__$1;
(statearr_26815_26832[(2)] = inst_26789);

(statearr_26815_26832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (10))){
var inst_26797 = (state_26804[(2)]);
var state_26804__$1 = (function (){var statearr_26816 = state_26804;
(statearr_26816[(8)] = inst_26797);

return statearr_26816;
})();
var statearr_26817_26833 = state_26804__$1;
(statearr_26817_26833[(2)] = null);

(statearr_26817_26833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26805 === (8))){
var inst_26786 = (state_26804[(7)]);
var state_26804__$1 = state_26804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26804__$1,(11),out,inst_26786);
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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_26818 = [null,null,null,null,null,null,null,null,null];
(statearr_26818[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_26818[(1)] = (1));

return statearr_26818;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26804){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26804);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26819){if((e26819 instanceof Object)){
var ex__23199__auto__ = e26819;
var statearr_26820_26834 = state_26804;
(statearr_26820_26834[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26804);

return cljs.core.cst$kw$recur;
} else {
throw e26819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26835 = state_26804;
state_26804 = G__26835;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26821 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26821[(6)] = c__23386__auto___26823);

return statearr_26821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26837 = arguments.length;
switch (G__26837) {
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
var c__23386__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (7))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26902_26940 = state_26900__$1;
(statearr_26902_26940[(2)] = inst_26896);

(statearr_26902_26940[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (20))){
var inst_26866 = (state_26900[(7)]);
var inst_26877 = (state_26900[(2)]);
var inst_26878 = cljs.core.next(inst_26866);
var inst_26852 = inst_26878;
var inst_26853 = null;
var inst_26854 = (0);
var inst_26855 = (0);
var state_26900__$1 = (function (){var statearr_26903 = state_26900;
(statearr_26903[(8)] = inst_26853);

(statearr_26903[(9)] = inst_26855);

(statearr_26903[(10)] = inst_26854);

(statearr_26903[(11)] = inst_26852);

(statearr_26903[(12)] = inst_26877);

return statearr_26903;
})();
var statearr_26904_26941 = state_26900__$1;
(statearr_26904_26941[(2)] = null);

(statearr_26904_26941[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (1))){
var state_26900__$1 = state_26900;
var statearr_26905_26942 = state_26900__$1;
(statearr_26905_26942[(2)] = null);

(statearr_26905_26942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (4))){
var inst_26841 = (state_26900[(13)]);
var inst_26841__$1 = (state_26900[(2)]);
var inst_26842 = (inst_26841__$1 == null);
var state_26900__$1 = (function (){var statearr_26906 = state_26900;
(statearr_26906[(13)] = inst_26841__$1);

return statearr_26906;
})();
if(cljs.core.truth_(inst_26842)){
var statearr_26907_26943 = state_26900__$1;
(statearr_26907_26943[(1)] = (5));

} else {
var statearr_26908_26944 = state_26900__$1;
(statearr_26908_26944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (15))){
var state_26900__$1 = state_26900;
var statearr_26912_26945 = state_26900__$1;
(statearr_26912_26945[(2)] = null);

(statearr_26912_26945[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (21))){
var state_26900__$1 = state_26900;
var statearr_26913_26946 = state_26900__$1;
(statearr_26913_26946[(2)] = null);

(statearr_26913_26946[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (13))){
var inst_26853 = (state_26900[(8)]);
var inst_26855 = (state_26900[(9)]);
var inst_26854 = (state_26900[(10)]);
var inst_26852 = (state_26900[(11)]);
var inst_26862 = (state_26900[(2)]);
var inst_26863 = (inst_26855 + (1));
var tmp26909 = inst_26853;
var tmp26910 = inst_26854;
var tmp26911 = inst_26852;
var inst_26852__$1 = tmp26911;
var inst_26853__$1 = tmp26909;
var inst_26854__$1 = tmp26910;
var inst_26855__$1 = inst_26863;
var state_26900__$1 = (function (){var statearr_26914 = state_26900;
(statearr_26914[(8)] = inst_26853__$1);

(statearr_26914[(9)] = inst_26855__$1);

(statearr_26914[(14)] = inst_26862);

(statearr_26914[(10)] = inst_26854__$1);

(statearr_26914[(11)] = inst_26852__$1);

return statearr_26914;
})();
var statearr_26915_26947 = state_26900__$1;
(statearr_26915_26947[(2)] = null);

(statearr_26915_26947[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (22))){
var state_26900__$1 = state_26900;
var statearr_26916_26948 = state_26900__$1;
(statearr_26916_26948[(2)] = null);

(statearr_26916_26948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (6))){
var inst_26841 = (state_26900[(13)]);
var inst_26850 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26841) : f.call(null,inst_26841));
var inst_26851 = cljs.core.seq(inst_26850);
var inst_26852 = inst_26851;
var inst_26853 = null;
var inst_26854 = (0);
var inst_26855 = (0);
var state_26900__$1 = (function (){var statearr_26917 = state_26900;
(statearr_26917[(8)] = inst_26853);

(statearr_26917[(9)] = inst_26855);

(statearr_26917[(10)] = inst_26854);

(statearr_26917[(11)] = inst_26852);

return statearr_26917;
})();
var statearr_26918_26949 = state_26900__$1;
(statearr_26918_26949[(2)] = null);

(statearr_26918_26949[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (17))){
var inst_26866 = (state_26900[(7)]);
var inst_26870 = cljs.core.chunk_first(inst_26866);
var inst_26871 = cljs.core.chunk_rest(inst_26866);
var inst_26872 = cljs.core.count(inst_26870);
var inst_26852 = inst_26871;
var inst_26853 = inst_26870;
var inst_26854 = inst_26872;
var inst_26855 = (0);
var state_26900__$1 = (function (){var statearr_26919 = state_26900;
(statearr_26919[(8)] = inst_26853);

(statearr_26919[(9)] = inst_26855);

(statearr_26919[(10)] = inst_26854);

(statearr_26919[(11)] = inst_26852);

return statearr_26919;
})();
var statearr_26920_26950 = state_26900__$1;
(statearr_26920_26950[(2)] = null);

(statearr_26920_26950[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (3))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (12))){
var inst_26886 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26921_26951 = state_26900__$1;
(statearr_26921_26951[(2)] = inst_26886);

(statearr_26921_26951[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (2))){
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26900__$1,(4),in$);
} else {
if((state_val_26901 === (23))){
var inst_26894 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26922_26952 = state_26900__$1;
(statearr_26922_26952[(2)] = inst_26894);

(statearr_26922_26952[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (19))){
var inst_26881 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26923_26953 = state_26900__$1;
(statearr_26923_26953[(2)] = inst_26881);

(statearr_26923_26953[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (11))){
var inst_26852 = (state_26900[(11)]);
var inst_26866 = (state_26900[(7)]);
var inst_26866__$1 = cljs.core.seq(inst_26852);
var state_26900__$1 = (function (){var statearr_26924 = state_26900;
(statearr_26924[(7)] = inst_26866__$1);

return statearr_26924;
})();
if(inst_26866__$1){
var statearr_26925_26954 = state_26900__$1;
(statearr_26925_26954[(1)] = (14));

} else {
var statearr_26926_26955 = state_26900__$1;
(statearr_26926_26955[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (9))){
var inst_26888 = (state_26900[(2)]);
var inst_26889 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26900__$1 = (function (){var statearr_26927 = state_26900;
(statearr_26927[(15)] = inst_26888);

return statearr_26927;
})();
if(cljs.core.truth_(inst_26889)){
var statearr_26928_26956 = state_26900__$1;
(statearr_26928_26956[(1)] = (21));

} else {
var statearr_26929_26957 = state_26900__$1;
(statearr_26929_26957[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (5))){
var inst_26844 = cljs.core.async.close_BANG_(out);
var state_26900__$1 = state_26900;
var statearr_26930_26958 = state_26900__$1;
(statearr_26930_26958[(2)] = inst_26844);

(statearr_26930_26958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (14))){
var inst_26866 = (state_26900[(7)]);
var inst_26868 = cljs.core.chunked_seq_QMARK_(inst_26866);
var state_26900__$1 = state_26900;
if(inst_26868){
var statearr_26931_26959 = state_26900__$1;
(statearr_26931_26959[(1)] = (17));

} else {
var statearr_26932_26960 = state_26900__$1;
(statearr_26932_26960[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (16))){
var inst_26884 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26933_26961 = state_26900__$1;
(statearr_26933_26961[(2)] = inst_26884);

(statearr_26933_26961[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26901 === (10))){
var inst_26853 = (state_26900[(8)]);
var inst_26855 = (state_26900[(9)]);
var inst_26860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26853,inst_26855);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26900__$1,(13),out,inst_26860);
} else {
if((state_val_26901 === (18))){
var inst_26866 = (state_26900[(7)]);
var inst_26875 = cljs.core.first(inst_26866);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26900__$1,(20),out,inst_26875);
} else {
if((state_val_26901 === (8))){
var inst_26855 = (state_26900[(9)]);
var inst_26854 = (state_26900[(10)]);
var inst_26857 = (inst_26855 < inst_26854);
var inst_26858 = inst_26857;
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26858)){
var statearr_26934_26962 = state_26900__$1;
(statearr_26934_26962[(1)] = (10));

} else {
var statearr_26935_26963 = state_26900__$1;
(statearr_26935_26963[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____0 = (function (){
var statearr_26936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26936[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__);

(statearr_26936[(1)] = (1));

return statearr_26936;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____1 = (function (state_26900){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26900);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e26937){if((e26937 instanceof Object)){
var ex__23199__auto__ = e26937;
var statearr_26938_26964 = state_26900;
(statearr_26938_26964[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26900);

return cljs.core.cst$kw$recur;
} else {
throw e26937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__26965 = state_26900;
state_26900 = G__26965;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23196__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_26939 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_26939[(6)] = c__23386__auto__);

return statearr_26939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));

return c__23386__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26967 = arguments.length;
switch (G__26967) {
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
var G__26970 = arguments.length;
switch (G__26970) {
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
var G__26973 = arguments.length;
switch (G__26973) {
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
var c__23386__auto___27020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_26997){
var state_val_26998 = (state_26997[(1)]);
if((state_val_26998 === (7))){
var inst_26992 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_26999_27021 = state_26997__$1;
(statearr_26999_27021[(2)] = inst_26992);

(statearr_26999_27021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (1))){
var inst_26974 = null;
var state_26997__$1 = (function (){var statearr_27000 = state_26997;
(statearr_27000[(7)] = inst_26974);

return statearr_27000;
})();
var statearr_27001_27022 = state_26997__$1;
(statearr_27001_27022[(2)] = null);

(statearr_27001_27022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (4))){
var inst_26977 = (state_26997[(8)]);
var inst_26977__$1 = (state_26997[(2)]);
var inst_26978 = (inst_26977__$1 == null);
var inst_26979 = cljs.core.not(inst_26978);
var state_26997__$1 = (function (){var statearr_27002 = state_26997;
(statearr_27002[(8)] = inst_26977__$1);

return statearr_27002;
})();
if(inst_26979){
var statearr_27003_27023 = state_26997__$1;
(statearr_27003_27023[(1)] = (5));

} else {
var statearr_27004_27024 = state_26997__$1;
(statearr_27004_27024[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (6))){
var state_26997__$1 = state_26997;
var statearr_27005_27025 = state_26997__$1;
(statearr_27005_27025[(2)] = null);

(statearr_27005_27025[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (3))){
var inst_26994 = (state_26997[(2)]);
var inst_26995 = cljs.core.async.close_BANG_(out);
var state_26997__$1 = (function (){var statearr_27006 = state_26997;
(statearr_27006[(9)] = inst_26994);

return statearr_27006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26997__$1,inst_26995);
} else {
if((state_val_26998 === (2))){
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26997__$1,(4),ch);
} else {
if((state_val_26998 === (11))){
var inst_26977 = (state_26997[(8)]);
var inst_26986 = (state_26997[(2)]);
var inst_26974 = inst_26977;
var state_26997__$1 = (function (){var statearr_27007 = state_26997;
(statearr_27007[(7)] = inst_26974);

(statearr_27007[(10)] = inst_26986);

return statearr_27007;
})();
var statearr_27008_27026 = state_26997__$1;
(statearr_27008_27026[(2)] = null);

(statearr_27008_27026[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (9))){
var inst_26977 = (state_26997[(8)]);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26997__$1,(11),out,inst_26977);
} else {
if((state_val_26998 === (5))){
var inst_26974 = (state_26997[(7)]);
var inst_26977 = (state_26997[(8)]);
var inst_26981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26977,inst_26974);
var state_26997__$1 = state_26997;
if(inst_26981){
var statearr_27010_27027 = state_26997__$1;
(statearr_27010_27027[(1)] = (8));

} else {
var statearr_27011_27028 = state_26997__$1;
(statearr_27011_27028[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (10))){
var inst_26989 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27012_27029 = state_26997__$1;
(statearr_27012_27029[(2)] = inst_26989);

(statearr_27012_27029[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26998 === (8))){
var inst_26974 = (state_26997[(7)]);
var tmp27009 = inst_26974;
var inst_26974__$1 = tmp27009;
var state_26997__$1 = (function (){var statearr_27013 = state_26997;
(statearr_27013[(7)] = inst_26974__$1);

return statearr_27013;
})();
var statearr_27014_27030 = state_26997__$1;
(statearr_27014_27030[(2)] = null);

(statearr_27014_27030[(1)] = (2));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_27015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27015[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_27015[(1)] = (1));

return statearr_27015;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_26997){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_26997);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e27016){if((e27016 instanceof Object)){
var ex__23199__auto__ = e27016;
var statearr_27017_27031 = state_26997;
(statearr_27017_27031[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26997);

return cljs.core.cst$kw$recur;
} else {
throw e27016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__27032 = state_26997;
state_26997 = G__27032;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_26997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_26997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_27018 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_27018[(6)] = c__23386__auto___27020);

return statearr_27018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27034 = arguments.length;
switch (G__27034) {
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
var c__23386__auto___27100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_27072){
var state_val_27073 = (state_27072[(1)]);
if((state_val_27073 === (7))){
var inst_27068 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27074_27101 = state_27072__$1;
(statearr_27074_27101[(2)] = inst_27068);

(statearr_27074_27101[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (1))){
var inst_27035 = (new Array(n));
var inst_27036 = inst_27035;
var inst_27037 = (0);
var state_27072__$1 = (function (){var statearr_27075 = state_27072;
(statearr_27075[(7)] = inst_27037);

(statearr_27075[(8)] = inst_27036);

return statearr_27075;
})();
var statearr_27076_27102 = state_27072__$1;
(statearr_27076_27102[(2)] = null);

(statearr_27076_27102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (4))){
var inst_27040 = (state_27072[(9)]);
var inst_27040__$1 = (state_27072[(2)]);
var inst_27041 = (inst_27040__$1 == null);
var inst_27042 = cljs.core.not(inst_27041);
var state_27072__$1 = (function (){var statearr_27077 = state_27072;
(statearr_27077[(9)] = inst_27040__$1);

return statearr_27077;
})();
if(inst_27042){
var statearr_27078_27103 = state_27072__$1;
(statearr_27078_27103[(1)] = (5));

} else {
var statearr_27079_27104 = state_27072__$1;
(statearr_27079_27104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (15))){
var inst_27062 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27080_27105 = state_27072__$1;
(statearr_27080_27105[(2)] = inst_27062);

(statearr_27080_27105[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (13))){
var state_27072__$1 = state_27072;
var statearr_27081_27106 = state_27072__$1;
(statearr_27081_27106[(2)] = null);

(statearr_27081_27106[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (6))){
var inst_27037 = (state_27072[(7)]);
var inst_27058 = (inst_27037 > (0));
var state_27072__$1 = state_27072;
if(cljs.core.truth_(inst_27058)){
var statearr_27082_27107 = state_27072__$1;
(statearr_27082_27107[(1)] = (12));

} else {
var statearr_27083_27108 = state_27072__$1;
(statearr_27083_27108[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (3))){
var inst_27070 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27072__$1,inst_27070);
} else {
if((state_val_27073 === (12))){
var inst_27036 = (state_27072[(8)]);
var inst_27060 = cljs.core.vec(inst_27036);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27072__$1,(15),out,inst_27060);
} else {
if((state_val_27073 === (2))){
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27072__$1,(4),ch);
} else {
if((state_val_27073 === (11))){
var inst_27052 = (state_27072[(2)]);
var inst_27053 = (new Array(n));
var inst_27036 = inst_27053;
var inst_27037 = (0);
var state_27072__$1 = (function (){var statearr_27084 = state_27072;
(statearr_27084[(10)] = inst_27052);

(statearr_27084[(7)] = inst_27037);

(statearr_27084[(8)] = inst_27036);

return statearr_27084;
})();
var statearr_27085_27109 = state_27072__$1;
(statearr_27085_27109[(2)] = null);

(statearr_27085_27109[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (9))){
var inst_27036 = (state_27072[(8)]);
var inst_27050 = cljs.core.vec(inst_27036);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27072__$1,(11),out,inst_27050);
} else {
if((state_val_27073 === (5))){
var inst_27037 = (state_27072[(7)]);
var inst_27040 = (state_27072[(9)]);
var inst_27045 = (state_27072[(11)]);
var inst_27036 = (state_27072[(8)]);
var inst_27044 = (inst_27036[inst_27037] = inst_27040);
var inst_27045__$1 = (inst_27037 + (1));
var inst_27046 = (inst_27045__$1 < n);
var state_27072__$1 = (function (){var statearr_27086 = state_27072;
(statearr_27086[(12)] = inst_27044);

(statearr_27086[(11)] = inst_27045__$1);

return statearr_27086;
})();
if(cljs.core.truth_(inst_27046)){
var statearr_27087_27110 = state_27072__$1;
(statearr_27087_27110[(1)] = (8));

} else {
var statearr_27088_27111 = state_27072__$1;
(statearr_27088_27111[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (14))){
var inst_27065 = (state_27072[(2)]);
var inst_27066 = cljs.core.async.close_BANG_(out);
var state_27072__$1 = (function (){var statearr_27090 = state_27072;
(statearr_27090[(13)] = inst_27065);

return statearr_27090;
})();
var statearr_27091_27112 = state_27072__$1;
(statearr_27091_27112[(2)] = inst_27066);

(statearr_27091_27112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (10))){
var inst_27056 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27092_27113 = state_27072__$1;
(statearr_27092_27113[(2)] = inst_27056);

(statearr_27092_27113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27073 === (8))){
var inst_27045 = (state_27072[(11)]);
var inst_27036 = (state_27072[(8)]);
var tmp27089 = inst_27036;
var inst_27036__$1 = tmp27089;
var inst_27037 = inst_27045;
var state_27072__$1 = (function (){var statearr_27093 = state_27072;
(statearr_27093[(7)] = inst_27037);

(statearr_27093[(8)] = inst_27036__$1);

return statearr_27093;
})();
var statearr_27094_27114 = state_27072__$1;
(statearr_27094_27114[(2)] = null);

(statearr_27094_27114[(1)] = (2));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_27095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27095[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_27095[(1)] = (1));

return statearr_27095;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_27072){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_27072);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e27096){if((e27096 instanceof Object)){
var ex__23199__auto__ = e27096;
var statearr_27097_27115 = state_27072;
(statearr_27097_27115[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27072);

return cljs.core.cst$kw$recur;
} else {
throw e27096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__27116 = state_27072;
state_27072 = G__27116;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_27098 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_27098[(6)] = c__23386__auto___27100);

return statearr_27098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27118 = arguments.length;
switch (G__27118) {
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
var c__23386__auto___27188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23387__auto__ = (function (){var switch__23195__auto__ = (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (7))){
var inst_27156 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27162_27189 = state_27160__$1;
(statearr_27162_27189[(2)] = inst_27156);

(statearr_27162_27189[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (1))){
var inst_27119 = [];
var inst_27120 = inst_27119;
var inst_27121 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_27160__$1 = (function (){var statearr_27163 = state_27160;
(statearr_27163[(7)] = inst_27121);

(statearr_27163[(8)] = inst_27120);

return statearr_27163;
})();
var statearr_27164_27190 = state_27160__$1;
(statearr_27164_27190[(2)] = null);

(statearr_27164_27190[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (4))){
var inst_27124 = (state_27160[(9)]);
var inst_27124__$1 = (state_27160[(2)]);
var inst_27125 = (inst_27124__$1 == null);
var inst_27126 = cljs.core.not(inst_27125);
var state_27160__$1 = (function (){var statearr_27165 = state_27160;
(statearr_27165[(9)] = inst_27124__$1);

return statearr_27165;
})();
if(inst_27126){
var statearr_27166_27191 = state_27160__$1;
(statearr_27166_27191[(1)] = (5));

} else {
var statearr_27167_27192 = state_27160__$1;
(statearr_27167_27192[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (15))){
var inst_27150 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27168_27193 = state_27160__$1;
(statearr_27168_27193[(2)] = inst_27150);

(statearr_27168_27193[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (13))){
var state_27160__$1 = state_27160;
var statearr_27169_27194 = state_27160__$1;
(statearr_27169_27194[(2)] = null);

(statearr_27169_27194[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (6))){
var inst_27120 = (state_27160[(8)]);
var inst_27145 = inst_27120.length;
var inst_27146 = (inst_27145 > (0));
var state_27160__$1 = state_27160;
if(cljs.core.truth_(inst_27146)){
var statearr_27170_27195 = state_27160__$1;
(statearr_27170_27195[(1)] = (12));

} else {
var statearr_27171_27196 = state_27160__$1;
(statearr_27171_27196[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (3))){
var inst_27158 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27160__$1,inst_27158);
} else {
if((state_val_27161 === (12))){
var inst_27120 = (state_27160[(8)]);
var inst_27148 = cljs.core.vec(inst_27120);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27160__$1,(15),out,inst_27148);
} else {
if((state_val_27161 === (2))){
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27160__$1,(4),ch);
} else {
if((state_val_27161 === (11))){
var inst_27124 = (state_27160[(9)]);
var inst_27128 = (state_27160[(10)]);
var inst_27138 = (state_27160[(2)]);
var inst_27139 = [];
var inst_27140 = inst_27139.push(inst_27124);
var inst_27120 = inst_27139;
var inst_27121 = inst_27128;
var state_27160__$1 = (function (){var statearr_27172 = state_27160;
(statearr_27172[(11)] = inst_27140);

(statearr_27172[(7)] = inst_27121);

(statearr_27172[(8)] = inst_27120);

(statearr_27172[(12)] = inst_27138);

return statearr_27172;
})();
var statearr_27173_27197 = state_27160__$1;
(statearr_27173_27197[(2)] = null);

(statearr_27173_27197[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (9))){
var inst_27120 = (state_27160[(8)]);
var inst_27136 = cljs.core.vec(inst_27120);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27160__$1,(11),out,inst_27136);
} else {
if((state_val_27161 === (5))){
var inst_27124 = (state_27160[(9)]);
var inst_27121 = (state_27160[(7)]);
var inst_27128 = (state_27160[(10)]);
var inst_27128__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27124) : f.call(null,inst_27124));
var inst_27129 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27128__$1,inst_27121);
var inst_27130 = cljs.core.keyword_identical_QMARK_(inst_27121,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_27131 = ((inst_27129) || (inst_27130));
var state_27160__$1 = (function (){var statearr_27174 = state_27160;
(statearr_27174[(10)] = inst_27128__$1);

return statearr_27174;
})();
if(cljs.core.truth_(inst_27131)){
var statearr_27175_27198 = state_27160__$1;
(statearr_27175_27198[(1)] = (8));

} else {
var statearr_27176_27199 = state_27160__$1;
(statearr_27176_27199[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (14))){
var inst_27153 = (state_27160[(2)]);
var inst_27154 = cljs.core.async.close_BANG_(out);
var state_27160__$1 = (function (){var statearr_27178 = state_27160;
(statearr_27178[(13)] = inst_27153);

return statearr_27178;
})();
var statearr_27179_27200 = state_27160__$1;
(statearr_27179_27200[(2)] = inst_27154);

(statearr_27179_27200[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (10))){
var inst_27143 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27180_27201 = state_27160__$1;
(statearr_27180_27201[(2)] = inst_27143);

(statearr_27180_27201[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27161 === (8))){
var inst_27124 = (state_27160[(9)]);
var inst_27120 = (state_27160[(8)]);
var inst_27128 = (state_27160[(10)]);
var inst_27133 = inst_27120.push(inst_27124);
var tmp27177 = inst_27120;
var inst_27120__$1 = tmp27177;
var inst_27121 = inst_27128;
var state_27160__$1 = (function (){var statearr_27181 = state_27160;
(statearr_27181[(7)] = inst_27121);

(statearr_27181[(14)] = inst_27133);

(statearr_27181[(8)] = inst_27120__$1);

return statearr_27181;
})();
var statearr_27182_27202 = state_27160__$1;
(statearr_27182_27202[(2)] = null);

(statearr_27182_27202[(1)] = (2));


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
var cljs$core$async$state_machine__23196__auto__ = null;
var cljs$core$async$state_machine__23196__auto____0 = (function (){
var statearr_27183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27183[(0)] = cljs$core$async$state_machine__23196__auto__);

(statearr_27183[(1)] = (1));

return statearr_27183;
});
var cljs$core$async$state_machine__23196__auto____1 = (function (state_27160){
while(true){
var ret_value__23197__auto__ = (function (){try{while(true){
var result__23198__auto__ = switch__23195__auto__(state_27160);
if(cljs.core.keyword_identical_QMARK_(result__23198__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23198__auto__;
}
break;
}
}catch (e27184){if((e27184 instanceof Object)){
var ex__23199__auto__ = e27184;
var statearr_27185_27203 = state_27160;
(statearr_27185_27203[(5)] = ex__23199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27160);

return cljs.core.cst$kw$recur;
} else {
throw e27184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23197__auto__,cljs.core.cst$kw$recur)){
var G__27204 = state_27160;
state_27160 = G__27204;
continue;
} else {
return ret_value__23197__auto__;
}
break;
}
});
cljs$core$async$state_machine__23196__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23196__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23196__auto____0;
cljs$core$async$state_machine__23196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23196__auto____1;
return cljs$core$async$state_machine__23196__auto__;
})()
})();
var state__23388__auto__ = (function (){var statearr_27186 = (f__23387__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23387__auto__.cljs$core$IFn$_invoke$arity$0() : f__23387__auto__.call(null));
(statearr_27186[(6)] = c__23386__auto___27188);

return statearr_27186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23388__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

