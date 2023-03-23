// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17756 = arguments.length;
switch (G__17756) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17757 = (function (f,blockable,meta17758){
this.f = f;
this.blockable = blockable;
this.meta17758 = meta17758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17759,meta17758__$1){
var self__ = this;
var _17759__$1 = this;
return (new cljs.core.async.t_cljs$core$async17757(self__.f,self__.blockable,meta17758__$1));
}));

(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17759){
var self__ = this;
var _17759__$1 = this;
return self__.meta17758;
}));

(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17758","meta17758",180406929,null)], null);
}));

(cljs.core.async.t_cljs$core$async17757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17757");

(cljs.core.async.t_cljs$core$async17757.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17757.
 */
cljs.core.async.__GT_t_cljs$core$async17757 = (function cljs$core$async$__GT_t_cljs$core$async17757(f__$1,blockable__$1,meta17758){
return (new cljs.core.async.t_cljs$core$async17757(f__$1,blockable__$1,meta17758));
});

}

return (new cljs.core.async.t_cljs$core$async17757(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17763 = arguments.length;
switch (G__17763) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17766 = arguments.length;
switch (G__17766) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__17769 = arguments.length;
switch (G__17769) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17771 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17771);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17771);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__17773 = arguments.length;
switch (G__17773) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___17775 = n;
var x_17776 = (0);
while(true){
if((x_17776 < n__4613__auto___17775)){
(a[x_17776] = (0));

var G__17777 = (x_17776 + (1));
x_17776 = G__17777;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17778 = (i + (1));
i = G__17778;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17779 = (function (flag,meta17780){
this.flag = flag;
this.meta17780 = meta17780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17781,meta17780__$1){
var self__ = this;
var _17781__$1 = this;
return (new cljs.core.async.t_cljs$core$async17779(self__.flag,meta17780__$1));
}));

(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17781){
var self__ = this;
var _17781__$1 = this;
return self__.meta17780;
}));

(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17780","meta17780",-122431483,null)], null);
}));

(cljs.core.async.t_cljs$core$async17779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17779");

(cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17779.
 */
cljs.core.async.__GT_t_cljs$core$async17779 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17779(flag__$1,meta17780){
return (new cljs.core.async.t_cljs$core$async17779(flag__$1,meta17780));
});

}

return (new cljs.core.async.t_cljs$core$async17779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17782 = (function (flag,cb,meta17783){
this.flag = flag;
this.cb = cb;
this.meta17783 = meta17783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17784,meta17783__$1){
var self__ = this;
var _17784__$1 = this;
return (new cljs.core.async.t_cljs$core$async17782(self__.flag,self__.cb,meta17783__$1));
}));

(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17784){
var self__ = this;
var _17784__$1 = this;
return self__.meta17783;
}));

(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17783","meta17783",-1770157324,null)], null);
}));

(cljs.core.async.t_cljs$core$async17782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17782");

(cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17782.
 */
cljs.core.async.__GT_t_cljs$core$async17782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17782(flag__$1,cb__$1,meta17783){
return (new cljs.core.async.t_cljs$core$async17782(flag__$1,cb__$1,meta17783));
});

}

