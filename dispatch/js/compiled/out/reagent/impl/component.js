// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_(c)) && (cljs.core.some_QMARK_((c["cljsReactClass"])));
});
reagent.impl.component.do_render_sub = (function reagent$impl$component$do_render_sub(c){
while(true){
var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c)):(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__17632 = n;
switch (G__17632) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__17633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17633) : f.call(null,G__17633));

break;
case (3):
var G__17634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17634,G__17635) : f.call(null,G__17634,G__17635));

break;
case (4):
var G__17636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__17638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17636,G__17637,G__17638) : f.call(null,G__17636,G__17637,G__17638));

break;
case (5):
var G__17639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__17641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__17642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17639,G__17640,G__17641,G__17642) : f.call(null,G__17639,G__17640,G__17641,G__17642));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = (cljs.core.truth_(reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,p,res){
return (function() { 
var G__17644__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__17644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17645__i = 0, G__17645__a = new Array(arguments.length -  0);
while (G__17645__i < G__17645__a.length) {G__17645__a[G__17645__i] = arguments[G__17645__i + 0]; ++G__17645__i;}
  args = new cljs.core.IndexedSeq(G__17645__a,0);
} 
return G__17644__delegate.call(this,args);};
G__17644.cljs$lang$maxFixedArity = 0;
G__17644.cljs$lang$applyTo = (function (arglist__17646){
var args = cljs.core.seq(arglist__17646);
return G__17644__delegate(args);
});
G__17644.cljs$core$IFn$_invoke$arity$variadic = G__17644__delegate;
return G__17644;
})()
;})(c,f,_,p,res))
:res);
(c["cljsRender"] = f__$1);

var G__17647 = c;
c = G__17647;
continue;
} else {
return res;
}
}
break;
}
});
reagent.impl.component.comp_name;
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_17650 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = reagent.impl.component.do_render_sub(c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
var G__17651_17652 = [cljs.core.str("Error rendering component "),cljs.core.str((reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0 ? reagent.impl.component.comp_name.cljs$core$IFn$_invoke$arity$0() : reagent.impl.component.comp_name.call(null)))].join('');
console.error(G__17651_17652);
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_17650;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__17662 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__17662) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__17662){
return (function (){
var c = this;
var G__17663 = reagent.impl.component.state_atom(c);
var G__17664 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17663,G__17664) : cljs.core.reset_BANG_.call(null,G__17663,G__17664));
});
;})(G__17662))

break;
case "componentWillReceiveProps":
return ((function (G__17662){
return (function (props){
var c = this;
var G__17665 = c;
var G__17666 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17665,G__17666) : f.call(null,G__17665,G__17666));
});
;})(G__17662))

break;
case "shouldComponentUpdate":
return ((function (G__17662){
return (function (nextprops,nextstate){
var or__4668__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(c,old_argv,new_argv) : f.call(null,c,old_argv,new_argv));
}
}
});
;})(G__17662))

break;
case "componentWillUpdate":
return ((function (G__17662){
return (function (nextprops){
var c = this;
var G__17667 = c;
var G__17668 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17667,G__17668) : f.call(null,G__17667,G__17668));
});
;})(G__17662))

break;
case "componentDidUpdate":
return ((function (G__17662){
return (function (oldprops){
var c = this;
var G__17669 = c;
var G__17670 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17669,G__17670) : f.call(null,G__17669,G__17670));
});
;})(G__17662))

break;
case "componentWillMount":
return ((function (G__17662){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__17662))

break;
case "componentWillUnmount":
return ((function (G__17662){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__17662))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__17672__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__17672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17673__i = 0, G__17673__a = new Array(arguments.length -  0);
while (G__17673__i < G__17673__a.length) {G__17673__a[G__17673__i] = arguments[G__17673__i + 0]; ++G__17673__i;}
  args = new cljs.core.IndexedSeq(G__17673__a,0);
} 
return G__17672__delegate.call(this,args);};
G__17672.cljs$lang$maxFixedArity = 0;
G__17672.cljs$lang$applyTo = (function (arglist__17674){
var args = cljs.core.seq(arglist__17674);
return G__17672__delegate(args);
});
G__17672.cljs$core$IFn$_invoke$arity$variadic = G__17672__delegate;
return G__17672;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljsRender,null,cljs.core.cst$kw$reagentRender,null,cljs.core.cst$kw$render,null,cljs.core.cst$kw$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__17676 = f;
(G__17676["__reactDontBind"] = true);

