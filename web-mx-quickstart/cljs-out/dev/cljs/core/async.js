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
var G__24104 = arguments.length;
switch (G__24104) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24105 = (function (f,blockable,meta24106){
this.f = f;
this.blockable = blockable;
this.meta24106 = meta24106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24107,meta24106__$1){
var self__ = this;
var _24107__$1 = this;
return (new cljs.core.async.t_cljs$core$async24105(self__.f,self__.blockable,meta24106__$1));
}));

(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24107){
var self__ = this;
var _24107__$1 = this;
return self__.meta24106;
}));

(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta24106], null);
}));

(cljs.core.async.t_cljs$core$async24105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24105");

(cljs.core.async.t_cljs$core$async24105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24105.
 */
cljs.core.async.__GT_t_cljs$core$async24105 = (function cljs$core$async$__GT_t_cljs$core$async24105(f__$1,blockable__$1,meta24106){
return (new cljs.core.async.t_cljs$core$async24105(f__$1,blockable__$1,meta24106));
});

}

return (new cljs.core.async.t_cljs$core$async24105(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24111 = arguments.length;
switch (G__24111) {
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
var G__24114 = arguments.length;
switch (G__24114) {
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
var G__24117 = arguments.length;
switch (G__24117) {
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
var val_24119 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24119) : fn1.call(null,val_24119));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24119) : fn1.call(null,val_24119));
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
var G__24121 = arguments.length;
switch (G__24121) {
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
var n__4613__auto___24123 = n;
var x_24124 = (0);
while(true){
if((x_24124 < n__4613__auto___24123)){
(a[x_24124] = (0));

var G__24125 = (x_24124 + (1));
x_24124 = G__24125;
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

var G__24126 = (i + (1));
i = G__24126;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24127 = (function (flag,meta24128){
this.flag = flag;
this.meta24128 = meta24128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24129,meta24128__$1){
var self__ = this;
var _24129__$1 = this;
return (new cljs.core.async.t_cljs$core$async24127(self__.flag,meta24128__$1));
}));

(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24129){
var self__ = this;
var _24129__$1 = this;
return self__.meta24128;
}));

(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta24128], null);
}));

(cljs.core.async.t_cljs$core$async24127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24127");

(cljs.core.async.t_cljs$core$async24127.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24127.
 */
cljs.core.async.__GT_t_cljs$core$async24127 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24127(flag__$1,meta24128){
return (new cljs.core.async.t_cljs$core$async24127(flag__$1,meta24128));
});

}

return (new cljs.core.async.t_cljs$core$async24127(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24130 = (function (flag,cb,meta24131){
this.flag = flag;
this.cb = cb;
this.meta24131 = meta24131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24132,meta24131__$1){
var self__ = this;
var _24132__$1 = this;
return (new cljs.core.async.t_cljs$core$async24130(self__.flag,self__.cb,meta24131__$1));
}));

(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24132){
var self__ = this;
var _24132__$1 = this;
return self__.meta24131;
}));

(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta24131], null);
}));

(cljs.core.async.t_cljs$core$async24130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24130");

(cljs.core.async.t_cljs$core$async24130.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24130.
 */
cljs.core.async.__GT_t_cljs$core$async24130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24130(flag__$1,cb__$1,meta24131){
return (new cljs.core.async.t_cljs$core$async24130(flag__$1,cb__$1,meta24131));
});

}

