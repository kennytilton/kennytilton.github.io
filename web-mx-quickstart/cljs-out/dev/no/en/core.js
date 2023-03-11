// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$amqp,(5672),cljs.core.cst$kw$http,(80),cljs.core.cst$kw$https,(443),cljs.core.cst$kw$mysql,(3306),cljs.core.cst$kw$postgresql,(5432),cljs.core.cst$kw$rabbitmq,(5672),cljs.core.cst$kw$zookeeper,(2181)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@\/]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?#]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
 * Split the string `s` by the regex `pattern`.
 */
no.en.core.split_by_regex = (function no$en$core$split_by_regex(s,pattern){
if(cljs.core.sequential_QMARK_(s)){
return s;
} else {
if((!(clojure.string.blank_QMARK_(s)))){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else {
return null;
}
}
});
/**
 * Split the string `s` by comma.
 */
no.en.core.split_by_comma = (function no$en$core$split_by_comma(s){
return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
 * Returns `bytes` as an UTF-8 encoded string.
 */
no.en.core.utf8_string = (function no$en$core$utf8_string(bytes){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
 * Returns `s` as a Base64 encoded string.
 */
no.en.core.base64_encode = (function no$en$core$base64_encode(bytes){
if(cljs.core.truth_(bytes)){
return goog.crypt.base64.encodeString(bytes,false);
} else {
return null;
}
});
/**
 * Returns `s` as a Base64 decoded string.
 */
no.en.core.base64_decode = (function no$en$core$base64_decode(s){
if(cljs.core.truth_(s)){
return goog.crypt.base64.decodeString(s,false);
} else {
return null;
}
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
no.en.core.compact_map = (function no$en$core$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if((((v == null)) || (((((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v)))) && (cljs.core.empty_QMARK_(v)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Returns `s` as an URL encoded string.
 */
no.en.core.url_encode = (function no$en$core$url_encode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21350 = arguments.length;
var i__4737__auto___21351 = (0);
while(true){
if((i__4737__auto___21351 < len__4736__auto___21350)){
args__4742__auto__.push((arguments[i__4737__auto___21351]));

var G__21352 = (i__4737__auto___21351 + (1));
i__4737__auto___21351 = G__21352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21346){
var vec__21347 = p__21346;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(0),null);
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),"*","%2A");
} else {
return null;
}
}));

(no.en.core.url_encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_encode.cljs$lang$applyTo = (function (seq21344){
var G__21345 = cljs.core.first(seq21344);
var seq21344__$1 = cljs.core.next(seq21344);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21345,seq21344__$1);
}));

/**
 * Returns `s` as an URL decoded string.
 */
no.en.core.url_decode = (function no$en$core$url_decode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21359 = arguments.length;
var i__4737__auto___21360 = (0);
while(true){
if((i__4737__auto___21360 < len__4736__auto___21359)){
args__4742__auto__.push((arguments[i__4737__auto___21360]));

var G__21361 = (i__4737__auto___21360 + (1));
i__4737__auto___21360 = G__21361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21355){
var vec__21356 = p__21355;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
}));

(no.en.core.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.url_decode.cljs$lang$applyTo = (function (seq21353){
var G__21354 = cljs.core.first(seq21353);
var seq21353__$1 = cljs.core.next(seq21353);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21354,seq21353__$1);
}));

/**
 * Try to URL decode the string `s`.
 */
no.en.core.try_url_decode = (function no$en$core$try_url_decode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21369 = arguments.length;
var i__4737__auto___21370 = (0);
while(true){
if((i__4737__auto___21370 < len__4736__auto___21369)){
args__4742__auto__.push((arguments[i__4737__auto___21370]));

var G__21371 = (i__4737__auto___21370 + (1));
i__4737__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.try_url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.try_url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21364){
var vec__21365 = p__21364;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21365,(0),null);
try{return no.en.core.url_decode.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0));
}catch (e21368){if((e21368 instanceof Error)){
var _ = e21368;
return s;
} else {
throw e21368;

}
}}));

(no.en.core.try_url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.try_url_decode.cljs$lang$applyTo = (function (seq21362){
var G__21363 = cljs.core.first(seq21362);
var seq21362__$1 = cljs.core.next(seq21362);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21363,seq21362__$1);
}));

no.en.core.pow = (function no$en$core$pow(n,x){
return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function no$en$core$apply_unit(number,unit){
if(typeof unit === 'string'){
var G__21372 = clojure.string.upper_case(unit);
switch (G__21372) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
return number;

}
} else {
return number;
}
});
no.en.core.parse_number = (function no$en$core$parse_number(s,parse_fn){
var temp__5802__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
var number = (function (){var G__21374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__21374) : parse_fn.call(null,G__21374));
})();
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
if(cljs.core.not(isNaN(number))){
return no.en.core.apply_unit(number,unit);
} else {
return null;
}
} else {
return null;
}
});
no.en.core.parse_bytes = (function no$en$core$parse_bytes(s){
var temp__5802__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
var number = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));
return cljs.core.long$((cljs.core.long$(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__4126__auto__ = unit;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()),(1))));
} else {
return null;
}
});
/**
 * Parse `s` as a integer number.
 */
