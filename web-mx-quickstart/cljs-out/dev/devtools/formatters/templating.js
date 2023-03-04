// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x30083_30084 = value;
(x30083_30084.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x30086_30087 = value;
(x30086_30087.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x30089_30090 = value;
(x30089_30090.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30097 = arguments.length;
var i__4737__auto___30098 = (0);
while(true){
if((i__4737__auto___30098 < len__4736__auto___30097)){
args__4742__auto__.push((arguments[i__4737__auto___30098]));

var G__30099 = (i__4737__auto___30098 + (1));
i__4737__auto___30098 = G__30099;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__30093_30100 = cljs.core.seq.call(null,items);
var chunk__30094_30101 = null;
var count__30095_30102 = (0);
var i__30096_30103 = (0);
while(true){
if((i__30096_30103 < count__30095_30102)){
var item_30104 = cljs.core._nth.call(null,chunk__30094_30101,i__30096_30103);
if((!((item_30104 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30104)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30104)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30104));
}
} else {
}


var G__30105 = seq__30093_30100;
var G__30106 = chunk__30094_30101;
var G__30107 = count__30095_30102;
var G__30108 = (i__30096_30103 + (1));
seq__30093_30100 = G__30105;
chunk__30094_30101 = G__30106;
count__30095_30102 = G__30107;
i__30096_30103 = G__30108;
continue;
} else {
var temp__5804__auto___30109 = cljs.core.seq.call(null,seq__30093_30100);
if(temp__5804__auto___30109){
var seq__30093_30110__$1 = temp__5804__auto___30109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30093_30110__$1)){
var c__4556__auto___30111 = cljs.core.chunk_first.call(null,seq__30093_30110__$1);
var G__30112 = cljs.core.chunk_rest.call(null,seq__30093_30110__$1);
var G__30113 = c__4556__auto___30111;
var G__30114 = cljs.core.count.call(null,c__4556__auto___30111);
var G__30115 = (0);
seq__30093_30100 = G__30112;
chunk__30094_30101 = G__30113;
count__30095_30102 = G__30114;
i__30096_30103 = G__30115;
continue;
} else {
var item_30116 = cljs.core.first.call(null,seq__30093_30110__$1);
if((!((item_30116 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30116)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30116)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30116));
}
} else {
}


var G__30117 = cljs.core.next.call(null,seq__30093_30110__$1);
var G__30118 = null;
var G__30119 = (0);
var G__30120 = (0);
seq__30093_30100 = G__30117;
chunk__30094_30101 = G__30118;
count__30095_30102 = G__30119;
i__30096_30103 = G__30120;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq30092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30092));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30128 = arguments.length;
var i__4737__auto___30129 = (0);
while(true){
if((i__4737__auto___30129 < len__4736__auto___30128)){
args__4742__auto__.push((arguments[i__4737__auto___30129]));

var G__30130 = (i__4737__auto___30129 + (1));
i__4737__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__30124_30131 = cljs.core.seq.call(null,children);
var chunk__30125_30132 = null;
var count__30126_30133 = (0);
var i__30127_30134 = (0);
while(true){
if((i__30127_30134 < count__30126_30133)){
var child_30135 = cljs.core._nth.call(null,chunk__30125_30132,i__30127_30134);
if((!((child_30135 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30135)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30135))));
} else {
var temp__5802__auto___30136 = devtools.formatters.helpers.pref.call(null,child_30135);
if(cljs.core.truth_(temp__5802__auto___30136)){
var child_value_30137 = temp__5802__auto___30136;
template.push(child_value_30137);
} else {
}
}
} else {
}


var G__30138 = seq__30124_30131;
var G__30139 = chunk__30125_30132;
var G__30140 = count__30126_30133;
var G__30141 = (i__30127_30134 + (1));
seq__30124_30131 = G__30138;
chunk__30125_30132 = G__30139;
count__30126_30133 = G__30140;
i__30127_30134 = G__30141;
continue;
} else {
var temp__5804__auto___30142 = cljs.core.seq.call(null,seq__30124_30131);
if(temp__5804__auto___30142){
var seq__30124_30143__$1 = temp__5804__auto___30142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30124_30143__$1)){
var c__4556__auto___30144 = cljs.core.chunk_first.call(null,seq__30124_30143__$1);
var G__30145 = cljs.core.chunk_rest.call(null,seq__30124_30143__$1);
var G__30146 = c__4556__auto___30144;
var G__30147 = cljs.core.count.call(null,c__4556__auto___30144);
var G__30148 = (0);
seq__30124_30131 = G__30145;
chunk__30125_30132 = G__30146;
count__30126_30133 = G__30147;
i__30127_30134 = G__30148;
continue;
} else {
var child_30149 = cljs.core.first.call(null,seq__30124_30143__$1);
if((!((child_30149 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30149)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30149))));
} else {
var temp__5802__auto___30150 = devtools.formatters.helpers.pref.call(null,child_30149);
if(cljs.core.truth_(temp__5802__auto___30150)){
var child_value_30151 = temp__5802__auto___30150;
template.push(child_value_30151);
} else {
}
}
} else {
}


