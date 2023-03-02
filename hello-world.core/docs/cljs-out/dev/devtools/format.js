// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_10881 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._header[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._header["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_10881.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_10882 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._has_body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._has_body["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_10882.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_10883 = (function (value){
var x__4550__auto__ = (((value == null))?null:value);
var m__4551__auto__ = (devtools.format._body[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,value);
} else {
var m__4549__auto__ = (devtools.format._body["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_10883.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10884 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10884["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10885 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10885["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10886 = temp__5718__auto____$2;
return (o10886["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10887 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10887["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10888 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10888["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10889 = temp__5718__auto____$2;
return (o10889["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10890 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10890["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10891 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10891["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10892 = temp__5718__auto____$2;
return (o10892["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10893 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10893["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10894 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10894["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10895 = temp__5718__auto____$2;
return (o10895["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10896 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10896["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10897 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10897["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10898 = temp__5718__auto____$2;
return (o10898["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10899 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10899["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10900 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10900["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10901 = temp__5718__auto____$2;
return (o10901["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o10902 = temp__5718__auto__;
var temp__5718__auto____$1 = (o10902["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o10903 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o10903["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o10904 = temp__5718__auto____$2;
return (o10904["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10906 = arguments.length;
var i__4865__auto___10907 = (0);
while(true){
if((i__4865__auto___10907 < len__4864__auto___10906)){
args__4870__auto__.push((arguments[i__4865__auto___10907]));

var G__10908 = (i__4865__auto___10907 + (1));
i__4865__auto___10907 = G__10908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq10905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10905));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10910 = arguments.length;
var i__4865__auto___10911 = (0);
while(true){
if((i__4865__auto___10911 < len__4864__auto___10910)){
args__4870__auto__.push((arguments[i__4865__auto___10911]));

var G__10912 = (i__4865__auto___10911 + (1));
i__4865__auto___10911 = G__10912;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq10909){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10909));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10914 = arguments.length;
var i__4865__auto___10915 = (0);
while(true){
if((i__4865__auto___10915 < len__4864__auto___10914)){
args__4870__auto__.push((arguments[i__4865__auto___10915]));

var G__10916 = (i__4865__auto___10915 + (1));
i__4865__auto___10915 = G__10916;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq10913){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10913));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10918 = arguments.length;
var i__4865__auto___10919 = (0);
while(true){
if((i__4865__auto___10919 < len__4864__auto___10918)){
args__4870__auto__.push((arguments[i__4865__auto___10919]));

var G__10920 = (i__4865__auto___10919 + (1));
i__4865__auto___10919 = G__10920;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq10917){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10917));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10922 = arguments.length;
var i__4865__auto___10923 = (0);
while(true){
if((i__4865__auto___10923 < len__4864__auto___10922)){
args__4870__auto__.push((arguments[i__4865__auto___10923]));

var G__10924 = (i__4865__auto___10923 + (1));
i__4865__auto___10923 = G__10924;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq10921){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10921));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10926 = arguments.length;
var i__4865__auto___10927 = (0);
while(true){
if((i__4865__auto___10927 < len__4864__auto___10926)){
args__4870__auto__.push((arguments[i__4865__auto___10927]));

var G__10928 = (i__4865__auto___10927 + (1));
i__4865__auto___10927 = G__10928;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq10925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10925));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10930 = arguments.length;
var i__4865__auto___10931 = (0);
while(true){
if((i__4865__auto___10931 < len__4864__auto___10930)){
args__4870__auto__.push((arguments[i__4865__auto___10931]));

var G__10932 = (i__4865__auto___10931 + (1));
i__4865__auto___10931 = G__10932;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq10929){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10929));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10940 = arguments.length;
var i__4865__auto___10941 = (0);
while(true){
if((i__4865__auto___10941 < len__4864__auto___10940)){
args__4870__auto__.push((arguments[i__4865__auto___10941]));

var G__10942 = (i__4865__auto___10941 + (1));
i__4865__auto___10941 = G__10942;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__10936){
var vec__10937 = p__10936;
var state_override = cljs.core.nth.call(null,vec__10937,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__10933_SHARP_){
return cljs.core.merge.call(null,p1__10933_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq10934){
var G__10935 = cljs.core.first.call(null,seq10934);
var seq10934__$1 = cljs.core.next.call(null,seq10934);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10935,seq10934__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10944 = arguments.length;
var i__4865__auto___10945 = (0);
while(true){
if((i__4865__auto___10945 < len__4864__auto___10944)){
args__4870__auto__.push((arguments[i__4865__auto___10945]));

var G__10946 = (i__4865__auto___10945 + (1));
i__4865__auto___10945 = G__10946;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq10943){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10943));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10949 = arguments.length;
var i__4865__auto___10950 = (0);
while(true){
if((i__4865__auto___10950 < len__4864__auto___10949)){
args__4870__auto__.push((arguments[i__4865__auto___10950]));

var G__10951 = (i__4865__auto___10950 + (1));
i__4865__auto___10950 = G__10951;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq10947){
var G__10948 = cljs.core.first.call(null,seq10947);
var seq10947__$1 = cljs.core.next.call(null,seq10947);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10948,seq10947__$1);
}));


//# sourceMappingURL=format.js.map