no.en.core.parse_integer = (function no$en$core$parse_integer(s){
return no.en.core.parse_number(s,(function (p1__21375_SHARP_){
return parseInt(p1__21375_SHARP_);
}));
});
/**
 * Parse `s` as a long number.
 */
no.en.core.parse_long = (function no$en$core$parse_long(s){
return no.en.core.parse_number(s,(function (p1__21376_SHARP_){
return parseInt(p1__21376_SHARP_);
}));
});
/**
 * Parse `s` as a double number.
 */
no.en.core.parse_double = (function no$en$core$parse_double(s){
return no.en.core.parse_number(s,(function (p1__21377_SHARP_){
return parseFloat(p1__21377_SHARP_);
}));
});
/**
 * Parse `s` as a float number.
 */
no.en.core.parse_float = (function no$en$core$parse_float(s){
return no.en.core.parse_number(s,(function (p1__21378_SHARP_){
return parseFloat(p1__21378_SHARP_);
}));
});
/**
 * Format the map `m` into a query parameter string.
 */
no.en.core.format_query_params = (function no$en$core$format_query_params(m){
var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21381_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__21381_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21380_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__21380_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__21380_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21379_SHARP_){
return clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21379_SHARP_)));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(m))))));
if((!(clojure.string.blank_QMARK_(params)))){
return params;
} else {
return null;
}
});
/**
 * Format the Ring map as an url.
 */
no.en.core.format_url = (function no$en$core$format_url(m){
if((!(cljs.core.empty_QMARK_(m)))){
var query_params = cljs.core.cst$kw$query_DASH_params.cljs$core$IFn$_invoke$arity$1(m);
return [(cljs.core.truth_(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m))?[cljs.core.name(cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m)),"://"].join(''):null),(function (){var map__21385 = m;
var map__21385__$1 = (((((!((map__21385 == null))))?(((((map__21385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$username);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$password);
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),(cljs.core.truth_(password)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''):null),"@"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$server_DASH_name.cljs$core$IFn$_invoke$arity$1(m)),(function (){var temp__5802__auto__ = cljs.core.cst$kw$server_DASH_port.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var port = temp__5802__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__21387 = cljs.core.cst$kw$scheme.cljs$core$IFn$_invoke$arity$1(m);
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__21387) : no.en.core.port_number.call(null,G__21387));
})())))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m) == null)) && ((!(cljs.core.empty_QMARK_(query_params))))))?"/":cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(m))),(((!(cljs.core.empty_QMARK_(query_params))))?["?",no.en.core.format_query_params(query_params)].join(''):null),(((!(clojure.string.blank_QMARK_(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m)))))?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(m))].join(''):null)].join('');
} else {
return null;
}
});
/**
 * Return the formatted `url` without password as a string.
 */