return (new cljs.core.async.t_cljs$core$async24130(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24133_SHARP_){
var G__24135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24133_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24135) : fret.call(null,G__24135));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24134_SHARP_){
var G__24136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24134_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24136) : fret.call(null,G__24136));
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
var G__24137 = (i + (1));
i = G__24137;
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
var len__4736__auto___24143 = arguments.length;
var i__4737__auto___24144 = (0);
while(true){
if((i__4737__auto___24144 < len__4736__auto___24143)){
args__4742__auto__.push((arguments[i__4737__auto___24144]));

var G__24145 = (i__4737__auto___24144 + (1));
i__4737__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24140){
var map__24141 = p__24140;
var map__24141__$1 = (((((!((map__24141 == null))))?(((((map__24141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24141):map__24141);
var opts = map__24141__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24138){
var G__24139 = cljs.core.first(seq24138);
var seq24138__$1 = cljs.core.next(seq24138);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24139,seq24138__$1);
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
var G__24147 = arguments.length;
switch (G__24147) {
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
var c__22163__auto___24193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24171){
var state_val_24172 = (state_24171[(1)]);
if((state_val_24172 === (7))){
var inst_24167 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
var statearr_24173_24194 = state_24171__$1;
(statearr_24173_24194[(2)] = inst_24167);

(statearr_24173_24194[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (1))){
var state_24171__$1 = state_24171;
var statearr_24174_24195 = state_24171__$1;
(statearr_24174_24195[(2)] = null);

(statearr_24174_24195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (4))){
var inst_24150 = (state_24171[(7)]);
var inst_24150__$1 = (state_24171[(2)]);
var inst_24151 = (inst_24150__$1 == null);
var state_24171__$1 = (function (){var statearr_24175 = state_24171;
(statearr_24175[(7)] = inst_24150__$1);

return statearr_24175;
})();
if(cljs.core.truth_(inst_24151)){
var statearr_24176_24196 = state_24171__$1;
(statearr_24176_24196[(1)] = (5));

} else {
var statearr_24177_24197 = state_24171__$1;
(statearr_24177_24197[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (13))){
var state_24171__$1 = state_24171;
var statearr_24178_24198 = state_24171__$1;
(statearr_24178_24198[(2)] = null);

(statearr_24178_24198[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (6))){
var inst_24150 = (state_24171[(7)]);
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24171__$1,(11),to,inst_24150);
} else {
if((state_val_24172 === (3))){
var inst_24169 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24171__$1,inst_24169);
} else {
if((state_val_24172 === (12))){
var state_24171__$1 = state_24171;
var statearr_24179_24199 = state_24171__$1;
(statearr_24179_24199[(2)] = null);

(statearr_24179_24199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (2))){
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24171__$1,(4),from);
} else {
if((state_val_24172 === (11))){
var inst_24160 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
if(cljs.core.truth_(inst_24160)){
var statearr_24180_24200 = state_24171__$1;
(statearr_24180_24200[(1)] = (12));

} else {
var statearr_24181_24201 = state_24171__$1;
(statearr_24181_24201[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (9))){
var state_24171__$1 = state_24171;
var statearr_24182_24202 = state_24171__$1;
(statearr_24182_24202[(2)] = null);

(statearr_24182_24202[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (5))){
var state_24171__$1 = state_24171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24183_24203 = state_24171__$1;
(statearr_24183_24203[(1)] = (8));

} else {
var statearr_24184_24204 = state_24171__$1;
(statearr_24184_24204[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (14))){
var inst_24165 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
var statearr_24185_24205 = state_24171__$1;
(statearr_24185_24205[(2)] = inst_24165);

(statearr_24185_24205[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (10))){
var inst_24157 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
var statearr_24186_24206 = state_24171__$1;
(statearr_24186_24206[(2)] = inst_24157);

(statearr_24186_24206[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24172 === (8))){
var inst_24154 = cljs.core.async.close_BANG_(to);
var state_24171__$1 = state_24171;
var statearr_24187_24207 = state_24171__$1;
(statearr_24187_24207[(2)] = inst_24154);

(statearr_24187_24207[(1)] = (10));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_24188 = [null,null,null,null,null,null,null,null];
(statearr_24188[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_24188[(1)] = (1));

return statearr_24188;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_24171){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24171);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24189){if((e24189 instanceof Object)){
var ex__21976__auto__ = e24189;
var statearr_24190_24208 = state_24171;
(statearr_24190_24208[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24171);

return cljs.core.cst$kw$recur;
} else {
throw e24189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24209 = state_24171;
state_24171 = G__24209;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_24171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_24171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24191 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24191[(6)] = c__22163__auto___24193);

return statearr_24191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var process = (function (p__24210){
var vec__24211 = p__24210;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24211,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24211,(1),null);
var job = vec__24211;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22163__auto___24382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24218){
var state_val_24219 = (state_24218[(1)]);
if((state_val_24219 === (1))){
var state_24218__$1 = state_24218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24218__$1,(2),res,v);
} else {
if((state_val_24219 === (2))){
var inst_24215 = (state_24218[(2)]);
var inst_24216 = cljs.core.async.close_BANG_(res);
var state_24218__$1 = (function (){var statearr_24220 = state_24218;
(statearr_24220[(7)] = inst_24215);

return statearr_24220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24218__$1,inst_24216);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_24221 = [null,null,null,null,null,null,null,null];
(statearr_24221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__);

(statearr_24221[(1)] = (1));

return statearr_24221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1 = (function (state_24218){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24218);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24222){if((e24222 instanceof Object)){
var ex__21976__auto__ = e24222;
var statearr_24223_24383 = state_24218;
(statearr_24223_24383[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24218);

return cljs.core.cst$kw$recur;
} else {
throw e24222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24384 = state_24218;
state_24218 = G__24384;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = function(state_24218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1.call(this,state_24218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24224 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24224[(6)] = c__22163__auto___24382);

return statearr_24224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__24225){
var vec__24226 = p__24225;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(1),null);
var job = vec__24226;
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
var n__4613__auto___24385 = n;
var __24386 = (0);
while(true){
if((__24386 < n__4613__auto___24385)){
var G__24229_24387 = type;
var G__24229_24388__$1 = (((G__24229_24387 instanceof cljs.core.Keyword))?G__24229_24387.fqn:null);
switch (G__24229_24388__$1) {
case "compute":
var c__22163__auto___24390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24386,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = ((function (__24386,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function (state_24242){
var state_val_24243 = (state_24242[(1)]);
if((state_val_24243 === (1))){
var state_24242__$1 = state_24242;
var statearr_24244_24391 = state_24242__$1;
(statearr_24244_24391[(2)] = null);

(statearr_24244_24391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24243 === (2))){
var state_24242__$1 = state_24242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24242__$1,(4),jobs);
} else {
if((state_val_24243 === (3))){
var inst_24240 = (state_24242[(2)]);
var state_24242__$1 = state_24242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24242__$1,inst_24240);
} else {
if((state_val_24243 === (4))){
var inst_24232 = (state_24242[(2)]);
var inst_24233 = process(inst_24232);
var state_24242__$1 = state_24242;
if(cljs.core.truth_(inst_24233)){
var statearr_24245_24392 = state_24242__$1;
(statearr_24245_24392[(1)] = (5));

} else {
var statearr_24246_24393 = state_24242__$1;
(statearr_24246_24393[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24243 === (5))){
var state_24242__$1 = state_24242;
var statearr_24247_24394 = state_24242__$1;
(statearr_24247_24394[(2)] = null);

(statearr_24247_24394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24243 === (6))){
var state_24242__$1 = state_24242;
var statearr_24248_24395 = state_24242__$1;
(statearr_24248_24395[(2)] = null);

(statearr_24248_24395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24243 === (7))){
var inst_24238 = (state_24242[(2)]);
var state_24242__$1 = state_24242;
var statearr_24249_24396 = state_24242__$1;
(statearr_24249_24396[(2)] = inst_24238);

(statearr_24249_24396[(1)] = (3));


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
});})(__24386,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
;
return ((function (__24386,switch__21972__auto__,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_24250 = [null,null,null,null,null,null,null];
(statearr_24250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__);

(statearr_24250[(1)] = (1));

return statearr_24250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1 = (function (state_24242){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24242);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24251){if((e24251 instanceof Object)){
var ex__21976__auto__ = e24251;
var statearr_24252_24397 = state_24242;
(statearr_24252_24397[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24242);

return cljs.core.cst$kw$recur;
} else {
throw e24251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24398 = state_24242;
state_24242 = G__24398;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = function(state_24242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1.call(this,state_24242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__;
})()
;})(__24386,switch__21972__auto__,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
})();
var state__22165__auto__ = (function (){var statearr_24253 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24253[(6)] = c__22163__auto___24390);

return statearr_24253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
});})(__24386,c__22163__auto___24390,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
);


break;
case "async":
var c__22163__auto___24399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24386,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = ((function (__24386,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function (state_24266){
var state_val_24267 = (state_24266[(1)]);
if((state_val_24267 === (1))){
var state_24266__$1 = state_24266;
var statearr_24268_24400 = state_24266__$1;
(statearr_24268_24400[(2)] = null);

(statearr_24268_24400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24267 === (2))){
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24266__$1,(4),jobs);
} else {
if((state_val_24267 === (3))){
var inst_24264 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24266__$1,inst_24264);
} else {
if((state_val_24267 === (4))){
var inst_24256 = (state_24266[(2)]);
var inst_24257 = async(inst_24256);
var state_24266__$1 = state_24266;
if(cljs.core.truth_(inst_24257)){
var statearr_24269_24401 = state_24266__$1;
(statearr_24269_24401[(1)] = (5));

} else {
var statearr_24270_24402 = state_24266__$1;
(statearr_24270_24402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24267 === (5))){
var state_24266__$1 = state_24266;
var statearr_24271_24403 = state_24266__$1;
(statearr_24271_24403[(2)] = null);

(statearr_24271_24403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24267 === (6))){
var state_24266__$1 = state_24266;
var statearr_24272_24404 = state_24266__$1;
(statearr_24272_24404[(2)] = null);

(statearr_24272_24404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24267 === (7))){
var inst_24262 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24273_24405 = state_24266__$1;
(statearr_24273_24405[(2)] = inst_24262);

(statearr_24273_24405[(1)] = (3));


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
});})(__24386,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
;
return ((function (__24386,switch__21972__auto__,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_24274 = [null,null,null,null,null,null,null];
(statearr_24274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__);

(statearr_24274[(1)] = (1));

return statearr_24274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1 = (function (state_24266){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24266);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24275){if((e24275 instanceof Object)){
var ex__21976__auto__ = e24275;
var statearr_24276_24406 = state_24266;
(statearr_24276_24406[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24266);

return cljs.core.cst$kw$recur;
} else {
throw e24275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24407 = state_24266;
state_24266 = G__24407;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = function(state_24266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1.call(this,state_24266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__;
})()
;})(__24386,switch__21972__auto__,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
})();
var state__22165__auto__ = (function (){var statearr_24277 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24277[(6)] = c__22163__auto___24399);

return statearr_24277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
});})(__24386,c__22163__auto___24399,G__24229_24387,G__24229_24388__$1,n__4613__auto___24385,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24229_24388__$1)].join('')));

}

var G__24408 = (__24386 + (1));
__24386 = G__24408;
continue;
} else {
}
break;
}

var c__22163__auto___24409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (7))){
var inst_24295 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
var statearr_24301_24410 = state_24299__$1;
(statearr_24301_24410[(2)] = inst_24295);

(statearr_24301_24410[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24300 === (1))){
var state_24299__$1 = state_24299;
var statearr_24302_24411 = state_24299__$1;
(statearr_24302_24411[(2)] = null);

(statearr_24302_24411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24300 === (4))){
var inst_24280 = (state_24299[(7)]);
var inst_24280__$1 = (state_24299[(2)]);
var inst_24281 = (inst_24280__$1 == null);
var state_24299__$1 = (function (){var statearr_24303 = state_24299;
(statearr_24303[(7)] = inst_24280__$1);

return statearr_24303;
})();
if(cljs.core.truth_(inst_24281)){
var statearr_24304_24412 = state_24299__$1;
(statearr_24304_24412[(1)] = (5));

} else {
var statearr_24305_24413 = state_24299__$1;
(statearr_24305_24413[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24300 === (6))){
var inst_24285 = (state_24299[(8)]);
var inst_24280 = (state_24299[(7)]);
var inst_24285__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24287 = [inst_24280,inst_24285__$1];
var inst_24288 = (new cljs.core.PersistentVector(null,2,(5),inst_24286,inst_24287,null));
var state_24299__$1 = (function (){var statearr_24306 = state_24299;
(statearr_24306[(8)] = inst_24285__$1);

return statearr_24306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24299__$1,(8),jobs,inst_24288);
} else {
if((state_val_24300 === (3))){
var inst_24297 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (2))){
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24299__$1,(4),from);
} else {
if((state_val_24300 === (9))){
var inst_24292 = (state_24299[(2)]);
var state_24299__$1 = (function (){var statearr_24307 = state_24299;
(statearr_24307[(9)] = inst_24292);

return statearr_24307;
})();
var statearr_24308_24414 = state_24299__$1;
(statearr_24308_24414[(2)] = null);

(statearr_24308_24414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24300 === (5))){
var inst_24283 = cljs.core.async.close_BANG_(jobs);
var state_24299__$1 = state_24299;
var statearr_24309_24415 = state_24299__$1;
(statearr_24309_24415[(2)] = inst_24283);

(statearr_24309_24415[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24300 === (8))){
var inst_24285 = (state_24299[(8)]);
var inst_24290 = (state_24299[(2)]);
var state_24299__$1 = (function (){var statearr_24310 = state_24299;
(statearr_24310[(10)] = inst_24290);

return statearr_24310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24299__$1,(9),results,inst_24285);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1 = (function (state_24299){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24299);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__21976__auto__ = e24312;
var statearr_24313_24416 = state_24299;
(statearr_24313_24416[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24299);

return cljs.core.cst$kw$recur;
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24417 = state_24299;
state_24299 = G__24417;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24314 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24314[(6)] = c__22163__auto___24409);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


var c__22163__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24352){
var state_val_24353 = (state_24352[(1)]);
if((state_val_24353 === (7))){
var inst_24348 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24354_24418 = state_24352__$1;
(statearr_24354_24418[(2)] = inst_24348);

(statearr_24354_24418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (20))){
var state_24352__$1 = state_24352;
var statearr_24355_24419 = state_24352__$1;
(statearr_24355_24419[(2)] = null);

(statearr_24355_24419[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (1))){
var state_24352__$1 = state_24352;
var statearr_24356_24420 = state_24352__$1;
(statearr_24356_24420[(2)] = null);

(statearr_24356_24420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (4))){
var inst_24317 = (state_24352[(7)]);
var inst_24317__$1 = (state_24352[(2)]);
var inst_24318 = (inst_24317__$1 == null);
var state_24352__$1 = (function (){var statearr_24357 = state_24352;
(statearr_24357[(7)] = inst_24317__$1);

return statearr_24357;
})();
if(cljs.core.truth_(inst_24318)){
var statearr_24358_24421 = state_24352__$1;
(statearr_24358_24421[(1)] = (5));

} else {
var statearr_24359_24422 = state_24352__$1;
(statearr_24359_24422[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (15))){
var inst_24330 = (state_24352[(8)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24352__$1,(18),to,inst_24330);
} else {
if((state_val_24353 === (21))){
var inst_24343 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24360_24423 = state_24352__$1;
(statearr_24360_24423[(2)] = inst_24343);

(statearr_24360_24423[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (13))){
var inst_24345 = (state_24352[(2)]);
var state_24352__$1 = (function (){var statearr_24361 = state_24352;
(statearr_24361[(9)] = inst_24345);

return statearr_24361;
})();
var statearr_24362_24424 = state_24352__$1;
(statearr_24362_24424[(2)] = null);

(statearr_24362_24424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (6))){
var inst_24317 = (state_24352[(7)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24352__$1,(11),inst_24317);
} else {
if((state_val_24353 === (17))){
var inst_24338 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
if(cljs.core.truth_(inst_24338)){
var statearr_24363_24425 = state_24352__$1;
(statearr_24363_24425[(1)] = (19));

} else {
var statearr_24364_24426 = state_24352__$1;
(statearr_24364_24426[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (3))){
var inst_24350 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24352__$1,inst_24350);
} else {
if((state_val_24353 === (12))){
var inst_24327 = (state_24352[(10)]);
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24352__$1,(14),inst_24327);
} else {
if((state_val_24353 === (2))){
var state_24352__$1 = state_24352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24352__$1,(4),results);
} else {
if((state_val_24353 === (19))){
var state_24352__$1 = state_24352;
var statearr_24365_24427 = state_24352__$1;
(statearr_24365_24427[(2)] = null);

(statearr_24365_24427[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (11))){
var inst_24327 = (state_24352[(2)]);
var state_24352__$1 = (function (){var statearr_24366 = state_24352;
(statearr_24366[(10)] = inst_24327);

return statearr_24366;
})();
var statearr_24367_24428 = state_24352__$1;
(statearr_24367_24428[(2)] = null);

(statearr_24367_24428[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (9))){
var state_24352__$1 = state_24352;
var statearr_24368_24429 = state_24352__$1;
(statearr_24368_24429[(2)] = null);

(statearr_24368_24429[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (5))){
var state_24352__$1 = state_24352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24369_24430 = state_24352__$1;
(statearr_24369_24430[(1)] = (8));

} else {
var statearr_24370_24431 = state_24352__$1;
(statearr_24370_24431[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (14))){
var inst_24330 = (state_24352[(8)]);
var inst_24330__$1 = (state_24352[(2)]);
var inst_24331 = (inst_24330__$1 == null);
var inst_24332 = cljs.core.not(inst_24331);
var state_24352__$1 = (function (){var statearr_24371 = state_24352;
(statearr_24371[(8)] = inst_24330__$1);

return statearr_24371;
})();
if(inst_24332){
var statearr_24372_24432 = state_24352__$1;
(statearr_24372_24432[(1)] = (15));

} else {
var statearr_24373_24433 = state_24352__$1;
(statearr_24373_24433[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (16))){
var state_24352__$1 = state_24352;
var statearr_24374_24434 = state_24352__$1;
(statearr_24374_24434[(2)] = false);

(statearr_24374_24434[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (10))){
var inst_24324 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24375_24435 = state_24352__$1;
(statearr_24375_24435[(2)] = inst_24324);

(statearr_24375_24435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (18))){
var inst_24335 = (state_24352[(2)]);
var state_24352__$1 = state_24352;
var statearr_24376_24436 = state_24352__$1;
(statearr_24376_24436[(2)] = inst_24335);

(statearr_24376_24436[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24353 === (8))){
var inst_24321 = cljs.core.async.close_BANG_(to);
var state_24352__$1 = state_24352;
var statearr_24377_24437 = state_24352__$1;
(statearr_24377_24437[(2)] = inst_24321);

(statearr_24377_24437[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1 = (function (state_24352){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24352);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__21976__auto__ = e24379;
var statearr_24380_24438 = state_24352;
(statearr_24380_24438[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24352);

return cljs.core.cst$kw$recur;
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24439 = state_24352;
state_24352 = G__24439;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__ = function(state_24352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1.call(this,state_24352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24381 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24381[(6)] = c__22163__auto__);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

return c__22163__auto__;
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
var G__24441 = arguments.length;
switch (G__24441) {
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
var G__24444 = arguments.length;
switch (G__24444) {
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
var G__24447 = arguments.length;
switch (G__24447) {
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
var c__22163__auto___24496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24473){
var state_val_24474 = (state_24473[(1)]);
if((state_val_24474 === (7))){
var inst_24469 = (state_24473[(2)]);
var state_24473__$1 = state_24473;
var statearr_24475_24497 = state_24473__$1;
(statearr_24475_24497[(2)] = inst_24469);

(statearr_24475_24497[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (1))){
var state_24473__$1 = state_24473;
var statearr_24476_24498 = state_24473__$1;
(statearr_24476_24498[(2)] = null);

(statearr_24476_24498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (4))){
var inst_24450 = (state_24473[(7)]);
var inst_24450__$1 = (state_24473[(2)]);
var inst_24451 = (inst_24450__$1 == null);
var state_24473__$1 = (function (){var statearr_24477 = state_24473;
(statearr_24477[(7)] = inst_24450__$1);

return statearr_24477;
})();
if(cljs.core.truth_(inst_24451)){
var statearr_24478_24499 = state_24473__$1;
(statearr_24478_24499[(1)] = (5));

} else {
var statearr_24479_24500 = state_24473__$1;
(statearr_24479_24500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (13))){
var state_24473__$1 = state_24473;
var statearr_24480_24501 = state_24473__$1;
(statearr_24480_24501[(2)] = null);

(statearr_24480_24501[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (6))){
var inst_24450 = (state_24473[(7)]);
var inst_24456 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24450) : p.call(null,inst_24450));
var state_24473__$1 = state_24473;
if(cljs.core.truth_(inst_24456)){
var statearr_24481_24502 = state_24473__$1;
(statearr_24481_24502[(1)] = (9));

} else {
var statearr_24482_24503 = state_24473__$1;
(statearr_24482_24503[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (3))){
var inst_24471 = (state_24473[(2)]);
var state_24473__$1 = state_24473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24473__$1,inst_24471);
} else {
if((state_val_24474 === (12))){
var state_24473__$1 = state_24473;
var statearr_24483_24504 = state_24473__$1;
(statearr_24483_24504[(2)] = null);

(statearr_24483_24504[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (2))){
var state_24473__$1 = state_24473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24473__$1,(4),ch);
} else {
if((state_val_24474 === (11))){
var inst_24450 = (state_24473[(7)]);
var inst_24460 = (state_24473[(2)]);
var state_24473__$1 = state_24473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24473__$1,(8),inst_24460,inst_24450);
} else {
if((state_val_24474 === (9))){
var state_24473__$1 = state_24473;
var statearr_24484_24505 = state_24473__$1;
(statearr_24484_24505[(2)] = tc);

(statearr_24484_24505[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (5))){
var inst_24453 = cljs.core.async.close_BANG_(tc);
var inst_24454 = cljs.core.async.close_BANG_(fc);
var state_24473__$1 = (function (){var statearr_24485 = state_24473;
(statearr_24485[(8)] = inst_24453);

return statearr_24485;
})();
var statearr_24486_24506 = state_24473__$1;
(statearr_24486_24506[(2)] = inst_24454);

(statearr_24486_24506[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (14))){
var inst_24467 = (state_24473[(2)]);
var state_24473__$1 = state_24473;
var statearr_24487_24507 = state_24473__$1;
(statearr_24487_24507[(2)] = inst_24467);

(statearr_24487_24507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (10))){
var state_24473__$1 = state_24473;
var statearr_24488_24508 = state_24473__$1;
(statearr_24488_24508[(2)] = fc);

(statearr_24488_24508[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24474 === (8))){
var inst_24462 = (state_24473[(2)]);
var state_24473__$1 = state_24473;
if(cljs.core.truth_(inst_24462)){
var statearr_24489_24509 = state_24473__$1;
(statearr_24489_24509[(1)] = (12));

} else {
var statearr_24490_24510 = state_24473__$1;
(statearr_24490_24510[(1)] = (13));

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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_24491 = [null,null,null,null,null,null,null,null,null];
(statearr_24491[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_24491[(1)] = (1));

return statearr_24491;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_24473){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24473);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24492){if((e24492 instanceof Object)){
var ex__21976__auto__ = e24492;
var statearr_24493_24511 = state_24473;
(statearr_24493_24511[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24473);

return cljs.core.cst$kw$recur;
} else {
throw e24492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24512 = state_24473;
state_24473 = G__24512;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_24473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_24473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24494 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24494[(6)] = c__22163__auto___24496);

return statearr_24494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var c__22163__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24533){
var state_val_24534 = (state_24533[(1)]);
if((state_val_24534 === (7))){
var inst_24529 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24535_24553 = state_24533__$1;
(statearr_24535_24553[(2)] = inst_24529);

(statearr_24535_24553[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (1))){
var inst_24513 = init;
var state_24533__$1 = (function (){var statearr_24536 = state_24533;
(statearr_24536[(7)] = inst_24513);

return statearr_24536;
})();
var statearr_24537_24554 = state_24533__$1;
(statearr_24537_24554[(2)] = null);

(statearr_24537_24554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (4))){
var inst_24516 = (state_24533[(8)]);
var inst_24516__$1 = (state_24533[(2)]);
var inst_24517 = (inst_24516__$1 == null);
var state_24533__$1 = (function (){var statearr_24538 = state_24533;
(statearr_24538[(8)] = inst_24516__$1);

return statearr_24538;
})();
if(cljs.core.truth_(inst_24517)){
var statearr_24539_24555 = state_24533__$1;
(statearr_24539_24555[(1)] = (5));

} else {
var statearr_24540_24556 = state_24533__$1;
(statearr_24540_24556[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (6))){
var inst_24516 = (state_24533[(8)]);
var inst_24520 = (state_24533[(9)]);
var inst_24513 = (state_24533[(7)]);
var inst_24520__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24513,inst_24516) : f.call(null,inst_24513,inst_24516));
var inst_24521 = cljs.core.reduced_QMARK_(inst_24520__$1);
var state_24533__$1 = (function (){var statearr_24541 = state_24533;
(statearr_24541[(9)] = inst_24520__$1);

return statearr_24541;
})();
if(inst_24521){
var statearr_24542_24557 = state_24533__$1;
(statearr_24542_24557[(1)] = (8));

} else {
var statearr_24543_24558 = state_24533__$1;
(statearr_24543_24558[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (3))){
var inst_24531 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24533__$1,inst_24531);
} else {
if((state_val_24534 === (2))){
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24533__$1,(4),ch);
} else {
if((state_val_24534 === (9))){
var inst_24520 = (state_24533[(9)]);
var inst_24513 = inst_24520;
var state_24533__$1 = (function (){var statearr_24544 = state_24533;
(statearr_24544[(7)] = inst_24513);

return statearr_24544;
})();
var statearr_24545_24559 = state_24533__$1;
(statearr_24545_24559[(2)] = null);

(statearr_24545_24559[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (5))){
var inst_24513 = (state_24533[(7)]);
var state_24533__$1 = state_24533;
var statearr_24546_24560 = state_24533__$1;
(statearr_24546_24560[(2)] = inst_24513);

(statearr_24546_24560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (10))){
var inst_24527 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24547_24561 = state_24533__$1;
(statearr_24547_24561[(2)] = inst_24527);

(statearr_24547_24561[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24534 === (8))){
var inst_24520 = (state_24533[(9)]);
var inst_24523 = cljs.core.deref(inst_24520);
var state_24533__$1 = state_24533;
var statearr_24548_24562 = state_24533__$1;
(statearr_24548_24562[(2)] = inst_24523);

(statearr_24548_24562[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21973__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21973__auto____0 = (function (){
var statearr_24549 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24549[(0)] = cljs$core$async$reduce_$_state_machine__21973__auto__);

(statearr_24549[(1)] = (1));

return statearr_24549;
});
var cljs$core$async$reduce_$_state_machine__21973__auto____1 = (function (state_24533){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24533);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24550){if((e24550 instanceof Object)){
var ex__21976__auto__ = e24550;
var statearr_24551_24563 = state_24533;
(statearr_24551_24563[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24533);

return cljs.core.cst$kw$recur;
} else {
throw e24550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24564 = state_24533;
state_24533 = G__24564;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21973__auto__ = function(state_24533){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21973__auto____1.call(this,state_24533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21973__auto____0;
cljs$core$async$reduce_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21973__auto____1;
return cljs$core$async$reduce_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24552 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24552[(6)] = c__22163__auto__);

return statearr_24552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

return c__22163__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__22163__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24570){
var state_val_24571 = (state_24570[(1)]);
if((state_val_24571 === (1))){
var inst_24565 = cljs.core.async.reduce(f__$1,init,ch);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24570__$1,(2),inst_24565);
} else {
if((state_val_24571 === (2))){
var inst_24567 = (state_24570[(2)]);
var inst_24568 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24567) : f__$1.call(null,inst_24567));
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24570__$1,inst_24568);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21973__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21973__auto____0 = (function (){
var statearr_24572 = [null,null,null,null,null,null,null];
(statearr_24572[(0)] = cljs$core$async$transduce_$_state_machine__21973__auto__);

(statearr_24572[(1)] = (1));

return statearr_24572;
});
var cljs$core$async$transduce_$_state_machine__21973__auto____1 = (function (state_24570){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24570);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24573){if((e24573 instanceof Object)){
var ex__21976__auto__ = e24573;
var statearr_24574_24576 = state_24570;
(statearr_24574_24576[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24570);

return cljs.core.cst$kw$recur;
} else {
throw e24573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24577 = state_24570;
state_24570 = G__24577;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21973__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21973__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21973__auto____0;
cljs$core$async$transduce_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21973__auto____1;
return cljs$core$async$transduce_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24575 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24575[(6)] = c__22163__auto__);

return statearr_24575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

return c__22163__auto__;
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
var G__24579 = arguments.length;
switch (G__24579) {
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
var c__22163__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24586 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24606_24627 = state_24604__$1;
(statearr_24606_24627[(2)] = inst_24586);

(statearr_24606_24627[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (1))){
var inst_24580 = cljs.core.seq(coll);
var inst_24581 = inst_24580;
var state_24604__$1 = (function (){var statearr_24607 = state_24604;
(statearr_24607[(7)] = inst_24581);

return statearr_24607;
})();
var statearr_24608_24628 = state_24604__$1;
(statearr_24608_24628[(2)] = null);

(statearr_24608_24628[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (4))){
var inst_24581 = (state_24604[(7)]);
var inst_24584 = cljs.core.first(inst_24581);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24604__$1,(7),ch,inst_24584);
} else {
if((state_val_24605 === (13))){
var inst_24598 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24609_24629 = state_24604__$1;
(statearr_24609_24629[(2)] = inst_24598);

(statearr_24609_24629[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (6))){
var inst_24589 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24589)){
var statearr_24610_24630 = state_24604__$1;
(statearr_24610_24630[(1)] = (8));

} else {
var statearr_24611_24631 = state_24604__$1;
(statearr_24611_24631[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (3))){
var inst_24602 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (12))){
var state_24604__$1 = state_24604;
var statearr_24612_24632 = state_24604__$1;
(statearr_24612_24632[(2)] = null);

(statearr_24612_24632[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (2))){
var inst_24581 = (state_24604[(7)]);
var state_24604__$1 = state_24604;
if(cljs.core.truth_(inst_24581)){
var statearr_24613_24633 = state_24604__$1;
(statearr_24613_24633[(1)] = (4));

} else {
var statearr_24614_24634 = state_24604__$1;
(statearr_24614_24634[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (11))){
var inst_24595 = cljs.core.async.close_BANG_(ch);
var state_24604__$1 = state_24604;
var statearr_24615_24635 = state_24604__$1;
(statearr_24615_24635[(2)] = inst_24595);

(statearr_24615_24635[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (9))){
var state_24604__$1 = state_24604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24616_24636 = state_24604__$1;
(statearr_24616_24636[(1)] = (11));

} else {
var statearr_24617_24637 = state_24604__$1;
(statearr_24617_24637[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (5))){
var inst_24581 = (state_24604[(7)]);
var state_24604__$1 = state_24604;
var statearr_24618_24638 = state_24604__$1;
(statearr_24618_24638[(2)] = inst_24581);

(statearr_24618_24638[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (10))){
var inst_24600 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24619_24639 = state_24604__$1;
(statearr_24619_24639[(2)] = inst_24600);

(statearr_24619_24639[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24605 === (8))){
var inst_24581 = (state_24604[(7)]);
var inst_24591 = cljs.core.next(inst_24581);
var inst_24581__$1 = inst_24591;
var state_24604__$1 = (function (){var statearr_24620 = state_24604;
(statearr_24620[(7)] = inst_24581__$1);

return statearr_24620;
})();
var statearr_24621_24640 = state_24604__$1;
(statearr_24621_24640[(2)] = null);

(statearr_24621_24640[(1)] = (2));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_24622 = [null,null,null,null,null,null,null,null];
(statearr_24622[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_24622[(1)] = (1));

return statearr_24622;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_24604){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24604);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object)){
var ex__21976__auto__ = e24623;
var statearr_24624_24641 = state_24604;
(statearr_24624_24641[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24604);

return cljs.core.cst$kw$recur;
} else {
throw e24623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24642 = state_24604;
state_24604 = G__24642;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24625 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24625[(6)] = c__22163__auto__);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

return c__22163__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_24643 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_24643(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_24644 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_24644(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_24645 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_24645(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_24646 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_24646(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24647 = (function (ch,cs,meta24648){
this.ch = ch;
this.cs = cs;
this.meta24648 = meta24648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24649,meta24648__$1){
var self__ = this;
var _24649__$1 = this;
return (new cljs.core.async.t_cljs$core$async24647(self__.ch,self__.cs,meta24648__$1));
}));

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24649){
var self__ = this;
var _24649__$1 = this;
return self__.meta24648;
}));

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta24648], null);
}));

(cljs.core.async.t_cljs$core$async24647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24647");

(cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24647.
 */
cljs.core.async.__GT_t_cljs$core$async24647 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24647(ch__$1,cs__$1,meta24648){
return (new cljs.core.async.t_cljs$core$async24647(ch__$1,cs__$1,meta24648));
});

}

return (new cljs.core.async.t_cljs$core$async24647(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22163__auto___24869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_24784){
var state_val_24785 = (state_24784[(1)]);
if((state_val_24785 === (7))){
var inst_24780 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24786_24870 = state_24784__$1;
(statearr_24786_24870[(2)] = inst_24780);

(statearr_24786_24870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (20))){
var inst_24683 = (state_24784[(7)]);
var inst_24695 = cljs.core.first(inst_24683);
var inst_24696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24695,(0),null);
var inst_24697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24695,(1),null);
var state_24784__$1 = (function (){var statearr_24787 = state_24784;
(statearr_24787[(8)] = inst_24696);

return statearr_24787;
})();
if(cljs.core.truth_(inst_24697)){
var statearr_24788_24871 = state_24784__$1;
(statearr_24788_24871[(1)] = (22));

} else {
var statearr_24789_24872 = state_24784__$1;
(statearr_24789_24872[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (27))){
var inst_24732 = (state_24784[(9)]);
var inst_24725 = (state_24784[(10)]);
var inst_24727 = (state_24784[(11)]);
var inst_24652 = (state_24784[(12)]);
var inst_24732__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24725,inst_24727);
var inst_24733 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24732__$1,inst_24652,done);
var state_24784__$1 = (function (){var statearr_24790 = state_24784;
(statearr_24790[(9)] = inst_24732__$1);

return statearr_24790;
})();
if(cljs.core.truth_(inst_24733)){
var statearr_24791_24873 = state_24784__$1;
(statearr_24791_24873[(1)] = (30));

} else {
var statearr_24792_24874 = state_24784__$1;
(statearr_24792_24874[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (1))){
var state_24784__$1 = state_24784;
var statearr_24793_24875 = state_24784__$1;
(statearr_24793_24875[(2)] = null);

(statearr_24793_24875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (24))){
var inst_24683 = (state_24784[(7)]);
var inst_24702 = (state_24784[(2)]);
var inst_24703 = cljs.core.next(inst_24683);
var inst_24661 = inst_24703;
var inst_24662 = null;
var inst_24663 = (0);
var inst_24664 = (0);
var state_24784__$1 = (function (){var statearr_24794 = state_24784;
(statearr_24794[(13)] = inst_24663);

(statearr_24794[(14)] = inst_24702);

(statearr_24794[(15)] = inst_24664);

(statearr_24794[(16)] = inst_24662);

(statearr_24794[(17)] = inst_24661);

return statearr_24794;
})();
var statearr_24795_24876 = state_24784__$1;
(statearr_24795_24876[(2)] = null);

(statearr_24795_24876[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (39))){
var state_24784__$1 = state_24784;
var statearr_24799_24877 = state_24784__$1;
(statearr_24799_24877[(2)] = null);

(statearr_24799_24877[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (4))){
var inst_24652 = (state_24784[(12)]);
var inst_24652__$1 = (state_24784[(2)]);
var inst_24653 = (inst_24652__$1 == null);
var state_24784__$1 = (function (){var statearr_24800 = state_24784;
(statearr_24800[(12)] = inst_24652__$1);

return statearr_24800;
})();
if(cljs.core.truth_(inst_24653)){
var statearr_24801_24878 = state_24784__$1;
(statearr_24801_24878[(1)] = (5));

} else {
var statearr_24802_24879 = state_24784__$1;
(statearr_24802_24879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (15))){
var inst_24663 = (state_24784[(13)]);
var inst_24664 = (state_24784[(15)]);
var inst_24662 = (state_24784[(16)]);
var inst_24661 = (state_24784[(17)]);
var inst_24679 = (state_24784[(2)]);
var inst_24680 = (inst_24664 + (1));
var tmp24796 = inst_24663;
var tmp24797 = inst_24662;
var tmp24798 = inst_24661;
var inst_24661__$1 = tmp24798;
var inst_24662__$1 = tmp24797;
var inst_24663__$1 = tmp24796;
var inst_24664__$1 = inst_24680;
var state_24784__$1 = (function (){var statearr_24803 = state_24784;
(statearr_24803[(13)] = inst_24663__$1);

(statearr_24803[(15)] = inst_24664__$1);

(statearr_24803[(18)] = inst_24679);

(statearr_24803[(16)] = inst_24662__$1);

(statearr_24803[(17)] = inst_24661__$1);

return statearr_24803;
})();
var statearr_24804_24880 = state_24784__$1;
(statearr_24804_24880[(2)] = null);

(statearr_24804_24880[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (21))){
var inst_24706 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24808_24881 = state_24784__$1;
(statearr_24808_24881[(2)] = inst_24706);

(statearr_24808_24881[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (31))){
var inst_24732 = (state_24784[(9)]);
var inst_24736 = done(null);
var inst_24737 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24732);
var state_24784__$1 = (function (){var statearr_24809 = state_24784;
(statearr_24809[(19)] = inst_24736);

return statearr_24809;
})();
var statearr_24810_24882 = state_24784__$1;
(statearr_24810_24882[(2)] = inst_24737);

(statearr_24810_24882[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (32))){
var inst_24724 = (state_24784[(20)]);
var inst_24726 = (state_24784[(21)]);
var inst_24725 = (state_24784[(10)]);
var inst_24727 = (state_24784[(11)]);
var inst_24739 = (state_24784[(2)]);
var inst_24740 = (inst_24727 + (1));
var tmp24805 = inst_24724;
var tmp24806 = inst_24726;
var tmp24807 = inst_24725;
var inst_24724__$1 = tmp24805;
var inst_24725__$1 = tmp24807;
var inst_24726__$1 = tmp24806;
var inst_24727__$1 = inst_24740;
var state_24784__$1 = (function (){var statearr_24811 = state_24784;
(statearr_24811[(20)] = inst_24724__$1);

(statearr_24811[(21)] = inst_24726__$1);

(statearr_24811[(22)] = inst_24739);

(statearr_24811[(10)] = inst_24725__$1);

(statearr_24811[(11)] = inst_24727__$1);

return statearr_24811;
})();
var statearr_24812_24883 = state_24784__$1;
(statearr_24812_24883[(2)] = null);

(statearr_24812_24883[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (40))){
var inst_24752 = (state_24784[(23)]);
var inst_24756 = done(null);
var inst_24757 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24752);
var state_24784__$1 = (function (){var statearr_24813 = state_24784;
(statearr_24813[(24)] = inst_24756);

return statearr_24813;
})();
var statearr_24814_24884 = state_24784__$1;
(statearr_24814_24884[(2)] = inst_24757);

(statearr_24814_24884[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (33))){
var inst_24743 = (state_24784[(25)]);
var inst_24745 = cljs.core.chunked_seq_QMARK_(inst_24743);
var state_24784__$1 = state_24784;
if(inst_24745){
var statearr_24815_24885 = state_24784__$1;
(statearr_24815_24885[(1)] = (36));

} else {
var statearr_24816_24886 = state_24784__$1;
(statearr_24816_24886[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (13))){
var inst_24673 = (state_24784[(26)]);
var inst_24676 = cljs.core.async.close_BANG_(inst_24673);
var state_24784__$1 = state_24784;
var statearr_24817_24887 = state_24784__$1;
(statearr_24817_24887[(2)] = inst_24676);

(statearr_24817_24887[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (22))){
var inst_24696 = (state_24784[(8)]);
var inst_24699 = cljs.core.async.close_BANG_(inst_24696);
var state_24784__$1 = state_24784;
var statearr_24818_24888 = state_24784__$1;
(statearr_24818_24888[(2)] = inst_24699);

(statearr_24818_24888[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (36))){
var inst_24743 = (state_24784[(25)]);
var inst_24747 = cljs.core.chunk_first(inst_24743);
var inst_24748 = cljs.core.chunk_rest(inst_24743);
var inst_24749 = cljs.core.count(inst_24747);
var inst_24724 = inst_24748;
var inst_24725 = inst_24747;
var inst_24726 = inst_24749;
var inst_24727 = (0);
var state_24784__$1 = (function (){var statearr_24819 = state_24784;
(statearr_24819[(20)] = inst_24724);

(statearr_24819[(21)] = inst_24726);

(statearr_24819[(10)] = inst_24725);

(statearr_24819[(11)] = inst_24727);

return statearr_24819;
})();
var statearr_24820_24889 = state_24784__$1;
(statearr_24820_24889[(2)] = null);

(statearr_24820_24889[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (41))){
var inst_24743 = (state_24784[(25)]);
var inst_24759 = (state_24784[(2)]);
var inst_24760 = cljs.core.next(inst_24743);
var inst_24724 = inst_24760;
var inst_24725 = null;
var inst_24726 = (0);
var inst_24727 = (0);
var state_24784__$1 = (function (){var statearr_24821 = state_24784;
(statearr_24821[(20)] = inst_24724);

(statearr_24821[(27)] = inst_24759);

(statearr_24821[(21)] = inst_24726);

(statearr_24821[(10)] = inst_24725);

(statearr_24821[(11)] = inst_24727);

return statearr_24821;
})();
var statearr_24822_24890 = state_24784__$1;
(statearr_24822_24890[(2)] = null);

(statearr_24822_24890[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (43))){
var state_24784__$1 = state_24784;
var statearr_24823_24891 = state_24784__$1;
(statearr_24823_24891[(2)] = null);

(statearr_24823_24891[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (29))){
var inst_24768 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24824_24892 = state_24784__$1;
(statearr_24824_24892[(2)] = inst_24768);

(statearr_24824_24892[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (44))){
var inst_24777 = (state_24784[(2)]);
var state_24784__$1 = (function (){var statearr_24825 = state_24784;
(statearr_24825[(28)] = inst_24777);

return statearr_24825;
})();
var statearr_24826_24893 = state_24784__$1;
(statearr_24826_24893[(2)] = null);

(statearr_24826_24893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (6))){
var inst_24716 = (state_24784[(29)]);
var inst_24715 = cljs.core.deref(cs);
var inst_24716__$1 = cljs.core.keys(inst_24715);
var inst_24717 = cljs.core.count(inst_24716__$1);
var inst_24718 = cljs.core.reset_BANG_(dctr,inst_24717);
var inst_24723 = cljs.core.seq(inst_24716__$1);
var inst_24724 = inst_24723;
var inst_24725 = null;
var inst_24726 = (0);
var inst_24727 = (0);
var state_24784__$1 = (function (){var statearr_24827 = state_24784;
(statearr_24827[(20)] = inst_24724);

(statearr_24827[(29)] = inst_24716__$1);

(statearr_24827[(30)] = inst_24718);

(statearr_24827[(21)] = inst_24726);

(statearr_24827[(10)] = inst_24725);

(statearr_24827[(11)] = inst_24727);

return statearr_24827;
})();
var statearr_24828_24894 = state_24784__$1;
(statearr_24828_24894[(2)] = null);

(statearr_24828_24894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (28))){
var inst_24724 = (state_24784[(20)]);
var inst_24743 = (state_24784[(25)]);
var inst_24743__$1 = cljs.core.seq(inst_24724);
var state_24784__$1 = (function (){var statearr_24829 = state_24784;
(statearr_24829[(25)] = inst_24743__$1);

return statearr_24829;
})();
if(inst_24743__$1){
var statearr_24830_24895 = state_24784__$1;
(statearr_24830_24895[(1)] = (33));

} else {
var statearr_24831_24896 = state_24784__$1;
(statearr_24831_24896[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (25))){
var inst_24726 = (state_24784[(21)]);
var inst_24727 = (state_24784[(11)]);
var inst_24729 = (inst_24727 < inst_24726);
var inst_24730 = inst_24729;
var state_24784__$1 = state_24784;
if(cljs.core.truth_(inst_24730)){
var statearr_24832_24897 = state_24784__$1;
(statearr_24832_24897[(1)] = (27));

} else {
var statearr_24833_24898 = state_24784__$1;
(statearr_24833_24898[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (34))){
var state_24784__$1 = state_24784;
var statearr_24834_24899 = state_24784__$1;
(statearr_24834_24899[(2)] = null);

(statearr_24834_24899[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (17))){
var state_24784__$1 = state_24784;
var statearr_24835_24900 = state_24784__$1;
(statearr_24835_24900[(2)] = null);

(statearr_24835_24900[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (3))){
var inst_24782 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24784__$1,inst_24782);
} else {
if((state_val_24785 === (12))){
var inst_24711 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24836_24901 = state_24784__$1;
(statearr_24836_24901[(2)] = inst_24711);

(statearr_24836_24901[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (2))){
var state_24784__$1 = state_24784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24784__$1,(4),ch);
} else {
if((state_val_24785 === (23))){
var state_24784__$1 = state_24784;
var statearr_24837_24902 = state_24784__$1;
(statearr_24837_24902[(2)] = null);

(statearr_24837_24902[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (35))){
var inst_24766 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24838_24903 = state_24784__$1;
(statearr_24838_24903[(2)] = inst_24766);

(statearr_24838_24903[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (19))){
var inst_24683 = (state_24784[(7)]);
var inst_24687 = cljs.core.chunk_first(inst_24683);
var inst_24688 = cljs.core.chunk_rest(inst_24683);
var inst_24689 = cljs.core.count(inst_24687);
var inst_24661 = inst_24688;
var inst_24662 = inst_24687;
var inst_24663 = inst_24689;
var inst_24664 = (0);
var state_24784__$1 = (function (){var statearr_24839 = state_24784;
(statearr_24839[(13)] = inst_24663);

(statearr_24839[(15)] = inst_24664);

(statearr_24839[(16)] = inst_24662);

(statearr_24839[(17)] = inst_24661);

return statearr_24839;
})();
var statearr_24840_24904 = state_24784__$1;
(statearr_24840_24904[(2)] = null);

(statearr_24840_24904[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (11))){
var inst_24683 = (state_24784[(7)]);
var inst_24661 = (state_24784[(17)]);
var inst_24683__$1 = cljs.core.seq(inst_24661);
var state_24784__$1 = (function (){var statearr_24841 = state_24784;
(statearr_24841[(7)] = inst_24683__$1);

return statearr_24841;
})();
if(inst_24683__$1){
var statearr_24842_24905 = state_24784__$1;
(statearr_24842_24905[(1)] = (16));

} else {
var statearr_24843_24906 = state_24784__$1;
(statearr_24843_24906[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (9))){
var inst_24713 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24844_24907 = state_24784__$1;
(statearr_24844_24907[(2)] = inst_24713);

(statearr_24844_24907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (5))){
var inst_24659 = cljs.core.deref(cs);
var inst_24660 = cljs.core.seq(inst_24659);
var inst_24661 = inst_24660;
var inst_24662 = null;
var inst_24663 = (0);
var inst_24664 = (0);
var state_24784__$1 = (function (){var statearr_24845 = state_24784;
(statearr_24845[(13)] = inst_24663);

(statearr_24845[(15)] = inst_24664);

(statearr_24845[(16)] = inst_24662);

(statearr_24845[(17)] = inst_24661);

return statearr_24845;
})();
var statearr_24846_24908 = state_24784__$1;
(statearr_24846_24908[(2)] = null);

(statearr_24846_24908[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (14))){
var state_24784__$1 = state_24784;
var statearr_24847_24909 = state_24784__$1;
(statearr_24847_24909[(2)] = null);

(statearr_24847_24909[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (45))){
var inst_24774 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24848_24910 = state_24784__$1;
(statearr_24848_24910[(2)] = inst_24774);

(statearr_24848_24910[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (26))){
var inst_24716 = (state_24784[(29)]);
var inst_24770 = (state_24784[(2)]);
var inst_24771 = cljs.core.seq(inst_24716);
var state_24784__$1 = (function (){var statearr_24849 = state_24784;
(statearr_24849[(31)] = inst_24770);

return statearr_24849;
})();
if(inst_24771){
var statearr_24850_24911 = state_24784__$1;
(statearr_24850_24911[(1)] = (42));

} else {
var statearr_24851_24912 = state_24784__$1;
(statearr_24851_24912[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (16))){
var inst_24683 = (state_24784[(7)]);
var inst_24685 = cljs.core.chunked_seq_QMARK_(inst_24683);
var state_24784__$1 = state_24784;
if(inst_24685){
var statearr_24852_24913 = state_24784__$1;
(statearr_24852_24913[(1)] = (19));

} else {
var statearr_24853_24914 = state_24784__$1;
(statearr_24853_24914[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (38))){
var inst_24763 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24854_24915 = state_24784__$1;
(statearr_24854_24915[(2)] = inst_24763);

(statearr_24854_24915[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (30))){
var state_24784__$1 = state_24784;
var statearr_24855_24916 = state_24784__$1;
(statearr_24855_24916[(2)] = null);

(statearr_24855_24916[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (10))){
var inst_24664 = (state_24784[(15)]);
var inst_24662 = (state_24784[(16)]);
var inst_24672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24662,inst_24664);
var inst_24673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24672,(0),null);
var inst_24674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24672,(1),null);
var state_24784__$1 = (function (){var statearr_24856 = state_24784;
(statearr_24856[(26)] = inst_24673);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24674)){
var statearr_24857_24917 = state_24784__$1;
(statearr_24857_24917[(1)] = (13));

} else {
var statearr_24858_24918 = state_24784__$1;
(statearr_24858_24918[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (18))){
var inst_24709 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24859_24919 = state_24784__$1;
(statearr_24859_24919[(2)] = inst_24709);

(statearr_24859_24919[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (42))){
var state_24784__$1 = state_24784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24784__$1,(45),dchan);
} else {
if((state_val_24785 === (37))){
var inst_24743 = (state_24784[(25)]);
var inst_24752 = (state_24784[(23)]);
var inst_24652 = (state_24784[(12)]);
var inst_24752__$1 = cljs.core.first(inst_24743);
var inst_24753 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24752__$1,inst_24652,done);
var state_24784__$1 = (function (){var statearr_24860 = state_24784;
(statearr_24860[(23)] = inst_24752__$1);

return statearr_24860;
})();
if(cljs.core.truth_(inst_24753)){
var statearr_24861_24920 = state_24784__$1;
(statearr_24861_24920[(1)] = (39));

} else {
var statearr_24862_24921 = state_24784__$1;
(statearr_24862_24921[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24785 === (8))){
var inst_24663 = (state_24784[(13)]);
var inst_24664 = (state_24784[(15)]);
var inst_24666 = (inst_24664 < inst_24663);
var inst_24667 = inst_24666;
var state_24784__$1 = state_24784;
if(cljs.core.truth_(inst_24667)){
var statearr_24863_24922 = state_24784__$1;
(statearr_24863_24922[(1)] = (10));

} else {
var statearr_24864_24923 = state_24784__$1;
(statearr_24864_24923[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21973__auto__ = null;
var cljs$core$async$mult_$_state_machine__21973__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = cljs$core$async$mult_$_state_machine__21973__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var cljs$core$async$mult_$_state_machine__21973__auto____1 = (function (state_24784){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_24784);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__21976__auto__ = e24866;
var statearr_24867_24924 = state_24784;
(statearr_24867_24924[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24784);

return cljs.core.cst$kw$recur;
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__24925 = state_24784;
state_24784 = G__24925;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21973__auto__ = function(state_24784){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21973__auto____1.call(this,state_24784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21973__auto____0;
cljs$core$async$mult_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21973__auto____1;
return cljs$core$async$mult_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_24868 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_24868[(6)] = c__22163__auto___24869);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var G__24927 = arguments.length;
switch (G__24927) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_24929 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_24929(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_24930 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_24930(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_24931 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_24931(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_24932 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_24932(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_24933 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_24933(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24944 = arguments.length;
var i__4737__auto___24945 = (0);
while(true){
if((i__4737__auto___24945 < len__4736__auto___24944)){
args__4742__auto__.push((arguments[i__4737__auto___24945]));

var G__24946 = (i__4737__auto___24945 + (1));
i__4737__auto___24945 = G__24946;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24938){
var map__24939 = p__24938;
var map__24939__$1 = (((((!((map__24939 == null))))?(((((map__24939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24939):map__24939);
var opts = map__24939__$1;
var statearr_24941_24947 = state;
(statearr_24941_24947[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_24942_24948 = state;
(statearr_24942_24948[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_24943_24949 = state;
(statearr_24943_24949[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24934){
var G__24935 = cljs.core.first(seq24934);
var seq24934__$1 = cljs.core.next(seq24934);
var G__24936 = cljs.core.first(seq24934__$1);
var seq24934__$2 = cljs.core.next(seq24934__$1);
var G__24937 = cljs.core.first(seq24934__$2);
var seq24934__$3 = cljs.core.next(seq24934__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24935,G__24936,G__24937,seq24934__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24950 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24951){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24951 = meta24951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24952,meta24951__$1){
var self__ = this;
var _24952__$1 = this;
return (new cljs.core.async.t_cljs$core$async24950(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24951__$1));
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24952){
var self__ = this;
var _24952__$1 = this;
return self__.meta24951;
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24950.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta24951], null);
}));

(cljs.core.async.t_cljs$core$async24950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24950");

(cljs.core.async.t_cljs$core$async24950.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async24950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24950.
 */
cljs.core.async.__GT_t_cljs$core$async24950 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24950(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24951){
return (new cljs.core.async.t_cljs$core$async24950(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24951));
});

}

return (new cljs.core.async.t_cljs$core$async24950(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22163__auto___25114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25054){
var state_val_25055 = (state_25054[(1)]);
if((state_val_25055 === (7))){
var inst_24969 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25056_25115 = state_25054__$1;
(statearr_25056_25115[(2)] = inst_24969);

(statearr_25056_25115[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (20))){
var inst_24981 = (state_25054[(7)]);
var state_25054__$1 = state_25054;
var statearr_25057_25116 = state_25054__$1;
(statearr_25057_25116[(2)] = inst_24981);

(statearr_25057_25116[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (27))){
var state_25054__$1 = state_25054;
var statearr_25058_25117 = state_25054__$1;
(statearr_25058_25117[(2)] = null);

(statearr_25058_25117[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (1))){
var inst_24956 = (state_25054[(8)]);
var inst_24956__$1 = calc_state();
var inst_24958 = (inst_24956__$1 == null);
var inst_24959 = cljs.core.not(inst_24958);
var state_25054__$1 = (function (){var statearr_25059 = state_25054;
(statearr_25059[(8)] = inst_24956__$1);

return statearr_25059;
})();
if(inst_24959){
var statearr_25060_25118 = state_25054__$1;
(statearr_25060_25118[(1)] = (2));

} else {
var statearr_25061_25119 = state_25054__$1;
(statearr_25061_25119[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (24))){
var inst_25028 = (state_25054[(9)]);
var inst_25014 = (state_25054[(10)]);
var inst_25005 = (state_25054[(11)]);
var inst_25028__$1 = (inst_25005.cljs$core$IFn$_invoke$arity$1 ? inst_25005.cljs$core$IFn$_invoke$arity$1(inst_25014) : inst_25005.call(null,inst_25014));
var state_25054__$1 = (function (){var statearr_25062 = state_25054;
(statearr_25062[(9)] = inst_25028__$1);

return statearr_25062;
})();
if(cljs.core.truth_(inst_25028__$1)){
var statearr_25063_25120 = state_25054__$1;
(statearr_25063_25120[(1)] = (29));

} else {
var statearr_25064_25121 = state_25054__$1;
(statearr_25064_25121[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (4))){
var inst_24972 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_24972)){
var statearr_25065_25122 = state_25054__$1;
(statearr_25065_25122[(1)] = (8));

} else {
var statearr_25066_25123 = state_25054__$1;
(statearr_25066_25123[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (15))){
var inst_24999 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_24999)){
var statearr_25067_25124 = state_25054__$1;
(statearr_25067_25124[(1)] = (19));

} else {
var statearr_25068_25125 = state_25054__$1;
(statearr_25068_25125[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (21))){
var inst_25004 = (state_25054[(12)]);
var inst_25004__$1 = (state_25054[(2)]);
var inst_25005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25004__$1,cljs.core.cst$kw$solos);
var inst_25006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25004__$1,cljs.core.cst$kw$mutes);
var inst_25007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25004__$1,cljs.core.cst$kw$reads);
var state_25054__$1 = (function (){var statearr_25069 = state_25054;
(statearr_25069[(13)] = inst_25006);

(statearr_25069[(12)] = inst_25004__$1);

(statearr_25069[(11)] = inst_25005);

return statearr_25069;
})();
return cljs.core.async.ioc_alts_BANG_(state_25054__$1,(22),inst_25007);
} else {
if((state_val_25055 === (31))){
var inst_25036 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25036)){
var statearr_25070_25126 = state_25054__$1;
(statearr_25070_25126[(1)] = (32));

} else {
var statearr_25071_25127 = state_25054__$1;
(statearr_25071_25127[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (32))){
var inst_25013 = (state_25054[(14)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25054__$1,(35),out,inst_25013);
} else {
if((state_val_25055 === (33))){
var inst_25004 = (state_25054[(12)]);
var inst_24981 = inst_25004;
var state_25054__$1 = (function (){var statearr_25072 = state_25054;
(statearr_25072[(7)] = inst_24981);

return statearr_25072;
})();
var statearr_25073_25128 = state_25054__$1;
(statearr_25073_25128[(2)] = null);

(statearr_25073_25128[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (13))){
var inst_24981 = (state_25054[(7)]);
var inst_24988 = inst_24981.cljs$lang$protocol_mask$partition0$;
var inst_24989 = (inst_24988 & (64));
var inst_24990 = inst_24981.cljs$core$ISeq$;
var inst_24991 = (cljs.core.PROTOCOL_SENTINEL === inst_24990);
var inst_24992 = ((inst_24989) || (inst_24991));
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_24992)){
var statearr_25074_25129 = state_25054__$1;
(statearr_25074_25129[(1)] = (16));

} else {
var statearr_25075_25130 = state_25054__$1;
(statearr_25075_25130[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (22))){
var inst_25013 = (state_25054[(14)]);
var inst_25014 = (state_25054[(10)]);
var inst_25012 = (state_25054[(2)]);
var inst_25013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25012,(0),null);
var inst_25014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25012,(1),null);
var inst_25015 = (inst_25013__$1 == null);
var inst_25016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25014__$1,change);
var inst_25017 = ((inst_25015) || (inst_25016));
var state_25054__$1 = (function (){var statearr_25076 = state_25054;
(statearr_25076[(14)] = inst_25013__$1);

(statearr_25076[(10)] = inst_25014__$1);

return statearr_25076;
})();
if(cljs.core.truth_(inst_25017)){
var statearr_25077_25131 = state_25054__$1;
(statearr_25077_25131[(1)] = (23));

} else {
var statearr_25078_25132 = state_25054__$1;
(statearr_25078_25132[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (36))){
var inst_25004 = (state_25054[(12)]);
var inst_24981 = inst_25004;
var state_25054__$1 = (function (){var statearr_25079 = state_25054;
(statearr_25079[(7)] = inst_24981);

return statearr_25079;
})();
var statearr_25080_25133 = state_25054__$1;
(statearr_25080_25133[(2)] = null);

(statearr_25080_25133[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (29))){
var inst_25028 = (state_25054[(9)]);
var state_25054__$1 = state_25054;
var statearr_25081_25134 = state_25054__$1;
(statearr_25081_25134[(2)] = inst_25028);

(statearr_25081_25134[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (6))){
var state_25054__$1 = state_25054;
var statearr_25082_25135 = state_25054__$1;
(statearr_25082_25135[(2)] = false);

(statearr_25082_25135[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (28))){
var inst_25024 = (state_25054[(2)]);
var inst_25025 = calc_state();
var inst_24981 = inst_25025;
var state_25054__$1 = (function (){var statearr_25083 = state_25054;
(statearr_25083[(7)] = inst_24981);

(statearr_25083[(15)] = inst_25024);

return statearr_25083;
})();
var statearr_25084_25136 = state_25054__$1;
(statearr_25084_25136[(2)] = null);

(statearr_25084_25136[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (25))){
var inst_25050 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25085_25137 = state_25054__$1;
(statearr_25085_25137[(2)] = inst_25050);

(statearr_25085_25137[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (34))){
var inst_25048 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25086_25138 = state_25054__$1;
(statearr_25086_25138[(2)] = inst_25048);

(statearr_25086_25138[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (17))){
var state_25054__$1 = state_25054;
var statearr_25087_25139 = state_25054__$1;
(statearr_25087_25139[(2)] = false);

(statearr_25087_25139[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (3))){
var state_25054__$1 = state_25054;
var statearr_25088_25140 = state_25054__$1;
(statearr_25088_25140[(2)] = false);

(statearr_25088_25140[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (12))){
var inst_25052 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25054__$1,inst_25052);
} else {
if((state_val_25055 === (2))){
var inst_24956 = (state_25054[(8)]);
var inst_24961 = inst_24956.cljs$lang$protocol_mask$partition0$;
var inst_24962 = (inst_24961 & (64));
var inst_24963 = inst_24956.cljs$core$ISeq$;
var inst_24964 = (cljs.core.PROTOCOL_SENTINEL === inst_24963);
var inst_24965 = ((inst_24962) || (inst_24964));
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_24965)){
var statearr_25089_25141 = state_25054__$1;
(statearr_25089_25141[(1)] = (5));

} else {
var statearr_25090_25142 = state_25054__$1;
(statearr_25090_25142[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (23))){
var inst_25013 = (state_25054[(14)]);
var inst_25019 = (inst_25013 == null);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25019)){
var statearr_25091_25143 = state_25054__$1;
(statearr_25091_25143[(1)] = (26));

} else {
var statearr_25092_25144 = state_25054__$1;
(statearr_25092_25144[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (35))){
var inst_25039 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25039)){
var statearr_25093_25145 = state_25054__$1;
(statearr_25093_25145[(1)] = (36));

} else {
var statearr_25094_25146 = state_25054__$1;
(statearr_25094_25146[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (19))){
var inst_24981 = (state_25054[(7)]);
var inst_25001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24981);
var state_25054__$1 = state_25054;
var statearr_25095_25147 = state_25054__$1;
(statearr_25095_25147[(2)] = inst_25001);

(statearr_25095_25147[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (11))){
var inst_24981 = (state_25054[(7)]);
var inst_24985 = (inst_24981 == null);
var inst_24986 = cljs.core.not(inst_24985);
var state_25054__$1 = state_25054;
if(inst_24986){
var statearr_25096_25148 = state_25054__$1;
(statearr_25096_25148[(1)] = (13));

} else {
var statearr_25097_25149 = state_25054__$1;
(statearr_25097_25149[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (9))){
var inst_24956 = (state_25054[(8)]);
var state_25054__$1 = state_25054;
var statearr_25098_25150 = state_25054__$1;
(statearr_25098_25150[(2)] = inst_24956);

(statearr_25098_25150[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (5))){
var state_25054__$1 = state_25054;
var statearr_25099_25151 = state_25054__$1;
(statearr_25099_25151[(2)] = true);

(statearr_25099_25151[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (14))){
var state_25054__$1 = state_25054;
var statearr_25100_25152 = state_25054__$1;
(statearr_25100_25152[(2)] = false);

(statearr_25100_25152[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (26))){
var inst_25014 = (state_25054[(10)]);
var inst_25021 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25014);
var state_25054__$1 = state_25054;
var statearr_25101_25153 = state_25054__$1;
(statearr_25101_25153[(2)] = inst_25021);

(statearr_25101_25153[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (16))){
var state_25054__$1 = state_25054;
var statearr_25102_25154 = state_25054__$1;
(statearr_25102_25154[(2)] = true);

(statearr_25102_25154[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (38))){
var inst_25044 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25103_25155 = state_25054__$1;
(statearr_25103_25155[(2)] = inst_25044);

(statearr_25103_25155[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (30))){
var inst_25006 = (state_25054[(13)]);
var inst_25014 = (state_25054[(10)]);
var inst_25005 = (state_25054[(11)]);
var inst_25031 = cljs.core.empty_QMARK_(inst_25005);
var inst_25032 = (inst_25006.cljs$core$IFn$_invoke$arity$1 ? inst_25006.cljs$core$IFn$_invoke$arity$1(inst_25014) : inst_25006.call(null,inst_25014));
var inst_25033 = cljs.core.not(inst_25032);
var inst_25034 = ((inst_25031) && (inst_25033));
var state_25054__$1 = state_25054;
var statearr_25104_25156 = state_25054__$1;
(statearr_25104_25156[(2)] = inst_25034);

(statearr_25104_25156[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (10))){
var inst_24956 = (state_25054[(8)]);
var inst_24977 = (state_25054[(2)]);
var inst_24978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24977,cljs.core.cst$kw$solos);
var inst_24979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24977,cljs.core.cst$kw$mutes);
var inst_24980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24977,cljs.core.cst$kw$reads);
var inst_24981 = inst_24956;
var state_25054__$1 = (function (){var statearr_25105 = state_25054;
(statearr_25105[(16)] = inst_24979);

(statearr_25105[(7)] = inst_24981);

(statearr_25105[(17)] = inst_24980);

(statearr_25105[(18)] = inst_24978);

return statearr_25105;
})();
var statearr_25106_25157 = state_25054__$1;
(statearr_25106_25157[(2)] = null);

(statearr_25106_25157[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (18))){
var inst_24996 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25107_25158 = state_25054__$1;
(statearr_25107_25158[(2)] = inst_24996);

(statearr_25107_25158[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (37))){
var state_25054__$1 = state_25054;
var statearr_25108_25159 = state_25054__$1;
(statearr_25108_25159[(2)] = null);

(statearr_25108_25159[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (8))){
var inst_24956 = (state_25054[(8)]);
var inst_24974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24956);
var state_25054__$1 = state_25054;
var statearr_25109_25160 = state_25054__$1;
(statearr_25109_25160[(2)] = inst_24974);

(statearr_25109_25160[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__21973__auto__ = null;
var cljs$core$async$mix_$_state_machine__21973__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = cljs$core$async$mix_$_state_machine__21973__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var cljs$core$async$mix_$_state_machine__21973__auto____1 = (function (state_25054){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25054);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__21976__auto__ = e25111;
var statearr_25112_25161 = state_25054;
(statearr_25112_25161[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25054);

return cljs.core.cst$kw$recur;
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25162 = state_25054;
state_25054 = G__25162;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21973__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21973__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21973__auto____0;
cljs$core$async$mix_$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21973__auto____1;
return cljs$core$async$mix_$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25113 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25113[(6)] = c__22163__auto___25114);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_25165 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_25165(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25166 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_25166(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25167 = (function() {
var G__25168 = null;
var G__25168__1 = (function (p){
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
var G__25168__2 = (function (p,v){
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
G__25168 = function(p,v){
switch(arguments.length){
case 1:
return G__25168__1.call(this,p);
case 2:
return G__25168__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25168.cljs$core$IFn$_invoke$arity$1 = G__25168__1;
G__25168.cljs$core$IFn$_invoke$arity$2 = G__25168__2;
return G__25168;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25164 = arguments.length;
switch (G__25164) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25167.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25167.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__25172 = arguments.length;
switch (G__25172) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__25170_SHARP_){
if(cljs.core.truth_((p1__25170_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25170_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25170_SHARP_.call(null,topic)))){
return p1__25170_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25170_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25173 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25174){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25174 = meta25174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25175,meta25174__$1){
var self__ = this;
var _25175__$1 = this;
return (new cljs.core.async.t_cljs$core$async25173(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25174__$1));
}));

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25175){
var self__ = this;
var _25175__$1 = this;
return self__.meta25174;
}));

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25173.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta25174], null);
}));

(cljs.core.async.t_cljs$core$async25173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25173");

(cljs.core.async.t_cljs$core$async25173.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25173.
 */
cljs.core.async.__GT_t_cljs$core$async25173 = (function cljs$core$async$__GT_t_cljs$core$async25173(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25174){
return (new cljs.core.async.t_cljs$core$async25173(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25174));
});

}

return (new cljs.core.async.t_cljs$core$async25173(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22163__auto___25293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25247){
var state_val_25248 = (state_25247[(1)]);
if((state_val_25248 === (7))){
var inst_25243 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25249_25294 = state_25247__$1;
(statearr_25249_25294[(2)] = inst_25243);

(statearr_25249_25294[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (20))){
var state_25247__$1 = state_25247;
var statearr_25250_25295 = state_25247__$1;
(statearr_25250_25295[(2)] = null);

(statearr_25250_25295[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (1))){
var state_25247__$1 = state_25247;
var statearr_25251_25296 = state_25247__$1;
(statearr_25251_25296[(2)] = null);

(statearr_25251_25296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (24))){
var inst_25226 = (state_25247[(7)]);
var inst_25235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25226);
var state_25247__$1 = state_25247;
var statearr_25252_25297 = state_25247__$1;
(statearr_25252_25297[(2)] = inst_25235);

(statearr_25252_25297[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (4))){
var inst_25178 = (state_25247[(8)]);
var inst_25178__$1 = (state_25247[(2)]);
var inst_25179 = (inst_25178__$1 == null);
var state_25247__$1 = (function (){var statearr_25253 = state_25247;
(statearr_25253[(8)] = inst_25178__$1);

return statearr_25253;
})();
if(cljs.core.truth_(inst_25179)){
var statearr_25254_25298 = state_25247__$1;
(statearr_25254_25298[(1)] = (5));

} else {
var statearr_25255_25299 = state_25247__$1;
(statearr_25255_25299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (15))){
var inst_25220 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25256_25300 = state_25247__$1;
(statearr_25256_25300[(2)] = inst_25220);

(statearr_25256_25300[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (21))){
var inst_25240 = (state_25247[(2)]);
var state_25247__$1 = (function (){var statearr_25257 = state_25247;
(statearr_25257[(9)] = inst_25240);

return statearr_25257;
})();
var statearr_25258_25301 = state_25247__$1;
(statearr_25258_25301[(2)] = null);

(statearr_25258_25301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (13))){
var inst_25202 = (state_25247[(10)]);
var inst_25204 = cljs.core.chunked_seq_QMARK_(inst_25202);
var state_25247__$1 = state_25247;
if(inst_25204){
var statearr_25259_25302 = state_25247__$1;
(statearr_25259_25302[(1)] = (16));

} else {
var statearr_25260_25303 = state_25247__$1;
(statearr_25260_25303[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (22))){
var inst_25232 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
if(cljs.core.truth_(inst_25232)){
var statearr_25261_25304 = state_25247__$1;
(statearr_25261_25304[(1)] = (23));

} else {
var statearr_25262_25305 = state_25247__$1;
(statearr_25262_25305[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (6))){
var inst_25228 = (state_25247[(11)]);
var inst_25178 = (state_25247[(8)]);
var inst_25226 = (state_25247[(7)]);
var inst_25226__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25178) : topic_fn.call(null,inst_25178));
var inst_25227 = cljs.core.deref(mults);
var inst_25228__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25227,inst_25226__$1);
var state_25247__$1 = (function (){var statearr_25263 = state_25247;
(statearr_25263[(11)] = inst_25228__$1);

(statearr_25263[(7)] = inst_25226__$1);

return statearr_25263;
})();
if(cljs.core.truth_(inst_25228__$1)){
var statearr_25264_25306 = state_25247__$1;
(statearr_25264_25306[(1)] = (19));

} else {
var statearr_25265_25307 = state_25247__$1;
(statearr_25265_25307[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (25))){
var inst_25237 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25266_25308 = state_25247__$1;
(statearr_25266_25308[(2)] = inst_25237);

(statearr_25266_25308[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (17))){
var inst_25202 = (state_25247[(10)]);
var inst_25211 = cljs.core.first(inst_25202);
var inst_25212 = cljs.core.async.muxch_STAR_(inst_25211);
var inst_25213 = cljs.core.async.close_BANG_(inst_25212);
var inst_25214 = cljs.core.next(inst_25202);
var inst_25188 = inst_25214;
var inst_25189 = null;
var inst_25190 = (0);
var inst_25191 = (0);
var state_25247__$1 = (function (){var statearr_25267 = state_25247;
(statearr_25267[(12)] = inst_25190);

(statearr_25267[(13)] = inst_25189);

(statearr_25267[(14)] = inst_25188);

(statearr_25267[(15)] = inst_25191);

(statearr_25267[(16)] = inst_25213);

return statearr_25267;
})();
var statearr_25268_25309 = state_25247__$1;
(statearr_25268_25309[(2)] = null);

(statearr_25268_25309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (3))){
var inst_25245 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25247__$1,inst_25245);
} else {
if((state_val_25248 === (12))){
var inst_25222 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25269_25310 = state_25247__$1;
(statearr_25269_25310[(2)] = inst_25222);

(statearr_25269_25310[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (2))){
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25247__$1,(4),ch);
} else {
if((state_val_25248 === (23))){
var state_25247__$1 = state_25247;
var statearr_25270_25311 = state_25247__$1;
(statearr_25270_25311[(2)] = null);

(statearr_25270_25311[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (19))){
var inst_25228 = (state_25247[(11)]);
var inst_25178 = (state_25247[(8)]);
var inst_25230 = cljs.core.async.muxch_STAR_(inst_25228);
var state_25247__$1 = state_25247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25247__$1,(22),inst_25230,inst_25178);
} else {
if((state_val_25248 === (11))){
var inst_25188 = (state_25247[(14)]);
var inst_25202 = (state_25247[(10)]);
var inst_25202__$1 = cljs.core.seq(inst_25188);
var state_25247__$1 = (function (){var statearr_25271 = state_25247;
(statearr_25271[(10)] = inst_25202__$1);

return statearr_25271;
})();
if(inst_25202__$1){
var statearr_25272_25312 = state_25247__$1;
(statearr_25272_25312[(1)] = (13));

} else {
var statearr_25273_25313 = state_25247__$1;
(statearr_25273_25313[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (9))){
var inst_25224 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25274_25314 = state_25247__$1;
(statearr_25274_25314[(2)] = inst_25224);

(statearr_25274_25314[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (5))){
var inst_25185 = cljs.core.deref(mults);
var inst_25186 = cljs.core.vals(inst_25185);
var inst_25187 = cljs.core.seq(inst_25186);
var inst_25188 = inst_25187;
var inst_25189 = null;
var inst_25190 = (0);
var inst_25191 = (0);
var state_25247__$1 = (function (){var statearr_25275 = state_25247;
(statearr_25275[(12)] = inst_25190);

(statearr_25275[(13)] = inst_25189);

(statearr_25275[(14)] = inst_25188);

(statearr_25275[(15)] = inst_25191);

return statearr_25275;
})();
var statearr_25276_25315 = state_25247__$1;
(statearr_25276_25315[(2)] = null);

(statearr_25276_25315[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (14))){
var state_25247__$1 = state_25247;
var statearr_25280_25316 = state_25247__$1;
(statearr_25280_25316[(2)] = null);

(statearr_25280_25316[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (16))){
var inst_25202 = (state_25247[(10)]);
var inst_25206 = cljs.core.chunk_first(inst_25202);
var inst_25207 = cljs.core.chunk_rest(inst_25202);
var inst_25208 = cljs.core.count(inst_25206);
var inst_25188 = inst_25207;
var inst_25189 = inst_25206;
var inst_25190 = inst_25208;
var inst_25191 = (0);
var state_25247__$1 = (function (){var statearr_25281 = state_25247;
(statearr_25281[(12)] = inst_25190);

(statearr_25281[(13)] = inst_25189);

(statearr_25281[(14)] = inst_25188);

(statearr_25281[(15)] = inst_25191);

return statearr_25281;
})();
var statearr_25282_25317 = state_25247__$1;
(statearr_25282_25317[(2)] = null);

(statearr_25282_25317[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (10))){
var inst_25190 = (state_25247[(12)]);
var inst_25189 = (state_25247[(13)]);
var inst_25188 = (state_25247[(14)]);
var inst_25191 = (state_25247[(15)]);
var inst_25196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25189,inst_25191);
var inst_25197 = cljs.core.async.muxch_STAR_(inst_25196);
var inst_25198 = cljs.core.async.close_BANG_(inst_25197);
var inst_25199 = (inst_25191 + (1));
var tmp25277 = inst_25190;
var tmp25278 = inst_25189;
var tmp25279 = inst_25188;
var inst_25188__$1 = tmp25279;
var inst_25189__$1 = tmp25278;
var inst_25190__$1 = tmp25277;
var inst_25191__$1 = inst_25199;
var state_25247__$1 = (function (){var statearr_25283 = state_25247;
(statearr_25283[(12)] = inst_25190__$1);

(statearr_25283[(13)] = inst_25189__$1);

(statearr_25283[(14)] = inst_25188__$1);

(statearr_25283[(15)] = inst_25191__$1);

(statearr_25283[(17)] = inst_25198);

return statearr_25283;
})();
var statearr_25284_25318 = state_25247__$1;
(statearr_25284_25318[(2)] = null);

(statearr_25284_25318[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (18))){
var inst_25217 = (state_25247[(2)]);
var state_25247__$1 = state_25247;
var statearr_25285_25319 = state_25247__$1;
(statearr_25285_25319[(2)] = inst_25217);

(statearr_25285_25319[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25248 === (8))){
var inst_25190 = (state_25247[(12)]);
var inst_25191 = (state_25247[(15)]);
var inst_25193 = (inst_25191 < inst_25190);
var inst_25194 = inst_25193;
var state_25247__$1 = state_25247;
if(cljs.core.truth_(inst_25194)){
var statearr_25286_25320 = state_25247__$1;
(statearr_25286_25320[(1)] = (10));

} else {
var statearr_25287_25321 = state_25247__$1;
(statearr_25287_25321[(1)] = (11));

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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25288[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25288[(1)] = (1));

return statearr_25288;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25247){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25247);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25289){if((e25289 instanceof Object)){
var ex__21976__auto__ = e25289;
var statearr_25290_25322 = state_25247;
(statearr_25290_25322[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25247);

return cljs.core.cst$kw$recur;
} else {
throw e25289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25323 = state_25247;
state_25247 = G__25323;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25291 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25291[(6)] = c__22163__auto___25293);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var G__25325 = arguments.length;
switch (G__25325) {
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
var G__25328 = arguments.length;
switch (G__25328) {
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
var G__25331 = arguments.length;
switch (G__25331) {
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
var c__22163__auto___25398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25370){
var state_val_25371 = (state_25370[(1)]);
if((state_val_25371 === (7))){
var state_25370__$1 = state_25370;
var statearr_25372_25399 = state_25370__$1;
(statearr_25372_25399[(2)] = null);

(statearr_25372_25399[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (1))){
var state_25370__$1 = state_25370;
var statearr_25373_25400 = state_25370__$1;
(statearr_25373_25400[(2)] = null);

(statearr_25373_25400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (4))){
var inst_25334 = (state_25370[(7)]);
var inst_25336 = (inst_25334 < cnt);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25336)){
var statearr_25374_25401 = state_25370__$1;
(statearr_25374_25401[(1)] = (6));

} else {
var statearr_25375_25402 = state_25370__$1;
(statearr_25375_25402[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (15))){
var inst_25366 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25376_25403 = state_25370__$1;
(statearr_25376_25403[(2)] = inst_25366);

(statearr_25376_25403[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (13))){
var inst_25359 = cljs.core.async.close_BANG_(out);
var state_25370__$1 = state_25370;
var statearr_25377_25404 = state_25370__$1;
(statearr_25377_25404[(2)] = inst_25359);

(statearr_25377_25404[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (6))){
var state_25370__$1 = state_25370;
var statearr_25378_25405 = state_25370__$1;
(statearr_25378_25405[(2)] = null);

(statearr_25378_25405[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (3))){
var inst_25368 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25370__$1,inst_25368);
} else {
if((state_val_25371 === (12))){
var inst_25356 = (state_25370[(8)]);
var inst_25356__$1 = (state_25370[(2)]);
var inst_25357 = cljs.core.some(cljs.core.nil_QMARK_,inst_25356__$1);
var state_25370__$1 = (function (){var statearr_25379 = state_25370;
(statearr_25379[(8)] = inst_25356__$1);

return statearr_25379;
})();
if(cljs.core.truth_(inst_25357)){
var statearr_25380_25406 = state_25370__$1;
(statearr_25380_25406[(1)] = (13));

} else {
var statearr_25381_25407 = state_25370__$1;
(statearr_25381_25407[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (2))){
var inst_25333 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25334 = (0);
var state_25370__$1 = (function (){var statearr_25382 = state_25370;
(statearr_25382[(9)] = inst_25333);

(statearr_25382[(7)] = inst_25334);

return statearr_25382;
})();
var statearr_25383_25408 = state_25370__$1;
(statearr_25383_25408[(2)] = null);

(statearr_25383_25408[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (11))){
var inst_25334 = (state_25370[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25370,(10),Object,null,(9));
var inst_25343 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25334) : chs__$1.call(null,inst_25334));
var inst_25344 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25334) : done.call(null,inst_25334));
var inst_25345 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25343,inst_25344);
var state_25370__$1 = state_25370;
var statearr_25384_25409 = state_25370__$1;
(statearr_25384_25409[(2)] = inst_25345);


cljs.core.async.impl.ioc_helpers.process_exception(state_25370__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (9))){
var inst_25334 = (state_25370[(7)]);
var inst_25347 = (state_25370[(2)]);
var inst_25348 = (inst_25334 + (1));
var inst_25334__$1 = inst_25348;
var state_25370__$1 = (function (){var statearr_25385 = state_25370;
(statearr_25385[(7)] = inst_25334__$1);

(statearr_25385[(10)] = inst_25347);

return statearr_25385;
})();
var statearr_25386_25410 = state_25370__$1;
(statearr_25386_25410[(2)] = null);

(statearr_25386_25410[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (5))){
var inst_25354 = (state_25370[(2)]);
var state_25370__$1 = (function (){var statearr_25387 = state_25370;
(statearr_25387[(11)] = inst_25354);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25370__$1,(12),dchan);
} else {
if((state_val_25371 === (14))){
var inst_25356 = (state_25370[(8)]);
var inst_25361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25356);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25370__$1,(16),out,inst_25361);
} else {
if((state_val_25371 === (16))){
var inst_25363 = (state_25370[(2)]);
var state_25370__$1 = (function (){var statearr_25388 = state_25370;
(statearr_25388[(12)] = inst_25363);

return statearr_25388;
})();
var statearr_25389_25411 = state_25370__$1;
(statearr_25389_25411[(2)] = null);

(statearr_25389_25411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (10))){
var inst_25338 = (state_25370[(2)]);
var inst_25339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25370__$1 = (function (){var statearr_25390 = state_25370;
(statearr_25390[(13)] = inst_25338);

return statearr_25390;
})();
var statearr_25391_25412 = state_25370__$1;
(statearr_25391_25412[(2)] = inst_25339);


cljs.core.async.impl.ioc_helpers.process_exception(state_25370__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25371 === (8))){
var inst_25352 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25392_25413 = state_25370__$1;
(statearr_25392_25413[(2)] = inst_25352);

(statearr_25392_25413[(1)] = (5));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25393[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25393[(1)] = (1));

return statearr_25393;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25370){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25370);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25394){if((e25394 instanceof Object)){
var ex__21976__auto__ = e25394;
var statearr_25395_25414 = state_25370;
(statearr_25395_25414[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25370);

return cljs.core.cst$kw$recur;
} else {
throw e25394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25415 = state_25370;
state_25370 = G__25415;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25396 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25396[(6)] = c__22163__auto___25398);

return statearr_25396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var G__25418 = arguments.length;
switch (G__25418) {
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
var c__22163__auto___25472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25450){
var state_val_25451 = (state_25450[(1)]);
if((state_val_25451 === (7))){
var inst_25430 = (state_25450[(7)]);
var inst_25429 = (state_25450[(8)]);
var inst_25429__$1 = (state_25450[(2)]);
var inst_25430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25429__$1,(0),null);
var inst_25431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25429__$1,(1),null);
var inst_25432 = (inst_25430__$1 == null);
var state_25450__$1 = (function (){var statearr_25452 = state_25450;
(statearr_25452[(9)] = inst_25431);

(statearr_25452[(7)] = inst_25430__$1);

(statearr_25452[(8)] = inst_25429__$1);

return statearr_25452;
})();
if(cljs.core.truth_(inst_25432)){
var statearr_25453_25473 = state_25450__$1;
(statearr_25453_25473[(1)] = (8));

} else {
var statearr_25454_25474 = state_25450__$1;
(statearr_25454_25474[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (1))){
var inst_25419 = cljs.core.vec(chs);
var inst_25420 = inst_25419;
var state_25450__$1 = (function (){var statearr_25455 = state_25450;
(statearr_25455[(10)] = inst_25420);

return statearr_25455;
})();
var statearr_25456_25475 = state_25450__$1;
(statearr_25456_25475[(2)] = null);

(statearr_25456_25475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (4))){
var inst_25420 = (state_25450[(10)]);
var state_25450__$1 = state_25450;
return cljs.core.async.ioc_alts_BANG_(state_25450__$1,(7),inst_25420);
} else {
if((state_val_25451 === (6))){
var inst_25446 = (state_25450[(2)]);
var state_25450__$1 = state_25450;
var statearr_25457_25476 = state_25450__$1;
(statearr_25457_25476[(2)] = inst_25446);

(statearr_25457_25476[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (3))){
var inst_25448 = (state_25450[(2)]);
var state_25450__$1 = state_25450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25450__$1,inst_25448);
} else {
if((state_val_25451 === (2))){
var inst_25420 = (state_25450[(10)]);
var inst_25422 = cljs.core.count(inst_25420);
var inst_25423 = (inst_25422 > (0));
var state_25450__$1 = state_25450;
if(cljs.core.truth_(inst_25423)){
var statearr_25459_25477 = state_25450__$1;
(statearr_25459_25477[(1)] = (4));

} else {
var statearr_25460_25478 = state_25450__$1;
(statearr_25460_25478[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (11))){
var inst_25420 = (state_25450[(10)]);
var inst_25439 = (state_25450[(2)]);
var tmp25458 = inst_25420;
var inst_25420__$1 = tmp25458;
var state_25450__$1 = (function (){var statearr_25461 = state_25450;
(statearr_25461[(10)] = inst_25420__$1);

(statearr_25461[(11)] = inst_25439);

return statearr_25461;
})();
var statearr_25462_25479 = state_25450__$1;
(statearr_25462_25479[(2)] = null);

(statearr_25462_25479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (9))){
var inst_25430 = (state_25450[(7)]);
var state_25450__$1 = state_25450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25450__$1,(11),out,inst_25430);
} else {
if((state_val_25451 === (5))){
var inst_25444 = cljs.core.async.close_BANG_(out);
var state_25450__$1 = state_25450;
var statearr_25463_25480 = state_25450__$1;
(statearr_25463_25480[(2)] = inst_25444);

(statearr_25463_25480[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (10))){
var inst_25442 = (state_25450[(2)]);
var state_25450__$1 = state_25450;
var statearr_25464_25481 = state_25450__$1;
(statearr_25464_25481[(2)] = inst_25442);

(statearr_25464_25481[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25451 === (8))){
var inst_25431 = (state_25450[(9)]);
var inst_25420 = (state_25450[(10)]);
var inst_25430 = (state_25450[(7)]);
var inst_25429 = (state_25450[(8)]);
var inst_25434 = (function (){var cs = inst_25420;
var vec__25425 = inst_25429;
var v = inst_25430;
var c = inst_25431;
return (function (p1__25416_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25416_SHARP_);
});
})();
var inst_25435 = cljs.core.filterv(inst_25434,inst_25420);
var inst_25420__$1 = inst_25435;
var state_25450__$1 = (function (){var statearr_25465 = state_25450;
(statearr_25465[(10)] = inst_25420__$1);

return statearr_25465;
})();
var statearr_25466_25482 = state_25450__$1;
(statearr_25466_25482[(2)] = null);

(statearr_25466_25482[(1)] = (2));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25467[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25467[(1)] = (1));

return statearr_25467;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25450){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25450);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25468){if((e25468 instanceof Object)){
var ex__21976__auto__ = e25468;
var statearr_25469_25483 = state_25450;
(statearr_25469_25483[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25450);

return cljs.core.cst$kw$recur;
} else {
throw e25468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25484 = state_25450;
state_25450 = G__25484;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25470 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25470[(6)] = c__22163__auto___25472);

return statearr_25470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
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
var G__25486 = arguments.length;
switch (G__25486) {
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
var c__22163__auto___25531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25510){
var state_val_25511 = (state_25510[(1)]);
if((state_val_25511 === (7))){
var inst_25492 = (state_25510[(7)]);
var inst_25492__$1 = (state_25510[(2)]);
var inst_25493 = (inst_25492__$1 == null);
var inst_25494 = cljs.core.not(inst_25493);
var state_25510__$1 = (function (){var statearr_25512 = state_25510;
(statearr_25512[(7)] = inst_25492__$1);

return statearr_25512;
})();
if(inst_25494){
var statearr_25513_25532 = state_25510__$1;
(statearr_25513_25532[(1)] = (8));

} else {
var statearr_25514_25533 = state_25510__$1;
(statearr_25514_25533[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (1))){
var inst_25487 = (0);
var state_25510__$1 = (function (){var statearr_25515 = state_25510;
(statearr_25515[(8)] = inst_25487);

return statearr_25515;
})();
var statearr_25516_25534 = state_25510__$1;
(statearr_25516_25534[(2)] = null);

(statearr_25516_25534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (4))){
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25510__$1,(7),ch);
} else {
if((state_val_25511 === (6))){
var inst_25505 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25517_25535 = state_25510__$1;
(statearr_25517_25535[(2)] = inst_25505);

(statearr_25517_25535[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (3))){
var inst_25507 = (state_25510[(2)]);
var inst_25508 = cljs.core.async.close_BANG_(out);
var state_25510__$1 = (function (){var statearr_25518 = state_25510;
(statearr_25518[(9)] = inst_25507);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25510__$1,inst_25508);
} else {
if((state_val_25511 === (2))){
var inst_25487 = (state_25510[(8)]);
var inst_25489 = (inst_25487 < n);
var state_25510__$1 = state_25510;
if(cljs.core.truth_(inst_25489)){
var statearr_25519_25536 = state_25510__$1;
(statearr_25519_25536[(1)] = (4));

} else {
var statearr_25520_25537 = state_25510__$1;
(statearr_25520_25537[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (11))){
var inst_25487 = (state_25510[(8)]);
var inst_25497 = (state_25510[(2)]);
var inst_25498 = (inst_25487 + (1));
var inst_25487__$1 = inst_25498;
var state_25510__$1 = (function (){var statearr_25521 = state_25510;
(statearr_25521[(10)] = inst_25497);

(statearr_25521[(8)] = inst_25487__$1);

return statearr_25521;
})();
var statearr_25522_25538 = state_25510__$1;
(statearr_25522_25538[(2)] = null);

(statearr_25522_25538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (9))){
var state_25510__$1 = state_25510;
var statearr_25523_25539 = state_25510__$1;
(statearr_25523_25539[(2)] = null);

(statearr_25523_25539[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (5))){
var state_25510__$1 = state_25510;
var statearr_25524_25540 = state_25510__$1;
(statearr_25524_25540[(2)] = null);

(statearr_25524_25540[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (10))){
var inst_25502 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25525_25541 = state_25510__$1;
(statearr_25525_25541[(2)] = inst_25502);

(statearr_25525_25541[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25511 === (8))){
var inst_25492 = (state_25510[(7)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25510__$1,(11),out,inst_25492);
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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25526[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25526[(1)] = (1));

return statearr_25526;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25510){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25510);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25527){if((e25527 instanceof Object)){
var ex__21976__auto__ = e25527;
var statearr_25528_25542 = state_25510;
(statearr_25528_25542[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25510);

return cljs.core.cst$kw$recur;
} else {
throw e25527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25543 = state_25510;
state_25510 = G__25543;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25529 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25529[(6)] = c__22163__auto___25531);

return statearr_25529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25545 = (function (f,ch,meta25546){
this.f = f;
this.ch = ch;
this.meta25546 = meta25546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25547,meta25546__$1){
var self__ = this;
var _25547__$1 = this;
return (new cljs.core.async.t_cljs$core$async25545(self__.f,self__.ch,meta25546__$1));
}));

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25547){
var self__ = this;
var _25547__$1 = this;
return self__.meta25546;
}));

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25548 = (function (f,ch,meta25546,_,fn1,meta25549){
this.f = f;
this.ch = ch;
this.meta25546 = meta25546;
this._ = _;
this.fn1 = fn1;
this.meta25549 = meta25549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25550,meta25549__$1){
var self__ = this;
var _25550__$1 = this;
return (new cljs.core.async.t_cljs$core$async25548(self__.f,self__.ch,self__.meta25546,self__._,self__.fn1,meta25549__$1));
}));

(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25550){
var self__ = this;
var _25550__$1 = this;
return self__.meta25549;
}));

(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__25544_SHARP_){
var G__25551 = (((p1__25544_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25544_SHARP_) : self__.f.call(null,p1__25544_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25551) : f1.call(null,G__25551));
});
}));

(cljs.core.async.t_cljs$core$async25548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25546,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25545], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25549], null);
}));

(cljs.core.async.t_cljs$core$async25548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25548");

(cljs.core.async.t_cljs$core$async25548.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25548.
 */
cljs.core.async.__GT_t_cljs$core$async25548 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25548(f__$1,ch__$1,meta25546__$1,___$2,fn1__$1,meta25549){
return (new cljs.core.async.t_cljs$core$async25548(f__$1,ch__$1,meta25546__$1,___$2,fn1__$1,meta25549));
});

}

return (new cljs.core.async.t_cljs$core$async25548(self__.f,self__.ch,self__.meta25546,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25552 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25552) : self__.f.call(null,G__25552));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25546], null);
}));

(cljs.core.async.t_cljs$core$async25545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25545");

(cljs.core.async.t_cljs$core$async25545.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25545.
 */
cljs.core.async.__GT_t_cljs$core$async25545 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25545(f__$1,ch__$1,meta25546){
return (new cljs.core.async.t_cljs$core$async25545(f__$1,ch__$1,meta25546));
});

}

return (new cljs.core.async.t_cljs$core$async25545(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25553 = (function (f,ch,meta25554){
this.f = f;
this.ch = ch;
this.meta25554 = meta25554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25555,meta25554__$1){
var self__ = this;
var _25555__$1 = this;
return (new cljs.core.async.t_cljs$core$async25553(self__.f,self__.ch,meta25554__$1));
}));

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25555){
var self__ = this;
var _25555__$1 = this;
return self__.meta25554;
}));

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async25553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25554], null);
}));

(cljs.core.async.t_cljs$core$async25553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25553");

(cljs.core.async.t_cljs$core$async25553.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25553.
 */
cljs.core.async.__GT_t_cljs$core$async25553 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25553(f__$1,ch__$1,meta25554){
return (new cljs.core.async.t_cljs$core$async25553(f__$1,ch__$1,meta25554));
});

}

return (new cljs.core.async.t_cljs$core$async25553(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async25556 = (function (p,ch,meta25557){
this.p = p;
this.ch = ch;
this.meta25557 = meta25557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25558,meta25557__$1){
var self__ = this;
var _25558__$1 = this;
return (new cljs.core.async.t_cljs$core$async25556(self__.p,self__.ch,meta25557__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25557], null);
}));

(cljs.core.async.t_cljs$core$async25556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25556");

(cljs.core.async.t_cljs$core$async25556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async25556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25556.
 */
cljs.core.async.__GT_t_cljs$core$async25556 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25556(p__$1,ch__$1,meta25557){
return (new cljs.core.async.t_cljs$core$async25556(p__$1,ch__$1,meta25557));
});

}

return (new cljs.core.async.t_cljs$core$async25556(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25560 = arguments.length;
switch (G__25560) {
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
var c__22163__auto___25600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25581){
var state_val_25582 = (state_25581[(1)]);
if((state_val_25582 === (7))){
var inst_25577 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25583_25601 = state_25581__$1;
(statearr_25583_25601[(2)] = inst_25577);

(statearr_25583_25601[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (1))){
var state_25581__$1 = state_25581;
var statearr_25584_25602 = state_25581__$1;
(statearr_25584_25602[(2)] = null);

(statearr_25584_25602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (4))){
var inst_25563 = (state_25581[(7)]);
var inst_25563__$1 = (state_25581[(2)]);
var inst_25564 = (inst_25563__$1 == null);
var state_25581__$1 = (function (){var statearr_25585 = state_25581;
(statearr_25585[(7)] = inst_25563__$1);

return statearr_25585;
})();
if(cljs.core.truth_(inst_25564)){
var statearr_25586_25603 = state_25581__$1;
(statearr_25586_25603[(1)] = (5));

} else {
var statearr_25587_25604 = state_25581__$1;
(statearr_25587_25604[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (6))){
var inst_25563 = (state_25581[(7)]);
var inst_25568 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25563) : p.call(null,inst_25563));
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25568)){
var statearr_25588_25605 = state_25581__$1;
(statearr_25588_25605[(1)] = (8));

} else {
var statearr_25589_25606 = state_25581__$1;
(statearr_25589_25606[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (3))){
var inst_25579 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25581__$1,inst_25579);
} else {
if((state_val_25582 === (2))){
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25581__$1,(4),ch);
} else {
if((state_val_25582 === (11))){
var inst_25571 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25590_25607 = state_25581__$1;
(statearr_25590_25607[(2)] = inst_25571);

(statearr_25590_25607[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (9))){
var state_25581__$1 = state_25581;
var statearr_25591_25608 = state_25581__$1;
(statearr_25591_25608[(2)] = null);

(statearr_25591_25608[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (5))){
var inst_25566 = cljs.core.async.close_BANG_(out);
var state_25581__$1 = state_25581;
var statearr_25592_25609 = state_25581__$1;
(statearr_25592_25609[(2)] = inst_25566);

(statearr_25592_25609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (10))){
var inst_25574 = (state_25581[(2)]);
var state_25581__$1 = (function (){var statearr_25593 = state_25581;
(statearr_25593[(8)] = inst_25574);

return statearr_25593;
})();
var statearr_25594_25610 = state_25581__$1;
(statearr_25594_25610[(2)] = null);

(statearr_25594_25610[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25582 === (8))){
var inst_25563 = (state_25581[(7)]);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25581__$1,(11),out,inst_25563);
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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25595 = [null,null,null,null,null,null,null,null,null];
(statearr_25595[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25595[(1)] = (1));

return statearr_25595;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25581){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25581);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object)){
var ex__21976__auto__ = e25596;
var statearr_25597_25611 = state_25581;
(statearr_25597_25611[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25581);

return cljs.core.cst$kw$recur;
} else {
throw e25596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25612 = state_25581;
state_25581 = G__25612;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25598 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25598[(6)] = c__22163__auto___25600);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25614 = arguments.length;
switch (G__25614) {
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
var c__22163__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25677){
var state_val_25678 = (state_25677[(1)]);
if((state_val_25678 === (7))){
var inst_25673 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25679_25717 = state_25677__$1;
(statearr_25679_25717[(2)] = inst_25673);

(statearr_25679_25717[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (20))){
var inst_25643 = (state_25677[(7)]);
var inst_25654 = (state_25677[(2)]);
var inst_25655 = cljs.core.next(inst_25643);
var inst_25629 = inst_25655;
var inst_25630 = null;
var inst_25631 = (0);
var inst_25632 = (0);
var state_25677__$1 = (function (){var statearr_25680 = state_25677;
(statearr_25680[(8)] = inst_25631);

(statearr_25680[(9)] = inst_25629);

(statearr_25680[(10)] = inst_25632);

(statearr_25680[(11)] = inst_25630);

(statearr_25680[(12)] = inst_25654);

return statearr_25680;
})();
var statearr_25681_25718 = state_25677__$1;
(statearr_25681_25718[(2)] = null);

(statearr_25681_25718[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (1))){
var state_25677__$1 = state_25677;
var statearr_25682_25719 = state_25677__$1;
(statearr_25682_25719[(2)] = null);

(statearr_25682_25719[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (4))){
var inst_25618 = (state_25677[(13)]);
var inst_25618__$1 = (state_25677[(2)]);
var inst_25619 = (inst_25618__$1 == null);
var state_25677__$1 = (function (){var statearr_25683 = state_25677;
(statearr_25683[(13)] = inst_25618__$1);

return statearr_25683;
})();
if(cljs.core.truth_(inst_25619)){
var statearr_25684_25720 = state_25677__$1;
(statearr_25684_25720[(1)] = (5));

} else {
var statearr_25685_25721 = state_25677__$1;
(statearr_25685_25721[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (15))){
var state_25677__$1 = state_25677;
var statearr_25689_25722 = state_25677__$1;
(statearr_25689_25722[(2)] = null);

(statearr_25689_25722[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (21))){
var state_25677__$1 = state_25677;
var statearr_25690_25723 = state_25677__$1;
(statearr_25690_25723[(2)] = null);

(statearr_25690_25723[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (13))){
var inst_25631 = (state_25677[(8)]);
var inst_25629 = (state_25677[(9)]);
var inst_25632 = (state_25677[(10)]);
var inst_25630 = (state_25677[(11)]);
var inst_25639 = (state_25677[(2)]);
var inst_25640 = (inst_25632 + (1));
var tmp25686 = inst_25631;
var tmp25687 = inst_25629;
var tmp25688 = inst_25630;
var inst_25629__$1 = tmp25687;
var inst_25630__$1 = tmp25688;
var inst_25631__$1 = tmp25686;
var inst_25632__$1 = inst_25640;
var state_25677__$1 = (function (){var statearr_25691 = state_25677;
(statearr_25691[(8)] = inst_25631__$1);

(statearr_25691[(9)] = inst_25629__$1);

(statearr_25691[(14)] = inst_25639);

(statearr_25691[(10)] = inst_25632__$1);

(statearr_25691[(11)] = inst_25630__$1);

return statearr_25691;
})();
var statearr_25692_25724 = state_25677__$1;
(statearr_25692_25724[(2)] = null);

(statearr_25692_25724[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (22))){
var state_25677__$1 = state_25677;
var statearr_25693_25725 = state_25677__$1;
(statearr_25693_25725[(2)] = null);

(statearr_25693_25725[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (6))){
var inst_25618 = (state_25677[(13)]);
var inst_25627 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25618) : f.call(null,inst_25618));
var inst_25628 = cljs.core.seq(inst_25627);
var inst_25629 = inst_25628;
var inst_25630 = null;
var inst_25631 = (0);
var inst_25632 = (0);
var state_25677__$1 = (function (){var statearr_25694 = state_25677;
(statearr_25694[(8)] = inst_25631);

(statearr_25694[(9)] = inst_25629);

(statearr_25694[(10)] = inst_25632);

(statearr_25694[(11)] = inst_25630);

return statearr_25694;
})();
var statearr_25695_25726 = state_25677__$1;
(statearr_25695_25726[(2)] = null);

(statearr_25695_25726[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (17))){
var inst_25643 = (state_25677[(7)]);
var inst_25647 = cljs.core.chunk_first(inst_25643);
var inst_25648 = cljs.core.chunk_rest(inst_25643);
var inst_25649 = cljs.core.count(inst_25647);
var inst_25629 = inst_25648;
var inst_25630 = inst_25647;
var inst_25631 = inst_25649;
var inst_25632 = (0);
var state_25677__$1 = (function (){var statearr_25696 = state_25677;
(statearr_25696[(8)] = inst_25631);

(statearr_25696[(9)] = inst_25629);

(statearr_25696[(10)] = inst_25632);

(statearr_25696[(11)] = inst_25630);

return statearr_25696;
})();
var statearr_25697_25727 = state_25677__$1;
(statearr_25697_25727[(2)] = null);

(statearr_25697_25727[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (3))){
var inst_25675 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25677__$1,inst_25675);
} else {
if((state_val_25678 === (12))){
var inst_25663 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25698_25728 = state_25677__$1;
(statearr_25698_25728[(2)] = inst_25663);

(statearr_25698_25728[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (2))){
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25677__$1,(4),in$);
} else {
if((state_val_25678 === (23))){
var inst_25671 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25699_25729 = state_25677__$1;
(statearr_25699_25729[(2)] = inst_25671);

(statearr_25699_25729[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (19))){
var inst_25658 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25700_25730 = state_25677__$1;
(statearr_25700_25730[(2)] = inst_25658);

(statearr_25700_25730[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (11))){
var inst_25643 = (state_25677[(7)]);
var inst_25629 = (state_25677[(9)]);
var inst_25643__$1 = cljs.core.seq(inst_25629);
var state_25677__$1 = (function (){var statearr_25701 = state_25677;
(statearr_25701[(7)] = inst_25643__$1);

return statearr_25701;
})();
if(inst_25643__$1){
var statearr_25702_25731 = state_25677__$1;
(statearr_25702_25731[(1)] = (14));

} else {
var statearr_25703_25732 = state_25677__$1;
(statearr_25703_25732[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (9))){
var inst_25665 = (state_25677[(2)]);
var inst_25666 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25677__$1 = (function (){var statearr_25704 = state_25677;
(statearr_25704[(15)] = inst_25665);

return statearr_25704;
})();
if(cljs.core.truth_(inst_25666)){
var statearr_25705_25733 = state_25677__$1;
(statearr_25705_25733[(1)] = (21));

} else {
var statearr_25706_25734 = state_25677__$1;
(statearr_25706_25734[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (5))){
var inst_25621 = cljs.core.async.close_BANG_(out);
var state_25677__$1 = state_25677;
var statearr_25707_25735 = state_25677__$1;
(statearr_25707_25735[(2)] = inst_25621);

(statearr_25707_25735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (14))){
var inst_25643 = (state_25677[(7)]);
var inst_25645 = cljs.core.chunked_seq_QMARK_(inst_25643);
var state_25677__$1 = state_25677;
if(inst_25645){
var statearr_25708_25736 = state_25677__$1;
(statearr_25708_25736[(1)] = (17));

} else {
var statearr_25709_25737 = state_25677__$1;
(statearr_25709_25737[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (16))){
var inst_25661 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25710_25738 = state_25677__$1;
(statearr_25710_25738[(2)] = inst_25661);

(statearr_25710_25738[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25678 === (10))){
var inst_25632 = (state_25677[(10)]);
var inst_25630 = (state_25677[(11)]);
var inst_25637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25630,inst_25632);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25677__$1,(13),out,inst_25637);
} else {
if((state_val_25678 === (18))){
var inst_25643 = (state_25677[(7)]);
var inst_25652 = cljs.core.first(inst_25643);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25677__$1,(20),out,inst_25652);
} else {
if((state_val_25678 === (8))){
var inst_25631 = (state_25677[(8)]);
var inst_25632 = (state_25677[(10)]);
var inst_25634 = (inst_25632 < inst_25631);
var inst_25635 = inst_25634;
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25635)){
var statearr_25711_25739 = state_25677__$1;
(statearr_25711_25739[(1)] = (10));

} else {
var statearr_25712_25740 = state_25677__$1;
(statearr_25712_25740[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____0 = (function (){
var statearr_25713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25713[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__);

(statearr_25713[(1)] = (1));

return statearr_25713;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____1 = (function (state_25677){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25677);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25714){if((e25714 instanceof Object)){
var ex__21976__auto__ = e25714;
var statearr_25715_25741 = state_25677;
(statearr_25715_25741[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25677);

return cljs.core.cst$kw$recur;
} else {
throw e25714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25742 = state_25677;
state_25677 = G__25742;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__ = function(state_25677){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____1.call(this,state_25677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21973__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25716 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25716[(6)] = c__22163__auto__);

return statearr_25716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));

return c__22163__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25744 = arguments.length;
switch (G__25744) {
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
var G__25747 = arguments.length;
switch (G__25747) {
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
var G__25750 = arguments.length;
switch (G__25750) {
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
var c__22163__auto___25797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25774){
var state_val_25775 = (state_25774[(1)]);
if((state_val_25775 === (7))){
var inst_25769 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25776_25798 = state_25774__$1;
(statearr_25776_25798[(2)] = inst_25769);

(statearr_25776_25798[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (1))){
var inst_25751 = null;
var state_25774__$1 = (function (){var statearr_25777 = state_25774;
(statearr_25777[(7)] = inst_25751);

return statearr_25777;
})();
var statearr_25778_25799 = state_25774__$1;
(statearr_25778_25799[(2)] = null);

(statearr_25778_25799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (4))){
var inst_25754 = (state_25774[(8)]);
var inst_25754__$1 = (state_25774[(2)]);
var inst_25755 = (inst_25754__$1 == null);
var inst_25756 = cljs.core.not(inst_25755);
var state_25774__$1 = (function (){var statearr_25779 = state_25774;
(statearr_25779[(8)] = inst_25754__$1);

return statearr_25779;
})();
if(inst_25756){
var statearr_25780_25800 = state_25774__$1;
(statearr_25780_25800[(1)] = (5));

} else {
var statearr_25781_25801 = state_25774__$1;
(statearr_25781_25801[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (6))){
var state_25774__$1 = state_25774;
var statearr_25782_25802 = state_25774__$1;
(statearr_25782_25802[(2)] = null);

(statearr_25782_25802[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (3))){
var inst_25771 = (state_25774[(2)]);
var inst_25772 = cljs.core.async.close_BANG_(out);
var state_25774__$1 = (function (){var statearr_25783 = state_25774;
(statearr_25783[(9)] = inst_25771);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25774__$1,inst_25772);
} else {
if((state_val_25775 === (2))){
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25774__$1,(4),ch);
} else {
if((state_val_25775 === (11))){
var inst_25754 = (state_25774[(8)]);
var inst_25763 = (state_25774[(2)]);
var inst_25751 = inst_25754;
var state_25774__$1 = (function (){var statearr_25784 = state_25774;
(statearr_25784[(7)] = inst_25751);

(statearr_25784[(10)] = inst_25763);

return statearr_25784;
})();
var statearr_25785_25803 = state_25774__$1;
(statearr_25785_25803[(2)] = null);

(statearr_25785_25803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (9))){
var inst_25754 = (state_25774[(8)]);
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25774__$1,(11),out,inst_25754);
} else {
if((state_val_25775 === (5))){
var inst_25754 = (state_25774[(8)]);
var inst_25751 = (state_25774[(7)]);
var inst_25758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25754,inst_25751);
var state_25774__$1 = state_25774;
if(inst_25758){
var statearr_25787_25804 = state_25774__$1;
(statearr_25787_25804[(1)] = (8));

} else {
var statearr_25788_25805 = state_25774__$1;
(statearr_25788_25805[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (10))){
var inst_25766 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25789_25806 = state_25774__$1;
(statearr_25789_25806[(2)] = inst_25766);

(statearr_25789_25806[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25775 === (8))){
var inst_25751 = (state_25774[(7)]);
var tmp25786 = inst_25751;
var inst_25751__$1 = tmp25786;
var state_25774__$1 = (function (){var statearr_25790 = state_25774;
(statearr_25790[(7)] = inst_25751__$1);

return statearr_25790;
})();
var statearr_25791_25807 = state_25774__$1;
(statearr_25791_25807[(2)] = null);

(statearr_25791_25807[(1)] = (2));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25792[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25792[(1)] = (1));

return statearr_25792;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25774){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25774);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25793){if((e25793 instanceof Object)){
var ex__21976__auto__ = e25793;
var statearr_25794_25808 = state_25774;
(statearr_25794_25808[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25774);

return cljs.core.cst$kw$recur;
} else {
throw e25793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25809 = state_25774;
state_25774 = G__25809;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25795 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25795[(6)] = c__22163__auto___25797);

return statearr_25795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25811 = arguments.length;
switch (G__25811) {
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
var c__22163__auto___25877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25849){
var state_val_25850 = (state_25849[(1)]);
if((state_val_25850 === (7))){
var inst_25845 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25851_25878 = state_25849__$1;
(statearr_25851_25878[(2)] = inst_25845);

(statearr_25851_25878[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (1))){
var inst_25812 = (new Array(n));
var inst_25813 = inst_25812;
var inst_25814 = (0);
var state_25849__$1 = (function (){var statearr_25852 = state_25849;
(statearr_25852[(7)] = inst_25814);

(statearr_25852[(8)] = inst_25813);

return statearr_25852;
})();
var statearr_25853_25879 = state_25849__$1;
(statearr_25853_25879[(2)] = null);

(statearr_25853_25879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (4))){
var inst_25817 = (state_25849[(9)]);
var inst_25817__$1 = (state_25849[(2)]);
var inst_25818 = (inst_25817__$1 == null);
var inst_25819 = cljs.core.not(inst_25818);
var state_25849__$1 = (function (){var statearr_25854 = state_25849;
(statearr_25854[(9)] = inst_25817__$1);

return statearr_25854;
})();
if(inst_25819){
var statearr_25855_25880 = state_25849__$1;
(statearr_25855_25880[(1)] = (5));

} else {
var statearr_25856_25881 = state_25849__$1;
(statearr_25856_25881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (15))){
var inst_25839 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25857_25882 = state_25849__$1;
(statearr_25857_25882[(2)] = inst_25839);

(statearr_25857_25882[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (13))){
var state_25849__$1 = state_25849;
var statearr_25858_25883 = state_25849__$1;
(statearr_25858_25883[(2)] = null);

(statearr_25858_25883[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (6))){
var inst_25814 = (state_25849[(7)]);
var inst_25835 = (inst_25814 > (0));
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25835)){
var statearr_25859_25884 = state_25849__$1;
(statearr_25859_25884[(1)] = (12));

} else {
var statearr_25860_25885 = state_25849__$1;
(statearr_25860_25885[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (3))){
var inst_25847 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25849__$1,inst_25847);
} else {
if((state_val_25850 === (12))){
var inst_25813 = (state_25849[(8)]);
var inst_25837 = cljs.core.vec(inst_25813);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25849__$1,(15),out,inst_25837);
} else {
if((state_val_25850 === (2))){
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25849__$1,(4),ch);
} else {
if((state_val_25850 === (11))){
var inst_25829 = (state_25849[(2)]);
var inst_25830 = (new Array(n));
var inst_25813 = inst_25830;
var inst_25814 = (0);
var state_25849__$1 = (function (){var statearr_25861 = state_25849;
(statearr_25861[(7)] = inst_25814);

(statearr_25861[(8)] = inst_25813);

(statearr_25861[(10)] = inst_25829);

return statearr_25861;
})();
var statearr_25862_25886 = state_25849__$1;
(statearr_25862_25886[(2)] = null);

(statearr_25862_25886[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (9))){
var inst_25813 = (state_25849[(8)]);
var inst_25827 = cljs.core.vec(inst_25813);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25849__$1,(11),out,inst_25827);
} else {
if((state_val_25850 === (5))){
var inst_25822 = (state_25849[(11)]);
var inst_25814 = (state_25849[(7)]);
var inst_25813 = (state_25849[(8)]);
var inst_25817 = (state_25849[(9)]);
var inst_25821 = (inst_25813[inst_25814] = inst_25817);
var inst_25822__$1 = (inst_25814 + (1));
var inst_25823 = (inst_25822__$1 < n);
var state_25849__$1 = (function (){var statearr_25863 = state_25849;
(statearr_25863[(12)] = inst_25821);

(statearr_25863[(11)] = inst_25822__$1);

return statearr_25863;
})();
if(cljs.core.truth_(inst_25823)){
var statearr_25864_25887 = state_25849__$1;
(statearr_25864_25887[(1)] = (8));

} else {
var statearr_25865_25888 = state_25849__$1;
(statearr_25865_25888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (14))){
var inst_25842 = (state_25849[(2)]);
var inst_25843 = cljs.core.async.close_BANG_(out);
var state_25849__$1 = (function (){var statearr_25867 = state_25849;
(statearr_25867[(13)] = inst_25842);

return statearr_25867;
})();
var statearr_25868_25889 = state_25849__$1;
(statearr_25868_25889[(2)] = inst_25843);

(statearr_25868_25889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (10))){
var inst_25833 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25869_25890 = state_25849__$1;
(statearr_25869_25890[(2)] = inst_25833);

(statearr_25869_25890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25850 === (8))){
var inst_25822 = (state_25849[(11)]);
var inst_25813 = (state_25849[(8)]);
var tmp25866 = inst_25813;
var inst_25813__$1 = tmp25866;
var inst_25814 = inst_25822;
var state_25849__$1 = (function (){var statearr_25870 = state_25849;
(statearr_25870[(7)] = inst_25814);

(statearr_25870[(8)] = inst_25813__$1);

return statearr_25870;
})();
var statearr_25871_25891 = state_25849__$1;
(statearr_25871_25891[(2)] = null);

(statearr_25871_25891[(1)] = (2));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25872[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25872[(1)] = (1));

return statearr_25872;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25849){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25849);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25873){if((e25873 instanceof Object)){
var ex__21976__auto__ = e25873;
var statearr_25874_25892 = state_25849;
(statearr_25874_25892[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25849);

return cljs.core.cst$kw$recur;
} else {
throw e25873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25893 = state_25849;
state_25849 = G__25893;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25875 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25875[(6)] = c__22163__auto___25877);

return statearr_25875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25895 = arguments.length;
switch (G__25895) {
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
var c__22163__auto___25965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__22164__auto__ = (function (){var switch__21972__auto__ = (function (state_25937){
var state_val_25938 = (state_25937[(1)]);
if((state_val_25938 === (7))){
var inst_25933 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25939_25966 = state_25937__$1;
(statearr_25939_25966[(2)] = inst_25933);

(statearr_25939_25966[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (1))){
var inst_25896 = [];
var inst_25897 = inst_25896;
var inst_25898 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25937__$1 = (function (){var statearr_25940 = state_25937;
(statearr_25940[(7)] = inst_25898);

(statearr_25940[(8)] = inst_25897);

return statearr_25940;
})();
var statearr_25941_25967 = state_25937__$1;
(statearr_25941_25967[(2)] = null);

(statearr_25941_25967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (4))){
var inst_25901 = (state_25937[(9)]);
var inst_25901__$1 = (state_25937[(2)]);
var inst_25902 = (inst_25901__$1 == null);
var inst_25903 = cljs.core.not(inst_25902);
var state_25937__$1 = (function (){var statearr_25942 = state_25937;
(statearr_25942[(9)] = inst_25901__$1);

return statearr_25942;
})();
if(inst_25903){
var statearr_25943_25968 = state_25937__$1;
(statearr_25943_25968[(1)] = (5));

} else {
var statearr_25944_25969 = state_25937__$1;
(statearr_25944_25969[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (15))){
var inst_25927 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25945_25970 = state_25937__$1;
(statearr_25945_25970[(2)] = inst_25927);

(statearr_25945_25970[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (13))){
var state_25937__$1 = state_25937;
var statearr_25946_25971 = state_25937__$1;
(statearr_25946_25971[(2)] = null);

(statearr_25946_25971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (6))){
var inst_25897 = (state_25937[(8)]);
var inst_25922 = inst_25897.length;
var inst_25923 = (inst_25922 > (0));
var state_25937__$1 = state_25937;
if(cljs.core.truth_(inst_25923)){
var statearr_25947_25972 = state_25937__$1;
(statearr_25947_25972[(1)] = (12));

} else {
var statearr_25948_25973 = state_25937__$1;
(statearr_25948_25973[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (3))){
var inst_25935 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25937__$1,inst_25935);
} else {
if((state_val_25938 === (12))){
var inst_25897 = (state_25937[(8)]);
var inst_25925 = cljs.core.vec(inst_25897);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25937__$1,(15),out,inst_25925);
} else {
if((state_val_25938 === (2))){
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25937__$1,(4),ch);
} else {
if((state_val_25938 === (11))){
var inst_25901 = (state_25937[(9)]);
var inst_25905 = (state_25937[(10)]);
var inst_25915 = (state_25937[(2)]);
var inst_25916 = [];
var inst_25917 = inst_25916.push(inst_25901);
var inst_25897 = inst_25916;
var inst_25898 = inst_25905;
var state_25937__$1 = (function (){var statearr_25949 = state_25937;
(statearr_25949[(7)] = inst_25898);

(statearr_25949[(11)] = inst_25917);

(statearr_25949[(8)] = inst_25897);

(statearr_25949[(12)] = inst_25915);

return statearr_25949;
})();
var statearr_25950_25974 = state_25937__$1;
(statearr_25950_25974[(2)] = null);

(statearr_25950_25974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (9))){
var inst_25897 = (state_25937[(8)]);
var inst_25913 = cljs.core.vec(inst_25897);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25937__$1,(11),out,inst_25913);
} else {
if((state_val_25938 === (5))){
var inst_25898 = (state_25937[(7)]);
var inst_25901 = (state_25937[(9)]);
var inst_25905 = (state_25937[(10)]);
var inst_25905__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25901) : f.call(null,inst_25901));
var inst_25906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25905__$1,inst_25898);
var inst_25907 = cljs.core.keyword_identical_QMARK_(inst_25898,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25908 = ((inst_25906) || (inst_25907));
var state_25937__$1 = (function (){var statearr_25951 = state_25937;
(statearr_25951[(10)] = inst_25905__$1);

return statearr_25951;
})();
if(cljs.core.truth_(inst_25908)){
var statearr_25952_25975 = state_25937__$1;
(statearr_25952_25975[(1)] = (8));

} else {
var statearr_25953_25976 = state_25937__$1;
(statearr_25953_25976[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (14))){
var inst_25930 = (state_25937[(2)]);
var inst_25931 = cljs.core.async.close_BANG_(out);
var state_25937__$1 = (function (){var statearr_25955 = state_25937;
(statearr_25955[(13)] = inst_25930);

return statearr_25955;
})();
var statearr_25956_25977 = state_25937__$1;
(statearr_25956_25977[(2)] = inst_25931);

(statearr_25956_25977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (10))){
var inst_25920 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25957_25978 = state_25937__$1;
(statearr_25957_25978[(2)] = inst_25920);

(statearr_25957_25978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25938 === (8))){
var inst_25897 = (state_25937[(8)]);
var inst_25901 = (state_25937[(9)]);
var inst_25905 = (state_25937[(10)]);
var inst_25910 = inst_25897.push(inst_25901);
var tmp25954 = inst_25897;
var inst_25897__$1 = tmp25954;
var inst_25898 = inst_25905;
var state_25937__$1 = (function (){var statearr_25958 = state_25937;
(statearr_25958[(7)] = inst_25898);

(statearr_25958[(8)] = inst_25897__$1);

(statearr_25958[(14)] = inst_25910);

return statearr_25958;
})();
var statearr_25959_25979 = state_25937__$1;
(statearr_25959_25979[(2)] = null);

(statearr_25959_25979[(1)] = (2));


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
var cljs$core$async$state_machine__21973__auto__ = null;
var cljs$core$async$state_machine__21973__auto____0 = (function (){
var statearr_25960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25960[(0)] = cljs$core$async$state_machine__21973__auto__);

(statearr_25960[(1)] = (1));

return statearr_25960;
});
var cljs$core$async$state_machine__21973__auto____1 = (function (state_25937){
while(true){
var ret_value__21974__auto__ = (function (){try{while(true){
var result__21975__auto__ = switch__21972__auto__(state_25937);
if(cljs.core.keyword_identical_QMARK_(result__21975__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21975__auto__;
}
break;
}
}catch (e25961){if((e25961 instanceof Object)){
var ex__21976__auto__ = e25961;
var statearr_25962_25980 = state_25937;
(statearr_25962_25980[(5)] = ex__21976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25937);

return cljs.core.cst$kw$recur;
} else {
throw e25961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21974__auto__,cljs.core.cst$kw$recur)){
var G__25981 = state_25937;
state_25937 = G__25981;
continue;
} else {
return ret_value__21974__auto__;
}
break;
}
});
cljs$core$async$state_machine__21973__auto__ = function(state_25937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21973__auto____1.call(this,state_25937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21973__auto____0;
cljs$core$async$state_machine__21973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21973__auto____1;
return cljs$core$async$state_machine__21973__auto__;
})()
})();
var state__22165__auto__ = (function (){var statearr_25963 = (f__22164__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22164__auto__.cljs$core$IFn$_invoke$arity$0() : f__22164__auto__.call(null));
(statearr_25963[(6)] = c__22163__auto___25965);

return statearr_25963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22165__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