return G__17676;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(key) : reagent.impl.component.dont_wrap.call(null,key)))){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4656__auto__ = wrap;
if(cljs.core.truth_(and__4656__auto__)){
return f;
} else {
return and__4656__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}
} else {
}

var or__4668__auto__ = wrap;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shouldComponentUpdate,null,cljs.core.cst$kw$componentWillMount,null,cljs.core.cst$kw$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.cst$kw$cljsRender,render_f,cljs.core.array_seq([cljs.core.cst$kw$render,cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.cst$kw$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4668__auto__ = (function (){var and__4656__auto__ = cljs.core.fn_QMARK_(f);
if(and__4656__auto__){
var or__4668__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (f["name"]);
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = (function (){var and__4656__auto__ = ((!((f == null)))?((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || (f.cljs$core$INamed$))?true:false):false);
if(and__4656__auto__){
return cljs.core.name(f);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4427__auto__ = cljs.core.cst$kw$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4427__auto__ == null)){
return fmap;
} else {
var cf = temp__4427__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.cst$kw$reagentRender,cf),cljs.core.cst$kw$componentFunction);
}
})();
var render_fun = (function (){var or__4668__auto__ = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$render_DASH_fun)], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__4668__auto__ = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):clojure.string.replace(name,/\$/,"."));
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.cst$kw$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__17686 = o;
(G__17686[cljs.core.name(k)] = v);

return G__17686;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$body)], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__17687__delegate = function (args){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling the result of create-class as a function is "),cljs.core.str("deprecated in "),cljs.core.str((res["displayName"])),cljs.core.str(". Use a vector "),cljs.core.str("instead.")].join(''));
} else {
}

return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__17687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17688__i = 0, G__17688__a = new Array(arguments.length -  0);
while (G__17688__i < G__17688__a.length) {G__17688__a[G__17688__i] = arguments[G__17688__i + 0]; ++G__17688__i;}
  args = new cljs.core.IndexedSeq(G__17688__a,0);
} 
return G__17687__delegate.call(this,args);};
G__17687.cljs$lang$maxFixedArity = 0;
G__17687.cljs$lang$applyTo = (function (arglist__17689){
var args = cljs.core.seq(arglist__17689);
return G__17687__delegate(args);
});
G__17687.cljs$core$IFn$_invoke$arity$variadic = G__17687__delegate;
return G__17687;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var elem = (function (){var G__17695 = (function (){var or__4668__auto__ = (function (){var G__17697 = c;
var G__17697__$1 = (((G__17697 == null))?null:(G__17697["_reactInternalInstance"]));
return G__17697__$1;
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return c;
}
})();
var G__17695__$1 = (((G__17695 == null))?null:(G__17695["_currentElement"]));
return G__17695__$1;
})();
var name = (function (){var G__17698 = elem;
var G__17698__$1 = (((G__17698 == null))?null:(G__17698["type"]));
var G__17698__$2 = (((G__17698__$1 == null))?null:(G__17698__$1["displayName"]));
return G__17698__$2;
})();
var path = (function (){var G__17699 = elem;
var G__17699__$1 = (((G__17699 == null))?null:(G__17699["_owner"]));
var G__17699__$2 = (((G__17699__$1 == null))?null:reagent$impl$component$component_path(G__17699__$1));
var G__17699__$3 = (((G__17699__$2 == null))?null:[cljs.core.str(G__17699__$2),cljs.core.str(" > ")].join(''));
return G__17699__$3;
})();
var res = [cljs.core.str(path),cljs.core.str(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__4668__auto__ = reagent.impl.component.component_path(c);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var G__17701 = c;
var G__17701__$1 = (((G__17701 == null))?null:(G__17701["cljsName"])());
return G__17701__$1;
}
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5440__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__17708(s__17709){
return (new cljs.core.LazySeq(null,(function (){
var s__17709__$1 = s__17709;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17709__$1);
if(temp__4425__auto__){
var s__17709__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17709__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__17709__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__17711 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__17710 = (0);
while(true){
if((i__17710 < size__5439__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__17710);
cljs.core.chunk_append(b__17711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__17714 = (i__17710 + (1));
i__17710 = G__17714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17711),reagent$impl$component$shallow_obj_to_map_$_iter__17708(cljs.core.chunk_rest(s__17709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17711),null);
}
} else {
var k = cljs.core.first(s__17709__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__17708(cljs.core.rest(s__17709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.cst$kw$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});
