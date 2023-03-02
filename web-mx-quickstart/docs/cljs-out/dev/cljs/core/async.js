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
var G__30958 = arguments.length;
switch (G__30958) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30959 = (function (f,blockable,meta30960){
this.f = f;
this.blockable = blockable;
this.meta30960 = meta30960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30961,meta30960__$1){
var self__ = this;
var _30961__$1 = this;
return (new cljs.core.async.t_cljs$core$async30959(self__.f,self__.blockable,meta30960__$1));
}));

(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30961){
var self__ = this;
var _30961__$1 = this;
return self__.meta30960;
}));

(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta30960], null);
}));

(cljs.core.async.t_cljs$core$async30959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30959");

(cljs.core.async.t_cljs$core$async30959.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30959.
 */
cljs.core.async.__GT_t_cljs$core$async30959 = (function cljs$core$async$__GT_t_cljs$core$async30959(f__$1,blockable__$1,meta30960){
return (new cljs.core.async.t_cljs$core$async30959(f__$1,blockable__$1,meta30960));
});

}

return (new cljs.core.async.t_cljs$core$async30959(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30965 = arguments.length;
switch (G__30965) {
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
var G__30968 = arguments.length;
switch (G__30968) {
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
var G__30971 = arguments.length;
switch (G__30971) {
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
var val_30973 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30973) : fn1.call(null,val_30973));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30973) : fn1.call(null,val_30973));
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
var G__30975 = arguments.length;
switch (G__30975) {
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
var n__4613__auto___30977 = n;
var x_30978 = (0);
while(true){
if((x_30978 < n__4613__auto___30977)){
(a[x_30978] = (0));

var G__30979 = (x_30978 + (1));
x_30978 = G__30979;
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

var G__30980 = (i + (1));
i = G__30980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30981 = (function (flag,meta30982){
this.flag = flag;
this.meta30982 = meta30982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30983,meta30982__$1){
var self__ = this;
var _30983__$1 = this;
return (new cljs.core.async.t_cljs$core$async30981(self__.flag,meta30982__$1));
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30983){
var self__ = this;
var _30983__$1 = this;
return self__.meta30982;
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta30982], null);
}));

(cljs.core.async.t_cljs$core$async30981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30981");

(cljs.core.async.t_cljs$core$async30981.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30981.
 */
cljs.core.async.__GT_t_cljs$core$async30981 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30981(flag__$1,meta30982){
return (new cljs.core.async.t_cljs$core$async30981(flag__$1,meta30982));
});

}

return (new cljs.core.async.t_cljs$core$async30981(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30984 = (function (flag,cb,meta30985){
this.flag = flag;
this.cb = cb;
this.meta30985 = meta30985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30986,meta30985__$1){
var self__ = this;
var _30986__$1 = this;
return (new cljs.core.async.t_cljs$core$async30984(self__.flag,self__.cb,meta30985__$1));
}));

(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30986){
var self__ = this;
var _30986__$1 = this;
return self__.meta30985;
}));

(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta30985], null);
}));

(cljs.core.async.t_cljs$core$async30984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30984");

(cljs.core.async.t_cljs$core$async30984.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30984.
 */
cljs.core.async.__GT_t_cljs$core$async30984 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30984(flag__$1,cb__$1,meta30985){
return (new cljs.core.async.t_cljs$core$async30984(flag__$1,cb__$1,meta30985));
});

}