return (new cljs.core.async.t_cljs$core$async17782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17785_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17786_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17787 = (i + (1));
i = G__17787;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___17793 = arguments.length;
var i__4737__auto___17794 = (0);
while(true){
if((i__4737__auto___17794 < len__4736__auto___17793)){
args__4742__auto__.push((arguments[i__4737__auto___17794]));

var G__17795 = (i__4737__auto___17794 + (1));
i__4737__auto___17794 = G__17795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17790){
var map__17791 = p__17790;
var map__17791__$1 = (((((!((map__17791 == null))))?(((((map__17791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17791):map__17791);
var opts = map__17791__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17788){
var G__17789 = cljs.core.first.call(null,seq17788);
var seq17788__$1 = cljs.core.next.call(null,seq17788);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17789,seq17788__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__17797 = arguments.length;
switch (G__17797) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15819__auto___17843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_17821){
var state_val_17822 = (state_17821[(1)]);
if((state_val_17822 === (7))){
var inst_17817 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17823_17844 = state_17821__$1;
(statearr_17823_17844[(2)] = inst_17817);

(statearr_17823_17844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (1))){
var state_17821__$1 = state_17821;
var statearr_17824_17845 = state_17821__$1;
(statearr_17824_17845[(2)] = null);

(statearr_17824_17845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (4))){
var inst_17800 = (state_17821[(7)]);
var inst_17800__$1 = (state_17821[(2)]);
var inst_17801 = (inst_17800__$1 == null);
var state_17821__$1 = (function (){var statearr_17825 = state_17821;
(statearr_17825[(7)] = inst_17800__$1);

return statearr_17825;
})();
if(cljs.core.truth_(inst_17801)){
var statearr_17826_17846 = state_17821__$1;
(statearr_17826_17846[(1)] = (5));

} else {
var statearr_17827_17847 = state_17821__$1;
(statearr_17827_17847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (13))){
var state_17821__$1 = state_17821;
var statearr_17828_17848 = state_17821__$1;
(statearr_17828_17848[(2)] = null);

(statearr_17828_17848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (6))){
var inst_17800 = (state_17821[(7)]);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17821__$1,(11),to,inst_17800);
} else {
if((state_val_17822 === (3))){
var inst_17819 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17821__$1,inst_17819);
} else {
if((state_val_17822 === (12))){
var state_17821__$1 = state_17821;
var statearr_17829_17849 = state_17821__$1;
(statearr_17829_17849[(2)] = null);

(statearr_17829_17849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (2))){
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17821__$1,(4),from);
} else {
if((state_val_17822 === (11))){
var inst_17810 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
if(cljs.core.truth_(inst_17810)){
var statearr_17830_17850 = state_17821__$1;
(statearr_17830_17850[(1)] = (12));

} else {
var statearr_17831_17851 = state_17821__$1;
(statearr_17831_17851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (9))){
var state_17821__$1 = state_17821;
var statearr_17832_17852 = state_17821__$1;
(statearr_17832_17852[(2)] = null);

(statearr_17832_17852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (5))){
var state_17821__$1 = state_17821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17833_17853 = state_17821__$1;
(statearr_17833_17853[(1)] = (8));

} else {
var statearr_17834_17854 = state_17821__$1;
(statearr_17834_17854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (14))){
var inst_17815 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17835_17855 = state_17821__$1;
(statearr_17835_17855[(2)] = inst_17815);

(statearr_17835_17855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (10))){
var inst_17807 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17836_17856 = state_17821__$1;
(statearr_17836_17856[(2)] = inst_17807);

(statearr_17836_17856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (8))){
var inst_17804 = cljs.core.async.close_BANG_.call(null,to);
var state_17821__$1 = state_17821;
var statearr_17837_17857 = state_17821__$1;
(statearr_17837_17857[(2)] = inst_17804);

(statearr_17837_17857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_17838 = [null,null,null,null,null,null,null,null];
(statearr_17838[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_17838[(1)] = (1));

return statearr_17838;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_17821){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_17821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17839){if((e17839 instanceof Object)){
var ex__15656__auto__ = e17839;
var statearr_17840_17858 = state_17821;
(statearr_17840_17858[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17859 = state_17821;
state_17821 = G__17859;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_17821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_17821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_17841 = f__15820__auto__.call(null);
(statearr_17841[(6)] = c__15819__auto___17843);

return statearr_17841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17860){
var vec__17861 = p__17860;
var v = cljs.core.nth.call(null,vec__17861,(0),null);
var p = cljs.core.nth.call(null,vec__17861,(1),null);
var job = vec__17861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15819__auto___18032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_17868){
var state_val_17869 = (state_17868[(1)]);
if((state_val_17869 === (1))){
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17868__$1,(2),res,v);
} else {
if((state_val_17869 === (2))){
var inst_17865 = (state_17868[(2)]);
var inst_17866 = cljs.core.async.close_BANG_.call(null,res);
var state_17868__$1 = (function (){var statearr_17870 = state_17868;
(statearr_17870[(7)] = inst_17865);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17868__$1,inst_17866);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17871 = [null,null,null,null,null,null,null,null];
(statearr_17871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17871[(1)] = (1));

return statearr_17871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17868){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_17868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17872){if((e17872 instanceof Object)){
var ex__15656__auto__ = e17872;
var statearr_17873_18033 = state_17868;
(statearr_17873_18033[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18034 = state_17868;
state_17868 = G__18034;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_17874 = f__15820__auto__.call(null);
(statearr_17874[(6)] = c__15819__auto___18032);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17875){
var vec__17876 = p__17875;
var v = cljs.core.nth.call(null,vec__17876,(0),null);
var p = cljs.core.nth.call(null,vec__17876,(1),null);
var job = vec__17876;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___18035 = n;
var __18036 = (0);
while(true){
if((__18036 < n__4613__auto___18035)){
var G__17879_18037 = type;
var G__17879_18038__$1 = (((G__17879_18037 instanceof cljs.core.Keyword))?G__17879_18037.fqn:null);
switch (G__17879_18038__$1) {
case "compute":
var c__15819__auto___18040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18036,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = ((function (__18036,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function (state_17892){
var state_val_17893 = (state_17892[(1)]);
if((state_val_17893 === (1))){
var state_17892__$1 = state_17892;
var statearr_17894_18041 = state_17892__$1;
(statearr_17894_18041[(2)] = null);

(statearr_17894_18041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (2))){
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17892__$1,(4),jobs);
} else {
if((state_val_17893 === (3))){
var inst_17890 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17892__$1,inst_17890);
} else {
if((state_val_17893 === (4))){
var inst_17882 = (state_17892[(2)]);
var inst_17883 = process.call(null,inst_17882);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17883)){
var statearr_17895_18042 = state_17892__$1;
(statearr_17895_18042[(1)] = (5));

} else {
var statearr_17896_18043 = state_17892__$1;
(statearr_17896_18043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (5))){
var state_17892__$1 = state_17892;
var statearr_17897_18044 = state_17892__$1;
(statearr_17897_18044[(2)] = null);

(statearr_17897_18044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (6))){
var state_17892__$1 = state_17892;
var statearr_17898_18045 = state_17892__$1;
(statearr_17898_18045[(2)] = null);

(statearr_17898_18045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (7))){
var inst_17888 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17899_18046 = state_17892__$1;
(statearr_17899_18046[(2)] = inst_17888);

(statearr_17899_18046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18036,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
;
return ((function (__18036,switch__15652__auto__,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17900 = [null,null,null,null,null,null,null];
(statearr_17900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17900[(1)] = (1));

return statearr_17900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17892){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_17892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17901){if((e17901 instanceof Object)){
var ex__15656__auto__ = e17901;
var statearr_17902_18047 = state_17892;
(statearr_17902_18047[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18048 = state_17892;
state_17892 = G__18048;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(__18036,switch__15652__auto__,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_17903 = f__15820__auto__.call(null);
(statearr_17903[(6)] = c__15819__auto___18040);

return statearr_17903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__18036,c__15819__auto___18040,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
);


break;
case "async":
var c__15819__auto___18049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18036,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = ((function (__18036,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function (state_17916){
var state_val_17917 = (state_17916[(1)]);
if((state_val_17917 === (1))){
var state_17916__$1 = state_17916;
var statearr_17918_18050 = state_17916__$1;
(statearr_17918_18050[(2)] = null);

(statearr_17918_18050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (2))){
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17916__$1,(4),jobs);
} else {
if((state_val_17917 === (3))){
var inst_17914 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17916__$1,inst_17914);
} else {
if((state_val_17917 === (4))){
var inst_17906 = (state_17916[(2)]);
var inst_17907 = async.call(null,inst_17906);
var state_17916__$1 = state_17916;
if(cljs.core.truth_(inst_17907)){
var statearr_17919_18051 = state_17916__$1;
(statearr_17919_18051[(1)] = (5));

} else {
var statearr_17920_18052 = state_17916__$1;
(statearr_17920_18052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (5))){
var state_17916__$1 = state_17916;
var statearr_17921_18053 = state_17916__$1;
(statearr_17921_18053[(2)] = null);

(statearr_17921_18053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (6))){
var state_17916__$1 = state_17916;
var statearr_17922_18054 = state_17916__$1;
(statearr_17922_18054[(2)] = null);

(statearr_17922_18054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (7))){
var inst_17912 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17923_18055 = state_17916__$1;
(statearr_17923_18055[(2)] = inst_17912);

(statearr_17923_18055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18036,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
;
return ((function (__18036,switch__15652__auto__,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17924 = [null,null,null,null,null,null,null];
(statearr_17924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17924[(1)] = (1));

return statearr_17924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17916){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_17916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17925){if((e17925 instanceof Object)){
var ex__15656__auto__ = e17925;
var statearr_17926_18056 = state_17916;
(statearr_17926_18056[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18057 = state_17916;
state_17916 = G__18057;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
;})(__18036,switch__15652__auto__,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_17927 = f__15820__auto__.call(null);
(statearr_17927[(6)] = c__15819__auto___18049);

return statearr_17927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__18036,c__15819__auto___18049,G__17879_18037,G__17879_18038__$1,n__4613__auto___18035,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17879_18038__$1)].join('')));

}

var G__18058 = (__18036 + (1));
__18036 = G__18058;
continue;
} else {
}
break;
}

var c__15819__auto___18059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_17949){
var state_val_17950 = (state_17949[(1)]);
if((state_val_17950 === (7))){
var inst_17945 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
var statearr_17951_18060 = state_17949__$1;
(statearr_17951_18060[(2)] = inst_17945);

(statearr_17951_18060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (1))){
var state_17949__$1 = state_17949;
var statearr_17952_18061 = state_17949__$1;
(statearr_17952_18061[(2)] = null);

(statearr_17952_18061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (4))){
var inst_17930 = (state_17949[(7)]);
var inst_17930__$1 = (state_17949[(2)]);
var inst_17931 = (inst_17930__$1 == null);
var state_17949__$1 = (function (){var statearr_17953 = state_17949;
(statearr_17953[(7)] = inst_17930__$1);

return statearr_17953;
})();
if(cljs.core.truth_(inst_17931)){
var statearr_17954_18062 = state_17949__$1;
(statearr_17954_18062[(1)] = (5));

} else {
var statearr_17955_18063 = state_17949__$1;
(statearr_17955_18063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (6))){
var inst_17935 = (state_17949[(8)]);
var inst_17930 = (state_17949[(7)]);
var inst_17935__$1 = cljs.core.async.chan.call(null,(1));
var inst_17936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17937 = [inst_17930,inst_17935__$1];
var inst_17938 = (new cljs.core.PersistentVector(null,2,(5),inst_17936,inst_17937,null));
var state_17949__$1 = (function (){var statearr_17956 = state_17949;
(statearr_17956[(8)] = inst_17935__$1);

return statearr_17956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17949__$1,(8),jobs,inst_17938);
} else {
if((state_val_17950 === (3))){
var inst_17947 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17949__$1,inst_17947);
} else {
if((state_val_17950 === (2))){
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17949__$1,(4),from);
} else {
if((state_val_17950 === (9))){
var inst_17942 = (state_17949[(2)]);
var state_17949__$1 = (function (){var statearr_17957 = state_17949;
(statearr_17957[(9)] = inst_17942);

return statearr_17957;
})();
var statearr_17958_18064 = state_17949__$1;
(statearr_17958_18064[(2)] = null);

(statearr_17958_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (5))){
var inst_17933 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17949__$1 = state_17949;
var statearr_17959_18065 = state_17949__$1;
(statearr_17959_18065[(2)] = inst_17933);

(statearr_17959_18065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (8))){
var inst_17935 = (state_17949[(8)]);
var inst_17940 = (state_17949[(2)]);
var state_17949__$1 = (function (){var statearr_17960 = state_17949;
(statearr_17960[(10)] = inst_17940);

return statearr_17960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17949__$1,(9),results,inst_17935);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_17949){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_17949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e17962){if((e17962 instanceof Object)){
var ex__15656__auto__ = e17962;
var statearr_17963_18066 = state_17949;
(statearr_17963_18066[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18067 = state_17949;
state_17949 = G__18067;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_17949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_17949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_17964 = f__15820__auto__.call(null);
(statearr_17964[(6)] = c__15819__auto___18059);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18002){
var state_val_18003 = (state_18002[(1)]);
if((state_val_18003 === (7))){
var inst_17998 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18004_18068 = state_18002__$1;
(statearr_18004_18068[(2)] = inst_17998);

(statearr_18004_18068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (20))){
var state_18002__$1 = state_18002;
var statearr_18005_18069 = state_18002__$1;
(statearr_18005_18069[(2)] = null);

(statearr_18005_18069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (1))){
var state_18002__$1 = state_18002;
var statearr_18006_18070 = state_18002__$1;
(statearr_18006_18070[(2)] = null);

(statearr_18006_18070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (4))){
var inst_17967 = (state_18002[(7)]);
var inst_17967__$1 = (state_18002[(2)]);
var inst_17968 = (inst_17967__$1 == null);
var state_18002__$1 = (function (){var statearr_18007 = state_18002;
(statearr_18007[(7)] = inst_17967__$1);

return statearr_18007;
})();
if(cljs.core.truth_(inst_17968)){
var statearr_18008_18071 = state_18002__$1;
(statearr_18008_18071[(1)] = (5));

} else {
var statearr_18009_18072 = state_18002__$1;
(statearr_18009_18072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (15))){
var inst_17980 = (state_18002[(8)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18002__$1,(18),to,inst_17980);
} else {
if((state_val_18003 === (21))){
var inst_17993 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18010_18073 = state_18002__$1;
(statearr_18010_18073[(2)] = inst_17993);

(statearr_18010_18073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (13))){
var inst_17995 = (state_18002[(2)]);
var state_18002__$1 = (function (){var statearr_18011 = state_18002;
(statearr_18011[(9)] = inst_17995);

return statearr_18011;
})();
var statearr_18012_18074 = state_18002__$1;
(statearr_18012_18074[(2)] = null);

(statearr_18012_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (6))){
var inst_17967 = (state_18002[(7)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18002__$1,(11),inst_17967);
} else {
if((state_val_18003 === (17))){
var inst_17988 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
if(cljs.core.truth_(inst_17988)){
var statearr_18013_18075 = state_18002__$1;
(statearr_18013_18075[(1)] = (19));

} else {
var statearr_18014_18076 = state_18002__$1;
(statearr_18014_18076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (3))){
var inst_18000 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18002__$1,inst_18000);
} else {
if((state_val_18003 === (12))){
var inst_17977 = (state_18002[(10)]);
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18002__$1,(14),inst_17977);
} else {
if((state_val_18003 === (2))){
var state_18002__$1 = state_18002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18002__$1,(4),results);
} else {
if((state_val_18003 === (19))){
var state_18002__$1 = state_18002;
var statearr_18015_18077 = state_18002__$1;
(statearr_18015_18077[(2)] = null);

(statearr_18015_18077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (11))){
var inst_17977 = (state_18002[(2)]);
var state_18002__$1 = (function (){var statearr_18016 = state_18002;
(statearr_18016[(10)] = inst_17977);

return statearr_18016;
})();
var statearr_18017_18078 = state_18002__$1;
(statearr_18017_18078[(2)] = null);

(statearr_18017_18078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (9))){
var state_18002__$1 = state_18002;
var statearr_18018_18079 = state_18002__$1;
(statearr_18018_18079[(2)] = null);

(statearr_18018_18079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (5))){
var state_18002__$1 = state_18002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18019_18080 = state_18002__$1;
(statearr_18019_18080[(1)] = (8));

} else {
var statearr_18020_18081 = state_18002__$1;
(statearr_18020_18081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (14))){
var inst_17980 = (state_18002[(8)]);
var inst_17980__$1 = (state_18002[(2)]);
var inst_17981 = (inst_17980__$1 == null);
var inst_17982 = cljs.core.not.call(null,inst_17981);
var state_18002__$1 = (function (){var statearr_18021 = state_18002;
(statearr_18021[(8)] = inst_17980__$1);

return statearr_18021;
})();
if(inst_17982){
var statearr_18022_18082 = state_18002__$1;
(statearr_18022_18082[(1)] = (15));

} else {
var statearr_18023_18083 = state_18002__$1;
(statearr_18023_18083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (16))){
var state_18002__$1 = state_18002;
var statearr_18024_18084 = state_18002__$1;
(statearr_18024_18084[(2)] = false);

(statearr_18024_18084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (10))){
var inst_17974 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18025_18085 = state_18002__$1;
(statearr_18025_18085[(2)] = inst_17974);

(statearr_18025_18085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (18))){
var inst_17985 = (state_18002[(2)]);
var state_18002__$1 = state_18002;
var statearr_18026_18086 = state_18002__$1;
(statearr_18026_18086[(2)] = inst_17985);

(statearr_18026_18086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18003 === (8))){
var inst_17971 = cljs.core.async.close_BANG_.call(null,to);
var state_18002__$1 = state_18002;
var statearr_18027_18087 = state_18002__$1;
(statearr_18027_18087[(2)] = inst_17971);

(statearr_18027_18087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_18028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__);

(statearr_18028[(1)] = (1));

return statearr_18028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1 = (function (state_18002){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18029){if((e18029 instanceof Object)){
var ex__15656__auto__ = e18029;
var statearr_18030_18088 = state_18002;
(statearr_18030_18088[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18089 = state_18002;
state_18002 = G__18089;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__ = function(state_18002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1.call(this,state_18002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18031 = f__15820__auto__.call(null);
(statearr_18031[(6)] = c__15819__auto__);

return statearr_18031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

return c__15819__auto__;
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
var G__18091 = arguments.length;
switch (G__18091) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__18094 = arguments.length;
switch (G__18094) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__18097 = arguments.length;
switch (G__18097) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15819__auto___18146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18123){
var state_val_18124 = (state_18123[(1)]);
if((state_val_18124 === (7))){
var inst_18119 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
var statearr_18125_18147 = state_18123__$1;
(statearr_18125_18147[(2)] = inst_18119);

(statearr_18125_18147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (1))){
var state_18123__$1 = state_18123;
var statearr_18126_18148 = state_18123__$1;
(statearr_18126_18148[(2)] = null);

(statearr_18126_18148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (4))){
var inst_18100 = (state_18123[(7)]);
var inst_18100__$1 = (state_18123[(2)]);
var inst_18101 = (inst_18100__$1 == null);
var state_18123__$1 = (function (){var statearr_18127 = state_18123;
(statearr_18127[(7)] = inst_18100__$1);

return statearr_18127;
})();
if(cljs.core.truth_(inst_18101)){
var statearr_18128_18149 = state_18123__$1;
(statearr_18128_18149[(1)] = (5));

} else {
var statearr_18129_18150 = state_18123__$1;
(statearr_18129_18150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (13))){
var state_18123__$1 = state_18123;
var statearr_18130_18151 = state_18123__$1;
(statearr_18130_18151[(2)] = null);

(statearr_18130_18151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (6))){
var inst_18100 = (state_18123[(7)]);
var inst_18106 = p.call(null,inst_18100);
var state_18123__$1 = state_18123;
if(cljs.core.truth_(inst_18106)){
var statearr_18131_18152 = state_18123__$1;
(statearr_18131_18152[(1)] = (9));

} else {
var statearr_18132_18153 = state_18123__$1;
(statearr_18132_18153[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (3))){
var inst_18121 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18123__$1,inst_18121);
} else {
if((state_val_18124 === (12))){
var state_18123__$1 = state_18123;
var statearr_18133_18154 = state_18123__$1;
(statearr_18133_18154[(2)] = null);

(statearr_18133_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (2))){
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18123__$1,(4),ch);
} else {
if((state_val_18124 === (11))){
var inst_18100 = (state_18123[(7)]);
var inst_18110 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18123__$1,(8),inst_18110,inst_18100);
} else {
if((state_val_18124 === (9))){
var state_18123__$1 = state_18123;
var statearr_18134_18155 = state_18123__$1;
(statearr_18134_18155[(2)] = tc);

(statearr_18134_18155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (5))){
var inst_18103 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18104 = cljs.core.async.close_BANG_.call(null,fc);
var state_18123__$1 = (function (){var statearr_18135 = state_18123;
(statearr_18135[(8)] = inst_18103);

return statearr_18135;
})();
var statearr_18136_18156 = state_18123__$1;
(statearr_18136_18156[(2)] = inst_18104);

(statearr_18136_18156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (14))){
var inst_18117 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
var statearr_18137_18157 = state_18123__$1;
(statearr_18137_18157[(2)] = inst_18117);

(statearr_18137_18157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (10))){
var state_18123__$1 = state_18123;
var statearr_18138_18158 = state_18123__$1;
(statearr_18138_18158[(2)] = fc);

(statearr_18138_18158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (8))){
var inst_18112 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
if(cljs.core.truth_(inst_18112)){
var statearr_18139_18159 = state_18123__$1;
(statearr_18139_18159[(1)] = (12));

} else {
var statearr_18140_18160 = state_18123__$1;
(statearr_18140_18160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18141 = [null,null,null,null,null,null,null,null,null];
(statearr_18141[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18141[(1)] = (1));

return statearr_18141;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18123){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18142){if((e18142 instanceof Object)){
var ex__15656__auto__ = e18142;
var statearr_18143_18161 = state_18123;
(statearr_18143_18161[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18162 = state_18123;
state_18123 = G__18162;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18144 = f__15820__auto__.call(null);
(statearr_18144[(6)] = c__15819__auto___18146);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
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
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18183){
var state_val_18184 = (state_18183[(1)]);
if((state_val_18184 === (7))){
var inst_18179 = (state_18183[(2)]);
var state_18183__$1 = state_18183;
var statearr_18185_18203 = state_18183__$1;
(statearr_18185_18203[(2)] = inst_18179);

(statearr_18185_18203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (1))){
var inst_18163 = init;
var state_18183__$1 = (function (){var statearr_18186 = state_18183;
(statearr_18186[(7)] = inst_18163);

return statearr_18186;
})();
var statearr_18187_18204 = state_18183__$1;
(statearr_18187_18204[(2)] = null);

(statearr_18187_18204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (4))){
var inst_18166 = (state_18183[(8)]);
var inst_18166__$1 = (state_18183[(2)]);
var inst_18167 = (inst_18166__$1 == null);
var state_18183__$1 = (function (){var statearr_18188 = state_18183;
(statearr_18188[(8)] = inst_18166__$1);

return statearr_18188;
})();
if(cljs.core.truth_(inst_18167)){
var statearr_18189_18205 = state_18183__$1;
(statearr_18189_18205[(1)] = (5));

} else {
var statearr_18190_18206 = state_18183__$1;
(statearr_18190_18206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (6))){
var inst_18170 = (state_18183[(9)]);
var inst_18163 = (state_18183[(7)]);
var inst_18166 = (state_18183[(8)]);
var inst_18170__$1 = f.call(null,inst_18163,inst_18166);
var inst_18171 = cljs.core.reduced_QMARK_.call(null,inst_18170__$1);
var state_18183__$1 = (function (){var statearr_18191 = state_18183;
(statearr_18191[(9)] = inst_18170__$1);

return statearr_18191;
})();
if(inst_18171){
var statearr_18192_18207 = state_18183__$1;
(statearr_18192_18207[(1)] = (8));

} else {
var statearr_18193_18208 = state_18183__$1;
(statearr_18193_18208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (3))){
var inst_18181 = (state_18183[(2)]);
var state_18183__$1 = state_18183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18183__$1,inst_18181);
} else {
if((state_val_18184 === (2))){
var state_18183__$1 = state_18183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18183__$1,(4),ch);
} else {
if((state_val_18184 === (9))){
var inst_18170 = (state_18183[(9)]);
var inst_18163 = inst_18170;
var state_18183__$1 = (function (){var statearr_18194 = state_18183;
(statearr_18194[(7)] = inst_18163);

return statearr_18194;
})();
var statearr_18195_18209 = state_18183__$1;
(statearr_18195_18209[(2)] = null);

(statearr_18195_18209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (5))){
var inst_18163 = (state_18183[(7)]);
var state_18183__$1 = state_18183;
var statearr_18196_18210 = state_18183__$1;
(statearr_18196_18210[(2)] = inst_18163);

(statearr_18196_18210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (10))){
var inst_18177 = (state_18183[(2)]);
var state_18183__$1 = state_18183;
var statearr_18197_18211 = state_18183__$1;
(statearr_18197_18211[(2)] = inst_18177);

(statearr_18197_18211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18184 === (8))){
var inst_18170 = (state_18183[(9)]);
var inst_18173 = cljs.core.deref.call(null,inst_18170);
var state_18183__$1 = state_18183;
var statearr_18198_18212 = state_18183__$1;
(statearr_18198_18212[(2)] = inst_18173);

(statearr_18198_18212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$reduce_$_state_machine__15653__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15653__auto____0 = (function (){
var statearr_18199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18199[(0)] = cljs$core$async$reduce_$_state_machine__15653__auto__);

(statearr_18199[(1)] = (1));

return statearr_18199;
});
var cljs$core$async$reduce_$_state_machine__15653__auto____1 = (function (state_18183){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18200){if((e18200 instanceof Object)){
var ex__15656__auto__ = e18200;
var statearr_18201_18213 = state_18183;
(statearr_18201_18213[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18214 = state_18183;
state_18183 = G__18214;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15653__auto__ = function(state_18183){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15653__auto____1.call(this,state_18183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15653__auto____0;
cljs$core$async$reduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15653__auto____1;
return cljs$core$async$reduce_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18202 = f__15820__auto__.call(null);
(statearr_18202[(6)] = c__15819__auto__);

return statearr_18202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

return c__15819__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18220){
var state_val_18221 = (state_18220[(1)]);
if((state_val_18221 === (1))){
var inst_18215 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18220__$1,(2),inst_18215);
} else {
if((state_val_18221 === (2))){
var inst_18217 = (state_18220[(2)]);
var inst_18218 = f__$1.call(null,inst_18217);
var state_18220__$1 = state_18220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18220__$1,inst_18218);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15653__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15653__auto____0 = (function (){
var statearr_18222 = [null,null,null,null,null,null,null];
(statearr_18222[(0)] = cljs$core$async$transduce_$_state_machine__15653__auto__);

(statearr_18222[(1)] = (1));

return statearr_18222;
});
var cljs$core$async$transduce_$_state_machine__15653__auto____1 = (function (state_18220){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18223){if((e18223 instanceof Object)){
var ex__15656__auto__ = e18223;
var statearr_18224_18226 = state_18220;
(statearr_18224_18226[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18227 = state_18220;
state_18220 = G__18227;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15653__auto__ = function(state_18220){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15653__auto____1.call(this,state_18220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15653__auto____0;
cljs$core$async$transduce_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15653__auto____1;
return cljs$core$async$transduce_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18225 = f__15820__auto__.call(null);
(statearr_18225[(6)] = c__15819__auto__);

return statearr_18225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

return c__15819__auto__;
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
var G__18229 = arguments.length;
switch (G__18229) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18254){
var state_val_18255 = (state_18254[(1)]);
if((state_val_18255 === (7))){
var inst_18236 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
var statearr_18256_18277 = state_18254__$1;
(statearr_18256_18277[(2)] = inst_18236);

(statearr_18256_18277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (1))){
var inst_18230 = cljs.core.seq.call(null,coll);
var inst_18231 = inst_18230;
var state_18254__$1 = (function (){var statearr_18257 = state_18254;
(statearr_18257[(7)] = inst_18231);

return statearr_18257;
})();
var statearr_18258_18278 = state_18254__$1;
(statearr_18258_18278[(2)] = null);

(statearr_18258_18278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (4))){
var inst_18231 = (state_18254[(7)]);
var inst_18234 = cljs.core.first.call(null,inst_18231);
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18254__$1,(7),ch,inst_18234);
} else {
if((state_val_18255 === (13))){
var inst_18248 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
var statearr_18259_18279 = state_18254__$1;
(statearr_18259_18279[(2)] = inst_18248);

(statearr_18259_18279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (6))){
var inst_18239 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
if(cljs.core.truth_(inst_18239)){
var statearr_18260_18280 = state_18254__$1;
(statearr_18260_18280[(1)] = (8));

} else {
var statearr_18261_18281 = state_18254__$1;
(statearr_18261_18281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (3))){
var inst_18252 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18254__$1,inst_18252);
} else {
if((state_val_18255 === (12))){
var state_18254__$1 = state_18254;
var statearr_18262_18282 = state_18254__$1;
(statearr_18262_18282[(2)] = null);

(statearr_18262_18282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (2))){
var inst_18231 = (state_18254[(7)]);
var state_18254__$1 = state_18254;
if(cljs.core.truth_(inst_18231)){
var statearr_18263_18283 = state_18254__$1;
(statearr_18263_18283[(1)] = (4));

} else {
var statearr_18264_18284 = state_18254__$1;
(statearr_18264_18284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (11))){
var inst_18245 = cljs.core.async.close_BANG_.call(null,ch);
var state_18254__$1 = state_18254;
var statearr_18265_18285 = state_18254__$1;
(statearr_18265_18285[(2)] = inst_18245);

(statearr_18265_18285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (9))){
var state_18254__$1 = state_18254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18266_18286 = state_18254__$1;
(statearr_18266_18286[(1)] = (11));

} else {
var statearr_18267_18287 = state_18254__$1;
(statearr_18267_18287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (5))){
var inst_18231 = (state_18254[(7)]);
var state_18254__$1 = state_18254;
var statearr_18268_18288 = state_18254__$1;
(statearr_18268_18288[(2)] = inst_18231);

(statearr_18268_18288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (10))){
var inst_18250 = (state_18254[(2)]);
var state_18254__$1 = state_18254;
var statearr_18269_18289 = state_18254__$1;
(statearr_18269_18289[(2)] = inst_18250);

(statearr_18269_18289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18255 === (8))){
var inst_18231 = (state_18254[(7)]);
var inst_18241 = cljs.core.next.call(null,inst_18231);
var inst_18231__$1 = inst_18241;
var state_18254__$1 = (function (){var statearr_18270 = state_18254;
(statearr_18270[(7)] = inst_18231__$1);

return statearr_18270;
})();
var statearr_18271_18290 = state_18254__$1;
(statearr_18271_18290[(2)] = null);

(statearr_18271_18290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18272 = [null,null,null,null,null,null,null,null];
(statearr_18272[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18272[(1)] = (1));

return statearr_18272;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18254){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18273){if((e18273 instanceof Object)){
var ex__15656__auto__ = e18273;
var statearr_18274_18291 = state_18254;
(statearr_18274_18291[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18292 = state_18254;
state_18254 = G__18292;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18275 = f__15820__auto__.call(null);
(statearr_18275[(6)] = c__15819__auto__);

return statearr_18275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

return c__15819__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18293 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18293.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18294 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18294.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18295 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18295.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18296 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18296.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18297 = (function (ch,cs,meta18298){
this.ch = ch;
this.cs = cs;
this.meta18298 = meta18298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18299,meta18298__$1){
var self__ = this;
var _18299__$1 = this;
return (new cljs.core.async.t_cljs$core$async18297(self__.ch,self__.cs,meta18298__$1));
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18299){
var self__ = this;
var _18299__$1 = this;
return self__.meta18298;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18298","meta18298",942845983,null)], null);
}));

(cljs.core.async.t_cljs$core$async18297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18297");

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18297.
 */
cljs.core.async.__GT_t_cljs$core$async18297 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18297(ch__$1,cs__$1,meta18298){
return (new cljs.core.async.t_cljs$core$async18297(ch__$1,cs__$1,meta18298));
});

}

return (new cljs.core.async.t_cljs$core$async18297(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15819__auto___18519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18434){
var state_val_18435 = (state_18434[(1)]);
if((state_val_18435 === (7))){
var inst_18430 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18436_18520 = state_18434__$1;
(statearr_18436_18520[(2)] = inst_18430);

(statearr_18436_18520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (20))){
var inst_18333 = (state_18434[(7)]);
var inst_18345 = cljs.core.first.call(null,inst_18333);
var inst_18346 = cljs.core.nth.call(null,inst_18345,(0),null);
var inst_18347 = cljs.core.nth.call(null,inst_18345,(1),null);
var state_18434__$1 = (function (){var statearr_18437 = state_18434;
(statearr_18437[(8)] = inst_18346);

return statearr_18437;
})();
if(cljs.core.truth_(inst_18347)){
var statearr_18438_18521 = state_18434__$1;
(statearr_18438_18521[(1)] = (22));

} else {
var statearr_18439_18522 = state_18434__$1;
(statearr_18439_18522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (27))){
var inst_18377 = (state_18434[(9)]);
var inst_18382 = (state_18434[(10)]);
var inst_18375 = (state_18434[(11)]);
var inst_18302 = (state_18434[(12)]);
var inst_18382__$1 = cljs.core._nth.call(null,inst_18375,inst_18377);
var inst_18383 = cljs.core.async.put_BANG_.call(null,inst_18382__$1,inst_18302,done);
var state_18434__$1 = (function (){var statearr_18440 = state_18434;
(statearr_18440[(10)] = inst_18382__$1);

return statearr_18440;
})();
if(cljs.core.truth_(inst_18383)){
var statearr_18441_18523 = state_18434__$1;
(statearr_18441_18523[(1)] = (30));

} else {
var statearr_18442_18524 = state_18434__$1;
(statearr_18442_18524[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (1))){
var state_18434__$1 = state_18434;
var statearr_18443_18525 = state_18434__$1;
(statearr_18443_18525[(2)] = null);

(statearr_18443_18525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (24))){
var inst_18333 = (state_18434[(7)]);
var inst_18352 = (state_18434[(2)]);
var inst_18353 = cljs.core.next.call(null,inst_18333);
var inst_18311 = inst_18353;
var inst_18312 = null;
var inst_18313 = (0);
var inst_18314 = (0);
var state_18434__$1 = (function (){var statearr_18444 = state_18434;
(statearr_18444[(13)] = inst_18312);

(statearr_18444[(14)] = inst_18311);

(statearr_18444[(15)] = inst_18313);

(statearr_18444[(16)] = inst_18352);

(statearr_18444[(17)] = inst_18314);

return statearr_18444;
})();
var statearr_18445_18526 = state_18434__$1;
(statearr_18445_18526[(2)] = null);

(statearr_18445_18526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (39))){
var state_18434__$1 = state_18434;
var statearr_18449_18527 = state_18434__$1;
(statearr_18449_18527[(2)] = null);

(statearr_18449_18527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (4))){
var inst_18302 = (state_18434[(12)]);
var inst_18302__$1 = (state_18434[(2)]);
var inst_18303 = (inst_18302__$1 == null);
var state_18434__$1 = (function (){var statearr_18450 = state_18434;
(statearr_18450[(12)] = inst_18302__$1);

return statearr_18450;
})();
if(cljs.core.truth_(inst_18303)){
var statearr_18451_18528 = state_18434__$1;
(statearr_18451_18528[(1)] = (5));

} else {
var statearr_18452_18529 = state_18434__$1;
(statearr_18452_18529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (15))){
var inst_18312 = (state_18434[(13)]);
var inst_18311 = (state_18434[(14)]);
var inst_18313 = (state_18434[(15)]);
var inst_18314 = (state_18434[(17)]);
var inst_18329 = (state_18434[(2)]);
var inst_18330 = (inst_18314 + (1));
var tmp18446 = inst_18312;
var tmp18447 = inst_18311;
var tmp18448 = inst_18313;
var inst_18311__$1 = tmp18447;
var inst_18312__$1 = tmp18446;
var inst_18313__$1 = tmp18448;
var inst_18314__$1 = inst_18330;
var state_18434__$1 = (function (){var statearr_18453 = state_18434;
(statearr_18453[(13)] = inst_18312__$1);

(statearr_18453[(14)] = inst_18311__$1);

(statearr_18453[(15)] = inst_18313__$1);

(statearr_18453[(17)] = inst_18314__$1);

(statearr_18453[(18)] = inst_18329);

return statearr_18453;
})();
var statearr_18454_18530 = state_18434__$1;
(statearr_18454_18530[(2)] = null);

(statearr_18454_18530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (21))){
var inst_18356 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18458_18531 = state_18434__$1;
(statearr_18458_18531[(2)] = inst_18356);

(statearr_18458_18531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (31))){
var inst_18382 = (state_18434[(10)]);
var inst_18386 = done.call(null,null);
var inst_18387 = cljs.core.async.untap_STAR_.call(null,m,inst_18382);
var state_18434__$1 = (function (){var statearr_18459 = state_18434;
(statearr_18459[(19)] = inst_18386);

return statearr_18459;
})();
var statearr_18460_18532 = state_18434__$1;
(statearr_18460_18532[(2)] = inst_18387);

(statearr_18460_18532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (32))){
var inst_18377 = (state_18434[(9)]);
var inst_18376 = (state_18434[(20)]);
var inst_18375 = (state_18434[(11)]);
var inst_18374 = (state_18434[(21)]);
var inst_18389 = (state_18434[(2)]);
var inst_18390 = (inst_18377 + (1));
var tmp18455 = inst_18376;
var tmp18456 = inst_18375;
var tmp18457 = inst_18374;
var inst_18374__$1 = tmp18457;
var inst_18375__$1 = tmp18456;
var inst_18376__$1 = tmp18455;
var inst_18377__$1 = inst_18390;
var state_18434__$1 = (function (){var statearr_18461 = state_18434;
(statearr_18461[(22)] = inst_18389);

(statearr_18461[(9)] = inst_18377__$1);

(statearr_18461[(20)] = inst_18376__$1);

(statearr_18461[(11)] = inst_18375__$1);

(statearr_18461[(21)] = inst_18374__$1);

return statearr_18461;
})();
var statearr_18462_18533 = state_18434__$1;
(statearr_18462_18533[(2)] = null);

(statearr_18462_18533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (40))){
var inst_18402 = (state_18434[(23)]);
var inst_18406 = done.call(null,null);
var inst_18407 = cljs.core.async.untap_STAR_.call(null,m,inst_18402);
var state_18434__$1 = (function (){var statearr_18463 = state_18434;
(statearr_18463[(24)] = inst_18406);

return statearr_18463;
})();
var statearr_18464_18534 = state_18434__$1;
(statearr_18464_18534[(2)] = inst_18407);

(statearr_18464_18534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (33))){
var inst_18393 = (state_18434[(25)]);
var inst_18395 = cljs.core.chunked_seq_QMARK_.call(null,inst_18393);
var state_18434__$1 = state_18434;
if(inst_18395){
var statearr_18465_18535 = state_18434__$1;
(statearr_18465_18535[(1)] = (36));

} else {
var statearr_18466_18536 = state_18434__$1;
(statearr_18466_18536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (13))){
var inst_18323 = (state_18434[(26)]);
var inst_18326 = cljs.core.async.close_BANG_.call(null,inst_18323);
var state_18434__$1 = state_18434;
var statearr_18467_18537 = state_18434__$1;
(statearr_18467_18537[(2)] = inst_18326);

(statearr_18467_18537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (22))){
var inst_18346 = (state_18434[(8)]);
var inst_18349 = cljs.core.async.close_BANG_.call(null,inst_18346);
var state_18434__$1 = state_18434;
var statearr_18468_18538 = state_18434__$1;
(statearr_18468_18538[(2)] = inst_18349);

(statearr_18468_18538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (36))){
var inst_18393 = (state_18434[(25)]);
var inst_18397 = cljs.core.chunk_first.call(null,inst_18393);
var inst_18398 = cljs.core.chunk_rest.call(null,inst_18393);
var inst_18399 = cljs.core.count.call(null,inst_18397);
var inst_18374 = inst_18398;
var inst_18375 = inst_18397;
var inst_18376 = inst_18399;
var inst_18377 = (0);
var state_18434__$1 = (function (){var statearr_18469 = state_18434;
(statearr_18469[(9)] = inst_18377);

(statearr_18469[(20)] = inst_18376);

(statearr_18469[(11)] = inst_18375);

(statearr_18469[(21)] = inst_18374);

return statearr_18469;
})();
var statearr_18470_18539 = state_18434__$1;
(statearr_18470_18539[(2)] = null);

(statearr_18470_18539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (41))){
var inst_18393 = (state_18434[(25)]);
var inst_18409 = (state_18434[(2)]);
var inst_18410 = cljs.core.next.call(null,inst_18393);
var inst_18374 = inst_18410;
var inst_18375 = null;
var inst_18376 = (0);
var inst_18377 = (0);
var state_18434__$1 = (function (){var statearr_18471 = state_18434;
(statearr_18471[(9)] = inst_18377);

(statearr_18471[(20)] = inst_18376);

(statearr_18471[(11)] = inst_18375);

(statearr_18471[(21)] = inst_18374);

(statearr_18471[(27)] = inst_18409);

return statearr_18471;
})();
var statearr_18472_18540 = state_18434__$1;
(statearr_18472_18540[(2)] = null);

(statearr_18472_18540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (43))){
var state_18434__$1 = state_18434;
var statearr_18473_18541 = state_18434__$1;
(statearr_18473_18541[(2)] = null);

(statearr_18473_18541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (29))){
var inst_18418 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18474_18542 = state_18434__$1;
(statearr_18474_18542[(2)] = inst_18418);

(statearr_18474_18542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (44))){
var inst_18427 = (state_18434[(2)]);
var state_18434__$1 = (function (){var statearr_18475 = state_18434;
(statearr_18475[(28)] = inst_18427);

return statearr_18475;
})();
var statearr_18476_18543 = state_18434__$1;
(statearr_18476_18543[(2)] = null);

(statearr_18476_18543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (6))){
var inst_18366 = (state_18434[(29)]);
var inst_18365 = cljs.core.deref.call(null,cs);
var inst_18366__$1 = cljs.core.keys.call(null,inst_18365);
var inst_18367 = cljs.core.count.call(null,inst_18366__$1);
var inst_18368 = cljs.core.reset_BANG_.call(null,dctr,inst_18367);
var inst_18373 = cljs.core.seq.call(null,inst_18366__$1);
var inst_18374 = inst_18373;
var inst_18375 = null;
var inst_18376 = (0);
var inst_18377 = (0);
var state_18434__$1 = (function (){var statearr_18477 = state_18434;
(statearr_18477[(9)] = inst_18377);

(statearr_18477[(20)] = inst_18376);

(statearr_18477[(11)] = inst_18375);

(statearr_18477[(30)] = inst_18368);

(statearr_18477[(21)] = inst_18374);

(statearr_18477[(29)] = inst_18366__$1);

return statearr_18477;
})();
var statearr_18478_18544 = state_18434__$1;
(statearr_18478_18544[(2)] = null);

(statearr_18478_18544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (28))){
var inst_18393 = (state_18434[(25)]);
var inst_18374 = (state_18434[(21)]);
var inst_18393__$1 = cljs.core.seq.call(null,inst_18374);
var state_18434__$1 = (function (){var statearr_18479 = state_18434;
(statearr_18479[(25)] = inst_18393__$1);

return statearr_18479;
})();
if(inst_18393__$1){
var statearr_18480_18545 = state_18434__$1;
(statearr_18480_18545[(1)] = (33));

} else {
var statearr_18481_18546 = state_18434__$1;
(statearr_18481_18546[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (25))){
var inst_18377 = (state_18434[(9)]);
var inst_18376 = (state_18434[(20)]);
var inst_18379 = (inst_18377 < inst_18376);
var inst_18380 = inst_18379;
var state_18434__$1 = state_18434;
if(cljs.core.truth_(inst_18380)){
var statearr_18482_18547 = state_18434__$1;
(statearr_18482_18547[(1)] = (27));

} else {
var statearr_18483_18548 = state_18434__$1;
(statearr_18483_18548[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (34))){
var state_18434__$1 = state_18434;
var statearr_18484_18549 = state_18434__$1;
(statearr_18484_18549[(2)] = null);

(statearr_18484_18549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (17))){
var state_18434__$1 = state_18434;
var statearr_18485_18550 = state_18434__$1;
(statearr_18485_18550[(2)] = null);

(statearr_18485_18550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (3))){
var inst_18432 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18434__$1,inst_18432);
} else {
if((state_val_18435 === (12))){
var inst_18361 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18486_18551 = state_18434__$1;
(statearr_18486_18551[(2)] = inst_18361);

(statearr_18486_18551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (2))){
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18434__$1,(4),ch);
} else {
if((state_val_18435 === (23))){
var state_18434__$1 = state_18434;
var statearr_18487_18552 = state_18434__$1;
(statearr_18487_18552[(2)] = null);

(statearr_18487_18552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (35))){
var inst_18416 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18488_18553 = state_18434__$1;
(statearr_18488_18553[(2)] = inst_18416);

(statearr_18488_18553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (19))){
var inst_18333 = (state_18434[(7)]);
var inst_18337 = cljs.core.chunk_first.call(null,inst_18333);
var inst_18338 = cljs.core.chunk_rest.call(null,inst_18333);
var inst_18339 = cljs.core.count.call(null,inst_18337);
var inst_18311 = inst_18338;
var inst_18312 = inst_18337;
var inst_18313 = inst_18339;
var inst_18314 = (0);
var state_18434__$1 = (function (){var statearr_18489 = state_18434;
(statearr_18489[(13)] = inst_18312);

(statearr_18489[(14)] = inst_18311);

(statearr_18489[(15)] = inst_18313);

(statearr_18489[(17)] = inst_18314);

return statearr_18489;
})();
var statearr_18490_18554 = state_18434__$1;
(statearr_18490_18554[(2)] = null);

(statearr_18490_18554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (11))){
var inst_18333 = (state_18434[(7)]);
var inst_18311 = (state_18434[(14)]);
var inst_18333__$1 = cljs.core.seq.call(null,inst_18311);
var state_18434__$1 = (function (){var statearr_18491 = state_18434;
(statearr_18491[(7)] = inst_18333__$1);

return statearr_18491;
})();
if(inst_18333__$1){
var statearr_18492_18555 = state_18434__$1;
(statearr_18492_18555[(1)] = (16));

} else {
var statearr_18493_18556 = state_18434__$1;
(statearr_18493_18556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (9))){
var inst_18363 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18494_18557 = state_18434__$1;
(statearr_18494_18557[(2)] = inst_18363);

(statearr_18494_18557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (5))){
var inst_18309 = cljs.core.deref.call(null,cs);
var inst_18310 = cljs.core.seq.call(null,inst_18309);
var inst_18311 = inst_18310;
var inst_18312 = null;
var inst_18313 = (0);
var inst_18314 = (0);
var state_18434__$1 = (function (){var statearr_18495 = state_18434;
(statearr_18495[(13)] = inst_18312);

(statearr_18495[(14)] = inst_18311);

(statearr_18495[(15)] = inst_18313);

(statearr_18495[(17)] = inst_18314);

return statearr_18495;
})();
var statearr_18496_18558 = state_18434__$1;
(statearr_18496_18558[(2)] = null);

(statearr_18496_18558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (14))){
var state_18434__$1 = state_18434;
var statearr_18497_18559 = state_18434__$1;
(statearr_18497_18559[(2)] = null);

(statearr_18497_18559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (45))){
var inst_18424 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18498_18560 = state_18434__$1;
(statearr_18498_18560[(2)] = inst_18424);

(statearr_18498_18560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (26))){
var inst_18366 = (state_18434[(29)]);
var inst_18420 = (state_18434[(2)]);
var inst_18421 = cljs.core.seq.call(null,inst_18366);
var state_18434__$1 = (function (){var statearr_18499 = state_18434;
(statearr_18499[(31)] = inst_18420);

return statearr_18499;
})();
if(inst_18421){
var statearr_18500_18561 = state_18434__$1;
(statearr_18500_18561[(1)] = (42));

} else {
var statearr_18501_18562 = state_18434__$1;
(statearr_18501_18562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (16))){
var inst_18333 = (state_18434[(7)]);
var inst_18335 = cljs.core.chunked_seq_QMARK_.call(null,inst_18333);
var state_18434__$1 = state_18434;
if(inst_18335){
var statearr_18502_18563 = state_18434__$1;
(statearr_18502_18563[(1)] = (19));

} else {
var statearr_18503_18564 = state_18434__$1;
(statearr_18503_18564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (38))){
var inst_18413 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18504_18565 = state_18434__$1;
(statearr_18504_18565[(2)] = inst_18413);

(statearr_18504_18565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (30))){
var state_18434__$1 = state_18434;
var statearr_18505_18566 = state_18434__$1;
(statearr_18505_18566[(2)] = null);

(statearr_18505_18566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (10))){
var inst_18312 = (state_18434[(13)]);
var inst_18314 = (state_18434[(17)]);
var inst_18322 = cljs.core._nth.call(null,inst_18312,inst_18314);
var inst_18323 = cljs.core.nth.call(null,inst_18322,(0),null);
var inst_18324 = cljs.core.nth.call(null,inst_18322,(1),null);
var state_18434__$1 = (function (){var statearr_18506 = state_18434;
(statearr_18506[(26)] = inst_18323);

return statearr_18506;
})();
if(cljs.core.truth_(inst_18324)){
var statearr_18507_18567 = state_18434__$1;
(statearr_18507_18567[(1)] = (13));

} else {
var statearr_18508_18568 = state_18434__$1;
(statearr_18508_18568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (18))){
var inst_18359 = (state_18434[(2)]);
var state_18434__$1 = state_18434;
var statearr_18509_18569 = state_18434__$1;
(statearr_18509_18569[(2)] = inst_18359);

(statearr_18509_18569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (42))){
var state_18434__$1 = state_18434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18434__$1,(45),dchan);
} else {
if((state_val_18435 === (37))){
var inst_18402 = (state_18434[(23)]);
var inst_18393 = (state_18434[(25)]);
var inst_18302 = (state_18434[(12)]);
var inst_18402__$1 = cljs.core.first.call(null,inst_18393);
var inst_18403 = cljs.core.async.put_BANG_.call(null,inst_18402__$1,inst_18302,done);
var state_18434__$1 = (function (){var statearr_18510 = state_18434;
(statearr_18510[(23)] = inst_18402__$1);

return statearr_18510;
})();
if(cljs.core.truth_(inst_18403)){
var statearr_18511_18570 = state_18434__$1;
(statearr_18511_18570[(1)] = (39));

} else {
var statearr_18512_18571 = state_18434__$1;
(statearr_18512_18571[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18435 === (8))){
var inst_18313 = (state_18434[(15)]);
var inst_18314 = (state_18434[(17)]);
var inst_18316 = (inst_18314 < inst_18313);
var inst_18317 = inst_18316;
var state_18434__$1 = state_18434;
if(cljs.core.truth_(inst_18317)){
var statearr_18513_18572 = state_18434__$1;
(statearr_18513_18572[(1)] = (10));

} else {
var statearr_18514_18573 = state_18434__$1;
(statearr_18514_18573[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mult_$_state_machine__15653__auto__ = null;
var cljs$core$async$mult_$_state_machine__15653__auto____0 = (function (){
var statearr_18515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18515[(0)] = cljs$core$async$mult_$_state_machine__15653__auto__);

(statearr_18515[(1)] = (1));

return statearr_18515;
});
var cljs$core$async$mult_$_state_machine__15653__auto____1 = (function (state_18434){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18516){if((e18516 instanceof Object)){
var ex__15656__auto__ = e18516;
var statearr_18517_18574 = state_18434;
(statearr_18517_18574[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18575 = state_18434;
state_18434 = G__18575;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15653__auto__ = function(state_18434){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15653__auto____1.call(this,state_18434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15653__auto____0;
cljs$core$async$mult_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15653__auto____1;
return cljs$core$async$mult_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18518 = f__15820__auto__.call(null);
(statearr_18518[(6)] = c__15819__auto___18519);

return statearr_18518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
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
var G__18577 = arguments.length;
switch (G__18577) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18579 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18579.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18580 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18580.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18581 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18581.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18582 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18582.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18583 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18583.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18594 = arguments.length;
var i__4737__auto___18595 = (0);
while(true){
if((i__4737__auto___18595 < len__4736__auto___18594)){
args__4742__auto__.push((arguments[i__4737__auto___18595]));

var G__18596 = (i__4737__auto___18595 + (1));
i__4737__auto___18595 = G__18596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18588){
var map__18589 = p__18588;
var map__18589__$1 = (((((!((map__18589 == null))))?(((((map__18589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18589):map__18589);
var opts = map__18589__$1;
var statearr_18591_18597 = state;
(statearr_18591_18597[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18592_18598 = state;
(statearr_18592_18598[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18593_18599 = state;
(statearr_18593_18599[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18584){
var G__18585 = cljs.core.first.call(null,seq18584);
var seq18584__$1 = cljs.core.next.call(null,seq18584);
var G__18586 = cljs.core.first.call(null,seq18584__$1);
var seq18584__$2 = cljs.core.next.call(null,seq18584__$1);
var G__18587 = cljs.core.first.call(null,seq18584__$2);
var seq18584__$3 = cljs.core.next.call(null,seq18584__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18585,G__18586,G__18587,seq18584__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18600 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18601){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18601 = meta18601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18602,meta18601__$1){
var self__ = this;
var _18602__$1 = this;
return (new cljs.core.async.t_cljs$core$async18600(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18601__$1));
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18602){
var self__ = this;
var _18602__$1 = this;
return self__.meta18601;
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18601","meta18601",-525428027,null)], null);
}));

(cljs.core.async.t_cljs$core$async18600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18600");

(cljs.core.async.t_cljs$core$async18600.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18600.
 */
cljs.core.async.__GT_t_cljs$core$async18600 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18601){
return (new cljs.core.async.t_cljs$core$async18600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18601));
});

}

return (new cljs.core.async.t_cljs$core$async18600(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15819__auto___18764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18704){
var state_val_18705 = (state_18704[(1)]);
if((state_val_18705 === (7))){
var inst_18619 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18706_18765 = state_18704__$1;
(statearr_18706_18765[(2)] = inst_18619);

(statearr_18706_18765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (20))){
var inst_18631 = (state_18704[(7)]);
var state_18704__$1 = state_18704;
var statearr_18707_18766 = state_18704__$1;
(statearr_18707_18766[(2)] = inst_18631);

(statearr_18707_18766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (27))){
var state_18704__$1 = state_18704;
var statearr_18708_18767 = state_18704__$1;
(statearr_18708_18767[(2)] = null);

(statearr_18708_18767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (1))){
var inst_18606 = (state_18704[(8)]);
var inst_18606__$1 = calc_state.call(null);
var inst_18608 = (inst_18606__$1 == null);
var inst_18609 = cljs.core.not.call(null,inst_18608);
var state_18704__$1 = (function (){var statearr_18709 = state_18704;
(statearr_18709[(8)] = inst_18606__$1);

return statearr_18709;
})();
if(inst_18609){
var statearr_18710_18768 = state_18704__$1;
(statearr_18710_18768[(1)] = (2));

} else {
var statearr_18711_18769 = state_18704__$1;
(statearr_18711_18769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (24))){
var inst_18678 = (state_18704[(9)]);
var inst_18664 = (state_18704[(10)]);
var inst_18655 = (state_18704[(11)]);
var inst_18678__$1 = inst_18655.call(null,inst_18664);
var state_18704__$1 = (function (){var statearr_18712 = state_18704;
(statearr_18712[(9)] = inst_18678__$1);

return statearr_18712;
})();
if(cljs.core.truth_(inst_18678__$1)){
var statearr_18713_18770 = state_18704__$1;
(statearr_18713_18770[(1)] = (29));

} else {
var statearr_18714_18771 = state_18704__$1;
(statearr_18714_18771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (4))){
var inst_18622 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18622)){
var statearr_18715_18772 = state_18704__$1;
(statearr_18715_18772[(1)] = (8));

} else {
var statearr_18716_18773 = state_18704__$1;
(statearr_18716_18773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (15))){
var inst_18649 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18649)){
var statearr_18717_18774 = state_18704__$1;
(statearr_18717_18774[(1)] = (19));

} else {
var statearr_18718_18775 = state_18704__$1;
(statearr_18718_18775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (21))){
var inst_18654 = (state_18704[(12)]);
var inst_18654__$1 = (state_18704[(2)]);
var inst_18655 = cljs.core.get.call(null,inst_18654__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18656 = cljs.core.get.call(null,inst_18654__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18657 = cljs.core.get.call(null,inst_18654__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18704__$1 = (function (){var statearr_18719 = state_18704;
(statearr_18719[(11)] = inst_18655);

(statearr_18719[(12)] = inst_18654__$1);

(statearr_18719[(13)] = inst_18656);

return statearr_18719;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18704__$1,(22),inst_18657);
} else {
if((state_val_18705 === (31))){
var inst_18686 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18686)){
var statearr_18720_18776 = state_18704__$1;
(statearr_18720_18776[(1)] = (32));

} else {
var statearr_18721_18777 = state_18704__$1;
(statearr_18721_18777[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (32))){
var inst_18663 = (state_18704[(14)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18704__$1,(35),out,inst_18663);
} else {
if((state_val_18705 === (33))){
var inst_18654 = (state_18704[(12)]);
var inst_18631 = inst_18654;
var state_18704__$1 = (function (){var statearr_18722 = state_18704;
(statearr_18722[(7)] = inst_18631);

return statearr_18722;
})();
var statearr_18723_18778 = state_18704__$1;
(statearr_18723_18778[(2)] = null);

(statearr_18723_18778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (13))){
var inst_18631 = (state_18704[(7)]);
var inst_18638 = inst_18631.cljs$lang$protocol_mask$partition0$;
var inst_18639 = (inst_18638 & (64));
var inst_18640 = inst_18631.cljs$core$ISeq$;
var inst_18641 = (cljs.core.PROTOCOL_SENTINEL === inst_18640);
var inst_18642 = ((inst_18639) || (inst_18641));
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18642)){
var statearr_18724_18779 = state_18704__$1;
(statearr_18724_18779[(1)] = (16));

} else {
var statearr_18725_18780 = state_18704__$1;
(statearr_18725_18780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (22))){
var inst_18664 = (state_18704[(10)]);
var inst_18663 = (state_18704[(14)]);
var inst_18662 = (state_18704[(2)]);
var inst_18663__$1 = cljs.core.nth.call(null,inst_18662,(0),null);
var inst_18664__$1 = cljs.core.nth.call(null,inst_18662,(1),null);
var inst_18665 = (inst_18663__$1 == null);
var inst_18666 = cljs.core._EQ_.call(null,inst_18664__$1,change);
var inst_18667 = ((inst_18665) || (inst_18666));
var state_18704__$1 = (function (){var statearr_18726 = state_18704;
(statearr_18726[(10)] = inst_18664__$1);

(statearr_18726[(14)] = inst_18663__$1);

return statearr_18726;
})();
if(cljs.core.truth_(inst_18667)){
var statearr_18727_18781 = state_18704__$1;
(statearr_18727_18781[(1)] = (23));

} else {
var statearr_18728_18782 = state_18704__$1;
(statearr_18728_18782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (36))){
var inst_18654 = (state_18704[(12)]);
var inst_18631 = inst_18654;
var state_18704__$1 = (function (){var statearr_18729 = state_18704;
(statearr_18729[(7)] = inst_18631);

return statearr_18729;
})();
var statearr_18730_18783 = state_18704__$1;
(statearr_18730_18783[(2)] = null);

(statearr_18730_18783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (29))){
var inst_18678 = (state_18704[(9)]);
var state_18704__$1 = state_18704;
var statearr_18731_18784 = state_18704__$1;
(statearr_18731_18784[(2)] = inst_18678);

(statearr_18731_18784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (6))){
var state_18704__$1 = state_18704;
var statearr_18732_18785 = state_18704__$1;
(statearr_18732_18785[(2)] = false);

(statearr_18732_18785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (28))){
var inst_18674 = (state_18704[(2)]);
var inst_18675 = calc_state.call(null);
var inst_18631 = inst_18675;
var state_18704__$1 = (function (){var statearr_18733 = state_18704;
(statearr_18733[(15)] = inst_18674);

(statearr_18733[(7)] = inst_18631);

return statearr_18733;
})();
var statearr_18734_18786 = state_18704__$1;
(statearr_18734_18786[(2)] = null);

(statearr_18734_18786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (25))){
var inst_18700 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18735_18787 = state_18704__$1;
(statearr_18735_18787[(2)] = inst_18700);

(statearr_18735_18787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (34))){
var inst_18698 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18736_18788 = state_18704__$1;
(statearr_18736_18788[(2)] = inst_18698);

(statearr_18736_18788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (17))){
var state_18704__$1 = state_18704;
var statearr_18737_18789 = state_18704__$1;
(statearr_18737_18789[(2)] = false);

(statearr_18737_18789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (3))){
var state_18704__$1 = state_18704;
var statearr_18738_18790 = state_18704__$1;
(statearr_18738_18790[(2)] = false);

(statearr_18738_18790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (12))){
var inst_18702 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18704__$1,inst_18702);
} else {
if((state_val_18705 === (2))){
var inst_18606 = (state_18704[(8)]);
var inst_18611 = inst_18606.cljs$lang$protocol_mask$partition0$;
var inst_18612 = (inst_18611 & (64));
var inst_18613 = inst_18606.cljs$core$ISeq$;
var inst_18614 = (cljs.core.PROTOCOL_SENTINEL === inst_18613);
var inst_18615 = ((inst_18612) || (inst_18614));
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18615)){
var statearr_18739_18791 = state_18704__$1;
(statearr_18739_18791[(1)] = (5));

} else {
var statearr_18740_18792 = state_18704__$1;
(statearr_18740_18792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (23))){
var inst_18663 = (state_18704[(14)]);
var inst_18669 = (inst_18663 == null);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18669)){
var statearr_18741_18793 = state_18704__$1;
(statearr_18741_18793[(1)] = (26));

} else {
var statearr_18742_18794 = state_18704__$1;
(statearr_18742_18794[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (35))){
var inst_18689 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18689)){
var statearr_18743_18795 = state_18704__$1;
(statearr_18743_18795[(1)] = (36));

} else {
var statearr_18744_18796 = state_18704__$1;
(statearr_18744_18796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (19))){
var inst_18631 = (state_18704[(7)]);
var inst_18651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18631);
var state_18704__$1 = state_18704;
var statearr_18745_18797 = state_18704__$1;
(statearr_18745_18797[(2)] = inst_18651);

(statearr_18745_18797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (11))){
var inst_18631 = (state_18704[(7)]);
var inst_18635 = (inst_18631 == null);
var inst_18636 = cljs.core.not.call(null,inst_18635);
var state_18704__$1 = state_18704;
if(inst_18636){
var statearr_18746_18798 = state_18704__$1;
(statearr_18746_18798[(1)] = (13));

} else {
var statearr_18747_18799 = state_18704__$1;
(statearr_18747_18799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (9))){
var inst_18606 = (state_18704[(8)]);
var state_18704__$1 = state_18704;
var statearr_18748_18800 = state_18704__$1;
(statearr_18748_18800[(2)] = inst_18606);

(statearr_18748_18800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (5))){
var state_18704__$1 = state_18704;
var statearr_18749_18801 = state_18704__$1;
(statearr_18749_18801[(2)] = true);

(statearr_18749_18801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (14))){
var state_18704__$1 = state_18704;
var statearr_18750_18802 = state_18704__$1;
(statearr_18750_18802[(2)] = false);

(statearr_18750_18802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (26))){
var inst_18664 = (state_18704[(10)]);
var inst_18671 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18664);
var state_18704__$1 = state_18704;
var statearr_18751_18803 = state_18704__$1;
(statearr_18751_18803[(2)] = inst_18671);

(statearr_18751_18803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (16))){
var state_18704__$1 = state_18704;
var statearr_18752_18804 = state_18704__$1;
(statearr_18752_18804[(2)] = true);

(statearr_18752_18804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (38))){
var inst_18694 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18753_18805 = state_18704__$1;
(statearr_18753_18805[(2)] = inst_18694);

(statearr_18753_18805[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (30))){
var inst_18664 = (state_18704[(10)]);
var inst_18655 = (state_18704[(11)]);
var inst_18656 = (state_18704[(13)]);
var inst_18681 = cljs.core.empty_QMARK_.call(null,inst_18655);
var inst_18682 = inst_18656.call(null,inst_18664);
var inst_18683 = cljs.core.not.call(null,inst_18682);
var inst_18684 = ((inst_18681) && (inst_18683));
var state_18704__$1 = state_18704;
var statearr_18754_18806 = state_18704__$1;
(statearr_18754_18806[(2)] = inst_18684);

(statearr_18754_18806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (10))){
var inst_18606 = (state_18704[(8)]);
var inst_18627 = (state_18704[(2)]);
var inst_18628 = cljs.core.get.call(null,inst_18627,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18629 = cljs.core.get.call(null,inst_18627,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18630 = cljs.core.get.call(null,inst_18627,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18631 = inst_18606;
var state_18704__$1 = (function (){var statearr_18755 = state_18704;
(statearr_18755[(16)] = inst_18629);

(statearr_18755[(17)] = inst_18628);

(statearr_18755[(7)] = inst_18631);

(statearr_18755[(18)] = inst_18630);

return statearr_18755;
})();
var statearr_18756_18807 = state_18704__$1;
(statearr_18756_18807[(2)] = null);

(statearr_18756_18807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (18))){
var inst_18646 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18757_18808 = state_18704__$1;
(statearr_18757_18808[(2)] = inst_18646);

(statearr_18757_18808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (37))){
var state_18704__$1 = state_18704;
var statearr_18758_18809 = state_18704__$1;
(statearr_18758_18809[(2)] = null);

(statearr_18758_18809[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (8))){
var inst_18606 = (state_18704[(8)]);
var inst_18624 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18606);
var state_18704__$1 = state_18704;
var statearr_18759_18810 = state_18704__$1;
(statearr_18759_18810[(2)] = inst_18624);

(statearr_18759_18810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mix_$_state_machine__15653__auto__ = null;
var cljs$core$async$mix_$_state_machine__15653__auto____0 = (function (){
var statearr_18760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18760[(0)] = cljs$core$async$mix_$_state_machine__15653__auto__);

(statearr_18760[(1)] = (1));

return statearr_18760;
});
var cljs$core$async$mix_$_state_machine__15653__auto____1 = (function (state_18704){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18761){if((e18761 instanceof Object)){
var ex__15656__auto__ = e18761;
var statearr_18762_18811 = state_18704;
(statearr_18762_18811[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18812 = state_18704;
state_18704 = G__18812;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15653__auto__ = function(state_18704){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15653__auto____1.call(this,state_18704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15653__auto____0;
cljs$core$async$mix_$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15653__auto____1;
return cljs$core$async$mix_$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18763 = f__15820__auto__.call(null);
(statearr_18763[(6)] = c__15819__auto___18764);

return statearr_18763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18815 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18815.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18816 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18816.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18817 = (function() {
var G__18818 = null;
var G__18818__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18818__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18818 = function(p,v){
switch(arguments.length){
case 1:
return G__18818__1.call(this,p);
case 2:
return G__18818__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18818.cljs$core$IFn$_invoke$arity$1 = G__18818__1;
G__18818.cljs$core$IFn$_invoke$arity$2 = G__18818__2;
return G__18818;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18814 = arguments.length;
switch (G__18814) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18817.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18817.call(null,p,v);
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
var G__18822 = arguments.length;
switch (G__18822) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18820_SHARP_){
if(cljs.core.truth_(p1__18820_SHARP_.call(null,topic))){
return p1__18820_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18820_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18823 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18824){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18824 = meta18824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18825,meta18824__$1){
var self__ = this;
var _18825__$1 = this;
return (new cljs.core.async.t_cljs$core$async18823(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18824__$1));
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18825){
var self__ = this;
var _18825__$1 = this;
return self__.meta18824;
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18824","meta18824",-1900744380,null)], null);
}));

(cljs.core.async.t_cljs$core$async18823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18823");

(cljs.core.async.t_cljs$core$async18823.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18823.
 */
cljs.core.async.__GT_t_cljs$core$async18823 = (function cljs$core$async$__GT_t_cljs$core$async18823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18824){
return (new cljs.core.async.t_cljs$core$async18823(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18824));
});

}

return (new cljs.core.async.t_cljs$core$async18823(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15819__auto___18943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_18897){
var state_val_18898 = (state_18897[(1)]);
if((state_val_18898 === (7))){
var inst_18893 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18899_18944 = state_18897__$1;
(statearr_18899_18944[(2)] = inst_18893);

(statearr_18899_18944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (20))){
var state_18897__$1 = state_18897;
var statearr_18900_18945 = state_18897__$1;
(statearr_18900_18945[(2)] = null);

(statearr_18900_18945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (1))){
var state_18897__$1 = state_18897;
var statearr_18901_18946 = state_18897__$1;
(statearr_18901_18946[(2)] = null);

(statearr_18901_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (24))){
var inst_18876 = (state_18897[(7)]);
var inst_18885 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18876);
var state_18897__$1 = state_18897;
var statearr_18902_18947 = state_18897__$1;
(statearr_18902_18947[(2)] = inst_18885);

(statearr_18902_18947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (4))){
var inst_18828 = (state_18897[(8)]);
var inst_18828__$1 = (state_18897[(2)]);
var inst_18829 = (inst_18828__$1 == null);
var state_18897__$1 = (function (){var statearr_18903 = state_18897;
(statearr_18903[(8)] = inst_18828__$1);

return statearr_18903;
})();
if(cljs.core.truth_(inst_18829)){
var statearr_18904_18948 = state_18897__$1;
(statearr_18904_18948[(1)] = (5));

} else {
var statearr_18905_18949 = state_18897__$1;
(statearr_18905_18949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (15))){
var inst_18870 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18906_18950 = state_18897__$1;
(statearr_18906_18950[(2)] = inst_18870);

(statearr_18906_18950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (21))){
var inst_18890 = (state_18897[(2)]);
var state_18897__$1 = (function (){var statearr_18907 = state_18897;
(statearr_18907[(9)] = inst_18890);

return statearr_18907;
})();
var statearr_18908_18951 = state_18897__$1;
(statearr_18908_18951[(2)] = null);

(statearr_18908_18951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (13))){
var inst_18852 = (state_18897[(10)]);
var inst_18854 = cljs.core.chunked_seq_QMARK_.call(null,inst_18852);
var state_18897__$1 = state_18897;
if(inst_18854){
var statearr_18909_18952 = state_18897__$1;
(statearr_18909_18952[(1)] = (16));

} else {
var statearr_18910_18953 = state_18897__$1;
(statearr_18910_18953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (22))){
var inst_18882 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
if(cljs.core.truth_(inst_18882)){
var statearr_18911_18954 = state_18897__$1;
(statearr_18911_18954[(1)] = (23));

} else {
var statearr_18912_18955 = state_18897__$1;
(statearr_18912_18955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (6))){
var inst_18878 = (state_18897[(11)]);
var inst_18876 = (state_18897[(7)]);
var inst_18828 = (state_18897[(8)]);
var inst_18876__$1 = topic_fn.call(null,inst_18828);
var inst_18877 = cljs.core.deref.call(null,mults);
var inst_18878__$1 = cljs.core.get.call(null,inst_18877,inst_18876__$1);
var state_18897__$1 = (function (){var statearr_18913 = state_18897;
(statearr_18913[(11)] = inst_18878__$1);

(statearr_18913[(7)] = inst_18876__$1);

return statearr_18913;
})();
if(cljs.core.truth_(inst_18878__$1)){
var statearr_18914_18956 = state_18897__$1;
(statearr_18914_18956[(1)] = (19));

} else {
var statearr_18915_18957 = state_18897__$1;
(statearr_18915_18957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (25))){
var inst_18887 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18916_18958 = state_18897__$1;
(statearr_18916_18958[(2)] = inst_18887);

(statearr_18916_18958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (17))){
var inst_18852 = (state_18897[(10)]);
var inst_18861 = cljs.core.first.call(null,inst_18852);
var inst_18862 = cljs.core.async.muxch_STAR_.call(null,inst_18861);
var inst_18863 = cljs.core.async.close_BANG_.call(null,inst_18862);
var inst_18864 = cljs.core.next.call(null,inst_18852);
var inst_18838 = inst_18864;
var inst_18839 = null;
var inst_18840 = (0);
var inst_18841 = (0);
var state_18897__$1 = (function (){var statearr_18917 = state_18897;
(statearr_18917[(12)] = inst_18839);

(statearr_18917[(13)] = inst_18838);

(statearr_18917[(14)] = inst_18840);

(statearr_18917[(15)] = inst_18863);

(statearr_18917[(16)] = inst_18841);

return statearr_18917;
})();
var statearr_18918_18959 = state_18897__$1;
(statearr_18918_18959[(2)] = null);

(statearr_18918_18959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (3))){
var inst_18895 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18897__$1,inst_18895);
} else {
if((state_val_18898 === (12))){
var inst_18872 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18919_18960 = state_18897__$1;
(statearr_18919_18960[(2)] = inst_18872);

(statearr_18919_18960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (2))){
var state_18897__$1 = state_18897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18897__$1,(4),ch);
} else {
if((state_val_18898 === (23))){
var state_18897__$1 = state_18897;
var statearr_18920_18961 = state_18897__$1;
(statearr_18920_18961[(2)] = null);

(statearr_18920_18961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (19))){
var inst_18878 = (state_18897[(11)]);
var inst_18828 = (state_18897[(8)]);
var inst_18880 = cljs.core.async.muxch_STAR_.call(null,inst_18878);
var state_18897__$1 = state_18897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18897__$1,(22),inst_18880,inst_18828);
} else {
if((state_val_18898 === (11))){
var inst_18852 = (state_18897[(10)]);
var inst_18838 = (state_18897[(13)]);
var inst_18852__$1 = cljs.core.seq.call(null,inst_18838);
var state_18897__$1 = (function (){var statearr_18921 = state_18897;
(statearr_18921[(10)] = inst_18852__$1);

return statearr_18921;
})();
if(inst_18852__$1){
var statearr_18922_18962 = state_18897__$1;
(statearr_18922_18962[(1)] = (13));

} else {
var statearr_18923_18963 = state_18897__$1;
(statearr_18923_18963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (9))){
var inst_18874 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18924_18964 = state_18897__$1;
(statearr_18924_18964[(2)] = inst_18874);

(statearr_18924_18964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (5))){
var inst_18835 = cljs.core.deref.call(null,mults);
var inst_18836 = cljs.core.vals.call(null,inst_18835);
var inst_18837 = cljs.core.seq.call(null,inst_18836);
var inst_18838 = inst_18837;
var inst_18839 = null;
var inst_18840 = (0);
var inst_18841 = (0);
var state_18897__$1 = (function (){var statearr_18925 = state_18897;
(statearr_18925[(12)] = inst_18839);

(statearr_18925[(13)] = inst_18838);

(statearr_18925[(14)] = inst_18840);

(statearr_18925[(16)] = inst_18841);

return statearr_18925;
})();
var statearr_18926_18965 = state_18897__$1;
(statearr_18926_18965[(2)] = null);

(statearr_18926_18965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (14))){
var state_18897__$1 = state_18897;
var statearr_18930_18966 = state_18897__$1;
(statearr_18930_18966[(2)] = null);

(statearr_18930_18966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (16))){
var inst_18852 = (state_18897[(10)]);
var inst_18856 = cljs.core.chunk_first.call(null,inst_18852);
var inst_18857 = cljs.core.chunk_rest.call(null,inst_18852);
var inst_18858 = cljs.core.count.call(null,inst_18856);
var inst_18838 = inst_18857;
var inst_18839 = inst_18856;
var inst_18840 = inst_18858;
var inst_18841 = (0);
var state_18897__$1 = (function (){var statearr_18931 = state_18897;
(statearr_18931[(12)] = inst_18839);

(statearr_18931[(13)] = inst_18838);

(statearr_18931[(14)] = inst_18840);

(statearr_18931[(16)] = inst_18841);

return statearr_18931;
})();
var statearr_18932_18967 = state_18897__$1;
(statearr_18932_18967[(2)] = null);

(statearr_18932_18967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (10))){
var inst_18839 = (state_18897[(12)]);
var inst_18838 = (state_18897[(13)]);
var inst_18840 = (state_18897[(14)]);
var inst_18841 = (state_18897[(16)]);
var inst_18846 = cljs.core._nth.call(null,inst_18839,inst_18841);
var inst_18847 = cljs.core.async.muxch_STAR_.call(null,inst_18846);
var inst_18848 = cljs.core.async.close_BANG_.call(null,inst_18847);
var inst_18849 = (inst_18841 + (1));
var tmp18927 = inst_18839;
var tmp18928 = inst_18838;
var tmp18929 = inst_18840;
var inst_18838__$1 = tmp18928;
var inst_18839__$1 = tmp18927;
var inst_18840__$1 = tmp18929;
var inst_18841__$1 = inst_18849;
var state_18897__$1 = (function (){var statearr_18933 = state_18897;
(statearr_18933[(12)] = inst_18839__$1);

(statearr_18933[(13)] = inst_18838__$1);

(statearr_18933[(14)] = inst_18840__$1);

(statearr_18933[(17)] = inst_18848);

(statearr_18933[(16)] = inst_18841__$1);

return statearr_18933;
})();
var statearr_18934_18968 = state_18897__$1;
(statearr_18934_18968[(2)] = null);

(statearr_18934_18968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (18))){
var inst_18867 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18935_18969 = state_18897__$1;
(statearr_18935_18969[(2)] = inst_18867);

(statearr_18935_18969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (8))){
var inst_18840 = (state_18897[(14)]);
var inst_18841 = (state_18897[(16)]);
var inst_18843 = (inst_18841 < inst_18840);
var inst_18844 = inst_18843;
var state_18897__$1 = state_18897;
if(cljs.core.truth_(inst_18844)){
var statearr_18936_18970 = state_18897__$1;
(statearr_18936_18970[(1)] = (10));

} else {
var statearr_18937_18971 = state_18897__$1;
(statearr_18937_18971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_18938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18938[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_18938[(1)] = (1));

return statearr_18938;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_18897){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_18897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e18939){if((e18939 instanceof Object)){
var ex__15656__auto__ = e18939;
var statearr_18940_18972 = state_18897;
(statearr_18940_18972[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18973 = state_18897;
state_18897 = G__18973;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_18897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_18897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_18941 = f__15820__auto__.call(null);
(statearr_18941[(6)] = c__15819__auto___18943);

return statearr_18941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
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
var G__18975 = arguments.length;
switch (G__18975) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18978 = arguments.length;
switch (G__18978) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__18981 = arguments.length;
switch (G__18981) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15819__auto___19048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19020){
var state_val_19021 = (state_19020[(1)]);
if((state_val_19021 === (7))){
var state_19020__$1 = state_19020;
var statearr_19022_19049 = state_19020__$1;
(statearr_19022_19049[(2)] = null);

(statearr_19022_19049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (1))){
var state_19020__$1 = state_19020;
var statearr_19023_19050 = state_19020__$1;
(statearr_19023_19050[(2)] = null);

(statearr_19023_19050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (4))){
var inst_18984 = (state_19020[(7)]);
var inst_18986 = (inst_18984 < cnt);
var state_19020__$1 = state_19020;
if(cljs.core.truth_(inst_18986)){
var statearr_19024_19051 = state_19020__$1;
(statearr_19024_19051[(1)] = (6));

} else {
var statearr_19025_19052 = state_19020__$1;
(statearr_19025_19052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (15))){
var inst_19016 = (state_19020[(2)]);
var state_19020__$1 = state_19020;
var statearr_19026_19053 = state_19020__$1;
(statearr_19026_19053[(2)] = inst_19016);

(statearr_19026_19053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (13))){
var inst_19009 = cljs.core.async.close_BANG_.call(null,out);
var state_19020__$1 = state_19020;
var statearr_19027_19054 = state_19020__$1;
(statearr_19027_19054[(2)] = inst_19009);

(statearr_19027_19054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (6))){
var state_19020__$1 = state_19020;
var statearr_19028_19055 = state_19020__$1;
(statearr_19028_19055[(2)] = null);

(statearr_19028_19055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (3))){
var inst_19018 = (state_19020[(2)]);
var state_19020__$1 = state_19020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19020__$1,inst_19018);
} else {
if((state_val_19021 === (12))){
var inst_19006 = (state_19020[(8)]);
var inst_19006__$1 = (state_19020[(2)]);
var inst_19007 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19006__$1);
var state_19020__$1 = (function (){var statearr_19029 = state_19020;
(statearr_19029[(8)] = inst_19006__$1);

return statearr_19029;
})();
if(cljs.core.truth_(inst_19007)){
var statearr_19030_19056 = state_19020__$1;
(statearr_19030_19056[(1)] = (13));

} else {
var statearr_19031_19057 = state_19020__$1;
(statearr_19031_19057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (2))){
var inst_18983 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18984 = (0);
var state_19020__$1 = (function (){var statearr_19032 = state_19020;
(statearr_19032[(7)] = inst_18984);

(statearr_19032[(9)] = inst_18983);

return statearr_19032;
})();
var statearr_19033_19058 = state_19020__$1;
(statearr_19033_19058[(2)] = null);

(statearr_19033_19058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (11))){
var inst_18984 = (state_19020[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19020,(10),Object,null,(9));
var inst_18993 = chs__$1.call(null,inst_18984);
var inst_18994 = done.call(null,inst_18984);
var inst_18995 = cljs.core.async.take_BANG_.call(null,inst_18993,inst_18994);
var state_19020__$1 = state_19020;
var statearr_19034_19059 = state_19020__$1;
(statearr_19034_19059[(2)] = inst_18995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (9))){
var inst_18984 = (state_19020[(7)]);
var inst_18997 = (state_19020[(2)]);
var inst_18998 = (inst_18984 + (1));
var inst_18984__$1 = inst_18998;
var state_19020__$1 = (function (){var statearr_19035 = state_19020;
(statearr_19035[(7)] = inst_18984__$1);

(statearr_19035[(10)] = inst_18997);

return statearr_19035;
})();
var statearr_19036_19060 = state_19020__$1;
(statearr_19036_19060[(2)] = null);

(statearr_19036_19060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (5))){
var inst_19004 = (state_19020[(2)]);
var state_19020__$1 = (function (){var statearr_19037 = state_19020;
(statearr_19037[(11)] = inst_19004);

return statearr_19037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19020__$1,(12),dchan);
} else {
if((state_val_19021 === (14))){
var inst_19006 = (state_19020[(8)]);
var inst_19011 = cljs.core.apply.call(null,f,inst_19006);
var state_19020__$1 = state_19020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19020__$1,(16),out,inst_19011);
} else {
if((state_val_19021 === (16))){
var inst_19013 = (state_19020[(2)]);
var state_19020__$1 = (function (){var statearr_19038 = state_19020;
(statearr_19038[(12)] = inst_19013);

return statearr_19038;
})();
var statearr_19039_19061 = state_19020__$1;
(statearr_19039_19061[(2)] = null);

(statearr_19039_19061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (10))){
var inst_18988 = (state_19020[(2)]);
var inst_18989 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19020__$1 = (function (){var statearr_19040 = state_19020;
(statearr_19040[(13)] = inst_18988);

return statearr_19040;
})();
var statearr_19041_19062 = state_19020__$1;
(statearr_19041_19062[(2)] = inst_18989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19021 === (8))){
var inst_19002 = (state_19020[(2)]);
var state_19020__$1 = state_19020;
var statearr_19042_19063 = state_19020__$1;
(statearr_19042_19063[(2)] = inst_19002);

(statearr_19042_19063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19043[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19043[(1)] = (1));

return statearr_19043;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19020){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19044){if((e19044 instanceof Object)){
var ex__15656__auto__ = e19044;
var statearr_19045_19064 = state_19020;
(statearr_19045_19064[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19065 = state_19020;
state_19020 = G__19065;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19046 = f__15820__auto__.call(null);
(statearr_19046[(6)] = c__15819__auto___19048);

return statearr_19046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
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
var G__19068 = arguments.length;
switch (G__19068) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19100){
var state_val_19101 = (state_19100[(1)]);
if((state_val_19101 === (7))){
var inst_19079 = (state_19100[(7)]);
var inst_19080 = (state_19100[(8)]);
var inst_19079__$1 = (state_19100[(2)]);
var inst_19080__$1 = cljs.core.nth.call(null,inst_19079__$1,(0),null);
var inst_19081 = cljs.core.nth.call(null,inst_19079__$1,(1),null);
var inst_19082 = (inst_19080__$1 == null);
var state_19100__$1 = (function (){var statearr_19102 = state_19100;
(statearr_19102[(7)] = inst_19079__$1);

(statearr_19102[(8)] = inst_19080__$1);

(statearr_19102[(9)] = inst_19081);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19082)){
var statearr_19103_19123 = state_19100__$1;
(statearr_19103_19123[(1)] = (8));

} else {
var statearr_19104_19124 = state_19100__$1;
(statearr_19104_19124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (1))){
var inst_19069 = cljs.core.vec.call(null,chs);
var inst_19070 = inst_19069;
var state_19100__$1 = (function (){var statearr_19105 = state_19100;
(statearr_19105[(10)] = inst_19070);

return statearr_19105;
})();
var statearr_19106_19125 = state_19100__$1;
(statearr_19106_19125[(2)] = null);

(statearr_19106_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (4))){
var inst_19070 = (state_19100[(10)]);
var state_19100__$1 = state_19100;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19100__$1,(7),inst_19070);
} else {
if((state_val_19101 === (6))){
var inst_19096 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19107_19126 = state_19100__$1;
(statearr_19107_19126[(2)] = inst_19096);

(statearr_19107_19126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (3))){
var inst_19098 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19100__$1,inst_19098);
} else {
if((state_val_19101 === (2))){
var inst_19070 = (state_19100[(10)]);
var inst_19072 = cljs.core.count.call(null,inst_19070);
var inst_19073 = (inst_19072 > (0));
var state_19100__$1 = state_19100;
if(cljs.core.truth_(inst_19073)){
var statearr_19109_19127 = state_19100__$1;
(statearr_19109_19127[(1)] = (4));

} else {
var statearr_19110_19128 = state_19100__$1;
(statearr_19110_19128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (11))){
var inst_19070 = (state_19100[(10)]);
var inst_19089 = (state_19100[(2)]);
var tmp19108 = inst_19070;
var inst_19070__$1 = tmp19108;
var state_19100__$1 = (function (){var statearr_19111 = state_19100;
(statearr_19111[(10)] = inst_19070__$1);

(statearr_19111[(11)] = inst_19089);

return statearr_19111;
})();
var statearr_19112_19129 = state_19100__$1;
(statearr_19112_19129[(2)] = null);

(statearr_19112_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (9))){
var inst_19080 = (state_19100[(8)]);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19100__$1,(11),out,inst_19080);
} else {
if((state_val_19101 === (5))){
var inst_19094 = cljs.core.async.close_BANG_.call(null,out);
var state_19100__$1 = state_19100;
var statearr_19113_19130 = state_19100__$1;
(statearr_19113_19130[(2)] = inst_19094);

(statearr_19113_19130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (10))){
var inst_19092 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19114_19131 = state_19100__$1;
(statearr_19114_19131[(2)] = inst_19092);

(statearr_19114_19131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (8))){
var inst_19079 = (state_19100[(7)]);
var inst_19080 = (state_19100[(8)]);
var inst_19081 = (state_19100[(9)]);
var inst_19070 = (state_19100[(10)]);
var inst_19084 = (function (){var cs = inst_19070;
var vec__19075 = inst_19079;
var v = inst_19080;
var c = inst_19081;
return (function (p1__19066_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19066_SHARP_);
});
})();
var inst_19085 = cljs.core.filterv.call(null,inst_19084,inst_19070);
var inst_19070__$1 = inst_19085;
var state_19100__$1 = (function (){var statearr_19115 = state_19100;
(statearr_19115[(10)] = inst_19070__$1);

return statearr_19115;
})();
var statearr_19116_19132 = state_19100__$1;
(statearr_19116_19132[(2)] = null);

(statearr_19116_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19117[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19117[(1)] = (1));

return statearr_19117;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19100){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19118){if((e19118 instanceof Object)){
var ex__15656__auto__ = e19118;
var statearr_19119_19133 = state_19100;
(statearr_19119_19133[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19134 = state_19100;
state_19100 = G__19134;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19120 = f__15820__auto__.call(null);
(statearr_19120[(6)] = c__15819__auto___19122);

return statearr_19120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19136 = arguments.length;
switch (G__19136) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19160){
var state_val_19161 = (state_19160[(1)]);
if((state_val_19161 === (7))){
var inst_19142 = (state_19160[(7)]);
var inst_19142__$1 = (state_19160[(2)]);
var inst_19143 = (inst_19142__$1 == null);
var inst_19144 = cljs.core.not.call(null,inst_19143);
var state_19160__$1 = (function (){var statearr_19162 = state_19160;
(statearr_19162[(7)] = inst_19142__$1);

return statearr_19162;
})();
if(inst_19144){
var statearr_19163_19182 = state_19160__$1;
(statearr_19163_19182[(1)] = (8));

} else {
var statearr_19164_19183 = state_19160__$1;
(statearr_19164_19183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (1))){
var inst_19137 = (0);
var state_19160__$1 = (function (){var statearr_19165 = state_19160;
(statearr_19165[(8)] = inst_19137);

return statearr_19165;
})();
var statearr_19166_19184 = state_19160__$1;
(statearr_19166_19184[(2)] = null);

(statearr_19166_19184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (4))){
var state_19160__$1 = state_19160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19160__$1,(7),ch);
} else {
if((state_val_19161 === (6))){
var inst_19155 = (state_19160[(2)]);
var state_19160__$1 = state_19160;
var statearr_19167_19185 = state_19160__$1;
(statearr_19167_19185[(2)] = inst_19155);

(statearr_19167_19185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (3))){
var inst_19157 = (state_19160[(2)]);
var inst_19158 = cljs.core.async.close_BANG_.call(null,out);
var state_19160__$1 = (function (){var statearr_19168 = state_19160;
(statearr_19168[(9)] = inst_19157);

return statearr_19168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19160__$1,inst_19158);
} else {
if((state_val_19161 === (2))){
var inst_19137 = (state_19160[(8)]);
var inst_19139 = (inst_19137 < n);
var state_19160__$1 = state_19160;
if(cljs.core.truth_(inst_19139)){
var statearr_19169_19186 = state_19160__$1;
(statearr_19169_19186[(1)] = (4));

} else {
var statearr_19170_19187 = state_19160__$1;
(statearr_19170_19187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (11))){
var inst_19137 = (state_19160[(8)]);
var inst_19147 = (state_19160[(2)]);
var inst_19148 = (inst_19137 + (1));
var inst_19137__$1 = inst_19148;
var state_19160__$1 = (function (){var statearr_19171 = state_19160;
(statearr_19171[(8)] = inst_19137__$1);

(statearr_19171[(10)] = inst_19147);

return statearr_19171;
})();
var statearr_19172_19188 = state_19160__$1;
(statearr_19172_19188[(2)] = null);

(statearr_19172_19188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (9))){
var state_19160__$1 = state_19160;
var statearr_19173_19189 = state_19160__$1;
(statearr_19173_19189[(2)] = null);

(statearr_19173_19189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (5))){
var state_19160__$1 = state_19160;
var statearr_19174_19190 = state_19160__$1;
(statearr_19174_19190[(2)] = null);

(statearr_19174_19190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (10))){
var inst_19152 = (state_19160[(2)]);
var state_19160__$1 = state_19160;
var statearr_19175_19191 = state_19160__$1;
(statearr_19175_19191[(2)] = inst_19152);

(statearr_19175_19191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19161 === (8))){
var inst_19142 = (state_19160[(7)]);
var state_19160__$1 = state_19160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19160__$1,(11),out,inst_19142);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19176[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19176[(1)] = (1));

return statearr_19176;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19160){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19177){if((e19177 instanceof Object)){
var ex__15656__auto__ = e19177;
var statearr_19178_19192 = state_19160;
(statearr_19178_19192[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19193 = state_19160;
state_19160 = G__19193;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19179 = f__15820__auto__.call(null);
(statearr_19179[(6)] = c__15819__auto___19181);

return statearr_19179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19195 = (function (f,ch,meta19196){
this.f = f;
this.ch = ch;
this.meta19196 = meta19196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19197,meta19196__$1){
var self__ = this;
var _19197__$1 = this;
return (new cljs.core.async.t_cljs$core$async19195(self__.f,self__.ch,meta19196__$1));
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19197){
var self__ = this;
var _19197__$1 = this;
return self__.meta19196;
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19198 = (function (f,ch,meta19196,_,fn1,meta19199){
this.f = f;
this.ch = ch;
this.meta19196 = meta19196;
this._ = _;
this.fn1 = fn1;
this.meta19199 = meta19199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19200,meta19199__$1){
var self__ = this;
var _19200__$1 = this;
return (new cljs.core.async.t_cljs$core$async19198(self__.f,self__.ch,self__.meta19196,self__._,self__.fn1,meta19199__$1));
}));

(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19200){
var self__ = this;
var _19200__$1 = this;
return self__.meta19199;
}));

(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19194_SHARP_){
return f1.call(null,(((p1__19194_SHARP_ == null))?null:self__.f.call(null,p1__19194_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19196","meta19196",-613613601,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19195","cljs.core.async/t_cljs$core$async19195",1939873719,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19199","meta19199",638281939,null)], null);
}));

(cljs.core.async.t_cljs$core$async19198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19198");

(cljs.core.async.t_cljs$core$async19198.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19198.
 */
cljs.core.async.__GT_t_cljs$core$async19198 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19198(f__$1,ch__$1,meta19196__$1,___$2,fn1__$1,meta19199){
return (new cljs.core.async.t_cljs$core$async19198(f__$1,ch__$1,meta19196__$1,___$2,fn1__$1,meta19199));
});

}

return (new cljs.core.async.t_cljs$core$async19198(self__.f,self__.ch,self__.meta19196,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19196","meta19196",-613613601,null)], null);
}));

(cljs.core.async.t_cljs$core$async19195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19195");

(cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19195.
 */
cljs.core.async.__GT_t_cljs$core$async19195 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19195(f__$1,ch__$1,meta19196){
return (new cljs.core.async.t_cljs$core$async19195(f__$1,ch__$1,meta19196));
});

}

return (new cljs.core.async.t_cljs$core$async19195(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19201 = (function (f,ch,meta19202){
this.f = f;
this.ch = ch;
this.meta19202 = meta19202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19203,meta19202__$1){
var self__ = this;
var _19203__$1 = this;
return (new cljs.core.async.t_cljs$core$async19201(self__.f,self__.ch,meta19202__$1));
}));

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19203){
var self__ = this;
var _19203__$1 = this;
return self__.meta19202;
}));

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19202","meta19202",-1264625130,null)], null);
}));

(cljs.core.async.t_cljs$core$async19201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19201");

(cljs.core.async.t_cljs$core$async19201.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19201.
 */
cljs.core.async.__GT_t_cljs$core$async19201 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19201(f__$1,ch__$1,meta19202){
return (new cljs.core.async.t_cljs$core$async19201(f__$1,ch__$1,meta19202));
});

}

return (new cljs.core.async.t_cljs$core$async19201(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19204 = (function (p,ch,meta19205){
this.p = p;
this.ch = ch;
this.meta19205 = meta19205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19206,meta19205__$1){
var self__ = this;
var _19206__$1 = this;
return (new cljs.core.async.t_cljs$core$async19204(self__.p,self__.ch,meta19205__$1));
}));

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19206){
var self__ = this;
var _19206__$1 = this;
return self__.meta19205;
}));

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19205","meta19205",-154994537,null)], null);
}));

(cljs.core.async.t_cljs$core$async19204.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19204");

(cljs.core.async.t_cljs$core$async19204.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19204");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19204.
 */
cljs.core.async.__GT_t_cljs$core$async19204 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19204(p__$1,ch__$1,meta19205){
return (new cljs.core.async.t_cljs$core$async19204(p__$1,ch__$1,meta19205));
});

}

return (new cljs.core.async.t_cljs$core$async19204(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19208 = arguments.length;
switch (G__19208) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19229){
var state_val_19230 = (state_19229[(1)]);
if((state_val_19230 === (7))){
var inst_19225 = (state_19229[(2)]);
var state_19229__$1 = state_19229;
var statearr_19231_19249 = state_19229__$1;
(statearr_19231_19249[(2)] = inst_19225);

(statearr_19231_19249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (1))){
var state_19229__$1 = state_19229;
var statearr_19232_19250 = state_19229__$1;
(statearr_19232_19250[(2)] = null);

(statearr_19232_19250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (4))){
var inst_19211 = (state_19229[(7)]);
var inst_19211__$1 = (state_19229[(2)]);
var inst_19212 = (inst_19211__$1 == null);
var state_19229__$1 = (function (){var statearr_19233 = state_19229;
(statearr_19233[(7)] = inst_19211__$1);

return statearr_19233;
})();
if(cljs.core.truth_(inst_19212)){
var statearr_19234_19251 = state_19229__$1;
(statearr_19234_19251[(1)] = (5));

} else {
var statearr_19235_19252 = state_19229__$1;
(statearr_19235_19252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (6))){
var inst_19211 = (state_19229[(7)]);
var inst_19216 = p.call(null,inst_19211);
var state_19229__$1 = state_19229;
if(cljs.core.truth_(inst_19216)){
var statearr_19236_19253 = state_19229__$1;
(statearr_19236_19253[(1)] = (8));

} else {
var statearr_19237_19254 = state_19229__$1;
(statearr_19237_19254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (3))){
var inst_19227 = (state_19229[(2)]);
var state_19229__$1 = state_19229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19229__$1,inst_19227);
} else {
if((state_val_19230 === (2))){
var state_19229__$1 = state_19229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19229__$1,(4),ch);
} else {
if((state_val_19230 === (11))){
var inst_19219 = (state_19229[(2)]);
var state_19229__$1 = state_19229;
var statearr_19238_19255 = state_19229__$1;
(statearr_19238_19255[(2)] = inst_19219);

(statearr_19238_19255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (9))){
var state_19229__$1 = state_19229;
var statearr_19239_19256 = state_19229__$1;
(statearr_19239_19256[(2)] = null);

(statearr_19239_19256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (5))){
var inst_19214 = cljs.core.async.close_BANG_.call(null,out);
var state_19229__$1 = state_19229;
var statearr_19240_19257 = state_19229__$1;
(statearr_19240_19257[(2)] = inst_19214);

(statearr_19240_19257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (10))){
var inst_19222 = (state_19229[(2)]);
var state_19229__$1 = (function (){var statearr_19241 = state_19229;
(statearr_19241[(8)] = inst_19222);

return statearr_19241;
})();
var statearr_19242_19258 = state_19229__$1;
(statearr_19242_19258[(2)] = null);

(statearr_19242_19258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19230 === (8))){
var inst_19211 = (state_19229[(7)]);
var state_19229__$1 = state_19229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19229__$1,(11),out,inst_19211);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19243 = [null,null,null,null,null,null,null,null,null];
(statearr_19243[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19243[(1)] = (1));

return statearr_19243;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19229){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19244){if((e19244 instanceof Object)){
var ex__15656__auto__ = e19244;
var statearr_19245_19259 = state_19229;
(statearr_19245_19259[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19260 = state_19229;
state_19229 = G__19260;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19246 = f__15820__auto__.call(null);
(statearr_19246[(6)] = c__15819__auto___19248);

return statearr_19246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19262 = arguments.length;
switch (G__19262) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19325){
var state_val_19326 = (state_19325[(1)]);
if((state_val_19326 === (7))){
var inst_19321 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
var statearr_19327_19365 = state_19325__$1;
(statearr_19327_19365[(2)] = inst_19321);

(statearr_19327_19365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (20))){
var inst_19291 = (state_19325[(7)]);
var inst_19302 = (state_19325[(2)]);
var inst_19303 = cljs.core.next.call(null,inst_19291);
var inst_19277 = inst_19303;
var inst_19278 = null;
var inst_19279 = (0);
var inst_19280 = (0);
var state_19325__$1 = (function (){var statearr_19328 = state_19325;
(statearr_19328[(8)] = inst_19277);

(statearr_19328[(9)] = inst_19279);

(statearr_19328[(10)] = inst_19302);

(statearr_19328[(11)] = inst_19280);

(statearr_19328[(12)] = inst_19278);

return statearr_19328;
})();
var statearr_19329_19366 = state_19325__$1;
(statearr_19329_19366[(2)] = null);

(statearr_19329_19366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (1))){
var state_19325__$1 = state_19325;
var statearr_19330_19367 = state_19325__$1;
(statearr_19330_19367[(2)] = null);

(statearr_19330_19367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (4))){
var inst_19266 = (state_19325[(13)]);
var inst_19266__$1 = (state_19325[(2)]);
var inst_19267 = (inst_19266__$1 == null);
var state_19325__$1 = (function (){var statearr_19331 = state_19325;
(statearr_19331[(13)] = inst_19266__$1);

return statearr_19331;
})();
if(cljs.core.truth_(inst_19267)){
var statearr_19332_19368 = state_19325__$1;
(statearr_19332_19368[(1)] = (5));

} else {
var statearr_19333_19369 = state_19325__$1;
(statearr_19333_19369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (15))){
var state_19325__$1 = state_19325;
var statearr_19337_19370 = state_19325__$1;
(statearr_19337_19370[(2)] = null);

(statearr_19337_19370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (21))){
var state_19325__$1 = state_19325;
var statearr_19338_19371 = state_19325__$1;
(statearr_19338_19371[(2)] = null);

(statearr_19338_19371[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (13))){
var inst_19277 = (state_19325[(8)]);
var inst_19279 = (state_19325[(9)]);
var inst_19280 = (state_19325[(11)]);
var inst_19278 = (state_19325[(12)]);
var inst_19287 = (state_19325[(2)]);
var inst_19288 = (inst_19280 + (1));
var tmp19334 = inst_19277;
var tmp19335 = inst_19279;
var tmp19336 = inst_19278;
var inst_19277__$1 = tmp19334;
var inst_19278__$1 = tmp19336;
var inst_19279__$1 = tmp19335;
var inst_19280__$1 = inst_19288;
var state_19325__$1 = (function (){var statearr_19339 = state_19325;
(statearr_19339[(8)] = inst_19277__$1);

(statearr_19339[(9)] = inst_19279__$1);

(statearr_19339[(14)] = inst_19287);

(statearr_19339[(11)] = inst_19280__$1);

(statearr_19339[(12)] = inst_19278__$1);

return statearr_19339;
})();
var statearr_19340_19372 = state_19325__$1;
(statearr_19340_19372[(2)] = null);

(statearr_19340_19372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (22))){
var state_19325__$1 = state_19325;
var statearr_19341_19373 = state_19325__$1;
(statearr_19341_19373[(2)] = null);

(statearr_19341_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (6))){
var inst_19266 = (state_19325[(13)]);
var inst_19275 = f.call(null,inst_19266);
var inst_19276 = cljs.core.seq.call(null,inst_19275);
var inst_19277 = inst_19276;
var inst_19278 = null;
var inst_19279 = (0);
var inst_19280 = (0);
var state_19325__$1 = (function (){var statearr_19342 = state_19325;
(statearr_19342[(8)] = inst_19277);

(statearr_19342[(9)] = inst_19279);

(statearr_19342[(11)] = inst_19280);

(statearr_19342[(12)] = inst_19278);

return statearr_19342;
})();
var statearr_19343_19374 = state_19325__$1;
(statearr_19343_19374[(2)] = null);

(statearr_19343_19374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (17))){
var inst_19291 = (state_19325[(7)]);
var inst_19295 = cljs.core.chunk_first.call(null,inst_19291);
var inst_19296 = cljs.core.chunk_rest.call(null,inst_19291);
var inst_19297 = cljs.core.count.call(null,inst_19295);
var inst_19277 = inst_19296;
var inst_19278 = inst_19295;
var inst_19279 = inst_19297;
var inst_19280 = (0);
var state_19325__$1 = (function (){var statearr_19344 = state_19325;
(statearr_19344[(8)] = inst_19277);

(statearr_19344[(9)] = inst_19279);

(statearr_19344[(11)] = inst_19280);

(statearr_19344[(12)] = inst_19278);

return statearr_19344;
})();
var statearr_19345_19375 = state_19325__$1;
(statearr_19345_19375[(2)] = null);

(statearr_19345_19375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (3))){
var inst_19323 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19325__$1,inst_19323);
} else {
if((state_val_19326 === (12))){
var inst_19311 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
var statearr_19346_19376 = state_19325__$1;
(statearr_19346_19376[(2)] = inst_19311);

(statearr_19346_19376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (2))){
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19325__$1,(4),in$);
} else {
if((state_val_19326 === (23))){
var inst_19319 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
var statearr_19347_19377 = state_19325__$1;
(statearr_19347_19377[(2)] = inst_19319);

(statearr_19347_19377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (19))){
var inst_19306 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
var statearr_19348_19378 = state_19325__$1;
(statearr_19348_19378[(2)] = inst_19306);

(statearr_19348_19378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (11))){
var inst_19277 = (state_19325[(8)]);
var inst_19291 = (state_19325[(7)]);
var inst_19291__$1 = cljs.core.seq.call(null,inst_19277);
var state_19325__$1 = (function (){var statearr_19349 = state_19325;
(statearr_19349[(7)] = inst_19291__$1);

return statearr_19349;
})();
if(inst_19291__$1){
var statearr_19350_19379 = state_19325__$1;
(statearr_19350_19379[(1)] = (14));

} else {
var statearr_19351_19380 = state_19325__$1;
(statearr_19351_19380[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (9))){
var inst_19313 = (state_19325[(2)]);
var inst_19314 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19325__$1 = (function (){var statearr_19352 = state_19325;
(statearr_19352[(15)] = inst_19313);

return statearr_19352;
})();
if(cljs.core.truth_(inst_19314)){
var statearr_19353_19381 = state_19325__$1;
(statearr_19353_19381[(1)] = (21));

} else {
var statearr_19354_19382 = state_19325__$1;
(statearr_19354_19382[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (5))){
var inst_19269 = cljs.core.async.close_BANG_.call(null,out);
var state_19325__$1 = state_19325;
var statearr_19355_19383 = state_19325__$1;
(statearr_19355_19383[(2)] = inst_19269);

(statearr_19355_19383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (14))){
var inst_19291 = (state_19325[(7)]);
var inst_19293 = cljs.core.chunked_seq_QMARK_.call(null,inst_19291);
var state_19325__$1 = state_19325;
if(inst_19293){
var statearr_19356_19384 = state_19325__$1;
(statearr_19356_19384[(1)] = (17));

} else {
var statearr_19357_19385 = state_19325__$1;
(statearr_19357_19385[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (16))){
var inst_19309 = (state_19325[(2)]);
var state_19325__$1 = state_19325;
var statearr_19358_19386 = state_19325__$1;
(statearr_19358_19386[(2)] = inst_19309);

(statearr_19358_19386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19326 === (10))){
var inst_19280 = (state_19325[(11)]);
var inst_19278 = (state_19325[(12)]);
var inst_19285 = cljs.core._nth.call(null,inst_19278,inst_19280);
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19325__$1,(13),out,inst_19285);
} else {
if((state_val_19326 === (18))){
var inst_19291 = (state_19325[(7)]);
var inst_19300 = cljs.core.first.call(null,inst_19291);
var state_19325__$1 = state_19325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19325__$1,(20),out,inst_19300);
} else {
if((state_val_19326 === (8))){
var inst_19279 = (state_19325[(9)]);
var inst_19280 = (state_19325[(11)]);
var inst_19282 = (inst_19280 < inst_19279);
var inst_19283 = inst_19282;
var state_19325__$1 = state_19325;
if(cljs.core.truth_(inst_19283)){
var statearr_19359_19387 = state_19325__$1;
(statearr_19359_19387[(1)] = (10));

} else {
var statearr_19360_19388 = state_19325__$1;
(statearr_19360_19388[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0 = (function (){
var statearr_19361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19361[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__);

(statearr_19361[(1)] = (1));

return statearr_19361;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1 = (function (state_19325){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19362){if((e19362 instanceof Object)){
var ex__15656__auto__ = e19362;
var statearr_19363_19389 = state_19325;
(statearr_19363_19389[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19390 = state_19325;
state_19325 = G__19390;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__ = function(state_19325){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1.call(this,state_19325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15653__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19364 = f__15820__auto__.call(null);
(statearr_19364[(6)] = c__15819__auto__);

return statearr_19364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));

return c__15819__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19392 = arguments.length;
switch (G__19392) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19395 = arguments.length;
switch (G__19395) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19398 = arguments.length;
switch (G__19398) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19422){
var state_val_19423 = (state_19422[(1)]);
if((state_val_19423 === (7))){
var inst_19417 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19424_19446 = state_19422__$1;
(statearr_19424_19446[(2)] = inst_19417);

(statearr_19424_19446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (1))){
var inst_19399 = null;
var state_19422__$1 = (function (){var statearr_19425 = state_19422;
(statearr_19425[(7)] = inst_19399);

return statearr_19425;
})();
var statearr_19426_19447 = state_19422__$1;
(statearr_19426_19447[(2)] = null);

(statearr_19426_19447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (4))){
var inst_19402 = (state_19422[(8)]);
var inst_19402__$1 = (state_19422[(2)]);
var inst_19403 = (inst_19402__$1 == null);
var inst_19404 = cljs.core.not.call(null,inst_19403);
var state_19422__$1 = (function (){var statearr_19427 = state_19422;
(statearr_19427[(8)] = inst_19402__$1);

return statearr_19427;
})();
if(inst_19404){
var statearr_19428_19448 = state_19422__$1;
(statearr_19428_19448[(1)] = (5));

} else {
var statearr_19429_19449 = state_19422__$1;
(statearr_19429_19449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (6))){
var state_19422__$1 = state_19422;
var statearr_19430_19450 = state_19422__$1;
(statearr_19430_19450[(2)] = null);

(statearr_19430_19450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (3))){
var inst_19419 = (state_19422[(2)]);
var inst_19420 = cljs.core.async.close_BANG_.call(null,out);
var state_19422__$1 = (function (){var statearr_19431 = state_19422;
(statearr_19431[(9)] = inst_19419);

return statearr_19431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19422__$1,inst_19420);
} else {
if((state_val_19423 === (2))){
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19422__$1,(4),ch);
} else {
if((state_val_19423 === (11))){
var inst_19402 = (state_19422[(8)]);
var inst_19411 = (state_19422[(2)]);
var inst_19399 = inst_19402;
var state_19422__$1 = (function (){var statearr_19432 = state_19422;
(statearr_19432[(7)] = inst_19399);

(statearr_19432[(10)] = inst_19411);

return statearr_19432;
})();
var statearr_19433_19451 = state_19422__$1;
(statearr_19433_19451[(2)] = null);

(statearr_19433_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (9))){
var inst_19402 = (state_19422[(8)]);
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19422__$1,(11),out,inst_19402);
} else {
if((state_val_19423 === (5))){
var inst_19402 = (state_19422[(8)]);
var inst_19399 = (state_19422[(7)]);
var inst_19406 = cljs.core._EQ_.call(null,inst_19402,inst_19399);
var state_19422__$1 = state_19422;
if(inst_19406){
var statearr_19435_19452 = state_19422__$1;
(statearr_19435_19452[(1)] = (8));

} else {
var statearr_19436_19453 = state_19422__$1;
(statearr_19436_19453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (10))){
var inst_19414 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19437_19454 = state_19422__$1;
(statearr_19437_19454[(2)] = inst_19414);

(statearr_19437_19454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (8))){
var inst_19399 = (state_19422[(7)]);
var tmp19434 = inst_19399;
var inst_19399__$1 = tmp19434;
var state_19422__$1 = (function (){var statearr_19438 = state_19422;
(statearr_19438[(7)] = inst_19399__$1);

return statearr_19438;
})();
var statearr_19439_19455 = state_19422__$1;
(statearr_19439_19455[(2)] = null);

(statearr_19439_19455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19440[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19440[(1)] = (1));

return statearr_19440;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19422){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19441){if((e19441 instanceof Object)){
var ex__15656__auto__ = e19441;
var statearr_19442_19456 = state_19422;
(statearr_19442_19456[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_19422;
state_19422 = G__19457;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19443 = f__15820__auto__.call(null);
(statearr_19443[(6)] = c__15819__auto___19445);

return statearr_19443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19459 = arguments.length;
switch (G__19459) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19497){
var state_val_19498 = (state_19497[(1)]);
if((state_val_19498 === (7))){
var inst_19493 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19499_19526 = state_19497__$1;
(statearr_19499_19526[(2)] = inst_19493);

(statearr_19499_19526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (1))){
var inst_19460 = (new Array(n));
var inst_19461 = inst_19460;
var inst_19462 = (0);
var state_19497__$1 = (function (){var statearr_19500 = state_19497;
(statearr_19500[(7)] = inst_19461);

(statearr_19500[(8)] = inst_19462);

return statearr_19500;
})();
var statearr_19501_19527 = state_19497__$1;
(statearr_19501_19527[(2)] = null);

(statearr_19501_19527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (4))){
var inst_19465 = (state_19497[(9)]);
var inst_19465__$1 = (state_19497[(2)]);
var inst_19466 = (inst_19465__$1 == null);
var inst_19467 = cljs.core.not.call(null,inst_19466);
var state_19497__$1 = (function (){var statearr_19502 = state_19497;
(statearr_19502[(9)] = inst_19465__$1);

return statearr_19502;
})();
if(inst_19467){
var statearr_19503_19528 = state_19497__$1;
(statearr_19503_19528[(1)] = (5));

} else {
var statearr_19504_19529 = state_19497__$1;
(statearr_19504_19529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (15))){
var inst_19487 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19505_19530 = state_19497__$1;
(statearr_19505_19530[(2)] = inst_19487);

(statearr_19505_19530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (13))){
var state_19497__$1 = state_19497;
var statearr_19506_19531 = state_19497__$1;
(statearr_19506_19531[(2)] = null);

(statearr_19506_19531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (6))){
var inst_19462 = (state_19497[(8)]);
var inst_19483 = (inst_19462 > (0));
var state_19497__$1 = state_19497;
if(cljs.core.truth_(inst_19483)){
var statearr_19507_19532 = state_19497__$1;
(statearr_19507_19532[(1)] = (12));

} else {
var statearr_19508_19533 = state_19497__$1;
(statearr_19508_19533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (3))){
var inst_19495 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19497__$1,inst_19495);
} else {
if((state_val_19498 === (12))){
var inst_19461 = (state_19497[(7)]);
var inst_19485 = cljs.core.vec.call(null,inst_19461);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19497__$1,(15),out,inst_19485);
} else {
if((state_val_19498 === (2))){
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19497__$1,(4),ch);
} else {
if((state_val_19498 === (11))){
var inst_19477 = (state_19497[(2)]);
var inst_19478 = (new Array(n));
var inst_19461 = inst_19478;
var inst_19462 = (0);
var state_19497__$1 = (function (){var statearr_19509 = state_19497;
(statearr_19509[(10)] = inst_19477);

(statearr_19509[(7)] = inst_19461);

(statearr_19509[(8)] = inst_19462);

return statearr_19509;
})();
var statearr_19510_19534 = state_19497__$1;
(statearr_19510_19534[(2)] = null);

(statearr_19510_19534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (9))){
var inst_19461 = (state_19497[(7)]);
var inst_19475 = cljs.core.vec.call(null,inst_19461);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19497__$1,(11),out,inst_19475);
} else {
if((state_val_19498 === (5))){
var inst_19465 = (state_19497[(9)]);
var inst_19470 = (state_19497[(11)]);
var inst_19461 = (state_19497[(7)]);
var inst_19462 = (state_19497[(8)]);
var inst_19469 = (inst_19461[inst_19462] = inst_19465);
var inst_19470__$1 = (inst_19462 + (1));
var inst_19471 = (inst_19470__$1 < n);
var state_19497__$1 = (function (){var statearr_19511 = state_19497;
(statearr_19511[(12)] = inst_19469);

(statearr_19511[(11)] = inst_19470__$1);

return statearr_19511;
})();
if(cljs.core.truth_(inst_19471)){
var statearr_19512_19535 = state_19497__$1;
(statearr_19512_19535[(1)] = (8));

} else {
var statearr_19513_19536 = state_19497__$1;
(statearr_19513_19536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (14))){
var inst_19490 = (state_19497[(2)]);
var inst_19491 = cljs.core.async.close_BANG_.call(null,out);
var state_19497__$1 = (function (){var statearr_19515 = state_19497;
(statearr_19515[(13)] = inst_19490);

return statearr_19515;
})();
var statearr_19516_19537 = state_19497__$1;
(statearr_19516_19537[(2)] = inst_19491);

(statearr_19516_19537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (10))){
var inst_19481 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19517_19538 = state_19497__$1;
(statearr_19517_19538[(2)] = inst_19481);

(statearr_19517_19538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (8))){
var inst_19470 = (state_19497[(11)]);
var inst_19461 = (state_19497[(7)]);
var tmp19514 = inst_19461;
var inst_19461__$1 = tmp19514;
var inst_19462 = inst_19470;
var state_19497__$1 = (function (){var statearr_19518 = state_19497;
(statearr_19518[(7)] = inst_19461__$1);

(statearr_19518[(8)] = inst_19462);

return statearr_19518;
})();
var statearr_19519_19539 = state_19497__$1;
(statearr_19519_19539[(2)] = null);

(statearr_19519_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19520[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19497){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19521){if((e19521 instanceof Object)){
var ex__15656__auto__ = e19521;
var statearr_19522_19540 = state_19497;
(statearr_19522_19540[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19541 = state_19497;
state_19497 = G__19541;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19523 = f__15820__auto__.call(null);
(statearr_19523[(6)] = c__15819__auto___19525);

return statearr_19523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19543 = arguments.length;
switch (G__19543) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15819__auto___19613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15820__auto__ = (function (){var switch__15652__auto__ = (function (state_19585){
var state_val_19586 = (state_19585[(1)]);
if((state_val_19586 === (7))){
var inst_19581 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19587_19614 = state_19585__$1;
(statearr_19587_19614[(2)] = inst_19581);

(statearr_19587_19614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (1))){
var inst_19544 = [];
var inst_19545 = inst_19544;
var inst_19546 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19585__$1 = (function (){var statearr_19588 = state_19585;
(statearr_19588[(7)] = inst_19545);

(statearr_19588[(8)] = inst_19546);

return statearr_19588;
})();
var statearr_19589_19615 = state_19585__$1;
(statearr_19589_19615[(2)] = null);

(statearr_19589_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (4))){
var inst_19549 = (state_19585[(9)]);
var inst_19549__$1 = (state_19585[(2)]);
var inst_19550 = (inst_19549__$1 == null);
var inst_19551 = cljs.core.not.call(null,inst_19550);
var state_19585__$1 = (function (){var statearr_19590 = state_19585;
(statearr_19590[(9)] = inst_19549__$1);

return statearr_19590;
})();
if(inst_19551){
var statearr_19591_19616 = state_19585__$1;
(statearr_19591_19616[(1)] = (5));

} else {
var statearr_19592_19617 = state_19585__$1;
(statearr_19592_19617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (15))){
var inst_19575 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19593_19618 = state_19585__$1;
(statearr_19593_19618[(2)] = inst_19575);

(statearr_19593_19618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (13))){
var state_19585__$1 = state_19585;
var statearr_19594_19619 = state_19585__$1;
(statearr_19594_19619[(2)] = null);

(statearr_19594_19619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (6))){
var inst_19545 = (state_19585[(7)]);
var inst_19570 = inst_19545.length;
var inst_19571 = (inst_19570 > (0));
var state_19585__$1 = state_19585;
if(cljs.core.truth_(inst_19571)){
var statearr_19595_19620 = state_19585__$1;
(statearr_19595_19620[(1)] = (12));

} else {
var statearr_19596_19621 = state_19585__$1;
(statearr_19596_19621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (3))){
var inst_19583 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19585__$1,inst_19583);
} else {
if((state_val_19586 === (12))){
var inst_19545 = (state_19585[(7)]);
var inst_19573 = cljs.core.vec.call(null,inst_19545);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(15),out,inst_19573);
} else {
if((state_val_19586 === (2))){
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19585__$1,(4),ch);
} else {
if((state_val_19586 === (11))){
var inst_19549 = (state_19585[(9)]);
var inst_19553 = (state_19585[(10)]);
var inst_19563 = (state_19585[(2)]);
var inst_19564 = [];
var inst_19565 = inst_19564.push(inst_19549);
var inst_19545 = inst_19564;
var inst_19546 = inst_19553;
var state_19585__$1 = (function (){var statearr_19597 = state_19585;
(statearr_19597[(11)] = inst_19565);

(statearr_19597[(12)] = inst_19563);

(statearr_19597[(7)] = inst_19545);

(statearr_19597[(8)] = inst_19546);

return statearr_19597;
})();
var statearr_19598_19622 = state_19585__$1;
(statearr_19598_19622[(2)] = null);

(statearr_19598_19622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (9))){
var inst_19545 = (state_19585[(7)]);
var inst_19561 = cljs.core.vec.call(null,inst_19545);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(11),out,inst_19561);
} else {
if((state_val_19586 === (5))){
var inst_19549 = (state_19585[(9)]);
var inst_19553 = (state_19585[(10)]);
var inst_19546 = (state_19585[(8)]);
var inst_19553__$1 = f.call(null,inst_19549);
var inst_19554 = cljs.core._EQ_.call(null,inst_19553__$1,inst_19546);
var inst_19555 = cljs.core.keyword_identical_QMARK_.call(null,inst_19546,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19556 = ((inst_19554) || (inst_19555));
var state_19585__$1 = (function (){var statearr_19599 = state_19585;
(statearr_19599[(10)] = inst_19553__$1);

return statearr_19599;
})();
if(cljs.core.truth_(inst_19556)){
var statearr_19600_19623 = state_19585__$1;
(statearr_19600_19623[(1)] = (8));

} else {
var statearr_19601_19624 = state_19585__$1;
(statearr_19601_19624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (14))){
var inst_19578 = (state_19585[(2)]);
var inst_19579 = cljs.core.async.close_BANG_.call(null,out);
var state_19585__$1 = (function (){var statearr_19603 = state_19585;
(statearr_19603[(13)] = inst_19578);

return statearr_19603;
})();
var statearr_19604_19625 = state_19585__$1;
(statearr_19604_19625[(2)] = inst_19579);

(statearr_19604_19625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (10))){
var inst_19568 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19605_19626 = state_19585__$1;
(statearr_19605_19626[(2)] = inst_19568);

(statearr_19605_19626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (8))){
var inst_19549 = (state_19585[(9)]);
var inst_19553 = (state_19585[(10)]);
var inst_19545 = (state_19585[(7)]);
var inst_19558 = inst_19545.push(inst_19549);
var tmp19602 = inst_19545;
var inst_19545__$1 = tmp19602;
var inst_19546 = inst_19553;
var state_19585__$1 = (function (){var statearr_19606 = state_19585;
(statearr_19606[(14)] = inst_19558);

(statearr_19606[(7)] = inst_19545__$1);

(statearr_19606[(8)] = inst_19546);

return statearr_19606;
})();
var statearr_19607_19627 = state_19585__$1;
(statearr_19607_19627[(2)] = null);

(statearr_19607_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$state_machine__15653__auto__ = null;
var cljs$core$async$state_machine__15653__auto____0 = (function (){
var statearr_19608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19608[(0)] = cljs$core$async$state_machine__15653__auto__);

(statearr_19608[(1)] = (1));

return statearr_19608;
});
var cljs$core$async$state_machine__15653__auto____1 = (function (state_19585){
while(true){
var ret_value__15654__auto__ = (function (){try{while(true){
var result__15655__auto__ = switch__15652__auto__.call(null,state_19585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15655__auto__;
}
break;
}
}catch (e19609){if((e19609 instanceof Object)){
var ex__15656__auto__ = e19609;
var statearr_19610_19628 = state_19585;
(statearr_19610_19628[(5)] = ex__15656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19629 = state_19585;
state_19585 = G__19629;
continue;
} else {
return ret_value__15654__auto__;
}
break;
}
});
cljs$core$async$state_machine__15653__auto__ = function(state_19585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15653__auto____1.call(this,state_19585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15653__auto____0;
cljs$core$async$state_machine__15653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15653__auto____1;
return cljs$core$async$state_machine__15653__auto__;
})()
})();
var state__15821__auto__ = (function (){var statearr_19611 = f__15820__auto__.call(null);
(statearr_19611[(6)] = c__15819__auto___19613);

return statearr_19611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