no.en.core.public_url = (function no$en$core$public_url(url){
return no.en.core.format_url(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(url,cljs.core.cst$kw$password));
});
/**
 * Parse `s` as a percentage.
 */
no.en.core.parse_percent = (function no$en$core$parse_percent(s){
return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
 * Quote the special characters in `s` that are used in regular expressions.
 */
no.en.core.pattern_quote = (function no$en$core$pattern_quote(s){
return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
 * Returns the first string that separates the components in `s`.
 */
no.en.core.separator = (function no$en$core$separator(s){
var temp__5802__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else {
return null;
}
});
/**
 * Parse the query parameter string `s` and return a map.
 */
no.en.core.parse_query_params = (function no$en$core$parse_query_params(s){
if(cljs.core.truth_(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__21390_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__21390_SHARP_)),cljs.core.second(p1__21390_SHARP_)],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21389_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__21389_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21388_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__21388_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.try_url_decode(s)),/&/)))], 0)));
} else {
return null;
}
});
/**
 * Parse the url `s` and return a Ring compatible map.
 */
no.en.core.parse_url = (function no$en$core$parse_url(s){
var temp__5802__auto__ = cljs.core.re_matches(no.en.core.url_regex,no.en.core.try_url_decode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));
return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$password,cljs.core.cst$kw$fragment,cljs.core.cst$kw$username,cljs.core.cst$kw$server_DASH_port,cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$uri,cljs.core.cst$kw$server_DASH_name,cljs.core.cst$kw$query_DASH_string,cljs.core.cst$kw$scheme],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),(function (){var or__4126__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(scheme) : no.en.core.port_number.call(null,scheme));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),scheme]));
} else {
return null;
}
});
var ret__4785__auto___21395 = (function (){
/**
 * Evaluate `body`, returning the result of the first form.
 */
no.en.core.prog1 = (function no$en$core$prog1(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21396 = arguments.length;
var i__4737__auto___21397 = (0);
while(true){
if((i__4737__auto___21397 < len__4736__auto___21396)){
args__4742__auto__.push((arguments[i__4737__auto___21397]));

var G__21398 = (i__4737__auto___21397 + (1));
i__4737__auto___21397 = G__21398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(no.en.core.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$result__21391__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,cljs.core.cst$sym$result__21391__auto__,null,(1),null))], 0))));
}));

(no.en.core.prog1.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(no.en.core.prog1.cljs$lang$applyTo = (function (seq21392){
var G__21393 = cljs.core.first(seq21392);
var seq21392__$1 = cljs.core.next(seq21392);
var G__21394 = cljs.core.first(seq21392__$1);
var seq21392__$2 = cljs.core.next(seq21392__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21393,G__21394,seq21392__$2);
}));

return null;
})()
;
(no.en.core.prog1.cljs$lang$macro = true);

/**
 * Executes thunk. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries_STAR_ = (function no$en$core$with_retries_STAR_(n,thunk){
var n__$1 = n;
while(true){
var temp__5802__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null))], null);
}catch (e21399){if((e21399 instanceof Error)){
var e = e21399;
if((n__$1 === (0))){
throw e;
} else {
return null;
}
} else {
throw e21399;

}
}})();
if(cljs.core.truth_(temp__5802__auto__)){
var result = temp__5802__auto__;
return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((0)) : result.call(null,(0)));
} else {
var G__21400 = (n__$1 - (1));
n__$1 = G__21400;
continue;
}
break;
}
});
var ret__4785__auto___21405 = (function (){
/**
 * Executes body. If an exception is thrown, will retry. At most n retries
 *   are done. If still some exception is thrown it is bubbled upwards in
 *   the call chain.
 */