return (new cljs.core.async.t_cljs$core$async30984(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30987_SHARP_){
var G__30989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30987_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30989) : fret.call(null,G__30989));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30988_SHARP_){
var G__30990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30988_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30990) : fret.call(null,G__30990));
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
var G__30991 = (i + (1));
i = G__30991;
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
var len__4736__auto___30997 = arguments.length;
var i__4737__auto___30998 = (0);
while(true){
if((i__4737__auto___30998 < len__4736__auto___30997)){
args__4742__auto__.push((arguments[i__4737__auto___30998]));

var G__30999 = (i__4737__auto___30998 + (1));
i__4737__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30994){
var map__30995 = p__30994;
var map__30995__$1 = (((((!((map__30995 == null))))?(((((map__30995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30995):map__30995);
var opts = map__30995__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30992){
var G__30993 = cljs.core.first(seq30992);
var seq30992__$1 = cljs.core.next(seq30992);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30993,seq30992__$1);
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
var G__31001 = arguments.length;
switch (G__31001) {
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
var c__29017__auto___31047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31025){
var state_val_31026 = (state_31025[(1)]);
if((state_val_31026 === (7))){
var inst_31021 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31027_31048 = state_31025__$1;
(statearr_31027_31048[(2)] = inst_31021);

(statearr_31027_31048[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (1))){
var state_31025__$1 = state_31025;
var statearr_31028_31049 = state_31025__$1;
(statearr_31028_31049[(2)] = null);

(statearr_31028_31049[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (4))){
var inst_31004 = (state_31025[(7)]);
var inst_31004__$1 = (state_31025[(2)]);
var inst_31005 = (inst_31004__$1 == null);
var state_31025__$1 = (function (){var statearr_31029 = state_31025;
(statearr_31029[(7)] = inst_31004__$1);

return statearr_31029;
})();
if(cljs.core.truth_(inst_31005)){
var statearr_31030_31050 = state_31025__$1;
(statearr_31030_31050[(1)] = (5));

} else {
var statearr_31031_31051 = state_31025__$1;
(statearr_31031_31051[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (13))){
var state_31025__$1 = state_31025;
var statearr_31032_31052 = state_31025__$1;
(statearr_31032_31052[(2)] = null);

(statearr_31032_31052[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (6))){
var inst_31004 = (state_31025[(7)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31025__$1,(11),to,inst_31004);
} else {
if((state_val_31026 === (3))){
var inst_31023 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31025__$1,inst_31023);
} else {
if((state_val_31026 === (12))){
var state_31025__$1 = state_31025;
var statearr_31033_31053 = state_31025__$1;
(statearr_31033_31053[(2)] = null);

(statearr_31033_31053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (2))){
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31025__$1,(4),from);
} else {
if((state_val_31026 === (11))){
var inst_31014 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
if(cljs.core.truth_(inst_31014)){
var statearr_31034_31054 = state_31025__$1;
(statearr_31034_31054[(1)] = (12));

} else {
var statearr_31035_31055 = state_31025__$1;
(statearr_31035_31055[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (9))){
var state_31025__$1 = state_31025;
var statearr_31036_31056 = state_31025__$1;
(statearr_31036_31056[(2)] = null);

(statearr_31036_31056[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (5))){
var state_31025__$1 = state_31025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31037_31057 = state_31025__$1;
(statearr_31037_31057[(1)] = (8));

} else {
var statearr_31038_31058 = state_31025__$1;
(statearr_31038_31058[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (14))){
var inst_31019 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31039_31059 = state_31025__$1;
(statearr_31039_31059[(2)] = inst_31019);

(statearr_31039_31059[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (10))){
var inst_31011 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31040_31060 = state_31025__$1;
(statearr_31040_31060[(2)] = inst_31011);

(statearr_31040_31060[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31026 === (8))){
var inst_31008 = cljs.core.async.close_BANG_(to);
var state_31025__$1 = state_31025;
var statearr_31041_31061 = state_31025__$1;
(statearr_31041_31061[(2)] = inst_31008);

(statearr_31041_31061[(1)] = (10));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_31042 = [null,null,null,null,null,null,null,null];
(statearr_31042[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_31042[(1)] = (1));

return statearr_31042;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_31025){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31025);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31043){if((e31043 instanceof Object)){
var ex__28830__auto__ = e31043;
var statearr_31044_31062 = state_31025;
(statearr_31044_31062[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31025);

return cljs.core.cst$kw$recur;
} else {
throw e31043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31063 = state_31025;
state_31025 = G__31063;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_31025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_31025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31045 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31045[(6)] = c__29017__auto___31047);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var process = (function (p__31064){
var vec__31065 = p__31064;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31065,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31065,(1),null);
var job = vec__31065;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29017__auto___31236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31072){
var state_val_31073 = (state_31072[(1)]);
if((state_val_31073 === (1))){
var state_31072__$1 = state_31072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31072__$1,(2),res,v);
} else {
if((state_val_31073 === (2))){
var inst_31069 = (state_31072[(2)]);
var inst_31070 = cljs.core.async.close_BANG_(res);
var state_31072__$1 = (function (){var statearr_31074 = state_31072;
(statearr_31074[(7)] = inst_31069);

return statearr_31074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31072__$1,inst_31070);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_31075 = [null,null,null,null,null,null,null,null];
(statearr_31075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_31075[(1)] = (1));

return statearr_31075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_31072){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31072);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31076){if((e31076 instanceof Object)){
var ex__28830__auto__ = e31076;
var statearr_31077_31237 = state_31072;
(statearr_31077_31237[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31072);

return cljs.core.cst$kw$recur;
} else {
throw e31076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31238 = state_31072;
state_31072 = G__31238;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_31072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_31072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31078 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31078[(6)] = c__29017__auto___31236);

return statearr_31078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31079){
var vec__31080 = p__31079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31080,(1),null);
var job = vec__31080;
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
var n__4613__auto___31239 = n;
var __31240 = (0);
while(true){
if((__31240 < n__4613__auto___31239)){
var G__31083_31241 = type;
var G__31083_31242__$1 = (((G__31083_31241 instanceof cljs.core.Keyword))?G__31083_31241.fqn:null);
switch (G__31083_31242__$1) {
case "compute":
var c__29017__auto___31244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31240,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = ((function (__31240,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function (state_31096){
var state_val_31097 = (state_31096[(1)]);
if((state_val_31097 === (1))){
var state_31096__$1 = state_31096;
var statearr_31098_31245 = state_31096__$1;
(statearr_31098_31245[(2)] = null);

(statearr_31098_31245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31097 === (2))){
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31096__$1,(4),jobs);
} else {
if((state_val_31097 === (3))){
var inst_31094 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31096__$1,inst_31094);
} else {
if((state_val_31097 === (4))){
var inst_31086 = (state_31096[(2)]);
var inst_31087 = process(inst_31086);
var state_31096__$1 = state_31096;
if(cljs.core.truth_(inst_31087)){
var statearr_31099_31246 = state_31096__$1;
(statearr_31099_31246[(1)] = (5));

} else {
var statearr_31100_31247 = state_31096__$1;
(statearr_31100_31247[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31097 === (5))){
var state_31096__$1 = state_31096;
var statearr_31101_31248 = state_31096__$1;
(statearr_31101_31248[(2)] = null);

(statearr_31101_31248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31097 === (6))){
var state_31096__$1 = state_31096;
var statearr_31102_31249 = state_31096__$1;
(statearr_31102_31249[(2)] = null);

(statearr_31102_31249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31097 === (7))){
var inst_31092 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31103_31250 = state_31096__$1;
(statearr_31103_31250[(2)] = inst_31092);

(statearr_31103_31250[(1)] = (3));


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
});})(__31240,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
;
return ((function (__31240,switch__28826__auto__,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_31104 = [null,null,null,null,null,null,null];
(statearr_31104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_31104[(1)] = (1));

return statearr_31104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_31096){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31096);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object)){
var ex__28830__auto__ = e31105;
var statearr_31106_31251 = state_31096;
(statearr_31106_31251[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31096);

return cljs.core.cst$kw$recur;
} else {
throw e31105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31252 = state_31096;
state_31096 = G__31252;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
;})(__31240,switch__28826__auto__,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
})();
var state__29019__auto__ = (function (){var statearr_31107 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31107[(6)] = c__29017__auto___31244);

return statearr_31107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
});})(__31240,c__29017__auto___31244,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
);


break;
case "async":
var c__29017__auto___31253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31240,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = ((function (__31240,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function (state_31120){
var state_val_31121 = (state_31120[(1)]);
if((state_val_31121 === (1))){
var state_31120__$1 = state_31120;
var statearr_31122_31254 = state_31120__$1;
(statearr_31122_31254[(2)] = null);

(statearr_31122_31254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31121 === (2))){
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31120__$1,(4),jobs);
} else {
if((state_val_31121 === (3))){
var inst_31118 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31120__$1,inst_31118);
} else {
if((state_val_31121 === (4))){
var inst_31110 = (state_31120[(2)]);
var inst_31111 = async(inst_31110);
var state_31120__$1 = state_31120;
if(cljs.core.truth_(inst_31111)){
var statearr_31123_31255 = state_31120__$1;
(statearr_31123_31255[(1)] = (5));

} else {
var statearr_31124_31256 = state_31120__$1;
(statearr_31124_31256[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31121 === (5))){
var state_31120__$1 = state_31120;
var statearr_31125_31257 = state_31120__$1;
(statearr_31125_31257[(2)] = null);

(statearr_31125_31257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31121 === (6))){
var state_31120__$1 = state_31120;
var statearr_31126_31258 = state_31120__$1;
(statearr_31126_31258[(2)] = null);

(statearr_31126_31258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31121 === (7))){
var inst_31116 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
var statearr_31127_31259 = state_31120__$1;
(statearr_31127_31259[(2)] = inst_31116);

(statearr_31127_31259[(1)] = (3));


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
});})(__31240,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
;
return ((function (__31240,switch__28826__auto__,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_31128 = [null,null,null,null,null,null,null];
(statearr_31128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_31128[(1)] = (1));

return statearr_31128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_31120){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31120);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31129){if((e31129 instanceof Object)){
var ex__28830__auto__ = e31129;
var statearr_31130_31260 = state_31120;
(statearr_31130_31260[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31120);

return cljs.core.cst$kw$recur;
} else {
throw e31129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31261 = state_31120;
state_31120 = G__31261;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_31120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_31120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
;})(__31240,switch__28826__auto__,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
})();
var state__29019__auto__ = (function (){var statearr_31131 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31131[(6)] = c__29017__auto___31253);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
});})(__31240,c__29017__auto___31253,G__31083_31241,G__31083_31242__$1,n__4613__auto___31239,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31083_31242__$1)].join('')));

}

var G__31262 = (__31240 + (1));
__31240 = G__31262;
continue;
} else {
}
break;
}

var c__29017__auto___31263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31153){
var state_val_31154 = (state_31153[(1)]);
if((state_val_31154 === (7))){
var inst_31149 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
var statearr_31155_31264 = state_31153__$1;
(statearr_31155_31264[(2)] = inst_31149);

(statearr_31155_31264[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31154 === (1))){
var state_31153__$1 = state_31153;
var statearr_31156_31265 = state_31153__$1;
(statearr_31156_31265[(2)] = null);

(statearr_31156_31265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31154 === (4))){
var inst_31134 = (state_31153[(7)]);
var inst_31134__$1 = (state_31153[(2)]);
var inst_31135 = (inst_31134__$1 == null);
var state_31153__$1 = (function (){var statearr_31157 = state_31153;
(statearr_31157[(7)] = inst_31134__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31135)){
var statearr_31158_31266 = state_31153__$1;
(statearr_31158_31266[(1)] = (5));

} else {
var statearr_31159_31267 = state_31153__$1;
(statearr_31159_31267[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31154 === (6))){
var inst_31139 = (state_31153[(8)]);
var inst_31134 = (state_31153[(7)]);
var inst_31139__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31141 = [inst_31134,inst_31139__$1];
var inst_31142 = (new cljs.core.PersistentVector(null,2,(5),inst_31140,inst_31141,null));
var state_31153__$1 = (function (){var statearr_31160 = state_31153;
(statearr_31160[(8)] = inst_31139__$1);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31153__$1,(8),jobs,inst_31142);
} else {
if((state_val_31154 === (3))){
var inst_31151 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31153__$1,inst_31151);
} else {
if((state_val_31154 === (2))){
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31153__$1,(4),from);
} else {
if((state_val_31154 === (9))){
var inst_31146 = (state_31153[(2)]);
var state_31153__$1 = (function (){var statearr_31161 = state_31153;
(statearr_31161[(9)] = inst_31146);

return statearr_31161;
})();
var statearr_31162_31268 = state_31153__$1;
(statearr_31162_31268[(2)] = null);

(statearr_31162_31268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31154 === (5))){
var inst_31137 = cljs.core.async.close_BANG_(jobs);
var state_31153__$1 = state_31153;
var statearr_31163_31269 = state_31153__$1;
(statearr_31163_31269[(2)] = inst_31137);

(statearr_31163_31269[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31154 === (8))){
var inst_31139 = (state_31153[(8)]);
var inst_31144 = (state_31153[(2)]);
var state_31153__$1 = (function (){var statearr_31164 = state_31153;
(statearr_31164[(10)] = inst_31144);

return statearr_31164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31153__$1,(9),results,inst_31139);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_31165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_31165[(1)] = (1));

return statearr_31165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_31153){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31153);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31166){if((e31166 instanceof Object)){
var ex__28830__auto__ = e31166;
var statearr_31167_31270 = state_31153;
(statearr_31167_31270[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31153);

return cljs.core.cst$kw$recur;
} else {
throw e31166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31271 = state_31153;
state_31153 = G__31271;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_31153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_31153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31168 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31168[(6)] = c__29017__auto___31263);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31206){
var state_val_31207 = (state_31206[(1)]);
if((state_val_31207 === (7))){
var inst_31202 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31208_31272 = state_31206__$1;
(statearr_31208_31272[(2)] = inst_31202);

(statearr_31208_31272[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (20))){
var state_31206__$1 = state_31206;
var statearr_31209_31273 = state_31206__$1;
(statearr_31209_31273[(2)] = null);

(statearr_31209_31273[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (1))){
var state_31206__$1 = state_31206;
var statearr_31210_31274 = state_31206__$1;
(statearr_31210_31274[(2)] = null);

(statearr_31210_31274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (4))){
var inst_31171 = (state_31206[(7)]);
var inst_31171__$1 = (state_31206[(2)]);
var inst_31172 = (inst_31171__$1 == null);
var state_31206__$1 = (function (){var statearr_31211 = state_31206;
(statearr_31211[(7)] = inst_31171__$1);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31172)){
var statearr_31212_31275 = state_31206__$1;
(statearr_31212_31275[(1)] = (5));

} else {
var statearr_31213_31276 = state_31206__$1;
(statearr_31213_31276[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (15))){
var inst_31184 = (state_31206[(8)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31206__$1,(18),to,inst_31184);
} else {
if((state_val_31207 === (21))){
var inst_31197 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31214_31277 = state_31206__$1;
(statearr_31214_31277[(2)] = inst_31197);

(statearr_31214_31277[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (13))){
var inst_31199 = (state_31206[(2)]);
var state_31206__$1 = (function (){var statearr_31215 = state_31206;
(statearr_31215[(9)] = inst_31199);

return statearr_31215;
})();
var statearr_31216_31278 = state_31206__$1;
(statearr_31216_31278[(2)] = null);

(statearr_31216_31278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (6))){
var inst_31171 = (state_31206[(7)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31206__$1,(11),inst_31171);
} else {
if((state_val_31207 === (17))){
var inst_31192 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
if(cljs.core.truth_(inst_31192)){
var statearr_31217_31279 = state_31206__$1;
(statearr_31217_31279[(1)] = (19));

} else {
var statearr_31218_31280 = state_31206__$1;
(statearr_31218_31280[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (3))){
var inst_31204 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31206__$1,inst_31204);
} else {
if((state_val_31207 === (12))){
var inst_31181 = (state_31206[(10)]);
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31206__$1,(14),inst_31181);
} else {
if((state_val_31207 === (2))){
var state_31206__$1 = state_31206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31206__$1,(4),results);
} else {
if((state_val_31207 === (19))){
var state_31206__$1 = state_31206;
var statearr_31219_31281 = state_31206__$1;
(statearr_31219_31281[(2)] = null);

(statearr_31219_31281[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (11))){
var inst_31181 = (state_31206[(2)]);
var state_31206__$1 = (function (){var statearr_31220 = state_31206;
(statearr_31220[(10)] = inst_31181);

return statearr_31220;
})();
var statearr_31221_31282 = state_31206__$1;
(statearr_31221_31282[(2)] = null);

(statearr_31221_31282[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (9))){
var state_31206__$1 = state_31206;
var statearr_31222_31283 = state_31206__$1;
(statearr_31222_31283[(2)] = null);

(statearr_31222_31283[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (5))){
var state_31206__$1 = state_31206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31223_31284 = state_31206__$1;
(statearr_31223_31284[(1)] = (8));

} else {
var statearr_31224_31285 = state_31206__$1;
(statearr_31224_31285[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (14))){
var inst_31184 = (state_31206[(8)]);
var inst_31184__$1 = (state_31206[(2)]);
var inst_31185 = (inst_31184__$1 == null);
var inst_31186 = cljs.core.not(inst_31185);
var state_31206__$1 = (function (){var statearr_31225 = state_31206;
(statearr_31225[(8)] = inst_31184__$1);

return statearr_31225;
})();
if(inst_31186){
var statearr_31226_31286 = state_31206__$1;
(statearr_31226_31286[(1)] = (15));

} else {
var statearr_31227_31287 = state_31206__$1;
(statearr_31227_31287[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (16))){
var state_31206__$1 = state_31206;
var statearr_31228_31288 = state_31206__$1;
(statearr_31228_31288[(2)] = false);

(statearr_31228_31288[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (10))){
var inst_31178 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31229_31289 = state_31206__$1;
(statearr_31229_31289[(2)] = inst_31178);

(statearr_31229_31289[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (18))){
var inst_31189 = (state_31206[(2)]);
var state_31206__$1 = state_31206;
var statearr_31230_31290 = state_31206__$1;
(statearr_31230_31290[(2)] = inst_31189);

(statearr_31230_31290[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31207 === (8))){
var inst_31175 = cljs.core.async.close_BANG_(to);
var state_31206__$1 = state_31206;
var statearr_31231_31291 = state_31206__$1;
(statearr_31231_31291[(2)] = inst_31175);

(statearr_31231_31291[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1 = (function (state_31206){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31206);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31233){if((e31233 instanceof Object)){
var ex__28830__auto__ = e31233;
var statearr_31234_31292 = state_31206;
(statearr_31234_31292[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31206);

return cljs.core.cst$kw$recur;
} else {
throw e31233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31293 = state_31206;
state_31206 = G__31293;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__ = function(state_31206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1.call(this,state_31206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31235 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31235[(6)] = c__29017__auto__);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
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
var G__31295 = arguments.length;
switch (G__31295) {
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
var G__31298 = arguments.length;
switch (G__31298) {
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
var G__31301 = arguments.length;
switch (G__31301) {
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
var c__29017__auto___31350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31327){
var state_val_31328 = (state_31327[(1)]);
if((state_val_31328 === (7))){
var inst_31323 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31329_31351 = state_31327__$1;
(statearr_31329_31351[(2)] = inst_31323);

(statearr_31329_31351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (1))){
var state_31327__$1 = state_31327;
var statearr_31330_31352 = state_31327__$1;
(statearr_31330_31352[(2)] = null);

(statearr_31330_31352[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (4))){
var inst_31304 = (state_31327[(7)]);
var inst_31304__$1 = (state_31327[(2)]);
var inst_31305 = (inst_31304__$1 == null);
var state_31327__$1 = (function (){var statearr_31331 = state_31327;
(statearr_31331[(7)] = inst_31304__$1);

return statearr_31331;
})();
if(cljs.core.truth_(inst_31305)){
var statearr_31332_31353 = state_31327__$1;
(statearr_31332_31353[(1)] = (5));

} else {
var statearr_31333_31354 = state_31327__$1;
(statearr_31333_31354[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (13))){
var state_31327__$1 = state_31327;
var statearr_31334_31355 = state_31327__$1;
(statearr_31334_31355[(2)] = null);

(statearr_31334_31355[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (6))){
var inst_31304 = (state_31327[(7)]);
var inst_31310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31304) : p.call(null,inst_31304));
var state_31327__$1 = state_31327;
if(cljs.core.truth_(inst_31310)){
var statearr_31335_31356 = state_31327__$1;
(statearr_31335_31356[(1)] = (9));

} else {
var statearr_31336_31357 = state_31327__$1;
(statearr_31336_31357[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (3))){
var inst_31325 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31327__$1,inst_31325);
} else {
if((state_val_31328 === (12))){
var state_31327__$1 = state_31327;
var statearr_31337_31358 = state_31327__$1;
(statearr_31337_31358[(2)] = null);

(statearr_31337_31358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (2))){
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31327__$1,(4),ch);
} else {
if((state_val_31328 === (11))){
var inst_31304 = (state_31327[(7)]);
var inst_31314 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31327__$1,(8),inst_31314,inst_31304);
} else {
if((state_val_31328 === (9))){
var state_31327__$1 = state_31327;
var statearr_31338_31359 = state_31327__$1;
(statearr_31338_31359[(2)] = tc);

(statearr_31338_31359[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (5))){
var inst_31307 = cljs.core.async.close_BANG_(tc);
var inst_31308 = cljs.core.async.close_BANG_(fc);
var state_31327__$1 = (function (){var statearr_31339 = state_31327;
(statearr_31339[(8)] = inst_31307);

return statearr_31339;
})();
var statearr_31340_31360 = state_31327__$1;
(statearr_31340_31360[(2)] = inst_31308);

(statearr_31340_31360[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (14))){
var inst_31321 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31341_31361 = state_31327__$1;
(statearr_31341_31361[(2)] = inst_31321);

(statearr_31341_31361[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (10))){
var state_31327__$1 = state_31327;
var statearr_31342_31362 = state_31327__$1;
(statearr_31342_31362[(2)] = fc);

(statearr_31342_31362[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31328 === (8))){
var inst_31316 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
if(cljs.core.truth_(inst_31316)){
var statearr_31343_31363 = state_31327__$1;
(statearr_31343_31363[(1)] = (12));

} else {
var statearr_31344_31364 = state_31327__$1;
(statearr_31344_31364[(1)] = (13));

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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null,null,null];
(statearr_31345[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_31327){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31327);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31346){if((e31346 instanceof Object)){
var ex__28830__auto__ = e31346;
var statearr_31347_31365 = state_31327;
(statearr_31347_31365[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31327);

return cljs.core.cst$kw$recur;
} else {
throw e31346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31366 = state_31327;
state_31327 = G__31366;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31348 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31348[(6)] = c__29017__auto___31350);

return statearr_31348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31387){
var state_val_31388 = (state_31387[(1)]);
if((state_val_31388 === (7))){
var inst_31383 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31389_31407 = state_31387__$1;
(statearr_31389_31407[(2)] = inst_31383);

(statearr_31389_31407[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (1))){
var inst_31367 = init;
var state_31387__$1 = (function (){var statearr_31390 = state_31387;
(statearr_31390[(7)] = inst_31367);

return statearr_31390;
})();
var statearr_31391_31408 = state_31387__$1;
(statearr_31391_31408[(2)] = null);

(statearr_31391_31408[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (4))){
var inst_31370 = (state_31387[(8)]);
var inst_31370__$1 = (state_31387[(2)]);
var inst_31371 = (inst_31370__$1 == null);
var state_31387__$1 = (function (){var statearr_31392 = state_31387;
(statearr_31392[(8)] = inst_31370__$1);

return statearr_31392;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31393_31409 = state_31387__$1;
(statearr_31393_31409[(1)] = (5));

} else {
var statearr_31394_31410 = state_31387__$1;
(statearr_31394_31410[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (6))){
var inst_31370 = (state_31387[(8)]);
var inst_31367 = (state_31387[(7)]);
var inst_31374 = (state_31387[(9)]);
var inst_31374__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31367,inst_31370) : f.call(null,inst_31367,inst_31370));
var inst_31375 = cljs.core.reduced_QMARK_(inst_31374__$1);
var state_31387__$1 = (function (){var statearr_31395 = state_31387;
(statearr_31395[(9)] = inst_31374__$1);

return statearr_31395;
})();
if(inst_31375){
var statearr_31396_31411 = state_31387__$1;
(statearr_31396_31411[(1)] = (8));

} else {
var statearr_31397_31412 = state_31387__$1;
(statearr_31397_31412[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (3))){
var inst_31385 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31387__$1,inst_31385);
} else {
if((state_val_31388 === (2))){
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31387__$1,(4),ch);
} else {
if((state_val_31388 === (9))){
var inst_31374 = (state_31387[(9)]);
var inst_31367 = inst_31374;
var state_31387__$1 = (function (){var statearr_31398 = state_31387;
(statearr_31398[(7)] = inst_31367);

return statearr_31398;
})();
var statearr_31399_31413 = state_31387__$1;
(statearr_31399_31413[(2)] = null);

(statearr_31399_31413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (5))){
var inst_31367 = (state_31387[(7)]);
var state_31387__$1 = state_31387;
var statearr_31400_31414 = state_31387__$1;
(statearr_31400_31414[(2)] = inst_31367);

(statearr_31400_31414[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (10))){
var inst_31381 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31401_31415 = state_31387__$1;
(statearr_31401_31415[(2)] = inst_31381);

(statearr_31401_31415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (8))){
var inst_31374 = (state_31387[(9)]);
var inst_31377 = cljs.core.deref(inst_31374);
var state_31387__$1 = state_31387;
var statearr_31402_31416 = state_31387__$1;
(statearr_31402_31416[(2)] = inst_31377);

(statearr_31402_31416[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28827__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28827__auto____0 = (function (){
var statearr_31403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31403[(0)] = cljs$core$async$reduce_$_state_machine__28827__auto__);

(statearr_31403[(1)] = (1));

return statearr_31403;
});
var cljs$core$async$reduce_$_state_machine__28827__auto____1 = (function (state_31387){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31387);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31404){if((e31404 instanceof Object)){
var ex__28830__auto__ = e31404;
var statearr_31405_31417 = state_31387;
(statearr_31405_31417[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31387);

return cljs.core.cst$kw$recur;
} else {
throw e31404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31418 = state_31387;
state_31387 = G__31418;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28827__auto__ = function(state_31387){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28827__auto____1.call(this,state_31387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28827__auto____0;
cljs$core$async$reduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28827__auto____1;
return cljs$core$async$reduce_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31406 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31406[(6)] = c__29017__auto__);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31424){
var state_val_31425 = (state_31424[(1)]);
if((state_val_31425 === (1))){
var inst_31419 = cljs.core.async.reduce(f__$1,init,ch);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31424__$1,(2),inst_31419);
} else {
if((state_val_31425 === (2))){
var inst_31421 = (state_31424[(2)]);
var inst_31422 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31421) : f__$1.call(null,inst_31421));
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31424__$1,inst_31422);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28827__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28827__auto____0 = (function (){
var statearr_31426 = [null,null,null,null,null,null,null];
(statearr_31426[(0)] = cljs$core$async$transduce_$_state_machine__28827__auto__);

(statearr_31426[(1)] = (1));

return statearr_31426;
});
var cljs$core$async$transduce_$_state_machine__28827__auto____1 = (function (state_31424){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31424);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31427){if((e31427 instanceof Object)){
var ex__28830__auto__ = e31427;
var statearr_31428_31430 = state_31424;
(statearr_31428_31430[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31424);

return cljs.core.cst$kw$recur;
} else {
throw e31427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31431 = state_31424;
state_31424 = G__31431;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28827__auto__ = function(state_31424){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28827__auto____1.call(this,state_31424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28827__auto____0;
cljs$core$async$transduce_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28827__auto____1;
return cljs$core$async$transduce_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31429 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31429[(6)] = c__29017__auto__);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
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
var G__31433 = arguments.length;
switch (G__31433) {
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
var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31440 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31460_31481 = state_31458__$1;
(statearr_31460_31481[(2)] = inst_31440);

(statearr_31460_31481[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (1))){
var inst_31434 = cljs.core.seq(coll);
var inst_31435 = inst_31434;
var state_31458__$1 = (function (){var statearr_31461 = state_31458;
(statearr_31461[(7)] = inst_31435);

return statearr_31461;
})();
var statearr_31462_31482 = state_31458__$1;
(statearr_31462_31482[(2)] = null);

(statearr_31462_31482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (4))){
var inst_31435 = (state_31458[(7)]);
var inst_31438 = cljs.core.first(inst_31435);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(7),ch,inst_31438);
} else {
if((state_val_31459 === (13))){
var inst_31452 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31463_31483 = state_31458__$1;
(statearr_31463_31483[(2)] = inst_31452);

(statearr_31463_31483[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (6))){
var inst_31443 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31443)){
var statearr_31464_31484 = state_31458__$1;
(statearr_31464_31484[(1)] = (8));

} else {
var statearr_31465_31485 = state_31458__$1;
(statearr_31465_31485[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (3))){
var inst_31456 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (12))){
var state_31458__$1 = state_31458;
var statearr_31466_31486 = state_31458__$1;
(statearr_31466_31486[(2)] = null);

(statearr_31466_31486[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (2))){
var inst_31435 = (state_31458[(7)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31435)){
var statearr_31467_31487 = state_31458__$1;
(statearr_31467_31487[(1)] = (4));

} else {
var statearr_31468_31488 = state_31458__$1;
(statearr_31468_31488[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (11))){
var inst_31449 = cljs.core.async.close_BANG_(ch);
var state_31458__$1 = state_31458;
var statearr_31469_31489 = state_31458__$1;
(statearr_31469_31489[(2)] = inst_31449);

(statearr_31469_31489[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (9))){
var state_31458__$1 = state_31458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31470_31490 = state_31458__$1;
(statearr_31470_31490[(1)] = (11));

} else {
var statearr_31471_31491 = state_31458__$1;
(statearr_31471_31491[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (5))){
var inst_31435 = (state_31458[(7)]);
var state_31458__$1 = state_31458;
var statearr_31472_31492 = state_31458__$1;
(statearr_31472_31492[(2)] = inst_31435);

(statearr_31472_31492[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (10))){
var inst_31454 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31473_31493 = state_31458__$1;
(statearr_31473_31493[(2)] = inst_31454);

(statearr_31473_31493[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31459 === (8))){
var inst_31435 = (state_31458[(7)]);
var inst_31445 = cljs.core.next(inst_31435);
var inst_31435__$1 = inst_31445;
var state_31458__$1 = (function (){var statearr_31474 = state_31458;
(statearr_31474[(7)] = inst_31435__$1);

return statearr_31474;
})();
var statearr_31475_31494 = state_31458__$1;
(statearr_31475_31494[(2)] = null);

(statearr_31475_31494[(1)] = (2));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_31458){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31458);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__28830__auto__ = e31477;
var statearr_31478_31495 = state_31458;
(statearr_31478_31495[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31458);

return cljs.core.cst$kw$recur;
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31496 = state_31458;
state_31458 = G__31496;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31479 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31479[(6)] = c__29017__auto__);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31497 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31497(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31498 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31498(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31499 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31499(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31500 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_31500(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31501 = (function (ch,cs,meta31502){
this.ch = ch;
this.cs = cs;
this.meta31502 = meta31502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31503,meta31502__$1){
var self__ = this;
var _31503__$1 = this;
return (new cljs.core.async.t_cljs$core$async31501(self__.ch,self__.cs,meta31502__$1));
}));

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31503){
var self__ = this;
var _31503__$1 = this;
return self__.meta31502;
}));

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31501.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta31502], null);
}));

(cljs.core.async.t_cljs$core$async31501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31501");

(cljs.core.async.t_cljs$core$async31501.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31501.
 */
cljs.core.async.__GT_t_cljs$core$async31501 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31501(ch__$1,cs__$1,meta31502){
return (new cljs.core.async.t_cljs$core$async31501(ch__$1,cs__$1,meta31502));
});

}

return (new cljs.core.async.t_cljs$core$async31501(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29017__auto___31723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31640_31724 = state_31638__$1;
(statearr_31640_31724[(2)] = inst_31634);

(statearr_31640_31724[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (20))){
var inst_31537 = (state_31638[(7)]);
var inst_31549 = cljs.core.first(inst_31537);
var inst_31550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31549,(0),null);
var inst_31551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31549,(1),null);
var state_31638__$1 = (function (){var statearr_31641 = state_31638;
(statearr_31641[(8)] = inst_31550);

return statearr_31641;
})();
if(cljs.core.truth_(inst_31551)){
var statearr_31642_31725 = state_31638__$1;
(statearr_31642_31725[(1)] = (22));

} else {
var statearr_31643_31726 = state_31638__$1;
(statearr_31643_31726[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (27))){
var inst_31586 = (state_31638[(9)]);
var inst_31581 = (state_31638[(10)]);
var inst_31506 = (state_31638[(11)]);
var inst_31579 = (state_31638[(12)]);
var inst_31586__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31579,inst_31581);
var inst_31587 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31586__$1,inst_31506,done);
var state_31638__$1 = (function (){var statearr_31644 = state_31638;
(statearr_31644[(9)] = inst_31586__$1);

return statearr_31644;
})();
if(cljs.core.truth_(inst_31587)){
var statearr_31645_31727 = state_31638__$1;
(statearr_31645_31727[(1)] = (30));

} else {
var statearr_31646_31728 = state_31638__$1;
(statearr_31646_31728[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (1))){
var state_31638__$1 = state_31638;
var statearr_31647_31729 = state_31638__$1;
(statearr_31647_31729[(2)] = null);

(statearr_31647_31729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (24))){
var inst_31537 = (state_31638[(7)]);
var inst_31556 = (state_31638[(2)]);
var inst_31557 = cljs.core.next(inst_31537);
var inst_31515 = inst_31557;
var inst_31516 = null;
var inst_31517 = (0);
var inst_31518 = (0);
var state_31638__$1 = (function (){var statearr_31648 = state_31638;
(statearr_31648[(13)] = inst_31516);

(statearr_31648[(14)] = inst_31515);

(statearr_31648[(15)] = inst_31517);

(statearr_31648[(16)] = inst_31518);

(statearr_31648[(17)] = inst_31556);

return statearr_31648;
})();
var statearr_31649_31730 = state_31638__$1;
(statearr_31649_31730[(2)] = null);

(statearr_31649_31730[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (39))){
var state_31638__$1 = state_31638;
var statearr_31653_31731 = state_31638__$1;
(statearr_31653_31731[(2)] = null);

(statearr_31653_31731[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (4))){
var inst_31506 = (state_31638[(11)]);
var inst_31506__$1 = (state_31638[(2)]);
var inst_31507 = (inst_31506__$1 == null);
var state_31638__$1 = (function (){var statearr_31654 = state_31638;
(statearr_31654[(11)] = inst_31506__$1);

return statearr_31654;
})();
if(cljs.core.truth_(inst_31507)){
var statearr_31655_31732 = state_31638__$1;
(statearr_31655_31732[(1)] = (5));

} else {
var statearr_31656_31733 = state_31638__$1;
(statearr_31656_31733[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (15))){
var inst_31516 = (state_31638[(13)]);
var inst_31515 = (state_31638[(14)]);
var inst_31517 = (state_31638[(15)]);
var inst_31518 = (state_31638[(16)]);
var inst_31533 = (state_31638[(2)]);
var inst_31534 = (inst_31518 + (1));
var tmp31650 = inst_31516;
var tmp31651 = inst_31515;
var tmp31652 = inst_31517;
var inst_31515__$1 = tmp31651;
var inst_31516__$1 = tmp31650;
var inst_31517__$1 = tmp31652;
var inst_31518__$1 = inst_31534;
var state_31638__$1 = (function (){var statearr_31657 = state_31638;
(statearr_31657[(13)] = inst_31516__$1);

(statearr_31657[(18)] = inst_31533);

(statearr_31657[(14)] = inst_31515__$1);

(statearr_31657[(15)] = inst_31517__$1);

(statearr_31657[(16)] = inst_31518__$1);

return statearr_31657;
})();
var statearr_31658_31734 = state_31638__$1;
(statearr_31658_31734[(2)] = null);

(statearr_31658_31734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (21))){
var inst_31560 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31662_31735 = state_31638__$1;
(statearr_31662_31735[(2)] = inst_31560);

(statearr_31662_31735[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (31))){
var inst_31586 = (state_31638[(9)]);
var inst_31590 = done(null);
var inst_31591 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31586);
var state_31638__$1 = (function (){var statearr_31663 = state_31638;
(statearr_31663[(19)] = inst_31590);

return statearr_31663;
})();
var statearr_31664_31736 = state_31638__$1;
(statearr_31664_31736[(2)] = inst_31591);

(statearr_31664_31736[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (32))){
var inst_31578 = (state_31638[(20)]);
var inst_31580 = (state_31638[(21)]);
var inst_31581 = (state_31638[(10)]);
var inst_31579 = (state_31638[(12)]);
var inst_31593 = (state_31638[(2)]);
var inst_31594 = (inst_31581 + (1));
var tmp31659 = inst_31578;
var tmp31660 = inst_31580;
var tmp31661 = inst_31579;
var inst_31578__$1 = tmp31659;
var inst_31579__$1 = tmp31661;
var inst_31580__$1 = tmp31660;
var inst_31581__$1 = inst_31594;
var state_31638__$1 = (function (){var statearr_31665 = state_31638;
(statearr_31665[(20)] = inst_31578__$1);

(statearr_31665[(21)] = inst_31580__$1);

(statearr_31665[(22)] = inst_31593);

(statearr_31665[(10)] = inst_31581__$1);

(statearr_31665[(12)] = inst_31579__$1);

return statearr_31665;
})();
var statearr_31666_31737 = state_31638__$1;
(statearr_31666_31737[(2)] = null);

(statearr_31666_31737[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (40))){
var inst_31606 = (state_31638[(23)]);
var inst_31610 = done(null);
var inst_31611 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31606);
var state_31638__$1 = (function (){var statearr_31667 = state_31638;
(statearr_31667[(24)] = inst_31610);

return statearr_31667;
})();
var statearr_31668_31738 = state_31638__$1;
(statearr_31668_31738[(2)] = inst_31611);

(statearr_31668_31738[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (33))){
var inst_31597 = (state_31638[(25)]);
var inst_31599 = cljs.core.chunked_seq_QMARK_(inst_31597);
var state_31638__$1 = state_31638;
if(inst_31599){
var statearr_31669_31739 = state_31638__$1;
(statearr_31669_31739[(1)] = (36));

} else {
var statearr_31670_31740 = state_31638__$1;
(statearr_31670_31740[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (13))){
var inst_31527 = (state_31638[(26)]);
var inst_31530 = cljs.core.async.close_BANG_(inst_31527);
var state_31638__$1 = state_31638;
var statearr_31671_31741 = state_31638__$1;
(statearr_31671_31741[(2)] = inst_31530);

(statearr_31671_31741[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (22))){
var inst_31550 = (state_31638[(8)]);
var inst_31553 = cljs.core.async.close_BANG_(inst_31550);
var state_31638__$1 = state_31638;
var statearr_31672_31742 = state_31638__$1;
(statearr_31672_31742[(2)] = inst_31553);

(statearr_31672_31742[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (36))){
var inst_31597 = (state_31638[(25)]);
var inst_31601 = cljs.core.chunk_first(inst_31597);
var inst_31602 = cljs.core.chunk_rest(inst_31597);
var inst_31603 = cljs.core.count(inst_31601);
var inst_31578 = inst_31602;
var inst_31579 = inst_31601;
var inst_31580 = inst_31603;
var inst_31581 = (0);
var state_31638__$1 = (function (){var statearr_31673 = state_31638;
(statearr_31673[(20)] = inst_31578);

(statearr_31673[(21)] = inst_31580);

(statearr_31673[(10)] = inst_31581);

(statearr_31673[(12)] = inst_31579);

return statearr_31673;
})();
var statearr_31674_31743 = state_31638__$1;
(statearr_31674_31743[(2)] = null);

(statearr_31674_31743[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (41))){
var inst_31597 = (state_31638[(25)]);
var inst_31613 = (state_31638[(2)]);
var inst_31614 = cljs.core.next(inst_31597);
var inst_31578 = inst_31614;
var inst_31579 = null;
var inst_31580 = (0);
var inst_31581 = (0);
var state_31638__$1 = (function (){var statearr_31675 = state_31638;
(statearr_31675[(20)] = inst_31578);

(statearr_31675[(21)] = inst_31580);

(statearr_31675[(10)] = inst_31581);

(statearr_31675[(27)] = inst_31613);

(statearr_31675[(12)] = inst_31579);

return statearr_31675;
})();
var statearr_31676_31744 = state_31638__$1;
(statearr_31676_31744[(2)] = null);

(statearr_31676_31744[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (43))){
var state_31638__$1 = state_31638;
var statearr_31677_31745 = state_31638__$1;
(statearr_31677_31745[(2)] = null);

(statearr_31677_31745[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (29))){
var inst_31622 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31678_31746 = state_31638__$1;
(statearr_31678_31746[(2)] = inst_31622);

(statearr_31678_31746[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (44))){
var inst_31631 = (state_31638[(2)]);
var state_31638__$1 = (function (){var statearr_31679 = state_31638;
(statearr_31679[(28)] = inst_31631);

return statearr_31679;
})();
var statearr_31680_31747 = state_31638__$1;
(statearr_31680_31747[(2)] = null);

(statearr_31680_31747[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (6))){
var inst_31570 = (state_31638[(29)]);
var inst_31569 = cljs.core.deref(cs);
var inst_31570__$1 = cljs.core.keys(inst_31569);
var inst_31571 = cljs.core.count(inst_31570__$1);
var inst_31572 = cljs.core.reset_BANG_(dctr,inst_31571);
var inst_31577 = cljs.core.seq(inst_31570__$1);
var inst_31578 = inst_31577;
var inst_31579 = null;
var inst_31580 = (0);
var inst_31581 = (0);
var state_31638__$1 = (function (){var statearr_31681 = state_31638;
(statearr_31681[(30)] = inst_31572);

(statearr_31681[(29)] = inst_31570__$1);

(statearr_31681[(20)] = inst_31578);

(statearr_31681[(21)] = inst_31580);

(statearr_31681[(10)] = inst_31581);

(statearr_31681[(12)] = inst_31579);

return statearr_31681;
})();
var statearr_31682_31748 = state_31638__$1;
(statearr_31682_31748[(2)] = null);

(statearr_31682_31748[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (28))){
var inst_31578 = (state_31638[(20)]);
var inst_31597 = (state_31638[(25)]);
var inst_31597__$1 = cljs.core.seq(inst_31578);
var state_31638__$1 = (function (){var statearr_31683 = state_31638;
(statearr_31683[(25)] = inst_31597__$1);

return statearr_31683;
})();
if(inst_31597__$1){
var statearr_31684_31749 = state_31638__$1;
(statearr_31684_31749[(1)] = (33));

} else {
var statearr_31685_31750 = state_31638__$1;
(statearr_31685_31750[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (25))){
var inst_31580 = (state_31638[(21)]);
var inst_31581 = (state_31638[(10)]);
var inst_31583 = (inst_31581 < inst_31580);
var inst_31584 = inst_31583;
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31584)){
var statearr_31686_31751 = state_31638__$1;
(statearr_31686_31751[(1)] = (27));

} else {
var statearr_31687_31752 = state_31638__$1;
(statearr_31687_31752[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (34))){
var state_31638__$1 = state_31638;
var statearr_31688_31753 = state_31638__$1;
(statearr_31688_31753[(2)] = null);

(statearr_31688_31753[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (17))){
var state_31638__$1 = state_31638;
var statearr_31689_31754 = state_31638__$1;
(statearr_31689_31754[(2)] = null);

(statearr_31689_31754[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (3))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (12))){
var inst_31565 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31690_31755 = state_31638__$1;
(statearr_31690_31755[(2)] = inst_31565);

(statearr_31690_31755[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (2))){
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31638__$1,(4),ch);
} else {
if((state_val_31639 === (23))){
var state_31638__$1 = state_31638;
var statearr_31691_31756 = state_31638__$1;
(statearr_31691_31756[(2)] = null);

(statearr_31691_31756[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (35))){
var inst_31620 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31692_31757 = state_31638__$1;
(statearr_31692_31757[(2)] = inst_31620);

(statearr_31692_31757[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (19))){
var inst_31537 = (state_31638[(7)]);
var inst_31541 = cljs.core.chunk_first(inst_31537);
var inst_31542 = cljs.core.chunk_rest(inst_31537);
var inst_31543 = cljs.core.count(inst_31541);
var inst_31515 = inst_31542;
var inst_31516 = inst_31541;
var inst_31517 = inst_31543;
var inst_31518 = (0);
var state_31638__$1 = (function (){var statearr_31693 = state_31638;
(statearr_31693[(13)] = inst_31516);

(statearr_31693[(14)] = inst_31515);

(statearr_31693[(15)] = inst_31517);

(statearr_31693[(16)] = inst_31518);

return statearr_31693;
})();
var statearr_31694_31758 = state_31638__$1;
(statearr_31694_31758[(2)] = null);

(statearr_31694_31758[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (11))){
var inst_31515 = (state_31638[(14)]);
var inst_31537 = (state_31638[(7)]);
var inst_31537__$1 = cljs.core.seq(inst_31515);
var state_31638__$1 = (function (){var statearr_31695 = state_31638;
(statearr_31695[(7)] = inst_31537__$1);

return statearr_31695;
})();
if(inst_31537__$1){
var statearr_31696_31759 = state_31638__$1;
(statearr_31696_31759[(1)] = (16));

} else {
var statearr_31697_31760 = state_31638__$1;
(statearr_31697_31760[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (9))){
var inst_31567 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31698_31761 = state_31638__$1;
(statearr_31698_31761[(2)] = inst_31567);

(statearr_31698_31761[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (5))){
var inst_31513 = cljs.core.deref(cs);
var inst_31514 = cljs.core.seq(inst_31513);
var inst_31515 = inst_31514;
var inst_31516 = null;
var inst_31517 = (0);
var inst_31518 = (0);
var state_31638__$1 = (function (){var statearr_31699 = state_31638;
(statearr_31699[(13)] = inst_31516);

(statearr_31699[(14)] = inst_31515);

(statearr_31699[(15)] = inst_31517);

(statearr_31699[(16)] = inst_31518);

return statearr_31699;
})();
var statearr_31700_31762 = state_31638__$1;
(statearr_31700_31762[(2)] = null);

(statearr_31700_31762[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (14))){
var state_31638__$1 = state_31638;
var statearr_31701_31763 = state_31638__$1;
(statearr_31701_31763[(2)] = null);

(statearr_31701_31763[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (45))){
var inst_31628 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31702_31764 = state_31638__$1;
(statearr_31702_31764[(2)] = inst_31628);

(statearr_31702_31764[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (26))){
var inst_31570 = (state_31638[(29)]);
var inst_31624 = (state_31638[(2)]);
var inst_31625 = cljs.core.seq(inst_31570);
var state_31638__$1 = (function (){var statearr_31703 = state_31638;
(statearr_31703[(31)] = inst_31624);

return statearr_31703;
})();
if(inst_31625){
var statearr_31704_31765 = state_31638__$1;
(statearr_31704_31765[(1)] = (42));

} else {
var statearr_31705_31766 = state_31638__$1;
(statearr_31705_31766[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (16))){
var inst_31537 = (state_31638[(7)]);
var inst_31539 = cljs.core.chunked_seq_QMARK_(inst_31537);
var state_31638__$1 = state_31638;
if(inst_31539){
var statearr_31706_31767 = state_31638__$1;
(statearr_31706_31767[(1)] = (19));

} else {
var statearr_31707_31768 = state_31638__$1;
(statearr_31707_31768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (38))){
var inst_31617 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31708_31769 = state_31638__$1;
(statearr_31708_31769[(2)] = inst_31617);

(statearr_31708_31769[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (30))){
var state_31638__$1 = state_31638;
var statearr_31709_31770 = state_31638__$1;
(statearr_31709_31770[(2)] = null);

(statearr_31709_31770[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (10))){
var inst_31516 = (state_31638[(13)]);
var inst_31518 = (state_31638[(16)]);
var inst_31526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31516,inst_31518);
var inst_31527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31526,(0),null);
var inst_31528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31526,(1),null);
var state_31638__$1 = (function (){var statearr_31710 = state_31638;
(statearr_31710[(26)] = inst_31527);

return statearr_31710;
})();
if(cljs.core.truth_(inst_31528)){
var statearr_31711_31771 = state_31638__$1;
(statearr_31711_31771[(1)] = (13));

} else {
var statearr_31712_31772 = state_31638__$1;
(statearr_31712_31772[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (18))){
var inst_31563 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31713_31773 = state_31638__$1;
(statearr_31713_31773[(2)] = inst_31563);

(statearr_31713_31773[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (42))){
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31638__$1,(45),dchan);
} else {
if((state_val_31639 === (37))){
var inst_31606 = (state_31638[(23)]);
var inst_31597 = (state_31638[(25)]);
var inst_31506 = (state_31638[(11)]);
var inst_31606__$1 = cljs.core.first(inst_31597);
var inst_31607 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31606__$1,inst_31506,done);
var state_31638__$1 = (function (){var statearr_31714 = state_31638;
(statearr_31714[(23)] = inst_31606__$1);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31607)){
var statearr_31715_31774 = state_31638__$1;
(statearr_31715_31774[(1)] = (39));

} else {
var statearr_31716_31775 = state_31638__$1;
(statearr_31716_31775[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31639 === (8))){
var inst_31517 = (state_31638[(15)]);
var inst_31518 = (state_31638[(16)]);
var inst_31520 = (inst_31518 < inst_31517);
var inst_31521 = inst_31520;
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31521)){
var statearr_31717_31776 = state_31638__$1;
(statearr_31717_31776[(1)] = (10));

} else {
var statearr_31718_31777 = state_31638__$1;
(statearr_31718_31777[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28827__auto__ = null;
var cljs$core$async$mult_$_state_machine__28827__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$mult_$_state_machine__28827__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$mult_$_state_machine__28827__auto____1 = (function (state_31638){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31638);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31720){if((e31720 instanceof Object)){
var ex__28830__auto__ = e31720;
var statearr_31721_31778 = state_31638;
(statearr_31721_31778[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31638);

return cljs.core.cst$kw$recur;
} else {
throw e31720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__31779 = state_31638;
state_31638 = G__31779;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28827__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28827__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28827__auto____0;
cljs$core$async$mult_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28827__auto____1;
return cljs$core$async$mult_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31722 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31722[(6)] = c__29017__auto___31723);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var G__31781 = arguments.length;
switch (G__31781) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_31783 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_31783(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31784 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_31784(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31785 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31785(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31786 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_31786(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31787 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31787(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31798 = arguments.length;
var i__4737__auto___31799 = (0);
while(true){
if((i__4737__auto___31799 < len__4736__auto___31798)){
args__4742__auto__.push((arguments[i__4737__auto___31799]));

var G__31800 = (i__4737__auto___31799 + (1));
i__4737__auto___31799 = G__31800;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31792){
var map__31793 = p__31792;
var map__31793__$1 = (((((!((map__31793 == null))))?(((((map__31793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31793):map__31793);
var opts = map__31793__$1;
var statearr_31795_31801 = state;
(statearr_31795_31801[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31796_31802 = state;
(statearr_31796_31802[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31797_31803 = state;
(statearr_31797_31803[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31788){
var G__31789 = cljs.core.first(seq31788);
var seq31788__$1 = cljs.core.next(seq31788);
var G__31790 = cljs.core.first(seq31788__$1);
var seq31788__$2 = cljs.core.next(seq31788__$1);
var G__31791 = cljs.core.first(seq31788__$2);
var seq31788__$3 = cljs.core.next(seq31788__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31789,G__31790,G__31791,seq31788__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31804 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31805){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t_cljs$core$async31804(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31805__$1));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta31805], null);
}));

(cljs.core.async.t_cljs$core$async31804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31804");

(cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31804.
 */
cljs.core.async.__GT_t_cljs$core$async31804 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31805){
return (new cljs.core.async.t_cljs$core$async31804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31805));
});

}

return (new cljs.core.async.t_cljs$core$async31804(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29017__auto___31968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_31908){
var state_val_31909 = (state_31908[(1)]);
if((state_val_31909 === (7))){
var inst_31823 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31910_31969 = state_31908__$1;
(statearr_31910_31969[(2)] = inst_31823);

(statearr_31910_31969[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (20))){
var inst_31835 = (state_31908[(7)]);
var state_31908__$1 = state_31908;
var statearr_31911_31970 = state_31908__$1;
(statearr_31911_31970[(2)] = inst_31835);

(statearr_31911_31970[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (27))){
var state_31908__$1 = state_31908;
var statearr_31912_31971 = state_31908__$1;
(statearr_31912_31971[(2)] = null);

(statearr_31912_31971[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (1))){
var inst_31810 = (state_31908[(8)]);
var inst_31810__$1 = calc_state();
var inst_31812 = (inst_31810__$1 == null);
var inst_31813 = cljs.core.not(inst_31812);
var state_31908__$1 = (function (){var statearr_31913 = state_31908;
(statearr_31913[(8)] = inst_31810__$1);

return statearr_31913;
})();
if(inst_31813){
var statearr_31914_31972 = state_31908__$1;
(statearr_31914_31972[(1)] = (2));

} else {
var statearr_31915_31973 = state_31908__$1;
(statearr_31915_31973[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (24))){
var inst_31859 = (state_31908[(9)]);
var inst_31882 = (state_31908[(10)]);
var inst_31868 = (state_31908[(11)]);
var inst_31882__$1 = (inst_31859.cljs$core$IFn$_invoke$arity$1 ? inst_31859.cljs$core$IFn$_invoke$arity$1(inst_31868) : inst_31859.call(null,inst_31868));
var state_31908__$1 = (function (){var statearr_31916 = state_31908;
(statearr_31916[(10)] = inst_31882__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31882__$1)){
var statearr_31917_31974 = state_31908__$1;
(statearr_31917_31974[(1)] = (29));

} else {
var statearr_31918_31975 = state_31908__$1;
(statearr_31918_31975[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (4))){
var inst_31826 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31826)){
var statearr_31919_31976 = state_31908__$1;
(statearr_31919_31976[(1)] = (8));

} else {
var statearr_31920_31977 = state_31908__$1;
(statearr_31920_31977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (15))){
var inst_31853 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31853)){
var statearr_31921_31978 = state_31908__$1;
(statearr_31921_31978[(1)] = (19));

} else {
var statearr_31922_31979 = state_31908__$1;
(statearr_31922_31979[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (21))){
var inst_31858 = (state_31908[(12)]);
var inst_31858__$1 = (state_31908[(2)]);
var inst_31859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31858__$1,cljs.core.cst$kw$solos);
var inst_31860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31858__$1,cljs.core.cst$kw$mutes);
var inst_31861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31858__$1,cljs.core.cst$kw$reads);
var state_31908__$1 = (function (){var statearr_31923 = state_31908;
(statearr_31923[(9)] = inst_31859);

(statearr_31923[(13)] = inst_31860);

(statearr_31923[(12)] = inst_31858__$1);

return statearr_31923;
})();
return cljs.core.async.ioc_alts_BANG_(state_31908__$1,(22),inst_31861);
} else {
if((state_val_31909 === (31))){
var inst_31890 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31890)){
var statearr_31924_31980 = state_31908__$1;
(statearr_31924_31980[(1)] = (32));

} else {
var statearr_31925_31981 = state_31908__$1;
(statearr_31925_31981[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (32))){
var inst_31867 = (state_31908[(14)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31908__$1,(35),out,inst_31867);
} else {
if((state_val_31909 === (33))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31926 = state_31908;
(statearr_31926[(7)] = inst_31835);

return statearr_31926;
})();
var statearr_31927_31982 = state_31908__$1;
(statearr_31927_31982[(2)] = null);

(statearr_31927_31982[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (13))){
var inst_31835 = (state_31908[(7)]);
var inst_31842 = inst_31835.cljs$lang$protocol_mask$partition0$;
var inst_31843 = (inst_31842 & (64));
var inst_31844 = inst_31835.cljs$core$ISeq$;
var inst_31845 = (cljs.core.PROTOCOL_SENTINEL === inst_31844);
var inst_31846 = ((inst_31843) || (inst_31845));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31846)){
var statearr_31928_31983 = state_31908__$1;
(statearr_31928_31983[(1)] = (16));

} else {
var statearr_31929_31984 = state_31908__$1;
(statearr_31929_31984[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (22))){
var inst_31867 = (state_31908[(14)]);
var inst_31868 = (state_31908[(11)]);
var inst_31866 = (state_31908[(2)]);
var inst_31867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31866,(0),null);
var inst_31868__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31866,(1),null);
var inst_31869 = (inst_31867__$1 == null);
var inst_31870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31868__$1,change);
var inst_31871 = ((inst_31869) || (inst_31870));
var state_31908__$1 = (function (){var statearr_31930 = state_31908;
(statearr_31930[(14)] = inst_31867__$1);

(statearr_31930[(11)] = inst_31868__$1);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31871)){
var statearr_31931_31985 = state_31908__$1;
(statearr_31931_31985[(1)] = (23));

} else {
var statearr_31932_31986 = state_31908__$1;
(statearr_31932_31986[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (36))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31933 = state_31908;
(statearr_31933[(7)] = inst_31835);

return statearr_31933;
})();
var statearr_31934_31987 = state_31908__$1;
(statearr_31934_31987[(2)] = null);

(statearr_31934_31987[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (29))){
var inst_31882 = (state_31908[(10)]);
var state_31908__$1 = state_31908;
var statearr_31935_31988 = state_31908__$1;
(statearr_31935_31988[(2)] = inst_31882);

(statearr_31935_31988[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (6))){
var state_31908__$1 = state_31908;
var statearr_31936_31989 = state_31908__$1;
(statearr_31936_31989[(2)] = false);

(statearr_31936_31989[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (28))){
var inst_31878 = (state_31908[(2)]);
var inst_31879 = calc_state();
var inst_31835 = inst_31879;
var state_31908__$1 = (function (){var statearr_31937 = state_31908;
(statearr_31937[(15)] = inst_31878);

(statearr_31937[(7)] = inst_31835);

return statearr_31937;
})();
var statearr_31938_31990 = state_31908__$1;
(statearr_31938_31990[(2)] = null);

(statearr_31938_31990[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (25))){
var inst_31904 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31939_31991 = state_31908__$1;
(statearr_31939_31991[(2)] = inst_31904);

(statearr_31939_31991[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (34))){
var inst_31902 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31940_31992 = state_31908__$1;
(statearr_31940_31992[(2)] = inst_31902);

(statearr_31940_31992[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (17))){
var state_31908__$1 = state_31908;
var statearr_31941_31993 = state_31908__$1;
(statearr_31941_31993[(2)] = false);

(statearr_31941_31993[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (3))){
var state_31908__$1 = state_31908;
var statearr_31942_31994 = state_31908__$1;
(statearr_31942_31994[(2)] = false);

(statearr_31942_31994[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (12))){
var inst_31906 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31908__$1,inst_31906);
} else {
if((state_val_31909 === (2))){
var inst_31810 = (state_31908[(8)]);
var inst_31815 = inst_31810.cljs$lang$protocol_mask$partition0$;
var inst_31816 = (inst_31815 & (64));
var inst_31817 = inst_31810.cljs$core$ISeq$;
var inst_31818 = (cljs.core.PROTOCOL_SENTINEL === inst_31817);
var inst_31819 = ((inst_31816) || (inst_31818));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31819)){
var statearr_31943_31995 = state_31908__$1;
(statearr_31943_31995[(1)] = (5));

} else {
var statearr_31944_31996 = state_31908__$1;
(statearr_31944_31996[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (23))){
var inst_31867 = (state_31908[(14)]);
var inst_31873 = (inst_31867 == null);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31873)){
var statearr_31945_31997 = state_31908__$1;
(statearr_31945_31997[(1)] = (26));

} else {
var statearr_31946_31998 = state_31908__$1;
(statearr_31946_31998[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (35))){
var inst_31893 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31893)){
var statearr_31947_31999 = state_31908__$1;
(statearr_31947_31999[(1)] = (36));

} else {
var statearr_31948_32000 = state_31908__$1;
(statearr_31948_32000[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (19))){
var inst_31835 = (state_31908[(7)]);
var inst_31855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31835);
var state_31908__$1 = state_31908;
var statearr_31949_32001 = state_31908__$1;
(statearr_31949_32001[(2)] = inst_31855);

(statearr_31949_32001[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (11))){
var inst_31835 = (state_31908[(7)]);
var inst_31839 = (inst_31835 == null);
var inst_31840 = cljs.core.not(inst_31839);
var state_31908__$1 = state_31908;
if(inst_31840){
var statearr_31950_32002 = state_31908__$1;
(statearr_31950_32002[(1)] = (13));

} else {
var statearr_31951_32003 = state_31908__$1;
(statearr_31951_32003[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (9))){
var inst_31810 = (state_31908[(8)]);
var state_31908__$1 = state_31908;
var statearr_31952_32004 = state_31908__$1;
(statearr_31952_32004[(2)] = inst_31810);

(statearr_31952_32004[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (5))){
var state_31908__$1 = state_31908;
var statearr_31953_32005 = state_31908__$1;
(statearr_31953_32005[(2)] = true);

(statearr_31953_32005[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (14))){
var state_31908__$1 = state_31908;
var statearr_31954_32006 = state_31908__$1;
(statearr_31954_32006[(2)] = false);

(statearr_31954_32006[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (26))){
var inst_31868 = (state_31908[(11)]);
var inst_31875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31868);
var state_31908__$1 = state_31908;
var statearr_31955_32007 = state_31908__$1;
(statearr_31955_32007[(2)] = inst_31875);

(statearr_31955_32007[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (16))){
var state_31908__$1 = state_31908;
var statearr_31956_32008 = state_31908__$1;
(statearr_31956_32008[(2)] = true);

(statearr_31956_32008[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (38))){
var inst_31898 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31957_32009 = state_31908__$1;
(statearr_31957_32009[(2)] = inst_31898);

(statearr_31957_32009[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (30))){
var inst_31859 = (state_31908[(9)]);
var inst_31860 = (state_31908[(13)]);
var inst_31868 = (state_31908[(11)]);
var inst_31885 = cljs.core.empty_QMARK_(inst_31859);
var inst_31886 = (inst_31860.cljs$core$IFn$_invoke$arity$1 ? inst_31860.cljs$core$IFn$_invoke$arity$1(inst_31868) : inst_31860.call(null,inst_31868));
var inst_31887 = cljs.core.not(inst_31886);
var inst_31888 = ((inst_31885) && (inst_31887));
var state_31908__$1 = state_31908;
var statearr_31958_32010 = state_31908__$1;
(statearr_31958_32010[(2)] = inst_31888);

(statearr_31958_32010[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (10))){
var inst_31810 = (state_31908[(8)]);
var inst_31831 = (state_31908[(2)]);
var inst_31832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31831,cljs.core.cst$kw$solos);
var inst_31833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31831,cljs.core.cst$kw$mutes);
var inst_31834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31831,cljs.core.cst$kw$reads);
var inst_31835 = inst_31810;
var state_31908__$1 = (function (){var statearr_31959 = state_31908;
(statearr_31959[(16)] = inst_31834);

(statearr_31959[(17)] = inst_31832);

(statearr_31959[(18)] = inst_31833);

(statearr_31959[(7)] = inst_31835);

return statearr_31959;
})();
var statearr_31960_32011 = state_31908__$1;
(statearr_31960_32011[(2)] = null);

(statearr_31960_32011[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (18))){
var inst_31850 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31961_32012 = state_31908__$1;
(statearr_31961_32012[(2)] = inst_31850);

(statearr_31961_32012[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (37))){
var state_31908__$1 = state_31908;
var statearr_31962_32013 = state_31908__$1;
(statearr_31962_32013[(2)] = null);

(statearr_31962_32013[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31909 === (8))){
var inst_31810 = (state_31908[(8)]);
var inst_31828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31810);
var state_31908__$1 = state_31908;
var statearr_31963_32014 = state_31908__$1;
(statearr_31963_32014[(2)] = inst_31828);

(statearr_31963_32014[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28827__auto__ = null;
var cljs$core$async$mix_$_state_machine__28827__auto____0 = (function (){
var statearr_31964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31964[(0)] = cljs$core$async$mix_$_state_machine__28827__auto__);

(statearr_31964[(1)] = (1));

return statearr_31964;
});
var cljs$core$async$mix_$_state_machine__28827__auto____1 = (function (state_31908){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_31908);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e31965){if((e31965 instanceof Object)){
var ex__28830__auto__ = e31965;
var statearr_31966_32015 = state_31908;
(statearr_31966_32015[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31908);

return cljs.core.cst$kw$recur;
} else {
throw e31965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32016 = state_31908;
state_31908 = G__32016;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28827__auto__ = function(state_31908){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28827__auto____1.call(this,state_31908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28827__auto____0;
cljs$core$async$mix_$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28827__auto____1;
return cljs$core$async$mix_$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_31967 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_31967[(6)] = c__29017__auto___31968);

return statearr_31967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_32019 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_32019(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32020 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_32020(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32021 = (function() {
var G__32022 = null;
var G__32022__1 = (function (p){
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
var G__32022__2 = (function (p,v){
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
G__32022 = function(p,v){
switch(arguments.length){
case 1:
return G__32022__1.call(this,p);
case 2:
return G__32022__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32022.cljs$core$IFn$_invoke$arity$1 = G__32022__1;
G__32022.cljs$core$IFn$_invoke$arity$2 = G__32022__2;
return G__32022;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32018 = arguments.length;
switch (G__32018) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32021.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32021.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__32026 = arguments.length;
switch (G__32026) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32024_SHARP_){
if(cljs.core.truth_((p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32024_SHARP_.call(null,topic)))){
return p1__32024_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32024_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32027 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32028){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32028 = meta32028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32029,meta32028__$1){
var self__ = this;
var _32029__$1 = this;
return (new cljs.core.async.t_cljs$core$async32027(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32028__$1));
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32029){
var self__ = this;
var _32029__$1 = this;
return self__.meta32028;
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta32028], null);
}));

(cljs.core.async.t_cljs$core$async32027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32027");

(cljs.core.async.t_cljs$core$async32027.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32027.
 */
cljs.core.async.__GT_t_cljs$core$async32027 = (function cljs$core$async$__GT_t_cljs$core$async32027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32028){
return (new cljs.core.async.t_cljs$core$async32027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32028));
});

}

return (new cljs.core.async.t_cljs$core$async32027(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29017__auto___32147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_32148 = state_32101__$1;
(statearr_32103_32148[(2)] = inst_32097);

(statearr_32103_32148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (20))){
var state_32101__$1 = state_32101;
var statearr_32104_32149 = state_32101__$1;
(statearr_32104_32149[(2)] = null);

(statearr_32104_32149[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32105_32150 = state_32101__$1;
(statearr_32105_32150[(2)] = null);

(statearr_32105_32150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (24))){
var inst_32080 = (state_32101[(7)]);
var inst_32089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32080);
var state_32101__$1 = state_32101;
var statearr_32106_32151 = state_32101__$1;
(statearr_32106_32151[(2)] = inst_32089);

(statearr_32106_32151[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (4))){
var inst_32032 = (state_32101[(8)]);
var inst_32032__$1 = (state_32101[(2)]);
var inst_32033 = (inst_32032__$1 == null);
var state_32101__$1 = (function (){var statearr_32107 = state_32101;
(statearr_32107[(8)] = inst_32032__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32033)){
var statearr_32108_32152 = state_32101__$1;
(statearr_32108_32152[(1)] = (5));

} else {
var statearr_32109_32153 = state_32101__$1;
(statearr_32109_32153[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (15))){
var inst_32074 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_32154 = state_32101__$1;
(statearr_32110_32154[(2)] = inst_32074);

(statearr_32110_32154[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (21))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32111 = state_32101;
(statearr_32111[(9)] = inst_32094);

return statearr_32111;
})();
var statearr_32112_32155 = state_32101__$1;
(statearr_32112_32155[(2)] = null);

(statearr_32112_32155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (13))){
var inst_32056 = (state_32101[(10)]);
var inst_32058 = cljs.core.chunked_seq_QMARK_(inst_32056);
var state_32101__$1 = state_32101;
if(inst_32058){
var statearr_32113_32156 = state_32101__$1;
(statearr_32113_32156[(1)] = (16));

} else {
var statearr_32114_32157 = state_32101__$1;
(statearr_32114_32157[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (22))){
var inst_32086 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32086)){
var statearr_32115_32158 = state_32101__$1;
(statearr_32115_32158[(1)] = (23));

} else {
var statearr_32116_32159 = state_32101__$1;
(statearr_32116_32159[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (6))){
var inst_32032 = (state_32101[(8)]);
var inst_32082 = (state_32101[(11)]);
var inst_32080 = (state_32101[(7)]);
var inst_32080__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32032) : topic_fn.call(null,inst_32032));
var inst_32081 = cljs.core.deref(mults);
var inst_32082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32081,inst_32080__$1);
var state_32101__$1 = (function (){var statearr_32117 = state_32101;
(statearr_32117[(11)] = inst_32082__$1);

(statearr_32117[(7)] = inst_32080__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32082__$1)){
var statearr_32118_32160 = state_32101__$1;
(statearr_32118_32160[(1)] = (19));

} else {
var statearr_32119_32161 = state_32101__$1;
(statearr_32119_32161[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (25))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32120_32162 = state_32101__$1;
(statearr_32120_32162[(2)] = inst_32091);

(statearr_32120_32162[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (17))){
var inst_32056 = (state_32101[(10)]);
var inst_32065 = cljs.core.first(inst_32056);
var inst_32066 = cljs.core.async.muxch_STAR_(inst_32065);
var inst_32067 = cljs.core.async.close_BANG_(inst_32066);
var inst_32068 = cljs.core.next(inst_32056);
var inst_32042 = inst_32068;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32121 = state_32101;
(statearr_32121[(12)] = inst_32043);

(statearr_32121[(13)] = inst_32067);

(statearr_32121[(14)] = inst_32044);

(statearr_32121[(15)] = inst_32042);

(statearr_32121[(16)] = inst_32045);

return statearr_32121;
})();
var statearr_32122_32163 = state_32101__$1;
(statearr_32122_32163[(2)] = null);

(statearr_32122_32163[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (12))){
var inst_32076 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32123_32164 = state_32101__$1;
(statearr_32123_32164[(2)] = inst_32076);

(statearr_32123_32164[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (23))){
var state_32101__$1 = state_32101;
var statearr_32124_32165 = state_32101__$1;
(statearr_32124_32165[(2)] = null);

(statearr_32124_32165[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (19))){
var inst_32032 = (state_32101[(8)]);
var inst_32082 = (state_32101[(11)]);
var inst_32084 = cljs.core.async.muxch_STAR_(inst_32082);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(22),inst_32084,inst_32032);
} else {
if((state_val_32102 === (11))){
var inst_32056 = (state_32101[(10)]);
var inst_32042 = (state_32101[(15)]);
var inst_32056__$1 = cljs.core.seq(inst_32042);
var state_32101__$1 = (function (){var statearr_32125 = state_32101;
(statearr_32125[(10)] = inst_32056__$1);

return statearr_32125;
})();
if(inst_32056__$1){
var statearr_32126_32166 = state_32101__$1;
(statearr_32126_32166[(1)] = (13));

} else {
var statearr_32127_32167 = state_32101__$1;
(statearr_32127_32167[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (9))){
var inst_32078 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32128_32168 = state_32101__$1;
(statearr_32128_32168[(2)] = inst_32078);

(statearr_32128_32168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (5))){
var inst_32039 = cljs.core.deref(mults);
var inst_32040 = cljs.core.vals(inst_32039);
var inst_32041 = cljs.core.seq(inst_32040);
var inst_32042 = inst_32041;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32129 = state_32101;
(statearr_32129[(12)] = inst_32043);

(statearr_32129[(14)] = inst_32044);

(statearr_32129[(15)] = inst_32042);

(statearr_32129[(16)] = inst_32045);

return statearr_32129;
})();
var statearr_32130_32169 = state_32101__$1;
(statearr_32130_32169[(2)] = null);

(statearr_32130_32169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (14))){
var state_32101__$1 = state_32101;
var statearr_32134_32170 = state_32101__$1;
(statearr_32134_32170[(2)] = null);

(statearr_32134_32170[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (16))){
var inst_32056 = (state_32101[(10)]);
var inst_32060 = cljs.core.chunk_first(inst_32056);
var inst_32061 = cljs.core.chunk_rest(inst_32056);
var inst_32062 = cljs.core.count(inst_32060);
var inst_32042 = inst_32061;
var inst_32043 = inst_32060;
var inst_32044 = inst_32062;
var inst_32045 = (0);
var state_32101__$1 = (function (){var statearr_32135 = state_32101;
(statearr_32135[(12)] = inst_32043);

(statearr_32135[(14)] = inst_32044);

(statearr_32135[(15)] = inst_32042);

(statearr_32135[(16)] = inst_32045);

return statearr_32135;
})();
var statearr_32136_32171 = state_32101__$1;
(statearr_32136_32171[(2)] = null);

(statearr_32136_32171[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (10))){
var inst_32043 = (state_32101[(12)]);
var inst_32044 = (state_32101[(14)]);
var inst_32042 = (state_32101[(15)]);
var inst_32045 = (state_32101[(16)]);
var inst_32050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32043,inst_32045);
var inst_32051 = cljs.core.async.muxch_STAR_(inst_32050);
var inst_32052 = cljs.core.async.close_BANG_(inst_32051);
var inst_32053 = (inst_32045 + (1));
var tmp32131 = inst_32043;
var tmp32132 = inst_32044;
var tmp32133 = inst_32042;
var inst_32042__$1 = tmp32133;
var inst_32043__$1 = tmp32131;
var inst_32044__$1 = tmp32132;
var inst_32045__$1 = inst_32053;
var state_32101__$1 = (function (){var statearr_32137 = state_32101;
(statearr_32137[(12)] = inst_32043__$1);

(statearr_32137[(17)] = inst_32052);

(statearr_32137[(14)] = inst_32044__$1);

(statearr_32137[(15)] = inst_32042__$1);

(statearr_32137[(16)] = inst_32045__$1);

return statearr_32137;
})();
var statearr_32138_32172 = state_32101__$1;
(statearr_32138_32172[(2)] = null);

(statearr_32138_32172[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (18))){
var inst_32071 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32139_32173 = state_32101__$1;
(statearr_32139_32173[(2)] = inst_32071);

(statearr_32139_32173[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (8))){
var inst_32044 = (state_32101[(14)]);
var inst_32045 = (state_32101[(16)]);
var inst_32047 = (inst_32045 < inst_32044);
var inst_32048 = inst_32047;
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32048)){
var statearr_32140_32174 = state_32101__$1;
(statearr_32140_32174[(1)] = (10));

} else {
var statearr_32141_32175 = state_32101__$1;
(statearr_32141_32175[(1)] = (11));

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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32142[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32142[(1)] = (1));

return statearr_32142;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32101){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32143){if((e32143 instanceof Object)){
var ex__28830__auto__ = e32143;
var statearr_32144_32176 = state_32101;
(statearr_32144_32176[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return cljs.core.cst$kw$recur;
} else {
throw e32143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32177 = state_32101;
state_32101 = G__32177;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32145 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32145[(6)] = c__29017__auto___32147);

return statearr_32145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var G__32179 = arguments.length;
switch (G__32179) {
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
var G__32182 = arguments.length;
switch (G__32182) {
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
var G__32185 = arguments.length;
switch (G__32185) {
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
var c__29017__auto___32252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32224){
var state_val_32225 = (state_32224[(1)]);
if((state_val_32225 === (7))){
var state_32224__$1 = state_32224;
var statearr_32226_32253 = state_32224__$1;
(statearr_32226_32253[(2)] = null);

(statearr_32226_32253[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (1))){
var state_32224__$1 = state_32224;
var statearr_32227_32254 = state_32224__$1;
(statearr_32227_32254[(2)] = null);

(statearr_32227_32254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (4))){
var inst_32188 = (state_32224[(7)]);
var inst_32190 = (inst_32188 < cnt);
var state_32224__$1 = state_32224;
if(cljs.core.truth_(inst_32190)){
var statearr_32228_32255 = state_32224__$1;
(statearr_32228_32255[(1)] = (6));

} else {
var statearr_32229_32256 = state_32224__$1;
(statearr_32229_32256[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (15))){
var inst_32220 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
var statearr_32230_32257 = state_32224__$1;
(statearr_32230_32257[(2)] = inst_32220);

(statearr_32230_32257[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (13))){
var inst_32213 = cljs.core.async.close_BANG_(out);
var state_32224__$1 = state_32224;
var statearr_32231_32258 = state_32224__$1;
(statearr_32231_32258[(2)] = inst_32213);

(statearr_32231_32258[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (6))){
var state_32224__$1 = state_32224;
var statearr_32232_32259 = state_32224__$1;
(statearr_32232_32259[(2)] = null);

(statearr_32232_32259[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (3))){
var inst_32222 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32224__$1,inst_32222);
} else {
if((state_val_32225 === (12))){
var inst_32210 = (state_32224[(8)]);
var inst_32210__$1 = (state_32224[(2)]);
var inst_32211 = cljs.core.some(cljs.core.nil_QMARK_,inst_32210__$1);
var state_32224__$1 = (function (){var statearr_32233 = state_32224;
(statearr_32233[(8)] = inst_32210__$1);

return statearr_32233;
})();
if(cljs.core.truth_(inst_32211)){
var statearr_32234_32260 = state_32224__$1;
(statearr_32234_32260[(1)] = (13));

} else {
var statearr_32235_32261 = state_32224__$1;
(statearr_32235_32261[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (2))){
var inst_32187 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32188 = (0);
var state_32224__$1 = (function (){var statearr_32236 = state_32224;
(statearr_32236[(7)] = inst_32188);

(statearr_32236[(9)] = inst_32187);

return statearr_32236;
})();
var statearr_32237_32262 = state_32224__$1;
(statearr_32237_32262[(2)] = null);

(statearr_32237_32262[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (11))){
var inst_32188 = (state_32224[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32224,(10),Object,null,(9));
var inst_32197 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32188) : chs__$1.call(null,inst_32188));
var inst_32198 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32188) : done.call(null,inst_32188));
var inst_32199 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32197,inst_32198);
var state_32224__$1 = state_32224;
var statearr_32238_32263 = state_32224__$1;
(statearr_32238_32263[(2)] = inst_32199);


cljs.core.async.impl.ioc_helpers.process_exception(state_32224__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (9))){
var inst_32188 = (state_32224[(7)]);
var inst_32201 = (state_32224[(2)]);
var inst_32202 = (inst_32188 + (1));
var inst_32188__$1 = inst_32202;
var state_32224__$1 = (function (){var statearr_32239 = state_32224;
(statearr_32239[(10)] = inst_32201);

(statearr_32239[(7)] = inst_32188__$1);

return statearr_32239;
})();
var statearr_32240_32264 = state_32224__$1;
(statearr_32240_32264[(2)] = null);

(statearr_32240_32264[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (5))){
var inst_32208 = (state_32224[(2)]);
var state_32224__$1 = (function (){var statearr_32241 = state_32224;
(statearr_32241[(11)] = inst_32208);

return statearr_32241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32224__$1,(12),dchan);
} else {
if((state_val_32225 === (14))){
var inst_32210 = (state_32224[(8)]);
var inst_32215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32210);
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32224__$1,(16),out,inst_32215);
} else {
if((state_val_32225 === (16))){
var inst_32217 = (state_32224[(2)]);
var state_32224__$1 = (function (){var statearr_32242 = state_32224;
(statearr_32242[(12)] = inst_32217);

return statearr_32242;
})();
var statearr_32243_32265 = state_32224__$1;
(statearr_32243_32265[(2)] = null);

(statearr_32243_32265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (10))){
var inst_32192 = (state_32224[(2)]);
var inst_32193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32224__$1 = (function (){var statearr_32244 = state_32224;
(statearr_32244[(13)] = inst_32192);

return statearr_32244;
})();
var statearr_32245_32266 = state_32224__$1;
(statearr_32245_32266[(2)] = inst_32193);


cljs.core.async.impl.ioc_helpers.process_exception(state_32224__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32225 === (8))){
var inst_32206 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
var statearr_32246_32267 = state_32224__$1;
(statearr_32246_32267[(2)] = inst_32206);

(statearr_32246_32267[(1)] = (5));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32247[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32247[(1)] = (1));

return statearr_32247;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32224){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32224);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32248){if((e32248 instanceof Object)){
var ex__28830__auto__ = e32248;
var statearr_32249_32268 = state_32224;
(statearr_32249_32268[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32224);

return cljs.core.cst$kw$recur;
} else {
throw e32248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32269 = state_32224;
state_32224 = G__32269;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32250 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32250[(6)] = c__29017__auto___32252);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var G__32272 = arguments.length;
switch (G__32272) {
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
var c__29017__auto___32326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32304){
var state_val_32305 = (state_32304[(1)]);
if((state_val_32305 === (7))){
var inst_32283 = (state_32304[(7)]);
var inst_32284 = (state_32304[(8)]);
var inst_32283__$1 = (state_32304[(2)]);
var inst_32284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32283__$1,(0),null);
var inst_32285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32283__$1,(1),null);
var inst_32286 = (inst_32284__$1 == null);
var state_32304__$1 = (function (){var statearr_32306 = state_32304;
(statearr_32306[(7)] = inst_32283__$1);

(statearr_32306[(8)] = inst_32284__$1);

(statearr_32306[(9)] = inst_32285);

return statearr_32306;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32307_32327 = state_32304__$1;
(statearr_32307_32327[(1)] = (8));

} else {
var statearr_32308_32328 = state_32304__$1;
(statearr_32308_32328[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (1))){
var inst_32273 = cljs.core.vec(chs);
var inst_32274 = inst_32273;
var state_32304__$1 = (function (){var statearr_32309 = state_32304;
(statearr_32309[(10)] = inst_32274);

return statearr_32309;
})();
var statearr_32310_32329 = state_32304__$1;
(statearr_32310_32329[(2)] = null);

(statearr_32310_32329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (4))){
var inst_32274 = (state_32304[(10)]);
var state_32304__$1 = state_32304;
return cljs.core.async.ioc_alts_BANG_(state_32304__$1,(7),inst_32274);
} else {
if((state_val_32305 === (6))){
var inst_32300 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32311_32330 = state_32304__$1;
(statearr_32311_32330[(2)] = inst_32300);

(statearr_32311_32330[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (3))){
var inst_32302 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32304__$1,inst_32302);
} else {
if((state_val_32305 === (2))){
var inst_32274 = (state_32304[(10)]);
var inst_32276 = cljs.core.count(inst_32274);
var inst_32277 = (inst_32276 > (0));
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32277)){
var statearr_32313_32331 = state_32304__$1;
(statearr_32313_32331[(1)] = (4));

} else {
var statearr_32314_32332 = state_32304__$1;
(statearr_32314_32332[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (11))){
var inst_32274 = (state_32304[(10)]);
var inst_32293 = (state_32304[(2)]);
var tmp32312 = inst_32274;
var inst_32274__$1 = tmp32312;
var state_32304__$1 = (function (){var statearr_32315 = state_32304;
(statearr_32315[(10)] = inst_32274__$1);

(statearr_32315[(11)] = inst_32293);

return statearr_32315;
})();
var statearr_32316_32333 = state_32304__$1;
(statearr_32316_32333[(2)] = null);

(statearr_32316_32333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (9))){
var inst_32284 = (state_32304[(8)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32304__$1,(11),out,inst_32284);
} else {
if((state_val_32305 === (5))){
var inst_32298 = cljs.core.async.close_BANG_(out);
var state_32304__$1 = state_32304;
var statearr_32317_32334 = state_32304__$1;
(statearr_32317_32334[(2)] = inst_32298);

(statearr_32317_32334[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (10))){
var inst_32296 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32318_32335 = state_32304__$1;
(statearr_32318_32335[(2)] = inst_32296);

(statearr_32318_32335[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32305 === (8))){
var inst_32283 = (state_32304[(7)]);
var inst_32274 = (state_32304[(10)]);
var inst_32284 = (state_32304[(8)]);
var inst_32285 = (state_32304[(9)]);
var inst_32288 = (function (){var cs = inst_32274;
var vec__32279 = inst_32283;
var v = inst_32284;
var c = inst_32285;
return (function (p1__32270_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32270_SHARP_);
});
})();
var inst_32289 = cljs.core.filterv(inst_32288,inst_32274);
var inst_32274__$1 = inst_32289;
var state_32304__$1 = (function (){var statearr_32319 = state_32304;
(statearr_32319[(10)] = inst_32274__$1);

return statearr_32319;
})();
var statearr_32320_32336 = state_32304__$1;
(statearr_32320_32336[(2)] = null);

(statearr_32320_32336[(1)] = (2));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32321 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32321[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32321[(1)] = (1));

return statearr_32321;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32304){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32304);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32322){if((e32322 instanceof Object)){
var ex__28830__auto__ = e32322;
var statearr_32323_32337 = state_32304;
(statearr_32323_32337[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32304);

return cljs.core.cst$kw$recur;
} else {
throw e32322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32338 = state_32304;
state_32304 = G__32338;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32324 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32324[(6)] = c__29017__auto___32326);

return statearr_32324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
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
var G__32340 = arguments.length;
switch (G__32340) {
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
var c__29017__auto___32385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32364){
var state_val_32365 = (state_32364[(1)]);
if((state_val_32365 === (7))){
var inst_32346 = (state_32364[(7)]);
var inst_32346__$1 = (state_32364[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32364__$1 = (function (){var statearr_32366 = state_32364;
(statearr_32366[(7)] = inst_32346__$1);

return statearr_32366;
})();
if(inst_32348){
var statearr_32367_32386 = state_32364__$1;
(statearr_32367_32386[(1)] = (8));

} else {
var statearr_32368_32387 = state_32364__$1;
(statearr_32368_32387[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (1))){
var inst_32341 = (0);
var state_32364__$1 = (function (){var statearr_32369 = state_32364;
(statearr_32369[(8)] = inst_32341);

return statearr_32369;
})();
var statearr_32370_32388 = state_32364__$1;
(statearr_32370_32388[(2)] = null);

(statearr_32370_32388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (4))){
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32364__$1,(7),ch);
} else {
if((state_val_32365 === (6))){
var inst_32359 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32371_32389 = state_32364__$1;
(statearr_32371_32389[(2)] = inst_32359);

(statearr_32371_32389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (3))){
var inst_32361 = (state_32364[(2)]);
var inst_32362 = cljs.core.async.close_BANG_(out);
var state_32364__$1 = (function (){var statearr_32372 = state_32364;
(statearr_32372[(9)] = inst_32361);

return statearr_32372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32364__$1,inst_32362);
} else {
if((state_val_32365 === (2))){
var inst_32341 = (state_32364[(8)]);
var inst_32343 = (inst_32341 < n);
var state_32364__$1 = state_32364;
if(cljs.core.truth_(inst_32343)){
var statearr_32373_32390 = state_32364__$1;
(statearr_32373_32390[(1)] = (4));

} else {
var statearr_32374_32391 = state_32364__$1;
(statearr_32374_32391[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (11))){
var inst_32341 = (state_32364[(8)]);
var inst_32351 = (state_32364[(2)]);
var inst_32352 = (inst_32341 + (1));
var inst_32341__$1 = inst_32352;
var state_32364__$1 = (function (){var statearr_32375 = state_32364;
(statearr_32375[(10)] = inst_32351);

(statearr_32375[(8)] = inst_32341__$1);

return statearr_32375;
})();
var statearr_32376_32392 = state_32364__$1;
(statearr_32376_32392[(2)] = null);

(statearr_32376_32392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (9))){
var state_32364__$1 = state_32364;
var statearr_32377_32393 = state_32364__$1;
(statearr_32377_32393[(2)] = null);

(statearr_32377_32393[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (5))){
var state_32364__$1 = state_32364;
var statearr_32378_32394 = state_32364__$1;
(statearr_32378_32394[(2)] = null);

(statearr_32378_32394[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (10))){
var inst_32356 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32379_32395 = state_32364__$1;
(statearr_32379_32395[(2)] = inst_32356);

(statearr_32379_32395[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32365 === (8))){
var inst_32346 = (state_32364[(7)]);
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32364__$1,(11),out,inst_32346);
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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32364){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32364);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__28830__auto__ = e32381;
var statearr_32382_32396 = state_32364;
(statearr_32382_32396[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32364);

return cljs.core.cst$kw$recur;
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32397 = state_32364;
state_32364 = G__32397;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32383 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32383[(6)] = c__29017__auto___32385);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32399 = (function (f,ch,meta32400){
this.f = f;
this.ch = ch;
this.meta32400 = meta32400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32401,meta32400__$1){
var self__ = this;
var _32401__$1 = this;
return (new cljs.core.async.t_cljs$core$async32399(self__.f,self__.ch,meta32400__$1));
}));

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32401){
var self__ = this;
var _32401__$1 = this;
return self__.meta32400;
}));

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32402 = (function (f,ch,meta32400,_,fn1,meta32403){
this.f = f;
this.ch = ch;
this.meta32400 = meta32400;
this._ = _;
this.fn1 = fn1;
this.meta32403 = meta32403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32404,meta32403__$1){
var self__ = this;
var _32404__$1 = this;
return (new cljs.core.async.t_cljs$core$async32402(self__.f,self__.ch,self__.meta32400,self__._,self__.fn1,meta32403__$1));
}));

(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32404){
var self__ = this;
var _32404__$1 = this;
return self__.meta32403;
}));

(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32398_SHARP_){
var G__32405 = (((p1__32398_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32398_SHARP_) : self__.f.call(null,p1__32398_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32405) : f1.call(null,G__32405));
});
}));

(cljs.core.async.t_cljs$core$async32402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32400,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async32399], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta32403], null);
}));

(cljs.core.async.t_cljs$core$async32402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32402");

(cljs.core.async.t_cljs$core$async32402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32402.
 */
cljs.core.async.__GT_t_cljs$core$async32402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32402(f__$1,ch__$1,meta32400__$1,___$2,fn1__$1,meta32403){
return (new cljs.core.async.t_cljs$core$async32402(f__$1,ch__$1,meta32400__$1,___$2,fn1__$1,meta32403));
});

}

return (new cljs.core.async.t_cljs$core$async32402(self__.f,self__.ch,self__.meta32400,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32406 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32406) : self__.f.call(null,G__32406));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32400], null);
}));

(cljs.core.async.t_cljs$core$async32399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32399");

(cljs.core.async.t_cljs$core$async32399.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32399.
 */
cljs.core.async.__GT_t_cljs$core$async32399 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32399(f__$1,ch__$1,meta32400){
return (new cljs.core.async.t_cljs$core$async32399(f__$1,ch__$1,meta32400));
});

}

return (new cljs.core.async.t_cljs$core$async32399(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32407 = (function (f,ch,meta32408){
this.f = f;
this.ch = ch;
this.meta32408 = meta32408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32409,meta32408__$1){
var self__ = this;
var _32409__$1 = this;
return (new cljs.core.async.t_cljs$core$async32407(self__.f,self__.ch,meta32408__$1));
}));

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32409){
var self__ = this;
var _32409__$1 = this;
return self__.meta32408;
}));

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32408], null);
}));

(cljs.core.async.t_cljs$core$async32407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32407");

(cljs.core.async.t_cljs$core$async32407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32407.
 */
cljs.core.async.__GT_t_cljs$core$async32407 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32407(f__$1,ch__$1,meta32408){
return (new cljs.core.async.t_cljs$core$async32407(f__$1,ch__$1,meta32408));
});

}

return (new cljs.core.async.t_cljs$core$async32407(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32410 = (function (p,ch,meta32411){
this.p = p;
this.ch = ch;
this.meta32411 = meta32411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32412,meta32411__$1){
var self__ = this;
var _32412__$1 = this;
return (new cljs.core.async.t_cljs$core$async32410(self__.p,self__.ch,meta32411__$1));
}));

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32412){
var self__ = this;
var _32412__$1 = this;
return self__.meta32411;
}));

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32411], null);
}));

(cljs.core.async.t_cljs$core$async32410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32410");

(cljs.core.async.t_cljs$core$async32410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32410.
 */
cljs.core.async.__GT_t_cljs$core$async32410 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32410(p__$1,ch__$1,meta32411){
return (new cljs.core.async.t_cljs$core$async32410(p__$1,ch__$1,meta32411));
});

}

return (new cljs.core.async.t_cljs$core$async32410(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32414 = arguments.length;
switch (G__32414) {
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
var c__29017__auto___32454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32435){
var state_val_32436 = (state_32435[(1)]);
if((state_val_32436 === (7))){
var inst_32431 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32437_32455 = state_32435__$1;
(statearr_32437_32455[(2)] = inst_32431);

(statearr_32437_32455[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (1))){
var state_32435__$1 = state_32435;
var statearr_32438_32456 = state_32435__$1;
(statearr_32438_32456[(2)] = null);

(statearr_32438_32456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (4))){
var inst_32417 = (state_32435[(7)]);
var inst_32417__$1 = (state_32435[(2)]);
var inst_32418 = (inst_32417__$1 == null);
var state_32435__$1 = (function (){var statearr_32439 = state_32435;
(statearr_32439[(7)] = inst_32417__$1);

return statearr_32439;
})();
if(cljs.core.truth_(inst_32418)){
var statearr_32440_32457 = state_32435__$1;
(statearr_32440_32457[(1)] = (5));

} else {
var statearr_32441_32458 = state_32435__$1;
(statearr_32441_32458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (6))){
var inst_32417 = (state_32435[(7)]);
var inst_32422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32417) : p.call(null,inst_32417));
var state_32435__$1 = state_32435;
if(cljs.core.truth_(inst_32422)){
var statearr_32442_32459 = state_32435__$1;
(statearr_32442_32459[(1)] = (8));

} else {
var statearr_32443_32460 = state_32435__$1;
(statearr_32443_32460[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (3))){
var inst_32433 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32435__$1,inst_32433);
} else {
if((state_val_32436 === (2))){
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32435__$1,(4),ch);
} else {
if((state_val_32436 === (11))){
var inst_32425 = (state_32435[(2)]);
var state_32435__$1 = state_32435;
var statearr_32444_32461 = state_32435__$1;
(statearr_32444_32461[(2)] = inst_32425);

(statearr_32444_32461[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (9))){
var state_32435__$1 = state_32435;
var statearr_32445_32462 = state_32435__$1;
(statearr_32445_32462[(2)] = null);

(statearr_32445_32462[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (5))){
var inst_32420 = cljs.core.async.close_BANG_(out);
var state_32435__$1 = state_32435;
var statearr_32446_32463 = state_32435__$1;
(statearr_32446_32463[(2)] = inst_32420);

(statearr_32446_32463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (10))){
var inst_32428 = (state_32435[(2)]);
var state_32435__$1 = (function (){var statearr_32447 = state_32435;
(statearr_32447[(8)] = inst_32428);

return statearr_32447;
})();
var statearr_32448_32464 = state_32435__$1;
(statearr_32448_32464[(2)] = null);

(statearr_32448_32464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32436 === (8))){
var inst_32417 = (state_32435[(7)]);
var state_32435__$1 = state_32435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32435__$1,(11),out,inst_32417);
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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32435){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32435);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32450){if((e32450 instanceof Object)){
var ex__28830__auto__ = e32450;
var statearr_32451_32465 = state_32435;
(statearr_32451_32465[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32435);

return cljs.core.cst$kw$recur;
} else {
throw e32450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32466 = state_32435;
state_32435 = G__32466;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32452 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32452[(6)] = c__29017__auto___32454);

return statearr_32452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32468 = arguments.length;
switch (G__32468) {
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
var c__29017__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32531){
var state_val_32532 = (state_32531[(1)]);
if((state_val_32532 === (7))){
var inst_32527 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32533_32571 = state_32531__$1;
(statearr_32533_32571[(2)] = inst_32527);

(statearr_32533_32571[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (20))){
var inst_32497 = (state_32531[(7)]);
var inst_32508 = (state_32531[(2)]);
var inst_32509 = cljs.core.next(inst_32497);
var inst_32483 = inst_32509;
var inst_32484 = null;
var inst_32485 = (0);
var inst_32486 = (0);
var state_32531__$1 = (function (){var statearr_32534 = state_32531;
(statearr_32534[(8)] = inst_32485);

(statearr_32534[(9)] = inst_32483);

(statearr_32534[(10)] = inst_32508);

(statearr_32534[(11)] = inst_32484);

(statearr_32534[(12)] = inst_32486);

return statearr_32534;
})();
var statearr_32535_32572 = state_32531__$1;
(statearr_32535_32572[(2)] = null);

(statearr_32535_32572[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (1))){
var state_32531__$1 = state_32531;
var statearr_32536_32573 = state_32531__$1;
(statearr_32536_32573[(2)] = null);

(statearr_32536_32573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (4))){
var inst_32472 = (state_32531[(13)]);
var inst_32472__$1 = (state_32531[(2)]);
var inst_32473 = (inst_32472__$1 == null);
var state_32531__$1 = (function (){var statearr_32537 = state_32531;
(statearr_32537[(13)] = inst_32472__$1);

return statearr_32537;
})();
if(cljs.core.truth_(inst_32473)){
var statearr_32538_32574 = state_32531__$1;
(statearr_32538_32574[(1)] = (5));

} else {
var statearr_32539_32575 = state_32531__$1;
(statearr_32539_32575[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (15))){
var state_32531__$1 = state_32531;
var statearr_32543_32576 = state_32531__$1;
(statearr_32543_32576[(2)] = null);

(statearr_32543_32576[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (21))){
var state_32531__$1 = state_32531;
var statearr_32544_32577 = state_32531__$1;
(statearr_32544_32577[(2)] = null);

(statearr_32544_32577[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (13))){
var inst_32485 = (state_32531[(8)]);
var inst_32483 = (state_32531[(9)]);
var inst_32484 = (state_32531[(11)]);
var inst_32486 = (state_32531[(12)]);
var inst_32493 = (state_32531[(2)]);
var inst_32494 = (inst_32486 + (1));
var tmp32540 = inst_32485;
var tmp32541 = inst_32483;
var tmp32542 = inst_32484;
var inst_32483__$1 = tmp32541;
var inst_32484__$1 = tmp32542;
var inst_32485__$1 = tmp32540;
var inst_32486__$1 = inst_32494;
var state_32531__$1 = (function (){var statearr_32545 = state_32531;
(statearr_32545[(8)] = inst_32485__$1);

(statearr_32545[(9)] = inst_32483__$1);

(statearr_32545[(14)] = inst_32493);

(statearr_32545[(11)] = inst_32484__$1);

(statearr_32545[(12)] = inst_32486__$1);

return statearr_32545;
})();
var statearr_32546_32578 = state_32531__$1;
(statearr_32546_32578[(2)] = null);

(statearr_32546_32578[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (22))){
var state_32531__$1 = state_32531;
var statearr_32547_32579 = state_32531__$1;
(statearr_32547_32579[(2)] = null);

(statearr_32547_32579[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (6))){
var inst_32472 = (state_32531[(13)]);
var inst_32481 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32472) : f.call(null,inst_32472));
var inst_32482 = cljs.core.seq(inst_32481);
var inst_32483 = inst_32482;
var inst_32484 = null;
var inst_32485 = (0);
var inst_32486 = (0);
var state_32531__$1 = (function (){var statearr_32548 = state_32531;
(statearr_32548[(8)] = inst_32485);

(statearr_32548[(9)] = inst_32483);

(statearr_32548[(11)] = inst_32484);

(statearr_32548[(12)] = inst_32486);

return statearr_32548;
})();
var statearr_32549_32580 = state_32531__$1;
(statearr_32549_32580[(2)] = null);

(statearr_32549_32580[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (17))){
var inst_32497 = (state_32531[(7)]);
var inst_32501 = cljs.core.chunk_first(inst_32497);
var inst_32502 = cljs.core.chunk_rest(inst_32497);
var inst_32503 = cljs.core.count(inst_32501);
var inst_32483 = inst_32502;
var inst_32484 = inst_32501;
var inst_32485 = inst_32503;
var inst_32486 = (0);
var state_32531__$1 = (function (){var statearr_32550 = state_32531;
(statearr_32550[(8)] = inst_32485);

(statearr_32550[(9)] = inst_32483);

(statearr_32550[(11)] = inst_32484);

(statearr_32550[(12)] = inst_32486);

return statearr_32550;
})();
var statearr_32551_32581 = state_32531__$1;
(statearr_32551_32581[(2)] = null);

(statearr_32551_32581[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (3))){
var inst_32529 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32531__$1,inst_32529);
} else {
if((state_val_32532 === (12))){
var inst_32517 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32552_32582 = state_32531__$1;
(statearr_32552_32582[(2)] = inst_32517);

(statearr_32552_32582[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (2))){
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32531__$1,(4),in$);
} else {
if((state_val_32532 === (23))){
var inst_32525 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32553_32583 = state_32531__$1;
(statearr_32553_32583[(2)] = inst_32525);

(statearr_32553_32583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (19))){
var inst_32512 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32554_32584 = state_32531__$1;
(statearr_32554_32584[(2)] = inst_32512);

(statearr_32554_32584[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (11))){
var inst_32483 = (state_32531[(9)]);
var inst_32497 = (state_32531[(7)]);
var inst_32497__$1 = cljs.core.seq(inst_32483);
var state_32531__$1 = (function (){var statearr_32555 = state_32531;
(statearr_32555[(7)] = inst_32497__$1);

return statearr_32555;
})();
if(inst_32497__$1){
var statearr_32556_32585 = state_32531__$1;
(statearr_32556_32585[(1)] = (14));

} else {
var statearr_32557_32586 = state_32531__$1;
(statearr_32557_32586[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (9))){
var inst_32519 = (state_32531[(2)]);
var inst_32520 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32531__$1 = (function (){var statearr_32558 = state_32531;
(statearr_32558[(15)] = inst_32519);

return statearr_32558;
})();
if(cljs.core.truth_(inst_32520)){
var statearr_32559_32587 = state_32531__$1;
(statearr_32559_32587[(1)] = (21));

} else {
var statearr_32560_32588 = state_32531__$1;
(statearr_32560_32588[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (5))){
var inst_32475 = cljs.core.async.close_BANG_(out);
var state_32531__$1 = state_32531;
var statearr_32561_32589 = state_32531__$1;
(statearr_32561_32589[(2)] = inst_32475);

(statearr_32561_32589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (14))){
var inst_32497 = (state_32531[(7)]);
var inst_32499 = cljs.core.chunked_seq_QMARK_(inst_32497);
var state_32531__$1 = state_32531;
if(inst_32499){
var statearr_32562_32590 = state_32531__$1;
(statearr_32562_32590[(1)] = (17));

} else {
var statearr_32563_32591 = state_32531__$1;
(statearr_32563_32591[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (16))){
var inst_32515 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32564_32592 = state_32531__$1;
(statearr_32564_32592[(2)] = inst_32515);

(statearr_32564_32592[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32532 === (10))){
var inst_32484 = (state_32531[(11)]);
var inst_32486 = (state_32531[(12)]);
var inst_32491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32484,inst_32486);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32531__$1,(13),out,inst_32491);
} else {
if((state_val_32532 === (18))){
var inst_32497 = (state_32531[(7)]);
var inst_32506 = cljs.core.first(inst_32497);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32531__$1,(20),out,inst_32506);
} else {
if((state_val_32532 === (8))){
var inst_32485 = (state_32531[(8)]);
var inst_32486 = (state_32531[(12)]);
var inst_32488 = (inst_32486 < inst_32485);
var inst_32489 = inst_32488;
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32489)){
var statearr_32565_32593 = state_32531__$1;
(statearr_32565_32593[(1)] = (10));

} else {
var statearr_32566_32594 = state_32531__$1;
(statearr_32566_32594[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0 = (function (){
var statearr_32567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32567[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__);

(statearr_32567[(1)] = (1));

return statearr_32567;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1 = (function (state_32531){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32531);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32568){if((e32568 instanceof Object)){
var ex__28830__auto__ = e32568;
var statearr_32569_32595 = state_32531;
(statearr_32569_32595[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32531);

return cljs.core.cst$kw$recur;
} else {
throw e32568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32596 = state_32531;
state_32531 = G__32596;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28827__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32570 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32570[(6)] = c__29017__auto__);

return statearr_32570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));

return c__29017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
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
var G__32601 = arguments.length;
switch (G__32601) {
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
var G__32604 = arguments.length;
switch (G__32604) {
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
var c__29017__auto___32651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32628){
var state_val_32629 = (state_32628[(1)]);
if((state_val_32629 === (7))){
var inst_32623 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
var statearr_32630_32652 = state_32628__$1;
(statearr_32630_32652[(2)] = inst_32623);

(statearr_32630_32652[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (1))){
var inst_32605 = null;
var state_32628__$1 = (function (){var statearr_32631 = state_32628;
(statearr_32631[(7)] = inst_32605);

return statearr_32631;
})();
var statearr_32632_32653 = state_32628__$1;
(statearr_32632_32653[(2)] = null);

(statearr_32632_32653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (4))){
var inst_32608 = (state_32628[(8)]);
var inst_32608__$1 = (state_32628[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var inst_32610 = cljs.core.not(inst_32609);
var state_32628__$1 = (function (){var statearr_32633 = state_32628;
(statearr_32633[(8)] = inst_32608__$1);

return statearr_32633;
})();
if(inst_32610){
var statearr_32634_32654 = state_32628__$1;
(statearr_32634_32654[(1)] = (5));

} else {
var statearr_32635_32655 = state_32628__$1;
(statearr_32635_32655[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (6))){
var state_32628__$1 = state_32628;
var statearr_32636_32656 = state_32628__$1;
(statearr_32636_32656[(2)] = null);

(statearr_32636_32656[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (3))){
var inst_32625 = (state_32628[(2)]);
var inst_32626 = cljs.core.async.close_BANG_(out);
var state_32628__$1 = (function (){var statearr_32637 = state_32628;
(statearr_32637[(9)] = inst_32625);

return statearr_32637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32628__$1,inst_32626);
} else {
if((state_val_32629 === (2))){
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32628__$1,(4),ch);
} else {
if((state_val_32629 === (11))){
var inst_32608 = (state_32628[(8)]);
var inst_32617 = (state_32628[(2)]);
var inst_32605 = inst_32608;
var state_32628__$1 = (function (){var statearr_32638 = state_32628;
(statearr_32638[(7)] = inst_32605);

(statearr_32638[(10)] = inst_32617);

return statearr_32638;
})();
var statearr_32639_32657 = state_32628__$1;
(statearr_32639_32657[(2)] = null);

(statearr_32639_32657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (9))){
var inst_32608 = (state_32628[(8)]);
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32628__$1,(11),out,inst_32608);
} else {
if((state_val_32629 === (5))){
var inst_32608 = (state_32628[(8)]);
var inst_32605 = (state_32628[(7)]);
var inst_32612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32608,inst_32605);
var state_32628__$1 = state_32628;
if(inst_32612){
var statearr_32641_32658 = state_32628__$1;
(statearr_32641_32658[(1)] = (8));

} else {
var statearr_32642_32659 = state_32628__$1;
(statearr_32642_32659[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (10))){
var inst_32620 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
var statearr_32643_32660 = state_32628__$1;
(statearr_32643_32660[(2)] = inst_32620);

(statearr_32643_32660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32629 === (8))){
var inst_32605 = (state_32628[(7)]);
var tmp32640 = inst_32605;
var inst_32605__$1 = tmp32640;
var state_32628__$1 = (function (){var statearr_32644 = state_32628;
(statearr_32644[(7)] = inst_32605__$1);

return statearr_32644;
})();
var statearr_32645_32661 = state_32628__$1;
(statearr_32645_32661[(2)] = null);

(statearr_32645_32661[(1)] = (2));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32646[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32646[(1)] = (1));

return statearr_32646;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32628){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32628);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32647){if((e32647 instanceof Object)){
var ex__28830__auto__ = e32647;
var statearr_32648_32662 = state_32628;
(statearr_32648_32662[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32628);

return cljs.core.cst$kw$recur;
} else {
throw e32647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32663 = state_32628;
state_32628 = G__32663;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32649 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32649[(6)] = c__29017__auto___32651);

return statearr_32649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32665 = arguments.length;
switch (G__32665) {
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
var c__29017__auto___32731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32703){
var state_val_32704 = (state_32703[(1)]);
if((state_val_32704 === (7))){
var inst_32699 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32705_32732 = state_32703__$1;
(statearr_32705_32732[(2)] = inst_32699);

(statearr_32705_32732[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (1))){
var inst_32666 = (new Array(n));
var inst_32667 = inst_32666;
var inst_32668 = (0);
var state_32703__$1 = (function (){var statearr_32706 = state_32703;
(statearr_32706[(7)] = inst_32667);

(statearr_32706[(8)] = inst_32668);

return statearr_32706;
})();
var statearr_32707_32733 = state_32703__$1;
(statearr_32707_32733[(2)] = null);

(statearr_32707_32733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (4))){
var inst_32671 = (state_32703[(9)]);
var inst_32671__$1 = (state_32703[(2)]);
var inst_32672 = (inst_32671__$1 == null);
var inst_32673 = cljs.core.not(inst_32672);
var state_32703__$1 = (function (){var statearr_32708 = state_32703;
(statearr_32708[(9)] = inst_32671__$1);

return statearr_32708;
})();
if(inst_32673){
var statearr_32709_32734 = state_32703__$1;
(statearr_32709_32734[(1)] = (5));

} else {
var statearr_32710_32735 = state_32703__$1;
(statearr_32710_32735[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (15))){
var inst_32693 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32711_32736 = state_32703__$1;
(statearr_32711_32736[(2)] = inst_32693);

(statearr_32711_32736[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (13))){
var state_32703__$1 = state_32703;
var statearr_32712_32737 = state_32703__$1;
(statearr_32712_32737[(2)] = null);

(statearr_32712_32737[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (6))){
var inst_32668 = (state_32703[(8)]);
var inst_32689 = (inst_32668 > (0));
var state_32703__$1 = state_32703;
if(cljs.core.truth_(inst_32689)){
var statearr_32713_32738 = state_32703__$1;
(statearr_32713_32738[(1)] = (12));

} else {
var statearr_32714_32739 = state_32703__$1;
(statearr_32714_32739[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (3))){
var inst_32701 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32703__$1,inst_32701);
} else {
if((state_val_32704 === (12))){
var inst_32667 = (state_32703[(7)]);
var inst_32691 = cljs.core.vec(inst_32667);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32703__$1,(15),out,inst_32691);
} else {
if((state_val_32704 === (2))){
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32703__$1,(4),ch);
} else {
if((state_val_32704 === (11))){
var inst_32683 = (state_32703[(2)]);
var inst_32684 = (new Array(n));
var inst_32667 = inst_32684;
var inst_32668 = (0);
var state_32703__$1 = (function (){var statearr_32715 = state_32703;
(statearr_32715[(10)] = inst_32683);

(statearr_32715[(7)] = inst_32667);

(statearr_32715[(8)] = inst_32668);

return statearr_32715;
})();
var statearr_32716_32740 = state_32703__$1;
(statearr_32716_32740[(2)] = null);

(statearr_32716_32740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (9))){
var inst_32667 = (state_32703[(7)]);
var inst_32681 = cljs.core.vec(inst_32667);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32703__$1,(11),out,inst_32681);
} else {
if((state_val_32704 === (5))){
var inst_32667 = (state_32703[(7)]);
var inst_32668 = (state_32703[(8)]);
var inst_32671 = (state_32703[(9)]);
var inst_32676 = (state_32703[(11)]);
var inst_32675 = (inst_32667[inst_32668] = inst_32671);
var inst_32676__$1 = (inst_32668 + (1));
var inst_32677 = (inst_32676__$1 < n);
var state_32703__$1 = (function (){var statearr_32717 = state_32703;
(statearr_32717[(12)] = inst_32675);

(statearr_32717[(11)] = inst_32676__$1);

return statearr_32717;
})();
if(cljs.core.truth_(inst_32677)){
var statearr_32718_32741 = state_32703__$1;
(statearr_32718_32741[(1)] = (8));

} else {
var statearr_32719_32742 = state_32703__$1;
(statearr_32719_32742[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (14))){
var inst_32696 = (state_32703[(2)]);
var inst_32697 = cljs.core.async.close_BANG_(out);
var state_32703__$1 = (function (){var statearr_32721 = state_32703;
(statearr_32721[(13)] = inst_32696);

return statearr_32721;
})();
var statearr_32722_32743 = state_32703__$1;
(statearr_32722_32743[(2)] = inst_32697);

(statearr_32722_32743[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (10))){
var inst_32687 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32723_32744 = state_32703__$1;
(statearr_32723_32744[(2)] = inst_32687);

(statearr_32723_32744[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32704 === (8))){
var inst_32667 = (state_32703[(7)]);
var inst_32676 = (state_32703[(11)]);
var tmp32720 = inst_32667;
var inst_32667__$1 = tmp32720;
var inst_32668 = inst_32676;
var state_32703__$1 = (function (){var statearr_32724 = state_32703;
(statearr_32724[(7)] = inst_32667__$1);

(statearr_32724[(8)] = inst_32668);

return statearr_32724;
})();
var statearr_32725_32745 = state_32703__$1;
(statearr_32725_32745[(2)] = null);

(statearr_32725_32745[(1)] = (2));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32726[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32726[(1)] = (1));

return statearr_32726;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32703){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32703);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32727){if((e32727 instanceof Object)){
var ex__28830__auto__ = e32727;
var statearr_32728_32746 = state_32703;
(statearr_32728_32746[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32703);

return cljs.core.cst$kw$recur;
} else {
throw e32727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32747 = state_32703;
state_32703 = G__32747;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32729 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32729[(6)] = c__29017__auto___32731);

return statearr_32729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32749 = arguments.length;
switch (G__32749) {
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
var c__29017__auto___32819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29018__auto__ = (function (){var switch__28826__auto__ = (function (state_32791){
var state_val_32792 = (state_32791[(1)]);
if((state_val_32792 === (7))){
var inst_32787 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
var statearr_32793_32820 = state_32791__$1;
(statearr_32793_32820[(2)] = inst_32787);

(statearr_32793_32820[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (1))){
var inst_32750 = [];
var inst_32751 = inst_32750;
var inst_32752 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_32791__$1 = (function (){var statearr_32794 = state_32791;
(statearr_32794[(7)] = inst_32751);

(statearr_32794[(8)] = inst_32752);

return statearr_32794;
})();
var statearr_32795_32821 = state_32791__$1;
(statearr_32795_32821[(2)] = null);

(statearr_32795_32821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (4))){
var inst_32755 = (state_32791[(9)]);
var inst_32755__$1 = (state_32791[(2)]);
var inst_32756 = (inst_32755__$1 == null);
var inst_32757 = cljs.core.not(inst_32756);
var state_32791__$1 = (function (){var statearr_32796 = state_32791;
(statearr_32796[(9)] = inst_32755__$1);

return statearr_32796;
})();
if(inst_32757){
var statearr_32797_32822 = state_32791__$1;
(statearr_32797_32822[(1)] = (5));

} else {
var statearr_32798_32823 = state_32791__$1;
(statearr_32798_32823[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (15))){
var inst_32781 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
var statearr_32799_32824 = state_32791__$1;
(statearr_32799_32824[(2)] = inst_32781);

(statearr_32799_32824[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (13))){
var state_32791__$1 = state_32791;
var statearr_32800_32825 = state_32791__$1;
(statearr_32800_32825[(2)] = null);

(statearr_32800_32825[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (6))){
var inst_32751 = (state_32791[(7)]);
var inst_32776 = inst_32751.length;
var inst_32777 = (inst_32776 > (0));
var state_32791__$1 = state_32791;
if(cljs.core.truth_(inst_32777)){
var statearr_32801_32826 = state_32791__$1;
(statearr_32801_32826[(1)] = (12));

} else {
var statearr_32802_32827 = state_32791__$1;
(statearr_32802_32827[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (3))){
var inst_32789 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32791__$1,inst_32789);
} else {
if((state_val_32792 === (12))){
var inst_32751 = (state_32791[(7)]);
var inst_32779 = cljs.core.vec(inst_32751);
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32791__$1,(15),out,inst_32779);
} else {
if((state_val_32792 === (2))){
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32791__$1,(4),ch);
} else {
if((state_val_32792 === (11))){
var inst_32755 = (state_32791[(9)]);
var inst_32759 = (state_32791[(10)]);
var inst_32769 = (state_32791[(2)]);
var inst_32770 = [];
var inst_32771 = inst_32770.push(inst_32755);
var inst_32751 = inst_32770;
var inst_32752 = inst_32759;
var state_32791__$1 = (function (){var statearr_32803 = state_32791;
(statearr_32803[(11)] = inst_32771);

(statearr_32803[(7)] = inst_32751);

(statearr_32803[(12)] = inst_32769);

(statearr_32803[(8)] = inst_32752);

return statearr_32803;
})();
var statearr_32804_32828 = state_32791__$1;
(statearr_32804_32828[(2)] = null);

(statearr_32804_32828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (9))){
var inst_32751 = (state_32791[(7)]);
var inst_32767 = cljs.core.vec(inst_32751);
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32791__$1,(11),out,inst_32767);
} else {
if((state_val_32792 === (5))){
var inst_32755 = (state_32791[(9)]);
var inst_32759 = (state_32791[(10)]);
var inst_32752 = (state_32791[(8)]);
var inst_32759__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32755) : f.call(null,inst_32755));
var inst_32760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32759__$1,inst_32752);
var inst_32761 = cljs.core.keyword_identical_QMARK_(inst_32752,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_32762 = ((inst_32760) || (inst_32761));
var state_32791__$1 = (function (){var statearr_32805 = state_32791;
(statearr_32805[(10)] = inst_32759__$1);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32762)){
var statearr_32806_32829 = state_32791__$1;
(statearr_32806_32829[(1)] = (8));

} else {
var statearr_32807_32830 = state_32791__$1;
(statearr_32807_32830[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (14))){
var inst_32784 = (state_32791[(2)]);
var inst_32785 = cljs.core.async.close_BANG_(out);
var state_32791__$1 = (function (){var statearr_32809 = state_32791;
(statearr_32809[(13)] = inst_32784);

return statearr_32809;
})();
var statearr_32810_32831 = state_32791__$1;
(statearr_32810_32831[(2)] = inst_32785);

(statearr_32810_32831[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (10))){
var inst_32774 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
var statearr_32811_32832 = state_32791__$1;
(statearr_32811_32832[(2)] = inst_32774);

(statearr_32811_32832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32792 === (8))){
var inst_32755 = (state_32791[(9)]);
var inst_32759 = (state_32791[(10)]);
var inst_32751 = (state_32791[(7)]);
var inst_32764 = inst_32751.push(inst_32755);
var tmp32808 = inst_32751;
var inst_32751__$1 = tmp32808;
var inst_32752 = inst_32759;
var state_32791__$1 = (function (){var statearr_32812 = state_32791;
(statearr_32812[(7)] = inst_32751__$1);

(statearr_32812[(14)] = inst_32764);

(statearr_32812[(8)] = inst_32752);

return statearr_32812;
})();
var statearr_32813_32833 = state_32791__$1;
(statearr_32813_32833[(2)] = null);

(statearr_32813_32833[(1)] = (2));


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
var cljs$core$async$state_machine__28827__auto__ = null;
var cljs$core$async$state_machine__28827__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$state_machine__28827__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$state_machine__28827__auto____1 = (function (state_32791){
while(true){
var ret_value__28828__auto__ = (function (){try{while(true){
var result__28829__auto__ = switch__28826__auto__(state_32791);
if(cljs.core.keyword_identical_QMARK_(result__28829__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__28829__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__28830__auto__ = e32815;
var statearr_32816_32834 = state_32791;
(statearr_32816_32834[(5)] = ex__28830__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32791);

return cljs.core.cst$kw$recur;
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28828__auto__,cljs.core.cst$kw$recur)){
var G__32835 = state_32791;
state_32791 = G__32835;
continue;
} else {
return ret_value__28828__auto__;
}
break;
}
});
cljs$core$async$state_machine__28827__auto__ = function(state_32791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28827__auto____1.call(this,state_32791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28827__auto____0;
cljs$core$async$state_machine__28827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28827__auto____1;
return cljs$core$async$state_machine__28827__auto__;
})()
})();
var state__29019__auto__ = (function (){var statearr_32817 = (f__29018__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29018__auto__.cljs$core$IFn$_invoke$arity$0() : f__29018__auto__.call(null));
(statearr_32817[(6)] = c__29017__auto___32819);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29019__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

