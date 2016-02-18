// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e17129){if((e17129 instanceof Object)){
var e_SHARP_ = e17129;
return cljs.core.cst$kw$schema$spec$variant_SLASH_exception;
} else {
throw e17129;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$variant_SLASH_exception,guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)));
});})(guard_result,g,c))
,null)),cljs.core.cst$sym$throws_QMARK_));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
});})(g,c))
:c);
var temp__4423__auto__ = cljs.core.cst$kw$wrap_DASH_error.cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4423__auto__)){
var wrap_error = temp__4423__auto__;
return ((function (wrap_error,temp__4423__auto__,g,c,step){
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__4423__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__4423__auto____$1)){
var e = temp__4423__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
;})(wrap_error,temp__4423__auto__,g,c,step))
} else {
return step;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5208__auto__,k__5209__auto__){
var self__ = this;
var this__5208__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5208__auto____$1,k__5209__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5210__auto__,k17131,else__5211__auto__){
var self__ = this;
var this__5210__auto____$1 = this;
var G__17133 = (((k17131 instanceof cljs.core.Keyword))?k17131.fqn:null);
switch (G__17133) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17131,else__5211__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step(o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
var G__17134 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__17134) : self__.err_f.call(null,G__17134));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse(self__.options));
if(cljs.core.truth_(self__.post)){
return ((function (t,this$__$1){
return (function (x){
var or__4594__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
var v = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(v))){
return v;
} else {
var or__4594__auto____$1 = (function (){var G__17136 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?v:x);
return (self__.post.cljs$core$IFn$_invoke$arity$1 ? self__.post.cljs$core$IFn$_invoke$arity$1(G__17136) : self__.post.call(null,G__17136));
})();
if(cljs.core.truth_(or__4594__auto____$1)){
return or__4594__auto____$1;
} else {
return v;
}
}
}
});
;})(t,this$__$1))
} else {
return ((function (t,this$__$1){
return (function (x){
var or__4594__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
;})(t,this$__$1))
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5222__auto__,writer__5223__auto__,opts__5224__auto__){
var self__ = this;
var this__5222__auto____$1 = this;
var pr_pair__5225__auto__ = ((function (this__5222__auto____$1){
return (function (keyval__5226__auto__){
return cljs.core.pr_sequential_writer(writer__5223__auto__,cljs.core.pr_writer,""," ","",opts__5224__auto__,keyval__5226__auto__);
});})(this__5222__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5223__auto__,pr_pair__5225__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__5224__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post,self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17130){
var self__ = this;
var G__17130__$1 = this;
return (new cljs.core.RecordIter((0),G__17130__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5206__auto__){
var self__ = this;
var this__5206__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5202__auto__){
var self__ = this;
var this__5202__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5212__auto__){
var self__ = this;
var this__5212__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5203__auto__){
var self__ = this;
var this__5203__auto____$1 = this;
var h__5029__auto__ = self__.__hash;
if(!((h__5029__auto__ == null))){
return h__5029__auto__;
} else {
var h__5029__auto____$1 = cljs.core.hash_imap(this__5203__auto____$1);
self__.__hash = h__5029__auto____$1;

return h__5029__auto____$1;
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5204__auto__,other__5205__auto__){
var self__ = this;
var this__5204__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4582__auto__ = other__5205__auto__;
if(cljs.core.truth_(and__4582__auto__)){
var and__4582__auto____$1 = (this__5204__auto____$1.constructor === other__5205__auto__.constructor);
if(and__4582__auto____$1){
return cljs.core.equiv_map(this__5204__auto____$1,other__5205__auto__);
} else {
return and__4582__auto____$1;
}
} else {
return and__4582__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5217__auto__,k__5218__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$err_DASH_f,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$options,null], null), null),k__5218__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5217__auto____$1),self__.__meta),k__5218__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5218__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5215__auto__,k__5216__auto__,G__17130){
var self__ = this;
var this__5215__auto____$1 = this;
var pred__17137 = cljs.core.keyword_identical_QMARK_;
var expr__17138 = k__5216__auto__;
if(cljs.core.truth_((pred__17137.cljs$core$IFn$_invoke$arity$2 ? pred__17137.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__17138) : pred__17137.call(null,cljs.core.cst$kw$pre,expr__17138)))){
return (new schema.spec.variant.VariantSpec(G__17130,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17137.cljs$core$IFn$_invoke$arity$2 ? pred__17137.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$options,expr__17138) : pred__17137.call(null,cljs.core.cst$kw$options,expr__17138)))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__17130,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17137.cljs$core$IFn$_invoke$arity$2 ? pred__17137.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$err_DASH_f,expr__17138) : pred__17137.call(null,cljs.core.cst$kw$err_DASH_f,expr__17138)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__17130,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17137.cljs$core$IFn$_invoke$arity$2 ? pred__17137.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post,expr__17138) : pred__17137.call(null,cljs.core.cst$kw$post,expr__17138)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__17130,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5216__auto__,G__17130),null));
}
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5220__auto__){
var self__ = this;
var this__5220__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post,self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5207__auto__,G__17130){
var self__ = this;
var this__5207__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__17130,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5213__auto__,entry__5214__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5214__auto__)){
return cljs.core._assoc(this__5213__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5214__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5213__auto____$1,entry__5214__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$options,cljs.core.cst$sym$err_DASH_f,cljs.core.cst$sym$post], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__5242__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__5242__auto__,writer__5243__auto__){
return cljs.core._write(writer__5243__auto__,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__17132){
return (new schema.spec.variant.VariantSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__17132),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__17132),cljs.core.cst$kw$err_DASH_f.cljs$core$IFn$_invoke$arity$1(G__17132),cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(G__17132),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17132,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], 0)),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var args17141 = [];
var len__5652__auto___17144 = arguments.length;
var i__5653__auto___17145 = (0);
while(true){
if((i__5653__auto___17145 < len__5652__auto___17144)){
args17141.push((arguments[i__5653__auto___17145]));

var G__17146 = (i__5653__auto___17145 + (1));
i__5653__auto___17145 = G__17146;
continue;
} else {
}
break;
}

var G__17143 = args17141.length;
switch (G__17143) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17141.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(pre,options,err_f,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__4594__auto__ = err_f;
if(cljs.core.truth_(or__4594__auto__)){
return or__4594__auto__;
} else {
return (cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f,post);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4;
