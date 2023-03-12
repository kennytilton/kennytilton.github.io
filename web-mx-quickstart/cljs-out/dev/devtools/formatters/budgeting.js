// Compiled by ClojureScript 1.10.773 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__27407__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27407__auto__["add"]).call(o__27407__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__27407__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27407__auto__["delete"]).call(o__27407__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__27407__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27407__auto__["has"]).call(o__27407__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__51137 = data;
var target__27412__auto__ = G__51137;
if(cljs.core.truth_(target__27412__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51137)].join(''),"\n","target__27412__auto__"].join('')));
}

(target__27412__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__51137;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_51142 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_51142);
} else {
var seq__51138_51143 = cljs.core.seq.call(null,json_ml);
var chunk__51139_51144 = null;
var count__51140_51145 = (0);
var i__51141_51146 = (0);
while(true){
if((i__51141_51146 < count__51140_51145)){
var item_51147 = cljs.core._nth.call(null,chunk__51139_51144,i__51141_51146);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_51147,new_depth_budget_51142);


var G__51148 = seq__51138_51143;
var G__51149 = chunk__51139_51144;
var G__51150 = count__51140_51145;
var G__51151 = (i__51141_51146 + (1));
seq__51138_51143 = G__51148;
chunk__51139_51144 = G__51149;
count__51140_51145 = G__51150;
i__51141_51146 = G__51151;
continue;
} else {
var temp__5804__auto___51152 = cljs.core.seq.call(null,seq__51138_51143);
if(temp__5804__auto___51152){
var seq__51138_51153__$1 = temp__5804__auto___51152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51138_51153__$1)){
var c__4556__auto___51154 = cljs.core.chunk_first.call(null,seq__51138_51153__$1);
var G__51155 = cljs.core.chunk_rest.call(null,seq__51138_51153__$1);
var G__51156 = c__4556__auto___51154;
var G__51157 = cljs.core.count.call(null,c__4556__auto___51154);
var G__51158 = (0);
seq__51138_51143 = G__51155;
chunk__51139_51144 = G__51156;
count__51140_51145 = G__51157;
i__51141_51146 = G__51158;
continue;
} else {
var item_51159 = cljs.core.first.call(null,seq__51138_51153__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_51159,new_depth_budget_51142);


var G__51160 = cljs.core.next.call(null,seq__51138_51153__$1);
var G__51161 = null;
var G__51162 = (0);
var G__51163 = (0);
seq__51138_51143 = G__51160;
chunk__51139_51144 = G__51161;
count__51140_51145 = G__51162;
i__51141_51146 = G__51163;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