no.en.core.with_retries = (function no$en$core$with_retries(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21406 = arguments.length;
var i__4737__auto___21407 = (0);
while(true){
if((i__4737__auto___21407 < len__4736__auto___21406)){
args__4742__auto__.push((arguments[i__4737__auto___21407]));

var G__21408 = (i__4737__auto___21407 + (1));
i__4737__auto___21407 = G__21408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(no.en.core.with_retries.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$no$en$core_SLASH_with_DASH_retries_STAR_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(no.en.core.with_retries.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(no.en.core.with_retries.cljs$lang$applyTo = (function (seq21401){
var G__21402 = cljs.core.first(seq21401);
var seq21401__$1 = cljs.core.next(seq21401);
var G__21403 = cljs.core.first(seq21401__$1);
var seq21401__$2 = cljs.core.next(seq21401__$1);
var G__21404 = cljs.core.first(seq21401__$2);
var seq21401__$3 = cljs.core.next(seq21401__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21402,G__21403,G__21404,seq21401__$3);
}));

return null;
})()
;
(no.en.core.with_retries.cljs$lang$macro = true);

no.en.core.editable_QMARK_ = (function no$en$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
no.en.core.reduce_map = (function no$en$core$reduce_map(f,coll){
if(no.en.core.editable_QMARK_(coll)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll)),coll));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll),coll);
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
no.en.core.map_keys = (function no$en$core$map_keys(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21410 = m;
var G__21411 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__21412 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21410,G__21411,G__21412) : xf.call(null,G__21410,G__21411,G__21412));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
no.en.core.map_vals = (function no$en$core$map_vals(f,coll){
return no.en.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21413 = m;
var G__21414 = k;
var G__21415 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21413,G__21414,G__21415) : xf.call(null,G__21413,G__21414,G__21415));
});
}),coll);
});
/**
 * Like merge, but merges maps recursively.
 */
no.en.core.deep_merge = (function no$en$core$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21417 = arguments.length;
var i__4737__auto___21418 = (0);
while(true){
if((i__4737__auto___21418 < len__4736__auto___21417)){
args__4742__auto__.push((arguments[i__4737__auto___21418]));

var G__21419 = (i__4737__auto___21418 + (1));
i__4737__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(no.en.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no.en.core.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
}));

(no.en.core.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(no.en.core.deep_merge.cljs$lang$applyTo = (function (seq21416){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21416));
}));

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
no.en.core.deep_merge_with = (function no$en$core$deep_merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21422 = arguments.length;
var i__4737__auto___21423 = (0);
while(true){
if((i__4737__auto___21423 < len__4736__auto___21422)){
args__4742__auto__.push((arguments[i__4737__auto___21423]));

var G__21424 = (i__4737__auto___21423 + (1));
i__4737__auto___21423 = G__21424;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(no.en.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var no$en$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,no$en$core$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var no$en$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__21425__i = 0, G__21425__a = new Array(arguments.length -  0);
while (G__21425__i < G__21425__a.length) {G__21425__a[G__21425__i] = arguments[G__21425__i + 0]; ++G__21425__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__21425__a,0,null);
} 
return no$en$core$m__delegate.call(this,maps__$1);};
no$en$core$m.cljs$lang$maxFixedArity = 0;
no$en$core$m.cljs$lang$applyTo = (function (arglist__21426){
var maps__$1 = cljs.core.seq(arglist__21426);
return no$en$core$m__delegate(maps__$1);
});
no$en$core$m.cljs$core$IFn$_invoke$arity$variadic = no$en$core$m__delegate;
return no$en$core$m;
})()
,maps);
}));

(no.en.core.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(no.en.core.deep_merge_with.cljs$lang$applyTo = (function (seq21420){
var G__21421 = cljs.core.first(seq21420);
var seq21420__$1 = cljs.core.next(seq21420);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21421,seq21420__$1);
}));