var G__30152 = cljs.core.next.call(null,seq__30124_30143__$1);
var G__30153 = null;
var G__30154 = (0);
var G__30155 = (0);
seq__30124_30131 = G__30152;
chunk__30125_30132 = G__30153;
count__30126_30133 = G__30154;
i__30127_30134 = G__30155;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq30121){
var G__30122 = cljs.core.first.call(null,seq30121);
var seq30121__$1 = cljs.core.next.call(null,seq30121);
var G__30123 = cljs.core.first.call(null,seq30121__$1);
var seq30121__$2 = cljs.core.next.call(null,seq30121__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30122,G__30123,seq30121__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30158 = arguments.length;
var i__4737__auto___30159 = (0);
while(true){
if((i__4737__auto___30159 < len__4736__auto___30158)){
args__4742__auto__.push((arguments[i__4737__auto___30159]));

var G__30160 = (i__4737__auto___30159 + (1));
i__4737__auto___30159 = G__30160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq30156){
var G__30157 = cljs.core.first.call(null,seq30156);
var seq30156__$1 = cljs.core.next.call(null,seq30156);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30157,seq30156__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30163 = arguments.length;
var i__4737__auto___30164 = (0);
while(true){
if((i__4737__auto___30164 < len__4736__auto___30163)){
args__4742__auto__.push((arguments[i__4737__auto___30164]));

var G__30165 = (i__4737__auto___30164 + (1));
i__4737__auto___30164 = G__30165;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq30161){
var G__30162 = cljs.core.first.call(null,seq30161);
var seq30161__$1 = cljs.core.next.call(null,seq30161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30162,seq30161__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__30167 = arguments.length;
switch (G__30167) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj30169 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj30169;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30177 = arguments.length;
var i__4737__auto___30178 = (0);
while(true){
if((i__4737__auto___30178 < len__4736__auto___30177)){
args__4742__auto__.push((arguments[i__4737__auto___30178]));

var G__30179 = (i__4737__auto___30178 + (1));
i__4737__auto___30178 = G__30179;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30173){
var vec__30174 = p__30173;
var state_override_fn = cljs.core.nth.call(null,vec__30174,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq30171){
var G__30172 = cljs.core.first.call(null,seq30171);
var seq30171__$1 = cljs.core.next.call(null,seq30171);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30172,seq30171__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.call(null,devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js.call(null,data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__30180 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30181 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30181);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30180);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__30182 = name;
switch (G__30182) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
case "annotation":
var data = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return devtools.formatters.templating.make_annotation.call(null,data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__30184 = tag;
var html_tag = cljs.core.nth.call(null,vec__30184,(0),null);
var style = cljs.core.nth.call(null,vec__30184,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__30187 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__30188 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30188);

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30187);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__30189 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__30190 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__30191 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__30192 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__30191);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30192);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30190);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__30189);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__30193 = initial_value;
var G__30194 = value.call(null);
initial_value = G__30193;
value = G__30194;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__30195 = initial_value;
var G__30196 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__30195;
value = G__30196;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__30197 = initial_value;
var G__30198 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__30197;
value = G__30198;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
